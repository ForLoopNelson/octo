var p={term:!0,method:!0,accu:!0,rule:!0,then:!0,is:!0,and:!0,or:!0,if:!0,default:!0},m={var_input:!0,var_output:!0,fuzzify:!0,defuzzify:!0,function_block:!0,ruleblock:!0},u={end_ruleblock:!0,end_defuzzify:!0,end_function_block:!0,end_fuzzify:!0,end_var:!0},k={true:!0,false:!0,nan:!0,real:!0,min:!0,max:!0,cog:!0,cogs:!0},f=/[+\-*&^%:=<>!|\/]/;function i(e,t){var n=e.next();if(/[\d\.]/.test(n))return n=="."?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):n=="0"?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if(n=="/"||n=="("){if(e.eat("*"))return t.tokenize=d,d(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(f.test(n))return e.eatWhile(f),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var r=e.current().toLowerCase();return p.propertyIsEnumerable(r)||m.propertyIsEnumerable(r)||u.propertyIsEnumerable(r)?"keyword":k.propertyIsEnumerable(r)?"atom":"variable"}function d(e,t){for(var n,r=!1;n=e.next();){if((n=="/"||n==")")&&r){t.tokenize=i;break}r=n=="*"}return"comment"}function s(e,t,n,r,o){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=o}const b={startState:function(e){return{tokenize:null,context:new s(-e,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(n.align==null&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;var r=(t.tokenize||i)(e,t);if(r=="comment")return r;n.align==null&&(n.align=!0);var o,l,c=e.current().toLowerCase();return m.propertyIsEnumerable(c)?(o=t,l=e.column(),o.context=new s(o.indented,l,"end_block",null,o.context)):u.propertyIsEnumerable(c)&&function(a){a.context.prev&&(a.context.type=="end_block"&&(a.indented=a.context.indented),a.context=a.context.prev)}(t),t.startOfLine=!1,r},indent:function(e,t,n){if(e.tokenize!=i&&e.tokenize!=null)return 0;var r=e.context,o=u.propertyIsEnumerable(t);return r.align?r.column+(o?0:1):r.indented+(o?0:n.unit)},languageData:{commentTokens:{line:"//",block:{open:"(*",close:"*)"}}}};export{b as fcl};
