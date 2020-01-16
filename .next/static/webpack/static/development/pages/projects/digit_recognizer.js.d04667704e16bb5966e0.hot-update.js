webpackHotUpdate("static/development/pages/projects/digit_recognizer.js",{

/***/ "./pages/projects/components/ResultGraph.js":
/*!**************************************************!*\
  !*** ./pages/projects/components/ResultGraph.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultGraph; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function ResultGraph(props) {
  var resultArray = props.result ? props.result : [0, 0];
  return __jsx("div", {
    className: "jsx-1282830152"
  }, __jsx("p", {
    className: "jsx-1282830152" + " " + "title"
  }, "Result"), __jsx("a", {
    className: "jsx-1282830152" + " " + "final-answer"
  }, "Final answer: ", resultArray[0][0]), __jsx("p", {
    className: "jsx-1282830152" + " " + "title"
  }, "Confidence breakdown:"), resultArray.map(function (result, index) {
    return __jsx("div", {
      className: "jsx-1282830152" + " " + "confidence-element"
    }, __jsx("div", {
      style: {
        backgroundColor: result[1] > 75 ? '#5DEBA4' : result[1] >= 50 ? '#FFCA41' : '#FF6868',
        height: result[1] ? result[1] * 2 : 0
      },
      className: "jsx-1282830152" + " " + "bar"
    }), __jsx("p", {
      className: "jsx-1282830152"
    }, result[1], "%"), __jsx("p", {
      className: "jsx-1282830152"
    }, result[0]));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1282830152"
  }, ".title.jsx-1282830152{padding-bottom:0.1vh;font-size:3vh;-webkit-text-decoration:underline;text-decoration:underline;}.final-answer.jsx-1282830152{font-size:2.5vh;}.confidence-element.jsx-1282830152{padding:2vw;display:inline-block;layout:inline-block;text-align:center;}@-webkit-keyframes growFromBottom-jsx-1282830152{0%{-webkit-transform:scaleY(0);-ms-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}100%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}}@keyframes growFromBottom-jsx-1282830152{0%{-webkit-transform:scaleY(0);-ms-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}100%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}}.bar.jsx-1282830152{margin:auto;height:20vh;width:1vw;border-radius:2vw;-webkit-animation:3s ease-out 0s 1 growFromBottom-jsx-1282830152;animation:3s ease-out 0s 1 growFromBottom-jsx-1282830152;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL3BhZ2VzL3Byb2plY3RzL2NvbXBvbmVudHMvUmVzdWx0R3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJrQixBQUcrQixBQUtKLEFBR0wsQUFPVyxBQUlBLEFBS1YsWUFmUyxBQWdCVCxJQW5CZCxLQUxlLEdBeUJILFNBaEJVLENBaUJILENBekJTLGlCQTBCZ0IsQ0FqQnpCLGtCQUNuQixDQUtDLEFBRzJCLHVCQWpCNUIsNkRBY0UsQUFJQSxrQkFRRiIsImZpbGUiOiIvVXNlcnMva2lldGhvL1JlcG9zL3N0dWZmYnlraWV0LmNvbS9wYWdlcy9wcm9qZWN0cy9jb21wb25lbnRzL1Jlc3VsdEdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0R3JhcGgocHJvcHMpe1xuICBjb25zdCByZXN1bHRBcnJheSA9IChwcm9wcy5yZXN1bHQpID8gKHByb3BzLnJlc3VsdCkgOiBbMCwwXVxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+UmVzdWx0PC9wPlxuICAgICAgPGEgY2xhc3NOYW1lPVwiZmluYWwtYW5zd2VyXCI+RmluYWwgYW5zd2VyOiB7cmVzdWx0QXJyYXlbMF1bMF19PC9hPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5Db25maWRlbmNlIGJyZWFrZG93bjo8L3A+XG4gICAgICB7cmVzdWx0QXJyYXkubWFwKChyZXN1bHQsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZmlkZW5jZS1lbGVtZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIiBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAocmVzdWx0WzFdID43NSkgPyAnIzVERUJBNCcgOiAocmVzdWx0WzFdID49NTApID8nI0ZGQ0E0MSc6JyNGRjY4NjgnLFxuICAgICAgICAgICAgaGVpZ2h0OiAocmVzdWx0WzFdKSA/IChyZXN1bHRbMV0qMikgOiAwXG4gICAgICAgICAgfX0vPlxuICAgICAgICAgIDxwPntyZXN1bHRbMV19JTwvcD5cbiAgICAgICAgICA8cD57cmVzdWx0WzBdfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOjAuMXZoO1xuICAgICAgICAgIGZvbnQtc2l6ZTozdmg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmZpbmFsLWFuc3dlcntcbiAgICAgICAgICBmb250LXNpemU6IDIuNXZoO1xuICAgICAgICB9XG4gICAgICAgIC5jb25maWRlbmNlLWVsZW1lbnR7XG4gICAgICAgICAgcGFkZGluZzoydnc7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGxheW91dDogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgZ3Jvd0Zyb21Cb3R0b20ge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tXG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5iYXJ7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgICAgICB3aWR0aDogMXZ3O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6MnZ3O1xuICAgICAgICAgIGFuaW1hdGlvbjogM3MgZWFzZS1vdXQgMHMgMSBncm93RnJvbUJvdHRvbTtcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/kietho/Repos/stuffbykiet.com/pages/projects/components/ResultGraph.js */"));
}

/***/ })

})
//# sourceMappingURL=digit_recognizer.js.d04667704e16bb5966e0.hot-update.js.map