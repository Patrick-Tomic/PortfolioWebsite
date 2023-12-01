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
header .name {
  font-size: 1em;
  margin-left: 15vw;
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
header .name:hover {
  color: #FFD700;
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
  margin-left: 3vw;
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

main #animate {
  animation: slideDown 0.5s;
  transform-origin: top;
  display: block;
}
main #reverse {
  transform-origin: top;
  animation: slideUp 0.5s;
}
main .bio {
  z-index: 1;
  display: flex;
}
main .bio button {
  cursor: pointer;
}
main .bio button:hover {
  color: white;
}
main .bio .myStory {
  height: auto;
  border-bottom: none;
  border: solid 5px #13274F;
  border-bottom: none;
  padding: 2vh 3vw;
  font-size: 18px;
  color: black;
  width: 33%;
}
main .bio .myStory button {
  font-size: 1.5em;
  font-weight: bold;
  text-align: left;
  margin-bottom: 2vh;
  border: none;
  background-color: #F4BB44;
}
main .bio .myStory .sumDiv {
  display: none;
}
main .bio .bookList {
  height: auto;
  display: flex;
  flex-direction: column;
  width: 33%;
  padding: 25px;
  border: 5px solid #13274F;
  border-right: none;
  border-bottom: none;
  border-left: none;
}
main .bio .bookList button {
  border: none;
  font-size: 1.5em;
  font-weight: bold;
  text-align: left;
  margin-bottom: 2vh;
  width: 10vw;
  background-color: #F4BB44;
}
main .bio .bookList .bookDiv {
  display: none;
}
main .bio .bookList .bookDiv .bookDescription {
  left: 25%;
  border: solid 1px #13274F;
  display: none;
  position: absolute;
  width: 15vw;
  height: auto;
  padding: 2vw 2vh;
  background-color: #343434;
  border-radius: 10px;
}
main .bio .bookList .bookDiv li {
  margin-bottom: 2vh;
  font-size: 18px;
  font-weight: bold;
  width: 15vw;
}
main .bio .bookList .bookDiv ol li:hover {
  color: white;
  cursor: pointer;
}
main .bio .hobbies {
  border-top: #13274F 5px solid;
  height: auto;
  padding: 2vh 3vw;
  width: 33%;
}
main .bio .hobbies button {
  font-size: 1.5em;
  font-weight: bold;
  text-align: left;
  margin-bottom: 2vh;
  border: none;
  background-color: #F4BB44;
}
main .bio .hobbies .hobbyDiv {
  display: none;
}
main .bio .hobbies .hobbyDiv .list li p {
  border: none;
  width: 15vw;
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
@keyframes slideDown {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleX(1);
  }
}
@keyframes slideUp {
  from {
    transform: scaleY(1);
    display: block;
  }
  to {
    transform: scaleY(0);
    display: none;
  }
}
/* @media (max-width: 1000px){
    .skills{
        .card{
        img{
            width: 4vw;
            height: 6vh;
        }
    }
}
} */
@media (max-width: 500px) {
  header {
    width: 100%;
  }
  .header {
    width: 100%;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .header .portrait {
    margin-top: 5vh;
    height: 160px;
  }
  .header h2 {
    font-size: 24px;
  }
  .header p {
    font-size: 10px;
    line-height: 12px;
  }
  .skills {
    width: 100%;
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
  .projects .projectCard .links img {
    width: 250px;
    margin-left: 15vw;
    height: auto;
  }
  .projects .projectCard .links .btns button {
    width: 40vw;
    height: 40px;
    font-weight: normal;
  }
  .projects .projectCard .description h2 {
    margin-left: 20vw;
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
  main #animate {
    animation: none;
    display: block;
  }
  main #reverse {
    animation: none;
    display: block;
  }
  main .bio {
    flex-direction: column;
  }
  main .bio .bookList {
    width: 100%;
    border-bottom: #13274F 5px solid;
    border-top: #13274F 5px solid;
  }
  main .bio .bookList .bookDiv {
    width: 100%;
    display: block;
  }
  main .bio .bookList .bookDiv li {
    pointer-events: none;
    width: 100%;
  }
  main .bio .bookList .bookDiv li .bookDescription {
    width: 80%;
    background-color: #F4BB44;
    border: none;
    position: relative;
    display: block;
  }
  main .bio .hobbies {
    width: 100%;
    border-top: #13274F 5px solid;
    border-bottom: #13274F 5px solid;
  }
  main .bio .hobbies .hobbyDiv {
    display: block;
  }
  main .bio .hobbies .hobbyDiv .list li {
    font-weight: bold;
    margin-bottom: 5vh;
    width: 100%;
  }
  main .bio .hobbies .hobbyDiv .list li p {
    width: 80%;
  }
  main .bio .myStory {
    padding: 50px;
    width: 100%;
    border: none;
  }
  main .bio .myStory button {
    border: none;
  }
  main .bio .myStory .sumDiv {
    display: block;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":[" \n$base: #343434;\n*{\n    margin: 0;\n    font-family: 'Courier New', Courier, monospace;\n   \n}\n \nbody{\n    background-color:#343434;\n    width: 100%;\n    height: 100%;\n     \n}\nheader{\n    box-shadow: 0px 5px 5px white;\n   \n    position: sticky;\n    top: 0;\n    background-color: #13274F;\n    z-index: 1;\n    display: flex;\n    justify-content: space-between;\n     svg{\n        margin-left: 10px;\n        margin-top: 5px;\n     }\n    button{\n        background-color: #13274F;\n        border: none;\n        margin-top: 5px;\n        cursor: pointer;\n    }\n    .name{ \n        font-size: 1em;\n            margin-left: 15vw;\n           color: white;\n           font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n        }\n    .name:hover{\n        color: #FFD700;\n    }\n}\n.header{\n    display: flex;\n    padding: 25px;\n    justify-content: space-around;\n   \n    .portrait{\n    \n       margin: 5px;\n        width:auto;\n        height: 321px;\n        border-radius: 10px;\n    }\n    .whoAmI{\n        margin-top: 5vh;\n    \n        font-family: 'Courier New', Courier, monospace;\n        color: white;\n        p{\n            font-size: 20px;\n            line-height: 25px;\n            \n        }\n    }\n}\n.skills{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n     \n    box-shadow: 0px 15px 15px black;\n    h2{\n        margin-left: 43%;\n    }\n\n    .wrap{\n        margin-left: 3vw;\n        background-color: white;\n        margin-bottom: 10px;\n        display: grid;\n        grid-template-columns: repeat(auto-fit,minmax(150px, 1fr));\n         \n    \n        \n    }\n    .card{\n        display: flex;\n        flex-direction: column;\n        img{\n         \n            padding: 2px;\n            \n            \n            background-color: white;\n            width: 3vw;\n            height: 6vh;\n        }\n         \n    }\n}\n.projects{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    .projectCard{\n       \n        padding: 50px;\n        display: flex;\n        \n        .links{\n            img{\n                border-radius: 10px;\n                display: flex;\n                flex-direction: column;\n                width: 20vw;\n    \n            }\n            .btns{\n                button{\n                    cursor: pointer;\n                    margin: 1vh;\n                    background-color: #FFBF00;\n                    border: #FFBF00 1px solid;\n                    width: 9vw;\n                    height:5vh;\n                    border-radius: 10px;\n                    font-size: 15px;\n                    font-weight: bold;\n                }\n                button:hover{\n                    background-color: $base;\n                    color: white;\n                }\n                display: flex;\n                \n                align-items: center;\n            }\n        }\n        .description{\n        h2{\n            color: white;\n            margin-left: 5vw;\n        }\n        p{\n             \n            color: white;\n            font-size: 18px;\n            margin-left: 5vw;\n            margin-top: 2vh;\n        }\n    }\n    }\n}\n.side{\n    display: flex;\n    justify-content: flex-end;\n   \n  \n   \n.sideBar{\n    width: 25vw;\n  \n    height: 100%;\n    background-color: \t#36454F;\n    position: absolute;\n   display: none;\n   z-index: auto;\n   .remove{\n    background-color: \t#36454F;\n    border: none;\n    align-self: flex-end;\n    cursor: pointer;\n}\n.btnDiv{\n    display: flex;\n     \n    .btn{\n        cursor: pointer;\n        margin-top: 15px;\n        align-self: flex-start;\n        border: none;\n        background-color: \t#36454F;\n        font-size: 20px;\n        color: white;\n    }\n    .btn:hover{\n        color:  #FFBF00;\n    }\n}\n\n  \n}\n#active{\n    animation: openSide 1s;\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n   z-index: 2;\n    transform-origin: center right;\n  \n    \n}  \n}\n\nmain{\n#animate{\n    animation: slideDown .5s;\n    transform-origin: top;\n    display: block;\n}\n#reverse{\n    transform-origin: top;\n    animation: slideUp .5s;\n    \n}\n    \n.bio{\n    z-index: 1;\n    display: flex;\n   button{\n    cursor: pointer;\n   }\n   button:hover{\n    color: white;\n   }\n    \n    .myStory{\n        button{\n            font-size: 1.5em;\n            font-weight: bold;\n            text-align: left;\n             margin-bottom: 2vh;\n            border: none;\n            background-color: #F4BB44;\n        }\n        height: auto;\n        border-bottom: none;\n        border: solid 5px #13274F;\n        border-bottom: none;\n       \n        \n       padding:2vh 3vw;\n       \n        font-size: 18px;\n        color: black;\n        width: 33%;\n        .sumDiv{\n            display: none;\n        }\n\n    }\n    .bookList{\n         \n        height: auto;\n        display: flex;\n        flex-direction: column;\n        width: 33%;\n        padding: 25px;\n        border: 5px solid #13274F;\n        border-right: none;\n        border-bottom: none;\n        border-left: none;\n        button{\n            border: none;\n            font-size: 1.5em;\n            font-weight: bold;\n            text-align: left;\n             margin-bottom: 2vh;\n           width: 10vw;\n            background-color: #F4BB44;\n        }\n        .bookDiv{\n            \n            display: none;\n            .bookDescription{\n                left: 25%;\n                 \n                border: solid 1px #13274F;\n                display: none;\n                position: absolute;\n                width: 15vw;\n                height: auto;\n                padding: 2vw 2vh;     \n                background-color: #343434;\n                border-radius: 10px;\n            }\n            li{\n             \n                margin-bottom: 2vh;\n                font-size: 18px;\n                font-weight: bold;\n                width: 15vw;\n            }\n            ol{\n            li:hover{\n                color: white;\n                cursor: pointer;\n            }\n            }\n        }\n        \n    }\n   .hobbies{\n    border-top: #13274F 5px solid;\n    \n    button{\n       \n        font-size: 1.5em;\n        font-weight: bold;\n        text-align: left;\n         margin-bottom: 2vh;\n        border: none;\n        background-color: #F4BB44;\n    }\n     \n    height: auto;\n    padding:2vh 3vw;\n    width: 33%;\n     \n    .hobbyDiv{\n         display: none;\n    .list{\n        li{\n        p{\n            border: none;\n           \n           width: 15vw;\n        }\n    }\n    }\n}\n   }\n}\n.quote{\n  margin-left: 30vw;\n  margin-top: 2vh;\n}\n}\n\n@keyframes openSide {\n    from{\n      transform: scaleX(0);\n    }\n     70%{\n       transform: scaleX(1.1);\n     }\n     to{\n        transform: scaleX(1);\n     }\n}\n@keyframes slideDown{\n    from{\n        transform: scaleY(0);\n      \n    }\n\n    to{\n        transform: scaleX(1);\n        \n    }\n}\n@keyframes slideUp{\n    from{\n        transform: scaleY(1);\n        display: block;\n    }\n\n    to{\n        transform: scaleY(0);\n        display: none;\n    }\n}\n/* @media (max-width: 1000px){\n    .skills{\n        .card{\n        img{\n            width: 4vw;\n            height: 6vh;\n        }\n    }\n}\n} */\n\n@media (max-width: 500px){\n   \n    header{\n        width: 100%;\n    }\n    .header{\n        width: 100%;\n         \n        padding: 5px;\n        display: flex;\n        flex-wrap: wrap;\n         justify-content: center;\n         align-items: center;\n        .portrait{\n            margin-top: 5vh;\n            height: 160px;\n            \n        }\n        h2{\n            \n            font-size: 24px;\n        }\n        p{\n          \n            font-size: 10px;\n            line-height: 12px;\n        }\n    }\n    .skills{\n      \n       width: 100%;\n        \n    .wrap{\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n        justify-content: space-around;\n\n        .card{\n             \n            \n            img{\n            width: 40px;\n            height: 40px;\n        }\n    }\n}\n        h2{\n            display: none;\n        }\n    }\n    .projects{\n        grid-template-columns: 1fr;\n        \n        .projectCard{\n            flex-direction: column;\n            .links{\n                \n                img{\n                   width: 250px;\n                   margin-left: 15vw;\n                   height: auto;\n                }\n                .btns{\n                    \n                button{\n                    width: 40vw;\n                    height: 40px;\n                    \n                    font-weight: normal;\n                }\n                }\n            }\n            .description{\n                h2{\n                    margin-left: 20vw;\n                    color:  #FFBF00;\n                }\n            }\n             \n           padding: 25px;     \n              \n            \n        }\n        \n      \n            .description{\n                margin-left: 20px;\n                h2{\n                    font-size: 16px;\n                }\n                p{\n                    font-size: 10px;\n                }\n            }\n        \n    }\n    .side{\n        .sideBar{\n            width: 350px;\n        }\n        #active{\n            animation: none;\n        }\n    }\n\n\n//ABOUT ME CSS\nmain{\n#animate{\n    animation: none;\n    display: block;\n}\n#reverse{\n    animation: none;\n    display: block;\n}\n.bio{\n\n    flex-direction: column;\n    .bookList{\n        width: 100%;\n        border-bottom: #13274F 5px solid;\n        border-top:#13274F 5px solid;\n        .bookDiv{\n            width: 100%;\n           \n            display: block;\n            li{\n                pointer-events: none;\n                width: 100%;\n            .bookDescription{\n                width: 80%;\n                background-color:#F4BB44;\n                border: none;\n                position: relative;\n                display: block;\n              \n            }\n        }\n           \n        }\n    }\n        .hobbies{\n            width: 100%;\n            border-top: #13274F 5px solid;\n            border-bottom:#13274F 5px solid;\n            \n            .hobbyDiv{\n                display: block;\n                 \n                .list{\n                    li{\n                        font-weight: bold;\n                        margin-bottom: 5vh;\n                        width: 100%;\n                    p{\n                        width: 80%;\n                    }\n                }\n            }\n\n            }\n        }\n        .myStory{\n            padding: 50px;\n            button{\n                border: none;\n            }\n            width: 100%;\n            border: none;\n            .sumDiv{\n                display: block;\n            }\n        }\n      \n    \n}\n\n}\n\n\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _books__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./books */ "./src/books.js");
/* harmony import */ var _hobbies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hobbies */ "./src/hobbies.js");


function buildAboutMe(){
    const main = document.querySelector('main')
    const bio = document.createElement('div')
    const title = document.createElement('h2')
    title.innerHTML = `There is some good in this world<br> and it's worth fighting for.    -J.R.R Tolkien `
    title.classList.add('quote')
    bio.classList.add('bio')
    const myStory = document.createElement('div')
    myStory.classList.add('myStory')
    const myHeading = document.createElement('button')
            myHeading.addEventListener('click',()=>{
                if(summContainer.id == 'animate'){
                   summContainer.id = 'reverse'
                    
                    return
                }
                 
                summContainer.id = 'animate'
            })
    myHeading.innerHTML = 'My Story'
        const bookContainer = document.createElement('div')
        const summContainer = document.createElement('div')
        summContainer.classList.add('sumDiv')
        const hobbyContainer = document.createElement('div')
        hobbyContainer.classList.add('hobbyDiv')
    const summary = document.createElement('p')
    summary.innerHTML = 'My family is originally from Bosnia and the only family that lives in the states is my mother and sister. When I was in highschool I was unsure what I wanted to do with my life until senior year when I got into APCS and learned Java. I quickly learned it was what I wanted to do for majority of my life. I always loved building since I was a kid, and coding keeps my inner child alive. I try to keep myself as busy as possible day in and day out, and try to think of programming as my number one priority. Hoping to eventually start my own company that could branch out into variety of work. I am building great connections with people and trying to help as many as I can. I have a beautiful girlfriend that I love with my whole heart and we share a townhome with two dogs named Delilah and Nemo and my brother Dean.'
    const bookList = document.createElement('div')
    bookList.classList.add('bookList')
    const bookTitle = document.createElement('button')
    bookTitle.innerHTML = 'My Books'
                bookTitle.addEventListener('click',()=>{
                    if(bookContainer.id == 'animate'){
                        bookContainer.id = 'reverse'
                        
                        return
                    }
                  
                    bookContainer.id = 'animate'
                })
    bookList.appendChild(bookTitle)
    const ol = document.createElement('ol')
    bookContainer.appendChild(ol)
    bookContainer.classList.add('bookDiv')
                const currentRead = document.createElement('h2')
                currentRead.innerHTML = 'Currently Reading'
                    const currentBooks = document.createElement('ul')
                    const girlDragon = document.createElement('li')
                    girlDragon.innerHTML = "Girl With the Dragon Tattoo"
                    currentBooks.appendChild(girlDragon)
                    const atomicHabits = document.createElement('li')
                    atomicHabits.innerHTML = 'Atomic Habits'
                    currentBooks.appendChild(atomicHabits)
                    bookContainer.appendChild(currentRead)
                    bookContainer.appendChild(currentBooks)
                    bookList.appendChild(bookContainer)
            const hobbyHeading = document.createElement('button')
            hobbyHeading.addEventListener('click',()=>{
                if(hobbyContainer.id == 'animate'){
                    hobbyContainer.id = 'reverse'
                    
                    return
                }
                 
                hobbyContainer.id = 'animate'
            })
            hobbyHeading.innerHTML = 'My Hobbies'
            const hobbyList = document.createElement('div')
            hobbyList.classList.add('hobbies')
            const list = document.createElement('ul')
            list.classList.add('list')
            hobbyList.appendChild(hobbyHeading)
            hobbyContainer.appendChild(list)
            hobbyList.appendChild(hobbyContainer)
    myStory.appendChild(myHeading)
    summContainer.appendChild(summary)
    myStory.appendChild(summContainer)
    bio.appendChild(bookList)
    bio.appendChild(myStory)
    bio.appendChild(hobbyList)
    main.appendChild(title)
    main.appendChild(bio)
    ;(0,_books__WEBPACK_IMPORTED_MODULE_0__["default"])('Atomic Habits', 'Written by James Clear<br><br> was a benefical book for me that taught me how to build positive habits incrementally each day. Was a big help for me to keep coding','https://jamesclear.com/atomic-habits' )
    ;(0,_books__WEBPACK_IMPORTED_MODULE_0__["default"])('The Autobiography of Malcom X','Written by Alex Haley<br><br>This book taught me alot about the United states during the early periods before the civil rights movement and also about the misunderstood Malcom X. Learned about the creation of the Nation of Islam, and how profound Malcoms life was.','https://en.wikipedia.org/wiki/The_Autobiography_of_Malcolm_X')
    ;(0,_books__WEBPACK_IMPORTED_MODULE_0__["default"])('The 5 AM Club','Written by Robin Sharma<br><br>A great read creating a narritive that is full of information about greats, showed the benefits of waking up early and starting your day before the sun rises. Currently writing this at 4 am so I think it did a good job :)','https://www.blinkist.com/en/books/the-5-am-club-en')
    ;(0,_books__WEBPACK_IMPORTED_MODULE_0__["default"])('The Hobbit','Written by J.R.R Tolkien<br><br> A classic story that was nothing like the movie','https://en.wikipedia.org/wiki/The_Hobbit')
    ;(0,_books__WEBPACK_IMPORTED_MODULE_0__["default"])('Deep Work',`Written by Cal Newport<br><br> A book covering the topic of "Deep Work". This was a good read informing me of the benefit of creating a distraction free environment that allows you to work with deepness. The use of tactics such as 'Pomodoro' are very helpful for pacing yourself and allowing periods for you to rest`,'https://www.samuelthomasdavies.com/book-summaries/business/deep-work/')
    ;(0,_books__WEBPACK_IMPORTED_MODULE_0__["default"])('Cant Hurt Me','By David Goggins<br><br> This book covers alot of the life of the retired Navy Seal David Goggins. I got out of this book the idea of a trudge through mentality where I learned to keep pushing through hardship and break through barriers set by yourself','https://davidgoggins.com/book/')
    ;(0,_books__WEBPACK_IMPORTED_MODULE_0__["default"])('Don Quixote', 'Written by Miguel de Cervantes<br><br> This one was the book of the year for me. I loved the story and the imagery presented from the author was amazing. Honestly the funniest book I have read and was sad to finish it and put it down. Will definetly be reading again','https://en.wikipedia.org/wiki/Don_Quixote')
    ;(0,_books__WEBPACK_IMPORTED_MODULE_0__["default"])('Wuthering Heights','Written by Emily Brontë<br><br> A classic portraying love, deception, and a variety of emotion. Heathcliff was honestly the best antagonist I have seen in a while. Good read','https://en.wikipedia.org/wiki/Wuthering_Heights')
    ;(0,_books__WEBPACK_IMPORTED_MODULE_0__["default"])('Animal Farm', 'Written by George Orwell<br><br> A good reread after a bit of time, was interesting seeing the comparison of certain political systems to the setting of the book','https://en.wikipedia.org/wiki/Animal_Farm') 
        ;(0,_hobbies__WEBPACK_IMPORTED_MODULE_1__["default"])('Gardening','I am a avid gardner and I try to grow a variety of plants, currently I am excited to harvest my first tomato and dill when they are both ready')
        ;(0,_hobbies__WEBPACK_IMPORTED_MODULE_1__["default"])('Guitar',`I have been practicing guitar a decent amount lately, current learning <a href = 'https://www.youtube.com/watch?v=tH2w6Oxx0kQ'>Dust in the Wind</a> and just started to learn a <a href = 'https://www.youtube.com/watch?v=Z2b15rwGBJc'>lullaby</a>`)
        ;(0,_hobbies__WEBPACK_IMPORTED_MODULE_1__["default"])('Piano',`I have been playing piano since senior year of college and its relaxing to play. I am really into all music but for piano I usually just play classical. The only song I know fully is <a href='https://www.youtube.com/watch?v=2WfaotSK3mI'>Gymnopedie no. 1</a>`)
        ;(0,_hobbies__WEBPACK_IMPORTED_MODULE_1__["default"])('Reading','I have become a big reader this year as my book list would show lol. I appreciate learning alot and you can get so much out of reading')
      
         
    }

/***/ }),

/***/ "./src/books.js":
/*!**********************!*\
  !*** ./src/books.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildBooks)
/* harmony export */ });
function buildBooks(book,description, link){
   const ol = document.querySelector('ol')
   const anchor = document.createElement('a')
   anchor.href = link
   const main = document.querySelector('main')
   const li = document.createElement('li')
   const bookDescription = document.createElement('div')
   bookDescription.classList.add('bookDescription')
   li.innerHTML = book 
   bookDescription.innerHTML = description
   bookDescription.setAttribute('id',book)
    li.addEventListener('mouseover',()=>{
    const id = document.getElementById(book)
    id.style.display = 'block'
   })
   
   li.addEventListener('mouseleave',()=>{
    const id = document.getElementById(book)
    id.style.display = 'none'
   }) 
   
   li.addEventListener('click',()=>{
    window.location.href = link
   })
   li.appendChild(bookDescription)
   
   ol.appendChild(li)
    
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

/***/ "./src/hobbies.js":
/*!************************!*\
  !*** ./src/hobbies.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildHobbies)
/* harmony export */ });
function buildHobbies(title,description){
     const li = document.createElement('li')
     const list = document.querySelector('.list')
     li.innerHTML = title
     const p = document.createElement('p')
     p.innerHTML = description
   
     li.appendChild(p)
     list.appendChild(li)
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



const name = document.querySelector('.name')
const main = document.querySelector('main')
const body = document.querySelector('body')
name.addEventListener('click',()=>{
    main.innerHTML = ''
    body.style.backgroundColor = '#343434'
    ;(0,_buildMain__WEBPACK_IMPORTED_MODULE_2__["default"])()  
})
;(0,_buildMain__WEBPACK_IMPORTED_MODULE_2__["default"])()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLEtBQUssY0FBYyxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFN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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2Jvb2tzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvYnVpbGRNYWluLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvaG9iYmllcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9za2lsbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmhlYWRlciB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IHdoaXRlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmhlYWRlciBzdmcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuaGVhZGVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgLm5hbWUge1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luLWxlZnQ6IDE1dnc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbmhlYWRlciAubmFtZTpob3ZlciB7XG4gIGNvbG9yOiAjRkZENzAwO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uaGVhZGVyIC5wb3J0cmFpdCB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAzMjFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5oZWFkZXIgLndob0FtSSB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaGVhZGVyIC53aG9BbUkgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5za2lsbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMTVweCBibGFjaztcbn1cbi5za2lsbHMgaDIge1xuICBtYXJnaW4tbGVmdDogNDMlO1xufVxuLnNraWxscyAud3JhcCB7XG4gIG1hcmdpbi1sZWZ0OiAzdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbn1cbi5za2lsbHMgLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNraWxscyAuY2FyZCBpbWcge1xuICBwYWRkaW5nOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogM3Z3O1xuICBoZWlnaHQ6IDZ2aDtcbn1cblxuLnByb2plY3RzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQge1xuICBwYWRkaW5nOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDIwdnc7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCRjAwO1xuICBib3JkZXI6ICNGRkJGMDAgMXB4IHNvbGlkO1xuICB3aWR0aDogOXZ3O1xuICBoZWlnaHQ6IDV2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIC5idG5zIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmRlc2NyaXB0aW9uIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogNXZ3O1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAuZGVzY3JpcHRpb24gcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBtYXJnaW4tdG9wOiAydmg7XG59XG5cbi5zaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5zaWRlIC5zaWRlQmFyIHtcbiAgd2lkdGg6IDI1dnc7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDU0RjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiBhdXRvO1xufVxuLnNpZGUgLnNpZGVCYXIgLnJlbW92ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjQ1NEY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zaWRlIC5zaWRlQmFyIC5idG5EaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNpZGUgLnNpZGVCYXIgLmJ0bkRpdiAuYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjQ1NEY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNpZGUgLnNpZGVCYXIgLmJ0bkRpdiAuYnRuOmhvdmVyIHtcbiAgY29sb3I6ICNGRkJGMDA7XG59XG4uc2lkZSAjYWN0aXZlIHtcbiAgYW5pbWF0aW9uOiBvcGVuU2lkZSAxcztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XG59XG5cbm1haW4gI2FuaW1hdGUge1xuICBhbmltYXRpb246IHNsaWRlRG93biAwLjVzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxubWFpbiAjcmV2ZXJzZSB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuNXM7XG59XG5tYWluIC5iaW8ge1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xufVxubWFpbiAuYmlvIGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm1haW4gLmJpbyBidXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5tYWluIC5iaW8gLm15U3Rvcnkge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlcjogc29saWQgNXB4ICMxMzI3NEY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmc6IDJ2aCAzdnc7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMzMlO1xufVxubWFpbiAuYmlvIC5teVN0b3J5IGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcbn1cbm1haW4gLmJpbyAubXlTdG9yeSAuc3VtRGl2IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1haW4gLmJpbyAuYm9va0xpc3Qge1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMyU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMxMzI3NEY7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5tYWluIC5iaW8gLmJvb2tMaXN0IGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgd2lkdGg6IDEwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEJCNDQ7XG59XG5tYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYgLmJvb2tEZXNjcmlwdGlvbiB7XG4gIGxlZnQ6IDI1JTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzEzMjc0RjtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTV2dztcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAydncgMnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxubWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDE1dnc7XG59XG5tYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IG9sIGxpOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5tYWluIC5iaW8gLmhvYmJpZXMge1xuICBib3JkZXItdG9wOiAjMTMyNzRGIDVweCBzb2xpZDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAydmggM3Z3O1xuICB3aWR0aDogMzMlO1xufVxubWFpbiAuYmlvIC5ob2JiaWVzIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcbn1cbm1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYge1xuICBkaXNwbGF5OiBub25lO1xufVxubWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCBsaSBwIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTV2dztcbn1cbm1haW4gLnF1b3RlIHtcbiAgbWFyZ2luLWxlZnQ6IDMwdnc7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn1cblxuQGtleWZyYW1lcyBvcGVuU2lkZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4xKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCl7XG4gICAgLnNraWxsc3tcbiAgICAgICAgLmNhcmR7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiA0dnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDZ2aDtcbiAgICAgICAgfVxuICAgIH1cbn1cbn0gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICBoZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5oZWFkZXIgLnBvcnRyYWl0IHtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgfVxuICAuaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIH1cbiAgLnNraWxscyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNraWxscyAud3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG4gIC5za2lsbHMgLndyYXAgLmNhcmQgaW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLnNraWxscyBoMiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJvamVjdHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMjVweDtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyBpbWcge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTV2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgLmJ0bnMgYnV0dG9uIHtcbiAgICB3aWR0aDogNDB2dztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5kZXNjcmlwdGlvbiBoMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwdnc7XG4gICAgY29sb3I6ICNGRkJGMDA7XG4gIH1cbiAgLnByb2plY3RzIC5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgLnByb2plY3RzIC5kZXNjcmlwdGlvbiBoMiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5wcm9qZWN0cyAuZGVzY3JpcHRpb24gcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5zaWRlIC5zaWRlQmFyIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gIH1cbiAgLnNpZGUgI2FjdGl2ZSB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG4gIG1haW4gI2FuaW1hdGUge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBtYWluICNyZXZlcnNlIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbWFpbiAuYmlvIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIG1haW4gLmJpbyAuYm9va0xpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206ICMxMzI3NEYgNXB4IHNvbGlkO1xuICAgIGJvcmRlci10b3A6ICMxMzI3NEYgNXB4IHNvbGlkO1xuICB9XG4gIG1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIG1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYgbGkge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIG1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYgbGkgLmJvb2tEZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAjMTMyNzRGIDVweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tOiAjMTMyNzRGIDVweCBzb2xpZDtcbiAgfVxuICBtYWluIC5iaW8gLmhvYmJpZXMgLmhvYmJ5RGl2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBtYWluIC5iaW8gLmhvYmJpZXMgLmhvYmJ5RGl2IC5saXN0IGxpIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCBsaSBwIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIG1haW4gLmJpbyAubXlTdG9yeSB7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgbWFpbiAuYmlvIC5teVN0b3J5IGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIG1haW4gLmJpbyAubXlTdG9yeSAuc3VtRGl2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxTQUFBO0VBQ0EsOENBQUE7QUFESjs7QUFLQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLDZCQUFBO0VBRUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBSEo7QUFJSztFQUNHLGlCQUFBO0VBQ0EsZUFBQTtBQUZSO0FBSUk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUZSO0FBSUk7RUFDSSxjQUFBO0VBQ0ksaUJBQUE7RUFDRCxZQUFBO0VBQ0Esd0VBQUE7QUFGWDtBQUlJO0VBQ0ksY0FBQTtBQUZSOztBQUtBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUZKO0FBSUk7RUFFRyxXQUFBO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhSO0FBS0k7RUFDSSxlQUFBO0VBRUEsOENBQUE7RUFDQSxZQUFBO0FBSlI7QUFLUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUhaOztBQVFBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSwrQkFB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QXJGbEI7RUEyRk07SUFDSSxZQUFBO0VBekZWO0VBMkZNO0lBQ0ksZUFBQTtFQXpGVjtFQWdHRjtJQUNJLGVBQUE7SUFDQSxjQUFBO0VBOUZGO0VBZ0dGO0lBQ0ksZUFBQTtJQUNBLGNBQUE7RUE5RkY7RUFnR0Y7SUFFSSxzQkFBQTtFQS9GRjtFQWdHRTtJQUNJLFdBQUE7SUFDQSxnQ0FBQTtJQUNBLDZCQUFBO0VBOUZOO0VBK0ZNO0lBQ0ksV0FBQTtJQUVBLGNBQUE7RUE5RlY7RUErRlU7SUFDSSxvQkFBQTtJQUNBLFdBQUE7RUE3RmQ7RUE4RlU7SUFDSSxVQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VBNUZkO0VBbUdNO0lBQ0ksV0FBQTtJQUNBLDZCQUFBO0lBQ0EsZ0NBQUE7RUFqR1Y7RUFtR1U7SUFDSSxjQUFBO0VBakdkO0VBb0drQjtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VBbEd0QjtFQW1Ha0I7SUFDSSxVQUFBO0VBakd0QjtFQXdHTTtJQUNJLGFBQUE7SUFJQSxXQUFBO0lBQ0EsWUFBQTtFQXpHVjtFQXFHVTtJQUNJLFlBQUE7RUFuR2Q7RUF1R1U7SUFDSSxjQUFBO0VBckdkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiIFxcbiRiYXNlOiAjMzQzNDM0O1xcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICBcXG59XFxuIFxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzM0MzQzNDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgIFxcbn1cXG5oZWFkZXJ7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IHdoaXRlO1xcbiAgIFxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgIHN2Z3tcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgfVxcbiAgICBidXR0b257XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIC5uYW1leyBcXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xcbiAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgfVxcbiAgICAubmFtZTpob3ZlcntcXG4gICAgICAgIGNvbG9yOiAjRkZENzAwO1xcbiAgICB9XFxufVxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgIFxcbiAgICAucG9ydHJhaXR7XFxuICAgIFxcbiAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgIHdpZHRoOmF1dG87XFxuICAgICAgICBoZWlnaHQ6IDMyMXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcbiAgICAud2hvQW1Je1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICBcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG4uc2tpbGxze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgIFxcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxNXB4IGJsYWNrO1xcbiAgICBoMntcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MyU7XFxuICAgIH1cXG5cXG4gICAgLndyYXB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogM3Z3O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICAgICAgICAgXFxuICAgIFxcbiAgICAgICAgXFxuICAgIH1cXG4gICAgLmNhcmR7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGltZ3tcXG4gICAgICAgICBcXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgd2lkdGg6IDN2dztcXG4gICAgICAgICAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgICAgIH1cXG4gICAgICAgICBcXG4gICAgfVxcbn1cXG4ucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIC5wcm9qZWN0Q2FyZHtcXG4gICAgICAgXFxuICAgICAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIFxcbiAgICAgICAgLmxpbmtze1xcbiAgICAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwdnc7XFxuICAgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuYnRuc3tcXG4gICAgICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxdmg7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCRjAwO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAjRkZCRjAwIDFweCBzb2xpZDtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5dnc7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NXZoO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgIGgye1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICB9XFxufVxcbi5zaWRle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgIFxcbiAgXFxuICAgXFxuLnNpZGVCYXJ7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXFx0IzM2NDU0RjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIGRpc3BsYXk6IG5vbmU7XFxuICAgei1pbmRleDogYXV0bztcXG4gICAucmVtb3Zle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcXHQjMzY0NTRGO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5idG5EaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBcXG4gICAgLmJ0bntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXFx0IzM2NDU0RjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbiAgICAuYnRuOmhvdmVye1xcbiAgICAgICAgY29sb3I6ICAjRkZCRjAwO1xcbiAgICB9XFxufVxcblxcbiAgXFxufVxcbiNhY3RpdmV7XFxuICAgIGFuaW1hdGlvbjogb3BlblNpZGUgMXM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICB6LWluZGV4OiAyO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XFxuICBcXG4gICAgXFxufSAgXFxufVxcblxcbm1haW57XFxuI2FuaW1hdGV7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIC41cztcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuI3JldmVyc2V7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwIC41cztcXG4gICAgXFxufVxcbiAgICBcXG4uYmlve1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgIGJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgIH1cXG4gICBidXR0b246aG92ZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICB9XFxuICAgIFxcbiAgICAubXlTdG9yeXtcXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcXG4gICAgICAgIH1cXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDVweCAjMTMyNzRGO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAgXFxuICAgICAgICBcXG4gICAgICAgcGFkZGluZzoydmggM3Z3O1xcbiAgICAgICBcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIHdpZHRoOiAzMyU7XFxuICAgICAgICAuc3VtRGl2e1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgIH1cXG4gICAgLmJvb2tMaXN0e1xcbiAgICAgICAgIFxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMzMlO1xcbiAgICAgICAgcGFkZGluZzogMjVweDtcXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMxMzI3NEY7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbiAgICAgICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5ib29rRGl2e1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgLmJvb2tEZXNjcmlwdGlvbntcXG4gICAgICAgICAgICAgICAgbGVmdDogMjUlO1xcbiAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMxMzI3NEY7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1dnc7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnZ3IDJ2aDsgICAgIFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1dnc7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIG9se1xcbiAgICAgICAgICAgIGxpOmhvdmVye1xcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgIH1cXG4gICAuaG9iYmllc3tcXG4gICAgYm9yZGVyLXRvcDogIzEzMjc0RiA1cHggc29saWQ7XFxuICAgIFxcbiAgICBidXR0b257XFxuICAgICAgIFxcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xcbiAgICB9XFxuICAgICBcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOjJ2aCAzdnc7XFxuICAgIHdpZHRoOiAzMyU7XFxuICAgICBcXG4gICAgLmhvYmJ5RGl2e1xcbiAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIC5saXN0e1xcbiAgICAgICAgbGl7XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgd2lkdGg6IDE1dnc7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgfVxcbn1cXG4gICB9XFxufVxcbi5xdW90ZXtcXG4gIG1hcmdpbi1sZWZ0OiAzMHZ3O1xcbiAgbWFyZ2luLXRvcDogMnZoO1xcbn1cXG59XFxuXFxuQGtleWZyYW1lcyBvcGVuU2lkZSB7XFxuICAgIGZyb217XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIH1cXG4gICAgIDcwJXtcXG4gICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4xKTtcXG4gICAgIH1cXG4gICAgIHRve1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgICB9XFxufVxcbkBrZXlmcmFtZXMgc2xpZGVEb3due1xcbiAgICBmcm9te1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgICAgXFxuICAgIH1cXG5cXG4gICAgdG97XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgICAgIFxcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgc2xpZGVVcHtcXG4gICAgZnJvbXtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgdG97XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCl7XFxuICAgIC5za2lsbHN7XFxuICAgICAgICAuY2FyZHtcXG4gICAgICAgIGltZ3tcXG4gICAgICAgICAgICB3aWR0aDogNHZ3O1xcbiAgICAgICAgICAgIGhlaWdodDogNnZoO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbn0gKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpe1xcbiAgIFxcbiAgICBoZWFkZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAuaGVhZGVye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAucG9ydHJhaXR7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICBoMntcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICB9XFxuICAgICAgICBwe1xcbiAgICAgICAgICBcXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLnNraWxsc3tcXG4gICAgICBcXG4gICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBcXG4gICAgLndyYXB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuICAgICAgICAuY2FyZHtcXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG4gICAgICAgIGgye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLnByb2plY3Rze1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBcXG4gICAgICAgIC5wcm9qZWN0Q2FyZHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIC5saW5rc3tcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTV2dztcXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5idG5ze1xcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xcbiAgICAgICAgICAgICAgICBoMntcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHZ3O1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICAjRkZCRjAwO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICBcXG4gICAgICAgICAgIHBhZGRpbmc6IDI1cHg7ICAgICBcXG4gICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgXFxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgICAgICAgICAgICAgaDJ7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgcHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIFxcbiAgICB9XFxuICAgIC5zaWRle1xcbiAgICAgICAgLnNpZGVCYXJ7XFxuICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgI2FjdGl2ZXtcXG4gICAgICAgICAgICBhbmltYXRpb246IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG4vL0FCT1VUIE1FIENTU1xcbm1haW57XFxuI2FuaW1hdGV7XFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNyZXZlcnNle1xcbiAgICBhbmltYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYmlve1xcblxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAuYm9va0xpc3R7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206ICMxMzI3NEYgNXB4IHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXRvcDojMTMyNzRGIDVweCBzb2xpZDtcXG4gICAgICAgIC5ib29rRGl2e1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgbGl7XFxuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAuYm9va0Rlc2NyaXB0aW9ue1xcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGNEJCNDQ7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICAgICAuaG9iYmllc3tcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBib3JkZXItdG9wOiAjMTMyNzRGIDVweCBzb2xpZDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiMxMzI3NEYgNXB4IHNvbGlkO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC5ob2JieURpdntcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgLmxpc3R7XFxuICAgICAgICAgICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICBwe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLm15U3Rvcnl7XFxuICAgICAgICAgICAgcGFkZGluZzogNTBweDtcXG4gICAgICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIC5zdW1EaXZ7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICBcXG4gICAgXFxufVxcblxcbn1cXG5cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYnVpbGRCb29rcyBmcm9tIFwiLi9ib29rc1wiXG5pbXBvcnQgYnVpbGRIb2JiaWVzIGZyb20gXCIuL2hvYmJpZXNcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRBYm91dE1lKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGNvbnN0IGJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gYFRoZXJlIGlzIHNvbWUgZ29vZCBpbiB0aGlzIHdvcmxkPGJyPiBhbmQgaXQncyB3b3J0aCBmaWdodGluZyBmb3IuICAgIC1KLlIuUiBUb2xraWVuIGBcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdxdW90ZScpXG4gICAgYmlvLmNsYXNzTGlzdC5hZGQoJ2JpbycpXG4gICAgY29uc3QgbXlTdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbXlTdG9yeS5jbGFzc0xpc3QuYWRkKCdteVN0b3J5JylcbiAgICBjb25zdCBteUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgbXlIZWFkaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgIGlmKHN1bW1Db250YWluZXIuaWQgPT0gJ2FuaW1hdGUnKXtcbiAgICAgICAgICAgICAgICAgICBzdW1tQ29udGFpbmVyLmlkID0gJ3JldmVyc2UnXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN1bW1Db250YWluZXIuaWQgPSAnYW5pbWF0ZSdcbiAgICAgICAgICAgIH0pXG4gICAgbXlIZWFkaW5nLmlubmVySFRNTCA9ICdNeSBTdG9yeSdcbiAgICAgICAgY29uc3QgYm9va0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IHN1bW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzdW1tQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1bURpdicpXG4gICAgICAgIGNvbnN0IGhvYmJ5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgaG9iYnlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9iYnlEaXYnKVxuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzdW1tYXJ5LmlubmVySFRNTCA9ICdNeSBmYW1pbHkgaXMgb3JpZ2luYWxseSBmcm9tIEJvc25pYSBhbmQgdGhlIG9ubHkgZmFtaWx5IHRoYXQgbGl2ZXMgaW4gdGhlIHN0YXRlcyBpcyBteSBtb3RoZXIgYW5kIHNpc3Rlci4gV2hlbiBJIHdhcyBpbiBoaWdoc2Nob29sIEkgd2FzIHVuc3VyZSB3aGF0IEkgd2FudGVkIHRvIGRvIHdpdGggbXkgbGlmZSB1bnRpbCBzZW5pb3IgeWVhciB3aGVuIEkgZ290IGludG8gQVBDUyBhbmQgbGVhcm5lZCBKYXZhLiBJIHF1aWNrbHkgbGVhcm5lZCBpdCB3YXMgd2hhdCBJIHdhbnRlZCB0byBkbyBmb3IgbWFqb3JpdHkgb2YgbXkgbGlmZS4gSSBhbHdheXMgbG92ZWQgYnVpbGRpbmcgc2luY2UgSSB3YXMgYSBraWQsIGFuZCBjb2Rpbmcga2VlcHMgbXkgaW5uZXIgY2hpbGQgYWxpdmUuIEkgdHJ5IHRvIGtlZXAgbXlzZWxmIGFzIGJ1c3kgYXMgcG9zc2libGUgZGF5IGluIGFuZCBkYXkgb3V0LCBhbmQgdHJ5IHRvIHRoaW5rIG9mIHByb2dyYW1taW5nIGFzIG15IG51bWJlciBvbmUgcHJpb3JpdHkuIEhvcGluZyB0byBldmVudHVhbGx5IHN0YXJ0IG15IG93biBjb21wYW55IHRoYXQgY291bGQgYnJhbmNoIG91dCBpbnRvIHZhcmlldHkgb2Ygd29yay4gSSBhbSBidWlsZGluZyBncmVhdCBjb25uZWN0aW9ucyB3aXRoIHBlb3BsZSBhbmQgdHJ5aW5nIHRvIGhlbHAgYXMgbWFueSBhcyBJIGNhbi4gSSBoYXZlIGEgYmVhdXRpZnVsIGdpcmxmcmllbmQgdGhhdCBJIGxvdmUgd2l0aCBteSB3aG9sZSBoZWFydCBhbmQgd2Ugc2hhcmUgYSB0b3duaG9tZSB3aXRoIHR3byBkb2dzIG5hbWVkIERlbGlsYWggYW5kIE5lbW8gYW5kIG15IGJyb3RoZXIgRGVhbi4nXG4gICAgY29uc3QgYm9va0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJvb2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2Jvb2tMaXN0JylcbiAgICBjb25zdCBib29rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJvb2tUaXRsZS5pbm5lckhUTUwgPSAnTXkgQm9va3MnXG4gICAgICAgICAgICAgICAgYm9va1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZihib29rQ29udGFpbmVyLmlkID09ICdhbmltYXRlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBib29rQ29udGFpbmVyLmlkID0gJ3JldmVyc2UnXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5pZCA9ICdhbmltYXRlJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgYm9va0xpc3QuYXBwZW5kQ2hpbGQoYm9va1RpdGxlKVxuICAgIGNvbnN0IG9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKVxuICAgIGJvb2tDb250YWluZXIuYXBwZW5kQ2hpbGQob2wpXG4gICAgYm9va0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib29rRGl2JylcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVhZC5pbm5lckhUTUwgPSAnQ3VycmVudGx5IFJlYWRpbmcnXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCb29rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2lybERyYWdvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgZ2lybERyYWdvbi5pbm5lckhUTUwgPSBcIkdpcmwgV2l0aCB0aGUgRHJhZ29uIFRhdHRvb1wiXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCb29rcy5hcHBlbmRDaGlsZChnaXJsRHJhZ29uKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdG9taWNIYWJpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICAgICAgICAgIGF0b21pY0hhYml0cy5pbm5lckhUTUwgPSAnQXRvbWljIEhhYml0cydcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJvb2tzLmFwcGVuZENoaWxkKGF0b21pY0hhYml0cylcbiAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50UmVhZClcbiAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50Qm9va3MpXG4gICAgICAgICAgICAgICAgICAgIGJvb2tMaXN0LmFwcGVuZENoaWxkKGJvb2tDb250YWluZXIpXG4gICAgICAgICAgICBjb25zdCBob2JieUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgaG9iYnlIZWFkaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgIGlmKGhvYmJ5Q29udGFpbmVyLmlkID09ICdhbmltYXRlJyl7XG4gICAgICAgICAgICAgICAgICAgIGhvYmJ5Q29udGFpbmVyLmlkID0gJ3JldmVyc2UnXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGhvYmJ5Q29udGFpbmVyLmlkID0gJ2FuaW1hdGUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaG9iYnlIZWFkaW5nLmlubmVySFRNTCA9ICdNeSBIb2JiaWVzJ1xuICAgICAgICAgICAgY29uc3QgaG9iYnlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGhvYmJ5TGlzdC5jbGFzc0xpc3QuYWRkKCdob2JiaWVzJylcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKVxuICAgICAgICAgICAgaG9iYnlMaXN0LmFwcGVuZENoaWxkKGhvYmJ5SGVhZGluZylcbiAgICAgICAgICAgIGhvYmJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpXG4gICAgICAgICAgICBob2JieUxpc3QuYXBwZW5kQ2hpbGQoaG9iYnlDb250YWluZXIpXG4gICAgbXlTdG9yeS5hcHBlbmRDaGlsZChteUhlYWRpbmcpXG4gICAgc3VtbUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdW1tYXJ5KVxuICAgIG15U3RvcnkuYXBwZW5kQ2hpbGQoc3VtbUNvbnRhaW5lcilcbiAgICBiaW8uYXBwZW5kQ2hpbGQoYm9va0xpc3QpXG4gICAgYmlvLmFwcGVuZENoaWxkKG15U3RvcnkpXG4gICAgYmlvLmFwcGVuZENoaWxkKGhvYmJ5TGlzdClcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYmlvKVxuICAgIGJ1aWxkQm9va3MoJ0F0b21pYyBIYWJpdHMnLCAnV3JpdHRlbiBieSBKYW1lcyBDbGVhcjxicj48YnI+IHdhcyBhIGJlbmVmaWNhbCBib29rIGZvciBtZSB0aGF0IHRhdWdodCBtZSBob3cgdG8gYnVpbGQgcG9zaXRpdmUgaGFiaXRzIGluY3JlbWVudGFsbHkgZWFjaCBkYXkuIFdhcyBhIGJpZyBoZWxwIGZvciBtZSB0byBrZWVwIGNvZGluZycsJ2h0dHBzOi8vamFtZXNjbGVhci5jb20vYXRvbWljLWhhYml0cycgKVxuICAgIGJ1aWxkQm9va3MoJ1RoZSBBdXRvYmlvZ3JhcGh5IG9mIE1hbGNvbSBYJywnV3JpdHRlbiBieSBBbGV4IEhhbGV5PGJyPjxicj5UaGlzIGJvb2sgdGF1Z2h0IG1lIGFsb3QgYWJvdXQgdGhlIFVuaXRlZCBzdGF0ZXMgZHVyaW5nIHRoZSBlYXJseSBwZXJpb2RzIGJlZm9yZSB0aGUgY2l2aWwgcmlnaHRzIG1vdmVtZW50IGFuZCBhbHNvIGFib3V0IHRoZSBtaXN1bmRlcnN0b29kIE1hbGNvbSBYLiBMZWFybmVkIGFib3V0IHRoZSBjcmVhdGlvbiBvZiB0aGUgTmF0aW9uIG9mIElzbGFtLCBhbmQgaG93IHByb2ZvdW5kIE1hbGNvbXMgbGlmZSB3YXMuJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGhlX0F1dG9iaW9ncmFwaHlfb2ZfTWFsY29sbV9YJylcbiAgICBidWlsZEJvb2tzKCdUaGUgNSBBTSBDbHViJywnV3JpdHRlbiBieSBSb2JpbiBTaGFybWE8YnI+PGJyPkEgZ3JlYXQgcmVhZCBjcmVhdGluZyBhIG5hcnJpdGl2ZSB0aGF0IGlzIGZ1bGwgb2YgaW5mb3JtYXRpb24gYWJvdXQgZ3JlYXRzLCBzaG93ZWQgdGhlIGJlbmVmaXRzIG9mIHdha2luZyB1cCBlYXJseSBhbmQgc3RhcnRpbmcgeW91ciBkYXkgYmVmb3JlIHRoZSBzdW4gcmlzZXMuIEN1cnJlbnRseSB3cml0aW5nIHRoaXMgYXQgNCBhbSBzbyBJIHRoaW5rIGl0IGRpZCBhIGdvb2Qgam9iIDopJywnaHR0cHM6Ly93d3cuYmxpbmtpc3QuY29tL2VuL2Jvb2tzL3RoZS01LWFtLWNsdWItZW4nKVxuICAgIGJ1aWxkQm9va3MoJ1RoZSBIb2JiaXQnLCdXcml0dGVuIGJ5IEouUi5SIFRvbGtpZW48YnI+PGJyPiBBIGNsYXNzaWMgc3RvcnkgdGhhdCB3YXMgbm90aGluZyBsaWtlIHRoZSBtb3ZpZScsJ2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RoZV9Ib2JiaXQnKVxuICAgIGJ1aWxkQm9va3MoJ0RlZXAgV29yaycsYFdyaXR0ZW4gYnkgQ2FsIE5ld3BvcnQ8YnI+PGJyPiBBIGJvb2sgY292ZXJpbmcgdGhlIHRvcGljIG9mIFwiRGVlcCBXb3JrXCIuIFRoaXMgd2FzIGEgZ29vZCByZWFkIGluZm9ybWluZyBtZSBvZiB0aGUgYmVuZWZpdCBvZiBjcmVhdGluZyBhIGRpc3RyYWN0aW9uIGZyZWUgZW52aXJvbm1lbnQgdGhhdCBhbGxvd3MgeW91IHRvIHdvcmsgd2l0aCBkZWVwbmVzcy4gVGhlIHVzZSBvZiB0YWN0aWNzIHN1Y2ggYXMgJ1BvbW9kb3JvJyBhcmUgdmVyeSBoZWxwZnVsIGZvciBwYWNpbmcgeW91cnNlbGYgYW5kIGFsbG93aW5nIHBlcmlvZHMgZm9yIHlvdSB0byByZXN0YCwnaHR0cHM6Ly93d3cuc2FtdWVsdGhvbWFzZGF2aWVzLmNvbS9ib29rLXN1bW1hcmllcy9idXNpbmVzcy9kZWVwLXdvcmsvJylcbiAgICBidWlsZEJvb2tzKCdDYW50IEh1cnQgTWUnLCdCeSBEYXZpZCBHb2dnaW5zPGJyPjxicj4gVGhpcyBib29rIGNvdmVycyBhbG90IG9mIHRoZSBsaWZlIG9mIHRoZSByZXRpcmVkIE5hdnkgU2VhbCBEYXZpZCBHb2dnaW5zLiBJIGdvdCBvdXQgb2YgdGhpcyBib29rIHRoZSBpZGVhIG9mIGEgdHJ1ZGdlIHRocm91Z2ggbWVudGFsaXR5IHdoZXJlIEkgbGVhcm5lZCB0byBrZWVwIHB1c2hpbmcgdGhyb3VnaCBoYXJkc2hpcCBhbmQgYnJlYWsgdGhyb3VnaCBiYXJyaWVycyBzZXQgYnkgeW91cnNlbGYnLCdodHRwczovL2RhdmlkZ29nZ2lucy5jb20vYm9vay8nKVxuICAgIGJ1aWxkQm9va3MoJ0RvbiBRdWl4b3RlJywgJ1dyaXR0ZW4gYnkgTWlndWVsIGRlIENlcnZhbnRlczxicj48YnI+IFRoaXMgb25lIHdhcyB0aGUgYm9vayBvZiB0aGUgeWVhciBmb3IgbWUuIEkgbG92ZWQgdGhlIHN0b3J5IGFuZCB0aGUgaW1hZ2VyeSBwcmVzZW50ZWQgZnJvbSB0aGUgYXV0aG9yIHdhcyBhbWF6aW5nLiBIb25lc3RseSB0aGUgZnVubmllc3QgYm9vayBJIGhhdmUgcmVhZCBhbmQgd2FzIHNhZCB0byBmaW5pc2ggaXQgYW5kIHB1dCBpdCBkb3duLiBXaWxsIGRlZmluZXRseSBiZSByZWFkaW5nIGFnYWluJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRG9uX1F1aXhvdGUnKVxuICAgIGJ1aWxkQm9va3MoJ1d1dGhlcmluZyBIZWlnaHRzJywnV3JpdHRlbiBieSBFbWlseSBCcm9udMOrPGJyPjxicj4gQSBjbGFzc2ljIHBvcnRyYXlpbmcgbG92ZSwgZGVjZXB0aW9uLCBhbmQgYSB2YXJpZXR5IG9mIGVtb3Rpb24uIEhlYXRoY2xpZmYgd2FzIGhvbmVzdGx5IHRoZSBiZXN0IGFudGFnb25pc3QgSSBoYXZlIHNlZW4gaW4gYSB3aGlsZS4gR29vZCByZWFkJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV3V0aGVyaW5nX0hlaWdodHMnKVxuICAgIGJ1aWxkQm9va3MoJ0FuaW1hbCBGYXJtJywgJ1dyaXR0ZW4gYnkgR2VvcmdlIE9yd2VsbDxicj48YnI+IEEgZ29vZCByZXJlYWQgYWZ0ZXIgYSBiaXQgb2YgdGltZSwgd2FzIGludGVyZXN0aW5nIHNlZWluZyB0aGUgY29tcGFyaXNvbiBvZiBjZXJ0YWluIHBvbGl0aWNhbCBzeXN0ZW1zIHRvIHRoZSBzZXR0aW5nIG9mIHRoZSBib29rJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQW5pbWFsX0Zhcm0nKSBcbiAgICAgICAgYnVpbGRIb2JiaWVzKCdHYXJkZW5pbmcnLCdJIGFtIGEgYXZpZCBnYXJkbmVyIGFuZCBJIHRyeSB0byBncm93IGEgdmFyaWV0eSBvZiBwbGFudHMsIGN1cnJlbnRseSBJIGFtIGV4Y2l0ZWQgdG8gaGFydmVzdCBteSBmaXJzdCB0b21hdG8gYW5kIGRpbGwgd2hlbiB0aGV5IGFyZSBib3RoIHJlYWR5JylcbiAgICAgICAgYnVpbGRIb2JiaWVzKCdHdWl0YXInLGBJIGhhdmUgYmVlbiBwcmFjdGljaW5nIGd1aXRhciBhIGRlY2VudCBhbW91bnQgbGF0ZWx5LCBjdXJyZW50IGxlYXJuaW5nIDxhIGhyZWYgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj10SDJ3Nk94eDBrUSc+RHVzdCBpbiB0aGUgV2luZDwvYT4gYW5kIGp1c3Qgc3RhcnRlZCB0byBsZWFybiBhIDxhIGhyZWYgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1aMmIxNXJ3R0JKYyc+bHVsbGFieTwvYT5gKVxuICAgICAgICBidWlsZEhvYmJpZXMoJ1BpYW5vJyxgSSBoYXZlIGJlZW4gcGxheWluZyBwaWFubyBzaW5jZSBzZW5pb3IgeWVhciBvZiBjb2xsZWdlIGFuZCBpdHMgcmVsYXhpbmcgdG8gcGxheS4gSSBhbSByZWFsbHkgaW50byBhbGwgbXVzaWMgYnV0IGZvciBwaWFubyBJIHVzdWFsbHkganVzdCBwbGF5IGNsYXNzaWNhbC4gVGhlIG9ubHkgc29uZyBJIGtub3cgZnVsbHkgaXMgPGEgaHJlZj0naHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0yV2Zhb3RTSzNtSSc+R3ltbm9wZWRpZSBuby4gMTwvYT5gKVxuICAgICAgICBidWlsZEhvYmJpZXMoJ1JlYWRpbmcnLCdJIGhhdmUgYmVjb21lIGEgYmlnIHJlYWRlciB0aGlzIHllYXIgYXMgbXkgYm9vayBsaXN0IHdvdWxkIHNob3cgbG9sLiBJIGFwcHJlY2lhdGUgbGVhcm5pbmcgYWxvdCBhbmQgeW91IGNhbiBnZXQgc28gbXVjaCBvdXQgb2YgcmVhZGluZycpXG4gICAgICBcbiAgICAgICAgIFxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEJvb2tzKGJvb2ssZGVzY3JpcHRpb24sIGxpbmspe1xuICAgY29uc3Qgb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdvbCcpXG4gICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgIGFuY2hvci5ocmVmID0gbGlua1xuICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBjb25zdCBib29rRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgYm9va0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Jvb2tEZXNjcmlwdGlvbicpXG4gICBsaS5pbm5lckhUTUwgPSBib29rIFxuICAgYm9va0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uXG4gICBib29rRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsYm9vaylcbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCgpPT57XG4gICAgY29uc3QgaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChib29rKVxuICAgIGlkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICB9KVxuICAgXG4gICBsaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+e1xuICAgIGNvbnN0IGlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm9vaylcbiAgICBpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICB9KSBcbiAgIFxuICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsaW5rXG4gICB9KVxuICAgbGkuYXBwZW5kQ2hpbGQoYm9va0Rlc2NyaXB0aW9uKVxuICAgXG4gICBvbC5hcHBlbmRDaGlsZChsaSlcbiAgICBcbn0iLCJpbXBvcnQgYnVpbGRIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgd2VhdGhlciBmcm9tICcuL3BpY3Mvd2VhdGhlckltZy5wbmcnXG5pbXBvcnQgYnVpbGRTa2lsbHMgZnJvbSAnLi9za2lsbHMnXG5pbXBvcnQgYnVpbGRQcm9qZWN0IGZyb20gJy4vcHJvamVjdCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWFpbigpe1xuYnVpbGRIZWFkZXIoKVxuYnVpbGRTa2lsbHMoKVxuIFxuYnVpbGRQcm9qZWN0KHdlYXRoZXIsJ2h0dHBzOi8vcGF0cmljay10b21pYy5naXRodWIuaW8vV2VhdGhlckFQSS8nLCdodHRwczovL2dpdGh1Yi5jb20vUGF0cmljay1Ub21pYy9XZWF0aGVyQVBJJywnVGhpcyBhcHBsaWNhdGlvbiBpcyBteSBmaXJzdCB0aW1lIHV0aWxpemluZyBhIEFQSSwgSSBkbyBzb21lIHNpbXBsZSBhbmltYXRpb25zIHdpdGhpbiB0aGlzIHByb2plY3QgYW5kIGxlYXJuZWQgYWxvdCB0aHJvdWdoIHRoZSB1c2Ugb2YgcmVzcG9uc2l2ZSBkZXNpZ24gYW5kIGFuaW1hdGlvbicsJ1dlYXRoZXIgQXBwbGljYXRpb24nKVxufVxuIFxuIiwiaW1wb3J0IHBvcnRhaXQgZnJvbSAnLi9waWNzL1RvbWljLlAuanBnJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRIZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuY29uc3QgcG9ydHJhaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxucG9ydHJhaXQuY2xhc3NMaXN0LmFkZCgncGljT2ZNZScpXG5pbWcuY2xhc3NMaXN0LmFkZCgncG9ydHJhaXQnKVxuaW1nLnNyYyA9IHBvcnRhaXRcbnBvcnRyYWl0LmFwcGVuZENoaWxkKGltZylcbmhlYWRlci5hcHBlbmRDaGlsZChwb3J0cmFpdClcbmNvbnN0IHdob0FtSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG53aG9BbUkuY2xhc3NMaXN0LmFkZCgnd2hvQW1JJylcbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuaDIuaW5uZXJIVE1MID0gJ015IG5hbWUgaXMgUGF0cmljayBFbWFudWVsIFRvbWljJ1xud2hvQW1JLmFwcGVuZENoaWxkKGgyKVxuY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxucC5pbm5lckhUTUwgPSAnSSBhbSBhIHN0dWRlbnQgYXQgdGhlIFVuaXZlcnNpdHkgb2YgU291dGggRmxvcmlkYSBhbmQgSSBncmFkdWF0ZSBpbiB0aGUgU3ByaW5nIG9mIDIwMjQ8YnI+d2l0aCBhIEJhY2hlbG9ycyBkZWdyZWUgaW4gSW5mb3JtYXRpb24gU2NpZW5jZTxicj5JIGFtIGEgbWFuIHdpdGggYWxvdCBvZiBhbWJpdGlvbiB0byBiZXR0ZXIgdGhlIHdvcmxkLCBhbmQgYW0gdGhlIGZpcnN0IG9mIG15IGZhbWlseSB0byBiZTxicj5ib3JuIGluIEFtZXJpY2EuIEkgc3BlbmQgYXMgbXVjaCB0aW1lIGFzIEkgY2FuIGxlYXJuaW5nIGhvdyB0byBkZXZlbG9wIHdlYnNpdGVzIGV2ZXJ5ZGF5PGJyPkl0IGlzIG5vdCBqdXN0IGZ1biBmb3IgbWUgYnV0IGJyaW5ncyBpbW1lbnNlIHNhdGlzZmFjdGlvbiB3aGVuIEkgY2FuIGJ1aWxkIGFuZCBkZXNpZ24gc29tZXRoaW5nPGJyPnRoYXQgSSBrbm93IGlzIGdvb2QuIEkgbG92ZSBoZWxwaW5nIHBlb3BsZSwgYW5kIEkgYW0gbG9va2luZyBmb3IgYSBvcHBvcnR1bml0eSB0byBzaG93IDxicj5teSBza2lsbHNldCBhbmQgbGVhcm4gdGhyb3VnaCBvdGhlcnMnXG53aG9BbUkuYXBwZW5kQ2hpbGQocClcbmhlYWRlci5hcHBlbmRDaGlsZCh3aG9BbUkpXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG5tYWluLmFwcGVuZENoaWxkKGhlYWRlcilcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEhvYmJpZXModGl0bGUsZGVzY3JpcHRpb24pe1xuICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0JylcbiAgICAgbGkuaW5uZXJIVE1MID0gdGl0bGVcbiAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICBwLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uXG4gICBcbiAgICAgbGkuYXBwZW5kQ2hpbGQocClcbiAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSlcbn0iLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBidWlsZFNpZGVCYXIgZnJvbSAnLi9zaWRlYmFyJ1xuaW1wb3J0IGJ1aWxkTWFpbiBmcm9tICcuL2J1aWxkTWFpbidcbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5uYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIG1haW4uaW5uZXJIVE1MID0gJydcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMzQzNDM0J1xuICAgIGJ1aWxkTWFpbigpICBcbn0pXG5idWlsZE1haW4oKVxuYnVpbGRTaWRlQmFyKCkiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFByb2plY3Qoc3JjLCBzaXRlTGluayxnaExpbmssIHBJbm5lciwgaGVhZCl7XG4gICAgXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG4gICAgaWYobWFpbi5jb250YWlucyhwcm9qZWN0cyk9PXRydWUpe1xuICAgIFxuICAgICAgICBcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coZmFsc2UpXG4gICAgICAgIHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKVxuICAgIH1cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYnRucy5jbGFzc0xpc3QuYWRkKCdidG5zJylcbiAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdsaW5rcycpXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGxldCBjb3VudCA9IDBcbiAgICBpbWcuc3JjID0gc3JjXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQoaW1nKVxuICAgIHdoaWxlKGNvdW50PDIpe1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ0bi50eXBlID0gJ3N1Ym1pdCdcbiAgICAgICAgc3dpdGNoKGNvdW50KXtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBmb3JtLmFjdGlvbiA9IHNpdGVMaW5rXG4gICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9ICdWaWV3IExpdmUgU2l0ZSdcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bilcbiAgICAgICAgICAgICAgICBidG5zLmFwcGVuZENoaWxkKGZvcm0pXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgZm9ybS5hY3Rpb24gPSBnaExpbmtcbiAgICAgICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gJ1NvdXJjZSBDb2RlJ1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuKVxuICAgICAgICAgICAgICAgIGJ0bnMuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWsgXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZCgncHJvamVjdENhcmQnKVxuICAgbGlua3MuYXBwZW5kQ2hpbGQoYnRucylcbiAgICBwLmlubmVySFRNTCA9IHBJbm5lclxuICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQobGlua3MpXG4gICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKVxuICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICBoMi5pbm5lckhUTUwgPSBoZWFkXG4gICAgZGVzYy5hcHBlbmRDaGlsZChoMilcbiAgICBkZXNjLmFwcGVuZENoaWxkKHApXG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZGVzYylcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZClcbiAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RzKVxufVxuIiwiaW1wb3J0IGJ1aWxkTWFpbiBmcm9tICcuL2J1aWxkTWFpbidcbmltcG9ydCBidWlsZEFib3V0TWUgZnJvbSAnLi9hYm91dCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkU2lkZUJhcigpe1xuICAgIGNvbnN0IHNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZScpXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXJCdG4nKVxuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2lkZUJhci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnc2lkZUJhcicpXG4gICAgcmVtb3ZlQnRuLmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMzlcIiBoZWlnaHQ9XCIzNlwiIHZpZXdCb3g9XCIwIDAgMzkgMzZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cmVjdCB3aWR0aD1cIjQzLjY4NDZcIiBoZWlnaHQ9XCI3Ljk1NTNcIiByeD1cIjMuOTc3NjVcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC43NDY4MSAwLjY2NTAzNyAtMC43ODc4MTEgMC42MTU5MTcgNi4yNjcyMSAxLjk5MDYpXCIgZmlsbD1cIndoaXRlXCIvPiA8cmVjdCB3aWR0aD1cIjQyLjkyNDhcIiBoZWlnaHQ9XCI4LjA4ODE4XCIgcng9XCI0LjA0NDA5XCIgdHJhbnNmb3JtPVwibWF0cml4KC0wLjY3ODMwMiAwLjczNDc4MyAtMC44NDEyNDQgLTAuNTQwNjU2IDM3LjM1MTYgNC4zNzI5MilcIiBmaWxsPVwid2hpdGVcIi8+IDwvc3ZnPidcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgXG4gICAgICAgc2lkZUJhci5zZXRBdHRyaWJ1dGUoJ2lkJywnYWN0aXZlJylcbiAgICB9KVxuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgc2lkZUJhci5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywnYWN0aXZlJylcbiAgICB9KVxuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKVxuICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBob21lRGl2LmNsYXNzTGlzdC5hZGQoJ2J0bkRpdicpXG5jb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5wLmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgMTgzIDE1MFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiA8cmVjdCB4PVwiNDFcIiB5PVwiNTBcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHJ4PVwiMTBcIiBmaWxsPVwiI0ZGQkYwMFwiLz4gPHBhdGggZD1cIk04NC42MjYgNi41MDYxMUM4OC40ODIgMi44NTY0NiA5NC41MTggMi44NTY0NSA5OC4zNzQgNi41MDYxTDE1Mi41MDIgNTcuNzM3MkMxNTkuMDY5IDYzLjk1MjkgMTU0LjY3MSA3NSAxNDUuNjI4IDc1SDM3LjM3MTdDMjguMzI5NSA3NSAyMy45MzA1IDYzLjk1MjkgMzAuNDk3NyA1Ny43MzcyTDg0LjYyNiA2LjUwNjExWlwiIGZpbGw9XCIjRkZCRjAwXCIvPjxwYXRoIGQ9XCJNNzQgMTA2Qzc0IDEwMC40NzcgNzguNDc3MiA5NiA4NCA5Nkg5OEMxMDMuNTIzIDk2IDEwOCAxMDAuNDc3IDEwOCAxMDZWMTUwSDc0VjEwNlpcIiBmaWxsPVwiYmxhY2tcIi8+PC9zdmc+J1xuICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgaG9tZS5pbm5lckhUTUwgPSAnSG9tZSdcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gJydcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzM0MzQzNCdcbiAgICAgICAgYnVpbGRNYWluKClcbiAgICB9KVxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZSlcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKHApXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChob21lRGl2KVxuICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhYm91dERpdi5jbGFzc0xpc3QuYWRkKCdidG5EaXYnKVxuICAgICBjb25zdCBhYm91dFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICBhYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRjRCQjQ0J1xuICAgICAgICBidWlsZEFib3V0TWUoKVxuICAgICB9KVxuICAgICBhYm91dEJ0bi5pbm5lckhUTUwgPSAnQWJvdXQgTWUnXG4gICAgIGFib3V0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0QnRuKVxuICAgICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dFApXG4gICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoYWJvdXREaXYpXG4gICAgc2lkZS5hcHBlbmRDaGlsZChzaWRlQmFyKVxufSIsImltcG9ydCBqYXZhIGZyb20gJy4vcGljcy9qYXZhLnBuZydcbmltcG9ydCBzYXNzIGZyb20gJy4vcGljcy9zYXNzLnBuZydcbmltcG9ydCBjc3MgZnJvbSAnLi9waWNzL2Nzcy5wbmcnXG5pbXBvcnQgaHRtbCBmcm9tICcuL3BpY3MvaHRtbC5wbmcnXG5pbXBvcnQganMgZnJvbSAgJy4vcGljcy9qcy5wbmcnXG5pbXBvcnQgcHkgZnJvbSAnLi9waWNzL3B5dGhvbi5wbmcnXG5pbXBvcnQgc3FsIGZyb20gJy4vcGljcy9zcWwucG5nJ1xuaW1wb3J0IHdwIGZyb20gJy4vcGljcy93ZWJwYWNrLnBuZydcbmltcG9ydCB0cyBmcm9tICcuL3BpY3MvdHMucG5nJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRTa2lsbHMoKXtcbiAgICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgd3JhcC5jbGFzc0xpc3QuYWRkKCdza2lsbHMnKVxuICAgIGNvbnN0IHNraWxscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2tpbGxzLmNsYXNzTGlzdC5hZGQoJ3dyYXAnKVxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGgyLmlubmVySFRNTCA9IFwiTXkgU2tpbGxzZXRcIlxuICAgIHdyYXAuYXBwZW5kQ2hpbGQoaDIpXG4gICAgbGV0IGNvdW50ID0gMFxuICAgIHdoaWxlKGNvdW50IDwgOSl7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIFxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgICAgICBzd2l0Y2goY291bnQpe1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdKYXZhJyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBqYXZhXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdKYXZhJ1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzEwcHgnXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdQeXRob24nXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHB5XG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdQeXRob24nXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ0hUTUwnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGh0bWxcbiAgICAgICAgICAgICAgICBwLnN0eWxlLm1hcmdpbkxlZnQgPSAnMTFweCdcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0hUTUwnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ0NTUydcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gY3NzXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdDU1MnXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzEycHgnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ0phdmFTY3JpcHQnXG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpbkxlZnQgPSAnMjBweCdcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0ganNcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0phdmFTY3JpcHQnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ215U1FMJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBzcWxcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ215U1FMJ1xuICAgICAgICAgICAgICAgIHAuc3R5bGUubWFyZ2luTGVmdCA9ICc4cHgnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ1Nhc3MnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHNhc3NcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ1Nhc3MnXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzVweCdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnV2VicGFjaydcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gd3BcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ1dlYnBhY2snXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ1R5cGVTY3JpcHQnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHRzXG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpbkxlZnQgPSAnMjBweCdcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ1R5cGVzY3JpcHQnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZChza2lsbHMpXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQod3JhcClcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9