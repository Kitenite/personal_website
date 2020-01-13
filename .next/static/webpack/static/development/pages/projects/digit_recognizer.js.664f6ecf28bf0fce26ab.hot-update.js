webpackHotUpdate("static/development/pages/projects/digit_recognizer.js",{

/***/ "./pages/projects/DrawingCanvas.js":
false,

/***/ "./pages/projects/ImageProcessor.js":
false,

/***/ "./pages/projects/components/DrawingCanvas.js":
/*!****************************************************!*\
  !*** ./pages/projects/components/DrawingCanvas.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DrawingCanvas; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_signature_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-signature-canvas */ "./node_modules/react-signature-canvas/build/index.js");
/* harmony import */ var react_signature_canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_signature_canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ImageProcessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageProcessor */ "./pages/projects/components/ImageProcessor.js");


var _jsxFileName = "/Users/kietho/Repos/stuffbykiet.com/pages/projects/components/DrawingCanvas.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function DrawingCanvas() {
  // useStates
  var sigCanvas = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({});

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      imageURL = _useState[0],
      setImageURL = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      resultArray = _useState2[0],
      setResultArray = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      height = _useState3[0],
      setHeight = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      width = _useState4[0],
      setWidth = _useState4[1]; // Canvas Configuration


  if (true) {
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
      return setHeight(document.children[0].clientHeight);
    }, [document.children[0].clientHeight]);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
      return setWidth(document.children[0].clientWidth);
    }, [document.children[0].clientWidth]);
  }

  var canvasWidth = Math.min(height, width) / 2;
  var brushSize = (canvasWidth / 30).toString(10); // Functions

  var clearPad = function clearPad() {
    sigCanvas.current.clear();
    setImageURL(null);
    setResultArray(null);
  };

  var submitPad = function submitPad() {
    var submittedImage = sigCanvas.current.getTrimmedCanvas();
    var result = Object(_ImageProcessor__WEBPACK_IMPORTED_MODULE_4__["default"])(submittedImage);
    apiCall(result[1]);
    setImageURL(result[0].toDataURL("image/png"));
  }; // Query our AI model


  var apiCall = function apiCall(image_array) {
    var model_url = 'http://54.197.197.40/v1/models/digit_model:predict';
    var xhr = new XMLHttpRequest(); // get a callback when the server responds

    xhr.addEventListener('load', function () {
      // Get results and process
      var reponse = JSON.parse(xhr.responseText);
      processResult(reponse);
    });
    xhr.open('POST', model_url);
    xhr.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
      "instances": image_array
    }));
  };

  var processResult = function processResult(reponse) {
    var unsorted_array = reponse["predictions"][0];
    var sorted_array = Array(unsorted_array.length); // Get all results above 0.00%

    for (var i = 0; i < unsorted_array.length; i++) {
      var index = unsorted_array.indexOf(Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(unsorted_array)));
      var confidence = (unsorted_array[index] * 100).toFixed(2);

      if (confidence > 0) {
        sorted_array[i] = [index, confidence];
        unsorted_array[index] = 0;
      }
    }

    setResultArray(sorted_array);
  };

  var result_graph = function result_graph(resultArray) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, resultArray.map(function (result, index) {
      return __jsx("p", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Number: ", result[0], " ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), "Confidence: ", result[1], "%");
    }));
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(react_signature_canvas__WEBPACK_IMPORTED_MODULE_3___default.a, {
    ref: sigCanvas,
    penColor: "black",
    velocityFilterWeight: "0",
    maxWidth: brushSize,
    dotSize: "0",
    canvasProps: {
      width: canvasWidth,
      height: canvasWidth,
      className: 'signatureCanvas'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("div", {
    className: "button-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("button", {
    className: "button",
    onClick: clearPad,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "clear"), __jsx("button", {
    className: "button",
    onClick: submitPad,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "submit")), resultArray ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Your result: "), __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, result_graph(resultArray))) : null, imageURL ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Processed Digit"), __jsx("img", {
    src: imageURL,
    alt: "my signature",
    style: {
      display: "block",
      margin: "0 auto",
      border: "1px solid black",
      width: "150px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })) : null);
}

/***/ }),

/***/ "./pages/projects/components/ImageProcessor.js":
/*!*****************************************************!*\
  !*** ./pages/projects/components/ImageProcessor.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ImageProcessor = function ImageProcessor(img) {
  // Scale image
  var scale = Math.min(20 / img.width, 20 / img.height);
  var canvas = document.createElement('canvas');
  canvas.width = 28;
  canvas.height = 28;
  var cctx = canvas.getContext('2d');
  cctx.imageSmoothingEnabled = true;
  var scaled_width = img.width * scale;
  var scaled_height = img.height * scale;
  var dx = (28 - scaled_width) / 2;
  var dy = (28 - scaled_height) / 2;
  cctx.drawImage(img, dx, dy, scaled_width, scaled_height); // Turn into 2D array of 28x28

  var image_array = Array(28);
  var column_count = 0;
  var row_count = 0;
  var column_array = Array(28); // invert colors, make black and white and remove alpha

  var imgData = cctx.getImageData(0, 0, canvas.width, canvas.height);
  var i;

  for (i = 0; i < imgData.data.length; i += 4) {
    // Fill array
    if (column_count >= 28) {
      column_count = 0;
      image_array[row_count] = column_array; // Reset column_array

      column_array = Array(28);
      row_count++;
    }

    if (imgData.data[i + 3] > 0) {
      // Used to visualize image for debugging, can be discarded
      imgData.data[i] = 255;
      imgData.data[i + 1] = 255;
      imgData.data[i + 2] = 255; // Convert to either 0 or 1

      column_array[column_count] = 1;
    } else {
      // Used to visualize image for debugging, can be discarded
      imgData.data[i] = 0;
      imgData.data[i + 1] = 0;
      imgData.data[i + 2] = 0; // Convert to either 0 or 1

      column_array[column_count] = 0;
    }

    imgData.data[i + 3] = 255;
    column_count++;
  } // Lazy add final row empty


  var final_row = Array(28);

  for (var i = 0; i < final_row.length; i++) {
    final_row[i] = 0;
  }

  image_array[27] = final_row; // Print out array

  console.log(image_array);
  cctx.putImageData(imgData, 0, 0);
  var newImage = canvas;
  return [newImage, image_array];
};

/* harmony default export */ __webpack_exports__["default"] = (ImageProcessor);

/***/ }),

/***/ "./pages/projects/digit_recognizer.js":
/*!********************************************!*\
  !*** ./pages/projects/digit_recognizer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_DrawingCanvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/DrawingCanvas */ "./pages/projects/components/DrawingCanvas.js");





var _jsxFileName = "/Users/kietho/Repos/stuffbykiet.com/pages/projects/digit_recognizer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var DigitRecognizer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DigitRecognizer, _React$Component);

  function DigitRecognizer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DigitRecognizer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DigitRecognizer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DigitRecognizer, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, "Draw any digit from 0-9"), __jsx(_components_DrawingCanvas__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }), __jsx("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "\n          .App{\n            text-align: center;\n          }\n          .button-wrapper{\n            padding-top: 5vh;\n          }\n          .signatureCanvas{\n            border: solid gray;\n          }\n          "));
    }
  }]);

  return DigitRecognizer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DigitRecognizer);

/***/ })

})
//# sourceMappingURL=digit_recognizer.js.664f6ecf28bf0fce26ab.hot-update.js.map