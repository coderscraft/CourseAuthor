(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),c=n(9),u=n(8);var l=function(){var e={color:"orange"};return r.a.createElement("nav",{style:{height:50,marginBottom:60,padding:10,background:"#D3D3D3"}},r.a.createElement(u.c,{activeStyle:e,to:"/courses"},"Courses")," | ",r.a.createElement(u.c,{activeStyle:e,to:"/authors"},"Authors"))},o=n(11),s=n(20),i=n(21),E=n(27),m=n(26),h=n(22),f=new(n(23).Dispatcher),d={CREATE_COURSE:"CREATE_COURSE",UPDATE_COURSE:"UPDATE_COURSE",DELETE_COURSE:"DELETE_COURSE",LOAD_COURSES:"LOAD_COURSES"},C=[],p=new(function(e){Object(E.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"addChangeListener",value:function(e){this.on("change",e)}},{key:"removeChangeListener",value:function(e){this.removeListener("change",e)}},{key:"emitChange",value:function(){this.emit("change")}},{key:"getCourses",value:function(){return C}},{key:"getCourseBySlug",value:function(e){return C.find(function(t){return t.slug===e})}}]),n}(h.EventEmitter));f.register(function(e){switch(e.actionType){case d.DELETE_COURSE:C=C.filter(function(t){return t.id!==parseInt(e.id,10)}),p.emitChange();break;case d.CREATE_COURSE:C.push(e.course),p.emitChange();break;case d.UPDATE_COURSE:C=C.map(function(t){return t.id===e.course.id?e.course:t}),p.emitChange();break;case d.LOAD_COURSES:C=e.courses,p.emitChange()}});var g=p;var O=function(e){return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\xa0"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Author ID"),r.a.createElement("th",null,"Category"))),r.a.createElement("tbody",null,e.courses.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){e.deleteCourse(t.id)}},"Delete")),r.a.createElement("td",null,r.a.createElement(u.b,{to:"/course/"+t.slug},t.title)),r.a.createElement("td",null,t.authorId),r.a.createElement("td",null,t.category))})))},b=(n(15),n(14)),v=n.n(b),y=n(24);function _(e){return R.apply(this,arguments)}function R(){return(R=Object(y.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=2;break}return e.abrupt("return",t.json());case 2:if(400!==t.status){e.next=7;break}return e.next=5,t.text();case 5:throw n=e.sent,new Error(n);case 7:throw new Error("Network response was not ok.");case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(e){throw console.error("API call failed. "+e),e}var U=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_URL+"/courses.json";function D(){return fetch(U).then(_).catch(S).then(function(e){f.dispatch({actionType:d.LOAD_COURSES,courses:e})})}function k(e){return(t=e,fetch(U+t,{method:"DELETE"}).then(_).catch(S)).then(function(){f.dispatch({actionType:d.DELETE_COURSE,id:e})});var t}var A=function(){var e=Object(a.useState)(g.getCourses()),t=Object(o.a)(e,2),n=t[0],c=t[1];function u(){c(g.getCourses())}return Object(a.useEffect)(function(){return g.addChangeListener(u),0===g.getCourses.length&&D(),function(){return g.removeChangeListener(u)}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{marginBottom:20}},"Courses"),r.a.createElement(O,{courses:n,deleteCourse:k}))},L=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_URL+"/authors.json";var w=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)(function(){fetch(L).then(_).catch(S).then(function(e){c(e)})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{marginBottom:20}},"Authors"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"))),r.a.createElement("tbody",null,n.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.name))}))))},j=n(3),T=n(25);n(42);var P=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(T.a,{autoClose:3e3,hideProgressBar:!0}),r.a.createElement(l,null),r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/",exact:!0,component:A}),r.a.createElement(j.a,{path:"/courses",component:A}),r.a.createElement(j.a,{path:"/authors",component:w})))};Object(c.render)(r.a.createElement(u.a,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.160944b6.chunk.js.map