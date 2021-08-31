(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{419:function(n,t,e){"use strict";e.r(t),t.default="# 快速上手\n\n## 获取 Apache ECharts\n\nApache ECharts 支持多种下载方式，可以在下一篇教程[安装](${lang}/basics/download)中查看所有方式。这里，我们以从 [jsDelivr](https://www.jsdelivr.com/package/npm/echarts) CDN 上获取为例，介绍如何快速安装。\n\n在 [https://www.jsdelivr.com/package/npm/echarts](https://www.jsdelivr.com/package/npm/echarts) 选择 `dist/echarts.js`，点击并保存为 `echarts.js` 文件。\n\n> 关于这些文件的介绍，可以在下一篇教程[安装](${lang}/basics/download)中了解更多信息。\n\n## 引入 Apache ECharts\n\n在刚才保存 `echarts.js` 的目录新建一个 `index.html` 文件，内容如下：\n\n```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    \x3c!-- 引入刚刚下载的 ECharts 文件 --\x3e\n    <script src=\"echarts.js\"><\/script>\n  </head>\n</html>\n```\n\n打开这个 `index.html`，你会看到一片空白。但是不要担心，打开控制台确认没有报错信息，就可以进行下一步。\n\n## 绘制一个简单的图表\n\n在绘图前我们需要为 ECharts 准备一个定义了高宽的 DOM 容器。在刚才的例子 `</head>` 之后，添加：\n\n```html\n<body>\n  \x3c!-- 为 ECharts 准备一个定义了宽高的 DOM --\x3e\n  <div id=\"main\" style=\"width: 600px;height:400px;\"></div>\n</body>\n```\n\n然后就可以通过 [echarts.init](${mainSitePath}/api.html#echarts.init) 方法初始化一个 echarts 实例并通过 [setOption](${mainSitePath}/api.html#echartsInstance.setOption) 方法生成一个简单的柱状图，下面是完整代码。\n\n```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>ECharts</title>\n    \x3c!-- 引入刚刚下载的 ECharts 文件 --\x3e\n    <script src=\"echarts.min.js\"><\/script>\n  </head>\n  <body>\n    \x3c!-- 为 ECharts 准备一个定义了宽高的 DOM --\x3e\n    <div id=\"main\" style=\"width: 600px;height:400px;\"></div>\n    <script type=\"text/javascript\">\n      // 基于准备好的dom，初始化echarts实例\n      var myChart = echarts.init(document.getElementById('main'));\n\n      // 指定图表的配置项和数据\n      var option = {\n        title: {\n          text: 'ECharts 入门示例'\n        },\n        tooltip: {},\n        legend: {\n          data: ['销量']\n        },\n        xAxis: {\n          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']\n        },\n        yAxis: {},\n        series: [\n          {\n            name: '销量',\n            type: 'bar',\n            data: [5, 20, 36, 10, 10, 20]\n          }\n        ]\n      };\n\n      // 使用刚指定的配置项和数据显示图表。\n      myChart.setOption(option);\n    <\/script>\n  </body>\n</html>\n```\n\n这样你的第一个图表就诞生了！\n\n<md-example src=\"doc-example/getting-started\"></md-example>\n"}}]);