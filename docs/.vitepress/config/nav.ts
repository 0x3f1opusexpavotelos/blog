import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'Dashboard',
    items: [
      { text: 'env-api', link: '/dashboard/env-api' },
      { text: 'Uptime Monitor', link: '/dashboard/uptime-monitor', },
    ],
    activeMatch: '/dashboard/'
  },
  { text: 'blog', link: '/blog' },
  {
    text: 'dotfiles',
    items: [
      { text: "config", link: '/dotfiles/config' },
      { text: "cli", link: '/dotfiles/cli' },
    ]
  },
  {
    text: '我的标签',
    link: '/tags',
    activeMatch: '/tags'
  },
  {
    text: '关于',
    items: [
      { text: '关于知识库', link: '/about/index', activeMatch: '/about/index' },
      { text: '关于我', link: '/about/me', activeMatch: '/about/me' }
    ],
    activeMatch: '/about/'
  },
];
