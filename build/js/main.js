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



/** Компонент бронирования */
class Booking extends _components_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
        carsContainer: '.cars__container',
    };
    /**
     * Конструктор класса Booking.
     * Вызывает метод init() для инициализации компонента.
     */
    constructor() {
        super();
        this.init();
    }
    /**
     * Метод инициализации.
     * Он привязывает все формы и поля ввода, инициализирует маску для поля ввода телефона
     * и привязывает обработчик события клика на карту.
     */
    init() {
        this.form = (0,_utils_JQuery__WEBPACK_IMPORTED_MODULE_2__.$)(this.selectors.form);
        this.name = (0,_utils_JQuery__WEBPACK_IMPORTED_MODULE_2__.$)(this.selectors.inputName);
        this.phone = (0,_utils_JQuery__WEBPACK_IMPORTED_MODULE_2__.$)(this.selectors.inputPhone);
        this.date = (0,_utils_JQuery__WEBPACK_IMPORTED_MODULE_2__.$)(this.selectors.inputDate);
        this.car = (0,_utils_JQuery__WEBPACK_IMPORTED_MODULE_2__.$)(this.selectors.carSelect);
        // инициализируем маску для поля телефона
        (0,imask__WEBPACK_IMPORTED_MODULE_1__["default"])(document.getElementById('phone'), {
            mask: '+7 (000) 000-00-00',
            lazy: true,
        });
        this.bindEvents();
        this.bindCardClickEvent();
    }
    /**
     * Задает выбранный вариант автомобиля в селект.
     * */
    setCar(value) {
        // выбираем нужный вариант
        const select = document.getElementById('select');
        const option = select?.options;
        // присваиваем выбранный вариант
        for (let i = 0; i < option.length; i++) {
            if (option[i].value === value) {
                option.selectedIndex = i;
                break;
            }
        }
    }
    /**
     * Метод установливает выбранный автомобиль в форме.
     */
    bindCardClickEvent() {
        document.querySelector(this.selectors.carsContainer)?.addEventListener('click', event => {
            if (!(event.target instanceof HTMLElement))
                return;
            // находим ближайший элемент, у которого есть атрибут data-car-name
            const target = event.target;
            const targetEl = target.closest('[data-car-name]');
            if (!targetEl)
                return;
            // устанавливаем выбранный автомобиль
            const selectedCar = targetEl.dataset.carName;
            if (selectedCar) {
                // передаем выбранный автомобиль в селект
                this.setCar(selectedCar);
            }
        });
    }
    /**
     * Метод проверяет заполнены всех полей и
     * если все поля заполнены,
     * очищает поля и выводит уведомление.
     */
    bindEvents() {
        this.form.on('submit', (event) => {
            event.preventDefault();
            if (this.validateForm()) {
                alert('Заявка отправлена, в ближайшее время мы с вами свяжемся, спасибо!');
                // очищаем поля
                const fieldsToClear = [this.name, this.phone, this.date, this.car];
                fieldsToClear.forEach(field => field.setValue(''));
                // отписываемся от события
                document.removeEventListener('click', this.bindCardClickEvent);
            }
            else {
                alert('Все поля обязательны для заполнения.');
            }
        });
    }
    /**
     * Проверка полей формы.
     * @returns {boolean}
     */
    validateForm() {
        // проверяем, что все поля заполнены
        if (!this.name.val() || !this.phone.val() || !this.date.val() || !this.car.val()) {
            return false;
        }
        return true;
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
        button: '[data-js-button-animated]',
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
     *   с атрибутом data-js-button-animated, инициализирует кнопки, и
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
                // event.preventDefault()
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
    /**
     * Устанавливает значение атрибута с заданным квалифицированным именем.
     * @param {string} qualifiedName - квалифицированный имя атрибута.
     * @param {string} value - значение атрибута.
     * @returns {JQuery} - объект JQuery.
     */
    attr(qualifiedName, value) {
        this.rootElement.setAttribute(qualifiedName, value);
        return this;
    }
    /**
      * Возвращает значение атрибута данных с заданным ключом.
     * @param {string} key - ключ атрибута данных.
     * @returns {string | null} Значение атрибута данных или null, если он не существует.
     */
    data(key) {
        return this.rootElement.getAttribute(`data-${key}`);
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
    /**
     * Установка значения для поля ввода или выпадающего списка.
     *
     * @param {string} value - значение которое будет установлено
     * @returns {JQuery} - объект JQuery
     * @throws {Error} - если элемент не является полем ввода или выпадающим списком
     */
    setValue(value) {
        switch (this.rootElement.tagName.toLowerCase()) {
            case 'input':
            case 'textarea':
                this.rootElement.value = String(value); // Преобразование к строке
                break;
            case 'select':
                this.rootElement.value = String(value); // Установка выбранного значения
                break;
            default:
                throw new Error('Невозможно установить значение для данного элемента.');
        }
        return this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0RBQWE7QUFDckMsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0RBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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aUJBQWlCLFFBQVE7QUFDekIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7OztVQzdJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDYTtBQUNKO0FBQ0k7QUFDTTtBQUMvQyxJQUFJLDBEQUFNO0FBQ1YsSUFBSSx3REFBSTtBQUNSLElBQUksMERBQU07QUFDVixJQUFJLHdEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2b3hlLy4vbW9kZXJuaXpyLmpzIiwid2VicGFjazovL2Rldm94ZS8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29udHJvbHMvaHRtbC1jb250ZW50ZWRpdGFibGUtbWFzay1lbGVtZW50LmpzIiwid2VicGFjazovL2Rldm94ZS8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29udHJvbHMvaHRtbC1pbnB1dC1tYXNrLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGV2b3hlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb250cm9scy9odG1sLW1hc2stZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kZXZveGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvbnRyb2xzL2lucHV0LWhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vZGV2b3hlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb250cm9scy9pbnB1dC5qcyIsIndlYnBhY2s6Ly9kZXZveGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvbnRyb2xzL21hc2stZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kZXZveGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvYWN0aW9uLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vZGV2b3hlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzIiwid2VicGFjazovL2Rldm94ZS8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9kZXZveGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvaG9sZGVyLmpzIiwid2VicGFjazovL2Rldm94ZS8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29yZS91dGlscy5qcyIsIndlYnBhY2s6Ly9kZXZveGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2luZGV4LmpzIiwid2VicGFjazovL2Rldm94ZS8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vZGV2b3hlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvZGF0ZS5qcyIsIndlYnBhY2s6Ly9kZXZveGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9keW5hbWljLmpzIiwid2VicGFjazovL2Rldm94ZS8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2VudW0uanMiLCJ3ZWJwYWNrOi8vZGV2b3hlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9kZXZveGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9kZXZveGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vZGV2b3hlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9kZXZveGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9kZXZveGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2N1cnNvci5qcyIsIndlYnBhY2s6Ly9kZXZveGUvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vZGV2b3hlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzIiwid2VicGFjazovL2Rldm94ZS8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3BpcGUuanMiLCJ3ZWJwYWNrOi8vZGV2b3hlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vZGV2b3hlLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcmVnZXhwLmpzIiwid2VicGFjazovL2Rldm94ZS8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3JlcGVhdC5qcyIsIndlYnBhY2s6Ly9kZXZveGUvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0Jhc2UudHMiLCJ3ZWJwYWNrOi8vZGV2b3hlLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Cb29raW5nL2luZGV4LnRzIiwid2VicGFjazovL2Rldm94ZS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LnRzIiwid2VicGFjazovL2Rldm94ZS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvQ2FyZC9pbmRleC50cyIsIndlYnBhY2s6Ly9kZXZveGUvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9kZXZveGUvLi9zcmMvc2NyaXB0cy91dGlscy9KUXVlcnkudHMiLCJ3ZWJwYWNrOi8vZGV2b3hlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rldm94ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZXZveGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rldm94ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rldm94ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rldm94ZS8uL3NyYy9zY3JpcHRzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiKChBLGUpPT57dmFyIGksbixvPVtdLGE9e192ZXJzaW9uOlwiMy4xMy4xXCIsX2NvbmZpZzp7Y2xhc3NQcmVmaXg6XCJcIixlbmFibGVDbGFzc2VzOiEwLGVuYWJsZUpTQ2xhc3M6ITAsdXNlUHJlZml4ZXM6ITB9LF9xOltdLG9uOmZ1bmN0aW9uKEEsZSl7dmFyIG49dGhpcztzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShuW0FdKX0sMCl9LGFkZFRlc3Q6ZnVuY3Rpb24oQSxlLG4pe28ucHVzaCh7bmFtZTpBLGZuOmUsb3B0aW9uczpufSl9LGFkZEFzeW5jVGVzdDpmdW5jdGlvbihBKXtvLnB1c2goe25hbWU6bnVsbCxmbjpBfSl9fSxsPWZ1bmN0aW9uKCl7fSx0PShsLnByb3RvdHlwZT1hLGw9bmV3IGwsW10pO2Z1bmN0aW9uIHMoQSxlKXtyZXR1cm4gdHlwZW9mIEE9PT1lfWk9dm9pZCAwIT09KG49e30uaGFzT3duUHJvcGVydHkpJiZ2b2lkIDAhPT1uLmNhbGw/ZnVuY3Rpb24oQSxlKXtyZXR1cm4gbi5jYWxsKEEsZSl9OmZ1bmN0aW9uKEEsZSl7cmV0dXJuIGUgaW4gQSYmdm9pZCAwPT09QS5jb25zdHJ1Y3Rvci5wcm90b3R5cGVbZV19O3ZhciByLGMsZix1LGcsZCxwLGg9ZS5kb2N1bWVudEVsZW1lbnQsbT1cInN2Z1wiPT09aC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2Z1bmN0aW9uIHcoQSxlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgQSlmb3IodmFyIG4gaW4gQSlpKEEsbikmJncobixBW25dKTtlbHNle3ZhciBvPShBPUEudG9Mb3dlckNhc2UoKSkuc3BsaXQoXCIuXCIpLGE9bFtvWzBdXTtpZih2b2lkIDAhPT0oYT0yPT09by5sZW5ndGg/YVtvWzFdXTphKSlyZXR1cm4gbDtlPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZSgpOmUsMT09PW8ubGVuZ3RoP2xbb1swXV09ZTooIWxbb1swXV18fGxbb1swXV1pbnN0YW5jZW9mIEJvb2xlYW58fChsW29bMF1dPW5ldyBCb29sZWFuKGxbb1swXV0pKSxsW29bMF1dW29bMV1dPWUpLGE9WyhlJiYhMSE9PWU/XCJcIjpcIm5vLVwiKStvLmpvaW4oXCItXCIpXSxvPWguY2xhc3NOYW1lLHM9bC5fY29uZmlnLmNsYXNzUHJlZml4fHxcIlwiLG0mJihvPW8uYmFzZVZhbCksbC5fY29uZmlnLmVuYWJsZUpTQ2xhc3MmJih0PW5ldyBSZWdFeHAoXCIoXnxcXFxccylcIitzK1wibm8tanMoXFxcXHN8JClcIiksbz1vLnJlcGxhY2UodCxcIiQxXCIrcytcImpzJDJcIikpLGwuX2NvbmZpZy5lbmFibGVDbGFzc2VzJiYoMDxhLmxlbmd0aCYmKG8rPVwiIFwiK3MrYS5qb2luKFwiIFwiK3MpKSxtP2guY2xhc3NOYW1lLmJhc2VWYWw9bzpoLmNsYXNzTmFtZT1vKSxsLl90cmlnZ2VyKEEsZSl9dmFyIHQscztyZXR1cm4gbH1mb3IocCBpbiBhLl9sPXt9LGEub249ZnVuY3Rpb24oQSxlKXt0aGlzLl9sW0FdfHwodGhpcy5fbFtBXT1bXSksdGhpcy5fbFtBXS5wdXNoKGUpLGwuaGFzT3duUHJvcGVydHkoQSkmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtsLl90cmlnZ2VyKEEsbFtBXSl9LDApfSxhLl90cmlnZ2VyPWZ1bmN0aW9uKEEsZSl7dmFyIG47dGhpcy5fbFtBXSYmKG49dGhpcy5fbFtBXSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Zm9yKHZhciBBPTA7QTxuLmxlbmd0aDtBKyspKDAsbltBXSkoZSl9LDApLGRlbGV0ZSB0aGlzLl9sW0FdKX0sbC5fcS5wdXNoKGZ1bmN0aW9uKCl7YS5hZGRUZXN0PXd9KSxsLmFkZEFzeW5jVGVzdChmdW5jdGlvbigpe3ZhciBuPVt7dXJpOlwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmlRQUFBQlhSVUpRVmxBNElCZ0FBQUF3QVFDZEFTb0JBQUVBQXdBMEphUUFBM0FBL3Z1VUFBQT1cIixuYW1lOlwid2VicFwifSx7dXJpOlwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmtvQUFBQlhSVUpRVmxBNFdBb0FBQUFRQUFBQUFBQUFBQUFBUVV4UVNBd0FBQUFCQnhBUi9ROUVSUDhEQUFCV1VEZ2dHQUFBQURBQkFKMEJLZ0VBQVFBREFEUWxwQUFEY0FEKysvMVFBQT09XCIsbmFtZTpcIndlYnAuYWxwaGFcIn0se3VyaTpcImRhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1JsSUFBQUJYUlVKUVZsQTRXQW9BQUFBU0FBQUFBQUFBQUFBQVFVNUpUUVlBQUFELy8vLy9BQUJCVGsxR0pnQUFBQUFBQUFBQUFBQUFBQUFBQUdRQUFBQldVRGhNRFFBQUFDOEFBQUFRQnhBUkVZaUkvZ2NBXCIsbmFtZTpcIndlYnAuYW5pbWF0aW9uXCJ9LHt1cmk6XCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSaDRBQUFCWFJVSlFWbEE0VEJFQUFBQXZBQUFBQUFmUS8vNzN2LytCaU9oL0FBQT1cIixuYW1lOlwid2VicC5sb3NzbGVzc1wifV0sQT1uLnNoaWZ0KCk7ZnVuY3Rpb24gbyhuLEEsbyl7dmFyIGE9bmV3IEltYWdlO2Z1bmN0aW9uIGUoQSl7dmFyIGU9ISghQXx8XCJsb2FkXCIhPT1BLnR5cGUpJiYxPT09YS53aWR0aDt3KG4sXCJ3ZWJwXCI9PT1uJiZlP25ldyBCb29sZWFuKGUpOmUpLG8mJm8oQSl9YS5vbmVycm9yPWUsYS5vbmxvYWQ9ZSxhLnNyYz1BfW8oQS5uYW1lLEEudXJpLGZ1bmN0aW9uKEEpe2lmKEEmJlwibG9hZFwiPT09QS50eXBlKWZvcih2YXIgZT0wO2U8bi5sZW5ndGg7ZSsrKW8obltlXS5uYW1lLG5bZV0udXJpKX0pfSksbC5hZGRBc3luY1Rlc3QoZnVuY3Rpb24oKXt2YXIgQT1uZXcgSW1hZ2U7QS5vbmxvYWQ9QS5vbmVycm9yPWZ1bmN0aW9uKCl7dyhcImF2aWZcIiwxPT09QS53aWR0aCl9LEEuc3JjPVwiZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCxBQUFBSUdaMGVYQmhkbWxtQUFBQUFHRjJhV1p0YVdZeGJXbGhaazFCTVVJQUFBRWNiV1YwWVFBQUFBQUFBQUJJYUdSc2NnQUFBQUFBQUFBQWNHbGpkQUFBQUFBQUFBQUFBQUFBQUdOaGRtbG1JQzBnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJ4cGJtc3RkUzlqWVhacFpnQUFBQUFlYVd4dll3QUFBQUFFUUFBQkFBRUFBQUFBQVVRQUFRQUFBQmNBQUFBcWFXbHVaZ0VBQUFBQUFBQUJBQUFBR21sdVptVUNBQUFBQUFFQUFHRjJNREZKYldGblpRQUFBQUFPY0dsMGJRQUFBQUFBQVFBQUFISnBjSEp3QUFBQVVtbHdZMjhBQUFBUWNHRnpjQUFBQUFFQUFBQUJBQUFBRkdsemNHVUFBQUFBQUFBQUFRQUFBQUVBQUFBUWNHbDRhUUFBQUFBRENBZ0lBQUFBRm1GMk1VT0JBQXdBQ2dnWUFBWUlDR2dJSUFBQUFCaHBjRzFoQUFBQUFBQUFBQUVBQVFVQkFvTURoQUFBQUI5dFpHRjBDZ2dZQUFZSUNHZ0lJQm9GSGlBQUFFUWlCQUN3RG9BPVwifSksbylpZihvLmhhc093blByb3BlcnR5KHApKXtpZihyPVtdLChjPW9bcF0pLm5hbWUmJihyLnB1c2goYy5uYW1lLnRvTG93ZXJDYXNlKCkpLGMub3B0aW9ucykmJmMub3B0aW9ucy5hbGlhc2VzJiZjLm9wdGlvbnMuYWxpYXNlcy5sZW5ndGgpZm9yKGY9MDtmPGMub3B0aW9ucy5hbGlhc2VzLmxlbmd0aDtmKyspci5wdXNoKGMub3B0aW9ucy5hbGlhc2VzW2ZdLnRvTG93ZXJDYXNlKCkpO2Zvcih1PXMoYy5mbixcImZ1bmN0aW9uXCIpP2MuZm4oKTpjLmZuLGc9MDtnPHIubGVuZ3RoO2crKykxPT09KGQ9cltnXS5zcGxpdChcIi5cIikpLmxlbmd0aD9sW2RbMF1dPXU6KGxbZFswXV0mJihsW2RbMF1dLGxbZFswXV1pbnN0YW5jZW9mIEJvb2xlYW4pfHwobFtkWzBdXT1uZXcgQm9vbGVhbihsW2RbMF1dKSksbFtkWzBdXVtkWzFdXT11KSx0LnB1c2goKHU/XCJcIjpcIm5vLVwiKStkLmpvaW4oXCItXCIpKX1kZWxldGUgYS5hZGRUZXN0LGRlbGV0ZSBhLmFkZEFzeW5jVGVzdDtmb3IodmFyIEI9MDtCPGwuX3EubGVuZ3RoO0IrKylsLl9xW0JdKCk7QS5Nb2Rlcm5penI9bH0pKHdpbmRvdywod2luZG93LGRvY3VtZW50KSk7IiwiaW1wb3J0IEhUTUxNYXNrRWxlbWVudCBmcm9tICcuL2h0bWwtbWFzay1lbGVtZW50LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4vbWFzay1lbGVtZW50LmpzJztcblxuY2xhc3MgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50IGV4dGVuZHMgSFRNTE1hc2tFbGVtZW50IHtcbiAgLyoqIFJldHVybnMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uIHN0YXJ0ICovXG4gIGdldCBfdW5zYWZlU2VsZWN0aW9uU3RhcnQoKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMucm9vdEVsZW1lbnQ7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcbiAgICBjb25zdCBhbmNob3JPZmZzZXQgPSBzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLmFuY2hvck9mZnNldDtcbiAgICBjb25zdCBmb2N1c09mZnNldCA9IHNlbGVjdGlvbiAmJiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQ7XG4gICAgaWYgKGZvY3VzT2Zmc2V0ID09IG51bGwgfHwgYW5jaG9yT2Zmc2V0ID09IG51bGwgfHwgYW5jaG9yT2Zmc2V0IDwgZm9jdXNPZmZzZXQpIHtcbiAgICAgIHJldHVybiBhbmNob3JPZmZzZXQ7XG4gICAgfVxuICAgIHJldHVybiBmb2N1c09mZnNldDtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBlbmQgKi9cbiAgZ2V0IF91bnNhZmVTZWxlY3Rpb25FbmQoKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMucm9vdEVsZW1lbnQ7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcbiAgICBjb25zdCBhbmNob3JPZmZzZXQgPSBzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLmFuY2hvck9mZnNldDtcbiAgICBjb25zdCBmb2N1c09mZnNldCA9IHNlbGVjdGlvbiAmJiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQ7XG4gICAgaWYgKGZvY3VzT2Zmc2V0ID09IG51bGwgfHwgYW5jaG9yT2Zmc2V0ID09IG51bGwgfHwgYW5jaG9yT2Zmc2V0ID4gZm9jdXNPZmZzZXQpIHtcbiAgICAgIHJldHVybiBhbmNob3JPZmZzZXQ7XG4gICAgfVxuICAgIHJldHVybiBmb2N1c09mZnNldDtcbiAgfVxuXG4gIC8qKiBTZXRzIEhUTUxFbGVtZW50IHNlbGVjdGlvbiAqL1xuICBfdW5zYWZlU2VsZWN0KHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoIXRoaXMucm9vdEVsZW1lbnQuY3JlYXRlUmFuZ2UpIHJldHVybjtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucm9vdEVsZW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICByYW5nZS5zZXRTdGFydCh0aGlzLmlucHV0LmZpcnN0Q2hpbGQgfHwgdGhpcy5pbnB1dCwgc3RhcnQpO1xuICAgIHJhbmdlLnNldEVuZCh0aGlzLmlucHV0Lmxhc3RDaGlsZCB8fCB0aGlzLmlucHV0LCBlbmQpO1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLnJvb3RFbGVtZW50O1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHJvb3QuZ2V0U2VsZWN0aW9uICYmIHJvb3QuZ2V0U2VsZWN0aW9uKCk7XG4gICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB9XG4gIH1cblxuICAvKiogSFRNTEVsZW1lbnQgdmFsdWUgKi9cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0LnRleHRDb250ZW50IHx8ICcnO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuaW5wdXQudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgfVxufVxuSU1hc2suSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50ID0gSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50O1xuXG5leHBvcnQgeyBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IEhUTUxNYXNrRWxlbWVudCBmcm9tICcuL2h0bWwtbWFzay1lbGVtZW50LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4vbWFzay1lbGVtZW50LmpzJztcblxuLyoqIEJyaWRnZSBiZXR3ZWVuIElucHV0RWxlbWVudCBhbmQge0BsaW5rIE1hc2tlZH0gKi9cbmNsYXNzIEhUTUxJbnB1dE1hc2tFbGVtZW50IGV4dGVuZHMgSFRNTE1hc2tFbGVtZW50IHtcbiAgLyoqIElucHV0RWxlbWVudCB0byB1c2UgbWFzayBvbiAqL1xuXG4gIGNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgc3VwZXIoaW5wdXQpO1xuICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIElucHV0RWxlbWVudCBzZWxlY3Rpb24gc3RhcnQgKi9cbiAgZ2V0IF91bnNhZmVTZWxlY3Rpb25TdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydCAhPSBudWxsID8gdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydCA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgLyoqIFJldHVybnMgSW5wdXRFbGVtZW50IHNlbGVjdGlvbiBlbmQgKi9cbiAgZ2V0IF91bnNhZmVTZWxlY3Rpb25FbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQuc2VsZWN0aW9uRW5kO1xuICB9XG5cbiAgLyoqIFNldHMgSW5wdXRFbGVtZW50IHNlbGVjdGlvbiAqL1xuICBfdW5zYWZlU2VsZWN0KHN0YXJ0LCBlbmQpIHtcbiAgICB0aGlzLmlucHV0LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cbklNYXNrLkhUTUxNYXNrRWxlbWVudCA9IEhUTUxNYXNrRWxlbWVudDtcblxuZXhwb3J0IHsgSFRNTElucHV0TWFza0VsZW1lbnQgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IE1hc2tFbGVtZW50IGZyb20gJy4vbWFzay1lbGVtZW50LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5cbmNvbnN0IEtFWV9aID0gOTA7XG5jb25zdCBLRVlfWSA9IDg5O1xuXG4vKiogQnJpZGdlIGJldHdlZW4gSFRNTEVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXG5jbGFzcyBIVE1MTWFza0VsZW1lbnQgZXh0ZW5kcyBNYXNrRWxlbWVudCB7XG4gIC8qKiBIVE1MRWxlbWVudCB0byB1c2UgbWFzayBvbiAqL1xuXG4gIGNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgdGhpcy5fb25LZXlkb3duID0gdGhpcy5fb25LZXlkb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25JbnB1dCA9IHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkJlZm9yZWlucHV0ID0gdGhpcy5fb25CZWZvcmVpbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQ29tcG9zaXRpb25FbmQgPSB0aGlzLl9vbkNvbXBvc2l0aW9uRW5kLmJpbmQodGhpcyk7XG4gIH1cbiAgZ2V0IHJvb3RFbGVtZW50KCkge1xuICAgIHZhciBfdGhpcyRpbnB1dCRnZXRSb290Tm8sIF90aGlzJGlucHV0JGdldFJvb3RObzIsIF90aGlzJGlucHV0O1xuICAgIHJldHVybiAoX3RoaXMkaW5wdXQkZ2V0Um9vdE5vID0gKF90aGlzJGlucHV0JGdldFJvb3RObzIgPSAoX3RoaXMkaW5wdXQgPSB0aGlzLmlucHV0KS5nZXRSb290Tm9kZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJGlucHV0JGdldFJvb3RObzIuY2FsbChfdGhpcyRpbnB1dCkpICE9IG51bGwgPyBfdGhpcyRpbnB1dCRnZXRSb290Tm8gOiBkb2N1bWVudDtcbiAgfVxuXG4gIC8qKiBJcyBlbGVtZW50IGluIGZvY3VzICovXG4gIGdldCBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dCA9PT0gdGhpcy5yb290RWxlbWVudC5hY3RpdmVFbGVtZW50O1xuICB9XG5cbiAgLyoqIEJpbmRzIEhUTUxFbGVtZW50IGV2ZW50cyB0byBtYXNrIGludGVybmFsIGV2ZW50cyAqL1xuICBiaW5kRXZlbnRzKGhhbmRsZXJzKSB7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5fb25JbnB1dCk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVpbnB1dCcsIHRoaXMuX29uQmVmb3JlaW5wdXQpO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCB0aGlzLl9vbkNvbXBvc2l0aW9uRW5kKTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBoYW5kbGVycy5kcm9wKTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcnMuY2xpY2spO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVycy5mb2N1cyk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlcnMuY29tbWl0KTtcbiAgICB0aGlzLl9oYW5kbGVycyA9IGhhbmRsZXJzO1xuICB9XG4gIF9vbktleWRvd24oZSkge1xuICAgIGlmICh0aGlzLl9oYW5kbGVycy5yZWRvICYmIChlLmtleUNvZGUgPT09IEtFWV9aICYmIGUuc2hpZnRLZXkgJiYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpIHx8IGUua2V5Q29kZSA9PT0gS0VZX1kgJiYgZS5jdHJsS2V5KSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJzLnJlZG8oZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9oYW5kbGVycy51bmRvICYmIGUua2V5Q29kZSA9PT0gS0VZX1ogJiYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gdGhpcy5faGFuZGxlcnMudW5kbyhlKTtcbiAgICB9XG4gICAgaWYgKCFlLmlzQ29tcG9zaW5nKSB0aGlzLl9oYW5kbGVycy5zZWxlY3Rpb25DaGFuZ2UoZSk7XG4gIH1cbiAgX29uQmVmb3JlaW5wdXQoZSkge1xuICAgIGlmIChlLmlucHV0VHlwZSA9PT0gJ2hpc3RvcnlVbmRvJyAmJiB0aGlzLl9oYW5kbGVycy51bmRvKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gdGhpcy5faGFuZGxlcnMudW5kbyhlKTtcbiAgICB9XG4gICAgaWYgKGUuaW5wdXRUeXBlID09PSAnaGlzdG9yeVJlZG8nICYmIHRoaXMuX2hhbmRsZXJzLnJlZG8pIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVycy5yZWRvKGUpO1xuICAgIH1cbiAgfVxuICBfb25Db21wb3NpdGlvbkVuZChlKSB7XG4gICAgdGhpcy5faGFuZGxlcnMuaW5wdXQoZSk7XG4gIH1cbiAgX29uSW5wdXQoZSkge1xuICAgIGlmICghZS5pc0NvbXBvc2luZykgdGhpcy5faGFuZGxlcnMuaW5wdXQoZSk7XG4gIH1cblxuICAvKiogVW5iaW5kcyBIVE1MRWxlbWVudCBldmVudHMgdG8gbWFzayBpbnRlcm5hbCBldmVudHMgKi9cbiAgdW5iaW5kRXZlbnRzKCkge1xuICAgIHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5ZG93bik7XG4gICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX29uSW5wdXQpO1xuICAgIHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVmb3JlaW5wdXQnLCB0aGlzLl9vbkJlZm9yZWlucHV0KTtcbiAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5fb25Db21wb3NpdGlvbkVuZCk7XG4gICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5faGFuZGxlcnMuZHJvcCk7XG4gICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZXJzLmNsaWNrKTtcbiAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5faGFuZGxlcnMuZm9jdXMpO1xuICAgIHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2hhbmRsZXJzLmNvbW1pdCk7XG4gICAgdGhpcy5faGFuZGxlcnMgPSB7fTtcbiAgfVxufVxuSU1hc2suSFRNTE1hc2tFbGVtZW50ID0gSFRNTE1hc2tFbGVtZW50O1xuXG5leHBvcnQgeyBIVE1MTWFza0VsZW1lbnQgYXMgZGVmYXVsdCB9O1xuIiwiY2xhc3MgSW5wdXRIaXN0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdGF0ZXMgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gIH1cbiAgZ2V0IGN1cnJlbnRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZXNbdGhpcy5jdXJyZW50SW5kZXhdO1xuICB9XG4gIGdldCBpc0VtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlcy5sZW5ndGggPT09IDA7XG4gIH1cbiAgcHVzaChzdGF0ZSkge1xuICAgIC8vIGlmIGN1cnJlbnQgaW5kZXggcG9pbnRzIGJlZm9yZSB0aGUgbGFzdCBlbGVtZW50IHRoZW4gcmVtb3ZlIHRoZSBmdXR1cmVcbiAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPCB0aGlzLnN0YXRlcy5sZW5ndGggLSAxKSB0aGlzLnN0YXRlcy5sZW5ndGggPSB0aGlzLmN1cnJlbnRJbmRleCArIDE7XG4gICAgdGhpcy5zdGF0ZXMucHVzaChzdGF0ZSk7XG4gICAgaWYgKHRoaXMuc3RhdGVzLmxlbmd0aCA+IElucHV0SGlzdG9yeS5NQVhfTEVOR1RIKSB0aGlzLnN0YXRlcy5zaGlmdCgpO1xuICAgIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5zdGF0ZXMubGVuZ3RoIC0gMTtcbiAgfVxuICBnbyhzdGVwcykge1xuICAgIHRoaXMuY3VycmVudEluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy5jdXJyZW50SW5kZXggKyBzdGVwcywgMCksIHRoaXMuc3RhdGVzLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZTtcbiAgfVxuICB1bmRvKCkge1xuICAgIHJldHVybiB0aGlzLmdvKC0xKTtcbiAgfVxuICByZWRvKCkge1xuICAgIHJldHVybiB0aGlzLmdvKCsxKTtcbiAgfVxuICBjbGVhcigpIHtcbiAgICB0aGlzLnN0YXRlcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgfVxufVxuSW5wdXRIaXN0b3J5Lk1BWF9MRU5HVEggPSAxMDA7XG5cbmV4cG9ydCB7IElucHV0SGlzdG9yeSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBBY3Rpb25EZXRhaWxzIGZyb20gJy4uL2NvcmUvYWN0aW9uLWRldGFpbHMuanMnO1xuaW1wb3J0IGNyZWF0ZU1hc2ssIHsgbWFza2VkQ2xhc3MgfSBmcm9tICcuLi9tYXNrZWQvZmFjdG9yeS5qcyc7XG5pbXBvcnQgTWFza0VsZW1lbnQgZnJvbSAnLi9tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IEhUTUxJbnB1dE1hc2tFbGVtZW50IGZyb20gJy4vaHRtbC1pbnB1dC1tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCBmcm9tICcuL2h0bWwtY29udGVudGVkaXRhYmxlLW1hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0IElucHV0SGlzdG9yeSBmcm9tICcuL2lucHV0LWhpc3RvcnkuanMnO1xuaW1wb3J0ICcuL2h0bWwtbWFzay1lbGVtZW50LmpzJztcblxuLyoqIExpc3RlbnMgdG8gZWxlbWVudCBldmVudHMgYW5kIGNvbnRyb2xzIGNoYW5nZXMgYmV0d2VlbiBlbGVtZW50IGFuZCB7QGxpbmsgTWFza2VkfSAqL1xuY2xhc3MgSW5wdXRNYXNrIHtcbiAgLyoqXG4gICAgVmlldyBlbGVtZW50XG4gICovXG5cbiAgLyoqIEludGVybmFsIHtAbGluayBNYXNrZWR9IG1vZGVsICovXG5cbiAgY29uc3RydWN0b3IoZWwsIG9wdHMpIHtcbiAgICB0aGlzLmVsID0gZWwgaW5zdGFuY2VvZiBNYXNrRWxlbWVudCA/IGVsIDogZWwuaXNDb250ZW50RWRpdGFibGUgJiYgZWwudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJiBlbC50YWdOYW1lICE9PSAnVEVYVEFSRUEnID8gbmV3IEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudChlbCkgOiBuZXcgSFRNTElucHV0TWFza0VsZW1lbnQoZWwpO1xuICAgIHRoaXMubWFza2VkID0gY3JlYXRlTWFzayhvcHRzKTtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIHRoaXMuX3VubWFza2VkVmFsdWUgPSAnJztcbiAgICB0aGlzLl9yYXdJbnB1dFZhbHVlID0gJyc7XG4gICAgdGhpcy5oaXN0b3J5ID0gbmV3IElucHV0SGlzdG9yeSgpO1xuICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24gPSB0aGlzLl9zYXZlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25JbnB1dCA9IHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IHRoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Ecm9wID0gdGhpcy5fb25Ecm9wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNsaWNrID0gdGhpcy5fb25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uVW5kbyA9IHRoaXMuX29uVW5kby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uUmVkbyA9IHRoaXMuX29uUmVkby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWxpZ25DdXJzb3IgPSB0aGlzLmFsaWduQ3Vyc29yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5ID0gdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYmluZEV2ZW50cygpO1xuXG4gICAgLy8gcmVmcmVzaFxuICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICB9XG4gIG1hc2tFcXVhbHMobWFzaykge1xuICAgIHZhciBfdGhpcyRtYXNrZWQ7XG4gICAgcmV0dXJuIG1hc2sgPT0gbnVsbCB8fCAoKF90aGlzJG1hc2tlZCA9IHRoaXMubWFza2VkKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkbWFza2VkLm1hc2tFcXVhbHMobWFzaykpO1xuICB9XG5cbiAgLyoqIE1hc2tlZCAqL1xuICBnZXQgbWFzaygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQubWFzaztcbiAgfVxuICBzZXQgbWFzayhtYXNrKSB7XG4gICAgaWYgKHRoaXMubWFza0VxdWFscyhtYXNrKSkgcmV0dXJuO1xuICAgIGlmICghKG1hc2sgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpICYmIHRoaXMubWFza2VkLmNvbnN0cnVjdG9yID09PSBtYXNrZWRDbGFzcyhtYXNrKSkge1xuICAgICAgLy8gVE9ETyBcImFueVwiIG5vIGlkZWFcbiAgICAgIHRoaXMubWFza2VkLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBtYXNrXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWFza2VkID0gbWFzayBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCA/IG1hc2sgOiBjcmVhdGVNYXNrKHtcbiAgICAgIG1hc2tcbiAgICB9KTtcbiAgICBtYXNrZWQudW5tYXNrZWRWYWx1ZSA9IHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XG4gICAgdGhpcy5tYXNrZWQgPSBtYXNrZWQ7XG4gIH1cblxuICAvKiogUmF3IHZhbHVlICovXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHN0cikge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSBzdHIpIHJldHVybjtcbiAgICB0aGlzLm1hc2tlZC52YWx1ZSA9IHN0cjtcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woJ2F1dG8nKTtcbiAgfVxuXG4gIC8qKiBVbm1hc2tlZCB2YWx1ZSAqL1xuICBnZXQgdW5tYXNrZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5tYXNrZWRWYWx1ZTtcbiAgfVxuICBzZXQgdW5tYXNrZWRWYWx1ZShzdHIpIHtcbiAgICBpZiAodGhpcy51bm1hc2tlZFZhbHVlID09PSBzdHIpIHJldHVybjtcbiAgICB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlID0gc3RyO1xuICAgIHRoaXMudXBkYXRlQ29udHJvbCgnYXV0bycpO1xuICB9XG5cbiAgLyoqIFJhdyBpbnB1dCB2YWx1ZSAqL1xuICBnZXQgcmF3SW5wdXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3SW5wdXRWYWx1ZTtcbiAgfVxuICBzZXQgcmF3SW5wdXRWYWx1ZShzdHIpIHtcbiAgICBpZiAodGhpcy5yYXdJbnB1dFZhbHVlID09PSBzdHIpIHJldHVybjtcbiAgICB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlID0gc3RyO1xuICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcbiAgfVxuXG4gIC8qKiBUeXBlZCB1bm1hc2tlZCB2YWx1ZSAqL1xuICBnZXQgdHlwZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQudHlwZWRWYWx1ZTtcbiAgfVxuICBzZXQgdHlwZWRWYWx1ZSh2YWwpIHtcbiAgICBpZiAodGhpcy5tYXNrZWQudHlwZWRWYWx1ZUVxdWFscyh2YWwpKSByZXR1cm47XG4gICAgdGhpcy5tYXNrZWQudHlwZWRWYWx1ZSA9IHZhbDtcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woJ2F1dG8nKTtcbiAgfVxuXG4gIC8qKiBEaXNwbGF5IHZhbHVlICovXG4gIGdldCBkaXNwbGF5VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2VkLmRpc3BsYXlWYWx1ZTtcbiAgfVxuXG4gIC8qKiBTdGFydHMgbGlzdGVuaW5nIHRvIGVsZW1lbnQgZXZlbnRzICovXG4gIF9iaW5kRXZlbnRzKCkge1xuICAgIHRoaXMuZWwuYmluZEV2ZW50cyh7XG4gICAgICBzZWxlY3Rpb25DaGFuZ2U6IHRoaXMuX3NhdmVTZWxlY3Rpb24sXG4gICAgICBpbnB1dDogdGhpcy5fb25JbnB1dCxcbiAgICAgIGRyb3A6IHRoaXMuX29uRHJvcCxcbiAgICAgIGNsaWNrOiB0aGlzLl9vbkNsaWNrLFxuICAgICAgZm9jdXM6IHRoaXMuX29uRm9jdXMsXG4gICAgICBjb21taXQ6IHRoaXMuX29uQ2hhbmdlLFxuICAgICAgdW5kbzogdGhpcy5fb25VbmRvLFxuICAgICAgcmVkbzogdGhpcy5fb25SZWRvXG4gICAgfSk7XG4gIH1cblxuICAvKiogU3RvcHMgbGlzdGVuaW5nIHRvIGVsZW1lbnQgZXZlbnRzICovXG4gIF91bmJpbmRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuZWwpIHRoaXMuZWwudW5iaW5kRXZlbnRzKCk7XG4gIH1cblxuICAvKiogRmlyZXMgY3VzdG9tIGV2ZW50ICovXG4gIF9maXJlRXZlbnQoZXYsIGUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZdO1xuICAgIGlmICghbGlzdGVuZXJzKSByZXR1cm47XG4gICAgbGlzdGVuZXJzLmZvckVhY2gobCA9PiBsKGUpKTtcbiAgfVxuXG4gIC8qKiBDdXJyZW50IHNlbGVjdGlvbiBzdGFydCAqL1xuICBnZXQgc2VsZWN0aW9uU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnNvckNoYW5naW5nID8gdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgOiB0aGlzLmVsLnNlbGVjdGlvblN0YXJ0O1xuICB9XG5cbiAgLyoqIEN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uICovXG4gIGdldCBjdXJzb3JQb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnNvckNoYW5naW5nID8gdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgOiB0aGlzLmVsLnNlbGVjdGlvbkVuZDtcbiAgfVxuICBzZXQgY3Vyc29yUG9zKHBvcykge1xuICAgIGlmICghdGhpcy5lbCB8fCAhdGhpcy5lbC5pc0FjdGl2ZSkgcmV0dXJuO1xuICAgIHRoaXMuZWwuc2VsZWN0KHBvcywgcG9zKTtcbiAgICB0aGlzLl9zYXZlU2VsZWN0aW9uKCk7XG4gIH1cblxuICAvKiogU3RvcmVzIGN1cnJlbnQgc2VsZWN0aW9uICovXG4gIF9zYXZlU2VsZWN0aW9uKCAvKiBldiAqL1xuICApIHtcbiAgICBpZiAodGhpcy5kaXNwbGF5VmFsdWUgIT09IHRoaXMuZWwudmFsdWUpIHtcbiAgICAgIGNvbnNvbGUud2FybignRWxlbWVudCB2YWx1ZSB3YXMgY2hhbmdlZCBvdXRzaWRlIG9mIG1hc2suIFN5bmNyb25pemUgbWFzayB1c2luZyBgbWFzay51cGRhdGVWYWx1ZSgpYCB0byB3b3JrIHByb3Blcmx5LicpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0aW9uID0ge1xuICAgICAgc3RhcnQ6IHRoaXMuc2VsZWN0aW9uU3RhcnQsXG4gICAgICBlbmQ6IHRoaXMuY3Vyc29yUG9zXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBTeW5jcm9uaXplcyBtb2RlbCB2YWx1ZSBmcm9tIHZpZXcgKi9cbiAgdXBkYXRlVmFsdWUoKSB7XG4gICAgdGhpcy5tYXNrZWQudmFsdWUgPSB0aGlzLmVsLnZhbHVlO1xuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5tYXNrZWQudmFsdWU7XG4gICAgdGhpcy5fdW5tYXNrZWRWYWx1ZSA9IHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XG4gICAgdGhpcy5fcmF3SW5wdXRWYWx1ZSA9IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWU7XG4gIH1cblxuICAvKiogU3luY3Jvbml6ZXMgdmlldyBmcm9tIG1vZGVsIHZhbHVlLCBmaXJlcyBjaGFuZ2UgZXZlbnRzICovXG4gIHVwZGF0ZUNvbnRyb2woY3Vyc29yUG9zKSB7XG4gICAgY29uc3QgbmV3VW5tYXNrZWRWYWx1ZSA9IHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLm1hc2tlZC52YWx1ZTtcbiAgICBjb25zdCBuZXdSYXdJbnB1dFZhbHVlID0gdGhpcy5tYXNrZWQucmF3SW5wdXRWYWx1ZTtcbiAgICBjb25zdCBuZXdEaXNwbGF5VmFsdWUgPSB0aGlzLmRpc3BsYXlWYWx1ZTtcbiAgICBjb25zdCBpc0NoYW5nZWQgPSB0aGlzLnVubWFza2VkVmFsdWUgIT09IG5ld1VubWFza2VkVmFsdWUgfHwgdGhpcy52YWx1ZSAhPT0gbmV3VmFsdWUgfHwgdGhpcy5fcmF3SW5wdXRWYWx1ZSAhPT0gbmV3UmF3SW5wdXRWYWx1ZTtcbiAgICB0aGlzLl91bm1hc2tlZFZhbHVlID0gbmV3VW5tYXNrZWRWYWx1ZTtcbiAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMuX3Jhd0lucHV0VmFsdWUgPSBuZXdSYXdJbnB1dFZhbHVlO1xuICAgIGlmICh0aGlzLmVsLnZhbHVlICE9PSBuZXdEaXNwbGF5VmFsdWUpIHRoaXMuZWwudmFsdWUgPSBuZXdEaXNwbGF5VmFsdWU7XG4gICAgaWYgKGN1cnNvclBvcyA9PT0gJ2F1dG8nKSB0aGlzLmFsaWduQ3Vyc29yKCk7ZWxzZSBpZiAoY3Vyc29yUG9zICE9IG51bGwpIHRoaXMuY3Vyc29yUG9zID0gY3Vyc29yUG9zO1xuICAgIGlmIChpc0NoYW5nZWQpIHRoaXMuX2ZpcmVDaGFuZ2VFdmVudHMoKTtcbiAgICBpZiAoIXRoaXMuX2hpc3RvcnlDaGFuZ2luZyAmJiAoaXNDaGFuZ2VkIHx8IHRoaXMuaGlzdG9yeS5pc0VtcHR5KSkgdGhpcy5oaXN0b3J5LnB1c2goe1xuICAgICAgdW5tYXNrZWRWYWx1ZTogbmV3VW5tYXNrZWRWYWx1ZSxcbiAgICAgIHNlbGVjdGlvbjoge1xuICAgICAgICBzdGFydDogdGhpcy5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgZW5kOiB0aGlzLmN1cnNvclBvc1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgb3B0aW9ucyB3aXRoIGRlZXAgZXF1YWwgY2hlY2ssIHJlY3JlYXRlcyB7QGxpbmsgTWFza2VkfSBtb2RlbCBpZiBtYXNrIHR5cGUgY2hhbmdlcyAqL1xuICB1cGRhdGVPcHRpb25zKG9wdHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBtYXNrLFxuICAgICAgLi4ucmVzdE9wdHNcbiAgICB9ID0gb3B0czsgLy8gVE9ETyB0eXBlcywgeWVzLCBtYXNrIGlzIG9wdGlvbmFsXG5cbiAgICBjb25zdCB1cGRhdGVNYXNrID0gIXRoaXMubWFza0VxdWFscyhtYXNrKTtcbiAgICBjb25zdCB1cGRhdGVPcHRzID0gdGhpcy5tYXNrZWQub3B0aW9uc0lzQ2hhbmdlZChyZXN0T3B0cyk7XG4gICAgaWYgKHVwZGF0ZU1hc2spIHRoaXMubWFzayA9IG1hc2s7XG4gICAgaWYgKHVwZGF0ZU9wdHMpIHRoaXMubWFza2VkLnVwZGF0ZU9wdGlvbnMocmVzdE9wdHMpOyAvLyBUT0RPXG5cbiAgICBpZiAodXBkYXRlTWFzayB8fCB1cGRhdGVPcHRzKSB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIGN1cnNvciAqL1xuICB1cGRhdGVDdXJzb3IoY3Vyc29yUG9zKSB7XG4gICAgaWYgKGN1cnNvclBvcyA9PSBudWxsKSByZXR1cm47XG4gICAgdGhpcy5jdXJzb3JQb3MgPSBjdXJzb3JQb3M7XG5cbiAgICAvLyBhbHNvIHF1ZXVlIGNoYW5nZSBjdXJzb3IgZm9yIG1vYmlsZSBicm93c2Vyc1xuICAgIHRoaXMuX2RlbGF5VXBkYXRlQ3Vyc29yKGN1cnNvclBvcyk7XG4gIH1cblxuICAvKiogRGVsYXlzIGN1cnNvciB1cGRhdGUgdG8gc3VwcG9ydCBtb2JpbGUgYnJvd3NlcnMgKi9cbiAgX2RlbGF5VXBkYXRlQ3Vyc29yKGN1cnNvclBvcykge1xuICAgIHRoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7XG4gICAgdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgPSBjdXJzb3JQb3M7XG4gICAgdGhpcy5fY3Vyc29yQ2hhbmdpbmcgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5lbCkgcmV0dXJuOyAvLyBpZiB3YXMgZGVzdHJveWVkXG4gICAgICB0aGlzLmN1cnNvclBvcyA9IHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zO1xuICAgICAgdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcbiAgICB9LCAxMCk7XG4gIH1cblxuICAvKiogRmlyZXMgY3VzdG9tIGV2ZW50cyAqL1xuICBfZmlyZUNoYW5nZUV2ZW50cygpIHtcbiAgICB0aGlzLl9maXJlRXZlbnQoJ2FjY2VwdCcsIHRoaXMuX2lucHV0RXZlbnQpO1xuICAgIGlmICh0aGlzLm1hc2tlZC5pc0NvbXBsZXRlKSB0aGlzLl9maXJlRXZlbnQoJ2NvbXBsZXRlJywgdGhpcy5faW5wdXRFdmVudCk7XG4gIH1cblxuICAvKiogQWJvcnRzIGRlbGF5ZWQgY3Vyc29yIHVwZGF0ZSAqL1xuICBfYWJvcnRVcGRhdGVDdXJzb3IoKSB7XG4gICAgaWYgKHRoaXMuX2N1cnNvckNoYW5naW5nKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fY3Vyc29yQ2hhbmdpbmcpO1xuICAgICAgZGVsZXRlIHRoaXMuX2N1cnNvckNoYW5naW5nO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBBbGlnbnMgY3Vyc29yIHRvIG5lYXJlc3QgYXZhaWxhYmxlIHBvc2l0aW9uICovXG4gIGFsaWduQ3Vyc29yKCkge1xuICAgIHRoaXMuY3Vyc29yUG9zID0gdGhpcy5tYXNrZWQubmVhcmVzdElucHV0UG9zKHRoaXMubWFza2VkLm5lYXJlc3RJbnB1dFBvcyh0aGlzLmN1cnNvclBvcywgRElSRUNUSU9OLkxFRlQpKTtcbiAgfVxuXG4gIC8qKiBBbGlnbnMgY3Vyc29yIG9ubHkgaWYgc2VsZWN0aW9uIGlzIGVtcHR5ICovXG4gIGFsaWduQ3Vyc29yRnJpZW5kbHkoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uU3RhcnQgIT09IHRoaXMuY3Vyc29yUG9zKSByZXR1cm47IC8vIHNraXAgaWYgcmFuZ2UgaXMgc2VsZWN0ZWRcbiAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gIH1cblxuICAvKiogQWRkcyBsaXN0ZW5lciBvbiBjdXN0b20gZXZlbnQgKi9cbiAgb24oZXYsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tldl0pIHRoaXMuX2xpc3RlbmVyc1tldl0gPSBbXTtcbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZdLnB1c2goaGFuZGxlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogUmVtb3ZlcyBjdXN0b20gZXZlbnQgbGlzdGVuZXIgKi9cbiAgb2ZmKGV2LCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZdKSByZXR1cm4gdGhpcztcbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNbZXZdO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbnN0IGhJbmRleCA9IHRoaXMuX2xpc3RlbmVyc1tldl0uaW5kZXhPZihoYW5kbGVyKTtcbiAgICBpZiAoaEluZGV4ID49IDApIHRoaXMuX2xpc3RlbmVyc1tldl0uc3BsaWNlKGhJbmRleCwgMSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogSGFuZGxlcyB2aWV3IGlucHV0IGV2ZW50ICovXG4gIF9vbklucHV0KGUpIHtcbiAgICB0aGlzLl9pbnB1dEV2ZW50ID0gZTtcbiAgICB0aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpO1xuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQWN0aW9uRGV0YWlscyh7XG4gICAgICAvLyBuZXcgc3RhdGVcbiAgICAgIHZhbHVlOiB0aGlzLmVsLnZhbHVlLFxuICAgICAgY3Vyc29yUG9zOiB0aGlzLmN1cnNvclBvcyxcbiAgICAgIC8vIG9sZCBzdGF0ZVxuICAgICAgb2xkVmFsdWU6IHRoaXMuZGlzcGxheVZhbHVlLFxuICAgICAgb2xkU2VsZWN0aW9uOiB0aGlzLl9zZWxlY3Rpb25cbiAgICB9KTtcbiAgICBjb25zdCBvbGRSYXdWYWx1ZSA9IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWU7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5tYXNrZWQuc3BsaWNlKGRldGFpbHMuc3RhcnRDaGFuZ2VQb3MsIGRldGFpbHMucmVtb3ZlZC5sZW5ndGgsIGRldGFpbHMuaW5zZXJ0ZWQsIGRldGFpbHMucmVtb3ZlRGlyZWN0aW9uLCB7XG4gICAgICBpbnB1dDogdHJ1ZSxcbiAgICAgIHJhdzogdHJ1ZVxuICAgIH0pLm9mZnNldDtcblxuICAgIC8vIGZvcmNlIGFsaWduIGluIHJlbW92ZSBkaXJlY3Rpb24gb25seSBpZiBubyBpbnB1dCBjaGFycyB3ZXJlIHJlbW92ZWRcbiAgICAvLyBvdGhlcndpc2Ugd2Ugc3RpbGwgbmVlZCB0byBhbGlnbiB3aXRoIE5PTkUgKHRvIGdldCBvdXQgZnJvbSBmaXhlZCBzeW1ib2xzIGZvciBpbnN0YW5jZSlcbiAgICBjb25zdCByZW1vdmVEaXJlY3Rpb24gPSBvbGRSYXdWYWx1ZSA9PT0gdGhpcy5tYXNrZWQucmF3SW5wdXRWYWx1ZSA/IGRldGFpbHMucmVtb3ZlRGlyZWN0aW9uIDogRElSRUNUSU9OLk5PTkU7XG4gICAgbGV0IGN1cnNvclBvcyA9IHRoaXMubWFza2VkLm5lYXJlc3RJbnB1dFBvcyhkZXRhaWxzLnN0YXJ0Q2hhbmdlUG9zICsgb2Zmc2V0LCByZW1vdmVEaXJlY3Rpb24pO1xuICAgIGlmIChyZW1vdmVEaXJlY3Rpb24gIT09IERJUkVDVElPTi5OT05FKSBjdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBESVJFQ1RJT04uTk9ORSk7XG4gICAgdGhpcy51cGRhdGVDb250cm9sKGN1cnNvclBvcyk7XG4gICAgZGVsZXRlIHRoaXMuX2lucHV0RXZlbnQ7XG4gIH1cblxuICAvKiogSGFuZGxlcyB2aWV3IGNoYW5nZSBldmVudCBhbmQgY29tbWl0cyBtb2RlbCB2YWx1ZSAqL1xuICBfb25DaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuZGlzcGxheVZhbHVlICE9PSB0aGlzLmVsLnZhbHVlKSB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgdGhpcy5tYXNrZWQuZG9Db21taXQoKTtcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICB0aGlzLl9zYXZlU2VsZWN0aW9uKCk7XG4gIH1cblxuICAvKiogSGFuZGxlcyB2aWV3IGRyb3AgZXZlbnQsIHByZXZlbnRzIGJ5IGRlZmF1bHQgKi9cbiAgX29uRHJvcChldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICAvKiogUmVzdG9yZSBsYXN0IHNlbGVjdGlvbiBvbiBmb2N1cyAqL1xuICBfb25Gb2N1cyhldikge1xuICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSgpO1xuICB9XG5cbiAgLyoqIFJlc3RvcmUgbGFzdCBzZWxlY3Rpb24gb24gZm9jdXMgKi9cbiAgX29uQ2xpY2soZXYpIHtcbiAgICB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkoKTtcbiAgfVxuICBfb25VbmRvKCkge1xuICAgIHRoaXMuX2FwcGx5SGlzdG9yeVN0YXRlKHRoaXMuaGlzdG9yeS51bmRvKCkpO1xuICB9XG4gIF9vblJlZG8oKSB7XG4gICAgdGhpcy5fYXBwbHlIaXN0b3J5U3RhdGUodGhpcy5oaXN0b3J5LnJlZG8oKSk7XG4gIH1cbiAgX2FwcGx5SGlzdG9yeVN0YXRlKHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZSkgcmV0dXJuO1xuICAgIHRoaXMuX2hpc3RvcnlDaGFuZ2luZyA9IHRydWU7XG4gICAgdGhpcy51bm1hc2tlZFZhbHVlID0gc3RhdGUudW5tYXNrZWRWYWx1ZTtcbiAgICB0aGlzLmVsLnNlbGVjdChzdGF0ZS5zZWxlY3Rpb24uc3RhcnQsIHN0YXRlLnNlbGVjdGlvbi5lbmQpO1xuICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24oKTtcbiAgICB0aGlzLl9oaXN0b3J5Q2hhbmdpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKiBVbmJpbmQgdmlldyBldmVudHMgYW5kIHJlbW92ZXMgZWxlbWVudCByZWZlcmVuY2UgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLl91bmJpbmRFdmVudHMoKTtcbiAgICB0aGlzLl9saXN0ZW5lcnMubGVuZ3RoID0gMDtcbiAgICBkZWxldGUgdGhpcy5lbDtcbiAgfVxufVxuSU1hc2suSW5wdXRNYXNrID0gSW5wdXRNYXNrO1xuXG5leHBvcnQgeyBJbnB1dE1hc2sgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcblxuLyoqICBHZW5lcmljIGVsZW1lbnQgQVBJIHRvIHVzZSB3aXRoIG1hc2sgKi9cbmNsYXNzIE1hc2tFbGVtZW50IHtcbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqIFNhZmVseSByZXR1cm5zIHNlbGVjdGlvbiBzdGFydCAqL1xuICBnZXQgc2VsZWN0aW9uU3RhcnQoKSB7XG4gICAgbGV0IHN0YXJ0O1xuICAgIHRyeSB7XG4gICAgICBzdGFydCA9IHRoaXMuX3Vuc2FmZVNlbGVjdGlvblN0YXJ0O1xuICAgIH0gY2F0Y2gge31cbiAgICByZXR1cm4gc3RhcnQgIT0gbnVsbCA/IHN0YXJ0IDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gIH1cblxuICAvKiogU2FmZWx5IHJldHVybnMgc2VsZWN0aW9uIGVuZCAqL1xuICBnZXQgc2VsZWN0aW9uRW5kKCkge1xuICAgIGxldCBlbmQ7XG4gICAgdHJ5IHtcbiAgICAgIGVuZCA9IHRoaXMuX3Vuc2FmZVNlbGVjdGlvbkVuZDtcbiAgICB9IGNhdGNoIHt9XG4gICAgcmV0dXJuIGVuZCAhPSBudWxsID8gZW5kIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gIH1cblxuICAvKiogU2FmZWx5IHNldHMgZWxlbWVudCBzZWxlY3Rpb24gKi9cbiAgc2VsZWN0KHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoc3RhcnQgPT0gbnVsbCB8fCBlbmQgPT0gbnVsbCB8fCBzdGFydCA9PT0gdGhpcy5zZWxlY3Rpb25TdGFydCAmJiBlbmQgPT09IHRoaXMuc2VsZWN0aW9uRW5kKSByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKTtcbiAgICB9IGNhdGNoIHt9XG4gIH1cblxuICAvKiogKi9cbiAgZ2V0IGlzQWN0aXZlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cbn1cbklNYXNrLk1hc2tFbGVtZW50ID0gTWFza0VsZW1lbnQ7XG5cbmV4cG9ydCB7IE1hc2tFbGVtZW50IGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKiogUHJvdmlkZXMgZGV0YWlscyBvZiBjaGFuZ2luZyBpbnB1dCAqL1xuY2xhc3MgQWN0aW9uRGV0YWlscyB7XG4gIC8qKiBDdXJyZW50IGlucHV0IHZhbHVlICovXG5cbiAgLyoqIEN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uICovXG5cbiAgLyoqIE9sZCBpbnB1dCB2YWx1ZSAqL1xuXG4gIC8qKiBPbGQgc2VsZWN0aW9uICovXG5cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XG5cbiAgICAvLyBkb3VibGUgY2hlY2sgaWYgbGVmdCBwYXJ0IHdhcyBjaGFuZ2VkIChhdXRvZmlsbGluZywgb3RoZXIgbm9uLXN0YW5kYXJkIGlucHV0IHRyaWdnZXJzKVxuICAgIHdoaWxlICh0aGlzLnZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpICE9PSB0aGlzLm9sZFZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpKSB7XG4gICAgICAtLXRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0O1xuICAgIH1cbiAgICBpZiAodGhpcy5pbnNlcnRlZENvdW50KSB7XG4gICAgICAvLyBkb3VibGUgY2hlY2sgcmlnaHQgcGFydFxuICAgICAgd2hpbGUgKHRoaXMudmFsdWUuc2xpY2UodGhpcy5jdXJzb3JQb3MpICE9PSB0aGlzLm9sZFZhbHVlLnNsaWNlKHRoaXMub2xkU2VsZWN0aW9uLmVuZCkpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoIC0gdGhpcy5jdXJzb3JQb3MgPCB0aGlzLm9sZFZhbHVlLmxlbmd0aCAtIHRoaXMub2xkU2VsZWN0aW9uLmVuZCkgKyt0aGlzLm9sZFNlbGVjdGlvbi5lbmQ7ZWxzZSArK3RoaXMuY3Vyc29yUG9zO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBTdGFydCBjaGFuZ2luZyBwb3NpdGlvbiAqL1xuICBnZXQgc3RhcnRDaGFuZ2VQb3MoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuY3Vyc29yUG9zLCB0aGlzLm9sZFNlbGVjdGlvbi5zdGFydCk7XG4gIH1cblxuICAvKiogSW5zZXJ0ZWQgc3ltYm9scyBjb3VudCAqL1xuICBnZXQgaW5zZXJ0ZWRDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJzb3JQb3MgLSB0aGlzLnN0YXJ0Q2hhbmdlUG9zO1xuICB9XG5cbiAgLyoqIEluc2VydGVkIHN5bWJvbHMgKi9cbiAgZ2V0IGluc2VydGVkKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlLnN1YnN0cih0aGlzLnN0YXJ0Q2hhbmdlUG9zLCB0aGlzLmluc2VydGVkQ291bnQpO1xuICB9XG5cbiAgLyoqIFJlbW92ZWQgc3ltYm9scyBjb3VudCAqL1xuICBnZXQgcmVtb3ZlZENvdW50KCkge1xuICAgIC8vIE1hdGgubWF4IGZvciBvcHBvc2l0ZSBvcGVyYXRpb25cbiAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5vbGRTZWxlY3Rpb24uZW5kIC0gdGhpcy5zdGFydENoYW5nZVBvcyB8fFxuICAgIC8vIGZvciBEZWxldGVcbiAgICB0aGlzLm9sZFZhbHVlLmxlbmd0aCAtIHRoaXMudmFsdWUubGVuZ3RoLCAwKTtcbiAgfVxuXG4gIC8qKiBSZW1vdmVkIHN5bWJvbHMgKi9cbiAgZ2V0IHJlbW92ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2xkVmFsdWUuc3Vic3RyKHRoaXMuc3RhcnRDaGFuZ2VQb3MsIHRoaXMucmVtb3ZlZENvdW50KTtcbiAgfVxuXG4gIC8qKiBVbmNoYW5nZWQgaGVhZCBzeW1ib2xzICovXG4gIGdldCBoZWFkKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlLnN1YnN0cmluZygwLCB0aGlzLnN0YXJ0Q2hhbmdlUG9zKTtcbiAgfVxuXG4gIC8qKiBVbmNoYW5nZWQgdGFpbCBzeW1ib2xzICovXG4gIGdldCB0YWlsKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlLnN1YnN0cmluZyh0aGlzLnN0YXJ0Q2hhbmdlUG9zICsgdGhpcy5pbnNlcnRlZENvdW50KTtcbiAgfVxuXG4gIC8qKiBSZW1vdmUgZGlyZWN0aW9uICovXG4gIGdldCByZW1vdmVEaXJlY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnJlbW92ZWRDb3VudCB8fCB0aGlzLmluc2VydGVkQ291bnQpIHJldHVybiBESVJFQ1RJT04uTk9ORTtcblxuICAgIC8vIGFsaWduIHJpZ2h0IGlmIGRlbGV0ZSBhdCByaWdodFxuICAgIHJldHVybiAodGhpcy5vbGRTZWxlY3Rpb24uZW5kID09PSB0aGlzLmN1cnNvclBvcyB8fCB0aGlzLm9sZFNlbGVjdGlvbi5zdGFydCA9PT0gdGhpcy5jdXJzb3JQb3MpICYmXG4gICAgLy8gaWYgbm90IHJhbmdlIHJlbW92ZWQgKGV2ZW50IHdpdGggYmFja3NwYWNlKVxuICAgIHRoaXMub2xkU2VsZWN0aW9uLmVuZCA9PT0gdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQgPyBESVJFQ1RJT04uUklHSFQgOiBESVJFQ1RJT04uTEVGVDtcbiAgfVxufVxuXG5leHBvcnQgeyBBY3Rpb25EZXRhaWxzIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBJTWFzayBmcm9tICcuL2hvbGRlci5qcyc7XG5cbi8qKiBQcm92aWRlcyBkZXRhaWxzIG9mIGNoYW5naW5nIG1vZGVsIHZhbHVlICovXG5jbGFzcyBDaGFuZ2VEZXRhaWxzIHtcbiAgLyoqIEluc2VydGVkIHN5bWJvbHMgKi9cblxuICAvKiogQWRkaXRpb25hbCBvZmZzZXQgaWYgYW55IGNoYW5nZXMgb2NjdXJyZWQgYmVmb3JlIHRhaWwgKi9cblxuICAvKiogUmF3IGluc2VydGVkIGlzIHVzZWQgYnkgZHluYW1pYyBtYXNrICovXG5cbiAgLyoqIENhbiBza2lwIGNoYXJzICovXG5cbiAgc3RhdGljIG5vcm1hbGl6ZShwcmVwKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocHJlcCkgPyBwcmVwIDogW3ByZXAsIG5ldyBDaGFuZ2VEZXRhaWxzKCldO1xuICB9XG4gIGNvbnN0cnVjdG9yKGRldGFpbHMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgIGluc2VydGVkOiAnJyxcbiAgICAgIHJhd0luc2VydGVkOiAnJyxcbiAgICAgIHRhaWxTaGlmdDogMCxcbiAgICAgIHNraXA6IGZhbHNlXG4gICAgfSwgZGV0YWlscyk7XG4gIH1cblxuICAvKiogQWdncmVnYXRlIGNoYW5nZXMgKi9cbiAgYWdncmVnYXRlKGRldGFpbHMpIHtcbiAgICB0aGlzLmluc2VydGVkICs9IGRldGFpbHMuaW5zZXJ0ZWQ7XG4gICAgdGhpcy5yYXdJbnNlcnRlZCArPSBkZXRhaWxzLnJhd0luc2VydGVkO1xuICAgIHRoaXMudGFpbFNoaWZ0ICs9IGRldGFpbHMudGFpbFNoaWZ0O1xuICAgIHRoaXMuc2tpcCA9IHRoaXMuc2tpcCB8fCBkZXRhaWxzLnNraXA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogVG90YWwgb2Zmc2V0IGNvbnNpZGVyaW5nIGFsbCBjaGFuZ2VzICovXG4gIGdldCBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFpbFNoaWZ0ICsgdGhpcy5pbnNlcnRlZC5sZW5ndGg7XG4gIH1cbiAgZ2V0IGNvbnN1bWVkKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMucmF3SW5zZXJ0ZWQpIHx8IHRoaXMuc2tpcDtcbiAgfVxuICBlcXVhbHMoZGV0YWlscykge1xuICAgIHJldHVybiB0aGlzLmluc2VydGVkID09PSBkZXRhaWxzLmluc2VydGVkICYmIHRoaXMudGFpbFNoaWZ0ID09PSBkZXRhaWxzLnRhaWxTaGlmdCAmJiB0aGlzLnJhd0luc2VydGVkID09PSBkZXRhaWxzLnJhd0luc2VydGVkICYmIHRoaXMuc2tpcCA9PT0gZGV0YWlscy5za2lwO1xuICB9XG59XG5JTWFzay5DaGFuZ2VEZXRhaWxzID0gQ2hhbmdlRGV0YWlscztcblxuZXhwb3J0IHsgQ2hhbmdlRGV0YWlscyBhcyBkZWZhdWx0IH07XG4iLCIvKiogUHJvdmlkZXMgZGV0YWlscyBvZiBjb250aW51b3VzIGV4dHJhY3RlZCB0YWlsICovXG5jbGFzcyBDb250aW51b3VzVGFpbERldGFpbHMge1xuICAvKiogVGFpbCB2YWx1ZSBhcyBzdHJpbmcgKi9cblxuICAvKiogVGFpbCBzdGFydCBwb3NpdGlvbiAqL1xuXG4gIC8qKiBTdGFydCBwb3NpdGlvbiAqL1xuXG4gIGNvbnN0cnVjdG9yKHZhbHVlLCBmcm9tLCBzdG9wKSB7XG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfVxuICAgIGlmIChmcm9tID09PSB2b2lkIDApIHtcbiAgICAgIGZyb20gPSAwO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICB0aGlzLnN0b3AgPSBzdG9wO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG4gIGV4dGVuZCh0YWlsKSB7XG4gICAgdGhpcy52YWx1ZSArPSBTdHJpbmcodGFpbCk7XG4gIH1cbiAgYXBwZW5kVG8obWFza2VkKSB7XG4gICAgcmV0dXJuIG1hc2tlZC5hcHBlbmQodGhpcy50b1N0cmluZygpLCB7XG4gICAgICB0YWlsOiB0cnVlXG4gICAgfSkuYWdncmVnYXRlKG1hc2tlZC5fYXBwZW5kUGxhY2Vob2xkZXIoKSk7XG4gIH1cbiAgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGZyb206IHRoaXMuZnJvbSxcbiAgICAgIHN0b3A6IHRoaXMuc3RvcFxuICAgIH07XG4gIH1cbiAgc2V0IHN0YXRlKHN0YXRlKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XG4gIH1cbiAgdW5zaGlmdChiZWZvcmVQb3MpIHtcbiAgICBpZiAoIXRoaXMudmFsdWUubGVuZ3RoIHx8IGJlZm9yZVBvcyAhPSBudWxsICYmIHRoaXMuZnJvbSA+PSBiZWZvcmVQb3MpIHJldHVybiAnJztcbiAgICBjb25zdCBzaGlmdENoYXIgPSB0aGlzLnZhbHVlWzBdO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDEpO1xuICAgIHJldHVybiBzaGlmdENoYXI7XG4gIH1cbiAgc2hpZnQoKSB7XG4gICAgaWYgKCF0aGlzLnZhbHVlLmxlbmd0aCkgcmV0dXJuICcnO1xuICAgIGNvbnN0IHNoaWZ0Q2hhciA9IHRoaXMudmFsdWVbdGhpcy52YWx1ZS5sZW5ndGggLSAxXTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgcmV0dXJuIHNoaWZ0Q2hhcjtcbiAgfVxufVxuXG5leHBvcnQgeyBDb250aW51b3VzVGFpbERldGFpbHMgYXMgZGVmYXVsdCB9O1xuIiwiLyoqIEFwcGxpZXMgbWFzayBvbiBlbGVtZW50ICovXG5mdW5jdGlvbiBJTWFzayhlbCwgb3B0cykge1xuICAvLyBjdXJyZW50bHkgYXZhaWxhYmxlIG9ubHkgZm9yIGlucHV0LWxpa2UgZWxlbWVudHNcbiAgcmV0dXJuIG5ldyBJTWFzay5JbnB1dE1hc2soZWwsIG9wdHMpO1xufVxuXG5leHBvcnQgeyBJTWFzayBhcyBkZWZhdWx0IH07XG4iLCIvKiogQ2hlY2tzIGlmIHZhbHVlIGlzIHN0cmluZyAqL1xuZnVuY3Rpb24gaXNTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyB8fCBzdHIgaW5zdGFuY2VvZiBTdHJpbmc7XG59XG5cbi8qKiBDaGVja3MgaWYgdmFsdWUgaXMgb2JqZWN0ICovXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgdmFyIF9vYmokY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT0gbnVsbCAmJiAob2JqID09IG51bGwgfHwgKF9vYmokY29uc3RydWN0b3IgPSBvYmouY29uc3RydWN0b3IpID09IG51bGwgPyB2b2lkIDAgOiBfb2JqJGNvbnN0cnVjdG9yLm5hbWUpID09PSAnT2JqZWN0Jztcbn1cbmZ1bmN0aW9uIHBpY2sob2JqLCBrZXlzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGtleXMpKSByZXR1cm4gcGljayhvYmosIChfLCBrKSA9PiBrZXlzLmluY2x1ZGVzKGspKTtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9iaikucmVkdWNlKChhY2MsIF9yZWYpID0+IHtcbiAgICBsZXQgW2ssIHZdID0gX3JlZjtcbiAgICBpZiAoa2V5cyh2LCBrKSkgYWNjW2tdID0gdjtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbi8qKiBEaXJlY3Rpb24gKi9cbmNvbnN0IERJUkVDVElPTiA9IHtcbiAgTk9ORTogJ05PTkUnLFxuICBMRUZUOiAnTEVGVCcsXG4gIEZPUkNFX0xFRlQ6ICdGT1JDRV9MRUZUJyxcbiAgUklHSFQ6ICdSSUdIVCcsXG4gIEZPUkNFX1JJR0hUOiAnRk9SQ0VfUklHSFQnXG59O1xuXG4vKiogRGlyZWN0aW9uICovXG5cbmZ1bmN0aW9uIGZvcmNlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICByZXR1cm4gRElSRUNUSU9OLkZPUkNFX0xFRlQ7XG4gICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICByZXR1cm4gRElSRUNUSU9OLkZPUkNFX1JJR0hUO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG59XG5cbi8qKiBFc2NhcGVzIHJlZ3VsYXIgZXhwcmVzc2lvbiBjb250cm9sIGNoYXJzICovXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFtcXF0vXFxcXF0pL2csICdcXFxcJDEnKTtcbn1cblxuLy8gY2xvbmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Vwb2JlcmV6a2luL2Zhc3QtZGVlcC1lcXVhbCB3aXRoIHNtYWxsIGNoYW5nZXNcbmZ1bmN0aW9uIG9iamVjdEluY2x1ZGVzKGIsIGEpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuICBjb25zdCBhcnJBID0gQXJyYXkuaXNBcnJheShhKSxcbiAgICBhcnJCID0gQXJyYXkuaXNBcnJheShiKTtcbiAgbGV0IGk7XG4gIGlmIChhcnJBICYmIGFyckIpIHtcbiAgICBpZiAoYS5sZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykgaWYgKCFvYmplY3RJbmNsdWRlcyhhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChhcnJBICE9IGFyckIpIHJldHVybiBmYWxzZTtcbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3QgZGF0ZUEgPSBhIGluc3RhbmNlb2YgRGF0ZSxcbiAgICAgIGRhdGVCID0gYiBpbnN0YW5jZW9mIERhdGU7XG4gICAgaWYgKGRhdGVBICYmIGRhdGVCKSByZXR1cm4gYS5nZXRUaW1lKCkgPT0gYi5nZXRUaW1lKCk7XG4gICAgaWYgKGRhdGVBICE9IGRhdGVCKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgcmVnZXhwQSA9IGEgaW5zdGFuY2VvZiBSZWdFeHAsXG4gICAgICByZWdleHBCID0gYiBpbnN0YW5jZW9mIFJlZ0V4cDtcbiAgICBpZiAocmVnZXhwQSAmJiByZWdleHBCKSByZXR1cm4gYS50b1N0cmluZygpID09IGIudG9TdHJpbmcoKTtcbiAgICBpZiAocmVnZXhwQSAhPSByZWdleHBCKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIC8vIGlmIChrZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgaWYgKCFvYmplY3RJbmNsdWRlcyhiW2tleXNbaV1dLCBhW2tleXNbaV1dKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKiBTZWxlY3Rpb24gcmFuZ2UgKi9cblxuZXhwb3J0IHsgRElSRUNUSU9OLCBlc2NhcGVSZWdFeHAsIGZvcmNlRGlyZWN0aW9uLCBpc09iamVjdCwgaXNTdHJpbmcsIG9iamVjdEluY2x1ZGVzLCBwaWNrIH07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIElucHV0TWFzayB9IGZyb20gJy4vY29udHJvbHMvaW5wdXQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4vY29yZS9ob2xkZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2h0bWwtY29udGVudGVkaXRhYmxlLW1hc2stZWxlbWVudC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhUTUxJbnB1dE1hc2tFbGVtZW50IH0gZnJvbSAnLi9jb250cm9scy9odG1sLWlucHV0LW1hc2stZWxlbWVudC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhUTUxNYXNrRWxlbWVudCB9IGZyb20gJy4vY29udHJvbHMvaHRtbC1tYXNrLWVsZW1lbnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrRWxlbWVudCB9IGZyb20gJy4vY29udHJvbHMvbWFzay1lbGVtZW50LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hhbmdlRGV0YWlscyB9IGZyb20gJy4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5leHBvcnQgeyBESVJFQ1RJT04sIGZvcmNlRGlyZWN0aW9uIH0gZnJvbSAnLi9jb3JlL3V0aWxzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkIH0gZnJvbSAnLi9tYXNrZWQvYmFzZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZERhdGUgfSBmcm9tICcuL21hc2tlZC9kYXRlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkRHluYW1pYyB9IGZyb20gJy4vbWFza2VkL2R5bmFtaWMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRFbnVtIH0gZnJvbSAnLi9tYXNrZWQvZW51bS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZU1hc2ssIG5vcm1hbGl6ZU9wdHMgfSBmcm9tICcuL21hc2tlZC9mYWN0b3J5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkRnVuY3Rpb24gfSBmcm9tICcuL21hc2tlZC9mdW5jdGlvbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZE51bWJlciB9IGZyb20gJy4vbWFza2VkL251bWJlci5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZFBhdHRlcm4gfSBmcm9tICcuL21hc2tlZC9wYXR0ZXJuLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2h1bmtzVGFpbERldGFpbHMgfSBmcm9tICcuL21hc2tlZC9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhdHRlcm5GaXhlZERlZmluaXRpb24gfSBmcm9tICcuL21hc2tlZC9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXR0ZXJuSW5wdXREZWZpbml0aW9uIH0gZnJvbSAnLi9tYXNrZWQvcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmV4cG9ydCB7IFBJUEVfVFlQRSwgY3JlYXRlUGlwZSwgcGlwZSB9IGZyb20gJy4vbWFza2VkL3BpcGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRSYW5nZSB9IGZyb20gJy4vbWFza2VkL3JhbmdlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkUmVnRXhwIH0gZnJvbSAnLi9tYXNrZWQvcmVnZXhwLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVwZWF0QmxvY2sgfSBmcm9tICcuL21hc2tlZC9yZXBlYXQuanMnO1xuaW1wb3J0ICcuL2NvcmUvYWN0aW9uLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL2NvbnRyb2xzL2lucHV0LWhpc3RvcnkuanMnO1xuaW1wb3J0ICcuL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL21hc2tlZC9wYXR0ZXJuL2N1cnNvci5qcyc7XG5cbnRyeSB7XG4gIGdsb2JhbFRoaXMuSU1hc2sgPSBJTWFzaztcbn0gY2F0Y2gge31cblxuZXhwb3J0IHsgSU1hc2sgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgQ29udGludW91c1RhaWxEZXRhaWxzIGZyb20gJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0IHsgaXNTdHJpbmcsIERJUkVDVElPTiwgb2JqZWN0SW5jbHVkZXMsIGZvcmNlRGlyZWN0aW9uIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuXG4vKiogQXBwZW5kIGZsYWdzICovXG5cbi8qKiBFeHRyYWN0IGZsYWdzICovXG5cbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzYyMjNcblxuLyoqIFByb3ZpZGVzIGNvbW1vbiBtYXNraW5nIHN0dWZmICovXG5jbGFzcyBNYXNrZWQge1xuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogVHJhbnNmb3JtcyB2YWx1ZSBiZWZvcmUgbWFzayBwcm9jZXNzaW5nICovXG5cbiAgLyoqIFRyYW5zZm9ybXMgZWFjaCBjaGFyIGJlZm9yZSBtYXNrIHByb2Nlc3NpbmcgKi9cblxuICAvKiogVmFsaWRhdGVzIGlmIHZhbHVlIGlzIGFjY2VwdGFibGUgKi9cblxuICAvKiogRG9lcyBhZGRpdGlvbmFsIHByb2Nlc3NpbmcgYXQgdGhlIGVuZCBvZiBlZGl0aW5nICovXG5cbiAgLyoqIEZvcm1hdCB0eXBlZCB2YWx1ZSB0byBzdHJpbmcgKi9cblxuICAvKiogUGFyc2Ugc3RyaW5nIHRvIGdldCB0eXBlZCB2YWx1ZSAqL1xuXG4gIC8qKiBFbmFibGUgY2hhcmFjdGVycyBvdmVyd3JpdGluZyAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIHRoaXMuX3VwZGF0ZSh7XG4gICAgICAuLi5NYXNrZWQuREVGQVVMVFMsXG4gICAgICAuLi5vcHRzXG4gICAgfSk7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqIFNldHMgYW5kIGFwcGxpZXMgbmV3IG9wdGlvbnMgKi9cbiAgdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnNJc0NoYW5nZWQob3B0cykpIHJldHVybjtcbiAgICB0aGlzLndpdGhWYWx1ZVJlZnJlc2godGhpcy5fdXBkYXRlLmJpbmQodGhpcywgb3B0cykpO1xuICB9XG5cbiAgLyoqIFNldHMgbmV3IG9wdGlvbnMgKi9cbiAgX3VwZGF0ZShvcHRzKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRzKTtcbiAgfVxuXG4gIC8qKiBNYXNrIHN0YXRlICovXG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX3ZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgX3Jhd0lucHV0VmFsdWU6IHRoaXMucmF3SW5wdXRWYWx1ZVxuICAgIH07XG4gIH1cbiAgc2V0IHN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5fdmFsdWUgPSBzdGF0ZS5fdmFsdWU7XG4gIH1cblxuICAvKiogUmVzZXRzIHZhbHVlICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnJlc29sdmUodmFsdWUsIHtcbiAgICAgIGlucHV0OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICAvKiogUmVzb2x2ZSBuZXcgdmFsdWUgKi9cbiAgcmVzb2x2ZSh2YWx1ZSwgZmxhZ3MpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7XG4gICAgICAgIGlucHV0OiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5hcHBlbmQodmFsdWUsIGZsYWdzLCAnJyk7XG4gICAgdGhpcy5kb0NvbW1pdCgpO1xuICB9XG4gIGdldCB1bm1hc2tlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG4gIHNldCB1bm1hc2tlZFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5yZXNvbHZlKHZhbHVlLCB7fSk7XG4gIH1cbiAgZ2V0IHR5cGVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2UgPyB0aGlzLnBhcnNlKHRoaXMudmFsdWUsIHRoaXMpIDogdGhpcy51bm1hc2tlZFZhbHVlO1xuICB9XG4gIHNldCB0eXBlZFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0KSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtYXQodmFsdWUsIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVubWFza2VkVmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBWYWx1ZSB0aGF0IGluY2x1ZGVzIHJhdyB1c2VyIGlucHV0ICovXG4gIGdldCByYXdJbnB1dFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmV4dHJhY3RJbnB1dCgwLCB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGgsIHtcbiAgICAgIHJhdzogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIHNldCByYXdJbnB1dFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5yZXNvbHZlKHZhbHVlLCB7XG4gICAgICByYXc6IHRydWVcbiAgICB9KTtcbiAgfVxuICBnZXQgZGlzcGxheVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG4gIGdldCBpc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGdldCBpc0ZpbGxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9XG5cbiAgLyoqIEZpbmRzIG5lYXJlc3QgaW5wdXQgcG9zaXRpb24gaW4gZGlyZWN0aW9uICovXG4gIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MsIGRpcmVjdGlvbikge1xuICAgIHJldHVybiBjdXJzb3JQb3M7XG4gIH1cbiAgdG90YWxJbnB1dFBvc2l0aW9ucyhmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGgsIHRvUG9zIC0gZnJvbVBvcyk7XG4gIH1cblxuICAvKiogRXh0cmFjdHMgdmFsdWUgaW4gcmFuZ2UgY29uc2lkZXJpbmcgZmxhZ3MgKi9cbiAgZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRpc3BsYXlWYWx1ZS5zbGljZShmcm9tUG9zLCB0b1Bvcyk7XG4gIH1cblxuICAvKiogRXh0cmFjdHMgdGFpbCBpbiByYW5nZSAqL1xuICBleHRyYWN0VGFpbChmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKHRoaXMuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zKSwgZnJvbVBvcyk7XG4gIH1cblxuICAvKiogQXBwZW5kcyB0YWlsICovXG4gIGFwcGVuZFRhaWwodGFpbCkge1xuICAgIGlmIChpc1N0cmluZyh0YWlsKSkgdGFpbCA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWwpKTtcbiAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyh0aGlzKTtcbiAgfVxuXG4gIC8qKiBBcHBlbmRzIGNoYXIgKi9cbiAgX2FwcGVuZENoYXJSYXcoY2gsIGZsYWdzKSB7XG4gICAgaWYgKCFjaCkgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgdGhpcy5fdmFsdWUgKz0gY2g7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgIGluc2VydGVkOiBjaCxcbiAgICAgIHJhd0luc2VydGVkOiBjaFxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEFwcGVuZHMgY2hhciAqL1xuICBfYXBwZW5kQ2hhcihjaCwgZmxhZ3MsIGNoZWNrVGFpbCkge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBjb25zaXN0ZW50U3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIGxldCBkZXRhaWxzO1xuICAgIFtjaCwgZGV0YWlsc10gPSB0aGlzLmRvUHJlcGFyZUNoYXIoY2gsIGZsYWdzKTtcbiAgICBpZiAoY2gpIHtcbiAgICAgIGRldGFpbHMgPSBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncykpO1xuXG4gICAgICAvLyBUT0RPIGhhbmRsZSBgc2tpcGA/XG5cbiAgICAgIC8vIHRyeSBgYXV0b2ZpeGAgbG9va2FoZWFkXG4gICAgICBpZiAoIWRldGFpbHMucmF3SW5zZXJ0ZWQgJiYgdGhpcy5hdXRvZml4ID09PSAncGFkJykge1xuICAgICAgICBjb25zdCBub0ZpeFN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGNvbnNpc3RlbnRTdGF0ZTtcbiAgICAgICAgbGV0IGZpeERldGFpbHMgPSB0aGlzLnBhZChmbGFncyk7XG4gICAgICAgIGNvbnN0IGNoRGV0YWlscyA9IHRoaXMuX2FwcGVuZENoYXJSYXcoY2gsIGZsYWdzKTtcbiAgICAgICAgZml4RGV0YWlscyA9IGZpeERldGFpbHMuYWdncmVnYXRlKGNoRGV0YWlscyk7XG5cbiAgICAgICAgLy8gaWYgZml4IHdhcyBhcHBsaWVkIG9yXG4gICAgICAgIC8vIGlmIGRldGFpbHMgYXJlIGVxdWFsIHVzZSBza2lwIHJlc3RvcmluZyBzdGF0ZSBvcHRpbWl6YXRpb25cbiAgICAgICAgaWYgKGNoRGV0YWlscy5yYXdJbnNlcnRlZCB8fCBmaXhEZXRhaWxzLmVxdWFscyhkZXRhaWxzKSkge1xuICAgICAgICAgIGRldGFpbHMgPSBmaXhEZXRhaWxzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBub0ZpeFN0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkZXRhaWxzLmluc2VydGVkKSB7XG4gICAgICBsZXQgY29uc2lzdGVudFRhaWw7XG4gICAgICBsZXQgYXBwZW5kZWQgPSB0aGlzLmRvVmFsaWRhdGUoZmxhZ3MpICE9PSBmYWxzZTtcbiAgICAgIGlmIChhcHBlbmRlZCAmJiBjaGVja1RhaWwgIT0gbnVsbCkge1xuICAgICAgICAvLyB2YWxpZGF0aW9uIG9rLCBjaGVjayB0YWlsXG4gICAgICAgIGNvbnN0IGJlZm9yZVRhaWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmICh0aGlzLm92ZXJ3cml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnNpc3RlbnRUYWlsID0gY2hlY2tUYWlsLnN0YXRlO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGV0YWlscy5yYXdJbnNlcnRlZC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY2hlY2tUYWlsLnVuc2hpZnQodGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoIC0gZGV0YWlscy50YWlsU2hpZnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgdGFpbERldGFpbHMgPSB0aGlzLmFwcGVuZFRhaWwoY2hlY2tUYWlsKTtcbiAgICAgICAgYXBwZW5kZWQgPSB0YWlsRGV0YWlscy5yYXdJbnNlcnRlZC5sZW5ndGggPT09IGNoZWNrVGFpbC50b1N0cmluZygpLmxlbmd0aDtcblxuICAgICAgICAvLyBub3Qgb2ssIHRyeSBzaGlmdFxuICAgICAgICBpZiAoIShhcHBlbmRlZCAmJiB0YWlsRGV0YWlscy5pbnNlcnRlZCkgJiYgdGhpcy5vdmVyd3JpdGUgPT09ICdzaGlmdCcpIHtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gYmVmb3JlVGFpbFN0YXRlO1xuICAgICAgICAgIGNvbnNpc3RlbnRUYWlsID0gY2hlY2tUYWlsLnN0YXRlO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGV0YWlscy5yYXdJbnNlcnRlZC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY2hlY2tUYWlsLnNoaWZ0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhaWxEZXRhaWxzID0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCk7XG4gICAgICAgICAgYXBwZW5kZWQgPSB0YWlsRGV0YWlscy5yYXdJbnNlcnRlZC5sZW5ndGggPT09IGNoZWNrVGFpbC50b1N0cmluZygpLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIG9rLCByb2xsYmFjayBzdGF0ZSBhZnRlciB0YWlsXG4gICAgICAgIGlmIChhcHBlbmRlZCAmJiB0YWlsRGV0YWlscy5pbnNlcnRlZCkgdGhpcy5zdGF0ZSA9IGJlZm9yZVRhaWxTdGF0ZTtcbiAgICAgIH1cblxuICAgICAgLy8gcmV2ZXJ0IGFsbCBpZiBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgaWYgKCFhcHBlbmRlZCkge1xuICAgICAgICBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGNvbnNpc3RlbnRTdGF0ZTtcbiAgICAgICAgaWYgKGNoZWNrVGFpbCAmJiBjb25zaXN0ZW50VGFpbCkgY2hlY2tUYWlsLnN0YXRlID0gY29uc2lzdGVudFRhaWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG5cbiAgLyoqIEFwcGVuZHMgb3B0aW9uYWwgcGxhY2Vob2xkZXIgYXQgdGhlIGVuZCAqL1xuICBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gIH1cblxuICAvKiogQXBwZW5kcyBvcHRpb25hbCBlYWdlciBwbGFjZWhvbGRlciBhdCB0aGUgZW5kICovXG4gIF9hcHBlbmRFYWdlcigpIHtcbiAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgfVxuXG4gIC8qKiBBcHBlbmRzIHN5bWJvbHMgY29uc2lkZXJpbmcgZmxhZ3MgKi9cbiAgYXBwZW5kKHN0ciwgZmxhZ3MsIHRhaWwpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHN0cikpIHRocm93IG5ldyBFcnJvcigndmFsdWUgc2hvdWxkIGJlIHN0cmluZycpO1xuICAgIGNvbnN0IGNoZWNrVGFpbCA9IGlzU3RyaW5nKHRhaWwpID8gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpIDogdGFpbDtcbiAgICBpZiAoZmxhZ3MgIT0gbnVsbCAmJiBmbGFncy50YWlsKSBmbGFncy5fYmVmb3JlVGFpbFN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgZGV0YWlscztcbiAgICBbc3RyLCBkZXRhaWxzXSA9IHRoaXMuZG9QcmVwYXJlKHN0ciwgZmxhZ3MpO1xuICAgIGZvciAobGV0IGNpID0gMDsgY2kgPCBzdHIubGVuZ3RoOyArK2NpKSB7XG4gICAgICBjb25zdCBkID0gdGhpcy5fYXBwZW5kQ2hhcihzdHJbY2ldLCBmbGFncywgY2hlY2tUYWlsKTtcbiAgICAgIGlmICghZC5yYXdJbnNlcnRlZCAmJiAhdGhpcy5kb1NraXBJbnZhbGlkKHN0cltjaV0sIGZsYWdzLCBjaGVja1RhaWwpKSBicmVhaztcbiAgICAgIGRldGFpbHMuYWdncmVnYXRlKGQpO1xuICAgIH1cbiAgICBpZiAoKHRoaXMuZWFnZXIgPT09IHRydWUgfHwgdGhpcy5lYWdlciA9PT0gJ2FwcGVuZCcpICYmIGZsYWdzICE9IG51bGwgJiYgZmxhZ3MuaW5wdXQgJiYgc3RyKSB7XG4gICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBlbmRFYWdlcigpKTtcbiAgICB9XG5cbiAgICAvLyBhcHBlbmQgdGFpbCBidXQgYWdncmVnYXRlIG9ubHkgdGFpbFNoaWZ0XG4gICAgaWYgKGNoZWNrVGFpbCAhPSBudWxsKSB7XG4gICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmFwcGVuZFRhaWwoY2hlY2tUYWlsKS50YWlsU2hpZnQ7XG4gICAgICAvLyBUT0RPIGl0J3MgYSBnb29kIGlkZWEgdG8gY2xlYXIgc3RhdGUgYWZ0ZXIgYXBwZW5kaW5nIGVuZHNcbiAgICAgIC8vIGJ1dCBpdCBjYXVzZXMgYnVncyB3aGVuIG9uZSBhcHBlbmQgY2FsbHMgYW5vdGhlciAod2hlbiBkeW5hbWljIGRpc3BhdGNoIHNldCByYXdJbnB1dFZhbHVlKVxuICAgICAgLy8gdGhpcy5fcmVzZXRCZWZvcmVUYWlsU3RhdGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbiAgcmVtb3ZlKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLmRpc3BsYXlWYWx1ZS5zbGljZSgwLCBmcm9tUG9zKSArIHRoaXMuZGlzcGxheVZhbHVlLnNsaWNlKHRvUG9zKTtcbiAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgfVxuXG4gIC8qKiBDYWxscyBmdW5jdGlvbiBhbmQgcmVhcHBsaWVzIGN1cnJlbnQgdmFsdWUgKi9cbiAgd2l0aFZhbHVlUmVmcmVzaChmbikge1xuICAgIGlmICh0aGlzLl9yZWZyZXNoaW5nIHx8ICF0aGlzLl9pbml0aWFsaXplZCkgcmV0dXJuIGZuKCk7XG4gICAgdGhpcy5fcmVmcmVzaGluZyA9IHRydWU7XG4gICAgY29uc3QgcmF3SW5wdXQgPSB0aGlzLnJhd0lucHV0VmFsdWU7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIGNvbnN0IHJldCA9IGZuKCk7XG4gICAgdGhpcy5yYXdJbnB1dFZhbHVlID0gcmF3SW5wdXQ7XG4gICAgLy8gYXBwZW5kIGxvc3QgdHJhaWxpbmcgY2hhcnMgYXQgdGhlIGVuZFxuICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUgIT09IHZhbHVlICYmIHZhbHVlLmluZGV4T2YodGhpcy52YWx1ZSkgPT09IDApIHtcbiAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLnNsaWNlKHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aCksIHt9LCAnJyk7XG4gICAgICB0aGlzLmRvQ29tbWl0KCk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLl9yZWZyZXNoaW5nO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgcnVuSXNvbGF0ZWQoZm4pIHtcbiAgICBpZiAodGhpcy5faXNvbGF0ZWQgfHwgIXRoaXMuX2luaXRpYWxpemVkKSByZXR1cm4gZm4odGhpcyk7XG4gICAgdGhpcy5faXNvbGF0ZWQgPSB0cnVlO1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCByZXQgPSBmbih0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgZGVsZXRlIHRoaXMuX2lzb2xhdGVkO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgZG9Ta2lwSW52YWxpZChjaCwgZmxhZ3MsIGNoZWNrVGFpbCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuc2tpcEludmFsaWQpO1xuICB9XG5cbiAgLyoqIFByZXBhcmVzIHN0cmluZyBiZWZvcmUgbWFzayBwcm9jZXNzaW5nICovXG4gIGRvUHJlcGFyZShzdHIsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIHJldHVybiBDaGFuZ2VEZXRhaWxzLm5vcm1hbGl6ZSh0aGlzLnByZXBhcmUgPyB0aGlzLnByZXBhcmUoc3RyLCB0aGlzLCBmbGFncykgOiBzdHIpO1xuICB9XG5cbiAgLyoqIFByZXBhcmVzIGVhY2ggY2hhciBiZWZvcmUgbWFzayBwcm9jZXNzaW5nICovXG4gIGRvUHJlcGFyZUNoYXIoc3RyLCBmbGFncykge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gQ2hhbmdlRGV0YWlscy5ub3JtYWxpemUodGhpcy5wcmVwYXJlQ2hhciA/IHRoaXMucHJlcGFyZUNoYXIoc3RyLCB0aGlzLCBmbGFncykgOiBzdHIpO1xuICB9XG5cbiAgLyoqIFZhbGlkYXRlcyBpZiB2YWx1ZSBpcyBhY2NlcHRhYmxlICovXG4gIGRvVmFsaWRhdGUoZmxhZ3MpIHtcbiAgICByZXR1cm4gKCF0aGlzLnZhbGlkYXRlIHx8IHRoaXMudmFsaWRhdGUodGhpcy52YWx1ZSwgdGhpcywgZmxhZ3MpKSAmJiAoIXRoaXMucGFyZW50IHx8IHRoaXMucGFyZW50LmRvVmFsaWRhdGUoZmxhZ3MpKTtcbiAgfVxuXG4gIC8qKiBEb2VzIGFkZGl0aW9uYWwgcHJvY2Vzc2luZyBhdCB0aGUgZW5kIG9mIGVkaXRpbmcgKi9cbiAgZG9Db21taXQoKSB7XG4gICAgaWYgKHRoaXMuY29tbWl0KSB0aGlzLmNvbW1pdCh0aGlzLnZhbHVlLCB0aGlzKTtcbiAgfVxuICBzcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBpbnNlcnRlZCwgcmVtb3ZlRGlyZWN0aW9uLCBmbGFncykge1xuICAgIGlmIChpbnNlcnRlZCA9PT0gdm9pZCAwKSB7XG4gICAgICBpbnNlcnRlZCA9ICcnO1xuICAgIH1cbiAgICBpZiAocmVtb3ZlRGlyZWN0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIHJlbW92ZURpcmVjdGlvbiA9IERJUkVDVElPTi5OT05FO1xuICAgIH1cbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7XG4gICAgICAgIGlucHV0OiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB0YWlsUG9zID0gc3RhcnQgKyBkZWxldGVDb3VudDtcbiAgICBjb25zdCB0YWlsID0gdGhpcy5leHRyYWN0VGFpbCh0YWlsUG9zKTtcbiAgICBjb25zdCBlYWdlclJlbW92ZSA9IHRoaXMuZWFnZXIgPT09IHRydWUgfHwgdGhpcy5lYWdlciA9PT0gJ3JlbW92ZSc7XG4gICAgbGV0IG9sZFJhd1ZhbHVlO1xuICAgIGlmIChlYWdlclJlbW92ZSkge1xuICAgICAgcmVtb3ZlRGlyZWN0aW9uID0gZm9yY2VEaXJlY3Rpb24ocmVtb3ZlRGlyZWN0aW9uKTtcbiAgICAgIG9sZFJhd1ZhbHVlID0gdGhpcy5leHRyYWN0SW5wdXQoMCwgdGFpbFBvcywge1xuICAgICAgICByYXc6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3RhcnRDaGFuZ2VQb3MgPSBzdGFydDtcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcblxuICAgIC8vIGlmIGl0IGlzIGp1c3QgZGVsZXRpb24gd2l0aG91dCBpbnNlcnRpb25cbiAgICBpZiAocmVtb3ZlRGlyZWN0aW9uICE9PSBESVJFQ1RJT04uTk9ORSkge1xuICAgICAgc3RhcnRDaGFuZ2VQb3MgPSB0aGlzLm5lYXJlc3RJbnB1dFBvcyhzdGFydCwgZGVsZXRlQ291bnQgPiAxICYmIHN0YXJ0ICE9PSAwICYmICFlYWdlclJlbW92ZSA/IERJUkVDVElPTi5OT05FIDogcmVtb3ZlRGlyZWN0aW9uKTtcblxuICAgICAgLy8gYWRqdXN0IHRhaWxTaGlmdCBpZiBzdGFydCB3YXMgYWxpZ25lZFxuICAgICAgZGV0YWlscy50YWlsU2hpZnQgPSBzdGFydENoYW5nZVBvcyAtIHN0YXJ0O1xuICAgIH1cbiAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLnJlbW92ZShzdGFydENoYW5nZVBvcykpO1xuICAgIGlmIChlYWdlclJlbW92ZSAmJiByZW1vdmVEaXJlY3Rpb24gIT09IERJUkVDVElPTi5OT05FICYmIG9sZFJhd1ZhbHVlID09PSB0aGlzLnJhd0lucHV0VmFsdWUpIHtcbiAgICAgIGlmIChyZW1vdmVEaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSB7XG4gICAgICAgIGxldCB2YWxMZW5ndGg7XG4gICAgICAgIHdoaWxlIChvbGRSYXdWYWx1ZSA9PT0gdGhpcy5yYXdJbnB1dFZhbHVlICYmICh2YWxMZW5ndGggPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGgpKSB7XG4gICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUobmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgICAgICAgdGFpbFNoaWZ0OiAtMVxuICAgICAgICAgIH0pKS5hZ2dyZWdhdGUodGhpcy5yZW1vdmUodmFsTGVuZ3RoIC0gMSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlbW92ZURpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX1JJR0hUKSB7XG4gICAgICAgIHRhaWwudW5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5hcHBlbmQoaW5zZXJ0ZWQsIGZsYWdzLCB0YWlsKSk7XG4gIH1cbiAgbWFza0VxdWFscyhtYXNrKSB7XG4gICAgcmV0dXJuIHRoaXMubWFzayA9PT0gbWFzaztcbiAgfVxuICBvcHRpb25zSXNDaGFuZ2VkKG9wdHMpIHtcbiAgICByZXR1cm4gIW9iamVjdEluY2x1ZGVzKHRoaXMsIG9wdHMpO1xuICB9XG4gIHR5cGVkVmFsdWVFcXVhbHModmFsdWUpIHtcbiAgICBjb25zdCB0dmFsID0gdGhpcy50eXBlZFZhbHVlO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdHZhbCB8fCBNYXNrZWQuRU1QVFlfVkFMVUVTLmluY2x1ZGVzKHZhbHVlKSAmJiBNYXNrZWQuRU1QVFlfVkFMVUVTLmluY2x1ZGVzKHR2YWwpIHx8ICh0aGlzLmZvcm1hdCA/IHRoaXMuZm9ybWF0KHZhbHVlLCB0aGlzKSA9PT0gdGhpcy5mb3JtYXQodGhpcy50eXBlZFZhbHVlLCB0aGlzKSA6IGZhbHNlKTtcbiAgfVxuICBwYWQoZmxhZ3MpIHtcbiAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgfVxufVxuTWFza2VkLkRFRkFVTFRTID0ge1xuICBza2lwSW52YWxpZDogdHJ1ZVxufTtcbk1hc2tlZC5FTVBUWV9WQUxVRVMgPSBbdW5kZWZpbmVkLCBudWxsLCAnJ107XG5JTWFzay5NYXNrZWQgPSBNYXNrZWQ7XG5cbmV4cG9ydCB7IE1hc2tlZCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgTWFza2VkUGF0dGVybiBmcm9tICcuL3BhdHRlcm4uanMnO1xuaW1wb3J0IE1hc2tlZFJhbmdlIGZyb20gJy4vcmFuZ2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL2Jhc2UuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jdXJzb3IuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9yZWdleHAuanMnO1xuXG5jb25zdCBEZWZhdWx0UGF0dGVybiA9ICdkey59YG17Ln1gWSc7XG5cbi8vIE1ha2UgZm9ybWF0IGFuZCBwYXJzZSByZXF1aXJlZCB3aGVuIHBhdHRlcm4gaXMgcHJvdmlkZWRcblxuLyoqIERhdGUgbWFzayAqL1xuY2xhc3MgTWFza2VkRGF0ZSBleHRlbmRzIE1hc2tlZFBhdHRlcm4ge1xuICBzdGF0aWMgZXh0cmFjdFBhdHRlcm5PcHRpb25zKG9wdHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBtYXNrLFxuICAgICAgcGF0dGVybixcbiAgICAgIC4uLnBhdHRlcm5PcHRzXG4gICAgfSA9IG9wdHM7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnBhdHRlcm5PcHRzLFxuICAgICAgbWFzazogaXNTdHJpbmcobWFzaykgPyBtYXNrIDogcGF0dGVyblxuICAgIH07XG4gIH1cblxuICAvKiogUGF0dGVybiBtYXNrIGZvciBkYXRlIGFjY29yZGluZyB0byB7QGxpbmsgTWFza2VkRGF0ZSNmb3JtYXR9ICovXG5cbiAgLyoqIFN0YXJ0IGRhdGUgKi9cblxuICAvKiogRW5kIGRhdGUgKi9cblxuICAvKiogRm9ybWF0IHR5cGVkIHZhbHVlIHRvIHN0cmluZyAqL1xuXG4gIC8qKiBQYXJzZSBzdHJpbmcgdG8gZ2V0IHR5cGVkIHZhbHVlICovXG5cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKE1hc2tlZERhdGUuZXh0cmFjdFBhdHRlcm5PcHRpb25zKHtcbiAgICAgIC4uLk1hc2tlZERhdGUuREVGQVVMVFMsXG4gICAgICAuLi5vcHRzXG4gICAgfSkpO1xuICB9XG4gIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgIHN1cGVyLnVwZGF0ZU9wdGlvbnMob3B0cyk7XG4gIH1cbiAgX3VwZGF0ZShvcHRzKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWFzayxcbiAgICAgIHBhdHRlcm4sXG4gICAgICBibG9ja3MsXG4gICAgICAuLi5wYXR0ZXJuT3B0c1xuICAgIH0gPSB7XG4gICAgICAuLi5NYXNrZWREYXRlLkRFRkFVTFRTLFxuICAgICAgLi4ub3B0c1xuICAgIH07XG4gICAgY29uc3QgcGF0dGVybkJsb2NrcyA9IE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZERhdGUuR0VUX0RFRkFVTFRfQkxPQ0tTKCkpO1xuICAgIC8vIGFkanVzdCB5ZWFyIGJsb2NrXG4gICAgaWYgKG9wdHMubWluKSBwYXR0ZXJuQmxvY2tzLlkuZnJvbSA9IG9wdHMubWluLmdldEZ1bGxZZWFyKCk7XG4gICAgaWYgKG9wdHMubWF4KSBwYXR0ZXJuQmxvY2tzLlkudG8gPSBvcHRzLm1heC5nZXRGdWxsWWVhcigpO1xuICAgIGlmIChvcHRzLm1pbiAmJiBvcHRzLm1heCAmJiBwYXR0ZXJuQmxvY2tzLlkuZnJvbSA9PT0gcGF0dGVybkJsb2Nrcy5ZLnRvKSB7XG4gICAgICBwYXR0ZXJuQmxvY2tzLm0uZnJvbSA9IG9wdHMubWluLmdldE1vbnRoKCkgKyAxO1xuICAgICAgcGF0dGVybkJsb2Nrcy5tLnRvID0gb3B0cy5tYXguZ2V0TW9udGgoKSArIDE7XG4gICAgICBpZiAocGF0dGVybkJsb2Nrcy5tLmZyb20gPT09IHBhdHRlcm5CbG9ja3MubS50bykge1xuICAgICAgICBwYXR0ZXJuQmxvY2tzLmQuZnJvbSA9IG9wdHMubWluLmdldERhdGUoKTtcbiAgICAgICAgcGF0dGVybkJsb2Nrcy5kLnRvID0gb3B0cy5tYXguZ2V0RGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHBhdHRlcm5CbG9ja3MsIHRoaXMuYmxvY2tzLCBibG9ja3MpO1xuICAgIHN1cGVyLl91cGRhdGUoe1xuICAgICAgLi4ucGF0dGVybk9wdHMsXG4gICAgICBtYXNrOiBpc1N0cmluZyhtYXNrKSA/IG1hc2sgOiBwYXR0ZXJuLFxuICAgICAgYmxvY2tzOiBwYXR0ZXJuQmxvY2tzXG4gICAgfSk7XG4gIH1cbiAgZG9WYWxpZGF0ZShmbGFncykge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGU7XG4gICAgcmV0dXJuIHN1cGVyLmRvVmFsaWRhdGUoZmxhZ3MpICYmICghdGhpcy5pc0NvbXBsZXRlIHx8IHRoaXMuaXNEYXRlRXhpc3QodGhpcy52YWx1ZSkgJiYgZGF0ZSAhPSBudWxsICYmICh0aGlzLm1pbiA9PSBudWxsIHx8IHRoaXMubWluIDw9IGRhdGUpICYmICh0aGlzLm1heCA9PSBudWxsIHx8IGRhdGUgPD0gdGhpcy5tYXgpKTtcbiAgfVxuXG4gIC8qKiBDaGVja3MgaWYgZGF0ZSBpcyBleGlzdHMgKi9cbiAgaXNEYXRlRXhpc3Qoc3RyKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0KHRoaXMucGFyc2Uoc3RyLCB0aGlzKSwgdGhpcykuaW5kZXhPZihzdHIpID49IDA7XG4gIH1cblxuICAvKiogUGFyc2VkIERhdGUgKi9cbiAgZ2V0IGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZWRWYWx1ZTtcbiAgfVxuICBzZXQgZGF0ZShkYXRlKSB7XG4gICAgdGhpcy50eXBlZFZhbHVlID0gZGF0ZTtcbiAgfVxuICBnZXQgdHlwZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlID8gc3VwZXIudHlwZWRWYWx1ZSA6IG51bGw7XG4gIH1cbiAgc2V0IHR5cGVkVmFsdWUodmFsdWUpIHtcbiAgICBzdXBlci50eXBlZFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgbWFza0VxdWFscyhtYXNrKSB7XG4gICAgcmV0dXJuIG1hc2sgPT09IERhdGUgfHwgc3VwZXIubWFza0VxdWFscyhtYXNrKTtcbiAgfVxuICBvcHRpb25zSXNDaGFuZ2VkKG9wdHMpIHtcbiAgICByZXR1cm4gc3VwZXIub3B0aW9uc0lzQ2hhbmdlZChNYXNrZWREYXRlLmV4dHJhY3RQYXR0ZXJuT3B0aW9ucyhvcHRzKSk7XG4gIH1cbn1cbk1hc2tlZERhdGUuR0VUX0RFRkFVTFRfQkxPQ0tTID0gKCkgPT4gKHtcbiAgZDoge1xuICAgIG1hc2s6IE1hc2tlZFJhbmdlLFxuICAgIGZyb206IDEsXG4gICAgdG86IDMxLFxuICAgIG1heExlbmd0aDogMlxuICB9LFxuICBtOiB7XG4gICAgbWFzazogTWFza2VkUmFuZ2UsXG4gICAgZnJvbTogMSxcbiAgICB0bzogMTIsXG4gICAgbWF4TGVuZ3RoOiAyXG4gIH0sXG4gIFk6IHtcbiAgICBtYXNrOiBNYXNrZWRSYW5nZSxcbiAgICBmcm9tOiAxOTAwLFxuICAgIHRvOiA5OTk5XG4gIH1cbn0pO1xuTWFza2VkRGF0ZS5ERUZBVUxUUyA9IHtcbiAgLi4uTWFza2VkUGF0dGVybi5ERUZBVUxUUyxcbiAgbWFzazogRGF0ZSxcbiAgcGF0dGVybjogRGVmYXVsdFBhdHRlcm4sXG4gIGZvcm1hdDogKGRhdGUsIG1hc2tlZCkgPT4ge1xuICAgIGlmICghZGF0ZSkgcmV0dXJuICcnO1xuICAgIGNvbnN0IGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBtb250aCA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIFtkYXksIG1vbnRoLCB5ZWFyXS5qb2luKCcuJyk7XG4gIH0sXG4gIHBhcnNlOiAoc3RyLCBtYXNrZWQpID0+IHtcbiAgICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSBzdHIuc3BsaXQoJy4nKS5tYXAoTnVtYmVyKTtcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xuICB9XG59O1xuSU1hc2suTWFza2VkRGF0ZSA9IE1hc2tlZERhdGU7XG5cbmV4cG9ydCB7IE1hc2tlZERhdGUgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgRElSRUNUSU9OLCBvYmplY3RJbmNsdWRlcyB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgY3JlYXRlTWFzaywgeyBub3JtYWxpemVPcHRzIH0gZnJvbSAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCBNYXNrZWQgZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuXG4vKiogRHluYW1pYyBtYXNrIGZvciBjaG9vc2luZyBhcHByb3ByaWF0ZSBtYXNrIGluIHJ1bi10aW1lICovXG5jbGFzcyBNYXNrZWREeW5hbWljIGV4dGVuZHMgTWFza2VkIHtcbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLk1hc2tlZER5bmFtaWMuREVGQVVMVFMsXG4gICAgICAuLi5vcHRzXG4gICAgfSk7XG4gICAgdGhpcy5jdXJyZW50TWFzayA9IHVuZGVmaW5lZDtcbiAgfVxuICB1cGRhdGVPcHRpb25zKG9wdHMpIHtcbiAgICBzdXBlci51cGRhdGVPcHRpb25zKG9wdHMpO1xuICB9XG4gIF91cGRhdGUob3B0cykge1xuICAgIHN1cGVyLl91cGRhdGUob3B0cyk7XG4gICAgaWYgKCdtYXNrJyBpbiBvcHRzKSB7XG4gICAgICB0aGlzLmV4cG9zZU1hc2sgPSB1bmRlZmluZWQ7XG4gICAgICAvLyBtYXNrIGNvdWxkIGJlIHRvdGFsbHkgZHluYW1pYyB3aXRoIG9ubHkgYGRpc3BhdGNoYCBvcHRpb25cbiAgICAgIHRoaXMuY29tcGlsZWRNYXNrcyA9IEFycmF5LmlzQXJyYXkob3B0cy5tYXNrKSA/IG9wdHMubWFzay5tYXAobSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBleHBvc2UsXG4gICAgICAgICAgLi4ubWFza09wdHNcbiAgICAgICAgfSA9IG5vcm1hbGl6ZU9wdHMobSk7XG4gICAgICAgIGNvbnN0IG1hc2tlZCA9IGNyZWF0ZU1hc2soe1xuICAgICAgICAgIG92ZXJ3cml0ZTogdGhpcy5fb3ZlcndyaXRlLFxuICAgICAgICAgIGVhZ2VyOiB0aGlzLl9lYWdlcixcbiAgICAgICAgICBza2lwSW52YWxpZDogdGhpcy5fc2tpcEludmFsaWQsXG4gICAgICAgICAgLi4ubWFza09wdHNcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChleHBvc2UpIHRoaXMuZXhwb3NlTWFzayA9IG1hc2tlZDtcbiAgICAgICAgcmV0dXJuIG1hc2tlZDtcbiAgICAgIH0pIDogW107XG5cbiAgICAgIC8vIHRoaXMuY3VycmVudE1hc2sgPSB0aGlzLmRvRGlzcGF0Y2goJycpOyAvLyBwcm9iYWJseSBub3QgbmVlZGVkIGJ1dCBsZXRzIHNlZVxuICAgIH1cbiAgfVxuICBfYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgY29uc3QgZGV0YWlscyA9IHRoaXMuX2FwcGx5RGlzcGF0Y2goY2gsIGZsYWdzKTtcbiAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5jdXJyZW50TWFzay5fYXBwZW5kQ2hhcihjaCwgdGhpcy5jdXJyZW50TWFza0ZsYWdzKGZsYWdzKSkpO1xuICAgIH1cbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuICBfYXBwbHlEaXNwYXRjaChhcHBlbmRlZCwgZmxhZ3MsIHRhaWwpIHtcbiAgICBpZiAoYXBwZW5kZWQgPT09IHZvaWQgMCkge1xuICAgICAgYXBwZW5kZWQgPSAnJztcbiAgICB9XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGlmICh0YWlsID09PSB2b2lkIDApIHtcbiAgICAgIHRhaWwgPSAnJztcbiAgICB9XG4gICAgY29uc3QgcHJldlZhbHVlQmVmb3JlVGFpbCA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSAhPSBudWxsID8gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOiB0aGlzLnZhbHVlO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLnJhd0lucHV0VmFsdWU7XG4gICAgY29uc3QgaW5zZXJ0VmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgIT0gbnVsbCA/IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3Jhd0lucHV0VmFsdWUgOiBpbnB1dFZhbHVlO1xuICAgIGNvbnN0IHRhaWxWYWx1ZSA9IGlucHV0VmFsdWUuc2xpY2UoaW5zZXJ0VmFsdWUubGVuZ3RoKTtcbiAgICBjb25zdCBwcmV2TWFzayA9IHRoaXMuY3VycmVudE1hc2s7XG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgY29uc3QgcHJldk1hc2tTdGF0ZSA9IHByZXZNYXNrID09IG51bGwgPyB2b2lkIDAgOiBwcmV2TWFzay5zdGF0ZTtcblxuICAgIC8vIGNsb25lIGZsYWdzIHRvIHByZXZlbnQgb3ZlcndyaXRpbmcgYF9iZWZvcmVUYWlsU3RhdGVgXG4gICAgdGhpcy5jdXJyZW50TWFzayA9IHRoaXMuZG9EaXNwYXRjaChhcHBlbmRlZCwge1xuICAgICAgLi4uZmxhZ3NcbiAgICB9LCB0YWlsKTtcblxuICAgIC8vIHJlc3RvcmUgc3RhdGUgYWZ0ZXIgZGlzcGF0Y2hcbiAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2sgIT09IHByZXZNYXNrKSB7XG4gICAgICAgIC8vIGlmIG1hc2sgY2hhbmdlZCByZWFwcGx5IGlucHV0XG4gICAgICAgIHRoaXMuY3VycmVudE1hc2sucmVzZXQoKTtcbiAgICAgICAgaWYgKGluc2VydFZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50TWFzay5hcHBlbmQoaW5zZXJ0VmFsdWUsIHtcbiAgICAgICAgICAgIHJhdzogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ID0gdGhpcy5jdXJyZW50TWFzay52YWx1ZS5sZW5ndGggLSBwcmV2VmFsdWVCZWZvcmVUYWlsLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFpbFZhbHVlKSB7XG4gICAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5jdXJyZW50TWFzay5hcHBlbmQodGFpbFZhbHVlLCB7XG4gICAgICAgICAgICByYXc6IHRydWUsXG4gICAgICAgICAgICB0YWlsOiB0cnVlXG4gICAgICAgICAgfSkudGFpbFNoaWZ0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHByZXZNYXNrU3RhdGUpIHtcbiAgICAgICAgLy8gRGlzcGF0Y2ggY2FuIGRvIHNvbWV0aGluZyBiYWQgd2l0aCBzdGF0ZSwgc29cbiAgICAgICAgLy8gcmVzdG9yZSBwcmV2IG1hc2sgc3RhdGVcbiAgICAgICAgdGhpcy5jdXJyZW50TWFzay5zdGF0ZSA9IHByZXZNYXNrU3RhdGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICBjb25zdCBkZXRhaWxzID0gdGhpcy5fYXBwbHlEaXNwYXRjaCgpO1xuICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrLl9hcHBlbmRQbGFjZWhvbGRlcigpKTtcbiAgICB9XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbiAgX2FwcGVuZEVhZ2VyKCkge1xuICAgIGNvbnN0IGRldGFpbHMgPSB0aGlzLl9hcHBseURpc3BhdGNoKCk7XG4gICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuY3VycmVudE1hc2suX2FwcGVuZEVhZ2VyKCkpO1xuICAgIH1cbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuICBhcHBlbmRUYWlsKHRhaWwpIHtcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICBpZiAodGFpbCkgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5fYXBwbHlEaXNwYXRjaCgnJywge30sIHRhaWwpKTtcbiAgICByZXR1cm4gZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2suYXBwZW5kVGFpbCh0YWlsKSA6IHN1cGVyLmFwcGVuZFRhaWwodGFpbCkpO1xuICB9XG4gIGN1cnJlbnRNYXNrRmxhZ3MoZmxhZ3MpIHtcbiAgICB2YXIgX2ZsYWdzJF9iZWZvcmVUYWlsU3RhLCBfZmxhZ3MkX2JlZm9yZVRhaWxTdGEyO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5mbGFncyxcbiAgICAgIF9iZWZvcmVUYWlsU3RhdGU6ICgoX2ZsYWdzJF9iZWZvcmVUYWlsU3RhID0gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9mbGFncyRfYmVmb3JlVGFpbFN0YS5jdXJyZW50TWFza1JlZikgPT09IHRoaXMuY3VycmVudE1hc2sgJiYgKChfZmxhZ3MkX2JlZm9yZVRhaWxTdGEyID0gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9mbGFncyRfYmVmb3JlVGFpbFN0YTIuY3VycmVudE1hc2spIHx8IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGVcbiAgICB9O1xuICB9XG4gIGRvRGlzcGF0Y2goYXBwZW5kZWQsIGZsYWdzLCB0YWlsKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGlmICh0YWlsID09PSB2b2lkIDApIHtcbiAgICAgIHRhaWwgPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goYXBwZW5kZWQsIHRoaXMsIGZsYWdzLCB0YWlsKTtcbiAgfVxuICBkb1ZhbGlkYXRlKGZsYWdzKSB7XG4gICAgcmV0dXJuIHN1cGVyLmRvVmFsaWRhdGUoZmxhZ3MpICYmICghdGhpcy5jdXJyZW50TWFzayB8fCB0aGlzLmN1cnJlbnRNYXNrLmRvVmFsaWRhdGUodGhpcy5jdXJyZW50TWFza0ZsYWdzKGZsYWdzKSkpO1xuICB9XG4gIGRvUHJlcGFyZShzdHIsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGxldCBbcywgZGV0YWlsc10gPSBzdXBlci5kb1ByZXBhcmUoc3RyLCBmbGFncyk7XG4gICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgIGxldCBjdXJyZW50RGV0YWlscztcbiAgICAgIFtzLCBjdXJyZW50RGV0YWlsc10gPSBzdXBlci5kb1ByZXBhcmUocywgdGhpcy5jdXJyZW50TWFza0ZsYWdzKGZsYWdzKSk7XG4gICAgICBkZXRhaWxzID0gZGV0YWlscy5hZ2dyZWdhdGUoY3VycmVudERldGFpbHMpO1xuICAgIH1cbiAgICByZXR1cm4gW3MsIGRldGFpbHNdO1xuICB9XG4gIGRvUHJlcGFyZUNoYXIoc3RyLCBmbGFncykge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBsZXQgW3MsIGRldGFpbHNdID0gc3VwZXIuZG9QcmVwYXJlQ2hhcihzdHIsIGZsYWdzKTtcbiAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgbGV0IGN1cnJlbnREZXRhaWxzO1xuICAgICAgW3MsIGN1cnJlbnREZXRhaWxzXSA9IHN1cGVyLmRvUHJlcGFyZUNoYXIocywgdGhpcy5jdXJyZW50TWFza0ZsYWdzKGZsYWdzKSk7XG4gICAgICBkZXRhaWxzID0gZGV0YWlscy5hZ2dyZWdhdGUoY3VycmVudERldGFpbHMpO1xuICAgIH1cbiAgICByZXR1cm4gW3MsIGRldGFpbHNdO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIHZhciBfdGhpcyRjdXJyZW50TWFzaztcbiAgICAoX3RoaXMkY3VycmVudE1hc2sgPSB0aGlzLmN1cnJlbnRNYXNrKSA9PSBudWxsIHx8IF90aGlzJGN1cnJlbnRNYXNrLnJlc2V0KCk7XG4gICAgdGhpcy5jb21waWxlZE1hc2tzLmZvckVhY2gobSA9PiBtLnJlc2V0KCkpO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5leHBvc2VNYXNrID8gdGhpcy5leHBvc2VNYXNrLnZhbHVlIDogdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudmFsdWUgOiAnJztcbiAgfVxuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5leHBvc2VNYXNrKSB7XG4gICAgICB0aGlzLmV4cG9zZU1hc2sudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuY3VycmVudE1hc2sgPSB0aGlzLmV4cG9zZU1hc2s7XG4gICAgICB0aGlzLl9hcHBseURpc3BhdGNoKCk7XG4gICAgfSBlbHNlIHN1cGVyLnZhbHVlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVubWFza2VkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwb3NlTWFzayA/IHRoaXMuZXhwb3NlTWFzay51bm1hc2tlZFZhbHVlIDogdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudW5tYXNrZWRWYWx1ZSA6ICcnO1xuICB9XG4gIHNldCB1bm1hc2tlZFZhbHVlKHVubWFza2VkVmFsdWUpIHtcbiAgICBpZiAodGhpcy5leHBvc2VNYXNrKSB7XG4gICAgICB0aGlzLmV4cG9zZU1hc2sudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkVmFsdWU7XG4gICAgICB0aGlzLmN1cnJlbnRNYXNrID0gdGhpcy5leHBvc2VNYXNrO1xuICAgICAgdGhpcy5fYXBwbHlEaXNwYXRjaCgpO1xuICAgIH0gZWxzZSBzdXBlci51bm1hc2tlZFZhbHVlID0gdW5tYXNrZWRWYWx1ZTtcbiAgfVxuICBnZXQgdHlwZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5leHBvc2VNYXNrID8gdGhpcy5leHBvc2VNYXNrLnR5cGVkVmFsdWUgOiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay50eXBlZFZhbHVlIDogJyc7XG4gIH1cbiAgc2V0IHR5cGVkVmFsdWUodHlwZWRWYWx1ZSkge1xuICAgIGlmICh0aGlzLmV4cG9zZU1hc2spIHtcbiAgICAgIHRoaXMuZXhwb3NlTWFzay50eXBlZFZhbHVlID0gdHlwZWRWYWx1ZTtcbiAgICAgIHRoaXMuY3VycmVudE1hc2sgPSB0aGlzLmV4cG9zZU1hc2s7XG4gICAgICB0aGlzLl9hcHBseURpc3BhdGNoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB1bm1hc2tlZFZhbHVlID0gU3RyaW5nKHR5cGVkVmFsdWUpO1xuXG4gICAgLy8gZG91YmxlIGNoZWNrIGl0XG4gICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgIHRoaXMuY3VycmVudE1hc2sudHlwZWRWYWx1ZSA9IHR5cGVkVmFsdWU7XG4gICAgICB1bm1hc2tlZFZhbHVlID0gdGhpcy5jdXJyZW50TWFzay51bm1hc2tlZFZhbHVlO1xuICAgIH1cbiAgICB0aGlzLnVubWFza2VkVmFsdWUgPSB1bm1hc2tlZFZhbHVlO1xuICB9XG4gIGdldCBkaXNwbGF5VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLmRpc3BsYXlWYWx1ZSA6ICcnO1xuICB9XG4gIGdldCBpc0NvbXBsZXRlKCkge1xuICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazI7XG4gICAgcmV0dXJuIEJvb2xlYW4oKF90aGlzJGN1cnJlbnRNYXNrMiA9IHRoaXMuY3VycmVudE1hc2spID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRjdXJyZW50TWFzazIuaXNDb21wbGV0ZSk7XG4gIH1cbiAgZ2V0IGlzRmlsbGVkKCkge1xuICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazM7XG4gICAgcmV0dXJuIEJvb2xlYW4oKF90aGlzJGN1cnJlbnRNYXNrMyA9IHRoaXMuY3VycmVudE1hc2spID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRjdXJyZW50TWFzazMuaXNGaWxsZWQpO1xuICB9XG4gIHJlbW92ZShmcm9tUG9zLCB0b1Bvcykge1xuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrLnJlbW92ZShmcm9tUG9zLCB0b1BvcykpXG4gICAgICAvLyB1cGRhdGUgd2l0aCBkaXNwYXRjaFxuICAgICAgLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBseURpc3BhdGNoKCkpO1xuICAgIH1cbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuICBnZXQgc3RhdGUoKSB7XG4gICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrNDtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIuc3RhdGUsXG4gICAgICBfcmF3SW5wdXRWYWx1ZTogdGhpcy5yYXdJbnB1dFZhbHVlLFxuICAgICAgY29tcGlsZWRNYXNrczogdGhpcy5jb21waWxlZE1hc2tzLm1hcChtID0+IG0uc3RhdGUpLFxuICAgICAgY3VycmVudE1hc2tSZWY6IHRoaXMuY3VycmVudE1hc2ssXG4gICAgICBjdXJyZW50TWFzazogKF90aGlzJGN1cnJlbnRNYXNrNCA9IHRoaXMuY3VycmVudE1hc2spID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRjdXJyZW50TWFzazQuc3RhdGVcbiAgICB9O1xuICB9XG4gIHNldCBzdGF0ZShzdGF0ZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbXBpbGVkTWFza3MsXG4gICAgICBjdXJyZW50TWFza1JlZixcbiAgICAgIGN1cnJlbnRNYXNrLFxuICAgICAgLi4ubWFza2VkU3RhdGVcbiAgICB9ID0gc3RhdGU7XG4gICAgaWYgKGNvbXBpbGVkTWFza3MpIHRoaXMuY29tcGlsZWRNYXNrcy5mb3JFYWNoKChtLCBtaSkgPT4gbS5zdGF0ZSA9IGNvbXBpbGVkTWFza3NbbWldKTtcbiAgICBpZiAoY3VycmVudE1hc2tSZWYgIT0gbnVsbCkge1xuICAgICAgdGhpcy5jdXJyZW50TWFzayA9IGN1cnJlbnRNYXNrUmVmO1xuICAgICAgdGhpcy5jdXJyZW50TWFzay5zdGF0ZSA9IGN1cnJlbnRNYXNrO1xuICAgIH1cbiAgICBzdXBlci5zdGF0ZSA9IG1hc2tlZFN0YXRlO1xuICB9XG4gIGV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2suZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncykgOiAnJztcbiAgfVxuICBleHRyYWN0VGFpbChmcm9tUG9zLCB0b1Bvcykge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay5leHRyYWN0VGFpbChmcm9tUG9zLCB0b1BvcykgOiBzdXBlci5leHRyYWN0VGFpbChmcm9tUG9zLCB0b1Bvcyk7XG4gIH1cbiAgZG9Db21taXQoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHRoaXMuY3VycmVudE1hc2suZG9Db21taXQoKTtcbiAgICBzdXBlci5kb0NvbW1pdCgpO1xuICB9XG4gIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MsIGRpcmVjdGlvbikge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay5uZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIDogc3VwZXIubmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKTtcbiAgfVxuICBnZXQgb3ZlcndyaXRlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay5vdmVyd3JpdGUgOiB0aGlzLl9vdmVyd3JpdGU7XG4gIH1cbiAgc2V0IG92ZXJ3cml0ZShvdmVyd3JpdGUpIHtcbiAgICB0aGlzLl9vdmVyd3JpdGUgPSBvdmVyd3JpdGU7XG4gIH1cbiAgZ2V0IGVhZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay5lYWdlciA6IHRoaXMuX2VhZ2VyO1xuICB9XG4gIHNldCBlYWdlcihlYWdlcikge1xuICAgIHRoaXMuX2VhZ2VyID0gZWFnZXI7XG4gIH1cbiAgZ2V0IHNraXBJbnZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay5za2lwSW52YWxpZCA6IHRoaXMuX3NraXBJbnZhbGlkO1xuICB9XG4gIHNldCBza2lwSW52YWxpZChza2lwSW52YWxpZCkge1xuICAgIHRoaXMuX3NraXBJbnZhbGlkID0gc2tpcEludmFsaWQ7XG4gIH1cbiAgZ2V0IGF1dG9maXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLmF1dG9maXggOiB0aGlzLl9hdXRvZml4O1xuICB9XG4gIHNldCBhdXRvZml4KGF1dG9maXgpIHtcbiAgICB0aGlzLl9hdXRvZml4ID0gYXV0b2ZpeDtcbiAgfVxuICBtYXNrRXF1YWxzKG1hc2spIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShtYXNrKSA/IHRoaXMuY29tcGlsZWRNYXNrcy5ldmVyeSgobSwgbWkpID0+IHtcbiAgICAgIGlmICghbWFza1ttaV0pIHJldHVybjtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWFzazogb2xkTWFzayxcbiAgICAgICAgLi4ucmVzdE9wdHNcbiAgICAgIH0gPSBtYXNrW21pXTtcbiAgICAgIHJldHVybiBvYmplY3RJbmNsdWRlcyhtLCByZXN0T3B0cykgJiYgbS5tYXNrRXF1YWxzKG9sZE1hc2spO1xuICAgIH0pIDogc3VwZXIubWFza0VxdWFscyhtYXNrKTtcbiAgfVxuICB0eXBlZFZhbHVlRXF1YWxzKHZhbHVlKSB7XG4gICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrNTtcbiAgICByZXR1cm4gQm9vbGVhbigoX3RoaXMkY3VycmVudE1hc2s1ID0gdGhpcy5jdXJyZW50TWFzaykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJGN1cnJlbnRNYXNrNS50eXBlZFZhbHVlRXF1YWxzKHZhbHVlKSk7XG4gIH1cbn1cbi8qKiBDdXJyZW50bHkgY2hvc2VuIG1hc2sgKi9cbi8qKiBDdXJyZW50bHkgY2hvc2VuIG1hc2sgKi9cbi8qKiBDb21wbGlsZWQge0BsaW5rIE1hc2tlZH0gb3B0aW9ucyAqL1xuLyoqIENob29zZXMge0BsaW5rIE1hc2tlZH0gZGVwZW5kaW5nIG9uIGlucHV0IHZhbHVlICovXG5NYXNrZWREeW5hbWljLkRFRkFVTFRTID0ge1xuICAuLi5NYXNrZWQuREVGQVVMVFMsXG4gIGRpc3BhdGNoOiAoYXBwZW5kZWQsIG1hc2tlZCwgZmxhZ3MsIHRhaWwpID0+IHtcbiAgICBpZiAoIW1hc2tlZC5jb21waWxlZE1hc2tzLmxlbmd0aCkgcmV0dXJuO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBtYXNrZWQucmF3SW5wdXRWYWx1ZTtcblxuICAgIC8vIHNpbXVsYXRlIGlucHV0XG4gICAgY29uc3QgaW5wdXRzID0gbWFza2VkLmNvbXBpbGVkTWFza3MubWFwKChtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaXNDdXJyZW50ID0gbWFza2VkLmN1cnJlbnRNYXNrID09PSBtO1xuICAgICAgY29uc3Qgc3RhcnRJbnB1dFBvcyA9IGlzQ3VycmVudCA/IG0uZGlzcGxheVZhbHVlLmxlbmd0aCA6IG0ubmVhcmVzdElucHV0UG9zKG0uZGlzcGxheVZhbHVlLmxlbmd0aCwgRElSRUNUSU9OLkZPUkNFX0xFRlQpO1xuICAgICAgaWYgKG0ucmF3SW5wdXRWYWx1ZSAhPT0gaW5wdXRWYWx1ZSkge1xuICAgICAgICBtLnJlc2V0KCk7XG4gICAgICAgIG0uYXBwZW5kKGlucHV0VmFsdWUsIHtcbiAgICAgICAgICByYXc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCFpc0N1cnJlbnQpIHtcbiAgICAgICAgbS5yZW1vdmUoc3RhcnRJbnB1dFBvcyk7XG4gICAgICB9XG4gICAgICBtLmFwcGVuZChhcHBlbmRlZCwgbWFza2VkLmN1cnJlbnRNYXNrRmxhZ3MoZmxhZ3MpKTtcbiAgICAgIG0uYXBwZW5kVGFpbCh0YWlsKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4LFxuICAgICAgICB3ZWlnaHQ6IG0ucmF3SW5wdXRWYWx1ZS5sZW5ndGgsXG4gICAgICAgIHRvdGFsSW5wdXRQb3NpdGlvbnM6IG0udG90YWxJbnB1dFBvc2l0aW9ucygwLCBNYXRoLm1heChzdGFydElucHV0UG9zLCBtLm5lYXJlc3RJbnB1dFBvcyhtLmRpc3BsYXlWYWx1ZS5sZW5ndGgsIERJUkVDVElPTi5GT1JDRV9MRUZUKSkpXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgLy8gcG9wIG1hc2tzIHdpdGggbG9uZ2VyIHZhbHVlcyBmaXJzdFxuICAgIGlucHV0cy5zb3J0KChpMSwgaTIpID0+IGkyLndlaWdodCAtIGkxLndlaWdodCB8fCBpMi50b3RhbElucHV0UG9zaXRpb25zIC0gaTEudG90YWxJbnB1dFBvc2l0aW9ucyk7XG4gICAgcmV0dXJuIG1hc2tlZC5jb21waWxlZE1hc2tzW2lucHV0c1swXS5pbmRleF07XG4gIH1cbn07XG5JTWFzay5NYXNrZWREeW5hbWljID0gTWFza2VkRHluYW1pYztcblxuZXhwb3J0IHsgTWFza2VkRHluYW1pYyBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgTWFza2VkUGF0dGVybiBmcm9tICcuL3BhdHRlcm4uanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgQ29udGludW91c1RhaWxEZXRhaWxzIGZyb20gJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL2Jhc2UuanMnO1xuaW1wb3J0ICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2N1cnNvci5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL3JlZ2V4cC5qcyc7XG5cbi8qKiBQYXR0ZXJuIHdoaWNoIHZhbGlkYXRlcyBlbnVtIHZhbHVlcyAqL1xuY2xhc3MgTWFza2VkRW51bSBleHRlbmRzIE1hc2tlZFBhdHRlcm4ge1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4uTWFza2VkRW51bS5ERUZBVUxUUyxcbiAgICAgIC4uLm9wdHNcbiAgICB9KTsgLy8gbWFzayB3aWxsIGJlIGNyZWF0ZWQgaW4gX3VwZGF0ZVxuICB9XG4gIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgIHN1cGVyLnVwZGF0ZU9wdGlvbnMob3B0cyk7XG4gIH1cbiAgX3VwZGF0ZShvcHRzKSB7XG4gICAgY29uc3Qge1xuICAgICAgZW51bTogZW51bV8sXG4gICAgICAuLi5lb3B0c1xuICAgIH0gPSBvcHRzO1xuICAgIGlmIChlbnVtXykge1xuICAgICAgY29uc3QgbGVuZ3RocyA9IGVudW1fLm1hcChlID0+IGUubGVuZ3RoKTtcbiAgICAgIGNvbnN0IHJlcXVpcmVkTGVuZ3RoID0gTWF0aC5taW4oLi4ubGVuZ3Rocyk7XG4gICAgICBjb25zdCBvcHRpb25hbExlbmd0aCA9IE1hdGgubWF4KC4uLmxlbmd0aHMpIC0gcmVxdWlyZWRMZW5ndGg7XG4gICAgICBlb3B0cy5tYXNrID0gJyonLnJlcGVhdChyZXF1aXJlZExlbmd0aCk7XG4gICAgICBpZiAob3B0aW9uYWxMZW5ndGgpIGVvcHRzLm1hc2sgKz0gJ1snICsgJyonLnJlcGVhdChvcHRpb25hbExlbmd0aCkgKyAnXSc7XG4gICAgICB0aGlzLmVudW0gPSBlbnVtXztcbiAgICB9XG4gICAgc3VwZXIuX3VwZGF0ZShlb3B0cyk7XG4gIH1cbiAgX2FwcGVuZENoYXJSYXcoY2gsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoRnJvbSA9IE1hdGgubWluKHRoaXMubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5GT1JDRV9SSUdIVCksIHRoaXMudmFsdWUubGVuZ3RoKTtcbiAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5lbnVtLmZpbHRlcihlID0+IHRoaXMubWF0Y2hWYWx1ZShlLCB0aGlzLnVubWFza2VkVmFsdWUgKyBjaCwgbWF0Y2hGcm9tKSk7XG4gICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoMCwgdGhpcy52YWx1ZS5sZW5ndGgsIChiLCBiaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG1jaCA9IG1hdGNoZXNbMF1bYmldO1xuICAgICAgICAgIGlmIChiaSA+PSB0aGlzLnZhbHVlLmxlbmd0aCB8fCBtY2ggPT09IGIudmFsdWUpIHJldHVybjtcbiAgICAgICAgICBiLnJlc2V0KCk7XG4gICAgICAgICAgYi5fYXBwZW5kQ2hhcihtY2gsIGZsYWdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjb25zdCBkID0gc3VwZXIuX2FwcGVuZENoYXJSYXcobWF0Y2hlc1swXVt0aGlzLnZhbHVlLmxlbmd0aF0sIGZsYWdzKTtcbiAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBtYXRjaGVzWzBdLnNsaWNlKHRoaXMudW5tYXNrZWRWYWx1ZS5sZW5ndGgpLnNwbGl0KCcnKS5mb3JFYWNoKG1jaCA9PiBkLmFnZ3JlZ2F0ZShzdXBlci5fYXBwZW5kQ2hhclJhdyhtY2gpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgIHNraXA6ICF0aGlzLmlzQ29tcGxldGVcbiAgICB9KTtcbiAgfVxuICBleHRyYWN0VGFpbChmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIC8vIGp1c3QgZHJvcCB0YWlsXG4gICAgcmV0dXJuIG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoJycsIGZyb21Qb3MpO1xuICB9XG4gIHJlbW92ZShmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGlmIChmcm9tUG9zID09PSB0b1BvcykgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgY29uc3QgbWF0Y2hGcm9tID0gTWF0aC5taW4oc3VwZXIubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5GT1JDRV9SSUdIVCksIHRoaXMudmFsdWUubGVuZ3RoKTtcbiAgICBsZXQgcG9zO1xuICAgIGZvciAocG9zID0gZnJvbVBvczsgcG9zID49IDA7IC0tcG9zKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5lbnVtLmZpbHRlcihlID0+IHRoaXMubWF0Y2hWYWx1ZShlLCB0aGlzLnZhbHVlLnNsaWNlKG1hdGNoRnJvbSwgcG9zKSwgbWF0Y2hGcm9tKSk7XG4gICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAxKSBicmVhaztcbiAgICB9XG4gICAgY29uc3QgZGV0YWlscyA9IHN1cGVyLnJlbW92ZShwb3MsIHRvUG9zKTtcbiAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSBwb3MgLSBmcm9tUG9zO1xuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIGdldCBpc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmVudW0uaW5kZXhPZih0aGlzLnZhbHVlKSA+PSAwO1xuICB9XG59XG4vKiogTWF0Y2ggZW51bSB2YWx1ZSAqL1xuTWFza2VkRW51bS5ERUZBVUxUUyA9IHtcbiAgLi4uTWFza2VkUGF0dGVybi5ERUZBVUxUUyxcbiAgbWF0Y2hWYWx1ZTogKGVzdHIsIGlzdHIsIG1hdGNoRnJvbSkgPT4gZXN0ci5pbmRleE9mKGlzdHIsIG1hdGNoRnJvbSkgPT09IG1hdGNoRnJvbVxufTtcbklNYXNrLk1hc2tlZEVudW0gPSBNYXNrZWRFbnVtO1xuXG5leHBvcnQgeyBNYXNrZWRFbnVtIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGlzU3RyaW5nLCBpc09iamVjdCwgcGljayB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcblxuLy8gVE9ETyBjYW4ndCB1c2Ugb3ZlcmxvYWRzIGhlcmUgYmVjYXVzZSBvZiBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzUwNzU0XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogc3RyaW5nKTogdHlwZW9mIE1hc2tlZFBhdHRlcm47XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogRGF0ZUNvbnN0cnVjdG9yKTogdHlwZW9mIE1hc2tlZERhdGU7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogTnVtYmVyQ29uc3RydWN0b3IpOiB0eXBlb2YgTWFza2VkTnVtYmVyO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IEFycmF5PGFueT4gfCBBcnJheUNvbnN0cnVjdG9yKTogdHlwZW9mIE1hc2tlZER5bmFtaWM7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogTWFza2VkRGF0ZSk6IHR5cGVvZiBNYXNrZWREYXRlO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IE1hc2tlZE51bWJlcik6IHR5cGVvZiBNYXNrZWROdW1iZXI7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogTWFza2VkRW51bSk6IHR5cGVvZiBNYXNrZWRFbnVtO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IE1hc2tlZFJhbmdlKTogdHlwZW9mIE1hc2tlZFJhbmdlO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IE1hc2tlZFJlZ0V4cCk6IHR5cGVvZiBNYXNrZWRSZWdFeHA7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogTWFza2VkRnVuY3Rpb24pOiB0eXBlb2YgTWFza2VkRnVuY3Rpb247XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogTWFza2VkUGF0dGVybik6IHR5cGVvZiBNYXNrZWRQYXR0ZXJuO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IE1hc2tlZER5bmFtaWMpOiB0eXBlb2YgTWFza2VkRHluYW1pYztcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiBNYXNrZWQpOiB0eXBlb2YgTWFza2VkO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IHR5cGVvZiBNYXNrZWQpOiB0eXBlb2YgTWFza2VkO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IHR5cGVvZiBNYXNrZWREYXRlKTogdHlwZW9mIE1hc2tlZERhdGU7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogdHlwZW9mIE1hc2tlZE51bWJlcik6IHR5cGVvZiBNYXNrZWROdW1iZXI7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogdHlwZW9mIE1hc2tlZEVudW0pOiB0eXBlb2YgTWFza2VkRW51bTtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiB0eXBlb2YgTWFza2VkUmFuZ2UpOiB0eXBlb2YgTWFza2VkUmFuZ2U7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogdHlwZW9mIE1hc2tlZFJlZ0V4cCk6IHR5cGVvZiBNYXNrZWRSZWdFeHA7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogdHlwZW9mIE1hc2tlZEZ1bmN0aW9uKTogdHlwZW9mIE1hc2tlZEZ1bmN0aW9uO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IHR5cGVvZiBNYXNrZWRQYXR0ZXJuKTogdHlwZW9mIE1hc2tlZFBhdHRlcm47XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogdHlwZW9mIE1hc2tlZER5bmFtaWMpOiB0eXBlb2YgTWFza2VkRHluYW1pYztcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzczxNYXNrIGV4dGVuZHMgdHlwZW9mIE1hc2tlZD4gKG1hc2s6IE1hc2spOiBNYXNrO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IFJlZ0V4cCk6IHR5cGVvZiBNYXNrZWRSZWdFeHA7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogKHZhbHVlOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSA9PiBib29sZWFuKTogdHlwZW9mIE1hc2tlZEZ1bmN0aW9uO1xuXG4vKiogR2V0IE1hc2tlZCBjbGFzcyBieSBtYXNrIHR5cGUgKi9cbmZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2spIC8qIFRPRE8gKi97XG4gIGlmIChtYXNrID09IG51bGwpIHRocm93IG5ldyBFcnJvcignbWFzayBwcm9wZXJ0eSBzaG91bGQgYmUgZGVmaW5lZCcpO1xuICBpZiAobWFzayBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIElNYXNrLk1hc2tlZFJlZ0V4cDtcbiAgaWYgKGlzU3RyaW5nKG1hc2spKSByZXR1cm4gSU1hc2suTWFza2VkUGF0dGVybjtcbiAgaWYgKG1hc2sgPT09IERhdGUpIHJldHVybiBJTWFzay5NYXNrZWREYXRlO1xuICBpZiAobWFzayA9PT0gTnVtYmVyKSByZXR1cm4gSU1hc2suTWFza2VkTnVtYmVyO1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXNrKSB8fCBtYXNrID09PSBBcnJheSkgcmV0dXJuIElNYXNrLk1hc2tlZER5bmFtaWM7XG4gIGlmIChJTWFzay5NYXNrZWQgJiYgbWFzay5wcm90b3R5cGUgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpIHJldHVybiBtYXNrO1xuICBpZiAoSU1hc2suTWFza2VkICYmIG1hc2sgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpIHJldHVybiBtYXNrLmNvbnN0cnVjdG9yO1xuICBpZiAobWFzayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSByZXR1cm4gSU1hc2suTWFza2VkRnVuY3Rpb247XG4gIGNvbnNvbGUud2FybignTWFzayBub3QgZm91bmQgZm9yIG1hc2snLCBtYXNrKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIHJldHVybiBJTWFzay5NYXNrZWQ7XG59XG5mdW5jdGlvbiBub3JtYWxpemVPcHRzKG9wdHMpIHtcbiAgaWYgKCFvcHRzKSB0aHJvdyBuZXcgRXJyb3IoJ09wdGlvbnMgaW4gbm90IGRlZmluZWQnKTtcbiAgaWYgKElNYXNrLk1hc2tlZCkge1xuICAgIGlmIChvcHRzLnByb3RvdHlwZSBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgcmV0dXJuIHtcbiAgICAgIG1hc2s6IG9wdHNcbiAgICB9O1xuXG4gICAgLypcbiAgICAgIGhhbmRsZSBjYXNlcyBsaWtlOlxuICAgICAgMSkgb3B0cyA9IE1hc2tlZFxuICAgICAgMikgb3B0cyA9IHsgbWFzazogTWFza2VkLCAuLi5pbnN0YW5jZU9wdHMgfVxuICAgICovXG4gICAgY29uc3Qge1xuICAgICAgbWFzayA9IHVuZGVmaW5lZCxcbiAgICAgIC4uLmluc3RhbmNlT3B0c1xuICAgIH0gPSBvcHRzIGluc3RhbmNlb2YgSU1hc2suTWFza2VkID8ge1xuICAgICAgbWFzazogb3B0c1xuICAgIH0gOiBpc09iamVjdChvcHRzKSAmJiBvcHRzLm1hc2sgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQgPyBvcHRzIDoge307XG4gICAgaWYgKG1hc2spIHtcbiAgICAgIGNvbnN0IF9tYXNrID0gbWFzay5tYXNrO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucGljayhtYXNrLCAoXywgaykgPT4gIWsuc3RhcnRzV2l0aCgnXycpKSxcbiAgICAgICAgbWFzazogbWFzay5jb25zdHJ1Y3RvcixcbiAgICAgICAgX21hc2ssXG4gICAgICAgIC4uLmluc3RhbmNlT3B0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc09iamVjdChvcHRzKSkgcmV0dXJuIHtcbiAgICBtYXNrOiBvcHRzXG4gIH07XG4gIHJldHVybiB7XG4gICAgLi4ub3B0c1xuICB9O1xufVxuXG4vLyBUT0RPIGNhbid0IHVzZSBvdmVybG9hZHMgaGVyZSBiZWNhdXNlIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvNTA3NTRcblxuLy8gRnJvbSBtYXNrZWRcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZCwgUmV0dXJuTWFza2VkPU9wdHM+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gLy8gRnJvbSBtYXNrZWQgY2xhc3Ncbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZE9wdGlvbnM8dHlwZW9mIE1hc2tlZD4sIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZD1JbnN0YW5jZVR5cGU8T3B0c1snbWFzayddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWRPcHRpb25zPHR5cGVvZiBNYXNrZWREYXRlPiwgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkRGF0ZT1NYXNrZWREYXRlPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWRPcHRpb25zPHR5cGVvZiBNYXNrZWROdW1iZXI+LCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWROdW1iZXI9TWFza2VkTnVtYmVyPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWRPcHRpb25zPHR5cGVvZiBNYXNrZWRFbnVtPiwgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkRW51bT1NYXNrZWRFbnVtPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWRPcHRpb25zPHR5cGVvZiBNYXNrZWRSYW5nZT4sIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZFJhbmdlPU1hc2tlZFJhbmdlPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWRPcHRpb25zPHR5cGVvZiBNYXNrZWRSZWdFeHA+LCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWRSZWdFeHA9TWFza2VkUmVnRXhwPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWRPcHRpb25zPHR5cGVvZiBNYXNrZWRGdW5jdGlvbj4sIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZEZ1bmN0aW9uPU1hc2tlZEZ1bmN0aW9uPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWRPcHRpb25zPHR5cGVvZiBNYXNrZWRQYXR0ZXJuPiwgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkUGF0dGVybj1NYXNrZWRQYXR0ZXJuPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWRPcHRpb25zPHR5cGVvZiBNYXNrZWREeW5hbWljPiwgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkRHluYW1pYz1NYXNrZWREeW5hbWljPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyAvLyBGcm9tIG1hc2sgb3B0c1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkT3B0aW9uczxNYXNrZWQ+LCBSZXR1cm5NYXNrZWQ9T3B0cyBleHRlbmRzIE1hc2tlZE9wdGlvbnM8aW5mZXIgTT4gPyBNIDogbmV2ZXI+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkTnVtYmVyT3B0aW9ucywgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkTnVtYmVyPU1hc2tlZE51bWJlcjxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkRGF0ZUZhY3RvcnlPcHRpb25zLCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWREYXRlPU1hc2tlZERhdGU8T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZEVudW1PcHRpb25zLCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWRFbnVtPU1hc2tlZEVudW08T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZFJhbmdlT3B0aW9ucywgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkUmFuZ2U9TWFza2VkUmFuZ2U8T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZFBhdHRlcm5PcHRpb25zLCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWRQYXR0ZXJuPU1hc2tlZFBhdHRlcm48T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZER5bmFtaWNPcHRpb25zLCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWREeW5hbWljPU1hc2tlZER5bmFtaWM8T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZE9wdGlvbnM8UmVnRXhwPiwgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkUmVnRXhwPU1hc2tlZFJlZ0V4cDxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkT3B0aW9uczxGdW5jdGlvbj4sIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZEZ1bmN0aW9uPU1hc2tlZEZ1bmN0aW9uPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG5cbi8qKiBDcmVhdGVzIG5ldyB7QGxpbmsgTWFza2VkfSBkZXBlbmRpbmcgb24gbWFzayB0eXBlICovXG5mdW5jdGlvbiBjcmVhdGVNYXNrKG9wdHMpIHtcbiAgaWYgKElNYXNrLk1hc2tlZCAmJiBvcHRzIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSByZXR1cm4gb3B0cztcbiAgY29uc3Qgbk9wdHMgPSBub3JtYWxpemVPcHRzKG9wdHMpO1xuICBjb25zdCBNYXNrZWRDbGFzcyA9IG1hc2tlZENsYXNzKG5PcHRzLm1hc2spO1xuICBpZiAoIU1hc2tlZENsYXNzKSB0aHJvdyBuZXcgRXJyb3IoXCJNYXNrZWQgY2xhc3MgaXMgbm90IGZvdW5kIGZvciBwcm92aWRlZCBtYXNrIFwiICsgbk9wdHMubWFzayArIFwiLCBhcHByb3ByaWF0ZSBtb2R1bGUgbmVlZHMgdG8gYmUgaW1wb3J0ZWQgbWFudWFsbHkgYmVmb3JlIGNyZWF0aW5nIG1hc2suXCIpO1xuICBpZiAobk9wdHMubWFzayA9PT0gTWFza2VkQ2xhc3MpIGRlbGV0ZSBuT3B0cy5tYXNrO1xuICBpZiAobk9wdHMuX21hc2spIHtcbiAgICBuT3B0cy5tYXNrID0gbk9wdHMuX21hc2s7XG4gICAgZGVsZXRlIG5PcHRzLl9tYXNrO1xuICB9XG4gIHJldHVybiBuZXcgTWFza2VkQ2xhc3Mobk9wdHMpO1xufVxuSU1hc2suY3JlYXRlTWFzayA9IGNyZWF0ZU1hc2s7XG5cbmV4cG9ydCB7IGNyZWF0ZU1hc2sgYXMgZGVmYXVsdCwgbWFza2VkQ2xhc3MsIG5vcm1hbGl6ZU9wdHMgfTtcbiIsImltcG9ydCBNYXNrZWQgZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5cbi8qKiBNYXNraW5nIGJ5IGN1c3RvbSBGdW5jdGlvbiAqL1xuY2xhc3MgTWFza2VkRnVuY3Rpb24gZXh0ZW5kcyBNYXNrZWQge1xuICAvKiogKi9cblxuICAvKiogRW5hYmxlIGNoYXJhY3RlcnMgb3ZlcndyaXRpbmcgKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICB1cGRhdGVPcHRpb25zKG9wdHMpIHtcbiAgICBzdXBlci51cGRhdGVPcHRpb25zKG9wdHMpO1xuICB9XG4gIF91cGRhdGUob3B0cykge1xuICAgIHN1cGVyLl91cGRhdGUoe1xuICAgICAgLi4ub3B0cyxcbiAgICAgIHZhbGlkYXRlOiBvcHRzLm1hc2tcbiAgICB9KTtcbiAgfVxufVxuSU1hc2suTWFza2VkRnVuY3Rpb24gPSBNYXNrZWRGdW5jdGlvbjtcblxuZXhwb3J0IHsgTWFza2VkRnVuY3Rpb24gYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgZXNjYXBlUmVnRXhwLCBESVJFQ1RJT04gfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5cbnZhciBfTWFza2VkTnVtYmVyO1xuLyoqIE51bWJlciBtYXNrICovXG5jbGFzcyBNYXNrZWROdW1iZXIgZXh0ZW5kcyBNYXNrZWQge1xuICAvKiogU2luZ2xlIGNoYXIgKi9cblxuICAvKiogU2luZ2xlIGNoYXIgKi9cblxuICAvKiogQXJyYXkgb2Ygc2luZ2xlIGNoYXJzICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqIERpZ2l0cyBhZnRlciBwb2ludCAqL1xuXG4gIC8qKiBGbGFnIHRvIHJlbW92ZSBsZWFkaW5nIGFuZCB0cmFpbGluZyB6ZXJvcyBpbiB0aGUgZW5kIG9mIGVkaXRpbmcgKi9cblxuICAvKiogRmxhZyB0byBwYWQgdHJhaWxpbmcgemVyb3MgYWZ0ZXIgcG9pbnQgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXG5cbiAgLyoqIEVuYWJsZSBjaGFyYWN0ZXJzIG92ZXJ3cml0aW5nICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqIEZvcm1hdCB0eXBlZCB2YWx1ZSB0byBzdHJpbmcgKi9cblxuICAvKiogUGFyc2Ugc3RyaW5nIHRvIGdldCB0eXBlZCB2YWx1ZSAqL1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcih7XG4gICAgICAuLi5NYXNrZWROdW1iZXIuREVGQVVMVFMsXG4gICAgICAuLi5vcHRzXG4gICAgfSk7XG4gIH1cbiAgdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgc3VwZXIudXBkYXRlT3B0aW9ucyhvcHRzKTtcbiAgfVxuICBfdXBkYXRlKG9wdHMpIHtcbiAgICBzdXBlci5fdXBkYXRlKG9wdHMpO1xuICAgIHRoaXMuX3VwZGF0ZVJlZ0V4cHMoKTtcbiAgfVxuICBfdXBkYXRlUmVnRXhwcygpIHtcbiAgICBjb25zdCBzdGFydCA9ICdeJyArICh0aGlzLmFsbG93TmVnYXRpdmUgPyAnWyt8XFxcXC1dPycgOiAnJyk7XG4gICAgY29uc3QgbWlkID0gJ1xcXFxkKic7XG4gICAgY29uc3QgZW5kID0gKHRoaXMuc2NhbGUgPyBcIihcIiArIGVzY2FwZVJlZ0V4cCh0aGlzLnJhZGl4KSArIFwiXFxcXGR7MCxcIiArIHRoaXMuc2NhbGUgKyBcIn0pP1wiIDogJycpICsgJyQnO1xuICAgIHRoaXMuX251bWJlclJlZ0V4cCA9IG5ldyBSZWdFeHAoc3RhcnQgKyBtaWQgKyBlbmQpO1xuICAgIHRoaXMuX21hcFRvUmFkaXhSZWdFeHAgPSBuZXcgUmVnRXhwKFwiW1wiICsgdGhpcy5tYXBUb1JhZGl4Lm1hcChlc2NhcGVSZWdFeHApLmpvaW4oJycpICsgXCJdXCIsICdnJyk7XG4gICAgdGhpcy5fdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGhpcy50aG91c2FuZHNTZXBhcmF0b3IpLCAnZycpO1xuICB9XG4gIF9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UodGhpcy5fdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwLCAnJyk7XG4gIH1cbiAgX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpIHtcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTAxMTAyL2hvdy10by1wcmludC1hLW51bWJlci13aXRoLWNvbW1hcy1hcy10aG91c2FuZHMtc2VwYXJhdG9ycy1pbi1qYXZhc2NyaXB0XG4gICAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdCh0aGlzLnJhZGl4KTtcbiAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKTtcbiAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcbiAgfVxuICBkb1ByZXBhcmVDaGFyKGNoLCBmbGFncykge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBbcHJlcENoLCBkZXRhaWxzXSA9IHN1cGVyLmRvUHJlcGFyZUNoYXIodGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLnNjYWxlICYmIHRoaXMubWFwVG9SYWRpeC5sZW5ndGggJiYgKFxuICAgIC8qXG4gICAgICByYWRpeCBzaG91bGQgYmUgbWFwcGVkIHdoZW5cbiAgICAgIDEpIGlucHV0IGlzIGRvbmUgZnJvbSBrZXlib2FyZCA9IGZsYWdzLmlucHV0ICYmIGZsYWdzLnJhd1xuICAgICAgMikgdW5tYXNrZWQgdmFsdWUgaXMgc2V0ID0gIWZsYWdzLmlucHV0ICYmICFmbGFncy5yYXdcbiAgICAgIGFuZCBzaG91bGQgbm90IGJlIG1hcHBlZCB3aGVuXG4gICAgICAxKSB2YWx1ZSBpcyBzZXQgPSBmbGFncy5pbnB1dCAmJiAhZmxhZ3MucmF3XG4gICAgICAyKSByYXcgdmFsdWUgaXMgc2V0ID0gIWZsYWdzLmlucHV0ICYmIGZsYWdzLnJhd1xuICAgICovXG4gICAgZmxhZ3MuaW5wdXQgJiYgZmxhZ3MucmF3IHx8ICFmbGFncy5pbnB1dCAmJiAhZmxhZ3MucmF3KSA/IGNoLnJlcGxhY2UodGhpcy5fbWFwVG9SYWRpeFJlZ0V4cCwgdGhpcy5yYWRpeCkgOiBjaCksIGZsYWdzKTtcbiAgICBpZiAoY2ggJiYgIXByZXBDaCkgZGV0YWlscy5za2lwID0gdHJ1ZTtcbiAgICBpZiAocHJlcENoICYmICF0aGlzLmFsbG93UG9zaXRpdmUgJiYgIXRoaXMudmFsdWUgJiYgcHJlcENoICE9PSAnLScpIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuX2FwcGVuZENoYXIoJy0nKSk7XG4gICAgcmV0dXJuIFtwcmVwQ2gsIGRldGFpbHNdO1xuICB9XG4gIF9zZXBhcmF0b3JzQ291bnQodG8sIGV4dGVuZE9uU2VwYXJhdG9ycykge1xuICAgIGlmIChleHRlbmRPblNlcGFyYXRvcnMgPT09IHZvaWQgMCkge1xuICAgICAgZXh0ZW5kT25TZXBhcmF0b3JzID0gZmFsc2U7XG4gICAgfVxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgcG9zID0gMDsgcG9zIDwgdG87ICsrcG9zKSB7XG4gICAgICBpZiAodGhpcy5fdmFsdWUuaW5kZXhPZih0aGlzLnRob3VzYW5kc1NlcGFyYXRvciwgcG9zKSA9PT0gcG9zKSB7XG4gICAgICAgICsrY291bnQ7XG4gICAgICAgIGlmIChleHRlbmRPblNlcGFyYXRvcnMpIHRvICs9IHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIF9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2Uoc2xpY2UpIHtcbiAgICBpZiAoc2xpY2UgPT09IHZvaWQgMCkge1xuICAgICAgc2xpY2UgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3NlcGFyYXRvcnNDb3VudCh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHNsaWNlKS5sZW5ndGgsIHRydWUpO1xuICB9XG4gIGV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICBbZnJvbVBvcywgdG9Qb3NdID0gdGhpcy5fYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9ycyhmcm9tUG9zLCB0b1Bvcyk7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoc3VwZXIuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncykpO1xuICB9XG4gIF9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncykge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBwcmV2QmVmb3JlVGFpbFZhbHVlID0gZmxhZ3MudGFpbCAmJiBmbGFncy5fYmVmb3JlVGFpbFN0YXRlID8gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOiB0aGlzLl92YWx1ZTtcbiAgICBjb25zdCBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZShwcmV2QmVmb3JlVGFpbFZhbHVlKTtcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModGhpcy52YWx1ZSk7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB0aGlzLl92YWx1ZSArPSBjaDtcbiAgICBjb25zdCBudW0gPSB0aGlzLm51bWJlcjtcbiAgICBsZXQgYWNjZXB0ZWQgPSAhaXNOYU4obnVtKTtcbiAgICBsZXQgc2tpcCA9IGZhbHNlO1xuICAgIGlmIChhY2NlcHRlZCkge1xuICAgICAgbGV0IGZpeGVkTnVtO1xuICAgICAgaWYgKHRoaXMubWluICE9IG51bGwgJiYgdGhpcy5taW4gPCAwICYmIHRoaXMubnVtYmVyIDwgdGhpcy5taW4pIGZpeGVkTnVtID0gdGhpcy5taW47XG4gICAgICBpZiAodGhpcy5tYXggIT0gbnVsbCAmJiB0aGlzLm1heCA+IDAgJiYgdGhpcy5udW1iZXIgPiB0aGlzLm1heCkgZml4ZWROdW0gPSB0aGlzLm1heDtcbiAgICAgIGlmIChmaXhlZE51bSAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9maXgpIHtcbiAgICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuZm9ybWF0KGZpeGVkTnVtLCB0aGlzKS5yZXBsYWNlKE1hc2tlZE51bWJlci5VTk1BU0tFRF9SQURJWCwgdGhpcy5yYWRpeCk7XG4gICAgICAgICAgc2tpcCB8fCAoc2tpcCA9IG9sZFZhbHVlID09PSB0aGlzLl92YWx1ZSAmJiAhZmxhZ3MudGFpbCk7IC8vIGlmIG5vdCBjaGFuZ2VkIG9uIHRhaWwgaXQncyBzdGlsbCBvayB0byBwcm9jZWVkXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWNjZXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYWNjZXB0ZWQgJiYgKGFjY2VwdGVkID0gQm9vbGVhbih0aGlzLl92YWx1ZS5tYXRjaCh0aGlzLl9udW1iZXJSZWdFeHApKSk7XG4gICAgfVxuICAgIGxldCBhcHBlbmREZXRhaWxzO1xuICAgIGlmICghYWNjZXB0ZWQpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gb2xkVmFsdWU7XG4gICAgICBhcHBlbmREZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwZW5kRGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgICAgaW5zZXJ0ZWQ6IHRoaXMuX3ZhbHVlLnNsaWNlKG9sZFZhbHVlLmxlbmd0aCksXG4gICAgICAgIHJhd0luc2VydGVkOiBza2lwID8gJycgOiBjaCxcbiAgICAgICAgc2tpcFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5faW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLl92YWx1ZSk7XG4gICAgY29uc3QgYmVmb3JlVGFpbFZhbHVlID0gZmxhZ3MudGFpbCAmJiBmbGFncy5fYmVmb3JlVGFpbFN0YXRlID8gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOiB0aGlzLl92YWx1ZTtcbiAgICBjb25zdCBiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKGJlZm9yZVRhaWxWYWx1ZSk7XG4gICAgYXBwZW5kRGV0YWlscy50YWlsU2hpZnQgKz0gKGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgLSBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCkgKiB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgcmV0dXJuIGFwcGVuZERldGFpbHM7XG4gIH1cbiAgX2ZpbmRTZXBhcmF0b3JBcm91bmQocG9zKSB7XG4gICAgaWYgKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSB7XG4gICAgICBjb25zdCBzZWFyY2hGcm9tID0gcG9zIC0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoICsgMTtcbiAgICAgIGNvbnN0IHNlcGFyYXRvclBvcyA9IHRoaXMudmFsdWUuaW5kZXhPZih0aGlzLnRob3VzYW5kc1NlcGFyYXRvciwgc2VhcmNoRnJvbSk7XG4gICAgICBpZiAoc2VwYXJhdG9yUG9zIDw9IHBvcykgcmV0dXJuIHNlcGFyYXRvclBvcztcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIF9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb20sIHRvKSB7XG4gICAgY29uc3Qgc2VwYXJhdG9yQXJvdW5kRnJvbVBvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQoZnJvbSk7XG4gICAgaWYgKHNlcGFyYXRvckFyb3VuZEZyb21Qb3MgPj0gMCkgZnJvbSA9IHNlcGFyYXRvckFyb3VuZEZyb21Qb3M7XG4gICAgY29uc3Qgc2VwYXJhdG9yQXJvdW5kVG9Qb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKHRvKTtcbiAgICBpZiAoc2VwYXJhdG9yQXJvdW5kVG9Qb3MgPj0gMCkgdG8gPSBzZXBhcmF0b3JBcm91bmRUb1BvcyArIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICByZXR1cm4gW2Zyb20sIHRvXTtcbiAgfVxuICByZW1vdmUoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICBbZnJvbVBvcywgdG9Qb3NdID0gdGhpcy5fYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9ycyhmcm9tUG9zLCB0b1Bvcyk7XG4gICAgY29uc3QgdmFsdWVCZWZvcmVQb3MgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpO1xuICAgIGNvbnN0IHZhbHVlQWZ0ZXJQb3MgPSB0aGlzLnZhbHVlLnNsaWNlKHRvUG9zKTtcbiAgICBjb25zdCBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudCh2YWx1ZUJlZm9yZVBvcy5sZW5ndGgpO1xuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5faW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlQmVmb3JlUG9zICsgdmFsdWVBZnRlclBvcykpO1xuICAgIGNvbnN0IGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UodmFsdWVCZWZvcmVQb3MpO1xuICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICB0YWlsU2hpZnQ6IChiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50IC0gcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQpICogdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoXG4gICAgfSk7XG4gIH1cbiAgbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XG4gICAgaWYgKCF0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikgcmV0dXJuIGN1cnNvclBvcztcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSBESVJFQ1RJT04uTk9ORTpcbiAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3Qgc2VwYXJhdG9yQXRMZWZ0UG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZChjdXJzb3JQb3MgLSAxKTtcbiAgICAgICAgICBpZiAoc2VwYXJhdG9yQXRMZWZ0UG9zID49IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNlcGFyYXRvckF0TGVmdEVuZFBvcyA9IHNlcGFyYXRvckF0TGVmdFBvcyArIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChjdXJzb3JQb3MgPCBzZXBhcmF0b3JBdExlZnRFbmRQb3MgfHwgdGhpcy52YWx1ZS5sZW5ndGggPD0gc2VwYXJhdG9yQXRMZWZ0RW5kUG9zIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlcGFyYXRvckF0TGVmdFBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBzZXBhcmF0b3JBdFJpZ2h0UG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZChjdXJzb3JQb3MpO1xuICAgICAgICAgIGlmIChzZXBhcmF0b3JBdFJpZ2h0UG9zID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiBzZXBhcmF0b3JBdFJpZ2h0UG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3Vyc29yUG9zO1xuICB9XG4gIGRvQ29tbWl0KCkge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICBjb25zdCBudW1iZXIgPSB0aGlzLm51bWJlcjtcbiAgICAgIGxldCB2YWxpZG51bSA9IG51bWJlcjtcblxuICAgICAgLy8gY2hlY2sgYm91bmRzXG4gICAgICBpZiAodGhpcy5taW4gIT0gbnVsbCkgdmFsaWRudW0gPSBNYXRoLm1heCh2YWxpZG51bSwgdGhpcy5taW4pO1xuICAgICAgaWYgKHRoaXMubWF4ICE9IG51bGwpIHZhbGlkbnVtID0gTWF0aC5taW4odmFsaWRudW0sIHRoaXMubWF4KTtcbiAgICAgIGlmICh2YWxpZG51bSAhPT0gbnVtYmVyKSB0aGlzLnVubWFza2VkVmFsdWUgPSB0aGlzLmZvcm1hdCh2YWxpZG51bSwgdGhpcyk7XG4gICAgICBsZXQgZm9ybWF0dGVkID0gdGhpcy52YWx1ZTtcbiAgICAgIGlmICh0aGlzLm5vcm1hbGl6ZVplcm9zKSBmb3JtYXR0ZWQgPSB0aGlzLl9ub3JtYWxpemVaZXJvcyhmb3JtYXR0ZWQpO1xuICAgICAgaWYgKHRoaXMucGFkRnJhY3Rpb25hbFplcm9zICYmIHRoaXMuc2NhbGUgPiAwKSBmb3JtYXR0ZWQgPSB0aGlzLl9wYWRGcmFjdGlvbmFsWmVyb3MoZm9ybWF0dGVkKTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybWF0dGVkO1xuICAgIH1cbiAgICBzdXBlci5kb0NvbW1pdCgpO1xuICB9XG4gIF9ub3JtYWxpemVaZXJvcyh2YWx1ZSkge1xuICAgIGNvbnN0IHBhcnRzID0gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkuc3BsaXQodGhpcy5yYWRpeCk7XG5cbiAgICAvLyByZW1vdmUgbGVhZGluZyB6ZXJvc1xuICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXihcXEQqKSgwKikoXFxkKikvLCAobWF0Y2gsIHNpZ24sIHplcm9zLCBudW0pID0+IHNpZ24gKyBudW0pO1xuICAgIC8vIGFkZCBsZWFkaW5nIHplcm9cbiAgICBpZiAodmFsdWUubGVuZ3RoICYmICEvXFxkJC8udGVzdChwYXJ0c1swXSkpIHBhcnRzWzBdID0gcGFydHNbMF0gKyAnMCc7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucmVwbGFjZSgvMCokLywgJycpOyAvLyByZW1vdmUgdHJhaWxpbmcgemVyb3NcbiAgICAgIGlmICghcGFydHNbMV0ubGVuZ3RoKSBwYXJ0cy5sZW5ndGggPSAxOyAvLyByZW1vdmUgZnJhY3Rpb25hbFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyhwYXJ0cy5qb2luKHRoaXMucmFkaXgpKTtcbiAgfVxuICBfcGFkRnJhY3Rpb25hbFplcm9zKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIHZhbHVlO1xuICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQodGhpcy5yYWRpeCk7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCA8IDIpIHBhcnRzLnB1c2goJycpO1xuICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucGFkRW5kKHRoaXMuc2NhbGUsICcwJyk7XG4gICAgcmV0dXJuIHBhcnRzLmpvaW4odGhpcy5yYWRpeCk7XG4gIH1cbiAgZG9Ta2lwSW52YWxpZChjaCwgZmxhZ3MsIGNoZWNrVGFpbCkge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBkcm9wRnJhY3Rpb25hbCA9IHRoaXMuc2NhbGUgPT09IDAgJiYgY2ggIT09IHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yICYmIChjaCA9PT0gdGhpcy5yYWRpeCB8fCBjaCA9PT0gTWFza2VkTnVtYmVyLlVOTUFTS0VEX1JBRElYIHx8IHRoaXMubWFwVG9SYWRpeC5pbmNsdWRlcyhjaCkpO1xuICAgIHJldHVybiBzdXBlci5kb1NraXBJbnZhbGlkKGNoLCBmbGFncywgY2hlY2tUYWlsKSAmJiAhZHJvcEZyYWN0aW9uYWw7XG4gIH1cbiAgZ2V0IHVubWFza2VkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fbm9ybWFsaXplWmVyb3ModGhpcy52YWx1ZSkpLnJlcGxhY2UodGhpcy5yYWRpeCwgTWFza2VkTnVtYmVyLlVOTUFTS0VEX1JBRElYKTtcbiAgfVxuICBzZXQgdW5tYXNrZWRWYWx1ZSh1bm1hc2tlZFZhbHVlKSB7XG4gICAgc3VwZXIudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkVmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2UodGhpcy51bm1hc2tlZFZhbHVlLCB0aGlzKTtcbiAgfVxuICBzZXQgdHlwZWRWYWx1ZShuKSB7XG4gICAgdGhpcy5yYXdJbnB1dFZhbHVlID0gdGhpcy5mb3JtYXQobiwgdGhpcykucmVwbGFjZShNYXNrZWROdW1iZXIuVU5NQVNLRURfUkFESVgsIHRoaXMucmFkaXgpO1xuICB9XG5cbiAgLyoqIFBhcnNlZCBOdW1iZXIgKi9cbiAgZ2V0IG51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlZFZhbHVlO1xuICB9XG4gIHNldCBudW1iZXIobnVtYmVyKSB7XG4gICAgdGhpcy50eXBlZFZhbHVlID0gbnVtYmVyO1xuICB9XG4gIGdldCBhbGxvd05lZ2F0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLm1pbiAhPSBudWxsICYmIHRoaXMubWluIDwgMCB8fCB0aGlzLm1heCAhPSBudWxsICYmIHRoaXMubWF4IDwgMDtcbiAgfVxuICBnZXQgYWxsb3dQb3NpdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5taW4gIT0gbnVsbCAmJiB0aGlzLm1pbiA+IDAgfHwgdGhpcy5tYXggIT0gbnVsbCAmJiB0aGlzLm1heCA+IDA7XG4gIH1cbiAgdHlwZWRWYWx1ZUVxdWFscyh2YWx1ZSkge1xuICAgIC8vIGhhbmRsZSAgMCAtPiAnJyBjYXNlICh0eXBlZCA9IDAgZXZlbiBpZiB2YWx1ZSA9ICcnKVxuICAgIC8vIGZvciBkZXRhaWxzIHNlZSBodHRwczovL2dpdGh1Yi5jb20vdU5tQW5OZVIvaW1hc2tqcy9pc3N1ZXMvMTM0XG4gICAgcmV0dXJuIChzdXBlci50eXBlZFZhbHVlRXF1YWxzKHZhbHVlKSB8fCBNYXNrZWROdW1iZXIuRU1QVFlfVkFMVUVTLmluY2x1ZGVzKHZhbHVlKSAmJiBNYXNrZWROdW1iZXIuRU1QVFlfVkFMVUVTLmluY2x1ZGVzKHRoaXMudHlwZWRWYWx1ZSkpICYmICEodmFsdWUgPT09IDAgJiYgdGhpcy52YWx1ZSA9PT0gJycpO1xuICB9XG59XG5fTWFza2VkTnVtYmVyID0gTWFza2VkTnVtYmVyO1xuTWFza2VkTnVtYmVyLlVOTUFTS0VEX1JBRElYID0gJy4nO1xuTWFza2VkTnVtYmVyLkVNUFRZX1ZBTFVFUyA9IFsuLi5NYXNrZWQuRU1QVFlfVkFMVUVTLCAwXTtcbk1hc2tlZE51bWJlci5ERUZBVUxUUyA9IHtcbiAgLi4uTWFza2VkLkRFRkFVTFRTLFxuICBtYXNrOiBOdW1iZXIsXG4gIHJhZGl4OiAnLCcsXG4gIHRob3VzYW5kc1NlcGFyYXRvcjogJycsXG4gIG1hcFRvUmFkaXg6IFtfTWFza2VkTnVtYmVyLlVOTUFTS0VEX1JBRElYXSxcbiAgbWluOiBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUixcbiAgbWF4OiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgc2NhbGU6IDIsXG4gIG5vcm1hbGl6ZVplcm9zOiB0cnVlLFxuICBwYWRGcmFjdGlvbmFsWmVyb3M6IGZhbHNlLFxuICBwYXJzZTogTnVtYmVyLFxuICBmb3JtYXQ6IG4gPT4gbi50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgdXNlR3JvdXBpbmc6IGZhbHNlLFxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMjBcbiAgfSlcbn07XG5JTWFzay5NYXNrZWROdW1iZXIgPSBNYXNrZWROdW1iZXI7XG5cbmV4cG9ydCB7IE1hc2tlZE51bWJlciBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBNYXNrZWQgZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCBjcmVhdGVNYXNrLCB7IG5vcm1hbGl6ZU9wdHMgfSBmcm9tICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0IENodW5rc1RhaWxEZXRhaWxzIGZyb20gJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0IFBhdHRlcm5DdXJzb3IgZnJvbSAnLi9wYXR0ZXJuL2N1cnNvci5qcyc7XG5pbXBvcnQgUGF0dGVybkZpeGVkRGVmaW5pdGlvbiBmcm9tICcuL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgUGF0dGVybklucHV0RGVmaW5pdGlvbiBmcm9tICcuL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcmVnZXhwLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5cbi8qKiBQYXR0ZXJuIG1hc2sgKi9cbmNsYXNzIE1hc2tlZFBhdHRlcm4gZXh0ZW5kcyBNYXNrZWQge1xuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogU2luZ2xlIGNoYXIgZm9yIGVtcHR5IGlucHV0ICovXG5cbiAgLyoqIFNpbmdsZSBjaGFyIGZvciBmaWxsZWQgaW5wdXQgKi9cblxuICAvKiogU2hvdyBwbGFjZWhvbGRlciBvbmx5IHdoZW4gbmVlZGVkICovXG5cbiAgLyoqIEVuYWJsZSBjaGFyYWN0ZXJzIG92ZXJ3cml0aW5nICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLk1hc2tlZFBhdHRlcm4uREVGQVVMVFMsXG4gICAgICAuLi5vcHRzLFxuICAgICAgZGVmaW5pdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIFBhdHRlcm5JbnB1dERlZmluaXRpb24uREVGQVVMVF9ERUZJTklUSU9OUywgb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5kZWZpbml0aW9ucylcbiAgICB9KTtcbiAgfVxuICB1cGRhdGVPcHRpb25zKG9wdHMpIHtcbiAgICBzdXBlci51cGRhdGVPcHRpb25zKG9wdHMpO1xuICB9XG4gIF91cGRhdGUob3B0cykge1xuICAgIG9wdHMuZGVmaW5pdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmluaXRpb25zLCBvcHRzLmRlZmluaXRpb25zKTtcbiAgICBzdXBlci5fdXBkYXRlKG9wdHMpO1xuICAgIHRoaXMuX3JlYnVpbGRNYXNrKCk7XG4gIH1cbiAgX3JlYnVpbGRNYXNrKCkge1xuICAgIGNvbnN0IGRlZnMgPSB0aGlzLmRlZmluaXRpb25zO1xuICAgIHRoaXMuX2Jsb2NrcyA9IFtdO1xuICAgIHRoaXMuZXhwb3NlQmxvY2sgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc3RvcHMgPSBbXTtcbiAgICB0aGlzLl9tYXNrZWRCbG9ja3MgPSB7fTtcbiAgICBjb25zdCBwYXR0ZXJuID0gdGhpcy5tYXNrO1xuICAgIGlmICghcGF0dGVybiB8fCAhZGVmcykgcmV0dXJuO1xuICAgIGxldCB1bm1hc2tpbmdCbG9jayA9IGZhbHNlO1xuICAgIGxldCBvcHRpb25hbEJsb2NrID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXR0ZXJuLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAodGhpcy5ibG9ja3MpIHtcbiAgICAgICAgY29uc3QgcCA9IHBhdHRlcm4uc2xpY2UoaSk7XG4gICAgICAgIGNvbnN0IGJOYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuYmxvY2tzKS5maWx0ZXIoYk5hbWUgPT4gcC5pbmRleE9mKGJOYW1lKSA9PT0gMCk7XG4gICAgICAgIC8vIG9yZGVyIGJ5IGtleSBsZW5ndGhcbiAgICAgICAgYk5hbWVzLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpO1xuICAgICAgICAvLyB1c2UgYmxvY2sgbmFtZSB3aXRoIG1heCBsZW5ndGhcbiAgICAgICAgY29uc3QgYk5hbWUgPSBiTmFtZXNbMF07XG4gICAgICAgIGlmIChiTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGV4cG9zZSxcbiAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgIC4uLmJPcHRzXG4gICAgICAgICAgfSA9IG5vcm1hbGl6ZU9wdHModGhpcy5ibG9ja3NbYk5hbWVdKTsgLy8gVE9ETyB0eXBlIE9wdHM8QXJnICYgRXh0cmE+XG4gICAgICAgICAgY29uc3QgYmxvY2tPcHRzID0ge1xuICAgICAgICAgICAgbGF6eTogdGhpcy5sYXp5LFxuICAgICAgICAgICAgZWFnZXI6IHRoaXMuZWFnZXIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlckNoYXI6IHRoaXMucGxhY2Vob2xkZXJDaGFyLFxuICAgICAgICAgICAgZGlzcGxheUNoYXI6IHRoaXMuZGlzcGxheUNoYXIsXG4gICAgICAgICAgICBvdmVyd3JpdGU6IHRoaXMub3ZlcndyaXRlLFxuICAgICAgICAgICAgYXV0b2ZpeDogdGhpcy5hdXRvZml4LFxuICAgICAgICAgICAgLi4uYk9wdHMsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXNcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IG1hc2tlZEJsb2NrID0gcmVwZWF0ICE9IG51bGwgPyBuZXcgSU1hc2suUmVwZWF0QmxvY2soYmxvY2tPcHRzIC8qIFRPRE8gKi8pIDogY3JlYXRlTWFzayhibG9ja09wdHMpO1xuICAgICAgICAgIGlmIChtYXNrZWRCbG9jaykge1xuICAgICAgICAgICAgdGhpcy5fYmxvY2tzLnB1c2gobWFza2VkQmxvY2spO1xuICAgICAgICAgICAgaWYgKGV4cG9zZSkgdGhpcy5leHBvc2VCbG9jayA9IG1hc2tlZEJsb2NrO1xuXG4gICAgICAgICAgICAvLyBzdG9yZSBibG9jayBpbmRleFxuICAgICAgICAgICAgaWYgKCF0aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdKSB0aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdID0gW107XG4gICAgICAgICAgICB0aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdLnB1c2godGhpcy5fYmxvY2tzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpICs9IGJOYW1lLmxlbmd0aCAtIDE7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBjaGFyID0gcGF0dGVybltpXTtcbiAgICAgIGxldCBpc0lucHV0ID0gKGNoYXIgaW4gZGVmcyk7XG4gICAgICBpZiAoY2hhciA9PT0gTWFza2VkUGF0dGVybi5TVE9QX0NIQVIpIHtcbiAgICAgICAgdGhpcy5fc3RvcHMucHVzaCh0aGlzLl9ibG9ja3MubGVuZ3RoKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoY2hhciA9PT0gJ3snIHx8IGNoYXIgPT09ICd9Jykge1xuICAgICAgICB1bm1hc2tpbmdCbG9jayA9ICF1bm1hc2tpbmdCbG9jaztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoY2hhciA9PT0gJ1snIHx8IGNoYXIgPT09ICddJykge1xuICAgICAgICBvcHRpb25hbEJsb2NrID0gIW9wdGlvbmFsQmxvY2s7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGNoYXIgPT09IE1hc2tlZFBhdHRlcm4uRVNDQVBFX0NIQVIpIHtcbiAgICAgICAgKytpO1xuICAgICAgICBjaGFyID0gcGF0dGVybltpXTtcbiAgICAgICAgaWYgKCFjaGFyKSBicmVhaztcbiAgICAgICAgaXNJbnB1dCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3QgZGVmID0gaXNJbnB1dCA/IG5ldyBQYXR0ZXJuSW5wdXREZWZpbml0aW9uKHtcbiAgICAgICAgaXNPcHRpb25hbDogb3B0aW9uYWxCbG9jayxcbiAgICAgICAgbGF6eTogdGhpcy5sYXp5LFxuICAgICAgICBlYWdlcjogdGhpcy5lYWdlcixcbiAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiB0aGlzLnBsYWNlaG9sZGVyQ2hhcixcbiAgICAgICAgZGlzcGxheUNoYXI6IHRoaXMuZGlzcGxheUNoYXIsXG4gICAgICAgIC4uLm5vcm1hbGl6ZU9wdHMoZGVmc1tjaGFyXSksXG4gICAgICAgIHBhcmVudDogdGhpc1xuICAgICAgfSkgOiBuZXcgUGF0dGVybkZpeGVkRGVmaW5pdGlvbih7XG4gICAgICAgIGNoYXIsXG4gICAgICAgIGVhZ2VyOiB0aGlzLmVhZ2VyLFxuICAgICAgICBpc1VubWFza2luZzogdW5tYXNraW5nQmxvY2tcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYmxvY2tzLnB1c2goZGVmKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdXBlci5zdGF0ZSxcbiAgICAgIF9ibG9ja3M6IHRoaXMuX2Jsb2Nrcy5tYXAoYiA9PiBiLnN0YXRlKVxuICAgIH07XG4gIH1cbiAgc2V0IHN0YXRlKHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBfYmxvY2tzLFxuICAgICAgLi4ubWFza2VkU3RhdGVcbiAgICB9ID0gc3RhdGU7XG4gICAgdGhpcy5fYmxvY2tzLmZvckVhY2goKGIsIGJpKSA9PiBiLnN0YXRlID0gX2Jsb2Nrc1tiaV0pO1xuICAgIHN1cGVyLnN0YXRlID0gbWFza2VkU3RhdGU7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgc3VwZXIucmVzZXQoKTtcbiAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChiID0+IGIucmVzZXQoKSk7XG4gIH1cbiAgZ2V0IGlzQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwb3NlQmxvY2sgPyB0aGlzLmV4cG9zZUJsb2NrLmlzQ29tcGxldGUgOiB0aGlzLl9ibG9ja3MuZXZlcnkoYiA9PiBiLmlzQ29tcGxldGUpO1xuICB9XG4gIGdldCBpc0ZpbGxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tzLmV2ZXJ5KGIgPT4gYi5pc0ZpbGxlZCk7XG4gIH1cbiAgZ2V0IGlzRml4ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5ldmVyeShiID0+IGIuaXNGaXhlZCk7XG4gIH1cbiAgZ2V0IGlzT3B0aW9uYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5ldmVyeShiID0+IGIuaXNPcHRpb25hbCk7XG4gIH1cbiAgZG9Db21taXQoKSB7XG4gICAgdGhpcy5fYmxvY2tzLmZvckVhY2goYiA9PiBiLmRvQ29tbWl0KCkpO1xuICAgIHN1cGVyLmRvQ29tbWl0KCk7XG4gIH1cbiAgZ2V0IHVubWFza2VkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwb3NlQmxvY2sgPyB0aGlzLmV4cG9zZUJsb2NrLnVubWFza2VkVmFsdWUgOiB0aGlzLl9ibG9ja3MucmVkdWNlKChzdHIsIGIpID0+IHN0ciArPSBiLnVubWFza2VkVmFsdWUsICcnKTtcbiAgfVxuICBzZXQgdW5tYXNrZWRWYWx1ZSh1bm1hc2tlZFZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZXhwb3NlQmxvY2spIHtcbiAgICAgIGNvbnN0IHRhaWwgPSB0aGlzLmV4dHJhY3RUYWlsKHRoaXMuX2Jsb2NrU3RhcnRQb3ModGhpcy5fYmxvY2tzLmluZGV4T2YodGhpcy5leHBvc2VCbG9jaykpICsgdGhpcy5leHBvc2VCbG9jay5kaXNwbGF5VmFsdWUubGVuZ3RoKTtcbiAgICAgIHRoaXMuZXhwb3NlQmxvY2sudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkVmFsdWU7XG4gICAgICB0aGlzLmFwcGVuZFRhaWwodGFpbCk7XG4gICAgICB0aGlzLmRvQ29tbWl0KCk7XG4gICAgfSBlbHNlIHN1cGVyLnVubWFza2VkVmFsdWUgPSB1bm1hc2tlZFZhbHVlO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5leHBvc2VCbG9jayA/IHRoaXMuZXhwb3NlQmxvY2sudmFsdWUgOlxuICAgIC8vIFRPRE8gcmV0dXJuIF92YWx1ZSB3aGVuIG5vdCBpbiBjaGFuZ2U/XG4gICAgdGhpcy5fYmxvY2tzLnJlZHVjZSgoc3RyLCBiKSA9PiBzdHIgKz0gYi52YWx1ZSwgJycpO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmV4cG9zZUJsb2NrKSB7XG4gICAgICBjb25zdCB0YWlsID0gdGhpcy5leHRyYWN0VGFpbCh0aGlzLl9ibG9ja1N0YXJ0UG9zKHRoaXMuX2Jsb2Nrcy5pbmRleE9mKHRoaXMuZXhwb3NlQmxvY2spKSArIHRoaXMuZXhwb3NlQmxvY2suZGlzcGxheVZhbHVlLmxlbmd0aCk7XG4gICAgICB0aGlzLmV4cG9zZUJsb2NrLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmFwcGVuZFRhaWwodGFpbCk7XG4gICAgICB0aGlzLmRvQ29tbWl0KCk7XG4gICAgfSBlbHNlIHN1cGVyLnZhbHVlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwb3NlQmxvY2sgPyB0aGlzLmV4cG9zZUJsb2NrLnR5cGVkVmFsdWUgOiBzdXBlci50eXBlZFZhbHVlO1xuICB9XG4gIHNldCB0eXBlZFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZXhwb3NlQmxvY2spIHtcbiAgICAgIGNvbnN0IHRhaWwgPSB0aGlzLmV4dHJhY3RUYWlsKHRoaXMuX2Jsb2NrU3RhcnRQb3ModGhpcy5fYmxvY2tzLmluZGV4T2YodGhpcy5leHBvc2VCbG9jaykpICsgdGhpcy5leHBvc2VCbG9jay5kaXNwbGF5VmFsdWUubGVuZ3RoKTtcbiAgICAgIHRoaXMuZXhwb3NlQmxvY2sudHlwZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5hcHBlbmRUYWlsKHRhaWwpO1xuICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgIH0gZWxzZSBzdXBlci50eXBlZFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRpc3BsYXlWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnJlZHVjZSgoc3RyLCBiKSA9PiBzdHIgKz0gYi5kaXNwbGF5VmFsdWUsICcnKTtcbiAgfVxuICBhcHBlbmRUYWlsKHRhaWwpIHtcbiAgICByZXR1cm4gc3VwZXIuYXBwZW5kVGFpbCh0YWlsKS5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kUGxhY2Vob2xkZXIoKSk7XG4gIH1cbiAgX2FwcGVuZEVhZ2VyKCkge1xuICAgIHZhciBfdGhpcyRfbWFwUG9zVG9CbG9jaztcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICBsZXQgc3RhcnRCbG9ja0luZGV4ID0gKF90aGlzJF9tYXBQb3NUb0Jsb2NrID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGgpKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkX21hcFBvc1RvQmxvY2suaW5kZXg7XG4gICAgaWYgKHN0YXJ0QmxvY2tJbmRleCA9PSBudWxsKSByZXR1cm4gZGV0YWlscztcblxuICAgIC8vIFRPRE8gdGVzdCBpZiBpdCB3b3JrcyBmb3IgbmVzdGVkIHBhdHRlcm4gbWFza3NcbiAgICBpZiAodGhpcy5fYmxvY2tzW3N0YXJ0QmxvY2tJbmRleF0uaXNGaWxsZWQpICsrc3RhcnRCbG9ja0luZGV4O1xuICAgIGZvciAobGV0IGJpID0gc3RhcnRCbG9ja0luZGV4OyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcbiAgICAgIGNvbnN0IGQgPSB0aGlzLl9ibG9ja3NbYmldLl9hcHBlbmRFYWdlcigpO1xuICAgICAgaWYgKCFkLmluc2VydGVkKSBicmVhaztcbiAgICAgIGRldGFpbHMuYWdncmVnYXRlKGQpO1xuICAgIH1cbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuICBfYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgY29uc3QgYmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGgpO1xuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIGlmICghYmxvY2tJdGVyKSByZXR1cm4gZGV0YWlscztcbiAgICBmb3IgKGxldCBiaSA9IGJsb2NrSXRlci5pbmRleCwgYmxvY2s7IGJsb2NrID0gdGhpcy5fYmxvY2tzW2JpXTsgKytiaSkge1xuICAgICAgdmFyIF9mbGFncyRfYmVmb3JlVGFpbFN0YTtcbiAgICAgIGNvbnN0IGJsb2NrRGV0YWlscyA9IGJsb2NrLl9hcHBlbmRDaGFyKGNoLCB7XG4gICAgICAgIC4uLmZsYWdzLFxuICAgICAgICBfYmVmb3JlVGFpbFN0YXRlOiAoX2ZsYWdzJF9iZWZvcmVUYWlsU3RhID0gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSkgPT0gbnVsbCB8fCAoX2ZsYWdzJF9iZWZvcmVUYWlsU3RhID0gX2ZsYWdzJF9iZWZvcmVUYWlsU3RhLl9ibG9ja3MpID09IG51bGwgPyB2b2lkIDAgOiBfZmxhZ3MkX2JlZm9yZVRhaWxTdGFbYmldXG4gICAgICB9KTtcbiAgICAgIGRldGFpbHMuYWdncmVnYXRlKGJsb2NrRGV0YWlscyk7XG4gICAgICBpZiAoYmxvY2tEZXRhaWxzLmNvbnN1bWVkKSBicmVhazsgLy8gZ28gbmV4dCBjaGFyXG4gICAgfVxuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIGV4dHJhY3RUYWlsKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgY29uc3QgY2h1bmtUYWlsID0gbmV3IENodW5rc1RhaWxEZXRhaWxzKCk7XG4gICAgaWYgKGZyb21Qb3MgPT09IHRvUG9zKSByZXR1cm4gY2h1bmtUYWlsO1xuICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCAoYiwgYmksIGJGcm9tUG9zLCBiVG9Qb3MpID0+IHtcbiAgICAgIGNvbnN0IGJsb2NrQ2h1bmsgPSBiLmV4dHJhY3RUYWlsKGJGcm9tUG9zLCBiVG9Qb3MpO1xuICAgICAgYmxvY2tDaHVuay5zdG9wID0gdGhpcy5fZmluZFN0b3BCZWZvcmUoYmkpO1xuICAgICAgYmxvY2tDaHVuay5mcm9tID0gdGhpcy5fYmxvY2tTdGFydFBvcyhiaSk7XG4gICAgICBpZiAoYmxvY2tDaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzKSBibG9ja0NodW5rLmJsb2NrSW5kZXggPSBiaTtcbiAgICAgIGNodW5rVGFpbC5leHRlbmQoYmxvY2tDaHVuayk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNodW5rVGFpbDtcbiAgfVxuICBleHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGlmIChmcm9tUG9zID09PSB0b1BvcykgcmV0dXJuICcnO1xuICAgIGxldCBpbnB1dCA9ICcnO1xuICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCAoYiwgXywgZnJvbVBvcywgdG9Qb3MpID0+IHtcbiAgICAgIGlucHV0ICs9IGIuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG4gIF9maW5kU3RvcEJlZm9yZShibG9ja0luZGV4KSB7XG4gICAgbGV0IHN0b3BCZWZvcmU7XG4gICAgZm9yIChsZXQgc2kgPSAwOyBzaSA8IHRoaXMuX3N0b3BzLmxlbmd0aDsgKytzaSkge1xuICAgICAgY29uc3Qgc3RvcCA9IHRoaXMuX3N0b3BzW3NpXTtcbiAgICAgIGlmIChzdG9wIDw9IGJsb2NrSW5kZXgpIHN0b3BCZWZvcmUgPSBzdG9wO2Vsc2UgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBzdG9wQmVmb3JlO1xuICB9XG5cbiAgLyoqIEFwcGVuZHMgcGxhY2Vob2xkZXIgZGVwZW5kaW5nIG9uIGxhemluZXNzICovXG4gIF9hcHBlbmRQbGFjZWhvbGRlcih0b0Jsb2NrSW5kZXgpIHtcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICBpZiAodGhpcy5sYXp5ICYmIHRvQmxvY2tJbmRleCA9PSBudWxsKSByZXR1cm4gZGV0YWlscztcbiAgICBjb25zdCBzdGFydEJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoKTtcbiAgICBpZiAoIXN0YXJ0QmxvY2tJdGVyKSByZXR1cm4gZGV0YWlscztcbiAgICBjb25zdCBzdGFydEJsb2NrSW5kZXggPSBzdGFydEJsb2NrSXRlci5pbmRleDtcbiAgICBjb25zdCBlbmRCbG9ja0luZGV4ID0gdG9CbG9ja0luZGV4ICE9IG51bGwgPyB0b0Jsb2NrSW5kZXggOiB0aGlzLl9ibG9ja3MubGVuZ3RoO1xuICAgIHRoaXMuX2Jsb2Nrcy5zbGljZShzdGFydEJsb2NrSW5kZXgsIGVuZEJsb2NrSW5kZXgpLmZvckVhY2goYiA9PiB7XG4gICAgICBpZiAoIWIubGF6eSB8fCB0b0Jsb2NrSW5kZXggIT0gbnVsbCkge1xuICAgICAgICB2YXIgX2Jsb2NrczI7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKGIuX2FwcGVuZFBsYWNlaG9sZGVyKChfYmxvY2tzMiA9IGIuX2Jsb2NrcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9ibG9ja3MyLmxlbmd0aCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG5cbiAgLyoqIEZpbmRzIGJsb2NrIGluIHBvcyAqL1xuICBfbWFwUG9zVG9CbG9jayhwb3MpIHtcbiAgICBsZXQgYWNjVmFsID0gJyc7XG4gICAgZm9yIChsZXQgYmkgPSAwOyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcbiAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5fYmxvY2tzW2JpXTtcbiAgICAgIGNvbnN0IGJsb2NrU3RhcnRQb3MgPSBhY2NWYWwubGVuZ3RoO1xuICAgICAgYWNjVmFsICs9IGJsb2NrLmRpc3BsYXlWYWx1ZTtcbiAgICAgIGlmIChwb3MgPD0gYWNjVmFsLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGluZGV4OiBiaSxcbiAgICAgICAgICBvZmZzZXQ6IHBvcyAtIGJsb2NrU3RhcnRQb3NcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX2Jsb2NrU3RhcnRQb3MoYmxvY2tJbmRleCkge1xuICAgIHJldHVybiB0aGlzLl9ibG9ja3Muc2xpY2UoMCwgYmxvY2tJbmRleCkucmVkdWNlKChwb3MsIGIpID0+IHBvcyArPSBiLmRpc3BsYXlWYWx1ZS5sZW5ndGgsIDApO1xuICB9XG4gIF9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgZm4pIHtcbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IGZyb21CbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKGZyb21Qb3MpO1xuICAgIGlmIChmcm9tQmxvY2tJdGVyKSB7XG4gICAgICBjb25zdCB0b0Jsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodG9Qb3MpO1xuICAgICAgLy8gcHJvY2VzcyBmaXJzdCBibG9ja1xuICAgICAgY29uc3QgaXNTYW1lQmxvY2sgPSB0b0Jsb2NrSXRlciAmJiBmcm9tQmxvY2tJdGVyLmluZGV4ID09PSB0b0Jsb2NrSXRlci5pbmRleDtcbiAgICAgIGNvbnN0IGZyb21CbG9ja1N0YXJ0UG9zID0gZnJvbUJsb2NrSXRlci5vZmZzZXQ7XG4gICAgICBjb25zdCBmcm9tQmxvY2tFbmRQb3MgPSB0b0Jsb2NrSXRlciAmJiBpc1NhbWVCbG9jayA/IHRvQmxvY2tJdGVyLm9mZnNldCA6IHRoaXMuX2Jsb2Nrc1tmcm9tQmxvY2tJdGVyLmluZGV4XS5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgICAgZm4odGhpcy5fYmxvY2tzW2Zyb21CbG9ja0l0ZXIuaW5kZXhdLCBmcm9tQmxvY2tJdGVyLmluZGV4LCBmcm9tQmxvY2tTdGFydFBvcywgZnJvbUJsb2NrRW5kUG9zKTtcbiAgICAgIGlmICh0b0Jsb2NrSXRlciAmJiAhaXNTYW1lQmxvY2spIHtcbiAgICAgICAgLy8gcHJvY2VzcyBpbnRlcm1lZGlhdGUgYmxvY2tzXG4gICAgICAgIGZvciAobGV0IGJpID0gZnJvbUJsb2NrSXRlci5pbmRleCArIDE7IGJpIDwgdG9CbG9ja0l0ZXIuaW5kZXg7ICsrYmkpIHtcbiAgICAgICAgICBmbih0aGlzLl9ibG9ja3NbYmldLCBiaSwgMCwgdGhpcy5fYmxvY2tzW2JpXS5kaXNwbGF5VmFsdWUubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByb2Nlc3MgbGFzdCBibG9ja1xuICAgICAgICBmbih0aGlzLl9ibG9ja3NbdG9CbG9ja0l0ZXIuaW5kZXhdLCB0b0Jsb2NrSXRlci5pbmRleCwgMCwgdG9CbG9ja0l0ZXIub2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVtb3ZlKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlRGV0YWlscyA9IHN1cGVyLnJlbW92ZShmcm9tUG9zLCB0b1Bvcyk7XG4gICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIChiLCBfLCBiRnJvbVBvcywgYlRvUG9zKSA9PiB7XG4gICAgICByZW1vdmVEZXRhaWxzLmFnZ3JlZ2F0ZShiLnJlbW92ZShiRnJvbVBvcywgYlRvUG9zKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlbW92ZURldGFpbHM7XG4gIH1cbiAgbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICBkaXJlY3Rpb24gPSBESVJFQ1RJT04uTk9ORTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9ibG9ja3MubGVuZ3RoKSByZXR1cm4gMDtcbiAgICBjb25zdCBjdXJzb3IgPSBuZXcgUGF0dGVybkN1cnNvcih0aGlzLCBjdXJzb3JQb3MpO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5OT05FKSB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBOT05FIHNob3VsZCBvbmx5IGdvIG91dCBmcm9tIGZpeGVkIHRvIHRoZSByaWdodCFcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGlmIChjdXJzb3IucHVzaFJpZ2h0QmVmb3JlSW5wdXQoKSkgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgIGlmIChjdXJzb3IucHVzaExlZnRCZWZvcmVJbnB1dCgpKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gRk9SQ0UgaXMgb25seSBhYm91dCBhfCogb3RoZXJ3aXNlIGlzIDBcbiAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSB7XG4gICAgICAvLyB0cnkgdG8gYnJlYWsgZmFzdCB3aGVuICp8YVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkxFRlQpIHtcbiAgICAgICAgY3Vyc29yLnB1c2hSaWdodEJlZm9yZUZpbGxlZCgpO1xuICAgICAgICBpZiAoY3Vyc29yLm9rICYmIGN1cnNvci5wb3MgPT09IGN1cnNvclBvcykgcmV0dXJuIGN1cnNvclBvcztcbiAgICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZvcndhcmQgZmxvd1xuICAgICAgY3Vyc29yLnB1c2hMZWZ0QmVmb3JlSW5wdXQoKTtcbiAgICAgIGN1cnNvci5wdXNoTGVmdEJlZm9yZVJlcXVpcmVkKCk7XG4gICAgICBjdXJzb3IucHVzaExlZnRCZWZvcmVGaWxsZWQoKTtcblxuICAgICAgLy8gYmFja3dhcmQgZmxvd1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkxFRlQpIHtcbiAgICAgICAgY3Vyc29yLnB1c2hSaWdodEJlZm9yZUlucHV0KCk7XG4gICAgICAgIGN1cnNvci5wdXNoUmlnaHRCZWZvcmVSZXF1aXJlZCgpO1xuICAgICAgICBpZiAoY3Vyc29yLm9rICYmIGN1cnNvci5wb3MgPD0gY3Vyc29yUG9zKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICAgIGlmIChjdXJzb3Iub2sgJiYgY3Vyc29yLnBvcyA8PSBjdXJzb3JQb3MpIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJzb3Iub2spIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQpIHJldHVybiAwO1xuICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICBpZiAoY3Vyc29yLm9rKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgaWYgKGN1cnNvci5vaykgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlJJR0hUIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX1JJR0hUKSB7XG4gICAgICAvLyBmb3J3YXJkIGZsb3dcbiAgICAgIGN1cnNvci5wdXNoUmlnaHRCZWZvcmVJbnB1dCgpO1xuICAgICAgY3Vyc29yLnB1c2hSaWdodEJlZm9yZVJlcXVpcmVkKCk7XG4gICAgICBpZiAoY3Vyc29yLnB1c2hSaWdodEJlZm9yZUZpbGxlZCgpKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCkgcmV0dXJuIHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aDtcblxuICAgICAgLy8gYmFja3dhcmQgZmxvd1xuICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICBpZiAoY3Vyc29yLm9rKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgaWYgKGN1cnNvci5vaykgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICByZXR1cm4gdGhpcy5uZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBESVJFQ1RJT04uTEVGVCk7XG4gICAgfVxuICAgIHJldHVybiBjdXJzb3JQb3M7XG4gIH1cbiAgdG90YWxJbnB1dFBvc2l0aW9ucyhmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIChiLCBfLCBiRnJvbVBvcywgYlRvUG9zKSA9PiB7XG4gICAgICB0b3RhbCArPSBiLnRvdGFsSW5wdXRQb3NpdGlvbnMoYkZyb21Qb3MsIGJUb1Bvcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvdGFsO1xuICB9XG5cbiAgLyoqIEdldCBibG9jayBieSBuYW1lICovXG4gIG1hc2tlZEJsb2NrKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrZWRCbG9ja3MobmFtZSlbMF07XG4gIH1cblxuICAvKiogR2V0IGFsbCBibG9ja3MgYnkgbmFtZSAqL1xuICBtYXNrZWRCbG9ja3MobmFtZSkge1xuICAgIGNvbnN0IGluZGljZXMgPSB0aGlzLl9tYXNrZWRCbG9ja3NbbmFtZV07XG4gICAgaWYgKCFpbmRpY2VzKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGluZGljZXMubWFwKGdpID0+IHRoaXMuX2Jsb2Nrc1tnaV0pO1xuICB9XG4gIHBhZChmbGFncykge1xuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKDAsIHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aCwgYiA9PiBkZXRhaWxzLmFnZ3JlZ2F0ZShiLnBhZChmbGFncykpKTtcbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxufVxuTWFza2VkUGF0dGVybi5ERUZBVUxUUyA9IHtcbiAgLi4uTWFza2VkLkRFRkFVTFRTLFxuICBsYXp5OiB0cnVlLFxuICBwbGFjZWhvbGRlckNoYXI6ICdfJ1xufTtcbk1hc2tlZFBhdHRlcm4uU1RPUF9DSEFSID0gJ2AnO1xuTWFza2VkUGF0dGVybi5FU0NBUEVfQ0hBUiA9ICdcXFxcJztcbk1hc2tlZFBhdHRlcm4uSW5wdXREZWZpbml0aW9uID0gUGF0dGVybklucHV0RGVmaW5pdGlvbjtcbk1hc2tlZFBhdHRlcm4uRml4ZWREZWZpbml0aW9uID0gUGF0dGVybkZpeGVkRGVmaW5pdGlvbjtcbklNYXNrLk1hc2tlZFBhdHRlcm4gPSBNYXNrZWRQYXR0ZXJuO1xuXG5leHBvcnQgeyBNYXNrZWRQYXR0ZXJuIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBDb250aW51b3VzVGFpbERldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vLi4vY29yZS9ob2xkZXIuanMnO1xuXG5jbGFzcyBDaHVua3NUYWlsRGV0YWlscyB7XG4gIC8qKiAqL1xuXG4gIGNvbnN0cnVjdG9yKGNodW5rcywgZnJvbSkge1xuICAgIGlmIChjaHVua3MgPT09IHZvaWQgMCkge1xuICAgICAgY2h1bmtzID0gW107XG4gICAgfVxuICAgIGlmIChmcm9tID09PSB2b2lkIDApIHtcbiAgICAgIGZyb20gPSAwO1xuICAgIH1cbiAgICB0aGlzLmNodW5rcyA9IGNodW5rcztcbiAgICB0aGlzLmZyb20gPSBmcm9tO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmNodW5rcy5tYXAoU3RyaW5nKS5qb2luKCcnKTtcbiAgfVxuICBleHRlbmQodGFpbENodW5rKSB7XG4gICAgaWYgKCFTdHJpbmcodGFpbENodW5rKSkgcmV0dXJuO1xuICAgIHRhaWxDaHVuayA9IGlzU3RyaW5nKHRhaWxDaHVuaykgPyBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsQ2h1bmspKSA6IHRhaWxDaHVuaztcbiAgICBjb25zdCBsYXN0Q2h1bmsgPSB0aGlzLmNodW5rc1t0aGlzLmNodW5rcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBleHRlbmRMYXN0ID0gbGFzdENodW5rICYmIChcbiAgICAvLyBpZiBzdG9wcyBhcmUgc2FtZSBvciB0YWlsIGhhcyBubyBzdG9wXG4gICAgbGFzdENodW5rLnN0b3AgPT09IHRhaWxDaHVuay5zdG9wIHx8IHRhaWxDaHVuay5zdG9wID09IG51bGwpICYmXG4gICAgLy8gaWYgdGFpbCBjaHVuayBnb2VzIGp1c3QgYWZ0ZXIgbGFzdCBjaHVua1xuICAgIHRhaWxDaHVuay5mcm9tID09PSBsYXN0Q2h1bmsuZnJvbSArIGxhc3RDaHVuay50b1N0cmluZygpLmxlbmd0aDtcbiAgICBpZiAodGFpbENodW5rIGluc3RhbmNlb2YgQ29udGludW91c1RhaWxEZXRhaWxzKSB7XG4gICAgICAvLyBjaGVjayB0aGUgYWJpbGl0eSB0byBleHRlbmQgcHJldmlvdXMgY2h1bmtcbiAgICAgIGlmIChleHRlbmRMYXN0KSB7XG4gICAgICAgIC8vIGV4dGVuZCBwcmV2aW91cyBjaHVua1xuICAgICAgICBsYXN0Q2h1bmsuZXh0ZW5kKHRhaWxDaHVuay50b1N0cmluZygpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFwcGVuZCBuZXcgY2h1bmtcbiAgICAgICAgdGhpcy5jaHVua3MucHVzaCh0YWlsQ2h1bmspO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGFpbENodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMpIHtcbiAgICAgIGlmICh0YWlsQ2h1bmsuc3RvcCA9PSBudWxsKSB7XG4gICAgICAgIC8vIHVud3JhcCBmbG9hdGluZyBjaHVua3MgdG8gcGFyZW50LCBrZWVwaW5nIGBmcm9tYCBwb3NcbiAgICAgICAgbGV0IGZpcnN0VGFpbENodW5rO1xuICAgICAgICB3aGlsZSAodGFpbENodW5rLmNodW5rcy5sZW5ndGggJiYgdGFpbENodW5rLmNodW5rc1swXS5zdG9wID09IG51bGwpIHtcbiAgICAgICAgICBmaXJzdFRhaWxDaHVuayA9IHRhaWxDaHVuay5jaHVua3Muc2hpZnQoKTsgLy8gbm90IHBvc3NpYmxlIHRvIGJlIGB1bmRlZmluZWRgIGJlY2F1c2UgbGVuZ3RoIHdhcyBjaGVja2VkIGFib3ZlXG4gICAgICAgICAgZmlyc3RUYWlsQ2h1bmsuZnJvbSArPSB0YWlsQ2h1bmsuZnJvbTtcbiAgICAgICAgICB0aGlzLmV4dGVuZChmaXJzdFRhaWxDaHVuayk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gaWYgdGFpbCBjaHVuayBzdGlsbCBoYXMgdmFsdWVcbiAgICAgIGlmICh0YWlsQ2h1bmsudG9TdHJpbmcoKSkge1xuICAgICAgICAvLyBpZiBjaHVua3MgY29udGFpbnMgc3RvcHMsIHRoZW4gcG9wdXAgc3RvcCB0byBjb250YWluZXJcbiAgICAgICAgdGFpbENodW5rLnN0b3AgPSB0YWlsQ2h1bmsuYmxvY2tJbmRleDtcbiAgICAgICAgdGhpcy5jaHVua3MucHVzaCh0YWlsQ2h1bmspO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhcHBlbmRUbyhtYXNrZWQpIHtcbiAgICBpZiAoIShtYXNrZWQgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWRQYXR0ZXJuKSkge1xuICAgICAgY29uc3QgdGFpbCA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHModGhpcy50b1N0cmluZygpKTtcbiAgICAgIHJldHVybiB0YWlsLmFwcGVuZFRvKG1hc2tlZCk7XG4gICAgfVxuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIGZvciAobGV0IGNpID0gMDsgY2kgPCB0aGlzLmNodW5rcy5sZW5ndGg7ICsrY2kpIHtcbiAgICAgIGNvbnN0IGNodW5rID0gdGhpcy5jaHVua3NbY2ldO1xuICAgICAgY29uc3QgbGFzdEJsb2NrSXRlciA9IG1hc2tlZC5fbWFwUG9zVG9CbG9jayhtYXNrZWQuZGlzcGxheVZhbHVlLmxlbmd0aCk7XG4gICAgICBjb25zdCBzdG9wID0gY2h1bmsuc3RvcDtcbiAgICAgIGxldCBjaHVua0Jsb2NrO1xuICAgICAgaWYgKHN0b3AgIT0gbnVsbCAmJiAoXG4gICAgICAvLyBpZiBibG9jayBub3QgZm91bmQgb3Igc3RvcCBpcyBiZWhpbmQgbGFzdEJsb2NrXG4gICAgICAhbGFzdEJsb2NrSXRlciB8fCBsYXN0QmxvY2tJdGVyLmluZGV4IDw9IHN0b3ApKSB7XG4gICAgICAgIGlmIChjaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzIHx8XG4gICAgICAgIC8vIGZvciBjb250aW51b3VzIGJsb2NrIGFsc28gY2hlY2sgaWYgc3RvcCBpcyBleGlzdFxuICAgICAgICBtYXNrZWQuX3N0b3BzLmluZGV4T2Yoc3RvcCkgPj0gMCkge1xuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5fYXBwZW5kUGxhY2Vob2xkZXIoc3RvcCkpO1xuICAgICAgICB9XG4gICAgICAgIGNodW5rQmxvY2sgPSBjaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzICYmIG1hc2tlZC5fYmxvY2tzW3N0b3BdO1xuICAgICAgfVxuICAgICAgaWYgKGNodW5rQmxvY2spIHtcbiAgICAgICAgY29uc3QgdGFpbERldGFpbHMgPSBjaHVua0Jsb2NrLmFwcGVuZFRhaWwoY2h1bmspO1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0YWlsRGV0YWlscyk7XG5cbiAgICAgICAgLy8gZ2V0IG5vdCBpbnNlcnRlZCBjaGFyc1xuICAgICAgICBjb25zdCByZW1haW5DaGFycyA9IGNodW5rLnRvU3RyaW5nKCkuc2xpY2UodGFpbERldGFpbHMucmF3SW5zZXJ0ZWQubGVuZ3RoKTtcbiAgICAgICAgaWYgKHJlbWFpbkNoYXJzKSBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuYXBwZW5kKHJlbWFpbkNoYXJzLCB7XG4gICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuYXBwZW5kKGNodW5rLnRvU3RyaW5nKCksIHtcbiAgICAgICAgICB0YWlsOiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbiAgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjaHVua3M6IHRoaXMuY2h1bmtzLm1hcChjID0+IGMuc3RhdGUpLFxuICAgICAgZnJvbTogdGhpcy5mcm9tLFxuICAgICAgc3RvcDogdGhpcy5zdG9wLFxuICAgICAgYmxvY2tJbmRleDogdGhpcy5ibG9ja0luZGV4XG4gICAgfTtcbiAgfVxuICBzZXQgc3RhdGUoc3RhdGUpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaHVua3MsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSBzdGF0ZTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHByb3BzKTtcbiAgICB0aGlzLmNodW5rcyA9IGNodW5rcy5tYXAoY3N0YXRlID0+IHtcbiAgICAgIGNvbnN0IGNodW5rID0gXCJjaHVua3NcIiBpbiBjc3RhdGUgPyBuZXcgQ2h1bmtzVGFpbERldGFpbHMoKSA6IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoKTtcbiAgICAgIGNodW5rLnN0YXRlID0gY3N0YXRlO1xuICAgICAgcmV0dXJuIGNodW5rO1xuICAgIH0pO1xuICB9XG4gIHVuc2hpZnQoYmVmb3JlUG9zKSB7XG4gICAgaWYgKCF0aGlzLmNodW5rcy5sZW5ndGggfHwgYmVmb3JlUG9zICE9IG51bGwgJiYgdGhpcy5mcm9tID49IGJlZm9yZVBvcykgcmV0dXJuICcnO1xuICAgIGNvbnN0IGNodW5rU2hpZnRQb3MgPSBiZWZvcmVQb3MgIT0gbnVsbCA/IGJlZm9yZVBvcyAtIHRoaXMuZnJvbSA6IGJlZm9yZVBvcztcbiAgICBsZXQgY2kgPSAwO1xuICAgIHdoaWxlIChjaSA8IHRoaXMuY2h1bmtzLmxlbmd0aCkge1xuICAgICAgY29uc3QgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XG4gICAgICBjb25zdCBzaGlmdENoYXIgPSBjaHVuay51bnNoaWZ0KGNodW5rU2hpZnRQb3MpO1xuICAgICAgaWYgKGNodW5rLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgLy8gY2h1bmsgc3RpbGwgY29udGFpbnMgdmFsdWVcbiAgICAgICAgLy8gYnV0IG5vdCBzaGlmdGVkIC0gbWVhbnMgbm8gbW9yZSBhdmFpbGFibGUgY2hhcnMgdG8gc2hpZnRcbiAgICAgICAgaWYgKCFzaGlmdENoYXIpIGJyZWFrO1xuICAgICAgICArK2NpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY2xlYW4gaWYgY2h1bmsgaGFzIG5vIHZhbHVlXG4gICAgICAgIHRoaXMuY2h1bmtzLnNwbGljZShjaSwgMSk7XG4gICAgICB9XG4gICAgICBpZiAoc2hpZnRDaGFyKSByZXR1cm4gc2hpZnRDaGFyO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgc2hpZnQoKSB7XG4gICAgaWYgKCF0aGlzLmNodW5rcy5sZW5ndGgpIHJldHVybiAnJztcbiAgICBsZXQgY2kgPSB0aGlzLmNodW5rcy5sZW5ndGggLSAxO1xuICAgIHdoaWxlICgwIDw9IGNpKSB7XG4gICAgICBjb25zdCBjaHVuayA9IHRoaXMuY2h1bmtzW2NpXTtcbiAgICAgIGNvbnN0IHNoaWZ0Q2hhciA9IGNodW5rLnNoaWZ0KCk7XG4gICAgICBpZiAoY2h1bmsudG9TdHJpbmcoKSkge1xuICAgICAgICAvLyBjaHVuayBzdGlsbCBjb250YWlucyB2YWx1ZVxuICAgICAgICAvLyBidXQgbm90IHNoaWZ0ZWQgLSBtZWFucyBubyBtb3JlIGF2YWlsYWJsZSBjaGFycyB0byBzaGlmdFxuICAgICAgICBpZiAoIXNoaWZ0Q2hhcikgYnJlYWs7XG4gICAgICAgIC0tY2k7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjbGVhbiBpZiBjaHVuayBoYXMgbm8gdmFsdWVcbiAgICAgICAgdGhpcy5jaHVua3Muc3BsaWNlKGNpLCAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaGlmdENoYXIpIHJldHVybiBzaGlmdENoYXI7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5leHBvcnQgeyBDaHVua3NUYWlsRGV0YWlscyBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzLmpzJztcblxuY2xhc3MgUGF0dGVybkN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKG1hc2tlZCwgcG9zKSB7XG4gICAgdGhpcy5tYXNrZWQgPSBtYXNrZWQ7XG4gICAgdGhpcy5fbG9nID0gW107XG4gICAgY29uc3Qge1xuICAgICAgb2Zmc2V0LFxuICAgICAgaW5kZXhcbiAgICB9ID0gbWFza2VkLl9tYXBQb3NUb0Jsb2NrKHBvcykgfHwgKHBvcyA8IDAgP1xuICAgIC8vIGZpcnN0XG4gICAge1xuICAgICAgaW5kZXg6IDAsXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9IDpcbiAgICAvLyBsYXN0XG4gICAge1xuICAgICAgaW5kZXg6IHRoaXMubWFza2VkLl9ibG9ja3MubGVuZ3RoLFxuICAgICAgb2Zmc2V0OiAwXG4gICAgfSk7XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMub2sgPSBmYWxzZTtcbiAgfVxuICBnZXQgYmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2VkLl9ibG9ja3NbdGhpcy5pbmRleF07XG4gIH1cbiAgZ2V0IHBvcygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQuX2Jsb2NrU3RhcnRQb3ModGhpcy5pbmRleCkgKyB0aGlzLm9mZnNldDtcbiAgfVxuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgIG9rOiB0aGlzLm9rXG4gICAgfTtcbiAgfVxuICBzZXQgc3RhdGUocykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgcyk7XG4gIH1cbiAgcHVzaFN0YXRlKCkge1xuICAgIHRoaXMuX2xvZy5wdXNoKHRoaXMuc3RhdGUpO1xuICB9XG4gIHBvcFN0YXRlKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzLl9sb2cucG9wKCk7XG4gICAgaWYgKHMpIHRoaXMuc3RhdGUgPSBzO1xuICAgIHJldHVybiBzO1xuICB9XG4gIGJpbmRCbG9jaygpIHtcbiAgICBpZiAodGhpcy5ibG9jaykgcmV0dXJuO1xuICAgIGlmICh0aGlzLmluZGV4IDwgMCkge1xuICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLmluZGV4ID49IHRoaXMubWFza2VkLl9ibG9ja3MubGVuZ3RoKSB7XG4gICAgICB0aGlzLmluZGV4ID0gdGhpcy5tYXNrZWQuX2Jsb2Nrcy5sZW5ndGggLSAxO1xuICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLmJsb2NrLmRpc3BsYXlWYWx1ZS5sZW5ndGg7IC8vIFRPRE8gdGhpcyBpcyBzdHVwaWQgdHlwZSBlcnJvciwgYGJsb2NrYCBkZXBlbmRzIG9uIGluZGV4IHRoYXQgd2FzIGNoYW5nZWQgYWJvdmVcbiAgICB9XG4gIH1cbiAgX3B1c2hMZWZ0KGZuKSB7XG4gICAgdGhpcy5wdXNoU3RhdGUoKTtcbiAgICBmb3IgKHRoaXMuYmluZEJsb2NrKCk7IDAgPD0gdGhpcy5pbmRleDsgLS10aGlzLmluZGV4LCB0aGlzLm9mZnNldCA9ICgoX3RoaXMkYmxvY2sgPSB0aGlzLmJsb2NrKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkYmxvY2suZGlzcGxheVZhbHVlLmxlbmd0aCkgfHwgMCkge1xuICAgICAgdmFyIF90aGlzJGJsb2NrO1xuICAgICAgaWYgKGZuKCkpIHJldHVybiB0aGlzLm9rID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub2sgPSBmYWxzZTtcbiAgfVxuICBfcHVzaFJpZ2h0KGZuKSB7XG4gICAgdGhpcy5wdXNoU3RhdGUoKTtcbiAgICBmb3IgKHRoaXMuYmluZEJsb2NrKCk7IHRoaXMuaW5kZXggPCB0aGlzLm1hc2tlZC5fYmxvY2tzLmxlbmd0aDsgKyt0aGlzLmluZGV4LCB0aGlzLm9mZnNldCA9IDApIHtcbiAgICAgIGlmIChmbigpKSByZXR1cm4gdGhpcy5vayA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9rID0gZmFsc2U7XG4gIH1cbiAgcHVzaExlZnRCZWZvcmVGaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3B1c2hMZWZ0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmJsb2NrLmlzRml4ZWQgfHwgIXRoaXMuYmxvY2sudmFsdWUpIHJldHVybjtcbiAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5ibG9jay5uZWFyZXN0SW5wdXRQb3ModGhpcy5vZmZzZXQsIERJUkVDVElPTi5GT1JDRV9MRUZUKTtcbiAgICAgIGlmICh0aGlzLm9mZnNldCAhPT0gMCkgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cbiAgcHVzaExlZnRCZWZvcmVJbnB1dCgpIHtcbiAgICAvLyBjYXNlczpcbiAgICAvLyBmaWxsZWQgaW5wdXQ6IDAwfFxuICAgIC8vIG9wdGlvbmFsIGVtcHR5IGlucHV0OiAwMFtdfFxuICAgIC8vIG5lc3RlZCBibG9jazogWFg8W10+fFxuICAgIHJldHVybiB0aGlzLl9wdXNoTGVmdCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5ibG9jay5pc0ZpeGVkKSByZXR1cm47XG4gICAgICB0aGlzLm9mZnNldCA9IHRoaXMuYmxvY2submVhcmVzdElucHV0UG9zKHRoaXMub2Zmc2V0LCBESVJFQ1RJT04uTEVGVCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICBwdXNoTGVmdEJlZm9yZVJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9wdXNoTGVmdCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5ibG9jay5pc0ZpeGVkIHx8IHRoaXMuYmxvY2suaXNPcHRpb25hbCAmJiAhdGhpcy5ibG9jay52YWx1ZSkgcmV0dXJuO1xuICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLmJsb2NrLm5lYXJlc3RJbnB1dFBvcyh0aGlzLm9mZnNldCwgRElSRUNUSU9OLkxFRlQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cbiAgcHVzaFJpZ2h0QmVmb3JlRmlsbGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9wdXNoUmlnaHQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYmxvY2suaXNGaXhlZCB8fCAhdGhpcy5ibG9jay52YWx1ZSkgcmV0dXJuO1xuICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLmJsb2NrLm5lYXJlc3RJbnB1dFBvcyh0aGlzLm9mZnNldCwgRElSRUNUSU9OLkZPUkNFX1JJR0hUKTtcbiAgICAgIGlmICh0aGlzLm9mZnNldCAhPT0gdGhpcy5ibG9jay52YWx1ZS5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHB1c2hSaWdodEJlZm9yZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wdXNoUmlnaHQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYmxvY2suaXNGaXhlZCkgcmV0dXJuO1xuXG4gICAgICAvLyBjb25zdCBvID0gdGhpcy5vZmZzZXQ7XG4gICAgICB0aGlzLm9mZnNldCA9IHRoaXMuYmxvY2submVhcmVzdElucHV0UG9zKHRoaXMub2Zmc2V0LCBESVJFQ1RJT04uTk9ORSk7XG4gICAgICAvLyBIQUNLIGNhc2VzIGxpa2UgKFNUSUxMIERPRVMgTk9UIFdPUksgRk9SIE5FU1RFRClcbiAgICAgIC8vIGFhfFhcbiAgICAgIC8vIGFhPFh8W10+WF8gICAgLSB0aGlzIHdpbGwgbm90IHdvcmtcbiAgICAgIC8vIGlmIChvICYmIG8gPT09IHRoaXMub2Zmc2V0ICYmIHRoaXMuYmxvY2sgaW5zdGFuY2VvZiBQYXR0ZXJuSW5wdXREZWZpbml0aW9uKSBjb250aW51ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHB1c2hSaWdodEJlZm9yZVJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9wdXNoUmlnaHQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYmxvY2suaXNGaXhlZCB8fCB0aGlzLmJsb2NrLmlzT3B0aW9uYWwgJiYgIXRoaXMuYmxvY2sudmFsdWUpIHJldHVybjtcblxuICAgICAgLy8gVE9ETyBjaGVjayB8WypdWFhfXG4gICAgICB0aGlzLm9mZnNldCA9IHRoaXMuYmxvY2submVhcmVzdElucHV0UG9zKHRoaXMub2Zmc2V0LCBESVJFQ1RJT04uTk9ORSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgeyBQYXR0ZXJuQ3Vyc29yIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IHsgRElSRUNUSU9OLCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IENvbnRpbnVvdXNUYWlsRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vLi4vY29yZS9ob2xkZXIuanMnO1xuXG5jbGFzcyBQYXR0ZXJuRml4ZWREZWZpbml0aW9uIHtcbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XG4gICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB0aGlzLmlzRml4ZWQgPSB0cnVlO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgZ2V0IHVubWFza2VkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNVbm1hc2tpbmcgPyB0aGlzLnZhbHVlIDogJyc7XG4gIH1cbiAgZ2V0IHJhd0lucHV0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUmF3SW5wdXQgPyB0aGlzLnZhbHVlIDogJyc7XG4gIH1cbiAgZ2V0IGRpc3BsYXlWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuICByZXNldCgpIHtcbiAgICB0aGlzLl9pc1Jhd0lucHV0ID0gZmFsc2U7XG4gICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgfVxuICByZW1vdmUoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5fdmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX3ZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpICsgdGhpcy5fdmFsdWUuc2xpY2UodG9Qb3MpO1xuICAgIGlmICghdGhpcy5fdmFsdWUpIHRoaXMuX2lzUmF3SW5wdXQgPSBmYWxzZTtcbiAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgfVxuICBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIGRpcmVjdGlvbiA9IERJUkVDVElPTi5OT05FO1xuICAgIH1cbiAgICBjb25zdCBtaW5Qb3MgPSAwO1xuICAgIGNvbnN0IG1heFBvcyA9IHRoaXMuX3ZhbHVlLmxlbmd0aDtcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgIHJldHVybiBtaW5Qb3M7XG4gICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9SSUdIVDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtYXhQb3M7XG4gICAgfVxuICB9XG4gIHRvdGFsSW5wdXRQb3NpdGlvbnMoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5fdmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faXNSYXdJbnB1dCA/IHRvUG9zIC0gZnJvbVBvcyA6IDA7XG4gIH1cbiAgZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLl92YWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gZmxhZ3MucmF3ICYmIHRoaXMuX2lzUmF3SW5wdXQgJiYgdGhpcy5fdmFsdWUuc2xpY2UoZnJvbVBvcywgdG9Qb3MpIHx8ICcnO1xuICB9XG4gIGdldCBpc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGdldCBpc0ZpbGxlZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLl92YWx1ZSk7XG4gIH1cbiAgX2FwcGVuZENoYXIoY2gsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGlmICh0aGlzLmlzRmlsbGVkKSByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICBjb25zdCBhcHBlbmRFYWdlciA9IHRoaXMuZWFnZXIgPT09IHRydWUgfHwgdGhpcy5lYWdlciA9PT0gJ2FwcGVuZCc7XG4gICAgY29uc3QgYXBwZW5kZWQgPSB0aGlzLmNoYXIgPT09IGNoO1xuICAgIGNvbnN0IGlzUmVzb2x2ZWQgPSBhcHBlbmRlZCAmJiAodGhpcy5pc1VubWFza2luZyB8fCBmbGFncy5pbnB1dCB8fCBmbGFncy5yYXcpICYmICghZmxhZ3MucmF3IHx8ICFhcHBlbmRFYWdlcikgJiYgIWZsYWdzLnRhaWw7XG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgIGluc2VydGVkOiB0aGlzLmNoYXIsXG4gICAgICByYXdJbnNlcnRlZDogaXNSZXNvbHZlZCA/IHRoaXMuY2hhciA6ICcnXG4gICAgfSk7XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLmNoYXI7XG4gICAgdGhpcy5faXNSYXdJbnB1dCA9IGlzUmVzb2x2ZWQgJiYgKGZsYWdzLnJhdyB8fCBmbGFncy5pbnB1dCk7XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbiAgX2FwcGVuZEVhZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBlbmRDaGFyKHRoaXMuY2hhciwge1xuICAgICAgdGFpbDogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICBpZiAodGhpcy5pc0ZpbGxlZCkgcmV0dXJuIGRldGFpbHM7XG4gICAgdGhpcy5fdmFsdWUgPSBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5jaGFyO1xuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIGV4dHJhY3RUYWlsKCkge1xuICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKCcnKTtcbiAgfVxuICBhcHBlbmRUYWlsKHRhaWwpIHtcbiAgICBpZiAoaXNTdHJpbmcodGFpbCkpIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSk7XG4gICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8odGhpcyk7XG4gIH1cbiAgYXBwZW5kKHN0ciwgZmxhZ3MsIHRhaWwpIHtcbiAgICBjb25zdCBkZXRhaWxzID0gdGhpcy5fYXBwZW5kQ2hhcihzdHJbMF0sIGZsYWdzKTtcbiAgICBpZiAodGFpbCAhPSBudWxsKSB7XG4gICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmFwcGVuZFRhaWwodGFpbCkudGFpbFNoaWZ0O1xuICAgIH1cbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuICBkb0NvbW1pdCgpIHt9XG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX3ZhbHVlOiB0aGlzLl92YWx1ZSxcbiAgICAgIF9yYXdJbnB1dFZhbHVlOiB0aGlzLnJhd0lucHV0VmFsdWVcbiAgICB9O1xuICB9XG4gIHNldCBzdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gc3RhdGUuX3ZhbHVlO1xuICAgIHRoaXMuX2lzUmF3SW5wdXQgPSBCb29sZWFuKHN0YXRlLl9yYXdJbnB1dFZhbHVlKTtcbiAgfVxuICBwYWQoZmxhZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwZW5kUGxhY2Vob2xkZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBQYXR0ZXJuRml4ZWREZWZpbml0aW9uIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBjcmVhdGVNYXNrIGZyb20gJy4uL2ZhY3RvcnkuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi4vLi4vY29yZS9ob2xkZXIuanMnO1xuXG5jbGFzcyBQYXR0ZXJuSW5wdXREZWZpbml0aW9uIHtcbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhcmVudCxcbiAgICAgIGlzT3B0aW9uYWwsXG4gICAgICBwbGFjZWhvbGRlckNoYXIsXG4gICAgICBkaXNwbGF5Q2hhcixcbiAgICAgIGxhenksXG4gICAgICBlYWdlcixcbiAgICAgIC4uLm1hc2tPcHRzXG4gICAgfSA9IG9wdHM7XG4gICAgdGhpcy5tYXNrZWQgPSBjcmVhdGVNYXNrKG1hc2tPcHRzKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgIHBhcmVudCxcbiAgICAgIGlzT3B0aW9uYWwsXG4gICAgICBwbGFjZWhvbGRlckNoYXIsXG4gICAgICBkaXNwbGF5Q2hhcixcbiAgICAgIGxhenksXG4gICAgICBlYWdlclxuICAgIH0pO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaXNGaWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1hc2tlZC5yZXNldCgpO1xuICB9XG4gIHJlbW92ZShmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKGZyb21Qb3MgPT09IDAgJiYgdG9Qb3MgPj0gMSkge1xuICAgICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnJlbW92ZShmcm9tUG9zLCB0b1Bvcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQudmFsdWUgfHwgKHRoaXMuaXNGaWxsZWQgJiYgIXRoaXMuaXNPcHRpb25hbCA/IHRoaXMucGxhY2Vob2xkZXJDaGFyIDogJycpO1xuICB9XG4gIGdldCB1bm1hc2tlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICB9XG4gIGdldCByYXdJbnB1dFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlO1xuICB9XG4gIGdldCBkaXNwbGF5VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2VkLnZhbHVlICYmIHRoaXMuZGlzcGxheUNoYXIgfHwgdGhpcy52YWx1ZTtcbiAgfVxuICBnZXQgaXNDb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLm1hc2tlZC52YWx1ZSkgfHwgdGhpcy5pc09wdGlvbmFsO1xuICB9XG4gIF9hcHBlbmRDaGFyKGNoLCBmbGFncykge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0ZpbGxlZCkgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLm1hc2tlZC5zdGF0ZTtcbiAgICAvLyBzaW11bGF0ZSBpbnB1dFxuICAgIGxldCBkZXRhaWxzID0gdGhpcy5tYXNrZWQuX2FwcGVuZENoYXIoY2gsIHRoaXMuY3VycmVudE1hc2tGbGFncyhmbGFncykpO1xuICAgIGlmIChkZXRhaWxzLmluc2VydGVkICYmIHRoaXMuZG9WYWxpZGF0ZShmbGFncykgPT09IGZhbHNlKSB7XG4gICAgICBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIHRoaXMubWFza2VkLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuICAgIGlmICghZGV0YWlscy5pbnNlcnRlZCAmJiAhdGhpcy5pc09wdGlvbmFsICYmICF0aGlzLmxhenkgJiYgIWZsYWdzLmlucHV0KSB7XG4gICAgICBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5wbGFjZWhvbGRlckNoYXI7XG4gICAgfVxuICAgIGRldGFpbHMuc2tpcCA9ICFkZXRhaWxzLmluc2VydGVkICYmICF0aGlzLmlzT3B0aW9uYWw7XG4gICAgdGhpcy5pc0ZpbGxlZCA9IEJvb2xlYW4oZGV0YWlscy5pbnNlcnRlZCk7XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbiAgYXBwZW5kKHN0ciwgZmxhZ3MsIHRhaWwpIHtcbiAgICAvLyBUT0RPIHByb2JhYmx5IHNob3VsZCBiZSBkb25lIHZpYSBfYXBwZW5kQ2hhclxuICAgIHJldHVybiB0aGlzLm1hc2tlZC5hcHBlbmQoc3RyLCB0aGlzLmN1cnJlbnRNYXNrRmxhZ3MoZmxhZ3MpLCB0YWlsKTtcbiAgfVxuICBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgaWYgKHRoaXMuaXNGaWxsZWQgfHwgdGhpcy5pc09wdGlvbmFsKSByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB0aGlzLmlzRmlsbGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgaW5zZXJ0ZWQ6IHRoaXMucGxhY2Vob2xkZXJDaGFyXG4gICAgfSk7XG4gIH1cbiAgX2FwcGVuZEVhZ2VyKCkge1xuICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICB9XG4gIGV4dHJhY3RUYWlsKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2VkLmV4dHJhY3RUYWlsKGZyb21Qb3MsIHRvUG9zKTtcbiAgfVxuICBhcHBlbmRUYWlsKHRhaWwpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQuYXBwZW5kVGFpbCh0YWlsKTtcbiAgfVxuICBleHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXNrZWQuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncyk7XG4gIH1cbiAgbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICBkaXJlY3Rpb24gPSBESVJFQ1RJT04uTk9ORTtcbiAgICB9XG4gICAgY29uc3QgbWluUG9zID0gMDtcbiAgICBjb25zdCBtYXhQb3MgPSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICBjb25zdCBib3VuZFBvcyA9IE1hdGgubWluKE1hdGgubWF4KGN1cnNvclBvcywgbWluUG9zKSwgbWF4UG9zKTtcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBib3VuZFBvcyA6IG1pblBvcztcbiAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBib3VuZFBvcyA6IG1heFBvcztcbiAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYm91bmRQb3M7XG4gICAgfVxuICB9XG4gIHRvdGFsSW5wdXRQb3NpdGlvbnMoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZhbHVlLnNsaWNlKGZyb21Qb3MsIHRvUG9zKS5sZW5ndGg7XG4gIH1cbiAgZG9WYWxpZGF0ZShmbGFncykge1xuICAgIHJldHVybiB0aGlzLm1hc2tlZC5kb1ZhbGlkYXRlKHRoaXMuY3VycmVudE1hc2tGbGFncyhmbGFncykpICYmICghdGhpcy5wYXJlbnQgfHwgdGhpcy5wYXJlbnQuZG9WYWxpZGF0ZSh0aGlzLmN1cnJlbnRNYXNrRmxhZ3MoZmxhZ3MpKSk7XG4gIH1cbiAgZG9Db21taXQoKSB7XG4gICAgdGhpcy5tYXNrZWQuZG9Db21taXQoKTtcbiAgfVxuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF92YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIF9yYXdJbnB1dFZhbHVlOiB0aGlzLnJhd0lucHV0VmFsdWUsXG4gICAgICBtYXNrZWQ6IHRoaXMubWFza2VkLnN0YXRlLFxuICAgICAgaXNGaWxsZWQ6IHRoaXMuaXNGaWxsZWRcbiAgICB9O1xuICB9XG4gIHNldCBzdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMubWFza2VkLnN0YXRlID0gc3RhdGUubWFza2VkO1xuICAgIHRoaXMuaXNGaWxsZWQgPSBzdGF0ZS5pc0ZpbGxlZDtcbiAgfVxuICBjdXJyZW50TWFza0ZsYWdzKGZsYWdzKSB7XG4gICAgdmFyIF9mbGFncyRfYmVmb3JlVGFpbFN0YTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZmxhZ3MsXG4gICAgICBfYmVmb3JlVGFpbFN0YXRlOiAoZmxhZ3MgPT0gbnVsbCB8fCAoX2ZsYWdzJF9iZWZvcmVUYWlsU3RhID0gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9mbGFncyRfYmVmb3JlVGFpbFN0YS5tYXNrZWQpIHx8IChmbGFncyA9PSBudWxsID8gdm9pZCAwIDogZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSlcbiAgICB9O1xuICB9XG4gIHBhZChmbGFncykge1xuICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICB9XG59XG5QYXR0ZXJuSW5wdXREZWZpbml0aW9uLkRFRkFVTFRfREVGSU5JVElPTlMgPSB7XG4gICcwJzogL1xcZC8sXG4gICdhJzogL1tcXHUwMDQxLVxcdTAwNUFcXHUwMDYxLVxcdTAwN0FcXHUwMEFBXFx1MDBCNVxcdTAwQkFcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVDXFx1MDJFRVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3QS1cXHUwMzdEXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDhBLVxcdTA1MjdcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYyXFx1MDYyMC1cXHUwNjRBXFx1MDY2RVxcdTA2NkZcXHUwNjcxLVxcdTA2RDNcXHUwNkQ1XFx1MDZFNVxcdTA2RTZcXHUwNkVFXFx1MDZFRlxcdTA2RkEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMVxcdTA3Q0EtXFx1MDdFQVxcdTA3RjRcXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgxNVxcdTA4MUFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4QTBcXHUwOEEyLVxcdTA4QUNcXHUwOTA0LVxcdTA5MzlcXHUwOTNEXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NzEtXFx1MDk3N1xcdTA5NzktXFx1MDk3RlxcdTA5ODUtXFx1MDk4Q1xcdTA5OEZcXHUwOTkwXFx1MDk5My1cXHUwOUE4XFx1MDlBQS1cXHUwOUIwXFx1MDlCMlxcdTA5QjYtXFx1MDlCOVxcdTA5QkRcXHUwOUNFXFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTFcXHUwOUYwXFx1MDlGMVxcdTBBMDUtXFx1MEEwQVxcdTBBMEZcXHUwQTEwXFx1MEExMy1cXHUwQTI4XFx1MEEyQS1cXHUwQTMwXFx1MEEzMlxcdTBBMzNcXHUwQTM1XFx1MEEzNlxcdTBBMzhcXHUwQTM5XFx1MEE1OS1cXHUwQTVDXFx1MEE1RVxcdTBBNzItXFx1MEE3NFxcdTBBODUtXFx1MEE4RFxcdTBBOEYtXFx1MEE5MVxcdTBBOTMtXFx1MEFBOFxcdTBBQUEtXFx1MEFCMFxcdTBBQjJcXHUwQUIzXFx1MEFCNS1cXHUwQUI5XFx1MEFCRFxcdTBBRDBcXHUwQUUwXFx1MEFFMVxcdTBCMDUtXFx1MEIwQ1xcdTBCMEZcXHUwQjEwXFx1MEIxMy1cXHUwQjI4XFx1MEIyQS1cXHUwQjMwXFx1MEIzMlxcdTBCMzNcXHUwQjM1LVxcdTBCMzlcXHUwQjNEXFx1MEI1Q1xcdTBCNURcXHUwQjVGLVxcdTBCNjFcXHUwQjcxXFx1MEI4M1xcdTBCODUtXFx1MEI4QVxcdTBCOEUtXFx1MEI5MFxcdTBCOTItXFx1MEI5NVxcdTBCOTlcXHUwQjlBXFx1MEI5Q1xcdTBCOUVcXHUwQjlGXFx1MEJBM1xcdTBCQTRcXHUwQkE4LVxcdTBCQUFcXHUwQkFFLVxcdTBCQjlcXHUwQkQwXFx1MEMwNS1cXHUwQzBDXFx1MEMwRS1cXHUwQzEwXFx1MEMxMi1cXHUwQzI4XFx1MEMyQS1cXHUwQzMzXFx1MEMzNS1cXHUwQzM5XFx1MEMzRFxcdTBDNThcXHUwQzU5XFx1MEM2MFxcdTBDNjFcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JEXFx1MENERVxcdTBDRTBcXHUwQ0UxXFx1MENGMVxcdTBDRjJcXHUwRDA1LVxcdTBEMENcXHUwRDBFLVxcdTBEMTBcXHUwRDEyLVxcdTBEM0FcXHUwRDNEXFx1MEQ0RVxcdTBENjBcXHUwRDYxXFx1MEQ3QS1cXHUwRDdGXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBFMDEtXFx1MEUzMFxcdTBFMzJcXHUwRTMzXFx1MEU0MC1cXHUwRTQ2XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4N1xcdTBFODhcXHUwRThBXFx1MEU4RFxcdTBFOTQtXFx1MEU5N1xcdTBFOTktXFx1MEU5RlxcdTBFQTEtXFx1MEVBM1xcdTBFQTVcXHUwRUE3XFx1MEVBQVxcdTBFQUJcXHUwRUFELVxcdTBFQjBcXHUwRUIyXFx1MEVCM1xcdTBFQkRcXHUwRUMwLVxcdTBFQzRcXHUwRUM2XFx1MEVEQy1cXHUwRURGXFx1MEYwMFxcdTBGNDAtXFx1MEY0N1xcdTBGNDktXFx1MEY2Q1xcdTBGODgtXFx1MEY4Q1xcdTEwMDAtXFx1MTAyQVxcdTEwM0ZcXHUxMDUwLVxcdTEwNTVcXHUxMDVBLVxcdTEwNURcXHUxMDYxXFx1MTA2NVxcdTEwNjZcXHUxMDZFLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDhFXFx1MTBBMC1cXHUxMEM1XFx1MTBDN1xcdTEwQ0RcXHUxMEQwLVxcdTEwRkFcXHUxMEZDLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3RlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3ODAtXFx1MTdCM1xcdTE3RDdcXHUxN0RDXFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEE4XFx1MThBQVxcdTE4QjAtXFx1MThGNVxcdTE5MDAtXFx1MTkxQ1xcdTE5NTAtXFx1MTk2RFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlBQlxcdTE5QzEtXFx1MTlDN1xcdTFBMDAtXFx1MUExNlxcdTFBMjAtXFx1MUE1NFxcdTFBQTdcXHUxQjA1LVxcdTFCMzNcXHUxQjQ1LVxcdTFCNEJcXHUxQjgzLVxcdTFCQTBcXHUxQkFFXFx1MUJBRlxcdTFCQkEtXFx1MUJFNVxcdTFDMDAtXFx1MUMyM1xcdTFDNEQtXFx1MUM0RlxcdTFDNUEtXFx1MUM3RFxcdTFDRTktXFx1MUNFQ1xcdTFDRUUtXFx1MUNGMVxcdTFDRjVcXHUxQ0Y2XFx1MUQwMC1cXHUxREJGXFx1MUUwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDlDXFx1MjEwMlxcdTIxMDdcXHUyMTBBLVxcdTIxMTNcXHUyMTE1XFx1MjExOS1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTJEXFx1MjEyRi1cXHUyMTM5XFx1MjEzQy1cXHUyMTNGXFx1MjE0NS1cXHUyMTQ5XFx1MjE0RVxcdTIxODNcXHUyMTg0XFx1MkMwMC1cXHUyQzJFXFx1MkMzMC1cXHUyQzVFXFx1MkM2MC1cXHUyQ0U0XFx1MkNFQi1cXHUyQ0VFXFx1MkNGMlxcdTJDRjNcXHUyRDAwLVxcdTJEMjVcXHUyRDI3XFx1MkQyRFxcdTJEMzAtXFx1MkQ2N1xcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUyRTJGXFx1MzAwNVxcdTMwMDZcXHUzMDMxLVxcdTMwMzVcXHUzMDNCXFx1MzAzQ1xcdTMwNDEtXFx1MzA5NlxcdTMwOUQtXFx1MzA5RlxcdTMwQTEtXFx1MzBGQVxcdTMwRkMtXFx1MzBGRlxcdTMxMDUtXFx1MzEyRFxcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCQVxcdTMxRjAtXFx1MzFGRlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZDQ1xcdUEwMDAtXFx1QTQ4Q1xcdUE0RDAtXFx1QTRGRFxcdUE1MDAtXFx1QTYwQ1xcdUE2MTAtXFx1QTYxRlxcdUE2MkFcXHVBNjJCXFx1QTY0MC1cXHVBNjZFXFx1QTY3Ri1cXHVBNjk3XFx1QTZBMC1cXHVBNkU1XFx1QTcxNy1cXHVBNzFGXFx1QTcyMi1cXHVBNzg4XFx1QTc4Qi1cXHVBNzhFXFx1QTc5MC1cXHVBNzkzXFx1QTdBMC1cXHVBN0FBXFx1QTdGOC1cXHVBODAxXFx1QTgwMy1cXHVBODA1XFx1QTgwNy1cXHVBODBBXFx1QTgwQy1cXHVBODIyXFx1QTg0MC1cXHVBODczXFx1QTg4Mi1cXHVBOEIzXFx1QThGMi1cXHVBOEY3XFx1QThGQlxcdUE5MEEtXFx1QTkyNVxcdUE5MzAtXFx1QTk0NlxcdUE5NjAtXFx1QTk3Q1xcdUE5ODQtXFx1QTlCMlxcdUE5Q0ZcXHVBQTAwLVxcdUFBMjhcXHVBQTQwLVxcdUFBNDJcXHVBQTQ0LVxcdUFBNEJcXHVBQTYwLVxcdUFBNzZcXHVBQTdBXFx1QUE4MC1cXHVBQUFGXFx1QUFCMVxcdUFBQjVcXHVBQUI2XFx1QUFCOS1cXHVBQUJEXFx1QUFDMFxcdUFBQzJcXHVBQURCLVxcdUFBRERcXHVBQUUwLVxcdUFBRUFcXHVBQUYyLVxcdUFBRjRcXHVBQjAxLVxcdUFCMDZcXHVBQjA5LVxcdUFCMEVcXHVBQjExLVxcdUFCMTZcXHVBQjIwLVxcdUFCMjZcXHVBQjI4LVxcdUFCMkVcXHVBQkMwLVxcdUFCRTJcXHVBQzAwLVxcdUQ3QTNcXHVEN0IwLVxcdUQ3QzZcXHVEN0NCLVxcdUQ3RkJcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFEXFx1RkIxRi1cXHVGQjI4XFx1RkIyQS1cXHVGQjM2XFx1RkIzOC1cXHVGQjNDXFx1RkIzRVxcdUZCNDBcXHVGQjQxXFx1RkI0M1xcdUZCNDRcXHVGQjQ2LVxcdUZCQjFcXHVGQkQzLVxcdUZEM0RcXHVGRDUwLVxcdUZEOEZcXHVGRDkyLVxcdUZEQzdcXHVGREYwLVxcdUZERkJcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNcXHVGRjIxLVxcdUZGM0FcXHVGRjQxLVxcdUZGNUFcXHVGRjY2LVxcdUZGQkVcXHVGRkMyLVxcdUZGQzdcXHVGRkNBLVxcdUZGQ0ZcXHVGRkQyLVxcdUZGRDdcXHVGRkRBLVxcdUZGRENdLyxcbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjIwNzUwNzBcbiAgJyonOiAvLi9cbn07XG5cbmV4cG9ydCB7IFBhdHRlcm5JbnB1dERlZmluaXRpb24gYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IGNyZWF0ZU1hc2sgZnJvbSAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvdXRpbHMuanMnO1xuXG4vKiogTWFzayBwaXBlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gdHlwZXMgKi9cbmNvbnN0IFBJUEVfVFlQRSA9IHtcbiAgTUFTS0VEOiAndmFsdWUnLFxuICBVTk1BU0tFRDogJ3VubWFza2VkVmFsdWUnLFxuICBUWVBFRDogJ3R5cGVkVmFsdWUnXG59O1xuLyoqIENyZWF0ZXMgbmV3IHBpcGUgZnVuY3Rpb24gZGVwZW5kaW5nIG9uIG1hc2sgdHlwZSwgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBvcHRpb25zICovXG5mdW5jdGlvbiBjcmVhdGVQaXBlKGFyZywgZnJvbSwgdG8pIHtcbiAgaWYgKGZyb20gPT09IHZvaWQgMCkge1xuICAgIGZyb20gPSBQSVBFX1RZUEUuTUFTS0VEO1xuICB9XG4gIGlmICh0byA9PT0gdm9pZCAwKSB7XG4gICAgdG8gPSBQSVBFX1RZUEUuTUFTS0VEO1xuICB9XG4gIGNvbnN0IG1hc2tlZCA9IGNyZWF0ZU1hc2soYXJnKTtcbiAgcmV0dXJuIHZhbHVlID0+IG1hc2tlZC5ydW5Jc29sYXRlZChtID0+IHtcbiAgICBtW2Zyb21dID0gdmFsdWU7XG4gICAgcmV0dXJuIG1bdG9dO1xuICB9KTtcbn1cblxuLyoqIFBpcGVzIHZhbHVlIHRocm91Z2ggbWFzayBkZXBlbmRpbmcgb24gbWFzayB0eXBlLCBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIG9wdGlvbnMgKi9cbmZ1bmN0aW9uIHBpcGUodmFsdWUsIG1hc2ssIGZyb20sIHRvKSB7XG4gIHJldHVybiBjcmVhdGVQaXBlKG1hc2ssIGZyb20sIHRvKSh2YWx1ZSk7XG59XG5JTWFzay5QSVBFX1RZUEUgPSBQSVBFX1RZUEU7XG5JTWFzay5jcmVhdGVQaXBlID0gY3JlYXRlUGlwZTtcbklNYXNrLnBpcGUgPSBwaXBlO1xuXG5leHBvcnQgeyBQSVBFX1RZUEUsIGNyZWF0ZVBpcGUsIHBpcGUgfTtcbiIsImltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCBNYXNrZWRQYXR0ZXJuIGZyb20gJy4vcGF0dGVybi5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuL2Jhc2UuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jdXJzb3IuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9yZWdleHAuanMnO1xuXG4vKiogUGF0dGVybiB3aGljaCBhY2NlcHRzIHJhbmdlcyAqL1xuY2xhc3MgTWFza2VkUmFuZ2UgZXh0ZW5kcyBNYXNrZWRQYXR0ZXJuIHtcbiAgLyoqXG4gICAgT3B0aW9uYWxseSBzZXRzIG1heCBsZW5ndGggb2YgcGF0dGVybi5cbiAgICBVc2VkIHdoZW4gcGF0dGVybiBsZW5ndGggaXMgbG9uZ2VyIHRoZW4gYHRvYCBwYXJhbSBsZW5ndGguIFBhZHMgemVyb3MgYXQgc3RhcnQgaW4gdGhpcyBjYXNlLlxuICAqL1xuXG4gIC8qKiBNaW4gYm91bmQgKi9cblxuICAvKiogTWF4IGJvdW5kICovXG5cbiAgZ2V0IF9tYXRjaEZyb20oKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4TGVuZ3RoIC0gU3RyaW5nKHRoaXMuZnJvbSkubGVuZ3RoO1xuICB9XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTsgLy8gbWFzayB3aWxsIGJlIGNyZWF0ZWQgaW4gX3VwZGF0ZVxuICB9XG4gIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgIHN1cGVyLnVwZGF0ZU9wdGlvbnMob3B0cyk7XG4gIH1cbiAgX3VwZGF0ZShvcHRzKSB7XG4gICAgY29uc3Qge1xuICAgICAgdG8gPSB0aGlzLnRvIHx8IDAsXG4gICAgICBmcm9tID0gdGhpcy5mcm9tIHx8IDAsXG4gICAgICBtYXhMZW5ndGggPSB0aGlzLm1heExlbmd0aCB8fCAwLFxuICAgICAgYXV0b2ZpeCA9IHRoaXMuYXV0b2ZpeCxcbiAgICAgIC4uLnBhdHRlcm5PcHRzXG4gICAgfSA9IG9wdHM7XG4gICAgdGhpcy50byA9IHRvO1xuICAgIHRoaXMuZnJvbSA9IGZyb207XG4gICAgdGhpcy5tYXhMZW5ndGggPSBNYXRoLm1heChTdHJpbmcodG8pLmxlbmd0aCwgbWF4TGVuZ3RoKTtcbiAgICB0aGlzLmF1dG9maXggPSBhdXRvZml4O1xuICAgIGNvbnN0IGZyb21TdHIgPSBTdHJpbmcodGhpcy5mcm9tKS5wYWRTdGFydCh0aGlzLm1heExlbmd0aCwgJzAnKTtcbiAgICBjb25zdCB0b1N0ciA9IFN0cmluZyh0aGlzLnRvKS5wYWRTdGFydCh0aGlzLm1heExlbmd0aCwgJzAnKTtcbiAgICBsZXQgc2FtZUNoYXJzQ291bnQgPSAwO1xuICAgIHdoaWxlIChzYW1lQ2hhcnNDb3VudCA8IHRvU3RyLmxlbmd0aCAmJiB0b1N0cltzYW1lQ2hhcnNDb3VudF0gPT09IGZyb21TdHJbc2FtZUNoYXJzQ291bnRdKSArK3NhbWVDaGFyc0NvdW50O1xuICAgIHBhdHRlcm5PcHRzLm1hc2sgPSB0b1N0ci5zbGljZSgwLCBzYW1lQ2hhcnNDb3VudCkucmVwbGFjZSgvMC9nLCAnXFxcXDAnKSArICcwJy5yZXBlYXQodGhpcy5tYXhMZW5ndGggLSBzYW1lQ2hhcnNDb3VudCk7XG4gICAgc3VwZXIuX3VwZGF0ZShwYXR0ZXJuT3B0cyk7XG4gIH1cbiAgZ2V0IGlzQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmlzQ29tcGxldGUgJiYgQm9vbGVhbih0aGlzLnZhbHVlKTtcbiAgfVxuICBib3VuZGFyaWVzKHN0cikge1xuICAgIGxldCBtaW5zdHIgPSAnJztcbiAgICBsZXQgbWF4c3RyID0gJyc7XG4gICAgY29uc3QgWywgcGxhY2Vob2xkZXIsIG51bV0gPSBzdHIubWF0Y2goL14oXFxEKikoXFxkKikoXFxEKikvKSB8fCBbXTtcbiAgICBpZiAobnVtKSB7XG4gICAgICBtaW5zdHIgPSAnMCcucmVwZWF0KHBsYWNlaG9sZGVyLmxlbmd0aCkgKyBudW07XG4gICAgICBtYXhzdHIgPSAnOScucmVwZWF0KHBsYWNlaG9sZGVyLmxlbmd0aCkgKyBudW07XG4gICAgfVxuICAgIG1pbnN0ciA9IG1pbnN0ci5wYWRFbmQodGhpcy5tYXhMZW5ndGgsICcwJyk7XG4gICAgbWF4c3RyID0gbWF4c3RyLnBhZEVuZCh0aGlzLm1heExlbmd0aCwgJzknKTtcbiAgICByZXR1cm4gW21pbnN0ciwgbWF4c3RyXTtcbiAgfVxuICBkb1ByZXBhcmVDaGFyKGNoLCBmbGFncykge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBsZXQgZGV0YWlscztcbiAgICBbY2gsIGRldGFpbHNdID0gc3VwZXIuZG9QcmVwYXJlQ2hhcihjaC5yZXBsYWNlKC9cXEQvZywgJycpLCBmbGFncyk7XG4gICAgaWYgKCFjaCkgZGV0YWlscy5za2lwID0gIXRoaXMuaXNDb21wbGV0ZTtcbiAgICByZXR1cm4gW2NoLCBkZXRhaWxzXTtcbiAgfVxuICBfYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmF1dG9maXggfHwgdGhpcy52YWx1ZS5sZW5ndGggKyAxID4gdGhpcy5tYXhMZW5ndGgpIHJldHVybiBzdXBlci5fYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpO1xuICAgIGNvbnN0IGZyb21TdHIgPSBTdHJpbmcodGhpcy5mcm9tKS5wYWRTdGFydCh0aGlzLm1heExlbmd0aCwgJzAnKTtcbiAgICBjb25zdCB0b1N0ciA9IFN0cmluZyh0aGlzLnRvKS5wYWRTdGFydCh0aGlzLm1heExlbmd0aCwgJzAnKTtcbiAgICBjb25zdCBbbWluc3RyLCBtYXhzdHJdID0gdGhpcy5ib3VuZGFyaWVzKHRoaXMudmFsdWUgKyBjaCk7XG4gICAgaWYgKE51bWJlcihtYXhzdHIpIDwgdGhpcy5mcm9tKSByZXR1cm4gc3VwZXIuX2FwcGVuZENoYXJSYXcoZnJvbVN0clt0aGlzLnZhbHVlLmxlbmd0aF0sIGZsYWdzKTtcbiAgICBpZiAoTnVtYmVyKG1pbnN0cikgPiB0aGlzLnRvKSB7XG4gICAgICBpZiAoIWZsYWdzLnRhaWwgJiYgdGhpcy5hdXRvZml4ID09PSAncGFkJyAmJiB0aGlzLnZhbHVlLmxlbmd0aCArIDEgPCB0aGlzLm1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuX2FwcGVuZENoYXJSYXcoZnJvbVN0clt0aGlzLnZhbHVlLmxlbmd0aF0sIGZsYWdzKS5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdXBlci5fYXBwZW5kQ2hhclJhdyh0b1N0clt0aGlzLnZhbHVlLmxlbmd0aF0sIGZsYWdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLl9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncyk7XG4gIH1cbiAgZG9WYWxpZGF0ZShmbGFncykge1xuICAgIGNvbnN0IHN0ciA9IHRoaXMudmFsdWU7XG4gICAgY29uc3QgZmlyc3ROb25aZXJvID0gc3RyLnNlYXJjaCgvW14wXS8pO1xuICAgIGlmIChmaXJzdE5vblplcm8gPT09IC0xICYmIHN0ci5sZW5ndGggPD0gdGhpcy5fbWF0Y2hGcm9tKSByZXR1cm4gdHJ1ZTtcbiAgICBjb25zdCBbbWluc3RyLCBtYXhzdHJdID0gdGhpcy5ib3VuZGFyaWVzKHN0cik7XG4gICAgcmV0dXJuIHRoaXMuZnJvbSA8PSBOdW1iZXIobWF4c3RyKSAmJiBOdW1iZXIobWluc3RyKSA8PSB0aGlzLnRvICYmIHN1cGVyLmRvVmFsaWRhdGUoZmxhZ3MpO1xuICB9XG4gIHBhZChmbGFncykge1xuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA9PT0gdGhpcy5tYXhMZW5ndGgpIHJldHVybiBkZXRhaWxzO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBjb25zdCBwYWRMZW5ndGggPSB0aGlzLm1heExlbmd0aCAtIHRoaXMudmFsdWUubGVuZ3RoO1xuICAgIGlmIChwYWRMZW5ndGgpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFkTGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoc3VwZXIuX2FwcGVuZENoYXJSYXcoJzAnLCBmbGFncykpO1xuICAgICAgfVxuXG4gICAgICAvLyBhcHBlbmQgdGFpbFxuICAgICAgdmFsdWUuc3BsaXQoJycpLmZvckVhY2goY2ggPT4gdGhpcy5fYXBwZW5kQ2hhclJhdyhjaCkpO1xuICAgIH1cbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxufVxuSU1hc2suTWFza2VkUmFuZ2UgPSBNYXNrZWRSYW5nZTtcblxuZXhwb3J0IHsgTWFza2VkUmFuZ2UgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcblxuLyoqIE1hc2tpbmcgYnkgUmVnRXhwICovXG5jbGFzcyBNYXNrZWRSZWdFeHAgZXh0ZW5kcyBNYXNrZWQge1xuICAvKiogKi9cblxuICAvKiogRW5hYmxlIGNoYXJhY3RlcnMgb3ZlcndyaXRpbmcgKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICB1cGRhdGVPcHRpb25zKG9wdHMpIHtcbiAgICBzdXBlci51cGRhdGVPcHRpb25zKG9wdHMpO1xuICB9XG4gIF91cGRhdGUob3B0cykge1xuICAgIGNvbnN0IG1hc2sgPSBvcHRzLm1hc2s7XG4gICAgaWYgKG1hc2spIG9wdHMudmFsaWRhdGUgPSB2YWx1ZSA9PiB2YWx1ZS5zZWFyY2gobWFzaykgPj0gMDtcbiAgICBzdXBlci5fdXBkYXRlKG9wdHMpO1xuICB9XG59XG5JTWFzay5NYXNrZWRSZWdFeHAgPSBNYXNrZWRSZWdFeHA7XG5cbmV4cG9ydCB7IE1hc2tlZFJlZ0V4cCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgY3JlYXRlTWFzaywgeyBub3JtYWxpemVPcHRzIH0gZnJvbSAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCBNYXNrZWRQYXR0ZXJuIGZyb20gJy4vcGF0dGVybi5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuL2Jhc2UuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jdXJzb3IuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9yZWdleHAuanMnO1xuXG4vKiogUGF0dGVybiBtYXNrICovXG5jbGFzcyBSZXBlYXRCbG9jayBleHRlbmRzIE1hc2tlZFBhdHRlcm4ge1xuICBnZXQgcmVwZWF0RnJvbSgpIHtcbiAgICB2YXIgX3JlZjtcbiAgICByZXR1cm4gKF9yZWYgPSBBcnJheS5pc0FycmF5KHRoaXMucmVwZWF0KSA/IHRoaXMucmVwZWF0WzBdIDogdGhpcy5yZXBlYXQgPT09IEluZmluaXR5ID8gMCA6IHRoaXMucmVwZWF0KSAhPSBudWxsID8gX3JlZiA6IDA7XG4gIH1cbiAgZ2V0IHJlcGVhdFRvKCkge1xuICAgIHZhciBfcmVmMjtcbiAgICByZXR1cm4gKF9yZWYyID0gQXJyYXkuaXNBcnJheSh0aGlzLnJlcGVhdCkgPyB0aGlzLnJlcGVhdFsxXSA6IHRoaXMucmVwZWF0KSAhPSBudWxsID8gX3JlZjIgOiBJbmZpbml0eTtcbiAgfVxuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG4gIH1cbiAgdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgc3VwZXIudXBkYXRlT3B0aW9ucyhvcHRzKTtcbiAgfVxuICBfdXBkYXRlKG9wdHMpIHtcbiAgICB2YXIgX3JlZjMsIF9yZWY0LCBfdGhpcyRfYmxvY2tzO1xuICAgIGNvbnN0IHtcbiAgICAgIHJlcGVhdCxcbiAgICAgIC4uLmJsb2NrT3B0c1xuICAgIH0gPSBub3JtYWxpemVPcHRzKG9wdHMpOyAvLyBUT0RPIHR5cGVcbiAgICB0aGlzLl9ibG9ja09wdHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9ibG9ja09wdHMsIGJsb2NrT3B0cyk7XG4gICAgY29uc3QgYmxvY2sgPSBjcmVhdGVNYXNrKHRoaXMuX2Jsb2NrT3B0cyk7XG4gICAgdGhpcy5yZXBlYXQgPSAoX3JlZjMgPSAoX3JlZjQgPSByZXBlYXQgIT0gbnVsbCA/IHJlcGVhdCA6IGJsb2NrLnJlcGVhdCkgIT0gbnVsbCA/IF9yZWY0IDogdGhpcy5yZXBlYXQpICE9IG51bGwgPyBfcmVmMyA6IEluZmluaXR5OyAvLyBUT0RPIHR5cGVcblxuICAgIHN1cGVyLl91cGRhdGUoe1xuICAgICAgbWFzazogJ20nLnJlcGVhdChNYXRoLm1heCh0aGlzLnJlcGVhdFRvID09PSBJbmZpbml0eSAmJiAoKF90aGlzJF9ibG9ja3MgPSB0aGlzLl9ibG9ja3MpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRfYmxvY2tzLmxlbmd0aCkgfHwgMCwgdGhpcy5yZXBlYXRGcm9tKSksXG4gICAgICBibG9ja3M6IHtcbiAgICAgICAgbTogYmxvY2tcbiAgICAgIH0sXG4gICAgICBlYWdlcjogYmxvY2suZWFnZXIsXG4gICAgICBvdmVyd3JpdGU6IGJsb2NrLm92ZXJ3cml0ZSxcbiAgICAgIHNraXBJbnZhbGlkOiBibG9jay5za2lwSW52YWxpZCxcbiAgICAgIGxhenk6IGJsb2NrLmxhenksXG4gICAgICBwbGFjZWhvbGRlckNoYXI6IGJsb2NrLnBsYWNlaG9sZGVyQ2hhcixcbiAgICAgIGRpc3BsYXlDaGFyOiBibG9jay5kaXNwbGF5Q2hhclxuICAgIH0pO1xuICB9XG4gIF9hbGxvY2F0ZUJsb2NrKGJpKSB7XG4gICAgaWYgKGJpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX2Jsb2Nrc1tiaV07XG4gICAgaWYgKHRoaXMucmVwZWF0VG8gPT09IEluZmluaXR5IHx8IHRoaXMuX2Jsb2Nrcy5sZW5ndGggPCB0aGlzLnJlcGVhdFRvKSB7XG4gICAgICB0aGlzLl9ibG9ja3MucHVzaChjcmVhdGVNYXNrKHRoaXMuX2Jsb2NrT3B0cykpO1xuICAgICAgdGhpcy5tYXNrICs9ICdtJztcbiAgICAgIHJldHVybiB0aGlzLl9ibG9ja3NbdGhpcy5fYmxvY2tzLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgfVxuICBfYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgZm9yIChsZXQgYmkgPSAoX3RoaXMkX21hcFBvc1RvQmxvY2skID0gKF90aGlzJF9tYXBQb3NUb0Jsb2NrID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGgpKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkX21hcFBvc1RvQmxvY2suaW5kZXgpICE9IG51bGwgPyBfdGhpcyRfbWFwUG9zVG9CbG9jayQgOiBNYXRoLm1heCh0aGlzLl9ibG9ja3MubGVuZ3RoIC0gMSwgMCksIGJsb2NrLCBhbGxvY2F0ZWQ7XG4gICAgLy8gdHJ5IHRvIGdldCBhIGJsb2NrIG9yXG4gICAgLy8gdHJ5IHRvIGFsbG9jYXRlIGEgbmV3IGJsb2NrIGlmIG5vdCBhbGxvY2F0ZWQgYWxyZWFkeVxuICAgIGJsb2NrID0gKF90aGlzJF9ibG9ja3MkYmkgPSB0aGlzLl9ibG9ja3NbYmldKSAhPSBudWxsID8gX3RoaXMkX2Jsb2NrcyRiaSA6IGFsbG9jYXRlZCA9ICFhbGxvY2F0ZWQgJiYgdGhpcy5fYWxsb2NhdGVCbG9jayhiaSk7ICsrYmkpIHtcbiAgICAgIHZhciBfdGhpcyRfbWFwUG9zVG9CbG9jayQsIF90aGlzJF9tYXBQb3NUb0Jsb2NrLCBfdGhpcyRfYmxvY2tzJGJpLCBfZmxhZ3MkX2JlZm9yZVRhaWxTdGE7XG4gICAgICBjb25zdCBibG9ja0RldGFpbHMgPSBibG9jay5fYXBwZW5kQ2hhcihjaCwge1xuICAgICAgICAuLi5mbGFncyxcbiAgICAgICAgX2JlZm9yZVRhaWxTdGF0ZTogKF9mbGFncyRfYmVmb3JlVGFpbFN0YSA9IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUpID09IG51bGwgfHwgKF9mbGFncyRfYmVmb3JlVGFpbFN0YSA9IF9mbGFncyRfYmVmb3JlVGFpbFN0YS5fYmxvY2tzKSA9PSBudWxsID8gdm9pZCAwIDogX2ZsYWdzJF9iZWZvcmVUYWlsU3RhW2JpXVxuICAgICAgfSk7XG4gICAgICBpZiAoYmxvY2tEZXRhaWxzLnNraXAgJiYgYWxsb2NhdGVkKSB7XG4gICAgICAgIC8vIHJlbW92ZSB0aGUgbGFzdCBhbGxvY2F0ZWQgYmxvY2sgYW5kIGJyZWFrXG4gICAgICAgIHRoaXMuX2Jsb2Nrcy5wb3AoKTtcbiAgICAgICAgdGhpcy5tYXNrID0gdGhpcy5tYXNrLnNsaWNlKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRldGFpbHMuYWdncmVnYXRlKGJsb2NrRGV0YWlscyk7XG4gICAgICBpZiAoYmxvY2tEZXRhaWxzLmNvbnN1bWVkKSBicmVhazsgLy8gZ28gbmV4dCBjaGFyXG4gICAgfVxuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIF90cmltRW1wdHlUYWlsKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgdmFyIF90aGlzJF9tYXBQb3NUb0Jsb2NrMiwgX3RoaXMkX21hcFBvc1RvQmxvY2szO1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBjb25zdCBmaXJzdEJsb2NrSW5kZXggPSBNYXRoLm1heCgoKF90aGlzJF9tYXBQb3NUb0Jsb2NrMiA9IHRoaXMuX21hcFBvc1RvQmxvY2soZnJvbVBvcykpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRfbWFwUG9zVG9CbG9jazIuaW5kZXgpIHx8IDAsIHRoaXMucmVwZWF0RnJvbSwgMCk7XG4gICAgbGV0IGxhc3RCbG9ja0luZGV4O1xuICAgIGlmICh0b1BvcyAhPSBudWxsKSBsYXN0QmxvY2tJbmRleCA9IChfdGhpcyRfbWFwUG9zVG9CbG9jazMgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRvUG9zKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJF9tYXBQb3NUb0Jsb2NrMy5pbmRleDtcbiAgICBpZiAobGFzdEJsb2NrSW5kZXggPT0gbnVsbCkgbGFzdEJsb2NrSW5kZXggPSB0aGlzLl9ibG9ja3MubGVuZ3RoIC0gMTtcbiAgICBsZXQgcmVtb3ZlQ291bnQgPSAwO1xuICAgIGZvciAobGV0IGJsb2NrSW5kZXggPSBsYXN0QmxvY2tJbmRleDsgZmlyc3RCbG9ja0luZGV4IDw9IGJsb2NrSW5kZXg7IC0tYmxvY2tJbmRleCwgKytyZW1vdmVDb3VudCkge1xuICAgICAgaWYgKHRoaXMuX2Jsb2Nrc1tibG9ja0luZGV4XS51bm1hc2tlZFZhbHVlKSBicmVhaztcbiAgICB9XG4gICAgaWYgKHJlbW92ZUNvdW50KSB7XG4gICAgICB0aGlzLl9ibG9ja3Muc3BsaWNlKGxhc3RCbG9ja0luZGV4IC0gcmVtb3ZlQ291bnQgKyAxLCByZW1vdmVDb3VudCk7XG4gICAgICB0aGlzLm1hc2sgPSB0aGlzLm1hc2suc2xpY2UocmVtb3ZlQ291bnQpO1xuICAgIH1cbiAgfVxuICByZXNldCgpIHtcbiAgICBzdXBlci5yZXNldCgpO1xuICAgIHRoaXMuX3RyaW1FbXB0eVRhaWwoKTtcbiAgfVxuICByZW1vdmUoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmVEZXRhaWxzID0gc3VwZXIucmVtb3ZlKGZyb21Qb3MsIHRvUG9zKTtcbiAgICB0aGlzLl90cmltRW1wdHlUYWlsKGZyb21Qb3MsIHRvUG9zKTtcbiAgICByZXR1cm4gcmVtb3ZlRGV0YWlscztcbiAgfVxuICB0b3RhbElucHV0UG9zaXRpb25zKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PSBudWxsICYmIHRoaXMucmVwZWF0VG8gPT09IEluZmluaXR5KSByZXR1cm4gSW5maW5pdHk7XG4gICAgcmV0dXJuIHN1cGVyLnRvdGFsSW5wdXRQb3NpdGlvbnMoZnJvbVBvcywgdG9Qb3MpO1xuICB9XG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gc3VwZXIuc3RhdGU7XG4gIH1cbiAgc2V0IHN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5fYmxvY2tzLmxlbmd0aCA9IHN0YXRlLl9ibG9ja3MubGVuZ3RoO1xuICAgIHRoaXMubWFzayA9IHRoaXMubWFzay5zbGljZSgwLCB0aGlzLl9ibG9ja3MubGVuZ3RoKTtcbiAgICBzdXBlci5zdGF0ZSA9IHN0YXRlO1xuICB9XG59XG5JTWFzay5SZXBlYXRCbG9jayA9IFJlcGVhdEJsb2NrO1xuXG5leHBvcnQgeyBSZXBlYXRCbG9jayBhcyBkZWZhdWx0IH07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIHtcbiAgICBnZXRQcm94eVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KGluaXRpYWxTdGF0ZSwge1xuICAgICAgICAgICAgZ2V0OiAodGFyZ2V0LCBwcm9wKSA9PiB0YXJnZXRbcHJvcF0sXG4gICAgICAgICAgICBzZXQ6ICh0YXJnZXQsIHByb3AsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVwZGF0ZVVJKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LXQvtCx0YXQvtC00LjQvNC+INGA0LXQsNC70LjQt9C+0LLQsNGC0Ywg0LzQtdGC0L7QtCB1cGRhdGVVSScpO1xuICAgIH1cbn1cbiIsImltcG9ydCBJQmFzZSBmcm9tICdAL2NvbXBvbmVudHMvQmFzZSc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnaW1hc2snO1xuaW1wb3J0IHsgJCB9IGZyb20gJ0AvdXRpbHMvSlF1ZXJ5Jztcbi8qKiDQmtC+0LzQv9C+0L3QtdC90YIg0LHRgNC+0L3QuNGA0L7QstCw0L3QuNGPICovXG5leHBvcnQgY2xhc3MgQm9va2luZyBleHRlbmRzIElCYXNlIHtcbiAgICBmb3JtO1xuICAgIG5hbWU7XG4gICAgcGhvbmU7XG4gICAgZGF0ZTtcbiAgICBjYXI7XG4gICAgc2VsZWN0b3JzID0ge1xuICAgICAgICBmb3JtOiAnW2RhdGEtanMtZm9ybV0nLFxuICAgICAgICBpbnB1dE5hbWU6ICcjbmFtZScsXG4gICAgICAgIGlucHV0UGhvbmU6ICcjcGhvbmUnLFxuICAgICAgICBpbnB1dERhdGU6ICcjZGF0ZScsXG4gICAgICAgIGNhclNlbGVjdDogJyNzZWxlY3QnLFxuICAgICAgICBjYXJzQ29udGFpbmVyOiAnLmNhcnNfX2NvbnRhaW5lcicsXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGAINC60LvQsNGB0YHQsCBCb29raW5nLlxuICAgICAqINCS0YvQt9GL0LLQsNC10YIg0LzQtdGC0L7QtCBpbml0KCkg0LTQu9GPINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INC60L7QvNC/0L7QvdC10L3RgtCwLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog0JzQtdGC0L7QtCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuC5cbiAgICAgKiDQntC9INC/0YDQuNCy0Y/Qt9GL0LLQsNC10YIg0LLRgdC1INGE0L7RgNC80Ysg0Lgg0L/QvtC70Y8g0LLQstC+0LTQsCwg0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXRgiDQvNCw0YHQutGDINC00LvRjyDQv9C+0LvRjyDQstCy0L7QtNCwINGC0LXQu9C10YTQvtC90LBcbiAgICAgKiDQuCDQv9GA0LjQstGP0LfRi9Cy0LDQtdGCINC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNGPINC60LvQuNC60LAg0L3QsCDQutCw0YDRgtGDLlxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuZm9ybSA9ICQodGhpcy5zZWxlY3RvcnMuZm9ybSk7XG4gICAgICAgIHRoaXMubmFtZSA9ICQodGhpcy5zZWxlY3RvcnMuaW5wdXROYW1lKTtcbiAgICAgICAgdGhpcy5waG9uZSA9ICQodGhpcy5zZWxlY3RvcnMuaW5wdXRQaG9uZSk7XG4gICAgICAgIHRoaXMuZGF0ZSA9ICQodGhpcy5zZWxlY3RvcnMuaW5wdXREYXRlKTtcbiAgICAgICAgdGhpcy5jYXIgPSAkKHRoaXMuc2VsZWN0b3JzLmNhclNlbGVjdCk7XG4gICAgICAgIC8vINC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0LzQsNGB0LrRgyDQtNC70Y8g0L/QvtC70Y8g0YLQtdC70LXRhNC+0L3QsFxuICAgICAgICBJTWFzayhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvbmUnKSwge1xuICAgICAgICAgICAgbWFzazogJys3ICgwMDApIDAwMC0wMC0wMCcsXG4gICAgICAgICAgICBsYXp5OiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZENhcmRDbGlja0V2ZW50KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0LXRgiDQstGL0LHRgNCw0L3QvdGL0Lkg0LLQsNGA0LjQsNC90YIg0LDQstGC0L7QvNC+0LHQuNC70Y8g0LIg0YHQtdC70LXQutGCLlxuICAgICAqICovXG4gICAgc2V0Q2FyKHZhbHVlKSB7XG4gICAgICAgIC8vINCy0YvQsdC40YDQsNC10Lwg0L3Rg9C20L3Ri9C5INCy0LDRgNC40LDQvdGCXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QnKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0Py5vcHRpb25zO1xuICAgICAgICAvLyDQv9GA0LjRgdCy0LDQuNCy0LDQtdC8INCy0YvQsdGA0LDQvdC90YvQuSDQstCw0YDQuNCw0L3RglxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbltpXS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog0JzQtdGC0L7QtCDRg9GB0YLQsNC90L7QstC70LjQstCw0LXRgiDQstGL0LHRgNCw0L3QvdGL0Lkg0LDQstGC0L7QvNC+0LHQuNC70Ywg0LIg0YTQvtGA0LzQtS5cbiAgICAgKi9cbiAgICBiaW5kQ2FyZENsaWNrRXZlbnQoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuY2Fyc0NvbnRhaW5lcik/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vINC90LDRhdC+0LTQuNC8INCx0LvQuNC20LDQudGI0LjQuSDRjdC70LXQvNC10L3Rgiwg0YMg0LrQvtGC0L7RgNC+0LPQviDQtdGB0YLRjCDQsNGC0YDQuNCx0YPRgiBkYXRhLWNhci1uYW1lXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRFbCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1jYXItbmFtZV0nKTtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0RWwpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8g0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LLRi9Cx0YDQsNC90L3Ri9C5INCw0LLRgtC+0LzQvtCx0LjQu9GMXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENhciA9IHRhcmdldEVsLmRhdGFzZXQuY2FyTmFtZTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZENhcikge1xuICAgICAgICAgICAgICAgIC8vINC/0LXRgNC10LTQsNC10Lwg0LLRi9Cx0YDQsNC90L3Ri9C5INCw0LLRgtC+0LzQvtCx0LjQu9GMINCyINGB0LXQu9C10LrRglxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FyKHNlbGVjdGVkQ2FyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqINCc0LXRgtC+0LQg0L/RgNC+0LLQtdGA0Y/QtdGCINC30LDQv9C+0LvQvdC10L3RiyDQstGB0LXRhSDQv9C+0LvQtdC5INC4XG4gICAgICog0LXRgdC70Lgg0LLRgdC1INC/0L7Qu9GPINC30LDQv9C+0LvQvdC10L3RiyxcbiAgICAgKiDQvtGH0LjRidCw0LXRgiDQv9C+0LvRjyDQuCDQstGL0LLQvtC00LjRgiDRg9Cy0LXQtNC+0LzQu9C10L3QuNC1LlxuICAgICAqL1xuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuZm9ybS5vbignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVGb3JtKCkpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgn0JfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwLCDQsiDQsdC70LjQttCw0LnRiNC10LUg0LLRgNC10LzRjyDQvNGLINGBINCy0LDQvNC4INGB0LLRj9C20LXQvNGB0Y8sINGB0L/QsNGB0LjQsdC+IScpO1xuICAgICAgICAgICAgICAgIC8vINC+0YfQuNGJ0LDQtdC8INC/0L7Qu9GPXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRzVG9DbGVhciA9IFt0aGlzLm5hbWUsIHRoaXMucGhvbmUsIHRoaXMuZGF0ZSwgdGhpcy5jYXJdO1xuICAgICAgICAgICAgICAgIGZpZWxkc1RvQ2xlYXIuZm9yRWFjaChmaWVsZCA9PiBmaWVsZC5zZXRWYWx1ZSgnJykpO1xuICAgICAgICAgICAgICAgIC8vINC+0YLQv9C40YHRi9Cy0LDQtdC80YHRjyDQvtGCINGB0L7QsdGL0YLQuNGPXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJpbmRDYXJkQ2xpY2tFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydCgn0JLRgdC1INC/0L7Qu9GPINC+0LHRj9C30LDRgtC10LvRjNC90Ysg0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INGE0L7RgNC80YsuXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgdmFsaWRhdGVGb3JtKCkge1xuICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C10LwsINGH0YLQviDQstGB0LUg0L/QvtC70Y8g0LfQsNC/0L7Qu9C90LXQvdGLXG4gICAgICAgIGlmICghdGhpcy5uYW1lLnZhbCgpIHx8ICF0aGlzLnBob25lLnZhbCgpIHx8ICF0aGlzLmRhdGUudmFsKCkgfHwgIXRoaXMuY2FyLnZhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IElCYXNlIGZyb20gJ0AvY29tcG9uZW50cy9CYXNlJztcbmltcG9ydCB7ICQgfSBmcm9tICdAL3V0aWxzL0pRdWVyeSc7XG4vKiog0JrQvtC80L/QvtC90LXQvdGCINC60L3QvtC/0LrQuCDRgSDRjdGE0YTQtdC60YLQvtC8INCy0YHQv9GL0YjQutC4ICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBJQmFzZSB7XG4gICAgYnV0dG9uc0VsZW1lbnRzID0gW107XG4gICAgc2VsZWN0b3JzID0ge1xuICAgICAgICBidXR0b246ICdbZGF0YS1qcy1idXR0b24tYW5pbWF0ZWRdJyxcbiAgICB9O1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAdGhpcyB7QnV0dG9ufVxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqICAg0JrQvtC90YHRgtGA0YPQutGC0L7RgCDQutC70LDRgdGB0LAuXG4gICAgICogICDQmNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdGCIHByb3BlcnRpZXMsINC40YnQtdGCINCy0YHQtSDQutC90L7Qv9C60Lgg0L3QsCDRgdGC0YDQsNC90LjRhtC1XG4gICAgICogICDRgSDQsNGC0YDQuNCx0YPRgtC+0LwgZGF0YS1qcy1idXR0b24tYW5pbWF0ZWQsINC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10YIg0LrQvdC+0L/QutC4LCDQuFxuICAgICAqICAg0L/RgNC40LLRj9C30YvQstCw0LXRgiDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRjyDQutC70LjQutCwLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zdCAkYnV0dG9uID0gJCh0aGlzLnNlbGVjdG9ycy5idXR0b24pO1xuICAgICAgICB0aGlzLmJ1dHRvbnNFbGVtZW50cyA9ICRidXR0b24uZmluZEFsbCh0aGlzLnNlbGVjdG9ycy5idXR0b24pO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog0J7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8g0LrQu9C40LrQsCDQvdCwINC60L3QvtC/0LrRgy5cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0aGlzIHtCdXR0b259XG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSDRgdC+0LHRi9GC0LjQtVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtINGG0LXQu9C10LLQvtC5INGN0LXQu9C10LzQtdC90YJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uc0VsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbW91c2VFdmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yaXBwbGVFZmZlY3QobW91c2VFdmVudCwgdGFyZ2V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog0KHQvtC30LTQsNC10YIg0Y3RhNGE0LXQutGCINCy0YHQv9GL0YjQutC4IChyaXBwbGUpINC90LAg0LrQvdC+0L/QutC1XG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdGhpcyB7QnV0dG9ufVxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgLSDRgdC+0LHRi9GC0LjQtVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtINGG0LXQu9C10LLQvtC5INGN0LXQu9C10LzQtdC90YJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHJpcHBsZUVmZmVjdChldmVudCwgdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLm1heChyZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gc2l6ZSAvIDI7XG4gICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3AgLSBzaXplIC8gMjtcbiAgICAgICAgc3Bhbi5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6ICR7c2l6ZX1weDtcbiAgICAgIGhlaWdodDogJHtzaXplfXB4O1xuICAgICAgbGVmdDogJHt4fXB4O1xuICAgICAgdG9wOiAke3l9cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgYW5pbWF0aW9uOiByaXBwbGUgMC42cyBlYXNlLW91dCBmb3J3YXJkcztcbiAgICBgO1xuICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjogcmVsYXRpdmU7IG92ZXJmbG93OiBoaWRkZW47Jyk7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnJlbW92ZSgpO1xuICAgICAgICB9LCA2MDApO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlIGZyb20gJ0AvY29tcG9uZW50cy9CYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBCYXNlIHtcbiAgICBvYnNlcnZlcjtcbiAgICBvcHRpb25zID0ge1xuICAgICAgICB0aHJlc2hvbGQ6IDAuMSxcbiAgICAgICAgcm9vdE1hcmdpbjogJzBweCAwcHggLTUwcHggMHB4JyxcbiAgICB9O1xuICAgIHNlbGVjdG9ycyA9IHtcbiAgICAgICAgY2FyZDogJy5jYXItY2FyZCwgLmZlYXR1cmUnLFxuICAgIH07XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICAgKiDQnNC10YLQvtC0INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4LlxuICAgICAgICpcbiAgICAgICAqINCe0L0g0LLRi9C30YvQstCw0LXRgiDQtNCy0LAg0LzQtdGC0L7QtNCwOlxuICAgICAgICogMS4gYmluZEV2ZW50cyAtINC/0YDQuNCy0Y/Qt9GL0LLQsNC10YIg0LLRgdC1INGB0L7QsdGL0YLQuNGPINC6INC60L7QvNC/0L7QvdC10L3RgtCw0LwuXG4gICAgICAgKiAyLiBjcmVhdGVPYnNlcnZlciAtINGB0L7Qt9C00LDQtdGCINC90LDQsdC70Y7QtNCw0YLQtdC70Y8g0LfQsCDQv9C10YDQtdGB0LXRh9C10L3QuNGP0LzQuCwg0LrQvtGC0L7RgNGL0Lkg0L7RgtC+0LHRgNCw0LbQsNC10YIg0LrQsNGA0YLQvtGH0LrQuFxuICAgICAgICosINC60L7Qs9C00LAg0L7QvdC4INC/0L7Rj9Cy0LvRj9GO0YLRgdGPINCyINC+0LrQvdC1INC/0YDQvtGB0LzQvtGC0YDQsC5cbiAgICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZU9ic2VydmVyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgICog0JzQtdGC0L7QtCDRgdC+0LfQtNCw0LXRgiDQtNC70Y8g0LrQvtC80L/QvtC90LXQvdGC0L7QsiDQutCw0YDRgiBvYnNlcnZlci5cbiAgICAgICAqINCQ0L3QuNC80LDRhtC40Y8g0L7Qv9GA0LXQtNC10LvRj9C10YLRgdGPINCyIENTUyDQuCDQt9Cw0L/Rg9GB0LrQsNC10YLRgdGPLCDQutC+0LPQtNCwINC60L7QvNC/0L7QvdC10L3RgiDQv9C10YDQtdGB0LXQutCw0LXRgtGB0Y8g0YEg0L7QutC90L7QvCDQv9GA0L7RgdC80L7RgtGA0LAuXG4gICAgICAgKlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgIGNyZWF0ZU9ic2VydmVyKCkge1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1lbWVyc2lvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtZW1lcnNpb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgY29uc3QgYW5pbWF0ZWRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvcnMuY2FyZCk7XG4gICAgICAgIGFuaW1hdGVkRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXI/Lm9ic2VydmUoZWwpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlVUkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVSSB1cGRhdGVkIScpO1xuICAgIH1cbn1cbiIsIi8qKiDQmtC70LDRgdGBINC60L7QvNC/0L7QvdC10L3RgtCwIEhlYWRlckl0ZW0g0YDQtdCw0LvQuNC30YPQtdGCINC/0L7QstC10LTQtdC90LjQtSBIZWFkZXIg0L/RgNC4INGB0LrRgNC+0LvQu9C1ICovXG5jbGFzcyBIZWFkZXJTY3JvbGwge1xuICAgIGVsZW1lbnQ7XG4gICAgbGFzdFNjcm9sbFk7XG4gICAgZWxlbWVudENsYXNzTmFtZSA9IHtcbiAgICAgICAgaGVhZGVyU2Nyb2xsOiAnLmhlYWRlcicsXG4gICAgfTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmVsZW1lbnRDbGFzc05hbWUuaGVhZGVyU2Nyb2xsKTtcbiAgICAgICAgdGhpcy5sYXN0U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuYXR0YWNoU2Nyb2xsRWZmZWN0KCk7XG4gICAgfVxuICAgIGF0dGFjaFNjcm9sbEVmZmVjdCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFkgPiAxMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtY29sb3ItaGVhZGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtY29sb3ItaGVhZGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxhc3RTY3JvbGxZID0gY3VycmVudFNjcm9sbFk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8qKiDQmtC70LDRgdGBINC60L7QvNC/0L7QvdC10L3RgtCwIEhlYWRlckl0ZW0gKi9cbmNsYXNzIEhlYWRlckl0ZW0gZXh0ZW5kcyBIZWFkZXJTY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbi8qKiDQmtC+0LzQv9C+0L3QtdC90YIgSGVhZGVyICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBIZWFkZXJJdGVtIHtcbn1cbiIsImV4cG9ydCBjbGFzcyBKUXVlcnkge1xuICAgIHJvb3RFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCByb290RWxlbWVudCA9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9vdEVsZW1lbnQgPSBzZWxlY3RvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg0K3Qu9C10LzQtdC90YIgXCIke3NlbGVjdG9yfVwiINC90LUg0L3QsNC50LTQtdC9LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmQoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBKUXVlcnkoc2VsZWN0b3IsIHRoaXMucm9vdEVsZW1lbnQpO1xuICAgIH1cbiAgICBmaW5kQWxsKHNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKG5ldyBKUXVlcnkoZWxlbWVudCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg0K3Qu9C10LzQtdC90YLRiyBcIiR7c2VsZWN0b3J9XCIg0L3QtSDQvdCw0LnQtNC10L3Riy5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgfVxuICAgIG9uKGFjdGlvbiwgY2IpIHtcbiAgICAgICAgdGhpcy5yb290RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGFjdGlvbiwgY2IpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2xhc3NUb2dnbGUodG9rZW4sIGZvcmNlKSB7XG4gICAgICAgIGlmIChmb3JjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3RFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUodG9rZW4sIGZvcmNlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSh0b2tlbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjbGFzc0NvbnRhaW5zKGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgY2xhc3NBZGQoY2xhc3NOYW1lKSB7XG4gICAgICAgIHRoaXMucm9vdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2xhc3NSZW1vdmUoY2xhc3NOYW1lKSB7XG4gICAgICAgIHRoaXMucm9vdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0LfQvdCw0YfQtdC90LjQtSDQsNGC0YDQuNCx0YPRgtCwINGBINC30LDQtNCw0L3QvdGL0Lwg0LrQstCw0LvQuNGE0LjRhtC40YDQvtCy0LDQvdC90YvQvCDQuNC80LXQvdC10LwuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHF1YWxpZmllZE5hbWUgLSDQutCy0LDQu9C40YTQuNGG0LjRgNC+0LLQsNC90L3Ri9C5INC40LzRjyDQsNGC0YDQuNCx0YPRgtCwLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtINC30L3QsNGH0LXQvdC40LUg0LDRgtGA0LjQsdGD0YLQsC5cbiAgICAgKiBAcmV0dXJucyB7SlF1ZXJ5fSAtINC+0LHRitC10LrRgiBKUXVlcnkuXG4gICAgICovXG4gICAgYXR0cihxdWFsaWZpZWROYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnJvb3RFbGVtZW50LnNldEF0dHJpYnV0ZShxdWFsaWZpZWROYW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LfQvdCw0YfQtdC90LjQtSDQsNGC0YDQuNCx0YPRgtCwINC00LDQvdC90YvRhSDRgSDQt9Cw0LTQsNC90L3Ri9C8INC60LvRjtGH0L7QvC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0g0LrQu9GO0Ycg0LDRgtGA0LjQsdGD0YLQsCDQtNCw0L3QvdGL0YUuXG4gICAgICogQHJldHVybnMge3N0cmluZyB8IG51bGx9INCX0L3QsNGH0LXQvdC40LUg0LDRgtGA0LjQsdGD0YLQsCDQtNCw0L3QvdGL0YUg0LjQu9C4IG51bGwsINC10YHQu9C4INC+0L0g0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRgi5cbiAgICAgKi9cbiAgICBkYXRhKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290RWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHtrZXl9YCk7XG4gICAgfVxuICAgIGZvY3VzKCkge1xuICAgICAgICA7XG4gICAgICAgIHRoaXMucm9vdEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHBsYXkoKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvRWxlbWVudCA9IHRoaXMucm9vdEVsZW1lbnQ7XG4gICAgICAgIHZpZGVvRWxlbWVudC5wbGF5KCkudGhlbigpO1xuICAgICAgICB2aWRlb0VsZW1lbnQuY29udHJvbHMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvRWxlbWVudCA9IHRoaXMucm9vdEVsZW1lbnQ7XG4gICAgICAgIHZpZGVvRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICB2aWRlb0VsZW1lbnQuY29udHJvbHMgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3RFbGVtZW50O1xuICAgIH1cbiAgICB2YWwoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5yb290RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb290RWxlbWVudC52YWx1ZSB8fCAnJztcbiAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdEVsZW1lbnQudmFsdWUgfHwgJyc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtdCy0L7Qt9C80L7QttC90L4g0LjQt9Cy0LvQtdGH0Ywg0LfQvdCw0YfQtdC90LjQtSDQtNC70Y8g0LTQsNC90L3QvtCz0L4g0Y3Qu9C10LzQtdC90YLQsC4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDQo9GB0YLQsNC90L7QstC60LAg0LfQvdCw0YfQtdC90LjRjyDQtNC70Y8g0L/QvtC70Y8g0LLQstC+0LTQsCDQuNC70Lgg0LLRi9C/0LDQtNCw0Y7RidC10LPQviDRgdC/0LjRgdC60LAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSDQt9C90LDRh9C10L3QuNC1INC60L7RgtC+0YDQvtC1INCx0YPQtNC10YIg0YPRgdGC0LDQvdC+0LLQu9C10L3QvlxuICAgICAqIEByZXR1cm5zIHtKUXVlcnl9IC0g0L7QsdGK0LXQutGCIEpRdWVyeVxuICAgICAqIEB0aHJvd3Mge0Vycm9yfSAtINC10YHQu9C4INGN0LvQtdC80LXQvdGCINC90LUg0Y/QstC70Y/QtdGC0YHRjyDQv9C+0LvQtdC8INCy0LLQvtC00LAg0LjQu9C4INCy0YvQv9Cw0LTQsNGO0YnQuNC8INGB0L/QuNGB0LrQvtC8XG4gICAgICovXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnJvb3RFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICAgICAgICAgIHRoaXMucm9vdEVsZW1lbnQudmFsdWUgPSBTdHJpbmcodmFsdWUpOyAvLyDQn9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNC1INC6INGB0YLRgNC+0LrQtVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3RFbGVtZW50LnZhbHVlID0gU3RyaW5nKHZhbHVlKTsgLy8g0KPRgdGC0LDQvdC+0LLQutCwINCy0YvQsdGA0LDQvdC90L7Qs9C+INC30L3QsNGH0LXQvdC40Y9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC10LLQvtC30LzQvtC20L3QviDRg9GB0YLQsNC90L7QstC40YLRjCDQt9C90LDRh9C10L3QuNC1INC00LvRjyDQtNCw0L3QvdC+0LPQviDRjdC70LXQvNC10L3RgtCwLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnJvb3RFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgICAgY2FzZSAndGV4dGFyZWEnOiAvLyDQn9C+0LvQtSDQstCy0L7QtNCwINGC0LXQutGB0YLQsCDQuNC70LggdGV4dGFyZWFcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3RFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzZWxlY3QnOiAvLyDQktGL0L/QsNC00LDRjtGJ0LjQuSDRgdC/0LjRgdC+0LpcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3RFbGVtZW50LnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC10LLQvtC30LzQvtC20L3QviDQvtGH0LjRgdGC0LjRgtGMINC00LDQvdC90L7QtSDQv9C+0LvQtS4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnQgY29uc3QgJCA9IChzZWxlY3RvcikgPT4ge1xuICAgIHJldHVybiBuZXcgSlF1ZXJ5KHNlbGVjdG9yKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi8uLi9tb2Rlcm5penIuanMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9DYXJkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgeyBCb29raW5nIH0gZnJvbSAnQC9jb21wb25lbnRzL0Jvb2tpbmcnO1xubmV3IEJ1dHRvbigpO1xubmV3IENhcmQoKTtcbm5ldyBIZWFkZXIoKTtcbm5ldyBCb29raW5nKCk7XG4iXSwibmFtZXMiOlsiQSIsImUiLCJpIiwibiIsIm8iLCJhIiwiX3ZlcnNpb24iLCJfY29uZmlnIiwiY2xhc3NQcmVmaXgiLCJlbmFibGVDbGFzc2VzIiwiZW5hYmxlSlNDbGFzcyIsInVzZVByZWZpeGVzIiwiX3EiLCJvbiIsInNldFRpbWVvdXQiLCJhZGRUZXN0IiwicHVzaCIsIm5hbWUiLCJmbiIsIm9wdGlvbnMiLCJhZGRBc3luY1Rlc3QiLCJsIiwidCIsInByb3RvdHlwZSIsInMiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjb25zdHJ1Y3RvciIsInIiLCJjIiwiZiIsInUiLCJnIiwiZCIsInAiLCJoIiwiZG9jdW1lbnRFbGVtZW50IiwibSIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJ3Iiwic3BsaXQiLCJsZW5ndGgiLCJCb29sZWFuIiwiam9pbiIsImNsYXNzTmFtZSIsImJhc2VWYWwiLCJSZWdFeHAiLCJyZXBsYWNlIiwiX3RyaWdnZXIiLCJfbCIsInVyaSIsInNoaWZ0IiwiSW1hZ2UiLCJ0eXBlIiwid2lkdGgiLCJvbmVycm9yIiwib25sb2FkIiwic3JjIiwiYWxpYXNlcyIsIkIiLCJNb2Rlcm5penIiLCJ3aW5kb3ciLCJkb2N1bWVudCJdLCJzb3VyY2VSb290IjoiIn0=