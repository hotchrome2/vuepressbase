import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',

  theme: defaultTheme({
    logo: '/unnamedhero.png',
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // string - page file path
      '/bar/README.md',
    ],
    sidebar: [
      // SidebarItem
      {
        text: 'Foo',
        link: '/foo/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // string - page file path
          '/foo/bar.md',
        ],
      },
      // string - page file path
      '/guide/index.md',
    ],

    // sidebar: {
    //   '/guide/': [
    //     {
    //       text: 'Guide',
    //       children: ['/guide/README.md', '/guide/getting-started.md'],
    //     },
    //   ],
    //   '/reference/': [
    //     {
    //       text: 'VuePress Reference',
    //       collapsible: true,
    //       children: ['/reference/cli.md', '/reference/config.md'],
    //     },
    //     {
    //       text: 'Bundlers Reference',
    //       collapsible: true,
    //       children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
    //     },
    //   ],
    // },

  }),
})