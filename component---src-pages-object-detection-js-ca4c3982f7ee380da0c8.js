(this.webpackJsonp=this.webpackJsonp||[]).push([[20],{"+bWt":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("/d1K"),i=a("Zttt"),c=a("RXmK"),l=a("HaE+"),s=a("o0o1"),d=a.n(s),u=a("R/WZ"),m=a("Z3vd"),p=a("Jw/v"),h=a("9pL1"),b=a.n(h),v={facingMode:"environment"},g=Object(u.a)((function(e){return{container:{position:"relative",maxWidth:"100%",width:"100%"},video:{zIndex:-1,maxWidth:"100%",position:"absolute"},canvas:{maxWidth:"100%",position:"absolute"},toggler:{marginBottom:e.spacing(2)},noModelMessage:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}}));function f(e,t){var a=e.bbox[0],n=e.bbox[1],r=e.bbox[2],o=e.bbox[3],i="16px sans-serif";t.strokeStyle="green",t.lineWidth=4,t.strokeRect(a,n,r,o),t.font=i,t.textBaseline="top",t.fillStyle="green";var c=t.measureText(e.class).width,l=parseInt(i,10);t.fillRect(a,n,c+4,l+4),t.fillStyle="#FFFFFF",t.fillText(e.class,a,n)}var x=null;"undefined"!=typeof Worker&&(x=p());var _=null;"undefined"!=typeof document&&(_=document.createElement("canvas"));var y=function(){var e=g(),t=Object(n.useState)(!0),a=t[0],o=t[1],i=Object(n.useState)(!0),c=i[0],s=i[1],u=Object(n.useState)(!1),p=u[0],h=u[1],y=Object(n.useRef)(null),w=Object(n.useRef)(null),C=function(){var e=Object(l.a)(d.a.mark((function e(t){var a,n,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=y.current,!t&&0!==a.videoWidth&&0!==a.videoHeight){e.next=3;break}return e.abrupt("return",null);case 3:return _.width=a.videoWidth,_.height=a.videoHeight,(n=_.getContext("2d")).drawImage(a,0,0,a.videoWidth,a.videoHeight),r=n.getImageData(0,0,a.videoWidth,a.videoHeight),e.next=10,x.getPrediction(r);case 10:return o=e.sent,e.abrupt("return",Object.assign({},o,{width:a.videoWidth,height:a.videoHeight}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=!c;return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia({audio:!1,video:v}).then((function(e){return window.stream=e,y.current.srcObject=e,new Promise((function(e){y.current.onloadedmetadata=function(){e()}}))})).then(Object(l.a)(d.a.mark((function t(){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=d.a.mark((function t(){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e);case 2:if(a=t.sent,w){t.next=5;break}return t.abrupt("return",{v:!1});case 5:w.current.width!==a.width&&(w.current.width=a.width),w.current.height!==a.height&&(w.current.height=a.height),p||null==a||h(!0),n=w.current.getContext("2d"),a&&null!=a.result&&a.result[0]&&(n.clearRect(0,0,w.current.width,w.current.height),a.result.forEach((function(e){f(e,n)})));case 10:case"end":return t.stop()}}),t)}));case 1:if(e){t.next=8;break}return t.delegateYield(a(),"t0",3);case 3:if("object"!=typeof(n=t.t0)){t.next=6;break}return t.abrupt("return",n.v);case 6:t.next=1;break;case 8:return t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t)})))).catch((function(e){console.error(e)})):o(!1),function(){e=!0}}),[y,c]),r.a.createElement(r.a.Fragment,null,!p&&r.a.createElement("h2",{className:e.noModelMessage},"Give it a moment, model has to be loaded first (~5MB)",r.a.createElement("img",{src:b.a,alt:": ("})),r.a.createElement(m.a,{className:e.toggler,onClick:function(){s(!c)},margin:"normal",fullWidth:!0,variant:"contained",type:"submit",color:"primary"},c?"Turn OFF":"Turn ON"),!a&&r.a.createElement("span",null,"Cannot access webcam :("),r.a.createElement("div",{className:e.container},r.a.createElement("video",{className:e.video,autoPlay:!0,playsInline:!0,muted:!0,ref:y}),r.a.createElement("canvas",{className:e.canvas,ref:w})))},w=a("gGy4");t.default=function(){var e=Object(w.a)(),t=e.title,a=e.subtitle;return r.a.createElement(i.a,{title:"Object Detection TF2 - "+t,description:a},r.a.createElement(o.a,null),r.a.createElement(c.a,{title:"Simple Detector"},r.a.createElement(y,null)))}},"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("iSRb"),c=a.n(i),l=function(e){var t=e.author,a=e.isIndex,n=e.showBio,i=void 0===n||n;return r.a.createElement("div",{className:c.a.author},r.a.createElement(o.Link,{to:"/"},r.a.createElement("img",{src:Object(o.withPrefix)(t.photo),className:c.a.author__photo,width:"75",height:"75",alt:t.name})),a?r.a.createElement("h1",{className:c.a.author__title},r.a.createElement(o.Link,{className:c.a["author__title-link"],to:"/"},t.name)):r.a.createElement("h2",{className:c.a.author__title},r.a.createElement(o.Link,{className:c.a["author__title-link"],to:"/"},t.name)),i&&r.a.createElement("p",{className:c.a.author__subtitle},t.bio))},s=a("7Qib"),d=a("euHg"),u=a.n(d),m=function(e){var t=e.icon;return r.a.createElement("svg",{className:u.a.icon,viewBox:t.viewBox},r.a.createElement("path",{d:t.path}))},p=a("aU/I"),h=a.n(p),b=function(e){var t=e.contacts,a=e.slim?h.a.contacts__list+" "+h.a["contacts__list--slim"]:h.a.contacts__list;return r.a.createElement("div",{className:h.a.contacts},r.a.createElement("ul",{className:a},Object.keys(t).map((function(e){return r.a.createElement("li",{className:h.a["contacts__list-item"],key:e},r.a.createElement("a",{className:h.a["contacts__list-item-link"],href:Object(s.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank",title:e},r.a.createElement(m,{icon:Object(s.b)(e)})))}))))},v=a("Nrk+"),g=a.n(v),f=function(e){var t=e.copyright;return r.a.createElement("div",{className:g.a.copyright},t)},x=a("je8k"),_=a.n(x),y=function(e){var t=e.menu;return r.a.createElement("nav",{className:_.a.menu},r.a.createElement("ul",{className:_.a.menu__list},t.map((function(e){return r.a.createElement("li",{className:_.a["menu__list-item"],key:e.path},r.a.createElement(o.Link,{to:e.path,className:_.a["menu__list-item-link"],activeClassName:_.a["menu__list-item-link--active"]},e.label))}))))},w=a("SySy"),C=a.n(w),k=a("gGy4"),E=function(e){var t=e.isIndex,a=e.slim,n=Object(k.a)(),o=n.author,i=n.copyright,c=n.menu,s=a?C.a.sidebar+" "+C.a["sidebar--slim"]:C.a.sidebar;return r.a.createElement("div",{className:s},r.a.createElement("div",{className:C.a.sidebar__inner},r.a.createElement(l,{author:o,isIndex:t,showBio:!a}),r.a.createElement(y,{menu:c}),r.a.createElement(b,{contacts:o.contacts,slim:a}),r.a.createElement(f,{copyright:i})))}},"7Qib":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o}));var n=a("WlAH"),r=function(e){var t;switch(e){case"twitter":t=n.a.TWITTER;break;case"github":t=n.a.GITHUB;break;case"email":t=n.a.EMAIL;break;case"rss":t=n.a.RSS;break;case"linkedin":t=n.a.LINKEDIN;break;case"instagram":t=n.a.INSTAGRAM;break;case"gitlab":t=n.a.GITLAB;break;default:t={}}return t},o=function(e,t){var a;switch(e){case"twitter":a="https://www.twitter.com/"+t;break;case"github":a="https://github.com/"+t;break;case"email":a="mailto:"+t;break;case"linkedin":a="https://www.linkedin.com/in/"+t;break;case"instagram":a="https://www.instagram.com/"+t;break;case"gitlab":a="https://www.gitlab.com/"+t;break;default:a=t}return a}},"9pL1":function(e,t,a){e.exports=a.p+"static/loading-323d8b7d3d7937404db8f570a40e63c2.gif"},"HaE+":function(e,t,a){"use strict";function n(e,t,a,n,r,o,i){try{var c=e[o](i),l=c.value}catch(s){return void a(s)}c.done?t(l):Promise.resolve(l).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,o){var i=e.apply(t,a);function c(e){n(i,r,o,c,l,"next",e)}function l(e){n(i,r,o,c,l,"throw",e)}c(void 0)}))}}a.d(t,"a",(function(){return r}))},"Jw/v":function(e,t,a){var n=a("PWc5"),r=["getPrediction"];e.exports=function(){var e=new Worker(a.p+"5bda6722af52604dc060.worker.js",{name:"[hash].worker.js"});return n(e,r),e}},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1ariN"}},PWc5:function(e,t){e.exports=function(e,t){var a=0,n={};e.addEventListener("message",(function(t){var a=t.data;if("RPC"===a.type)if(a.id){var r=n[a.id];r&&(delete n[a.id],a.error?r[1](Object.assign(Error(a.error.message),a.error)):r[0](a.result))}else{var o=document.createEvent("Event");o.initEvent(a.method,!1,!1),o.data=a.params,e.dispatchEvent(o)}})),t.forEach((function(t){e[t]=function(){var r=arguments;return new Promise((function(o,i){var c=++a;n[c]=[o,i],e.postMessage({type:"RPC",id:c,method:t,params:[].slice.call(r)})}))}}))}},"R/WZ":function(e,t,a){"use strict";var n=a("wx14"),r=a("RD7I"),o=a("cNwE");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(e,Object(n.a)({defaultTheme:o.a},t))}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--2nMky","page--wide":"Page-module--page--wide--34SE4",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),r=a.n(n),o=a("RBgx"),i=a.n(o),c=function(e){var t=e.title,a=e.wide,o=e.children,c=Object(n.useRef)();Object(n.useEffect)((function(){c.current.scrollIntoView()}));var l=a?i.a.page+" "+i.a["page--wide"]:i.a.page;return r.a.createElement("div",{ref:c,className:l},r.a.createElement("div",{className:i.a.page__inner},t&&r.a.createElement("h1",{className:i.a.page__title},t),r.a.createElement("div",{className:i.a.page__body},o)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p","sidebar--slim":"Sidebar-module--sidebar--slim--230LL",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},WlAH:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"},LINKEDIN:{path:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",viewBox:"0 0 24 24"},INSTAGRAM:{path:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",viewBox:"0 0 24 24"},GITLAB:{path:"M 38.011719 4 C 37.574219 3.996094 37.183594 4.273438 37.046875 4.691406 L 32.074219 20 L 17.925781 20 L 12.953125 4.691406 C 12.820313 4.289063 12.449219 4.011719 12.023438 4 C 11.597656 3.992188 11.214844 4.25 11.0625 4.648438 L 5.070313 20.640625 C 5.066406 20.640625 5.066406 20.644531 5.0625 20.648438 L 2.0625 28.648438 C 1.90625 29.070313 2.046875 29.542969 2.414063 29.808594 L 24.40625 45.800781 L 24.410156 45.808594 C 24.414063 45.808594 24.414063 45.808594 24.414063 45.8125 C 24.425781 45.820313 24.441406 45.828125 24.453125 45.835938 C 24.46875 45.84375 24.480469 45.855469 24.496094 45.863281 C 24.5 45.863281 24.5 45.867188 24.503906 45.867188 C 24.503906 45.867188 24.507813 45.871094 24.511719 45.871094 C 24.515625 45.875 24.519531 45.878906 24.527344 45.878906 C 24.53125 45.882813 24.539063 45.886719 24.542969 45.890625 C 24.5625 45.898438 24.585938 45.910156 24.609375 45.917969 C 24.609375 45.917969 24.609375 45.917969 24.609375 45.921875 C 24.632813 45.929688 24.65625 45.9375 24.675781 45.945313 C 24.679688 45.945313 24.679688 45.945313 24.683594 45.949219 C 24.699219 45.953125 24.714844 45.957031 24.734375 45.964844 C 24.742188 45.964844 24.75 45.96875 24.761719 45.96875 C 24.761719 45.972656 24.761719 45.972656 24.761719 45.96875 C 24.78125 45.976563 24.800781 45.980469 24.820313 45.984375 C 24.847656 45.988281 24.871094 45.992188 24.898438 45.996094 C 24.9375 45.996094 24.980469 46 25.019531 46 C 25.058594 45.996094 25.09375 45.996094 25.128906 45.988281 C 25.144531 45.988281 25.15625 45.988281 25.171875 45.984375 C 25.171875 45.984375 25.175781 45.984375 25.179688 45.984375 C 25.1875 45.980469 25.191406 45.980469 25.199219 45.980469 C 25.203125 45.980469 25.207031 45.976563 25.214844 45.976563 C 25.222656 45.972656 25.234375 45.972656 25.242188 45.96875 C 25.257813 45.964844 25.269531 45.960938 25.28125 45.957031 C 25.289063 45.957031 25.292969 45.957031 25.296875 45.953125 C 25.300781 45.953125 25.304688 45.953125 25.308594 45.953125 C 25.324219 45.945313 25.34375 45.9375 25.359375 45.933594 C 25.378906 45.925781 25.394531 45.917969 25.410156 45.910156 C 25.414063 45.910156 25.414063 45.910156 25.417969 45.90625 C 25.421875 45.90625 25.425781 45.90625 25.429688 45.902344 C 25.4375 45.898438 25.445313 45.894531 25.453125 45.890625 C 25.476563 45.878906 25.496094 45.867188 25.515625 45.855469 C 25.523438 45.851563 25.527344 45.847656 25.53125 45.84375 C 25.535156 45.84375 25.539063 45.839844 25.542969 45.839844 C 25.558594 45.828125 25.574219 45.820313 25.589844 45.808594 L 25.597656 45.796875 L 47.589844 29.808594 C 47.953125 29.542969 48.09375 29.070313 47.9375 28.648438 L 44.945313 20.675781 C 44.941406 20.667969 44.9375 20.65625 44.9375 20.648438 L 38.9375 4.648438 C 38.789063 4.261719 38.425781 4.003906 38.011719 4 Z M 8.066406 22 L 16.472656 22 L 22.328125 40.015625 Z M 33.527344 22 L 41.933594 22 L 27.671875 40.015625 Z M 6.3125 23.007813 L 19.6875 39.902344 L 4.203125 28.640625 Z M 43.6875 23.007813 L 45.796875 28.640625 L 30.3125 39.902344 Z",viewBox:"0 0 50 50"}},r={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"}},Z3vd:function(e,t,a){"use strict";var n=a("Ff2n"),r=a("wx14"),o=a("q1tI"),i=a("iuhU"),c=a("H2TA"),l=a("ye/S"),s=a("VD++"),d=a("NqtD"),u=o.forwardRef((function(e,t){var a=e.children,c=e.classes,l=e.className,u=e.color,m=void 0===u?"default":u,p=e.component,h=void 0===p?"button":p,b=e.disabled,v=void 0!==b&&b,g=e.disableElevation,f=void 0!==g&&g,x=e.disableFocusRipple,_=void 0!==x&&x,y=e.endIcon,w=e.focusVisibleClassName,C=e.fullWidth,k=void 0!==C&&C,E=e.size,S=void 0===E?"medium":E,z=e.startIcon,O=e.type,N=void 0===O?"button":O,j=e.variant,I=void 0===j?"text":j,L=Object(n.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),M=z&&o.createElement("span",{className:Object(i.a)(c.startIcon,c["iconSize".concat(Object(d.a)(S))])},z),R=y&&o.createElement("span",{className:Object(i.a)(c.endIcon,c["iconSize".concat(Object(d.a)(S))])},y);return o.createElement(s.a,Object(r.a)({className:Object(i.a)(c.root,c[I],l,"inherit"===m?c.colorInherit:"default"!==m&&c["".concat(I).concat(Object(d.a)(m))],"medium"!==S&&[c["".concat(I,"Size").concat(Object(d.a)(S))],c["size".concat(Object(d.a)(S))]],f&&c.disableElevation,v&&c.disabled,k&&c.fullWidth),component:h,disabled:v,focusRipple:!_,focusVisibleClassName:Object(i.a)(c.focusVisible,w),ref:t,type:N},L),o.createElement("span",{className:c.label},M,a,R))}));t.a=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(l.a)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(l.a)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(l.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(l.a)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(l.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(u)},"aU/I":function(e,t,a){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list--slim":"Contacts-module--contacts__list--slim--2ohaa","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--Gpyvw"}},iSRb:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}}}]);
//# sourceMappingURL=component---src-pages-object-detection-js-ca4c3982f7ee380da0c8.js.map