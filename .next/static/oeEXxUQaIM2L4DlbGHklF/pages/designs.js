(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var i=a(n("q1tI")),o=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery;return n||a&&(void 0!==i&&i)}t.isInAmpMode=s,t.useAmp=function(){return s(i.default.useContext(o.AmpStateContext))}},"/h46":function(e,t,n){n("cHUd")("Map")},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"4mXO":function(e,t,n){e.exports=n("7TPF")},"5Yp1":function(e,t,n){"use strict";var r=n("MX0m"),a=n.n(r),i=n("q1tI"),o=n.n(i),s=n("8Kt/"),c=n.n(s),u=n("4mXO"),l=n.n(u),f=n("pLtp"),p=n.n(f);function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=p()(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(l.a){var i=l()(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v=n("nOHt"),h=n("YFqc"),m=n.n(h),y=o.a.createElement,w=Object(v.withRouter)((function(e){var t=e.router,n=e.children,r=d(e,["router","children"]),a=i.Children.only(n),s=a.props.className||null;return t.pathname===r.href&&r.activeClassName&&(s="".concat(null!==s?s:""," ").concat(r.activeClassName).trim()),delete r.activeClassName,y(m.a,r,o.a.cloneElement(a,{className:s}))})),g=o.a.createElement;function b(){Object(v.useRouter)();return g("div",{className:"jsx-4227216714"},g(w,{href:"/",activeClassName:"active"},g("a",{className:"jsx-4227216714"},"About")),g(w,{href:"/projects",activeClassName:"active"},g("a",{className:"jsx-4227216714"},"Projects")),g(w,{href:"/designs",activeClassName:"active"},g("a",{className:"jsx-4227216714"},"Designs")),g(w,{href:"/contact",activeClassName:"active"},g("a",{className:"jsx-4227216714"},"Contact")),g(a.a,{id:"4227216714"},[".jsx-4227216714{padding:2vw;}",".active.jsx-4227216714{font-weight:bold;}","a.jsx-4227216714{-webkit-text-decoration:none;text-decoration:none;color:#3B3A3A;}","a.jsx-4227216714:active{font-weight:bold;}","a.jsx-4227216714:hover{opacity:0.6;}"]))}n.d(t,"a",(function(){return j}));var x=o.a.createElement;function j(e){return x("div",{className:"jsx-3332807636"},x(c.a,null,x("title",{className:"jsx-3332807636"},e.page_title),x("link",{rel:"shortcut icon",href:"../static/favicon.ico",className:"jsx-3332807636"}),x("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width",className:"jsx-3332807636"})),x("div",{className:"jsx-3332807636"},x(b,null),e.children),x("link",{href:"https://fonts.googleapis.com/css?family=Roboto:100,400,700&display=swap",rel:"stylesheet",className:"jsx-3332807636"}),x(a.a,{id:"3332807636"},[".jsx-3332807636{font-family:'Roboto',sans-serif;}"]))}},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),a=n("hfKm"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};a(t,"__esModule",{value:!0});var o=i(n("q1tI")),s=i(n("Xuae")),c=n("lwAK"),u=n("FYa8"),l=n("/0+H");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=f;var d=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,a={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var l=d[c];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=i.props[l],p=a[l]||new r;p.has(f)?o=!1:(p.add(f),a[l]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var h=s.default();function m(e){var t=e.children;return o.default.createElement(c.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}m.rewind=h.rewind,t.default=m},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),a=n("n3ko");e.exports=n("raTm")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return r.def(a(this,"Set"),e=0===e?0:e,e)}},r)},D35q:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("q1tI"),a=n.n(r),i=n("5Yp1"),o=n("W9HR"),s=n("aEIS"),c=a.a.createElement;function u(){return c(i.a,{page_title:"Designs By Kiet"},c(o.a,null,"Designs"),c(s.a,{title:c("a",null,c("b",null,"More")," To Come")}))}},K60m:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/designs",function(){return n("D35q")}])},LX0d:function(e,t,n){e.exports=n("UDep")},PQJW:function(e,t,n){var r=n("d04V"),a=n("yLu3");e.exports=function(e){if(a(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},TbGu:function(e,t,n){var r=n("fGSI"),a=n("PQJW"),i=n("2PDY");e.exports=function(e){return r(e)||a(e)||i()}},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},"V+O7":function(e,t,n){n("aPfg")("Set")},W9HR:function(e,t,n){"use strict";var r=n("MX0m"),a=n.n(r),i=n("q1tI"),o=n.n(i).a.createElement;t.a=function(e){return o("div",{className:"jsx-2001696992"},o("a",{className:"jsx-2001696992"},e.children),o(a.a,{id:"2001696992"},[".jsx-2001696992{height:75vh;padding-bottom:25vh;}","a.jsx-2001696992{font-weight :lighter;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:30px;font-size:12vw;color:#3B3A3A;}"]))}},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},Xuae:function(e,t,n){"use strict";var r=n("/HRN"),a=n("ZDA2"),i=n("/+P4"),o=n("K47E"),s=n("WaGi"),c=n("N9n2"),u=n("TbGu"),l=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var f=n("q1tI"),p=!1;t.default=function(){var e,t=new l;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(u){function l(e){var s;return r(this,l),s=a(this,i(l).call(this,e)),p&&(t.add(o(s)),n(o(s))),s}return c(l,u),s(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),s(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},aEIS:function(e,t,n){"use strict";var r=n("MX0m"),a=n.n(r),i=n("q1tI"),o=n.n(i),s=n("p0XB"),c=n.n(s);var u=n("XXOK"),l=n.n(u),f=n("yLu3"),p=n.n(f);function d(e,t){return function(e){if(c()(e))return e}(e)||function(e,t){if(p()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=l()(e);!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=o.a.createElement;var h=function(e){var t=d(o.a.useState(!0),2),n=t[0],r=t[1],i=o.a.useRef();return o.a.useEffect((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){return r(e.isIntersecting)}))}));return e.observe(i.current),function(){return e.unobserve(i.current)}}),[]),v("div",{ref:i,className:"jsx-3881756070 "+"fade-in-section ".concat(n?"is-visible":"")},e.children,v(a.a,{id:"3881756070"},[".fade-in-section.jsx-3881756070{opacity:0;-webkit-transform:translateY(20vh);-ms-transform:translateY(20vh);transform:translateY(20vh);visibility:hidden;-webkit-transition:opacity 1200ms ease-out,-webkit-transform 600ms ease-out, visibility 1200ms ease-out;-webkit-transition:opacity 1200ms ease-out,transform 600ms ease-out, visibility 1200ms ease-out;transition:opacity 1200ms ease-out,transform 600ms ease-out, visibility 1200ms ease-out;will-change:opacity,transform,visibility;}",".fade-in-section.is-visible.jsx-3881756070{opacity:1;-webkit-transform:none;-ms-transform:none;transform:none;visibility:visible;}"]))},m=o.a.createElement;t.a=function(e){return m(h,null,m("div",{className:"jsx-3372015106 wrapper"},m("div",{className:"jsx-3372015106 title"},e.title),m("div",{className:"jsx-3372015106 content"},e.children),m(a.a,{id:"3372015106"},[".wrapper.jsx-3372015106{min-height:100vh;height:auto;font-weight :lighter;font-size:30px;font-size:4vh;padding-left:2vw;}",".title.jsx-3372015106{font-weight :lighter;font-size:30px;font-size:4vh;padding-left:2vw;}"])))}},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),a=n("WaGi"),i=n("ZDA2"),o=n("/+P4"),s=n("N9n2"),c=n("5Uuq"),u=n("KI45");t.__esModule=!0,t.default=void 0;var l,f=u(n("LX0d")),p=n("QmWs"),d=c(n("q1tI")),v=(u(n("17x9")),u(n("nOHt"))),h=(n("P5f7"),n("g/15"));function m(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var y=new f.default,w=window.IntersectionObserver;function g(){return l||(w?l=new w((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var b=function(e){function t(e){var n;return r(this,t),(n=i(this,o(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(a,i){if(r&&a===t&&i===n)return r;var o=e(a,i);return t=a,n=i,r=o,o}}((function(e,t){return{href:m(e),as:t?m(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,a=t.target;if("A"!==r||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),o=i.href,s=i.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var c=window.location.pathname;o=(0,p.resolve)(c,o),s=s?(0,p.resolve)(c,s):o,e.preventDefault();var u=n.props.scroll;null==u&&(u=s.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](o,s,{shallow:n.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return s(t,e),a(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(e,t)}},{key:"handleRef",value:function(e){var t=this,n=v.default.router.pageLoader.prefetched[this.getHref()];this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=g();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(){this.p&&v.default.prefetch(this.getHref())}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var i=d.Children.only(t),o={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=a||r),d.default.cloneElement(i,o)}}]),t}(d.Component);b.propTypes=void 0;var x=b;t.default=x},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},dVTT:function(e,t,n){n("aPfg")("Map")},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),a=n("n3ko");e.exports=n("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=r.getEntry(a(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(a(this,"Map"),0===e?0:e,t)}},r,!0)},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var i=a(n("q1tI"));t.AmpStateContext=i.createContext({})},ttDY:function(e,t,n){e.exports=n("+iuc")},xvv9:function(e,t,n){n("cHUd")("Set")}},[["K60m",0,1]]]);