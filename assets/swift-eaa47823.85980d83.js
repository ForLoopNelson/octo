function e(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0;return t}var t=e(["_","var","let","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","open","public","internal","fileprivate","private","deinit","init","new","override","self","subscript","super","convenience","dynamic","final","indirect","lazy","required","static","unowned","unowned(safe)","unowned(unsafe)","weak","as","is","break","case","continue","default","else","fallthrough","for","guard","if","in","repeat","switch","where","while","defer","return","inout","mutating","nonmutating","catch","do","rethrows","throw","throws","try","didSet","get","set","willSet","assignment","associativity","infix","left","none","operator","postfix","precedence","precedencegroup","prefix","right","Any","AnyObject","Type","dynamicType","Self","Protocol","__COLUMN__","__FILE__","__FUNCTION__","__LINE__"]),n=e(["var","let","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","for"]),r=e(["true","false","nil","self","super","_"]),i=e(["Array","Bool","Character","Dictionary","Double","Float","Int","Int8","Int16","Int32","Int64","Never","Optional","Set","String","UInt8","UInt16","UInt32","UInt64","Void"]),a=/^\-?0b[01][01_]*/,o=/^\-?0o[0-7][0-7_]*/,u=/^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/,c=/^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/,f=/^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/,s=/^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/,p=/^\#[A-Za-z]+/,l=/^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;function d(e,d,h){if(e.sol()&&(d.indented=e.indentation()),e.eatSpace())return null;var _,k=e.peek();if("/"==k){if(e.match("//"))return e.skipToEnd(),"comment";if(e.match("/*"))return d.tokenize.push(v),v(e,d)}if(e.match(p))return"builtin";if(e.match(l))return"attribute";if(e.match(a))return"number";if(e.match(o))return"number";if(e.match(u))return"number";if(e.match(c))return"number";if(e.match(s))return"property";if("+-/*%=|&<>~^?!".indexOf(k)>-1)return e.next(),"operator";if(":;,.(){}[]".indexOf(k)>-1)return e.next(),e.match(".."),"punctuation";if(_=e.match(/("""|"|')/)){var x=m.bind(null,_[0]);return d.tokenize.push(x),x(e,d)}if(e.match(f)){var y=e.current();return i.hasOwnProperty(y)?"type":r.hasOwnProperty(y)?"atom":t.hasOwnProperty(y)?(n.hasOwnProperty(y)&&(d.prev="define"),"keyword"):"define"==h?"def":"variable"}return e.next(),null}function h(){var e=0;return function(t,n,r){var i=d(t,n,r);if("punctuation"==i)if("("==t.current())++e;else if(")"==t.current()){if(0==e)return t.backUp(1),n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n);--e}return i}}function m(e,t,n){for(var r,i=1==e.length,a=!1;r=t.peek();)if(a){if(t.next(),"("==r)return n.tokenize.push(h()),"string";a=!1}else{if(t.match(e))return n.tokenize.pop(),"string";t.next(),a="\\"==r}return i&&n.tokenize.pop(),"string"}function v(e,t){for(var n;e.match(/^[^/*]+/,!0),n=e.next();)"/"===n&&e.eat("*")?t.tokenize.push(v):"*"===n&&e.eat("/")&&t.tokenize.pop();return"comment"}function _(e,t,n){this.prev=e,this.align=t,this.indented=n}function k(e,t){var n=t.match(/^\s*($|\/[\/\*])/,!1)?null:t.column()+1;e.context=new _(e.context,n,e.indented)}function x(e){e.context&&(e.indented=e.context.indented,e.context=e.context.prev)}const y={startState:function(){return{prev:null,context:null,indented:0,tokenize:[]}},token:function(e,t){var n=t.prev;t.prev=null;var r=(t.tokenize[t.tokenize.length-1]||d)(e,t,n);if(r&&"comment"!=r?t.prev||(t.prev=r):t.prev=n,"punctuation"==r){var i=/[\(\[\{]|([\]\)\}])/.exec(e.current());i&&(i[1]?x:k)(t,e)}return r},indent:function(e,t,n){var r=e.context;if(!r)return 0;var i=/^[\]\}\)]/.test(t);return null!=r.align?r.align-(i?1:0):r.indented+(i?0:n.unit)},languageData:{indentOnInput:/^\s*[\)\}\]]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}};export{y as swift};
