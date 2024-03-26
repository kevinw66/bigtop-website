// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bigtop Manager',
  tagline: 'Packaging and Testing Apache Hadoop ecosystem.',
  favicon: 'img/favicon.ico',

  // production url of site, modify later
  url: 'https://docusaurus-site.example.com',
  // pathname under which site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  // organizationName: 'apache', // Usually GitHub org/user name.
  // projectName: 'docusaurus', // Usually repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en','zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // later: pointer to our website repo.
          // editUrl: 'https://github.com/.../',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'bigtop-manager',
        path: 'bigtop-manager',
        routeBasePath: 'bigtop-manager',
        sidebarPath: './sidebarsBigtopManager.js',
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // image: 'img/social-card.jpg',
      navbar: {
        title: 'Bigtop',
        logo: {
          alt: 'Bigtop Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/docs/first-doc', label: 'bigtop', position: 'right'},
          { to: '/bigtop-manager/first-doc', label: 'bigtop-manager', position: 'right'},
          { type: 'docsVersionDropdown', docsPluginId: 'default', position: 'right' },
          { type: 'docsVersionDropdown', docsPluginId: 'bigtop-manager', position: 'right'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://gitee.com/openeuler/bigtop-manager',
            label: 'Gitee',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Gitee',
                href: 'https://gitee.com/openeuler/bigtop-manager',
              },
            ],
          },
        ],
        copyright: `Copyright © 2024 Bigtop Manager.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
