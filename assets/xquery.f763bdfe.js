var v=function(){function e(g){return{type:g,style:"keyword"}}for(var t=e("operator"),n={type:"atom",style:"atom"},r={type:"axis_specifier",style:"qualifier"},i={",":{type:"punctuation",style:null}},c=["after","all","allowing","ancestor","ancestor-or-self","any","array","as","ascending","at","attribute","base-uri","before","boundary-space","by","case","cast","castable","catch","child","collation","comment","construction","contains","content","context","copy","copy-namespaces","count","decimal-format","declare","default","delete","descendant","descendant-or-self","descending","diacritics","different","distance","document","document-node","element","else","empty","empty-sequence","encoding","end","entire","every","exactly","except","external","first","following","following-sibling","for","from","ftand","ftnot","ft-option","ftor","function","fuzzy","greatest","group","if","import","in","inherit","insensitive","insert","instance","intersect","into","invoke","is","item","language","last","lax","least","let","levels","lowercase","map","modify","module","most","namespace","next","no","node","nodes","no-inherit","no-preserve","not","occurs","of","only","option","order","ordered","ordering","paragraph","paragraphs","parent","phrase","preceding","preceding-sibling","preserve","previous","processing-instruction","relationship","rename","replace","return","revalidation","same","satisfies","schema","schema-attribute","schema-element","score","self","sensitive","sentence","sentences","sequence","skip","sliding","some","stable","start","stemming","stop","strict","strip","switch","text","then","thesaurus","times","to","transform","treat","try","tumbling","type","typeswitch","union","unordered","update","updating","uppercase","using","validate","value","variable","version","weight","when","where","wildcards","window","with","without","word","words","xquery"],a=0,u=c.length;a<u;a++)i[c[a]]=e(c[a]);var d=["xs:anyAtomicType","xs:anySimpleType","xs:anyType","xs:anyURI","xs:base64Binary","xs:boolean","xs:byte","xs:date","xs:dateTime","xs:dateTimeStamp","xs:dayTimeDuration","xs:decimal","xs:double","xs:duration","xs:ENTITIES","xs:ENTITY","xs:float","xs:gDay","xs:gMonth","xs:gMonthDay","xs:gYear","xs:gYearMonth","xs:hexBinary","xs:ID","xs:IDREF","xs:IDREFS","xs:int","xs:integer","xs:item","xs:java","xs:language","xs:long","xs:Name","xs:NCName","xs:negativeInteger","xs:NMTOKEN","xs:NMTOKENS","xs:nonNegativeInteger","xs:nonPositiveInteger","xs:normalizedString","xs:NOTATION","xs:numeric","xs:positiveInteger","xs:precisionDecimal","xs:QName","xs:short","xs:string","xs:time","xs:token","xs:unsignedByte","xs:unsignedInt","xs:unsignedLong","xs:unsignedShort","xs:untyped","xs:untypedAtomic","xs:yearMonthDuration"];for(a=0,u=d.length;a<u;a++)i[d[a]]=n;var l=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"];for(a=0,u=l.length;a<u;a++)i[l[a]]=t;var y=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"];for(a=0,u=y.length;a<u;a++)i[y[a]]=r;return i}();function p(e,t,n){return t.tokenize=n,n(e,t)}function s(e,t){var n,r=e.next(),i=!1,c=(n=e).current()==='"'?n.match(/^[^\"]+\"\:/,!1):n.current()==="'"&&n.match(/^[^\"]+\'\:/,!1);if(r=="<"){if(e.match("!--",!0))return p(e,t,D);if(e.match("![CDATA",!1))return t.tokenize=E,"tag";if(e.match("?",!1))return p(e,t,_);var a=e.eat("/");e.eatSpace();for(var u,d="";u=e.eat(/[^\s\u00a0=<>\"\'\/?]/);)d+=u;return p(e,t,function(b,N){return function(h,f){return h.eatSpace(),N&&h.eat(">")?(o(f),f.tokenize=s,"tag"):(h.eat("/")||m(f,{type:"tag",name:b,tokenize:s}),h.eat(">")?(f.tokenize=s,"tag"):(f.tokenize=z,"tag"))}}(d,a))}if(r=="{")return m(t,{type:"codeblock"}),null;if(r=="}")return o(t),null;if(I(t))return r==">"?"tag":r=="/"&&e.eat(">")?(o(t),"tag"):"variable";if(/\d/.test(r))return e.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),"atom";if(r==="("&&e.eat(":"))return m(t,{type:"comment"}),p(e,t,T);if(c||r!=='"'&&r!=="'"){if(r==="$")return p(e,t,S);if(r===":"&&e.eat("="))return"keyword";if(r==="(")return m(t,{type:"paren"}),null;if(r===")")return o(t),null;if(r==="[")return m(t,{type:"bracket"}),null;if(r==="]")return o(t),null;var l=v.propertyIsEnumerable(r)&&v[r];if(c&&r==='"')for(;e.next()!=='"';);if(c&&r==="'")for(;e.next()!=="'";);l||e.eatWhile(/[\w\$_-]/);var y=e.eat(":");!e.eat(":")&&y&&e.eatWhile(/[\w\$_-]/),e.match(/^[ \t]*\(/,!1)&&(i=!0);var g=e.current();return l=v.propertyIsEnumerable(g)&&v[g],i&&!l&&(l={type:"function_call",style:"def"}),function(b){return k(b,"xmlconstructor")}(t)?(o(t),"variable"):(g!="element"&&g!="attribute"&&l.type!="axis_specifier"||m(t,{type:"xmlconstructor"}),l?l.style:"variable")}return p(e,t,w(r))}function T(e,t){for(var n,r=!1,i=!1,c=0;n=e.next();){if(n==")"&&r){if(!(c>0)){o(t);break}c--}else n==":"&&i&&c++;r=n==":",i=n=="("}return"comment"}function w(e,t){return function(n,r){var i;if(k(r,"string")&&n.current()==e)return o(r),t&&(r.tokenize=t),"string";if(m(r,{type:"string",name:e,tokenize:w(e,t)}),n.match("{",!1)&&x(r))return r.tokenize=s,"string";for(;i=n.next();){if(i==e){o(r),t&&(r.tokenize=t);break}if(n.match("{",!1)&&x(r))return r.tokenize=s,"string"}return"string"}}function S(e,t){var n=/[\w\$_-]/;if(e.eat('"')){for(;e.next()!=='"';);e.eat(":")}else e.eatWhile(n),e.match(":=",!1)||e.eat(":");return e.eatWhile(n),t.tokenize=s,"variable"}function z(e,t){var n=e.next();return n=="/"&&e.eat(">")?(x(t)&&o(t),I(t)&&o(t),"tag"):n==">"?(x(t)&&o(t),"tag"):n=="="?null:n=='"'||n=="'"?p(e,t,w(n,z)):(x(t)||m(t,{type:"attribute",tokenize:z}),e.eat(/[a-zA-Z_:]/),e.eatWhile(/[-a-zA-Z0-9_:.]/),e.eatSpace(),(e.match(">",!1)||e.match("/",!1))&&(o(t),t.tokenize=s),"attribute")}function D(e,t){for(var n;n=e.next();)if(n=="-"&&e.match("->",!0))return t.tokenize=s,"comment"}function E(e,t){for(var n;n=e.next();)if(n=="]"&&e.match("]",!0))return t.tokenize=s,"comment"}function _(e,t){for(var n;n=e.next();)if(n=="?"&&e.match(">",!0))return t.tokenize=s,"processingInstruction"}function I(e){return k(e,"tag")}function x(e){return k(e,"attribute")}function k(e,t){return e.stack.length&&e.stack[e.stack.length-1].type==t}function m(e,t){e.stack.push(t)}function o(e){e.stack.pop();var t=e.stack.length&&e.stack[e.stack.length-1].tokenize;e.tokenize=t||s}const A={startState:function(){return{tokenize:s,cc:[],stack:[]}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},languageData:{commentTokens:{block:{open:"(:",close:":)"}}}};export{A as xQuery};
