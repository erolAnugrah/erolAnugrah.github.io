(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5f3e348e"],{"6f9f":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("q-page",{attrs:{id:"profile"}},[i("div",{staticClass:"row section-profile"},[i("div",{staticClass:"col-xs-10 offset-1"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-3"},[i("div",{staticClass:"sidebar"},[i("div",{staticClass:"detail-avatar"},[i("img",{staticClass:"user--avatar",attrs:{src:"this.$store.getters['auth/user'].photo",alt:""}}),i("div",{staticClass:"detail-users"},[i("p",{staticClass:"users--name"},[t._v(t._s(this.$store.getters["auth/user"].displayName))]),i("p",{staticClass:"users--email"},[t._v(t._s(this.$store.getters["auth/user"].email))])])]),i("div",{staticClass:"button--sidebar"},[i("q-btn",{staticClass:"full-width btn--edit",attrs:{color:"transparant","text-color":"white",label:"Edit Profile",to:"/edit-profile",exact:""}}),i("q-btn",{staticClass:"full-width btn--out",attrs:{"text-color":"white",label:"Sign Out"},on:{click:function(s){t.signOutSoon()}}})],1),i("div",{staticClass:"menu--sidebar"},[i("div",{staticClass:"side--menu"},[i("q-item",[i("q-btn",{staticClass:"p_menu_btn",attrs:{to:"/profile/continue",exact:""}},[i("q-item-side",{attrs:{icon:"watch_later"}}),i("q-item-main",{attrs:{label:"Continue Watching",id:"continue"}})],1)],1),i("q-item",[i("q-btn",{staticClass:"p_menu_btn",attrs:{to:"/profile/history",exact:""}},[i("q-item-side",{attrs:{icon:"history"}}),i("q-item-main",{attrs:{label:"History"}})],1)],1),i("q-item",[i("q-btn",{staticClass:"p_menu_btn",attrs:{to:"/profile/watch-list",exact:""}},[i("q-item-side",{attrs:{icon:"video_library"}}),i("q-item-main",{attrs:{label:"My Watch List"}})],1)],1)],1),i("div",{staticClass:"line--menu"}),i("div",{staticClass:"side--menu"},[i("q-item",[i("q-btn",{staticClass:"p_menu_btn",attrs:{to:"/profile/term",exact:""}},[i("q-item-side",{attrs:{icon:"info_outline"}}),i("q-item-main",{attrs:{label:"Terms and Conditions"}})],1)],1),i("q-item",[i("q-btn",{staticClass:"p_menu_btn",attrs:{to:"/profile/privacy",exact:""}},[i("q-item-side",{attrs:{icon:"lock_outline"}}),i("q-item-main",{attrs:{label:"Privacy Policy"}})],1)],1),i("q-item",[i("q-btn",{staticClass:"p_menu_btn",attrs:{to:"/profile/contact",exact:""}},[i("q-item-side",{attrs:{icon:"mail_outline"}}),i("q-item-main",{attrs:{label:"Contact Us"}})],1)],1)],1)])])]),i("div",{staticClass:"col"},[i("div",{staticClass:"page--wrap"},[i("router-view")],1)])])])])])},e=[];a._withStripped=!0;i("b9fd");var l={name:"profile",methods:{signOutSoon:function(){this.$store.dispatch("auth/signOut")}}},n=l,r=i("2877"),o=Object(r["a"])(n,a,e,!1,null,null,null);o.options.__file="profile.vue";s["default"]=o.exports},b9fd:function(t,s,i){}}]);