var n="><+-.,[]".split("");const m={startState:function(){return{commentLine:!1,left:0,right:0,commentLoop:!1}},token:function(o,t){if(o.eatSpace())return null;o.sol()&&(t.commentLine=!1);var e=o.next().toString();return n.indexOf(e)===-1?(t.commentLine=!0,o.eol()&&(t.commentLine=!1),"comment"):t.commentLine===!0?(o.eol()&&(t.commentLine=!1),"comment"):e==="]"||e==="["?(e==="["?t.left++:t.right++,"bracket"):e==="+"||e==="-"?"keyword":e==="<"||e===">"?"atom":e==="."||e===","?"def":void(o.eol()&&(t.commentLine=!1))}};export{m as brainfuck};
