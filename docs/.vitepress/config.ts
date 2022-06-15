import { defineConfig } from "vitepress"

export default defineConfig({
  title: 'canvas-engine',
  description: 'a framework to help you create your own canvas application',
  lastUpdated: true,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  themeConfig: {
    logo: "/public/logo.png",
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Tick Wu and Alex Zhang'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zxTick/canvas-engine' },
    ],
    editLink: {
      pattern: 'https://github.com/zxTick/canvas-engine-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [{
            text: "Getting Started",
            link: "/guide/getting-started"
          }, {
            text: "Contribute Guide",
            link: "/guide/contribute"
          }]
        }
      ]
    }
  },
})
