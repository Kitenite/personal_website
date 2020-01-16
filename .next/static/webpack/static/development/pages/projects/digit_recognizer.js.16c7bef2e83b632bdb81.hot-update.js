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
    className: "jsx-1630524003"
  }, __jsx("p", {
    className: "jsx-1630524003" + " " + "title"
  }, "Result"), __jsx("a", {
    className: "jsx-1630524003" + " " + "final-answer"
  }, "Final answer: ", resultArray[0][0]), __jsx("p", {
    className: "jsx-1630524003" + " " + "title"
  }, "Confidence breakdown:"), resultArray.map(function (result, index) {
    return __jsx("div", {
      className: "jsx-1630524003" + " " + "confidence-element"
    }, __jsx("div", {
      style: {
        backgroundColor: result[1] > 75 ? '#5DEBA4' : result[1] >= 50 ? '#FFCA41' : '#FF6868',
        height: result[1] ? result[1] * 2 : 0
      },
      className: "jsx-1630524003" + " " + "bar"
    }), __jsx("p", {
      className: "jsx-1630524003"
    }, result[1], "%"), __jsx("p", {
      className: "jsx-1630524003"
    }, result[0]));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1630524003"
  }, ".title.jsx-1630524003{padding-bottom:0.1vh;font-size:3vh;-webkit-text-decoration:underline;text-decoration:underline;}.final-answer.jsx-1630524003{font-size:2.5vh;}.confidence-element.jsx-1630524003{padding:2vw;display:inline-block;layout:inline-block;text-align:center;}.bar.jsx-1630524003{margin:auto;height:20vh;width:1vw;border-radius:2vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL3BhZ2VzL3Byb2plY3RzL2NvbXBvbmVudHMvUmVzdWx0R3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJrQixBQUcrQixBQUtKLEFBR0wsQUFNQyxZQUxTLEFBTVQsSUFUZCxLQUxlLEdBZUgsU0FOVSxDQU9ILENBZlMsaUJBZ0I1QixDQVBtQixrQkFDbkIsd0JBVEEiLCJmaWxlIjoiL1VzZXJzL2tpZXRoby9SZXBvcy9zdHVmZmJ5a2lldC5jb20vcGFnZXMvcHJvamVjdHMvY29tcG9uZW50cy9SZXN1bHRHcmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdEdyYXBoKHByb3BzKXtcbiAgY29uc3QgcmVzdWx0QXJyYXkgPSAocHJvcHMucmVzdWx0KSA/IChwcm9wcy5yZXN1bHQpIDogWzAsMF1cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPlJlc3VsdDwvcD5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImZpbmFsLWFuc3dlclwiPkZpbmFsIGFuc3dlcjoge3Jlc3VsdEFycmF5WzBdWzBdfTwvYT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+Q29uZmlkZW5jZSBicmVha2Rvd246PC9wPlxuICAgICAge3Jlc3VsdEFycmF5Lm1hcCgocmVzdWx0LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmZpZGVuY2UtZWxlbWVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCIgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHJlc3VsdFsxXSA+NzUpID8gJyM1REVCQTQnIDogKHJlc3VsdFsxXSA+PTUwKSA/JyNGRkNBNDEnOicjRkY2ODY4JyxcbiAgICAgICAgICAgIGhlaWdodDogKHJlc3VsdFsxXSkgPyAocmVzdWx0WzFdKjIpIDogMFxuICAgICAgICAgIH19Lz5cbiAgICAgICAgICA8cD57cmVzdWx0WzFdfSU8L3A+XG4gICAgICAgICAgPHA+e3Jlc3VsdFswXX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTowLjF2aDtcbiAgICAgICAgICBmb250LXNpemU6M3ZoO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC5maW5hbC1hbnN3ZXJ7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjV2aDtcbiAgICAgICAgfVxuICAgICAgICAuY29uZmlkZW5jZS1lbGVtZW50e1xuICAgICAgICAgIHBhZGRpbmc6MnZ3O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBsYXlvdXQ6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYmFye1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgICAgICAgd2lkdGg6IDF2dztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOjJ2dztcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/kietho/Repos/stuffbykiet.com/pages/projects/components/ResultGraph.js */"));
}

/***/ })

})
//# sourceMappingURL=digit_recognizer.js.16c7bef2e83b632bdb81.hot-update.js.map