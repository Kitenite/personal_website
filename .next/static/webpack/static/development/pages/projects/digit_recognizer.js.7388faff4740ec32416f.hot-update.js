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
    className: "jsx-3187536833"
  }, __jsx("p", {
    className: "jsx-3187536833" + " " + "title"
  }, "Result"), __jsx("a", {
    className: "jsx-3187536833" + " " + "final-answer"
  }, "Final answer: ", resultArray[0][0]), __jsx("p", {
    className: "jsx-3187536833" + " " + "title"
  }, "Confidence breakdown:"), resultArray.map(function (result, index) {
    return __jsx("div", {
      className: "jsx-3187536833" + " " + "confidence-element"
    }, __jsx("div", {
      style: barStyle(result[1]),
      className: "jsx-3187536833" + " " + "bar"
    }), __jsx("p", {
      className: "jsx-3187536833"
    }, result[0]), __jsx("p", {
      className: "jsx-3187536833"
    }, result[1], "%"));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3187536833"
  }, ".title.jsx-3187536833{padding-bottom:0.1vh;font-size:3vh;-webkit-text-decoration:underline;text-decoration:underline;}.confidence-element.jsx-3187536833{padding:2vw;display:inline-block;layout:inline-flex;text-align:center;}.bar.jsx-3187536833{height:20vh;width:1vw;border-radius:2vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL3BhZ2VzL3Byb2plY3RzL2NvbXBvbmVudHMvUmVzdWx0R3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JrQixBQUcrQixBQUtULEFBTUMsWUFMUyxBQU1YLFNBWEcsQ0FhaEIsV0FQc0IsRUFMTyxLQVk1QixZQU5tQixrQkFDbkIseUJBTkEiLCJmaWxlIjoiL1VzZXJzL2tpZXRoby9SZXBvcy9zdHVmZmJ5a2lldC5jb20vcGFnZXMvcHJvamVjdHMvY29tcG9uZW50cy9SZXN1bHRHcmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdEdyYXBoKHByb3BzKXtcbiAgY29uc3QgcmVzdWx0QXJyYXkgPSBwcm9wcy5yZXN1bHRcbiAgY29uc3QgYmFyU3R5bGUgPSAoY29uZmlkZW5jZSkgPT4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCdcbiAgICB3aWR0aDogMTAwO1xuICB9XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5SZXN1bHQ8L3A+XG4gICAgICA8YSBjbGFzc05hbWU9XCJmaW5hbC1hbnN3ZXJcIj5GaW5hbCBhbnN3ZXI6IHtyZXN1bHRBcnJheVswXVswXX08L2E+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvbmZpZGVuY2UgYnJlYWtkb3duOjwvcD5cbiAgICAgIHtyZXN1bHRBcnJheS5tYXAoKHJlc3VsdCwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25maWRlbmNlLWVsZW1lbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiIHN0eWxlPXtiYXJTdHlsZShyZXN1bHRbMV0pfS8+XG4gICAgICAgICAgPHA+e3Jlc3VsdFswXX08L3A+XG4gICAgICAgICAgPHA+e3Jlc3VsdFsxXX0lPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206MC4xdmg7XG4gICAgICAgICAgZm9udC1zaXplOjN2aDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgICAuY29uZmlkZW5jZS1lbGVtZW50e1xuICAgICAgICAgIHBhZGRpbmc6MnZ3O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBsYXlvdXQ6IGlubGluZS1mbGV4O1xuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5iYXJ7XG4gICAgICAgICAgaGVpZ2h0OiAyMHZoO1xuICAgICAgICAgIHdpZHRoOiAxdnc7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czoydndcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/kietho/Repos/stuffbykiet.com/pages/projects/components/ResultGraph.js */"));
}

/***/ })

})
//# sourceMappingURL=digit_recognizer.js.7388faff4740ec32416f.hot-update.js.map