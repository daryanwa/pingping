"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hono";
exports.ids = ["vendor-chunks/hono"];
exports.modules = {

/***/ "(ssr)/./node_modules/hono/dist/http-exception.js":
/*!**************************************************!*\
  !*** ./node_modules/hono/dist/http-exception.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HTTPException: () => (/* binding */ HTTPException)\n/* harmony export */ });\n// src/http-exception.ts\nvar HTTPException = class extends Error {\n  res;\n  status;\n  constructor(status = 500, options) {\n    super(options?.message, { cause: options?.cause });\n    this.res = options?.res;\n    this.status = status;\n  }\n  getResponse() {\n    if (this.res) {\n      const newResponse = new Response(this.res.body, {\n        status: this.status,\n        headers: this.res.headers\n      });\n      return newResponse;\n    }\n    return new Response(this.message, {\n      status: this.status\n    });\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaG9uby9kaXN0L2h0dHAtZXhjZXB0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHVCQUF1QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFHRSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzdGFjay8uL25vZGVfbW9kdWxlcy9ob25vL2Rpc3QvaHR0cC1leGNlcHRpb24uanM/ZGFiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvaHR0cC1leGNlcHRpb24udHNcbnZhciBIVFRQRXhjZXB0aW9uID0gY2xhc3MgZXh0ZW5kcyBFcnJvciB7XG4gIHJlcztcbiAgc3RhdHVzO1xuICBjb25zdHJ1Y3RvcihzdGF0dXMgPSA1MDAsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zPy5tZXNzYWdlLCB7IGNhdXNlOiBvcHRpb25zPy5jYXVzZSB9KTtcbiAgICB0aGlzLnJlcyA9IG9wdGlvbnM/LnJlcztcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgfVxuICBnZXRSZXNwb25zZSgpIHtcbiAgICBpZiAodGhpcy5yZXMpIHtcbiAgICAgIGNvbnN0IG5ld1Jlc3BvbnNlID0gbmV3IFJlc3BvbnNlKHRoaXMucmVzLmJvZHksIHtcbiAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgaGVhZGVyczogdGhpcy5yZXMuaGVhZGVyc1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3UmVzcG9uc2U7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5tZXNzYWdlLCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzXG4gICAgfSk7XG4gIH1cbn07XG5leHBvcnQge1xuICBIVFRQRXhjZXB0aW9uXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hono/dist/http-exception.js\n");

/***/ })

};
;