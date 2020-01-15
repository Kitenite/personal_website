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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qRo0");


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "qRo0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ContactPanel() {
  return __jsx("div", {
    className: "jsx-2048108428" + " " + "all"
  }, __jsx("div", {
    className: "jsx-2048108428" + " " + "email-resume"
  }, __jsx("b", {
    className: "jsx-2048108428"
  }, "hoakiet98@gmail.com"), __jsx("br", {
    className: "jsx-2048108428"
  }), __jsx("a", {
    href: "https://kitenite.github.io/resume/",
    target: "_blank",
    className: "jsx-2048108428"
  }, "Resum\xE9")), __jsx("div", {
    className: "jsx-2048108428" + " " + "professional"
  }, __jsx("b", {
    className: "jsx-2048108428"
  }, "Professional"), __jsx("br", {
    className: "jsx-2048108428"
  }), __jsx("a", {
    href: "https://www.linkedin.com/in/kiet-ho/",
    target: "_blank",
    className: "jsx-2048108428"
  }, "LinkedIn"), __jsx("br", {
    className: "jsx-2048108428"
  }), __jsx("a", {
    href: "https://github.com/Kitenite",
    target: "_blank",
    className: "jsx-2048108428"
  }, "GitHub"), __jsx("br", {
    className: "jsx-2048108428"
  }), __jsx("a", {
    href: "https://dribbble.com/FlyaKiet",
    target: "_blank",
    className: "jsx-2048108428"
  }, "Dribbble"), __jsx("br", {
    className: "jsx-2048108428"
  })), __jsx("div", {
    className: "jsx-2048108428" + " " + "social"
  }, __jsx("b", {
    className: "jsx-2048108428"
  }, "Social"), __jsx("br", {
    className: "jsx-2048108428"
  }), __jsx("a", {
    href: "https://www.instagram.com/flyakiet/",
    target: "_blank",
    className: "jsx-2048108428"
  }, "Instagram"), __jsx("br", {
    className: "jsx-2048108428"
  }), __jsx("a", {
    href: "https://www.facebook.com/KietHo1998",
    target: "_blank",
    className: "jsx-2048108428"
  }, "Facebook"), __jsx("br", {
    className: "jsx-2048108428"
  }), __jsx("a", {
    href: "https://twitter.com/FlyaKiet",
    target: "_blank",
    className: "jsx-2048108428"
  }, "Twitter"), __jsx("br", {
    className: "jsx-2048108428"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2048108428"
  }, [".jsx-2048108428{font-size:2vh;position:relative;line-height:2.5vh;}", ".all.jsx-2048108428{padding-top:18vh;}", ".email-resume.jsx-2048108428{text-align:center;padding-bottom:5vh;}", ".professional.jsx-2048108428{padding-left:25vw;float:left;}", ".social.jsx-2048108428{padding-right:25vw;float:right;}", "a.jsx-2048108428{color:black;-webkit-text-decoration:none;text-decoration:none;}", "a.jsx-2048108428:hover{color:gray;}"]));
}

/* harmony default export */ __webpack_exports__["default"] = (ContactPanel);

/***/ })

/******/ });