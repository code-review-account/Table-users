(this.webpackJsonptesttask=this.webpackJsonptesttask||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var c,a,r,s=n(1),i=n.n(s),d=n(10),l=n.n(d),o=(n(20),n(15)),u=(n(21),n(22),i.a.createContext()),j=n(2),h=function(t,e){switch(e.type){case"FETCH_DATA":var n=e.payload.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{select:!1,id:e.payload.indexOf(t)+1})}));return Object(j.a)(Object(j.a)({},t),{},{data:n});case"RE_CHACK":case"DELETE_DATA":return Object(j.a)(Object(j.a)({},t),{},{data:e.payload});default:return t}},f=n(3),b=n(4),x=b.a.button(c||(c=Object(f.a)(["\nwidth: 215px;\nheight: 48px;\nmargin: 24px 0 0 0;\nborder-radius: 6px;\nborder: solid 2px #dadada; \nfont-weight: bold;\nletter-spacing: normal;\nbackground-color: ",";;\ncolor: ",";\n"])),(function(t){return t.btnBG}),(function(t){return t.btnColor})),O=n(8),p=n.n(O),v=n(14),g={APP_URL:"https://api.npoint.io/324f4ca2cdd639760638"},m=b.a.input.attrs((function(t){return{type:"checkbox"}}))(a||(a=Object(f.a)(["\nwidth: 18px;\nheight: 18px;\nborder-radius: 6px;\nborder: solid 2px #e8e8e8;\nbackground-color: #ffffff;\nmargin-left: 20px; \n"]))),C=(n(26),n(0)),w=function(){var t=i.a.useContext(u),e=t.stateData,n=t.dispatchData;return Object(C.jsxs)("tr",{className:"header",children:[Object(C.jsx)("td",{children:Object(C.jsx)(m,{onChange:function(t){for(var c=e.data,a=0;a<c.length;a++)c[a].select=t.target.checked;n({type:"RE_CHACK",payload:c})}})}),Object(C.jsx)("td",{children:"\u2116"}),Object(C.jsx)("td",{children:"\u0424\u0418\u041e"}),Object(C.jsx)("td",{children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442 (\u041b\u0435\u0442)"}),Object(C.jsx)("td",{children:"\u0420\u043e\u0441\u0442"}),Object(C.jsx)("td",{children:"\u0412\u0435\u0441"}),Object(C.jsx)("td",{children:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430"}),Object(C.jsx)("td",{}),Object(C.jsx)("td",{})]})},D=function(t){return Object(C.jsx)("svg",Object(j.a)(Object(j.a)({className:"iconHover",xmlns:"http://www.w3.org/2000/svg",width:"23",height:"24",fill:"none",viewBox:"0 0 23 24"},t),{},{children:Object(C.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.762 1h5.365c.987 0 1.788.895 1.788 2v1h2.683c.987 0 1.788.895 1.788 2v2c0 1.105-.8 2-1.788 2h-.072l-.823 11c0 1.105-.8 2-1.788 2H6.973c-.988 0-1.788-.895-1.785-1.917L4.362 10h-.071c-.988 0-1.789-.895-1.789-2V6c0-1.105.8-2 1.789-2h2.682V3c0-1.105.8-2 1.789-2zM4.29 6h14.307v2H4.29V6zm1.865 4h10.576l-.814 10.917-.003.083H6.973l-.817-11zm7.97-7v1H8.763V3h5.365z",clipRule:"evenodd"})}))},k=b.a.tr(r||(r=Object(f.a)(["\nheight: 48px;\nbackground-color: ",";\n\n"])),(function(t){return t.background})),y=(n(28),function(t){return Object(C.jsx)("svg",{className:"iconHover",xmlns:"http://www.w3.org/2000/svg",width:"22",height:"24",fill:"none",viewBox:"0 0 22 24",children:Object(C.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.126 2c.585 0 1.146.261 1.556.723l2.773 3.101c.413.462.645 1.088.645 1.741s-.232 1.28-.645 1.74L9.332 20.625c-.625.806-1.51 1.3-2.525 1.378h-4.59v-1l.002-4.215c.076-1.054.515-2.035 1.183-2.694L13.568 2.725C13.98 2.26 14.541 2 15.126 2zM6.744 20.005c.478-.038.923-.287 1.28-.743l6.761-7.562-3.357-3.755-6.801 7.605c-.362.358-.586.86-.623 1.318v3.135l2.74.002zM12.693 6.53l3.357 3.755 2.14-2.394c.078-.087.121-.204.121-.327 0-.122-.043-.24-.12-.326l-2.776-3.104c-.076-.086-.18-.135-.29-.135-.108 0-.212.049-.289.135L12.693 6.53z",clipRule:"evenodd"})})}),E=function(t){var e=t.elem,n=t.indexOf,c=i.a.useContext(u),a=c.stateData,r=c.dispatchData;var s=function(t){var e=a;e.delBtn=1,!0===t.target.checked&&(e.delBtn=2)};return Object(C.jsxs)(k,{background:e.id%2===0?"#ffffff":"#fafafa",children:[Object(C.jsx)("td",{children:Object(C.jsx)(m,{onChange:function(t){var e=a.data;e[n-1].select=t.target.checked,r({type:"RE_CHACK",payload:e}),s(t)},checked:e.select})}),Object(C.jsx)("td",{children:n}),Object(C.jsxs)("td",{children:[e.first_name," ",e.last_name]}),Object(C.jsx)("td",{children:function(){var t=new Date(1e3*e.date_of_birth).getFullYear();return(new Date).getFullYear()-t}()}),Object(C.jsx)("td",{children:function(t){var e=t.slice(0,t.search("'")),n=t.slice(t.search("'")+1,t.search('"')),c=Math.trunc(30.48*e+2.54*n),a=Math.trunc(c/100),r=c-100*a;return"".concat(a,"\u043c ").concat(r,"\u0441\u043c")}(e.height)}),Object(C.jsxs)("td",{children:[function(t){var e=t/2.20462;return Math.trunc(e)}(e.weight)," \u043a\u0433"]}),Object(C.jsxs)("td",{children:["$",e.salary]}),Object(C.jsx)("td",{children:Object(C.jsx)(y,{})}),Object(C.jsx)("td",{onClick:function(){var t=a.data;t.splice(n-1,1),r({type:"DELETE_DATA",payload:t})},children:Object(C.jsx)(D,{})})]})},A=(n(29),function(){var t=i.a.useContext(u),e=t.stateData,n=t.dispatchData,c=e.data;return i.a.useEffect((function(){(function(){var t=Object(v.a)(p.a.mark((function t(){var e,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(g.APP_URL);case 3:if(200!==(e=t.sent).status){t.next=9;break}return t.next=7,e.json();case 7:c=t.sent,n({type:"FETCH_DATA",payload:c});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}})()()}),[]),c?Object(C.jsxs)("table",{className:"users",children:[Object(C.jsx)(w,{}),c&&c.map((function(t,e){return Object(C.jsx)(E,{elem:t,indexOf:c.indexOf(t)+1},e)}))]}):null}),_=(n(30),function(){return Object(C.jsx)("div",{className:"title",children:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"})}),T=(n(31),function(){var t=i.a.useContext(u),e=t.stateData,n=t.dispatchData;return Object(C.jsxs)("div",{className:"main",children:[Object(C.jsx)(_,{}),Object(C.jsx)(A,{}),Object(C.jsx)("div",{className:"btndiv",children:Object(C.jsx)(x,{className:"btndel",onClick:function(){var t=e.data.filter((function(t){return!1===t.select}));n({type:"DELETE_DATA",payload:t})},btnBG:function(){var t="#fff";return 2===e.delBtn&&(t="#0085be"),t},btnColor:function(){var t="#dadada";return 2===e.delBtn&&(t="#fff"),t},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435"})})]})}),B={data:[],delBtn:1};var H=function(){var t=i.a.useReducer(h,B),e=Object(o.a)(t,2),n=e[0],c=e[1];return Object(C.jsx)("div",{className:"container",children:Object(C.jsx)(u.Provider,{value:{stateData:n,dispatchData:c},children:Object(C.jsx)(T,{})})})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),r(t),s(t)}))};l.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(H,{})}),document.getElementById("root")),L()}},[[32,1,2]]]);
//# sourceMappingURL=main.63b7cc30.chunk.js.map