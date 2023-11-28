"use strict";
(self["webpackChunkportfoliowebsite"] = self["webpackChunkportfoliowebsite"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  font-family: "Courier New", Courier, monospace;
}

body {
  background-color: #343434;
  width: 100%;
  height: 100%;
}

header {
  position: sticky;
  top: 0;
  background-color: #13274F;
  z-index: 1;
  display: flex;
  justify-content: space-between;
}
header h2 {
  margin-top: 25px;
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
header svg {
  margin-left: 10px;
  margin-top: 5px;
}
header button {
  background-color: #13274F;
  border: none;
  margin-top: 5px;
  cursor: pointer;
}

.header {
  display: flex;
  padding: 25px;
  justify-content: space-around;
}
.header .portrait {
  margin: 5px;
  width: auto;
  height: 321px;
  border-radius: 10px;
}
.header .whoAmI {
  margin-top: 5vh;
  font-family: "Courier New", Courier, monospace;
  color: white;
}
.header .whoAmI p {
  font-size: 20px;
  line-height: 25px;
}

#skills {
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 15px 15px black;
}
#skills h2 {
  margin-left: 43%;
}
#skills img {
  padding: 2px;
  background-color: white;
  width: 3vw;
  height: 6vh;
}
#skills .wrap {
  background-color: white;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
}
#skills .card p {
  text-align: center;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: 1fr;
}
.projects .projectCard {
  padding: 50px;
  display: flex;
}
.projects .projectCard .links img {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 20vw;
}
.projects .projectCard .links .btns {
  display: flex;
  align-items: center;
}
.projects .projectCard .links .btns button {
  cursor: pointer;
  margin: 1vh;
  background-color: #FFBF00;
  border: #FFBF00 1px solid;
  width: 9vw;
  height: 5vh;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
}
.projects .projectCard .links .btns button:hover {
  background-color: #343434;
  color: white;
}
.projects .projectCard .description h2 {
  color: white;
  margin-left: 5vw;
}
.projects .projectCard .description p {
  color: white;
  font-size: 18px;
  margin-left: 5vw;
  margin-top: 2vh;
}

.side {
  display: flex;
  justify-content: flex-end;
}
.side .sideBar {
  width: 25vw;
  height: 100%;
  background-color: #36454F;
  position: absolute;
  display: none;
  z-index: auto;
}
.side .sideBar .remove {
  background-color: #36454F;
  border: none;
  align-self: flex-end;
  cursor: pointer;
}
.side #active {
  animation: openSide 1s;
  display: flex;
  flex-direction: column;
  z-index: 2;
  transform-origin: center right;
}

@keyframes openSide {
  from {
    transform: scaleX(0);
  }
  70% {
    transform: scaleX(1.1);
  }
  to {
    transform: scaleX(1);
  }
}
@media (max-width: 350px) {
  header {
    width: 100%;
  }
  .header {
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .header .portrait {
    height: 160px;
  }
  .header h2 {
    font-size: 24px;
  }
  .header p {
    font-size: 10px;
    line-height: 12px;
  }
  #skills {
    justify-content: center;
  }
  #skills img {
    width: 30px;
    height: 60px;
  }
  #skills h2 {
    display: none;
  }
  .projects {
    grid-template-columns: 1fr;
  }
  .projects .projectCard {
    padding: 25px;
  }
  .projects .links img {
    width: 5vw;
  }
  .projects .btns button {
    font-size: 8px;
    width: 5vw;
    height: 3vh;
  }
  .projects .btns .description {
    margin-left: 20px;
  }
  .projects .btns .description h2 {
    font-size: 16px;
  }
  .projects .btns .description p {
    font-size: 10px;
  }
  .side .sideBar {
    width: 100%;
  }
  .side #active {
    animation: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;EACI,SAAA;EACA,8CAAA;AADJ;;AAKA;EACI,yBAAA;EACA,WAAA;EACA,YAAA;AAFJ;;AAIA;EAMI,gBAAA;EACA,MAAA;EACA,yBAAA;EACA,UAAA;EACA,aAAA;EACA,8BAAA;AANJ;AAJI;EACI,gBAAA;EACD,YAAA;EACA,wEAAA;AAMP;AAEK;EACG,iBAAA;EACA,eAAA;AAAR;AAEI;EACI,yBAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;AAAR;;AAGA;EACI,aAAA;EACA,aAAA;EACA,6BAAA;AAAJ;AAEI;EAEG,WAAA;EACC,WAAA;EACA,aAAA;EACA,mBAAA;AADR;AAGI;EACI,eAAA;EAEA,8CAAA;EACA,YAAA;AAFR;AAGQ;EACI,eAAA;EACA,iBAAA;AADZ;;AAMA;EACI,uBAAA;EACA,aAAA;EACA,sBAAA;EACA,+BAAA;AAHJ;AAII;EACI,gBAAA;AAFR;AAII;EAEI,YAAA;EAGA,uBAAA;EACA,UAAA;EACA,WAAA;AALR;AAOI;EACI,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,6BAAA;AALR;AASQ;EACI,kBAAA;AAPZ;;AAWA;EACI,aAAA;EACA,4DAAA;EACA,uBAAA;AARJ;AASI;EACI,aAAA;EACA,aAAA;AAPR;AAUY;EACI,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AARhB;AAWY;EAgBI,aAAA;EAEA,mBAAA;AAzBhB;AAQgB;EACI,eAAA;EACA,WAAA;EACA,yBAAA;EACA,yBAAA;EACA,UAAA;EACA,WAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;AANpB;AAQgB;EACI,yBAtHb;EAuHa,YAAA;AANpB;AAcQ;EACI,YAAA;EACA,gBAAA;AAZZ;AAcQ;EACI,YAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;AAZZ;;AAiBA;EACI,aAAA;EACA,yBAAA;AAdJ;AAgBA;EACI,WAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACD,aAAA;EACA,aAAA;AAdH;AAeG;EACC,yBAAA;EACA,YAAA;EACA,oBAAA;EACA,eAAA;AAbJ;AAiBA;EACI,sBAAA;EACA,aAAA;EACA,sBAAA;EACD,UAAA;EACC,8BAAA;AAfJ;;AAmBA;EACI;IACE,oBAAA;EAhBJ;EAkBG;IACE,sBAAA;EAhBL;EAkBG;IACG,oBAAA;EAhBN;AACF;AAmBA;EACI;IACI,WAAA;EAjBN;EAmBE;IACI,YAAA;IACA,aAAA;IACA,eAAA;IACA,uBAAA;IACA,mBAAA;EAjBN;EAkBM;IACI,aAAA;EAhBV;EAmBM;IACI,eAAA;EAjBV;EAmBM;IACI,eAAA;IACA,iBAAA;EAjBV;EAoBE;IACI,uBAAA;EAlBN;EAmBM;IAEI,WAAA;IACA,YAAA;EAlBV;EAqBM;IACI,aAAA;EAnBV;EAsBE;IACI,0BAAA;EApBN;EAsBM;IACI,aAAA;EApBV;EAuBU;IACI,UAAA;EArBd;EAyBU;IACI,cAAA;IACA,UAAA;IACA,WAAA;EAvBd;EAyBU;IACI,iBAAA;EAvBd;EAwBc;IACI,eAAA;EAtBlB;EAwBc;IACI,eAAA;EAtBlB;EA4BM;IACI,WAAA;EA1BV;EA4BM;IACI,eAAA;EA1BV;AACF","sourcesContent":[" \n$base: #343434;\n*{\n    margin: 0;\n    font-family: 'Courier New', Courier, monospace;\n   \n}\n \nbody{\n    background-color:#343434;\n    width: 100%;\n    height: 100%;\n}\nheader{\n    h2{\n        margin-top: 25px;\n       color: white;\n       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    }\n    position: sticky;\n    top: 0;\n    background-color: #13274F;\n    z-index: 1;\n    display: flex;\n    justify-content: space-between;\n     svg{\n        margin-left: 10px;\n        margin-top: 5px;\n     }\n    button{\n        background-color: #13274F;\n        border: none;\n        margin-top: 5px;\n        cursor: pointer;\n    }\n}\n.header{\n    display: flex;\n    padding: 25px;\n    justify-content: space-around;\n   \n    .portrait{\n    \n       margin: 5px;\n        width:auto;\n        height: 321px;\n        border-radius: 10px;\n    }\n    .whoAmI{\n        margin-top: 5vh;\n    \n        font-family: 'Courier New', Courier, monospace;\n        color: white;\n        p{\n            font-size: 20px;\n            line-height: 25px;\n            \n        }\n    }\n}\n#skills{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0px 15px 15px black;\n    h2{\n        margin-left: 43%;\n    }\n    img{\n         \n        padding: 2px;\n        \n        \n        background-color: white;\n        width: 3vw;\n        height: 6vh;\n    }\n    .wrap{\n        background-color: white;\n        margin-bottom: 10px;\n        display: flex;\n        justify-content: space-around;\n    }\n    .card{\n      \n        p{\n            text-align: center;\n        }\n    }\n}\n.projects{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    grid-template-rows: 1fr;\n    .projectCard{\n        padding: 50px;\n        display: flex;\n        \n        .links{\n            img{\n                border-radius: 10px;\n                display: flex;\n                flex-direction: column;\n                width: 20vw;\n    \n            }\n            .btns{\n                button{\n                    cursor: pointer;\n                    margin: 1vh;\n                    background-color: #FFBF00;\n                    border: #FFBF00 1px solid;\n                    width: 9vw;\n                    height:5vh;\n                    border-radius: 10px;\n                    font-size: 15px;\n                    font-weight: bold;\n                }\n                button:hover{\n                    background-color: $base;\n                    color: white;\n                }\n                display: flex;\n                \n                align-items: center;\n            }\n        }\n        .description{\n        h2{\n            color: white;\n            margin-left: 5vw;\n        }\n        p{\n            color: white;\n            font-size: 18px;\n            margin-left: 5vw;\n            margin-top: 2vh;\n        }\n    }\n    }\n}\n.side{\n    display: flex;\n    justify-content: flex-end;\n   \n.sideBar{\n    width: 25vw;\n    height:100%;\n    background-color: \t#36454F;\n    position: absolute;\n   display: none;\n   z-index: auto;\n   .remove{\n    background-color: \t#36454F;\n    border: none;\n    align-self: flex-end;\n    cursor: pointer;\n}\n  \n}\n#active{\n    animation: openSide 1s;\n    display: flex;\n    flex-direction: column;\n   z-index: 2;\n    transform-origin: center right;\n}  \n}\n\n@keyframes openSide {\n    from{\n      transform: scaleX(0);\n    }\n     70%{\n       transform: scaleX(1.1);\n     }\n     to{\n        transform: scaleX(1);\n     }\n}\n\n@media (max-width: 350px){\n    header{\n        width: 100%;\n    }\n    .header{\n        padding: 5px;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n        .portrait{\n            height: 160px;\n            \n        }\n        h2{\n            font-size: 24px;\n        }\n        p{\n            font-size: 10px;\n            line-height: 12px;\n        }\n    }\n    #skills{\n        justify-content: center;\n        img{\n            \n            width: 30px;\n            height: 60px;\n        }\n       \n        h2{\n            display: none;\n        }\n    }\n    .projects{\n        grid-template-columns: 1fr;\n        \n        .projectCard{\n            padding: 25px;\n        }\n        .links{\n            img{\n                width: 5vw;\n            }\n        }\n        .btns{\n            button{\n                font-size: 8px;\n                width: 5vw;\n                height: 3vh;\n            }\n            .description{\n                margin-left: 20px;\n                h2{\n                    font-size: 16px;\n                }\n                p{\n                    font-size: 10px;\n                }\n            }\n        }\n    }\n    .side{\n        .sideBar{\n            width: 100%;\n        }\n        #active{\n            animation: none;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tomic_P_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tomic.P.jpg */ "./src/Tomic.P.jpg");
/* harmony import */ var _portrait350px_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portrait350px.png */ "./src/portrait350px.png");
/* harmony import */ var _weatherImg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherImg.png */ "./src/weatherImg.png");
/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills */ "./src/skills.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");







const header = document.querySelector('.header')
const img = document.createElement('img')
const portrait = document.querySelector('.picOfMe')
img.classList.add('portrait')
img.src = _Tomic_P_jpg__WEBPACK_IMPORTED_MODULE_0__
portrait.appendChild(img)
header.appendChild(portrait)
;(0,_skills__WEBPACK_IMPORTED_MODULE_3__["default"])()
;(0,_sidebar__WEBPACK_IMPORTED_MODULE_6__["default"])()
;(0,_project__WEBPACK_IMPORTED_MODULE_4__["default"])(_weatherImg_png__WEBPACK_IMPORTED_MODULE_2__,'https://patrick-tomic.github.io/WeatherAPI/','https://github.com/Patrick-Tomic/WeatherAPI','This application is my first time utilizing a API, I do some simple animations within this project and learned alot through the use of responsive design and animation','Weather Application')


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildProject)
/* harmony export */ });
function buildProject(src, siteLink,ghLink, pInner, head){
    const projects = document.querySelector('.projects')
    const img = document.createElement('img')
    const projectCard = document.createElement('div')
    const links = document.createElement('div')
    const btns = document.createElement('div')
    btns.classList.add('btns')
    links.classList.add('links')
    const p = document.createElement('p')
    let count = 0
    img.src = src
    links.appendChild(img)
    while(count<2){
        const form = document.createElement('form')
        const btn = document.createElement('button')
        btn.type = 'submit'
        switch(count){
            case 0:
                form.action = siteLink
                btn.innerHTML = 'View Live Site'
                form.appendChild(btn)
                btns.appendChild(form)
                count++
                break
            case 1:
                form.action = ghLink
                btn.innerHTML = 'Source Code'
                form.appendChild(btn)
                btns.appendChild(form)
                count++
                break 
        }
    }
    projectCard.classList.add('projectCard')
   links.appendChild(btns)
    p.innerHTML = pInner
   projectCard.appendChild(links)
   const desc = document.createElement('div')
   desc.classList.add('description')
   const h2 = document.createElement('h2')
   h2.innerHTML = head
    desc.appendChild(h2)
    desc.appendChild(p)
    projectCard.appendChild(desc)
    projects.appendChild(projectCard)
    
}


/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildSideBar)
/* harmony export */ });

function buildSideBar(){
    const side = document.querySelector('.side')
    const btn = document.querySelector('.sideBarBtn')
    const removeBtn = document.createElement('button')
    removeBtn.classList.add('remove')
    const sideBar = document.createElement('div')
    sideBar.setAttribute('class','sideBar')
    removeBtn.innerHTML = '<svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="43.6846" height="7.9553" rx="3.97765" transform="matrix(0.74681 0.665037 -0.787811 0.615917 6.26721 1.9906)" fill="white"/> <rect width="42.9248" height="8.08818" rx="4.04409" transform="matrix(-0.678302 0.734783 -0.841244 -0.540656 37.3516 4.37292)" fill="white"/> </svg>'
    btn.addEventListener('click',()=>{
    
       sideBar.setAttribute('id','active')
    })
    removeBtn.addEventListener('click',()=>{
        sideBar.removeAttribute('id','active')
    })
   
    sideBar.appendChild(removeBtn)
    side.appendChild(sideBar)
   
}

/***/ }),

/***/ "./src/skills.js":
/*!***********************!*\
  !*** ./src/skills.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildSkills)
/* harmony export */ });
/* harmony import */ var _java_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./java.png */ "./src/java.png");
/* harmony import */ var _sass_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass.png */ "./src/sass.png");
/* harmony import */ var _css_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css.png */ "./src/css.png");
/* harmony import */ var _html_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html.png */ "./src/html.png");
/* harmony import */ var _js_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js.png */ "./src/js.png");
/* harmony import */ var _python_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./python.png */ "./src/python.png");
/* harmony import */ var _sql_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sql.png */ "./src/sql.png");
/* harmony import */ var _webpack_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webpack.png */ "./src/webpack.png");
/* harmony import */ var _ts_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ts.png */ "./src/ts.png");









function buildSkills(){
    const skills = document.createElement('div')
    skills.classList.add('wrap')
    const wrap = document.getElementById('skills')
    const h2 = document.createElement('h2')
    h2.innerHTML = "My Skillset"
    wrap.appendChild(h2)
    let count = 0
    while(count < 9){
        const img = document.createElement('img')
        const p = document.createElement('p')
        const card = document.createElement('div')
        card.classList.add('card')
        switch(count){
            case 0:
                img.title = 'Java'               
                img.src = _java_png__WEBPACK_IMPORTED_MODULE_0__
                img.alt = 'Java'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 1:
                img.title = 'Python'
                img.src = _python_png__WEBPACK_IMPORTED_MODULE_5__
                img.alt = 'Python'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 2:
                img.title = 'HTML'
                img.src = _html_png__WEBPACK_IMPORTED_MODULE_3__
                img.alt = 'HTML'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 3:
                img.title = 'CSS'
                img.src = _css_png__WEBPACK_IMPORTED_MODULE_2__
                img.alt = 'CSS'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 4:
                img.title = 'JavaScript'
                img.style.marginLeft = '25px'
                img.src = _js_png__WEBPACK_IMPORTED_MODULE_4__
                img.alt = 'JavaScript'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 5:
                img.title = 'mySQL'
                img.src = _sql_png__WEBPACK_IMPORTED_MODULE_6__
                img.alt = 'mySQL'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 6:
                img.title = 'Sass'
                img.src = _sass_png__WEBPACK_IMPORTED_MODULE_1__
                img.alt = 'Sass'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 7:
                img.title = 'Webpack'
                img.src = _webpack_png__WEBPACK_IMPORTED_MODULE_7__
                img.alt = 'Webpack'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 8:
                img.title = 'TypeScript'
                img.src = _ts_png__WEBPACK_IMPORTED_MODULE_8__
                img.alt = 'Typescript'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
        }
        wrap.appendChild(skills)
    }
}

/***/ }),

/***/ "./src/Tomic.P.jpg":
/*!*************************!*\
  !*** ./src/Tomic.P.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b027cdb1c4ced6d8decd.jpg";

/***/ }),

/***/ "./src/css.png":
/*!*********************!*\
  !*** ./src/css.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "495a79bfbc4ced7c7c0e.png";

/***/ }),

/***/ "./src/html.png":
/*!**********************!*\
  !*** ./src/html.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff3cf75e3b7cbb4ea77c.png";

/***/ }),

/***/ "./src/java.png":
/*!**********************!*\
  !*** ./src/java.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ddf8676bd569fe01ab44.png";

/***/ }),

/***/ "./src/js.png":
/*!********************!*\
  !*** ./src/js.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93ec07e33231ed6b3af0.png";

/***/ }),

/***/ "./src/portrait350px.png":
/*!*******************************!*\
  !*** ./src/portrait350px.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c59130f213d60961332.png";

/***/ }),

/***/ "./src/python.png":
/*!************************!*\
  !*** ./src/python.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82efb64f8698a267f8bf.png";

/***/ }),

/***/ "./src/sass.png":
/*!**********************!*\
  !*** ./src/sass.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb5ba121984777605d5c.png";

/***/ }),

/***/ "./src/sql.png":
/*!*********************!*\
  !*** ./src/sql.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c9e418452a111f0d760.png";

/***/ }),

/***/ "./src/ts.png":
/*!********************!*\
  !*** ./src/ts.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e441eed78ba11c335df.png";

/***/ }),

/***/ "./src/weatherImg.png":
/*!****************************!*\
  !*** ./src/weatherImg.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "718a17d63717986baff4.png";

/***/ }),

/***/ "./src/webpack.png":
/*!*************************!*\
  !*** ./src/webpack.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47692505d122dbcae490.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9DQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvc2tpbGxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmhlYWRlciBoMiB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbmhlYWRlciBzdmcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuaGVhZGVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5oZWFkZXIgLnBvcnRyYWl0IHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDMyMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmhlYWRlciAud2hvQW1JIHtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oZWFkZXIgLndob0FtSSBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuI3NraWxscyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAwcHggMTVweCAxNXB4IGJsYWNrO1xufVxuI3NraWxscyBoMiB7XG4gIG1hcmdpbi1sZWZ0OiA0MyU7XG59XG4jc2tpbGxzIGltZyB7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzdnc7XG4gIGhlaWdodDogNnZoO1xufVxuI3NraWxscyAud3JhcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbiNza2lsbHMgLmNhcmQgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2plY3RzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQge1xuICBwYWRkaW5nOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDIwdnc7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCRjAwO1xuICBib3JkZXI6ICNGRkJGMDAgMXB4IHNvbGlkO1xuICB3aWR0aDogOXZ3O1xuICBoZWlnaHQ6IDV2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIC5idG5zIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmRlc2NyaXB0aW9uIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogNXZ3O1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAuZGVzY3JpcHRpb24gcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBtYXJnaW4tdG9wOiAydmg7XG59XG5cbi5zaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5zaWRlIC5zaWRlQmFyIHtcbiAgd2lkdGg6IDI1dnc7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDU0RjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiBhdXRvO1xufVxuLnNpZGUgLnNpZGVCYXIgLnJlbW92ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjQ1NEY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zaWRlICNhY3RpdmUge1xuICBhbmltYXRpb246IG9wZW5TaWRlIDFzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XG59XG5cbkBrZXlmcmFtZXMgb3BlblNpZGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuaGVhZGVyIC5wb3J0cmFpdCB7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgfVxuICAuaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIH1cbiAgI3NraWxscyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgI3NraWxscyBpbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuICAjc2tpbGxzIGgyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wcm9qZWN0cyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgfVxuICAucHJvamVjdHMgLmxpbmtzIGltZyB7XG4gICAgd2lkdGg6IDV2dztcbiAgfVxuICAucHJvamVjdHMgLmJ0bnMgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICB3aWR0aDogNXZ3O1xuICAgIGhlaWdodDogM3ZoO1xuICB9XG4gIC5wcm9qZWN0cyAuYnRucyAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIC5wcm9qZWN0cyAuYnRucyAuZGVzY3JpcHRpb24gaDIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAucHJvamVjdHMgLmJ0bnMgLmRlc2NyaXB0aW9uIHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuc2lkZSAuc2lkZUJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNpZGUgI2FjdGl2ZSB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFNBQUE7RUFDQSw4Q0FBQTtBQURKOztBQUtBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUlBO0VBTUksZ0JBQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBTko7QUFKSTtFQUNJLGdCQUFBO0VBQ0QsWUFBQTtFQUNBLHdFQUFBO0FBTVA7QUFFSztFQUNHLGlCQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRUk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUFSOztBQUdBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUFKO0FBRUk7RUFFRyxXQUFBO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURSO0FBR0k7RUFDSSxlQUFBO0VBRUEsOENBQUE7RUFDQSxZQUFBO0FBRlI7QUFHUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQURaOztBQU1BO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtBQUhKO0FBSUk7RUFDSSxnQkFBQTtBQUZSO0FBSUk7RUFFSSxZQUFBO0VBR0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUxSO0FBT0k7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBTFI7QUFTUTtFQUNJLGtCQUFBO0FBUFo7O0FBV0E7RUFDSSxhQUFBO0VBQ0EsNERBQUE7RUFDQSx1QkFBQTtBQVJKO0FBU0k7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQVBSO0FBVVk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFSaEI7QUFXWTtFQWdCSSxhQUFBO0VBRUEsbUJBQUE7QUF6QmhCO0FBUWdCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQU5wQjtBQVFnQjtFQUNJLHlCQXRIYjtFQXVIYSxZQUFBO0FBTnBCO0FBY1E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFaWjtBQWNRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFaWjs7QUFpQkE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFkSjtBQWdCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNELGFBQUE7RUFDQSxhQUFBO0FBZEg7QUFlRztFQUNDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQWJKO0FBaUJBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDRCxVQUFBO0VBQ0MsOEJBQUE7QUFmSjs7QUFtQkE7RUFDSTtJQUNFLG9CQUFBO0VBaEJKO0VBa0JHO0lBQ0Usc0JBQUE7RUFoQkw7RUFrQkc7SUFDRyxvQkFBQTtFQWhCTjtBQUNGO0FBbUJBO0VBQ0k7SUFDSSxXQUFBO0VBakJOO0VBbUJFO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQWpCTjtFQWtCTTtJQUNJLGFBQUE7RUFoQlY7RUFtQk07SUFDSSxlQUFBO0VBakJWO0VBbUJNO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VBakJWO0VBb0JFO0lBQ0ksdUJBQUE7RUFsQk47RUFtQk07SUFFSSxXQUFBO0lBQ0EsWUFBQTtFQWxCVjtFQXFCTTtJQUNJLGFBQUE7RUFuQlY7RUFzQkU7SUFDSSwwQkFBQTtFQXBCTjtFQXNCTTtJQUNJLGFBQUE7RUFwQlY7RUF1QlU7SUFDSSxVQUFBO0VBckJkO0VBeUJVO0lBQ0ksY0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VBdkJkO0VBeUJVO0lBQ0ksaUJBQUE7RUF2QmQ7RUF3QmM7SUFDSSxlQUFBO0VBdEJsQjtFQXdCYztJQUNJLGVBQUE7RUF0QmxCO0VBNEJNO0lBQ0ksV0FBQTtFQTFCVjtFQTRCTTtJQUNJLGVBQUE7RUExQlY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIgXFxuJGJhc2U6ICMzNDM0MzQ7XFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgIFxcbn1cXG4gXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzQzNDM0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5oZWFkZXJ7XFxuICAgIGgye1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIH1cXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICBzdmd7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgIH1cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICBcXG4gICAgLnBvcnRyYWl0e1xcbiAgICBcXG4gICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICB3aWR0aDphdXRvO1xcbiAgICAgICAgaGVpZ2h0OiAzMjFweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG4gICAgLndob0FtSXtcXG4gICAgICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgXFxuICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuI3NraWxsc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDE1cHggYmxhY2s7XFxuICAgIGgye1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQzJTtcXG4gICAgfVxcbiAgICBpbWd7XFxuICAgICAgICAgXFxuICAgICAgICBwYWRkaW5nOiAycHg7XFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICB3aWR0aDogM3Z3O1xcbiAgICAgICAgaGVpZ2h0OiA2dmg7XFxuICAgIH1cXG4gICAgLndyYXB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIH1cXG4gICAgLmNhcmR7XFxuICAgICAgXFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG4ucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIC5wcm9qZWN0Q2FyZHtcXG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgXFxuICAgICAgICAubGlua3N7XFxuICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMjB2dztcXG4gICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5idG5ze1xcbiAgICAgICAgICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDF2aDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkJGMDA7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICNGRkJGMDAgMXB4IHNvbGlkO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDl2dztcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo1dmg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVye1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2U7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmRlc2NyaXB0aW9ue1xcbiAgICAgICAgaDJ7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1dnc7XFxuICAgICAgICB9XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAydmg7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgfVxcbn1cXG4uc2lkZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICBcXG4uc2lkZUJhcntcXG4gICAgd2lkdGg6IDI1dnc7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcXHQjMzY0NTRGO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgZGlzcGxheTogbm9uZTtcXG4gICB6LWluZGV4OiBhdXRvO1xcbiAgIC5yZW1vdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IFxcdCMzNjQ1NEY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuICBcXG59XFxuI2FjdGl2ZXtcXG4gICAgYW5pbWF0aW9uOiBvcGVuU2lkZSAxcztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICB6LWluZGV4OiAyO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XFxufSAgXFxufVxcblxcbkBrZXlmcmFtZXMgb3BlblNpZGUge1xcbiAgICBmcm9te1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB9XFxuICAgICA3MCV7XFxuICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMSk7XFxuICAgICB9XFxuICAgICB0b3tcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMzUwcHgpe1xcbiAgICBoZWFkZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAuaGVhZGVye1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC5wb3J0cmFpdHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgaDJ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgI3NraWxsc3tcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgaW1ne1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIH1cXG4gICAgICAgXFxuICAgICAgICBoMntcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5wcm9qZWN0c3tcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgXFxuICAgICAgICAucHJvamVjdENhcmR7XFxuICAgICAgICAgICAgcGFkZGluZzogMjVweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5saW5rc3tcXG4gICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA1dnc7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmJ0bnN7XFxuICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDV2dztcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzdmg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgICAgICAgICAgICAgIGgye1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIHB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLnNpZGV7XFxuICAgICAgICAuc2lkZUJhcntcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgICAgICNhY3RpdmV7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHBvcnRhaXQgZnJvbSAnLi9Ub21pYy5QLmpwZydcbmltcG9ydCBzbWFsbGVyUG9ydHJhaXQgZnJvbSAnLi9wb3J0cmFpdDM1MHB4LnBuZydcbmltcG9ydCB3ZWF0aGVyIGZyb20gJy4vd2VhdGhlckltZy5wbmcnXG5pbXBvcnQgYnVpbGRTa2lsbHMgZnJvbSAnLi9za2lsbHMnXG5pbXBvcnQgYnVpbGRQcm9qZWN0IGZyb20gJy4vcHJvamVjdCdcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IGJ1aWxkU2lkZUJhciBmcm9tICcuL3NpZGViYXInXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJylcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5jb25zdCBwb3J0cmFpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWNPZk1lJylcbmltZy5jbGFzc0xpc3QuYWRkKCdwb3J0cmFpdCcpXG5pbWcuc3JjID0gcG9ydGFpdFxucG9ydHJhaXQuYXBwZW5kQ2hpbGQoaW1nKVxuaGVhZGVyLmFwcGVuZENoaWxkKHBvcnRyYWl0KVxuYnVpbGRTa2lsbHMoKVxuYnVpbGRTaWRlQmFyKClcbmJ1aWxkUHJvamVjdCh3ZWF0aGVyLCdodHRwczovL3BhdHJpY2stdG9taWMuZ2l0aHViLmlvL1dlYXRoZXJBUEkvJywnaHR0cHM6Ly9naXRodWIuY29tL1BhdHJpY2stVG9taWMvV2VhdGhlckFQSScsJ1RoaXMgYXBwbGljYXRpb24gaXMgbXkgZmlyc3QgdGltZSB1dGlsaXppbmcgYSBBUEksIEkgZG8gc29tZSBzaW1wbGUgYW5pbWF0aW9ucyB3aXRoaW4gdGhpcyBwcm9qZWN0IGFuZCBsZWFybmVkIGFsb3QgdGhyb3VnaCB0aGUgdXNlIG9mIHJlc3BvbnNpdmUgZGVzaWduIGFuZCBhbmltYXRpb24nLCdXZWF0aGVyIEFwcGxpY2F0aW9uJylcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkUHJvamVjdChzcmMsIHNpdGVMaW5rLGdoTGluaywgcElubmVyLCBoZWFkKXtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ0bnMuY2xhc3NMaXN0LmFkZCgnYnRucycpXG4gICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnbGlua3MnKVxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsZXQgY291bnQgPSAwXG4gICAgaW1nLnNyYyA9IHNyY1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKGltZylcbiAgICB3aGlsZShjb3VudDwyKXtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidG4udHlwZSA9ICdzdWJtaXQnXG4gICAgICAgIHN3aXRjaChjb3VudCl7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZm9ybS5hY3Rpb24gPSBzaXRlTGlua1xuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSAnVmlldyBMaXZlIFNpdGUnXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidG4pXG4gICAgICAgICAgICAgICAgYnRucy5hcHBlbmRDaGlsZChmb3JtKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGZvcm0uYWN0aW9uID0gZ2hMaW5rXG4gICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9ICdTb3VyY2UgQ29kZSdcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bilcbiAgICAgICAgICAgICAgICBidG5zLmFwcGVuZENoaWxkKGZvcm0pXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrIFxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDYXJkJylcbiAgIGxpbmtzLmFwcGVuZENoaWxkKGJ0bnMpXG4gICAgcC5pbm5lckhUTUwgPSBwSW5uZXJcbiAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGxpbmtzKVxuICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJylcbiAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgaDIuaW5uZXJIVE1MID0gaGVhZFxuICAgIGRlc2MuYXBwZW5kQ2hpbGQoaDIpXG4gICAgZGVzYy5hcHBlbmRDaGlsZChwKVxuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGRlc2MpXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpXG4gICAgXG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkU2lkZUJhcigpe1xuICAgIGNvbnN0IHNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZScpXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXJCdG4nKVxuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2lkZUJhci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnc2lkZUJhcicpXG4gICAgcmVtb3ZlQnRuLmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMzlcIiBoZWlnaHQ9XCIzNlwiIHZpZXdCb3g9XCIwIDAgMzkgMzZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cmVjdCB3aWR0aD1cIjQzLjY4NDZcIiBoZWlnaHQ9XCI3Ljk1NTNcIiByeD1cIjMuOTc3NjVcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC43NDY4MSAwLjY2NTAzNyAtMC43ODc4MTEgMC42MTU5MTcgNi4yNjcyMSAxLjk5MDYpXCIgZmlsbD1cIndoaXRlXCIvPiA8cmVjdCB3aWR0aD1cIjQyLjkyNDhcIiBoZWlnaHQ9XCI4LjA4ODE4XCIgcng9XCI0LjA0NDA5XCIgdHJhbnNmb3JtPVwibWF0cml4KC0wLjY3ODMwMiAwLjczNDc4MyAtMC44NDEyNDQgLTAuNTQwNjU2IDM3LjM1MTYgNC4zNzI5MilcIiBmaWxsPVwid2hpdGVcIi8+IDwvc3ZnPidcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgXG4gICAgICAgc2lkZUJhci5zZXRBdHRyaWJ1dGUoJ2lkJywnYWN0aXZlJylcbiAgICB9KVxuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgc2lkZUJhci5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywnYWN0aXZlJylcbiAgICB9KVxuICAgXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChyZW1vdmVCdG4pXG4gICAgc2lkZS5hcHBlbmRDaGlsZChzaWRlQmFyKVxuICAgXG59IiwiaW1wb3J0IGphdmEgZnJvbSAnLi9qYXZhLnBuZydcbmltcG9ydCBzYXNzIGZyb20gJy4vc2Fzcy5wbmcnXG5pbXBvcnQgY3NzIGZyb20gJy4vY3NzLnBuZydcbmltcG9ydCBodG1sIGZyb20gJy4vaHRtbC5wbmcnXG5pbXBvcnQganMgZnJvbSAgJy4vanMucG5nJ1xuaW1wb3J0IHB5IGZyb20gJy4vcHl0aG9uLnBuZydcbmltcG9ydCBzcWwgZnJvbSAnLi9zcWwucG5nJ1xuaW1wb3J0IHdwIGZyb20gJy4vd2VicGFjay5wbmcnXG5pbXBvcnQgdHMgZnJvbSAnLi90cy5wbmcnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFNraWxscygpe1xuICAgIGNvbnN0IHNraWxscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2tpbGxzLmNsYXNzTGlzdC5hZGQoJ3dyYXAnKVxuICAgIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2tpbGxzJylcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBoMi5pbm5lckhUTUwgPSBcIk15IFNraWxsc2V0XCJcbiAgICB3cmFwLmFwcGVuZENoaWxkKGgyKVxuICAgIGxldCBjb3VudCA9IDBcbiAgICB3aGlsZShjb3VudCA8IDkpe1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgICAgICBzd2l0Y2goY291bnQpe1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdKYXZhJyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBqYXZhXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdKYXZhJ1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdQeXRob24nXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHB5XG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdQeXRob24nXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ0hUTUwnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGh0bWxcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0hUTUwnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ0NTUydcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gY3NzXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdDU1MnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ0phdmFTY3JpcHQnXG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpbkxlZnQgPSAnMjVweCdcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0ganNcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0phdmFTY3JpcHQnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ215U1FMJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBzcWxcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ215U1FMJ1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdTYXNzJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBzYXNzXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdTYXNzJ1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdXZWJwYWNrJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSB3cFxuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnV2VicGFjaydcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnVHlwZVNjcmlwdCdcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gdHNcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ1R5cGVzY3JpcHQnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZChza2lsbHMpXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==