(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0db219"],{"6f0c":function(n,t,e){"use strict";e.r(t),e.d(t,"cmake",(function(){return a}));var i=/({)?[a-zA-Z0-9_]+(})?/;function c(n,t){for(var e,i,c=!1;!n.eol()&&(e=n.next())!=t.pending;){if("$"===e&&"\\"!=i&&'"'==t.pending){c=!0;break}i=e}return c&&n.backUp(1),e==t.pending?t.continueString=!1:t.continueString=!0,"string"}const a={startState:function(){var n={inDefinition:!1,inInclude:!1,continueString:!1,pending:!1};return n},token:function(n,t){return n.eatSpace()?null:function(n,t){var e=n.next();return"$"===e?n.match(i)?"variableName.special":"variable":t.continueString?(n.backUp(1),c(n,t)):n.match(/(\s+)?\w+\(/)||n.match(/(\s+)?\w+\ \(/)?(n.backUp(1),"def"):"#"==e?(n.skipToEnd(),"comment"):"'"==e||'"'==e?(t.pending=e,c(n,t)):"("==e||")"==e?"bracket":e.match(/[0-9]/)?"number":(n.eatWhile(/[\w-]/),null)}(n,t)}}}}]);