/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={460:function(e,t){var n,r;n=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},n=!t.document&&!!t.postMessage,r=t.IS_PAPA_WORKER||!1,i={},s=0,o={parse:function(n,r){var a=(r=r||{}).dynamicTyping||!1;if(E(a)&&(r.dynamicTypingFunction=a,a={}),r.dynamicTyping=a,r.transform=!!E(r.transform)&&r.transform,r.worker&&o.WORKERS_SUPPORTED){var u=function(){if(!o.WORKERS_SUPPORTED)return!1;var n,r,a=(n=t.URL||t.webkitURL||null,r=e.toString(),o.BLOB_URL||(o.BLOB_URL=n.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",r,")();"],{type:"text/javascript"})))),u=new t.Worker(a);return u.onmessage=m,u.id=s++,i[u.id]=u}();return u.userStep=r.step,u.userChunk=r.chunk,u.userComplete=r.complete,u.userError=r.error,r.step=E(r.step),r.chunk=E(r.chunk),r.complete=E(r.complete),r.error=E(r.error),delete r.worker,void u.postMessage({input:n,config:r,workerId:u.id})}var f=null;return o.NODE_STREAM_INPUT,"string"==typeof n?(n=function(e){return 65279===e.charCodeAt(0)?e.slice(1):e}(n),f=r.download?new c(r):new l(r)):!0===n.readable&&E(n.read)&&E(n.on)?f=new d(r):(t.File&&n instanceof File||n instanceof Object)&&(f=new h(r)),f.stream(n)},unparse:function(e,t){var n=!1,r=!0,i=",",s="\r\n",a='"',u=a+a,c=!1,h=null,l=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||o.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(c=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");h=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+a),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(l=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var d=new RegExp(p(a),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,c);if("object"==typeof e[0])return f(h||Object.keys(e[0]),e,c)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||h),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],c);throw new Error("Unable to serialize unrecognized input");function f(e,t,n){var o="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var a=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(a&&r){for(var c=0;c<e.length;c++)0<c&&(o+=i),o+=g(e[c],c);0<t.length&&(o+=s)}for(var h=0;h<t.length;h++){var l=a?e.length:t[h].length,d=!1,f=a?0===Object.keys(t[h]).length:0===t[h].length;if(n&&!a&&(d="greedy"===n?""===t[h].join("").trim():1===t[h].length&&0===t[h][0].length),"greedy"===n&&a){for(var p=[],m=0;m<l;m++){var _=u?e[m]:m;p.push(t[h][_])}d=""===p.join("").trim()}if(!d){for(var y=0;y<l;y++){0<y&&!f&&(o+=i);var v=a&&u?e[y]:y;o+=g(t[h][v],y)}h<t.length-1&&(!n||0<l&&!f)&&(o+=s)}}return o}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var r=!1;l&&"string"==typeof e&&l.test(e)&&(e="'"+e,r=!0);var s=e.toString().replace(d,u);return(r=r||!0===n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0;return!1}(s,o.BAD_DELIMITERS)||-1<s.indexOf(i)||" "===s.charAt(0)||" "===s.charAt(s.length-1))?a+s+a:s}}};if(o.RECORD_SEP=String.fromCharCode(30),o.UNIT_SEP=String.fromCharCode(31),o.BYTE_ORDER_MARK="\ufeff",o.BAD_DELIMITERS=["\r","\n",'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!n&&!!t.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=10485760,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=g,o.ParserHandle=f,o.NetworkStreamer=c,o.FileStreamer=h,o.StringStreamer=l,o.ReadableStreamStreamer=d,t.jQuery){var a=t.jQuery;a.fn.parse=function(e){var n=e.config||{},r=[];return this.each((function(e){if("INPUT"!==a(this).prop("tagName").toUpperCase()||"file"!==a(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)r.push({file:this.files[i],inputElem:this,instanceConfig:a.extend({},n)})})),i(),this;function i(){if(0!==r.length){var t,n,i,u=r[0];if(E(e.before)){var c=e.before(u.file,u.inputElem);if("object"==typeof c){if("abort"===c.action)return"AbortError",t=u.file,n=u.inputElem,i=c.reason,void(E(e.error)&&e.error({name:"AbortError"},t,n,i));if("skip"===c.action)return void s();"object"==typeof c.config&&(u.instanceConfig=a.extend(u.instanceConfig,c.config))}else if("skip"===c)return void s()}var h=u.instanceConfig.complete;u.instanceConfig.complete=function(e){E(h)&&h(e,u.file,u.inputElem),s()},o.parse(u.file,u.instanceConfig)}else E(e.complete)&&e.complete()}function s(){r.splice(0,1),i()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new f(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,n){if(this.isFirstChunk&&E(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var a=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=a.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),a&&a.data&&(this._rowCount+=a.data.length);var c=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(r)t.postMessage({results:a,workerId:o.WORKER_ID,finished:c});else if(E(this._config.chunk)&&!n){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);a=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!c||!E(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),c||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){E(this._config.error)?this._config.error(e):r&&this._config.error&&t.postMessage({workerId:o.WORKER_ID,error:e,finished:!1})}}function c(e){var t;(e=e||{}).chunkSize||(e.chunkSize=o.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),n||(t.onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var r in e)t.setRequestHeader(r,e[r])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var n=t.statusText||e;this._sendError(new Error(n))}}function h(e){var t,n;(e=e||{}).chunkSize||(e.chunkSize=o.LocalChunkSize),u.call(this,e);var r="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,i)}var s=t.readAsText(e,this._config.encoding);r||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function l(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,n=this._config.chunkSize;return n?(e=t.substring(0,n),t=t.substring(n)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function d(e){u.call(this,e=e||{});var t=[],n=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=k((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=k((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=k((function(){this._streamCleanUp(),r=!0,this._streamData("")}),this),this._streamCleanUp=k((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function f(e){var t,n,r,i=Math.pow(2,53),s=-i,a=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,c=this,h=0,l=0,d=!1,f=!1,m=[],_={data:[],errors:[],meta:{}};if(E(e.step)){var y=e.step;e.step=function(t){if(_=t,w())b();else{if(b(),0===_.data.length)return;h+=t.data.length,e.preview&&h>e.preview?n.abort():(_.data=_.data[0],y(_,c))}}}function k(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function b(){return _&&r&&(R("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),r=!1),e.skipEmptyLines&&(_.data=_.data.filter((function(e){return!k(e)}))),w()&&function(){if(_)if(Array.isArray(_.data[0])){for(var t=0;w()&&t<_.data.length;t++)_.data[t].forEach(n);_.data.splice(0,1)}else _.data.forEach(n);function n(t,n){E(e.transformHeader)&&(t=e.transformHeader(t,n)),m.push(t)}}(),function(){if(!_||!e.header&&!e.dynamicTyping&&!e.transform)return _;function t(t,n){var r,i=e.header?{}:[];for(r=0;r<t.length;r++){var s=r,o=t[r];e.header&&(s=r>=m.length?"__parsed_extra":m[r]),e.transform&&(o=e.transform(o,s)),o=C(s,o),"__parsed_extra"===s?(i[s]=i[s]||[],i[s].push(o)):i[s]=o}return e.header&&(r>m.length?R("FieldMismatch","TooManyFields","Too many fields: expected "+m.length+" fields but parsed "+r,l+n):r<m.length&&R("FieldMismatch","TooFewFields","Too few fields: expected "+m.length+" fields but parsed "+r,l+n)),i}var n=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(t),n=_.data.length):_.data=t(_.data,0),e.header&&_.meta&&(_.meta.fields=m),l+=n,_}()}function w(){return e.header&&0===m.length}function C(t,n){return r=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[r]&&(e.dynamicTyping[r]=e.dynamicTypingFunction(r)),!0===(e.dynamicTyping[r]||e.dynamicTyping)?"true"===n||"TRUE"===n||"false"!==n&&"FALSE"!==n&&(function(e){if(a.test(e)){var t=parseFloat(e);if(s<t&&t<i)return!0}return!1}(n)?parseFloat(n):u.test(n)?new Date(n):""===n?null:n):n;var r}function R(e,t,n,r){var i={type:e,code:t,message:n};void 0!==r&&(i.row=r),_.errors.push(i)}this.parse=function(i,s,a){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var n=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),r=(e=e.replace(n,"")).split("\r"),i=e.split("\n"),s=1<i.length&&i[0].length<r[0].length;if(1===r.length||s)return"\n";for(var o=0,a=0;a<r.length;a++)"\n"===r[a][0]&&o++;return o>=r.length/2?"\r\n":"\r"}(i,u)),r=!1,e.delimiter)E(e.delimiter)&&(e.delimiter=e.delimiter(i),_.meta.delimiter=e.delimiter);else{var c=function(t,n,r,i,s){var a,u,c,h;s=s||[",","\t","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var l=0;l<s.length;l++){var d=s[l],f=0,p=0,m=0;c=void 0;for(var _=new g({comments:i,delimiter:d,newline:n,preview:10}).parse(t),y=0;y<_.data.length;y++)if(r&&k(_.data[y]))m++;else{var v=_.data[y].length;p+=v,void 0!==c?0<v&&(f+=Math.abs(v-c),c=v):c=v}0<_.data.length&&(p/=_.data.length-m),(void 0===u||f<=u)&&(void 0===h||h<p)&&1.99<p&&(u=f,a=d,h=p)}return{successful:!!(e.delimiter=a),bestDelimiter:a}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);c.successful?e.delimiter=c.bestDelimiter:(r=!0,e.delimiter=o.DefaultDelimiter),_.meta.delimiter=e.delimiter}var h=v(e);return e.preview&&e.header&&h.preview++,t=i,n=new g(h),_=n.parse(t,s,a),b(),d?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,n.abort(),t=E(e.chunk)?"":t.substring(n.getCharIndex())},this.resume=function(){c.streamer._halted?(d=!1,c.streamer.parseChunk(t,!0)):setTimeout(c.resume,3)},this.aborted=function(){return f},this.abort=function(){f=!0,n.abort(),_.meta.aborted=!0,E(e.complete)&&e.complete(_),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,n=(e=e||{}).delimiter,r=e.newline,i=e.comments,s=e.step,a=e.preview,u=e.fastMode,c=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(c=e.escapeChar),("string"!=typeof n||-1<o.BAD_DELIMITERS.indexOf(n))&&(n=","),i===n)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<o.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var h=0,l=!1;this.parse=function(o,d,f){if("string"!=typeof o)throw new Error("Input must be a string");var g=o.length,m=n.length,_=r.length,y=i.length,v=E(s),k=[],b=[],w=[],C=h=0;if(!o)return Q();if(e.header&&!d){var R=o.split(r)[0].split(n),O=[],S={},x=!1;for(var I in R){var A=R[I];E(e.transformHeader)&&(A=e.transformHeader(A,I));var D=A,T=S[A]||0;for(0<T&&(x=!0,D=A+"_"+T),S[A]=T+1;O.includes(D);)D=D+"_"+T;O.push(D)}if(x){var L=o.split(r);L[0]=O.join(n),o=L.join(r)}}if(u||!1!==u&&-1===o.indexOf(t)){for(var j=o.split(r),M=0;M<j.length;M++){if(w=j[M],h+=w.length,M!==j.length-1)h+=r.length;else if(f)return Q();if(!i||w.substring(0,y)!==i){if(v){if(k=[],N(w.split(n)),$(),l)return Q()}else N(w.split(n));if(a&&a<=M)return k=k.slice(0,a),Q(!0)}}return Q()}for(var P=o.indexOf(n,h),z=o.indexOf(r,h),F=new RegExp(p(c)+p(t),"g"),B=o.indexOf(t,h);;)if(o[h]!==t)if(i&&0===w.length&&o.substring(h,h+y)===i){if(-1===z)return Q();h=z+_,z=o.indexOf(r,h),P=o.indexOf(n,h)}else if(-1!==P&&(P<z||-1===z))w.push(o.substring(h,P)),h=P+m,P=o.indexOf(n,h);else{if(-1===z)break;if(w.push(o.substring(h,z)),K(z+_),v&&($(),l))return Q();if(a&&k.length>=a)return Q(!0)}else for(B=h,h++;;){if(-1===(B=o.indexOf(t,B+1)))return f||b.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:k.length,index:h}),H();if(B===g-1)return H(o.substring(h,B).replace(F,t));if(t!==c||o[B+1]!==c){if(t===c||0===B||o[B-1]!==c){-1!==P&&P<B+1&&(P=o.indexOf(n,B+1)),-1!==z&&z<B+1&&(z=o.indexOf(r,B+1));var U=W(-1===z?P:Math.min(P,z));if(o.substr(B+1+U,m)===n){w.push(o.substring(h,B).replace(F,t)),o[h=B+1+U+m]!==t&&(B=o.indexOf(t,h)),P=o.indexOf(n,h),z=o.indexOf(r,h);break}var q=W(z);if(o.substring(B+1+q,B+1+q+_)===r){if(w.push(o.substring(h,B).replace(F,t)),K(B+1+q+_),P=o.indexOf(n,h),B=o.indexOf(t,h),v&&($(),l))return Q();if(a&&k.length>=a)return Q(!0);break}b.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:k.length,index:h}),B++}}else B++}return H();function N(e){k.push(e),C=h}function W(e){var t=0;if(-1!==e){var n=o.substring(B+1,e);n&&""===n.trim()&&(t=n.length)}return t}function H(e){return f||(void 0===e&&(e=o.substring(h)),w.push(e),h=g,N(w),v&&$()),Q()}function K(e){h=e,N(w),w=[],z=o.indexOf(r,h)}function Q(e){return{data:k,errors:b,meta:{delimiter:n,linebreak:r,aborted:l,truncated:!!e,cursor:C+(d||0)}}}function $(){s(Q()),k=[],b=[]}},this.abort=function(){l=!0},this.getCharIndex=function(){return h}}function m(e){var t=e.data,n=i[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){r=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(E(n.userStep)){for(var o=0;o<t.results.data.length&&(n.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},s),!r);o++);delete t.results}else E(n.userChunk)&&(n.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!r&&_(t.workerId,t.results)}function _(e,t){var n=i[e];E(n.userComplete)&&n.userComplete(t),n.terminate(),delete i[e]}function y(){throw new Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var n in e)t[n]=v(e[n]);return t}function k(e,t){return function(){e.apply(t,arguments)}}function E(e){return"function"==typeof e}return r&&(t.onmessage=function(e){var n=e.data;if(void 0===o.WORKER_ID&&n&&(o.WORKER_ID=n.workerId),"string"==typeof n.input)t.postMessage({workerId:o.WORKER_ID,results:o.parse(n.input,n.config),finished:!0});else if(t.File&&n.input instanceof File||n.input instanceof Object){var r=o.parse(n.input,n.config);r&&t.postMessage({workerId:o.WORKER_ID,results:r,finished:!0})}}),(c.prototype=Object.create(u.prototype)).constructor=c,(h.prototype=Object.create(u.prototype)).constructor=h,(l.prototype=Object.create(l.prototype)).constructor=l,(d.prototype=Object.create(u.prototype)).constructor=d,o},void 0===(r=n.apply(t,[]))||(e.exports=r)},607:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.main=void 0;const a=s(n(460));function u(){const e=function(){const e={fileInput:document.getElementById("txt-file"),analyzeBtn:document.getElementById("analyze-btn"),resultsDiv:document.getElementById("results"),progressBar:document.getElementById("progress-bar"),progressContainer:document.getElementById("progress-container"),saveReportBtn:document.getElementById("save-report")},t=document.getElementById("snps-input");return null!=t&&(e.snpsInput=t),e}();e.analyzeBtn.addEventListener("click",(()=>{(function(e){for(const t in e)if(null===e[t])return console.error(`DOM element ${t} not found.`),!1;return!("snpsInput"in e)||null!==e.snpsInput||(console.error("SNPs input selector not found."),!1)})(e)&&function(){return o(this,void 0,void 0,(function*(){try{const e=yield fetch("./mps/mps-data.json"),t=yield e.json();return Object.keys(t).length>0?t:(console.error("Error: MPS data is empty"),null)}catch(e){return console.error("Error fetching MPS data:",e),null}}))}().then((t=>{null!=t?function(e,t){var n,r;!function(e){e.progressContainer.style.display="block",e.progressBar.style.width="0%"}(e);const i=null===(r=null===(n=e.fileInput)||void 0===n?void 0:n.files)||void 0===r?void 0:r[0];if(null==i)return void alert("Please select a file!");console.log(`file size=${i.size}`);if(i.size>104857600){if(console.log("Streaming large file="+i.name),"vcf"!==(s=i.name).substring(s.lastIndexOf(".")+1))return void alert("Large file is not a vcf file");c(i,e,t,h,"\t")}else!function(e,t,n){a.parse(e,{preview:1,complete:function(r){const i=r.data.join("");let s,o;if(i.includes("generated by 23andMe"))console.log("detected 23andme data"),s=d,o="\t";else{if(!i.includes("==> filename.txt <==="))return void alert("Unable to determine the filetype from the header.");console.log("detected ancestry data"),s=l,o=","}c(e,t,n,s,o)},error:function(e){console.error("Error while reading file:",e),alert("An error occurred while reading the file."),m(t)}})}(i,e,t);var s}(e,t):console.error("Failed to load MPS data.")})).catch((e=>{console.error("Error fetching MPS data:",e)}))}))}function c(e,t,n,r,i){let s=[];const o=e.size;let u=0;a.parse(e,{chunkSize:51200,dynamicTyping:!0,delimiter:i,chunk:(e,i)=>{const a=e.data;u+=51200,g(t,u/o*100+"%");try{const e=r(a,n);s=s.concat(e)}catch(e){console.error("Error while parsing chunk:",e),alert("An error occurred while parsing the file."),i.abort()}},complete:()=>{g(t,"100%");const e=function(e,t){return t.filter((t=>e[t.rsid].pathogenic.includes(t.genotype)))}(n,s);!function(e,t){if(0===t.length)return void(e.resultsDiv.textContent="No matching SNPs found");t.sort(((e,t)=>e.phenotype.localeCompare(t.phenotype)));const n=function(e){const t=["DNA Methylation","Estrogen Deactivation"],n=("phenotype",e.reduce(((e,t)=>{const n=String(t.phenotype);return n in e||(e[n]=[]),e[n].push(t),e}),{})),r=Object.keys(n).sort(((e,n)=>{const r=t.indexOf(e),i=t.indexOf(n);return-1===r&&-1===i?e.localeCompare(n):-1===r?1:-1===i?-1:r-i})),i={};for(const e of r)i[e]=n[e];return i}(t);e.resultsDiv.innerHTML="";for(const t in n){const r=document.createElement("h3");r.textContent=t,e.resultsDiv.appendChild(r);const i=document.createElement("table");i.style.width="100%",i.setAttribute("border","1");const s=document.createElement("tr"),o=["rsid","genotype","pathogenic","chromosome","position","gene"],a={rsid:"RSID",genotype:"Genotype",pathogenic:"Pathogenic",chromosome:"Chromosome",position:"Position",gene:"Gene"};o.forEach((e=>{const t=document.createElement("th");t.textContent=a[e],s.appendChild(t)})),i.appendChild(s),n[t].forEach((e=>{const t=document.createElement("tr");o.forEach((n=>{const r=document.createElement("td"),i=String(e[n]).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");r.innerHTML="rsid"===n?p(i):i,t.appendChild(r)})),i.appendChild(t)})),e.resultsDiv.appendChild(i)}}(t,e),function(e,t){const n=document.createElement("button");n.textContent="Save Report",n.onclick=()=>{!function(e){const t=function(e){const t=Object.keys(e[0]),n=e.map((e=>t.map((t=>e[t])).join(",")));return[t.join(","),...n].join("\n")}(e),n=new Blob([t],{type:"text/csv"}),r=document.createElement("a");r.style.display="none",r.href=URL.createObjectURL(n),r.download="meyer-powers-report.csv",document.body.appendChild(r),r.click(),document.body.removeChild(r)}(t)},e.saveReportBtn.innerHTML="",e.saveReportBtn.appendChild(n)}(t,e),m(t)},error:e=>{console.error("Error while reading file:",e),alert("An error occurred while reading the file."),m(t)}})}function h(e,t){const n=[];return e.forEach((e=>{if(e.length<5||"string"==typeof e[0]&&e[0].startsWith("#"))return;const r=e[2];r in t&&n.push({rsid:r,chromosome:e[0],position:e[1],genotype:e[4],phenotype:t[r].phenotype,pathogenic:t[r].pathogenic,gene:f(t[r].gene)})})),n}function l(e,t){const n=[];return e.forEach((e=>{if(e.length<4)return;const r=e[0];r in t&&n.push({rsid:r,chromosome:e[1],position:e[2],genotype:e[3],phenotype:t[r].phenotype,pathogenic:t[r].pathogenic,gene:f(t[r].gene)})})),n}function d(e,t){const n=[];return e.forEach((e=>{if(e.length<4||"string"==typeof e[0]&&e[0].startsWith("#"))return;const r=e[0];r in t&&n.push({rsid:r,chromosome:e[1],position:e[2],genotype:e[3],phenotype:t[r].phenotype,pathogenic:t[r].pathogenic,gene:f(t[r].gene)})})),n}function f(e){return null!==e?e:""}function p(e){return'<a href="https://www.snpedia.com/index.php/'+e+'">'+e+"</a>"}function g(e,t){e.progressBar.style.width=t}function m(e){e.progressContainer.style.display="none"}window.main=u,t.main=u}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}(()=>{"use strict";const e=n(607);window.App={main:e.main}})()})();