webpackJsonp([7,25],{59:function(t,e,a){t.exports=a(406)},208:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tag:[{key:1,name:"test"},{key:2,name:"test"},{key:3,name:"test"}],key:3,data1:'<y-tag type="info">info</y-tag>\n<y-tag type="success">success</y-tag>\n<y-tag type="warning">warning</y-tag>\n<y-tag type="danger">danger</y-tag>\n<y-tag type="gray">gray</y-tag>',data2:'<y-tag type="info" closable>info</y-tag>\n<y-tag type="success" closable>success</y-tag>\n<y-tag type="warning" closable>warning</y-tag>\n<y-tag type="danger" closable>danger</y-tag>\n<y-tag type="gray" closable>gray</y-tag>',data3:'<transition-group name="y-tag">\n    <y-tag \n        type="gray" \n        closable \n        v-for="(tags, index) in tag" \n        :close="del.bind(this,index)"\n        :key="tags.key"\n    >{{tags.name}}</y-tag>\n</transition-group>'}},methods:{add:function(){this.key++,this.tag.push({key:this.key,name:"test"+this.key})},del:function(t){this.tag.splice(t,1)}}}},406:function(t,e,a){var n,s;n=a(208);var y=a(480);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=y.render,s.staticRenderFns=y.staticRenderFns,t.exports=n},480:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("section",[e("h1",[t._v("tag")]),t._v(" "),[e("coding",{attrs:{title:"普通的",content:"有5种样式",code:t.data1}},[e("y-tag",{attrs:{type:"info"}},[t._v("info")]),t._v(" "),e("y-tag",{attrs:{type:"success"}},[t._v("success")]),t._v(" "),e("y-tag",{attrs:{type:"warning"}},[t._v("warning")]),t._v(" "),e("y-tag",{attrs:{type:"danger"}},[t._v("danger")]),t._v(" "),e("y-tag",{attrs:{type:"gray"}},[t._v("gray")])]),t._v(" "),e("coding",{attrs:{title:"关闭按钮",content:"加上closable属性",code:t.data2}},[e("y-tag",{attrs:{type:"info",closable:""}},[t._v("info")]),t._v(" "),e("y-tag",{attrs:{type:"success",closable:""}},[t._v("success")]),t._v(" "),e("y-tag",{attrs:{type:"warning",closable:""}},[t._v("warning")]),t._v(" "),e("y-tag",{attrs:{type:"danger",closable:""}},[t._v("danger")]),t._v(" "),e("y-tag",{attrs:{type:"gray",closable:""}},[t._v("gray")])]),t._v(" "),e("coding",{attrs:{title:"tag组",content:"多个tag",code:t.data3}},[e("transition-group",{attrs:{name:"y-tag"}},t._l(t.tag,function(a,n){return e("y-tag",{key:a.key,attrs:{type:"gray",closable:"",close:t.del.bind(this,n)}},[t._v(t._s(a.name))])})),t._v(" "),e("y-button",{nativeOn:{click:function(e){t.add(e)}}},[t._v("添加")])])],t._v(" "),e("h2",[t._v("参数设置")]),t._v(" "),t._m(0)],!0)},staticRenderFns:[function(){var t=this,e=(t.$createElement,t._c);return e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("可选值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("样式")]),t._v(" "),e("td",[e("code",[t._v("String")])]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("info")]),t._v(", "),e("code",[t._v("success")]),t._v(","),e("code",[t._v("warning")]),t._v(","),e("code",[t._v("danger")]),t._v(","),e("code",[t._v("gray")])])]),t._v(" "),e("tr",[e("td",[t._v("closable")]),t._v(" "),e("td",[t._v("删除按钮")]),t._v(" "),e("td",[e("code",[t._v("Boolean")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("close")]),t._v(" "),e("td",[t._v("删除按钮回调")]),t._v(" "),e("td",[e("code",[t._v("Function")])]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])])])])}]}}});
//# sourceMappingURL=7.629851ed6faaef6bcafc.js.map