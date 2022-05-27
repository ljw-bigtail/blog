(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{633:function(s,t,a){"use strict";a.r(t);var e=a(10),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("常见的异常与处理方法。")]),s._v(" "),a("h2",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[s._v("#")]),s._v(" CSS")]),s._v(" "),a("h2",{attrs:{id:"javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[s._v("#")]),s._v(" Javascript")]),s._v(" "),a("h2",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[s._v("#")]),s._v(" Vue")]),s._v(" "),a("h3",{attrs:{id:"vue-devtools没有亮起来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-devtools没有亮起来"}},[s._v("#")]),s._v(" Vue DevTools没有亮起来")]),s._v(" "),a("p",[s._v("解决方法：Chrome打开扩展程序（chrome://extensions/），找到Vue.js devtools，点击详情，然后打开【允许访问文件网址】选项。")]),s._v(" "),a("p",[s._v("然后重新打开开发者工具即可。")]),s._v(" "),a("h3",{attrs:{id:"vue-devtools按钮亮了-但是在本项目中无法使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-devtools按钮亮了-但是在本项目中无法使用"}},[s._v("#")]),s._v(" Vue DevTools按钮亮了 但是在本项目中无法使用")]),s._v(" "),a("p",[s._v("解决方法"),a("a",{attrs:{href:"%E8%BF%98%E6%B2%A1%E5%AE%9E%E9%99%85%E4%BD%BF%E7%94%A8%E8%BF%87%EF%BC%8C%E6%97%A0%E6%B3%95%E8%AF%81%E6%98%8E%EF%BC%8C%E6%9D%A5%E6%BA%90%E4%BA%8E%E7%BD%91%E7%BB%9C%E6%94%B6%E9%9B%86"}},[s._v("^NoUse")]),s._v("：尝试在main.js中添加以下代码")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("win")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" any "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" window\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'development'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__VUE_DEVTOOLS_GLOBAL_HOOK__'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__VUE_DEVTOOLS_GLOBAL_HOOK__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("app\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[s._v("#")]),s._v(" TypeScript")]),s._v(" "),a("h3",{attrs:{id:"process等node相关变量在ts中提示异常-找不到名称-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process等node相关变量在ts中提示异常-找不到名称-process"}},[s._v("#")]),s._v(" process等node相关变量在ts中提示异常：找不到名称 “process”")]),s._v(" "),a("p",[s._v("解决方法：安装@types/node包")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i --save-dev @types/node\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[s._v("#")]),s._v(" Node")]),s._v(" "),a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("p",[s._v("除了带"),a("a",{attrs:{href:"%E8%BF%98%E6%B2%A1%E5%AE%9E%E9%99%85%E4%BD%BF%E7%94%A8%E8%BF%87%EF%BC%8C%E6%97%A0%E6%B3%95%E8%AF%81%E6%98%8E%EF%BC%8C%E6%9D%A5%E6%BA%90%E4%BA%8E%E7%BD%91%E7%BB%9C%E6%94%B6%E9%9B%86"}},[s._v("^NoUse")]),s._v("标记外的，均是已经验证过可用的。")])])}),[],!1,null,null,null);t.default=r.exports}}]);