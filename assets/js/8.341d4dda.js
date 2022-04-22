(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{405:function(a,n,t){"use strict";t.r(n);var s=t(56),e=Object(s.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"代码分割"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码分割"}},[a._v("#")]),a._v(" 代码分割")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("写到一块打包文件会很大，加载时间很长\n\n\n修改了业务代码，重新加载我们页面，还要再次加载一次 lodash 的内容。\n")])])]),t("h3",{attrs:{id:"分割之后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分割之后"}},[a._v("#")]),a._v(" 分割之后")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("拆分成两个文件,main.js ----\x3e  main.js(1MB) 和 lodash.js(1MB)\n\n不需要加载一个2MB文件， 可以同时并行加载 1MB 和 1MB 两个文件\n\n页面逻辑变更，不需要重新加载 lodash 文件， 缓存， 只需要加载业务代码。\n")])])]),t("h3",{attrs:{id:"code-splitting-代码分割"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#code-splitting-代码分割"}},[a._v("#")]),a._v(" Code Splitting 代码分割")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("对代码进行拆分， 性能更好一些\n没有 webpack ， 通过对代码自己的拆分。\n本质上和 webpack 没有关系的。\n\n\nwebpack 有一些插件 很容易进行分割。\n做代码分割非常的简单\n\n\n现在的代码分割是我们手动做的，不够智能\n\nwebpack 怎么自动的帮助我们做\n")])])]),t("h3",{attrs:{id:"分割"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分割"}},[a._v("#")]),a._v(" 分割")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("webpack 在做同步性代码的时候，会分析代码，去自动的做代码分割\n\n异步加载的代码，webpack 也会做一个代码分割。\n\nwebpack 代码分割，一种是借助 同步代码，做一个代码分割。\n\n第二种是异步的代码也会被打包进入一个\n\n\nwebpack 中做代码分割， \n同步代码，只需要在 webpack.common.js 中做配置即可\n\n异步代码，import : 异步代码 ， 无需做任何的配置，会自动的进行代码的分割\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);