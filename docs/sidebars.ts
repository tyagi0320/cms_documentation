import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Architecture',
      items: ['architecture/overview'],
    },
    {
      type: 'category',
      label: 'Backend',
      items: [
        'backend/architecture',
        'backend/authentication',
        'backend/database',
        'backend/services',
        'backend/moderation',
        'backend/rag',
        'backend/api-reference',
      ],
    },
    {
      type: 'category',
      label: 'Frontend',
      items: [
        'frontend/overview',
        'frontend/components',
        'frontend/pages',
        'frontend/state',
      ],
    },
    {
      type: 'category',
      label: 'Live Updates',
      items: ['live updates/websockets'],
    },
    {
      type: 'category',
      label: 'Storage',
      items: ['storage/azure'],
    },
    'deployment',
    'glossary',
  ],
};

export default sidebars;