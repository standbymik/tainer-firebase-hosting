webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/firestore/db.js":
/*!************************************!*\
  !*** ./components/firestore/db.js ***!
  \************************************/
/*! exports provided: loadDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDB", function() { return loadDB; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "../../node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/firestore */ "../../node_modules/@firebase/firestore/dist/index.cjs.js");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);


var loadDB = function loadDB() {
  try {
    var config = {
      apiKey: "xxx",
      authDomain: "xxx",
      databaseURL: "xxx",
      projectId: "xxx",
      storageBucket: "xxx",
      messagingSenderId: "xxx",
      appId: "1:64134606044:web:27f272852e9bf6f2"
    };

    if (!_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
      _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
    }
  } catch (err) {
    console.log(err.message);
  }

  return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a;
};

/***/ })

})
//# sourceMappingURL=index.js.8003266893a4f7b0ed06.hot-update.js.map