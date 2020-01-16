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
    className: "jsx-2867855297"
  }, __jsx("p", {
    className: "jsx-2867855297" + " " + "title"
  }, "Result"), __jsx("a", {
    className: "jsx-2867855297" + " " + "final-answer"
  }, "Final answer: ", resultArray[0][0]), __jsx("p", {
    className: "jsx-2867855297" + " " + "title"
  }, "Confidence breakdown:"), resultArray.map(function (result, index) {
    return __jsx("div", {
      className: "jsx-2867855297" + " " + "confidence-element"
    }, __jsx("div", {
      style: {
        backgroundColor: result[1] > 75 ? '#5DEBA4' : result[1] >= 50 ? '#FFCA41' : '#FF6868',
        height: result[1] ? result[1] * 2 : 0
      },
      className: "jsx-2867855297" + " " + "bar"
    }), __jsx("p", {
      className: "jsx-2867855297"
    }, result[1], "%"), __jsx("p", {
      className: "jsx-2867855297"
    }, result[0]));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2867855297"
  }, ".title.jsx-2867855297{padding-bottom:0.1vh;font-size:3vh;-webkit-text-decoration:underline;text-decoration:underline;}.final-answer.jsx-2867855297{font-size:2.5vh;}.confidence-element.jsx-2867855297{padding:2vw;display:inline-block;layout:inline-block;text-align:center;}.bar.jsx-2867855297{-webkit-transition:height 0.15s ease-out;transition:height 0.15s ease-out;margin:auto;height:20vh;width:1vw;border-radius:2vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL3BhZ2VzL3Byb2plY3RzL2NvbXBvbmVudHMvUmVzdWx0R3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJrQixBQUcrQixBQUtKLEFBR0wsQUFNcUIsWUFMWCxJQUh2QixLQUxlLFlBU08sRUFSTSxrQkFTVCxrQkFDbkIsR0FHYyxZQUNBLFNBYmQsR0FjWSxVQUNPLGtCQUNuQiIsImZpbGUiOiIvVXNlcnMva2lldGhvL1JlcG9zL3N0dWZmYnlraWV0LmNvbS9wYWdlcy9wcm9qZWN0cy9jb21wb25lbnRzL1Jlc3VsdEdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0R3JhcGgocHJvcHMpe1xuICBjb25zdCByZXN1bHRBcnJheSA9IChwcm9wcy5yZXN1bHQpID8gKHByb3BzLnJlc3VsdCkgOiBbMCwwXVxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+UmVzdWx0PC9wPlxuICAgICAgPGEgY2xhc3NOYW1lPVwiZmluYWwtYW5zd2VyXCI+RmluYWwgYW5zd2VyOiB7cmVzdWx0QXJyYXlbMF1bMF19PC9hPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5Db25maWRlbmNlIGJyZWFrZG93bjo8L3A+XG4gICAgICB7cmVzdWx0QXJyYXkubWFwKChyZXN1bHQsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZmlkZW5jZS1lbGVtZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIiBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAocmVzdWx0WzFdID43NSkgPyAnIzVERUJBNCcgOiAocmVzdWx0WzFdID49NTApID8nI0ZGQ0E0MSc6JyNGRjY4NjgnLFxuICAgICAgICAgICAgaGVpZ2h0OiAocmVzdWx0WzFdKSA/IChyZXN1bHRbMV0qMikgOiAwXG4gICAgICAgICAgfX0vPlxuICAgICAgICAgIDxwPntyZXN1bHRbMV19JTwvcD5cbiAgICAgICAgICA8cD57cmVzdWx0WzBdfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOjAuMXZoO1xuICAgICAgICAgIGZvbnQtc2l6ZTozdmg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmZpbmFsLWFuc3dlcntcbiAgICAgICAgICBmb250LXNpemU6IDIuNXZoO1xuICAgICAgICB9XG4gICAgICAgIC5jb25maWRlbmNlLWVsZW1lbnR7XG4gICAgICAgICAgcGFkZGluZzoydnc7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGxheW91dDogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5iYXJ7XG4gICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4xNXMgZWFzZS1vdXQ7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgICAgICB3aWR0aDogMXZ3O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6MnZ3O1xuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/kietho/Repos/stuffbykiet.com/pages/projects/components/ResultGraph.js */"));
}

/***/ })

})
//# sourceMappingURL=digit_recognizer.js.48c04de230c1e0e628d8.hot-update.js.map