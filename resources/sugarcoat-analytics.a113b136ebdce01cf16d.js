{
    const $___mock_3bd5d1df87bff05a = {};
    (exports => {
        'use strict';
        let isSealed = false;
        class Storage {
            constructor() {
                if (isSealed) {
                    throw new TypeError('Illegal constructor');
                }
            }
            get length() {
                return Object.keys(this).length;
            }
            key(index) {
                const keys = Object.keys(this);
                if (index < 0 || index >= keys.length) {
                    return null;
                }
                return keys[index];
            }
            getItem(key) {
                return Object.prototype.hasOwnProperty.call(this, key) ? this[key] : null;
            }
            setItem(key, value) {
                this[key] = String(value);
            }
            removeItem(key) {
                delete this[key];
            }
            clear() {
                const keys = Object.keys(this);
                for (const key of keys) {
                    delete this[key];
                }
            }
        }
        exports.Storage = {
            configurable: true,
            enumerable: true,
            value: Storage,
            writable: true
        };
        const localStorage = new Storage();
        exports.localStorage = {
            configurable: true,
            enumerable: true,
            get() {
                return localStorage;
            }
        };
        const sessionStorage = new Storage();
        exports.sessionStorage = {
            configurable: true,
            enumerable: true,
            get() {
                return sessionStorage;
            }
        };
        isSealed = true;
    })($___mock_3bd5d1df87bff05a);
    const $___mock_cf3e2641a6a057de = {};
    (exports => {
        'use strict';
        const xhrUnsent = 0;
        const xhrOpened = 1;
        const xhrHeadersReceived = 2;
        const xhrLoading = 3;
        const xhrDone = 4;
        const xhrDeferredHandleSymbol = Symbol('deferredHandle');
        const xhrOnLoadStartSymbol = Symbol('onloadstart');
        const xhrOnProgressSymbol = Symbol('onprogress');
        const xhrOnAbortSymbol = Symbol('onabort');
        const xhrOnErrorSymbol = Symbol('onerror');
        const xhrOnLoadSymbol = Symbol('onload');
        const xhrOnTimeoutSymbol = Symbol('ontimeout');
        const xhrOnLoadEndSymbol = Symbol('onloadend');
        const xhrOnReadyStateChangeSymbol = Symbol('onreadystatechange');
        const xhrReadyStateSymbol = Symbol('readyState');
        const xhrTimeoutSymbol = Symbol('timeout');
        const xhrWithCredentialsSymbol = Symbol('withCredentials');
        const xhrUploadSymbol = Symbol('upload');
        const xhrResponseTypeSymbol = Symbol('responseType');
        const defineEvent = (obj, symbol) => {
            const type = symbol.description.substring(2);
            Object.defineProperty(obj, symbol, {
                configurable: false,
                enumerable: false,
                value: null,
                writable: true
            });
            obj.addEventListener(type, function (event) {
                const handler = this[symbol];
                if (handler) {
                    handler.call(this, event);
                }
            });
        };
        const changeReadyState = (xhr, readyState) => {
            xhr[xhrReadyStateSymbol] = readyState;
            xhr.dispatchEvent(new Event('readystatechange'));
        };
        let isSealed = true;
        class XMLHttpRequestEventTarget extends EventTarget {
            constructor() {
                super();
                if (!(this instanceof XMLHttpRequest) && !(this instanceof XMLHttpRequestUpload)) {
                    throw new TypeError('Illegal constructor');
                }
                defineEvent(this, xhrOnLoadStartSymbol);
                defineEvent(this, xhrOnProgressSymbol);
                defineEvent(this, xhrOnAbortSymbol);
                defineEvent(this, xhrOnErrorSymbol);
                defineEvent(this, xhrOnLoadSymbol);
                defineEvent(this, xhrOnTimeoutSymbol);
                defineEvent(this, xhrOnLoadEndSymbol);
            }
            get onloadstart() {
                return this[xhrOnLoadStartSymbol];
            }
            set onloadstart(value) {
                this[xhrOnLoadStartSymbol] = value;
            }
            get onprogress() {
                return this[xhrOnProgressSymbol];
            }
            set onprogress(value) {
                this[xhrOnProgressSymbol] = value;
            }
            get onabort() {
                return this[xhrOnAbortSymbol];
            }
            set onabort(value) {
                this[xhrOnAbortSymbol] = value;
            }
            get onerror() {
                return this[xhrOnErrorSymbol];
            }
            set onerror(value) {
                this[xhrOnErrorSymbol] = value;
            }
            get ontimeout() {
                return this[xhrOnTimeoutSymbol];
            }
            set ontimeout(value) {
                this[xhrOnTimeoutSymbol] = value;
            }
            get onloadend() {
                return this[xhrOnLoadEndSymbol];
            }
            set onloadend(value) {
                this[xhrOnLoadEndSymbol] = value;
            }
        }
        exports.XMLHttpRequestEventTarget = {
            configurable: true,
            enumerable: true,
            value: XMLHttpRequestEventTarget,
            writable: true
        };
        class XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
            constructor() {
                if (isSealed) {
                    throw new TypeError('Illegal constructor');
                }
                super();
            }
        }
        exports.XMLHttpRequestUpload = {
            configurable: true,
            enumerable: true,
            value: XMLHttpRequestUpload,
            writable: true
        };
        class XMLHttpRequest extends XMLHttpRequestEventTarget {
            constructor() {
                super();
                isSealed = false;
                const xhrUpload = new XMLHttpRequestUpload();
                isSealed = true;
                Object.defineProperty(this, xhrDeferredHandleSymbol, {
                    configurable: false,
                    enumerable: false,
                    value: null,
                    writable: true
                });
                defineEvent(this, xhrOnReadyStateChangeSymbol);
                Object.defineProperty(this, xhrReadyStateSymbol, {
                    configurable: false,
                    enumerable: false,
                    value: xhrUnsent,
                    writable: true
                });
                Object.defineProperty(this, xhrTimeoutSymbol, {
                    configurable: false,
                    enumerable: false,
                    value: 0,
                    writable: true
                });
                Object.defineProperty(this, xhrWithCredentialsSymbol, {
                    configurable: false,
                    enumerable: false,
                    value: false,
                    writable: true
                });
                Object.defineProperty(this, xhrUploadSymbol, {
                    configurable: false,
                    enumerable: false,
                    value: xhrUpload,
                    writable: false
                });
                Object.defineProperty(this, xhrResponseTypeSymbol, {
                    configurable: false,
                    enumerable: false,
                    value: '',
                    writable: true
                });
            }
            get onreadystatechange() {
                return this[xhrOnReadyStateChangeSymbol];
            }
            set onreadystatechange(value) {
                this[xhrOnReadyStateChangeSymbol] = value;
            }
            get readyState() {
                return this[xhrReadyStateSymbol];
            }
            open(method, url) {
                switch (this[xhrReadyStateSymbol]) {
                case xhrUnsent:
                case xhrDone: {
                        changeReadyState(this, xhrOpened);
                        break;
                    }
                }
            }
            setRequestHeader(name, value) {
            }
            setTrustToken(trustToken) {
            }
            get timeout() {
                return this[xhrTimeoutSymbol];
            }
            set timeout(value) {
                this[xhrTimeoutSymbol] = value;
            }
            get withCredentials() {
                return this[xhrWithCredentialsSymbol];
            }
            set withCredentials(value) {
                switch (this[xhrReadyStateSymbol]) {
                case xhrUnsent:
                case xhrOpened: {
                        break;
                    }
                default: {
                        throw new DOMException('Failed to set the \'withCredentials\' property on \'XMLHttpRequest\': The value may only be set if the object\'s state is UNSENT or OPENED.');
                    }
                }
                this[xhrWithCredentialsSymbol] = !!value;
            }
            get upload() {
                return this[xhrUploadSymbol];
            }
            send() {
                if (this[xhrReadyStateSymbol] === xhrOpened && this[xhrDeferredHandleSymbol] === null) {
                    this[xhrDeferredHandleSymbol] = setTimeout(() => {
                        this[xhrDeferredHandleSymbol] = null;
                        changeReadyState(this, xhrDone);
                        this.dispatchEvent(new ProgressEvent('error'));
                        this.dispatchEvent(new ProgressEvent('loadend'));
                    }, 0);
                } else {
                    throw new DOMException('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');
                }
            }
            abort() {
                if (this[xhrReadyStateSymbol] === xhrOpened && this[xhrDeferredHandleSymbol] !== null) {
                    clearTimeout(this[xhrDeferredHandleSymbol]);
                    this[xhrDeferredHandleSymbol] = null;
                    changeReadyState(this, xhrUnsent);
                    this.dispatchEvent(new ProgressEvent('abort'));
                    this.dispatchEvent(new ProgressEvent('loadend'));
                }
            }
            get responseURL() {
                return '';
            }
            get status() {
                return 0;
            }
            get statusText() {
                return '';
            }
            getResponseHeader(name) {
                return null;
            }
            overrideMimeType(mime) {
            }
            get responseType() {
                return this[xhrResponseTypeSymbol];
            }
            set responseType(value) {
                switch (this[xhrReadyStateSymbol]) {
                case xhrDone: {
                        throw new DOMException('Failed to set the \'responseType\' property on \'XMLHttpRequest\': The response type cannot be set if the object\'s state is LOADING or DONE.');
                    }
                }
                switch (value) {
                case '':
                case 'arraybuffer':
                case 'blob':
                case 'document':
                case 'json':
                case 'text': {
                        this[xhrResponseTypeSymbol] = value;
                        break;
                    }
                }
            }
            get response() {
                const responseType = this[xhrResponseTypeSymbol];
                return responseType === '' || responseType === 'text' ? '' : null;
            }
            get responseText() {
                const responseType = this[xhrResponseTypeSymbol];
                if (responseType === '' || responseType === 'text') {
                    return '';
                } else {
                    throw new DOMException('Failed to read the \'responseText\' property from \'XMLHttpRequest\': The value is only accessible if the object\'s \'responseType\' is \'\' or \'text\' (was \'arraybuffer\').');
                }
            }
            get responseXML() {
                return null;
            }
        }
        Object.defineProperty(XMLHttpRequest, 'UNSENT', {
            configurable: false,
            enumerable: true,
            value: xhrUnsent
        });
        Object.defineProperty(XMLHttpRequest, 'OPENED', {
            configurable: false,
            enumerable: true,
            value: xhrOpened
        });
        Object.defineProperty(XMLHttpRequest, 'HEADERS_RECEIVED', {
            configurable: false,
            enumerable: true,
            value: xhrHeadersReceived
        });
        Object.defineProperty(XMLHttpRequest, 'LOADING', {
            configurable: false,
            enumerable: true,
            value: xhrLoading
        });
        Object.defineProperty(XMLHttpRequest, 'DONE', {
            configurable: false,
            enumerable: true,
            value: xhrDone
        });
        exports.XMLHttpRequest = {
            configurable: true,
            enumerable: true,
            value: XMLHttpRequest,
            writable: true
        };
    })($___mock_cf3e2641a6a057de);
    (function () {
        !function (e) {
            var r = window.webpackJsonp;
            window.webpackJsonp = function (n, t, o) {
                for (var c, a, i, u = 0, p = []; u < n.length; u++)
                    a = n[u], _[a] && p.push(_[a][0]), _[a] = 0;
                for (c in t)
                    Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                for (r && r(n, t, o); p.length;)
                    p.shift()();
                if (o)
                    for (u = 0; u < o.length; u++)
                        i = __webpack_require__(__webpack_require__.s = o[u]);
                return i;
            };
            var n = {}, _ = { 5: 0 };
            function __webpack_require__(r) {
                const $___old_cd8f841e07496efd = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage'), $___old_1943d15723237520 = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage'), $___old_936cbd2f7325940d = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                try {
                    if ($___old_cd8f841e07496efd)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_3bd5d1df87bff05a.localStorage));
                    if ($___old_1943d15723237520)
                        ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_3bd5d1df87bff05a.sessionStorage));
                    if ($___old_936cbd2f7325940d)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_cf3e2641a6a057de.XMLHttpRequest));
                    return function () {
                        if (n[r])
                            return n[r].exports;
                        var _ = n[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(_.exports, _, _.exports, __webpack_require__), _.l = !0, _.exports;
                    }.apply(this, arguments);
                } finally {
                    if ($___old_cd8f841e07496efd)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_cd8f841e07496efd));
                    if ($___old_1943d15723237520)
                        ({}.constructor.defineProperty(window, 'sessionStorage', $___old_1943d15723237520));
                    if ($___old_936cbd2f7325940d)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_936cbd2f7325940d));
                }
            }
            __webpack_require__.e = function (e) {
                var r = _[e];
                if (0 === r)
                    return new Promise(function (e) {
                        e();
                    });
                if (r)
                    return r[2];
                var n = new Promise(function (n, t) {
                    r = _[e] = [
                        n,
                        t
                    ];
                });
                r[2] = n;
                var t = document.getElementsByTagName('head')[0], o = document.createElement('script');
                o.type = 'text/javascript', o.charset = 'utf-8', o.async = !0, o.timeout = 120000, __webpack_require__.nc && o.setAttribute('nonce', __webpack_require__.nc), o.src = __webpack_require__.p + '' + e + '.a113b136ebdce01cf16d.chunk.js';
                var c = setTimeout(onScriptComplete, 120000);
                function onScriptComplete() {
                    o.onerror = o.onload = null, clearTimeout(c);
                    var r = _[e];
                    0 !== r && (r && r[1](new Error('Loading chunk ' + e + ' failed.')), _[e] = void 0);
                }
                return o.onerror = o.onload = onScriptComplete, t.appendChild(o), n;
            }, __webpack_require__.m = e, __webpack_require__.c = n, __webpack_require__.i = function (e) {
                return e;
            }, __webpack_require__.d = function (e, r, n) {
                __webpack_require__.o(e, r) || Object.defineProperty(e, r, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                });
            }, __webpack_require__.n = function (e) {
                var r = e && e.__esModule ? function () {
                    return e.default;
                } : function () {
                    return e;
                };
                return __webpack_require__.d(r, 'a', r), r;
            }, __webpack_require__.o = function (e, r) {
                return Object.prototype.hasOwnProperty.call(e, r);
            }, __webpack_require__.p = '/', __webpack_require__.oe = function (e) {
                throw console.error(e), e;
            }, __webpack_require__(__webpack_require__.s = 208);
        }({
            191: function (e, r) {
                !function (e, r, n, _, t, o, c) {
                    e.GoogleAnalyticsObject = t, e.ga = e.ga || function () {
                        (e.ga.q = e.ga.q || []).push(arguments);
                    }, e.ga.l = 1 * new Date(), o = r.createElement(n), c = r.getElementsByTagName(n)[0], o.async = 1, o.src = 'https://www.google-analytics.com/analytics.js', c.parentNode.insertBefore(o, c);
                }(window, document, 'script', 0, 'ga'), ga('create', 'UA-9875785-25', 'auto'), ga('send', 'pageview');
            },
            208: function (e, r, n) {
                window.location.origin.indexOf('live.house.gov') > -1 && n(191);
            }
        });
    }())
}