webpackHotUpdate("static/development/pages/projects/digit_recognizer.js",{

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Button(props) {
  var isClear = true;
  return __jsx("button", {
    onClick: props.onClick,
    className: isClear ? "clear-button" : "black-button"
  }, __jsx("a", {
    className: "title"
  }, props.children), __jsx("div", {
    className: "button-clear"
  }), __jsx("style", null, "\n\n        .clear-button{\n          background: white\n          color: black\n        }\n        .black-button{\n          background: black\n          color: white\n        }\n        "));
}

/***/ })

})
//# sourceMappingURL=digit_recognizer.js.5ca07f450d67c472133e.hot-update.js.map