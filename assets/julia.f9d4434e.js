function u(t,e){return e===void 0&&(e="\\b"),new RegExp("^(("+t.join(")|(")+"))"+e)}var b=u(["[<>]:","[<>=]=","<<=?",">>>?=?","=>","->","\\/\\/","[\\\\%*+\\-<>!=\\/^|&\\u00F7\\u22BB]=?","\\?","\\$","~",":","\\u00D7","\\u2208","\\u2209","\\u220B","\\u220C","\\u2218","\\u221A","\\u221B","\\u2229","\\u222A","\\u2260","\\u2264","\\u2265","\\u2286","\\u2288","\\u228A","\\u22C5","\\b(in|isa)\\b(?!.?\\()"],""),F=/^[;,()[\]{}]/,g=/^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/,v=u(["\\\\[0-7]{1,3}","\\\\x[A-Fa-f0-9]{1,2}",`\\\\[abefnrtv0%?'"\\\\]`,"([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])"],"'"),p=["if","else","elseif","while","for","begin","let","end","do","try","catch","finally","return","break","continue","global","local","const","export","import","importall","using","function","where","macro","module","baremodule","struct","type","mutable","immutable","quote","typealias","abstract","primitive","bitstype"],h=["true","false","nothing","NaN","Inf"],x=u(["begin","function","type","struct","immutable","let","macro","for","while","quote","if","else","elseif","try","finally","catch","do"]),A=u(["end","else","elseif","catch","finally"]),y=u(p),E=u(h),_=/^@[_A-Za-z][\w]*/,z=/^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,D=/^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/;function m(t){return t.nestedArrays>0}function f(t,e){return e===void 0&&(e=0),t.scopes.length<=e?null:t.scopes[t.scopes.length-(e+1)]}function o(t,e){if(t.match("#=",!1))return e.tokenize=w,e.tokenize(t,e);var n=e.leavingExpr;if(t.sol()&&(n=!1),e.leavingExpr=!1,n&&t.match(/^'+/))return"operator";if(t.match(/\.{4,}/))return"error";if(t.match(/\.{1,3}/))return"operator";if(t.eatSpace())return null;var r,i=t.peek();if(i==="#")return t.skipToEnd(),"comment";if(i==="["&&(e.scopes.push("["),e.nestedArrays++),i==="("&&(e.scopes.push("("),e.nestedGenerators++),m(e)&&i==="]"){for(;e.scopes.length&&f(e)!=="[";)e.scopes.pop();e.scopes.pop(),e.nestedArrays--,e.leavingExpr=!0}if(e.nestedGenerators>0&&i===")"){for(;e.scopes.length&&f(e)!=="(";)e.scopes.pop();e.scopes.pop(),e.nestedGenerators--,e.leavingExpr=!0}if(m(e)){if(e.lastToken=="end"&&t.match(":"))return"operator";if(t.match("end"))return"number"}if((r=t.match(x,!1))&&e.scopes.push(r[0]),t.match(A,!1)&&e.scopes.pop(),t.match(/^::(?![:\$])/))return e.tokenize=T,e.tokenize(t,e);if(!n&&t.match(z)||t.match(/:([<>]:|<<=?|>>>?=?|->|\/\/|\.{2,3}|[\.\\%*+\-<>!\/^|&]=?|[~\?\$])/))return"builtin";if(t.match(b))return"operator";if(t.match(/^\.?\d/,!1)){var d=RegExp(/^im\b/),s=!1;if(t.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i)&&(s=!0),t.match(/^0x[0-9a-f_]+/i)&&(s=!0),t.match(/^0b[01_]+/i)&&(s=!0),t.match(/^0o[0-7_]+/i)&&(s=!0),t.match(/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i)&&(s=!0),t.match(/^\d[_\d]*(e[\+\-]?\d+)?/i)&&(s=!0),s)return t.match(d),e.leavingExpr=!0,"number"}if(t.match("'"))return e.tokenize=C,e.tokenize(t,e);if(t.match(D))return e.tokenize=function(a){return a.substr(-3)==='"""'?a='"""':a.substr(-1)==='"'&&(a='"'),function(c,l){if(c.eat("\\"))c.next();else{if(c.match(a))return l.tokenize=o,l.leavingExpr=!0,"string";c.eat(/[`"]/)}return c.eatWhile(/[^\\`"]/),"string"}}(t.current()),e.tokenize(t,e);if(t.match(_))return"meta";if(t.match(F))return null;if(t.match(y))return"keyword";if(t.match(E))return"builtin";var k=e.isDefinition||e.lastToken=="function"||e.lastToken=="macro"||e.lastToken=="type"||e.lastToken=="struct"||e.lastToken=="immutable";return t.match(g)?k?t.peek()==="."?(e.isDefinition=!0,"variable"):(e.isDefinition=!1,"def"):(e.leavingExpr=!0,"variable"):(t.next(),"error")}function T(t,e){return t.match(/.*?(?=[,;{}()=\s]|$)/),t.match("{")?e.nestedParameters++:t.match("}")&&e.nestedParameters>0&&e.nestedParameters--,e.nestedParameters>0?t.match(/.*?(?={|})/)||t.next():e.nestedParameters==0&&(e.tokenize=o),"builtin"}function w(t,e){return t.match("#=")&&e.nestedComments++,t.match(/.*?(?=(#=|=#))/)||t.skipToEnd(),t.match("=#")&&(e.nestedComments--,e.nestedComments==0&&(e.tokenize=o)),"comment"}function C(t,e){var n,r=!1;if(t.match(v))r=!0;else if(n=t.match(/\\u([a-f0-9]{1,4})(?=')/i))((i=parseInt(n[1],16))<=55295||i>=57344)&&(r=!0,t.next());else if(n=t.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)){var i;(i=parseInt(n[1],16))<=1114111&&(r=!0,t.next())}return r?(e.leavingExpr=!0,e.tokenize=o,"string"):(t.match(/^[^']+(?=')/)||t.skipToEnd(),t.match("'")&&(e.tokenize=o),"error")}const P={startState:function(){return{tokenize:o,scopes:[],lastToken:null,leavingExpr:!1,isDefinition:!1,nestedArrays:0,nestedComments:0,nestedGenerators:0,nestedParameters:0,firstParenPos:-1}},token:function(t,e){var n=e.tokenize(t,e),r=t.current();return r&&n&&(e.lastToken=r),n},indent:function(t,e,n){var r=0;return(e==="]"||e===")"||/^end\b/.test(e)||/^else/.test(e)||/^catch\b/.test(e)||/^elseif\b/.test(e)||/^finally/.test(e))&&(r=-1),(t.scopes.length+r)*n.unit},languageData:{indentOnInput:/^\s*(end|else|catch|finally)\b$/,commentTokens:{line:"#",block:{open:"#=",close:"=#"}},closeBrackets:{brackets:["(","[","{",'"']},autocomplete:p.concat(h)}};export{P as julia};
