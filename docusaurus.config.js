// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Cyber-Syntax Portfolio",
  // tagline: "I love linux.",
  favicon: "img/favicon.ico",

  //plugins: ["docusaurus-plugin-sass"],

  // Set the production url of your site here
  url: "https://cyber-syntax.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // Cyber-Syntax/
  baseUrl: "/",

  projectName: "cyber-syntax.github.io", // Usually your repo name.
  organizationName: "Cyber-Syntax", // Usually your GitHub org/user name.
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Cyber-Syntax/cyber-syntax.github.io",
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        blog: {
          postsPerPage: 5,
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Cyber-Syntax/cyber-syntax.github.io",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "nixos",
        path: "nixos",
        routeBasePath: "nixos",
        sidebarPath: "./sidebars.js",
        // ... other options
        editUrl: "https://github.com/Cyber-Syntax/cyber-syntax.github.io",
        // Equivalent to `enableUpdateBy`.
        showLastUpdateAuthor: true,
        // Equivalent to `enableUpdateTime`.
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "dev",
        path: "dev",
        routeBasePath: "dev",
        sidebarPath: "./sidebars.js",
        // ... other options
        editUrl: "https://github.com/Cyber-Syntax/cyber-syntax.github.io",
        // Equivalent to `enableUpdateBy`.
        showLastUpdateAuthor: true,
        // Equivalent to `enableUpdateTime`.
        showLastUpdateTime: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: "img/docusaurus-social-card.jpg",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Cyber-Syntax",
        hideOnScroll: false,
        //logo: {
        //  alt: "My Site Logo",
        //  src: "img/logo.svg",
        //},
        items: [
          // NAVBAR
          { type: "search", position: "right" },
          { to: "educations", label: "Education", position: "left"},
          { to: "projects", label: "Projects", position: "left" },
          { to: "skills", label: "Skills", position: "left" },
          {
            to: "nixos",
            position: "right",
            label: "NixOS",
          },
          {
            to: "dev",
            position: "right",
            label: "Developer",
          },
          {
            type: "docSidebar",
            sidebarId: "defaultSidebar",
            position: "right",
            label: "Wiki",
          },
          {
            type: "localeDropdown",
            position: "right",
            dropdownItemsAfter: [
              {
                to: "https://github.com/Cyber-Syntax/cyber-syntax.github.io",
                label: "Help me to translate",
              },
            ],
          },

          { to: "/blog", label: "Blog", position: "left" },
          				{
					'aria-label': 'GitHub Repository',
					'className': 'header--github-link',
					'href': 'https://github.com/Cyber-Syntax',
					'position': 'right',
				},
          // {
          //   // aria-label: "GitHub repository",
          //   href: "https://github.com/Cyber-Syntax",
          //   label: "GitHub",
          //   position: "right",
          //   className: "header--github-link",
          // },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   //{
        //   //  title: "Docs",
        //   //  items: [
        //   //    {
        //   //      label: "Wiki",
        //   //      //to: "/docs",
        //   //    },
        //   //  ],
        //   //},
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "Mastodon",
        //         href: "https://mastodon.social/@priv4cy",
        //       },
        //       {
        //         label: "X",
        //         href: "https://x.com/cyb_serif",
        //       },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //     {
        //       href: "https://github.com/Cyber-Syntax",
        //       label: "GitHub",
        //       position: "right",
        //       className: "header--github-link",
        //       "aria-label": "GitHub repository",
        //     },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Cyber-Syntax Personal Portfolio, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.oneDark,
      },
    }),
};

export default config;
