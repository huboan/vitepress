module.exports = {
  base: "/",
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],
    ["meta", { name: "keywords", content: "vite vui" }],
    ["link", { rel: "icon", href: "/icon.png" }],
  ],
  themeConfig: {
    sidebar: {
      "/": [
        {
          text: "Git",
          link: "/Git/",
        },
      ],
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/Git/" },
    ],
    search: true,
    algolia: {
      apiKey: "cc54e9aff902fca0c0088f4f03d26bc2",
      indexName: "vitepress",
    },
  },
  title: "HBA站点  😉",
  description: "胡博安的站点.",
  lang: "zh-CN",
};
