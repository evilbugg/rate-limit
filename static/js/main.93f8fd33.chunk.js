(this["webpackJsonprate-limit"]=this["webpackJsonprate-limit"]||[]).push([[0],{43:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(17),r=c.n(a),s=c(3),i=c.n(s),o=c(5),u=c(4),l=c(18),m=c.n(l),d=function(){var e=Object(o.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(100*Math.random())+1,e.next=3,m.a.get("https://jsonplaceholder.typicode.com/comments?postId=".concat(t));case 3:return c=e.sent,e.abrupt("return",c.data.splice(0,3));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(e,t){var c=!0;return function(){c&&(e(),c=!1,setTimeout((function(){c=!0}),t))}},b=c(6),h=c.n(b),f=c(0),p=function(e){var t;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:h.a.subHeader,children:[Object(f.jsxs)("label",{htmlFor:e.name,children:[e.name," : "]}),Object(f.jsx)("span",{className:h.a.count,name:e.name,children:e.count}),Object(f.jsx)("input",{className:h.a.comments,type:"button",onClick:e.callbackFunc,value:"Get Comments"}),Object(f.jsx)("div",{className:"ui left pointing label",children:e.readMe})]}),Object(f.jsx)("div",{className:"ui stackable five cards",children:(t=e.comments,t.map((function(e){return Object(f.jsx)("div",{className:"ui card",children:Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("div",{className:"header",children:e.name}),Object(f.jsx)("div",{className:"meta",children:e.email}),Object(f.jsx)("div",{className:"description",children:Object(f.jsx)("p",{children:e.body})})]})},e.id)})))})]})},O=c(8),x=c.n(O),v=["Rest API call will trigger on every click","Rest API call will trigger after 1.5 sec of ideal time after clicks","Rest API call will trigger only once every 1.5 sec for all clicks"],w=function(){var e,t=Object(n.useState)(0),c=Object(u.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(0),l=Object(u.a)(s,2),m=l[0],b=l[1],h=Object(n.useState)(0),O=Object(u.a)(h,2),w=O[0],k=O[1],N=Object(n.useState)([]),g=Object(u.a)(N,2),_=g[0],C=g[1],y=Object(n.useState)([]),T=Object(u.a)(y,2),M=T[0],S=T[1],A=Object(n.useState)([]),P=Object(u.a)(A,2),F=P[0],D=P[1],I=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,C(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,S(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchThrottlingComments  CALLED"),e.next=3,d();case 3:t=e.sent,D(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=Object(n.useCallback)(j((function(){k((function(e){return e+1})),H()}),1500),[k,D]);return Object(f.jsxs)("div",{className:"container ".concat(x.a.mainPage),children:[Object(f.jsx)("h3",{class:"ui block header ".concat(x.a.header," "),children:"Do Check the Network Tab for Rest Calls"}),Object(f.jsxs)("div",{className:"ui stackable grid",children:[Object(f.jsx)("div",{class:"row",children:Object(f.jsx)("div",{className:"sixteen wide column",children:Object(f.jsx)(p,{name:"Normal Counter",callbackFunc:function(e){r((function(e){return e+1})),I()},count:a,comments:_,readMe:v[0]})})}),Object(f.jsx)("div",{class:"row",children:Object(f.jsx)("div",{className:"sixteen wide column",children:Object(f.jsx)(p,{name:"Debounce Counter",callbackFunc:function(t){clearTimeout(e),e=setTimeout((function(){b((function(e){return e+1})),R()}),1500)},count:m,comments:M,readMe:v[1]})})}),Object(f.jsx)("div",{class:"row",children:Object(f.jsx)("div",{className:"sixteen wide column",children:Object(f.jsx)(p,{name:"Throttling Counter",callbackFunc:L,count:w,comments:F,readMe:v[2]})})})]})]})};r.a.render(Object(f.jsx)(w,{}),document.querySelector("#root"))},6:function(e,t,c){e.exports={comments:"Comments_comments__o2TrT",count:"Comments_count__ZDwMQ",subHeader:"Comments_subHeader__30lxr"}},8:function(e,t,c){e.exports={mainPage:"App_mainPage__1mdiN",header:"App_header__2xoLB"}}},[[43,1,2]]]);
//# sourceMappingURL=main.93f8fd33.chunk.js.map