function e(e){for(var t={},T=e.split(" "),n=0;n<T.length;++n)t[T[n]]=!0;return t}const t={name:"ttcn-cfg",keywords:e("Yes No LogFile FileMask ConsoleMask AppendFile TimeStampFormat LogEventTypes SourceInfoFormat LogEntityName LogSourceInfo DiskFullAction LogFileNumber LogFileSize MatchingHints Detailed Compact SubCategories Stack Single None Seconds DateTime Time Stop Error Retry Delete TCPPort KillTimer NumHCs UnixSocketsEnabled LocalAddress"),fileNCtrlMaskOptions:e("TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION TTCN_USER TTCN_FUNCTION TTCN_STATISTICS TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG EXECUTOR ERROR WARNING PORTEVENT TIMEROP VERDICTOP DEFAULTOP TESTCASE ACTION USER FUNCTION STATISTICS PARALLEL MATCHING DEBUG LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED DEBUG_ENCDEC DEBUG_TESTPORT DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED FUNCTION_RND FUNCTION_UNQUALIFIED MATCHING_DONE MATCHING_MCSUCCESS MATCHING_MCUNSUCC MATCHING_MMSUCCESS MATCHING_MMUNSUCC MATCHING_PCSUCCESS MATCHING_PCUNSUCC MATCHING_PMSUCCESS MATCHING_PMUNSUCC MATCHING_PROBLEM MATCHING_TIMEOUT MATCHING_UNQUALIFIED PARALLEL_PORTCONN PARALLEL_PORTMAP PARALLEL_PTC PARALLEL_UNQUALIFIED PORTEVENT_DUALRECV PORTEVENT_DUALSEND PORTEVENT_MCRECV PORTEVENT_MCSEND PORTEVENT_MMRECV PORTEVENT_MMSEND PORTEVENT_MQUEUE PORTEVENT_PCIN PORTEVENT_PCOUT PORTEVENT_PMIN PORTEVENT_PMOUT PORTEVENT_PQUEUE PORTEVENT_STATE PORTEVENT_UNQUALIFIED STATISTICS_UNQUALIFIED STATISTICS_VERDICT TESTCASE_FINISH TESTCASE_START TESTCASE_UNQUALIFIED TIMEROP_GUARD TIMEROP_READ TIMEROP_START TIMEROP_STOP TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED USER_UNQUALIFIED VERDICTOP_FINAL VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED"),externalCommands:e("BeginControlPart EndControlPart BeginTestCase EndTestCase"),multiLineStrings:!0};var T,n=t.keywords,E=t.fileNCtrlMaskOptions,C=t.externalCommands,N=t.multiLineStrings,I=/[\|]/;function r(e,t){var r,i=e.next();if('"'==i||"'"==i)return t.tokenize=(r=i,function(e,t){for(var T,n=!1,E=!1;null!=(T=e.next());){if(T==r&&!n){var C=e.peek();C&&("b"!=(C=C.toLowerCase())&&"h"!=C&&"o"!=C||e.next()),E=!0;break}n=!n&&"\\"==T}return(E||!n&&!N)&&(t.tokenize=null),"string"}),t.tokenize(e,t);if(/[:=]/.test(i))return T=i,"punctuation";if("#"==i)return e.skipToEnd(),"comment";if(/\d/.test(i))return e.eatWhile(/[\w\.]/),"number";if(I.test(i))return e.eatWhile(I),"operator";if("["==i)return e.eatWhile(/[\w_\]]/),"number";e.eatWhile(/[\w\$_]/);var o=e.current();return n.propertyIsEnumerable(o)?"keyword":E.propertyIsEnumerable(o)?"atom":C.propertyIsEnumerable(o)?"deleted":"variable"}function i(e,t,T,n,E){this.indented=e,this.column=t,this.type=T,this.align=n,this.prev=E}function o(e,t,T){var n=e.indented;return e.context&&"statement"==e.context.type&&(n=e.context.indented),e.context=new i(n,t,T,null,e.context)}function _(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}const A={startState:function(){return{tokenize:null,context:new i(0,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;T=null;var E=(t.tokenize||r)(e,t);if("comment"==E)return E;if(null==n.align&&(n.align=!0),";"!=T&&":"!=T&&","!=T||"statement"!=n.type)if("{"==T)o(t,e.column(),"}");else if("["==T)o(t,e.column(),"]");else if("("==T)o(t,e.column(),")");else if("}"==T){for(;"statement"==n.type;)n=_(t);for("}"==n.type&&(n=_(t));"statement"==n.type;)n=_(t)}else T==n.type?_(t):(("}"==n.type||"top"==n.type)&&";"!=T||"statement"==n.type&&"newstatement"==T)&&o(t,e.column(),"statement");else _(t);return t.startOfLine=!1,E},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"#"}}};export{A as ttcnCfg};
