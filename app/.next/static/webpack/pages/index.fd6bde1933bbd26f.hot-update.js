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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Favorite */ \"./node_modules/@mui/icons-material/Favorite.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var _data_compliments_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/compliments.json */ \"./data/compliments.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import fs from 'fs'\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();\nfunction Home() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    useEffect(()=>{\n        setCount(Math.floor(Math.random() * _data_compliments_json__WEBPACK_IMPORTED_MODULE_2__.length));\n    });\n    const fetcher = async function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        const response = await fetch(...args);\n        console.log(response.json());\n        if (response.ok) {\n            return await response.json();\n        }\n        throw new Error(response.status);\n    };\n    // const { isLoading, data, error } = useQuery(\n    //   [\"message\", message],\n    //   async () => await fetcher(\"\"),\n    //   { retry: false, enabled: !!message }\n    // );\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)({\n        palette: {\n            heart: {\n                main: \"#ef5350\"\n            }\n        }\n    });\n    const handleClick = ()=>{\n        setFlag(!flag);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n                theme: theme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    color: \"heart\",\n                    onClick: handleClick,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"XZF5PrtNqkkZglmo00xZs59KqLc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0U7QUFDaUI7QUFDZ0I7QUFDVjtBQUMyQjtBQUNuRixzQkFBc0I7QUFDb0M7QUFFMUQsTUFBTVUsY0FBYyxJQUFJSiw4REFBV0E7QUFFcEIsU0FBU0ssT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNlLE1BQU1DLFFBQVEsR0FBR2hCLCtDQUFRQSxDQUFDLEtBQUs7SUFFdENpQixVQUFVLElBQU07UUFDZEgsU0FBU0ksS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtaLDBEQUFzQjtJQUM1RDtJQUVBLE1BQU1jLFVBQVUsaUJBQW1CO3lDQUFUQztZQUFBQTs7UUFDeEIsTUFBTUMsV0FBVyxNQUFNQyxTQUFTRjtRQUNoQ0csUUFBUUMsR0FBRyxDQUFDSCxTQUFTSSxJQUFJO1FBQ3pCLElBQUlKLFNBQVNLLEVBQUUsRUFBRTtZQUNmLE9BQU8sTUFBTUwsU0FBU0ksSUFBSTtRQUM1QixDQUFDO1FBQ0QsTUFBTSxJQUFJRSxNQUFNTixTQUFTTyxNQUFNLEVBQUU7SUFDbkM7SUFFQSwrQ0FBK0M7SUFDL0MsMEJBQTBCO0lBQzFCLG1DQUFtQztJQUNuQyx5Q0FBeUM7SUFDekMsS0FBSztJQUVMLE1BQU1DLFFBQVE5QixpRUFBV0EsQ0FBQztRQUN4QitCLFNBQVM7WUFDUEMsT0FBTztnQkFDTEMsTUFBTTtZQUNSO1FBQ0Y7SUFDRjtJQUdBLE1BQU1DLGNBQWMsSUFBTTtRQUN4QnBCLFFBQVEsQ0FBQ0Q7SUFDWDtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDVCxzRUFBbUJBO1lBQUMrQixRQUFRNUI7c0JBQzNCLDRFQUFDTiwrREFBYUE7Z0JBQUM2QixPQUFPQTswQkFDcEIsNEVBQUMvQixnRUFBVUE7b0JBQUNxQyxPQUFNO29CQUFRQyxTQUFTSDs4QkFDakMsNEVBQUNoQyxvRUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QixDQUFDO0dBaER1Qk07S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuaW1wb3J0IHsgY3JlYXRlVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRmF2b3JpdGUnO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsIHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuLy8gaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IGNvbXBsaW1lbnRzRGF0YSBmcm9tICcuLi8uLi9kYXRhL2NvbXBsaW1lbnRzLmpzb24nO1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDb3VudChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wbGltZW50c0RhdGEubGVuZ3RoICkpO1xuICB9KTtcblxuICBjb25zdCBmZXRjaGVyID0gYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKC4uLmFyZ3MpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSlcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuICB9O1xuXG4gIC8vIGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhLCBlcnJvciB9ID0gdXNlUXVlcnkoXG4gIC8vICAgW1wibWVzc2FnZVwiLCBtZXNzYWdlXSxcbiAgLy8gICBhc3luYyAoKSA9PiBhd2FpdCBmZXRjaGVyKFwiXCIpLFxuICAvLyAgIHsgcmV0cnk6IGZhbHNlLCBlbmFibGVkOiAhIW1lc3NhZ2UgfVxuICAvLyApO1xuXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIGhlYXJ0OiB7XG4gICAgICAgIG1haW46ICcjZWY1MzUwJ1xuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldEZsYWcoIWZsYWcpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJoZWFydFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIDxGYXZvcml0ZUljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSWNvbkJ1dHRvbiIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsIkZhdm9yaXRlSWNvbiIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsInVzZVF1ZXJ5IiwiY29tcGxpbWVudHNEYXRhIiwicXVlcnlDbGllbnQiLCJIb21lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJjb3VudCIsInNldENvdW50IiwiZmxhZyIsInNldEZsYWciLCJ1c2VFZmZlY3QiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJmZXRjaGVyIiwiYXJncyIsInJlc3BvbnNlIiwiZmV0Y2giLCJjb25zb2xlIiwibG9nIiwianNvbiIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJ0aGVtZSIsInBhbGV0dGUiLCJoZWFydCIsIm1haW4iLCJoYW5kbGVDbGljayIsImNsaWVudCIsImNvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});