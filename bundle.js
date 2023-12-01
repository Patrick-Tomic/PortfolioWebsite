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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":[" \n$base: #343434;\n*{\n    margin: 0;\n    font-family: 'Courier New', Courier, monospace;\n   \n}\n \nbody{\n    background-color:#343434;\n    width: 100%;\n    height: 100%;\n     \n}\nheader{\n    box-shadow: 0px 5px 5px white;\n   \n    position: sticky;\n    top: 0;\n    background-color: #13274F;\n    z-index: 1;\n    display: flex;\n    justify-content: space-between;\n     svg{\n        margin-left: 10px;\n        margin-top: 5px;\n     }\n    button{\n        background-color: #13274F;\n        border: none;\n        margin-top: 5px;\n        cursor: pointer;\n    }\n    .name{ \n        font-size: 1em;\n            margin-left: 15vw;\n           color: white;\n           font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n        }\n    .name:hover{\n        color: #FFD700;\n    }\n}\n.header{\n    display: flex;\n    padding: 25px;\n    justify-content: space-around;\n   \n    .portrait{\n    \n       margin: 5px;\n        width:auto;\n        height: 321px;\n        border-radius: 10px;\n    }\n    .whoAmI{\n        margin-top: 5vh;\n    \n        font-family: 'Courier New', Courier, monospace;\n        color: white;\n        p{\n            font-size: 20px;\n            line-height: 25px;\n            \n        }\n    }\n}\n.skills{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n     \n    box-shadow: 0px 15px 15px black;\n    h2{\n        margin-left: 43%;\n    }\n\n    .wrap{\n        margin-left: 3vw;\n        background-color: white;\n        margin-bottom: 10px;\n        display: grid;\n        grid-template-columns: repeat(auto-fit,minmax(150px, 1fr));\n         \n    \n        \n    }\n    .card{\n        display: flex;\n        flex-direction: column;\n        img{\n         \n            padding: 2px;\n            \n            \n            background-color: white;\n            width: 3vw;\n            height: 6vh;\n        }\n         \n    }\n}\n.projects{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    .projectCard{\n       \n        padding: 50px;\n        display: flex;\n        \n        .links{\n            img{\n                border-radius: 10px;\n                display: flex;\n                flex-direction: column;\n                width: 20vw;\n    \n            }\n            .btns{\n                button{\n                    cursor: pointer;\n                    margin: 1vh;\n                    background-color: #FFBF00;\n                    border: #FFBF00 1px solid;\n                    width: 9vw;\n                    height:5vh;\n                    border-radius: 10px;\n                    font-size: 15px;\n                    font-weight: bold;\n                }\n                button:hover{\n                    background-color: $base;\n                    color: white;\n                }\n                display: flex;\n                \n                align-items: center;\n            }\n        }\n        .description{\n        h2{\n            color: white;\n            margin-left: 5vw;\n        }\n        p{\n             \n            color: white;\n            font-size: 18px;\n            margin-left: 5vw;\n            margin-top: 2vh;\n        }\n    }\n    }\n}\n.side{\n    display: flex;\n    justify-content: flex-end;\n   \n  \n   \n.sideBar{\n    width: 25vw;\n  \n    height: 100%;\n    background-color: \t#36454F;\n    position: absolute;\n   display: none;\n   z-index: auto;\n   .remove{\n    background-color: \t#36454F;\n    border: none;\n    align-self: flex-end;\n    cursor: pointer;\n}\n.btnDiv{\n    display: flex;\n     \n    .btn{\n        cursor: pointer;\n        margin-top: 15px;\n        align-self: flex-start;\n        border: none;\n        background-color: \t#36454F;\n        font-size: 20px;\n        color: white;\n    }\n    .btn:hover{\n        color:  #FFBF00;\n    }\n}\n\n  \n}\n#active{\n    animation: openSide 1s;\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n   z-index: 2;\n    transform-origin: center right;\n  \n    \n}  \n#deActive{\n    animation: closeSide 1s;\n    transform-origin: center right;\n}\n}\n\nmain{\n   \n#animate{\n    animation: slideDown .5s;\n    transform-origin: top;\n    display: block;\n}\n#reverse{\n    transform-origin: top;\n    animation: slideUp .5s;\n    \n}\n    \n.bio{\n    z-index: 5;\n    height: 900px;\n    z-index: 1;\n    display: flex;\n   button{\n    cursor: pointer;\n   }\n   button:hover{\n    color: white;\n   }\n    \n    .myStory{\n        button{\n            font-size: 1.5em;\n            font-weight: bold;\n            text-align: left;\n             margin-bottom: 2vh;\n            border: none;\n            background-color: #F4BB44;\n        }\n        height: auto;\n        border-bottom: none;\n        border: solid 5px #13274F;\n        border-bottom: none;\n       \n        \n       padding:2vh 3vw;\n       \n        font-size: 18px;\n        color: black;\n        width: 33%;\n        .sumDiv{\n            display: none;\n        }\n\n    }\n    .bookList{\n         \n        height: auto;\n        display: flex;\n        flex-direction: column;\n        width: 33%;\n        padding: 25px;\n        border: 5px solid #13274F;\n        border-right: none;\n        border-bottom: none;\n        border-left: none;\n        button{\n            border: none;\n            font-size: 1.5em;\n            font-weight: bold;\n            text-align: left;\n             margin-bottom: 2vh;\n           width: 10vw;\n            background-color: #F4BB44;\n        }\n        .bookDiv{\n            \n            display: none;\n            .bookDescription{\n                left: 25%;\n                 z-index: 3;\n                border: solid 1px #13274F;\n                display: none;\n                position: absolute;\n                width: 18vw;\n                height: auto;\n                \n                padding: 2vw 2vh;     \n                background-color: #343434;\n                border-radius: 10px;\n            }\n            li{\n             \n                margin-bottom: 2vh;\n                font-size: 18px;\n                font-weight: bold;\n                width: 15vw;\n            }\n            ol{\n            li:hover{\n                color: white;\n                cursor: pointer;\n            }\n            }\n        }\n        \n    }\n   .hobbies{\n    border-top: #13274F 5px solid;\n    \n    button{\n       \n        font-size: 1.5em;\n        font-weight: bold;\n        text-align: left;\n         margin-bottom: 2vh;\n        border: none;\n        background-color: #F4BB44;\n    }\n     \n    height: auto;\n    padding:2vh 3vw;\n    width: 33%;\n     \n    .hobbyDiv{\n         display: none;\n    .list{\n        li{\n            font-size: 18px;\n        p{\n            border: none;\n           \n           width: 15vw;\n        }\n    }\n    }\n}\n   }\n}\n.quote{\n  margin-left: 30vw;\n  margin-top: 2vh;\n}\n.familyAlbum{\n    border-top-left-radius: 15px;\n    border-top-left-radius: 15px;\n    background-color: #13274F;\n    color:white;\n    text-align: center;\n}\n.imgSlider{\n    width: 1800vw;\n    \n    background-color: #13274F; /* Chrome 10-25, Safari 5.1-6 */\n    display: flex;\n    transition: transform 1s ease-in;\n    transform: translateX(0);\n    img{\n        margin-left: 5vw;\n        margin-bottom: 5vh;\n        height: 25vh;\n        width: auto;\n        border-radius: 50px;\n    }\n}\n.explain{\n   margin: 5vh 5vw;\n    h2{\n        text-align: center;\n    }\n    p{\n        line-height: 25px;\n    }\n}\n}\n\n@keyframes openSide {\n    from{\n      transform: scaleX(0);\n    }\n     70%{\n       transform: scaleX(1.1);\n     }\n     to{\n        transform: scaleX(1);\n     }\n}\n@keyframes closeSide{\n    from{\n        transform: scaleX(1);\n        display: block;\n    }\n    to{\n        transform: scaleX(0);\n        display: none;\n    }\n}\n@keyframes slideDown{\n    from{\n        transform: scaleY(0);\n      \n    }\n\n    to{\n        transform: scaleX(1);\n        \n    }\n}\n@keyframes slideUp{\n    from{\n        transform: scaleY(1);\n        display: block;\n    }\n\n    to{\n        transform: scaleY(0);\n        display: none;\n    }\n}\n @media (max-width: 1000px){\n    .skills{\n        .wrap{\n            .card{\n         img{\n             width: 6vw;\n             height: 6vh;\n        }\n    }\n}\n}\n.projects{\n    .projectCard{\n        \n        flex-direction: column;\n        .links{\n            margin-left: 8px;\n            img{\n                margin-left: 2vw;\n                width: 30vw;\n            }\n        \n        .btns{\n            button{\n                width: 10vw;\n            }\n        }\n    }\n    .description{\n        \n        margin-right: 5vw;\n    }\n}\n}\nmain{ \n     \n.bio{\n    .myStory{\n        .sumDiv{\n            P{\n                font-size: 15px;\n                font-weight: bold;\n            }\n        }\n    }\n    .bookList{\n        .bookDiv{\n            .bookDescription{\n                width: 45vw;\n            }\n            li{\n                font-size: 15px;\n            }\n        }\n      \n    }\n    .hobbies{\n\n   .hobbyDiv{\n    .list{\n        font-weight: bold;\n        li{\n            font-size: 15px;\n        }\n        p{\n            font-size: 13px;\n        }\n    }\n   }\n}\n}\n.imgSlider{\n    img{\n        height: 15vh;\n    }\n}\n}\n }\n@media (max-width: 700px){\n   \n    header{\n        width: 100%;\n    }\n    .header{\n        width: 100%;\n         \n        padding: 5px;\n        display: flex;\n        flex-wrap: wrap;\n         justify-content: center;\n         align-items: center;\n        .portrait{\n            margin-top: 5vh;\n            height: 160px;\n            \n        }\n        h2{\n            \n            font-size: 24px;\n        }\n        p{\n          \n            font-size: 10px;\n            line-height: 12px;\n        }\n    }\n    .skills{\n      \n       width: 100%;\n        \n    .wrap{\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n        justify-content: space-around;\n\n        .card{\n             \n            \n            img{\n            width: 40px;\n            height: 40px;\n        }\n    }\n}\n        h2{\n            display: none;\n        }\n    }\n    .projects{\n        grid-template-columns: 1fr;\n        \n        .projectCard{\n            flex-direction: column;\n            .links{\n                \n                img{\n                   width: 250px;\n                   margin-left: 15vw;\n                   height: auto;\n                }\n                .btns{\n                    \n                button{\n                    width: 40vw;\n                    height: 40px;\n                    \n                    font-weight: normal;\n                }\n                }\n            }\n            .description{\n                h2{\n                    margin-left: 20vw;\n                    color:  #FFBF00;\n                }\n            }\n             \n           padding: 25px;     \n              \n            \n        }\n        \n      \n            .description{\n                margin-left: 20px;\n                h2{\n                    font-size: 16px;\n                }\n                p{\n                    font-size: 10px;\n                }\n            }\n         \n    }\n    .side{\n        .sideBar{\n            width: 350px;\n        }\n        #active{\n            animation: none;\n        }\n    }\n\n\n//ABOUT ME CSS\nmain{\n    @keyframes slideUp{\n        from{\n            transform: scaleY(1);\n            display: block;\n        }\n    \n        to{\n            transform: scaleY(0);\n            \n        }\n    }\n    display: flex;\n    flex-direction: column;\n    \n    \n    .quote{\n       margin-left: 10vw;\n    }\n#animate{\n    animation: none;\n    display: block;\n}\n#reverse{\n    animation: none;\n    display: block;\n}\n.bio{\n    min-height: 251vh;\n    flex-direction: column;\n    .bookList{\n        width: 100%;\n        border-bottom: #13274F 5px solid;\n        border-top:#13274F 5px solid;\n        .bookDiv{\n            width: 100%;\n           \n            display: block;\n            li{\n                pointer-events: none;\n                width: 100%;\n            .bookDescription{\n                width: 80%;\n                background-color:#F4BB44;\n                border: none;\n                font-size: 10px;\n                position: relative;\n                display: block;\n              \n            }\n        }\n           \n        }\n    }\n        .hobbies{\n           margin-bottom: 50vh;\n            width: 100%;\n            border-top: #13274F 5px solid;\n            border-bottom:#13274F 5px solid;\n            \n            .hobbyDiv{\n                display: block;\n                 \n                .list{\n                    li{\n                        font-weight: bold;\n                        margin-bottom: 5vh;\n                        width: 100%;\n                    p{\n                        width: 80%;\n                    }\n                }\n            }\n\n            }\n        }\n        .myStory{\n            padding: 50px;\n            button{\n                border: none;\n            }\n            width: 100%;\n            border: none;\n            .sumDiv{\n                display: block;\n            }\n        }\n      \n    \n}\n.imgSlider{\n    img{\n        height: 25vh;\n    }\n}\n}\n\n\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsc0JBQXNCLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFN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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVM7QUFDakI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFZO0FBQ3BCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEa0M7QUFDQTtBQUNGO0FBQ0U7QUFDSDtBQUNHO0FBQ0Y7QUFDRztBQUNMO0FBQ2Y7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkNBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBDQUFHO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUNBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBDQUFHO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5Q0FBRTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvYm9va3MuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9idWlsZE1haW4uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9ob2JiaWVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvaW1nLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3NraWxscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggd2hpdGU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuaGVhZGVyIHN2ZyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5oZWFkZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmhlYWRlciAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tbGVmdDogMTV2dztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuaGVhZGVyIC5uYW1lOmhvdmVyIHtcbiAgY29sb3I6ICNGRkQ3MDA7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5oZWFkZXIgLnBvcnRyYWl0IHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDMyMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmhlYWRlciAud2hvQW1JIHtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oZWFkZXIgLndob0FtSSBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLnNraWxscyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAwcHggMTVweCAxNXB4IGJsYWNrO1xufVxuLnNraWxscyBoMiB7XG4gIG1hcmdpbi1sZWZ0OiA0MyU7XG59XG4uc2tpbGxzIC53cmFwIHtcbiAgbWFyZ2luLWxlZnQ6IDN2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xufVxuLnNraWxscyAuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2tpbGxzIC5jYXJkIGltZyB7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzdnc7XG4gIGhlaWdodDogNnZoO1xufVxuXG4ucHJvamVjdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMjB2dztcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIC5idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIC5idG5zIGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkJGMDA7XG4gIGJvcmRlcjogI0ZGQkYwMCAxcHggc29saWQ7XG4gIHdpZHRoOiA5dnc7XG4gIGhlaWdodDogNXZoO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgLmJ0bnMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAuZGVzY3JpcHRpb24gaDIge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5kZXNjcmlwdGlvbiBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn1cblxuLnNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnNpZGUgLnNpZGVCYXIge1xuICB3aWR0aDogMjV2dztcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0NTRGO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IGF1dG87XG59XG4uc2lkZSAuc2lkZUJhciAucmVtb3ZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDU0RjtcbiAgYm9yZGVyOiBub25lO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNpZGUgLnNpZGVCYXIgLmJ0bkRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2lkZSAuc2lkZUJhciAuYnRuRGl2IC5idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDU0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2lkZSAuc2lkZUJhciAuYnRuRGl2IC5idG46aG92ZXIge1xuICBjb2xvcjogI0ZGQkYwMDtcbn1cbi5zaWRlICNhY3RpdmUge1xuICBhbmltYXRpb246IG9wZW5TaWRlIDFzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcbn1cbi5zaWRlICNkZUFjdGl2ZSB7XG4gIGFuaW1hdGlvbjogY2xvc2VTaWRlIDFzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XG59XG5cbm1haW4gI2FuaW1hdGUge1xuICBhbmltYXRpb246IHNsaWRlRG93biAwLjVzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxubWFpbiAjcmV2ZXJzZSB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuNXM7XG59XG5tYWluIC5iaW8ge1xuICB6LWluZGV4OiA1O1xuICBoZWlnaHQ6IDkwMHB4O1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xufVxubWFpbiAuYmlvIGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm1haW4gLmJpbyBidXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5tYWluIC5iaW8gLm15U3Rvcnkge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlcjogc29saWQgNXB4ICMxMzI3NEY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmc6IDJ2aCAzdnc7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMzMlO1xufVxubWFpbiAuYmlvIC5teVN0b3J5IGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcbn1cbm1haW4gLmJpbyAubXlTdG9yeSAuc3VtRGl2IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1haW4gLmJpbyAuYm9va0xpc3Qge1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMyU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMxMzI3NEY7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5tYWluIC5iaW8gLmJvb2tMaXN0IGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgd2lkdGg6IDEwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEJCNDQ7XG59XG5tYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYgLmJvb2tEZXNjcmlwdGlvbiB7XG4gIGxlZnQ6IDI1JTtcbiAgei1pbmRleDogMztcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzEzMjc0RjtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTh2dztcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAydncgMnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxubWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDE1dnc7XG59XG5tYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IG9sIGxpOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5tYWluIC5iaW8gLmhvYmJpZXMge1xuICBib3JkZXItdG9wOiAjMTMyNzRGIDVweCBzb2xpZDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAydmggM3Z3O1xuICB3aWR0aDogMzMlO1xufVxubWFpbiAuYmlvIC5ob2JiaWVzIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcbn1cbm1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYge1xuICBkaXNwbGF5OiBub25lO1xufVxubWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCBsaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbm1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYgLmxpc3QgbGkgcCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDE1dnc7XG59XG5tYWluIC5xdW90ZSB7XG4gIG1hcmdpbi1sZWZ0OiAzMHZ3O1xuICBtYXJnaW4tdG9wOiAydmg7XG59XG5tYWluIC5mYW1pbHlBbGJ1bSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubWFpbiAuaW1nU2xpZGVyIHtcbiAgd2lkdGg6IDE4MDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW47XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cbm1haW4gLmltZ1NsaWRlciBpbWcge1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIGhlaWdodDogMjV2aDtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5tYWluIC5leHBsYWluIHtcbiAgbWFyZ2luOiA1dmggNXZ3O1xufVxubWFpbiAuZXhwbGFpbiBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm1haW4gLmV4cGxhaW4gcCB7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG5Aa2V5ZnJhbWVzIG9wZW5TaWRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjEpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBjbG9zZVNpZGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVVcCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5za2lsbHMgLndyYXAgLmNhcmQgaW1nIHtcbiAgICB3aWR0aDogNnZ3O1xuICAgIGhlaWdodDogNnZoO1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3Mge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogMnZ3O1xuICAgIHdpZHRoOiAzMHZ3O1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIC5idG5zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwdnc7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1yaWdodDogNXZ3O1xuICB9XG4gIG1haW4gLmJpbyAubXlTdG9yeSAuc3VtRGl2IFAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IC5ib29rRGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiA0NXZ3O1xuICB9XG4gIG1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYgbGkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBtYWluIC5iaW8gLmhvYmJpZXMgLmhvYmJ5RGl2IC5saXN0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBtYWluIC5iaW8gLmhvYmJpZXMgLmhvYmJ5RGl2IC5saXN0IGxpIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgbWFpbiAuaW1nU2xpZGVyIGltZyB7XG4gICAgaGVpZ2h0OiAxNXZoO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuaGVhZGVyIC5wb3J0cmFpdCB7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuICAgIGhlaWdodDogMTYwcHg7XG4gIH1cbiAgLmhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5oZWFkZXIgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB9XG4gIC5za2lsbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5za2lsbHMgLndyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICAuc2tpbGxzIC53cmFwIC5jYXJkIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG4gIC5za2lsbHMgaDIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnByb2plY3RzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgaW1nIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1dnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIC5idG5zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAuZGVzY3JpcHRpb24gaDIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHZ3O1xuICAgIGNvbG9yOiAjRkZCRjAwO1xuICB9XG4gIC5wcm9qZWN0cyAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIC5wcm9qZWN0cyAuZGVzY3JpcHRpb24gaDIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAucHJvamVjdHMgLmRlc2NyaXB0aW9uIHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuc2lkZSAuc2lkZUJhciB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gIC5zaWRlICNhY3RpdmUge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgfVxuICBtYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICAgIH1cbiAgfVxuICBtYWluIC5xdW90ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gIH1cbiAgbWFpbiAjYW5pbWF0ZSB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIG1haW4gI3JldmVyc2Uge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBtYWluIC5iaW8ge1xuICAgIG1pbi1oZWlnaHQ6IDI1MXZoO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogIzEzMjc0RiA1cHggc29saWQ7XG4gICAgYm9yZGVyLXRvcDogIzEzMjc0RiA1cHggc29saWQ7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiBsaSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiBsaSAuYm9va0Rlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEJCNDQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6ICMxMzI3NEYgNXB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b206ICMxMzI3NEYgNXB4IHNvbGlkO1xuICB9XG4gIG1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIG1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYgLmxpc3QgbGkge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBtYWluIC5iaW8gLmhvYmJpZXMgLmhvYmJ5RGl2IC5saXN0IGxpIHAge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgbWFpbiAuYmlvIC5teVN0b3J5IHtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBtYWluIC5iaW8gLm15U3RvcnkgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgbWFpbiAuYmlvIC5teVN0b3J5IC5zdW1EaXYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIG1haW4gLmltZ1NsaWRlciBpbWcge1xuICAgIGhlaWdodDogMjV2aDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxTQUFBO0VBQ0EsOENBQUE7QUFESjs7QUFLQTtFQUNJLHlCQUFB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SXRCO0VBcUlrQjtJQUNJLFVBQUE7RUFuSXRCO0VBMElNO0lBQ0ksYUFBQTtJQUlBLFdBQUE7SUFDQSxZQUFBO0VBM0lWO0VBdUlVO0lBQ0ksWUFBQTtFQXJJZDtFQXlJVTtJQUNJLGNBQUE7RUF2SWQ7RUE4SUU7SUFDSSxZQUFBO0VBNUlOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiIFxcbiRiYXNlOiAjMzQzNDM0O1xcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICBcXG59XFxuIFxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzM0MzQzNDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgIFxcbn1cXG5oZWFkZXJ7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IHdoaXRlO1xcbiAgIFxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgIHN2Z3tcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgfVxcbiAgICBidXR0b257XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIC5uYW1leyBcXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xcbiAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgfVxcbiAgICAubmFtZTpob3ZlcntcXG4gICAgICAgIGNvbG9yOiAjRkZENzAwO1xcbiAgICB9XFxufVxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgIFxcbiAgICAucG9ydHJhaXR7XFxuICAgIFxcbiAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgIHdpZHRoOmF1dG87XFxuICAgICAgICBoZWlnaHQ6IDMyMXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcbiAgICAud2hvQW1Je1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICBcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG4uc2tpbGxze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgIFxcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxNXB4IGJsYWNrO1xcbiAgICBoMntcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MyU7XFxuICAgIH1cXG5cXG4gICAgLndyYXB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogM3Z3O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICAgICAgICAgXFxuICAgIFxcbiAgICAgICAgXFxuICAgIH1cXG4gICAgLmNhcmR7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGltZ3tcXG4gICAgICAgICBcXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgd2lkdGg6IDN2dztcXG4gICAgICAgICAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgICAgIH1cXG4gICAgICAgICBcXG4gICAgfVxcbn1cXG4ucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIC5wcm9qZWN0Q2FyZHtcXG4gICAgICAgXFxuICAgICAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIFxcbiAgICAgICAgLmxpbmtze1xcbiAgICAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwdnc7XFxuICAgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuYnRuc3tcXG4gICAgICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxdmg7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCRjAwO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAjRkZCRjAwIDFweCBzb2xpZDtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5dnc7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NXZoO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgIGgye1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICB9XFxufVxcbi5zaWRle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgIFxcbiAgXFxuICAgXFxuLnNpZGVCYXJ7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXFx0IzM2NDU0RjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIGRpc3BsYXk6IG5vbmU7XFxuICAgei1pbmRleDogYXV0bztcXG4gICAucmVtb3Zle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcXHQjMzY0NTRGO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5idG5EaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBcXG4gICAgLmJ0bntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXFx0IzM2NDU0RjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbiAgICAuYnRuOmhvdmVye1xcbiAgICAgICAgY29sb3I6ICAjRkZCRjAwO1xcbiAgICB9XFxufVxcblxcbiAgXFxufVxcbiNhY3RpdmV7XFxuICAgIGFuaW1hdGlvbjogb3BlblNpZGUgMXM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICB6LWluZGV4OiAyO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XFxuICBcXG4gICAgXFxufSAgXFxuI2RlQWN0aXZle1xcbiAgICBhbmltYXRpb246IGNsb3NlU2lkZSAxcztcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xcbn1cXG59XFxuXFxubWFpbntcXG4gICBcXG4jYW5pbWF0ZXtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZURvd24gLjVzO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jcmV2ZXJzZXtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbiAgICBhbmltYXRpb246IHNsaWRlVXAgLjVzO1xcbiAgICBcXG59XFxuICAgIFxcbi5iaW97XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIGhlaWdodDogOTAwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgYnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgfVxcbiAgIGJ1dHRvbjpob3ZlcntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgIH1cXG4gICAgXFxuICAgIC5teVN0b3J5e1xcbiAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xcbiAgICAgICAgfVxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogc29saWQgNXB4ICMxMzI3NEY7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICBcXG4gICAgICAgIFxcbiAgICAgICBwYWRkaW5nOjJ2aCAzdnc7XFxuICAgICAgIFxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgd2lkdGg6IDMzJTtcXG4gICAgICAgIC5zdW1EaXZ7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgfVxcbiAgICAuYm9va0xpc3R7XFxuICAgICAgICAgXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiAzMyU7XFxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgIzEzMjc0RjtcXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICAgICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmJvb2tEaXZ7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAuYm9va0Rlc2NyaXB0aW9ue1xcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNSU7XFxuICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjMTMyNzRGO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHZ3O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAydncgMnZoOyAgICAgXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGxpe1xcbiAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTV2dztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgb2x7XFxuICAgICAgICAgICAgbGk6aG92ZXJ7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgfVxcbiAgIC5ob2JiaWVze1xcbiAgICBib3JkZXItdG9wOiAjMTMyNzRGIDVweCBzb2xpZDtcXG4gICAgXFxuICAgIGJ1dHRvbntcXG4gICAgICAgXFxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEJCNDQ7XFxuICAgIH1cXG4gICAgIFxcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6MnZoIDN2dztcXG4gICAgd2lkdGg6IDMzJTtcXG4gICAgIFxcbiAgICAuaG9iYnlEaXZ7XFxuICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgLmxpc3R7XFxuICAgICAgICBsaXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgd2lkdGg6IDE1dnc7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgfVxcbn1cXG4gICB9XFxufVxcbi5xdW90ZXtcXG4gIG1hcmdpbi1sZWZ0OiAzMHZ3O1xcbiAgbWFyZ2luLXRvcDogMnZoO1xcbn1cXG4uZmFtaWx5QWxidW17XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pbWdTbGlkZXJ7XFxuICAgIHdpZHRoOiAxODAwdnc7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICBpbWd7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgICAgICAgaGVpZ2h0OiAyNXZoO1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICB9XFxufVxcbi5leHBsYWlue1xcbiAgIG1hcmdpbjogNXZoIDV2dztcXG4gICAgaDJ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgcHtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICB9XFxufVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9wZW5TaWRlIHtcXG4gICAgZnJvbXtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgfVxcbiAgICAgNzAle1xcbiAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjEpO1xcbiAgICAgfVxcbiAgICAgdG97XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgIH1cXG59XFxuQGtleWZyYW1lcyBjbG9zZVNpZGV7XFxuICAgIGZyb217XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIHRve1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgc2xpZGVEb3due1xcbiAgICBmcm9te1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgICAgXFxuICAgIH1cXG5cXG4gICAgdG97XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgICAgIFxcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgc2xpZGVVcHtcXG4gICAgZnJvbXtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgdG97XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpe1xcbiAgICAuc2tpbGxze1xcbiAgICAgICAgLndyYXB7XFxuICAgICAgICAgICAgLmNhcmR7XFxuICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICB3aWR0aDogNnZ3O1xcbiAgICAgICAgICAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG59XFxuLnByb2plY3Rze1xcbiAgICAucHJvamVjdENhcmR7XFxuICAgICAgICBcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAubGlua3N7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAydnc7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLmJ0bnN7XFxuICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLmRlc2NyaXB0aW9ue1xcbiAgICAgICAgXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDV2dztcXG4gICAgfVxcbn1cXG59XFxubWFpbnsgXFxuICAgICBcXG4uYmlve1xcbiAgICAubXlTdG9yeXtcXG4gICAgICAgIC5zdW1EaXZ7XFxuICAgICAgICAgICAgUHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLmJvb2tMaXN0e1xcbiAgICAgICAgLmJvb2tEaXZ7XFxuICAgICAgICAgICAgLmJvb2tEZXNjcmlwdGlvbntcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1dnc7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGxpe1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIFxcbiAgICB9XFxuICAgIC5ob2JiaWVze1xcblxcbiAgIC5ob2JieURpdntcXG4gICAgLmxpc3R7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGxpe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIH1cXG4gICAgICAgIHB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgfVxcbn1cXG59XFxuLmltZ1NsaWRlcntcXG4gICAgaW1ne1xcbiAgICAgICAgaGVpZ2h0OiAxNXZoO1xcbiAgICB9XFxufVxcbn1cXG4gfVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAgXFxuICAgIGhlYWRlcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIC5oZWFkZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICBcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC5wb3J0cmFpdHtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgIGgye1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIH1cXG4gICAgICAgIHB7XFxuICAgICAgICAgIFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuc2tpbGxze1xcbiAgICAgIFxcbiAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIFxcbiAgICAud3JhcHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXG4gICAgICAgIC5jYXJke1xcbiAgICAgICAgICAgICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbiAgICAgICAgaDJ7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAucHJvamVjdHN7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIFxcbiAgICAgICAgLnByb2plY3RDYXJke1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgLmxpbmtze1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xcbiAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmJ0bnN7XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwdnc7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgIGgye1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwdnc7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogICNGRkJGMDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgICAgcGFkZGluZzogMjVweDsgICAgIFxcbiAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICBcXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICAgICAgICAgICAgICBoMntcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBwe1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgIFxcbiAgICB9XFxuICAgIC5zaWRle1xcbiAgICAgICAgLnNpZGVCYXJ7XFxuICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgI2FjdGl2ZXtcXG4gICAgICAgICAgICBhbmltYXRpb246IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG4vL0FCT1VUIE1FIENTU1xcbm1haW57XFxuICAgIEBrZXlmcmFtZXMgc2xpZGVVcHtcXG4gICAgICAgIGZyb217XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgdG97XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIFxcbiAgICAucXVvdGV7XFxuICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcbiAgICB9XFxuI2FuaW1hdGV7XFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNyZXZlcnNle1xcbiAgICBhbmltYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYmlve1xcbiAgICBtaW4taGVpZ2h0OiAyNTF2aDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLmJvb2tMaXN0e1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAjMTMyNzRGIDVweCBzb2xpZDtcXG4gICAgICAgIGJvcmRlci10b3A6IzEzMjc0RiA1cHggc29saWQ7XFxuICAgICAgICAuYm9va0RpdntcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIGxpe1xcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgLmJvb2tEZXNjcmlwdGlvbntcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRjRCQjQ0O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICAgICAuaG9iYmllc3tcXG4gICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwdmg7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogIzEzMjc0RiA1cHggc29saWQ7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTojMTMyNzRGIDVweCBzb2xpZDtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAuaG9iYnlEaXZ7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIC5saXN0e1xcbiAgICAgICAgICAgICAgICAgICAgbGl7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgcHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5teVN0b3J5e1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAuc3VtRGl2e1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgXFxuICAgIFxcbn1cXG4uaW1nU2xpZGVye1xcbiAgICBpbWd7XFxuICAgICAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIH1cXG59XFxufVxcblxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBidWlsZEJvb2tzIGZyb20gXCIuL2Jvb2tzXCJcbmltcG9ydCBidWlsZEhvYmJpZXMgZnJvbSBcIi4vaG9iYmllc1wiXG5pbXBvcnQgYnVpbGRJbWFnZVNsaWRlciBmcm9tIFwiLi9pbWdcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRBYm91dE1lKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGNvbnN0IGJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gYFRoZXJlIGlzIHNvbWUgZ29vZCBpbiB0aGlzIHdvcmxkPGJyPiBhbmQgaXQncyB3b3J0aCBmaWdodGluZyBmb3IuICAgIC1KLlIuUiBUb2xraWVuIGBcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdxdW90ZScpXG4gICAgYmlvLmNsYXNzTGlzdC5hZGQoJ2JpbycpXG4gICAgY29uc3QgbXlTdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbXlTdG9yeS5jbGFzc0xpc3QuYWRkKCdteVN0b3J5JylcbiAgICBjb25zdCBteUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgbXlIZWFkaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgIGlmKHN1bW1Db250YWluZXIuaWQgPT0gJ2FuaW1hdGUnKXtcbiAgICAgICAgICAgICAgICAgICBzdW1tQ29udGFpbmVyLmlkID0gJ3JldmVyc2UnXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN1bW1Db250YWluZXIuaWQgPSAnYW5pbWF0ZSdcbiAgICAgICAgICAgIH0pXG4gICAgbXlIZWFkaW5nLmlubmVySFRNTCA9ICdNeSBTdG9yeSdcbiAgICAgICAgY29uc3QgYm9va0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IHN1bW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzdW1tQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1bURpdicpXG4gICAgICAgIGNvbnN0IGhvYmJ5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgaG9iYnlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9iYnlEaXYnKVxuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzdW1tYXJ5LmlubmVySFRNTCA9ICdNeSBmYW1pbHkgaXMgb3JpZ2luYWxseSBmcm9tIEJvc25pYSBhbmQgdGhlIG9ubHkgZmFtaWx5IHRoYXQgbGl2ZXMgaW4gdGhlIHN0YXRlcyBpcyBteSBtb3RoZXIgYW5kIHNpc3Rlci4gV2hlbiBJIHdhcyBpbiBoaWdoc2Nob29sIEkgd2FzIHVuc3VyZSB3aGF0IEkgd2FudGVkIHRvIGRvIHdpdGggbXkgbGlmZSB1bnRpbCBzZW5pb3IgeWVhciB3aGVuIEkgZ290IGludG8gQVBDUyBhbmQgbGVhcm5lZCBKYXZhLiBJIHF1aWNrbHkgbGVhcm5lZCBpdCB3YXMgd2hhdCBJIHdhbnRlZCB0byBkbyBmb3IgbWFqb3JpdHkgb2YgbXkgbGlmZS4gSSBhbHdheXMgbG92ZWQgYnVpbGRpbmcgc2luY2UgSSB3YXMgYSBraWQsIGFuZCBjb2Rpbmcga2VlcHMgbXkgaW5uZXIgY2hpbGQgYWxpdmUuIEkgdHJ5IHRvIGtlZXAgbXlzZWxmIGFzIGJ1c3kgYXMgcG9zc2libGUgZGF5IGluIGFuZCBkYXkgb3V0LCBhbmQgdHJ5IHRvIHRoaW5rIG9mIHByb2dyYW1taW5nIGFzIG15IG51bWJlciBvbmUgcHJpb3JpdHkuIEhvcGluZyB0byBldmVudHVhbGx5IHN0YXJ0IG15IG93biBjb21wYW55IHRoYXQgY291bGQgYnJhbmNoIG91dCBpbnRvIHZhcmlldHkgb2Ygd29yay4gSSBhbSBidWlsZGluZyBncmVhdCBjb25uZWN0aW9ucyB3aXRoIHBlb3BsZSBhbmQgdHJ5aW5nIHRvIGhlbHAgYXMgbWFueSBhcyBJIGNhbi4gSSBoYXZlIGEgYmVhdXRpZnVsIGdpcmxmcmllbmQgdGhhdCBJIGxvdmUgd2l0aCBteSB3aG9sZSBoZWFydCBhbmQgd2Ugc2hhcmUgYSB0b3duaG9tZSB3aXRoIHR3byBkb2dzIG5hbWVkIERlbGlsYWggYW5kIE5lbW8gYW5kIG15IGJyb3RoZXIgRGVhbi4nXG4gICAgY29uc3QgYm9va0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJvb2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2Jvb2tMaXN0JylcbiAgICBjb25zdCBib29rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJvb2tUaXRsZS5pbm5lckhUTUwgPSAnTXkgQm9va3MnXG4gICAgICAgICAgICAgICAgYm9va1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZihib29rQ29udGFpbmVyLmlkID09ICdhbmltYXRlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBib29rQ29udGFpbmVyLmlkID0gJ3JldmVyc2UnXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5pZCA9ICdhbmltYXRlJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgYm9va0xpc3QuYXBwZW5kQ2hpbGQoYm9va1RpdGxlKVxuICAgIGNvbnN0IG9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKVxuICAgIGJvb2tDb250YWluZXIuYXBwZW5kQ2hpbGQob2wpXG4gICAgYm9va0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib29rRGl2JylcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVhZC5pbm5lckhUTUwgPSAnQ3VycmVudGx5IFJlYWRpbmcnXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCb29rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2lybERyYWdvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgZ2lybERyYWdvbi5pbm5lckhUTUwgPSBcIkdpcmwgV2l0aCB0aGUgRHJhZ29uIFRhdHRvb1wiXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCb29rcy5hcHBlbmRDaGlsZChnaXJsRHJhZ29uKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdG9taWNIYWJpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICAgICAgICAgIGF0b21pY0hhYml0cy5pbm5lckhUTUwgPSAnQXRvbWljIEhhYml0cydcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJvb2tzLmFwcGVuZENoaWxkKGF0b21pY0hhYml0cylcbiAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50UmVhZClcbiAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50Qm9va3MpXG4gICAgICAgICAgICAgICAgICAgIGJvb2tMaXN0LmFwcGVuZENoaWxkKGJvb2tDb250YWluZXIpXG4gICAgICAgICAgICBjb25zdCBob2JieUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgaG9iYnlIZWFkaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgIGlmKGhvYmJ5Q29udGFpbmVyLmlkID09ICdhbmltYXRlJyl7XG4gICAgICAgICAgICAgICAgICAgIGhvYmJ5Q29udGFpbmVyLmlkID0gJ3JldmVyc2UnXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGhvYmJ5Q29udGFpbmVyLmlkID0gJ2FuaW1hdGUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaG9iYnlIZWFkaW5nLmlubmVySFRNTCA9ICdNeSBIb2JiaWVzJ1xuICAgICAgICAgICAgY29uc3QgaG9iYnlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGhvYmJ5TGlzdC5jbGFzc0xpc3QuYWRkKCdob2JiaWVzJylcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKVxuICAgICAgICAgICAgaG9iYnlMaXN0LmFwcGVuZENoaWxkKGhvYmJ5SGVhZGluZylcbiAgICAgICAgICAgIGhvYmJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpXG4gICAgICAgICAgICBob2JieUxpc3QuYXBwZW5kQ2hpbGQoaG9iYnlDb250YWluZXIpXG4gICAgbXlTdG9yeS5hcHBlbmRDaGlsZChteUhlYWRpbmcpXG4gICAgc3VtbUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdW1tYXJ5KVxuICAgIG15U3RvcnkuYXBwZW5kQ2hpbGQoc3VtbUNvbnRhaW5lcilcbiAgICBiaW8uYXBwZW5kQ2hpbGQoYm9va0xpc3QpXG4gICAgYmlvLmFwcGVuZENoaWxkKG15U3RvcnkpXG4gICAgYmlvLmFwcGVuZENoaWxkKGhvYmJ5TGlzdClcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYmlvKVxuICAgIGJ1aWxkQm9va3MoJ0F0b21pYyBIYWJpdHMnLCAnV3JpdHRlbiBieSBKYW1lcyBDbGVhcjxicj48YnI+IHdhcyBhIGJlbmVmaWNhbCBib29rIGZvciBtZSB0aGF0IHRhdWdodCBtZSBob3cgdG8gYnVpbGQgcG9zaXRpdmUgaGFiaXRzIGluY3JlbWVudGFsbHkgZWFjaCBkYXkuIFdhcyBhIGJpZyBoZWxwIGZvciBtZSB0byBrZWVwIGNvZGluZycsJ2h0dHBzOi8vamFtZXNjbGVhci5jb20vYXRvbWljLWhhYml0cycgKVxuICAgIGJ1aWxkQm9va3MoJ1RoZSBBdXRvYmlvZ3JhcGh5IG9mIE1hbGNvbSBYJywnV3JpdHRlbiBieSBBbGV4IEhhbGV5PGJyPjxicj5UaGlzIGJvb2sgdGF1Z2h0IG1lIGFsb3QgYWJvdXQgdGhlIFVuaXRlZCBzdGF0ZXMgZHVyaW5nIHRoZSBlYXJseSBwZXJpb2RzIGJlZm9yZSB0aGUgY2l2aWwgcmlnaHRzIG1vdmVtZW50IGFuZCBhbHNvIGFib3V0IHRoZSBtaXN1bmRlcnN0b29kIE1hbGNvbSBYLiBMZWFybmVkIGFib3V0IHRoZSBjcmVhdGlvbiBvZiB0aGUgTmF0aW9uIG9mIElzbGFtLCBhbmQgaG93IHByb2ZvdW5kIE1hbGNvbXMgbGlmZSB3YXMuJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGhlX0F1dG9iaW9ncmFwaHlfb2ZfTWFsY29sbV9YJylcbiAgICBidWlsZEJvb2tzKCdUaGUgNSBBTSBDbHViJywnV3JpdHRlbiBieSBSb2JpbiBTaGFybWE8YnI+PGJyPkEgZ3JlYXQgcmVhZCBjcmVhdGluZyBhIG5hcnJpdGl2ZSB0aGF0IGlzIGZ1bGwgb2YgaW5mb3JtYXRpb24gYWJvdXQgZ3JlYXRzLCBzaG93ZWQgdGhlIGJlbmVmaXRzIG9mIHdha2luZyB1cCBlYXJseSBhbmQgc3RhcnRpbmcgeW91ciBkYXkgYmVmb3JlIHRoZSBzdW4gcmlzZXMuIEN1cnJlbnRseSB3cml0aW5nIHRoaXMgYXQgNCBhbSBzbyBJIHRoaW5rIGl0IGRpZCBhIGdvb2Qgam9iIDopJywnaHR0cHM6Ly93d3cuYmxpbmtpc3QuY29tL2VuL2Jvb2tzL3RoZS01LWFtLWNsdWItZW4nKVxuICAgIGJ1aWxkQm9va3MoJ1RoZSBIb2JiaXQnLCdXcml0dGVuIGJ5IEouUi5SIFRvbGtpZW48YnI+PGJyPiBBIGNsYXNzaWMgc3RvcnkgdGhhdCB3YXMgbm90aGluZyBsaWtlIHRoZSBtb3ZpZScsJ2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RoZV9Ib2JiaXQnKVxuICAgIGJ1aWxkQm9va3MoJ0RlZXAgV29yaycsYFdyaXR0ZW4gYnkgQ2FsIE5ld3BvcnQ8YnI+PGJyPiBBIGJvb2sgY292ZXJpbmcgdGhlIHRvcGljIG9mIFwiRGVlcCBXb3JrXCIuIFRoaXMgd2FzIGEgZ29vZCByZWFkIGluZm9ybWluZyBtZSBvZiB0aGUgYmVuZWZpdCBvZiBjcmVhdGluZyBhIGRpc3RyYWN0aW9uIGZyZWUgZW52aXJvbm1lbnQgdGhhdCBhbGxvd3MgeW91IHRvIHdvcmsgd2l0aCBkZWVwbmVzcy4gVGhlIHVzZSBvZiB0YWN0aWNzIHN1Y2ggYXMgJ1BvbW9kb3JvJyBhcmUgdmVyeSBoZWxwZnVsIGZvciBwYWNpbmcgeW91cnNlbGYgYW5kIGFsbG93aW5nIHBlcmlvZHMgZm9yIHlvdSB0byByZXN0YCwnaHR0cHM6Ly93d3cuc2FtdWVsdGhvbWFzZGF2aWVzLmNvbS9ib29rLXN1bW1hcmllcy9idXNpbmVzcy9kZWVwLXdvcmsvJylcbiAgICBidWlsZEJvb2tzKCdDYW50IEh1cnQgTWUnLCdCeSBEYXZpZCBHb2dnaW5zPGJyPjxicj4gVGhpcyBib29rIGNvdmVycyBhbG90IG9mIHRoZSBsaWZlIG9mIHRoZSByZXRpcmVkIE5hdnkgU2VhbCBEYXZpZCBHb2dnaW5zLiBJIGdvdCBvdXQgb2YgdGhpcyBib29rIHRoZSBpZGVhIG9mIGEgdHJ1ZGdlIHRocm91Z2ggbWVudGFsaXR5IHdoZXJlIEkgbGVhcm5lZCB0byBrZWVwIHB1c2hpbmcgdGhyb3VnaCBoYXJkc2hpcCBhbmQgYnJlYWsgdGhyb3VnaCBiYXJyaWVycyBzZXQgYnkgeW91cnNlbGYnLCdodHRwczovL2RhdmlkZ29nZ2lucy5jb20vYm9vay8nKVxuICAgIGJ1aWxkQm9va3MoJ0RvbiBRdWl4b3RlJywgJ1dyaXR0ZW4gYnkgTWlndWVsIGRlIENlcnZhbnRlczxicj48YnI+IFRoaXMgb25lIHdhcyB0aGUgYm9vayBvZiB0aGUgeWVhciBmb3IgbWUuIEkgbG92ZWQgdGhlIHN0b3J5IGFuZCB0aGUgaW1hZ2VyeSBwcmVzZW50ZWQgZnJvbSB0aGUgYXV0aG9yIHdhcyBhbWF6aW5nLiBIb25lc3RseSB0aGUgZnVubmllc3QgYm9vayBJIGhhdmUgcmVhZCBhbmQgd2FzIHNhZCB0byBmaW5pc2ggaXQgYW5kIHB1dCBpdCBkb3duLiBXaWxsIGRlZmluZXRseSBiZSByZWFkaW5nIGFnYWluJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRG9uX1F1aXhvdGUnKVxuICAgIGJ1aWxkQm9va3MoJ1d1dGhlcmluZyBIZWlnaHRzJywnV3JpdHRlbiBieSBFbWlseSBCcm9udMOrPGJyPjxicj4gQSBjbGFzc2ljIHBvcnRyYXlpbmcgbG92ZSwgZGVjZXB0aW9uLCBhbmQgYSB2YXJpZXR5IG9mIGVtb3Rpb24uIEhlYXRoY2xpZmYgd2FzIGhvbmVzdGx5IHRoZSBiZXN0IGFudGFnb25pc3QgSSBoYXZlIHNlZW4gaW4gYSB3aGlsZS4gR29vZCByZWFkJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV3V0aGVyaW5nX0hlaWdodHMnKVxuICAgIGJ1aWxkQm9va3MoJ0FuaW1hbCBGYXJtJywgJ1dyaXR0ZW4gYnkgR2VvcmdlIE9yd2VsbDxicj48YnI+IEEgZ29vZCByZXJlYWQgYWZ0ZXIgYSBiaXQgb2YgdGltZSwgd2FzIGludGVyZXN0aW5nIHNlZWluZyB0aGUgY29tcGFyaXNvbiBvZiBjZXJ0YWluIHBvbGl0aWNhbCBzeXN0ZW1zIHRvIHRoZSBzZXR0aW5nIG9mIHRoZSBib29rJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQW5pbWFsX0Zhcm0nKSBcbiAgICAgICAgYnVpbGRIb2JiaWVzKCdHYXJkZW5pbmcnLCdJIGFtIGEgYXZpZCBnYXJkbmVyIGFuZCBJIHRyeSB0byBncm93IGEgdmFyaWV0eSBvZiBwbGFudHMsIGN1cnJlbnRseSBJIGFtIGV4Y2l0ZWQgdG8gaGFydmVzdCBteSBmaXJzdCB0b21hdG8gYW5kIGRpbGwgd2hlbiB0aGV5IGFyZSBib3RoIHJlYWR5JylcbiAgICAgICAgYnVpbGRIb2JiaWVzKCdHdWl0YXInLGBJIGhhdmUgYmVlbiBwcmFjdGljaW5nIGd1aXRhciBhIGRlY2VudCBhbW91bnQgbGF0ZWx5LCBjdXJyZW50IGxlYXJuaW5nIDxhIGhyZWYgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj10SDJ3Nk94eDBrUSc+RHVzdCBpbiB0aGUgV2luZDwvYT4gYW5kIGp1c3Qgc3RhcnRlZCB0byBsZWFybiBhIDxhIGhyZWYgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1aMmIxNXJ3R0JKYyc+bHVsbGFieTwvYT5gKVxuICAgICAgICBidWlsZEhvYmJpZXMoJ1BpYW5vJyxgSSBoYXZlIGJlZW4gcGxheWluZyBwaWFubyBzaW5jZSBzZW5pb3IgeWVhciBvZiBjb2xsZWdlIGFuZCBpdHMgcmVsYXhpbmcgdG8gcGxheS4gSSBhbSByZWFsbHkgaW50byBhbGwgbXVzaWMgYnV0IGZvciBwaWFubyBJIHVzdWFsbHkganVzdCBwbGF5IGNsYXNzaWNhbC4gVGhlIG9ubHkgc29uZyBJIGtub3cgZnVsbHkgaXMgPGEgaHJlZj0naHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0yV2Zhb3RTSzNtSSc+R3ltbm9wZWRpZSBuby4gMTwvYT5gKVxuICAgICAgICBidWlsZEhvYmJpZXMoJ1JlYWRpbmcnLCdJIGhhdmUgYmVjb21lIGEgYmlnIHJlYWRlciB0aGlzIHllYXIgYXMgbXkgYm9vayBsaXN0IHdvdWxkIHNob3cgbG9sLiBJIGFwcHJlY2lhdGUgbGVhcm5pbmcgYWxvdCBhbmQgeW91IGNhbiBnZXQgc28gbXVjaCBvdXQgb2YgcmVhZGluZycpXG4gICAgICBjb25zdCBmYW1pbHlBbGJ1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICAgIGZhbWlseUFsYnVtLmlubmVySFRNTCA9ICdGYW1pbHkgQWxidW0nXG4gICAgICBmYW1pbHlBbGJ1bS5jbGFzc0xpc3QuYWRkKCdmYW1pbHlBbGJ1bScpXG4gICAgICBtYWluLmFwcGVuZENoaWxkKGZhbWlseUFsYnVtKVxuICAgICAgICAgYnVpbGRJbWFnZVNsaWRlcigpXG4gICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgY29uc3QgZXhwbGFpbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgICBleHBsYWluSGVhZC5pbm5lckhUTUwgPSAnVGhlIHBlb3BsZSBpbiBteSBGYW1pbHknXG4gICAgICAgICBjb25zdCBleHBsYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICBleHBsYWluLmlubmVySFRNTCA9ICdTbyBteSBmYW1pbHkgaXMgZm9yZXZlciBncm93aW5nLiBJIGxvdmUgbWFraW5nIG5ldyBjb25uZWN0aW9ucyBhbmQga2VlcGluZyB0aWdodGVyIGJvbmRzLCBJIGhhdmUgYWx3YXlzIGhhZCBhIHNtYWxsIGltbWVkaWF0ZSBmYW1pbHksIGJ1dCB0aGUgcGVvcGxlIEkgdHJ1bHkgbG92ZSB3aWxsIGFsd2F5cyBzdGF5IHdpdGggbWUgYW5kIEkgd2lsbCBhbHdheXMgaGF2ZSB0aGVpciBiYWNrLiBTb21lIG9mIHRoZSBwZW9wbGUgaW4gaGVyZSBhcmUgZmFtaWx5IGJ5IGJsb29kIGxpa2UgbXkgc2lzdGVyIEFuaXRhIGFuZCBteSBtb20gU3BvbWVua2EuIEJ1dCB0aGUgY2xvc2VzdCBwZXJzb24gaW4gbXkgbGlmZSBpcyBteSBicm90aGVyIGRlYW4sIGFuZCB3ZSBoYXZlIGJlZW4gZXZlcnl3aGVyZSBhbmQgZG9uZSBldmVyeXRoaW5nIHRvZ2V0aGVyLiBIZSBpcyByZWFsbHkgbXkgcm9jay4gUGVvcGxlIGxpa2UgbXkgbGl0dGxlIGJyb3RoZXIgRGFuaWVsIG9yIG15IHBoaWxvc29waHkgdGVhY2hlciBUaW1vdGh5IGFyZSB0d28gcGVvcGxlIHdobyBJIGxvdmUgZGVhcmx5IGFuZCBJIGtub3cgdGhleSB3aWxsIGdvIGZhci4gTXkgYnJvdGhlciBUaGllbiBpcyBzb21lb25lIHdobyBhbHdheXMgaGFzIG15IGJhY2sgYW5kIEkga25vdyBoZSB3aWxsIGFsd2F5cyBiZSBieSBteSBzaWRlLiBUaGVyZSBpcyBzbyBtYW55IG1lbWJlcnMgb2YgbXkgZmFtaWx5IGFuZCBJIGhvcGUgaXQga2VlcHMgZ3Jvd2luZy4gTW9yZSBwaWN0dXJlcyB0byBjb21lISdcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGV4cGxhaW5IZWFkKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZXhwbGFpbilcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGxhaW4nKVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGRpdilcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRCb29rcyhib29rLGRlc2NyaXB0aW9uLCBsaW5rKXtcbiAgIGNvbnN0IG9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignb2wnKVxuICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICBhbmNob3IuaHJlZiA9IGxpbmtcbiAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgY29uc3QgYm9va0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGJvb2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdib29rRGVzY3JpcHRpb24nKVxuICAgbGkuaW5uZXJIVE1MID0gYm9vayBcbiAgIGJvb2tEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBkZXNjcmlwdGlvblxuICAgYm9va0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLGJvb2spXG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywoKT0+e1xuICAgIGNvbnN0IGlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm9vaylcbiAgICBpZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgfSlcbiAgIFxuICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKCk9PntcbiAgICBjb25zdCBpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJvb2spXG4gICAgaWQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgfSkgXG4gICBcbiAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGlua1xuICAgfSlcbiAgIGxpLmFwcGVuZENoaWxkKGJvb2tEZXNjcmlwdGlvbilcbiAgIFxuICAgb2wuYXBwZW5kQ2hpbGQobGkpXG4gICAgXG59IiwiaW1wb3J0IGJ1aWxkSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xuaW1wb3J0IHdlYXRoZXIgZnJvbSAnLi9waWNzL3dlYXRoZXJJbWcucG5nJ1xuaW1wb3J0IGJ1aWxkU2tpbGxzIGZyb20gJy4vc2tpbGxzJ1xuaW1wb3J0IGJ1aWxkUHJvamVjdCBmcm9tICcuL3Byb2plY3QnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1haW4oKXtcbmJ1aWxkSGVhZGVyKClcbmJ1aWxkU2tpbGxzKClcbiBcbmJ1aWxkUHJvamVjdCh3ZWF0aGVyLCdodHRwczovL3BhdHJpY2stdG9taWMuZ2l0aHViLmlvL1dlYXRoZXJBUEkvJywnaHR0cHM6Ly9naXRodWIuY29tL1BhdHJpY2stVG9taWMvV2VhdGhlckFQSScsJ1RoaXMgYXBwbGljYXRpb24gaXMgbXkgZmlyc3QgdGltZSB1dGlsaXppbmcgYSBBUEksIEkgZG8gc29tZSBzaW1wbGUgYW5pbWF0aW9ucyB3aXRoaW4gdGhpcyBwcm9qZWN0IGFuZCBsZWFybmVkIGFsb3QgdGhyb3VnaCB0aGUgdXNlIG9mIHJlc3BvbnNpdmUgZGVzaWduIGFuZCBhbmltYXRpb24nLCdXZWF0aGVyIEFwcGxpY2F0aW9uJylcbn1cbiBcbiIsImltcG9ydCBwb3J0YWl0IGZyb20gJy4vcGljcy9Ub21pYy5QLmpwZydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbmNvbnN0IHBvcnRyYWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnBvcnRyYWl0LmNsYXNzTGlzdC5hZGQoJ3BpY09mTWUnKVxuaW1nLmNsYXNzTGlzdC5hZGQoJ3BvcnRyYWl0JylcbmltZy5zcmMgPSBwb3J0YWl0XG5wb3J0cmFpdC5hcHBlbmRDaGlsZChpbWcpXG5oZWFkZXIuYXBwZW5kQ2hpbGQocG9ydHJhaXQpXG5jb25zdCB3aG9BbUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxud2hvQW1JLmNsYXNzTGlzdC5hZGQoJ3dob0FtSScpXG5jb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbmgyLmlubmVySFRNTCA9ICdNeSBuYW1lIGlzIFBhdHJpY2sgRW1hbnVlbCBUb21pYydcbndob0FtSS5hcHBlbmRDaGlsZChoMilcbmNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbnAuaW5uZXJIVE1MID0gJ0kgYW0gYSBzdHVkZW50IGF0IHRoZSBVbml2ZXJzaXR5IG9mIFNvdXRoIEZsb3JpZGEgYW5kIEkgZ3JhZHVhdGUgaW4gdGhlIFNwcmluZyBvZiAyMDI0PGJyPndpdGggYSBCYWNoZWxvcnMgZGVncmVlIGluIEluZm9ybWF0aW9uIFNjaWVuY2U8YnI+SSBhbSBhIG1hbiB3aXRoIGFsb3Qgb2YgYW1iaXRpb24gdG8gYmV0dGVyIHRoZSB3b3JsZCwgYW5kIGFtIHRoZSBmaXJzdCBvZiBteSBmYW1pbHkgdG8gYmU8YnI+Ym9ybiBpbiBBbWVyaWNhLiBJIHNwZW5kIGFzIG11Y2ggdGltZSBhcyBJIGNhbiBsZWFybmluZyBob3cgdG8gZGV2ZWxvcCB3ZWJzaXRlcyBldmVyeWRheTxicj5JdCBpcyBub3QganVzdCBmdW4gZm9yIG1lIGJ1dCBicmluZ3MgaW1tZW5zZSBzYXRpc2ZhY3Rpb24gd2hlbiBJIGNhbiBidWlsZCBhbmQgZGVzaWduIHNvbWV0aGluZzxicj50aGF0IEkga25vdyBpcyBnb29kLiBJIGxvdmUgaGVscGluZyBwZW9wbGUsIGFuZCBJIGFtIGxvb2tpbmcgZm9yIGEgb3Bwb3J0dW5pdHkgdG8gc2hvdyA8YnI+bXkgc2tpbGxzZXQgYW5kIGxlYXJuIHRocm91Z2ggb3RoZXJzJ1xud2hvQW1JLmFwcGVuZENoaWxkKHApXG5oZWFkZXIuYXBwZW5kQ2hpbGQod2hvQW1JKVxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxubWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRIb2JiaWVzKHRpdGxlLGRlc2NyaXB0aW9uKXtcbiAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpXG4gICAgIGxpLmlubmVySFRNTCA9IHRpdGxlXG4gICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgcC5pbm5lckhUTUwgPSBkZXNjcmlwdGlvblxuICAgXG4gICAgIGxpLmFwcGVuZENoaWxkKHApXG4gICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpXG59IiwiXG5pbXBvcnQgYXNoIGZyb20gJy4vc2xpZGVyL2FzaC5qcGcnXG5pbXBvcnQgYmFieSBmcm9tICcuL3NsaWRlci9iYWJ5LmpwZydcbmltcG9ydCBicm90aGVyIGZyb20gJy4vc2xpZGVyL2Jyb3RoZXIuanBnJ1xuaW1wb3J0IGJyb3RoZXJzIGZyb20gJy4vc2xpZGVyL2Jyb3RoZXJzLmpwZydcbmltcG9ydCBidWJiYSBmcm9tICcuL3NsaWRlci9idWJiYS5qcGcnXG5pbXBvcnQgYnVjcyBmcm9tICcuL3NsaWRlci9idWNzLmpwZydcbmltcG9ydCBidXR0ZXJmbHkgZnJvbSAnLi9zbGlkZXIvYnV0dGVyZmx5LmpwZydcbmltcG9ydCBjb29sIGZyb20gJy4vc2xpZGVyL2Nvb2wuanBnJ1xuaW1wb3J0IGNyb2F0aWEgZnJvbSAnLi9zbGlkZXIvY3JvYXRpYS5qcGcnXG5pbXBvcnQgZGFuaWVsIGZyb20gJy4vc2xpZGVyL2RhbmllbC5qcGcnXG5pbXBvcnQgZG9scGhpbiBmcm9tICcuL3NsaWRlci9kb2xwaGluLmpwZydcbmltcG9ydCBleWVzIGZyb20gJy4vc2xpZGVyL2V5ZXMuanBnJ1xuaW1wb3J0IGZhbWlseSBmcm9tICcuL3NsaWRlci9mYW1pbHkuanBnJ1xuaW1wb3J0IGZyaWVuZHMgZnJvbSAnLi9zbGlkZXIvZnJpZW5kcy5qcGcnXG5pbXBvcnQgZ2FnZ2xlIGZyb20gJy4vc2xpZGVyL2dhZ2dsZS5qcGcnXG5pbXBvcnQgZ2FuZyBmcm9tICcuL3NsaWRlci9nYW5nLmpwZydcbmltcG9ydCBnb29mcyBmcm9tICcuL3NsaWRlci9nb29mcy5qcGcnXG5pbXBvcnQgZ29vbnMgZnJvbSAnLi9zbGlkZXIvZ29vbnMuanBnJ1xuaW1wb3J0IGdyYW5kcGEgZnJvbSAnLi9zbGlkZXIvZ3JhbmRwYS5qcGcnXG5pbXBvcnQgbWF4IGZyb20gJy4vc2xpZGVyL21heC5qcGcnXG5pbXBvcnQgbW9tbWEgZnJvbSAnLi9zbGlkZXIvbW9tbWEuanBnJ1xuaW1wb3J0IG1vbmtleSBmcm9tICcuL3NsaWRlci9tb25rZXkuanBnJ1xuaW1wb3J0IHBvc2UgZnJvbSAnLi9zbGlkZXIvcG9zZS5qcGcnXG5pbXBvcnQgcHVwcGV0IGZyb20gJy4vc2xpZGVyL3B1cHBldC5qcGcnXG5pbXBvcnQgc2hlbWsgZnJvbSAnLi9zbGlkZXIvc2hlbWsuanBnJ1xuaW1wb3J0IHNpYmxpbmdzIGZyb20gJy4vc2xpZGVyL3NpYmxpbmdzLmpwZydcbmltcG9ydCBzaXNzeSBmcm9tICcuL3NsaWRlci9zaXNzeS5qcGcnXG5pbXBvcnQgc2tpcHBpbiBmcm9tICcuL3NsaWRlci9za2lwcGluZy5qcGcnXG5pbXBvcnQgc3RvaWMgZnJvbSAnLi9zbGlkZXIvc3RvaWMuanBnJ1xuaW1wb3J0IHN0cm9uZ1RpbSBmcm9tICcuL3NsaWRlci9zdHJvbmdUaW0uanBnJ1xuaW1wb3J0IHN3ZWV0VCBmcm9tICcuL3NsaWRlci9zd2VldFQuanBnJ1xuaW1wb3J0IHRoaWVuIGZyb20gJy4vc2xpZGVyL3RoaWVuQmRheS5qcGcnXG5pbXBvcnQgdGhvciBmcm9tICcuL3NsaWRlci90aG9yLmpwZydcbmltcG9ydCB0dXJ0bGUgZnJvbSAnLi9zbGlkZXIvdHVydGxlLmpwZydcbmltcG9ydCB3YXRlciBmcm9tICcuL3NsaWRlci93YXRlci5qcGcnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEltYWdlU2xpZGVyKCl7XG4gICAgY29uc3QgbmFtZXMgPSBbYXNoLGJhYnksYnJvdGhlcixicm90aGVycyxidWJiYSxidWNzLGJ1dHRlcmZseSxjb29sLGNyb2F0aWEsZGFuaWVsLGRvbHBoaW4sZXllcyxmYW1pbHksZnJpZW5kcyxnYWdnbGUsZ2FuZyxnb29mcyxncmFuZHBhLG1heCxtb21tYSxtb25rZXkscG9zZSxwdXBwZXQsc2hlbWssc2libGluZ3Msc2lzc3ksc2tpcHBpbixzdG9pYyxzdHJvbmdUaW0sdGhpZW4sc3dlZXRULHRob3IsdHVydGxlLHdhdGVyXVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKCdpbWdTbGlkZXInKVxuICAgIGZvcihsZXQgaSA9IDA7IGk8bmFtZXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGltZy5zcmMgPSBuYW1lc1tpXVxuICAgICAgICBpZihpJTI9PTApe1xuICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpblRvcCA9ICczdmgnXG4gICAgICAgICAgICBpbWcuc3R5bGUuekluZGV4ID0gJ2F1dG8nXG4gICAgICAgIH1lbHNlIGlmKGklMiE9MCl7XG4gICAgICAgICAgICBpbWcuc3R5bGUubWFyZ2luVG9wID0gJzh2aCdcbiAgICAgICAgICAgIGltZy5zdHlsZS56SW5kZXggPSAnMidcbiAgICAgICAgfVxuICAgICAgICBpbWcuYWx0ID0gJ215RmFtaWx5L25hdHVyZSdcbiAgICAgICAgc2xpZGVyLmFwcGVuZENoaWxkKGltZylcbiAgICB9XG4gICAgbGV0IGNvdW50ID0gMFxuICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgIGxldCB2dyA9IDEwMFxuICAgICAgICBpZihjb3VudCA9PS0xMSl7XG4gICAgICAgICAgICBjb3VudCA9IDBcbiAgICAgICAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb3VudC0tXG4gICAgICAgICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgXG4gICAgICAgICAgICB9XG4gICAgfSwzMDAwKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2xpZGVyKVxufVxuICIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IGJ1aWxkU2lkZUJhciBmcm9tICcuL3NpZGViYXInXG5pbXBvcnQgYnVpbGRNYWluIGZyb20gJy4vYnVpbGRNYWluJ1xuY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJylcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jylcbm5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzNDM0MzQnXG4gICAgYnVpbGRNYWluKCkgIFxufSlcbmJ1aWxkTWFpbigpXG5idWlsZFNpZGVCYXIoKSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkUHJvamVjdChzcmMsIHNpdGVMaW5rLGdoTGluaywgcElubmVyLCBoZWFkKXtcbiAgICBcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbiAgICBpZihtYWluLmNvbnRhaW5zKHByb2plY3RzKT09dHJ1ZSl7XG4gICAgXG4gICAgICAgIFxuICAgIH1lbHNle1xuICAgICAgICBjb25zb2xlLmxvZyhmYWxzZSlcbiAgICAgICAgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpXG4gICAgfVxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidG5zLmNsYXNzTGlzdC5hZGQoJ2J0bnMnKVxuICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2xpbmtzJylcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbGV0IGNvdW50ID0gMFxuICAgIGltZy5zcmMgPSBzcmNcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChpbWcpXG4gICAgd2hpbGUoY291bnQ8Mil7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnRuLnR5cGUgPSAnc3VibWl0J1xuICAgICAgICBzd2l0Y2goY291bnQpe1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGZvcm0uYWN0aW9uID0gc2l0ZUxpbmtcbiAgICAgICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gJ1ZpZXcgTGl2ZSBTaXRlJ1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuKVxuICAgICAgICAgICAgICAgIGJ0bnMuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBmb3JtLmFjdGlvbiA9IGdoTGlua1xuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSAnU291cmNlIENvZGUnXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidG4pXG4gICAgICAgICAgICAgICAgYnRucy5hcHBlbmRDaGlsZChmb3JtKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVhayBcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q2FyZCcpXG4gICBsaW5rcy5hcHBlbmRDaGlsZChidG5zKVxuICAgIHAuaW5uZXJIVE1MID0gcElubmVyXG4gICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChsaW5rcylcbiAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpXG4gICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgIGgyLmlubmVySFRNTCA9IGhlYWRcbiAgICBkZXNjLmFwcGVuZENoaWxkKGgyKVxuICAgIGRlc2MuYXBwZW5kQ2hpbGQocClcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChkZXNjKVxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdHMpXG59XG4iLCJpbXBvcnQgYnVpbGRNYWluIGZyb20gJy4vYnVpbGRNYWluJ1xuaW1wb3J0IGJ1aWxkQWJvdXRNZSBmcm9tICcuL2Fib3V0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRTaWRlQmFyKCl7XG4gICAgY29uc3Qgc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlJylcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZUJhckJ0bicpXG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlJylcbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaWRlQmFyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdzaWRlQmFyJylcbiAgICByZW1vdmVCdG4uaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIzOVwiIGhlaWdodD1cIjM2XCIgdmlld0JveD1cIjAgMCAzOSAzNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxyZWN0IHdpZHRoPVwiNDMuNjg0NlwiIGhlaWdodD1cIjcuOTU1M1wiIHJ4PVwiMy45Nzc2NVwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjc0NjgxIDAuNjY1MDM3IC0wLjc4NzgxMSAwLjYxNTkxNyA2LjI2NzIxIDEuOTkwNilcIiBmaWxsPVwid2hpdGVcIi8+IDxyZWN0IHdpZHRoPVwiNDIuOTI0OFwiIGhlaWdodD1cIjguMDg4MThcIiByeD1cIjQuMDQ0MDlcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLTAuNjc4MzAyIDAuNzM0NzgzIC0wLjg0MTI0NCAtMC41NDA2NTYgMzcuMzUxNiA0LjM3MjkyKVwiIGZpbGw9XCJ3aGl0ZVwiLz4gPC9zdmc+J1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBcbiAgICAgICBzaWRlQmFyLnNldEF0dHJpYnV0ZSgnaWQnLCdhY3RpdmUnKVxuICAgIH0pXG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBzaWRlQmFyLmlkID0gJ2RlQWN0aXZlJ1xuICAgIH0pXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChyZW1vdmVCdG4pXG4gICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGhvbWVEaXYuY2xhc3NMaXN0LmFkZCgnYnRuRGl2JylcbmNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbnAuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIjAgMCAxODMgMTUwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+IDxyZWN0IHg9XCI0MVwiIHk9XCI1MFwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgcng9XCIxMFwiIGZpbGw9XCIjRkZCRjAwXCIvPiA8cGF0aCBkPVwiTTg0LjYyNiA2LjUwNjExQzg4LjQ4MiAyLjg1NjQ2IDk0LjUxOCAyLjg1NjQ1IDk4LjM3NCA2LjUwNjFMMTUyLjUwMiA1Ny43MzcyQzE1OS4wNjkgNjMuOTUyOSAxNTQuNjcxIDc1IDE0NS42MjggNzVIMzcuMzcxN0MyOC4zMjk1IDc1IDIzLjkzMDUgNjMuOTUyOSAzMC40OTc3IDU3LjczNzJMODQuNjI2IDYuNTA2MTFaXCIgZmlsbD1cIiNGRkJGMDBcIi8+PHBhdGggZD1cIk03NCAxMDZDNzQgMTAwLjQ3NyA3OC40NzcyIDk2IDg0IDk2SDk4QzEwMy41MjMgOTYgMTA4IDEwMC40NzcgMTA4IDEwNlYxNTBINzRWMTA2WlwiIGZpbGw9XCJibGFja1wiLz48L3N2Zz4nXG4gICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBob21lLmlubmVySFRNTCA9ICdIb21lJ1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMzQzNDM0J1xuICAgICAgICBidWlsZE1haW4oKVxuICAgICAgICBzaWRlQmFyLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCdhY3RpdmUnKVxuICAgIH0pXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lKVxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQocClcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGhvbWVEaXYpXG4gICAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0RGl2LmNsYXNzTGlzdC5hZGQoJ2J0bkRpdicpXG4gICAgIGNvbnN0IGFib3V0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgIGFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGNEJCNDQnXG4gICAgICAgIGJ1aWxkQWJvdXRNZSgpXG4gICAgICAgIHNpZGVCYXIucmVtb3ZlQXR0cmlidXRlKCdpZCcsJ2FjdGl2ZScpXG4gICAgIH0pXG4gICAgIGFib3V0QnRuLmlubmVySFRNTCA9ICdBYm91dCBNZSdcbiAgICAgYWJvdXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRCdG4pXG4gICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0UClcbiAgICAgc2lkZUJhci5hcHBlbmRDaGlsZChhYm91dERpdilcbiAgICBzaWRlLmFwcGVuZENoaWxkKHNpZGVCYXIpXG59IiwiaW1wb3J0IGphdmEgZnJvbSAnLi9waWNzL2phdmEucG5nJ1xuaW1wb3J0IHNhc3MgZnJvbSAnLi9waWNzL3Nhc3MucG5nJ1xuaW1wb3J0IGNzcyBmcm9tICcuL3BpY3MvY3NzLnBuZydcbmltcG9ydCBodG1sIGZyb20gJy4vcGljcy9odG1sLnBuZydcbmltcG9ydCBqcyBmcm9tICAnLi9waWNzL2pzLnBuZydcbmltcG9ydCBweSBmcm9tICcuL3BpY3MvcHl0aG9uLnBuZydcbmltcG9ydCBzcWwgZnJvbSAnLi9waWNzL3NxbC5wbmcnXG5pbXBvcnQgd3AgZnJvbSAnLi9waWNzL3dlYnBhY2sucG5nJ1xuaW1wb3J0IHRzIGZyb20gJy4vcGljcy90cy5wbmcnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFNraWxscygpe1xuICAgIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICB3cmFwLmNsYXNzTGlzdC5hZGQoJ3NraWxscycpXG4gICAgY29uc3Qgc2tpbGxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBza2lsbHMuY2xhc3NMaXN0LmFkZCgnd3JhcCcpXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgaDIuaW5uZXJIVE1MID0gXCJNeSBTa2lsbHNldFwiXG4gICAgd3JhcC5hcHBlbmRDaGlsZChoMilcbiAgICBsZXQgY291bnQgPSAwXG4gICAgd2hpbGUoY291bnQgPCA5KXtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgICAgIHN3aXRjaChjb3VudCl7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ0phdmEnICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGphdmFcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0phdmEnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBwLnN0eWxlLm1hcmdpbkxlZnQgPSAnMTBweCdcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ1B5dGhvbidcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gcHlcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ1B5dGhvbidcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnSFRNTCdcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gaHRtbFxuICAgICAgICAgICAgICAgIHAuc3R5bGUubWFyZ2luTGVmdCA9ICcxMXB4J1xuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnSFRNTCdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnQ1NTJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBjc3NcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0NTUydcbiAgICAgICAgICAgICAgICBwLnN0eWxlLm1hcmdpbkxlZnQgPSAnMTJweCdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnSmF2YVNjcmlwdCdcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUubWFyZ2luTGVmdCA9ICcyMHB4J1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBqc1xuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnSmF2YVNjcmlwdCdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnbXlTUUwnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHNxbFxuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnbXlTUUwnXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzhweCdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnU2FzcydcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gc2Fzc1xuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnU2FzcydcbiAgICAgICAgICAgICAgICBwLnN0eWxlLm1hcmdpbkxlZnQgPSAnNXB4J1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdXZWJwYWNrJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSB3cFxuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnV2VicGFjaydcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnVHlwZVNjcmlwdCdcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gdHNcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUubWFyZ2luTGVmdCA9ICcyMHB4J1xuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnVHlwZXNjcmlwdCdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICB3cmFwLmFwcGVuZENoaWxkKHNraWxscylcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh3cmFwKVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=