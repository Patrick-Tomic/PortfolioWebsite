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
  box-shadow: 0px 5px 5px white;
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

.skills {
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 15px 15px black;
}
.skills h2 {
  margin-left: 43%;
}
.skills .wrap {
  background-color: white;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
.skills .card {
  display: flex;
  flex-direction: column;
}
.skills .card img {
  padding: 2px;
  background-color: white;
  width: 3vw;
  height: 6vh;
}

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
.side .sideBar .btnDiv {
  display: flex;
}
.side .sideBar .btnDiv .btn {
  cursor: pointer;
  margin-top: 15px;
  align-self: flex-start;
  border: none;
  background-color: #36454F;
  font-size: 20px;
  color: white;
}
.side .sideBar .btnDiv .btn:hover {
  color: #FFBF00;
}
.side #active {
  animation: openSide 1s;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  transform-origin: center right;
}

main .bio {
  display: flex;
  justify-content: center;
}
main .bio p {
  border: 5px solid #13274F;
  padding: 2vh 5vw;
  font-size: 18px;
  color: black;
  width: 20vw;
}
main .quote {
  margin-left: 30vw;
  margin-top: 2vh;
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
@media (max-width: 1000px) {
  .skills .card img {
    width: 4vw;
    height: 6vh;
  }
}
@media (max-width: 350px) {
  header {
    width: 350px;
  }
  .header {
    width: 350px;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
  }
  .header .portrait {
    margin-top: 5vh;
    height: 160px;
  }
  .header h2 {
    margin-left: 25px;
    font-size: 24px;
  }
  .header p {
    margin-left: 25px;
    font-size: 10px;
    line-height: 12px;
  }
  .skills {
    width: 350px;
  }
  .skills .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    justify-content: space-around;
  }
  .skills .wrap .card img {
    width: 40px;
    height: 40px;
  }
  .skills h2 {
    display: none;
  }
  .projects {
    grid-template-columns: 1fr;
  }
  .projects .projectCard {
    flex-direction: column;
    padding: 25px;
  }
  .projects .projectCard .links {
    margin-left: 10vw;
  }
  .projects .projectCard .links img {
    width: 250px;
    height: auto;
  }
  .projects .projectCard .links .btns button {
    width: 40vw;
    height: 40px;
    font-weight: normal;
  }
  .projects .projectCard .description h2 {
    margin-left: 15vw;
    color: #FFBF00;
  }
  .projects .description {
    margin-left: 20px;
  }
  .projects .description h2 {
    font-size: 16px;
  }
  .projects .description p {
    font-size: 10px;
  }
  .side .sideBar {
    width: 350px;
  }
  .side #active {
    animation: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":[" \n$base: #343434;\n*{\n    margin: 0;\n    font-family: 'Courier New', Courier, monospace;\n   \n}\n \nbody{\n    background-color:#343434;\n    width: 100%;\n    height: 100%;\n     \n}\nheader{\n    box-shadow: 0px 5px 5px white;\n    h2{\n        margin-top: 25px;\n       color: white;\n       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    }\n    position: sticky;\n    top: 0;\n    background-color: #13274F;\n    z-index: 1;\n    display: flex;\n    justify-content: space-between;\n     svg{\n        margin-left: 10px;\n        margin-top: 5px;\n     }\n    button{\n        background-color: #13274F;\n        border: none;\n        margin-top: 5px;\n        cursor: pointer;\n    }\n}\n.header{\n    display: flex;\n    padding: 25px;\n    justify-content: space-around;\n   \n    .portrait{\n    \n       margin: 5px;\n        width:auto;\n        height: 321px;\n        border-radius: 10px;\n    }\n    .whoAmI{\n        margin-top: 5vh;\n    \n        font-family: 'Courier New', Courier, monospace;\n        color: white;\n        p{\n            font-size: 20px;\n            line-height: 25px;\n            \n        }\n    }\n}\n.skills{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0px 15px 15px black;\n    h2{\n        margin-left: 43%;\n    }\n\n    .wrap{\n        \n        background-color: white;\n        margin-bottom: 10px;\n        display: grid;\n        grid-template-columns: repeat(auto-fit,minmax(150px, 1fr));\n         \n    \n        \n    }\n    .card{\n        display: flex;\n        flex-direction: column;\n        img{\n         \n            padding: 2px;\n            \n            \n            background-color: white;\n            width: 3vw;\n            height: 6vh;\n        }\n         \n    }\n}\n.projects{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    .projectCard{\n       \n        padding: 50px;\n        display: flex;\n        \n        .links{\n            img{\n                border-radius: 10px;\n                display: flex;\n                flex-direction: column;\n                width: 20vw;\n    \n            }\n            .btns{\n                button{\n                    cursor: pointer;\n                    margin: 1vh;\n                    background-color: #FFBF00;\n                    border: #FFBF00 1px solid;\n                    width: 9vw;\n                    height:5vh;\n                    border-radius: 10px;\n                    font-size: 15px;\n                    font-weight: bold;\n                }\n                button:hover{\n                    background-color: $base;\n                    color: white;\n                }\n                display: flex;\n                \n                align-items: center;\n            }\n        }\n        .description{\n        h2{\n            color: white;\n            margin-left: 5vw;\n        }\n        p{\n             \n            color: white;\n            font-size: 18px;\n            margin-left: 5vw;\n            margin-top: 2vh;\n        }\n    }\n    }\n}\n.side{\n    display: flex;\n    justify-content: flex-end;\n   \n  \n   \n.sideBar{\n    width: 25vw;\n  \n    height: 100%;\n    background-color: \t#36454F;\n    position: absolute;\n   display: none;\n   z-index: auto;\n   .remove{\n    background-color: \t#36454F;\n    border: none;\n    align-self: flex-end;\n    cursor: pointer;\n}\n.btnDiv{\n    display: flex;\n     \n    .btn{\n        cursor: pointer;\n        margin-top: 15px;\n        align-self: flex-start;\n        border: none;\n        background-color: \t#36454F;\n        font-size: 20px;\n        color: white;\n    }\n    .btn:hover{\n        color:  #FFBF00;\n    }\n}\n\n  \n}\n#active{\n    animation: openSide 1s;\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n   z-index: 2;\n    transform-origin: center right;\n  \n    \n}  \n}\n\nmain{\n    \n.bio{\n    display: flex;\n    justify-content: center;\n    p{\n       border: 5px solid #13274F;\n       \n        padding: 2vh 5vw;\n        font-size: 18px;\n        color: black;\n        width: 20vw;\n    }\n}\n.quote{\n  margin-left: 30vw;\n  margin-top: 2vh;\n}\n}\n\n@keyframes openSide {\n    from{\n      transform: scaleX(0);\n    }\n     70%{\n       transform: scaleX(1.1);\n     }\n     to{\n        transform: scaleX(1);\n     }\n}\n@media (max-width: 1000px){\n    .skills{\n        .card{\n        img{\n            width: 4vw;\n            height: 6vh;\n        }\n    }\n}\n}\n\n@media (max-width: 350px){\n   \n    header{\n        width: 350px;\n    }\n    .header{\n        width: 350px;\n         \n        padding: 5px;\n        display: flex;\n        flex-wrap: wrap;\n         \n        .portrait{\n            margin-top: 5vh;\n            height: 160px;\n            \n        }\n        h2{\n            margin-left: 25px;\n            font-size: 24px;\n        }\n        p{\n            margin-left: 25px;\n            font-size: 10px;\n            line-height: 12px;\n        }\n    }\n    .skills{\n      \n       width: 350px;\n        \n    .wrap{\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n        justify-content: space-around;\n\n        .card{\n             \n            \n            img{\n            width: 40px;\n            height: 40px;\n        }\n    }\n}\n        h2{\n            display: none;\n        }\n    }\n    .projects{\n        grid-template-columns: 1fr;\n        \n        .projectCard{\n            flex-direction: column;\n            .links{\n                margin-left: 10vw;\n                img{\n                   width: 250px;\n                   height: auto;\n                }\n                .btns{\n                button{\n                    width: 40vw;\n                    height: 40px;\n                  \n                    font-weight: normal;\n                }\n                }\n            }\n            .description{\n                h2{\n                    margin-left: 15vw;\n                    color:  #FFBF00;\n                }\n            }\n             \n           padding: 25px;     \n              \n            \n        }\n        \n      \n            .description{\n                margin-left: 20px;\n                h2{\n                    font-size: 16px;\n                }\n                p{\n                    font-size: 10px;\n                }\n            }\n        \n    }\n    .side{\n        .sideBar{\n            width: 350px;\n        }\n        #active{\n            animation: none;\n        }\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildAboutMe)
/* harmony export */ });
function buildAboutMe(){
    const main = document.querySelector('main')
    const bio = document.createElement('div')
    const title = document.createElement('h2')
    title.innerHTML = `There is some good in this world<br> and it's worth fighting for.    -J.R.R Tolkien `
    title.classList.add('quote')
    bio.classList.add('bio')
    const summary = document.createElement('p')
    summary.innerHTML = 'My family is originally from Bosnia and the only family that lives in the states is my mother and sister. When I was in highschool I was unsure what I wanted to do with my life until senior year when I got into APCS and learned Java. I quickly learned it was what I wanted to do for majority of my life. I always loved building since I was a kid, and programming was exactly what I feel like I was waiting to come my way as it instantly clicked. I try to keep myself as busy as possible day in and day out, and try to think of programming as my number one priority. Hoping to eventually start my own company that could branch out into variety of work. I am building great connections with people and trying to help as many as I can. I have a beautiful girlfriend that I love with my whole heart and we share a townhome with two dogs named Delilah and Nemo and my brother Dean.'
    bio.appendChild(summary)
    main.appendChild(title)
    main.appendChild(bio)
}

/***/ }),

/***/ "./src/buildMain.js":
/*!**************************!*\
  !*** ./src/buildMain.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMain)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _pics_weatherImg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pics/weatherImg.png */ "./src/pics/weatherImg.png");
/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills */ "./src/skills.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");




function buildMain(){
(0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_skills__WEBPACK_IMPORTED_MODULE_2__["default"])()
 
;(0,_project__WEBPACK_IMPORTED_MODULE_3__["default"])(_pics_weatherImg_png__WEBPACK_IMPORTED_MODULE_1__,'https://patrick-tomic.github.io/WeatherAPI/','https://github.com/Patrick-Tomic/WeatherAPI','This application is my first time utilizing a API, I do some simple animations within this project and learned alot through the use of responsive design and animation','Weather Application')
}
 


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildHeader)
/* harmony export */ });
/* harmony import */ var _pics_Tomic_P_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pics/Tomic.P.jpg */ "./src/pics/Tomic.P.jpg");

function buildHeader(){
    const header = document.createElement('div')
header.classList.add('header')
const img = document.createElement('img')
const portrait = document.createElement('div')
portrait.classList.add('picOfMe')
img.classList.add('portrait')
img.src = _pics_Tomic_P_jpg__WEBPACK_IMPORTED_MODULE_0__
portrait.appendChild(img)
header.appendChild(portrait)
const whoAmI = document.createElement('div')
whoAmI.classList.add('whoAmI')
const h2 = document.createElement('h2')
h2.innerHTML = 'My name is Patrick Emanuel Tomic'
whoAmI.appendChild(h2)
const p = document.createElement('p')
p.innerHTML = 'I am a student at the University of South Florida and I graduate in the Spring of 2024<br>with a Bachelors degree in Information Science<br>I am a man with alot of ambition to better the world, and am the first of my family to be<br>born in America. I spend as much time as I can learning how to develop websites everyday<br>It is not just fun for me but brings immense satisfaction when I can build and design something<br>that I know is good. I love helping people, and I am looking for a opportunity to show <br>my skillset and learn through others'
whoAmI.appendChild(p)
header.appendChild(whoAmI)
const main = document.querySelector('main')
main.appendChild(header)
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _buildMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildMain */ "./src/buildMain.js");



(0,_buildMain__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])()

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
    
    const main = document.querySelector('main')
    let projects = document.querySelector('.projects')
    if(main.contains(projects)==true){
    
        
    }else{
        console.log(false)
        projects = document.createElement('div')
        projects.classList.add('projects')
    }
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
    main.appendChild(projects)
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
/* harmony import */ var _buildMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildMain */ "./src/buildMain.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");


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
   const homeDiv = document.createElement('div')
   homeDiv.classList.add('btnDiv')
const p = document.createElement('p')
p.innerHTML = '<svg width="40" height="40" viewBox="0 0 183 150" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="41" y="50" width="100" height="100" rx="10" fill="#FFBF00"/> <path d="M84.626 6.50611C88.482 2.85646 94.518 2.85645 98.374 6.5061L152.502 57.7372C159.069 63.9529 154.671 75 145.628 75H37.3717C28.3295 75 23.9305 63.9529 30.4977 57.7372L84.626 6.50611Z" fill="#FFBF00"/><path d="M74 106C74 100.477 78.4772 96 84 96H98C103.523 96 108 100.477 108 106V150H74V106Z" fill="black"/></svg>'
   const home = document.createElement('button')
   const main = document.querySelector('main')
    home.innerHTML = 'Home'
    home.classList.add('btn')
    const body = document.querySelector('body')
    home.addEventListener('click',()=>{
        main.innerHTML = ''
        body.style.backgroundColor = '#343434'
        ;(0,_buildMain__WEBPACK_IMPORTED_MODULE_0__["default"])()
    })
    homeDiv.appendChild(home)
    homeDiv.appendChild(p)
    sideBar.appendChild(homeDiv)
    const aboutDiv = document.createElement('div')
    aboutDiv.classList.add('btnDiv')
     const aboutP = document.createElement('p')
     const aboutBtn = document.createElement('button')
     aboutBtn.addEventListener('click',()=>{
        main.innerHTML = ''
        body.style.backgroundColor = '#F4BB44'
        ;(0,_about__WEBPACK_IMPORTED_MODULE_1__["default"])()
     })
     aboutBtn.innerHTML = 'About Me'
     aboutBtn.classList.add('btn')
     aboutDiv.appendChild(aboutBtn)
     aboutDiv.appendChild(aboutP)
     sideBar.appendChild(aboutDiv)
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
/* harmony import */ var _pics_java_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pics/java.png */ "./src/pics/java.png");
/* harmony import */ var _pics_sass_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pics/sass.png */ "./src/pics/sass.png");
/* harmony import */ var _pics_css_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pics/css.png */ "./src/pics/css.png");
/* harmony import */ var _pics_html_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pics/html.png */ "./src/pics/html.png");
/* harmony import */ var _pics_js_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pics/js.png */ "./src/pics/js.png");
/* harmony import */ var _pics_python_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pics/python.png */ "./src/pics/python.png");
/* harmony import */ var _pics_sql_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pics/sql.png */ "./src/pics/sql.png");
/* harmony import */ var _pics_webpack_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pics/webpack.png */ "./src/pics/webpack.png");
/* harmony import */ var _pics_ts_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pics/ts.png */ "./src/pics/ts.png");









function buildSkills(){
    const wrap = document.createElement('div')
    const main = document.querySelector('main')
    wrap.classList.add('skills')
    const skills = document.createElement('div')
    skills.classList.add('wrap')
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
                img.src = _pics_java_png__WEBPACK_IMPORTED_MODULE_0__
                img.alt = 'Java'
                p.innerHTML = img.title
                p.style.marginLeft = '10px'
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 1:
                img.title = 'Python'
                img.src = _pics_python_png__WEBPACK_IMPORTED_MODULE_5__
                img.alt = 'Python'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 2:
                img.title = 'HTML'
                img.src = _pics_html_png__WEBPACK_IMPORTED_MODULE_3__
                p.style.marginLeft = '11px'
                img.alt = 'HTML'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 3:
                img.title = 'CSS'
                img.src = _pics_css_png__WEBPACK_IMPORTED_MODULE_2__
                img.alt = 'CSS'
                p.style.marginLeft = '12px'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 4:
                img.title = 'JavaScript'
                img.style.marginLeft = '20px'
                img.src = _pics_js_png__WEBPACK_IMPORTED_MODULE_4__
                img.alt = 'JavaScript'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 5:
                img.title = 'mySQL'
                img.src = _pics_sql_png__WEBPACK_IMPORTED_MODULE_6__
                img.alt = 'mySQL'
                p.style.marginLeft = '8px'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 6:
                img.title = 'Sass'
                img.src = _pics_sass_png__WEBPACK_IMPORTED_MODULE_1__
                img.alt = 'Sass'
                p.style.marginLeft = '5px'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 7:
                img.title = 'Webpack'
                img.src = _pics_webpack_png__WEBPACK_IMPORTED_MODULE_7__
                img.alt = 'Webpack'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 8:
                img.title = 'TypeScript'
                img.src = _pics_ts_png__WEBPACK_IMPORTED_MODULE_8__
                img.style.marginLeft = '20px'
                img.alt = 'Typescript'
                p.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
        }
        wrap.appendChild(skills)
        main.appendChild(wrap)
    }
}

/***/ }),

/***/ "./src/pics/Tomic.P.jpg":
/*!******************************!*\
  !*** ./src/pics/Tomic.P.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b027cdb1c4ced6d8decd.jpg";

/***/ }),

/***/ "./src/pics/css.png":
/*!**************************!*\
  !*** ./src/pics/css.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "495a79bfbc4ced7c7c0e.png";

/***/ }),

/***/ "./src/pics/html.png":
/*!***************************!*\
  !*** ./src/pics/html.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff3cf75e3b7cbb4ea77c.png";

/***/ }),

/***/ "./src/pics/java.png":
/*!***************************!*\
  !*** ./src/pics/java.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ddf8676bd569fe01ab44.png";

/***/ }),

/***/ "./src/pics/js.png":
/*!*************************!*\
  !*** ./src/pics/js.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93ec07e33231ed6b3af0.png";

/***/ }),

/***/ "./src/pics/python.png":
/*!*****************************!*\
  !*** ./src/pics/python.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82efb64f8698a267f8bf.png";

/***/ }),

/***/ "./src/pics/sass.png":
/*!***************************!*\
  !*** ./src/pics/sass.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb5ba121984777605d5c.png";

/***/ }),

/***/ "./src/pics/sql.png":
/*!**************************!*\
  !*** ./src/pics/sql.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c9e418452a111f0d760.png";

/***/ }),

/***/ "./src/pics/ts.png":
/*!*************************!*\
  !*** ./src/pics/ts.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e441eed78ba11c335df.png";

/***/ }),

/***/ "./src/pics/weatherImg.png":
/*!*********************************!*\
  !*** ./src/pics/weatherImg.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "718a17d63717986baff4.png";

/***/ }),

/***/ "./src/pics/webpack.png":
/*!******************************!*\
  !*** ./src/pics/webpack.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47692505d122dbcae490.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFX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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQ0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBRztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlDQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBRztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQ0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4Q0FBRTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUNBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2J1aWxkTWFpbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9za2lsbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmhlYWRlciB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IHdoaXRlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmhlYWRlciBoMiB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbmhlYWRlciBzdmcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuaGVhZGVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5oZWFkZXIgLnBvcnRyYWl0IHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDMyMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmhlYWRlciAud2hvQW1JIHtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oZWFkZXIgLndob0FtSSBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLnNraWxscyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAwcHggMTVweCAxNXB4IGJsYWNrO1xufVxuLnNraWxscyBoMiB7XG4gIG1hcmdpbi1sZWZ0OiA0MyU7XG59XG4uc2tpbGxzIC53cmFwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xufVxuLnNraWxscyAuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2tpbGxzIC5jYXJkIGltZyB7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzdnc7XG4gIGhlaWdodDogNnZoO1xufVxuXG4ucHJvamVjdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMjB2dztcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIC5idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIC5idG5zIGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkJGMDA7XG4gIGJvcmRlcjogI0ZGQkYwMCAxcHggc29saWQ7XG4gIHdpZHRoOiA5dnc7XG4gIGhlaWdodDogNXZoO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgLmJ0bnMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAuZGVzY3JpcHRpb24gaDIge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5kZXNjcmlwdGlvbiBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn1cblxuLnNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnNpZGUgLnNpZGVCYXIge1xuICB3aWR0aDogMjV2dztcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0NTRGO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IGF1dG87XG59XG4uc2lkZSAuc2lkZUJhciAucmVtb3ZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDU0RjtcbiAgYm9yZGVyOiBub25lO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNpZGUgLnNpZGVCYXIgLmJ0bkRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2lkZSAuc2lkZUJhciAuYnRuRGl2IC5idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDU0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2lkZSAuc2lkZUJhciAuYnRuRGl2IC5idG46aG92ZXIge1xuICBjb2xvcjogI0ZGQkYwMDtcbn1cbi5zaWRlICNhY3RpdmUge1xuICBhbmltYXRpb246IG9wZW5TaWRlIDFzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcbn1cblxubWFpbiAuYmlvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5tYWluIC5iaW8gcCB7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMxMzI3NEY7XG4gIHBhZGRpbmc6IDJ2aCA1dnc7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMjB2dztcbn1cbm1haW4gLnF1b3RlIHtcbiAgbWFyZ2luLWxlZnQ6IDMwdnc7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn1cblxuQGtleWZyYW1lcyBvcGVuU2lkZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4xKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnNraWxscyAuY2FyZCBpbWcge1xuICAgIHdpZHRoOiA0dnc7XG4gICAgaGVpZ2h0OiA2dmg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xuICBoZWFkZXIge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuICAuaGVhZGVyIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5oZWFkZXIgLnBvcnRyYWl0IHtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgfVxuICAuaGVhZGVyIGgyIHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmhlYWRlciBwIHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIH1cbiAgLnNraWxscyB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gIC5za2lsbHMgLndyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICAuc2tpbGxzIC53cmFwIC5jYXJkIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG4gIC5za2lsbHMgaDIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnByb2plY3RzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3Mge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIGltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyBidXR0b24ge1xuICAgIHdpZHRoOiA0MHZ3O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmRlc2NyaXB0aW9uIGgyIHtcbiAgICBtYXJnaW4tbGVmdDogMTV2dztcbiAgICBjb2xvcjogI0ZGQkYwMDtcbiAgfVxuICAucHJvamVjdHMgLmRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICAucHJvamVjdHMgLmRlc2NyaXB0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnByb2plY3RzIC5kZXNjcmlwdGlvbiBwIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLnNpZGUgLnNpZGVCYXIge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuICAuc2lkZSAjYWN0aXZlIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksU0FBQTtFQUNBLDhDQUFBO0FBREo7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSw2QkFBQTtFQU1BLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVBKO0FBSEk7RUFDSSxnQkFBQTtFQUNELFlBQUE7RUFDQSx3RUFBQTtBQUtQO0FBR0s7RUFDRyxpQkFBQTtFQUNBLGVBQUE7QUFEUjtBQUdJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFEUjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFESjtBQUdJO0VBRUcsV0FBQTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUlJO0VBQ0ksZUFBQTtFQUVBLDhDQUFBO0VBQ0EsWUFBQTtBQUhSO0FBSVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFGWjs7QUFPQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7QUFKSjtBQUtJO0VBQ0ksZ0JBQUE7QUFIUjtBQU1JO0VBRUksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyREFBQTtBQUxSO0FBVUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFSUjtBQVNRO0VBRUksWUFBQTtFQUdBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFWWjs7QUFlQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FBWko7QUFhSTtFQUVJLGFBQUE7RUFDQSxhQUFBO0FBWlI7QUFlWTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQWJoQjtBQWdCWTtFQWdCSSxhQUFBO0VBRUEsbUJBQUE7QUE5QmhCO0FBYWdCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVhwQjtBQWFnQjtFQUNJLHlCQTdIYjtFQThIYSxZQUFBO0FBWHBCO0FBbUJRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBakJaO0FBbUJRO0VBRUksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFsQlo7O0FBdUJBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBcEJKO0FBd0JBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0QsYUFBQTtFQUNBLGFBQUE7QUF2Qkg7QUF3Qkc7RUFDQyx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUF0Qko7QUF3QkE7RUFDSSxhQUFBO0FBdEJKO0FBd0JJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQXRCUjtBQXdCSTtFQUNJLGNBQUE7QUF0QlI7QUE0QkE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDRCxVQUFBO0VBQ0MsOEJBQUE7QUExQko7O0FBa0NBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBL0JKO0FBZ0NJO0VBQ0cseUJBQUE7RUFFQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQS9CUjtBQWtDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQWhDRjs7QUFvQ0E7RUFDSTtJQUNFLG9CQUFBO0VBakNKO0VBbUNHO0lBQ0Usc0JBQUE7RUFqQ0w7RUFtQ0c7SUFDRyxvQkFBQTtFQWpDTjtBQUNGO0FBbUNBO0VBR1E7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQW5DVjtBQUNGO0FBd0NBO0VBRUk7SUFDSSxZQUFBO0VBdkNOO0VBeUNFO0lBQ0ksWUFBQTtJQUVBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQXhDTjtFQTBDTTtJQUNJLGVBQUE7SUFDQSxhQUFBO0VBeENWO0VBMkNNO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VBekNWO0VBMkNNO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUF6Q1Y7RUE0Q0U7SUFFRyxZQUFBO0VBM0NMO0VBNkNFO0lBQ0ksYUFBQTtJQUNBLGVBQUE7SUFDQSwyQkFBQTtJQUNBLDZCQUFBO0VBM0NOO0VBZ0RVO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUE5Q1Y7RUFrRE07SUFDSSxhQUFBO0VBaERWO0VBbURFO0lBQ0ksMEJBQUE7RUFqRE47RUFtRE07SUFDSSxzQkFBQTtJQXVCRCxhQUFBO0VBdkVUO0VBaURVO0lBQ0ksaUJBQUE7RUEvQ2Q7RUFnRGM7SUFDRyxZQUFBO0lBQ0EsWUFBQTtFQTlDakI7RUFpRGM7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUVBLG1CQUFBO0VBaERsQjtFQXFEYztJQUNJLGlCQUFBO0lBQ0EsY0FBQTtFQW5EbEI7RUE2RFU7SUFDSSxpQkFBQTtFQTNEZDtFQTREYztJQUNJLGVBQUE7RUExRGxCO0VBNERjO0lBQ0ksZUFBQTtFQTFEbEI7RUFnRU07SUFDSSxZQUFBO0VBOURWO0VBZ0VNO0lBQ0ksZUFBQTtFQTlEVjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiBcXG4kYmFzZTogIzM0MzQzNDtcXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgXFxufVxcbiBcXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNDM0MzQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICBcXG59XFxuaGVhZGVye1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCB3aGl0ZTtcXG4gICAgaDJ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgfVxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgIHN2Z3tcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgfVxcbiAgICBidXR0b257XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgIFxcbiAgICAucG9ydHJhaXR7XFxuICAgIFxcbiAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgIHdpZHRoOmF1dG87XFxuICAgICAgICBoZWlnaHQ6IDMyMXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcbiAgICAud2hvQW1Je1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICBcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG4uc2tpbGxze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTVweCBibGFjaztcXG4gICAgaDJ7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNDMlO1xcbiAgICB9XFxuXFxuICAgIC53cmFwe1xcbiAgICAgICAgXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gICAgICAgICBcXG4gICAgXFxuICAgICAgICBcXG4gICAgfVxcbiAgICAuY2FyZHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgaW1ne1xcbiAgICAgICAgIFxcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICB3aWR0aDogM3Z3O1xcbiAgICAgICAgICAgIGhlaWdodDogNnZoO1xcbiAgICAgICAgfVxcbiAgICAgICAgIFxcbiAgICB9XFxufVxcbi5wcm9qZWN0c3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgLnByb2plY3RDYXJke1xcbiAgICAgICBcXG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgXFxuICAgICAgICAubGlua3N7XFxuICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMjB2dztcXG4gICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5idG5ze1xcbiAgICAgICAgICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDF2aDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkJGMDA7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICNGRkJGMDAgMXB4IHNvbGlkO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDl2dztcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo1dmg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVye1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2U7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmRlc2NyaXB0aW9ue1xcbiAgICAgICAgaDJ7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1dnc7XFxuICAgICAgICB9XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgICBcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1dnc7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIH1cXG59XFxuLnNpZGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgXFxuICBcXG4gICBcXG4uc2lkZUJhcntcXG4gICAgd2lkdGg6IDI1dnc7XFxuICBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcXHQjMzY0NTRGO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgZGlzcGxheTogbm9uZTtcXG4gICB6LWluZGV4OiBhdXRvO1xcbiAgIC5yZW1vdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IFxcdCMzNjQ1NEY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ0bkRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgIFxcbiAgICAuYnRue1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcXHQjMzY0NTRGO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuICAgIC5idG46aG92ZXJ7XFxuICAgICAgICBjb2xvcjogICNGRkJGMDA7XFxuICAgIH1cXG59XFxuXFxuICBcXG59XFxuI2FjdGl2ZXtcXG4gICAgYW5pbWF0aW9uOiBvcGVuU2lkZSAxcztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgIHotaW5kZXg6IDI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcXG4gIFxcbiAgICBcXG59ICBcXG59XFxuXFxubWFpbntcXG4gICAgXFxuLmJpb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHB7XFxuICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMxMzI3NEY7XFxuICAgICAgIFxcbiAgICAgICAgcGFkZGluZzogMnZoIDV2dztcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIHdpZHRoOiAyMHZ3O1xcbiAgICB9XFxufVxcbi5xdW90ZXtcXG4gIG1hcmdpbi1sZWZ0OiAzMHZ3O1xcbiAgbWFyZ2luLXRvcDogMnZoO1xcbn1cXG59XFxuXFxuQGtleWZyYW1lcyBvcGVuU2lkZSB7XFxuICAgIGZyb217XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIH1cXG4gICAgIDcwJXtcXG4gICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4xKTtcXG4gICAgIH1cXG4gICAgIHRve1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpe1xcbiAgICAuc2tpbGxze1xcbiAgICAgICAgLmNhcmR7XFxuICAgICAgICBpbWd7XFxuICAgICAgICAgICAgd2lkdGg6IDR2dztcXG4gICAgICAgICAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KXtcXG4gICBcXG4gICAgaGVhZGVye1xcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICB9XFxuICAgIC5oZWFkZXJ7XFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgICAgICAgXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgIFxcbiAgICAgICAgLnBvcnRyYWl0e1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgaDJ7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLnNraWxsc3tcXG4gICAgICBcXG4gICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgXFxuICAgIC53cmFwe1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgICAgICAgLmNhcmR7XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuICAgICAgICBoMntcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5wcm9qZWN0c3tcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgXFxuICAgICAgICAucHJvamVjdENhcmR7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAubGlua3N7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcbiAgICAgICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5idG5ze1xcbiAgICAgICAgICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDB2dztcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgIGgye1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1dnc7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogICNGRkJGMDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgICAgcGFkZGluZzogMjVweDsgICAgIFxcbiAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICBcXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICAgICAgICAgICAgICBoMntcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBwe1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgXFxuICAgIH1cXG4gICAgLnNpZGV7XFxuICAgICAgICAuc2lkZUJhcntcXG4gICAgICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAjYWN0aXZle1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQWJvdXRNZSgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBjb25zdCBiaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRpdGxlLmlubmVySFRNTCA9IGBUaGVyZSBpcyBzb21lIGdvb2QgaW4gdGhpcyB3b3JsZDxicj4gYW5kIGl0J3Mgd29ydGggZmlnaHRpbmcgZm9yLiAgICAtSi5SLlIgVG9sa2llbiBgXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncXVvdGUnKVxuICAgIGJpby5jbGFzc0xpc3QuYWRkKCdiaW8nKVxuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzdW1tYXJ5LmlubmVySFRNTCA9ICdNeSBmYW1pbHkgaXMgb3JpZ2luYWxseSBmcm9tIEJvc25pYSBhbmQgdGhlIG9ubHkgZmFtaWx5IHRoYXQgbGl2ZXMgaW4gdGhlIHN0YXRlcyBpcyBteSBtb3RoZXIgYW5kIHNpc3Rlci4gV2hlbiBJIHdhcyBpbiBoaWdoc2Nob29sIEkgd2FzIHVuc3VyZSB3aGF0IEkgd2FudGVkIHRvIGRvIHdpdGggbXkgbGlmZSB1bnRpbCBzZW5pb3IgeWVhciB3aGVuIEkgZ290IGludG8gQVBDUyBhbmQgbGVhcm5lZCBKYXZhLiBJIHF1aWNrbHkgbGVhcm5lZCBpdCB3YXMgd2hhdCBJIHdhbnRlZCB0byBkbyBmb3IgbWFqb3JpdHkgb2YgbXkgbGlmZS4gSSBhbHdheXMgbG92ZWQgYnVpbGRpbmcgc2luY2UgSSB3YXMgYSBraWQsIGFuZCBwcm9ncmFtbWluZyB3YXMgZXhhY3RseSB3aGF0IEkgZmVlbCBsaWtlIEkgd2FzIHdhaXRpbmcgdG8gY29tZSBteSB3YXkgYXMgaXQgaW5zdGFudGx5IGNsaWNrZWQuIEkgdHJ5IHRvIGtlZXAgbXlzZWxmIGFzIGJ1c3kgYXMgcG9zc2libGUgZGF5IGluIGFuZCBkYXkgb3V0LCBhbmQgdHJ5IHRvIHRoaW5rIG9mIHByb2dyYW1taW5nIGFzIG15IG51bWJlciBvbmUgcHJpb3JpdHkuIEhvcGluZyB0byBldmVudHVhbGx5IHN0YXJ0IG15IG93biBjb21wYW55IHRoYXQgY291bGQgYnJhbmNoIG91dCBpbnRvIHZhcmlldHkgb2Ygd29yay4gSSBhbSBidWlsZGluZyBncmVhdCBjb25uZWN0aW9ucyB3aXRoIHBlb3BsZSBhbmQgdHJ5aW5nIHRvIGhlbHAgYXMgbWFueSBhcyBJIGNhbi4gSSBoYXZlIGEgYmVhdXRpZnVsIGdpcmxmcmllbmQgdGhhdCBJIGxvdmUgd2l0aCBteSB3aG9sZSBoZWFydCBhbmQgd2Ugc2hhcmUgYSB0b3duaG9tZSB3aXRoIHR3byBkb2dzIG5hbWVkIERlbGlsYWggYW5kIE5lbW8gYW5kIG15IGJyb3RoZXIgRGVhbi4nXG4gICAgYmlvLmFwcGVuZENoaWxkKHN1bW1hcnkpXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBtYWluLmFwcGVuZENoaWxkKGJpbylcbn0iLCJpbXBvcnQgYnVpbGRIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgd2VhdGhlciBmcm9tICcuL3BpY3Mvd2VhdGhlckltZy5wbmcnXG5pbXBvcnQgYnVpbGRTa2lsbHMgZnJvbSAnLi9za2lsbHMnXG5pbXBvcnQgYnVpbGRQcm9qZWN0IGZyb20gJy4vcHJvamVjdCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWFpbigpe1xuYnVpbGRIZWFkZXIoKVxuYnVpbGRTa2lsbHMoKVxuIFxuYnVpbGRQcm9qZWN0KHdlYXRoZXIsJ2h0dHBzOi8vcGF0cmljay10b21pYy5naXRodWIuaW8vV2VhdGhlckFQSS8nLCdodHRwczovL2dpdGh1Yi5jb20vUGF0cmljay1Ub21pYy9XZWF0aGVyQVBJJywnVGhpcyBhcHBsaWNhdGlvbiBpcyBteSBmaXJzdCB0aW1lIHV0aWxpemluZyBhIEFQSSwgSSBkbyBzb21lIHNpbXBsZSBhbmltYXRpb25zIHdpdGhpbiB0aGlzIHByb2plY3QgYW5kIGxlYXJuZWQgYWxvdCB0aHJvdWdoIHRoZSB1c2Ugb2YgcmVzcG9uc2l2ZSBkZXNpZ24gYW5kIGFuaW1hdGlvbicsJ1dlYXRoZXIgQXBwbGljYXRpb24nKVxufVxuIFxuIiwiaW1wb3J0IHBvcnRhaXQgZnJvbSAnLi9waWNzL1RvbWljLlAuanBnJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRIZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuY29uc3QgcG9ydHJhaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxucG9ydHJhaXQuY2xhc3NMaXN0LmFkZCgncGljT2ZNZScpXG5pbWcuY2xhc3NMaXN0LmFkZCgncG9ydHJhaXQnKVxuaW1nLnNyYyA9IHBvcnRhaXRcbnBvcnRyYWl0LmFwcGVuZENoaWxkKGltZylcbmhlYWRlci5hcHBlbmRDaGlsZChwb3J0cmFpdClcbmNvbnN0IHdob0FtSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG53aG9BbUkuY2xhc3NMaXN0LmFkZCgnd2hvQW1JJylcbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuaDIuaW5uZXJIVE1MID0gJ015IG5hbWUgaXMgUGF0cmljayBFbWFudWVsIFRvbWljJ1xud2hvQW1JLmFwcGVuZENoaWxkKGgyKVxuY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxucC5pbm5lckhUTUwgPSAnSSBhbSBhIHN0dWRlbnQgYXQgdGhlIFVuaXZlcnNpdHkgb2YgU291dGggRmxvcmlkYSBhbmQgSSBncmFkdWF0ZSBpbiB0aGUgU3ByaW5nIG9mIDIwMjQ8YnI+d2l0aCBhIEJhY2hlbG9ycyBkZWdyZWUgaW4gSW5mb3JtYXRpb24gU2NpZW5jZTxicj5JIGFtIGEgbWFuIHdpdGggYWxvdCBvZiBhbWJpdGlvbiB0byBiZXR0ZXIgdGhlIHdvcmxkLCBhbmQgYW0gdGhlIGZpcnN0IG9mIG15IGZhbWlseSB0byBiZTxicj5ib3JuIGluIEFtZXJpY2EuIEkgc3BlbmQgYXMgbXVjaCB0aW1lIGFzIEkgY2FuIGxlYXJuaW5nIGhvdyB0byBkZXZlbG9wIHdlYnNpdGVzIGV2ZXJ5ZGF5PGJyPkl0IGlzIG5vdCBqdXN0IGZ1biBmb3IgbWUgYnV0IGJyaW5ncyBpbW1lbnNlIHNhdGlzZmFjdGlvbiB3aGVuIEkgY2FuIGJ1aWxkIGFuZCBkZXNpZ24gc29tZXRoaW5nPGJyPnRoYXQgSSBrbm93IGlzIGdvb2QuIEkgbG92ZSBoZWxwaW5nIHBlb3BsZSwgYW5kIEkgYW0gbG9va2luZyBmb3IgYSBvcHBvcnR1bml0eSB0byBzaG93IDxicj5teSBza2lsbHNldCBhbmQgbGVhcm4gdGhyb3VnaCBvdGhlcnMnXG53aG9BbUkuYXBwZW5kQ2hpbGQocClcbmhlYWRlci5hcHBlbmRDaGlsZCh3aG9BbUkpXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG5tYWluLmFwcGVuZENoaWxkKGhlYWRlcilcbn0iLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBidWlsZFNpZGVCYXIgZnJvbSAnLi9zaWRlYmFyJ1xuaW1wb3J0IGJ1aWxkTWFpbiBmcm9tICcuL2J1aWxkTWFpbidcbmJ1aWxkTWFpbigpXG5idWlsZFNpZGVCYXIoKSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkUHJvamVjdChzcmMsIHNpdGVMaW5rLGdoTGluaywgcElubmVyLCBoZWFkKXtcbiAgICBcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbiAgICBpZihtYWluLmNvbnRhaW5zKHByb2plY3RzKT09dHJ1ZSl7XG4gICAgXG4gICAgICAgIFxuICAgIH1lbHNle1xuICAgICAgICBjb25zb2xlLmxvZyhmYWxzZSlcbiAgICAgICAgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpXG4gICAgfVxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidG5zLmNsYXNzTGlzdC5hZGQoJ2J0bnMnKVxuICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2xpbmtzJylcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbGV0IGNvdW50ID0gMFxuICAgIGltZy5zcmMgPSBzcmNcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChpbWcpXG4gICAgd2hpbGUoY291bnQ8Mil7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnRuLnR5cGUgPSAnc3VibWl0J1xuICAgICAgICBzd2l0Y2goY291bnQpe1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGZvcm0uYWN0aW9uID0gc2l0ZUxpbmtcbiAgICAgICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gJ1ZpZXcgTGl2ZSBTaXRlJ1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuKVxuICAgICAgICAgICAgICAgIGJ0bnMuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBmb3JtLmFjdGlvbiA9IGdoTGlua1xuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSAnU291cmNlIENvZGUnXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidG4pXG4gICAgICAgICAgICAgICAgYnRucy5hcHBlbmRDaGlsZChmb3JtKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVhayBcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q2FyZCcpXG4gICBsaW5rcy5hcHBlbmRDaGlsZChidG5zKVxuICAgIHAuaW5uZXJIVE1MID0gcElubmVyXG4gICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChsaW5rcylcbiAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpXG4gICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgIGgyLmlubmVySFRNTCA9IGhlYWRcbiAgICBkZXNjLmFwcGVuZENoaWxkKGgyKVxuICAgIGRlc2MuYXBwZW5kQ2hpbGQocClcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChkZXNjKVxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdHMpXG59XG4iLCJpbXBvcnQgYnVpbGRNYWluIGZyb20gJy4vYnVpbGRNYWluJ1xuaW1wb3J0IGJ1aWxkQWJvdXRNZSBmcm9tICcuL2Fib3V0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRTaWRlQmFyKCl7XG4gICAgY29uc3Qgc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlJylcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZUJhckJ0bicpXG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlJylcbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaWRlQmFyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdzaWRlQmFyJylcbiAgICByZW1vdmVCdG4uaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIzOVwiIGhlaWdodD1cIjM2XCIgdmlld0JveD1cIjAgMCAzOSAzNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxyZWN0IHdpZHRoPVwiNDMuNjg0NlwiIGhlaWdodD1cIjcuOTU1M1wiIHJ4PVwiMy45Nzc2NVwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjc0NjgxIDAuNjY1MDM3IC0wLjc4NzgxMSAwLjYxNTkxNyA2LjI2NzIxIDEuOTkwNilcIiBmaWxsPVwid2hpdGVcIi8+IDxyZWN0IHdpZHRoPVwiNDIuOTI0OFwiIGhlaWdodD1cIjguMDg4MThcIiByeD1cIjQuMDQ0MDlcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLTAuNjc4MzAyIDAuNzM0NzgzIC0wLjg0MTI0NCAtMC41NDA2NTYgMzcuMzUxNiA0LjM3MjkyKVwiIGZpbGw9XCJ3aGl0ZVwiLz4gPC9zdmc+J1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBcbiAgICAgICBzaWRlQmFyLnNldEF0dHJpYnV0ZSgnaWQnLCdhY3RpdmUnKVxuICAgIH0pXG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBzaWRlQmFyLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCdhY3RpdmUnKVxuICAgIH0pXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChyZW1vdmVCdG4pXG4gICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGhvbWVEaXYuY2xhc3NMaXN0LmFkZCgnYnRuRGl2JylcbmNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbnAuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIjAgMCAxODMgMTUwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+IDxyZWN0IHg9XCI0MVwiIHk9XCI1MFwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgcng9XCIxMFwiIGZpbGw9XCIjRkZCRjAwXCIvPiA8cGF0aCBkPVwiTTg0LjYyNiA2LjUwNjExQzg4LjQ4MiAyLjg1NjQ2IDk0LjUxOCAyLjg1NjQ1IDk4LjM3NCA2LjUwNjFMMTUyLjUwMiA1Ny43MzcyQzE1OS4wNjkgNjMuOTUyOSAxNTQuNjcxIDc1IDE0NS42MjggNzVIMzcuMzcxN0MyOC4zMjk1IDc1IDIzLjkzMDUgNjMuOTUyOSAzMC40OTc3IDU3LjczNzJMODQuNjI2IDYuNTA2MTFaXCIgZmlsbD1cIiNGRkJGMDBcIi8+PHBhdGggZD1cIk03NCAxMDZDNzQgMTAwLjQ3NyA3OC40NzcyIDk2IDg0IDk2SDk4QzEwMy41MjMgOTYgMTA4IDEwMC40NzcgMTA4IDEwNlYxNTBINzRWMTA2WlwiIGZpbGw9XCJibGFja1wiLz48L3N2Zz4nXG4gICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBob21lLmlubmVySFRNTCA9ICdIb21lJ1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMzQzNDM0J1xuICAgICAgICBidWlsZE1haW4oKVxuICAgIH0pXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lKVxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQocClcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGhvbWVEaXYpXG4gICAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0RGl2LmNsYXNzTGlzdC5hZGQoJ2J0bkRpdicpXG4gICAgIGNvbnN0IGFib3V0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgIGFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGNEJCNDQnXG4gICAgICAgIGJ1aWxkQWJvdXRNZSgpXG4gICAgIH0pXG4gICAgIGFib3V0QnRuLmlubmVySFRNTCA9ICdBYm91dCBNZSdcbiAgICAgYWJvdXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRCdG4pXG4gICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0UClcbiAgICAgc2lkZUJhci5hcHBlbmRDaGlsZChhYm91dERpdilcbiAgICBzaWRlLmFwcGVuZENoaWxkKHNpZGVCYXIpXG59IiwiaW1wb3J0IGphdmEgZnJvbSAnLi9waWNzL2phdmEucG5nJ1xuaW1wb3J0IHNhc3MgZnJvbSAnLi9waWNzL3Nhc3MucG5nJ1xuaW1wb3J0IGNzcyBmcm9tICcuL3BpY3MvY3NzLnBuZydcbmltcG9ydCBodG1sIGZyb20gJy4vcGljcy9odG1sLnBuZydcbmltcG9ydCBqcyBmcm9tICAnLi9waWNzL2pzLnBuZydcbmltcG9ydCBweSBmcm9tICcuL3BpY3MvcHl0aG9uLnBuZydcbmltcG9ydCBzcWwgZnJvbSAnLi9waWNzL3NxbC5wbmcnXG5pbXBvcnQgd3AgZnJvbSAnLi9waWNzL3dlYnBhY2sucG5nJ1xuaW1wb3J0IHRzIGZyb20gJy4vcGljcy90cy5wbmcnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFNraWxscygpe1xuICAgIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICB3cmFwLmNsYXNzTGlzdC5hZGQoJ3NraWxscycpXG4gICAgY29uc3Qgc2tpbGxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBza2lsbHMuY2xhc3NMaXN0LmFkZCgnd3JhcCcpXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgaDIuaW5uZXJIVE1MID0gXCJNeSBTa2lsbHNldFwiXG4gICAgd3JhcC5hcHBlbmRDaGlsZChoMilcbiAgICBsZXQgY291bnQgPSAwXG4gICAgd2hpbGUoY291bnQgPCA5KXtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgICAgIHN3aXRjaChjb3VudCl7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ0phdmEnICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGphdmFcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0phdmEnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBwLnN0eWxlLm1hcmdpbkxlZnQgPSAnMTBweCdcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ1B5dGhvbidcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gcHlcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ1B5dGhvbidcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnSFRNTCdcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gaHRtbFxuICAgICAgICAgICAgICAgIHAuc3R5bGUubWFyZ2luTGVmdCA9ICcxMXB4J1xuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnSFRNTCdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnQ1NTJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBjc3NcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0NTUydcbiAgICAgICAgICAgICAgICBwLnN0eWxlLm1hcmdpbkxlZnQgPSAnMTJweCdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnSmF2YVNjcmlwdCdcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUubWFyZ2luTGVmdCA9ICcyMHB4J1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBqc1xuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnSmF2YVNjcmlwdCdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnbXlTUUwnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHNxbFxuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnbXlTUUwnXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzhweCdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnU2FzcydcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gc2Fzc1xuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnU2FzcydcbiAgICAgICAgICAgICAgICBwLnN0eWxlLm1hcmdpbkxlZnQgPSAnNXB4J1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdXZWJwYWNrJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSB3cFxuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnV2VicGFjaydcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnVHlwZVNjcmlwdCdcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gdHNcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUubWFyZ2luTGVmdCA9ICcyMHB4J1xuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnVHlwZXNjcmlwdCdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICB3cmFwLmFwcGVuZENoaWxkKHNraWxscylcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh3cmFwKVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=