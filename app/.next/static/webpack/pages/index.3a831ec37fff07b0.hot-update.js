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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Favorite */ \"./node_modules/@mui/icons-material/Favorite.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var _data_compliments_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/compliments.json */ \"./data/compliments.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import fs from 'fs'\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();\nfunction Home() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    console.log(_data_compliments_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    useEffect(()=>{\n        Math.floor(Math.random() * _data_compliments_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    });\n    const fetcher = async function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        const response = await fetch(...args);\n        console.log(response.json());\n        if (response.ok) {\n            return await response.json();\n        }\n        throw new Error(response.status);\n    };\n    // const { isLoading, data, error } = useQuery(\n    //   [\"message\", message],\n    //   async () => await fetcher(\"\"),\n    //   { retry: false, enabled: !!message }\n    // );\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)({\n        palette: {\n            heart: {\n                main: \"#ef5350\"\n            }\n        }\n    });\n    const handleClick = ()=>{\n        setFlag(!flag);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n                theme: theme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    color: \"heart\",\n                    onClick: handleClick,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"XZF5PrtNqkkZglmo00xZs59KqLc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0U7QUFDaUI7QUFDZ0I7QUFDVjtBQUMyQjtBQUNuRixzQkFBc0I7QUFDb0M7QUFFMUQsTUFBTVUsY0FBYyxJQUFJSiw4REFBV0E7QUFFcEIsU0FBU0ssT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNlLE1BQU1DLFFBQVEsR0FBR2hCLCtDQUFRQSxDQUFDLEtBQUs7SUFDdENpQixRQUFRQyxHQUFHLENBQUNWLDBEQUFzQjtJQUVsQ1ksVUFBVSxJQUFNO1FBQ2RDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLZiwwREFBc0I7SUFDbkQ7SUFFQSxNQUFNZ0IsVUFBVSxpQkFBbUI7eUNBQVRDO1lBQUFBOztRQUN4QixNQUFNQyxXQUFXLE1BQU1DLFNBQVNGO1FBQ2hDUixRQUFRQyxHQUFHLENBQUNRLFNBQVNFLElBQUk7UUFDekIsSUFBSUYsU0FBU0csRUFBRSxFQUFFO1lBQ2YsT0FBTyxNQUFNSCxTQUFTRSxJQUFJO1FBQzVCLENBQUM7UUFDRCxNQUFNLElBQUlFLE1BQU1KLFNBQVNLLE1BQU0sRUFBRTtJQUNuQztJQUVBLCtDQUErQztJQUMvQywwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DLHlDQUF5QztJQUN6QyxLQUFLO0lBRUwsTUFBTUMsUUFBUTlCLGlFQUFXQSxDQUFDO1FBQ3hCK0IsU0FBUztZQUNQQyxPQUFPO2dCQUNMQyxNQUFNO1lBQ1I7UUFDRjtJQUNGO0lBR0EsTUFBTUMsY0FBYyxJQUFNO1FBQ3hCcEIsUUFBUSxDQUFDRDtJQUNYO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNULHNFQUFtQkE7WUFBQytCLFFBQVE1QjtzQkFDM0IsNEVBQUNOLCtEQUFhQTtnQkFBQzZCLE9BQU9BOzBCQUNwQiw0RUFBQy9CLGdFQUFVQTtvQkFBQ3FDLE9BQU07b0JBQVFDLFNBQVNIOzhCQUNqQyw0RUFBQ2hDLG9FQUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpCLENBQUM7R0FqRHVCTTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XG5pbXBvcnQgeyBjcmVhdGVUaGVtZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9GYXZvcml0ZSc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciwgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG4vLyBpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgY29tcGxpbWVudHNEYXRhIGZyb20gJy4uLy4uL2RhdGEvY29tcGxpbWVudHMuanNvbic7XG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc29sZS5sb2coY29tcGxpbWVudHNEYXRhLmxlbmd0aClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXBsaW1lbnRzRGF0YS5sZW5ndGggKTtcbiAgfSk7XG5cbiAgY29uc3QgZmV0Y2hlciA9IGFzeW5jICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCguLi5hcmdzKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgfTtcblxuICAvLyBjb25zdCB7IGlzTG9hZGluZywgZGF0YSwgZXJyb3IgfSA9IHVzZVF1ZXJ5KFxuICAvLyAgIFtcIm1lc3NhZ2VcIiwgbWVzc2FnZV0sXG4gIC8vICAgYXN5bmMgKCkgPT4gYXdhaXQgZmV0Y2hlcihcIlwiKSxcbiAgLy8gICB7IHJldHJ5OiBmYWxzZSwgZW5hYmxlZDogISFtZXNzYWdlIH1cbiAgLy8gKTtcblxuICBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBoZWFydDoge1xuICAgICAgICBtYWluOiAnI2VmNTM1MCdcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRGbGFnKCFmbGFnKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaGVhcnRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICA8RmF2b3JpdGVJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkljb25CdXR0b24iLCJjcmVhdGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJGYXZvcml0ZUljb24iLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJ1c2VRdWVyeSIsImNvbXBsaW1lbnRzRGF0YSIsInF1ZXJ5Q2xpZW50IiwiSG9tZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY291bnQiLCJzZXRDb3VudCIsImZsYWciLCJzZXRGbGFnIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInVzZUVmZmVjdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImZldGNoZXIiLCJhcmdzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJvayIsIkVycm9yIiwic3RhdHVzIiwidGhlbWUiLCJwYWxldHRlIiwiaGVhcnQiLCJtYWluIiwiaGFuZGxlQ2xpY2siLCJjbGllbnQiLCJjb2xvciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});