import{Q as t,g as s,j as e,E as i,o as n,k as r,O as a,p as h,w as o,u as l,D as u,z as p}from"./vendor.c7e104ba.js";function c(s,e,i,n=0,r=0){return null==e&&-1==(e=s.search(/[^\s\u00a0]/))&&(e=s.length),t(s.slice(n,e),r,i)}class f{constructor(t,s,e){this.string=t,this.tabSize=s,this.indentUnit=e,this.pos=0,this.start=0,this.lastColumnPos=0,this.lastColumnValue=0}eol(){return this.pos>=this.string.length}sol(){return 0==this.pos}peek(){return this.string.charAt(this.pos)||void 0}next(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)}eat(t){let s,e=this.string.charAt(this.pos);if(s="string"==typeof t?e==t:e&&(t instanceof RegExp?t.test(e):t(e)),s)return++this.pos,e}eatWhile(t){let s=this.pos;for(;this.eat(t););return this.pos>s}eatSpace(){let t=this.pos;for(;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>t}skipToEnd(){this.pos=this.string.length}skipTo(t){let s=this.string.indexOf(t,this.pos);if(s>-1)return this.pos=s,!0}backUp(t){this.pos-=t}column(){return this.lastColumnPos<this.start&&(this.lastColumnValue=c(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue}indentation(){return c(this.string,null,this.tabSize)}match(t,s,e){if("string"==typeof t){let i=t=>e?t.toLowerCase():t;return i(this.string.substr(this.pos,t.length))==i(t)?(!1!==s&&(this.pos+=t.length),!0):null}{let e=this.string.slice(this.pos).match(t);return e&&e.index>0?null:(e&&!1!==s&&(this.pos+=e[0].length),e)}}current(){return this.string.slice(this.start,this.pos)}}function g(t){if("object"!=typeof t)return t;let s={};for(let e in t){let i=t[e];s[e]=i instanceof Array?i.slice():i}return s}class m extends s{constructor(t){let s=e(t.languageData),a={token:(h=t).token,blankLine:h.blankLine||(()=>{}),startState:h.startState||(()=>!0),copyState:h.copyState||g,indent:h.indent||(()=>null),languageData:h.languageData||{}};var h;super(s,{startParse:(t,s,e)=>new b(this,t,s,e)},function(t){let s=i.define({id:P.length,name:"Document",props:[n.add((()=>t))]});return P.push(s),s}(s),[r.of(((t,s)=>this.getIndent(t,s)))]),this.streamParser=a,this.stateAfter=new WeakMap}static define(t){return new m(t)}getIndent(t,s){let e=a(t.state),i=e.resolve(s);for(;i&&i.type!=this.topNode;)i=i.parent;if(!i)return null;let n,r,h=d(this,e,0,i.from,s);if(h?(r=h.state,n=h.pos+1):(r=this.streamParser.startState(t.unit),n=0),s-n>1e4)return null;for(;n<s;){let e=t.state.doc.lineAt(n),i=Math.min(s,e.to);if(e.length){let s=new f(e.text,t.state.tabSize,t.unit);for(;s.pos<i-e.from;)S(this.streamParser.token,s,r)}else this.streamParser.blankLine(r,t.unit);if(i==s)break;n=e.to+1}let{text:o}=t.state.doc.lineAt(s);return this.streamParser.indent(r,/^\s*(.*)/.exec(o)[1],t)}get allowsNesting(){return!1}}function d(t,s,e,i,n){let r=e>=i&&e+s.length<=n&&t.stateAfter.get(s);if(r)return{state:t.streamParser.copyState(r),pos:e+s.length};for(let a=s.children.length-1;a>=0;a--){let r=s.children[a],o=e+s.positions[a],l=r instanceof h&&o<n&&d(t,r,o,i,n);if(l)return l}return null}function k(t,s,e,i,n){if(n&&e<=0&&i>=s.length)return s;n||s.type!=t.topNode||(n=!0);for(let r=s.children.length-1;r>=0;r--){let a,o=s.positions[r]+e,l=s.children[r];if(o<i&&l instanceof h){if(!(a=k(t,l,e-o,i-o,n)))break;return n?new h(s.type,s.children.slice(0,r).concat(a),s.positions.slice(0,r+1),o+a.length):a}}return null}class b{constructor(t,s,e,i){this.lang=t,this.input=s,this.startPos=e,this.context=i,this.chunks=[],this.chunkPos=[],this.chunk=[];let{state:n,tree:r}=function(t,s,e,i){for(let n of s){let s,i=n.from<=e&&n.to>e&&d(t,n.tree,0-n.offset,e,n.to);if(i&&(s=k(t,n.tree,e+n.offset,i.pos+n.offset,!1)))return{state:i.state,tree:s}}return{state:t.streamParser.startState(o(i)),tree:h.empty}}(t,i.fragments,e,i.state);this.state=n,this.pos=this.chunkStart=e+r.length,r.length&&(this.chunks.push(r),this.chunkPos.push(0)),this.pos<i.viewport.from-1e5&&(this.state=this.lang.streamParser.startState(o(i.state)),i.skipUntilInView(this.pos,i.viewport.from),this.pos=i.viewport.from)}advance(){let t=Math.min(this.context.viewport.to,this.input.length,this.chunkStart+2048);for(;this.pos<t;)this.parseLine();return this.chunkStart<this.pos&&this.finishChunk(),t<this.input.length&&this.pos<this.context.viewport.to?null:(this.context.skipUntilInView(this.pos,this.input.length),this.finish())}parseLine(){let t=this.input.lineAfter(this.pos),{streamParser:s}=this.lang,e=new f(t,this.context?this.context.state.tabSize:4,o(this.context.state));if(e.eol())s.blankLine(this.state,e.indentUnit);else for(;!e.eol();){let t=S(s.token,e,this.state);t&&this.chunk.push(x(t),this.pos+e.start,this.pos+e.pos,4)}this.pos+=t.length,this.pos<this.input.length&&this.pos++}finishChunk(){let t=h.build({buffer:this.chunk,start:this.chunkStart,length:this.pos-this.chunkStart,nodeSet:y,topID:0,maxBufferLength:2048});this.lang.stateAfter.set(t,this.lang.streamParser.copyState(this.state)),this.chunks.push(t),this.chunkPos.push(this.chunkStart-this.startPos),this.chunk=[],this.chunkStart=this.pos}finish(){return new h(this.lang.topNode,this.chunks,this.chunkPos,this.pos-this.startPos).balance()}forceFinish(){return this.finish()}}function S(t,s,e){s.start=s.pos;for(let i=0;i<10;i++){let i=t(s,e);if(s.pos>s.start)return i}throw new Error("Stream parser failed to advance stream.")}const w=Object.create(null),P=[i.none],y=new u(P),v=[];function x(t){return t?w[t]||(w[t]=function(t){let s=null;for(let i of t.split(".")){let t=p[i];t?"function"==typeof t?s?s=t(s):N(i,`Modifier ${i} used at start of tag`):s?N(i,`Tag ${i} used as modifier`):s=t:N(i,`Unknown highlighting tag ${i}`)}if(!s)return 0;let e=t.replace(/ /g,"_"),n=i.define({id:P.length,name:e,props:[l({[e]:s})]});return P.push(n),n.id}(t)):0}for(let[A,C]of[["variable","variableName"],["variable-2","variableName.special"],["string-2","string.special"],["def","variableName.definition"],["tag","typeName"],["attribute","propertyName"],["type","typeName"],["builtin","variableName.standard"],["qualifier","modifier"],["error","invalid"],["header","heading"],["property","propertyName"]])w[A]=x(C);function N(t,s){v.indexOf(t)>-1||(v.push(t),console.warn(s))}export{m as StreamLanguage,f as StringStream};