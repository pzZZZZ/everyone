webpackJsonp([0,24],{34:function(o,t,e){t=o.exports=e(1)(),t.push([o.id,".color-box{width:33.3%;min-width:33.3%;display:-ms-flexbox;display:flex;margin-bottom:16px}.color-box .color-container{margin-left:16px;margin-right:16px;margin-top:4px}.color-box h2.title{text-align:left;font-size:24px;margin:0;margin-bottom:12px;padding:0;font-weight:400;line-height:1}.color-box h2.title span{font-size:16px;color:#999;font-weight:400;margin-left:4px}.color-box p.all{font-size:14px}.color-box .block{width:100px;height:100px;min-width:100px;border-radius:8px}@media screen and (max-width:1024px){.color-box{width:50%;min-width:50%}}","",{version:3,sources:["/./doc/components/color-box.vue"],names:[],mappings:"AACA,WAAW,YAAY,gBAAgB,oBAAoB,aAAa,kBAAkB,CACzF,AACD,4BAA4B,iBAAiB,kBAAkB,cAAc,CAC5E,AACD,oBAAoB,gBAAgB,eAAe,SAAS,mBAAmB,UAAU,gBAAgB,aAAa,CACrH,AACD,yBAAyB,eAAe,WAAW,gBAAgB,eAAe,CACjF,AACD,iBAAiB,cAAc,CAC9B,AACD,kBAAkB,YAAY,aAAa,gBAAgB,iBAAiB,CAC3E,AACD,qCACA,WAAW,UAAU,aAAa,CACjC,CACA",file:"color-box.vue",sourcesContent:["\n.color-box{width:33.3%;min-width:33.3%;display:-ms-flexbox;display:flex;margin-bottom:16px\n}\n.color-box .color-container{margin-left:16px;margin-right:16px;margin-top:4px\n}\n.color-box h2.title{text-align:left;font-size:24px;margin:0;margin-bottom:12px;padding:0;font-weight:400;line-height:1\n}\n.color-box h2.title span{font-size:16px;color:#999;font-weight:400;margin-left:4px\n}\n.color-box p.all{font-size:14px\n}\n.color-box .block{width:100px;height:100px;min-width:100px;border-radius:8px\n}\n@media screen and (max-width:1024px){\n.color-box{width:50%;min-width:50%\n}\n}"],sourceRoot:"webpack://"}])},35:function(o,t,e){t=o.exports=e(1)(),t.push([o.id,".color{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}","",{version:3,sources:["/./node_modules/.0.5.1@vue-markdown-loader/.cache/color-1.vue"],names:[],mappings:"AACA,OAAO,oBAAoB,aAAa,mBAAmB,cAAc,CACxE",file:"color-1.vue",sourcesContent:["\n.color{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap\n}"],sourceRoot:"webpack://"}])},57:function(o,t,e){o.exports=e(372)},77:function(o,t,e){var n=e(34);"string"==typeof n&&(n=[[o.id,n,""]]);e(2)(n,{});n.locals&&(o.exports=n.locals)},86:function(o,t,e){var n=e(35);"string"==typeof n&&(n=[[o.id,n,""]]);e(2)(n,{});n.locals&&(o.exports=n.locals)},174:function(o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{color:String,name:String,content:String},computed:{},mounted:function(){},methods:{},components:{}}},181:function(o,t,e){"use strict";function n(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(t,"__esModule",{value:!0});var r=e(419),i=n(r);t.default={components:{colorBox:i.default},data:function(){return{initColor:[{name:"gray",color:"#ccc",content:"一般用在失效或者不可点击区域。"},{name:"blue",color:"#47b8e0",content:"一般用在成功提示或者信息提示。"},{name:"green",color:"#67D5B5",content:"一般用在成功提示。"},{name:"yellow",color:"#ffc952",content:"一般用在提示。"},{name:"red",color:"#ff7473",content:"一般用在警告。"},{name:"bColor",color:"#e9e9e9",content:"用作分割线，或者边框。"},{name:"pColor",color:"#666",content:"默认字体颜色。"}]}}}},372:function(o,t,e){var n,r;e(86),n=e(181);var i=e(473);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,o.exports=n},419:function(o,t,e){var n,r;e(77),n=e(174);var i=e(457);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,o.exports=n},457:function(o,t){o.exports={render:function(){var o=this,t=(o.$createElement,o._c);return t("div",{staticClass:"color-box"},[t("div",{staticClass:"block",style:{background:o.color}}),o._v(" "),t("div",{staticClass:"color-container"},[t("h2",{staticClass:"title"},[o._v(o._s(o.name)),t("span",[o._v(o._s(o.color))])]),o._v(" "),t("p",{staticClass:"all"},[o._v(o._s(o.content))])])])},staticRenderFns:[]}},473:function(o,t){o.exports={render:function(){var o=this,t=(o.$createElement,o._c);return t("section",[t("h1",[o._v("色彩")]),o._v(" "),t("h3",[o._v("默认")]),o._v(" "),[t("div",{staticClass:"color"},o._l(o.initColor,function(o){return t("color-box",{attrs:{name:o.name,color:o.color,content:o.content}})}))]],!0)},staticRenderFns:[]}}});
//# sourceMappingURL=0.1b01dbcd1993f22790ba.js.map