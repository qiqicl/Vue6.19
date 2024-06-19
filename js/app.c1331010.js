(function(){"use strict";var e={668:function(e,t,r){var n=r(6848),c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app"},[t("h3",[e._v("~ Today I need to ~")]),t("div",{staticClass:"inp"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.todo,expression:"todo",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"todo..."},domProps:{value:e.todo},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add.apply(null,arguments)},input:function(t){t.target.composing||(e.todo=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),t("button",{on:{click:e.add}},[e._v("submit")])]),t("ul",e._l(e.items,(function(r,n){return t("li",{class:{click:r.checked},on:{click:e.end}},[t("input",{directives:[{name:"model",rawName:"v-model",value:r.checked,expression:"item.checked"},{name:"show",rawName:"v-show",value:!r.checked,expression:"!item.checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(r.checked)?e._i(r.checked,null)>-1:r.checked},on:{change:function(t){var n=r.checked,c=t.target,i=!!c.checked;if(Array.isArray(n)){var o=null,s=e._i(n,o);c.checked?s<0&&e.$set(r,"checked",n.concat([o])):s>-1&&e.$set(r,"checked",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(r,"checked",i)}}}),t("p",{on:{click:function(e){r.checked?r.checked=!1:r.checked=!0}}},[e._v(e._s(r.text))]),t("span",{on:{click:function(t){return e.del(n)}}},[e._v("×")])])})),0),t("div",{staticClass:"foot"},[t("span",[e._v(e._s(e.sum)+"未完成")]),t("div",{staticClass:"btn"},[t("button",{directives:[{name:"show",rawName:"v-show",value:this.arr.every((e=>!1===e.checked)),expression:"this.arr.every(item => item.checked === false)"}],staticClass:"active",on:{click:function(t){return e.render(0)}}},[e._v("全部")]),e._l(e.btn,(function(r,n){return t("button",{directives:[{name:"show",rawName:"v-show",value:e.clear(),expression:"clear()"}],class:{active:e.selectedIndex===n},on:{click:function(t){return e.selectBtn(n)}}},[e._v(e._s(r))])})),t("button",{directives:[{name:"show",rawName:"v-show",value:e.clear(),expression:"clear()"}],on:{click:e.clean}},[e._v("清空已完成")])],2)])])},i=[],o=(r(4114),{name:"App",data(){return{todo:"",count:0,items:JSON.parse(localStorage.getItem("items"))||[{text:"123",checked:!1},{text:"aaa",checked:!1},{text:"2222",checked:!1}],arr:[{text:"123",checked:!1},{text:"aaa",checked:!1},{text:"2222",checked:!1}],btn:["全部","未完成","已完成"],selectedIndex:0}},methods:{end(){this.arr=this.items,this.selectedIndex=0,console.log(this.arr,this.selectedIndex)},render(e){0===e?this.items=this.arr:1===e?this.items=this.arr.filter((e=>!1===e.checked)):2===e&&(this.items=this.arr.filter((e=>!0===e.checked)))},clean(){this.items=this.arr.filter((e=>!1===e.checked)),this.arr=this.items},del(e){this.items.splice(e,1),this.arr=this.items},clear(){return this.arr.some((e=>!0===e.checked))},selectBtn(e,t){this.selectedIndex=e,this.render(this.selectedIndex)},add(){""!==this.todo?(this.items.push({text:this.todo,checked:!1}),this.arr=this.items,this.todo=""):alert("不能为空")}},computed:{sum(){return this.count=0,this.items.map((e=>{e.checked||this.count++})),this.count}},watch:{items:{handler(){localStorage.setItem("items",JSON.stringify(this.items))},deep:!0},arr:{handler(){console.log(this.arr),console.log(this.arr.some((e=>(console.log(e.checked),!1===e.checked))))},deep:!0,immediate:!0}}}),s=o,a=r(1656),d=(0,a.A)(s,c,i,!1,null,null,null),l=d.exports;n.Ay.config.productionTip=!1,new n.Ay({render:e=>e(l)}).$mount("#app")}},t={};function r(n){var c=t[n];if(void 0!==c)return c.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,c,i){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],c=e[l][1],i=e[l][2];for(var s=!0,a=0;a<n.length;a++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(s=!1,i<o&&(o=i));if(s){e.splice(l--,1);var d=c();void 0!==d&&(t=d)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,c,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var c,i,o=n[0],s=n[1],a=n[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(c in s)r.o(s,c)&&(r.m[c]=s[c]);if(a)var l=a(r)}for(t&&t(n);d<o.length;d++)i=o[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},n=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(668)}));n=r.O(n)})();
//# sourceMappingURL=app.c1331010.js.map