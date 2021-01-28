module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/ImageChangeOnScroll.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n\nvar _jsxFileName = \"/Users/Daaaaaaaaan/sei/continuing-ed/ps-pkellner-using-react-hooks/section-2/pages/ImageChangeOnScroll.js\";\n\n\n\nconst ImageChangeOnScroll = () => {\n  const {\n    0: currentSpeakerId,\n    1: setCurrentSpeakerId\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: mouseEventCnt,\n    1: setMouseEventCnt\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    window.document.title = `SpeakerId: ${currentSpeakerId}`;\n    console.log(`useEffect: setting title to ${currentSpeakerId}`);\n  }, [currentSpeakerId]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: [\"mouseEventCnt: \", mouseEventCnt]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, undefined), [1124, 187, 823, 1269, 1530].map(speakerId => {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onMouseOver: () => {\n          setCurrentSpeakerId(speakerId);\n          setMouseEventCnt(mouseEventCnt + 1);\n          console.log(`onMouseOver: ${speakerId}`);\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          primaryImg: `/static/speakers/bw/Speaker-${speakerId}.jpg`,\n          secondaryImg: `/static/speakers/Speaker-${speakerId}.jpg`,\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 25\n        }, undefined)\n      }, speakerId, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 21\n      }, undefined);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnScroll);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzP2Q4NjkiXSwibmFtZXMiOlsiSW1hZ2VDaGFuZ2VPblNjcm9sbCIsImN1cnJlbnRTcGVha2VySWQiLCJzZXRDdXJyZW50U3BlYWtlcklkIiwidXNlU3RhdGUiLCJtb3VzZUV2ZW50Q250Iiwic2V0TW91c2VFdmVudENudCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImRvY3VtZW50IiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwic3BlYWtlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsbUJBQW1CLEdBQUcsTUFBTTtBQUU5QixRQUFNO0FBQUEsT0FBQ0MsZ0JBQUQ7QUFBQSxPQUFtQkM7QUFBbkIsTUFBMENDLHNEQUFRLENBQUMsQ0FBRCxDQUF4RDtBQUNBLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DRixzREFBUSxDQUFDLENBQUQsQ0FBbEQ7QUFFQUcseURBQVMsQ0FBQyxNQUFNO0FBQ1pDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsS0FBaEIsR0FBeUIsY0FBYVIsZ0JBQWlCLEVBQXZEO0FBQ0FTLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLCtCQUE4QlYsZ0JBQWlCLEVBQTVEO0FBQ0gsR0FIUSxFQUdOLENBQUNBLGdCQUFELENBSE0sQ0FBVDtBQUtBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSxvQ0FBc0JHLGFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVLLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCUSxHQUE3QixDQUFrQ0MsU0FBRCxJQUFlO0FBQzdDLDBCQUNJO0FBRUEsbUJBQVcsRUFBRSxNQUFNO0FBQ2ZYLDZCQUFtQixDQUFDVyxTQUFELENBQW5CO0FBQ0FSLDBCQUFnQixDQUFDRCxhQUFhLEdBQUcsQ0FBakIsQ0FBaEI7QUFDQU0saUJBQU8sQ0FBQ0MsR0FBUixDQUFhLGdCQUFlRSxTQUFVLEVBQXRDO0FBQ0gsU0FORDtBQUFBLCtCQVFJLHFFQUFDLGdFQUFEO0FBQ0ksb0JBQVUsRUFBRywrQkFBOEJBLFNBQVUsTUFEekQ7QUFFSSxzQkFBWSxFQUFHLDRCQUEyQkEsU0FBVSxNQUZ4RDtBQUdJLGFBQUcsRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSixTQUNLQSxTQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFnQkgsS0FqQkEsQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXVCSCxDQWpDRDs7QUFtQ2ViLGtGQUFmIiwiZmlsZSI6Ii4vcGFnZXMvSW1hZ2VDaGFuZ2VPblNjcm9sbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tICcuLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbCdcblxuY29uc3QgSW1hZ2VDaGFuZ2VPblNjcm9sbCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBbY3VycmVudFNwZWFrZXJJZCwgc2V0Q3VycmVudFNwZWFrZXJJZF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFttb3VzZUV2ZW50Q250LCBzZXRNb3VzZUV2ZW50Q250XSA9IHVzZVN0YXRlKDApXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQudGl0bGUgPSBgU3BlYWtlcklkOiAke2N1cnJlbnRTcGVha2VySWR9YFxuICAgICAgICBjb25zb2xlLmxvZyhgdXNlRWZmZWN0OiBzZXR0aW5nIHRpdGxlIHRvICR7Y3VycmVudFNwZWFrZXJJZH1gKVxuICAgIH0sIFtjdXJyZW50U3BlYWtlcklkXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3Bhbj5tb3VzZUV2ZW50Q250OiB7bW91c2VFdmVudENudH08L3NwYW4+XG4gICAgICAgICAgICB7WzExMjQsIDE4NywgODIzLCAxMjY5LCAxNTMwXS5tYXAoKHNwZWFrZXJJZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlcklkfVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFNwZWFrZXJJZChzcGVha2VySWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNb3VzZUV2ZW50Q250KG1vdXNlRXZlbnRDbnQgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG9uTW91c2VPdmVyOiAke3NwZWFrZXJJZH1gKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL2J3L1NwZWFrZXItJHtzcGVha2VySWR9LmpwZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9TcGVha2VyLSR7c3BlYWtlcklkfS5qcGdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDaGFuZ2VPblNjcm9sbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnScroll.js\n");

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/Daaaaaaaaan/sei/continuing-ed/ps-pkellner-using-react-hooks/section-2/src/ImageToggleOnScroll.js\";\n\n\nconst ImageToggleOnScroll = ({\n  primaryImg,\n  secondaryImg\n}) => {\n  const imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null); // console.log('imageRef is: ', imageRef)\n\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const {\n    0: inView,\n    1: setInView\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n\n  const isInView = () => {\n    if (imageRef.current) {\n      const rect = imageRef.current.getBoundingClientRect();\n      return rect.top >= 0 && rect.bottom <= window.innerHeight;\n    }\n\n    return false;\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    setIsLoading(false);\n    setInView(isInView);\n    window.addEventListener('scroll', scrollHandler);\n    return () => {\n      window.removeEventListener('scroll', scrollHandler);\n    };\n  }, [isLoading]);\n\n  const scrollHandler = () => {\n    setInView(isInView());\n  };\n\n  return isLoading ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    src: inView ? secondaryImg : primaryImg,\n    alt: \"\",\n    ref: imageRef,\n    width: \"200\",\n    height: \"200\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnScroll);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcz85NjYyIl0sIm5hbWVzIjpbIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImluVmlldyIsInNldEluVmlldyIsImlzSW5WaWV3IiwiY3VycmVudCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLG1CQUFtQixHQUFHLENBQUM7QUFBRUMsWUFBRjtBQUFjQztBQUFkLENBQUQsS0FBa0M7QUFFMUQsUUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkIsQ0FGMEQsQ0FHMUQ7O0FBRUEsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLElBQUQsQ0FBMUM7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JGLHNEQUFRLENBQUMsS0FBRCxDQUFwQzs7QUFDQSxRQUFNRyxRQUFRLEdBQUcsTUFBTTtBQUNuQixRQUFJUCxRQUFRLENBQUNRLE9BQWIsRUFBc0I7QUFDbEIsWUFBTUMsSUFBSSxHQUFHVCxRQUFRLENBQUNRLE9BQVQsQ0FBaUJFLHFCQUFqQixFQUFiO0FBQ0EsYUFBT0QsSUFBSSxDQUFDRSxHQUFMLElBQVksQ0FBWixJQUFpQkYsSUFBSSxDQUFDRyxNQUFMLElBQWVDLE1BQU0sQ0FBQ0MsV0FBOUM7QUFDSDs7QUFDRCxXQUFPLEtBQVA7QUFDSCxHQU5EOztBQVFBQyx5REFBUyxDQUFDLE1BQU07QUFDWlosZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQUcsYUFBUyxDQUFDQyxRQUFELENBQVQ7QUFDQU0sVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsYUFBbEM7QUFDQSxXQUFPLE1BQU07QUFDVEosWUFBTSxDQUFDSyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsYUFBckM7QUFDSCxLQUZEO0FBR0gsR0FQUSxFQU9OLENBQUNmLFNBQUQsQ0FQTSxDQUFUOztBQVNBLFFBQU1lLGFBQWEsR0FBRyxNQUFNO0FBQ3hCWCxhQUFTLENBQUNDLFFBQVEsRUFBVCxDQUFUO0FBQ0gsR0FGRDs7QUFJQSxTQUFPTCxTQUFTLEdBQUcsSUFBSCxnQkFDWjtBQUNBLE9BQUcsRUFBRUcsTUFBTSxHQUFFTixZQUFGLEdBQWlCRCxVQUQ1QjtBQUVBLE9BQUcsRUFBQyxFQUZKO0FBR0EsT0FBRyxFQUFFRSxRQUhMO0FBSUEsU0FBSyxFQUFDLEtBSk47QUFLQSxVQUFNLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFTSCxDQXRDRDs7QUF3Q2VILGtGQUFmIiwiZmlsZSI6Ii4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEltYWdlVG9nZ2xlT25TY3JvbGwgPSAoeyBwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWcgfSkgPT4ge1xuXG4gICAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbClcbiAgICAvLyBjb25zb2xlLmxvZygnaW1hZ2VSZWYgaXM6ICcsIGltYWdlUmVmKVxuXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpbWFnZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgICBzZXRJblZpZXcoaXNJblZpZXcpXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpXG4gICAgICAgIH1cbiAgICB9LCBbaXNMb2FkaW5nXSlcblxuICAgIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIHNldEluVmlldyhpc0luVmlldygpKVxuICAgIH1cblxuICAgIHJldHVybiBpc0xvYWRpbmcgPyBudWxsIDogKFxuICAgICAgICA8aW1nXG4gICAgICAgIHNyYz17aW5WaWV3PyBzZWNvbmRhcnlJbWcgOiBwcmltYXJ5SW1nfVxuICAgICAgICBhbHQ9JydcbiAgICAgICAgcmVmPXtpbWFnZVJlZn1cbiAgICAgICAgd2lkdGg9JzIwMCdcbiAgICAgICAgaGVpZ2h0PScyMDAnXG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ImageToggleOnScroll.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });