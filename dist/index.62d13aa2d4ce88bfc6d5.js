(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./src/context/files/a.ts":
/*!********************************!*\
  !*** ./src/context/files/a.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = () => {
    console.log("a");
};


/***/ }),

/***/ "./src/context/files/b.ts":
/*!********************************!*\
  !*** ./src/context/files/b.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = () => {
    console.log("b");
};


/***/ }),

/***/ "./src/context/index.ts":
/*!******************************!*\
  !*** ./src/context/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const files = __webpack_require__("./src/context/files sync recursive \\.ts");
// const importAll = (contextLoader: __WebpackModuleApi.RequireContext) => {
//   // contextLoader.keys().forEach(id => console.log(contextLoader(id)));
//   console.log(contextLoader);
// };
// importAll(files);
files.keys().forEach((key) => {
    console.log(key);
});


/***/ }),

/***/ "./src/context/files sync recursive \\.ts":
/*!**************************************!*\
  !*** ./src/context/files/ sync \.ts ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./a.ts": "./src/context/files/a.ts",
	"./b.ts": "./src/context/files/b.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/context/files sync recursive \\.ts";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/context/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjJkMTNhYTJkNGNlODhiZmM2ZDUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7QUNKYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0phO0FBQ2IsY0FBYywrREFBd0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1REO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY29udGV4dC9maWxlcy9hLnRzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb250ZXh0L2ZpbGVzL2IudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbnRleHQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbnRleHQvZmlsZXMvIHN5bmMgXFwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJhXCIpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiYlwiKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGZpbGVzID0gcmVxdWlyZS5jb250ZXh0KFwiLi9maWxlc1wiLCB0cnVlLCAvXFwudHMvKTtcbi8vIGNvbnN0IGltcG9ydEFsbCA9IChjb250ZXh0TG9hZGVyOiBfX1dlYnBhY2tNb2R1bGVBcGkuUmVxdWlyZUNvbnRleHQpID0+IHtcbi8vICAgLy8gY29udGV4dExvYWRlci5rZXlzKCkuZm9yRWFjaChpZCA9PiBjb25zb2xlLmxvZyhjb250ZXh0TG9hZGVyKGlkKSkpO1xuLy8gICBjb25zb2xlLmxvZyhjb250ZXh0TG9hZGVyKTtcbi8vIH07XG4vLyBpbXBvcnRBbGwoZmlsZXMpO1xuZmlsZXMua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGtleSk7XG59KTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hLnRzXCI6IFwiLi9zcmMvY29udGV4dC9maWxlcy9hLnRzXCIsXG5cdFwiLi9iLnRzXCI6IFwiLi9zcmMvY29udGV4dC9maWxlcy9iLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2NvbnRleHQvZmlsZXMgc3luYyByZWN1cnNpdmUgXFxcXC50c1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==