"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mipd";
exports.ids = ["vendor-chunks/mipd"];
exports.modules = {

/***/ "(ssr)/./node_modules/mipd/dist/esm/store.js":
/*!*********************************************!*\
  !*** ./node_modules/mipd/dist/esm/store.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStore: () => (/* binding */ createStore)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"(ssr)/./node_modules/mipd/dist/esm/utils.js\");\n\nfunction createStore() {\n    const listeners = new Set();\n    let providerDetails = [];\n    const request = () => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.requestProviders)((providerDetail) => {\n        if (providerDetails.some(({ info }) => info.uuid === providerDetail.info.uuid))\n            return;\n        providerDetails = [...providerDetails, providerDetail];\n        listeners.forEach((listener) => listener(providerDetails, { added: [providerDetail] }));\n    });\n    let unwatch = request();\n    return {\n        _listeners() {\n            return listeners;\n        },\n        clear() {\n            listeners.forEach((listener) => listener([], { removed: [...providerDetails] }));\n            providerDetails = [];\n        },\n        destroy() {\n            this.clear();\n            listeners.clear();\n            unwatch();\n        },\n        findProvider({ rdns }) {\n            return providerDetails.find((providerDetail) => providerDetail.info.rdns === rdns);\n        },\n        getProviders() {\n            return providerDetails;\n        },\n        reset() {\n            this.clear();\n            unwatch();\n            unwatch = request();\n        },\n        subscribe(listener, { emitImmediately } = {}) {\n            listeners.add(listener);\n            if (emitImmediately)\n                listener(providerDetails, { added: providerDetails });\n            return () => listeners.delete(listener);\n        },\n    };\n}\n//# sourceMappingURL=store.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWlwZC9kaXN0L2VzbS9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUN2QztBQUNQO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQWdCO0FBQzFDLG9DQUFvQyxNQUFNO0FBQzFDO0FBQ0E7QUFDQSxvRUFBb0UseUJBQXlCO0FBQzdGLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDJEQUEyRCwrQkFBK0I7QUFDMUY7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCLE1BQU07QUFDN0I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw4QkFBOEIsa0JBQWtCLElBQUk7QUFDcEQ7QUFDQTtBQUNBLDRDQUE0Qyx3QkFBd0I7QUFDcEU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFwcC1ib290Y2FtcC1mcm9udGVuZHMvLi9ub2RlX21vZHVsZXMvbWlwZC9kaXN0L2VzbS9zdG9yZS5qcz83ZWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3RQcm92aWRlcnMgfSBmcm9tICcuL3V0aWxzLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yZSgpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgbGV0IHByb3ZpZGVyRGV0YWlscyA9IFtdO1xuICAgIGNvbnN0IHJlcXVlc3QgPSAoKSA9PiByZXF1ZXN0UHJvdmlkZXJzKChwcm92aWRlckRldGFpbCkgPT4ge1xuICAgICAgICBpZiAocHJvdmlkZXJEZXRhaWxzLnNvbWUoKHsgaW5mbyB9KSA9PiBpbmZvLnV1aWQgPT09IHByb3ZpZGVyRGV0YWlsLmluZm8udXVpZCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHByb3ZpZGVyRGV0YWlscyA9IFsuLi5wcm92aWRlckRldGFpbHMsIHByb3ZpZGVyRGV0YWlsXTtcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihwcm92aWRlckRldGFpbHMsIHsgYWRkZWQ6IFtwcm92aWRlckRldGFpbF0gfSkpO1xuICAgIH0pO1xuICAgIGxldCB1bndhdGNoID0gcmVxdWVzdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIF9saXN0ZW5lcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhcigpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoW10sIHsgcmVtb3ZlZDogWy4uLnByb3ZpZGVyRGV0YWlsc10gfSkpO1xuICAgICAgICAgICAgcHJvdmlkZXJEZXRhaWxzID0gW107XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgICAgICAgIHVud2F0Y2goKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmluZFByb3ZpZGVyKHsgcmRucyB9KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdmlkZXJEZXRhaWxzLmZpbmQoKHByb3ZpZGVyRGV0YWlsKSA9PiBwcm92aWRlckRldGFpbC5pbmZvLnJkbnMgPT09IHJkbnMpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm92aWRlcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdmlkZXJEZXRhaWxzO1xuICAgICAgICB9LFxuICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgIHVud2F0Y2goKTtcbiAgICAgICAgICAgIHVud2F0Y2ggPSByZXF1ZXN0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1YnNjcmliZShsaXN0ZW5lciwgeyBlbWl0SW1tZWRpYXRlbHkgfSA9IHt9KSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGlmIChlbWl0SW1tZWRpYXRlbHkpXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIocHJvdmlkZXJEZXRhaWxzLCB7IGFkZGVkOiBwcm92aWRlckRldGFpbHMgfSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0b3JlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mipd/dist/esm/store.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/mipd/dist/esm/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/mipd/dist/esm/utils.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   announceProvider: () => (/* binding */ announceProvider),\n/* harmony export */   requestProviders: () => (/* binding */ requestProviders)\n/* harmony export */ });\n/**\n * Announces an EIP-1193 Provider.\n */\nfunction announceProvider(detail) {\n    const event = new CustomEvent('eip6963:announceProvider', { detail: Object.freeze(detail) });\n    window.dispatchEvent(event);\n    const handler = () => window.dispatchEvent(event);\n    window.addEventListener('eip6963:requestProvider', handler);\n    return () => window.removeEventListener('eip6963:requestProvider', handler);\n}\n/**\n * Watches for EIP-1193 Providers to be announced.\n */\nfunction requestProviders(listener) {\n    const handler = (event) => listener(event.detail);\n    window.addEventListener('eip6963:announceProvider', handler);\n    window.dispatchEvent(new CustomEvent('eip6963:requestProvider'));\n    return () => window.removeEventListener('eip6963:announceProvider', handler);\n}\n//# sourceMappingURL=utils.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWlwZC9kaXN0L2VzbS91dGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0VBQWdFLCtCQUErQjtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXBwLWJvb3RjYW1wLWZyb250ZW5kcy8uL25vZGVfbW9kdWxlcy9taXBkL2Rpc3QvZXNtL3V0aWxzLmpzPzNmMGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBbm5vdW5jZXMgYW4gRUlQLTExOTMgUHJvdmlkZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbm5vdW5jZVByb3ZpZGVyKGRldGFpbCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdlaXA2OTYzOmFubm91bmNlUHJvdmlkZXInLCB7IGRldGFpbDogT2JqZWN0LmZyZWV6ZShkZXRhaWwpIH0pO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4gd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlaXA2OTYzOnJlcXVlc3RQcm92aWRlcicsIGhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZWlwNjk2MzpyZXF1ZXN0UHJvdmlkZXInLCBoYW5kbGVyKTtcbn1cbi8qKlxuICogV2F0Y2hlcyBmb3IgRUlQLTExOTMgUHJvdmlkZXJzIHRvIGJlIGFubm91bmNlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RQcm92aWRlcnMobGlzdGVuZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50KSA9PiBsaXN0ZW5lcihldmVudC5kZXRhaWwpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlaXA2OTYzOmFubm91bmNlUHJvdmlkZXInLCBoYW5kbGVyKTtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2VpcDY5NjM6cmVxdWVzdFByb3ZpZGVyJykpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZWlwNjk2Mzphbm5vdW5jZVByb3ZpZGVyJywgaGFuZGxlcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mipd/dist/esm/utils.js\n");

/***/ })

};
;