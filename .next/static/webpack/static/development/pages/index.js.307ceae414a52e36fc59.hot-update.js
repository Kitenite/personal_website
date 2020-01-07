webpackHotUpdate("static/development/pages/index.js",{

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
var _jsxFileName = "/Users/kietho/Repos/stuffbykiet.com/components/ScrollPanel.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var ScrollPanel = function ScrollPanel(props) {
  return __jsx("div", {
    className: "jsx-124413706",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, props.title, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "124413706",
    __self: this
  }, ".jsx-124413706{min-height:100vh;height:auto;font-weight :lighter;font-size:30px;font-size:4vh;padding-left:2vw;}h1.jsx-124413706{font-weight :lighter;font-size:30px;font-size:4vh;padding-left:2vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL2NvbXBvbmVudHMvU2Nyb2xsUGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWdCLEFBRTBCLEFBT00saUJBTlgsSUFPSyxRQU5JLE9BT0wsY0FORCxBQU9JLGVBTkwsRUFPZCxZQU5pQixpQkFPbkIiLCJmaWxlIjoiL1VzZXJzL2tpZXRoby9SZXBvcy9zdHVmZmJ5a2lldC5jb20vY29tcG9uZW50cy9TY3JvbGxQYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNjcm9sbFBhbmVsID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIHtwcm9wcy50aXRsZX1cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBmb250LXdlaWdodCA6IGxpZ2h0ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZm9udC1zaXplOiA0dmg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMnZ3O1xuICAgICAgICBoMXtcbiAgICAgICAgICBmb250LXdlaWdodCA6IGxpZ2h0ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNHZoO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMnZ3O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxQYW5lbFxuIl19 */\n/*@ sourceURL=/Users/kietho/Repos/stuffbykiet.com/components/ScrollPanel.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ScrollPanel);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PostLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostLink */ "./components/PostLink.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Title */ "./components/Title.js");
/* harmony import */ var _components_ScrollPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ScrollPanel */ "./components/ScrollPanel.js");
/* harmony import */ var _posts_AboutMePanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts/AboutMePanel */ "./pages/posts/AboutMePanel.js");
/* harmony import */ var _posts_VoyPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/VoyPanel */ "./pages/posts/VoyPanel.js");
var _jsxFileName = "/Users/kietho/Repos/stuffbykiet.com/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Components



 // Content



function Blog() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1486862249",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "kiet ", __jsx("b", {
    className: "jsx-1486862249",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Ho"))), __jsx(_components_ScrollPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_posts_AboutMePanel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx(_components_ScrollPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: __jsx("h1", {
      className: "jsx-1486862249",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("b", {
      className: "jsx-1486862249",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Voy "), "Audio Tour"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_posts_VoyPanel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx(_components_ScrollPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: __jsx("h1", {
      className: "jsx-1486862249",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("b", {
      className: "jsx-1486862249",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "AI "), "Projects"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_components_ScrollPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: __jsx("h1", {
      className: "jsx-1486862249",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("b", {
      className: "jsx-1486862249",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Hack"), "athon"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1486862249",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCbUIiLCJmaWxlIjoiL1VzZXJzL2tpZXRoby9SZXBvcy9zdHVmZmJ5a2lldC5jb20vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb21wb25lbnRzXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFBvc3RMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdExpbmsnXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9UaXRsZSdcbmltcG9ydCBTY3JvbGxQYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL1Njcm9sbFBhbmVsJ1xuXG4vLyBDb250ZW50XG5pbXBvcnQgQWJvdXRNZVBhbmVsIGZyb20gJy4vcG9zdHMvQWJvdXRNZVBhbmVsJ1xuaW1wb3J0IFZveVBhbmVsIGZyb20gJy4vcG9zdHMvVm95UGFuZWwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxUaXRsZT48YT5raWV0IDxiPkhvPC9iPjwvYT48L1RpdGxlPlxuXG4gICAgICA8U2Nyb2xsUGFuZWw+XG4gICAgICAgIDxBYm91dE1lUGFuZWwvPlxuICAgICAgPC9TY3JvbGxQYW5lbD5cblxuICAgICAgPFNjcm9sbFBhbmVsIHRpdGxlPXs8aDE+PGI+Vm95IDwvYj5BdWRpbyBUb3VyPC9oMT59PlxuICAgICAgICA8Vm95UGFuZWwvPlxuICAgICAgPC9TY3JvbGxQYW5lbD5cblxuICAgICAgPFNjcm9sbFBhbmVsIHRpdGxlPXs8aDE+PGI+QUkgPC9iPlByb2plY3RzPC9oMT59PlxuICAgICAgPC9TY3JvbGxQYW5lbD5cblxuICAgICAgPFNjcm9sbFBhbmVsIHRpdGxlPXs8aDE+PGI+SGFjazwvYj5hdGhvbjwvaDE+fT5cbiAgICAgIDwvU2Nyb2xsUGFuZWw+XG4gICAgICA8c3R5bGUganN4PiB7YFxuICAgICAgICBcbiAgICAgIGB9IDwvc3R5bGU+XG5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/kietho/Repos/stuffbykiet.com/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.307ceae414a52e36fc59.hot-update.js.map