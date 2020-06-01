webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Posts.tsx":
/*!******************************!*\
  !*** ./components/Posts.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tooltip */ \"./node_modules/@material-ui/core/esm/Tooltip/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/olenarolskaya/FE/developsBlog/components/Posts.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(function (theme) {\n  return {\n    nav: {\n      marginTop: '30px',\n      color: '#314f1a',\n      fontWeight: 'bold',\n      fontSize: '20px',\n      paddingRight: '30px'\n    },\n    facts: {\n      margin: '24px',\n      minHeight: 'calc(96vh - 341px)',\n      boxSizing: 'border-box',\n      padding: '8px',\n      display: 'flex',\n      flexFlow: 'row wrap',\n      justifyContent: 'space-around',\n      alignItems: ''\n    },\n    card: {\n      maxWidth: 345,\n      backgroundColor: '#f0c09e',\n      '&:hover': {\n        opacity: '0.8'\n      }\n    },\n    text: {\n      marginBottom: '20px'\n    },\n    media: {\n      height: 0,\n      paddingTop: '56.25%' // 16:9\n\n    }\n  };\n});\n\nvar Posts = function Posts() {\n  _s();\n\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      catFacts = _React$useState2[0],\n      setCatFacts = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://simple-blog-api.crew.red/posts\").then(function (response) {\n      setCatFacts(response.data);\n    });\n  }, []);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    placement: \"top-start\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: classes.nav,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, \"Main\"))), __jsx(\"div\", {\n    className: classes.facts,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, catFacts.slice(0, 21).map(function (catFact) {\n    return __jsx(\"div\", {\n      className: \"facts-block__card\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      className: classes.card,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 11\n      }\n    }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      className: classes.text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 15\n      }\n    }, catFact.text), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      variant: \"body2\",\n      color: \"textSecondary\",\n      component: \"p\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 15\n      }\n    }, \"Liked by \", __jsx(\"b\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 88\n      }\n    }, catFact.upvotes), \" cat lovers\")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      size: \"small\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 13\n      }\n    }, \"Learn More\")));\n  })));\n};\n\n_s(Posts, \"S00Sl7fWiXl65w2eYbhWRat9qrw=\", false, function () {\n  return [useStyles];\n});\n\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\n\nvar _c;\n\n$RefreshReg$(_c, \"Posts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RzLnRzeD9hOWExIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm5hdiIsIm1hcmdpblRvcCIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwicGFkZGluZ1JpZ2h0IiwiZmFjdHMiLCJtYXJnaW4iLCJtaW5IZWlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhGbG93IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY2FyZCIsIm1heFdpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsInRleHQiLCJtYXJnaW5Cb3R0b20iLCJtZWRpYSIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJQb3N0cyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2F0RmFjdHMiLCJzZXRDYXRGYWN0cyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInNsaWNlIiwibWFwIiwiY2F0RmFjdCIsInVwdm90ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxPQUFHLEVBQUU7QUFDSEMsZUFBUyxFQUFFLE1BRFI7QUFFSEMsV0FBSyxFQUFFLFNBRko7QUFHSEMsZ0JBQVUsRUFBRSxNQUhUO0FBSUhDLGNBQVEsRUFBRSxNQUpQO0FBS0hDLGtCQUFZLEVBQUU7QUFMWCxLQURnQztBQVFyQ0MsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxNQURIO0FBRUxDLGVBQVMsRUFBRSxvQkFGTjtBQUdMQyxlQUFTLEVBQUUsWUFITjtBQUlMQyxhQUFPLEVBQUUsS0FKSjtBQUtMQyxhQUFPLEVBQUUs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dHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgbmF2OiB7XG4gICAgbWFyZ2luVG9wOiAnMzBweCcsXG4gICAgY29sb3I6ICcjMzE0ZjFhJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICBwYWRkaW5nUmlnaHQ6ICczMHB4JyxcbiAgfSxcbiAgZmFjdHM6IHtcbiAgICBtYXJnaW46ICcyNHB4JyxcbiAgICBtaW5IZWlnaHQ6ICdjYWxjKDk2dmggLSAzNDFweCknLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RmxvdzogJ3JvdyB3cmFwJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgYWxpZ25JdGVtczogJydcbn0sXG4gIGNhcmQ6IHtcbiAgICBtYXhXaWR0aDogMzQ1LFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmMGMwOWUnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgb3BhY2l0eTogJzAuOCcsXG4gICAgfVxuICB9LFxuICB0ZXh0OiB7XG4gICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXG4gIH0sXG4gIG1lZGlhOiB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLCAvLyAxNjo5XG4gIH0sXG59KSk7XG5cbmNvbnN0IFBvc3RzID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtjYXRGYWN0cywgc2V0Q2F0RmFjdHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0c2ApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHNldENhdEZhY3RzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcC1zdGFydFwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmF2fT5NYWluPC9CdXR0b24+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mYWN0c30+e2NhdEZhY3RzLnNsaWNlKDAsIDIxKS5tYXAoY2F0RmFjdCA9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmFjdHMtYmxvY2tfX2NhcmQnPlxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PntjYXRGYWN0LnRleHR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+TGlrZWQgYnkgPGI+e2NhdEZhY3QudXB2b3Rlc308L2I+IGNhdCBsb3ZlcnM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIj5MZWFybiBNb3JlPC9CdXR0b24+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTsgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Posts.tsx\n");

/***/ })

})