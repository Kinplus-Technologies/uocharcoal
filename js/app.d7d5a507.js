(function(e){function t(t){for(var r,n,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,n=1;n<a.length;n++){var c=a[n];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({contact:"contact",login:"login",notFound:"notFound",products:"products",team:"team"}[e]||e)+"."+{contact:"6ea26625",login:"de31023a",notFound:"79c90a3e",products:"a5701b79",team:"fa2a6a11"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={contact:1,login:1,notFound:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({contact:"contact",login:"login",notFound:"notFound",products:"products",team:"team"}[e]||e)+"."+{contact:"ea9d0558",login:"fba5bb1e",notFound:"9deb4d24",products:"31d6cfe0",team:"31d6cfe0"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[e],p.parentNode.removeChild(p),a(i)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,a){r=o[e]=[t,a]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",dark:"",outlined:"","clipped-right":"",elevation:"4","max-height":"90px","shrink-on-scroll":!e.mobile,"elevate-on-scroll":""}},[a("router-link",{attrs:{to:{name:"home"}}},[a("v-img",{staticClass:"ml-5",attrs:{position:"left",height:"3rem","max-width":e.logowidth,contain:"",src:"uploads/uo-logo.jpg"}})],1),a("v-spacer"),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.mobile,expression:"!mobile"}]},[a("v-btn",{attrs:{color:e.themeColor,text:""}},[e._v("Become A Dealer")]),a("v-btn",{attrs:{color:e.themeColor,text:""}},[e._v("FAQ")]),a("v-btn",{attrs:{to:{name:"products"},color:e.themeColor,text:""}},[e._v("Products")]),a("v-btn",{attrs:{to:{name:"team"},color:e.themeColor,text:""}},[e._v("Team")]),a("v-btn",{attrs:{to:{name:"contact"},color:e.themeColor,text:""}},[e._v("Contact")])],1),a("v-app-bar-nav-icon",{directives:[{name:"show",rawName:"v-show",value:e.mobile,expression:"mobile"}],on:{click:function(t){e.drawer=!e.drawer}}})],1),a("v-main",[a("router-view")],1),a("v-navigation-drawer",{directives:[{name:"show",rawName:"v-show",value:e.mobile,expression:"mobile"}],attrs:{app:e.mobile,right:"",clipped:"",stateless:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("nav-drawer",{attrs:{hideDrawer:e.hideDrawer}})],1),a("v-footer",{attrs:{dark:"",outlined:""}},[a("div",{staticClass:"theme-text text-center mt-5 mx-auto font-weight-light pb-2"},[e._v(" Copyright © "+e._s((new Date).getFullYear())+" "),a("b",[e._v("Uriri Oghene Nigeria Ltd")]),e._v(". All rights reserved. ")])])],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-block"},[a("v-list",[a("v-list-item",[a("v-btn",{attrs:{color:e.themeColor,text:""},on:{click:e.hideDrawer}},[e._v("Become A Dealer")])],1),a("v-list-item",[a("v-btn",{attrs:{color:e.themeColor,text:""},on:{click:e.hideDrawer}},[e._v("FAQ")])],1),a("v-list-item",[a("v-btn",{attrs:{to:{name:"products"},color:e.themeColor,text:""},on:{click:e.hideDrawer}},[e._v("Products")])],1),a("v-list-item",[a("v-btn",{attrs:{to:{name:"team"},color:e.themeColor,text:""},on:{click:e.hideDrawer}},[e._v("Team")])],1),a("v-list-item",[a("v-btn",{attrs:{to:{name:"contact"},color:e.themeColor,text:""},on:{click:e.hideDrawer}},[e._v("Contact")])],1)],1)],1)},c=[],s={drawer:!1,name:"NavDrawer",data:function(){return{themeColor:"#ff5722"}},props:{hideDrawer:Function}},l=s,u=a("2877"),d=a("6544"),p=a.n(d),m=a("8336"),h=a("8860"),f=a("da13"),v=Object(u["a"])(l,i,c,!1,null,null,null),g=v.exports;p()(v,{VBtn:m["a"],VList:h["a"],VListItem:f["a"]});var b={name:"App",data:function(){return{drawer:!1,themeColor:"#ff5722"}},components:{NavDrawer:g},computed:{mobile:function(){return this.$vuetify.breakpoint.smAndDown},logowidth:function(){return this.mobile?"12rem":"14rem"}},watch:{mobile:function(e){e&&(this.drawer=!1)}},methods:{hideDrawer:function(){this.mobile&&(this.drawer=!1)}}},w=b,y=(a("034f"),a("7496")),_=a("40dc"),x=a("5bc1"),C=a("553a"),j=a("adda"),k=a("f6c4"),O=a("f774"),V=a("2fa4"),F=Object(u["a"])(w,n,o,!1,null,null,null),S=F.exports;p()(F,{VApp:y["a"],VAppBar:_["a"],VAppBarNavIcon:x["a"],VBtn:m["a"],VFooter:C["a"],VImg:j["a"],VMain:k["a"],VNavigationDrawer:O["a"],VSpacer:V["a"]});a("45fc"),a("d3b7");var A=a("8c4f"),E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("carousel-slide"),a("br"),a("charcoal-products"),a("team-page")],1)},P=[],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-container",[a("v-carousel",{attrs:{cycle:"",interval:"4000",height:"500","show-arrows-on-hover":""}},[a("v-card",e._l(e.items,(function(t,r){return a("v-carousel-item",{key:r,attrs:{src:t.src}},[a("v-sheet",{attrs:{color:"grey-dark"}},[a("div",{staticClass:"theme-text display-1 text-center"},[e._v(" "+e._s(t.type)+" Charcoal ")])])],1)})),1)],1)],1)],1)},L=[],T=r["a"].extend({name:"CarouselSlide",data:function(){return{items:[{src:"uploads/chcc1.jpg",type:"Rosewood"},{src:"uploads/chcc2.jpg",type:"Wood Pellets"},{src:"uploads/chcc3.jpg",type:"Lump High Grade"},{src:"uploads/chcc6.jpg",type:"Grill"},{src:"uploads/chcc7.jpg",type:"Lump Wood"},{src:"uploads/chcc8.jpg",type:"Briquettes"}]}}}),I=T,N=a("b0af"),R=a("5e66"),B=a("3e35"),U=a("a523"),$=a("8dd9"),M=Object(u["a"])(I,D,L,!1,null,null,null),H=M.exports;p()(M,{VCard:N["a"],VCarousel:R["a"],VCarouselItem:B["a"],VContainer:U["a"],VSheet:$["a"]});var q=a("80a3"),G=a("87a1"),J={name:"Home",data:function(){return{}},components:{CarouselSlide:H,CharcoalProducts:q["a"],TeamPage:G["a"]}},Q=J,z=Object(u["a"])(Q,E,P,!1,null,null,null),K=z.exports,W=a("793c");r["a"].use(A["a"]);var Y=[{path:"/i",alias:"/",name:"home",component:K},{path:"/products",name:"products",component:function(){return a.e("products").then(a.bind(null,"e6dc"))}},{path:"/team",name:"team",component:function(){return a.e("team").then(a.bind(null,"0767"))}},{path:"/contact",name:"contact",component:function(){return a.e("contact").then(a.bind(null,"b8fa"))}},{path:"/login",name:"login",component:function(){return a.e("login").then(a.bind(null,"a55b"))}},{path:"/404",alias:"*",name:"notFound",component:function(){return a.e("notFound").then(a.bind(null,"9703"))}}],X=new A["a"]({mode:"history",base:"/",routes:Y});X.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))?W["a"].login?a():a({name:"login",query:{redirect:e.fullPath}}):a()}));var Z=X,ee=a("2f62");r["a"].use(ee["a"]);var te=new ee["a"].Store({state:{},mutations:{},actions:{},getters:{},modules:{}}),ae=a("f309");r["a"].use(ae["a"]);var re=new ae["a"]({}),ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-center py-2"},[a("v-img",{attrs:{contain:"",src:e.imgURL}}),a("v-file-input",{attrs:{chips:"","show-size":"",rules:e.rules.img,accept:"image/jpeg",placeholder:e.placeholder,label:e.label,loading:e.loading},on:{change:e.processFile},model:{value:e.imgFile,callback:function(t){e.imgFile=t},expression:"imgFile"}}),e.imgURL?a("v-btn",{attrs:{text:"",elevation:"3",disabled:e.loading},on:{click:e.saveFile}},[a("v-icon",[e._v("mdi-save")]),e._v(" "+e._s(e.loading?"Saving image...":"Save Image")+" ")],1):e._e()],1),a("v-snackbar",{attrs:{top:"",color:e.snackType},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[a("p",[e._v(e._s(e.snackMsg))])])],1)},oe=[],ie=(a("caad"),a("2532"),a("dde5")),ce={name:"ProcessFile",data:function(){return{imgURL:null,imgFile:null,loading:!1,snackbar:!1,snackType:"",snackMsg:"",rules:{img:[function(e){return!e||e.type.includes("image/jpeg")||"Upload a .jpg image"},function(e){return!e||e.size<15e4||"Image size should be less than 150KB"}]}}},props:{imagename:{type:String,default:""},filename:{type:String,default:""},filetype:{type:String,default:""},alert:Function,label:{type:String,default:"New Image (less than 150KB)"},placeholder:{type:String,default:"select a .jpg image"}},computed:{fname:function(){return this.filename||"".concat(Object(ie["b"])(),".jpg")},hasParent:function(){return this.imagename||this.filename}},methods:{processFile:function(e){var t=this;if(e){var a=new FileReader;a.addEventListener("load",(function(){return t.imgURL=a.result}),!1),a.readAsDataURL(e)}},saveFile:function(){var e=this;this.loading=!0;var t={imagename:this.imagename,filename:this.fname,filetype:this.filetype},a=new FormData;a.append("data",JSON.stringify(t)),a.append("file",this.imgFile);var r={header:{"Content-Type":"multipart/form-data"}};ie["a"].post("/process_file.php",a,r).then((function(t){e.loading=!1,t.data.imagename?(e.$emit("image-saved"),e.hasParent&&e.alert?e.alert("success","Image saved successfully."):e.setAlert("success","Image saved successfully.")):e.hasParent&&e.alert?e.alert("error",t.data):e.setAlert("error",t.data)})).catch((function(t){e.loading=!1,e.hasParent?e.alert("error",t.message):e.setAlert("error",t.message)}))},setAlert:function(e,t){this.snackbar=!0,this.snackType=e,this.snackMsg=t}}},se=ce,le=a("23a7"),ue=a("132d"),de=a("2db4"),pe=Object(u["a"])(se,ne,oe,!1,null,null,null),me=pe.exports;p()(pe,{VBtn:m["a"],VFileInput:le["a"],VIcon:ue["a"],VImg:j["a"],VSnackbar:de["a"]}),r["a"].component("process-file",me),r["a"].config.productionTip=!1,new r["a"]({router:Z,store:te,vuetify:re,render:function(e){return e(S)}}).$mount("#app")},"793c":function(e,t,a){"use strict";t["a"]={login:null}},"80a3":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"text-center theme-text text-uppercase"},[e._v("our charcoal products")]),a("br"),a("v-row",e._l(e.images,(function(t){return a("v-col",{key:t.id,attrs:{cols:"12",sm:"6",lg:"4"}},[a("v-card",{attrs:{height:"100%",elevation:"4"}},[a("v-img",{attrs:{height:"400px",contain:"",src:t.src}}),a("v-card-subtitle",{staticClass:"theme-text"},[a("h2",{staticClass:"text-center theme-text"},[e._v(" "+e._s(t.description)+" CHARCOAL ")]),a("h3",{staticClass:"text-center"},[e._v(" NGN "+e._s(t.price)+"/bag ")])])],1)],1)})),1)],1)},n=[],o=a("2b0e"),i=a("dde5"),c=o["a"].extend({name:"CharcoalProducts",data:function(){return{images:[{id:Object(i["b"])(),src:"uploads/chc1.jpg",description:"HARD",price:1750.75},{id:Object(i["b"])(),src:"uploads/chc2.jpg",description:"ROSEWOOD",price:1600},{id:Object(i["b"])(),src:"uploads/chc3.jpg",description:"VIDYHA",price:2e3},{id:Object(i["b"])(),src:"uploads/chc5.jpg",description:"BRIQUETTES",price:2e3},{id:Object(i["b"])(),src:"uploads/chc7.jpg",description:"PELLETS",price:3500},{id:Object(i["b"])(),src:"uploads/chc9.jpg",description:"GRILL",price:3500}]}}}),s=c,l=a("2877"),u=a("6544"),d=a.n(u),p=a("b0af"),m=a("99d9"),h=a("62ad"),f=a("adda"),v=a("0fd9"),g=Object(l["a"])(s,r,n,!1,null,null,null);t["a"]=g.exports;d()(g,{VCard:p["a"],VCardSubtitle:m["b"],VCol:h["a"],VImg:f["a"],VRow:v["a"]})},"85ec":function(e,t,a){},"87a1":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-5"},[a("h2",{staticClass:"text-center theme-text text-uppercase"},[e._v(" Our Team ")]),a("br"),a("v-row",e._l(e.images,(function(t){return a("v-col",{key:t.id,attrs:{cols:"12",sm:"6",lg:"3"}},[a("v-card",[a("v-img",{attrs:{height:"400px",contain:"",src:t.src}}),a("v-card-subtitle",[a("h2",{staticClass:"text-center"},[e._v(" "+e._s(t.name)+" ")]),a("h3",{staticClass:"text-center"},[e._v(" "+e._s(t.position)+" ")])])],1)],1)})),1)],1)},n=[],o=a("dde5"),i={name:"TeamPage",data:function(){return{images:[{id:Object(o["b"])(),src:"uploads/team1.jpg",name:"Oruese Emagbetere",position:"CEO/Visionary"},{id:Object(o["b"])(),src:"uploads/team2.jpg",name:"Stanley Nnoromele",position:"International Operations"},{id:Object(o["b"])(),src:"uploads/team3.jpg",name:"Jenifer Atase Adjarho",position:"Logistics"},{id:Object(o["b"])(),src:"uploads/team4.jpg",name:"Godwin Oghenenyerhovwo",position:"Quality Control Expert"}]}}},c=i,s=a("2877"),l=a("6544"),u=a.n(l),d=a("b0af"),p=a("99d9"),m=a("62ad"),h=a("adda"),f=a("0fd9"),v=Object(s["a"])(c,r,n,!1,null,null,null);t["a"]=v.exports;u()(v,{VCard:d["a"],VCardSubtitle:p["b"],VCol:m["a"],VImg:h["a"],VRow:f["a"]})},dde5:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c}));var r=a("bc3a"),n=a.n(r),o=a("11c1"),i=n.a.create({baseURL:"/api"}),c=o["v4"]}});
//# sourceMappingURL=app.d7d5a507.js.map