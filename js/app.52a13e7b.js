(function(e){function t(t){for(var r,o,c=t[0],u=t[1],f=t[2],s=0,d=[];s<c.length;s++)o=c[s],a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,f||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{20531743:"217bcc1b","07eda11a":"949cfde4","1fa3987e":"dbc2bb82","299d978c":"e4056bf9","338eb639":"2a195342","37ccf426":"92298309","6824feb3":"c420168e",be13d25a:"0afb4cc3",d9372ac6:"5930b2c4","2d0af10b":"dce872fc","2d0e4870":"fb413c79","2d0e5800":"5cb78ea7","2d0e95ff":"156823c0","2d0f1158":"c0df8f78","2d2169e6":"3ff31007","2fa7a41a":"80c799b5","3bc136bf":"bdebf190","4863794f":"de1fbc43","4b47640d":"cb798a0e","4d84b227":"a16846ed","4f0f0088":"1bf41cf6","4f574cbe":"e9270efd","508f3f59":"3f91e0a1","51cdf768":"3dba5b74","5cd5dd92":"7341a425","5d22b949":"8cb582d0","5e99eb60":"930c5838","5eeff198":"1f09c3f8","5f3e348e":"f9f04681","62ac2205":"9e768332","62c7be82":"de8953cb","6bab1286":"52c2688d","6e02f6a0":"610d34fe","78ccb030":"237513fd","7c755062":"52bbf78a",cfa035d4:"5a81ea3b",f6e19dec:"38e5ae22"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={20531743:1,"07eda11a":1,"1fa3987e":1,"338eb639":1,"37ccf426":1,"6824feb3":1,be13d25a:1,d9372ac6:1,"2fa7a41a":1,"3bc136bf":1,"4863794f":1,"4d84b227":1,"4f0f0088":1,"4f574cbe":1,"508f3f59":1,"51cdf768":1,"5cd5dd92":1,"5d22b949":1,"5e99eb60":1,"5eeff198":1,"5f3e348e":1,"62ac2205":1,"62c7be82":1,"6bab1286":1,"6e02f6a0":1,"78ccb030":1,"7c755062":1,cfa035d4:1,f6e19dec:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{20531743:"e32a5b48","07eda11a":"1f6e9d82","1fa3987e":"1f6e9d82","299d978c":"31d6cfe0","338eb639":"bfab2c21","37ccf426":"e4bef2f9","6824feb3":"25749862",be13d25a:"730b28b3",d9372ac6:"9233370e","2d0af10b":"31d6cfe0","2d0e4870":"31d6cfe0","2d0e5800":"31d6cfe0","2d0e95ff":"31d6cfe0","2d0f1158":"31d6cfe0","2d2169e6":"31d6cfe0","2fa7a41a":"1f6e9d82","3bc136bf":"c5ca2edc","4863794f":"45e2f384","4b47640d":"31d6cfe0","4d84b227":"1852bdfe","4f0f0088":"1f6e9d82","4f574cbe":"1f6e9d82","508f3f59":"37acc4da","51cdf768":"1f6e9d82","5cd5dd92":"1f6e9d82","5d22b949":"5d354ee2","5e99eb60":"cb86df05","5eeff198":"6b0a4551","5f3e348e":"6b0a4551","62ac2205":"d4f1450b","62c7be82":"fea683d8","6bab1286":"2e09e05d","6e02f6a0":"e3085128","78ccb030":"d4f1450b","7c755062":"1f6e9d82",cfa035d4:"e12a8477",f6e19dec:"9cad9058"}[e]+".css",o=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=a[i],f=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(f===r||f===o))return t()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){c=s[i],f=c.getAttribute("data-href");if(f===r||f===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var f,s=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(e),f=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var p=setTimeout(function(){f({type:"timeout",target:d})},12e4);d.onerror=d.onload=f,s.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=t,f=f.slice();for(var d=0;d<f.length;d++)t(f[d]);var p=s;i.push([0,"vendor"]),n()})({0:function(e,t,n){e.exports=n("2f39")},"034f":function(e,t,n){"use strict";var r=n("fb1c"),o=n.n(r);o.a},1546:function(e,t,n){var r={"./trouble.vue":["e0b9","51cdf768"]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="1546",e.exports=o},"16bd":function(e,t,n){var r={"./tv-mobile.vue":["b32d","cfa035d4"],"./tv.vue":["b34f","4d84b227"]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="16bd",e.exports=o},"1e5d":function(e,t,n){},2923:function(e,t,n){var r={"./movies-mobile.vue":["4053","299d978c","d9372ac6"],"./movies.vue":["9608","6bab1286"]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="2923",e.exports=o},"2f39":function(e,t,n){"use strict";n.r(t);n("ac6a"),n("a114"),n("d14b"),n("df75"),n("3d49"),n("58a5"),n("bda0"),n("2289"),n("085e"),n("8014"),n("ab98"),n("aab2"),n("15f1"),n("b968"),n("3391"),n("ed5b"),n("0a58"),n("a4a9"),n("5965"),n("da80"),n("b60e"),n("1070"),n("1625"),n("9338"),n("0c2e"),n("f357"),n("ef8f"),n("747a"),n("e7fb"),n("b8af"),n("58b8"),n("5902"),n("eb7d"),n("dc73"),n("487d"),n("bf6b"),n("7b96"),n("89f8"),n("cb8c"),n("79ea"),n("a963"),n("3b76"),n("21e3"),n("38f3"),n("2577"),n("1992"),n("ef68"),n("97a1"),n("f39d"),n("a9b5"),n("06dd"),n("66bc"),n("908f"),n("25cd"),n("93ea"),n("c888"),n("5f1d"),n("a555"),n("8934"),n("9438"),n("351b"),n("23a5"),n("72c5"),n("b8ad"),n("d043"),n("592c"),n("de65"),n("8134"),n("1ea7"),n("63d1"),n("fcc3"),n("abed"),n("f857"),n("0a43"),n("5706"),n("cc15"),n("2ac6"),n("1fd4"),n("fa2f"),n("91e5"),n("1e5d"),n("7e6d");var r=n("2b0e"),o=n("3e2f"),a=n("e84f"),i=n("7051"),c=n("2040"),u=n("cf12"),f=n("46a9"),s=n("32a1"),d=n("f30c"),p=n("ce67"),l=n("482e"),h=n("52b5"),b=n("1180"),m=n("1e55"),v=n("506f"),g=n("b8d9"),y=n("7d43"),E=n("9541"),w=n("91c8"),O=n("c563"),k=n("db7b"),T=n("c081"),_=n("9413"),P=n("4487"),S=n("4e99"),U=n("a7da"),N=n("db35"),x=n("5d8b"),Q=n("6186"),A=n("9e58"),D=n("0952"),L=n("2a70"),C=n("5931"),R=n("525b"),j=n("1731"),I=n("c604"),M=n("62a9"),F=n("66d7"),V=n("7b38"),$=n("53fe"),B=n("dd1f"),z=n("3d5b"),G=n("8ef9"),q=n("1c93"),W=n("ac83"),H=n("f25e"),K=n("6dd4"),Y=n("79e9"),J=n("93f5"),X=n("1526"),Z=n("133b"),ee=n("f9d8");r["a"].use(a["a"],{config:{},iconSet:o["a"],components:{QLayout:i["a"],QLayoutHeader:c["a"],QLayoutDrawer:u["a"],QPageContainer:f["a"],QPage:s["a"],QToolbar:d["a"],QToolbarTitle:p["a"],QBtn:l["a"],QIcon:h["a"],QList:b["a"],QListHeader:m["a"],QItem:v["a"],QItemMain:g["a"],QItemSide:y["a"],QItemTile:E["a"],QItemSeparator:w["a"],QTabs:O["a"],QTab:k["a"],QTabPane:T["a"],QRouteTab:_["a"],QLayoutFooter:P["a"],QCarousel:S["a"],QCarouselSlide:U["a"],QCarouselControl:N["a"],QInput:x["a"],QSearch:Q["a"],QBtnDropdown:A["a"],QModal:D["a"],QModalLayout:L["a"],QSelect:C["a"],QCheckbox:R["a"],QBtnGroup:j["a"],QTable:I["a"],QTh:M["a"],QTr:F["a"],QTd:V["a"],QTableColumns:$["a"],QRadio:B["a"],QDatetime:z["a"],QDatetimePicker:G["a"],QRating:q["a"],QCollapsible:W["a"],QColor:H["a"],QVideo:K["a"],QField:Y["a"],QScrollArea:J["a"]},directives:{Ripple:X["a"]},plugins:{Notify:Z["a"],LocalStorage:ee["a"]}});var te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},ne=[];te._withStripped=!0;var re={name:"App"},oe=re,ae=(n("034f"),n("2877")),ie=Object(ae["a"])(oe,te,ne,!1,null,null,null);ie.options.__file="App.vue";var ce=ie.exports,ue=n("2f62"),fe={},se=n("a709"),de=n("8d6f"),pe=n("5781"),le={namespaced:!0,state:fe,getters:se,mutations:de,actions:pe},he=(n("a481"),n("59ca")),be=n.n(he),me=(n("1247"),n("a9a0"),{namespaced:!0,state:{user:ee["a"].get.item("user"),tempEmailorphone:"",tempPassword:"",tempUsername:"",tempInterest:[],using:"",tokenApi:ee["a"].get.item("tokenApi")},getters:{getTokenApi:function(e){return e.tokenApi},user:function(e){return e.user},using:function(e){return e.using},isAuthenticated:function(e){return!!e.user}},mutations:{SET_USER:function(e,t){e.user=t,ee["a"].set("user",t)},SET_TOKEN_API:function(e,t){console.log(t),e.tokenApi=t,ee["a"].set("tokenApi",t)},SET_USER_TEMP:function(e,t){var n=/\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/;n.test(t.emailorphone)?e.using="phone":e.using="email",e.tempEmailorphone=t.emailorphone,e.tempPassword=t.password,e.tempUsername=t.username,"0"==e.tempEmailorphone[0]&&(e.tempEmailorphone=e.tempEmailorphone.replace(/^0/,"+62"))},SET_INTEREST:function(e,t){e.tempInterest=t},RESET_USER:function(e){e.user=null,e.tempEmailorphone="",e.tempPassword="",e.tempUsername="",e.tempInterest=[]},REGISTER_EMAIL:function(e){be.a.auth().createUserWithEmailAndPassword(e.tempEmailorphone,e.tempPassword).then(function(t){e.user=t,t.currentUser.updateProfile({displayName:e.tempUsername}),t.sendEmailVerification()}).catch(function(e){throw e})},REGISTER_PHONE:function(e,t){var n=this;be.a.auth().signInWithPhoneNumber(e.tempEmailorphone,t).then(function(t){e.user=t,t.updateProfile({displayName:e.tempUsername});var r=t.phoneNumber+"@kitabantuin.id",o=e.tempPassword,a=n;t.updateEmail(r).then(function(){t.updatePassword(o).then(function(){a.$router.push("/")}).catch(function(e){notify.create({message:e.message,position:"top",type:"positive"})})}).catch(function(e){"auth/requires-recent-login"==e.code&&(notify.create({message:"Your Session has been Expired to Set Password ! Please try again !",position:"top",type:"positive"}),a.signout())})}).catch(function(e){throw e})}},actions:{setTokenApi:function(e,t){var n=e.commit;n("SET_TOKEN_API",t)},addInterest:function(e,t){var n=e.commit;n("SET_INTEREST",t)},tempUser:function(e,t){var n=e.commit;n("SET_USER_TEMP",t)},signInEmail:function(e,t){var n=e.commit,r=t.email,o=t.password,a=this;be.a.auth().signInWithEmailAndPassword(r,o).then(function(){var e=be.a.auth().currentUser;e.emailVerified?(notify.create({message:"Login Success",position:"top",type:"positive"}),n("SET_USER",e),a.$router.push("/")):(Z["a"].create({message:"please verified email first",position:"top"}),console.log("please verified email first"))}).catch(function(e){throw e})},registerEmail:function(e){var t=e.commit;t("REGISTER_EMAIL")},registerPhone:function(e,t){var n=e.commit;n("REGISTER_PHONE",t)},login:function(e,t){var n=e.commit,r=/\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/,o="";o=r.test(t.emailorphone)?t.emailorphone+"@kitabantuin.id":t.emailorphone;var a=this;be.a.auth().signInWithEmailAndPassword(o,t.password).then(function(){var e=be.a.auth().currentUser;e.emailVerified?(Z["a"].create({message:"Login Success",position:"top",type:"positive"}),n("SET_USER",e),a.$router.push("/")):Z["a"].create({message:"please verified email first",position:"top"})}).catch(function(e){Z["a"].create({message:e.message,position:"top-left"})})},signOut:function(e){var t=e.commit;be.a.auth().signOut().then(function(){t("SET_USER","")})}}}),ve={state:{},mutations:{}},ge=ve;r["a"].use(ue["a"]);var ye=function(){var e=new ue["a"].Store({modules:{example:le,auth:me,livetv:ge}});return e},Ee=n("8c4f"),we=n("a60d");if(we["a"].is.mobile)var Oe="-mobile";else Oe="";var ke=[{path:"/verify",component:function(){return n("9a5b")("./layout-intro"+Oe+".vue")},children:[{path:"",component:function(){return n("f44e")("./verify"+Oe+".vue")}}]},{path:"/success",component:function(){return n("9a5b")("./layout-intro"+Oe+".vue")},children:[{path:"",component:function(){return n("b62b")("./success"+Oe+".vue")}}]},{path:"/register",component:function(){return n("9a5b")("./layout-intro"+Oe+".vue")},children:[{path:"",component:function(){return n("94f8")("./register"+Oe+".vue")}}]},{path:"/login",component:function(){return n("9a5b")("./layout-intro"+Oe+".vue")},children:[{path:"",component:function(){return n("886b")("./login"+Oe+".vue")},name:"login"}]},{path:"/edit-profile",component:function(){return n("6562")("./layout"+Oe+".vue")},children:[{path:"",component:function(){return n("9856")("./edit-profile"+Oe+".vue")}}]},{path:"/profile",component:function(){return n("6562")("./layout"+Oe+".vue")},children:[{path:"",component:function(){return n.e("5f3e348e").then(n.bind(null,"6f9f"))},children:[{path:"",component:function(){return n.e("2d0f1158").then(n.bind(null,"9eb8"))}},{path:"continue",component:function(){return n.e("2d0f1158").then(n.bind(null,"9eb8"))}},{path:"history",component:function(){return n.e("2d2169e6").then(n.bind(null,"c2de"))}},{path:"watch-list",component:function(){return n.e("2d0e4870").then(n.bind(null,"9135"))}},{path:"contact",component:function(){return n.e("2d0af10b").then(n.bind(null,"0d78"))}},{path:"term",component:function(){return n.e("2d0e95ff").then(n.bind(null,"8cec"))}},{path:"privacy",component:function(){return n.e("2d0e5800").then(n.bind(null,"956d"))}}]}]},{path:"/interest",component:function(){return n("9a5b")("./layout-intro"+Oe+".vue")},children:[{path:"",component:function(){return n("477e")("./interest"+Oe+".vue")}}]}],Te=ke;if(we["a"].is.mobile)var _e="-mobile";else _e="";var Pe=[{path:"/tv",component:function(){return n("6562")("./layout"+_e+".vue")},children:[{path:"",component:function(){return n("16bd")("./tv"+_e+".vue")}}]}],Se=Pe;if(we["a"].is.mobile)var Ue="-mobile";else Ue="";var Ne=[{path:"/",component:function(){return n("6562")("./layout"+Ue+".vue")},children:[{path:"",component:function(){return n("cb7cb")("./home"+Ue+".vue")},name:"home"}]},{path:"/feed",component:function(){return n("6562")("./layout"+Ue+".vue")},children:[{path:"",component:function(){return n.e("62c7be82").then(n.bind(null,"ed12"))}}]},{path:"/explore",component:function(){return n("6562")("./layout"+Ue+".vue")},children:[{path:"",component:function(){return n("b552")("./explore"+Ue+".vue")}}]},{path:"/movies",component:function(){return n("6562")("./layout"+Ue+".vue")},children:[{path:"",component:function(){return n("2923")("./movies"+Ue+".vue")}}]},{path:"/edit-profile",component:function(){return n("6562")("./layout"+Ue+".vue")},children:[{path:"",component:function(){return n("9856")("./edit-profile"+Ue+".vue")}}]},{path:"/intro",component:function(){return n("9a5b")("./layout-intro"+Ue+".vue")},children:[{path:"",component:function(){return n.e("5d22b949").then(n.bind(null,"5b34"))}}]},{path:"/trouble",component:function(){return n("9a5b")("./layout-intro"+Ue+".vue")},children:[{path:"",component:function(){return n("1546")("./trouble"+Ue+".vue")}}]},{path:"/reset",component:function(){return n("9a5b")("./layout-intro"+Ue+".vue")},children:[{path:"",component:function(){return n("600d")("./reset"+Ue+".vue")}}]},{path:"/interest2",component:function(){return n("9a5b")("./layout-intro"+Ue+".vue")},children:[{path:"",component:function(){return n("c622")("./interest2"+Ue+".vue")}}]}],xe=Ne.concat(Te).concat(Se);xe.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var Qe=xe;r["a"].use(Ee["a"]);var Ae=function(){var e=new Ee["a"]({scrollBehavior:function(){return{y:0}},routes:Qe,mode:"history",base:"/"});return e},De=function(){var e="function"===typeof ye?ye():ye,t="function"===typeof Ae?Ae({store:e}):Ae;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(ce)}};return{app:n,store:e,router:t}},Le=n("9483");Object(Le["a"])("/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(e){console.log("Service worker has been registered.")},cached:function(e){console.log("Content has been cached for offline use.")},updatefound:function(e){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Ce=n("a925"),Re={failed:"Action failed",success:"Action was successful"},je={"en-us":Re},Ie=function(e){var t=e.app,n=e.Vue;n.use(Ce["a"]),t.i18n=new Ce["a"]({locale:"en-us",fallbackLocale:"en-us",messages:je})},Me=(n("96cf"),n("c973")),Fe=n.n(Me),Ve=n("bc3a"),$e=n.n(Ve),Be=function(e){var t=e.Vue;$e.a.defaults.headers.common["Authorization"]=ee["a"].get.item("tokenApi"),$e.a.defaults.headers.post["Content-Type"]="application/json";var n={};n="en-us"==ee["a"].get.item("lang")?{"Content-Type":"application/json","Accept-Language":"en"}:{"Content-Type":"application/json","Accept-Language":"id"},t.prototype.$axios=$e.a;var r=$e.a.create({baseURL:"https://api-rcti.kitabantuin.id",headers:n});function o(e){return a.apply(this,arguments)}function a(){return a=Fe()(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$e.a.get("https://api-rcti.kitabantuin.id"+t);case 3:if(n=e.sent,1017!=n.data.status.code){e.next=10;break}console.log("expired"),console.log($e.a.defaults.headers.common["Authorization"]),$e.a.get("https://api-rcti.kitabantuin.id/api/v1/refreshtoken").then(function(e){ee["a"].remove("tokenApi"),ee["a"].set("tokenApi",e.data.data["access_token"]),console.log(e),console.log($e.a.defaults.headers.common["Authorization"]),delete $e.a.defaults.headers.common["Authorization"],$e.a.defaults.headers.common["Authorization"]=ee["a"].get.item("tokenApi"),console.log($e.a.defaults.headers.common["Authorization"]);$e.a.get("https://api-rcti.kitabantuin.id"+t).then(function(e){return e}).catch(function(e){console.log(e)})}),e.next=11;break;case 10:return e.abrupt("return",n);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),console.error(e.t0);case 16:case"end":return e.stop()}},e,this,[[0,13]])})),a.apply(this,arguments)}function i(e){return c.apply(this,arguments)}function c(){return c=Fe()(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$e.a.post("https://api-rcti.kitabantuin.id"+t);case 3:if(n=e.sent,1017!=n.data.status.code){e.next=8;break}$e.a.get("https://api-rcti.kitabantuin.id/api/v1/refreshtoken").then(function(e){ee["a"].set("tokenApi",e.data.data["access_token"]),$e.a.defaults.headers.common["Authorization"]=ee["a"].get.item("tokenApi"),$e.a.get("https://api-rcti.kitabantuin.id"+t).then(function(e){return e.data.data}).catch(function(e){console.log(e)})}),e.next=9;break;case 8:return e.abrupt("return",n);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])})),c.apply(this,arguments)}t.prototype.$axios=r,t.prototype.$apiGet=function(e){return o(e)},t.prototype.$apiPost=function(e){return i(e)}},ze=function(e){var t=e.Vue;t.filter("test",function(e){return e?e+".webp":""}),t.filter("usewebp",function(e,t){return e?0==t?e:(e=e.substr(0,e.lastIndexOf(".")),e+".webp"):""}),t.prototype.$usewebp=function(e,t){return e?0==t?e:(e=e.substr(0,e.lastIndexOf(".")),e+".webp"):""},t.filter("truncate",function(e,t,n){if(e=e||"",n=n||"...",t=t||30,e.length<=t)return e;var r=e.slice(0,t-n.length),o=r.length-1;while(o>0&&" "!==r[o]&&r[o]!==n[0])o-=1;return o=o||t-n.length,r=r.slice(0,o),r+n})},Ge=(n("e71f"),function(e){var t=e.Vue;be.a.initializeApp({apiKey:"AIzaSyCO1IjY1673MySYwInNynKWsSE_72BEmmo",authDomain:"rc-rcti.firebaseapp.com",databaseURL:"https://rc-rcti.firebaseio.com",projectId:"rc-rcti",storageBucket:"rc-rcti.appspot.com",messagingSenderId:"181908626318"}),t.prototype.$firebase=be.a}),qe=n("1dce"),We=n.n(qe),He=function(e){var t=e.Vue;t.use(We.a)},Ke=(n("551c"),n("cadf"),n("456d"),"function"===typeof ce.preFetch);function Ye(e,t){var n=e?e.matched?e:t.resolve(e).route:t.currentRoute;return n?[].concat.apply([],n.matched.map(function(e){return Object.keys(e.components).map(function(t){return{path:e.path,c:e.components[t]}})})):[]}function Je(e,t){e.beforeResolve(function(n,r,o){var a=Ye(n,e),i=Ye(r,e),c=!1,u=a.filter(function(e,t){return c||(c=!i[t]||i[t].c!==e.c||e.path.indexOf("/:")>-1)}).filter(function(e){return e.c&&"function"===typeof e.c.preFetch}).map(function(e){return e.c});if(Ke&&(Ke=!1,u.unshift(ce)),!u.length)return o();var f=!0,s=function(e){f=!1,o(e)},d=function(){f&&o()};u.filter(function(e){return e&&e.preFetch}).reduce(function(e,o){return e.then(function(){return f&&o.preFetch({store:t,currentRoute:n,previousRoute:r,redirect:s})})},Promise.resolve()).then(d).catch(function(e){console.error(e),d()})})}var Xe=n("fe3c"),Ze=n.n(Xe),et=function(e){var t=e.app,n=e.router,r=e.Vue,o=e.store;be.a.auth().onAuthStateChanged(function(e){e?(o.commit("auth/SET_USER",e),n.replace({name:"home"}),new r(t)):(o.commit("auth/RESET_USER"),n.replace({name:"login"}),new r(t))})},tt=De(),nt=tt.app,rt=tt.store,ot=tt.router;/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){Ze.a.attach(document.body)},!1),[Ie,Be,ze,Ge,He].forEach(function(e){e({app:nt,router:ot,store:rt,Vue:r["a"],ssrContext:null})}),Je(ot,rt),et({app:nt,router:ot,store:rt,Vue:r["a"]})},"477e":function(e,t,n){var r={"./interest-mobile.vue":["b3cf","2fa7a41a"],"./interest.vue":["ac71","7c755062"],"./interest2.vue":["3566","4f0f0088"]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="477e",e.exports=o},5781:function(e,t){},"600d":function(e,t,n){var r={"./reset.vue":["2adc","508f3f59"]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="600d",e.exports=o},6562:function(e,t,n){var r={"./layout-intro-mobile.vue":["41df","78ccb030"],"./layout-intro.vue":["33cb","62ac2205"],"./layout-mobile.vue":["0742","20531743"],"./layout.vue":["7483","4863794f"]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="6562",e.exports=o},"7e6d":function(e,t,n){},"886b":function(e,t,n){var r={"./login-mobile.vue":["e831","5cd5dd92"],"./login.vue":["4b16","07eda11a"]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="886b",e.exports=o},"8d6f":function(e,t){},"94f8":function(e,t,n){var r={"./register-mobile.vue":["6c9b","6e02f6a0"],"./register.vue":["f1d2","f6e19dec"]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="94f8",e.exports=o},9856:function(e,t,n){var r={"./edit-profile.vue":["264c","5eeff198"]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="9856",e.exports=o},"9a5b":function(e,t,n){var r={"./layout-intro-mobile.vue":["41df","78ccb030"],"./layout-intro.vue":["33cb","62ac2205"]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="9a5b",e.exports=o},a709:function(e,t){},b552:function(e,t,n){var r={"./explore-mobile.vue":["e887","299d978c","37ccf426"],"./explore.vue":["7fba","299d978c","338eb639"]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="b552",e.exports=o},b62b:function(e,t,n){var r={"./success-mobile.vue":["c180","3bc136bf"],"./success.vue":["896a","4f574cbe"]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="b62b",e.exports=o},c622:function(e,t,n){var r={"./interest2.vue":["3566","4f0f0088"]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="c622",e.exports=o},cb7cb:function(e,t,n){var r={"./home-mobile.vue":["1562","299d978c","be13d25a"],"./home.vue":["eea6","299d978c","6824feb3"]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="cb7cb",e.exports=o},f44e:function(e,t,n){var r={"./verify-mobile.vue":["370d","1fa3987e"],"./verify.vue":["3e99","5e99eb60"]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="f44e",e.exports=o},fb1c:function(e,t,n){}});