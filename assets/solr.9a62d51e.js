var z=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,c=/[\|\!\+\-\*\?\~\^\&]/,p=/^(OR|AND|NOT|TO)$/i;function k(a,t){var s,l,i,o=a.next();return o=='"'?t.tokenize=(l=o,function(e,u){for(var r,n=!1;(r=e.next())!=null&&(r!=l||n);)n=!n&&r=="\\";return n||(u.tokenize=k),"string"}):c.test(o)?t.tokenize=(s=o,function(e,u){return s=="|"?e.eat(/\|/):s=="&"&&e.eat(/\&/),u.tokenize=k,"operator"}):z.test(o)&&(t.tokenize=(i=o,function(e,u){for(var r=i;(i=e.peek())&&i.match(z)!=null;)r+=e.next();return u.tokenize=k,p.test(r)?"operator":(n=r,parseFloat(n).toString()===n?"number":e.peek()==":"?"propertyName":"string");var n})),t.tokenize!=k?t.tokenize(a,t):null}const f={startState:function(){return{tokenize:k}},token:function(a,t){return a.eatSpace()?null:t.tokenize(a,t)}};export{f as solr};
