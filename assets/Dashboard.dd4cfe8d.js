import{s as l}from"./vendor.c2056232.js";import{T as c,a as u,b as h}from"./TheLeftSidebar.490ed87f.js";import{n as o,o as s}from"./index.d60f6a07.js";import m from"./TheRightSidebar.a3c948c0.js";import"./moment.08a7f518.js";var d=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("nav",{staticClass:"relative flex flex-wrap items-center content-between py-3 px-4 z-index-10 md:hidden p-6 w-full"},[t("router-link",{staticClass:"pt-1 pb-1 mr-4 text-lg whitespace-no-wrap flex justify-between items-center",attrs:{to:{name:"dashboard"}}},[e.october?t("TheSpookyLogo",{staticClass:"h-9"}):t("TheLogo",{attrs:{size:"2.25rem"}})],1),t("div",{staticClass:"flex items-stretch fixed top-3 right-3"},[t("router-link",{staticClass:"button button-size-medium button-color-gray ml-2",attrs:{to:{name:"menu"},role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t("svg",{attrs:{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})]),t("span",{staticClass:"ml-2"},[e._v("Menu")])]),e.isDashboard?t("router-link",{staticClass:"button button-size-medium button-color-gray ml-2",attrs:{to:{name:"quick-action"}}},[t("svg",{attrs:{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})])]):e.isDocument?t("router-link",{staticClass:"button button-size-medium button-color-gray ml-2",attrs:{to:{name:"document-meta",params:{id:e.document.id}}}},[t("svg",{attrs:{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})])]):t("button",{staticClass:"button button-size-medium button-color-gray ml-2",on:{click:e.close}},[t("svg",{attrs:{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])],1)],1)},_=[];const f={name:"TheNavbar",components:{TheLogo:c,TheSpookyLogo:u},computed:{document(){return this.$store.getters.currentDoc},isDocument(){return this.document&&this.$route.name==="document"},isDashboard(){return this.$route.name==="dashboard"},october(){return this.$store.state.settings.theme==="october"}},methods:{close(){if(this.document)return s({name:"document",params:{id:this.document.id}});s({name:"dashboard"})}}},n={};var v=o(f,d,_,!1,p,null,null,null);function p(e){for(let r in n)this[r]=n[r]}var b=function(){return v.exports}(),w=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("simplebar",{staticClass:"the-content flex h-full relative-fixed"},[t("TheNavbar"),t("router-view",{key:e.$route.fullPath,staticClass:"flex"})],1)},g=[];const x={name:"TheContent",components:{simplebar:l,TheNavbar:b}},a={};var k=o(x,w,g,!1,C,"49fe8a99",null,null);function C(e){for(let r in a)this[r]=a[r]}var $=function(){return k.exports}(),y=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"flex flex-col"},[t("div",{staticClass:"flex flex-grow flex-shrink min-h-0"},[!e.mobile&&e.showLeftSidebar?t("TheLeftSidebar",{staticClass:"hidden w-72 bg-gray-100 dark:bg-darkest md:flex m-2 rounded shadow"}):e._e(),t("div",{staticClass:"flex flex-col flex-grow flex-shrink min-h-0 min-w-0"},[t("TheContent",{staticClass:"flex-grow flex-shrink min-h-0 min-w-0"})],1),!e.mobile&&e.showRightSidebar&&e.currentDoc?t("TheRightSidebar",{staticClass:"hidden w-72 bg-gray-100 dark:bg-darkest md:flex m-2 rounded"}):e._e()],1)])},T=[];const S={name:"Dashboard",components:{TheContent:$,TheLeftSidebar:h,TheRightSidebar:m},computed:{currentDoc(){return this.$store.getters.currentDoc},mobile(){return["xs","sm"].includes(this.$mq)},showLeftSidebar(){return this.$store.state.showLeftSidebar},showRightSidebar(){return this.$route.name==="document"&&this.$store.state.showRightSidebar}}},i={};var M=o(S,y,T,!1,D,null,null,null);function D(e){for(let r in i)this[r]=i[r]}var E=function(){return M.exports}();export{E as default};
