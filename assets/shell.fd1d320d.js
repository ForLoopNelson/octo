var l={};function c(t,e){for(var n=0;n<e.length;n++)l[e[n]]=t}var k=["true","false"],h=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],p=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];function m(t,e){if(t.eatSpace())return null;var n,o=t.sol(),r=t.next();if(r==="\\")return t.next(),null;if(r==="'"||r==='"'||r==="`")return e.tokens.unshift(a(r,r==="`"?"quote":"string")),u(t,e);if(r==="#")return o&&t.eat("!")?(t.skipToEnd(),"meta"):(t.skipToEnd(),"comment");if(r==="$")return e.tokens.unshift(d),u(t,e);if(r==="+"||r==="=")return"operator";if(r==="-")return t.eat("-"),t.eatWhile(/\w/),"attribute";if(r=="<"){if(t.match("<<"))return"operator";var i=t.match(/^<-?\s*['"]?([^'"]*)['"]?/);if(i)return e.tokens.unshift((n=i[1],function(f,g){return f.sol()&&f.string==n&&g.tokens.shift(),f.skipToEnd(),"string.special"})),"string.special"}if(/\d/.test(r)&&(t.eatWhile(/\d/),t.eol()||!/\w/.test(t.peek())))return"number";t.eatWhile(/[\w-]/);var s=t.current();return t.peek()==="="&&/\w+/.test(s)?"def":l.hasOwnProperty(s)?l[s]:null}function a(t,e){var n=t=="("?")":t=="{"?"}":t;return function(o,r){for(var i,s=!1;(i=o.next())!=null;){if(i===n&&!s){r.tokens.shift();break}if(i==="$"&&!s&&t!=="'"&&o.peek()!=n){s=!0,o.backUp(1),r.tokens.unshift(d);break}if(!s&&t!==n&&i===t)return r.tokens.unshift(a(t,e)),u(o,r);if(!s&&/['"]/.test(i)&&!/['"]/.test(t)){r.tokens.unshift(w(i,"string")),o.backUp(1);break}s=!s&&i==="\\"}return e}}function w(t,e){return function(n,o){return o.tokens[0]=a(t,e),n.next(),u(n,o)}}c("atom",k),c("keyword",h),c("builtin",p);var d=function(t,e){e.tokens.length>1&&t.eat("$");var n=t.next();return/['"({]/.test(n)?(e.tokens[0]=a(n,n=="("?"quote":n=="{"?"def":"string"),u(t,e)):(/\d/.test(n)||t.eatWhile(/\w/),e.tokens.shift(),"def")};function u(t,e){return(e.tokens[0]||m)(t,e)}const v={startState:function(){return{tokens:[]}},token:function(t,e){return u(t,e)},languageData:{autocomplete:k.concat(h,p),closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"#"}}};export{v as shell};
