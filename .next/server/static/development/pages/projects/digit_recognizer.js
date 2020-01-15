module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./pages/projects/components/DrawingCanvas.js":
/*!****************************************************!*\
  !*** ./pages/projects/components/DrawingCanvas.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DrawingCanvas; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_signature_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-signature-canvas */ "react-signature-canvas");
/* harmony import */ var react_signature_canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_signature_canvas__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function DrawingCanvas() {
  // useStates
  const sigCanvas = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({});
  const {
    0: imageURL,
    1: setImageURL
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: resultArray,
    1: setResultArray
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: height,
    1: setHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: width,
    1: setWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null); // Canvas Configuration

  if (false) {}

  const canvasWidth = Math.min(height, width) / 2;
  const brushSize = (canvasWidth / 30).toString(10); // Functions

  const clearPad = () => {
    sigCanvas.current.clear();
    setImageURL(null);
    setResultArray(null);
  };

  const submitPad = () => {
    let submittedImage = sigCanvas.current.getTrimmedCanvas();
    let result = processImage(submittedImage);
    apiCall(result[1]);
    setImageURL(result[0].toDataURL("image/png"));
  }; // Query our AI model


  const apiCall = image_array => {
    const model_url = '/api/v1/models/digit_model:predict';
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false; // get a callback when the server responds

    xhr.addEventListener('load', () => {
      // Get results and process
      if (xhr.responseText) {
        let reponse = JSON.parse(xhr.responseText);
        processResult(reponse);
      }
    });
    xhr.open('POST', model_url);
    xhr.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      "instances": image_array
    }));
  };

  const processResult = reponse => {
    let unsorted_array = reponse["predictions"][0];
    let sorted_array = Array(unsorted_array.length); // Get all results above 0.00%

    for (var i = 0; i < unsorted_array.length; i++) {
      let index = unsorted_array.indexOf(Math.max(...unsorted_array));
      let confidence = (unsorted_array[index] * 100).toFixed(2);

      if (confidence > 0) {
        sorted_array[i] = [index, confidence];
        unsorted_array[index] = 0;
      }
    }

    setResultArray(sorted_array);
  };

  const result_graph = resultArray => {
    return __jsx("div", null, resultArray.map((result, index) => __jsx("p", {
      key: index
    }, "Number: ", result[0], " ", __jsx("br", null), "Confidence: ", result[1], "%")));
  };

  const processImage = img => {
    // Scale image
    const canvas = document.createElement('canvas');
    const scale = Math.min(20 / img.width, 20 / img.height);
    canvas.width = 28;
    canvas.height = 28;
    const cctx = canvas.getContext('2d');
    cctx.imageSmoothingEnabled = true;
    const scaled_width = img.width * scale;
    const scaled_height = img.height * scale;
    const dx = (28 - scaled_width) / 2;
    const dy = (28 - scaled_height) / 2;
    cctx.drawImage(img, dx, dy, scaled_width, scaled_height); // Turn into 2D array of 28x28

    const image_array = Array(28);
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
    // console.log(image_array);

    cctx.putImageData(imgData, 0, 0);
    let newImage = canvas;
    return [newImage, image_array];
  };

  return __jsx("div", null, __jsx(react_signature_canvas__WEBPACK_IMPORTED_MODULE_2___default.a, {
    ref: sigCanvas,
    penColor: "black",
    velocityFilterWeight: "0",
    maxWidth: brushSize,
    dotSize: "0",
    canvasProps: {
      width: canvasWidth,
      height: canvasWidth,
      className: 'signatureCanvas'
    }
  }), __jsx("div", {
    className: "button-wrapper"
  }, __jsx("button", {
    className: "button",
    onClick: clearPad
  }, "clear"), __jsx("button", {
    className: "button",
    onClick: submitPad
  }, "submit")), resultArray ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("a", null, "Your result: "), __jsx("a", null, result_graph(resultArray))) : null, imageURL ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("a", null, "Processed Digit"), __jsx("img", {
    src: imageURL,
    alt: "my signature",
    style: {
      display: "block",
      margin: "0 auto",
      border: "1px solid black",
      width: "150px"
    }
  })) : null);
}

/***/ }),

/***/ "./pages/projects/digit_recognizer.js":
/*!********************************************!*\
  !*** ./pages/projects/digit_recognizer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DrawingCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DrawingCanvas */ "./pages/projects/components/DrawingCanvas.js");
var _jsxFileName = "/Users/kietho/Repos/stuffbykiet.com/pages/projects/digit_recognizer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class DigitRecognizer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
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
    }, "Draw any digit from 0-9"), __jsx(_components_DrawingCanvas__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    }, `
          .App{
            text-align: center;
          }
          .button-wrapper{
            padding-top: 5vh;
          }
          .signatureCanvas{
            border: solid gray;
          }
          `));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DigitRecognizer);

/***/ }),

/***/ 3:
/*!**************************************************!*\
  !*** multi ./pages/projects/digit_recognizer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kietho/Repos/stuffbykiet.com/pages/projects/digit_recognizer.js */"./pages/projects/digit_recognizer.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-signature-canvas":
/*!*****************************************!*\
  !*** external "react-signature-canvas" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-signature-canvas");

/***/ })

/******/ });
//# sourceMappingURL=digit_recognizer.js.map