(function(t){function e(e){for(var i,n,s=e[0],l=e[1],c=e[2],d=0,h=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&h.push(r[n][0]),r[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],i=!0,s=1;s<o.length;s++){var l=o[s];0!==r[l]&&(i=!1)}i&&(a.splice(e--,1),t=n(n.s=o[0]))}return t}var i={},r={app:0},a=[];function n(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=i,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/vue-omok-game/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0654":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("v-content",[o("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[o("router-view")],1)],1),o("v-footer",{attrs:{color:"indigo",app:""}},[o("span",{staticClass:"white--text"},[t._v("© 2019")])])],1)},a=[],n=(o("a4d3"),o("4de4"),o("4160"),o("b0c0"),o("e439"),o("dbb4"),o("b64b"),o("159b"),o("ade3")),s=o("2f62");function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){Object(n["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var u={props:{source:String},components:{},data:function(){return{item:null}},mounted:function(){},computed:c({},Object(s["c"])(["currentRoute"]),{sideBarDrawer:{get:function(){return this.sideBarDrawerFromStore},set:function(t){return t}},currentRouteName:function(){var t=this.currentRoute.name;return"home"==t&&(t="오목게임"),t},isTopPath:function(){return"/"==this.currentRoute.path}}),methods:c({},Object(s["b"])([]))},d=u,h=o("2877"),f=o("6544"),v=o.n(f),b=o("7496"),m=o("a523"),p=o("a75b"),w=o("553a"),g=Object(h["a"])(d,r,a,!1,null,null,null),k=g.exports;v()(g,{VApp:b["a"],VContainer:m["a"],VContent:p["a"],VFooter:w["a"]});var S=o("8c4f"),C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{staticClass:"dashboard",attrs:{cols:"2",sm:"12",md:"2"}},[o("v-card",{staticClass:"elevation-12"},[o("v-card-title",[t._v(" 오목게임 "),o("v-spacer"),t.isGameStarted?o("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.abortGameConfirm()}}},[t._v("중단")]):t._e(),t.isGameStarted?t._e():o("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame()}}},[t._v("시작")])],1),o("v-divider"),o("v-card-text",[o("v-radio-group",{attrs:{label:"다음 차례",row:""},model:{value:t.isBlackStoneNumb,callback:function(e){t.isBlackStoneNumb=e},expression:"isBlackStoneNumb"}},[o("v-layout",[o("v-radio",{attrs:{label:"",value:"1",disabled:""},scopedSlots:t._u([{key:"label",fn:function(){return[o("div",{staticClass:"radio blackStone stone"})]},proxy:!0}])}),o("v-radio",{attrs:{label:"",value:"0",disabled:""},scopedSlots:t._u([{key:"label",fn:function(){return[o("div",{staticClass:"radio whiteStone stone"})]},proxy:!0}])})],1)],1),o("v-divider"),o("v-select",{attrs:{items:t.oMokRowCounts,rules:[t.rules.oMokRowCount],color:"blue",label:"오목판 칸 갯수",disabled:t.isGameStarted},on:{input:t.onChangeOMokRowCount},model:{value:t.oMokRowCount,callback:function(e){t.oMokRowCount=e},expression:"oMokRowCount"}}),o("v-container",[o("p",[t._v("설정")]),o("v-switch",{attrs:{label:"돌 번호표기"},model:{value:t.allowShowStoneNumber,callback:function(e){t.allowShowStoneNumber=e},expression:"allowShowStoneNumber"}}),o("v-switch",{attrs:{label:"한수 무르기 허용",disabled:t.isGameStarted},model:{value:t.allowRollBack,callback:function(e){t.allowRollBack=e},expression:"allowRollBack"}}),o("v-switch",{attrs:{label:t.restrictOnlyBlack?"흑돌만 제한룰":"흑&흰돌 모두 제한 ",disabled:t.isGameStarted},model:{value:t.restrictOnlyBlack,callback:function(e){t.restrictOnlyBlack=e},expression:"restrictOnlyBlack"}})],1),o("v-divider"),o("v-container",[o("p",[t._v("제한룰")]),o("v-switch",{attrs:{label:"3 x 3 제한",disabled:t.isGameStarted},model:{value:t.restrict33,callback:function(e){t.restrict33=e},expression:"restrict33"}}),o("v-switch",{attrs:{label:"3 x 4 제한",disabled:t.isGameStarted},model:{value:t.restrict34,callback:function(e){t.restrict34=e},expression:"restrict34"}}),o("v-switch",{attrs:{label:"6 제한",disabled:t.isGameStarted},model:{value:t.restrict6,callback:function(e){t.restrict6=e},expression:"restrict6"}})],1)],1)],1)],1),o("v-col",{staticClass:"dashboard",attrs:{cols:15==t.oMokRowCount?5:6,sm:"12",md:15==t.oMokRowCount?5:6}},[o("v-card",{staticClass:"elevation-12",staticStyle:{overflow:"hidden"}},[o("v-card-text",[t.isGameStarted?t._e():o("div",{staticStyle:{}},[o("div",{staticClass:"waterMark one"},[t._v("연습 모드")]),o("div",{staticClass:"waterMark two"},[t._v("연습 모드")]),o("div",{staticClass:"waterMark"},[t._v("연습 모드")]),o("div",{staticClass:"waterMark four"},[t._v("연습 모드")]),o("div",{staticClass:"waterMark five"},[t._v("연습 모드")]),o("div",{staticClass:"waterMark six"},[t._v("연습 모드")]),o("div",{staticClass:"waterMark seven"},[t._v("연습 모드")])]),o("div",{staticClass:"board"},t._l(t.oMokRowCount,(function(e,i){return o("div",{key:"row_"+(i+1),staticClass:"board-row",class:"board-row-"+(i+1)},t._l(t.oMokRowCount,(function(i,r){return o("div",{key:"col_"+(r+1),staticClass:"board-col",class:["board-col-"+(r+1),t.getStoneColor(t.getPositionNumb(e,i))],on:{click:function(o){return t.onClickBoard(e,i)}}},[t.allowShowStoneNumber&&t.getStoneNumber(e,i)?o("div",{staticClass:"stoneNumber"},[t._v(t._s(t.getStoneNumber(e,i)))]):t._e(),o("div",{staticClass:"col_grid"})])})),0)})),0)]),o("v-card-actions",[t.allowRollBack?o("v-btn",{attrs:{color:"warning",disabled:!t.allowRollBack||!t.stoneHistory.length},on:{click:t.onClickRollBackLastStone}},[o("v-icon",[t._v("mdi-arrow-left")]),t._v("한수 무르기 ")],1):t._e(),o("v-spacer"),t.isGameStarted?t._e():o("v-btn",{attrs:{color:"error",disabled:t.isGameStarted||!t.blackStones.length&&!t.whiteStones.length},on:{click:function(e){return t.clearBoard()}}},[o("v-icon",[t._v("mdi-border-clear")]),t._v("보드 지우기 ")],1)],1)],1)],1)],1),o("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",{attrs:{dark:""}},[o("v-card-title",[o("span",[t._v("알림")])]),o("v-card-text",{staticClass:"title"},[t.isGameWon?o("div",{staticClass:"radio stone inDialog",class:[1==t.isBlackStone?"whiteStone":"blackStone"]}):t._e(),t._v(" "+t._s(t.dialogMsg)+" ")]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("닫기")])],1)],1)],1),o("v-dialog",{attrs:{dark:"","max-width":"500px"},model:{value:t.dialogConfirm,callback:function(e){t.dialogConfirm=e},expression:"dialogConfirm"}},[o("v-card",[o("v-card-title",[o("span",[t._v("확인")])]),o("v-card-text",{staticClass:"title"},[t._v(t._s(t.dialogConfirmMsg))]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"",text:""},on:{click:function(e){t.dialogConfirm=!1}}},[t._v("닫기")]),o("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.abortGame()}}},[t._v("확인")])],1)],1)],1),o("v-dialog",{attrs:{dark:"","max-width":"500px"},model:{value:t.dialogConfirmClearBoard,callback:function(e){t.dialogConfirmClearBoard=e},expression:"dialogConfirmClearBoard"}},[o("v-card",[o("v-card-title",[o("span",[t._v("확인")])]),o("v-card-text",{staticClass:"title"},[t._v(t._s(t.dialogConfirmClearBoardMsg))]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"",text:""},on:{click:function(e){t.dialogConfirmClearBoard=!1}}},[t._v("닫기")]),o("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.clearBoard(!0)}}},[t._v("지우기")])],1)],1)],1),o("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" 그 자리에 놓을 수 없습니다! "),o("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("닫기")])],1)],1)},y=[],B=(o("e01a"),o("d28b"),o("caad"),o("c975"),o("a434"),o("d3b7"),o("2532"),o("3ca3"),o("ddb0"),o("3835"));function O(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function x(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?O(Object(o),!0).forEach((function(e){Object(n["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var _={name:"home",components:{},data:function(){return{snackbar:!1,dialog:!1,dialogMsg:"",dialogConfirm:!1,dialogConfirmMsg:"",dialogConfirmClearBoard:!1,dialogConfirmClearBoardMsg:"",isGameStarted:!1,isGameWon:!1,isBlackStone:!0,blackStones:[],whiteStones:[],gameBoardTAble:[],stoneHistory:[],oMokRowCount:15,oMokRowCounts:[15,19],inspectDirection:["N","NE","E","SE","S","SW","W","NW"],moveXYPair:[{x:0,y:-1},{x:1,y:-1},{x:1,y:0},{x:1,y:1},{x:0,y:1},{x:-1,y:1},{x:-1,y:0},{x:-1,y:-1}],inRowCounter:[],restrictOnlyBlack:!0,restrict33:!0,restrict34:!0,restrict6:!0,allowRollBack:!0,allowShowStoneNumber:!1,rules:{oMokRowCount:function(t){return 15==parseInt(t)||19==parseInt(t)}}}},watch:{},mounted:function(){this.initGame()},computed:x({},Object(s["c"])([]),{isBlackStoneNumb:function(){return this.isBlackStone?"1":"0"}}),methods:x({},Object(s["b"])([]),{initGame:function(){for(var t=0;t<this.oMokRowCount;t++){this.gameBoardTAble[t]=[];for(var e=0;e<this.oMokRowCount;e++)this.gameBoardTAble[t][e]=void 0}this.isBlackStone=!0,this.blackStones=[],this.whiteStones=[],this.stoneHistory=[],this.isGameStarted=!1,this.isGameWon=!1},triggerDialog:function(t,e){t||(t="게임을 시작합니다."),void 0===e&&(e=2500),e||(e=31536e6),this.dialog=!0,this.dialogMsg=t,setTimeout(function(){this.dialog=!1}.bind(this),e)},abortGameConfirm:function(t){this.isGameStarted&&(t=t||"게임이 중단 됩니다. 신중하게 중단하세요.",this.dialogConfirmMsg=t,this.dialogConfirm=!0)},abortGame:function(){this.dialogConfirm=!1,this.isGameStarted=!1},clearBoardConfirm:function(t){t=t||"모든 기록이 지워집니다. 진행하시겠습니까?",this.dialogConfirmClearBoardMsg=t,this.dialogConfirmClearBoard=!0},clearBoard:function(t){if(t)this.dialogConfirmClearBoard=!1;else if(this.blackStones.length||this.whiteStones.length)return void this.clearBoardConfirm();this.blackStones=[],this.whiteStones=[],this.stoneHistory=[],this.isBlackStone=!0},startGame:function(){this.initGame(),this.isGameStarted=!0,this.triggerDialog()},initInRowTable:function(){this.inRowCounter=[];for(var t=1;t<=10;t++)this.inRowCounter[t]=0},getStoneColor:function(t){var e="";return this.blackStones.includes(t)?e="blackStone":this.whiteStones.includes(t)&&(e="whiteStone"),e},getPositionNumb:function(t,e){return(t-1)*this.oMokRowCount+e},getStoneNumber:function(t,e){if(this.allowShowStoneNumber){var o=this.getPositionNumb(t,e),i=!0,r=!1,a=void 0;try{for(var n,s=this.stoneHistory.entries()[Symbol.iterator]();!(i=(n=s.next()).done);i=!0){var l=Object(B["a"])(n.value,2),c=l[0],u=l[1];if(u.position==o)return c+1}}catch(d){r=!0,a=d}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return!1}},getEmptyStone:function(t){return!this.blackStones.includes(t)&&!this.whiteStones.includes(t)},countInRow:function(t,e,o,i){return t<0||e<0||t>=this.oMokRowCount||e>=this.oMokRowCount?0:void 0===this.gameBoardTAble[t][e]?0:this.gameBoardTAble[t][e]!==o?200:1+this.countInRow(t+this.moveXYPair[i].x,e+this.moveXYPair[i].y,o,i)},isWon:function(){return this.inRowCounter[5]>=1},isNotValidPlacing:function(){if(this.restrict6){if(this.restrictOnlyBlack&&!this.isBlackStone)return!1;for(var t=6;t<this.inRowCounter.length;t++)if(this.inRowCounter[t]>=1)return!0}if(this.restrict33){if(this.restrictOnlyBlack&&!this.isBlackStone)return!1;if(this.inRowCounter[3]>=2)return!0}if(this.restrict34){if(this.restrictOnlyBlack&&!this.isBlackStone)return!1;if(this.inRowCounter[3]>=1&&this.inRowCounter[4]>=1)return!0}return!1},isBoardFull:function(){for(var t=0;t<this.oMokRowCount;t++)for(var e=0;e<this.oMokRowCount;e++)if(void 0==this.gameBoardTAble[t][e])return!1;return!0},verifyPlaceStone:function(t,e,o){this.initInRowTable();for(var i=0;i<this.inspectDirection.length/2;i++){var r=this.countInRow(t,e,o,i)+this.countInRow(t,e,o,(i+4)%8)-1;if(r%200==5&&(r=5),r<200&&(this.inRowCounter[r]+=1),this.isNotValidPlacing())return{end:!1,invalid:!0,x:t,y:e,stone:o};if(this.isWon())return{end:!0,win:o}}return{end:!1,invalid:!1}},onClickBoard:function(t,e){var o=this.getPositionNumb(t,e);if(t-=1,e-=1,this.getEmptyStone(o)){this.isBlackStone?this.blackStones.push(o):this.whiteStones.push(o),this.stoneHistory.push({isBlackStone:this.isBlackStone,x:t,y:e,position:o});var i=this.isBlackStone?1:2;if(this.gameBoardTAble[t][e]=i,this.isGameStarted){var r=this.verifyPlaceStone(t,e,i);if(r.end)null!==r.win&&(this.isGameWon=!0,this.isGameStarted=!1,setTimeout(function(){this.triggerDialog("".concat(1==r.win?"흑돌":"흰돌","이 이겼습니다!"),!1)}.bind(this),50));else if(r.invalid)return this.isBlackStone?this.blackStones.splice(this.blackStones.indexOf(o),1):this.whiteStones.splice(this.whiteStones.indexOf(o),1),this.stoneHistory.splice(this.stoneHistory.length-1,1),this.gameBoardTAble[t][e]=void 0,void(this.snackbar=!0)}this.isBoardFull()?this.isGameStarted?this.triggerDialog("이걸 다 채우다니!! 무승부 입니다!",!1):(15==this.oMokRowCount?(this.triggerDialog("이걸 다 채우다니!! 정말 대단한데?! 이것도 할 수 있을까?",!1),this.oMokRowCount=19):this.triggerDialog("다음엔 이것보다 더 큰 바둑판을 준비 해야겠군요!!",!1),this.initGame()):this.isBlackStone=!this.isBlackStone}},onChangeOMokRowCount:function(){this.initGame()},onClickRollBackLastStone:function(){var t=this.stoneHistory.splice(this.stoneHistory.length-1,1)[0];t.isBlackStone?this.blackStones.splice(this.blackStones.indexOf(t.position),1):this.whiteStones.splice(this.whiteStones.indexOf(t.position),1),this.isBlackStone=t.isBlackStone}})},R=_,M=(o("7a44"),o("8336")),j=o("b0af"),G=o("99d9"),P=o("62ad"),N=o("169a"),V=o("ce7e"),D=o("132d"),T=o("a722"),E=o("67b6"),A=o("43a6"),H=o("0fd9"),I=o("b974"),W=o("2db4"),F=o("2fa4"),$=o("b73d"),L=Object(h["a"])(R,C,y,!1,null,"3e14891c",null),X=L.exports;v()(L,{VBtn:M["a"],VCard:j["a"],VCardActions:G["a"],VCardText:G["b"],VCardTitle:G["c"],VCol:P["a"],VContainer:m["a"],VDialog:N["a"],VDivider:V["a"],VIcon:D["a"],VLayout:T["a"],VRadio:E["a"],VRadioGroup:A["a"],VRow:H["a"],VSelect:I["a"],VSnackbar:W["a"],VSpacer:F["a"],VSwitch:$["a"]}),i["a"].use(S["a"]);var Y=[{path:"/",name:"home",component:X,replace:!0}],J=new S["a"]({mode:"history",base:"/vue-omok-game/",routes:Y});J.beforeEach((function(t,e,o){o()}));var z=J;i["a"].use(s["a"]);var U=new s["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),q=(o("5363"),o("d1e78"),o("f309"));i["a"].use(q["a"],{iconfont:["md","mdi"]});var K=new q["a"]({});o("fb6a"),o("25f0");i["a"].filter("capitalize",(function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}));var Q=i["a"],Z=o("bc3a"),tt=o.n(Z);tt.a.defaults.withCredentials=!0,i["a"].prototype.$axios=tt.a,i["a"].config.productionTip=!1,new i["a"]({router:z,store:U,vuetify:K,vueFilter:Q,render:function(t){return t(k)}}).$mount("#app")},"7a44":function(t,e,o){"use strict";var i=o("0654"),r=o.n(i);r.a}});
//# sourceMappingURL=app.015ac176.js.map