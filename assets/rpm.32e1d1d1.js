var e=/^-+$/,n=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /,a=/^[\w+.-]+@[\w.-]+/;const s={token:function(t){return t.sol()&&(t.match(e)||t.match(n))?"tag":t.match(a)?"string":(t.next(),null)}};var o=/^(i386|i586|i686|x86_64|ppc64le|ppc64|ppc|ia64|s390x|s390|sparc64|sparcv9|sparc|noarch|alphaev6|alpha|hppa|mipsel)/,c=/^[a-zA-Z0-9()]+:/,i=/^%(debug_package|package|description|prep|build|install|files|clean|changelog|preinstall|preun|postinstall|postun|pretrans|posttrans|pre|post|triggerin|triggerun|verifyscript|check|triggerpostun|triggerprein|trigger)/,p=/^%(ifnarch|ifarch|if)/,u=/^%(else|endif)/,l=/^(\!|\?|\<\=|\<|\>\=|\>|\=\=|\&\&|\|\|)/;const m={startState:function(){return{controlFlow:!1,macroParameters:!1,section:!1}},token:function(t,r){if(t.peek()=="#")return t.skipToEnd(),"comment";if(t.sol()){if(t.match(c))return"header";if(t.match(i))return"atom"}if(t.match(/^\$\w+/)||t.match(/^\$\{\w+\}/))return"def";if(t.match(u))return"keyword";if(t.match(p))return r.controlFlow=!0,"keyword";if(r.controlFlow){if(t.match(l))return"operator";if(t.match(/^(\d+)/))return"number";t.eol()&&(r.controlFlow=!1)}if(t.match(o))return t.eol()&&(r.controlFlow=!1),"number";if(t.match(/^%[\w]+/))return t.match("(")&&(r.macroParameters=!0),"keyword";if(r.macroParameters){if(t.match(/^\d+/))return"number";if(t.match(")"))return r.macroParameters=!1,"keyword"}return t.match(/^%\{\??[\w \-\:\!]+\}/)?(t.eol()&&(r.controlFlow=!1),"def"):(t.next(),null)}};export{s as rpmChanges,m as rpmSpec};
