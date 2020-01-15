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
  var resultArray = props.result;

  var barStyle = function barStyle(confidence) {
    backgroundColor: 'red';

    width: 100;
  };

  return __jsx("div", {
    className: "jsx-2112997162"
  }, __jsx("p", {
    className: "jsx-2112997162" + " " + "title"
  }, "Result"), __jsx("a", {
    className: "jsx-2112997162" + " " + "final-answer"
  }, "Final answer: ", resultArray[0][0]), __jsx("p", {
    className: "jsx-2112997162" + " " + "title"
  }, "Confidence breakdown:"), resultArray.map(function (result, index) {
    return __jsx("div", {
      className: "jsx-2112997162" + " " + "confidence-element"
    }, __jsx("div", {
      style: barStyle(result[1]),
      className: "jsx-2112997162" + " " + "bar"
    }), __jsx("p", {
      className: "jsx-2112997162"
    }, result[0]), __jsx("p", {
      className: "jsx-2112997162"
    }, result[1], "%"));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2112997162"
  }, ".title.jsx-2112997162{padding-bottom:0.1vh;font-size:3vh;-webkit-text-decoration:underline;text-decoration:underline;}.confidence-element.jsx-2112997162{padding:2vw;display:inline-block;layout:inline-flex;text-align:center;}.bar.jsx-2112997162{height:20vh;width:1vw;border-radius:2vw;backgroundColor:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL3BhZ2VzL3Byb2plY3RzL2NvbXBvbmVudHMvUmVzdWx0R3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JrQixBQUcrQixBQUtULEFBTUMsWUFMUyxBQU1YLFNBWEcsQ0FZSSxXQU5FLEVBTE8sS0FhN0IsWUFQb0IsUUFPbkIsVUFOQSx5QkFOQSIsImZpbGUiOiIvVXNlcnMva2lldGhvL1JlcG9zL3N0dWZmYnlraWV0LmNvbS9wYWdlcy9wcm9qZWN0cy9jb21wb25lbnRzL1Jlc3VsdEdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0R3JhcGgocHJvcHMpe1xuICBjb25zdCByZXN1bHRBcnJheSA9IHByb3BzLnJlc3VsdFxuICBjb25zdCBiYXJTdHlsZSA9IChjb25maWRlbmNlKSA9PiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJztcbiAgICB3aWR0aDogMTAwXG4gIH1cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPlJlc3VsdDwvcD5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImZpbmFsLWFuc3dlclwiPkZpbmFsIGFuc3dlcjoge3Jlc3VsdEFycmF5WzBdWzBdfTwvYT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+Q29uZmlkZW5jZSBicmVha2Rvd246PC9wPlxuICAgICAge3Jlc3VsdEFycmF5Lm1hcCgocmVzdWx0LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmZpZGVuY2UtZWxlbWVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCIgc3R5bGU9e2JhclN0eWxlKHJlc3VsdFsxXSl9Lz5cbiAgICAgICAgICA8cD57cmVzdWx0WzBdfTwvcD5cbiAgICAgICAgICA8cD57cmVzdWx0WzFdfSU8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTowLjF2aDtcbiAgICAgICAgICBmb250LXNpemU6M3ZoO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC5jb25maWRlbmNlLWVsZW1lbnR7XG4gICAgICAgICAgcGFkZGluZzoydnc7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGxheW91dDogaW5saW5lLWZsZXg7XG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJhcntcbiAgICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgICAgICAgd2lkdGg6IDF2dztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOjJ2dztcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6cmVkXG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/kietho/Repos/stuffbykiet.com/pages/projects/components/ResultGraph.js */"));
}

/***/ })

})
//# sourceMappingURL=digit_recognizer.js.ba7ca3aa994b27beff21.hot-update.js.map