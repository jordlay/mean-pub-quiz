(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+SGJ":
/*!******************************************!*\
  !*** ./src/vendor/jitsi/external_api.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/libs/",n(n.s=5)}([function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return p}));var i=n(4);const r=n.n(i).a.getLogger(e);function s(e){return e.sendRequest({type:"devices",name:"getAvailableDevices"}).catch(e=>(r.error(e),{}))}function o(e){return e.sendRequest({type:"devices",name:"getCurrentDevices"}).catch(e=>(r.error(e),{}))}function a(e,t){return e.sendRequest({deviceType:t,type:"devices",name:"isDeviceChangeAvailable"})}function c(e){return e.sendRequest({type:"devices",name:"isDeviceListAvailable"})}function l(e){return e.sendRequest({type:"devices",name:"isMultipleAudioInputSupported"})}function u(e,t,n){return d(e,{id:n,kind:"audioinput",label:t})}function h(e,t,n){return d(e,{id:n,kind:"audiooutput",label:t})}function d(e,t){return e.sendRequest({type:"devices",name:"setDevice",device:t})}function p(e,t,n){return d(e,{id:n,kind:"videoinput",label:t})}}).call(this,"modules/API/external/functions.js")},function(e,t,n){"use strict";var i,r="object"==typeof Reflect?Reflect:null,s=r&&"function"==typeof r.apply?r.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};i=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}e.exports=a,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var c=10;function l(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function u(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function h(e,t,n,i){var r,s,o,a;if(l(n),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),o=s[t]),void 0===o)o=s[t]=n,++e._eventsCount;else if("function"==typeof o?o=s[t]=i?[n,o]:[o,n]:i?o.unshift(n):o.push(n),(r=u(e))>0&&o.length>r&&!o.warned){o.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=o.length,a=c,console&&console.warn&&console.warn(a)}return e}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=d.bind(i);return r.listener=n,i.wrapFn=r,r}function f(e,t,n){var i=e._events;if(void 0===i)return[];var r=i[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):m(r,r.length)}function g(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function m(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");c=e}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return u(this)},a.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,r=this._events;if(void 0!==r)i=i&&void 0===r.error;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var c=r[e];if(void 0===c)return!1;if("function"==typeof c)s(c,this,t);else{var l=c.length,u=m(c,l);for(n=0;n<l;++n)s(u[n],this,t)}return!0},a.prototype.addListener=function(e,t){return h(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return h(this,e,t,!0)},a.prototype.once=function(e,t){return l(t),this.on(e,p(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,p(this,e,t)),this},a.prototype.removeListener=function(e,t){var n,i,r,s,o;if(l(t),void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){o=n[s].listener,r=s;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,o||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,s=Object.keys(n);for(i=0;i<s.length;++i)"removeListener"!==(r=s[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},a.prototype.listeners=function(e){return f(this,e,!0)},a.prototype.rawListeners=function(e){return f(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):g.call(e,t)},a.prototype.listenerCount=g,a.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]}},function(e,t){var n={trace:0,debug:1,info:2,log:3,warn:4,error:5};a.consoleTransport=console;var i=[a.consoleTransport];a.addGlobalTransport=function(e){-1===i.indexOf(e)&&i.push(e)},a.removeGlobalTransport=function(e){var t=i.indexOf(e);-1!==t&&i.splice(t,1)};var r={};function s(){var e={methodName:"",fileLocation:"",line:null,column:null},t=new Error,n=t.stack?t.stack.split("\n"):[];if(!n||n.length<3)return e;var i=null;return n[3]&&(i=n[3].match(/\s*at\s*(.+?)\s*\((\S*)\s*:(\d*)\s*:(\d*)\)/)),!i||i.length<=4?(0===n[2].indexOf("log@")?e.methodName=n[3].substr(0,n[3].indexOf("@")):e.methodName=n[2].substr(0,n[2].indexOf("@")),e):(e.methodName=i[1],e.fileLocation=i[2],e.line=i[3],e.column=i[4],e)}function o(){var e=arguments[0],t=arguments[1],o=Array.prototype.slice.call(arguments,2);if(!(n[t]<e.level))for(var a=!(e.options.disableCallerInfo||r.disableCallerInfo)&&s(),c=i.concat(e.transports),l=0;l<c.length;l++){var u=c[l],h=u[t];if(h&&"function"==typeof h){var d=[];d.push((new Date).toISOString()),e.id&&d.push("["+e.id+"]"),a&&a.methodName.length>1&&d.push("<"+a.methodName+">: ");var p=d.concat(o);h.bind(u).apply(u,p)}}}function a(e,t,i,r){this.id=t,this.options=r||{},this.transports=i,this.transports||(this.transports=[]),this.level=n[e];for(var s=Object.keys(n),a=0;a<s.length;a++)this[s[a]]=o.bind(null,this,s[a])}a.setGlobalOptions=function(e){r=e||{}},a.prototype.setLevel=function(e){this.level=n[e]},e.exports=a,a.levels={TRACE:"trace",DEBUG:"debug",INFO:"info",LOG:"log",WARN:"warn",ERROR:"error"}},function(e,t){e.exports=function(e){var t,n=e.scope,i=e.window,r=e.windowForEventListening||window,s=e.allowedOrigin,o={},a=[],c={},l=!1,u=function(e){var t;try{t=JSON.parse(e.data)}catch(e){return}if((!s||e.origin===s)&&t.postis&&t.scope===n){var i=o[t.method];if(i)for(var r=0;r<i.length;r++)i[r].call(null,t.params);else c[t.method]=c[t.method]||[],c[t.method].push(t.params)}};r.addEventListener("message",u,!1);var h={listen:function(e,t){o[e]=o[e]||[],o[e].push(t);var n=c[e];if(n)for(var i=o[e],r=0;r<i.length;r++)for(var s=0;s<n.length;s++)i[r].call(null,n[s]);delete c[e]},send:function(e){var t=e.method;(l||"__ready__"===e.method)&&i&&"function"==typeof i.postMessage?i.postMessage(JSON.stringify({postis:!0,scope:n,method:t,params:e.params}),"*"):a.push(e)},ready:function(e){l?e():setTimeout((function(){h.ready(e)}),50)},destroy:function(e){clearInterval(t),l=!1,r&&"function"==typeof r.removeEventListener&&r.removeEventListener("message",u),e&&e()}},d=+new Date+Math.random()+"";return t=setInterval((function(){h.send({method:"__ready__",params:d})}),50),h.listen("__ready__",(function(e){if(e===d){clearInterval(t),l=!0;for(var n=0;n<a.length;n++)h.send(a[n]);a=[]}else h.send({method:"__ready__",params:e})})),h}},function(e,t,n){var i=n(2),r=n(6),s={},o=[],a=i.levels.TRACE;e.exports={addGlobalTransport:function(e){i.addGlobalTransport(e)},removeGlobalTransport:function(e){i.removeGlobalTransport(e)},setGlobalOptions:function(e){i.setGlobalOptions(e)},getLogger:function(e,t,n){var r=new i(a,e,t,n);return e?(s[e]=s[e]||[],s[e].push(r)):o.push(r),r},setLogLevelById:function(e,t){for(var n=t?s[t]||[]:o,i=0;i<n.length;i++)n[i].setLevel(e)},setLogLevel:function(e){a=e;for(var t=0;t<o.length;t++)o[t].setLevel(e);for(var n in s){var i=s[n]||[];for(t=0;t<i.length;t++)i[t].setLevel(e)}},levels:i.levels,LogCollector:r}},function(e,t,n){e.exports=n(7).default},function(e,t,n){var i=n(2);function r(e,t){this.logStorage=e,this.stringifyObjects=!(!t||!t.stringifyObjects)&&t.stringifyObjects,this.storeInterval=t&&t.storeInterval?t.storeInterval:3e4,this.maxEntryLength=t&&t.maxEntryLength?t.maxEntryLength:1e4,Object.keys(i.levels).forEach(function(e){this[i.levels[e]]=function(){this._log.apply(this,arguments)}.bind(this,e)}.bind(this)),this.storeLogsIntervalID=null,this.queue=[],this.totalLen=0,this.outputCache=[]}r.prototype.stringify=function(e){try{return JSON.stringify(e)}catch(e){return"[object with circular refs?]"}},r.prototype.formatLogMessage=function(e){for(var t="",n=1,r=arguments.length;n<r;n++){var s=arguments[n];!this.stringifyObjects&&e!==i.levels.ERROR||"object"!=typeof s||(s=this.stringify(s)),t+=s,n!==r-1&&(t+=" ")}return t.length?t:null},r.prototype._log=function(){var e=arguments[1],t=this.formatLogMessage.apply(this,arguments);if(t){var n=this.queue[this.queue.length-1],i=n&&n.text;i===t?n.count+=1:(this.queue.push({text:t,timestamp:e,count:1}),this.totalLen+=t.length)}this.totalLen>=this.maxEntryLength&&this._flush(!0,!0)},r.prototype.start=function(){this._reschedulePublishInterval()},r.prototype._reschedulePublishInterval=function(){this.storeLogsIntervalID&&(window.clearTimeout(this.storeLogsIntervalID),this.storeLogsIntervalID=null),this.storeLogsIntervalID=window.setTimeout(this._flush.bind(this,!1,!0),this.storeInterval)},r.prototype.flush=function(){this._flush(!1,!0)},r.prototype._flush=function(e,t){this.totalLen>0&&(this.logStorage.isReady()||e)&&(this.logStorage.isReady()?(this.outputCache.length&&(this.outputCache.forEach(function(e){this.logStorage.storeLogs(e)}.bind(this)),this.outputCache=[]),this.logStorage.storeLogs(this.queue)):this.outputCache.push(this.queue),this.queue=[],this.totalLen=0),t&&this._reschedulePublishInterval()},r.prototype.stop=function(){this._flush(!1,!1)},e.exports=r},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var i=n(1),r=n.n(i);class s extends r.a{constructor(...e){var t,n,i;super(...e),i={},(n="_storage")in(t=this)?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}clear(){this._storage={}}get length(){return Object.keys(this._storage).length}getItem(e){return this._storage[e]}setItem(e,t){this._storage[e]=t}removeItem(e){delete this._storage[e]}key(e){const t=Object.keys(this._storage);if(!(t.length<=e))return t[e]}serialize(){return JSON.stringify(this._storage)}}class o extends r.a{constructor(){super();try{this._storage=window.localStorage,this._localStorageDisabled=!1}catch(e){}this._storage||(console.warn("Local storage is disabled."),this._storage=new s,this._localStorageDisabled=!0)}isLocalStorageDisabled(){return this._localStorageDisabled}clear(){this._storage.clear(),this.emit("changed")}get length(){return this._storage.length}getItem(e){return this._storage.getItem(e)}setItem(e,t,n=!1){this._storage.setItem(e,t),n||this.emit("changed")}removeItem(e){this._storage.removeItem(e),this.emit("changed")}key(e){return this._storage.key(e)}serialize(){if(this.isLocalStorageDisabled())return this._storage.serialize();const e=this._storage.length,t={};for(let n=0;n<e;n++){const e=this._storage.key(n);t[e]=this._storage.getItem(e)}return JSON.stringify(t)}}const a=new o;function c(e,t=!1,n="hash"){const i="search"===n?e.search:e.hash,r={},s=i&&i.substr(1).split("&")||[];if("hash"===n&&1===s.length){const e=s[0];if(e.startsWith("/")&&1===e.split("&").length)return r}return s.forEach(e=>{const n=e.split("="),i=n[0];if(!i)return;let s;try{if(s=n[1],!t){const e=decodeURIComponent(s).replace(/\\&/,"&");s="undefined"===e?void 0:JSON.parse(e)}}catch(e){return void function(e,t=""){console.error(t,e),window.onerror&&window.onerror(t,null,null,null,e)}(e,"Failed to parse URL parameter value: "+String(s))}r[i]=s}),r}function l(e){const t=new RegExp("^([a-z][a-z0-9\\.\\+-]*:)+","gi"),n=t.exec(e);if(n){let i=n[n.length-1].toLowerCase();"http:"!==i&&"https:"!==i&&(i="https:"),(e=e.substring(t.lastIndex)).startsWith("//")&&(e=i+e)}return e}function u(e={}){const t=[];for(const n in e)try{t.push(`${n}=${encodeURIComponent(JSON.stringify(e[n]))}`)}catch(e){console.warn(`Error encoding ${n}: ${e}`)}return t}function h(e){const t={toString:d};let n,i,r;if(e=e.replace(/\s/g,""),n=new RegExp("^([a-z][a-z0-9\\.\\+-]*:)","gi"),i=n.exec(e),i&&(t.protocol=i[1].toLowerCase(),e=e.substring(n.lastIndex)),n=new RegExp("^(//[^/?#]+)","gi"),i=n.exec(e),i){let r=i[1].substring(2);e=e.substring(n.lastIndex);const s=r.indexOf("@");-1!==s&&(r=r.substring(s+1)),t.host=r;const o=r.lastIndexOf(":");-1!==o&&(t.port=r.substring(o+1),r=r.substring(0,o)),t.hostname=r}if(n=new RegExp("^([^?#]*)","gi"),i=n.exec(e),i&&(r=i[1],e=e.substring(n.lastIndex)),r?r.startsWith("/")||(r="/"+r):r="/",t.pathname=r,e.startsWith("?")){let n=e.indexOf("#",1);-1===n&&(n=e.length),t.search=e.substring(0,n),e=e.substring(n)}else t.search="";return t.hash=e.startsWith("#")?e:"",t}function d(e){const{hash:t,host:n,pathname:i,protocol:r,search:s}=e||this;let o="";return r&&(o+=r),n&&(o+="//"+n),o+=i||"/",s&&(o+=s),t&&(o+=t),o}function p(e){let t;t=e.serverURL&&e.room?new URL(e.room,e.serverURL).toString():e.room?e.room:e.url||"";const n=h(l(t));if(!n.protocol){let t=e.protocol||e.scheme;t&&(t.endsWith(":")||(t+=":"),n.protocol=t)}let{pathname:i}=n;if(!n.host){const t=e.domain||e.host||e.hostname;if(t){const{host:e,hostname:r,pathname:s,port:o}=h(l("org.jitsi.meet://"+t));e&&(n.host=e,n.hostname=r,n.port=o),"/"===i&&"/"!==s&&(i=s)}}const r=e.roomName||e.room;!r||!n.pathname.endsWith("/")&&n.pathname.endsWith("/"+r)||(i.endsWith("/")||(i+="/"),i+=r),n.pathname=i;const{jwt:s}=e;if(s){let{search:e}=n;-1===e.indexOf("?jwt=")&&-1===e.indexOf("&jwt=")&&(e.startsWith("?")||(e="?"+e),1===e.length||(e+="&"),e+="jwt="+s,n.search=e)}let{hash:o}=n;for(const t of["config","interfaceConfig","devices","userInfo","appData"]){const n=u(e[t+"Overwrite"]||e[t]||e[t+"Override"]);if(n.length){let e=`${t}.${n.join(`&${t}.`)}`;o.length?e="&"+e:o="#",o+=e}}return n.hash=o,n.toString()||void 0}var f=n(3),g=n.n(f);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const v={window:window.opener||window.parent};class y{constructor({postisOptions:e}={}){this.postis=g()(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){m(e,t,n[t])}))}return e}({},v,e)),this._receiveCallback=()=>{},this.postis.listen("message",e=>this._receiveCallback(e))}dispose(){this.postis.destroy()}send(e){this.postis.send({method:"message",params:e})}setReceiveCallback(e){this._receiveCallback=e}}class _{constructor({backend:e}={}){this._listeners=new Map,this._requestID=0,this._responseHandlers=new Map,this._unprocessedMessages=new Set,this.addListener=this.on,e&&this.setBackend(e)}_disposeBackend(){this._backend&&(this._backend.dispose(),this._backend=null)}_onMessageReceived(e){if("response"===e.type){const t=this._responseHandlers.get(e.id);t&&(t(e),this._responseHandlers.delete(e.id))}else"request"===e.type?this.emit("request",e.data,(t,n)=>{this._backend.send({type:"response",error:n,id:e.id,result:t})}):this.emit("event",e.data)}dispose(){this._responseHandlers.clear(),this._unprocessedMessages.clear(),this.removeAllListeners(),this._disposeBackend()}emit(e,...t){const n=this._listeners.get(e);let i=!1;return n&&n.size&&n.forEach(e=>{i=e(...t)||i}),i||this._unprocessedMessages.add(t),i}on(e,t){let n=this._listeners.get(e);return n||(n=new Set,this._listeners.set(e,n)),n.add(t),this._unprocessedMessages.forEach(e=>{t(...e)&&this._unprocessedMessages.delete(e)}),this}removeAllListeners(e){return e?this._listeners.delete(e):this._listeners.clear(),this}removeListener(e,t){const n=this._listeners.get(e);return n&&n.delete(t),this}sendEvent(e={}){this._backend&&this._backend.send({type:"event",data:e})}sendRequest(e){if(!this._backend)return Promise.reject(new Error("No transport backend defined!"));this._requestID++;const t=this._requestID;return new Promise((n,i)=>{this._responseHandlers.set(t,({error:e,result:t})=>{void 0!==t?n(t):i(void 0!==e?e:new Error("Unexpected response format!"))}),this._backend.send({type:"request",data:e,id:t})})}setBackend(e){this._disposeBackend(),this._backend=e,this._backend.setReceiveCallback(this._onMessageReceived.bind(this))}}const b=c(window.location).jitsi_meet_external_api_id,w={};let L;"number"==typeof b&&(w.scope="jitsi_meet_external_api_"+b),(window.JitsiMeetJS||(window.JitsiMeetJS={}),window.JitsiMeetJS.app||(window.JitsiMeetJS.app={}),window.JitsiMeetJS.app).setExternalTransportBackend=e=>L.setBackend(e);var O=n(0);function x(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const C=["css/all.css","libs/alwaysontop.min.js"],E={avatarUrl:"avatar-url",cancelPrivateChat:"cancel-private-chat",displayName:"display-name",e2eeKey:"e2ee-key",email:"email",toggleLobby:"toggle-lobby",hangup:"video-hangup",intiatePrivateChat:"initiate-private-chat",muteEveryone:"mute-everyone",password:"password",pinParticipant:"pin-participant",resizeLargeVideo:"resize-large-video",sendEndpointTextMessage:"send-endpoint-text-message",sendTones:"send-tones",setLargeVideoParticipant:"set-large-video-participant",setVideoQuality:"set-video-quality",startRecording:"start-recording",stopRecording:"stop-recording",subject:"subject",submitFeedback:"submit-feedback",toggleAudio:"toggle-audio",toggleChat:"toggle-chat",toggleFilmStrip:"toggle-film-strip",toggleShareScreen:"toggle-share-screen",toggleTileView:"toggle-tile-view",toggleVideo:"toggle-video"},S={"avatar-changed":"avatarChanged","audio-availability-changed":"audioAvailabilityChanged","audio-mute-status-changed":"audioMuteStatusChanged","camera-error":"cameraError","chat-updated":"chatUpdated","content-sharing-participants-changed":"contentSharingParticipantsChanged","device-list-changed":"deviceListChanged","display-name-change":"displayNameChange","email-change":"emailChange","endpoint-text-message-received":"endpointTextMessageReceived","feedback-submitted":"feedbackSubmitted","feedback-prompt-displayed":"feedbackPromptDisplayed","filmstrip-display-changed":"filmstripDisplayChanged","incoming-message":"incomingMessage",log:"log","mic-error":"micError","outgoing-message":"outgoingMessage","participant-joined":"participantJoined","participant-kicked-out":"participantKickedOut","participant-left":"participantLeft","participant-role-changed":"participantRoleChanged","password-required":"passwordRequired","proxy-connection-event":"proxyConnectionEvent","raise-hand-updated":"raiseHandUpdated","video-ready-to-close":"readyToClose","video-conference-joined":"videoConferenceJoined","video-conference-left":"videoConferenceLeft","video-availability-changed":"videoAvailabilityChanged","video-mute-status-changed":"videoMuteStatusChanged","video-quality-changed":"videoQualityChanged","screen-sharing-status-changed":"screenSharingStatusChanged","dominant-speaker-changed":"dominantSpeakerChanged","subject-change":"subjectChange","suspend-detected":"suspendDetected","tile-view-changed":"tileViewChanged"};let I=0;function k(e,t){e._numberOfParticipants+=t}function R(e,t={}){return p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){j(e,t,n[t])}))}return e}({},t,{url:`https://${e}/#jitsi_meet_external_api_id=${I}`}))}function P(e){let t;return"string"==typeof e&&null!==String(e).match(/([0-9]*\.?[0-9]+)(em|pt|px|%)$/)?t=e:"number"==typeof e&&(t=e+"px"),t}class D extends r.a{constructor(e,...t){super();const{roomName:n="",width:i="100%",height:r="100%",parentNode:s=document.body,configOverwrite:o={},interfaceConfigOverwrite:c={},jwt:l,onload:u,invitees:h,devices:d,userInfo:p,e2eeKey:f}=function(e){if(!e.length)return{};switch(typeof e[0]){case"string":case void 0:{const[t,n,i,r,s,o,a,c]=e;return{roomName:t,width:n,height:i,parentNode:r,configOverwrite:s,interfaceConfigOverwrite:o,jwt:a,onload:c}}case"object":return e[0];default:throw new Error("Can't parse the arguments!")}}(t),g=a.getItem("jitsiLocalStorage");this._parentNode=s,this._url=R(e,{configOverwrite:o,interfaceConfigOverwrite:c,jwt:l,roomName:n,devices:d,userInfo:p,appData:{localStorageContent:g}}),this._createIFrame(r,i,u),this._transport=new _({backend:new y({postisOptions:{allowedOrigin:new URL(this._url).origin,scope:"jitsi_meet_external_api_"+I,window:this._frame.contentWindow}})}),Array.isArray(h)&&h.length>0&&this.invite(h),this._tmpE2EEKey=f,this._isLargeVideoVisible=!0,this._numberOfParticipants=0,this._participants={},this._myUserID=void 0,this._onStageParticipant=void 0,this._setupListeners(),I++}_createIFrame(e,t,n){const i="jitsiConferenceFrame"+I;this._frame=document.createElement("iframe"),this._frame.allow="camera; microphone; display-capture",this._frame.src=this._url,this._frame.name=i,this._frame.id=i,this._setSize(e,t),this._frame.setAttribute("allowFullScreen","true"),this._frame.style.border=0,n&&(this._frame.onload=n),this._frame=this._parentNode.appendChild(this._frame)}_getAlwaysOnTopResources(){const e=this._frame.contentWindow,t=e.document;let n="";const i=t.querySelector("base");if(i&&i.href)n=i.href;else{const{protocol:t,host:i}=e.location;n=`${t}//${i}`}return C.map(e=>new URL(e,n).href)}_getFormattedDisplayName(e){const{formattedDisplayName:t}=this._participants[e]||{};return t}_getOnStageParticipant(){return this._onStageParticipant}_getLargeVideo(){const e=this.getIFrame();if(this._isLargeVideoVisible&&e&&e.contentWindow&&e.contentWindow.document)return e.contentWindow.document.getElementById("largeVideo")}_getParticipantVideo(e){const t=this.getIFrame();if(t&&t.contentWindow&&t.contentWindow.document)return void 0===e||e===this._myUserID?t.contentWindow.document.getElementById("localVideo_container"):t.contentWindow.document.querySelector(`#participant_${e} video`)}_setSize(e,t){const n=P(e),i=P(t);void 0!==n&&(this._height=e,this._frame.style.height=n),void 0!==i&&(this._width=t,this._frame.style.width=i)}_setupListeners(){this._transport.on("event",e=>{let{name:t}=e,n=x(e,["name"]);const i=n.id;switch(t){case"video-conference-joined":void 0!==this._tmpE2EEKey&&(this.executeCommand(E.e2eeKey,this._tmpE2EEKey),this._tmpE2EEKey=void 0),this._myUserID=i,this._participants[i]={avatarURL:n.avatarURL};case"participant-joined":this._participants[i]=this._participants[i]||{},this._participants[i].displayName=n.displayName,this._participants[i].formattedDisplayName=n.formattedDisplayName,k(this,1);break;case"participant-left":k(this,-1),delete this._participants[i];break;case"display-name-change":{const e=this._participants[i];e&&(e.displayName=n.displayname,e.formattedDisplayName=n.formattedDisplayName);break}case"email-change":{const e=this._participants[i];e&&(e.email=n.email);break}case"avatar-changed":{const e=this._participants[i];e&&(e.avatarURL=n.avatarURL);break}case"on-stage-participant-changed":this._onStageParticipant=i,this.emit("largeVideoChanged");break;case"large-video-visibility-changed":this._isLargeVideoVisible=n.isVisible,this.emit("largeVideoChanged");break;case"video-conference-left":k(this,-1),delete this._participants[this._myUserID];break;case"video-quality-changed":this._videoQuality=n.videoQuality;break;case"local-storage-changed":return a.setItem("jitsiLocalStorage",n.localStorageContent),!0}const r=S[t];return!!r&&(this.emit(r,n),!0)})}addEventListener(e,t){this.on(e,t)}addEventListeners(e){for(const t in e)this.addEventListener(t,e[t])}captureLargeVideoScreenshot(){return this._transport.sendRequest({name:"capture-largevideo-screenshot"})}dispose(){this.emit("_willDispose"),this._transport.dispose(),this.removeAllListeners(),this._frame&&this._frame.parentNode&&this._frame.parentNode.removeChild(this._frame)}executeCommand(e,...t){e in E?this._transport.sendEvent({data:t,name:E[e]}):console.error("Not supported command name.")}executeCommands(e){for(const t in e)this.executeCommand(t,e[t])}getAvailableDevices(){return Object(O.a)(this._transport)}getContentSharingParticipants(){return this._transport.sendRequest({name:"get-content-sharing-participants"})}getCurrentDevices(){return Object(O.b)(this._transport)}getParticipantsInfo(){const e=Object.keys(this._participants),t=Object.values(this._participants);return t.forEach((t,n)=>{t.participantId=e[n]}),t}getVideoQuality(){return this._videoQuality}isAudioAvailable(){return this._transport.sendRequest({name:"is-audio-available"})}isDeviceChangeAvailable(e){return Object(O.c)(this._transport,e)}isDeviceListAvailable(){return Object(O.d)(this._transport)}isMultipleAudioInputSupported(){return Object(O.e)(this._transport)}invite(e){return Array.isArray(e)&&0!==e.length?this._transport.sendRequest({name:"invite",invitees:e}):Promise.reject(new TypeError("Invalid Argument"))}isAudioMuted(){return this._transport.sendRequest({name:"is-audio-muted"})}isSharingScreen(){return this._transport.sendRequest({name:"is-sharing-screen"})}getAvatarURL(e){const{avatarURL:t}=this._participants[e]||{};return t}getDisplayName(e){const{displayName:t}=this._participants[e]||{};return t}getEmail(e){const{email:t}=this._participants[e]||{};return t}getIFrame(){return this._frame}getNumberOfParticipants(){return this._numberOfParticipants}isVideoAvailable(){return this._transport.sendRequest({name:"is-video-available"})}isVideoMuted(){return this._transport.sendRequest({name:"is-video-muted"})}pinParticipant(e){this.executeCommand("pinParticipant",e)}removeEventListener(e){this.removeAllListeners(e)}removeEventListeners(e){e.forEach(e=>this.removeEventListener(e))}resizeLargeVideo(e,t){e<=this._width&&t<=this._height&&this.executeCommand("resizeLargeVideo",e,t)}sendProxyConnectionEvent(e){this._transport.sendEvent({data:[e],name:"proxy-connection-event"})}setAudioInputDevice(e,t){return Object(O.f)(this._transport,e,t)}setAudioOutputDevice(e,t){return Object(O.g)(this._transport,e,t)}setLargeVideoParticipant(e){this.executeCommand("setLargeVideoParticipant",e)}setVideoInputDevice(e,t){return Object(O.h)(this._transport,e,t)}startRecording(e){this.executeCommand("startRecording",e)}stopRecording(e){this.executeCommand("startRecording",e)}}}])}));
//# sourceMappingURL=external_api.min.map

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MEAN-Pub-Quiz-Platform\angular-src\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    SOCKET_ENDPOINT: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _vendor_jitsi_external_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vendor/jitsi/external_api.js */ "+SGJ");
/* harmony import */ var _vendor_jitsi_external_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_jitsi_external_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_game_creation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game-creation.service */ "D1//");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






const _c0 = ["meet"];
function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class HomeComponent {
    constructor(gameCreationService, router, route) {
        this.gameCreationService = gameCreationService;
        this.router = router;
        this.route = route;
        this.displayName = '';
        this.joinedDisplayNamed = '';
        this.gameStarted = false;
        this.joinedRoom = false;
        this.createdRoom = false;
        this.roomPin = '';
        this.domain = 'meet.jit.si';
        this.errorMessage = '';
    }
    ngOnInit() {
    }
    createRoom() {
        const game = {
            hostName: this.displayName,
            displayName: this.displayName,
            roomPin: this.roomPin,
        };
        if (game.hostName.length > 0) {
            this.gameCreationService.createGame(game).subscribe(data => {
                if (data.success) {
                    // this.gameCreationService.getRoomPin(game.roomPin);
                    this.gameCreationService.setHostBoolean(true);
                    this.router.navigate(['/playgame/', game.roomPin]);
                }
                else {
                    this.router.navigate(['/']);
                }
            });
        }
        else {
            this.errorMessage = "Please enter a display name";
            setTimeout(() => { this.errorMessage = ""; }, 3000);
        }
    }
    joinRoom() {
        if (this.joinedDisplayNamed.length > 0) {
            const game = {
                // hostName: '',
                roomPin: this.roomPin,
                displayName: this.joinedDisplayNamed
            };
            if (this.roomPin.length > 0) {
                this.gameCreationService.checkGameExists(game).subscribe((data) => {
                    if (data.success) {
                        this.gameCreationService.setDisplayName(game.displayName);
                        this.gameCreationService.setHostBoolean(false);
                        this.router.navigate(['/playgame/', game.roomPin]);
                    }
                    else {
                        this.router.navigate(['/']);
                        this.errorMessage = "There is no game with that pin! Check you have entered correctly or create a new game";
                        setTimeout(() => { this.errorMessage = ""; }, 3000);
                    }
                });
            }
            else {
                this.errorMessage = "Please enter a pin to join a game";
                setTimeout(() => { this.errorMessage = ""; }, 3000);
            }
        }
        else {
            this.errorMessage = "Please enter a display name";
            setTimeout(() => { this.errorMessage = ""; }, 3000);
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_game_creation_service__WEBPACK_IMPORTED_MODULE_2__["GameCreationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.meet = _t.first);
    } }, decls: 28, vars: 4, consts: [["class", "alert alert-dismissible fade show alert-danger", 4, "ngIf"], [1, "display-4"], [1, "lead"], [1, "my-4"], [1, "card-deck", 2, "width", "100%", "overflow", "hidden"], [1, "card", "border-secondary", "mb-3", 2, "max-width", "20rem"], [1, "card-header", "card-title"], [1, "card-body"], [1, "card-text"], ["type", "text", "name", "displayName", "placeholder", "Enter Display Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-title"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "card", "text-white", "bg-secondary", "mb-3", 2, "max-width", "20rem", "flex-grow", "1"], ["type", "text", "name", "roomPin", "placeholder", "Enter Game Code", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "joinedDisplayNamed", "placeholder", "Enter Display Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "alert", "alert-dismissible", "fade", "show", "alert-danger"], ["type", "button", "data-dismiss", "alert", 1, "close"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "How would you like to play?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "There are two ways to play.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Create a Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Create a game and invite players to join with a code.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_13_listener($event) { return ctx.displayName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() { return ctx.createRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Create a Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Join a Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Join a game with the code your host has shared with you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_23_listener($event) { return ctx.roomPin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_24_listener($event) { return ctx.joinedDisplayNamed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_26_listener() { return ctx.joinRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Join a Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.roomPin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.joinedDisplayNamed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".card-title[_ngcontent-%COMP%]{\r\n    padding-top: 6px !important;\r\n    margin: 0px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGl0bGV7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "D1//":
/*!***************************************************!*\
  !*** ./src/app/services/game-creation.service.ts ***!
  \***************************************************/
/*! exports provided: GameCreationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCreationService", function() { return GameCreationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class GameCreationService {
    constructor(http) {
        this.http = http;
        this.newGameBoolean = true;
    }
    createGame(game) {
        game.roomPin = this.generateCode();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('games/newGame', game, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res));
    }
    checkGameExists(game) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('games/checkGame', game, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res));
    }
    endGame(game) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('games/endGame', game, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res));
    }
    getMeetingParams(roomPin) {
        let game = {
            roomPin: roomPin,
            hostName: '',
            displayName: ''
        };
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('games/joinGame', game, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res));
    }
    setDisplayName(displayName) {
        this.displayName = displayName;
        return this.displayName;
    }
    getDisplayName() {
        return this.displayName;
    }
    setHostBoolean(hostBool) {
        this.hostBool = hostBool;
        return this.hostBool;
    }
    getHostBoolean() {
        return this.hostBool;
    }
    generateCode() {
        return Math.random().toString(20).substr(2, 5).toUpperCase();
    }
}
GameCreationService.ɵfac = function GameCreationService_Factory(t) { return new (t || GameCreationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
GameCreationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GameCreationService, factory: GameCreationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.editEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.editPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Username: ", ctx_r0.user.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx_r0.user.email, "");
} }
function ProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
} }
function ProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ProfileComponent_div_2_Template_form_submit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onEditEmailSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Current Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "New Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_2_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.email);
} }
function ProfileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ProfileComponent_div_3_Template_form_submit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onEditPasswordSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_3_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.password);
} }
function ProfileComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Click Delete Forever to remove account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onDeleteUserSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete Forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.emailBoolean = false;
        this.passwordBoolean = false;
        this.deleteBoolean = false;
        this.errorMessage = "";
    }
    ngOnInit() {
        // FOR LOCAL FE TESTING
        this.user = {
            name: String,
            email: String,
            username: String,
            password: String
        };
        // FOR LOCAL FE TESTING
        // this.user.name = "test";
        // this.user.email = "test@test.com";
        // this.user.username = "test";
        // this.user.password = "test";
        this.authService.getProfile().subscribe((profile) => {
            this.user = profile.user;
        }, (err) => {
            console.log(err);
            return false;
        });
    }
    editEmail() {
        this.passwordBoolean = false;
        this.deleteBoolean = false;
        return this.emailBoolean = !this.emailBoolean;
    }
    onEditEmailSubmit() {
        if (this.email === this.user.email) {
            this.errorMessage = "That is your current email address!";
            setTimeout(() => {
                this.errorMessage = "";
            }, 3000);
        }
        else if (this.email === undefined || this.email === "" || !(this.email.includes("@")) || !(this.email.endsWith(".com") || this.email.endsWith(".co.uk") || this.email.endsWith(".ac.uk"))) {
            this.errorMessage = "Invalid Email Address!";
            setTimeout(() => {
                this.errorMessage = "";
            }, 3000);
        }
        else {
            const originalEmail = this.user.email;
            this.user.email = this.email;
            this.authService.checkEmailExists(this.user).subscribe(data => {
                if (data.success === true) {
                    this.user.email = originalEmail;
                    this.errorMessage = "That email is already associated with an account, try logging in instead!";
                    setTimeout(() => {
                        this.errorMessage = "";
                    }, 3000);
                }
                else {
                    this.authService.editEmail(this.user).subscribe(() => { }, (err) => {
                        console.log(err);
                        return false;
                    });
                }
            });
        }
        this.emailBoolean = !this.emailBoolean;
    }
    editPassword() {
        this.emailBoolean = false;
        this.deleteBoolean = false;
        return this.passwordBoolean = !this.passwordBoolean;
    }
    onEditPasswordSubmit() {
        if (this.user.email === undefined || this.user.email === "") {
            this.errorMessage = "Invalid Password!";
        }
        else {
            this.authService.editPassword(this.user, this.password).subscribe(() => { }, (err) => {
                console.log(err);
                return false;
            });
            this.passwordBoolean = !this.passwordBoolean;
        }
    }
    deleteUser() {
        this.emailBoolean = false;
        this.passwordBoolean = false;
        return this.deleteBoolean = !this.deleteBoolean;
    }
    onDeleteUserSubmit() {
        this.authService.getProfile().subscribe((profile) => {
            this.user = profile.user;
            this.authService.deleteUser(this.user).subscribe(() => { }, (err) => {
                console.log(err);
                return false;
            });
        }, (err) => {
            console.log(err);
            return false;
        });
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 5, vars: 5, consts: [[4, "ngIf"], ["class", "alert alert-dismissible fade show alert-danger", 4, "ngIf"], [1, "page-header"], [1, "list-group"], [1, "list-group-item"], ["type", "button", 1, "btn", "btn-primary", "paddingButton", 3, "click"], [1, "alert", "alert-dismissible", "fade", "show", "alert-danger"], ["type", "button", "data-dismiss", "alert", 1, "close"], [3, "submit"], [1, "form-group", "row"], ["for", "staticEmail", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "readonly", "", "id", "staticEmail", 1, "form-control-plaintext", 3, "value"], [1, "form-group"], ["type", "email", "name", "email", "placeholder", "Enter new email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "password", "name", "password", "placeholder", "Enter new password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 14, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_1_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_div_2_Template, 16, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 11, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_div_4_Template, 5, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.name.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailBoolean);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordBoolean);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteBoolean);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".paddingButton[_ngcontent-%COMP%] {\r\n    margin:10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZ0J1dHRvbiB7XHJcbiAgICBtYXJnaW46MTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Lquv":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, consts: [[1, "page-header"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "O0qW":
/*!**********************************************!*\
  !*** ./src/app/services/socketio.service.ts ***!
  \**********************************************/
/*! exports provided: SocketioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketioService", function() { return SocketioService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



// import { io } from 'socket.io-client';
class SocketioService {
    constructor() { }
    connect(roomPin) {
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_0__["io"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SOCKET_ENDPOINT);
        this.socket.emit('joinGame', { gameId: roomPin });
    }
}
SocketioService.ɵfac = function SocketioService_Factory(t) { return new (t || SocketioService)(); };
SocketioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SocketioService, factory: SocketioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QHW0":
/*!*************************************************************!*\
  !*** ./src/app/components/game-play/game-play.component.ts ***!
  \*************************************************************/
/*! exports provided: GamePlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePlayComponent", function() { return GamePlayComponent; });
/* harmony import */ var _vendor_jitsi_external_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vendor/jitsi/external_api.js */ "+SGJ");
/* harmony import */ var _vendor_jitsi_external_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_jitsi_external_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_game_creation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game-creation.service */ "D1//");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_socketio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/socketio.service */ "O0qW");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["meet"];
function GamePlayComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.participantArray[key_r3].displayName);
} }
function GamePlayComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Current Players: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GamePlayComponent_div_12_div_2_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GamePlayComponent_div_12_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.beginGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Begin Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.objectKeys(ctx_r1.participantArray));
} }
class GamePlayComponent {
    constructor(gameCreationService, router, actRoute, socketioService) {
        this.gameCreationService = gameCreationService;
        this.router = router;
        this.actRoute = actRoute;
        this.socketioService = socketioService;
        this.gameStarted = false;
        this.joinedRoom = false;
        this.createdRoom = false;
        this.domain = 'meet.jit.si';
        this.isHost = false;
        this.url = '';
        this.objectKeys = Object.keys;
    }
    ngOnInit() {
        this.url = window.location.href;
        this.roomPin = this.actRoute.snapshot.params.pin;
        this.socketioService.connect(this.roomPin);
        this.game = {
            hostName: String,
            roomPin: this.roomPin,
            displayName: String
        };
    }
    ngAfterViewInit() {
        this.gameCreationService.checkGameExists(this.game).subscribe((data) => {
            if (data.success) {
                this.gameCreationService.getMeetingParams(this.roomPin).subscribe(data => {
                    this.data = data;
                    if (this.data.success) {
                        this.game = this.data.game;
                        let displayName = this.gameCreationService.getDisplayName();
                        let HostBool = this.gameCreationService.getHostBoolean();
                        if (displayName === undefined) {
                            this.isHost = true;
                            this.options = {
                                roomName: this.game.roomPin + 'JordansQuiz',
                                configOverwrite: { startWithAudioMuted: true },
                                width: '100%',
                                height: 500,
                                parentNode: this.meet.nativeElement,
                                userInfo: {
                                    displayName: this.game.displayName
                                }
                            };
                        }
                        else {
                            this.options = {
                                roomName: this.game.roomPin + 'JordansQuiz',
                                configOverwrite: { startWithAudioMuted: true },
                                width: '100%',
                                height: 500,
                                parentNode: this.meet.nativeElement,
                                userInfo: {
                                    displayName: displayName
                                }
                            };
                        }
                        this.api = new JitsiMeetExternalAPI(this.domain, this.options);
                        this.api.addListener('participantJoined', () => {
                            this.participantArray = this.api._participants;
                        });
                    }
                    else {
                        this.errorMessage = "You must create or enter a pin";
                    }
                });
            }
            else {
                this.router.navigate(['/']);
            }
        });
    }
    endGame() {
        this.api.dispose();
        this.router.navigate(['/']);
        this.gameCreationService.endGame(this.game).subscribe(() => { });
    }
    beginGame() {
    }
}
GamePlayComponent.ɵfac = function GamePlayComponent_Factory(t) { return new (t || GamePlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_game_creation_service__WEBPACK_IMPORTED_MODULE_2__["GameCreationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"])); };
GamePlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GamePlayComponent, selectors: [["app-game-play"]], viewQuery: function GamePlayComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.meet = _t.first);
    } }, decls: 16, vars: 3, consts: [[1, "row"], [1, "col"], [1, "jitsiMeet"], ["meet", ""], [1, "gameDetails"], ["type", "button", 1, "btn", "btn-primary", 3, "cdkCopyToClipboard"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"]], template: function GamePlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Game Waiting Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Copy Game Link!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, GamePlayComponent_div_12_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GamePlayComponent_Template_button_click_14_listener() { return ctx.endGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "End Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Meeting Pin: ", ctx.roomPin, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkCopyToClipboard", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.participantArray);
    } }, directives: [_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["CdkCopyToClipboard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".jitsiMeet[_ngcontent-%COMP%]{\r\n    height:auto;\r\n    min-height: 600px;\r\n    width: auto;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1g7OztxQkFHaUI7QUFDckIiLCJmaWxlIjoiZ2FtZS1wbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaml0c2lNZWV0e1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgLyogaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1pbi13aWR0aDogODAlOyAqL1xyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'angular-src';
    }
    ngAfterViewInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "jumbotron"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".jumbotron[_ngcontent-%COMP%]{\r\n    margin: 10px !important;\r\n    padding: 32px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XHJcbiAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDMycHggIWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
    // if logged in, cannot type url 
    canAccessByURL() {
        if (this.authService.loggedIn()) {
            this.router.navigate(['']);
            return false;
        }
        else {
            return true;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You have not filled out all the required fields.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
} }
class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.success = true;
        this.errorMessage = "";
    }
    ngOnInit() {
    }
    onLoginSubmit() {
        this.user = {
            name: String,
            email: String,
            username: String,
            password: String
        };
        // FOR LOCAL TESTING
        // this.user.name = "test";
        // this.user.email = "test@test.com";
        // this.user.username = "test";
        // this.user.password = "test";
        this.router.navigate(['/profile']);
        if (this.username === undefined || this.username === "" || this.password === undefined || this.password === "") {
            this.success = false;
            setTimeout(() => {
                this.success = true;
            }, 3000);
        }
        else {
            const user = {
                username: this.username,
                password: this.password
            };
            this.authService.authenticateUser(user).subscribe(data => {
                if (data.success) {
                    this.authService.storeUserData(data.token, data.user);
                    this.router.navigate(['/profile']);
                }
                else {
                    this.router.navigate(['/login']);
                    this.errorMessage = data.msg;
                    setTimeout(() => {
                        this.errorMessage = "";
                    }, 3000);
                }
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 16, vars: 4, consts: [[1, "page-header"], ["class", "alert alert-dismissible fade show alert-danger", 4, "ngIf"], ["novalidate", "", 3, "submit"], [1, "form-group"], ["type", "text", "name", "username", "placeholder", "Enter Username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Enter Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Login", 1, "btn", "btn-primary"], [1, "alert", "alert-dismissible", "fade", "show", "alert-danger"], ["type", "button", "data-dismiss", "alert", 1, "close"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_4_listener() { return ctx.onLoginSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function RegisterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You have not filled out all the required fields.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
} }
class RegisterComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.success = true;
        this.errorMessage = "";
    }
    ngOnInit() {
    }
    onRegisterSubmit() {
        if (this.name === undefined || this.name === "" || this.email === undefined || this.email === "" || this.password === undefined || this.password === "" || this.username === undefined || this.username === "") {
            this.success = false;
            setTimeout(() => {
                this.success = true;
            }, 3000);
        }
        else if (this.name.length > 40 || this.email.length > 40 || this.password.length > 40 || this.username.length > 40) {
            this.errorMessage = "Too many characters used!";
            setTimeout(() => {
                this.errorMessage = "";
            }, 3000);
        }
        else if (!(this.email.includes("@")) || !(this.email.endsWith(".com") || this.email.endsWith(".co.uk") || this.email.endsWith(".ac.uk"))) {
            this.errorMessage = "Invalid Email Address!";
            setTimeout(() => {
                this.errorMessage = "";
            }, 3000);
        }
        else {
            const user = {
                name: this.name,
                email: this.email,
                username: this.username,
                password: this.password
            };
            this.authService.checkUsernameExists(user).subscribe(data => {
                if (data.success === true) {
                    this.errorMessage = "This username is already taken, please choose another!";
                    setTimeout(() => {
                        this.errorMessage = "";
                    }, 3000);
                }
                else {
                    this.authService.checkEmailExists(user).subscribe(data => {
                        if (data.success === true) {
                            this.errorMessage = "That email is already associated with an account, try logging in instead!";
                            setTimeout(() => {
                                this.errorMessage = "";
                            }, 3000);
                        }
                        else {
                            this.authService.registerUser(user).subscribe(data => {
                                if (data.success) {
                                    this.success = true;
                                    this.router.navigate(['/login']);
                                }
                                else {
                                    this.router.navigate(['/register']);
                                    this.success = false;
                                }
                            });
                        }
                    });
                }
            });
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 28, vars: 6, consts: [["class", "alert alert-dismissible fade show alert-danger", 4, "ngIf"], ["novalidate", "", 3, "submit"], [1, "form-group"], ["type", "text", "name", "name", "placeholder", "Enter Full Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "invalid-feedback"], ["type", "username", "name", "username", "placeholder", "Create a Username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Enter Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["type", "password", "name", "password", "placeholder", "Create a Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], [1, "alert", "alert-dismissible", "fade", "show", "alert-danger"], ["type", "button", "data-dismiss", "alert", 1, "close"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_2_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_div_3_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_4_listener() { return ctx.onRegisterSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_9_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Please choose a username. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_19_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "We'll never share your email with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_25_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _components_game_play_game_play_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/game-play/game-play.component */ "QHW0");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _services_socketio_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/socketio.service */ "O0qW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");























const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'playgame/:pin', component: _components_game_play_game_play_component__WEBPACK_IMPORTED_MODULE_17__["GamePlayComponent"] },
    { path: '**', redirectTo: '/' },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _services_socketio_service__WEBPACK_IMPORTED_MODULE_20__["SocketioService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__["ClipboardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
        _components_game_play_game_play_component__WEBPACK_IMPORTED_MODULE_17__["GamePlayComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__["ClipboardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return ["/login"]; };
function NavbarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/register"]; };
function NavbarComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/profile"]; };
function NavbarComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["/dashboard"]; };
function NavbarComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
function NavbarComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_14_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onLogOutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function () { return ["/"]; };
const _c5 = function (a0) { return { "show": a0 }; };
class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.navbarOpen = false;
    }
    ngOnInit() {
    }
    onLogOutClick() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 15, vars: 12, consts: [[1, "navbar", "navbar-expand-sm", "navbar-dark", "bg-primary", 2, "margin-bottom", "20px"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarColor01", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarColor01", 1, "collapse", "navbar-collapse", "show", 3, "ngClass"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "nav-item"], [1, "nav-link", "active", 3, "routerLink"], ["class", "nav-item", 4, "ngIf"], [1, "nav-link", 3, "routerLink"], [1, "nav-link", "pointer", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Jordan's Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_3_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_li_10_Template, 3, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavbarComponent_li_11_Template, 3, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_li_12_Template, 3, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavbarComponent_li_13_Template, 3, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_li_14_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c5, ctx.navbarOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".pointer[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AuthService {
    constructor(http) {
        this.http = http;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    registerUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res));
    }
    editEmail(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/editEmail', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res));
    }
    editPassword(user, newPassword) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        user.password = newPassword;
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/editPassword', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res));
    }
    deleteUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/deleteUser', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res));
    }
    authenticateUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res));
    }
    getProfile() {
        this.loadToken();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers });
    }
    checkUsernameExists(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/existingUsername', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res));
    }
    checkEmailExists(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/existingEmail', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res));
    }
    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }
    loggedIn() {
        return !(this.helper.isTokenExpired(localStorage.id_token));
    }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map