var s=/[+\-\/\\*~<>=@%|&?!.,:;^]/,p=/true|false|nil|self|super|thisContext/,r=function(n,e){this.next=n,this.parent=e},o=function(n,e,t){this.name=n,this.context=e,this.eos=t},x=function(){this.context=new r(h,null),this.expectVariable=!0,this.indentation=0,this.userIndentationDelta=0};x.prototype.userIndent=function(n,e){this.userIndentationDelta=n>0?n/e-this.indentation:0};var h=function(n,e,t){var a=new o(null,e,!1),i=n.next();return i==='"'?a=l(n,new r(l,e)):i==="'"?a=u(n,new r(u,e)):i==="#"?n.peek()==="'"?(n.next(),a=c(n,new r(c,e))):n.eatWhile(/[^\s.{}\[\]()]/)?a.name="string.special":a.name="meta":i==="$"?(n.next()==="<"&&(n.eatWhile(/[^\s>]/),n.next()),a.name="string.special"):i==="|"&&t.expectVariable?a.context=new r(d,e):/[\[\]{}()]/.test(i)?(a.name="bracket",a.eos=/[\[{(]/.test(i),i==="["?t.indentation++:i==="]"&&(t.indentation=Math.max(0,t.indentation-1))):s.test(i)?(n.eatWhile(s),a.name="operator",a.eos=i!==";"):/\d/.test(i)?(n.eatWhile(/[\w\d]/),a.name="number"):/[\w_]/.test(i)?(n.eatWhile(/[\w\d_]/),a.name=t.expectVariable?p.test(n.current())?"keyword":"variable":null):a.eos=t.expectVariable,a},l=function(n,e){return n.eatWhile(/[^"]/),new o("comment",n.eat('"')?e.parent:e,!0)},u=function(n,e){return n.eatWhile(/[^']/),new o("string",n.eat("'")?e.parent:e,!1)},c=function(n,e){return n.eatWhile(/[^']/),new o("string.special",n.eat("'")?e.parent:e,!1)},d=function(n,e){var t=new o(null,e,!1);return n.next()==="|"?(t.context=e.parent,t.eos=!0):(n.eatWhile(/[^|]/),t.name="variable"),t};const f={startState:function(){return new x},token:function(n,e){if(e.userIndent(n.indentation(),n.indentUnit),n.eatSpace())return null;var t=e.context.next(n,e.context,e);return e.context=t.context,e.expectVariable=t.eos,t.name},blankLine:function(n,e){n.userIndent(0,e)},indent:function(n,e,t){var a=n.context.next===h&&e&&e.charAt(0)==="]"?-1:n.userIndentationDelta;return(n.indentation+a)*t.unit},languageData:{indentOnInput:/^\s*\]$/}};export{f as smalltalk};
