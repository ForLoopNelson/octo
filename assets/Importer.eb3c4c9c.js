import{_ as l,W as c,a as i,c as p,e as o,t as u}from"./index.dc4163bf.js";const m={name:"Importer",data(){return{text:""}},methods:{importDocs(){JSON.parse(this.text).forEach(t=>{const s=new c(t);this.$store.dispatch("ADD_DOCUMENT",s)})}}},d={class:"container mx-auto p-4 flex flex-col flex-grow h-full gap-4"};function f(r,t,s,x,n,a){return i(),p("div",d,[o("div",null,[o("button",{onClick:t[0]||(t[0]=(...e)=>a.importDocs&&a.importDocs(...e)),class:"button button-size-medium button-color-gray"},"Import Docs")]),o("pre",{onInput:t[1]||(t[1]=(...e)=>n.text&&n.text(...e)),contenteditable:"",ref:"editable",class:"editable monospace min-h- w-full text-current bg-transparent outline-none flex-grow"},u(r.value),545)])}var b=l(m,[["render",f]]);export{b as default};