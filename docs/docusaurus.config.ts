import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Options } from '@docusaurus/preset-classic'; 


const config: Config = {
  title: 'CMS Platform Docs',
  tagline: 'Full‑stack Content Management System',
  favicon: 'img/favicon.ico',

  url: 'https://cms-documentation.onrender.com',         
  baseUrl: '/',       
  organizationName: 'ChitwanRana',              
  projectName: 'Content-Management-System',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        //  Blog is completely removed
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Options,
    ],
  ],

  // Local Search Plugin (works offline, perfect for private repos)
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        docsRouteBasePath: '/docs',
        indexDocs: true,
        indexPages: false, // We only want docs indexed
        indexBlog: false,
      },
    ],
  ],

  // Markdown configurations & Mermaid for diagrams
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn', 
    },
  },

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CMS Platform',
      logo: {
        alt: 'CMS Logo',
        src: 'img/logo.svg', // Replace with your actual logo if you have one
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/ChitwanRana/Content-Management-System',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/intro',
            },
            {
              label: 'Architecture',
              to: '/docs/architecture/overview',
            },
            {
              label: 'API Reference',
              to: '/docs/backend/api-reference',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ChitwanRana/Content-Management-System',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'ChitwanRana',
              href: 'https://github.com/ChitwanRana',
            },
             {
              label: 'HarshitTyagi',
              href: 'https://github.com/tyagi0320',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CMS Platform. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Config['themeConfig'],
};

export default config;
