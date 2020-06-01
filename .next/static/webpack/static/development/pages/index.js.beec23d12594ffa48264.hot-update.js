webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Pagination.tsx":
/*!***********************************!*\
  !*** ./components/Pagination.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/olenarolskaya/FE/developsBlog/components/Pagination.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Pagination = function Pagination(_ref) {\n  var postsPerPage = _ref.postsPerPage,\n      totalPosts = _ref.totalPosts,\n      paginate = _ref.paginate;\n  var pageNumbers = [];\n\n  for (var i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {\n    pageNumbers.push(i);\n  }\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"nav\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    className: \"pagination\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, pageNumbers.map(function (number) {\n    __jsx(\"li\", {\n      key: number,\n      className: \"page-item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      onClick: function onClick() {\n        return paginate(number);\n      },\n      href: \"!#\",\n      className: \"page-link\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 13\n      }\n    }, number));\n  }))));\n};\n\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\n\nvar _c;\n\n$RefreshReg$(_c, \"Pagination\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4PzFmMWMiXSwibmFtZXMiOlsiUGFnaW5hdGlvbiIsInBvc3RzUGVyUGFnZSIsInRvdGFsUG9zdHMiLCJwYWdpbmF0ZSIsInBhZ2VOdW1iZXJzIiwiaSIsIk1hdGgiLCJjZWlsIiwicHVzaCIsIm1hcCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQTBDO0FBQUEsTUFBeENDLFlBQXdDLFFBQXhDQSxZQUF3QztBQUFBLE1BQTFCQyxVQUEwQixRQUExQkEsVUFBMEI7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7QUFDM0QsTUFBTUMsV0FBVyxHQUFHLEVBQXBCOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsSUFBSUMsSUFBSSxDQUFDQyxJQUFMLENBQVVMLFVBQVUsR0FBRUQsWUFBdEIsQ0FBckIsRUFBMERJLENBQUMsRUFBM0QsRUFBK0Q7QUFDN0RELGVBQVcsQ0FBQ0ksSUFBWixDQUFpQkgsQ0FBakI7QUFDRDs7QUFFRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFdBQVcsQ0FBQ0ssR0FBWixDQUFnQixVQUFBQyxNQUFNLEVBQUk7QUFDM0I7QUFBSSxTQUFHLEVBQUVBLE1BQVQ7QUFBaUIsZUFBUyxFQUFDLFdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGFBQU8sRUFBRTtBQUFBLGVBQU1QLFFBQVEsQ0FBQ08sTUFBRCxDQUFkO0FBQUEsT0FBWjtBQUFvQyxVQUFJLEVBQUMsSUFBekM7QUFBOEMsZUFBUyxFQUFDLFdBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcUVBLE1BQXJFLENBREY7QUFHRCxHQUpFLENBREgsQ0FERixDQURGLENBREY7QUFhRCxDQXBCRDs7S0FBTVYsVTtBQXNCU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQYWdpbmF0aW9uID0gKHtwb3N0c1BlclBhZ2UsIHRvdGFsUG9zdHMsIHBhZ2luYXRlfSkgPT4ge1xuICBjb25zdCBwYWdlTnVtYmVycyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IE1hdGguY2VpbCh0b3RhbFBvc3RzIC9wb3N0c1BlclBhZ2UpOyBpKyspIHtcbiAgICBwYWdlTnVtYmVycy5wdXNoKGkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgICB7cGFnZU51bWJlcnMubWFwKG51bWJlciA9PiB7XG4gICAgICAgICAgPGxpIGtleT17bnVtYmVyfSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKG51bWJlcil9IGhyZWY9XCIhI1wiIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiPntudW1iZXJ9PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Pagination.tsx\n");

/***/ })

})