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
.side #deActive {
  animation: closeSide 1s;
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
  z-index: 5;
  height: 900px;
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
  z-index: 3;
  border: solid 1px #13274F;
  display: none;
  position: absolute;
  width: 18vw;
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
main .bio .hobbies .hobbyDiv .list li {
  font-size: 18px;
}
main .bio .hobbies .hobbyDiv .list li p {
  border: none;
  width: 15vw;
}
main .quote {
  margin-left: 30vw;
  margin-top: 2vh;
}
main .familyAlbum {
  border-top-left-radius: 15px;
  border-top-left-radius: 15px;
  background-color: #13274F;
  color: white;
  text-align: center;
}
main .imgSlider {
  width: 1800vw;
  background-color: #13274F; /* Chrome 10-25, Safari 5.1-6 */
  display: flex;
  transition: transform 1s ease-in;
  transform: translateX(0);
}
main .imgSlider img {
  margin-left: 5vw;
  margin-bottom: 5vh;
  height: 25vh;
  width: auto;
  border-radius: 50px;
}
main .explain {
  margin: 5vh 5vw;
}
main .explain h2 {
  text-align: center;
}
main .explain p {
  line-height: 25px;
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
@keyframes closeSide {
  from {
    transform: scaleX(1);
    display: block;
  }
  to {
    transform: scaleX(0);
    display: none;
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
@media (max-width: 1000px) {
  .skills .wrap .card img {
    width: 6vw;
    height: 6vh;
  }
  .projects .projectCard {
    flex-direction: column;
  }
  .projects .projectCard .links {
    margin-left: 8px;
  }
  .projects .projectCard .links img {
    margin-left: 2vw;
    width: 30vw;
  }
  .projects .projectCard .links .btns button {
    width: 10vw;
  }
  .projects .projectCard .description {
    margin-right: 5vw;
  }
  main .bio .myStory .sumDiv P {
    font-size: 15px;
    font-weight: bold;
  }
  main .bio .bookList .bookDiv .bookDescription {
    width: 45vw;
  }
  main .bio .bookList .bookDiv li {
    font-size: 15px;
  }
  main .bio .hobbies .hobbyDiv .list {
    font-weight: bold;
  }
  main .bio .hobbies .hobbyDiv .list li {
    font-size: 15px;
  }
  main .bio .hobbies .hobbyDiv .list p {
    font-size: 13px;
  }
  main .imgSlider img {
    height: 15vh;
  }
}
@media (max-width: 700px) {
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
  main {
    display: flex;
    flex-direction: column;
  }
  @keyframes slideUp {
    from {
      transform: scaleY(1);
      display: block;
    }
    to {
      transform: scaleY(0);
    }
  }
  main .quote {
    margin-left: 10vw;
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
    min-height: 251vh;
    flex-direction: column;
  }
  main .bio .bookList {
    width: 100%;
    border-bottom: #13274F 5px solid;
    border-top: #13274F 5px solid;
  }
  main .bio .bookList .bookDiv {
    pointer-events: none;
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
    font-size: 10px;
    position: relative;
    display: block;
  }
  main .bio .hobbies {
    margin-bottom: 50vh;
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
  main .imgSlider img {
    height: 25vh;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":[" \n$base: #343434;\n*{\n    margin: 0;\n    font-family: 'Courier New', Courier, monospace;\n   \n}\n \nbody{\n    background-color:#343434;\n    width: 100%;\n    height: 100%;\n     \n}\nheader{\n    box-shadow: 0px 5px 5px white;\n   \n    position: sticky;\n    top: 0;\n    background-color: #13274F;\n    z-index: 1;\n    display: flex;\n    justify-content: space-between;\n     svg{\n        margin-left: 10px;\n        margin-top: 5px;\n     }\n    button{\n        background-color: #13274F;\n        border: none;\n        margin-top: 5px;\n        cursor: pointer;\n    }\n    .name{ \n        font-size: 1em;\n            margin-left: 15vw;\n           color: white;\n           font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n        }\n    .name:hover{\n        color: #FFD700;\n    }\n}\n.header{\n    display: flex;\n    padding: 25px;\n    justify-content: space-around;\n   \n    .portrait{\n    \n       margin: 5px;\n        width:auto;\n        height: 321px;\n        border-radius: 10px;\n    }\n    .whoAmI{\n        margin-top: 5vh;\n    \n        font-family: 'Courier New', Courier, monospace;\n        color: white;\n        p{\n            font-size: 20px;\n            line-height: 25px;\n            \n        }\n    }\n}\n.skills{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n     \n    box-shadow: 0px 15px 15px black;\n    h2{\n        margin-left: 43%;\n    }\n\n    .wrap{\n        margin-left: 3vw;\n        background-color: white;\n        margin-bottom: 10px;\n        display: grid;\n        grid-template-columns: repeat(auto-fit,minmax(150px, 1fr));\n         \n    \n        \n    }\n    .card{\n        display: flex;\n        flex-direction: column;\n        img{\n         \n            padding: 2px;\n            \n            \n            background-color: white;\n            width: 3vw;\n            height: 6vh;\n        }\n         \n    }\n}\n.projects{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    .projectCard{\n       \n        padding: 50px;\n        display: flex;\n        \n        .links{\n            img{\n                border-radius: 10px;\n                display: flex;\n                flex-direction: column;\n                width: 20vw;\n    \n            }\n            .btns{\n                button{\n                    cursor: pointer;\n                    margin: 1vh;\n                    background-color: #FFBF00;\n                    border: #FFBF00 1px solid;\n                    width: 9vw;\n                    height:5vh;\n                    border-radius: 10px;\n                    font-size: 15px;\n                    font-weight: bold;\n                }\n                button:hover{\n                    background-color: $base;\n                    color: white;\n                }\n                display: flex;\n                \n                align-items: center;\n            }\n        }\n        .description{\n        h2{\n            color: white;\n            margin-left: 5vw;\n        }\n        p{\n             \n            color: white;\n            font-size: 18px;\n            margin-left: 5vw;\n            margin-top: 2vh;\n        }\n    }\n    }\n}\n.side{\n    display: flex;\n    justify-content: flex-end;\n   \n  \n   \n.sideBar{\n    width: 25vw;\n  \n    height: 100%;\n    background-color: \t#36454F;\n    position: absolute;\n   display: none;\n   z-index: auto;\n   .remove{\n    background-color: \t#36454F;\n    border: none;\n    align-self: flex-end;\n    cursor: pointer;\n}\n.btnDiv{\n    display: flex;\n     \n    .btn{\n        cursor: pointer;\n        margin-top: 15px;\n        align-self: flex-start;\n        border: none;\n        background-color: \t#36454F;\n        font-size: 20px;\n        color: white;\n    }\n    .btn:hover{\n        color:  #FFBF00;\n    }\n}\n\n  \n}\n#active{\n    animation: openSide 1s;\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n   z-index: 2;\n    transform-origin: center right;\n  \n    \n}  \n#deActive{\n    animation: closeSide 1s;\n    transform-origin: center right;\n}\n}\n\nmain{\n   \n#animate{\n    animation: slideDown .5s;\n    transform-origin: top;\n    display: block;\n}\n#reverse{\n    transform-origin: top;\n    animation: slideUp .5s;\n    \n}\n    \n.bio{\n    z-index: 5;\n    height: 900px;\n    z-index: 1;\n    display: flex;\n   button{\n    cursor: pointer;\n   }\n   button:hover{\n    color: white;\n   }\n    \n    .myStory{\n        button{\n            font-size: 1.5em;\n            font-weight: bold;\n            text-align: left;\n             margin-bottom: 2vh;\n            border: none;\n            background-color: #F4BB44;\n        }\n        height: auto;\n        border-bottom: none;\n        border: solid 5px #13274F;\n        border-bottom: none;\n       \n        \n       padding:2vh 3vw;\n       \n        font-size: 18px;\n        color: black;\n        width: 33%;\n        .sumDiv{\n            display: none;\n        }\n\n    }\n    .bookList{\n         \n        height: auto;\n        display: flex;\n        flex-direction: column;\n        width: 33%;\n        padding: 25px;\n        border: 5px solid #13274F;\n        border-right: none;\n        border-bottom: none;\n        border-left: none;\n        button{\n            border: none;\n            font-size: 1.5em;\n            font-weight: bold;\n            text-align: left;\n             margin-bottom: 2vh;\n           width: 10vw;\n            background-color: #F4BB44;\n        }\n        .bookDiv{\n            \n            display: none;\n            .bookDescription{\n                left: 25%;\n                 z-index: 3;\n                border: solid 1px #13274F;\n                display: none;\n                position: absolute;\n                width: 18vw;\n                height: auto;\n                \n                padding: 2vw 2vh;     \n                background-color: #343434;\n                border-radius: 10px;\n            }\n            li{\n             \n                margin-bottom: 2vh;\n                font-size: 18px;\n                font-weight: bold;\n                width: 15vw;\n            }\n            ol{\n            li:hover{\n                color: white;\n                cursor: pointer;\n            }\n            }\n        }\n        \n    }\n   .hobbies{\n    border-top: #13274F 5px solid;\n    \n    button{\n       \n        font-size: 1.5em;\n        font-weight: bold;\n        text-align: left;\n         margin-bottom: 2vh;\n        border: none;\n        background-color: #F4BB44;\n    }\n     \n    height: auto;\n    padding:2vh 3vw;\n    width: 33%;\n     \n    .hobbyDiv{\n         display: none;\n    .list{\n        li{\n            font-size: 18px;\n        p{\n            border: none;\n           \n           width: 15vw;\n        }\n    }\n    }\n}\n   }\n}\n.quote{\n  margin-left: 30vw;\n  margin-top: 2vh;\n}\n.familyAlbum{\n    border-top-left-radius: 15px;\n    border-top-left-radius: 15px;\n    background-color: #13274F;\n    color:white;\n    text-align: center;\n}\n.imgSlider{\n    width: 1800vw;\n    \n    background-color: #13274F; /* Chrome 10-25, Safari 5.1-6 */\n    display: flex;\n    transition: transform 1s ease-in;\n    transform: translateX(0);\n    img{\n        margin-left: 5vw;\n        margin-bottom: 5vh;\n        height: 25vh;\n        width: auto;\n        border-radius: 50px;\n    }\n}\n.explain{\n   margin: 5vh 5vw;\n    h2{\n        text-align: center;\n    }\n    p{\n        line-height: 25px;\n    }\n}\n}\n\n@keyframes openSide {\n    from{\n      transform: scaleX(0);\n    }\n     70%{\n       transform: scaleX(1.1);\n     }\n     to{\n        transform: scaleX(1);\n     }\n}\n@keyframes closeSide{\n    from{\n        transform: scaleX(1);\n        display: block;\n    }\n    to{\n        transform: scaleX(0);\n        display: none;\n    }\n}\n@keyframes slideDown{\n    from{\n        transform: scaleY(0);\n      \n    }\n\n    to{\n        transform: scaleX(1);\n        \n    }\n}\n@keyframes slideUp{\n    from{\n        transform: scaleY(1);\n        display: block;\n    }\n\n    to{\n        transform: scaleY(0);\n        display: none;\n    }\n}\n @media (max-width: 1000px){\n    .skills{\n        .wrap{\n            .card{\n         img{\n             width: 6vw;\n             height: 6vh;\n        }\n    }\n}\n}\n.projects{\n    .projectCard{\n        \n        flex-direction: column;\n        .links{\n            margin-left: 8px;\n            img{\n                margin-left: 2vw;\n                width: 30vw;\n            }\n        \n        .btns{\n            button{\n                width: 10vw;\n            }\n        }\n    }\n    .description{\n        \n        margin-right: 5vw;\n    }\n}\n}\nmain{ \n     \n.bio{\n    .myStory{\n        .sumDiv{\n            P{\n                font-size: 15px;\n                font-weight: bold;\n            }\n        }\n    }\n    .bookList{\n        .bookDiv{\n            .bookDescription{\n                width: 45vw;\n            }\n            li{\n                font-size: 15px;\n            }\n        }\n      \n    }\n    .hobbies{\n\n   .hobbyDiv{\n    .list{\n        font-weight: bold;\n        li{\n            font-size: 15px;\n        }\n        p{\n            font-size: 13px;\n        }\n    }\n   }\n}\n}\n.imgSlider{\n    img{\n        height: 15vh;\n    }\n}\n}\n }\n@media (max-width: 700px){\n   \n    header{\n        width: 100%;\n    }\n    .header{\n        width: 100%;\n         \n        padding: 5px;\n        display: flex;\n        flex-wrap: wrap;\n         justify-content: center;\n         align-items: center;\n        .portrait{\n            margin-top: 5vh;\n            height: 160px;\n            \n        }\n        h2{\n            \n            font-size: 24px;\n        }\n        p{\n          \n            font-size: 10px;\n            line-height: 12px;\n        }\n    }\n    .skills{\n      \n       width: 100%;\n        \n    .wrap{\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n        justify-content: space-around;\n\n        .card{\n             \n            \n            img{\n            width: 40px;\n            height: 40px;\n        }\n    }\n}\n        h2{\n            display: none;\n        }\n    }\n    .projects{\n        grid-template-columns: 1fr;\n        \n        .projectCard{\n            flex-direction: column;\n            .links{\n                \n                img{\n                   width: 250px;\n                   margin-left: 15vw;\n                   height: auto;\n                }\n                .btns{\n                    \n                button{\n                    width: 40vw;\n                    height: 40px;\n                    \n                    font-weight: normal;\n                }\n                }\n            }\n            .description{\n                h2{\n                    margin-left: 20vw;\n                    color:  #FFBF00;\n                }\n            }\n             \n           padding: 25px;     \n              \n            \n        }\n        \n      \n            .description{\n                margin-left: 20px;\n                h2{\n                    font-size: 16px;\n                }\n                p{\n                    font-size: 10px;\n                }\n            }\n         \n    }\n    .side{\n        .sideBar{\n            width: 350px;\n        }\n        #active{\n            animation: none;\n        }\n    }\n\n\n//ABOUT ME CSS\nmain{\n    @keyframes slideUp{\n        from{\n            transform: scaleY(1);\n            display: block;\n        }\n    \n        to{\n            transform: scaleY(0);\n            \n        }\n    }\n    display: flex;\n    flex-direction: column;\n    \n    \n    .quote{\n       margin-left: 10vw;\n    }\n#animate{\n    animation: none;\n    display: block;\n}\n#reverse{\n    animation: none;\n    display: block;\n}\n.bio{\n    min-height: 251vh;\n    flex-direction: column;\n    .bookList{\n        width: 100%;\n        border-bottom: #13274F 5px solid;\n        border-top:#13274F 5px solid;\n        .bookDiv{\n            pointer-events: none;\n            width: 100%;\n           \n            display: block;\n            li{\n                pointer-events: none;\n                width: 100%;\n            .bookDescription{\n                width: 80%;\n                background-color:#F4BB44;\n                border: none;\n                font-size: 10px;\n                position: relative;\n                display: block;\n              \n            }\n        }\n           \n        }\n    }\n        .hobbies{\n           margin-bottom: 50vh;\n            width: 100%;\n            border-top: #13274F 5px solid;\n            border-bottom:#13274F 5px solid;\n            \n            .hobbyDiv{\n                display: block;\n                 \n                .list{\n                    li{\n                        font-weight: bold;\n                        margin-bottom: 5vh;\n                        width: 100%;\n                    p{\n                        width: 80%;\n                    }\n                }\n            }\n\n            }\n        }\n        .myStory{\n            padding: 50px;\n            button{\n                border: none;\n            }\n            width: 100%;\n            border: none;\n            .sumDiv{\n                display: block;\n            }\n        }\n      \n    \n}\n.imgSlider{\n    img{\n        height: 25vh;\n    }\n}\n}\n\n\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img */ "./src/img.js");



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
      const familyAlbum = document.createElement('h1')
      familyAlbum.innerHTML = 'Family Album'
      familyAlbum.classList.add('familyAlbum')
      main.appendChild(familyAlbum)
         ;(0,_img__WEBPACK_IMPORTED_MODULE_2__["default"])()
         const div = document.createElement('div')
         const explainHead = document.createElement('h2')
         explainHead.innerHTML = 'The people in my Family'
         const explain = document.createElement('p')
         explain.innerHTML = 'So my family is forever growing. I love making new connections and keeping tighter bonds, I have always had a small immediate family, but the people I truly love will always stay with me and I will always have their back. Some of the people in here are family by blood like my sister Anita and my mom Spomenka. But the closest person in my life is my brother dean, and we have been everywhere and done everything together. He is really my rock. People like my little brother Daniel or my philosophy teacher Timothy are two people who I love dearly and I know they will go far. My brother Thien is someone who always has my back and I know he will always be by my side. There is so many members of my family and I hope it keeps growing. More pictures to come!'
        div.appendChild(explainHead)
        div.appendChild(explain)
        div.classList.add('explain')
        main.appendChild(div)
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

/***/ "./src/img.js":
/*!********************!*\
  !*** ./src/img.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildImageSlider)
/* harmony export */ });
/* harmony import */ var _slider_ash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider/ash.jpg */ "./src/slider/ash.jpg");
/* harmony import */ var _slider_baby_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider/baby.jpg */ "./src/slider/baby.jpg");
/* harmony import */ var _slider_brother_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider/brother.jpg */ "./src/slider/brother.jpg");
/* harmony import */ var _slider_brothers_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider/brothers.jpg */ "./src/slider/brothers.jpg");
/* harmony import */ var _slider_bubba_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider/bubba.jpg */ "./src/slider/bubba.jpg");
/* harmony import */ var _slider_bucs_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider/bucs.jpg */ "./src/slider/bucs.jpg");
/* harmony import */ var _slider_butterfly_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider/butterfly.jpg */ "./src/slider/butterfly.jpg");
/* harmony import */ var _slider_cool_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slider/cool.jpg */ "./src/slider/cool.jpg");
/* harmony import */ var _slider_croatia_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slider/croatia.jpg */ "./src/slider/croatia.jpg");
/* harmony import */ var _slider_daniel_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slider/daniel.jpg */ "./src/slider/daniel.jpg");
/* harmony import */ var _slider_dolphin_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slider/dolphin.jpg */ "./src/slider/dolphin.jpg");
/* harmony import */ var _slider_eyes_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slider/eyes.jpg */ "./src/slider/eyes.jpg");
/* harmony import */ var _slider_family_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slider/family.jpg */ "./src/slider/family.jpg");
/* harmony import */ var _slider_friends_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slider/friends.jpg */ "./src/slider/friends.jpg");
/* harmony import */ var _slider_gaggle_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./slider/gaggle.jpg */ "./src/slider/gaggle.jpg");
/* harmony import */ var _slider_gang_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./slider/gang.jpg */ "./src/slider/gang.jpg");
/* harmony import */ var _slider_goofs_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./slider/goofs.jpg */ "./src/slider/goofs.jpg");
/* harmony import */ var _slider_goons_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./slider/goons.jpg */ "./src/slider/goons.jpg");
/* harmony import */ var _slider_grandpa_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./slider/grandpa.jpg */ "./src/slider/grandpa.jpg");
/* harmony import */ var _slider_max_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./slider/max.jpg */ "./src/slider/max.jpg");
/* harmony import */ var _slider_momma_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./slider/momma.jpg */ "./src/slider/momma.jpg");
/* harmony import */ var _slider_monkey_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./slider/monkey.jpg */ "./src/slider/monkey.jpg");
/* harmony import */ var _slider_pose_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./slider/pose.jpg */ "./src/slider/pose.jpg");
/* harmony import */ var _slider_puppet_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./slider/puppet.jpg */ "./src/slider/puppet.jpg");
/* harmony import */ var _slider_shemk_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./slider/shemk.jpg */ "./src/slider/shemk.jpg");
/* harmony import */ var _slider_siblings_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./slider/siblings.jpg */ "./src/slider/siblings.jpg");
/* harmony import */ var _slider_sissy_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./slider/sissy.jpg */ "./src/slider/sissy.jpg");
/* harmony import */ var _slider_skipping_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./slider/skipping.jpg */ "./src/slider/skipping.jpg");
/* harmony import */ var _slider_stoic_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./slider/stoic.jpg */ "./src/slider/stoic.jpg");
/* harmony import */ var _slider_strongTim_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./slider/strongTim.jpg */ "./src/slider/strongTim.jpg");
/* harmony import */ var _slider_sweetT_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./slider/sweetT.jpg */ "./src/slider/sweetT.jpg");
/* harmony import */ var _slider_thienBday_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./slider/thienBday.jpg */ "./src/slider/thienBday.jpg");
/* harmony import */ var _slider_thor_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./slider/thor.jpg */ "./src/slider/thor.jpg");
/* harmony import */ var _slider_turtle_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./slider/turtle.jpg */ "./src/slider/turtle.jpg");
/* harmony import */ var _slider_water_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./slider/water.jpg */ "./src/slider/water.jpg");




































function buildImageSlider(){
    const names = [_slider_ash_jpg__WEBPACK_IMPORTED_MODULE_0__,_slider_baby_jpg__WEBPACK_IMPORTED_MODULE_1__,_slider_brother_jpg__WEBPACK_IMPORTED_MODULE_2__,_slider_brothers_jpg__WEBPACK_IMPORTED_MODULE_3__,_slider_bubba_jpg__WEBPACK_IMPORTED_MODULE_4__,_slider_bucs_jpg__WEBPACK_IMPORTED_MODULE_5__,_slider_butterfly_jpg__WEBPACK_IMPORTED_MODULE_6__,_slider_cool_jpg__WEBPACK_IMPORTED_MODULE_7__,_slider_croatia_jpg__WEBPACK_IMPORTED_MODULE_8__,_slider_daniel_jpg__WEBPACK_IMPORTED_MODULE_9__,_slider_dolphin_jpg__WEBPACK_IMPORTED_MODULE_10__,_slider_eyes_jpg__WEBPACK_IMPORTED_MODULE_11__,_slider_family_jpg__WEBPACK_IMPORTED_MODULE_12__,_slider_friends_jpg__WEBPACK_IMPORTED_MODULE_13__,_slider_gaggle_jpg__WEBPACK_IMPORTED_MODULE_14__,_slider_gang_jpg__WEBPACK_IMPORTED_MODULE_15__,_slider_goofs_jpg__WEBPACK_IMPORTED_MODULE_16__,_slider_grandpa_jpg__WEBPACK_IMPORTED_MODULE_18__,_slider_max_jpg__WEBPACK_IMPORTED_MODULE_19__,_slider_momma_jpg__WEBPACK_IMPORTED_MODULE_20__,_slider_monkey_jpg__WEBPACK_IMPORTED_MODULE_21__,_slider_pose_jpg__WEBPACK_IMPORTED_MODULE_22__,_slider_puppet_jpg__WEBPACK_IMPORTED_MODULE_23__,_slider_shemk_jpg__WEBPACK_IMPORTED_MODULE_24__,_slider_siblings_jpg__WEBPACK_IMPORTED_MODULE_25__,_slider_sissy_jpg__WEBPACK_IMPORTED_MODULE_26__,_slider_skipping_jpg__WEBPACK_IMPORTED_MODULE_27__,_slider_stoic_jpg__WEBPACK_IMPORTED_MODULE_28__,_slider_strongTim_jpg__WEBPACK_IMPORTED_MODULE_29__,_slider_thienBday_jpg__WEBPACK_IMPORTED_MODULE_31__,_slider_sweetT_jpg__WEBPACK_IMPORTED_MODULE_30__,_slider_thor_jpg__WEBPACK_IMPORTED_MODULE_32__,_slider_turtle_jpg__WEBPACK_IMPORTED_MODULE_33__,_slider_water_jpg__WEBPACK_IMPORTED_MODULE_34__]
    const main = document.querySelector('main')
    const slider = document.createElement('div')
    slider.classList.add('imgSlider')
    for(let i = 0; i<names.length;i++){
        const img = document.createElement('img')
        img.src = names[i]
        if(i%2==0){
            img.style.marginTop = '3vh'
            img.style.zIndex = 'auto'
        }else if(i%2!=0){
            img.style.marginTop = '8vh'
            img.style.zIndex = '2'
        }
        img.alt = 'myFamily/nature'
        slider.appendChild(img)
    }
    let count = 0
    var interval = setInterval(()=>{
        let vw = 100
        if(count ==-11){
            count = 0
            vw = vw*count
            slider.style.transform = `translateX(${vw}vw)`
        }else{
            count--
            vw = vw*count
            slider.style.transform = `translateX(${vw}vw)`
            }
    },3000)
    main.appendChild(slider)
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
        sideBar.id = 'deActive'
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
        sideBar.removeAttribute('id','active')
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
        sideBar.removeAttribute('id','active')
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

/***/ }),

/***/ "./src/slider/ash.jpg":
/*!****************************!*\
  !*** ./src/slider/ash.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13a18f0891e77928f066.jpg";

/***/ }),

/***/ "./src/slider/baby.jpg":
/*!*****************************!*\
  !*** ./src/slider/baby.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45e7a7ab6e4e20f001cb.jpg";

/***/ }),

/***/ "./src/slider/brother.jpg":
/*!********************************!*\
  !*** ./src/slider/brother.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "877b68a49ccdc8177a0e.jpg";

/***/ }),

/***/ "./src/slider/brothers.jpg":
/*!*********************************!*\
  !*** ./src/slider/brothers.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd1637dff4dc128bc557.jpg";

/***/ }),

/***/ "./src/slider/bubba.jpg":
/*!******************************!*\
  !*** ./src/slider/bubba.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26c298114f9b9eb2012f.jpg";

/***/ }),

/***/ "./src/slider/bucs.jpg":
/*!*****************************!*\
  !*** ./src/slider/bucs.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "813cb6f87910cec75e8c.jpg";

/***/ }),

/***/ "./src/slider/butterfly.jpg":
/*!**********************************!*\
  !*** ./src/slider/butterfly.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41ad6a4437ce942d882a.jpg";

/***/ }),

/***/ "./src/slider/cool.jpg":
/*!*****************************!*\
  !*** ./src/slider/cool.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f0573b8cb0e6393e702.jpg";

/***/ }),

/***/ "./src/slider/croatia.jpg":
/*!********************************!*\
  !*** ./src/slider/croatia.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9dd6907c326c37a49095.jpg";

/***/ }),

/***/ "./src/slider/daniel.jpg":
/*!*******************************!*\
  !*** ./src/slider/daniel.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfaa15ed763f5fb99676.jpg";

/***/ }),

/***/ "./src/slider/dolphin.jpg":
/*!********************************!*\
  !*** ./src/slider/dolphin.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "590b3f802b9db5767d4e.jpg";

/***/ }),

/***/ "./src/slider/eyes.jpg":
/*!*****************************!*\
  !*** ./src/slider/eyes.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "299792037253008bfde1.jpg";

/***/ }),

/***/ "./src/slider/family.jpg":
/*!*******************************!*\
  !*** ./src/slider/family.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be3f842ecfeb079b5786.jpg";

/***/ }),

/***/ "./src/slider/friends.jpg":
/*!********************************!*\
  !*** ./src/slider/friends.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49c9bdec5b5e873ccdd8.jpg";

/***/ }),

/***/ "./src/slider/gaggle.jpg":
/*!*******************************!*\
  !*** ./src/slider/gaggle.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a76449477a6b2c967846.jpg";

/***/ }),

/***/ "./src/slider/gang.jpg":
/*!*****************************!*\
  !*** ./src/slider/gang.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38653f9873eeaf16a220.jpg";

/***/ }),

/***/ "./src/slider/goofs.jpg":
/*!******************************!*\
  !*** ./src/slider/goofs.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59e1982ef26a746e33d0.jpg";

/***/ }),

/***/ "./src/slider/goons.jpg":
/*!******************************!*\
  !*** ./src/slider/goons.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd5a14c9258da18745e0.jpg";

/***/ }),

/***/ "./src/slider/grandpa.jpg":
/*!********************************!*\
  !*** ./src/slider/grandpa.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98b7def96f3d1b81491f.jpg";

/***/ }),

/***/ "./src/slider/max.jpg":
/*!****************************!*\
  !*** ./src/slider/max.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf7b0f60d4248773e788.jpg";

/***/ }),

/***/ "./src/slider/momma.jpg":
/*!******************************!*\
  !*** ./src/slider/momma.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5faef967f5b117df9707.jpg";

/***/ }),

/***/ "./src/slider/monkey.jpg":
/*!*******************************!*\
  !*** ./src/slider/monkey.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47772422b5a8472c0eed.jpg";

/***/ }),

/***/ "./src/slider/pose.jpg":
/*!*****************************!*\
  !*** ./src/slider/pose.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41ffc56b468a728e1a61.jpg";

/***/ }),

/***/ "./src/slider/puppet.jpg":
/*!*******************************!*\
  !*** ./src/slider/puppet.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abb9f31baa704f60f2a6.jpg";

/***/ }),

/***/ "./src/slider/shemk.jpg":
/*!******************************!*\
  !*** ./src/slider/shemk.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23c2b486e2f2002c3ce9.jpg";

/***/ }),

/***/ "./src/slider/siblings.jpg":
/*!*********************************!*\
  !*** ./src/slider/siblings.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5eb565e72f57e5fd90fb.jpg";

/***/ }),

/***/ "./src/slider/sissy.jpg":
/*!******************************!*\
  !*** ./src/slider/sissy.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "628444fc70a3e00e44f4.jpg";

/***/ }),

/***/ "./src/slider/skipping.jpg":
/*!*********************************!*\
  !*** ./src/slider/skipping.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36a100b8c836807a9511.jpg";

/***/ }),

/***/ "./src/slider/stoic.jpg":
/*!******************************!*\
  !*** ./src/slider/stoic.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1520f6f55bf8991def48.jpg";

/***/ }),

/***/ "./src/slider/strongTim.jpg":
/*!**********************************!*\
  !*** ./src/slider/strongTim.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4263a50ff250c74dfc78.jpg";

/***/ }),

/***/ "./src/slider/sweetT.jpg":
/*!*******************************!*\
  !*** ./src/slider/sweetT.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18d574662f3c4a72447b.jpg";

/***/ }),

/***/ "./src/slider/thienBday.jpg":
/*!**********************************!*\
  !*** ./src/slider/thienBday.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c737282d69c0f5359313.jpg";

/***/ }),

/***/ "./src/slider/thor.jpg":
/*!*****************************!*\
  !*** ./src/slider/thor.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13926f4948f7bce7c12d.jpg";

/***/ }),

/***/ "./src/slider/turtle.jpg":
/*!*******************************!*\
  !*** ./src/slider/turtle.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d15e7fce537d2f352e3d.jpg";

/***/ }),

/***/ "./src/slider/water.jpg":
/*!******************************!*\
  !*** ./src/slider/water.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30e8bc9ac0eb46f74365.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxzQkFBc0IsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFV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ZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBUztBQUNqQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQVk7QUFDcEI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERrQztBQUNBO0FBQ0Y7QUFDRTtBQUNIO0FBQ0c7QUFDRjtBQUNHO0FBQ0w7QUFDZjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQ0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2Q0FBRTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkNBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMENBQUc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5Q0FBRTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMENBQUc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkNBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOENBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlDQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9ib29rcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2J1aWxkTWFpbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2hvYmJpZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9pbWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvc2tpbGxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oZWFkZXIge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCB3aGl0ZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5oZWFkZXIgc3ZnIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbmhlYWRlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAxNXZ3O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5oZWFkZXIgLm5hbWU6aG92ZXIge1xuICBjb2xvcjogI0ZGRDcwMDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmhlYWRlciAucG9ydHJhaXQge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMzIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uaGVhZGVyIC53aG9BbUkge1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmhlYWRlciAud2hvQW1JIHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2tpbGxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDE1cHggYmxhY2s7XG59XG4uc2tpbGxzIGgyIHtcbiAgbWFyZ2luLWxlZnQ6IDQzJTtcbn1cbi5za2lsbHMgLndyYXAge1xuICBtYXJnaW4tbGVmdDogM3Z3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XG59XG4uc2tpbGxzIC5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5za2lsbHMgLmNhcmQgaW1nIHtcbiAgcGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDN2dztcbiAgaGVpZ2h0OiA2dmg7XG59XG5cbi5wcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIHtcbiAgcGFkZGluZzogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyMHZ3O1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgLmJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgLmJ0bnMgYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDF2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkYwMDtcbiAgYm9yZGVyOiAjRkZCRjAwIDFweCBzb2xpZDtcbiAgd2lkdGg6IDl2dztcbiAgaGVpZ2h0OiA1dmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICBjb2xvcjogd2hpdGU7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5kZXNjcmlwdGlvbiBoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmRlc2NyaXB0aW9uIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG4uc2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uc2lkZSAuc2lkZUJhciB7XG4gIHdpZHRoOiAyNXZ3O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjQ1NEY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogYXV0bztcbn1cbi5zaWRlIC5zaWRlQmFyIC5yZW1vdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0NTRGO1xuICBib3JkZXI6IG5vbmU7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lkZSAuc2lkZUJhciAuYnRuRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zaWRlIC5zaWRlQmFyIC5idG5EaXYgLmJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0NTRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zaWRlIC5zaWRlQmFyIC5idG5EaXYgLmJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjRkZCRjAwO1xufVxuLnNpZGUgI2FjdGl2ZSB7XG4gIGFuaW1hdGlvbjogb3BlblNpZGUgMXM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xufVxuLnNpZGUgI2RlQWN0aXZlIHtcbiAgYW5pbWF0aW9uOiBjbG9zZVNpZGUgMXM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcbn1cblxubWFpbiAjYW5pbWF0ZSB7XG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDAuNXM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5tYWluICNyZXZlcnNlIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICBhbmltYXRpb246IHNsaWRlVXAgMC41cztcbn1cbm1haW4gLmJpbyB7XG4gIHotaW5kZXg6IDU7XG4gIGhlaWdodDogOTAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5tYWluIC5iaW8gYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWFpbiAuYmlvIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbm1haW4gLmJpbyAubXlTdG9yeSB7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyOiBzb2xpZCA1cHggIzEzMjc0RjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgcGFkZGluZzogMnZoIDN2dztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAzMyU7XG59XG5tYWluIC5iaW8gLm15U3RvcnkgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xufVxubWFpbiAuYmlvIC5teVN0b3J5IC5zdW1EaXYge1xuICBkaXNwbGF5OiBub25lO1xufVxubWFpbiAuYmlvIC5ib29rTGlzdCB7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDMzJTtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyOiA1cHggc29saWQgIzEzMjc0RjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbm1haW4gLmJpbyAuYm9va0xpc3QgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICB3aWR0aDogMTB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcbn1cbm1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYge1xuICBkaXNwbGF5OiBub25lO1xufVxubWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiAuYm9va0Rlc2NyaXB0aW9uIHtcbiAgbGVmdDogMjUlO1xuICB6LWluZGV4OiAzO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMTMyNzRGO1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOHZ3O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDJ2dyAydmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5tYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTV2dztcbn1cbm1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYgb2wgbGk6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm1haW4gLmJpbyAuaG9iYmllcyB7XG4gIGJvcmRlci10b3A6ICMxMzI3NEYgNXB4IHNvbGlkO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDJ2aCAzdnc7XG4gIHdpZHRoOiAzMyU7XG59XG5tYWluIC5iaW8gLmhvYmJpZXMgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xufVxubWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5tYWluIC5iaW8gLmhvYmJpZXMgLmhvYmJ5RGl2IC5saXN0IGxpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxubWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCBsaSBwIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTV2dztcbn1cbm1haW4gLnF1b3RlIHtcbiAgbWFyZ2luLWxlZnQ6IDMwdnc7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn1cbm1haW4gLmZhbWlseUFsYnVtIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYWluIC5pbWdTbGlkZXIge1xuICB3aWR0aDogMTgwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxubWFpbiAuaW1nU2xpZGVyIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgaGVpZ2h0OiAyNXZoO1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbm1haW4gLmV4cGxhaW4ge1xuICBtYXJnaW46IDV2aCA1dnc7XG59XG5tYWluIC5leHBsYWluIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubWFpbiAuZXhwbGFpbiBwIHtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbkBrZXlmcmFtZXMgb3BlblNpZGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNsb3NlU2lkZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnNraWxscyAud3JhcCAuY2FyZCBpbWcge1xuICAgIHdpZHRoOiA2dnc7XG4gICAgaGVpZ2h0OiA2dmg7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiAydnc7XG4gICAgd2lkdGg6IDMwdnc7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgLmJ0bnMgYnV0dG9uIHtcbiAgICB3aWR0aDogMTB2dztcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG4gIH1cbiAgbWFpbiAuYmlvIC5teVN0b3J5IC5zdW1EaXYgUCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIG1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYgLmJvb2tEZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDQ1dnc7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiBsaSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIG1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYgLmxpc3Qge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIG1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYgLmxpc3QgbGkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBtYWluIC5iaW8gLmhvYmJpZXMgLmhvYmJ5RGl2IC5saXN0IHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICBtYWluIC5pbWdTbGlkZXIgaW1nIHtcbiAgICBoZWlnaHQ6IDE1dmg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICBoZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5oZWFkZXIgLnBvcnRyYWl0IHtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgfVxuICAuaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIH1cbiAgLnNraWxscyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNraWxscyAud3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG4gIC5za2lsbHMgLndyYXAgLmNhcmQgaW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLnNraWxscyBoMiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJvamVjdHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMjVweDtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyBpbWcge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTV2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgLmJ0bnMgYnV0dG9uIHtcbiAgICB3aWR0aDogNDB2dztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5kZXNjcmlwdGlvbiBoMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwdnc7XG4gICAgY29sb3I6ICNGRkJGMDA7XG4gIH1cbiAgLnByb2plY3RzIC5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgLnByb2plY3RzIC5kZXNjcmlwdGlvbiBoMiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5wcm9qZWN0cyAuZGVzY3JpcHRpb24gcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5zaWRlIC5zaWRlQmFyIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gIH1cbiAgLnNpZGUgI2FjdGl2ZSB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG4gIG1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBAa2V5ZnJhbWVzIHNsaWRlVXAge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgfVxuICB9XG4gIG1haW4gLnF1b3RlIHtcbiAgICBtYXJnaW4tbGVmdDogMTB2dztcbiAgfVxuICBtYWluICNhbmltYXRlIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbWFpbiAjcmV2ZXJzZSB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIG1haW4gLmJpbyB7XG4gICAgbWluLWhlaWdodDogMjUxdmg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAjMTMyNzRGIDVweCBzb2xpZDtcbiAgICBib3JkZXItdG9wOiAjMTMyNzRGIDVweCBzb2xpZDtcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IGxpIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IGxpIC5ib29rRGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBtYWluIC5iaW8gLmhvYmJpZXMge1xuICAgIG1hcmdpbi1ib3R0b206IDUwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogIzEzMjc0RiA1cHggc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbTogIzEzMjc0RiA1cHggc29saWQ7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCBsaSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIG1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYgLmxpc3QgbGkgcCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICBtYWluIC5iaW8gLm15U3Rvcnkge1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIG1haW4gLmJpbyAubXlTdG9yeSBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBtYWluIC5iaW8gLm15U3RvcnkgLnN1bURpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbWFpbiAuaW1nU2xpZGVyIGltZyB7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFNBQUE7RUFDQSw4Q0FBQTtBQURKOztBQUtBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0ksNkJBQUE7RUFFQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFISjtBQUlLO0VBQ0csaUJBQUE7RUFDQSxlQUFBO0FBRlI7QUFJSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRlI7QUFJSTtFQUNJLGNBQUE7RUFDSSxpQkFBQTtFQUNELFlBQUE7RUFDQSx3RUFBQTtBQUZYO0FBSUk7RUFDSSxjQUFBO0FBRlI7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBRko7QUFJSTtFQUVHLFdBQUE7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSFI7QUFLSTtFQUNJLGVBQUE7RUFFQSw4Q0FBQTtFQUNBLFlBQUE7QUFKUjtBQUtRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBSFo7O0FBUUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLCtCQUFBO0FBTko7QUFPSTtFQUNJLGdCQUFBO0FBTFI7QUFRSTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyREFBQTtBQU5SO0FBV0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFUUjtBQVVRO0VBRUksWUFBQTtFQUdBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFYWjs7QUFnQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQWJKO0FBY0k7RUFFSSxhQUFBO0VBQ0EsYUFBQTtBQWJSO0FBZ0JZO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBZGhCO0FBaUJZO0VBZ0JJLGFBQUE7RUFFQSxtQkFBQTtBQS9CaEI7QUFjZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBWnBCO0FBY2dCO0VBQ0kseUJBbkliO0VBb0lhLFlBQUE7QUFacEI7QUFvQlE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFsQlo7QUFvQlE7RUFFSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQW5CWjs7QUF3QkE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFyQko7QUF5QkE7RUFDSSxXQUFBO0VBRUEsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDRCxhQUFBO0VBQ0EsYUFBQTtBQXhCSDtBQXlCRztFQUNDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQXZCSjtBQXlCQTtFQUNJLGFBQUE7QUF2Qko7QUF5Qkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBdkJSO0FBeUJJO0VBQ0ksY0FBQTtBQXZCUjtBQTZCQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNELFVBQUE7RUFDQyw4QkFBQTtBQTNCSjtBQStCQTtFQUNJLHVCQUFBO0VBQ0EsOEJBQUE7QUE3Qko7O0FBbUNBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFoQ0o7QUFrQ0E7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0FBaENKO0FBb0NBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQWxDSjtBQW1DRztFQUNDLGVBQUE7QUFqQ0o7QUFtQ0c7RUFDQyxZQUFBO0FBakNKO0FBb0NJO0VBU0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUdELGdCQUFBO0VBRUMsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBN0NSO0FBMkJRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Msa0JBQUE7RUFDRCxZQUFBO0VBQ0EseUJBQUE7QUF6Qlo7QUFzQ1E7RUFDSSxhQUFBO0FBcENaO0FBd0NJO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUF2Q1I7QUF3Q1E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Msa0JBQUE7RUFDRixXQUFBO0VBQ0MseUJBQUE7QUF0Q1o7QUF3Q1E7RUFFSSxhQUFBO0FBdkNaO0FBd0NZO0VBQ0ksU0FBQTtFQUNDLFVBQUE7RUFDRCx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBdkNoQjtBQXlDWTtFQUVJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQXhDaEI7QUEyQ1k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQXpDaEI7QUErQ0c7RUFDQyw2QkFBQTtFQVlBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUF4REo7QUE0Q0k7RUFFSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQyxrQkFBQTtFQUNELFlBQUE7RUFDQSx5QkFBQTtBQTNDUjtBQWtESTtFQUNLLGFBQUE7QUFoRFQ7QUFrRFE7RUFDSSxlQUFBO0FBaERaO0FBaURRO0VBQ0ksWUFBQTtFQUVELFdBQUE7QUFoRFg7QUF1REE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFyREY7QUF1REE7RUFDSSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFyREo7QUF1REE7RUFDSSxhQUFBO0VBRUEseUJBQUEsRUFBQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0FBdERKO0FBdURJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFyRFI7QUF3REE7RUFDRyxlQUFBO0FBdERIO0FBdURJO0VBQ0ksa0JBQUE7QUFyRFI7QUF1REk7RUFDSSxpQkFBQTtBQXJEUjs7QUEwREE7RUFDSTtJQUNFLG9CQUFBO0VBdkRKO0VBeURHO0lBQ0Usc0JBQUE7RUF2REw7RUF5REc7SUFDRyxvQkFBQTtFQXZETjtBQUNGO0FBeURBO0VBQ0k7SUFDSSxvQkFBQTtJQUNBLGNBQUE7RUF2RE47RUF5REU7SUFDSSxvQkFBQTtJQUNBLGFBQUE7RUF2RE47QUFDRjtBQXlEQTtFQUNJO0lBQ0ksb0JBQUE7RUF2RE47RUEyREU7SUFDSSxvQkFBQTtFQXpETjtBQUNGO0FBNERBO0VBQ0k7SUFDSSxvQkFBQTtJQUNBLGNBQUE7RUExRE47RUE2REU7SUFDSSxvQkFBQTtJQUNBLGFBQUE7RUEzRE47QUFDRjtBQTZEQztFQUlRO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUE5RFg7RUFvRUU7SUFFSSxzQkFBQTtFQW5FTjtFQW9FTTtJQUNJLGdCQUFBO0VBbEVWO0VBbUVVO0lBQ0ksZ0JBQUE7SUFDQSxXQUFBO0VBakVkO0VBcUVVO0lBQ0ksV0FBQTtFQW5FZDtFQXVFRTtJQUVJLGlCQUFBO0VBdEVOO0VBK0VVO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VBN0VkO0VBbUZVO0lBQ0ksV0FBQTtFQWpGZDtFQW1GVTtJQUNJLGVBQUE7RUFqRmQ7RUF5RkU7SUFDSSxpQkFBQTtFQXZGTjtFQXdGTTtJQUNJLGVBQUE7RUF0RlY7RUF3Rk07SUFDSSxlQUFBO0VBdEZWO0VBNkZFO0lBQ0ksWUFBQTtFQTNGTjtBQUNGO0FBK0ZBO0VBRUk7SUFDSSxXQUFBO0VBOUZOO0VBZ0dFO0lBQ0ksV0FBQTtJQUVBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNDLHVCQUFBO0lBQ0EsbUJBQUE7RUEvRlA7RUFnR007SUFDSSxlQUFBO0lBQ0EsYUFBQTtFQTlGVjtFQWlHTTtJQUVJLGVBQUE7RUFoR1Y7RUFrR007SUFFSSxlQUFBO0lBQ0EsaUJBQUE7RUFqR1Y7RUFvR0U7SUFFRyxXQUFBO0VBbkdMO0VBcUdFO0lBQ0ksYUFBQTtJQUNBLGVBQUE7SUFDQSwyQkFBQTtJQUNBLDZCQUFBO0VBbkdOO0VBd0dVO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUF0R1Y7RUEwR007SUFDSSxhQUFBO0VBeEdWO0VBMkdFO0lBQ0ksMEJBQUE7RUF6R047RUEyR007SUFDSSxzQkFBQTtJQXlCRCxhQUFBO0VBaklUO0VBMkdjO0lBQ0csWUFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQXpHakI7RUE2R2M7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUVBLG1CQUFBO0VBNUdsQjtFQWlIYztJQUNJLGlCQUFBO0lBQ0EsY0FBQTtFQS9HbEI7RUF5SFU7SUFDSSxpQkFBQTtFQXZIZDtFQXdIYztJQUNJLGVBQUE7RUF0SGxCO0VBd0hjO0lBQ0ksZUFBQTtFQXRIbEI7RUE0SE07SUFDSSxZQUFBO0VBMUhWO0VBNEhNO0lBQ0ksZUFBQTtFQTFIVjtFQWdJRjtJQVlJLGFBQUE7SUFDQSxzQkFBQTtFQXpJRjtFQTZIRTtJQUNJO01BQ0ksb0JBQUE7TUFDQSxjQUFBO0lBM0hSO0lBOEhJO01BQ0ksb0JBQUE7SUE1SFI7RUFDRjtFQW1JRTtJQUNHLGlCQUFBO0VBaklMO0VBbUlGO0lBQ0ksZUFBQTtJQUNBLGNBQUE7RUFqSUY7RUFtSUY7SUFDSSxlQUFBO0lBQ0EsY0FBQTtFQWpJRjtFQW1JRjtJQUNJLGlCQUFBO0lBQ0Esc0JBQUE7RUFqSUY7RUFrSUU7SUFDSSxXQUFBO0lBQ0EsZ0NBQUE7SUFDQSw2QkFBQTtFQWhJTjtFQWlJTTtJQUNJLG9CQUFBO0lBQ0EsV0FBQTtJQUVBLGNBQUE7RUFoSVY7RUFpSVU7SUFDSSxvQkFBQTtJQUNBLFdBQUE7RUEvSGQ7RUFnSVU7SUFDSSxVQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQTlIZDtFQXFJTTtJQUNHLG1CQUFBO0lBQ0MsV0FBQTtJQUNBLDZCQUFBO0lBQ0EsZ0NBQUE7RUFuSVY7RUFxSVU7SUFDSSxjQUFBO0VBbklkO0VBc0lrQjtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VBcEl0QjtFQXFJa0I7SUFDSSxVQUFBO0VBbkl0QjtFQTBJTTtJQUNJLGFBQUE7SUFJQSxXQUFBO0lBQ0EsWUFBQTtFQTNJVjtFQXVJVTtJQUNJLFlBQUE7RUFySWQ7RUF5SVU7SUFDSSxjQUFBO0VBdklkO0VBOElFO0lBQ0ksWUFBQTtFQTVJTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiBcXG4kYmFzZTogIzM0MzQzNDtcXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgXFxufVxcbiBcXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNDM0MzQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICBcXG59XFxuaGVhZGVye1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCB3aGl0ZTtcXG4gICBcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICBzdmd7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgIH1cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAubmFtZXsgXFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTV2dztcXG4gICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgICAgIH1cXG4gICAgLm5hbWU6aG92ZXJ7XFxuICAgICAgICBjb2xvcjogI0ZGRDcwMDtcXG4gICAgfVxcbn1cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICBcXG4gICAgLnBvcnRyYWl0e1xcbiAgICBcXG4gICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICB3aWR0aDphdXRvO1xcbiAgICAgICAgaGVpZ2h0OiAzMjFweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG4gICAgLndob0FtSXtcXG4gICAgICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgXFxuICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuLnNraWxsc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICBcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTVweCBibGFjaztcXG4gICAgaDJ7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNDMlO1xcbiAgICB9XFxuXFxuICAgIC53cmFwe1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDN2dztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgICAgICAgIFxcbiAgICBcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIC5jYXJke1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBpbWd7XFxuICAgICAgICAgXFxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIHdpZHRoOiAzdnc7XFxuICAgICAgICAgICAgaGVpZ2h0OiA2dmg7XFxuICAgICAgICB9XFxuICAgICAgICAgXFxuICAgIH1cXG59XFxuLnByb2plY3Rze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICAucHJvamVjdENhcmR7XFxuICAgICAgIFxcbiAgICAgICAgcGFkZGluZzogNTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBcXG4gICAgICAgIC5saW5rc3tcXG4gICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmJ0bnN7XFxuICAgICAgICAgICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXZoO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkYwMDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogI0ZGQkYwMCAxcHggc29saWQ7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOXZ3O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjV2aDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBidXR0b246aG92ZXJ7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuZGVzY3JpcHRpb257XFxuICAgICAgICBoMntcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcXG4gICAgICAgIH1cXG4gICAgICAgIHB7XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAydmg7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgfVxcbn1cXG4uc2lkZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICBcXG4gIFxcbiAgIFxcbi5zaWRlQmFye1xcbiAgICB3aWR0aDogMjV2dztcXG4gIFxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IFxcdCMzNjQ1NEY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICBkaXNwbGF5OiBub25lO1xcbiAgIHotaW5kZXg6IGF1dG87XFxuICAgLnJlbW92ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXFx0IzM2NDU0RjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnRuRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgXFxuICAgIC5idG57XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IFxcdCMzNjQ1NEY7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG4gICAgLmJ0bjpob3ZlcntcXG4gICAgICAgIGNvbG9yOiAgI0ZGQkYwMDtcXG4gICAgfVxcbn1cXG5cXG4gIFxcbn1cXG4jYWN0aXZle1xcbiAgICBhbmltYXRpb246IG9wZW5TaWRlIDFzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgei1pbmRleDogMjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xcbiAgXFxuICAgIFxcbn0gIFxcbiNkZUFjdGl2ZXtcXG4gICAgYW5pbWF0aW9uOiBjbG9zZVNpZGUgMXM7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcXG59XFxufVxcblxcbm1haW57XFxuICAgXFxuI2FuaW1hdGV7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIC41cztcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuI3JldmVyc2V7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwIC41cztcXG4gICAgXFxufVxcbiAgICBcXG4uYmlve1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBoZWlnaHQ6IDkwMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgIGJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgIH1cXG4gICBidXR0b246aG92ZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICB9XFxuICAgIFxcbiAgICAubXlTdG9yeXtcXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcXG4gICAgICAgIH1cXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDVweCAjMTMyNzRGO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAgXFxuICAgICAgICBcXG4gICAgICAgcGFkZGluZzoydmggM3Z3O1xcbiAgICAgICBcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIHdpZHRoOiAzMyU7XFxuICAgICAgICAuc3VtRGl2e1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgIH1cXG4gICAgLmJvb2tMaXN0e1xcbiAgICAgICAgIFxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMzMlO1xcbiAgICAgICAgcGFkZGluZzogMjVweDtcXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMxMzI3NEY7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbiAgICAgICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5ib29rRGl2e1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgLmJvb2tEZXNjcmlwdGlvbntcXG4gICAgICAgICAgICAgICAgbGVmdDogMjUlO1xcbiAgICAgICAgICAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzEzMjc0RjtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTh2dztcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnZ3IDJ2aDsgICAgIFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1dnc7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIG9se1xcbiAgICAgICAgICAgIGxpOmhvdmVye1xcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgIH1cXG4gICAuaG9iYmllc3tcXG4gICAgYm9yZGVyLXRvcDogIzEzMjc0RiA1cHggc29saWQ7XFxuICAgIFxcbiAgICBidXR0b257XFxuICAgICAgIFxcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xcbiAgICB9XFxuICAgICBcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOjJ2aCAzdnc7XFxuICAgIHdpZHRoOiAzMyU7XFxuICAgICBcXG4gICAgLmhvYmJ5RGl2e1xcbiAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIC5saXN0e1xcbiAgICAgICAgbGl7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICBcXG4gICAgICAgICAgIHdpZHRoOiAxNXZ3O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIH1cXG59XFxuICAgfVxcbn1cXG4ucXVvdGV7XFxuICBtYXJnaW4tbGVmdDogMzB2dztcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG59XFxuLmZhbWlseUFsYnVte1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaW1nU2xpZGVye1xcbiAgICB3aWR0aDogMTgwMHZ3O1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgaW1ne1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcXG4gICAgICAgIGhlaWdodDogMjV2aDtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgfVxcbn1cXG4uZXhwbGFpbntcXG4gICBtYXJnaW46IDV2aCA1dnc7XFxuICAgIGgye1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIHB7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgfVxcbn1cXG59XFxuXFxuQGtleWZyYW1lcyBvcGVuU2lkZSB7XFxuICAgIGZyb217XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIH1cXG4gICAgIDcwJXtcXG4gICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4xKTtcXG4gICAgIH1cXG4gICAgIHRve1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgICB9XFxufVxcbkBrZXlmcmFtZXMgY2xvc2VTaWRle1xcbiAgICBmcm9te1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICB0b3tcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlRG93bntcXG4gICAgZnJvbXtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICAgIFxcbiAgICB9XFxuXFxuICAgIHRve1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgICAgICBcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlVXB7XFxuICAgIGZyb217XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgIHRve1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcbiBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KXtcXG4gICAgLnNraWxsc3tcXG4gICAgICAgIC53cmFwe1xcbiAgICAgICAgICAgIC5jYXJke1xcbiAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICAgd2lkdGg6IDZ2dztcXG4gICAgICAgICAgICAgaGVpZ2h0OiA2dmg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxufVxcbi5wcm9qZWN0c3tcXG4gICAgLnByb2plY3RDYXJke1xcbiAgICAgICAgXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLmxpbmtze1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnZ3O1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzB2dztcXG4gICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC5idG5ze1xcbiAgICAgICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgIFxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1dnc7XFxuICAgIH1cXG59XFxufVxcbm1haW57IFxcbiAgICAgXFxuLmJpb3tcXG4gICAgLm15U3Rvcnl7XFxuICAgICAgICAuc3VtRGl2e1xcbiAgICAgICAgICAgIFB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5ib29rTGlzdHtcXG4gICAgICAgIC5ib29rRGl2e1xcbiAgICAgICAgICAgIC5ib29rRGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NXZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICBcXG4gICAgfVxcbiAgICAuaG9iYmllc3tcXG5cXG4gICAuaG9iYnlEaXZ7XFxuICAgIC5saXN0e1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBsaXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgIH1cXG59XFxufVxcbi5pbWdTbGlkZXJ7XFxuICAgIGltZ3tcXG4gICAgICAgIGhlaWdodDogMTV2aDtcXG4gICAgfVxcbn1cXG59XFxuIH1cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgIFxcbiAgICBoZWFkZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAuaGVhZGVye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAucG9ydHJhaXR7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICBoMntcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICB9XFxuICAgICAgICBwe1xcbiAgICAgICAgICBcXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLnNraWxsc3tcXG4gICAgICBcXG4gICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBcXG4gICAgLndyYXB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuICAgICAgICAuY2FyZHtcXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG4gICAgICAgIGgye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLnByb2plY3Rze1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBcXG4gICAgICAgIC5wcm9qZWN0Q2FyZHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIC5saW5rc3tcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTV2dztcXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5idG5ze1xcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xcbiAgICAgICAgICAgICAgICBoMntcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHZ3O1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICAjRkZCRjAwO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICBcXG4gICAgICAgICAgIHBhZGRpbmc6IDI1cHg7ICAgICBcXG4gICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgXFxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgICAgICAgICAgICAgaDJ7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgcHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICBcXG4gICAgfVxcbiAgICAuc2lkZXtcXG4gICAgICAgIC5zaWRlQmFye1xcbiAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIH1cXG4gICAgICAgICNhY3RpdmV7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuXFxuLy9BQk9VVCBNRSBDU1NcXG5tYWlue1xcbiAgICBAa2V5ZnJhbWVzIHNsaWRlVXB7XFxuICAgICAgICBmcm9te1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgfVxcbiAgICBcXG4gICAgICAgIHRve1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBcXG4gICAgLnF1b3Rle1xcbiAgICAgICBtYXJnaW4tbGVmdDogMTB2dztcXG4gICAgfVxcbiNhbmltYXRle1xcbiAgICBhbmltYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jcmV2ZXJzZXtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmJpb3tcXG4gICAgbWluLWhlaWdodDogMjUxdmg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC5ib29rTGlzdHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogIzEzMjc0RiA1cHggc29saWQ7XFxuICAgICAgICBib3JkZXItdG9wOiMxMzI3NEYgNXB4IHNvbGlkO1xcbiAgICAgICAgLmJvb2tEaXZ7XFxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICBcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIC5ib29rRGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0Y0QkI0NDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICBcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAgICAgLmhvYmJpZXN7XFxuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHZoO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJvcmRlci10b3A6ICMxMzI3NEYgNXB4IHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IzEzMjc0RiA1cHggc29saWQ7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgLmhvYmJ5RGl2e1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAubGlzdHtcXG4gICAgICAgICAgICAgICAgICAgIGxpe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIHB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAubXlTdG9yeXtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICAgICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgLnN1bURpdntcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIFxcbiAgICBcXG59XFxuLmltZ1NsaWRlcntcXG4gICAgaW1ne1xcbiAgICAgICAgaGVpZ2h0OiAyNXZoO1xcbiAgICB9XFxufVxcbn1cXG5cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYnVpbGRCb29rcyBmcm9tIFwiLi9ib29rc1wiXG5pbXBvcnQgYnVpbGRIb2JiaWVzIGZyb20gXCIuL2hvYmJpZXNcIlxuaW1wb3J0IGJ1aWxkSW1hZ2VTbGlkZXIgZnJvbSBcIi4vaW1nXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQWJvdXRNZSgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBjb25zdCBiaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRpdGxlLmlubmVySFRNTCA9IGBUaGVyZSBpcyBzb21lIGdvb2QgaW4gdGhpcyB3b3JsZDxicj4gYW5kIGl0J3Mgd29ydGggZmlnaHRpbmcgZm9yLiAgICAtSi5SLlIgVG9sa2llbiBgXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncXVvdGUnKVxuICAgIGJpby5jbGFzc0xpc3QuYWRkKCdiaW8nKVxuICAgIGNvbnN0IG15U3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG15U3RvcnkuY2xhc3NMaXN0LmFkZCgnbXlTdG9yeScpXG4gICAgY29uc3QgbXlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIG15SGVhZGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICBpZihzdW1tQ29udGFpbmVyLmlkID09ICdhbmltYXRlJyl7XG4gICAgICAgICAgICAgICAgICAgc3VtbUNvbnRhaW5lci5pZCA9ICdyZXZlcnNlJ1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzdW1tQ29udGFpbmVyLmlkID0gJ2FuaW1hdGUnXG4gICAgICAgICAgICB9KVxuICAgIG15SGVhZGluZy5pbm5lckhUTUwgPSAnTXkgU3RvcnknXG4gICAgICAgIGNvbnN0IGJvb2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBzdW1tQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc3VtbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdW1EaXYnKVxuICAgICAgICBjb25zdCBob2JieUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGhvYmJ5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvYmJ5RGl2JylcbiAgICBjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgc3VtbWFyeS5pbm5lckhUTUwgPSAnTXkgZmFtaWx5IGlzIG9yaWdpbmFsbHkgZnJvbSBCb3NuaWEgYW5kIHRoZSBvbmx5IGZhbWlseSB0aGF0IGxpdmVzIGluIHRoZSBzdGF0ZXMgaXMgbXkgbW90aGVyIGFuZCBzaXN0ZXIuIFdoZW4gSSB3YXMgaW4gaGlnaHNjaG9vbCBJIHdhcyB1bnN1cmUgd2hhdCBJIHdhbnRlZCB0byBkbyB3aXRoIG15IGxpZmUgdW50aWwgc2VuaW9yIHllYXIgd2hlbiBJIGdvdCBpbnRvIEFQQ1MgYW5kIGxlYXJuZWQgSmF2YS4gSSBxdWlja2x5IGxlYXJuZWQgaXQgd2FzIHdoYXQgSSB3YW50ZWQgdG8gZG8gZm9yIG1ham9yaXR5IG9mIG15IGxpZmUuIEkgYWx3YXlzIGxvdmVkIGJ1aWxkaW5nIHNpbmNlIEkgd2FzIGEga2lkLCBhbmQgY29kaW5nIGtlZXBzIG15IGlubmVyIGNoaWxkIGFsaXZlLiBJIHRyeSB0byBrZWVwIG15c2VsZiBhcyBidXN5IGFzIHBvc3NpYmxlIGRheSBpbiBhbmQgZGF5IG91dCwgYW5kIHRyeSB0byB0aGluayBvZiBwcm9ncmFtbWluZyBhcyBteSBudW1iZXIgb25lIHByaW9yaXR5LiBIb3BpbmcgdG8gZXZlbnR1YWxseSBzdGFydCBteSBvd24gY29tcGFueSB0aGF0IGNvdWxkIGJyYW5jaCBvdXQgaW50byB2YXJpZXR5IG9mIHdvcmsuIEkgYW0gYnVpbGRpbmcgZ3JlYXQgY29ubmVjdGlvbnMgd2l0aCBwZW9wbGUgYW5kIHRyeWluZyB0byBoZWxwIGFzIG1hbnkgYXMgSSBjYW4uIEkgaGF2ZSBhIGJlYXV0aWZ1bCBnaXJsZnJpZW5kIHRoYXQgSSBsb3ZlIHdpdGggbXkgd2hvbGUgaGVhcnQgYW5kIHdlIHNoYXJlIGEgdG93bmhvbWUgd2l0aCB0d28gZG9ncyBuYW1lZCBEZWxpbGFoIGFuZCBOZW1vIGFuZCBteSBicm90aGVyIERlYW4uJ1xuICAgIGNvbnN0IGJvb2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBib29rTGlzdC5jbGFzc0xpc3QuYWRkKCdib29rTGlzdCcpXG4gICAgY29uc3QgYm9va1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBib29rVGl0bGUuaW5uZXJIVE1MID0gJ015IEJvb2tzJ1xuICAgICAgICAgICAgICAgIGJvb2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoYm9va0NvbnRhaW5lci5pZCA9PSAnYW5pbWF0ZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5pZCA9ICdyZXZlcnNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGJvb2tDb250YWluZXIuaWQgPSAnYW5pbWF0ZSdcbiAgICAgICAgICAgICAgICB9KVxuICAgIGJvb2tMaXN0LmFwcGVuZENoaWxkKGJvb2tUaXRsZSlcbiAgICBjb25zdCBvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJylcbiAgICBib29rQ29udGFpbmVyLmFwcGVuZENoaWxkKG9sKVxuICAgIGJvb2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9va0RpdicpXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFJlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgICAgICAgICAgY3VycmVudFJlYWQuaW5uZXJIVE1MID0gJ0N1cnJlbnRseSBSZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Qm9va3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdpcmxEcmFnb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICAgICAgICAgIGdpcmxEcmFnb24uaW5uZXJIVE1MID0gXCJHaXJsIFdpdGggdGhlIERyYWdvbiBUYXR0b29cIlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Qm9va3MuYXBwZW5kQ2hpbGQoZ2lybERyYWdvbilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXRvbWljSGFiaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgICAgICAgICBhdG9taWNIYWJpdHMuaW5uZXJIVE1MID0gJ0F0b21pYyBIYWJpdHMnXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCb29rcy5hcHBlbmRDaGlsZChhdG9taWNIYWJpdHMpXG4gICAgICAgICAgICAgICAgICAgIGJvb2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFJlYWQpXG4gICAgICAgICAgICAgICAgICAgIGJvb2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEJvb2tzKVxuICAgICAgICAgICAgICAgICAgICBib29rTGlzdC5hcHBlbmRDaGlsZChib29rQ29udGFpbmVyKVxuICAgICAgICAgICAgY29uc3QgaG9iYnlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIGhvYmJ5SGVhZGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICBpZihob2JieUNvbnRhaW5lci5pZCA9PSAnYW5pbWF0ZScpe1xuICAgICAgICAgICAgICAgICAgICBob2JieUNvbnRhaW5lci5pZCA9ICdyZXZlcnNlJ1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBob2JieUNvbnRhaW5lci5pZCA9ICdhbmltYXRlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGhvYmJ5SGVhZGluZy5pbm5lckhUTUwgPSAnTXkgSG9iYmllcydcbiAgICAgICAgICAgIGNvbnN0IGhvYmJ5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBob2JieUxpc3QuY2xhc3NMaXN0LmFkZCgnaG9iYmllcycpXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0JylcbiAgICAgICAgICAgIGhvYmJ5TGlzdC5hcHBlbmRDaGlsZChob2JieUhlYWRpbmcpXG4gICAgICAgICAgICBob2JieUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KVxuICAgICAgICAgICAgaG9iYnlMaXN0LmFwcGVuZENoaWxkKGhvYmJ5Q29udGFpbmVyKVxuICAgIG15U3RvcnkuYXBwZW5kQ2hpbGQobXlIZWFkaW5nKVxuICAgIHN1bW1Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VtbWFyeSlcbiAgICBteVN0b3J5LmFwcGVuZENoaWxkKHN1bW1Db250YWluZXIpXG4gICAgYmlvLmFwcGVuZENoaWxkKGJvb2tMaXN0KVxuICAgIGJpby5hcHBlbmRDaGlsZChteVN0b3J5KVxuICAgIGJpby5hcHBlbmRDaGlsZChob2JieUxpc3QpXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBtYWluLmFwcGVuZENoaWxkKGJpbylcbiAgICBidWlsZEJvb2tzKCdBdG9taWMgSGFiaXRzJywgJ1dyaXR0ZW4gYnkgSmFtZXMgQ2xlYXI8YnI+PGJyPiB3YXMgYSBiZW5lZmljYWwgYm9vayBmb3IgbWUgdGhhdCB0YXVnaHQgbWUgaG93IHRvIGJ1aWxkIHBvc2l0aXZlIGhhYml0cyBpbmNyZW1lbnRhbGx5IGVhY2ggZGF5LiBXYXMgYSBiaWcgaGVscCBmb3IgbWUgdG8ga2VlcCBjb2RpbmcnLCdodHRwczovL2phbWVzY2xlYXIuY29tL2F0b21pYy1oYWJpdHMnIClcbiAgICBidWlsZEJvb2tzKCdUaGUgQXV0b2Jpb2dyYXBoeSBvZiBNYWxjb20gWCcsJ1dyaXR0ZW4gYnkgQWxleCBIYWxleTxicj48YnI+VGhpcyBib29rIHRhdWdodCBtZSBhbG90IGFib3V0IHRoZSBVbml0ZWQgc3RhdGVzIGR1cmluZyB0aGUgZWFybHkgcGVyaW9kcyBiZWZvcmUgdGhlIGNpdmlsIHJpZ2h0cyBtb3ZlbWVudCBhbmQgYWxzbyBhYm91dCB0aGUgbWlzdW5kZXJzdG9vZCBNYWxjb20gWC4gTGVhcm5lZCBhYm91dCB0aGUgY3JlYXRpb24gb2YgdGhlIE5hdGlvbiBvZiBJc2xhbSwgYW5kIGhvdyBwcm9mb3VuZCBNYWxjb21zIGxpZmUgd2FzLicsJ2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RoZV9BdXRvYmlvZ3JhcGh5X29mX01hbGNvbG1fWCcpXG4gICAgYnVpbGRCb29rcygnVGhlIDUgQU0gQ2x1YicsJ1dyaXR0ZW4gYnkgUm9iaW4gU2hhcm1hPGJyPjxicj5BIGdyZWF0IHJlYWQgY3JlYXRpbmcgYSBuYXJyaXRpdmUgdGhhdCBpcyBmdWxsIG9mIGluZm9ybWF0aW9uIGFib3V0IGdyZWF0cywgc2hvd2VkIHRoZSBiZW5lZml0cyBvZiB3YWtpbmcgdXAgZWFybHkgYW5kIHN0YXJ0aW5nIHlvdXIgZGF5IGJlZm9yZSB0aGUgc3VuIHJpc2VzLiBDdXJyZW50bHkgd3JpdGluZyB0aGlzIGF0IDQgYW0gc28gSSB0aGluayBpdCBkaWQgYSBnb29kIGpvYiA6KScsJ2h0dHBzOi8vd3d3LmJsaW5raXN0LmNvbS9lbi9ib29rcy90aGUtNS1hbS1jbHViLWVuJylcbiAgICBidWlsZEJvb2tzKCdUaGUgSG9iYml0JywnV3JpdHRlbiBieSBKLlIuUiBUb2xraWVuPGJyPjxicj4gQSBjbGFzc2ljIHN0b3J5IHRoYXQgd2FzIG5vdGhpbmcgbGlrZSB0aGUgbW92aWUnLCdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UaGVfSG9iYml0JylcbiAgICBidWlsZEJvb2tzKCdEZWVwIFdvcmsnLGBXcml0dGVuIGJ5IENhbCBOZXdwb3J0PGJyPjxicj4gQSBib29rIGNvdmVyaW5nIHRoZSB0b3BpYyBvZiBcIkRlZXAgV29ya1wiLiBUaGlzIHdhcyBhIGdvb2QgcmVhZCBpbmZvcm1pbmcgbWUgb2YgdGhlIGJlbmVmaXQgb2YgY3JlYXRpbmcgYSBkaXN0cmFjdGlvbiBmcmVlIGVudmlyb25tZW50IHRoYXQgYWxsb3dzIHlvdSB0byB3b3JrIHdpdGggZGVlcG5lc3MuIFRoZSB1c2Ugb2YgdGFjdGljcyBzdWNoIGFzICdQb21vZG9ybycgYXJlIHZlcnkgaGVscGZ1bCBmb3IgcGFjaW5nIHlvdXJzZWxmIGFuZCBhbGxvd2luZyBwZXJpb2RzIGZvciB5b3UgdG8gcmVzdGAsJ2h0dHBzOi8vd3d3LnNhbXVlbHRob21hc2Rhdmllcy5jb20vYm9vay1zdW1tYXJpZXMvYnVzaW5lc3MvZGVlcC13b3JrLycpXG4gICAgYnVpbGRCb29rcygnQ2FudCBIdXJ0IE1lJywnQnkgRGF2aWQgR29nZ2luczxicj48YnI+IFRoaXMgYm9vayBjb3ZlcnMgYWxvdCBvZiB0aGUgbGlmZSBvZiB0aGUgcmV0aXJlZCBOYXZ5IFNlYWwgRGF2aWQgR29nZ2lucy4gSSBnb3Qgb3V0IG9mIHRoaXMgYm9vayB0aGUgaWRlYSBvZiBhIHRydWRnZSB0aHJvdWdoIG1lbnRhbGl0eSB3aGVyZSBJIGxlYXJuZWQgdG8ga2VlcCBwdXNoaW5nIHRocm91Z2ggaGFyZHNoaXAgYW5kIGJyZWFrIHRocm91Z2ggYmFycmllcnMgc2V0IGJ5IHlvdXJzZWxmJywnaHR0cHM6Ly9kYXZpZGdvZ2dpbnMuY29tL2Jvb2svJylcbiAgICBidWlsZEJvb2tzKCdEb24gUXVpeG90ZScsICdXcml0dGVuIGJ5IE1pZ3VlbCBkZSBDZXJ2YW50ZXM8YnI+PGJyPiBUaGlzIG9uZSB3YXMgdGhlIGJvb2sgb2YgdGhlIHllYXIgZm9yIG1lLiBJIGxvdmVkIHRoZSBzdG9yeSBhbmQgdGhlIGltYWdlcnkgcHJlc2VudGVkIGZyb20gdGhlIGF1dGhvciB3YXMgYW1hemluZy4gSG9uZXN0bHkgdGhlIGZ1bm5pZXN0IGJvb2sgSSBoYXZlIHJlYWQgYW5kIHdhcyBzYWQgdG8gZmluaXNoIGl0IGFuZCBwdXQgaXQgZG93bi4gV2lsbCBkZWZpbmV0bHkgYmUgcmVhZGluZyBhZ2FpbicsJ2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Rvbl9RdWl4b3RlJylcbiAgICBidWlsZEJvb2tzKCdXdXRoZXJpbmcgSGVpZ2h0cycsJ1dyaXR0ZW4gYnkgRW1pbHkgQnJvbnTDqzxicj48YnI+IEEgY2xhc3NpYyBwb3J0cmF5aW5nIGxvdmUsIGRlY2VwdGlvbiwgYW5kIGEgdmFyaWV0eSBvZiBlbW90aW9uLiBIZWF0aGNsaWZmIHdhcyBob25lc3RseSB0aGUgYmVzdCBhbnRhZ29uaXN0IEkgaGF2ZSBzZWVuIGluIGEgd2hpbGUuIEdvb2QgcmVhZCcsJ2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1d1dGhlcmluZ19IZWlnaHRzJylcbiAgICBidWlsZEJvb2tzKCdBbmltYWwgRmFybScsICdXcml0dGVuIGJ5IEdlb3JnZSBPcndlbGw8YnI+PGJyPiBBIGdvb2QgcmVyZWFkIGFmdGVyIGEgYml0IG9mIHRpbWUsIHdhcyBpbnRlcmVzdGluZyBzZWVpbmcgdGhlIGNvbXBhcmlzb24gb2YgY2VydGFpbiBwb2xpdGljYWwgc3lzdGVtcyB0byB0aGUgc2V0dGluZyBvZiB0aGUgYm9vaycsJ2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FuaW1hbF9GYXJtJykgXG4gICAgICAgIGJ1aWxkSG9iYmllcygnR2FyZGVuaW5nJywnSSBhbSBhIGF2aWQgZ2FyZG5lciBhbmQgSSB0cnkgdG8gZ3JvdyBhIHZhcmlldHkgb2YgcGxhbnRzLCBjdXJyZW50bHkgSSBhbSBleGNpdGVkIHRvIGhhcnZlc3QgbXkgZmlyc3QgdG9tYXRvIGFuZCBkaWxsIHdoZW4gdGhleSBhcmUgYm90aCByZWFkeScpXG4gICAgICAgIGJ1aWxkSG9iYmllcygnR3VpdGFyJyxgSSBoYXZlIGJlZW4gcHJhY3RpY2luZyBndWl0YXIgYSBkZWNlbnQgYW1vdW50IGxhdGVseSwgY3VycmVudCBsZWFybmluZyA8YSBocmVmID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dEgydzZPeHgwa1EnPkR1c3QgaW4gdGhlIFdpbmQ8L2E+IGFuZCBqdXN0IHN0YXJ0ZWQgdG8gbGVhcm4gYSA8YSBocmVmID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9WjJiMTVyd0dCSmMnPmx1bGxhYnk8L2E+YClcbiAgICAgICAgYnVpbGRIb2JiaWVzKCdQaWFubycsYEkgaGF2ZSBiZWVuIHBsYXlpbmcgcGlhbm8gc2luY2Ugc2VuaW9yIHllYXIgb2YgY29sbGVnZSBhbmQgaXRzIHJlbGF4aW5nIHRvIHBsYXkuIEkgYW0gcmVhbGx5IGludG8gYWxsIG11c2ljIGJ1dCBmb3IgcGlhbm8gSSB1c3VhbGx5IGp1c3QgcGxheSBjbGFzc2ljYWwuIFRoZSBvbmx5IHNvbmcgSSBrbm93IGZ1bGx5IGlzIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9MldmYW90U0szbUknPkd5bW5vcGVkaWUgbm8uIDE8L2E+YClcbiAgICAgICAgYnVpbGRIb2JiaWVzKCdSZWFkaW5nJywnSSBoYXZlIGJlY29tZSBhIGJpZyByZWFkZXIgdGhpcyB5ZWFyIGFzIG15IGJvb2sgbGlzdCB3b3VsZCBzaG93IGxvbC4gSSBhcHByZWNpYXRlIGxlYXJuaW5nIGFsb3QgYW5kIHlvdSBjYW4gZ2V0IHNvIG11Y2ggb3V0IG9mIHJlYWRpbmcnKVxuICAgICAgY29uc3QgZmFtaWx5QWxidW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgICBmYW1pbHlBbGJ1bS5pbm5lckhUTUwgPSAnRmFtaWx5IEFsYnVtJ1xuICAgICAgZmFtaWx5QWxidW0uY2xhc3NMaXN0LmFkZCgnZmFtaWx5QWxidW0nKVxuICAgICAgbWFpbi5hcHBlbmRDaGlsZChmYW1pbHlBbGJ1bSlcbiAgICAgICAgIGJ1aWxkSW1hZ2VTbGlkZXIoKVxuICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgIGNvbnN0IGV4cGxhaW5IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICAgZXhwbGFpbkhlYWQuaW5uZXJIVE1MID0gJ1RoZSBwZW9wbGUgaW4gbXkgRmFtaWx5J1xuICAgICAgICAgY29uc3QgZXhwbGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgZXhwbGFpbi5pbm5lckhUTUwgPSAnU28gbXkgZmFtaWx5IGlzIGZvcmV2ZXIgZ3Jvd2luZy4gSSBsb3ZlIG1ha2luZyBuZXcgY29ubmVjdGlvbnMgYW5kIGtlZXBpbmcgdGlnaHRlciBib25kcywgSSBoYXZlIGFsd2F5cyBoYWQgYSBzbWFsbCBpbW1lZGlhdGUgZmFtaWx5LCBidXQgdGhlIHBlb3BsZSBJIHRydWx5IGxvdmUgd2lsbCBhbHdheXMgc3RheSB3aXRoIG1lIGFuZCBJIHdpbGwgYWx3YXlzIGhhdmUgdGhlaXIgYmFjay4gU29tZSBvZiB0aGUgcGVvcGxlIGluIGhlcmUgYXJlIGZhbWlseSBieSBibG9vZCBsaWtlIG15IHNpc3RlciBBbml0YSBhbmQgbXkgbW9tIFNwb21lbmthLiBCdXQgdGhlIGNsb3Nlc3QgcGVyc29uIGluIG15IGxpZmUgaXMgbXkgYnJvdGhlciBkZWFuLCBhbmQgd2UgaGF2ZSBiZWVuIGV2ZXJ5d2hlcmUgYW5kIGRvbmUgZXZlcnl0aGluZyB0b2dldGhlci4gSGUgaXMgcmVhbGx5IG15IHJvY2suIFBlb3BsZSBsaWtlIG15IGxpdHRsZSBicm90aGVyIERhbmllbCBvciBteSBwaGlsb3NvcGh5IHRlYWNoZXIgVGltb3RoeSBhcmUgdHdvIHBlb3BsZSB3aG8gSSBsb3ZlIGRlYXJseSBhbmQgSSBrbm93IHRoZXkgd2lsbCBnbyBmYXIuIE15IGJyb3RoZXIgVGhpZW4gaXMgc29tZW9uZSB3aG8gYWx3YXlzIGhhcyBteSBiYWNrIGFuZCBJIGtub3cgaGUgd2lsbCBhbHdheXMgYmUgYnkgbXkgc2lkZS4gVGhlcmUgaXMgc28gbWFueSBtZW1iZXJzIG9mIG15IGZhbWlseSBhbmQgSSBob3BlIGl0IGtlZXBzIGdyb3dpbmcuIE1vcmUgcGljdHVyZXMgdG8gY29tZSEnXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChleHBsYWluSGVhZClcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGV4cGxhaW4pXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdleHBsYWluJylcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkaXYpXG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQm9va3MoYm9vayxkZXNjcmlwdGlvbiwgbGluayl7XG4gICBjb25zdCBvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ29sJylcbiAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgYW5jaG9yLmhyZWYgPSBsaW5rXG4gICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGNvbnN0IGJvb2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBib29rRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnYm9va0Rlc2NyaXB0aW9uJylcbiAgIGxpLmlubmVySFRNTCA9IGJvb2sgXG4gICBib29rRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZGVzY3JpcHRpb25cbiAgIGJvb2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJyxib29rKVxuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKCk9PntcbiAgICBjb25zdCBpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJvb2spXG4gICAgaWQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgIH0pXG4gICBcbiAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT57XG4gICAgY29uc3QgaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChib29rKVxuICAgIGlkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgIH0pIFxuICAgXG4gICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxpbmtcbiAgIH0pXG4gICBsaS5hcHBlbmRDaGlsZChib29rRGVzY3JpcHRpb24pXG4gICBcbiAgIG9sLmFwcGVuZENoaWxkKGxpKVxuICAgIFxufSIsImltcG9ydCBidWlsZEhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCB3ZWF0aGVyIGZyb20gJy4vcGljcy93ZWF0aGVySW1nLnBuZydcbmltcG9ydCBidWlsZFNraWxscyBmcm9tICcuL3NraWxscydcbmltcG9ydCBidWlsZFByb2plY3QgZnJvbSAnLi9wcm9qZWN0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYWluKCl7XG5idWlsZEhlYWRlcigpXG5idWlsZFNraWxscygpXG4gXG5idWlsZFByb2plY3Qod2VhdGhlciwnaHR0cHM6Ly9wYXRyaWNrLXRvbWljLmdpdGh1Yi5pby9XZWF0aGVyQVBJLycsJ2h0dHBzOi8vZ2l0aHViLmNvbS9QYXRyaWNrLVRvbWljL1dlYXRoZXJBUEknLCdUaGlzIGFwcGxpY2F0aW9uIGlzIG15IGZpcnN0IHRpbWUgdXRpbGl6aW5nIGEgQVBJLCBJIGRvIHNvbWUgc2ltcGxlIGFuaW1hdGlvbnMgd2l0aGluIHRoaXMgcHJvamVjdCBhbmQgbGVhcm5lZCBhbG90IHRocm91Z2ggdGhlIHVzZSBvZiByZXNwb25zaXZlIGRlc2lnbiBhbmQgYW5pbWF0aW9uJywnV2VhdGhlciBBcHBsaWNhdGlvbicpXG59XG4gXG4iLCJpbXBvcnQgcG9ydGFpdCBmcm9tICcuL3BpY3MvVG9taWMuUC5qcGcnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEhlYWRlcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5jb25zdCBwb3J0cmFpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5wb3J0cmFpdC5jbGFzc0xpc3QuYWRkKCdwaWNPZk1lJylcbmltZy5jbGFzc0xpc3QuYWRkKCdwb3J0cmFpdCcpXG5pbWcuc3JjID0gcG9ydGFpdFxucG9ydHJhaXQuYXBwZW5kQ2hpbGQoaW1nKVxuaGVhZGVyLmFwcGVuZENoaWxkKHBvcnRyYWl0KVxuY29uc3Qgd2hvQW1JID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbndob0FtSS5jbGFzc0xpc3QuYWRkKCd3aG9BbUknKVxuY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG5oMi5pbm5lckhUTUwgPSAnTXkgbmFtZSBpcyBQYXRyaWNrIEVtYW51ZWwgVG9taWMnXG53aG9BbUkuYXBwZW5kQ2hpbGQoaDIpXG5jb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5wLmlubmVySFRNTCA9ICdJIGFtIGEgc3R1ZGVudCBhdCB0aGUgVW5pdmVyc2l0eSBvZiBTb3V0aCBGbG9yaWRhIGFuZCBJIGdyYWR1YXRlIGluIHRoZSBTcHJpbmcgb2YgMjAyNDxicj53aXRoIGEgQmFjaGVsb3JzIGRlZ3JlZSBpbiBJbmZvcm1hdGlvbiBTY2llbmNlPGJyPkkgYW0gYSBtYW4gd2l0aCBhbG90IG9mIGFtYml0aW9uIHRvIGJldHRlciB0aGUgd29ybGQsIGFuZCBhbSB0aGUgZmlyc3Qgb2YgbXkgZmFtaWx5IHRvIGJlPGJyPmJvcm4gaW4gQW1lcmljYS4gSSBzcGVuZCBhcyBtdWNoIHRpbWUgYXMgSSBjYW4gbGVhcm5pbmcgaG93IHRvIGRldmVsb3Agd2Vic2l0ZXMgZXZlcnlkYXk8YnI+SXQgaXMgbm90IGp1c3QgZnVuIGZvciBtZSBidXQgYnJpbmdzIGltbWVuc2Ugc2F0aXNmYWN0aW9uIHdoZW4gSSBjYW4gYnVpbGQgYW5kIGRlc2lnbiBzb21ldGhpbmc8YnI+dGhhdCBJIGtub3cgaXMgZ29vZC4gSSBsb3ZlIGhlbHBpbmcgcGVvcGxlLCBhbmQgSSBhbSBsb29raW5nIGZvciBhIG9wcG9ydHVuaXR5IHRvIHNob3cgPGJyPm15IHNraWxsc2V0IGFuZCBsZWFybiB0aHJvdWdoIG90aGVycydcbndob0FtSS5hcHBlbmRDaGlsZChwKVxuaGVhZGVyLmFwcGVuZENoaWxkKHdob0FtSSlcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbm1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkSG9iYmllcyh0aXRsZSxkZXNjcmlwdGlvbil7XG4gICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKVxuICAgICBsaS5pbm5lckhUTUwgPSB0aXRsZVxuICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgIHAuaW5uZXJIVE1MID0gZGVzY3JpcHRpb25cbiAgIFxuICAgICBsaS5hcHBlbmRDaGlsZChwKVxuICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKVxufSIsIlxuaW1wb3J0IGFzaCBmcm9tICcuL3NsaWRlci9hc2guanBnJ1xuaW1wb3J0IGJhYnkgZnJvbSAnLi9zbGlkZXIvYmFieS5qcGcnXG5pbXBvcnQgYnJvdGhlciBmcm9tICcuL3NsaWRlci9icm90aGVyLmpwZydcbmltcG9ydCBicm90aGVycyBmcm9tICcuL3NsaWRlci9icm90aGVycy5qcGcnXG5pbXBvcnQgYnViYmEgZnJvbSAnLi9zbGlkZXIvYnViYmEuanBnJ1xuaW1wb3J0IGJ1Y3MgZnJvbSAnLi9zbGlkZXIvYnVjcy5qcGcnXG5pbXBvcnQgYnV0dGVyZmx5IGZyb20gJy4vc2xpZGVyL2J1dHRlcmZseS5qcGcnXG5pbXBvcnQgY29vbCBmcm9tICcuL3NsaWRlci9jb29sLmpwZydcbmltcG9ydCBjcm9hdGlhIGZyb20gJy4vc2xpZGVyL2Nyb2F0aWEuanBnJ1xuaW1wb3J0IGRhbmllbCBmcm9tICcuL3NsaWRlci9kYW5pZWwuanBnJ1xuaW1wb3J0IGRvbHBoaW4gZnJvbSAnLi9zbGlkZXIvZG9scGhpbi5qcGcnXG5pbXBvcnQgZXllcyBmcm9tICcuL3NsaWRlci9leWVzLmpwZydcbmltcG9ydCBmYW1pbHkgZnJvbSAnLi9zbGlkZXIvZmFtaWx5LmpwZydcbmltcG9ydCBmcmllbmRzIGZyb20gJy4vc2xpZGVyL2ZyaWVuZHMuanBnJ1xuaW1wb3J0IGdhZ2dsZSBmcm9tICcuL3NsaWRlci9nYWdnbGUuanBnJ1xuaW1wb3J0IGdhbmcgZnJvbSAnLi9zbGlkZXIvZ2FuZy5qcGcnXG5pbXBvcnQgZ29vZnMgZnJvbSAnLi9zbGlkZXIvZ29vZnMuanBnJ1xuaW1wb3J0IGdvb25zIGZyb20gJy4vc2xpZGVyL2dvb25zLmpwZydcbmltcG9ydCBncmFuZHBhIGZyb20gJy4vc2xpZGVyL2dyYW5kcGEuanBnJ1xuaW1wb3J0IG1heCBmcm9tICcuL3NsaWRlci9tYXguanBnJ1xuaW1wb3J0IG1vbW1hIGZyb20gJy4vc2xpZGVyL21vbW1hLmpwZydcbmltcG9ydCBtb25rZXkgZnJvbSAnLi9zbGlkZXIvbW9ua2V5LmpwZydcbmltcG9ydCBwb3NlIGZyb20gJy4vc2xpZGVyL3Bvc2UuanBnJ1xuaW1wb3J0IHB1cHBldCBmcm9tICcuL3NsaWRlci9wdXBwZXQuanBnJ1xuaW1wb3J0IHNoZW1rIGZyb20gJy4vc2xpZGVyL3NoZW1rLmpwZydcbmltcG9ydCBzaWJsaW5ncyBmcm9tICcuL3NsaWRlci9zaWJsaW5ncy5qcGcnXG5pbXBvcnQgc2lzc3kgZnJvbSAnLi9zbGlkZXIvc2lzc3kuanBnJ1xuaW1wb3J0IHNraXBwaW4gZnJvbSAnLi9zbGlkZXIvc2tpcHBpbmcuanBnJ1xuaW1wb3J0IHN0b2ljIGZyb20gJy4vc2xpZGVyL3N0b2ljLmpwZydcbmltcG9ydCBzdHJvbmdUaW0gZnJvbSAnLi9zbGlkZXIvc3Ryb25nVGltLmpwZydcbmltcG9ydCBzd2VldFQgZnJvbSAnLi9zbGlkZXIvc3dlZXRULmpwZydcbmltcG9ydCB0aGllbiBmcm9tICcuL3NsaWRlci90aGllbkJkYXkuanBnJ1xuaW1wb3J0IHRob3IgZnJvbSAnLi9zbGlkZXIvdGhvci5qcGcnXG5pbXBvcnQgdHVydGxlIGZyb20gJy4vc2xpZGVyL3R1cnRsZS5qcGcnXG5pbXBvcnQgd2F0ZXIgZnJvbSAnLi9zbGlkZXIvd2F0ZXIuanBnJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRJbWFnZVNsaWRlcigpe1xuICAgIGNvbnN0IG5hbWVzID0gW2FzaCxiYWJ5LGJyb3RoZXIsYnJvdGhlcnMsYnViYmEsYnVjcyxidXR0ZXJmbHksY29vbCxjcm9hdGlhLGRhbmllbCxkb2xwaGluLGV5ZXMsZmFtaWx5LGZyaWVuZHMsZ2FnZ2xlLGdhbmcsZ29vZnMsZ3JhbmRwYSxtYXgsbW9tbWEsbW9ua2V5LHBvc2UscHVwcGV0LHNoZW1rLHNpYmxpbmdzLHNpc3N5LHNraXBwaW4sc3RvaWMsc3Ryb25nVGltLHRoaWVuLHN3ZWV0VCx0aG9yLHR1cnRsZSx3YXRlcl1cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZCgnaW1nU2xpZGVyJylcbiAgICBmb3IobGV0IGkgPSAwOyBpPG5hbWVzLmxlbmd0aDtpKyspe1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBpbWcuc3JjID0gbmFtZXNbaV1cbiAgICAgICAgaWYoaSUyPT0wKXtcbiAgICAgICAgICAgIGltZy5zdHlsZS5tYXJnaW5Ub3AgPSAnM3ZoJ1xuICAgICAgICAgICAgaW1nLnN0eWxlLnpJbmRleCA9ICdhdXRvJ1xuICAgICAgICB9ZWxzZSBpZihpJTIhPTApe1xuICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpblRvcCA9ICc4dmgnXG4gICAgICAgICAgICBpbWcuc3R5bGUuekluZGV4ID0gJzInXG4gICAgICAgIH1cbiAgICAgICAgaW1nLmFsdCA9ICdteUZhbWlseS9uYXR1cmUnXG4gICAgICAgIHNsaWRlci5hcHBlbmRDaGlsZChpbWcpXG4gICAgfVxuICAgIGxldCBjb3VudCA9IDBcbiAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICBsZXQgdncgPSAxMDBcbiAgICAgICAgaWYoY291bnQgPT0tMTEpe1xuICAgICAgICAgICAgY291bnQgPSAwXG4gICAgICAgICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY291bnQtLVxuICAgICAgICAgICAgdncgPSB2dypjb3VudFxuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYFxuICAgICAgICAgICAgfVxuICAgIH0sMzAwMClcbiAgICBtYWluLmFwcGVuZENoaWxkKHNsaWRlcilcbn1cbiAiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBidWlsZFNpZGVCYXIgZnJvbSAnLi9zaWRlYmFyJ1xuaW1wb3J0IGJ1aWxkTWFpbiBmcm9tICcuL2J1aWxkTWFpbidcbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5uYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIG1haW4uaW5uZXJIVE1MID0gJydcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMzQzNDM0J1xuICAgIGJ1aWxkTWFpbigpICBcbn0pXG5idWlsZE1haW4oKVxuYnVpbGRTaWRlQmFyKCkiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFByb2plY3Qoc3JjLCBzaXRlTGluayxnaExpbmssIHBJbm5lciwgaGVhZCl7XG4gICAgXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG4gICAgaWYobWFpbi5jb250YWlucyhwcm9qZWN0cyk9PXRydWUpe1xuICAgIFxuICAgICAgICBcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coZmFsc2UpXG4gICAgICAgIHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKVxuICAgIH1cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYnRucy5jbGFzc0xpc3QuYWRkKCdidG5zJylcbiAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdsaW5rcycpXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGxldCBjb3VudCA9IDBcbiAgICBpbWcuc3JjID0gc3JjXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQoaW1nKVxuICAgIHdoaWxlKGNvdW50PDIpe1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ0bi50eXBlID0gJ3N1Ym1pdCdcbiAgICAgICAgc3dpdGNoKGNvdW50KXtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBmb3JtLmFjdGlvbiA9IHNpdGVMaW5rXG4gICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9ICdWaWV3IExpdmUgU2l0ZSdcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bilcbiAgICAgICAgICAgICAgICBidG5zLmFwcGVuZENoaWxkKGZvcm0pXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgZm9ybS5hY3Rpb24gPSBnaExpbmtcbiAgICAgICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gJ1NvdXJjZSBDb2RlJ1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuKVxuICAgICAgICAgICAgICAgIGJ0bnMuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWsgXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZCgncHJvamVjdENhcmQnKVxuICAgbGlua3MuYXBwZW5kQ2hpbGQoYnRucylcbiAgICBwLmlubmVySFRNTCA9IHBJbm5lclxuICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQobGlua3MpXG4gICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKVxuICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICBoMi5pbm5lckhUTUwgPSBoZWFkXG4gICAgZGVzYy5hcHBlbmRDaGlsZChoMilcbiAgICBkZXNjLmFwcGVuZENoaWxkKHApXG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZGVzYylcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZClcbiAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RzKVxufVxuIiwiaW1wb3J0IGJ1aWxkTWFpbiBmcm9tICcuL2J1aWxkTWFpbidcbmltcG9ydCBidWlsZEFib3V0TWUgZnJvbSAnLi9hYm91dCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkU2lkZUJhcigpe1xuICAgIGNvbnN0IHNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZScpXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXJCdG4nKVxuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2lkZUJhci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnc2lkZUJhcicpXG4gICAgcmVtb3ZlQnRuLmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMzlcIiBoZWlnaHQ9XCIzNlwiIHZpZXdCb3g9XCIwIDAgMzkgMzZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cmVjdCB3aWR0aD1cIjQzLjY4NDZcIiBoZWlnaHQ9XCI3Ljk1NTNcIiByeD1cIjMuOTc3NjVcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC43NDY4MSAwLjY2NTAzNyAtMC43ODc4MTEgMC42MTU5MTcgNi4yNjcyMSAxLjk5MDYpXCIgZmlsbD1cIndoaXRlXCIvPiA8cmVjdCB3aWR0aD1cIjQyLjkyNDhcIiBoZWlnaHQ9XCI4LjA4ODE4XCIgcng9XCI0LjA0NDA5XCIgdHJhbnNmb3JtPVwibWF0cml4KC0wLjY3ODMwMiAwLjczNDc4MyAtMC44NDEyNDQgLTAuNTQwNjU2IDM3LjM1MTYgNC4zNzI5MilcIiBmaWxsPVwid2hpdGVcIi8+IDwvc3ZnPidcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgXG4gICAgICAgc2lkZUJhci5zZXRBdHRyaWJ1dGUoJ2lkJywnYWN0aXZlJylcbiAgICB9KVxuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgc2lkZUJhci5pZCA9ICdkZUFjdGl2ZSdcbiAgICB9KVxuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKVxuICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBob21lRGl2LmNsYXNzTGlzdC5hZGQoJ2J0bkRpdicpXG5jb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5wLmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgMTgzIDE1MFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiA8cmVjdCB4PVwiNDFcIiB5PVwiNTBcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHJ4PVwiMTBcIiBmaWxsPVwiI0ZGQkYwMFwiLz4gPHBhdGggZD1cIk04NC42MjYgNi41MDYxMUM4OC40ODIgMi44NTY0NiA5NC41MTggMi44NTY0NSA5OC4zNzQgNi41MDYxTDE1Mi41MDIgNTcuNzM3MkMxNTkuMDY5IDYzLjk1MjkgMTU0LjY3MSA3NSAxNDUuNjI4IDc1SDM3LjM3MTdDMjguMzI5NSA3NSAyMy45MzA1IDYzLjk1MjkgMzAuNDk3NyA1Ny43MzcyTDg0LjYyNiA2LjUwNjExWlwiIGZpbGw9XCIjRkZCRjAwXCIvPjxwYXRoIGQ9XCJNNzQgMTA2Qzc0IDEwMC40NzcgNzguNDc3MiA5NiA4NCA5Nkg5OEMxMDMuNTIzIDk2IDEwOCAxMDAuNDc3IDEwOCAxMDZWMTUwSDc0VjEwNlpcIiBmaWxsPVwiYmxhY2tcIi8+PC9zdmc+J1xuICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgaG9tZS5pbm5lckhUTUwgPSAnSG9tZSdcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gJydcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzM0MzQzNCdcbiAgICAgICAgYnVpbGRNYWluKClcbiAgICAgICAgc2lkZUJhci5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywnYWN0aXZlJylcbiAgICB9KVxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZSlcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKHApXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChob21lRGl2KVxuICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhYm91dERpdi5jbGFzc0xpc3QuYWRkKCdidG5EaXYnKVxuICAgICBjb25zdCBhYm91dFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICBhYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRjRCQjQ0J1xuICAgICAgICBidWlsZEFib3V0TWUoKVxuICAgICAgICBzaWRlQmFyLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCdhY3RpdmUnKVxuICAgICB9KVxuICAgICBhYm91dEJ0bi5pbm5lckhUTUwgPSAnQWJvdXQgTWUnXG4gICAgIGFib3V0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0QnRuKVxuICAgICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dFApXG4gICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoYWJvdXREaXYpXG4gICAgc2lkZS5hcHBlbmRDaGlsZChzaWRlQmFyKVxufSIsImltcG9ydCBqYXZhIGZyb20gJy4vcGljcy9qYXZhLnBuZydcbmltcG9ydCBzYXNzIGZyb20gJy4vcGljcy9zYXNzLnBuZydcbmltcG9ydCBjc3MgZnJvbSAnLi9waWNzL2Nzcy5wbmcnXG5pbXBvcnQgaHRtbCBmcm9tICcuL3BpY3MvaHRtbC5wbmcnXG5pbXBvcnQganMgZnJvbSAgJy4vcGljcy9qcy5wbmcnXG5pbXBvcnQgcHkgZnJvbSAnLi9waWNzL3B5dGhvbi5wbmcnXG5pbXBvcnQgc3FsIGZyb20gJy4vcGljcy9zcWwucG5nJ1xuaW1wb3J0IHdwIGZyb20gJy4vcGljcy93ZWJwYWNrLnBuZydcbmltcG9ydCB0cyBmcm9tICcuL3BpY3MvdHMucG5nJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRTa2lsbHMoKXtcbiAgICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgd3JhcC5jbGFzc0xpc3QuYWRkKCdza2lsbHMnKVxuICAgIGNvbnN0IHNraWxscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2tpbGxzLmNsYXNzTGlzdC5hZGQoJ3dyYXAnKVxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGgyLmlubmVySFRNTCA9IFwiTXkgU2tpbGxzZXRcIlxuICAgIHdyYXAuYXBwZW5kQ2hpbGQoaDIpXG4gICAgbGV0IGNvdW50ID0gMFxuICAgIHdoaWxlKGNvdW50IDwgOSl7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIFxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgICAgICBzd2l0Y2goY291bnQpe1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdKYXZhJyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBqYXZhXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdKYXZhJ1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzEwcHgnXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdQeXRob24nXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHB5XG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdQeXRob24nXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ0hUTUwnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGh0bWxcbiAgICAgICAgICAgICAgICBwLnN0eWxlLm1hcmdpbkxlZnQgPSAnMTFweCdcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0hUTUwnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ0NTUydcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gY3NzXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdDU1MnXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzEycHgnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ0phdmFTY3JpcHQnXG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpbkxlZnQgPSAnMjBweCdcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0ganNcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0phdmFTY3JpcHQnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ215U1FMJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBzcWxcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ215U1FMJ1xuICAgICAgICAgICAgICAgIHAuc3R5bGUubWFyZ2luTGVmdCA9ICc4cHgnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ1Nhc3MnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHNhc3NcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ1Nhc3MnXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzVweCdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnV2VicGFjaydcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gd3BcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ1dlYnBhY2snXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ1R5cGVTY3JpcHQnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHRzXG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpbkxlZnQgPSAnMjBweCdcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ1R5cGVzY3JpcHQnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZChza2lsbHMpXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQod3JhcClcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9