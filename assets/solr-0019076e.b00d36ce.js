var t=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,e=/[\|\!\+\-\*\?\~\^\&]/,n=/^(OR|AND|NOT|TO)$/i;function r(o,i){var a,u,k,s=o.next();return'"'==s?i.tokenize=(u=s,function(t,e){for(var n,o=!1;null!=(n=t.next())&&(n!=u||o);)o=!o&&"\\"==n;return o||(e.tokenize=r),"string"}):e.test(s)?i.tokenize=(a=s,function(t,e){return"|"==a?t.eat(/\|/):"&"==a&&t.eat(/\&/),e.tokenize=r,"operator"}):t.test(s)&&(i.tokenize=(k=s,function(e,o){for(var i=k;(k=e.peek())&&null!=k.match(t);)i+=e.next();return o.tokenize=r,n.test(i)?"operator":(a=i,parseFloat(a).toString()===a?"number":":"==e.peek()?"propertyName":"string");var a})),i.tokenize!=r?i.tokenize(o,i):null}const o={startState:function(){return{tokenize:r}},token:function(t,e){return t.eatSpace()?null:e.tokenize(t,e)}};export{o as solr};