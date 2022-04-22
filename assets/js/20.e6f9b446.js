(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{418:function(t,s,a){"use strict";a.r(s);var e=a(56),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[t._v("#")]),t._v(" babel")]),t._v(" "),a("p",[t._v("因为 ES6 的兼容性，导致在开发中不能够全面的使用 ES6 语法。")]),t._v(" "),a("p",[t._v("我们可以将 ES6 编写的代码转换成目前已经支持良好的 ES5 代码。")]),t._v(" "),a("ol",[a("li",[t._v("把 ES6 语法用 ES5 实现，例如 ES6 的 class 语法用 ES5 prototype 实现。")]),t._v(" "),a("li",[t._v("给新的 API 注入 polyfill, promise 这种挂在到全局对象上。")])]),t._v(" "),a("h3",{attrs:{id:"babel-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-2"}},[t._v("#")]),t._v(" BaBel")]),t._v(" "),a("p",[t._v("Babel 可以完成上面的两种事情。 BaBel 是 js 的一个编译器，能够将 Es6 代码转为 ES5 代码，其实 Babel 只是在 源代码转换为抽象语法书 AST 的时候，把语法转换为 ES5 的抽象语法树,而不用担心兼容性问题, 通过插件机制根据需求灵活的扩展。在 Babel 执行编译的过程中，会从项目根目录下的 .babelrc 文件读取配置。.babelrc 是一个 JSON 格式的文件。")]),t._v(" "),a("h3",{attrs:{id:"presets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#presets"}},[t._v("#")]),t._v(" Presets")]),t._v(" "),a("p",[t._v("presets 属性告诉 Babel 要转换的源码使用了哪些新的语法特性, 一个 Presets 对一组新语法特性提供支持. Presets 其实是一组 Plugins 的集合，每一个 Plugin 完成一个新语法的转换工作。Presets 是按照 ECMAScript 草案来组织的，通常可以分为以下三大类：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("已经被写入 ECMAScript 标准里的特性，由于之前每年都有新特性被加入到标准里")]),t._v(" "),a("ul",[a("li",[t._v("es2015 包含在 2015 里加入的新特性。")]),t._v(" "),a("li",[t._v("es2016 包含在 2016 里加入的新特性。")]),t._v(" "),a("li",[t._v("es2017 包含在 2017 里加入的新特性。")]),t._v(" "),a("li",[t._v("env 包含当前所有 ECMAScript 标准里的最新特性。")])])]),t._v(" "),a("li",[a("p",[t._v("被社区提出来但还未被写入 ECMAScript 标准里的特性。")]),t._v(" "),a("ul",[a("li",[t._v("stage0 只是一个想法，有 Babel 插件实现了对这些特性的支持")]),t._v(" "),a("li",[t._v("stage1 值得被纳入标准的特性；")]),t._v(" "),a("li",[t._v("stage2 该特性规范已经被起草，将会被纳入标准里；")]),t._v(" "),a("li",[t._v("stage3 该特性规范已经定稿，各大浏览器厂商和 Node.js 社区开始着手实现；")]),t._v(" "),a("li",[t._v("stage4 在接下来的一年将会加入到标准里去。")])])])]),t._v(" "),a("h3",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" Plugins")]),t._v(" "),a("p",[t._v("plugins 属性告诉 Babel 要使用哪些插件，插件可以控制如何转换代码。")]),t._v(" "),a("h3",{attrs:{id:"webpack-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-配置"}},[t._v("#")]),t._v(" webpack 配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.js$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("presets")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("'@babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("preset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("babel-loader 不是用来 ES6 转译的, 它充其量只是一个打通 babel 与 webpack 的一个 桥梁 ，首先两者得建立一个连接。")]),t._v(" "),a("p",[t._v("@babel/preset-env 是用来将 ES6 的语法转为 ES5的。比如 let、const 转为 var； ()=>{} 转为 function () {} ES5函数。")]),t._v(" "),a("p",[t._v("但是 @babel/preset-env 不会转换 新的API, 以及一些在全局对象上的方法 都不会进行转码。 比如 Iterator, Generator, Set, Maps, Proxy, Reflect,Symbol,Promise 等全局对象，以及 Object.assign ， Array.from 全局对象的方法，都不会进行转码。")]),t._v(" "),a("p",[t._v("虽然也是进行了语法翻译，但是只是翻译了一部分 ES6 特性。在低版本依赖会报错。")]),t._v(" "),a("h3",{attrs:{id:"polyfill-填充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#polyfill-填充"}},[t._v("#")]),t._v(" polyfill (填充)")]),t._v(" "),a("p",[t._v("我们可以借助 @babel/polyfill 来对这些 API 进行填充。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save @babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("polyfill\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/polyfill"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 引入到我们使用了 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ES6")]),t._v(" 特性的文件。\n")])])]),a("p",[t._v("这样子，我们就可以了看到，API 都被 polyfill 好打包输出到 bundle.js 文件。babel 会将所有的 polyfill 全部引入，这样会导致结果的包大小非常大，而我们可能仅仅需要一个方法而已.")]),t._v(" "),a("h3",{attrs:{id:"按需加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按需加载"}},[t._v("#")]),t._v(" 按需加载")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/preset-env'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useBuiltIns")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'usage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"debug"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("我们通过 useBuiltIns: 'usage' 配置，就可以做到 按需转译。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("babel 的 polyfill 机制是，对于例如 Array.from 等静态方法，直接在 global.Array 上添加；对于例如 includes 等实例方法，直接在 global.Array.prototype 上添加。这样直接修改了全局变量的原型，有可能会带来意想不到的问题。污染全局.")])]),t._v(" "),a("li",[a("p",[t._v("babel 经常会使用一些辅助函数来帮忙转。")])]),t._v(" "),a("li",[a("p",[t._v("class 语法中，babel 自定义了 _classCallCheck 这个函数来辅助；typeof 则是直接重写了一遍，自定义了 _typeof 这个函数来辅助。这些函数叫做 helpers。如果一个项目中有100个文件，其中每个文件都写了一个 class，那么这个项目最终打包的产物里就会存在100个 _classCallCheck 函数，这样肯定是不好的。")])])]),t._v(" "),a("h3",{attrs:{id:"组件库-类库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件库-类库"}},[t._v("#")]),t._v(" 组件库，类库")]),t._v(" "),a("p",[t._v("为了不污染全局对象和内置的对象原型，又想要在低版本浏览器运行，可以配合使用babel-runtime 和 @babel/plugin-transform-runtime。")]),t._v(" "),a("p",[t._v("比如当前运行环境不支持 promise，可以通过引入 babel-runtime/core-js/promise 来获取 promise。")]),t._v(" "),a("p",[t._v("在一开始的时候，只是存在 babel-runtime，用起来不方便，但代码中引入 helper 函数，意味着不能页面间共享，造成打包完很多重复的 helper 代码。")]),t._v(" "),a("p",[t._v("Babel又开发了 @babel/plugin-transform-runtime，这个模块会将我们的代码重写，然后引入 helper 函数。这样子就避免了重复打包代码和手动引入的繁琐。")]),t._v(" "),a("p",[t._v("@babel/plugin-transform-runtime 的作用就是转译代码，转译后的代码中可能会引入 @babel/runtime-corejs2 里面的模块。@babel/runtime-corejs2 需要被打包到最终产物里在浏览器中运行")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/plugin-transform-runtime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"corejs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("指定 runtime-corejs 的版本，目前有 2 3 两个版本，默认值是 false，不会 polyfill 提案。")]),t._v(" "),a("p",[t._v("使用了 @babel/plugin-transform-runtime 之后")]),t._v(" "),a("ol",[a("li",[t._v("API 从直接修改原型改为从一个统一的模块中引入，避免了对全局变量及其原型的污染。")]),t._v(" "),a("li",[t._v("helpers 从之前的直接定义改为了从一个统一的模块中引入,使得打包的结果中每个 helper 只会存在一个。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);