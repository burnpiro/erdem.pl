(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{181:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(65),u=a(361),o=a.n(u),i=a(204),l=a(210),s=a(211),f=a(196);t.default=function(){var e=Object(f.a)(),t=e.title,a=e.subtitle,n=Object(f.b)();return r.a.createElement(i.a,{title:"Tags - "+t,description:a},r.a.createElement(l.a,null),r.a.createElement(s.a,{title:"Tags"},r.a.createElement("ul",null,n.map(function(e){return r.a.createElement("li",{key:e.fieldValue},r.a.createElement(c.Link,{to:"/tag/"+o()(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))}))))}},196:function(e,t,a){"use strict";var n=a(201),r=function(){return n.data.site.siteMetadata},c=a(202),u=function(){return c.data.allMarkdownRemark.group};a.d(t,"a",function(){return r}),a.d(t,"b",function(){return u})},199:function(e,t,a){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"}},r={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},201:function(e){e.exports={data:{site:{siteMetadata:{author:{name:"Kemal Erdem",bio:"Javascript Architect, Freelance Consultant, IoT enthusiast, MTB lover",photo:"/main-photo.jpg",contacts:{email:"kemalpiro@gmail.com",twitter:"burnpiro",github:"burnpiro",rss:"/rss.xml"}},menu:[{label:"About me",path:"/pages/about"},{label:"Contact me",path:"/contact"}],url:"https://erdem.pl",title:"Blog by Kemal Erdem",subtitle:"Even complex things could be explain in a simple way.",copyright:"© All rights reserved.",disqusShortname:"",contactFormUrl:"https://docs.google.com/forms/d/e/1FAIpQLSdksRjFLVeWW2-wq8QSeKyJwUOs5LAq1bxsv0D9bTNEAQiu1g/formResponse"}}}}},202:function(e){e.exports={data:{allMarkdownRemark:{totalCount:3,group:[{totalCount:1,fieldValue:"Engines"},{totalCount:2,fieldValue:"Internals"},{totalCount:3,fieldValue:"Javascript"},{totalCount:1,fieldValue:"Libraries"},{totalCount:2,fieldValue:"Performance"},{totalCount:1,fieldValue:"Web Workers"}]}}}},203:function(e,t,a){"use strict";var n=a(199),r=function(e){var t;switch(e){case"twitter":t=n.a.TWITTER;break;case"github":t=n.a.GITHUB;break;case"email":t=n.a.EMAIL;break;case"rss":t=n.a.RSS;break;default:t={}}return t},c=function(e,t){var a;switch(e){case"twitter":a="https://www.twitter.com/"+t;break;case"github":a="https://github.com/"+t;break;case"email":a="mailto:"+t;break;default:a=t}return a};a.d(t,"b",function(){return r}),a.d(t,"a",function(){return c})},204:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(219),u=a.n(c),o=a(169),i=a.n(o),l=a(220),s=a.n(l),f=function(e){var t=e.children,a=e.title,n=e.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i.a.layout},r.a.createElement(u.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{property:"og:site_name",content:a}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:title",content:a})),t),r.a.createElement(s.a,{location:"bottom"},"This website uses cookies to enhance the user experience"))};a.d(t,"a",function(){return f})},205:function(e,t,a){var n=a(243),r="object"==typeof self&&self&&self.Object===Object&&self,c=n||r||Function("return this")();e.exports=c},206:function(e,t){var a=Array.isArray;e.exports=a},207:function(e,t,a){var n=a(32),r=a(26);a(209)("keys",function(){return function(e){return r(n(e))}})},209:function(e,t,a){var n=a(11),r=a(20),c=a(13);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],u={};u[e]=t(a),n(n.S+n.F*c(function(){a(1)}),"Object",u)}},210:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(200),a(65)),u=a(170),o=a.n(u),i=function(e){var t=e.author,a=e.isIndex;return r.a.createElement("div",{className:o.a.author},r.a.createElement(c.Link,{to:"/"},r.a.createElement("img",{src:Object(c.withPrefix)(t.photo),className:o.a.author__photo,width:"75",height:"75",alt:t.name})),a?r.a.createElement("h1",{className:o.a.author__title},r.a.createElement(c.Link,{className:o.a["author__title-link"],to:"/"},t.name)):r.a.createElement("h2",{className:o.a.author__title},r.a.createElement(c.Link,{className:o.a["author__title-link"],to:"/"},t.name)),r.a.createElement("p",{className:o.a.author__subtitle},t.bio))},l=(a(99),a(66),a(44),a(207),a(203)),s=a(171),f=a.n(s),m=function(e){var t=e.icon;return r.a.createElement("svg",{className:f.a.icon,viewBox:t.viewBox},r.a.createElement("path",{d:t.path}))},d=a(172),p=a.n(d),v=function(e){var t=e.contacts;return r.a.createElement("div",{className:p.a.contacts},r.a.createElement("ul",{className:p.a.contacts__list},Object.keys(t).map(function(e){return r.a.createElement("li",{className:p.a["contacts__list-item"],key:e},r.a.createElement("a",{className:p.a["contacts__list-item-link"],href:Object(l.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},r.a.createElement(m,{icon:Object(l.b)(e)})))})))},h=a(173),x=a.n(h),b=function(e){var t=e.copyright;return r.a.createElement("div",{className:x.a.copyright},t)},E=a(174),g=a.n(E),_=function(e){var t=e.menu;return r.a.createElement("nav",{className:g.a.menu},r.a.createElement("ul",{className:g.a.menu__list},t.map(function(e){return r.a.createElement("li",{className:g.a["menu__list-item"],key:e.path},r.a.createElement(c.Link,{to:e.path,className:g.a["menu__list-item-link"],activeClassName:g.a["menu__list-item-link--active"]},e.label))})))},w=a(175),y=a.n(w),k=a(196),N=function(e){var t=e.isIndex,a=Object(k.a)(),n=a.author,c=a.copyright,u=a.menu;return r.a.createElement("div",{className:y.a.sidebar},r.a.createElement("div",{className:y.a.sidebar__inner},r.a.createElement(i,{author:n,isIndex:t}),r.a.createElement(_,{menu:u}),r.a.createElement(v,{contacts:n.contacts}),r.a.createElement(b,{copyright:c})))};a.d(t,"a",function(){return N})},211:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(176),u=a.n(c),o=function(e){var t=e.title,a=e.children,c=Object(n.useRef)();return Object(n.useEffect)(function(){c.current.scrollIntoView()}),r.a.createElement("div",{ref:c,className:u.a.page},r.a.createElement("div",{className:u.a.page__inner},t&&r.a.createElement("h1",{className:u.a.page__title},t),r.a.createElement("div",{className:u.a.page__body},a)))};a.d(t,"a",function(){return o})},212:function(e,t,a){var n=a(205).Symbol;e.exports=n},213:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},217:function(e,t,a){var n=a(260);e.exports=function(e){return null==e?"":n(e)}},218:function(e,t,a){var n=a(212),r=a(261),c=a(262),u="[object Null]",o="[object Undefined]",i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?o:u:i&&i in Object(e)?r(e):c(e)}},233:function(e,t,a){var n=a(218),r=a(213),c="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&n(e)==c}},242:function(e,t,a){var n=a(256),r=a(257),c=a(263),u=RegExp("['’]","g");e.exports=function(e){return function(t){return n(c(r(t).replace(u,"")),e,"")}}},243:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a(100))},244:function(e,t){e.exports=function(e,t){for(var a=-1,n=null==e?0:e.length,r=Array(n);++a<n;)r[a]=t(e[a],a,e);return r}},256:function(e,t){e.exports=function(e,t,a,n){var r=-1,c=null==e?0:e.length;for(n&&c&&(a=e[++r]);++r<c;)a=t(a,e[r],r,e);return a}},257:function(e,t,a){var n=a(258),r=a(217),c=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(c,n).replace(u,"")}},258:function(e,t,a){var n=a(259)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n",ſ:"s"});e.exports=n},259:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},260:function(e,t,a){var n=a(212),r=a(244),c=a(206),u=a(233),o=1/0,i=n?n.prototype:void 0,l=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(c(t))return r(t,e)+"";if(u(t))return l?l.call(t):"";var a=t+"";return"0"==a&&1/t==-o?"-0":a}},261:function(e,t,a){var n=a(212),r=Object.prototype,c=r.hasOwnProperty,u=r.toString,o=n?n.toStringTag:void 0;e.exports=function(e){var t=c.call(e,o),a=e[o];try{e[o]=void 0;var n=!0}catch(i){}var r=u.call(e);return n&&(t?e[o]=a:delete e[o]),r}},262:function(e,t){var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},263:function(e,t,a){var n=a(264),r=a(265),c=a(217),u=a(266);e.exports=function(e,t,a){return e=c(e),void 0===(t=a?void 0:t)?r(e)?u(e):n(e):e.match(t)||[]}},264:function(e,t){var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(a)||[]}},265:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},266:function(e,t){var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+a+"]",r="\\d+",c="[\\u2700-\\u27bf]",u="[a-z\\xdf-\\xf6\\xf8-\\xff]",o="[^\\ud800-\\udfff"+a+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+u+"|"+o+")",m="(?:"+s+"|"+o+")",d="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+d+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",i,l].join("|")+")[\\ufe0e\\ufe0f]?"+d+")*"),v="(?:"+[c,i,l].join("|")+")"+p,h=RegExp([s+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[n,s,"$"].join("|")+")",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[n,s+f,"$"].join("|")+")",s+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,v].join("|"),"g");e.exports=function(e){return e.match(h)||[]}},361:function(e,t,a){var n=a(242)(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()});e.exports=n}}]);
//# sourceMappingURL=component---src-templates-tags-list-template-js-249e92b6203223206944.js.map