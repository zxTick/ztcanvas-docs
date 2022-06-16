import { DefaultTheme, defineConfig } from "vitepress";
import { sidebars } from "./data";

export default defineConfig({
  title: "ztcanvas",
  description: "a framework to help you create your own canvas application",
  lastUpdated: true,
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/logo.png",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Tick Wu and Alex Zhang",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/zxTick/ztcanvas" },
    ],
    editLink: {
      pattern:
        "https://github.com/zxTick/ztcanvas-docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    nav: getNavs(),
    sidebar: getSidebar()
  },
});


function getSidebar() {
  return sidebars
}

function getNavs() {
  const navs: DefaultTheme.NavItem[] = []
  Object.keys(sidebars).forEach(key => {
    const item = sidebars[key][0]
    navs.push({
      text: item.text,
      items: item.items
    })
  })
  return navs
}
