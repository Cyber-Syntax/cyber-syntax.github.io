#!/bin/bash
# symlink.sh - create manual symlinks for dev and blog from stow repo to published vault
set -euo pipefail

# Variables (edit these if you keep different paths)
SOURCE_DIR="$HOME/Documents/my-repos/cyber-syntax.github.io"
DEV_DIR="$SOURCE_DIR/dev"
BLOG_DIR="$SOURCE_DIR/blog"

TARGET_DIR="$HOME/Documents/obsidian/main-vault/published"
DEV_TARGET="$TARGET_DIR/dev"
BLOG_TARGET="$TARGET_DIR/blog"

CONTENT_DIRS=(dev blog)

# Help message
show_help() {
  cat <<EOF
Usage: setup.sh [OPTION]

Options:
  --setup       Copy content from published vault into stow repo (preview + confirm)
  --deploy      Dry-run then confirm deploy: create/replace symlinks published/{dev,blog}
  --dry-run     Show the actions that would run (no changes)
  --help        Show this help message
EOF
}

# Preview what would be copied from vault to repo (original setup behavior)
preview_move() {
  echo "[+] Preview of folders to be copied from vault to stow repo:"
  echo "[+] Target (vault) directory: $TARGET_DIR"
  echo "[+] Source (stow repo) directory: $SOURCE_DIR"
  for dir in "${CONTENT_DIRS[@]}"; do
    SRC="$TARGET_DIR/$dir"
    DEST="$SOURCE_DIR/$dir"
    if [ -d "$SRC" ]; then
      echo "  ✓ $SRC -> $DEST"
    else
      echo "  ✗ $SRC -> $DEST (source not found)"
    fi
  done
}

# Confirm and perform setup (copy from published vault -> repo)
confirm_setup() {
  printf "Do you want to proceed with copying files from vault to stow repo? [y/N]: "
  read -r answer
  case "$answer" in
  [Yy]*) setup ;;
  *)
    echo "[!] Setup aborted by user."
    exit 1
    ;;
  esac
}

setup() {
  echo "[+] Copying folders from published vault to stow repo..."
  for dir in "${CONTENT_DIRS[@]}"; do
    SRC="$TARGET_DIR/$dir"
    DEST="$SOURCE_DIR/$dir"
    if [ -d "$SRC" ]; then
      echo "[+] Copying $SRC -> $DEST"
      rm -rf "$DEST"
      cp -a "$SRC" "$DEST"
    else
      echo "[!] Skipping $SRC (not found)"
    fi
  done
  echo "[+] Setup complete."
}

# Utility: compute absolute canonical path of source for comparison
abs_path() {
  # readlink -f is GNU; acceptable on Linux/NixOS
  readlink -f -- "$1"
}

# Dry-run: show what would be done to create symlinks (no changes)
dry_run() {
  echo "[+] Running dry-run (no changes). Planned actions:"
  echo "  Target published dir: $TARGET_DIR"
  for dir in "${CONTENT_DIRS[@]}"; do
    SRC="$SOURCE_DIR/$dir"
    DEST="$TARGET_DIR/$dir"

    echo "----"
    if [ ! -e "$SRC" ]; then
      echo "  [MISSING SOURCE] $SRC does not exist -> SKIP"
      continue
    fi

    if [ -L "$DEST" ]; then
      current="$(abs_path "$DEST")"
      target="$(abs_path "$SRC")"
      if [ "$current" = "$target" ]; then
        echo "  [OK] Symlink exists and points to source: $DEST -> $current"
      else
        echo "  [REPLACE] Symlink exists but points to $current (will remove and link to $target)"
      fi
    elif [ -e "$DEST" ]; then
      echo "  [BACKUP] Real file/dir exists at $DEST (will be moved to ${DEST}.bak.<ts>)"
    else
      echo "  [CREATE] Will create symlink: $DEST -> $SRC"
    fi
  done
  echo "----"
}

# Deploy: create/replace symlinks with safe backups
deploy() {
  echo "[+] Deploying symlinks to $TARGET_DIR"
  mkdir -p "$TARGET_DIR"

  for dir in "${CONTENT_DIRS[@]}"; do
    SRC="$SOURCE_DIR/$dir"
    DEST="$TARGET_DIR/$dir"

    if [ ! -e "$SRC" ]; then
      echo "[!] Source missing: $SRC — skipping $dir"
      continue
    fi

    if [ -L "$DEST" ]; then
      # existing symlink
      current="$(abs_path "$DEST")"
      target="$(abs_path "$SRC")"
      if [ "$current" = "$target" ]; then
        echo "[+] $DEST already a correct symlink -> $current"
        continue
      else
        echo "[!] Removing old symlink $DEST -> $current"
        rm -- "$DEST"
      fi
    elif [ -e "$DEST" ]; then
      # real file or directory exists — back it up
      BACKUP="${DEST}.bak.$(date +%s)"
      echo "[!] Backing up $DEST -> $BACKUP"
      mv -- "$DEST" "$BACKUP"
    fi

    # create symlink (absolute)
    ln -s -- "$SRC" "$DEST"
    echo "[+] Created symlink: $DEST -> $SRC"
  done

  echo "[+] Deployment finished."
}

confirm_deploy() {
  dry_run
  printf "Do you want to proceed with actual deployment (create/replace symlinks)? [y/N]: "
  read -r answer
  case "$answer" in
  [Yy]*) deploy ;;
  *)
    echo "[!] Deployment aborted by user."
    exit 1
    ;;
  esac
}

# CLI
if [ $# -eq 0 ]; then
  show_help
  exit 0
fi

case "$1" in
--setup)
  preview_move
  confirm_setup
  ;;
--deploy) confirm_deploy ;;
--dry-run) dry_run ;;
--help) show_help ;;
*)
  echo "[!] Unknown option: $1"
  show_help
  exit 1
  ;;
esac
