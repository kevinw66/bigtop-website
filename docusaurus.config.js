// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache Bigtop',
  tagline: 'Packaging and Testing Apache Hadoop ecosystem.',
  favicon: 'img/favicon.ico',


  // Set the production url of your site here
  url: 'https://kevinw66.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/bigtop-website/',

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
        title: 'Apache Bigtop',
        logo: {
          alt: 'Apache Bigtop Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'Releases',
            items: [
              {
                label: 'Release Notes',
                href: 'https://bigtop.apache.org/release-notes.html',
              },
              {
                label: '3.0.0',
                href: 'https://archive.apache.org/dist/bigtop/bigtop-3.0.0/',
              },
              {
                label: '1.5.0',
                href: 'https://archive.apache.org/dist/bigtop/bigtop-1.5.0/',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Documentation',
            items: [
              {
                type: 'doc',
                docId: 'getting-started/quickstart-guide',
                label: 'Bigtop',
              },
              {
                type: 'doc',
                docsPluginId: 'bigtop-manager',
                docId: 'first-doc',
                label: 'Bigtop Manager',
              }
            ]
          },{
            type: 'dropdown',
            position: 'left',
            label: 'Project Information',
            items: [
              {
                label: 'Powered by',
                href: 'https://cwiki.apache.org/confluence/display/BIGTOP/Powered+By+Bigtop',
              },
              {
                label: 'Who we are',
                href: 'https://bigtop.apache.org/team-list.html',
              },
              {
                label: 'Feedback',
                href: 'https://bigtop.apache.org/issue-tracking.html',
              },
              {
                label: 'JIRA',
                href: 'https://issues.apache.org/jira/projects/BIGTOP/issues',
              },
              {
                label: 'Blog',
                href: 'https://blogs.apache.org/bigtop/',
              },
              {
                label: 'Maling List',
                href: 'https://bigtop.apache.org/mail-lists.html',
              },
              {
                label: 'IRC Channel',
                href: 'https://bigtop.apache.org/irc-channel.html',
              },
            ],
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          { type: 'docsVersionDropdown', docsPluginId: 'default', position: 'right' },
          { type: 'docsVersionDropdown', docsPluginId: 'bigtop-manager', position: 'right'},
          {
            href: 'https://gitee.com/openeuler/bigtop-manager',
            label: 'Gitee',
            position: 'right',
          },
          {
            type: 'dropdown',
            position: 'right',
            label: 'Apache Software Foundation',
            items: [
              {
                label: 'How Apache Works',
                href: 'https://www.apache.org/foundation/how-it-works.html',
              },
              {
                label: 'Foundation',
                href: 'https://www.apache.org/foundation/',
              },
              {
                label: 'Sponsering Apache',
                href: 'https://www.apache.org/foundation/sponsorship.html',
              },
              {
                label: 'Thanks',
                href: 'https://www.apache.org/foundation/thanks.html',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
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
