var a,l=/^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/,i=/^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/,u=/^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/,s=/[^\s'`,@()\[\]";]/;function o(t){for(var e;e=t.next();)if(e=="\\")t.next();else if(!s.test(e)){t.backUp(1);break}return t.current()}function c(t,e){if(t.eatSpace())return a="ws",null;if(t.match(u))return"number";var n;if((n=t.next())=="\\"&&(n=t.next()),n=='"')return(e.tokenize=d)(t,e);if(n=="(")return a="open","bracket";if(n==")"||n=="]")return a="close","bracket";if(n==";")return t.skipToEnd(),a="ws","comment";if(/['`,@]/.test(n))return null;if(n=="|")return t.skipTo("|")?(t.next(),"variableName"):(t.skipToEnd(),"error");if(n=="#")return(n=t.next())=="("?(a="open","bracket"):/[+\-=\.']/.test(n)||/\d/.test(n)&&t.match(/^\d*#/)?null:n=="|"?(e.tokenize=f)(t,e):n==":"?(o(t),"meta"):n=="\\"?(t.next(),o(t),"string.special"):"error";var r=o(t);return r=="."?null:(a="symbol",r=="nil"||r=="t"||r.charAt(0)==":"?"atom":e.lastType=="open"&&(l.test(r)||i.test(r))?"keyword":r.charAt(0)=="&"?"variableName.special":"variableName")}function d(t,e){for(var n,r=!1;n=t.next();){if(n=='"'&&!r){e.tokenize=c;break}r=!r&&n=="\\"}return"string"}function f(t,e){for(var n,r;n=t.next();){if(n=="#"&&r=="|"){e.tokenize=c;break}r=n}return a="ws","comment"}const x={startState:function(){return{ctx:{prev:null,start:0,indentTo:0},lastType:null,tokenize:c}},token:function(t,e){t.sol()&&typeof e.ctx.indentTo!="number"&&(e.ctx.indentTo=e.ctx.start+1),a=null;var n=e.tokenize(t,e);return a!="ws"&&(e.ctx.indentTo==null?a=="symbol"&&i.test(t.current())?e.ctx.indentTo=e.ctx.start+t.indentUnit:e.ctx.indentTo="next":e.ctx.indentTo=="next"&&(e.ctx.indentTo=t.column()),e.lastType=a),a=="open"?e.ctx={prev:e.ctx,start:t.column(),indentTo:null}:a=="close"&&(e.ctx=e.ctx.prev||e.ctx),n},indent:function(t){var e=t.ctx.indentTo;return typeof e=="number"?e:t.ctx.start+1},languageData:{commentTokens:{line:";;",block:{open:"#|",close:"|#"}},closeBrackets:{brackets:["(","[","{",'"']}}};export{x as commonLisp};
