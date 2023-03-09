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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Favorite */ \"@mui/icons-material/Favorite\");\n/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _data_compliments_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/compliments.json */ \"./data/compliments.json\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Stack */ \"@mui/material/Stack\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__]);\n_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();\nfunction Home() {\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetcher = async (...args)=>{\n        const response = await fetch(...args);\n        console.log(response.json());\n        if (response.ok) {\n            return await response.json();\n        }\n        throw new Error(response.status);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCount(Math.floor(Math.random() * _data_compliments_json__WEBPACK_IMPORTED_MODULE_6__.length));\n        setMessage(_data_compliments_json__WEBPACK_IMPORTED_MODULE_6__[count]);\n    }, [\n        flag\n    ]);\n    const handleClick = ()=>{\n        setFlag(!flag);\n    };\n    // const { isLoading, data, error } = useQuery(\n    //   [\"message\", message],\n    //   async () => await fetcher(\"\"),\n    //   { retry: false, enabled: !!message }\n    // );\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)({\n        palette: {\n            heart: {\n                main: \"#ef5350\"\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            height: \"100vh\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {\n                client: queryClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                    theme: theme,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            color: \"heart\",\n                            onClick: handleClick,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            spacing: 2,\n                            alignItems: \"center\",\n                            children: message.message\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\taimo\\\\OneDrive\\\\Desktop\\\\ComplimentGenerator\\\\app\\\\src\\\\pages\\\\index.js\",\n            lineNumber: 55,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1c7QUFDUTtBQUNnQjtBQUNWO0FBQzJCO0FBQ2pEO0FBQ3dCO0FBQ2xCO0FBQ0o7QUFFcEMsTUFBTWEsY0FBYyxJQUFJTiw4REFBV0E7QUFFcEIsU0FBU08sT0FBTztJQUM3QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDZ0IsT0FBT0MsU0FBUyxHQUFHakIsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDa0IsTUFBTUMsUUFBUSxHQUFHbkIsK0NBQVFBLENBQUMsS0FBSztJQUV0QyxNQUFNb0IsVUFBVSxPQUFPLEdBQUdDLE9BQVM7UUFDakMsTUFBTUMsV0FBVyxNQUFNQyxTQUFTRjtRQUNoQ0csUUFBUUMsR0FBRyxDQUFDSCxTQUFTSSxJQUFJO1FBQ3pCLElBQUlKLFNBQVNLLEVBQUUsRUFBRTtZQUNmLE9BQU8sTUFBTUwsU0FBU0ksSUFBSTtRQUM1QixDQUFDO1FBQ0QsTUFBTSxJQUFJRSxNQUFNTixTQUFTTyxNQUFNLEVBQUU7SUFDbkM7SUFFQTVCLGdEQUFTQSxDQUFDLElBQU07UUFDZGdCLFNBQVNhLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLdkIsMERBQXNCO1FBQzFETSxXQUFXTixtREFBZSxDQUFDTyxNQUFNO0lBQ25DLEdBQUU7UUFBQ0U7S0FBSztJQUdSLE1BQU1nQixjQUFjLElBQU07UUFDeEJmLFFBQVEsQ0FBQ0Q7SUFDWDtJQUVBLCtDQUErQztJQUMvQywwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DLHlDQUF5QztJQUN6QyxLQUFLO0lBRUwsTUFBTWlCLFFBQVFoQyxpRUFBV0EsQ0FBQztRQUN4QmlDLFNBQVM7WUFDUEMsT0FBTztnQkFDTEMsTUFBTTtZQUNSO1FBQ0Y7SUFDRjtJQUdBLHFCQUNFO2tCQUNBLDRFQUFDM0IsMERBQUdBO1lBQUM0QixTQUFRO1lBQU9DLGVBQWM7WUFBU0MsWUFBVztZQUFTQyxnQkFBZTtZQUFTQyxRQUFPO3NCQUM1Riw0RUFBQ3BDLHNFQUFtQkE7Z0JBQUNxQyxRQUFRaEM7MEJBQzNCLDRFQUFDUiwrREFBYUE7b0JBQUMrQixPQUFPQTs7c0NBQ3BCLDhEQUFDakMsaUVBQVVBOzRCQUFDMkMsT0FBTTs0QkFBUUMsU0FBU1o7c0NBQ2pDLDRFQUFDN0IscUVBQVlBOzs7Ozs7Ozs7O3NDQUVmLDhEQUFDSyw0REFBS0E7NEJBQUNxQyxTQUFTOzRCQUFHTixZQUFXO3NDQUMzQjNCLFFBQVFBLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XG5pbXBvcnQgeyBjcmVhdGVUaGVtZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9GYXZvcml0ZSc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciwgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgJy4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgY29tcGxpbWVudHNEYXRhIGZyb20gJy4uLy4uL2RhdGEvY29tcGxpbWVudHMuanNvbic7XG5pbXBvcnQgU3RhY2sgZnJvbSAnQG11aS9tYXRlcmlhbC9TdGFjayc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcblxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgY29uc3QgZmV0Y2hlciA9IGFzeW5jICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCguLi5hcmdzKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENvdW50KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXBsaW1lbnRzRGF0YS5sZW5ndGggKSk7XG4gICAgc2V0TWVzc2FnZShjb21wbGltZW50c0RhdGFbY291bnRdKVxuICB9LFtmbGFnXSk7XG5cblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRGbGFnKCFmbGFnKTtcbiAgfVxuXG4gIC8vIGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhLCBlcnJvciB9ID0gdXNlUXVlcnkoXG4gIC8vICAgW1wibWVzc2FnZVwiLCBtZXNzYWdlXSxcbiAgLy8gICBhc3luYyAoKSA9PiBhd2FpdCBmZXRjaGVyKFwiXCIpLFxuICAvLyAgIHsgcmV0cnk6IGZhbHNlLCBlbmFibGVkOiAhIW1lc3NhZ2UgfVxuICAvLyApO1xuXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIGhlYXJ0OiB7XG4gICAgICAgIG1haW46ICcjZWY1MzUwJ1xuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGhlaWdodD1cIjEwMHZoXCI+XG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImhlYXJ0XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgPEZhdm9yaXRlSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAge21lc3NhZ2UubWVzc2FnZX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSWNvbkJ1dHRvbiIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsIkZhdm9yaXRlSWNvbiIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsInVzZVF1ZXJ5IiwiY29tcGxpbWVudHNEYXRhIiwiU3RhY2siLCJCb3giLCJxdWVyeUNsaWVudCIsIkhvbWUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImNvdW50Iiwic2V0Q291bnQiLCJmbGFnIiwic2V0RmxhZyIsImZldGNoZXIiLCJhcmdzIiwicmVzcG9uc2UiLCJmZXRjaCIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwib2siLCJFcnJvciIsInN0YXR1cyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImhhbmRsZUNsaWNrIiwidGhlbWUiLCJwYWxldHRlIiwiaGVhcnQiLCJtYWluIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJjbGllbnQiLCJjb2xvciIsIm9uQ2xpY2siLCJzcGFjaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

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