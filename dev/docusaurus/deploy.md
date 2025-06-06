---
sidebar_position: 1
title: Docusaurus deploy
last_update:
  date: 06/06/2025
tags:
  - docusaurus
---

<!-- TOC -->
## How to localhost

- cd my-website
- npm run start

## If you want to add new blog, docs

- You are gonna use main branch to add new pages.
- gh-pages only using for static web view.
- You need to build and deploy again.

## How to use docusaurus with github pages?

1. `npx create-docusaurus@latest folder_name`
2. Change organization name, project name etc.
    - Add gh-pages deployment branch, trailingslah:true
3.Install

```bash
    yarn install
```

4. Build

```bash
    yarn build
```

5. Create personal access token or SSH setup for github.
6. Deploy with SSH or token.

```bash
USE_SSH=true yarn deploy
# or
GIT_USER=<gh_personal_access_token> yarn deploy
```

7. Change github repository page view main to gh-pages from repository
`settings -> pages(left sidebar) -> branch` '`gh-pages` and `/root` than save.

## How to update?

- `yarn build`
- `USE_SSH=true yarn deploy`
- or
- `GIT_USER=<gh_personal_access_token> yarn deploy`
or make a alias on the .zshrc:

```
alias dinodeploy="yarn build & USE_SSH=true yarn deploy"
```

and use only `dinodeploy` on your repository path

## Additional Resource

- Docusourus [Github page](https://github.com/facebook/docusaurus/blob/main/website/docs/api/misc/_category_.yml)
- Tutorial [guide](https://docusaurus.io/docs/sidebar/multiple-sidebars)

<!-- /TOC -->
