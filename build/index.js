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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/controllers/connectionController.ts":
/*!*************************************************!*\
  !*** ./src/controllers/connectionController.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nexports.ConnectionController = void 0;\nvar jsonConnect_1 = __webpack_require__(/*! jsonConnect */ \"jsonConnect\");\nvar notification_1 = __webpack_require__(/*! ./notification */ \"./src/controllers/notification.ts\");\nvar ConnectionController = /** @class */ (function () {\n    function ConnectionController() {\n        /*let a = { A: 1 };\n\n        let b = { ...a, B: 2 };*/\n        var _this = this;\n        this.stdHost = 'pdc.apozept.de';\n        this.stdPort = 3002;\n        this.wssHost = 'wss://services.apozept.de/wss/pdc/jcConnect';\n        this.connection = undefined;\n        this.connected = false;\n        /*username = 'timo2@songfire.com';\n        password = 'timo2timo2';*/\n        this.username = 'christian@songfire.com';\n        this.password = 'testest';\n        this.keepLoggedIn = true;\n        this.loggedOutForInfo = false;\n        this.connectMode = 'jsonSocket';\n        this.connectionFailures = 0;\n        this.changeConnectionMode = false;\n        this.jsonClients = new jsonConnect_1.clients({ useTls: true }, function (json, connection) {\n            _this.logSendResponse(json.requestId, -10);\n        });\n        this.jsonClients.setOnDisconnect(function () {\n            _this.connected = false;\n            setTimeout(function () {\n                _this.connect();\n            }, 1000);\n        });\n        this.jsonClients.registrateCommand('notification', this.logIncomingRequest.bind(this, function (json, connectionData) {\n            console.log(json);\n            if (json.notification && json.notification.orderId) {\n                notification_1.sendPushNotification(json.notification.pharmacyId, json.notification.orderId);\n            }\n            _this.logSendResponse(json.requestId, 0);\n        }));\n    }\n    ConnectionController.prototype.logIncomingRequest = function (registratedFunction, json, connectionData) {\n        registratedFunction(json, connectionData);\n    };\n    ConnectionController.prototype.logSendResponse = function (requestId, errorCode, params) {\n        this.connection.sendResponse(requestId, errorCode, params);\n    };\n    ConnectionController.prototype.init = function (isDev, connectionFileName) {\n        this.connectionFileName = connectionFileName;\n        if (isDev) {\n            this.stdHost = 'pdc.dev.apozept.de';\n            this.stdPort = 3014;\n            this.wssHost = 'wss://services.dev.apozept.de/wss/pdc/jcConnect';\n        }\n        this.connect();\n    };\n    ConnectionController.prototype.sendCommand = function (command, params) {\n        return __awaiter(this, void 0, void 0, function () {\n            var _this = this;\n            return __generator(this, function (_a) {\n                return [2 /*return*/, new Promise(function (fulfilled) {\n                        if (_this.connection && _this.connected) {\n                            _this.connection.sendRequest(command, params, function (json, _) {\n                                fulfilled(json);\n                            });\n                        }\n                        else {\n                            fulfilled({ errorCode: -2 });\n                        }\n                    })];\n            });\n        });\n    };\n    ConnectionController.prototype.disconnect = function () {\n        if (this.connection) {\n            this.connection.disconnect();\n        }\n    };\n    ConnectionController.prototype.connect = function () {\n        var _this = this;\n        var connectCallback = function (connectSucceeded, connectionData) { return __awaiter(_this, void 0, void 0, function () {\n            var connectError, connectionTestResult;\n            var _this = this;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        connectError = function () {\n                            _this.connectionFailures++;\n                            if (_this.connectionFailures >= 2) {\n                            }\n                            setTimeout(function () {\n                                if (_this.connected) {\n                                    _this.disconnect();\n                                }\n                                else {\n                                    setTimeout(function () {\n                                        _this.connect();\n                                    }, 1000);\n                                }\n                            }, 1000);\n                        };\n                        this.changeConnectionMode = true;\n                        if (!connectSucceeded) return [3 /*break*/, 2];\n                        console.log('connected');\n                        this.connected = true;\n                        this.connection = connectionData;\n                        return [4 /*yield*/, connectionController.sendCommand('keepAlive', {})];\n                    case 1:\n                        connectionTestResult = _a.sent();\n                        if (connectionTestResult.errorCode != 0) {\n                            if (this.connected) {\n                                connectError();\n                            }\n                            return [2 /*return*/];\n                        }\n                        this.connectionFailures = 0;\n                        this.changeConnectionMode = false;\n                        if (this.loginToken || (this.username && this.password)) {\n                            this.login();\n                        }\n                        return [3 /*break*/, 3];\n                    case 2:\n                        this.connected = false;\n                        connectError();\n                        _a.label = 3;\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        if (this.changeConnectionMode) {\n            if (this.connectMode === 'webSocket') {\n                this.connectMode = 'jsonSocket';\n            }\n            else {\n                this.connectMode = 'webSocket';\n            }\n        }\n        if (this.connectMode === 'jsonSocket') {\n            this.jsonClients.connect(this.stdHost, this.stdPort, connectCallback);\n        }\n        else {\n            this.jsonClients.connectWs(this.wssHost, connectCallback);\n        }\n    };\n    ConnectionController.prototype.login = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var result, versionData;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        versionData = {};\n                        if (!!this.loginToken) return [3 /*break*/, 2];\n                        return [4 /*yield*/, this.sendCommand('login', __assign({ email: this.username, password: this.password }, versionData))];\n                    case 1:\n                        result = _a.sent();\n                        return [3 /*break*/, 4];\n                    case 2: return [4 /*yield*/, this.sendCommand('loginWithToken', __assign({ loginToken: this.loginToken }, versionData))];\n                    case 3:\n                        result = _a.sent();\n                        _a.label = 4;\n                    case 4:\n                        // console.log(result);\n                        if (result.errorCode === 0) {\n                            if (!this.loginToken) {\n                                this.loginToken = result.loginToken;\n                            }\n                        }\n                        else if (result.errorCode === 12) {\n                        }\n                        else if (result.errorCode === 10) {\n                        }\n                        else {\n                        }\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return ConnectionController;\n}());\nexports.ConnectionController = ConnectionController;\nvar connectionController = new ConnectionController();\nexports[\"default\"] = connectionController;\n\n\n//# sourceURL=webpack:///./src/controllers/connectionController.ts?");

/***/ }),

/***/ "./src/controllers/notification.ts":
/*!*****************************************!*\
  !*** ./src/controllers/notification.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __read = (this && this.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nvar __spread = (this && this.__spread) || function () {\n    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));\n    return ar;\n};\nvar __values = (this && this.__values) || function(o) {\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\n    if (m) return m.call(o);\n    if (o && typeof o.length === \"number\") return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\n};\nexports.__esModule = true;\nexports.sendPushNotification = exports.new_subscription = void 0;\nvar validationResult = __webpack_require__(/*! express-validator */ \"express-validator\").validationResult;\nvar webpush = __webpack_require__(/*! web-push */ \"web-push\");\nvar subscriptions = {};\nexports.new_subscription = function (req, res, next) {\n    // console.log(subscriptions);\n    var errors = validationResult(req);\n    if (!errors.isEmpty()) {\n        console.log('there is error');\n        console.log(errors);\n        res.status(500).json({ message: 'Subscription failed' });\n    }\n    else {\n        var token_1 = req.body;\n        var pharmacyId = parseInt(req.params.pharmacyId, 10);\n        var savedTokenArray = subscriptions[pharmacyId];\n        if (savedTokenArray) {\n            var isTokenAlreadyCached = savedTokenArray.find(function (item) { return item.endpoint === token_1.endpoint; });\n            if (!isTokenAlreadyCached) {\n                var updatedTokenList = __spread(savedTokenArray, [token_1]);\n                subscriptions[pharmacyId] = __spread(new Set(updatedTokenList));\n            }\n        }\n        else {\n            subscriptions[pharmacyId] = [token_1];\n        }\n        res.status(201).json({ message: 'Subscribed for push notification.' });\n    }\n    res.end();\n};\nexports.sendPushNotification = function (pharmacyId, orderId) { return __awaiter(void 0, void 0, void 0, function () {\n    var subscriptionId, pushSubscriptions, pushSubscriptions_1, pushSubscriptions_1_1, subscription, e_1_1;\n    var e_1, _a;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                subscriptionId = pharmacyId;\n                pushSubscriptions = subscriptions[subscriptionId];\n                _b.label = 1;\n            case 1:\n                _b.trys.push([1, 6, 7, 8]);\n                pushSubscriptions_1 = __values(pushSubscriptions), pushSubscriptions_1_1 = pushSubscriptions_1.next();\n                _b.label = 2;\n            case 2:\n                if (!!pushSubscriptions_1_1.done) return [3 /*break*/, 5];\n                subscription = pushSubscriptions_1_1.value;\n                return [4 /*yield*/, webpush\n                        .sendNotification(subscription, JSON.stringify({\n                        title: \"Neue Vorbestellung\",\n                        text: \"HEY! Take a look at this order!\",\n                        image: \"/images/icon.png\",\n                        tag: \"new-order\",\n                        url: \"http://localhost:3000/#/dashboard\",\n                        orderId: orderId\n                    }))[\"catch\"](function (err) {\n                        console.log(err);\n                    })];\n            case 3:\n                _b.sent();\n                _b.label = 4;\n            case 4:\n                pushSubscriptions_1_1 = pushSubscriptions_1.next();\n                return [3 /*break*/, 2];\n            case 5: return [3 /*break*/, 8];\n            case 6:\n                e_1_1 = _b.sent();\n                e_1 = { error: e_1_1 };\n                return [3 /*break*/, 8];\n            case 7:\n                try {\n                    if (pushSubscriptions_1_1 && !pushSubscriptions_1_1.done && (_a = pushSubscriptions_1[\"return\"])) _a.call(pushSubscriptions_1);\n                }\n                finally { if (e_1) throw e_1.error; }\n                return [7 /*endfinally*/];\n            case 8: return [2 /*return*/];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack:///./src/controllers/notification.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nvar cors = __webpack_require__(/*! cors */ \"cors\");\nvar webpush = __webpack_require__(/*! web-push */ \"web-push\");\nvar compression = __webpack_require__(/*! compression */ \"compression\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/routes/index.ts\");\n// initializing socket connection\nvar connectionController_1 = __webpack_require__(/*! ./controllers/connectionController */ \"./src/controllers/connectionController.ts\");\nconnectionController_1[\"default\"].init(true, 'connection.dat');\n// Create a new Express application.\nvar app = express();\nvar _a = process.env.PORT, PORT = _a === void 0 ? 5000 : _a;\ndotenv.config();\napp.use(cors());\napp.use(compression());\n// Application-level middleware for common functionality( logging, parsing, and session handling).\napp.use(bodyParser.urlencoded({ extended: true }));\napp.use(bodyParser.json());\nwebpush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY);\napp.use(function (req, res, next) {\n    res.header('Access-Control-Allow-Origin', '*');\n    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');\n    if (req.method === 'OPTIONS') {\n        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');\n        return res.status(200).json({});\n    }\n    next();\n});\n// Define Route\napp.use('/notifications', routes_1.notificationRouter);\napp.get('/', function (req, res) {\n    res.send('push notification service works!');\n});\nif (__webpack_require__.c[__webpack_require__.s] === module) {\n    app.listen(PORT, function () {\n        console.log('server started at http://localhost:' + PORT);\n    });\n}\nexports[\"default\"] = app;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\n}\nexports.__esModule = true;\n__exportStar(__webpack_require__(/*! ./notification */ \"./src/routes/notification.ts\"), exports);\n\n\n//# sourceURL=webpack:///./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/notification.ts":
/*!************************************!*\
  !*** ./src/routes/notification.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.notificationRouter = void 0;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\n// const { check } = require('express-validator');\nvar notification_1 = __webpack_require__(/*! ../controllers/notification */ \"./src/controllers/notification.ts\");\nvar express_validator_1 = __webpack_require__(/*! express-validator */ \"express-validator\");\nexports.notificationRouter = express_1.Router();\nexports.notificationRouter.post('/subscribe/:pharmacyId', [\n    express_validator_1.param('pharmacyId')\n        .trim()\n        .escape()\n        .isLength({ min: 1 }),\n], notification_1.new_subscription);\n\n\n//# sourceURL=webpack:///./src/routes/notification.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validator\");\n\n//# sourceURL=webpack:///external_%22express-validator%22?");

/***/ }),

/***/ "jsonConnect":
/*!******************************!*\
  !*** external "jsonConnect" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonConnect\");\n\n//# sourceURL=webpack:///external_%22jsonConnect%22?");

/***/ }),

/***/ "web-push":
/*!***************************!*\
  !*** external "web-push" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"web-push\");\n\n//# sourceURL=webpack:///external_%22web-push%22?");

/***/ })

/******/ });