"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Favorite */ \"@mui/icons-material/Favorite\");\n/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _data_compliments_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/compliments.json */ \"./data/compliments.json\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Stack */ \"@mui/material/Stack\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__]);\n_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();\nfunction Home() {\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetcher = async (...args)=>{\n        const response = await fetch(...args);\n        console.log(response.json());\n        if (response.ok) {\n            return await response.json();\n        }\n        throw new Error(response.status);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCount(Math.floor(Math.random() * _data_compliments_json__WEBPACK_IMPORTED_MODULE_6__.length));\n        setMessage(_data_compliments_json__WEBPACK_IMPORTED_MODULE_6__[count]);\n    }, [\n        flag\n    ]);\n    const handleClick = ()=>{\n        setFlag(!flag);\n    };\n    // const { isLoading, data, error } = useQuery(\n    //   [\"message\", message],\n    //   async () => await fetcher(\"\"),\n    //   { retry: false, enabled: !!message }\n    // );\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)({\n        palette: {\n            heart: {\n                main: \"#ef5350\"\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            height: \"100vh\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {\n                client: queryClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                    theme: theme,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            color: \"heart\",\n                            onClick: handleClick,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            spacing: 2,\n                            alignItems: \"center\",\n                            children: message.message\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n            lineNumber: 55,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1c7QUFDUTtBQUNnQjtBQUNWO0FBQzJCO0FBQ2xEO0FBQ3lCO0FBQ2xCO0FBQ0o7QUFFcEMsTUFBTWEsY0FBYyxJQUFJTiw4REFBV0E7QUFFcEIsU0FBU08sT0FBTztJQUM3QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDZ0IsT0FBT0MsU0FBUyxHQUFHakIsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDa0IsTUFBTUMsUUFBUSxHQUFHbkIsK0NBQVFBLENBQUMsS0FBSztJQUV0QyxNQUFNb0IsVUFBVSxPQUFPLEdBQUdDLE9BQVM7UUFDakMsTUFBTUMsV0FBVyxNQUFNQyxTQUFTRjtRQUNoQ0csUUFBUUMsR0FBRyxDQUFDSCxTQUFTSSxJQUFJO1FBQ3pCLElBQUlKLFNBQVNLLEVBQUUsRUFBRTtZQUNmLE9BQU8sTUFBTUwsU0FBU0ksSUFBSTtRQUM1QixDQUFDO1FBQ0QsTUFBTSxJQUFJRSxNQUFNTixTQUFTTyxNQUFNLEVBQUU7SUFDbkM7SUFFQTVCLGdEQUFTQSxDQUFDLElBQU07UUFDZGdCLFNBQVNhLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLdkIsMERBQXNCO1FBQzFETSxXQUFXTixtREFBZSxDQUFDTyxNQUFNO0lBQ25DLEdBQUU7UUFBQ0U7S0FBSztJQUdSLE1BQU1nQixjQUFjLElBQU07UUFDeEJmLFFBQVEsQ0FBQ0Q7SUFDWDtJQUVBLCtDQUErQztJQUMvQywwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DLHlDQUF5QztJQUN6QyxLQUFLO0lBRUwsTUFBTWlCLFFBQVFoQyxpRUFBV0EsQ0FBQztRQUN4QmlDLFNBQVM7WUFDUEMsT0FBTztnQkFDTEMsTUFBTTtZQUNSO1FBQ0Y7SUFDRjtJQUdBLHFCQUNFO2tCQUNBLDRFQUFDM0IsMERBQUdBO1lBQUM0QixTQUFRO1lBQU9DLGVBQWM7WUFBU0MsWUFBVztZQUFTQyxnQkFBZTtZQUFTQyxRQUFPO3NCQUM1Riw0RUFBQ3BDLHNFQUFtQkE7Z0JBQUNxQyxRQUFRaEM7MEJBQzNCLDRFQUFDUiwrREFBYUE7b0JBQUMrQixPQUFPQTs7c0NBQ3BCLDhEQUFDakMsaUVBQVVBOzRCQUFDMkMsT0FBTTs0QkFBUUMsU0FBU1o7c0NBQ2pDLDRFQUFDN0IscUVBQVlBOzs7Ozs7Ozs7O3NDQUVmLDhEQUFDSyw0REFBS0E7NEJBQUNxQyxTQUFTOzRCQUFHTixZQUFXO3NDQUMzQjNCLFFBQVFBLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XG5pbXBvcnQgeyBjcmVhdGVUaGVtZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9GYXZvcml0ZSc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciwgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgJ0Avc3R5bGVzL2hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBjb21wbGltZW50c0RhdGEgZnJvbSAnLi4vLi4vZGF0YS9jb21wbGltZW50cy5qc29uJztcbmltcG9ydCBTdGFjayBmcm9tICdAbXVpL21hdGVyaWFsL1N0YWNrJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICBjb25zdCBmZXRjaGVyID0gYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKC4uLmFyZ3MpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSlcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q291bnQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcGxpbWVudHNEYXRhLmxlbmd0aCApKTtcbiAgICBzZXRNZXNzYWdlKGNvbXBsaW1lbnRzRGF0YVtjb3VudF0pXG4gIH0sW2ZsYWddKTtcblxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldEZsYWcoIWZsYWcpO1xuICB9XG5cbiAgLy8gY29uc3QgeyBpc0xvYWRpbmcsIGRhdGEsIGVycm9yIH0gPSB1c2VRdWVyeShcbiAgLy8gICBbXCJtZXNzYWdlXCIsIG1lc3NhZ2VdLFxuICAvLyAgIGFzeW5jICgpID0+IGF3YWl0IGZldGNoZXIoXCJcIiksXG4gIC8vICAgeyByZXRyeTogZmFsc2UsIGVuYWJsZWQ6ICEhbWVzc2FnZSB9XG4gIC8vICk7XG5cbiAgY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgaGVhcnQ6IHtcbiAgICAgICAgbWFpbjogJyNlZjUzNTAnXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgaGVpZ2h0PVwiMTAwdmhcIj5cbiAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaGVhcnRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICA8RmF2b3JpdGVJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7bWVzc2FnZS5tZXNzYWdlfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJY29uQnV0dG9uIiwiY3JlYXRlVGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiRmF2b3JpdGVJY29uIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwidXNlUXVlcnkiLCJjb21wbGltZW50c0RhdGEiLCJTdGFjayIsIkJveCIsInF1ZXJ5Q2xpZW50IiwiSG9tZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY291bnQiLCJzZXRDb3VudCIsImZsYWciLCJzZXRGbGFnIiwiZmV0Y2hlciIsImFyZ3MiLCJyZXNwb25zZSIsImZldGNoIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJvayIsIkVycm9yIiwic3RhdHVzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiaGFuZGxlQ2xpY2siLCJ0aGVtZSIsInBhbGV0dGUiLCJoZWFydCIsIm1haW4iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImNsaWVudCIsImNvbG9yIiwib25DbGljayIsInNwYWNpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "@mui/icons-material/Favorite":
/*!***********************************************!*\
  !*** external "@mui/icons-material/Favorite" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Favorite");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/Stack":
/*!**************************************!*\
  !*** external "@mui/material/Stack" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "./data/compliments.json":
/*!*******************************!*\
  !*** ./data/compliments.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"message":"You’re more fun than a ball pit filled with candy. (And seriously, what could be more fun than that?)"},{"message":"You have a great sense of humor."},{"message":"You’re more fun than bubble wrap."},{"message":"You\'re a gift to those around you."},{"message":"You\'re a candle in the darkness."},{"message":"When you make up your mind about something, nothing stands in your way."},{"message":"I bet you make babies smile."},{"message":"Is that your picture next to “charming” in the dictionary?"},{"message":"On a scale from 1 to 10, you’re an 11."},{"message":"Everything would be better if more people were like you!"},{"message":"You’re inspiring."},{"message":"You\'re an awesome friend."},{"message":"You’re a smart cookie."},{"message":"You are making a difference."},{"message":"You’re one of a kind!"},{"message":"I\'m inspired by you."},{"message":"You\'re like a ray of sunshine on a really dreary day."},{"message":"When I\'m down you always say something encouraging to help me feel better."},{"message":"Thank you for being you."}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();