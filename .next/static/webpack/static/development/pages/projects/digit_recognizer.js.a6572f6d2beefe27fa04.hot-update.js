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
  return __jsx("div", {
    className: "jsx-1580602796"
  }, __jsx("p", {
    className: "jsx-1580602796" + " " + "title"
  }, "Result"), __jsx("a", {
    className: "jsx-1580602796" + " " + "final-answer"
  }, "Final answer: ", resultArray[0][0]), __jsx("p", {
    className: "jsx-1580602796" + " " + "title"
  }, "Confidence breakdown:"), resultArray.map(function (result, index) {
    return __jsx("div", {
      className: "jsx-1580602796" + " " + "confidence-element"
    }, __jsx("div", {
      style: {
        backgroundColor: result[1] > 10 ? 'red' : 'green'
      },
      className: "jsx-1580602796" + " " + "bar"
    }), __jsx("p", {
      className: "jsx-1580602796"
    }, result[0]), __jsx("p", {
      className: "jsx-1580602796"
    }, result[1], "%"));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1580602796"
  }, ".title.jsx-1580602796{padding-bottom:0.1vh;font-size:3vh;-webkit-text-decoration:underline;text-decoration:underline;}.confidence-element.jsx-1580602796{padding:2vw;display:inline-block;layout:inline-flex;text-align:center;}.bar.jsx-1580602796{height:20vh;width:1vw;border-radius:2vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL3BhZ2VzL3Byb2plY3RzL2NvbXBvbmVudHMvUmVzdWx0R3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2tCLEFBRytCLEFBS1QsQUFNQyxZQUxTLEFBTVgsU0FYRyxDQVlJLFdBTkUsRUFMTyxLQVk1QixZQU5tQixrQkFDbkIseUJBTkEiLCJmaWxlIjoiL1VzZXJzL2tpZXRoby9SZXBvcy9zdHVmZmJ5a2lldC5jb20vcGFnZXMvcHJvamVjdHMvY29tcG9uZW50cy9SZXN1bHRHcmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdEdyYXBoKHByb3BzKXtcbiAgY29uc3QgcmVzdWx0QXJyYXkgPSBwcm9wcy5yZXN1bHRcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPlJlc3VsdDwvcD5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImZpbmFsLWFuc3dlclwiPkZpbmFsIGFuc3dlcjoge3Jlc3VsdEFycmF5WzBdWzBdfTwvYT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+Q29uZmlkZW5jZSBicmVha2Rvd246PC9wPlxuICAgICAge3Jlc3VsdEFycmF5Lm1hcCgocmVzdWx0LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmZpZGVuY2UtZWxlbWVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHJlc3VsdFsxXSA+MTAgPyAncmVkJyA6ICdncmVlbid9fS8+XG4gICAgICAgICAgPHA+e3Jlc3VsdFswXX08L3A+XG4gICAgICAgICAgPHA+e3Jlc3VsdFsxXX0lPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206MC4xdmg7XG4gICAgICAgICAgZm9udC1zaXplOjN2aDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgICAuY29uZmlkZW5jZS1lbGVtZW50e1xuICAgICAgICAgIHBhZGRpbmc6MnZ3O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBsYXlvdXQ6IGlubGluZS1mbGV4O1xuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5iYXJ7XG4gICAgICAgICAgaGVpZ2h0OiAyMHZoO1xuICAgICAgICAgIHdpZHRoOiAxdnc7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czoydnc7XG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/kietho/Repos/stuffbykiet.com/pages/projects/components/ResultGraph.js */"));
}

/***/ })

})
//# sourceMappingURL=digit_recognizer.js.a6572f6d2beefe27fa04.hot-update.js.map