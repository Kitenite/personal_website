webpackHotUpdate("static/development/pages/projects/digit_recognizer.js",{

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_signature_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-signature-canvas */ "./node_modules/react-signature-canvas/build/index.js");
/* harmony import */ var react_signature_canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_signature_canvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Button */ "./components/Button.js");




var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



function DrawingCanvas() {
  // useStates
  var sigCanvas = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])({});

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      imageURL = _useState[0],
      setImageURL = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      resultArray = _useState2[0],
      setResultArray = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      height = _useState3[0],
      setHeight = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      width = _useState4[0],
      setWidth = _useState4[1]; // Canvas Configuration


  if (true) {
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
      return setHeight(document.children[0].clientHeight);
    }, [document.children[0].clientHeight]);
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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
    var result = processImage(submittedImage);
    apiCall(result[1]);
    setImageURL(result[0].toDataURL("image/png"));
  }; // Query our AI model


  var apiCall = function apiCall(image_array) {
    var model_url = '/api/v1/models/digit_model:predict';
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false; // get a callback when the server responds

    xhr.addEventListener('load', function () {
      // Get results and process
      if (xhr.responseText) {
        var reponse = JSON.parse(xhr.responseText);
        processResult(reponse);
      }
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

  var processImage = function processImage(img) {
    // Scale image
    var canvas = document.createElement('canvas');
    var scale = Math.min(20 / img.width, 20 / img.height);
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
    // console.log(image_array);

    cctx.putImageData(imgData, 0, 0);
    var newImage = canvas;
    return [newImage, image_array];
  };

  var result_graph = function result_graph(resultArray) {
    return __jsx("div", null, resultArray.map(function (result, index) {
      return __jsx("p", {
        key: index
      }, "Number: ", result[0], " ", __jsx("br", null), "Confidence: ", result[1], "%");
    }));
  };

  return __jsx("div", null, __jsx(react_signature_canvas__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
    className: "jsx-206385541" + " " + "button-wrapper"
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: clearPad,
    isClear: "true"
  }, "clear"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: submitPad
  }, "submit"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "206385541"
  }, ".jsx-206385541{padding-left:5vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL3BhZ2VzL3Byb2plY3RzL2NvbXBvbmVudHMvRHJhd2luZ0NhbnZhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSm9CLEFBR1UsaUJBQUMiLCJmaWxlIjoiL1VzZXJzL2tpZXRoby9SZXBvcy9zdHVmZmJ5a2lldC5jb20vcGFnZXMvcHJvamVjdHMvY29tcG9uZW50cy9EcmF3aW5nQ2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWduYXR1cmVDYW52YXMgZnJvbSAncmVhY3Qtc2lnbmF0dXJlLWNhbnZhcydcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyYXdpbmdDYW52YXMoKXtcbiAgLy8gdXNlU3RhdGVzXG4gIGNvbnN0IHNpZ0NhbnZhcyA9IHVzZVJlZih7fSk7XG4gIGNvbnN0IFtpbWFnZVVSTCwgc2V0SW1hZ2VVUkxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtyZXN1bHRBcnJheSwgc2V0UmVzdWx0QXJyYXldID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKG51bGwpXG4gIC8vIENhbnZhcyBDb25maWd1cmF0aW9uXG5cbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHVzZUVmZmVjdCgoKSA9PiBzZXRIZWlnaHQoZG9jdW1lbnQuY2hpbGRyZW5bMF0uY2xpZW50SGVpZ2h0KSwgW2RvY3VtZW50LmNoaWxkcmVuWzBdLmNsaWVudEhlaWdodF0pXG4gICAgdXNlRWZmZWN0KCgpID0+IHNldFdpZHRoKGRvY3VtZW50LmNoaWxkcmVuWzBdLmNsaWVudFdpZHRoKSwgW2RvY3VtZW50LmNoaWxkcmVuWzBdLmNsaWVudFdpZHRoXSlcbiAgfVxuICBjb25zdCBjYW52YXNXaWR0aCA9ICBNYXRoLm1pbihoZWlnaHQsIHdpZHRoKS8yO1xuICBjb25zdCBicnVzaFNpemUgPSAoY2FudmFzV2lkdGgvMzApLnRvU3RyaW5nKDEwKTtcblxuICAvLyBGdW5jdGlvbnNcbiAgY29uc3QgY2xlYXJQYWQgPSAoKSA9PiB7XG4gICAgc2lnQ2FudmFzLmN1cnJlbnQuY2xlYXIoKTtcbiAgICBzZXRJbWFnZVVSTChudWxsKTtcbiAgICBzZXRSZXN1bHRBcnJheShudWxsKTtcbiAgfTtcbiAgY29uc3Qgc3VibWl0UGFkID0gKCkgPT4ge1xuICAgIGxldCBzdWJtaXR0ZWRJbWFnZSA9IHNpZ0NhbnZhcy5jdXJyZW50LmdldFRyaW1tZWRDYW52YXMoKTtcbiAgICBsZXQgcmVzdWx0ID0gcHJvY2Vzc0ltYWdlKHN1Ym1pdHRlZEltYWdlKVxuICAgIGFwaUNhbGwocmVzdWx0WzFdKTtcbiAgICBzZXRJbWFnZVVSTChyZXN1bHRbMF0udG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpKTtcbiAgfTtcblxuICAvLyBRdWVyeSBvdXIgQUkgbW9kZWxcbiAgY29uc3QgYXBpQ2FsbCA9IChpbWFnZV9hcnJheSkgPT4ge1xuICAgIGNvbnN0IG1vZGVsX3VybCA9ICcvYXBpL3YxL21vZGVscy9kaWdpdF9tb2RlbDpwcmVkaWN0JztcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLndpdGhDcmVkZW50aWFscyA9IGZhbHNlO1xuICAgIC8vIGdldCBhIGNhbGxiYWNrIHdoZW4gdGhlIHNlcnZlciByZXNwb25kc1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgLy8gR2V0IHJlc3VsdHMgYW5kIHByb2Nlc3NcbiAgICAgIGlmICh4aHIucmVzcG9uc2VUZXh0KXtcbiAgICAgICAgbGV0IHJlcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICBwcm9jZXNzUmVzdWx0KHJlcG9uc2UpXG4gICAgICB9XG4gICAgfSk7XG4gICAgeGhyLm9wZW4oJ1BPU1QnLCBtb2RlbF91cmwpO1xuICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHsgXCJpbnN0YW5jZXNcIjogaW1hZ2VfYXJyYXkgfSkpO1xuICB9XG5cbiAgY29uc3QgcHJvY2Vzc1Jlc3VsdCA9IChyZXBvbnNlKSA9PiB7XG4gICAgbGV0IHVuc29ydGVkX2FycmF5ID0gcmVwb25zZVtcInByZWRpY3Rpb25zXCJdWzBdO1xuICAgIGxldCBzb3J0ZWRfYXJyYXkgPSBBcnJheSh1bnNvcnRlZF9hcnJheS5sZW5ndGgpO1xuICAgIC8vIEdldCBhbGwgcmVzdWx0cyBhYm92ZSAwLjAwJVxuICAgIGZvciAodmFyIGkgPSAwOyBpPCB1bnNvcnRlZF9hcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgaW5kZXggPSB1bnNvcnRlZF9hcnJheS5pbmRleE9mKE1hdGgubWF4KC4uLnVuc29ydGVkX2FycmF5KSk7XG4gICAgICBsZXQgY29uZmlkZW5jZSA9ICh1bnNvcnRlZF9hcnJheVtpbmRleF0qMTAwKS50b0ZpeGVkKDIpXG4gICAgICBpZiAoY29uZmlkZW5jZSA+IDApe1xuICAgICAgICBzb3J0ZWRfYXJyYXlbaV0gPSBbaW5kZXgsIGNvbmZpZGVuY2VdO1xuICAgICAgICB1bnNvcnRlZF9hcnJheVtpbmRleF0gPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRSZXN1bHRBcnJheShzb3J0ZWRfYXJyYXkpO1xuICB9XG4gIGNvbnN0IHByb2Nlc3NJbWFnZSA9IChpbWcpID0+IHtcbiAgICAvLyBTY2FsZSBpbWFnZVxuICAgIGNvbnN0IGNhbnZhcyA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbigyMC9pbWcud2lkdGgsIDIwL2ltZy5oZWlnaHQpO1xuICAgIGNhbnZhcy53aWR0aCA9IDI4O1xuICAgIGNhbnZhcy5oZWlnaHQgPSAyODtcbiAgICBjb25zdCBjY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY2N0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNjYWxlZF93aWR0aCA9IGltZy53aWR0aCpzY2FsZTtcbiAgICBjb25zdCBzY2FsZWRfaGVpZ2h0ID0gaW1nLmhlaWdodCpzY2FsZTtcbiAgICBjb25zdCBkeCA9ICgyOCAtIHNjYWxlZF93aWR0aCkvMjtcbiAgICBjb25zdCBkeSA9ICgyOCAtIHNjYWxlZF9oZWlnaHQpLzI7XG4gICAgY2N0eC5kcmF3SW1hZ2UoaW1nLCBkeCwgZHksIHNjYWxlZF93aWR0aCwgc2NhbGVkX2hlaWdodCk7XG5cblxuICAgIC8vIFR1cm4gaW50byAyRCBhcnJheSBvZiAyOHgyOFxuICAgIGNvbnN0IGltYWdlX2FycmF5ID0gQXJyYXkoMjgpO1xuICAgIHZhciBjb2x1bW5fY291bnQgPSAwXG4gICAgdmFyIHJvd19jb3VudCA9IDBcbiAgICB2YXIgY29sdW1uX2FycmF5ID0gQXJyYXkoMjgpO1xuXG4gICAgLy8gaW52ZXJ0IGNvbG9ycywgbWFrZSBibGFjayBhbmQgd2hpdGUgYW5kIHJlbW92ZSBhbHBoYVxuICAgIHZhciBpbWdEYXRhID0gY2N0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgaW1nRGF0YS5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG5cbiAgICAgIC8vIEZpbGwgYXJyYXlcbiAgICAgIGlmIChjb2x1bW5fY291bnQgPj0gMjgpe1xuICAgICAgICBjb2x1bW5fY291bnQgPSAwO1xuICAgICAgICBpbWFnZV9hcnJheVtyb3dfY291bnRdID0gY29sdW1uX2FycmF5O1xuICAgICAgICAvLyBSZXNldCBjb2x1bW5fYXJyYXlcbiAgICAgICAgY29sdW1uX2FycmF5ID0gQXJyYXkoMjgpO1xuICAgICAgICByb3dfY291bnQrKztcbiAgICAgIH1cblxuICAgICAgaWYgKGltZ0RhdGEuZGF0YVtpICsgM10gPiAwKXtcbiAgICAgICAgLy8gVXNlZCB0byB2aXN1YWxpemUgaW1hZ2UgZm9yIGRlYnVnZ2luZywgY2FuIGJlIGRpc2NhcmRlZFxuICAgICAgICBpbWdEYXRhLmRhdGFbaV0gPSAyNTU7XG4gICAgICAgIGltZ0RhdGEuZGF0YVtpKzFdID0gMjU1O1xuICAgICAgICBpbWdEYXRhLmRhdGFbaSsyXSA9IDI1NTtcbiAgICAgICAgLy8gQ29udmVydCB0byBlaXRoZXIgMCBvciAxXG4gICAgICAgIGNvbHVtbl9hcnJheVtjb2x1bW5fY291bnRdID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZWQgdG8gdmlzdWFsaXplIGltYWdlIGZvciBkZWJ1Z2dpbmcsIGNhbiBiZSBkaXNjYXJkZWRcbiAgICAgICAgaW1nRGF0YS5kYXRhW2ldID0gMDtcbiAgICAgICAgaW1nRGF0YS5kYXRhW2krMV0gPSAwO1xuICAgICAgICBpbWdEYXRhLmRhdGFbaSsyXSA9IDA7XG4gICAgICAgIC8vIENvbnZlcnQgdG8gZWl0aGVyIDAgb3IgMVxuICAgICAgICBjb2x1bW5fYXJyYXlbY29sdW1uX2NvdW50XSA9IDA7XG4gICAgICB9XG4gICAgICBpbWdEYXRhLmRhdGFbaSArIDNdID0gMjU1O1xuICAgICAgY29sdW1uX2NvdW50Kys7XG4gICAgfVxuXG4gICAgLy8gTGF6eSBhZGQgZmluYWwgcm93IGVtcHR5XG4gICAgdmFyIGZpbmFsX3JvdyA9IEFycmF5KDI4KTtcbiAgICBmb3IgKHZhciBpID0wOyBpPCBmaW5hbF9yb3cubGVuZ3RoOyBpKyspe1xuICAgICAgZmluYWxfcm93W2ldID0gMDtcbiAgICB9XG4gICAgaW1hZ2VfYXJyYXlbMjddID0gZmluYWxfcm93O1xuXG4gICAgLy8gUHJpbnQgb3V0IGFycmF5XG4gICAgLy8gY29uc29sZS5sb2coaW1hZ2VfYXJyYXkpO1xuXG4gICAgY2N0eC5wdXRJbWFnZURhdGEoaW1nRGF0YSwgMCwgMCk7XG4gICAgbGV0IG5ld0ltYWdlID0gY2FudmFzO1xuICAgIHJldHVybiBbbmV3SW1hZ2UsIGltYWdlX2FycmF5XTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdF9ncmFwaCA9IChyZXN1bHRBcnJheSkgPT4ge1xuICAgIHJldHVybig8ZGl2PlxuICAgICAge3Jlc3VsdEFycmF5Lm1hcCgocmVzdWx0LCBpbmRleCkgPT4gKFxuICAgICAgICA8cCBrZXk9e2luZGV4fT5OdW1iZXI6IHtyZXN1bHRbMF19IDxici8+Q29uZmlkZW5jZToge3Jlc3VsdFsxXX0lPC9wPlxuICAgICkpfVxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPFNpZ25hdHVyZUNhbnZhc1xuICAgICAgICAgICAgcmVmID0ge3NpZ0NhbnZhc31cbiAgICAgICAgICAgIHBlbkNvbG9yPSdibGFjaydcbiAgICAgICAgICAgIHZlbG9jaXR5RmlsdGVyV2VpZ2h0PScwJ1xuICAgICAgICAgICAgbWF4V2lkdGg9IHticnVzaFNpemV9XG4gICAgICAgICAgICBkb3RTaXplPScwJ1xuICAgICAgICAgICAgY2FudmFzUHJvcHM9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbnZhc1dpZHRoLFxuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbnZhc1dpZHRoLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzaWduYXR1cmVDYW52YXMnXG4gICAgICAgICAgICB9fSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NsZWFyUGFkfSBpc0NsZWFyPVwidHJ1ZVwiPmNsZWFyPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17c3VibWl0UGFkfT5zdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHBhZGRpbmctbGVmdDo1dmhcbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtyZXN1bHRBcnJheSA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8YT5Zb3VyIHJlc3VsdDogPC9hPlxuICAgICAgICAgIDxhPntyZXN1bHRfZ3JhcGgocmVzdWx0QXJyYXkpfTwvYT5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cblxuICAgICAge2ltYWdlVVJMID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxhPlByb2Nlc3NlZCBEaWdpdDwvYT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2ltYWdlVVJMfVxuICAgICAgICAgICAgYWx0PVwibXkgc2lnbmF0dXJlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjE1MHB4XCJcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/kietho/Repos/stuffbykiet.com/pages/projects/components/DrawingCanvas.js */")), resultArray ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("a", null, "Your result: "), __jsx("a", null, result_graph(resultArray))) : null, imageURL ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("a", null, "Processed Digit"), __jsx("img", {
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

/***/ })

})
//# sourceMappingURL=digit_recognizer.js.471571fc5c410e3a5249.hot-update.js.map