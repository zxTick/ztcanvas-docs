import { DefaultTheme } from "vitepress";

export const sidebars: DefaultTheme.Sidebar = {
  "/guide/": [
    {
      text: "Guide",
      items: [
        {
          text: "Why ZTCanvas",
          link: "/guide/why",
        },
        {
          text: "Getting Started",
          link: "/guide/getting-started",
        }, {
          text: "CanvasEngine",
          link: "/guide/engine",
        },
        {
          text: "Contribute Guide",
          link: "/guide/contribute",
        },
      ],
    },
  ],
  "/shapes/": [
    {
      text: "Shape",
      items: [
        {
          text: "Rect",
          link: "/shapes/rect"
        }
      ]
    }
  ]
}
