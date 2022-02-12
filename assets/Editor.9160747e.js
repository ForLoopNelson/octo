var p=Object.defineProperty,m=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var r=(t,e,i)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,n=(t,e)=>{for(var i in e||(e={}))y.call(e,i)&&r(t,i,e[i]);if(a)for(var i of a(e))g.call(e,i)&&r(t,i,e[i]);return t},o=(t,e)=>m(t,f(e));import{E as _}from"./Editor.2aa5a3f1.js";import{n as $,j as d,s as D,i as v,u as A,E,A as b,o as c,k as S}from"./index.d60f6a07.js";import"./MarkdownEditor.umd.6e7ef77c.js";import"./vendor.c2056232.js";var T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Editor",{ref:"editable",attrs:{appearance:t.appearance,initialCursor:t.initialCursor,initialSelection:t.initialSelection,initialVimMode:t.initialVimMode,settings:t.settings,text:t.document.text},on:{input:t.input}})},w=[];const l=(t,e=", ")=>t.map(i=>`#${i}`).join(e),C={name:"EditorView",components:{Editor:_},props:{id:String,initialCursor:{type:Object,default:()=>({character:0,line:0}),validator:t=>t.hasOwnProperty("character")&&t.hasOwnProperty("line")},initialFocus:{type:String,default:()=>"any",validator:t=>["any","start","end"].includes(t)},initialSelection:{type:Object},initialVimMode:{type:String},readonly:{type:Boolean}},data(){return{editor:null,placeholder:new d({text:l(this.$store.state.context.tags," ")})}},watch:{document(){this.$refs.editable.clearHistory(),this.$refs.editable.focusEditor()},tags(){this.updateTitle()},header(){this.updateTitle()}},computed:{appearance(){return this.$store.state.settings.theme==="october"?"dark":this.$store.state.settings.theme},currentDoc(){return this.$store.getters.currentDoc},document(){return this.$store.getters.decrypted.find(t=>t.id===this.id)||this.placeholder},ink(){return this.settings.version==="ink"},settings(){return this.$store.state.settings.editor},tags(){return this.document.tags},header(){return this.document.headers[0]}},methods:{async updateTitle(){D(this.document.headers[0]||l(this.document.tags))},async findSharedDocument(){const t=await v.collection("documents").where("public","==",!0).where("id","==",this.$route.params.id).get(),[e,...i]=t.docs,s=e.data(),h=o(n({},s),{id:s.id||s.clientId,firebaseId:e.id,textKey:s.textKey||s.dataKey,createdAt:s.createdAt?s.createdAt.toDate():null,discardedAt:s.discardedAt?s.discardedAt.toDate():null,updatedAt:s.updatedAt?s.updatedAt.toDate():null,touchedAt:s.touchedAt?s.touchedAt.toDate():null,syncedAt:s.syncedAt.toDate()});return A(h,{privateKey:this.$store.state.settings.crypto.privateKey})},async input(t){this.id?this.$store.dispatch(E,{id:this.document.id,text:t}):(this.$store.dispatch(b,new d({id:this.document.id,text:t})),this.ink?c({name:"document",params:{id:this.document.id,initialSelection:this.$refs.editable.getSelection()}}):c({name:"document",params:{id:this.document.id,initialCursor:{character:this.$refs.editable.getCursor().ch,line:this.$refs.editable.getCursor().line},initialVimMode:this.$refs.editable.getKeyMap()}}))}},beforeRouteUpdate(t,e,i){t.name==="document"&&this.$store.dispatch(S,{id:t.params.id}),i()},async mounted(){this.updateTitle(),this.readonly&&(this.placeholder=await this.findSharedDocument())}},u={};var x=$(C,T,w,!1,M,null,null,null);function M(t){for(let e in u)this[e]=u[e]}var I=function(){return x.exports}();export{I as default};
