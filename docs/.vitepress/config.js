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
    ["link", { rel: "icon", href: "/1.jpg" }],
  ],
  themeConfig: {
    nav: [{ text: "首页", link: "/" }],
    search: true,
    algolia: {
      appKey: "",
      indexName: "",
      searchParameters: { faeFilters: ["tags:guide,api"] },
    },
  },
  title: "HBA站点  😉",
  description: "胡博安的站点.",
  lang: "zh-CN",
};
