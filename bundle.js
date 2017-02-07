/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    app: __webpack_require__(5),
    html: __webpack_require__(6),
    h: __webpack_require__(1)
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (tag, data, tree) {
    if (tag === "svg") {
        svg(tag, data, tree)
    }

    return {
        tag: tag,
        data: data || {},
        tree: [].concat.apply([], tree)
    }
}

function svg(tag, data, tree) {
    data.ns = "http://www.w3.org/2000/svg"

    for (var i = 0; i < tree.length; i++) {
        var node = tree[i]
        if (node.data) {
            svg(node.tag, node.data, node.tree)
        }
    }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _jsonOrString = function _jsonOrString(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
};

var Lspi = function () {
  function Lspi() {
    _classCallCheck(this, Lspi);

    // MDN polyfill for Object.assign
    if (typeof Object.assign != 'function') {
      Object.assign = function (target, varArgs) {
        'use strict';

        if (target == null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }
        var to = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
          if (nextSource != null) {
            for (var nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      };
    }
  }

  _createClass(Lspi, [{
    key: 'get',
    value: function get(name) {
      return _jsonOrString(localStorage[name]);
    }
  }, {
    key: 'gets',
    value: function gets() {
      var _this = this;

      return Array.from(arguments).map(function (e) {
        return _this.get(e);
      });
    }
  }, {
    key: 'set',
    value: function set(name, data) {
      if (typeof data === 'string') localStorage[name] = data;
      localStorage[name] = JSON.stringify(data);
    }
  }, {
    key: 'sets',
    value: function sets() {
      var _this2 = this;

      Array.from(arguments).forEach(function (e) {
        return _this2.set(e[0], e[1]);
      });
    }
  }, {
    key: 'update',
    value: function update(name, obj) {
      this.set(name, Object.assign(this.get(name), obj));
    }
  }, {
    key: 'where',
    value: function where(name, k, v) {
      return this.get(name).filter(function (e) {
        return e[k] === v;
      });
    }
  }, {
    key: 'drop',
    value: function drop(name) {
      delete localStorage[name];
    }
  }, {
    key: 'drops',
    value: function drops() {
      var _this3 = this;

      Array.from(arguments).forEach(function (e) {
        return _this3.drop(e);
      });
    }
  }, {
    key: 'dropAll',
    value: function dropAll() {
      Object.keys(localStorage).forEach(function (e) {
        return delete localStorage[e];
      });
    }
  }]);

  return Lspi;
}();

module.exports = new Lspi();


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hyperapp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__updates_idea_box__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_idea_box__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_App__ = __webpack_require__(11);





__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["app"])({ model: __WEBPACK_IMPORTED_MODULE_2__models_idea_box__["a" /* default */], update: __WEBPACK_IMPORTED_MODULE_1__updates_idea_box__["a" /* default */], view: __WEBPACK_IMPORTED_MODULE_3__views_App__["a" /* default */] });


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (options) {
    var msg = {}

    var model = options.model
    var reducers = options.update || {}
    var effects = options.effects || {}
    var subs = options.subs || {}

    var hooks = merge({
        onAction: Function.prototype,
        onUpdate: Function.prototype,
        onError: function (err) {
            throw err
        }
    }, options.hooks)

    var node
    var root = options.root || document.body.appendChild(document.createElement("div"))
    var view = options.view || function () {
        return root
    }
    var routes = typeof view === "function" ? undefined : view

    if (routes) {
        view = route(routes, getHashOrPath())

        msg.setLocation = function (data) {
            if (history && history.pushState) {
                render(model, view = route(routes, data), node)
                history.pushState({}, "", data)

            } else {
                window.location.hash = data
            }
        }

        window[history && history.pushState ? "onpopstate" : "onhashchange"] = function () {
            render(model, view = route(routes, getHashOrPath()), node)
        }

        window.onclick = function (e) {
            if (e.metaKey || e.shiftKey || e.ctrlKey || e.altKey) {
                return
            }

            var target = e.target

            while (target && target.localName !== "a") {
                target = target.parentNode
            }

            if (target && target.host === location.host
                && !target.hasAttribute("data-no-routing")) {

                var element = target.hash === "" ? element : document.querySelector(target.hash)
                if (element) {
                    element.scrollIntoView(true)

                } else {
                    msg.setLocation(target.pathname)
                    return false
                }
            }
        }

        function getHashOrPath() {
            return location.hash ? location.hash.substr(1) : location.pathname
        }
    }

    for (var name in merge(reducers, effects)) {
        (function (name) {
            msg[name] = function (data) {
                hooks.onAction(name, data)

                var effect = effects[name]
                if (effect) {
                    return effect(model, msg, data, hooks.onError)
                }

                var update = reducers[name], _model = model
                render(model = merge(model, update(model, data)), view, node)

                hooks.onUpdate(_model, model, data)
            }
        } (name))
    }

    document.addEventListener("DOMContentLoaded", function () {
        for (var sub in subs) {
            subs[sub](model, msg, hooks.onError)
        }
    })

    render(model, view)

    function render(model, view, lastNode) {
        patch(root, node = view(model, msg), lastNode, 0)
    }

    function route(routes, path) {
        for (var route in routes) {
            var re = regexify(route), params = {}, match

            path.replace(new RegExp(re.re, "g"), function () {
                for (var i = 1; i < arguments.length - 2; i++) {
                    params[re.keys.shift()] = arguments[i]
                }

                match = function (model, msg) {
                    return routes[route](model, msg, params)
                }
            })

            if (match) {
                return match
            }
        }

        return routes["/"]
    }

    function regexify(path) {
        var keys = [], re = "^" + path
            .replace(/\//g, "\\/")
            .replace(/:([A-Za-z0-9_]+)/g, function (_, key) {
                keys.push(key)
                return "([A-Za-z0-9_]+)"
            }) + "/?$"

        return { re: re, keys: keys }
    }

    function isPrimitive(type) {
        return type === "string" || type === "number" || type === "boolean"
    }

    function defer(fn, data) {
        setTimeout(function () {
            fn(data)
        }, 0)
    }

    function merge(a, b) {
        var obj = {}, key

        if (isPrimitive(typeof b) || Array.isArray(b)){
            return b
        }

        for (key in a) {
            obj[key] = a[key]
        }
        for (key in b) {
            obj[key] = b[key]
        }

        return obj
    }

    function shouldUpdate(a, b) {
        return a.tag !== b.tag
            || typeof a !== typeof b
            || isPrimitive(typeof a) && a !== b
    }

    function createElementFrom(node) {
        var element
        if (isPrimitive(typeof node)) {
            element = document.createTextNode(node)

        } else {
            element = node.data && node.data.ns
                ? document.createElementNS(node.data.ns, node.tag)
                : document.createElement(node.tag)

            for (var name in node.data) {
                if (name === "oncreate") {
                    defer(node.data[name], element)
                } else {
                    setElementData(element, name, node.data[name])
                }
            }

            for (var i = 0; i < node.tree.length; i++) {
                element.appendChild(createElementFrom(node.tree[i]))
            }
        }

        return element
    }

    function removeElementData(element, name, value) {
        element.removeAttribute(name === "className" ? "class" : name)

        if (typeof value === "boolean" || value === "true" || value === "false") {
            element[name] = false
        }
    }

    function setElementData(element, name, value, oldValue) {
        if (name === "style") {
            for (var i in value) {
                element.style[i] = value[i]
            }

        } else if (name.substr(0, 2) === "on") {
            var event = name.substr(2)
            element.removeEventListener(event, oldValue)
            element.addEventListener(event, value)

        } else {
            if (value === "false" || value === false) {
                element.removeAttribute(name)
                element[name] = false
            } else {
                element.setAttribute(name, value)
                element[name] = value
            }
        }
    }

    function updateElementData(element, data, oldData) {
        for (var name in merge(oldData, data)) {
            var value = data[name], oldValue = oldData[name]

            if (value === undefined) {
                removeElementData(element, name, oldValue)

            } else if (value !== oldValue) {
                name === "onupdate"
                    ? defer(value, element)
                    : setElementData(element, name, value, oldValue)
            }
        }
    }

    function patch(parent, node, oldNode, index) {
        if (oldNode === undefined) {
            parent.appendChild(createElementFrom(node))

        } else if (node === undefined) {
            while (index > 0 && !parent.childNodes[index]) {
                index--
            }

            if (index >= 0) {
                var element = parent.childNodes[index]

                if (oldNode && oldNode.data) {
                    var hook = oldNode.data.onremove
                    if (hook) {
                        defer(hook, element)
                    }
                }

                parent.removeChild(element)
            }

        } else if (shouldUpdate(node, oldNode)) {
            parent.replaceChild(createElementFrom(node), parent.childNodes[index])

        } else if (node.tag) {
            var element = parent.childNodes[index]

            updateElementData(element, node.data, oldNode.data)

            var len = node.tree.length, oldLen = oldNode.tree.length

            for (var i = 0; i < len || i < oldLen; i++) {
                patch(element, node.tree[i], oldNode.tree[i], i)
            }
        }
    }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8)(__webpack_require__(1))


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = attributeToProperty

var transform = {
  'class': 'className',
  'for': 'htmlFor',
  'http-equiv': 'httpEquiv'
}

function attributeToProperty (h) {
  return function (tagName, attrs, children) {
    for (var attr in attrs) {
      if (attr in transform) {
        attrs[transform[attr]] = attrs[attr]
        delete attrs[attr]
      }
    }
    return h(tagName, attrs, children)
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var attrToProp = __webpack_require__(7)

var VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4
var ATTR_KEY = 5, ATTR_KEY_W = 6
var ATTR_VALUE_W = 7, ATTR_VALUE = 8
var ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10
var ATTR_EQ = 11, ATTR_BREAK = 12

module.exports = function (h, opts) {
  h = attrToProp(h)
  if (!opts) opts = {}
  var concat = opts.concat || function (a, b) {
    return String(a) + String(b)
  }

  return function (strings) {
    var state = TEXT, reg = ''
    var arglen = arguments.length
    var parts = []

    for (var i = 0; i < strings.length; i++) {
      if (i < arglen - 1) {
        var arg = arguments[i+1]
        var p = parse(strings[i])
        var xstate = state
        if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE
        if (xstate === ATTR) xstate = ATTR_KEY
        p.push([ VAR, xstate, arg ])
        parts.push.apply(parts, p)
      } else parts.push.apply(parts, parse(strings[i]))
    }

    var tree = [null,{},[]]
    var stack = [[tree,-1]]
    for (var i = 0; i < parts.length; i++) {
      var cur = stack[stack.length-1][0]
      var p = parts[i], s = p[0]
      if (s === OPEN && /^\//.test(p[1])) {
        var ix = stack[stack.length-1][1]
        if (stack.length > 1) {
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === OPEN) {
        var c = [p[1],{},[]]
        cur[2].push(c)
        stack.push([c,cur[2].length-1])
      } else if (s === ATTR_KEY || (s === VAR && p[1] === ATTR_KEY)) {
        var key = ''
        var copyKey
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_KEY) {
            key = concat(key, parts[i][1])
          } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
            if (typeof parts[i][2] === 'object' && !key) {
              for (copyKey in parts[i][2]) {
                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {
                  cur[1][copyKey] = parts[i][2][copyKey]
                }
              }
            } else {
              key = concat(key, parts[i][2])
            }
          } else break
        }
        if (parts[i][0] === ATTR_EQ) i++
        var j = i
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][1])
            else cur[1][key] = concat(cur[1][key], parts[i][1])
          } else if (parts[i][0] === VAR
          && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][2])
            else cur[1][key] = concat(cur[1][key], parts[i][2])
          } else {
            if (key.length && !cur[1][key] && i === j
            && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
              // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
              // empty string is falsy, not well behaved value in browser
              cur[1][key] = key.toLowerCase()
            }
            break
          }
        }
      } else if (s === ATTR_KEY) {
        cur[1][p[1]] = true
      } else if (s === VAR && p[1] === ATTR_KEY) {
        cur[1][p[2]] = true
      } else if (s === CLOSE) {
        if (selfClosing(cur[0]) && stack.length) {
          var ix = stack[stack.length-1][1]
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === VAR && p[1] === TEXT) {
        if (p[2] === undefined || p[2] === null) p[2] = ''
        else if (!p[2]) p[2] = concat('', p[2])
        if (Array.isArray(p[2][0])) {
          cur[2].push.apply(cur[2], p[2])
        } else {
          cur[2].push(p[2])
        }
      } else if (s === TEXT) {
        cur[2].push(p[1])
      } else if (s === ATTR_EQ || s === ATTR_BREAK) {
        // no-op
      } else {
        throw new Error('unhandled: ' + s)
      }
    }

    if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) {
      tree[2].shift()
    }

    if (tree[2].length > 2
    || (tree[2].length === 2 && /\S/.test(tree[2][1]))) {
      throw new Error(
        'multiple root elements must be wrapped in an enclosing tag'
      )
    }
    if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string'
    && Array.isArray(tree[2][0][2])) {
      tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2])
    }
    return tree[2][0]

    function parse (str) {
      var res = []
      if (state === ATTR_VALUE_W) state = ATTR
      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i)
        if (state === TEXT && c === '<') {
          if (reg.length) res.push([TEXT, reg])
          reg = ''
          state = OPEN
        } else if (c === '>' && !quot(state)) {
          if (state === OPEN) {
            res.push([OPEN,reg])
          } else if (state === ATTR_KEY) {
            res.push([ATTR_KEY,reg])
          } else if (state === ATTR_VALUE && reg.length) {
            res.push([ATTR_VALUE,reg])
          }
          res.push([CLOSE])
          reg = ''
          state = TEXT
        } else if (state === TEXT) {
          reg += c
        } else if (state === OPEN && /\s/.test(c)) {
          res.push([OPEN, reg])
          reg = ''
          state = ATTR
        } else if (state === OPEN) {
          reg += c
        } else if (state === ATTR && /[\w-]/.test(c)) {
          state = ATTR_KEY
          reg = c
        } else if (state === ATTR && /\s/.test(c)) {
          if (reg.length) res.push([ATTR_KEY,reg])
          res.push([ATTR_BREAK])
        } else if (state === ATTR_KEY && /\s/.test(c)) {
          res.push([ATTR_KEY,reg])
          reg = ''
          state = ATTR_KEY_W
        } else if (state === ATTR_KEY && c === '=') {
          res.push([ATTR_KEY,reg],[ATTR_EQ])
          reg = ''
          state = ATTR_VALUE_W
        } else if (state === ATTR_KEY) {
          reg += c
        } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
          res.push([ATTR_EQ])
          state = ATTR_VALUE_W
        } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
          res.push([ATTR_BREAK])
          if (/[\w-]/.test(c)) {
            reg += c
            state = ATTR_KEY
          } else state = ATTR
        } else if (state === ATTR_VALUE_W && c === '"') {
          state = ATTR_VALUE_DQ
        } else if (state === ATTR_VALUE_W && c === "'") {
          state = ATTR_VALUE_SQ
        } else if (state === ATTR_VALUE_DQ && c === '"') {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_SQ && c === "'") {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
          state = ATTR_VALUE
          i--
        } else if (state === ATTR_VALUE && /\s/.test(c)) {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ
        || state === ATTR_VALUE_DQ) {
          reg += c
        }
      }
      if (state === TEXT && reg.length) {
        res.push([TEXT,reg])
        reg = ''
      } else if (state === ATTR_VALUE && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_DQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_SQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_KEY) {
        res.push([ATTR_KEY,reg])
        reg = ''
      }
      return res
    }
  }

  function strfn (x) {
    if (typeof x === 'function') return x
    else if (typeof x === 'string') return x
    else if (x && typeof x === 'object') return x
    else return concat('', x)
  }
}

function quot (state) {
  return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ
}

var hasOwn = Object.prototype.hasOwnProperty
function has (obj, key) { return hasOwn.call(obj, key) }

var closeRE = RegExp('^(' + [
  'area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed',
  'frame', 'hr', 'img', 'input', 'isindex', 'keygen', 'link', 'meta', 'param',
  'source', 'track', 'wbr',
  // SVG TAGS
  'animate', 'animateTransform', 'circle', 'cursor', 'desc', 'ellipse',
  'feBlend', 'feColorMatrix', 'feComposite',
  'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap',
  'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR',
  'feGaussianBlur', 'feImage', 'feMergeNode', 'feMorphology',
  'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile',
  'feTurbulence', 'font-face-format', 'font-face-name', 'font-face-uri',
  'glyph', 'glyphRef', 'hkern', 'image', 'line', 'missing-glyph', 'mpath',
  'path', 'polygon', 'polyline', 'rect', 'set', 'stop', 'tref', 'use', 'view',
  'vkern'
].join('|') + ')(?:[\.#][a-zA-Z0-9\u007F-\uFFFF_:-]+)*$')
function selfClosing (tag) { return closeRE.test(tag) }


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lspi__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lspi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lspi__);


class Store {
  constructor() {
    const ideas = __WEBPACK_IMPORTED_MODULE_0_lspi___default.a.get('ideas');
    this.model = {
      ideas: [],
      title: '',
      body: '',
    };
    if (!ideas) {
      __WEBPACK_IMPORTED_MODULE_0_lspi___default.a.set('ideas', this.model.ideas);
    } else {
      Object.assign(this.model, { ideas });
    }
  }
}

const model = new Store().model;

/* harmony default export */ __webpack_exports__["a"] = model;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lspi__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lspi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lspi__);


const qualityKey = {
  add: {
    swill: 'plausible',
    plausible: 'genius',
    genius: 'genius',
  },
  sub: {
    swill: 'swill',
    plausible: 'swill',
    genius: 'plausible',
  },
};

const update = {
  updateField: (model, e) => ({ [e.target.id]: e.target.value.trim() }),
  submit: (model, e) => {
    e.preventDefault();
    const { title, body } = model;
    if (!title || !body) return model;
    const ideas = [{ title, body, quality: 'swill' }, ...model.ideas];
    __WEBPACK_IMPORTED_MODULE_0_lspi___default.a.set('ideas', ideas);
    return { ideas, title: '', body: '' };
  },
  lengthCheck: (model, e) => {
    const textLength = e.target.value.split('').length;
    if (textLength > 12) {
      const older = model[e.target.id].split('').slice(0, 12).join('');
      return { [e.target.id]: older };
    }
    return model;
  },
  changeQuality: (model, e) => {
    const direction = e.target.className;
    const id = +e.target.key;
    const ideas = model.ideas.map((element, index) => {
      const idea = Object.assign({}, element);
      if (index === id) {
        idea.quality = qualityKey[direction][idea.quality];
        return idea;
      }
      return idea;
    });
    __WEBPACK_IMPORTED_MODULE_0_lspi___default.a.set('ideas', ideas);
    return { ideas };
  },
  removeIdea: (model, e) => {
    const id = +e.target.key;
    const ideas = model.ideas.filter((idea, idx) => idx !== id);
    __WEBPACK_IMPORTED_MODULE_0_lspi___default.a.set('ideas', ideas);
    return { ideas };
  },
};

/* harmony default export */ __webpack_exports__["a"] = update;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hyperapp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IdeaBox__ = __webpack_require__(12);



const App = (model, msg) => (__WEBPACK_IMPORTED_MODULE_0_hyperapp__["html"]`
  ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__IdeaBox__["a" /* default */])(model, msg)}
`);

/* harmony default export */ __webpack_exports__["a"] = App;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hyperapp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ideas__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Inputs__ = __webpack_require__(14);




const IdeaBox = (model, msg) => (__WEBPACK_IMPORTED_MODULE_0_hyperapp__["html"]`
  <div>
    <div class="idea-box">
      <h1>IdeaBox 13</h1>
      ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Inputs__["a" /* default */])(model, msg)}
    </div>
    ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Ideas__["a" /* default */])(model, msg)}
  </div>
`);

/* harmony default export */ __webpack_exports__["a"] = IdeaBox;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hyperapp__);


const Ideas = (model, msg) => (__WEBPACK_IMPORTED_MODULE_0_hyperapp__["html"]`
  <section class="ideas">
    ${model.ideas.map((idea, index) => __WEBPACK_IMPORTED_MODULE_0_hyperapp__["html"]`
      <article class="idea-box">
        <h4 class="${idea.quality}">${idea.title}</h4>
        <p>${idea.body}</p>
        <div class="actions">
          <button
            key=${index}
            class="add"
            onclick=${(_, e) => msg.changeQuality(_, e)}
          >
            +
          </button>
          <button
            key=${index}
            class="sub"
            onclick=${(_, e) => msg.changeQuality(_, e)}
          >
            -
          </button>
          <button
            key=${index}
            class="delete"
            onclick=${(_, e) => msg.removeIdea(_, e)}
          >
            x
          </button>
        </div>
      </article>
    `)}
  </section>
`);

/* harmony default export */ __webpack_exports__["a"] = Ideas;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hyperapp__);


const Inputs = (model, msg) => (__WEBPACK_IMPORTED_MODULE_0_hyperapp__["html"]`
  <div class="inputs">
    <form class="form">
      <input
        id="title"
        placeholder="title"
        value=${model.title}
        onkeyup=${(_, e) => msg.updateField(_, e)}
        onkeydown=${(_, e) => msg.lengthCheck(_, e)}
      /><br />
      <input
        id="body"
        placeholder="body"
        value=${model.body}
        onkeyup=${(_, e) => msg.updateField(_, e)}
        onkeydown=${(_, e) => msg.lengthCheck(_, e)}
      /><br /><br />
      <button
        class="submit"
        onclick=${(_, e) => msg.submit(_, e)}
      >
        Submit
      </button>
    </form><br />
  </div>
`);

/* harmony default export */ __webpack_exports__["a"] = Inputs;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(3);


/***/ })
/******/ ]);