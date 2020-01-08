webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FadeInSection.js":
/*!*************************************!*\
  !*** ./components/FadeInSection.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/kietho/Repos/stuffbykiet.com/components/FadeInSection.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function FadeInSection(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isVisible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var domRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        return setVisible(entry.isIntersecting);
      });
    });
    observer.observe(domRef.current);
    return function () {
      return observer.unobserve(domRef.current);
    };
  }, []);
  return __jsx("div", {
    ref: domRef,
    className: "jsx-3881756070" + " " + "fade-in-section ".concat(isVisible ? 'is-visible' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3881756070",
    __self: this
  }, ".fade-in-section.jsx-3881756070{opacity:0;-webkit-transform:translateY(20vh);-ms-transform:translateY(20vh);transform:translateY(20vh);visibility:hidden;-webkit-transition:opacity 1200ms ease-out,-webkit-transform 600ms ease-out, visibility 1200ms ease-out;-webkit-transition:opacity 1200ms ease-out,transform 600ms ease-out, visibility 1200ms ease-out;transition:opacity 1200ms ease-out,transform 600ms ease-out, visibility 1200ms ease-out;will-change:opacity,transform,visibility;}.fade-in-section.is-visible.jsx-3881756070{opacity:1;-webkit-transform:none;-ms-transform:none;transform:none;visibility:visible;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL2NvbXBvbmVudHMvRmFkZUluU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFha0IsQUFHcUIsQUFRQSxVQVBpQixBQVFaLHlEQUNJLG1CQUNyQixpQkFUb0Isa0JBRVUsZ1NBQ2UseUNBQzdDIiwiZmlsZSI6Ii9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL2NvbXBvbmVudHMvRmFkZUluU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEZhZGVJblNlY3Rpb24ocHJvcHMpIHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0VmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0VmlzaWJsZShlbnRyeS5pc0ludGVyc2VjdGluZykpO1xuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BmYWRlLWluLXNlY3Rpb24gJHtpc1Zpc2libGUgPyAnaXMtdmlzaWJsZScgOiAnJ31gfSByZWY9e2RvbVJlZn0gPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZmFkZS1pbi1zZWN0aW9uIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHZoKTtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMjAwbXMgZWFzZS1vdXQsIHRyYW5zZm9ybSA2MDBtcyBlYXNlLW91dCxcbiAgICAgICAgICAgIHZpc2liaWxpdHkgMTIwMG1zIGVhc2Utb3V0O1xuICAgICAgICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm0sIHZpc2liaWxpdHk7XG4gICAgICAgIH1cbiAgICAgICAgLmZhZGUtaW4tc2VjdGlvbi5pcy12aXNpYmxlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFkZUluU2VjdGlvblxuIl19 */\n/*@ sourceURL=/Users/kietho/Repos/stuffbykiet.com/components/FadeInSection.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (FadeInSection);

/***/ }),

/***/ "./components/ScrollPanel.js":
/*!***********************************!*\
  !*** ./components/ScrollPanel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FadeInSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FadeInSection */ "./components/FadeInSection.js");
var _jsxFileName = "/Users/kietho/Repos/stuffbykiet.com/components/ScrollPanel.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var ScrollPanel = function ScrollPanel(props) {
  return __jsx(_FadeInSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3372015106" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3372015106" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.title), __jsx("div", {
    className: "jsx-3372015106" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3372015106",
    __self: this
  }, ".wrapper.jsx-3372015106{min-height:100vh;height:auto;font-weight :lighter;font-size:30px;font-size:4vh;padding-left:2vw;}.title.jsx-3372015106{font-weight :lighter;font-size:30px;font-size:4vh;padding-left:2vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL2NvbXBvbmVudHMvU2Nyb2xsUGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2tCLEFBRzRCLEFBUUksaUJBUFQsSUFRRyxRQVBNLE9BUVAsY0FQQyxBQVFFLGVBUEgsRUFRaEIsWUFQbUIsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL2NvbXBvbmVudHMvU2Nyb2xsUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmFkZUluU2VjdGlvbiBmcm9tICcuL0ZhZGVJblNlY3Rpb24nXG5cbmNvbnN0IFNjcm9sbFBhbmVsID0gcHJvcHMgPT4gKFxuICA8RmFkZUluU2VjdGlvbj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53cmFwcGVye1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBmb250LXdlaWdodCA6IGxpZ2h0ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNHZoO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMnZ3O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQgOiBsaWdodGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBmb250LXNpemU6IDR2aDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJ2dztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIDwvRmFkZUluU2VjdGlvbj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsUGFuZWxcbiJdfQ== */\n/*@ sourceURL=/Users/kietho/Repos/stuffbykiet.com/components/ScrollPanel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (ScrollPanel);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArrayLimit(arr, i) {
  if (!(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ })

})
//# sourceMappingURL=index.js.865366269ec8d761bdfc.hot-update.js.map