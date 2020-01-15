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
    className: "jsx-2389181541" + " " + "button-wrapper"
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: clearPad,
    isClear: "true"
  }, "clear"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: submitPad
  }, "submit"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2389181541"
  }, ".jsx-2389181541{padding:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWV0aG8vUmVwb3Mvc3R1ZmZieWtpZXQuY29tL3BhZ2VzL3Byb2plY3RzL2NvbXBvbmVudHMvRHJhd2luZ0NhbnZhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSm9CLEFBR1UsY0FBQyIsImZpbGUiOiIvVXNlcnMva2lldGhvL1JlcG9zL3N0dWZmYnlraWV0LmNvbS9wYWdlcy9wcm9qZWN0cy9jb21wb25lbnRzL0RyYXdpbmdDYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZ25hdHVyZUNhbnZhcyBmcm9tICdyZWFjdC1zaWduYXR1cmUtY2FudmFzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvbic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJhd2luZ0NhbnZhcygpe1xuICAvLyB1c2VTdGF0ZXNcbiAgY29uc3Qgc2lnQ2FudmFzID0gdXNlUmVmKHt9KTtcbiAgY29uc3QgW2ltYWdlVVJMLCBzZXRJbWFnZVVSTF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Jlc3VsdEFycmF5LCBzZXRSZXN1bHRBcnJheV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUobnVsbClcbiAgLy8gQ2FudmFzIENvbmZpZ3VyYXRpb25cblxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHNldEhlaWdodChkb2N1bWVudC5jaGlsZHJlblswXS5jbGllbnRIZWlnaHQpLCBbZG9jdW1lbnQuY2hpbGRyZW5bMF0uY2xpZW50SGVpZ2h0XSlcbiAgICB1c2VFZmZlY3QoKCkgPT4gc2V0V2lkdGgoZG9jdW1lbnQuY2hpbGRyZW5bMF0uY2xpZW50V2lkdGgpLCBbZG9jdW1lbnQuY2hpbGRyZW5bMF0uY2xpZW50V2lkdGhdKVxuICB9XG4gIGNvbnN0IGNhbnZhc1dpZHRoID0gIE1hdGgubWluKGhlaWdodCwgd2lkdGgpLzI7XG4gIGNvbnN0IGJydXNoU2l6ZSA9IChjYW52YXNXaWR0aC8zMCkudG9TdHJpbmcoMTApO1xuXG4gIC8vIEZ1bmN0aW9uc1xuICBjb25zdCBjbGVhclBhZCA9ICgpID0+IHtcbiAgICBzaWdDYW52YXMuY3VycmVudC5jbGVhcigpO1xuICAgIHNldEltYWdlVVJMKG51bGwpO1xuICAgIHNldFJlc3VsdEFycmF5KG51bGwpO1xuICB9O1xuICBjb25zdCBzdWJtaXRQYWQgPSAoKSA9PiB7XG4gICAgbGV0IHN1Ym1pdHRlZEltYWdlID0gc2lnQ2FudmFzLmN1cnJlbnQuZ2V0VHJpbW1lZENhbnZhcygpO1xuICAgIGxldCByZXN1bHQgPSBwcm9jZXNzSW1hZ2Uoc3VibWl0dGVkSW1hZ2UpXG4gICAgYXBpQ2FsbChyZXN1bHRbMV0pO1xuICAgIHNldEltYWdlVVJMKHJlc3VsdFswXS50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIikpO1xuICB9O1xuXG4gIC8vIFF1ZXJ5IG91ciBBSSBtb2RlbFxuICBjb25zdCBhcGlDYWxsID0gKGltYWdlX2FycmF5KSA9PiB7XG4gICAgY29uc3QgbW9kZWxfdXJsID0gJy9hcGkvdjEvbW9kZWxzL2RpZ2l0X21vZGVsOnByZWRpY3QnO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XG4gICAgLy8gZ2V0IGEgY2FsbGJhY2sgd2hlbiB0aGUgc2VydmVyIHJlc3BvbmRzXG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAvLyBHZXQgcmVzdWx0cyBhbmQgcHJvY2Vzc1xuICAgICAgaWYgKHhoci5yZXNwb25zZVRleHQpe1xuICAgICAgICBsZXQgcmVwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIHByb2Nlc3NSZXN1bHQocmVwb25zZSlcbiAgICAgIH1cbiAgICB9KTtcbiAgICB4aHIub3BlbignUE9TVCcsIG1vZGVsX3VybCk7XG4gICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBcImluc3RhbmNlc1wiOiBpbWFnZV9hcnJheSB9KSk7XG4gIH1cblxuICBjb25zdCBwcm9jZXNzUmVzdWx0ID0gKHJlcG9uc2UpID0+IHtcbiAgICBsZXQgdW5zb3J0ZWRfYXJyYXkgPSByZXBvbnNlW1wicHJlZGljdGlvbnNcIl1bMF07XG4gICAgbGV0IHNvcnRlZF9hcnJheSA9IEFycmF5KHVuc29ydGVkX2FycmF5Lmxlbmd0aCk7XG4gICAgLy8gR2V0IGFsbCByZXN1bHRzIGFib3ZlIDAuMDAlXG4gICAgZm9yICh2YXIgaSA9IDA7IGk8IHVuc29ydGVkX2FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCBpbmRleCA9IHVuc29ydGVkX2FycmF5LmluZGV4T2YoTWF0aC5tYXgoLi4udW5zb3J0ZWRfYXJyYXkpKTtcbiAgICAgIGxldCBjb25maWRlbmNlID0gKHVuc29ydGVkX2FycmF5W2luZGV4XSoxMDApLnRvRml4ZWQoMilcbiAgICAgIGlmIChjb25maWRlbmNlID4gMCl7XG4gICAgICAgIHNvcnRlZF9hcnJheVtpXSA9IFtpbmRleCwgY29uZmlkZW5jZV07XG4gICAgICAgIHVuc29ydGVkX2FycmF5W2luZGV4XSA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHNldFJlc3VsdEFycmF5KHNvcnRlZF9hcnJheSk7XG4gIH1cbiAgY29uc3QgcHJvY2Vzc0ltYWdlID0gKGltZykgPT4ge1xuICAgIC8vIFNjYWxlIGltYWdlXG4gICAgY29uc3QgY2FudmFzID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjb25zdCBzY2FsZSA9IE1hdGgubWluKDIwL2ltZy53aWR0aCwgMjAvaW1nLmhlaWdodCk7XG4gICAgY2FudmFzLndpZHRoID0gMjg7XG4gICAgY2FudmFzLmhlaWdodCA9IDI4O1xuICAgIGNvbnN0IGNjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWU7XG4gICAgY29uc3Qgc2NhbGVkX3dpZHRoID0gaW1nLndpZHRoKnNjYWxlO1xuICAgIGNvbnN0IHNjYWxlZF9oZWlnaHQgPSBpbWcuaGVpZ2h0KnNjYWxlO1xuICAgIGNvbnN0IGR4ID0gKDI4IC0gc2NhbGVkX3dpZHRoKS8yO1xuICAgIGNvbnN0IGR5ID0gKDI4IC0gc2NhbGVkX2hlaWdodCkvMjtcbiAgICBjY3R4LmRyYXdJbWFnZShpbWcsIGR4LCBkeSwgc2NhbGVkX3dpZHRoLCBzY2FsZWRfaGVpZ2h0KTtcblxuXG4gICAgLy8gVHVybiBpbnRvIDJEIGFycmF5IG9mIDI4eDI4XG4gICAgY29uc3QgaW1hZ2VfYXJyYXkgPSBBcnJheSgyOCk7XG4gICAgdmFyIGNvbHVtbl9jb3VudCA9IDBcbiAgICB2YXIgcm93X2NvdW50ID0gMFxuICAgIHZhciBjb2x1bW5fYXJyYXkgPSBBcnJheSgyOCk7XG5cbiAgICAvLyBpbnZlcnQgY29sb3JzLCBtYWtlIGJsYWNrIGFuZCB3aGl0ZSBhbmQgcmVtb3ZlIGFscGhhXG4gICAgdmFyIGltZ0RhdGEgPSBjY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBpbWdEYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcblxuICAgICAgLy8gRmlsbCBhcnJheVxuICAgICAgaWYgKGNvbHVtbl9jb3VudCA+PSAyOCl7XG4gICAgICAgIGNvbHVtbl9jb3VudCA9IDA7XG4gICAgICAgIGltYWdlX2FycmF5W3Jvd19jb3VudF0gPSBjb2x1bW5fYXJyYXk7XG4gICAgICAgIC8vIFJlc2V0IGNvbHVtbl9hcnJheVxuICAgICAgICBjb2x1bW5fYXJyYXkgPSBBcnJheSgyOCk7XG4gICAgICAgIHJvd19jb3VudCsrO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW1nRGF0YS5kYXRhW2kgKyAzXSA+IDApe1xuICAgICAgICAvLyBVc2VkIHRvIHZpc3VhbGl6ZSBpbWFnZSBmb3IgZGVidWdnaW5nLCBjYW4gYmUgZGlzY2FyZGVkXG4gICAgICAgIGltZ0RhdGEuZGF0YVtpXSA9IDI1NTtcbiAgICAgICAgaW1nRGF0YS5kYXRhW2krMV0gPSAyNTU7XG4gICAgICAgIGltZ0RhdGEuZGF0YVtpKzJdID0gMjU1O1xuICAgICAgICAvLyBDb252ZXJ0IHRvIGVpdGhlciAwIG9yIDFcbiAgICAgICAgY29sdW1uX2FycmF5W2NvbHVtbl9jb3VudF0gPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXNlZCB0byB2aXN1YWxpemUgaW1hZ2UgZm9yIGRlYnVnZ2luZywgY2FuIGJlIGRpc2NhcmRlZFxuICAgICAgICBpbWdEYXRhLmRhdGFbaV0gPSAwO1xuICAgICAgICBpbWdEYXRhLmRhdGFbaSsxXSA9IDA7XG4gICAgICAgIGltZ0RhdGEuZGF0YVtpKzJdID0gMDtcbiAgICAgICAgLy8gQ29udmVydCB0byBlaXRoZXIgMCBvciAxXG4gICAgICAgIGNvbHVtbl9hcnJheVtjb2x1bW5fY291bnRdID0gMDtcbiAgICAgIH1cbiAgICAgIGltZ0RhdGEuZGF0YVtpICsgM10gPSAyNTU7XG4gICAgICBjb2x1bW5fY291bnQrKztcbiAgICB9XG5cbiAgICAvLyBMYXp5IGFkZCBmaW5hbCByb3cgZW1wdHlcbiAgICB2YXIgZmluYWxfcm93ID0gQXJyYXkoMjgpO1xuICAgIGZvciAodmFyIGkgPTA7IGk8IGZpbmFsX3Jvdy5sZW5ndGg7IGkrKyl7XG4gICAgICBmaW5hbF9yb3dbaV0gPSAwO1xuICAgIH1cbiAgICBpbWFnZV9hcnJheVsyN10gPSBmaW5hbF9yb3c7XG5cbiAgICAvLyBQcmludCBvdXQgYXJyYXlcbiAgICAvLyBjb25zb2xlLmxvZyhpbWFnZV9hcnJheSk7XG5cbiAgICBjY3R4LnB1dEltYWdlRGF0YShpbWdEYXRhLCAwLCAwKTtcbiAgICBsZXQgbmV3SW1hZ2UgPSBjYW52YXM7XG4gICAgcmV0dXJuIFtuZXdJbWFnZSwgaW1hZ2VfYXJyYXldO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0X2dyYXBoID0gKHJlc3VsdEFycmF5KSA9PiB7XG4gICAgcmV0dXJuKDxkaXY+XG4gICAgICB7cmVzdWx0QXJyYXkubWFwKChyZXN1bHQsIGluZGV4KSA9PiAoXG4gICAgICAgIDxwIGtleT17aW5kZXh9Pk51bWJlcjoge3Jlc3VsdFswXX0gPGJyLz5Db25maWRlbmNlOiB7cmVzdWx0WzFdfSU8L3A+XG4gICAgKSl9XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8U2lnbmF0dXJlQ2FudmFzXG4gICAgICAgICAgICByZWYgPSB7c2lnQ2FudmFzfVxuICAgICAgICAgICAgcGVuQ29sb3I9J2JsYWNrJ1xuICAgICAgICAgICAgdmVsb2NpdHlGaWx0ZXJXZWlnaHQ9JzAnXG4gICAgICAgICAgICBtYXhXaWR0aD0ge2JydXNoU2l6ZX1cbiAgICAgICAgICAgIGRvdFNpemU9JzAnXG4gICAgICAgICAgICBjYW52YXNQcm9wcz17e1xuICAgICAgICAgICAgICB3aWR0aDogY2FudmFzV2lkdGgsXG4gICAgICAgICAgICAgIGhlaWdodDogY2FudmFzV2lkdGgsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NpZ25hdHVyZUNhbnZhcydcbiAgICAgICAgICAgIH19IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi13cmFwcGVyXCI+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17Y2xlYXJQYWR9IGlzQ2xlYXI9XCJ0cnVlXCI+Y2xlYXI8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdWJtaXRQYWR9PnN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgcGFkZGluZzoxMDB2aFxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAge3Jlc3VsdEFycmF5ID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxhPllvdXIgcmVzdWx0OiA8L2E+XG4gICAgICAgICAgPGE+e3Jlc3VsdF9ncmFwaChyZXN1bHRBcnJheSl9PC9hPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuXG4gICAgICB7aW1hZ2VVUkwgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGE+UHJvY2Vzc2VkIERpZ2l0PC9hPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17aW1hZ2VVUkx9XG4gICAgICAgICAgICBhbHQ9XCJteSBzaWduYXR1cmVcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTUwcHhcIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/kietho/Repos/stuffbykiet.com/pages/projects/components/DrawingCanvas.js */")), resultArray ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("a", null, "Your result: "), __jsx("a", null, result_graph(resultArray))) : null, imageURL ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("a", null, "Processed Digit"), __jsx("img", {
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
//# sourceMappingURL=digit_recognizer.js.463c09e2458ef5b5aebb.hot-update.js.map