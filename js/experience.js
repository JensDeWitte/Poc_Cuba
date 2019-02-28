/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../extensions/lucidweb-aframe-extensions/common/components/idle.js":
/*!************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/common/components/idle.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent('idle', {
  schema: {
    timeout: {
      type: 'number',
      default: 3
    },
    idle: {
      type: 'boolean',
      default: false
    }
  },
  init: function init() {
    this.bindMethods();
    this.idleTimeout = null;
  },
  bindMethods: function bindMethods() {
    this.onMouseMove = AFRAME.utils.bind(this.onMouseMove, this);
    this.onMouseMoveTimeout = AFRAME.utils.bind(this.onMouseMoveTimeout, this);
  },
  play: function play() {
    this.addEventListeners();
  },
  pause: function pause() {
    this.removeEventListeners();
  },
  remove: function remove() {
    this.removeEventListeners();
  },
  update: function update(oldData) {
    var newData = this.data;

    if (oldData.idle !== newData.idle) {
      if (newData.idle) {
        this.el.sceneEl.emit('lucidweb.mouse.idle', {}, false);
      } else {
        this.el.sceneEl.emit('lucidweb.mouse.moving', {}, false);
      }
    }
  },
  addEventListeners: function addEventListeners() {
    document.addEventListener('mousemove', this.onMouseMove);
  },
  removeEventListeners: function removeEventListeners() {
    document.removeEventListener('mousemove', this.onMouseMove);
  },
  onMouseMove: function onMouseMove() {
    var data = this.data;

    if (this.idleTimeout !== null) {
      clearTimeout(this.idleTimeout);
      this.idleTimeout = null;
    }

    if (this.data.idle === true) {
      this.el.setAttribute('idle', {
        idle: false
      });
    }

    this.idleTimeout = setTimeout(this.onMouseMoveTimeout, data.timeout * 1000);
  },
  onMouseMoveTimeout: function onMouseMoveTimeout() {
    this.idleTimeout = null;

    if (this.data.idle === false) {
      this.el.setAttribute('idle', {
        idle: true
      });
    }
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/node_modules/clipboard-polyfill/build/clipboard-polyfill.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/node_modules/clipboard-polyfill/build/clipboard-polyfill.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function r(t,e,n){y("listener called"),t.success=!0,e.forEach(function(e,r){n.clipboardData.setData(r,e),r===x&&n.clipboardData.getData(r)!=e&&(y("setting text/plain failed"),t.success=!1)}),n.preventDefault()}function o(t){var e=new T,n=r.bind(this,e,t);document.addEventListener("copy",n);try{document.execCommand("copy")}finally{document.removeEventListener("copy",n)}return e.success}function i(t,e){u(t);var n=o(e);return s(),n}function a(t){var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important"),e.textContent="temporary element",document.body.appendChild(e);var n=i(e,t);return document.body.removeChild(e),n}function c(t){y("copyTextUsingDOM");var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important");var n=e;e.attachShadow&&(y("Using shadow DOM."),n=e.attachShadow({mode:"open"}));var r=document.createElement("span");r.innerText=t,n.appendChild(r),document.body.appendChild(e),u(r);var o=document.execCommand("copy");return s(),document.body.removeChild(e),o}function u(t){var e=document.getSelection(),n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n)}function s(){document.getSelection().removeAllRanges()}function l(t){var e=new h.DT;return e.setData(x,t),e}function d(){return"undefined"==typeof ClipboardEvent&&void 0!==window.clipboardData&&void 0!==window.clipboardData.setData}function p(t){var e=t.getData(x);if(void 0!==e)return window.clipboardData.setData("Text",e);throw"No `text/plain` value was specified."}function f(){return v(this,void 0,void 0,function(){var t;return b(this,function(e){if(""===(t=window.clipboardData.getData("Text")))throw"Empty clipboard or could not read plain text from clipboard";return[2,t]})})}var v=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function c(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,c)}u((r=r.apply(t,e||[])).next())})},b=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,i=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(a=u.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){u.label=n[1];break}if(6===n[0]&&u.label<a[1]){u.label=a[1],a=n;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(n);break}a[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(t){n=[6,t],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,c,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c};Object.defineProperty(e,"__esModule",{value:!0});var h=n(1),y=function(t){},m=!0,g=function(){(console.warn||console.log).apply(console,arguments)},w=g.bind("[clipboard-polyfill]"),x="text/plain",D=function(){function t(){}return t.setDebugLog=function(t){y=t},t.suppressWarnings=function(){m=!1,h.suppressDTWarnings()},t.write=function(t){return v(this,void 0,void 0,function(){var e;return b(this,function(n){if(m&&!t.getData(x)&&w("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."),d()){if(p(t))return[2];throw"Copying failed, possibly because the user rejected it."}if(o(t))return y("regular execCopy worked"),[2];if(navigator.userAgent.indexOf("Edge")>-1)return y('UA "Edge" => assuming success'),[2];if(i(document.body,t))return y("copyUsingTempSelection worked"),[2];if(a(t))return y("copyUsingTempElem worked"),[2];if(void 0!==(e=t.getData(x))&&c(e))return y("copyTextUsingDOM worked"),[2];throw"Copy command failed."})})},t.writeText=function(t){return v(this,void 0,void 0,function(){return b(this,function(e){return navigator.clipboard&&navigator.clipboard.writeText?(y("Using `navigator.clipboard.writeText()`."),[2,navigator.clipboard.writeText(t)]):[2,this.write(l(t))]})})},t.read=function(){return v(this,void 0,void 0,function(){var t;return b(this,function(e){switch(e.label){case 0:return t=l,[4,this.readText()];case 1:return[2,t.apply(void 0,[e.sent()])]}})})},t.readText=function(){return v(this,void 0,void 0,function(){return b(this,function(t){if(navigator.clipboard&&navigator.clipboard.readText)return y("Using `navigator.clipboard.readText()`."),[2,navigator.clipboard.readText()];if(d())return y("Reading text using IE strategy."),[2,f()];throw"Read is not supported in your browser."})})},t.DT=h.DT,t}();e.default=D;var T=function(){function t(){this.success=!1}return t}();t.exports=D},function(t,e,n){"use strict";function r(){c=!1}Object.defineProperty(e,"__esModule",{value:!0});var o=["text/plain","text/html"],i=function(){(console.warn||console.log).call(arguments)},a=i.bind(console,"[clipboard-polyfill]"),c=!0;e.suppressDTWarnings=r;var u=function(){function t(){this.m={}}return t.prototype.setData=function(t,e){c&&-1===o.indexOf(t)&&a("Unknown data type: "+t,"Call clipboard.suppressWarnings() to suppress this warning."),this.m[t]=e},t.prototype.getData=function(t){return this.m[t]},t.prototype.forEach=function(t){for(var e in this.m)t(this.m[e],e)},t}();e.DT=u}])});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/node_modules/es6-promise/dist/es6-promise.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/node_modules/es6-promise/dist/es6-promise.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../experience template/lucidweb-experience-template/examples/360-video/node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../../experience template/lucidweb-experience-template/examples/360-video/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/node_modules/fscreen/lib/index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/node_modules/fscreen/lib/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var key = {
  fullscreenEnabled: 0,
  fullscreenElement: 1,
  requestFullscreen: 2,
  exitFullscreen: 3,
  fullscreenchange: 4,
  fullscreenerror: 5
};

var webkit = ['webkitFullscreenEnabled', 'webkitFullscreenElement', 'webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitfullscreenchange', 'webkitfullscreenerror'];

var moz = ['mozFullScreenEnabled', 'mozFullScreenElement', 'mozRequestFullScreen', 'mozCancelFullScreen', 'mozfullscreenchange', 'mozfullscreenerror'];

var ms = ['msFullscreenEnabled', 'msFullscreenElement', 'msRequestFullscreen', 'msExitFullscreen', 'MSFullscreenChange', 'MSFullscreenError'];

// so it doesn't throw if no window or document
var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};

var vendor = 'fullscreenEnabled' in document && Object.keys(key) || webkit[0] in document && webkit || moz[0] in document && moz || ms[0] in document && ms || [];

exports.default = {
  requestFullscreen: function requestFullscreen(element) {
    return element[vendor[key.requestFullscreen]]();
  },
  requestFullscreenFunction: function requestFullscreenFunction(element) {
    return element[vendor[key.requestFullscreen]];
  },
  get exitFullscreen() {
    return document[vendor[key.exitFullscreen]].bind(document);
  },
  addEventListener: function addEventListener(type, handler, options) {
    return document.addEventListener(vendor[key[type]], handler, options);
  },
  removeEventListener: function removeEventListener(type, handler, options) {
    return document.removeEventListener(vendor[key[type]], handler, options);
  },
  get fullscreenEnabled() {
    return Boolean(document[vendor[key.fullscreenEnabled]]);
  },
  set fullscreenEnabled(val) {},
  get fullscreenElement() {
    return document[vendor[key.fullscreenElement]];
  },
  set fullscreenElement(val) {},
  get onfullscreenchange() {
    return document[('on' + vendor[key.fullscreenchange]).toLowerCase()];
  },
  set onfullscreenchange(handler) {
    return document[('on' + vendor[key.fullscreenchange]).toLowerCase()] = handler;
  },
  get onfullscreenerror() {
    return document[('on' + vendor[key.fullscreenerror]).toLowerCase()];
  },
  set onfullscreenerror(handler) {
    return document[('on' + vendor[key.fullscreenerror]).toLowerCase()] = handler;
  }
};

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/assets/images/logo_lucidweb.png":
/*!*********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/assets/images/logo_lucidweb.png ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/logo_lucidweb.png?f4ce1a9a18772e68281c96e70c787f09";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/assets/styles/ui.branding.less":
/*!********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/assets/styles/ui.branding.less ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/styles/ui.branding.less";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/assets/styles/ui.general.less":
/*!*******************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/assets/styles/ui.general.less ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/styles/ui.general.less";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/assets/styles/ui.icon-rendering.less":
/*!**************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/assets/styles/ui.icon-rendering.less ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/styles/ui.icon-rendering.less";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/components/all-controls.js":
/*!****************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/components/all-controls.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent('all-controls', {
  schema: {
    visibility: {
      type: 'string',
      default: 'VR'
    }
  },
  init: function init() {
    this.mode = 'browser';
    this.setVROnlyVisibility(false);

    if (this.showLaserControls()) {
      var controls = document.createElement('a-entity');
      controls.className = 'ray-caster';
      controls.setAttribute('laser-controls', {
        hand: 'right'
      });
      controls.setAttribute('raycaster', 'objects: .clickable;');
      this.el.sceneEl.appendChild(controls);
    } else {
      this.el.setAttribute('look-controls', '');
      this.pointer = null;
      this.cursor = this.createDesktopCursor();
    } // const antialias = this.el.sceneEl.renderer.antialias;
    // if (!antialias) {
    //   console.warn("Anti-alias is OFF");
    //
    // } else {
    //   console.warn("Anti-alias is ON");
    // }


    this.bindMethods();
  },
  bindMethods: function bindMethods() {
    var bind = AFRAME.utils.bind;
    this.addEventListeners = bind(this.addEventListeners, this);
    this.removeEventListeners = bind(this.removeEventListeners, this);
    this.onEnterVR = bind(this.onEnterVR, this);
    this.onExitVR = bind(this.onExitVR, this);
    this.updateCursorVisibility = bind(this.updateCursorVisibility, this);
    this.cursorVisibility = bind(this.cursorVisibility, this);
    this.createDesktopCursor = bind(this.createDesktopCursor, this);
    this.createVRCursor = bind(this.createVRCursor, this);
  },
  addEventListeners: function addEventListeners() {
    this.el.sceneEl.addEventListener('enter-vr', this.onEnterVR);
    this.el.sceneEl.addEventListener('exit-vr', this.onExitVR);
  },
  removeEventListeners: function removeEventListeners() {
    this.el.sceneEl.removeEventListener('enter-vr', this.onEnterVR);
    this.el.sceneEl.removeEventListener('exit-vr', this.onExitVR);
  },
  play: function play() {
    this.el.sceneEl.renderer.antialias = true;
    var el = this.el;
    this.addEventListeners();
  },
  remove: function remove() {
    this.removeEventListeners();
  },
  isOculusGo: function isOculusGo() {
    //Mozilla/5.0 (Linux; Android 7.1.2; Pacific Build/N2G48H) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/4.7.6.119081797 SamsungBrowser/4.0 Chrome/61.0.3163.141 Mobile VR Safari/537.36
    return /Pacific Build.+OculusBrowser.+SamsungBrowser.+Mobile ?VR/i.test(window.navigator.userAgent);
  },
  showLaserControls: function showLaserControls() {
    return this.isOculusGo() || AFRAME.utils.device.checkHasPositionalTracking();
  },
  setVROnlyVisibility: function setVROnlyVisibility(vis) {
    var vrOnly = document.querySelectorAll(".vr-only");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = vrOnly[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        el = _step.value;

        if (el.tagName.includes("-")) {
          el.setAttribute("visible", vis);
        } else {
          if (vis === true) {
            el.style.visibility = "visible";
          } else if (vis == false) {
            el.style.visibility = "hidden";
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var browserOnly = document.querySelectorAll(".browser-only");
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = browserOnly[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        el = _step2.value;

        if (el.tagName.includes("-")) {
          el.setAttribute("visible", !vis);
        } else {
          if (vis === true) {
            el.style.visibility = "hidden";
          } else if (vis == false) {
            el.style.visibility = "visible";
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  },
  onEnterVR: function onEnterVR() {
    this.mode = 'VR'; // this.updateCursorVisibility();

    if (this.cursor) {
      this.el.removeChild(this.cursor);
    }

    this.setVROnlyVisibility(true);
    this.cursor = this.createVRCursor(); // this.pointer.setAttribute('visible', true);

    console.log("FUSING"); // this.cursorEl.setAttribute('geometry', 'primitive: ring; radiusInner: 0.03; radiusOuter: 0.035');
    // this.cursorEl.setAttribute('material', 'color: #ffffff; transparent: true; shader: flat; opacity: 0.0; alphaTest: 0.4;');

    this.cursor.setAttribute('cursor', 'fuse: true; fuseTimeout: 1500; rayOrigin: entity');
  },
  onExitVR: function onExitVR() {
    this.mode = 'browser';
    this.el.removeChild(this.cursor);
    this.cursor = this.createDesktopCursor();
    this.setVROnlyVisibility(false); // this.updateCursorVisibility();
    // this.cursor.setAttribute('cursor', 'fuse: false; rayOrigin: mouse');
    // this.cursor.setAttribute('visible', false);
  },
  updateCursorVisibility: function updateCursorVisibility() {
    var data = this.data;
    var cursorEl = this.el.sceneEl.querySelector('.cursor');

    if (cursorEl) {
      cursorEl.setAttribute('visible', this.cursorVisibility());
    }
  },
  cursorVisibility: function cursorVisibility() {
    var data = this.data;

    if (data.visibility == 'both') {
      return true;
    } else if (data.visibility == this.mode) {
      return true;
    }

    return false;
  },
  createDesktopCursor: function createDesktopCursor() {
    var cursor = document.createElement('a-entity'); // cursor.setAttribute('visible', this.cursorVisibility());

    cursor.className = 'ray-caster cursor'; // cursor.setAttribute('cursor', 'fuse: true; fuseTimeout: 1500');

    cursor.setAttribute('cursor', 'rayOrigin: mouse');
    cursor.setAttribute('position', '0 0 -1'); // cursor.setAttribute('geometry', 'primitive: ring; radiusInner: 0.03; radiusOuter: 0.035');
    // cursor.setAttribute('material', 'color: #ffffff; transparent: true; shader: flat; opacity: 0.0; alphaTest: 0.4;');

    cursor.setAttribute('raycaster', 'objects: .clickable; interval: 0');
    this.el.appendChild(cursor);
    return cursor;
  },
  createVRCursor: function createVRCursor() {
    {
      /*<a-entity id="cursor-pointer" cursor="fuse: true; fuseTimeout: 1500"*/
    }
    {
      /*position="0 0 -1"*/
    }
    {
      /*geometry="primitive: ring; radiusInner: 0.030; radiusOuter: 0.035"*/
    }
    {
      /*material="color: #ffffff; transparent: true; opacity: 0.0; shader: flat"*/
    }
    {
      /*raycaster="objects: .gaze-target">*/
    }
    {
      /*<a-entity id="cursor-circle" position="0 0 -0.1" geometry="primitive: circle; radius: 0.005" material="color: #ffffff; shader: flat;"></a-entity>*/
    }
    {
      /*<!--<a-entity position="0 0 -0.1" geometry="primitive: ring; radiusInner: 0.002; radiusOuter: 0.003" material="color: #6D6D6D; shader: flat"></a-entity>-->*/
    }
    {
      /*<!--<a-animation begin="click" easing="ease-in" attribute="scale" dur="150" fill="forwards" from="0.1 0.1 0.1" to="1 1 1"></a-animation>-->*/
    }
    {
      /*<a-animation begin="mouseenter" end="mouseleave" easing="ease-in" attribute="geometry.radiusInner" dur="1" delay="5" from="0.0" to="0.030" fill="none"></a-animation>*/
    }
    {
      /*<a-animation begin="mouseenter" end="mouseleave" easing="ease-in" attribute="geometry.radiusOuter" dur="1" delay="5" from="0.0" to="0.035" fill="none"></a-animation>*/
    }
    {
      /*<a-animation begin="mouseenter" end="mouseleave" easing="ease-in" attribute="material.opacity" dur="100" delay="10" from="0.0" to="0.5" fill="none"></a-animation>*/
    }
    {
      /*<a-animation begin="mouseenter" end="mouseleave" easing="ease-in" attribute="geometry.radiusInner" dur="1390" delay="110" from="0.030" to="0.005" fill="none"></a-animation>*/
    }
    {
      /*<a-animation begin="mouseenter" end="mouseleave" easing="ease-in" attribute="geometry.radiusOuter" dur="1390" delay="110" from="0.035" to="0.010" fill="none"></a-animation>*/
    }
    {
      /*<a-animation begin="mouseleave" end="mouseenter" easing="ease-in" attribute="material.opacity" dur="100" delay="10" from="0.5" to="0.0" fill="none"></a-animation>*/
    }
    {}
    /*</a-entity>*/
    // creates the cursor

    var cursor = document.createElement('a-entity'); // cursor.setAttribute('visible', this.cursorVisibility());

    cursor.className = 'ray-caster cursor';
    cursor.setAttribute('cursor', 'fuse: true; fuseTimeout: 1500'); // cursor.setAttribute('cursor', 'rayOrigin: mouse');

    cursor.setAttribute('position', '0 0 -1');
    cursor.setAttribute('geometry', 'primitive: ring; radiusInner: 0.03; radiusOuter: 0.035');
    cursor.setAttribute('material', 'color: #ffffff; transparent: true; shader: flat; opacity: 0.0; alphaTest: 0.4;');
    cursor.setAttribute('raycaster', 'objects: .clickable; interval: 0');
    this.el.appendChild(cursor); // creates the pointer

    var pointer = document.createElement('a-entity');
    pointer.id = 'cursor-circle'; // pointer.setAttribute('visible', false);

    pointer.setAttribute('position', '0 0 0');
    pointer.setAttribute('geometry', 'primitive: circle; radius: 0.005');
    pointer.setAttribute('material', 'color: #ffffff; shader: flat;');
    cursor.appendChild(pointer); // creates animation for cursor

    var clickAnimation = document.createElement('a-animation');
    clickAnimation.setAttribute('begin', 'click');
    clickAnimation.setAttribute('easing', 'linear');
    clickAnimation.setAttribute('attribute', 'scale');
    clickAnimation.setAttribute('dur', '150');
    clickAnimation.setAttribute('fill', 'forwards');
    clickAnimation.setAttribute('from', '0.1 0.1 0.1');
    clickAnimation.setAttribute('to', '1 1 1');
    cursor.appendChild(clickAnimation);
    var fusingAnimation = document.createElement('a-animation');
    fusingAnimation.setAttribute('begin', 'cursor-fusing');
    fusingAnimation.setAttribute('easing', 'linear');
    fusingAnimation.setAttribute('attribute', 'scale');
    fusingAnimation.setAttribute('dur', '1500');
    fusingAnimation.setAttribute('fill', 'backwards');
    fusingAnimation.setAttribute('from', '1 1 1');
    fusingAnimation.setAttribute('to', '0.1 0.1 0.1');
    cursor.appendChild(fusingAnimation);
    var fusingOpacityAnimation = document.createElement('a-animation');
    fusingOpacityAnimation.setAttribute('begin', 'cursor-fusing');
    fusingOpacityAnimation.setAttribute('easing', 'linear');
    fusingOpacityAnimation.setAttribute('attribute', 'material.opacity');
    fusingOpacityAnimation.setAttribute('dur', '100');
    fusingOpacityAnimation.setAttribute('fill', 'none');
    fusingOpacityAnimation.setAttribute('from', '0.0');
    fusingOpacityAnimation.setAttribute('to', '0.8');
    cursor.appendChild(fusingOpacityAnimation);
    var mouseOutAnimation = document.createElement('a-animation');
    mouseOutAnimation.setAttribute('begin', 'mouseleave');
    mouseOutAnimation.setAttribute('attribute', 'material.opacity');
    mouseOutAnimation.setAttribute('dur', '100');
    mouseOutAnimation.setAttribute('from', '0.8');
    mouseOutAnimation.setAttribute('to', '0.0');
    cursor.appendChild(mouseOutAnimation);
    return cursor;
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/components/geometry-resize.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/components/geometry-resize.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent('geometry-resize', {
  schema: {
    padding: {
      type: 'number'
    }
  },
  play: function play() {
    var childElement = this.el.querySelector('*');
    setTimeout(AFRAME.utils.bind(function () {
      var el = this.el;
      var data = this.data;
      var width = childElement.components['geometry'].data.width;
      var height = childElement.components['geometry'].data.height;
      console.log("Text is ".concat(height, " X ").concat(width));
      el.setAttribute('geometry', {
        width: width + 2 * data.padding,
        height: height + 2 * data.padding
      });
    }, this), 50);
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/components/icon-renderer.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/components/icon-renderer.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent('icon-renderer', {
  schema: {
    name: {
      type: 'string',
      default: 'icon-help'
    },
    'font-family': {
      type: 'string',
      default: 'lucidweb'
    },
    'font-size': {
      type: 'string',
      default: Math.pow(2, 7) - 10 + 'px'
    },
    'size': {
      type: 'number',
      default: Math.pow(2, 7)
    },
    'padding': {
      type: 'number',
      default: 5
    } // 'color': { type: 'string', default: '#ffffff'}

  },
  init: function init() {
    this.bindMethods();
    this.fontLoaded = false;
  },
  bindMethods: function bindMethods() {
    this.render = AFRAME.utils.bind(this.render, this);
    this._dec2hex = AFRAME.utils.bind(this._dec2hex, this);
    this._randomId = AFRAME.utils.bind(this._randomId, this);
  },
  play: function play() {
    setTimeout(this.render, 2000);
  },
  render: function render() {
    var data = this.data;
    var iconData = this.system.renderIcon(data.name, {
      'font-family': data['font-family'],
      'font-size': data['font-size'],
      'size': data['size'],
      'padding': data['padding'],
      'color': '#ffffff'
    }); // create an image

    var newImage = document.createElement('img');
    newImage.id = data.name;
    newImage.src = iconData;
    newImage.height = data.size;
    newImage.width = data.size; // add to assets

    var assets = this.el.sceneEl.querySelector('a-assets');
    assets.appendChild(newImage);
    this.el.setAttribute('material', {
      src: '#' + data.name
    });
  },
  _dec2hex: function _dec2hex(dec) {
    return ('0' + dec.toString(16)).substr(-2);
  },
  _randomId: function _randomId(length) {
    var arr = new Uint8Array((length || 40) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this._dec2hex).join('');
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/components/modify-property.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/components/modify-property.js ***!
  \*******************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/enabling-mixin */ "../../../../extensions/lucidweb-aframe-extensions/utilities/enabling-mixin.js");

AFRAME.registerComponent('modify-property', Object(_utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__["default"])({
  schema: {
    target: {
      type: 'selector'
    },
    property: {
      type: 'string'
    },
    field: {
      type: 'string'
    },
    value: {
      type: 'string'
    }
  },
  onEnable: function onEnable() {
    var data = this.data;
    data.target.setAttribute(data.property, data.field, data.value);
  }
}));

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/components/track-position.js":
/*!******************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/components/track-position.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent('track-position', {
  schema: {
    target: {
      type: 'selector'
    },
    frequency: {
      type: 'number',
      default: 1000 / 60
    },
    x: {
      type: 'boolean',
      default: true
    },
    y: {
      type: 'boolean',
      default: true
    },
    z: {
      type: 'boolean',
      default: true
    }
  },
  init: function init() {
    this.bindMethods();
    this.intervalPointer = null;
  },
  play: function play() {
    var data = this.data;
    this.intervalPointer = setInterval(this.trackTargetPosition, data.frequency);
  },
  remove: function remove() {
    if (this.intervalPointer != null) {
      clearInterval(this.intervalPointer);
      this.intervalPointer = null;
    }
  },
  bindMethods: function bindMethods() {
    this.trackTargetPosition = AFRAME.utils.bind(this.trackTargetPosition, this);
  },
  trackTargetPosition: function trackTargetPosition(evt) {
    var el = this.el;
    var data = this.data;
    var targetPosition = data.target.getAttribute('position');
    var currentPosition = el.getAttribute('position');
    var newPosition = currentPosition;
    var positionUpdateNeeded = false;

    if (data.x && targetPosition.x != currentPosition.x) {
      positionUpdateNeeded = true;
      newPosition.x = targetPosition.x;
    } else if (data.y && targetPosition.y != currentPosition.y) {
      positionUpdateNeeded = true;
      newPosition.y = targetPosition.y;
    } else if (data.z && targetPosition.z != currentPosition.z) {
      positionUpdateNeeded = true;
      newPosition.z = targetPosition.z;
    }

    if (positionUpdateNeeded) {
      el.setAttribute('position', newPosition);
    }
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/components/track-rotation.js":
/*!******************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/components/track-rotation.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent('track-rotation', {
  schema: {
    target: {
      type: 'selector'
    },
    frequency: {
      type: 'number',
      default: 1000 / 1
    },
    x: {
      type: 'boolean',
      default: true
    },
    y: {
      type: 'boolean',
      default: true
    },
    z: {
      type: 'boolean',
      default: true
    }
  },
  init: function init() {
    this.bindMethods();
    this.intervalPointer = null;
  },
  play: function play() {
    var data = this.data;
    this.intervalPointer = setInterval(this.trackTargetRotation, data.frequency);
  },
  remove: function remove() {
    if (this.intervalPointer != null) {
      clearInterval(this.intervalPointer);
      this.intervalPointer = null;
    }
  },
  bindMethods: function bindMethods() {
    this.trackTargetRotation = AFRAME.utils.bind(this.trackTargetRotation, this);
  },
  trackTargetRotation: function trackTargetRotation(evt) {
    var el = this.el;
    var data = this.data;
    var targetRotation = data.target.object3D.rotation;
    var currentRotation = el.object3D.rotation; // console.log('Y = ' + THREE.Math.radToDeg(targetRotation.y));
    // let newRotation: THREE.Euler = new THREE.Euler(
    //     currentRotation.x, currentRotation.y, currentRotation.z, currentRotation.order
    // );
    // let rotationUpdateNeeded = false;
    // if (data.x && targetRotation.x != currentRotation.x) {
    //     rotationUpdateNeeded = true;
    //     // newRotation.x = targetRotation.x;
    //     if (targetRotation.x < 0) {
    //         newRotation.x = THREE.Math.degToRad(
    //             THREE.Math.radToDeg(targetRotation.x) + 360
    //         )
    //     } else {
    //         newRotation.x = targetRotation.x;
    //     }
    //
    // } else if (data.y && targetRotation.y != currentRotation.y) {
    //     rotationUpdateNeeded = true;
    //     // newRotation.y = targetRotation.y;
    //     if (THREE.Math.radToDeg(targetRotation.y) < 0) {
    //         newRotation.y = THREE.Math.degToRad(
    //             THREE.Math.radToDeg(targetRotation.y) + 360
    //         )
    //     } else {
    //         newRotation.y = targetRotation.y;
    //     }
    // } else if (data.z && targetRotation.z != currentRotation.z) {
    //     rotationUpdateNeeded = true;
    //     // newRotation.z = targetRotation.z;
    //     newRotation.z = targetRotation.z;
    // }
    // if (rotationUpdateNeeded) {
    // el.object3D.rotation.set(
    //     THREE.Math.degToRad(newRotation.x),
    //     THREE.Math.degToRad(newRotation.y),
    //     THREE.Math.degToRad(newRotation.z)
    // );
    // el.object3D.rotation.x = newRotation.x;
    // el.object3D.rotation.y = newRotation.y;
    // el.object3D.rotation.z = newRotation.z;
    // const current_x = THREE.Math.radToDeg(currentRotation.x);
    // const current_y = THREE.Math.radToDeg(targetRotation.y);
    // const current_z = THREE.Math.radToDeg(currentRotation.z);
    // const x = THREE.Math.radToDeg(newRotation.x);
    // const y = THREE.Math.radToDeg(newRotation.y);
    // const z = THREE.Math.radToDeg(newRotation.z);
    // console.log(`target rotation y = ${current_y}`);
    // console.log(`new rotation x = ${x}, y = ${y}, z = ${z}`);
    // }
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/components/ui-button.js":
/*!*************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/components/ui-button.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent('ui-button', {
  schema: {
    icon: {
      type: 'string'
    },
    label: {
      type: 'string'
    },
    shape: {
      type: 'string',
      default: 'box'
    },
    size: {
      type: 'number',
      default: 0.30
    },
    depth: {
      type: 'number',
      default: 0.05
    },
    color: {
      type: 'string',
      default: '#333'
    },
    transparent: {
      type: 'boolean',
      default: false
    },
    opacity: {
      type: 'number',
      default: 1.0
    },
    activeColor: {
      type: 'string',
      default: '#6c6c6c'
    },
    selectedColor: {
      type: 'string',
      default: '#6c6c6c'
    },
    detailColor: {
      type: 'string',
      default: '#fff'
    },
    detailActiveColor: {
      type: 'string',
      default: '#fff'
    },
    detailSelectedColor: {
      type: 'string',
      default: '#333'
    }
  },
  init: function init() {
    this.buttonGeometry = this.createGeometry();
    this.rotationGroup = this.createRotationGroup(this.buttonGeometry);
    this.icon = this.createIcon(this.rotationGroup);
    this.label = this.createLabel(this.rotationGroup);
    this.bindMethods();
    this.createAnimations();
  },
  bindMethods: function bindMethods() {
    this.onClick = AFRAME.utils.bind(this.onClick, this);
    this.onMouseEnter = AFRAME.utils.bind(this.onMouseEnter, this);
    this.onMouseLeave = AFRAME.utils.bind(this.onMouseLeave, this);
    this.onFusing = AFRAME.utils.bind(this.onFusing, this);
    this.createMaterialProperties = AFRAME.utils.bind(this.createMaterialProperties, this);
    this.createAnimations = AFRAME.utils.bind(this.createAnimations, this);
  },
  addEventListeners: function addEventListeners() {
    this.el.addEventListener('mouseenter', this.onMouseEnter);
    this.el.addEventListener('fusing', this.onFusing);
    this.el.addEventListener('mouseleave', this.onMouseLeave);
    this.el.addEventListener('click', this.onClick);
  },
  removeEventListeners: function removeEventListeners() {
    this.el.removeEventListener('mouseenter', this.onMouseEnter);
    this.el.removeEventListener('fusing', this.onFusing);
    this.el.removeEventListener('mouseleave', this.onMouseLeave);
    this.el.removeEventListener('click', this.onClick);
  },
  play: function play() {
    this.addEventListeners();
  },
  remove: function remove() {
    this.removeEventListeners();
  },
  update: function update(oldData) {
    var newData = this.data;

    if (newData.opacity != oldData.opacity && this.buttonGeometry) {
      this.buttonGeometry.setAttribute('material', {
        opacity: newData.opacity
      });
    }
  },
  createGeometry: function createGeometry() {
    var el = this.el;
    var data = this.data; // creates geometry

    var geometry = null;

    if (data.shape == 'box') {
      geometry = this.createButtonGeometry();
    } else if (data.shape == 'cylinder') {
      geometry = this.createCylinderGeometry();
    }

    geometry.setAttribute('class', el.getAttribute('class'));
    this.el.appendChild(geometry);
    return geometry;
  },
  createMaterialProperties: function createMaterialProperties() {
    var data = this.data;
    var materialProperties = {};
    materialProperties.color = data.color;

    if (data.transparent) {
      materialProperties.transparent = true;
      materialProperties.opacity = data.opacity;
    }

    return materialProperties;
  },
  createAnimations: function createAnimations() {
    // adds animation for interaction
    var data = this.data;
    var mouseEnterOpacityAnimation = document.createElement('a-animation');
    mouseEnterOpacityAnimation.setAttribute('attribute', 'ui-button.opacity');
    mouseEnterOpacityAnimation.setAttribute('dur', 400);
    mouseEnterOpacityAnimation.setAttribute('delay', 50);
    mouseEnterOpacityAnimation.setAttribute('begin', 'mouseenter');
    mouseEnterOpacityAnimation.setAttribute('end', 'mouseleave');
    mouseEnterOpacityAnimation.setAttribute('from', data.opacity);
    mouseEnterOpacityAnimation.setAttribute('to', 1.0);
    var mouseLeaveOpacityAnimation = document.createElement('a-animation');
    mouseLeaveOpacityAnimation.setAttribute('attribute', 'ui-button.opacity');
    mouseLeaveOpacityAnimation.setAttribute('delay', 50);
    mouseLeaveOpacityAnimation.setAttribute('dur', 400);
    mouseLeaveOpacityAnimation.setAttribute('begin', 'mouseleave');
    mouseLeaveOpacityAnimation.setAttribute('end', 'mouseenter');
    mouseLeaveOpacityAnimation.setAttribute('from', 1.0);
    mouseLeaveOpacityAnimation.setAttribute('to', data.opacity);
    this.el.append(mouseEnterOpacityAnimation);
    this.el.appendChild(mouseLeaveOpacityAnimation);
  },
  createButtonGeometry: function createButtonGeometry() {
    var data = this.data;
    var geometry = document.createElement('a-entity');
    geometry.setAttribute('geometry', {
      'primitive': 'box',
      'width': data.size,
      'height': data.size,
      'depth': data.depth
    });
    geometry.setAttribute('material', this.createMaterialProperties());
    return geometry;
  },
  createCylinderGeometry: function createCylinderGeometry() {
    var data = this.data;
    var geometry = document.createElement('a-entity');
    geometry.setAttribute('geometry', {
      'primitive': 'cylinder',
      'radius': data.size / 2,
      'height': data.depth
    });
    geometry.setAttribute('material', this.createMaterialProperties());
    geometry.setAttribute('rotation', '-90 0 0');
    return geometry;
  },
  createRotationGroup: function createRotationGroup(parent) {
    var data = this.data;
    var rotationGroup = document.createElement('a-entity');

    if (data.shape == 'cylinder') {
      rotationGroup.setAttribute('rotation', "-90 0 0");
      rotationGroup.setAttribute('position', '0 ' + (data.depth / 2 + 0.001) + ' 0');
    } else {
      rotationGroup.setAttribute('position', '0 0 ' + (data.depth / 2 + 0.001));
    }

    parent.appendChild(rotationGroup);
    return rotationGroup;
  },
  createIcon: function createIcon(parent) {
    var data = this.data;
    var el = this.el;
    var icon = document.createElement('ui-icon');
    icon.setAttribute('name', 'icon-' + data.icon);
    icon.setAttribute('height', data.size * 0.8);
    icon.setAttribute('width', data.size * 0.8);

    if (data.label != '') {
      icon.setAttribute('position', '0 0.03 0');
    }

    parent.appendChild(icon);
    return icon;
  },
  createLabel: function createLabel(parent) {
    var data = this.data;
    var label = document.createElement('a-text');
    label.setAttribute('value', data.label);
    label.setAttribute('text', {
      'width': 0.85
    });
    label.setAttribute('align', 'center');
    label.setAttribute('position', '0 -0.075 0');
    parent.appendChild(label);
    return label;
  },
  onMouseEnter: function onMouseEnter(evt) {
    var data = this.data;
    this.buttonGeometry.setAttribute('material', {
      color: data.activeColor
    });
    this.icon.setAttribute('color', data.detailActiveColor);
    this.label.setAttribute('color', data.detailActiveColor);
  },
  onMouseLeave: function onMouseLeave(evt) {
    var data = this.data;
    this.buttonGeometry.setAttribute('material', {
      color: data.color
    });
    this.icon.setAttribute('color', data.detailColor);
    this.label.setAttribute('color', data.detailColor);
  },
  onFusing: function onFusing(evt) {
    var data = this.data;
    this.buttonGeometry.setAttribute('material', {
      color: data.activeColor
    });
    this.icon.setAttribute('color', data.detailActiveColor);
    this.label.setAttribute('color', data.detailActiveColor);
  },
  onClick: function onClick(evt) {
    var data = this.data;
    this.buttonGeometry.setAttribute('material', {
      color: data.selectedColor
    });
    this.icon.setAttribute('color', data.detailSelectedColor);
    this.label.setAttribute('color', data.detailSelectedColor);
    this.el.emit('lucidweb.event.triggered', {}, false);
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/components/video-controls.js":
/*!******************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/components/video-controls.js ***!
  \******************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_time_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/time-utilities */ "../../../../extensions/lucidweb-aframe-extensions/utilities/time-utilities.js");

AFRAME.registerComponent('video-controls', {
  init: function init() {
    this.bindMethods(); // config

    this.depth = 0.05;
    this.width = 1.7;
    this.vrMode = false; // timeout pointers

    this.keepAlivePointer = null; // interval pointers

    this.scrollbarRaycastInterval = [];
    this.menuRaycastInterval = null;
    this.progressUpdatingInterval = null; // markup elements are initialized as nulls

    this.activator = null;
    this.activatorButton = null;
    this.controls = null;
    this.keepAliveTarget = null;
    this.background = null;
    this.playButton = null;
    this.pauseButton = null;
    this.replayButton = null;
    this.volumeOnButton = null;
    this.volumeOffButton = null;
    this.description = null;
    this.title = null;
    this.timeProgress = null;
    this.scrollbar = null;
    this.scrollbarBackground = null;
    this.scrollbarProgress = null;
    this.scrollbarCursor = null;
    this.scrollbarCursorLabel = null; // on init, we start creating necessary markup and attach events

    this.createControls(); // a video controller always starts as invisible
    // this.el.setAttribute('visible', false);
  },
  videoControllerSystem: function videoControllerSystem() {
    return this.el.sceneEl.systems['video-controller'];
  },
  play: function play() {
    var el = this.el; //el.object3D.lookAt(el.sceneEl.camera.el.object3D.getWorldPosition());

    this.addEventListeners();
  },
  bindMethods: function bindMethods() {
    var bind = AFRAME.utils.bind;
    this.addEventListeners = bind(this.addEventListeners, this);
    this.removeEventListeners = bind(this.removeEventListeners, this); // calculations

    this.calculateScrollbarRelativeIntersectionPoint = bind(this.calculateScrollbarRelativeIntersectionPoint, this);
    this.calculateScrollbarLeftMostPosition = bind(this.calculateScrollbarLeftMostPosition, this);
    this.updateVideoProgressIndicators = bind(this.updateVideoProgressIndicators, this);
    this.updateVideoScrollbarProgress = bind(this.updateVideoScrollbarProgress, this);
    this.hideMenu = bind(this.hideMenu, this);
    this.showMenu = bind(this.showMenu, this);
    this.keepMenuVisible = bind(this.keepMenuVisible, this);
    this.verifyOrientedTowardsMenu = bind(this.verifyOrientedTowardsMenu, this); // creational methods

    this.createControls = bind(this.createControls, this);
    this.createTimeProgress = bind(this.createTimeProgress, this);
    this.createScrollbar = bind(this.createScrollbar, this);
    this.createScrollbarCursor = bind(this.createScrollbarCursor, this);
    this.createDescription = bind(this.createDescription, this);
    this.createBackground = bind(this.createBackground, this);
    this.createKeepAliveTarget = bind(this.createKeepAliveTarget, this);
    this.createPauseButton = bind(this.createPauseButton, this);
    this.createPlayButton = bind(this.createPlayButton, this);
    this.createReplayButton = bind(this.createReplayButton, this);
    this.createTitle = bind(this.createTitle, this);
    this.createVolumeOffButton = bind(this.createVolumeOffButton, this);
    this.createVolumeOnButton = bind(this.createVolumeOnButton, this); // controls event handling

    this.onEnterVR = bind(this.onEnterVR, this);
    this.onExitVR = bind(this.onExitVR, this);
    this.onKeepAliveExpired = bind(this.onKeepAliveExpired, this);
    this.onSceneClick = bind(this.onSceneClick, this);
    this.onActivateButtonClicked = bind(this.onActivateButtonClicked, this);
    this.onPlayButtonClicked = bind(this.onPlayButtonClicked, this);
    this.onReplayButtonClicked = bind(this.onReplayButtonClicked, this);
    this.onPauseButtonClicked = bind(this.onPauseButtonClicked, this);
    this.onVolumeOnButtonClicked = bind(this.onVolumeOnButtonClicked, this);
    this.onVolumeOffButtonClicked = bind(this.onVolumeOffButtonClicked, this);
    this.onScrollbarClicked = bind(this.onScrollbarClicked, this); // this.onScrollbarMouseOver = bind(this.onScrollbarMouseOver, this);

    this.onRaycastIntersection = bind(this.onRaycastIntersection, this);
    this.onRaycastIntersectionCleared = bind(this.onRaycastIntersectionCleared, this);
    this.updateScrollbarCursor = bind(this.updateScrollbarCursor, this); // video event handling

    this.onVideoControllerPlayingStarted = bind(this.onVideoPlayingStarted, this);
    this.onVideoControllerPlayingEnded = bind(this.onVideoControllerPlayingEnded, this);
    this.onVideoControllerPlayingPaused = bind(this.onVideoControllerPlayingPaused, this);
    this.onVideoControllerPlaying = bind(this.onVideoControllerPlaying, this);
    this.onVideoControllerVolumeOn = bind(this.onVideoControllerVolumeOn, this);
    this.onVideoControllerVolumeOff = bind(this.onVideoControllerVolumeOff, this);
  },
  addEventListeners: function addEventListeners() {
    // video controller events
    var el = this.el;
    var scene = el.sceneEl;
    scene.addEventListener('lucidweb.video-controller.playing-started', this.onVideoPlayingStarted);
    scene.addEventListener('lucidweb.video-controller.playing-ended', this.onVideoControllerPlayingEnded);
    scene.addEventListener('lucidweb.video-controller.video-paused', this.onVideoControllerPlayingPaused);
    scene.addEventListener('lucidweb.video-controller.video-playing', this.onVideoControllerPlaying);
    scene.addEventListener('lucidweb.video-controller.volume-off', this.onVideoControllerVolumeOff);
    scene.addEventListener('lucidweb.video-controller.volume-on', this.onVideoControllerVolumeOn);
    scene.addEventListener('enter-vr', this.onEnterVR);
    scene.addEventListener('exit-vr', this.onExitVR); // scene.addEventListener('click', this.onSceneClick, false);
    // button control events

    this.activator.addEventListener('click', this.onActivateButtonClicked);
    this.playButton.addEventListener('click', this.onPlayButtonClicked);
    this.replayButton.addEventListener('click', this.onReplayButtonClicked);
    this.pauseButton.addEventListener('click', this.onPauseButtonClicked);
    this.volumeOnButton.addEventListener('click', this.onVolumeOnButtonClicked);
    this.volumeOffButton.addEventListener('click', this.onVolumeOffButtonClicked);
    this.scrollbar.addEventListener('click', this.onScrollbarClicked); // this.scrollbar.addEventListener('mouseover', this.onScrollbarMouseOver);

    this.scrollbar.addEventListener('raycaster-intersected', this.onRaycastIntersection);
    this.scrollbar.addEventListener('raycaster-intersected-cleared', this.onRaycastIntersectionCleared);
  },
  removeEventListeners: function removeEventListeners() {
    // video controller events
    var el = this.el;
    var scene = el.sceneEl;
    scene.removeEventListener('lucidweb.video-controller.playing-started', this.onVideoPlayingStarted);
    scene.removeEventListener('lucidweb.video-controller.playing-ended', this.onVideoControllerPlayingEnded);
    scene.removeEventListener('lucidweb.video-controller.video-paused', this.onVideoControllerPlayingPaused);
    scene.removeEventListener('lucidweb.video-controller.video-playing', this.onVideoControllerPlaying);
    scene.removeEventListener('lucidweb.video-controller.volume-off', this.onVideoControllerVolumeOff);
    scene.removeEventListener('lucidweb.video-controller.volume-on', this.onVideoControllerVolumeOn);
    scene.removeEventListener('enter-vr', this.onEnterVR);
    scene.removeEventListener('exit-vr', this.onExitVR);
    scene.removeEventListener('click', this.onSceneClick, false); // button control events

    this.playButton.removeEventListener('click', this.onPlayButtonClicked);
    this.pauseButton.removeEventListener('click', this.onPauseButtonClicked);
    this.volumeOnButton.removeEventListener('click', this.onVolumeOnButtonClicked);
    this.volumeOffButton.removeEventListener('click', this.onVolumeOffButtonClicked);
    this.scrollbar.removeEventListener('click', this.onScrollbarClicked); // this.scrollbar.removeEventListener('mouseover', this.onScrollbarMouseOver);

    this.scrollbar.removeEventListener('raycaster-intersected', this.onRaycastIntersection);
    this.scrollbar.removeEventListener('raycaster-intersected-cleared', this.onRaycastIntersectionCleared);
  },
  remove: function remove() {
    this.removeEventListeners();
  },
  onVideoPlayingStarted: function onVideoPlayingStarted(evt) {
    var titleLabel = this.videoControllerSystem().title();
    this.title.setAttribute('text', {
      value: titleLabel
    });
    this.progressUpdatingInterval = setInterval(this.updateVideoProgressIndicators, 1000 / 60); // adapt UI buttons

    var position = this.pauseButton.getAttribute('position');
    this.pauseButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 0.001
    });
    this.playButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 1000
    });
    this.replayButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 1000
    });
  },
  onVideoControllerPlayingEnded: function onVideoControllerPlayingEnded(evt) {
    // stop updating progress
    if (this.progressUpdatingInterval) {
      clearInterval(this.progressUpdatingInterval);
    } // adapt visible buttons


    var position = this.pauseButton.getAttribute('position');
    this.pauseButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 1000
    });
    this.playButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 1000
    });
    this.replayButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 0.001
    }); // shows the menu whatever the timeout

    if (this.vrMode) {
      this.showMenu();
    }
  },
  onVideoControllerPlayingPaused: function onVideoControllerPlayingPaused(evt) {
    var position = this.pauseButton.getAttribute('position');
    this.pauseButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 1000
    });
    this.playButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 0.001
    });
    this.replayButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 1000
    });
  },
  onVideoControllerPlaying: function onVideoControllerPlaying(evt) {
    var titleLabel = this.videoControllerSystem().title();
    this.title.setAttribute('text', {
      value: titleLabel
    });
    this.progressUpdatingInterval = setInterval(this.updateVideoProgressIndicators, 1000 / 60); // adapt UI

    var position = this.playButton.getAttribute('position');
    this.pauseButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 0.001
    });
    this.playButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 1000
    });
    this.replayButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 1000
    }); // hide UI after timeout

    this.keepMenuVisible(1000);
  },
  onVideoControllerVolumeOff: function onVideoControllerVolumeOff(evt) {
    var position = this.volumeOnButton.getAttribute('position');
    this.volumeOnButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 0.001
    });
    this.volumeOffButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 1000
    });
  },
  onVideoControllerVolumeOn: function onVideoControllerVolumeOn(evt) {
    var position = this.volumeOnButton.getAttribute('position');
    this.volumeOnButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 1000
    });
    this.volumeOffButton.setAttribute('position', {
      x: position.x,
      y: position.y,
      z: 0.001
    });
  },
  updateVideoScrollbarProgress: function updateVideoScrollbarProgress(relativeProgress) {
    var xOffset = -(this.width / 2) * (1 - relativeProgress);
    var width = this.width * relativeProgress;
    this.scrollbarProgress.setAttribute('geometry', {
      width: width
    });
    this.scrollbarProgress.setAttribute('position', {
      x: xOffset,
      y: 0,
      z: 0
    });
  },
  updateVideoProgressIndicators: function updateVideoProgressIndicators() {
    var duration = this.videoControllerSystem().duration();
    var currentTime = this.videoControllerSystem().currentTime();
    var relativeProgress = currentTime / duration; // duration labels

    var durationLabel = Object(_utilities_time_utilities__WEBPACK_IMPORTED_MODULE_0__["timeLabel"])(duration);
    var currentTimeLabel = Object(_utilities_time_utilities__WEBPACK_IMPORTED_MODULE_0__["timeLabel"])(currentTime);
    this.timeDisplaySeparator.setAttribute('text', {
      value: currentTimeLabel + ' / ' + durationLabel
    }); // progress bar

    this.updateVideoScrollbarProgress(relativeProgress);
  },
  onSceneClick: function onSceneClick(evt) {
    var menuVisibility = this.el.getAttribute('visible');

    if (this.vrMode && menuVisibility == false) {
      this.onActivateButtonClicked(evt);
    }
  },
  onEnterVR: function onEnterVR(evt) {
    this.vrMode = true;
    this.activator.setAttribute('visible', true);
    this.activator.className = 'clickable';
  },
  onExitVR: function onExitVR(evt) {
    this.vrMode = false; // hides menu activation button

    this.activator.setAttribute('visible', false);
    this.activator.className = '';
    this.hideMenu();
  },
  showMenu: function showMenu() {
    var menuRaycastInterval = this.menuRaycastInterval;
    var oldTimeoutPointer = this.keepAlivePointer; // clears timeout to hide menu

    if (oldTimeoutPointer !== null) {
      clearTimeout(oldTimeoutPointer);
    } // make all unclickable elements clickable


    var unclickableElements = this.controls.querySelectorAll('.unclickable');

    for (var i = 0; i < unclickableElements.length; i++) {
      unclickableElements[i].className = 'clickable';
    } // show the menu


    if (this.vrMode) {
      this.activator.setAttribute('visible', false);
    } else {
      this.activator.setAttribute('visible', true);
    }

    this.el.setAttribute('visible', true);
  },
  verifyOrientedTowardsMenu: function verifyOrientedTowardsMenu() {
    var raycasterComponent = this.el.sceneEl.querySelector('.ray-caster').components['raycaster'];
    var rawIntersections = [];
    var intersections = raycasterComponent.raycaster.intersectObjects([this.keepAliveTarget.object3D], true); // verify whether an intersection is found...

    if (intersections.length > 0) {
      return true;
    }

    return false;
  },
  hideMenu: function hideMenu() {
    var menuRaycastInterval = this.menuRaycastInterval; // hiding menu activator visual

    if (this.vrMode) {
      this.activator.setAttribute('visible', true);
    } else {
      this.activator.setAttribute('visible', false);
    }

    this.el.setAttribute('visible', false); // make all clickable elements unclickable

    var clickableElements = this.controls.querySelectorAll('.clickable');

    for (var i = 0; i < clickableElements.length; i++) {
      clickableElements[i].className = 'unclickable';
    }

    if (menuRaycastInterval != null) {
      clearInterval(menuRaycastInterval);
      this.menuRaycastInterval = null;
    }
  },
  keepMenuVisible: function keepMenuVisible(timeout) {
    var oldTimeoutPointer = this.keepAlivePointer;

    if (oldTimeoutPointer !== null) {
      clearTimeout(oldTimeoutPointer);
    } // wait until timeout to hide menu


    this.keepAlivePointer = setTimeout(this.onKeepAliveExpired, timeout);
  },
  onKeepAliveExpired: function onKeepAliveExpired(evt) {
    var orientedTowardsMenu = this.verifyOrientedTowardsMenu();

    if (orientedTowardsMenu) {
      this.keepMenuVisible(4000);
    } else {
      // make sure all clickable elements are changed to unclickable
      var clickableElements = this.controls.querySelectorAll('.clickable');

      for (var i = 0; i < clickableElements.length; i++) {
        clickableElements[i].className = 'unclickable';
      }

      this.keepAlivePointer = null;
      this.el.setAttribute('visible', false);

      if (this.vrMode) {
        this.activator.setAttribute('visible', true);
        this.activator.setAttribute('class', 'clickable');
      } else {
        this.activator.setAttribute('visible', false);
        this.activator.setAttribute('class', 'unclickable');
      }
    }
  },
  onActivateButtonClicked: function onActivateButtonClicked(evt) {
    // make all necessary unclickable elements clickable
    var unclickableElements = this.controls.querySelectorAll('.unclickable');

    for (var i = 0; i < unclickableElements.length; i++) {
      unclickableElements[i].className = 'clickable';
    } // remove activator button


    this.activator.setAttribute('visible', false);
    this.activator.setAttribute('class', 'unclickable'); // position and show controls

    var previousControlsRotation = this.el.object3D.getWorldRotation();
    var currentCameraRotation = this.el.sceneEl.camera.el.object3D.getWorldRotation();
    this.el.object3D.setRotationFromEuler(new THREE.Euler(previousControlsRotation.x, currentCameraRotation.y, previousControlsRotation.z, previousControlsRotation.order)); // this.el.setAttribute('rotation', );

    this.el.setAttribute('visible', true);
    this.keepMenuVisible(4000);
  },
  onPlayButtonClicked: function onPlayButtonClicked(evt) {
    this.videoControllerSystem().onVideoControlsPlayClicked();
  },
  onReplayButtonClicked: function onReplayButtonClicked(evt) {
    this.videoControllerSystem().onVideoControlsReplayClicked();
  },
  onPauseButtonClicked: function onPauseButtonClicked(evt) {
    this.videoControllerSystem().onVideoControlsPauseClicked();
  },
  onVolumeOnButtonClicked: function onVolumeOnButtonClicked(evt) {
    this.videoControllerSystem().onVideoControlsVolumeOnClicked();
  },
  onVolumeOffButtonClicked: function onVolumeOffButtonClicked(evt) {
    this.videoControllerSystem().onVideoControlsVolumeOffClicked();
  },

  /**
   * Calculates the leftmost position for the scrollbar in world coordinates
   * @returns {Vector3}
   */
  calculateScrollbarLeftMostPosition: function calculateScrollbarLeftMostPosition() {
    var localPosition = this.scrollbarBackground.object3D.position;
    var localStartPosition = new THREE.Vector3(localPosition.x - this.width / 2, localPosition.y, localPosition.z);
    var scrollbarLeftMostPosition = this.scrollbarBackground.object3D.localToWorld(localStartPosition);
    return localStartPosition;
  },

  /**
   * How far on the background bar did we intersect?  0.0 <= x <= 1.0
   * @param intersection
   * @returns {number}
   */
  calculateScrollbarRelativeIntersectionPoint: function calculateScrollbarRelativeIntersectionPoint(intersection) {
    var leftMostPosition = this.calculateScrollbarLeftMostPosition();
    var positionOfIntersection = intersection.x - leftMostPosition.x;
    var distance = leftMostPosition.distanceTo(intersection);
    var relativeDistance = distance / this.width;
    return relativeDistance;
  },
  onScrollbarClicked: function onScrollbarClicked(evt) {
    // what relative point in the video do we need?
    var intersection = evt.detail.intersection.point;
    var relativeNewProgress = this.calculateScrollbarRelativeIntersectionPoint(intersection); // request change of time in the controllers

    var newTime = Math.floor(relativeNewProgress * this.videoControllerSystem().duration());
    this.updateVideoScrollbarProgress(relativeNewProgress);
    this.videoControllerSystem().changeTime(newTime);
  },
  onRaycastIntersection: function onRaycastIntersection(evt) {
    this.scrollbarRaycastInterval.push(setInterval(this.updateScrollbarCursor, 10));
  },
  onRaycastIntersectionCleared: function onRaycastIntersectionCleared(evt) {
    if (this.scrollbarRaycastInterval.length > 0) {
      var idToClear = this.scrollbarRaycastInterval.shift();
      clearInterval(idToClear);
    }

    if (this.scrollbarRaycastInterval.length == 0) {
      this.scrollbarCursor.setAttribute('visible', false);
    }
  },
  updateScrollbarCursor: function updateScrollbarCursor() {
    var el = this.el;
    var scene = this.el.sceneEl;
    var raycasterComponent = scene.querySelector('.ray-caster').components['raycaster']; // manually intersect the raycaster with the scrollbar background continuously

    var rawIntersections = [];
    var intersections = raycasterComponent.raycaster.intersectObjects([this.scrollbarBackground.object3D], true); // update the cursor position

    if (intersections.length > 0) {
      // change the cursor position
      var progression = this.calculateScrollbarRelativeIntersectionPoint(intersections[0].point);
      this.scrollbarCursor.setAttribute('visible', true);
      this.scrollbarCursor.setAttribute('position', {
        x: this.width * progression - this.width / 2,
        y: 0,
        z: 0
      }); // update cursor label

      var newTime = Math.floor(this.videoControllerSystem().duration() * progression);
      var newTimeMinutes = Math.floor(newTime / 60);
      var newTimeSeconds = newTime % 60;
      var newTimeMinutesStr = ("00" + newTimeMinutes).slice(-2);
      var newTimeSecondsStr = ("00" + newTimeSeconds).slice(-2);
      var newTimeLabel = "".concat(newTimeMinutesStr, ":").concat(newTimeSecondsStr);
      this.scrollbarCursorLabel.setAttribute('text', {
        value: Object(_utilities_time_utilities__WEBPACK_IMPORTED_MODULE_0__["timeLabel"])(newTime)
      });
    }
  },
  createControls: function createControls() {
    var el = this.el;
    this.el.setAttribute('visible', false);
    this.controls = document.createElement('a-entity');
    this.controls.setAttribute('position', '0 0 -1.5');
    this.controls.setAttribute('rotation', '0 0 0');
    this.el.appendChild(this.controls);
    this.activator = this.createActivator(el.sceneEl);
    this.background = this.createBackground(this.controls);
    this.keepAliveTarget = this.createKeepAliveTarget(this.controls);
    this.playButton = this.createPlayButton(this.background);
    this.pauseButton = this.createPauseButton(this.background);
    this.replayButton = this.createReplayButton(this.background);
    this.volumeOnButton = this.createVolumeOnButton(this.background);
    this.volumeOffButton = this.createVolumeOffButton(this.background);
    this.description = this.createDescription(this.background);
    this.scrollbar = this.createScrollbar(this.controls);
  },
  createActivator: function createActivator(parentEl) {
    // creates rotational control
    this.activator = document.createElement('a-entity');
    this.activator.setAttribute('rotation', '50 0 0');
    this.activator.setAttribute('track-position', {
      target: '#maincamera'
    });
    this.activator.setAttribute('track-rotation', {
      target: '#maincamera',
      x: false,
      z: false
    });
    this.activator.setAttribute('visible', false); // creates entity

    this.activatorButton = document.createElement('ui-button');
    this.activatorButton.setAttribute('shape', 'cylinder');
    this.activatorButton.setAttribute('icon', 'menu');
    this.activatorButton.setAttribute('position', '0 -1.2 0');
    this.activatorButton.setAttribute('rotation', '90 0 0');
    this.activatorButton.setAttribute('depth', '0.01');
    this.activatorButton.setAttribute('size', 0.1);
    this.activatorButton.setAttribute('visible', true);
    this.activatorButton.setAttribute('transparent', true);
    this.activatorButton.setAttribute('opacity', 0.4);
    this.activatorButton.setAttribute('color', '#333');
    this.activatorButton.setAttribute('active-color', '#333'); // save to document

    this.activator.appendChild(this.activatorButton);
    parentEl.appendChild(this.activator);
    return this.activator;
  },
  createBackground: function createBackground(parentEl) {
    // create button background
    var backgroundEl = document.createElement('a-entity');
    backgroundEl.setAttribute('geometry', 'primitive: box; color: #333; depth: ' + this.depth + '; width: 1.695; height: 0.2995;');
    backgroundEl.setAttribute('material', 'color: #333;'); // creates activator invisible element

    var keepAliveBoxEl = document.createElement('a-entity');
    keepAliveBoxEl.setAttribute('geometry', 'primitive: box; color: #333; depth: ' + this.depth + '; width: 1.695; height: 0.2995;');
    keepAliveBoxEl.setAttribute('material', 'color: none; opacity: 0');
    keepAliveBoxEl.setAttribute('position', '0 0.025 -0.05');
    keepAliveBoxEl.setAttribute('scale', '1.1 1.7 0'); // insert in document

    parentEl.appendChild(backgroundEl);
    parentEl.appendChild(keepAliveBoxEl);
    return backgroundEl;
  },
  createKeepAliveTarget: function createKeepAliveTarget(parentEl) {
    // creates activator invisible element
    var keepAliveBoxEl = document.createElement('a-entity');
    keepAliveBoxEl.setAttribute('geometry', 'primitive: box; color: #333; depth: ' + this.depth + '; width: 1.695; height: 0.2995;');
    keepAliveBoxEl.setAttribute('material', 'color: none; opacity: 0');
    keepAliveBoxEl.setAttribute('position', '0 0.025 -0.05');
    keepAliveBoxEl.setAttribute('scale', '1.1 1.7 0'); // insert in document

    parentEl.appendChild(keepAliveBoxEl);
    return keepAliveBoxEl;
  },
  createPlayButton: function createPlayButton(parentEl) {
    // create entity
    var playButton = document.createElement('ui-button');
    playButton.setAttribute('icon', 'play');
    playButton.className = 'clickable';
    playButton.setAttribute('position', '-0.7 0 0.001'); // insert in document

    parentEl.appendChild(playButton);
    return playButton;
  },
  createPauseButton: function createPauseButton(parentEl) {
    // create entity
    var pauseButton = document.createElement('ui-button');
    pauseButton.setAttribute('icon', 'pause');
    pauseButton.className = 'clickable';
    pauseButton.setAttribute('position', '-0.7 0 1000'); // insert in document

    parentEl.appendChild(pauseButton);
    return pauseButton;
  },
  createReplayButton: function createReplayButton(parentEl) {
    // create entity
    var replayButton = document.createElement('ui-button');
    replayButton.setAttribute('icon', 'play');
    replayButton.className = 'clickable';
    replayButton.setAttribute('position', '-0.7 0 1000'); // insert in document

    parentEl.appendChild(replayButton);
    return replayButton;
  },
  createVolumeOnButton: function createVolumeOnButton(parentEl) {
    // create entity
    var volumeOnButton = document.createElement('ui-button');
    volumeOnButton.setAttribute('icon', 'mute');
    volumeOnButton.className = 'clickable';
    volumeOnButton.setAttribute('position', '-0.4 0 1000'); // insert in document

    parentEl.appendChild(volumeOnButton);
    return volumeOnButton;
  },
  createVolumeOffButton: function createVolumeOffButton(parentEl) {
    // create entity
    var volumeOffButton = document.createElement('ui-button');
    volumeOffButton.setAttribute('icon', 'volume');
    volumeOffButton.className = 'clickable';
    volumeOffButton.setAttribute('position', '-0.4 0 0.001'); // insert in document

    parentEl.appendChild(volumeOffButton);
    return volumeOffButton;
  },
  createTitle: function createTitle(parentEl) {
    // creates entity
    var title = document.createElement('a-text');
    title.setAttribute('value', 'Old city center');
    title.setAttribute('align', 'left');
    title.setAttribute('width', 2);
    title.setAttribute('position', '0 0.05 0'); // insert in document

    parentEl.appendChild(title);
    return title;
  },
  createTimeProgress: function createTimeProgress(parentEl) {
    // creates entity
    var timeProgress = document.createElement('a-text');
    timeProgress.setAttribute('value', '00:34 | 00:54');
    timeProgress.setAttribute('align', 'left');
    timeProgress.setAttribute('width', 1.6);
    timeProgress.setAttribute('position', '0 -0.05 0');
    this.timeProgressLabel = timeProgress; // insert in document

    parentEl.appendChild(timeProgress);
    return timeProgress;
  },
  createDescription: function createDescription(parentEl) {
    // create entity
    var descriptionEl = document.createElement('a-entity');
    descriptionEl.setAttribute('position', '-0.15 0 0.051'); // creates children

    this.title = this.createTitle(descriptionEl);
    this.timeProgress = this.createTimeProgress(descriptionEl); // insert it in document

    parentEl.appendChild(descriptionEl);
    return descriptionEl;
  },
  createScrollbar: function createScrollbar(parentEl) {
    // creates entities
    var scrollbarEl = document.createElement('a-entity');
    scrollbarEl.className = 'clickable';
    scrollbarEl.setAttribute('position', '0 0.190 0'); // creates children

    var scrollbarBackground = document.createElement('a-entity');
    scrollbarBackground.className = 'scrollbar-background';
    scrollbarBackground.setAttribute('geometry', 'primitive: box; depth: ' + (this.depth - 0.005) + '; width: ' + (this.width - 0.01) + '; height: 0.0495;');
    scrollbarBackground.setAttribute('material', 'color: #484848;');
    scrollbarEl.appendChild(scrollbarBackground);
    this.scrollbarBackground = scrollbarBackground;
    var scrollbarProgress = document.createElement('a-entity');
    scrollbarProgress.setAttribute('geometry', 'primitive: box; depth: ' + this.depth + '; width: 0.0001; height: 0.0502;');
    scrollbarProgress.setAttribute('position', '-0.85 0 0');
    scrollbarProgress.setAttribute('material', 'color: #00ddc0;');
    scrollbarEl.appendChild(scrollbarProgress);
    this.scrollbarProgress = scrollbarProgress;
    this.scrollbarCursor = this.createScrollbarCursor(scrollbarEl); // insert it in document

    parentEl.appendChild(scrollbarEl);
    return scrollbarEl;
  },
  createScrollbarCursor: function createScrollbarCursor(parentEl) {
    // creates entity
    var scrollbarCursor = document.createElement('a-entity');
    scrollbarCursor.setAttribute('visible', false);
    scrollbarCursor.setAttribute('position', '0.120 0 0');
    var scrollbarBox = document.createElement('a-entity');
    scrollbarBox.setAttribute('geometry', 'primitive: box; depth: ' + (this.depth + 0.01) + '; width: 0.05; height: 0.06;');
    scrollbarBox.setAttribute('material', 'color: #f8eb0e;');
    scrollbarCursor.appendChild(scrollbarBox);
    var scrollbarLabel = document.createElement('a-text');
    scrollbarLabel.setAttribute('value', '');
    scrollbarLabel.setAttribute('align', 'center');
    scrollbarLabel.setAttribute('width', '1');
    scrollbarLabel.setAttribute('position', '0 0.09 0');
    scrollbarLabel.setAttribute('color', '#f8eb0e');
    scrollbarCursor.appendChild(scrollbarLabel);
    this.scrollbarCursorLabel = scrollbarLabel; // insert into document

    parentEl.appendChild(scrollbarCursor);
    return scrollbarCursor;
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/config/icon-map.js":
/*!********************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/config/icon-map.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'icon-reload': "\uE800",
  'icon-arrow_down': "\uE801",
  'icon-arrow_left': "\uE802",
  'icon-arrow_up': "\uE803",
  'icon-cardboard': "\uE804",
  'icon-code': "\uE805",
  'icon-facebook': "\uE806",
  'icon-mute': "\uE807",
  'icon-pause': "\uE808",
  'icon-play': "\uE809",
  'icon-resize': "\uE80B",
  'icon-settings': "\uE80C",
  'icon-share': "\uE80D",
  'icon-twitter': "\uE80E",
  'icon-volume': "\uE80F",
  'icon-close': "\uE810",
  'icon-link': "\uE811",
  'icon-menu': "\uE86E"
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/primitives/modify-property.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/primitives/modify-property.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('modify-property', {
  defaultComponents: {
    'modify-property': {}
  },
  mappings: {
    'target': 'modify-property.target',
    'property': 'modify-property.property',
    'field': 'modify-property.field',
    'value': 'modify-property.value'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/primitives/ui-button.js":
/*!*************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/primitives/ui-button.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('ui-button', {
  defaultComponents: {
    'ui-button': {},
    'enable-children': {}
  },
  mappings: {
    'width': 'ui-button.width',
    'button-width': 'ui-button.buttonWidth',
    'shape': 'ui-button.shape',
    'size': 'ui-button.size',
    'depth': 'ui-button.depth',
    'color': 'ui-button.color',
    'icon': 'ui-button.icon',
    'label': 'ui-button.label',
    'transparent': 'ui-button.transparent',
    'opacity': 'ui-button.opacity',
    'visible': 'ui-button.visible',
    'active-color': 'ui-button.activeColor'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/primitives/ui-icon.js":
/*!***********************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/primitives/ui-icon.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('ui-icon', {
  defaultComponents: {
    'icon-renderer': {},
    'geometry': {
      primitive: 'plane'
    },
    'material': {
      shader: 'flat',
      transparent: true,
      alphaTest: 0.2
    }
  },
  mappings: {
    name: 'icon-renderer.name',
    height: 'geometry.height',
    width: 'geometry.width',
    color: 'material.color'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/primitives/video-controls.js":
/*!******************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/primitives/video-controls.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('video-controls', {
  defaultComponents: {
    'video-controls': {}
  },
  mappings: {}
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/ui/systems/icon-renderer.js":
/*!**************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/ui/systems/icon-renderer.js ***!
  \**************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_icon_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/icon-map */ "../../../../extensions/lucidweb-aframe-extensions/ui/config/icon-map.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


AFRAME.registerSystem('icon-renderer', {
  init: function init() {
    this.columns = 0;
    this.size = 54;
    this.margin = 5; // how many pixels to leave between two icons on the canvas

    this.padding = 5;
    this._canvas = null;
    this.renderUnicodeCharacter = AFRAME.utils.bind(this.renderUnicodeCharacter, this); // contains icon information organized by rows in the first dimension and columns in the second

    this.characterMap = []; // add a paragraph to pre-load the font

    var preloader = document.createElement('p');
    preloader.className = 'preload-icons';
    preloader.innerText = '.';
    document.body.appendChild(preloader);
  },
  _iconMeasurements: function _iconMeasurements(character, context) {
    var iconDimension = this._iconDimension();

    var iconTextMeasurements = context.measureText(character);
    return {
      x: this.size / 2 + this.padding,
      y: this.padding,
      width: iconDimension,
      height: iconDimension
    };
  },
  _createCanvas: function _createCanvas(size) {
    var canvas = document.createElement('canvas');
    canvas.className = 'icon-renderer';
    canvas.setAttribute('width', size + 'px');
    canvas.setAttribute('height', size + 'px');
    document.body.appendChild(canvas);
    return canvas;
  },
  _drawIcon: function _drawIcon(character, config) {
    // get drawing context
    var canvas = this._createCanvas(config['size']);

    var context = canvas.getContext('2d');
    context.font = config['font-size'] + ' ' + config['font-family'];
    context.textBaseline = 'top';
    context.textAlign = 'center';
    context.fillStyle = config['color']; // draw icon
    // const iconMeasurements = this._iconMeasurements(character, context);

    var textPositioning = {
      x: config['size'] / 2,
      y: config['padding'],
      width: config['size'],
      height: config['size'],
      'max-width': config['size']
    };
    context.fillText(character, textPositioning.x, textPositioning.y, textPositioning['max-width']);
    var data = canvas.toDataURL('image/png');
    document.body.removeChild(canvas);
    return data;
  },
  _defaultConfig: {
    'font-family': 'lucidweb',
    size: Math.pow(2, 7),
    'font-size': Math.pow(2, 7) - 10 + 'px',
    padding: 5,
    'color': '#ffffff'
  },
  renderIcon: function renderIcon(icon, customConfig) {
    if (icon in _config_icon_map__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      return this._drawIcon(_config_icon_map__WEBPACK_IMPORTED_MODULE_0__["default"][icon], _objectSpread({}, this._defaultConfig, customConfig));
    } else {
      console.log("Unknown icon: " + icon);
      return this._drawIcon(_config_icon_map__WEBPACK_IMPORTED_MODULE_0__["default"]['icon-help'], _objectSpread({}, this._defaultConfig, customConfig));
    }
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/assets/images/assist-cardboard-background.jpg":
/*!******************************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/assets/images/assist-cardboard-background.jpg ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/assist-cardboard-background.jpg?55dff3dfe512c120f4400bb7a76bc59b";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/assets/styles/utilities.less":
/*!*************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/assets/styles/utilities.less ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/styles/utilities.less";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/components/device-detection.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/components/device-detection.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent('device-detection', {
  schema: {
    isMobile: {
      type: 'string',
      default: ''
    },
    isOculus: {
      type: 'string',
      default: ''
    }
  },
  init: function init() {
    this.bindMethods();
  },
  play: function play() {
    // spoof the information for testing purposes
    this.el.setAttribute('device-detection', {
      'isMobile': AFRAME.utils.getUrlParameter('isMobile'),
      'isOculus': AFRAME.utils.getUrlParameter('isOculus')
    });
  },
  bindMethods: function bindMethods() {
    var bind = AFRAME.utils.bind;
    this.isMobile = bind(this.isMobile, this);
    this.isOculus = bind(this.isOculus, this);
  },
  isMobile: function isMobile() {
    var data = this.data;

    switch (data.isMobile) {
      case 'yes':
        console.warn("SPOOFING isMobile() == true");
        return true;
        break;

      case 'no':
        console.warn("SPOOFING isMobile() == false");
        return false;
        break;

      default:
        return AFRAME.utils.device.isMobile();
    }
  },
  isOculus: function isOculus() {
    // OculusBrowser in user agent string
    var data = this.data;

    switch (data.isOculus) {
      case 'yes':
        console.warn("SPOOFING isOculus() == true");
        return true;
        break;

      case 'no':
        console.warn("SPOOFING isOculus() == false");
        return false;
        break;

      default:
        var userAgent = window.navigator.userAgent;
        var matchingRegex = /(Pacific)?.+OculusBrowser/g;
        return userAgent.match(matchingRegex) != null;
    }
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/components/disable-group.js":
/*!************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/components/disable-group.js ***!
  \************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/enabling-mixin */ "../../../../extensions/lucidweb-aframe-extensions/utilities/enabling-mixin.js");

AFRAME.registerComponent('disable-group', Object(_utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__["default"])({
  schema: {
    group: {
      type: 'selector'
    }
  },
  onEnable: function onEnable() {
    var data = this.data;

    if (data.group == null || data.group == undefined) {
      console.warn('disable group has not found any children');
      return;
    } else {
      var childCount = data.group.children.length;

      for (var i = 0; i < childCount; i++) {
        var currentChild = data.group.children[i];
        console.log(currentChild);
        currentChild.emit('lucidweb.disable', {
          msg: 'disabled in group'
        }, false);
      }
    }
  }
}));

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/components/enable-group.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/components/enable-group.js ***!
  \***********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/enabling-mixin */ "../../../../extensions/lucidweb-aframe-extensions/utilities/enabling-mixin.js");

AFRAME.registerComponent('enable-group', Object(_utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__["default"])({
  schema: {
    group: {
      type: 'selector'
    }
  },
  onEnable: function onEnable() {
    var data = this.data;

    if (data.group == null || data.group == undefined) {
      console.warn('Enable group has not found any children');
      return;
    } else {
      var childCount = data.group.children.length;

      for (var i = 0; i < childCount; i++) {
        var currentChild = data.group.children[i];
        currentChild.emit('lucidweb.enable', {
          msg: 'Enabled in group'
        }, false);
      }
    }
  }
}));

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/components/hide-entity.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/components/hide-entity.js ***!
  \**********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/enabling-mixin */ "../../../../extensions/lucidweb-aframe-extensions/utilities/enabling-mixin.js");

AFRAME.registerComponent('hide-entity', Object(_utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__["default"])({
  schema: {
    target: {
      type: 'selector'
    }
  },
  onEnable: function onEnable() {
    var data = this.data;

    if (data.target) {
      data.target.setAttribute('visible', false);
      var clickableElements = data.target.querySelectorAll('.clickable');

      for (var i = 0; i < clickableElements.length; i++) {
        var oldClassname = clickableElements[i].className;
        clickableElements[i].className = oldClassname.replace('clickable', 'unclickable');
      }
    }
  }
}));

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/components/show-entity.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/components/show-entity.js ***!
  \**********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/enabling-mixin */ "../../../../extensions/lucidweb-aframe-extensions/utilities/enabling-mixin.js");

AFRAME.registerComponent('show-entity', Object(_utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__["default"])({
  schema: {
    target: {
      type: 'selector'
    }
  },
  onEnable: function onEnable() {
    var data = this.data;

    if (data.target) {
      data.target.setAttribute('visible', true);
      var unclickableElements = data.target.querySelectorAll('.unclickable');

      for (var i = 0; i < unclickableElements.length; i++) {
        var oldClassname = unclickableElements[i].className;
        unclickableElements[i].className = oldClassname.replace('unclickable', 'clickable');
      }
    }
  }
}));

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/components/show-loading-screen.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/components/show-loading-screen.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent('show-loading-screen', {
  init: function init() {
    this.modal = null;
    this.startExperience = AFRAME.utils.bind(this.startExperience, this);
    this.enterVrButton = null;
  },
  play: function play() {
    if (this.modal == null) {
      this.modal = this.createModal();
    }

    var links = this.modal.querySelectorAll('.start');

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', this.startExperience);
    }

    this.enterVrButton = this.el.sceneEl.querySelector('.a-enter-vr');

    if (this.enterVrButton != null) {
      this.enterVrButton.style.display = 'none';
    }
  },
  createModal: function createModal() {
    var modal = document.createElement('div');
    modal.className = 'modal-dark';
    var link = document.createElement('a');
    link.setAttribute('href', '#');
    link.className = 'start';
    var imageContainer = document.createElement('span');
    imageContainer.className = 'logo';
    var image = document.createElement('img');
    image.setAttribute('src', './assets/images/logo_lucidweb.png');
    imageContainer.appendChild(image);
    link.appendChild(imageContainer);
    var text = document.createElement('span');
    text.className = 'text';
    text.innerText = 'Start your experience';
    link.appendChild(text);
    modal.appendChild(link);
    document.body.appendChild(modal);
    return modal;
  },
  startExperience: function startExperience() {
    this.modal.style.display = 'none';

    if (this.enterVrButton != null) {
      this.enterVrButton.style.display = 'block';
    }

    var videoSystem = this.el.sceneEl.systems['video-controller'];

    if (videoSystem) {
      videoSystem.documentInteractionReceived = true;
    } else {
      console.error('No video controller system found');
    }

    var mainExperienceState = this.el.sceneEl.querySelector('#main');

    if (mainExperienceState) {
      mainExperienceState.emit('lucidweb.enable');
    } else {
      console.warn('Main experience not found');
    }
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/components/transition-to-cardboard.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/components/transition-to-cardboard.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent('transition-to-cardboard', {
  schema: {
    countdown: {
      type: 'number',
      default: 10
    }
  },
  init: function init() {
    this.bindMethods();
    this.transitioning = false;
    this.countdown = '';
    this.countdownPointer = null;
    this.initializeCountdownHTML();
    this.initializeModalHTML();
  },
  bindMethods: function bindMethods() {
    var bind = AFRAME.utils.bind;
    this.addEventListeners = bind(this.addEventListeners, this);
    this.removeEventListeners = bind(this.removeEventListeners, this);
    this.startTransitioningToCardboard = bind(this.startTransitioningToCardboard, this);
    this.onOrientationChange = bind(this.onOrientationChange, this);
    this.advanceCountdown = bind(this.advanceCountdown, this);
  },
  play: function play() {
    this.addEventListeners();
  },
  remove: function remove() {
    this.removeEventListeners();
  },
  addEventListeners: function addEventListeners() {
    window.addEventListener('orientationchange', this.onOrientationChange);
  },
  removeEventListeners: function removeEventListeners() {
    window.removeEventListener('orientationchange', this.onOrientationChange);
  },
  initializeCountdownHTML: function initializeCountdownHTML() {
    this.countdownParagraph = document.createElement('p');
    this.countdownParagraph.className = 'transition-to-cardboard-countdown';
    this.countdownParagraph.innerText = this.countdown;
  },
  initializeModalHTML: function initializeModalHTML() {
    this.modal = document.createElement('div');
    this.modal.id = "assist-cardboard";
    this.modal.innerText = '&nbsp;';
    this.modal.appendChild(this.countdownParagraph);
    this.el.sceneEl.appendChild(this.modal);
  },

  /**
   * Shows a modal background with instructions for cardboard usage
   */
  startTransitioningToCardboard: function startTransitioningToCardboard() {
    var data = this.data;
    this.transitioning = true;
    this.modal.style.display = 'block';
    this.countdown = data.countdown;
    var waitingPoint = setInterval(AFRAME.utils.bind(function () {
      if (this.countdown == 0) {
        console.warn("transitioning now too soon?");
        this.modal.style.display = 'none';
        this.el.enterVR();
        clearInterval(waitingPoint);
      }
    }, this), 50);
  },
  onOrientationChange: function onOrientationChange() {
    var data = this.data;
    var screenOrientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
    console.log(screenOrientation);

    if (this.transitioning && (screenOrientation == 'landscape' || screenOrientation == "landscape-primary" || screenOrientation == "landscape-secondary")) {
      console.log('detected landscape orientation');
      this.countdownPointer = setInterval(this.advanceCountdown, 1000);
    }
  },
  advanceCountdown: function advanceCountdown() {
    console.log("Counting " + this.countdown);

    if (this.countdown <= 0) {
      clearInterval(this.countdownPointer);
      this.countdownPointer = null;
    } else {// @todo update countdown number in HTML
    }

    this.countdown -= 1;
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/enabling-mixin.js":
/*!**************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/enabling-mixin.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (originalComponent) {
  originalComponent.originalInit = originalComponent.init;
  originalComponent.originalBindMethods = originalComponent.bindMethods;
  return AFRAME.utils.extendDeep({
    init: function init() {
      this.bindMethods();
      this.enabled = false;

      if (this.originalInit) {
        this.originalInit = AFRAME.utils.bind(this.originalInit, this);
        this.originalInit();
      }
    },
    bindMethods: function bindMethods() {
      this.onMixinEnable = AFRAME.utils.bind(this.onMixinEnable, this);
      this.onMixinDisable = AFRAME.utils.bind(this.onMixinDisable, this);

      if (this.onEnable) {
        this.onEnable = AFRAME.utils.bind(this.onEnable, this);
      }

      if (this.onDisable) {
        this.onDisable = AFRAME.utils.bind(this.onDisable, this);
      }

      if (this.originalBindMethods) {
        this.originalBindMethods();
      }
    },
    play: function play() {
      this.addMixinEventListeners();
    },
    remove: function remove() {
      this.removeMixinEventListeners();
    },
    addMixinEventListeners: function addMixinEventListeners() {
      this.el.addEventListener('lucidweb.enable', this.onMixinEnable);
      this.el.addEventListener('lucidweb.disable', this.onMixinDisable);
    },
    removeMixinEventListeners: function removeMixinEventListeners() {
      this.el.removeEventListener('lucidweb.enable', this.onMixinEnable);
      this.el.removeEventListener('lucidweb.disable', this.onMixinDisable);
    },
    onMixinEnable: function onMixinEnable() {
      if (this.onEnable) {
        this.onEnable();
      } else {
        console.warn('enabling-mixin requires method onEnable() which has not been implemented in the target object yet');
      }

      this.enabled = true;
    },
    onMixinDisable: function onMixinDisable() {
      if (this.onDisable) {
        this.onDisable();
      } else {
        console.warn('enabling-mixin requires method onDisable() which has not been implemented in the target object yet');
      }

      this.enabled = false;
    }
  }, originalComponent);
});
;

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/primitives/disable-group.js":
/*!************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/primitives/disable-group.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('disable-group', {
  defaultComponents: {
    'disable-group': {}
  },
  mappings: {
    'group': 'disable-group.group'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/primitives/enable-group.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/primitives/enable-group.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('enable-group', {
  defaultComponents: {
    'enable-group': {}
  },
  mappings: {
    'group': 'enable-group.group'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/primitives/hide-entity.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/primitives/hide-entity.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('hide-entity', {
  defaultComponents: {
    'hide-entity': {}
  },
  mappings: {
    'target': 'hide-entity.target'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/primitives/show-entity.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/primitives/show-entity.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('show-entity', {
  defaultComponents: {
    'show-entity': {}
  },
  mappings: {
    'target': 'show-entity.target'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/primitives/show-loading-screen.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/primitives/show-loading-screen.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('show-loading-screen', {
  defaultComponents: {
    'show-loading-screen': {}
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/utilities/time-utilities.js":
/*!**************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/utilities/time-utilities.js ***!
  \**************************************************************************************************************/
/*! exports provided: timeLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeLabel", function() { return timeLabel; });
function timeLabel(timeInSeconds) {
  var showSeconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var showMinutes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var showHours = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var hours = Math.floor(timeInSeconds / (60 * 60));
  var minutes = Math.floor(timeInSeconds / 60 - hours * 60 * 60);
  var seconds = Math.floor(timeInSeconds % 60);
  var hoursLabel = ('00' + hours).slice(-2);
  var minutesLabel = ('00' + minutes).slice(-2);
  var secondsLabel = ('00' + seconds).slice(-2);
  var labelParts = [];
  if (showHours) labelParts.push(hoursLabel);
  if (showMinutes) labelParts.push(minutesLabel);
  if (showSeconds) labelParts.push(secondsLabel);
  return labelParts.join(':');
}

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/assets/styles/video.less":
/*!*****************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/assets/styles/video.less ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/styles/video.less";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/components/desktop-videosphere-controls.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/components/desktop-videosphere-controls.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent('desktop-videosphere-controls', {
  schema: {
    video: {
      type: 'selector'
    }
  },
  init: function init() {
    this.closeButton = null;
    this.enabled = false;
    this.bindMethods();
  },
  play: function play() {
    this.addEventListeners();
  },
  remove: function remove() {
    this.removeEventListeners();
  },
  bindMethods: function bindMethods() {
    var bind = AFRAME.utils.bind;
    this.addEventListeners = bind(this.addEventListeners, this);
    this.removeEventListeners = bind(this.removeEventListeners, this);
    this.onCloseButtonClicked = bind(this.onCloseButtonClicked, this);
    this.onVideoEnded = bind(this.onVideoEnded, this);
    this._createCloseButton = bind(this._createCloseButton, this);
    this.onEnable = bind(this.onEnable, this);
    this.onDisable = bind(this.onDisable, this);
  },
  addEventListeners: function addEventListeners() {
    var data = this.data;
    var el = this.el;
    el.addEventListener('lucidweb.enable', this.onEnable);
    el.addEventListener('lucidweb.disable', this.onDisable);
    data.video.addEventListener('ended', this.onVideoEnded);
  },
  removeEventListeners: function removeEventListeners() {
    var data = this.data;
    var el = this.el;
    el.removeEventListener('lucidweb.enable', this.onEnable);
    el.removeEventListener('lucidweb.disable', this.onDisable);
    data.video.removeEventListener('ended', this.onVideoEnded);
  },
  onEnable: function onEnable() {
    var data = this.data;
    this.enabled = true;
    this.closeButton = this._createCloseButton();
  },
  onDisable: function onDisable() {
    var data = this.data;
    this.enabled = false;
    document.querySelector('.a-enter-vr').removeChild(this.closeButton);
    this.closeButton = null;
  },
  onCloseButtonClicked: function onCloseButtonClicked(evt) {
    if (this.enabled) {
      var el = this.el;
      el.emit('lucidweb.video.closed');
    }
  },
  onVideoEnded: function onVideoEnded(evt) {
    if (this.enabled) {
      var el = this.el;
      el.emit('lucidweb.video.ended');
    }
  },
  _createCloseButton: function _createCloseButton() {
    var closeButton = document.createElement('a');
    closeButton.className = 'desktop-video-close browser-only';
    closeButton.addEventListener('click', this.onCloseButtonClicked);
    var closeButtonIcon = document.createElement('span');
    closeButtonIcon.className = 'icon icon-arrow_left';
    closeButton.appendChild(closeButtonIcon);
    document.querySelector('.a-enter-vr').appendChild(closeButton);
    return closeButton;
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/components/end-video.js":
/*!****************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/components/end-video.js ***!
  \****************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/enabling-mixin */ "../../../../extensions/lucidweb-aframe-extensions/utilities/enabling-mixin.js");

AFRAME.registerComponent('end-video', Object(_utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__["default"])({
  schema: {
    controller: {
      type: 'selector'
    }
  },
  onEnable: function onEnable() {
    var data = this.data;

    if (data.controller) {
      console.log('end video: ' + data.controller.getAttribute('video'));
      var video = document.querySelector(data.controller.getAttribute('video'));
      data.controller.setAttribute('video-can-play', false);
      video.pause();
    } // this.data.controller.components['video-controller'].playVideo();

  }
}));

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/components/flat-video-controls.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/components/flat-video-controls.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent('flat-video-controls', {
  schema: {
    video: {
      type: 'selector'
    },
    width: {
      type: 'number'
    },
    buttonWidth: {
      type: 'number',
      default: 1.6
    },
    buttonDepth: {
      type: 'number',
      default: 0.01
    },
    exitTarget: {
      type: 'selector'
    }
  },
  init: function init() {
    this.bindMethods();
    this.controls = null;
    this.playButton = null;
    this.pauseButton = null;
    this.replayButton = null;
    this.volumeOffButton = null;
    this.volumeOnButton = null;
    this.closeButton = null;
    this.timeProgress = null;
    this.timeDuration = null;
    this.scrollbar = null;
    this.videoTimingDisplay = null;
    this.timeProgress = null;
    this.timeDisplaySeparator = null;
    this.timeDuration = null;
  },
  play: function play() {
    this.controls = this.createControls();
    this.el.appendChild(this.controls);
    this.addEventListeners();
  },
  remove: function remove() {
    this.removeEventListeners();
  },
  bindMethods: function bindMethods() {
    var bind = AFRAME.utils.bind;
    this.addEventListeners = bind(this.addEventListeners, this);
    this.removeEventListeners = bind(this.removeEventListeners, this);
    this.__formatTime = bind(this.__formatTime, this); // creational methods

    this.createControls = bind(this.createControls, this);
    this.createPlayButton = bind(this.createPlayButton, this);
    this.createPauseButton = bind(this.createPauseButton, this);
    this.createReplayButton = bind(this.createReplayButton, this);
    this.createVolumeOnButton = bind(this.createVolumeOnButton, this);
    this.createVolumeOffButton = bind(this.createVolumeOffButton, this);
    this.createCloseButton = bind(this.createCloseButton, this);
    this.createVideoTimingDisplay = bind(this.createVideoTimingDisplay, this);
    this.createVideoProgressDisplay = bind(this.createVideoProgressDisplay, this);
    this.createVideoDurationDisplay = bind(this.createVideoDurationDisplay, this);
    this.createBackToMenuButton = bind(this.createBackToMenuButton, this); // this component listens to video controller events to update it's GUI.  events could originate from other controls as well

    this.onVideoPlayingStarted = bind(this.onVideoPlayingStarted, this);
    this.onVideoControllerPlayingEnded = bind(this.onVideoControllerPlayingEnded, this);
    this.onVideoControllerStalled = bind(this.onVideoControllerStalled, this);
    this.onVideoControllerPlayingPaused = bind(this.onVideoControllerPlayingPaused, this);
    this.onVideoControllerPlaying = bind(this.onVideoControllerPlaying, this);
    this.onVideoControllerVolumeOff = bind(this.onVideoControllerVolumeOff, this);
    this.onVideoControllerVolumeOn = bind(this.onVideoControllerVolumeOn, this);
    this.onVideoControllerTimeUpdate = bind(this.onVideoControllerTimeUpdate, this); // button handlers to interact towards the video controller instead of responding to it

    this.onPlayButtonClicked = bind(this.onPlayButtonClicked, this);
    this.onReplayButtonClicked = bind(this.onReplayButtonClicked, this);
    this.onPauseButtonClicked = bind(this.onPauseButtonClicked, this);
    this.onVideoControllerChange = bind(this.onVideoControllerChange, this);
    this.onVolumeOnButtonClicked = bind(this.onVolumeOnButtonClicked, this);
    this.onVolumeOffButtonClicked = bind(this.onVolumeOffButtonClicked, this);
    this.closeButtonClicked = bind(this.closeButtonClicked, this); // utility methods

    this.videoControllerSystem = bind(this.videoControllerSystem, this);
  },
  addEventListeners: function addEventListeners() {
    // video controller events
    var el = this.el;
    var video = this.data.video;
    video.addEventListener('canplay', this.onVideoPlayingStarted);
    video.addEventListener('timeupdate', this.onVideoControllerTimeUpdate);
    video.addEventListener('ended', this.onVideoControllerPlayingEnded); // video.addEventListener('stalled', this.onVideoControllerStalled);

    video.addEventListener('volumechange', this.onVideoControllerChange);
    video.addEventListener('pause', this.onVideoControllerPlayingPaused);
    video.addEventListener('playing', this.onVideoControllerPlaying); // button control events

    this.playButton.addEventListener('click', this.onPlayButtonClicked);
    this.replayButton.addEventListener('click', this.onReplayButtonClicked);
    this.pauseButton.addEventListener('click', this.onPauseButtonClicked);
    this.volumeOnButton.addEventListener('click', this.onVolumeOnButtonClicked);
    this.volumeOffButton.addEventListener('click', this.onVolumeOffButtonClicked);
    this.closeButton.addEventListener('click', this.closeButtonClicked);
  },
  removeEventListeners: function removeEventListeners() {
    // video controller events
    var el = this.el;
    var scene = el.sceneEl;
    scene.removeEventListener('lucidweb.video-controller.playing-started', this.onVideoPlayingStarted);
    scene.removeEventListener('lucidweb.video-controller.playing-ended', this.onVideoControllerPlayingEnded);
    scene.removeEventListener('lucidweb.video-controller.video-paused', this.onVideoControllerPlayingPaused);
    scene.removeEventListener('lucidweb.video-controller.video-playing', this.onVideoControllerPlaying);
    scene.removeEventListener('lucidweb.video-controller.volume-off', this.onVideoControllerVolumeOff);
    scene.removeEventListener('lucidweb.video-controller.volume-on', this.onVideoControllerVolumeOn);
    scene.removeEventListener('lucidweb.video-controller.timeupdate', this.onVideoControllerTimeUpdate); // scene.removeEventListener('click', this.onSceneClick, false);
    // button control events

    this.activator.removeEventListener('click', this.onActivateButtonClicked);
    this.playButton.removeEventListener('click', this.onPlayButtonClicked);
    this.replayButton.removeEventListener('click', this.onReplayButtonClicked);
    this.pauseButton.removeEventListener('click', this.onPauseButtonClicked);
    this.volumeOnButton.removeEventListener('click', this.onVolumeOnButtonClicked);
    this.volumeOffButton.removeEventListener('click', this.onVolumeOffButtonClicked);
    this.closeButton.removeEventListener('click', this.closeButtonClicked); // this.scrollbar.removeEventListener('click', this.onScrollbarClicked);
    // this.scrollbar.removeEventListener('raycaster-intersected', this.onRaycastIntersection);
    // this.scrollbar.removeEventListener('raycaster-intersected-cleared', this.onRaycastIntersectionCleared);
  },
  videoControllerSystem: function videoControllerSystem() {
    return this.el.sceneEl.systems['video-controller'];
  },
  onVideoPlayingStarted: function onVideoPlayingStarted(evt) {
    // adapt UI buttons
    var position = this.pauseButton.getAttribute('position');
    this.pauseButton.setAttribute('position', {
      x: -0.78,
      y: position.y,
      z: 0.001
    });
    this.playButton.setAttribute('position', {
      x: -0.78,
      y: position.y,
      z: 1000
    });
    this.replayButton.setAttribute('position', {
      x: -0.78,
      y: position.y,
      z: 1000
    });
  },
  onVideoControllerPlayingEnded: function onVideoControllerPlayingEnded(evt) {
    var position = this.pauseButton.getAttribute('position');
    this.pauseButton.setAttribute('position', {
      x: -0.78,
      y: position.y,
      z: 1000
    });
    this.playButton.setAttribute('position', {
      x: -0.78,
      y: position.y,
      z: 1000
    });
    this.replayButton.setAttribute('position', {
      x: -0.78,
      y: position.y,
      z: 0.001
    });
  },
  onVideoControllerStalled: function onVideoControllerStalled(evt) {
    var video = this.data.video;

    if (video) {
      video.play();
    }
  },
  onVideoControllerPlayingPaused: function onVideoControllerPlayingPaused(evt) {
    var position = this.pauseButton.getAttribute('position');
    this.pauseButton.setAttribute('position', {
      x: -0.78,
      y: position.y,
      z: 1000
    });
    this.playButton.setAttribute('position', {
      x: -0.78,
      y: position.y,
      z: 0.001
    });
    this.replayButton.setAttribute('position', {
      x: -0.78,
      y: position.y,
      z: 1000
    });
  },
  onVideoControllerPlaying: function onVideoControllerPlaying(evt) {
    var position = this.pauseButton.getAttribute('position');
    this.pauseButton.setAttribute('position', {
      x: -0.78,
      y: position.y,
      z: 0.001
    });
    this.playButton.setAttribute('position', {
      x: -0.78,
      y: position.y,
      z: 1000
    });
    this.replayButton.setAttribute('position', {
      x: -0.78,
      y: position.y,
      z: 1000
    });
  },
  onVideoControllerChange: function onVideoControllerChange(evt) {
    var video = this.data.video;

    if (video.muted === true) {
      this.onVideoControllerVolumeOn(evt);
    } else {
      this.onVideoControllerVolumeOff(evt);
    }
  },
  onVideoControllerVolumeOff: function onVideoControllerVolumeOff(evt) {
    var position = this.volumeOnButton.getAttribute('position');
    this.volumeOnButton.setAttribute('position', {
      x: -0.58,
      y: position.y,
      z: 1000
    });
    this.volumeOffButton.setAttribute('position', {
      x: -0.58,
      y: position.y,
      z: 0.001
    });
  },
  onVideoControllerVolumeOn: function onVideoControllerVolumeOn(evt) {
    var position = this.volumeOnButton.getAttribute('position');
    this.volumeOnButton.setAttribute('position', {
      x: -0.58,
      y: position.y,
      z: 0.001
    });
    this.volumeOffButton.setAttribute('position', {
      x: -0.58,
      y: position.y,
      z: 1000
    });
  },
  onVideoControllerTimeUpdate: function onVideoControllerTimeUpdate(evt) {
    var video = this.data.video;

    var currentTime = this.__formatTime(video.currentTime);

    var duration = this.__formatTime(video.duration);

    this.timeProgress.setAttribute('text', {
      value: currentTime
    });
    this.timeDuration.setAttribute('text', {
      value: duration
    });
  },
  __formatTime: function __formatTime(time) {
    var minutes = "00" + Math.floor(time / 60);
    var seconds = "00" + Math.floor(time % 60);
    return "".concat(minutes.slice(-2), ":").concat(seconds.slice(-2));
  },
  onPlayButtonClicked: function onPlayButtonClicked(evt) {
    var data = this.data;
    var el = this.el;
    data.video.setAttribute('video-can-play', true);

    if (data.video) {
      data.video.play();
    }
  },
  onReplayButtonClicked: function onReplayButtonClicked(evt) {
    var data = this.data;
    var el = this.el;
    data.video.setAttribute('video-can-play', true);

    if (data.video) {
      data.video.currentTime = 0;
      data.video.play();
    }
  },
  onPauseButtonClicked: function onPauseButtonClicked(evt) {
    var data = this.data;
    var el = this.el;
    data.video.setAttribute('video-can-play', false);

    if (data.video) {
      data.video.pause();
    }
  },
  onVolumeOnButtonClicked: function onVolumeOnButtonClicked(evt) {
    var data = this.data;

    if (data.video) {
      data.video.muted = false;
    }
  },
  onVolumeOffButtonClicked: function onVolumeOffButtonClicked(evt) {
    var data = this.data;

    if (data.video) {
      data.video.muted = true;
    }
  },
  closeButtonClicked: function closeButtonClicked(evt) {
    var data = this.data;
    var el = this.el;
    data.video.setAttribute('video-can-play', false);

    if (data.exitTarget) {
      data.exitTarget.emit('lucidweb.disable');
    }
  },
  onScrollbarClicked: function onScrollbarClicked(evt) {},
  onScrollbarHoverStart: function onScrollbarHoverStart(evt) {},
  onScrollbarHoverEnd: function onScrollbarHoverEnd(evt) {},
  onRaycastIntersection: function onRaycastIntersection(evt) {},
  onRaycastIntersectionCleared: function onRaycastIntersectionCleared(evt) {},
  createControls: function createControls() {
    var data = this.data;
    this.controls = document.createElement('a-entity'); // this.controls.setAttribute('visible', false);

    this.controls.setAttribute('geometry', {
      'primitive': 'box',
      'width': data.width,
      'height': data.buttonWidth,
      'depth': data.buttonDepth
    });
    this.controls.setAttribute('material', {
      color: '#333'
    });
    this.controls.appendChild(this.createPlayButton());
    this.controls.appendChild(this.createPauseButton());
    this.controls.appendChild(this.createReplayButton());
    this.controls.appendChild(this.createVolumeOnButton());
    this.controls.appendChild(this.createVolumeOffButton());
    this.controls.appendChild(this.createCloseButton());
    this.controls.appendChild(this.createVideoTimingDisplay()); // this.controls.appendChild(this.createBackToMenuButton());

    return this.controls;
  },
  createPlayButton: function createPlayButton() {
    var data = this.data;
    this.playButton = document.createElement('ui-button');
    this.playButton.setAttribute('icon', 'play');
    this.playButton.className = 'clickable';
    this.playButton.setAttribute('position', '-0.78 0 0.001');
    this.playButton.setAttribute('depth', data.buttonDepth);
    this.playButton.setAttribute('size', data.buttonWidth);
    return this.playButton;
  },
  createPauseButton: function createPauseButton() {
    var data = this.data;
    this.pauseButton = document.createElement('ui-button');
    this.pauseButton.setAttribute('icon', 'pause');
    this.pauseButton.className = 'clickable';
    this.pauseButton.setAttribute('position', '-0.78 0 1000');
    this.pauseButton.setAttribute('depth', data.buttonDepth);
    this.pauseButton.setAttribute('size', data.buttonWidth);
    return this.pauseButton;
  },
  createReplayButton: function createReplayButton() {
    var data = this.data;
    this.replayButton = document.createElement('ui-button');
    this.replayButton.setAttribute('icon', 'reload');
    this.replayButton.className = 'clickable';
    this.replayButton.setAttribute('position', '-0.78 0 1000');
    this.replayButton.setAttribute('depth', data.buttonDepth);
    this.replayButton.setAttribute('size', data.buttonWidth);
    return this.replayButton;
  },
  createVolumeOnButton: function createVolumeOnButton() {
    var data = this.data;
    this.volumeOnButton = document.createElement('ui-button');
    this.volumeOnButton.setAttribute('icon', 'mute');
    this.volumeOnButton.className = 'clickable';
    this.volumeOnButton.setAttribute('position', '-0.58 0 1000');
    this.volumeOnButton.setAttribute('depth', data.buttonDepth);
    this.volumeOnButton.setAttribute('size', data.buttonWidth);
    return this.volumeOnButton;
  },
  createVolumeOffButton: function createVolumeOffButton() {
    var data = this.data;
    this.volumeOffButton = document.createElement('ui-button');
    this.volumeOffButton.setAttribute('icon', 'volume');
    this.volumeOffButton.className = 'clickable';
    this.volumeOffButton.setAttribute('position', '-0.58 0 0.001');
    this.volumeOffButton.setAttribute('depth', data.buttonDepth);
    this.volumeOffButton.setAttribute('size', data.buttonWidth);
    return this.volumeOffButton;
  },
  createCloseButton: function createCloseButton() {
    var data = this.data;
    this.closeButton = document.createElement('ui-button');
    this.closeButton.setAttribute('icon', 'arrow_left');
    this.closeButton.className = 'clickable';
    this.closeButton.setAttribute('position', '0.79 0 0.001');
    this.closeButton.setAttribute('depth', data.buttonDepth);
    this.closeButton.setAttribute('size', data.buttonWidth);
    return this.closeButton;
  },
  createVideoTimingDisplay: function createVideoTimingDisplay() {
    this.videoTimingDisplay = document.createElement('a-text');
    this.videoTimingDisplay.appendChild(this.createVideoProgressDisplay());
    this.videoTimingDisplay.appendChild(this.createVideoDisplaySeparator());
    this.videoTimingDisplay.appendChild(this.createVideoDurationDisplay());
    return this.videoTimingDisplay;
  },
  createVideoProgressDisplay: function createVideoProgressDisplay() {
    var data = this.data;
    this.timeProgress = document.createElement('a-text');
    this.timeProgress.setAttribute('transparent', true);
    this.timeProgress.setAttribute('opacity', 0.6);
    this.timeProgress.setAttribute('value', '00:34');
    this.timeProgress.setAttribute('align', 'left');
    this.timeProgress.setAttribute('width', 0.8);
    this.timeProgress.setAttribute('position', '-0.110 0 0.01');
    this.timeProgress.setAttribute('depth', data.buttonDepth);
    return this.timeProgress;
  },
  createVideoDisplaySeparator: function createVideoDisplaySeparator() {
    var data = this.data;
    this.timeDisplaySeparator = document.createElement('a-text');
    this.timeDisplaySeparator.setAttribute('transparent', true);
    this.timeDisplaySeparator.setAttribute('opacity', 0.6);
    this.timeDisplaySeparator.setAttribute('value', '|');
    this.timeDisplaySeparator.setAttribute('align', 'left');
    this.timeDisplaySeparator.setAttribute('width', 0.8);
    this.timeDisplaySeparator.setAttribute('position', '0 0 0.01');
    this.timeDisplaySeparator.setAttribute('depth', data.buttonDepth);
    return this.timeDisplaySeparator;
  },
  createVideoDurationDisplay: function createVideoDurationDisplay() {
    var data = this.data;
    this.timeDuration = document.createElement('a-text');
    this.timeDuration.setAttribute('transparent', true);
    this.timeDuration.setAttribute('opacity', 0.6);
    this.timeDuration.setAttribute('value', '00:54');
    this.timeDuration.setAttribute('align', 'left');
    this.timeDuration.setAttribute('width', 0.8);
    this.timeDuration.setAttribute('position', '0.03 0 0.01');
    this.timeDuration.setAttribute('depth', data.buttonDepth);
    return this.timeDuration;
  },
  createBackToMenuButton: function createBackToMenuButton() {}
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/components/mute-video.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/components/mute-video.js ***!
  \*****************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/enabling-mixin */ "../../../../extensions/lucidweb-aframe-extensions/utilities/enabling-mixin.js");

AFRAME.registerComponent('mute-video', Object(_utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__["default"])({
  schema: {
    video: {
      type: 'selector'
    },
    speed: {
      type: 'number',
      default: 300
    }
  },
  originalInit: function originalInit() {
    this.intervalSteps = 1000 / 60;
    this.intervalPointer = null;
    this.volumeSteps = 1;
  },
  originalBindMethods: function originalBindMethods() {// this.bind
  },
  onEnable: function onEnable() {
    var data = this.data;

    if (data.video) {
      var currentVolume = data.video.volume;
      this.volumeSteps = data.speed / this.intervalsteps;
      this.intervalPointer = setInterval(this.reduceVolume, data.speed);
    }
  },
  reduceVolume: function reduceVolume() {
    var data = this.data;
    var newVolume = data.video.volume - this.volumeSteps;
    data.video.volume = Math.max(0, newVolume);
  }
}));

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/components/pause-audio.js":
/*!******************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/components/pause-audio.js ***!
  \******************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/enabling-mixin */ "../../../../extensions/lucidweb-aframe-extensions/utilities/enabling-mixin.js");

AFRAME.registerComponent('pause-audio', Object(_utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__["default"])({
  schema: {
    audio: {
      type: 'selector'
    }
  },
  onEnable: function onEnable() {
    var data = this.data;

    if (data.audio) {
      data.audio.pause();
    }
  }
}));

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/components/play-audio.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/components/play-audio.js ***!
  \*****************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/enabling-mixin */ "../../../../extensions/lucidweb-aframe-extensions/utilities/enabling-mixin.js");

AFRAME.registerComponent('play-audio', Object(_utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__["default"])({
  schema: {
    audio: {
      type: 'selector'
    }
  },
  onEnable: function onEnable() {
    var data = this.data;

    if (data.audio) {
      data.audio.play();
    }
  }
}));

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/components/play-video.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/components/play-video.js ***!
  \*****************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/enabling-mixin */ "../../../../extensions/lucidweb-aframe-extensions/utilities/enabling-mixin.js");

AFRAME.registerComponent('play-video', Object(_utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__["default"])({
  schema: {
    controller: {
      type: 'selector'
    }
  },
  onEnable: function onEnable() {
    this.data.controller.components['video-controller'].playVideo();
  }
}));

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/components/start-video.js":
/*!******************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/components/start-video.js ***!
  \******************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/enabling-mixin */ "../../../../extensions/lucidweb-aframe-extensions/utilities/enabling-mixin.js");

AFRAME.registerComponent('start-video', Object(_utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__["default"])({
  schema: {
    video: {
      type: 'selector'
    }
  },
  onEnable: function onEnable() {
    var self = this;
    var data = this.data;

    if (data.video) {
      // this.el.setAttribute('video-can-play', true);
      // data.video.currentTime = 0;
      // data.video.play();
      ['touchstart', 'click'].forEach(function (event) {
        window.addEventListener(event, function oneTimePlay() {
          self.el.setAttribute('video-can-play', true);
          data.video.currentTime = 0;
          data.video.play();
          window.removeEventListener('touchstart', oneTimePlay);
          window.removeEventListener('click', oneTimePlay);
        });
      });
    }
  }
}));

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/components/stop-video.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/components/stop-video.js ***!
  \*****************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/enabling-mixin */ "../../../../extensions/lucidweb-aframe-extensions/utilities/enabling-mixin.js");

AFRAME.registerComponent('stop-video', Object(_utilities_enabling_mixin__WEBPACK_IMPORTED_MODULE_0__["default"])({
  schema: {
    video: {
      type: 'selector'
    }
  },
  onEnable: function onEnable() {
    var data = this.data;
    data.video.pause();
  }
}));

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/components/video-can-play.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/components/video-can-play.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent('video-can-play', {
  schema: {
    type: 'boolean',
    defaultValue: false
  },
  init: function init() {
    this.bindMethods();
  },
  bindMethods: function bindMethods() {
    var bind = AFRAME.utils.bind;
    this.addEventListeners = bind(this.addEventListeners, this);
    this.removeEventListeners = bind(this.removeEventListeners, this);
    this.onPlay = bind(this.onPlay, this);
  },
  play: function play() {
    var data = this.data;
    var videoId = this.el.getAttribute('video');
    this.addEventListeners();
    this.system.editCanPlay(videoId, data);
  },
  remove: function remove() {
    this.removeEventListeners();
  },
  update: function update(oldData) {
    var newData = this.data;
    var videoId = this.el.getAttribute('video');
    this.system.editCanPlay(videoId, newData);
  },
  addEventListeners: function addEventListeners() {
    var el = this.el;
    var videoEl = document.querySelector(el.getAttribute('video'));
    videoEl.addEventListener('play', this.onPlay);
  },
  removeEventListeners: function removeEventListeners() {
    var el = this.el;
    var videoEl = document.querySelector(el.getAttribute('video'));
    videoEl.removeEventListener('play', this.onPlay);
  },
  onPlay: function onPlay(evt) {
    var videoId = this.el.getAttribute('video');

    if (this.system.canPlay(videoId) === false) {
      console.info("Attempt to play a video has been blocked: " + videoId);
      document.querySelector(videoId).pause();
    }
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/components/video-controller.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/components/video-controller.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../systems/video-controller */ "../../../../extensions/lucidweb-aframe-extensions/video/systems/video-controller.js");

AFRAME.registerComponent('video-controller', {
  schema: {
    'autoplay': {
      type: 'boolean',
      default: false
    },
    'target': {
      type: 'selector'
    }
  },
  init: function init() {
    this.bindMethods();
  },
  bindMethods: function bindMethods() {
    this.playVideo = AFRAME.utils.bind(this.playVideo, this);
    this.muteVideo = AFRAME.utils.bind(this.muteVideo, this);
  },
  stopVideo: function stopVideo() {
    this.system.stopVideo(this.el, this.data.src);
  },
  playVideo: function playVideo() {
    var data = this.data;
    this.system.playVideo(this.el, data.target);
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/desktop-videosphere-controls.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/primitives/desktop-videosphere-controls.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('desktop-videosphere-controls', {
  defaultComponents: {
    "desktop-videosphere-controls": {}
  },
  mappings: {
    "video": "desktop-videosphere-controls.video"
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/end-video.js":
/*!****************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/primitives/end-video.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('end-video', {
  defaultComponents: {
    'end-video': {}
  },
  mappings: {
    controller: 'end-video.controller'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/flat-video-controls.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/primitives/flat-video-controls.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('flat-video-controls', {
  defaultComponents: {
    'flat-video-controls': {}
  },
  mappings: {
    'video': 'flat-video-controls.video',
    'width': 'flat-video-controls.width',
    'button-width': 'flat-video-controls.buttonWidth',
    'button-depth': 'flat-video-controls.buttonDepth',
    'exit-target': 'flat-video-controls.exitTarget'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/mute-video.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/primitives/mute-video.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('mute-video', {
  defaultComponents: {
    'mute-video': {}
  },
  mappings: {
    video: 'mute-video.video',
    speed: 'mute-video.speed'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/on-video-closed.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/primitives/on-video-closed.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('on-video-closed', {
  defaultComponents: {
    'listen-for-parent-event': {
      event: 'lucidweb.video.closed'
    },
    'enable-children': {}
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/on-video-ended.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/primitives/on-video-ended.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('on-video-ended', {
  defaultComponents: {
    'listen-for-parent-event': {
      event: 'lucidweb.video.ended'
    },
    'enable-children': {}
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/pause-audio.js":
/*!******************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/primitives/pause-audio.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('pause-audio', {
  defaultComponents: {
    'pause-audio': {}
  },
  mappings: {
    audio: 'pause-audio.audio'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/play-audio.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/primitives/play-audio.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('play-audio', {
  defaultComponents: {
    'play-audio': {}
  },
  mappings: {
    audio: 'play-audio.audio'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/play-video.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/primitives/play-video.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('play-video', {
  defaultComponents: {
    'play-video': {}
  },
  mappings: {
    controller: 'play-video.controller'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/start-video.js":
/*!******************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/primitives/start-video.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('start-video', {
  defaultComponents: {
    'start-video': {}
  },
  mappings: {
    video: 'start-video.video'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/stop-video.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/primitives/stop-video.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('stop-video', {
  defaultComponents: {
    'stop-video': {}
  },
  mappings: {
    video: 'stop-video.video'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/video-controller.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/primitives/video-controller.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../components/video-controller */ "../../../../extensions/lucidweb-aframe-extensions/video/components/video-controller.js");

AFRAME.registerPrimitive('video-controller', {
  defaultComponents: {
    "video-controller": {}
  },
  mappings: {
    'autoplay': 'video-controller.autoplay',
    'target': 'video-controller.target'
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/systems/video-can-play.js":
/*!******************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/systems/video-can-play.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerSystem('video-can-play', {
  init: function init() {
    this.bindMethods();
    this.videos = [];
  },
  bindMethods: function bindMethods() {
    var bind = AFRAME.utils.bind;
    this.canPlay = bind(this.canPlay, this);
    this.editCanPlay = bind(this.editCanPlay, this);
  },
  editCanPlay: function editCanPlay(src, newValue) {
    this.videos[src] = newValue;
  },
  canPlay: function canPlay(src) {
    if (src in this.videos) {
      return this.videos[src];
    }

    return false;
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/systems/video-controller.js":
/*!********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/systems/video-controller.js ***!
  \********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fscreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fscreen */ "../../../../extensions/lucidweb-aframe-extensions/node_modules/fscreen/lib/index.js");
/* harmony import */ var fscreen__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fscreen__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_clipboard_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/clipboard-polyfill */ "../../../../extensions/lucidweb-aframe-extensions/node_modules/clipboard-polyfill/build/clipboard-polyfill.js");
/* harmony import */ var _node_modules_clipboard_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_clipboard_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _video_controls_markup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-controls-markup */ "../../../../extensions/lucidweb-aframe-extensions/video/systems/video-controls-markup.js");
__webpack_require__(/*! ../../common/components/idle */ "../../../../extensions/lucidweb-aframe-extensions/common/components/idle.js");




AFRAME.registerSystem('video-controller', {
  init: function init() {
    this.bindMethods();
    this.videoSphere = null;
    this.videoSphereConfigured = false;
    this.controller = null;
    this.video = null;
    this.documentInteractionReceived = false;
    this.autoplay = false;
    this.controlsEnabled = true;
    this.controls = null;
    this.progressAnimator = null;
    this.controlsMovementInterval = null;
    this.vr = false;
    this.logo = null;
    this.el.sceneEl.setAttribute('device-detection', {});
    this.el.sceneEl.setAttribute('transition-to-cardboard', {});
  },
  bindMethods: function bindMethods() {
    var bind = AFRAME.utils.bind; // video methods

    this.playVideo = bind(this.playVideo, this);
    this.pauseVideo = bind(this.pauseVideo, this);
    this.volumeOn = bind(this.volumeOn, this);
    this.volumeOff = bind(this.volumeOff, this);
    this.duration = bind(this.duration, this);
    this.title = bind(this.title, this);
    this.currentTime = bind(this.currentTime, this);
    this.changeTime = bind(this.changeTime, this); // event handlers

    this.onVideoReadyToPlay = bind(this.onVideoReadyToPlay, this);
    this.onVideoEnded = bind(this.onVideoEnded, this);
    this.onVideoStalled = bind(this.onVideoStalled, this);
    this.onStartButtonClicked = bind(this.onStartButtonClicked, this);
    this.enableHTMLVideoControls = bind(this.enableHTMLVideoControls, this);
    this.enableVRVideoControls = bind(this.enableVRVideoControls, this);
    this.onVideoPlayClicked = bind(this.onVideoPlayClicked, this);
    this.onVideoPauseClicked = bind(this.onVideoPauseClicked, this);
    this.onVideoReplayClicked = bind(this.onVideoReplayClicked, this);
    this.onVideoVolumeOffClicked = bind(this.onVideoVolumeOffClicked, this);
    this.onVideoVolumeOnClicked = bind(this.onVideoVolumeOnClicked, this);
    this.onEnterVRClicked = bind(this.onEnterVRClicked, this);
    this.onEnterVR = bind(this.onEnterVR, this);
    this.onExitVR = bind(this.onExitVR, this);
    this.onEnterFullscreenClicked = bind(this.onEnterFullscreenClicked, this);
    this.onFullscreenChange = bind(this.onFullscreenChange, this);
    this.onVideoTimeUpdate = bind(this.onVideoTimeUpdate, this);
    this.startProgressAnimation = bind(this.startProgressAnimation, this);
    this.stopProgressAnimation = bind(this.stopProgressAnimation, this);
    this.moveProgressBar = bind(this.moveProgressBar, this);
    this.showControls = bind(this.showControls, this);
    this.showEndScreen = bind(this.showEndScreen, this);
    this.hideControls = bind(this.hideControls, this);
    this.moveControlsTo = bind(this.moveControlsTo, this);
    this.isMoving = bind(this.isMoving, this);
    this.stopMoving = bind(this.stopMoving, this);
    this.updateControlsPosition = bind(this.updateControlsPosition, this);
    this.onMouseIdle = bind(this.onMouseIdle, this);
    this.onMouseMoving = bind(this.onMouseMoving, this);
    this.onScrollbarClicked = bind(this.onScrollbarClicked, this);
    this.onCopyLinkToClipboard = bind(this.onCopyLinkToClipboard, this);
    this.confirmLinkCopiedToClipboard = bind(this.confirmLinkCopiedToClipboard, this);
    this.onBodyTouchEnd = bind(this.onBodyTouchEnd, this);
    this.enableControls = bind(this.enableControls, this);
    this.disableControls = bind(this.disableControls, this); // video controls event handlers

    this.onVideoControlsPlayClicked = bind(this.onVideoControlsPlayClicked, this);
    this.onVideoControlsPauseClicked = bind(this.onVideoControlsPauseClicked, this);
    this.onVideoControlsReplayClicked = bind(this.onVideoControlsReplayClicked, this);
    this.onVideoControlsVolumeOffClicked = bind(this.onVideoControlsVolumeOffClicked, this);
    this.onVideoControlsVolumeOnClicked = bind(this.onVideoControlsVolumeOnClicked, this);
    this.onShareButtonClicked = bind(this.onShareButtonClicked, this);
    this.onShareModalClosed = bind(this.onShareModalClosed, this); // video event handlers

    this.onVideoPaused = bind(this.onVideoPaused, this);
    this.onVideoPlaying = bind(this.onVideoPlaying, this);
    this.onVideoVolumeChange = bind(this.onVideoVolumeChange, this);
  },
  title: function title() {
    if (this.video) {
      return this.video.getAttribute('title');
    }

    return '';
  },
  duration: function duration() {
    if (this.video) {
      return this.video.duration;
    }

    return null;
  },
  currentTime: function currentTime() {
    if (this.video) {
      return this.video.currentTime;
    }
  },
  changeTime: function changeTime(newTime) {
    if (this.video) {
      this.video.currentTime = newTime;
    }
  },
  pauseVideo: function pauseVideo() {},
  volumeOn: function volumeOn() {},
  volumeOff: function volumeOff() {},
  onVideoControlsPlayClicked: function onVideoControlsPlayClicked() {
    this.video.play();
    this.showControls();
    this.startProgressAnimation();
  },
  onVideoControlsPauseClicked: function onVideoControlsPauseClicked() {
    this.showControls();
    this.stopProgressAnimation();
    this.video.pause();
  },
  onVideoControlsReplayClicked: function onVideoControlsReplayClicked() {
    this.video.currentTime = 0.0;
    this.showControls();
    this.startProgressAnimation();
    this.video.play();
    this.controls.querySelector('.play-video').style.display = "none";
    this.controls.querySelector('.replay-video').style.display = "none";
    this.controls.querySelector('.pause-video').style.display = "block";
  },
  onVideoControlsVolumeOnClicked: function onVideoControlsVolumeOnClicked() {
    this.color = '#34dd4e';
    this.video.muted = false;
  },
  onVideoControlsVolumeOffClicked: function onVideoControlsVolumeOffClicked() {
    this.video.muted = true;
  },
  onVideoPaused: function onVideoPaused() {
    if (this.video && this.video.ended) return;
    this.el.emit('lucidweb.video-controller.video-paused'); // @todo move this to it's own component

    if (this.controls) {
      this.controls.querySelector('.play-video').style.display = "block";
      this.controls.querySelector('.replay-video').style.display = "none";
      this.controls.querySelector('.pause-video').style.display = "none";
    }
  },
  onVideoPlaying: function onVideoPlaying() {
    this.el.emit('lucidweb.video-controller.video-playing'); // @todo move this to it's own controller component

    if (this.controls) {
      this.controls.querySelector('.play-video').style.display = "none";
      this.controls.querySelector('.replay-video').style.display = "none";
      this.controls.querySelector('.pause-video').style.display = "block";
    }
  },
  onVideoEnded: function onVideoEnded() {
    this.stopProgressAnimation();
    this.el.emit('lucidweb.video-controller.playing-ended', {}, false);
    this.controller.emit('lucidweb.video-controller.playing-ended', {}, false); // @todo move to it's own controller component

    if (this.controls) {
      this.controls.querySelector('.play-video').style.display = "none";
      this.controls.querySelector('.replay-video').style.display = "block";
      this.controls.querySelector('.pause-video').style.display = "none";
    }

    this.showEndScreen(); // this.showControls();
  },
  onVideoStalled: function onVideoStalled(evt) {
    // window.alert('video stalled');
    if (this.video) {
      this.video.play();
    }
  },
  onVideoVolumeChange: function onVideoVolumeChange(evt) {
    if (this.video.muted) {
      this.el.emit('lucidweb.video-controller.volume-off', {}, false); // @todo remove to separate component

      if (this.controls) {
        this.controls.querySelector('.turn-video-volume-off').style.display = "none";
        this.controls.querySelector('.turn-video-volume-on').style.display = "block";
      }
    } else {
      this.el.emit('lucidweb.video-controller.volume-on', {}, false); // @todo remove to separate component

      if (this.controls) {
        this.controls.querySelector('.turn-video-volume-off').style.display = "block";
        this.controls.querySelector('.turn-video-volume-on').style.display = "none";
      }
    }
  },
  enableControls: function enableControls() {
    console.log('ENABLE controls');
    this.controlsEnabled = true;
  },
  disableControls: function disableControls() {
    this.controlsEnabled = false;
  },
  stopVideo: function stopVideo(videoController, videoElement) {
    if (this.video) {
      this.video.pause();
      this.video = null;
    }

    if (this.progressAnimator) {
      clearInterval(this.progressAnimator);
      this.progressAnimator = null;
    }

    if (this.videoSphere) {
      this.videoSphere.parentEl.removeChild(this.videoSphere);
      this.videoSphere = null;
    }

    this.controller = null;
  },
  playVideo: function playVideo(videoController, videoElement) {
    this.videoSphereConfigured = false; // unregister old events so that they do not interrupt app flow anymore

    if (this.video) {
      this.removeVideoEventListeners(this.video);
    } // start listening to relevant video events of the new video


    this.video = videoElement;
    this.controller = videoController;
    this.addVideoEventListeners(this.video);

    if (this.video && this.video.readyState && this.video.readyState >= 4) {
      this.onVideoReadyToPlay();
    } else {
      console.warn("No video ready state detected");
      console.warn("Current state = " + this.video.readyState);
      this.video.load();
    } // adds a logo if needed


    if (this.logo == null) {
      this.logo = document.createElement('img');
      this.logo.setAttribute('src', './assets/images/logo_lucidweb.png');
      this.logo.setAttribute('id', 'logo_lucidweb');
      this.logo.style.display = 'block';
      var logoParent = this.el.sceneEl.parentEl;
      logoParent.appendChild(this.logo);
    }
  },
  addVideoEventListeners: function addVideoEventListeners(video) {
    fscreen__WEBPACK_IMPORTED_MODULE_0___default.a.addEventListener('fullscreenchange', this.onFullscreenChange);
    video.addEventListener('canplay', this.onVideoReadyToPlay);
    video.addEventListener('timeupdate', this.onVideoTimeUpdate);
    video.addEventListener('ended', this.onVideoEnded);
    video.addEventListener('stalled', this.onVideoStalled);
    video.addEventListener('pause', this.onVideoPaused);
    video.addEventListener('playing', this.onVideoPlaying);
    video.addEventListener('volumechange', this.onVideoVolumeChange); // video.addEventListener('readystatechange', this.onVideoReadyStateChange);

    this.el.sceneEl.addEventListener('lucidweb.mouse.idle', this.onMouseIdle);
    this.el.sceneEl.addEventListener('lucidweb.mouse.moving', this.onMouseMoving);
    this.el.sceneEl.addEventListener('enter-vr', this.onEnterVR);
    this.el.sceneEl.addEventListener('exit-vr', this.onExitVR);
  },
  removeVideoEventListeners: function removeVideoEventListeners(video) {
    fscreen__WEBPACK_IMPORTED_MODULE_0___default.a.removeEventListener('fullscreenchange', this.onFullscreenChange);
    video.removeEventListener('canplay', this.onVideoReadyToPlay);
    video.removeEventListener('timeupdate', this.onVideoTimeUpdate);
    video.removeEventListener('ended', this.onVideoEnded);
    video.removeEventListener('stalled', this.onVideoStalled);
    video.removeEventListener('pause', this.onVideoPaused);
    video.removeEventListener('playing', this.onVideoPlaying);
    video.removeEventListener('volumechange', this.onVideoVolumeChange);
    this.el.sceneEl.removeEventListener('lucidweb.mouse.idle', this.onMouseIdle);
    this.el.sceneEl.removeEventListener('lucidweb.mouse.moving', this.onMouseMoving);
    this.el.sceneEl.removeEventListener('enter-vr', this.onEnterVR);
    this.el.sceneEl.removeEventListener('exit-vr', this.onExitVR);
  },
  onVideoReadyToPlay: function onVideoReadyToPlay() {
    if (this.videoSphereConfigured) {
      return;
    }

    this.videoSphereConfigured = true;
    var oldVideo = null;

    if (this.videoSphere && this.videoSphere.hasAttribute('src')) {
      oldVideo = this.videoSphere.getAttribute('src');
    } // adjust source for the video sphere


    if (this.videoSphere == null) {
      this.videoSphere = document.createElement('a-videosphere');
      this.videoSphere.id = 'videosphere';
      this.videoSphere.setAttribute('src', '#' + this.video.id);
      this.el.appendChild(this.videoSphere);
    } else {
      this.videoSphere.setAttribute('src', '#' + this.video.id);
    }

    if (this.documentInteractionReceived || this.autoplay) {
      this.video.play();
      this.startProgressAnimation();
      this.showControls();
      this.el.emit('lucidweb.video-controller.playing-started', {});
    } else {
      this.showStartOverlay();
    } // pause any old video that may exist


    if (oldVideo != null) {
      oldVideo.pause();
    }
  },
  onMouseIdle: function onMouseIdle() {
    if (this.video && !this.video.paused && !this.video.ended) {
      this.hideControls();
    }
  },
  onMouseMoving: function onMouseMoving() {
    this.showControls();
  },
  onScrollbarClicked: function onScrollbarClicked(evt) {
    var target = evt.target;
    var progress = evt.x / target.offsetWidth;
    var newTime = this.duration() * progress;
    this.changeTime(newTime);
  },
  confirmLinkCopiedToClipboard: function confirmLinkCopiedToClipboard(message) {
    // fetch position of icon
    var rect = document.body.querySelector('.share-copy-to-clipboard').getBoundingClientRect(); // add confirmation alert after copy

    var confirmationAlert = document.createElement('p');
    confirmationAlert.style.position = 'fixed';
    confirmationAlert.style.top = rect.bottom + 'px';
    confirmationAlert.style.left = rect.left + 'px';
    confirmationAlert.style.width = rect.width + 'px';
    confirmationAlert.style.textAlign = 'center';
    confirmationAlert.style.color = 'white';
    confirmationAlert.style.opacity = 0.8;
    confirmationAlert.style.zIndex = 10000;
    confirmationAlert.innerText = message;
    document.body.appendChild(confirmationAlert); // now remove it again after a timeout

    setTimeout(function () {
      document.body.removeChild(confirmationAlert);
    }, 2000);
  },
  onCopyLinkToClipboard: function onCopyLinkToClipboard(evt) {
    evt.preventDefault();
    var confirmSuccess = AFRAME.utils.bind(function () {
      this.confirmLinkCopiedToClipboard('copied');
    }, this);
    var communicateError = AFRAME.utils.bind(function () {
      this.confirmLinkCopiedToClipboard('failed to copy');
    }, this);
    _node_modules_clipboard_polyfill__WEBPACK_IMPORTED_MODULE_1___default.a.writeText(window.location).then(confirmSuccess, communicateError);
  },
  onStartButtonClicked: function onStartButtonClicked() {
    if (this.video) {
      var backgroundEl = this.el.sceneEl.querySelector('#preview-background');

      if (backgroundEl) {
        backgroundEl.setAttribute('visible', false);
      } // play the video


      this.video.play();
      this.showControls();
      this.startProgressAnimation();
      this.el.emit('lucidweb.video-controller.playing-started', {});
      this.documentInteractionReceived = true; // remove event handlers

      var startButton = document.querySelector('#video-start-overlay button');

      if (startButton) {
        startButton.removeEventListener('click', this.onStartButtonClicked);
      } // remove overlay


      var videoStartOverlay = document.querySelector('#video-start-overlay');

      if (videoStartOverlay) {
        document.body.removeChild(videoStartOverlay);
      } // enables the 2D controls


      if (this.controlsEnabled) {
        this.enableHTMLVideoControls();
        this.enableVRVideoControls();
      }
    }
  },
  showStartOverlay: function showStartOverlay() {
    var videoStartOverlayBackground = document.createElement('div');
    videoStartOverlayBackground.className = "background";
    var playIcon = document.createElement('i');
    playIcon.className = "icon-play";
    var playButton = document.createElement('button');
    playButton.setAttribute('type', 'button');
    playButton.addEventListener('click', this.onStartButtonClicked);
    playButton.appendChild(playIcon);
    var videoStartOverlay = document.createElement('div');
    videoStartOverlay.id = "video-start-overlay"; // videoStartOverlay.innerHTML = videoStartOverlayMarkup;

    videoStartOverlay.appendChild(videoStartOverlayBackground);
    videoStartOverlay.appendChild(playButton);
    document.body.appendChild(videoStartOverlay);
  },
  enableHTMLVideoControls: function enableHTMLVideoControls() {
    this.controls = _video_controls_markup__WEBPACK_IMPORTED_MODULE_2__["default"];
    console.log(this.controls);
    document.body.appendChild(this.controls); // place all modals under the body element instead

    var shareModal = this.controls.querySelector('.share-video');
    document.body.appendChild(shareModal); // attach events

    this.controls.querySelector('.play-video').addEventListener('click', this.onVideoPlayClicked, false);
    this.controls.querySelector('.pause-video').addEventListener('click', this.onVideoPauseClicked, false);
    this.controls.querySelector('.replay-video').addEventListener('click', this.onVideoReplayClicked, false);
    shareModal.querySelector('.replay').addEventListener('click', this.onVideoReplayClicked, false);
    this.controls.querySelector('.turn-video-volume-on').addEventListener('click', this.onVideoVolumeOnClicked, false);
    this.controls.querySelector('.turn-video-volume-off').addEventListener('click', this.onVideoVolumeOffClicked, false);
    this.controls.querySelector('.enter-vr').addEventListener('click', this.onEnterVRClicked, false);
    this.controls.querySelector('.enter-fullscreen').addEventListener('click', this.onEnterFullscreenClicked, false);
    this.controls.querySelector('.share-menu').addEventListener('click', this.onShareButtonClicked, false);
    document.body.querySelector('.share-video-close').addEventListener('click', this.onShareModalClosed, false);
    this.controls.querySelector('#update-video-progress').addEventListener('click', this.onScrollbarClicked, false);
    document.body.querySelector('.share-copy-to-clipboard').addEventListener('click', this.onCopyLinkToClipboard, false);
    document.body.addEventListener('touchend', this.onBodyTouchEnd, false);
  },
  enableVRVideoControls: function enableVRVideoControls() {
    // <video-controls  rotation="0 0 0" position="0 0.4 -1.40"></video-controls>
    var controls = document.createElement('video-controls');
    controls.setAttribute('rotation', '-25 0 0');
    controls.setAttribute('track-position', {
      target: '#maincamera',
      x: false,
      z: false
    });
    this.el.appendChild(controls);
  },
  onVideoPlayClicked: function onVideoPlayClicked(evt) {
    this.onVideoControlsPlayClicked();
  },
  onVideoPauseClicked: function onVideoPauseClicked(evt) {
    this.onVideoControlsPauseClicked();
  },
  onVideoReplayClicked: function onVideoReplayClicked(evt) {
    evt.preventDefault();
    this.onShareModalClosed(evt);
    this.onVideoControlsReplayClicked();
  },
  onVideoVolumeOnClicked: function onVideoVolumeOnClicked(evt) {
    this.onVideoControlsVolumeOnClicked();
  },
  onVideoVolumeOffClicked: function onVideoVolumeOffClicked(evt) {
    this.onVideoControlsVolumeOffClicked();
  },
  onBodyTouchEnd: function onBodyTouchEnd(evt) {
    this.showControls();
  },
  onEnterVRClicked: function onEnterVRClicked(evt) {
    var pauseRequired = this.video.paused; // for mobile headsets that are not ocolus
    // const deviceDetection = this.el.sceneEl.components['device-detection'];
    // if (deviceDetection.isMobile() && !deviceDetection.isOculus()) {
    //     this.el.sceneEl.components['transition-to-cardboard'].startTransitioningToCardboard();
    // } else {

    this.el.enterVR(); // }
    // wait for VR mode and then verify whether we need to resume playing
    // (Samsung internet browser automatically pauses the video when entering VR)

    var intervalPointer = setInterval(AFRAME.utils.bind(function () {
      if (this.vr) {
        if (this.video.paused && pauseRequired == false) {
          this.video.play();
        }

        clearInterval(intervalPointer);
      }
    }, this), 100);
  },
  onEnterVR: function onEnterVR(evt) {
    this.vr = true;
    this.logo.style.display = 'none';
  },
  onExitVR: function onExitVR(evt) {
    this.logo.style.display = 'block';
    this.vr = false;
  },
  onEnterFullscreenClicked: function onEnterFullscreenClicked(evt) {
    this.logo.style.display = 'block';

    if (fscreen__WEBPACK_IMPORTED_MODULE_0___default.a.fullscreenElement === null) {
      fscreen__WEBPACK_IMPORTED_MODULE_0___default.a.requestFullscreen(document.body);
    } else {
      fscreen__WEBPACK_IMPORTED_MODULE_0___default.a.exitFullscreen();
    }
  },
  onFullscreenChange: function onFullscreenChange(evt) {
    if (fscreen__WEBPACK_IMPORTED_MODULE_0___default.a.fullscreenElement !== null) {
      console.log("FULLSCREEN");
    }
  },
  onShareButtonClicked: function onShareButtonClicked(evt) {
    evt.preventDefault();
    var shareModal = document.body.querySelector('.share-video');

    if (shareModal) {
      var reloadDiv = shareModal.querySelector('.reload');
      if (reloadDiv) reloadDiv.style.display = 'none';

      switch (shareModal.style.display) {
        case 'block':
          shareModal.style.display = 'none';
          break;

        case 'none':
        default:
          shareModal.style.display = 'block';
      }
    }
  },
  onShareModalClosed: function onShareModalClosed(evt) {
    evt.preventDefault();
    var shareModal = document.body.querySelector('.share-video');

    if (shareModal) {
      shareModal.style.display = 'none';
    }
  },
  onVideoTimeUpdate: function onVideoTimeUpdate(evt) {
    if (this.video && this.controls) {
      var duration = this.video.duration;
      var currentTime = this.video.currentTime;
      this.controls.querySelector('.duration').innerText = this.formatTime(duration);
      this.controls.querySelector('.current-time').innerText = this.formatTime(currentTime); // this.controls.querySelector('.progress').style.width = ((100 * currentTime) / duration) + "%";
      // how wide should the progress bar be?
      // how wide is it currently?

      this.el.emit('lucidweb.video-controller.timeupdate', {
        duration: duration,
        currentTime: currentTime
      }, false);
    }
  },
  formatTime: function formatTime(time) {
    var minutes = "00" + Math.floor(time / 60);
    var seconds = "00" + Math.floor(time % 60);
    return "".concat(minutes.slice(-2), ":").concat(seconds.slice(-2));
  },
  isMoving: function isMoving() {
    return this.controlsMovementInterval !== null;
  },
  stopMoving: function stopMoving() {
    if (this.controlsMovementInterval !== null) {
      clearInterval(this.controlsMovementInterval);
      this.controlsMovementInterval = null;
    }
  },
  showControls: function showControls() {
    this.moveControlsTo(0, 0.2, 1 / 60);
  },
  showEndScreen: function showEndScreen() {
    var shareModal = document.body.querySelector('.share-video');

    if (shareModal) {
      var reloadDiv = shareModal.querySelector('.reload');

      if (reloadDiv) {
        reloadDiv.style.display = 'block';
      }

      shareModal.style.display = 'block';
    }
  },
  hideControls: function hideControls() {
    this.moveControlsTo(-55, 0.4, 1 / 60);
  },
  moveControlsTo: function moveControlsTo(desiredPosition, animationLength, frequency) {
    if (this.isMoving()) {
      this.stopMoving();
    }

    var updater = this.updateControlsPosition;
    this.controlsMovementInterval = setInterval(function () {
      updater(desiredPosition, animationLength, frequency);
    }, 1000 * frequency);
  },
  updateControlsPosition: function updateControlsPosition(desiredPosition, animationLength, frequency) {
    if (this.controls == null) return;
    var currentValue = parseFloat(this.controls.style.bottom);

    if (desiredPosition < 0 && currentValue <= desiredPosition) {
      this.stopMoving();
      return;
    } else if (desiredPosition >= 0 && currentValue >= desiredPosition) {
      this.stopMoving();
      return;
    }

    var deltaSign = desiredPosition < 0 ? -1 : 1;
    var delta = 55 / animationLength * frequency * deltaSign;
    var newPosition = currentValue + delta;

    if (deltaSign < 0) {
      newPosition = Math.max(newPosition, desiredPosition);
    } else {
      newPosition = Math.min(newPosition, desiredPosition);
    }

    this.controls.style.bottom = newPosition + "px";
  },
  startProgressAnimation: function startProgressAnimation() {
    this.progressAnimator = setInterval(this.moveProgressBar, 1000 / 60);
  },
  stopProgressAnimation: function stopProgressAnimation() {
    clearInterval(this.progressAnimator);
    this.progressAnimator = null;
  },
  moveProgressBar: function moveProgressBar() {
    var duration = this.video.duration;
    var currentTime = this.video.currentTime;

    if (this.controls) {
      this.controls.querySelector('.progress').style.width = 100 * currentTime / duration + "%";
    }
  }
});

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/video/systems/video-controls-markup.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/video/systems/video-controls-markup.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createVideoControlsWithHTML(html) {
  var controls = document.createElement('div');
  controls.id = "video-controls-2d";
  controls.style.bottom = "0px";
  controls.innerHTML = html;
  return controls;
}

var innerHTML = "\n  <div class=\"progress-bar\">\n      <div class=\"background\">&nbsp;</div>\n      <div class=\"progress\" style=\"\">&nbsp;</div>\n      <div id=\"update-video-progress\">&nbsp;</div>\n  </div>\n  <div class=\"background\">&nbsp;</div>\n  <div class=\"controls blue-controls\">\n      <div class=\"right\">\n          <button type=\"button\" class=\"control icon enter-vr wide\">\n              <i class=\"icon icon-cardboard\"></i>\n          </button>\n          <button type=\"button\" class=\"control icon enter-fullscreen\">\n              <i class=\"icon icon-resize\"></i>\n          </button>\n          <button type=\"button\" class=\"control icon share-menu\">\n              <i class=\"icon icon-share\"></i>\n          </button>\n      </div>\n      <div class=\"left\">\n          <button type=\"button\" class=\"control icon play-video\" style=\"display: none;\"><i class=\"icon icon-play\">&nbsp;</i></button>\n          <button type=\"button\" class=\"control icon pause-video\"><i class=\"icon icon-pause\">&nbsp;</i></button>\n          <button type=\"button\" class=\"control icon replay-video\" style=\"display: none;\"><i class=\"icon icon-play\">&nbsp;</i></button>\n          <button type=\"button\" class=\"control icon turn-video-volume-off\"><i class=\"icon icon-volume\">&nbsp;</i></button>\n          <button type=\"button\" class=\"control icon turn-video-volume-on\" style=\"display: none;\"><i class=\"icon icon-mute\">&nbsp;</i></button>\n\n      </div>\n      <div class=\"left\">\n      <div class=\"time-display-progress control mono\">\n              <span class=\"current-time\"></span>\n          </div>\n      </div>\n      <div class=\"left\">\n      <div class=\"time-display-duration control mono\">\n              <span>/</span>\n              <span class=\"duration\"></span>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"share-video blue-controls\" style=\"display:none;\">\n\n    <a class=\"share-video-close\" href=\"#\"><i class=\"icon icon-close\">&nbsp;</i></a>\n\n\n\n    <div class=\"icon-group\">\n        <div class=\"reload\" style=\"display: none;\">\n          <a class=\"share-link replay\" href=\"#\" target=\"_blank\"><i class=\"icon icon-reload\">&nbsp;</i></a>\n        </div>\n        <div>\n          <a class=\"share-link share-to-facebook\" href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flucidweb.io%2Fprojects%2F360-video-player%2Findex.html\" target=\"_blank\"><i class=\"icon icon-facebook\">&nbsp;</i></a>\n          <a class=\"share-link share-to-twitter\" href=\"https://twitter.com/intent/tweet?text=I+just+watched+Syria%27s+silence%2C+a+cooperation+between+Fisheye+VR+and+VRT+journalist+Jens+Franssen.++Have+a+look+at+https%3A%2F%2Flucidweb.io%2Fprojects%2F360-video-player%2Findex.html\" target=\"_blank\"><i class=\"icon icon-twitter\">&nbsp;</i></a>\n          <a class=\"share-link share-copy-to-clipboard\" href=\"#\"><i class=\"icon icon-link\">&nbsp;</i></a>\n        </div>\n    </div>\n\n  </div>\n";
/* harmony default export */ __webpack_exports__["default"] = (createVideoControlsWithHTML(innerHTML));

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/styles/icons.less":
/*!********************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/webfonts/assets/styles/icons.less ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/styles/icons.less";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/styles/webfonts.icons.less":
/*!*****************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/webfonts/assets/styles/webfonts.icons.less ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/styles/webfonts.icons.less";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb.eot":
/*!************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb.eot ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/webfonts/lucidweb.eot";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb.svg":
/*!************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb.svg ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/webfonts/lucidweb.svg";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb.ttf":
/*!************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb.ttf ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/webfonts/lucidweb.ttf";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb.woff":
/*!*************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb.woff ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/webfonts/lucidweb.woff";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb.woff2":
/*!**************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb.woff2 ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/webfonts/lucidweb.woff2";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb_test.eot":
/*!*****************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb_test.eot ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/webfonts/lucidweb_test.eot";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb_test.svg":
/*!*****************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb_test.svg ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/webfonts/lucidweb_test.svg";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb_test.ttf":
/*!*****************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb_test.ttf ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/webfonts/lucidweb_test.ttf";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb_test.woff":
/*!******************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb_test.woff ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/webfonts/lucidweb_test.woff";

/***/ }),

/***/ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb_test.woff2":
/*!*******************************************************************************************************************************!*\
  !*** /Users/jensdewitte1/Desktop/lucidweb/extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb_test.woff2 ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/webfonts/lucidweb_test.woff2";

/***/ }),

/***/ "./node_modules/aframe-event-set-component/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/aframe-event-set-component/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global AFRAME */
var styleParser = AFRAME.utils.styleParser;

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('event-set', {
  schema: {
    default: '',
    parse: function (value) {
      return styleParser.parse(value);
    }
  },

  multiple: true,

  init: function () {
    this.eventHandler = null;
    this.eventName = null;
  },

  update: function (oldData) {
    this.removeEventListener();
    this.updateEventListener();
    this.addEventListener();
  },

  remove: function () {
    this.removeEventListener();
  },

  pause: function () {
    this.removeEventListener();
  },

  play: function () {
    this.addEventListener();
  },

  /**
   * Update source-of-truth event listener registry.
   * Does not actually attach event listeners yet.
   */
  updateEventListener: function () {
    var data = this.data;
    var el = this.el;
    var event;
    var target;
    var targetEl;

    // Set event listener using `_event`.
    event = data._event || this.id;
    target = data._target;

    // Decide the target to `setAttribute` on.
    targetEl = target ? el.sceneEl.querySelector(target) : el;

    this.eventName = event;

    const handler = () => {
      var propName;
      // Set attributes.
      for (propName in data) {
        if (propName === '_event' || propName === '_target') { continue; }
        AFRAME.utils.entity.setComponentProperty.call(this, targetEl, propName,
                                                      data[propName]);
      }
    };

    if (!isNaN(data._delay)) {
      // Delay.
      this.eventHandler = () => { setTimeout(handler, parseFloat(data._delay)); };
    } else {
      this.eventHandler = handler;
    }
  },

  addEventListener: function () {
    this.el.addEventListener(this.eventName, this.eventHandler);
  },

  removeEventListener: function () {
    this.el.removeEventListener(this.eventName, this.eventHandler);
  }
});


/***/ }),

/***/ "./node_modules/aframe-template-component/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/aframe-template-component/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var templateString = __webpack_require__(/*! es6-template-strings */ "./node_modules/es6-template-strings/index.js");

var debug = AFRAME.utils.debug;
var extend = AFRAME.utils.extend;
var templateCache = {};  // Template cache.
var error = debug('template-component:error');
var log = debug('template-component:info');

var HANDLEBARS = 'handlebars';
var JADE = 'jade';
var MUSTACHE = 'mustache';
var NUNJUCKS = 'nunjucks';
var HTML = 'html';

var LIB_LOADED = {};
LIB_LOADED[HANDLEBARS] = !!window.Handlebars;
LIB_LOADED[JADE] = !!window.jade;
LIB_LOADED[MUSTACHE] = !!window.Mustache;
LIB_LOADED[NUNJUCKS] = !!window.nunjucks;

var LIB_SRC = {};
LIB_SRC[HANDLEBARS] = 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js';
LIB_SRC[JADE] = 'https://cdnjs.cloudflare.com/ajax/libs/jade/1.11.0/jade.min.js';
LIB_SRC[MUSTACHE] = 'https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.2.1/mustache.min.js';
LIB_SRC[NUNJUCKS] = 'https://cdnjs.cloudflare.com/ajax/libs/nunjucks/2.3.0/nunjucks.min.js';

AFRAME.registerComponent('template', {
  schema: {
    insert: {
      // insertAdjacentHTML.
      default: 'beforeend'
    },
    type: {
      default: ''
    },
    src: {
      // Selector or URL.
      default: ''
    },
    data: {
      default: ''
    }
  },

  update: function (oldData) {
    var data = this.data;
    var el = this.el;
    var fetcher = data.src[0] === '#' ? fetchTemplateFromScriptTag : fetchTemplateFromXHR;
    var templateCacheItem = templateCache[data.src];

    // Replace children if swapping templates.
    if (oldData && oldData.src !== data.src) {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
    }

    if (templateCacheItem) {
      this.renderTemplate(templateCacheItem);
      return;
    }

    fetcher(data.src, data.type).then(this.renderTemplate.bind(this));
  },

  renderTemplate: function (templateCacheItem) {
    var el = this.el;
    var data = this.data;
    var templateData = {};

    Object.keys(el.dataset).forEach(function convertToData (key) {
      templateData[key] = el.dataset[key];
    });
    if (data.data) {
      templateData = extend(templateData, el.getAttribute(data.data));
    }

    var renderedTemplate = renderTemplate(templateCacheItem.template, templateCacheItem.type,
                                          templateData);
    el.insertAdjacentHTML(data.insert, renderedTemplate);
    el.emit('templaterendered');
  }
});

/**
 * Helper to compile template, lazy-loading the template engine if needed.
 */
function compileTemplate (src, type, templateStr) {
  return new Promise(function (resolve) {
    injectTemplateLib(type).then(function () {
      templateCache[src] = {
        template: getCompiler(type)(templateStr.trim()),
        type: type
      };
      resolve(templateCache[src]);
    });
  });
}

function renderTemplate (template, type, context) {
  switch (type) {
    case HANDLEBARS: {
      return template(context);
    }
    case JADE: {
      return template(context);
    }
    case MUSTACHE: {
      return Mustache.render(template, context);
    }
    case NUNJUCKS: {
      return template.render(context);
    }
    default: {
      // If type not specified, assume HTML. Add some ES6 template string sugar.
      return templateString(template, context);
    }
  }
}

/**
 * Cache and compile templates.
 */
function fetchTemplateFromScriptTag (src, type) {
  var compiler;
  var scriptEl = document.querySelector(src);
  var scriptType = scriptEl.getAttribute('type');
  var templateStr = scriptEl.innerHTML;

  // Try to infer template type from <script type> if type not specified.
  if (!type) {
    if (!scriptType) {
      throw new Error('Must provide `type` attribute for <script> templates (e.g., handlebars, jade, nunjucks, html)');
    }
    if (scriptType.indexOf('handlebars') !== -1) {
      type = HANDLEBARS;
    } else if (scriptType.indexOf('jade') !== -1) {
      type = JADE
    } else if (scriptType.indexOf('mustache') !== -1) {
      type = MUSTACHE;
    } else if (scriptType.indexOf('nunjucks') !== -1) {
      type = NUNJUCKS
    } else if (scriptType.indexOf('html') !== -1) {
      type = HTML;
    } else {
      error('Template type could not be inferred from the script tag. Please add a type.');
      return;
    }
  }

  return new Promise(function (resolve) {
    compileTemplate(src, type, templateStr).then(function (template) {
      resolve(template, type);
    });
  });
}

function fetchTemplateFromXHR (src, type) {
  return new Promise(function (resolve) {
    var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', function () {
      // Template fetched. Use template.
      compileTemplate(src, type, request.response).then(function (template) {
        resolve(template, type);
      });
    });
    request.open('GET', src);
    request.send();
  });
}

/**
 * Get compiler given type.
 */
function getCompiler (type) {
  switch (type) {
    case HANDLEBARS: {
      return compileHandlebarsTemplate;
    }
    case JADE: {
      return compileJadeTemplate;
    }
    case MUSTACHE: {
      return compileHandlebarsTemplate;
    }
    case NUNJUCKS: {
      return compileNunjucksTemplate;
    }
    default: {
      // If type not specified, assume raw HTML and no templating needed.
      return function (str) { return str; };
    }
  }
}

function compileHandlebarsTemplate (templateStr) {
  return Handlebars.compile(templateStr);
}

function compileJadeTemplate (templateStr) {
  return jade.compile(templateStr);
}

function compileMustacheTemplate (templateStr) {
  Mustache.parse(templateStr);
  return templateStr;
}

function compileNunjucksTemplate (templateStr) {
  return nunjucks.compile(templateStr);
}

function injectTemplateLib (type) {
  return new Promise(function (resolve) {
    // No lib injection required.
    if (!type || type === 'html') { return resolve(); }

    var scriptEl = LIB_LOADED[type];

    // Engine loaded.
    if (LIB_LOADED[type] === true) { return resolve(); }

    // Start lazy-loading.
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      LIB_LOADED[type] = scriptEl;
      scriptEl.setAttribute('src', LIB_SRC[type]);
      log('Lazy-loading %s engine. Please add <script src="%s"> to your page.',
          type, LIB_SRC[type]);
      document.body.appendChild(scriptEl);
    }

    // Wait for onload, whether just injected or already lazy-loading.
    var prevOnload = scriptEl.onload || function () {};
    scriptEl.onload = function () {
      prevOnload();
      LIB_LOADED[type] = true;
      resolve();
    };
  });
};

AFRAME.registerComponent('template-set', {
  schema: {
    on: {type: 'string'},
    src: {type: 'string'},
    data: {type: 'string'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    el.addEventListener(data.on, function () {
      el.setAttribute('template', {src: data.src, data: data.data});
    });
  }
});


/***/ }),

/***/ "./node_modules/d/index.js":
/*!*********************************!*\
  !*** ./node_modules/d/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign        = __webpack_require__(/*! es5-ext/object/assign */ "./node_modules/es5-ext/object/assign/index.js")
  , normalizeOpts = __webpack_require__(/*! es5-ext/object/normalize-options */ "./node_modules/es5-ext/object/normalize-options.js")
  , isCallable    = __webpack_require__(/*! es5-ext/object/is-callable */ "./node_modules/es5-ext/object/is-callable.js")
  , contains      = __webpack_require__(/*! es5-ext/string/#/contains */ "./node_modules/es5-ext/string/#/contains/index.js")

  , d;

d = module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if ((arguments.length < 2) || (typeof dscr !== 'string')) {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (dscr == null) {
		c = w = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
		w = contains.call(dscr, 'w');
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== 'string') {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (get == null) {
		get = undefined;
	} else if (!isCallable(get)) {
		options = get;
		get = set = undefined;
	} else if (set == null) {
		set = undefined;
	} else if (!isCallable(set)) {
		options = set;
		set = undefined;
	}
	if (dscr == null) {
		c = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};


/***/ }),

/***/ "./node_modules/es5-ext/array/from/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/array/from/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/array/from/is-implemented.js")()
	? Array.from
	: __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/array/from/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/array/from/is-implemented.js":
/*!***********************************************************!*\
  !*** ./node_modules/es5-ext/array/from/is-implemented.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var from = Array.from, arr, result;
	if (typeof from !== "function") return false;
	arr = ["raz", "dwa"];
	result = from(arr);
	return Boolean(result && (result !== arr) && (result[1] === "dwa"));
};


/***/ }),

/***/ "./node_modules/es5-ext/array/from/shim.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/array/from/shim.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iteratorSymbol = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js").iterator
  , isArguments    = __webpack_require__(/*! ../../function/is-arguments */ "./node_modules/es5-ext/function/is-arguments.js")
  , isFunction     = __webpack_require__(/*! ../../function/is-function */ "./node_modules/es5-ext/function/is-function.js")
  , toPosInt       = __webpack_require__(/*! ../../number/to-pos-integer */ "./node_modules/es5-ext/number/to-pos-integer.js")
  , callable       = __webpack_require__(/*! ../../object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , validValue     = __webpack_require__(/*! ../../object/valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , isValue        = __webpack_require__(/*! ../../object/is-value */ "./node_modules/es5-ext/object/is-value.js")
  , isString       = __webpack_require__(/*! ../../string/is-string */ "./node_modules/es5-ext/string/is-string.js")
  , isArray        = Array.isArray
  , call           = Function.prototype.call
  , desc           = { configurable: true, enumerable: true, writable: true, value: null }
  , defineProperty = Object.defineProperty;

// eslint-disable-next-line complexity, max-lines-per-function
module.exports = function (arrayLike /*, mapFn, thisArg*/) {
	var mapFn = arguments[1]
	  , thisArg = arguments[2]
	  , Context
	  , i
	  , j
	  , arr
	  , length
	  , code
	  , iterator
	  , result
	  , getIterator
	  , value;

	arrayLike = Object(validValue(arrayLike));

	if (isValue(mapFn)) callable(mapFn);
	if (!this || this === Array || !isFunction(this)) {
		// Result: Plain array
		if (!mapFn) {
			if (isArguments(arrayLike)) {
				// Source: Arguments
				length = arrayLike.length;
				if (length !== 1) return Array.apply(null, arrayLike);
				arr = new Array(1);
				arr[0] = arrayLike[0];
				return arr;
			}
			if (isArray(arrayLike)) {
				// Source: Array
				arr = new Array(length = arrayLike.length);
				for (i = 0; i < length; ++i) arr[i] = arrayLike[i];
				return arr;
			}
		}
		arr = [];
	} else {
		// Result: Non plain array
		Context = this;
	}

	if (!isArray(arrayLike)) {
		if ((getIterator = arrayLike[iteratorSymbol]) !== undefined) {
			// Source: Iterator
			iterator = callable(getIterator).call(arrayLike);
			if (Context) arr = new Context();
			result = iterator.next();
			i = 0;
			while (!result.done) {
				value = mapFn ? call.call(mapFn, thisArg, result.value, i) : result.value;
				if (Context) {
					desc.value = value;
					defineProperty(arr, i, desc);
				} else {
					arr[i] = value;
				}
				result = iterator.next();
				++i;
			}
			length = i;
		} else if (isString(arrayLike)) {
			// Source: String
			length = arrayLike.length;
			if (Context) arr = new Context();
			for (i = 0, j = 0; i < length; ++i) {
				value = arrayLike[i];
				if (i + 1 < length) {
					code = value.charCodeAt(0);
					// eslint-disable-next-line max-depth
					if (code >= 0xd800 && code <= 0xdbff) value += arrayLike[++i];
				}
				value = mapFn ? call.call(mapFn, thisArg, value, j) : value;
				if (Context) {
					desc.value = value;
					defineProperty(arr, j, desc);
				} else {
					arr[j] = value;
				}
				++j;
			}
			length = j;
		}
	}
	if (length === undefined) {
		// Source: array or array-like
		length = toPosInt(arrayLike.length);
		if (Context) arr = new Context(length);
		for (i = 0; i < length; ++i) {
			value = mapFn ? call.call(mapFn, thisArg, arrayLike[i], i) : arrayLike[i];
			if (Context) {
				desc.value = value;
				defineProperty(arr, i, desc);
			} else {
				arr[i] = value;
			}
		}
	}
	if (Context) {
		desc.value = null;
		arr.length = length;
	}
	return arr;
};


/***/ }),

/***/ "./node_modules/es5-ext/function/is-arguments.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/function/is-arguments.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objToString = Object.prototype.toString
  , id = objToString.call(
	(function () {
		return arguments;
	})()
);

module.exports = function (value) {
	return objToString.call(value) === id;
};


/***/ }),

/***/ "./node_modules/es5-ext/function/is-function.js":
/*!******************************************************!*\
  !*** ./node_modules/es5-ext/function/is-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objToString = Object.prototype.toString, id = objToString.call(__webpack_require__(/*! ./noop */ "./node_modules/es5-ext/function/noop.js"));

module.exports = function (value) {
	return typeof value === "function" && objToString.call(value) === id;
};


/***/ }),

/***/ "./node_modules/es5-ext/function/noop.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/function/noop.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function
module.exports = function () {};


/***/ }),

/***/ "./node_modules/es5-ext/math/sign/index.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/math/sign/is-implemented.js")()
	? Math.sign
	: __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/math/sign/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/math/sign/is-implemented.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/is-implemented.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var sign = Math.sign;
	if (typeof sign !== "function") return false;
	return (sign(10) === 1) && (sign(-20) === -1);
};


/***/ }),

/***/ "./node_modules/es5-ext/math/sign/shim.js":
/*!************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/shim.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value) {
	value = Number(value);
	if (isNaN(value) || (value === 0)) return value;
	return value > 0 ? 1 : -1;
};


/***/ }),

/***/ "./node_modules/es5-ext/number/to-integer.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/number/to-integer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sign = __webpack_require__(/*! ../math/sign */ "./node_modules/es5-ext/math/sign/index.js")

  , abs = Math.abs, floor = Math.floor;

module.exports = function (value) {
	if (isNaN(value)) return 0;
	value = Number(value);
	if ((value === 0) || !isFinite(value)) return value;
	return sign(value) * floor(abs(value));
};


/***/ }),

/***/ "./node_modules/es5-ext/number/to-pos-integer.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/number/to-pos-integer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(/*! ./to-integer */ "./node_modules/es5-ext/number/to-integer.js")

  , max = Math.max;

module.exports = function (value) {
 return max(0, toInteger(value));
};


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/assign/is-implemented.js")()
	? Object.assign
	: __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/assign/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/is-implemented.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return (obj.foo + obj.bar + obj.trzy) === "razdwatrzy";
};


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/shim.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys  = __webpack_require__(/*! ../keys */ "./node_modules/es5-ext/object/keys/index.js")
  , value = __webpack_require__(/*! ../valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , max   = Math.max;

module.exports = function (dest, src /*, …srcn*/) {
	var error, i, length = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/is-callable.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/is-callable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Deprecated



module.exports = function (obj) {
 return typeof obj === "function";
};


/***/ }),

/***/ "./node_modules/es5-ext/object/is-value.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/is-value.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__(/*! ../function/noop */ "./node_modules/es5-ext/function/noop.js")(); // Support ES3 engines

module.exports = function (val) {
 return (val !== _undefined) && (val !== null);
};


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/keys/is-implemented.js")() ? Object.keys : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/keys/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/is-implemented.js":
/*!************************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/is-implemented.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/shim.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/shim.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ../is-value */ "./node_modules/es5-ext/object/is-value.js");

var keys = Object.keys;

module.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };


/***/ }),

/***/ "./node_modules/es5-ext/object/normalize-options.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/object/normalize-options.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1 /*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/primitive-set.js":
/*!******************************************************!*\
  !*** ./node_modules/es5-ext/object/primitive-set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = Array.prototype.forEach, create = Object.create;

// eslint-disable-next-line no-unused-vars
module.exports = function (arg /*, …args*/) {
	var set = create(null);
	forEach.call(arguments, function (name) {
		set[name] = true;
	});
	return set;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/valid-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-callable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
	if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
	return fn;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/valid-value.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-value.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};


/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/string/#/contains/is-implemented.js")()
	? String.prototype.contains
	: __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/string/#/contains/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/is-implemented.js":
/*!******************************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/is-implemented.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return (str.contains("dwa") === true) && (str.contains("foo") === false);
};


/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/shim.js":
/*!********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/shim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};


/***/ }),

/***/ "./node_modules/es5-ext/string/is-string.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/string/is-string.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objToString = Object.prototype.toString, id = objToString.call("");

module.exports = function (value) {
	return (
		typeof value === "string" ||
		(value &&
			typeof value === "object" &&
			(value instanceof String || objToString.call(value) === id)) ||
		false
	);
};


/***/ }),

/***/ "./node_modules/es6-symbol/index.js":
/*!******************************************!*\
  !*** ./node_modules/es6-symbol/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es6-symbol/is-implemented.js")() ? Symbol : __webpack_require__(/*! ./polyfill */ "./node_modules/es6-symbol/polyfill.js");


/***/ }),

/***/ "./node_modules/es6-symbol/is-implemented.js":
/*!***************************************************!*\
  !*** ./node_modules/es6-symbol/is-implemented.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var validTypes = { object: true, symbol: true };

module.exports = function () {
	var symbol;
	if (typeof Symbol !== 'function') return false;
	symbol = Symbol('test symbol');
	try { String(symbol); } catch (e) { return false; }

	// Return 'true' also for polyfills
	if (!validTypes[typeof Symbol.iterator]) return false;
	if (!validTypes[typeof Symbol.toPrimitive]) return false;
	if (!validTypes[typeof Symbol.toStringTag]) return false;

	return true;
};


/***/ }),

/***/ "./node_modules/es6-symbol/is-symbol.js":
/*!**********************************************!*\
  !*** ./node_modules/es6-symbol/is-symbol.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (x) {
	if (!x) return false;
	if (typeof x === 'symbol') return true;
	if (!x.constructor) return false;
	if (x.constructor.name !== 'Symbol') return false;
	return (x[x.constructor.toStringTag] === 'Symbol');
};


/***/ }),

/***/ "./node_modules/es6-symbol/polyfill.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-symbol/polyfill.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ES2015 Symbol polyfill for environments that do not (or partially) support it



var d              = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , validateSymbol = __webpack_require__(/*! ./validate-symbol */ "./node_modules/es6-symbol/validate-symbol.js")

  , create = Object.create, defineProperties = Object.defineProperties
  , defineProperty = Object.defineProperty, objPrototype = Object.prototype
  , NativeSymbol, SymbolPolyfill, HiddenSymbol, globalSymbols = create(null)
  , isNativeSafe;

if (typeof Symbol === 'function') {
	NativeSymbol = Symbol;
	try {
		String(NativeSymbol());
		isNativeSafe = true;
	} catch (ignore) {}
}

var generateName = (function () {
	var created = create(null);
	return function (desc) {
		var postfix = 0, name, ie11BugWorkaround;
		while (created[desc + (postfix || '')]) ++postfix;
		desc += (postfix || '');
		created[desc] = true;
		name = '@@' + desc;
		defineProperty(objPrototype, name, d.gs(null, function (value) {
			// For IE11 issue see:
			// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
			//    ie11-broken-getters-on-dom-objects
			// https://github.com/medikoo/es6-symbol/issues/12
			if (ie11BugWorkaround) return;
			ie11BugWorkaround = true;
			defineProperty(this, name, d(value));
			ie11BugWorkaround = false;
		}));
		return name;
	};
}());

// Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false
HiddenSymbol = function Symbol(description) {
	if (this instanceof HiddenSymbol) throw new TypeError('Symbol is not a constructor');
	return SymbolPolyfill(description);
};

// Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)
module.exports = SymbolPolyfill = function Symbol(description) {
	var symbol;
	if (this instanceof Symbol) throw new TypeError('Symbol is not a constructor');
	if (isNativeSafe) return NativeSymbol(description);
	symbol = create(HiddenSymbol.prototype);
	description = (description === undefined ? '' : String(description));
	return defineProperties(symbol, {
		__description__: d('', description),
		__name__: d('', generateName(description))
	});
};
defineProperties(SymbolPolyfill, {
	for: d(function (key) {
		if (globalSymbols[key]) return globalSymbols[key];
		return (globalSymbols[key] = SymbolPolyfill(String(key)));
	}),
	keyFor: d(function (s) {
		var key;
		validateSymbol(s);
		for (key in globalSymbols) if (globalSymbols[key] === s) return key;
	}),

	// To ensure proper interoperability with other native functions (e.g. Array.from)
	// fallback to eventual native implementation of given symbol
	hasInstance: d('', (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill('hasInstance')),
	isConcatSpreadable: d('', (NativeSymbol && NativeSymbol.isConcatSpreadable) ||
		SymbolPolyfill('isConcatSpreadable')),
	iterator: d('', (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill('iterator')),
	match: d('', (NativeSymbol && NativeSymbol.match) || SymbolPolyfill('match')),
	replace: d('', (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill('replace')),
	search: d('', (NativeSymbol && NativeSymbol.search) || SymbolPolyfill('search')),
	species: d('', (NativeSymbol && NativeSymbol.species) || SymbolPolyfill('species')),
	split: d('', (NativeSymbol && NativeSymbol.split) || SymbolPolyfill('split')),
	toPrimitive: d('', (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill('toPrimitive')),
	toStringTag: d('', (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill('toStringTag')),
	unscopables: d('', (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill('unscopables'))
});

// Internal tweaks for real symbol producer
defineProperties(HiddenSymbol.prototype, {
	constructor: d(SymbolPolyfill),
	toString: d('', function () { return this.__name__; })
});

// Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
defineProperties(SymbolPolyfill.prototype, {
	toString: d(function () { return 'Symbol (' + validateSymbol(this).__description__ + ')'; }),
	valueOf: d(function () { return validateSymbol(this); })
});
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d('', function () {
	var symbol = validateSymbol(this);
	if (typeof symbol === 'symbol') return symbol;
	return symbol.toString();
}));
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d('c', 'Symbol'));

// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
	d('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));

// Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
	d('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));


/***/ }),

/***/ "./node_modules/es6-symbol/validate-symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/es6-symbol/validate-symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSymbol = __webpack_require__(/*! ./is-symbol */ "./node_modules/es6-symbol/is-symbol.js");

module.exports = function (value) {
	if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
	return value;
};


/***/ }),

/***/ "./node_modules/es6-template-strings/compile.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-template-strings/compile.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var esniff = __webpack_require__(/*! esniff */ "./node_modules/esniff/index.js")

  , i, current, literals, substitutions, sOut, sEscape, sAhead, sIn, sInEscape, template;

sOut = function (char) {
	if (char === '\\') return sEscape;
	if (char === '$') return sAhead;
	current += char;
	return sOut;
};
sEscape = function (char) {
	if ((char !== '\\') && (char !== '$')) current += '\\';
	current += char;
	return sOut;
};
sAhead = function (char) {
	if (char === '{') {
		literals.push(current);
		current = '';
		return sIn;
	}
	if (char === '$') {
		current += '$';
		return sAhead;
	}
	current += '$' + char;
	return sOut;
};
sIn = function (char) {
	var code = template.slice(i), end;
	esniff(code, '}', function (j) {
		if (esniff.nest >= 0) return esniff.next();
		end = j;
	});
	if (end != null) {
		substitutions.push(template.slice(i, i + end));
		i += end;
		current = '';
		return sOut;
	}
	end = code.length;
	i += end;
	current += code;
	return sIn;
};
sInEscape = function (char) {
	if ((char !== '\\') && (char !== '}')) current += '\\';
	current += char;
	return sIn;
};

module.exports = function (str) {
	var length, state, result;
	current = '';
	literals = [];
	substitutions = [];

	template = String(str);
	length = template.length;

	state = sOut;
	for (i = 0; i < length; ++i) state = state(template[i]);
	if (state === sOut) {
		literals.push(current);
	} else if (state === sEscape) {
		literals.push(current + '\\');
	} else if (state === sAhead) {
		literals.push(current + '$');
	} else if (state === sIn) {
		literals[literals.length - 1] += '${' + current;
	} else if (state === sInEscape) {
		literals[literals.length - 1] += '${' + current + '\\';
	}
	result = { literals: literals, substitutions: substitutions };
	literals = substitutions = null;
	return result;
};


/***/ }),

/***/ "./node_modules/es6-template-strings/index.js":
/*!****************************************************!*\
  !*** ./node_modules/es6-template-strings/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compile = __webpack_require__(/*! ./compile */ "./node_modules/es6-template-strings/compile.js")
  , resolve = __webpack_require__(/*! ./resolve-to-string */ "./node_modules/es6-template-strings/resolve-to-string.js");

module.exports = function (template, context/*, options*/) {
	return resolve(compile(template), context, arguments[2]);
};


/***/ }),

/***/ "./node_modules/es6-template-strings/passthru.js":
/*!*******************************************************!*\
  !*** ./node_modules/es6-template-strings/passthru.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reduce = Array.prototype.reduce;

module.exports = function (literals/*, …substitutions*/) {
	var args = arguments;
	return reduce.call(literals, function (a, b, i) {
		return a + ((args[i] === undefined) ? '' :  String(args[i])) + b;
	});
};


/***/ }),

/***/ "./node_modules/es6-template-strings/resolve-to-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/es6-template-strings/resolve-to-string.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resolve  = __webpack_require__(/*! ./resolve */ "./node_modules/es6-template-strings/resolve.js")
  , passthru = __webpack_require__(/*! ./passthru */ "./node_modules/es6-template-strings/passthru.js");

module.exports = function (data, context/*, options*/) {
	return passthru.apply(null, resolve(data, context, arguments[2]));
};


/***/ }),

/***/ "./node_modules/es6-template-strings/resolve.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-template-strings/resolve.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var value          = __webpack_require__(/*! es5-ext/object/valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , normalize      = __webpack_require__(/*! es5-ext/object/normalize-options */ "./node_modules/es5-ext/object/normalize-options.js")
  , isVarNameValid = __webpack_require__(/*! esniff/is-var-name-valid */ "./node_modules/esniff/is-var-name-valid.js")

  , map = Array.prototype.map, keys = Object.keys
  , stringify = JSON.stringify;

module.exports = function (data, context/*, options*/) {
	var names, argNames, argValues, options = Object(arguments[2]);

	(value(data) && value(data.literals) && value(data.substitutions));
	context = normalize(context);
	names = keys(context).filter(isVarNameValid);
	argNames = names.join(', ');
	argValues = names.map(function (name) { return context[name]; });
	return [data.literals].concat(map.call(data.substitutions, function (expr) {
		var resolver;
		if (!expr) return undefined;
		try {
			resolver = new Function(argNames, 'return (' + expr + ')');
		} catch (e) {
			throw new TypeError("Unable to compile expression:\n\targs: " + stringify(argNames) +
				"\n\tbody: " + stringify(expr) + "\n\terror: " + e.stack);
		}
		try {
			return resolver.apply(null, argValues);
		} catch (e) {
			if (options.partial) return '${' + expr + '}';
			throw new TypeError("Unable to resolve expression:\n\targs: " + stringify(argNames) +
				"\n\tbody: " + stringify(expr) + "\n\terror: " + e.stack);
		}
	}));
};


/***/ }),

/***/ "./node_modules/esniff/index.js":
/*!**************************************!*\
  !*** ./node_modules/esniff/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var from         = __webpack_require__(/*! es5-ext/array/from */ "./node_modules/es5-ext/array/from/index.js")
  , primitiveSet = __webpack_require__(/*! es5-ext/object/primitive-set */ "./node_modules/es5-ext/object/primitive-set.js")
  , value        = __webpack_require__(/*! es5-ext/object/valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , callable     = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , d            = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , eolSet       = __webpack_require__(/*! ./lib/ws-eol */ "./node_modules/esniff/lib/ws-eol.js")
  , wsSet        = __webpack_require__(/*! ./lib/ws */ "./node_modules/esniff/lib/ws.js")

  , hasOwnProperty = Object.prototype.hasOwnProperty
  , preRegExpSet = primitiveSet.apply(null, from(';{=([,<>+-*/%&|^!~?:}'))
  , nonNameSet = primitiveSet.apply(null, from(';{=([,<>+-*/%&|^!~?:})].'))

  , move, startCollect, endCollect, collectNest
  , $ws, $common, $string, $comment, $multiComment, $regExp

  , i, char, line, columnIndex, afterWs, previousChar
  , nest, nestedTokens, results
  , userCode, userTriggerChar, isUserTriggerOperatorChar, userCallback

  , quote
  , collectIndex, data, nestRelease;

move = function (j) {
	if (!char) return;
	if (i >= j) return;
	while (i !== j) {
		if (!char) return;
		if (hasOwnProperty.call(wsSet, char)) {
			if (hasOwnProperty.call(eolSet, char)) {
				columnIndex = i;
				++line;
			}
		} else {
			previousChar = char;
		}
		char = userCode[++i];
	}
};

startCollect = function (oldNestRelease) {
	if (collectIndex != null) nestedTokens.push([data, collectIndex, oldNestRelease]);
	data = { point: i + 1, line: line, column: i + 1 - columnIndex };
	collectIndex = i;
};

endCollect = function () {
	var previous;
	data.raw = userCode.slice(collectIndex, i);
	results.push(data);
	if (nestedTokens.length) {
		previous = nestedTokens.pop();
		data = previous[0];
		collectIndex = previous[1];
		nestRelease = previous[2];
		return;
	}
	data = null;
	collectIndex = null;
	nestRelease = null;
};

collectNest = function () {
	var old = nestRelease;
	nestRelease = nest;
	++nest;
	move(i + 1);
	startCollect(old);
	return $ws;
};

$common = function () {
	if ((char === '\'') || (char === '"')) {
		quote = char;
		char = userCode[++i];
		return $string;
	}
	if ((char === '(') || (char === '{') || (char === '[')) {
		++nest;
	} else if ((char === ')') || (char === '}') || (char === ']')) {
		if (nestRelease === --nest) endCollect();
	} else if (char === '/') {
		if (hasOwnProperty.call(preRegExpSet, previousChar)) {
			char = userCode[++i];
			return $regExp;
		}
	}
	if ((char !== userTriggerChar) || (!isUserTriggerOperatorChar && previousChar && !afterWs &&
			!hasOwnProperty.call(nonNameSet, previousChar))) {
		previousChar = char;
		char = userCode[++i];
		return $ws;
	}

	return userCallback(i, previousChar, nest);
};

$comment = function () {
	while (true) {
		if (!char) return;
		if (hasOwnProperty.call(eolSet, char)) {
			columnIndex = i + 1;
			++line;
			return;
		}
		char = userCode[++i];
	}
};

$multiComment = function () {
	while (true) {
		if (!char) return;
		if (char === '*') {
			char = userCode[++i];
			if (char === '/') return;
			continue;
		}
		if (hasOwnProperty.call(eolSet, char)) {
			columnIndex = i + 1;
			++line;
		}
		char = userCode[++i];
	}
};

$ws = function () {
	var next;
	afterWs = false;
	while (true) {
		if (!char) return;
		if (hasOwnProperty.call(wsSet, char)) {
			afterWs = true;
			if (hasOwnProperty.call(eolSet, char)) {
				columnIndex = i + 1;
				++line;
			}
		} else if (char === '/') {
			next = userCode[i + 1];
			if (next === '/') {
				char = userCode[i += 2];
				afterWs = true;
				$comment();
			} else if (next === '*') {
				char = userCode[i += 2];
				afterWs = true;
				$multiComment();
			} else {
				break;
			}
		} else {
			break;
		}
		char = userCode[++i];
	}
	return $common;
};

$string = function () {
	while (true) {
		if (!char) return;
		if (char === quote) {
			char = userCode[++i];
			previousChar = quote;
			return $ws;
		}
		if (char === '\\') {
			if (hasOwnProperty.call(eolSet, userCode[++i])) {
				columnIndex = i + 1;
				++line;
			}
		}
		char = userCode[++i];
	}
};

$regExp = function () {
	while (true) {
		if (!char) return;
		if (char === '/') {
			previousChar = '/';
			char = userCode[++i];
			return $ws;
		}
		if (char === '\\') ++i;
		char = userCode[++i];
	}
};

module.exports = exports = function (code, triggerChar, callback) {
	var state;

	userCode = String(value(code));
	userTriggerChar = String(value(triggerChar));
	if (userTriggerChar.length !== 1) {
		throw new TypeError(userTriggerChar + " should be one character long string");
	}
	userCallback = callable(callback);
	isUserTriggerOperatorChar = hasOwnProperty.call(nonNameSet, userTriggerChar);
	i = 0;
	char = userCode[i];
	line = 1;
	columnIndex = 0;
	afterWs = false;
	previousChar = null;
	nest = 0;
	nestedTokens = [];
	results = [];
	exports.forceStop = false;
	state = $ws;
	while (state) state = state();
	return results;
};

Object.defineProperties(exports, {
	$ws: d($ws),
	$common: d($common),
	collectNest: d(collectNest),
	move: d(move),
	index: d.gs(function () { return i; }),
	line: d.gs(function () { return line; }),
	nest: d.gs(function () { return nest; }),
	columnIndex: d.gs(function () { return columnIndex; }),
	next: d(function (step) {
		if (!char) return;
		move(i + (step || 1));
		return $ws();
	}),
	resume: d(function () { return $common; })
});


/***/ }),

/***/ "./node_modules/esniff/is-var-name-valid.js":
/*!**************************************************!*\
  !*** ./node_modules/esniff/is-var-name-valid.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Credit: Mathias Bynens -> https://mathiasbynens.be/demo/javascript-identifier-regex



module.exports = RegExp.prototype.test.bind(/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|null|this|true|void|with|await|break|catch|class|const|false|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)(?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D])(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF])*$/);


/***/ }),

/***/ "./node_modules/esniff/lib/ws-eol.js":
/*!*******************************************!*\
  !*** ./node_modules/esniff/lib/ws-eol.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var from         = __webpack_require__(/*! es5-ext/array/from */ "./node_modules/es5-ext/array/from/index.js")
  , primitiveSet = __webpack_require__(/*! es5-ext/object/primitive-set */ "./node_modules/es5-ext/object/primitive-set.js");

module.exports = primitiveSet.apply(null, from('\n\r\u2028\u2029'));


/***/ }),

/***/ "./node_modules/esniff/lib/ws-inline.js":
/*!**********************************************!*\
  !*** ./node_modules/esniff/lib/ws-inline.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var from         = __webpack_require__(/*! es5-ext/array/from */ "./node_modules/es5-ext/array/from/index.js")
  , primitiveSet = __webpack_require__(/*! es5-ext/object/primitive-set */ "./node_modules/es5-ext/object/primitive-set.js");

module.exports = primitiveSet.apply(null, from(' \f\t\v​\u00a0\u1680​\u180e' +
	'\u2000​\u2001\u2002​\u2003\u2004​\u2005\u2006​\u2007\u2008​\u2009\u200a' +
	'​​​\u202f\u205f​\u3000'));


/***/ }),

/***/ "./node_modules/esniff/lib/ws.js":
/*!***************************************!*\
  !*** ./node_modules/esniff/lib/ws.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var primitiveSet = __webpack_require__(/*! es5-ext/object/primitive-set */ "./node_modules/es5-ext/object/primitive-set.js")
  , eol          = __webpack_require__(/*! ./ws-eol */ "./node_modules/esniff/lib/ws-eol.js")
  , inline       = __webpack_require__(/*! ./ws-inline */ "./node_modules/esniff/lib/ws-inline.js");

module.exports = primitiveSet.apply(null,
	Object.keys(eol).concat(Object.keys(inline)));


/***/ }),

/***/ "./node_modules/lucidweb-aframe-extensions/ui/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/lucidweb-aframe-extensions/ui/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// various assets

__webpack_require__(/*! ./assets/images/logo_lucidweb.png */ "../../../../extensions/lucidweb-aframe-extensions/ui/assets/images/logo_lucidweb.png");
__webpack_require__(/*! ./assets/styles/ui.general.less */ "../../../../extensions/lucidweb-aframe-extensions/ui/assets/styles/ui.general.less");
__webpack_require__(/*! ./assets/styles/ui.branding.less */ "../../../../extensions/lucidweb-aframe-extensions/ui/assets/styles/ui.branding.less");
__webpack_require__(/*! ./assets/styles/ui.icon-rendering.less */ "../../../../extensions/lucidweb-aframe-extensions/ui/assets/styles/ui.icon-rendering.less");

// primitives

__webpack_require__(/*! ./primitives/ui-icon */ "../../../../extensions/lucidweb-aframe-extensions/ui/primitives/ui-icon.js");
__webpack_require__(/*! ./primitives/ui-button */ "../../../../extensions/lucidweb-aframe-extensions/ui/primitives/ui-button.js");
__webpack_require__(/*! ./primitives/video-controls */ "../../../../extensions/lucidweb-aframe-extensions/ui/primitives/video-controls.js");

__webpack_require__(/*! ./primitives/modify-property */ "../../../../extensions/lucidweb-aframe-extensions/ui/primitives/modify-property.js");

// components

__webpack_require__(/*! ./components/all-controls */ "../../../../extensions/lucidweb-aframe-extensions/ui/components/all-controls.js");
__webpack_require__(/*! ./components/icon-renderer */ "../../../../extensions/lucidweb-aframe-extensions/ui/components/icon-renderer.js");
__webpack_require__(/*! ./components/ui-button */ "../../../../extensions/lucidweb-aframe-extensions/ui/components/ui-button.js");
__webpack_require__(/*! ./components/video-controls */ "../../../../extensions/lucidweb-aframe-extensions/ui/components/video-controls.js");
__webpack_require__(/*! ./components/geometry-resize */ "../../../../extensions/lucidweb-aframe-extensions/ui/components/geometry-resize.js");
__webpack_require__(/*! ./components/track-position */ "../../../../extensions/lucidweb-aframe-extensions/ui/components/track-position.js");
__webpack_require__(/*! ./components/track-rotation */ "../../../../extensions/lucidweb-aframe-extensions/ui/components/track-rotation.js");

__webpack_require__(/*! ./components/modify-property */ "../../../../extensions/lucidweb-aframe-extensions/ui/components/modify-property.js");

// systems

__webpack_require__(/*! ./systems/icon-renderer */ "../../../../extensions/lucidweb-aframe-extensions/ui/systems/icon-renderer.js");

/***/ }),

/***/ "./node_modules/lucidweb-aframe-extensions/utilities/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/lucidweb-aframe-extensions/utilities/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// primitives

__webpack_require__(/*! ./primitives/hide-entity */ "../../../../extensions/lucidweb-aframe-extensions/utilities/primitives/hide-entity.js");
__webpack_require__(/*! ./primitives/show-entity */ "../../../../extensions/lucidweb-aframe-extensions/utilities/primitives/show-entity.js");
__webpack_require__(/*! ./primitives/show-loading-screen */ "../../../../extensions/lucidweb-aframe-extensions/utilities/primitives/show-loading-screen.js");
__webpack_require__(/*! ./primitives/enable-group */ "../../../../extensions/lucidweb-aframe-extensions/utilities/primitives/enable-group.js");
__webpack_require__(/*! ./primitives/disable-group */ "../../../../extensions/lucidweb-aframe-extensions/utilities/primitives/disable-group.js");

// components

__webpack_require__(/*! ./components/hide-entity */ "../../../../extensions/lucidweb-aframe-extensions/utilities/components/hide-entity.js");
__webpack_require__(/*! ./components/show-entity */ "../../../../extensions/lucidweb-aframe-extensions/utilities/components/show-entity.js");
__webpack_require__(/*! ./components/device-detection */ "../../../../extensions/lucidweb-aframe-extensions/utilities/components/device-detection.js");
__webpack_require__(/*! ./components/transition-to-cardboard */ "../../../../extensions/lucidweb-aframe-extensions/utilities/components/transition-to-cardboard.js");
__webpack_require__(/*! ./components/show-loading-screen */ "../../../../extensions/lucidweb-aframe-extensions/utilities/components/show-loading-screen.js");
__webpack_require__(/*! ./components/enable-group */ "../../../../extensions/lucidweb-aframe-extensions/utilities/components/enable-group.js");
__webpack_require__(/*! ./components/disable-group */ "../../../../extensions/lucidweb-aframe-extensions/utilities/components/disable-group.js");

// other

__webpack_require__(/*! ./assets/styles/utilities.less */ "../../../../extensions/lucidweb-aframe-extensions/utilities/assets/styles/utilities.less");

/***/ }),

/***/ "./node_modules/lucidweb-aframe-extensions/video/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucidweb-aframe-extensions/video/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


//
// ASSETS
//

__webpack_require__(/*! ../utilities/assets/images/assist-cardboard-background.jpg */ "../../../../extensions/lucidweb-aframe-extensions/utilities/assets/images/assist-cardboard-background.jpg");

//
// STYLES
//

__webpack_require__(/*! ./assets/styles/video.less */ "../../../../extensions/lucidweb-aframe-extensions/video/assets/styles/video.less");

//
// POLYFILLS
//

__webpack_require__(/*! es6-promise */ "../../../../extensions/lucidweb-aframe-extensions/node_modules/es6-promise/dist/es6-promise.js").polyfill();

//
// Requirements
//

// primitives

__webpack_require__(/*! ./primitives/video-controller */ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/video-controller.js");
__webpack_require__(/*! ./primitives/start-video */ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/start-video.js");
__webpack_require__(/*! ./primitives/end-video */ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/end-video.js");
__webpack_require__(/*! ./primitives/stop-video */ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/stop-video.js");
__webpack_require__(/*! ./primitives/play-video */ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/play-video.js");
__webpack_require__(/*! ./primitives/mute-video */ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/mute-video.js");
__webpack_require__(/*! ./primitives/flat-video-controls */ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/flat-video-controls.js");
__webpack_require__(/*! ./primitives/play-audio */ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/play-audio.js");
__webpack_require__(/*! ./primitives/pause-audio */ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/pause-audio.js");
__webpack_require__(/*! ./primitives/on-video-closed */ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/on-video-closed.js");
__webpack_require__(/*! ./primitives/on-video-ended */ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/on-video-ended.js");
__webpack_require__(/*! ./primitives/desktop-videosphere-controls */ "../../../../extensions/lucidweb-aframe-extensions/video/primitives/desktop-videosphere-controls.js");

// components

__webpack_require__(/*! ./components/start-video */ "../../../../extensions/lucidweb-aframe-extensions/video/components/start-video.js");
__webpack_require__(/*! ./components/end-video */ "../../../../extensions/lucidweb-aframe-extensions/video/components/end-video.js");
__webpack_require__(/*! ./components/play-video */ "../../../../extensions/lucidweb-aframe-extensions/video/components/play-video.js");
__webpack_require__(/*! ./components/stop-video */ "../../../../extensions/lucidweb-aframe-extensions/video/components/stop-video.js");
__webpack_require__(/*! ./components/mute-video */ "../../../../extensions/lucidweb-aframe-extensions/video/components/mute-video.js");
__webpack_require__(/*! ./components/video-controller */ "../../../../extensions/lucidweb-aframe-extensions/video/components/video-controller.js");
__webpack_require__(/*! ./components/flat-video-controls */ "../../../../extensions/lucidweb-aframe-extensions/video/components/flat-video-controls.js");
__webpack_require__(/*! ./components/play-audio */ "../../../../extensions/lucidweb-aframe-extensions/video/components/play-audio.js");
__webpack_require__(/*! ./components/pause-audio */ "../../../../extensions/lucidweb-aframe-extensions/video/components/pause-audio.js");
__webpack_require__(/*! ./components/video-can-play */ "../../../../extensions/lucidweb-aframe-extensions/video/components/video-can-play.js");
__webpack_require__(/*! ./components/desktop-videosphere-controls */ "../../../../extensions/lucidweb-aframe-extensions/video/components/desktop-videosphere-controls.js");

// systems

__webpack_require__(/*! ./systems/video-controller */ "../../../../extensions/lucidweb-aframe-extensions/video/systems/video-controller.js");
__webpack_require__(/*! ./systems/video-can-play */ "../../../../extensions/lucidweb-aframe-extensions/video/systems/video-can-play.js");

// ui

__webpack_require__(/*! ../ui/primitives/video-controls */ "../../../../extensions/lucidweb-aframe-extensions/ui/primitives/video-controls.js");

/***/ }),

/***/ "./node_modules/lucidweb-aframe-extensions/webfonts/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lucidweb-aframe-extensions/webfonts/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(/*! ./assets/styles/webfonts.icons.less */ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/styles/webfonts.icons.less");
__webpack_require__(/*! ./assets/styles/icons.less */ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/styles/icons.less");

__webpack_require__(/*! ./assets/webfonts/lucidweb.eot */ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb.eot");
__webpack_require__(/*! ./assets/webfonts/lucidweb.ttf */ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb.ttf");
__webpack_require__(/*! ./assets/webfonts/lucidweb.woff */ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb.woff");
__webpack_require__(/*! ./assets/webfonts/lucidweb.woff2 */ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb.woff2");
__webpack_require__(/*! ./assets/webfonts/lucidweb.svg */ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb.svg");

__webpack_require__(/*! ./assets/webfonts/lucidweb_test.eot */ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb_test.eot");
__webpack_require__(/*! ./assets/webfonts/lucidweb_test.ttf */ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb_test.ttf");
__webpack_require__(/*! ./assets/webfonts/lucidweb_test.woff */ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb_test.woff");
__webpack_require__(/*! ./assets/webfonts/lucidweb_test.woff2 */ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb_test.woff2");
__webpack_require__(/*! ./assets/webfonts/lucidweb_test.svg */ "../../../../extensions/lucidweb-aframe-extensions/webfonts/assets/webfonts/lucidweb_test.svg");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/assets/images/10_Damfzug_gr.png":
/*!*********************************************!*\
  !*** ./src/assets/images/10_Damfzug_gr.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/10_Damfzug_gr.png?6535328cddc2955b8885c51dad69fbca";

/***/ }),

/***/ "./src/assets/images/11_Embalse_Boot_gr.png":
/*!**************************************************!*\
  !*** ./src/assets/images/11_Embalse_Boot_gr.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/11_Embalse_Boot_gr.png?56715ac3d4a09fb525c8a1a4d6e9de31";

/***/ }),

/***/ "./src/assets/images/12_Fort_Hav_abends_gr.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/12_Fort_Hav_abends_gr.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/12_Fort_Hav_abends_gr.png?3d69f92d350a1a9d3c211148a9f4e169";

/***/ }),

/***/ "./src/assets/images/13_Hotel_Ens_gr.png":
/*!***********************************************!*\
  !*** ./src/assets/images/13_Hotel_Ens_gr.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/13_Hotel_Ens_gr.png?3f25ba0a9eb9a07f4f2527fd84fa51c0";

/***/ }),

/***/ "./src/assets/images/14_1_Mai_Hav_gr.png":
/*!***********************************************!*\
  !*** ./src/assets/images/14_1_Mai_Hav_gr.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/14_1_Mai_Hav_gr.png?7b152dee7024aa977276255451b91e62";

/***/ }),

/***/ "./src/assets/images/15_Denkmal_SClara_Che_nah_gr.png":
/*!************************************************************!*\
  !*** ./src/assets/images/15_Denkmal_SClara_Che_nah_gr.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/15_Denkmal_SClara_Che_nah_gr.png?de55b83d42daa59c7ecfc2a4b3ec7cab";

/***/ }),

/***/ "./src/assets/images/16_Luxus_Verfall_Hav_gr_.png":
/*!********************************************************!*\
  !*** ./src/assets/images/16_Luxus_Verfall_Hav_gr_.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/16_Luxus_Verfall_Hav_gr_.png?28a6b4bf8e9f3abb50b1538df54cda81";

/***/ }),

/***/ "./src/assets/images/17_Kapitol_Hav_gr.png":
/*!*************************************************!*\
  !*** ./src/assets/images/17_Kapitol_Hav_gr.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/17_Kapitol_Hav_gr.png?284b5ebb449e2a173c3a7205b0cea533";

/***/ }),

/***/ "./src/assets/images/1_Start_Strand_gr.png":
/*!*************************************************!*\
  !*** ./src/assets/images/1_Start_Strand_gr.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/1_Start_Strand_gr.png?b2f519943059dd7212682ea8cf9bffc0";

/***/ }),

/***/ "./src/assets/images/2_Oldtimer_innen_gr.png":
/*!***************************************************!*\
  !*** ./src/assets/images/2_Oldtimer_innen_gr.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/2_Oldtimer_innen_gr.png?34a149af033e716b174f0ba278c9d095";

/***/ }),

/***/ "./src/assets/images/3_casa_cerveza_gr.png":
/*!*************************************************!*\
  !*** ./src/assets/images/3_casa_cerveza_gr.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/3_casa_cerveza_gr.png?8bf43db97f94e6fecfd99e8932263944";

/***/ }),

/***/ "./src/assets/images/4_TR_Placa_Major_gr.png":
/*!***************************************************!*\
  !*** ./src/assets/images/4_TR_Placa_Major_gr.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/4_TR_Placa_Major_gr.png?b213ceb22af3b2487afc383a94eea229";

/***/ }),

/***/ "./src/assets/images/5_Tanzkurs_Strand_gr.png":
/*!****************************************************!*\
  !*** ./src/assets/images/5_Tanzkurs_Strand_gr.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/5_Tanzkurs_Strand_gr.png?1d111b697860c913dc9413869a2fda9f";

/***/ }),

/***/ "./src/assets/images/6_Peso_verkaufen_gr.png":
/*!***************************************************!*\
  !*** ./src/assets/images/6_Peso_verkaufen_gr.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/6_Peso_verkaufen_gr.png?8b8c323c19eb8b8ad031dc2d1d8a65ac";

/***/ }),

/***/ "./src/assets/images/7_Pelikan_Strand_gr.png":
/*!***************************************************!*\
  !*** ./src/assets/images/7_Pelikan_Strand_gr.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/7_Pelikan_Strand_gr.png?2ec7660d59ea357fc435ed0c95ce462f";

/***/ }),

/***/ "./src/assets/images/8_Festung_Morro_gr.png":
/*!**************************************************!*\
  !*** ./src/assets/images/8_Festung_Morro_gr.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/8_Festung_Morro_gr.png?64d44d354bfa59539d511d453d56f02b";

/***/ }),

/***/ "./src/assets/images/9_Angler_Carlos_HAV_gr.png":
/*!******************************************************!*\
  !*** ./src/assets/images/9_Angler_Carlos_HAV_gr.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/9_Angler_Carlos_HAV_gr.png?0efee8f71619c816f5a382e5845be436";

/***/ }),

/***/ "./src/assets/styles/experience.less":
/*!*******************************************!*\
  !*** ./src/assets/styles/experience.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/styles/experience.less";

/***/ }),

/***/ "./src/extensions/components/custom-thing.js":
/*!***************************************************!*\
  !*** ./src/extensions/components/custom-thing.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent('custom-thing', {
  schema: {
    subject: {
      type: "string",
      default: "world"
    }
  },
  init: function init() {
    console.log(this.system.data.greeting + this.data.subject + "!");
  }
});

/***/ }),

/***/ "./src/extensions/primitives/custom-primitive.js":
/*!*******************************************************!*\
  !*** ./src/extensions/primitives/custom-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerPrimitive('custom-thing', {
  defaultComponents: {
    "custom-thing": {}
  },
  mappings: {
    subject: "custom-thing.subject"
  }
});

/***/ }),

/***/ "./src/extensions/systems/custom-system.js":
/*!*************************************************!*\
  !*** ./src/extensions/systems/custom-system.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerSystem('custom-thing', {
  schema: {
    greeting: {
      type: "string",
      default: "Hello, "
    }
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//
// LUCIDWEB AFRAME EXTENSIONS ARE REQUIRED HERE
// (this allows us to only pack the needed resources in our js file)
//
// styles
__webpack_require__(/*! ./assets/styles/experience.less */ "./src/assets/styles/experience.less"); // fonts


__webpack_require__(/*! ../node_modules/lucidweb-aframe-extensions/webfonts/ */ "./node_modules/lucidweb-aframe-extensions/webfonts/index.js"); // modules


__webpack_require__(/*! ../node_modules/lucidweb-aframe-extensions/video/ */ "./node_modules/lucidweb-aframe-extensions/video/index.js");

__webpack_require__(/*! ../node_modules/lucidweb-aframe-extensions/ui/ */ "./node_modules/lucidweb-aframe-extensions/ui/index.js");

__webpack_require__(/*! ../node_modules/lucidweb-aframe-extensions/utilities/ */ "./node_modules/lucidweb-aframe-extensions/utilities/index.js");

__webpack_require__(/*! aframe-template-component */ "./node_modules/aframe-template-component/index.js");

__webpack_require__(/*! aframe-event-set-component */ "./node_modules/aframe-event-set-component/index.js"); //
// CUSTOM CODE GETS REQUIRED HERE
//
// require ASSETS


__webpack_require__(/*! ./assets/images/1_Start_Strand_gr.png */ "./src/assets/images/1_Start_Strand_gr.png");

__webpack_require__(/*! ./assets/images/2_Oldtimer_innen_gr.png */ "./src/assets/images/2_Oldtimer_innen_gr.png");

__webpack_require__(/*! ./assets/images/3_casa_cerveza_gr.png */ "./src/assets/images/3_casa_cerveza_gr.png");

__webpack_require__(/*! ./assets/images/4_TR_Placa_Major_gr.png */ "./src/assets/images/4_TR_Placa_Major_gr.png");

__webpack_require__(/*! ./assets/images/5_Tanzkurs_Strand_gr.png */ "./src/assets/images/5_Tanzkurs_Strand_gr.png");

__webpack_require__(/*! ./assets/images/6_Peso_verkaufen_gr.png */ "./src/assets/images/6_Peso_verkaufen_gr.png");

__webpack_require__(/*! ./assets/images/7_Pelikan_Strand_gr.png */ "./src/assets/images/7_Pelikan_Strand_gr.png");

__webpack_require__(/*! ./assets/images/8_Festung_Morro_gr.png */ "./src/assets/images/8_Festung_Morro_gr.png");

__webpack_require__(/*! ./assets/images/9_Angler_Carlos_HAV_gr.png */ "./src/assets/images/9_Angler_Carlos_HAV_gr.png");

__webpack_require__(/*! ./assets/images/10_Damfzug_gr.png */ "./src/assets/images/10_Damfzug_gr.png");

__webpack_require__(/*! ./assets/images/11_Embalse_Boot_gr.png */ "./src/assets/images/11_Embalse_Boot_gr.png");

__webpack_require__(/*! ./assets/images/12_Fort_Hav_abends_gr.png */ "./src/assets/images/12_Fort_Hav_abends_gr.png");

__webpack_require__(/*! ./assets/images/13_Hotel_Ens_gr.png */ "./src/assets/images/13_Hotel_Ens_gr.png");

__webpack_require__(/*! ./assets/images/14_1_Mai_Hav_gr.png */ "./src/assets/images/14_1_Mai_Hav_gr.png");

__webpack_require__(/*! ./assets/images/15_Denkmal_SClara_Che_nah_gr.png */ "./src/assets/images/15_Denkmal_SClara_Che_nah_gr.png");

__webpack_require__(/*! ./assets/images/16_Luxus_Verfall_Hav_gr_.png */ "./src/assets/images/16_Luxus_Verfall_Hav_gr_.png");

__webpack_require__(/*! ./assets/images/17_Kapitol_Hav_gr.png */ "./src/assets/images/17_Kapitol_Hav_gr.png"); // require custom components


__webpack_require__(/*! ./extensions/components/custom-thing */ "./src/extensions/components/custom-thing.js"); // require custom primitives


__webpack_require__(/*! ./extensions/primitives/custom-primitive */ "./src/extensions/primitives/custom-primitive.js"); // require custom systems


__webpack_require__(/*! ./extensions/systems/custom-system */ "./src/extensions/systems/custom-system.js"); // document.addEventListener('mousemove', function(){
//   console.log("mouse is moving");
// })

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL2NvbW1vbi9jb21wb25lbnRzL2lkbGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL25vZGVfbW9kdWxlcy9jbGlwYm9hcmQtcG9seWZpbGwvYnVpbGQvY2xpcGJvYXJkLXBvbHlmaWxsLmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy9ub2RlX21vZHVsZXMvZXM2LXByb21pc2UvZGlzdC9lczYtcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvbm9kZV9tb2R1bGVzL2ZzY3JlZW4vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy91aS9hc3NldHMvaW1hZ2VzL2xvZ29fbHVjaWR3ZWIucG5nIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy91aS9hc3NldHMvc3R5bGVzL3VpLmJyYW5kaW5nLmxlc3MiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3VpL2Fzc2V0cy9zdHlsZXMvdWkuZ2VuZXJhbC5sZXNzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy91aS9hc3NldHMvc3R5bGVzL3VpLmljb24tcmVuZGVyaW5nLmxlc3MiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3VpL2NvbXBvbmVudHMvYWxsLWNvbnRyb2xzLmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy91aS9jb21wb25lbnRzL2dlb21ldHJ5LXJlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdWkvY29tcG9uZW50cy9pY29uLXJlbmRlcmVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy91aS9jb21wb25lbnRzL21vZGlmeS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdWkvY29tcG9uZW50cy90cmFjay1wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdWkvY29tcG9uZW50cy90cmFjay1yb3RhdGlvbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdWkvY29tcG9uZW50cy91aS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3VpL2NvbXBvbmVudHMvdmlkZW8tY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3VpL2NvbmZpZy9pY29uLW1hcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdWkvcHJpbWl0aXZlcy9tb2RpZnktcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3VpL3ByaW1pdGl2ZXMvdWktYnV0dG9uLmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy91aS9wcmltaXRpdmVzL3VpLWljb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3VpL3ByaW1pdGl2ZXMvdmlkZW8tY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3VpL3N5c3RlbXMvaWNvbi1yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdXRpbGl0aWVzL2Fzc2V0cy9pbWFnZXMvYXNzaXN0LWNhcmRib2FyZC1iYWNrZ3JvdW5kLmpwZyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdXRpbGl0aWVzL2Fzc2V0cy9zdHlsZXMvdXRpbGl0aWVzLmxlc3MiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3V0aWxpdGllcy9jb21wb25lbnRzL2RldmljZS1kZXRlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3V0aWxpdGllcy9jb21wb25lbnRzL2Rpc2FibGUtZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3V0aWxpdGllcy9jb21wb25lbnRzL2VuYWJsZS1ncm91cC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdXRpbGl0aWVzL2NvbXBvbmVudHMvaGlkZS1lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3V0aWxpdGllcy9jb21wb25lbnRzL3Nob3ctZW50aXR5LmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy91dGlsaXRpZXMvY29tcG9uZW50cy9zaG93LWxvYWRpbmctc2NyZWVuLmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy91dGlsaXRpZXMvY29tcG9uZW50cy90cmFuc2l0aW9uLXRvLWNhcmRib2FyZC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdXRpbGl0aWVzL2VuYWJsaW5nLW1peGluLmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy91dGlsaXRpZXMvcHJpbWl0aXZlcy9kaXNhYmxlLWdyb3VwLmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy91dGlsaXRpZXMvcHJpbWl0aXZlcy9lbmFibGUtZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3V0aWxpdGllcy9wcmltaXRpdmVzL2hpZGUtZW50aXR5LmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy91dGlsaXRpZXMvcHJpbWl0aXZlcy9zaG93LWVudGl0eS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdXRpbGl0aWVzL3ByaW1pdGl2ZXMvc2hvdy1sb2FkaW5nLXNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdXRpbGl0aWVzL3RpbWUtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy92aWRlby9hc3NldHMvc3R5bGVzL3ZpZGVvLmxlc3MiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3ZpZGVvL2NvbXBvbmVudHMvZGVza3RvcC12aWRlb3NwaGVyZS1jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdmlkZW8vY29tcG9uZW50cy9lbmQtdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3ZpZGVvL2NvbXBvbmVudHMvZmxhdC12aWRlby1jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdmlkZW8vY29tcG9uZW50cy9tdXRlLXZpZGVvLmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy92aWRlby9jb21wb25lbnRzL3BhdXNlLWF1ZGlvLmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy92aWRlby9jb21wb25lbnRzL3BsYXktYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3ZpZGVvL2NvbXBvbmVudHMvcGxheS12aWRlby5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdmlkZW8vY29tcG9uZW50cy9zdGFydC12aWRlby5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdmlkZW8vY29tcG9uZW50cy9zdG9wLXZpZGVvLmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy92aWRlby9jb21wb25lbnRzL3ZpZGVvLWNhbi1wbGF5LmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy92aWRlby9jb21wb25lbnRzL3ZpZGVvLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3ZpZGVvL3ByaW1pdGl2ZXMvZGVza3RvcC12aWRlb3NwaGVyZS1jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdmlkZW8vcHJpbWl0aXZlcy9lbmQtdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3ZpZGVvL3ByaW1pdGl2ZXMvZmxhdC12aWRlby1jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdmlkZW8vcHJpbWl0aXZlcy9tdXRlLXZpZGVvLmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy92aWRlby9wcmltaXRpdmVzL29uLXZpZGVvLWNsb3NlZC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdmlkZW8vcHJpbWl0aXZlcy9vbi12aWRlby1lbmRlZC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdmlkZW8vcHJpbWl0aXZlcy9wYXVzZS1hdWRpby5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdmlkZW8vcHJpbWl0aXZlcy9wbGF5LWF1ZGlvLmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy92aWRlby9wcmltaXRpdmVzL3BsYXktdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3ZpZGVvL3ByaW1pdGl2ZXMvc3RhcnQtdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3ZpZGVvL3ByaW1pdGl2ZXMvc3RvcC12aWRlby5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvdmlkZW8vcHJpbWl0aXZlcy92aWRlby1jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy92aWRlby9zeXN0ZW1zL3ZpZGVvLWNhbi1wbGF5LmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy92aWRlby9zeXN0ZW1zL3ZpZGVvLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3ZpZGVvL3N5c3RlbXMvdmlkZW8tY29udHJvbHMtbWFya3VwLmpzIiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy93ZWJmb250cy9hc3NldHMvc3R5bGVzL2ljb25zLmxlc3MiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3dlYmZvbnRzL2Fzc2V0cy9zdHlsZXMvd2ViZm9udHMuaWNvbnMubGVzcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvd2ViZm9udHMvYXNzZXRzL3dlYmZvbnRzL2x1Y2lkd2ViLmVvdCIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvd2ViZm9udHMvYXNzZXRzL3dlYmZvbnRzL2x1Y2lkd2ViLnN2ZyIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvd2ViZm9udHMvYXNzZXRzL3dlYmZvbnRzL2x1Y2lkd2ViLnR0ZiIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvd2ViZm9udHMvYXNzZXRzL3dlYmZvbnRzL2x1Y2lkd2ViLndvZmYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3dlYmZvbnRzL2Fzc2V0cy93ZWJmb250cy9sdWNpZHdlYi53b2ZmMiIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvd2ViZm9udHMvYXNzZXRzL3dlYmZvbnRzL2x1Y2lkd2ViX3Rlc3QuZW90Iiwid2VicGFjazovLy8vVXNlcnMvamVuc2Rld2l0dGUxL0Rlc2t0b3AvbHVjaWR3ZWIvZXh0ZW5zaW9ucy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy93ZWJmb250cy9hc3NldHMvd2ViZm9udHMvbHVjaWR3ZWJfdGVzdC5zdmciLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9qZW5zZGV3aXR0ZTEvRGVza3RvcC9sdWNpZHdlYi9leHRlbnNpb25zL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3dlYmZvbnRzL2Fzc2V0cy93ZWJmb250cy9sdWNpZHdlYl90ZXN0LnR0ZiIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvd2ViZm9udHMvYXNzZXRzL3dlYmZvbnRzL2x1Y2lkd2ViX3Rlc3Qud29mZiIsIndlYnBhY2s6Ly8vL1VzZXJzL2plbnNkZXdpdHRlMS9EZXNrdG9wL2x1Y2lkd2ViL2V4dGVuc2lvbnMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvd2ViZm9udHMvYXNzZXRzL3dlYmZvbnRzL2x1Y2lkd2ViX3Rlc3Qud29mZjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FmcmFtZS1ldmVudC1zZXQtY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hZnJhbWUtdGVtcGxhdGUtY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczUtZXh0L2FycmF5L2Zyb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvYXJyYXkvZnJvbS9pcy1pbXBsZW1lbnRlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9hcnJheS9mcm9tL3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvZnVuY3Rpb24vaXMtYXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczUtZXh0L2Z1bmN0aW9uL2lzLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczUtZXh0L2Z1bmN0aW9uL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvbWF0aC9zaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczUtZXh0L21hdGgvc2lnbi9pcy1pbXBsZW1lbnRlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9tYXRoL3NpZ24vc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9udW1iZXIvdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9udW1iZXIvdG8tcG9zLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2Fzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvYXNzaWduL2lzLWltcGxlbWVudGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvaXMtY2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2lzLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9rZXlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9rZXlzL2lzLWltcGxlbWVudGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9rZXlzL3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L25vcm1hbGl6ZS1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9wcmltaXRpdmUtc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC92YWxpZC1jYWxsYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvdmFsaWQtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvc3RyaW5nLyMvY29udGFpbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvc3RyaW5nLyMvY29udGFpbnMvaXMtaW1wbGVtZW50ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvc3RyaW5nLyMvY29udGFpbnMvc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvaXMtc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczYtc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczYtc3ltYm9sL2lzLWltcGxlbWVudGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczYtc3ltYm9sL2lzLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXM2LXN5bWJvbC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXM2LXN5bWJvbC92YWxpZGF0ZS1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNi10ZW1wbGF0ZS1zdHJpbmdzL2NvbXBpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNi10ZW1wbGF0ZS1zdHJpbmdzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczYtdGVtcGxhdGUtc3RyaW5ncy9wYXNzdGhydS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXM2LXRlbXBsYXRlLXN0cmluZ3MvcmVzb2x2ZS10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNi10ZW1wbGF0ZS1zdHJpbmdzL3Jlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzbmlmZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXNuaWZmL2lzLXZhci1uYW1lLXZhbGlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lc25pZmYvbGliL3dzLWVvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXNuaWZmL2xpYi93cy1pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzbmlmZi9saWIvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3VpL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy91dGlsaXRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3ZpZGVvL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWNpZHdlYi1hZnJhbWUtZXh0ZW5zaW9ucy93ZWJmb250cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvMTBfRGFtZnp1Z19nci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvMTFfRW1iYWxzZV9Cb290X2dyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy8xMl9Gb3J0X0hhdl9hYmVuZHNfZ3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzLzEzX0hvdGVsX0Vuc19nci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvMTRfMV9NYWlfSGF2X2dyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy8xNV9EZW5rbWFsX1NDbGFyYV9DaGVfbmFoX2dyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy8xNl9MdXh1c19WZXJmYWxsX0hhdl9ncl8ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzLzE3X0thcGl0b2xfSGF2X2dyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy8xX1N0YXJ0X1N0cmFuZF9nci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvMl9PbGR0aW1lcl9pbm5lbl9nci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvM19jYXNhX2NlcnZlemFfZ3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzLzRfVFJfUGxhY2FfTWFqb3JfZ3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzLzVfVGFuemt1cnNfU3RyYW5kX2dyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy82X1Blc29fdmVya2F1ZmVuX2dyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy83X1BlbGlrYW5fU3RyYW5kX2dyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy84X0Zlc3R1bmdfTW9ycm9fZ3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzLzlfQW5nbGVyX0Nhcmxvc19IQVZfZ3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzL2V4cGVyaWVuY2UubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZW5zaW9ucy9jb21wb25lbnRzL2N1c3RvbS10aGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZW5zaW9ucy9wcmltaXRpdmVzL2N1c3RvbS1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4dGVuc2lvbnMvc3lzdGVtcy9jdXN0b20tc3lzdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBRlJBTUUiLCJyZWdpc3RlckNvbXBvbmVudCIsInNjaGVtYSIsInRpbWVvdXQiLCJ0eXBlIiwiZGVmYXVsdCIsImlkbGUiLCJpbml0IiwiYmluZE1ldGhvZHMiLCJpZGxlVGltZW91dCIsIm9uTW91c2VNb3ZlIiwidXRpbHMiLCJiaW5kIiwib25Nb3VzZU1vdmVUaW1lb3V0IiwicGxheSIsImFkZEV2ZW50TGlzdGVuZXJzIiwicGF1c2UiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsInJlbW92ZSIsInVwZGF0ZSIsIm9sZERhdGEiLCJuZXdEYXRhIiwiZGF0YSIsImVsIiwic2NlbmVFbCIsImVtaXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsInZpc2liaWxpdHkiLCJtb2RlIiwic2V0VlJPbmx5VmlzaWJpbGl0eSIsInNob3dMYXNlckNvbnRyb2xzIiwiY29udHJvbHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaGFuZCIsImFwcGVuZENoaWxkIiwicG9pbnRlciIsImN1cnNvciIsImNyZWF0ZURlc2t0b3BDdXJzb3IiLCJvbkVudGVyVlIiLCJvbkV4aXRWUiIsInVwZGF0ZUN1cnNvclZpc2liaWxpdHkiLCJjdXJzb3JWaXNpYmlsaXR5IiwiY3JlYXRlVlJDdXJzb3IiLCJyZW5kZXJlciIsImFudGlhbGlhcyIsImlzT2N1bHVzR28iLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGV2aWNlIiwiY2hlY2tIYXNQb3NpdGlvbmFsVHJhY2tpbmciLCJ2aXMiLCJ2ck9ubHkiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGFnTmFtZSIsImluY2x1ZGVzIiwic3R5bGUiLCJicm93c2VyT25seSIsInJlbW92ZUNoaWxkIiwiY29uc29sZSIsImxvZyIsImN1cnNvckVsIiwicXVlcnlTZWxlY3RvciIsImlkIiwiY2xpY2tBbmltYXRpb24iLCJmdXNpbmdBbmltYXRpb24iLCJmdXNpbmdPcGFjaXR5QW5pbWF0aW9uIiwibW91c2VPdXRBbmltYXRpb24iLCJwYWRkaW5nIiwiY2hpbGRFbGVtZW50Iiwid2lkdGgiLCJjb21wb25lbnRzIiwiaGVpZ2h0IiwibmFtZSIsIk1hdGgiLCJwb3ciLCJmb250TG9hZGVkIiwicmVuZGVyIiwiX2RlYzJoZXgiLCJfcmFuZG9tSWQiLCJpY29uRGF0YSIsInN5c3RlbSIsInJlbmRlckljb24iLCJuZXdJbWFnZSIsInNyYyIsInNpemUiLCJhc3NldHMiLCJkZWMiLCJ0b1N0cmluZyIsInN1YnN0ciIsImxlbmd0aCIsImFyciIsIlVpbnQ4QXJyYXkiLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJBcnJheSIsImZyb20iLCJqb2luIiwiRW5hYmxpbmdNaXhpbiIsInRhcmdldCIsInByb3BlcnR5IiwiZmllbGQiLCJ2YWx1ZSIsIm9uRW5hYmxlIiwiZnJlcXVlbmN5IiwieCIsInkiLCJ6IiwiaW50ZXJ2YWxQb2ludGVyIiwic2V0SW50ZXJ2YWwiLCJ0cmFja1RhcmdldFBvc2l0aW9uIiwiY2xlYXJJbnRlcnZhbCIsImV2dCIsInRhcmdldFBvc2l0aW9uIiwiZ2V0QXR0cmlidXRlIiwiY3VycmVudFBvc2l0aW9uIiwibmV3UG9zaXRpb24iLCJwb3NpdGlvblVwZGF0ZU5lZWRlZCIsInRyYWNrVGFyZ2V0Um90YXRpb24iLCJ0YXJnZXRSb3RhdGlvbiIsIm9iamVjdDNEIiwicm90YXRpb24iLCJjdXJyZW50Um90YXRpb24iLCJpY29uIiwibGFiZWwiLCJzaGFwZSIsImRlcHRoIiwiY29sb3IiLCJ0cmFuc3BhcmVudCIsIm9wYWNpdHkiLCJhY3RpdmVDb2xvciIsInNlbGVjdGVkQ29sb3IiLCJkZXRhaWxDb2xvciIsImRldGFpbEFjdGl2ZUNvbG9yIiwiZGV0YWlsU2VsZWN0ZWRDb2xvciIsImJ1dHRvbkdlb21ldHJ5IiwiY3JlYXRlR2VvbWV0cnkiLCJyb3RhdGlvbkdyb3VwIiwiY3JlYXRlUm90YXRpb25Hcm91cCIsImNyZWF0ZUljb24iLCJjcmVhdGVMYWJlbCIsImNyZWF0ZUFuaW1hdGlvbnMiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25GdXNpbmciLCJjcmVhdGVNYXRlcmlhbFByb3BlcnRpZXMiLCJnZW9tZXRyeSIsImNyZWF0ZUJ1dHRvbkdlb21ldHJ5IiwiY3JlYXRlQ3lsaW5kZXJHZW9tZXRyeSIsIm1hdGVyaWFsUHJvcGVydGllcyIsIm1vdXNlRW50ZXJPcGFjaXR5QW5pbWF0aW9uIiwibW91c2VMZWF2ZU9wYWNpdHlBbmltYXRpb24iLCJhcHBlbmQiLCJwYXJlbnQiLCJ2ck1vZGUiLCJrZWVwQWxpdmVQb2ludGVyIiwic2Nyb2xsYmFyUmF5Y2FzdEludGVydmFsIiwibWVudVJheWNhc3RJbnRlcnZhbCIsInByb2dyZXNzVXBkYXRpbmdJbnRlcnZhbCIsImFjdGl2YXRvciIsImFjdGl2YXRvckJ1dHRvbiIsImtlZXBBbGl2ZVRhcmdldCIsImJhY2tncm91bmQiLCJwbGF5QnV0dG9uIiwicGF1c2VCdXR0b24iLCJyZXBsYXlCdXR0b24iLCJ2b2x1bWVPbkJ1dHRvbiIsInZvbHVtZU9mZkJ1dHRvbiIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJ0aW1lUHJvZ3Jlc3MiLCJzY3JvbGxiYXIiLCJzY3JvbGxiYXJCYWNrZ3JvdW5kIiwic2Nyb2xsYmFyUHJvZ3Jlc3MiLCJzY3JvbGxiYXJDdXJzb3IiLCJzY3JvbGxiYXJDdXJzb3JMYWJlbCIsImNyZWF0ZUNvbnRyb2xzIiwidmlkZW9Db250cm9sbGVyU3lzdGVtIiwic3lzdGVtcyIsImNhbGN1bGF0ZVNjcm9sbGJhclJlbGF0aXZlSW50ZXJzZWN0aW9uUG9pbnQiLCJjYWxjdWxhdGVTY3JvbGxiYXJMZWZ0TW9zdFBvc2l0aW9uIiwidXBkYXRlVmlkZW9Qcm9ncmVzc0luZGljYXRvcnMiLCJ1cGRhdGVWaWRlb1Njcm9sbGJhclByb2dyZXNzIiwiaGlkZU1lbnUiLCJzaG93TWVudSIsImtlZXBNZW51VmlzaWJsZSIsInZlcmlmeU9yaWVudGVkVG93YXJkc01lbnUiLCJjcmVhdGVUaW1lUHJvZ3Jlc3MiLCJjcmVhdGVTY3JvbGxiYXIiLCJjcmVhdGVTY3JvbGxiYXJDdXJzb3IiLCJjcmVhdGVEZXNjcmlwdGlvbiIsImNyZWF0ZUJhY2tncm91bmQiLCJjcmVhdGVLZWVwQWxpdmVUYXJnZXQiLCJjcmVhdGVQYXVzZUJ1dHRvbiIsImNyZWF0ZVBsYXlCdXR0b24iLCJjcmVhdGVSZXBsYXlCdXR0b24iLCJjcmVhdGVUaXRsZSIsImNyZWF0ZVZvbHVtZU9mZkJ1dHRvbiIsImNyZWF0ZVZvbHVtZU9uQnV0dG9uIiwib25LZWVwQWxpdmVFeHBpcmVkIiwib25TY2VuZUNsaWNrIiwib25BY3RpdmF0ZUJ1dHRvbkNsaWNrZWQiLCJvblBsYXlCdXR0b25DbGlja2VkIiwib25SZXBsYXlCdXR0b25DbGlja2VkIiwib25QYXVzZUJ1dHRvbkNsaWNrZWQiLCJvblZvbHVtZU9uQnV0dG9uQ2xpY2tlZCIsIm9uVm9sdW1lT2ZmQnV0dG9uQ2xpY2tlZCIsIm9uU2Nyb2xsYmFyQ2xpY2tlZCIsIm9uUmF5Y2FzdEludGVyc2VjdGlvbiIsIm9uUmF5Y2FzdEludGVyc2VjdGlvbkNsZWFyZWQiLCJ1cGRhdGVTY3JvbGxiYXJDdXJzb3IiLCJvblZpZGVvQ29udHJvbGxlclBsYXlpbmdTdGFydGVkIiwib25WaWRlb1BsYXlpbmdTdGFydGVkIiwib25WaWRlb0NvbnRyb2xsZXJQbGF5aW5nRW5kZWQiLCJvblZpZGVvQ29udHJvbGxlclBsYXlpbmdQYXVzZWQiLCJvblZpZGVvQ29udHJvbGxlclBsYXlpbmciLCJvblZpZGVvQ29udHJvbGxlclZvbHVtZU9uIiwib25WaWRlb0NvbnRyb2xsZXJWb2x1bWVPZmYiLCJzY2VuZSIsInRpdGxlTGFiZWwiLCJwb3NpdGlvbiIsInJlbGF0aXZlUHJvZ3Jlc3MiLCJ4T2Zmc2V0IiwiZHVyYXRpb24iLCJjdXJyZW50VGltZSIsImR1cmF0aW9uTGFiZWwiLCJ0aW1lTGFiZWwiLCJjdXJyZW50VGltZUxhYmVsIiwidGltZURpc3BsYXlTZXBhcmF0b3IiLCJtZW51VmlzaWJpbGl0eSIsIm9sZFRpbWVvdXRQb2ludGVyIiwidW5jbGlja2FibGVFbGVtZW50cyIsImkiLCJyYXljYXN0ZXJDb21wb25lbnQiLCJyYXdJbnRlcnNlY3Rpb25zIiwiaW50ZXJzZWN0aW9ucyIsInJheWNhc3RlciIsImludGVyc2VjdE9iamVjdHMiLCJjbGlja2FibGVFbGVtZW50cyIsIm9yaWVudGVkVG93YXJkc01lbnUiLCJwcmV2aW91c0NvbnRyb2xzUm90YXRpb24iLCJnZXRXb3JsZFJvdGF0aW9uIiwiY3VycmVudENhbWVyYVJvdGF0aW9uIiwiY2FtZXJhIiwic2V0Um90YXRpb25Gcm9tRXVsZXIiLCJUSFJFRSIsIkV1bGVyIiwib3JkZXIiLCJvblZpZGVvQ29udHJvbHNQbGF5Q2xpY2tlZCIsIm9uVmlkZW9Db250cm9sc1JlcGxheUNsaWNrZWQiLCJvblZpZGVvQ29udHJvbHNQYXVzZUNsaWNrZWQiLCJvblZpZGVvQ29udHJvbHNWb2x1bWVPbkNsaWNrZWQiLCJvblZpZGVvQ29udHJvbHNWb2x1bWVPZmZDbGlja2VkIiwibG9jYWxQb3NpdGlvbiIsImxvY2FsU3RhcnRQb3NpdGlvbiIsIlZlY3RvcjMiLCJzY3JvbGxiYXJMZWZ0TW9zdFBvc2l0aW9uIiwibG9jYWxUb1dvcmxkIiwiaW50ZXJzZWN0aW9uIiwibGVmdE1vc3RQb3NpdGlvbiIsInBvc2l0aW9uT2ZJbnRlcnNlY3Rpb24iLCJkaXN0YW5jZSIsImRpc3RhbmNlVG8iLCJyZWxhdGl2ZURpc3RhbmNlIiwiZGV0YWlsIiwicG9pbnQiLCJyZWxhdGl2ZU5ld1Byb2dyZXNzIiwibmV3VGltZSIsImZsb29yIiwiY2hhbmdlVGltZSIsInB1c2giLCJpZFRvQ2xlYXIiLCJzaGlmdCIsInByb2dyZXNzaW9uIiwibmV3VGltZU1pbnV0ZXMiLCJuZXdUaW1lU2Vjb25kcyIsIm5ld1RpbWVNaW51dGVzU3RyIiwic2xpY2UiLCJuZXdUaW1lU2Vjb25kc1N0ciIsIm5ld1RpbWVMYWJlbCIsImNyZWF0ZUFjdGl2YXRvciIsInBhcmVudEVsIiwiYmFja2dyb3VuZEVsIiwia2VlcEFsaXZlQm94RWwiLCJ0aW1lUHJvZ3Jlc3NMYWJlbCIsImRlc2NyaXB0aW9uRWwiLCJzY3JvbGxiYXJFbCIsInNjcm9sbGJhckJveCIsInNjcm9sbGJhckxhYmVsIiwicmVnaXN0ZXJQcmltaXRpdmUiLCJkZWZhdWx0Q29tcG9uZW50cyIsIm1hcHBpbmdzIiwicHJpbWl0aXZlIiwic2hhZGVyIiwiYWxwaGFUZXN0IiwicmVnaXN0ZXJTeXN0ZW0iLCJjb2x1bW5zIiwibWFyZ2luIiwiX2NhbnZhcyIsInJlbmRlclVuaWNvZGVDaGFyYWN0ZXIiLCJjaGFyYWN0ZXJNYXAiLCJwcmVsb2FkZXIiLCJpbm5lclRleHQiLCJib2R5IiwiX2ljb25NZWFzdXJlbWVudHMiLCJjaGFyYWN0ZXIiLCJjb250ZXh0IiwiaWNvbkRpbWVuc2lvbiIsIl9pY29uRGltZW5zaW9uIiwiaWNvblRleHRNZWFzdXJlbWVudHMiLCJtZWFzdXJlVGV4dCIsIl9jcmVhdGVDYW52YXMiLCJjYW52YXMiLCJfZHJhd0ljb24iLCJjb25maWciLCJnZXRDb250ZXh0IiwiZm9udCIsInRleHRCYXNlbGluZSIsInRleHRBbGlnbiIsImZpbGxTdHlsZSIsInRleHRQb3NpdGlvbmluZyIsImZpbGxUZXh0IiwidG9EYXRhVVJMIiwiX2RlZmF1bHRDb25maWciLCJjdXN0b21Db25maWciLCJpY29uTmFtZXMiLCJpc01vYmlsZSIsImlzT2N1bHVzIiwiZ2V0VXJsUGFyYW1ldGVyIiwid2FybiIsIm1hdGNoaW5nUmVnZXgiLCJtYXRjaCIsImdyb3VwIiwidW5kZWZpbmVkIiwiY2hpbGRDb3VudCIsImNoaWxkcmVuIiwiY3VycmVudENoaWxkIiwibXNnIiwib2xkQ2xhc3NuYW1lIiwicmVwbGFjZSIsIm1vZGFsIiwic3RhcnRFeHBlcmllbmNlIiwiZW50ZXJWckJ1dHRvbiIsImNyZWF0ZU1vZGFsIiwibGlua3MiLCJkaXNwbGF5IiwibGluayIsImltYWdlQ29udGFpbmVyIiwiaW1hZ2UiLCJ0ZXh0IiwidmlkZW9TeXN0ZW0iLCJkb2N1bWVudEludGVyYWN0aW9uUmVjZWl2ZWQiLCJlcnJvciIsIm1haW5FeHBlcmllbmNlU3RhdGUiLCJjb3VudGRvd24iLCJ0cmFuc2l0aW9uaW5nIiwiY291bnRkb3duUG9pbnRlciIsImluaXRpYWxpemVDb3VudGRvd25IVE1MIiwiaW5pdGlhbGl6ZU1vZGFsSFRNTCIsInN0YXJ0VHJhbnNpdGlvbmluZ1RvQ2FyZGJvYXJkIiwib25PcmllbnRhdGlvbkNoYW5nZSIsImFkdmFuY2VDb3VudGRvd24iLCJjb3VudGRvd25QYXJhZ3JhcGgiLCJ3YWl0aW5nUG9pbnQiLCJlbnRlclZSIiwic2NyZWVuT3JpZW50YXRpb24iLCJzY3JlZW4iLCJtc09yaWVudGF0aW9uIiwib3JpZW50YXRpb24iLCJtb3pPcmllbnRhdGlvbiIsIm9yaWdpbmFsQ29tcG9uZW50Iiwib3JpZ2luYWxJbml0Iiwib3JpZ2luYWxCaW5kTWV0aG9kcyIsImV4dGVuZERlZXAiLCJlbmFibGVkIiwib25NaXhpbkVuYWJsZSIsIm9uTWl4aW5EaXNhYmxlIiwib25EaXNhYmxlIiwiYWRkTWl4aW5FdmVudExpc3RlbmVycyIsInJlbW92ZU1peGluRXZlbnRMaXN0ZW5lcnMiLCJ0aW1lSW5TZWNvbmRzIiwic2hvd1NlY29uZHMiLCJzaG93TWludXRlcyIsInNob3dIb3VycyIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJob3Vyc0xhYmVsIiwibWludXRlc0xhYmVsIiwic2Vjb25kc0xhYmVsIiwibGFiZWxQYXJ0cyIsInZpZGVvIiwiY2xvc2VCdXR0b24iLCJvbkNsb3NlQnV0dG9uQ2xpY2tlZCIsIm9uVmlkZW9FbmRlZCIsIl9jcmVhdGVDbG9zZUJ1dHRvbiIsImNsb3NlQnV0dG9uSWNvbiIsImNvbnRyb2xsZXIiLCJidXR0b25XaWR0aCIsImJ1dHRvbkRlcHRoIiwiZXhpdFRhcmdldCIsInRpbWVEdXJhdGlvbiIsInZpZGVvVGltaW5nRGlzcGxheSIsIl9fZm9ybWF0VGltZSIsImNyZWF0ZUNsb3NlQnV0dG9uIiwiY3JlYXRlVmlkZW9UaW1pbmdEaXNwbGF5IiwiY3JlYXRlVmlkZW9Qcm9ncmVzc0Rpc3BsYXkiLCJjcmVhdGVWaWRlb0R1cmF0aW9uRGlzcGxheSIsImNyZWF0ZUJhY2tUb01lbnVCdXR0b24iLCJvblZpZGVvQ29udHJvbGxlclN0YWxsZWQiLCJvblZpZGVvQ29udHJvbGxlclRpbWVVcGRhdGUiLCJvblZpZGVvQ29udHJvbGxlckNoYW5nZSIsImNsb3NlQnV0dG9uQ2xpY2tlZCIsIm11dGVkIiwidGltZSIsIm9uU2Nyb2xsYmFySG92ZXJTdGFydCIsIm9uU2Nyb2xsYmFySG92ZXJFbmQiLCJjcmVhdGVWaWRlb0Rpc3BsYXlTZXBhcmF0b3IiLCJzcGVlZCIsImludGVydmFsU3RlcHMiLCJ2b2x1bWVTdGVwcyIsImN1cnJlbnRWb2x1bWUiLCJ2b2x1bWUiLCJpbnRlcnZhbHN0ZXBzIiwicmVkdWNlVm9sdW1lIiwibmV3Vm9sdW1lIiwibWF4IiwiYXVkaW8iLCJwbGF5VmlkZW8iLCJzZWxmIiwiZm9yRWFjaCIsImV2ZW50Iiwib25lVGltZVBsYXkiLCJkZWZhdWx0VmFsdWUiLCJvblBsYXkiLCJ2aWRlb0lkIiwiZWRpdENhblBsYXkiLCJ2aWRlb0VsIiwiY2FuUGxheSIsImluZm8iLCJyZXF1aXJlIiwibXV0ZVZpZGVvIiwic3RvcFZpZGVvIiwidmlkZW9zIiwibmV3VmFsdWUiLCJ2aWRlb1NwaGVyZSIsInZpZGVvU3BoZXJlQ29uZmlndXJlZCIsImF1dG9wbGF5IiwiY29udHJvbHNFbmFibGVkIiwicHJvZ3Jlc3NBbmltYXRvciIsImNvbnRyb2xzTW92ZW1lbnRJbnRlcnZhbCIsInZyIiwibG9nbyIsInBhdXNlVmlkZW8iLCJ2b2x1bWVPbiIsInZvbHVtZU9mZiIsIm9uVmlkZW9SZWFkeVRvUGxheSIsIm9uVmlkZW9TdGFsbGVkIiwib25TdGFydEJ1dHRvbkNsaWNrZWQiLCJlbmFibGVIVE1MVmlkZW9Db250cm9scyIsImVuYWJsZVZSVmlkZW9Db250cm9scyIsIm9uVmlkZW9QbGF5Q2xpY2tlZCIsIm9uVmlkZW9QYXVzZUNsaWNrZWQiLCJvblZpZGVvUmVwbGF5Q2xpY2tlZCIsIm9uVmlkZW9Wb2x1bWVPZmZDbGlja2VkIiwib25WaWRlb1ZvbHVtZU9uQ2xpY2tlZCIsIm9uRW50ZXJWUkNsaWNrZWQiLCJvbkVudGVyRnVsbHNjcmVlbkNsaWNrZWQiLCJvbkZ1bGxzY3JlZW5DaGFuZ2UiLCJvblZpZGVvVGltZVVwZGF0ZSIsInN0YXJ0UHJvZ3Jlc3NBbmltYXRpb24iLCJzdG9wUHJvZ3Jlc3NBbmltYXRpb24iLCJtb3ZlUHJvZ3Jlc3NCYXIiLCJzaG93Q29udHJvbHMiLCJzaG93RW5kU2NyZWVuIiwiaGlkZUNvbnRyb2xzIiwibW92ZUNvbnRyb2xzVG8iLCJpc01vdmluZyIsInN0b3BNb3ZpbmciLCJ1cGRhdGVDb250cm9sc1Bvc2l0aW9uIiwib25Nb3VzZUlkbGUiLCJvbk1vdXNlTW92aW5nIiwib25Db3B5TGlua1RvQ2xpcGJvYXJkIiwiY29uZmlybUxpbmtDb3BpZWRUb0NsaXBib2FyZCIsIm9uQm9keVRvdWNoRW5kIiwiZW5hYmxlQ29udHJvbHMiLCJkaXNhYmxlQ29udHJvbHMiLCJvblNoYXJlQnV0dG9uQ2xpY2tlZCIsIm9uU2hhcmVNb2RhbENsb3NlZCIsIm9uVmlkZW9QYXVzZWQiLCJvblZpZGVvUGxheWluZyIsIm9uVmlkZW9Wb2x1bWVDaGFuZ2UiLCJlbmRlZCIsInZpZGVvQ29udHJvbGxlciIsInZpZGVvRWxlbWVudCIsInJlbW92ZVZpZGVvRXZlbnRMaXN0ZW5lcnMiLCJhZGRWaWRlb0V2ZW50TGlzdGVuZXJzIiwicmVhZHlTdGF0ZSIsImxvYWQiLCJsb2dvUGFyZW50IiwiZnNjcmVlbiIsIm9sZFZpZGVvIiwiaGFzQXR0cmlidXRlIiwic2hvd1N0YXJ0T3ZlcmxheSIsInBhdXNlZCIsInByb2dyZXNzIiwib2Zmc2V0V2lkdGgiLCJtZXNzYWdlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbmZpcm1hdGlvbkFsZXJ0IiwidG9wIiwiYm90dG9tIiwibGVmdCIsInpJbmRleCIsInByZXZlbnREZWZhdWx0IiwiY29uZmlybVN1Y2Nlc3MiLCJjb21tdW5pY2F0ZUVycm9yIiwiQ2xpcGJvYXJkIiwid3JpdGVUZXh0IiwibG9jYXRpb24iLCJ0aGVuIiwic3RhcnRCdXR0b24iLCJ2aWRlb1N0YXJ0T3ZlcmxheSIsInZpZGVvU3RhcnRPdmVybGF5QmFja2dyb3VuZCIsInBsYXlJY29uIiwiVmlkZW9Db250cm9sc01hcmt1cCIsInNoYXJlTW9kYWwiLCJwYXVzZVJlcXVpcmVkIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwicmVsb2FkRGl2IiwiZm9ybWF0VGltZSIsImRlc2lyZWRQb3NpdGlvbiIsImFuaW1hdGlvbkxlbmd0aCIsInVwZGF0ZXIiLCJjdXJyZW50VmFsdWUiLCJwYXJzZUZsb2F0IiwiZGVsdGFTaWduIiwiZGVsdGEiLCJtaW4iLCJjcmVhdGVWaWRlb0NvbnRyb2xzV2l0aEhUTUwiLCJodG1sIiwiaW5uZXJIVE1MIiwic3ViamVjdCIsImdyZWV0aW5nIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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O0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFJO0FBQ2Q7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFZO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFJO0FBQ2Q7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsVUFBVSxTQUFTO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxVQUFVLFNBQVM7QUFDbkIsVUFBVSxTQUFT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SUFBcUMsRTs7Ozs7Ozs7Ozs7QUNkN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFD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QUFQOztBQUNBQSxtQkFBTyxDQUFDLDRGQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsNEZBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQywwRkFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLGtHQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsZ0ZBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQywwRkFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLGdHQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsb0ZBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxvRkFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDhHQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsc0dBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx3RkFBRCxDQUFQLEMsQ0FHQTs7O0FBRUFBLG1CQUFPLENBQUMseUZBQUQsQ0FBUCxDLENBRUE7OztBQUVBQSxtQkFBTyxDQUFDLGlHQUFELENBQVAsQyxDQUVBOzs7QUFFQUEsbUJBQU8sQ0FBQyxxRkFBRCxDQUFQLEMsQ0FFQTtBQUNBO0FBQ0EsSyIsImZpbGUiOiJqcy9leHBlcmllbmNlLmpzPzdmY2UxZjYwM2NiM2RhZTExYWMxIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2lkbGUnLCB7XG5cbiAgc2NoZW1hOiB7XG4gICAgdGltZW91dDogeyB0eXBlOiAnbnVtYmVyJywgZGVmYXVsdDogM30sXG4gICAgaWRsZTogeyB0eXBlOiAnYm9vbGVhbicsIGRlZmF1bHQ6IGZhbHNlIH1cbiAgfSxcblxuICBpbml0OiBmdW5jdGlvbigpe1xuICAgIHRoaXMuYmluZE1ldGhvZHMoKTtcbiAgICB0aGlzLmlkbGVUaW1lb3V0ID0gbnVsbDtcbiAgfSxcblxuICBiaW5kTWV0aG9kczogZnVuY3Rpb24oKXtcbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gQUZSQU1FLnV0aWxzLmJpbmQodGhpcy5vbk1vdXNlTW92ZSwgdGhpcyk7XG4gICAgdGhpcy5vbk1vdXNlTW92ZVRpbWVvdXQgPSBBRlJBTUUudXRpbHMuYmluZCh0aGlzLm9uTW91c2VNb3ZlVGltZW91dCwgdGhpcyk7XG4gIH0sXG5cbiAgcGxheTogZnVuY3Rpb24oKXtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH0sXG5cbiAgcGF1c2U6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICB9LFxuXG4gIHJlbW92ZTogZnVuY3Rpb24oKXtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbihvbGREYXRhKXtcbiAgICBjb25zdCBuZXdEYXRhID0gdGhpcy5kYXRhO1xuICAgIGlmIChvbGREYXRhLmlkbGUgIT09IG5ld0RhdGEuaWRsZSl7XG4gICAgICBpZiAobmV3RGF0YS5pZGxlKSB7XG4gICAgICAgIHRoaXMuZWwuc2NlbmVFbC5lbWl0KCdsdWNpZHdlYi5tb3VzZS5pZGxlJywge30sIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuc2NlbmVFbC5lbWl0KCdsdWNpZHdlYi5tb3VzZS5tb3ZpbmcnLCB7fSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBhZGRFdmVudExpc3RlbmVyczogZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgfSxcblxuICByZW1vdmVFdmVudExpc3RlbmVyczogZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgfSxcblxuICBvbk1vdXNlTW92ZTogZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICBpZiAodGhpcy5pZGxlVGltZW91dCAhPT0gbnVsbCl7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5pZGxlVGltZW91dCk7XG4gICAgICB0aGlzLmlkbGVUaW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRhLmlkbGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdpZGxlJywgeyBpZGxlOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmlkbGVUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLm9uTW91c2VNb3ZlVGltZW91dCwgZGF0YS50aW1lb3V0ICogMTAwMCk7XG4gIH0sXG5cbiAgb25Nb3VzZU1vdmVUaW1lb3V0OiBmdW5jdGlvbigpe1xuICAgIHRoaXMuaWRsZVRpbWVvdXQgPSBudWxsO1xuICAgIGlmICh0aGlzLmRhdGEuaWRsZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdpZGxlJywgeyBpZGxlOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG59KTsiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLmNsaXBib2FyZD1lKCk6dC5jbGlwYm9hcmQ9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUocil7aWYobltyXSlyZXR1cm4gbltyXS5leHBvcnRzO3ZhciBvPW5bcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLGUpLG8ubD0hMCxvLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIGUubT10LGUuYz1uLGUuZD1mdW5jdGlvbih0LG4scil7ZS5vKHQsbil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se2NvbmZpZ3VyYWJsZTohMSxlbnVtZXJhYmxlOiEwLGdldDpyfSl9LGUubj1mdW5jdGlvbih0KXt2YXIgbj10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gZS5kKG4sXCJhXCIsbiksbn0sZS5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxlLnA9XCJcIixlKGUucz0wKX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsZSxuKXt5KFwibGlzdGVuZXIgY2FsbGVkXCIpLHQuc3VjY2Vzcz0hMCxlLmZvckVhY2goZnVuY3Rpb24oZSxyKXtuLmNsaXBib2FyZERhdGEuc2V0RGF0YShyLGUpLHI9PT14JiZuLmNsaXBib2FyZERhdGEuZ2V0RGF0YShyKSE9ZSYmKHkoXCJzZXR0aW5nIHRleHQvcGxhaW4gZmFpbGVkXCIpLHQuc3VjY2Vzcz0hMSl9KSxuLnByZXZlbnREZWZhdWx0KCl9ZnVuY3Rpb24gbyh0KXt2YXIgZT1uZXcgVCxuPXIuYmluZCh0aGlzLGUsdCk7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNvcHlcIixuKTt0cnl7ZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpfWZpbmFsbHl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvcHlcIixuKX1yZXR1cm4gZS5zdWNjZXNzfWZ1bmN0aW9uIGkodCxlKXt1KHQpO3ZhciBuPW8oZSk7cmV0dXJuIHMoKSxufWZ1bmN0aW9uIGEodCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCItd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0ICFpbXBvcnRhbnRcIiksZS50ZXh0Q29udGVudD1cInRlbXBvcmFyeSBlbGVtZW50XCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKTt2YXIgbj1pKGUsdCk7cmV0dXJuIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZSksbn1mdW5jdGlvbiBjKHQpe3koXCJjb3B5VGV4dFVzaW5nRE9NXCIpO3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dCAhaW1wb3J0YW50XCIpO3ZhciBuPWU7ZS5hdHRhY2hTaGFkb3cmJih5KFwiVXNpbmcgc2hhZG93IERPTS5cIiksbj1lLmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pKTt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtyLmlubmVyVGV4dD10LG4uYXBwZW5kQ2hpbGQociksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKSx1KHIpO3ZhciBvPWRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtyZXR1cm4gcygpLGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZSksb31mdW5jdGlvbiB1KHQpe3ZhciBlPWRvY3VtZW50LmdldFNlbGVjdGlvbigpLG49ZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtuLnNlbGVjdE5vZGVDb250ZW50cyh0KSxlLnJlbW92ZUFsbFJhbmdlcygpLGUuYWRkUmFuZ2Uobil9ZnVuY3Rpb24gcygpe2RvY3VtZW50LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpfWZ1bmN0aW9uIGwodCl7dmFyIGU9bmV3IGguRFQ7cmV0dXJuIGUuc2V0RGF0YSh4LHQpLGV9ZnVuY3Rpb24gZCgpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBDbGlwYm9hcmRFdmVudCYmdm9pZCAwIT09d2luZG93LmNsaXBib2FyZERhdGEmJnZvaWQgMCE9PXdpbmRvdy5jbGlwYm9hcmREYXRhLnNldERhdGF9ZnVuY3Rpb24gcCh0KXt2YXIgZT10LmdldERhdGEoeCk7aWYodm9pZCAwIT09ZSlyZXR1cm4gd2luZG93LmNsaXBib2FyZERhdGEuc2V0RGF0YShcIlRleHRcIixlKTt0aHJvd1wiTm8gYHRleHQvcGxhaW5gIHZhbHVlIHdhcyBzcGVjaWZpZWQuXCJ9ZnVuY3Rpb24gZigpe3JldHVybiB2KHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciB0O3JldHVybiBiKHRoaXMsZnVuY3Rpb24oZSl7aWYoXCJcIj09PSh0PXdpbmRvdy5jbGlwYm9hcmREYXRhLmdldERhdGEoXCJUZXh0XCIpKSl0aHJvd1wiRW1wdHkgY2xpcGJvYXJkIG9yIGNvdWxkIG5vdCByZWFkIHBsYWluIHRleHQgZnJvbSBjbGlwYm9hcmRcIjtyZXR1cm5bMix0XX0pfSl9dmFyIHY9dGhpcyYmdGhpcy5fX2F3YWl0ZXJ8fGZ1bmN0aW9uKHQsZSxuLHIpe3JldHVybiBuZXcobnx8KG49UHJvbWlzZSkpKGZ1bmN0aW9uKG8saSl7ZnVuY3Rpb24gYSh0KXt0cnl7dShyLm5leHQodCkpfWNhdGNoKHQpe2kodCl9fWZ1bmN0aW9uIGModCl7dHJ5e3Uoci50aHJvdyh0KSl9Y2F0Y2godCl7aSh0KX19ZnVuY3Rpb24gdSh0KXt0LmRvbmU/byh0LnZhbHVlKTpuZXcgbihmdW5jdGlvbihlKXtlKHQudmFsdWUpfSkudGhlbihhLGMpfXUoKHI9ci5hcHBseSh0LGV8fFtdKSkubmV4dCgpKX0pfSxiPXRoaXMmJnRoaXMuX19nZW5lcmF0b3J8fGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHIoW3QsZV0pfX1mdW5jdGlvbiByKG4pe2lmKG8pdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7Zm9yKDt1Oyl0cnl7aWYobz0xLGkmJihhPWlbMiZuWzBdP1wicmV0dXJuXCI6blswXT9cInRocm93XCI6XCJuZXh0XCJdKSYmIShhPWEuY2FsbChpLG5bMV0pKS5kb25lKXJldHVybiBhO3N3aXRjaChpPTAsYSYmKG49WzAsYS52YWx1ZV0pLG5bMF0pe2Nhc2UgMDpjYXNlIDE6YT1uO2JyZWFrO2Nhc2UgNDpyZXR1cm4gdS5sYWJlbCsrLHt2YWx1ZTpuWzFdLGRvbmU6ITF9O2Nhc2UgNTp1LmxhYmVsKyssaT1uWzFdLG49WzBdO2NvbnRpbnVlO2Nhc2UgNzpuPXUub3BzLnBvcCgpLHUudHJ5cy5wb3AoKTtjb250aW51ZTtkZWZhdWx0OmlmKGE9dS50cnlzLCEoYT1hLmxlbmd0aD4wJiZhW2EubGVuZ3RoLTFdKSYmKDY9PT1uWzBdfHwyPT09blswXSkpe3U9MDtjb250aW51ZX1pZigzPT09blswXSYmKCFhfHxuWzFdPmFbMF0mJm5bMV08YVszXSkpe3UubGFiZWw9blsxXTticmVha31pZig2PT09blswXSYmdS5sYWJlbDxhWzFdKXt1LmxhYmVsPWFbMV0sYT1uO2JyZWFrfWlmKGEmJnUubGFiZWw8YVsyXSl7dS5sYWJlbD1hWzJdLHUub3BzLnB1c2gobik7YnJlYWt9YVsyXSYmdS5vcHMucG9wKCksdS50cnlzLnBvcCgpO2NvbnRpbnVlfW49ZS5jYWxsKHQsdSl9Y2F0Y2godCl7bj1bNix0XSxpPTB9ZmluYWxseXtvPWE9MH1pZig1Jm5bMF0pdGhyb3cgblsxXTtyZXR1cm57dmFsdWU6blswXT9uWzFdOnZvaWQgMCxkb25lOiEwfX12YXIgbyxpLGEsYyx1PXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJmFbMF0pdGhyb3cgYVsxXTtyZXR1cm4gYVsxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBjPXtuZXh0Om4oMCksdGhyb3c6bigxKSxyZXR1cm46bigyKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoY1tTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxjfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaD1uKDEpLHk9ZnVuY3Rpb24odCl7fSxtPSEwLGc9ZnVuY3Rpb24oKXsoY29uc29sZS53YXJufHxjb25zb2xlLmxvZykuYXBwbHkoY29uc29sZSxhcmd1bWVudHMpfSx3PWcuYmluZChcIltjbGlwYm9hcmQtcG9seWZpbGxdXCIpLHg9XCJ0ZXh0L3BsYWluXCIsRD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9cmV0dXJuIHQuc2V0RGVidWdMb2c9ZnVuY3Rpb24odCl7eT10fSx0LnN1cHByZXNzV2FybmluZ3M9ZnVuY3Rpb24oKXttPSExLGguc3VwcHJlc3NEVFdhcm5pbmdzKCl9LHQud3JpdGU9ZnVuY3Rpb24odCl7cmV0dXJuIHYodGhpcyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGU7cmV0dXJuIGIodGhpcyxmdW5jdGlvbihuKXtpZihtJiYhdC5nZXREYXRhKHgpJiZ3KFwiY2xpcGJvYXJkLndyaXRlKCkgd2FzIGNhbGxlZCB3aXRob3V0IGEgYHRleHQvcGxhaW5gIGRhdGEgdHlwZS4gT24gc29tZSBwbGF0Zm9ybXMsIHRoaXMgbWF5IHJlc3VsdCBpbiBhbiBlbXB0eSBjbGlwYm9hcmQuIENhbGwgY2xpcGJvYXJkLnN1cHByZXNzV2FybmluZ3MoKSB0byBzdXBwcmVzcyB0aGlzIHdhcm5pbmcuXCIpLGQoKSl7aWYocCh0KSlyZXR1cm5bMl07dGhyb3dcIkNvcHlpbmcgZmFpbGVkLCBwb3NzaWJseSBiZWNhdXNlIHRoZSB1c2VyIHJlamVjdGVkIGl0LlwifWlmKG8odCkpcmV0dXJuIHkoXCJyZWd1bGFyIGV4ZWNDb3B5IHdvcmtlZFwiKSxbMl07aWYobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRWRnZVwiKT4tMSlyZXR1cm4geSgnVUEgXCJFZGdlXCIgPT4gYXNzdW1pbmcgc3VjY2VzcycpLFsyXTtpZihpKGRvY3VtZW50LmJvZHksdCkpcmV0dXJuIHkoXCJjb3B5VXNpbmdUZW1wU2VsZWN0aW9uIHdvcmtlZFwiKSxbMl07aWYoYSh0KSlyZXR1cm4geShcImNvcHlVc2luZ1RlbXBFbGVtIHdvcmtlZFwiKSxbMl07aWYodm9pZCAwIT09KGU9dC5nZXREYXRhKHgpKSYmYyhlKSlyZXR1cm4geShcImNvcHlUZXh0VXNpbmdET00gd29ya2VkXCIpLFsyXTt0aHJvd1wiQ29weSBjb21tYW5kIGZhaWxlZC5cIn0pfSl9LHQud3JpdGVUZXh0PWZ1bmN0aW9uKHQpe3JldHVybiB2KHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3JldHVybiBiKHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIG5hdmlnYXRvci5jbGlwYm9hcmQmJm5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0Pyh5KFwiVXNpbmcgYG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KClgLlwiKSxbMixuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0KV0pOlsyLHRoaXMud3JpdGUobCh0KSldfSl9KX0sdC5yZWFkPWZ1bmN0aW9uKCl7cmV0dXJuIHYodGhpcyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIHQ7cmV0dXJuIGIodGhpcyxmdW5jdGlvbihlKXtzd2l0Y2goZS5sYWJlbCl7Y2FzZSAwOnJldHVybiB0PWwsWzQsdGhpcy5yZWFkVGV4dCgpXTtjYXNlIDE6cmV0dXJuWzIsdC5hcHBseSh2b2lkIDAsW2Uuc2VudCgpXSldfX0pfSl9LHQucmVhZFRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXtyZXR1cm4gYih0aGlzLGZ1bmN0aW9uKHQpe2lmKG5hdmlnYXRvci5jbGlwYm9hcmQmJm5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQpcmV0dXJuIHkoXCJVc2luZyBgbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpYC5cIiksWzIsbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpXTtpZihkKCkpcmV0dXJuIHkoXCJSZWFkaW5nIHRleHQgdXNpbmcgSUUgc3RyYXRlZ3kuXCIpLFsyLGYoKV07dGhyb3dcIlJlYWQgaXMgbm90IHN1cHBvcnRlZCBpbiB5b3VyIGJyb3dzZXIuXCJ9KX0pfSx0LkRUPWguRFQsdH0oKTtlLmRlZmF1bHQ9RDt2YXIgVD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt0aGlzLnN1Y2Nlc3M9ITF9cmV0dXJuIHR9KCk7dC5leHBvcnRzPUR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKCl7Yz0hMX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1bXCJ0ZXh0L3BsYWluXCIsXCJ0ZXh0L2h0bWxcIl0saT1mdW5jdGlvbigpeyhjb25zb2xlLndhcm58fGNvbnNvbGUubG9nKS5jYWxsKGFyZ3VtZW50cyl9LGE9aS5iaW5kKGNvbnNvbGUsXCJbY2xpcGJvYXJkLXBvbHlmaWxsXVwiKSxjPSEwO2Uuc3VwcHJlc3NEVFdhcm5pbmdzPXI7dmFyIHU9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dGhpcy5tPXt9fXJldHVybiB0LnByb3RvdHlwZS5zZXREYXRhPWZ1bmN0aW9uKHQsZSl7YyYmLTE9PT1vLmluZGV4T2YodCkmJmEoXCJVbmtub3duIGRhdGEgdHlwZTogXCIrdCxcIkNhbGwgY2xpcGJvYXJkLnN1cHByZXNzV2FybmluZ3MoKSB0byBzdXBwcmVzcyB0aGlzIHdhcm5pbmcuXCIpLHRoaXMubVt0XT1lfSx0LnByb3RvdHlwZS5nZXREYXRhPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm1bdF19LHQucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24odCl7Zm9yKHZhciBlIGluIHRoaXMubSl0KHRoaXMubVtlXSxlKX0sdH0oKTtlLkRUPXV9XSl9KTsiLCIvKiFcbiAqIEBvdmVydmlldyBlczYtcHJvbWlzZSAtIGEgdGlueSBpbXBsZW1lbnRhdGlvbiBvZiBQcm9taXNlcy9BKy5cbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE0IFllaHVkYSBLYXR6LCBUb20gRGFsZSwgU3RlZmFuIFBlbm5lciBhbmQgY29udHJpYnV0b3JzIChDb252ZXJzaW9uIHRvIEVTNiBBUEkgYnkgSmFrZSBBcmNoaWJhbGQpXG4gKiBAbGljZW5zZSAgIExpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG4gKiAgICAgICAgICAgIFNlZSBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc3RlZmFucGVubmVyL2VzNi1wcm9taXNlL21hc3Rlci9MSUNFTlNFXG4gKiBAdmVyc2lvbiAgIHY0LjIuNSs3ZjJiNTI2ZFxuICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5FUzZQcm9taXNlID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvYmplY3RPckZ1bmN0aW9uKHgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgeDtcbiAgcmV0dXJuIHggIT09IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufVxuXG5cblxudmFyIF9pc0FycmF5ID0gdm9pZCAwO1xuaWYgKEFycmF5LmlzQXJyYXkpIHtcbiAgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xufSBlbHNlIHtcbiAgX2lzQXJyYXkgPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG59XG5cbnZhciBpc0FycmF5ID0gX2lzQXJyYXk7XG5cbnZhciBsZW4gPSAwO1xudmFyIHZlcnR4TmV4dCA9IHZvaWQgMDtcbnZhciBjdXN0b21TY2hlZHVsZXJGbiA9IHZvaWQgMDtcblxudmFyIGFzYXAgPSBmdW5jdGlvbiBhc2FwKGNhbGxiYWNrLCBhcmcpIHtcbiAgcXVldWVbbGVuXSA9IGNhbGxiYWNrO1xuICBxdWV1ZVtsZW4gKyAxXSA9IGFyZztcbiAgbGVuICs9IDI7XG4gIGlmIChsZW4gPT09IDIpIHtcbiAgICAvLyBJZiBsZW4gaXMgMiwgdGhhdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gc2NoZWR1bGUgYW4gYXN5bmMgZmx1c2guXG4gICAgLy8gSWYgYWRkaXRpb25hbCBjYWxsYmFja3MgYXJlIHF1ZXVlZCBiZWZvcmUgdGhlIHF1ZXVlIGlzIGZsdXNoZWQsIHRoZXlcbiAgICAvLyB3aWxsIGJlIHByb2Nlc3NlZCBieSB0aGlzIGZsdXNoIHRoYXQgd2UgYXJlIHNjaGVkdWxpbmcuXG4gICAgaWYgKGN1c3RvbVNjaGVkdWxlckZuKSB7XG4gICAgICBjdXN0b21TY2hlZHVsZXJGbihmbHVzaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlRmx1c2goKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHNldFNjaGVkdWxlcihzY2hlZHVsZUZuKSB7XG4gIGN1c3RvbVNjaGVkdWxlckZuID0gc2NoZWR1bGVGbjtcbn1cblxuZnVuY3Rpb24gc2V0QXNhcChhc2FwRm4pIHtcbiAgYXNhcCA9IGFzYXBGbjtcbn1cblxudmFyIGJyb3dzZXJXaW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbnZhciBicm93c2VyR2xvYmFsID0gYnJvd3NlcldpbmRvdyB8fCB7fTtcbnZhciBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGJyb3dzZXJHbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBicm93c2VyR2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgaXNOb2RlID0gdHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5cbi8vIHRlc3QgZm9yIHdlYiB3b3JrZXIgYnV0IG5vdCBpbiBJRTEwXG52YXIgaXNXb3JrZXIgPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBub2RlXG5mdW5jdGlvbiB1c2VOZXh0VGljaygpIHtcbiAgLy8gbm9kZSB2ZXJzaW9uIDAuMTAueCBkaXNwbGF5cyBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgd2hlbiBuZXh0VGljayBpcyB1c2VkIHJlY3Vyc2l2ZWx5XG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vY3Vqb2pzL3doZW4vaXNzdWVzLzQxMCBmb3IgZGV0YWlsc1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgfTtcbn1cblxuLy8gdmVydHhcbmZ1bmN0aW9uIHVzZVZlcnR4VGltZXIoKSB7XG4gIGlmICh0eXBlb2YgdmVydHhOZXh0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2ZXJ0eE5leHQoZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gdXNlU2V0VGltZW91dCgpO1xufVxuXG5mdW5jdGlvbiB1c2VNdXRhdGlvbk9ic2VydmVyKCkge1xuICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gIHZhciBvYnNlcnZlciA9IG5ldyBCcm93c2VyTXV0YXRpb25PYnNlcnZlcihmbHVzaCk7XG4gIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIG5vZGUuZGF0YSA9IGl0ZXJhdGlvbnMgPSArK2l0ZXJhdGlvbnMgJSAyO1xuICB9O1xufVxuXG4vLyB3ZWIgd29ya2VyXG5mdW5jdGlvbiB1c2VNZXNzYWdlQ2hhbm5lbCgpIHtcbiAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmbHVzaDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlU2V0VGltZW91dCgpIHtcbiAgLy8gU3RvcmUgc2V0VGltZW91dCByZWZlcmVuY2Ugc28gZXM2LXByb21pc2Ugd2lsbCBiZSB1bmFmZmVjdGVkIGJ5XG4gIC8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxuICB2YXIgZ2xvYmFsU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdsb2JhbFNldFRpbWVvdXQoZmx1c2gsIDEpO1xuICB9O1xufVxuXG52YXIgcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuICAgIHZhciBhcmcgPSBxdWV1ZVtpICsgMV07XG5cbiAgICBjYWxsYmFjayhhcmcpO1xuXG4gICAgcXVldWVbaV0gPSB1bmRlZmluZWQ7XG4gICAgcXVldWVbaSArIDFdID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgbGVuID0gMDtcbn1cblxuZnVuY3Rpb24gYXR0ZW1wdFZlcnR4KCkge1xuICB0cnkge1xuICAgIHZhciB2ZXJ0eCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCkucmVxdWlyZSgndmVydHgnKTtcbiAgICB2ZXJ0eE5leHQgPSB2ZXJ0eC5ydW5Pbkxvb3AgfHwgdmVydHgucnVuT25Db250ZXh0O1xuICAgIHJldHVybiB1c2VWZXJ0eFRpbWVyKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdXNlU2V0VGltZW91dCgpO1xuICB9XG59XG5cbnZhciBzY2hlZHVsZUZsdXNoID0gdm9pZCAwO1xuLy8gRGVjaWRlIHdoYXQgYXN5bmMgbWV0aG9kIHRvIHVzZSB0byB0cmlnZ2VyaW5nIHByb2Nlc3Npbmcgb2YgcXVldWVkIGNhbGxiYWNrczpcbmlmIChpc05vZGUpIHtcbiAgc2NoZWR1bGVGbHVzaCA9IHVzZU5leHRUaWNrKCk7XG59IGVsc2UgaWYgKEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKSB7XG4gIHNjaGVkdWxlRmx1c2ggPSB1c2VNdXRhdGlvbk9ic2VydmVyKCk7XG59IGVsc2UgaWYgKGlzV29ya2VyKSB7XG4gIHNjaGVkdWxlRmx1c2ggPSB1c2VNZXNzYWdlQ2hhbm5lbCgpO1xufSBlbHNlIGlmIChicm93c2VyV2luZG93ID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgc2NoZWR1bGVGbHVzaCA9IGF0dGVtcHRWZXJ0eCgpO1xufSBlbHNlIHtcbiAgc2NoZWR1bGVGbHVzaCA9IHVzZVNldFRpbWVvdXQoKTtcbn1cblxuZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICB2YXIgcGFyZW50ID0gdGhpcztcblxuICB2YXIgY2hpbGQgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihub29wKTtcblxuICBpZiAoY2hpbGRbUFJPTUlTRV9JRF0gPT09IHVuZGVmaW5lZCkge1xuICAgIG1ha2VQcm9taXNlKGNoaWxkKTtcbiAgfVxuXG4gIHZhciBfc3RhdGUgPSBwYXJlbnQuX3N0YXRlO1xuXG5cbiAgaWYgKF9zdGF0ZSkge1xuICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1tfc3RhdGUgLSAxXTtcbiAgICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpbnZva2VDYWxsYmFjayhfc3RhdGUsIGNoaWxkLCBjYWxsYmFjaywgcGFyZW50Ll9yZXN1bHQpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbik7XG4gIH1cblxuICByZXR1cm4gY2hpbGQ7XG59XG5cbi8qKlxuICBgUHJvbWlzZS5yZXNvbHZlYCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmVjb21lIHJlc29sdmVkIHdpdGggdGhlXG4gIHBhc3NlZCBgdmFsdWVgLiBJdCBpcyBzaG9ydGhhbmQgZm9yIHRoZSBmb2xsb3dpbmc6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgcmVzb2x2ZSgxKTtcbiAgfSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAvLyB2YWx1ZSA9PT0gMVxuICB9KTtcbiAgYGBgXG5cbiAgSW5zdGVhZCBvZiB3cml0aW5nIHRoZSBhYm92ZSwgeW91ciBjb2RlIG5vdyBzaW1wbHkgYmVjb21lcyB0aGUgZm9sbG93aW5nOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoMSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAvLyB2YWx1ZSA9PT0gMVxuICB9KTtcbiAgYGBgXG5cbiAgQG1ldGhvZCByZXNvbHZlXG4gIEBzdGF0aWNcbiAgQHBhcmFtIHtBbnl9IHZhbHVlIHZhbHVlIHRoYXQgdGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZXNvbHZlZCB3aXRoXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHRoYXQgd2lsbCBiZWNvbWUgZnVsZmlsbGVkIHdpdGggdGhlIGdpdmVuXG4gIGB2YWx1ZWBcbiovXG5mdW5jdGlvbiByZXNvbHZlJDEob2JqZWN0KSB7XG4gIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QuY29uc3RydWN0b3IgPT09IENvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKG5vb3ApO1xuICByZXNvbHZlKHByb21pc2UsIG9iamVjdCk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG52YXIgUFJPTUlTRV9JRCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBQRU5ESU5HID0gdm9pZCAwO1xudmFyIEZVTEZJTExFRCA9IDE7XG52YXIgUkVKRUNURUQgPSAyO1xuXG52YXIgVFJZX0NBVENIX0VSUk9SID0geyBlcnJvcjogbnVsbCB9O1xuXG5mdW5jdGlvbiBzZWxmRnVsZmlsbG1lbnQoKSB7XG4gIHJldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IGNhbm5vdCByZXNvbHZlIGEgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKTtcbn1cblxuZnVuY3Rpb24gY2Fubm90UmV0dXJuT3duKCkge1xuICByZXR1cm4gbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpO1xufVxuXG5mdW5jdGlvbiBnZXRUaGVuKHByb21pc2UpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIFRSWV9DQVRDSF9FUlJPUi5lcnJvciA9IGVycm9yO1xuICAgIHJldHVybiBUUllfQ0FUQ0hfRVJST1I7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5VGhlbih0aGVuJCQxLCB2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKSB7XG4gIHRyeSB7XG4gICAgdGhlbiQkMS5jYWxsKHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlLCB0aGVuJCQxKSB7XG4gIGFzYXAoZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICB2YXIgc2VhbGVkID0gZmFsc2U7XG4gICAgdmFyIGVycm9yID0gdHJ5VGhlbih0aGVuJCQxLCB0aGVuYWJsZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoc2VhbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICBpZiAodGhlbmFibGUgIT09IHZhbHVlKSB7XG4gICAgICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgaWYgKHNlYWxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWFsZWQgPSB0cnVlO1xuXG4gICAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICB9LCAnU2V0dGxlOiAnICsgKHByb21pc2UuX2xhYmVsIHx8ICcgdW5rbm93biBwcm9taXNlJykpO1xuXG4gICAgaWYgKCFzZWFsZWQgJiYgZXJyb3IpIHtcbiAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICByZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgIH1cbiAgfSwgcHJvbWlzZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlKSB7XG4gIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IEZVTEZJTExFRCkge1xuICAgIGZ1bGZpbGwocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gIH0gZWxzZSBpZiAodGhlbmFibGUuX3N0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgIHJlamVjdChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgfSBlbHNlIHtcbiAgICBzdWJzY3JpYmUodGhlbmFibGUsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcmV0dXJuIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbiQkMSkge1xuICBpZiAobWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3RvciA9PT0gcHJvbWlzZS5jb25zdHJ1Y3RvciAmJiB0aGVuJCQxID09PSB0aGVuICYmIG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IucmVzb2x2ZSA9PT0gcmVzb2x2ZSQxKSB7XG4gICAgaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoZW4kJDEgPT09IFRSWV9DQVRDSF9FUlJPUikge1xuICAgICAgcmVqZWN0KHByb21pc2UsIFRSWV9DQVRDSF9FUlJPUi5lcnJvcik7XG4gICAgICBUUllfQ0FUQ0hfRVJST1IuZXJyb3IgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhlbiQkMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGVuJCQxKSkge1xuICAgICAgaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4kJDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG4gIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgIHJlamVjdChwcm9taXNlLCBzZWxmRnVsZmlsbG1lbnQoKSk7XG4gIH0gZWxzZSBpZiAob2JqZWN0T3JGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICBoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlLCBnZXRUaGVuKHZhbHVlKSk7XG4gIH0gZWxzZSB7XG4gICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHVibGlzaFJlamVjdGlvbihwcm9taXNlKSB7XG4gIGlmIChwcm9taXNlLl9vbmVycm9yKSB7XG4gICAgcHJvbWlzZS5fb25lcnJvcihwcm9taXNlLl9yZXN1bHQpO1xuICB9XG5cbiAgcHVibGlzaChwcm9taXNlKTtcbn1cblxuZnVuY3Rpb24gZnVsZmlsbChwcm9taXNlLCB2YWx1ZSkge1xuICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwcm9taXNlLl9yZXN1bHQgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fc3RhdGUgPSBGVUxGSUxMRUQ7XG5cbiAgaWYgKHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCAhPT0gMCkge1xuICAgIGFzYXAocHVibGlzaCwgcHJvbWlzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcHJvbWlzZS5fc3RhdGUgPSBSRUpFQ1RFRDtcbiAgcHJvbWlzZS5fcmVzdWx0ID0gcmVhc29uO1xuXG4gIGFzYXAocHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICB2YXIgX3N1YnNjcmliZXJzID0gcGFyZW50Ll9zdWJzY3JpYmVycztcbiAgdmFyIGxlbmd0aCA9IF9zdWJzY3JpYmVycy5sZW5ndGg7XG5cblxuICBwYXJlbnQuX29uZXJyb3IgPSBudWxsO1xuXG4gIF9zdWJzY3JpYmVyc1tsZW5ndGhdID0gY2hpbGQ7XG4gIF9zdWJzY3JpYmVyc1tsZW5ndGggKyBGVUxGSUxMRURdID0gb25GdWxmaWxsbWVudDtcbiAgX3N1YnNjcmliZXJzW2xlbmd0aCArIFJFSkVDVEVEXSA9IG9uUmVqZWN0aW9uO1xuXG4gIGlmIChsZW5ndGggPT09IDAgJiYgcGFyZW50Ll9zdGF0ZSkge1xuICAgIGFzYXAocHVibGlzaCwgcGFyZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwdWJsaXNoKHByb21pc2UpIHtcbiAgdmFyIHN1YnNjcmliZXJzID0gcHJvbWlzZS5fc3Vic2NyaWJlcnM7XG4gIHZhciBzZXR0bGVkID0gcHJvbWlzZS5fc3RhdGU7XG5cbiAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjaGlsZCA9IHZvaWQgMCxcbiAgICAgIGNhbGxiYWNrID0gdm9pZCAwLFxuICAgICAgZGV0YWlsID0gcHJvbWlzZS5fcmVzdWx0O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBjaGlsZCA9IHN1YnNjcmliZXJzW2ldO1xuICAgIGNhbGxiYWNrID0gc3Vic2NyaWJlcnNbaSArIHNldHRsZWRdO1xuXG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICBpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgfVxuICB9XG5cbiAgcHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcbn1cblxuZnVuY3Rpb24gdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCkge1xuICB0cnkge1xuICAgIHJldHVybiBjYWxsYmFjayhkZXRhaWwpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgVFJZX0NBVENIX0VSUk9SLmVycm9yID0gZTtcbiAgICByZXR1cm4gVFJZX0NBVENIX0VSUk9SO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZUNhbGxiYWNrKHNldHRsZWQsIHByb21pc2UsIGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgdmFyIGhhc0NhbGxiYWNrID0gaXNGdW5jdGlvbihjYWxsYmFjayksXG4gICAgICB2YWx1ZSA9IHZvaWQgMCxcbiAgICAgIGVycm9yID0gdm9pZCAwLFxuICAgICAgc3VjY2VlZGVkID0gdm9pZCAwLFxuICAgICAgZmFpbGVkID0gdm9pZCAwO1xuXG4gIGlmIChoYXNDYWxsYmFjaykge1xuICAgIHZhbHVlID0gdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCk7XG5cbiAgICBpZiAodmFsdWUgPT09IFRSWV9DQVRDSF9FUlJPUikge1xuICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgIGVycm9yID0gdmFsdWUuZXJyb3I7XG4gICAgICB2YWx1ZS5lcnJvciA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgY2Fubm90UmV0dXJuT3duKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IGRldGFpbDtcbiAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgLy8gbm9vcFxuICB9IGVsc2UgaWYgKGhhc0NhbGxiYWNrICYmIHN1Y2NlZWRlZCkge1xuICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKGZhaWxlZCkge1xuICAgIHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gRlVMRklMTEVEKSB7XG4gICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gUkVKRUNURUQpIHtcbiAgICByZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVQcm9taXNlKHByb21pc2UsIHJlc29sdmVyKSB7XG4gIHRyeSB7XG4gICAgcmVzb2x2ZXIoZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UodmFsdWUpIHtcbiAgICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgIH0sIGZ1bmN0aW9uIHJlamVjdFByb21pc2UocmVhc29uKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlamVjdChwcm9taXNlLCBlKTtcbiAgfVxufVxuXG52YXIgaWQgPSAwO1xuZnVuY3Rpb24gbmV4dElkKCkge1xuICByZXR1cm4gaWQrKztcbn1cblxuZnVuY3Rpb24gbWFrZVByb21pc2UocHJvbWlzZSkge1xuICBwcm9taXNlW1BST01JU0VfSURdID0gaWQrKztcbiAgcHJvbWlzZS5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gIHByb21pc2UuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgcHJvbWlzZS5fc3Vic2NyaWJlcnMgPSBbXTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGlvbkVycm9yKCkge1xuICByZXR1cm4gbmV3IEVycm9yKCdBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXknKTtcbn1cblxudmFyIEVudW1lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEVudW1lcmF0b3IoQ29uc3RydWN0b3IsIGlucHV0KSB7XG4gICAgdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3Rvcihub29wKTtcblxuICAgIGlmICghdGhpcy5wcm9taXNlW1BST01JU0VfSURdKSB7XG4gICAgICBtYWtlUHJvbWlzZSh0aGlzLnByb21pc2UpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KGlucHV0KSkge1xuICAgICAgdGhpcy5sZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gICAgICB0aGlzLl9yZW1haW5pbmcgPSBpbnB1dC5sZW5ndGg7XG5cbiAgICAgIHRoaXMuX3Jlc3VsdCA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCk7XG5cbiAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5sZW5ndGggfHwgMDtcbiAgICAgICAgdGhpcy5fZW51bWVyYXRlKGlucHV0KTtcbiAgICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgIGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlamVjdCh0aGlzLnByb21pc2UsIHZhbGlkYXRpb25FcnJvcigpKTtcbiAgICB9XG4gIH1cblxuICBFbnVtZXJhdG9yLnByb3RvdHlwZS5fZW51bWVyYXRlID0gZnVuY3Rpb24gX2VudW1lcmF0ZShpbnB1dCkge1xuICAgIGZvciAodmFyIGkgPSAwOyB0aGlzLl9zdGF0ZSA9PT0gUEVORElORyAmJiBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX2VhY2hFbnRyeShpbnB1dFtpXSwgaSk7XG4gICAgfVxuICB9O1xuXG4gIEVudW1lcmF0b3IucHJvdG90eXBlLl9lYWNoRW50cnkgPSBmdW5jdGlvbiBfZWFjaEVudHJ5KGVudHJ5LCBpKSB7XG4gICAgdmFyIGMgPSB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yO1xuICAgIHZhciByZXNvbHZlJCQxID0gYy5yZXNvbHZlO1xuXG5cbiAgICBpZiAocmVzb2x2ZSQkMSA9PT0gcmVzb2x2ZSQxKSB7XG4gICAgICB2YXIgX3RoZW4gPSBnZXRUaGVuKGVudHJ5KTtcblxuICAgICAgaWYgKF90aGVuID09PSB0aGVuICYmIGVudHJ5Ll9zdGF0ZSAhPT0gUEVORElORykge1xuICAgICAgICB0aGlzLl9zZXR0bGVkQXQoZW50cnkuX3N0YXRlLCBpLCBlbnRyeS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIF90aGVuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuICAgICAgICB0aGlzLl9yZXN1bHRbaV0gPSBlbnRyeTtcbiAgICAgIH0gZWxzZSBpZiAoYyA9PT0gUHJvbWlzZSQxKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IGMobm9vcCk7XG4gICAgICAgIGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgZW50cnksIF90aGVuKTtcbiAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KHByb21pc2UsIGkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KG5ldyBjKGZ1bmN0aW9uIChyZXNvbHZlJCQxKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUkJDEoZW50cnkpO1xuICAgICAgICB9KSwgaSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChyZXNvbHZlJCQxKGVudHJ5KSwgaSk7XG4gICAgfVxuICB9O1xuXG4gIEVudW1lcmF0b3IucHJvdG90eXBlLl9zZXR0bGVkQXQgPSBmdW5jdGlvbiBfc2V0dGxlZEF0KHN0YXRlLCBpLCB2YWx1ZSkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuXG5cbiAgICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IFBFTkRJTkcpIHtcbiAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuXG4gICAgICBpZiAoc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgICAgIHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZXN1bHRbaV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgfVxuICB9O1xuXG4gIEVudW1lcmF0b3IucHJvdG90eXBlLl93aWxsU2V0dGxlQXQgPSBmdW5jdGlvbiBfd2lsbFNldHRsZUF0KHByb21pc2UsIGkpIHtcbiAgICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG5cbiAgICBzdWJzY3JpYmUocHJvbWlzZSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBlbnVtZXJhdG9yLl9zZXR0bGVkQXQoRlVMRklMTEVELCBpLCB2YWx1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcmV0dXJuIGVudW1lcmF0b3IuX3NldHRsZWRBdChSRUpFQ1RFRCwgaSwgcmVhc29uKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gRW51bWVyYXRvcjtcbn0oKTtcblxuLyoqXG4gIGBQcm9taXNlLmFsbGAgYWNjZXB0cyBhbiBhcnJheSBvZiBwcm9taXNlcywgYW5kIHJldHVybnMgYSBuZXcgcHJvbWlzZSB3aGljaFxuICBpcyBmdWxmaWxsZWQgd2l0aCBhbiBhcnJheSBvZiBmdWxmaWxsbWVudCB2YWx1ZXMgZm9yIHRoZSBwYXNzZWQgcHJvbWlzZXMsIG9yXG4gIHJlamVjdGVkIHdpdGggdGhlIHJlYXNvbiBvZiB0aGUgZmlyc3QgcGFzc2VkIHByb21pc2UgdG8gYmUgcmVqZWN0ZWQuIEl0IGNhc3RzIGFsbFxuICBlbGVtZW50cyBvZiB0aGUgcGFzc2VkIGl0ZXJhYmxlIHRvIHByb21pc2VzIGFzIGl0IHJ1bnMgdGhpcyBhbGdvcml0aG0uXG5cbiAgRXhhbXBsZTpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlMSA9IHJlc29sdmUoMSk7XG4gIGxldCBwcm9taXNlMiA9IHJlc29sdmUoMik7XG4gIGxldCBwcm9taXNlMyA9IHJlc29sdmUoMyk7XG4gIGxldCBwcm9taXNlcyA9IFsgcHJvbWlzZTEsIHByb21pc2UyLCBwcm9taXNlMyBdO1xuXG4gIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKGFycmF5KXtcbiAgICAvLyBUaGUgYXJyYXkgaGVyZSB3b3VsZCBiZSBbIDEsIDIsIDMgXTtcbiAgfSk7XG4gIGBgYFxuXG4gIElmIGFueSBvZiB0aGUgYHByb21pc2VzYCBnaXZlbiB0byBgYWxsYCBhcmUgcmVqZWN0ZWQsIHRoZSBmaXJzdCBwcm9taXNlXG4gIHRoYXQgaXMgcmVqZWN0ZWQgd2lsbCBiZSBnaXZlbiBhcyBhbiBhcmd1bWVudCB0byB0aGUgcmV0dXJuZWQgcHJvbWlzZXMnc1xuICByZWplY3Rpb24gaGFuZGxlci4gRm9yIGV4YW1wbGU6XG5cbiAgRXhhbXBsZTpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlMSA9IHJlc29sdmUoMSk7XG4gIGxldCBwcm9taXNlMiA9IHJlamVjdChuZXcgRXJyb3IoXCIyXCIpKTtcbiAgbGV0IHByb21pc2UzID0gcmVqZWN0KG5ldyBFcnJvcihcIjNcIikpO1xuICBsZXQgcHJvbWlzZXMgPSBbIHByb21pc2UxLCBwcm9taXNlMiwgcHJvbWlzZTMgXTtcblxuICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbihhcnJheSl7XG4gICAgLy8gQ29kZSBoZXJlIG5ldmVyIHJ1bnMgYmVjYXVzZSB0aGVyZSBhcmUgcmVqZWN0ZWQgcHJvbWlzZXMhXG4gIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgLy8gZXJyb3IubWVzc2FnZSA9PT0gXCIyXCJcbiAgfSk7XG4gIGBgYFxuXG4gIEBtZXRob2QgYWxsXG4gIEBzdGF0aWNcbiAgQHBhcmFtIHtBcnJheX0gZW50cmllcyBhcnJheSBvZiBwcm9taXNlc1xuICBAcGFyYW0ge1N0cmluZ30gbGFiZWwgb3B0aW9uYWwgc3RyaW5nIGZvciBsYWJlbGluZyB0aGUgcHJvbWlzZS5cbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gYWxsIGBwcm9taXNlc2AgaGF2ZSBiZWVuXG4gIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQgaWYgYW55IG9mIHRoZW0gYmVjb21lIHJlamVjdGVkLlxuICBAc3RhdGljXG4qL1xuZnVuY3Rpb24gYWxsKGVudHJpZXMpIHtcbiAgcmV0dXJuIG5ldyBFbnVtZXJhdG9yKHRoaXMsIGVudHJpZXMpLnByb21pc2U7XG59XG5cbi8qKlxuICBgUHJvbWlzZS5yYWNlYCByZXR1cm5zIGEgbmV3IHByb21pc2Ugd2hpY2ggaXMgc2V0dGxlZCBpbiB0aGUgc2FtZSB3YXkgYXMgdGhlXG4gIGZpcnN0IHBhc3NlZCBwcm9taXNlIHRvIHNldHRsZS5cblxuICBFeGFtcGxlOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UxID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZXNvbHZlKCdwcm9taXNlIDEnKTtcbiAgICB9LCAyMDApO1xuICB9KTtcblxuICBsZXQgcHJvbWlzZTIgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHJlc29sdmUoJ3Byb21pc2UgMicpO1xuICAgIH0sIDEwMCk7XG4gIH0pO1xuXG4gIFByb21pc2UucmFjZShbcHJvbWlzZTEsIHByb21pc2UyXSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgIC8vIHJlc3VsdCA9PT0gJ3Byb21pc2UgMicgYmVjYXVzZSBpdCB3YXMgcmVzb2x2ZWQgYmVmb3JlIHByb21pc2UxXG4gICAgLy8gd2FzIHJlc29sdmVkLlxuICB9KTtcbiAgYGBgXG5cbiAgYFByb21pc2UucmFjZWAgaXMgZGV0ZXJtaW5pc3RpYyBpbiB0aGF0IG9ubHkgdGhlIHN0YXRlIG9mIHRoZSBmaXJzdFxuICBzZXR0bGVkIHByb21pc2UgbWF0dGVycy4gRm9yIGV4YW1wbGUsIGV2ZW4gaWYgb3RoZXIgcHJvbWlzZXMgZ2l2ZW4gdG8gdGhlXG4gIGBwcm9taXNlc2AgYXJyYXkgYXJndW1lbnQgYXJlIHJlc29sdmVkLCBidXQgdGhlIGZpcnN0IHNldHRsZWQgcHJvbWlzZSBoYXNcbiAgYmVjb21lIHJlamVjdGVkIGJlZm9yZSB0aGUgb3RoZXIgcHJvbWlzZXMgYmVjYW1lIGZ1bGZpbGxlZCwgdGhlIHJldHVybmVkXG4gIHByb21pc2Ugd2lsbCBiZWNvbWUgcmVqZWN0ZWQ6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZTEgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHJlc29sdmUoJ3Byb21pc2UgMScpO1xuICAgIH0sIDIwMCk7XG4gIH0pO1xuXG4gIGxldCBwcm9taXNlMiA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcigncHJvbWlzZSAyJykpO1xuICAgIH0sIDEwMCk7XG4gIH0pO1xuXG4gIFByb21pc2UucmFjZShbcHJvbWlzZTEsIHByb21pc2UyXSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgIC8vIENvZGUgaGVyZSBuZXZlciBydW5zXG4gIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgLy8gcmVhc29uLm1lc3NhZ2UgPT09ICdwcm9taXNlIDInIGJlY2F1c2UgcHJvbWlzZSAyIGJlY2FtZSByZWplY3RlZCBiZWZvcmVcbiAgICAvLyBwcm9taXNlIDEgYmVjYW1lIGZ1bGZpbGxlZFxuICB9KTtcbiAgYGBgXG5cbiAgQW4gZXhhbXBsZSByZWFsLXdvcmxkIHVzZSBjYXNlIGlzIGltcGxlbWVudGluZyB0aW1lb3V0czpcblxuICBgYGBqYXZhc2NyaXB0XG4gIFByb21pc2UucmFjZShbYWpheCgnZm9vLmpzb24nKSwgdGltZW91dCg1MDAwKV0pXG4gIGBgYFxuXG4gIEBtZXRob2QgcmFjZVxuICBAc3RhdGljXG4gIEBwYXJhbSB7QXJyYXl9IHByb21pc2VzIGFycmF5IG9mIHByb21pc2VzIHRvIG9ic2VydmVcbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2Ugd2hpY2ggc2V0dGxlcyBpbiB0aGUgc2FtZSB3YXkgYXMgdGhlIGZpcnN0IHBhc3NlZFxuICBwcm9taXNlIHRvIHNldHRsZS5cbiovXG5mdW5jdGlvbiByYWNlKGVudHJpZXMpIHtcbiAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICBpZiAoIWlzQXJyYXkoZW50cmllcykpIHtcbiAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIChfLCByZWplY3QpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLicpKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgQ29uc3RydWN0b3IucmVzb2x2ZShlbnRyaWVzW2ldKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gIGBQcm9taXNlLnJlamVjdGAgcmV0dXJucyBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCB0aGUgcGFzc2VkIGByZWFzb25gLlxuICBJdCBpcyBzaG9ydGhhbmQgZm9yIHRoZSBmb2xsb3dpbmc6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgcmVqZWN0KG5ldyBFcnJvcignV0hPT1BTJykpO1xuICB9KTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgIC8vIENvZGUgaGVyZSBkb2Vzbid0IHJ1biBiZWNhdXNlIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIVxuICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIHJlYXNvbi5tZXNzYWdlID09PSAnV0hPT1BTJ1xuICB9KTtcbiAgYGBgXG5cbiAgSW5zdGVhZCBvZiB3cml0aW5nIHRoZSBhYm92ZSwgeW91ciBjb2RlIG5vdyBzaW1wbHkgYmVjb21lcyB0aGUgZm9sbG93aW5nOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1dIT09QUycpKTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgIC8vIENvZGUgaGVyZSBkb2Vzbid0IHJ1biBiZWNhdXNlIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIVxuICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIHJlYXNvbi5tZXNzYWdlID09PSAnV0hPT1BTJ1xuICB9KTtcbiAgYGBgXG5cbiAgQG1ldGhvZCByZWplY3RcbiAgQHN0YXRpY1xuICBAcGFyYW0ge0FueX0gcmVhc29uIHZhbHVlIHRoYXQgdGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZWplY3RlZCB3aXRoLlxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIHRoZSBnaXZlbiBgcmVhc29uYC5cbiovXG5mdW5jdGlvbiByZWplY3QkMShyZWFzb24pIHtcbiAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcbiAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3Iobm9vcCk7XG4gIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gbmVlZHNSZXNvbHZlcigpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhIHJlc29sdmVyIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xufVxuXG5mdW5jdGlvbiBuZWVkc05ldygpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTtcbn1cblxuLyoqXG4gIFByb21pc2Ugb2JqZWN0cyByZXByZXNlbnQgdGhlIGV2ZW50dWFsIHJlc3VsdCBvZiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLiBUaGVcbiAgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCwgd2hpY2hcbiAgcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGUgcmVhc29uXG4gIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gIFRlcm1pbm9sb2d5XG4gIC0tLS0tLS0tLS0tXG5cbiAgLSBgcHJvbWlzZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHdpdGggYSBgdGhlbmAgbWV0aG9kIHdob3NlIGJlaGF2aW9yIGNvbmZvcm1zIHRvIHRoaXMgc3BlY2lmaWNhdGlvbi5cbiAgLSBgdGhlbmFibGVgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB0aGF0IGRlZmluZXMgYSBgdGhlbmAgbWV0aG9kLlxuICAtIGB2YWx1ZWAgaXMgYW55IGxlZ2FsIEphdmFTY3JpcHQgdmFsdWUgKGluY2x1ZGluZyB1bmRlZmluZWQsIGEgdGhlbmFibGUsIG9yIGEgcHJvbWlzZSkuXG4gIC0gYGV4Y2VwdGlvbmAgaXMgYSB2YWx1ZSB0aGF0IGlzIHRocm93biB1c2luZyB0aGUgdGhyb3cgc3RhdGVtZW50LlxuICAtIGByZWFzb25gIGlzIGEgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgd2h5IGEgcHJvbWlzZSB3YXMgcmVqZWN0ZWQuXG4gIC0gYHNldHRsZWRgIHRoZSBmaW5hbCByZXN0aW5nIHN0YXRlIG9mIGEgcHJvbWlzZSwgZnVsZmlsbGVkIG9yIHJlamVjdGVkLlxuXG4gIEEgcHJvbWlzZSBjYW4gYmUgaW4gb25lIG9mIHRocmVlIHN0YXRlczogcGVuZGluZywgZnVsZmlsbGVkLCBvciByZWplY3RlZC5cblxuICBQcm9taXNlcyB0aGF0IGFyZSBmdWxmaWxsZWQgaGF2ZSBhIGZ1bGZpbGxtZW50IHZhbHVlIGFuZCBhcmUgaW4gdGhlIGZ1bGZpbGxlZFxuICBzdGF0ZS4gIFByb21pc2VzIHRoYXQgYXJlIHJlamVjdGVkIGhhdmUgYSByZWplY3Rpb24gcmVhc29uIGFuZCBhcmUgaW4gdGhlXG4gIHJlamVjdGVkIHN0YXRlLiAgQSBmdWxmaWxsbWVudCB2YWx1ZSBpcyBuZXZlciBhIHRoZW5hYmxlLlxuXG4gIFByb21pc2VzIGNhbiBhbHNvIGJlIHNhaWQgdG8gKnJlc29sdmUqIGEgdmFsdWUuICBJZiB0aGlzIHZhbHVlIGlzIGFsc28gYVxuICBwcm9taXNlLCB0aGVuIHRoZSBvcmlnaW5hbCBwcm9taXNlJ3Mgc2V0dGxlZCBzdGF0ZSB3aWxsIG1hdGNoIHRoZSB2YWx1ZSdzXG4gIHNldHRsZWQgc3RhdGUuICBTbyBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IHJlamVjdHMgd2lsbFxuICBpdHNlbGYgcmVqZWN0LCBhbmQgYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aWxsXG4gIGl0c2VsZiBmdWxmaWxsLlxuXG5cbiAgQmFzaWMgVXNhZ2U6XG4gIC0tLS0tLS0tLS0tLVxuXG4gIGBgYGpzXG4gIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gb24gc3VjY2Vzc1xuICAgIHJlc29sdmUodmFsdWUpO1xuXG4gICAgLy8gb24gZmFpbHVyZVxuICAgIHJlamVjdChyZWFzb24pO1xuICB9KTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvLyBvbiBmdWxmaWxsbWVudFxuICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAvLyBvbiByZWplY3Rpb25cbiAgfSk7XG4gIGBgYFxuXG4gIEFkdmFuY2VkIFVzYWdlOlxuICAtLS0tLS0tLS0tLS0tLS1cblxuICBQcm9taXNlcyBzaGluZSB3aGVuIGFic3RyYWN0aW5nIGF3YXkgYXN5bmNocm9ub3VzIGludGVyYWN0aW9ucyBzdWNoIGFzXG4gIGBYTUxIdHRwUmVxdWVzdGBzLlxuXG4gIGBgYGpzXG4gIGZ1bmN0aW9uIGdldEpTT04odXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGhhbmRsZXI7XG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSB0aGlzLkRPTkUpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ2V0SlNPTjogYCcgKyB1cmwgKyAnYCBmYWlsZWQgd2l0aCBzdGF0dXM6IFsnICsgdGhpcy5zdGF0dXMgKyAnXScpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBnZXRKU09OKCcvcG9zdHMuanNvbicpLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgIC8vIG9uIHJlamVjdGlvblxuICB9KTtcbiAgYGBgXG5cbiAgVW5saWtlIGNhbGxiYWNrcywgcHJvbWlzZXMgYXJlIGdyZWF0IGNvbXBvc2FibGUgcHJpbWl0aXZlcy5cblxuICBgYGBqc1xuICBQcm9taXNlLmFsbChbXG4gICAgZ2V0SlNPTignL3Bvc3RzJyksXG4gICAgZ2V0SlNPTignL2NvbW1lbnRzJylcbiAgXSkudGhlbihmdW5jdGlvbih2YWx1ZXMpe1xuICAgIHZhbHVlc1swXSAvLyA9PiBwb3N0c0pTT05cbiAgICB2YWx1ZXNbMV0gLy8gPT4gY29tbWVudHNKU09OXG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9KTtcbiAgYGBgXG5cbiAgQGNsYXNzIFByb21pc2VcbiAgQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZXJcbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAY29uc3RydWN0b3JcbiovXG5cbnZhciBQcm9taXNlJDEgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFByb21pc2UocmVzb2x2ZXIpIHtcbiAgICB0aGlzW1BST01JU0VfSURdID0gbmV4dElkKCk7XG4gICAgdGhpcy5fcmVzdWx0ID0gdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcblxuICAgIGlmIChub29wICE9PSByZXNvbHZlcikge1xuICAgICAgdHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nICYmIG5lZWRzUmVzb2x2ZXIoKTtcbiAgICAgIHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlID8gaW5pdGlhbGl6ZVByb21pc2UodGhpcywgcmVzb2x2ZXIpIDogbmVlZHNOZXcoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgVGhlIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsXG4gIHdoaWNoIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlXG4gIHJlYXNvbiB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cbiAgIGBgYGpzXG4gIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbih1c2VyKXtcbiAgICAvLyB1c2VyIGlzIGF2YWlsYWJsZVxuICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIHVzZXIgaXMgdW5hdmFpbGFibGUsIGFuZCB5b3UgYXJlIGdpdmVuIHRoZSByZWFzb24gd2h5XG4gIH0pO1xuICBgYGBcbiAgIENoYWluaW5nXG4gIC0tLS0tLS0tXG4gICBUaGUgcmV0dXJuIHZhbHVlIG9mIGB0aGVuYCBpcyBpdHNlbGYgYSBwcm9taXNlLiAgVGhpcyBzZWNvbmQsICdkb3duc3RyZWFtJ1xuICBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvbWlzZSdzIGZ1bGZpbGxtZW50XG4gIG9yIHJlamVjdGlvbiBoYW5kbGVyLCBvciByZWplY3RlZCBpZiB0aGUgaGFuZGxlciB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuICAgYGBganNcbiAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgcmV0dXJuIHVzZXIubmFtZTtcbiAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHJldHVybiAnZGVmYXVsdCBuYW1lJztcbiAgfSkudGhlbihmdW5jdGlvbiAodXNlck5hbWUpIHtcbiAgICAvLyBJZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHVzZXJOYW1lYCB3aWxsIGJlIHRoZSB1c2VyJ3MgbmFtZSwgb3RoZXJ3aXNlIGl0XG4gICAgLy8gd2lsbCBiZSBgJ2RlZmF1bHQgbmFtZSdgXG4gIH0pO1xuICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScpO1xuICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jyk7XG4gIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gbmV2ZXIgcmVhY2hlZFxuICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgLy8gaWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGByZWFzb25gIHdpbGwgYmUgJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jy5cbiAgICAvLyBJZiBgZmluZFVzZXJgIHJlamVjdGVkLCBgcmVhc29uYCB3aWxsIGJlICdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jy5cbiAgfSk7XG4gIGBgYFxuICBJZiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIGRvZXMgbm90IHNwZWNpZnkgYSByZWplY3Rpb24gaGFuZGxlciwgcmVqZWN0aW9uIHJlYXNvbnMgd2lsbCBiZSBwcm9wYWdhdGVkIGZ1cnRoZXIgZG93bnN0cmVhbS5cbiAgIGBgYGpzXG4gIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgIHRocm93IG5ldyBQZWRhZ29naWNhbEV4Y2VwdGlvbignVXBzdHJlYW0gZXJyb3InKTtcbiAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyBuZXZlciByZWFjaGVkXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gbmV2ZXIgcmVhY2hlZFxuICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgLy8gVGhlIGBQZWRnYWdvY2lhbEV4Y2VwdGlvbmAgaXMgcHJvcGFnYXRlZCBhbGwgdGhlIHdheSBkb3duIHRvIGhlcmVcbiAgfSk7XG4gIGBgYFxuICAgQXNzaW1pbGF0aW9uXG4gIC0tLS0tLS0tLS0tLVxuICAgU29tZXRpbWVzIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBwcm9wYWdhdGUgdG8gYSBkb3duc3RyZWFtIHByb21pc2UgY2FuIG9ubHkgYmVcbiAgcmV0cmlldmVkIGFzeW5jaHJvbm91c2x5LiBUaGlzIGNhbiBiZSBhY2hpZXZlZCBieSByZXR1cm5pbmcgYSBwcm9taXNlIGluIHRoZVxuICBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gaGFuZGxlci4gVGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIHRoZW4gYmUgcGVuZGluZ1xuICB1bnRpbCB0aGUgcmV0dXJuZWQgcHJvbWlzZSBpcyBzZXR0bGVkLiBUaGlzIGlzIGNhbGxlZCAqYXNzaW1pbGF0aW9uKi5cbiAgIGBgYGpzXG4gIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAvLyBUaGUgdXNlcidzIGNvbW1lbnRzIGFyZSBub3cgYXZhaWxhYmxlXG4gIH0pO1xuICBgYGBcbiAgIElmIHRoZSBhc3NpbWxpYXRlZCBwcm9taXNlIHJlamVjdHMsIHRoZW4gdGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIGFsc28gcmVqZWN0LlxuICAgYGBganNcbiAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgZnVsZmlsbHMsIHdlJ2xsIGhhdmUgdGhlIHZhbHVlIGhlcmVcbiAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgcmVqZWN0cywgd2UnbGwgaGF2ZSB0aGUgcmVhc29uIGhlcmVcbiAgfSk7XG4gIGBgYFxuICAgU2ltcGxlIEV4YW1wbGVcbiAgLS0tLS0tLS0tLS0tLS1cbiAgIFN5bmNocm9ub3VzIEV4YW1wbGVcbiAgIGBgYGphdmFzY3JpcHRcbiAgbGV0IHJlc3VsdDtcbiAgIHRyeSB7XG4gICAgcmVzdWx0ID0gZmluZFJlc3VsdCgpO1xuICAgIC8vIHN1Y2Nlc3NcbiAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAvLyBmYWlsdXJlXG4gIH1cbiAgYGBgXG4gICBFcnJiYWNrIEV4YW1wbGVcbiAgIGBgYGpzXG4gIGZpbmRSZXN1bHQoZnVuY3Rpb24ocmVzdWx0LCBlcnIpe1xuICAgIGlmIChlcnIpIHtcbiAgICAgIC8vIGZhaWx1cmVcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3VjY2Vzc1xuICAgIH1cbiAgfSk7XG4gIGBgYFxuICAgUHJvbWlzZSBFeGFtcGxlO1xuICAgYGBgamF2YXNjcmlwdFxuICBmaW5kUmVzdWx0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgIC8vIHN1Y2Nlc3NcbiAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAvLyBmYWlsdXJlXG4gIH0pO1xuICBgYGBcbiAgIEFkdmFuY2VkIEV4YW1wbGVcbiAgLS0tLS0tLS0tLS0tLS1cbiAgIFN5bmNocm9ub3VzIEV4YW1wbGVcbiAgIGBgYGphdmFzY3JpcHRcbiAgbGV0IGF1dGhvciwgYm9va3M7XG4gICB0cnkge1xuICAgIGF1dGhvciA9IGZpbmRBdXRob3IoKTtcbiAgICBib29rcyAgPSBmaW5kQm9va3NCeUF1dGhvcihhdXRob3IpO1xuICAgIC8vIHN1Y2Nlc3NcbiAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAvLyBmYWlsdXJlXG4gIH1cbiAgYGBgXG4gICBFcnJiYWNrIEV4YW1wbGVcbiAgIGBgYGpzXG4gICBmdW5jdGlvbiBmb3VuZEJvb2tzKGJvb2tzKSB7XG4gICB9XG4gICBmdW5jdGlvbiBmYWlsdXJlKHJlYXNvbikge1xuICAgfVxuICAgZmluZEF1dGhvcihmdW5jdGlvbihhdXRob3IsIGVycil7XG4gICAgaWYgKGVycikge1xuICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgLy8gZmFpbHVyZVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBmaW5kQm9vb2tzQnlBdXRob3IoYXV0aG9yLCBmdW5jdGlvbihib29rcywgZXJyKSB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3VuZEJvb2tzKGJvb2tzKTtcbiAgICAgICAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgICAgICAgIGZhaWx1cmUocmVhc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICB9XG4gICAgICAvLyBzdWNjZXNzXG4gICAgfVxuICB9KTtcbiAgYGBgXG4gICBQcm9taXNlIEV4YW1wbGU7XG4gICBgYGBqYXZhc2NyaXB0XG4gIGZpbmRBdXRob3IoKS5cbiAgICB0aGVuKGZpbmRCb29rc0J5QXV0aG9yKS5cbiAgICB0aGVuKGZ1bmN0aW9uKGJvb2tzKXtcbiAgICAgIC8vIGZvdW5kIGJvb2tzXG4gIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgfSk7XG4gIGBgYFxuICAgQG1ldGhvZCB0aGVuXG4gIEBwYXJhbSB7RnVuY3Rpb259IG9uRnVsZmlsbGVkXG4gIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0ZWRcbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfVxuICAqL1xuXG4gIC8qKlxuICBgY2F0Y2hgIGlzIHNpbXBseSBzdWdhciBmb3IgYHRoZW4odW5kZWZpbmVkLCBvblJlamVjdGlvbilgIHdoaWNoIG1ha2VzIGl0IHRoZSBzYW1lXG4gIGFzIHRoZSBjYXRjaCBibG9jayBvZiBhIHRyeS9jYXRjaCBzdGF0ZW1lbnQuXG4gIGBgYGpzXG4gIGZ1bmN0aW9uIGZpbmRBdXRob3IoKXtcbiAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZG4ndCBmaW5kIHRoYXQgYXV0aG9yJyk7XG4gIH1cbiAgLy8gc3luY2hyb25vdXNcbiAgdHJ5IHtcbiAgZmluZEF1dGhvcigpO1xuICB9IGNhdGNoKHJlYXNvbikge1xuICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICB9XG4gIC8vIGFzeW5jIHdpdGggcHJvbWlzZXNcbiAgZmluZEF1dGhvcigpLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gIH0pO1xuICBgYGBcbiAgQG1ldGhvZCBjYXRjaFxuICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGlvblxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9XG4gICovXG5cblxuICBQcm9taXNlLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uIF9jYXRjaChvblJlamVjdGlvbikge1xuICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pO1xuICB9O1xuXG4gIC8qKlxuICAgIGBmaW5hbGx5YCB3aWxsIGJlIGludm9rZWQgcmVnYXJkbGVzcyBvZiB0aGUgcHJvbWlzZSdzIGZhdGUganVzdCBhcyBuYXRpdmVcbiAgICB0cnkvY2F0Y2gvZmluYWxseSBiZWhhdmVzXG4gIFxuICAgIFN5bmNocm9ub3VzIGV4YW1wbGU6XG4gIFxuICAgIGBgYGpzXG4gICAgZmluZEF1dGhvcigpIHtcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBBdXRob3IoKTtcbiAgICB9XG4gIFxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZmluZEF1dGhvcigpOyAvLyBzdWNjZWVkIG9yIGZhaWxcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICByZXR1cm4gZmluZE90aGVyQXV0aGVyKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIC8vIGFsd2F5cyBydW5zXG4gICAgICAvLyBkb2Vzbid0IGFmZmVjdCB0aGUgcmV0dXJuIHZhbHVlXG4gICAgfVxuICAgIGBgYFxuICBcbiAgICBBc3luY2hyb25vdXMgZXhhbXBsZTpcbiAgXG4gICAgYGBganNcbiAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIHJldHVybiBmaW5kT3RoZXJBdXRoZXIoKTtcbiAgICB9KS5maW5hbGx5KGZ1bmN0aW9uKCl7XG4gICAgICAvLyBhdXRob3Igd2FzIGVpdGhlciBmb3VuZCwgb3Igbm90XG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIEBtZXRob2QgZmluYWxseVxuICAgIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgQHJldHVybiB7UHJvbWlzZX1cbiAgKi9cblxuXG4gIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbiBfZmluYWxseShjYWxsYmFjaykge1xuICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICB2YXIgY29uc3RydWN0b3IgPSBwcm9taXNlLmNvbnN0cnVjdG9yO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aHJvdyByZWFzb247XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihjYWxsYmFjaywgY2FsbGJhY2spO1xuICB9O1xuXG4gIHJldHVybiBQcm9taXNlO1xufSgpO1xuXG5Qcm9taXNlJDEucHJvdG90eXBlLnRoZW4gPSB0aGVuO1xuUHJvbWlzZSQxLmFsbCA9IGFsbDtcblByb21pc2UkMS5yYWNlID0gcmFjZTtcblByb21pc2UkMS5yZXNvbHZlID0gcmVzb2x2ZSQxO1xuUHJvbWlzZSQxLnJlamVjdCA9IHJlamVjdCQxO1xuUHJvbWlzZSQxLl9zZXRTY2hlZHVsZXIgPSBzZXRTY2hlZHVsZXI7XG5Qcm9taXNlJDEuX3NldEFzYXAgPSBzZXRBc2FwO1xuUHJvbWlzZSQxLl9hc2FwID0gYXNhcDtcblxuLypnbG9iYWwgc2VsZiovXG5mdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgdmFyIGxvY2FsID0gdm9pZCAwO1xuXG4gIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIGxvY2FsID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgIGxvY2FsID0gc2VsZjtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIFAgPSBsb2NhbC5Qcm9taXNlO1xuXG4gIGlmIChQKSB7XG4gICAgdmFyIHByb21pc2VUb1N0cmluZyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIHByb21pc2VUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChQLnJlc29sdmUoKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gc2lsZW50bHkgaWdub3JlZFxuICAgIH1cblxuICAgIGlmIChwcm9taXNlVG9TdHJpbmcgPT09ICdbb2JqZWN0IFByb21pc2VdJyAmJiAhUC5jYXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgbG9jYWwuUHJvbWlzZSA9IFByb21pc2UkMTtcbn1cblxuLy8gU3RyYW5nZSBjb21wYXQuLlxuUHJvbWlzZSQxLnBvbHlmaWxsID0gcG9seWZpbGw7XG5Qcm9taXNlJDEuUHJvbWlzZSA9IFByb21pc2UkMTtcblxucmV0dXJuIFByb21pc2UkMTtcblxufSkpKTtcblxuXG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVzNi1wcm9taXNlLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGtleSA9IHtcbiAgZnVsbHNjcmVlbkVuYWJsZWQ6IDAsXG4gIGZ1bGxzY3JlZW5FbGVtZW50OiAxLFxuICByZXF1ZXN0RnVsbHNjcmVlbjogMixcbiAgZXhpdEZ1bGxzY3JlZW46IDMsXG4gIGZ1bGxzY3JlZW5jaGFuZ2U6IDQsXG4gIGZ1bGxzY3JlZW5lcnJvcjogNVxufTtcblxudmFyIHdlYmtpdCA9IFsnd2Via2l0RnVsbHNjcmVlbkVuYWJsZWQnLCAnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLCAnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nLCAnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLCAnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsICd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXTtcblxudmFyIG1veiA9IFsnbW96RnVsbFNjcmVlbkVuYWJsZWQnLCAnbW96RnVsbFNjcmVlbkVsZW1lbnQnLCAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLCAnbW96Q2FuY2VsRnVsbFNjcmVlbicsICdtb3pmdWxsc2NyZWVuY2hhbmdlJywgJ21vemZ1bGxzY3JlZW5lcnJvciddO1xuXG52YXIgbXMgPSBbJ21zRnVsbHNjcmVlbkVuYWJsZWQnLCAnbXNGdWxsc2NyZWVuRWxlbWVudCcsICdtc1JlcXVlc3RGdWxsc2NyZWVuJywgJ21zRXhpdEZ1bGxzY3JlZW4nLCAnTVNGdWxsc2NyZWVuQ2hhbmdlJywgJ01TRnVsbHNjcmVlbkVycm9yJ107XG5cbi8vIHNvIGl0IGRvZXNuJ3QgdGhyb3cgaWYgbm8gd2luZG93IG9yIGRvY3VtZW50XG52YXIgZG9jdW1lbnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5kb2N1bWVudCA6IHt9O1xuXG52YXIgdmVuZG9yID0gJ2Z1bGxzY3JlZW5FbmFibGVkJyBpbiBkb2N1bWVudCAmJiBPYmplY3Qua2V5cyhrZXkpIHx8IHdlYmtpdFswXSBpbiBkb2N1bWVudCAmJiB3ZWJraXQgfHwgbW96WzBdIGluIGRvY3VtZW50ICYmIG1veiB8fCBtc1swXSBpbiBkb2N1bWVudCAmJiBtcyB8fCBbXTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICByZXF1ZXN0RnVsbHNjcmVlbjogZnVuY3Rpb24gcmVxdWVzdEZ1bGxzY3JlZW4oZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50W3ZlbmRvcltrZXkucmVxdWVzdEZ1bGxzY3JlZW5dXSgpO1xuICB9LFxuICByZXF1ZXN0RnVsbHNjcmVlbkZ1bmN0aW9uOiBmdW5jdGlvbiByZXF1ZXN0RnVsbHNjcmVlbkZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudFt2ZW5kb3Jba2V5LnJlcXVlc3RGdWxsc2NyZWVuXV07XG4gIH0sXG4gIGdldCBleGl0RnVsbHNjcmVlbigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnRbdmVuZG9yW2tleS5leGl0RnVsbHNjcmVlbl1dLmJpbmQoZG9jdW1lbnQpO1xuICB9LFxuICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih2ZW5kb3Jba2V5W3R5cGVdXSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gIH0sXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIHJldHVybiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHZlbmRvcltrZXlbdHlwZV1dLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgfSxcbiAgZ2V0IGZ1bGxzY3JlZW5FbmFibGVkKCkge1xuICAgIHJldHVybiBCb29sZWFuKGRvY3VtZW50W3ZlbmRvcltrZXkuZnVsbHNjcmVlbkVuYWJsZWRdXSk7XG4gIH0sXG4gIHNldCBmdWxsc2NyZWVuRW5hYmxlZCh2YWwpIHt9LFxuICBnZXQgZnVsbHNjcmVlbkVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50W3ZlbmRvcltrZXkuZnVsbHNjcmVlbkVsZW1lbnRdXTtcbiAgfSxcbiAgc2V0IGZ1bGxzY3JlZW5FbGVtZW50KHZhbCkge30sXG4gIGdldCBvbmZ1bGxzY3JlZW5jaGFuZ2UoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50Wygnb24nICsgdmVuZG9yW2tleS5mdWxsc2NyZWVuY2hhbmdlXSkudG9Mb3dlckNhc2UoKV07XG4gIH0sXG4gIHNldCBvbmZ1bGxzY3JlZW5jaGFuZ2UoaGFuZGxlcikge1xuICAgIHJldHVybiBkb2N1bWVudFsoJ29uJyArIHZlbmRvcltrZXkuZnVsbHNjcmVlbmNoYW5nZV0pLnRvTG93ZXJDYXNlKCldID0gaGFuZGxlcjtcbiAgfSxcbiAgZ2V0IG9uZnVsbHNjcmVlbmVycm9yKCkge1xuICAgIHJldHVybiBkb2N1bWVudFsoJ29uJyArIHZlbmRvcltrZXkuZnVsbHNjcmVlbmVycm9yXSkudG9Mb3dlckNhc2UoKV07XG4gIH0sXG4gIHNldCBvbmZ1bGxzY3JlZW5lcnJvcihoYW5kbGVyKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50Wygnb24nICsgdmVuZG9yW2tleS5mdWxsc2NyZWVuZXJyb3JdKS50b0xvd2VyQ2FzZSgpXSA9IGhhbmRsZXI7XG4gIH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9sb2dvX2x1Y2lkd2ViLnBuZz9mNGNlMWE5YTE4NzcyZTY4MjgxYzk2ZTcwYzc4N2YwOVwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9zdHlsZXMvdWkuYnJhbmRpbmcubGVzc1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9zdHlsZXMvdWkuZ2VuZXJhbC5sZXNzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3N0eWxlcy91aS5pY29uLXJlbmRlcmluZy5sZXNzXCI7IiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdhbGwtY29udHJvbHMnLCB7XG5cbiAgICBzY2hlbWE6IHtcbiAgICAgICAgdmlzaWJpbGl0eToge3R5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAnVlInfVxuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5tb2RlID0gJ2Jyb3dzZXInO1xuXG4gICAgICAgIHRoaXMuc2V0VlJPbmx5VmlzaWJpbGl0eShmYWxzZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd0xhc2VyQ29udHJvbHMoKSkge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWVudGl0eScpO1xuICAgICAgICAgICAgY29udHJvbHMuY2xhc3NOYW1lID0gJ3JheS1jYXN0ZXInO1xuICAgICAgICAgICAgY29udHJvbHMuc2V0QXR0cmlidXRlKCdsYXNlci1jb250cm9scycsIHtoYW5kOiAncmlnaHQnfSk7XG4gICAgICAgICAgICBjb250cm9scy5zZXRBdHRyaWJ1dGUoJ3JheWNhc3RlcicsICdvYmplY3RzOiAuY2xpY2thYmxlOycpO1xuICAgICAgICAgICAgdGhpcy5lbC5zY2VuZUVsLmFwcGVuZENoaWxkKGNvbnRyb2xzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdsb29rLWNvbnRyb2xzJywgJycpO1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yID0gdGhpcy5jcmVhdGVEZXNrdG9wQ3Vyc29yKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zdCBhbnRpYWxpYXMgPSB0aGlzLmVsLnNjZW5lRWwucmVuZGVyZXIuYW50aWFsaWFzO1xuICAgICAgICAvLyBpZiAoIWFudGlhbGlhcykge1xuICAgICAgICAvLyAgIGNvbnNvbGUud2FybihcIkFudGktYWxpYXMgaXMgT0ZGXCIpO1xuICAgICAgICAvL1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgIGNvbnNvbGUud2FybihcIkFudGktYWxpYXMgaXMgT05cIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5iaW5kTWV0aG9kcygpO1xuICAgIH0sXG5cbiAgICBiaW5kTWV0aG9kczogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBiaW5kID0gQUZSQU1FLnV0aWxzLmJpbmQ7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyA9IGJpbmQodGhpcy5hZGRFdmVudExpc3RlbmVycywgdGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBiaW5kKHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uRW50ZXJWUiA9IGJpbmQodGhpcy5vbkVudGVyVlIsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uRXhpdFZSID0gYmluZCh0aGlzLm9uRXhpdFZSLCB0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJzb3JWaXNpYmlsaXR5ID0gYmluZCh0aGlzLnVwZGF0ZUN1cnNvclZpc2liaWxpdHksIHRoaXMpO1xuICAgICAgICB0aGlzLmN1cnNvclZpc2liaWxpdHkgPSBiaW5kKHRoaXMuY3Vyc29yVmlzaWJpbGl0eSwgdGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlRGVza3RvcEN1cnNvciA9IGJpbmQodGhpcy5jcmVhdGVEZXNrdG9wQ3Vyc29yLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVWUkN1cnNvciA9IGJpbmQodGhpcy5jcmVhdGVWUkN1cnNvciwgdGhpcyk7XG4gICAgfSxcblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwuc2NlbmVFbC5hZGRFdmVudExpc3RlbmVyKCdlbnRlci12cicsIHRoaXMub25FbnRlclZSKTtcbiAgICAgICAgdGhpcy5lbC5zY2VuZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2V4aXQtdnInLCB0aGlzLm9uRXhpdFZSKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbC5zY2VuZUVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VudGVyLXZyJywgdGhpcy5vbkVudGVyVlIpO1xuICAgICAgICB0aGlzLmVsLnNjZW5lRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXhpdC12cicsIHRoaXMub25FeGl0VlIpO1xuICAgIH0sXG5cbiAgICBwbGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwuc2NlbmVFbC5yZW5kZXJlci5hbnRpYWxpYXMgPSB0cnVlO1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9LFxuXG4gICAgaXNPY3VsdXNHbzogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL01vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA3LjEuMjsgUGFjaWZpYyBCdWlsZC9OMkc0OEgpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIE9jdWx1c0Jyb3dzZXIvNC43LjYuMTE5MDgxNzk3IFNhbXN1bmdCcm93c2VyLzQuMCBDaHJvbWUvNjEuMC4zMTYzLjE0MSBNb2JpbGUgVlIgU2FmYXJpLzUzNy4zNlxuXG4gICAgICAgIHJldHVybiAvUGFjaWZpYyBCdWlsZC4rT2N1bHVzQnJvd3Nlci4rU2Ftc3VuZ0Jyb3dzZXIuK01vYmlsZSA/VlIvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAgIH0sXG5cbiAgICBzaG93TGFzZXJDb250cm9sczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc09jdWx1c0dvKCkgfHwgQUZSQU1FLnV0aWxzLmRldmljZS5jaGVja0hhc1Bvc2l0aW9uYWxUcmFja2luZygpO1xuICAgIH0sXG5cbiAgICBzZXRWUk9ubHlWaXNpYmlsaXR5KHZpcyl7XG4gICAgICAgIGNvbnN0IHZyT25seSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudnItb25seVwiKTtcbiAgICAgICAgZm9yIChlbCBvZiB2ck9ubHkpe1xuICAgICAgICAgICAgaWYgKGVsLnRhZ05hbWUuaW5jbHVkZXMoXCItXCIpKXtcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJ2aXNpYmxlXCIsdmlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpcz09PXRydWUpe1xuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS52aXNpYmlsaXR5PVwidmlzaWJsZVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmlzPT1mYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnZpc2liaWxpdHk9XCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBicm93c2VyT25seSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnJvd3Nlci1vbmx5XCIpO1xuICAgICAgICBmb3IgKGVsIG9mIGJyb3dzZXJPbmx5KXtcbiAgICAgICAgICAgIGlmIChlbC50YWdOYW1lLmluY2x1ZGVzKFwiLVwiKSl7XG4gICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwidmlzaWJsZVwiLCF2aXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodmlzPT09dHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnZpc2liaWxpdHk9XCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZpcz09ZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS52aXNpYmlsaXR5PVwidmlzaWJsZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkVudGVyVlI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tb2RlID0gJ1ZSJztcbiAgICAgICAgLy8gdGhpcy51cGRhdGVDdXJzb3JWaXNpYmlsaXR5KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3Vyc29yKSB7XG4gICAgICAgICAgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLmN1cnNvcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFZST25seVZpc2liaWxpdHkodHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5jdXJzb3IgPSB0aGlzLmNyZWF0ZVZSQ3Vyc29yKCk7XG5cbiAgICAgICAgLy8gdGhpcy5wb2ludGVyLnNldEF0dHJpYnV0ZSgndmlzaWJsZScsIHRydWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZVU0lOR1wiKTtcbiAgICAgICAgLy8gdGhpcy5jdXJzb3JFbC5zZXRBdHRyaWJ1dGUoJ2dlb21ldHJ5JywgJ3ByaW1pdGl2ZTogcmluZzsgcmFkaXVzSW5uZXI6IDAuMDM7IHJhZGl1c091dGVyOiAwLjAzNScpO1xuICAgICAgICAvLyB0aGlzLmN1cnNvckVsLnNldEF0dHJpYnV0ZSgnbWF0ZXJpYWwnLCAnY29sb3I6ICNmZmZmZmY7IHRyYW5zcGFyZW50OiB0cnVlOyBzaGFkZXI6IGZsYXQ7IG9wYWNpdHk6IDAuMDsgYWxwaGFUZXN0OiAwLjQ7Jyk7XG4gICAgICAgIHRoaXMuY3Vyc29yLnNldEF0dHJpYnV0ZSgnY3Vyc29yJywgJ2Z1c2U6IHRydWU7IGZ1c2VUaW1lb3V0OiAxNTAwOyByYXlPcmlnaW46IGVudGl0eScpO1xuICAgIH0sXG5cbiAgICBvbkV4aXRWUjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1vZGUgPSAnYnJvd3Nlcic7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5jdXJzb3IpO1xuICAgICAgICB0aGlzLmN1cnNvciA9IHRoaXMuY3JlYXRlRGVza3RvcEN1cnNvcigpO1xuXG4gICAgICAgIHRoaXMuc2V0VlJPbmx5VmlzaWJpbGl0eShmYWxzZSk7XG5cbiAgICAgICAgLy8gdGhpcy51cGRhdGVDdXJzb3JWaXNpYmlsaXR5KCk7XG4gICAgICAgIC8vIHRoaXMuY3Vyc29yLnNldEF0dHJpYnV0ZSgnY3Vyc29yJywgJ2Z1c2U6IGZhbHNlOyByYXlPcmlnaW46IG1vdXNlJyk7XG4gICAgICAgIC8vIHRoaXMuY3Vyc29yLnNldEF0dHJpYnV0ZSgndmlzaWJsZScsIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlQ3Vyc29yVmlzaWJpbGl0eTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICBjb25zdCBjdXJzb3JFbCA9IHRoaXMuZWwuc2NlbmVFbC5xdWVyeVNlbGVjdG9yKCcuY3Vyc29yJyk7XG4gICAgICAgIGlmIChjdXJzb3JFbCkge1xuXG4gICAgICAgICAgICBjdXJzb3JFbC5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUnLCB0aGlzLmN1cnNvclZpc2liaWxpdHkoKSk7XG5cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjdXJzb3JWaXNpYmlsaXR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgIGlmIChkYXRhLnZpc2liaWxpdHkgPT0gJ2JvdGgnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnZpc2liaWxpdHkgPT0gdGhpcy5tb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRGVza3RvcEN1cnNvcjogZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IGN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtZW50aXR5JylcbiAgICAgIC8vIGN1cnNvci5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUnLCB0aGlzLmN1cnNvclZpc2liaWxpdHkoKSk7XG4gICAgICBjdXJzb3IuY2xhc3NOYW1lID0gJ3JheS1jYXN0ZXIgY3Vyc29yJztcbiAgICAgIC8vIGN1cnNvci5zZXRBdHRyaWJ1dGUoJ2N1cnNvcicsICdmdXNlOiB0cnVlOyBmdXNlVGltZW91dDogMTUwMCcpO1xuICAgICAgY3Vyc29yLnNldEF0dHJpYnV0ZSgnY3Vyc29yJywgJ3JheU9yaWdpbjogbW91c2UnKTtcbiAgICAgIGN1cnNvci5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJzAgMCAtMScpO1xuICAgICAgLy8gY3Vyc29yLnNldEF0dHJpYnV0ZSgnZ2VvbWV0cnknLCAncHJpbWl0aXZlOiByaW5nOyByYWRpdXNJbm5lcjogMC4wMzsgcmFkaXVzT3V0ZXI6IDAuMDM1Jyk7XG4gICAgICAvLyBjdXJzb3Iuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsICdjb2xvcjogI2ZmZmZmZjsgdHJhbnNwYXJlbnQ6IHRydWU7IHNoYWRlcjogZmxhdDsgb3BhY2l0eTogMC4wOyBhbHBoYVRlc3Q6IDAuNDsnKTtcbiAgICAgIGN1cnNvci5zZXRBdHRyaWJ1dGUoJ3JheWNhc3RlcicsICdvYmplY3RzOiAuY2xpY2thYmxlOyBpbnRlcnZhbDogMCcpO1xuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChjdXJzb3IpO1xuXG4gICAgICByZXR1cm4gY3Vyc29yO1xuICAgIH0sXG5cbiAgICBjcmVhdGVWUkN1cnNvcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICB7Lyo8YS1lbnRpdHkgaWQ9XCJjdXJzb3ItcG9pbnRlclwiIGN1cnNvcj1cImZ1c2U6IHRydWU7IGZ1c2VUaW1lb3V0OiAxNTAwXCIqL31cbiAgICAgICAgICAgICAgICB7Lypwb3NpdGlvbj1cIjAgMCAtMVwiKi99XG4gICAgICAgICAgICAgICAgey8qZ2VvbWV0cnk9XCJwcmltaXRpdmU6IHJpbmc7IHJhZGl1c0lubmVyOiAwLjAzMDsgcmFkaXVzT3V0ZXI6IDAuMDM1XCIqL31cbiAgICAgICAgICAgICAgICB7LyptYXRlcmlhbD1cImNvbG9yOiAjZmZmZmZmOyB0cmFuc3BhcmVudDogdHJ1ZTsgb3BhY2l0eTogMC4wOyBzaGFkZXI6IGZsYXRcIiovfVxuICAgICAgICAgICAgICAgIHsvKnJheWNhc3Rlcj1cIm9iamVjdHM6IC5nYXplLXRhcmdldFwiPiovfVxuXG4gICAgICAgIHsvKjxhLWVudGl0eSBpZD1cImN1cnNvci1jaXJjbGVcIiBwb3NpdGlvbj1cIjAgMCAtMC4xXCIgZ2VvbWV0cnk9XCJwcmltaXRpdmU6IGNpcmNsZTsgcmFkaXVzOiAwLjAwNVwiIG1hdGVyaWFsPVwiY29sb3I6ICNmZmZmZmY7IHNoYWRlcjogZmxhdDtcIj48L2EtZW50aXR5PiovfVxuXG4gICAgICAgICAgey8qPCEtLTxhLWVudGl0eSBwb3NpdGlvbj1cIjAgMCAtMC4xXCIgZ2VvbWV0cnk9XCJwcmltaXRpdmU6IHJpbmc7IHJhZGl1c0lubmVyOiAwLjAwMjsgcmFkaXVzT3V0ZXI6IDAuMDAzXCIgbWF0ZXJpYWw9XCJjb2xvcjogIzZENkQ2RDsgc2hhZGVyOiBmbGF0XCI+PC9hLWVudGl0eT4tLT4qL31cbiAgICAgICAgICB7Lyo8IS0tPGEtYW5pbWF0aW9uIGJlZ2luPVwiY2xpY2tcIiBlYXNpbmc9XCJlYXNlLWluXCIgYXR0cmlidXRlPVwic2NhbGVcIiBkdXI9XCIxNTBcIiBmaWxsPVwiZm9yd2FyZHNcIiBmcm9tPVwiMC4xIDAuMSAwLjFcIiB0bz1cIjEgMSAxXCI+PC9hLWFuaW1hdGlvbj4tLT4qL31cbiAgICAgICAgey8qPGEtYW5pbWF0aW9uIGJlZ2luPVwibW91c2VlbnRlclwiIGVuZD1cIm1vdXNlbGVhdmVcIiBlYXNpbmc9XCJlYXNlLWluXCIgYXR0cmlidXRlPVwiZ2VvbWV0cnkucmFkaXVzSW5uZXJcIiBkdXI9XCIxXCIgZGVsYXk9XCI1XCIgZnJvbT1cIjAuMFwiIHRvPVwiMC4wMzBcIiBmaWxsPVwibm9uZVwiPjwvYS1hbmltYXRpb24+Ki99XG4gICAgICAgIHsvKjxhLWFuaW1hdGlvbiBiZWdpbj1cIm1vdXNlZW50ZXJcIiBlbmQ9XCJtb3VzZWxlYXZlXCIgZWFzaW5nPVwiZWFzZS1pblwiIGF0dHJpYnV0ZT1cImdlb21ldHJ5LnJhZGl1c091dGVyXCIgZHVyPVwiMVwiIGRlbGF5PVwiNVwiIGZyb209XCIwLjBcIiB0bz1cIjAuMDM1XCIgZmlsbD1cIm5vbmVcIj48L2EtYW5pbWF0aW9uPiovfVxuICAgICAgICB7Lyo8YS1hbmltYXRpb24gYmVnaW49XCJtb3VzZWVudGVyXCIgZW5kPVwibW91c2VsZWF2ZVwiIGVhc2luZz1cImVhc2UtaW5cIiBhdHRyaWJ1dGU9XCJtYXRlcmlhbC5vcGFjaXR5XCIgZHVyPVwiMTAwXCIgZGVsYXk9XCIxMFwiIGZyb209XCIwLjBcIiB0bz1cIjAuNVwiIGZpbGw9XCJub25lXCI+PC9hLWFuaW1hdGlvbj4qL31cbiAgICAgICAgey8qPGEtYW5pbWF0aW9uIGJlZ2luPVwibW91c2VlbnRlclwiIGVuZD1cIm1vdXNlbGVhdmVcIiBlYXNpbmc9XCJlYXNlLWluXCIgYXR0cmlidXRlPVwiZ2VvbWV0cnkucmFkaXVzSW5uZXJcIiBkdXI9XCIxMzkwXCIgZGVsYXk9XCIxMTBcIiBmcm9tPVwiMC4wMzBcIiB0bz1cIjAuMDA1XCIgZmlsbD1cIm5vbmVcIj48L2EtYW5pbWF0aW9uPiovfVxuICAgICAgICB7Lyo8YS1hbmltYXRpb24gYmVnaW49XCJtb3VzZWVudGVyXCIgZW5kPVwibW91c2VsZWF2ZVwiIGVhc2luZz1cImVhc2UtaW5cIiBhdHRyaWJ1dGU9XCJnZW9tZXRyeS5yYWRpdXNPdXRlclwiIGR1cj1cIjEzOTBcIiBkZWxheT1cIjExMFwiIGZyb209XCIwLjAzNVwiIHRvPVwiMC4wMTBcIiBmaWxsPVwibm9uZVwiPjwvYS1hbmltYXRpb24+Ki99XG4gICAgICAgIHsvKjxhLWFuaW1hdGlvbiBiZWdpbj1cIm1vdXNlbGVhdmVcIiBlbmQ9XCJtb3VzZWVudGVyXCIgZWFzaW5nPVwiZWFzZS1pblwiIGF0dHJpYnV0ZT1cIm1hdGVyaWFsLm9wYWNpdHlcIiBkdXI9XCIxMDBcIiBkZWxheT1cIjEwXCIgZnJvbT1cIjAuNVwiIHRvPVwiMC4wXCIgZmlsbD1cIm5vbmVcIj48L2EtYW5pbWF0aW9uPiovfVxuICAgICAgey8qPC9hLWVudGl0eT4qL31cblxuICAgICAgICAvLyBjcmVhdGVzIHRoZSBjdXJzb3JcblxuICAgICAgICBjb25zdCBjdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWVudGl0eScpXG4gICAgICAgIC8vIGN1cnNvci5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUnLCB0aGlzLmN1cnNvclZpc2liaWxpdHkoKSk7XG4gICAgICAgIGN1cnNvci5jbGFzc05hbWUgPSAncmF5LWNhc3RlciBjdXJzb3InO1xuICAgICAgICBjdXJzb3Iuc2V0QXR0cmlidXRlKCdjdXJzb3InLCAnZnVzZTogdHJ1ZTsgZnVzZVRpbWVvdXQ6IDE1MDAnKTtcbiAgICAgIC8vIGN1cnNvci5zZXRBdHRyaWJ1dGUoJ2N1cnNvcicsICdyYXlPcmlnaW46IG1vdXNlJyk7XG4gICAgICAgIGN1cnNvci5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJzAgMCAtMScpO1xuICAgICAgICBjdXJzb3Iuc2V0QXR0cmlidXRlKCdnZW9tZXRyeScsICdwcmltaXRpdmU6IHJpbmc7IHJhZGl1c0lubmVyOiAwLjAzOyByYWRpdXNPdXRlcjogMC4wMzUnKTtcbiAgICAgICAgY3Vyc29yLnNldEF0dHJpYnV0ZSgnbWF0ZXJpYWwnLCAnY29sb3I6ICNmZmZmZmY7IHRyYW5zcGFyZW50OiB0cnVlOyBzaGFkZXI6IGZsYXQ7IG9wYWNpdHk6IDAuMDsgYWxwaGFUZXN0OiAwLjQ7Jyk7XG4gICAgICAgIGN1cnNvci5zZXRBdHRyaWJ1dGUoJ3JheWNhc3RlcicsICdvYmplY3RzOiAuY2xpY2thYmxlOyBpbnRlcnZhbDogMCcpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGN1cnNvcik7XG5cbiAgICAgICAgLy8gY3JlYXRlcyB0aGUgcG9pbnRlclxuXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWVudGl0eScpO1xuICAgICAgICBwb2ludGVyLmlkID0gJ2N1cnNvci1jaXJjbGUnO1xuICAgICAgICAvLyBwb2ludGVyLnNldEF0dHJpYnV0ZSgndmlzaWJsZScsIGZhbHNlKTtcbiAgICAgICAgcG9pbnRlci5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJzAgMCAwJyk7XG4gICAgICAgIHBvaW50ZXIuc2V0QXR0cmlidXRlKCdnZW9tZXRyeScsICdwcmltaXRpdmU6IGNpcmNsZTsgcmFkaXVzOiAwLjAwNScpO1xuICAgICAgICBwb2ludGVyLnNldEF0dHJpYnV0ZSgnbWF0ZXJpYWwnLCAnY29sb3I6ICNmZmZmZmY7IHNoYWRlcjogZmxhdDsnKTtcbiAgICAgICAgY3Vyc29yLmFwcGVuZENoaWxkKHBvaW50ZXIpO1xuXG4gICAgICAgIC8vIGNyZWF0ZXMgYW5pbWF0aW9uIGZvciBjdXJzb3JcblxuICAgICAgICBjb25zdCBjbGlja0FuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtYW5pbWF0aW9uJyk7XG4gICAgICAgIGNsaWNrQW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgnYmVnaW4nLCAnY2xpY2snKTtcbiAgICAgICAgY2xpY2tBbmltYXRpb24uc2V0QXR0cmlidXRlKCdlYXNpbmcnLCAnbGluZWFyJyk7XG4gICAgICAgIGNsaWNrQW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgnYXR0cmlidXRlJywgJ3NjYWxlJyk7XG4gICAgICAgIGNsaWNrQW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgnZHVyJywgJzE1MCcpO1xuICAgICAgICBjbGlja0FuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnZm9yd2FyZHMnKTtcbiAgICAgICAgY2xpY2tBbmltYXRpb24uc2V0QXR0cmlidXRlKCdmcm9tJywgJzAuMSAwLjEgMC4xJyk7XG4gICAgICAgIGNsaWNrQW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgndG8nLCAnMSAxIDEnKTtcbiAgICAgICAgY3Vyc29yLmFwcGVuZENoaWxkKGNsaWNrQW5pbWF0aW9uKTtcblxuICAgICAgICBjb25zdCBmdXNpbmdBbmltYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWFuaW1hdGlvbicpO1xuICAgICAgICBmdXNpbmdBbmltYXRpb24uc2V0QXR0cmlidXRlKCdiZWdpbicsICdjdXJzb3ItZnVzaW5nJyk7XG4gICAgICAgIGZ1c2luZ0FuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2Vhc2luZycsICdsaW5lYXInKTtcbiAgICAgICAgZnVzaW5nQW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgnYXR0cmlidXRlJywgJ3NjYWxlJyk7XG4gICAgICAgIGZ1c2luZ0FuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2R1cicsICcxNTAwJyk7XG4gICAgICAgIGZ1c2luZ0FuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnYmFja3dhcmRzJyk7XG4gICAgICAgIGZ1c2luZ0FuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2Zyb20nLCAnMSAxIDEnKTtcbiAgICAgICAgZnVzaW5nQW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgndG8nLCAnMC4xIDAuMSAwLjEnKTtcbiAgICAgICAgY3Vyc29yLmFwcGVuZENoaWxkKGZ1c2luZ0FuaW1hdGlvbik7XG5cbiAgICAgICAgY29uc3QgZnVzaW5nT3BhY2l0eUFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtYW5pbWF0aW9uJyk7XG4gICAgICAgIGZ1c2luZ09wYWNpdHlBbmltYXRpb24uc2V0QXR0cmlidXRlKCdiZWdpbicsICdjdXJzb3ItZnVzaW5nJyk7XG4gICAgICAgIGZ1c2luZ09wYWNpdHlBbmltYXRpb24uc2V0QXR0cmlidXRlKCdlYXNpbmcnLCAnbGluZWFyJyk7XG4gICAgICAgIGZ1c2luZ09wYWNpdHlBbmltYXRpb24uc2V0QXR0cmlidXRlKCdhdHRyaWJ1dGUnLCAnbWF0ZXJpYWwub3BhY2l0eScpO1xuICAgICAgICBmdXNpbmdPcGFjaXR5QW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgnZHVyJywgJzEwMCcpO1xuICAgICAgICBmdXNpbmdPcGFjaXR5QW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgICAgIGZ1c2luZ09wYWNpdHlBbmltYXRpb24uc2V0QXR0cmlidXRlKCdmcm9tJywgJzAuMCcpO1xuICAgICAgICBmdXNpbmdPcGFjaXR5QW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgndG8nLCAnMC44Jyk7XG4gICAgICAgIGN1cnNvci5hcHBlbmRDaGlsZChmdXNpbmdPcGFjaXR5QW5pbWF0aW9uKTtcblxuICAgICAgICBjb25zdCBtb3VzZU91dEFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtYW5pbWF0aW9uJyk7XG4gICAgICAgIG1vdXNlT3V0QW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgnYmVnaW4nLCAnbW91c2VsZWF2ZScpO1xuICAgICAgICBtb3VzZU91dEFuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2F0dHJpYnV0ZScsICdtYXRlcmlhbC5vcGFjaXR5Jyk7XG4gICAgICAgIG1vdXNlT3V0QW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgnZHVyJywgJzEwMCcpO1xuICAgICAgICBtb3VzZU91dEFuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2Zyb20nLCAnMC44Jyk7XG4gICAgICAgIG1vdXNlT3V0QW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgndG8nLCAnMC4wJyk7XG4gICAgICAgIGN1cnNvci5hcHBlbmRDaGlsZChtb3VzZU91dEFuaW1hdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGN1cnNvcjtcbiAgICB9XG5cbn0pOyIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcbiAgICAnZ2VvbWV0cnktcmVzaXplJyxcbiAgICB7XG4gICAgICAgIHNjaGVtYToge1xuICAgICAgICAgICAgcGFkZGluZzogeyB0eXBlOiAnbnVtYmVyJyB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGxheTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignKicpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIEFGUkFNRS51dGlscy5iaW5kKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjaGlsZEVsZW1lbnQuY29tcG9uZW50c1snZ2VvbWV0cnknXS5kYXRhLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBjaGlsZEVsZW1lbnQuY29tcG9uZW50c1snZ2VvbWV0cnknXS5kYXRhLmhlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGV4dCBpcyAke2hlaWdodH0gWCAke3dpZHRofWApO1xuICAgICAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2dlb21ldHJ5Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoICsgMiAqIGRhdGEucGFkZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ICsgMiAqIGRhdGEucGFkZGluZ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIHRoaXMpLFxuICAgICAgICAgICAgICAgIDUwXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIH1cbiAgICB9XG4pOyIsIi8vQGZsb3dcblxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdpY29uLXJlbmRlcmVyJywge1xuXG4gIHNjaGVtYToge1xuICAgIG5hbWU6IHsgdHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICdpY29uLWhlbHAnIH0sXG4gICAgJ2ZvbnQtZmFtaWx5JzogeyB0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogJ2x1Y2lkd2ViJyB9LFxuICAgICdmb250LXNpemUnOiB7IHR5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAoTWF0aC5wb3coMiwgNykgLSAxMCkgKyAncHgnIH0sXG4gICAgJ3NpemUnOiB7IHR5cGU6ICdudW1iZXInLCBkZWZhdWx0OiBNYXRoLnBvdygyLCA3KSB9LFxuICAgICdwYWRkaW5nJzogeyB0eXBlOiAnbnVtYmVyJywgZGVmYXVsdDogNSB9LFxuICAgIC8vICdjb2xvcic6IHsgdHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICcjZmZmZmZmJ31cbiAgfSxcblxuICBpbml0OiBmdW5jdGlvbigpe1xuICAgIHRoaXMuYmluZE1ldGhvZHMoKTtcbiAgICB0aGlzLmZvbnRMb2FkZWQgPSBmYWxzZTtcbiAgfSxcblxuICBiaW5kTWV0aG9kczogZnVuY3Rpb24oKXtcbiAgICB0aGlzLnJlbmRlciA9IEFGUkFNRS51dGlscy5iaW5kKHRoaXMucmVuZGVyLCB0aGlzKTtcbiAgICB0aGlzLl9kZWMyaGV4ID0gQUZSQU1FLnV0aWxzLmJpbmQodGhpcy5fZGVjMmhleCwgdGhpcyk7XG4gICAgdGhpcy5fcmFuZG9tSWQgPSBBRlJBTUUudXRpbHMuYmluZCh0aGlzLl9yYW5kb21JZCwgdGhpcyk7XG4gIH0sXG5cbiAgcGxheTogZnVuY3Rpb24oKXtcbiAgICBzZXRUaW1lb3V0KHRoaXMucmVuZGVyLCAyMDAwKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCBpY29uRGF0YSA9IHRoaXMuc3lzdGVtLnJlbmRlckljb24oXG4gICAgICBkYXRhLm5hbWUsXG4gICAgICB7XG4gICAgICAgICdmb250LWZhbWlseSc6IGRhdGFbJ2ZvbnQtZmFtaWx5J10sXG4gICAgICAgICdmb250LXNpemUnOiBkYXRhWydmb250LXNpemUnXSxcbiAgICAgICAgJ3NpemUnOiBkYXRhWydzaXplJ10sXG4gICAgICAgICdwYWRkaW5nJzogZGF0YVsncGFkZGluZyddLFxuICAgICAgICAnY29sb3InOiAnI2ZmZmZmZidcbiAgICAgIH1cbiAgICApO1xuXG5cbiAgICAvLyBjcmVhdGUgYW4gaW1hZ2VcbiAgICBjb25zdCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0ltYWdlLmlkID0gZGF0YS5uYW1lO1xuICAgIG5ld0ltYWdlLnNyYyA9IGljb25EYXRhO1xuICAgIG5ld0ltYWdlLmhlaWdodCA9IGRhdGEuc2l6ZTtcbiAgICBuZXdJbWFnZS53aWR0aCA9IGRhdGEuc2l6ZTtcblxuICAgIC8vIGFkZCB0byBhc3NldHNcbiAgICBjb25zdCBhc3NldHMgPSB0aGlzLmVsLnNjZW5lRWwucXVlcnlTZWxlY3RvcignYS1hc3NldHMnKTtcbiAgICBhc3NldHMuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ21hdGVyaWFsJywge1xuICAgICAgc3JjOiAnIycgKyBkYXRhLm5hbWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgX2RlYzJoZXg6IGZ1bmN0aW9uKGRlYykge1xuICAgIHJldHVybiAoJzAnICsgZGVjLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC0yKVxuICB9LFxuXG4gIF9yYW5kb21JZDogZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgobGVuZ3RoIHx8IDQwKSAvIDIpXG4gICAgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyKVxuICAgIHJldHVybiBBcnJheS5mcm9tKGFyciwgdGhpcy5fZGVjMmhleCkuam9pbignJylcbiAgfVxuXG59KTsiLCJpbXBvcnQgRW5hYmxpbmdNaXhpbiBmcm9tICcuLi8uLi91dGlsaXRpZXMvZW5hYmxpbmctbWl4aW4nO1xuXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXG4gICAgJ21vZGlmeS1wcm9wZXJ0eScsXG4gICAgRW5hYmxpbmdNaXhpbih7XG5cbiAgICAgICAgc2NoZW1hOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IHt0eXBlOiAnc2VsZWN0b3InfSxcbiAgICAgICAgICAgIHByb3BlcnR5OiB7dHlwZTogJ3N0cmluZyd9LFxuICAgICAgICAgICAgZmllbGQ6IHt0eXBlOiAnc3RyaW5nJ30sXG4gICAgICAgICAgICB2YWx1ZToge3R5cGU6ICdzdHJpbmcnfVxuICAgICAgICB9LFxuXG4gICAgICAgIG9uRW5hYmxlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGRhdGEudGFyZ2V0LnNldEF0dHJpYnV0ZShkYXRhLnByb3BlcnR5LCBkYXRhLmZpZWxkLCBkYXRhLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgfSlcbik7IiwiXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXG4gICAgJ3RyYWNrLXBvc2l0aW9uJyxcbiAgICB7XG4gICAgICAgIHNjaGVtYToge1xuICAgICAgICAgICAgdGFyZ2V0OiB7IHR5cGU6ICdzZWxlY3RvcicgfSxcbiAgICAgICAgICAgIGZyZXF1ZW5jeTogeyB0eXBlOiAnbnVtYmVyJywgZGVmYXVsdDogMTAwMCAvIDYwIH0sXG4gICAgICAgICAgICB4OiB7IHR5cGU6ICdib29sZWFuJywgZGVmYXVsdDogdHJ1ZSB9LFxuICAgICAgICAgICAgeTogeyB0eXBlOiAnYm9vbGVhbicsIGRlZmF1bHQ6IHRydWUgfSxcbiAgICAgICAgICAgIHo6IHsgdHlwZTogJ2Jvb2xlYW4nLCBkZWZhdWx0OiB0cnVlIH1cbiAgICAgICAgfSxcblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5iaW5kTWV0aG9kcygpO1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbFBvaW50ZXIgPSBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBsYXk6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbFBvaW50ZXIgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNrVGFyZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgZGF0YS5mcmVxdWVuY3lcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIGlmICh0aGlzLmludGVydmFsUG9pbnRlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbFBvaW50ZXIpO1xuICAgICAgICAgICAgICB0aGlzLmludGVydmFsUG9pbnRlciA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGJpbmRNZXRob2RzOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy50cmFja1RhcmdldFBvc2l0aW9uID0gQUZSQU1FLnV0aWxzLmJpbmQodGhpcy50cmFja1RhcmdldFBvc2l0aW9uLCB0aGlzKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0cmFja1RhcmdldFBvc2l0aW9uOiBmdW5jdGlvbihldnQpe1xuICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gZGF0YS50YXJnZXQuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gZWwuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvblVwZGF0ZU5lZWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGRhdGEueCAmJiB0YXJnZXRQb3NpdGlvbi54ICE9IGN1cnJlbnRQb3NpdGlvbi54KSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25VcGRhdGVOZWVkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnggPSB0YXJnZXRQb3NpdGlvbi54O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnkgJiYgdGFyZ2V0UG9zaXRpb24ueSAhPSBjdXJyZW50UG9zaXRpb24ueSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uVXBkYXRlTmVlZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbi55ID0gdGFyZ2V0UG9zaXRpb24ueTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS56ICYmIHRhcmdldFBvc2l0aW9uLnogIT0gY3VycmVudFBvc2l0aW9uLnopIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblVwZGF0ZU5lZWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueiA9IHRhcmdldFBvc2l0aW9uLno7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwb3NpdGlvblVwZGF0ZU5lZWRlZCkge1xuICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4pOyIsIlxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFxuICAgICd0cmFjay1yb3RhdGlvbicsXG4gICAge1xuICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgIHRhcmdldDogeyB0eXBlOiAnc2VsZWN0b3InIH0sXG4gICAgICAgICAgICBmcmVxdWVuY3k6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDEwMDAgLyAxIH0sXG4gICAgICAgICAgICB4OiB7IHR5cGU6ICdib29sZWFuJywgZGVmYXVsdDogdHJ1ZSB9LFxuICAgICAgICAgICAgeTogeyB0eXBlOiAnYm9vbGVhbicsIGRlZmF1bHQ6IHRydWUgfSxcbiAgICAgICAgICAgIHo6IHsgdHlwZTogJ2Jvb2xlYW4nLCBkZWZhdWx0OiB0cnVlIH1cbiAgICAgICAgfSxcblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5iaW5kTWV0aG9kcygpO1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbFBvaW50ZXIgPSBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBsYXk6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbFBvaW50ZXIgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNrVGFyZ2V0Um90YXRpb24sXG4gICAgICAgICAgICAgICAgZGF0YS5mcmVxdWVuY3lcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxQb2ludGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxQb2ludGVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVydmFsUG9pbnRlciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmluZE1ldGhvZHM6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLnRyYWNrVGFyZ2V0Um90YXRpb24gPSBBRlJBTUUudXRpbHMuYmluZCh0aGlzLnRyYWNrVGFyZ2V0Um90YXRpb24sIHRoaXMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRyYWNrVGFyZ2V0Um90YXRpb246IGZ1bmN0aW9uKGV2dCl7XG4gICAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0Um90YXRpb246IFRIUkVFLkV1bGVyID0gZGF0YS50YXJnZXQub2JqZWN0M0Qucm90YXRpb247XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Um90YXRpb246IFRIUkVFLkV1bGVyID0gZWwub2JqZWN0M0Qucm90YXRpb247XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdZID0gJyArIFRIUkVFLk1hdGgucmFkVG9EZWcodGFyZ2V0Um90YXRpb24ueSkpO1xuXG4gICAgICAgICAgICAvLyBsZXQgbmV3Um90YXRpb246IFRIUkVFLkV1bGVyID0gbmV3IFRIUkVFLkV1bGVyKFxuICAgICAgICAgICAgLy8gICAgIGN1cnJlbnRSb3RhdGlvbi54LCBjdXJyZW50Um90YXRpb24ueSwgY3VycmVudFJvdGF0aW9uLnosIGN1cnJlbnRSb3RhdGlvbi5vcmRlclxuICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgIC8vIGxldCByb3RhdGlvblVwZGF0ZU5lZWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gaWYgKGRhdGEueCAmJiB0YXJnZXRSb3RhdGlvbi54ICE9IGN1cnJlbnRSb3RhdGlvbi54KSB7XG4gICAgICAgICAgICAvLyAgICAgcm90YXRpb25VcGRhdGVOZWVkZWQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIC8vIG5ld1JvdGF0aW9uLnggPSB0YXJnZXRSb3RhdGlvbi54O1xuICAgICAgICAgICAgLy8gICAgIGlmICh0YXJnZXRSb3RhdGlvbi54IDwgMCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBuZXdSb3RhdGlvbi54ID0gVEhSRUUuTWF0aC5kZWdUb1JhZChcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIFRIUkVFLk1hdGgucmFkVG9EZWcodGFyZ2V0Um90YXRpb24ueCkgKyAzNjBcbiAgICAgICAgICAgIC8vICAgICAgICAgKVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG5ld1JvdGF0aW9uLnggPSB0YXJnZXRSb3RhdGlvbi54O1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKGRhdGEueSAmJiB0YXJnZXRSb3RhdGlvbi55ICE9IGN1cnJlbnRSb3RhdGlvbi55KSB7XG4gICAgICAgICAgICAvLyAgICAgcm90YXRpb25VcGRhdGVOZWVkZWQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIC8vIG5ld1JvdGF0aW9uLnkgPSB0YXJnZXRSb3RhdGlvbi55O1xuICAgICAgICAgICAgLy8gICAgIGlmIChUSFJFRS5NYXRoLnJhZFRvRGVnKHRhcmdldFJvdGF0aW9uLnkpIDwgMCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBuZXdSb3RhdGlvbi55ID0gVEhSRUUuTWF0aC5kZWdUb1JhZChcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIFRIUkVFLk1hdGgucmFkVG9EZWcodGFyZ2V0Um90YXRpb24ueSkgKyAzNjBcbiAgICAgICAgICAgIC8vICAgICAgICAgKVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG5ld1JvdGF0aW9uLnkgPSB0YXJnZXRSb3RhdGlvbi55O1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoZGF0YS56ICYmIHRhcmdldFJvdGF0aW9uLnogIT0gY3VycmVudFJvdGF0aW9uLnopIHtcbiAgICAgICAgICAgIC8vICAgICByb3RhdGlvblVwZGF0ZU5lZWRlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgLy8gbmV3Um90YXRpb24ueiA9IHRhcmdldFJvdGF0aW9uLno7XG4gICAgICAgICAgICAvLyAgICAgbmV3Um90YXRpb24ueiA9IHRhcmdldFJvdGF0aW9uLno7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vIGlmIChyb3RhdGlvblVwZGF0ZU5lZWRlZCkge1xuICAgICAgICAgICAgICAgIC8vIGVsLm9iamVjdDNELnJvdGF0aW9uLnNldChcbiAgICAgICAgICAgICAgICAvLyAgICAgVEhSRUUuTWF0aC5kZWdUb1JhZChuZXdSb3RhdGlvbi54KSxcbiAgICAgICAgICAgICAgICAvLyAgICAgVEhSRUUuTWF0aC5kZWdUb1JhZChuZXdSb3RhdGlvbi55KSxcbiAgICAgICAgICAgICAgICAvLyAgICAgVEhSRUUuTWF0aC5kZWdUb1JhZChuZXdSb3RhdGlvbi56KVxuICAgICAgICAgICAgICAgIC8vICk7XG4gICAgICAgICAgICAgICAgLy8gZWwub2JqZWN0M0Qucm90YXRpb24ueCA9IG5ld1JvdGF0aW9uLng7XG4gICAgICAgICAgICAgICAgLy8gZWwub2JqZWN0M0Qucm90YXRpb24ueSA9IG5ld1JvdGF0aW9uLnk7XG4gICAgICAgICAgICAgICAgLy8gZWwub2JqZWN0M0Qucm90YXRpb24ueiA9IG5ld1JvdGF0aW9uLno7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjdXJyZW50X3ggPSBUSFJFRS5NYXRoLnJhZFRvRGVnKGN1cnJlbnRSb3RhdGlvbi54KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjdXJyZW50X3kgPSBUSFJFRS5NYXRoLnJhZFRvRGVnKHRhcmdldFJvdGF0aW9uLnkpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGN1cnJlbnRfeiA9IFRIUkVFLk1hdGgucmFkVG9EZWcoY3VycmVudFJvdGF0aW9uLnopO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHggPSBUSFJFRS5NYXRoLnJhZFRvRGVnKG5ld1JvdGF0aW9uLngpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHkgPSBUSFJFRS5NYXRoLnJhZFRvRGVnKG5ld1JvdGF0aW9uLnkpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHogPSBUSFJFRS5NYXRoLnJhZFRvRGVnKG5ld1JvdGF0aW9uLnopO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHRhcmdldCByb3RhdGlvbiB5ID0gJHtjdXJyZW50X3l9YCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG5ldyByb3RhdGlvbiB4ID0gJHt4fSwgeSA9ICR7eX0sIHogPSAke3p9YCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG4pOyIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgndWktYnV0dG9uJywge1xuXG4gICAgc2NoZW1hOiB7XG4gICAgICAgIGljb246IHt0eXBlOiAnc3RyaW5nJ30sXG4gICAgICAgIGxhYmVsOiB7dHlwZTogJ3N0cmluZyd9LFxuICAgICAgICBzaGFwZToge3R5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAnYm94J30sXG4gICAgICAgIHNpemU6IHt0eXBlOiAnbnVtYmVyJywgZGVmYXVsdDogMC4zMH0sXG4gICAgICAgIGRlcHRoOiB7dHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDAuMDV9LFxuICAgICAgICBjb2xvcjoge3R5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAnIzMzMyd9LFxuICAgICAgICB0cmFuc3BhcmVudDogeyB0eXBlOiAnYm9vbGVhbicsIGRlZmF1bHQ6IGZhbHNlIH0sXG4gICAgICAgIG9wYWNpdHk6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDEuMCB9LFxuICAgICAgICBhY3RpdmVDb2xvcjoge3R5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAnIzZjNmM2Yyd9LFxuICAgICAgICBzZWxlY3RlZENvbG9yOiB7dHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICcjNmM2YzZjJ30sXG4gICAgICAgIGRldGFpbENvbG9yOiB7dHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICcjZmZmJ30sXG4gICAgICAgIGRldGFpbEFjdGl2ZUNvbG9yOiB7dHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICcjZmZmJ30sXG4gICAgICAgIGRldGFpbFNlbGVjdGVkQ29sb3I6IHt0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogJyMzMzMnfSxcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJ1dHRvbkdlb21ldHJ5ID0gdGhpcy5jcmVhdGVHZW9tZXRyeSgpO1xuICAgICAgICB0aGlzLnJvdGF0aW9uR3JvdXAgPSB0aGlzLmNyZWF0ZVJvdGF0aW9uR3JvdXAodGhpcy5idXR0b25HZW9tZXRyeSk7XG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMuY3JlYXRlSWNvbih0aGlzLnJvdGF0aW9uR3JvdXApO1xuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy5jcmVhdGVMYWJlbCh0aGlzLnJvdGF0aW9uR3JvdXApO1xuICAgICAgICB0aGlzLmJpbmRNZXRob2RzKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpO1xuICAgIH0sXG5cbiAgICBiaW5kTWV0aG9kczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBBRlJBTUUudXRpbHMuYmluZCh0aGlzLm9uQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VFbnRlciA9IEFGUkFNRS51dGlscy5iaW5kKHRoaXMub25Nb3VzZUVudGVyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlTGVhdmUgPSBBRlJBTUUudXRpbHMuYmluZCh0aGlzLm9uTW91c2VMZWF2ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMub25GdXNpbmcgPSBBRlJBTUUudXRpbHMuYmluZCh0aGlzLm9uRnVzaW5nLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVNYXRlcmlhbFByb3BlcnRpZXMgPSBBRlJBTUUudXRpbHMuYmluZCh0aGlzLmNyZWF0ZU1hdGVyaWFsUHJvcGVydGllcywgdGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucyA9IEFGUkFNRS51dGlscy5iaW5kKHRoaXMuY3JlYXRlQW5pbWF0aW9ucywgdGhpcyk7XG4gICAgfSxcblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMub25Nb3VzZUVudGVyKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdmdXNpbmcnLCB0aGlzLm9uRnVzaW5nKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbk1vdXNlTGVhdmUpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5vbk1vdXNlRW50ZXIpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Z1c2luZycsIHRoaXMub25GdXNpbmcpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VMZWF2ZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgIH0sXG5cbiAgICBwbGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbihvbGREYXRhKXtcblxuICAgICAgICBjb25zdCBuZXdEYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICAgIGlmIChuZXdEYXRhLm9wYWNpdHkgIT0gb2xkRGF0YS5vcGFjaXR5ICYmIHRoaXMuYnV0dG9uR2VvbWV0cnkpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uR2VvbWV0cnkuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsIHsgb3BhY2l0eTogbmV3RGF0YS5vcGFjaXR5IH0pO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY3JlYXRlR2VvbWV0cnk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICAgIC8vIGNyZWF0ZXMgZ2VvbWV0cnlcblxuICAgICAgICBsZXQgZ2VvbWV0cnkgPSBudWxsO1xuICAgICAgICBpZiAoZGF0YS5zaGFwZSA9PSAnYm94Jykge1xuICAgICAgICAgICAgZ2VvbWV0cnkgPSB0aGlzLmNyZWF0ZUJ1dHRvbkdlb21ldHJ5KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5zaGFwZSA9PSAnY3lsaW5kZXInKSB7XG4gICAgICAgICAgICBnZW9tZXRyeSA9IHRoaXMuY3JlYXRlQ3lsaW5kZXJHZW9tZXRyeSgpO1xuICAgICAgICB9XG4gICAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpO1xuXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZ2VvbWV0cnkpO1xuXG4gICAgICAgIHJldHVybiBnZW9tZXRyeTtcbiAgICB9LFxuXG4gICAgY3JlYXRlTWF0ZXJpYWxQcm9wZXJ0aWVzOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICBjb25zdCBtYXRlcmlhbFByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgbWF0ZXJpYWxQcm9wZXJ0aWVzLmNvbG9yID0gZGF0YS5jb2xvcjtcblxuICAgICAgICBpZiAoZGF0YS50cmFuc3BhcmVudCl7XG4gICAgICAgICAgICBtYXRlcmlhbFByb3BlcnRpZXMudHJhbnNwYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgbWF0ZXJpYWxQcm9wZXJ0aWVzLm9wYWNpdHkgPSBkYXRhLm9wYWNpdHk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF0ZXJpYWxQcm9wZXJ0aWVzO1xuICAgIH0sXG5cbiAgICBjcmVhdGVBbmltYXRpb25zOiBmdW5jdGlvbigpe1xuICAgICAgICAvLyBhZGRzIGFuaW1hdGlvbiBmb3IgaW50ZXJhY3Rpb25cbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgICBjb25zdCBtb3VzZUVudGVyT3BhY2l0eUFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtYW5pbWF0aW9uJyk7XG4gICAgICAgIG1vdXNlRW50ZXJPcGFjaXR5QW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgnYXR0cmlidXRlJywgJ3VpLWJ1dHRvbi5vcGFjaXR5Jyk7XG4gICAgICAgIG1vdXNlRW50ZXJPcGFjaXR5QW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgnZHVyJywgNDAwKTtcbiAgICAgICAgbW91c2VFbnRlck9wYWNpdHlBbmltYXRpb24uc2V0QXR0cmlidXRlKCdkZWxheScsIDUwKTtcbiAgICAgICAgbW91c2VFbnRlck9wYWNpdHlBbmltYXRpb24uc2V0QXR0cmlidXRlKCdiZWdpbicsICdtb3VzZWVudGVyJyk7XG4gICAgICAgIG1vdXNlRW50ZXJPcGFjaXR5QW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgnZW5kJywgJ21vdXNlbGVhdmUnKTtcbiAgICAgICAgbW91c2VFbnRlck9wYWNpdHlBbmltYXRpb24uc2V0QXR0cmlidXRlKCdmcm9tJywgZGF0YS5vcGFjaXR5KTtcbiAgICAgICAgbW91c2VFbnRlck9wYWNpdHlBbmltYXRpb24uc2V0QXR0cmlidXRlKCd0bycsIDEuMCk7XG5cbiAgICAgICAgY29uc3QgbW91c2VMZWF2ZU9wYWNpdHlBbmltYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWFuaW1hdGlvbicpO1xuICAgICAgICBtb3VzZUxlYXZlT3BhY2l0eUFuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2F0dHJpYnV0ZScsICd1aS1idXR0b24ub3BhY2l0eScpO1xuICAgICAgICBtb3VzZUxlYXZlT3BhY2l0eUFuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2RlbGF5JywgNTApO1xuICAgICAgICBtb3VzZUxlYXZlT3BhY2l0eUFuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2R1cicsIDQwMCk7XG4gICAgICAgIG1vdXNlTGVhdmVPcGFjaXR5QW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgnYmVnaW4nLCAnbW91c2VsZWF2ZScpO1xuICAgICAgICBtb3VzZUxlYXZlT3BhY2l0eUFuaW1hdGlvbi5zZXRBdHRyaWJ1dGUoJ2VuZCcsICdtb3VzZWVudGVyJyk7XG4gICAgICAgIG1vdXNlTGVhdmVPcGFjaXR5QW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgnZnJvbScsIDEuMCk7XG4gICAgICAgIG1vdXNlTGVhdmVPcGFjaXR5QW5pbWF0aW9uLnNldEF0dHJpYnV0ZSgndG8nLCBkYXRhLm9wYWNpdHkpO1xuXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kKG1vdXNlRW50ZXJPcGFjaXR5QW5pbWF0aW9uKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChtb3VzZUxlYXZlT3BhY2l0eUFuaW1hdGlvbik7XG4gICAgfSxcblxuICAgIGNyZWF0ZUJ1dHRvbkdlb21ldHJ5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcbiAgICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdnZW9tZXRyeScsIHtcbiAgICAgICAgICAgICdwcmltaXRpdmUnOiAnYm94JyxcbiAgICAgICAgICAgICd3aWR0aCc6IGRhdGEuc2l6ZSxcbiAgICAgICAgICAgICdoZWlnaHQnOiBkYXRhLnNpemUsXG4gICAgICAgICAgICAnZGVwdGgnOiBkYXRhLmRlcHRoXG4gICAgICAgIH0pO1xuICAgICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ21hdGVyaWFsJywgdGhpcy5jcmVhdGVNYXRlcmlhbFByb3BlcnRpZXMoKSk7XG5cbiAgICAgICAgcmV0dXJuIGdlb21ldHJ5O1xuICAgIH0sXG5cbiAgICBjcmVhdGVDeWxpbmRlckdlb21ldHJ5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcbiAgICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdnZW9tZXRyeScsIHtcbiAgICAgICAgICAgICdwcmltaXRpdmUnOiAnY3lsaW5kZXInLFxuICAgICAgICAgICAgJ3JhZGl1cyc6IGRhdGEuc2l6ZSAvIDIsXG4gICAgICAgICAgICAnaGVpZ2h0JzogZGF0YS5kZXB0aFxuICAgICAgICB9KTtcbiAgICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsIHRoaXMuY3JlYXRlTWF0ZXJpYWxQcm9wZXJ0aWVzKCkpO1xuICAgICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3JvdGF0aW9uJywgJy05MCAwIDAnKTtcblxuICAgICAgICByZXR1cm4gZ2VvbWV0cnk7XG4gICAgfSxcblxuICAgIGNyZWF0ZVJvdGF0aW9uR3JvdXA6IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgY29uc3Qgcm90YXRpb25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtZW50aXR5Jyk7XG4gICAgICAgIGlmIChkYXRhLnNoYXBlID09ICdjeWxpbmRlcicpIHtcbiAgICAgICAgICAgIHJvdGF0aW9uR3JvdXAuc2V0QXR0cmlidXRlKCdyb3RhdGlvbicsIFwiLTkwIDAgMFwiKTtcbiAgICAgICAgICAgIHJvdGF0aW9uR3JvdXAuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICcwICcgKyAoKGRhdGEuZGVwdGggLyAyKSArIDAuMDAxKSArICcgMCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm90YXRpb25Hcm91cC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJzAgMCAnICsgKChkYXRhLmRlcHRoIC8gMikgKyAwLjAwMSkpO1xuICAgICAgICB9XG5cblxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocm90YXRpb25Hcm91cCk7XG5cbiAgICAgICAgcmV0dXJuIHJvdGF0aW9uR3JvdXA7XG4gICAgfSxcblxuICAgIGNyZWF0ZUljb246IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWktaWNvbicpO1xuICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnbmFtZScsICdpY29uLScgKyBkYXRhLmljb24pO1xuICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgZGF0YS5zaXplICogMC44KTtcbiAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgZGF0YS5zaXplICogMC44KTtcblxuICAgICAgICBpZiAoZGF0YS5sYWJlbCAhPSAnJykge1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJzAgMC4wMyAwJyk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgcmV0dXJuIGljb247XG4gICAgfSxcblxuICAgIGNyZWF0ZUxhYmVsOiBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS10ZXh0Jyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLmxhYmVsKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCd0ZXh0Jywgeyd3aWR0aCc6IDAuODV9KTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdhbGlnbicsICdjZW50ZXInKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICcwIC0wLjA3NSAwJyk7XG5cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSxcblxuICAgIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICB0aGlzLmJ1dHRvbkdlb21ldHJ5LnNldEF0dHJpYnV0ZSgnbWF0ZXJpYWwnLCB7Y29sb3I6IGRhdGEuYWN0aXZlQ29sb3J9KTtcbiAgICAgICAgdGhpcy5pY29uLnNldEF0dHJpYnV0ZSgnY29sb3InLCBkYXRhLmRldGFpbEFjdGl2ZUNvbG9yKTtcbiAgICAgICAgdGhpcy5sYWJlbC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgZGF0YS5kZXRhaWxBY3RpdmVDb2xvcik7XG4gICAgfSxcblxuICAgIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICB0aGlzLmJ1dHRvbkdlb21ldHJ5LnNldEF0dHJpYnV0ZSgnbWF0ZXJpYWwnLCB7Y29sb3I6IGRhdGEuY29sb3J9KTtcbiAgICAgICAgdGhpcy5pY29uLnNldEF0dHJpYnV0ZSgnY29sb3InLCBkYXRhLmRldGFpbENvbG9yKTtcbiAgICAgICAgdGhpcy5sYWJlbC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgZGF0YS5kZXRhaWxDb2xvcik7XG4gICAgfSxcblxuICAgIG9uRnVzaW5nOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuYnV0dG9uR2VvbWV0cnkuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsIHtjb2xvcjogZGF0YS5hY3RpdmVDb2xvcn0pO1xuICAgICAgICB0aGlzLmljb24uc2V0QXR0cmlidXRlKCdjb2xvcicsIGRhdGEuZGV0YWlsQWN0aXZlQ29sb3IpO1xuICAgICAgICB0aGlzLmxhYmVsLnNldEF0dHJpYnV0ZSgnY29sb3InLCBkYXRhLmRldGFpbEFjdGl2ZUNvbG9yKTtcbiAgICB9LFxuXG4gICAgb25DbGljazogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICB0aGlzLmJ1dHRvbkdlb21ldHJ5LnNldEF0dHJpYnV0ZSgnbWF0ZXJpYWwnLCB7Y29sb3I6IGRhdGEuc2VsZWN0ZWRDb2xvcn0pO1xuICAgICAgICB0aGlzLmljb24uc2V0QXR0cmlidXRlKCdjb2xvcicsIGRhdGEuZGV0YWlsU2VsZWN0ZWRDb2xvcik7XG4gICAgICAgIHRoaXMubGFiZWwuc2V0QXR0cmlidXRlKCdjb2xvcicsIGRhdGEuZGV0YWlsU2VsZWN0ZWRDb2xvcik7XG4gICAgICAgIHRoaXMuZWwuZW1pdCgnbHVjaWR3ZWIuZXZlbnQudHJpZ2dlcmVkJywge30sIGZhbHNlKTtcbiAgICB9XG5cbn0pOyIsIi8vQGZsb3dcblxuaW1wb3J0IHt0aW1lTGFiZWx9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGltZS11dGlsaXRpZXNcIjtcblxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCd2aWRlby1jb250cm9scycsIHtcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmJpbmRNZXRob2RzKCk7XG5cbiAgICAgICAgLy8gY29uZmlnXG5cbiAgICAgICAgdGhpcy5kZXB0aCA9IDAuMDU7XG4gICAgICAgIHRoaXMud2lkdGggPSAxLjc7XG4gICAgICAgIHRoaXMudnJNb2RlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gdGltZW91dCBwb2ludGVyc1xuXG4gICAgICAgIHRoaXMua2VlcEFsaXZlUG9pbnRlciA9IG51bGw7XG5cbiAgICAgICAgLy8gaW50ZXJ2YWwgcG9pbnRlcnNcblxuICAgICAgICB0aGlzLnNjcm9sbGJhclJheWNhc3RJbnRlcnZhbCA9IFtdO1xuICAgICAgICB0aGlzLm1lbnVSYXljYXN0SW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB0aGlzLnByb2dyZXNzVXBkYXRpbmdJbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgICAgLy8gbWFya3VwIGVsZW1lbnRzIGFyZSBpbml0aWFsaXplZCBhcyBudWxsc1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdG9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmF0b3JCdXR0b24gPSBudWxsO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gbnVsbDtcbiAgICAgICAgdGhpcy5rZWVwQWxpdmVUYXJnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBudWxsO1xuICAgICAgICB0aGlzLnBsYXlCdXR0b24gPSBudWxsO1xuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXBsYXlCdXR0b24gPSBudWxsO1xuICAgICAgICB0aGlzLnZvbHVtZU9uQnV0dG9uID0gbnVsbDtcbiAgICAgICAgdGhpcy52b2x1bWVPZmZCdXR0b24gPSBudWxsO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy50aXRsZSA9IG51bGw7XG4gICAgICAgIHRoaXMudGltZVByb2dyZXNzID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNjcm9sbGJhckJhY2tncm91bmQgPSBudWxsO1xuICAgICAgICB0aGlzLnNjcm9sbGJhclByb2dyZXNzID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJDdXJzb3IgPSBudWxsO1xuICAgICAgICB0aGlzLnNjcm9sbGJhckN1cnNvckxhYmVsID0gbnVsbDtcblxuICAgICAgICAvLyBvbiBpbml0LCB3ZSBzdGFydCBjcmVhdGluZyBuZWNlc3NhcnkgbWFya3VwIGFuZCBhdHRhY2ggZXZlbnRzXG4gICAgICAgIHRoaXMuY3JlYXRlQ29udHJvbHMoKTtcblxuICAgICAgICAvLyBhIHZpZGVvIGNvbnRyb2xsZXIgYWx3YXlzIHN0YXJ0cyBhcyBpbnZpc2libGVcbiAgICAgICAgLy8gdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUnLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIHZpZGVvQ29udHJvbGxlclN5c3RlbTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5zY2VuZUVsLnN5c3RlbXNbJ3ZpZGVvLWNvbnRyb2xsZXInXTtcbiAgICB9LFxuXG4gICAgcGxheTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgICAgIC8vZWwub2JqZWN0M0QubG9va0F0KGVsLnNjZW5lRWwuY2FtZXJhLmVsLm9iamVjdDNELmdldFdvcmxkUG9zaXRpb24oKSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9LFxuXG4gICAgYmluZE1ldGhvZHM6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBiaW5kID0gQUZSQU1FLnV0aWxzLmJpbmQ7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyA9IGJpbmQodGhpcy5hZGRFdmVudExpc3RlbmVycywgdGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBiaW5kKHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMsIHRoaXMpO1xuXG4gICAgICAgIC8vIGNhbGN1bGF0aW9uc1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2Nyb2xsYmFyUmVsYXRpdmVJbnRlcnNlY3Rpb25Qb2ludCA9IGJpbmQodGhpcy5jYWxjdWxhdGVTY3JvbGxiYXJSZWxhdGl2ZUludGVyc2VjdGlvblBvaW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTY3JvbGxiYXJMZWZ0TW9zdFBvc2l0aW9uID0gYmluZCh0aGlzLmNhbGN1bGF0ZVNjcm9sbGJhckxlZnRNb3N0UG9zaXRpb24sIHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZGVvUHJvZ3Jlc3NJbmRpY2F0b3JzID0gYmluZCh0aGlzLnVwZGF0ZVZpZGVvUHJvZ3Jlc3NJbmRpY2F0b3JzLCB0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVWaWRlb1Njcm9sbGJhclByb2dyZXNzID0gYmluZCh0aGlzLnVwZGF0ZVZpZGVvU2Nyb2xsYmFyUHJvZ3Jlc3MsIHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVNZW51ID0gYmluZCh0aGlzLmhpZGVNZW51LCB0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93TWVudSA9IGJpbmQodGhpcy5zaG93TWVudSwgdGhpcyk7XG4gICAgICAgIHRoaXMua2VlcE1lbnVWaXNpYmxlID0gYmluZCh0aGlzLmtlZXBNZW51VmlzaWJsZSwgdGhpcyk7XG4gICAgICAgIHRoaXMudmVyaWZ5T3JpZW50ZWRUb3dhcmRzTWVudSA9IGJpbmQodGhpcy52ZXJpZnlPcmllbnRlZFRvd2FyZHNNZW51LCB0aGlzKTtcblxuICAgICAgICAvLyBjcmVhdGlvbmFsIG1ldGhvZHNcblxuICAgICAgICB0aGlzLmNyZWF0ZUNvbnRyb2xzID0gYmluZCh0aGlzLmNyZWF0ZUNvbnRyb2xzLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVUaW1lUHJvZ3Jlc3MgPSBiaW5kKHRoaXMuY3JlYXRlVGltZVByb2dyZXNzLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTY3JvbGxiYXIgPSBiaW5kKHRoaXMuY3JlYXRlU2Nyb2xsYmFyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTY3JvbGxiYXJDdXJzb3IgPSBiaW5kKHRoaXMuY3JlYXRlU2Nyb2xsYmFyQ3Vyc29yLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVEZXNjcmlwdGlvbiA9IGJpbmQodGhpcy5jcmVhdGVEZXNjcmlwdGlvbiwgdGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlQmFja2dyb3VuZCA9IGJpbmQodGhpcy5jcmVhdGVCYWNrZ3JvdW5kLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVLZWVwQWxpdmVUYXJnZXQgPSBiaW5kKHRoaXMuY3JlYXRlS2VlcEFsaXZlVGFyZ2V0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQYXVzZUJ1dHRvbiA9IGJpbmQodGhpcy5jcmVhdGVQYXVzZUJ1dHRvbiwgdGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlUGxheUJ1dHRvbiA9IGJpbmQodGhpcy5jcmVhdGVQbGF5QnV0dG9uLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVSZXBsYXlCdXR0b24gPSBiaW5kKHRoaXMuY3JlYXRlUmVwbGF5QnV0dG9uLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVUaXRsZSA9IGJpbmQodGhpcy5jcmVhdGVUaXRsZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlVm9sdW1lT2ZmQnV0dG9uID0gYmluZCh0aGlzLmNyZWF0ZVZvbHVtZU9mZkJ1dHRvbiwgdGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlVm9sdW1lT25CdXR0b24gPSBiaW5kKHRoaXMuY3JlYXRlVm9sdW1lT25CdXR0b24sIHRoaXMpO1xuXG4gICAgICAgIC8vIGNvbnRyb2xzIGV2ZW50IGhhbmRsaW5nXG5cbiAgICAgICAgdGhpcy5vbkVudGVyVlIgPSBiaW5kKHRoaXMub25FbnRlclZSLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vbkV4aXRWUiA9IGJpbmQodGhpcy5vbkV4aXRWUiwgdGhpcyk7XG4gICAgICAgIHRoaXMub25LZWVwQWxpdmVFeHBpcmVkID0gYmluZCh0aGlzLm9uS2VlcEFsaXZlRXhwaXJlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMub25TY2VuZUNsaWNrID0gYmluZCh0aGlzLm9uU2NlbmVDbGljaywgdGhpcyk7XG4gICAgICAgIHRoaXMub25BY3RpdmF0ZUJ1dHRvbkNsaWNrZWQgPSBiaW5kKHRoaXMub25BY3RpdmF0ZUJ1dHRvbkNsaWNrZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uUGxheUJ1dHRvbkNsaWNrZWQgPSBiaW5kKHRoaXMub25QbGF5QnV0dG9uQ2xpY2tlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMub25SZXBsYXlCdXR0b25DbGlja2VkID0gYmluZCh0aGlzLm9uUmVwbGF5QnV0dG9uQ2xpY2tlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMub25QYXVzZUJ1dHRvbkNsaWNrZWQgPSBiaW5kKHRoaXMub25QYXVzZUJ1dHRvbkNsaWNrZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uVm9sdW1lT25CdXR0b25DbGlja2VkID0gYmluZCh0aGlzLm9uVm9sdW1lT25CdXR0b25DbGlja2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblZvbHVtZU9mZkJ1dHRvbkNsaWNrZWQgPSBiaW5kKHRoaXMub25Wb2x1bWVPZmZCdXR0b25DbGlja2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblNjcm9sbGJhckNsaWNrZWQgPSBiaW5kKHRoaXMub25TY3JvbGxiYXJDbGlja2VkLCB0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5vblNjcm9sbGJhck1vdXNlT3ZlciA9IGJpbmQodGhpcy5vblNjcm9sbGJhck1vdXNlT3ZlciwgdGhpcyk7XG4gICAgICAgIHRoaXMub25SYXljYXN0SW50ZXJzZWN0aW9uID0gYmluZCh0aGlzLm9uUmF5Y2FzdEludGVyc2VjdGlvbiwgdGhpcyk7XG4gICAgICAgIHRoaXMub25SYXljYXN0SW50ZXJzZWN0aW9uQ2xlYXJlZCA9IGJpbmQodGhpcy5vblJheWNhc3RJbnRlcnNlY3Rpb25DbGVhcmVkLCB0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGxiYXJDdXJzb3IgPSBiaW5kKHRoaXMudXBkYXRlU2Nyb2xsYmFyQ3Vyc29yLCB0aGlzKTtcblxuICAgICAgICAvLyB2aWRlbyBldmVudCBoYW5kbGluZ1xuXG4gICAgICAgIHRoaXMub25WaWRlb0NvbnRyb2xsZXJQbGF5aW5nU3RhcnRlZCA9IGJpbmQodGhpcy5vblZpZGVvUGxheWluZ1N0YXJ0ZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uVmlkZW9Db250cm9sbGVyUGxheWluZ0VuZGVkID0gYmluZCh0aGlzLm9uVmlkZW9Db250cm9sbGVyUGxheWluZ0VuZGVkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblZpZGVvQ29udHJvbGxlclBsYXlpbmdQYXVzZWQgPSBiaW5kKHRoaXMub25WaWRlb0NvbnRyb2xsZXJQbGF5aW5nUGF1c2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblZpZGVvQ29udHJvbGxlclBsYXlpbmcgPSBiaW5kKHRoaXMub25WaWRlb0NvbnRyb2xsZXJQbGF5aW5nLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblZpZGVvQ29udHJvbGxlclZvbHVtZU9uID0gYmluZCh0aGlzLm9uVmlkZW9Db250cm9sbGVyVm9sdW1lT24sIHRoaXMpO1xuICAgICAgICB0aGlzLm9uVmlkZW9Db250cm9sbGVyVm9sdW1lT2ZmID0gYmluZCh0aGlzLm9uVmlkZW9Db250cm9sbGVyVm9sdW1lT2ZmLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyB2aWRlbyBjb250cm9sbGVyIGV2ZW50c1xuXG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBlbC5zY2VuZUVsO1xuXG4gICAgICAgIHNjZW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2x1Y2lkd2ViLnZpZGVvLWNvbnRyb2xsZXIucGxheWluZy1zdGFydGVkJywgdGhpcy5vblZpZGVvUGxheWluZ1N0YXJ0ZWQpO1xuICAgICAgICBzY2VuZS5hZGRFdmVudExpc3RlbmVyKCdsdWNpZHdlYi52aWRlby1jb250cm9sbGVyLnBsYXlpbmctZW5kZWQnLCB0aGlzLm9uVmlkZW9Db250cm9sbGVyUGxheWluZ0VuZGVkKTtcbiAgICAgICAgc2NlbmUuYWRkRXZlbnRMaXN0ZW5lcignbHVjaWR3ZWIudmlkZW8tY29udHJvbGxlci52aWRlby1wYXVzZWQnLCB0aGlzLm9uVmlkZW9Db250cm9sbGVyUGxheWluZ1BhdXNlZCk7XG4gICAgICAgIHNjZW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2x1Y2lkd2ViLnZpZGVvLWNvbnRyb2xsZXIudmlkZW8tcGxheWluZycsIHRoaXMub25WaWRlb0NvbnRyb2xsZXJQbGF5aW5nKTtcbiAgICAgICAgc2NlbmUuYWRkRXZlbnRMaXN0ZW5lcignbHVjaWR3ZWIudmlkZW8tY29udHJvbGxlci52b2x1bWUtb2ZmJywgdGhpcy5vblZpZGVvQ29udHJvbGxlclZvbHVtZU9mZik7XG4gICAgICAgIHNjZW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2x1Y2lkd2ViLnZpZGVvLWNvbnRyb2xsZXIudm9sdW1lLW9uJywgdGhpcy5vblZpZGVvQ29udHJvbGxlclZvbHVtZU9uKTtcbiAgICAgICAgc2NlbmUuYWRkRXZlbnRMaXN0ZW5lcignZW50ZXItdnInLCB0aGlzLm9uRW50ZXJWUik7XG4gICAgICAgIHNjZW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2V4aXQtdnInLCB0aGlzLm9uRXhpdFZSKTtcbiAgICAgICAgLy8gc2NlbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2NlbmVDbGljaywgZmFsc2UpO1xuXG5cbiAgICAgICAgLy8gYnV0dG9uIGNvbnRyb2wgZXZlbnRzXG5cbiAgICAgICAgdGhpcy5hY3RpdmF0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQWN0aXZhdGVCdXR0b25DbGlja2VkKTtcbiAgICAgICAgdGhpcy5wbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblBsYXlCdXR0b25DbGlja2VkKTtcbiAgICAgICAgdGhpcy5yZXBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uUmVwbGF5QnV0dG9uQ2xpY2tlZCk7XG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uUGF1c2VCdXR0b25DbGlja2VkKTtcbiAgICAgICAgdGhpcy52b2x1bWVPbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Wb2x1bWVPbkJ1dHRvbkNsaWNrZWQpO1xuICAgICAgICB0aGlzLnZvbHVtZU9mZkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Wb2x1bWVPZmZCdXR0b25DbGlja2VkKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2Nyb2xsYmFyQ2xpY2tlZCk7XG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMub25TY3JvbGxiYXJNb3VzZU92ZXIpO1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5hZGRFdmVudExpc3RlbmVyKCdyYXljYXN0ZXItaW50ZXJzZWN0ZWQnLCB0aGlzLm9uUmF5Y2FzdEludGVyc2VjdGlvbik7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3JheWNhc3Rlci1pbnRlcnNlY3RlZC1jbGVhcmVkJywgdGhpcy5vblJheWNhc3RJbnRlcnNlY3Rpb25DbGVhcmVkKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyB2aWRlbyBjb250cm9sbGVyIGV2ZW50c1xuXG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBlbC5zY2VuZUVsO1xuXG4gICAgICAgIHNjZW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2x1Y2lkd2ViLnZpZGVvLWNvbnRyb2xsZXIucGxheWluZy1zdGFydGVkJywgdGhpcy5vblZpZGVvUGxheWluZ1N0YXJ0ZWQpO1xuICAgICAgICBzY2VuZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsdWNpZHdlYi52aWRlby1jb250cm9sbGVyLnBsYXlpbmctZW5kZWQnLCB0aGlzLm9uVmlkZW9Db250cm9sbGVyUGxheWluZ0VuZGVkKTtcbiAgICAgICAgc2NlbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbHVjaWR3ZWIudmlkZW8tY29udHJvbGxlci52aWRlby1wYXVzZWQnLCB0aGlzLm9uVmlkZW9Db250cm9sbGVyUGxheWluZ1BhdXNlZCk7XG4gICAgICAgIHNjZW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2x1Y2lkd2ViLnZpZGVvLWNvbnRyb2xsZXIudmlkZW8tcGxheWluZycsIHRoaXMub25WaWRlb0NvbnRyb2xsZXJQbGF5aW5nKTtcbiAgICAgICAgc2NlbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbHVjaWR3ZWIudmlkZW8tY29udHJvbGxlci52b2x1bWUtb2ZmJywgdGhpcy5vblZpZGVvQ29udHJvbGxlclZvbHVtZU9mZik7XG4gICAgICAgIHNjZW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2x1Y2lkd2ViLnZpZGVvLWNvbnRyb2xsZXIudm9sdW1lLW9uJywgdGhpcy5vblZpZGVvQ29udHJvbGxlclZvbHVtZU9uKTtcbiAgICAgICAgc2NlbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW50ZXItdnInLCB0aGlzLm9uRW50ZXJWUik7XG4gICAgICAgIHNjZW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V4aXQtdnInLCB0aGlzLm9uRXhpdFZSKTtcbiAgICAgICAgc2NlbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2NlbmVDbGljaywgZmFsc2UpO1xuXG4gICAgICAgIC8vIGJ1dHRvbiBjb250cm9sIGV2ZW50c1xuXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25QbGF5QnV0dG9uQ2xpY2tlZCk7XG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uUGF1c2VCdXR0b25DbGlja2VkKTtcbiAgICAgICAgdGhpcy52b2x1bWVPbkJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Wb2x1bWVPbkJ1dHRvbkNsaWNrZWQpO1xuICAgICAgICB0aGlzLnZvbHVtZU9mZkJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Wb2x1bWVPZmZCdXR0b25DbGlja2VkKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2Nyb2xsYmFyQ2xpY2tlZCk7XG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsYmFyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMub25TY3JvbGxiYXJNb3VzZU92ZXIpO1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5yZW1vdmVFdmVudExpc3RlbmVyKCdyYXljYXN0ZXItaW50ZXJzZWN0ZWQnLCB0aGlzLm9uUmF5Y2FzdEludGVyc2VjdGlvbik7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JheWNhc3Rlci1pbnRlcnNlY3RlZC1jbGVhcmVkJywgdGhpcy5vblJheWNhc3RJbnRlcnNlY3Rpb25DbGVhcmVkKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9LFxuXG4gICAgb25WaWRlb1BsYXlpbmdTdGFydGVkOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSB0aGlzLnZpZGVvQ29udHJvbGxlclN5c3RlbSgpLnRpdGxlKCk7XG4gICAgICAgIHRoaXMudGl0bGUuc2V0QXR0cmlidXRlKCd0ZXh0Jywge3ZhbHVlOiB0aXRsZUxhYmVsfSk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NVcGRhdGluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVWaWRlb1Byb2dyZXNzSW5kaWNhdG9ycywgMTAwMCAvIDYwKTtcblxuXG4gICAgICAgIC8vIGFkYXB0IFVJIGJ1dHRvbnNcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBhdXNlQnV0dG9uLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywge3g6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnksIHo6IDAuMDAxfSk7XG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywge3g6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnksIHo6IDEwMDB9KTtcbiAgICAgICAgdGhpcy5yZXBsYXlCdXR0b24uc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHt4OiBwb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55LCB6OiAxMDAwfSk7XG4gICAgfSxcblxuICAgIG9uVmlkZW9Db250cm9sbGVyUGxheWluZ0VuZGVkOiBmdW5jdGlvbiAoZXZ0KSB7XG5cbiAgICAgICAgLy8gc3RvcCB1cGRhdGluZyBwcm9ncmVzc1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc1VwZGF0aW5nSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wcm9ncmVzc1VwZGF0aW5nSW50ZXJ2YWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRhcHQgdmlzaWJsZSBidXR0b25zXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wYXVzZUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24uc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHt4OiBwb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55LCB6OiAxMDAwfSk7XG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywge3g6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnksIHo6IDEwMDB9KTtcbiAgICAgICAgdGhpcy5yZXBsYXlCdXR0b24uc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHt4OiBwb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55LCB6OiAwLjAwMX0pO1xuXG4gICAgICAgIC8vIHNob3dzIHRoZSBtZW51IHdoYXRldmVyIHRoZSB0aW1lb3V0XG4gICAgICAgIGlmICh0aGlzLnZyTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVudSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uVmlkZW9Db250cm9sbGVyUGxheWluZ1BhdXNlZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucGF1c2VCdXR0b24uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7eDogcG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSwgejogMTAwMH0pO1xuICAgICAgICB0aGlzLnBsYXlCdXR0b24uc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHt4OiBwb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55LCB6OiAwLjAwMX0pO1xuICAgICAgICB0aGlzLnJlcGxheUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywge3g6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnksIHo6IDEwMDB9KTtcbiAgICB9LFxuXG4gICAgb25WaWRlb0NvbnRyb2xsZXJQbGF5aW5nOiBmdW5jdGlvbiAoZXZ0KSB7XG5cbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IHRoaXMudmlkZW9Db250cm9sbGVyU3lzdGVtKCkudGl0bGUoKTtcbiAgICAgICAgdGhpcy50aXRsZS5zZXRBdHRyaWJ1dGUoJ3RleHQnLCB7dmFsdWU6IHRpdGxlTGFiZWx9KTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc1VwZGF0aW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVZpZGVvUHJvZ3Jlc3NJbmRpY2F0b3JzLCAxMDAwIC8gNjApO1xuXG4gICAgICAgIC8vIGFkYXB0IFVJXG5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBsYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7eDogcG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSwgejogMC4wMDF9KTtcbiAgICAgICAgdGhpcy5wbGF5QnV0dG9uLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7eDogcG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSwgejogMTAwMH0pO1xuICAgICAgICB0aGlzLnJlcGxheUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywge3g6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnksIHo6IDEwMDB9KTtcblxuICAgICAgICAvLyBoaWRlIFVJIGFmdGVyIHRpbWVvdXRcbiAgICAgICAgdGhpcy5rZWVwTWVudVZpc2libGUoMTAwMCk7XG4gICAgfSxcblxuICAgIG9uVmlkZW9Db250cm9sbGVyVm9sdW1lT2ZmOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy52b2x1bWVPbkJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gICAgICAgIHRoaXMudm9sdW1lT25CdXR0b24uc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHt4OiBwb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55LCB6OiAwLjAwMX0pO1xuICAgICAgICB0aGlzLnZvbHVtZU9mZkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywge3g6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnksIHo6IDEwMDB9KTtcbiAgICB9LFxuXG4gICAgb25WaWRlb0NvbnRyb2xsZXJWb2x1bWVPbjogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMudm9sdW1lT25CdXR0b24uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICAgICAgICB0aGlzLnZvbHVtZU9uQnV0dG9uLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7eDogcG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSwgejogMTAwMH0pO1xuICAgICAgICB0aGlzLnZvbHVtZU9mZkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywge3g6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnksIHo6IDAuMDAxfSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZVZpZGVvU2Nyb2xsYmFyUHJvZ3Jlc3M6IGZ1bmN0aW9uIChyZWxhdGl2ZVByb2dyZXNzKSB7XG4gICAgICAgIGNvbnN0IHhPZmZzZXQgPSAtKHRoaXMud2lkdGggLyAyKSAqICgxIC0gcmVsYXRpdmVQcm9ncmVzcyk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aCAqIHJlbGF0aXZlUHJvZ3Jlc3M7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxiYXJQcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ2dlb21ldHJ5Jywge3dpZHRoOiB3aWR0aH0pO1xuICAgICAgICB0aGlzLnNjcm9sbGJhclByb2dyZXNzLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7eDogeE9mZnNldCwgeTogMCwgejogMH0pO1xuICAgIH0sXG5cbiAgICB1cGRhdGVWaWRlb1Byb2dyZXNzSW5kaWNhdG9yczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy52aWRlb0NvbnRyb2xsZXJTeXN0ZW0oKS5kdXJhdGlvbigpO1xuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IHRoaXMudmlkZW9Db250cm9sbGVyU3lzdGVtKCkuY3VycmVudFRpbWUoKTtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVQcm9ncmVzcyA9IGN1cnJlbnRUaW1lIC8gZHVyYXRpb247XG5cbiAgICAgICAgLy8gZHVyYXRpb24gbGFiZWxzXG5cbiAgICAgICAgY29uc3QgZHVyYXRpb25MYWJlbCA9IHRpbWVMYWJlbChkdXJhdGlvbik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lTGFiZWwgPSB0aW1lTGFiZWwoY3VycmVudFRpbWUpO1xuXG4gICAgICAgIHRoaXMudGltZURpc3BsYXlTZXBhcmF0b3Iuc2V0QXR0cmlidXRlKCd0ZXh0Jywge3ZhbHVlOiBjdXJyZW50VGltZUxhYmVsICsgJyAvICcgKyBkdXJhdGlvbkxhYmVsfSk7XG5cbiAgICAgICAgLy8gcHJvZ3Jlc3MgYmFyXG5cbiAgICAgICAgdGhpcy51cGRhdGVWaWRlb1Njcm9sbGJhclByb2dyZXNzKHJlbGF0aXZlUHJvZ3Jlc3MpO1xuICAgIH0sXG5cbiAgICBvblNjZW5lQ2xpY2s6IGZ1bmN0aW9uKGV2dCl7XG4gICAgICAgIGNvbnN0IG1lbnVWaXNpYmlsaXR5ID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Zpc2libGUnKTtcbiAgICAgICAgaWYgKHRoaXMudnJNb2RlICYmIG1lbnVWaXNpYmlsaXR5ID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQWN0aXZhdGVCdXR0b25DbGlja2VkKGV2dCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25FbnRlclZSOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHRoaXMudnJNb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3RpdmF0b3Iuc2V0QXR0cmlidXRlKCd2aXNpYmxlJywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYWN0aXZhdG9yLmNsYXNzTmFtZSA9ICdjbGlja2FibGUnO1xuICAgIH0sXG5cbiAgICBvbkV4aXRWUjogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB0aGlzLnZyTW9kZSA9IGZhbHNlO1xuICAgICAgICAvLyBoaWRlcyBtZW51IGFjdGl2YXRpb24gYnV0dG9uXG4gICAgICAgIHRoaXMuYWN0aXZhdG9yLnNldEF0dHJpYnV0ZSgndmlzaWJsZScsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0b3IuY2xhc3NOYW1lID0gJyc7XG4gICAgICAgIHRoaXMuaGlkZU1lbnUoKTtcbiAgICB9LFxuXG4gICAgc2hvd01lbnU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBtZW51UmF5Y2FzdEludGVydmFsID0gdGhpcy5tZW51UmF5Y2FzdEludGVydmFsO1xuICAgICAgICBjb25zdCBvbGRUaW1lb3V0UG9pbnRlciA9IHRoaXMua2VlcEFsaXZlUG9pbnRlcjtcblxuICAgICAgICAvLyBjbGVhcnMgdGltZW91dCB0byBoaWRlIG1lbnVcbiAgICAgICAgaWYgKG9sZFRpbWVvdXRQb2ludGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQob2xkVGltZW91dFBvaW50ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWFrZSBhbGwgdW5jbGlja2FibGUgZWxlbWVudHMgY2xpY2thYmxlXG4gICAgICAgIGNvbnN0IHVuY2xpY2thYmxlRWxlbWVudHMgPSB0aGlzLmNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmNsaWNrYWJsZScpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuY2xpY2thYmxlRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHVuY2xpY2thYmxlRWxlbWVudHNbaV0uY2xhc3NOYW1lID0gJ2NsaWNrYWJsZSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzaG93IHRoZSBtZW51XG4gICAgICAgIGlmICh0aGlzLnZyTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0b3Iuc2V0QXR0cmlidXRlKCd2aXNpYmxlJywgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0b3Iuc2V0QXR0cmlidXRlKCd2aXNpYmxlJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUnLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgdmVyaWZ5T3JpZW50ZWRUb3dhcmRzTWVudTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHJheWNhc3RlckNvbXBvbmVudCA9IHRoaXMuZWwuc2NlbmVFbC5xdWVyeVNlbGVjdG9yKCcucmF5LWNhc3RlcicpLmNvbXBvbmVudHNbJ3JheWNhc3RlciddO1xuICAgICAgICB2YXIgcmF3SW50ZXJzZWN0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gcmF5Y2FzdGVyQ29tcG9uZW50LnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKFt0aGlzLmtlZXBBbGl2ZVRhcmdldC5vYmplY3QzRF0sIHRydWUpO1xuXG4gICAgICAgIC8vIHZlcmlmeSB3aGV0aGVyIGFuIGludGVyc2VjdGlvbiBpcyBmb3VuZC4uLlxuICAgICAgICBpZiAoaW50ZXJzZWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgaGlkZU1lbnU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWVudVJheWNhc3RJbnRlcnZhbCA9IHRoaXMubWVudVJheWNhc3RJbnRlcnZhbDtcblxuICAgICAgICAvLyBoaWRpbmcgbWVudSBhY3RpdmF0b3IgdmlzdWFsXG5cbiAgICAgICAgaWYgKHRoaXMudnJNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRvci5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdG9yLnNldEF0dHJpYnV0ZSgndmlzaWJsZScsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgndmlzaWJsZScsIGZhbHNlKTtcblxuICAgICAgICAvLyBtYWtlIGFsbCBjbGlja2FibGUgZWxlbWVudHMgdW5jbGlja2FibGVcbiAgICAgICAgY29uc3QgY2xpY2thYmxlRWxlbWVudHMgPSB0aGlzLmNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbGlja2FibGUnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlja2FibGVFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2xpY2thYmxlRWxlbWVudHNbaV0uY2xhc3NOYW1lID0gJ3VuY2xpY2thYmxlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZW51UmF5Y2FzdEludGVydmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobWVudVJheWNhc3RJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLm1lbnVSYXljYXN0SW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGtlZXBNZW51VmlzaWJsZTogZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICAgICAgY29uc3Qgb2xkVGltZW91dFBvaW50ZXIgPSB0aGlzLmtlZXBBbGl2ZVBvaW50ZXI7XG4gICAgICAgIGlmIChvbGRUaW1lb3V0UG9pbnRlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG9sZFRpbWVvdXRQb2ludGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdhaXQgdW50aWwgdGltZW91dCB0byBoaWRlIG1lbnVcbiAgICAgICAgdGhpcy5rZWVwQWxpdmVQb2ludGVyID0gc2V0VGltZW91dCh0aGlzLm9uS2VlcEFsaXZlRXhwaXJlZCwgdGltZW91dCk7XG4gICAgfSxcblxuICAgIG9uS2VlcEFsaXZlRXhwaXJlZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBjb25zdCBvcmllbnRlZFRvd2FyZHNNZW51ID0gdGhpcy52ZXJpZnlPcmllbnRlZFRvd2FyZHNNZW51KCk7XG4gICAgICAgIGlmIChvcmllbnRlZFRvd2FyZHNNZW51KSB7XG4gICAgICAgICAgICB0aGlzLmtlZXBNZW51VmlzaWJsZSg0MDAwKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIGFsbCBjbGlja2FibGUgZWxlbWVudHMgYXJlIGNoYW5nZWQgdG8gdW5jbGlja2FibGVcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrYWJsZUVsZW1lbnRzID0gdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yQWxsKCcuY2xpY2thYmxlJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaWNrYWJsZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2xpY2thYmxlRWxlbWVudHNbaV0uY2xhc3NOYW1lID0gJ3VuY2xpY2thYmxlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5rZWVwQWxpdmVQb2ludGVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd2aXNpYmxlJywgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMudnJNb2RlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRvci5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRvci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NsaWNrYWJsZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRvci5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0b3Iuc2V0QXR0cmlidXRlKCdjbGFzcycsICd1bmNsaWNrYWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uQWN0aXZhdGVCdXR0b25DbGlja2VkOiBmdW5jdGlvbiAoZXZ0KSB7XG5cbiAgICAgICAgLy8gbWFrZSBhbGwgbmVjZXNzYXJ5IHVuY2xpY2thYmxlIGVsZW1lbnRzIGNsaWNrYWJsZVxuICAgICAgICBjb25zdCB1bmNsaWNrYWJsZUVsZW1lbnRzID0gdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yQWxsKCcudW5jbGlja2FibGUnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bmNsaWNrYWJsZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB1bmNsaWNrYWJsZUVsZW1lbnRzW2ldLmNsYXNzTmFtZSA9ICdjbGlja2FibGUnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIGFjdGl2YXRvciBidXR0b25cbiAgICAgICAgdGhpcy5hY3RpdmF0b3Iuc2V0QXR0cmlidXRlKCd2aXNpYmxlJywgZmFsc2UpO1xuXG5cbiAgICAgICAgdGhpcy5hY3RpdmF0b3Iuc2V0QXR0cmlidXRlKCdjbGFzcycsICd1bmNsaWNrYWJsZScpO1xuXG4gICAgICAgIC8vIHBvc2l0aW9uIGFuZCBzaG93IGNvbnRyb2xzXG4gICAgICAgIGNvbnN0IHByZXZpb3VzQ29udHJvbHNSb3RhdGlvbiA9IHRoaXMuZWwub2JqZWN0M0QuZ2V0V29ybGRSb3RhdGlvbigpO1xuICAgICAgICBjb25zdCBjdXJyZW50Q2FtZXJhUm90YXRpb24gPSB0aGlzLmVsLnNjZW5lRWwuY2FtZXJhLmVsLm9iamVjdDNELmdldFdvcmxkUm90YXRpb24oKTtcbiAgICAgICAgdGhpcy5lbC5vYmplY3QzRC5zZXRSb3RhdGlvbkZyb21FdWxlcihuZXcgVEhSRUUuRXVsZXIoXG4gICAgICAgICAgICBwcmV2aW91c0NvbnRyb2xzUm90YXRpb24ueCxcbiAgICAgICAgICAgIGN1cnJlbnRDYW1lcmFSb3RhdGlvbi55LFxuICAgICAgICAgICAgcHJldmlvdXNDb250cm9sc1JvdGF0aW9uLnosXG4gICAgICAgICAgICBwcmV2aW91c0NvbnRyb2xzUm90YXRpb24ub3JkZXJcbiAgICAgICAgKSk7XG4gICAgICAgIC8vIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdyb3RhdGlvbicsICk7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd2aXNpYmxlJywgdHJ1ZSk7XG4gICAgICAgIHRoaXMua2VlcE1lbnVWaXNpYmxlKDQwMDApO1xuICAgIH0sXG5cbiAgICBvblBsYXlCdXR0b25DbGlja2VkOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHRoaXMudmlkZW9Db250cm9sbGVyU3lzdGVtKCkub25WaWRlb0NvbnRyb2xzUGxheUNsaWNrZWQoKTtcbiAgICB9LFxuXG4gICAgb25SZXBsYXlCdXR0b25DbGlja2VkOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHRoaXMudmlkZW9Db250cm9sbGVyU3lzdGVtKCkub25WaWRlb0NvbnRyb2xzUmVwbGF5Q2xpY2tlZCgpO1xuICAgIH0sXG5cbiAgICBvblBhdXNlQnV0dG9uQ2xpY2tlZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB0aGlzLnZpZGVvQ29udHJvbGxlclN5c3RlbSgpLm9uVmlkZW9Db250cm9sc1BhdXNlQ2xpY2tlZCgpO1xuICAgIH0sXG5cbiAgICBvblZvbHVtZU9uQnV0dG9uQ2xpY2tlZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB0aGlzLnZpZGVvQ29udHJvbGxlclN5c3RlbSgpLm9uVmlkZW9Db250cm9sc1ZvbHVtZU9uQ2xpY2tlZCgpO1xuICAgIH0sXG5cbiAgICBvblZvbHVtZU9mZkJ1dHRvbkNsaWNrZWQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdGhpcy52aWRlb0NvbnRyb2xsZXJTeXN0ZW0oKS5vblZpZGVvQ29udHJvbHNWb2x1bWVPZmZDbGlja2VkKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGxlZnRtb3N0IHBvc2l0aW9uIGZvciB0aGUgc2Nyb2xsYmFyIGluIHdvcmxkIGNvb3JkaW5hdGVzXG4gICAgICogQHJldHVybnMge1ZlY3RvcjN9XG4gICAgICovXG4gICAgY2FsY3VsYXRlU2Nyb2xsYmFyTGVmdE1vc3RQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGxvY2FsUG9zaXRpb246IFZlY3RvcjMgPSB0aGlzLnNjcm9sbGJhckJhY2tncm91bmQub2JqZWN0M0QucG9zaXRpb247XG4gICAgICAgIGNvbnN0IGxvY2FsU3RhcnRQb3NpdGlvbjogVmVjdG9yMyA9IG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgICAgICAgbG9jYWxQb3NpdGlvbi54IC0gKHRoaXMud2lkdGggLyAyKSwgbG9jYWxQb3NpdGlvbi55LCBsb2NhbFBvc2l0aW9uLnpcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsYmFyTGVmdE1vc3RQb3NpdGlvbjogVmVjdG9yMyA9IHRoaXMuc2Nyb2xsYmFyQmFja2dyb3VuZC5vYmplY3QzRC5sb2NhbFRvV29ybGQobG9jYWxTdGFydFBvc2l0aW9uKTtcblxuICAgICAgICByZXR1cm4gbG9jYWxTdGFydFBvc2l0aW9uO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIb3cgZmFyIG9uIHRoZSBiYWNrZ3JvdW5kIGJhciBkaWQgd2UgaW50ZXJzZWN0PyAgMC4wIDw9IHggPD0gMS4wXG4gICAgICogQHBhcmFtIGludGVyc2VjdGlvblxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgY2FsY3VsYXRlU2Nyb2xsYmFyUmVsYXRpdmVJbnRlcnNlY3Rpb25Qb2ludDogZnVuY3Rpb24gKGludGVyc2VjdGlvbjogVmVjdG9yMykge1xuICAgICAgICBjb25zdCBsZWZ0TW9zdFBvc2l0aW9uID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxiYXJMZWZ0TW9zdFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uT2ZJbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb24ueCAtIGxlZnRNb3N0UG9zaXRpb24ueDtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBsZWZ0TW9zdFBvc2l0aW9uLmRpc3RhbmNlVG8oaW50ZXJzZWN0aW9uKTtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVEaXN0YW5jZSA9IGRpc3RhbmNlIC8gdGhpcy53aWR0aDtcblxuICAgICAgICByZXR1cm4gcmVsYXRpdmVEaXN0YW5jZTtcbiAgICB9LFxuXG4gICAgb25TY3JvbGxiYXJDbGlja2VkOiBmdW5jdGlvbiAoZXZ0KSB7XG5cbiAgICAgICAgLy8gd2hhdCByZWxhdGl2ZSBwb2ludCBpbiB0aGUgdmlkZW8gZG8gd2UgbmVlZD9cblxuICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb246IFZlY3RvcjMgPSBldnQuZGV0YWlsLmludGVyc2VjdGlvbi5wb2ludDtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVOZXdQcm9ncmVzczogbnVtYmVyID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxiYXJSZWxhdGl2ZUludGVyc2VjdGlvblBvaW50KGludGVyc2VjdGlvbik7XG5cbiAgICAgICAgLy8gcmVxdWVzdCBjaGFuZ2Ugb2YgdGltZSBpbiB0aGUgY29udHJvbGxlcnNcblxuICAgICAgICBjb25zdCBuZXdUaW1lID0gTWF0aC5mbG9vcihyZWxhdGl2ZU5ld1Byb2dyZXNzICogdGhpcy52aWRlb0NvbnRyb2xsZXJTeXN0ZW0oKS5kdXJhdGlvbigpKTtcbiAgICAgICAgdGhpcy51cGRhdGVWaWRlb1Njcm9sbGJhclByb2dyZXNzKHJlbGF0aXZlTmV3UHJvZ3Jlc3MpO1xuICAgICAgICB0aGlzLnZpZGVvQ29udHJvbGxlclN5c3RlbSgpLmNoYW5nZVRpbWUobmV3VGltZSk7XG4gICAgfSxcblxuICAgIG9uUmF5Y2FzdEludGVyc2VjdGlvbjogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB0aGlzLnNjcm9sbGJhclJheWNhc3RJbnRlcnZhbC5wdXNoKHNldEludGVydmFsKHRoaXMudXBkYXRlU2Nyb2xsYmFyQ3Vyc29yLCAxMCkpO1xuICAgIH0sXG5cbiAgICBvblJheWNhc3RJbnRlcnNlY3Rpb25DbGVhcmVkOiBmdW5jdGlvbiAoZXZ0KSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYmFyUmF5Y2FzdEludGVydmFsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGlkVG9DbGVhciA9IHRoaXMuc2Nyb2xsYmFyUmF5Y2FzdEludGVydmFsLnNoaWZ0KCk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGlkVG9DbGVhcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGxiYXJSYXljYXN0SW50ZXJ2YWwubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsYmFyQ3Vyc29yLnNldEF0dHJpYnV0ZSgndmlzaWJsZScsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVTY3JvbGxiYXJDdXJzb3I6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gdGhpcy5lbC5zY2VuZUVsO1xuICAgICAgICBjb25zdCByYXljYXN0ZXJDb21wb25lbnQgPSBzY2VuZS5xdWVyeVNlbGVjdG9yKCcucmF5LWNhc3RlcicpLmNvbXBvbmVudHNbJ3JheWNhc3RlciddO1xuXG4gICAgICAgIC8vIG1hbnVhbGx5IGludGVyc2VjdCB0aGUgcmF5Y2FzdGVyIHdpdGggdGhlIHNjcm9sbGJhciBiYWNrZ3JvdW5kIGNvbnRpbnVvdXNseVxuXG4gICAgICAgIHZhciByYXdJbnRlcnNlY3Rpb25zID0gW107XG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSByYXljYXN0ZXJDb21wb25lbnQucmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoW3RoaXMuc2Nyb2xsYmFyQmFja2dyb3VuZC5vYmplY3QzRF0sIHRydWUpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgY3Vyc29yIHBvc2l0aW9uXG5cbiAgICAgICAgaWYgKGludGVyc2VjdGlvbnMubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAvLyBjaGFuZ2UgdGhlIGN1cnNvciBwb3NpdGlvblxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3Npb24gPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbGJhclJlbGF0aXZlSW50ZXJzZWN0aW9uUG9pbnQoaW50ZXJzZWN0aW9uc1swXS5wb2ludCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGJhckN1cnNvci5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUnLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsYmFyQ3Vyc29yLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7XG4gICAgICAgICAgICAgICAgeDogKHRoaXMud2lkdGggKiBwcm9ncmVzc2lvbikgLSAodGhpcy53aWR0aCAvIDIpLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgejogMFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjdXJzb3IgbGFiZWxcbiAgICAgICAgICAgIGNvbnN0IG5ld1RpbWUgPSBNYXRoLmZsb29yKHRoaXMudmlkZW9Db250cm9sbGVyU3lzdGVtKCkuZHVyYXRpb24oKSAqIHByb2dyZXNzaW9uKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RpbWVNaW51dGVzID0gTWF0aC5mbG9vcihuZXdUaW1lIC8gNjApO1xuICAgICAgICAgICAgY29uc3QgbmV3VGltZVNlY29uZHMgPSBuZXdUaW1lICUgNjA7XG4gICAgICAgICAgICBjb25zdCBuZXdUaW1lTWludXRlc1N0ciA9IChcIjAwXCIgKyBuZXdUaW1lTWludXRlcykuc2xpY2UoLTIpO1xuICAgICAgICAgICAgY29uc3QgbmV3VGltZVNlY29uZHNTdHIgPSAoXCIwMFwiICsgbmV3VGltZVNlY29uZHMpLnNsaWNlKC0yKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RpbWVMYWJlbCA9IGAke25ld1RpbWVNaW51dGVzU3RyfToke25ld1RpbWVTZWNvbmRzU3RyfWA7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGJhckN1cnNvckxhYmVsLnNldEF0dHJpYnV0ZSgndGV4dCcsIHt2YWx1ZTogdGltZUxhYmVsKG5ld1RpbWUpfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlQ29udHJvbHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgndmlzaWJsZScsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLmNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcbiAgICAgICAgdGhpcy5jb250cm9scy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJzAgMCAtMS41Jyk7XG4gICAgICAgIHRoaXMuY29udHJvbHMuc2V0QXR0cmlidXRlKCdyb3RhdGlvbicsICcwIDAgMCcpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbHMpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdG9yID0gdGhpcy5jcmVhdGVBY3RpdmF0b3IoZWwuc2NlbmVFbCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuY3JlYXRlQmFja2dyb3VuZCh0aGlzLmNvbnRyb2xzKTtcbiAgICAgICAgdGhpcy5rZWVwQWxpdmVUYXJnZXQgPSB0aGlzLmNyZWF0ZUtlZXBBbGl2ZVRhcmdldCh0aGlzLmNvbnRyb2xzKTtcbiAgICAgICAgdGhpcy5wbGF5QnV0dG9uID0gdGhpcy5jcmVhdGVQbGF5QnV0dG9uKHRoaXMuYmFja2dyb3VuZCk7XG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24gPSB0aGlzLmNyZWF0ZVBhdXNlQnV0dG9uKHRoaXMuYmFja2dyb3VuZCk7XG4gICAgICAgIHRoaXMucmVwbGF5QnV0dG9uID0gdGhpcy5jcmVhdGVSZXBsYXlCdXR0b24odGhpcy5iYWNrZ3JvdW5kKTtcbiAgICAgICAgdGhpcy52b2x1bWVPbkJ1dHRvbiA9IHRoaXMuY3JlYXRlVm9sdW1lT25CdXR0b24odGhpcy5iYWNrZ3JvdW5kKTtcbiAgICAgICAgdGhpcy52b2x1bWVPZmZCdXR0b24gPSB0aGlzLmNyZWF0ZVZvbHVtZU9mZkJ1dHRvbih0aGlzLmJhY2tncm91bmQpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy5jcmVhdGVEZXNjcmlwdGlvbih0aGlzLmJhY2tncm91bmQpO1xuICAgICAgICB0aGlzLnNjcm9sbGJhciA9IHRoaXMuY3JlYXRlU2Nyb2xsYmFyKHRoaXMuY29udHJvbHMpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVBY3RpdmF0b3I6IGZ1bmN0aW9uIChwYXJlbnRFbCkge1xuXG4gICAgICAgIC8vIGNyZWF0ZXMgcm90YXRpb25hbCBjb250cm9sXG4gICAgICAgIHRoaXMuYWN0aXZhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0b3Iuc2V0QXR0cmlidXRlKCdyb3RhdGlvbicsICc1MCAwIDAnKVxuICAgICAgICB0aGlzLmFjdGl2YXRvci5zZXRBdHRyaWJ1dGUoJ3RyYWNrLXBvc2l0aW9uJywge3RhcmdldDogJyNtYWluY2FtZXJhJ30pO1xuICAgICAgICB0aGlzLmFjdGl2YXRvci5zZXRBdHRyaWJ1dGUoJ3RyYWNrLXJvdGF0aW9uJywge3RhcmdldDogJyNtYWluY2FtZXJhJywgeDogZmFsc2UsIHo6IGZhbHNlfSk7XG4gICAgICAgIHRoaXMuYWN0aXZhdG9yLnNldEF0dHJpYnV0ZSgndmlzaWJsZScsIGZhbHNlKTtcblxuICAgICAgICAvLyBjcmVhdGVzIGVudGl0eVxuICAgICAgICB0aGlzLmFjdGl2YXRvckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VpLWJ1dHRvbicpO1xuICAgICAgICB0aGlzLmFjdGl2YXRvckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3NoYXBlJywgJ2N5bGluZGVyJyk7XG4gICAgICAgIHRoaXMuYWN0aXZhdG9yQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtZW51Jyk7XG4gICAgICAgIHRoaXMuYWN0aXZhdG9yQnV0dG9uLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnMCAtMS4yIDAnKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0b3JCdXR0b24uc2V0QXR0cmlidXRlKCdyb3RhdGlvbicsICc5MCAwIDAnKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0b3JCdXR0b24uc2V0QXR0cmlidXRlKCdkZXB0aCcsICcwLjAxJyk7XG4gICAgICAgIHRoaXMuYWN0aXZhdG9yQnV0dG9uLnNldEF0dHJpYnV0ZSgnc2l6ZScsIDAuMSk7XG4gICAgICAgIHRoaXMuYWN0aXZhdG9yQnV0dG9uLnNldEF0dHJpYnV0ZSgndmlzaWJsZScsIHRydWUpO1xuICAgICAgICB0aGlzLmFjdGl2YXRvckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RyYW5zcGFyZW50JywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYWN0aXZhdG9yQnV0dG9uLnNldEF0dHJpYnV0ZSgnb3BhY2l0eScsIDAuNCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdG9yQnV0dG9uLnNldEF0dHJpYnV0ZSgnY29sb3InLCAnIzMzMycpO1xuICAgICAgICB0aGlzLmFjdGl2YXRvckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZS1jb2xvcicsICcjMzMzJyk7XG5cbiAgICAgICAgLy8gc2F2ZSB0byBkb2N1bWVudFxuICAgICAgICB0aGlzLmFjdGl2YXRvci5hcHBlbmRDaGlsZCh0aGlzLmFjdGl2YXRvckJ1dHRvbik7XG4gICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKHRoaXMuYWN0aXZhdG9yKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmF0b3I7XG4gICAgfSxcblxuICAgIGNyZWF0ZUJhY2tncm91bmQ6IGZ1bmN0aW9uIChwYXJlbnRFbCkge1xuXG4gICAgICAgIC8vIGNyZWF0ZSBidXR0b24gYmFja2dyb3VuZFxuXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtZW50aXR5Jyk7XG4gICAgICAgIGJhY2tncm91bmRFbC5zZXRBdHRyaWJ1dGUoJ2dlb21ldHJ5JywgJ3ByaW1pdGl2ZTogYm94OyBjb2xvcjogIzMzMzsgZGVwdGg6ICcgKyB0aGlzLmRlcHRoICsgJzsgd2lkdGg6IDEuNjk1OyBoZWlnaHQ6IDAuMjk5NTsnKTtcbiAgICAgICAgYmFja2dyb3VuZEVsLnNldEF0dHJpYnV0ZSgnbWF0ZXJpYWwnLCAnY29sb3I6ICMzMzM7Jyk7XG5cbiAgICAgICAgLy8gY3JlYXRlcyBhY3RpdmF0b3IgaW52aXNpYmxlIGVsZW1lbnRcblxuICAgICAgICBjb25zdCBrZWVwQWxpdmVCb3hFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtZW50aXR5Jyk7XG4gICAgICAgIGtlZXBBbGl2ZUJveEVsLnNldEF0dHJpYnV0ZSgnZ2VvbWV0cnknLCAncHJpbWl0aXZlOiBib3g7IGNvbG9yOiAjMzMzOyBkZXB0aDogJyArIHRoaXMuZGVwdGggKyAnOyB3aWR0aDogMS42OTU7IGhlaWdodDogMC4yOTk1OycpO1xuICAgICAgICBrZWVwQWxpdmVCb3hFbC5zZXRBdHRyaWJ1dGUoJ21hdGVyaWFsJywgJ2NvbG9yOiBub25lOyBvcGFjaXR5OiAwJyk7XG4gICAgICAgIGtlZXBBbGl2ZUJveEVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnMCAwLjAyNSAtMC4wNScpO1xuICAgICAgICBrZWVwQWxpdmVCb3hFbC5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgJzEuMSAxLjcgMCcpO1xuXG4gICAgICAgIC8vIGluc2VydCBpbiBkb2N1bWVudFxuICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kRWwpO1xuICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChrZWVwQWxpdmVCb3hFbCk7XG5cblxuICAgICAgICByZXR1cm4gYmFja2dyb3VuZEVsO1xuICAgIH0sXG5cbiAgICBjcmVhdGVLZWVwQWxpdmVUYXJnZXQ6IGZ1bmN0aW9uIChwYXJlbnRFbCkge1xuXG4gICAgICAgIC8vIGNyZWF0ZXMgYWN0aXZhdG9yIGludmlzaWJsZSBlbGVtZW50XG5cbiAgICAgICAgY29uc3Qga2VlcEFsaXZlQm94RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWVudGl0eScpO1xuICAgICAgICBrZWVwQWxpdmVCb3hFbC5zZXRBdHRyaWJ1dGUoJ2dlb21ldHJ5JywgJ3ByaW1pdGl2ZTogYm94OyBjb2xvcjogIzMzMzsgZGVwdGg6ICcgKyB0aGlzLmRlcHRoICsgJzsgd2lkdGg6IDEuNjk1OyBoZWlnaHQ6IDAuMjk5NTsnKTtcbiAgICAgICAga2VlcEFsaXZlQm94RWwuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsICdjb2xvcjogbm9uZTsgb3BhY2l0eTogMCcpO1xuICAgICAgICBrZWVwQWxpdmVCb3hFbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJzAgMC4wMjUgLTAuMDUnKTtcbiAgICAgICAga2VlcEFsaXZlQm94RWwuc2V0QXR0cmlidXRlKCdzY2FsZScsICcxLjEgMS43IDAnKTtcblxuICAgICAgICAvLyBpbnNlcnQgaW4gZG9jdW1lbnRcbiAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQoa2VlcEFsaXZlQm94RWwpO1xuXG5cbiAgICAgICAgcmV0dXJuIGtlZXBBbGl2ZUJveEVsO1xuICAgIH0sXG5cbiAgICBjcmVhdGVQbGF5QnV0dG9uOiBmdW5jdGlvbiAocGFyZW50RWwpIHtcblxuICAgICAgICAvLyBjcmVhdGUgZW50aXR5XG4gICAgICAgIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1aS1idXR0b24nKTtcbiAgICAgICAgcGxheUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAncGxheScpO1xuICAgICAgICBwbGF5QnV0dG9uLmNsYXNzTmFtZSA9ICdjbGlja2FibGUnO1xuICAgICAgICBwbGF5QnV0dG9uLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnLTAuNyAwIDAuMDAxJyk7XG5cbiAgICAgICAgLy8gaW5zZXJ0IGluIGRvY3VtZW50XG4gICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKHBsYXlCdXR0b24pO1xuXG5cbiAgICAgICAgcmV0dXJuIHBsYXlCdXR0b247XG4gICAgfSxcblxuICAgIGNyZWF0ZVBhdXNlQnV0dG9uOiBmdW5jdGlvbiAocGFyZW50RWwpIHtcblxuICAgICAgICAvLyBjcmVhdGUgZW50aXR5XG4gICAgICAgIGNvbnN0IHBhdXNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWktYnV0dG9uJyk7XG4gICAgICAgIHBhdXNlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWNvbicsICdwYXVzZScpO1xuICAgICAgICBwYXVzZUJ1dHRvbi5jbGFzc05hbWUgPSAnY2xpY2thYmxlJztcbiAgICAgICAgcGF1c2VCdXR0b24uc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICctMC43IDAgMTAwMCcpO1xuXG4gICAgICAgIC8vIGluc2VydCBpbiBkb2N1bWVudFxuICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChwYXVzZUJ1dHRvbik7XG5cblxuICAgICAgICByZXR1cm4gcGF1c2VCdXR0b247XG4gICAgfSxcblxuICAgIGNyZWF0ZVJlcGxheUJ1dHRvbjogZnVuY3Rpb24gKHBhcmVudEVsKSB7XG5cbiAgICAgICAgLy8gY3JlYXRlIGVudGl0eVxuICAgICAgICBjb25zdCByZXBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1aS1idXR0b24nKTtcbiAgICAgICAgcmVwbGF5QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWNvbicsICdwbGF5Jyk7XG4gICAgICAgIHJlcGxheUJ1dHRvbi5jbGFzc05hbWUgPSAnY2xpY2thYmxlJztcbiAgICAgICAgcmVwbGF5QnV0dG9uLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnLTAuNyAwIDEwMDAnKTtcblxuICAgICAgICAvLyBpbnNlcnQgaW4gZG9jdW1lbnRcbiAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQocmVwbGF5QnV0dG9uKTtcblxuXG4gICAgICAgIHJldHVybiByZXBsYXlCdXR0b247XG4gICAgfSxcblxuICAgIGNyZWF0ZVZvbHVtZU9uQnV0dG9uOiBmdW5jdGlvbiAocGFyZW50RWwpIHtcblxuICAgICAgICAvLyBjcmVhdGUgZW50aXR5XG4gICAgICAgIGNvbnN0IHZvbHVtZU9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWktYnV0dG9uJyk7XG4gICAgICAgIHZvbHVtZU9uQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtdXRlJyk7XG4gICAgICAgIHZvbHVtZU9uQnV0dG9uLmNsYXNzTmFtZSA9ICdjbGlja2FibGUnO1xuICAgICAgICB2b2x1bWVPbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJy0wLjQgMCAxMDAwJyk7XG5cbiAgICAgICAgLy8gaW5zZXJ0IGluIGRvY3VtZW50XG4gICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKHZvbHVtZU9uQnV0dG9uKTtcblxuXG4gICAgICAgIHJldHVybiB2b2x1bWVPbkJ1dHRvbjtcbiAgICB9LFxuXG4gICAgY3JlYXRlVm9sdW1lT2ZmQnV0dG9uOiBmdW5jdGlvbiAocGFyZW50RWwpIHtcblxuICAgICAgICAvLyBjcmVhdGUgZW50aXR5XG4gICAgICAgIGNvbnN0IHZvbHVtZU9mZkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VpLWJ1dHRvbicpO1xuICAgICAgICB2b2x1bWVPZmZCdXR0b24uc2V0QXR0cmlidXRlKCdpY29uJywgJ3ZvbHVtZScpO1xuICAgICAgICB2b2x1bWVPZmZCdXR0b24uY2xhc3NOYW1lID0gJ2NsaWNrYWJsZSc7XG4gICAgICAgIHZvbHVtZU9mZkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJy0wLjQgMCAwLjAwMScpO1xuXG4gICAgICAgIC8vIGluc2VydCBpbiBkb2N1bWVudFxuICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh2b2x1bWVPZmZCdXR0b24pO1xuXG5cbiAgICAgICAgcmV0dXJuIHZvbHVtZU9mZkJ1dHRvbjtcbiAgICB9LFxuXG4gICAgY3JlYXRlVGl0bGU6IGZ1bmN0aW9uIChwYXJlbnRFbCkge1xuXG4gICAgICAgIC8vIGNyZWF0ZXMgZW50aXR5XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS10ZXh0Jyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnT2xkIGNpdHkgY2VudGVyJyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnYWxpZ24nLCAnbGVmdCcpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgMik7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnMCAwLjA1IDAnKTtcblxuICAgICAgICAvLyBpbnNlcnQgaW4gZG9jdW1lbnRcbiAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9LFxuXG4gICAgY3JlYXRlVGltZVByb2dyZXNzOiBmdW5jdGlvbiAocGFyZW50RWwpIHtcblxuICAgICAgICAvLyBjcmVhdGVzIGVudGl0eVxuICAgICAgICBjb25zdCB0aW1lUHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLXRleHQnKTtcbiAgICAgICAgdGltZVByb2dyZXNzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnMDA6MzQgfCAwMDo1NCcpO1xuICAgICAgICB0aW1lUHJvZ3Jlc3Muc2V0QXR0cmlidXRlKCdhbGlnbicsICdsZWZ0Jyk7XG4gICAgICAgIHRpbWVQcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgMS42KTtcbiAgICAgICAgdGltZVByb2dyZXNzLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnMCAtMC4wNSAwJyk7XG4gICAgICAgIHRoaXMudGltZVByb2dyZXNzTGFiZWwgPSB0aW1lUHJvZ3Jlc3M7XG5cbiAgICAgICAgLy8gaW5zZXJ0IGluIGRvY3VtZW50XG4gICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKHRpbWVQcm9ncmVzcyk7XG5cbiAgICAgICAgcmV0dXJuIHRpbWVQcm9ncmVzcztcbiAgICB9LFxuXG4gICAgY3JlYXRlRGVzY3JpcHRpb246IGZ1bmN0aW9uIChwYXJlbnRFbCkge1xuXG4gICAgICAgIC8vIGNyZWF0ZSBlbnRpdHlcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtZW50aXR5Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICctMC4xNSAwIDAuMDUxJyk7XG5cbiAgICAgICAgLy8gY3JlYXRlcyBjaGlsZHJlblxuICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5jcmVhdGVUaXRsZShkZXNjcmlwdGlvbkVsKTtcbiAgICAgICAgdGhpcy50aW1lUHJvZ3Jlc3MgPSB0aGlzLmNyZWF0ZVRpbWVQcm9ncmVzcyhkZXNjcmlwdGlvbkVsKTtcblxuICAgICAgICAvLyBpbnNlcnQgaXQgaW4gZG9jdW1lbnRcbiAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbCk7XG5cblxuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb25FbDtcbiAgICB9LFxuXG4gICAgY3JlYXRlU2Nyb2xsYmFyOiBmdW5jdGlvbiAocGFyZW50RWwpIHtcblxuICAgICAgICAvLyBjcmVhdGVzIGVudGl0aWVzXG4gICAgICAgIGNvbnN0IHNjcm9sbGJhckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcbiAgICAgICAgc2Nyb2xsYmFyRWwuY2xhc3NOYW1lID0gJ2NsaWNrYWJsZSc7XG4gICAgICAgIHNjcm9sbGJhckVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnMCAwLjE5MCAwJyk7XG5cbiAgICAgICAgLy8gY3JlYXRlcyBjaGlsZHJlblxuXG4gICAgICAgIGNvbnN0IHNjcm9sbGJhckJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWVudGl0eScpO1xuICAgICAgICBzY3JvbGxiYXJCYWNrZ3JvdW5kLmNsYXNzTmFtZSA9ICdzY3JvbGxiYXItYmFja2dyb3VuZCc7XG4gICAgICAgIHNjcm9sbGJhckJhY2tncm91bmQuc2V0QXR0cmlidXRlKCdnZW9tZXRyeScsICdwcmltaXRpdmU6IGJveDsgZGVwdGg6ICcgKyAodGhpcy5kZXB0aCAtIDAuMDA1KSArICc7IHdpZHRoOiAnICsgKHRoaXMud2lkdGggLSAwLjAxKSArICc7IGhlaWdodDogMC4wNDk1OycpO1xuICAgICAgICBzY3JvbGxiYXJCYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnbWF0ZXJpYWwnLCAnY29sb3I6ICM0ODQ4NDg7Jyk7XG4gICAgICAgIHNjcm9sbGJhckVsLmFwcGVuZENoaWxkKHNjcm9sbGJhckJhY2tncm91bmQpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyQmFja2dyb3VuZCA9IHNjcm9sbGJhckJhY2tncm91bmQ7XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsYmFyUHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWVudGl0eScpO1xuICAgICAgICBzY3JvbGxiYXJQcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ2dlb21ldHJ5JywgJ3ByaW1pdGl2ZTogYm94OyBkZXB0aDogJyArIHRoaXMuZGVwdGggKyAnOyB3aWR0aDogMC4wMDAxOyBoZWlnaHQ6IDAuMDUwMjsnKTtcbiAgICAgICAgc2Nyb2xsYmFyUHJvZ3Jlc3Muc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICctMC44NSAwIDAnKTtcbiAgICAgICAgc2Nyb2xsYmFyUHJvZ3Jlc3Muc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsICdjb2xvcjogIzAwZGRjMDsnKTtcbiAgICAgICAgc2Nyb2xsYmFyRWwuYXBwZW5kQ2hpbGQoc2Nyb2xsYmFyUHJvZ3Jlc3MpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyUHJvZ3Jlc3MgPSBzY3JvbGxiYXJQcm9ncmVzcztcblxuICAgICAgICB0aGlzLnNjcm9sbGJhckN1cnNvciA9IHRoaXMuY3JlYXRlU2Nyb2xsYmFyQ3Vyc29yKHNjcm9sbGJhckVsKTtcblxuICAgICAgICAvLyBpbnNlcnQgaXQgaW4gZG9jdW1lbnRcbiAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQoc2Nyb2xsYmFyRWwpO1xuXG5cbiAgICAgICAgcmV0dXJuIHNjcm9sbGJhckVsO1xuICAgIH0sXG5cbiAgICBjcmVhdGVTY3JvbGxiYXJDdXJzb3I6IGZ1bmN0aW9uIChwYXJlbnRFbCkge1xuXG4gICAgICAgIC8vIGNyZWF0ZXMgZW50aXR5XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsYmFyQ3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcbiAgICAgICAgc2Nyb2xsYmFyQ3Vyc29yLnNldEF0dHJpYnV0ZSgndmlzaWJsZScsIGZhbHNlKTtcbiAgICAgICAgc2Nyb2xsYmFyQ3Vyc29yLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnMC4xMjAgMCAwJyk7XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsYmFyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcbiAgICAgICAgc2Nyb2xsYmFyQm94LnNldEF0dHJpYnV0ZSgnZ2VvbWV0cnknLCAncHJpbWl0aXZlOiBib3g7IGRlcHRoOiAnICsgKHRoaXMuZGVwdGggKyAwLjAxKSArICc7IHdpZHRoOiAwLjA1OyBoZWlnaHQ6IDAuMDY7Jyk7XG4gICAgICAgIHNjcm9sbGJhckJveC5zZXRBdHRyaWJ1dGUoJ21hdGVyaWFsJywgJ2NvbG9yOiAjZjhlYjBlOycpO1xuICAgICAgICBzY3JvbGxiYXJDdXJzb3IuYXBwZW5kQ2hpbGQoc2Nyb2xsYmFyQm94KTtcblxuICAgICAgICBjb25zdCBzY3JvbGxiYXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtdGV4dCcpO1xuICAgICAgICBzY3JvbGxiYXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpO1xuICAgICAgICBzY3JvbGxiYXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2FsaWduJywgJ2NlbnRlcicpO1xuICAgICAgICBzY3JvbGxiYXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEnKTtcbiAgICAgICAgc2Nyb2xsYmFyTGFiZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICcwIDAuMDkgMCcpO1xuICAgICAgICBzY3JvbGxiYXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgJyNmOGViMGUnKTtcbiAgICAgICAgc2Nyb2xsYmFyQ3Vyc29yLmFwcGVuZENoaWxkKHNjcm9sbGJhckxhYmVsKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJDdXJzb3JMYWJlbCA9IHNjcm9sbGJhckxhYmVsO1xuXG4gICAgICAgIC8vIGluc2VydCBpbnRvIGRvY3VtZW50XG5cbiAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQoc2Nyb2xsYmFyQ3Vyc29yKVxuXG5cbiAgICAgICAgcmV0dXJuIHNjcm9sbGJhckN1cnNvcjtcbiAgICB9XG5cbn0pOyIsIlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgJ2ljb24tcmVsb2FkJzogJ1xcdWU4MDAnLFxuICAgICdpY29uLWFycm93X2Rvd24nOiAnXFx1ZTgwMScsXG4gICAgJ2ljb24tYXJyb3dfbGVmdCc6ICdcXHVlODAyJyxcbiAgICAnaWNvbi1hcnJvd191cCc6ICdcXHVlODAzJyxcbiAgICAnaWNvbi1jYXJkYm9hcmQnOiAnXFx1ZTgwNCcsXG4gICAgJ2ljb24tY29kZSc6ICdcXHVlODA1JyxcbiAgICAnaWNvbi1mYWNlYm9vayc6ICdcXHVlODA2JyxcbiAgICAnaWNvbi1tdXRlJzogJ1xcdWU4MDcnLFxuICAgICdpY29uLXBhdXNlJzogJ1xcdWU4MDgnLFxuICAgICdpY29uLXBsYXknOiAnXFx1ZTgwOScsXG4gICAgJ2ljb24tcmVzaXplJzogJ1xcdWU4MEInLFxuICAgICdpY29uLXNldHRpbmdzJzogJ1xcdWU4MEMnLFxuICAgICdpY29uLXNoYXJlJzogJ1xcdWU4MEQnLFxuICAgICdpY29uLXR3aXR0ZXInOiAnXFx1ZTgwRScsXG4gICAgJ2ljb24tdm9sdW1lJzogJ1xcdWU4MEYnLFxuICAgICdpY29uLWNsb3NlJzogJ1xcdWU4MTAnLFxuICAgICdpY29uLWxpbmsnOiAnXFx1ZTgxMScsXG4gICAgJ2ljb24tbWVudSc6ICdcXHVlODZlJyxcbn07IiwiQUZSQU1FLnJlZ2lzdGVyUHJpbWl0aXZlKCdtb2RpZnktcHJvcGVydHknLCB7XG5cbiAgICBkZWZhdWx0Q29tcG9uZW50czoge1xuICAgICAgICAnbW9kaWZ5LXByb3BlcnR5Jzoge31cbiAgICB9LFxuXG4gICAgbWFwcGluZ3M6IHtcbiAgICAgICAgJ3RhcmdldCc6ICdtb2RpZnktcHJvcGVydHkudGFyZ2V0JyxcbiAgICAgICAgJ3Byb3BlcnR5JzogJ21vZGlmeS1wcm9wZXJ0eS5wcm9wZXJ0eScsXG4gICAgICAgICdmaWVsZCc6ICdtb2RpZnktcHJvcGVydHkuZmllbGQnLFxuICAgICAgICAndmFsdWUnOiAnbW9kaWZ5LXByb3BlcnR5LnZhbHVlJ1xuICAgIH1cblxufSk7IiwiXG5BRlJBTUUucmVnaXN0ZXJQcmltaXRpdmUoJ3VpLWJ1dHRvbicsIHtcblxuICBkZWZhdWx0Q29tcG9uZW50czoge1xuICAgICAgJ3VpLWJ1dHRvbic6IHt9LFxuICAgICAgJ2VuYWJsZS1jaGlsZHJlbic6IHt9XG4gIH0sXG5cbiAgbWFwcGluZ3M6IHtcbiAgICAnd2lkdGgnOiAndWktYnV0dG9uLndpZHRoJyxcbiAgICAnYnV0dG9uLXdpZHRoJzogJ3VpLWJ1dHRvbi5idXR0b25XaWR0aCcsXG4gICAgJ3NoYXBlJzogJ3VpLWJ1dHRvbi5zaGFwZScsXG4gICAgJ3NpemUnOiAndWktYnV0dG9uLnNpemUnLFxuICAgICdkZXB0aCc6ICd1aS1idXR0b24uZGVwdGgnLFxuICAgICdjb2xvcic6ICd1aS1idXR0b24uY29sb3InLFxuICAgICdpY29uJzogJ3VpLWJ1dHRvbi5pY29uJyxcbiAgICAnbGFiZWwnOiAndWktYnV0dG9uLmxhYmVsJyxcbiAgICAndHJhbnNwYXJlbnQnOiAndWktYnV0dG9uLnRyYW5zcGFyZW50JyxcbiAgICAnb3BhY2l0eSc6ICd1aS1idXR0b24ub3BhY2l0eScsXG4gICAgJ3Zpc2libGUnOiAndWktYnV0dG9uLnZpc2libGUnLFxuICAgICdhY3RpdmUtY29sb3InOiAndWktYnV0dG9uLmFjdGl2ZUNvbG9yJ1xuICB9XG5cbn0pOyIsIlxuQUZSQU1FLnJlZ2lzdGVyUHJpbWl0aXZlKCd1aS1pY29uJywge1xuXG4gIGRlZmF1bHRDb21wb25lbnRzOiB7XG4gICAgJ2ljb24tcmVuZGVyZXInOiB7fSxcbiAgICAnZ2VvbWV0cnknOiB7IHByaW1pdGl2ZTogJ3BsYW5lJyB9LFxuICAgICdtYXRlcmlhbCc6IHsgc2hhZGVyOiAnZmxhdCcsIHRyYW5zcGFyZW50OiB0cnVlLCBhbHBoYVRlc3Q6IDAuMiB9XG4gIH0sXG5cbiAgbWFwcGluZ3M6IHtcbiAgICBuYW1lOiAnaWNvbi1yZW5kZXJlci5uYW1lJyxcbiAgICBoZWlnaHQ6ICdnZW9tZXRyeS5oZWlnaHQnLFxuICAgIHdpZHRoOiAnZ2VvbWV0cnkud2lkdGgnLFxuICAgIGNvbG9yOiAnbWF0ZXJpYWwuY29sb3InXG4gIH1cblxufSk7IiwiXG5BRlJBTUUucmVnaXN0ZXJQcmltaXRpdmUoJ3ZpZGVvLWNvbnRyb2xzJywge1xuXG4gIGRlZmF1bHRDb21wb25lbnRzOiB7XG4gICAgJ3ZpZGVvLWNvbnRyb2xzJzoge31cbiAgfSxcblxuICBtYXBwaW5nczoge1xuXG4gIH1cblxufSk7IiwiLy9AZmxvd1xuXG5pbXBvcnQgaWNvbk5hbWVzIGZyb20gJy4uL2NvbmZpZy9pY29uLW1hcCc7XG5cbkFGUkFNRS5yZWdpc3RlclN5c3RlbSgnaWNvbi1yZW5kZXJlcicsIHtcblxuICBpbml0OiBmdW5jdGlvbigpe1xuICAgIHRoaXMuY29sdW1ucyA9IDA7XG4gICAgdGhpcy5zaXplID0gNTQ7XG4gICAgdGhpcy5tYXJnaW4gPSA1OyAgLy8gaG93IG1hbnkgcGl4ZWxzIHRvIGxlYXZlIGJldHdlZW4gdHdvIGljb25zIG9uIHRoZSBjYW52YXNcbiAgICB0aGlzLnBhZGRpbmcgPSA1O1xuICAgIHRoaXMuX2NhbnZhcyA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJVbmljb2RlQ2hhcmFjdGVyID0gQUZSQU1FLnV0aWxzLmJpbmQodGhpcy5yZW5kZXJVbmljb2RlQ2hhcmFjdGVyLCB0aGlzKTtcblxuICAgIC8vIGNvbnRhaW5zIGljb24gaW5mb3JtYXRpb24gb3JnYW5pemVkIGJ5IHJvd3MgaW4gdGhlIGZpcnN0IGRpbWVuc2lvbiBhbmQgY29sdW1ucyBpbiB0aGUgc2Vjb25kXG4gICAgdGhpcy5jaGFyYWN0ZXJNYXAgPSBbXTtcblxuICAgIC8vIGFkZCBhIHBhcmFncmFwaCB0byBwcmUtbG9hZCB0aGUgZm9udFxuICAgIGNvbnN0IHByZWxvYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByZWxvYWRlci5jbGFzc05hbWUgPSAncHJlbG9hZC1pY29ucyc7XG4gICAgcHJlbG9hZGVyLmlubmVyVGV4dCA9ICcuJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByZWxvYWRlcik7XG4gIH0sXG5cbiAgX2ljb25NZWFzdXJlbWVudHM6IGZ1bmN0aW9uKGNoYXJhY3Rlcjogc3RyaW5nLCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpe1xuXG4gICAgY29uc3QgaWNvbkRpbWVuc2lvbiA9IHRoaXMuX2ljb25EaW1lbnNpb24oKTtcbiAgICBjb25zdCBpY29uVGV4dE1lYXN1cmVtZW50czogVGV4dE1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KGNoYXJhY3Rlcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogKHRoaXMuc2l6ZSAvIDIpICsgdGhpcy5wYWRkaW5nLFxuICAgICAgeTogdGhpcy5wYWRkaW5nLFxuICAgICAgd2lkdGg6IGljb25EaW1lbnNpb24sXG4gICAgICBoZWlnaHQ6IGljb25EaW1lbnNpb25cbiAgICB9O1xuICB9LFxuXG4gIF9jcmVhdGVDYW52YXM6IGZ1bmN0aW9uKHNpemU6IG51bWJlcil7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLmNsYXNzTmFtZSA9ICdpY29uLXJlbmRlcmVyJztcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHNpemUgKyAncHgnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBzaXplICsgICdweCcpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuICAgIHJldHVybiBjYW52YXM7XG4gIH0sXG5cbiAgX2RyYXdJY29uOiBmdW5jdGlvbihjaGFyYWN0ZXI6IHN0cmluZywgY29uZmlnKXtcblxuICAgIC8vIGdldCBkcmF3aW5nIGNvbnRleHRcbiAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gdGhpcy5fY3JlYXRlQ2FudmFzKGNvbmZpZ1snc2l6ZSddKTtcbiAgICBsZXQgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5mb250ID0gY29uZmlnWydmb250LXNpemUnXSArICcgJyArIGNvbmZpZ1snZm9udC1mYW1pbHknXTtcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgIGNvbnRleHQudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb25maWdbJ2NvbG9yJ107XG5cbiAgICAvLyBkcmF3IGljb25cbiAgICAvLyBjb25zdCBpY29uTWVhc3VyZW1lbnRzID0gdGhpcy5faWNvbk1lYXN1cmVtZW50cyhjaGFyYWN0ZXIsIGNvbnRleHQpO1xuICAgIGNvbnN0IHRleHRQb3NpdGlvbmluZyA9IHtcbiAgICAgIHg6IChjb25maWdbJ3NpemUnXSAvIDIpLFxuICAgICAgeTogY29uZmlnWydwYWRkaW5nJ10sXG4gICAgICB3aWR0aDogY29uZmlnWydzaXplJ10sXG4gICAgICBoZWlnaHQ6IGNvbmZpZ1snc2l6ZSddLFxuICAgICAgJ21heC13aWR0aCc6IGNvbmZpZ1snc2l6ZSddXG4gICAgfTtcbiAgICBjb250ZXh0LmZpbGxUZXh0KGNoYXJhY3RlciwgdGV4dFBvc2l0aW9uaW5nLngsIHRleHRQb3NpdGlvbmluZy55LCB0ZXh0UG9zaXRpb25pbmdbJ21heC13aWR0aCddKTtcblxuICAgIGNvbnN0IGRhdGEgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2FudmFzKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9LFxuXG4gIF9kZWZhdWx0Q29uZmlnOiB7XG4gICAgJ2ZvbnQtZmFtaWx5JzogJ2x1Y2lkd2ViJyxcbiAgICBzaXplOiBNYXRoLnBvdygyLCA3KSxcbiAgICAnZm9udC1zaXplJzogTWF0aC5wb3coMiwgNykgLSAxMCArICdweCcsXG4gICAgcGFkZGluZzogNSxcbiAgICAnY29sb3InOiAnI2ZmZmZmZidcbiAgfSxcblxuICByZW5kZXJJY29uOiBmdW5jdGlvbihpY29uLCBjdXN0b21Db25maWc6IG9iamVjdCl7XG4gICAgaWYgKGljb24gaW4gaWNvbk5hbWVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZHJhd0ljb24oaWNvbk5hbWVzW2ljb25dLCB7Li4udGhpcy5fZGVmYXVsdENvbmZpZywgLi4uY3VzdG9tQ29uZmlnfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVW5rbm93biBpY29uOiBcIiArIGljb24pO1xuICAgICAgcmV0dXJuIHRoaXMuX2RyYXdJY29uKGljb25OYW1lc1snaWNvbi1oZWxwJ10sIHsuLi50aGlzLl9kZWZhdWx0Q29uZmlnLCAuLi5jdXN0b21Db25maWd9KTtcbiAgICB9XG4gIH1cblxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9hc3Npc3QtY2FyZGJvYXJkLWJhY2tncm91bmQuanBnPzU1ZGZmM2RmZTUxMmMxMjBmNDQwMGJiN2E3NmJjNTliXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3N0eWxlcy91dGlsaXRpZXMubGVzc1wiOyIsIlxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFxuICAgICdkZXZpY2UtZGV0ZWN0aW9uJyxcbiAgICB7XG4gICAgICAgIHNjaGVtYToge1xuICAgICAgICAgICAgaXNNb2JpbGU6IHsgdHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICcnIH0sXG4gICAgICAgICAgICBpc09jdWx1czogeyB0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogJyd9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMuYmluZE1ldGhvZHMoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBwbGF5OiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gc3Bvb2YgdGhlIGluZm9ybWF0aW9uIGZvciB0ZXN0aW5nIHB1cnBvc2VzXG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnZGV2aWNlLWRldGVjdGlvbicsIHtcbiAgICAgICAgICAgICAgICAnaXNNb2JpbGUnOiBBRlJBTUUudXRpbHMuZ2V0VXJsUGFyYW1ldGVyKCdpc01vYmlsZScpLFxuICAgICAgICAgICAgICAgICdpc09jdWx1cyc6IEFGUkFNRS51dGlscy5nZXRVcmxQYXJhbWV0ZXIoJ2lzT2N1bHVzJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJpbmRNZXRob2RzOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgYmluZCA9IEFGUkFNRS51dGlscy5iaW5kO1xuICAgICAgICAgICAgdGhpcy5pc01vYmlsZSA9IGJpbmQodGhpcy5pc01vYmlsZSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmlzT2N1bHVzID0gYmluZCh0aGlzLmlzT2N1bHVzLCB0aGlzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpc01vYmlsZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBzd2l0Y2ggKGRhdGEuaXNNb2JpbGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSAneWVzJzpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiU1BPT0ZJTkcgaXNNb2JpbGUoKSA9PSB0cnVlXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbm8nOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJTUE9PRklORyBpc01vYmlsZSgpID09IGZhbHNlXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBBRlJBTUUudXRpbHMuZGV2aWNlLmlzTW9iaWxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNPY3VsdXM6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBPY3VsdXNCcm93c2VyIGluIHVzZXIgYWdlbnQgc3RyaW5nXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgc3dpdGNoIChkYXRhLmlzT2N1bHVzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3llcyc6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlNQT09GSU5HIGlzT2N1bHVzKCkgPT0gdHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ25vJzpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiU1BPT0ZJTkcgaXNPY3VsdXMoKSA9PSBmYWxzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hpbmdSZWdleCA9IC8oUGFjaWZpYyk/LitPY3VsdXNCcm93c2VyL2dcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJBZ2VudC5tYXRjaChtYXRjaGluZ1JlZ2V4KSAhPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuKTsiLCJcbmltcG9ydCBFbmFibGluZ01peGluIGZyb20gJy4uLy4uL3V0aWxpdGllcy9lbmFibGluZy1taXhpbic7XG5cbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcbiAgJ2Rpc2FibGUtZ3JvdXAnLFxuICBFbmFibGluZ01peGluKHtcblxuICAgIHNjaGVtYToge1xuICAgICAgZ3JvdXA6IHsgdHlwZTogJ3NlbGVjdG9yJyB9XG4gICAgfSxcblxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbigpe1xuXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgaWYgKGRhdGEuZ3JvdXAgPT0gbnVsbCB8fCBkYXRhLmdyb3VwID09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2Rpc2FibGUgZ3JvdXAgaGFzIG5vdCBmb3VuZCBhbnkgY2hpbGRyZW4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb3VudCA9IGRhdGEuZ3JvdXAuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkQ291bnQ7IGkrKyl7XG4gICAgICAgICAgY29uc3QgY3VycmVudENoaWxkID0gZGF0YS5ncm91cC5jaGlsZHJlbltpXTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50Q2hpbGQpO1xuICAgICAgICAgIGN1cnJlbnRDaGlsZC5lbWl0KCdsdWNpZHdlYi5kaXNhYmxlJywgeyBtc2c6ICdkaXNhYmxlZCBpbiBncm91cCcgfSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH0pXG4pOyIsIlxuaW1wb3J0IEVuYWJsaW5nTWl4aW4gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2VuYWJsaW5nLW1peGluJztcblxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFxuICAnZW5hYmxlLWdyb3VwJyxcbiAgRW5hYmxpbmdNaXhpbih7XG5cbiAgICBzY2hlbWE6IHtcbiAgICAgIGdyb3VwOiB7IHR5cGU6ICdzZWxlY3RvcicgfVxuICAgIH0sXG5cbiAgICBvbkVuYWJsZTogZnVuY3Rpb24oKXtcblxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgIGlmIChkYXRhLmdyb3VwID09IG51bGwgfHwgZGF0YS5ncm91cCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdFbmFibGUgZ3JvdXAgaGFzIG5vdCBmb3VuZCBhbnkgY2hpbGRyZW4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb3VudCA9IGRhdGEuZ3JvdXAuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkQ291bnQ7IGkrKyl7XG4gICAgICAgICAgY29uc3QgY3VycmVudENoaWxkID0gZGF0YS5ncm91cC5jaGlsZHJlbltpXTtcbiAgICAgICAgICBjdXJyZW50Q2hpbGQuZW1pdCgnbHVjaWR3ZWIuZW5hYmxlJywgeyBtc2c6ICdFbmFibGVkIGluIGdyb3VwJyB9LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfSlcbik7IiwiXG5pbXBvcnQgRW5hYmxpbmdNaXhpbiBmcm9tICcuLi8uLi91dGlsaXRpZXMvZW5hYmxpbmctbWl4aW4nO1xuXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXG4gICAgJ2hpZGUtZW50aXR5JyxcbiAgICBFbmFibGluZ01peGluKHtcblxuICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgIHRhcmdldDogeyB0eXBlOiAnc2VsZWN0b3InIH1cbiAgICAgICAgfSxcblxuICAgICAgICBvbkVuYWJsZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBpZiAoZGF0YS50YXJnZXQpe1xuICAgICAgICAgICAgICAgIGRhdGEudGFyZ2V0LnNldEF0dHJpYnV0ZSgndmlzaWJsZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGlja2FibGVFbGVtZW50cyA9IGRhdGEudGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbGlja2FibGUnKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaWNrYWJsZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZENsYXNzbmFtZSA9IGNsaWNrYWJsZUVsZW1lbnRzW2ldLmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlRWxlbWVudHNbaV0uY2xhc3NOYW1lID0gb2xkQ2xhc3NuYW1lLnJlcGxhY2UoJ2NsaWNrYWJsZScsICd1bmNsaWNrYWJsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSlcbik7IiwiXG5pbXBvcnQgRW5hYmxpbmdNaXhpbiBmcm9tICcuLi8uLi91dGlsaXRpZXMvZW5hYmxpbmctbWl4aW4nO1xuXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXG4gICAgJ3Nob3ctZW50aXR5JyxcbiAgICBFbmFibGluZ01peGluKHtcblxuICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgIHRhcmdldDogeyB0eXBlOiAnc2VsZWN0b3InIH1cbiAgICAgICAgfSxcblxuICAgICAgICBvbkVuYWJsZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICBpZiAoZGF0YS50YXJnZXQpe1xuICAgICAgICAgICAgICAgIGRhdGEudGFyZ2V0LnNldEF0dHJpYnV0ZSgndmlzaWJsZScsIHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVuY2xpY2thYmxlRWxlbWVudHMgPSBkYXRhLnRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCcudW5jbGlja2FibGUnKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuY2xpY2thYmxlRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkQ2xhc3NuYW1lID0gdW5jbGlja2FibGVFbGVtZW50c1tpXS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgIHVuY2xpY2thYmxlRWxlbWVudHNbaV0uY2xhc3NOYW1lID0gb2xkQ2xhc3NuYW1lLnJlcGxhY2UoJ3VuY2xpY2thYmxlJywgJ2NsaWNrYWJsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSlcbik7IiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFxuICAgICdzaG93LWxvYWRpbmctc2NyZWVuJyxcbiAgICB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLm1vZGFsID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRFeHBlcmllbmNlID0gQUZSQU1FLnV0aWxzLmJpbmQodGhpcy5zdGFydEV4cGVyaWVuY2UsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbnRlclZyQnV0dG9uID0gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBwbGF5OiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kYWwgPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbCA9IHRoaXMuY3JlYXRlTW9kYWwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGlua3MgPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFydCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zdGFydEV4cGVyaWVuY2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVudGVyVnJCdXR0b24gPSB0aGlzLmVsLnNjZW5lRWwucXVlcnlTZWxlY3RvcignLmEtZW50ZXItdnInKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVudGVyVnJCdXR0b24gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlclZyQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlTW9kYWw6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NOYW1lID0gJ21vZGFsLWRhcmsnO1xuXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuICAgICAgICAgICAgbGluay5jbGFzc05hbWUgPSAnc3RhcnQnO1xuXG4gICAgICAgICAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGltYWdlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdsb2dvJztcblxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2ltYWdlcy9sb2dvX2x1Y2lkd2ViLnBuZycpO1xuICAgICAgICAgICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICAgICAgbGluay5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0ZXh0LmNsYXNzTmFtZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIHRleHQuaW5uZXJUZXh0ID0gJ1N0YXJ0IHlvdXIgZXhwZXJpZW5jZSc7XG4gICAgICAgICAgICBsaW5rLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgICAgICAgICByZXR1cm4gbW9kYWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3RhcnRFeHBlcmllbmNlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgaWYgKHRoaXMuZW50ZXJWckJ1dHRvbiAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyVnJCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZpZGVvU3lzdGVtID0gdGhpcy5lbC5zY2VuZUVsLnN5c3RlbXNbJ3ZpZGVvLWNvbnRyb2xsZXInXTtcbiAgICAgICAgICAgIGlmICh2aWRlb1N5c3RlbSkge1xuICAgICAgICAgICAgICAgIHZpZGVvU3lzdGVtLmRvY3VtZW50SW50ZXJhY3Rpb25SZWNlaXZlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIHZpZGVvIGNvbnRyb2xsZXIgc3lzdGVtIGZvdW5kJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1haW5FeHBlcmllbmNlU3RhdGUgPSB0aGlzLmVsLnNjZW5lRWwucXVlcnlTZWxlY3RvcignI21haW4nKTtcbiAgICAgICAgICAgIGlmIChtYWluRXhwZXJpZW5jZVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgbWFpbkV4cGVyaWVuY2VTdGF0ZS5lbWl0KCdsdWNpZHdlYi5lbmFibGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNYWluIGV4cGVyaWVuY2Ugbm90IGZvdW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4pOyIsIlxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFxuICAgICd0cmFuc2l0aW9uLXRvLWNhcmRib2FyZCcsXG4gICAge1xuICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgIGNvdW50ZG93bjogeyB0eXBlOiAnbnVtYmVyJywgZGVmYXVsdDogMTAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLmJpbmRNZXRob2RzKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY291bnRkb3duID0gJyc7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZG93blBvaW50ZXIgPSBudWxsO1xuXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVDb3VudGRvd25IVE1MKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVNb2RhbEhUTUwoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBiaW5kTWV0aG9kczogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IGJpbmQgPSBBRlJBTUUudXRpbHMuYmluZDtcblxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyA9IGJpbmQodGhpcy5hZGRFdmVudExpc3RlbmVycywgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzID0gYmluZCh0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUcmFuc2l0aW9uaW5nVG9DYXJkYm9hcmQgPSBiaW5kKHRoaXMuc3RhcnRUcmFuc2l0aW9uaW5nVG9DYXJkYm9hcmQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5vbk9yaWVudGF0aW9uQ2hhbmdlID0gYmluZCh0aGlzLm9uT3JpZW50YXRpb25DaGFuZ2UsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlQ291bnRkb3duID0gYmluZCh0aGlzLmFkdmFuY2VDb3VudGRvd24sIHRoaXMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBsYXk6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5vbk9yaWVudGF0aW9uQ2hhbmdlKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyczogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMub25PcmllbnRhdGlvbkNoYW5nZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdGlhbGl6ZUNvdW50ZG93bkhUTUw6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZG93blBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHRoaXMuY291bnRkb3duUGFyYWdyYXBoLmNsYXNzTmFtZSA9ICd0cmFuc2l0aW9uLXRvLWNhcmRib2FyZC1jb3VudGRvd24nO1xuICAgICAgICAgICAgdGhpcy5jb3VudGRvd25QYXJhZ3JhcGguaW5uZXJUZXh0ID0gdGhpcy5jb3VudGRvd247XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdGlhbGl6ZU1vZGFsSFRNTDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRoaXMubW9kYWwuaWQgPSBcImFzc2lzdC1jYXJkYm9hcmRcIjtcbiAgICAgICAgICAgIHRoaXMubW9kYWwuaW5uZXJUZXh0ID0gJyZuYnNwOyc7XG4gICAgICAgICAgICB0aGlzLm1vZGFsLmFwcGVuZENoaWxkKHRoaXMuY291bnRkb3duUGFyYWdyYXBoKTtcbiAgICAgICAgICAgIHRoaXMuZWwuc2NlbmVFbC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvd3MgYSBtb2RhbCBiYWNrZ3JvdW5kIHdpdGggaW5zdHJ1Y3Rpb25zIGZvciBjYXJkYm9hcmQgdXNhZ2VcbiAgICAgICAgICovXG4gICAgICAgIHN0YXJ0VHJhbnNpdGlvbmluZ1RvQ2FyZGJvYXJkOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdGhpcy5jb3VudGRvd24gPSBkYXRhLmNvdW50ZG93bjtcbiAgICAgICAgICAgIGxldCB3YWl0aW5nUG9pbnQgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgICAgICBBRlJBTUUudXRpbHMuYmluZChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudGRvd24gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwidHJhbnNpdGlvbmluZyBub3cgdG9vIHNvb24/XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5lbnRlclZSKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdhaXRpbmdQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0aGlzKVxuICAgICAgICAgICAgICAgICwgNTApO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uT3JpZW50YXRpb25DaGFuZ2U6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuT3JpZW50YXRpb24gPSBzY3JlZW4ubXNPcmllbnRhdGlvbiB8fCAoc2NyZWVuLm9yaWVudGF0aW9uIHx8IHNjcmVlbi5tb3pPcmllbnRhdGlvbiB8fCB7fSkudHlwZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjcmVlbk9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zaXRpb25pbmcgJiYgKHNjcmVlbk9yaWVudGF0aW9uID09ICdsYW5kc2NhcGUnIHx8IHNjcmVlbk9yaWVudGF0aW9uID09IFwibGFuZHNjYXBlLXByaW1hcnlcIiB8fCBzY3JlZW5PcmllbnRhdGlvbiA9PSBcImxhbmRzY2FwZS1zZWNvbmRhcnlcIikpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGV0ZWN0ZWQgbGFuZHNjYXBlIG9yaWVudGF0aW9uJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudGRvd25Qb2ludGVyID0gc2V0SW50ZXJ2YWwodGhpcy5hZHZhbmNlQ291bnRkb3duLCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhZHZhbmNlQ291bnRkb3duOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3VudGluZyBcIiArIHRoaXMuY291bnRkb3duKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50ZG93biA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNvdW50ZG93blBvaW50ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnRkb3duUG9pbnRlciA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEB0b2RvIHVwZGF0ZSBjb3VudGRvd24gbnVtYmVyIGluIEhUTUxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jb3VudGRvd24gLT0gMTtcbiAgICAgICAgfVxuICAgIH1cbik7IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9yaWdpbmFsQ29tcG9uZW50KXtcblxuICBvcmlnaW5hbENvbXBvbmVudC5vcmlnaW5hbEluaXQgPSBvcmlnaW5hbENvbXBvbmVudC5pbml0O1xuICBvcmlnaW5hbENvbXBvbmVudC5vcmlnaW5hbEJpbmRNZXRob2RzID0gb3JpZ2luYWxDb21wb25lbnQuYmluZE1ldGhvZHM7XG5cbiAgcmV0dXJuIEFGUkFNRS51dGlscy5leHRlbmREZWVwKCB7XG5cbiAgICBpbml0OiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5iaW5kTWV0aG9kcygpO1xuICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5vcmlnaW5hbEluaXQpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbEluaXQgPSBBRlJBTUUudXRpbHMuYmluZCh0aGlzLm9yaWdpbmFsSW5pdCwgdGhpcyk7XG4gICAgICAgIHRoaXMub3JpZ2luYWxJbml0KCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGJpbmRNZXRob2RzOiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5vbk1peGluRW5hYmxlID0gQUZSQU1FLnV0aWxzLmJpbmQodGhpcy5vbk1peGluRW5hYmxlLCB0aGlzKTtcbiAgICAgIHRoaXMub25NaXhpbkRpc2FibGUgPSBBRlJBTUUudXRpbHMuYmluZCh0aGlzLm9uTWl4aW5EaXNhYmxlLCB0aGlzKTtcbiAgICAgIGlmICh0aGlzLm9uRW5hYmxlKXtcbiAgICAgICAgdGhpcy5vbkVuYWJsZSA9IEFGUkFNRS51dGlscy5iaW5kKHRoaXMub25FbmFibGUsIHRoaXMpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub25EaXNhYmxlKXtcbiAgICAgICAgdGhpcy5vbkRpc2FibGUgPSBBRlJBTUUudXRpbHMuYmluZCh0aGlzLm9uRGlzYWJsZSwgdGhpcyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcmlnaW5hbEJpbmRNZXRob2RzKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxCaW5kTWV0aG9kcygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBwbGF5OiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5hZGRNaXhpbkV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfSxcblxuICAgIHJlbW92ZTogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMucmVtb3ZlTWl4aW5FdmVudExpc3RlbmVycygpO1xuICAgIH0sXG5cbiAgICBhZGRNaXhpbkV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdsdWNpZHdlYi5lbmFibGUnLCB0aGlzLm9uTWl4aW5FbmFibGUpO1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdsdWNpZHdlYi5kaXNhYmxlJywgdGhpcy5vbk1peGluRGlzYWJsZSk7XG4gICAgfSxcblxuICAgIHJlbW92ZU1peGluRXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2x1Y2lkd2ViLmVuYWJsZScsIHRoaXMub25NaXhpbkVuYWJsZSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2x1Y2lkd2ViLmRpc2FibGUnLCB0aGlzLm9uTWl4aW5EaXNhYmxlKTtcbiAgICB9LFxuXG4gICAgb25NaXhpbkVuYWJsZTogZnVuY3Rpb24oKXtcbiAgICAgIGlmICh0aGlzLm9uRW5hYmxlKXtcbiAgICAgICAgdGhpcy5vbkVuYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdlbmFibGluZy1taXhpbiByZXF1aXJlcyBtZXRob2Qgb25FbmFibGUoKSB3aGljaCBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgaW4gdGhlIHRhcmdldCBvYmplY3QgeWV0Jyk7XG4gICAgICB9XG4gICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBvbk1peGluRGlzYWJsZTogZnVuY3Rpb24oKXtcbiAgICAgIGlmICh0aGlzLm9uRGlzYWJsZSl7XG4gICAgICAgIHRoaXMub25EaXNhYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2VuYWJsaW5nLW1peGluIHJlcXVpcmVzIG1ldGhvZCBvbkRpc2FibGUoKSB3aGljaCBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgaW4gdGhlIHRhcmdldCBvYmplY3QgeWV0Jyk7XG4gICAgICB9XG4gICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgfSwgb3JpZ2luYWxDb21wb25lbnQpO1xuXG59OyIsIlxuQUZSQU1FLnJlZ2lzdGVyUHJpbWl0aXZlKFxuICAnZGlzYWJsZS1ncm91cCcsXG4gIHtcbiAgICBkZWZhdWx0Q29tcG9uZW50czoge1xuICAgICAgJ2Rpc2FibGUtZ3JvdXAnOiB7fVxuICAgIH0sXG5cbiAgICBtYXBwaW5nczoge1xuICAgICAgJ2dyb3VwJzogJ2Rpc2FibGUtZ3JvdXAuZ3JvdXAnXG4gICAgfVxuICB9XG4pOyIsIlxuQUZSQU1FLnJlZ2lzdGVyUHJpbWl0aXZlKFxuICAnZW5hYmxlLWdyb3VwJyxcbiAge1xuICAgIGRlZmF1bHRDb21wb25lbnRzOiB7XG4gICAgICAnZW5hYmxlLWdyb3VwJzoge31cbiAgICB9LFxuXG4gICAgbWFwcGluZ3M6IHtcbiAgICAgICdncm91cCc6ICdlbmFibGUtZ3JvdXAuZ3JvdXAnXG4gICAgfVxuICB9XG4pOyIsIkFGUkFNRS5yZWdpc3RlclByaW1pdGl2ZShcbiAgICAnaGlkZS1lbnRpdHknLFxuICAgIHtcbiAgICAgICAgZGVmYXVsdENvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdoaWRlLWVudGl0eSc6IHsgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1hcHBpbmdzOiB7XG4gICAgICAgICAgICAndGFyZ2V0JzogJ2hpZGUtZW50aXR5LnRhcmdldCdcbiAgICAgICAgfVxuICAgIH1cbik7IiwiQUZSQU1FLnJlZ2lzdGVyUHJpbWl0aXZlKFxuICAgICdzaG93LWVudGl0eScsXG4gICAge1xuICAgICAgICBkZWZhdWx0Q29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3Nob3ctZW50aXR5JzogeyB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWFwcGluZ3M6IHtcbiAgICAgICAgICAgICd0YXJnZXQnOiAnc2hvdy1lbnRpdHkudGFyZ2V0J1xuICAgICAgICB9XG4gICAgfVxuKTsiLCJBRlJBTUUucmVnaXN0ZXJQcmltaXRpdmUoXG4gICAgJ3Nob3ctbG9hZGluZy1zY3JlZW4nLFxuICAgIHtcbiAgICAgICAgZGVmYXVsdENvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdzaG93LWxvYWRpbmctc2NyZWVuJzoge31cbiAgICAgICAgfVxuICAgIH1cbik7IiwiXG5leHBvcnQgZnVuY3Rpb24gdGltZUxhYmVsKHRpbWVJblNlY29uZHMsIHNob3dTZWNvbmRzID0gdHJ1ZSwgc2hvd01pbnV0ZXMgPSB0cnVlLCBzaG93SG91cnMgPSBmYWxzZSl7XG5cbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRpbWVJblNlY29uZHMgLyAoNjAqNjApKTtcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRpbWVJblNlY29uZHMgLyA2MCkgLSAoaG91cnMgKiA2MCAqIDYwKSk7XG4gIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWVJblNlY29uZHMgJSA2MCk7XG5cbiAgY29uc3QgaG91cnNMYWJlbCA9ICgnMDAnICsgaG91cnMpLnNsaWNlKC0yKTtcbiAgY29uc3QgbWludXRlc0xhYmVsID0gKCcwMCcgKyBtaW51dGVzKS5zbGljZSgtMik7XG4gIGNvbnN0IHNlY29uZHNMYWJlbCA9ICgnMDAnICsgc2Vjb25kcykuc2xpY2UoLTIpO1xuXG4gIGxldCBsYWJlbFBhcnRzID0gW107XG4gIGlmIChzaG93SG91cnMpIGxhYmVsUGFydHMucHVzaChob3Vyc0xhYmVsKTtcbiAgaWYgKHNob3dNaW51dGVzKSBsYWJlbFBhcnRzLnB1c2gobWludXRlc0xhYmVsKTtcbiAgaWYgKHNob3dTZWNvbmRzKSBsYWJlbFBhcnRzLnB1c2goc2Vjb25kc0xhYmVsKTtcblxuICByZXR1cm4gbGFiZWxQYXJ0cy5qb2luKCc6Jyk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3N0eWxlcy92aWRlby5sZXNzXCI7IiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFxuICAnZGVza3RvcC12aWRlb3NwaGVyZS1jb250cm9scycsXG4gIHtcblxuICAgIHNjaGVtYToge1xuICAgICAgdmlkZW86IHsgdHlwZTogJ3NlbGVjdG9yJyB9XG4gICAgfSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uID0gbnVsbDtcbiAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5iaW5kTWV0aG9kcygpO1xuICAgIH0sXG5cbiAgICBwbGF5OiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH0sXG5cbiAgICByZW1vdmU6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfSxcblxuICAgIGJpbmRNZXRob2RzOiBmdW5jdGlvbigpe1xuXG4gICAgICBjb25zdCBiaW5kID0gQUZSQU1FLnV0aWxzLmJpbmQ7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMgPSBiaW5kKHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMsIHRoaXMpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycyA9IGJpbmQodGhpcy5yZW1vdmVFdmVudExpc3RlbmVycywgdGhpcyk7XG4gICAgICB0aGlzLm9uQ2xvc2VCdXR0b25DbGlja2VkID0gYmluZCh0aGlzLm9uQ2xvc2VCdXR0b25DbGlja2VkLCB0aGlzKTtcbiAgICAgIHRoaXMub25WaWRlb0VuZGVkID0gYmluZCh0aGlzLm9uVmlkZW9FbmRlZCwgdGhpcyk7XG4gICAgICB0aGlzLl9jcmVhdGVDbG9zZUJ1dHRvbiA9IGJpbmQodGhpcy5fY3JlYXRlQ2xvc2VCdXR0b24sIHRoaXMpO1xuICAgICAgdGhpcy5vbkVuYWJsZSA9IGJpbmQodGhpcy5vbkVuYWJsZSwgdGhpcyk7XG4gICAgICB0aGlzLm9uRGlzYWJsZSA9IGJpbmQodGhpcy5vbkRpc2FibGUsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBhZGRFdmVudExpc3RlbmVyczogZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdsdWNpZHdlYi5lbmFibGUnLCB0aGlzLm9uRW5hYmxlKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2x1Y2lkd2ViLmRpc2FibGUnLCB0aGlzLm9uRGlzYWJsZSk7XG4gICAgICBkYXRhLnZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgdGhpcy5vblZpZGVvRW5kZWQpO1xuICAgIH0sXG5cbiAgICByZW1vdmVFdmVudExpc3RlbmVyczogZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdsdWNpZHdlYi5lbmFibGUnLCB0aGlzLm9uRW5hYmxlKTtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2x1Y2lkd2ViLmRpc2FibGUnLCB0aGlzLm9uRGlzYWJsZSk7XG4gICAgICBkYXRhLnZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgdGhpcy5vblZpZGVvRW5kZWQpO1xuICAgIH0sXG5cbiAgICBvbkVuYWJsZTogZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLmNsb3NlQnV0dG9uID0gdGhpcy5fY3JlYXRlQ2xvc2VCdXR0b24oKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbigpe1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYS1lbnRlci12cicpLnJlbW92ZUNoaWxkKHRoaXMuY2xvc2VCdXR0b24pO1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IG51bGw7XG4gICAgfSxcblxuICAgIG9uQ2xvc2VCdXR0b25DbGlja2VkOiBmdW5jdGlvbihldnQpe1xuICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgICAgIGVsLmVtaXQoJ2x1Y2lkd2ViLnZpZGVvLmNsb3NlZCcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBvblZpZGVvRW5kZWQ6IGZ1bmN0aW9uKGV2dCl7XG4gICAgICBpZiAodGhpcy5lbmFibGVkKXtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xuICAgICAgICBlbC5lbWl0KCdsdWNpZHdlYi52aWRlby5lbmRlZCcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfY3JlYXRlQ2xvc2VCdXR0b246IGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdkZXNrdG9wLXZpZGVvLWNsb3NlIGJyb3dzZXItb25seSc7XG4gICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbG9zZUJ1dHRvbkNsaWNrZWQpO1xuXG4gICAgICBjb25zdCBjbG9zZUJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBjbG9zZUJ1dHRvbkljb24uY2xhc3NOYW1lID0gJ2ljb24gaWNvbi1hcnJvd19sZWZ0JztcbiAgICAgIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uSWNvbik7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hLWVudGVyLXZyJykuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gICAgICByZXR1cm4gY2xvc2VCdXR0b247XG4gICAgfVxuXG4gIH1cbik7IiwiXG5pbXBvcnQgRW5hYmxpbmdNaXhpbiBmcm9tICcuLi8uLi91dGlsaXRpZXMvZW5hYmxpbmctbWl4aW4nO1xuXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXG4gICdlbmQtdmlkZW8nLFxuICBFbmFibGluZ01peGluKFxuICAgIHtcblxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIGNvbnRyb2xsZXI6IHsgdHlwZTogJ3NlbGVjdG9yJyB9XG4gICAgICB9LFxuXG4gICAgICBvbkVuYWJsZTogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgaWYgKGRhdGEuY29udHJvbGxlcil7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2VuZCB2aWRlbzogJyArIGRhdGEuY29udHJvbGxlci5nZXRBdHRyaWJ1dGUoJ3ZpZGVvJykpO1xuICAgICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkYXRhLmNvbnRyb2xsZXIuZ2V0QXR0cmlidXRlKCd2aWRlbycpKTtcbiAgICAgICAgICBkYXRhLmNvbnRyb2xsZXIuc2V0QXR0cmlidXRlKCd2aWRlby1jYW4tcGxheScsIGZhbHNlKTtcbiAgICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuZGF0YS5jb250cm9sbGVyLmNvbXBvbmVudHNbJ3ZpZGVvLWNvbnRyb2xsZXInXS5wbGF5VmlkZW8oKTtcbiAgICAgIH1cblxuICAgIH1cbiAgKVxuKTsiLCJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcbiAgJ2ZsYXQtdmlkZW8tY29udHJvbHMnLFxuICB7XG4gICAgc2NoZW1hOiB7XG4gICAgICB2aWRlbzogeyB0eXBlOiAnc2VsZWN0b3InIH0sXG4gICAgICB3aWR0aDogeyB0eXBlOiAnbnVtYmVyJyB9LFxuICAgICAgYnV0dG9uV2lkdGg6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDEuNiB9LFxuICAgICAgYnV0dG9uRGVwdGg6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDAuMDEgfSxcbiAgICAgIGV4aXRUYXJnZXQ6IHsgdHlwZTogJ3NlbGVjdG9yJyB9XG4gICAgfSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLmJpbmRNZXRob2RzKCk7XG5cbiAgICAgIHRoaXMuY29udHJvbHMgPSBudWxsO1xuICAgICAgdGhpcy5wbGF5QnV0dG9uID0gbnVsbDtcbiAgICAgIHRoaXMucGF1c2VCdXR0b24gPSBudWxsO1xuICAgICAgdGhpcy5yZXBsYXlCdXR0b24gPSBudWxsO1xuICAgICAgdGhpcy52b2x1bWVPZmZCdXR0b24gPSBudWxsO1xuICAgICAgdGhpcy52b2x1bWVPbkJ1dHRvbiA9IG51bGw7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uID0gbnVsbDtcbiAgICAgIHRoaXMudGltZVByb2dyZXNzID0gbnVsbDtcbiAgICAgIHRoaXMudGltZUR1cmF0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyID0gbnVsbDtcbiAgICAgIHRoaXMudmlkZW9UaW1pbmdEaXNwbGF5ID0gbnVsbDtcbiAgICAgIHRoaXMudGltZVByb2dyZXNzID0gbnVsbDtcbiAgICAgIHRoaXMudGltZURpc3BsYXlTZXBhcmF0b3IgPSBudWxsO1xuICAgICAgdGhpcy50aW1lRHVyYXRpb24gPSBudWxsO1xuICAgIH0sXG5cbiAgICBwbGF5OiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5jb250cm9scyA9IHRoaXMuY3JlYXRlQ29udHJvbHMoKTtcbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9scyk7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlOiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgIH0sXG5cbiAgICBiaW5kTWV0aG9kczogZnVuY3Rpb24oKXtcblxuICAgICAgY29uc3QgYmluZCA9IEFGUkFNRS51dGlscy5iaW5kO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzID0gYmluZCh0aGlzLmFkZEV2ZW50TGlzdGVuZXJzLCB0aGlzKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBiaW5kKHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMsIHRoaXMpO1xuICAgICAgdGhpcy5fX2Zvcm1hdFRpbWUgPSBiaW5kKHRoaXMuX19mb3JtYXRUaW1lLCB0aGlzKTtcblxuICAgICAgLy8gY3JlYXRpb25hbCBtZXRob2RzXG5cbiAgICAgIHRoaXMuY3JlYXRlQ29udHJvbHMgPSBiaW5kKHRoaXMuY3JlYXRlQ29udHJvbHMsIHRoaXMpO1xuICAgICAgdGhpcy5jcmVhdGVQbGF5QnV0dG9uID0gYmluZCh0aGlzLmNyZWF0ZVBsYXlCdXR0b24sIHRoaXMpO1xuICAgICAgdGhpcy5jcmVhdGVQYXVzZUJ1dHRvbiA9IGJpbmQodGhpcy5jcmVhdGVQYXVzZUJ1dHRvbiwgdGhpcyk7XG4gICAgICB0aGlzLmNyZWF0ZVJlcGxheUJ1dHRvbiA9IGJpbmQodGhpcy5jcmVhdGVSZXBsYXlCdXR0b24sIHRoaXMpO1xuICAgICAgdGhpcy5jcmVhdGVWb2x1bWVPbkJ1dHRvbiA9IGJpbmQodGhpcy5jcmVhdGVWb2x1bWVPbkJ1dHRvbiwgdGhpcyk7XG4gICAgICB0aGlzLmNyZWF0ZVZvbHVtZU9mZkJ1dHRvbiA9IGJpbmQodGhpcy5jcmVhdGVWb2x1bWVPZmZCdXR0b24sIHRoaXMpO1xuICAgICAgdGhpcy5jcmVhdGVDbG9zZUJ1dHRvbiA9IGJpbmQodGhpcy5jcmVhdGVDbG9zZUJ1dHRvbiwgdGhpcyk7XG4gICAgICB0aGlzLmNyZWF0ZVZpZGVvVGltaW5nRGlzcGxheSA9IGJpbmQodGhpcy5jcmVhdGVWaWRlb1RpbWluZ0Rpc3BsYXksIHRoaXMpO1xuICAgICAgdGhpcy5jcmVhdGVWaWRlb1Byb2dyZXNzRGlzcGxheSA9IGJpbmQodGhpcy5jcmVhdGVWaWRlb1Byb2dyZXNzRGlzcGxheSwgdGhpcyk7XG4gICAgICB0aGlzLmNyZWF0ZVZpZGVvRHVyYXRpb25EaXNwbGF5ID0gYmluZCh0aGlzLmNyZWF0ZVZpZGVvRHVyYXRpb25EaXNwbGF5LCB0aGlzKTtcbiAgICAgIHRoaXMuY3JlYXRlQmFja1RvTWVudUJ1dHRvbiA9IGJpbmQodGhpcy5jcmVhdGVCYWNrVG9NZW51QnV0dG9uLCB0aGlzKTtcblxuICAgICAgLy8gdGhpcyBjb21wb25lbnQgbGlzdGVucyB0byB2aWRlbyBjb250cm9sbGVyIGV2ZW50cyB0byB1cGRhdGUgaXQncyBHVUkuICBldmVudHMgY291bGQgb3JpZ2luYXRlIGZyb20gb3RoZXIgY29udHJvbHMgYXMgd2VsbFxuXG4gICAgICB0aGlzLm9uVmlkZW9QbGF5aW5nU3RhcnRlZCA9IGJpbmQodGhpcy5vblZpZGVvUGxheWluZ1N0YXJ0ZWQsIHRoaXMpO1xuICAgICAgdGhpcy5vblZpZGVvQ29udHJvbGxlclBsYXlpbmdFbmRlZCA9IGJpbmQodGhpcy5vblZpZGVvQ29udHJvbGxlclBsYXlpbmdFbmRlZCwgdGhpcyk7XG4gICAgICB0aGlzLm9uVmlkZW9Db250cm9sbGVyU3RhbGxlZCA9IGJpbmQodGhpcy5vblZpZGVvQ29udHJvbGxlclN0YWxsZWQsIHRoaXMpO1xuICAgICAgdGhpcy5vblZpZGVvQ29udHJvbGxlclBsYXlpbmdQYXVzZWQgPSBiaW5kKHRoaXMub25WaWRlb0NvbnRyb2xsZXJQbGF5aW5nUGF1c2VkLCB0aGlzKTtcbiAgICAgIHRoaXMub25WaWRlb0NvbnRyb2xsZXJQbGF5aW5nID0gYmluZCh0aGlzLm9uVmlkZW9Db250cm9sbGVyUGxheWluZywgdGhpcyk7XG4gICAgICB0aGlzLm9uVmlkZW9Db250cm9sbGVyVm9sdW1lT2ZmID0gYmluZCh0aGlzLm9uVmlkZW9Db250cm9sbGVyVm9sdW1lT2ZmLCB0aGlzKTtcbiAgICAgIHRoaXMub25WaWRlb0NvbnRyb2xsZXJWb2x1bWVPbiA9IGJpbmQodGhpcy5vblZpZGVvQ29udHJvbGxlclZvbHVtZU9uLCB0aGlzKTtcbiAgICAgIHRoaXMub25WaWRlb0NvbnRyb2xsZXJUaW1lVXBkYXRlID0gYmluZCh0aGlzLm9uVmlkZW9Db250cm9sbGVyVGltZVVwZGF0ZSwgdGhpcyk7XG5cbiAgICAgIC8vIGJ1dHRvbiBoYW5kbGVycyB0byBpbnRlcmFjdCB0b3dhcmRzIHRoZSB2aWRlbyBjb250cm9sbGVyIGluc3RlYWQgb2YgcmVzcG9uZGluZyB0byBpdFxuXG4gICAgICB0aGlzLm9uUGxheUJ1dHRvbkNsaWNrZWQgPSBiaW5kKHRoaXMub25QbGF5QnV0dG9uQ2xpY2tlZCwgdGhpcyk7XG4gICAgICB0aGlzLm9uUmVwbGF5QnV0dG9uQ2xpY2tlZCA9IGJpbmQodGhpcy5vblJlcGxheUJ1dHRvbkNsaWNrZWQsIHRoaXMpO1xuICAgICAgdGhpcy5vblBhdXNlQnV0dG9uQ2xpY2tlZCA9IGJpbmQodGhpcy5vblBhdXNlQnV0dG9uQ2xpY2tlZCwgdGhpcyk7XG4gICAgICB0aGlzLm9uVmlkZW9Db250cm9sbGVyQ2hhbmdlID0gYmluZCh0aGlzLm9uVmlkZW9Db250cm9sbGVyQ2hhbmdlLCB0aGlzKTtcbiAgICAgIHRoaXMub25Wb2x1bWVPbkJ1dHRvbkNsaWNrZWQgPSBiaW5kKHRoaXMub25Wb2x1bWVPbkJ1dHRvbkNsaWNrZWQsIHRoaXMpO1xuICAgICAgdGhpcy5vblZvbHVtZU9mZkJ1dHRvbkNsaWNrZWQgPSBiaW5kKHRoaXMub25Wb2x1bWVPZmZCdXR0b25DbGlja2VkLCB0aGlzKTtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b25DbGlja2VkID0gYmluZCh0aGlzLmNsb3NlQnV0dG9uQ2xpY2tlZCwgdGhpcyk7XG5cbiAgICAgIC8vIHV0aWxpdHkgbWV0aG9kc1xuXG4gICAgICB0aGlzLnZpZGVvQ29udHJvbGxlclN5c3RlbSA9IGJpbmQodGhpcy52aWRlb0NvbnRyb2xsZXJTeXN0ZW0sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBhZGRFdmVudExpc3RlbmVyczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyB2aWRlbyBjb250cm9sbGVyIGV2ZW50c1xuXG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgICBjb25zdCB2aWRlbyA9IHRoaXMuZGF0YS52aWRlbztcblxuICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIHRoaXMub25WaWRlb1BsYXlpbmdTdGFydGVkKTtcbiAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB0aGlzLm9uVmlkZW9Db250cm9sbGVyVGltZVVwZGF0ZSk7XG4gICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIHRoaXMub25WaWRlb0NvbnRyb2xsZXJQbGF5aW5nRW5kZWQpO1xuICAgICAgLy8gdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignc3RhbGxlZCcsIHRoaXMub25WaWRlb0NvbnRyb2xsZXJTdGFsbGVkKTtcbiAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3ZvbHVtZWNoYW5nZScsIHRoaXMub25WaWRlb0NvbnRyb2xsZXJDaGFuZ2UpO1xuICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigncGF1c2UnLCB0aGlzLm9uVmlkZW9Db250cm9sbGVyUGxheWluZ1BhdXNlZCk7XG4gICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdwbGF5aW5nJywgdGhpcy5vblZpZGVvQ29udHJvbGxlclBsYXlpbmcpO1xuXG4gICAgICAvLyBidXR0b24gY29udHJvbCBldmVudHNcblxuICAgICAgdGhpcy5wbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblBsYXlCdXR0b25DbGlja2VkKTtcbiAgICAgIHRoaXMucmVwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblJlcGxheUJ1dHRvbkNsaWNrZWQpO1xuICAgICAgdGhpcy5wYXVzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25QYXVzZUJ1dHRvbkNsaWNrZWQpO1xuICAgICAgdGhpcy52b2x1bWVPbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Wb2x1bWVPbkJ1dHRvbkNsaWNrZWQpO1xuICAgICAgdGhpcy52b2x1bWVPZmZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVm9sdW1lT2ZmQnV0dG9uQ2xpY2tlZCk7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZUJ1dHRvbkNsaWNrZWQpO1xuICAgIH0sXG5cbiAgICByZW1vdmVFdmVudExpc3RlbmVyczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyB2aWRlbyBjb250cm9sbGVyIGV2ZW50c1xuXG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgICBjb25zdCBzY2VuZSA9IGVsLnNjZW5lRWw7XG5cbiAgICAgIHNjZW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2x1Y2lkd2ViLnZpZGVvLWNvbnRyb2xsZXIucGxheWluZy1zdGFydGVkJywgdGhpcy5vblZpZGVvUGxheWluZ1N0YXJ0ZWQpO1xuICAgICAgc2NlbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbHVjaWR3ZWIudmlkZW8tY29udHJvbGxlci5wbGF5aW5nLWVuZGVkJywgdGhpcy5vblZpZGVvQ29udHJvbGxlclBsYXlpbmdFbmRlZCk7XG4gICAgICBzY2VuZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsdWNpZHdlYi52aWRlby1jb250cm9sbGVyLnZpZGVvLXBhdXNlZCcsIHRoaXMub25WaWRlb0NvbnRyb2xsZXJQbGF5aW5nUGF1c2VkKTtcbiAgICAgIHNjZW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2x1Y2lkd2ViLnZpZGVvLWNvbnRyb2xsZXIudmlkZW8tcGxheWluZycsIHRoaXMub25WaWRlb0NvbnRyb2xsZXJQbGF5aW5nKTtcbiAgICAgIHNjZW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2x1Y2lkd2ViLnZpZGVvLWNvbnRyb2xsZXIudm9sdW1lLW9mZicsIHRoaXMub25WaWRlb0NvbnRyb2xsZXJWb2x1bWVPZmYpO1xuICAgICAgc2NlbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbHVjaWR3ZWIudmlkZW8tY29udHJvbGxlci52b2x1bWUtb24nLCB0aGlzLm9uVmlkZW9Db250cm9sbGVyVm9sdW1lT24pO1xuICAgICAgc2NlbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbHVjaWR3ZWIudmlkZW8tY29udHJvbGxlci50aW1ldXBkYXRlJywgdGhpcy5vblZpZGVvQ29udHJvbGxlclRpbWVVcGRhdGUpO1xuICAgICAgLy8gc2NlbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2NlbmVDbGljaywgZmFsc2UpO1xuXG5cbiAgICAgIC8vIGJ1dHRvbiBjb250cm9sIGV2ZW50c1xuXG4gICAgICB0aGlzLmFjdGl2YXRvci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25BY3RpdmF0ZUJ1dHRvbkNsaWNrZWQpO1xuICAgICAgdGhpcy5wbGF5QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblBsYXlCdXR0b25DbGlja2VkKTtcbiAgICAgIHRoaXMucmVwbGF5QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblJlcGxheUJ1dHRvbkNsaWNrZWQpO1xuICAgICAgdGhpcy5wYXVzZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25QYXVzZUJ1dHRvbkNsaWNrZWQpO1xuICAgICAgdGhpcy52b2x1bWVPbkJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Wb2x1bWVPbkJ1dHRvbkNsaWNrZWQpO1xuICAgICAgdGhpcy52b2x1bWVPZmZCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVm9sdW1lT2ZmQnV0dG9uQ2xpY2tlZCk7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZUJ1dHRvbkNsaWNrZWQpO1xuICAgICAgLy8gdGhpcy5zY3JvbGxiYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2Nyb2xsYmFyQ2xpY2tlZCk7XG4gICAgICAvLyB0aGlzLnNjcm9sbGJhci5yZW1vdmVFdmVudExpc3RlbmVyKCdyYXljYXN0ZXItaW50ZXJzZWN0ZWQnLCB0aGlzLm9uUmF5Y2FzdEludGVyc2VjdGlvbik7XG4gICAgICAvLyB0aGlzLnNjcm9sbGJhci5yZW1vdmVFdmVudExpc3RlbmVyKCdyYXljYXN0ZXItaW50ZXJzZWN0ZWQtY2xlYXJlZCcsIHRoaXMub25SYXljYXN0SW50ZXJzZWN0aW9uQ2xlYXJlZCk7XG4gICAgfSxcblxuICAgIHZpZGVvQ29udHJvbGxlclN5c3RlbTogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB0aGlzLmVsLnNjZW5lRWwuc3lzdGVtc1sndmlkZW8tY29udHJvbGxlciddO1xuICAgIH0sXG5cbiAgICBvblZpZGVvUGxheWluZ1N0YXJ0ZWQ6IGZ1bmN0aW9uKGV2dCl7XG4gICAgICAvLyBhZGFwdCBVSSBidXR0b25zXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucGF1c2VCdXR0b24uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICAgICAgdGhpcy5wYXVzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywge3g6IC0wLjc4LCB5OiBwb3NpdGlvbi55LCB6OiAwLjAwMX0pO1xuICAgICAgdGhpcy5wbGF5QnV0dG9uLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7eDogLTAuNzgsIHk6IHBvc2l0aW9uLnksIHo6IDEwMDB9KTtcbiAgICAgIHRoaXMucmVwbGF5QnV0dG9uLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7eDogLTAuNzgsIHk6IHBvc2l0aW9uLnksIHo6IDEwMDB9KTtcbiAgICB9LFxuXG4gICAgb25WaWRlb0NvbnRyb2xsZXJQbGF5aW5nRW5kZWQ6IGZ1bmN0aW9uKGV2dCl7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucGF1c2VCdXR0b24uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICAgICAgdGhpcy5wYXVzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywge3g6IC0wLjc4LCB5OiBwb3NpdGlvbi55LCB6OiAxMDAwfSk7XG4gICAgICB0aGlzLnBsYXlCdXR0b24uc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHt4OiAtMC43OCwgeTogcG9zaXRpb24ueSwgejogMTAwMH0pO1xuICAgICAgdGhpcy5yZXBsYXlCdXR0b24uc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHt4OiAtMC43OCwgeTogcG9zaXRpb24ueSwgejogMC4wMDF9KTtcbiAgICB9LFxuXG4gICAgb25WaWRlb0NvbnRyb2xsZXJTdGFsbGVkOiBmdW5jdGlvbihldnQpe1xuICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLmRhdGEudmlkZW87XG4gICAgICBpZiAodmlkZW8pe1xuICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIG9uVmlkZW9Db250cm9sbGVyUGxheWluZ1BhdXNlZDogZnVuY3Rpb24oZXZ0KXtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wYXVzZUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gICAgICB0aGlzLnBhdXNlQnV0dG9uLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7eDogLTAuNzgsIHk6IHBvc2l0aW9uLnksIHo6IDEwMDB9KTtcbiAgICAgIHRoaXMucGxheUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywge3g6IC0wLjc4LCB5OiBwb3NpdGlvbi55LCB6OiAwLjAwMX0pO1xuICAgICAgdGhpcy5yZXBsYXlCdXR0b24uc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHt4OiAtMC43OCwgeTogcG9zaXRpb24ueSwgejogMTAwMH0pO1xuICAgIH0sXG5cbiAgICBvblZpZGVvQ29udHJvbGxlclBsYXlpbmc6IGZ1bmN0aW9uKGV2dCl7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucGF1c2VCdXR0b24uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICAgICAgdGhpcy5wYXVzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywge3g6IC0wLjc4LCB5OiBwb3NpdGlvbi55LCB6OiAwLjAwMX0pO1xuICAgICAgdGhpcy5wbGF5QnV0dG9uLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7eDogLTAuNzgsIHk6IHBvc2l0aW9uLnksIHo6IDEwMDB9KTtcbiAgICAgIHRoaXMucmVwbGF5QnV0dG9uLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7eDogLTAuNzgsIHk6IHBvc2l0aW9uLnksIHo6IDEwMDB9KTtcbiAgICB9LFxuXG4gICAgb25WaWRlb0NvbnRyb2xsZXJDaGFuZ2U6IGZ1bmN0aW9uKGV2dCl7XG4gICAgICBjb25zdCB2aWRlbyA9IHRoaXMuZGF0YS52aWRlbztcbiAgICAgIGlmICh2aWRlby5tdXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLm9uVmlkZW9Db250cm9sbGVyVm9sdW1lT24oZXZ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25WaWRlb0NvbnRyb2xsZXJWb2x1bWVPZmYoZXZ0KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25WaWRlb0NvbnRyb2xsZXJWb2x1bWVPZmY6IGZ1bmN0aW9uKGV2dCl7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMudm9sdW1lT25CdXR0b24uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICAgICAgdGhpcy52b2x1bWVPbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywge3g6IC0wLjU4LCB5OiBwb3NpdGlvbi55LCB6OiAxMDAwfSk7XG4gICAgICB0aGlzLnZvbHVtZU9mZkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywge3g6IC0wLjU4LCB5OiBwb3NpdGlvbi55LCB6OiAwLjAwMX0pO1xuICAgIH0sXG5cbiAgICBvblZpZGVvQ29udHJvbGxlclZvbHVtZU9uOiBmdW5jdGlvbihldnQpe1xuICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnZvbHVtZU9uQnV0dG9uLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgICAgIHRoaXMudm9sdW1lT25CdXR0b24uc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHt4OiAtMC41OCwgeTogcG9zaXRpb24ueSwgejogMC4wMDEgfSk7XG4gICAgICB0aGlzLnZvbHVtZU9mZkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywge3g6IC0wLjU4LCB5OiBwb3NpdGlvbi55LCB6OiAxMDAwIH0pO1xuICAgIH0sXG5cbiAgICBvblZpZGVvQ29udHJvbGxlclRpbWVVcGRhdGU6IGZ1bmN0aW9uKGV2dCl7XG5cbiAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy5kYXRhLnZpZGVvO1xuXG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IHRoaXMuX19mb3JtYXRUaW1lKHZpZGVvLmN1cnJlbnRUaW1lKTtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5fX2Zvcm1hdFRpbWUodmlkZW8uZHVyYXRpb24pO1xuXG4gICAgICB0aGlzLnRpbWVQcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ3RleHQnLCB7IHZhbHVlOiBjdXJyZW50VGltZSB9KTtcbiAgICAgIHRoaXMudGltZUR1cmF0aW9uLnNldEF0dHJpYnV0ZSgndGV4dCcsIHsgdmFsdWU6IGR1cmF0aW9uIH0pO1xuICAgIH0sXG5cbiAgICBfX2Zvcm1hdFRpbWU6IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICBjb25zdCBtaW51dGVzID0gXCIwMFwiICsgTWF0aC5mbG9vcih0aW1lIC8gNjApO1xuICAgICAgY29uc3Qgc2Vjb25kcyA9IFwiMDBcIiArIE1hdGguZmxvb3IodGltZSAlIDYwKTtcbiAgICAgIHJldHVybiBgJHttaW51dGVzLnNsaWNlKC0yKX06JHtzZWNvbmRzLnNsaWNlKC0yKX1gXG4gICAgfSxcblxuICAgIG9uUGxheUJ1dHRvbkNsaWNrZWQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgICBkYXRhLnZpZGVvLnNldEF0dHJpYnV0ZSgndmlkZW8tY2FuLXBsYXknLCB0cnVlKTtcbiAgICAgIGlmIChkYXRhLnZpZGVvKSB7XG4gICAgICAgIGRhdGEudmlkZW8ucGxheSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBvblJlcGxheUJ1dHRvbkNsaWNrZWQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgICBkYXRhLnZpZGVvLnNldEF0dHJpYnV0ZSgndmlkZW8tY2FuLXBsYXknLCB0cnVlKTtcbiAgICAgIGlmIChkYXRhLnZpZGVvKSB7XG4gICAgICAgIGRhdGEudmlkZW8uY3VycmVudFRpbWUgPSAwO1xuICAgICAgICBkYXRhLnZpZGVvLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25QYXVzZUJ1dHRvbkNsaWNrZWQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgICBkYXRhLnZpZGVvLnNldEF0dHJpYnV0ZSgndmlkZW8tY2FuLXBsYXknLCBmYWxzZSk7XG4gICAgICBpZiAoZGF0YS52aWRlbykge1xuICAgICAgICBkYXRhLnZpZGVvLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIG9uVm9sdW1lT25CdXR0b25DbGlja2VkOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgaWYgKGRhdGEudmlkZW8pIHtcbiAgICAgICAgZGF0YS52aWRlby5tdXRlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBvblZvbHVtZU9mZkJ1dHRvbkNsaWNrZWQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICBpZiAoZGF0YS52aWRlbykge1xuICAgICAgICBkYXRhLnZpZGVvLm11dGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2xvc2VCdXR0b25DbGlja2VkOiBmdW5jdGlvbihldnQpe1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcbiAgICAgIGRhdGEudmlkZW8uc2V0QXR0cmlidXRlKCd2aWRlby1jYW4tcGxheScsIGZhbHNlKTtcbiAgICAgIGlmIChkYXRhLmV4aXRUYXJnZXQpIHtcblxuICAgICAgICBkYXRhLmV4aXRUYXJnZXQuZW1pdCgnbHVjaWR3ZWIuZGlzYWJsZScpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBvblNjcm9sbGJhckNsaWNrZWQ6IGZ1bmN0aW9uKGV2dCl7XG5cbiAgICB9LFxuXG4gICAgb25TY3JvbGxiYXJIb3ZlclN0YXJ0OiBmdW5jdGlvbihldnQpe1xuXG4gICAgfSxcblxuICAgIG9uU2Nyb2xsYmFySG92ZXJFbmQ6IGZ1bmN0aW9uKGV2dCl7XG5cbiAgICB9LFxuXG4gICAgb25SYXljYXN0SW50ZXJzZWN0aW9uOiBmdW5jdGlvbihldnQpe1xuXG4gICAgfSxcblxuICAgIG9uUmF5Y2FzdEludGVyc2VjdGlvbkNsZWFyZWQ6IGZ1bmN0aW9uKGV2dCl7XG5cbiAgICB9LFxuXG4gICAgY3JlYXRlQ29udHJvbHM6IGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICB0aGlzLmNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcbiAgICAgIC8vIHRoaXMuY29udHJvbHMuc2V0QXR0cmlidXRlKCd2aXNpYmxlJywgZmFsc2UpO1xuICAgICAgdGhpcy5jb250cm9scy5zZXRBdHRyaWJ1dGUoJ2dlb21ldHJ5Jywge1xuICAgICAgICAncHJpbWl0aXZlJzogJ2JveCcsXG4gICAgICAgICd3aWR0aCc6IGRhdGEud2lkdGgsXG4gICAgICAgICdoZWlnaHQnOiBkYXRhLmJ1dHRvbldpZHRoLFxuICAgICAgICAnZGVwdGgnOiBkYXRhLmJ1dHRvbkRlcHRoXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29udHJvbHMuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsIHsgY29sb3I6ICcjMzMzJ30pO1xuICAgICAgdGhpcy5jb250cm9scy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVBsYXlCdXR0b24oKSk7XG4gICAgICB0aGlzLmNvbnRyb2xzLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlUGF1c2VCdXR0b24oKSk7XG4gICAgICB0aGlzLmNvbnRyb2xzLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlUmVwbGF5QnV0dG9uKCkpO1xuICAgICAgdGhpcy5jb250cm9scy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVZvbHVtZU9uQnV0dG9uKCkpO1xuICAgICAgdGhpcy5jb250cm9scy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVZvbHVtZU9mZkJ1dHRvbigpKTtcbiAgICAgIHRoaXMuY29udHJvbHMuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDbG9zZUJ1dHRvbigpKTtcbiAgICAgIHRoaXMuY29udHJvbHMuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVWaWRlb1RpbWluZ0Rpc3BsYXkoKSk7XG4gICAgICAvLyB0aGlzLmNvbnRyb2xzLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQmFja1RvTWVudUJ1dHRvbigpKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHM7XG4gICAgfSxcblxuICAgIGNyZWF0ZVBsYXlCdXR0b246IGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICB0aGlzLnBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1aS1idXR0b24nKTtcbiAgICAgIHRoaXMucGxheUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAncGxheScpO1xuICAgICAgdGhpcy5wbGF5QnV0dG9uLmNsYXNzTmFtZSA9ICdjbGlja2FibGUnO1xuICAgICAgdGhpcy5wbGF5QnV0dG9uLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnLTAuNzggMCAwLjAwMScpO1xuICAgICAgdGhpcy5wbGF5QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGVwdGgnLCBkYXRhLmJ1dHRvbkRlcHRoKTtcbiAgICAgIHRoaXMucGxheUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBkYXRhLmJ1dHRvbldpZHRoKTtcblxuICAgICAgcmV0dXJuIHRoaXMucGxheUJ1dHRvbjtcbiAgICB9LFxuXG4gICAgY3JlYXRlUGF1c2VCdXR0b246IGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICB0aGlzLnBhdXNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWktYnV0dG9uJyk7XG4gICAgICB0aGlzLnBhdXNlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWNvbicsICdwYXVzZScpO1xuICAgICAgdGhpcy5wYXVzZUJ1dHRvbi5jbGFzc05hbWUgPSAnY2xpY2thYmxlJztcbiAgICAgIHRoaXMucGF1c2VCdXR0b24uc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICctMC43OCAwIDEwMDAnKTtcbiAgICAgIHRoaXMucGF1c2VCdXR0b24uc2V0QXR0cmlidXRlKCdkZXB0aCcsIGRhdGEuYnV0dG9uRGVwdGgpO1xuICAgICAgdGhpcy5wYXVzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBkYXRhLmJ1dHRvbldpZHRoKTtcblxuICAgICAgcmV0dXJuIHRoaXMucGF1c2VCdXR0b247XG4gICAgfSxcblxuICAgIGNyZWF0ZVJlcGxheUJ1dHRvbjogZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICAgIHRoaXMucmVwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWktYnV0dG9uJyk7XG4gICAgICB0aGlzLnJlcGxheUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAncmVsb2FkJyk7XG4gICAgICB0aGlzLnJlcGxheUJ1dHRvbi5jbGFzc05hbWUgPSAnY2xpY2thYmxlJztcbiAgICAgIHRoaXMucmVwbGF5QnV0dG9uLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnLTAuNzggMCAxMDAwJyk7XG4gICAgICB0aGlzLnJlcGxheUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RlcHRoJywgZGF0YS5idXR0b25EZXB0aCk7XG4gICAgICB0aGlzLnJlcGxheUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBkYXRhLmJ1dHRvbldpZHRoKTtcblxuICAgICAgcmV0dXJuIHRoaXMucmVwbGF5QnV0dG9uO1xuICAgIH0sXG5cbiAgICBjcmVhdGVWb2x1bWVPbkJ1dHRvbjogZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICAgIHRoaXMudm9sdW1lT25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1aS1idXR0b24nKTtcbiAgICAgIHRoaXMudm9sdW1lT25CdXR0b24uc2V0QXR0cmlidXRlKCdpY29uJywgJ211dGUnKTtcbiAgICAgIHRoaXMudm9sdW1lT25CdXR0b24uY2xhc3NOYW1lID0gJ2NsaWNrYWJsZSc7XG4gICAgICB0aGlzLnZvbHVtZU9uQnV0dG9uLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnLTAuNTggMCAxMDAwJyk7XG4gICAgICB0aGlzLnZvbHVtZU9uQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGVwdGgnLCBkYXRhLmJ1dHRvbkRlcHRoKTtcbiAgICAgIHRoaXMudm9sdW1lT25CdXR0b24uc2V0QXR0cmlidXRlKCdzaXplJywgZGF0YS5idXR0b25XaWR0aCk7XG5cbiAgICAgIHJldHVybiB0aGlzLnZvbHVtZU9uQnV0dG9uO1xuICAgIH0sXG5cbiAgICBjcmVhdGVWb2x1bWVPZmZCdXR0b246IGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICB0aGlzLnZvbHVtZU9mZkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VpLWJ1dHRvbicpO1xuICAgICAgdGhpcy52b2x1bWVPZmZCdXR0b24uc2V0QXR0cmlidXRlKCdpY29uJywgJ3ZvbHVtZScpO1xuICAgICAgdGhpcy52b2x1bWVPZmZCdXR0b24uY2xhc3NOYW1lID0gJ2NsaWNrYWJsZSc7XG4gICAgICB0aGlzLnZvbHVtZU9mZkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJy0wLjU4IDAgMC4wMDEnKTtcbiAgICAgIHRoaXMudm9sdW1lT2ZmQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGVwdGgnLCBkYXRhLmJ1dHRvbkRlcHRoKTtcbiAgICAgIHRoaXMudm9sdW1lT2ZmQnV0dG9uLnNldEF0dHJpYnV0ZSgnc2l6ZScsIGRhdGEuYnV0dG9uV2lkdGgpO1xuXG4gICAgICByZXR1cm4gdGhpcy52b2x1bWVPZmZCdXR0b247XG4gICAgfSxcblxuICAgIGNyZWF0ZUNsb3NlQnV0dG9uOiBmdW5jdGlvbigpe1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VpLWJ1dHRvbicpO1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAnYXJyb3dfbGVmdCcpO1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSAnY2xpY2thYmxlJztcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICcwLjc5IDAgMC4wMDEnKTtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdkZXB0aCcsIGRhdGEuYnV0dG9uRGVwdGgpO1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBkYXRhLmJ1dHRvbldpZHRoKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY2xvc2VCdXR0b247XG4gICAgfSxcblxuICAgIGNyZWF0ZVZpZGVvVGltaW5nRGlzcGxheTogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMudmlkZW9UaW1pbmdEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS10ZXh0Jyk7XG4gICAgICB0aGlzLnZpZGVvVGltaW5nRGlzcGxheS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVZpZGVvUHJvZ3Jlc3NEaXNwbGF5KCkpO1xuICAgICAgdGhpcy52aWRlb1RpbWluZ0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVWaWRlb0Rpc3BsYXlTZXBhcmF0b3IoKSk7XG4gICAgICB0aGlzLnZpZGVvVGltaW5nRGlzcGxheS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVZpZGVvRHVyYXRpb25EaXNwbGF5KCkpO1xuXG4gICAgICByZXR1cm4gdGhpcy52aWRlb1RpbWluZ0Rpc3BsYXk7XG4gICAgfSxcblxuICAgIGNyZWF0ZVZpZGVvUHJvZ3Jlc3NEaXNwbGF5OiBmdW5jdGlvbigpe1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgdGhpcy50aW1lUHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLXRleHQnKTtcbiAgICAgIHRoaXMudGltZVByb2dyZXNzLnNldEF0dHJpYnV0ZSgndHJhbnNwYXJlbnQnLCB0cnVlKTtcbiAgICAgIHRoaXMudGltZVByb2dyZXNzLnNldEF0dHJpYnV0ZSgnb3BhY2l0eScsIDAuNik7XG4gICAgICB0aGlzLnRpbWVQcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzAwOjM0Jyk7XG4gICAgICB0aGlzLnRpbWVQcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ2FsaWduJywgJ2xlZnQnKTtcbiAgICAgIHRoaXMudGltZVByb2dyZXNzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAwLjgpO1xuICAgICAgdGhpcy50aW1lUHJvZ3Jlc3Muc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICctMC4xMTAgMCAwLjAxJyk7XG4gICAgICB0aGlzLnRpbWVQcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ2RlcHRoJywgZGF0YS5idXR0b25EZXB0aCk7XG5cbiAgICAgIHJldHVybiB0aGlzLnRpbWVQcm9ncmVzcztcbiAgICB9LFxuXG4gICAgY3JlYXRlVmlkZW9EaXNwbGF5U2VwYXJhdG9yOiBmdW5jdGlvbigpe1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgdGhpcy50aW1lRGlzcGxheVNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtdGV4dCcpO1xuICAgICAgdGhpcy50aW1lRGlzcGxheVNlcGFyYXRvci5zZXRBdHRyaWJ1dGUoJ3RyYW5zcGFyZW50JywgdHJ1ZSk7XG4gICAgICB0aGlzLnRpbWVEaXNwbGF5U2VwYXJhdG9yLnNldEF0dHJpYnV0ZSgnb3BhY2l0eScsIDAuNik7XG4gICAgICB0aGlzLnRpbWVEaXNwbGF5U2VwYXJhdG9yLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnfCcpO1xuICAgICAgdGhpcy50aW1lRGlzcGxheVNlcGFyYXRvci5zZXRBdHRyaWJ1dGUoJ2FsaWduJywgJ2xlZnQnKTtcbiAgICAgIHRoaXMudGltZURpc3BsYXlTZXBhcmF0b3Iuc2V0QXR0cmlidXRlKCd3aWR0aCcsIDAuOCk7XG4gICAgICB0aGlzLnRpbWVEaXNwbGF5U2VwYXJhdG9yLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnMCAwIDAuMDEnKTtcbiAgICAgIHRoaXMudGltZURpc3BsYXlTZXBhcmF0b3Iuc2V0QXR0cmlidXRlKCdkZXB0aCcsIGRhdGEuYnV0dG9uRGVwdGgpO1xuXG4gICAgICByZXR1cm4gdGhpcy50aW1lRGlzcGxheVNlcGFyYXRvcjtcbiAgICB9LFxuXG4gICAgY3JlYXRlVmlkZW9EdXJhdGlvbkRpc3BsYXk6IGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICB0aGlzLnRpbWVEdXJhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtdGV4dCcpO1xuICAgICAgdGhpcy50aW1lRHVyYXRpb24uc2V0QXR0cmlidXRlKCd0cmFuc3BhcmVudCcsIHRydWUpO1xuICAgICAgdGhpcy50aW1lRHVyYXRpb24uc2V0QXR0cmlidXRlKCdvcGFjaXR5JywgMC42KTtcbiAgICAgIHRoaXMudGltZUR1cmF0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnMDA6NTQnKTtcbiAgICAgIHRoaXMudGltZUR1cmF0aW9uLnNldEF0dHJpYnV0ZSgnYWxpZ24nLCAnbGVmdCcpO1xuICAgICAgdGhpcy50aW1lRHVyYXRpb24uc2V0QXR0cmlidXRlKCd3aWR0aCcsIDAuOCk7XG4gICAgICB0aGlzLnRpbWVEdXJhdGlvbi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJzAuMDMgMCAwLjAxJyk7XG4gICAgICB0aGlzLnRpbWVEdXJhdGlvbi5zZXRBdHRyaWJ1dGUoJ2RlcHRoJywgZGF0YS5idXR0b25EZXB0aCk7XG5cbiAgICAgIHJldHVybiB0aGlzLnRpbWVEdXJhdGlvbjtcbiAgICB9LFxuXG4gICAgY3JlYXRlQmFja1RvTWVudUJ1dHRvbjogZnVuY3Rpb24oKXtcblxuICAgIH1cblxuICB9XG4pOyIsIlxuaW1wb3J0IEVuYWJsaW5nTWl4aW4gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2VuYWJsaW5nLW1peGluJztcblxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFxuICAnbXV0ZS12aWRlbycsXG4gIEVuYWJsaW5nTWl4aW4oXG4gICAge1xuXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdmlkZW86IHsgdHlwZTogJ3NlbGVjdG9yJyB9LFxuICAgICAgICBzcGVlZDogeyB0eXBlOiAnbnVtYmVyJywgZGVmYXVsdDogMzAwIH1cbiAgICAgIH0sXG5cbiAgICAgIG9yaWdpbmFsSW5pdDogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5pbnRlcnZhbFN0ZXBzID0gMTAwMCAvIDYwO1xuICAgICAgICB0aGlzLmludGVydmFsUG9pbnRlciA9IG51bGw7XG4gICAgICAgIHRoaXMudm9sdW1lU3RlcHMgPSAxO1xuICAgICAgfSxcblxuICAgICAgb3JpZ2luYWxCaW5kTWV0aG9kczogZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gdGhpcy5iaW5kXG4gICAgICB9LFxuXG4gICAgICBvbkVuYWJsZTogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgaWYgKGRhdGEudmlkZW8pIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Vm9sdW1lID0gZGF0YS52aWRlby52b2x1bWU7XG4gICAgICAgICAgdGhpcy52b2x1bWVTdGVwcyA9IGRhdGEuc3BlZWQgLyB0aGlzLmludGVydmFsc3RlcHM7XG4gICAgICAgICAgdGhpcy5pbnRlcnZhbFBvaW50ZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnJlZHVjZVZvbHVtZSwgZGF0YS5zcGVlZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHJlZHVjZVZvbHVtZTogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgY29uc3QgbmV3Vm9sdW1lID0gZGF0YS52aWRlby52b2x1bWUgLSB0aGlzLnZvbHVtZVN0ZXBzO1xuICAgICAgICBkYXRhLnZpZGVvLnZvbHVtZSA9IE1hdGgubWF4KDAsIG5ld1ZvbHVtZSk7XG4gICAgICB9XG5cbiAgICB9XG4gIClcbik7IiwiXG5pbXBvcnQgRW5hYmxpbmdNaXhpbiBmcm9tICcuLi8uLi91dGlsaXRpZXMvZW5hYmxpbmctbWl4aW4nO1xuXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXG4gICdwYXVzZS1hdWRpbycsXG4gIEVuYWJsaW5nTWl4aW4oXG4gICAge1xuXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgYXVkaW86IHsgdHlwZTogJ3NlbGVjdG9yJyB9XG4gICAgICB9LFxuXG4gICAgICBvbkVuYWJsZTogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgaWYgKGRhdGEuYXVkaW8pIHtcbiAgICAgICAgICBkYXRhLmF1ZGlvLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgKVxuKTsiLCJcbmltcG9ydCBFbmFibGluZ01peGluIGZyb20gJy4uLy4uL3V0aWxpdGllcy9lbmFibGluZy1taXhpbic7XG5cbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcbiAgJ3BsYXktYXVkaW8nLFxuICBFbmFibGluZ01peGluKFxuICAgIHtcblxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIGF1ZGlvOiB7IHR5cGU6ICdzZWxlY3RvcicgfVxuICAgICAgfSxcblxuICAgICAgb25FbmFibGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgIGlmIChkYXRhLmF1ZGlvKSB7XG4gICAgICAgICAgZGF0YS5hdWRpby5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgKVxuKTsiLCJcbmltcG9ydCBFbmFibGluZ01peGluIGZyb20gJy4uLy4uL3V0aWxpdGllcy9lbmFibGluZy1taXhpbic7XG5cbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcbiAgJ3BsYXktdmlkZW8nLFxuICBFbmFibGluZ01peGluKFxuICAgIHtcblxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIGNvbnRyb2xsZXI6IHsgdHlwZTogJ3NlbGVjdG9yJyB9XG4gICAgICB9LFxuXG4gICAgICBvbkVuYWJsZTogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5kYXRhLmNvbnRyb2xsZXIuY29tcG9uZW50c1sndmlkZW8tY29udHJvbGxlciddLnBsYXlWaWRlbygpO1xuICAgICAgfVxuXG4gICAgfVxuICApXG4pOyIsIlxuaW1wb3J0IEVuYWJsaW5nTWl4aW4gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2VuYWJsaW5nLW1peGluJztcblxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFxuICAnc3RhcnQtdmlkZW8nLFxuICBFbmFibGluZ01peGluKFxuICAgIHtcblxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHZpZGVvOiB7IHR5cGU6ICdzZWxlY3RvcicgfVxuICAgICAgfSxcblxuICAgICAgb25FbmFibGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHNlbGY9dGhpcztcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgaWYgKGRhdGEudmlkZW8pe1xuICAgICAgICAgIC8vIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd2aWRlby1jYW4tcGxheScsIHRydWUpO1xuICAgICAgICAgIC8vIGRhdGEudmlkZW8uY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgIC8vIGRhdGEudmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgWyd0b3VjaHN0YXJ0JywnY2xpY2snXS5mb3JFYWNoKChldmVudCk9PntcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gb25lVGltZVBsYXkoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5lbC5zZXRBdHRyaWJ1dGUoJ3ZpZGVvLWNhbi1wbGF5JywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZGF0YS52aWRlby5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgZGF0YS52aWRlby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbmVUaW1lUGxheSk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25lVGltZVBsYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgKVxuKTtcbiIsImltcG9ydCBFbmFibGluZ01peGluIGZyb20gJy4uLy4uL3V0aWxpdGllcy9lbmFibGluZy1taXhpbic7XG5cbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcbiAgJ3N0b3AtdmlkZW8nLFxuICBFbmFibGluZ01peGluKFxuICAgIHtcblxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHZpZGVvOiB7IHR5cGU6ICdzZWxlY3RvcicgfVxuICAgICAgfSxcblxuICAgICAgb25FbmFibGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICBkYXRhLnZpZGVvLnBhdXNlKCk7XG4gICAgICB9XG5cbiAgICB9XG4gIClcbik7IiwiXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXG4gICd2aWRlby1jYW4tcGxheScsXG4gIHtcbiAgICBzY2hlbWE6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2VcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuYmluZE1ldGhvZHMoKTtcbiAgICB9LFxuXG4gICAgYmluZE1ldGhvZHM6IGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBiaW5kID0gQUZSQU1FLnV0aWxzLmJpbmQ7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzID0gYmluZCh0aGlzLmFkZEV2ZW50TGlzdGVuZXJzLCB0aGlzKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBiaW5kKHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMsIHRoaXMpO1xuICAgICAgdGhpcy5vblBsYXkgPSBiaW5kKHRoaXMub25QbGF5LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgcGxheTogZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICBjb25zdCB2aWRlb0lkID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3ZpZGVvJyk7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgdGhpcy5zeXN0ZW0uZWRpdENhblBsYXkodmlkZW9JZCwgZGF0YSk7XG4gICAgfSxcblxuICAgIHJlbW92ZTogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbihvbGREYXRhKXtcbiAgICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLmRhdGE7XG4gICAgICBjb25zdCB2aWRlb0lkID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3ZpZGVvJyk7XG4gICAgICB0aGlzLnN5c3RlbS5lZGl0Q2FuUGxheSh2aWRlb0lkLCBuZXdEYXRhKTtcbiAgICB9LFxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgICBjb25zdCB2aWRlb0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbC5nZXRBdHRyaWJ1dGUoJ3ZpZGVvJykpO1xuICAgICAgdmlkZW9FbC5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgdGhpcy5vblBsYXkpO1xuICAgIH0sXG5cbiAgICByZW1vdmVFdmVudExpc3RlbmVyczogZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcbiAgICAgIGNvbnN0IHZpZGVvRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsLmdldEF0dHJpYnV0ZSgndmlkZW8nKSk7XG4gICAgICB2aWRlb0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BsYXknLCB0aGlzLm9uUGxheSk7XG4gICAgfSxcblxuICAgIG9uUGxheTogZnVuY3Rpb24oZXZ0KXtcbiAgICAgIGNvbnN0IHZpZGVvSWQgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgndmlkZW8nKTtcbiAgICAgIGlmICh0aGlzLnN5c3RlbS5jYW5QbGF5KHZpZGVvSWQpID09PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmluZm8oXCJBdHRlbXB0IHRvIHBsYXkgYSB2aWRlbyBoYXMgYmVlbiBibG9ja2VkOiBcIiArIHZpZGVvSWQpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHZpZGVvSWQpLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4pOyIsIlxucmVxdWlyZSgnLi4vc3lzdGVtcy92aWRlby1jb250cm9sbGVyJyk7XG5cbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcbiAgJ3ZpZGVvLWNvbnRyb2xsZXInLFxuICB7XG5cbiAgICBzY2hlbWE6IHtcbiAgICAgICAgJ2F1dG9wbGF5JzogeyB0eXBlOiAnYm9vbGVhbicsIGRlZmF1bHQ6IGZhbHNlIH0sXG4gICAgICAgICd0YXJnZXQnOiB7IHR5cGU6ICdzZWxlY3RvcicgfVxuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5iaW5kTWV0aG9kcygpO1xuICAgIH0sXG5cbiAgICBiaW5kTWV0aG9kczogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMucGxheVZpZGVvID0gQUZSQU1FLnV0aWxzLmJpbmQodGhpcy5wbGF5VmlkZW8sIHRoaXMpO1xuICAgICAgdGhpcy5tdXRlVmlkZW8gPSBBRlJBTUUudXRpbHMuYmluZCh0aGlzLm11dGVWaWRlbywgdGhpcyk7XG4gICAgfSxcblxuICAgIHN0b3BWaWRlbzogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuc3lzdGVtLnN0b3BWaWRlbyh0aGlzLmVsLCB0aGlzLmRhdGEuc3JjKTtcbiAgICB9LFxuXG4gICAgcGxheVZpZGVvOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICAgIHRoaXMuc3lzdGVtLnBsYXlWaWRlbyh0aGlzLmVsLCBkYXRhLnRhcmdldCk7XG4gICAgfVxuXG4gIH1cbik7IiwiXG5BRlJBTUUucmVnaXN0ZXJQcmltaXRpdmUoXG4gICdkZXNrdG9wLXZpZGVvc3BoZXJlLWNvbnRyb2xzJyxcbiAge1xuICAgIGRlZmF1bHRDb21wb25lbnRzOiB7XG4gICAgICBcImRlc2t0b3AtdmlkZW9zcGhlcmUtY29udHJvbHNcIjoge31cbiAgICB9LFxuXG4gICAgbWFwcGluZ3M6IHtcbiAgICAgIFwidmlkZW9cIjogXCJkZXNrdG9wLXZpZGVvc3BoZXJlLWNvbnRyb2xzLnZpZGVvXCJcbiAgICB9XG4gIH1cbik7XG4iLCJBRlJBTUUucmVnaXN0ZXJQcmltaXRpdmUoJ2VuZC12aWRlbycsIHtcblxuICBkZWZhdWx0Q29tcG9uZW50czoge1xuICAgICdlbmQtdmlkZW8nOiB7fVxuICB9LFxuXG4gIG1hcHBpbmdzOiB7XG4gICAgY29udHJvbGxlcjogJ2VuZC12aWRlby5jb250cm9sbGVyJ1xuICB9XG5cbn0pOyIsIlxuQUZSQU1FLnJlZ2lzdGVyUHJpbWl0aXZlKFxuICAnZmxhdC12aWRlby1jb250cm9scycsXG4gIHtcbiAgICBkZWZhdWx0Q29tcG9uZW50czoge1xuICAgICAgJ2ZsYXQtdmlkZW8tY29udHJvbHMnOiB7fVxuICAgIH0sXG5cbiAgICBtYXBwaW5nczoge1xuICAgICAgJ3ZpZGVvJzogJ2ZsYXQtdmlkZW8tY29udHJvbHMudmlkZW8nLFxuICAgICAgJ3dpZHRoJzogJ2ZsYXQtdmlkZW8tY29udHJvbHMud2lkdGgnLFxuICAgICAgJ2J1dHRvbi13aWR0aCc6ICdmbGF0LXZpZGVvLWNvbnRyb2xzLmJ1dHRvbldpZHRoJyxcbiAgICAgICdidXR0b24tZGVwdGgnOiAnZmxhdC12aWRlby1jb250cm9scy5idXR0b25EZXB0aCcsXG4gICAgICAnZXhpdC10YXJnZXQnOiAnZmxhdC12aWRlby1jb250cm9scy5leGl0VGFyZ2V0J1xuICAgIH1cbiAgfVxuKSIsIkFGUkFNRS5yZWdpc3RlclByaW1pdGl2ZSgnbXV0ZS12aWRlbycsIHtcblxuICBkZWZhdWx0Q29tcG9uZW50czoge1xuICAgICdtdXRlLXZpZGVvJzoge31cbiAgfSxcblxuICBtYXBwaW5nczoge1xuICAgIHZpZGVvOiAnbXV0ZS12aWRlby52aWRlbycsXG4gICAgc3BlZWQ6ICdtdXRlLXZpZGVvLnNwZWVkJ1xuICB9XG5cbn0pOyIsIlxuQUZSQU1FLnJlZ2lzdGVyUHJpbWl0aXZlKCdvbi12aWRlby1jbG9zZWQnLCB7XG5cbiAgZGVmYXVsdENvbXBvbmVudHM6IHtcbiAgICAnbGlzdGVuLWZvci1wYXJlbnQtZXZlbnQnOiB7IGV2ZW50OiAnbHVjaWR3ZWIudmlkZW8uY2xvc2VkJyB9LFxuICAgICdlbmFibGUtY2hpbGRyZW4nOiB7fVxuICB9XG5cbn0pOyIsIlxuQUZSQU1FLnJlZ2lzdGVyUHJpbWl0aXZlKCdvbi12aWRlby1lbmRlZCcsIHtcblxuICBkZWZhdWx0Q29tcG9uZW50czoge1xuICAgICdsaXN0ZW4tZm9yLXBhcmVudC1ldmVudCc6IHsgZXZlbnQ6ICdsdWNpZHdlYi52aWRlby5lbmRlZCcgfSxcbiAgICAnZW5hYmxlLWNoaWxkcmVuJzoge31cbiAgfVxuXG59KTsiLCJBRlJBTUUucmVnaXN0ZXJQcmltaXRpdmUoJ3BhdXNlLWF1ZGlvJywge1xuXG4gIGRlZmF1bHRDb21wb25lbnRzOiB7XG4gICAgJ3BhdXNlLWF1ZGlvJzoge31cbiAgfSxcblxuICBtYXBwaW5nczoge1xuICAgIGF1ZGlvOiAncGF1c2UtYXVkaW8uYXVkaW8nXG4gIH1cblxufSk7IiwiQUZSQU1FLnJlZ2lzdGVyUHJpbWl0aXZlKCdwbGF5LWF1ZGlvJywge1xuXG4gIGRlZmF1bHRDb21wb25lbnRzOiB7XG4gICAgJ3BsYXktYXVkaW8nOiB7fVxuICB9LFxuXG4gIG1hcHBpbmdzOiB7XG4gICAgYXVkaW86ICdwbGF5LWF1ZGlvLmF1ZGlvJ1xuICB9XG5cbn0pOyIsIkFGUkFNRS5yZWdpc3RlclByaW1pdGl2ZSgncGxheS12aWRlbycsIHtcblxuICBkZWZhdWx0Q29tcG9uZW50czoge1xuICAgICdwbGF5LXZpZGVvJzoge31cbiAgfSxcblxuICBtYXBwaW5nczoge1xuICAgIGNvbnRyb2xsZXI6ICdwbGF5LXZpZGVvLmNvbnRyb2xsZXInXG4gIH1cblxufSk7IiwiQUZSQU1FLnJlZ2lzdGVyUHJpbWl0aXZlKCdzdGFydC12aWRlbycsIHtcblxuICBkZWZhdWx0Q29tcG9uZW50czoge1xuICAgICdzdGFydC12aWRlbyc6IHt9XG4gIH0sXG5cbiAgbWFwcGluZ3M6IHtcbiAgICB2aWRlbzogJ3N0YXJ0LXZpZGVvLnZpZGVvJ1xuICB9XG5cbn0pOyIsIkFGUkFNRS5yZWdpc3RlclByaW1pdGl2ZSgnc3RvcC12aWRlbycsIHtcblxuICBkZWZhdWx0Q29tcG9uZW50czoge1xuICAgICdzdG9wLXZpZGVvJzoge31cbiAgfSxcblxuICAgIG1hcHBpbmdzOiB7XG4gICAgICAgIHZpZGVvOiAnc3RvcC12aWRlby52aWRlbydcbiAgICB9XG5cbn0pOyIsIlxucmVxdWlyZSgnLi4vY29tcG9uZW50cy92aWRlby1jb250cm9sbGVyJylcblxuQUZSQU1FLnJlZ2lzdGVyUHJpbWl0aXZlKCd2aWRlby1jb250cm9sbGVyJywge1xuXG4gIGRlZmF1bHRDb21wb25lbnRzOiB7XG4gICAgXCJ2aWRlby1jb250cm9sbGVyXCI6IHt9XG4gIH0sXG5cbiAgbWFwcGluZ3M6IHtcbiAgICAgICdhdXRvcGxheSc6ICd2aWRlby1jb250cm9sbGVyLmF1dG9wbGF5JyxcbiAgICAgICd0YXJnZXQnOiAndmlkZW8tY29udHJvbGxlci50YXJnZXQnXG4gIH1cblxufSk7IiwiXG5BRlJBTUUucmVnaXN0ZXJTeXN0ZW0oXG4gICd2aWRlby1jYW4tcGxheScsXG4gIHtcbiAgICBpbml0OiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5iaW5kTWV0aG9kcygpO1xuICAgICAgdGhpcy52aWRlb3MgPSBbXTtcbiAgICB9LFxuXG4gICAgYmluZE1ldGhvZHM6IGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBiaW5kID0gQUZSQU1FLnV0aWxzLmJpbmQ7XG4gICAgICB0aGlzLmNhblBsYXkgPSBiaW5kKHRoaXMuY2FuUGxheSwgdGhpcyk7XG4gICAgICB0aGlzLmVkaXRDYW5QbGF5ID0gYmluZCh0aGlzLmVkaXRDYW5QbGF5LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgZWRpdENhblBsYXk6IGZ1bmN0aW9uKHNyYywgbmV3VmFsdWUpe1xuICAgICAgdGhpcy52aWRlb3Nbc3JjXSA9IG5ld1ZhbHVlO1xuICAgIH0sXG5cbiAgICBjYW5QbGF5OiBmdW5jdGlvbihzcmMpIHtcbiAgICAgIGlmIChzcmMgaW4gdGhpcy52aWRlb3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlkZW9zW3NyY107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbik7XG4iLCJyZXF1aXJlKCcuLi8uLi9jb21tb24vY29tcG9uZW50cy9pZGxlJyk7XG5pbXBvcnQgZnNjcmVlbiBmcm9tICdmc2NyZWVuJztcbmltcG9ydCBDbGlwYm9hcmQgZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC1wb2x5ZmlsbCc7XG5cbmltcG9ydCBWaWRlb0NvbnRyb2xzTWFya3VwIGZyb20gJy4vdmlkZW8tY29udHJvbHMtbWFya3VwJztcblxuQUZSQU1FLnJlZ2lzdGVyU3lzdGVtKCd2aWRlby1jb250cm9sbGVyJywge1xuXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJpbmRNZXRob2RzKCk7XG4gICAgICAgIHRoaXMudmlkZW9TcGhlcmUgPSBudWxsO1xuICAgICAgICB0aGlzLnZpZGVvU3BoZXJlQ29uZmlndXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnZpZGVvID0gbnVsbDtcbiAgICAgICAgdGhpcy5kb2N1bWVudEludGVyYWN0aW9uUmVjZWl2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdXRvcGxheSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRyb2xzRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBudWxsO1xuICAgICAgICB0aGlzLnByb2dyZXNzQW5pbWF0b3IgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbnRyb2xzTW92ZW1lbnRJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMudnIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2dvID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbC5zY2VuZUVsLnNldEF0dHJpYnV0ZSgnZGV2aWNlLWRldGVjdGlvbicsIHt9KTtcbiAgICAgICAgdGhpcy5lbC5zY2VuZUVsLnNldEF0dHJpYnV0ZSgndHJhbnNpdGlvbi10by1jYXJkYm9hcmQnLCB7fSk7XG4gICAgfSxcblxuICAgIGJpbmRNZXRob2RzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgYmluZCA9IEFGUkFNRS51dGlscy5iaW5kO1xuXG4gICAgICAgIC8vIHZpZGVvIG1ldGhvZHNcbiAgICAgICAgdGhpcy5wbGF5VmlkZW8gPSBiaW5kKHRoaXMucGxheVZpZGVvLCB0aGlzKTtcbiAgICAgICAgdGhpcy5wYXVzZVZpZGVvID0gYmluZCh0aGlzLnBhdXNlVmlkZW8sIHRoaXMpO1xuICAgICAgICB0aGlzLnZvbHVtZU9uID0gYmluZCh0aGlzLnZvbHVtZU9uLCB0aGlzKTtcbiAgICAgICAgdGhpcy52b2x1bWVPZmYgPSBiaW5kKHRoaXMudm9sdW1lT2ZmLCB0aGlzKTtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGJpbmQodGhpcy5kdXJhdGlvbiwgdGhpcyk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBiaW5kKHRoaXMudGl0bGUsIHRoaXMpO1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gYmluZCh0aGlzLmN1cnJlbnRUaW1lLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VUaW1lID0gYmluZCh0aGlzLmNoYW5nZVRpbWUsIHRoaXMpO1xuXG4gICAgICAgIC8vIGV2ZW50IGhhbmRsZXJzXG5cbiAgICAgICAgdGhpcy5vblZpZGVvUmVhZHlUb1BsYXkgPSBiaW5kKHRoaXMub25WaWRlb1JlYWR5VG9QbGF5LCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblZpZGVvRW5kZWQgPSBiaW5kKHRoaXMub25WaWRlb0VuZGVkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblZpZGVvU3RhbGxlZCA9IGJpbmQodGhpcy5vblZpZGVvU3RhbGxlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMub25TdGFydEJ1dHRvbkNsaWNrZWQgPSBiaW5kKHRoaXMub25TdGFydEJ1dHRvbkNsaWNrZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLmVuYWJsZUhUTUxWaWRlb0NvbnRyb2xzID0gYmluZCh0aGlzLmVuYWJsZUhUTUxWaWRlb0NvbnRyb2xzLCB0aGlzKTtcbiAgICAgICAgdGhpcy5lbmFibGVWUlZpZGVvQ29udHJvbHMgPSBiaW5kKHRoaXMuZW5hYmxlVlJWaWRlb0NvbnRyb2xzLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblZpZGVvUGxheUNsaWNrZWQgPSBiaW5kKHRoaXMub25WaWRlb1BsYXlDbGlja2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblZpZGVvUGF1c2VDbGlja2VkID0gYmluZCh0aGlzLm9uVmlkZW9QYXVzZUNsaWNrZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uVmlkZW9SZXBsYXlDbGlja2VkID0gYmluZCh0aGlzLm9uVmlkZW9SZXBsYXlDbGlja2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblZpZGVvVm9sdW1lT2ZmQ2xpY2tlZCA9IGJpbmQodGhpcy5vblZpZGVvVm9sdW1lT2ZmQ2xpY2tlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMub25WaWRlb1ZvbHVtZU9uQ2xpY2tlZCA9IGJpbmQodGhpcy5vblZpZGVvVm9sdW1lT25DbGlja2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vbkVudGVyVlJDbGlja2VkID0gYmluZCh0aGlzLm9uRW50ZXJWUkNsaWNrZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uRW50ZXJWUiA9IGJpbmQodGhpcy5vbkVudGVyVlIsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uRXhpdFZSID0gYmluZCh0aGlzLm9uRXhpdFZSLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vbkVudGVyRnVsbHNjcmVlbkNsaWNrZWQgPSBiaW5kKHRoaXMub25FbnRlckZ1bGxzY3JlZW5DbGlja2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vbkZ1bGxzY3JlZW5DaGFuZ2UgPSBiaW5kKHRoaXMub25GdWxsc2NyZWVuQ2hhbmdlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblZpZGVvVGltZVVwZGF0ZSA9IGJpbmQodGhpcy5vblZpZGVvVGltZVVwZGF0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuc3RhcnRQcm9ncmVzc0FuaW1hdGlvbiA9IGJpbmQodGhpcy5zdGFydFByb2dyZXNzQW5pbWF0aW9uLCB0aGlzKTtcbiAgICAgICAgdGhpcy5zdG9wUHJvZ3Jlc3NBbmltYXRpb24gPSBiaW5kKHRoaXMuc3RvcFByb2dyZXNzQW5pbWF0aW9uLCB0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlUHJvZ3Jlc3NCYXIgPSBiaW5kKHRoaXMubW92ZVByb2dyZXNzQmFyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93Q29udHJvbHMgPSBiaW5kKHRoaXMuc2hvd0NvbnRyb2xzLCB0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93RW5kU2NyZWVuID0gYmluZCh0aGlzLnNob3dFbmRTY3JlZW4sIHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVDb250cm9scyA9IGJpbmQodGhpcy5oaWRlQ29udHJvbHMsIHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmVDb250cm9sc1RvID0gYmluZCh0aGlzLm1vdmVDb250cm9sc1RvLCB0aGlzKTtcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGJpbmQodGhpcy5pc01vdmluZywgdGhpcyk7XG4gICAgICAgIHRoaXMuc3RvcE1vdmluZyA9IGJpbmQodGhpcy5zdG9wTW92aW5nLCB0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb250cm9sc1Bvc2l0aW9uID0gYmluZCh0aGlzLnVwZGF0ZUNvbnRyb2xzUG9zaXRpb24sIHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VJZGxlID0gYmluZCh0aGlzLm9uTW91c2VJZGxlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92aW5nID0gYmluZCh0aGlzLm9uTW91c2VNb3ZpbmcsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uU2Nyb2xsYmFyQ2xpY2tlZCA9IGJpbmQodGhpcy5vblNjcm9sbGJhckNsaWNrZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ29weUxpbmtUb0NsaXBib2FyZCA9IGJpbmQodGhpcy5vbkNvcHlMaW5rVG9DbGlwYm9hcmQsIHRoaXMpO1xuICAgICAgICB0aGlzLmNvbmZpcm1MaW5rQ29waWVkVG9DbGlwYm9hcmQgPSBiaW5kKHRoaXMuY29uZmlybUxpbmtDb3BpZWRUb0NsaXBib2FyZCwgdGhpcyk7XG4gICAgICAgIHRoaXMub25Cb2R5VG91Y2hFbmQgPSBiaW5kKHRoaXMub25Cb2R5VG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICB0aGlzLmVuYWJsZUNvbnRyb2xzID0gYmluZCh0aGlzLmVuYWJsZUNvbnRyb2xzLCB0aGlzKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlQ29udHJvbHMgPSBiaW5kKHRoaXMuZGlzYWJsZUNvbnRyb2xzLCB0aGlzKTtcblxuICAgICAgICAvLyB2aWRlbyBjb250cm9scyBldmVudCBoYW5kbGVyc1xuXG4gICAgICAgIHRoaXMub25WaWRlb0NvbnRyb2xzUGxheUNsaWNrZWQgPSBiaW5kKHRoaXMub25WaWRlb0NvbnRyb2xzUGxheUNsaWNrZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uVmlkZW9Db250cm9sc1BhdXNlQ2xpY2tlZCA9IGJpbmQodGhpcy5vblZpZGVvQ29udHJvbHNQYXVzZUNsaWNrZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uVmlkZW9Db250cm9sc1JlcGxheUNsaWNrZWQgPSBiaW5kKHRoaXMub25WaWRlb0NvbnRyb2xzUmVwbGF5Q2xpY2tlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMub25WaWRlb0NvbnRyb2xzVm9sdW1lT2ZmQ2xpY2tlZCA9IGJpbmQodGhpcy5vblZpZGVvQ29udHJvbHNWb2x1bWVPZmZDbGlja2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblZpZGVvQ29udHJvbHNWb2x1bWVPbkNsaWNrZWQgPSBiaW5kKHRoaXMub25WaWRlb0NvbnRyb2xzVm9sdW1lT25DbGlja2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblNoYXJlQnV0dG9uQ2xpY2tlZCA9IGJpbmQodGhpcy5vblNoYXJlQnV0dG9uQ2xpY2tlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMub25TaGFyZU1vZGFsQ2xvc2VkID0gYmluZCh0aGlzLm9uU2hhcmVNb2RhbENsb3NlZCwgdGhpcyk7XG5cbiAgICAgICAgLy8gdmlkZW8gZXZlbnQgaGFuZGxlcnNcblxuICAgICAgICB0aGlzLm9uVmlkZW9QYXVzZWQgPSBiaW5kKHRoaXMub25WaWRlb1BhdXNlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMub25WaWRlb1BsYXlpbmcgPSBiaW5kKHRoaXMub25WaWRlb1BsYXlpbmcsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uVmlkZW9Wb2x1bWVDaGFuZ2UgPSBiaW5kKHRoaXMub25WaWRlb1ZvbHVtZUNoYW5nZSwgdGhpcyk7XG4gICAgfSxcblxuICAgIHRpdGxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZGVvKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52aWRlby5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfSxcblxuICAgIGR1cmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZGVvKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52aWRlby5kdXJhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICBjdXJyZW50VGltZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy52aWRlbykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlkZW8uY3VycmVudFRpbWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2hhbmdlVGltZTogZnVuY3Rpb24gKG5ld1RpbWUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlkZW8pIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW8uY3VycmVudFRpbWUgPSBuZXdUaW1lO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHBhdXNlVmlkZW86IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIHZvbHVtZU9uOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICB2b2x1bWVPZmY6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuXG4gICAgb25WaWRlb0NvbnRyb2xzUGxheUNsaWNrZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy52aWRlby5wbGF5KCk7XG4gICAgICAgIHRoaXMuc2hvd0NvbnRyb2xzKCk7XG4gICAgICAgIHRoaXMuc3RhcnRQcm9ncmVzc0FuaW1hdGlvbigpO1xuICAgIH0sXG5cbiAgICBvblZpZGVvQ29udHJvbHNQYXVzZUNsaWNrZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zaG93Q29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5zdG9wUHJvZ3Jlc3NBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy52aWRlby5wYXVzZSgpO1xuICAgIH0sXG5cbiAgICBvblZpZGVvQ29udHJvbHNSZXBsYXlDbGlja2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudmlkZW8uY3VycmVudFRpbWUgPSAwLjA7XG4gICAgICAgIHRoaXMuc2hvd0NvbnRyb2xzKCk7XG4gICAgICAgIHRoaXMuc3RhcnRQcm9ncmVzc0FuaW1hdGlvbigpO1xuICAgICAgICB0aGlzLnZpZGVvLnBsYXkoKTtcbiAgICAgICAgdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yKCcucGxheS12aWRlbycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yKCcucmVwbGF5LXZpZGVvJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLmNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJy5wYXVzZS12aWRlbycpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSxcblxuICAgIG9uVmlkZW9Db250cm9sc1ZvbHVtZU9uQ2xpY2tlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbG9yID0gJyMzNGRkNGUnO1xuICAgICAgICB0aGlzLnZpZGVvLm11dGVkID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uVmlkZW9Db250cm9sc1ZvbHVtZU9mZkNsaWNrZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy52aWRlby5tdXRlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIG9uVmlkZW9QYXVzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlkZW8gJiYgdGhpcy52aWRlby5lbmRlZCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuZWwuZW1pdCgnbHVjaWR3ZWIudmlkZW8tY29udHJvbGxlci52aWRlby1wYXVzZWQnKTtcblxuICAgICAgICAvLyBAdG9kbyBtb3ZlIHRoaXMgdG8gaXQncyBvd24gY29tcG9uZW50XG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2xzKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LXZpZGVvJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMucXVlcnlTZWxlY3RvcignLnJlcGxheS12aWRlbycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMucXVlcnlTZWxlY3RvcignLnBhdXNlLXZpZGVvJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uVmlkZW9QbGF5aW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwuZW1pdCgnbHVjaWR3ZWIudmlkZW8tY29udHJvbGxlci52aWRlby1wbGF5aW5nJyk7XG5cbiAgICAgICAgLy8gQHRvZG8gbW92ZSB0aGlzIHRvIGl0J3Mgb3duIGNvbnRyb2xsZXIgY29tcG9uZW50XG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2xzKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LXZpZGVvJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yKCcucmVwbGF5LXZpZGVvJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yKCcucGF1c2UtdmlkZW8nKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uVmlkZW9FbmRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0b3BQcm9ncmVzc0FuaW1hdGlvbigpO1xuICAgICAgICB0aGlzLmVsLmVtaXQoJ2x1Y2lkd2ViLnZpZGVvLWNvbnRyb2xsZXIucGxheWluZy1lbmRlZCcsIHt9LCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci5lbWl0KCdsdWNpZHdlYi52aWRlby1jb250cm9sbGVyLnBsYXlpbmctZW5kZWQnLCB7fSwgZmFsc2UpO1xuXG4gICAgICAgIC8vIEB0b2RvIG1vdmUgdG8gaXQncyBvd24gY29udHJvbGxlciBjb21wb25lbnRcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbHMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMucXVlcnlTZWxlY3RvcignLnBsYXktdmlkZW8nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJy5yZXBsYXktdmlkZW8nKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yKCcucGF1c2UtdmlkZW8nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dFbmRTY3JlZW4oKTtcblxuICAgICAgICAvLyB0aGlzLnNob3dDb250cm9scygpO1xuICAgIH0sXG5cbiAgICBvblZpZGVvU3RhbGxlZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAvLyB3aW5kb3cuYWxlcnQoJ3ZpZGVvIHN0YWxsZWQnKTtcbiAgICAgICAgaWYgKHRoaXMudmlkZW8pIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW8ucGxheSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uVmlkZW9Wb2x1bWVDaGFuZ2U6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmlkZW8ubXV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuZW1pdCgnbHVjaWR3ZWIudmlkZW8tY29udHJvbGxlci52b2x1bWUtb2ZmJywge30sIGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gQHRvZG8gcmVtb3ZlIHRvIHNlcGFyYXRlIGNvbXBvbmVudFxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yKCcudHVybi12aWRlby12b2x1bWUtb2ZmJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHMucXVlcnlTZWxlY3RvcignLnR1cm4tdmlkZW8tdm9sdW1lLW9uJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwuZW1pdCgnbHVjaWR3ZWIudmlkZW8tY29udHJvbGxlci52b2x1bWUtb24nLCB7fSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyBAdG9kbyByZW1vdmUgdG8gc2VwYXJhdGUgY29tcG9uZW50XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9scylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJy50dXJuLXZpZGVvLXZvbHVtZS1vZmYnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHMucXVlcnlTZWxlY3RvcignLnR1cm4tdmlkZW8tdm9sdW1lLW9uJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGVuYWJsZUNvbnRyb2xzOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZygnRU5BQkxFIGNvbnRyb2xzJyk7XG4gICAgICAgIHRoaXMuY29udHJvbHNFbmFibGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgZGlzYWJsZUNvbnRyb2xzOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLmNvbnRyb2xzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBzdG9wVmlkZW86IGZ1bmN0aW9uKHZpZGVvQ29udHJvbGxlciwgdmlkZW9FbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZpZGVvKSB7XG4gICAgICAgICAgICB0aGlzLnZpZGVvLnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLnZpZGVvID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0FuaW1hdG9yKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucHJvZ3Jlc3NBbmltYXRvcik7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQW5pbWF0b3IgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZpZGVvU3BoZXJlKSB7XG4gICAgICAgICAgICB0aGlzLnZpZGVvU3BoZXJlLnBhcmVudEVsLnJlbW92ZUNoaWxkKHRoaXMudmlkZW9TcGhlcmUpO1xuICAgICAgICAgICAgdGhpcy52aWRlb1NwaGVyZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbnVsbDtcbiAgICB9LFxuXG4gICAgcGxheVZpZGVvOiBmdW5jdGlvbiAodmlkZW9Db250cm9sbGVyLCB2aWRlb0VsZW1lbnQpIHtcblxuICAgICAgICB0aGlzLnZpZGVvU3BoZXJlQ29uZmlndXJlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHVucmVnaXN0ZXIgb2xkIGV2ZW50cyBzbyB0aGF0IHRoZXkgZG8gbm90IGludGVycnVwdCBhcHAgZmxvdyBhbnltb3JlXG5cbiAgICAgICAgaWYgKHRoaXMudmlkZW8pIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVmlkZW9FdmVudExpc3RlbmVycyh0aGlzLnZpZGVvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YXJ0IGxpc3RlbmluZyB0byByZWxldmFudCB2aWRlbyBldmVudHMgb2YgdGhlIG5ldyB2aWRlb1xuXG4gICAgICAgIHRoaXMudmlkZW8gPSB2aWRlb0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IHZpZGVvQ29udHJvbGxlcjtcbiAgICAgICAgdGhpcy5hZGRWaWRlb0V2ZW50TGlzdGVuZXJzKHRoaXMudmlkZW8pO1xuXG4gICAgICAgIGlmICh0aGlzLnZpZGVvICYmIHRoaXMudmlkZW8ucmVhZHlTdGF0ZSAmJiB0aGlzLnZpZGVvLnJlYWR5U3RhdGUgPj0gNCkge1xuICAgICAgICAgICAgdGhpcy5vblZpZGVvUmVhZHlUb1BsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIHZpZGVvIHJlYWR5IHN0YXRlIGRldGVjdGVkXCIpO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ3VycmVudCBzdGF0ZSA9IFwiICsgdGhpcy52aWRlby5yZWFkeVN0YXRlKTtcbiAgICAgICAgICAgIHRoaXMudmlkZW8ubG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkcyBhIGxvZ28gaWYgbmVlZGVkXG5cbiAgICAgICAgaWYgKHRoaXMubG9nbyA9PSBudWxsKXtcblxuICAgICAgICAgICAgdGhpcy5sb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICB0aGlzLmxvZ28uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvaW1hZ2VzL2xvZ29fbHVjaWR3ZWIucG5nJyk7XG4gICAgICAgICAgICB0aGlzLmxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvX2x1Y2lkd2ViJyk7XG4gICAgICAgICAgICB0aGlzLmxvZ28uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgICAgIGNvbnN0IGxvZ29QYXJlbnQgPSB0aGlzLmVsLnNjZW5lRWwucGFyZW50RWw7XG4gICAgICAgICAgICBsb2dvUGFyZW50LmFwcGVuZENoaWxkKHRoaXMubG9nbyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkVmlkZW9FdmVudExpc3RlbmVyczogZnVuY3Rpb24gKHZpZGVvKSB7XG5cbiAgICAgICAgZnNjcmVlbi5hZGRFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgdGhpcy5vbkZ1bGxzY3JlZW5DaGFuZ2UpO1xuXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCB0aGlzLm9uVmlkZW9SZWFkeVRvUGxheSk7XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB0aGlzLm9uVmlkZW9UaW1lVXBkYXRlKTtcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCB0aGlzLm9uVmlkZW9FbmRlZCk7XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3N0YWxsZWQnLCB0aGlzLm9uVmlkZW9TdGFsbGVkKTtcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigncGF1c2UnLCB0aGlzLm9uVmlkZW9QYXVzZWQpO1xuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdwbGF5aW5nJywgdGhpcy5vblZpZGVvUGxheWluZyk7XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3ZvbHVtZWNoYW5nZScsIHRoaXMub25WaWRlb1ZvbHVtZUNoYW5nZSk7XG4gICAgICAgIC8vIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCB0aGlzLm9uVmlkZW9SZWFkeVN0YXRlQ2hhbmdlKTtcblxuICAgICAgICB0aGlzLmVsLnNjZW5lRWwuYWRkRXZlbnRMaXN0ZW5lcignbHVjaWR3ZWIubW91c2UuaWRsZScsIHRoaXMub25Nb3VzZUlkbGUpO1xuICAgICAgICB0aGlzLmVsLnNjZW5lRWwuYWRkRXZlbnRMaXN0ZW5lcignbHVjaWR3ZWIubW91c2UubW92aW5nJywgdGhpcy5vbk1vdXNlTW92aW5nKTtcbiAgICAgICAgdGhpcy5lbC5zY2VuZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2VudGVyLXZyJywgdGhpcy5vbkVudGVyVlIpO1xuICAgICAgICB0aGlzLmVsLnNjZW5lRWwuYWRkRXZlbnRMaXN0ZW5lcignZXhpdC12cicsIHRoaXMub25FeGl0VlIpO1xuICAgIH0sXG5cbiAgICByZW1vdmVWaWRlb0V2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbiAodmlkZW8pIHtcblxuICAgICAgICBmc2NyZWVuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0aGlzLm9uRnVsbHNjcmVlbkNoYW5nZSk7XG5cbiAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2FucGxheScsIHRoaXMub25WaWRlb1JlYWR5VG9QbGF5KTtcbiAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHRoaXMub25WaWRlb1RpbWVVcGRhdGUpO1xuICAgICAgICB2aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKCdlbmRlZCcsIHRoaXMub25WaWRlb0VuZGVkKTtcbiAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3RhbGxlZCcsIHRoaXMub25WaWRlb1N0YWxsZWQpO1xuICAgICAgICB2aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXVzZScsIHRoaXMub25WaWRlb1BhdXNlZCk7XG4gICAgICAgIHZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCB0aGlzLm9uVmlkZW9QbGF5aW5nKTtcbiAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndm9sdW1lY2hhbmdlJywgdGhpcy5vblZpZGVvVm9sdW1lQ2hhbmdlKTtcblxuICAgICAgICB0aGlzLmVsLnNjZW5lRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbHVjaWR3ZWIubW91c2UuaWRsZScsIHRoaXMub25Nb3VzZUlkbGUpO1xuICAgICAgICB0aGlzLmVsLnNjZW5lRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbHVjaWR3ZWIubW91c2UubW92aW5nJywgdGhpcy5vbk1vdXNlTW92aW5nKTtcbiAgICAgICAgdGhpcy5lbC5zY2VuZUVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VudGVyLXZyJywgdGhpcy5vbkVudGVyVlIpO1xuICAgICAgICB0aGlzLmVsLnNjZW5lRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXhpdC12cicsIHRoaXMub25FeGl0VlIpO1xuICAgIH0sXG5cbiAgICBvblZpZGVvUmVhZHlUb1BsYXk6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAodGhpcy52aWRlb1NwaGVyZUNvbmZpZ3VyZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmlkZW9TcGhlcmVDb25maWd1cmVkID0gdHJ1ZTtcbiAgICAgICAgbGV0IG9sZFZpZGVvID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMudmlkZW9TcGhlcmUgJiYgdGhpcy52aWRlb1NwaGVyZS5oYXNBdHRyaWJ1dGUoJ3NyYycpKSB7XG4gICAgICAgICAgICBvbGRWaWRlbyA9IHRoaXMudmlkZW9TcGhlcmUuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkanVzdCBzb3VyY2UgZm9yIHRoZSB2aWRlbyBzcGhlcmVcblxuICAgICAgICBpZiAodGhpcy52aWRlb1NwaGVyZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnZpZGVvU3BoZXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS12aWRlb3NwaGVyZScpO1xuICAgICAgICAgICAgdGhpcy52aWRlb1NwaGVyZS5pZCA9ICd2aWRlb3NwaGVyZSc7XG4gICAgICAgICAgICB0aGlzLnZpZGVvU3BoZXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJyMnICsgdGhpcy52aWRlby5pZCk7XG4gICAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMudmlkZW9TcGhlcmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWRlb1NwaGVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcjJyArIHRoaXMudmlkZW8uaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRJbnRlcmFjdGlvblJlY2VpdmVkIHx8IHRoaXMuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5zdGFydFByb2dyZXNzQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250cm9scygpO1xuICAgICAgICAgICAgdGhpcy5lbC5lbWl0KCdsdWNpZHdlYi52aWRlby1jb250cm9sbGVyLnBsYXlpbmctc3RhcnRlZCcsIHt9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1N0YXJ0T3ZlcmxheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGF1c2UgYW55IG9sZCB2aWRlbyB0aGF0IG1heSBleGlzdFxuXG4gICAgICAgIGlmIChvbGRWaWRlbyAhPSBudWxsKSB7XG4gICAgICAgICAgICBvbGRWaWRlby5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uTW91c2VJZGxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZGVvICYmICF0aGlzLnZpZGVvLnBhdXNlZCAmJiAhdGhpcy52aWRlby5lbmRlZCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlQ29udHJvbHMoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbk1vdXNlTW92aW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2hvd0NvbnRyb2xzKCk7XG4gICAgfSxcblxuICAgIG9uU2Nyb2xsYmFyQ2xpY2tlZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGV2dC54IC8gdGFyZ2V0Lm9mZnNldFdpZHRoO1xuICAgICAgICBjb25zdCBuZXdUaW1lID0gdGhpcy5kdXJhdGlvbigpICogcHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMuY2hhbmdlVGltZShuZXdUaW1lKTtcbiAgICB9LFxuXG4gICAgY29uZmlybUxpbmtDb3BpZWRUb0NsaXBib2FyZDogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcblxuICAgICAgICAvLyBmZXRjaCBwb3NpdGlvbiBvZiBpY29uXG4gICAgICAgIHZhciByZWN0ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuc2hhcmUtY29weS10by1jbGlwYm9hcmQnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAvLyBhZGQgY29uZmlybWF0aW9uIGFsZXJ0IGFmdGVyIGNvcHlcbiAgICAgICAgY29uc3QgY29uZmlybWF0aW9uQWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbmZpcm1hdGlvbkFsZXJ0LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgY29uZmlybWF0aW9uQWxlcnQuc3R5bGUudG9wID0gcmVjdC5ib3R0b20gKyAncHgnO1xuICAgICAgICBjb25maXJtYXRpb25BbGVydC5zdHlsZS5sZWZ0ID0gcmVjdC5sZWZ0ICsgJ3B4JztcbiAgICAgICAgY29uZmlybWF0aW9uQWxlcnQuc3R5bGUud2lkdGggPSByZWN0LndpZHRoICsgJ3B4JztcbiAgICAgICAgY29uZmlybWF0aW9uQWxlcnQuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIGNvbmZpcm1hdGlvbkFsZXJ0LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgY29uZmlybWF0aW9uQWxlcnQuc3R5bGUub3BhY2l0eSA9IDAuODtcbiAgICAgICAgY29uZmlybWF0aW9uQWxlcnQuc3R5bGUuekluZGV4ID0gMTAwMDA7XG4gICAgICAgIGNvbmZpcm1hdGlvbkFsZXJ0LmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29uZmlybWF0aW9uQWxlcnQpO1xuXG4gICAgICAgIC8vIG5vdyByZW1vdmUgaXQgYWdhaW4gYWZ0ZXIgYSB0aW1lb3V0XG4gICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb25maXJtYXRpb25BbGVydCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMjAwMFxuICAgICAgICApO1xuXG4gICAgfSxcblxuICAgIG9uQ29weUxpbmtUb0NsaXBib2FyZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBjb25maXJtU3VjY2VzcyA9IEFGUkFNRS51dGlscy5iaW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUxpbmtDb3BpZWRUb0NsaXBib2FyZCgnY29waWVkJyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBjb25zdCBjb21tdW5pY2F0ZUVycm9yID0gQUZSQU1FLnV0aWxzLmJpbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtTGlua0NvcGllZFRvQ2xpcGJvYXJkKCdmYWlsZWQgdG8gY29weScpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgQ2xpcGJvYXJkLndyaXRlVGV4dCh3aW5kb3cubG9jYXRpb24pLnRoZW4oY29uZmlybVN1Y2Nlc3MsIGNvbW11bmljYXRlRXJyb3IpO1xuICAgIH0sXG5cbiAgICBvblN0YXJ0QnV0dG9uQ2xpY2tlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy52aWRlbykge1xuXG4gICAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kRWwgPSB0aGlzLmVsLnNjZW5lRWwucXVlcnlTZWxlY3RvcignI3ByZXZpZXctYmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgaWYgKGJhY2tncm91bmRFbCkge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRFbC5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHBsYXkgdGhlIHZpZGVvXG4gICAgICAgICAgICB0aGlzLnZpZGVvLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRyb2xzKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0UHJvZ3Jlc3NBbmltYXRpb24oKTtcblxuICAgICAgICAgICAgdGhpcy5lbC5lbWl0KCdsdWNpZHdlYi52aWRlby1jb250cm9sbGVyLnBsYXlpbmctc3RhcnRlZCcsIHt9KTtcblxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudEludGVyYWN0aW9uUmVjZWl2ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZGVvLXN0YXJ0LW92ZXJsYXkgYnV0dG9uJyk7XG4gICAgICAgICAgICBpZiAoc3RhcnRCdXR0b24pIHtcbiAgICAgICAgICAgICAgICBzdGFydEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TdGFydEJ1dHRvbkNsaWNrZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZW1vdmUgb3ZlcmxheVxuICAgICAgICAgICAgY29uc3QgdmlkZW9TdGFydE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlkZW8tc3RhcnQtb3ZlcmxheScpO1xuICAgICAgICAgICAgaWYgKHZpZGVvU3RhcnRPdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh2aWRlb1N0YXJ0T3ZlcmxheSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGVuYWJsZXMgdGhlIDJEIGNvbnRyb2xzXG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sc0VuYWJsZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVIVE1MVmlkZW9Db250cm9scygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlVlJWaWRlb0NvbnRyb2xzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hvd1N0YXJ0T3ZlcmxheTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHZpZGVvU3RhcnRPdmVybGF5QmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2aWRlb1N0YXJ0T3ZlcmxheUJhY2tncm91bmQuY2xhc3NOYW1lID0gXCJiYWNrZ3JvdW5kXCI7XG5cbiAgICAgICAgY29uc3QgcGxheUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIHBsYXlJY29uLmNsYXNzTmFtZSA9IFwiaWNvbi1wbGF5XCI7XG5cbiAgICAgICAgY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwbGF5QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TdGFydEJ1dHRvbkNsaWNrZWQpO1xuICAgICAgICBwbGF5QnV0dG9uLmFwcGVuZENoaWxkKHBsYXlJY29uKTtcblxuICAgICAgICBjb25zdCB2aWRlb1N0YXJ0T3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2aWRlb1N0YXJ0T3ZlcmxheS5pZCA9IFwidmlkZW8tc3RhcnQtb3ZlcmxheVwiO1xuICAgICAgICAvLyB2aWRlb1N0YXJ0T3ZlcmxheS5pbm5lckhUTUwgPSB2aWRlb1N0YXJ0T3ZlcmxheU1hcmt1cDtcbiAgICAgICAgdmlkZW9TdGFydE92ZXJsYXkuYXBwZW5kQ2hpbGQodmlkZW9TdGFydE92ZXJsYXlCYWNrZ3JvdW5kKTtcbiAgICAgICAgdmlkZW9TdGFydE92ZXJsYXkuYXBwZW5kQ2hpbGQocGxheUJ1dHRvbik7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWRlb1N0YXJ0T3ZlcmxheSk7XG5cbiAgICB9LFxuXG4gICAgZW5hYmxlSFRNTFZpZGVvQ29udHJvbHM6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmNvbnRyb2xzID0gVmlkZW9Db250cm9sc01hcmt1cDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250cm9scyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9scyk7XG5cbiAgICAgICAgLy8gcGxhY2UgYWxsIG1vZGFscyB1bmRlciB0aGUgYm9keSBlbGVtZW50IGluc3RlYWRcblxuICAgICAgICBjb25zdCBzaGFyZU1vZGFsID0gdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yKCcuc2hhcmUtdmlkZW8nKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaGFyZU1vZGFsKTtcblxuICAgICAgICAvLyBhdHRhY2ggZXZlbnRzXG5cbiAgICAgICAgdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yKCcucGxheS12aWRlbycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblZpZGVvUGxheUNsaWNrZWQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yKCcucGF1c2UtdmlkZW8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25WaWRlb1BhdXNlQ2xpY2tlZCwgZmFsc2UpO1xuICAgICAgICB0aGlzLmNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJy5yZXBsYXktdmlkZW8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25WaWRlb1JlcGxheUNsaWNrZWQsIGZhbHNlKTtcbiAgICAgICAgc2hhcmVNb2RhbC5xdWVyeVNlbGVjdG9yKCcucmVwbGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVmlkZW9SZXBsYXlDbGlja2VkLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY29udHJvbHMucXVlcnlTZWxlY3RvcignLnR1cm4tdmlkZW8tdm9sdW1lLW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVmlkZW9Wb2x1bWVPbkNsaWNrZWQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yKCcudHVybi12aWRlby12b2x1bWUtb2ZmJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVmlkZW9Wb2x1bWVPZmZDbGlja2VkLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY29udHJvbHMucXVlcnlTZWxlY3RvcignLmVudGVyLXZyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRW50ZXJWUkNsaWNrZWQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yKCcuZW50ZXItZnVsbHNjcmVlbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkVudGVyRnVsbHNjcmVlbkNsaWNrZWQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yKCcuc2hhcmUtbWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNoYXJlQnV0dG9uQ2xpY2tlZCwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5zaGFyZS12aWRlby1jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNoYXJlTW9kYWxDbG9zZWQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jb250cm9scy5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlLXZpZGVvLXByb2dyZXNzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2Nyb2xsYmFyQ2xpY2tlZCwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoKCcuc2hhcmUtY29weS10by1jbGlwYm9hcmQnKSkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ29weUxpbmtUb0NsaXBib2FyZCwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbkJvZHlUb3VjaEVuZCwgZmFsc2UpO1xuICAgIH0sXG5cbiAgICBlbmFibGVWUlZpZGVvQ29udHJvbHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gPHZpZGVvLWNvbnRyb2xzICByb3RhdGlvbj1cIjAgMCAwXCIgcG9zaXRpb249XCIwIDAuNCAtMS40MFwiPjwvdmlkZW8tY29udHJvbHM+XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8tY29udHJvbHMnKTtcbiAgICAgICAgY29udHJvbHMuc2V0QXR0cmlidXRlKCdyb3RhdGlvbicsICctMjUgMCAwJyk7XG4gICAgICAgIGNvbnRyb2xzLnNldEF0dHJpYnV0ZSgndHJhY2stcG9zaXRpb24nLCB7IHRhcmdldDogJyNtYWluY2FtZXJhJywgeDogZmFsc2UsIHo6IGZhbHNlIH0pO1xuXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoY29udHJvbHMpO1xuICAgIH0sXG5cbiAgICBvblZpZGVvUGxheUNsaWNrZWQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdGhpcy5vblZpZGVvQ29udHJvbHNQbGF5Q2xpY2tlZCgpO1xuICAgIH0sXG5cbiAgICBvblZpZGVvUGF1c2VDbGlja2VkOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHRoaXMub25WaWRlb0NvbnRyb2xzUGF1c2VDbGlja2VkKCk7XG4gICAgfSxcblxuICAgIG9uVmlkZW9SZXBsYXlDbGlja2VkOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm9uU2hhcmVNb2RhbENsb3NlZChldnQpO1xuICAgICAgICB0aGlzLm9uVmlkZW9Db250cm9sc1JlcGxheUNsaWNrZWQoKTtcbiAgICB9LFxuXG4gICAgb25WaWRlb1ZvbHVtZU9uQ2xpY2tlZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB0aGlzLm9uVmlkZW9Db250cm9sc1ZvbHVtZU9uQ2xpY2tlZCgpO1xuICAgIH0sXG5cbiAgICBvblZpZGVvVm9sdW1lT2ZmQ2xpY2tlZDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB0aGlzLm9uVmlkZW9Db250cm9sc1ZvbHVtZU9mZkNsaWNrZWQoKTtcbiAgICB9LFxuXG4gICAgb25Cb2R5VG91Y2hFbmQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdGhpcy5zaG93Q29udHJvbHMoKTtcbiAgICB9LFxuXG4gICAgb25FbnRlclZSQ2xpY2tlZDogZnVuY3Rpb24gKGV2dCkge1xuXG4gICAgICAgIGNvbnN0IHBhdXNlUmVxdWlyZWQgPSB0aGlzLnZpZGVvLnBhdXNlZDtcblxuICAgICAgICAvLyBmb3IgbW9iaWxlIGhlYWRzZXRzIHRoYXQgYXJlIG5vdCBvY29sdXNcbiAgICAgICAgLy8gY29uc3QgZGV2aWNlRGV0ZWN0aW9uID0gdGhpcy5lbC5zY2VuZUVsLmNvbXBvbmVudHNbJ2RldmljZS1kZXRlY3Rpb24nXTtcbiAgICAgICAgLy8gaWYgKGRldmljZURldGVjdGlvbi5pc01vYmlsZSgpICYmICFkZXZpY2VEZXRlY3Rpb24uaXNPY3VsdXMoKSkge1xuICAgICAgICAvLyAgICAgdGhpcy5lbC5zY2VuZUVsLmNvbXBvbmVudHNbJ3RyYW5zaXRpb24tdG8tY2FyZGJvYXJkJ10uc3RhcnRUcmFuc2l0aW9uaW5nVG9DYXJkYm9hcmQoKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwuZW50ZXJWUigpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gd2FpdCBmb3IgVlIgbW9kZSBhbmQgdGhlbiB2ZXJpZnkgd2hldGhlciB3ZSBuZWVkIHRvIHJlc3VtZSBwbGF5aW5nXG4gICAgICAgIC8vIChTYW1zdW5nIGludGVybmV0IGJyb3dzZXIgYXV0b21hdGljYWxseSBwYXVzZXMgdGhlIHZpZGVvIHdoZW4gZW50ZXJpbmcgVlIpXG4gICAgICAgIGNvbnN0IGludGVydmFsUG9pbnRlciA9IHNldEludGVydmFsKFxuICAgICAgICAgICAgQUZSQU1FLnV0aWxzLmJpbmQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52cikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52aWRlby5wYXVzZWQgJiYgcGF1c2VSZXF1aXJlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFBvaW50ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMpLFxuICAgICAgICAgICAgMTAwXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIG9uRW50ZXJWUjogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB0aGlzLnZyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2dvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSxcblxuICAgIG9uRXhpdFZSOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHRoaXMubG9nby5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy52ciA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbkVudGVyRnVsbHNjcmVlbkNsaWNrZWQ6IGZ1bmN0aW9uIChldnQpIHtcblxuICAgICAgICB0aGlzLmxvZ28uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgaWYgKGZzY3JlZW4uZnVsbHNjcmVlbkVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGZzY3JlZW4ucmVxdWVzdEZ1bGxzY3JlZW4oZG9jdW1lbnQuYm9keSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmc2NyZWVuLmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25GdWxsc2NyZWVuQ2hhbmdlOiBmdW5jdGlvbihldnQpe1xuICAgICAgICBpZiAoZnNjcmVlbi5mdWxsc2NyZWVuRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGVUxMU0NSRUVOXCIpO1xuXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25TaGFyZUJ1dHRvbkNsaWNrZWQ6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3Qgc2hhcmVNb2RhbCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLnNoYXJlLXZpZGVvJyk7XG4gICAgICAgIGlmIChzaGFyZU1vZGFsKSB7XG4gICAgICAgICAgICBjb25zdCByZWxvYWREaXYgPSBzaGFyZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5yZWxvYWQnKTtcbiAgICAgICAgICAgIGlmIChyZWxvYWREaXYpIHJlbG9hZERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgc3dpdGNoIChzaGFyZU1vZGFsLnN0eWxlLmRpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdibG9jayc6XG4gICAgICAgICAgICAgICAgICAgIHNoYXJlTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdub25lJzpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBzaGFyZU1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgb25TaGFyZU1vZGFsQ2xvc2VkOiBmdW5jdGlvbihldnQpe1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBzaGFyZU1vZGFsID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuc2hhcmUtdmlkZW8nKTtcbiAgICAgICAgaWYgKHNoYXJlTW9kYWwpe1xuICAgICAgICAgICAgc2hhcmVNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uVmlkZW9UaW1lVXBkYXRlOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGlmICh0aGlzLnZpZGVvICYmIHRoaXMuY29udHJvbHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy52aWRlby5kdXJhdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gdGhpcy52aWRlby5jdXJyZW50VGltZTtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMucXVlcnlTZWxlY3RvcignLmR1cmF0aW9uJykuaW5uZXJUZXh0ID0gdGhpcy5mb3JtYXRUaW1lKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdGltZScpLmlubmVyVGV4dCA9IHRoaXMuZm9ybWF0VGltZShjdXJyZW50VGltZSk7XG4gICAgICAgICAgICAvLyB0aGlzLmNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcycpLnN0eWxlLndpZHRoID0gKCgxMDAgKiBjdXJyZW50VGltZSkgLyBkdXJhdGlvbikgKyBcIiVcIjtcblxuICAgICAgICAgICAgLy8gaG93IHdpZGUgc2hvdWxkIHRoZSBwcm9ncmVzcyBiYXIgYmU/XG4gICAgICAgICAgICAvLyBob3cgd2lkZSBpcyBpdCBjdXJyZW50bHk/XG5cblxuICAgICAgICAgICAgdGhpcy5lbC5lbWl0KCdsdWNpZHdlYi52aWRlby1jb250cm9sbGVyLnRpbWV1cGRhdGUnLCB7ZHVyYXRpb246IGR1cmF0aW9uLCBjdXJyZW50VGltZTogY3VycmVudFRpbWV9LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZm9ybWF0VGltZTogZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IFwiMDBcIiArIE1hdGguZmxvb3IodGltZSAvIDYwKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IFwiMDBcIiArIE1hdGguZmxvb3IodGltZSAlIDYwKTtcbiAgICAgICAgcmV0dXJuIGAke21pbnV0ZXMuc2xpY2UoLTIpfToke3NlY29uZHMuc2xpY2UoLTIpfWBcbiAgICB9LFxuXG4gICAgaXNNb3Zpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHNNb3ZlbWVudEludGVydmFsICE9PSBudWxsO1xuICAgIH0sXG5cbiAgICBzdG9wTW92aW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2xzTW92ZW1lbnRJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNvbnRyb2xzTW92ZW1lbnRJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzTW92ZW1lbnRJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hvd0NvbnRyb2xzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xzVG8oMCwgMC4yLCAxIC8gNjApO1xuICAgIH0sXG5cbiAgICBzaG93RW5kU2NyZWVuOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBzaGFyZU1vZGFsID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuc2hhcmUtdmlkZW8nKTtcbiAgICAgICAgaWYgKHNoYXJlTW9kYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbG9hZERpdiA9IHNoYXJlTW9kYWwucXVlcnlTZWxlY3RvcignLnJlbG9hZCcpO1xuICAgICAgICAgICAgaWYgKHJlbG9hZERpdikge1xuICAgICAgICAgICAgICAgIHJlbG9hZERpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoYXJlTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaGlkZUNvbnRyb2xzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubW92ZUNvbnRyb2xzVG8oLTU1LCAwLjQsIDEgLyA2MCk7XG4gICAgfSxcblxuICAgIG1vdmVDb250cm9sc1RvOiBmdW5jdGlvbiAoZGVzaXJlZFBvc2l0aW9uLCBhbmltYXRpb25MZW5ndGgsIGZyZXF1ZW5jeSkge1xuICAgICAgICBpZiAodGhpcy5pc01vdmluZygpKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BNb3ZpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVwZGF0ZXIgPSB0aGlzLnVwZGF0ZUNvbnRyb2xzUG9zaXRpb247XG4gICAgICAgIHRoaXMuY29udHJvbHNNb3ZlbWVudEludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlcihkZXNpcmVkUG9zaXRpb24sIGFuaW1hdGlvbkxlbmd0aCwgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMDAwICogZnJlcXVlbmN5XG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIHVwZGF0ZUNvbnRyb2xzUG9zaXRpb246IGZ1bmN0aW9uIChkZXNpcmVkUG9zaXRpb24sIGFuaW1hdGlvbkxlbmd0aCwgZnJlcXVlbmN5KSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY29udHJvbHMgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5jb250cm9scy5zdHlsZS5ib3R0b20pO1xuICAgICAgICBpZiAoZGVzaXJlZFBvc2l0aW9uIDwgMCAmJiBjdXJyZW50VmFsdWUgPD0gZGVzaXJlZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BNb3ZpbmcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChkZXNpcmVkUG9zaXRpb24gPj0gMCAmJiBjdXJyZW50VmFsdWUgPj0gZGVzaXJlZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BNb3ZpbmcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgZGVsdGFTaWduID0gKGRlc2lyZWRQb3NpdGlvbiA8IDApID8gLTEgOiAxO1xuICAgICAgICBjb25zdCBkZWx0YSA9ICg1NSAvIGFuaW1hdGlvbkxlbmd0aCkgKiBmcmVxdWVuY3kgKiBkZWx0YVNpZ247XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IGN1cnJlbnRWYWx1ZSArIGRlbHRhO1xuICAgICAgICBpZiAoZGVsdGFTaWduIDwgMCkge1xuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBNYXRoLm1heChuZXdQb3NpdGlvbiwgZGVzaXJlZFBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gTWF0aC5taW4obmV3UG9zaXRpb24sIGRlc2lyZWRQb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250cm9scy5zdHlsZS5ib3R0b20gPSBuZXdQb3NpdGlvbiArIFwicHhcIjtcbiAgICB9LFxuXG4gICAgc3RhcnRQcm9ncmVzc0FuaW1hdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByb2dyZXNzQW5pbWF0b3IgPSBzZXRJbnRlcnZhbCh0aGlzLm1vdmVQcm9ncmVzc0JhciwgMTAwMCAvIDYwKTtcbiAgICB9LFxuXG4gICAgc3RvcFByb2dyZXNzQW5pbWF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wcm9ncmVzc0FuaW1hdG9yKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0FuaW1hdG9yID0gbnVsbDtcbiAgICB9LFxuXG4gICAgbW92ZVByb2dyZXNzQmFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy52aWRlby5kdXJhdGlvbjtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2xzKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcycpLnN0eWxlLndpZHRoID0gKCgxMDAgKiBjdXJyZW50VGltZSkgLyBkdXJhdGlvbikgKyBcIiVcIjtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG4iLCJcbmZ1bmN0aW9uIGNyZWF0ZVZpZGVvQ29udHJvbHNXaXRoSFRNTChodG1sKXtcbiAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udHJvbHMuaWQgPSBcInZpZGVvLWNvbnRyb2xzLTJkXCI7XG4gIGNvbnRyb2xzLnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gIGNvbnRyb2xzLmlubmVySFRNTCA9IGh0bWw7XG5cbiAgcmV0dXJuIGNvbnRyb2xzO1xufVxuXG5jb25zdCBpbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kXCI+Jm5ic3A7PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiBzdHlsZT1cIlwiPiZuYnNwOzwvZGl2PlxuICAgICAgPGRpdiBpZD1cInVwZGF0ZS12aWRlby1wcm9ncmVzc1wiPiZuYnNwOzwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJhY2tncm91bmRcIj4mbmJzcDs8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbnRyb2xzIGJsdWUtY29udHJvbHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29udHJvbCBpY29uIGVudGVyLXZyIHdpZGVcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIGljb24tY2FyZGJvYXJkXCI+PC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29udHJvbCBpY29uIGVudGVyLWZ1bGxzY3JlZW5cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIGljb24tcmVzaXplXCI+PC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29udHJvbCBpY29uIHNoYXJlLW1lbnVcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIGljb24tc2hhcmVcIj48L2k+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjb250cm9sIGljb24gcGxheS12aWRlb1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48aSBjbGFzcz1cImljb24gaWNvbi1wbGF5XCI+Jm5ic3A7PC9pPjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29udHJvbCBpY29uIHBhdXNlLXZpZGVvXCI+PGkgY2xhc3M9XCJpY29uIGljb24tcGF1c2VcIj4mbmJzcDs8L2k+PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjb250cm9sIGljb24gcmVwbGF5LXZpZGVvXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjxpIGNsYXNzPVwiaWNvbiBpY29uLXBsYXlcIj4mbmJzcDs8L2k+PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjb250cm9sIGljb24gdHVybi12aWRlby12b2x1bWUtb2ZmXCI+PGkgY2xhc3M9XCJpY29uIGljb24tdm9sdW1lXCI+Jm5ic3A7PC9pPjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29udHJvbCBpY29uIHR1cm4tdmlkZW8tdm9sdW1lLW9uXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjxpIGNsYXNzPVwiaWNvbiBpY29uLW11dGVcIj4mbmJzcDs8L2k+PC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImxlZnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWRpc3BsYXktcHJvZ3Jlc3MgY29udHJvbCBtb25vXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3VycmVudC10aW1lXCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibGVmdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbWUtZGlzcGxheS1kdXJhdGlvbiBjb250cm9sIG1vbm9cIj5cbiAgICAgICAgICAgICAgPHNwYW4+Lzwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkdXJhdGlvblwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwic2hhcmUtdmlkZW8gYmx1ZS1jb250cm9sc1wiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPlxuXG4gICAgPGEgY2xhc3M9XCJzaGFyZS12aWRlby1jbG9zZVwiIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJpY29uIGljb24tY2xvc2VcIj4mbmJzcDs8L2k+PC9hPlxuXG5cblxuICAgIDxkaXYgY2xhc3M9XCJpY29uLWdyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWxvYWRcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJzaGFyZS1saW5rIHJlcGxheVwiIGhyZWY9XCIjXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJpY29uIGljb24tcmVsb2FkXCI+Jm5ic3A7PC9pPjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGEgY2xhc3M9XCJzaGFyZS1saW5rIHNoYXJlLXRvLWZhY2Vib29rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PWh0dHBzJTNBJTJGJTJGbHVjaWR3ZWIuaW8lMkZwcm9qZWN0cyUyRjM2MC12aWRlby1wbGF5ZXIlMkZpbmRleC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJpY29uIGljb24tZmFjZWJvb2tcIj4mbmJzcDs8L2k+PC9hPlxuICAgICAgICAgIDxhIGNsYXNzPVwic2hhcmUtbGluayBzaGFyZS10by10d2l0dGVyXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9SStqdXN0K3dhdGNoZWQrU3lyaWElMjdzK3NpbGVuY2UlMkMrYStjb29wZXJhdGlvbitiZXR3ZWVuK0Zpc2hleWUrVlIrYW5kK1ZSVCtqb3VybmFsaXN0K0plbnMrRnJhbnNzZW4uKytIYXZlK2ErbG9vaythdCtodHRwcyUzQSUyRiUyRmx1Y2lkd2ViLmlvJTJGcHJvamVjdHMlMkYzNjAtdmlkZW8tcGxheWVyJTJGaW5kZXguaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiaWNvbiBpY29uLXR3aXR0ZXJcIj4mbmJzcDs8L2k+PC9hPlxuICAgICAgICAgIDxhIGNsYXNzPVwic2hhcmUtbGluayBzaGFyZS1jb3B5LXRvLWNsaXBib2FyZFwiIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJpY29uIGljb24tbGlua1wiPiZuYnNwOzwvaT48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVmlkZW9Db250cm9sc1dpdGhIVE1MKGlubmVySFRNTCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvc3R5bGVzL2ljb25zLmxlc3NcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvc3R5bGVzL3dlYmZvbnRzLmljb25zLmxlc3NcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvd2ViZm9udHMvbHVjaWR3ZWIuZW90XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3dlYmZvbnRzL2x1Y2lkd2ViLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy93ZWJmb250cy9sdWNpZHdlYi50dGZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvd2ViZm9udHMvbHVjaWR3ZWIud29mZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy93ZWJmb250cy9sdWNpZHdlYi53b2ZmMlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy93ZWJmb250cy9sdWNpZHdlYl90ZXN0LmVvdFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy93ZWJmb250cy9sdWNpZHdlYl90ZXN0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy93ZWJmb250cy9sdWNpZHdlYl90ZXN0LnR0ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy93ZWJmb250cy9sdWNpZHdlYl90ZXN0LndvZmZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvd2ViZm9udHMvbHVjaWR3ZWJfdGVzdC53b2ZmMlwiOyIsIi8qIGdsb2JhbCBBRlJBTUUgKi9cbnZhciBzdHlsZVBhcnNlciA9IEFGUkFNRS51dGlscy5zdHlsZVBhcnNlcjtcblxuaWYgKHR5cGVvZiBBRlJBTUUgPT09ICd1bmRlZmluZWQnKSB7XG4gIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IGF0dGVtcHRlZCB0byByZWdpc3RlciBiZWZvcmUgQUZSQU1FIHdhcyBhdmFpbGFibGUuJyk7XG59XG5cbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnZXZlbnQtc2V0Jywge1xuICBzY2hlbWE6IHtcbiAgICBkZWZhdWx0OiAnJyxcbiAgICBwYXJzZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gc3R5bGVQYXJzZXIucGFyc2UodmFsdWUpO1xuICAgIH1cbiAgfSxcblxuICBtdWx0aXBsZTogdHJ1ZSxcblxuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ldmVudEhhbmRsZXIgPSBudWxsO1xuICAgIHRoaXMuZXZlbnROYW1lID0gbnVsbDtcbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIChvbGREYXRhKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgdGhpcy51cGRhdGVFdmVudExpc3RlbmVyKCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCk7XG4gIH0sXG5cbiAgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gIH0sXG5cbiAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgfSxcblxuICBwbGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzb3VyY2Utb2YtdHJ1dGggZXZlbnQgbGlzdGVuZXIgcmVnaXN0cnkuXG4gICAqIERvZXMgbm90IGFjdHVhbGx5IGF0dGFjaCBldmVudCBsaXN0ZW5lcnMgeWV0LlxuICAgKi9cbiAgdXBkYXRlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xuICAgIHZhciBlbCA9IHRoaXMuZWw7XG4gICAgdmFyIGV2ZW50O1xuICAgIHZhciB0YXJnZXQ7XG4gICAgdmFyIHRhcmdldEVsO1xuXG4gICAgLy8gU2V0IGV2ZW50IGxpc3RlbmVyIHVzaW5nIGBfZXZlbnRgLlxuICAgIGV2ZW50ID0gZGF0YS5fZXZlbnQgfHwgdGhpcy5pZDtcbiAgICB0YXJnZXQgPSBkYXRhLl90YXJnZXQ7XG5cbiAgICAvLyBEZWNpZGUgdGhlIHRhcmdldCB0byBgc2V0QXR0cmlidXRlYCBvbi5cbiAgICB0YXJnZXRFbCA9IHRhcmdldCA/IGVsLnNjZW5lRWwucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogZWw7XG5cbiAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50O1xuXG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHZhciBwcm9wTmFtZTtcbiAgICAgIC8vIFNldCBhdHRyaWJ1dGVzLlxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkYXRhKSB7XG4gICAgICAgIGlmIChwcm9wTmFtZSA9PT0gJ19ldmVudCcgfHwgcHJvcE5hbWUgPT09ICdfdGFyZ2V0JykgeyBjb250aW51ZTsgfVxuICAgICAgICBBRlJBTUUudXRpbHMuZW50aXR5LnNldENvbXBvbmVudFByb3BlcnR5LmNhbGwodGhpcywgdGFyZ2V0RWwsIHByb3BOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtwcm9wTmFtZV0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWlzTmFOKGRhdGEuX2RlbGF5KSkge1xuICAgICAgLy8gRGVsYXkuXG4gICAgICB0aGlzLmV2ZW50SGFuZGxlciA9ICgpID0+IHsgc2V0VGltZW91dChoYW5kbGVyLCBwYXJzZUZsb2F0KGRhdGEuX2RlbGF5KSk7IH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gaGFuZGxlcjtcbiAgICB9XG4gIH0sXG5cbiAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgdGhpcy5ldmVudEhhbmRsZXIpO1xuICB9LFxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMuZXZlbnRIYW5kbGVyKTtcbiAgfVxufSk7XG4iLCJ2YXIgdGVtcGxhdGVTdHJpbmcgPSByZXF1aXJlKCdlczYtdGVtcGxhdGUtc3RyaW5ncycpO1xuXG52YXIgZGVidWcgPSBBRlJBTUUudXRpbHMuZGVidWc7XG52YXIgZXh0ZW5kID0gQUZSQU1FLnV0aWxzLmV4dGVuZDtcbnZhciB0ZW1wbGF0ZUNhY2hlID0ge307ICAvLyBUZW1wbGF0ZSBjYWNoZS5cbnZhciBlcnJvciA9IGRlYnVnKCd0ZW1wbGF0ZS1jb21wb25lbnQ6ZXJyb3InKTtcbnZhciBsb2cgPSBkZWJ1ZygndGVtcGxhdGUtY29tcG9uZW50OmluZm8nKTtcblxudmFyIEhBTkRMRUJBUlMgPSAnaGFuZGxlYmFycyc7XG52YXIgSkFERSA9ICdqYWRlJztcbnZhciBNVVNUQUNIRSA9ICdtdXN0YWNoZSc7XG52YXIgTlVOSlVDS1MgPSAnbnVuanVja3MnO1xudmFyIEhUTUwgPSAnaHRtbCc7XG5cbnZhciBMSUJfTE9BREVEID0ge307XG5MSUJfTE9BREVEW0hBTkRMRUJBUlNdID0gISF3aW5kb3cuSGFuZGxlYmFycztcbkxJQl9MT0FERURbSkFERV0gPSAhIXdpbmRvdy5qYWRlO1xuTElCX0xPQURFRFtNVVNUQUNIRV0gPSAhIXdpbmRvdy5NdXN0YWNoZTtcbkxJQl9MT0FERURbTlVOSlVDS1NdID0gISF3aW5kb3cubnVuanVja3M7XG5cbnZhciBMSUJfU1JDID0ge307XG5MSUJfU1JDW0hBTkRMRUJBUlNdID0gJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2hhbmRsZWJhcnMuanMvNC4wLjUvaGFuZGxlYmFycy5taW4uanMnO1xuTElCX1NSQ1tKQURFXSA9ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9qYWRlLzEuMTEuMC9qYWRlLm1pbi5qcyc7XG5MSUJfU1JDW01VU1RBQ0hFXSA9ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tdXN0YWNoZS5qcy8yLjIuMS9tdXN0YWNoZS5taW4uanMnO1xuTElCX1NSQ1tOVU5KVUNLU10gPSAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbnVuanVja3MvMi4zLjAvbnVuanVja3MubWluLmpzJztcblxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCd0ZW1wbGF0ZScsIHtcbiAgc2NoZW1hOiB7XG4gICAgaW5zZXJ0OiB7XG4gICAgICAvLyBpbnNlcnRBZGphY2VudEhUTUwuXG4gICAgICBkZWZhdWx0OiAnYmVmb3JlZW5kJ1xuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIHNyYzoge1xuICAgICAgLy8gU2VsZWN0b3Igb3IgVVJMLlxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKG9sZERhdGEpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuICAgIHZhciBmZXRjaGVyID0gZGF0YS5zcmNbMF0gPT09ICcjJyA/IGZldGNoVGVtcGxhdGVGcm9tU2NyaXB0VGFnIDogZmV0Y2hUZW1wbGF0ZUZyb21YSFI7XG4gICAgdmFyIHRlbXBsYXRlQ2FjaGVJdGVtID0gdGVtcGxhdGVDYWNoZVtkYXRhLnNyY107XG5cbiAgICAvLyBSZXBsYWNlIGNoaWxkcmVuIGlmIHN3YXBwaW5nIHRlbXBsYXRlcy5cbiAgICBpZiAob2xkRGF0YSAmJiBvbGREYXRhLnNyYyAhPT0gZGF0YS5zcmMpIHtcbiAgICAgIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZW1wbGF0ZUNhY2hlSXRlbSkge1xuICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZSh0ZW1wbGF0ZUNhY2hlSXRlbSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmV0Y2hlcihkYXRhLnNyYywgZGF0YS50eXBlKS50aGVuKHRoaXMucmVuZGVyVGVtcGxhdGUuYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgcmVuZGVyVGVtcGxhdGU6IGZ1bmN0aW9uICh0ZW1wbGF0ZUNhY2hlSXRlbSkge1xuICAgIHZhciBlbCA9IHRoaXMuZWw7XG4gICAgdmFyIGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgdmFyIHRlbXBsYXRlRGF0YSA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMoZWwuZGF0YXNldCkuZm9yRWFjaChmdW5jdGlvbiBjb252ZXJ0VG9EYXRhIChrZXkpIHtcbiAgICAgIHRlbXBsYXRlRGF0YVtrZXldID0gZWwuZGF0YXNldFtrZXldO1xuICAgIH0pO1xuICAgIGlmIChkYXRhLmRhdGEpIHtcbiAgICAgIHRlbXBsYXRlRGF0YSA9IGV4dGVuZCh0ZW1wbGF0ZURhdGEsIGVsLmdldEF0dHJpYnV0ZShkYXRhLmRhdGEpKTtcbiAgICB9XG5cbiAgICB2YXIgcmVuZGVyZWRUZW1wbGF0ZSA9IHJlbmRlclRlbXBsYXRlKHRlbXBsYXRlQ2FjaGVJdGVtLnRlbXBsYXRlLCB0ZW1wbGF0ZUNhY2hlSXRlbS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVEYXRhKTtcbiAgICBlbC5pbnNlcnRBZGphY2VudEhUTUwoZGF0YS5pbnNlcnQsIHJlbmRlcmVkVGVtcGxhdGUpO1xuICAgIGVsLmVtaXQoJ3RlbXBsYXRlcmVuZGVyZWQnKTtcbiAgfVxufSk7XG5cbi8qKlxuICogSGVscGVyIHRvIGNvbXBpbGUgdGVtcGxhdGUsIGxhenktbG9hZGluZyB0aGUgdGVtcGxhdGUgZW5naW5lIGlmIG5lZWRlZC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZVRlbXBsYXRlIChzcmMsIHR5cGUsIHRlbXBsYXRlU3RyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIGluamVjdFRlbXBsYXRlTGliKHR5cGUpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdGVtcGxhdGVDYWNoZVtzcmNdID0ge1xuICAgICAgICB0ZW1wbGF0ZTogZ2V0Q29tcGlsZXIodHlwZSkodGVtcGxhdGVTdHIudHJpbSgpKSxcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfTtcbiAgICAgIHJlc29sdmUodGVtcGxhdGVDYWNoZVtzcmNdKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRlbXBsYXRlICh0ZW1wbGF0ZSwgdHlwZSwgY29udGV4dCkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEhBTkRMRUJBUlM6IHtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZShjb250ZXh0KTtcbiAgICB9XG4gICAgY2FzZSBKQURFOiB7XG4gICAgICByZXR1cm4gdGVtcGxhdGUoY29udGV4dCk7XG4gICAgfVxuICAgIGNhc2UgTVVTVEFDSEU6IHtcbiAgICAgIHJldHVybiBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIGNvbnRleHQpO1xuICAgIH1cbiAgICBjYXNlIE5VTkpVQ0tTOiB7XG4gICAgICByZXR1cm4gdGVtcGxhdGUucmVuZGVyKGNvbnRleHQpO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICAvLyBJZiB0eXBlIG5vdCBzcGVjaWZpZWQsIGFzc3VtZSBIVE1MLiBBZGQgc29tZSBFUzYgdGVtcGxhdGUgc3RyaW5nIHN1Z2FyLlxuICAgICAgcmV0dXJuIHRlbXBsYXRlU3RyaW5nKHRlbXBsYXRlLCBjb250ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDYWNoZSBhbmQgY29tcGlsZSB0ZW1wbGF0ZXMuXG4gKi9cbmZ1bmN0aW9uIGZldGNoVGVtcGxhdGVGcm9tU2NyaXB0VGFnIChzcmMsIHR5cGUpIHtcbiAgdmFyIGNvbXBpbGVyO1xuICB2YXIgc2NyaXB0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNyYyk7XG4gIHZhciBzY3JpcHRUeXBlID0gc2NyaXB0RWwuZ2V0QXR0cmlidXRlKCd0eXBlJyk7XG4gIHZhciB0ZW1wbGF0ZVN0ciA9IHNjcmlwdEVsLmlubmVySFRNTDtcblxuICAvLyBUcnkgdG8gaW5mZXIgdGVtcGxhdGUgdHlwZSBmcm9tIDxzY3JpcHQgdHlwZT4gaWYgdHlwZSBub3Qgc3BlY2lmaWVkLlxuICBpZiAoIXR5cGUpIHtcbiAgICBpZiAoIXNjcmlwdFR5cGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGB0eXBlYCBhdHRyaWJ1dGUgZm9yIDxzY3JpcHQ+IHRlbXBsYXRlcyAoZS5nLiwgaGFuZGxlYmFycywgamFkZSwgbnVuanVja3MsIGh0bWwpJyk7XG4gICAgfVxuICAgIGlmIChzY3JpcHRUeXBlLmluZGV4T2YoJ2hhbmRsZWJhcnMnKSAhPT0gLTEpIHtcbiAgICAgIHR5cGUgPSBIQU5ETEVCQVJTO1xuICAgIH0gZWxzZSBpZiAoc2NyaXB0VHlwZS5pbmRleE9mKCdqYWRlJykgIT09IC0xKSB7XG4gICAgICB0eXBlID0gSkFERVxuICAgIH0gZWxzZSBpZiAoc2NyaXB0VHlwZS5pbmRleE9mKCdtdXN0YWNoZScpICE9PSAtMSkge1xuICAgICAgdHlwZSA9IE1VU1RBQ0hFO1xuICAgIH0gZWxzZSBpZiAoc2NyaXB0VHlwZS5pbmRleE9mKCdudW5qdWNrcycpICE9PSAtMSkge1xuICAgICAgdHlwZSA9IE5VTkpVQ0tTXG4gICAgfSBlbHNlIGlmIChzY3JpcHRUeXBlLmluZGV4T2YoJ2h0bWwnKSAhPT0gLTEpIHtcbiAgICAgIHR5cGUgPSBIVE1MO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcignVGVtcGxhdGUgdHlwZSBjb3VsZCBub3QgYmUgaW5mZXJyZWQgZnJvbSB0aGUgc2NyaXB0IHRhZy4gUGxlYXNlIGFkZCBhIHR5cGUuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgY29tcGlsZVRlbXBsYXRlKHNyYywgdHlwZSwgdGVtcGxhdGVTdHIpLnRoZW4oZnVuY3Rpb24gKHRlbXBsYXRlKSB7XG4gICAgICByZXNvbHZlKHRlbXBsYXRlLCB0eXBlKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZldGNoVGVtcGxhdGVGcm9tWEhSIChzcmMsIHR5cGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdmFyIHJlcXVlc3Q7XG4gICAgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFRlbXBsYXRlIGZldGNoZWQuIFVzZSB0ZW1wbGF0ZS5cbiAgICAgIGNvbXBpbGVUZW1wbGF0ZShzcmMsIHR5cGUsIHJlcXVlc3QucmVzcG9uc2UpLnRoZW4oZnVuY3Rpb24gKHRlbXBsYXRlKSB7XG4gICAgICAgIHJlc29sdmUodGVtcGxhdGUsIHR5cGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBzcmMpO1xuICAgIHJlcXVlc3Quc2VuZCgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgY29tcGlsZXIgZ2l2ZW4gdHlwZS5cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcGlsZXIgKHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBIQU5ETEVCQVJTOiB7XG4gICAgICByZXR1cm4gY29tcGlsZUhhbmRsZWJhcnNUZW1wbGF0ZTtcbiAgICB9XG4gICAgY2FzZSBKQURFOiB7XG4gICAgICByZXR1cm4gY29tcGlsZUphZGVUZW1wbGF0ZTtcbiAgICB9XG4gICAgY2FzZSBNVVNUQUNIRToge1xuICAgICAgcmV0dXJuIGNvbXBpbGVIYW5kbGViYXJzVGVtcGxhdGU7XG4gICAgfVxuICAgIGNhc2UgTlVOSlVDS1M6IHtcbiAgICAgIHJldHVybiBjb21waWxlTnVuanVja3NUZW1wbGF0ZTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgLy8gSWYgdHlwZSBub3Qgc3BlY2lmaWVkLCBhc3N1bWUgcmF3IEhUTUwgYW5kIG5vIHRlbXBsYXRpbmcgbmVlZGVkLlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0cjsgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGlsZUhhbmRsZWJhcnNUZW1wbGF0ZSAodGVtcGxhdGVTdHIpIHtcbiAgcmV0dXJuIEhhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZVN0cik7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVKYWRlVGVtcGxhdGUgKHRlbXBsYXRlU3RyKSB7XG4gIHJldHVybiBqYWRlLmNvbXBpbGUodGVtcGxhdGVTdHIpO1xufVxuXG5mdW5jdGlvbiBjb21waWxlTXVzdGFjaGVUZW1wbGF0ZSAodGVtcGxhdGVTdHIpIHtcbiAgTXVzdGFjaGUucGFyc2UodGVtcGxhdGVTdHIpO1xuICByZXR1cm4gdGVtcGxhdGVTdHI7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVOdW5qdWNrc1RlbXBsYXRlICh0ZW1wbGF0ZVN0cikge1xuICByZXR1cm4gbnVuanVja3MuY29tcGlsZSh0ZW1wbGF0ZVN0cik7XG59XG5cbmZ1bmN0aW9uIGluamVjdFRlbXBsYXRlTGliICh0eXBlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIC8vIE5vIGxpYiBpbmplY3Rpb24gcmVxdWlyZWQuXG4gICAgaWYgKCF0eXBlIHx8IHR5cGUgPT09ICdodG1sJykgeyByZXR1cm4gcmVzb2x2ZSgpOyB9XG5cbiAgICB2YXIgc2NyaXB0RWwgPSBMSUJfTE9BREVEW3R5cGVdO1xuXG4gICAgLy8gRW5naW5lIGxvYWRlZC5cbiAgICBpZiAoTElCX0xPQURFRFt0eXBlXSA9PT0gdHJ1ZSkgeyByZXR1cm4gcmVzb2x2ZSgpOyB9XG5cbiAgICAvLyBTdGFydCBsYXp5LWxvYWRpbmcuXG4gICAgaWYgKCFzY3JpcHRFbCkge1xuICAgICAgc2NyaXB0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIExJQl9MT0FERURbdHlwZV0gPSBzY3JpcHRFbDtcbiAgICAgIHNjcmlwdEVsLnNldEF0dHJpYnV0ZSgnc3JjJywgTElCX1NSQ1t0eXBlXSk7XG4gICAgICBsb2coJ0xhenktbG9hZGluZyAlcyBlbmdpbmUuIFBsZWFzZSBhZGQgPHNjcmlwdCBzcmM9XCIlc1wiPiB0byB5b3VyIHBhZ2UuJyxcbiAgICAgICAgICB0eXBlLCBMSUJfU1JDW3R5cGVdKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0RWwpO1xuICAgIH1cblxuICAgIC8vIFdhaXQgZm9yIG9ubG9hZCwgd2hldGhlciBqdXN0IGluamVjdGVkIG9yIGFscmVhZHkgbGF6eS1sb2FkaW5nLlxuICAgIHZhciBwcmV2T25sb2FkID0gc2NyaXB0RWwub25sb2FkIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgIHNjcmlwdEVsLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByZXZPbmxvYWQoKTtcbiAgICAgIExJQl9MT0FERURbdHlwZV0gPSB0cnVlO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG4gIH0pO1xufTtcblxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCd0ZW1wbGF0ZS1zZXQnLCB7XG4gIHNjaGVtYToge1xuICAgIG9uOiB7dHlwZTogJ3N0cmluZyd9LFxuICAgIHNyYzoge3R5cGU6ICdzdHJpbmcnfSxcbiAgICBkYXRhOiB7dHlwZTogJ3N0cmluZyd9XG4gIH0sXG5cbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xuICAgIHZhciBlbCA9IHRoaXMuZWw7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihkYXRhLm9uLCBmdW5jdGlvbiAoKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RlbXBsYXRlJywge3NyYzogZGF0YS5zcmMsIGRhdGE6IGRhdGEuZGF0YX0pO1xuICAgIH0pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFzc2lnbiAgICAgICAgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC9hc3NpZ24nKVxuICAsIG5vcm1hbGl6ZU9wdHMgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC9ub3JtYWxpemUtb3B0aW9ucycpXG4gICwgaXNDYWxsYWJsZSAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L2lzLWNhbGxhYmxlJylcbiAgLCBjb250YWlucyAgICAgID0gcmVxdWlyZSgnZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucycpXG5cbiAgLCBkO1xuXG5kID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZHNjciwgdmFsdWUvKiwgb3B0aW9ucyovKSB7XG5cdHZhciBjLCBlLCB3LCBvcHRpb25zLCBkZXNjO1xuXHRpZiAoKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB8fCAodHlwZW9mIGRzY3IgIT09ICdzdHJpbmcnKSkge1xuXHRcdG9wdGlvbnMgPSB2YWx1ZTtcblx0XHR2YWx1ZSA9IGRzY3I7XG5cdFx0ZHNjciA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1syXTtcblx0fVxuXHRpZiAoZHNjciA9PSBudWxsKSB7XG5cdFx0YyA9IHcgPSB0cnVlO1xuXHRcdGUgPSBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHRjID0gY29udGFpbnMuY2FsbChkc2NyLCAnYycpO1xuXHRcdGUgPSBjb250YWlucy5jYWxsKGRzY3IsICdlJyk7XG5cdFx0dyA9IGNvbnRhaW5zLmNhbGwoZHNjciwgJ3cnKTtcblx0fVxuXG5cdGRlc2MgPSB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiBjLCBlbnVtZXJhYmxlOiBlLCB3cml0YWJsZTogdyB9O1xuXHRyZXR1cm4gIW9wdGlvbnMgPyBkZXNjIDogYXNzaWduKG5vcm1hbGl6ZU9wdHMob3B0aW9ucyksIGRlc2MpO1xufTtcblxuZC5ncyA9IGZ1bmN0aW9uIChkc2NyLCBnZXQsIHNldC8qLCBvcHRpb25zKi8pIHtcblx0dmFyIGMsIGUsIG9wdGlvbnMsIGRlc2M7XG5cdGlmICh0eXBlb2YgZHNjciAhPT0gJ3N0cmluZycpIHtcblx0XHRvcHRpb25zID0gc2V0O1xuXHRcdHNldCA9IGdldDtcblx0XHRnZXQgPSBkc2NyO1xuXHRcdGRzY3IgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbM107XG5cdH1cblx0aWYgKGdldCA9PSBudWxsKSB7XG5cdFx0Z2V0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCFpc0NhbGxhYmxlKGdldCkpIHtcblx0XHRvcHRpb25zID0gZ2V0O1xuXHRcdGdldCA9IHNldCA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmIChzZXQgPT0gbnVsbCkge1xuXHRcdHNldCA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmICghaXNDYWxsYWJsZShzZXQpKSB7XG5cdFx0b3B0aW9ucyA9IHNldDtcblx0XHRzZXQgPSB1bmRlZmluZWQ7XG5cdH1cblx0aWYgKGRzY3IgPT0gbnVsbCkge1xuXHRcdGMgPSB0cnVlO1xuXHRcdGUgPSBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHRjID0gY29udGFpbnMuY2FsbChkc2NyLCAnYycpO1xuXHRcdGUgPSBjb250YWlucy5jYWxsKGRzY3IsICdlJyk7XG5cdH1cblxuXHRkZXNjID0geyBnZXQ6IGdldCwgc2V0OiBzZXQsIGNvbmZpZ3VyYWJsZTogYywgZW51bWVyYWJsZTogZSB9O1xuXHRyZXR1cm4gIW9wdGlvbnMgPyBkZXNjIDogYXNzaWduKG5vcm1hbGl6ZU9wdHMob3B0aW9ucyksIGRlc2MpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKClcblx0PyBBcnJheS5mcm9tXG5cdDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGZyb20gPSBBcnJheS5mcm9tLCBhcnIsIHJlc3VsdDtcblx0aWYgKHR5cGVvZiBmcm9tICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblx0YXJyID0gW1wicmF6XCIsIFwiZHdhXCJdO1xuXHRyZXN1bHQgPSBmcm9tKGFycik7XG5cdHJldHVybiBCb29sZWFuKHJlc3VsdCAmJiAocmVzdWx0ICE9PSBhcnIpICYmIChyZXN1bHRbMV0gPT09IFwiZHdhXCIpKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGl0ZXJhdG9yU3ltYm9sID0gcmVxdWlyZShcImVzNi1zeW1ib2xcIikuaXRlcmF0b3JcbiAgLCBpc0FyZ3VtZW50cyAgICA9IHJlcXVpcmUoXCIuLi8uLi9mdW5jdGlvbi9pcy1hcmd1bWVudHNcIilcbiAgLCBpc0Z1bmN0aW9uICAgICA9IHJlcXVpcmUoXCIuLi8uLi9mdW5jdGlvbi9pcy1mdW5jdGlvblwiKVxuICAsIHRvUG9zSW50ICAgICAgID0gcmVxdWlyZShcIi4uLy4uL251bWJlci90by1wb3MtaW50ZWdlclwiKVxuICAsIGNhbGxhYmxlICAgICAgID0gcmVxdWlyZShcIi4uLy4uL29iamVjdC92YWxpZC1jYWxsYWJsZVwiKVxuICAsIHZhbGlkVmFsdWUgICAgID0gcmVxdWlyZShcIi4uLy4uL29iamVjdC92YWxpZC12YWx1ZVwiKVxuICAsIGlzVmFsdWUgICAgICAgID0gcmVxdWlyZShcIi4uLy4uL29iamVjdC9pcy12YWx1ZVwiKVxuICAsIGlzU3RyaW5nICAgICAgID0gcmVxdWlyZShcIi4uLy4uL3N0cmluZy9pcy1zdHJpbmdcIilcbiAgLCBpc0FycmF5ICAgICAgICA9IEFycmF5LmlzQXJyYXlcbiAgLCBjYWxsICAgICAgICAgICA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsXG4gICwgZGVzYyAgICAgICAgICAgPSB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlOiBudWxsIH1cbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHksIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFycmF5TGlrZSAvKiwgbWFwRm4sIHRoaXNBcmcqLykge1xuXHR2YXIgbWFwRm4gPSBhcmd1bWVudHNbMV1cblx0ICAsIHRoaXNBcmcgPSBhcmd1bWVudHNbMl1cblx0ICAsIENvbnRleHRcblx0ICAsIGlcblx0ICAsIGpcblx0ICAsIGFyclxuXHQgICwgbGVuZ3RoXG5cdCAgLCBjb2RlXG5cdCAgLCBpdGVyYXRvclxuXHQgICwgcmVzdWx0XG5cdCAgLCBnZXRJdGVyYXRvclxuXHQgICwgdmFsdWU7XG5cblx0YXJyYXlMaWtlID0gT2JqZWN0KHZhbGlkVmFsdWUoYXJyYXlMaWtlKSk7XG5cblx0aWYgKGlzVmFsdWUobWFwRm4pKSBjYWxsYWJsZShtYXBGbik7XG5cdGlmICghdGhpcyB8fCB0aGlzID09PSBBcnJheSB8fCAhaXNGdW5jdGlvbih0aGlzKSkge1xuXHRcdC8vIFJlc3VsdDogUGxhaW4gYXJyYXlcblx0XHRpZiAoIW1hcEZuKSB7XG5cdFx0XHRpZiAoaXNBcmd1bWVudHMoYXJyYXlMaWtlKSkge1xuXHRcdFx0XHQvLyBTb3VyY2U6IEFyZ3VtZW50c1xuXHRcdFx0XHRsZW5ndGggPSBhcnJheUxpa2UubGVuZ3RoO1xuXHRcdFx0XHRpZiAobGVuZ3RoICE9PSAxKSByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgYXJyYXlMaWtlKTtcblx0XHRcdFx0YXJyID0gbmV3IEFycmF5KDEpO1xuXHRcdFx0XHRhcnJbMF0gPSBhcnJheUxpa2VbMF07XG5cdFx0XHRcdHJldHVybiBhcnI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaXNBcnJheShhcnJheUxpa2UpKSB7XG5cdFx0XHRcdC8vIFNvdXJjZTogQXJyYXlcblx0XHRcdFx0YXJyID0gbmV3IEFycmF5KGxlbmd0aCA9IGFycmF5TGlrZS5sZW5ndGgpO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIGFycltpXSA9IGFycmF5TGlrZVtpXTtcblx0XHRcdFx0cmV0dXJuIGFycjtcblx0XHRcdH1cblx0XHR9XG5cdFx0YXJyID0gW107XG5cdH0gZWxzZSB7XG5cdFx0Ly8gUmVzdWx0OiBOb24gcGxhaW4gYXJyYXlcblx0XHRDb250ZXh0ID0gdGhpcztcblx0fVxuXG5cdGlmICghaXNBcnJheShhcnJheUxpa2UpKSB7XG5cdFx0aWYgKChnZXRJdGVyYXRvciA9IGFycmF5TGlrZVtpdGVyYXRvclN5bWJvbF0pICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIFNvdXJjZTogSXRlcmF0b3Jcblx0XHRcdGl0ZXJhdG9yID0gY2FsbGFibGUoZ2V0SXRlcmF0b3IpLmNhbGwoYXJyYXlMaWtlKTtcblx0XHRcdGlmIChDb250ZXh0KSBhcnIgPSBuZXcgQ29udGV4dCgpO1xuXHRcdFx0cmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuXHRcdFx0aSA9IDA7XG5cdFx0XHR3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG5cdFx0XHRcdHZhbHVlID0gbWFwRm4gPyBjYWxsLmNhbGwobWFwRm4sIHRoaXNBcmcsIHJlc3VsdC52YWx1ZSwgaSkgOiByZXN1bHQudmFsdWU7XG5cdFx0XHRcdGlmIChDb250ZXh0KSB7XG5cdFx0XHRcdFx0ZGVzYy52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0XHRcdGRlZmluZVByb3BlcnR5KGFyciwgaSwgZGVzYyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YXJyW2ldID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuXHRcdFx0XHQrK2k7XG5cdFx0XHR9XG5cdFx0XHRsZW5ndGggPSBpO1xuXHRcdH0gZWxzZSBpZiAoaXNTdHJpbmcoYXJyYXlMaWtlKSkge1xuXHRcdFx0Ly8gU291cmNlOiBTdHJpbmdcblx0XHRcdGxlbmd0aCA9IGFycmF5TGlrZS5sZW5ndGg7XG5cdFx0XHRpZiAoQ29udGV4dCkgYXJyID0gbmV3IENvbnRleHQoKTtcblx0XHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0dmFsdWUgPSBhcnJheUxpa2VbaV07XG5cdFx0XHRcdGlmIChpICsgMSA8IGxlbmd0aCkge1xuXHRcdFx0XHRcdGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KDApO1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcblx0XHRcdFx0XHRpZiAoY29kZSA+PSAweGQ4MDAgJiYgY29kZSA8PSAweGRiZmYpIHZhbHVlICs9IGFycmF5TGlrZVsrK2ldO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhbHVlID0gbWFwRm4gPyBjYWxsLmNhbGwobWFwRm4sIHRoaXNBcmcsIHZhbHVlLCBqKSA6IHZhbHVlO1xuXHRcdFx0XHRpZiAoQ29udGV4dCkge1xuXHRcdFx0XHRcdGRlc2MudmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0XHRkZWZpbmVQcm9wZXJ0eShhcnIsIGosIGRlc2MpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFycltqXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCsrajtcblx0XHRcdH1cblx0XHRcdGxlbmd0aCA9IGo7XG5cdFx0fVxuXHR9XG5cdGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIFNvdXJjZTogYXJyYXkgb3IgYXJyYXktbGlrZVxuXHRcdGxlbmd0aCA9IHRvUG9zSW50KGFycmF5TGlrZS5sZW5ndGgpO1xuXHRcdGlmIChDb250ZXh0KSBhcnIgPSBuZXcgQ29udGV4dChsZW5ndGgpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdFx0dmFsdWUgPSBtYXBGbiA/IGNhbGwuY2FsbChtYXBGbiwgdGhpc0FyZywgYXJyYXlMaWtlW2ldLCBpKSA6IGFycmF5TGlrZVtpXTtcblx0XHRcdGlmIChDb250ZXh0KSB7XG5cdFx0XHRcdGRlc2MudmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0ZGVmaW5lUHJvcGVydHkoYXJyLCBpLCBkZXNjKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFycltpXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRpZiAoQ29udGV4dCkge1xuXHRcdGRlc2MudmFsdWUgPSBudWxsO1xuXHRcdGFyci5sZW5ndGggPSBsZW5ndGg7XG5cdH1cblx0cmV0dXJuIGFycjtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG9ialRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuICAsIGlkID0gb2JqVG9TdHJpbmcuY2FsbChcblx0KGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gYXJndW1lbnRzO1xuXHR9KSgpXG4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IGlkO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgb2JqVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLCBpZCA9IG9ialRvU3RyaW5nLmNhbGwocmVxdWlyZShcIi4vbm9vcFwiKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gaWQ7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eS1mdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7fTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKClcblx0PyBNYXRoLnNpZ25cblx0OiByZXF1aXJlKFwiLi9zaGltXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgc2lnbiA9IE1hdGguc2lnbjtcblx0aWYgKHR5cGVvZiBzaWduICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIChzaWduKDEwKSA9PT0gMSkgJiYgKHNpZ24oLTIwKSA9PT0gLTEpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHR2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG5cdGlmIChpc05hTih2YWx1ZSkgfHwgKHZhbHVlID09PSAwKSkgcmV0dXJuIHZhbHVlO1xuXHRyZXR1cm4gdmFsdWUgPiAwID8gMSA6IC0xO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc2lnbiA9IHJlcXVpcmUoXCIuLi9tYXRoL3NpZ25cIilcblxuICAsIGFicyA9IE1hdGguYWJzLCBmbG9vciA9IE1hdGguZmxvb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmIChpc05hTih2YWx1ZSkpIHJldHVybiAwO1xuXHR2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG5cdGlmICgodmFsdWUgPT09IDApIHx8ICFpc0Zpbml0ZSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcblx0cmV0dXJuIHNpZ24odmFsdWUpICogZmxvb3IoYWJzKHZhbHVlKSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKFwiLi90by1pbnRlZ2VyXCIpXG5cbiAgLCBtYXggPSBNYXRoLm1heDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiByZXR1cm4gbWF4KDAsIHRvSW50ZWdlcih2YWx1ZSkpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKClcblx0PyBPYmplY3QuYXNzaWduXG5cdDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24sIG9iajtcblx0aWYgKHR5cGVvZiBhc3NpZ24gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHRvYmogPSB7IGZvbzogXCJyYXpcIiB9O1xuXHRhc3NpZ24ob2JqLCB7IGJhcjogXCJkd2FcIiB9LCB7IHRyenk6IFwidHJ6eVwiIH0pO1xuXHRyZXR1cm4gKG9iai5mb28gKyBvYmouYmFyICsgb2JqLnRyenkpID09PSBcInJhemR3YXRyenlcIjtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGtleXMgID0gcmVxdWlyZShcIi4uL2tleXNcIilcbiAgLCB2YWx1ZSA9IHJlcXVpcmUoXCIuLi92YWxpZC12YWx1ZVwiKVxuICAsIG1heCAgID0gTWF0aC5tYXg7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRlc3QsIHNyYyAvKiwg4oCmc3JjbiovKSB7XG5cdHZhciBlcnJvciwgaSwgbGVuZ3RoID0gbWF4KGFyZ3VtZW50cy5sZW5ndGgsIDIpLCBhc3NpZ247XG5cdGRlc3QgPSBPYmplY3QodmFsdWUoZGVzdCkpO1xuXHRhc3NpZ24gPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGRlc3Rba2V5XSA9IHNyY1trZXldO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZTtcblx0XHR9XG5cdH07XG5cdGZvciAoaSA9IDE7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdHNyYyA9IGFyZ3VtZW50c1tpXTtcblx0XHRrZXlzKHNyYykuZm9yRWFjaChhc3NpZ24pO1xuXHR9XG5cdGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBlcnJvcjtcblx0cmV0dXJuIGRlc3Q7XG59O1xuIiwiLy8gRGVwcmVjYXRlZFxuXG5cInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gcmV0dXJuIHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIjtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF91bmRlZmluZWQgPSByZXF1aXJlKFwiLi4vZnVuY3Rpb24vbm9vcFwiKSgpOyAvLyBTdXBwb3J0IEVTMyBlbmdpbmVzXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbCkge1xuIHJldHVybiAodmFsICE9PSBfdW5kZWZpbmVkKSAmJiAodmFsICE9PSBudWxsKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pcy1pbXBsZW1lbnRlZFwiKSgpID8gT2JqZWN0LmtleXMgOiByZXF1aXJlKFwiLi9zaGltXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR0cnkge1xuXHRcdE9iamVjdC5rZXlzKFwicHJpbWl0aXZlXCIpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlID0gcmVxdWlyZShcIi4uL2lzLXZhbHVlXCIpO1xuXG52YXIga2V5cyA9IE9iamVjdC5rZXlzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIGtleXMoaXNWYWx1ZShvYmplY3QpID8gT2JqZWN0KG9iamVjdCkgOiBvYmplY3QpOyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlID0gcmVxdWlyZShcIi4vaXMtdmFsdWVcIik7XG5cbnZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2gsIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbnZhciBwcm9jZXNzID0gZnVuY3Rpb24gKHNyYywgb2JqKSB7XG5cdHZhciBrZXk7XG5cdGZvciAoa2V5IGluIHNyYykgb2JqW2tleV0gPSBzcmNba2V5XTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0czEgLyosIOKApm9wdGlvbnMqLykge1xuXHR2YXIgcmVzdWx0ID0gY3JlYXRlKG51bGwpO1xuXHRmb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdGlmICghaXNWYWx1ZShvcHRpb25zKSkgcmV0dXJuO1xuXHRcdHByb2Nlc3MoT2JqZWN0KG9wdGlvbnMpLCByZXN1bHQpO1xuXHR9KTtcblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCwgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmcgLyosIOKApmFyZ3MqLykge1xuXHR2YXIgc2V0ID0gY3JlYXRlKG51bGwpO1xuXHRmb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHNldFtuYW1lXSA9IHRydWU7XG5cdH0pO1xuXHRyZXR1cm4gc2V0O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuXHRpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoZm4gKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcblx0cmV0dXJuIGZuO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNWYWx1ZSA9IHJlcXVpcmUoXCIuL2lzLXZhbHVlXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIWlzVmFsdWUodmFsdWUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSBudWxsIG9yIHVuZGVmaW5lZFwiKTtcblx0cmV0dXJuIHZhbHVlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKClcblx0PyBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zXG5cdDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3RyID0gXCJyYXpkd2F0cnp5XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodHlwZW9mIHN0ci5jb250YWlucyAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiAoc3RyLmNvbnRhaW5zKFwiZHdhXCIpID09PSB0cnVlKSAmJiAoc3RyLmNvbnRhaW5zKFwiZm9vXCIpID09PSBmYWxzZSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpbmRleE9mID0gU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZWFyY2hTdHJpbmcvKiwgcG9zaXRpb24qLykge1xuXHRyZXR1cm4gaW5kZXhPZi5jYWxsKHRoaXMsIHNlYXJjaFN0cmluZywgYXJndW1lbnRzWzFdKSA+IC0xO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgb2JqVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLCBpZCA9IG9ialRvU3RyaW5nLmNhbGwoXCJcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiAoXG5cdFx0dHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8XG5cdFx0KHZhbHVlICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcblx0XHRcdCh2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZyB8fCBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gaWQpKSB8fFxuXHRcdGZhbHNlXG5cdCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaXMtaW1wbGVtZW50ZWQnKSgpID8gU3ltYm9sIDogcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmFsaWRUeXBlcyA9IHsgb2JqZWN0OiB0cnVlLCBzeW1ib2w6IHRydWUgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBzeW1ib2w7XG5cdGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cdHN5bWJvbCA9IFN5bWJvbCgndGVzdCBzeW1ib2wnKTtcblx0dHJ5IHsgU3RyaW5nKHN5bWJvbCk7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gUmV0dXJuICd0cnVlJyBhbHNvIGZvciBwb2x5ZmlsbHNcblx0aWYgKCF2YWxpZFR5cGVzW3R5cGVvZiBTeW1ib2wuaXRlcmF0b3JdKSByZXR1cm4gZmFsc2U7XG5cdGlmICghdmFsaWRUeXBlc1t0eXBlb2YgU3ltYm9sLnRvUHJpbWl0aXZlXSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoIXZhbGlkVHlwZXNbdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZ10pIHJldHVybiBmYWxzZTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHgpIHtcblx0aWYgKCF4KSByZXR1cm4gZmFsc2U7XG5cdGlmICh0eXBlb2YgeCA9PT0gJ3N5bWJvbCcpIHJldHVybiB0cnVlO1xuXHRpZiAoIXguY29uc3RydWN0b3IpIHJldHVybiBmYWxzZTtcblx0aWYgKHguY29uc3RydWN0b3IubmFtZSAhPT0gJ1N5bWJvbCcpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuICh4W3guY29uc3RydWN0b3IudG9TdHJpbmdUYWddID09PSAnU3ltYm9sJyk7XG59O1xuIiwiLy8gRVMyMDE1IFN5bWJvbCBwb2x5ZmlsbCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IChvciBwYXJ0aWFsbHkpIHN1cHBvcnQgaXRcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZCAgICAgICAgICAgICAgPSByZXF1aXJlKCdkJylcbiAgLCB2YWxpZGF0ZVN5bWJvbCA9IHJlcXVpcmUoJy4vdmFsaWRhdGUtc3ltYm9sJylcblxuICAsIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUsIGRlZmluZVByb3BlcnRpZXMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllc1xuICAsIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5LCBvYmpQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlXG4gICwgTmF0aXZlU3ltYm9sLCBTeW1ib2xQb2x5ZmlsbCwgSGlkZGVuU3ltYm9sLCBnbG9iYWxTeW1ib2xzID0gY3JlYXRlKG51bGwpXG4gICwgaXNOYXRpdmVTYWZlO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHROYXRpdmVTeW1ib2wgPSBTeW1ib2w7XG5cdHRyeSB7XG5cdFx0U3RyaW5nKE5hdGl2ZVN5bWJvbCgpKTtcblx0XHRpc05hdGl2ZVNhZmUgPSB0cnVlO1xuXHR9IGNhdGNoIChpZ25vcmUpIHt9XG59XG5cbnZhciBnZW5lcmF0ZU5hbWUgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgY3JlYXRlZCA9IGNyZWF0ZShudWxsKTtcblx0cmV0dXJuIGZ1bmN0aW9uIChkZXNjKSB7XG5cdFx0dmFyIHBvc3RmaXggPSAwLCBuYW1lLCBpZTExQnVnV29ya2Fyb3VuZDtcblx0XHR3aGlsZSAoY3JlYXRlZFtkZXNjICsgKHBvc3RmaXggfHwgJycpXSkgKytwb3N0Zml4O1xuXHRcdGRlc2MgKz0gKHBvc3RmaXggfHwgJycpO1xuXHRcdGNyZWF0ZWRbZGVzY10gPSB0cnVlO1xuXHRcdG5hbWUgPSAnQEAnICsgZGVzYztcblx0XHRkZWZpbmVQcm9wZXJ0eShvYmpQcm90b3R5cGUsIG5hbWUsIGQuZ3MobnVsbCwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHQvLyBGb3IgSUUxMSBpc3N1ZSBzZWU6XG5cdFx0XHQvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFja2RldGFpbC92aWV3LzE5Mjg1MDgvXG5cdFx0XHQvLyAgICBpZTExLWJyb2tlbi1nZXR0ZXJzLW9uLWRvbS1vYmplY3RzXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vbWVkaWtvby9lczYtc3ltYm9sL2lzc3Vlcy8xMlxuXHRcdFx0aWYgKGllMTFCdWdXb3JrYXJvdW5kKSByZXR1cm47XG5cdFx0XHRpZTExQnVnV29ya2Fyb3VuZCA9IHRydWU7XG5cdFx0XHRkZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLCBkKHZhbHVlKSk7XG5cdFx0XHRpZTExQnVnV29ya2Fyb3VuZCA9IGZhbHNlO1xuXHRcdH0pKTtcblx0XHRyZXR1cm4gbmFtZTtcblx0fTtcbn0oKSk7XG5cbi8vIEludGVybmFsIGNvbnN0cnVjdG9yIChub3Qgb25lIGV4cG9zZWQpIGZvciBjcmVhdGluZyBTeW1ib2wgaW5zdGFuY2VzLlxuLy8gVGhpcyBvbmUgaXMgdXNlZCB0byBlbnN1cmUgdGhhdCBgc29tZVN5bWJvbCBpbnN0YW5jZW9mIFN5bWJvbGAgYWx3YXlzIHJldHVybiBmYWxzZVxuSGlkZGVuU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKGRlc2NyaXB0aW9uKSB7XG5cdGlmICh0aGlzIGluc3RhbmNlb2YgSGlkZGVuU3ltYm9sKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3InKTtcblx0cmV0dXJuIFN5bWJvbFBvbHlmaWxsKGRlc2NyaXB0aW9uKTtcbn07XG5cbi8vIEV4cG9zZWQgYFN5bWJvbGAgY29uc3RydWN0b3Jcbi8vIChyZXR1cm5zIGluc3RhbmNlcyBvZiBIaWRkZW5TeW1ib2wpXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbFBvbHlmaWxsID0gZnVuY3Rpb24gU3ltYm9sKGRlc2NyaXB0aW9uKSB7XG5cdHZhciBzeW1ib2w7XG5cdGlmICh0aGlzIGluc3RhbmNlb2YgU3ltYm9sKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3InKTtcblx0aWYgKGlzTmF0aXZlU2FmZSkgcmV0dXJuIE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbik7XG5cdHN5bWJvbCA9IGNyZWF0ZShIaWRkZW5TeW1ib2wucHJvdG90eXBlKTtcblx0ZGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb24gPT09IHVuZGVmaW5lZCA/ICcnIDogU3RyaW5nKGRlc2NyaXB0aW9uKSk7XG5cdHJldHVybiBkZWZpbmVQcm9wZXJ0aWVzKHN5bWJvbCwge1xuXHRcdF9fZGVzY3JpcHRpb25fXzogZCgnJywgZGVzY3JpcHRpb24pLFxuXHRcdF9fbmFtZV9fOiBkKCcnLCBnZW5lcmF0ZU5hbWUoZGVzY3JpcHRpb24pKVxuXHR9KTtcbn07XG5kZWZpbmVQcm9wZXJ0aWVzKFN5bWJvbFBvbHlmaWxsLCB7XG5cdGZvcjogZChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0aWYgKGdsb2JhbFN5bWJvbHNba2V5XSkgcmV0dXJuIGdsb2JhbFN5bWJvbHNba2V5XTtcblx0XHRyZXR1cm4gKGdsb2JhbFN5bWJvbHNba2V5XSA9IFN5bWJvbFBvbHlmaWxsKFN0cmluZyhrZXkpKSk7XG5cdH0pLFxuXHRrZXlGb3I6IGQoZnVuY3Rpb24gKHMpIHtcblx0XHR2YXIga2V5O1xuXHRcdHZhbGlkYXRlU3ltYm9sKHMpO1xuXHRcdGZvciAoa2V5IGluIGdsb2JhbFN5bWJvbHMpIGlmIChnbG9iYWxTeW1ib2xzW2tleV0gPT09IHMpIHJldHVybiBrZXk7XG5cdH0pLFxuXG5cdC8vIFRvIGVuc3VyZSBwcm9wZXIgaW50ZXJvcGVyYWJpbGl0eSB3aXRoIG90aGVyIG5hdGl2ZSBmdW5jdGlvbnMgKGUuZy4gQXJyYXkuZnJvbSlcblx0Ly8gZmFsbGJhY2sgdG8gZXZlbnR1YWwgbmF0aXZlIGltcGxlbWVudGF0aW9uIG9mIGdpdmVuIHN5bWJvbFxuXHRoYXNJbnN0YW5jZTogZCgnJywgKE5hdGl2ZVN5bWJvbCAmJiBOYXRpdmVTeW1ib2wuaGFzSW5zdGFuY2UpIHx8IFN5bWJvbFBvbHlmaWxsKCdoYXNJbnN0YW5jZScpKSxcblx0aXNDb25jYXRTcHJlYWRhYmxlOiBkKCcnLCAoTmF0aXZlU3ltYm9sICYmIE5hdGl2ZVN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUpIHx8XG5cdFx0U3ltYm9sUG9seWZpbGwoJ2lzQ29uY2F0U3ByZWFkYWJsZScpKSxcblx0aXRlcmF0b3I6IGQoJycsIChOYXRpdmVTeW1ib2wgJiYgTmF0aXZlU3ltYm9sLml0ZXJhdG9yKSB8fCBTeW1ib2xQb2x5ZmlsbCgnaXRlcmF0b3InKSksXG5cdG1hdGNoOiBkKCcnLCAoTmF0aXZlU3ltYm9sICYmIE5hdGl2ZVN5bWJvbC5tYXRjaCkgfHwgU3ltYm9sUG9seWZpbGwoJ21hdGNoJykpLFxuXHRyZXBsYWNlOiBkKCcnLCAoTmF0aXZlU3ltYm9sICYmIE5hdGl2ZVN5bWJvbC5yZXBsYWNlKSB8fCBTeW1ib2xQb2x5ZmlsbCgncmVwbGFjZScpKSxcblx0c2VhcmNoOiBkKCcnLCAoTmF0aXZlU3ltYm9sICYmIE5hdGl2ZVN5bWJvbC5zZWFyY2gpIHx8IFN5bWJvbFBvbHlmaWxsKCdzZWFyY2gnKSksXG5cdHNwZWNpZXM6IGQoJycsIChOYXRpdmVTeW1ib2wgJiYgTmF0aXZlU3ltYm9sLnNwZWNpZXMpIHx8IFN5bWJvbFBvbHlmaWxsKCdzcGVjaWVzJykpLFxuXHRzcGxpdDogZCgnJywgKE5hdGl2ZVN5bWJvbCAmJiBOYXRpdmVTeW1ib2wuc3BsaXQpIHx8IFN5bWJvbFBvbHlmaWxsKCdzcGxpdCcpKSxcblx0dG9QcmltaXRpdmU6IGQoJycsIChOYXRpdmVTeW1ib2wgJiYgTmF0aXZlU3ltYm9sLnRvUHJpbWl0aXZlKSB8fCBTeW1ib2xQb2x5ZmlsbCgndG9QcmltaXRpdmUnKSksXG5cdHRvU3RyaW5nVGFnOiBkKCcnLCAoTmF0aXZlU3ltYm9sICYmIE5hdGl2ZVN5bWJvbC50b1N0cmluZ1RhZykgfHwgU3ltYm9sUG9seWZpbGwoJ3RvU3RyaW5nVGFnJykpLFxuXHR1bnNjb3BhYmxlczogZCgnJywgKE5hdGl2ZVN5bWJvbCAmJiBOYXRpdmVTeW1ib2wudW5zY29wYWJsZXMpIHx8IFN5bWJvbFBvbHlmaWxsKCd1bnNjb3BhYmxlcycpKVxufSk7XG5cbi8vIEludGVybmFsIHR3ZWFrcyBmb3IgcmVhbCBzeW1ib2wgcHJvZHVjZXJcbmRlZmluZVByb3BlcnRpZXMoSGlkZGVuU3ltYm9sLnByb3RvdHlwZSwge1xuXHRjb25zdHJ1Y3RvcjogZChTeW1ib2xQb2x5ZmlsbCksXG5cdHRvU3RyaW5nOiBkKCcnLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9fbmFtZV9fOyB9KVxufSk7XG5cbi8vIFByb3BlciBpbXBsZW1lbnRhdGlvbiBvZiBtZXRob2RzIGV4cG9zZWQgb24gU3ltYm9sLnByb3RvdHlwZVxuLy8gVGhleSB3b24ndCBiZSBhY2Nlc3NpYmxlIG9uIHByb2R1Y2VkIHN5bWJvbCBpbnN0YW5jZXMgYXMgdGhleSBkZXJpdmUgZnJvbSBIaWRkZW5TeW1ib2wucHJvdG90eXBlXG5kZWZpbmVQcm9wZXJ0aWVzKFN5bWJvbFBvbHlmaWxsLnByb3RvdHlwZSwge1xuXHR0b1N0cmluZzogZChmdW5jdGlvbiAoKSB7IHJldHVybiAnU3ltYm9sICgnICsgdmFsaWRhdGVTeW1ib2wodGhpcykuX19kZXNjcmlwdGlvbl9fICsgJyknOyB9KSxcblx0dmFsdWVPZjogZChmdW5jdGlvbiAoKSB7IHJldHVybiB2YWxpZGF0ZVN5bWJvbCh0aGlzKTsgfSlcbn0pO1xuZGVmaW5lUHJvcGVydHkoU3ltYm9sUG9seWZpbGwucHJvdG90eXBlLCBTeW1ib2xQb2x5ZmlsbC50b1ByaW1pdGl2ZSwgZCgnJywgZnVuY3Rpb24gKCkge1xuXHR2YXIgc3ltYm9sID0gdmFsaWRhdGVTeW1ib2wodGhpcyk7XG5cdGlmICh0eXBlb2Ygc3ltYm9sID09PSAnc3ltYm9sJykgcmV0dXJuIHN5bWJvbDtcblx0cmV0dXJuIHN5bWJvbC50b1N0cmluZygpO1xufSkpO1xuZGVmaW5lUHJvcGVydHkoU3ltYm9sUG9seWZpbGwucHJvdG90eXBlLCBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZywgZCgnYycsICdTeW1ib2wnKSk7XG5cbi8vIFByb3BlciBpbXBsZW1lbnRhdG9uIG9mIHRvUHJpbWl0aXZlIGFuZCB0b1N0cmluZ1RhZyBmb3IgcmV0dXJuZWQgc3ltYm9sIGluc3RhbmNlc1xuZGVmaW5lUHJvcGVydHkoSGlkZGVuU3ltYm9sLnByb3RvdHlwZSwgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcsXG5cdGQoJ2MnLCBTeW1ib2xQb2x5ZmlsbC5wcm90b3R5cGVbU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWddKSk7XG5cbi8vIE5vdGU6IEl0J3MgaW1wb3J0YW50IHRvIGRlZmluZSBgdG9QcmltaXRpdmVgIGFzIGxhc3Qgb25lLCBhcyBzb21lIGltcGxlbWVudGF0aW9uc1xuLy8gaW1wbGVtZW50IGB0b1ByaW1pdGl2ZWAgbmF0aXZlbHkgd2l0aG91dCBpbXBsZW1lbnRpbmcgYHRvU3RyaW5nVGFnYCAob3Igb3RoZXIgc3BlY2lmaWVkIHN5bWJvbHMpXG4vLyBBbmQgdGhhdCBtYXkgaW52b2tlIGVycm9yIGluIGRlZmluaXRpb24gZmxvdzpcbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21lZGlrb28vZXM2LXN5bWJvbC9pc3N1ZXMvMTMjaXNzdWVjb21tZW50LTE2NDE0NjE0OVxuZGVmaW5lUHJvcGVydHkoSGlkZGVuU3ltYm9sLnByb3RvdHlwZSwgU3ltYm9sUG9seWZpbGwudG9QcmltaXRpdmUsXG5cdGQoJ2MnLCBTeW1ib2xQb2x5ZmlsbC5wcm90b3R5cGVbU3ltYm9sUG9seWZpbGwudG9QcmltaXRpdmVdKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXMtc3ltYm9sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICghaXNTeW1ib2wodmFsdWUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKHZhbHVlICsgXCIgaXMgbm90IGEgc3ltYm9sXCIpO1xuXHRyZXR1cm4gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXNuaWZmID0gcmVxdWlyZSgnZXNuaWZmJylcblxuICAsIGksIGN1cnJlbnQsIGxpdGVyYWxzLCBzdWJzdGl0dXRpb25zLCBzT3V0LCBzRXNjYXBlLCBzQWhlYWQsIHNJbiwgc0luRXNjYXBlLCB0ZW1wbGF0ZTtcblxuc091dCA9IGZ1bmN0aW9uIChjaGFyKSB7XG5cdGlmIChjaGFyID09PSAnXFxcXCcpIHJldHVybiBzRXNjYXBlO1xuXHRpZiAoY2hhciA9PT0gJyQnKSByZXR1cm4gc0FoZWFkO1xuXHRjdXJyZW50ICs9IGNoYXI7XG5cdHJldHVybiBzT3V0O1xufTtcbnNFc2NhcGUgPSBmdW5jdGlvbiAoY2hhcikge1xuXHRpZiAoKGNoYXIgIT09ICdcXFxcJykgJiYgKGNoYXIgIT09ICckJykpIGN1cnJlbnQgKz0gJ1xcXFwnO1xuXHRjdXJyZW50ICs9IGNoYXI7XG5cdHJldHVybiBzT3V0O1xufTtcbnNBaGVhZCA9IGZ1bmN0aW9uIChjaGFyKSB7XG5cdGlmIChjaGFyID09PSAneycpIHtcblx0XHRsaXRlcmFscy5wdXNoKGN1cnJlbnQpO1xuXHRcdGN1cnJlbnQgPSAnJztcblx0XHRyZXR1cm4gc0luO1xuXHR9XG5cdGlmIChjaGFyID09PSAnJCcpIHtcblx0XHRjdXJyZW50ICs9ICckJztcblx0XHRyZXR1cm4gc0FoZWFkO1xuXHR9XG5cdGN1cnJlbnQgKz0gJyQnICsgY2hhcjtcblx0cmV0dXJuIHNPdXQ7XG59O1xuc0luID0gZnVuY3Rpb24gKGNoYXIpIHtcblx0dmFyIGNvZGUgPSB0ZW1wbGF0ZS5zbGljZShpKSwgZW5kO1xuXHRlc25pZmYoY29kZSwgJ30nLCBmdW5jdGlvbiAoaikge1xuXHRcdGlmIChlc25pZmYubmVzdCA+PSAwKSByZXR1cm4gZXNuaWZmLm5leHQoKTtcblx0XHRlbmQgPSBqO1xuXHR9KTtcblx0aWYgKGVuZCAhPSBudWxsKSB7XG5cdFx0c3Vic3RpdHV0aW9ucy5wdXNoKHRlbXBsYXRlLnNsaWNlKGksIGkgKyBlbmQpKTtcblx0XHRpICs9IGVuZDtcblx0XHRjdXJyZW50ID0gJyc7XG5cdFx0cmV0dXJuIHNPdXQ7XG5cdH1cblx0ZW5kID0gY29kZS5sZW5ndGg7XG5cdGkgKz0gZW5kO1xuXHRjdXJyZW50ICs9IGNvZGU7XG5cdHJldHVybiBzSW47XG59O1xuc0luRXNjYXBlID0gZnVuY3Rpb24gKGNoYXIpIHtcblx0aWYgKChjaGFyICE9PSAnXFxcXCcpICYmIChjaGFyICE9PSAnfScpKSBjdXJyZW50ICs9ICdcXFxcJztcblx0Y3VycmVudCArPSBjaGFyO1xuXHRyZXR1cm4gc0luO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHZhciBsZW5ndGgsIHN0YXRlLCByZXN1bHQ7XG5cdGN1cnJlbnQgPSAnJztcblx0bGl0ZXJhbHMgPSBbXTtcblx0c3Vic3RpdHV0aW9ucyA9IFtdO1xuXG5cdHRlbXBsYXRlID0gU3RyaW5nKHN0cik7XG5cdGxlbmd0aCA9IHRlbXBsYXRlLmxlbmd0aDtcblxuXHRzdGF0ZSA9IHNPdXQ7XG5cdGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkgc3RhdGUgPSBzdGF0ZSh0ZW1wbGF0ZVtpXSk7XG5cdGlmIChzdGF0ZSA9PT0gc091dCkge1xuXHRcdGxpdGVyYWxzLnB1c2goY3VycmVudCk7XG5cdH0gZWxzZSBpZiAoc3RhdGUgPT09IHNFc2NhcGUpIHtcblx0XHRsaXRlcmFscy5wdXNoKGN1cnJlbnQgKyAnXFxcXCcpO1xuXHR9IGVsc2UgaWYgKHN0YXRlID09PSBzQWhlYWQpIHtcblx0XHRsaXRlcmFscy5wdXNoKGN1cnJlbnQgKyAnJCcpO1xuXHR9IGVsc2UgaWYgKHN0YXRlID09PSBzSW4pIHtcblx0XHRsaXRlcmFsc1tsaXRlcmFscy5sZW5ndGggLSAxXSArPSAnJHsnICsgY3VycmVudDtcblx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gc0luRXNjYXBlKSB7XG5cdFx0bGl0ZXJhbHNbbGl0ZXJhbHMubGVuZ3RoIC0gMV0gKz0gJyR7JyArIGN1cnJlbnQgKyAnXFxcXCc7XG5cdH1cblx0cmVzdWx0ID0geyBsaXRlcmFsczogbGl0ZXJhbHMsIHN1YnN0aXR1dGlvbnM6IHN1YnN0aXR1dGlvbnMgfTtcblx0bGl0ZXJhbHMgPSBzdWJzdGl0dXRpb25zID0gbnVsbDtcblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb21waWxlID0gcmVxdWlyZSgnLi9jb21waWxlJylcbiAgLCByZXNvbHZlID0gcmVxdWlyZSgnLi9yZXNvbHZlLXRvLXN0cmluZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgY29udGV4dC8qLCBvcHRpb25zKi8pIHtcblx0cmV0dXJuIHJlc29sdmUoY29tcGlsZSh0ZW1wbGF0ZSksIGNvbnRleHQsIGFyZ3VtZW50c1syXSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVkdWNlID0gQXJyYXkucHJvdG90eXBlLnJlZHVjZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGl0ZXJhbHMvKiwg4oCmc3Vic3RpdHV0aW9ucyovKSB7XG5cdHZhciBhcmdzID0gYXJndW1lbnRzO1xuXHRyZXR1cm4gcmVkdWNlLmNhbGwobGl0ZXJhbHMsIGZ1bmN0aW9uIChhLCBiLCBpKSB7XG5cdFx0cmV0dXJuIGEgKyAoKGFyZ3NbaV0gPT09IHVuZGVmaW5lZCkgPyAnJyA6ICBTdHJpbmcoYXJnc1tpXSkpICsgYjtcblx0fSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVzb2x2ZSAgPSByZXF1aXJlKCcuL3Jlc29sdmUnKVxuICAsIHBhc3N0aHJ1ID0gcmVxdWlyZSgnLi9wYXNzdGhydScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCBjb250ZXh0LyosIG9wdGlvbnMqLykge1xuXHRyZXR1cm4gcGFzc3RocnUuYXBwbHkobnVsbCwgcmVzb2x2ZShkYXRhLCBjb250ZXh0LCBhcmd1bWVudHNbMl0pKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB2YWx1ZSAgICAgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ZhbGlkLXZhbHVlJylcbiAgLCBub3JtYWxpemUgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L25vcm1hbGl6ZS1vcHRpb25zJylcbiAgLCBpc1Zhck5hbWVWYWxpZCA9IHJlcXVpcmUoJ2VzbmlmZi9pcy12YXItbmFtZS12YWxpZCcpXG5cbiAgLCBtYXAgPSBBcnJheS5wcm90b3R5cGUubWFwLCBrZXlzID0gT2JqZWN0LmtleXNcbiAgLCBzdHJpbmdpZnkgPSBKU09OLnN0cmluZ2lmeTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgY29udGV4dC8qLCBvcHRpb25zKi8pIHtcblx0dmFyIG5hbWVzLCBhcmdOYW1lcywgYXJnVmFsdWVzLCBvcHRpb25zID0gT2JqZWN0KGFyZ3VtZW50c1syXSk7XG5cblx0KHZhbHVlKGRhdGEpICYmIHZhbHVlKGRhdGEubGl0ZXJhbHMpICYmIHZhbHVlKGRhdGEuc3Vic3RpdHV0aW9ucykpO1xuXHRjb250ZXh0ID0gbm9ybWFsaXplKGNvbnRleHQpO1xuXHRuYW1lcyA9IGtleXMoY29udGV4dCkuZmlsdGVyKGlzVmFyTmFtZVZhbGlkKTtcblx0YXJnTmFtZXMgPSBuYW1lcy5qb2luKCcsICcpO1xuXHRhcmdWYWx1ZXMgPSBuYW1lcy5tYXAoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIGNvbnRleHRbbmFtZV07IH0pO1xuXHRyZXR1cm4gW2RhdGEubGl0ZXJhbHNdLmNvbmNhdChtYXAuY2FsbChkYXRhLnN1YnN0aXR1dGlvbnMsIGZ1bmN0aW9uIChleHByKSB7XG5cdFx0dmFyIHJlc29sdmVyO1xuXHRcdGlmICghZXhwcikgcmV0dXJuIHVuZGVmaW5lZDtcblx0XHR0cnkge1xuXHRcdFx0cmVzb2x2ZXIgPSBuZXcgRnVuY3Rpb24oYXJnTmFtZXMsICdyZXR1cm4gKCcgKyBleHByICsgJyknKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5hYmxlIHRvIGNvbXBpbGUgZXhwcmVzc2lvbjpcXG5cXHRhcmdzOiBcIiArIHN0cmluZ2lmeShhcmdOYW1lcykgK1xuXHRcdFx0XHRcIlxcblxcdGJvZHk6IFwiICsgc3RyaW5naWZ5KGV4cHIpICsgXCJcXG5cXHRlcnJvcjogXCIgKyBlLnN0YWNrKTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiByZXNvbHZlci5hcHBseShudWxsLCBhcmdWYWx1ZXMpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGlmIChvcHRpb25zLnBhcnRpYWwpIHJldHVybiAnJHsnICsgZXhwciArICd9Jztcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmFibGUgdG8gcmVzb2x2ZSBleHByZXNzaW9uOlxcblxcdGFyZ3M6IFwiICsgc3RyaW5naWZ5KGFyZ05hbWVzKSArXG5cdFx0XHRcdFwiXFxuXFx0Ym9keTogXCIgKyBzdHJpbmdpZnkoZXhwcikgKyBcIlxcblxcdGVycm9yOiBcIiArIGUuc3RhY2spO1xuXHRcdH1cblx0fSkpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZyb20gICAgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvYXJyYXkvZnJvbScpXG4gICwgcHJpbWl0aXZlU2V0ID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvcHJpbWl0aXZlLXNldCcpXG4gICwgdmFsdWUgICAgICAgID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvdmFsaWQtdmFsdWUnKVxuICAsIGNhbGxhYmxlICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ZhbGlkLWNhbGxhYmxlJylcbiAgLCBkICAgICAgICAgICAgPSByZXF1aXJlKCdkJylcbiAgLCBlb2xTZXQgICAgICAgPSByZXF1aXJlKCcuL2xpYi93cy1lb2wnKVxuICAsIHdzU2V0ICAgICAgICA9IHJlcXVpcmUoJy4vbGliL3dzJylcblxuICAsIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIHByZVJlZ0V4cFNldCA9IHByaW1pdGl2ZVNldC5hcHBseShudWxsLCBmcm9tKCc7ez0oWyw8PistKi8lJnxeIX4/On0nKSlcbiAgLCBub25OYW1lU2V0ID0gcHJpbWl0aXZlU2V0LmFwcGx5KG51bGwsIGZyb20oJzt7PShbLDw+Ky0qLyUmfF4hfj86fSldLicpKVxuXG4gICwgbW92ZSwgc3RhcnRDb2xsZWN0LCBlbmRDb2xsZWN0LCBjb2xsZWN0TmVzdFxuICAsICR3cywgJGNvbW1vbiwgJHN0cmluZywgJGNvbW1lbnQsICRtdWx0aUNvbW1lbnQsICRyZWdFeHBcblxuICAsIGksIGNoYXIsIGxpbmUsIGNvbHVtbkluZGV4LCBhZnRlcldzLCBwcmV2aW91c0NoYXJcbiAgLCBuZXN0LCBuZXN0ZWRUb2tlbnMsIHJlc3VsdHNcbiAgLCB1c2VyQ29kZSwgdXNlclRyaWdnZXJDaGFyLCBpc1VzZXJUcmlnZ2VyT3BlcmF0b3JDaGFyLCB1c2VyQ2FsbGJhY2tcblxuICAsIHF1b3RlXG4gICwgY29sbGVjdEluZGV4LCBkYXRhLCBuZXN0UmVsZWFzZTtcblxubW92ZSA9IGZ1bmN0aW9uIChqKSB7XG5cdGlmICghY2hhcikgcmV0dXJuO1xuXHRpZiAoaSA+PSBqKSByZXR1cm47XG5cdHdoaWxlIChpICE9PSBqKSB7XG5cdFx0aWYgKCFjaGFyKSByZXR1cm47XG5cdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwod3NTZXQsIGNoYXIpKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChlb2xTZXQsIGNoYXIpKSB7XG5cdFx0XHRcdGNvbHVtbkluZGV4ID0gaTtcblx0XHRcdFx0KytsaW5lO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRwcmV2aW91c0NoYXIgPSBjaGFyO1xuXHRcdH1cblx0XHRjaGFyID0gdXNlckNvZGVbKytpXTtcblx0fVxufTtcblxuc3RhcnRDb2xsZWN0ID0gZnVuY3Rpb24gKG9sZE5lc3RSZWxlYXNlKSB7XG5cdGlmIChjb2xsZWN0SW5kZXggIT0gbnVsbCkgbmVzdGVkVG9rZW5zLnB1c2goW2RhdGEsIGNvbGxlY3RJbmRleCwgb2xkTmVzdFJlbGVhc2VdKTtcblx0ZGF0YSA9IHsgcG9pbnQ6IGkgKyAxLCBsaW5lOiBsaW5lLCBjb2x1bW46IGkgKyAxIC0gY29sdW1uSW5kZXggfTtcblx0Y29sbGVjdEluZGV4ID0gaTtcbn07XG5cbmVuZENvbGxlY3QgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBwcmV2aW91cztcblx0ZGF0YS5yYXcgPSB1c2VyQ29kZS5zbGljZShjb2xsZWN0SW5kZXgsIGkpO1xuXHRyZXN1bHRzLnB1c2goZGF0YSk7XG5cdGlmIChuZXN0ZWRUb2tlbnMubGVuZ3RoKSB7XG5cdFx0cHJldmlvdXMgPSBuZXN0ZWRUb2tlbnMucG9wKCk7XG5cdFx0ZGF0YSA9IHByZXZpb3VzWzBdO1xuXHRcdGNvbGxlY3RJbmRleCA9IHByZXZpb3VzWzFdO1xuXHRcdG5lc3RSZWxlYXNlID0gcHJldmlvdXNbMl07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGRhdGEgPSBudWxsO1xuXHRjb2xsZWN0SW5kZXggPSBudWxsO1xuXHRuZXN0UmVsZWFzZSA9IG51bGw7XG59O1xuXG5jb2xsZWN0TmVzdCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG9sZCA9IG5lc3RSZWxlYXNlO1xuXHRuZXN0UmVsZWFzZSA9IG5lc3Q7XG5cdCsrbmVzdDtcblx0bW92ZShpICsgMSk7XG5cdHN0YXJ0Q29sbGVjdChvbGQpO1xuXHRyZXR1cm4gJHdzO1xufTtcblxuJGNvbW1vbiA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKChjaGFyID09PSAnXFwnJykgfHwgKGNoYXIgPT09ICdcIicpKSB7XG5cdFx0cXVvdGUgPSBjaGFyO1xuXHRcdGNoYXIgPSB1c2VyQ29kZVsrK2ldO1xuXHRcdHJldHVybiAkc3RyaW5nO1xuXHR9XG5cdGlmICgoY2hhciA9PT0gJygnKSB8fCAoY2hhciA9PT0gJ3snKSB8fCAoY2hhciA9PT0gJ1snKSkge1xuXHRcdCsrbmVzdDtcblx0fSBlbHNlIGlmICgoY2hhciA9PT0gJyknKSB8fCAoY2hhciA9PT0gJ30nKSB8fCAoY2hhciA9PT0gJ10nKSkge1xuXHRcdGlmIChuZXN0UmVsZWFzZSA9PT0gLS1uZXN0KSBlbmRDb2xsZWN0KCk7XG5cdH0gZWxzZSBpZiAoY2hhciA9PT0gJy8nKSB7XG5cdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwocHJlUmVnRXhwU2V0LCBwcmV2aW91c0NoYXIpKSB7XG5cdFx0XHRjaGFyID0gdXNlckNvZGVbKytpXTtcblx0XHRcdHJldHVybiAkcmVnRXhwO1xuXHRcdH1cblx0fVxuXHRpZiAoKGNoYXIgIT09IHVzZXJUcmlnZ2VyQ2hhcikgfHwgKCFpc1VzZXJUcmlnZ2VyT3BlcmF0b3JDaGFyICYmIHByZXZpb3VzQ2hhciAmJiAhYWZ0ZXJXcyAmJlxuXHRcdFx0IWhhc093blByb3BlcnR5LmNhbGwobm9uTmFtZVNldCwgcHJldmlvdXNDaGFyKSkpIHtcblx0XHRwcmV2aW91c0NoYXIgPSBjaGFyO1xuXHRcdGNoYXIgPSB1c2VyQ29kZVsrK2ldO1xuXHRcdHJldHVybiAkd3M7XG5cdH1cblxuXHRyZXR1cm4gdXNlckNhbGxiYWNrKGksIHByZXZpb3VzQ2hhciwgbmVzdCk7XG59O1xuXG4kY29tbWVudCA9IGZ1bmN0aW9uICgpIHtcblx0d2hpbGUgKHRydWUpIHtcblx0XHRpZiAoIWNoYXIpIHJldHVybjtcblx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChlb2xTZXQsIGNoYXIpKSB7XG5cdFx0XHRjb2x1bW5JbmRleCA9IGkgKyAxO1xuXHRcdFx0KytsaW5lO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjaGFyID0gdXNlckNvZGVbKytpXTtcblx0fVxufTtcblxuJG11bHRpQ29tbWVudCA9IGZ1bmN0aW9uICgpIHtcblx0d2hpbGUgKHRydWUpIHtcblx0XHRpZiAoIWNoYXIpIHJldHVybjtcblx0XHRpZiAoY2hhciA9PT0gJyonKSB7XG5cdFx0XHRjaGFyID0gdXNlckNvZGVbKytpXTtcblx0XHRcdGlmIChjaGFyID09PSAnLycpIHJldHVybjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChlb2xTZXQsIGNoYXIpKSB7XG5cdFx0XHRjb2x1bW5JbmRleCA9IGkgKyAxO1xuXHRcdFx0KytsaW5lO1xuXHRcdH1cblx0XHRjaGFyID0gdXNlckNvZGVbKytpXTtcblx0fVxufTtcblxuJHdzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgbmV4dDtcblx0YWZ0ZXJXcyA9IGZhbHNlO1xuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGlmICghY2hhcikgcmV0dXJuO1xuXHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHdzU2V0LCBjaGFyKSkge1xuXHRcdFx0YWZ0ZXJXcyA9IHRydWU7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChlb2xTZXQsIGNoYXIpKSB7XG5cdFx0XHRcdGNvbHVtbkluZGV4ID0gaSArIDE7XG5cdFx0XHRcdCsrbGluZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGNoYXIgPT09ICcvJykge1xuXHRcdFx0bmV4dCA9IHVzZXJDb2RlW2kgKyAxXTtcblx0XHRcdGlmIChuZXh0ID09PSAnLycpIHtcblx0XHRcdFx0Y2hhciA9IHVzZXJDb2RlW2kgKz0gMl07XG5cdFx0XHRcdGFmdGVyV3MgPSB0cnVlO1xuXHRcdFx0XHQkY29tbWVudCgpO1xuXHRcdFx0fSBlbHNlIGlmIChuZXh0ID09PSAnKicpIHtcblx0XHRcdFx0Y2hhciA9IHVzZXJDb2RlW2kgKz0gMl07XG5cdFx0XHRcdGFmdGVyV3MgPSB0cnVlO1xuXHRcdFx0XHQkbXVsdGlDb21tZW50KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGNoYXIgPSB1c2VyQ29kZVsrK2ldO1xuXHR9XG5cdHJldHVybiAkY29tbW9uO1xufTtcblxuJHN0cmluZyA9IGZ1bmN0aW9uICgpIHtcblx0d2hpbGUgKHRydWUpIHtcblx0XHRpZiAoIWNoYXIpIHJldHVybjtcblx0XHRpZiAoY2hhciA9PT0gcXVvdGUpIHtcblx0XHRcdGNoYXIgPSB1c2VyQ29kZVsrK2ldO1xuXHRcdFx0cHJldmlvdXNDaGFyID0gcXVvdGU7XG5cdFx0XHRyZXR1cm4gJHdzO1xuXHRcdH1cblx0XHRpZiAoY2hhciA9PT0gJ1xcXFwnKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChlb2xTZXQsIHVzZXJDb2RlWysraV0pKSB7XG5cdFx0XHRcdGNvbHVtbkluZGV4ID0gaSArIDE7XG5cdFx0XHRcdCsrbGluZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2hhciA9IHVzZXJDb2RlWysraV07XG5cdH1cbn07XG5cbiRyZWdFeHAgPSBmdW5jdGlvbiAoKSB7XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0aWYgKCFjaGFyKSByZXR1cm47XG5cdFx0aWYgKGNoYXIgPT09ICcvJykge1xuXHRcdFx0cHJldmlvdXNDaGFyID0gJy8nO1xuXHRcdFx0Y2hhciA9IHVzZXJDb2RlWysraV07XG5cdFx0XHRyZXR1cm4gJHdzO1xuXHRcdH1cblx0XHRpZiAoY2hhciA9PT0gJ1xcXFwnKSArK2k7XG5cdFx0Y2hhciA9IHVzZXJDb2RlWysraV07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uIChjb2RlLCB0cmlnZ2VyQ2hhciwgY2FsbGJhY2spIHtcblx0dmFyIHN0YXRlO1xuXG5cdHVzZXJDb2RlID0gU3RyaW5nKHZhbHVlKGNvZGUpKTtcblx0dXNlclRyaWdnZXJDaGFyID0gU3RyaW5nKHZhbHVlKHRyaWdnZXJDaGFyKSk7XG5cdGlmICh1c2VyVHJpZ2dlckNoYXIubGVuZ3RoICE9PSAxKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcih1c2VyVHJpZ2dlckNoYXIgKyBcIiBzaG91bGQgYmUgb25lIGNoYXJhY3RlciBsb25nIHN0cmluZ1wiKTtcblx0fVxuXHR1c2VyQ2FsbGJhY2sgPSBjYWxsYWJsZShjYWxsYmFjayk7XG5cdGlzVXNlclRyaWdnZXJPcGVyYXRvckNoYXIgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKG5vbk5hbWVTZXQsIHVzZXJUcmlnZ2VyQ2hhcik7XG5cdGkgPSAwO1xuXHRjaGFyID0gdXNlckNvZGVbaV07XG5cdGxpbmUgPSAxO1xuXHRjb2x1bW5JbmRleCA9IDA7XG5cdGFmdGVyV3MgPSBmYWxzZTtcblx0cHJldmlvdXNDaGFyID0gbnVsbDtcblx0bmVzdCA9IDA7XG5cdG5lc3RlZFRva2VucyA9IFtdO1xuXHRyZXN1bHRzID0gW107XG5cdGV4cG9ydHMuZm9yY2VTdG9wID0gZmFsc2U7XG5cdHN0YXRlID0gJHdzO1xuXHR3aGlsZSAoc3RhdGUpIHN0YXRlID0gc3RhdGUoKTtcblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhleHBvcnRzLCB7XG5cdCR3czogZCgkd3MpLFxuXHQkY29tbW9uOiBkKCRjb21tb24pLFxuXHRjb2xsZWN0TmVzdDogZChjb2xsZWN0TmVzdCksXG5cdG1vdmU6IGQobW92ZSksXG5cdGluZGV4OiBkLmdzKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGk7IH0pLFxuXHRsaW5lOiBkLmdzKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGxpbmU7IH0pLFxuXHRuZXN0OiBkLmdzKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5lc3Q7IH0pLFxuXHRjb2x1bW5JbmRleDogZC5ncyhmdW5jdGlvbiAoKSB7IHJldHVybiBjb2x1bW5JbmRleDsgfSksXG5cdG5leHQ6IGQoZnVuY3Rpb24gKHN0ZXApIHtcblx0XHRpZiAoIWNoYXIpIHJldHVybjtcblx0XHRtb3ZlKGkgKyAoc3RlcCB8fCAxKSk7XG5cdFx0cmV0dXJuICR3cygpO1xuXHR9KSxcblx0cmVzdW1lOiBkKGZ1bmN0aW9uICgpIHsgcmV0dXJuICRjb21tb247IH0pXG59KTtcbiIsIi8vIENyZWRpdDogTWF0aGlhcyBCeW5lbnMgLT4gaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL2RlbW8vamF2YXNjcmlwdC1pZGVudGlmaWVyLXJlZ2V4XG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWdFeHAucHJvdG90eXBlLnRlc3QuYmluZCgvXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YXdhaXR8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8ZmFsc2V8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpKD86W1xcJEEtWl9hLXpcXHhBQVxceEI1XFx4QkFcXHhDMC1cXHhENlxceEQ4LVxceEY2XFx4RjgtXFx1MDJDMVxcdTAyQzYtXFx1MDJEMVxcdTAyRTAtXFx1MDJFNFxcdTAyRUNcXHUwMkVFXFx1MDM3MC1cXHUwMzc0XFx1MDM3NlxcdTAzNzdcXHUwMzdBLVxcdTAzN0RcXHUwMzdGXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDhBLVxcdTA1MkZcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYyXFx1MDYyMC1cXHUwNjRBXFx1MDY2RVxcdTA2NkZcXHUwNjcxLVxcdTA2RDNcXHUwNkQ1XFx1MDZFNVxcdTA2RTZcXHUwNkVFXFx1MDZFRlxcdTA2RkEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMVxcdTA3Q0EtXFx1MDdFQVxcdTA3RjRcXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgxNVxcdTA4MUFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4QTAtXFx1MDhCNFxcdTA4QjYtXFx1MDhCRFxcdTA5MDQtXFx1MDkzOVxcdTA5M0RcXHUwOTUwXFx1MDk1OC1cXHUwOTYxXFx1MDk3MS1cXHUwOTgwXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCRFxcdTA5Q0VcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFMVxcdTA5RjBcXHUwOUYxXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE3Mi1cXHUwQTc0XFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJEXFx1MEFEMFxcdTBBRTBcXHUwQUUxXFx1MEFGOVxcdTBCMDUtXFx1MEIwQ1xcdTBCMEZcXHUwQjEwXFx1MEIxMy1cXHUwQjI4XFx1MEIyQS1cXHUwQjMwXFx1MEIzMlxcdTBCMzNcXHUwQjM1LVxcdTBCMzlcXHUwQjNEXFx1MEI1Q1xcdTBCNURcXHUwQjVGLVxcdTBCNjFcXHUwQjcxXFx1MEI4M1xcdTBCODUtXFx1MEI4QVxcdTBCOEUtXFx1MEI5MFxcdTBCOTItXFx1MEI5NVxcdTBCOTlcXHUwQjlBXFx1MEI5Q1xcdTBCOUVcXHUwQjlGXFx1MEJBM1xcdTBCQTRcXHUwQkE4LVxcdTBCQUFcXHUwQkFFLVxcdTBCQjlcXHUwQkQwXFx1MEMwNS1cXHUwQzBDXFx1MEMwRS1cXHUwQzEwXFx1MEMxMi1cXHUwQzI4XFx1MEMyQS1cXHUwQzM5XFx1MEMzRFxcdTBDNTgtXFx1MEM1QVxcdTBDNjBcXHUwQzYxXFx1MEM4MFxcdTBDODUtXFx1MEM4Q1xcdTBDOEUtXFx1MEM5MFxcdTBDOTItXFx1MENBOFxcdTBDQUEtXFx1MENCM1xcdTBDQjUtXFx1MENCOVxcdTBDQkRcXHUwQ0RFXFx1MENFMFxcdTBDRTFcXHUwQ0YxXFx1MENGMlxcdTBEMDUtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQzQVxcdTBEM0RcXHUwRDRFXFx1MEQ1NC1cXHUwRDU2XFx1MEQ1Ri1cXHUwRDYxXFx1MEQ3QS1cXHUwRDdGXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBFMDEtXFx1MEUzMFxcdTBFMzJcXHUwRTMzXFx1MEU0MC1cXHUwRTQ2XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4N1xcdTBFODhcXHUwRThBXFx1MEU4RFxcdTBFOTQtXFx1MEU5N1xcdTBFOTktXFx1MEU5RlxcdTBFQTEtXFx1MEVBM1xcdTBFQTVcXHUwRUE3XFx1MEVBQVxcdTBFQUJcXHUwRUFELVxcdTBFQjBcXHUwRUIyXFx1MEVCM1xcdTBFQkRcXHUwRUMwLVxcdTBFQzRcXHUwRUM2XFx1MEVEQy1cXHUwRURGXFx1MEYwMFxcdTBGNDAtXFx1MEY0N1xcdTBGNDktXFx1MEY2Q1xcdTBGODgtXFx1MEY4Q1xcdTEwMDAtXFx1MTAyQVxcdTEwM0ZcXHUxMDUwLVxcdTEwNTVcXHUxMDVBLVxcdTEwNURcXHUxMDYxXFx1MTA2NVxcdTEwNjZcXHUxMDZFLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDhFXFx1MTBBMC1cXHUxMEM1XFx1MTBDN1xcdTEwQ0RcXHUxMEQwLVxcdTEwRkFcXHUxMEZDLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNVxcdTEzRjgtXFx1MTNGRFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3RlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE2RUUtXFx1MTZGOFxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3ODAtXFx1MTdCM1xcdTE3RDdcXHUxN0RDXFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEE4XFx1MThBQVxcdTE4QjAtXFx1MThGNVxcdTE5MDAtXFx1MTkxRVxcdTE5NTAtXFx1MTk2RFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlBQlxcdTE5QjAtXFx1MTlDOVxcdTFBMDAtXFx1MUExNlxcdTFBMjAtXFx1MUE1NFxcdTFBQTdcXHUxQjA1LVxcdTFCMzNcXHUxQjQ1LVxcdTFCNEJcXHUxQjgzLVxcdTFCQTBcXHUxQkFFXFx1MUJBRlxcdTFCQkEtXFx1MUJFNVxcdTFDMDAtXFx1MUMyM1xcdTFDNEQtXFx1MUM0RlxcdTFDNUEtXFx1MUM3RFxcdTFDODAtXFx1MUM4OFxcdTFDRTktXFx1MUNFQ1xcdTFDRUUtXFx1MUNGMVxcdTFDRjVcXHUxQ0Y2XFx1MUQwMC1cXHUxREJGXFx1MUUwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDlDXFx1MjEwMlxcdTIxMDdcXHUyMTBBLVxcdTIxMTNcXHUyMTE1XFx1MjExOC1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTM5XFx1MjEzQy1cXHUyMTNGXFx1MjE0NS1cXHUyMTQ5XFx1MjE0RVxcdTIxNjAtXFx1MjE4OFxcdTJDMDAtXFx1MkMyRVxcdTJDMzAtXFx1MkM1RVxcdTJDNjAtXFx1MkNFNFxcdTJDRUItXFx1MkNFRVxcdTJDRjJcXHUyQ0YzXFx1MkQwMC1cXHUyRDI1XFx1MkQyN1xcdTJEMkRcXHUyRDMwLVxcdTJENjdcXHUyRDZGXFx1MkQ4MC1cXHUyRDk2XFx1MkRBMC1cXHUyREE2XFx1MkRBOC1cXHUyREFFXFx1MkRCMC1cXHUyREI2XFx1MkRCOC1cXHUyREJFXFx1MkRDMC1cXHUyREM2XFx1MkRDOC1cXHUyRENFXFx1MkREMC1cXHUyREQ2XFx1MkREOC1cXHUyRERFXFx1MzAwNS1cXHUzMDA3XFx1MzAyMS1cXHUzMDI5XFx1MzAzMS1cXHUzMDM1XFx1MzAzOC1cXHUzMDNDXFx1MzA0MS1cXHUzMDk2XFx1MzA5Qi1cXHUzMDlGXFx1MzBBMS1cXHUzMEZBXFx1MzBGQy1cXHUzMEZGXFx1MzEwNS1cXHUzMTJEXFx1MzEzMS1cXHUzMThFXFx1MzFBMC1cXHUzMUJBXFx1MzFGMC1cXHUzMUZGXFx1MzQwMC1cXHU0REI1XFx1NEUwMC1cXHU5RkQ1XFx1QTAwMC1cXHVBNDhDXFx1QTREMC1cXHVBNEZEXFx1QTUwMC1cXHVBNjBDXFx1QTYxMC1cXHVBNjFGXFx1QTYyQVxcdUE2MkJcXHVBNjQwLVxcdUE2NkVcXHVBNjdGLVxcdUE2OURcXHVBNkEwLVxcdUE2RUZcXHVBNzE3LVxcdUE3MUZcXHVBNzIyLVxcdUE3ODhcXHVBNzhCLVxcdUE3QUVcXHVBN0IwLVxcdUE3QjdcXHVBN0Y3LVxcdUE4MDFcXHVBODAzLVxcdUE4MDVcXHVBODA3LVxcdUE4MEFcXHVBODBDLVxcdUE4MjJcXHVBODQwLVxcdUE4NzNcXHVBODgyLVxcdUE4QjNcXHVBOEYyLVxcdUE4RjdcXHVBOEZCXFx1QThGRFxcdUE5MEEtXFx1QTkyNVxcdUE5MzAtXFx1QTk0NlxcdUE5NjAtXFx1QTk3Q1xcdUE5ODQtXFx1QTlCMlxcdUE5Q0ZcXHVBOUUwLVxcdUE5RTRcXHVBOUU2LVxcdUE5RUZcXHVBOUZBLVxcdUE5RkVcXHVBQTAwLVxcdUFBMjhcXHVBQTQwLVxcdUFBNDJcXHVBQTQ0LVxcdUFBNEJcXHVBQTYwLVxcdUFBNzZcXHVBQTdBXFx1QUE3RS1cXHVBQUFGXFx1QUFCMVxcdUFBQjVcXHVBQUI2XFx1QUFCOS1cXHVBQUJEXFx1QUFDMFxcdUFBQzJcXHVBQURCLVxcdUFBRERcXHVBQUUwLVxcdUFBRUFcXHVBQUYyLVxcdUFBRjRcXHVBQjAxLVxcdUFCMDZcXHVBQjA5LVxcdUFCMEVcXHVBQjExLVxcdUFCMTZcXHVBQjIwLVxcdUFCMjZcXHVBQjI4LVxcdUFCMkVcXHVBQjMwLVxcdUFCNUFcXHVBQjVDLVxcdUFCNjVcXHVBQjcwLVxcdUFCRTJcXHVBQzAwLVxcdUQ3QTNcXHVEN0IwLVxcdUQ3QzZcXHVEN0NCLVxcdUQ3RkJcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFEXFx1RkIxRi1cXHVGQjI4XFx1RkIyQS1cXHVGQjM2XFx1RkIzOC1cXHVGQjNDXFx1RkIzRVxcdUZCNDBcXHVGQjQxXFx1RkI0M1xcdUZCNDRcXHVGQjQ2LVxcdUZCQjFcXHVGQkQzLVxcdUZEM0RcXHVGRDUwLVxcdUZEOEZcXHVGRDkyLVxcdUZEQzdcXHVGREYwLVxcdUZERkJcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNcXHVGRjIxLVxcdUZGM0FcXHVGRjQxLVxcdUZGNUFcXHVGRjY2LVxcdUZGQkVcXHVGRkMyLVxcdUZGQzdcXHVGRkNBLVxcdUZGQ0ZcXHVGRkQyLVxcdUZGRDdcXHVGRkRBLVxcdUZGRENdfFxcdUQ4MDBbXFx1REMwMC1cXHVEQzBCXFx1REMwRC1cXHVEQzI2XFx1REMyOC1cXHVEQzNBXFx1REMzQ1xcdURDM0RcXHVEQzNGLVxcdURDNERcXHVEQzUwLVxcdURDNURcXHVEQzgwLVxcdURDRkFcXHVERDQwLVxcdURENzRcXHVERTgwLVxcdURFOUNcXHVERUEwLVxcdURFRDBcXHVERjAwLVxcdURGMUZcXHVERjMwLVxcdURGNEFcXHVERjUwLVxcdURGNzVcXHVERjgwLVxcdURGOURcXHVERkEwLVxcdURGQzNcXHVERkM4LVxcdURGQ0ZcXHVERkQxLVxcdURGRDVdfFxcdUQ4MDFbXFx1REMwMC1cXHVEQzlEXFx1RENCMC1cXHVEQ0QzXFx1RENEOC1cXHVEQ0ZCXFx1REQwMC1cXHVERDI3XFx1REQzMC1cXHVERDYzXFx1REUwMC1cXHVERjM2XFx1REY0MC1cXHVERjU1XFx1REY2MC1cXHVERjY3XXxcXHVEODAyW1xcdURDMDAtXFx1REMwNVxcdURDMDhcXHVEQzBBLVxcdURDMzVcXHVEQzM3XFx1REMzOFxcdURDM0NcXHVEQzNGLVxcdURDNTVcXHVEQzYwLVxcdURDNzZcXHVEQzgwLVxcdURDOUVcXHVEQ0UwLVxcdURDRjJcXHVEQ0Y0XFx1RENGNVxcdUREMDAtXFx1REQxNVxcdUREMjAtXFx1REQzOVxcdUREODAtXFx1RERCN1xcdUREQkVcXHVEREJGXFx1REUwMFxcdURFMTAtXFx1REUxM1xcdURFMTUtXFx1REUxN1xcdURFMTktXFx1REUzM1xcdURFNjAtXFx1REU3Q1xcdURFODAtXFx1REU5Q1xcdURFQzAtXFx1REVDN1xcdURFQzktXFx1REVFNFxcdURGMDAtXFx1REYzNVxcdURGNDAtXFx1REY1NVxcdURGNjAtXFx1REY3MlxcdURGODAtXFx1REY5MV18XFx1RDgwM1tcXHVEQzAwLVxcdURDNDhcXHVEQzgwLVxcdURDQjJcXHVEQ0MwLVxcdURDRjJdfFxcdUQ4MDRbXFx1REMwMy1cXHVEQzM3XFx1REM4My1cXHVEQ0FGXFx1RENEMC1cXHVEQ0U4XFx1REQwMy1cXHVERDI2XFx1REQ1MC1cXHVERDcyXFx1REQ3NlxcdUREODMtXFx1RERCMlxcdUREQzEtXFx1RERDNFxcdUREREFcXHVERERDXFx1REUwMC1cXHVERTExXFx1REUxMy1cXHVERTJCXFx1REU4MC1cXHVERTg2XFx1REU4OFxcdURFOEEtXFx1REU4RFxcdURFOEYtXFx1REU5RFxcdURFOUYtXFx1REVBOFxcdURFQjAtXFx1REVERVxcdURGMDUtXFx1REYwQ1xcdURGMEZcXHVERjEwXFx1REYxMy1cXHVERjI4XFx1REYyQS1cXHVERjMwXFx1REYzMlxcdURGMzNcXHVERjM1LVxcdURGMzlcXHVERjNEXFx1REY1MFxcdURGNUQtXFx1REY2MV18XFx1RDgwNVtcXHVEQzAwLVxcdURDMzRcXHVEQzQ3LVxcdURDNEFcXHVEQzgwLVxcdURDQUZcXHVEQ0M0XFx1RENDNVxcdURDQzdcXHVERDgwLVxcdUREQUVcXHVEREQ4LVxcdUREREJcXHVERTAwLVxcdURFMkZcXHVERTQ0XFx1REU4MC1cXHVERUFBXFx1REYwMC1cXHVERjE5XXxcXHVEODA2W1xcdURDQTAtXFx1RENERlxcdURDRkZcXHVERUMwLVxcdURFRjhdfFxcdUQ4MDdbXFx1REMwMC1cXHVEQzA4XFx1REMwQS1cXHVEQzJFXFx1REM0MFxcdURDNzItXFx1REM4Rl18XFx1RDgwOFtcXHVEQzAwLVxcdURGOTldfFxcdUQ4MDlbXFx1REMwMC1cXHVEQzZFXFx1REM4MC1cXHVERDQzXXxbXFx1RDgwQ1xcdUQ4MUMtXFx1RDgyMFxcdUQ4NDAtXFx1RDg2OFxcdUQ4NkEtXFx1RDg2Q1xcdUQ4NkYtXFx1RDg3Ml1bXFx1REMwMC1cXHVERkZGXXxcXHVEODBEW1xcdURDMDAtXFx1REMyRV18XFx1RDgxMVtcXHVEQzAwLVxcdURFNDZdfFxcdUQ4MUFbXFx1REMwMC1cXHVERTM4XFx1REU0MC1cXHVERTVFXFx1REVEMC1cXHVERUVEXFx1REYwMC1cXHVERjJGXFx1REY0MC1cXHVERjQzXFx1REY2My1cXHVERjc3XFx1REY3RC1cXHVERjhGXXxcXHVEODFCW1xcdURGMDAtXFx1REY0NFxcdURGNTBcXHVERjkzLVxcdURGOUZcXHVERkUwXXxcXHVEODIxW1xcdURDMDAtXFx1REZFQ118XFx1RDgyMltcXHVEQzAwLVxcdURFRjJdfFxcdUQ4MkNbXFx1REMwMFxcdURDMDFdfFxcdUQ4MkZbXFx1REMwMC1cXHVEQzZBXFx1REM3MC1cXHVEQzdDXFx1REM4MC1cXHVEQzg4XFx1REM5MC1cXHVEQzk5XXxcXHVEODM1W1xcdURDMDAtXFx1REM1NFxcdURDNTYtXFx1REM5Q1xcdURDOUVcXHVEQzlGXFx1RENBMlxcdURDQTVcXHVEQ0E2XFx1RENBOS1cXHVEQ0FDXFx1RENBRS1cXHVEQ0I5XFx1RENCQlxcdURDQkQtXFx1RENDM1xcdURDQzUtXFx1REQwNVxcdUREMDctXFx1REQwQVxcdUREMEQtXFx1REQxNFxcdUREMTYtXFx1REQxQ1xcdUREMUUtXFx1REQzOVxcdUREM0ItXFx1REQzRVxcdURENDAtXFx1REQ0NFxcdURENDZcXHVERDRBLVxcdURENTBcXHVERDUyLVxcdURFQTVcXHVERUE4LVxcdURFQzBcXHVERUMyLVxcdURFREFcXHVERURDLVxcdURFRkFcXHVERUZDLVxcdURGMTRcXHVERjE2LVxcdURGMzRcXHVERjM2LVxcdURGNEVcXHVERjUwLVxcdURGNkVcXHVERjcwLVxcdURGODhcXHVERjhBLVxcdURGQThcXHVERkFBLVxcdURGQzJcXHVERkM0LVxcdURGQ0JdfFxcdUQ4M0FbXFx1REMwMC1cXHVEQ0M0XFx1REQwMC1cXHVERDQzXXxcXHVEODNCW1xcdURFMDAtXFx1REUwM1xcdURFMDUtXFx1REUxRlxcdURFMjFcXHVERTIyXFx1REUyNFxcdURFMjdcXHVERTI5LVxcdURFMzJcXHVERTM0LVxcdURFMzdcXHVERTM5XFx1REUzQlxcdURFNDJcXHVERTQ3XFx1REU0OVxcdURFNEJcXHVERTRELVxcdURFNEZcXHVERTUxXFx1REU1MlxcdURFNTRcXHVERTU3XFx1REU1OVxcdURFNUJcXHVERTVEXFx1REU1RlxcdURFNjFcXHVERTYyXFx1REU2NFxcdURFNjctXFx1REU2QVxcdURFNkMtXFx1REU3MlxcdURFNzQtXFx1REU3N1xcdURFNzktXFx1REU3Q1xcdURFN0VcXHVERTgwLVxcdURFODlcXHVERThCLVxcdURFOUJcXHVERUExLVxcdURFQTNcXHVERUE1LVxcdURFQTlcXHVERUFCLVxcdURFQkJdfFxcdUQ4NjlbXFx1REMwMC1cXHVERUQ2XFx1REYwMC1cXHVERkZGXXxcXHVEODZEW1xcdURDMDAtXFx1REYzNFxcdURGNDAtXFx1REZGRl18XFx1RDg2RVtcXHVEQzAwLVxcdURDMURcXHVEQzIwLVxcdURGRkZdfFxcdUQ4NzNbXFx1REMwMC1cXHVERUExXXxcXHVEODdFW1xcdURDMDAtXFx1REUxRF0pKD86W1xcJDAtOUEtWl9hLXpcXHhBQVxceEI1XFx4QjdcXHhCQVxceEMwLVxceEQ2XFx4RDgtXFx4RjZcXHhGOC1cXHUwMkMxXFx1MDJDNi1cXHUwMkQxXFx1MDJFMC1cXHUwMkU0XFx1MDJFQ1xcdTAyRUVcXHUwMzAwLVxcdTAzNzRcXHUwMzc2XFx1MDM3N1xcdTAzN0EtXFx1MDM3RFxcdTAzN0ZcXHUwMzg2LVxcdTAzOEFcXHUwMzhDXFx1MDM4RS1cXHUwM0ExXFx1MDNBMy1cXHUwM0Y1XFx1MDNGNy1cXHUwNDgxXFx1MDQ4My1cXHUwNDg3XFx1MDQ4QS1cXHUwNTJGXFx1MDUzMS1cXHUwNTU2XFx1MDU1OVxcdTA1NjEtXFx1MDU4N1xcdTA1OTEtXFx1MDVCRFxcdTA1QkZcXHUwNUMxXFx1MDVDMlxcdTA1QzRcXHUwNUM1XFx1MDVDN1xcdTA1RDAtXFx1MDVFQVxcdTA1RjAtXFx1MDVGMlxcdTA2MTAtXFx1MDYxQVxcdTA2MjAtXFx1MDY2OVxcdTA2NkUtXFx1MDZEM1xcdTA2RDUtXFx1MDZEQ1xcdTA2REYtXFx1MDZFOFxcdTA2RUEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwLVxcdTA3NEFcXHUwNzRELVxcdTA3QjFcXHUwN0MwLVxcdTA3RjVcXHUwN0ZBXFx1MDgwMC1cXHUwODJEXFx1MDg0MC1cXHUwODVCXFx1MDhBMC1cXHUwOEI0XFx1MDhCNi1cXHUwOEJEXFx1MDhENC1cXHUwOEUxXFx1MDhFMy1cXHUwOTYzXFx1MDk2Ni1cXHUwOTZGXFx1MDk3MS1cXHUwOTgzXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCQy1cXHUwOUM0XFx1MDlDN1xcdTA5QzhcXHUwOUNCLVxcdTA5Q0VcXHUwOUQ3XFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTNcXHUwOUU2LVxcdTA5RjFcXHUwQTAxLVxcdTBBMDNcXHUwQTA1LVxcdTBBMEFcXHUwQTBGXFx1MEExMFxcdTBBMTMtXFx1MEEyOFxcdTBBMkEtXFx1MEEzMFxcdTBBMzJcXHUwQTMzXFx1MEEzNVxcdTBBMzZcXHUwQTM4XFx1MEEzOVxcdTBBM0NcXHUwQTNFLVxcdTBBNDJcXHUwQTQ3XFx1MEE0OFxcdTBBNEItXFx1MEE0RFxcdTBBNTFcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE2Ni1cXHUwQTc1XFx1MEE4MS1cXHUwQTgzXFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJDLVxcdTBBQzVcXHUwQUM3LVxcdTBBQzlcXHUwQUNCLVxcdTBBQ0RcXHUwQUQwXFx1MEFFMC1cXHUwQUUzXFx1MEFFNi1cXHUwQUVGXFx1MEFGOVxcdTBCMDEtXFx1MEIwM1xcdTBCMDUtXFx1MEIwQ1xcdTBCMEZcXHUwQjEwXFx1MEIxMy1cXHUwQjI4XFx1MEIyQS1cXHUwQjMwXFx1MEIzMlxcdTBCMzNcXHUwQjM1LVxcdTBCMzlcXHUwQjNDLVxcdTBCNDRcXHUwQjQ3XFx1MEI0OFxcdTBCNEItXFx1MEI0RFxcdTBCNTZcXHUwQjU3XFx1MEI1Q1xcdTBCNURcXHUwQjVGLVxcdTBCNjNcXHUwQjY2LVxcdTBCNkZcXHUwQjcxXFx1MEI4MlxcdTBCODNcXHUwQjg1LVxcdTBCOEFcXHUwQjhFLVxcdTBCOTBcXHUwQjkyLVxcdTBCOTVcXHUwQjk5XFx1MEI5QVxcdTBCOUNcXHUwQjlFXFx1MEI5RlxcdTBCQTNcXHUwQkE0XFx1MEJBOC1cXHUwQkFBXFx1MEJBRS1cXHUwQkI5XFx1MEJCRS1cXHUwQkMyXFx1MEJDNi1cXHUwQkM4XFx1MEJDQS1cXHUwQkNEXFx1MEJEMFxcdTBCRDdcXHUwQkU2LVxcdTBCRUZcXHUwQzAwLVxcdTBDMDNcXHUwQzA1LVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzlcXHUwQzNELVxcdTBDNDRcXHUwQzQ2LVxcdTBDNDhcXHUwQzRBLVxcdTBDNERcXHUwQzU1XFx1MEM1NlxcdTBDNTgtXFx1MEM1QVxcdTBDNjAtXFx1MEM2M1xcdTBDNjYtXFx1MEM2RlxcdTBDODAtXFx1MEM4M1xcdTBDODUtXFx1MEM4Q1xcdTBDOEUtXFx1MEM5MFxcdTBDOTItXFx1MENBOFxcdTBDQUEtXFx1MENCM1xcdTBDQjUtXFx1MENCOVxcdTBDQkMtXFx1MENDNFxcdTBDQzYtXFx1MENDOFxcdTBDQ0EtXFx1MENDRFxcdTBDRDVcXHUwQ0Q2XFx1MENERVxcdTBDRTAtXFx1MENFM1xcdTBDRTYtXFx1MENFRlxcdTBDRjFcXHUwQ0YyXFx1MEQwMS1cXHUwRDAzXFx1MEQwNS1cXHUwRDBDXFx1MEQwRS1cXHUwRDEwXFx1MEQxMi1cXHUwRDNBXFx1MEQzRC1cXHUwRDQ0XFx1MEQ0Ni1cXHUwRDQ4XFx1MEQ0QS1cXHUwRDRFXFx1MEQ1NC1cXHUwRDU3XFx1MEQ1Ri1cXHUwRDYzXFx1MEQ2Ni1cXHUwRDZGXFx1MEQ3QS1cXHUwRDdGXFx1MEQ4MlxcdTBEODNcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MERDQVxcdTBEQ0YtXFx1MERENFxcdTBERDZcXHUwREQ4LVxcdTBEREZcXHUwREU2LVxcdTBERUZcXHUwREYyXFx1MERGM1xcdTBFMDEtXFx1MEUzQVxcdTBFNDAtXFx1MEU0RVxcdTBFNTAtXFx1MEU1OVxcdTBFODFcXHUwRTgyXFx1MEU4NFxcdTBFODdcXHUwRTg4XFx1MEU4QVxcdTBFOERcXHUwRTk0LVxcdTBFOTdcXHUwRTk5LVxcdTBFOUZcXHUwRUExLVxcdTBFQTNcXHUwRUE1XFx1MEVBN1xcdTBFQUFcXHUwRUFCXFx1MEVBRC1cXHUwRUI5XFx1MEVCQi1cXHUwRUJEXFx1MEVDMC1cXHUwRUM0XFx1MEVDNlxcdTBFQzgtXFx1MEVDRFxcdTBFRDAtXFx1MEVEOVxcdTBFREMtXFx1MEVERlxcdTBGMDBcXHUwRjE4XFx1MEYxOVxcdTBGMjAtXFx1MEYyOVxcdTBGMzVcXHUwRjM3XFx1MEYzOVxcdTBGM0UtXFx1MEY0N1xcdTBGNDktXFx1MEY2Q1xcdTBGNzEtXFx1MEY4NFxcdTBGODYtXFx1MEY5N1xcdTBGOTktXFx1MEZCQ1xcdTBGQzZcXHUxMDAwLVxcdTEwNDlcXHUxMDUwLVxcdTEwOURcXHUxMEEwLVxcdTEwQzVcXHUxMEM3XFx1MTBDRFxcdTEwRDAtXFx1MTBGQVxcdTEwRkMtXFx1MTI0OFxcdTEyNEEtXFx1MTI0RFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVBLVxcdTEyNURcXHUxMjYwLVxcdTEyODhcXHUxMjhBLVxcdTEyOERcXHUxMjkwLVxcdTEyQjBcXHUxMkIyLVxcdTEyQjVcXHUxMkI4LVxcdTEyQkVcXHUxMkMwXFx1MTJDMi1cXHUxMkM1XFx1MTJDOC1cXHUxMkQ2XFx1MTJEOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVBXFx1MTM1RC1cXHUxMzVGXFx1MTM2OS1cXHUxMzcxXFx1MTM4MC1cXHUxMzhGXFx1MTNBMC1cXHUxM0Y1XFx1MTNGOC1cXHUxM0ZEXFx1MTQwMS1cXHUxNjZDXFx1MTY2Ri1cXHUxNjdGXFx1MTY4MS1cXHUxNjlBXFx1MTZBMC1cXHUxNkVBXFx1MTZFRS1cXHUxNkY4XFx1MTcwMC1cXHUxNzBDXFx1MTcwRS1cXHUxNzE0XFx1MTcyMC1cXHUxNzM0XFx1MTc0MC1cXHUxNzUzXFx1MTc2MC1cXHUxNzZDXFx1MTc2RS1cXHUxNzcwXFx1MTc3MlxcdTE3NzNcXHUxNzgwLVxcdTE3RDNcXHUxN0Q3XFx1MTdEQ1xcdTE3RERcXHUxN0UwLVxcdTE3RTlcXHUxODBCLVxcdTE4MERcXHUxODEwLVxcdTE4MTlcXHUxODIwLVxcdTE4NzdcXHUxODgwLVxcdTE4QUFcXHUxOEIwLVxcdTE4RjVcXHUxOTAwLVxcdTE5MUVcXHUxOTIwLVxcdTE5MkJcXHUxOTMwLVxcdTE5M0JcXHUxOTQ2LVxcdTE5NkRcXHUxOTcwLVxcdTE5NzRcXHUxOTgwLVxcdTE5QUJcXHUxOUIwLVxcdTE5QzlcXHUxOUQwLVxcdTE5REFcXHUxQTAwLVxcdTFBMUJcXHUxQTIwLVxcdTFBNUVcXHUxQTYwLVxcdTFBN0NcXHUxQTdGLVxcdTFBODlcXHUxQTkwLVxcdTFBOTlcXHUxQUE3XFx1MUFCMC1cXHUxQUJEXFx1MUIwMC1cXHUxQjRCXFx1MUI1MC1cXHUxQjU5XFx1MUI2Qi1cXHUxQjczXFx1MUI4MC1cXHUxQkYzXFx1MUMwMC1cXHUxQzM3XFx1MUM0MC1cXHUxQzQ5XFx1MUM0RC1cXHUxQzdEXFx1MUM4MC1cXHUxQzg4XFx1MUNEMC1cXHUxQ0QyXFx1MUNENC1cXHUxQ0Y2XFx1MUNGOFxcdTFDRjlcXHUxRDAwLVxcdTFERjVcXHUxREZCLVxcdTFGMTVcXHUxRjE4LVxcdTFGMURcXHUxRjIwLVxcdTFGNDVcXHUxRjQ4LVxcdTFGNERcXHUxRjUwLVxcdTFGNTdcXHUxRjU5XFx1MUY1QlxcdTFGNURcXHUxRjVGLVxcdTFGN0RcXHUxRjgwLVxcdTFGQjRcXHUxRkI2LVxcdTFGQkNcXHUxRkJFXFx1MUZDMi1cXHUxRkM0XFx1MUZDNi1cXHUxRkNDXFx1MUZEMC1cXHUxRkQzXFx1MUZENi1cXHUxRkRCXFx1MUZFMC1cXHUxRkVDXFx1MUZGMi1cXHUxRkY0XFx1MUZGNi1cXHUxRkZDXFx1MjAwQ1xcdTIwMERcXHUyMDNGXFx1MjA0MFxcdTIwNTRcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5Q1xcdTIwRDAtXFx1MjBEQ1xcdTIwRTFcXHUyMEU1LVxcdTIwRjBcXHUyMTAyXFx1MjEwN1xcdTIxMEEtXFx1MjExM1xcdTIxMTVcXHUyMTE4LVxcdTIxMURcXHUyMTI0XFx1MjEyNlxcdTIxMjhcXHUyMTJBLVxcdTIxMzlcXHUyMTNDLVxcdTIxM0ZcXHUyMTQ1LVxcdTIxNDlcXHUyMTRFXFx1MjE2MC1cXHUyMTg4XFx1MkMwMC1cXHUyQzJFXFx1MkMzMC1cXHUyQzVFXFx1MkM2MC1cXHUyQ0U0XFx1MkNFQi1cXHUyQ0YzXFx1MkQwMC1cXHUyRDI1XFx1MkQyN1xcdTJEMkRcXHUyRDMwLVxcdTJENjdcXHUyRDZGXFx1MkQ3Ri1cXHUyRDk2XFx1MkRBMC1cXHUyREE2XFx1MkRBOC1cXHUyREFFXFx1MkRCMC1cXHUyREI2XFx1MkRCOC1cXHUyREJFXFx1MkRDMC1cXHUyREM2XFx1MkRDOC1cXHUyRENFXFx1MkREMC1cXHUyREQ2XFx1MkREOC1cXHUyRERFXFx1MkRFMC1cXHUyREZGXFx1MzAwNS1cXHUzMDA3XFx1MzAyMS1cXHUzMDJGXFx1MzAzMS1cXHUzMDM1XFx1MzAzOC1cXHUzMDNDXFx1MzA0MS1cXHUzMDk2XFx1MzA5OS1cXHUzMDlGXFx1MzBBMS1cXHUzMEZBXFx1MzBGQy1cXHUzMEZGXFx1MzEwNS1cXHUzMTJEXFx1MzEzMS1cXHUzMThFXFx1MzFBMC1cXHUzMUJBXFx1MzFGMC1cXHUzMUZGXFx1MzQwMC1cXHU0REI1XFx1NEUwMC1cXHU5RkQ1XFx1QTAwMC1cXHVBNDhDXFx1QTREMC1cXHVBNEZEXFx1QTUwMC1cXHVBNjBDXFx1QTYxMC1cXHVBNjJCXFx1QTY0MC1cXHVBNjZGXFx1QTY3NC1cXHVBNjdEXFx1QTY3Ri1cXHVBNkYxXFx1QTcxNy1cXHVBNzFGXFx1QTcyMi1cXHVBNzg4XFx1QTc4Qi1cXHVBN0FFXFx1QTdCMC1cXHVBN0I3XFx1QTdGNy1cXHVBODI3XFx1QTg0MC1cXHVBODczXFx1QTg4MC1cXHVBOEM1XFx1QThEMC1cXHVBOEQ5XFx1QThFMC1cXHVBOEY3XFx1QThGQlxcdUE4RkRcXHVBOTAwLVxcdUE5MkRcXHVBOTMwLVxcdUE5NTNcXHVBOTYwLVxcdUE5N0NcXHVBOTgwLVxcdUE5QzBcXHVBOUNGLVxcdUE5RDlcXHVBOUUwLVxcdUE5RkVcXHVBQTAwLVxcdUFBMzZcXHVBQTQwLVxcdUFBNERcXHVBQTUwLVxcdUFBNTlcXHVBQTYwLVxcdUFBNzZcXHVBQTdBLVxcdUFBQzJcXHVBQURCLVxcdUFBRERcXHVBQUUwLVxcdUFBRUZcXHVBQUYyLVxcdUFBRjZcXHVBQjAxLVxcdUFCMDZcXHVBQjA5LVxcdUFCMEVcXHVBQjExLVxcdUFCMTZcXHVBQjIwLVxcdUFCMjZcXHVBQjI4LVxcdUFCMkVcXHVBQjMwLVxcdUFCNUFcXHVBQjVDLVxcdUFCNjVcXHVBQjcwLVxcdUFCRUFcXHVBQkVDXFx1QUJFRFxcdUFCRjAtXFx1QUJGOVxcdUFDMDAtXFx1RDdBM1xcdUQ3QjAtXFx1RDdDNlxcdUQ3Q0ItXFx1RDdGQlxcdUY5MDAtXFx1RkE2RFxcdUZBNzAtXFx1RkFEOVxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMUQtXFx1RkIyOFxcdUZCMkEtXFx1RkIzNlxcdUZCMzgtXFx1RkIzQ1xcdUZCM0VcXHVGQjQwXFx1RkI0MVxcdUZCNDNcXHVGQjQ0XFx1RkI0Ni1cXHVGQkIxXFx1RkJEMy1cXHVGRDNEXFx1RkQ1MC1cXHVGRDhGXFx1RkQ5Mi1cXHVGREM3XFx1RkRGMC1cXHVGREZCXFx1RkUwMC1cXHVGRTBGXFx1RkUyMC1cXHVGRTJGXFx1RkUzM1xcdUZFMzRcXHVGRTRELVxcdUZFNEZcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNcXHVGRjEwLVxcdUZGMTlcXHVGRjIxLVxcdUZGM0FcXHVGRjNGXFx1RkY0MS1cXHVGRjVBXFx1RkY2Ni1cXHVGRkJFXFx1RkZDMi1cXHVGRkM3XFx1RkZDQS1cXHVGRkNGXFx1RkZEMi1cXHVGRkQ3XFx1RkZEQS1cXHVGRkRDXXxcXHVEODAwW1xcdURDMDAtXFx1REMwQlxcdURDMEQtXFx1REMyNlxcdURDMjgtXFx1REMzQVxcdURDM0NcXHVEQzNEXFx1REMzRi1cXHVEQzREXFx1REM1MC1cXHVEQzVEXFx1REM4MC1cXHVEQ0ZBXFx1REQ0MC1cXHVERDc0XFx1RERGRFxcdURFODAtXFx1REU5Q1xcdURFQTAtXFx1REVEMFxcdURFRTBcXHVERjAwLVxcdURGMUZcXHVERjMwLVxcdURGNEFcXHVERjUwLVxcdURGN0FcXHVERjgwLVxcdURGOURcXHVERkEwLVxcdURGQzNcXHVERkM4LVxcdURGQ0ZcXHVERkQxLVxcdURGRDVdfFxcdUQ4MDFbXFx1REMwMC1cXHVEQzlEXFx1RENBMC1cXHVEQ0E5XFx1RENCMC1cXHVEQ0QzXFx1RENEOC1cXHVEQ0ZCXFx1REQwMC1cXHVERDI3XFx1REQzMC1cXHVERDYzXFx1REUwMC1cXHVERjM2XFx1REY0MC1cXHVERjU1XFx1REY2MC1cXHVERjY3XXxcXHVEODAyW1xcdURDMDAtXFx1REMwNVxcdURDMDhcXHVEQzBBLVxcdURDMzVcXHVEQzM3XFx1REMzOFxcdURDM0NcXHVEQzNGLVxcdURDNTVcXHVEQzYwLVxcdURDNzZcXHVEQzgwLVxcdURDOUVcXHVEQ0UwLVxcdURDRjJcXHVEQ0Y0XFx1RENGNVxcdUREMDAtXFx1REQxNVxcdUREMjAtXFx1REQzOVxcdUREODAtXFx1RERCN1xcdUREQkVcXHVEREJGXFx1REUwMC1cXHVERTAzXFx1REUwNVxcdURFMDZcXHVERTBDLVxcdURFMTNcXHVERTE1LVxcdURFMTdcXHVERTE5LVxcdURFMzNcXHVERTM4LVxcdURFM0FcXHVERTNGXFx1REU2MC1cXHVERTdDXFx1REU4MC1cXHVERTlDXFx1REVDMC1cXHVERUM3XFx1REVDOS1cXHVERUU2XFx1REYwMC1cXHVERjM1XFx1REY0MC1cXHVERjU1XFx1REY2MC1cXHVERjcyXFx1REY4MC1cXHVERjkxXXxcXHVEODAzW1xcdURDMDAtXFx1REM0OFxcdURDODAtXFx1RENCMlxcdURDQzAtXFx1RENGMl18XFx1RDgwNFtcXHVEQzAwLVxcdURDNDZcXHVEQzY2LVxcdURDNkZcXHVEQzdGLVxcdURDQkFcXHVEQ0QwLVxcdURDRThcXHVEQ0YwLVxcdURDRjlcXHVERDAwLVxcdUREMzRcXHVERDM2LVxcdUREM0ZcXHVERDUwLVxcdURENzNcXHVERDc2XFx1REQ4MC1cXHVEREM0XFx1RERDQS1cXHVERENDXFx1REREMC1cXHVERERBXFx1REREQ1xcdURFMDAtXFx1REUxMVxcdURFMTMtXFx1REUzN1xcdURFM0VcXHVERTgwLVxcdURFODZcXHVERTg4XFx1REU4QS1cXHVERThEXFx1REU4Ri1cXHVERTlEXFx1REU5Ri1cXHVERUE4XFx1REVCMC1cXHVERUVBXFx1REVGMC1cXHVERUY5XFx1REYwMC1cXHVERjAzXFx1REYwNS1cXHVERjBDXFx1REYwRlxcdURGMTBcXHVERjEzLVxcdURGMjhcXHVERjJBLVxcdURGMzBcXHVERjMyXFx1REYzM1xcdURGMzUtXFx1REYzOVxcdURGM0MtXFx1REY0NFxcdURGNDdcXHVERjQ4XFx1REY0Qi1cXHVERjREXFx1REY1MFxcdURGNTdcXHVERjVELVxcdURGNjNcXHVERjY2LVxcdURGNkNcXHVERjcwLVxcdURGNzRdfFxcdUQ4MDVbXFx1REMwMC1cXHVEQzRBXFx1REM1MC1cXHVEQzU5XFx1REM4MC1cXHVEQ0M1XFx1RENDN1xcdURDRDAtXFx1RENEOVxcdUREODAtXFx1RERCNVxcdUREQjgtXFx1RERDMFxcdURERDgtXFx1RERERFxcdURFMDAtXFx1REU0MFxcdURFNDRcXHVERTUwLVxcdURFNTlcXHVERTgwLVxcdURFQjdcXHVERUMwLVxcdURFQzlcXHVERjAwLVxcdURGMTlcXHVERjFELVxcdURGMkJcXHVERjMwLVxcdURGMzldfFxcdUQ4MDZbXFx1RENBMC1cXHVEQ0U5XFx1RENGRlxcdURFQzAtXFx1REVGOF18XFx1RDgwN1tcXHVEQzAwLVxcdURDMDhcXHVEQzBBLVxcdURDMzZcXHVEQzM4LVxcdURDNDBcXHVEQzUwLVxcdURDNTlcXHVEQzcyLVxcdURDOEZcXHVEQzkyLVxcdURDQTdcXHVEQ0E5LVxcdURDQjZdfFxcdUQ4MDhbXFx1REMwMC1cXHVERjk5XXxcXHVEODA5W1xcdURDMDAtXFx1REM2RVxcdURDODAtXFx1REQ0M118W1xcdUQ4MENcXHVEODFDLVxcdUQ4MjBcXHVEODQwLVxcdUQ4NjhcXHVEODZBLVxcdUQ4NkNcXHVEODZGLVxcdUQ4NzJdW1xcdURDMDAtXFx1REZGRl18XFx1RDgwRFtcXHVEQzAwLVxcdURDMkVdfFxcdUQ4MTFbXFx1REMwMC1cXHVERTQ2XXxcXHVEODFBW1xcdURDMDAtXFx1REUzOFxcdURFNDAtXFx1REU1RVxcdURFNjAtXFx1REU2OVxcdURFRDAtXFx1REVFRFxcdURFRjAtXFx1REVGNFxcdURGMDAtXFx1REYzNlxcdURGNDAtXFx1REY0M1xcdURGNTAtXFx1REY1OVxcdURGNjMtXFx1REY3N1xcdURGN0QtXFx1REY4Rl18XFx1RDgxQltcXHVERjAwLVxcdURGNDRcXHVERjUwLVxcdURGN0VcXHVERjhGLVxcdURGOUZcXHVERkUwXXxcXHVEODIxW1xcdURDMDAtXFx1REZFQ118XFx1RDgyMltcXHVEQzAwLVxcdURFRjJdfFxcdUQ4MkNbXFx1REMwMFxcdURDMDFdfFxcdUQ4MkZbXFx1REMwMC1cXHVEQzZBXFx1REM3MC1cXHVEQzdDXFx1REM4MC1cXHVEQzg4XFx1REM5MC1cXHVEQzk5XFx1REM5RFxcdURDOUVdfFxcdUQ4MzRbXFx1REQ2NS1cXHVERDY5XFx1REQ2RC1cXHVERDcyXFx1REQ3Qi1cXHVERDgyXFx1REQ4NS1cXHVERDhCXFx1RERBQS1cXHVEREFEXFx1REU0Mi1cXHVERTQ0XXxcXHVEODM1W1xcdURDMDAtXFx1REM1NFxcdURDNTYtXFx1REM5Q1xcdURDOUVcXHVEQzlGXFx1RENBMlxcdURDQTVcXHVEQ0E2XFx1RENBOS1cXHVEQ0FDXFx1RENBRS1cXHVEQ0I5XFx1RENCQlxcdURDQkQtXFx1RENDM1xcdURDQzUtXFx1REQwNVxcdUREMDctXFx1REQwQVxcdUREMEQtXFx1REQxNFxcdUREMTYtXFx1REQxQ1xcdUREMUUtXFx1REQzOVxcdUREM0ItXFx1REQzRVxcdURENDAtXFx1REQ0NFxcdURENDZcXHVERDRBLVxcdURENTBcXHVERDUyLVxcdURFQTVcXHVERUE4LVxcdURFQzBcXHVERUMyLVxcdURFREFcXHVERURDLVxcdURFRkFcXHVERUZDLVxcdURGMTRcXHVERjE2LVxcdURGMzRcXHVERjM2LVxcdURGNEVcXHVERjUwLVxcdURGNkVcXHVERjcwLVxcdURGODhcXHVERjhBLVxcdURGQThcXHVERkFBLVxcdURGQzJcXHVERkM0LVxcdURGQ0JcXHVERkNFLVxcdURGRkZdfFxcdUQ4MzZbXFx1REUwMC1cXHVERTM2XFx1REUzQi1cXHVERTZDXFx1REU3NVxcdURFODRcXHVERTlCLVxcdURFOUZcXHVERUExLVxcdURFQUZdfFxcdUQ4MzhbXFx1REMwMC1cXHVEQzA2XFx1REMwOC1cXHVEQzE4XFx1REMxQi1cXHVEQzIxXFx1REMyM1xcdURDMjRcXHVEQzI2LVxcdURDMkFdfFxcdUQ4M0FbXFx1REMwMC1cXHVEQ0M0XFx1RENEMC1cXHVEQ0Q2XFx1REQwMC1cXHVERDRBXFx1REQ1MC1cXHVERDU5XXxcXHVEODNCW1xcdURFMDAtXFx1REUwM1xcdURFMDUtXFx1REUxRlxcdURFMjFcXHVERTIyXFx1REUyNFxcdURFMjdcXHVERTI5LVxcdURFMzJcXHVERTM0LVxcdURFMzdcXHVERTM5XFx1REUzQlxcdURFNDJcXHVERTQ3XFx1REU0OVxcdURFNEJcXHVERTRELVxcdURFNEZcXHVERTUxXFx1REU1MlxcdURFNTRcXHVERTU3XFx1REU1OVxcdURFNUJcXHVERTVEXFx1REU1RlxcdURFNjFcXHVERTYyXFx1REU2NFxcdURFNjctXFx1REU2QVxcdURFNkMtXFx1REU3MlxcdURFNzQtXFx1REU3N1xcdURFNzktXFx1REU3Q1xcdURFN0VcXHVERTgwLVxcdURFODlcXHVERThCLVxcdURFOUJcXHVERUExLVxcdURFQTNcXHVERUE1LVxcdURFQTlcXHVERUFCLVxcdURFQkJdfFxcdUQ4NjlbXFx1REMwMC1cXHVERUQ2XFx1REYwMC1cXHVERkZGXXxcXHVEODZEW1xcdURDMDAtXFx1REYzNFxcdURGNDAtXFx1REZGRl18XFx1RDg2RVtcXHVEQzAwLVxcdURDMURcXHVEQzIwLVxcdURGRkZdfFxcdUQ4NzNbXFx1REMwMC1cXHVERUExXXxcXHVEODdFW1xcdURDMDAtXFx1REUxRF18XFx1REI0MFtcXHVERDAwLVxcdURERUZdKSokLyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmcm9tICAgICAgICAgPSByZXF1aXJlKCdlczUtZXh0L2FycmF5L2Zyb20nKVxuICAsIHByaW1pdGl2ZVNldCA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ByaW1pdGl2ZS1zZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcmltaXRpdmVTZXQuYXBwbHkobnVsbCwgZnJvbSgnXFxuXFxyXFx1MjAyOFxcdTIwMjknKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmcm9tICAgICAgICAgPSByZXF1aXJlKCdlczUtZXh0L2FycmF5L2Zyb20nKVxuICAsIHByaW1pdGl2ZVNldCA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ByaW1pdGl2ZS1zZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcmltaXRpdmVTZXQuYXBwbHkobnVsbCwgZnJvbSgnIFxcZlxcdFxcduKAi1xcdTAwYTBcXHUxNjgw4oCLXFx1MTgwZScgK1xuXHQnXFx1MjAwMOKAi1xcdTIwMDFcXHUyMDAy4oCLXFx1MjAwM1xcdTIwMDTigItcXHUyMDA1XFx1MjAwNuKAi1xcdTIwMDdcXHUyMDA44oCLXFx1MjAwOVxcdTIwMGEnICtcblx0J+KAi+KAi+KAi1xcdTIwMmZcXHUyMDVm4oCLXFx1MzAwMCcpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHByaW1pdGl2ZVNldCA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ByaW1pdGl2ZS1zZXQnKVxuICAsIGVvbCAgICAgICAgICA9IHJlcXVpcmUoJy4vd3MtZW9sJylcbiAgLCBpbmxpbmUgICAgICAgPSByZXF1aXJlKCcuL3dzLWlubGluZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW1pdGl2ZVNldC5hcHBseShudWxsLFxuXHRPYmplY3Qua2V5cyhlb2wpLmNvbmNhdChPYmplY3Qua2V5cyhpbmxpbmUpKSk7XG4iLCJcbi8vIHZhcmlvdXMgYXNzZXRzXG5cbnJlcXVpcmUoJy4vYXNzZXRzL2ltYWdlcy9sb2dvX2x1Y2lkd2ViLnBuZycpO1xucmVxdWlyZSgnLi9hc3NldHMvc3R5bGVzL3VpLmdlbmVyYWwubGVzcycpO1xucmVxdWlyZSgnLi9hc3NldHMvc3R5bGVzL3VpLmJyYW5kaW5nLmxlc3MnKTtcbnJlcXVpcmUoJy4vYXNzZXRzL3N0eWxlcy91aS5pY29uLXJlbmRlcmluZy5sZXNzJyk7XG5cbi8vIHByaW1pdGl2ZXNcblxucmVxdWlyZSgnLi9wcmltaXRpdmVzL3VpLWljb24nKTtcbnJlcXVpcmUoJy4vcHJpbWl0aXZlcy91aS1idXR0b24nKTtcbnJlcXVpcmUoJy4vcHJpbWl0aXZlcy92aWRlby1jb250cm9scycpO1xuXG5yZXF1aXJlKCcuL3ByaW1pdGl2ZXMvbW9kaWZ5LXByb3BlcnR5Jyk7XG5cbi8vIGNvbXBvbmVudHNcblxucmVxdWlyZSgnLi9jb21wb25lbnRzL2FsbC1jb250cm9scycpO1xucmVxdWlyZSgnLi9jb21wb25lbnRzL2ljb24tcmVuZGVyZXInKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cy91aS1idXR0b24nKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cy92aWRlby1jb250cm9scycpO1xucmVxdWlyZSgnLi9jb21wb25lbnRzL2dlb21ldHJ5LXJlc2l6ZScpO1xucmVxdWlyZSgnLi9jb21wb25lbnRzL3RyYWNrLXBvc2l0aW9uJyk7XG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvdHJhY2stcm90YXRpb24nKTtcblxucmVxdWlyZSgnLi9jb21wb25lbnRzL21vZGlmeS1wcm9wZXJ0eScpO1xuXG4vLyBzeXN0ZW1zXG5cbnJlcXVpcmUoJy4vc3lzdGVtcy9pY29uLXJlbmRlcmVyJyk7IiwiXG4vLyBwcmltaXRpdmVzXG5cbnJlcXVpcmUoJy4vcHJpbWl0aXZlcy9oaWRlLWVudGl0eScpO1xucmVxdWlyZSgnLi9wcmltaXRpdmVzL3Nob3ctZW50aXR5Jyk7XG5yZXF1aXJlKCcuL3ByaW1pdGl2ZXMvc2hvdy1sb2FkaW5nLXNjcmVlbicpO1xucmVxdWlyZSgnLi9wcmltaXRpdmVzL2VuYWJsZS1ncm91cCcpO1xucmVxdWlyZSgnLi9wcmltaXRpdmVzL2Rpc2FibGUtZ3JvdXAnKTtcblxuLy8gY29tcG9uZW50c1xuXG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvaGlkZS1lbnRpdHknKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9zaG93LWVudGl0eScpO1xucmVxdWlyZSgnLi9jb21wb25lbnRzL2RldmljZS1kZXRlY3Rpb24nKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cy90cmFuc2l0aW9uLXRvLWNhcmRib2FyZCcpO1xucmVxdWlyZSgnLi9jb21wb25lbnRzL3Nob3ctbG9hZGluZy1zY3JlZW4nKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9lbmFibGUtZ3JvdXAnKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9kaXNhYmxlLWdyb3VwJyk7XG5cbi8vIG90aGVyXG5cbnJlcXVpcmUoJy4vYXNzZXRzL3N0eWxlcy91dGlsaXRpZXMubGVzcycpOyIsIlxuLy9cbi8vIEFTU0VUU1xuLy9cblxucmVxdWlyZSgnLi4vdXRpbGl0aWVzL2Fzc2V0cy9pbWFnZXMvYXNzaXN0LWNhcmRib2FyZC1iYWNrZ3JvdW5kLmpwZycpO1xuXG4vL1xuLy8gU1RZTEVTXG4vL1xuXG5yZXF1aXJlKCcuL2Fzc2V0cy9zdHlsZXMvdmlkZW8ubGVzcycpO1xuXG4vL1xuLy8gUE9MWUZJTExTXG4vL1xuXG5yZXF1aXJlKCdlczYtcHJvbWlzZScpLnBvbHlmaWxsKCk7XG5cbi8vXG4vLyBSZXF1aXJlbWVudHNcbi8vXG5cbi8vIHByaW1pdGl2ZXNcblxucmVxdWlyZSgnLi9wcmltaXRpdmVzL3ZpZGVvLWNvbnRyb2xsZXInKTtcbnJlcXVpcmUoJy4vcHJpbWl0aXZlcy9zdGFydC12aWRlbycpO1xucmVxdWlyZSgnLi9wcmltaXRpdmVzL2VuZC12aWRlbycpO1xucmVxdWlyZSgnLi9wcmltaXRpdmVzL3N0b3AtdmlkZW8nKTtcbnJlcXVpcmUoJy4vcHJpbWl0aXZlcy9wbGF5LXZpZGVvJyk7XG5yZXF1aXJlKCcuL3ByaW1pdGl2ZXMvbXV0ZS12aWRlbycpO1xucmVxdWlyZSgnLi9wcmltaXRpdmVzL2ZsYXQtdmlkZW8tY29udHJvbHMnKTtcbnJlcXVpcmUoJy4vcHJpbWl0aXZlcy9wbGF5LWF1ZGlvJyk7XG5yZXF1aXJlKCcuL3ByaW1pdGl2ZXMvcGF1c2UtYXVkaW8nKTtcbnJlcXVpcmUoJy4vcHJpbWl0aXZlcy9vbi12aWRlby1jbG9zZWQnKTtcbnJlcXVpcmUoJy4vcHJpbWl0aXZlcy9vbi12aWRlby1lbmRlZCcpO1xucmVxdWlyZSgnLi9wcmltaXRpdmVzL2Rlc2t0b3AtdmlkZW9zcGhlcmUtY29udHJvbHMnKTtcblxuLy8gY29tcG9uZW50c1xuXG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvc3RhcnQtdmlkZW8nKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9lbmQtdmlkZW8nKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9wbGF5LXZpZGVvJyk7XG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvc3RvcC12aWRlbycpO1xucmVxdWlyZSgnLi9jb21wb25lbnRzL211dGUtdmlkZW8nKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cy92aWRlby1jb250cm9sbGVyJyk7XG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvZmxhdC12aWRlby1jb250cm9scycpO1xucmVxdWlyZSgnLi9jb21wb25lbnRzL3BsYXktYXVkaW8nKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9wYXVzZS1hdWRpbycpO1xucmVxdWlyZSgnLi9jb21wb25lbnRzL3ZpZGVvLWNhbi1wbGF5Jyk7XG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvZGVza3RvcC12aWRlb3NwaGVyZS1jb250cm9scycpO1xuXG4vLyBzeXN0ZW1zXG5cbnJlcXVpcmUoJy4vc3lzdGVtcy92aWRlby1jb250cm9sbGVyJyk7XG5yZXF1aXJlKCcuL3N5c3RlbXMvdmlkZW8tY2FuLXBsYXknKTtcblxuLy8gdWlcblxucmVxdWlyZSgnLi4vdWkvcHJpbWl0aXZlcy92aWRlby1jb250cm9scycpOyIsIlxucmVxdWlyZSgnLi9hc3NldHMvc3R5bGVzL3dlYmZvbnRzLmljb25zLmxlc3MnKTtcbnJlcXVpcmUoJy4vYXNzZXRzL3N0eWxlcy9pY29ucy5sZXNzJyk7XG5cbnJlcXVpcmUoJy4vYXNzZXRzL3dlYmZvbnRzL2x1Y2lkd2ViLmVvdCcpO1xucmVxdWlyZSgnLi9hc3NldHMvd2ViZm9udHMvbHVjaWR3ZWIudHRmJyk7XG5yZXF1aXJlKCcuL2Fzc2V0cy93ZWJmb250cy9sdWNpZHdlYi53b2ZmJyk7XG5yZXF1aXJlKCcuL2Fzc2V0cy93ZWJmb250cy9sdWNpZHdlYi53b2ZmMicpO1xucmVxdWlyZSgnLi9hc3NldHMvd2ViZm9udHMvbHVjaWR3ZWIuc3ZnJyk7XG5cbnJlcXVpcmUoJy4vYXNzZXRzL3dlYmZvbnRzL2x1Y2lkd2ViX3Rlc3QuZW90Jyk7XG5yZXF1aXJlKCcuL2Fzc2V0cy93ZWJmb250cy9sdWNpZHdlYl90ZXN0LnR0ZicpO1xucmVxdWlyZSgnLi9hc3NldHMvd2ViZm9udHMvbHVjaWR3ZWJfdGVzdC53b2ZmJyk7XG5yZXF1aXJlKCcuL2Fzc2V0cy93ZWJmb250cy9sdWNpZHdlYl90ZXN0LndvZmYyJyk7XG5yZXF1aXJlKCcuL2Fzc2V0cy93ZWJmb250cy9sdWNpZHdlYl90ZXN0LnN2ZycpOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoIChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvMTBfRGFtZnp1Z19nci5wbmc/NjUzNTMyOGNkZGMyOTU1Yjg4ODVjNTFkYWQ2OWZiY2FcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzLzExX0VtYmFsc2VfQm9vdF9nci5wbmc/NTY3MTVhYzNkNGEwOWZiNTI1YzhhMWE0ZDZlOWRlMzFcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzLzEyX0ZvcnRfSGF2X2FiZW5kc19nci5wbmc/M2Q2OWY5MmQzNTBhMWE5ZDNjMjExMTQ4YTlmNGUxNjlcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzLzEzX0hvdGVsX0Vuc19nci5wbmc/M2YyNWJhMGE5ZWI5YTA3ZjRmMjUyN2ZkODRmYTUxYzBcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzLzE0XzFfTWFpX0hhdl9nci5wbmc/N2IxNTJkZWU3MDI0YWE5NzcyNzYyNTU0NTFiOTFlNjJcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzLzE1X0RlbmttYWxfU0NsYXJhX0NoZV9uYWhfZ3IucG5nP2RlNTViODNkNDJkYWE1OWM3ZWNmYzJhNGIzZWM3Y2FiXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy8xNl9MdXh1c19WZXJmYWxsX0hhdl9ncl8ucG5nPzI4YTZiNGJmOGU5ZjNhYmI1MGIxNTM4ZGY1NGNkYTgxXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy8xN19LYXBpdG9sX0hhdl9nci5wbmc/Mjg0YjVlYmI0NDllMmExNzNjM2E3MjA1YjBjZWE1MzNcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzLzFfU3RhcnRfU3RyYW5kX2dyLnBuZz9iMmY1MTk5NDMwNTlkZDcyMTI2ODJlYThjZjliZmZjMFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvMl9PbGR0aW1lcl9pbm5lbl9nci5wbmc/MzRhMTQ5YWYwMzNlNzE2YjE3NGYwYmEyNzhjOWQwOTVcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzLzNfY2FzYV9jZXJ2ZXphX2dyLnBuZz84YmY0M2RiOTdmOTRlNmZlY2ZkOTllODkzMjI2Mzk0NFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvNF9UUl9QbGFjYV9NYWpvcl9nci5wbmc/YjIxM2NlYjIyYWYzYjI0ODdhZmMzODNhOTRlZWEyMjlcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzLzVfVGFuemt1cnNfU3RyYW5kX2dyLnBuZz8xZDExMWI2OTc4NjBjOTEzZGM5NDEzODY5YTJmZGE5ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvNl9QZXNvX3ZlcmthdWZlbl9nci5wbmc/OGI4YzMyM2MxOWViOGI4YWQwMzFkYzJkMWQ4YTY1YWNcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzLzdfUGVsaWthbl9TdHJhbmRfZ3IucG5nPzJlYzc2NjBkNTllYTM1N2ZjNDM1ZWQwYzk1Y2U0NjJmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy84X0Zlc3R1bmdfTW9ycm9fZ3IucG5nPzY0ZDQ0ZDM1NGJmYTU5NTM5ZDUxMWQ0NTNkNTZmMDJiXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy85X0FuZ2xlcl9DYXJsb3NfSEFWX2dyLnBuZz8wZWZlZThmNzE2MTljODE2ZjVhMzgyZTU4NDViZTQzNlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9zdHlsZXMvZXhwZXJpZW5jZS5sZXNzXCI7IiwiXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2N1c3RvbS10aGluZycsIHtcblxuICBzY2hlbWE6IHtcbiAgICBzdWJqZWN0OiB7IHR5cGU6IFwic3RyaW5nXCIsIGRlZmF1bHQ6IFwid29ybGRcIiB9XG4gIH0sXG5cbiAgaW5pdDogZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN5c3RlbS5kYXRhLmdyZWV0aW5nICsgdGhpcy5kYXRhLnN1YmplY3QgKyBcIiFcIik7XG4gIH1cblxufSk7XG4iLCJBRlJBTUUucmVnaXN0ZXJQcmltaXRpdmUoJ2N1c3RvbS10aGluZycsIHtcblxuICBkZWZhdWx0Q29tcG9uZW50czoge1xuICAgIFwiY3VzdG9tLXRoaW5nXCI6IHt9XG4gIH0sXG5cbiAgbWFwcGluZ3M6IHtcbiAgICBzdWJqZWN0OiBcImN1c3RvbS10aGluZy5zdWJqZWN0XCJcbiAgfVxuXG59KTsiLCJBRlJBTUUucmVnaXN0ZXJTeXN0ZW0oJ2N1c3RvbS10aGluZycsIHtcblxuICBzY2hlbWE6IHtcbiAgICBncmVldGluZzogeyB0eXBlOiBcInN0cmluZ1wiLCBkZWZhdWx0OiBcIkhlbGxvLCBcIiB9XG4gIH1cblxufSk7IiwiXG4vL1xuLy8gTFVDSURXRUIgQUZSQU1FIEVYVEVOU0lPTlMgQVJFIFJFUVVJUkVEIEhFUkVcbi8vICh0aGlzIGFsbG93cyB1cyB0byBvbmx5IHBhY2sgdGhlIG5lZWRlZCByZXNvdXJjZXMgaW4gb3VyIGpzIGZpbGUpXG4vL1xuXG4vLyBzdHlsZXNcblxucmVxdWlyZSgnLi9hc3NldHMvc3R5bGVzL2V4cGVyaWVuY2UubGVzcycpO1xuXG4vLyBmb250c1xuXG5yZXF1aXJlKCcuLi9ub2RlX21vZHVsZXMvbHVjaWR3ZWItYWZyYW1lLWV4dGVuc2lvbnMvd2ViZm9udHMvJyk7XG5cbi8vIG1vZHVsZXNcblxucmVxdWlyZSgnLi4vbm9kZV9tb2R1bGVzL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3ZpZGVvLycpO1xucmVxdWlyZSgnLi4vbm9kZV9tb2R1bGVzL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3VpLycpO1xucmVxdWlyZSgnLi4vbm9kZV9tb2R1bGVzL2x1Y2lkd2ViLWFmcmFtZS1leHRlbnNpb25zL3V0aWxpdGllcy8nKTtcblxucmVxdWlyZSgnYWZyYW1lLXRlbXBsYXRlLWNvbXBvbmVudCcpO1xucmVxdWlyZSgnYWZyYW1lLWV2ZW50LXNldC1jb21wb25lbnQnKTtcblxuLy9cbi8vIENVU1RPTSBDT0RFIEdFVFMgUkVRVUlSRUQgSEVSRVxuLy9cblxuLy8gcmVxdWlyZSBBU1NFVFNcblxuXG5yZXF1aXJlKCcuL2Fzc2V0cy9pbWFnZXMvMV9TdGFydF9TdHJhbmRfZ3IucG5nJyk7XG5yZXF1aXJlKCcuL2Fzc2V0cy9pbWFnZXMvMl9PbGR0aW1lcl9pbm5lbl9nci5wbmcnKTtcbnJlcXVpcmUoJy4vYXNzZXRzL2ltYWdlcy8zX2Nhc2FfY2VydmV6YV9nci5wbmcnKTtcbnJlcXVpcmUoJy4vYXNzZXRzL2ltYWdlcy80X1RSX1BsYWNhX01ham9yX2dyLnBuZycpO1xucmVxdWlyZSgnLi9hc3NldHMvaW1hZ2VzLzVfVGFuemt1cnNfU3RyYW5kX2dyLnBuZycpO1xucmVxdWlyZSgnLi9hc3NldHMvaW1hZ2VzLzZfUGVzb192ZXJrYXVmZW5fZ3IucG5nJyk7XG5yZXF1aXJlKCcuL2Fzc2V0cy9pbWFnZXMvN19QZWxpa2FuX1N0cmFuZF9nci5wbmcnKTtcbnJlcXVpcmUoJy4vYXNzZXRzL2ltYWdlcy84X0Zlc3R1bmdfTW9ycm9fZ3IucG5nJyk7XG5yZXF1aXJlKCcuL2Fzc2V0cy9pbWFnZXMvOV9BbmdsZXJfQ2FybG9zX0hBVl9nci5wbmcnKTtcbnJlcXVpcmUoJy4vYXNzZXRzL2ltYWdlcy8xMF9EYW1menVnX2dyLnBuZycpO1xucmVxdWlyZSgnLi9hc3NldHMvaW1hZ2VzLzExX0VtYmFsc2VfQm9vdF9nci5wbmcnKTtcbnJlcXVpcmUoJy4vYXNzZXRzL2ltYWdlcy8xMl9Gb3J0X0hhdl9hYmVuZHNfZ3IucG5nJyk7XG5yZXF1aXJlKCcuL2Fzc2V0cy9pbWFnZXMvMTNfSG90ZWxfRW5zX2dyLnBuZycpO1xucmVxdWlyZSgnLi9hc3NldHMvaW1hZ2VzLzE0XzFfTWFpX0hhdl9nci5wbmcnKTtcbnJlcXVpcmUoJy4vYXNzZXRzL2ltYWdlcy8xNV9EZW5rbWFsX1NDbGFyYV9DaGVfbmFoX2dyLnBuZycpO1xucmVxdWlyZSgnLi9hc3NldHMvaW1hZ2VzLzE2X0x1eHVzX1ZlcmZhbGxfSGF2X2dyXy5wbmcnKTtcbnJlcXVpcmUoJy4vYXNzZXRzL2ltYWdlcy8xN19LYXBpdG9sX0hhdl9nci5wbmcnKTtcblxuXG4vLyByZXF1aXJlIGN1c3RvbSBjb21wb25lbnRzXG5cbnJlcXVpcmUoJy4vZXh0ZW5zaW9ucy9jb21wb25lbnRzL2N1c3RvbS10aGluZycpO1xuXG4vLyByZXF1aXJlIGN1c3RvbSBwcmltaXRpdmVzXG5cbnJlcXVpcmUoJy4vZXh0ZW5zaW9ucy9wcmltaXRpdmVzL2N1c3RvbS1wcmltaXRpdmUnKTtcblxuLy8gcmVxdWlyZSBjdXN0b20gc3lzdGVtc1xuXG5yZXF1aXJlKCcuL2V4dGVuc2lvbnMvc3lzdGVtcy9jdXN0b20tc3lzdGVtJyk7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKCl7XG4vLyAgIGNvbnNvbGUubG9nKFwibW91c2UgaXMgbW92aW5nXCIpO1xuLy8gfSlcbiJdLCJzb3VyY2VSb290IjoiIn0=