function c(n,t,e){return function(r,a){for(;!r.eol();){if(r.match(t)){a.tokenize=o;break}r.next()}return e&&(a.tokenize=e),n}}function h(n){return function(t,e){for(;!t.eol();)t.next();return e.tokenize=o,n}}function o(n,t){function e(f){return t.tokenize=f,f(n,t)}var r=n.sol(),a=n.next();switch(a){case"{":return n.eat("/"),n.eatSpace(),n.eatWhile(/[^\s\u00a0=\"\'\/?(}]/),t.tokenize=m,"tag";case"_":if(n.eat("_"))return e(c("strong","__",o));break;case"'":if(n.eat("'"))return e(c("em","''",o));break;case"(":if(n.eat("("))return e(c("link","))",o));break;case"[":return e(c("url","]",o));case"|":if(n.eat("|"))return e(c("comment","||"));break;case"-":if(n.eat("="))return e(c("header string","=-",o));if(n.eat("-"))return e(c("error tw-deleted","--",o));break;case"=":if(n.match("=="))return e(c("tw-underline","===",o));break;case":":if(n.eat(":"))return e(c("comment","::"));break;case"^":return e(c("tw-box","^"));case"~":if(n.match("np~"))return e(c("meta","~/np~"))}if(r)switch(a){case"!":return n.match("!!!!!")||n.match("!!!!")||n.match("!!!")||n.match("!!"),e(h("header string"));case"*":case"#":case"+":return e(h("tw-listitem bracket"))}return null}var g,k,i,s;function m(n,t){var e,r=n.next(),a=n.peek();return r=="}"?(t.tokenize=o,"tag"):r=="("||r==")"?"bracket":r=="="?(k="equals",a==">"&&(n.next(),a=n.peek()),/[\'\"]/.test(a)||(t.tokenize=function(f,d){for(;!f.eol();){var x=f.next(),w=f.peek();if(x==" "||x==","||/[ )}]/.test(w)){d.tokenize=m;break}}return"string"}),"operator"):/[\'\"]/.test(r)?(t.tokenize=(e=r,function(f,d){for(;!f.eol();)if(f.next()==e){d.tokenize=m;break}return"string"}),t.tokenize(n,t)):(n.eatWhile(/[^\s\u00a0=\"\'\/?]/),"keyword")}function l(){for(var n=arguments.length-1;n>=0;n--)i.cc.push(arguments[n])}function u(){return l.apply(null,arguments),!0}function b(n,t){var e=i.context&&i.context.noIndent;i.context={prev:i.context,pluginName:n,indent:i.indented,startOfLine:t,noIndent:e}}function v(){i.context&&(i.context=i.context.prev)}function L(n){if(n=="openPlugin")return i.pluginName=g,u(p,(r=i.startOfLine,function(a){return a=="selfclosePlugin"||a=="endPlugin"||a=="endPlugin"&&b(i.pluginName,r),u()}));if(n=="closePlugin"){var t=!1;return i.context?(t=i.context.pluginName!=g,v()):t=!0,t&&(s="error"),u((e=t,function(a){return e&&(s="error"),a=="endPlugin"?u():l()}))}var e,r;return n=="string"&&(i.context&&i.context.name=="!cdata"||b("!cdata"),i.tokenize==o&&v()),u()}function p(n){return n=="keyword"?(s="attribute",u(p)):n=="equals"?u(O,p):l()}function O(n){return n=="keyword"?(s="string",u()):n=="string"?u(z):l()}function z(n){return n=="string"?u(z):l()}const P={startState:function(){return{tokenize:o,cc:[],indented:0,startOfLine:!0,pluginName:null,context:null}},token:function(n,t){if(n.sol()&&(t.startOfLine=!0,t.indented=n.indentation()),n.eatSpace())return null;s=k=g=null;var e=t.tokenize(n,t);if((e||k)&&e!="comment")for(i=t;!(t.cc.pop()||L)(k||e););return t.startOfLine=!1,s||e},indent:function(n,t,e){var r=n.context;if(r&&r.noIndent)return 0;for(r&&/^{\//.test(t)&&(r=r.prev);r&&!r.startOfLine;)r=r.prev;return r?r.indent+e.unit:0}};export{P as tiki};
