(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["6e02f6a0"],{1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("integer",/^-?[0-9]*$/);t.default=i},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxLength",max:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e})};t.default=i},"2ab8":function(e,t,r){},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce(function(t,r){return t&&r.apply(e,n)},!0)})};t.default=i},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=i},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("numeric",/^[0-9]*$/);t.default=i},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxValue",max:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e})};t.default=i},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,a=(0,n.regex)("email",i);t.default=a},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minLength",min:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e})};t.default=i},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=i},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"not"},function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)})};t.default=i},"657c":function(e,t,r){"use strict";var n=r("b5ae");r("59ca"),r("1247");t["a"]={data:function(){return{errMsgs:{emailorphone:"",password:"",username:""},form:{emailorphone:"",password:"",username:"",using:""},formLogin:{emailorphone:"",password:"",using:""},interestArr:[]}},validations:{form:{emailorphone:{required:n["required"],or:Object(n["or"])(n["email"],n["numeric"])},password:{required:n["required"],goodpassword:function(e){return e.length>=8&&/[a-z]/.test(e)&&/[A-Z]/.test(e)&&/[0-9]/.test(e)}},username:{required:n["required"],minLength:Object(n["minLength"])(3)}},formLogin:{emailorphone:{required:n["required"],or:Object(n["or"])(n["email"],n["numeric"])},password:{required:n["required"],minLength:Object(n["minLength"])(8)}}},methods:{checkErr:function(e,t){e.$touch(),e.required||(this.errMsgs[t]="Field is required."),!e.hasOwnProperty("or")||e.email&&e.numeric||(this.errMsgs[t]="Filed must contain valid email or phone Number"),e.hasOwnProperty("maxLength")&&!e.maxLength&&(this.errMsgs[t]="Max length is "+e.$params.maxLength.max),e.hasOwnProperty("minLength")&&!e.minLength&&(this.errMsgs[t]="Min length is "+e.$params.minLength.min),console.log(e),e.hasOwnProperty("goodpassword")&&!e.goodpassword&&(this.errMsgs[t]="Must be at least 8 characters and contain a lowercase character, uppercase character and a number")},register:function(){this.$v.form.$touch(),this.$v.form.$error||this.$store.dispatch("auth/tempUser",this.form).then(this.$router.push("/interest"))},addInterest:function(){this.$store.dispatch("auth/addInterest",this.interestArr)},signupEmail:function(){this.$store.dispatch("auth/addInterest",this.interestArr),this.$store.dispatch("auth/registerEmail")},captcha:function(){this.$store.dispatch("auth/addInterest",this.interestArr),this.$router.push("/verify")},signupPhone:function(){this.$store.dispatch("auth/registerPhone")},sendOtp:function(){Loading.show(),console.log("will send OTP here"),Loading.hide()},login:function(){this.$v.formLogin.$touch(),this.$v.formLogin.$error||this.$store.dispatch("auth/login",this.formLogin)}}}},"6b8d":function(e,t,r){"use strict";var n=r("2ab8"),i=r.n(n);i.a},"6c9b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{attrs:{id:"signup-page"}},[r("h4",[e._v("Halo,"),r("br"),e._v("Welcome to RCTI.TV")]),r("q-field",{staticClass:"no-padding",attrs:{helper:e.$v.form.emailorphone.or?"":"*You must enter an invalid email address.","error-label":e.errMsgs.emailorphone}},[r("q-input",{staticClass:"text-white",attrs:{type:"email","stack-label":"Email or Phone Number",error:e.$v.form.emailorphone.$error},on:{blur:function(t){e.checkErr(e.$v.form.emailorphone,"emailorphone")}},model:{value:e.form.emailorphone,callback:function(t){e.$set(e.form,"emailorphone",t)},expression:"form.emailorphone"}})],1),r("q-field",{staticClass:"no-padding",attrs:{"error-label":e.errMsgs.password}},[r("q-input",{staticClass:"text-white",attrs:{type:"password","stack-label":"Password",error:e.$v.form.password.$error},on:{blur:function(t){e.checkErr(e.$v.form.password,"password")}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("q-field",{staticClass:"no-padding",attrs:{"error-label":e.errMsgs.username}},[r("q-input",{staticClass:"text-white",attrs:{type:"text","stack-label":"user name",error:e.$v.form.username.$error},on:{blur:function(t){e.checkErr(e.$v.form.username,"username")}},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("q-btn",{staticClass:"btn-red",attrs:{label:"next"},on:{click:e.register}}),r("br"),r("br"),r("p",{staticClass:"text-center"},[e._v("Have an account? "),r("router-link",{staticClass:"text-red",attrs:{to:"/login"}},[e._v("Sign In")]),e._v(" here")],1),r("p",{staticClass:"absolute-bottom text-center"},[r("router-link",{attrs:{to:"/"}},[e._v("SKIP")])],1)],1)},i=[];n._withStripped=!0;r("e278");var a=r("59ca"),u=r.n(a),o={data:function(){return{otp:""}},methods:{sendOtp:function(){u.a.auth().signInWithPhoneNumber(phoneForm.phone,this.phoneForm.appVerifier).then(function(e){window.confirmationResult=e,alert("SMS sent")}).catch(function(e){alert("Error ! SMS not sent")})},verifyOtp:function(){var e=this,t=this.otp;window.confirmationResult.confirm(t).then(function(t){t.user;e.$router.push({path:"/setPassword"})}).catch(function(e){})}}},s=r("657c"),f={name:"signup",mixins:[s["a"],o]},c=f,d=(r("6b8d"),r("2877")),l=Object(d["a"])(c,n,i,!1,null,null,null);l.options.__file="register-mobile.vue";t["default"]=l.exports},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,n.regex)("url",i);t.default=a},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=i(r("8750"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var u=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=u;var o=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=o;var s=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=s;var f=function(e,t){return(0,n.default)({type:e},function(e){return!u(e)||t.test(e)})};t.regex=f},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,THEME:"mat",MODE:"pwa",VERSION:"0.2.1",API:"https://api-rcti.kitabantuin.id",configFirebase:{apiKey:"AIzaSyCO1IjY1673MySYwInNynKWsSE_72BEmmo",authDomain:"rc-rcti.firebaseapp.com",databaseURL:"https://rc-rcti.firebaseio.com",projectId:"rc-rcti",storageBucket:"rc-rcti.appspot.com",messagingSenderId:"181908626318"},VUE_ROUTER_MODE:"history",VUE_ROUTER_BASE:"/",APP_URL:"undefined",SERVICE_WORKER_FILE:"/service-worker.js"}).BUILD?r("cb69").withParams:r("0234").withParams,i=n;t.default=i},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(a)})};t.default=i;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)})};t.default=i},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return _.default}}),t.helpers=void 0;var n=$(r("6235")),i=$(r("3a54")),a=$(r("45b8")),u=$(r("ec11")),o=$(r("5d75")),s=$(r("c99d")),f=$(r("91d3")),c=$(r("2a12")),d=$(r("5db3")),l=$(r("d4f4")),p=$(r("aa82")),m=$(r("e652")),h=$(r("b6cb")),b=$(r("772d")),v=$(r("d294")),y=$(r("3360")),g=$(r("6417")),P=$(r("eb66")),O=$(r("46bc")),w=$(r("1331")),_=$(r("c301")),j=M(r("78ef"));function M(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function $(e){return e&&e.__esModule?e:{default:e}}t.helpers=j},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"sameAs",eq:e},function(t,r){return t===(0,n.ref)(e,this,r)})};t.default=i},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=i},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"ipAddress"},function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)});t.default=i;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},i=function(e,t){return"object"===r(e)&&void 0!==t?t:e(function(){})},a=n.vuelidate?n.vuelidate.withParams:i;t.withParams=a}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce(function(t,r){return t||r.apply(e,n)},!1)})};t.default=i},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"required"},n.req);t.default=i},e278:function(e,t,r){},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)})};t.default=i},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minValue",min:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e})};t.default=i},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r})};t.default=i}}]);