var i=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i");const e={token:function(r,t){var a=r.peek(),n=t.escaped;if(t.escaped=!1,a=="#"&&(r.pos==0||/\s/.test(r.string.charAt(r.pos-1))))return r.skipToEnd(),"comment";if(r.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(t.literal&&r.indentation()>t.keyCol)return r.skipToEnd(),"string";if(t.literal&&(t.literal=!1),r.sol()){if(t.keyCol=0,t.pair=!1,t.pairStart=!1,r.match("---")||r.match("..."))return"def";if(r.match(/^\s*-\s+/))return"meta"}if(r.match(/^(\{|\}|\[|\])/))return a=="{"?t.inlinePairs++:a=="}"?t.inlinePairs--:a=="["?t.inlineList++:t.inlineList--,"meta";if(t.inlineList>0&&!n&&a==",")return r.next(),"meta";if(t.inlinePairs>0&&!n&&a==",")return t.keyCol=0,t.pair=!1,t.pairStart=!1,r.next(),"meta";if(t.pairStart){if(r.match(/^\s*(\||\>)\s*/))return t.literal=!0,"meta";if(r.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable";if(t.inlinePairs==0&&r.match(/^\s*-?[0-9\.\,]+\s?$/)||t.inlinePairs>0&&r.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(r.match(i))return"keyword"}return!t.pair&&r.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(t.pair=!0,t.keyCol=r.indentation(),"atom"):t.pair&&r.match(/^:\s*/)?(t.pairStart=!0,"meta"):(t.pairStart=!1,t.escaped=a=="\\",r.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},languageData:{commentTokens:{line:"#"}}};export{e as yaml};
