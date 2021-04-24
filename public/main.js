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

module.exports = __webpack_require__(/*! D:\mean-pub-quiz\angular-src\src\main.ts */"zUnb");


/***/ }),

/***/ "3sWC":
/*!*****************************************************************************!*\
  !*** ./src/app/components/game-waiting-room/game-waiting-room.component.ts ***!
  \*****************************************************************************/
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _game_play_game_play_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../game-play/game-play.component */ "QHW0");










const _c0 = ["meet"];
function GamePlayComponent_div_5_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "selectedColour": a0 }; };
function GamePlayComponent_div_5_div_1_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r18 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r16.participantArray[key_r18].ready === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r16.participantArray[key_r18].displayName);
} }
function GamePlayComponent_div_5_div_1_div_8_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GamePlayComponent_div_5_div_1_div_8_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r19.playerReady(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Ready to Play?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GamePlayComponent_div_5_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Current Players:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GamePlayComponent_div_5_div_1_div_8_div_4_Template, 3, 4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GamePlayComponent_div_5_div_1_div_8_div_5_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.objectKeys(ctx_r6.participantArray));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.isPlayerReady === false && ctx_r6.allPlayersReady === false && ctx_r6.includeHost);
} }
function GamePlayComponent_div_5_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "You are ready to play!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Waiting for other players...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GamePlayComponent_div_5_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "All players are ready!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Waiting for host to start the game...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GamePlayComponent_div_5_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Host Only!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "If you are the host, click below to gain your power!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GamePlayComponent_div_5_div_1_div_11_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r21.setHost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Confirm Host");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GamePlayComponent_div_5_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Click below to start the game!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GamePlayComponent_div_5_div_1_div_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r23.beginGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Begin Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GamePlayComponent_div_5_div_1_div_13_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Input Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GamePlayComponent_div_5_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Host Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "You must choose your game settings before you can begin the game!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, GamePlayComponent_div_5_div_1_div_13_div_7_Template, 3, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Change Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.showQuestions);
} }
function GamePlayComponent_div_5_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.errorMessage);
} }
function GamePlayComponent_div_5_div_1_div_32_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r28 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "round", i_r28 + 1, "questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Enter the number of questions for round ", i_r28 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "round", i_r28 + 1, "questions");
} }
function GamePlayComponent_div_5_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GamePlayComponent_div_5_div_1_div_32_div_2_Template, 4, 3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.rounds);
} }
function GamePlayComponent_div_5_div_1_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Open Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GamePlayComponent_div_5_div_1_div_88_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r33 = ctx.index;
    const i_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("for", "q", i_r30 + 1, "", j_r33 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Question ", j_r33 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "q", i_r30 + 1, "", j_r33 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "a", i_r30 + 1, "", j_r33 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "p", i_r30 + 1, "", j_r33 + 1, "");
} }
function GamePlayComponent_div_5_div_1_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GamePlayComponent_div_5_div_1_div_88_div_2_Template, 12, 9, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r30 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Round ", i_r30 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.roundsArray[i_r30]);
} }
function GamePlayComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Game Waiting Room ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GamePlayComponent_div_5_div_1_span_3_Template, 3, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Copy Game Link!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GamePlayComponent_div_5_div_1_div_8_Template, 6, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GamePlayComponent_div_5_div_1_div_9_Template, 7, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, GamePlayComponent_div_5_div_1_div_10_Template, 7, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, GamePlayComponent_div_5_div_1_div_11_Template, 8, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, GamePlayComponent_div_5_div_1_div_12_Template, 6, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, GamePlayComponent_div_5_div_1_div_13_Template, 11, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Game Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, GamePlayComponent_div_5_div_1_div_20_Template, 5, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Question Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "If you would like your quiz questions to appear on the screen as you play, enter the number of rounds and questions. If not, just leave it blank!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Enter the number of rounds");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, GamePlayComponent_div_5_div_1_div_32_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Team Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Here, choose whether to assign the host to a team to play as well. Select the number of teams you wish to have and they will be randomly assigned when the game begins");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Include Host ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "How many teams would you like? (max 10)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Feature Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Choose which features you want in your game");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Include Buzzer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Include Timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Timer Length (Mins)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Autostart Timer on New Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GamePlayComponent_div_5_div_1_Template_button_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r35.showQuestions = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GamePlayComponent_div_5_div_1_Template_button_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r37.setSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Confirm Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, GamePlayComponent_div_5_div_1_div_76_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Submit Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Paste or type your question, answer and the points they are worth");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, GamePlayComponent_div_5_div_1_div_88_Template, 3, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GamePlayComponent_div_5_div_1_Template_button_click_92_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r38.setQuestions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Save Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.host);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Meeting Pin: ", ctx_r3.roomPin, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r3.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.participantArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isPlayerReady && !ctx_r3.allPlayersReady);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.allPlayersReady && !ctx_r3.host);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.hostSubmitted && !ctx_r3.host && !ctx_r3.hostClaimed && ctx_r3.joined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.allPlayersReady && ctx_r3.hostSubmitted && ctx_r3.showQuestions === ctx_r3.hostSubmittedQuestions && ctx_r3.host);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.host);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.errorMessage.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.roundsEntered);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.openQuestionModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.roundsArray);
} }
function GamePlayComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-game-play", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("roomPin", ctx_r4.roomPin)("hostDetails", ctx_r4.hostDetails)("player", ctx_r4.currentPlayer)("teams", ctx_r4.teams);
} }
function GamePlayComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GamePlayComponent_div_5_div_1_Template, 94, 13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GamePlayComponent_div_5_div_2_Template, 2, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.gameStarted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.gameStarted === true);
} }
function GamePlayComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Game Waiting Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "It looks like you're a little late, the game has already started!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "If you are reconnecting, enter your unique code then press join!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GamePlayComponent_div_6_div_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r41.rejoinGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Join");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Meeting Pin: ", ctx_r39.roomPin, "");
} }
function GamePlayComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-game-play", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("roomPin", ctx_r40.roomPin)("hostDetails", ctx_r40.hostDetails)("player", ctx_r40.currentPlayer)("teams", ctx_r40.teams);
} }
function GamePlayComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GamePlayComponent_div_6_div_1_Template, 13, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GamePlayComponent_div_6_div_2_Template, 2, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.gameStarted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.gameStarted);
} }
class GamePlayComponent {
    constructor(gameCreationService, router, actRoute, socketioService) {
        this.gameCreationService = gameCreationService;
        this.router = router;
        this.actRoute = actRoute;
        this.socketioService = socketioService;
        this.objectKeys = Object.keys;
        this.gameStarted = false;
        this.domain = 'meet.jit.si';
        this.errorMessage = "";
        this.isHost = false;
        this.url = '';
        this.allPlayersReady = false;
        this.isPlayerReady = false;
        this.teamNumber = 0;
        this.hostSubmitted = false;
        this.hostSubmittedQuestions = false;
        this.includeHost = true;
        this.joined = false;
        this.roundsArray = [];
    }
    ngOnInit() {
        this.url = window.location.href;
        this.roomPin = this.actRoute.snapshot.params.pin;
        this.game = {
            hostName: String,
            roomPin: this.roomPin,
            displayName: String
        };
    }
    ngAfterViewInit() {
        this.gameCreationService.checkGameExists(this.game).subscribe((data) => {
            if (data.success) {
                // create room 
                this.socketioService.connect(this.roomPin);
                this.gameStarted = false;
                // check if game begun
                this.socketioService.receiveGameBegun().subscribe((message) => {
                    this.gameAlreadyBegun = message;
                });
                // set observable listeners
                this.receiveHostDetails();
                this.receiveTeams();
                this.receiveJoinedPlayers();
                this.receiveReadyPlayers();
                this.receiveBeginGame();
                this.receiveEndGame();
                this.receiveClaimHost();
                // get players who joined before user connected
                this.previousPlayers = this.socketioService.getPreviousJoinedPlayers();
                // get meeting parameters
                this.gameCreationService.getMeetingParams(this.roomPin).subscribe(data => {
                    this.data = data;
                    if (this.data.success) {
                        this.game = this.data.game;
                        let displayName = this.gameCreationService.getDisplayName();
                        // set displayName based on whether created game or joined
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
                        // create Jitsi meeting 
                        this.api = new JitsiMeetExternalAPI(this.domain, this.options);
                        // add listener when user joins call
                        this.api.addListener('videoConferenceJoined', (message) => {
                            this.allPlayersReady = false;
                            this.currentPlayer = message;
                            this.participantArray = this.api._participants;
                            // if joined late set as ready automatically
                            if (this.gameAlreadyBegun) {
                                this.currentPlayer.ready = true;
                                this.participantArray[this.currentPlayer.id].ready = true;
                            }
                            else {
                                this.currentPlayer.ready = false;
                                this.participantArray[this.currentPlayer.id].ready = false;
                                this.joined = true;
                            }
                            this.socketioService.joinGame(this.roomPin, this.currentPlayer);
                            this.participantArray[this.currentPlayer.id].id = this.currentPlayer.id;
                            setTimeout(() => {
                                this.previousPlayers = this.socketioService.getPreviousJoinedPlayers();
                                if (!(this.previousPlayers === undefined)) {
                                    for (let key of this.objectKeys(this.previousPlayers)) {
                                        if (!(this.participantArray[key] === undefined)) {
                                            this.participantArray[key] = this.previousPlayers[key];
                                        }
                                    }
                                }
                            }, 100);
                        });
                        this.api.addListener('participantLeft', (message) => {
                            this.currentPlayer = message;
                            delete this.participantArray[this.currentPlayer.id];
                            this.socketioService.playerLeft(this.roomPin, this.currentPlayer);
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
        this.socketioService.endGame(this.roomPin);
        this.router.navigate(['/']);
        this.gameCreationService.endGame(this.game).subscribe(() => { });
    }
    generateCode() {
        return Math.random().toString(20).substr(2, 5).toUpperCase();
    }
    beginGame() {
        //loop through partArray, give them unique pin so they can rejoin if needed
        for (let key of this.objectKeys(this.participantArray)) {
            this.participantArray[key].uid = this.generateCode();
        }
        this.socketioService.beginGame(this.roomPin, this.participantArray, this.hostDetails);
        this.gameStarted = true;
    }
    playerReady() {
        this.isPlayerReady = true;
        this.participantArray[this.currentPlayer.id].ready = true;
        let currentPlayerDetails = this.participantArray[this.currentPlayer.id];
        this.socketioService.playerReady(this.roomPin, currentPlayerDetails);
        this.allPlayersReady = this.isAllReady();
    }
    receiveJoinedPlayers() {
        this.socketioService.receiveJoinedPlayers().subscribe((message) => {
            this.allPlayersReady = false;
            let joinedPlayer = message;
            if (!(this.participantArray === undefined)) {
                // this.participantArray[joinedPlayer.id] = {}
                this.participantArray[joinedPlayer.id].id = joinedPlayer.id;
                this.participantArray[joinedPlayer.id].socketID = joinedPlayer.socketID;
                this.participantArray[joinedPlayer.id].ready = joinedPlayer.ready;
                this.participantArray[joinedPlayer.id].roomName = joinedPlayer.roomName;
            }
        });
    }
    isAllReady() {
        for (let key of this.objectKeys(this.participantArray)) {
            // as may be undefined
            if (!this.participantArray[key].host === true) {
                if (!this.participantArray[key].ready === true) {
                    return false;
                }
            }
        }
        return true;
    }
    receiveReadyPlayers() {
        this.socketioService.receiveReadyPlayers().subscribe((message) => {
            let partArray = message;
            this.participantArray[partArray.id].ready = true;
            this.allPlayersReady = this.isAllReady();
        });
    }
    setHost() {
        this.socketioService.claimHost(this.roomPin);
        this.host = true;
        this.participantArray[this.currentPlayer.id].host = true;
        this.playerReady();
        let rounds = document.getElementById('rounds');
        rounds.addEventListener('change', (event) => {
            if (Number.isInteger(parseInt(rounds.value))) {
                this.rounds = new Array(parseInt(rounds.value));
            }
            else {
                //isInt returns NaN
                this.rounds = 0;
            }
            if (this.rounds.length > 0) {
                this.roundsEntered = true;
            }
            else {
                this.roundsEntered = false;
            }
        });
    }
    counter(i) {
        this.counterArray = new Array(i);
        return this.counterArray;
    }
    setSettings() {
        let team = document.getElementById('teamNumber');
        this.isChecked = document.getElementById('hostCheckbox');
        let noOfPlayers;
        let dismissButton = document.getElementById('dismissModal');
        if (this.isChecked.checked) {
            noOfPlayers = this.objectKeys(this.participantArray).length;
            this.participantArray[this.currentPlayer.id].include = true;
            this.includeHost = true;
        }
        else {
            noOfPlayers = (this.objectKeys(this.participantArray).length) - 1;
            this.participantArray[this.currentPlayer.id].include = false;
            this.includeHost = false;
        }
        let roundsBool;
        this.teamNumber = parseInt(team.value);
        let button = document.getElementById('setSettings');
        if (this.teamNumber > 0 && this.teamNumber <= noOfPlayers && this.teamNumber < 11 && !(this.teamNumber === NaN)) {
            // do something to save this?
            if (!(this.rounds === undefined) || (this.rounds === Array(1))) {
                if (this.rounds.length > 0) {
                    this.showQuestions = true;
                    this.roundsArray = [];
                    for (let i = 0; i < this.rounds.length; i++) {
                        let name = document.getElementById('round' + (i + 1) + 'questions');
                        if (name.value === "" || name.value === undefined || (name.value) === null) {
                            this.errorMessage = "You must enter an integer for each round";
                            setTimeout(() => { this.errorMessage = ""; }, 3000);
                            roundsBool = false;
                            break;
                        }
                        else {
                            let val = new Array(parseInt(name.value));
                            this.roundsArray.push(val);
                            roundsBool = true;
                        }
                    }
                    if (roundsBool) {
                        dismissButton.click();
                    }
                }
                else {
                    this.showQuestions = false;
                    dismissButton.click();
                }
            }
            else {
                this.showQuestions = false;
                dismissButton.click();
            }
        }
        else {
            this.errorMessage = "There cannot be more teams than players";
            setTimeout(() => { this.errorMessage = ""; }, 3000);
        }
        let buzzerElement = document.getElementById('buzzerToggle');
        let timerElement = document.getElementById('timerToggle');
        let timerLengthElement = document.getElementById('timerLength');
        let timerAutoStartElement = document.getElementById('timerStart');
        this.socketioService.setGameSettings(this.roomPin, buzzerElement.checked, timerElement.checked, timerLengthElement.value, timerAutoStartElement.checked);
        let teamButton = document.getElementById("teamSettings");
        teamButton.style.borderColor = "green";
        teamButton.style.color = "green";
        this.hostSubmitted = true;
        this.hostDetails = this.participantArray[this.currentPlayer.id];
        this.hostDetails.teamNumber = this.teamNumber;
    }
    setQuestions() {
        let inputButton = document.getElementById("inputQuestions");
        inputButton.style.borderColor = "green";
        inputButton.style.color = "green";
        this.questionsObject = {};
        for (let i = 0; i < this.rounds.length; i++) {
            this.questionsObject[i + 1] = {};
            for (let j = 0; j < this.roundsArray[i].length; j++) {
                this.questionsObject[i + 1][j + 1] = {};
                let questionElement = document.getElementById('q' + (i + 1) + (j + 1));
                let answerElement = document.getElementById('a' + (i + 1) + (j + 1));
                let pointsElement = document.getElementById('p' + (i + 1) + (j + 1));
                let questionValue;
                let answerValue;
                let pointsValue;
                // to account for inputs left empty
                if (questionElement === null) {
                    questionValue = "";
                }
                else {
                    questionValue = questionElement.value;
                }
                if (answerElement === null) {
                    answerValue = "";
                }
                else {
                    answerValue = answerElement.value;
                }
                if (pointsElement === null) {
                    pointsValue = "";
                }
                else {
                    pointsValue = pointsElement.value;
                }
                this.questionsObject[i + 1][j + 1].question = questionValue;
                this.questionsObject[i + 1][j + 1].answer = answerValue;
                this.questionsObject[i + 1][j + 1].points = pointsValue;
            }
        }
        this.hostSubmittedQuestions = true;
        this.gameCreationService.createQuestions(this.roomPin, this.questionsObject).subscribe(() => {
        });
    }
    rejoinGame() {
        // find player with that unique id and update that current player w new PI and socketID
        let code = document.getElementById('lateCode');
        this.gameCreationService.getPlayers(this.roomPin).subscribe((data) => {
            let players = data.players;
            for (let key of this.objectKeys(players)) {
                if (players[key].uid === code.value) {
                    this.currentPlayer.uid = players[key].uid;
                    this.currentPlayer.colour = players[key].colour;
                    players[this.currentPlayer.id] = this.currentPlayer;
                    this.socketioService.rejoinPlayer(this.roomPin, players[players[key].id], this.currentPlayer);
                    delete players[players[key].id];
                    this.previousPlayers = this.socketioService.getPreviousJoinedPlayers();
                    for (let key of this.objectKeys(this.previousPlayers)) {
                        if (key === this.currentPlayer.id) {
                            this.previousPlayers[key].colour = this.currentPlayer.colour;
                            this.previousPlayers[key].uid = this.currentPlayer.uid;
                        }
                    }
                    this.gameCreationService.setPlayers(this.roomPin, this.previousPlayers).subscribe(() => {
                    });
                    this.gameStarted = true;
                }
            }
        });
    }
    receiveHostDetails() {
        this.socketioService.receiveHostDetails().subscribe((host) => {
            this.hostDetails = host;
        });
    }
    receiveEndGame() {
        this.socketioService.receiveEndGame().subscribe((message) => {
            if (message.includes('ended')) {
                this.endGame();
            }
        });
    }
    receiveBeginGame() {
        this.socketioService.receiveBeginGame().subscribe((message) => {
            if (!this.gameAlreadyBegun) {
                this.participantArray = message;
                this.gameCreationService.setPlayers(this.roomPin, message).subscribe(() => {
                });
                this.gameStarted = true;
                this.gameAlreadyBegun = true;
            }
        });
    }
    receiveTeams() {
        this.socketioService.receiveTeams().subscribe((teams) => {
            this.teams = teams;
        });
    }
    receiveClaimHost() {
        this.socketioService.receiveClaimHost().subscribe((teams) => {
            this.hostClaimed = true;
        });
    }
}
GamePlayComponent.ɵfac = function GamePlayComponent_Factory(t) { return new (t || GamePlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_game_creation_service__WEBPACK_IMPORTED_MODULE_2__["GameCreationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"])); };
GamePlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GamePlayComponent, selectors: [["app-game-waiting-room"]], viewQuery: function GamePlayComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.meet = _t.first);
    } }, decls: 10, vars: 2, consts: [[1, "row"], [1, "col", 2, "padding", "0px"], [1, "jitsiMeet", 2, "padding", "0px"], ["meet", ""], [1, "col", 2, "padding-right", "0px"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [2, "margin-bottom", "0px"], ["type", "button", 1, "btn", "btn-primary", "copyButton", 3, "cdkCopyToClipboard"], ["data-bs-backdrop", "static", "id", "settingsModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content", 2, "max-height", "400px"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["class", "alert alert-dismissible fade show alert-danger", 4, "ngIf"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "card-text"], [1, "needs-validation"], [1, "mb-3"], ["for", "rounds", 2, "margin-top", "10px"], ["type", "text", "id", "rounds", "placeholder", "Enter number of rounds", 1, "form-control"], [1, "form-check", 2, "padding-left", "0rem"], ["type", "checkbox", "value", "", "id", "hostCheckbox", 1, "form-check-input"], ["for", "hostCheckbox", 1, "form-check-label", 2, "padding-left", "30px"], ["for", "teamNumber", 2, "margin-top", "10px"], ["type", "text", "id", "teamNumber", "placeholder", "Enter number of teams", 1, "form-control"], [1, "custom-control", "custom-switch"], ["type", "checkbox", "id", "buzzerToggle", "checked", "", 1, "custom-control-input"], ["for", "buzzerToggle", 1, "custom-control-label"], ["type", "checkbox", "id", "timerToggle", "checked", "", 1, "custom-control-input"], ["for", "timerToggle", 1, "custom-control-label"], ["for", "timerLength", 1, "form-label"], ["type", "range", "data-value", "0.5", "min", "0", "max", "5", "step", "0.5", "value", "timerLength", "id", "timerLength", 1, "form-range"], ["type", "checkbox", "id", "timerStart", 1, "custom-control-input"], ["for", "timerStart", 1, "custom-control-label"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "id", "setSettings", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "dismissModal", "data-bs-dismiss", "modal", "aria-hidden", "true", "hidden", "", 1, "btn"], ["data-bs-backdrop", "static", "id", "questionsModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#questionsModal", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", 2, "max-height", "400px"], [4, "ngFor", "ngForOf"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-dismiss", "modal", "id", "saveQuestions", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#settingsModal", "aria-hidden", "false"], [1, "card", "border-primary", "mb-3", 2, "max-width", "20rem", "margin-top", "16px", "padding", "10px"], [3, "ngClass"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], [1, "text-success"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#settingsModal", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "card-body", "row", 2, "padding", "5px"], ["class", "col", 4, "ngIf"], [1, "col"], ["id", "teamSettings", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#settingsModal", 1, "btn", "btn-outline-secondary"], ["id", "inputQuestions", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#questionsModal", 1, "btn", "btn-outline-secondary"], [1, "alert", "alert-dismissible", "fade", "show", "alert-danger"], ["type", "button", "data-dismiss", "alert", 1, "close"], [2, "margin-top", "10px", 3, "for"], ["type", "text", "placeholder", "Enter number of questions", 1, "form-control", 3, "id"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#questionsModal", 1, "btn", "btn-secondary"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Paste or type your question", 1, "form-control", 3, "id"], [1, "input-group-text"], ["type", "text", 1, "form-control", 3, "id"], [3, "roomPin", "hostDetails", "player", "teams"], ["type", "text", "id", "lateCode", "placeholder", "e.g E14GV", 1, "form-control"]], template: function GamePlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GamePlayComponent_div_5_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, GamePlayComponent_div_6_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GamePlayComponent_Template_button_click_8_listener() { return ctx.endGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "End Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.gameAlreadyBegun);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gameAlreadyBegun);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["CdkCopyToClipboard"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _game_play_game_play_component__WEBPACK_IMPORTED_MODULE_9__["GameDetailsComponent"]], styles: [".jitsiMeet[_ngcontent-%COMP%]{\r\n    height:auto;\r\n    \r\n    width: auto;\r\n    \r\n}\r\n\r\n.selectedColour[_ngcontent-%COMP%]{\r\n  color: green;\r\n}\r\n\r\n\r\n\r\n.form-check[_ngcontent-%COMP%]{\r\n  padding-left: 0em !important;\r\n}\r\n\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]::after{\r\n  top: 0em !important;\r\n  left: 1.5em !important;\r\n}\r\n\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]::before{\r\n  top: 0em !important;\r\n  left: 1.5em !important;\r\n}\r\n\r\ninput[type=checkbox][_ngcontent-%COMP%]::before{\r\n  top: 0em !important;\r\n  left: 1.5em !important;\r\n}\r\n\r\ninput[type=checkbox][_ngcontent-%COMP%]::after{\r\n  top: 0em !important;\r\n  left: 1.5em !important;\r\n}\r\n\r\ninput[type=checkbox][_ngcontent-%COMP%]:checked::after{\r\n  top: 0em !important;\r\n  left: 1.1em !important;\r\n}\r\n\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked::after{\r\n  top: 0em !important;\r\n  left: 1.1em !important;\r\n}\r\n\r\n\r\n\r\n.copyButton[_ngcontent-%COMP%]{\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  padding-top:0px;\r\n  padding-bottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtd2FpdGluZy1yb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWDs7O3FCQUdpQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7R0FFRzs7QUFDSDtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFDQTs7OztHQUlHOztBQUVIO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImdhbWUtd2FpdGluZy1yb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaml0c2lNZWV0e1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICAvKiBtaW4taGVpZ2h0OiA2MDBweDsgKi9cclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgLyogaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1pbi13aWR0aDogODAlOyAqL1xyXG59XHJcblxyXG4uc2VsZWN0ZWRDb2xvdXJ7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4vKiAubGFiZWx7XHJcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxufSAqL1xyXG4uZm9ybS1jaGVja3tcclxuICBwYWRkaW5nLWxlZnQ6IDBlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06OmFmdGVye1xyXG4gIHRvcDogMGVtICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMS41ZW0gIWltcG9ydGFudDtcclxufVxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06OmJlZm9yZXtcclxuICB0b3A6IDBlbSAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDEuNWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuaW5wdXRbdHlwZT1jaGVja2JveF06OmJlZm9yZXtcclxuICB0b3A6IDBlbSAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDEuNWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuaW5wdXRbdHlwZT1jaGVja2JveF06OmFmdGVye1xyXG4gIHRvcDogMGVtICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMS41ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZDo6YWZ0ZXJ7XHJcbiAgdG9wOiAwZW0gIWltcG9ydGFudDtcclxuICBsZWZ0OiAxLjFlbSAhaW1wb3J0YW50O1xyXG59XHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkOjphZnRlcntcclxuICB0b3A6IDBlbSAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDEuMWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogXHJcbi5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MHB4KTtcclxufSAqL1xyXG5cclxuLmNvcHlCdXR0b257XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIHBhZGRpbmctdG9wOjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59Il19 */"] });


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
    // SOCKET_ENDPOINT: 'http://localhost:8080'
    SOCKET_ENDPOINT: 'https://mean-pub-quiz.herokuapp.com/'
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
            this.roomPin = this.roomPin.toUpperCase();
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
    setPlayers(roomPin, players) {
        let game = {
            roomPin: roomPin,
            hostName: '',
            displayName: '',
            players: players
        };
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('games/setPlayers', game, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res));
    }
    getPlayers(roomPin) {
        let game = {
            roomPin: roomPin,
            hostName: '',
            displayName: '',
            players: {}
        };
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('games/getPlayers', game, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res));
    }
    createQuestions(roomPin, questionsObject) {
        let game = {
            roomPin: roomPin,
            hostName: '',
            displayName: '',
            questions: questionsObject
        };
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('games/createQuestions', game, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res));
    }
    getQuestions(roomPin) {
        let game = {
            roomPin: roomPin,
            hostName: '',
            displayName: '',
            questions: {}
        };
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('games/getQuestions', game, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res));
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

/***/ "Gl2y":
/*!*****************************************************************!*\
  !*** ./src/app/components/how-to-play/how-to-play.component.ts ***!
  \*****************************************************************/
/*! exports provided: HowToPlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToPlayComponent", function() { return HowToPlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HowToPlayComponent {
    constructor() { }
    ngOnInit() {
    }
}
HowToPlayComponent.ɵfac = function HowToPlayComponent_Factory(t) { return new (t || HowToPlayComponent)(); };
HowToPlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HowToPlayComponent, selectors: [["app-how-to-play"]], decls: 75, vars: 0, consts: [[2, "margin-bottom", "0px"], ["src", "../how-to-play/images/JoinGame.jpg"], ["src", "/images/Meeting.jpg"], ["src", "/images/CurrentPlayersReady.jpg"], ["src", "/images/Teams.jpg"], ["src", "/images/Question.jpg"], ["src", "/images/Buzzer.jpg"], ["src", "/images/Timer.jpg"], ["src", "/images/TeamChat.jpg"]], template: function HowToPlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How To Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First, are you the host or a player? If you are a player, keep reading for instructions. If you are the host, scroll to the \"How to Host\" section.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Joining the Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Your host will have either sent you a link or given you a code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "If you have the URL, just paste it in your browser and it will take you straight to the game!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "If you have the game pin, go to the homepage and type it into the box shown below and enter your display name (this is the name you wil play as)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Then click join");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Game Waiting Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Once you have joined the game you will be taken to the game waiting room. Here you need to join the video call on the left hand side, your display name should be saved if you entered it previously.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "The video call will remain in place throughout, so you can chat with players at any time. The host may mute you during game play so beware!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "You can change your audio and video settings like any other video call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Your name should then appear in the current players box, here you can see who else is in the game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "The game cannot start until all players declare themselves as ready. So, when you are ready to play, click the \"Ready\" button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\nangular-src\\src\\app\\components\\how-to-play\\images\nangular-src\\src\\app\\components\\how-to-play\\images\nD:\\mean-pub-quiz\\angular-src\\src\\app\\components\\how-to-play\\images\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Now you just need to wait for the host to start the game!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Playing the Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "The host will have decided what features they wish to include in the game, so not all of these may appear for you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "You will be randomly split into teams and you will be able to see who is in your team when the game begins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "The reconnect code is important! It is how you will rejoin the game if you get disconnected, write it down!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "You will see the question, answer and the points it is worth.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Buzzer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "The buzzer is for your team, and will be the colour of your team. Press it if you know the answer!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "The timer will countdown to give you time to answer the question.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Team Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "The interteam chat means you can privately communicate with those in your team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "How to Host");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "First, enter your display name and create the game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Then, join the video call meeting on the left hand side of the screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Now, confirm yourself as the host.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Now you can set your game settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Game Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "You can customise how you want to play the game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3ctdG8tcGxheS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "IzU1":
/*!****************************************************!*\
  !*** ./src/app/services/chat-socket-io.service.ts ***!
  \****************************************************/
/*! exports provided: ChatSocketIOService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSocketIOService", function() { return ChatSocketIOService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_socketio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/socketio.service */ "O0qW");



class ChatSocketIOService {
    constructor(socketioService) {
        this.socketioService = socketioService;
    }
    ngOnInit() {
        this.socket = this.socketioService.getSocket();
        this.roomPin = this.socketioService.getRoomPin();
    }
    chatMessage(roomPin, message, player) {
        this.socket.emit('chatMessage', { gameId: roomPin, message: message, player: player });
    }
    receiveChatMessage() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('chatMessage', (message) => {
                observer.next(message);
            });
        });
    }
}
ChatSocketIOService.ɵfac = function ChatSocketIOService_Factory(t) { return new (t || ChatSocketIOService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_socketio_service__WEBPACK_IMPORTED_MODULE_2__["SocketioService"])); };
ChatSocketIOService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChatSocketIOService, factory: ChatSocketIOService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SocketioService {
    constructor() { }
    getSocket() {
        return this.socket;
    }
    getRoomPin() {
        return this.roomPin;
    }
    connect(roomPin) {
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_1__["io"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SOCKET_ENDPOINT);
        this.roomPin = roomPin;
    }
    joinGame(roomPin, playerData) {
        this.socket.emit('joinGame', { gameId: roomPin, playerData: playerData });
    }
    playerReady(roomPin, playerData) {
        this.socket.emit('playerReady', { gameId: roomPin, playerData: playerData });
    }
    beginGame(roomPin, playerData, hostDetails) {
        this.socket.emit('startGame', { gameId: roomPin, playerData: playerData, hostDetails: hostDetails });
    }
    startRound(roomPin, round) {
        this.socket.emit('startRound', { gameId: roomPin, round: round });
    }
    nextRound(roomPin) {
        this.socket.emit('nextRound', { gameId: roomPin });
    }
    nextQuestion(roomPin, questionNumber) {
        this.socket.emit('nextQuestion', { gameId: roomPin, questionNumber: questionNumber });
    }
    showAnswers(roomPin, which) {
        this.socket.emit('showAnswers', { gameId: roomPin, which: which });
    }
    endGamePlay(roomPin) {
        this.socket.emit('endGamePlay', { gameId: roomPin });
    }
    playerLeft(roomPin, playerData) {
        this.socket.emit('playerLeft', { gameId: roomPin, playerData: playerData });
    }
    reset(roomPin, type) {
        this.socket.emit('reset', { gameId: roomPin, type: type });
    }
    endGame(roomPin) {
        this.socket.emit('endGame', { gameId: roomPin });
    }
    setNewHostDetails(roomPin, hostDetails) {
        this.socket.emit('setNewHostDetails', { gameId: roomPin, hostDetails: hostDetails });
    }
    setGameSettings(roomPin, buzzer, timer, timerLength, timerStart) {
        this.socket.emit('setGameSettings', { gameId: roomPin, buzzer: buzzer, timer: timer, timerLength: timerLength, timerStart: timerStart });
    }
    buzzerPressed(roomPin, playerName, playerColour) {
        this.socket.emit('buzzerPressed', { gameId: roomPin, playerName: playerName, playerColour: playerColour });
    }
    claimHost(roomPin) {
        this.socket.emit('claimHost', { gameId: roomPin });
    }
    startTimer(roomPin, startBool) {
        this.socket.emit('startTimer', { gameId: roomPin, startBool: startBool });
    }
    getPreviousJoinedPlayers() {
        this.socket.on('getPreviousJoinedPlayers', (players) => {
            this.previousPlayers = players;
            return this.previousPlayers;
        });
        return this.previousPlayers;
    }
    checkGameBegan() {
        this.socket.on('checkGameBegan', (game) => {
            this.gameBegan = game;
            return this.gameBegan;
        });
        return this.gameBegan;
    }
    rejoinPlayer(roomPin, previousID, currentPlayer) {
        this.socket.emit('rejoinPlayer', { gameId: roomPin, previousID: previousID, currentPlayer: currentPlayer });
    }
    receiveHostDetails() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('getHostDetails', (message) => {
                observer.next(message);
            });
        });
    }
    receiveTeams() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('getTeams', (message) => {
                observer.next(message);
            });
        });
    }
    receiveJoinedPlayers() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('joinGame', (message) => {
                observer.next(message);
            });
        });
    }
    receiveReadyPlayers() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('playerReady', (message) => {
                observer.next(message);
            });
        });
    }
    receiveBeginGame() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('startGame', (message) => {
                observer.next(message);
            });
        });
    }
    receiveGameSettings() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('setGameSettings', (message) => {
                observer.next(message);
            });
        });
    }
    receiveNextQuestion() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('nextQuestion', (message) => {
                observer.next(message);
            });
        });
    }
    receiveStartRound() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('startRound', (message) => {
                observer.next(message);
            });
        });
    }
    receiveNextRound() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('nextRound', (message) => {
                observer.next(message);
            });
        });
    }
    receiveGameBegun() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('checkGameBegan', (message) => {
                observer.next(message);
            });
        });
    }
    receiveEndGame() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('endGame', (message) => {
                observer.next(message);
            });
        });
    }
    receiveReset() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('reset', (message) => {
                observer.next(message);
            });
        });
    }
    receiveClaimHost() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('claimHost', (message) => {
                observer.next(message);
            });
        });
    }
    receiveBuzzerPressed() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('buzzerPressed', (message) => {
                observer.next(message);
            });
        });
    }
    receiveShowAnswers() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('showAnswers', (message) => {
                observer.next(message);
            });
        });
    }
    receiveEndGamePlay() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('endGamePlay', (message) => {
                observer.next(message);
            });
        });
    }
    receiveStartTimer() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.socket.on('startTimer', (message) => {
                observer.next(message);
            });
        });
    }
}
SocketioService.ɵfac = function SocketioService_Factory(t) { return new (t || SocketioService)(); };
SocketioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SocketioService, factory: SocketioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QHW0":
/*!*************************************************************!*\
  !*** ./src/app/components/game-play/game-play.component.ts ***!
  \*************************************************************/
/*! exports provided: GameDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDetailsComponent", function() { return GameDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_socketio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/socketio.service */ "O0qW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_game_creation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/game-creation.service */ "D1//");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _game_chat_game_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../game-chat/game-chat.component */ "wuXx");








function GameDetailsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.logCurrentPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Teams ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_16_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const players_r13 = ctx.$implicit;
    const colours_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.teams[colours_r11][players_r13].displayName, " ");
} }
function GameDetailsComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameDetailsComponent_div_16_div_1_span_3_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colours_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", colours_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", colours_r11, " Team: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.objectKeys(ctx_r10.teams[colours_r11]));
} }
function GameDetailsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameDetailsComponent_div_16_div_1_Template, 4, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.objectKeys(ctx_r1.teams));
} }
function GameDetailsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reconnect Code: ", ctx_r2.currentPlayer.uid, "");
} }
function GameDetailsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Write this down! If you get disconnected, user this unique code to rejoin where you left off: ", ctx_r3.currentPlayer.uid, "");
} }
function GameDetailsComponent_div_19_div_2_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_19_div_2_div_1_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r23.startRound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start Round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_19_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GameDetailsComponent_div_19_div_2_div_1_div_6_Template, 3, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Round ", ctx_r17.currentRound, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" There are ", ctx_r17.numberOfQuestions, " questions in this round ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.host);
} }
function GameDetailsComponent_div_19_div_2_div_2_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 48);
} }
function GameDetailsComponent_div_19_div_2_div_2_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_19_div_2_div_2_div_9_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r33.previousQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_19_div_2_div_2_div_9_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_19_div_2_div_2_div_9_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r35.nextQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_19_div_2_div_2_div_9_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_19_div_2_div_2_div_9_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r37.nextRound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next Round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_19_div_2_div_2_div_9_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_19_div_2_div_2_div_9_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r39.endGamePlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "End Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_19_div_2_div_2_div_9_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_19_div_2_div_2_div_9_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r41.showAnswers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Round ", ctx_r31.currentRound, " Answers");
} }
function GameDetailsComponent_div_19_div_2_div_2_div_9_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_19_div_2_div_2_div_9_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r43.showAllAnswers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show All Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_19_div_2_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameDetailsComponent_div_19_div_2_div_2_div_9_div_2_Template, 1, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameDetailsComponent_div_19_div_2_div_2_div_9_div_3_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameDetailsComponent_div_19_div_2_div_2_div_9_div_4_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameDetailsComponent_div_19_div_2_div_2_div_9_div_5_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GameDetailsComponent_div_19_div_2_div_2_div_9_div_6_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GameDetailsComponent_div_19_div_2_div_2_div_9_div_8_Template, 3, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GameDetailsComponent_div_19_div_2_div_2_div_9_div_9_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.firstQuestionBool);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r25.firstQuestionBool);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r25.lastQuestionBool);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.lastQuestionBool && !ctx_r25.lastRoundBool);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.lastQuestionBool && ctx_r25.lastRoundBool);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.lastQuestionBool);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.lastQuestionBool && ctx_r25.lastRoundBool && !ctx_r25.showAllAnswersBool);
} }
function GameDetailsComponent_div_19_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GameDetailsComponent_div_19_div_2_div_2_div_9_Template, 10, 7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Round ", ctx_r18.currentRound, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Question ", ctx_r18.currentQuestion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r18.questionObject[ctx_r18.currentRound][ctx_r18.currentQuestion].question, " (", ctx_r18.questionObject[ctx_r18.currentRound][ctx_r18.currentQuestion].points, " points)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.host);
} }
function GameDetailsComponent_div_19_div_2_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_19_div_2_div_3_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r46.startRound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_19_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GameDetailsComponent_div_19_div_2_div_3_div_6_Template, 3, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Round ", ctx_r19.currentRound, " Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" There are ", ctx_r19.numberOfQuestions, " answers in this round ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.host);
} }
function GameDetailsComponent_div_19_div_2_div_4_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_19_div_2_div_4_div_11_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r54.previousQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_19_div_2_div_4_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_19_div_2_div_4_div_11_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r56.nextQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_19_div_2_div_4_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_19_div_2_div_4_div_11_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r58.nextRound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next Round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_19_div_2_div_4_div_11_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_19_div_2_div_4_div_11_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r60.showAllAnswers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show All Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_19_div_2_div_4_div_11_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_19_div_2_div_4_div_11_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r62.endGamePlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "End Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_19_div_2_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameDetailsComponent_div_19_div_2_div_4_div_11_div_1_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameDetailsComponent_div_19_div_2_div_4_div_11_div_2_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameDetailsComponent_div_19_div_2_div_4_div_11_div_3_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameDetailsComponent_div_19_div_2_div_4_div_11_div_4_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameDetailsComponent_div_19_div_2_div_4_div_11_div_5_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r48.firstQuestionBool);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r48.lastQuestionBool);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.lastQuestionBool && !ctx_r48.lastRoundBool);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.lastQuestionBool && ctx_r48.lastRoundBool);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.lastQuestionBool && ctx_r48.lastRoundBool);
} }
function GameDetailsComponent_div_19_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GameDetailsComponent_div_19_div_2_div_4_div_11_Template, 6, 5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Round ", ctx_r20.currentRound, " Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Answer ", ctx_r20.currentQuestion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r20.questionObject[ctx_r20.currentRound][ctx_r20.currentQuestion].question, " (", ctx_r20.questionObject[ctx_r20.currentRound][ctx_r20.currentQuestion].points, " points)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.questionObject[ctx_r20.currentRound][ctx_r20.currentQuestion].answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.host);
} }
function GameDetailsComponent_div_19_div_2_div_5_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const questions_r68 = ctx.$implicit;
    const rounds_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Answer ", questions_r68, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r67.questionObject[rounds_r66][questions_r68].question, " (", ctx_r67.questionObject[rounds_r66][questions_r68].points, " points)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r67.questionObject[rounds_r66][questions_r68].answer);
} }
function GameDetailsComponent_div_19_div_2_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameDetailsComponent_div_19_div_2_div_5_div_5_div_3_Template, 7, 4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rounds_r66 = ctx.$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Round ", rounds_r66, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r64.objectKeys(ctx_r64.questionObject[rounds_r66]));
} }
function GameDetailsComponent_div_19_div_2_div_5_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_19_div_2_div_5_div_6_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r71.endGamePlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "End Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_19_div_2_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameDetailsComponent_div_19_div_2_div_5_div_6_div_1_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r65.lastQuestionBool && ctx_r65.lastRoundBool);
} }
function GameDetailsComponent_div_19_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameDetailsComponent_div_19_div_2_div_5_div_5_Template, 4, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GameDetailsComponent_div_19_div_2_div_5_div_6_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.objectKeys(ctx_r21.questionObject));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.host);
} }
function GameDetailsComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameDetailsComponent_div_19_div_2_div_1_Template, 7, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameDetailsComponent_div_19_div_2_div_2_Template, 10, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameDetailsComponent_div_19_div_2_div_3_Template, 7, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameDetailsComponent_div_19_div_2_div_4_Template, 12, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameDetailsComponent_div_19_div_2_div_5_Template, 7, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.currentQuestion === 0 && !ctx_r15.showAllAnswersBool && !ctx_r15.showAnswersBool);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.currentQuestion > 0 && !ctx_r15.showAllAnswersBool && !ctx_r15.showAnswersBool);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.showAnswersBool && !ctx_r15.showAllAnswersBool && ctx_r15.currentQuestion === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.showAnswersBool && ctx_r15.currentQuestion > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.showAllAnswersBool);
} }
function GameDetailsComponent_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "End Of Game!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameDetailsComponent_div_19_div_2_Template, 6, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameDetailsComponent_div_19_div_3_Template, 3, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.endOfGame);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.endOfGame);
} }
function GameDetailsComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_20_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r77.buzzerPressed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Team Buzzer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("btn shadow", ctx_r73.playerColour, " ", ctx_r73.playerColour, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r73.buzzerPress ? "buzzerClicked" : "buzzer");
} }
function GameDetailsComponent_div_20_div_2_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_20_div_2_div_6_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r82.startTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("material-icons color", ctx_r80.playerColour, "");
} }
function GameDetailsComponent_div_20_div_2_div_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_20_div_2_div_6_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r84.stopTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("material-icons color", ctx_r81.playerColour, "");
} }
function GameDetailsComponent_div_20_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameDetailsComponent_div_20_div_2_div_6_button_1_Template, 3, 3, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameDetailsComponent_div_20_div_2_div_6_button_2_Template, 3, 3, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r79.timerStarted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r79.timerStarted);
} }
function GameDetailsComponent_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GameDetailsComponent_div_20_div_2_div_6_Template, 3, 2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"](" card border outline", ctx_r74.playerColour, " mb-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col color", ctx_r74.playerColour, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r74.timerLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r74.host);
} }
function GameDetailsComponent_div_20_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_20_div_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r89.onResetBuzzer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reset Buzzer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn ", ctx_r86.playerColour, "");
} }
function GameDetailsComponent_div_20_div_3_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_20_div_3_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r91.onResetTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reset Timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn ", ctx_r87.playerColour, "");
} }
function GameDetailsComponent_div_20_div_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_div_20_div_3_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r93.onReset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reset All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn ", ctx_r88.playerColour, "");
} }
function GameDetailsComponent_div_20_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameDetailsComponent_div_20_div_3_button_1_Template, 2, 3, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameDetailsComponent_div_20_div_3_button_2_Template, 2, 3, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameDetailsComponent_div_20_div_3_button_3_Template, 2, 3, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r75.buzzerEnabled && ctx_r75.showBuzzer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r75.timerEnabled && ctx_r75.showTimer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r75.timerEnabled && ctx_r75.showTimer && ctx_r75.buzzerEnabled && ctx_r75.showBuzzer);
} }
function GameDetailsComponent_div_20_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("row color", ctx_r76.buzzerDetails.colour, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r76.buzzerDetails.displayName, " pressed the buzzer for the ", ctx_r76.buzzerDetails.colour, " team!");
} }
function GameDetailsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameDetailsComponent_div_20_div_1_Template, 3, 5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameDetailsComponent_div_20_div_2_Template, 7, 8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameDetailsComponent_div_20_div_3_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameDetailsComponent_div_20_div_4_Template, 2, 5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.buzzerEnabled && ctx_r5.showBuzzer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.timerEnabled && ctx_r5.showTimer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.host);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.buzzerPress);
} }
function GameDetailsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-game-chat", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx_r6.currentPlayer);
} }
function GameDetailsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-game-chat", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx_r7.currentPlayer);
} }
class GameDetailsComponent {
    constructor(socketioService, router, actRoute, gameCreationService) {
        this.socketioService = socketioService;
        this.router = router;
        this.actRoute = actRoute;
        this.gameCreationService = gameCreationService;
        this.objectKeys = Object.keys;
        this.buzzerPress = false;
        this.currentQuestion = 0;
        this.timerLength = 30;
        this.lastRoundBool = false;
        this.nextRoundBool = false;
        this.showAllAnswersBool = false;
        this.lastQuestionBool = false;
        this.showAnswersBool = false;
        this.endOfGame = false;
        this.buzzerEnabled = true;
        this.timerEnabled = true;
        this.currentTimer = 0;
    }
    ngOnInit() {
        // set listeners 
        this.receiveBuzzerPressed();
        this.receiveNextQuestion();
        this.receiveStartRound();
        this.receiveNextRound();
        this.receiveEndGamePlay();
        this.receiveShowAnswers();
        this.receiveReset();
        this.receiveGameSettings();
        this.receiveStartTimer();
        this.gameCreationService.getQuestions(this.roomPin).subscribe((data) => {
            this.questionObject = data.questions;
            if (this.questionObject === undefined) {
                this.showQuestions = false;
                this.showBuzzer = true;
                this.showTimer = true;
            }
            else {
                this.showQuestions = true;
                this.showBuzzer = false;
                this.showTimer = false;
                if (this.objectKeys(this.questionObject).length > 0) {
                    this.currentRound = 1;
                    this.firstQuestionBool = true;
                    this.firstRoundBool = true;
                    this.numberOfRounds = this.objectKeys(this.questionObject).length;
                    this.numberOfQuestions = this.objectKeys(this.questionObject[this.currentRound]).length;
                }
            }
        });
    }
    ngAfterViewInit() {
        this.teamNumber = this.hostDetails.teamNumber;
        this.currentPlayer = this.player;
        if (!(this.currentPlayer.colour === undefined)) {
            this.playerColour = this.currentPlayer.colour;
        }
        setTimeout(() => {
            this.gameCreationService.getPlayers(this.roomPin).subscribe((data) => {
                this.participantArray = data.players;
                //is if needed?
                if (!(this.participantArray[this.currentPlayer.id] === undefined)) {
                    this.currentPlayer = this.participantArray[this.currentPlayer.id];
                }
            });
            for (let colour of this.objectKeys(this.teams)) {
                document.getElementById(colour).style.color = colour;
                for (let player of this.objectKeys(this.teams[colour])) {
                    if (this.currentPlayer.id === this.teams[colour][player].id) {
                        this.playerColour = colour;
                        this.currentPlayer.colour = colour;
                    }
                }
            }
            if (this.hostDetails.id === this.currentPlayer.id) {
                this.host = true;
                if (!this.hostDetails.include) {
                    this.playerColour = "Darkgoldenrod";
                    this.currentPlayer.colour = "Darkgoldenrod";
                }
            }
            if (this.teams) {
                document.getElementById('teamButton').click();
            }
        }, 500);
    }
    receiveBuzzerPressed() {
        this.socketioService.receiveBuzzerPressed().subscribe((player) => {
            let element = document.getElementById('buzzer');
            element.disabled = true;
            this.buzzerDetails = player;
            this.buzzerPress = true;
        });
    }
    buzzerPressed() {
        this.socketioService.buzzerPressed(this.roomPin, this.currentPlayer.displayName, this.playerColour);
    }
    saveSettings() {
        let buzzerElement = document.getElementById('buzzerToggle');
        let timerElement = document.getElementById('timerToggle');
        let hostElement = document.getElementById('hostToggle');
        let timerLengthElement = document.getElementById('timerLength');
        let timerAutoStartElement = document.getElementById('timerStart');
        if (hostElement.checked === true) {
            this.currentPlayer.host = true;
            this.socketioService.setNewHostDetails(this.roomPin, this.currentPlayer);
        }
        this.socketioService.setGameSettings(this.roomPin, buzzerElement.checked, timerElement.checked, timerLengthElement.value, timerAutoStartElement.checked);
    }
    startRound() {
        this.socketioService.startRound(this.roomPin, this.currentRound);
    }
    endGamePlay() {
        this.socketioService.endGamePlay(this.roomPin);
    }
    nextRound() {
        this.socketioService.nextRound(this.roomPin);
    }
    showAnswers() {
        this.socketioService.showAnswers(this.roomPin, 'one');
    }
    showAllAnswers() {
        this.socketioService.showAnswers(this.roomPin, 'all');
    }
    previousQuestion() {
        this.currentQuestion -= 1;
        this.socketioService.nextQuestion(this.roomPin, this.currentQuestion);
    }
    nextQuestion() {
        this.currentQuestion += 1;
        this.socketioService.nextQuestion(this.roomPin, this.currentQuestion);
    }
    receiveNextQuestion() {
        this.socketioService.receiveNextQuestion().subscribe((data) => {
            this.currentQuestion = data;
            console.log('in NQ');
            if (this.currentQuestion + 1 <= this.objectKeys(this.questionObject[this.currentRound]).length) {
                this.lastQuestionBool = false;
            }
            else {
                this.lastQuestionBool = true;
            }
            if (this.currentQuestion > 1) {
                this.firstQuestionBool = false;
            }
            else {
                this.firstQuestionBool = true;
            }
            this.reset();
            if (this.timerAutoStart && !this.timerStarted) {
                clearInterval(this.interVal);
                this.currentTimer = this.timerLength;
                this.startTimer();
            }
        });
    }
    startTimer() {
        this.socketioService.startTimer(this.roomPin, true);
    }
    stopTimer() {
        this.socketioService.startTimer(this.roomPin, false);
    }
    receiveStartRound() {
        this.socketioService.receiveStartRound().subscribe((data) => {
            console.log('Start Round');
            this.currentRound = data;
            if (this.currentRound + 1 <= this.objectKeys(this.questionObject).length) {
                this.lastRoundBool = false;
            }
            else {
                this.lastRoundBool = true;
            }
            this.currentQuestion = 1;
            this.firstQuestionBool = true;
            if (this.currentQuestion + 1 <= this.objectKeys(this.questionObject[this.currentRound]).length) {
                this.lastQuestionBool = false;
            }
            else {
                this.lastQuestionBool = true;
            }
            this.reset();
            if (this.showAllAnswersBool || this.showAnswersBool) {
                this.showBuzzer = false;
                this.showTimer = false;
            }
            else {
                this.showBuzzer = true;
                this.showTimer = true;
                this.buzzerPress = false;
            }
            if (this.timerEnabled && this.showTimer && (!document.getElementById('timer') === null)) {
                // if (this.timerEnabled && this.showTimer){
                document.getElementById('timer').innerHTML = this.timerLength + '';
            }
            if (this.timerAutoStart && !this.timerStarted) {
                //shouldnt need these 2 as in reset();
                clearInterval(this.interVal);
                this.currentTimer = this.timerLength;
                this.startTimer();
            }
        });
    }
    logCurrentPlayer() {
        console.log(this.currentPlayer);
    }
    reset() {
        console.log('RESET', this.timerStarted);
        if (this.timerEnabled) {
            console.log('TimerEnabled');
            //shouldnt need these 2 but ok for now (in stop timer)
            clearInterval(this.interVal);
            this.timerStarted = false;
            this.stopTimer();
            this.currentTimer = this.timerLength;
            if (this.showTimer) {
                console.log('SHOWTIMER');
                document.getElementById('timer').innerHTML = this.timerLength + '';
            }
        }
        if (this.buzzerEnabled && this.showBuzzer) {
            let element = document.getElementById('buzzer');
            element.disabled = false;
            this.buzzerPress = false;
        }
    }
    receiveNextRound() {
        this.socketioService.receiveNextRound().subscribe((data) => {
            console.log('NR');
            this.lastQuestionBool = false;
            this.currentQuestion = 0;
            this.currentRound += 1;
            this.showAnswersBool = false;
            this.numberOfQuestions = this.objectKeys(this.questionObject[this.currentRound]).length;
            let element = document.getElementById('buzzer');
            if (!(this.showAllAnswersBool || this.showAnswersBool)) {
                element.disabled = false;
                this.buzzerPress = false;
            }
            this.reset();
            this.showTimer = false;
            this.showBuzzer = false;
        });
    }
    receiveEndGamePlay() {
        this.socketioService.receiveEndGamePlay().subscribe((data) => {
            this.endOfGame = true;
            clearInterval(this.interVal);
        });
    }
    receiveShowAnswers() {
        this.socketioService.receiveShowAnswers().subscribe((data) => {
            if (data === 'one') {
                this.showAnswersBool = true;
            }
            else if (data === 'all') {
                this.showAllAnswersBool = true;
                this.showAnswersBool = false;
            }
            clearInterval(this.interVal);
            this.currentQuestion = 0;
            this.showBuzzer = false;
            this.showTimer = false;
        });
    }
    receiveReset() {
        this.socketioService.receiveReset().subscribe((data) => {
            if (data === 'both') {
                this.reset();
            }
            else if (data === 't') {
                clearInterval(this.interVal);
                document.getElementById('timer').innerHTML = this.timerLength + '';
                this.currentTimer = this.timerLength;
                this.timerStarted = false;
            }
            else if (data === 'b') {
                let element = document.getElementById('buzzer');
                element.disabled = false;
                this.buzzerPress = false;
            }
        });
    }
    onReset() {
        this.socketioService.reset(this.roomPin, 'both');
    }
    onResetTimer() {
        this.socketioService.reset(this.roomPin, 't');
    }
    onResetBuzzer() {
        this.socketioService.reset(this.roomPin, 'b');
    }
    receiveGameSettings() {
        this.socketioService.receiveGameSettings().subscribe((data) => {
            this.buzzerEnabled = data.buzzer;
            this.timerEnabled = data.timer;
            this.timerAutoStart = data.timerStart;
            this.timerLength = (parseFloat(data.timerLength) * 60);
        });
    }
    receiveStartTimer() {
        this.socketioService.receiveStartTimer().subscribe((data) => {
            if (data) {
                console.log('STARTTIMER');
                this.timerStarted = true;
                if (this.currentTimer < 1) {
                    this.currentTimer = this.timerLength;
                }
                this.interVal = setInterval(() => {
                    console.log('interval CT', this.currentTimer);
                    this.currentTimer -= 1;
                    document.getElementById('timer').style.fontFamily = "Cabin Sketch";
                    document.getElementById('timer').style.fontWeight = "500";
                    document.getElementById('timer').style.fontSize = "xx-large";
                    document.getElementById('timer').innerHTML = this.currentTimer + '';
                    if (this.currentTimer < 1) {
                        console.log('CT<1', this.currentTimer);
                        this.timerStarted = false;
                        clearInterval(this.interVal);
                    }
                }, 1000);
            }
            else {
                console.log('STOPTIMER');
                this.timerStarted = false;
                clearInterval(this.interVal);
            }
        });
    }
}
GameDetailsComponent.ɵfac = function GameDetailsComponent_Factory(t) { return new (t || GameDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socketio_service__WEBPACK_IMPORTED_MODULE_1__["SocketioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_creation_service__WEBPACK_IMPORTED_MODULE_3__["GameCreationService"])); };
GameDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameDetailsComponent, selectors: [["app-game-play"]], inputs: { roomPin: "roomPin", hostDetails: "hostDetails", player: "player", teams: "teams" }, decls: 61, vars: 9, consts: [[1, "row"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#settingsModal", "aria-hidden", "false"], ["style", "padding-bottom: 5px;", "class", "col", 4, "ngIf"], ["id", "teamsModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [2, "color", "darkgoldenrod"], [4, "ngIf"], ["class", "modal-header", 4, "ngIf"], ["class", "modal-body", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["data-bs-backdrop", "static", "id", "settingsModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "mb-3"], [1, "custom-control", "custom-switch"], ["type", "checkbox", "id", "hostToggle", 1, "custom-control-input"], ["for", "hostToggle", 1, "custom-control-label"], ["type", "checkbox", "id", "buzzerToggle", "checked", "", 1, "custom-control-input"], ["for", "buzzerToggle", 1, "custom-control-label"], ["type", "checkbox", "id", "timerToggle", "checked", "", 1, "custom-control-input"], ["for", "timerToggle", 1, "custom-control-label"], ["for", "timerLength", 1, "form-label"], ["type", "range", "data-value", "0.5", "min", "0", "max", "5", "step", "0.5", "value", "timerLength", "id", "timerLength", 1, "form-range"], ["type", "checkbox", "id", "timerStart", 1, "custom-control-input"], ["for", "timerStart", 1, "custom-control-label"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "col", 2, "padding-bottom", "5px"], ["id", "teamButton", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#teamsModal", 1, "btn", "btn-primary", "roundButton", 3, "click"], [4, "ngFor", "ngForOf"], [1, "col", 2, "padding-left", "0px", "margin-bottom", "0px", 3, "id"], [1, "card", "border-primary", "mb-3", 2, "width", "100%", "margin", "0px", "padding", "0px"], [1, "card-header", "roundHeader"], [1, "roundTitle"], [1, "card-body", "roundBody"], ["class", "card-footer roundFooter colButton", 4, "ngIf"], [1, "card-footer", "roundFooter", "colButton"], ["type", "button", 1, "btn", "btn-secondary", "roundButton", 3, "click"], [2, "margin", "0px"], ["class", "card-footer roundFooter", 4, "ngIf"], [1, "card-footer", "roundFooter"], [1, "row", 2, "margin", "0px"], ["class", "col colButton", 4, "ngIf"], [1, "col", "colButton"], ["style", "margin:0px", "class", "card-footer roundFooter row ", 4, "ngIf"], [1, "card-footer", "roundFooter", "row", 2, "margin", "0px"], [1, "card-body", "roundBody", "scroll"], ["class", "col", 4, "ngIf"], ["style", "padding-left:15px; padding-bottom: 5px;", "id", "buzzerDetails", 3, "class", 4, "ngIf"], [1, "col"], ["type", "button", "id", "buzzer", 3, "ngClass", "click"], [2, "max-width", "100px", "max-height", "50px"], ["id", "timer", 2, "padding-right", "0px"], ["class", "col", "id", "", "style", "padding-left: 0px;", 4, "ngIf"], ["id", "", 1, "col", 2, "padding-left", "0px"], ["class", "btn", "type", "button", "style", "padding:0px", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", 2, "padding", "0px", 3, "click"], [2, "font-size", "40px"], [3, "class", "click", 4, "ngIf"], [3, "click"], ["id", "buzzerDetails", 2, "padding-left", "15px", "padding-bottom", "5px"], [3, "player"]], template: function GameDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Game Play ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameDetailsComponent_div_5_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GameDetailsComponent_div_16_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GameDetailsComponent_div_17_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GameDetailsComponent_div_18_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GameDetailsComponent_div_19_Template, 4, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GameDetailsComponent_div_20_Template, 5, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GameDetailsComponent_div_21_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GameDetailsComponent_div_22_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Game Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Claim Host");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Include Buzzer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Include Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Timer Length (Mins)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Autostart Timer on New Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameDetailsComponent_Template_button_click_59_listener() { return ctx.saveSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Save Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.teams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Host: ", ctx.hostDetails.displayName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.teams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPlayer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPlayer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showQuestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.endOfGame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPlayer && !ctx.host);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPlayer && ctx.host && ctx.hostDetails.include);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _game_chat_game_chat_component__WEBPACK_IMPORTED_MODULE_7__["GameChatComponent"]], styles: [".buzzer[_ngcontent-%COMP%]{\r\n    border-radius: 16px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.buzzerClicked[_ngcontent-%COMP%]{\r\n    border-radius: 16px;\r\n    box-shadow: 0 0px !important;\r\n    transform: translateY(4px);\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.scroll[_ngcontent-%COMP%]{\r\n    max-height: 100px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.roundHeader[_ngcontent-%COMP%]{\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 10px;\r\n    margin: 0px;\r\n}\r\n\r\n.roundFooter[_ngcontent-%COMP%]{\r\n  padding:0px  \r\n}\r\n\r\n.roundBody[_ngcontent-%COMP%]{\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.roundButton[_ngcontent-%COMP%]{\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n.roundTitle[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n}\r\n\r\n.colButton[_ngcontent-%COMP%]{\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.Darkgoldenrod[_ngcontent-%COMP%] {\r\n    background-color: darkgoldenrod !important;\r\n    color: white !important;\r\n}\r\n\r\n.outlineDarkgoldenrod[_ngcontent-%COMP%]{\r\n    border-color: darkgoldenrod  !important;\r\n}\r\n\r\n.colorDarkgoldenrod[_ngcontent-%COMP%]{\r\n    color:darkgoldenrod  !important;\r\n}\r\n\r\n.backgroundDarkgoldenrod[_ngcontent-%COMP%]{\r\n    background-color: rgb(192, 160, 79)  !important;\r\n}\r\n\r\n.shadowDarkgoldenrod[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px rgb(192, 160, 79);\r\n}\r\n\r\n.Red[_ngcontent-%COMP%] {\r\n    background-color: crimson !important;\r\n    color: white !important;\r\n}\r\n\r\n.outlineRed[_ngcontent-%COMP%]{\r\n    border-color: crimson  !important;\r\n}\r\n\r\n.colorRed[_ngcontent-%COMP%]{\r\n    color:crimson  !important;\r\n}\r\n\r\n.backgroundRed[_ngcontent-%COMP%]{\r\n    background-color: #ffc6d180  !important;\r\n}\r\n\r\n.shadowRed[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #ffc6d180;\r\n}\r\n\r\n.Green[_ngcontent-%COMP%] {\r\n    background-color: darkgreen !important;\r\n    color: white !important;\r\n}\r\n\r\n.outlineGreen[_ngcontent-%COMP%]{\r\n    border-color: darkgreen  !important;\r\n}\r\n\r\n.colorGreen[_ngcontent-%COMP%]{\r\n    color:darkgreen  !important;\r\n}\r\n\r\n.backgroundGreen[_ngcontent-%COMP%]{\r\n    background-color: #8ab88a  !important;\r\n}\r\n\r\n.shadowGreen[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #8ab88a;\r\n}\r\n\r\n.Blue[_ngcontent-%COMP%] {\r\n    background-color: royalblue !important;\r\n    color: white !important;\r\n}\r\n\r\n.outlineBlue[_ngcontent-%COMP%]{\r\n    border-color: royalblue  !important;\r\n}\r\n\r\n.colorBlue[_ngcontent-%COMP%]{\r\n    color:royalblue  !important;\r\n}\r\n\r\n.backgroundBlue[_ngcontent-%COMP%]{\r\n    background-color:#4169e17d  !important;\r\n}\r\n\r\n.shadowBlue[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #4169e17d;\r\n}\r\n\r\n.Orange[_ngcontent-%COMP%] {\r\n    background-color: darkorange !important;\r\n    color: white !important;\r\n}\r\n\r\n.outlineOrange[_ngcontent-%COMP%]{\r\n    border-color: darkorange  !important;\r\n}\r\n\r\n.colorOrange[_ngcontent-%COMP%]{\r\n    color:darkorange  !important;\r\n}\r\n\r\n.backgroundOrange[_ngcontent-%COMP%]{\r\n    background-color: #ff8c0052  !important;\r\n}\r\n\r\n.shadowOrange[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #ff8c0052;\r\n}\r\n\r\n.Purple[_ngcontent-%COMP%] {\r\n    background-color: darkorchid !important;\r\n    color: white !important;\r\n}\r\n\r\n.outlinePurple[_ngcontent-%COMP%]{\r\n    border-color: darkorchid  !important;\r\n}\r\n\r\n.colorPurple[_ngcontent-%COMP%]{\r\n    color:darkorchid  !important;\r\n}\r\n\r\n.backgroundPurple[_ngcontent-%COMP%]{\r\n    background-color: #9932cc52  !important;\r\n}\r\n\r\n.shadowPurple[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #9932cc52;\r\n}\r\n\r\n.Pink[_ngcontent-%COMP%] {\r\n    background-color: hotpink !important;\r\n    color: white !important;\r\n}\r\n\r\n.outlinePink[_ngcontent-%COMP%]{\r\n    border-color: hotpink  !important;\r\n}\r\n\r\n.colorPink[_ngcontent-%COMP%]{\r\n    color:hotpink  !important;\r\n}\r\n\r\n.backgroundPink[_ngcontent-%COMP%]{\r\n    background-color: #ff69b45e !important;\r\n}\r\n\r\n.shadowPink[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #ff69b45e;\r\n}\r\n\r\n.Yellow[_ngcontent-%COMP%] {\r\n    background-color: gold !important;\r\n    color: white !important;\r\n}\r\n\r\n.outlineYellow[_ngcontent-%COMP%]{\r\n    border-color: gold  !important;\r\n}\r\n\r\n.colorYellow[_ngcontent-%COMP%]{\r\n    color:gold  !important;\r\n}\r\n\r\n.backgroundYellow[_ngcontent-%COMP%]{\r\n    background-color:#ffd70061  !important;\r\n}\r\n\r\n.shadowYellow[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #ffd70061;\r\n}\r\n\r\n.Brown[_ngcontent-%COMP%] {\r\n    background-color: brown !important;\r\n    color: white !important;\r\n}\r\n\r\n.outlineBrown[_ngcontent-%COMP%]{\r\n    border-color: brown  !important;\r\n}\r\n\r\n.colorBrown[_ngcontent-%COMP%]{\r\n    color:brown  !important;\r\n}\r\n\r\n.backgroundBrown[_ngcontent-%COMP%]{\r\n    background-color: #a52a2a75  !important;\r\n}\r\n\r\n.shadowBrown[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #a52a2a75;\r\n}\r\n\r\n.Grey[_ngcontent-%COMP%] {\r\n    background-color: darkgrey !important;\r\n    color: white !important;\r\n}\r\n\r\n.outlineGrey[_ngcontent-%COMP%]{\r\n    border-color: darkgrey  !important;\r\n}\r\n\r\n.colorGrey[_ngcontent-%COMP%]{\r\n    color:darkgrey  !important;\r\n}\r\n\r\n.backgroundGrey[_ngcontent-%COMP%]{\r\n    background-color: #a9a9a96e !important;\r\n}\r\n\r\n.shadowGrey[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #a9a9a96e;\r\n}\r\n\r\n.Black[_ngcontent-%COMP%] {\r\n    background-color: black !important;\r\n    color: white !important;\r\n}\r\n\r\n.outlineBlack[_ngcontent-%COMP%]{\r\n    border-color: black  !important;\r\n}\r\n\r\n.colorBlack[_ngcontent-%COMP%]{\r\n    color:black  !important;\r\n}\r\n\r\n.backgroundBlack[_ngcontent-%COMP%]{\r\n    background-color: #0000006b !important;\r\n}\r\n\r\n.shadowBlack[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #0000006b;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7RUFDRTtBQUNGOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUdBO0lBQ0ksMENBQTBDO0lBQzFDLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFDQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFDQTtJQUNJLCtDQUErQztBQUNuRDs7QUFDQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUNBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFDQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoiZ2FtZS1wbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV6emVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5idXp6ZXJDbGlja2Vke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zY3JvbGx7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLnJvdW5kSGVhZGVye1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnJvdW5kRm9vdGVye1xyXG4gIHBhZGRpbmc6MHB4ICBcclxufVxyXG4ucm91bmRCb2R5e1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucm91bmRCdXR0b257XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ucm91bmRUaXRsZXtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uY29sQnV0dG9ue1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuXHJcbi5EYXJrZ29sZGVucm9kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2QgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5vdXRsaW5lRGFya2dvbGRlbnJvZHtcclxuICAgIGJvcmRlci1jb2xvcjogZGFya2dvbGRlbnJvZCAgIWltcG9ydGFudDtcclxufVxyXG4uY29sb3JEYXJrZ29sZGVucm9ke1xyXG4gICAgY29sb3I6ZGFya2dvbGRlbnJvZCAgIWltcG9ydGFudDtcclxufVxyXG4uYmFja2dyb3VuZERhcmtnb2xkZW5yb2R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAxNjAsIDc5KSAgIWltcG9ydGFudDtcclxufVxyXG4uc2hhZG93RGFya2dvbGRlbnJvZHtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IHJnYigxOTIsIDE2MCwgNzkpO1xyXG59XHJcblxyXG4uUmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb24gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5vdXRsaW5lUmVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBjcmltc29uICAhaW1wb3J0YW50O1xyXG59XHJcbi5jb2xvclJlZHtcclxuICAgIGNvbG9yOmNyaW1zb24gICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2tncm91bmRSZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNmQxODAgICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNoYWRvd1JlZHtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICNmZmM2ZDE4MDtcclxufVxyXG5cclxuLkdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm91dGxpbmVHcmVlbntcclxuICAgIGJvcmRlci1jb2xvcjogZGFya2dyZWVuICAhaW1wb3J0YW50O1xyXG59XHJcbi5jb2xvckdyZWVue1xyXG4gICAgY29sb3I6ZGFya2dyZWVuICAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWNrZ3JvdW5kR3JlZW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGFiODhhICAhaW1wb3J0YW50O1xyXG59XHJcbi5zaGFkb3dHcmVlbntcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM4YWI4OGE7XHJcbn1cclxuXHJcbi5CbHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm91dGxpbmVCbHVle1xyXG4gICAgYm9yZGVyLWNvbG9yOiByb3lhbGJsdWUgICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yQmx1ZXtcclxuICAgIGNvbG9yOnJveWFsYmx1ZSAgIWltcG9ydGFudDtcclxufVxyXG4uYmFja2dyb3VuZEJsdWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0MTY5ZTE3ZCAgIWltcG9ydGFudDtcclxufVxyXG4uc2hhZG93Qmx1ZXtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM0MTY5ZTE3ZDtcclxufVxyXG5cclxuLk9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ub3V0bGluZU9yYW5nZXtcclxuICAgIGJvcmRlci1jb2xvcjogZGFya29yYW5nZSAgIWltcG9ydGFudDtcclxufVxyXG4uY29sb3JPcmFuZ2V7XHJcbiAgICBjb2xvcjpkYXJrb3JhbmdlICAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWNrZ3JvdW5kT3Jhbmdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGMwMDUyICAhaW1wb3J0YW50O1xyXG59XHJcbi5zaGFkb3dPcmFuZ2V7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAjZmY4YzAwNTI7XHJcbn1cclxuXHJcbi5QdXJwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yY2hpZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm91dGxpbmVQdXJwbGV7XHJcbiAgICBib3JkZXItY29sb3I6IGRhcmtvcmNoaWQgICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yUHVycGxle1xyXG4gICAgY29sb3I6ZGFya29yY2hpZCAgIWltcG9ydGFudDtcclxufVxyXG4uYmFja2dyb3VuZFB1cnBsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTMyY2M1MiAgIWltcG9ydGFudDtcclxufVxyXG4uc2hhZG93UHVycGxle1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggIzk5MzJjYzUyO1xyXG59XHJcblxyXG4uUGluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ub3V0bGluZVBpbmt7XHJcbiAgICBib3JkZXItY29sb3I6IGhvdHBpbmsgICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yUGlua3tcclxuICAgIGNvbG9yOmhvdHBpbmsgICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2tncm91bmRQaW5re1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjliNDVlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNoYWRvd1Bpbmt7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAjZmY2OWI0NWU7XHJcbn1cclxuXHJcbi5ZZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm91dGxpbmVZZWxsb3d7XHJcbiAgICBib3JkZXItY29sb3I6IGdvbGQgICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yWWVsbG93e1xyXG4gICAgY29sb3I6Z29sZCAgIWltcG9ydGFudDtcclxufVxyXG4uYmFja2dyb3VuZFllbGxvd3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZDcwMDYxICAhaW1wb3J0YW50O1xyXG59XHJcbi5zaGFkb3dZZWxsb3d7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAjZmZkNzAwNjE7XHJcbn1cclxuXHJcbi5Ccm93biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93biAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm91dGxpbmVCcm93bntcclxuICAgIGJvcmRlci1jb2xvcjogYnJvd24gICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yQnJvd257XHJcbiAgICBjb2xvcjpicm93biAgIWltcG9ydGFudDtcclxufVxyXG4uYmFja2dyb3VuZEJyb3due1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E1MmEyYTc1ICAhaW1wb3J0YW50O1xyXG59XHJcbi5zaGFkb3dCcm93bntcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICNhNTJhMmE3NTtcclxufVxyXG5cclxuLkdyZXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5vdXRsaW5lR3JleXtcclxuICAgIGJvcmRlci1jb2xvcjogZGFya2dyZXkgICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yR3JleXtcclxuICAgIGNvbG9yOmRhcmtncmV5ICAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWNrZ3JvdW5kR3JleXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk2ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5zaGFkb3dHcmV5e1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggI2E5YTlhOTZlO1xyXG59XHJcblxyXG4uQmxhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5vdXRsaW5lQmxhY2t7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrICAhaW1wb3J0YW50O1xyXG59XHJcbi5jb2xvckJsYWNre1xyXG4gICAgY29sb3I6YmxhY2sgICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2tncm91bmRCbGFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA2YiAhaW1wb3J0YW50O1xyXG59XHJcbi5zaGFkb3dCbGFja3tcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICMwMDAwMDA2YjtcclxufVxyXG4iXX0= */"] });


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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["href", "https://fonts.googleapis.com/icon?family=Material+Icons", "rel", "stylesheet"], [1, "jumbotron"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".jumbotron[_ngcontent-%COMP%]{\r\n    margin: 10px !important;\r\n    padding: 32px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTs7O0tBR0siLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9ue1xyXG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAzMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTBweCk7XHJcbiAgfSAqLyJdfQ== */"] });


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
/* harmony import */ var _components_game_waiting_room_game_waiting_room_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/game-waiting-room/game-waiting-room.component */ "3sWC");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _services_socketio_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/socketio.service */ "O0qW");
/* harmony import */ var _components_game_play_game_play_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/game-play/game-play.component */ "QHW0");
/* harmony import */ var _components_game_chat_game_chat_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/game-chat/game-chat.component */ "wuXx");
/* harmony import */ var _services_chat_socket_io_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/chat-socket-io.service */ "IzU1");
/* harmony import */ var _components_how_to_play_how_to_play_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/how-to-play/how-to-play.component */ "Gl2y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ "fXoL");



























const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'howtoplay', component: _components_how_to_play_how_to_play_component__WEBPACK_IMPORTED_MODULE_24__["HowToPlayComponent"] },
    { path: 'playgame/:pin', component: _components_game_waiting_room_game_waiting_room_component__WEBPACK_IMPORTED_MODULE_17__["GamePlayComponent"] },
    { path: '**', redirectTo: '/' },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _services_socketio_service__WEBPACK_IMPORTED_MODULE_20__["SocketioService"], _services_chat_socket_io_service__WEBPACK_IMPORTED_MODULE_23__["ChatSocketIOService"]], imports: [[
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
        _components_game_waiting_room_game_waiting_room_component__WEBPACK_IMPORTED_MODULE_17__["GamePlayComponent"],
        _components_game_play_game_play_component__WEBPACK_IMPORTED_MODULE_21__["GameDetailsComponent"],
        _components_game_chat_game_chat_component__WEBPACK_IMPORTED_MODULE_22__["GameChatComponent"],
        _components_how_to_play_how_to_play_component__WEBPACK_IMPORTED_MODULE_24__["HowToPlayComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
function NavbarComponent_li_13_Template(rf, ctx) { if (rf & 1) {
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
function NavbarComponent_li_14_Template(rf, ctx) { if (rf & 1) {
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
function NavbarComponent_li_15_Template(rf, ctx) { if (rf & 1) {
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
function NavbarComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
function NavbarComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_17_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onLogOutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function () { return ["/"]; };
const _c5 = function (a0) { return { "show": a0 }; };
const _c6 = function () { return ["/howtoplay"]; };
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
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 18, vars: 14, consts: [[1, "navbar", "navbar-expand-sm", "navbar-dark", "bg-primary", 2, "margin-bottom", "20px"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarColor01", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarColor01", 1, "collapse", "navbar-collapse", "show", 3, "ngClass"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "nav-item"], [1, "nav-link", "active", 3, "routerLink"], ["class", "nav-item", 4, "ngIf"], [1, "nav-link", 3, "routerLink"], [1, "nav-link", "pointer", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "How To Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavbarComponent_li_13_Template, 3, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_li_14_Template, 3, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_li_15_Template, 3, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavbarComponent_li_16_Template, 3, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavbarComponent_li_17_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c5, ctx.navbarOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c6));
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

/***/ "wuXx":
/*!*************************************************************!*\
  !*** ./src/app/components/game-chat/game-chat.component.ts ***!
  \*************************************************************/
/*! exports provided: GameChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameChatComponent", function() { return GameChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_chat_socket_io_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat-socket-io.service */ "IzU1");
/* harmony import */ var src_app_services_socketio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/socketio.service */ "O0qW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class GameChatComponent {
    constructor(chatSocketIOService, socketioService) {
        this.chatSocketIOService = chatSocketIOService;
        this.socketioService = socketioService;
    }
    ngOnInit() {
        this.chatSocketIOService.ngOnInit();
        this.roomPin = this.socketioService.getRoomPin();
        this.receiveChatMessage();
        this.messages = document.getElementById('messages');
        this.personalMessages = document.getElementById('personalMessages');
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.currentPlayer = this.player;
            this.playerColour = this.currentPlayer.colour;
        }, 500);
    }
    sendMessage() {
        let messageElement = document.getElementById('messageInput');
        if (messageElement.value) {
            this.chatSocketIOService.chatMessage(this.roomPin, messageElement.value, this.player);
            let item = document.createElement('div');
            var innerItem = document.createElement('span');
            innerItem.textContent = messageElement.value;
            innerItem.style.clear = "both";
            innerItem.style.float = "right";
            innerItem.className = "card border-primary";
            innerItem.style.color = "color{{this.player.colour}} !important";
            innerItem.style.borderColor = "outline{{this.player.colour}} !important";
            innerItem.style.maxWidth = '50%';
            innerItem.style.padding = "2px";
            item.appendChild(innerItem);
            this.messages.appendChild(item);
            this.messages.className = "color" + this.player.colour;
            innerItem.scrollIntoView(true);
            messageElement.value = '';
        }
    }
    receiveChatMessage() {
        this.chatSocketIOService.receiveChatMessage().subscribe((data) => {
            if ((Object.keys(data))[0] === this.player.colour) {
                var item = document.createElement('div');
                var innerItem = document.createElement('span');
                var innerItem2 = document.createElement('span');
                innerItem.textContent = data[this.player.colour].message;
                innerItem.style.clear = "both";
                innerItem.style.float = "left";
                innerItem.style.marginBottom = "0px !important";
                innerItem.className = "card border-primary color" + this.player.colour + " outline" + this.player.colour;
                innerItem.style.maxWidth = '50%';
                innerItem.style.padding = "2px";
                innerItem2.textContent = data[this.player.colour].displayName;
                innerItem2.style.clear = "both";
                innerItem2.style.float = "left";
                innerItem2.style.maxWidth = '50%';
                item.appendChild(innerItem);
                item.appendChild(innerItem2);
                this.messages.appendChild(item);
                this.messages.className = "color" + this.player.colour;
                innerItem.scrollIntoView(true);
            }
        });
    }
}
GameChatComponent.ɵfac = function GameChatComponent_Factory(t) { return new (t || GameChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_socket_io_service__WEBPACK_IMPORTED_MODULE_1__["ChatSocketIOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_socketio_service__WEBPACK_IMPORTED_MODULE_2__["SocketioService"])); };
GameChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameChatComponent, selectors: [["app-game-chat"]], inputs: { player: "player" }, decls: 10, vars: 19, consts: [[2, "max-width", "100%"], ["id", "messages", 1, ""], ["id", "form"], ["id", "messageInput", 2, "width", "80% !important"], [3, "click"]], template: function GameChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameChatComponent_Template_button_click_8_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card border-secondary mb-3 outline", ctx.playerColour, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card-header chatHeader color", ctx.playerColour, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.playerColour, " Team Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card-body scroll row chatBody background", ctx.playerColour, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card-footer chatFooter outline", ctx.playerColour, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("outline", ctx.playerColour, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn chatButton ", ctx.player.colour, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: ["#messages[_ngcontent-%COMP%] { list-style-type: none; margin: 0; padding: 0; }\r\n#messages[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] { padding: 0.5rem 1rem; }\r\n#messages[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(odd) { background: #efefef; }\r\n.scroll[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    max-height: 100px;\r\n    overflow-y: auto;\r\n}\r\n.chatFooter[_ngcontent-%COMP%]{\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 10px;\r\n    margin: 0px;\r\n    border-radius: 0px 0px 4px 2px\r\n}\r\n.chatHeader[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n.chatBody[_ngcontent-%COMP%]{\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    margin:0px;\r\n}\r\n.chatButton[_ngcontent-%COMP%]{\r\n    padding:5px\r\n}\r\n.chatTitle[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n}\r\n.chatButton[_ngcontent-%COMP%]{\r\n    padding-left: 5px;\r\n    padding-top: 0px;\r\n    padding-right: 5px;\r\n    padding-bottom: 0px;\r\n}\r\n.Red[_ngcontent-%COMP%] {\r\n    background-color: crimson !important;\r\n    color: white !important;\r\n}\r\n.outlineRed[_ngcontent-%COMP%]{\r\n    border-color: crimson  !important;\r\n}\r\n.colorRed[_ngcontent-%COMP%]{\r\n    color:crimson  !important;\r\n}\r\n.backgroundRed[_ngcontent-%COMP%]{\r\n    background-color: #ffc6d180  !important;\r\n}\r\n.shadowRed[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #ffc6d180;\r\n}\r\n.Green[_ngcontent-%COMP%] {\r\n    background-color: darkgreen !important;\r\n    color: white !important;\r\n}\r\n.outlineGreen[_ngcontent-%COMP%]{\r\n    border-color: darkgreen  !important;\r\n}\r\n.colorGreen[_ngcontent-%COMP%]{\r\n    color:darkgreen  !important;\r\n}\r\n.backgroundGreen[_ngcontent-%COMP%]{\r\n    background-color: #8ab88a  !important;\r\n}\r\n.shadowGreen[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #8ab88a;\r\n}\r\n.Blue[_ngcontent-%COMP%] {\r\n    background-color: royalblue !important;\r\n    color: white !important;\r\n}\r\n.outlineBlue[_ngcontent-%COMP%]{\r\n    border-color: royalblue  !important;\r\n}\r\n.colorBlue[_ngcontent-%COMP%]{\r\n    color:royalblue  !important;\r\n}\r\n.backgroundBlue[_ngcontent-%COMP%]{\r\n    background-color:#4169e17d  !important;\r\n}\r\n.shadowBlue[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #4169e17d;\r\n}\r\n.Orange[_ngcontent-%COMP%] {\r\n    background-color: darkorange !important;\r\n    color: white !important;\r\n}\r\n.outlineOrange[_ngcontent-%COMP%]{\r\n    border-color: darkorange  !important;\r\n}\r\n.colorOrange[_ngcontent-%COMP%]{\r\n    color:darkorange  !important;\r\n}\r\n.backgroundOrange[_ngcontent-%COMP%]{\r\n    background-color: #ff8c0052  !important;\r\n}\r\n.shadowOrange[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #ff8c0052;\r\n}\r\n.Purple[_ngcontent-%COMP%] {\r\n    background-color: darkorchid !important;\r\n    color: white !important;\r\n}\r\n.outlinePurple[_ngcontent-%COMP%]{\r\n    border-color: darkorchid  !important;\r\n}\r\n.colorPurple[_ngcontent-%COMP%]{\r\n    color:darkorchid  !important;\r\n}\r\n.backgroundPurple[_ngcontent-%COMP%]{\r\n    background-color: #9932cc52  !important;\r\n}\r\n.shadowPurple[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #9932cc52;\r\n}\r\n.Pink[_ngcontent-%COMP%] {\r\n    background-color: hotpink !important;\r\n    color: white !important;\r\n}\r\n.outlinePink[_ngcontent-%COMP%]{\r\n    border-color: hotpink  !important;\r\n}\r\n.colorPink[_ngcontent-%COMP%]{\r\n    color:hotpink  !important;\r\n}\r\n.backgroundPink[_ngcontent-%COMP%]{\r\n    background-color: #ff69b45e !important;\r\n}\r\n.shadowPink[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #ff69b45e;\r\n}\r\n.Yellow[_ngcontent-%COMP%] {\r\n    background-color: gold !important;\r\n    color: white !important;\r\n}\r\n.outlineYellow[_ngcontent-%COMP%]{\r\n    border-color: gold  !important;\r\n}\r\n.colorYellow[_ngcontent-%COMP%]{\r\n    color:gold  !important;\r\n}\r\n.backgroundYellow[_ngcontent-%COMP%]{\r\n    background-color:#ffd70061  !important;\r\n}\r\n.shadowYellow[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #ffd70061;\r\n}\r\n.Brown[_ngcontent-%COMP%] {\r\n    background-color: brown !important;\r\n    color: white !important;\r\n}\r\n.outlineBrown[_ngcontent-%COMP%]{\r\n    border-color: brown  !important;\r\n}\r\n.colorBrown[_ngcontent-%COMP%]{\r\n    color:brown  !important;\r\n}\r\n.backgroundBrown[_ngcontent-%COMP%]{\r\n    background-color: #a52a2a75  !important;\r\n}\r\n.shadowBrown[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #a52a2a75;\r\n}\r\n.Grey[_ngcontent-%COMP%] {\r\n    background-color: darkgrey !important;\r\n    color: white !important;\r\n}\r\n.outlineGrey[_ngcontent-%COMP%]{\r\n    border-color: darkgrey  !important;\r\n}\r\n.colorGrey[_ngcontent-%COMP%]{\r\n    color:darkgrey  !important;\r\n}\r\n.backgroundGrey[_ngcontent-%COMP%]{\r\n    background-color: #a9a9a96e !important;\r\n}\r\n.shadowGrey[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #a9a9a96e;\r\n}\r\n.Black[_ngcontent-%COMP%] {\r\n    background-color: black !important;\r\n    color: white !important;\r\n}\r\n.outlineBlack[_ngcontent-%COMP%]{\r\n    border-color: black  !important;\r\n}\r\n.colorBlack[_ngcontent-%COMP%]{\r\n    color:black  !important;\r\n}\r\n.backgroundBlack[_ngcontent-%COMP%]{\r\n    background-color: #0000006b !important;\r\n}\r\n.shadowBlack[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px #0000006b;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtY2hhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlIQUFpSDtBQUNqSDtpQ0FDaUM7QUFDakMsc0ZBQXNGO0FBRXRGLFlBQVkscUJBQXFCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTtBQUMxRCxpQkFBaUIsb0JBQW9CLEVBQUU7QUFDdkMsZ0NBQWdDLG1CQUFtQixFQUFFO0FBRXJEO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWDtBQUNKO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHFDQUFxQztBQUN6QztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJnYW1lLWNoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICNmb3JtIHsgYm90dG9tOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgZGlzcGxheTogZmxleDsgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTsgfSAqL1xyXG4vKiAjaW5wdXQgeyBib3JkZXI6IG5vbmU7IHBhZGRpbmc6IDAgMXJlbTsgZmxleC1ncm93OiAxOyBib3JkZXItcmFkaXVzOiAycmVtOyBtYXJnaW46IDAuMjVyZW07IH1cclxuI2lucHV0OmZvY3VzIHsgb3V0bGluZTogbm9uZTsgfSAqL1xyXG4vKiAjZm9ybSA+IGJ1dHRvbiB7IGJhY2tncm91bmQ6ICMzMzM7cGFkZGluZzogMCAxcmVtOyBtYXJnaW46IDAuMjVyZW07Y29sb3I6ICNmZmY7IH0gKi9cclxuXHJcbiNtZXNzYWdlcyB7IGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9XHJcbiNtZXNzYWdlcyA+IGxpIHsgcGFkZGluZzogMC41cmVtIDFyZW07IH1cclxuI21lc3NhZ2VzID4gbGk6bnRoLWNoaWxkKG9kZCkgeyBiYWNrZ3JvdW5kOiAjZWZlZmVmOyB9XHJcblxyXG4uc2Nyb2xsIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5jaGF0Rm9vdGVye1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDJweFxyXG59XHJcbi5jaGF0SGVhZGVye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLmNoYXRCb2R5e1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxufVxyXG4uY2hhdEJ1dHRvbntcclxuICAgIHBhZGRpbmc6NXB4XHJcbn1cclxuLmNoYXRUaXRsZXtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5jaGF0QnV0dG9ue1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG4uUmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb24gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5vdXRsaW5lUmVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBjcmltc29uICAhaW1wb3J0YW50O1xyXG59XHJcbi5jb2xvclJlZHtcclxuICAgIGNvbG9yOmNyaW1zb24gICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2tncm91bmRSZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNmQxODAgICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNoYWRvd1JlZHtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICNmZmM2ZDE4MDtcclxufVxyXG5cclxuLkdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm91dGxpbmVHcmVlbntcclxuICAgIGJvcmRlci1jb2xvcjogZGFya2dyZWVuICAhaW1wb3J0YW50O1xyXG59XHJcbi5jb2xvckdyZWVue1xyXG4gICAgY29sb3I6ZGFya2dyZWVuICAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWNrZ3JvdW5kR3JlZW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGFiODhhICAhaW1wb3J0YW50O1xyXG59XHJcbi5zaGFkb3dHcmVlbntcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM4YWI4OGE7XHJcbn1cclxuXHJcbi5CbHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm91dGxpbmVCbHVle1xyXG4gICAgYm9yZGVyLWNvbG9yOiByb3lhbGJsdWUgICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yQmx1ZXtcclxuICAgIGNvbG9yOnJveWFsYmx1ZSAgIWltcG9ydGFudDtcclxufVxyXG4uYmFja2dyb3VuZEJsdWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0MTY5ZTE3ZCAgIWltcG9ydGFudDtcclxufVxyXG4uc2hhZG93Qmx1ZXtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM0MTY5ZTE3ZDtcclxufVxyXG5cclxuLk9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ub3V0bGluZU9yYW5nZXtcclxuICAgIGJvcmRlci1jb2xvcjogZGFya29yYW5nZSAgIWltcG9ydGFudDtcclxufVxyXG4uY29sb3JPcmFuZ2V7XHJcbiAgICBjb2xvcjpkYXJrb3JhbmdlICAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWNrZ3JvdW5kT3Jhbmdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGMwMDUyICAhaW1wb3J0YW50O1xyXG59XHJcbi5zaGFkb3dPcmFuZ2V7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAjZmY4YzAwNTI7XHJcbn1cclxuXHJcbi5QdXJwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yY2hpZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm91dGxpbmVQdXJwbGV7XHJcbiAgICBib3JkZXItY29sb3I6IGRhcmtvcmNoaWQgICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yUHVycGxle1xyXG4gICAgY29sb3I6ZGFya29yY2hpZCAgIWltcG9ydGFudDtcclxufVxyXG4uYmFja2dyb3VuZFB1cnBsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTMyY2M1MiAgIWltcG9ydGFudDtcclxufVxyXG4uc2hhZG93UHVycGxle1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggIzk5MzJjYzUyO1xyXG59XHJcblxyXG4uUGluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ub3V0bGluZVBpbmt7XHJcbiAgICBib3JkZXItY29sb3I6IGhvdHBpbmsgICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yUGlua3tcclxuICAgIGNvbG9yOmhvdHBpbmsgICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2tncm91bmRQaW5re1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjliNDVlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNoYWRvd1Bpbmt7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAjZmY2OWI0NWU7XHJcbn1cclxuXHJcbi5ZZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm91dGxpbmVZZWxsb3d7XHJcbiAgICBib3JkZXItY29sb3I6IGdvbGQgICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yWWVsbG93e1xyXG4gICAgY29sb3I6Z29sZCAgIWltcG9ydGFudDtcclxufVxyXG4uYmFja2dyb3VuZFllbGxvd3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZDcwMDYxICAhaW1wb3J0YW50O1xyXG59XHJcbi5zaGFkb3dZZWxsb3d7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAjZmZkNzAwNjE7XHJcbn1cclxuXHJcbi5Ccm93biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93biAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm91dGxpbmVCcm93bntcclxuICAgIGJvcmRlci1jb2xvcjogYnJvd24gICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yQnJvd257XHJcbiAgICBjb2xvcjpicm93biAgIWltcG9ydGFudDtcclxufVxyXG4uYmFja2dyb3VuZEJyb3due1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E1MmEyYTc1ICAhaW1wb3J0YW50O1xyXG59XHJcbi5zaGFkb3dCcm93bntcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICNhNTJhMmE3NTtcclxufVxyXG5cclxuLkdyZXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5vdXRsaW5lR3JleXtcclxuICAgIGJvcmRlci1jb2xvcjogZGFya2dyZXkgICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yR3JleXtcclxuICAgIGNvbG9yOmRhcmtncmV5ICAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWNrZ3JvdW5kR3JleXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk2ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5zaGFkb3dHcmV5e1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggI2E5YTlhOTZlO1xyXG59XHJcblxyXG4uQmxhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5vdXRsaW5lQmxhY2t7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrICAhaW1wb3J0YW50O1xyXG59XHJcbi5jb2xvckJsYWNre1xyXG4gICAgY29sb3I6YmxhY2sgICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2tncm91bmRCbGFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA2YiAhaW1wb3J0YW50O1xyXG59XHJcbi5zaGFkb3dCbGFja3tcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICMwMDAwMDA2YjtcclxufSJdfQ== */"] });


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