function e(e,t,r){return t(r),r(e,t)}var t=/[a-z]/,r=/[A-Z]/,n=/[a-zA-Z0-9_]/,i=/[0-9]/,o=/[0-9A-Fa-f]/,a=/[-&*+.\\/<>=?^|:]/,u=/[(),[\]{}]/,f=/[ \v\f]/;function s(){return function(s,m){if(s.eatWhile(f))return null;var k=s.next();if(u.test(k))return"{"===k&&s.eat("-")?e(s,m,l(1)):"["===k&&s.match("glsl|")?e(s,m,h):"builtin";if("'"===k)return e(s,m,x);if('"'===k)return s.eat('"')?s.eat('"')?e(s,m,c):"string":e(s,m,p);if(r.test(k))return s.eatWhile(n),"type";if(t.test(k)){var g=1===s.pos;return s.eatWhile(n),g?"def":"variable"}if(i.test(k)){if("0"===k){if(s.eat(/[xX]/))return s.eatWhile(o),"number"}else s.eatWhile(i);return s.eat(".")&&s.eatWhile(i),s.eat(/[eE]/)&&(s.eat(/[-+]/),s.eatWhile(i)),"number"}return a.test(k)?"-"===k&&s.eat("-")?(s.skipToEnd(),"comment"):(s.eatWhile(a),"keyword"):"_"===k?"keyword":"error"}}function l(e){return 0==e?s():function(t,r){for(;!t.eol();){var n=t.next();if("{"==n&&t.eat("-"))++e;else if("-"==n&&t.eat("}")&&0==--e)return r(s()),"comment"}return r(l(e)),"comment"}}function c(e,t){for(;!e.eol();)if('"'===e.next()&&e.eat('"')&&e.eat('"'))return t(s()),"string";return"string"}function p(e,t){for(;e.skipTo('\\"');)e.next(),e.next();return e.skipTo('"')?(e.next(),t(s()),"string"):(e.skipToEnd(),t(s()),"error")}function x(e,t){for(;e.skipTo("\\'");)e.next(),e.next();return e.skipTo("'")?(e.next(),t(s()),"string"):(e.skipToEnd(),t(s()),"error")}function h(e,t){for(;!e.eol();)if("|"===e.next()&&e.eat("]"))return t(s()),"string";return"string"}var m={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1};const k={startState:function(){return{f:s()}},copyState:function(e){return{f:e.f}},token:function(e,t){var r=t.f(e,(function(e){t.f=e})),n=e.current();return m.hasOwnProperty(n)?"keyword":r}};export{k as elm};