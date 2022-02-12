var p=Object.defineProperty,v=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var d=(e,s,t)=>s in e?p(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,u=(e,s)=>{for(var t in s||(s={}))C.call(s,t)&&d(e,t,s[t]);if(c)for(var t of c(s))_.call(s,t)&&d(e,t,s[t]);return e},m=(e,s)=>v(e,x(s));import{h as b}from"./moment.08a7f518.js";import{n as f,D as w,R as y,M as k,o as D}from"./index.d60f6a07.js";var M=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"shadow relative flex flex-col min-w-0 rounded text-sm overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-800 dark:text-gray-300"},[t("div",{staticClass:"flex-grow flex-shrink overflow-hidden p-4"},[t("pre",[e._v(e._s(e.text))])]),t("div",{staticClass:"flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-900"},[t("p",{staticClass:"text-gray-500"},[e._v(e._s(e.updated))]),t("div",[e.discardedAt?t("button",{staticClass:"destroy button-flat button-size-medium text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800",on:{click:function(i){return i.stopPropagation(),e.restore.apply(null,arguments)}}},[t("svg",{attrs:{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})]),t("span",{staticClass:"ml-2"},[e._v("Restore")])]):t("button",{staticClass:"destroy button-flat button-size-medium text-sm text-red-500 bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800",on:{click:function(i){return i.stopPropagation(),e.discard.apply(null,arguments)}}},[t("svg",{attrs:{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})]),t("span",{staticClass:"ml-2"},[e._v("Discard")])])])])])},E=[];const R={name:"Document",props:{id:String,text:String,updatedAt:Date,discardedAt:Date},computed:{updated(){return`Updated on ${b(this.updatedAt).format("ddd, MMM Do, YYYY [at] h:mm A")}`}},methods:{discard(){this.$store.dispatch(w,{id:this.id})},restore(){this.$store.dispatch(y,{id:this.id})}}},g={};var A=f(R,M,E,!1,$,null,null,null);function $(e){for(let s in g)this[s]=g[s]}var T=function(){return A.exports}(),z=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex flex-col w-full"},[t("div",{staticClass:"flex items-center text-2xl"},[e.tag?t("div",{staticClass:"flex items-center"},[t("svg",{attrs:{height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"}})]),t("span",{staticClass:"ml-3 flex-grow"},[e._v(e._s(e.tag))])]):t("span",{staticClass:"action capitalize"},[e._v(e._s(e.action))])]),t("div",{staticClass:"my-4"},[t("div",{staticClass:"flex align-items-bottom"},[t("div",{staticClass:"flex-grow"},[t("div",{staticClass:"flex items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.filterText,expression:"filterText"}],ref:"input",staticClass:"form-text w-full shadow",attrs:{type:"text",placeholder:"Start typing to filter the list...",autocomplete:"off"},domProps:{value:e.filterText},on:{input:function(i){i.target.composing||(e.filterText=i.target.value)}}}),t("label",{staticClass:"button button-size-medium button-color-gray shadow ml-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.filterRegex,expression:"filterRegex"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.filterRegex)?e._i(e.filterRegex,null)>-1:e.filterRegex},on:{change:function(i){var r=e.filterRegex,n=i.target,l=!!n.checked;if(Array.isArray(r)){var o=null,a=e._i(r,o);n.checked?a<0&&(e.filterRegex=r.concat([o])):a>-1&&(e.filterRegex=r.slice(0,a).concat(r.slice(a+1)))}else e.filterRegex=l}}}),t("span",{staticClass:"monospace ml-3"},[e._v(".*")])]),t("label",{staticClass:"button button-size-medium button-color-gray shadow ml-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.filterCase,expression:"filterCase"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.filterCase)?e._i(e.filterCase,null)>-1:e.filterCase},on:{change:function(i){var r=e.filterCase,n=i.target,l=!!n.checked;if(Array.isArray(r)){var o=null,a=e._i(r,o);n.checked?a<0&&(e.filterCase=r.concat([o])):a>-1&&(e.filterCase=r.slice(0,a).concat(r.slice(a+1)))}else e.filterCase=l}}}),t("span",{staticClass:"monospace ml-3"},[e._v("Aa")])])])])]),t("small",{staticClass:"block mt-2 text-gray-700"},[e._v(e._s(e.filterMessage))])]),t("div",{staticClass:"mb-4"},[t("button",{staticClass:"button button-size-medium button-color-gray shadow",on:{click:e.toggleIsEditing}},[e._v(e._s(e.isEditing?"Cancel":"Edit Documents"))]),e.canMerge?t("button",{staticClass:"button button-size-medium button-color-gray shadow ml-2",on:{click:e.mergeDocuments}},[e._v("Merge Documents")]):e._e()]),t("div",[e.isEditing?t("p",{staticClass:"text-gray-700"},[e._v("Select two or more documents to merge them together.")]):e._e()]),t("div",{staticClass:"grid gap-4 grid-cols-1",class:e.cols===2&&"lg:grid-cols-2"},[e._l(e.visibleDocuments,function(i){return t("div",{key:i.id,staticClass:"rounded relative cursor-pointer outline-none focus:ring",attrs:{tabindex:"0"},on:{keypress:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.selectDocument(i.id)},click:function(r){return e.selectDocument(i.id)}}},[t("Document",e._b({staticClass:"h-96"},"Document",i,!1)),i.selected?t("div",{staticClass:"flex items-center justify-center rounded absolute inset-0 bg-black bg-opacity-10 dark:bg-opacity-50"},[t("svg",{attrs:{height:"3em",width:"3em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})])]):e._e()],1)}),e.showLoadMore?t("div",{staticClass:"flex items-center justify-center rounded cursor-pointer"},[t("div",{staticClass:"button button-color-gray text-lg px-8 py-6",on:{click:e.loadMore}},[t("svg",{attrs:{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}})]),t("span",{staticClass:"ml-3"},[e._v("Load More")])])]):e._e()],2)])},j=[];const S={name:"DocumentList",props:{tag:String,actionable:Boolean,discarded:Boolean,recent:Boolean,untagged:Boolean,cols:{type:Number,default:2}},components:{Document:T},data(){return{filterCase:!1,filterRegex:!0,filterText:"",isEditing:!1,selectedDocuments:[],visibleCount:25}},computed:{action(){return this.tag?this.tag:this.actionable?"actionable":this.discarded?"discarded":this.recent?"recent":this.untagged?"untagged":"documents"},canMerge(){return this.selectedDocuments.length>1},documents(){return this.tag?this.$store.getters.withTag(this.tag):this.actionable?this.$store.getters.actionable:this.discarded?this.$store.getters.discarded:this.recent?this.$store.getters.kept:this.untagged?this.$store.getters.untagged:this.$store.getters.decrypted},filterMessage(){const e=this.filterCase?"sensitive":"insensitive",s=this.filterRegex?"regular expression":"plain text";return`Filtering documents with case ${e} ${s} queries.`},filteredDocuments(){return this.documents.filter(e=>this.filterText?this.filterRegex?new RegExp(this.filterText,this.filterCase?"":"i").test(e.text):this.filterCase?e.text.includes(this.filterText):e.text.toLowerCase().includes(this.filterText.toLowerCase()):!0)},finalDocuments(){return this.filteredDocuments.map(e=>m(u({},e),{selected:this.selectedDocuments.includes(e)}))},showLoadMore(){return this.visibleCount<=this.finalDocuments.length},visibleDocuments(){return this.finalDocuments.slice(0,this.visibleCount)}},methods:{loadMore(){this.visibleCount+=25},mergeDocuments(){this.$store.dispatch(k,this.selectedDocuments),this.selectedDocuments=[]},toggleIsEditing(){this.isEditing=!this.isEditing,this.isEditing||(this.selectedDocuments=[])},selectDocument(e){this.isEditing?this.selectedDocuments.find(s=>s.id===e)?this.selectedDocuments=this.selectedDocuments.filter(s=>s.id!==e):this.selectedDocuments.push(this.filteredDocuments.find(s=>s.id===e)):D({name:"document",params:{id:e}})}},mounted(){this.$refs.input.focus()}},h={};var B=f(S,z,j,!1,L,null,null,null);function L(e){for(let s in h)this[s]=h[s]}var V=function(){return B.exports}();export{V as D};
