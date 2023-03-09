"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Favorite */ \"./node_modules/@mui/icons-material/Favorite.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var _data_compliments_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/compliments.json */ \"./data/compliments.json\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Stack */ \"./node_modules/@mui/material/Stack/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();\nfunction Home() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetcher = async function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        const response = await fetch(...args);\n        console.log(response.json());\n        if (response.ok) {\n            return await response.json();\n        }\n        throw new Error(response.status);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCount(Math.floor(Math.random() * _data_compliments_json__WEBPACK_IMPORTED_MODULE_2__.length));\n        setMessage(_data_compliments_json__WEBPACK_IMPORTED_MODULE_2__[count]);\n    }, [\n        flag\n    ]);\n    const handleClick = ()=>{\n        setFlag(!flag);\n    };\n    // const { isLoading, data, error } = useQuery(\n    //   [\"message\", message],\n    //   async () => await fetcher(\"\"),\n    //   { retry: false, enabled: !!message }\n    // );\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)({\n        palette: {\n            heart: {\n                main: \"#ef5350\"\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n                theme: theme,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        color: \"heart\",\n                        onClick: handleClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        spacing: 2,\n                        alignItems: \"center\",\n                        children: message.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"XZF5PrtNqkkZglmo00xZs59KqLc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNXO0FBQ1E7QUFDZ0I7QUFDVjtBQUMyQjtBQUNsRDtBQUN5QjtBQUNsQjtBQUNKO0FBRXBDLE1BQU1hLGNBQWMsSUFBSU4sOERBQVdBO0FBRXBCLFNBQVNPLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNnQixPQUFPQyxTQUFTLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNrQixNQUFNQyxRQUFRLEdBQUduQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRXRDLE1BQU1vQixVQUFVLGlCQUFtQjt5Q0FBVEM7WUFBQUE7O1FBQ3hCLE1BQU1DLFdBQVcsTUFBTUMsU0FBU0Y7UUFDaENHLFFBQVFDLEdBQUcsQ0FBQ0gsU0FBU0ksSUFBSTtRQUN6QixJQUFJSixTQUFTSyxFQUFFLEVBQUU7WUFDZixPQUFPLE1BQU1MLFNBQVNJLElBQUk7UUFDNUIsQ0FBQztRQUNELE1BQU0sSUFBSUUsTUFBTU4sU0FBU08sTUFBTSxFQUFFO0lBQ25DO0lBRUE1QixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RnQixTQUFTYSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS3ZCLDBEQUFzQjtRQUMxRE0sV0FBV04sbURBQWUsQ0FBQ08sTUFBTTtJQUNuQyxHQUFFO1FBQUNFO0tBQUs7SUFHUixNQUFNZ0IsY0FBYyxJQUFNO1FBQ3hCZixRQUFRLENBQUNEO0lBQ1g7SUFFQSwrQ0FBK0M7SUFDL0MsMEJBQTBCO0lBQzFCLG1DQUFtQztJQUNuQyx5Q0FBeUM7SUFDekMsS0FBSztJQUVMLE1BQU1pQixRQUFRaEMsaUVBQVdBLENBQUM7UUFDeEJpQyxTQUFTO1lBQ1BDLE9BQU87Z0JBQ0xDLE1BQU07WUFDUjtRQUNGO0lBQ0Y7SUFHQSxxQkFDRTtrQkFDRSw0RUFBQy9CLHNFQUFtQkE7WUFBQ2dDLFFBQVEzQjtzQkFDM0IsNEVBQUNSLCtEQUFhQTtnQkFBQytCLE9BQU9BOztrQ0FDcEIsOERBQUNqQyxnRUFBVUE7d0JBQUNzQyxPQUFNO3dCQUFRQyxTQUFTUDtrQ0FDakMsNEVBQUM3QixvRUFBWUE7Ozs7Ozs7Ozs7a0NBRWYsOERBQUNLLDJEQUFLQTt3QkFBQ2dDLFNBQVM7d0JBQUdDLFlBQVc7a0NBQzNCN0IsUUFBUUEsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVCLENBQUM7R0FyRHVCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XG5pbXBvcnQgeyBjcmVhdGVUaGVtZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9GYXZvcml0ZSc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciwgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgJ0Avc3R5bGVzL2hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBjb21wbGltZW50c0RhdGEgZnJvbSAnLi4vLi4vZGF0YS9jb21wbGltZW50cy5qc29uJztcbmltcG9ydCBTdGFjayBmcm9tICdAbXVpL21hdGVyaWFsL1N0YWNrJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICBjb25zdCBmZXRjaGVyID0gYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKC4uLmFyZ3MpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSlcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q291bnQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcGxpbWVudHNEYXRhLmxlbmd0aCApKTtcbiAgICBzZXRNZXNzYWdlKGNvbXBsaW1lbnRzRGF0YVtjb3VudF0pXG4gIH0sW2ZsYWddKTtcblxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldEZsYWcoIWZsYWcpO1xuICB9XG5cbiAgLy8gY29uc3QgeyBpc0xvYWRpbmcsIGRhdGEsIGVycm9yIH0gPSB1c2VRdWVyeShcbiAgLy8gICBbXCJtZXNzYWdlXCIsIG1lc3NhZ2VdLFxuICAvLyAgIGFzeW5jICgpID0+IGF3YWl0IGZldGNoZXIoXCJcIiksXG4gIC8vICAgeyByZXRyeTogZmFsc2UsIGVuYWJsZWQ6ICEhbWVzc2FnZSB9XG4gIC8vICk7XG5cbiAgY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgaGVhcnQ6IHtcbiAgICAgICAgbWFpbjogJyNlZjUzNTAnXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJoZWFydFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIDxGYXZvcml0ZUljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIHttZXNzYWdlLm1lc3NhZ2V9XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJY29uQnV0dG9uIiwiY3JlYXRlVGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiRmF2b3JpdGVJY29uIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwidXNlUXVlcnkiLCJjb21wbGltZW50c0RhdGEiLCJTdGFjayIsIkJveCIsInF1ZXJ5Q2xpZW50IiwiSG9tZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY291bnQiLCJzZXRDb3VudCIsImZsYWciLCJzZXRGbGFnIiwiZmV0Y2hlciIsImFyZ3MiLCJyZXNwb25zZSIsImZldGNoIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJvayIsIkVycm9yIiwic3RhdHVzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiaGFuZGxlQ2xpY2siLCJ0aGVtZSIsInBhbGV0dGUiLCJoZWFydCIsIm1haW4iLCJjbGllbnQiLCJjb2xvciIsIm9uQ2xpY2siLCJzcGFjaW5nIiwiYWxpZ25JdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});