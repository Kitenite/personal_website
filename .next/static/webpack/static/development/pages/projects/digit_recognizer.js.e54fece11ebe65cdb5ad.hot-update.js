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
    className: "jsx-963602724"
  }, __jsx("p", {
    className: "jsx-963602724" + " " + "title"
  }, "Result"), __jsx("a", {
    className: "jsx-963602724" + " " + "final-answer"
  }, "Final answer: ", resultArray[0][0]), __jsx("p", {
    className: "jsx-963602724" + " " + "title"
  }, "Confidence breakdown:"), resultArray.map(function (result, index) {
    return __jsx("div", {
      className: "jsx-963602724" + " " + "confidence-element"
    }, __jsx("div", {
      style: {
        backgroundColor: result[1] > 75 ? '#5DEBA4' : result[1] >= 50 ? '#FFCA41' : '#FF6868',
        height: result[1] ? result[1] * 2 : 0
      },
      className: "jsx-963602724" + " " + "bar"
    }), __jsx("p", {
      className: "jsx-963602724"
    }, result[1], "%"), __jsx("p", {
      className: "jsx-963602724"
    }, result[0]));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "963602724"
  }, ".title.jsx-963602724{padding-bottom:0.1vh;font-size:3vh;-webkit-text-decoration:underline;text-decoration:underline;}.final-answer.jsx-963602724{font-size:2.5vh;}.confidence-element.jsx-963602724{padding:2vw;display:inline-block;layout:inline-block;text-align:center;}.bar.jsx-963602724{margin:auto;max-height:20vh;width:1vw;-webkit-transition:max-height 1s ease-in;transition:max-height 1s ease-in;border-radius:2vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL3BhZ2VzL3Byb2plY3RzL2NvbXBvbmVudHMvUmVzdWx0R3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJrQixBQUcrQixBQUtKLEFBR0wsQUFNQyxZQUxTLEFBTUwsSUFUbEIsS0FMZSxPQWVILEtBTlUsRUFSTSxHQWVPLGVBTmhCLGtCQUNuQix3QkFUQSxpQkFlbUIsa0JBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL3BhZ2VzL3Byb2plY3RzL2NvbXBvbmVudHMvUmVzdWx0R3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bHRHcmFwaChwcm9wcyl7XG4gIGNvbnN0IHJlc3VsdEFycmF5ID0gKHByb3BzLnJlc3VsdCkgPyAocHJvcHMucmVzdWx0KSA6IFswLDBdXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5SZXN1bHQ8L3A+XG4gICAgICA8YSBjbGFzc05hbWU9XCJmaW5hbC1hbnN3ZXJcIj5GaW5hbCBhbnN3ZXI6IHtyZXN1bHRBcnJheVswXVswXX08L2E+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvbmZpZGVuY2UgYnJlYWtkb3duOjwvcD5cbiAgICAgIHtyZXN1bHRBcnJheS5tYXAoKHJlc3VsdCwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25maWRlbmNlLWVsZW1lbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IChyZXN1bHRbMV0gPjc1KSA/ICcjNURFQkE0JyA6IChyZXN1bHRbMV0gPj01MCkgPycjRkZDQTQxJzonI0ZGNjg2OCcsXG4gICAgICAgICAgICBoZWlnaHQ6IChyZXN1bHRbMV0pID8gKHJlc3VsdFsxXSoyKSA6IDBcbiAgICAgICAgICB9fS8+XG4gICAgICAgICAgPHA+e3Jlc3VsdFsxXX0lPC9wPlxuICAgICAgICAgIDxwPntyZXN1bHRbMF19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206MC4xdmg7XG4gICAgICAgICAgZm9udC1zaXplOjN2aDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgICAuZmluYWwtYW5zd2Vye1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi41dmg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbmZpZGVuY2UtZWxlbWVudHtcbiAgICAgICAgICBwYWRkaW5nOjJ2dztcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbGF5b3V0OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJhcntcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgbWF4LWhlaWdodDogMjB2aDtcbiAgICAgICAgICB3aWR0aDogMXZ3O1xuICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMXMgZWFzZS1pbjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOjJ2dztcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/kietho/Repos/stuffbykiet.com/pages/projects/components/ResultGraph.js */"));
}

/***/ })

})
//# sourceMappingURL=digit_recognizer.js.e54fece11ebe65cdb5ad.hot-update.js.map