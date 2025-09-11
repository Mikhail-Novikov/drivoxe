/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./modernizr.js":
/*!**********************!*\
  !*** ./modernizr.js ***!
  \**********************/
/***/ (function() {

((A, e) => {
  var i,
    n,
    o = [],
    a = {
      _version: "3.13.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function (A, e) {
        var n = this;
        setTimeout(function () {
          e(n[A]);
        }, 0);
      },
      addTest: function (A, e, n) {
        o.push({
          name: A,
          fn: e,
          options: n
        });
      },
      addAsyncTest: function (A) {
        o.push({
          name: null,
          fn: A
        });
      }
    },
    l = function () {},
    t = (l.prototype = a, l = new l(), []);
  function s(A, e) {
    return typeof A === e;
  }
  i = void 0 !== (n = {}.hasOwnProperty) && void 0 !== n.call ? function (A, e) {
    return n.call(A, e);
  } : function (A, e) {
    return e in A && void 0 === A.constructor.prototype[e];
  };
  var r,
    c,
    f,
    u,
    g,
    d,
    p,
    h = e.documentElement,
    m = "svg" === h.nodeName.toLowerCase();
  function w(A, e) {
    if ("object" == typeof A) for (var n in A) i(A, n) && w(n, A[n]);else {
      var o = (A = A.toLowerCase()).split("."),
        a = l[o[0]];
      if (void 0 !== (a = 2 === o.length ? a[o[1]] : a)) return l;
      e = "function" == typeof e ? e() : e, 1 === o.length ? l[o[0]] = e : (!l[o[0]] || l[o[0]] instanceof Boolean || (l[o[0]] = new Boolean(l[o[0]])), l[o[0]][o[1]] = e), a = [(e && !1 !== e ? "" : "no-") + o.join("-")], o = h.className, s = l._config.classPrefix || "", m && (o = o.baseVal), l._config.enableJSClass && (t = new RegExp("(^|\\s)" + s + "no-js(\\s|$)"), o = o.replace(t, "$1" + s + "js$2")), l._config.enableClasses && (0 < a.length && (o += " " + s + a.join(" " + s)), m ? h.className.baseVal = o : h.className = o), l._trigger(A, e);
    }
    var t, s;
    return l;
  }
  for (p in a._l = {}, a.on = function (A, e) {
    this._l[A] || (this._l[A] = []), this._l[A].push(e), l.hasOwnProperty(A) && setTimeout(function () {
      l._trigger(A, l[A]);
    }, 0);
  }, a._trigger = function (A, e) {
    var n;
    this._l[A] && (n = this._l[A], setTimeout(function () {
      for (var A = 0; A < n.length; A++) (0, n[A])(e);
    }, 0), delete this._l[A]);
  }, l._q.push(function () {
    a.addTest = w;
  }), l.addAsyncTest(function () {
    var n = [{
        uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
        name: "webp"
      }, {
        uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
        name: "webp.alpha"
      }, {
        uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
        name: "webp.animation"
      }, {
        uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
        name: "webp.lossless"
      }],
      A = n.shift();
    function o(n, A, o) {
      var a = new Image();
      function e(A) {
        var e = !(!A || "load" !== A.type) && 1 === a.width;
        w(n, "webp" === n && e ? new Boolean(e) : e), o && o(A);
      }
      a.onerror = e, a.onload = e, a.src = A;
    }
    o(A.name, A.uri, function (A) {
      if (A && "load" === A.type) for (var e = 0; e < n.length; e++) o(n[e].name, n[e].uri);
    });
  }), l.addAsyncTest(function () {
    var A = new Image();
    A.onload = A.onerror = function () {
      w("avif", 1 === A.width);
    }, A.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAEcbWV0YQAAAAAAAABIaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGNhdmlmIC0gaHR0cHM6Ly9naXRodWIuY29tL2xpbmstdS9jYXZpZgAAAAAeaWxvYwAAAAAEQAABAAEAAAAAAUQAAQAAABcAAAAqaWluZgEAAAAAAAABAAAAGmluZmUCAAAAAAEAAGF2MDFJbWFnZQAAAAAOcGl0bQAAAAAAAQAAAHJpcHJwAAAAUmlwY28AAAAQcGFzcAAAAAEAAAABAAAAFGlzcGUAAAAAAAAAAQAAAAEAAAAQcGl4aQAAAAADCAgIAAAAFmF2MUOBAAwACggYAAYICGgIIAAAABhpcG1hAAAAAAAAAAEAAQUBAoMDhAAAAB9tZGF0CggYAAYICGgIIBoFHiAAAEQiBACwDoA=";
  }), o) if (o.hasOwnProperty(p)) {
    if (r = [], (c = o[p]).name && (r.push(c.name.toLowerCase()), c.options) && c.options.aliases && c.options.aliases.length) for (f = 0; f < c.options.aliases.length; f++) r.push(c.options.aliases[f].toLowerCase());
    for (u = s(c.fn, "function") ? c.fn() : c.fn, g = 0; g < r.length; g++) 1 === (d = r[g].split(".")).length ? l[d[0]] = u : (l[d[0]] && (l[d[0]], l[d[0]] instanceof Boolean) || (l[d[0]] = new Boolean(l[d[0]])), l[d[0]][d[1]] = u), t.push((u ? "" : "no-") + d.join("-"));
  }
  delete a.addTest, delete a.addAsyncTest;
  for (var B = 0; B < l._q.length; B++) l._q[B]();
  A.Modernizr = l;
})(window, (window, document));

/***/ }),

/***/ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js":
/*!******************************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-contenteditable-mask-element.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HTMLContenteditableMaskElement; }
/* harmony export */ });
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");




class HTMLContenteditableMaskElement extends _html_mask_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** Returns HTMLElement selection start */
  get _unsafeSelectionStart() {
    const root = this.rootElement;
    const selection = root.getSelection && root.getSelection();
    const anchorOffset = selection && selection.anchorOffset;
    const focusOffset = selection && selection.focusOffset;
    if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
      return anchorOffset;
    }
    return focusOffset;
  }

  /** Returns HTMLElement selection end */
  get _unsafeSelectionEnd() {
    const root = this.rootElement;
    const selection = root.getSelection && root.getSelection();
    const anchorOffset = selection && selection.anchorOffset;
    const focusOffset = selection && selection.focusOffset;
    if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
      return anchorOffset;
    }
    return focusOffset;
  }

  /** Sets HTMLElement selection */
  _unsafeSelect(start, end) {
    if (!this.rootElement.createRange) return;
    const range = this.rootElement.createRange();
    range.setStart(this.input.firstChild || this.input, start);
    range.setEnd(this.input.lastChild || this.input, end);
    const root = this.rootElement;
    const selection = root.getSelection && root.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  /** HTMLElement value */
  get value() {
    return this.input.textContent || '';
  }
  set value(value) {
    this.input.textContent = value;
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-input-mask-element.js":
/*!********************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-input-mask-element.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HTMLInputMaskElement; }
/* harmony export */ });
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");




/** Bridge between InputElement and {@link Masked} */
class HTMLInputMaskElement extends _html_mask_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** InputElement to use mask on */

  constructor(input) {
    super(input);
    this.input = input;
  }

  /** Returns InputElement selection start */
  get _unsafeSelectionStart() {
    return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
  }

  /** Returns InputElement selection end */
  get _unsafeSelectionEnd() {
    return this.input.selectionEnd;
  }

  /** Sets InputElement selection */
  _unsafeSelect(start, end) {
    this.input.setSelectionRange(start, end);
  }
  get value() {
    return this.input.value;
  }
  set value(value) {
    this.input.value = value;
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].HTMLMaskElement = _html_mask_element_js__WEBPACK_IMPORTED_MODULE_0__["default"];




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-mask-element.js":
/*!**************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-mask-element.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HTMLMaskElement; }
/* harmony export */ });
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");



const KEY_Z = 90;
const KEY_Y = 89;

/** Bridge between HTMLElement and {@link Masked} */
class HTMLMaskElement extends _mask_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** HTMLElement to use mask on */

  constructor(input) {
    super();
    this.input = input;
    this._onKeydown = this._onKeydown.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onBeforeinput = this._onBeforeinput.bind(this);
    this._onCompositionEnd = this._onCompositionEnd.bind(this);
  }
  get rootElement() {
    var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
    return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) == null ? void 0 : _this$input$getRootNo2.call(_this$input)) != null ? _this$input$getRootNo : document;
  }

  /** Is element in focus */
  get isActive() {
    return this.input === this.rootElement.activeElement;
  }

  /** Binds HTMLElement events to mask internal events */
  bindEvents(handlers) {
    this.input.addEventListener('keydown', this._onKeydown);
    this.input.addEventListener('input', this._onInput);
    this.input.addEventListener('beforeinput', this._onBeforeinput);
    this.input.addEventListener('compositionend', this._onCompositionEnd);
    this.input.addEventListener('drop', handlers.drop);
    this.input.addEventListener('click', handlers.click);
    this.input.addEventListener('focus', handlers.focus);
    this.input.addEventListener('blur', handlers.commit);
    this._handlers = handlers;
  }
  _onKeydown(e) {
    if (this._handlers.redo && (e.keyCode === KEY_Z && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === KEY_Y && e.ctrlKey)) {
      e.preventDefault();
      return this._handlers.redo(e);
    }
    if (this._handlers.undo && e.keyCode === KEY_Z && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      return this._handlers.undo(e);
    }
    if (!e.isComposing) this._handlers.selectionChange(e);
  }
  _onBeforeinput(e) {
    if (e.inputType === 'historyUndo' && this._handlers.undo) {
      e.preventDefault();
      return this._handlers.undo(e);
    }
    if (e.inputType === 'historyRedo' && this._handlers.redo) {
      e.preventDefault();
      return this._handlers.redo(e);
    }
  }
  _onCompositionEnd(e) {
    this._handlers.input(e);
  }
  _onInput(e) {
    if (!e.isComposing) this._handlers.input(e);
  }

  /** Unbinds HTMLElement events to mask internal events */
  unbindEvents() {
    this.input.removeEventListener('keydown', this._onKeydown);
    this.input.removeEventListener('input', this._onInput);
    this.input.removeEventListener('beforeinput', this._onBeforeinput);
    this.input.removeEventListener('compositionend', this._onCompositionEnd);
    this.input.removeEventListener('drop', this._handlers.drop);
    this.input.removeEventListener('click', this._handlers.click);
    this.input.removeEventListener('focus', this._handlers.focus);
    this.input.removeEventListener('blur', this._handlers.commit);
    this._handlers = {};
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].HTMLMaskElement = HTMLMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/input-history.js":
/*!**********************************************************!*\
  !*** ./node_modules/imask/esm/controls/input-history.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InputHistory; }
/* harmony export */ });
class InputHistory {
  constructor() {
    this.states = [];
    this.currentIndex = 0;
  }
  get currentState() {
    return this.states[this.currentIndex];
  }
  get isEmpty() {
    return this.states.length === 0;
  }
  push(state) {
    // if current index points before the last element then remove the future
    if (this.currentIndex < this.states.length - 1) this.states.length = this.currentIndex + 1;
    this.states.push(state);
    if (this.states.length > InputHistory.MAX_LENGTH) this.states.shift();
    this.currentIndex = this.states.length - 1;
  }
  go(steps) {
    this.currentIndex = Math.min(Math.max(this.currentIndex + steps, 0), this.states.length - 1);
    return this.currentState;
  }
  undo() {
    return this.go(-1);
  }
  redo() {
    return this.go(+1);
  }
  clear() {
    this.states.length = 0;
    this.currentIndex = 0;
  }
}
InputHistory.MAX_LENGTH = 100;




/***/ }),

/***/ "./node_modules/imask/esm/controls/input.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/controls/input.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InputMask; }
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _html_input_mask_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html-input-mask-element.js */ "./node_modules/imask/esm/controls/html-input-mask-element.js");
/* harmony import */ var _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _input_history_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-history.js */ "./node_modules/imask/esm/controls/input-history.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");










/** Listens to element events and controls changes between element and {@link Masked} */
class InputMask {
  /**
    View element
  */

  /** Internal {@link Masked} model */

  constructor(el, opts) {
    this.el = el instanceof _mask_element_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_5__["default"](el) : new _html_input_mask_element_js__WEBPACK_IMPORTED_MODULE_4__["default"](el);
    this.masked = (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._rawInputValue = '';
    this.history = new _input_history_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onUndo = this._onUndo.bind(this);
    this._onRedo = this._onRedo.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
    this._bindEvents();

    // refresh
    this.updateValue();
    this._onChange();
  }
  maskEquals(mask) {
    var _this$masked;
    return mask == null || ((_this$masked = this.masked) == null ? void 0 : _this$masked.maskEquals(mask));
  }

  /** Masked */
  get mask() {
    return this.masked.mask;
  }
  set mask(mask) {
    if (this.maskEquals(mask)) return;
    if (!(mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_6__["default"].Masked) && this.masked.constructor === (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_2__.maskedClass)(mask)) {
      // TODO "any" no idea
      this.masked.updateOptions({
        mask
      });
      return;
    }
    const masked = mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_6__["default"].Masked ? mask : (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
      mask
    });
    masked.unmaskedValue = this.masked.unmaskedValue;
    this.masked = masked;
  }

  /** Raw value */
  get value() {
    return this._value;
  }
  set value(str) {
    if (this.value === str) return;
    this.masked.value = str;
    this.updateControl('auto');
  }

  /** Unmasked value */
  get unmaskedValue() {
    return this._unmaskedValue;
  }
  set unmaskedValue(str) {
    if (this.unmaskedValue === str) return;
    this.masked.unmaskedValue = str;
    this.updateControl('auto');
  }

  /** Raw input value */
  get rawInputValue() {
    return this._rawInputValue;
  }
  set rawInputValue(str) {
    if (this.rawInputValue === str) return;
    this.masked.rawInputValue = str;
    this.updateControl();
    this.alignCursor();
  }

  /** Typed unmasked value */
  get typedValue() {
    return this.masked.typedValue;
  }
  set typedValue(val) {
    if (this.masked.typedValueEquals(val)) return;
    this.masked.typedValue = val;
    this.updateControl('auto');
  }

  /** Display value */
  get displayValue() {
    return this.masked.displayValue;
  }

  /** Starts listening to element events */
  _bindEvents() {
    this.el.bindEvents({
      selectionChange: this._saveSelection,
      input: this._onInput,
      drop: this._onDrop,
      click: this._onClick,
      focus: this._onFocus,
      commit: this._onChange,
      undo: this._onUndo,
      redo: this._onRedo
    });
  }

  /** Stops listening to element events */
  _unbindEvents() {
    if (this.el) this.el.unbindEvents();
  }

  /** Fires custom event */
  _fireEvent(ev, e) {
    const listeners = this._listeners[ev];
    if (!listeners) return;
    listeners.forEach(l => l(e));
  }

  /** Current selection start */
  get selectionStart() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
  }

  /** Current cursor position */
  get cursorPos() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
  }
  set cursorPos(pos) {
    if (!this.el || !this.el.isActive) return;
    this.el.select(pos, pos);
    this._saveSelection();
  }

  /** Stores current selection */
  _saveSelection( /* ev */
  ) {
    if (this.displayValue !== this.el.value) {
      console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
    }
    this._selection = {
      start: this.selectionStart,
      end: this.cursorPos
    };
  }

  /** Syncronizes model value from view */
  updateValue() {
    this.masked.value = this.el.value;
    this._value = this.masked.value;
    this._unmaskedValue = this.masked.unmaskedValue;
    this._rawInputValue = this.masked.rawInputValue;
  }

  /** Syncronizes view from model value, fires change events */
  updateControl(cursorPos) {
    const newUnmaskedValue = this.masked.unmaskedValue;
    const newValue = this.masked.value;
    const newRawInputValue = this.masked.rawInputValue;
    const newDisplayValue = this.displayValue;
    const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue || this._rawInputValue !== newRawInputValue;
    this._unmaskedValue = newUnmaskedValue;
    this._value = newValue;
    this._rawInputValue = newRawInputValue;
    if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
    if (cursorPos === 'auto') this.alignCursor();else if (cursorPos != null) this.cursorPos = cursorPos;
    if (isChanged) this._fireChangeEvents();
    if (!this._historyChanging && (isChanged || this.history.isEmpty)) this.history.push({
      unmaskedValue: newUnmaskedValue,
      selection: {
        start: this.selectionStart,
        end: this.cursorPos
      }
    });
  }

  /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */
  updateOptions(opts) {
    const {
      mask,
      ...restOpts
    } = opts; // TODO types, yes, mask is optional

    const updateMask = !this.maskEquals(mask);
    const updateOpts = this.masked.optionsIsChanged(restOpts);
    if (updateMask) this.mask = mask;
    if (updateOpts) this.masked.updateOptions(restOpts); // TODO

    if (updateMask || updateOpts) this.updateControl();
  }

  /** Updates cursor */
  updateCursor(cursorPos) {
    if (cursorPos == null) return;
    this.cursorPos = cursorPos;

    // also queue change cursor for mobile browsers
    this._delayUpdateCursor(cursorPos);
  }

  /** Delays cursor update to support mobile browsers */
  _delayUpdateCursor(cursorPos) {
    this._abortUpdateCursor();
    this._changingCursorPos = cursorPos;
    this._cursorChanging = setTimeout(() => {
      if (!this.el) return; // if was destroyed
      this.cursorPos = this._changingCursorPos;
      this._abortUpdateCursor();
    }, 10);
  }

  /** Fires custom events */
  _fireChangeEvents() {
    this._fireEvent('accept', this._inputEvent);
    if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
  }

  /** Aborts delayed cursor update */
  _abortUpdateCursor() {
    if (this._cursorChanging) {
      clearTimeout(this._cursorChanging);
      delete this._cursorChanging;
    }
  }

  /** Aligns cursor to nearest available position */
  alignCursor() {
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.LEFT));
  }

  /** Aligns cursor only if selection is empty */
  alignCursorFriendly() {
    if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
    this.alignCursor();
  }

  /** Adds listener on custom event */
  on(ev, handler) {
    if (!this._listeners[ev]) this._listeners[ev] = [];
    this._listeners[ev].push(handler);
    return this;
  }

  /** Removes custom event listener */
  off(ev, handler) {
    if (!this._listeners[ev]) return this;
    if (!handler) {
      delete this._listeners[ev];
      return this;
    }
    const hIndex = this._listeners[ev].indexOf(handler);
    if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
    return this;
  }

  /** Handles view input event */
  _onInput(e) {
    this._inputEvent = e;
    this._abortUpdateCursor();
    const details = new _core_action_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    });
    const oldRawValue = this.masked.rawInputValue;
    const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
      input: true,
      raw: true
    }).offset;

    // force align in remove direction only if no input chars were removed
    // otherwise we still need to align with NONE (to get out from fixed symbols for instance)
    const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE;
    let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
    if (removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE);
    this.updateControl(cursorPos);
    delete this._inputEvent;
  }

  /** Handles view change event and commits model value */
  _onChange() {
    if (this.displayValue !== this.el.value) this.updateValue();
    this.masked.doCommit();
    this.updateControl();
    this._saveSelection();
  }

  /** Handles view drop event, prevents by default */
  _onDrop(ev) {
    ev.preventDefault();
    ev.stopPropagation();
  }

  /** Restore last selection on focus */
  _onFocus(ev) {
    this.alignCursorFriendly();
  }

  /** Restore last selection on focus */
  _onClick(ev) {
    this.alignCursorFriendly();
  }
  _onUndo() {
    this._applyHistoryState(this.history.undo());
  }
  _onRedo() {
    this._applyHistoryState(this.history.redo());
  }
  _applyHistoryState(state) {
    if (!state) return;
    this._historyChanging = true;
    this.unmaskedValue = state.unmaskedValue;
    this.el.select(state.selection.start, state.selection.end);
    this._saveSelection();
    this._historyChanging = false;
  }

  /** Unbind view events and removes element reference */
  destroy() {
    this._unbindEvents();
    this._listeners.length = 0;
    delete this.el;
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_6__["default"].InputMask = InputMask;




/***/ }),

/***/ "./node_modules/imask/esm/controls/mask-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/imask/esm/controls/mask-element.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MaskElement; }
/* harmony export */ });
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");


/**  Generic element API to use with mask */
class MaskElement {
  /** */

  /** */

  /** */

  /** Safely returns selection start */
  get selectionStart() {
    let start;
    try {
      start = this._unsafeSelectionStart;
    } catch {}
    return start != null ? start : this.value.length;
  }

  /** Safely returns selection end */
  get selectionEnd() {
    let end;
    try {
      end = this._unsafeSelectionEnd;
    } catch {}
    return end != null ? end : this.value.length;
  }

  /** Safely sets element selection */
  select(start, end) {
    if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
    try {
      this._unsafeSelect(start, end);
    } catch {}
  }

  /** */
  get isActive() {
    return false;
  }
  /** */

  /** */

  /** */
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_0__["default"].MaskElement = MaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/core/action-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/action-details.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ActionDetails; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/imask/esm/core/utils.js");


/** Provides details of changing input */
class ActionDetails {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */

  constructor(opts) {
    Object.assign(this, opts);

    // double check if left part was changed (autofilling, other non-standard input triggers)
    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
    if (this.insertedCount) {
      // double check right part
      while (this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end)) {
        if (this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end) ++this.oldSelection.end;else ++this.cursorPos;
      }
    }
  }

  /** Start changing position */
  get startChangePos() {
    return Math.min(this.cursorPos, this.oldSelection.start);
  }

  /** Inserted symbols count */
  get insertedCount() {
    return this.cursorPos - this.startChangePos;
  }

  /** Inserted symbols */
  get inserted() {
    return this.value.substr(this.startChangePos, this.insertedCount);
  }

  /** Removed symbols count */
  get removedCount() {
    // Math.max for opposite operation
    return Math.max(this.oldSelection.end - this.startChangePos ||
    // for Delete
    this.oldValue.length - this.value.length, 0);
  }

  /** Removed symbols */
  get removed() {
    return this.oldValue.substr(this.startChangePos, this.removedCount);
  }

  /** Unchanged head symbols */
  get head() {
    return this.value.substring(0, this.startChangePos);
  }

  /** Unchanged tail symbols */
  get tail() {
    return this.value.substring(this.startChangePos + this.insertedCount);
  }

  /** Remove direction */
  get removeDirection() {
    if (!this.removedCount || this.insertedCount) return _utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE;

    // align right if delete at right
    return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) &&
    // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? _utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.RIGHT : _utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.LEFT;
  }
}




/***/ }),

/***/ "./node_modules/imask/esm/core/change-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/change-details.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ChangeDetails; }
/* harmony export */ });
/* harmony import */ var _holder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./holder.js */ "./node_modules/imask/esm/core/holder.js");


/** Provides details of changing model value */
class ChangeDetails {
  /** Inserted symbols */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */

  /** Can skip chars */

  static normalize(prep) {
    return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
  }
  constructor(details) {
    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      tailShift: 0,
      skip: false
    }, details);
  }

  /** Aggregate changes */
  aggregate(details) {
    this.inserted += details.inserted;
    this.rawInserted += details.rawInserted;
    this.tailShift += details.tailShift;
    this.skip = this.skip || details.skip;
    return this;
  }

  /** Total offset considering all changes */
  get offset() {
    return this.tailShift + this.inserted.length;
  }
  get consumed() {
    return Boolean(this.rawInserted) || this.skip;
  }
  equals(details) {
    return this.inserted === details.inserted && this.tailShift === details.tailShift && this.rawInserted === details.rawInserted && this.skip === details.skip;
  }
}
_holder_js__WEBPACK_IMPORTED_MODULE_0__["default"].ChangeDetails = ChangeDetails;




/***/ }),

/***/ "./node_modules/imask/esm/core/continuous-tail-details.js":
/*!****************************************************************!*\
  !*** ./node_modules/imask/esm/core/continuous-tail-details.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ContinuousTailDetails; }
/* harmony export */ });
/** Provides details of continuous extracted tail */
class ContinuousTailDetails {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */

  constructor(value, from, stop) {
    if (value === void 0) {
      value = '';
    }
    if (from === void 0) {
      from = 0;
    }
    this.value = value;
    this.from = from;
    this.stop = stop;
  }
  toString() {
    return this.value;
  }
  extend(tail) {
    this.value += String(tail);
  }
  appendTo(masked) {
    return masked.append(this.toString(), {
      tail: true
    }).aggregate(masked._appendPlaceholder());
  }
  get state() {
    return {
      value: this.value,
      from: this.from,
      stop: this.stop
    };
  }
  set state(state) {
    Object.assign(this, state);
  }
  unshift(beforePos) {
    if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
    const shiftChar = this.value[0];
    this.value = this.value.slice(1);
    return shiftChar;
  }
  shift() {
    if (!this.value.length) return '';
    const shiftChar = this.value[this.value.length - 1];
    this.value = this.value.slice(0, -1);
    return shiftChar;
  }
}




/***/ }),

/***/ "./node_modules/imask/esm/core/holder.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/core/holder.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IMask; }
/* harmony export */ });
/** Applies mask on element */
function IMask(el, opts) {
  // currently available only for input-like elements
  return new IMask.InputMask(el, opts);
}




/***/ }),

/***/ "./node_modules/imask/esm/core/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/imask/esm/core/utils.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DIRECTION: function() { return /* binding */ DIRECTION; },
/* harmony export */   escapeRegExp: function() { return /* binding */ escapeRegExp; },
/* harmony export */   forceDirection: function() { return /* binding */ forceDirection; },
/* harmony export */   isObject: function() { return /* binding */ isObject; },
/* harmony export */   isString: function() { return /* binding */ isString; },
/* harmony export */   objectIncludes: function() { return /* binding */ objectIncludes; },
/* harmony export */   pick: function() { return /* binding */ pick; }
/* harmony export */ });
/** Checks if value is string */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}

/** Checks if value is object */
function isObject(obj) {
  var _obj$constructor;
  return typeof obj === 'object' && obj != null && (obj == null || (_obj$constructor = obj.constructor) == null ? void 0 : _obj$constructor.name) === 'Object';
}
function pick(obj, keys) {
  if (Array.isArray(keys)) return pick(obj, (_, k) => keys.includes(k));
  return Object.entries(obj).reduce((acc, _ref) => {
    let [k, v] = _ref;
    if (keys(v, k)) acc[k] = v;
    return acc;
  }, {});
}

/** Direction */
const DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
};

/** Direction */

function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;
    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;
    default:
      return direction;
  }
}

/** Escapes regular expression control chars */
function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
}

// cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
function objectIncludes(b, a) {
  if (a === b) return true;
  const arrA = Array.isArray(a),
    arrB = Array.isArray(b);
  let i;
  if (arrA && arrB) {
    if (a.length != b.length) return false;
    for (i = 0; i < a.length; i++) if (!objectIncludes(a[i], b[i])) return false;
    return true;
  }
  if (arrA != arrB) return false;
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const dateA = a instanceof Date,
      dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    const regexpA = a instanceof RegExp,
      regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    const keys = Object.keys(a);
    // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    for (i = 0; i < keys.length; i++) if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }
  return false;
}

/** Selection range */




/***/ }),

/***/ "./node_modules/imask/esm/index.js":
/*!*****************************************!*\
  !*** ./node_modules/imask/esm/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeDetails: function() { return /* reexport safe */ _core_change_details_js__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   ChunksTailDetails: function() { return /* reexport safe */ _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_16__["default"]; },
/* harmony export */   DIRECTION: function() { return /* reexport safe */ _core_utils_js__WEBPACK_IMPORTED_MODULE_7__.DIRECTION; },
/* harmony export */   HTMLContenteditableMaskElement: function() { return /* reexport safe */ _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   HTMLInputMaskElement: function() { return /* reexport safe */ _controls_html_input_mask_element_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   HTMLMaskElement: function() { return /* reexport safe */ _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   InputMask: function() { return /* reexport safe */ _controls_input_js__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   MaskElement: function() { return /* reexport safe */ _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   Masked: function() { return /* reexport safe */ _masked_base_js__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   MaskedDate: function() { return /* reexport safe */ _masked_date_js__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   MaskedDynamic: function() { return /* reexport safe */ _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   MaskedEnum: function() { return /* reexport safe */ _masked_enum_js__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   MaskedFunction: function() { return /* reexport safe */ _masked_function_js__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   MaskedNumber: function() { return /* reexport safe */ _masked_number_js__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   MaskedPattern: function() { return /* reexport safe */ _masked_pattern_js__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   MaskedRange: function() { return /* reexport safe */ _masked_range_js__WEBPACK_IMPORTED_MODULE_20__["default"]; },
/* harmony export */   MaskedRegExp: function() { return /* reexport safe */ _masked_regexp_js__WEBPACK_IMPORTED_MODULE_21__["default"]; },
/* harmony export */   PIPE_TYPE: function() { return /* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_19__.PIPE_TYPE; },
/* harmony export */   PatternFixedDefinition: function() { return /* reexport safe */ _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_17__["default"]; },
/* harmony export */   PatternInputDefinition: function() { return /* reexport safe */ _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_18__["default"]; },
/* harmony export */   RepeatBlock: function() { return /* reexport safe */ _masked_repeat_js__WEBPACK_IMPORTED_MODULE_22__["default"]; },
/* harmony export */   createMask: function() { return /* reexport safe */ _masked_factory_js__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   createPipe: function() { return /* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_19__.createPipe; },
/* harmony export */   "default": function() { return /* reexport safe */ _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   forceDirection: function() { return /* reexport safe */ _core_utils_js__WEBPACK_IMPORTED_MODULE_7__.forceDirection; },
/* harmony export */   normalizeOpts: function() { return /* reexport safe */ _masked_factory_js__WEBPACK_IMPORTED_MODULE_12__.normalizeOpts; },
/* harmony export */   pipe: function() { return /* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_19__.pipe; }
/* harmony export */ });
/* harmony import */ var _controls_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/input.js */ "./node_modules/imask/esm/controls/input.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _controls_html_input_mask_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/html-input-mask-element.js */ "./node_modules/imask/esm/controls/html-input-mask-element.js");
/* harmony import */ var _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony import */ var _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./masked/dynamic.js */ "./node_modules/imask/esm/masked/dynamic.js");
/* harmony import */ var _masked_enum_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./masked/enum.js */ "./node_modules/imask/esm/masked/enum.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _masked_function_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./masked/function.js */ "./node_modules/imask/esm/masked/function.js");
/* harmony import */ var _masked_number_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./masked/number.js */ "./node_modules/imask/esm/masked/number.js");
/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pipe_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./masked/pipe.js */ "./node_modules/imask/esm/masked/pipe.js");
/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./masked/range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _masked_repeat_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./masked/repeat.js */ "./node_modules/imask/esm/masked/repeat.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _controls_input_history_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./controls/input-history.js */ "./node_modules/imask/esm/controls/input-history.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _masked_pattern_cursor_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./masked/pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");




























try {
  globalThis.IMask = _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"];
} catch {}




/***/ }),

/***/ "./node_modules/imask/esm/masked/base.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/base.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Masked; }
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");





/** Append flags */

/** Extract flags */

// see https://github.com/microsoft/TypeScript/issues/6223

/** Provides common masking stuff */
class Masked {
  /** */

  /** */

  /** Transforms value before mask processing */

  /** Transforms each char before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing at the end of editing */

  /** Format typed value to string */

  /** Parse string to get typed value */

  /** Enable characters overwriting */

  /** */

  /** */

  /** */

  /** */

  constructor(opts) {
    this._value = '';
    this._update({
      ...Masked.DEFAULTS,
      ...opts
    });
    this._initialized = true;
  }

  /** Sets and applies new options */
  updateOptions(opts) {
    if (!this.optionsIsChanged(opts)) return;
    this.withValueRefresh(this._update.bind(this, opts));
  }

  /** Sets new options */
  _update(opts) {
    Object.assign(this, opts);
  }

  /** Mask state */
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(state) {
    this._value = state._value;
  }

  /** Resets value */
  reset() {
    this._value = '';
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this.resolve(value, {
      input: true
    });
  }

  /** Resolve new value */
  resolve(value, flags) {
    if (flags === void 0) {
      flags = {
        input: true
      };
    }
    this.reset();
    this.append(value, flags, '');
    this.doCommit();
  }
  get unmaskedValue() {
    return this.value;
  }
  set unmaskedValue(value) {
    this.resolve(value, {});
  }
  get typedValue() {
    return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
  }
  set typedValue(value) {
    if (this.format) {
      this.value = this.format(value, this);
    } else {
      this.unmaskedValue = String(value);
    }
  }

  /** Value that includes raw user input */
  get rawInputValue() {
    return this.extractInput(0, this.displayValue.length, {
      raw: true
    });
  }
  set rawInputValue(value) {
    this.resolve(value, {
      raw: true
    });
  }
  get displayValue() {
    return this.value;
  }
  get isComplete() {
    return true;
  }
  get isFilled() {
    return this.isComplete;
  }

  /** Finds nearest input position in direction */
  nearestInputPos(cursorPos, direction) {
    return cursorPos;
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    return Math.min(this.displayValue.length, toPos - fromPos);
  }

  /** Extracts value in range considering flags */
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    return this.displayValue.slice(fromPos, toPos);
  }

  /** Extracts tail in range */
  extractTail(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.extractInput(fromPos, toPos), fromPos);
  }

  /** Appends tail */
  appendTail(tail) {
    if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_1__["default"](String(tail));
    return tail.appendTo(this);
  }

  /** Appends char */
  _appendCharRaw(ch, flags) {
    if (!ch) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._value += ch;
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      inserted: ch,
      rawInserted: ch
    });
  }

  /** Appends char */
  _appendChar(ch, flags, checkTail) {
    if (flags === void 0) {
      flags = {};
    }
    const consistentState = this.state;
    let details;
    [ch, details] = this.doPrepareChar(ch, flags);
    if (ch) {
      details = details.aggregate(this._appendCharRaw(ch, flags));

      // TODO handle `skip`?

      // try `autofix` lookahead
      if (!details.rawInserted && this.autofix === 'pad') {
        const noFixState = this.state;
        this.state = consistentState;
        let fixDetails = this.pad(flags);
        const chDetails = this._appendCharRaw(ch, flags);
        fixDetails = fixDetails.aggregate(chDetails);

        // if fix was applied or
        // if details are equal use skip restoring state optimization
        if (chDetails.rawInserted || fixDetails.equals(details)) {
          details = fixDetails;
        } else {
          this.state = noFixState;
        }
      }
    }
    if (details.inserted) {
      let consistentTail;
      let appended = this.doValidate(flags) !== false;
      if (appended && checkTail != null) {
        // validation ok, check tail
        const beforeTailState = this.state;
        if (this.overwrite === true) {
          consistentTail = checkTail.state;
          for (let i = 0; i < details.rawInserted.length; ++i) {
            checkTail.unshift(this.displayValue.length - details.tailShift);
          }
        }
        let tailDetails = this.appendTail(checkTail);
        appended = tailDetails.rawInserted.length === checkTail.toString().length;

        // not ok, try shift
        if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
          this.state = beforeTailState;
          consistentTail = checkTail.state;
          for (let i = 0; i < details.rawInserted.length; ++i) {
            checkTail.shift();
          }
          tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted.length === checkTail.toString().length;
        }

        // if ok, rollback state after tail
        if (appended && tailDetails.inserted) this.state = beforeTailState;
      }

      // revert all if something went wrong
      if (!appended) {
        details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.state = consistentState;
        if (checkTail && consistentTail) checkTail.state = consistentTail;
      }
    }
    return details;
  }

  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  /** Appends symbols considering flags */
  append(str, flags, tail) {
    if (!(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(str)) throw new Error('value should be string');
    const checkTail = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(tail) ? new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_1__["default"](String(tail)) : tail;
    if (flags != null && flags.tail) flags._beforeTailState = this.state;
    let details;
    [str, details] = this.doPrepare(str, flags);
    for (let ci = 0; ci < str.length; ++ci) {
      const d = this._appendChar(str[ci], flags, checkTail);
      if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
      details.aggregate(d);
    }
    if ((this.eager === true || this.eager === 'append') && flags != null && flags.input && str) {
      details.aggregate(this._appendEager());
    }

    // append tail but aggregate only tailShift
    if (checkTail != null) {
      details.tailShift += this.appendTail(checkTail).tailShift;
      // TODO it's a good idea to clear state after appending ends
      // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
      // this._resetBeforeTailState();
    }
    return details;
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    this._value = this.displayValue.slice(0, fromPos) + this.displayValue.slice(toPos);
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  /** Calls function and reapplies current value */
  withValueRefresh(fn) {
    if (this._refreshing || !this._initialized) return fn();
    this._refreshing = true;
    const rawInput = this.rawInputValue;
    const value = this.value;
    const ret = fn();
    this.rawInputValue = rawInput;
    // append lost trailing chars at the end
    if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
      this.append(value.slice(this.displayValue.length), {}, '');
      this.doCommit();
    }
    delete this._refreshing;
    return ret;
  }
  runIsolated(fn) {
    if (this._isolated || !this._initialized) return fn(this);
    this._isolated = true;
    const state = this.state;
    const ret = fn(this);
    this.state = state;
    delete this._isolated;
    return ret;
  }
  doSkipInvalid(ch, flags, checkTail) {
    return Boolean(this.skipInvalid);
  }

  /** Prepares string before mask processing */
  doPrepare(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    return _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalize(this.prepare ? this.prepare(str, this, flags) : str);
  }

  /** Prepares each char before mask processing */
  doPrepareChar(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    return _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalize(this.prepareChar ? this.prepareChar(str, this, flags) : str);
  }

  /** Validates if value is acceptable */
  doValidate(flags) {
    return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
  }

  /** Does additional processing at the end of editing */
  doCommit() {
    if (this.commit) this.commit(this.value, this);
  }
  splice(start, deleteCount, inserted, removeDirection, flags) {
    if (inserted === void 0) {
      inserted = '';
    }
    if (removeDirection === void 0) {
      removeDirection = _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE;
    }
    if (flags === void 0) {
      flags = {
        input: true
      };
    }
    const tailPos = start + deleteCount;
    const tail = this.extractTail(tailPos);
    const eagerRemove = this.eager === true || this.eager === 'remove';
    let oldRawValue;
    if (eagerRemove) {
      removeDirection = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.forceDirection)(removeDirection);
      oldRawValue = this.extractInput(0, tailPos, {
        raw: true
      });
    }
    let startChangePos = start;
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

    // if it is just deletion without insertion
    if (removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE) {
      startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE : removeDirection);

      // adjust tailShift if start was aligned
      details.tailShift = startChangePos - start;
    }
    details.aggregate(this.remove(startChangePos));
    if (eagerRemove && removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE && oldRawValue === this.rawInputValue) {
      if (removeDirection === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_LEFT) {
        let valLength;
        while (oldRawValue === this.rawInputValue && (valLength = this.displayValue.length)) {
          details.aggregate(new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
            tailShift: -1
          })).aggregate(this.remove(valLength - 1));
        }
      } else if (removeDirection === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_RIGHT) {
        tail.unshift();
      }
    }
    return details.aggregate(this.append(inserted, flags, tail));
  }
  maskEquals(mask) {
    return this.mask === mask;
  }
  optionsIsChanged(opts) {
    return !(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.objectIncludes)(this, opts);
  }
  typedValueEquals(value) {
    const tval = this.typedValue;
    return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || (this.format ? this.format(value, this) === this.format(this.typedValue, this) : false);
  }
  pad(flags) {
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
}
Masked.DEFAULTS = {
  skipInvalid: true
};
Masked.EMPTY_VALUES = [undefined, null, ''];
_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].Masked = Masked;




/***/ }),

/***/ "./node_modules/imask/esm/masked/date.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/date.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MaskedDate; }
/* harmony export */ });
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");














const DefaultPattern = 'd{.}`m{.}`Y';

// Make format and parse required when pattern is provided

/** Date mask */
class MaskedDate extends _pattern_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static extractPatternOptions(opts) {
    const {
      mask,
      pattern,
      ...patternOpts
    } = opts;
    return {
      ...patternOpts,
      mask: (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(mask) ? mask : pattern
    };
  }

  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** Format typed value to string */

  /** Parse string to get typed value */

  constructor(opts) {
    super(MaskedDate.extractPatternOptions({
      ...MaskedDate.DEFAULTS,
      ...opts
    }));
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const {
      mask,
      pattern,
      blocks,
      ...patternOpts
    } = {
      ...MaskedDate.DEFAULTS,
      ...opts
    };
    const patternBlocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
    // adjust year block
    if (opts.min) patternBlocks.Y.from = opts.min.getFullYear();
    if (opts.max) patternBlocks.Y.to = opts.max.getFullYear();
    if (opts.min && opts.max && patternBlocks.Y.from === patternBlocks.Y.to) {
      patternBlocks.m.from = opts.min.getMonth() + 1;
      patternBlocks.m.to = opts.max.getMonth() + 1;
      if (patternBlocks.m.from === patternBlocks.m.to) {
        patternBlocks.d.from = opts.min.getDate();
        patternBlocks.d.to = opts.max.getDate();
      }
    }
    Object.assign(patternBlocks, this.blocks, blocks);
    super._update({
      ...patternOpts,
      mask: (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(mask) ? mask : pattern,
      blocks: patternBlocks
    });
  }
  doValidate(flags) {
    const date = this.date;
    return super.doValidate(flags) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
  }

  /** Checks if date is exists */
  isDateExist(str) {
    return this.format(this.parse(str, this), this).indexOf(str) >= 0;
  }

  /** Parsed Date */
  get date() {
    return this.typedValue;
  }
  set date(date) {
    this.typedValue = date;
  }
  get typedValue() {
    return this.isComplete ? super.typedValue : null;
  }
  set typedValue(value) {
    super.typedValue = value;
  }
  maskEquals(mask) {
    return mask === Date || super.maskEquals(mask);
  }
  optionsIsChanged(opts) {
    return super.optionsIsChanged(MaskedDate.extractPatternOptions(opts));
  }
}
MaskedDate.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: _range_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: _range_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: _range_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    from: 1900,
    to: 9999
  }
});
MaskedDate.DEFAULTS = {
  ..._pattern_js__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULTS,
  mask: Date,
  pattern: DefaultPattern,
  format: (date, masked) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: (str, masked) => {
    const [day, month, year] = str.split('.').map(Number);
    return new Date(year, month - 1, day);
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedDate = MaskedDate;




/***/ }),

/***/ "./node_modules/imask/esm/masked/dynamic.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/dynamic.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MaskedDynamic; }
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");







/** Dynamic mask for choosing appropriate mask in run-time */
class MaskedDynamic extends _base_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(opts) {
    super({
      ...MaskedDynamic.DEFAULTS,
      ...opts
    });
    this.currentMask = undefined;
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    super._update(opts);
    if ('mask' in opts) {
      this.exposeMask = undefined;
      // mask could be totally dynamic with only `dispatch` option
      this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(m => {
        const {
          expose,
          ...maskOpts
        } = (0,_factory_js__WEBPACK_IMPORTED_MODULE_2__.normalizeOpts)(m);
        const masked = (0,_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
          overwrite: this._overwrite,
          eager: this._eager,
          skipInvalid: this._skipInvalid,
          ...maskOpts
        });
        if (expose) this.exposeMask = masked;
        return masked;
      }) : [];

      // this.currentMask = this.doDispatch(''); // probably not needed but lets see
    }
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const details = this._applyDispatch(ch, flags);
    if (this.currentMask) {
      details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
    }
    return details;
  }
  _applyDispatch(appended, flags, tail) {
    if (appended === void 0) {
      appended = '';
    }
    if (flags === void 0) {
      flags = {};
    }
    if (tail === void 0) {
      tail = '';
    }
    const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
    const inputValue = this.rawInputValue;
    const insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
    const tailValue = inputValue.slice(insertValue.length);
    const prevMask = this.currentMask;
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const prevMaskState = prevMask == null ? void 0 : prevMask.state;

    // clone flags to prevent overwriting `_beforeTailState`
    this.currentMask = this.doDispatch(appended, {
      ...flags
    }, tail);

    // restore state after dispatch
    if (this.currentMask) {
      if (this.currentMask !== prevMask) {
        // if mask changed reapply input
        this.currentMask.reset();
        if (insertValue) {
          this.currentMask.append(insertValue, {
            raw: true
          });
          details.tailShift = this.currentMask.value.length - prevValueBeforeTail.length;
        }
        if (tailValue) {
          details.tailShift += this.currentMask.append(tailValue, {
            raw: true,
            tail: true
          }).tailShift;
        }
      } else if (prevMaskState) {
        // Dispatch can do something bad with state, so
        // restore prev mask state
        this.currentMask.state = prevMaskState;
      }
    }
    return details;
  }
  _appendPlaceholder() {
    const details = this._applyDispatch();
    if (this.currentMask) {
      details.aggregate(this.currentMask._appendPlaceholder());
    }
    return details;
  }
  _appendEager() {
    const details = this._applyDispatch();
    if (this.currentMask) {
      details.aggregate(this.currentMask._appendEager());
    }
    return details;
  }
  appendTail(tail) {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    if (tail) details.aggregate(this._applyDispatch('', {}, tail));
    return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
  }
  currentMaskFlags(flags) {
    var _flags$_beforeTailSta, _flags$_beforeTailSta2;
    return {
      ...flags,
      _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
    };
  }
  doDispatch(appended, flags, tail) {
    if (flags === void 0) {
      flags = {};
    }
    if (tail === void 0) {
      tail = '';
    }
    return this.dispatch(appended, this, flags, tail);
  }
  doValidate(flags) {
    return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
  }
  doPrepare(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    let [s, details] = super.doPrepare(str, flags);
    if (this.currentMask) {
      let currentDetails;
      [s, currentDetails] = super.doPrepare(s, this.currentMaskFlags(flags));
      details = details.aggregate(currentDetails);
    }
    return [s, details];
  }
  doPrepareChar(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    let [s, details] = super.doPrepareChar(str, flags);
    if (this.currentMask) {
      let currentDetails;
      [s, currentDetails] = super.doPrepareChar(s, this.currentMaskFlags(flags));
      details = details.aggregate(currentDetails);
    }
    return [s, details];
  }
  reset() {
    var _this$currentMask;
    (_this$currentMask = this.currentMask) == null || _this$currentMask.reset();
    this.compiledMasks.forEach(m => m.reset());
  }
  get value() {
    return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : '';
  }
  set value(value) {
    if (this.exposeMask) {
      this.exposeMask.value = value;
      this.currentMask = this.exposeMask;
      this._applyDispatch();
    } else super.value = value;
  }
  get unmaskedValue() {
    return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : '';
  }
  set unmaskedValue(unmaskedValue) {
    if (this.exposeMask) {
      this.exposeMask.unmaskedValue = unmaskedValue;
      this.currentMask = this.exposeMask;
      this._applyDispatch();
    } else super.unmaskedValue = unmaskedValue;
  }
  get typedValue() {
    return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : '';
  }
  set typedValue(typedValue) {
    if (this.exposeMask) {
      this.exposeMask.typedValue = typedValue;
      this.currentMask = this.exposeMask;
      this._applyDispatch();
      return;
    }
    let unmaskedValue = String(typedValue);

    // double check it
    if (this.currentMask) {
      this.currentMask.typedValue = typedValue;
      unmaskedValue = this.currentMask.unmaskedValue;
    }
    this.unmaskedValue = unmaskedValue;
  }
  get displayValue() {
    return this.currentMask ? this.currentMask.displayValue : '';
  }
  get isComplete() {
    var _this$currentMask2;
    return Boolean((_this$currentMask2 = this.currentMask) == null ? void 0 : _this$currentMask2.isComplete);
  }
  get isFilled() {
    var _this$currentMask3;
    return Boolean((_this$currentMask3 = this.currentMask) == null ? void 0 : _this$currentMask3.isFilled);
  }
  remove(fromPos, toPos) {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    if (this.currentMask) {
      details.aggregate(this.currentMask.remove(fromPos, toPos))
      // update with dispatch
      .aggregate(this._applyDispatch());
    }
    return details;
  }
  get state() {
    var _this$currentMask4;
    return {
      ...super.state,
      _rawInputValue: this.rawInputValue,
      compiledMasks: this.compiledMasks.map(m => m.state),
      currentMaskRef: this.currentMask,
      currentMask: (_this$currentMask4 = this.currentMask) == null ? void 0 : _this$currentMask4.state
    };
  }
  set state(state) {
    const {
      compiledMasks,
      currentMaskRef,
      currentMask,
      ...maskedState
    } = state;
    if (compiledMasks) this.compiledMasks.forEach((m, mi) => m.state = compiledMasks[mi]);
    if (currentMaskRef != null) {
      this.currentMask = currentMaskRef;
      this.currentMask.state = currentMask;
    }
    super.state = maskedState;
  }
  extractInput(fromPos, toPos, flags) {
    return this.currentMask ? this.currentMask.extractInput(fromPos, toPos, flags) : '';
  }
  extractTail(fromPos, toPos) {
    return this.currentMask ? this.currentMask.extractTail(fromPos, toPos) : super.extractTail(fromPos, toPos);
  }
  doCommit() {
    if (this.currentMask) this.currentMask.doCommit();
    super.doCommit();
  }
  nearestInputPos(cursorPos, direction) {
    return this.currentMask ? this.currentMask.nearestInputPos(cursorPos, direction) : super.nearestInputPos(cursorPos, direction);
  }
  get overwrite() {
    return this.currentMask ? this.currentMask.overwrite : this._overwrite;
  }
  set overwrite(overwrite) {
    this._overwrite = overwrite;
  }
  get eager() {
    return this.currentMask ? this.currentMask.eager : this._eager;
  }
  set eager(eager) {
    this._eager = eager;
  }
  get skipInvalid() {
    return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
  }
  set skipInvalid(skipInvalid) {
    this._skipInvalid = skipInvalid;
  }
  get autofix() {
    return this.currentMask ? this.currentMask.autofix : this._autofix;
  }
  set autofix(autofix) {
    this._autofix = autofix;
  }
  maskEquals(mask) {
    return Array.isArray(mask) ? this.compiledMasks.every((m, mi) => {
      if (!mask[mi]) return;
      const {
        mask: oldMask,
        ...restOpts
      } = mask[mi];
      return (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectIncludes)(m, restOpts) && m.maskEquals(oldMask);
    }) : super.maskEquals(mask);
  }
  typedValueEquals(value) {
    var _this$currentMask5;
    return Boolean((_this$currentMask5 = this.currentMask) == null ? void 0 : _this$currentMask5.typedValueEquals(value));
  }
}
/** Currently chosen mask */
/** Currently chosen mask */
/** Compliled {@link Masked} options */
/** Chooses {@link Masked} depending on input value */
MaskedDynamic.DEFAULTS = {
  ..._base_js__WEBPACK_IMPORTED_MODULE_3__["default"].DEFAULTS,
  dispatch: (appended, masked, flags, tail) => {
    if (!masked.compiledMasks.length) return;
    const inputValue = masked.rawInputValue;

    // simulate input
    const inputs = masked.compiledMasks.map((m, index) => {
      const isCurrent = masked.currentMask === m;
      const startInputPos = isCurrent ? m.displayValue.length : m.nearestInputPos(m.displayValue.length, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_LEFT);
      if (m.rawInputValue !== inputValue) {
        m.reset();
        m.append(inputValue, {
          raw: true
        });
      } else if (!isCurrent) {
        m.remove(startInputPos);
      }
      m.append(appended, masked.currentMaskFlags(flags));
      m.appendTail(tail);
      return {
        index,
        weight: m.rawInputValue.length,
        totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.displayValue.length, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_LEFT)))
      };
    });

    // pop masks with longer values first
    inputs.sort((i1, i2) => i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions);
    return masked.compiledMasks[inputs[0].index];
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedDynamic = MaskedDynamic;




/***/ }),

/***/ "./node_modules/imask/esm/masked/enum.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/enum.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MaskedEnum; }
/* harmony export */ });
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");













/** Pattern which validates enum values */
class MaskedEnum extends _pattern_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(opts) {
    super({
      ...MaskedEnum.DEFAULTS,
      ...opts
    }); // mask will be created in _update
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const {
      enum: enum_,
      ...eopts
    } = opts;
    if (enum_) {
      const lengths = enum_.map(e => e.length);
      const requiredLength = Math.min(...lengths);
      const optionalLength = Math.max(...lengths) - requiredLength;
      eopts.mask = '*'.repeat(requiredLength);
      if (optionalLength) eopts.mask += '[' + '*'.repeat(optionalLength) + ']';
      this.enum = enum_;
    }
    super._update(eopts);
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const matchFrom = Math.min(this.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_RIGHT), this.value.length);
    const matches = this.enum.filter(e => this.matchValue(e, this.unmaskedValue + ch, matchFrom));
    if (matches.length) {
      if (matches.length === 1) {
        this._forEachBlocksInRange(0, this.value.length, (b, bi) => {
          const mch = matches[0][bi];
          if (bi >= this.value.length || mch === b.value) return;
          b.reset();
          b._appendChar(mch, flags);
        });
      }
      const d = super._appendCharRaw(matches[0][this.value.length], flags);
      if (matches.length === 1) {
        matches[0].slice(this.unmaskedValue.length).split('').forEach(mch => d.aggregate(super._appendCharRaw(mch)));
      }
      return d;
    }
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      skip: !this.isComplete
    });
  }
  extractTail(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    // just drop tail
    return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__["default"]('', fromPos);
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    if (fromPos === toPos) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    const matchFrom = Math.min(super.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_RIGHT), this.value.length);
    let pos;
    for (pos = fromPos; pos >= 0; --pos) {
      const matches = this.enum.filter(e => this.matchValue(e, this.value.slice(matchFrom, pos), matchFrom));
      if (matches.length > 1) break;
    }
    const details = super.remove(pos, toPos);
    details.tailShift += pos - fromPos;
    return details;
  }
  get isComplete() {
    return this.enum.indexOf(this.value) >= 0;
  }
}
/** Match enum value */
MaskedEnum.DEFAULTS = {
  ..._pattern_js__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULTS,
  matchValue: (estr, istr, matchFrom) => estr.indexOf(istr, matchFrom) === matchFrom
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedEnum = MaskedEnum;




/***/ }),

/***/ "./node_modules/imask/esm/masked/factory.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/factory.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createMask; },
/* harmony export */   maskedClass: function() { return /* binding */ maskedClass; },
/* harmony export */   normalizeOpts: function() { return /* binding */ normalizeOpts; }
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");



// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
// export function maskedClass(mask: string): typeof MaskedPattern;
// export function maskedClass(mask: DateConstructor): typeof MaskedDate;
// export function maskedClass(mask: NumberConstructor): typeof MaskedNumber;
// export function maskedClass(mask: Array<any> | ArrayConstructor): typeof MaskedDynamic;
// export function maskedClass(mask: MaskedDate): typeof MaskedDate;
// export function maskedClass(mask: MaskedNumber): typeof MaskedNumber;
// export function maskedClass(mask: MaskedEnum): typeof MaskedEnum;
// export function maskedClass(mask: MaskedRange): typeof MaskedRange;
// export function maskedClass(mask: MaskedRegExp): typeof MaskedRegExp;
// export function maskedClass(mask: MaskedFunction): typeof MaskedFunction;
// export function maskedClass(mask: MaskedPattern): typeof MaskedPattern;
// export function maskedClass(mask: MaskedDynamic): typeof MaskedDynamic;
// export function maskedClass(mask: Masked): typeof Masked;
// export function maskedClass(mask: typeof Masked): typeof Masked;
// export function maskedClass(mask: typeof MaskedDate): typeof MaskedDate;
// export function maskedClass(mask: typeof MaskedNumber): typeof MaskedNumber;
// export function maskedClass(mask: typeof MaskedEnum): typeof MaskedEnum;
// export function maskedClass(mask: typeof MaskedRange): typeof MaskedRange;
// export function maskedClass(mask: typeof MaskedRegExp): typeof MaskedRegExp;
// export function maskedClass(mask: typeof MaskedFunction): typeof MaskedFunction;
// export function maskedClass(mask: typeof MaskedPattern): typeof MaskedPattern;
// export function maskedClass(mask: typeof MaskedDynamic): typeof MaskedDynamic;
// export function maskedClass<Mask extends typeof Masked> (mask: Mask): Mask;
// export function maskedClass(mask: RegExp): typeof MaskedRegExp;
// export function maskedClass(mask: (value: string, ...args: any[]) => boolean): typeof MaskedFunction;

/** Get Masked class by mask type */
function maskedClass(mask) /* TODO */{
  if (mask == null) throw new Error('mask property should be defined');
  if (mask instanceof RegExp) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedRegExp;
  if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(mask)) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedPattern;
  if (mask === Date) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDate;
  if (mask === Number) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedNumber;
  if (Array.isArray(mask) || mask === Array) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDynamic;
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask.prototype instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask;
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask.constructor;
  if (mask instanceof Function) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedFunction;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
  return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked;
}
function normalizeOpts(opts) {
  if (!opts) throw new Error('Options in not defined');
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) {
    if (opts.prototype instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return {
      mask: opts
    };

    /*
      handle cases like:
      1) opts = Masked
      2) opts = { mask: Masked, ...instanceOpts }
    */
    const {
      mask = undefined,
      ...instanceOpts
    } = opts instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked ? {
      mask: opts
    } : (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(opts) && opts.mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked ? opts : {};
    if (mask) {
      const _mask = mask.mask;
      return {
        ...(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.pick)(mask, (_, k) => !k.startsWith('_')),
        mask: mask.constructor,
        _mask,
        ...instanceOpts
      };
    }
  }
  if (!(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(opts)) return {
    mask: opts
  };
  return {
    ...opts
  };
}

// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754

// From masked
// export default function createMask<Opts extends Masked, ReturnMasked=Opts> (opts: Opts): ReturnMasked;
// // From masked class
// export default function createMask<Opts extends MaskedOptions<typeof Masked>, ReturnMasked extends Masked=InstanceType<Opts['mask']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedDate>, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedNumber>, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedEnum>, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedRange>, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedRegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedFunction>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedPattern>, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedDynamic>, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
// // From mask opts
// export default function createMask<Opts extends MaskedOptions<Masked>, ReturnMasked=Opts extends MaskedOptions<infer M> ? M : never> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedNumberOptions, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedDateFactoryOptions, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedEnumOptions, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedRangeOptions, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedPatternOptions, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedDynamicOptions, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<RegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<Function>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;

/** Creates new {@link Masked} depending on mask type */
function createMask(opts) {
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && opts instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return opts;
  const nOpts = normalizeOpts(opts);
  const MaskedClass = maskedClass(nOpts.mask);
  if (!MaskedClass) throw new Error("Masked class is not found for provided mask " + nOpts.mask + ", appropriate module needs to be imported manually before creating mask.");
  if (nOpts.mask === MaskedClass) delete nOpts.mask;
  if (nOpts._mask) {
    nOpts.mask = nOpts._mask;
    delete nOpts._mask;
  }
  return new MaskedClass(nOpts);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createMask = createMask;




/***/ }),

/***/ "./node_modules/imask/esm/masked/function.js":
/*!***************************************************!*\
  !*** ./node_modules/imask/esm/masked/function.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MaskedFunction; }
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");






/** Masking by custom Function */
class MaskedFunction extends _base_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** */

  /** Enable characters overwriting */

  /** */

  /** */

  /** */

  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    super._update({
      ...opts,
      validate: opts.mask
    });
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedFunction = MaskedFunction;




/***/ }),

/***/ "./node_modules/imask/esm/masked/number.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/number.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MaskedNumber; }
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");






var _MaskedNumber;
/** Number mask */
class MaskedNumber extends _base_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */

  /** Enable characters overwriting */

  /** */

  /** */

  /** */

  /** Format typed value to string */

  /** Parse string to get typed value */

  constructor(opts) {
    super({
      ...MaskedNumber.DEFAULTS,
      ...opts
    });
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    super._update(opts);
    this._updateRegExps();
  }
  _updateRegExps() {
    const start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
    const mid = '\\d*';
    const end = (this.scale ? "(" + (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.escapeRegExp)(this.radix) + "\\d{0," + this.scale + "})?" : '') + '$';
    this._numberRegExp = new RegExp(start + mid + end);
    this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.escapeRegExp).join('') + "]", 'g');
    this._thousandsSeparatorRegExp = new RegExp((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.escapeRegExp)(this.thousandsSeparator), 'g');
  }
  _removeThousandsSeparators(value) {
    return value.replace(this._thousandsSeparatorRegExp, '');
  }
  _insertThousandsSeparators(value) {
    // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    const parts = value.split(this.radix);
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
    return parts.join(this.radix);
  }
  doPrepareChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const [prepCh, details] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (
    /*
      radix should be mapped when
      1) input is done from keyboard = flags.input && flags.raw
      2) unmasked value is set = !flags.input && !flags.raw
      and should not be mapped when
      1) value is set = flags.input && !flags.raw
      2) raw value is set = !flags.input && flags.raw
    */
    flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch), flags);
    if (ch && !prepCh) details.skip = true;
    if (prepCh && !this.allowPositive && !this.value && prepCh !== '-') details.aggregate(this._appendChar('-'));
    return [prepCh, details];
  }
  _separatorsCount(to, extendOnSeparators) {
    if (extendOnSeparators === void 0) {
      extendOnSeparators = false;
    }
    let count = 0;
    for (let pos = 0; pos < to; ++pos) {
      if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
        ++count;
        if (extendOnSeparators) to += this.thousandsSeparator.length;
      }
    }
    return count;
  }
  _separatorsCountFromSlice(slice) {
    if (slice === void 0) {
      slice = this._value;
    }
    return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
    return this._removeThousandsSeparators(super.extractInput(fromPos, toPos, flags));
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
    const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
    this._value = this._removeThousandsSeparators(this.value);
    const oldValue = this._value;
    this._value += ch;
    const num = this.number;
    let accepted = !isNaN(num);
    let skip = false;
    if (accepted) {
      let fixedNum;
      if (this.min != null && this.min < 0 && this.number < this.min) fixedNum = this.min;
      if (this.max != null && this.max > 0 && this.number > this.max) fixedNum = this.max;
      if (fixedNum != null) {
        if (this.autofix) {
          this._value = this.format(fixedNum, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
          skip || (skip = oldValue === this._value && !flags.tail); // if not changed on tail it's still ok to proceed
        } else {
          accepted = false;
        }
      }
      accepted && (accepted = Boolean(this._value.match(this._numberRegExp)));
    }
    let appendDetails;
    if (!accepted) {
      this._value = oldValue;
      appendDetails = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    } else {
      appendDetails = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        inserted: this._value.slice(oldValue.length),
        rawInserted: skip ? '' : ch,
        skip
      });
    }
    this._value = this._insertThousandsSeparators(this._value);
    const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
    const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
    appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
    return appendDetails;
  }
  _findSeparatorAround(pos) {
    if (this.thousandsSeparator) {
      const searchFrom = pos - this.thousandsSeparator.length + 1;
      const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
      if (separatorPos <= pos) return separatorPos;
    }
    return -1;
  }
  _adjustRangeWithSeparators(from, to) {
    const separatorAroundFromPos = this._findSeparatorAround(from);
    if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
    const separatorAroundToPos = this._findSeparatorAround(to);
    if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
    return [from, to];
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
    const valueBeforePos = this.value.slice(0, fromPos);
    const valueAfterPos = this.value.slice(toPos);
    const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
    this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
    const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
    });
  }
  nearestInputPos(cursorPos, direction) {
    if (!this.thousandsSeparator) return cursorPos;
    switch (direction) {
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.LEFT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_LEFT:
        {
          const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
          if (separatorAtLeftPos >= 0) {
            const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
            if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_LEFT) {
              return separatorAtLeftPos;
            }
          }
          break;
        }
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.RIGHT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_RIGHT:
        {
          const separatorAtRightPos = this._findSeparatorAround(cursorPos);
          if (separatorAtRightPos >= 0) {
            return separatorAtRightPos + this.thousandsSeparator.length;
          }
        }
    }
    return cursorPos;
  }
  doCommit() {
    if (this.value) {
      const number = this.number;
      let validnum = number;

      // check bounds
      if (this.min != null) validnum = Math.max(validnum, this.min);
      if (this.max != null) validnum = Math.min(validnum, this.max);
      if (validnum !== number) this.unmaskedValue = this.format(validnum, this);
      let formatted = this.value;
      if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
      if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
      this._value = formatted;
    }
    super.doCommit();
  }
  _normalizeZeros(value) {
    const parts = this._removeThousandsSeparators(value).split(this.radix);

    // remove leading zeros
    parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (match, sign, zeros, num) => sign + num);
    // add leading zero
    if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';
    if (parts.length > 1) {
      parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros
      if (!parts[1].length) parts.length = 1; // remove fractional
    }
    return this._insertThousandsSeparators(parts.join(this.radix));
  }
  _padFractionalZeros(value) {
    if (!value) return value;
    const parts = value.split(this.radix);
    if (parts.length < 2) parts.push('');
    parts[1] = parts[1].padEnd(this.scale, '0');
    return parts.join(this.radix);
  }
  doSkipInvalid(ch, flags, checkTail) {
    if (flags === void 0) {
      flags = {};
    }
    const dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
    return super.doSkipInvalid(ch, flags, checkTail) && !dropFractional;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
  }
  set unmaskedValue(unmaskedValue) {
    super.unmaskedValue = unmaskedValue;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(n) {
    this.rawInputValue = this.format(n, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
  }

  /** Parsed Number */
  get number() {
    return this.typedValue;
  }
  set number(number) {
    this.typedValue = number;
  }
  get allowNegative() {
    return this.min != null && this.min < 0 || this.max != null && this.max < 0;
  }
  get allowPositive() {
    return this.min != null && this.min > 0 || this.max != null && this.max > 0;
  }
  typedValueEquals(value) {
    // handle  0 -> '' case (typed = 0 even if value = '')
    // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
    return (super.typedValueEquals(value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === '');
  }
}
_MaskedNumber = MaskedNumber;
MaskedNumber.UNMASKED_RADIX = '.';
MaskedNumber.EMPTY_VALUES = [..._base_js__WEBPACK_IMPORTED_MODULE_2__["default"].EMPTY_VALUES, 0];
MaskedNumber.DEFAULTS = {
  ..._base_js__WEBPACK_IMPORTED_MODULE_2__["default"].DEFAULTS,
  mask: Number,
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: [_MaskedNumber.UNMASKED_RADIX],
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  scale: 2,
  normalizeZeros: true,
  padFractionalZeros: false,
  parse: Number,
  format: n => n.toLocaleString('en-US', {
    useGrouping: false,
    maximumFractionDigits: 20
  })
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedNumber = MaskedNumber;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MaskedPattern; }
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");












/** Pattern mask */
class MaskedPattern extends _base_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  /** */

  /** */

  /** Single char for empty input */

  /** Single char for filled input */

  /** Show placeholder only when needed */

  /** Enable characters overwriting */

  /** */

  /** */

  /** */

  constructor(opts) {
    super({
      ...MaskedPattern.DEFAULTS,
      ...opts,
      definitions: Object.assign({}, _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__["default"].DEFAULT_DEFINITIONS, opts == null ? void 0 : opts.definitions)
    });
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    opts.definitions = Object.assign({}, this.definitions, opts.definitions);
    super._update(opts);
    this._rebuildMask();
  }
  _rebuildMask() {
    const defs = this.definitions;
    this._blocks = [];
    this.exposeBlock = undefined;
    this._stops = [];
    this._maskedBlocks = {};
    const pattern = this.mask;
    if (!pattern || !defs) return;
    let unmaskingBlock = false;
    let optionalBlock = false;
    for (let i = 0; i < pattern.length; ++i) {
      if (this.blocks) {
        const p = pattern.slice(i);
        const bNames = Object.keys(this.blocks).filter(bName => p.indexOf(bName) === 0);
        // order by key length
        bNames.sort((a, b) => b.length - a.length);
        // use block name with max length
        const bName = bNames[0];
        if (bName) {
          const {
            expose,
            repeat,
            ...bOpts
          } = (0,_factory_js__WEBPACK_IMPORTED_MODULE_4__.normalizeOpts)(this.blocks[bName]); // TODO type Opts<Arg & Extra>
          const blockOpts = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...bOpts,
            repeat,
            parent: this
          };
          const maskedBlock = repeat != null ? new _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].RepeatBlock(blockOpts /* TODO */) : (0,_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])(blockOpts);
          if (maskedBlock) {
            this._blocks.push(maskedBlock);
            if (expose) this.exposeBlock = maskedBlock;

            // store block index
            if (!this._maskedBlocks[bName]) this._maskedBlocks[bName] = [];
            this._maskedBlocks[bName].push(this._blocks.length - 1);
          }
          i += bName.length - 1;
          continue;
        }
      }
      let char = pattern[i];
      let isInput = (char in defs);
      if (char === MaskedPattern.STOP_CHAR) {
        this._stops.push(this._blocks.length);
        continue;
      }
      if (char === '{' || char === '}') {
        unmaskingBlock = !unmaskingBlock;
        continue;
      }
      if (char === '[' || char === ']') {
        optionalBlock = !optionalBlock;
        continue;
      }
      if (char === MaskedPattern.ESCAPE_CHAR) {
        ++i;
        char = pattern[i];
        if (!char) break;
        isInput = false;
      }
      const def = isInput ? new _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
        isOptional: optionalBlock,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...(0,_factory_js__WEBPACK_IMPORTED_MODULE_4__.normalizeOpts)(defs[char]),
        parent: this
      }) : new _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
        char,
        eager: this.eager,
        isUnmasking: unmaskingBlock
      });
      this._blocks.push(def);
    }
  }
  get state() {
    return {
      ...super.state,
      _blocks: this._blocks.map(b => b.state)
    };
  }
  set state(state) {
    if (!state) {
      this.reset();
      return;
    }
    const {
      _blocks,
      ...maskedState
    } = state;
    this._blocks.forEach((b, bi) => b.state = _blocks[bi]);
    super.state = maskedState;
  }
  reset() {
    super.reset();
    this._blocks.forEach(b => b.reset());
  }
  get isComplete() {
    return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every(b => b.isComplete);
  }
  get isFilled() {
    return this._blocks.every(b => b.isFilled);
  }
  get isFixed() {
    return this._blocks.every(b => b.isFixed);
  }
  get isOptional() {
    return this._blocks.every(b => b.isOptional);
  }
  doCommit() {
    this._blocks.forEach(b => b.doCommit());
    super.doCommit();
  }
  get unmaskedValue() {
    return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((str, b) => str += b.unmaskedValue, '');
  }
  set unmaskedValue(unmaskedValue) {
    if (this.exposeBlock) {
      const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.unmaskedValue = unmaskedValue;
      this.appendTail(tail);
      this.doCommit();
    } else super.unmaskedValue = unmaskedValue;
  }
  get value() {
    return this.exposeBlock ? this.exposeBlock.value :
    // TODO return _value when not in change?
    this._blocks.reduce((str, b) => str += b.value, '');
  }
  set value(value) {
    if (this.exposeBlock) {
      const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.value = value;
      this.appendTail(tail);
      this.doCommit();
    } else super.value = value;
  }
  get typedValue() {
    return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
  }
  set typedValue(value) {
    if (this.exposeBlock) {
      const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.typedValue = value;
      this.appendTail(tail);
      this.doCommit();
    } else super.typedValue = value;
  }
  get displayValue() {
    return this._blocks.reduce((str, b) => str += b.displayValue, '');
  }
  appendTail(tail) {
    return super.appendTail(tail).aggregate(this._appendPlaceholder());
  }
  _appendEager() {
    var _this$_mapPosToBlock;
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    let startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index;
    if (startBlockIndex == null) return details;

    // TODO test if it works for nested pattern masks
    if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
    for (let bi = startBlockIndex; bi < this._blocks.length; ++bi) {
      const d = this._blocks[bi]._appendEager();
      if (!d.inserted) break;
      details.aggregate(d);
    }
    return details;
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const blockIter = this._mapPosToBlock(this.displayValue.length);
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (!blockIter) return details;
    for (let bi = blockIter.index, block; block = this._blocks[bi]; ++bi) {
      var _flags$_beforeTailSta;
      const blockDetails = block._appendChar(ch, {
        ...flags,
        _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
      });
      details.aggregate(blockDetails);
      if (blockDetails.consumed) break; // go next char
    }
    return details;
  }
  extractTail(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    const chunkTail = new _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    if (fromPos === toPos) return chunkTail;
    this._forEachBlocksInRange(fromPos, toPos, (b, bi, bFromPos, bToPos) => {
      const blockChunk = b.extractTail(bFromPos, bToPos);
      blockChunk.stop = this._findStopBefore(bi);
      blockChunk.from = this._blockStartPos(bi);
      if (blockChunk instanceof _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_5__["default"]) blockChunk.blockIndex = bi;
      chunkTail.extend(blockChunk);
    });
    return chunkTail;
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    if (flags === void 0) {
      flags = {};
    }
    if (fromPos === toPos) return '';
    let input = '';
    this._forEachBlocksInRange(fromPos, toPos, (b, _, fromPos, toPos) => {
      input += b.extractInput(fromPos, toPos, flags);
    });
    return input;
  }
  _findStopBefore(blockIndex) {
    let stopBefore;
    for (let si = 0; si < this._stops.length; ++si) {
      const stop = this._stops[si];
      if (stop <= blockIndex) stopBefore = stop;else break;
    }
    return stopBefore;
  }

  /** Appends placeholder depending on laziness */
  _appendPlaceholder(toBlockIndex) {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (this.lazy && toBlockIndex == null) return details;
    const startBlockIter = this._mapPosToBlock(this.displayValue.length);
    if (!startBlockIter) return details;
    const startBlockIndex = startBlockIter.index;
    const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
    this._blocks.slice(startBlockIndex, endBlockIndex).forEach(b => {
      if (!b.lazy || toBlockIndex != null) {
        var _blocks2;
        details.aggregate(b._appendPlaceholder((_blocks2 = b._blocks) == null ? void 0 : _blocks2.length));
      }
    });
    return details;
  }

  /** Finds block in pos */
  _mapPosToBlock(pos) {
    let accVal = '';
    for (let bi = 0; bi < this._blocks.length; ++bi) {
      const block = this._blocks[bi];
      const blockStartPos = accVal.length;
      accVal += block.displayValue;
      if (pos <= accVal.length) {
        return {
          index: bi,
          offset: pos - blockStartPos
        };
      }
    }
  }
  _blockStartPos(blockIndex) {
    return this._blocks.slice(0, blockIndex).reduce((pos, b) => pos += b.displayValue.length, 0);
  }
  _forEachBlocksInRange(fromPos, toPos, fn) {
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    const fromBlockIter = this._mapPosToBlock(fromPos);
    if (fromBlockIter) {
      const toBlockIter = this._mapPosToBlock(toPos);
      // process first block
      const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
      const fromBlockStartPos = fromBlockIter.offset;
      const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].displayValue.length;
      fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
      if (toBlockIter && !isSameBlock) {
        // process intermediate blocks
        for (let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
          fn(this._blocks[bi], bi, 0, this._blocks[bi].displayValue.length);
        }

        // process last block
        fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
      }
    }
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    const removeDetails = super.remove(fromPos, toPos);
    this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
      removeDetails.aggregate(b.remove(bFromPos, bToPos));
    });
    return removeDetails;
  }
  nearestInputPos(cursorPos, direction) {
    if (direction === void 0) {
      direction = _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE;
    }
    if (!this._blocks.length) return 0;
    const cursor = new _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_6__["default"](this, cursorPos);
    if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE) {
      // -------------------------------------------------
      // NONE should only go out from fixed to the right!
      // -------------------------------------------------
      if (cursor.pushRightBeforeInput()) return cursor.pos;
      cursor.popState();
      if (cursor.pushLeftBeforeInput()) return cursor.pos;
      return this.displayValue.length;
    }

    // FORCE is only about a|* otherwise is 0
    if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_LEFT) {
      // try to break fast when *|a
      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT) {
        cursor.pushRightBeforeFilled();
        if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
        cursor.popState();
      }

      // forward flow
      cursor.pushLeftBeforeInput();
      cursor.pushLeftBeforeRequired();
      cursor.pushLeftBeforeFilled();

      // backward flow
      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT) {
        cursor.pushRightBeforeInput();
        cursor.pushRightBeforeRequired();
        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
        cursor.popState();
        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
        cursor.popState();
      }
      if (cursor.ok) return cursor.pos;
      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_LEFT) return 0;
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      return 0;
    }
    if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.RIGHT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_RIGHT) {
      // forward flow
      cursor.pushRightBeforeInput();
      cursor.pushRightBeforeRequired();
      if (cursor.pushRightBeforeFilled()) return cursor.pos;
      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_RIGHT) return this.displayValue.length;

      // backward flow
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      return this.nearestInputPos(cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT);
    }
    return cursorPos;
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    let total = 0;
    this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
      total += b.totalInputPositions(bFromPos, bToPos);
    });
    return total;
  }

  /** Get block by name */
  maskedBlock(name) {
    return this.maskedBlocks(name)[0];
  }

  /** Get all blocks by name */
  maskedBlocks(name) {
    const indices = this._maskedBlocks[name];
    if (!indices) return [];
    return indices.map(gi => this._blocks[gi]);
  }
  pad(flags) {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._forEachBlocksInRange(0, this.displayValue.length, b => details.aggregate(b.pad(flags)));
    return details;
  }
}
MaskedPattern.DEFAULTS = {
  ..._base_js__WEBPACK_IMPORTED_MODULE_3__["default"].DEFAULTS,
  lazy: true,
  placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.InputDefinition = _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__["default"];
MaskedPattern.FixedDefinition = _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_7__["default"];
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedPattern = MaskedPattern;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js":
/*!*********************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/chunk-tail-details.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ChunksTailDetails; }
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");





class ChunksTailDetails {
  /** */

  constructor(chunks, from) {
    if (chunks === void 0) {
      chunks = [];
    }
    if (from === void 0) {
      from = 0;
    }
    this.chunks = chunks;
    this.from = from;
  }
  toString() {
    return this.chunks.map(String).join('');
  }
  extend(tailChunk) {
    if (!String(tailChunk)) return;
    tailChunk = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.isString)(tailChunk) ? new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tailChunk)) : tailChunk;
    const lastChunk = this.chunks[this.chunks.length - 1];
    const extendLast = lastChunk && (
    // if stops are same or tail has no stop
    lastChunk.stop === tailChunk.stop || tailChunk.stop == null) &&
    // if tail chunk goes just after last chunk
    tailChunk.from === lastChunk.from + lastChunk.toString().length;
    if (tailChunk instanceof _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      // check the ability to extend previous chunk
      if (extendLast) {
        // extend previous chunk
        lastChunk.extend(tailChunk.toString());
      } else {
        // append new chunk
        this.chunks.push(tailChunk);
      }
    } else if (tailChunk instanceof ChunksTailDetails) {
      if (tailChunk.stop == null) {
        // unwrap floating chunks to parent, keeping `from` pos
        let firstTailChunk;
        while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
          firstTailChunk = tailChunk.chunks.shift(); // not possible to be `undefined` because length was checked above
          firstTailChunk.from += tailChunk.from;
          this.extend(firstTailChunk);
        }
      }

      // if tail chunk still has value
      if (tailChunk.toString()) {
        // if chunks contains stops, then popup stop to container
        tailChunk.stop = tailChunk.blockIndex;
        this.chunks.push(tailChunk);
      }
    }
  }
  appendTo(masked) {
    if (!(masked instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedPattern)) {
      const tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.toString());
      return tail.appendTo(masked);
    }
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    for (let ci = 0; ci < this.chunks.length; ++ci) {
      const chunk = this.chunks[ci];
      const lastBlockIter = masked._mapPosToBlock(masked.displayValue.length);
      const stop = chunk.stop;
      let chunkBlock;
      if (stop != null && (
      // if block not found or stop is behind lastBlock
      !lastBlockIter || lastBlockIter.index <= stop)) {
        if (chunk instanceof ChunksTailDetails ||
        // for continuous block also check if stop is exist
        masked._stops.indexOf(stop) >= 0) {
          details.aggregate(masked._appendPlaceholder(stop));
        }
        chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
      }
      if (chunkBlock) {
        const tailDetails = chunkBlock.appendTail(chunk);
        details.aggregate(tailDetails);

        // get not inserted chars
        const remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
        if (remainChars) details.aggregate(masked.append(remainChars, {
          tail: true
        }));
      } else {
        details.aggregate(masked.append(chunk.toString(), {
          tail: true
        }));
      }
    }
    return details;
  }
  get state() {
    return {
      chunks: this.chunks.map(c => c.state),
      from: this.from,
      stop: this.stop,
      blockIndex: this.blockIndex
    };
  }
  set state(state) {
    const {
      chunks,
      ...props
    } = state;
    Object.assign(this, props);
    this.chunks = chunks.map(cstate => {
      const chunk = "chunks" in cstate ? new ChunksTailDetails() : new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      chunk.state = cstate;
      return chunk;
    });
  }
  unshift(beforePos) {
    if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
    const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
    let ci = 0;
    while (ci < this.chunks.length) {
      const chunk = this.chunks[ci];
      const shiftChar = chunk.unshift(chunkShiftPos);
      if (chunk.toString()) {
        // chunk still contains value
        // but not shifted - means no more available chars to shift
        if (!shiftChar) break;
        ++ci;
      } else {
        // clean if chunk has no value
        this.chunks.splice(ci, 1);
      }
      if (shiftChar) return shiftChar;
    }
    return '';
  }
  shift() {
    if (!this.chunks.length) return '';
    let ci = this.chunks.length - 1;
    while (0 <= ci) {
      const chunk = this.chunks[ci];
      const shiftChar = chunk.shift();
      if (chunk.toString()) {
        // chunk still contains value
        // but not shifted - means no more available chars to shift
        if (!shiftChar) break;
        --ci;
      } else {
        // clean if chunk has no value
        this.chunks.splice(ci, 1);
      }
      if (shiftChar) return shiftChar;
    }
    return '';
  }
}




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/cursor.js":
/*!*********************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/cursor.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PatternCursor; }
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");


class PatternCursor {
  constructor(masked, pos) {
    this.masked = masked;
    this._log = [];
    const {
      offset,
      index
    } = masked._mapPosToBlock(pos) || (pos < 0 ?
    // first
    {
      index: 0,
      offset: 0
    } :
    // last
    {
      index: this.masked._blocks.length,
      offset: 0
    });
    this.offset = offset;
    this.index = index;
    this.ok = false;
  }
  get block() {
    return this.masked._blocks[this.index];
  }
  get pos() {
    return this.masked._blockStartPos(this.index) + this.offset;
  }
  get state() {
    return {
      index: this.index,
      offset: this.offset,
      ok: this.ok
    };
  }
  set state(s) {
    Object.assign(this, s);
  }
  pushState() {
    this._log.push(this.state);
  }
  popState() {
    const s = this._log.pop();
    if (s) this.state = s;
    return s;
  }
  bindBlock() {
    if (this.block) return;
    if (this.index < 0) {
      this.index = 0;
      this.offset = 0;
    }
    if (this.index >= this.masked._blocks.length) {
      this.index = this.masked._blocks.length - 1;
      this.offset = this.block.displayValue.length; // TODO this is stupid type error, `block` depends on index that was changed above
    }
  }
  _pushLeft(fn) {
    this.pushState();
    for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) == null ? void 0 : _this$block.displayValue.length) || 0) {
      var _this$block;
      if (fn()) return this.ok = true;
    }
    return this.ok = false;
  }
  _pushRight(fn) {
    this.pushState();
    for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
      if (fn()) return this.ok = true;
    }
    return this.ok = false;
  }
  pushLeftBeforeFilled() {
    return this._pushLeft(() => {
      if (this.block.isFixed || !this.block.value) return;
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_LEFT);
      if (this.offset !== 0) return true;
    });
  }
  pushLeftBeforeInput() {
    // cases:
    // filled input: 00|
    // optional empty input: 00[]|
    // nested block: XX<[]>|
    return this._pushLeft(() => {
      if (this.block.isFixed) return;
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.LEFT);
      return true;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.LEFT);
      return true;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (this.block.isFixed || !this.block.value) return;
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_RIGHT);
      if (this.offset !== this.block.value.length) return true;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (this.block.isFixed) return;

      // const o = this.offset;
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE);
      // HACK cases like (STILL DOES NOT WORK FOR NESTED)
      // aa|X
      // aa<X|[]>X_    - this will not work
      // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
      return true;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (this.block.isFixed || this.block.isOptional && !this.block.value) return;

      // TODO check |[*]XX_
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE);
      return true;
    });
  }
}




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/fixed-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/fixed-definition.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PatternFixedDefinition; }
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");





class PatternFixedDefinition {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  constructor(opts) {
    Object.assign(this, opts);
    this._value = '';
    this.isFixed = true;
  }
  get value() {
    return this._value;
  }
  get unmaskedValue() {
    return this.isUnmasking ? this.value : '';
  }
  get rawInputValue() {
    return this._isRawInput ? this.value : '';
  }
  get displayValue() {
    return this.value;
  }
  reset() {
    this._isRawInput = false;
    this._value = '';
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this._value.length;
    }
    this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
    if (!this._value) this._isRawInput = false;
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  nearestInputPos(cursorPos, direction) {
    if (direction === void 0) {
      direction = _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE;
    }
    const minPos = 0;
    const maxPos = this._value.length;
    switch (direction) {
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT:
        return minPos;
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.RIGHT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_RIGHT:
      default:
        return maxPos;
    }
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this._value.length;
    }
    return this._isRawInput ? toPos - fromPos : 0;
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this._value.length;
    }
    if (flags === void 0) {
      flags = {};
    }
    return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
  }
  get isComplete() {
    return true;
  }
  get isFilled() {
    return Boolean(this._value);
  }
  _appendChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    if (this.isFilled) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const appendEager = this.eager === true || this.eager === 'append';
    const appended = this.char === ch;
    const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      inserted: this.char,
      rawInserted: isResolved ? this.char : ''
    });
    this._value = this.char;
    this._isRawInput = isResolved && (flags.raw || flags.input);
    return details;
  }
  _appendEager() {
    return this._appendChar(this.char, {
      tail: true
    });
  }
  _appendPlaceholder() {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (this.isFilled) return details;
    this._value = details.inserted = this.char;
    return details;
  }
  extractTail() {
    return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]('');
  }
  appendTail(tail) {
    if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.isString)(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tail));
    return tail.appendTo(this);
  }
  append(str, flags, tail) {
    const details = this._appendChar(str[0], flags);
    if (tail != null) {
      details.tailShift += this.appendTail(tail).tailShift;
    }
    return details;
  }
  doCommit() {}
  get state() {
    return {
      _value: this._value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(state) {
    this._value = state._value;
    this._isRawInput = Boolean(state._rawInputValue);
  }
  pad(flags) {
    return this._appendPlaceholder();
  }
}




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/input-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/input-definition.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PatternInputDefinition; }
/* harmony export */ });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");





class PatternInputDefinition {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  constructor(opts) {
    const {
      parent,
      isOptional,
      placeholderChar,
      displayChar,
      lazy,
      eager,
      ...maskOpts
    } = opts;
    this.masked = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(maskOpts);
    Object.assign(this, {
      parent,
      isOptional,
      placeholderChar,
      displayChar,
      lazy,
      eager
    });
  }
  reset() {
    this.isFilled = false;
    this.masked.reset();
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.value.length;
    }
    if (fromPos === 0 && toPos >= 1) {
      this.isFilled = false;
      return this.masked.remove(fromPos, toPos);
    }
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
  get value() {
    return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
  }
  get unmaskedValue() {
    return this.masked.unmaskedValue;
  }
  get rawInputValue() {
    return this.masked.rawInputValue;
  }
  get displayValue() {
    return this.masked.value && this.displayChar || this.value;
  }
  get isComplete() {
    return Boolean(this.masked.value) || this.isOptional;
  }
  _appendChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    if (this.isFilled) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const state = this.masked.state;
    // simulate input
    let details = this.masked._appendChar(ch, this.currentMaskFlags(flags));
    if (details.inserted && this.doValidate(flags) === false) {
      details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.masked.state = state;
    }
    if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
      details.inserted = this.placeholderChar;
    }
    details.skip = !details.inserted && !this.isOptional;
    this.isFilled = Boolean(details.inserted);
    return details;
  }
  append(str, flags, tail) {
    // TODO probably should be done via _appendChar
    return this.masked.append(str, this.currentMaskFlags(flags), tail);
  }
  _appendPlaceholder() {
    if (this.isFilled || this.isOptional) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.isFilled = true;
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      inserted: this.placeholderChar
    });
  }
  _appendEager() {
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
  extractTail(fromPos, toPos) {
    return this.masked.extractTail(fromPos, toPos);
  }
  appendTail(tail) {
    return this.masked.appendTail(tail);
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.value.length;
    }
    return this.masked.extractInput(fromPos, toPos, flags);
  }
  nearestInputPos(cursorPos, direction) {
    if (direction === void 0) {
      direction = _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE;
    }
    const minPos = 0;
    const maxPos = this.value.length;
    const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
    switch (direction) {
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_LEFT:
        return this.isComplete ? boundPos : minPos;
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.RIGHT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_RIGHT:
        return this.isComplete ? boundPos : maxPos;
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE:
      default:
        return boundPos;
    }
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.value.length;
    }
    return this.value.slice(fromPos, toPos).length;
  }
  doValidate(flags) {
    return this.masked.doValidate(this.currentMaskFlags(flags)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(flags)));
  }
  doCommit() {
    this.masked.doCommit();
  }
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue,
      masked: this.masked.state,
      isFilled: this.isFilled
    };
  }
  set state(state) {
    this.masked.state = state.masked;
    this.isFilled = state.isFilled;
  }
  currentMaskFlags(flags) {
    var _flags$_beforeTailSta;
    return {
      ...flags,
      _beforeTailState: (flags == null || (_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.masked) || (flags == null ? void 0 : flags._beforeTailState)
    };
  }
  pad(flags) {
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}
PatternInputDefinition.DEFAULT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};




/***/ }),

/***/ "./node_modules/imask/esm/masked/pipe.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/pipe.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PIPE_TYPE: function() { return /* binding */ PIPE_TYPE; },
/* harmony export */   createPipe: function() { return /* binding */ createPipe; },
/* harmony export */   pipe: function() { return /* binding */ pipe; }
/* harmony export */ });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");




/** Mask pipe source and destination types */
const PIPE_TYPE = {
  MASKED: 'value',
  UNMASKED: 'unmaskedValue',
  TYPED: 'typedValue'
};
/** Creates new pipe function depending on mask type, source and destination options */
function createPipe(arg, from, to) {
  if (from === void 0) {
    from = PIPE_TYPE.MASKED;
  }
  if (to === void 0) {
    to = PIPE_TYPE.MASKED;
  }
  const masked = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arg);
  return value => masked.runIsolated(m => {
    m[from] = value;
    return m[to];
  });
}

/** Pipes value through mask depending on mask type, source and destination options */
function pipe(value, mask, from, to) {
  return createPipe(mask, from, to)(value);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].PIPE_TYPE = PIPE_TYPE;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createPipe = createPipe;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].pipe = pipe;




/***/ }),

/***/ "./node_modules/imask/esm/masked/range.js":
/*!************************************************!*\
  !*** ./node_modules/imask/esm/masked/range.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MaskedRange; }
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");













/** Pattern which accepts ranges */
class MaskedRange extends _pattern_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  /**
    Optionally sets max length of pattern.
    Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
  */

  /** Min bound */

  /** Max bound */

  get _matchFrom() {
    return this.maxLength - String(this.from).length;
  }
  constructor(opts) {
    super(opts); // mask will be created in _update
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const {
      to = this.to || 0,
      from = this.from || 0,
      maxLength = this.maxLength || 0,
      autofix = this.autofix,
      ...patternOpts
    } = opts;
    this.to = to;
    this.from = from;
    this.maxLength = Math.max(String(to).length, maxLength);
    this.autofix = autofix;
    const fromStr = String(this.from).padStart(this.maxLength, '0');
    const toStr = String(this.to).padStart(this.maxLength, '0');
    let sameCharsCount = 0;
    while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) ++sameCharsCount;
    patternOpts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(this.maxLength - sameCharsCount);
    super._update(patternOpts);
  }
  get isComplete() {
    return super.isComplete && Boolean(this.value);
  }
  boundaries(str) {
    let minstr = '';
    let maxstr = '';
    const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
    if (num) {
      minstr = '0'.repeat(placeholder.length) + num;
      maxstr = '9'.repeat(placeholder.length) + num;
    }
    minstr = minstr.padEnd(this.maxLength, '0');
    maxstr = maxstr.padEnd(this.maxLength, '9');
    return [minstr, maxstr];
  }
  doPrepareChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    let details;
    [ch, details] = super.doPrepareChar(ch.replace(/\D/g, ''), flags);
    if (!ch) details.skip = !this.isComplete;
    return [ch, details];
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    if (!this.autofix || this.value.length + 1 > this.maxLength) return super._appendCharRaw(ch, flags);
    const fromStr = String(this.from).padStart(this.maxLength, '0');
    const toStr = String(this.to).padStart(this.maxLength, '0');
    const [minstr, maxstr] = this.boundaries(this.value + ch);
    if (Number(maxstr) < this.from) return super._appendCharRaw(fromStr[this.value.length], flags);
    if (Number(minstr) > this.to) {
      if (!flags.tail && this.autofix === 'pad' && this.value.length + 1 < this.maxLength) {
        return super._appendCharRaw(fromStr[this.value.length], flags).aggregate(this._appendCharRaw(ch, flags));
      }
      return super._appendCharRaw(toStr[this.value.length], flags);
    }
    return super._appendCharRaw(ch, flags);
  }
  doValidate(flags) {
    const str = this.value;
    const firstNonZero = str.search(/[^0]/);
    if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
    const [minstr, maxstr] = this.boundaries(str);
    return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(flags);
  }
  pad(flags) {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (this.value.length === this.maxLength) return details;
    const value = this.value;
    const padLength = this.maxLength - this.value.length;
    if (padLength) {
      this.reset();
      for (let i = 0; i < padLength; ++i) {
        details.aggregate(super._appendCharRaw('0', flags));
      }

      // append tail
      value.split('').forEach(ch => this._appendCharRaw(ch));
    }
    return details;
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedRange = MaskedRange;




/***/ }),

/***/ "./node_modules/imask/esm/masked/regexp.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/regexp.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MaskedRegExp; }
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");






/** Masking by RegExp */
class MaskedRegExp extends _base_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** */

  /** Enable characters overwriting */

  /** */

  /** */

  /** */

  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const mask = opts.mask;
    if (mask) opts.validate = value => value.search(mask) >= 0;
    super._update(opts);
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedRegExp = MaskedRegExp;




/***/ }),

/***/ "./node_modules/imask/esm/masked/repeat.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/repeat.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RepeatBlock; }
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");













/** Pattern mask */
class RepeatBlock extends _pattern_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  get repeatFrom() {
    var _ref;
    return (_ref = Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === Infinity ? 0 : this.repeat) != null ? _ref : 0;
  }
  get repeatTo() {
    var _ref2;
    return (_ref2 = Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) != null ? _ref2 : Infinity;
  }
  constructor(opts) {
    super(opts);
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    var _ref3, _ref4, _this$_blocks;
    const {
      repeat,
      ...blockOpts
    } = (0,_factory_js__WEBPACK_IMPORTED_MODULE_2__.normalizeOpts)(opts); // TODO type
    this._blockOpts = Object.assign({}, this._blockOpts, blockOpts);
    const block = (0,_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this._blockOpts);
    this.repeat = (_ref3 = (_ref4 = repeat != null ? repeat : block.repeat) != null ? _ref4 : this.repeat) != null ? _ref3 : Infinity; // TODO type

    super._update({
      mask: 'm'.repeat(Math.max(this.repeatTo === Infinity && ((_this$_blocks = this._blocks) == null ? void 0 : _this$_blocks.length) || 0, this.repeatFrom)),
      blocks: {
        m: block
      },
      eager: block.eager,
      overwrite: block.overwrite,
      skipInvalid: block.skipInvalid,
      lazy: block.lazy,
      placeholderChar: block.placeholderChar,
      displayChar: block.displayChar
    });
  }
  _allocateBlock(bi) {
    if (bi < this._blocks.length) return this._blocks[bi];
    if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) {
      this._blocks.push((0,_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this._blockOpts));
      this.mask += 'm';
      return this._blocks[this._blocks.length - 1];
    }
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    for (let bi = (_this$_mapPosToBlock$ = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index) != null ? _this$_mapPosToBlock$ : Math.max(this._blocks.length - 1, 0), block, allocated;
    // try to get a block or
    // try to allocate a new block if not allocated already
    block = (_this$_blocks$bi = this._blocks[bi]) != null ? _this$_blocks$bi : allocated = !allocated && this._allocateBlock(bi); ++bi) {
      var _this$_mapPosToBlock$, _this$_mapPosToBlock, _this$_blocks$bi, _flags$_beforeTailSta;
      const blockDetails = block._appendChar(ch, {
        ...flags,
        _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
      });
      if (blockDetails.skip && allocated) {
        // remove the last allocated block and break
        this._blocks.pop();
        this.mask = this.mask.slice(1);
        break;
      }
      details.aggregate(blockDetails);
      if (blockDetails.consumed) break; // go next char
    }
    return details;
  }
  _trimEmptyTail(fromPos, toPos) {
    var _this$_mapPosToBlock2, _this$_mapPosToBlock3;
    if (fromPos === void 0) {
      fromPos = 0;
    }
    const firstBlockIndex = Math.max(((_this$_mapPosToBlock2 = this._mapPosToBlock(fromPos)) == null ? void 0 : _this$_mapPosToBlock2.index) || 0, this.repeatFrom, 0);
    let lastBlockIndex;
    if (toPos != null) lastBlockIndex = (_this$_mapPosToBlock3 = this._mapPosToBlock(toPos)) == null ? void 0 : _this$_mapPosToBlock3.index;
    if (lastBlockIndex == null) lastBlockIndex = this._blocks.length - 1;
    let removeCount = 0;
    for (let blockIndex = lastBlockIndex; firstBlockIndex <= blockIndex; --blockIndex, ++removeCount) {
      if (this._blocks[blockIndex].unmaskedValue) break;
    }
    if (removeCount) {
      this._blocks.splice(lastBlockIndex - removeCount + 1, removeCount);
      this.mask = this.mask.slice(removeCount);
    }
  }
  reset() {
    super.reset();
    this._trimEmptyTail();
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    const removeDetails = super.remove(fromPos, toPos);
    this._trimEmptyTail(fromPos, toPos);
    return removeDetails;
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos == null && this.repeatTo === Infinity) return Infinity;
    return super.totalInputPositions(fromPos, toPos);
  }
  get state() {
    return super.state;
  }
  set state(state) {
    this._blocks.length = state._blocks.length;
    this.mask = this.mask.slice(0, this._blocks.length);
    super.state = state;
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].RepeatBlock = RepeatBlock;




/***/ }),

/***/ "./src/scripts/components/Base.ts":
/*!****************************************!*\
  !*** ./src/scripts/components/Base.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Base; }
/* harmony export */ });
class Base {
    getProxyState(initialState) {
        return new Proxy(initialState, {
            get: (target, prop) => target[prop],
            set: (target, prop, newValue) => {
                const oldValue = target[prop];
                target[prop] = newValue;
                if (newValue !== oldValue) {
                    this.updateUI();
                }
                return true;
            },
        });
    }
    updateUI() {
        throw new Error('Необходимо реализовать метод updateUI');
    }
}


/***/ }),

/***/ "./src/scripts/components/Booking/index.ts":
/*!*************************************************!*\
  !*** ./src/scripts/components/Booking/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Booking: function() { return /* binding */ Booking; }
/* harmony export */ });
/* harmony import */ var _components_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Base */ "./src/scripts/components/Base.ts");
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
/* harmony import */ var _utils_JQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/JQuery */ "./src/scripts/utils/JQuery.ts");



class RequiredFields extends _components_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    form;
    name;
    phone;
    date;
    car;
    selectors = {
        form: '[data-js-form]',
        inputName: '#name',
        inputPhone: '#phone',
        inputDate: '#date',
        carSelect: '#select',
        submitButton: '[data-js-button]',
    };
    constructor() {
        super();
        this.init();
    }
    init() {
        this.form = (0,_utils_JQuery__WEBPACK_IMPORTED_MODULE_2__.$)(this.selectors.form);
        this.name = (0,_utils_JQuery__WEBPACK_IMPORTED_MODULE_2__.$)(this.selectors.inputName);
        this.phone = (0,_utils_JQuery__WEBPACK_IMPORTED_MODULE_2__.$)(this.selectors.inputPhone);
        this.date = (0,_utils_JQuery__WEBPACK_IMPORTED_MODULE_2__.$)(this.selectors.inputDate);
        this.car = (0,_utils_JQuery__WEBPACK_IMPORTED_MODULE_2__.$)(this.selectors.carSelect);
        (0,imask__WEBPACK_IMPORTED_MODULE_1__["default"])(document.getElementById('phone'), {
            mask: '+7 (000) 000-00-00',
            lazy: true,
        });
        this.bindEvents();
    }
    bindEvents() {
        this.form.on('submit', (event) => {
            event.preventDefault();
            if (this.validateForm()) {
                this.name.clear();
                this.phone.clear();
                this.date.clear();
                this.car.clear();
                alert('Заявка отправлена, в ближайшее время мы с вами свяжемся, спасибо!');
            }
            else {
                alert('Заполните все поля!');
            }
        });
    }
    validateForm() {
        if (!this.name.val() || !this.phone.val() || !this.date.val() || !this.car.val()) {
            return false;
        }
        return true;
    }
}
class Booking extends RequiredFields {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "./src/scripts/components/Button/index.ts":
/*!************************************************!*\
  !*** ./src/scripts/components/Button/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var _components_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Base */ "./src/scripts/components/Base.ts");
/* harmony import */ var _utils_JQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/JQuery */ "./src/scripts/utils/JQuery.ts");


/** Компонент кнопки с эффектом вспышки */
class Button extends _components_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    buttonsElements = [];
    selectors = {
        button: '[data-js-button]',
    };
    init() {
        this.bindEvents();
    }
    /**
     * @constructor
     * @this {Button}
     * @description
     *   Конструктор класса.
     *   Инициализирует properties, ищет все кнопки на странице
     *   с атрибутом data-js-button, инициализирует кнопки, и
     *   привязывает обработчик события клика.
     */
    constructor() {
        super();
        const $button = (0,_utils_JQuery__WEBPACK_IMPORTED_MODULE_1__.$)(this.selectors.button);
        this.buttonsElements = $button.findAll(this.selectors.button);
        this.init();
    }
    /**
     * Обработчик события клика на кнопку.
     * @function
     * @private
     * @this {Button}
     * @param {Event} event - событие
     * @param {HTMLElement} target - целевой эелемент
     * @return {void}
     */
    bindEvents() {
        this.buttonsElements.forEach(element => {
            element.on('click', (event) => {
                const mouseEvent = event;
                const target = mouseEvent.target;
                this.rippleEffect(mouseEvent, target);
            });
        });
    }
    /**
     * Создает эффект вспышки (ripple) на кнопке
     * @function
     * @private
     * @this {Button}
     * @param {MouseEvent} event - событие
     * @param {HTMLElement} target - целевой эелемент
     * @return {void}
     */
    rippleEffect(event, target) {
        const span = document.createElement('span');
        const rect = target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        span.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s ease-out forwards;
    `;
        target.setAttribute('style', 'position: relative; overflow: hidden;');
        target.appendChild(span);
        setTimeout(() => {
            span.remove();
        }, 600);
    }
}


/***/ }),

/***/ "./src/scripts/components/Card/index.ts":
/*!**********************************************!*\
  !*** ./src/scripts/components/Card/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
/* harmony import */ var _components_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Base */ "./src/scripts/components/Base.ts");

class Card extends _components_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    observer;
    options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    };
    selectors = {
        card: '.car-card, .feature',
    };
    constructor() {
        super();
        this.observer = null;
        this.init();
    }
    /**
       * Метод инициализации.
       *
       * Он вызывает два метода:
       * 1. bindEvents - привязывает все события к компонентам.
       * 2. createObserver - создает наблюдателя за пересечениями, который отображает карточки
       *, когда они появляются в окне просмотра.
       */
    init() {
        this.bindEvents();
    }
    bindEvents() {
        this.createObserver();
    }
    /**
       * Метод создает для компонентов карт observer.
       * Анимация определяется в CSS и запускается, когда компонент пересекается с окном просмотра.
       *
       * @private
       */
    createObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    entry.target.classList.add('animate-emersion');
                }
                else {
                    entry.target.classList.remove('animate-emersion');
                }
            });
        }, this.options);
        const animatedElements = document.querySelectorAll(this.selectors.card);
        animatedElements.forEach((el) => {
            this.observer?.observe(el);
        });
    }
    updateUI() {
        console.log('UI updated!');
    }
}


/***/ }),

/***/ "./src/scripts/components/Header/index.ts":
/*!************************************************!*\
  !*** ./src/scripts/components/Header/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/** Класс компонента HeaderItem реализует поведение Header при скролле */
class HeaderScroll {
    element;
    lastScrollY;
    elementClassName = {
        headerScroll: '.header',
    };
    constructor() {
        this.element = document.querySelector(this.elementClassName.headerScroll);
        this.lastScrollY = window.scrollY;
        this.init();
    }
    init() {
        this.bindEvents();
    }
    bindEvents() {
        this.attachScrollEffect();
    }
    attachScrollEffect() {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 100) {
                this.element?.classList.add('animate-color-header');
            }
            else {
                this.element?.classList.remove('animate-color-header');
            }
            this.lastScrollY = currentScrollY;
        });
    }
}
/** Класс компонента HeaderItem */
class HeaderItem extends HeaderScroll {
    constructor() {
        super();
    }
}
/** Компонент Header */
class Header extends HeaderItem {
}


/***/ }),

/***/ "./src/scripts/utils/JQuery.ts":
/*!*************************************!*\
  !*** ./src/scripts/utils/JQuery.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: function() { return /* binding */ $; },
/* harmony export */   JQuery: function() { return /* binding */ JQuery; }
/* harmony export */ });
class JQuery {
    rootElement;
    constructor(selector, rootElement = null) {
        if (typeof selector === 'string') {
            if (rootElement) {
                this.rootElement = rootElement.querySelector(selector);
            }
            else {
                this.rootElement = document.querySelector(selector);
            }
        }
        else {
            this.rootElement = selector;
        }
        if (!this.rootElement) {
            throw new Error(`Элемент "${selector}" не найден.`);
        }
    }
    find(selector) {
        return new JQuery(selector, this.rootElement);
    }
    findAll(selector) {
        const elements = [];
        document.querySelectorAll(selector).forEach(element => {
            elements.push(new JQuery(element));
        });
        if (!elements.length) {
            throw new Error(`Элементы "${selector}" не найдены.`);
        }
        return elements;
    }
    on(action, cb) {
        this.rootElement.addEventListener(action, cb);
        return this;
    }
    classToggle(token, force) {
        if (force !== undefined) {
            this.rootElement.classList.toggle(token, force);
            return this;
        }
        this.rootElement.classList.toggle(token);
        return this;
    }
    classContains(className) {
        return this.rootElement.classList.contains(className);
    }
    classAdd(className) {
        this.rootElement.classList.add(className);
        return this;
    }
    classRemove(className) {
        this.rootElement.classList.remove(className);
        return this;
    }
    attr(qualifiedName, value) {
        this.rootElement.setAttribute(qualifiedName, value);
        return this;
    }
    focus() {
        ;
        this.rootElement.focus();
        return this;
    }
    play() {
        const videoElement = this.rootElement;
        videoElement.play().then();
        videoElement.controls = true;
        return this;
    }
    pause() {
        const videoElement = this.rootElement;
        videoElement.pause();
        videoElement.controls = false;
        return this;
    }
    getElement() {
        return this.rootElement;
    }
    val() {
        switch (this.rootElement.tagName.toLowerCase()) {
            case 'input':
            case 'textarea':
                return this.rootElement.value || '';
            case 'select':
                return this.rootElement.value || '';
            default:
                throw new Error('Невозможно извлечь значение для данного элемента.');
        }
    }
    clear() {
        switch (this.rootElement.tagName.toLowerCase()) {
            case 'input':
            case 'textarea': // Поле ввода текста или textarea
                this.rootElement.value = '';
                break;
            case 'select': // Выпадающий список
                this.rootElement.selectedIndex = -1;
                break;
            default:
                throw new Error('Невозможно очистить данное поле.');
        }
        return this;
    }
}
const $ = (selector) => {
    return new JQuery(selector);
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modernizr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modernizr.js */ "./modernizr.js");
/* harmony import */ var _modernizr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modernizr_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Button */ "./src/scripts/components/Button/index.ts");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card */ "./src/scripts/components/Card/index.ts");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ "./src/scripts/components/Header/index.ts");
/* harmony import */ var _components_Booking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Booking */ "./src/scripts/components/Booking/index.ts");





new _components_Button__WEBPACK_IMPORTED_MODULE_1__["default"]();
new _components_Card__WEBPACK_IMPORTED_MODULE_2__["default"]();
new _components_Header__WEBPACK_IMPORTED_MODULE_3__["default"]();
new _components_Booking__WEBPACK_IMPORTED_MODULE_4__.Booking();

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0RBQWE7QUFDckMsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0RBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QU07QUFDVixJQUFJLHdEQUFJO0FBQ1IsSUFBSSwwREFBTTtBQUNWLElBQUksd0RBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbW9kZXJuaXpyLmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvbnRyb2xzL2h0bWwtY29udGVudGVkaXRhYmxlLW1hc2stZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb250cm9scy9odG1sLWlucHV0LW1hc2stZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb250cm9scy9odG1sLW1hc2stZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb250cm9scy9pbnB1dC1oaXN0b3J5LmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvbnRyb2xzL2lucHV0LmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvbnRyb2xzL21hc2stZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb3JlL2FjdGlvbi1kZXRhaWxzLmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvY2hhbmdlLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb3JlL2hvbGRlci5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb3JlL3V0aWxzLmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2luZGV4LmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9iYXNlLmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9kYXRlLmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9keW5hbWljLmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9lbnVtLmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9mYWN0b3J5LmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvbnVtYmVyLmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuLmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi9jdXJzb3IuanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9waXBlLmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9yYW5nZS5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcmVnZXhwLmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvQmFzZS50cyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Cb29raW5nL2luZGV4LnRzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvdXRpbHMvSlF1ZXJ5LnRzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIigoQSxlKT0+e3ZhciBpLG4sbz1bXSxhPXtfdmVyc2lvbjpcIjMuMTMuMVwiLF9jb25maWc6e2NsYXNzUHJlZml4OlwiXCIsZW5hYmxlQ2xhc3NlczohMCxlbmFibGVKU0NsYXNzOiEwLHVzZVByZWZpeGVzOiEwfSxfcTpbXSxvbjpmdW5jdGlvbihBLGUpe3ZhciBuPXRoaXM7c2V0VGltZW91dChmdW5jdGlvbigpe2UobltBXSl9LDApfSxhZGRUZXN0OmZ1bmN0aW9uKEEsZSxuKXtvLnB1c2goe25hbWU6QSxmbjplLG9wdGlvbnM6bn0pfSxhZGRBc3luY1Rlc3Q6ZnVuY3Rpb24oQSl7by5wdXNoKHtuYW1lOm51bGwsZm46QX0pfX0sbD1mdW5jdGlvbigpe30sdD0obC5wcm90b3R5cGU9YSxsPW5ldyBsLFtdKTtmdW5jdGlvbiBzKEEsZSl7cmV0dXJuIHR5cGVvZiBBPT09ZX1pPXZvaWQgMCE9PShuPXt9Lmhhc093blByb3BlcnR5KSYmdm9pZCAwIT09bi5jYWxsP2Z1bmN0aW9uKEEsZSl7cmV0dXJuIG4uY2FsbChBLGUpfTpmdW5jdGlvbihBLGUpe3JldHVybiBlIGluIEEmJnZvaWQgMD09PUEuY29uc3RydWN0b3IucHJvdG90eXBlW2VdfTt2YXIgcixjLGYsdSxnLGQscCxoPWUuZG9jdW1lbnRFbGVtZW50LG09XCJzdmdcIj09PWgubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtmdW5jdGlvbiB3KEEsZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIEEpZm9yKHZhciBuIGluIEEpaShBLG4pJiZ3KG4sQVtuXSk7ZWxzZXt2YXIgbz0oQT1BLnRvTG93ZXJDYXNlKCkpLnNwbGl0KFwiLlwiKSxhPWxbb1swXV07aWYodm9pZCAwIT09KGE9Mj09PW8ubGVuZ3RoP2Fbb1sxXV06YSkpcmV0dXJuIGw7ZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UoKTplLDE9PT1vLmxlbmd0aD9sW29bMF1dPWU6KCFsW29bMF1dfHxsW29bMF1daW5zdGFuY2VvZiBCb29sZWFufHwobFtvWzBdXT1uZXcgQm9vbGVhbihsW29bMF1dKSksbFtvWzBdXVtvWzFdXT1lKSxhPVsoZSYmITEhPT1lP1wiXCI6XCJuby1cIikrby5qb2luKFwiLVwiKV0sbz1oLmNsYXNzTmFtZSxzPWwuX2NvbmZpZy5jbGFzc1ByZWZpeHx8XCJcIixtJiYobz1vLmJhc2VWYWwpLGwuX2NvbmZpZy5lbmFibGVKU0NsYXNzJiYodD1uZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIrcytcIm5vLWpzKFxcXFxzfCQpXCIpLG89by5yZXBsYWNlKHQsXCIkMVwiK3MrXCJqcyQyXCIpKSxsLl9jb25maWcuZW5hYmxlQ2xhc3NlcyYmKDA8YS5sZW5ndGgmJihvKz1cIiBcIitzK2Euam9pbihcIiBcIitzKSksbT9oLmNsYXNzTmFtZS5iYXNlVmFsPW86aC5jbGFzc05hbWU9byksbC5fdHJpZ2dlcihBLGUpfXZhciB0LHM7cmV0dXJuIGx9Zm9yKHAgaW4gYS5fbD17fSxhLm9uPWZ1bmN0aW9uKEEsZSl7dGhpcy5fbFtBXXx8KHRoaXMuX2xbQV09W10pLHRoaXMuX2xbQV0ucHVzaChlKSxsLmhhc093blByb3BlcnR5KEEpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bC5fdHJpZ2dlcihBLGxbQV0pfSwwKX0sYS5fdHJpZ2dlcj1mdW5jdGlvbihBLGUpe3ZhciBuO3RoaXMuX2xbQV0mJihuPXRoaXMuX2xbQV0sc2V0VGltZW91dChmdW5jdGlvbigpe2Zvcih2YXIgQT0wO0E8bi5sZW5ndGg7QSsrKSgwLG5bQV0pKGUpfSwwKSxkZWxldGUgdGhpcy5fbFtBXSl9LGwuX3EucHVzaChmdW5jdGlvbigpe2EuYWRkVGVzdD13fSksbC5hZGRBc3luY1Rlc3QoZnVuY3Rpb24oKXt2YXIgbj1be3VyaTpcImRhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1JpUUFBQUJYUlVKUVZsQTRJQmdBQUFBd0FRQ2RBU29CQUFFQUF3QTBKYVFBQTNBQS92dVVBQUE9XCIsbmFtZTpcIndlYnBcIn0se3VyaTpcImRhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1Jrb0FBQUJYUlVKUVZsQTRXQW9BQUFBUUFBQUFBQUFBQUFBQVFVeFFTQXdBQUFBQkJ4QVIvUTlFUlA4REFBQldVRGdnR0FBQUFEQUJBSjBCS2dFQUFRQURBRFFscEFBRGNBRCsrLzFRQUE9PVwiLG5hbWU6XCJ3ZWJwLmFscGhhXCJ9LHt1cmk6XCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSbElBQUFCWFJVSlFWbEE0V0FvQUFBQVNBQUFBQUFBQUFBQUFRVTVKVFFZQUFBRC8vLy8vQUFCQlRrMUdKZ0FBQUFBQUFBQUFBQUFBQUFBQUFHUUFBQUJXVURoTURRQUFBQzhBQUFBUUJ4QVJFWWlJL2djQVwiLG5hbWU6XCJ3ZWJwLmFuaW1hdGlvblwifSx7dXJpOlwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmg0QUFBQlhSVUpRVmxBNFRCRUFBQUF2QUFBQUFBZlEvLzczdi8rQmlPaC9BQUE9XCIsbmFtZTpcIndlYnAubG9zc2xlc3NcIn1dLEE9bi5zaGlmdCgpO2Z1bmN0aW9uIG8obixBLG8pe3ZhciBhPW5ldyBJbWFnZTtmdW5jdGlvbiBlKEEpe3ZhciBlPSEoIUF8fFwibG9hZFwiIT09QS50eXBlKSYmMT09PWEud2lkdGg7dyhuLFwid2VicFwiPT09biYmZT9uZXcgQm9vbGVhbihlKTplKSxvJiZvKEEpfWEub25lcnJvcj1lLGEub25sb2FkPWUsYS5zcmM9QX1vKEEubmFtZSxBLnVyaSxmdW5jdGlvbihBKXtpZihBJiZcImxvYWRcIj09PUEudHlwZSlmb3IodmFyIGU9MDtlPG4ubGVuZ3RoO2UrKylvKG5bZV0ubmFtZSxuW2VdLnVyaSl9KX0pLGwuYWRkQXN5bmNUZXN0KGZ1bmN0aW9uKCl7dmFyIEE9bmV3IEltYWdlO0Eub25sb2FkPUEub25lcnJvcj1mdW5jdGlvbigpe3coXCJhdmlmXCIsMT09PUEud2lkdGgpfSxBLnNyYz1cImRhdGE6aW1hZ2UvYXZpZjtiYXNlNjQsQUFBQUlHWjBlWEJoZG1sbUFBQUFBR0YyYVdadGFXWXhiV2xoWmsxQk1VSUFBQUVjYldWMFlRQUFBQUFBQUFCSWFHUnNjZ0FBQUFBQUFBQUFjR2xqZEFBQUFBQUFBQUFBQUFBQUFHTmhkbWxtSUMwZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyeHBibXN0ZFM5allYWnBaZ0FBQUFBZWFXeHZZd0FBQUFBRVFBQUJBQUVBQUFBQUFVUUFBUUFBQUJjQUFBQXFhV2x1WmdFQUFBQUFBQUFCQUFBQUdtbHVabVVDQUFBQUFBRUFBR0YyTURGSmJXRm5aUUFBQUFBT2NHbDBiUUFBQUFBQUFRQUFBSEpwY0hKd0FBQUFVbWx3WTI4QUFBQVFjR0Z6Y0FBQUFBRUFBQUFCQUFBQUZHbHpjR1VBQUFBQUFBQUFBUUFBQUFFQUFBQVFjR2w0YVFBQUFBQURDQWdJQUFBQUZtRjJNVU9CQUF3QUNnZ1lBQVlJQ0dnSUlBQUFBQmhwY0cxaEFBQUFBQUFBQUFFQUFRVUJBb01EaEFBQUFCOXRaR0YwQ2dnWUFBWUlDR2dJSUJvRkhpQUFBRVFpQkFDd0RvQT1cIn0pLG8paWYoby5oYXNPd25Qcm9wZXJ0eShwKSl7aWYocj1bXSwoYz1vW3BdKS5uYW1lJiYoci5wdXNoKGMubmFtZS50b0xvd2VyQ2FzZSgpKSxjLm9wdGlvbnMpJiZjLm9wdGlvbnMuYWxpYXNlcyYmYy5vcHRpb25zLmFsaWFzZXMubGVuZ3RoKWZvcihmPTA7ZjxjLm9wdGlvbnMuYWxpYXNlcy5sZW5ndGg7ZisrKXIucHVzaChjLm9wdGlvbnMuYWxpYXNlc1tmXS50b0xvd2VyQ2FzZSgpKTtmb3IodT1zKGMuZm4sXCJmdW5jdGlvblwiKT9jLmZuKCk6Yy5mbixnPTA7ZzxyLmxlbmd0aDtnKyspMT09PShkPXJbZ10uc3BsaXQoXCIuXCIpKS5sZW5ndGg/bFtkWzBdXT11OihsW2RbMF1dJiYobFtkWzBdXSxsW2RbMF1daW5zdGFuY2VvZiBCb29sZWFuKXx8KGxbZFswXV09bmV3IEJvb2xlYW4obFtkWzBdXSkpLGxbZFswXV1bZFsxXV09dSksdC5wdXNoKCh1P1wiXCI6XCJuby1cIikrZC5qb2luKFwiLVwiKSl9ZGVsZXRlIGEuYWRkVGVzdCxkZWxldGUgYS5hZGRBc3luY1Rlc3Q7Zm9yKHZhciBCPTA7QjxsLl9xLmxlbmd0aDtCKyspbC5fcVtCXSgpO0EuTW9kZXJuaXpyPWx9KSh3aW5kb3csKHdpbmRvdyxkb2N1bWVudCkpOyIsImltcG9ydCBIVE1MTWFza0VsZW1lbnQgZnJvbSAnLi9odG1sLW1hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuL21hc2stZWxlbWVudC5qcyc7XG5cbmNsYXNzIEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCBleHRlbmRzIEhUTUxNYXNrRWxlbWVudCB7XG4gIC8qKiBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBzdGFydCAqL1xuICBnZXQgX3Vuc2FmZVNlbGVjdGlvblN0YXJ0KCkge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLnJvb3RFbGVtZW50O1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHJvb3QuZ2V0U2VsZWN0aW9uICYmIHJvb3QuZ2V0U2VsZWN0aW9uKCk7XG4gICAgY29uc3QgYW5jaG9yT2Zmc2V0ID0gc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQ7XG4gICAgY29uc3QgZm9jdXNPZmZzZXQgPSBzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0O1xuICAgIGlmIChmb2N1c09mZnNldCA9PSBudWxsIHx8IGFuY2hvck9mZnNldCA9PSBudWxsIHx8IGFuY2hvck9mZnNldCA8IGZvY3VzT2Zmc2V0KSB7XG4gICAgICByZXR1cm4gYW5jaG9yT2Zmc2V0O1xuICAgIH1cbiAgICByZXR1cm4gZm9jdXNPZmZzZXQ7XG4gIH1cblxuICAvKiogUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gZW5kICovXG4gIGdldCBfdW5zYWZlU2VsZWN0aW9uRW5kKCkge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLnJvb3RFbGVtZW50O1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHJvb3QuZ2V0U2VsZWN0aW9uICYmIHJvb3QuZ2V0U2VsZWN0aW9uKCk7XG4gICAgY29uc3QgYW5jaG9yT2Zmc2V0ID0gc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQ7XG4gICAgY29uc3QgZm9jdXNPZmZzZXQgPSBzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0O1xuICAgIGlmIChmb2N1c09mZnNldCA9PSBudWxsIHx8IGFuY2hvck9mZnNldCA9PSBudWxsIHx8IGFuY2hvck9mZnNldCA+IGZvY3VzT2Zmc2V0KSB7XG4gICAgICByZXR1cm4gYW5jaG9yT2Zmc2V0O1xuICAgIH1cbiAgICByZXR1cm4gZm9jdXNPZmZzZXQ7XG4gIH1cblxuICAvKiogU2V0cyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gKi9cbiAgX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgaWYgKCF0aGlzLnJvb3RFbGVtZW50LmNyZWF0ZVJhbmdlKSByZXR1cm47XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnJvb3RFbGVtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2Uuc2V0U3RhcnQodGhpcy5pbnB1dC5maXJzdENoaWxkIHx8IHRoaXMuaW5wdXQsIHN0YXJ0KTtcbiAgICByYW5nZS5zZXRFbmQodGhpcy5pbnB1dC5sYXN0Q2hpbGQgfHwgdGhpcy5pbnB1dCwgZW5kKTtcbiAgICBjb25zdCByb290ID0gdGhpcy5yb290RWxlbWVudDtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSByb290LmdldFNlbGVjdGlvbiAmJiByb290LmdldFNlbGVjdGlvbigpO1xuICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEhUTUxFbGVtZW50IHZhbHVlICovXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC50ZXh0Q29udGVudCB8fCAnJztcbiAgfVxuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLmlucHV0LnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH1cbn1cbklNYXNrLkhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCA9IEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudDtcblxuZXhwb3J0IHsgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50IGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBIVE1MTWFza0VsZW1lbnQgZnJvbSAnLi9odG1sLW1hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuL21hc2stZWxlbWVudC5qcyc7XG5cbi8qKiBCcmlkZ2UgYmV0d2VlbiBJbnB1dEVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXG5jbGFzcyBIVE1MSW5wdXRNYXNrRWxlbWVudCBleHRlbmRzIEhUTUxNYXNrRWxlbWVudCB7XG4gIC8qKiBJbnB1dEVsZW1lbnQgdG8gdXNlIG1hc2sgb24gKi9cblxuICBjb25zdHJ1Y3RvcihpbnB1dCkge1xuICAgIHN1cGVyKGlucHV0KTtcbiAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gIH1cblxuICAvKiogUmV0dXJucyBJbnB1dEVsZW1lbnQgc2VsZWN0aW9uIHN0YXJ0ICovXG4gIGdldCBfdW5zYWZlU2VsZWN0aW9uU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQgIT0gbnVsbCA/IHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQgOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIElucHV0RWxlbWVudCBzZWxlY3Rpb24gZW5kICovXG4gIGdldCBfdW5zYWZlU2VsZWN0aW9uRW5kKCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcbiAgfVxuXG4gIC8qKiBTZXRzIElucHV0RWxlbWVudCBzZWxlY3Rpb24gKi9cbiAgX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgdGhpcy5pbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5JTWFzay5IVE1MTWFza0VsZW1lbnQgPSBIVE1MTWFza0VsZW1lbnQ7XG5cbmV4cG9ydCB7IEhUTUxJbnB1dE1hc2tFbGVtZW50IGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBNYXNrRWxlbWVudCBmcm9tICcuL21hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuXG5jb25zdCBLRVlfWiA9IDkwO1xuY29uc3QgS0VZX1kgPSA4OTtcblxuLyoqIEJyaWRnZSBiZXR3ZWVuIEhUTUxFbGVtZW50IGFuZCB7QGxpbmsgTWFza2VkfSAqL1xuY2xhc3MgSFRNTE1hc2tFbGVtZW50IGV4dGVuZHMgTWFza0VsZW1lbnQge1xuICAvKiogSFRNTEVsZW1lbnQgdG8gdXNlIG1hc2sgb24gKi9cblxuICBjb25zdHJ1Y3RvcihpbnB1dCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgIHRoaXMuX29uS2V5ZG93biA9IHRoaXMuX29uS2V5ZG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uSW5wdXQgPSB0aGlzLl9vbklucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25CZWZvcmVpbnB1dCA9IHRoaXMuX29uQmVmb3JlaW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNvbXBvc2l0aW9uRW5kID0gdGhpcy5fb25Db21wb3NpdGlvbkVuZC5iaW5kKHRoaXMpO1xuICB9XG4gIGdldCByb290RWxlbWVudCgpIHtcbiAgICB2YXIgX3RoaXMkaW5wdXQkZ2V0Um9vdE5vLCBfdGhpcyRpbnB1dCRnZXRSb290Tm8yLCBfdGhpcyRpbnB1dDtcbiAgICByZXR1cm4gKF90aGlzJGlucHV0JGdldFJvb3RObyA9IChfdGhpcyRpbnB1dCRnZXRSb290Tm8yID0gKF90aGlzJGlucHV0ID0gdGhpcy5pbnB1dCkuZ2V0Um9vdE5vZGUpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRpbnB1dCRnZXRSb290Tm8yLmNhbGwoX3RoaXMkaW5wdXQpKSAhPSBudWxsID8gX3RoaXMkaW5wdXQkZ2V0Um9vdE5vIDogZG9jdW1lbnQ7XG4gIH1cblxuICAvKiogSXMgZWxlbWVudCBpbiBmb2N1cyAqL1xuICBnZXQgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQgPT09IHRoaXMucm9vdEVsZW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKiBCaW5kcyBIVE1MRWxlbWVudCBldmVudHMgdG8gbWFzayBpbnRlcm5hbCBldmVudHMgKi9cbiAgYmluZEV2ZW50cyhoYW5kbGVycykge1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5ZG93bik7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX29uSW5wdXQpO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlaW5wdXQnLCB0aGlzLl9vbkJlZm9yZWlucHV0KTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5fb25Db21wb3NpdGlvbkVuZCk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgaGFuZGxlcnMuZHJvcCk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXJzLmNsaWNrKTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlcnMuZm9jdXMpO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZXJzLmNvbW1pdCk7XG4gICAgdGhpcy5faGFuZGxlcnMgPSBoYW5kbGVycztcbiAgfVxuICBfb25LZXlkb3duKGUpIHtcbiAgICBpZiAodGhpcy5faGFuZGxlcnMucmVkbyAmJiAoZS5rZXlDb2RlID09PSBLRVlfWiAmJiBlLnNoaWZ0S2V5ICYmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSB8fCBlLmtleUNvZGUgPT09IEtFWV9ZICYmIGUuY3RybEtleSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVycy5yZWRvKGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5faGFuZGxlcnMudW5kbyAmJiBlLmtleUNvZGUgPT09IEtFWV9aICYmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJzLnVuZG8oZSk7XG4gICAgfVxuICAgIGlmICghZS5pc0NvbXBvc2luZykgdGhpcy5faGFuZGxlcnMuc2VsZWN0aW9uQ2hhbmdlKGUpO1xuICB9XG4gIF9vbkJlZm9yZWlucHV0KGUpIHtcbiAgICBpZiAoZS5pbnB1dFR5cGUgPT09ICdoaXN0b3J5VW5kbycgJiYgdGhpcy5faGFuZGxlcnMudW5kbykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJzLnVuZG8oZSk7XG4gICAgfVxuICAgIGlmIChlLmlucHV0VHlwZSA9PT0gJ2hpc3RvcnlSZWRvJyAmJiB0aGlzLl9oYW5kbGVycy5yZWRvKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gdGhpcy5faGFuZGxlcnMucmVkbyhlKTtcbiAgICB9XG4gIH1cbiAgX29uQ29tcG9zaXRpb25FbmQoZSkge1xuICAgIHRoaXMuX2hhbmRsZXJzLmlucHV0KGUpO1xuICB9XG4gIF9vbklucHV0KGUpIHtcbiAgICBpZiAoIWUuaXNDb21wb3NpbmcpIHRoaXMuX2hhbmRsZXJzLmlucHV0KGUpO1xuICB9XG5cbiAgLyoqIFVuYmluZHMgSFRNTEVsZW1lbnQgZXZlbnRzIHRvIG1hc2sgaW50ZXJuYWwgZXZlbnRzICovXG4gIHVuYmluZEV2ZW50cygpIHtcbiAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleWRvd24pO1xuICAgIHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9vbklucHV0KTtcbiAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZm9yZWlucHV0JywgdGhpcy5fb25CZWZvcmVpbnB1dCk7XG4gICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbmVuZCcsIHRoaXMuX29uQ29tcG9zaXRpb25FbmQpO1xuICAgIHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX2hhbmRsZXJzLmRyb3ApO1xuICAgIHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVycy5jbGljayk7XG4gICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2hhbmRsZXJzLmZvY3VzKTtcbiAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9oYW5kbGVycy5jb21taXQpO1xuICAgIHRoaXMuX2hhbmRsZXJzID0ge307XG4gIH1cbn1cbklNYXNrLkhUTUxNYXNrRWxlbWVudCA9IEhUTUxNYXNrRWxlbWVudDtcblxuZXhwb3J0IHsgSFRNTE1hc2tFbGVtZW50IGFzIGRlZmF1bHQgfTtcbiIsImNsYXNzIElucHV0SGlzdG9yeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RhdGVzID0gW107XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICB9XG4gIGdldCBjdXJyZW50U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVzW3RoaXMuY3VycmVudEluZGV4XTtcbiAgfVxuICBnZXQgaXNFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZXMubGVuZ3RoID09PSAwO1xuICB9XG4gIHB1c2goc3RhdGUpIHtcbiAgICAvLyBpZiBjdXJyZW50IGluZGV4IHBvaW50cyBiZWZvcmUgdGhlIGxhc3QgZWxlbWVudCB0aGVuIHJlbW92ZSB0aGUgZnV0dXJlXG4gICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy5zdGF0ZXMubGVuZ3RoIC0gMSkgdGhpcy5zdGF0ZXMubGVuZ3RoID0gdGhpcy5jdXJyZW50SW5kZXggKyAxO1xuICAgIHRoaXMuc3RhdGVzLnB1c2goc3RhdGUpO1xuICAgIGlmICh0aGlzLnN0YXRlcy5sZW5ndGggPiBJbnB1dEhpc3RvcnkuTUFYX0xFTkdUSCkgdGhpcy5zdGF0ZXMuc2hpZnQoKTtcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHRoaXMuc3RhdGVzLmxlbmd0aCAtIDE7XG4gIH1cbiAgZ28oc3RlcHMpIHtcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IE1hdGgubWluKE1hdGgubWF4KHRoaXMuY3VycmVudEluZGV4ICsgc3RlcHMsIDApLCB0aGlzLnN0YXRlcy5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGU7XG4gIH1cbiAgdW5kbygpIHtcbiAgICByZXR1cm4gdGhpcy5nbygtMSk7XG4gIH1cbiAgcmVkbygpIHtcbiAgICByZXR1cm4gdGhpcy5nbygrMSk7XG4gIH1cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5zdGF0ZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gIH1cbn1cbklucHV0SGlzdG9yeS5NQVhfTEVOR1RIID0gMTAwO1xuXG5leHBvcnQgeyBJbnB1dEhpc3RvcnkgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgQWN0aW9uRGV0YWlscyBmcm9tICcuLi9jb3JlL2FjdGlvbi1kZXRhaWxzLmpzJztcbmltcG9ydCBjcmVhdGVNYXNrLCB7IG1hc2tlZENsYXNzIH0gZnJvbSAnLi4vbWFza2VkL2ZhY3RvcnkuanMnO1xuaW1wb3J0IE1hc2tFbGVtZW50IGZyb20gJy4vbWFzay1lbGVtZW50LmpzJztcbmltcG9ydCBIVE1MSW5wdXRNYXNrRWxlbWVudCBmcm9tICcuL2h0bWwtaW5wdXQtbWFzay1lbGVtZW50LmpzJztcbmltcG9ydCBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgZnJvbSAnLi9odG1sLWNvbnRlbnRlZGl0YWJsZS1tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCBJbnB1dEhpc3RvcnkgZnJvbSAnLi9pbnB1dC1oaXN0b3J5LmpzJztcbmltcG9ydCAnLi9odG1sLW1hc2stZWxlbWVudC5qcyc7XG5cbi8qKiBMaXN0ZW5zIHRvIGVsZW1lbnQgZXZlbnRzIGFuZCBjb250cm9scyBjaGFuZ2VzIGJldHdlZW4gZWxlbWVudCBhbmQge0BsaW5rIE1hc2tlZH0gKi9cbmNsYXNzIElucHV0TWFzayB7XG4gIC8qKlxuICAgIFZpZXcgZWxlbWVudFxuICAqL1xuXG4gIC8qKiBJbnRlcm5hbCB7QGxpbmsgTWFza2VkfSBtb2RlbCAqL1xuXG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRzKSB7XG4gICAgdGhpcy5lbCA9IGVsIGluc3RhbmNlb2YgTWFza0VsZW1lbnQgPyBlbCA6IGVsLmlzQ29udGVudEVkaXRhYmxlICYmIGVsLnRhZ05hbWUgIT09ICdJTlBVVCcgJiYgZWwudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJyA/IG5ldyBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQoZWwpIDogbmV3IEhUTUxJbnB1dE1hc2tFbGVtZW50KGVsKTtcbiAgICB0aGlzLm1hc2tlZCA9IGNyZWF0ZU1hc2sob3B0cyk7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB0aGlzLl91bm1hc2tlZFZhbHVlID0gJyc7XG4gICAgdGhpcy5fcmF3SW5wdXRWYWx1ZSA9ICcnO1xuICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBJbnB1dEhpc3RvcnkoKTtcbiAgICB0aGlzLl9zYXZlU2VsZWN0aW9uID0gdGhpcy5fc2F2ZVNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uSW5wdXQgPSB0aGlzLl9vbklucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRHJvcCA9IHRoaXMuX29uRHJvcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRm9jdXMgPSB0aGlzLl9vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25DbGljayA9IHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vblVuZG8gPSB0aGlzLl9vblVuZG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vblJlZG8gPSB0aGlzLl9vblJlZG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFsaWduQ3Vyc29yID0gdGhpcy5hbGlnbkN1cnNvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSA9IHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2JpbmRFdmVudHMoKTtcblxuICAgIC8vIHJlZnJlc2hcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgfVxuICBtYXNrRXF1YWxzKG1hc2spIHtcbiAgICB2YXIgX3RoaXMkbWFza2VkO1xuICAgIHJldHVybiBtYXNrID09IG51bGwgfHwgKChfdGhpcyRtYXNrZWQgPSB0aGlzLm1hc2tlZCkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG1hc2tlZC5tYXNrRXF1YWxzKG1hc2spKTtcbiAgfVxuXG4gIC8qKiBNYXNrZWQgKi9cbiAgZ2V0IG1hc2soKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2VkLm1hc2s7XG4gIH1cbiAgc2V0IG1hc2sobWFzaykge1xuICAgIGlmICh0aGlzLm1hc2tFcXVhbHMobWFzaykpIHJldHVybjtcbiAgICBpZiAoIShtYXNrIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSAmJiB0aGlzLm1hc2tlZC5jb25zdHJ1Y3RvciA9PT0gbWFza2VkQ2xhc3MobWFzaykpIHtcbiAgICAgIC8vIFRPRE8gXCJhbnlcIiBubyBpZGVhXG4gICAgICB0aGlzLm1hc2tlZC51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgbWFza1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1hc2tlZCA9IG1hc2sgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQgPyBtYXNrIDogY3JlYXRlTWFzayh7XG4gICAgICBtYXNrXG4gICAgfSk7XG4gICAgbWFza2VkLnVubWFza2VkVmFsdWUgPSB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICAgIHRoaXMubWFza2VkID0gbWFza2VkO1xuICB9XG5cbiAgLyoqIFJhdyB2YWx1ZSAqL1xuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZShzdHIpIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gc3RyKSByZXR1cm47XG4gICAgdGhpcy5tYXNrZWQudmFsdWUgPSBzdHI7XG4gICAgdGhpcy51cGRhdGVDb250cm9sKCdhdXRvJyk7XG4gIH1cblxuICAvKiogVW5tYXNrZWQgdmFsdWUgKi9cbiAgZ2V0IHVubWFza2VkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VubWFza2VkVmFsdWU7XG4gIH1cbiAgc2V0IHVubWFza2VkVmFsdWUoc3RyKSB7XG4gICAgaWYgKHRoaXMudW5tYXNrZWRWYWx1ZSA9PT0gc3RyKSByZXR1cm47XG4gICAgdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZSA9IHN0cjtcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woJ2F1dG8nKTtcbiAgfVxuXG4gIC8qKiBSYXcgaW5wdXQgdmFsdWUgKi9cbiAgZ2V0IHJhd0lucHV0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd0lucHV0VmFsdWU7XG4gIH1cbiAgc2V0IHJhd0lucHV0VmFsdWUoc3RyKSB7XG4gICAgaWYgKHRoaXMucmF3SW5wdXRWYWx1ZSA9PT0gc3RyKSByZXR1cm47XG4gICAgdGhpcy5tYXNrZWQucmF3SW5wdXRWYWx1ZSA9IHN0cjtcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gIH1cblxuICAvKiogVHlwZWQgdW5tYXNrZWQgdmFsdWUgKi9cbiAgZ2V0IHR5cGVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2VkLnR5cGVkVmFsdWU7XG4gIH1cbiAgc2V0IHR5cGVkVmFsdWUodmFsKSB7XG4gICAgaWYgKHRoaXMubWFza2VkLnR5cGVkVmFsdWVFcXVhbHModmFsKSkgcmV0dXJuO1xuICAgIHRoaXMubWFza2VkLnR5cGVkVmFsdWUgPSB2YWw7XG4gICAgdGhpcy51cGRhdGVDb250cm9sKCdhdXRvJyk7XG4gIH1cblxuICAvKiogRGlzcGxheSB2YWx1ZSAqL1xuICBnZXQgZGlzcGxheVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tlZC5kaXNwbGF5VmFsdWU7XG4gIH1cblxuICAvKiogU3RhcnRzIGxpc3RlbmluZyB0byBlbGVtZW50IGV2ZW50cyAqL1xuICBfYmluZEV2ZW50cygpIHtcbiAgICB0aGlzLmVsLmJpbmRFdmVudHMoe1xuICAgICAgc2VsZWN0aW9uQ2hhbmdlOiB0aGlzLl9zYXZlU2VsZWN0aW9uLFxuICAgICAgaW5wdXQ6IHRoaXMuX29uSW5wdXQsXG4gICAgICBkcm9wOiB0aGlzLl9vbkRyb3AsXG4gICAgICBjbGljazogdGhpcy5fb25DbGljayxcbiAgICAgIGZvY3VzOiB0aGlzLl9vbkZvY3VzLFxuICAgICAgY29tbWl0OiB0aGlzLl9vbkNoYW5nZSxcbiAgICAgIHVuZG86IHRoaXMuX29uVW5kbyxcbiAgICAgIHJlZG86IHRoaXMuX29uUmVkb1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFN0b3BzIGxpc3RlbmluZyB0byBlbGVtZW50IGV2ZW50cyAqL1xuICBfdW5iaW5kRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLmVsKSB0aGlzLmVsLnVuYmluZEV2ZW50cygpO1xuICB9XG5cbiAgLyoqIEZpcmVzIGN1c3RvbSBldmVudCAqL1xuICBfZmlyZUV2ZW50KGV2LCBlKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICBpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKGwgPT4gbChlKSk7XG4gIH1cblxuICAvKiogQ3VycmVudCBzZWxlY3Rpb24gc3RhcnQgKi9cbiAgZ2V0IHNlbGVjdGlvblN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJzb3JDaGFuZ2luZyA/IHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zIDogdGhpcy5lbC5zZWxlY3Rpb25TdGFydDtcbiAgfVxuXG4gIC8qKiBDdXJyZW50IGN1cnNvciBwb3NpdGlvbiAqL1xuICBnZXQgY3Vyc29yUG9zKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJzb3JDaGFuZ2luZyA/IHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zIDogdGhpcy5lbC5zZWxlY3Rpb25FbmQ7XG4gIH1cbiAgc2V0IGN1cnNvclBvcyhwb3MpIHtcbiAgICBpZiAoIXRoaXMuZWwgfHwgIXRoaXMuZWwuaXNBY3RpdmUpIHJldHVybjtcbiAgICB0aGlzLmVsLnNlbGVjdChwb3MsIHBvcyk7XG4gICAgdGhpcy5fc2F2ZVNlbGVjdGlvbigpO1xuICB9XG5cbiAgLyoqIFN0b3JlcyBjdXJyZW50IHNlbGVjdGlvbiAqL1xuICBfc2F2ZVNlbGVjdGlvbiggLyogZXYgKi9cbiAgKSB7XG4gICAgaWYgKHRoaXMuZGlzcGxheVZhbHVlICE9PSB0aGlzLmVsLnZhbHVlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0VsZW1lbnQgdmFsdWUgd2FzIGNoYW5nZWQgb3V0c2lkZSBvZiBtYXNrLiBTeW5jcm9uaXplIG1hc2sgdXNpbmcgYG1hc2sudXBkYXRlVmFsdWUoKWAgdG8gd29yayBwcm9wZXJseS4nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGlvbiA9IHtcbiAgICAgIHN0YXJ0OiB0aGlzLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgZW5kOiB0aGlzLmN1cnNvclBvc1xuICAgIH07XG4gIH1cblxuICAvKiogU3luY3Jvbml6ZXMgbW9kZWwgdmFsdWUgZnJvbSB2aWV3ICovXG4gIHVwZGF0ZVZhbHVlKCkge1xuICAgIHRoaXMubWFza2VkLnZhbHVlID0gdGhpcy5lbC52YWx1ZTtcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMubWFza2VkLnZhbHVlO1xuICAgIHRoaXMuX3VubWFza2VkVmFsdWUgPSB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICAgIHRoaXMuX3Jhd0lucHV0VmFsdWUgPSB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlO1xuICB9XG5cbiAgLyoqIFN5bmNyb25pemVzIHZpZXcgZnJvbSBtb2RlbCB2YWx1ZSwgZmlyZXMgY2hhbmdlIGV2ZW50cyAqL1xuICB1cGRhdGVDb250cm9sKGN1cnNvclBvcykge1xuICAgIGNvbnN0IG5ld1VubWFza2VkVmFsdWUgPSB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5tYXNrZWQudmFsdWU7XG4gICAgY29uc3QgbmV3UmF3SW5wdXRWYWx1ZSA9IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWU7XG4gICAgY29uc3QgbmV3RGlzcGxheVZhbHVlID0gdGhpcy5kaXNwbGF5VmFsdWU7XG4gICAgY29uc3QgaXNDaGFuZ2VkID0gdGhpcy51bm1hc2tlZFZhbHVlICE9PSBuZXdVbm1hc2tlZFZhbHVlIHx8IHRoaXMudmFsdWUgIT09IG5ld1ZhbHVlIHx8IHRoaXMuX3Jhd0lucHV0VmFsdWUgIT09IG5ld1Jhd0lucHV0VmFsdWU7XG4gICAgdGhpcy5fdW5tYXNrZWRWYWx1ZSA9IG5ld1VubWFza2VkVmFsdWU7XG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLl9yYXdJbnB1dFZhbHVlID0gbmV3UmF3SW5wdXRWYWx1ZTtcbiAgICBpZiAodGhpcy5lbC52YWx1ZSAhPT0gbmV3RGlzcGxheVZhbHVlKSB0aGlzLmVsLnZhbHVlID0gbmV3RGlzcGxheVZhbHVlO1xuICAgIGlmIChjdXJzb3JQb3MgPT09ICdhdXRvJykgdGhpcy5hbGlnbkN1cnNvcigpO2Vsc2UgaWYgKGN1cnNvclBvcyAhPSBudWxsKSB0aGlzLmN1cnNvclBvcyA9IGN1cnNvclBvcztcbiAgICBpZiAoaXNDaGFuZ2VkKSB0aGlzLl9maXJlQ2hhbmdlRXZlbnRzKCk7XG4gICAgaWYgKCF0aGlzLl9oaXN0b3J5Q2hhbmdpbmcgJiYgKGlzQ2hhbmdlZCB8fCB0aGlzLmhpc3RvcnkuaXNFbXB0eSkpIHRoaXMuaGlzdG9yeS5wdXNoKHtcbiAgICAgIHVubWFza2VkVmFsdWU6IG5ld1VubWFza2VkVmFsdWUsXG4gICAgICBzZWxlY3Rpb246IHtcbiAgICAgICAgc3RhcnQ6IHRoaXMuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgIGVuZDogdGhpcy5jdXJzb3JQb3NcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIG9wdGlvbnMgd2l0aCBkZWVwIGVxdWFsIGNoZWNrLCByZWNyZWF0ZXMge0BsaW5rIE1hc2tlZH0gbW9kZWwgaWYgbWFzayB0eXBlIGNoYW5nZXMgKi9cbiAgdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWFzayxcbiAgICAgIC4uLnJlc3RPcHRzXG4gICAgfSA9IG9wdHM7IC8vIFRPRE8gdHlwZXMsIHllcywgbWFzayBpcyBvcHRpb25hbFxuXG4gICAgY29uc3QgdXBkYXRlTWFzayA9ICF0aGlzLm1hc2tFcXVhbHMobWFzayk7XG4gICAgY29uc3QgdXBkYXRlT3B0cyA9IHRoaXMubWFza2VkLm9wdGlvbnNJc0NoYW5nZWQocmVzdE9wdHMpO1xuICAgIGlmICh1cGRhdGVNYXNrKSB0aGlzLm1hc2sgPSBtYXNrO1xuICAgIGlmICh1cGRhdGVPcHRzKSB0aGlzLm1hc2tlZC51cGRhdGVPcHRpb25zKHJlc3RPcHRzKTsgLy8gVE9ET1xuXG4gICAgaWYgKHVwZGF0ZU1hc2sgfHwgdXBkYXRlT3B0cykgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gIH1cblxuICAvKiogVXBkYXRlcyBjdXJzb3IgKi9cbiAgdXBkYXRlQ3Vyc29yKGN1cnNvclBvcykge1xuICAgIGlmIChjdXJzb3JQb3MgPT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMuY3Vyc29yUG9zID0gY3Vyc29yUG9zO1xuXG4gICAgLy8gYWxzbyBxdWV1ZSBjaGFuZ2UgY3Vyc29yIGZvciBtb2JpbGUgYnJvd3NlcnNcbiAgICB0aGlzLl9kZWxheVVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpO1xuICB9XG5cbiAgLyoqIERlbGF5cyBjdXJzb3IgdXBkYXRlIHRvIHN1cHBvcnQgbW9iaWxlIGJyb3dzZXJzICovXG4gIF9kZWxheVVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpIHtcbiAgICB0aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpO1xuICAgIHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zID0gY3Vyc29yUG9zO1xuICAgIHRoaXMuX2N1cnNvckNoYW5naW5nID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZWwpIHJldHVybjsgLy8gaWYgd2FzIGRlc3Ryb3llZFxuICAgICAgdGhpcy5jdXJzb3JQb3MgPSB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcztcbiAgICAgIHRoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgLyoqIEZpcmVzIGN1c3RvbSBldmVudHMgKi9cbiAgX2ZpcmVDaGFuZ2VFdmVudHMoKSB7XG4gICAgdGhpcy5fZmlyZUV2ZW50KCdhY2NlcHQnLCB0aGlzLl9pbnB1dEV2ZW50KTtcbiAgICBpZiAodGhpcy5tYXNrZWQuaXNDb21wbGV0ZSkgdGhpcy5fZmlyZUV2ZW50KCdjb21wbGV0ZScsIHRoaXMuX2lucHV0RXZlbnQpO1xuICB9XG5cbiAgLyoqIEFib3J0cyBkZWxheWVkIGN1cnNvciB1cGRhdGUgKi9cbiAgX2Fib3J0VXBkYXRlQ3Vyc29yKCkge1xuICAgIGlmICh0aGlzLl9jdXJzb3JDaGFuZ2luZykge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2N1cnNvckNoYW5naW5nKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jdXJzb3JDaGFuZ2luZztcbiAgICB9XG4gIH1cblxuICAvKiogQWxpZ25zIGN1cnNvciB0byBuZWFyZXN0IGF2YWlsYWJsZSBwb3NpdGlvbiAqL1xuICBhbGlnbkN1cnNvcigpIHtcbiAgICB0aGlzLmN1cnNvclBvcyA9IHRoaXMubWFza2VkLm5lYXJlc3RJbnB1dFBvcyh0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3ModGhpcy5jdXJzb3JQb3MsIERJUkVDVElPTi5MRUZUKSk7XG4gIH1cblxuICAvKiogQWxpZ25zIGN1cnNvciBvbmx5IGlmIHNlbGVjdGlvbiBpcyBlbXB0eSAqL1xuICBhbGlnbkN1cnNvckZyaWVuZGx5KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0ICE9PSB0aGlzLmN1cnNvclBvcykgcmV0dXJuOyAvLyBza2lwIGlmIHJhbmdlIGlzIHNlbGVjdGVkXG4gICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICB9XG5cbiAgLyoqIEFkZHMgbGlzdGVuZXIgb24gY3VzdG9tIGV2ZW50ICovXG4gIG9uKGV2LCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZdKSB0aGlzLl9saXN0ZW5lcnNbZXZdID0gW107XG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2XS5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIFJlbW92ZXMgY3VzdG9tIGV2ZW50IGxpc3RlbmVyICovXG4gIG9mZihldiwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW2V2XSkgcmV0dXJuIHRoaXM7XG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25zdCBoSW5kZXggPSB0aGlzLl9saXN0ZW5lcnNbZXZdLmluZGV4T2YoaGFuZGxlcik7XG4gICAgaWYgKGhJbmRleCA+PSAwKSB0aGlzLl9saXN0ZW5lcnNbZXZdLnNwbGljZShoSW5kZXgsIDEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgdmlldyBpbnB1dCBldmVudCAqL1xuICBfb25JbnB1dChlKSB7XG4gICAgdGhpcy5faW5wdXRFdmVudCA9IGU7XG4gICAgdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IEFjdGlvbkRldGFpbHMoe1xuICAgICAgLy8gbmV3IHN0YXRlXG4gICAgICB2YWx1ZTogdGhpcy5lbC52YWx1ZSxcbiAgICAgIGN1cnNvclBvczogdGhpcy5jdXJzb3JQb3MsXG4gICAgICAvLyBvbGQgc3RhdGVcbiAgICAgIG9sZFZhbHVlOiB0aGlzLmRpc3BsYXlWYWx1ZSxcbiAgICAgIG9sZFNlbGVjdGlvbjogdGhpcy5fc2VsZWN0aW9uXG4gICAgfSk7XG4gICAgY29uc3Qgb2xkUmF3VmFsdWUgPSB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlO1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMubWFza2VkLnNwbGljZShkZXRhaWxzLnN0YXJ0Q2hhbmdlUG9zLCBkZXRhaWxzLnJlbW92ZWQubGVuZ3RoLCBkZXRhaWxzLmluc2VydGVkLCBkZXRhaWxzLnJlbW92ZURpcmVjdGlvbiwge1xuICAgICAgaW5wdXQ6IHRydWUsXG4gICAgICByYXc6IHRydWVcbiAgICB9KS5vZmZzZXQ7XG5cbiAgICAvLyBmb3JjZSBhbGlnbiBpbiByZW1vdmUgZGlyZWN0aW9uIG9ubHkgaWYgbm8gaW5wdXQgY2hhcnMgd2VyZSByZW1vdmVkXG4gICAgLy8gb3RoZXJ3aXNlIHdlIHN0aWxsIG5lZWQgdG8gYWxpZ24gd2l0aCBOT05FICh0byBnZXQgb3V0IGZyb20gZml4ZWQgc3ltYm9scyBmb3IgaW5zdGFuY2UpXG4gICAgY29uc3QgcmVtb3ZlRGlyZWN0aW9uID0gb2xkUmF3VmFsdWUgPT09IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWUgPyBkZXRhaWxzLnJlbW92ZURpcmVjdGlvbiA6IERJUkVDVElPTi5OT05FO1xuICAgIGxldCBjdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3MoZGV0YWlscy5zdGFydENoYW5nZVBvcyArIG9mZnNldCwgcmVtb3ZlRGlyZWN0aW9uKTtcbiAgICBpZiAocmVtb3ZlRGlyZWN0aW9uICE9PSBESVJFQ1RJT04uTk9ORSkgY3Vyc29yUG9zID0gdGhpcy5tYXNrZWQubmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgRElSRUNUSU9OLk5PTkUpO1xuICAgIHRoaXMudXBkYXRlQ29udHJvbChjdXJzb3JQb3MpO1xuICAgIGRlbGV0ZSB0aGlzLl9pbnB1dEV2ZW50O1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgdmlldyBjaGFuZ2UgZXZlbnQgYW5kIGNvbW1pdHMgbW9kZWwgdmFsdWUgKi9cbiAgX29uQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLmRpc3BsYXlWYWx1ZSAhPT0gdGhpcy5lbC52YWx1ZSkgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XG4gICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgdGhpcy5fc2F2ZVNlbGVjdGlvbigpO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgdmlldyBkcm9wIGV2ZW50LCBwcmV2ZW50cyBieSBkZWZhdWx0ICovXG4gIF9vbkRyb3AoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgLyoqIFJlc3RvcmUgbGFzdCBzZWxlY3Rpb24gb24gZm9jdXMgKi9cbiAgX29uRm9jdXMoZXYpIHtcbiAgICB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkoKTtcbiAgfVxuXG4gIC8qKiBSZXN0b3JlIGxhc3Qgc2VsZWN0aW9uIG9uIGZvY3VzICovXG4gIF9vbkNsaWNrKGV2KSB7XG4gICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5KCk7XG4gIH1cbiAgX29uVW5kbygpIHtcbiAgICB0aGlzLl9hcHBseUhpc3RvcnlTdGF0ZSh0aGlzLmhpc3RvcnkudW5kbygpKTtcbiAgfVxuICBfb25SZWRvKCkge1xuICAgIHRoaXMuX2FwcGx5SGlzdG9yeVN0YXRlKHRoaXMuaGlzdG9yeS5yZWRvKCkpO1xuICB9XG4gIF9hcHBseUhpc3RvcnlTdGF0ZShzdGF0ZSkge1xuICAgIGlmICghc3RhdGUpIHJldHVybjtcbiAgICB0aGlzLl9oaXN0b3J5Q2hhbmdpbmcgPSB0cnVlO1xuICAgIHRoaXMudW5tYXNrZWRWYWx1ZSA9IHN0YXRlLnVubWFza2VkVmFsdWU7XG4gICAgdGhpcy5lbC5zZWxlY3Qoc3RhdGUuc2VsZWN0aW9uLnN0YXJ0LCBzdGF0ZS5zZWxlY3Rpb24uZW5kKTtcbiAgICB0aGlzLl9zYXZlU2VsZWN0aW9uKCk7XG4gICAgdGhpcy5faGlzdG9yeUNoYW5naW5nID0gZmFsc2U7XG4gIH1cblxuICAvKiogVW5iaW5kIHZpZXcgZXZlbnRzIGFuZCByZW1vdmVzIGVsZW1lbnQgcmVmZXJlbmNlICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdW5iaW5kRXZlbnRzKCk7XG4gICAgdGhpcy5fbGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgZGVsZXRlIHRoaXMuZWw7XG4gIH1cbn1cbklNYXNrLklucHV0TWFzayA9IElucHV0TWFzaztcblxuZXhwb3J0IHsgSW5wdXRNYXNrIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5cbi8qKiAgR2VuZXJpYyBlbGVtZW50IEFQSSB0byB1c2Ugd2l0aCBtYXNrICovXG5jbGFzcyBNYXNrRWxlbWVudCB7XG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiBTYWZlbHkgcmV0dXJucyBzZWxlY3Rpb24gc3RhcnQgKi9cbiAgZ2V0IHNlbGVjdGlvblN0YXJ0KCkge1xuICAgIGxldCBzdGFydDtcbiAgICB0cnkge1xuICAgICAgc3RhcnQgPSB0aGlzLl91bnNhZmVTZWxlY3Rpb25TdGFydDtcbiAgICB9IGNhdGNoIHt9XG4gICAgcmV0dXJuIHN0YXJ0ICE9IG51bGwgPyBzdGFydCA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgLyoqIFNhZmVseSByZXR1cm5zIHNlbGVjdGlvbiBlbmQgKi9cbiAgZ2V0IHNlbGVjdGlvbkVuZCgpIHtcbiAgICBsZXQgZW5kO1xuICAgIHRyeSB7XG4gICAgICBlbmQgPSB0aGlzLl91bnNhZmVTZWxlY3Rpb25FbmQ7XG4gICAgfSBjYXRjaCB7fVxuICAgIHJldHVybiBlbmQgIT0gbnVsbCA/IGVuZCA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgLyoqIFNhZmVseSBzZXRzIGVsZW1lbnQgc2VsZWN0aW9uICovXG4gIHNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgaWYgKHN0YXJ0ID09IG51bGwgfHwgZW5kID09IG51bGwgfHwgc3RhcnQgPT09IHRoaXMuc2VsZWN0aW9uU3RhcnQgJiYgZW5kID09PSB0aGlzLnNlbGVjdGlvbkVuZCkgcmV0dXJuO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCk7XG4gICAgfSBjYXRjaCB7fVxuICB9XG5cbiAgLyoqICovXG4gIGdldCBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG59XG5JTWFzay5NYXNrRWxlbWVudCA9IE1hc2tFbGVtZW50O1xuXG5leHBvcnQgeyBNYXNrRWxlbWVudCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqIFByb3ZpZGVzIGRldGFpbHMgb2YgY2hhbmdpbmcgaW5wdXQgKi9cbmNsYXNzIEFjdGlvbkRldGFpbHMge1xuICAvKiogQ3VycmVudCBpbnB1dCB2YWx1ZSAqL1xuXG4gIC8qKiBDdXJyZW50IGN1cnNvciBwb3NpdGlvbiAqL1xuXG4gIC8qKiBPbGQgaW5wdXQgdmFsdWUgKi9cblxuICAvKiogT2xkIHNlbGVjdGlvbiAqL1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdHMpO1xuXG4gICAgLy8gZG91YmxlIGNoZWNrIGlmIGxlZnQgcGFydCB3YXMgY2hhbmdlZCAoYXV0b2ZpbGxpbmcsIG90aGVyIG5vbi1zdGFuZGFyZCBpbnB1dCB0cmlnZ2VycylcbiAgICB3aGlsZSAodGhpcy52YWx1ZS5zbGljZSgwLCB0aGlzLnN0YXJ0Q2hhbmdlUG9zKSAhPT0gdGhpcy5vbGRWYWx1ZS5zbGljZSgwLCB0aGlzLnN0YXJ0Q2hhbmdlUG9zKSkge1xuICAgICAgLS10aGlzLm9sZFNlbGVjdGlvbi5zdGFydDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5zZXJ0ZWRDb3VudCkge1xuICAgICAgLy8gZG91YmxlIGNoZWNrIHJpZ2h0IHBhcnRcbiAgICAgIHdoaWxlICh0aGlzLnZhbHVlLnNsaWNlKHRoaXMuY3Vyc29yUG9zKSAhPT0gdGhpcy5vbGRWYWx1ZS5zbGljZSh0aGlzLm9sZFNlbGVjdGlvbi5lbmQpKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCAtIHRoaXMuY3Vyc29yUG9zIDwgdGhpcy5vbGRWYWx1ZS5sZW5ndGggLSB0aGlzLm9sZFNlbGVjdGlvbi5lbmQpICsrdGhpcy5vbGRTZWxlY3Rpb24uZW5kO2Vsc2UgKyt0aGlzLmN1cnNvclBvcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogU3RhcnQgY2hhbmdpbmcgcG9zaXRpb24gKi9cbiAgZ2V0IHN0YXJ0Q2hhbmdlUG9zKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmN1cnNvclBvcywgdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQpO1xuICB9XG5cbiAgLyoqIEluc2VydGVkIHN5bWJvbHMgY291bnQgKi9cbiAgZ2V0IGluc2VydGVkQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3Vyc29yUG9zIC0gdGhpcy5zdGFydENoYW5nZVBvcztcbiAgfVxuXG4gIC8qKiBJbnNlcnRlZCBzeW1ib2xzICovXG4gIGdldCBpbnNlcnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHIodGhpcy5zdGFydENoYW5nZVBvcywgdGhpcy5pbnNlcnRlZENvdW50KTtcbiAgfVxuXG4gIC8qKiBSZW1vdmVkIHN5bWJvbHMgY291bnQgKi9cbiAgZ2V0IHJlbW92ZWRDb3VudCgpIHtcbiAgICAvLyBNYXRoLm1heCBmb3Igb3Bwb3NpdGUgb3BlcmF0aW9uXG4gICAgcmV0dXJuIE1hdGgubWF4KHRoaXMub2xkU2VsZWN0aW9uLmVuZCAtIHRoaXMuc3RhcnRDaGFuZ2VQb3MgfHxcbiAgICAvLyBmb3IgRGVsZXRlXG4gICAgdGhpcy5vbGRWYWx1ZS5sZW5ndGggLSB0aGlzLnZhbHVlLmxlbmd0aCwgMCk7XG4gIH1cblxuICAvKiogUmVtb3ZlZCBzeW1ib2xzICovXG4gIGdldCByZW1vdmVkKCkge1xuICAgIHJldHVybiB0aGlzLm9sZFZhbHVlLnN1YnN0cih0aGlzLnN0YXJ0Q2hhbmdlUG9zLCB0aGlzLnJlbW92ZWRDb3VudCk7XG4gIH1cblxuICAvKiogVW5jaGFuZ2VkIGhlYWQgc3ltYm9scyAqL1xuICBnZXQgaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcoMCwgdGhpcy5zdGFydENoYW5nZVBvcyk7XG4gIH1cblxuICAvKiogVW5jaGFuZ2VkIHRhaWwgc3ltYm9scyAqL1xuICBnZXQgdGFpbCgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcodGhpcy5zdGFydENoYW5nZVBvcyArIHRoaXMuaW5zZXJ0ZWRDb3VudCk7XG4gIH1cblxuICAvKiogUmVtb3ZlIGRpcmVjdGlvbiAqL1xuICBnZXQgcmVtb3ZlRGlyZWN0aW9uKCkge1xuICAgIGlmICghdGhpcy5yZW1vdmVkQ291bnQgfHwgdGhpcy5pbnNlcnRlZENvdW50KSByZXR1cm4gRElSRUNUSU9OLk5PTkU7XG5cbiAgICAvLyBhbGlnbiByaWdodCBpZiBkZWxldGUgYXQgcmlnaHRcbiAgICByZXR1cm4gKHRoaXMub2xkU2VsZWN0aW9uLmVuZCA9PT0gdGhpcy5jdXJzb3JQb3MgfHwgdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQgPT09IHRoaXMuY3Vyc29yUG9zKSAmJlxuICAgIC8vIGlmIG5vdCByYW5nZSByZW1vdmVkIChldmVudCB3aXRoIGJhY2tzcGFjZSlcbiAgICB0aGlzLm9sZFNlbGVjdGlvbi5lbmQgPT09IHRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0ID8gRElSRUNUSU9OLlJJR0hUIDogRElSRUNUSU9OLkxFRlQ7XG4gIH1cbn1cblxuZXhwb3J0IHsgQWN0aW9uRGV0YWlscyBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgSU1hc2sgZnJvbSAnLi9ob2xkZXIuanMnO1xuXG4vKiogUHJvdmlkZXMgZGV0YWlscyBvZiBjaGFuZ2luZyBtb2RlbCB2YWx1ZSAqL1xuY2xhc3MgQ2hhbmdlRGV0YWlscyB7XG4gIC8qKiBJbnNlcnRlZCBzeW1ib2xzICovXG5cbiAgLyoqIEFkZGl0aW9uYWwgb2Zmc2V0IGlmIGFueSBjaGFuZ2VzIG9jY3VycmVkIGJlZm9yZSB0YWlsICovXG5cbiAgLyoqIFJhdyBpbnNlcnRlZCBpcyB1c2VkIGJ5IGR5bmFtaWMgbWFzayAqL1xuXG4gIC8qKiBDYW4gc2tpcCBjaGFycyAqL1xuXG4gIHN0YXRpYyBub3JtYWxpemUocHJlcCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHByZXApID8gcHJlcCA6IFtwcmVwLCBuZXcgQ2hhbmdlRGV0YWlscygpXTtcbiAgfVxuICBjb25zdHJ1Y3RvcihkZXRhaWxzKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBpbnNlcnRlZDogJycsXG4gICAgICByYXdJbnNlcnRlZDogJycsXG4gICAgICB0YWlsU2hpZnQ6IDAsXG4gICAgICBza2lwOiBmYWxzZVxuICAgIH0sIGRldGFpbHMpO1xuICB9XG5cbiAgLyoqIEFnZ3JlZ2F0ZSBjaGFuZ2VzICovXG4gIGFnZ3JlZ2F0ZShkZXRhaWxzKSB7XG4gICAgdGhpcy5pbnNlcnRlZCArPSBkZXRhaWxzLmluc2VydGVkO1xuICAgIHRoaXMucmF3SW5zZXJ0ZWQgKz0gZGV0YWlscy5yYXdJbnNlcnRlZDtcbiAgICB0aGlzLnRhaWxTaGlmdCArPSBkZXRhaWxzLnRhaWxTaGlmdDtcbiAgICB0aGlzLnNraXAgPSB0aGlzLnNraXAgfHwgZGV0YWlscy5za2lwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIFRvdGFsIG9mZnNldCBjb25zaWRlcmluZyBhbGwgY2hhbmdlcyAqL1xuICBnZXQgb2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLnRhaWxTaGlmdCArIHRoaXMuaW5zZXJ0ZWQubGVuZ3RoO1xuICB9XG4gIGdldCBjb25zdW1lZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLnJhd0luc2VydGVkKSB8fCB0aGlzLnNraXA7XG4gIH1cbiAgZXF1YWxzKGRldGFpbHMpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRlZCA9PT0gZGV0YWlscy5pbnNlcnRlZCAmJiB0aGlzLnRhaWxTaGlmdCA9PT0gZGV0YWlscy50YWlsU2hpZnQgJiYgdGhpcy5yYXdJbnNlcnRlZCA9PT0gZGV0YWlscy5yYXdJbnNlcnRlZCAmJiB0aGlzLnNraXAgPT09IGRldGFpbHMuc2tpcDtcbiAgfVxufVxuSU1hc2suQ2hhbmdlRGV0YWlscyA9IENoYW5nZURldGFpbHM7XG5cbmV4cG9ydCB7IENoYW5nZURldGFpbHMgYXMgZGVmYXVsdCB9O1xuIiwiLyoqIFByb3ZpZGVzIGRldGFpbHMgb2YgY29udGludW91cyBleHRyYWN0ZWQgdGFpbCAqL1xuY2xhc3MgQ29udGludW91c1RhaWxEZXRhaWxzIHtcbiAgLyoqIFRhaWwgdmFsdWUgYXMgc3RyaW5nICovXG5cbiAgLyoqIFRhaWwgc3RhcnQgcG9zaXRpb24gKi9cblxuICAvKiogU3RhcnQgcG9zaXRpb24gKi9cblxuICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZnJvbSwgc3RvcCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBpZiAoZnJvbSA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tID0gMDtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuZnJvbSA9IGZyb207XG4gICAgdGhpcy5zdG9wID0gc3RvcDtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuICBleHRlbmQodGFpbCkge1xuICAgIHRoaXMudmFsdWUgKz0gU3RyaW5nKHRhaWwpO1xuICB9XG4gIGFwcGVuZFRvKG1hc2tlZCkge1xuICAgIHJldHVybiBtYXNrZWQuYXBwZW5kKHRoaXMudG9TdHJpbmcoKSwge1xuICAgICAgdGFpbDogdHJ1ZVxuICAgIH0pLmFnZ3JlZ2F0ZShtYXNrZWQuX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICB9XG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBmcm9tOiB0aGlzLmZyb20sXG4gICAgICBzdG9wOiB0aGlzLnN0b3BcbiAgICB9O1xuICB9XG4gIHNldCBzdGF0ZShzdGF0ZSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgc3RhdGUpO1xuICB9XG4gIHVuc2hpZnQoYmVmb3JlUG9zKSB7XG4gICAgaWYgKCF0aGlzLnZhbHVlLmxlbmd0aCB8fCBiZWZvcmVQb3MgIT0gbnVsbCAmJiB0aGlzLmZyb20gPj0gYmVmb3JlUG9zKSByZXR1cm4gJyc7XG4gICAgY29uc3Qgc2hpZnRDaGFyID0gdGhpcy52YWx1ZVswXTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zbGljZSgxKTtcbiAgICByZXR1cm4gc2hpZnRDaGFyO1xuICB9XG4gIHNoaWZ0KCkge1xuICAgIGlmICghdGhpcy52YWx1ZS5sZW5ndGgpIHJldHVybiAnJztcbiAgICBjb25zdCBzaGlmdENoYXIgPSB0aGlzLnZhbHVlW3RoaXMudmFsdWUubGVuZ3RoIC0gMV07XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgIHJldHVybiBzaGlmdENoYXI7XG4gIH1cbn1cblxuZXhwb3J0IHsgQ29udGludW91c1RhaWxEZXRhaWxzIGFzIGRlZmF1bHQgfTtcbiIsIi8qKiBBcHBsaWVzIG1hc2sgb24gZWxlbWVudCAqL1xuZnVuY3Rpb24gSU1hc2soZWwsIG9wdHMpIHtcbiAgLy8gY3VycmVudGx5IGF2YWlsYWJsZSBvbmx5IGZvciBpbnB1dC1saWtlIGVsZW1lbnRzXG4gIHJldHVybiBuZXcgSU1hc2suSW5wdXRNYXNrKGVsLCBvcHRzKTtcbn1cblxuZXhwb3J0IHsgSU1hc2sgYXMgZGVmYXVsdCB9O1xuIiwiLyoqIENoZWNrcyBpZiB2YWx1ZSBpcyBzdHJpbmcgKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgfHwgc3RyIGluc3RhbmNlb2YgU3RyaW5nO1xufVxuXG4vKiogQ2hlY2tzIGlmIHZhbHVlIGlzIG9iamVjdCAqL1xuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHZhciBfb2JqJGNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9IG51bGwgJiYgKG9iaiA9PSBudWxsIHx8IChfb2JqJGNvbnN0cnVjdG9yID0gb2JqLmNvbnN0cnVjdG9yKSA9PSBudWxsID8gdm9pZCAwIDogX29iaiRjb25zdHJ1Y3Rvci5uYW1lKSA9PT0gJ09iamVjdCc7XG59XG5mdW5jdGlvbiBwaWNrKG9iaiwga2V5cykge1xuICBpZiAoQXJyYXkuaXNBcnJheShrZXlzKSkgcmV0dXJuIHBpY2sob2JqLCAoXywgaykgPT4ga2V5cy5pbmNsdWRlcyhrKSk7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopLnJlZHVjZSgoYWNjLCBfcmVmKSA9PiB7XG4gICAgbGV0IFtrLCB2XSA9IF9yZWY7XG4gICAgaWYgKGtleXModiwgaykpIGFjY1trXSA9IHY7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufVxuXG4vKiogRGlyZWN0aW9uICovXG5jb25zdCBESVJFQ1RJT04gPSB7XG4gIE5PTkU6ICdOT05FJyxcbiAgTEVGVDogJ0xFRlQnLFxuICBGT1JDRV9MRUZUOiAnRk9SQ0VfTEVGVCcsXG4gIFJJR0hUOiAnUklHSFQnLFxuICBGT1JDRV9SSUdIVDogJ0ZPUkNFX1JJR0hUJ1xufTtcblxuLyoqIERpcmVjdGlvbiAqL1xuXG5mdW5jdGlvbiBmb3JjZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgcmV0dXJuIERJUkVDVElPTi5GT1JDRV9MRUZUO1xuICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgICAgcmV0dXJuIERJUkVDVElPTi5GT1JDRV9SSUdIVDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxufVxuXG4vKiogRXNjYXBlcyByZWd1bGFyIGV4cHJlc3Npb24gY29udHJvbCBjaGFycyAqL1xuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdL1xcXFxdKS9nLCAnXFxcXCQxJyk7XG59XG5cbi8vIGNsb25lZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcG9iZXJlemtpbi9mYXN0LWRlZXAtZXF1YWwgd2l0aCBzbWFsbCBjaGFuZ2VzXG5mdW5jdGlvbiBvYmplY3RJbmNsdWRlcyhiLCBhKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcbiAgY29uc3QgYXJyQSA9IEFycmF5LmlzQXJyYXkoYSksXG4gICAgYXJyQiA9IEFycmF5LmlzQXJyYXkoYik7XG4gIGxldCBpO1xuICBpZiAoYXJyQSAmJiBhcnJCKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIGlmICghb2JqZWN0SW5jbHVkZXMoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoYXJyQSAhPSBhcnJCKSByZXR1cm4gZmFsc2U7XG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnICYmIHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGRhdGVBID0gYSBpbnN0YW5jZW9mIERhdGUsXG4gICAgICBkYXRlQiA9IGIgaW5zdGFuY2VvZiBEYXRlO1xuICAgIGlmIChkYXRlQSAmJiBkYXRlQikgcmV0dXJuIGEuZ2V0VGltZSgpID09IGIuZ2V0VGltZSgpO1xuICAgIGlmIChkYXRlQSAhPSBkYXRlQikgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHJlZ2V4cEEgPSBhIGluc3RhbmNlb2YgUmVnRXhwLFxuICAgICAgcmVnZXhwQiA9IGIgaW5zdGFuY2VvZiBSZWdFeHA7XG4gICAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCk7XG4gICAgaWYgKHJlZ2V4cEEgIT0gcmVnZXhwQikgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICAvLyBpZiAoa2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIGlmICghb2JqZWN0SW5jbHVkZXMoYltrZXlzW2ldXSwgYVtrZXlzW2ldXSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKiogU2VsZWN0aW9uIHJhbmdlICovXG5cbmV4cG9ydCB7IERJUkVDVElPTiwgZXNjYXBlUmVnRXhwLCBmb3JjZURpcmVjdGlvbiwgaXNPYmplY3QsIGlzU3RyaW5nLCBvYmplY3RJbmNsdWRlcywgcGljayB9O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dE1hc2sgfSBmcm9tICcuL2NvbnRyb2xzL2lucHV0LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuL2NvcmUvaG9sZGVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50IH0gZnJvbSAnLi9jb250cm9scy9odG1sLWNvbnRlbnRlZGl0YWJsZS1tYXNrLWVsZW1lbnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIVE1MSW5wdXRNYXNrRWxlbWVudCB9IGZyb20gJy4vY29udHJvbHMvaHRtbC1pbnB1dC1tYXNrLWVsZW1lbnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIVE1MTWFza0VsZW1lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2h0bWwtbWFzay1lbGVtZW50LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza0VsZW1lbnQgfSBmcm9tICcuL2NvbnRyb2xzL21hc2stZWxlbWVudC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENoYW5nZURldGFpbHMgfSBmcm9tICcuL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuZXhwb3J0IHsgRElSRUNUSU9OLCBmb3JjZURpcmVjdGlvbiB9IGZyb20gJy4vY29yZS91dGlscy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZCB9IGZyb20gJy4vbWFza2VkL2Jhc2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWREYXRlIH0gZnJvbSAnLi9tYXNrZWQvZGF0ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZER5bmFtaWMgfSBmcm9tICcuL21hc2tlZC9keW5hbWljLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkRW51bSB9IGZyb20gJy4vbWFza2VkL2VudW0uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVNYXNrLCBub3JtYWxpemVPcHRzIH0gZnJvbSAnLi9tYXNrZWQvZmFjdG9yeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZEZ1bmN0aW9uIH0gZnJvbSAnLi9tYXNrZWQvZnVuY3Rpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWROdW1iZXIgfSBmcm9tICcuL21hc2tlZC9udW1iZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRQYXR0ZXJuIH0gZnJvbSAnLi9tYXNrZWQvcGF0dGVybi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENodW5rc1RhaWxEZXRhaWxzIH0gZnJvbSAnLi9tYXNrZWQvcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXR0ZXJuRml4ZWREZWZpbml0aW9uIH0gZnJvbSAnLi9tYXNrZWQvcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGF0dGVybklucHV0RGVmaW5pdGlvbiB9IGZyb20gJy4vbWFza2VkL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5leHBvcnQgeyBQSVBFX1RZUEUsIGNyZWF0ZVBpcGUsIHBpcGUgfSBmcm9tICcuL21hc2tlZC9waXBlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkUmFuZ2UgfSBmcm9tICcuL21hc2tlZC9yYW5nZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZFJlZ0V4cCB9IGZyb20gJy4vbWFza2VkL3JlZ2V4cC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlcGVhdEJsb2NrIH0gZnJvbSAnLi9tYXNrZWQvcmVwZWF0LmpzJztcbmltcG9ydCAnLi9jb3JlL2FjdGlvbi1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9jb250cm9scy9pbnB1dC1oaXN0b3J5LmpzJztcbmltcG9ydCAnLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9tYXNrZWQvcGF0dGVybi9jdXJzb3IuanMnO1xuXG50cnkge1xuICBnbG9iYWxUaGlzLklNYXNrID0gSU1hc2s7XG59IGNhdGNoIHt9XG5cbmV4cG9ydCB7IElNYXNrIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IENvbnRpbnVvdXNUYWlsRGV0YWlscyBmcm9tICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCB7IGlzU3RyaW5nLCBESVJFQ1RJT04sIG9iamVjdEluY2x1ZGVzLCBmb3JjZURpcmVjdGlvbiB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcblxuLyoqIEFwcGVuZCBmbGFncyAqL1xuXG4vKiogRXh0cmFjdCBmbGFncyAqL1xuXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy82MjIzXG5cbi8qKiBQcm92aWRlcyBjb21tb24gbWFza2luZyBzdHVmZiAqL1xuY2xhc3MgTWFza2VkIHtcbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqIFRyYW5zZm9ybXMgdmFsdWUgYmVmb3JlIG1hc2sgcHJvY2Vzc2luZyAqL1xuXG4gIC8qKiBUcmFuc2Zvcm1zIGVhY2ggY2hhciBiZWZvcmUgbWFzayBwcm9jZXNzaW5nICovXG5cbiAgLyoqIFZhbGlkYXRlcyBpZiB2YWx1ZSBpcyBhY2NlcHRhYmxlICovXG5cbiAgLyoqIERvZXMgYWRkaXRpb25hbCBwcm9jZXNzaW5nIGF0IHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuXG4gIC8qKiBGb3JtYXQgdHlwZWQgdmFsdWUgdG8gc3RyaW5nICovXG5cbiAgLyoqIFBhcnNlIHN0cmluZyB0byBnZXQgdHlwZWQgdmFsdWUgKi9cblxuICAvKiogRW5hYmxlIGNoYXJhY3RlcnMgb3ZlcndyaXRpbmcgKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB0aGlzLl91cGRhdGUoe1xuICAgICAgLi4uTWFza2VkLkRFRkFVTFRTLFxuICAgICAgLi4ub3B0c1xuICAgIH0pO1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBTZXRzIGFuZCBhcHBsaWVzIG5ldyBvcHRpb25zICovXG4gIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgIGlmICghdGhpcy5vcHRpb25zSXNDaGFuZ2VkKG9wdHMpKSByZXR1cm47XG4gICAgdGhpcy53aXRoVmFsdWVSZWZyZXNoKHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMsIG9wdHMpKTtcbiAgfVxuXG4gIC8qKiBTZXRzIG5ldyBvcHRpb25zICovXG4gIF91cGRhdGUob3B0cykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XG4gIH1cblxuICAvKiogTWFzayBzdGF0ZSAqL1xuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF92YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIF9yYXdJbnB1dFZhbHVlOiB0aGlzLnJhd0lucHV0VmFsdWVcbiAgICB9O1xuICB9XG4gIHNldCBzdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gc3RhdGUuX3ZhbHVlO1xuICB9XG5cbiAgLyoqIFJlc2V0cyB2YWx1ZSAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5yZXNvbHZlKHZhbHVlLCB7XG4gICAgICBpbnB1dDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJlc29sdmUgbmV3IHZhbHVlICovXG4gIHJlc29sdmUodmFsdWUsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge1xuICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuYXBwZW5kKHZhbHVlLCBmbGFncywgJycpO1xuICAgIHRoaXMuZG9Db21taXQoKTtcbiAgfVxuICBnZXQgdW5tYXNrZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuICBzZXQgdW5tYXNrZWRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMucmVzb2x2ZSh2YWx1ZSwge30pO1xuICB9XG4gIGdldCB0eXBlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlID8gdGhpcy5wYXJzZSh0aGlzLnZhbHVlLCB0aGlzKSA6IHRoaXMudW5tYXNrZWRWYWx1ZTtcbiAgfVxuICBzZXQgdHlwZWRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmZvcm1hdCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybWF0KHZhbHVlLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bm1hc2tlZFZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKiogVmFsdWUgdGhhdCBpbmNsdWRlcyByYXcgdXNlciBpbnB1dCAqL1xuICBnZXQgcmF3SW5wdXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRyYWN0SW5wdXQoMCwgdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoLCB7XG4gICAgICByYXc6IHRydWVcbiAgICB9KTtcbiAgfVxuICBzZXQgcmF3SW5wdXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMucmVzb2x2ZSh2YWx1ZSwge1xuICAgICAgcmF3OiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgZ2V0IGRpc3BsYXlWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuICBnZXQgaXNDb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBnZXQgaXNGaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgfVxuXG4gIC8qKiBGaW5kcyBuZWFyZXN0IGlucHV0IHBvc2l0aW9uIGluIGRpcmVjdGlvbiAqL1xuICBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIHtcbiAgICByZXR1cm4gY3Vyc29yUG9zO1xuICB9XG4gIHRvdGFsSW5wdXRQb3NpdGlvbnMoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoLCB0b1BvcyAtIGZyb21Qb3MpO1xuICB9XG5cbiAgLyoqIEV4dHJhY3RzIHZhbHVlIGluIHJhbmdlIGNvbnNpZGVyaW5nIGZsYWdzICovXG4gIGV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5VmFsdWUuc2xpY2UoZnJvbVBvcywgdG9Qb3MpO1xuICB9XG5cbiAgLyoqIEV4dHJhY3RzIHRhaWwgaW4gcmFuZ2UgKi9cbiAgZXh0cmFjdFRhaWwoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyh0aGlzLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcyksIGZyb21Qb3MpO1xuICB9XG5cbiAgLyoqIEFwcGVuZHMgdGFpbCAqL1xuICBhcHBlbmRUYWlsKHRhaWwpIHtcbiAgICBpZiAoaXNTdHJpbmcodGFpbCkpIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSk7XG4gICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8odGhpcyk7XG4gIH1cblxuICAvKiogQXBwZW5kcyBjaGFyICovXG4gIF9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncykge1xuICAgIGlmICghY2gpIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIHRoaXMuX3ZhbHVlICs9IGNoO1xuICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICBpbnNlcnRlZDogY2gsXG4gICAgICByYXdJbnNlcnRlZDogY2hcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBBcHBlbmRzIGNoYXIgKi9cbiAgX2FwcGVuZENoYXIoY2gsIGZsYWdzLCBjaGVja1RhaWwpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgY29uc3QgY29uc2lzdGVudFN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgZGV0YWlscztcbiAgICBbY2gsIGRldGFpbHNdID0gdGhpcy5kb1ByZXBhcmVDaGFyKGNoLCBmbGFncyk7XG4gICAgaWYgKGNoKSB7XG4gICAgICBkZXRhaWxzID0gZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpKTtcblxuICAgICAgLy8gVE9ETyBoYW5kbGUgYHNraXBgP1xuXG4gICAgICAvLyB0cnkgYGF1dG9maXhgIGxvb2thaGVhZFxuICAgICAgaWYgKCFkZXRhaWxzLnJhd0luc2VydGVkICYmIHRoaXMuYXV0b2ZpeCA9PT0gJ3BhZCcpIHtcbiAgICAgICAgY29uc3Qgbm9GaXhTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBjb25zaXN0ZW50U3RhdGU7XG4gICAgICAgIGxldCBmaXhEZXRhaWxzID0gdGhpcy5wYWQoZmxhZ3MpO1xuICAgICAgICBjb25zdCBjaERldGFpbHMgPSB0aGlzLl9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncyk7XG4gICAgICAgIGZpeERldGFpbHMgPSBmaXhEZXRhaWxzLmFnZ3JlZ2F0ZShjaERldGFpbHMpO1xuXG4gICAgICAgIC8vIGlmIGZpeCB3YXMgYXBwbGllZCBvclxuICAgICAgICAvLyBpZiBkZXRhaWxzIGFyZSBlcXVhbCB1c2Ugc2tpcCByZXN0b3Jpbmcgc3RhdGUgb3B0aW1pemF0aW9uXG4gICAgICAgIGlmIChjaERldGFpbHMucmF3SW5zZXJ0ZWQgfHwgZml4RGV0YWlscy5lcXVhbHMoZGV0YWlscykpIHtcbiAgICAgICAgICBkZXRhaWxzID0gZml4RGV0YWlscztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gbm9GaXhTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGV0YWlscy5pbnNlcnRlZCkge1xuICAgICAgbGV0IGNvbnNpc3RlbnRUYWlsO1xuICAgICAgbGV0IGFwcGVuZGVkID0gdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSAhPT0gZmFsc2U7XG4gICAgICBpZiAoYXBwZW5kZWQgJiYgY2hlY2tUYWlsICE9IG51bGwpIHtcbiAgICAgICAgLy8gdmFsaWRhdGlvbiBvaywgY2hlY2sgdGFpbFxuICAgICAgICBjb25zdCBiZWZvcmVUYWlsU3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAodGhpcy5vdmVyd3JpdGUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zaXN0ZW50VGFpbCA9IGNoZWNrVGFpbC5zdGF0ZTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRldGFpbHMucmF3SW5zZXJ0ZWQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNoZWNrVGFpbC51bnNoaWZ0KHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aCAtIGRldGFpbHMudGFpbFNoaWZ0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRhaWxEZXRhaWxzID0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCk7XG4gICAgICAgIGFwcGVuZGVkID0gdGFpbERldGFpbHMucmF3SW5zZXJ0ZWQubGVuZ3RoID09PSBjaGVja1RhaWwudG9TdHJpbmcoKS5sZW5ndGg7XG5cbiAgICAgICAgLy8gbm90IG9rLCB0cnkgc2hpZnRcbiAgICAgICAgaWYgKCEoYXBwZW5kZWQgJiYgdGFpbERldGFpbHMuaW5zZXJ0ZWQpICYmIHRoaXMub3ZlcndyaXRlID09PSAnc2hpZnQnKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IGJlZm9yZVRhaWxTdGF0ZTtcbiAgICAgICAgICBjb25zaXN0ZW50VGFpbCA9IGNoZWNrVGFpbC5zdGF0ZTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRldGFpbHMucmF3SW5zZXJ0ZWQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNoZWNrVGFpbC5zaGlmdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YWlsRGV0YWlscyA9IHRoaXMuYXBwZW5kVGFpbChjaGVja1RhaWwpO1xuICAgICAgICAgIGFwcGVuZGVkID0gdGFpbERldGFpbHMucmF3SW5zZXJ0ZWQubGVuZ3RoID09PSBjaGVja1RhaWwudG9TdHJpbmcoKS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBvaywgcm9sbGJhY2sgc3RhdGUgYWZ0ZXIgdGFpbFxuICAgICAgICBpZiAoYXBwZW5kZWQgJiYgdGFpbERldGFpbHMuaW5zZXJ0ZWQpIHRoaXMuc3RhdGUgPSBiZWZvcmVUYWlsU3RhdGU7XG4gICAgICB9XG5cbiAgICAgIC8vIHJldmVydCBhbGwgaWYgc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIGlmICghYXBwZW5kZWQpIHtcbiAgICAgICAgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBjb25zaXN0ZW50U3RhdGU7XG4gICAgICAgIGlmIChjaGVja1RhaWwgJiYgY29uc2lzdGVudFRhaWwpIGNoZWNrVGFpbC5zdGF0ZSA9IGNvbnNpc3RlbnRUYWlsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuXG4gIC8qKiBBcHBlbmRzIG9wdGlvbmFsIHBsYWNlaG9sZGVyIGF0IHRoZSBlbmQgKi9cbiAgX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICB9XG5cbiAgLyoqIEFwcGVuZHMgb3B0aW9uYWwgZWFnZXIgcGxhY2Vob2xkZXIgYXQgdGhlIGVuZCAqL1xuICBfYXBwZW5kRWFnZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gIH1cblxuICAvKiogQXBwZW5kcyBzeW1ib2xzIGNvbnNpZGVyaW5nIGZsYWdzICovXG4gIGFwcGVuZChzdHIsIGZsYWdzLCB0YWlsKSB7XG4gICAgaWYgKCFpc1N0cmluZyhzdHIpKSB0aHJvdyBuZXcgRXJyb3IoJ3ZhbHVlIHNob3VsZCBiZSBzdHJpbmcnKTtcbiAgICBjb25zdCBjaGVja1RhaWwgPSBpc1N0cmluZyh0YWlsKSA/IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWwpKSA6IHRhaWw7XG4gICAgaWYgKGZsYWdzICE9IG51bGwgJiYgZmxhZ3MudGFpbCkgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGRldGFpbHM7XG4gICAgW3N0ciwgZGV0YWlsc10gPSB0aGlzLmRvUHJlcGFyZShzdHIsIGZsYWdzKTtcbiAgICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgc3RyLmxlbmd0aDsgKytjaSkge1xuICAgICAgY29uc3QgZCA9IHRoaXMuX2FwcGVuZENoYXIoc3RyW2NpXSwgZmxhZ3MsIGNoZWNrVGFpbCk7XG4gICAgICBpZiAoIWQucmF3SW5zZXJ0ZWQgJiYgIXRoaXMuZG9Ta2lwSW52YWxpZChzdHJbY2ldLCBmbGFncywgY2hlY2tUYWlsKSkgYnJlYWs7XG4gICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShkKTtcbiAgICB9XG4gICAgaWYgKCh0aGlzLmVhZ2VyID09PSB0cnVlIHx8IHRoaXMuZWFnZXIgPT09ICdhcHBlbmQnKSAmJiBmbGFncyAhPSBudWxsICYmIGZsYWdzLmlucHV0ICYmIHN0cikge1xuICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kRWFnZXIoKSk7XG4gICAgfVxuXG4gICAgLy8gYXBwZW5kIHRhaWwgYnV0IGFnZ3JlZ2F0ZSBvbmx5IHRhaWxTaGlmdFxuICAgIGlmIChjaGVja1RhaWwgIT0gbnVsbCkge1xuICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCkudGFpbFNoaWZ0O1xuICAgICAgLy8gVE9ETyBpdCdzIGEgZ29vZCBpZGVhIHRvIGNsZWFyIHN0YXRlIGFmdGVyIGFwcGVuZGluZyBlbmRzXG4gICAgICAvLyBidXQgaXQgY2F1c2VzIGJ1Z3Mgd2hlbiBvbmUgYXBwZW5kIGNhbGxzIGFub3RoZXIgKHdoZW4gZHluYW1pYyBkaXNwYXRjaCBzZXQgcmF3SW5wdXRWYWx1ZSlcbiAgICAgIC8vIHRoaXMuX3Jlc2V0QmVmb3JlVGFpbFN0YXRlKCk7XG4gICAgfVxuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIHJlbW92ZShmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5kaXNwbGF5VmFsdWUuc2xpY2UoMCwgZnJvbVBvcykgKyB0aGlzLmRpc3BsYXlWYWx1ZS5zbGljZSh0b1Bvcyk7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gIH1cblxuICAvKiogQ2FsbHMgZnVuY3Rpb24gYW5kIHJlYXBwbGllcyBjdXJyZW50IHZhbHVlICovXG4gIHdpdGhWYWx1ZVJlZnJlc2goZm4pIHtcbiAgICBpZiAodGhpcy5fcmVmcmVzaGluZyB8fCAhdGhpcy5faW5pdGlhbGl6ZWQpIHJldHVybiBmbigpO1xuICAgIHRoaXMuX3JlZnJlc2hpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHJhd0lucHV0ID0gdGhpcy5yYXdJbnB1dFZhbHVlO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBjb25zdCByZXQgPSBmbigpO1xuICAgIHRoaXMucmF3SW5wdXRWYWx1ZSA9IHJhd0lucHV0O1xuICAgIC8vIGFwcGVuZCBsb3N0IHRyYWlsaW5nIGNoYXJzIGF0IHRoZSBlbmRcbiAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlICE9PSB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKHRoaXMudmFsdWUpID09PSAwKSB7XG4gICAgICB0aGlzLmFwcGVuZCh2YWx1ZS5zbGljZSh0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGgpLCB7fSwgJycpO1xuICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fcmVmcmVzaGluZztcbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIHJ1bklzb2xhdGVkKGZuKSB7XG4gICAgaWYgKHRoaXMuX2lzb2xhdGVkIHx8ICF0aGlzLl9pbml0aWFsaXplZCkgcmV0dXJuIGZuKHRoaXMpO1xuICAgIHRoaXMuX2lzb2xhdGVkID0gdHJ1ZTtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcmV0ID0gZm4odGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIGRlbGV0ZSB0aGlzLl9pc29sYXRlZDtcbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIGRvU2tpcEludmFsaWQoY2gsIGZsYWdzLCBjaGVja1RhaWwpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLnNraXBJbnZhbGlkKTtcbiAgfVxuXG4gIC8qKiBQcmVwYXJlcyBzdHJpbmcgYmVmb3JlIG1hc2sgcHJvY2Vzc2luZyAqL1xuICBkb1ByZXBhcmUoc3RyLCBmbGFncykge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gQ2hhbmdlRGV0YWlscy5ub3JtYWxpemUodGhpcy5wcmVwYXJlID8gdGhpcy5wcmVwYXJlKHN0ciwgdGhpcywgZmxhZ3MpIDogc3RyKTtcbiAgfVxuXG4gIC8qKiBQcmVwYXJlcyBlYWNoIGNoYXIgYmVmb3JlIG1hc2sgcHJvY2Vzc2luZyAqL1xuICBkb1ByZXBhcmVDaGFyKHN0ciwgZmxhZ3MpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIENoYW5nZURldGFpbHMubm9ybWFsaXplKHRoaXMucHJlcGFyZUNoYXIgPyB0aGlzLnByZXBhcmVDaGFyKHN0ciwgdGhpcywgZmxhZ3MpIDogc3RyKTtcbiAgfVxuXG4gIC8qKiBWYWxpZGF0ZXMgaWYgdmFsdWUgaXMgYWNjZXB0YWJsZSAqL1xuICBkb1ZhbGlkYXRlKGZsYWdzKSB7XG4gICAgcmV0dXJuICghdGhpcy52YWxpZGF0ZSB8fCB0aGlzLnZhbGlkYXRlKHRoaXMudmFsdWUsIHRoaXMsIGZsYWdzKSkgJiYgKCF0aGlzLnBhcmVudCB8fCB0aGlzLnBhcmVudC5kb1ZhbGlkYXRlKGZsYWdzKSk7XG4gIH1cblxuICAvKiogRG9lcyBhZGRpdGlvbmFsIHByb2Nlc3NpbmcgYXQgdGhlIGVuZCBvZiBlZGl0aW5nICovXG4gIGRvQ29tbWl0KCkge1xuICAgIGlmICh0aGlzLmNvbW1pdCkgdGhpcy5jb21taXQodGhpcy52YWx1ZSwgdGhpcyk7XG4gIH1cbiAgc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgaW5zZXJ0ZWQsIHJlbW92ZURpcmVjdGlvbiwgZmxhZ3MpIHtcbiAgICBpZiAoaW5zZXJ0ZWQgPT09IHZvaWQgMCkge1xuICAgICAgaW5zZXJ0ZWQgPSAnJztcbiAgICB9XG4gICAgaWYgKHJlbW92ZURpcmVjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICByZW1vdmVEaXJlY3Rpb24gPSBESVJFQ1RJT04uTk9ORTtcbiAgICB9XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge1xuICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgdGFpbFBvcyA9IHN0YXJ0ICsgZGVsZXRlQ291bnQ7XG4gICAgY29uc3QgdGFpbCA9IHRoaXMuZXh0cmFjdFRhaWwodGFpbFBvcyk7XG4gICAgY29uc3QgZWFnZXJSZW1vdmUgPSB0aGlzLmVhZ2VyID09PSB0cnVlIHx8IHRoaXMuZWFnZXIgPT09ICdyZW1vdmUnO1xuICAgIGxldCBvbGRSYXdWYWx1ZTtcbiAgICBpZiAoZWFnZXJSZW1vdmUpIHtcbiAgICAgIHJlbW92ZURpcmVjdGlvbiA9IGZvcmNlRGlyZWN0aW9uKHJlbW92ZURpcmVjdGlvbik7XG4gICAgICBvbGRSYXdWYWx1ZSA9IHRoaXMuZXh0cmFjdElucHV0KDAsIHRhaWxQb3MsIHtcbiAgICAgICAgcmF3OiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHN0YXJ0Q2hhbmdlUG9zID0gc3RhcnQ7XG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG5cbiAgICAvLyBpZiBpdCBpcyBqdXN0IGRlbGV0aW9uIHdpdGhvdXQgaW5zZXJ0aW9uXG4gICAgaWYgKHJlbW92ZURpcmVjdGlvbiAhPT0gRElSRUNUSU9OLk5PTkUpIHtcbiAgICAgIHN0YXJ0Q2hhbmdlUG9zID0gdGhpcy5uZWFyZXN0SW5wdXRQb3Moc3RhcnQsIGRlbGV0ZUNvdW50ID4gMSAmJiBzdGFydCAhPT0gMCAmJiAhZWFnZXJSZW1vdmUgPyBESVJFQ1RJT04uTk9ORSA6IHJlbW92ZURpcmVjdGlvbik7XG5cbiAgICAgIC8vIGFkanVzdCB0YWlsU2hpZnQgaWYgc3RhcnQgd2FzIGFsaWduZWRcbiAgICAgIGRldGFpbHMudGFpbFNoaWZ0ID0gc3RhcnRDaGFuZ2VQb3MgLSBzdGFydDtcbiAgICB9XG4gICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5yZW1vdmUoc3RhcnRDaGFuZ2VQb3MpKTtcbiAgICBpZiAoZWFnZXJSZW1vdmUgJiYgcmVtb3ZlRGlyZWN0aW9uICE9PSBESVJFQ1RJT04uTk9ORSAmJiBvbGRSYXdWYWx1ZSA9PT0gdGhpcy5yYXdJbnB1dFZhbHVlKSB7XG4gICAgICBpZiAocmVtb3ZlRGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCkge1xuICAgICAgICBsZXQgdmFsTGVuZ3RoO1xuICAgICAgICB3aGlsZSAob2xkUmF3VmFsdWUgPT09IHRoaXMucmF3SW5wdXRWYWx1ZSAmJiAodmFsTGVuZ3RoID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoKSkge1xuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgICAgICAgIHRhaWxTaGlmdDogLTFcbiAgICAgICAgICB9KSkuYWdncmVnYXRlKHRoaXMucmVtb3ZlKHZhbExlbmd0aCAtIDEpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyZW1vdmVEaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCkge1xuICAgICAgICB0YWlsLnVuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuYXBwZW5kKGluc2VydGVkLCBmbGFncywgdGFpbCkpO1xuICB9XG4gIG1hc2tFcXVhbHMobWFzaykge1xuICAgIHJldHVybiB0aGlzLm1hc2sgPT09IG1hc2s7XG4gIH1cbiAgb3B0aW9uc0lzQ2hhbmdlZChvcHRzKSB7XG4gICAgcmV0dXJuICFvYmplY3RJbmNsdWRlcyh0aGlzLCBvcHRzKTtcbiAgfVxuICB0eXBlZFZhbHVlRXF1YWxzKHZhbHVlKSB7XG4gICAgY29uc3QgdHZhbCA9IHRoaXMudHlwZWRWYWx1ZTtcbiAgICByZXR1cm4gdmFsdWUgPT09IHR2YWwgfHwgTWFza2VkLkVNUFRZX1ZBTFVFUy5pbmNsdWRlcyh2YWx1ZSkgJiYgTWFza2VkLkVNUFRZX1ZBTFVFUy5pbmNsdWRlcyh0dmFsKSB8fCAodGhpcy5mb3JtYXQgPyB0aGlzLmZvcm1hdCh2YWx1ZSwgdGhpcykgPT09IHRoaXMuZm9ybWF0KHRoaXMudHlwZWRWYWx1ZSwgdGhpcykgOiBmYWxzZSk7XG4gIH1cbiAgcGFkKGZsYWdzKSB7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gIH1cbn1cbk1hc2tlZC5ERUZBVUxUUyA9IHtcbiAgc2tpcEludmFsaWQ6IHRydWVcbn07XG5NYXNrZWQuRU1QVFlfVkFMVUVTID0gW3VuZGVmaW5lZCwgbnVsbCwgJyddO1xuSU1hc2suTWFza2VkID0gTWFza2VkO1xuXG5leHBvcnQgeyBNYXNrZWQgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IE1hc2tlZFBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJuLmpzJztcbmltcG9ydCBNYXNrZWRSYW5nZSBmcm9tICcuL3JhbmdlLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9iYXNlLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY3Vyc29yLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcmVnZXhwLmpzJztcblxuY29uc3QgRGVmYXVsdFBhdHRlcm4gPSAnZHsufWBtey59YFknO1xuXG4vLyBNYWtlIGZvcm1hdCBhbmQgcGFyc2UgcmVxdWlyZWQgd2hlbiBwYXR0ZXJuIGlzIHByb3ZpZGVkXG5cbi8qKiBEYXRlIG1hc2sgKi9cbmNsYXNzIE1hc2tlZERhdGUgZXh0ZW5kcyBNYXNrZWRQYXR0ZXJuIHtcbiAgc3RhdGljIGV4dHJhY3RQYXR0ZXJuT3B0aW9ucyhvcHRzKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWFzayxcbiAgICAgIHBhdHRlcm4sXG4gICAgICAuLi5wYXR0ZXJuT3B0c1xuICAgIH0gPSBvcHRzO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5wYXR0ZXJuT3B0cyxcbiAgICAgIG1hc2s6IGlzU3RyaW5nKG1hc2spID8gbWFzayA6IHBhdHRlcm5cbiAgICB9O1xuICB9XG5cbiAgLyoqIFBhdHRlcm4gbWFzayBmb3IgZGF0ZSBhY2NvcmRpbmcgdG8ge0BsaW5rIE1hc2tlZERhdGUjZm9ybWF0fSAqL1xuXG4gIC8qKiBTdGFydCBkYXRlICovXG5cbiAgLyoqIEVuZCBkYXRlICovXG5cbiAgLyoqIEZvcm1hdCB0eXBlZCB2YWx1ZSB0byBzdHJpbmcgKi9cblxuICAvKiogUGFyc2Ugc3RyaW5nIHRvIGdldCB0eXBlZCB2YWx1ZSAqL1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihNYXNrZWREYXRlLmV4dHJhY3RQYXR0ZXJuT3B0aW9ucyh7XG4gICAgICAuLi5NYXNrZWREYXRlLkRFRkFVTFRTLFxuICAgICAgLi4ub3B0c1xuICAgIH0pKTtcbiAgfVxuICB1cGRhdGVPcHRpb25zKG9wdHMpIHtcbiAgICBzdXBlci51cGRhdGVPcHRpb25zKG9wdHMpO1xuICB9XG4gIF91cGRhdGUob3B0cykge1xuICAgIGNvbnN0IHtcbiAgICAgIG1hc2ssXG4gICAgICBwYXR0ZXJuLFxuICAgICAgYmxvY2tzLFxuICAgICAgLi4ucGF0dGVybk9wdHNcbiAgICB9ID0ge1xuICAgICAgLi4uTWFza2VkRGF0ZS5ERUZBVUxUUyxcbiAgICAgIC4uLm9wdHNcbiAgICB9O1xuICAgIGNvbnN0IHBhdHRlcm5CbG9ja3MgPSBPYmplY3QuYXNzaWduKHt9LCBNYXNrZWREYXRlLkdFVF9ERUZBVUxUX0JMT0NLUygpKTtcbiAgICAvLyBhZGp1c3QgeWVhciBibG9ja1xuICAgIGlmIChvcHRzLm1pbikgcGF0dGVybkJsb2Nrcy5ZLmZyb20gPSBvcHRzLm1pbi5nZXRGdWxsWWVhcigpO1xuICAgIGlmIChvcHRzLm1heCkgcGF0dGVybkJsb2Nrcy5ZLnRvID0gb3B0cy5tYXguZ2V0RnVsbFllYXIoKTtcbiAgICBpZiAob3B0cy5taW4gJiYgb3B0cy5tYXggJiYgcGF0dGVybkJsb2Nrcy5ZLmZyb20gPT09IHBhdHRlcm5CbG9ja3MuWS50bykge1xuICAgICAgcGF0dGVybkJsb2Nrcy5tLmZyb20gPSBvcHRzLm1pbi5nZXRNb250aCgpICsgMTtcbiAgICAgIHBhdHRlcm5CbG9ja3MubS50byA9IG9wdHMubWF4LmdldE1vbnRoKCkgKyAxO1xuICAgICAgaWYgKHBhdHRlcm5CbG9ja3MubS5mcm9tID09PSBwYXR0ZXJuQmxvY2tzLm0udG8pIHtcbiAgICAgICAgcGF0dGVybkJsb2Nrcy5kLmZyb20gPSBvcHRzLm1pbi5nZXREYXRlKCk7XG4gICAgICAgIHBhdHRlcm5CbG9ja3MuZC50byA9IG9wdHMubWF4LmdldERhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmFzc2lnbihwYXR0ZXJuQmxvY2tzLCB0aGlzLmJsb2NrcywgYmxvY2tzKTtcbiAgICBzdXBlci5fdXBkYXRlKHtcbiAgICAgIC4uLnBhdHRlcm5PcHRzLFxuICAgICAgbWFzazogaXNTdHJpbmcobWFzaykgPyBtYXNrIDogcGF0dGVybixcbiAgICAgIGJsb2NrczogcGF0dGVybkJsb2Nrc1xuICAgIH0pO1xuICB9XG4gIGRvVmFsaWRhdGUoZmxhZ3MpIHtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5kYXRlO1xuICAgIHJldHVybiBzdXBlci5kb1ZhbGlkYXRlKGZsYWdzKSAmJiAoIXRoaXMuaXNDb21wbGV0ZSB8fCB0aGlzLmlzRGF0ZUV4aXN0KHRoaXMudmFsdWUpICYmIGRhdGUgIT0gbnVsbCAmJiAodGhpcy5taW4gPT0gbnVsbCB8fCB0aGlzLm1pbiA8PSBkYXRlKSAmJiAodGhpcy5tYXggPT0gbnVsbCB8fCBkYXRlIDw9IHRoaXMubWF4KSk7XG4gIH1cblxuICAvKiogQ2hlY2tzIGlmIGRhdGUgaXMgZXhpc3RzICovXG4gIGlzRGF0ZUV4aXN0KHN0cikge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdCh0aGlzLnBhcnNlKHN0ciwgdGhpcyksIHRoaXMpLmluZGV4T2Yoc3RyKSA+PSAwO1xuICB9XG5cbiAgLyoqIFBhcnNlZCBEYXRlICovXG4gIGdldCBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVkVmFsdWU7XG4gIH1cbiAgc2V0IGRhdGUoZGF0ZSkge1xuICAgIHRoaXMudHlwZWRWYWx1ZSA9IGRhdGU7XG4gIH1cbiAgZ2V0IHR5cGVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IHN1cGVyLnR5cGVkVmFsdWUgOiBudWxsO1xuICB9XG4gIHNldCB0eXBlZFZhbHVlKHZhbHVlKSB7XG4gICAgc3VwZXIudHlwZWRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIG1hc2tFcXVhbHMobWFzaykge1xuICAgIHJldHVybiBtYXNrID09PSBEYXRlIHx8IHN1cGVyLm1hc2tFcXVhbHMobWFzayk7XG4gIH1cbiAgb3B0aW9uc0lzQ2hhbmdlZChvcHRzKSB7XG4gICAgcmV0dXJuIHN1cGVyLm9wdGlvbnNJc0NoYW5nZWQoTWFza2VkRGF0ZS5leHRyYWN0UGF0dGVybk9wdGlvbnMob3B0cykpO1xuICB9XG59XG5NYXNrZWREYXRlLkdFVF9ERUZBVUxUX0JMT0NLUyA9ICgpID0+ICh7XG4gIGQ6IHtcbiAgICBtYXNrOiBNYXNrZWRSYW5nZSxcbiAgICBmcm9tOiAxLFxuICAgIHRvOiAzMSxcbiAgICBtYXhMZW5ndGg6IDJcbiAgfSxcbiAgbToge1xuICAgIG1hc2s6IE1hc2tlZFJhbmdlLFxuICAgIGZyb206IDEsXG4gICAgdG86IDEyLFxuICAgIG1heExlbmd0aDogMlxuICB9LFxuICBZOiB7XG4gICAgbWFzazogTWFza2VkUmFuZ2UsXG4gICAgZnJvbTogMTkwMCxcbiAgICB0bzogOTk5OVxuICB9XG59KTtcbk1hc2tlZERhdGUuREVGQVVMVFMgPSB7XG4gIC4uLk1hc2tlZFBhdHRlcm4uREVGQVVMVFMsXG4gIG1hc2s6IERhdGUsXG4gIHBhdHRlcm46IERlZmF1bHRQYXR0ZXJuLFxuICBmb3JtYXQ6IChkYXRlLCBtYXNrZWQpID0+IHtcbiAgICBpZiAoIWRhdGUpIHJldHVybiAnJztcbiAgICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBbZGF5LCBtb250aCwgeWVhcl0uam9pbignLicpO1xuICB9LFxuICBwYXJzZTogKHN0ciwgbWFza2VkKSA9PiB7XG4gICAgY29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gc3RyLnNwbGl0KCcuJykubWFwKE51bWJlcik7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcbiAgfVxufTtcbklNYXNrLk1hc2tlZERhdGUgPSBNYXNrZWREYXRlO1xuXG5leHBvcnQgeyBNYXNrZWREYXRlIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IERJUkVDVElPTiwgb2JqZWN0SW5jbHVkZXMgfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IGNyZWF0ZU1hc2ssIHsgbm9ybWFsaXplT3B0cyB9IGZyb20gJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgTWFza2VkIGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcblxuLyoqIER5bmFtaWMgbWFzayBmb3IgY2hvb3NpbmcgYXBwcm9wcmlhdGUgbWFzayBpbiBydW4tdGltZSAqL1xuY2xhc3MgTWFza2VkRHluYW1pYyBleHRlbmRzIE1hc2tlZCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcih7XG4gICAgICAuLi5NYXNrZWREeW5hbWljLkRFRkFVTFRTLFxuICAgICAgLi4ub3B0c1xuICAgIH0pO1xuICAgIHRoaXMuY3VycmVudE1hc2sgPSB1bmRlZmluZWQ7XG4gIH1cbiAgdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgc3VwZXIudXBkYXRlT3B0aW9ucyhvcHRzKTtcbiAgfVxuICBfdXBkYXRlKG9wdHMpIHtcbiAgICBzdXBlci5fdXBkYXRlKG9wdHMpO1xuICAgIGlmICgnbWFzaycgaW4gb3B0cykge1xuICAgICAgdGhpcy5leHBvc2VNYXNrID0gdW5kZWZpbmVkO1xuICAgICAgLy8gbWFzayBjb3VsZCBiZSB0b3RhbGx5IGR5bmFtaWMgd2l0aCBvbmx5IGBkaXNwYXRjaGAgb3B0aW9uXG4gICAgICB0aGlzLmNvbXBpbGVkTWFza3MgPSBBcnJheS5pc0FycmF5KG9wdHMubWFzaykgPyBvcHRzLm1hc2subWFwKG0gPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZXhwb3NlLFxuICAgICAgICAgIC4uLm1hc2tPcHRzXG4gICAgICAgIH0gPSBub3JtYWxpemVPcHRzKG0pO1xuICAgICAgICBjb25zdCBtYXNrZWQgPSBjcmVhdGVNYXNrKHtcbiAgICAgICAgICBvdmVyd3JpdGU6IHRoaXMuX292ZXJ3cml0ZSxcbiAgICAgICAgICBlYWdlcjogdGhpcy5fZWFnZXIsXG4gICAgICAgICAgc2tpcEludmFsaWQ6IHRoaXMuX3NraXBJbnZhbGlkLFxuICAgICAgICAgIC4uLm1hc2tPcHRzXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZXhwb3NlKSB0aGlzLmV4cG9zZU1hc2sgPSBtYXNrZWQ7XG4gICAgICAgIHJldHVybiBtYXNrZWQ7XG4gICAgICB9KSA6IFtdO1xuXG4gICAgICAvLyB0aGlzLmN1cnJlbnRNYXNrID0gdGhpcy5kb0Rpc3BhdGNoKCcnKTsgLy8gcHJvYmFibHkgbm90IG5lZWRlZCBidXQgbGV0cyBzZWVcbiAgICB9XG4gIH1cbiAgX2FwcGVuZENoYXJSYXcoY2gsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGNvbnN0IGRldGFpbHMgPSB0aGlzLl9hcHBseURpc3BhdGNoKGNoLCBmbGFncyk7XG4gICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuY3VycmVudE1hc2suX2FwcGVuZENoYXIoY2gsIHRoaXMuY3VycmVudE1hc2tGbGFncyhmbGFncykpKTtcbiAgICB9XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbiAgX2FwcGx5RGlzcGF0Y2goYXBwZW5kZWQsIGZsYWdzLCB0YWlsKSB7XG4gICAgaWYgKGFwcGVuZGVkID09PSB2b2lkIDApIHtcbiAgICAgIGFwcGVuZGVkID0gJyc7XG4gICAgfVxuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBpZiAodGFpbCA9PT0gdm9pZCAwKSB7XG4gICAgICB0YWlsID0gJyc7XG4gICAgfVxuICAgIGNvbnN0IHByZXZWYWx1ZUJlZm9yZVRhaWwgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgIT0gbnVsbCA/IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3ZhbHVlIDogdGhpcy52YWx1ZTtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5yYXdJbnB1dFZhbHVlO1xuICAgIGNvbnN0IGluc2VydFZhbHVlID0gZmxhZ3MudGFpbCAmJiBmbGFncy5fYmVmb3JlVGFpbFN0YXRlICE9IG51bGwgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl9yYXdJbnB1dFZhbHVlIDogaW5wdXRWYWx1ZTtcbiAgICBjb25zdCB0YWlsVmFsdWUgPSBpbnB1dFZhbHVlLnNsaWNlKGluc2VydFZhbHVlLmxlbmd0aCk7XG4gICAgY29uc3QgcHJldk1hc2sgPSB0aGlzLmN1cnJlbnRNYXNrO1xuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIGNvbnN0IHByZXZNYXNrU3RhdGUgPSBwcmV2TWFzayA9PSBudWxsID8gdm9pZCAwIDogcHJldk1hc2suc3RhdGU7XG5cbiAgICAvLyBjbG9uZSBmbGFncyB0byBwcmV2ZW50IG92ZXJ3cml0aW5nIGBfYmVmb3JlVGFpbFN0YXRlYFxuICAgIHRoaXMuY3VycmVudE1hc2sgPSB0aGlzLmRvRGlzcGF0Y2goYXBwZW5kZWQsIHtcbiAgICAgIC4uLmZsYWdzXG4gICAgfSwgdGFpbCk7XG5cbiAgICAvLyByZXN0b3JlIHN0YXRlIGFmdGVyIGRpc3BhdGNoXG4gICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrICE9PSBwcmV2TWFzaykge1xuICAgICAgICAvLyBpZiBtYXNrIGNoYW5nZWQgcmVhcHBseSBpbnB1dFxuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnJlc2V0KCk7XG4gICAgICAgIGlmIChpbnNlcnRWYWx1ZSkge1xuICAgICAgICAgIHRoaXMuY3VycmVudE1hc2suYXBwZW5kKGluc2VydFZhbHVlLCB7XG4gICAgICAgICAgICByYXc6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCA9IHRoaXMuY3VycmVudE1hc2sudmFsdWUubGVuZ3RoIC0gcHJldlZhbHVlQmVmb3JlVGFpbC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhaWxWYWx1ZSkge1xuICAgICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ICs9IHRoaXMuY3VycmVudE1hc2suYXBwZW5kKHRhaWxWYWx1ZSwge1xuICAgICAgICAgICAgcmF3OiB0cnVlLFxuICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgIH0pLnRhaWxTaGlmdDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwcmV2TWFza1N0YXRlKSB7XG4gICAgICAgIC8vIERpc3BhdGNoIGNhbiBkbyBzb21ldGhpbmcgYmFkIHdpdGggc3RhdGUsIHNvXG4gICAgICAgIC8vIHJlc3RvcmUgcHJldiBtYXNrIHN0YXRlXG4gICAgICAgIHRoaXMuY3VycmVudE1hc2suc3RhdGUgPSBwcmV2TWFza1N0YXRlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuICBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgY29uc3QgZGV0YWlscyA9IHRoaXMuX2FwcGx5RGlzcGF0Y2goKTtcbiAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5jdXJyZW50TWFzay5fYXBwZW5kUGxhY2Vob2xkZXIoKSk7XG4gICAgfVxuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIF9hcHBlbmRFYWdlcigpIHtcbiAgICBjb25zdCBkZXRhaWxzID0gdGhpcy5fYXBwbHlEaXNwYXRjaCgpO1xuICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrLl9hcHBlbmRFYWdlcigpKTtcbiAgICB9XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbiAgYXBwZW5kVGFpbCh0YWlsKSB7XG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgaWYgKHRhaWwpIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuX2FwcGx5RGlzcGF0Y2goJycsIHt9LCB0YWlsKSk7XG4gICAgcmV0dXJuIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLmFwcGVuZFRhaWwodGFpbCkgOiBzdXBlci5hcHBlbmRUYWlsKHRhaWwpKTtcbiAgfVxuICBjdXJyZW50TWFza0ZsYWdzKGZsYWdzKSB7XG4gICAgdmFyIF9mbGFncyRfYmVmb3JlVGFpbFN0YSwgX2ZsYWdzJF9iZWZvcmVUYWlsU3RhMjtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZmxhZ3MsXG4gICAgICBfYmVmb3JlVGFpbFN0YXRlOiAoKF9mbGFncyRfYmVmb3JlVGFpbFN0YSA9IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUpID09IG51bGwgPyB2b2lkIDAgOiBfZmxhZ3MkX2JlZm9yZVRhaWxTdGEuY3VycmVudE1hc2tSZWYpID09PSB0aGlzLmN1cnJlbnRNYXNrICYmICgoX2ZsYWdzJF9iZWZvcmVUYWlsU3RhMiA9IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUpID09IG51bGwgPyB2b2lkIDAgOiBfZmxhZ3MkX2JlZm9yZVRhaWxTdGEyLmN1cnJlbnRNYXNrKSB8fCBmbGFncy5fYmVmb3JlVGFpbFN0YXRlXG4gICAgfTtcbiAgfVxuICBkb0Rpc3BhdGNoKGFwcGVuZGVkLCBmbGFncywgdGFpbCkge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBpZiAodGFpbCA9PT0gdm9pZCAwKSB7XG4gICAgICB0YWlsID0gJyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKGFwcGVuZGVkLCB0aGlzLCBmbGFncywgdGFpbCk7XG4gIH1cbiAgZG9WYWxpZGF0ZShmbGFncykge1xuICAgIHJldHVybiBzdXBlci5kb1ZhbGlkYXRlKGZsYWdzKSAmJiAoIXRoaXMuY3VycmVudE1hc2sgfHwgdGhpcy5jdXJyZW50TWFzay5kb1ZhbGlkYXRlKHRoaXMuY3VycmVudE1hc2tGbGFncyhmbGFncykpKTtcbiAgfVxuICBkb1ByZXBhcmUoc3RyLCBmbGFncykge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBsZXQgW3MsIGRldGFpbHNdID0gc3VwZXIuZG9QcmVwYXJlKHN0ciwgZmxhZ3MpO1xuICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICBsZXQgY3VycmVudERldGFpbHM7XG4gICAgICBbcywgY3VycmVudERldGFpbHNdID0gc3VwZXIuZG9QcmVwYXJlKHMsIHRoaXMuY3VycmVudE1hc2tGbGFncyhmbGFncykpO1xuICAgICAgZGV0YWlscyA9IGRldGFpbHMuYWdncmVnYXRlKGN1cnJlbnREZXRhaWxzKTtcbiAgICB9XG4gICAgcmV0dXJuIFtzLCBkZXRhaWxzXTtcbiAgfVxuICBkb1ByZXBhcmVDaGFyKHN0ciwgZmxhZ3MpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgbGV0IFtzLCBkZXRhaWxzXSA9IHN1cGVyLmRvUHJlcGFyZUNoYXIoc3RyLCBmbGFncyk7XG4gICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgIGxldCBjdXJyZW50RGV0YWlscztcbiAgICAgIFtzLCBjdXJyZW50RGV0YWlsc10gPSBzdXBlci5kb1ByZXBhcmVDaGFyKHMsIHRoaXMuY3VycmVudE1hc2tGbGFncyhmbGFncykpO1xuICAgICAgZGV0YWlscyA9IGRldGFpbHMuYWdncmVnYXRlKGN1cnJlbnREZXRhaWxzKTtcbiAgICB9XG4gICAgcmV0dXJuIFtzLCBkZXRhaWxzXTtcbiAgfVxuICByZXNldCgpIHtcbiAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s7XG4gICAgKF90aGlzJGN1cnJlbnRNYXNrID0gdGhpcy5jdXJyZW50TWFzaykgPT0gbnVsbCB8fCBfdGhpcyRjdXJyZW50TWFzay5yZXNldCgpO1xuICAgIHRoaXMuY29tcGlsZWRNYXNrcy5mb3JFYWNoKG0gPT4gbS5yZXNldCgpKTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwb3NlTWFzayA/IHRoaXMuZXhwb3NlTWFzay52YWx1ZSA6IHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnZhbHVlIDogJyc7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZXhwb3NlTWFzaykge1xuICAgICAgdGhpcy5leHBvc2VNYXNrLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmN1cnJlbnRNYXNrID0gdGhpcy5leHBvc2VNYXNrO1xuICAgICAgdGhpcy5fYXBwbHlEaXNwYXRjaCgpO1xuICAgIH0gZWxzZSBzdXBlci52YWx1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCB1bm1hc2tlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmV4cG9zZU1hc2sgPyB0aGlzLmV4cG9zZU1hc2sudW5tYXNrZWRWYWx1ZSA6IHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnVubWFza2VkVmFsdWUgOiAnJztcbiAgfVxuICBzZXQgdW5tYXNrZWRWYWx1ZSh1bm1hc2tlZFZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZXhwb3NlTWFzaykge1xuICAgICAgdGhpcy5leHBvc2VNYXNrLnVubWFza2VkVmFsdWUgPSB1bm1hc2tlZFZhbHVlO1xuICAgICAgdGhpcy5jdXJyZW50TWFzayA9IHRoaXMuZXhwb3NlTWFzaztcbiAgICAgIHRoaXMuX2FwcGx5RGlzcGF0Y2goKTtcbiAgICB9IGVsc2Ugc3VwZXIudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkVmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwb3NlTWFzayA/IHRoaXMuZXhwb3NlTWFzay50eXBlZFZhbHVlIDogdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudHlwZWRWYWx1ZSA6ICcnO1xuICB9XG4gIHNldCB0eXBlZFZhbHVlKHR5cGVkVmFsdWUpIHtcbiAgICBpZiAodGhpcy5leHBvc2VNYXNrKSB7XG4gICAgICB0aGlzLmV4cG9zZU1hc2sudHlwZWRWYWx1ZSA9IHR5cGVkVmFsdWU7XG4gICAgICB0aGlzLmN1cnJlbnRNYXNrID0gdGhpcy5leHBvc2VNYXNrO1xuICAgICAgdGhpcy5fYXBwbHlEaXNwYXRjaCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdW5tYXNrZWRWYWx1ZSA9IFN0cmluZyh0eXBlZFZhbHVlKTtcblxuICAgIC8vIGRvdWJsZSBjaGVjayBpdFxuICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICB0aGlzLmN1cnJlbnRNYXNrLnR5cGVkVmFsdWUgPSB0eXBlZFZhbHVlO1xuICAgICAgdW5tYXNrZWRWYWx1ZSA9IHRoaXMuY3VycmVudE1hc2sudW5tYXNrZWRWYWx1ZTtcbiAgICB9XG4gICAgdGhpcy51bm1hc2tlZFZhbHVlID0gdW5tYXNrZWRWYWx1ZTtcbiAgfVxuICBnZXQgZGlzcGxheVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay5kaXNwbGF5VmFsdWUgOiAnJztcbiAgfVxuICBnZXQgaXNDb21wbGV0ZSgpIHtcbiAgICB2YXIgX3RoaXMkY3VycmVudE1hc2syO1xuICAgIHJldHVybiBCb29sZWFuKChfdGhpcyRjdXJyZW50TWFzazIgPSB0aGlzLmN1cnJlbnRNYXNrKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkY3VycmVudE1hc2syLmlzQ29tcGxldGUpO1xuICB9XG4gIGdldCBpc0ZpbGxlZCgpIHtcbiAgICB2YXIgX3RoaXMkY3VycmVudE1hc2szO1xuICAgIHJldHVybiBCb29sZWFuKChfdGhpcyRjdXJyZW50TWFzazMgPSB0aGlzLmN1cnJlbnRNYXNrKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkY3VycmVudE1hc2szLmlzRmlsbGVkKTtcbiAgfVxuICByZW1vdmUoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5jdXJyZW50TWFzay5yZW1vdmUoZnJvbVBvcywgdG9Qb3MpKVxuICAgICAgLy8gdXBkYXRlIHdpdGggZGlzcGF0Y2hcbiAgICAgIC5hZ2dyZWdhdGUodGhpcy5fYXBwbHlEaXNwYXRjaCgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbiAgZ2V0IHN0YXRlKCkge1xuICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN1cGVyLnN0YXRlLFxuICAgICAgX3Jhd0lucHV0VmFsdWU6IHRoaXMucmF3SW5wdXRWYWx1ZSxcbiAgICAgIGNvbXBpbGVkTWFza3M6IHRoaXMuY29tcGlsZWRNYXNrcy5tYXAobSA9PiBtLnN0YXRlKSxcbiAgICAgIGN1cnJlbnRNYXNrUmVmOiB0aGlzLmN1cnJlbnRNYXNrLFxuICAgICAgY3VycmVudE1hc2s6IChfdGhpcyRjdXJyZW50TWFzazQgPSB0aGlzLmN1cnJlbnRNYXNrKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkY3VycmVudE1hc2s0LnN0YXRlXG4gICAgfTtcbiAgfVxuICBzZXQgc3RhdGUoc3RhdGUpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb21waWxlZE1hc2tzLFxuICAgICAgY3VycmVudE1hc2tSZWYsXG4gICAgICBjdXJyZW50TWFzayxcbiAgICAgIC4uLm1hc2tlZFN0YXRlXG4gICAgfSA9IHN0YXRlO1xuICAgIGlmIChjb21waWxlZE1hc2tzKSB0aGlzLmNvbXBpbGVkTWFza3MuZm9yRWFjaCgobSwgbWkpID0+IG0uc3RhdGUgPSBjb21waWxlZE1hc2tzW21pXSk7XG4gICAgaWYgKGN1cnJlbnRNYXNrUmVmICE9IG51bGwpIHtcbiAgICAgIHRoaXMuY3VycmVudE1hc2sgPSBjdXJyZW50TWFza1JlZjtcbiAgICAgIHRoaXMuY3VycmVudE1hc2suc3RhdGUgPSBjdXJyZW50TWFzaztcbiAgICB9XG4gICAgc3VwZXIuc3RhdGUgPSBtYXNrZWRTdGF0ZTtcbiAgfVxuICBleHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpIDogJyc7XG4gIH1cbiAgZXh0cmFjdFRhaWwoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2suZXh0cmFjdFRhaWwoZnJvbVBvcywgdG9Qb3MpIDogc3VwZXIuZXh0cmFjdFRhaWwoZnJvbVBvcywgdG9Qb3MpO1xuICB9XG4gIGRvQ29tbWl0KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB0aGlzLmN1cnJlbnRNYXNrLmRvQ29tbWl0KCk7XG4gICAgc3VwZXIuZG9Db21taXQoKTtcbiAgfVxuICBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2submVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSA6IHN1cGVyLm5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MsIGRpcmVjdGlvbik7XG4gIH1cbiAgZ2V0IG92ZXJ3cml0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sub3ZlcndyaXRlIDogdGhpcy5fb3ZlcndyaXRlO1xuICB9XG4gIHNldCBvdmVyd3JpdGUob3ZlcndyaXRlKSB7XG4gICAgdGhpcy5fb3ZlcndyaXRlID0gb3ZlcndyaXRlO1xuICB9XG4gIGdldCBlYWdlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2suZWFnZXIgOiB0aGlzLl9lYWdlcjtcbiAgfVxuICBzZXQgZWFnZXIoZWFnZXIpIHtcbiAgICB0aGlzLl9lYWdlciA9IGVhZ2VyO1xuICB9XG4gIGdldCBza2lwSW52YWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2suc2tpcEludmFsaWQgOiB0aGlzLl9za2lwSW52YWxpZDtcbiAgfVxuICBzZXQgc2tpcEludmFsaWQoc2tpcEludmFsaWQpIHtcbiAgICB0aGlzLl9za2lwSW52YWxpZCA9IHNraXBJbnZhbGlkO1xuICB9XG4gIGdldCBhdXRvZml4KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay5hdXRvZml4IDogdGhpcy5fYXV0b2ZpeDtcbiAgfVxuICBzZXQgYXV0b2ZpeChhdXRvZml4KSB7XG4gICAgdGhpcy5fYXV0b2ZpeCA9IGF1dG9maXg7XG4gIH1cbiAgbWFza0VxdWFscyhtYXNrKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkobWFzaykgPyB0aGlzLmNvbXBpbGVkTWFza3MuZXZlcnkoKG0sIG1pKSA9PiB7XG4gICAgICBpZiAoIW1hc2tbbWldKSByZXR1cm47XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1hc2s6IG9sZE1hc2ssXG4gICAgICAgIC4uLnJlc3RPcHRzXG4gICAgICB9ID0gbWFza1ttaV07XG4gICAgICByZXR1cm4gb2JqZWN0SW5jbHVkZXMobSwgcmVzdE9wdHMpICYmIG0ubWFza0VxdWFscyhvbGRNYXNrKTtcbiAgICB9KSA6IHN1cGVyLm1hc2tFcXVhbHMobWFzayk7XG4gIH1cbiAgdHlwZWRWYWx1ZUVxdWFscyh2YWx1ZSkge1xuICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazU7XG4gICAgcmV0dXJuIEJvb2xlYW4oKF90aGlzJGN1cnJlbnRNYXNrNSA9IHRoaXMuY3VycmVudE1hc2spID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRjdXJyZW50TWFzazUudHlwZWRWYWx1ZUVxdWFscyh2YWx1ZSkpO1xuICB9XG59XG4vKiogQ3VycmVudGx5IGNob3NlbiBtYXNrICovXG4vKiogQ3VycmVudGx5IGNob3NlbiBtYXNrICovXG4vKiogQ29tcGxpbGVkIHtAbGluayBNYXNrZWR9IG9wdGlvbnMgKi9cbi8qKiBDaG9vc2VzIHtAbGluayBNYXNrZWR9IGRlcGVuZGluZyBvbiBpbnB1dCB2YWx1ZSAqL1xuTWFza2VkRHluYW1pYy5ERUZBVUxUUyA9IHtcbiAgLi4uTWFza2VkLkRFRkFVTFRTLFxuICBkaXNwYXRjaDogKGFwcGVuZGVkLCBtYXNrZWQsIGZsYWdzLCB0YWlsKSA9PiB7XG4gICAgaWYgKCFtYXNrZWQuY29tcGlsZWRNYXNrcy5sZW5ndGgpIHJldHVybjtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gbWFza2VkLnJhd0lucHV0VmFsdWU7XG5cbiAgICAvLyBzaW11bGF0ZSBpbnB1dFxuICAgIGNvbnN0IGlucHV0cyA9IG1hc2tlZC5jb21waWxlZE1hc2tzLm1hcCgobSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGlzQ3VycmVudCA9IG1hc2tlZC5jdXJyZW50TWFzayA9PT0gbTtcbiAgICAgIGNvbnN0IHN0YXJ0SW5wdXRQb3MgPSBpc0N1cnJlbnQgPyBtLmRpc3BsYXlWYWx1ZS5sZW5ndGggOiBtLm5lYXJlc3RJbnB1dFBvcyhtLmRpc3BsYXlWYWx1ZS5sZW5ndGgsIERJUkVDVElPTi5GT1JDRV9MRUZUKTtcbiAgICAgIGlmIChtLnJhd0lucHV0VmFsdWUgIT09IGlucHV0VmFsdWUpIHtcbiAgICAgICAgbS5yZXNldCgpO1xuICAgICAgICBtLmFwcGVuZChpbnB1dFZhbHVlLCB7XG4gICAgICAgICAgcmF3OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghaXNDdXJyZW50KSB7XG4gICAgICAgIG0ucmVtb3ZlKHN0YXJ0SW5wdXRQb3MpO1xuICAgICAgfVxuICAgICAgbS5hcHBlbmQoYXBwZW5kZWQsIG1hc2tlZC5jdXJyZW50TWFza0ZsYWdzKGZsYWdzKSk7XG4gICAgICBtLmFwcGVuZFRhaWwodGFpbCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRleCxcbiAgICAgICAgd2VpZ2h0OiBtLnJhd0lucHV0VmFsdWUubGVuZ3RoLFxuICAgICAgICB0b3RhbElucHV0UG9zaXRpb25zOiBtLnRvdGFsSW5wdXRQb3NpdGlvbnMoMCwgTWF0aC5tYXgoc3RhcnRJbnB1dFBvcywgbS5uZWFyZXN0SW5wdXRQb3MobS5kaXNwbGF5VmFsdWUubGVuZ3RoLCBESVJFQ1RJT04uRk9SQ0VfTEVGVCkpKVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIC8vIHBvcCBtYXNrcyB3aXRoIGxvbmdlciB2YWx1ZXMgZmlyc3RcbiAgICBpbnB1dHMuc29ydCgoaTEsIGkyKSA9PiBpMi53ZWlnaHQgLSBpMS53ZWlnaHQgfHwgaTIudG90YWxJbnB1dFBvc2l0aW9ucyAtIGkxLnRvdGFsSW5wdXRQb3NpdGlvbnMpO1xuICAgIHJldHVybiBtYXNrZWQuY29tcGlsZWRNYXNrc1tpbnB1dHNbMF0uaW5kZXhdO1xuICB9XG59O1xuSU1hc2suTWFza2VkRHluYW1pYyA9IE1hc2tlZER5bmFtaWM7XG5cbmV4cG9ydCB7IE1hc2tlZER5bmFtaWMgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IE1hc2tlZFBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJuLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IENvbnRpbnVvdXNUYWlsRGV0YWlscyBmcm9tICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9iYXNlLmpzJztcbmltcG9ydCAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jdXJzb3IuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9yZWdleHAuanMnO1xuXG4vKiogUGF0dGVybiB3aGljaCB2YWxpZGF0ZXMgZW51bSB2YWx1ZXMgKi9cbmNsYXNzIE1hc2tlZEVudW0gZXh0ZW5kcyBNYXNrZWRQYXR0ZXJuIHtcbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLk1hc2tlZEVudW0uREVGQVVMVFMsXG4gICAgICAuLi5vcHRzXG4gICAgfSk7IC8vIG1hc2sgd2lsbCBiZSBjcmVhdGVkIGluIF91cGRhdGVcbiAgfVxuICB1cGRhdGVPcHRpb25zKG9wdHMpIHtcbiAgICBzdXBlci51cGRhdGVPcHRpb25zKG9wdHMpO1xuICB9XG4gIF91cGRhdGUob3B0cykge1xuICAgIGNvbnN0IHtcbiAgICAgIGVudW06IGVudW1fLFxuICAgICAgLi4uZW9wdHNcbiAgICB9ID0gb3B0cztcbiAgICBpZiAoZW51bV8pIHtcbiAgICAgIGNvbnN0IGxlbmd0aHMgPSBlbnVtXy5tYXAoZSA9PiBlLmxlbmd0aCk7XG4gICAgICBjb25zdCByZXF1aXJlZExlbmd0aCA9IE1hdGgubWluKC4uLmxlbmd0aHMpO1xuICAgICAgY29uc3Qgb3B0aW9uYWxMZW5ndGggPSBNYXRoLm1heCguLi5sZW5ndGhzKSAtIHJlcXVpcmVkTGVuZ3RoO1xuICAgICAgZW9wdHMubWFzayA9ICcqJy5yZXBlYXQocmVxdWlyZWRMZW5ndGgpO1xuICAgICAgaWYgKG9wdGlvbmFsTGVuZ3RoKSBlb3B0cy5tYXNrICs9ICdbJyArICcqJy5yZXBlYXQob3B0aW9uYWxMZW5ndGgpICsgJ10nO1xuICAgICAgdGhpcy5lbnVtID0gZW51bV87XG4gICAgfVxuICAgIHN1cGVyLl91cGRhdGUoZW9wdHMpO1xuICB9XG4gIF9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncykge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBtYXRjaEZyb20gPSBNYXRoLm1pbih0aGlzLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uRk9SQ0VfUklHSFQpLCB0aGlzLnZhbHVlLmxlbmd0aCk7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuZW51bS5maWx0ZXIoZSA9PiB0aGlzLm1hdGNoVmFsdWUoZSwgdGhpcy51bm1hc2tlZFZhbHVlICsgY2gsIG1hdGNoRnJvbSkpO1xuICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKDAsIHRoaXMudmFsdWUubGVuZ3RoLCAoYiwgYmkpID0+IHtcbiAgICAgICAgICBjb25zdCBtY2ggPSBtYXRjaGVzWzBdW2JpXTtcbiAgICAgICAgICBpZiAoYmkgPj0gdGhpcy52YWx1ZS5sZW5ndGggfHwgbWNoID09PSBiLnZhbHVlKSByZXR1cm47XG4gICAgICAgICAgYi5yZXNldCgpO1xuICAgICAgICAgIGIuX2FwcGVuZENoYXIobWNoLCBmbGFncyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgZCA9IHN1cGVyLl9hcHBlbmRDaGFyUmF3KG1hdGNoZXNbMF1bdGhpcy52YWx1ZS5sZW5ndGhdLCBmbGFncyk7XG4gICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgbWF0Y2hlc1swXS5zbGljZSh0aGlzLnVubWFza2VkVmFsdWUubGVuZ3RoKS5zcGxpdCgnJykuZm9yRWFjaChtY2ggPT4gZC5hZ2dyZWdhdGUoc3VwZXIuX2FwcGVuZENoYXJSYXcobWNoKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICBza2lwOiAhdGhpcy5pc0NvbXBsZXRlXG4gICAgfSk7XG4gIH1cbiAgZXh0cmFjdFRhaWwoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICAvLyBqdXN0IGRyb3AgdGFpbFxuICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKCcnLCBmcm9tUG9zKTtcbiAgfVxuICByZW1vdmUoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAoZnJvbVBvcyA9PT0gdG9Qb3MpIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIGNvbnN0IG1hdGNoRnJvbSA9IE1hdGgubWluKHN1cGVyLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uRk9SQ0VfUklHSFQpLCB0aGlzLnZhbHVlLmxlbmd0aCk7XG4gICAgbGV0IHBvcztcbiAgICBmb3IgKHBvcyA9IGZyb21Qb3M7IHBvcyA+PSAwOyAtLXBvcykge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuZW51bS5maWx0ZXIoZSA9PiB0aGlzLm1hdGNoVmFsdWUoZSwgdGhpcy52YWx1ZS5zbGljZShtYXRjaEZyb20sIHBvcyksIG1hdGNoRnJvbSkpO1xuICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMSkgYnJlYWs7XG4gICAgfVxuICAgIGNvbnN0IGRldGFpbHMgPSBzdXBlci5yZW1vdmUocG9zLCB0b1Bvcyk7XG4gICAgZGV0YWlscy50YWlsU2hpZnQgKz0gcG9zIC0gZnJvbVBvcztcbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuICBnZXQgaXNDb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbnVtLmluZGV4T2YodGhpcy52YWx1ZSkgPj0gMDtcbiAgfVxufVxuLyoqIE1hdGNoIGVudW0gdmFsdWUgKi9cbk1hc2tlZEVudW0uREVGQVVMVFMgPSB7XG4gIC4uLk1hc2tlZFBhdHRlcm4uREVGQVVMVFMsXG4gIG1hdGNoVmFsdWU6IChlc3RyLCBpc3RyLCBtYXRjaEZyb20pID0+IGVzdHIuaW5kZXhPZihpc3RyLCBtYXRjaEZyb20pID09PSBtYXRjaEZyb21cbn07XG5JTWFzay5NYXNrZWRFbnVtID0gTWFza2VkRW51bTtcblxuZXhwb3J0IHsgTWFza2VkRW51bSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNPYmplY3QsIHBpY2sgfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5cbi8vIFRPRE8gY2FuJ3QgdXNlIG92ZXJsb2FkcyBoZXJlIGJlY2F1c2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy81MDc1NFxuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IHN0cmluZyk6IHR5cGVvZiBNYXNrZWRQYXR0ZXJuO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IERhdGVDb25zdHJ1Y3Rvcik6IHR5cGVvZiBNYXNrZWREYXRlO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IE51bWJlckNvbnN0cnVjdG9yKTogdHlwZW9mIE1hc2tlZE51bWJlcjtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiBBcnJheTxhbnk+IHwgQXJyYXlDb25zdHJ1Y3Rvcik6IHR5cGVvZiBNYXNrZWREeW5hbWljO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IE1hc2tlZERhdGUpOiB0eXBlb2YgTWFza2VkRGF0ZTtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiBNYXNrZWROdW1iZXIpOiB0eXBlb2YgTWFza2VkTnVtYmVyO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IE1hc2tlZEVudW0pOiB0eXBlb2YgTWFza2VkRW51bTtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiBNYXNrZWRSYW5nZSk6IHR5cGVvZiBNYXNrZWRSYW5nZTtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiBNYXNrZWRSZWdFeHApOiB0eXBlb2YgTWFza2VkUmVnRXhwO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IE1hc2tlZEZ1bmN0aW9uKTogdHlwZW9mIE1hc2tlZEZ1bmN0aW9uO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IE1hc2tlZFBhdHRlcm4pOiB0eXBlb2YgTWFza2VkUGF0dGVybjtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiBNYXNrZWREeW5hbWljKTogdHlwZW9mIE1hc2tlZER5bmFtaWM7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogTWFza2VkKTogdHlwZW9mIE1hc2tlZDtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiB0eXBlb2YgTWFza2VkKTogdHlwZW9mIE1hc2tlZDtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiB0eXBlb2YgTWFza2VkRGF0ZSk6IHR5cGVvZiBNYXNrZWREYXRlO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IHR5cGVvZiBNYXNrZWROdW1iZXIpOiB0eXBlb2YgTWFza2VkTnVtYmVyO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IHR5cGVvZiBNYXNrZWRFbnVtKTogdHlwZW9mIE1hc2tlZEVudW07XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogdHlwZW9mIE1hc2tlZFJhbmdlKTogdHlwZW9mIE1hc2tlZFJhbmdlO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IHR5cGVvZiBNYXNrZWRSZWdFeHApOiB0eXBlb2YgTWFza2VkUmVnRXhwO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IHR5cGVvZiBNYXNrZWRGdW5jdGlvbik6IHR5cGVvZiBNYXNrZWRGdW5jdGlvbjtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiB0eXBlb2YgTWFza2VkUGF0dGVybik6IHR5cGVvZiBNYXNrZWRQYXR0ZXJuO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IHR5cGVvZiBNYXNrZWREeW5hbWljKTogdHlwZW9mIE1hc2tlZER5bmFtaWM7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3M8TWFzayBleHRlbmRzIHR5cGVvZiBNYXNrZWQ+IChtYXNrOiBNYXNrKTogTWFzaztcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiBSZWdFeHApOiB0eXBlb2YgTWFza2VkUmVnRXhwO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6ICh2YWx1ZTogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkgPT4gYm9vbGVhbik6IHR5cGVvZiBNYXNrZWRGdW5jdGlvbjtcblxuLyoqIEdldCBNYXNrZWQgY2xhc3MgYnkgbWFzayB0eXBlICovXG5mdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrKSAvKiBUT0RPICove1xuICBpZiAobWFzayA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ21hc2sgcHJvcGVydHkgc2hvdWxkIGJlIGRlZmluZWQnKTtcbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiBJTWFzay5NYXNrZWRSZWdFeHA7XG4gIGlmIChpc1N0cmluZyhtYXNrKSkgcmV0dXJuIElNYXNrLk1hc2tlZFBhdHRlcm47XG4gIGlmIChtYXNrID09PSBEYXRlKSByZXR1cm4gSU1hc2suTWFza2VkRGF0ZTtcbiAgaWYgKG1hc2sgPT09IE51bWJlcikgcmV0dXJuIElNYXNrLk1hc2tlZE51bWJlcjtcbiAgaWYgKEFycmF5LmlzQXJyYXkobWFzaykgfHwgbWFzayA9PT0gQXJyYXkpIHJldHVybiBJTWFzay5NYXNrZWREeW5hbWljO1xuICBpZiAoSU1hc2suTWFza2VkICYmIG1hc2sucHJvdG90eXBlIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSByZXR1cm4gbWFzaztcbiAgaWYgKElNYXNrLk1hc2tlZCAmJiBtYXNrIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSByZXR1cm4gbWFzay5jb25zdHJ1Y3RvcjtcbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBGdW5jdGlvbikgcmV0dXJuIElNYXNrLk1hc2tlZEZ1bmN0aW9uO1xuICBjb25zb2xlLndhcm4oJ01hc2sgbm90IGZvdW5kIGZvciBtYXNrJywgbWFzayk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICByZXR1cm4gSU1hc2suTWFza2VkO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplT3B0cyhvcHRzKSB7XG4gIGlmICghb3B0cykgdGhyb3cgbmV3IEVycm9yKCdPcHRpb25zIGluIG5vdCBkZWZpbmVkJyk7XG4gIGlmIChJTWFzay5NYXNrZWQpIHtcbiAgICBpZiAob3B0cy5wcm90b3R5cGUgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpIHJldHVybiB7XG4gICAgICBtYXNrOiBvcHRzXG4gICAgfTtcblxuICAgIC8qXG4gICAgICBoYW5kbGUgY2FzZXMgbGlrZTpcbiAgICAgIDEpIG9wdHMgPSBNYXNrZWRcbiAgICAgIDIpIG9wdHMgPSB7IG1hc2s6IE1hc2tlZCwgLi4uaW5zdGFuY2VPcHRzIH1cbiAgICAqL1xuICAgIGNvbnN0IHtcbiAgICAgIG1hc2sgPSB1bmRlZmluZWQsXG4gICAgICAuLi5pbnN0YW5jZU9wdHNcbiAgICB9ID0gb3B0cyBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCA/IHtcbiAgICAgIG1hc2s6IG9wdHNcbiAgICB9IDogaXNPYmplY3Qob3B0cykgJiYgb3B0cy5tYXNrIGluc3RhbmNlb2YgSU1hc2suTWFza2VkID8gb3B0cyA6IHt9O1xuICAgIGlmIChtYXNrKSB7XG4gICAgICBjb25zdCBfbWFzayA9IG1hc2subWFzaztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnBpY2sobWFzaywgKF8sIGspID0+ICFrLnN0YXJ0c1dpdGgoJ18nKSksXG4gICAgICAgIG1hc2s6IG1hc2suY29uc3RydWN0b3IsXG4gICAgICAgIF9tYXNrLFxuICAgICAgICAuLi5pbnN0YW5jZU9wdHNcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGlmICghaXNPYmplY3Qob3B0cykpIHJldHVybiB7XG4gICAgbWFzazogb3B0c1xuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLm9wdHNcbiAgfTtcbn1cblxuLy8gVE9ETyBjYW4ndCB1c2Ugb3ZlcmxvYWRzIGhlcmUgYmVjYXVzZSBvZiBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzUwNzU0XG5cbi8vIEZyb20gbWFza2VkXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWQsIFJldHVybk1hc2tlZD1PcHRzPiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIC8vIEZyb20gbWFza2VkIGNsYXNzXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWRPcHRpb25zPHR5cGVvZiBNYXNrZWQ+LCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWQ9SW5zdGFuY2VUeXBlPE9wdHNbJ21hc2snXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkT3B0aW9uczx0eXBlb2YgTWFza2VkRGF0ZT4sIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZERhdGU9TWFza2VkRGF0ZTxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkT3B0aW9uczx0eXBlb2YgTWFza2VkTnVtYmVyPiwgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkTnVtYmVyPU1hc2tlZE51bWJlcjxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkT3B0aW9uczx0eXBlb2YgTWFza2VkRW51bT4sIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZEVudW09TWFza2VkRW51bTxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkT3B0aW9uczx0eXBlb2YgTWFza2VkUmFuZ2U+LCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWRSYW5nZT1NYXNrZWRSYW5nZTxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkT3B0aW9uczx0eXBlb2YgTWFza2VkUmVnRXhwPiwgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkUmVnRXhwPU1hc2tlZFJlZ0V4cDxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkT3B0aW9uczx0eXBlb2YgTWFza2VkRnVuY3Rpb24+LCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWRGdW5jdGlvbj1NYXNrZWRGdW5jdGlvbjxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkT3B0aW9uczx0eXBlb2YgTWFza2VkUGF0dGVybj4sIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZFBhdHRlcm49TWFza2VkUGF0dGVybjxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkT3B0aW9uczx0eXBlb2YgTWFza2VkRHluYW1pYz4sIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZER5bmFtaWM9TWFza2VkRHluYW1pYzxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gLy8gRnJvbSBtYXNrIG9wdHNcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZE9wdGlvbnM8TWFza2VkPiwgUmV0dXJuTWFza2VkPU9wdHMgZXh0ZW5kcyBNYXNrZWRPcHRpb25zPGluZmVyIE0+ID8gTSA6IG5ldmVyPiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZE51bWJlck9wdGlvbnMsIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZE51bWJlcj1NYXNrZWROdW1iZXI8T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZERhdGVGYWN0b3J5T3B0aW9ucywgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkRGF0ZT1NYXNrZWREYXRlPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWRFbnVtT3B0aW9ucywgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkRW51bT1NYXNrZWRFbnVtPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWRSYW5nZU9wdGlvbnMsIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZFJhbmdlPU1hc2tlZFJhbmdlPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWRQYXR0ZXJuT3B0aW9ucywgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkUGF0dGVybj1NYXNrZWRQYXR0ZXJuPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWREeW5hbWljT3B0aW9ucywgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkRHluYW1pYz1NYXNrZWREeW5hbWljPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWRPcHRpb25zPFJlZ0V4cD4sIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZFJlZ0V4cD1NYXNrZWRSZWdFeHA8T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZE9wdGlvbnM8RnVuY3Rpb24+LCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWRGdW5jdGlvbj1NYXNrZWRGdW5jdGlvbjxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuXG4vKiogQ3JlYXRlcyBuZXcge0BsaW5rIE1hc2tlZH0gZGVwZW5kaW5nIG9uIG1hc2sgdHlwZSAqL1xuZnVuY3Rpb24gY3JlYXRlTWFzayhvcHRzKSB7XG4gIGlmIChJTWFzay5NYXNrZWQgJiYgb3B0cyBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgcmV0dXJuIG9wdHM7XG4gIGNvbnN0IG5PcHRzID0gbm9ybWFsaXplT3B0cyhvcHRzKTtcbiAgY29uc3QgTWFza2VkQ2xhc3MgPSBtYXNrZWRDbGFzcyhuT3B0cy5tYXNrKTtcbiAgaWYgKCFNYXNrZWRDbGFzcykgdGhyb3cgbmV3IEVycm9yKFwiTWFza2VkIGNsYXNzIGlzIG5vdCBmb3VuZCBmb3IgcHJvdmlkZWQgbWFzayBcIiArIG5PcHRzLm1hc2sgKyBcIiwgYXBwcm9wcmlhdGUgbW9kdWxlIG5lZWRzIHRvIGJlIGltcG9ydGVkIG1hbnVhbGx5IGJlZm9yZSBjcmVhdGluZyBtYXNrLlwiKTtcbiAgaWYgKG5PcHRzLm1hc2sgPT09IE1hc2tlZENsYXNzKSBkZWxldGUgbk9wdHMubWFzaztcbiAgaWYgKG5PcHRzLl9tYXNrKSB7XG4gICAgbk9wdHMubWFzayA9IG5PcHRzLl9tYXNrO1xuICAgIGRlbGV0ZSBuT3B0cy5fbWFzaztcbiAgfVxuICByZXR1cm4gbmV3IE1hc2tlZENsYXNzKG5PcHRzKTtcbn1cbklNYXNrLmNyZWF0ZU1hc2sgPSBjcmVhdGVNYXNrO1xuXG5leHBvcnQgeyBjcmVhdGVNYXNrIGFzIGRlZmF1bHQsIG1hc2tlZENsYXNzLCBub3JtYWxpemVPcHRzIH07XG4iLCJpbXBvcnQgTWFza2VkIGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvdXRpbHMuanMnO1xuXG4vKiogTWFza2luZyBieSBjdXN0b20gRnVuY3Rpb24gKi9cbmNsYXNzIE1hc2tlZEZ1bmN0aW9uIGV4dGVuZHMgTWFza2VkIHtcbiAgLyoqICovXG5cbiAgLyoqIEVuYWJsZSBjaGFyYWN0ZXJzIG92ZXJ3cml0aW5nICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgc3VwZXIudXBkYXRlT3B0aW9ucyhvcHRzKTtcbiAgfVxuICBfdXBkYXRlKG9wdHMpIHtcbiAgICBzdXBlci5fdXBkYXRlKHtcbiAgICAgIC4uLm9wdHMsXG4gICAgICB2YWxpZGF0ZTogb3B0cy5tYXNrXG4gICAgfSk7XG4gIH1cbn1cbklNYXNrLk1hc2tlZEZ1bmN0aW9uID0gTWFza2VkRnVuY3Rpb247XG5cbmV4cG9ydCB7IE1hc2tlZEZ1bmN0aW9uIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGVzY2FwZVJlZ0V4cCwgRElSRUNUSU9OIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCBNYXNrZWQgZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuXG52YXIgX01hc2tlZE51bWJlcjtcbi8qKiBOdW1iZXIgbWFzayAqL1xuY2xhc3MgTWFza2VkTnVtYmVyIGV4dGVuZHMgTWFza2VkIHtcbiAgLyoqIFNpbmdsZSBjaGFyICovXG5cbiAgLyoqIFNpbmdsZSBjaGFyICovXG5cbiAgLyoqIEFycmF5IG9mIHNpbmdsZSBjaGFycyAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiBEaWdpdHMgYWZ0ZXIgcG9pbnQgKi9cblxuICAvKiogRmxhZyB0byByZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgemVyb3MgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXG5cbiAgLyoqIEZsYWcgdG8gcGFkIHRyYWlsaW5nIHplcm9zIGFmdGVyIHBvaW50IGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuXG4gIC8qKiBFbmFibGUgY2hhcmFjdGVycyBvdmVyd3JpdGluZyAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiBGb3JtYXQgdHlwZWQgdmFsdWUgdG8gc3RyaW5nICovXG5cbiAgLyoqIFBhcnNlIHN0cmluZyB0byBnZXQgdHlwZWQgdmFsdWUgKi9cblxuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4uTWFza2VkTnVtYmVyLkRFRkFVTFRTLFxuICAgICAgLi4ub3B0c1xuICAgIH0pO1xuICB9XG4gIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgIHN1cGVyLnVwZGF0ZU9wdGlvbnMob3B0cyk7XG4gIH1cbiAgX3VwZGF0ZShvcHRzKSB7XG4gICAgc3VwZXIuX3VwZGF0ZShvcHRzKTtcbiAgICB0aGlzLl91cGRhdGVSZWdFeHBzKCk7XG4gIH1cbiAgX3VwZGF0ZVJlZ0V4cHMoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSAnXicgKyAodGhpcy5hbGxvd05lZ2F0aXZlID8gJ1srfFxcXFwtXT8nIDogJycpO1xuICAgIGNvbnN0IG1pZCA9ICdcXFxcZConO1xuICAgIGNvbnN0IGVuZCA9ICh0aGlzLnNjYWxlID8gXCIoXCIgKyBlc2NhcGVSZWdFeHAodGhpcy5yYWRpeCkgKyBcIlxcXFxkezAsXCIgKyB0aGlzLnNjYWxlICsgXCJ9KT9cIiA6ICcnKSArICckJztcbiAgICB0aGlzLl9udW1iZXJSZWdFeHAgPSBuZXcgUmVnRXhwKHN0YXJ0ICsgbWlkICsgZW5kKTtcbiAgICB0aGlzLl9tYXBUb1JhZGl4UmVnRXhwID0gbmV3IFJlZ0V4cChcIltcIiArIHRoaXMubWFwVG9SYWRpeC5tYXAoZXNjYXBlUmVnRXhwKS5qb2luKCcnKSArIFwiXVwiLCAnZycpO1xuICAgIHRoaXMuX3Rob3VzYW5kc1NlcGFyYXRvclJlZ0V4cCA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSwgJ2cnKTtcbiAgfVxuICBfcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHRoaXMuX3Rob3VzYW5kc1NlcGFyYXRvclJlZ0V4cCwgJycpO1xuICB9XG4gIF9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlKSB7XG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjkwMTEwMi9ob3ctdG8tcHJpbnQtYS1udW1iZXItd2l0aC1jb21tYXMtYXMtdGhvdXNhbmRzLXNlcGFyYXRvcnMtaW4tamF2YXNjcmlwdFxuICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQodGhpcy5yYWRpeCk7XG4gICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcik7XG4gICAgcmV0dXJuIHBhcnRzLmpvaW4odGhpcy5yYWRpeCk7XG4gIH1cbiAgZG9QcmVwYXJlQ2hhcihjaCwgZmxhZ3MpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgY29uc3QgW3ByZXBDaCwgZGV0YWlsc10gPSBzdXBlci5kb1ByZXBhcmVDaGFyKHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5zY2FsZSAmJiB0aGlzLm1hcFRvUmFkaXgubGVuZ3RoICYmIChcbiAgICAvKlxuICAgICAgcmFkaXggc2hvdWxkIGJlIG1hcHBlZCB3aGVuXG4gICAgICAxKSBpbnB1dCBpcyBkb25lIGZyb20ga2V5Ym9hcmQgPSBmbGFncy5pbnB1dCAmJiBmbGFncy5yYXdcbiAgICAgIDIpIHVubWFza2VkIHZhbHVlIGlzIHNldCA9ICFmbGFncy5pbnB1dCAmJiAhZmxhZ3MucmF3XG4gICAgICBhbmQgc2hvdWxkIG5vdCBiZSBtYXBwZWQgd2hlblxuICAgICAgMSkgdmFsdWUgaXMgc2V0ID0gZmxhZ3MuaW5wdXQgJiYgIWZsYWdzLnJhd1xuICAgICAgMikgcmF3IHZhbHVlIGlzIHNldCA9ICFmbGFncy5pbnB1dCAmJiBmbGFncy5yYXdcbiAgICAqL1xuICAgIGZsYWdzLmlucHV0ICYmIGZsYWdzLnJhdyB8fCAhZmxhZ3MuaW5wdXQgJiYgIWZsYWdzLnJhdykgPyBjaC5yZXBsYWNlKHRoaXMuX21hcFRvUmFkaXhSZWdFeHAsIHRoaXMucmFkaXgpIDogY2gpLCBmbGFncyk7XG4gICAgaWYgKGNoICYmICFwcmVwQ2gpIGRldGFpbHMuc2tpcCA9IHRydWU7XG4gICAgaWYgKHByZXBDaCAmJiAhdGhpcy5hbGxvd1Bvc2l0aXZlICYmICF0aGlzLnZhbHVlICYmIHByZXBDaCAhPT0gJy0nKSBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBlbmRDaGFyKCctJykpO1xuICAgIHJldHVybiBbcHJlcENoLCBkZXRhaWxzXTtcbiAgfVxuICBfc2VwYXJhdG9yc0NvdW50KHRvLCBleHRlbmRPblNlcGFyYXRvcnMpIHtcbiAgICBpZiAoZXh0ZW5kT25TZXBhcmF0b3JzID09PSB2b2lkIDApIHtcbiAgICAgIGV4dGVuZE9uU2VwYXJhdG9ycyA9IGZhbHNlO1xuICAgIH1cbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAobGV0IHBvcyA9IDA7IHBvcyA8IHRvOyArK3Bvcykge1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlLmluZGV4T2YodGhpcy50aG91c2FuZHNTZXBhcmF0b3IsIHBvcykgPT09IHBvcykge1xuICAgICAgICArK2NvdW50O1xuICAgICAgICBpZiAoZXh0ZW5kT25TZXBhcmF0b3JzKSB0byArPSB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuICBfc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKHNsaWNlKSB7XG4gICAgaWYgKHNsaWNlID09PSB2b2lkIDApIHtcbiAgICAgIHNsaWNlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zZXBhcmF0b3JzQ291bnQodGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyhzbGljZSkubGVuZ3RoLCB0cnVlKTtcbiAgfVxuICBleHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgW2Zyb21Qb3MsIHRvUG9zXSA9IHRoaXMuX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMoZnJvbVBvcywgdG9Qb3MpO1xuICAgIHJldHVybiB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHN1cGVyLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpKTtcbiAgfVxuICBfYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJldkJlZm9yZVRhaWxWYWx1ZSA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA/IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3ZhbHVlIDogdGhpcy5fdmFsdWU7XG4gICAgY29uc3QgcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UocHJldkJlZm9yZVRhaWxWYWx1ZSk7XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMudmFsdWUpO1xuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgdGhpcy5fdmFsdWUgKz0gY2g7XG4gICAgY29uc3QgbnVtID0gdGhpcy5udW1iZXI7XG4gICAgbGV0IGFjY2VwdGVkID0gIWlzTmFOKG51bSk7XG4gICAgbGV0IHNraXAgPSBmYWxzZTtcbiAgICBpZiAoYWNjZXB0ZWQpIHtcbiAgICAgIGxldCBmaXhlZE51bTtcbiAgICAgIGlmICh0aGlzLm1pbiAhPSBudWxsICYmIHRoaXMubWluIDwgMCAmJiB0aGlzLm51bWJlciA8IHRoaXMubWluKSBmaXhlZE51bSA9IHRoaXMubWluO1xuICAgICAgaWYgKHRoaXMubWF4ICE9IG51bGwgJiYgdGhpcy5tYXggPiAwICYmIHRoaXMubnVtYmVyID4gdGhpcy5tYXgpIGZpeGVkTnVtID0gdGhpcy5tYXg7XG4gICAgICBpZiAoZml4ZWROdW0gIT0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvZml4KSB7XG4gICAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLmZvcm1hdChmaXhlZE51bSwgdGhpcykucmVwbGFjZShNYXNrZWROdW1iZXIuVU5NQVNLRURfUkFESVgsIHRoaXMucmFkaXgpO1xuICAgICAgICAgIHNraXAgfHwgKHNraXAgPSBvbGRWYWx1ZSA9PT0gdGhpcy5fdmFsdWUgJiYgIWZsYWdzLnRhaWwpOyAvLyBpZiBub3QgY2hhbmdlZCBvbiB0YWlsIGl0J3Mgc3RpbGwgb2sgdG8gcHJvY2VlZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjY2VwdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFjY2VwdGVkICYmIChhY2NlcHRlZCA9IEJvb2xlYW4odGhpcy5fdmFsdWUubWF0Y2godGhpcy5fbnVtYmVyUmVnRXhwKSkpO1xuICAgIH1cbiAgICBsZXQgYXBwZW5kRGV0YWlscztcbiAgICBpZiAoIWFjY2VwdGVkKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IG9sZFZhbHVlO1xuICAgICAgYXBwZW5kRGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcGVuZERldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgIGluc2VydGVkOiB0aGlzLl92YWx1ZS5zbGljZShvbGRWYWx1ZS5sZW5ndGgpLFxuICAgICAgICByYXdJbnNlcnRlZDogc2tpcCA/ICcnIDogY2gsXG4gICAgICAgIHNraXBcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fdmFsdWUpO1xuICAgIGNvbnN0IGJlZm9yZVRhaWxWYWx1ZSA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA/IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3ZhbHVlIDogdGhpcy5fdmFsdWU7XG4gICAgY29uc3QgYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZShiZWZvcmVUYWlsVmFsdWUpO1xuICAgIGFwcGVuZERldGFpbHMudGFpbFNoaWZ0ICs9IChiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50IC0gcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQpICogdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgIHJldHVybiBhcHBlbmREZXRhaWxzO1xuICB9XG4gIF9maW5kU2VwYXJhdG9yQXJvdW5kKHBvcykge1xuICAgIGlmICh0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikge1xuICAgICAgY29uc3Qgc2VhcmNoRnJvbSA9IHBvcyAtIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aCArIDE7XG4gICAgICBjb25zdCBzZXBhcmF0b3JQb3MgPSB0aGlzLnZhbHVlLmluZGV4T2YodGhpcy50aG91c2FuZHNTZXBhcmF0b3IsIHNlYXJjaEZyb20pO1xuICAgICAgaWYgKHNlcGFyYXRvclBvcyA8PSBwb3MpIHJldHVybiBzZXBhcmF0b3JQb3M7XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfVxuICBfYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9ycyhmcm9tLCB0bykge1xuICAgIGNvbnN0IHNlcGFyYXRvckFyb3VuZEZyb21Qb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGZyb20pO1xuICAgIGlmIChzZXBhcmF0b3JBcm91bmRGcm9tUG9zID49IDApIGZyb20gPSBzZXBhcmF0b3JBcm91bmRGcm9tUG9zO1xuICAgIGNvbnN0IHNlcGFyYXRvckFyb3VuZFRvUG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZCh0byk7XG4gICAgaWYgKHNlcGFyYXRvckFyb3VuZFRvUG9zID49IDApIHRvID0gc2VwYXJhdG9yQXJvdW5kVG9Qb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgcmV0dXJuIFtmcm9tLCB0b107XG4gIH1cbiAgcmVtb3ZlKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgW2Zyb21Qb3MsIHRvUG9zXSA9IHRoaXMuX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMoZnJvbVBvcywgdG9Qb3MpO1xuICAgIGNvbnN0IHZhbHVlQmVmb3JlUG9zID0gdGhpcy52YWx1ZS5zbGljZSgwLCBmcm9tUG9zKTtcbiAgICBjb25zdCB2YWx1ZUFmdGVyUG9zID0gdGhpcy52YWx1ZS5zbGljZSh0b1Bvcyk7XG4gICAgY29uc3QgcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnQodmFsdWVCZWZvcmVQb3MubGVuZ3RoKTtcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZUJlZm9yZVBvcyArIHZhbHVlQWZ0ZXJQb3MpKTtcbiAgICBjb25zdCBiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKHZhbHVlQmVmb3JlUG9zKTtcbiAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgdGFpbFNoaWZ0OiAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aFxuICAgIH0pO1xuICB9XG4gIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MsIGRpcmVjdGlvbikge1xuICAgIGlmICghdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHJldHVybiBjdXJzb3JQb3M7XG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IHNlcGFyYXRvckF0TGVmdFBvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQoY3Vyc29yUG9zIC0gMSk7XG4gICAgICAgICAgaWYgKHNlcGFyYXRvckF0TGVmdFBvcyA+PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBzZXBhcmF0b3JBdExlZnRFbmRQb3MgPSBzZXBhcmF0b3JBdExlZnRQb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoY3Vyc29yUG9zIDwgc2VwYXJhdG9yQXRMZWZ0RW5kUG9zIHx8IHRoaXMudmFsdWUubGVuZ3RoIDw9IHNlcGFyYXRvckF0TGVmdEVuZFBvcyB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZXBhcmF0b3JBdExlZnRQb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3Qgc2VwYXJhdG9yQXRSaWdodFBvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQoY3Vyc29yUG9zKTtcbiAgICAgICAgICBpZiAoc2VwYXJhdG9yQXRSaWdodFBvcyA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yQXRSaWdodFBvcyArIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnNvclBvcztcbiAgfVxuICBkb0NvbW1pdCgpIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgY29uc3QgbnVtYmVyID0gdGhpcy5udW1iZXI7XG4gICAgICBsZXQgdmFsaWRudW0gPSBudW1iZXI7XG5cbiAgICAgIC8vIGNoZWNrIGJvdW5kc1xuICAgICAgaWYgKHRoaXMubWluICE9IG51bGwpIHZhbGlkbnVtID0gTWF0aC5tYXgodmFsaWRudW0sIHRoaXMubWluKTtcbiAgICAgIGlmICh0aGlzLm1heCAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWluKHZhbGlkbnVtLCB0aGlzLm1heCk7XG4gICAgICBpZiAodmFsaWRudW0gIT09IG51bWJlcikgdGhpcy51bm1hc2tlZFZhbHVlID0gdGhpcy5mb3JtYXQodmFsaWRudW0sIHRoaXMpO1xuICAgICAgbGV0IGZvcm1hdHRlZCA9IHRoaXMudmFsdWU7XG4gICAgICBpZiAodGhpcy5ub3JtYWxpemVaZXJvcykgZm9ybWF0dGVkID0gdGhpcy5fbm9ybWFsaXplWmVyb3MoZm9ybWF0dGVkKTtcbiAgICAgIGlmICh0aGlzLnBhZEZyYWN0aW9uYWxaZXJvcyAmJiB0aGlzLnNjYWxlID4gMCkgZm9ybWF0dGVkID0gdGhpcy5fcGFkRnJhY3Rpb25hbFplcm9zKGZvcm1hdHRlZCk7XG4gICAgICB0aGlzLl92YWx1ZSA9IGZvcm1hdHRlZDtcbiAgICB9XG4gICAgc3VwZXIuZG9Db21taXQoKTtcbiAgfVxuICBfbm9ybWFsaXplWmVyb3ModmFsdWUpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpLnNwbGl0KHRoaXMucmFkaXgpO1xuXG4gICAgLy8gcmVtb3ZlIGxlYWRpbmcgemVyb3NcbiAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL14oXFxEKikoMCopKFxcZCopLywgKG1hdGNoLCBzaWduLCB6ZXJvcywgbnVtKSA9PiBzaWduICsgbnVtKTtcbiAgICAvLyBhZGQgbGVhZGluZyB6ZXJvXG4gICAgaWYgKHZhbHVlLmxlbmd0aCAmJiAhL1xcZCQvLnRlc3QocGFydHNbMF0pKSBwYXJ0c1swXSA9IHBhcnRzWzBdICsgJzAnO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnJlcGxhY2UoLzAqJC8sICcnKTsgLy8gcmVtb3ZlIHRyYWlsaW5nIHplcm9zXG4gICAgICBpZiAoIXBhcnRzWzFdLmxlbmd0aCkgcGFydHMubGVuZ3RoID0gMTsgLy8gcmVtb3ZlIGZyYWN0aW9uYWxcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnMocGFydHMuam9pbih0aGlzLnJhZGl4KSk7XG4gIH1cbiAgX3BhZEZyYWN0aW9uYWxaZXJvcyh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHJldHVybiB2YWx1ZTtcbiAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KHRoaXMucmFkaXgpO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSBwYXJ0cy5wdXNoKCcnKTtcbiAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnBhZEVuZCh0aGlzLnNjYWxlLCAnMCcpO1xuICAgIHJldHVybiBwYXJ0cy5qb2luKHRoaXMucmFkaXgpO1xuICB9XG4gIGRvU2tpcEludmFsaWQoY2gsIGZsYWdzLCBjaGVja1RhaWwpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgY29uc3QgZHJvcEZyYWN0aW9uYWwgPSB0aGlzLnNjYWxlID09PSAwICYmIGNoICE9PSB0aGlzLnRob3VzYW5kc1NlcGFyYXRvciAmJiAoY2ggPT09IHRoaXMucmFkaXggfHwgY2ggPT09IE1hc2tlZE51bWJlci5VTk1BU0tFRF9SQURJWCB8fCB0aGlzLm1hcFRvUmFkaXguaW5jbHVkZXMoY2gpKTtcbiAgICByZXR1cm4gc3VwZXIuZG9Ta2lwSW52YWxpZChjaCwgZmxhZ3MsIGNoZWNrVGFpbCkgJiYgIWRyb3BGcmFjdGlvbmFsO1xuICB9XG4gIGdldCB1bm1hc2tlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX25vcm1hbGl6ZVplcm9zKHRoaXMudmFsdWUpKS5yZXBsYWNlKHRoaXMucmFkaXgsIE1hc2tlZE51bWJlci5VTk1BU0tFRF9SQURJWCk7XG4gIH1cbiAgc2V0IHVubWFza2VkVmFsdWUodW5tYXNrZWRWYWx1ZSkge1xuICAgIHN1cGVyLnVubWFza2VkVmFsdWUgPSB1bm1hc2tlZFZhbHVlO1xuICB9XG4gIGdldCB0eXBlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlKHRoaXMudW5tYXNrZWRWYWx1ZSwgdGhpcyk7XG4gIH1cbiAgc2V0IHR5cGVkVmFsdWUobikge1xuICAgIHRoaXMucmF3SW5wdXRWYWx1ZSA9IHRoaXMuZm9ybWF0KG4sIHRoaXMpLnJlcGxhY2UoTWFza2VkTnVtYmVyLlVOTUFTS0VEX1JBRElYLCB0aGlzLnJhZGl4KTtcbiAgfVxuXG4gIC8qKiBQYXJzZWQgTnVtYmVyICovXG4gIGdldCBudW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZWRWYWx1ZTtcbiAgfVxuICBzZXQgbnVtYmVyKG51bWJlcikge1xuICAgIHRoaXMudHlwZWRWYWx1ZSA9IG51bWJlcjtcbiAgfVxuICBnZXQgYWxsb3dOZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5taW4gIT0gbnVsbCAmJiB0aGlzLm1pbiA8IDAgfHwgdGhpcy5tYXggIT0gbnVsbCAmJiB0aGlzLm1heCA8IDA7XG4gIH1cbiAgZ2V0IGFsbG93UG9zaXRpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWluICE9IG51bGwgJiYgdGhpcy5taW4gPiAwIHx8IHRoaXMubWF4ICE9IG51bGwgJiYgdGhpcy5tYXggPiAwO1xuICB9XG4gIHR5cGVkVmFsdWVFcXVhbHModmFsdWUpIHtcbiAgICAvLyBoYW5kbGUgIDAgLT4gJycgY2FzZSAodHlwZWQgPSAwIGV2ZW4gaWYgdmFsdWUgPSAnJylcbiAgICAvLyBmb3IgZGV0YWlscyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3VObUFuTmVSL2ltYXNranMvaXNzdWVzLzEzNFxuICAgIHJldHVybiAoc3VwZXIudHlwZWRWYWx1ZUVxdWFscyh2YWx1ZSkgfHwgTWFza2VkTnVtYmVyLkVNUFRZX1ZBTFVFUy5pbmNsdWRlcyh2YWx1ZSkgJiYgTWFza2VkTnVtYmVyLkVNUFRZX1ZBTFVFUy5pbmNsdWRlcyh0aGlzLnR5cGVkVmFsdWUpKSAmJiAhKHZhbHVlID09PSAwICYmIHRoaXMudmFsdWUgPT09ICcnKTtcbiAgfVxufVxuX01hc2tlZE51bWJlciA9IE1hc2tlZE51bWJlcjtcbk1hc2tlZE51bWJlci5VTk1BU0tFRF9SQURJWCA9ICcuJztcbk1hc2tlZE51bWJlci5FTVBUWV9WQUxVRVMgPSBbLi4uTWFza2VkLkVNUFRZX1ZBTFVFUywgMF07XG5NYXNrZWROdW1iZXIuREVGQVVMVFMgPSB7XG4gIC4uLk1hc2tlZC5ERUZBVUxUUyxcbiAgbWFzazogTnVtYmVyLFxuICByYWRpeDogJywnLFxuICB0aG91c2FuZHNTZXBhcmF0b3I6ICcnLFxuICBtYXBUb1JhZGl4OiBbX01hc2tlZE51bWJlci5VTk1BU0tFRF9SQURJWF0sXG4gIG1pbjogTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIsXG4gIG1heDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gIHNjYWxlOiAyLFxuICBub3JtYWxpemVaZXJvczogdHJ1ZSxcbiAgcGFkRnJhY3Rpb25hbFplcm9zOiBmYWxzZSxcbiAgcGFyc2U6IE51bWJlcixcbiAgZm9ybWF0OiBuID0+IG4udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xuICAgIHVzZUdyb3VwaW5nOiBmYWxzZSxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIwXG4gIH0pXG59O1xuSU1hc2suTWFza2VkTnVtYmVyID0gTWFza2VkTnVtYmVyO1xuXG5leHBvcnQgeyBNYXNrZWROdW1iZXIgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgTWFza2VkIGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgY3JlYXRlTWFzaywgeyBub3JtYWxpemVPcHRzIH0gZnJvbSAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCBDaHVua3NUYWlsRGV0YWlscyBmcm9tICcuL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCBQYXR0ZXJuQ3Vyc29yIGZyb20gJy4vcGF0dGVybi9jdXJzb3IuanMnO1xuaW1wb3J0IFBhdHRlcm5GaXhlZERlZmluaXRpb24gZnJvbSAnLi9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0IFBhdHRlcm5JbnB1dERlZmluaXRpb24gZnJvbSAnLi9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL3JlZ2V4cC5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuXG4vKiogUGF0dGVybiBtYXNrICovXG5jbGFzcyBNYXNrZWRQYXR0ZXJuIGV4dGVuZHMgTWFza2VkIHtcbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqIFNpbmdsZSBjaGFyIGZvciBlbXB0eSBpbnB1dCAqL1xuXG4gIC8qKiBTaW5nbGUgY2hhciBmb3IgZmlsbGVkIGlucHV0ICovXG5cbiAgLyoqIFNob3cgcGxhY2Vob2xkZXIgb25seSB3aGVuIG5lZWRlZCAqL1xuXG4gIC8qKiBFbmFibGUgY2hhcmFjdGVycyBvdmVyd3JpdGluZyAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcih7XG4gICAgICAuLi5NYXNrZWRQYXR0ZXJuLkRFRkFVTFRTLFxuICAgICAgLi4ub3B0cyxcbiAgICAgIGRlZmluaXRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBQYXR0ZXJuSW5wdXREZWZpbml0aW9uLkRFRkFVTFRfREVGSU5JVElPTlMsIG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuZGVmaW5pdGlvbnMpXG4gICAgfSk7XG4gIH1cbiAgdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgc3VwZXIudXBkYXRlT3B0aW9ucyhvcHRzKTtcbiAgfVxuICBfdXBkYXRlKG9wdHMpIHtcbiAgICBvcHRzLmRlZmluaXRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZpbml0aW9ucywgb3B0cy5kZWZpbml0aW9ucyk7XG4gICAgc3VwZXIuX3VwZGF0ZShvcHRzKTtcbiAgICB0aGlzLl9yZWJ1aWxkTWFzaygpO1xuICB9XG4gIF9yZWJ1aWxkTWFzaygpIHtcbiAgICBjb25zdCBkZWZzID0gdGhpcy5kZWZpbml0aW9ucztcbiAgICB0aGlzLl9ibG9ja3MgPSBbXTtcbiAgICB0aGlzLmV4cG9zZUJsb2NrID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3N0b3BzID0gW107XG4gICAgdGhpcy5fbWFza2VkQmxvY2tzID0ge307XG4gICAgY29uc3QgcGF0dGVybiA9IHRoaXMubWFzaztcbiAgICBpZiAoIXBhdHRlcm4gfHwgIWRlZnMpIHJldHVybjtcbiAgICBsZXQgdW5tYXNraW5nQmxvY2sgPSBmYWxzZTtcbiAgICBsZXQgb3B0aW9uYWxCbG9jayA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0dGVybi5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKHRoaXMuYmxvY2tzKSB7XG4gICAgICAgIGNvbnN0IHAgPSBwYXR0ZXJuLnNsaWNlKGkpO1xuICAgICAgICBjb25zdCBiTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmJsb2NrcykuZmlsdGVyKGJOYW1lID0+IHAuaW5kZXhPZihiTmFtZSkgPT09IDApO1xuICAgICAgICAvLyBvcmRlciBieSBrZXkgbGVuZ3RoXG4gICAgICAgIGJOYW1lcy5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKTtcbiAgICAgICAgLy8gdXNlIGJsb2NrIG5hbWUgd2l0aCBtYXggbGVuZ3RoXG4gICAgICAgIGNvbnN0IGJOYW1lID0gYk5hbWVzWzBdO1xuICAgICAgICBpZiAoYk5hbWUpIHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBleHBvc2UsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICAuLi5iT3B0c1xuICAgICAgICAgIH0gPSBub3JtYWxpemVPcHRzKHRoaXMuYmxvY2tzW2JOYW1lXSk7IC8vIFRPRE8gdHlwZSBPcHRzPEFyZyAmIEV4dHJhPlxuICAgICAgICAgIGNvbnN0IGJsb2NrT3B0cyA9IHtcbiAgICAgICAgICAgIGxhenk6IHRoaXMubGF6eSxcbiAgICAgICAgICAgIGVhZ2VyOiB0aGlzLmVhZ2VyLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiB0aGlzLnBsYWNlaG9sZGVyQ2hhcixcbiAgICAgICAgICAgIGRpc3BsYXlDaGFyOiB0aGlzLmRpc3BsYXlDaGFyLFxuICAgICAgICAgICAgb3ZlcndyaXRlOiB0aGlzLm92ZXJ3cml0ZSxcbiAgICAgICAgICAgIGF1dG9maXg6IHRoaXMuYXV0b2ZpeCxcbiAgICAgICAgICAgIC4uLmJPcHRzLFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgcGFyZW50OiB0aGlzXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBtYXNrZWRCbG9jayA9IHJlcGVhdCAhPSBudWxsID8gbmV3IElNYXNrLlJlcGVhdEJsb2NrKGJsb2NrT3B0cyAvKiBUT0RPICovKSA6IGNyZWF0ZU1hc2soYmxvY2tPcHRzKTtcbiAgICAgICAgICBpZiAobWFza2VkQmxvY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2Nrcy5wdXNoKG1hc2tlZEJsb2NrKTtcbiAgICAgICAgICAgIGlmIChleHBvc2UpIHRoaXMuZXhwb3NlQmxvY2sgPSBtYXNrZWRCbG9jaztcblxuICAgICAgICAgICAgLy8gc3RvcmUgYmxvY2sgaW5kZXhcbiAgICAgICAgICAgIGlmICghdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXSkgdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXS5wdXNoKHRoaXMuX2Jsb2Nrcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaSArPSBiTmFtZS5sZW5ndGggLSAxO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgY2hhciA9IHBhdHRlcm5baV07XG4gICAgICBsZXQgaXNJbnB1dCA9IChjaGFyIGluIGRlZnMpO1xuICAgICAgaWYgKGNoYXIgPT09IE1hc2tlZFBhdHRlcm4uU1RPUF9DSEFSKSB7XG4gICAgICAgIHRoaXMuX3N0b3BzLnB1c2godGhpcy5fYmxvY2tzLmxlbmd0aCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGNoYXIgPT09ICd7JyB8fCBjaGFyID09PSAnfScpIHtcbiAgICAgICAgdW5tYXNraW5nQmxvY2sgPSAhdW5tYXNraW5nQmxvY2s7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGNoYXIgPT09ICdbJyB8fCBjaGFyID09PSAnXScpIHtcbiAgICAgICAgb3B0aW9uYWxCbG9jayA9ICFvcHRpb25hbEJsb2NrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFyID09PSBNYXNrZWRQYXR0ZXJuLkVTQ0FQRV9DSEFSKSB7XG4gICAgICAgICsraTtcbiAgICAgICAgY2hhciA9IHBhdHRlcm5baV07XG4gICAgICAgIGlmICghY2hhcikgYnJlYWs7XG4gICAgICAgIGlzSW5wdXQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRlZiA9IGlzSW5wdXQgPyBuZXcgUGF0dGVybklucHV0RGVmaW5pdGlvbih7XG4gICAgICAgIGlzT3B0aW9uYWw6IG9wdGlvbmFsQmxvY2ssXG4gICAgICAgIGxhenk6IHRoaXMubGF6eSxcbiAgICAgICAgZWFnZXI6IHRoaXMuZWFnZXIsXG4gICAgICAgIHBsYWNlaG9sZGVyQ2hhcjogdGhpcy5wbGFjZWhvbGRlckNoYXIsXG4gICAgICAgIGRpc3BsYXlDaGFyOiB0aGlzLmRpc3BsYXlDaGFyLFxuICAgICAgICAuLi5ub3JtYWxpemVPcHRzKGRlZnNbY2hhcl0pLFxuICAgICAgICBwYXJlbnQ6IHRoaXNcbiAgICAgIH0pIDogbmV3IFBhdHRlcm5GaXhlZERlZmluaXRpb24oe1xuICAgICAgICBjaGFyLFxuICAgICAgICBlYWdlcjogdGhpcy5lYWdlcixcbiAgICAgICAgaXNVbm1hc2tpbmc6IHVubWFza2luZ0Jsb2NrXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2Jsb2Nrcy5wdXNoKGRlZik7XG4gICAgfVxuICB9XG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIuc3RhdGUsXG4gICAgICBfYmxvY2tzOiB0aGlzLl9ibG9ja3MubWFwKGIgPT4gYi5zdGF0ZSlcbiAgICB9O1xuICB9XG4gIHNldCBzdGF0ZShzdGF0ZSkge1xuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgX2Jsb2NrcyxcbiAgICAgIC4uLm1hc2tlZFN0YXRlXG4gICAgfSA9IHN0YXRlO1xuICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKChiLCBiaSkgPT4gYi5zdGF0ZSA9IF9ibG9ja3NbYmldKTtcbiAgICBzdXBlci5zdGF0ZSA9IG1hc2tlZFN0YXRlO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIHN1cGVyLnJlc2V0KCk7XG4gICAgdGhpcy5fYmxvY2tzLmZvckVhY2goYiA9PiBiLnJlc2V0KCkpO1xuICB9XG4gIGdldCBpc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmV4cG9zZUJsb2NrID8gdGhpcy5leHBvc2VCbG9jay5pc0NvbXBsZXRlIDogdGhpcy5fYmxvY2tzLmV2ZXJ5KGIgPT4gYi5pc0NvbXBsZXRlKTtcbiAgfVxuICBnZXQgaXNGaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5ldmVyeShiID0+IGIuaXNGaWxsZWQpO1xuICB9XG4gIGdldCBpc0ZpeGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9ibG9ja3MuZXZlcnkoYiA9PiBiLmlzRml4ZWQpO1xuICB9XG4gIGdldCBpc09wdGlvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLl9ibG9ja3MuZXZlcnkoYiA9PiBiLmlzT3B0aW9uYWwpO1xuICB9XG4gIGRvQ29tbWl0KCkge1xuICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGIgPT4gYi5kb0NvbW1pdCgpKTtcbiAgICBzdXBlci5kb0NvbW1pdCgpO1xuICB9XG4gIGdldCB1bm1hc2tlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmV4cG9zZUJsb2NrID8gdGhpcy5leHBvc2VCbG9jay51bm1hc2tlZFZhbHVlIDogdGhpcy5fYmxvY2tzLnJlZHVjZSgoc3RyLCBiKSA9PiBzdHIgKz0gYi51bm1hc2tlZFZhbHVlLCAnJyk7XG4gIH1cbiAgc2V0IHVubWFza2VkVmFsdWUodW5tYXNrZWRWYWx1ZSkge1xuICAgIGlmICh0aGlzLmV4cG9zZUJsb2NrKSB7XG4gICAgICBjb25zdCB0YWlsID0gdGhpcy5leHRyYWN0VGFpbCh0aGlzLl9ibG9ja1N0YXJ0UG9zKHRoaXMuX2Jsb2Nrcy5pbmRleE9mKHRoaXMuZXhwb3NlQmxvY2spKSArIHRoaXMuZXhwb3NlQmxvY2suZGlzcGxheVZhbHVlLmxlbmd0aCk7XG4gICAgICB0aGlzLmV4cG9zZUJsb2NrLnVubWFza2VkVmFsdWUgPSB1bm1hc2tlZFZhbHVlO1xuICAgICAgdGhpcy5hcHBlbmRUYWlsKHRhaWwpO1xuICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgIH0gZWxzZSBzdXBlci51bm1hc2tlZFZhbHVlID0gdW5tYXNrZWRWYWx1ZTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwb3NlQmxvY2sgPyB0aGlzLmV4cG9zZUJsb2NrLnZhbHVlIDpcbiAgICAvLyBUT0RPIHJldHVybiBfdmFsdWUgd2hlbiBub3QgaW4gY2hhbmdlP1xuICAgIHRoaXMuX2Jsb2Nrcy5yZWR1Y2UoKHN0ciwgYikgPT4gc3RyICs9IGIudmFsdWUsICcnKTtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5leHBvc2VCbG9jaykge1xuICAgICAgY29uc3QgdGFpbCA9IHRoaXMuZXh0cmFjdFRhaWwodGhpcy5fYmxvY2tTdGFydFBvcyh0aGlzLl9ibG9ja3MuaW5kZXhPZih0aGlzLmV4cG9zZUJsb2NrKSkgKyB0aGlzLmV4cG9zZUJsb2NrLmRpc3BsYXlWYWx1ZS5sZW5ndGgpO1xuICAgICAgdGhpcy5leHBvc2VCbG9jay52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5hcHBlbmRUYWlsKHRhaWwpO1xuICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgIH0gZWxzZSBzdXBlci52YWx1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCB0eXBlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmV4cG9zZUJsb2NrID8gdGhpcy5leHBvc2VCbG9jay50eXBlZFZhbHVlIDogc3VwZXIudHlwZWRWYWx1ZTtcbiAgfVxuICBzZXQgdHlwZWRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmV4cG9zZUJsb2NrKSB7XG4gICAgICBjb25zdCB0YWlsID0gdGhpcy5leHRyYWN0VGFpbCh0aGlzLl9ibG9ja1N0YXJ0UG9zKHRoaXMuX2Jsb2Nrcy5pbmRleE9mKHRoaXMuZXhwb3NlQmxvY2spKSArIHRoaXMuZXhwb3NlQmxvY2suZGlzcGxheVZhbHVlLmxlbmd0aCk7XG4gICAgICB0aGlzLmV4cG9zZUJsb2NrLnR5cGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYXBwZW5kVGFpbCh0YWlsKTtcbiAgICAgIHRoaXMuZG9Db21taXQoKTtcbiAgICB9IGVsc2Ugc3VwZXIudHlwZWRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBkaXNwbGF5VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5yZWR1Y2UoKHN0ciwgYikgPT4gc3RyICs9IGIuZGlzcGxheVZhbHVlLCAnJyk7XG4gIH1cbiAgYXBwZW5kVGFpbCh0YWlsKSB7XG4gICAgcmV0dXJuIHN1cGVyLmFwcGVuZFRhaWwodGFpbCkuYWdncmVnYXRlKHRoaXMuX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICB9XG4gIF9hcHBlbmRFYWdlcigpIHtcbiAgICB2YXIgX3RoaXMkX21hcFBvc1RvQmxvY2s7XG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgbGV0IHN0YXJ0QmxvY2tJbmRleCA9IChfdGhpcyRfbWFwUG9zVG9CbG9jayA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJF9tYXBQb3NUb0Jsb2NrLmluZGV4O1xuICAgIGlmIChzdGFydEJsb2NrSW5kZXggPT0gbnVsbCkgcmV0dXJuIGRldGFpbHM7XG5cbiAgICAvLyBUT0RPIHRlc3QgaWYgaXQgd29ya3MgZm9yIG5lc3RlZCBwYXR0ZXJuIG1hc2tzXG4gICAgaWYgKHRoaXMuX2Jsb2Nrc1tzdGFydEJsb2NrSW5kZXhdLmlzRmlsbGVkKSArK3N0YXJ0QmxvY2tJbmRleDtcbiAgICBmb3IgKGxldCBiaSA9IHN0YXJ0QmxvY2tJbmRleDsgYmkgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK2JpKSB7XG4gICAgICBjb25zdCBkID0gdGhpcy5fYmxvY2tzW2JpXS5fYXBwZW5kRWFnZXIoKTtcbiAgICAgIGlmICghZC5pbnNlcnRlZCkgYnJlYWs7XG4gICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShkKTtcbiAgICB9XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbiAgX2FwcGVuZENoYXJSYXcoY2gsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGNvbnN0IGJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoKTtcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICBpZiAoIWJsb2NrSXRlcikgcmV0dXJuIGRldGFpbHM7XG4gICAgZm9yIChsZXQgYmkgPSBibG9ja0l0ZXIuaW5kZXgsIGJsb2NrOyBibG9jayA9IHRoaXMuX2Jsb2Nrc1tiaV07ICsrYmkpIHtcbiAgICAgIHZhciBfZmxhZ3MkX2JlZm9yZVRhaWxTdGE7XG4gICAgICBjb25zdCBibG9ja0RldGFpbHMgPSBibG9jay5fYXBwZW5kQ2hhcihjaCwge1xuICAgICAgICAuLi5mbGFncyxcbiAgICAgICAgX2JlZm9yZVRhaWxTdGF0ZTogKF9mbGFncyRfYmVmb3JlVGFpbFN0YSA9IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUpID09IG51bGwgfHwgKF9mbGFncyRfYmVmb3JlVGFpbFN0YSA9IF9mbGFncyRfYmVmb3JlVGFpbFN0YS5fYmxvY2tzKSA9PSBudWxsID8gdm9pZCAwIDogX2ZsYWdzJF9iZWZvcmVUYWlsU3RhW2JpXVxuICAgICAgfSk7XG4gICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShibG9ja0RldGFpbHMpO1xuICAgICAgaWYgKGJsb2NrRGV0YWlscy5jb25zdW1lZCkgYnJlYWs7IC8vIGdvIG5leHQgY2hhclxuICAgIH1cbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuICBleHRyYWN0VGFpbChmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IGNodW5rVGFpbCA9IG5ldyBDaHVua3NUYWlsRGV0YWlscygpO1xuICAgIGlmIChmcm9tUG9zID09PSB0b1BvcykgcmV0dXJuIGNodW5rVGFpbDtcbiAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgKGIsIGJpLCBiRnJvbVBvcywgYlRvUG9zKSA9PiB7XG4gICAgICBjb25zdCBibG9ja0NodW5rID0gYi5leHRyYWN0VGFpbChiRnJvbVBvcywgYlRvUG9zKTtcbiAgICAgIGJsb2NrQ2h1bmsuc3RvcCA9IHRoaXMuX2ZpbmRTdG9wQmVmb3JlKGJpKTtcbiAgICAgIGJsb2NrQ2h1bmsuZnJvbSA9IHRoaXMuX2Jsb2NrU3RhcnRQb3MoYmkpO1xuICAgICAgaWYgKGJsb2NrQ2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscykgYmxvY2tDaHVuay5ibG9ja0luZGV4ID0gYmk7XG4gICAgICBjaHVua1RhaWwuZXh0ZW5kKGJsb2NrQ2h1bmspO1xuICAgIH0pO1xuICAgIHJldHVybiBjaHVua1RhaWw7XG4gIH1cbiAgZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBpZiAoZnJvbVBvcyA9PT0gdG9Qb3MpIHJldHVybiAnJztcbiAgICBsZXQgaW5wdXQgPSAnJztcbiAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgKGIsIF8sIGZyb21Qb3MsIHRvUG9zKSA9PiB7XG4gICAgICBpbnB1dCArPSBiLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpO1xuICAgIH0pO1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICBfZmluZFN0b3BCZWZvcmUoYmxvY2tJbmRleCkge1xuICAgIGxldCBzdG9wQmVmb3JlO1xuICAgIGZvciAobGV0IHNpID0gMDsgc2kgPCB0aGlzLl9zdG9wcy5sZW5ndGg7ICsrc2kpIHtcbiAgICAgIGNvbnN0IHN0b3AgPSB0aGlzLl9zdG9wc1tzaV07XG4gICAgICBpZiAoc3RvcCA8PSBibG9ja0luZGV4KSBzdG9wQmVmb3JlID0gc3RvcDtlbHNlIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gc3RvcEJlZm9yZTtcbiAgfVxuXG4gIC8qKiBBcHBlbmRzIHBsYWNlaG9sZGVyIGRlcGVuZGluZyBvbiBsYXppbmVzcyAqL1xuICBfYXBwZW5kUGxhY2Vob2xkZXIodG9CbG9ja0luZGV4KSB7XG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgaWYgKHRoaXMubGF6eSAmJiB0b0Jsb2NrSW5kZXggPT0gbnVsbCkgcmV0dXJuIGRldGFpbHM7XG4gICAgY29uc3Qgc3RhcnRCbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aCk7XG4gICAgaWYgKCFzdGFydEJsb2NrSXRlcikgcmV0dXJuIGRldGFpbHM7XG4gICAgY29uc3Qgc3RhcnRCbG9ja0luZGV4ID0gc3RhcnRCbG9ja0l0ZXIuaW5kZXg7XG4gICAgY29uc3QgZW5kQmxvY2tJbmRleCA9IHRvQmxvY2tJbmRleCAhPSBudWxsID8gdG9CbG9ja0luZGV4IDogdGhpcy5fYmxvY2tzLmxlbmd0aDtcbiAgICB0aGlzLl9ibG9ja3Muc2xpY2Uoc3RhcnRCbG9ja0luZGV4LCBlbmRCbG9ja0luZGV4KS5mb3JFYWNoKGIgPT4ge1xuICAgICAgaWYgKCFiLmxhenkgfHwgdG9CbG9ja0luZGV4ICE9IG51bGwpIHtcbiAgICAgICAgdmFyIF9ibG9ja3MyO1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShiLl9hcHBlbmRQbGFjZWhvbGRlcigoX2Jsb2NrczIgPSBiLl9ibG9ja3MpID09IG51bGwgPyB2b2lkIDAgOiBfYmxvY2tzMi5sZW5ndGgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuXG4gIC8qKiBGaW5kcyBibG9jayBpbiBwb3MgKi9cbiAgX21hcFBvc1RvQmxvY2socG9zKSB7XG4gICAgbGV0IGFjY1ZhbCA9ICcnO1xuICAgIGZvciAobGV0IGJpID0gMDsgYmkgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK2JpKSB7XG4gICAgICBjb25zdCBibG9jayA9IHRoaXMuX2Jsb2Nrc1tiaV07XG4gICAgICBjb25zdCBibG9ja1N0YXJ0UG9zID0gYWNjVmFsLmxlbmd0aDtcbiAgICAgIGFjY1ZhbCArPSBibG9jay5kaXNwbGF5VmFsdWU7XG4gICAgICBpZiAocG9zIDw9IGFjY1ZhbC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbmRleDogYmksXG4gICAgICAgICAgb2Zmc2V0OiBwb3MgLSBibG9ja1N0YXJ0UG9zXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF9ibG9ja1N0YXJ0UG9zKGJsb2NrSW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnNsaWNlKDAsIGJsb2NrSW5kZXgpLnJlZHVjZSgocG9zLCBiKSA9PiBwb3MgKz0gYi5kaXNwbGF5VmFsdWUubGVuZ3RoLCAwKTtcbiAgfVxuICBfZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIGZuKSB7XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCBmcm9tQmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayhmcm9tUG9zKTtcbiAgICBpZiAoZnJvbUJsb2NrSXRlcikge1xuICAgICAgY29uc3QgdG9CbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRvUG9zKTtcbiAgICAgIC8vIHByb2Nlc3MgZmlyc3QgYmxvY2tcbiAgICAgIGNvbnN0IGlzU2FtZUJsb2NrID0gdG9CbG9ja0l0ZXIgJiYgZnJvbUJsb2NrSXRlci5pbmRleCA9PT0gdG9CbG9ja0l0ZXIuaW5kZXg7XG4gICAgICBjb25zdCBmcm9tQmxvY2tTdGFydFBvcyA9IGZyb21CbG9ja0l0ZXIub2Zmc2V0O1xuICAgICAgY29uc3QgZnJvbUJsb2NrRW5kUG9zID0gdG9CbG9ja0l0ZXIgJiYgaXNTYW1lQmxvY2sgPyB0b0Jsb2NrSXRlci5vZmZzZXQgOiB0aGlzLl9ibG9ja3NbZnJvbUJsb2NrSXRlci5pbmRleF0uZGlzcGxheVZhbHVlLmxlbmd0aDtcbiAgICAgIGZuKHRoaXMuX2Jsb2Nrc1tmcm9tQmxvY2tJdGVyLmluZGV4XSwgZnJvbUJsb2NrSXRlci5pbmRleCwgZnJvbUJsb2NrU3RhcnRQb3MsIGZyb21CbG9ja0VuZFBvcyk7XG4gICAgICBpZiAodG9CbG9ja0l0ZXIgJiYgIWlzU2FtZUJsb2NrKSB7XG4gICAgICAgIC8vIHByb2Nlc3MgaW50ZXJtZWRpYXRlIGJsb2Nrc1xuICAgICAgICBmb3IgKGxldCBiaSA9IGZyb21CbG9ja0l0ZXIuaW5kZXggKyAxOyBiaSA8IHRvQmxvY2tJdGVyLmluZGV4OyArK2JpKSB7XG4gICAgICAgICAgZm4odGhpcy5fYmxvY2tzW2JpXSwgYmksIDAsIHRoaXMuX2Jsb2Nrc1tiaV0uZGlzcGxheVZhbHVlLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcm9jZXNzIGxhc3QgYmxvY2tcbiAgICAgICAgZm4odGhpcy5fYmxvY2tzW3RvQmxvY2tJdGVyLmluZGV4XSwgdG9CbG9ja0l0ZXIuaW5kZXgsIDAsIHRvQmxvY2tJdGVyLm9mZnNldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlbW92ZShmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZURldGFpbHMgPSBzdXBlci5yZW1vdmUoZnJvbVBvcywgdG9Qb3MpO1xuICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCAoYiwgXywgYkZyb21Qb3MsIGJUb1BvcykgPT4ge1xuICAgICAgcmVtb3ZlRGV0YWlscy5hZ2dyZWdhdGUoYi5yZW1vdmUoYkZyb21Qb3MsIGJUb1BvcykpO1xuICAgIH0pO1xuICAgIHJldHVybiByZW1vdmVEZXRhaWxzO1xuICB9XG4gIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MsIGRpcmVjdGlvbikge1xuICAgIGlmIChkaXJlY3Rpb24gPT09IHZvaWQgMCkge1xuICAgICAgZGlyZWN0aW9uID0gRElSRUNUSU9OLk5PTkU7XG4gICAgfVxuICAgIGlmICghdGhpcy5fYmxvY2tzLmxlbmd0aCkgcmV0dXJuIDA7XG4gICAgY29uc3QgY3Vyc29yID0gbmV3IFBhdHRlcm5DdXJzb3IodGhpcywgY3Vyc29yUG9zKTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTk9ORSkge1xuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gTk9ORSBzaG91bGQgb25seSBnbyBvdXQgZnJvbSBmaXhlZCB0byB0aGUgcmlnaHQhXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpZiAoY3Vyc29yLnB1c2hSaWdodEJlZm9yZUlucHV0KCkpIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICBpZiAoY3Vyc29yLnB1c2hMZWZ0QmVmb3JlSW5wdXQoKSkgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICByZXR1cm4gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIEZPUkNFIGlzIG9ubHkgYWJvdXQgYXwqIG90aGVyd2lzZSBpcyAwXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkxFRlQgfHwgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCkge1xuICAgICAgLy8gdHJ5IHRvIGJyZWFrIGZhc3Qgd2hlbiAqfGFcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUKSB7XG4gICAgICAgIGN1cnNvci5wdXNoUmlnaHRCZWZvcmVGaWxsZWQoKTtcbiAgICAgICAgaWYgKGN1cnNvci5vayAmJiBjdXJzb3IucG9zID09PSBjdXJzb3JQb3MpIHJldHVybiBjdXJzb3JQb3M7XG4gICAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBmb3J3YXJkIGZsb3dcbiAgICAgIGN1cnNvci5wdXNoTGVmdEJlZm9yZUlucHV0KCk7XG4gICAgICBjdXJzb3IucHVzaExlZnRCZWZvcmVSZXF1aXJlZCgpO1xuICAgICAgY3Vyc29yLnB1c2hMZWZ0QmVmb3JlRmlsbGVkKCk7XG5cbiAgICAgIC8vIGJhY2t3YXJkIGZsb3dcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUKSB7XG4gICAgICAgIGN1cnNvci5wdXNoUmlnaHRCZWZvcmVJbnB1dCgpO1xuICAgICAgICBjdXJzb3IucHVzaFJpZ2h0QmVmb3JlUmVxdWlyZWQoKTtcbiAgICAgICAgaWYgKGN1cnNvci5vayAmJiBjdXJzb3IucG9zIDw9IGN1cnNvclBvcykgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgICBpZiAoY3Vyc29yLm9rICYmIGN1cnNvci5wb3MgPD0gY3Vyc29yUG9zKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoY3Vyc29yLm9rKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSByZXR1cm4gMDtcbiAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgaWYgKGN1cnNvci5vaykgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgIGlmIChjdXJzb3Iub2spIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5SSUdIVCB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCkge1xuICAgICAgLy8gZm9yd2FyZCBmbG93XG4gICAgICBjdXJzb3IucHVzaFJpZ2h0QmVmb3JlSW5wdXQoKTtcbiAgICAgIGN1cnNvci5wdXNoUmlnaHRCZWZvcmVSZXF1aXJlZCgpO1xuICAgICAgaWYgKGN1cnNvci5wdXNoUmlnaHRCZWZvcmVGaWxsZWQoKSkgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfUklHSFQpIHJldHVybiB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG5cbiAgICAgIC8vIGJhY2t3YXJkIGZsb3dcbiAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgaWYgKGN1cnNvci5vaykgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgIGlmIChjdXJzb3Iub2spIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgcmV0dXJuIHRoaXMubmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgRElSRUNUSU9OLkxFRlQpO1xuICAgIH1cbiAgICByZXR1cm4gY3Vyc29yUG9zO1xuICB9XG4gIHRvdGFsSW5wdXRQb3NpdGlvbnMoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCAoYiwgXywgYkZyb21Qb3MsIGJUb1BvcykgPT4ge1xuICAgICAgdG90YWwgKz0gYi50b3RhbElucHV0UG9zaXRpb25zKGJGcm9tUG9zLCBiVG9Qb3MpO1xuICAgIH0pO1xuICAgIHJldHVybiB0b3RhbDtcbiAgfVxuXG4gIC8qKiBHZXQgYmxvY2sgYnkgbmFtZSAqL1xuICBtYXNrZWRCbG9jayhuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2VkQmxvY2tzKG5hbWUpWzBdO1xuICB9XG5cbiAgLyoqIEdldCBhbGwgYmxvY2tzIGJ5IG5hbWUgKi9cbiAgbWFza2VkQmxvY2tzKG5hbWUpIHtcbiAgICBjb25zdCBpbmRpY2VzID0gdGhpcy5fbWFza2VkQmxvY2tzW25hbWVdO1xuICAgIGlmICghaW5kaWNlcykgcmV0dXJuIFtdO1xuICAgIHJldHVybiBpbmRpY2VzLm1hcChnaSA9PiB0aGlzLl9ibG9ja3NbZ2ldKTtcbiAgfVxuICBwYWQoZmxhZ3MpIHtcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZSgwLCB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGgsIGIgPT4gZGV0YWlscy5hZ2dyZWdhdGUoYi5wYWQoZmxhZ3MpKSk7XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbn1cbk1hc2tlZFBhdHRlcm4uREVGQVVMVFMgPSB7XG4gIC4uLk1hc2tlZC5ERUZBVUxUUyxcbiAgbGF6eTogdHJ1ZSxcbiAgcGxhY2Vob2xkZXJDaGFyOiAnXydcbn07XG5NYXNrZWRQYXR0ZXJuLlNUT1BfQ0hBUiA9ICdgJztcbk1hc2tlZFBhdHRlcm4uRVNDQVBFX0NIQVIgPSAnXFxcXCc7XG5NYXNrZWRQYXR0ZXJuLklucHV0RGVmaW5pdGlvbiA9IFBhdHRlcm5JbnB1dERlZmluaXRpb247XG5NYXNrZWRQYXR0ZXJuLkZpeGVkRGVmaW5pdGlvbiA9IFBhdHRlcm5GaXhlZERlZmluaXRpb247XG5JTWFzay5NYXNrZWRQYXR0ZXJuID0gTWFza2VkUGF0dGVybjtcblxuZXhwb3J0IHsgTWFza2VkUGF0dGVybiBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgQ29udGludW91c1RhaWxEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uLy4uL2NvcmUvaG9sZGVyLmpzJztcblxuY2xhc3MgQ2h1bmtzVGFpbERldGFpbHMge1xuICAvKiogKi9cblxuICBjb25zdHJ1Y3RvcihjaHVua3MsIGZyb20pIHtcbiAgICBpZiAoY2h1bmtzID09PSB2b2lkIDApIHtcbiAgICAgIGNodW5rcyA9IFtdO1xuICAgIH1cbiAgICBpZiAoZnJvbSA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tID0gMDtcbiAgICB9XG4gICAgdGhpcy5jaHVua3MgPSBjaHVua3M7XG4gICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5jaHVua3MubWFwKFN0cmluZykuam9pbignJyk7XG4gIH1cbiAgZXh0ZW5kKHRhaWxDaHVuaykge1xuICAgIGlmICghU3RyaW5nKHRhaWxDaHVuaykpIHJldHVybjtcbiAgICB0YWlsQ2h1bmsgPSBpc1N0cmluZyh0YWlsQ2h1bmspID8gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbENodW5rKSkgOiB0YWlsQ2h1bms7XG4gICAgY29uc3QgbGFzdENodW5rID0gdGhpcy5jaHVua3NbdGhpcy5jaHVua3MubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgZXh0ZW5kTGFzdCA9IGxhc3RDaHVuayAmJiAoXG4gICAgLy8gaWYgc3RvcHMgYXJlIHNhbWUgb3IgdGFpbCBoYXMgbm8gc3RvcFxuICAgIGxhc3RDaHVuay5zdG9wID09PSB0YWlsQ2h1bmsuc3RvcCB8fCB0YWlsQ2h1bmsuc3RvcCA9PSBudWxsKSAmJlxuICAgIC8vIGlmIHRhaWwgY2h1bmsgZ29lcyBqdXN0IGFmdGVyIGxhc3QgY2h1bmtcbiAgICB0YWlsQ2h1bmsuZnJvbSA9PT0gbGFzdENodW5rLmZyb20gKyBsYXN0Q2h1bmsudG9TdHJpbmcoKS5sZW5ndGg7XG4gICAgaWYgKHRhaWxDaHVuayBpbnN0YW5jZW9mIENvbnRpbnVvdXNUYWlsRGV0YWlscykge1xuICAgICAgLy8gY2hlY2sgdGhlIGFiaWxpdHkgdG8gZXh0ZW5kIHByZXZpb3VzIGNodW5rXG4gICAgICBpZiAoZXh0ZW5kTGFzdCkge1xuICAgICAgICAvLyBleHRlbmQgcHJldmlvdXMgY2h1bmtcbiAgICAgICAgbGFzdENodW5rLmV4dGVuZCh0YWlsQ2h1bmsudG9TdHJpbmcoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhcHBlbmQgbmV3IGNodW5rXG4gICAgICAgIHRoaXMuY2h1bmtzLnB1c2godGFpbENodW5rKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRhaWxDaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzKSB7XG4gICAgICBpZiAodGFpbENodW5rLnN0b3AgPT0gbnVsbCkge1xuICAgICAgICAvLyB1bndyYXAgZmxvYXRpbmcgY2h1bmtzIHRvIHBhcmVudCwga2VlcGluZyBgZnJvbWAgcG9zXG4gICAgICAgIGxldCBmaXJzdFRhaWxDaHVuaztcbiAgICAgICAgd2hpbGUgKHRhaWxDaHVuay5jaHVua3MubGVuZ3RoICYmIHRhaWxDaHVuay5jaHVua3NbMF0uc3RvcCA9PSBudWxsKSB7XG4gICAgICAgICAgZmlyc3RUYWlsQ2h1bmsgPSB0YWlsQ2h1bmsuY2h1bmtzLnNoaWZ0KCk7IC8vIG5vdCBwb3NzaWJsZSB0byBiZSBgdW5kZWZpbmVkYCBiZWNhdXNlIGxlbmd0aCB3YXMgY2hlY2tlZCBhYm92ZVxuICAgICAgICAgIGZpcnN0VGFpbENodW5rLmZyb20gKz0gdGFpbENodW5rLmZyb207XG4gICAgICAgICAgdGhpcy5leHRlbmQoZmlyc3RUYWlsQ2h1bmspO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHRhaWwgY2h1bmsgc3RpbGwgaGFzIHZhbHVlXG4gICAgICBpZiAodGFpbENodW5rLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgLy8gaWYgY2h1bmtzIGNvbnRhaW5zIHN0b3BzLCB0aGVuIHBvcHVwIHN0b3AgdG8gY29udGFpbmVyXG4gICAgICAgIHRhaWxDaHVuay5zdG9wID0gdGFpbENodW5rLmJsb2NrSW5kZXg7XG4gICAgICAgIHRoaXMuY2h1bmtzLnB1c2godGFpbENodW5rKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXBwZW5kVG8obWFza2VkKSB7XG4gICAgaWYgKCEobWFza2VkIGluc3RhbmNlb2YgSU1hc2suTWFza2VkUGF0dGVybikpIHtcbiAgICAgIGNvbnN0IHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKHRoaXMudG9TdHJpbmcoKSk7XG4gICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyhtYXNrZWQpO1xuICAgIH1cbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgdGhpcy5jaHVua3MubGVuZ3RoOyArK2NpKSB7XG4gICAgICBjb25zdCBjaHVuayA9IHRoaXMuY2h1bmtzW2NpXTtcbiAgICAgIGNvbnN0IGxhc3RCbG9ja0l0ZXIgPSBtYXNrZWQuX21hcFBvc1RvQmxvY2sobWFza2VkLmRpc3BsYXlWYWx1ZS5sZW5ndGgpO1xuICAgICAgY29uc3Qgc3RvcCA9IGNodW5rLnN0b3A7XG4gICAgICBsZXQgY2h1bmtCbG9jaztcbiAgICAgIGlmIChzdG9wICE9IG51bGwgJiYgKFxuICAgICAgLy8gaWYgYmxvY2sgbm90IGZvdW5kIG9yIHN0b3AgaXMgYmVoaW5kIGxhc3RCbG9ja1xuICAgICAgIWxhc3RCbG9ja0l0ZXIgfHwgbGFzdEJsb2NrSXRlci5pbmRleCA8PSBzdG9wKSkge1xuICAgICAgICBpZiAoY2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscyB8fFxuICAgICAgICAvLyBmb3IgY29udGludW91cyBibG9jayBhbHNvIGNoZWNrIGlmIHN0b3AgaXMgZXhpc3RcbiAgICAgICAgbWFza2VkLl9zdG9wcy5pbmRleE9mKHN0b3ApID49IDApIHtcbiAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuX2FwcGVuZFBsYWNlaG9sZGVyKHN0b3ApKTtcbiAgICAgICAgfVxuICAgICAgICBjaHVua0Jsb2NrID0gY2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscyAmJiBtYXNrZWQuX2Jsb2Nrc1tzdG9wXTtcbiAgICAgIH1cbiAgICAgIGlmIChjaHVua0Jsb2NrKSB7XG4gICAgICAgIGNvbnN0IHRhaWxEZXRhaWxzID0gY2h1bmtCbG9jay5hcHBlbmRUYWlsKGNodW5rKTtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGFpbERldGFpbHMpO1xuXG4gICAgICAgIC8vIGdldCBub3QgaW5zZXJ0ZWQgY2hhcnNcbiAgICAgICAgY29uc3QgcmVtYWluQ2hhcnMgPSBjaHVuay50b1N0cmluZygpLnNsaWNlKHRhaWxEZXRhaWxzLnJhd0luc2VydGVkLmxlbmd0aCk7XG4gICAgICAgIGlmIChyZW1haW5DaGFycykgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLmFwcGVuZChyZW1haW5DaGFycywge1xuICAgICAgICAgIHRhaWw6IHRydWVcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLmFwcGVuZChjaHVuay50b1N0cmluZygpLCB7XG4gICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2h1bmtzOiB0aGlzLmNodW5rcy5tYXAoYyA9PiBjLnN0YXRlKSxcbiAgICAgIGZyb206IHRoaXMuZnJvbSxcbiAgICAgIHN0b3A6IHRoaXMuc3RvcCxcbiAgICAgIGJsb2NrSW5kZXg6IHRoaXMuYmxvY2tJbmRleFxuICAgIH07XG4gIH1cbiAgc2V0IHN0YXRlKHN0YXRlKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2h1bmtzLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gc3RhdGU7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwcm9wcyk7XG4gICAgdGhpcy5jaHVua3MgPSBjaHVua3MubWFwKGNzdGF0ZSA9PiB7XG4gICAgICBjb25zdCBjaHVuayA9IFwiY2h1bmtzXCIgaW4gY3N0YXRlID8gbmV3IENodW5rc1RhaWxEZXRhaWxzKCkgOiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKCk7XG4gICAgICBjaHVuay5zdGF0ZSA9IGNzdGF0ZTtcbiAgICAgIHJldHVybiBjaHVuaztcbiAgICB9KTtcbiAgfVxuICB1bnNoaWZ0KGJlZm9yZVBvcykge1xuICAgIGlmICghdGhpcy5jaHVua3MubGVuZ3RoIHx8IGJlZm9yZVBvcyAhPSBudWxsICYmIHRoaXMuZnJvbSA+PSBiZWZvcmVQb3MpIHJldHVybiAnJztcbiAgICBjb25zdCBjaHVua1NoaWZ0UG9zID0gYmVmb3JlUG9zICE9IG51bGwgPyBiZWZvcmVQb3MgLSB0aGlzLmZyb20gOiBiZWZvcmVQb3M7XG4gICAgbGV0IGNpID0gMDtcbiAgICB3aGlsZSAoY2kgPCB0aGlzLmNodW5rcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNodW5rID0gdGhpcy5jaHVua3NbY2ldO1xuICAgICAgY29uc3Qgc2hpZnRDaGFyID0gY2h1bmsudW5zaGlmdChjaHVua1NoaWZ0UG9zKTtcbiAgICAgIGlmIChjaHVuay50b1N0cmluZygpKSB7XG4gICAgICAgIC8vIGNodW5rIHN0aWxsIGNvbnRhaW5zIHZhbHVlXG4gICAgICAgIC8vIGJ1dCBub3Qgc2hpZnRlZCAtIG1lYW5zIG5vIG1vcmUgYXZhaWxhYmxlIGNoYXJzIHRvIHNoaWZ0XG4gICAgICAgIGlmICghc2hpZnRDaGFyKSBicmVhaztcbiAgICAgICAgKytjaTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNsZWFuIGlmIGNodW5rIGhhcyBubyB2YWx1ZVxuICAgICAgICB0aGlzLmNodW5rcy5zcGxpY2UoY2ksIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaWZ0Q2hhcikgcmV0dXJuIHNoaWZ0Q2hhcjtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHNoaWZ0KCkge1xuICAgIGlmICghdGhpcy5jaHVua3MubGVuZ3RoKSByZXR1cm4gJyc7XG4gICAgbGV0IGNpID0gdGhpcy5jaHVua3MubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAoMCA8PSBjaSkge1xuICAgICAgY29uc3QgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XG4gICAgICBjb25zdCBzaGlmdENoYXIgPSBjaHVuay5zaGlmdCgpO1xuICAgICAgaWYgKGNodW5rLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgLy8gY2h1bmsgc3RpbGwgY29udGFpbnMgdmFsdWVcbiAgICAgICAgLy8gYnV0IG5vdCBzaGlmdGVkIC0gbWVhbnMgbm8gbW9yZSBhdmFpbGFibGUgY2hhcnMgdG8gc2hpZnRcbiAgICAgICAgaWYgKCFzaGlmdENoYXIpIGJyZWFrO1xuICAgICAgICAtLWNpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY2xlYW4gaWYgY2h1bmsgaGFzIG5vIHZhbHVlXG4gICAgICAgIHRoaXMuY2h1bmtzLnNwbGljZShjaSwgMSk7XG4gICAgICB9XG4gICAgICBpZiAoc2hpZnRDaGFyKSByZXR1cm4gc2hpZnRDaGFyO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZXhwb3J0IHsgQ2h1bmtzVGFpbERldGFpbHMgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy5qcyc7XG5cbmNsYXNzIFBhdHRlcm5DdXJzb3Ige1xuICBjb25zdHJ1Y3RvcihtYXNrZWQsIHBvcykge1xuICAgIHRoaXMubWFza2VkID0gbWFza2VkO1xuICAgIHRoaXMuX2xvZyA9IFtdO1xuICAgIGNvbnN0IHtcbiAgICAgIG9mZnNldCxcbiAgICAgIGluZGV4XG4gICAgfSA9IG1hc2tlZC5fbWFwUG9zVG9CbG9jayhwb3MpIHx8IChwb3MgPCAwID9cbiAgICAvLyBmaXJzdFxuICAgIHtcbiAgICAgIGluZGV4OiAwLFxuICAgICAgb2Zmc2V0OiAwXG4gICAgfSA6XG4gICAgLy8gbGFzdFxuICAgIHtcbiAgICAgIGluZGV4OiB0aGlzLm1hc2tlZC5fYmxvY2tzLmxlbmd0aCxcbiAgICAgIG9mZnNldDogMFxuICAgIH0pO1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLm9rID0gZmFsc2U7XG4gIH1cbiAgZ2V0IGJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tlZC5fYmxvY2tzW3RoaXMuaW5kZXhdO1xuICB9XG4gIGdldCBwb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2VkLl9ibG9ja1N0YXJ0UG9zKHRoaXMuaW5kZXgpICsgdGhpcy5vZmZzZXQ7XG4gIH1cbiAgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICBvazogdGhpcy5va1xuICAgIH07XG4gIH1cbiAgc2V0IHN0YXRlKHMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHMpO1xuICB9XG4gIHB1c2hTdGF0ZSgpIHtcbiAgICB0aGlzLl9sb2cucHVzaCh0aGlzLnN0YXRlKTtcbiAgfVxuICBwb3BTdGF0ZSgpIHtcbiAgICBjb25zdCBzID0gdGhpcy5fbG9nLnBvcCgpO1xuICAgIGlmIChzKSB0aGlzLnN0YXRlID0gcztcbiAgICByZXR1cm4gcztcbiAgfVxuICBiaW5kQmxvY2soKSB7XG4gICAgaWYgKHRoaXMuYmxvY2spIHJldHVybjtcbiAgICBpZiAodGhpcy5pbmRleCA8IDApIHtcbiAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbmRleCA+PSB0aGlzLm1hc2tlZC5fYmxvY2tzLmxlbmd0aCkge1xuICAgICAgdGhpcy5pbmRleCA9IHRoaXMubWFza2VkLl9ibG9ja3MubGVuZ3RoIC0gMTtcbiAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5ibG9jay5kaXNwbGF5VmFsdWUubGVuZ3RoOyAvLyBUT0RPIHRoaXMgaXMgc3R1cGlkIHR5cGUgZXJyb3IsIGBibG9ja2AgZGVwZW5kcyBvbiBpbmRleCB0aGF0IHdhcyBjaGFuZ2VkIGFib3ZlXG4gICAgfVxuICB9XG4gIF9wdXNoTGVmdChmbikge1xuICAgIHRoaXMucHVzaFN0YXRlKCk7XG4gICAgZm9yICh0aGlzLmJpbmRCbG9jaygpOyAwIDw9IHRoaXMuaW5kZXg7IC0tdGhpcy5pbmRleCwgdGhpcy5vZmZzZXQgPSAoKF90aGlzJGJsb2NrID0gdGhpcy5ibG9jaykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJGJsb2NrLmRpc3BsYXlWYWx1ZS5sZW5ndGgpIHx8IDApIHtcbiAgICAgIHZhciBfdGhpcyRibG9jaztcbiAgICAgIGlmIChmbigpKSByZXR1cm4gdGhpcy5vayA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9rID0gZmFsc2U7XG4gIH1cbiAgX3B1c2hSaWdodChmbikge1xuICAgIHRoaXMucHVzaFN0YXRlKCk7XG4gICAgZm9yICh0aGlzLmJpbmRCbG9jaygpOyB0aGlzLmluZGV4IDwgdGhpcy5tYXNrZWQuX2Jsb2Nrcy5sZW5ndGg7ICsrdGhpcy5pbmRleCwgdGhpcy5vZmZzZXQgPSAwKSB7XG4gICAgICBpZiAoZm4oKSkgcmV0dXJuIHRoaXMub2sgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vayA9IGZhbHNlO1xuICB9XG4gIHB1c2hMZWZ0QmVmb3JlRmlsbGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9wdXNoTGVmdCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5ibG9jay5pc0ZpeGVkIHx8ICF0aGlzLmJsb2NrLnZhbHVlKSByZXR1cm47XG4gICAgICB0aGlzLm9mZnNldCA9IHRoaXMuYmxvY2submVhcmVzdElucHV0UG9zKHRoaXMub2Zmc2V0LCBESVJFQ1RJT04uRk9SQ0VfTEVGVCk7XG4gICAgICBpZiAodGhpcy5vZmZzZXQgIT09IDApIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHB1c2hMZWZ0QmVmb3JlSW5wdXQoKSB7XG4gICAgLy8gY2FzZXM6XG4gICAgLy8gZmlsbGVkIGlucHV0OiAwMHxcbiAgICAvLyBvcHRpb25hbCBlbXB0eSBpbnB1dDogMDBbXXxcbiAgICAvLyBuZXN0ZWQgYmxvY2s6IFhYPFtdPnxcbiAgICByZXR1cm4gdGhpcy5fcHVzaExlZnQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYmxvY2suaXNGaXhlZCkgcmV0dXJuO1xuICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLmJsb2NrLm5lYXJlc3RJbnB1dFBvcyh0aGlzLm9mZnNldCwgRElSRUNUSU9OLkxFRlQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cbiAgcHVzaExlZnRCZWZvcmVSZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHVzaExlZnQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYmxvY2suaXNGaXhlZCB8fCB0aGlzLmJsb2NrLmlzT3B0aW9uYWwgJiYgIXRoaXMuYmxvY2sudmFsdWUpIHJldHVybjtcbiAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5ibG9jay5uZWFyZXN0SW5wdXRQb3ModGhpcy5vZmZzZXQsIERJUkVDVElPTi5MRUZUKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHB1c2hSaWdodEJlZm9yZUZpbGxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHVzaFJpZ2h0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmJsb2NrLmlzRml4ZWQgfHwgIXRoaXMuYmxvY2sudmFsdWUpIHJldHVybjtcbiAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5ibG9jay5uZWFyZXN0SW5wdXRQb3ModGhpcy5vZmZzZXQsIERJUkVDVElPTi5GT1JDRV9SSUdIVCk7XG4gICAgICBpZiAodGhpcy5vZmZzZXQgIT09IHRoaXMuYmxvY2sudmFsdWUubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICBwdXNoUmlnaHRCZWZvcmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHVzaFJpZ2h0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmJsb2NrLmlzRml4ZWQpIHJldHVybjtcblxuICAgICAgLy8gY29uc3QgbyA9IHRoaXMub2Zmc2V0O1xuICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLmJsb2NrLm5lYXJlc3RJbnB1dFBvcyh0aGlzLm9mZnNldCwgRElSRUNUSU9OLk5PTkUpO1xuICAgICAgLy8gSEFDSyBjYXNlcyBsaWtlIChTVElMTCBET0VTIE5PVCBXT1JLIEZPUiBORVNURUQpXG4gICAgICAvLyBhYXxYXG4gICAgICAvLyBhYTxYfFtdPlhfICAgIC0gdGhpcyB3aWxsIG5vdCB3b3JrXG4gICAgICAvLyBpZiAobyAmJiBvID09PSB0aGlzLm9mZnNldCAmJiB0aGlzLmJsb2NrIGluc3RhbmNlb2YgUGF0dGVybklucHV0RGVmaW5pdGlvbikgY29udGludWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICBwdXNoUmlnaHRCZWZvcmVSZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHVzaFJpZ2h0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmJsb2NrLmlzRml4ZWQgfHwgdGhpcy5ibG9jay5pc09wdGlvbmFsICYmICF0aGlzLmJsb2NrLnZhbHVlKSByZXR1cm47XG5cbiAgICAgIC8vIFRPRE8gY2hlY2sgfFsqXVhYX1xuICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLmJsb2NrLm5lYXJlc3RJbnB1dFBvcyh0aGlzLm9mZnNldCwgRElSRUNUSU9OLk5PTkUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgUGF0dGVybkN1cnNvciBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCB7IERJUkVDVElPTiwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBDb250aW51b3VzVGFpbERldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uLy4uL2NvcmUvaG9sZGVyLmpzJztcblxuY2xhc3MgUGF0dGVybkZpeGVkRGVmaW5pdGlvbiB7XG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdHMpO1xuICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgdGhpcy5pc0ZpeGVkID0gdHJ1ZTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIGdldCB1bm1hc2tlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmlzVW5tYXNraW5nID8gdGhpcy52YWx1ZSA6ICcnO1xuICB9XG4gIGdldCByYXdJbnB1dFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Jhd0lucHV0ID8gdGhpcy52YWx1ZSA6ICcnO1xuICB9XG4gIGdldCBkaXNwbGF5VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5faXNSYXdJbnB1dCA9IGZhbHNlO1xuICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gIH1cbiAgcmVtb3ZlKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMuX3ZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLl92YWx1ZS5zbGljZSgwLCBmcm9tUG9zKSArIHRoaXMuX3ZhbHVlLnNsaWNlKHRvUG9zKTtcbiAgICBpZiAoIXRoaXMuX3ZhbHVlKSB0aGlzLl9pc1Jhd0lucHV0ID0gZmFsc2U7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gIH1cbiAgbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICBkaXJlY3Rpb24gPSBESVJFQ1RJT04uTk9ORTtcbiAgICB9XG4gICAgY29uc3QgbWluUG9zID0gMDtcbiAgICBjb25zdCBtYXhQb3MgPSB0aGlzLl92YWx1ZS5sZW5ndGg7XG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgICByZXR1cm4gbWluUG9zO1xuICAgICAgY2FzZSBESVJFQ1RJT04uTk9ORTpcbiAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbWF4UG9zO1xuICAgIH1cbiAgfVxuICB0b3RhbElucHV0UG9zaXRpb25zKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMuX3ZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2lzUmF3SW5wdXQgPyB0b1BvcyAtIGZyb21Qb3MgOiAwO1xuICB9XG4gIGV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5fdmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIGZsYWdzLnJhdyAmJiB0aGlzLl9pc1Jhd0lucHV0ICYmIHRoaXMuX3ZhbHVlLnNsaWNlKGZyb21Qb3MsIHRvUG9zKSB8fCAnJztcbiAgfVxuICBnZXQgaXNDb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBnZXQgaXNGaWxsZWQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5fdmFsdWUpO1xuICB9XG4gIF9hcHBlbmRDaGFyKGNoLCBmbGFncykge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0ZpbGxlZCkgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgY29uc3QgYXBwZW5kRWFnZXIgPSB0aGlzLmVhZ2VyID09PSB0cnVlIHx8IHRoaXMuZWFnZXIgPT09ICdhcHBlbmQnO1xuICAgIGNvbnN0IGFwcGVuZGVkID0gdGhpcy5jaGFyID09PSBjaDtcbiAgICBjb25zdCBpc1Jlc29sdmVkID0gYXBwZW5kZWQgJiYgKHRoaXMuaXNVbm1hc2tpbmcgfHwgZmxhZ3MuaW5wdXQgfHwgZmxhZ3MucmF3KSAmJiAoIWZsYWdzLnJhdyB8fCAhYXBwZW5kRWFnZXIpICYmICFmbGFncy50YWlsO1xuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICBpbnNlcnRlZDogdGhpcy5jaGFyLFxuICAgICAgcmF3SW5zZXJ0ZWQ6IGlzUmVzb2x2ZWQgPyB0aGlzLmNoYXIgOiAnJ1xuICAgIH0pO1xuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5jaGFyO1xuICAgIHRoaXMuX2lzUmF3SW5wdXQgPSBpc1Jlc29sdmVkICYmIChmbGFncy5yYXcgfHwgZmxhZ3MuaW5wdXQpO1xuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIF9hcHBlbmRFYWdlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwZW5kQ2hhcih0aGlzLmNoYXIsIHtcbiAgICAgIHRhaWw6IHRydWVcbiAgICB9KTtcbiAgfVxuICBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgaWYgKHRoaXMuaXNGaWxsZWQpIHJldHVybiBkZXRhaWxzO1xuICAgIHRoaXMuX3ZhbHVlID0gZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMuY2hhcjtcbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuICBleHRyYWN0VGFpbCgpIHtcbiAgICByZXR1cm4gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscygnJyk7XG4gIH1cbiAgYXBwZW5kVGFpbCh0YWlsKSB7XG4gICAgaWYgKGlzU3RyaW5nKHRhaWwpKSB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpO1xuICAgIHJldHVybiB0YWlsLmFwcGVuZFRvKHRoaXMpO1xuICB9XG4gIGFwcGVuZChzdHIsIGZsYWdzLCB0YWlsKSB7XG4gICAgY29uc3QgZGV0YWlscyA9IHRoaXMuX2FwcGVuZENoYXIoc3RyWzBdLCBmbGFncyk7XG4gICAgaWYgKHRhaWwgIT0gbnVsbCkge1xuICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5hcHBlbmRUYWlsKHRhaWwpLnRhaWxTaGlmdDtcbiAgICB9XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbiAgZG9Db21taXQoKSB7fVxuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF92YWx1ZTogdGhpcy5fdmFsdWUsXG4gICAgICBfcmF3SW5wdXRWYWx1ZTogdGhpcy5yYXdJbnB1dFZhbHVlXG4gICAgfTtcbiAgfVxuICBzZXQgc3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHN0YXRlLl92YWx1ZTtcbiAgICB0aGlzLl9pc1Jhd0lucHV0ID0gQm9vbGVhbihzdGF0ZS5fcmF3SW5wdXRWYWx1ZSk7XG4gIH1cbiAgcGFkKGZsYWdzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVuZFBsYWNlaG9sZGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgUGF0dGVybkZpeGVkRGVmaW5pdGlvbiBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgY3JlYXRlTWFzayBmcm9tICcuLi9mYWN0b3J5LmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uLy4uL2NvcmUvaG9sZGVyLmpzJztcblxuY2xhc3MgUGF0dGVybklucHV0RGVmaW5pdGlvbiB7XG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXJlbnQsXG4gICAgICBpc09wdGlvbmFsLFxuICAgICAgcGxhY2Vob2xkZXJDaGFyLFxuICAgICAgZGlzcGxheUNoYXIsXG4gICAgICBsYXp5LFxuICAgICAgZWFnZXIsXG4gICAgICAuLi5tYXNrT3B0c1xuICAgIH0gPSBvcHRzO1xuICAgIHRoaXMubWFza2VkID0gY3JlYXRlTWFzayhtYXNrT3B0cyk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBwYXJlbnQsXG4gICAgICBpc09wdGlvbmFsLFxuICAgICAgcGxhY2Vob2xkZXJDaGFyLFxuICAgICAgZGlzcGxheUNoYXIsXG4gICAgICBsYXp5LFxuICAgICAgZWFnZXJcbiAgICB9KTtcbiAgfVxuICByZXNldCgpIHtcbiAgICB0aGlzLmlzRmlsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5tYXNrZWQucmVzZXQoKTtcbiAgfVxuICByZW1vdmUoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGlmIChmcm9tUG9zID09PSAwICYmIHRvUG9zID49IDEpIHtcbiAgICAgIHRoaXMuaXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZC5yZW1vdmUoZnJvbVBvcywgdG9Qb3MpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2VkLnZhbHVlIHx8ICh0aGlzLmlzRmlsbGVkICYmICF0aGlzLmlzT3B0aW9uYWwgPyB0aGlzLnBsYWNlaG9sZGVyQ2hhciA6ICcnKTtcbiAgfVxuICBnZXQgdW5tYXNrZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgfVxuICBnZXQgcmF3SW5wdXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQucmF3SW5wdXRWYWx1ZTtcbiAgfVxuICBnZXQgZGlzcGxheVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tlZC52YWx1ZSAmJiB0aGlzLmRpc3BsYXlDaGFyIHx8IHRoaXMudmFsdWU7XG4gIH1cbiAgZ2V0IGlzQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5tYXNrZWQudmFsdWUpIHx8IHRoaXMuaXNPcHRpb25hbDtcbiAgfVxuICBfYXBwZW5kQ2hhcihjaCwgZmxhZ3MpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNGaWxsZWQpIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5tYXNrZWQuc3RhdGU7XG4gICAgLy8gc2ltdWxhdGUgaW5wdXRcbiAgICBsZXQgZGV0YWlscyA9IHRoaXMubWFza2VkLl9hcHBlbmRDaGFyKGNoLCB0aGlzLmN1cnJlbnRNYXNrRmxhZ3MoZmxhZ3MpKTtcbiAgICBpZiAoZGV0YWlscy5pbnNlcnRlZCAmJiB0aGlzLmRvVmFsaWRhdGUoZmxhZ3MpID09PSBmYWxzZSkge1xuICAgICAgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB0aGlzLm1hc2tlZC5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cbiAgICBpZiAoIWRldGFpbHMuaW5zZXJ0ZWQgJiYgIXRoaXMuaXNPcHRpb25hbCAmJiAhdGhpcy5sYXp5ICYmICFmbGFncy5pbnB1dCkge1xuICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMucGxhY2Vob2xkZXJDaGFyO1xuICAgIH1cbiAgICBkZXRhaWxzLnNraXAgPSAhZGV0YWlscy5pbnNlcnRlZCAmJiAhdGhpcy5pc09wdGlvbmFsO1xuICAgIHRoaXMuaXNGaWxsZWQgPSBCb29sZWFuKGRldGFpbHMuaW5zZXJ0ZWQpO1xuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIGFwcGVuZChzdHIsIGZsYWdzLCB0YWlsKSB7XG4gICAgLy8gVE9ETyBwcm9iYWJseSBzaG91bGQgYmUgZG9uZSB2aWEgX2FwcGVuZENoYXJcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQuYXBwZW5kKHN0ciwgdGhpcy5jdXJyZW50TWFza0ZsYWdzKGZsYWdzKSwgdGFpbCk7XG4gIH1cbiAgX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgIGlmICh0aGlzLmlzRmlsbGVkIHx8IHRoaXMuaXNPcHRpb25hbCkgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgdGhpcy5pc0ZpbGxlZCA9IHRydWU7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgIGluc2VydGVkOiB0aGlzLnBsYWNlaG9sZGVyQ2hhclxuICAgIH0pO1xuICB9XG4gIF9hcHBlbmRFYWdlcigpIHtcbiAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgfVxuICBleHRyYWN0VGFpbChmcm9tUG9zLCB0b1Bvcykge1xuICAgIHJldHVybiB0aGlzLm1hc2tlZC5leHRyYWN0VGFpbChmcm9tUG9zLCB0b1Bvcyk7XG4gIH1cbiAgYXBwZW5kVGFpbCh0YWlsKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2VkLmFwcGVuZFRhaWwodGFpbCk7XG4gIH1cbiAgZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFza2VkLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpO1xuICB9XG4gIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MsIGRpcmVjdGlvbikge1xuICAgIGlmIChkaXJlY3Rpb24gPT09IHZvaWQgMCkge1xuICAgICAgZGlyZWN0aW9uID0gRElSRUNUSU9OLk5PTkU7XG4gICAgfVxuICAgIGNvbnN0IG1pblBvcyA9IDA7XG4gICAgY29uc3QgbWF4UG9zID0gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgY29uc3QgYm91bmRQb3MgPSBNYXRoLm1pbihNYXRoLm1heChjdXJzb3JQb3MsIG1pblBvcyksIG1heFBvcyk7XG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlID8gYm91bmRQb3MgOiBtaW5Qb3M7XG4gICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxuICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlID8gYm91bmRQb3MgOiBtYXhQb3M7XG4gICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGJvdW5kUG9zO1xuICAgIH1cbiAgfVxuICB0b3RhbElucHV0UG9zaXRpb25zKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52YWx1ZS5zbGljZShmcm9tUG9zLCB0b1BvcykubGVuZ3RoO1xuICB9XG4gIGRvVmFsaWRhdGUoZmxhZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQuZG9WYWxpZGF0ZSh0aGlzLmN1cnJlbnRNYXNrRmxhZ3MoZmxhZ3MpKSAmJiAoIXRoaXMucGFyZW50IHx8IHRoaXMucGFyZW50LmRvVmFsaWRhdGUodGhpcy5jdXJyZW50TWFza0ZsYWdzKGZsYWdzKSkpO1xuICB9XG4gIGRvQ29tbWl0KCkge1xuICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XG4gIH1cbiAgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBfdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBfcmF3SW5wdXRWYWx1ZTogdGhpcy5yYXdJbnB1dFZhbHVlLFxuICAgICAgbWFza2VkOiB0aGlzLm1hc2tlZC5zdGF0ZSxcbiAgICAgIGlzRmlsbGVkOiB0aGlzLmlzRmlsbGVkXG4gICAgfTtcbiAgfVxuICBzZXQgc3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLm1hc2tlZC5zdGF0ZSA9IHN0YXRlLm1hc2tlZDtcbiAgICB0aGlzLmlzRmlsbGVkID0gc3RhdGUuaXNGaWxsZWQ7XG4gIH1cbiAgY3VycmVudE1hc2tGbGFncyhmbGFncykge1xuICAgIHZhciBfZmxhZ3MkX2JlZm9yZVRhaWxTdGE7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmZsYWdzLFxuICAgICAgX2JlZm9yZVRhaWxTdGF0ZTogKGZsYWdzID09IG51bGwgfHwgKF9mbGFncyRfYmVmb3JlVGFpbFN0YSA9IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUpID09IG51bGwgPyB2b2lkIDAgOiBfZmxhZ3MkX2JlZm9yZVRhaWxTdGEubWFza2VkKSB8fCAoZmxhZ3MgPT0gbnVsbCA/IHZvaWQgMCA6IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUpXG4gICAgfTtcbiAgfVxuICBwYWQoZmxhZ3MpIHtcbiAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgfVxufVxuUGF0dGVybklucHV0RGVmaW5pdGlvbi5ERUZBVUxUX0RFRklOSVRJT05TID0ge1xuICAnMCc6IC9cXGQvLFxuICAnYSc6IC9bXFx1MDA0MS1cXHUwMDVBXFx1MDA2MS1cXHUwMDdBXFx1MDBBQVxcdTAwQjVcXHUwMEJBXFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkMxXFx1MDJDNi1cXHUwMkQxXFx1MDJFMC1cXHUwMkU0XFx1MDJFQ1xcdTAyRUVcXHUwMzcwLVxcdTAzNzRcXHUwMzc2XFx1MDM3N1xcdTAzN0EtXFx1MDM3RFxcdTAzODZcXHUwMzg4LVxcdTAzOEFcXHUwMzhDXFx1MDM4RS1cXHUwM0ExXFx1MDNBMy1cXHUwM0Y1XFx1MDNGNy1cXHUwNDgxXFx1MDQ4QS1cXHUwNTI3XFx1MDUzMS1cXHUwNTU2XFx1MDU1OVxcdTA1NjEtXFx1MDU4N1xcdTA1RDAtXFx1MDVFQVxcdTA1RjAtXFx1MDVGMlxcdTA2MjAtXFx1MDY0QVxcdTA2NkVcXHUwNjZGXFx1MDY3MS1cXHUwNkQzXFx1MDZENVxcdTA2RTVcXHUwNkU2XFx1MDZFRVxcdTA2RUZcXHUwNkZBLVxcdTA2RkNcXHUwNkZGXFx1MDcxMFxcdTA3MTItXFx1MDcyRlxcdTA3NEQtXFx1MDdBNVxcdTA3QjFcXHUwN0NBLVxcdTA3RUFcXHUwN0Y0XFx1MDdGNVxcdTA3RkFcXHUwODAwLVxcdTA4MTVcXHUwODFBXFx1MDgyNFxcdTA4MjhcXHUwODQwLVxcdTA4NThcXHUwOEEwXFx1MDhBMi1cXHUwOEFDXFx1MDkwNC1cXHUwOTM5XFx1MDkzRFxcdTA5NTBcXHUwOTU4LVxcdTA5NjFcXHUwOTcxLVxcdTA5NzdcXHUwOTc5LVxcdTA5N0ZcXHUwOTg1LVxcdTA5OENcXHUwOThGXFx1MDk5MFxcdTA5OTMtXFx1MDlBOFxcdTA5QUEtXFx1MDlCMFxcdTA5QjJcXHUwOUI2LVxcdTA5QjlcXHUwOUJEXFx1MDlDRVxcdTA5RENcXHUwOUREXFx1MDlERi1cXHUwOUUxXFx1MDlGMFxcdTA5RjFcXHUwQTA1LVxcdTBBMEFcXHUwQTBGXFx1MEExMFxcdTBBMTMtXFx1MEEyOFxcdTBBMkEtXFx1MEEzMFxcdTBBMzJcXHUwQTMzXFx1MEEzNVxcdTBBMzZcXHUwQTM4XFx1MEEzOVxcdTBBNTktXFx1MEE1Q1xcdTBBNUVcXHUwQTcyLVxcdTBBNzRcXHUwQTg1LVxcdTBBOERcXHUwQThGLVxcdTBBOTFcXHUwQTkzLVxcdTBBQThcXHUwQUFBLVxcdTBBQjBcXHUwQUIyXFx1MEFCM1xcdTBBQjUtXFx1MEFCOVxcdTBBQkRcXHUwQUQwXFx1MEFFMFxcdTBBRTFcXHUwQjA1LVxcdTBCMENcXHUwQjBGXFx1MEIxMFxcdTBCMTMtXFx1MEIyOFxcdTBCMkEtXFx1MEIzMFxcdTBCMzJcXHUwQjMzXFx1MEIzNS1cXHUwQjM5XFx1MEIzRFxcdTBCNUNcXHUwQjVEXFx1MEI1Ri1cXHUwQjYxXFx1MEI3MVxcdTBCODNcXHUwQjg1LVxcdTBCOEFcXHUwQjhFLVxcdTBCOTBcXHUwQjkyLVxcdTBCOTVcXHUwQjk5XFx1MEI5QVxcdTBCOUNcXHUwQjlFXFx1MEI5RlxcdTBCQTNcXHUwQkE0XFx1MEJBOC1cXHUwQkFBXFx1MEJBRS1cXHUwQkI5XFx1MEJEMFxcdTBDMDUtXFx1MEMwQ1xcdTBDMEUtXFx1MEMxMFxcdTBDMTItXFx1MEMyOFxcdTBDMkEtXFx1MEMzM1xcdTBDMzUtXFx1MEMzOVxcdTBDM0RcXHUwQzU4XFx1MEM1OVxcdTBDNjBcXHUwQzYxXFx1MEM4NS1cXHUwQzhDXFx1MEM4RS1cXHUwQzkwXFx1MEM5Mi1cXHUwQ0E4XFx1MENBQS1cXHUwQ0IzXFx1MENCNS1cXHUwQ0I5XFx1MENCRFxcdTBDREVcXHUwQ0UwXFx1MENFMVxcdTBDRjFcXHUwQ0YyXFx1MEQwNS1cXHUwRDBDXFx1MEQwRS1cXHUwRDEwXFx1MEQxMi1cXHUwRDNBXFx1MEQzRFxcdTBENEVcXHUwRDYwXFx1MEQ2MVxcdTBEN0EtXFx1MEQ3RlxcdTBEODUtXFx1MEQ5NlxcdTBEOUEtXFx1MERCMVxcdTBEQjMtXFx1MERCQlxcdTBEQkRcXHUwREMwLVxcdTBEQzZcXHUwRTAxLVxcdTBFMzBcXHUwRTMyXFx1MEUzM1xcdTBFNDAtXFx1MEU0NlxcdTBFODFcXHUwRTgyXFx1MEU4NFxcdTBFODdcXHUwRTg4XFx1MEU4QVxcdTBFOERcXHUwRTk0LVxcdTBFOTdcXHUwRTk5LVxcdTBFOUZcXHUwRUExLVxcdTBFQTNcXHUwRUE1XFx1MEVBN1xcdTBFQUFcXHUwRUFCXFx1MEVBRC1cXHUwRUIwXFx1MEVCMlxcdTBFQjNcXHUwRUJEXFx1MEVDMC1cXHUwRUM0XFx1MEVDNlxcdTBFREMtXFx1MEVERlxcdTBGMDBcXHUwRjQwLVxcdTBGNDdcXHUwRjQ5LVxcdTBGNkNcXHUwRjg4LVxcdTBGOENcXHUxMDAwLVxcdTEwMkFcXHUxMDNGXFx1MTA1MC1cXHUxMDU1XFx1MTA1QS1cXHUxMDVEXFx1MTA2MVxcdTEwNjVcXHUxMDY2XFx1MTA2RS1cXHUxMDcwXFx1MTA3NS1cXHUxMDgxXFx1MTA4RVxcdTEwQTAtXFx1MTBDNVxcdTEwQzdcXHUxMENEXFx1MTBEMC1cXHUxMEZBXFx1MTBGQy1cXHUxMjQ4XFx1MTI0QS1cXHUxMjREXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNUEtXFx1MTI1RFxcdTEyNjAtXFx1MTI4OFxcdTEyOEEtXFx1MTI4RFxcdTEyOTAtXFx1MTJCMFxcdTEyQjItXFx1MTJCNVxcdTEyQjgtXFx1MTJCRVxcdTEyQzBcXHUxMkMyLVxcdTEyQzVcXHUxMkM4LVxcdTEyRDZcXHUxMkQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNUFcXHUxMzgwLVxcdTEzOEZcXHUxM0EwLVxcdTEzRjRcXHUxNDAxLVxcdTE2NkNcXHUxNjZGLVxcdTE2N0ZcXHUxNjgxLVxcdTE2OUFcXHUxNkEwLVxcdTE2RUFcXHUxNzAwLVxcdTE3MENcXHUxNzBFLVxcdTE3MTFcXHUxNzIwLVxcdTE3MzFcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NkNcXHUxNzZFLVxcdTE3NzBcXHUxNzgwLVxcdTE3QjNcXHUxN0Q3XFx1MTdEQ1xcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MThBOFxcdTE4QUFcXHUxOEIwLVxcdTE4RjVcXHUxOTAwLVxcdTE5MUNcXHUxOTUwLVxcdTE5NkRcXHUxOTcwLVxcdTE5NzRcXHUxOTgwLVxcdTE5QUJcXHUxOUMxLVxcdTE5QzdcXHUxQTAwLVxcdTFBMTZcXHUxQTIwLVxcdTFBNTRcXHUxQUE3XFx1MUIwNS1cXHUxQjMzXFx1MUI0NS1cXHUxQjRCXFx1MUI4My1cXHUxQkEwXFx1MUJBRVxcdTFCQUZcXHUxQkJBLVxcdTFCRTVcXHUxQzAwLVxcdTFDMjNcXHUxQzRELVxcdTFDNEZcXHUxQzVBLVxcdTFDN0RcXHUxQ0U5LVxcdTFDRUNcXHUxQ0VFLVxcdTFDRjFcXHUxQ0Y1XFx1MUNGNlxcdTFEMDAtXFx1MURCRlxcdTFFMDAtXFx1MUYxNVxcdTFGMTgtXFx1MUYxRFxcdTFGMjAtXFx1MUY0NVxcdTFGNDgtXFx1MUY0RFxcdTFGNTAtXFx1MUY1N1xcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUYtXFx1MUY3RFxcdTFGODAtXFx1MUZCNFxcdTFGQjYtXFx1MUZCQ1xcdTFGQkVcXHUxRkMyLVxcdTFGQzRcXHUxRkM2LVxcdTFGQ0NcXHUxRkQwLVxcdTFGRDNcXHUxRkQ2LVxcdTFGREJcXHUxRkUwLVxcdTFGRUNcXHUxRkYyLVxcdTFGRjRcXHUxRkY2LVxcdTFGRkNcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5Q1xcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTktXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEyRFxcdTIxMkYtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNEVcXHUyMTgzXFx1MjE4NFxcdTJDMDAtXFx1MkMyRVxcdTJDMzAtXFx1MkM1RVxcdTJDNjAtXFx1MkNFNFxcdTJDRUItXFx1MkNFRVxcdTJDRjJcXHUyQ0YzXFx1MkQwMC1cXHUyRDI1XFx1MkQyN1xcdTJEMkRcXHUyRDMwLVxcdTJENjdcXHUyRDZGXFx1MkQ4MC1cXHUyRDk2XFx1MkRBMC1cXHUyREE2XFx1MkRBOC1cXHUyREFFXFx1MkRCMC1cXHUyREI2XFx1MkRCOC1cXHUyREJFXFx1MkRDMC1cXHUyREM2XFx1MkRDOC1cXHUyRENFXFx1MkREMC1cXHUyREQ2XFx1MkREOC1cXHUyRERFXFx1MkUyRlxcdTMwMDVcXHUzMDA2XFx1MzAzMS1cXHUzMDM1XFx1MzAzQlxcdTMwM0NcXHUzMDQxLVxcdTMwOTZcXHUzMDlELVxcdTMwOUZcXHUzMEExLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMTA1LVxcdTMxMkRcXHUzMTMxLVxcdTMxOEVcXHUzMUEwLVxcdTMxQkFcXHUzMUYwLVxcdTMxRkZcXHUzNDAwLVxcdTREQjVcXHU0RTAwLVxcdTlGQ0NcXHVBMDAwLVxcdUE0OENcXHVBNEQwLVxcdUE0RkRcXHVBNTAwLVxcdUE2MENcXHVBNjEwLVxcdUE2MUZcXHVBNjJBXFx1QTYyQlxcdUE2NDAtXFx1QTY2RVxcdUE2N0YtXFx1QTY5N1xcdUE2QTAtXFx1QTZFNVxcdUE3MTctXFx1QTcxRlxcdUE3MjItXFx1QTc4OFxcdUE3OEItXFx1QTc4RVxcdUE3OTAtXFx1QTc5M1xcdUE3QTAtXFx1QTdBQVxcdUE3RjgtXFx1QTgwMVxcdUE4MDMtXFx1QTgwNVxcdUE4MDctXFx1QTgwQVxcdUE4MEMtXFx1QTgyMlxcdUE4NDAtXFx1QTg3M1xcdUE4ODItXFx1QThCM1xcdUE4RjItXFx1QThGN1xcdUE4RkJcXHVBOTBBLVxcdUE5MjVcXHVBOTMwLVxcdUE5NDZcXHVBOTYwLVxcdUE5N0NcXHVBOTg0LVxcdUE5QjJcXHVBOUNGXFx1QUEwMC1cXHVBQTI4XFx1QUE0MC1cXHVBQTQyXFx1QUE0NC1cXHVBQTRCXFx1QUE2MC1cXHVBQTc2XFx1QUE3QVxcdUFBODAtXFx1QUFBRlxcdUFBQjFcXHVBQUI1XFx1QUFCNlxcdUFBQjktXFx1QUFCRFxcdUFBQzBcXHVBQUMyXFx1QUFEQi1cXHVBQUREXFx1QUFFMC1cXHVBQUVBXFx1QUFGMi1cXHVBQUY0XFx1QUIwMS1cXHVBQjA2XFx1QUIwOS1cXHVBQjBFXFx1QUIxMS1cXHVBQjE2XFx1QUIyMC1cXHVBQjI2XFx1QUIyOC1cXHVBQjJFXFx1QUJDMC1cXHVBQkUyXFx1QUMwMC1cXHVEN0EzXFx1RDdCMC1cXHVEN0M2XFx1RDdDQi1cXHVEN0ZCXFx1RjkwMC1cXHVGQTZEXFx1RkE3MC1cXHVGQUQ5XFx1RkIwMC1cXHVGQjA2XFx1RkIxMy1cXHVGQjE3XFx1RkIxRFxcdUZCMUYtXFx1RkIyOFxcdUZCMkEtXFx1RkIzNlxcdUZCMzgtXFx1RkIzQ1xcdUZCM0VcXHVGQjQwXFx1RkI0MVxcdUZCNDNcXHVGQjQ0XFx1RkI0Ni1cXHVGQkIxXFx1RkJEMy1cXHVGRDNEXFx1RkQ1MC1cXHVGRDhGXFx1RkQ5Mi1cXHVGREM3XFx1RkRGMC1cXHVGREZCXFx1RkU3MC1cXHVGRTc0XFx1RkU3Ni1cXHVGRUZDXFx1RkYyMS1cXHVGRjNBXFx1RkY0MS1cXHVGRjVBXFx1RkY2Ni1cXHVGRkJFXFx1RkZDMi1cXHVGRkM3XFx1RkZDQS1cXHVGRkNGXFx1RkZEMi1cXHVGRkQ3XFx1RkZEQS1cXHVGRkRDXS8sXG4gIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyMDc1MDcwXG4gICcqJzogLy4vXG59O1xuXG5leHBvcnQgeyBQYXR0ZXJuSW5wdXREZWZpbml0aW9uIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBjcmVhdGVNYXNrIGZyb20gJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcblxuLyoqIE1hc2sgcGlwZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIHR5cGVzICovXG5jb25zdCBQSVBFX1RZUEUgPSB7XG4gIE1BU0tFRDogJ3ZhbHVlJyxcbiAgVU5NQVNLRUQ6ICd1bm1hc2tlZFZhbHVlJyxcbiAgVFlQRUQ6ICd0eXBlZFZhbHVlJ1xufTtcbi8qKiBDcmVhdGVzIG5ldyBwaXBlIGZ1bmN0aW9uIGRlcGVuZGluZyBvbiBtYXNrIHR5cGUsIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gb3B0aW9ucyAqL1xuZnVuY3Rpb24gY3JlYXRlUGlwZShhcmcsIGZyb20sIHRvKSB7XG4gIGlmIChmcm9tID09PSB2b2lkIDApIHtcbiAgICBmcm9tID0gUElQRV9UWVBFLk1BU0tFRDtcbiAgfVxuICBpZiAodG8gPT09IHZvaWQgMCkge1xuICAgIHRvID0gUElQRV9UWVBFLk1BU0tFRDtcbiAgfVxuICBjb25zdCBtYXNrZWQgPSBjcmVhdGVNYXNrKGFyZyk7XG4gIHJldHVybiB2YWx1ZSA9PiBtYXNrZWQucnVuSXNvbGF0ZWQobSA9PiB7XG4gICAgbVtmcm9tXSA9IHZhbHVlO1xuICAgIHJldHVybiBtW3RvXTtcbiAgfSk7XG59XG5cbi8qKiBQaXBlcyB2YWx1ZSB0aHJvdWdoIG1hc2sgZGVwZW5kaW5nIG9uIG1hc2sgdHlwZSwgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBvcHRpb25zICovXG5mdW5jdGlvbiBwaXBlKHZhbHVlLCBtYXNrLCBmcm9tLCB0bykge1xuICByZXR1cm4gY3JlYXRlUGlwZShtYXNrLCBmcm9tLCB0bykodmFsdWUpO1xufVxuSU1hc2suUElQRV9UWVBFID0gUElQRV9UWVBFO1xuSU1hc2suY3JlYXRlUGlwZSA9IGNyZWF0ZVBpcGU7XG5JTWFzay5waXBlID0gcGlwZTtcblxuZXhwb3J0IHsgUElQRV9UWVBFLCBjcmVhdGVQaXBlLCBwaXBlIH07XG4iLCJpbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgTWFza2VkUGF0dGVybiBmcm9tICcuL3BhdHRlcm4uanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi9iYXNlLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY3Vyc29yLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcmVnZXhwLmpzJztcblxuLyoqIFBhdHRlcm4gd2hpY2ggYWNjZXB0cyByYW5nZXMgKi9cbmNsYXNzIE1hc2tlZFJhbmdlIGV4dGVuZHMgTWFza2VkUGF0dGVybiB7XG4gIC8qKlxuICAgIE9wdGlvbmFsbHkgc2V0cyBtYXggbGVuZ3RoIG9mIHBhdHRlcm4uXG4gICAgVXNlZCB3aGVuIHBhdHRlcm4gbGVuZ3RoIGlzIGxvbmdlciB0aGVuIGB0b2AgcGFyYW0gbGVuZ3RoLiBQYWRzIHplcm9zIGF0IHN0YXJ0IGluIHRoaXMgY2FzZS5cbiAgKi9cblxuICAvKiogTWluIGJvdW5kICovXG5cbiAgLyoqIE1heCBib3VuZCAqL1xuXG4gIGdldCBfbWF0Y2hGcm9tKCkge1xuICAgIHJldHVybiB0aGlzLm1heExlbmd0aCAtIFN0cmluZyh0aGlzLmZyb20pLmxlbmd0aDtcbiAgfVxuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7IC8vIG1hc2sgd2lsbCBiZSBjcmVhdGVkIGluIF91cGRhdGVcbiAgfVxuICB1cGRhdGVPcHRpb25zKG9wdHMpIHtcbiAgICBzdXBlci51cGRhdGVPcHRpb25zKG9wdHMpO1xuICB9XG4gIF91cGRhdGUob3B0cykge1xuICAgIGNvbnN0IHtcbiAgICAgIHRvID0gdGhpcy50byB8fCAwLFxuICAgICAgZnJvbSA9IHRoaXMuZnJvbSB8fCAwLFxuICAgICAgbWF4TGVuZ3RoID0gdGhpcy5tYXhMZW5ndGggfHwgMCxcbiAgICAgIGF1dG9maXggPSB0aGlzLmF1dG9maXgsXG4gICAgICAuLi5wYXR0ZXJuT3B0c1xuICAgIH0gPSBvcHRzO1xuICAgIHRoaXMudG8gPSB0bztcbiAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgIHRoaXMubWF4TGVuZ3RoID0gTWF0aC5tYXgoU3RyaW5nKHRvKS5sZW5ndGgsIG1heExlbmd0aCk7XG4gICAgdGhpcy5hdXRvZml4ID0gYXV0b2ZpeDtcbiAgICBjb25zdCBmcm9tU3RyID0gU3RyaW5nKHRoaXMuZnJvbSkucGFkU3RhcnQodGhpcy5tYXhMZW5ndGgsICcwJyk7XG4gICAgY29uc3QgdG9TdHIgPSBTdHJpbmcodGhpcy50bykucGFkU3RhcnQodGhpcy5tYXhMZW5ndGgsICcwJyk7XG4gICAgbGV0IHNhbWVDaGFyc0NvdW50ID0gMDtcbiAgICB3aGlsZSAoc2FtZUNoYXJzQ291bnQgPCB0b1N0ci5sZW5ndGggJiYgdG9TdHJbc2FtZUNoYXJzQ291bnRdID09PSBmcm9tU3RyW3NhbWVDaGFyc0NvdW50XSkgKytzYW1lQ2hhcnNDb3VudDtcbiAgICBwYXR0ZXJuT3B0cy5tYXNrID0gdG9TdHIuc2xpY2UoMCwgc2FtZUNoYXJzQ291bnQpLnJlcGxhY2UoLzAvZywgJ1xcXFwwJykgKyAnMCcucmVwZWF0KHRoaXMubWF4TGVuZ3RoIC0gc2FtZUNoYXJzQ291bnQpO1xuICAgIHN1cGVyLl91cGRhdGUocGF0dGVybk9wdHMpO1xuICB9XG4gIGdldCBpc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiBzdXBlci5pc0NvbXBsZXRlICYmIEJvb2xlYW4odGhpcy52YWx1ZSk7XG4gIH1cbiAgYm91bmRhcmllcyhzdHIpIHtcbiAgICBsZXQgbWluc3RyID0gJyc7XG4gICAgbGV0IG1heHN0ciA9ICcnO1xuICAgIGNvbnN0IFssIHBsYWNlaG9sZGVyLCBudW1dID0gc3RyLm1hdGNoKC9eKFxcRCopKFxcZCopKFxcRCopLykgfHwgW107XG4gICAgaWYgKG51bSkge1xuICAgICAgbWluc3RyID0gJzAnLnJlcGVhdChwbGFjZWhvbGRlci5sZW5ndGgpICsgbnVtO1xuICAgICAgbWF4c3RyID0gJzknLnJlcGVhdChwbGFjZWhvbGRlci5sZW5ndGgpICsgbnVtO1xuICAgIH1cbiAgICBtaW5zdHIgPSBtaW5zdHIucGFkRW5kKHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgIG1heHN0ciA9IG1heHN0ci5wYWRFbmQodGhpcy5tYXhMZW5ndGgsICc5Jyk7XG4gICAgcmV0dXJuIFttaW5zdHIsIG1heHN0cl07XG4gIH1cbiAgZG9QcmVwYXJlQ2hhcihjaCwgZmxhZ3MpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgbGV0IGRldGFpbHM7XG4gICAgW2NoLCBkZXRhaWxzXSA9IHN1cGVyLmRvUHJlcGFyZUNoYXIoY2gucmVwbGFjZSgvXFxEL2csICcnKSwgZmxhZ3MpO1xuICAgIGlmICghY2gpIGRldGFpbHMuc2tpcCA9ICF0aGlzLmlzQ29tcGxldGU7XG4gICAgcmV0dXJuIFtjaCwgZGV0YWlsc107XG4gIH1cbiAgX2FwcGVuZENoYXJSYXcoY2gsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGlmICghdGhpcy5hdXRvZml4IHx8IHRoaXMudmFsdWUubGVuZ3RoICsgMSA+IHRoaXMubWF4TGVuZ3RoKSByZXR1cm4gc3VwZXIuX2FwcGVuZENoYXJSYXcoY2gsIGZsYWdzKTtcbiAgICBjb25zdCBmcm9tU3RyID0gU3RyaW5nKHRoaXMuZnJvbSkucGFkU3RhcnQodGhpcy5tYXhMZW5ndGgsICcwJyk7XG4gICAgY29uc3QgdG9TdHIgPSBTdHJpbmcodGhpcy50bykucGFkU3RhcnQodGhpcy5tYXhMZW5ndGgsICcwJyk7XG4gICAgY29uc3QgW21pbnN0ciwgbWF4c3RyXSA9IHRoaXMuYm91bmRhcmllcyh0aGlzLnZhbHVlICsgY2gpO1xuICAgIGlmIChOdW1iZXIobWF4c3RyKSA8IHRoaXMuZnJvbSkgcmV0dXJuIHN1cGVyLl9hcHBlbmRDaGFyUmF3KGZyb21TdHJbdGhpcy52YWx1ZS5sZW5ndGhdLCBmbGFncyk7XG4gICAgaWYgKE51bWJlcihtaW5zdHIpID4gdGhpcy50bykge1xuICAgICAgaWYgKCFmbGFncy50YWlsICYmIHRoaXMuYXV0b2ZpeCA9PT0gJ3BhZCcgJiYgdGhpcy52YWx1ZS5sZW5ndGggKyAxIDwgdGhpcy5tYXhMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLl9hcHBlbmRDaGFyUmF3KGZyb21TdHJbdGhpcy52YWx1ZS5sZW5ndGhdLCBmbGFncykuYWdncmVnYXRlKHRoaXMuX2FwcGVuZENoYXJSYXcoY2gsIGZsYWdzKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3VwZXIuX2FwcGVuZENoYXJSYXcodG9TdHJbdGhpcy52YWx1ZS5sZW5ndGhdLCBmbGFncyk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5fYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpO1xuICB9XG4gIGRvVmFsaWRhdGUoZmxhZ3MpIHtcbiAgICBjb25zdCBzdHIgPSB0aGlzLnZhbHVlO1xuICAgIGNvbnN0IGZpcnN0Tm9uWmVybyA9IHN0ci5zZWFyY2goL1teMF0vKTtcbiAgICBpZiAoZmlyc3ROb25aZXJvID09PSAtMSAmJiBzdHIubGVuZ3RoIDw9IHRoaXMuX21hdGNoRnJvbSkgcmV0dXJuIHRydWU7XG4gICAgY29uc3QgW21pbnN0ciwgbWF4c3RyXSA9IHRoaXMuYm91bmRhcmllcyhzdHIpO1xuICAgIHJldHVybiB0aGlzLmZyb20gPD0gTnVtYmVyKG1heHN0cikgJiYgTnVtYmVyKG1pbnN0cikgPD0gdGhpcy50byAmJiBzdXBlci5kb1ZhbGlkYXRlKGZsYWdzKTtcbiAgfVxuICBwYWQoZmxhZ3MpIHtcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPT09IHRoaXMubWF4TGVuZ3RoKSByZXR1cm4gZGV0YWlscztcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgY29uc3QgcGFkTGVuZ3RoID0gdGhpcy5tYXhMZW5ndGggLSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICBpZiAocGFkTGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZExlbmd0aDsgKytpKSB7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHN1cGVyLl9hcHBlbmRDaGFyUmF3KCcwJywgZmxhZ3MpKTtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwZW5kIHRhaWxcbiAgICAgIHZhbHVlLnNwbGl0KCcnKS5mb3JFYWNoKGNoID0+IHRoaXMuX2FwcGVuZENoYXJSYXcoY2gpKTtcbiAgICB9XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbn1cbklNYXNrLk1hc2tlZFJhbmdlID0gTWFza2VkUmFuZ2U7XG5cbmV4cG9ydCB7IE1hc2tlZFJhbmdlIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBNYXNrZWQgZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5cbi8qKiBNYXNraW5nIGJ5IFJlZ0V4cCAqL1xuY2xhc3MgTWFza2VkUmVnRXhwIGV4dGVuZHMgTWFza2VkIHtcbiAgLyoqICovXG5cbiAgLyoqIEVuYWJsZSBjaGFyYWN0ZXJzIG92ZXJ3cml0aW5nICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgc3VwZXIudXBkYXRlT3B0aW9ucyhvcHRzKTtcbiAgfVxuICBfdXBkYXRlKG9wdHMpIHtcbiAgICBjb25zdCBtYXNrID0gb3B0cy5tYXNrO1xuICAgIGlmIChtYXNrKSBvcHRzLnZhbGlkYXRlID0gdmFsdWUgPT4gdmFsdWUuc2VhcmNoKG1hc2spID49IDA7XG4gICAgc3VwZXIuX3VwZGF0ZShvcHRzKTtcbiAgfVxufVxuSU1hc2suTWFza2VkUmVnRXhwID0gTWFza2VkUmVnRXhwO1xuXG5leHBvcnQgeyBNYXNrZWRSZWdFeHAgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0IGNyZWF0ZU1hc2ssIHsgbm9ybWFsaXplT3B0cyB9IGZyb20gJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgTWFza2VkUGF0dGVybiBmcm9tICcuL3BhdHRlcm4uanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi9iYXNlLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY3Vyc29yLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcmVnZXhwLmpzJztcblxuLyoqIFBhdHRlcm4gbWFzayAqL1xuY2xhc3MgUmVwZWF0QmxvY2sgZXh0ZW5kcyBNYXNrZWRQYXR0ZXJuIHtcbiAgZ2V0IHJlcGVhdEZyb20oKSB7XG4gICAgdmFyIF9yZWY7XG4gICAgcmV0dXJuIChfcmVmID0gQXJyYXkuaXNBcnJheSh0aGlzLnJlcGVhdCkgPyB0aGlzLnJlcGVhdFswXSA6IHRoaXMucmVwZWF0ID09PSBJbmZpbml0eSA/IDAgOiB0aGlzLnJlcGVhdCkgIT0gbnVsbCA/IF9yZWYgOiAwO1xuICB9XG4gIGdldCByZXBlYXRUbygpIHtcbiAgICB2YXIgX3JlZjI7XG4gICAgcmV0dXJuIChfcmVmMiA9IEFycmF5LmlzQXJyYXkodGhpcy5yZXBlYXQpID8gdGhpcy5yZXBlYXRbMV0gOiB0aGlzLnJlcGVhdCkgIT0gbnVsbCA/IF9yZWYyIDogSW5maW5pdHk7XG4gIH1cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuICB9XG4gIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgIHN1cGVyLnVwZGF0ZU9wdGlvbnMob3B0cyk7XG4gIH1cbiAgX3VwZGF0ZShvcHRzKSB7XG4gICAgdmFyIF9yZWYzLCBfcmVmNCwgX3RoaXMkX2Jsb2NrcztcbiAgICBjb25zdCB7XG4gICAgICByZXBlYXQsXG4gICAgICAuLi5ibG9ja09wdHNcbiAgICB9ID0gbm9ybWFsaXplT3B0cyhvcHRzKTsgLy8gVE9ETyB0eXBlXG4gICAgdGhpcy5fYmxvY2tPcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fYmxvY2tPcHRzLCBibG9ja09wdHMpO1xuICAgIGNvbnN0IGJsb2NrID0gY3JlYXRlTWFzayh0aGlzLl9ibG9ja09wdHMpO1xuICAgIHRoaXMucmVwZWF0ID0gKF9yZWYzID0gKF9yZWY0ID0gcmVwZWF0ICE9IG51bGwgPyByZXBlYXQgOiBibG9jay5yZXBlYXQpICE9IG51bGwgPyBfcmVmNCA6IHRoaXMucmVwZWF0KSAhPSBudWxsID8gX3JlZjMgOiBJbmZpbml0eTsgLy8gVE9ETyB0eXBlXG5cbiAgICBzdXBlci5fdXBkYXRlKHtcbiAgICAgIG1hc2s6ICdtJy5yZXBlYXQoTWF0aC5tYXgodGhpcy5yZXBlYXRUbyA9PT0gSW5maW5pdHkgJiYgKChfdGhpcyRfYmxvY2tzID0gdGhpcy5fYmxvY2tzKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkX2Jsb2Nrcy5sZW5ndGgpIHx8IDAsIHRoaXMucmVwZWF0RnJvbSkpLFxuICAgICAgYmxvY2tzOiB7XG4gICAgICAgIG06IGJsb2NrXG4gICAgICB9LFxuICAgICAgZWFnZXI6IGJsb2NrLmVhZ2VyLFxuICAgICAgb3ZlcndyaXRlOiBibG9jay5vdmVyd3JpdGUsXG4gICAgICBza2lwSW52YWxpZDogYmxvY2suc2tpcEludmFsaWQsXG4gICAgICBsYXp5OiBibG9jay5sYXp5LFxuICAgICAgcGxhY2Vob2xkZXJDaGFyOiBibG9jay5wbGFjZWhvbGRlckNoYXIsXG4gICAgICBkaXNwbGF5Q2hhcjogYmxvY2suZGlzcGxheUNoYXJcbiAgICB9KTtcbiAgfVxuICBfYWxsb2NhdGVCbG9jayhiaSkge1xuICAgIGlmIChiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGgpIHJldHVybiB0aGlzLl9ibG9ja3NbYmldO1xuICAgIGlmICh0aGlzLnJlcGVhdFRvID09PSBJbmZpbml0eSB8fCB0aGlzLl9ibG9ja3MubGVuZ3RoIDwgdGhpcy5yZXBlYXRUbykge1xuICAgICAgdGhpcy5fYmxvY2tzLnB1c2goY3JlYXRlTWFzayh0aGlzLl9ibG9ja09wdHMpKTtcbiAgICAgIHRoaXMubWFzayArPSAnbSc7XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzW3RoaXMuX2Jsb2Nrcy5sZW5ndGggLSAxXTtcbiAgICB9XG4gIH1cbiAgX2FwcGVuZENoYXJSYXcoY2gsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIGZvciAobGV0IGJpID0gKF90aGlzJF9tYXBQb3NUb0Jsb2NrJCA9IChfdGhpcyRfbWFwUG9zVG9CbG9jayA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJF9tYXBQb3NUb0Jsb2NrLmluZGV4KSAhPSBudWxsID8gX3RoaXMkX21hcFBvc1RvQmxvY2skIDogTWF0aC5tYXgodGhpcy5fYmxvY2tzLmxlbmd0aCAtIDEsIDApLCBibG9jaywgYWxsb2NhdGVkO1xuICAgIC8vIHRyeSB0byBnZXQgYSBibG9jayBvclxuICAgIC8vIHRyeSB0byBhbGxvY2F0ZSBhIG5ldyBibG9jayBpZiBub3QgYWxsb2NhdGVkIGFscmVhZHlcbiAgICBibG9jayA9IChfdGhpcyRfYmxvY2tzJGJpID0gdGhpcy5fYmxvY2tzW2JpXSkgIT0gbnVsbCA/IF90aGlzJF9ibG9ja3MkYmkgOiBhbGxvY2F0ZWQgPSAhYWxsb2NhdGVkICYmIHRoaXMuX2FsbG9jYXRlQmxvY2soYmkpOyArK2JpKSB7XG4gICAgICB2YXIgX3RoaXMkX21hcFBvc1RvQmxvY2skLCBfdGhpcyRfbWFwUG9zVG9CbG9jaywgX3RoaXMkX2Jsb2NrcyRiaSwgX2ZsYWdzJF9iZWZvcmVUYWlsU3RhO1xuICAgICAgY29uc3QgYmxvY2tEZXRhaWxzID0gYmxvY2suX2FwcGVuZENoYXIoY2gsIHtcbiAgICAgICAgLi4uZmxhZ3MsXG4gICAgICAgIF9iZWZvcmVUYWlsU3RhdGU6IChfZmxhZ3MkX2JlZm9yZVRhaWxTdGEgPSBmbGFncy5fYmVmb3JlVGFpbFN0YXRlKSA9PSBudWxsIHx8IChfZmxhZ3MkX2JlZm9yZVRhaWxTdGEgPSBfZmxhZ3MkX2JlZm9yZVRhaWxTdGEuX2Jsb2NrcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9mbGFncyRfYmVmb3JlVGFpbFN0YVtiaV1cbiAgICAgIH0pO1xuICAgICAgaWYgKGJsb2NrRGV0YWlscy5za2lwICYmIGFsbG9jYXRlZCkge1xuICAgICAgICAvLyByZW1vdmUgdGhlIGxhc3QgYWxsb2NhdGVkIGJsb2NrIGFuZCBicmVha1xuICAgICAgICB0aGlzLl9ibG9ja3MucG9wKCk7XG4gICAgICAgIHRoaXMubWFzayA9IHRoaXMubWFzay5zbGljZSgxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShibG9ja0RldGFpbHMpO1xuICAgICAgaWYgKGJsb2NrRGV0YWlscy5jb25zdW1lZCkgYnJlYWs7IC8vIGdvIG5leHQgY2hhclxuICAgIH1cbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuICBfdHJpbUVtcHR5VGFpbChmcm9tUG9zLCB0b1Bvcykge1xuICAgIHZhciBfdGhpcyRfbWFwUG9zVG9CbG9jazIsIF90aGlzJF9tYXBQb3NUb0Jsb2NrMztcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgY29uc3QgZmlyc3RCbG9ja0luZGV4ID0gTWF0aC5tYXgoKChfdGhpcyRfbWFwUG9zVG9CbG9jazIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKGZyb21Qb3MpKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkX21hcFBvc1RvQmxvY2syLmluZGV4KSB8fCAwLCB0aGlzLnJlcGVhdEZyb20sIDApO1xuICAgIGxldCBsYXN0QmxvY2tJbmRleDtcbiAgICBpZiAodG9Qb3MgIT0gbnVsbCkgbGFzdEJsb2NrSW5kZXggPSAoX3RoaXMkX21hcFBvc1RvQmxvY2szID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0b1BvcykpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRfbWFwUG9zVG9CbG9jazMuaW5kZXg7XG4gICAgaWYgKGxhc3RCbG9ja0luZGV4ID09IG51bGwpIGxhc3RCbG9ja0luZGV4ID0gdGhpcy5fYmxvY2tzLmxlbmd0aCAtIDE7XG4gICAgbGV0IHJlbW92ZUNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBibG9ja0luZGV4ID0gbGFzdEJsb2NrSW5kZXg7IGZpcnN0QmxvY2tJbmRleCA8PSBibG9ja0luZGV4OyAtLWJsb2NrSW5kZXgsICsrcmVtb3ZlQ291bnQpIHtcbiAgICAgIGlmICh0aGlzLl9ibG9ja3NbYmxvY2tJbmRleF0udW5tYXNrZWRWYWx1ZSkgYnJlYWs7XG4gICAgfVxuICAgIGlmIChyZW1vdmVDb3VudCkge1xuICAgICAgdGhpcy5fYmxvY2tzLnNwbGljZShsYXN0QmxvY2tJbmRleCAtIHJlbW92ZUNvdW50ICsgMSwgcmVtb3ZlQ291bnQpO1xuICAgICAgdGhpcy5tYXNrID0gdGhpcy5tYXNrLnNsaWNlKHJlbW92ZUNvdW50KTtcbiAgICB9XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgc3VwZXIucmVzZXQoKTtcbiAgICB0aGlzLl90cmltRW1wdHlUYWlsKCk7XG4gIH1cbiAgcmVtb3ZlKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlRGV0YWlscyA9IHN1cGVyLnJlbW92ZShmcm9tUG9zLCB0b1Bvcyk7XG4gICAgdGhpcy5fdHJpbUVtcHR5VGFpbChmcm9tUG9zLCB0b1Bvcyk7XG4gICAgcmV0dXJuIHJlbW92ZURldGFpbHM7XG4gIH1cbiAgdG90YWxJbnB1dFBvc2l0aW9ucyhmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT0gbnVsbCAmJiB0aGlzLnJlcGVhdFRvID09PSBJbmZpbml0eSkgcmV0dXJuIEluZmluaXR5O1xuICAgIHJldHVybiBzdXBlci50b3RhbElucHV0UG9zaXRpb25zKGZyb21Qb3MsIHRvUG9zKTtcbiAgfVxuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHN1cGVyLnN0YXRlO1xuICB9XG4gIHNldCBzdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuX2Jsb2Nrcy5sZW5ndGggPSBzdGF0ZS5fYmxvY2tzLmxlbmd0aDtcbiAgICB0aGlzLm1hc2sgPSB0aGlzLm1hc2suc2xpY2UoMCwgdGhpcy5fYmxvY2tzLmxlbmd0aCk7XG4gICAgc3VwZXIuc3RhdGUgPSBzdGF0ZTtcbiAgfVxufVxuSU1hc2suUmVwZWF0QmxvY2sgPSBSZXBlYXRCbG9jaztcblxuZXhwb3J0IHsgUmVwZWF0QmxvY2sgYXMgZGVmYXVsdCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG4gICAgZ2V0UHJveHlTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShpbml0aWFsU3RhdGUsIHtcbiAgICAgICAgICAgIGdldDogKHRhcmdldCwgcHJvcCkgPT4gdGFyZ2V0W3Byb3BdLFxuICAgICAgICAgICAgc2V0OiAodGFyZ2V0LCBwcm9wLCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVVSSgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC10L7QsdGF0L7QtNC40LzQviDRgNC10LDQu9C40LfQvtCy0LDRgtGMINC80LXRgtC+0LQgdXBkYXRlVUknKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgSUJhc2UgZnJvbSAnQC9jb21wb25lbnRzL0Jhc2UnO1xuaW1wb3J0IElNYXNrIGZyb20gJ2ltYXNrJztcbmltcG9ydCB7ICQgfSBmcm9tICdAL3V0aWxzL0pRdWVyeSc7XG5jbGFzcyBSZXF1aXJlZEZpZWxkcyBleHRlbmRzIElCYXNlIHtcbiAgICBmb3JtO1xuICAgIG5hbWU7XG4gICAgcGhvbmU7XG4gICAgZGF0ZTtcbiAgICBjYXI7XG4gICAgc2VsZWN0b3JzID0ge1xuICAgICAgICBmb3JtOiAnW2RhdGEtanMtZm9ybV0nLFxuICAgICAgICBpbnB1dE5hbWU6ICcjbmFtZScsXG4gICAgICAgIGlucHV0UGhvbmU6ICcjcGhvbmUnLFxuICAgICAgICBpbnB1dERhdGU6ICcjZGF0ZScsXG4gICAgICAgIGNhclNlbGVjdDogJyNzZWxlY3QnLFxuICAgICAgICBzdWJtaXRCdXR0b246ICdbZGF0YS1qcy1idXR0b25dJyxcbiAgICB9O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5mb3JtID0gJCh0aGlzLnNlbGVjdG9ycy5mb3JtKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJCh0aGlzLnNlbGVjdG9ycy5pbnB1dE5hbWUpO1xuICAgICAgICB0aGlzLnBob25lID0gJCh0aGlzLnNlbGVjdG9ycy5pbnB1dFBob25lKTtcbiAgICAgICAgdGhpcy5kYXRlID0gJCh0aGlzLnNlbGVjdG9ycy5pbnB1dERhdGUpO1xuICAgICAgICB0aGlzLmNhciA9ICQodGhpcy5zZWxlY3RvcnMuY2FyU2VsZWN0KTtcbiAgICAgICAgSU1hc2soZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob25lJyksIHtcbiAgICAgICAgICAgIG1hc2s6ICcrNyAoMDAwKSAwMDAtMDAtMDAnLFxuICAgICAgICAgICAgbGF6eTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmZvcm0ub24oJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5waG9uZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ9CX0LDRj9Cy0LrQsCDQvtGC0L/RgNCw0LLQu9C10L3QsCwg0LIg0LHQu9C40LbQsNC4zIbRiNC10LUg0LLRgNC10LzRjyDQvNGLINGBINCy0LDQvNC4INGB0LLRj9C20LXQvNGB0Y8sINGB0L/QsNGB0LjQsdC+IScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ9CX0LDQv9C+0LvQvdC40YLQtSDQstGB0LUg0L/QvtC70Y8hJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgICAgIGlmICghdGhpcy5uYW1lLnZhbCgpIHx8ICF0aGlzLnBob25lLnZhbCgpIHx8ICF0aGlzLmRhdGUudmFsKCkgfHwgIXRoaXMuY2FyLnZhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJvb2tpbmcgZXh0ZW5kcyBSZXF1aXJlZEZpZWxkcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2UgZnJvbSAnQC9jb21wb25lbnRzL0Jhc2UnO1xuaW1wb3J0IHsgJCB9IGZyb20gJ0AvdXRpbHMvSlF1ZXJ5Jztcbi8qKiDQmtC+0LzQv9C+0L3QtdC90YIg0LrQvdC+0L/QutC4INGBINGN0YTRhNC10LrRgtC+0Lwg0LLRgdC/0YvRiNC60LggKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEJhc2Uge1xuICAgIGJ1dHRvbnNFbGVtZW50cyA9IFtdO1xuICAgIHNlbGVjdG9ycyA9IHtcbiAgICAgICAgYnV0dG9uOiAnW2RhdGEtanMtYnV0dG9uXScsXG4gICAgfTtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHRoaXMge0J1dHRvbn1cbiAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgKiAgINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0LrQu9Cw0YHRgdCwLlxuICAgICAqICAg0JjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXRgiBwcm9wZXJ0aWVzLCDQuNGJ0LXRgiDQstGB0LUg0LrQvdC+0L/QutC4INC90LAg0YHRgtGA0LDQvdC40YbQtVxuICAgICAqICAg0YEg0LDRgtGA0LjQsdGD0YLQvtC8IGRhdGEtanMtYnV0dG9uLCDQuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdGCINC60L3QvtC/0LrQuCwg0LhcbiAgICAgKiAgINC/0YDQuNCy0Y/Qt9GL0LLQsNC10YIg0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8g0LrQu9C40LrQsC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3QgJGJ1dHRvbiA9ICQodGhpcy5zZWxlY3RvcnMuYnV0dG9uKTtcbiAgICAgICAgdGhpcy5idXR0b25zRWxlbWVudHMgPSAkYnV0dG9uLmZpbmRBbGwodGhpcy5zZWxlY3RvcnMuYnV0dG9uKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqINCe0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNGPINC60LvQuNC60LAg0L3QsCDQutC90L7Qv9C60YMuXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdGhpcyB7QnV0dG9ufVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0g0YHQvtCx0YvRgtC40LVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgLSDRhtC10LvQtdCy0L7QuSDRjdC10LvQtdC80LXQvdGCXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmJ1dHRvbnNFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbW91c2VFdmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yaXBwbGVFZmZlY3QobW91c2VFdmVudCwgdGFyZ2V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog0KHQvtC30LTQsNC10YIg0Y3RhNGE0LXQutGCINCy0YHQv9GL0YjQutC4IChyaXBwbGUpINC90LAg0LrQvdC+0L/QutC1XG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdGhpcyB7QnV0dG9ufVxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgLSDRgdC+0LHRi9GC0LjQtVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtINGG0LXQu9C10LLQvtC5INGN0LXQu9C10LzQtdC90YJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHJpcHBsZUVmZmVjdChldmVudCwgdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLm1heChyZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gc2l6ZSAvIDI7XG4gICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3AgLSBzaXplIC8gMjtcbiAgICAgICAgc3Bhbi5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6ICR7c2l6ZX1weDtcbiAgICAgIGhlaWdodDogJHtzaXplfXB4O1xuICAgICAgbGVmdDogJHt4fXB4O1xuICAgICAgdG9wOiAke3l9cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgYW5pbWF0aW9uOiByaXBwbGUgMC42cyBlYXNlLW91dCBmb3J3YXJkcztcbiAgICBgO1xuICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjogcmVsYXRpdmU7IG92ZXJmbG93OiBoaWRkZW47Jyk7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnJlbW92ZSgpO1xuICAgICAgICB9LCA2MDApO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlIGZyb20gJ0AvY29tcG9uZW50cy9CYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBCYXNlIHtcbiAgICBvYnNlcnZlcjtcbiAgICBvcHRpb25zID0ge1xuICAgICAgICB0aHJlc2hvbGQ6IDAuMSxcbiAgICAgICAgcm9vdE1hcmdpbjogJzBweCAwcHggLTUwcHggMHB4JyxcbiAgICB9O1xuICAgIHNlbGVjdG9ycyA9IHtcbiAgICAgICAgY2FyZDogJy5jYXItY2FyZCwgLmZlYXR1cmUnLFxuICAgIH07XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICAgKiDQnNC10YLQvtC0INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4LlxuICAgICAgICpcbiAgICAgICAqINCe0L0g0LLRi9C30YvQstCw0LXRgiDQtNCy0LAg0LzQtdGC0L7QtNCwOlxuICAgICAgICogMS4gYmluZEV2ZW50cyAtINC/0YDQuNCy0Y/Qt9GL0LLQsNC10YIg0LLRgdC1INGB0L7QsdGL0YLQuNGPINC6INC60L7QvNC/0L7QvdC10L3RgtCw0LwuXG4gICAgICAgKiAyLiBjcmVhdGVPYnNlcnZlciAtINGB0L7Qt9C00LDQtdGCINC90LDQsdC70Y7QtNCw0YLQtdC70Y8g0LfQsCDQv9C10YDQtdGB0LXRh9C10L3QuNGP0LzQuCwg0LrQvtGC0L7RgNGL0Lkg0L7RgtC+0LHRgNCw0LbQsNC10YIg0LrQsNGA0YLQvtGH0LrQuFxuICAgICAgICosINC60L7Qs9C00LAg0L7QvdC4INC/0L7Rj9Cy0LvRj9GO0YLRgdGPINCyINC+0LrQvdC1INC/0YDQvtGB0LzQvtGC0YDQsC5cbiAgICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZU9ic2VydmVyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgICog0JzQtdGC0L7QtCDRgdC+0LfQtNCw0LXRgiDQtNC70Y8g0LrQvtC80L/QvtC90LXQvdGC0L7QsiDQutCw0YDRgiBvYnNlcnZlci5cbiAgICAgICAqINCQ0L3QuNC80LDRhtC40Y8g0L7Qv9GA0LXQtNC10LvRj9C10YLRgdGPINCyIENTUyDQuCDQt9Cw0L/Rg9GB0LrQsNC10YLRgdGPLCDQutC+0LPQtNCwINC60L7QvNC/0L7QvdC10L3RgiDQv9C10YDQtdGB0LXQutCw0LXRgtGB0Y8g0YEg0L7QutC90L7QvCDQv9GA0L7RgdC80L7RgtGA0LAuXG4gICAgICAgKlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgIGNyZWF0ZU9ic2VydmVyKCkge1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1lbWVyc2lvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtZW1lcnNpb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgY29uc3QgYW5pbWF0ZWRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvcnMuY2FyZCk7XG4gICAgICAgIGFuaW1hdGVkRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXI/Lm9ic2VydmUoZWwpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlVUkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVSSB1cGRhdGVkIScpO1xuICAgIH1cbn1cbiIsIi8qKiDQmtC70LDRgdGBINC60L7QvNC/0L7QvdC10L3RgtCwIEhlYWRlckl0ZW0g0YDQtdCw0LvQuNC30YPQtdGCINC/0L7QstC10LTQtdC90LjQtSBIZWFkZXIg0L/RgNC4INGB0LrRgNC+0LvQu9C1ICovXG5jbGFzcyBIZWFkZXJTY3JvbGwge1xuICAgIGVsZW1lbnQ7XG4gICAgbGFzdFNjcm9sbFk7XG4gICAgZWxlbWVudENsYXNzTmFtZSA9IHtcbiAgICAgICAgaGVhZGVyU2Nyb2xsOiAnLmhlYWRlcicsXG4gICAgfTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmVsZW1lbnRDbGFzc05hbWUuaGVhZGVyU2Nyb2xsKTtcbiAgICAgICAgdGhpcy5sYXN0U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuYXR0YWNoU2Nyb2xsRWZmZWN0KCk7XG4gICAgfVxuICAgIGF0dGFjaFNjcm9sbEVmZmVjdCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFkgPiAxMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtY29sb3ItaGVhZGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtY29sb3ItaGVhZGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxhc3RTY3JvbGxZID0gY3VycmVudFNjcm9sbFk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8qKiDQmtC70LDRgdGBINC60L7QvNC/0L7QvdC10L3RgtCwIEhlYWRlckl0ZW0gKi9cbmNsYXNzIEhlYWRlckl0ZW0gZXh0ZW5kcyBIZWFkZXJTY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbi8qKiDQmtC+0LzQv9C+0L3QtdC90YIgSGVhZGVyICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBIZWFkZXJJdGVtIHtcbn1cbiIsImV4cG9ydCBjbGFzcyBKUXVlcnkge1xuICAgIHJvb3RFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCByb290RWxlbWVudCA9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9vdEVsZW1lbnQgPSBzZWxlY3RvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg0K3Qu9C10LzQtdC90YIgXCIke3NlbGVjdG9yfVwiINC90LUg0L3QsNC50LTQtdC9LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmQoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBKUXVlcnkoc2VsZWN0b3IsIHRoaXMucm9vdEVsZW1lbnQpO1xuICAgIH1cbiAgICBmaW5kQWxsKHNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKG5ldyBKUXVlcnkoZWxlbWVudCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg0K3Qu9C10LzQtdC90YLRiyBcIiR7c2VsZWN0b3J9XCIg0L3QtSDQvdCw0LnQtNC10L3Riy5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgfVxuICAgIG9uKGFjdGlvbiwgY2IpIHtcbiAgICAgICAgdGhpcy5yb290RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGFjdGlvbiwgY2IpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2xhc3NUb2dnbGUodG9rZW4sIGZvcmNlKSB7XG4gICAgICAgIGlmIChmb3JjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3RFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUodG9rZW4sIGZvcmNlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSh0b2tlbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjbGFzc0NvbnRhaW5zKGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgY2xhc3NBZGQoY2xhc3NOYW1lKSB7XG4gICAgICAgIHRoaXMucm9vdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2xhc3NSZW1vdmUoY2xhc3NOYW1lKSB7XG4gICAgICAgIHRoaXMucm9vdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYXR0cihxdWFsaWZpZWROYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnJvb3RFbGVtZW50LnNldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmb2N1cygpIHtcbiAgICAgICAgO1xuICAgICAgICB0aGlzLnJvb3RFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwbGF5KCkge1xuICAgICAgICBjb25zdCB2aWRlb0VsZW1lbnQgPSB0aGlzLnJvb3RFbGVtZW50O1xuICAgICAgICB2aWRlb0VsZW1lbnQucGxheSgpLnRoZW4oKTtcbiAgICAgICAgdmlkZW9FbGVtZW50LmNvbnRyb2xzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHBhdXNlKCkge1xuICAgICAgICBjb25zdCB2aWRlb0VsZW1lbnQgPSB0aGlzLnJvb3RFbGVtZW50O1xuICAgICAgICB2aWRlb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgdmlkZW9FbGVtZW50LmNvbnRyb2xzID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290RWxlbWVudDtcbiAgICB9XG4gICAgdmFsKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucm9vdEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdEVsZW1lbnQudmFsdWUgfHwgJyc7XG4gICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3RFbGVtZW50LnZhbHVlIHx8ICcnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LXQstC+0LfQvNC+0LbQvdC+INC40LfQstC70LXRh9GMINC30L3QsNGH0LXQvdC40LUg0LTQu9GPINC00LDQvdC90L7Qs9C+INGN0LvQtdC80LXQvdGC0LAuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5yb290RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgIGNhc2UgJ3RleHRhcmVhJzogLy8g0J/QvtC70LUg0LLQstC+0LTQsCDRgtC10LrRgdGC0LAg0LjQu9C4IHRleHRhcmVhXG4gICAgICAgICAgICAgICAgdGhpcy5yb290RWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2VsZWN0JzogLy8g0JLRi9C/0LDQtNCw0Y7RidC40Lkg0YHQv9C40YHQvtC6XG4gICAgICAgICAgICAgICAgdGhpcy5yb290RWxlbWVudC5zZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtdCy0L7Qt9C80L7QttC90L4g0L7Rh9C40YHRgtC40YLRjCDQtNCw0L3QvdC+0LUg0L/QvtC70LUuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0ICQgPSAoc2VsZWN0b3IpID0+IHtcbiAgICByZXR1cm4gbmV3IEpRdWVyeShzZWxlY3Rvcik7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vLi4vbW9kZXJuaXpyLmpzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvQ2FyZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgQm9va2luZyB9IGZyb20gJ0AvY29tcG9uZW50cy9Cb29raW5nJztcbm5ldyBCdXR0b24oKTtcbm5ldyBDYXJkKCk7XG5uZXcgSGVhZGVyKCk7XG5uZXcgQm9va2luZygpO1xuIl0sIm5hbWVzIjpbIkEiLCJlIiwiaSIsIm4iLCJvIiwiYSIsIl92ZXJzaW9uIiwiX2NvbmZpZyIsImNsYXNzUHJlZml4IiwiZW5hYmxlQ2xhc3NlcyIsImVuYWJsZUpTQ2xhc3MiLCJ1c2VQcmVmaXhlcyIsIl9xIiwib24iLCJzZXRUaW1lb3V0IiwiYWRkVGVzdCIsInB1c2giLCJuYW1lIiwiZm4iLCJvcHRpb25zIiwiYWRkQXN5bmNUZXN0IiwibCIsInQiLCJwcm90b3R5cGUiLCJzIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJyIiwiYyIsImYiLCJ1IiwiZyIsImQiLCJwIiwiaCIsImRvY3VtZW50RWxlbWVudCIsIm0iLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwidyIsInNwbGl0IiwibGVuZ3RoIiwiQm9vbGVhbiIsImpvaW4iLCJjbGFzc05hbWUiLCJiYXNlVmFsIiwiUmVnRXhwIiwicmVwbGFjZSIsIl90cmlnZ2VyIiwiX2wiLCJ1cmkiLCJzaGlmdCIsIkltYWdlIiwidHlwZSIsIndpZHRoIiwib25lcnJvciIsIm9ubG9hZCIsInNyYyIsImFsaWFzZXMiLCJCIiwiTW9kZXJuaXpyIiwid2luZG93IiwiZG9jdW1lbnQiXSwic291cmNlUm9vdCI6IiJ9