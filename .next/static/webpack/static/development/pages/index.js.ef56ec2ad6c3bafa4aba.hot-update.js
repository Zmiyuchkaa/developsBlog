webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Posts.tsx":
/*!******************************!*\
  !*** ./components/Posts.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/olenarolskaya/FE/developsBlog/components/Posts.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"createStyles\"])({\n    root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      margin: '-30px auto 0',\n      justifyContent: 'center',\n      alignContent: 'center'\n    }, theme.breakpoints.down('sm'), {\n      marginTop: 0\n    }),\n    item: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      margin: 10,\n      maxHeight: 250,\n      overflow: 'hidden',\n      minWidth: 200\n    }, theme.breakpoints.down('sm'), {\n      maxHeight: 'unset'\n    }),\n    loader: {\n      width: '80%'\n    },\n    pagination: {\n      position: 'fixed',\n      bottom: 30\n    }\n  });\n}); // function Posts({ page, posts, setPage, setPagePosts }: any) {\n//     const classes = useStyles();\n//     React.useEffect(() => {\n//         if (!posts) {\n//             getPosts(page).then((posts) => setPagePosts(page, posts));\n//         }\n//     }, [page, posts, setPagePosts]);\n//     return (\n//         <Grid container spacing={2} className={classes.root}>\n//             { posts\n//                 ? posts.map((post: any, index: number) => (\n//                     <Grid container item spacing={2} xs={4} className={classes.item} key={`${page}-${index}`}>\n//                         <Post\n//                             title={post.title}\n//                             description={post.body}\n//                         />\n//                     </Grid>\n//                 ))\n//                 : <LinearProgress color=\"secondary\" className={classes.loader}/>}\n//             <Pagination\n//                 className={classes.pagination}\n//                 count={10}\n//                 color=\"secondary\"\n//                 page={page}\n//                 onChange={(event, value) => setPage(value)}\n//             />\n//         </Grid>\n//     );\n// }\n// const mapStateToProps = (state: any) => {\n//     return {\n//         page: state.posts.page,\n//         posts: state.posts.pages[state.posts.page],\n//     };\n// };\n// const mapDispatchToProps = (dispatch: any) => {\n//     return bindActionCreators({ setPage, setPagePosts }, dispatch);\n// };\n// export default connect(mapStateToProps, mapDispatchToProps)(Posts);\n\nvar FactsList = function FactsList() {\n  _s();\n\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      posts = _React$useState2[0],\n      setPosts = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"https://simple-blog-api.crew.red/posts\").then(function (response) {\n      setPosts(response.data);\n      console.log(response.data);\n    });\n  }, []);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }\n  }, posts.slice(0, 21).map(function (post) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 11\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 13\n      }\n    }, __jsx(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 15\n      }\n    }, post.title), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 15\n      }\n    }, post.body), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 15\n      }\n    }))));\n  })));\n};\n\n_s(FactsList, \"0IrisdAEFk18bWZ8wxUF2aI0j/Y=\", false, function () {\n  return [useStyles];\n});\n\n_c = FactsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FactsList);\n\nvar _c;\n\n$RefreshReg$(_c, \"FactsList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RzLnRzeD9hOWExIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJtYXJnaW4iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduQ29udGVudCIsImJyZWFrcG9pbnRzIiwiZG93biIsIm1hcmdpblRvcCIsIml0ZW0iLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsIm1pbldpZHRoIiwibG9hZGVyIiwid2lkdGgiLCJwYWdpbmF0aW9uIiwicG9zaXRpb24iLCJib3R0b20iLCJGYWN0c0xpc3QiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2xpY2UiLCJtYXAiLCJwb3N0IiwidGl0bGUiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUN6QkMsNkVBQVksQ0FBQztBQUNUQyxRQUFJLEVBQUU7QUFDRkMsWUFBTSxFQUFFLGNBRFI7QUFFQUMsb0JBQWMsRUFBRSxRQUZoQjtBQUdBQyxrQkFBWSxFQUFFO0FBSGQsT0FJQ0wsS0FBSyxDQUFDTSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUpELEVBSWdDO0FBQzVCQyxlQUFTLEVBQUU7QUFEaUIsS0FKaEMsQ0FESztBQVNUQyxRQUFJLEVBQUU7QUFDRk4sWUFBTSxFQUFFLEVBRFI7QUFFQU8sZUFBUyxFQUFFLEdBRlg7QUFHQUMsY0FBUSxFQUFDLFFBSFQ7QUFJQUMsY0FBUSxFQUFFO0FBSlYsT0FLQ1osS0FBSyxDQUFDTSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUxELEVBS2dDO0FBQzVCRyxlQUFTLEVBQUU7QUFEaUIsS0FMaEMsQ0FUSztBQWtCVEcsVUFBTSxFQUFFO0FBQ0pDLFdBQUssRUFBRTtBQURILEtBbEJDO0FBcUJUQyxjQUFVLEVBQUU7QUFDUkMsY0FBUSxFQUFFLE9BREY7QUFFUkMsWUFBTSxFQUFFO0FBRkE7QUFyQkgsR0FBRCxDQURhO0FBQUEsQ0FBRCxDQUE1QixDLENBNkJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLE9BQU8sR0FBR3JCLFNBQVMsRUFBekI7O0FBRHNCLHdCQUVJc0IsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FGSjtBQUFBO0FBQUEsTUFFZkMsS0FGZTtBQUFBLE1BRVJDLFFBRlE7O0FBSXRCSCw4Q0FBSyxDQUFDSSxTQUFOLENBQWdCLFlBQU07QUFDcEJDLGdEQUFLLENBQUNDLEdBQU4sMkNBQ0dDLElBREgsQ0FDUSxVQUFBQyxRQUFRLEVBQUk7QUFDaEJMLGNBQVEsQ0FBQ0ssUUFBUSxDQUFDQyxJQUFWLENBQVI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILFFBQVEsQ0FBQ0MsSUFBckI7QUFDRCxLQUpIO0FBS0QsR0FORCxFQU1HLEVBTkg7QUFRQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1QLEtBQUssQ0FBQ1UsS0FBTixDQUFZLENBQVosRUFBZSxFQUFmLEVBQW1CQyxHQUFuQixDQUF1QixVQUFBQyxJQUFJO0FBQUEsV0FDL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLQSxJQUFJLENBQUNDLEtBQVYsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUQsSUFBSSxDQUFDRSxJQUFULENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0FERixDQURGLENBRCtCO0FBQUEsR0FBM0IsQ0FBTixDQURGLENBREY7QUFnQkQsQ0E1QkQ7O0dBQU1sQixTO1VBQ1lwQixTOzs7S0FEWm9CLFM7QUE4QlNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qb3N0cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tIFwiLi4vc3RvcmUvc3RvcmVcIlxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0UGFnZSwgc2V0UGFnZVBvc3RzIH0gZnJvbSAnLi4vc3RvcmUvcmVkdWNlcnMvcG9zdHMnO1xuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdHNcIjtcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiJztcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4vUG9zdFwiO1xuaW1wb3J0IHtjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgICBjcmVhdGVTdHlsZXMoe1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBtYXJnaW46ICctMzBweCBhdXRvIDAnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgIG92ZXJmbG93OidoaWRkZW4nLFxuICAgICAgICAgICAgbWluV2lkdGg6IDIwMCxcbiAgICAgICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgICAgICAgICAgIG1heEhlaWdodDogJ3Vuc2V0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRlcjoge1xuICAgICAgICAgICAgd2lkdGg6ICc4MCUnLFxuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIGJvdHRvbTogMzAsXG4gICAgICAgIH0sXG4gICAgfSksXG4pO1xuXG4vLyBmdW5jdGlvbiBQb3N0cyh7IHBhZ2UsIHBvc3RzLCBzZXRQYWdlLCBzZXRQYWdlUG9zdHMgfTogYW55KSB7XG4vLyAgICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4vLyAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICAgICAgaWYgKCFwb3N0cykge1xuLy8gICAgICAgICAgICAgZ2V0UG9zdHMocGFnZSkudGhlbigocG9zdHMpID0+IHNldFBhZ2VQb3N0cyhwYWdlLCBwb3N0cykpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSwgW3BhZ2UsIHBvc3RzLCBzZXRQYWdlUG9zdHNdKTtcblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4vLyAgICAgICAgICAgICB7IHBvc3RzXG4vLyAgICAgICAgICAgICAgICAgPyBwb3N0cy5tYXAoKHBvc3Q6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxuLy8gICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXsyfSB4cz17NH0gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19IGtleT17YCR7cGFnZX0tJHtpbmRleH1gfT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuYm9keX1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbi8vICAgICAgICAgICAgICAgICApKVxuLy8gICAgICAgICAgICAgICAgIDogPExpbmVhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxvYWRlcn0vPn1cbi8vICAgICAgICAgICAgIDxQYWdpbmF0aW9uXG4vLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2luYXRpb259XG4vLyAgICAgICAgICAgICAgICAgY291bnQ9ezEwfVxuLy8gICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbi8vICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxuLy8gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHZhbHVlKSA9PiBzZXRQYWdlKHZhbHVlKX1cbi8vICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgIDwvR3JpZD5cbi8vICAgICApO1xuLy8gfVxuXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IGFueSkgPT4ge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHBhZ2U6IHN0YXRlLnBvc3RzLnBhZ2UsXG4vLyAgICAgICAgIHBvc3RzOiBzdGF0ZS5wb3N0cy5wYWdlc1tzdGF0ZS5wb3N0cy5wYWdlXSxcbi8vICAgICB9O1xuLy8gfTtcblxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBhbnkpID0+IHtcbi8vICAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgc2V0UGFnZSwgc2V0UGFnZVBvc3RzIH0sIGRpc3BhdGNoKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBvc3RzKTtcblxuXG5jb25zdCBGYWN0c0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoYGh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzYClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgc2V0UG9zdHMocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2Pntwb3N0cy5zbGljZSgwLCAyMSkubWFwKHBvc3QgPT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxwPntwb3N0LmJvZHl9PC9wPlxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApOyAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWN0c0xpc3Q7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Posts.tsx\n");

/***/ })

})