(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9Jkg":function(t,e,n){t.exports=n("oh+g")},LR8j:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/components/DrawingCanvas",function(){return n("iUhj")}])},Nh6h:function(t,e,n){t.exports=function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){"use strict";function n(t,e,n,i){return function(t,e,n,i){return{red:i[4*(n*e+t)],green:i[4*(n*e+t)+1],blue:i[4*(n*e+t)+2],alpha:i[4*(n*e+t)+3]}}(t,e,n,i).alpha}function i(t,e,i,o){for(var r=t?1:-1,a=t?0:i-1;t?a<i:a>-1;a+=r)for(var s=0;s<e;s++)if(n(s,a,e,o))return a;return null}function o(t,e,i,o){for(var r=t?1:-1,a=t?0:e-1;t?a<e:a>-1;a+=r)for(var s=0;s<i;s++)if(n(a,s,e,o))return a;return null}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.getContext("2d"),n=t.width,r=t.height,a=e.getImageData(0,0,n,r).data,s=i(!0,n,r,a),u=i(!1,n,r,a),c=o(!0,n,r,a),h=o(!1,n,r,a)-c+1,l=u-s+1,d=e.getImageData(c,s,h,l);return t.width=h,t.height=l,e.clearRect(0,0,h,l),e.putImageData(d,0,0),t}}])},cCNl:function(t,e,n){"use strict";function i(t,e,n){this.x=t,this.y=e,this.time=n||(new Date).getTime()}function o(t,e,n,i){this.startPoint=t,this.control1=e,this.control2=n,this.endPoint=i}function r(t,e){var n=this,i=e||{};this.velocityFilterWeight=i.velocityFilterWeight||.7,this.minWidth=i.minWidth||.5,this.maxWidth=i.maxWidth||2.5,this.throttle="throttle"in i?i.throttle:16,this.minDistance="minDistance"in i?i.minDistance:5,this.throttle?this._strokeMoveUpdate=function(t,e,n){var i,o,r,a=null,s=0;n||(n={});var u=function(){s=!1===n.leading?0:Date.now(),a=null,r=t.apply(i,o),a||(i=o=null)};return function(){var c=Date.now();s||!1!==n.leading||(s=c);var h=e-(c-s);return i=this,o=arguments,h<=0||h>e?(a&&(clearTimeout(a),a=null),s=c,r=t.apply(i,o),a||(i=o=null)):a||!1===n.trailing||(a=setTimeout(u,h)),r}}(r.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=r.prototype._strokeUpdate,this.dotSize=i.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=i.penColor||"black",this.backgroundColor=i.backgroundColor||"rgba(0,0,0,0)",this.onBegin=i.onBegin,this.onEnd=i.onEnd,this._canvas=t,this._ctx=t.getContext("2d"),this.clear(),this._handleMouseDown=function(t){1===t.which&&(n._mouseButtonDown=!0,n._strokeBegin(t))},this._handleMouseMove=function(t){n._mouseButtonDown&&n._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(t))},this._handleTouchStart=function(t){if(1===t.targetTouches.length){var e=t.changedTouches[0];n._strokeBegin(e)}},this._handleTouchMove=function(t){t.preventDefault();var e=t.targetTouches[0];n._strokeMoveUpdate(e)},this._handleTouchEnd=function(t){t.target===n._canvas&&(t.preventDefault(),n._strokeEnd(t))},this.on()}n.r(e),i.prototype.velocityFrom=function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):1},i.prototype.distanceTo=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},i.prototype.equals=function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time},o.prototype.length=function(){for(var t=0,e=void 0,n=void 0,i=0;i<=10;i+=1){var o=i/10,r=this._point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),a=this._point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var s=r-e,u=a-n;t+=Math.sqrt(s*s+u*u)}e=r,n=a}return t},o.prototype._point=function(t,e,n,i,o){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*i*(1-t)*t*t+o*t*t*t},r.prototype.clear=function(){var t=this._ctx,e=this._canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0},r.prototype.fromDataURL=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=new Image,o=n.ratio||window.devicePixelRatio||1,r=n.width||this._canvas.width/o,a=n.height||this._canvas.height/o;this._reset(),i.src=t,i.onload=function(){e._ctx.drawImage(i,0,0,r,a)},this._isEmpty=!1},r.prototype.toDataURL=function(t){var e;switch(t){case"image/svg+xml":return this._toSVG();default:for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return(e=this._canvas).toDataURL.apply(e,[t].concat(i))}},r.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()},r.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)},r.prototype.isEmpty=function(){return this._isEmpty},r.prototype._strokeBegin=function(t){this._data.push([]),this._reset(),this._strokeUpdate(t),"function"===typeof this.onBegin&&this.onBegin(t)},r.prototype._strokeUpdate=function(t){var e=t.clientX,n=t.clientY,i=this._createPoint(e,n),o=this._data[this._data.length-1],r=o&&o[o.length-1],a=r&&i.distanceTo(r)<this.minDistance;if(!r||!a){var s=this._addPoint(i),u=s.curve,c=s.widths;u&&c&&this._drawCurve(u,c.start,c.end),this._data[this._data.length-1].push({x:i.x,y:i.y,time:i.time,color:this.penColor})}},r.prototype._strokeEnd=function(t){var e=this.points.length>2,n=this.points[0];if(!e&&n&&this._drawDot(n),n){var i=this._data[this._data.length-1],o=i[i.length-1];n.equals(o)||i.push({x:n.x,y:n.y,time:n.time,color:this.penColor})}"function"===typeof this.onEnd&&this.onEnd(t)},r.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)},r.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)},r.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor},r.prototype._createPoint=function(t,e,n){var o=this._canvas.getBoundingClientRect();return new i(t-o.left,e-o.top,n||(new Date).getTime())},r.prototype._addPoint=function(t){var e=this.points;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);var n=this._calculateCurveControlPoints(e[0],e[1],e[2]).c2,i=this._calculateCurveControlPoints(e[1],e[2],e[3]).c1,r=new o(e[1],n,i,e[2]),a=this._calculateCurveWidths(r);return e.shift(),{curve:r,widths:a}}return{}},r.prototype._calculateCurveControlPoints=function(t,e,n){var o=t.x-e.x,r=t.y-e.y,a=e.x-n.x,s=e.y-n.y,u=(t.x+e.x)/2,c=(t.y+e.y)/2,h=(e.x+n.x)/2,l=(e.y+n.y)/2,d=Math.sqrt(o*o+r*r),f=Math.sqrt(a*a+s*s),p=f/(d+f),v=h+(u-h)*p,_=l+(c-l)*p,m=e.x-v,g=e.y-_;return{c1:new i(u+m,c+g),c2:new i(h+m,l+g)}},r.prototype._calculateCurveWidths=function(t){var e=t.startPoint,n=t.endPoint,i={start:null,end:null},o=this.velocityFilterWeight*n.velocityFrom(e)+(1-this.velocityFilterWeight)*this._lastVelocity,r=this._strokeWidth(o);return i.start=this._lastWidth,i.end=r,this._lastVelocity=o,this._lastWidth=r,i},r.prototype._strokeWidth=function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)},r.prototype._drawPoint=function(t,e,n){var i=this._ctx;i.moveTo(t,e),i.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1},r.prototype._drawCurve=function(t,e,n){var i=this._ctx,o=n-e,r=Math.floor(t.length());i.beginPath();for(var a=0;a<r;a+=1){var s=a/r,u=s*s,c=u*s,h=1-s,l=h*h,d=l*h,f=d*t.startPoint.x;f+=3*l*s*t.control1.x,f+=3*h*u*t.control2.x,f+=c*t.endPoint.x;var p=d*t.startPoint.y;p+=3*l*s*t.control1.y,p+=3*h*u*t.control2.y,p+=c*t.endPoint.y;var v=e+c*o;this._drawPoint(f,p,v)}i.closePath(),i.fill()},r.prototype._drawDot=function(t){var e=this._ctx,n="function"===typeof this.dotSize?this.dotSize():this.dotSize;e.beginPath(),this._drawPoint(t.x,t.y,n),e.closePath(),e.fill()},r.prototype._fromData=function(t,e,n){for(var o=0;o<t.length;o+=1){var r=t[o];if(r.length>1)for(var a=0;a<r.length;a+=1){var s=r[a],u=new i(s.x,s.y,s.time),c=s.color;if(0===a)this.penColor=c,this._reset(),this._addPoint(u);else if(a!==r.length-1){var h=this._addPoint(u),l=h.curve,d=h.widths;l&&d&&e(l,d,c)}}else this._reset(),n(r[0])}},r.prototype._toSVG=function(){var t=this,e=this._data,n=this._canvas,i=Math.max(window.devicePixelRatio||1,1),o=n.width/i,r=n.height/i,a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttributeNS(null,"width",n.width),a.setAttributeNS(null,"height",n.height),this._fromData(e,(function(t,e,n){var i=document.createElement("path");if(!isNaN(t.control1.x)&&!isNaN(t.control1.y)&&!isNaN(t.control2.x)&&!isNaN(t.control2.y)){var o="M "+t.startPoint.x.toFixed(3)+","+t.startPoint.y.toFixed(3)+" C "+t.control1.x.toFixed(3)+","+t.control1.y.toFixed(3)+" "+t.control2.x.toFixed(3)+","+t.control2.y.toFixed(3)+" "+t.endPoint.x.toFixed(3)+","+t.endPoint.y.toFixed(3);i.setAttribute("d",o),i.setAttribute("stroke-width",(2.25*e.end).toFixed(3)),i.setAttribute("stroke",n),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),a.appendChild(i)}}),(function(e){var n=document.createElement("circle"),i="function"===typeof t.dotSize?t.dotSize():t.dotSize;n.setAttribute("r",i),n.setAttribute("cx",e.x),n.setAttribute("cy",e.y),n.setAttribute("fill",e.color),a.appendChild(n)}));var s='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+o+" "+r+'" width="'+o+'" height="'+r+'">',u=a.innerHTML;if(void 0===u){var c=document.createElement("dummy"),h=a.childNodes;c.innerHTML="";for(var l=0;l<h.length;l+=1)c.appendChild(h[l].cloneNode(!0));u=c.innerHTML}return"data:image/svg+xml;base64,"+btoa(s+u+"</svg>")},r.prototype.fromData=function(t){var e=this;this.clear(),this._fromData(t,(function(t,n){return e._drawCurve(t,n.start,n.end)}),(function(t){return e._drawDot(t)})),this._data=t},r.prototype.toData=function(){return this._data},e.default=r},iUhj:function(t,e,n){"use strict";n.r(e);var i=n("p0XB"),o=n.n(i);var r=n("d04V"),a=n.n(r),s=n("yLu3"),u=n.n(s);function c(t){return function(t){if(o()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return a()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=n("9Jkg"),l=n.n(h),d=n("q1tI"),f=n.n(d),p=n("uMBS"),v=n.n(p);n.d(e,"default",(function(){return m}));var _=f.a.createElement;function m(){var t=Object(d.useRef)({}),e=Object(d.useState)(null),n=e[0],i=e[1],o=Object(d.useState)(null),r=o[0],a=o[1],s=Object(d.useState)(null),u=s[0],h=s[1],p=Object(d.useState)(null),m=p[0],g=p[1];Object(d.useEffect)((function(){return h(document.children[0].clientHeight)}),[document.children[0].clientHeight]),Object(d.useEffect)((function(){return g(document.children[0].clientWidth)}),[document.children[0].clientWidth]);var y=Math.min(u,m)/2,w=(y/30).toString(10),x=function(t){var e=new XMLHttpRequest;e.withCredentials=!1,e.addEventListener("load",(function(){if(e.responseText){var t=JSON.parse(e.responseText);b(t)}})),e.open("POST","/api/v1/models/digit_model:predict"),e.send(l()({instances:t}))},b=function(t){for(var e=t.predictions[0],n=Array(e.length),i=0;i<e.length;i++){var o=e.indexOf(Math.max.apply(Math,c(e))),r=(100*e[o]).toFixed(2);r>0&&(n[i]=[o,r],e[o]=0)}a(n)},P=function(t){var e=document.createElement("canvas"),n=Math.min(20/t.width,20/t.height);e.width=28,e.height=28;var i=e.getContext("2d");i.imageSmoothingEnabled=!0;var o=t.width*n,r=t.height*n,a=(28-o)/2,s=(28-r)/2;i.drawImage(t,a,s,o,r);var u=Array(28),c=0,h=0,l=Array(28),d=i.getImageData(0,0,e.width,e.height);for(p=0;p<d.data.length;p+=4)c>=28&&(c=0,u[h]=l,l=Array(28),h++),d.data[p+3]>0?(d.data[p]=255,d.data[p+1]=255,d.data[p+2]=255,l[c]=1):(d.data[p]=0,d.data[p+1]=0,d.data[p+2]=0,l[c]=0),d.data[p+3]=255,c++;for(var f=Array(28),p=0;p<f.length;p++)f[p]=0;return u[27]=f,i.putImageData(d,0,0),[e,u]};return _("div",null,_(v.a,{ref:t,penColor:"black",velocityFilterWeight:"0",maxWidth:w,dotSize:"0",canvasProps:{width:y,height:y,className:"signatureCanvas"}}),_("div",{className:"button-wrapper"},_("button",{className:"button",onClick:function(){t.current.clear(),i(null),a(null)}},"clear"),_("button",{className:"button",onClick:function(){var e=t.current.getTrimmedCanvas(),n=P(e);x(n[1]),i(n[0].toDataURL("image/png"))}},"submit")),r?_(f.a.Fragment,null,_("a",null,"Your result: "),_("a",null,function(t){return _("div",null,t.map((function(t,e){return _("p",{key:e},"Number: ",t[0]," ",_("br",null),"Confidence: ",t[1],"%")})))}(r))):null,n?_(f.a.Fragment,null,_("a",null,"Processed Digit"),_("img",{src:n,alt:"my signature",style:{display:"block",margin:"0 auto",border:"1px solid black",width:"150px"}})):null)}},"oh+g":function(t,e,n){var i=n("WEpk"),o=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},uMBS:function(t,e,n){var i,o,r,a;t.exports=(i=n("17x9"),o=n("q1tI"),r=n("cCNl"),a=n("Nh6h"),function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=i(n(1)),u=n(2),c=i(u),h=i(n(3)),l=i(n(4)),d=function(t){function e(){var t,n,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),i._sigPad=null,i._excludeOurProps=function(){var t=i.props;return t.canvasProps,t.clearOnResize,function(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}(t,["canvasProps","clearOnResize"])},i.getCanvas=function(){return i._canvas},i.getTrimmedCanvas=function(){var t=document.createElement("canvas");return t.width=i._canvas.width,t.height=i._canvas.height,t.getContext("2d").drawImage(i._canvas,0,0),(0,l.default)(t)},i.getSignaturePad=function(){return i._sigPad},i._checkClearOnResize=function(){i.props.clearOnResize&&i._resizeCanvas()},i._resizeCanvas=function(){var t=i.props.canvasProps||{},e=t.width,n=t.height;if(!e||!n){var o=i._canvas,r=Math.max(window.devicePixelRatio||1,1);e||(o.width=o.offsetWidth*r),n||(o.height=o.offsetHeight*r),o.getContext("2d").scale(r,r),i.clear()}},i.on=function(){return window.addEventListener("resize",i._checkClearOnResize),i._sigPad.on()},i.off=function(){return window.removeEventListener("resize",i._checkClearOnResize),i._sigPad.off()},i.clear=function(){return i._sigPad.clear()},i.isEmpty=function(){return i._sigPad.isEmpty()},i.fromDataURL=function(t,e){return i._sigPad.fromDataURL(t,e)},i.toDataURL=function(t,e){return i._sigPad.toDataURL(t,e)},i.fromData=function(t){return i._sigPad.fromData(t)},i.toData=function(){return i._sigPad.toData()},o(i,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentDidMount",value:function(){this._sigPad=new h.default(this._canvas,this._excludeOurProps()),this._resizeCanvas(),this.on()}},{key:"componentWillUnmount",value:function(){this.off()}},{key:"componentDidUpdate",value:function(){Object.assign(this._sigPad,this._excludeOurProps())}},{key:"render",value:function(){var t=this,e=this.props.canvasProps;return c.default.createElement("canvas",r({ref:function(e){t._canvas=e}},e))}}]),e}(u.Component);d.propTypes={velocityFilterWeight:s.default.number,minWidth:s.default.number,maxWidth:s.default.number,minDistance:s.default.number,dotSize:s.default.oneOfType([s.default.number,s.default.func]),penColor:s.default.string,throttle:s.default.number,onEnd:s.default.func,onBegin:s.default.func,canvasProps:s.default.object,clearOnResize:s.default.bool},d.defaultProps={clearOnResize:!0},e.default=d},function(t,e){t.exports=i},function(t,e){t.exports=o},function(t,e){t.exports=r},function(t,e){t.exports=a}]))}},[["LR8j",0,1]]]);