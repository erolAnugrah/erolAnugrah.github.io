(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["d9372ac6"],{"1bd8":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("swiper",{attrs:{options:t.swiperOption}},[a("swiper-slide",[a("div",{staticClass:"cards"},[a("v-lazy-image",{attrs:{src:"https://images.unsplash.com/photo-1522850403397-b0c8f2f75451?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80","src-placeholder":"../statics/ic_default_poster.png"}})],1)]),a("swiper-slide",[a("div",{staticClass:"cards"},[a("v-lazy-image",{attrs:{src:"https://images.unsplash.com/photo-1522850403397-b0c8f2f75451?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80","src-placeholder":"../statics/ic_default_poster.png"}})],1)]),a("swiper-slide",[a("div",{staticClass:"cards"},[a("v-lazy-image",{attrs:{src:"https://images.unsplash.com/photo-1522850403397-b0c8f2f75451?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80","src-placeholder":"../statics/ic_default_poster.png"}})],1)]),a("swiper-slide",[a("div",{staticClass:"cards"},[a("v-lazy-image",{attrs:{src:"https://images.unsplash.com/photo-1522850403397-b0c8f2f75451?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80","src-placeholder":"../statics/ic_default_poster.png"}})],1)]),a("swiper-slide",[a("div",{staticClass:"cards"},[a("v-lazy-image",{attrs:{src:"https://images.unsplash.com/photo-1522850403397-b0c8f2f75451?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80","src-placeholder":"../statics/ic_default_poster.png"}})],1)]),a("swiper-slide",[a("div",{staticClass:"cards"},[a("v-lazy-image",{attrs:{src:"https://images.unsplash.com/photo-1522850403397-b0c8f2f75451?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80","src-placeholder":"../statics/ic_default_poster.png"}})],1)]),a("swiper-slide",[a("div",{staticClass:"cards"},[a("v-lazy-image",{attrs:{src:"https://images.unsplash.com/photo-1522850403397-b0c8f2f75451?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80","src-placeholder":"../statics/ic_default_poster.png"}})],1)])],1)},e=[];i._withStripped=!0;var l=a("8dc2"),o=a.n(l),c=a("7212"),r={name:"Slider_Components",data:function(){return{swiperOption:{slidesPerView:5,spaceBetween:10,breakpoints:{1024:{slidesPerView:5.4,spaceBetween:10},768:{slidesPerView:3.4,spaceBetween:10},640:{slidesPerView:2.4,spaceBetween:10}}}}},components:{VLazyImage:o.a,swiper:c["swiper"],swiperSlide:c["swiperSlide"]},mounted:function(){}},n=r,d=(a("c7d4"),a("2877")),p=Object(d["a"])(n,i,e,!1,null,null,null);p.options.__file="slider.vue";s["a"]=p.exports},"2bac":function(t,s,a){"use strict";var i=a("de2d"),e=a.n(i);e.a},4053:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",{staticClass:"detail-page"},[a("div",{staticClass:"bg-second"},[a("div",{staticClass:"cover-img"},[a("v-lazy-image",{attrs:{src:"https://www.whiteboardjournal.com/wp-content/uploads/2018/04/gundala.jpg","src-placeholder":"../statics/ic_default_poster.png"}}),a("div",{staticClass:"bg-white"})],1),a("div",{staticClass:"relative-position"},[a("q-btn",{staticClass:"btn-play",attrs:{icon:"play_arrow"}}),a("q-btn",{staticClass:"btn-bookmark",attrs:{icon:"playlist_add"}}),a("q-btn",{staticClass:"btn-share",attrs:{icon:"share"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 detail-movie relative-position"},[a("h4",{staticClass:"text-center"},[t._v("Gundala")]),a("p",{staticClass:"genre text-center"},[t._v("| 2019 | Action - SCFI - Fantasy |")]),a("div",{staticClass:"rating text-center"},[a("q-rating",{attrs:{color:"amber-8",readonly:"",size:"25px",max:5,icon:"star"},model:{value:t.ratingModel,callback:function(s){t.ratingModel=s},expression:"ratingModel"}})],1),a("p",{staticClass:"desc"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),a("p",[t._v("Artis: Artis 1, Artis 2, Artis 3")])])])]),a("q-tabs",{staticClass:"text-white",model:{value:t.selectedTab,callback:function(s){t.selectedTab=s},expression:"selectedTab"}},[a("q-tab",{staticClass:"text-white",attrs:{slot:"title",name:"tab-1",label:"Episode"},slot:"title"}),a("q-tab",{staticClass:"text-white",attrs:{slot:"title",name:"tab-2",label:"Extras"},slot:"title"}),a("q-tab",{staticClass:"text-white",attrs:{slot:"title",name:"tab-3",label:"Clips"},slot:"title"}),a("q-tab",{staticClass:"text-white",attrs:{slot:"title",name:"tab-4",label:"Photo"},slot:"title"}),a("q-tab-pane",{staticClass:"text-white",attrs:{name:"tab-1"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-5"},[a("q-select",{staticClass:"text-white",attrs:{options:t.selectOptions},model:{value:t.select,callback:function(s){t.select=s},expression:"select"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 episode-list"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6 poster-film"},[a("v-lazy-image",{staticClass:"shadow-2",attrs:{src:"https://www.whiteboardjournal.com/wp-content/uploads/2018/04/gundala.jpg","src-placeholder":"../statics/ic_default_poster.png"}})],1),a("div",{staticClass:"col-xs-4 detail-ep"},[a("p",{staticClass:"title"},[t._v("Gundala "),a("br"),t._v(" S01:E01")]),a("p",{staticClass:"genre"},[t._v("2019 | Action - SCFI - Fantasy")])]),a("div",{staticClass:"col-xs-2 btn-download"},[a("q-btn",{attrs:{icon:"file_download"}})],1)]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("p",{staticClass:"text-justify"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t  \t\t\ttempor incididunt ut labore et dolore magna aliqua. ")])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 episode-list"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6 poster-film"},[a("v-lazy-image",{staticClass:"shadow-2",attrs:{src:"https://www.whiteboardjournal.com/wp-content/uploads/2018/04/gundala.jpg","src-placeholder":"../statics/ic_default_poster.png"}})],1),a("div",{staticClass:"col-xs-4 detail-ep"},[a("p",{staticClass:"title"},[t._v("Gundala "),a("br"),t._v(" S01:E01")]),a("p",{staticClass:"genre"},[t._v("2019 | Action - SCFI - Fantasy")])]),a("div",{staticClass:"col-xs-2 btn-download"},[a("q-btn",{attrs:{icon:"file_download"}})],1)]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("p",{staticClass:"text-justify"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t  \t\t\ttempor incididunt ut labore et dolore magna aliqua. ")])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 episode-list"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6 poster-film"},[a("v-lazy-image",{staticClass:"shadow-2",attrs:{src:"https://www.whiteboardjournal.com/wp-content/uploads/2018/04/gundala.jpg","src-placeholder":"../statics/ic_default_poster.png"}})],1),a("div",{staticClass:"col-xs-4 detail-ep"},[a("p",{staticClass:"title"},[t._v("Gundala "),a("br"),t._v(" S01:E01")]),a("p",{staticClass:"genre"},[t._v("2019 | Action - SCFI - Fantasy")])]),a("div",{staticClass:"col-xs-2 btn-download"},[a("q-btn",{attrs:{icon:"file_download"}})],1)]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("p",{staticClass:"text-justify"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t  \t\t\ttempor incididunt ut labore et dolore magna aliqua. ")])])])])])]),a("q-tab-pane",{staticClass:"text-black",attrs:{name:"tab-2"}},[t._v("Tab Two")]),a("q-tab-pane",{staticClass:"text-black",attrs:{name:"tab-3"}},[t._v("Tab Three")]),a("q-tab-pane",{staticClass:"text-black",attrs:{name:"tab-4"}},[t._v("Tab Four")])],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("p",{staticClass:"title--program"},[t._v("You May Also Like")])])]),a("slider")],1)},e=[];i._withStripped=!0;a("949a");var l=a("8dc2"),o=a.n(l),c=a("7212"),r=a("1bd8"),n={name:"detail_mobile",data:function(){return{ratingModel:4,selectedTab:"tab-1",select:"1",selectOptions:[{label:"Season 1",value:"1"},{label:"Season 2",value:"2"},{label:"Season 3",value:"3"},{label:"Season 4",value:"4"}]}},components:{VLazyImage:o.a,swiper:c["swiper"],swiperSlide:c["swiperSlide"],slider:r["a"]},mounted:function(){}},d=n,p=(a("2bac"),a("2877")),u=Object(p["a"])(d,i,e,!1,null,null,null);u.options.__file="movies-mobile.vue";s["default"]=u.exports},"71dc":function(t,s,a){},"949a":function(t,s,a){},c7d4:function(t,s,a){"use strict";var i=a("71dc"),e=a.n(i);e.a},de2d:function(t,s,a){}}]);