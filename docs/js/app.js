(function(t){function e(e){for(var n,i,l=e[0],c=e[1],s=e[2],f=0,d=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,l=1;l<o.length;l++){var c=o[l];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={app:0},r=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("header-bar"),o("v-content",[o("router-view")],1),o("footer-bar")],1)},r=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{app:"",dark:"",color:"primary"}},[o("v-toolbar-title",[t._v("簡易メモアプリ")]),o("v-spacer"),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{icon:""},on:{click:function(e){return t.$router.push("")}}},n),[o("v-icon",[t._v("fas fa-home")])],1)]}}])},[o("span",[t._v("ホームへ戻る")])])],1)},l=[],c={props:{debug:Boolean},methods:{}},s=c,u=o("2877"),f=o("6544"),d=o.n(f),v=o("40dc"),m=o("8336"),p=o("132d"),b=o("2fa4"),g=o("2a7f"),h=o("3a2f"),x=Object(u["a"])(s,i,l,!1,null,null,null),_=x.exports;d()(x,{VAppBar:v["a"],VBtn:m["a"],VIcon:p["a"],VSpacer:b["a"],VToolbarTitle:g["b"],VTooltip:h["a"]});var y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{attrs:{app:"",dark:"",color:"primary"}},[o("v-spacer"),o("div",{staticClass:"mr-2"},[t._v("© shangyuan.tuolang")])],1)},O=[],j=o("553a"),V={},C=Object(u["a"])(V,y,O,!1,null,null,null),k=C.exports;d()(C,{VFooter:j["a"],VSpacer:b["a"]});var S={name:"App",components:{HeaderBar:_,FooterBar:k},data:function(){return{}}},w=S,I=o("7496"),T=o("a75b"),$=Object(u["a"])(w,a,r,!1,null,null,null),D=$.exports;d()($,{VApp:I["a"],VContent:T["a"]});var B=o("8c4f"),A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:""}},[o("v-card",[o("v-card-text",[o("v-data-table",{attrs:{headers:t.headers,items:t.items,expanded:t.expanded,"item-key":"no","show-expand":"","show-select":"","hide-default-footer":""},on:{"update:expanded":function(e){t.expanded=e}},scopedSlots:t._u([{key:"top",fn:function(){return[o("v-toolbar",{attrs:{flat:""}},[o("v-spacer"),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{icon:""},on:{click:t.openDialog}},n),[o("v-icon",{attrs:{color:"success",large:""}},[t._v("fas fa-plus-circle")])],1)]}}])},[o("span",[t._v("データを追加")])]),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{icon:""},on:{click:t.delAllData}},n),[o("v-icon",{attrs:{color:"error",large:""}},[t._v("fas fa-trash-alt")])],1)]}}])},[o("span",[t._v("データを追加")])])],1)]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[o("v-icon",{attrs:{small:""},on:{click:function(e){return t.delData(n.no)}}},[t._v("mdi-delete")])]}},{key:"expanded-item",fn:function(e){var n=e.headers,a=e.item;return[o("td",{attrs:{colspan:n.length}},t._l(a.contents,(function(e){return o("div",{key:e.no,staticClass:"body-1"},[t._v(" "+t._s(e.text)+" : "+t._s(e.cost)+" ")])})),0)]}},{key:"no-data",fn:function(){return[o("v-alert",{staticClass:"body-1 font-weight-bold",attrs:{type:"error"}},[t._v("データが存在しません")])]},proxy:!0}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),t.confirmObj.dialog?o("confirm",{attrs:{dialog:t.confirmObj.dialog,title:t.confirmObj.title,titleIcon:t.confirmObj.titleIcon,titleColor:t.confirmObj.titleColor,message:t.confirmObj.message,buttons:t.confirmObj.buttons},on:{"update:dialog":function(e){return t.$set(t.confirmObj,"dialog",e)}}}):t._e(),t.dialog?o("payment-dialog",{attrs:{dialog:t.dialog,enableClose:""},on:{"update:dialog":function(e){t.dialog=e},add:t.addData}}):t._e()],1)},P=[],E=(o("a4d3"),o("e01a"),o("c740"),o("a434"),o("d3b7"),o("d4ec")),N=o("bee2"),J=Symbol(),F=Symbol(),M=function(){function t(e){Object(E["a"])(this,t),this[F]=e,this[J]=JSON.parse(localStorage.getItem(e))||[]}return Object(N["a"])(t,[{key:"add",value:function(t){t.no=this[J].length+1,this[J].push(t),localStorage.setItem(this[F],JSON.stringify(this[J]))}},{key:"del",value:function(t){var e=this[J].findIndex((function(e){return e.no==t}));return-1!==e&&this[J].splice(e,1),localStorage.setItem(this[F],JSON.stringify(this[J])),this[J]}},{key:"deleteAll",value:function(){return this[J]=[],localStorage.removeItem(this[F]),this[J]}},{key:"getItems",get:function(){return this[J]}}]),t}(),z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",{staticClass:"pa-0"},[o("v-toolbar",{attrs:{dark:"",color:t.titleColor}},[o("v-toolbar-title",{staticClass:"headline font-weight-bold align-baseline"},[t.titleIcon?o("v-icon",[t._v(t._s(t.titleIcon))]):t._e(),t._v(" "+t._s(t.title)+" ")],1),o("v-spacer"),o("v-toolbar-items",[t.enableClose?o("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("update:dialog",!1)}}},[o("v-icon",[t._v("mdi-close")])],1):t._e()],1)],1)],1),o("v-card-text",{staticClass:"body-1 black--text",staticStyle:{"padding-top":"20px"}},[t._v(t._s(t.message))]),o("v-divider"),o("v-card-actions",[o("v-spacer"),t._l(t.buttons,(function(e,n){return o("v-btn",{key:n,attrs:{color:e.color},on:{click:e.function}},[t._v(t._s(e.text))])}))],2)],1)],1)},H=[],R={name:"Confirm",props:{dialog:Boolean,title:String,titleIcon:String,titleColor:String,message:String,buttons:Array,enableClose:Boolean}},q=R,G=o("b0af"),K=o("99d9"),L=o("169a"),Q=o("ce7e"),U=o("71d9"),W=Object(u["a"])(q,z,H,!1,null,"0e914cfb",null),X=W.exports;d()(W,{VBtn:m["a"],VCard:G["a"],VCardActions:K["a"],VCardText:K["b"],VCardTitle:K["c"],VDialog:L["a"],VDivider:Q["a"],VIcon:p["a"],VSpacer:b["a"],VToolbar:U["a"],VToolbarItems:g["a"],VToolbarTitle:g["b"]});var Y={data:function(){return{confirmObj:{dialog:!1,title:"",titleIcon:"",titleColor:"",message:"",buttons:[]}}},methods:{confirm:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.confirmObj.title="確認",this.confirmObj.titleIcon="fas fa-exclamation-circle",this.confirmObj.titleColor="info",this.confirmObj.message=t,this.confirmObj.buttons=[{text:"はい",color:"info",function:function(){e.close(),null!==o&&"function"===typeof o&&o()}},{text:"いいえ",color:"error",function:this.close}],this.open()},warning:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.confirmObj.title="警告",this.confirmObj.titleIcon="fas fa-exclamation-triangle",this.confirmObj.titleColor="warning",this.confirmObj.message=t,this.confirmObj.buttons=[{text:"はい",color:"success",function:function(){e.close(),null!==o&&"function"===typeof o&&o()}},{text:"いいえ",color:"error",function:this.close}],this.open()},error:function(t){this.confirmObj.title="警告",this.confirmObj.titleIcon="",this.confirmObj.titleColor="error",this.confirmObj.message=t,this.confirmObj.buttons=[{text:"はい",color:"",function:this.close}],this.open()},open:function(){this.confirmObj.dialog=!0},close:function(){this.confirmObj.dialog=!1}}},Z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"","max-width":"800"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",{staticClass:"pa-0"},[o("v-toolbar",{attrs:{dark:"",color:"info"}},[o("v-toolbar-title",{staticClass:"headline"},[t._v("メモの追加")]),o("v-spacer"),o("v-toolbar-items",[t.enableClose?o("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("update:dialog",!1)}}},[o("v-icon",[t._v("mdi-close")])],1):t._e()],1)],1)],1),o("v-card-text",[o("v-container",{attrs:{fluid:""}},[o("v-form",{ref:"form",attrs:{"lazy-validation":""}},[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"6"}},[o("v-text-field",{attrs:{label:"タイトル",rules:t.rules.title,clearable:""},model:{value:t.item.title,callback:function(e){t.$set(t.item,"title",e)},expression:"item.title"}})],1),o("v-col",{attrs:{cols:"5"}},[o("v-text-field",{attrs:{label:"合計額",prefix:"￥",readonly:""},model:{value:t.totalCost,callback:function(e){t.totalCost=e},expression:"totalCost"}})],1),o("v-col",{attrs:{cols:"1"}},[o("v-icon",{attrs:{color:"success"},on:{click:t.addData}},[t._v("fas fa-plus-circle")])],1)],1)],1),t._l(t.item.contents,(function(e){return o("v-row",{key:e.no,attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"6"}},[o("v-text-field",{attrs:{label:"名称",clearable:""},model:{value:e.text,callback:function(o){t.$set(e,"text",o)},expression:"content.text"}})],1),o("v-col",{attrs:{cols:"5"}},[o("v-text-field",{attrs:{label:"金額",prefix:"￥",clearable:""},model:{value:e.cost,callback:function(o){t.$set(e,"cost",o)},expression:"content.cost"}})],1),o("v-col",{attrs:{cols:"1"}},[o("v-icon",{attrs:{color:"error"},on:{click:function(o){return t.delData(e.no)}}},[t._v("fas fa-minus-circle")])],1)],1)}))],2)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"success"},on:{click:t.addContent}},[t._v("追加")]),o("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.$emit("update:dialog",!1)}}},[t._v("キャンセル")])],1),t.confirmObj.dialog?o("confirm",{attrs:{dialog:t.confirmObj.dialog,title:t.confirmObj.title,titleIcon:t.confirmObj.titleIcon,titleColor:t.confirmObj.titleColor,message:t.confirmObj.message,buttons:t.confirmObj.buttons},on:{"update:dialog":function(e){return t.$set(t.confirmObj,"dialog",e)}}}):t._e()],1)],1)},tt=[],et=(o("4160"),o("a9e3"),o("159b"),{mixins:[Y],name:"PaymentDialog",props:{dialog:Boolean,enableClose:Boolean},data:function(){return{item:{title:"",total:0,contents:[{no:1,text:"",cost:0}]},rules:{title:[function(t){return(t||"").length>0||"タイトルは必須項目です"}]}}},methods:{addData:function(){var t={no:this.item.contents.length+1,text:"",cost:0};this.item.contents.push(t)},delData:function(t){var e=this.item.contents.findIndex((function(e){return e.no===t}));-1!==e&&this.item.contents.splice(e,1)},addContent:function(){var t=this;this.$refs.form.validate()&&this.confirm("入力した内容でデータを追加します。よろしいですか？",(function(){t.$emit("update:dialog",!1),t.$emit("add",t.item)}))}},created:function(){},computed:{totalCost:{get:function(){var t=Number(0);return this.item.contents.forEach((function(e){t+=Number(e.cost)})),t}}},components:{Confirm:X}}),ot=et,nt=o("62ad"),at=o("a523"),rt=o("4bd4"),it=o("0fd9"),lt=o("8654"),ct=Object(u["a"])(ot,Z,tt,!1,null,"a73f5a52",null),st=ct.exports;d()(ct,{VBtn:m["a"],VCard:G["a"],VCardActions:K["a"],VCardText:K["b"],VCardTitle:K["c"],VCol:nt["a"],VContainer:at["a"],VDialog:L["a"],VForm:rt["a"],VIcon:p["a"],VRow:it["a"],VSpacer:b["a"],VTextField:lt["a"],VToolbar:U["a"],VToolbarItems:g["a"],VToolbarTitle:g["b"]});var ut={mixins:[Y],name:"TopPage",data:function(){return{headers:[{text:"No",align:"center",sortable:!0,value:"no"},{text:"タイトル",align:"center",sortable:!1,value:"title"},{text:"合計額",align:"center",sortable:!1,value:"total"},{text:"操作",sortable:!1,value:"actions"},{text:"",value:"data-table-expand"}],items:[],expanded:[],selected:[],storage:M,dialog:!1}},methods:{openDialog:function(){this.dialog=!0},delData:function(t){var e=this;console.debug("item no = ".concat(t)),this.confirm("削除しますがよろしいですか？",(function(){e.items=e.storage.del(t)}))},delAllData:function(){var t=this;this.warning("保存されているデータを全て削除しますがよろしいですか?",(function(){t.items=t.storage.deleteAll()}))},addData:function(t){this.storage.add(t)}},mounted:function(){this.storage=new M("data"),this.items=this.storage.getItems},created:function(){},components:{Confirm:X,PaymentDialog:st}},ft=ut,dt=o("0798"),vt=o("8fea"),mt=Object(u["a"])(ft,A,P,!1,null,"11e71577",null),pt=mt.exports;d()(mt,{VAlert:dt["a"],VBtn:m["a"],VCard:G["a"],VCardText:K["b"],VContainer:at["a"],VDataTable:vt["a"],VIcon:p["a"],VSpacer:b["a"],VToolbar:U["a"],VTooltip:h["a"]}),n["a"].use(B["a"]);var bt=[{path:"/",name:"TopPage",component:pt}],gt=new B["a"]({mode:"history",base:"",routes:bt}),ht=gt,xt=o("f309");n["a"].use(xt["a"]);var _t=new xt["a"]({});o("15f5"),o("18fa");n["a"].config.productionTip=!1,n["a"].config.devtools=!0,new n["a"]({router:ht,vuetify:_t,render:function(t){return t(D)}}).$mount("#app")}});
//# sourceMappingURL=app.js.map