(this.webpackJsonppoker99=this.webpackJsonppoker99||[]).push([[0],{194:function(e,t,n){},195:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=195},200:function(e,t){},202:function(e,t){},212:function(e,t){},214:function(e,t){},241:function(e,t){},242:function(e,t){},247:function(e,t){},249:function(e,t){},256:function(e,t){},275:function(e,t){},301:function(e,t,n){"use strict";n.r(t);var r,c,a=n(3),i=n(0),o=n(13),u=n.n(o),s=(n(194),n(8)),l=n(15),d=n(61),f=n(179),b=n(178),j=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).maxPlayer=4,e.minPlayer=4,e.turn=0,e.direction=1,e.points=0,e.dead={},e.drawDeck=[],e.trashDeck=[],e.playerDeck=[],e.logs=[],e.lastAction=null,e}return n}(l.b),p=n(66);!function(e){e[e.PLAY_CARD=0]="PLAY_CARD",e[e.END=1]="END"}(r||(r={})),function(e){e[e.SPADE=0]="SPADE",e[e.HEART=1]="HEART",e[e.CLUB=2]="CLUB",e[e.DIAMOND=3]="DIAMOND"}(c||(c={}));var h,O,v=n(26),x={1:1,2:2,3:3,4:0,5:0,6:6,7:7,8:8,9:9,10:10,11:0,12:20,13:99},m={1:"A",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"J",12:"Q",13:"K"},y=(h={},Object(v.a)(h,c.CLUB,"\u2663"),Object(v.a)(h,c.SPADE,"\u2660"),Object(v.a)(h,c.HEART,"\u2665"),Object(v.a)(h,c.DIAMOND,"\u2666"),h),w=(O={},Object(v.a)(O,c.CLUB,"black"),Object(v.a)(O,c.SPADE,"black"),Object(v.a)(O,c.HEART,"red"),Object(v.a)(O,c.DIAMOND,"red"),O),g=function(e){return 1===e.number&&e.suit===c.SPADE},k=function(e,t){var n=e.card;return function(e){return g(n)?(e.points=1,X("".concat(e.players[t]," played ").concat(R(n),", points set to 1"))(U(H(e)))):e}},D=function(e){return 13===e.number},A=function(e,t){var n=e.card;return function(e){return D(n)?(e.points=99,X("".concat(e.players[t]," played bomb card ").concat(R(n),", set point to 99"))(U(H(e)))):e}},E=function(e){return 4===e.number},C=function(e,t){var n=e.card;return function(e){return E(n)?(e.direction*=-1,X("".concat(e.players[t]," played ").concat(R(n),", reverse direction"))(U(H(e)))):e}},P=function(e){return 5===e.number},S=function(e,t){var n=e.card,r=e.target;return function(e){if(P(n)){if(void 0===r)throw new Error("target is required in payload");if(r===t)throw new Error("cannot target myself");return e.turn=r,X("".concat(e.players[t]," played ").concat(R(n),", set current turn ").concat(e.players[r]))(U(e))}return e}},L=function(e){return 11===e.number},T=function(e,t){var n=e.card;return function(e){return L(n)?X("".concat(e.players[t]," played ").concat(R(n),", skip"))(U(H(e))):e}},N=function(e){return g(e)?"\u2192 1":E(e)?"\u21bb reverse":P(e)?"\u26f6 target":L(e)?"\xd7 skip":D(e)?"\u2192 99":10===e.number?"\xb1 10":12===e.number?"\xb1 20":"+ ".concat(e.number)},R=function(e){return"".concat(y[e.suit]," ").concat(m[e.number])},I=function(e){return(e.suit!==c.SPADE||1!==e.number)&&[1,2,3,6,7,8,9].includes(e.number)},Y=function(e,t){var n=e.card;return function(e){if(I(n)){var r=e.points+x[n.number];if(r>99)throw new Error("playing ".concat(R(n)," will exceed 99"));return X("".concat(e.players[t]," played ").concat(R(n),", +").concat(x[n.number]))(U(H(Object(s.a)(Object(s.a)({},e),{},{points:r}))))}return e}},_=function(e){return 10===e.number||12===e.number},M=function(e,t){var n=e.card,r=e.increase;return function(e){if(_(n)){if(void 0===r)throw new Error("increase is required in payload");var c=r?x[n.number]:-x[n.number],a=e.points+c;if(a>99)throw new Error("playing ".concat(R(n)," will exceed 99"));return X("".concat(e.players[t]," played ").concat(R(n)," ").concat(c))(U(H(Object(s.a)(Object(s.a)({},e),{},{points:a}))))}return e}},B=function e(t){return function(n){if(n.playerDeck[t].length>=5)throw new Error("cannot draw, ".concat(n.players[t]," already has ").concat(5," cards"));var r=n.drawDeck.shift();return void 0===r?e(t)(Object(s.a)(Object(s.a)({},n),{},{drawDeck:Object(l.e)(n.trashDeck),trashDeck:[]})):(n.playerDeck[t].push(r),Object(s.a)({},n))}},F=function(e,t){var n=e.card;return function(e){return e.trashDeck.push(n),e.playerDeck[t]=e.playerDeck[t].filter((function(e){var t=e.suit,r=e.number;return!(t===n.suit&&r===n.number)})),e}},H=function(e){var t=(e.turn+e.maxPlayer+e.direction)%e.maxPlayer;return Object(s.a)(Object(s.a)({},e),{},{turn:t})},U=function e(t){return!t.dead[t.turn]&&function(e,t){var n=1/0,r=0;return t.forEach((function(t,a){var i,o=t.suit,u=t.number;(i=o===c.SPADE&&1===u?1:10===u?e-10:12===u?e-20:13===u?99:e+x[u])<n&&(n=i,r=a)})),[n,r]}(t.points,t.playerDeck[t.turn])[0]>99&&(t.logs.push("".concat(t.players[t.turn]," die, his card: ").concat(t.playerDeck[t.turn].map((function(e){return"".concat(c[e.suit]).concat(e.number)})).join(","))),t.dead[t.turn]=!0),Object.keys(t.dead).length===t.players.length-1&&t.started&&(t.winner=[0,1,2,3].filter((function(e){return!t.dead[e]}))[0]),t.dead[t.turn]?e(H(Object(s.a)(Object(s.a)({},t),{},{turn:t.turn}))):Object(s.a)(Object(s.a)({},t),{},{turn:t.turn})},X=function(e){return function(t){return Object(s.a)(Object(s.a)({},t),{},{logs:[].concat(Object(p.a)(t.logs),[e])})}},J=function(e,t){var n=t.peerId;if(void 0===n)throw new Error("Expect peerId in action");switch(t.type){case l.a.START:return function(e){(e=Object(s.a)(Object(s.a)({},e),{},{drawDeck:[],trashDeck:[],playerDeck:[],points:0,direction:1,turn:0,dead:{},logs:["game started"],winner:null})).drawDeck=Object(l.e)(function(){for(var e=[],t=0;t<4;t++)for(var n=1;n<=13;n++)e.push({suit:t,number:n});return e}());for(var t=0;t<e.players.length;t++){e.playerDeck[t]=[];for(var n=0;n<5;n++)e=B(t)(e)}return Object(s.a)({},e)}(e);case r.PLAY_CARD:return function(e,t){return function(n){var r=t.card,a="".concat(c[r.suit]).concat(r.number);if(void 0===n.playerDeck[e].find((function(e){var t=e.suit,n=e.number;return t===r.suit&&n===r.number})))throw new Error("".concat(n.players[e]," doesnt own card ").concat(a));if(n.turn!==e)throw new Error("not your turn");var i=l.d.apply(void 0,[B(e)].concat(Object(p.a)([F,A,Y,M,C,T,S,k].map((function(n){return n(t,e)})))))(n);return Object(s.a)(Object(s.a)({},i),{},{lastAction:Object(s.a)(Object(s.a)({},t),{},{playerId:e})})}}(function(){var t=e.nameDict[e.members[n]];if(void 0===t)throw new Error("game not started");return t}(),t.payload)(JSON.parse(JSON.stringify(e)));case r.END:return Object(s.a)(Object(s.a)({},e),{},{started:!1})}return e},W=n(84),z=function(e){return[4,5,11,13].includes(e.number)},q=function(e,t){var n=e.playerDeck[t],c=e.points,a=n.filter(I).sort((function(e,t){return x[t.number]-x[e.number]})),i=n.find((function(e){return 13===e.number}));if(void 0!==i&&99!==c&&a.length<3)return{type:r.PLAY_CARD,payload:{card:i}};var o,u=Object(W.a)(a);try{for(u.s();!(o=u.n()).done;){var s=o.value;if(c+x[s.number]<=99)return{type:r.PLAY_CARD,payload:{card:s}}}}catch(y){u.e(y)}finally{u.f()}var d,f=n.filter(_),b=Object(W.a)(f.sort((function(e,t){return t.number-e.number})));try{for(b.s();!(d=b.n()).done;){var j=d.value;if(c+x[j.number]<=99)return{type:r.PLAY_CARD,payload:{card:j,increase:!0}}}}catch(y){b.e(y)}finally{b.f()}var p=n.find(z);if(void 0!==p)return{type:r.PLAY_CARD,payload:{card:p,target:e.nameDict[Object(l.e)(e.players.filter((function(n,r){return!e.dead[r]&&r!==t})))[0]]}};var h,O=Object(W.a)(f.sort((function(e,t){return e.number-t.number})));try{for(O.s();!(h=O.n()).done;){var v=h.value;if(c-x[v.number]<=99)return{type:r.PLAY_CARD,payload:{card:v,increase:!1}}}}catch(y){O.e(y)}finally{O.f()}var m=n.find(g);if(void 0!==m)return{type:r.PLAY_CARD,payload:{card:m}};throw new Error("reached an edge case")},G=Object(i.createContext)(null),K=function(){var e=Object(i.useContext)(G);if(null===e)throw new Error("please wrap it using withPoker99Network before calling this hook");return e},Q=n(85),V=n(21),Z=n.n(V),$=n(29),ee=n(18),te=n(348),ne=n(337),re=Object(te.a)((function(){return{root:{padding:"16px",width:"110px",height:"160px",borderRadius:"8px",cursor:"pointer",userSelect:"none",transition:"transform 0.1s ease-in-out",transformOrigin:"center","&:hover":{}}}})),ce=function(e){var t=e.style,n=e.card,r=e.card,c=r.suit,i=r.number,o=e.onClick,u=e.disabled,l=re();return Object(a.jsxs)(ne.a,{elevation:4,style:Object(s.a)({color:w[c],pointerEvents:u?"none":"auto"},t),className:l.root,onClick:u?void 0:o,children:[Object(a.jsxs)("h2",{style:{fontFamily:"Big Shoulders Inline Text, inherit",margin:0},children:[Object(a.jsx)("div",{children:m[i]}),Object(a.jsx)("div",{children:y[c]})]}),Object(a.jsx)("div",{children:N(n)})]})},ae=n(339),ie=n(338),oe=n(341),ue=function(e){var t=e.reverse,n=e.card,r=Object(i.useState)(t?"0":"158px"),c=Object(ee.a)(r,2),o=c[0],u=c[1],s=Object(i.useState)(!1),l=Object(ee.a)(s,2),d=l[0],f=l[1];return Object(i.useEffect)((function(){setTimeout((function(){u(t?"158px":"0"),f(!0)}),1)}),[t]),Object(a.jsx)("div",{style:{maxWidth:o,minWidth:o,transition:"min-width 0.3s ease-in-out",position:"relative"},children:n&&Object(a.jsx)("div",{style:{transform:d?"translateX(0)":"translateX(100vw)",transition:"transform 0.3s ease-in-out",position:"absolute",top:0,left:0,margin:"8px"},children:Object(a.jsx)(ce,{card:n,disabled:!0})})})},se=function(e){var t=e.cards,n=e.onCardClick,r=e.hide,c=e.reveal,o=Object(i.useState)(-1),u=Object(ee.a)(o,2),s=u[0],l=u[1],d=function(){var e=Object($.a)(Z.a.mark((function e(t,r){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(t).then((function(){l(r),setTimeout((function(){l(-1)}),1e3)})).catch((function(e){return console.error(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=Object(i.useState)(null),b=Object(ee.a)(f,2),j=b[0],p=b[1],h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(a.jsx)("div",{style:{padding:n?0:"8px",maxWidth:null===j?"calc(100% / 6)":j===t?"142px":"calc((100% - 142px) / 5)",transition:"max-width 0.1s ease-in-out"},onMouseEnter:function(){return p(t)},onTouchStart:function(){return p(t)},onMouseLeave:function(){return p(null)},onTouchEnd:function(){return p(null)},children:e})};return Object(a.jsxs)("div",{style:{position:"fixed",bottom:0,left:0,right:0,zIndex:1,transform:r?"translateY(100%)":"translateY(50%)",transition:"transform 0.3s ease-in-out",pointerEvents:"none"},children:[r&&Object(a.jsx)(ae.a,{onClick:c,style:{transform:"translateY(-100%)",margin:"auto",display:"block",pointerEvents:"all"},children:Object(a.jsx)(oe.a,{})}),Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"nowrap"},children:t.map((function(e,t){return Object(a.jsxs)(a.Fragment,{children:[t===s&&h(Object(a.jsx)(ue,{}),t,!0),-1!==s&&4===t?h(Object(a.jsx)(ue,{reverse:!0,card:e}),t,!0):h(Object(a.jsx)(ie.a,{item:!0,children:Object(a.jsx)(ce,{card:e,onClick:function(){return d(e,t)},disabled:r,style:{transform:j===t?"translateY(-50%)":void 0}})},10*e.number+e.suit),t)]})}))})]})},le=n(353),de=n(345),fe=n(346),be=n(340),je=n(347),pe=function(e){var t=e.open,n=e.onClose,r=e.card,c=e.targets,i=function(e){return function(){n({card:r,increase:e})}};return Object(a.jsxs)(le.a,{open:t,onClose:function(){return n()},"aria-labelledby":"form-dialog-title",children:[Object(a.jsx)(de.a,{children:5===r.number?"Please choose target":"Please choose"}),Object(a.jsx)(fe.a,{children:10===r.number?Object(a.jsxs)(ie.a,{container:!0,children:[Object(a.jsx)(ie.a,{item:!0,children:Object(a.jsx)(be.a,{onClick:i(!1),children:" -10 "})}),Object(a.jsx)(ie.a,{item:!0,children:Object(a.jsx)(be.a,{onClick:i(!0),children:" +10 "})})]}):12===r.number?Object(a.jsxs)(ie.a,{container:!0,children:[Object(a.jsx)(ie.a,{item:!0,children:Object(a.jsx)(be.a,{onClick:i(!1),children:" -20 "})}),Object(a.jsx)(ie.a,{item:!0,children:Object(a.jsx)(be.a,{onClick:i(!0),children:" +20 "})})]}):5===r.number?Object(a.jsx)(ie.a,{container:!0,children:c.map((function(e){var t,c=Object(ee.a)(e,2),i=c[0],o=c[1];return Object(a.jsx)(be.a,{onClick:(t=i,function(){n({card:r,target:t})}),children:o},o)}))}):null}),Object(a.jsx)(je.a,{children:Object(a.jsx)(be.a,{onClick:function(){return n()},color:"primary",children:"Cancel"})})]})},he=function(){var e=K(),t=e.state,n=e.dispatch,o=e.dispatchAs,u=e.myPlayerId,s=e.myLocals,l=e.hideDeck,d=e.setHideDeck,f=e.setError,b=e.renderedDeckId,j=Object(i.useState)(b),p=Object(ee.a)(j,2),h=p[0],O=p[1],v=function(e){f(e.message)},m=function(){var e=Object($.a)(Z.a.mark((function e(c){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={type:r.PLAY_CARD,payload:c},t.turn!==u){e.next=6;break}return e.next=4,n(a).then((function(){return f("")}));case 4:e.next=12;break;case 6:if(!s.includes(t.players[t.turn])){e.next=11;break}return e.next=9,o(t.turn,a).then((function(){return f("")}));case 9:e.next=12;break;case 11:throw new Error("Not my turn");case 12:s.length>0&&d(!0);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){setTimeout((function(){O(b)}),500)}),[b]);var y=t.players.map((function(e,t){return[t,e]})).filter((function(e){var n=Object(ee.a)(e,1)[0];return n!==h&&!t.dead[n]})),w=function(){var e=Object($.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({type:r.END}).catch(v);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=Object(i.useState)(null),k=Object(ee.a)(g,2),D=k[0],A=k[1],E=function(){var e=Object(i.useState)({}),t=Object(ee.a)(e,2),n=t[0],r=n.resolve,c=n.reject,a=t[1];return[{resolve:r,reject:c},function(){var e=Object($.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){a({resolve:e,reject:t})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()]}(),C=Object(ee.a)(E,2),S=C[0],L=S.resolve,T=S.reject,N=C[1],R=function(){var e=Object($.a)(Z.a.mark((function e(n){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!_(n)){e.next=12;break}if(!(x[n.number]+t.points<=99)){e.next=8;break}return A(n),e.next=6,N();case 6:e.next=10;break;case 8:return e.next=10,m({card:n,increase:!1});case 10:e.next=25;break;case 12:if(!P(n)){e.next=23;break}if(1!==y.length){e.next=18;break}return e.next=16,m({card:n,target:y[0][0]});case 16:e.next=21;break;case 18:return A(n),e.next=21,N();case 21:e.next=25;break;case 23:return e.next=25,m({card:n});case 25:e.next=31;break;case 27:throw e.prev=27,e.t0=e.catch(0),v(e.t0),e.t0;case 31:case"end":return e.stop()}}),e,null,[[0,27]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{style:{pointerEvents:"all"},children:[t.started&&void 0!==u&&Object(a.jsx)(se,{cards:t.playerDeck[null!==h&&void 0!==h?h:u],onCardClick:R,hide:l,reveal:function(){return d(!1)}}),Object(a.jsxs)("div",{style:{maxHeight:"50%"},children:[void 0!==t.winner&&null!==t.winner&&Object(a.jsxs)("div",{children:["winner is ",t.players[t.winner],Object(a.jsx)("button",{onClick:w,children:"again"})]}),t.logs.slice().reverse().map((function(e,t){return Object(a.jsx)("div",{children:e},t)}))]}),Object(a.jsx)(pe,{open:null!==D,card:null!==D&&void 0!==D?D:{suit:c.SPADE,number:0},onClose:function(e){void 0!==e?m(e).then(L).catch(v).catch(T):null===T||void 0===T||T(new Error("the operation is cancelled")),A(null)},targets:y})]})},Oe=n(349),ve=n.n(Oe),xe=n(350),me=n.n(xe),ye=n(351),we=function(){var e=K(),t=e.state,n=e.myPlayerId,c=e.dispatch,o=Object(i.useState)(null),u=Object(ee.a)(o,2),l=u[0],d=u[1],f=Object(i.useState)(!1),b=Object(ee.a)(f,2),j=b[0],p=b[1],h=Object(i.useState)(!1),O=Object(ee.a)(h,2),v=O[0],x=O[1];Object(i.useEffect)((function(){x(!0),setTimeout((function(){p(!0)}),1),setTimeout((function(){d(t.lastAction),p(!1),x(!1)}),300)}),[t.lastAction]);var m=function(e){return e%4},y={top:"50%",left:"50%",right:"50%",bottom:"50%"},w=Object(i.useCallback)((function(e){var r=e.offset,c=m((null!==n&&void 0!==n?n:0)+r),i=t.turn===c;return Object(a.jsxs)("h1",{style:Object(s.a)({textDecorationLine:t.dead[c]?"line-through":void 0,position:"absolute",color:i?"red":"white"},[{left:"50%",bottom:"0",transform:"translateX(-50%)"},{left:"40px",top:"50%"},{top:0,left:"50%",transform:"translateX(-50%)"},{right:"40px",top:"50%"}][r]),children:[t.players[c],i?" \u2190":""]})}),[n,t.dead,t.players,t.turn]),g=function(){var e=Object($.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({type:r.END}).catch(console.error);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t.started?Object(a.jsxs)("div",{style:{backgroundColor:"green",position:"fixed",top:0,left:0,right:0,bottom:0,color:"white"},children:[void 0===n&&Object(a.jsx)(w,{offset:0}),Object(a.jsx)(w,{offset:1}),Object(a.jsx)(w,{offset:2}),Object(a.jsx)(w,{offset:3}),Object(a.jsxs)("h1",{style:{position:"absolute",left:"50%",top:"calc(50% - 192px)",transform:"translateX(-50%)"},children:[Object(a.jsx)(ve.a,{}),": ",t.points,"/99"]}),null!==l&&Object(a.jsx)("div",{style:Object(s.a)({position:"absolute"},y),children:Object(a.jsx)("div",{style:{transform:"translate(-50%,-50%)",width:"142px",height:"192px"},children:Object(a.jsx)(ce,{card:l.card,disabled:!0})})}),v&&null!==t.lastAction&&Object(a.jsx)("div",{style:Object(s.a)(Object(s.a)({position:"absolute"},j?y:[{top:"100%",left:"50%",bottom:"0",right:"50%"},{left:"0",top:"50%",right:"100%",bottom:"50%"},{top:"0",left:"50%",bottom:"100%",right:"50%"},{left:"100%",top:"50%",bottom:"50%",right:"0"}][m(t.lastAction.playerId-n+4)]),{},{transform:t.lastAction!==l?"translate(-50%,-50%)":void 0,transition:["top","bottom","left","right"].map((function(e){return"".concat(e," 0.2s ease-in-out")})).join(",")}),children:Object(a.jsx)("div",{style:{transform:"translate(-50%,-50%)",width:"142px",height:"192px"},children:Object(a.jsx)(ce,{card:t.lastAction.card,disabled:!0})})}),Object(a.jsxs)("div",{style:{position:"absolute",left:"50%",bottom:"calc(50% - 192px - 4em)",transform:"translateX(-50%)",textAlign:"center"},children:[!t.dead[n]&&Object(a.jsx)("h1",{style:{color:t.turn===n?"red":"white"},children:t.turn===n?"My Turn":"".concat(t.players[t.turn],"'s turn")}),t.dead[n]&&Object(a.jsx)("h1",{style:{color:"red"},children:"You Died"}),void 0!==t.winner&&null!==t.winner&&Object(a.jsxs)("div",{children:["winner is ",t.players[t.winner],Object(a.jsx)("button",{onClick:g,children:"again"})]}),Object(a.jsxs)("div",{children:["Direction: ",1===t.direction?Object(a.jsx)(me.a,{fontSize:"large"}):Object(a.jsx)(ye.a,{fontSize:"large"})]})]}),Object(a.jsxs)("h3",{style:{position:"absolute",bottom:0,right:"20px"},children:["Draw Deck: ",t.drawDeck.length]})]}):Object(a.jsx)("div",{style:{backgroundColor:"green",position:"fixed",top:0,left:0,right:0,bottom:0,color:"white"}})},ge=function(e){var t=function(t){var n=Object(l.f)(J,new j),r=n.myAis,c=n.state,o=n.dispatchAs;return Object(i.useEffect)((function(){if(void 0!==q&&r.includes(c.players[c.turn])&&c.started&&null===c.winner){var e=window.setTimeout((function(){var e=q(c,c.turn);o(c.turn,e).catch(console.error)}),1e3);return function(){window.clearTimeout(e)}}}),[o,r,c]),Object(a.jsx)(G.Provider,{value:n,children:Object(a.jsx)(e,Object(s.a)({},t))})};return t.displayName="WithGameNetwork",t}((function(){var e=K();return Object(a.jsxs)(Q.a,{gameAppState:e.gameAppState,fullPage:[!1,!1,!0],GameRenderer:Object(a.jsx)(we,{}),children:[Object(a.jsx)(Q.b,Object(s.a)(Object(s.a)({},e),{},{gameName:"Poker99"})),Object(a.jsx)(Q.c,Object(s.a)({},e)),Object(a.jsx)(he,{})]})})),ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,355)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};u.a.render(Object(a.jsx)(ge,{}),document.getElementById("root")),ke()}},[[301,1,2]]]);
//# sourceMappingURL=main.a553cf79.chunk.js.map