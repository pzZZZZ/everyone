webpackJsonp([13,20],{89:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o='<temlate>\n    <y-checkbox v-model="test1" true-label="可用" false-label="不可用"></y-checkbox>\n</template>\n',h='<y-checkbox v-model="test" label="523" :disabled="true">一个小小的checkbox</y-checkbox>\n<y-checkbox v-model="test" label="1" :disabled="true">一个小小的checkbox</y-checkbox>\n',d='<temlate>\n    <y-checkbox-group v-model="test3">\n        <y-checkbox label="523">asd</y-checkbox>\n        <y-checkbox label="2351" content>asd</y-checkbox>\n    </y-checkbox-group>\n</template>\n';t.default={data:function(){return{test:"523",test1:"可用",test2:"",test3:["523"],disabled:o,label:h,group:d}}}},362:function(e,t,o){var h,d;h=o(89);var c=o(406);d=h=h||{},"object"!=typeof h.default&&"function"!=typeof h.default||(d=h=h.default),"function"==typeof d&&(d=d.options),d.render=c.render,d.staticRenderFns=c.staticRenderFns,e.exports=h},406:function(module,exports){module.exports={render:function(){with(this)return _h("section",[_m(0)," ",[_h("coding",{attrs:{code:disabled,title:"禁止",content:"可以禁止checkbox的默认事件"}},[_h("y-checkbox",{directives:[{name:"model",rawName:"v-model",value:test,expression:"test"}],attrs:{label:"523",disabled:!0},domProps:{value:test},on:{input:function(e){test=e}}},["disabled"])," ",_h("y-checkbox",{directives:[{name:"model",rawName:"v-model",value:test,expression:"test"}],attrs:{label:"1",disabled:!0},domProps:{value:test},on:{input:function(e){test=e}}},["disabled"])])," ",_h("coding",{attrs:{code:label,title:"label",content:"可以指定checkbox的label"}},[_h("y-checkbox",{directives:[{name:"model",rawName:"v-model",value:test1,expression:"test1"}],attrs:{"true-label":"可用","false-label":"不可用"},domProps:{value:test1},on:{input:function(e){test1=e}}})])," ",_h("coding",{attrs:{code:group,title:"checkbox-group",content:"多个checkbox可以使用checkbox-group"}},[_h("y-checkbox-group",{directives:[{name:"model",rawName:"v-model",value:test3,expression:"test3"}],domProps:{value:test3},on:{input:function(e){test3=e}}},[_h("y-checkbox",{attrs:{label:"523"}},["asd"])," ",_h("y-checkbox",{attrs:{label:"2351",content:""}},["asd"])]),"\n        "+_s(test3)+"\n    "])]," ",_m(1)," ",_m(2)])},staticRenderFns:[function(){with(this)return _h("h1",["Checkbox"])},function(){with(this)return _h("h2",["参数设置"])},function(){with(this)return _h("table",[_h("thead",[_h("tr",[_h("th",["属性"])," ",_h("th",["说明"])," ",_h("th",["类型"])," ",_h("th",["默认值"])," ",_h("th",["可选值"])])])," ",_h("tbody",[_h("tr",[_h("td",["slot"])," ",_h("td",["文字"])," ",_h("td",["slot"])," ",_h("td",["-"])," ",_h("td",["-"])])," ",_h("tr",[_h("td",["label"])," ",_h("td",["value"])," ",_h("td",[_h("code",["String"]),",",_h("code",["Number"]),",",_h("code",["Boolean"])])," ",_h("td",["Boolean"])," ",_h("td",["-"])])," ",_h("tr",[_h("td",["trueLabel"])," ",_h("td",["选中value"])," ",_h("td",[_h("code",["String"]),",",_h("code",["Number"]),",",_h("code",["Boolean"])])," ",_h("td",["-"])," ",_h("td",["-"])])," ",_h("tr",[_h("td",["falseLabel"])," ",_h("td",["未选中value"])," ",_h("td",[_h("code",["String"]),",",_h("code",["Number"]),",",_h("code",["Boolean"])])," ",_h("td",["-"])," ",_h("td",["-"])])," ",_h("tr",[_h("td",["disable"])," ",_h("td",["禁用状态"])," ",_h("td",["-"])," ",_h("td",["false"])," ",_h("td",["-"])])," ",_h("tr",[_h("td",["content"])," ",_h("td",["不显示value"])," ",_h("td",[_h("code",["Boolean"])])," ",_h("td",["false"])," ",_h("td",["-"])])])])}]}},427:function(e,t,o){e.exports=o(362)}});
//# sourceMappingURL=13.1e3c3060b3c19dacb80e.js.map