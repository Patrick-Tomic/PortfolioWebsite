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

footer {
  box-shadow: 10px 10px 10px 15px white;
  background-color: #343434;
}
footer button {
  cursor: pointer;
  border: none;
  background-color: #343434;
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

.formDiv {
  box-shadow: 10px 10px 10px 15px white;
  background-color: #13274F;
  display: flex;
}
.formDiv .contact {
  margin-left: 10vw;
  color: white;
  display: flex;
  flex-direction: column;
  width: 35vw;
}
.formDiv .contact h3 {
  font-size: 23px;
  margin-top: 2vh;
  margin-bottom: 5vh;
}
.formDiv .contact p {
  font-size: 18px;
}
.formDiv form {
  margin-left: 200px;
  border-radius: 10px;
  width: 25vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.formDiv form label {
  color: white;
}
.formDiv form input {
  border: solid 1px black;
  margin: 5px;
  width: 15vw;
}
.formDiv form textarea {
  width: 20vw;
}
.formDiv form .submit {
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  width: 10vw;
  height: 4vh;
  background-color: #FFBF00;
  font-size: 15px;
  font-weight: bold;
}
.formDiv form .submit:hover {
  color: white;
  background-color: #343434;
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
main .sliderWrap {
  overflow: hidden;
}
main .sliderWrap .imgSlider {
  width: 100000vw;
  background-color: #13274F; /* Chrome 10-25, Safari 5.1-6 */
  display: flex;
  transition: transform 1s ease-in-out;
  transform: translateX(0);
}
main .sliderWrap .imgSlider img {
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
    width: 80%;
  }
  .side #active {
    animation: none;
  }
  header {
    z-index: 1;
    margin: 0;
    width: 100%;
  }
  header .bosnianWar {
    display: none;
  }
  header h2 {
    font-size: 15px;
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
    z-index: 0;
    min-height: 251vh;
    flex-direction: column;
    pointer-events: none;
  }
  main .bio .bookList {
    width: 100%;
    border-bottom: #13274F 5px solid;
    border-top: #13274F 5px solid;
  }
  main .bio .bookList button {
    font-size: 20px;
    color: black;
  }
  main .bio .bookList .bookDiv {
    z-index: 0;
    width: 100%;
    display: block;
  }
  main .bio .bookList .bookDiv li {
    pointer-events: none;
    width: 100%;
  }
  main .bio .bookList .bookDiv li .bookDescription {
    z-index: 0;
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
}
@media (max-width: 445px) {
  header {
    z-index: 1;
    margin: 0;
    width: 100%;
  }
  header .bosnianWar {
    display: none;
  }
  header h2 {
    font-size: 15px;
  }
  main .bio {
    z-index: auto;
    padding: 0;
    margin: 0;
    margin-bottom: 50vh;
  }
  main .bio .bookList button {
    font-size: 20px;
    color: black;
  }
  main .bio .bookList .bookDiv .bookDescription {
    z-index: auto;
  }
  main .sliderWrap .imgSlider {
    z-index: auto;
  }
  main .sliderWrap .imgSlider img {
    height: 20vh;
  }
  .side {
    z-index: 10;
  }
  .side .sideBar {
    z-index: 2;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":[" \n$base: #343434;\n*{\n    margin: 0;\n    font-family: 'Courier New', Courier, monospace;\n   \n}\n \nbody{\n    background-color:#343434;\n    width: 100%;\n    height: 100%;\n     \n}\nfooter\n{\n    box-shadow: 10px 10px 10px 15px white;\n    button{\n        cursor: pointer;\n        border: none;\n        background-color: $base;\n    }\n    background-color: $base;\n}\nheader{\n    \n    box-shadow: 0px 5px 5px white;\n   \n    position: sticky;\n    top: 0;\n    background-color: #13274F;\n    z-index: 1;\n    display: flex;\n    justify-content: space-between;\n     svg{\n        margin-left: 10px;\n        margin-top: 5px;\n     }\n    button{\n        background-color: #13274F;\n        border: none;\n        margin-top: 5px;\n        cursor: pointer;\n    }\n    .name{ \n        font-size: 1em;\n            margin-left: 15vw;\n           color: white;\n           font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n        }\n    .name:hover{\n        color: #FFD700;\n    }\n}\n.header{\n    display: flex;\n    padding: 25px;\n    justify-content: space-around;\n   \n    .portrait{\n    \n       margin: 5px;\n        width:auto;\n        height: 321px;\n        border-radius: 10px;\n    }\n    .whoAmI{\n        margin-top: 5vh;\n    \n        font-family: 'Courier New', Courier, monospace;\n        color: white;\n        p{\n            font-size: 20px;\n            line-height: 25px;\n            \n        }\n    }\n}\n.skills{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n     \n    box-shadow: 0px 15px 15px black;\n    h2{\n        margin-left: 43%;\n    }\n\n    .wrap{\n        margin-left: 3vw;\n        background-color: white;\n        margin-bottom: 10px;\n        display: grid;\n        grid-template-columns: repeat(auto-fit,minmax(150px, 1fr));\n         \n    \n        \n    }\n    .card{\n        display: flex;\n        flex-direction: column;\n        img{\n         \n            padding: 2px;\n            \n            \n            background-color: white;\n            width: 3vw;\n            height: 6vh;\n        }\n         \n    }\n}\n.projects{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    .projectCard{\n       \n        padding: 50px;\n        display: flex;\n        \n        .links{\n            img{\n                border-radius: 10px;\n                display: flex;\n                flex-direction: column;\n                width: 20vw;\n    \n            }\n            .btns{\n                button{\n                    cursor: pointer;\n                    margin: 1vh;\n                    background-color: #FFBF00;\n                    border: #FFBF00 1px solid;\n                    width: 9vw;\n                    height:5vh;\n                    border-radius: 10px;\n                    font-size: 15px;\n                    font-weight: bold;\n                }\n                button:hover{\n                    background-color: $base;\n                    color: white;\n                }\n                display: flex;\n                \n                align-items: center;\n            }\n        }\n        .description{\n        h2{\n            color: white;\n            margin-left: 5vw;\n        }\n        p{\n             \n            color: white;\n            font-size: 18px;\n            margin-left: 5vw;\n            margin-top: 2vh;\n        }\n    }\n    }\n}\n \n    .formDiv{\n        box-shadow: 10px 10px 10px 15px white;\n        background-color: #13274F;\n        \n       display: flex;\n       .contact{\n        margin-left: 10vw;\n        color: white;\n        h3{\n            font-size: 23px;\n            margin-top: 2vh;\n            margin-bottom: 5vh;\n        }\n        p{\n            font-size: 18px;\n        }\n        display: flex;\n        flex-direction: column;\n         \n        width:35vw ;\n        \n       }\n        form{\n            margin-left: 200px;\n             \n            border-radius: 10px;\n           label{\n            color: white;\n           }\n            width: 25vw;\n            padding: 10px;\n            display: flex;\n            flex-direction:column;\n            input{\n               \n                border: solid 1px black;\n                margin: 5px;\n                width: 15vw;\n            }\n            textarea{\n                width: 20vw;\n            }\n            .submit{\n                cursor: pointer;\n                border-radius: 5px;\n                margin-top: 10px;\n                width: 10vw;\n                height: 4vh;\n                background-color:#FFBF00;\n                font-size: 15px;\n                font-weight: bold;\n            }\n            .submit:hover{\n                color: white;\n                background-color: #343434;\n                 \n            }\n        }\n    }\n\n.side{\n    display: flex;\n    justify-content: flex-end;\n    \n  \n   \n.sideBar{\n    width: 25vw;\n  \n    height: 100%;\n    background-color: \t#36454F;\n    position: absolute;\n   display: none;\n   z-index: auto;\n   .remove{\n    background-color: \t#36454F;\n    border: none;\n    align-self: flex-end;\n    cursor: pointer;\n}\n.btnDiv{\n    display: flex;\n     \n    .btn{\n        cursor: pointer;\n        margin-top: 15px;\n        align-self: flex-start;\n        border: none;\n        background-color: \t#36454F;\n        font-size: 20px;\n        color: white;\n    }\n    .btn:hover{\n        color:  #FFBF00;\n    }\n}\n \n  \n}\n#active{\n    animation: openSide 1s;\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n   z-index: 2;\n    transform-origin: center right;\n  \n    \n}  \n#deActive{\n    animation: closeSide 1s;\n    transform-origin: center right;\n}\n}\n\nmain{\n   \n#animate{\n    animation: slideDown .5s;\n    transform-origin: top;\n    display: block;\n}\n#reverse{\n    transform-origin: top;\n    animation: slideUp .5s;\n    \n}\n    \n.bio{\n    z-index: 5;\n    height: 900px;\n    z-index: 1;\n    display: flex;\n   button{\n    cursor: pointer;\n   }\n   button:hover{\n    color: white;\n   }\n    \n    .myStory{\n        button{\n            font-size: 1.5em;\n            font-weight: bold;\n            text-align: left;\n             margin-bottom: 2vh;\n            border: none;\n            background-color: #F4BB44;\n        }\n        height: auto;\n        border-bottom: none;\n        border: solid 5px #13274F;\n        border-bottom: none;\n       \n        \n       padding:2vh 3vw;\n       \n        font-size: 18px;\n        color: black;\n        width: 33%;\n        .sumDiv{\n            display: none;\n        }\n\n    }\n    .bookList{\n         \n        height: auto;\n        display: flex;\n        flex-direction: column;\n        width: 33%;\n        padding: 25px;\n        border: 5px solid #13274F;\n        border-right: none;\n        border-bottom: none;\n        border-left: none;\n        button{\n            border: none;\n            font-size: 1.5em;\n            font-weight: bold;\n            text-align: left;\n             margin-bottom: 2vh;\n           width: 10vw;\n            background-color: #F4BB44;\n        }\n        .bookDiv{\n            \n            display: none;\n            .bookDescription{\n                left: 25%;\n                 z-index: 3;\n                border: solid 1px #13274F;\n                display: none;\n                position: absolute;\n                width: 18vw;\n                height: auto;\n                \n                padding: 2vw 2vh;     \n                background-color: #343434;\n                border-radius: 10px;\n            }\n            li{\n             \n                margin-bottom: 2vh;\n                font-size: 18px;\n                font-weight: bold;\n                width: 15vw;\n            }\n            ol{\n            li:hover{\n                color: white;\n                cursor: pointer;\n            }\n            }\n        }\n        \n    }\n   .hobbies{\n    border-top: #13274F 5px solid;\n    \n    button{\n       \n        font-size: 1.5em;\n        font-weight: bold;\n        text-align: left;\n         margin-bottom: 2vh;\n        border: none;\n        background-color: #F4BB44;\n    }\n     \n    height: auto;\n    padding:2vh 3vw;\n    width: 33%;\n     \n    .hobbyDiv{\n         display: none;\n    .list{\n        li{\n            font-size: 18px;\n        p{\n            border: none;\n           \n           width: 15vw;\n        }\n    }\n    }\n}\n   }\n}\n.quote{\n  margin-left: 30vw;\n  margin-top: 2vh;\n}\n.familyAlbum{\n    border-top-left-radius: 15px;\n    border-top-left-radius: 15px;\n    background-color: #13274F;\n    color:white;\n    text-align: center;\n}\n.sliderWrap{\n   overflow: hidden;\n.imgSlider{\n    width: 100000vw;\n     \n    background-color: #13274F; /* Chrome 10-25, Safari 5.1-6 */\n    display: flex;\n    transition: transform 1s ease-in-out;\n    transform: translateX(0);\n    img{\n        margin-left: 5vw;\n        margin-bottom: 5vh;\n        height: 25vh;\n        width: auto;\n        border-radius: 50px;\n    }\n}\n}\n.explain{\n   margin: 5vh 5vw;\n    h2{\n        text-align: center;\n    }\n    p{\n        line-height: 25px;\n    }\n}\n}\n\n@keyframes openSide {\n    from{\n      transform: scaleX(0);\n    }\n     70%{\n       transform: scaleX(1.1);\n     }\n     to{\n        transform: scaleX(1);\n     }\n}\n@keyframes closeSide{\n    from{\n        transform: scaleX(1);\n        display: block;\n    }\n    to{\n        transform: scaleX(0);\n        display: none;\n    }\n}\n@keyframes slideDown{\n    from{\n        transform: scaleY(0);\n      \n    }\n\n    to{\n        transform: scaleX(1);\n        \n    }\n}\n@keyframes slideUp{\n    from{\n        transform: scaleY(1);\n        display: block;\n    }\n\n    to{\n        transform: scaleY(0);\n        display: none;\n    }\n}\n @media (max-width: 1000px){\n    .skills{\n        .wrap{\n            .card{\n         img{\n             width: 6vw;\n             height: 6vh;\n        }\n    }\n}\n}\n.projects{\n    .projectCard{\n        \n        flex-direction: column;\n        .links{\n            margin-left: 8px;\n            img{\n                margin-left: 2vw;\n                width: 30vw;\n            }\n        \n        .btns{\n            button{\n                width: 10vw;\n            }\n        }\n    }\n    .description{\n        \n        margin-right: 5vw;\n    }\n}\n}\nmain{ \n     \n.bio{\n    .myStory{\n        .sumDiv{\n            P{\n                font-size: 15px;\n                font-weight: bold;\n            }\n        }\n    }\n    .bookList{\n        .bookDiv{\n            .bookDescription{\n                width: 45vw;\n            }\n            li{\n                font-size: 15px;\n            }\n        }\n      \n    }\n    .hobbies{\n\n   .hobbyDiv{\n    .list{\n        font-weight: bold;\n        li{\n            font-size: 15px;\n        }\n        p{\n            font-size: 13px;\n        }\n    }\n   }\n}\n}\n.imgSlider{\n    img{\n        height: 15vh;\n    }\n}\n}\n }\n@media (max-width: 700px){\n   \n    header{\n        width: 100%;\n    }\n    .header{\n        width: 100%;\n         \n        padding: 5px;\n        display: flex;\n        flex-wrap: wrap;\n         justify-content: center;\n         align-items: center;\n        .portrait{\n            margin-top: 5vh;\n            height: 160px;\n            \n        }\n        h2{\n            \n            font-size: 24px;\n        }\n        p{\n          \n            font-size: 10px;\n            line-height: 12px;\n        }\n    }\n    .skills{\n      \n       width: 100%;\n        \n    .wrap{\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n        justify-content: space-around;\n\n        .card{\n             \n            \n            img{\n            width: 40px;\n            height: 40px;\n        }\n    }\n}\n        h2{\n            display: none;\n        }\n    }\n    .projects{\n        grid-template-columns: 1fr;\n        \n        .projectCard{\n            flex-direction: column;\n            .links{\n                \n                img{\n                   width: 250px;\n                   margin-left: 15vw;\n                   height: auto;\n                }\n                .btns{\n                    \n                button{\n                    width: 40vw;\n                    height: 40px;\n                    \n                    font-weight: normal;\n                }\n                }\n            }\n            .description{\n                h2{\n                    margin-left: 20vw;\n                    color:  #FFBF00;\n                }\n            }\n             \n           padding: 25px;     \n              \n            \n        }\n        \n      \n            .description{\n                margin-left: 20px;\n                h2{\n                    font-size: 16px;\n                }\n                p{\n                    font-size: 10px;\n                }\n            }\n         \n    }\n    .side{\n        .sideBar{\n            width: 80%;\n        }\n        #active{\n            animation: none;\n        }\n    }\n\n\n//ABOUT ME CSS\nheader{\n    z-index: 1;\n       margin: 0;\n       width: 100%;\n       .bosnianWar{\n           display: none;\n       }\n       h2{\n           font-size: 15px;\n       }\n   }\nmain{\n    @keyframes slideUp{\n        from{\n            transform: scaleY(1);\n            display: block;\n        }\n    \n        to{\n            transform: scaleY(0);\n            \n        }\n    }\n    display: flex;\n    flex-direction: column;\n    \n    \n    .quote{\n       margin-left: 10vw;\n    }\n#animate{\n    animation: none;\n    display: block;\n}\n#reverse{\n    animation: none;\n    display: block;\n}\n.bio{\n    z-index: 0;\n    min-height: 251vh;\n    flex-direction: column;\n    pointer-events: none;\n    .bookList{\n        button{\n            font-size: 20px;\n            color: black;\n        }\n        width: 100%;\n        border-bottom: #13274F 5px solid;\n        border-top:#13274F 5px solid;\n        .bookDiv{\n            z-index: 0;\n            width: 100%;\n           \n            display: block;\n            li{\n                pointer-events: none;\n                width: 100%;\n            .bookDescription{\n                z-index: 0;\n                width: 80%;\n                background-color:#F4BB44;\n                border: none;\n                font-size: 10px;\n                position: relative;\n                display: block;\n              \n            }\n        }\n           \n        }\n    }\n        .hobbies{\n           margin-bottom: 50vh;\n            width: 100%;\n            border-top: #13274F 5px solid;\n            border-bottom:#13274F 5px solid;\n            \n            .hobbyDiv{\n                display: block;\n                 \n                .list{\n                    li{\n                        font-weight: bold;\n                        margin-bottom: 5vh;\n                        width: 100%;\n                    p{\n                        width: 80%;\n                    }\n                }\n            }\n\n            }\n        }\n        .myStory{\n            padding: 50px;\n            button{\n                border: none;\n            }\n            width: 100%;\n            border: none;\n            .sumDiv{\n                display: block;\n            }\n        }\n      \n    \n}\n.imgSlider{\n    img{\n        height: 25vh;\n         \n    }\n}\n}\n\n\n}\n@media (max-width:445px){\n     \n    header{\n     z-index: 1;\n        margin: 0;\n        width: 100%;\n        .bosnianWar{\n            display: none;\n        }\n        h2{\n            font-size: 15px;\n        }\n    }\n    main{\n       \n        .bio{\n            .bookList{\n                button{\n                    font-size: 20px;\n                    color: black;\n                }\n                .bookDiv{\n                    .bookDescription{\n                        z-index: auto;\n                    }\n                }\n            }\n            z-index: auto;\n             padding: 0;\n            margin: 0;\n            margin-bottom: 50vh;\n           \n        }\n        .sliderWrap{\n    .imgSlider{\n        z-index: auto;\n        img{\n            height: 20vh;\n        }\n    }\n}\n}\n.side{\n    z-index: 10;\n.sideBar{\n   z-index: 2;\n}\n}\n    }\n\n"],"sourceRoot":""}]);
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
 const formDiv = document.createElement('div')
 formDiv.classList.add('formDiv')
const form = document.createElement('form')
form.action = "processForm.php"
form.method = "post"
for(let i=0; i<4;i++){
    const input = document.createElement('input')
    const label = document.createElement('label')
    input.required = true
    switch(i){
        case 0:
            label.for = 'name'
            label.innerHTML = 'Full Name:'
            input.type ='text'
            input.name = 'name'
            input.placeholder = 'Johnathan Ramsey Doe'
            form.appendChild(label)
            form.appendChild(input)
            break
        case 1:
            label.for = 'email'
            label.innerHTML = 'Email Address:'
            input.placeholder = 'johnRdoe@hotmail.com'
           
            input.type ='email'
            input.name = 'email'
            form.appendChild(label)
            form.appendChild(input)
            break
        case 2:
            label.for = 'phone'
            label.innerHTML = 'Phone Number:'
            input.type ='tele'
            input.placeholder= '***-***-****'
            input.name = 'phone'
            form.appendChild(label)
            form.appendChild(input)
            break
        case 3:
            label.for = 'description'
            label.innerHTML = 'Give context to project'
            const textArea = document.createElement('textarea')
            textArea.name = 'description'
            textArea.cols = '10'
            textArea.rows = '5'
            form.appendChild(label)
            form.appendChild(textArea)
            break
     } 
    }
    const input = document.createElement('input')
    input.type = 'submit'
    input.value = 'submit'
    input.classList.add('submit')
    form.appendChild(input)
    const main = document.querySelector('main')
    const contactMe = document.createElement('div')
    contactMe.classList.add('contact')
    const h3 = document.createElement('h3')
    h3.innerHTML = 'How to get in touch'
    contactMe.appendChild(h3)
    const p = document.createElement('p')
    p.innerHTML = 'I am willing to work with anyone on any project or idea that they have in mind! fill out this form and I will message you as soon as I am available.<br> Have a great day and may we all live long and prosper<br><br> -Patrick '
    contactMe.appendChild(p)
    formDiv.appendChild(contactMe)
    formDiv.appendChild(form)
    main.appendChild(formDiv)

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
    const wrap = document.createElement('div')
    wrap.classList.add('sliderWrap')
    wrap.appendChild(slider)
    main.appendChild(wrap)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsWUFBWSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsUUFBUSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLHNCQUFzQixVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVB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Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRGtDO0FBQ0E7QUFDRjtBQUNFO0FBQ0g7QUFDRztBQUNGO0FBQ0c7QUFDTDtBQUNmO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQ0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBRztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlDQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBRztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQ0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4Q0FBRTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUNBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2Jvb2tzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvYnVpbGRNYWluLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvaG9iYmllcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2ltZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9za2lsbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmZvb3RlciB7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDE1cHggd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG59XG5mb290ZXIgYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG59XG5cbmhlYWRlciB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IHdoaXRlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmhlYWRlciBzdmcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuaGVhZGVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgLm5hbWUge1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luLWxlZnQ6IDE1dnc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbmhlYWRlciAubmFtZTpob3ZlciB7XG4gIGNvbG9yOiAjRkZENzAwO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uaGVhZGVyIC5wb3J0cmFpdCB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAzMjFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5oZWFkZXIgLndob0FtSSB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaGVhZGVyIC53aG9BbUkgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5za2lsbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMTVweCBibGFjaztcbn1cbi5za2lsbHMgaDIge1xuICBtYXJnaW4tbGVmdDogNDMlO1xufVxuLnNraWxscyAud3JhcCB7XG4gIG1hcmdpbi1sZWZ0OiAzdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbn1cbi5za2lsbHMgLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNraWxscyAuY2FyZCBpbWcge1xuICBwYWRkaW5nOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogM3Z3O1xuICBoZWlnaHQ6IDZ2aDtcbn1cblxuLnByb2plY3RzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQge1xuICBwYWRkaW5nOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDIwdnc7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCRjAwO1xuICBib3JkZXI6ICNGRkJGMDAgMXB4IHNvbGlkO1xuICB3aWR0aDogOXZ3O1xuICBoZWlnaHQ6IDV2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIC5idG5zIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmRlc2NyaXB0aW9uIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogNXZ3O1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAuZGVzY3JpcHRpb24gcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBtYXJnaW4tdG9wOiAydmg7XG59XG5cbi5mb3JtRGl2IHtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMTVweCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mb3JtRGl2IC5jb250YWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDM1dnc7XG59XG4uZm9ybURpdiAuY29udGFjdCBoMyB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG59XG4uZm9ybURpdiAuY29udGFjdCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmZvcm1EaXYgZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDI1dnc7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZm9ybURpdiBmb3JtIGxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZvcm1EaXYgZm9ybSBpbnB1dCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDE1dnc7XG59XG4uZm9ybURpdiBmb3JtIHRleHRhcmVhIHtcbiAgd2lkdGg6IDIwdnc7XG59XG4uZm9ybURpdiBmb3JtIC5zdWJtaXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwdnc7XG4gIGhlaWdodDogNHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCRjAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvcm1EaXYgZm9ybSAuc3VibWl0OmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xufVxuXG4uc2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uc2lkZSAuc2lkZUJhciB7XG4gIHdpZHRoOiAyNXZ3O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjQ1NEY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogYXV0bztcbn1cbi5zaWRlIC5zaWRlQmFyIC5yZW1vdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0NTRGO1xuICBib3JkZXI6IG5vbmU7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lkZSAuc2lkZUJhciAuYnRuRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zaWRlIC5zaWRlQmFyIC5idG5EaXYgLmJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0NTRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zaWRlIC5zaWRlQmFyIC5idG5EaXYgLmJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjRkZCRjAwO1xufVxuLnNpZGUgI2FjdGl2ZSB7XG4gIGFuaW1hdGlvbjogb3BlblNpZGUgMXM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xufVxuLnNpZGUgI2RlQWN0aXZlIHtcbiAgYW5pbWF0aW9uOiBjbG9zZVNpZGUgMXM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcbn1cblxubWFpbiAjYW5pbWF0ZSB7XG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDAuNXM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5tYWluICNyZXZlcnNlIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICBhbmltYXRpb246IHNsaWRlVXAgMC41cztcbn1cbm1haW4gLmJpbyB7XG4gIHotaW5kZXg6IDU7XG4gIGhlaWdodDogOTAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5tYWluIC5iaW8gYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWFpbiAuYmlvIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbm1haW4gLmJpbyAubXlTdG9yeSB7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyOiBzb2xpZCA1cHggIzEzMjc0RjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgcGFkZGluZzogMnZoIDN2dztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAzMyU7XG59XG5tYWluIC5iaW8gLm15U3RvcnkgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xufVxubWFpbiAuYmlvIC5teVN0b3J5IC5zdW1EaXYge1xuICBkaXNwbGF5OiBub25lO1xufVxubWFpbiAuYmlvIC5ib29rTGlzdCB7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDMzJTtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyOiA1cHggc29saWQgIzEzMjc0RjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbm1haW4gLmJpbyAuYm9va0xpc3QgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICB3aWR0aDogMTB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcbn1cbm1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYge1xuICBkaXNwbGF5OiBub25lO1xufVxubWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiAuYm9va0Rlc2NyaXB0aW9uIHtcbiAgbGVmdDogMjUlO1xuICB6LWluZGV4OiAzO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMTMyNzRGO1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOHZ3O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDJ2dyAydmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5tYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTV2dztcbn1cbm1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYgb2wgbGk6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm1haW4gLmJpbyAuaG9iYmllcyB7XG4gIGJvcmRlci10b3A6ICMxMzI3NEYgNXB4IHNvbGlkO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDJ2aCAzdnc7XG4gIHdpZHRoOiAzMyU7XG59XG5tYWluIC5iaW8gLmhvYmJpZXMgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xufVxubWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5tYWluIC5iaW8gLmhvYmJpZXMgLmhvYmJ5RGl2IC5saXN0IGxpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxubWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCBsaSBwIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTV2dztcbn1cbm1haW4gLnF1b3RlIHtcbiAgbWFyZ2luLWxlZnQ6IDMwdnc7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn1cbm1haW4gLmZhbWlseUFsYnVtIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYWluIC5zbGlkZXJXcmFwIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbm1haW4gLnNsaWRlcldyYXAgLmltZ1NsaWRlciB7XG4gIHdpZHRoOiAxMDAwMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5tYWluIC5zbGlkZXJXcmFwIC5pbWdTbGlkZXIgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICBoZWlnaHQ6IDI1dmg7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxubWFpbiAuZXhwbGFpbiB7XG4gIG1hcmdpbjogNXZoIDV2dztcbn1cbm1haW4gLmV4cGxhaW4gaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYWluIC5leHBsYWluIHAge1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuQGtleWZyYW1lcyBvcGVuU2lkZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4xKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY2xvc2VTaWRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuc2tpbGxzIC53cmFwIC5jYXJkIGltZyB7XG4gICAgd2lkdGg6IDZ2dztcbiAgICBoZWlnaHQ6IDZ2aDtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgICB3aWR0aDogMzB2dztcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyBidXR0b24ge1xuICAgIHdpZHRoOiAxMHZ3O1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcbiAgfVxuICBtYWluIC5iaW8gLm15U3RvcnkgLnN1bURpdiBQIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiAuYm9va0Rlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogNDV2dztcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IGxpIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCBsaSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIG1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYgLmxpc3QgcCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIG1haW4gLmltZ1NsaWRlciBpbWcge1xuICAgIGhlaWdodDogMTV2aDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmhlYWRlciAucG9ydHJhaXQge1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICB9XG4gIC5oZWFkZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuaGVhZGVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgfVxuICAuc2tpbGxzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2tpbGxzIC53cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgLnNraWxscyAud3JhcCAuY2FyZCBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuICAuc2tpbGxzIGgyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wcm9qZWN0cyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIGltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyBidXR0b24ge1xuICAgIHdpZHRoOiA0MHZ3O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmRlc2NyaXB0aW9uIGgyIHtcbiAgICBtYXJnaW4tbGVmdDogMjB2dztcbiAgICBjb2xvcjogI0ZGQkYwMDtcbiAgfVxuICAucHJvamVjdHMgLmRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICAucHJvamVjdHMgLmRlc2NyaXB0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnByb2plY3RzIC5kZXNjcmlwdGlvbiBwIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLnNpZGUgLnNpZGVCYXIge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLnNpZGUgI2FjdGl2ZSB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG4gIGhlYWRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgaGVhZGVyIC5ib3NuaWFuV2FyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIG1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBAa2V5ZnJhbWVzIHNsaWRlVXAge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgfVxuICB9XG4gIG1haW4gLnF1b3RlIHtcbiAgICBtYXJnaW4tbGVmdDogMTB2dztcbiAgfVxuICBtYWluICNhbmltYXRlIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbWFpbiAjcmV2ZXJzZSB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIG1haW4gLmJpbyB7XG4gICAgei1pbmRleDogMDtcbiAgICBtaW4taGVpZ2h0OiAyNTF2aDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIG1haW4gLmJpbyAuYm9va0xpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206ICMxMzI3NEYgNXB4IHNvbGlkO1xuICAgIGJvcmRlci10b3A6ICMxMzI3NEYgNXB4IHNvbGlkO1xuICB9XG4gIG1haW4gLmJpbyAuYm9va0xpc3QgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIG1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYge1xuICAgIHotaW5kZXg6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiBsaSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiBsaSAuYm9va0Rlc2NyaXB0aW9uIHtcbiAgICB6LWluZGV4OiAwO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBtYWluIC5iaW8gLmhvYmJpZXMge1xuICAgIG1hcmdpbi1ib3R0b206IDUwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogIzEzMjc0RiA1cHggc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbTogIzEzMjc0RiA1cHggc29saWQ7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCBsaSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIG1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYgLmxpc3QgbGkgcCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICBtYWluIC5iaW8gLm15U3Rvcnkge1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIG1haW4gLmJpbyAubXlTdG9yeSBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBtYWluIC5iaW8gLm15U3RvcnkgLnN1bURpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbWFpbiAuaW1nU2xpZGVyIGltZyB7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDQ1cHgpIHtcbiAgaGVhZGVyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBoZWFkZXIgLmJvc25pYW5XYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgbWFpbiAuYmlvIHtcbiAgICB6LWluZGV4OiBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwdmg7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiAuYm9va0Rlc2NyaXB0aW9uIHtcbiAgICB6LWluZGV4OiBhdXRvO1xuICB9XG4gIG1haW4gLnNsaWRlcldyYXAgLmltZ1NsaWRlciB7XG4gICAgei1pbmRleDogYXV0bztcbiAgfVxuICBtYWluIC5zbGlkZXJXcmFwIC5pbWdTbGlkZXIgaW1nIHtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gIH1cbiAgLnNpZGUge1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gIC5zaWRlIC5zaWRlQmFyIHtcbiAgICB6LWluZGV4OiAyO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUu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SWQ7RUFpSlU7SUFDSSxjQUFBO0VBL0lkO0VBc0pFO0lBQ0ksWUFBQTtFQXBKTjtBQUNGO0FBMkpBO0VBRUk7SUFDQyxVQUFBO0lBQ0csU0FBQTtJQUNBLFdBQUE7RUExSk47RUEySk07SUFDSSxhQUFBO0VBekpWO0VBMkpNO0lBQ0ksZUFBQTtFQXpKVjtFQThKTTtJQVlJLGFBQUE7SUFDQyxVQUFBO0lBQ0QsU0FBQTtJQUNBLG1CQUFBO0VBdktWO0VBMEpjO0lBQ0ksZUFBQTtJQUNBLFlBQUE7RUF4SmxCO0VBMkprQjtJQUNJLGFBQUE7RUF6SnRCO0VBb0tFO0lBQ0ksYUFBQTtFQWxLTjtFQW1LTTtJQUNJLFlBQUE7RUFqS1Y7RUFzS0Y7SUFDSSxXQUFBO0VBcEtGO0VBcUtGO0lBQ0csVUFBQTtFQW5LRDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiBcXG4kYmFzZTogIzM0MzQzNDtcXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgXFxufVxcbiBcXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNDM0MzQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICBcXG59XFxuZm9vdGVyXFxue1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAxNXB4IHdoaXRlO1xcbiAgICBidXR0b257XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZTtcXG4gICAgfVxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZTtcXG59XFxuaGVhZGVye1xcbiAgICBcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggd2hpdGU7XFxuICAgXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgc3Zne1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgICB9XFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLm5hbWV7IFxcbiAgICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1dnc7XFxuICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgICAgICB9XFxuICAgIC5uYW1lOmhvdmVye1xcbiAgICAgICAgY29sb3I6ICNGRkQ3MDA7XFxuICAgIH1cXG59XFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgXFxuICAgIC5wb3J0cmFpdHtcXG4gICAgXFxuICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgICAgd2lkdGg6YXV0bztcXG4gICAgICAgIGhlaWdodDogMzIxcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB9XFxuICAgIC53aG9BbUl7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgIFxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbi5za2lsbHN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgXFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDE1cHggYmxhY2s7XFxuICAgIGgye1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQzJTtcXG4gICAgfVxcblxcbiAgICAud3JhcHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzdnc7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gICAgICAgICBcXG4gICAgXFxuICAgICAgICBcXG4gICAgfVxcbiAgICAuY2FyZHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgaW1ne1xcbiAgICAgICAgIFxcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICB3aWR0aDogM3Z3O1xcbiAgICAgICAgICAgIGhlaWdodDogNnZoO1xcbiAgICAgICAgfVxcbiAgICAgICAgIFxcbiAgICB9XFxufVxcbi5wcm9qZWN0c3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgLnByb2plY3RDYXJke1xcbiAgICAgICBcXG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgXFxuICAgICAgICAubGlua3N7XFxuICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMjB2dztcXG4gICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5idG5ze1xcbiAgICAgICAgICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDF2aDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkJGMDA7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICNGRkJGMDAgMXB4IHNvbGlkO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDl2dztcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo1dmg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVye1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2U7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmRlc2NyaXB0aW9ue1xcbiAgICAgICAgaDJ7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1dnc7XFxuICAgICAgICB9XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgICBcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1dnc7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIH1cXG59XFxuIFxcbiAgICAuZm9ybURpdntcXG4gICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDE1cHggd2hpdGU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xcbiAgICAgICAgXFxuICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgIC5jb250YWN0e1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwdnc7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBoM3tcXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcXG4gICAgICAgIH1cXG4gICAgICAgIHB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgXFxuICAgICAgICB3aWR0aDozNXZ3IDtcXG4gICAgICAgIFxcbiAgICAgICB9XFxuICAgICAgICBmb3Jte1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgIGxhYmVse1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgIH1cXG4gICAgICAgICAgICB3aWR0aDogMjV2dztcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICAgICAgICAgIGlucHV0e1xcbiAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB0ZXh0YXJlYXtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwdnc7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5zdWJtaXR7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0dmg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0ZGQkYwMDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnN1Ym1pdDpob3ZlcntcXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xcbiAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuLnNpZGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIFxcbiAgXFxuICAgXFxuLnNpZGVCYXJ7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXFx0IzM2NDU0RjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIGRpc3BsYXk6IG5vbmU7XFxuICAgei1pbmRleDogYXV0bztcXG4gICAucmVtb3Zle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcXHQjMzY0NTRGO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5idG5EaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBcXG4gICAgLmJ0bntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXFx0IzM2NDU0RjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbiAgICAuYnRuOmhvdmVye1xcbiAgICAgICAgY29sb3I6ICAjRkZCRjAwO1xcbiAgICB9XFxufVxcbiBcXG4gIFxcbn1cXG4jYWN0aXZle1xcbiAgICBhbmltYXRpb246IG9wZW5TaWRlIDFzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgei1pbmRleDogMjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xcbiAgXFxuICAgIFxcbn0gIFxcbiNkZUFjdGl2ZXtcXG4gICAgYW5pbWF0aW9uOiBjbG9zZVNpZGUgMXM7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcXG59XFxufVxcblxcbm1haW57XFxuICAgXFxuI2FuaW1hdGV7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIC41cztcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuI3JldmVyc2V7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwIC41cztcXG4gICAgXFxufVxcbiAgICBcXG4uYmlve1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBoZWlnaHQ6IDkwMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgIGJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgIH1cXG4gICBidXR0b246aG92ZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICB9XFxuICAgIFxcbiAgICAubXlTdG9yeXtcXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcXG4gICAgICAgIH1cXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDVweCAjMTMyNzRGO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAgXFxuICAgICAgICBcXG4gICAgICAgcGFkZGluZzoydmggM3Z3O1xcbiAgICAgICBcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIHdpZHRoOiAzMyU7XFxuICAgICAgICAuc3VtRGl2e1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgIH1cXG4gICAgLmJvb2tMaXN0e1xcbiAgICAgICAgIFxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMzMlO1xcbiAgICAgICAgcGFkZGluZzogMjVweDtcXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMxMzI3NEY7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbiAgICAgICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5ib29rRGl2e1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgLmJvb2tEZXNjcmlwdGlvbntcXG4gICAgICAgICAgICAgICAgbGVmdDogMjUlO1xcbiAgICAgICAgICAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzEzMjc0RjtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTh2dztcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnZ3IDJ2aDsgICAgIFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1dnc7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIG9se1xcbiAgICAgICAgICAgIGxpOmhvdmVye1xcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgIH1cXG4gICAuaG9iYmllc3tcXG4gICAgYm9yZGVyLXRvcDogIzEzMjc0RiA1cHggc29saWQ7XFxuICAgIFxcbiAgICBidXR0b257XFxuICAgICAgIFxcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xcbiAgICB9XFxuICAgICBcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOjJ2aCAzdnc7XFxuICAgIHdpZHRoOiAzMyU7XFxuICAgICBcXG4gICAgLmhvYmJ5RGl2e1xcbiAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIC5saXN0e1xcbiAgICAgICAgbGl7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICBcXG4gICAgICAgICAgIHdpZHRoOiAxNXZ3O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIH1cXG59XFxuICAgfVxcbn1cXG4ucXVvdGV7XFxuICBtYXJnaW4tbGVmdDogMzB2dztcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG59XFxuLmZhbWlseUFsYnVte1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc2xpZGVyV3JhcHtcXG4gICBvdmVyZmxvdzogaGlkZGVuO1xcbi5pbWdTbGlkZXJ7XFxuICAgIHdpZHRoOiAxMDAwMDB2dztcXG4gICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgaW1ne1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcXG4gICAgICAgIGhlaWdodDogMjV2aDtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgfVxcbn1cXG59XFxuLmV4cGxhaW57XFxuICAgbWFyZ2luOiA1dmggNXZ3O1xcbiAgICBoMntcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICBwe1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIH1cXG59XFxufVxcblxcbkBrZXlmcmFtZXMgb3BlblNpZGUge1xcbiAgICBmcm9te1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB9XFxuICAgICA3MCV7XFxuICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMSk7XFxuICAgICB9XFxuICAgICB0b3tcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGNsb3NlU2lkZXtcXG4gICAgZnJvbXtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgdG97XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBzbGlkZURvd257XFxuICAgIGZyb217XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgICBcXG4gICAgfVxcblxcbiAgICB0b3tcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICAgICAgXFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBzbGlkZVVwe1xcbiAgICBmcm9te1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICB0b3tcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG4gQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCl7XFxuICAgIC5za2lsbHN7XFxuICAgICAgICAud3JhcHtcXG4gICAgICAgICAgICAuY2FyZHtcXG4gICAgICAgICBpbWd7XFxuICAgICAgICAgICAgIHdpZHRoOiA2dnc7XFxuICAgICAgICAgICAgIGhlaWdodDogNnZoO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbn1cXG4ucHJvamVjdHN7XFxuICAgIC5wcm9qZWN0Q2FyZHtcXG4gICAgICAgIFxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIC5saW5rc3tcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgICAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJ2dztcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwdnc7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAuYnRuc3tcXG4gICAgICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuZGVzY3JpcHRpb257XFxuICAgICAgICBcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXZ3O1xcbiAgICB9XFxufVxcbn1cXG5tYWlueyBcXG4gICAgIFxcbi5iaW97XFxuICAgIC5teVN0b3J5e1xcbiAgICAgICAgLnN1bURpdntcXG4gICAgICAgICAgICBQe1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuYm9va0xpc3R7XFxuICAgICAgICAuYm9va0RpdntcXG4gICAgICAgICAgICAuYm9va0Rlc2NyaXB0aW9ue1xcbiAgICAgICAgICAgICAgICB3aWR0aDogNDV2dztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgbGl7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgXFxuICAgIH1cXG4gICAgLmhvYmJpZXN7XFxuXFxuICAgLmhvYmJ5RGl2e1xcbiAgICAubGlzdHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgbGl7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICB9XFxufVxcbn1cXG4uaW1nU2xpZGVye1xcbiAgICBpbWd7XFxuICAgICAgICBoZWlnaHQ6IDE1dmg7XFxuICAgIH1cXG59XFxufVxcbiB9XFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICBcXG4gICAgaGVhZGVye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgLmhlYWRlcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgIFxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLnBvcnRyYWl0e1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgaDJ7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5za2lsbHN7XFxuICAgICAgXFxuICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgXFxuICAgIC53cmFwe1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgICAgICAgLmNhcmR7XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuICAgICAgICBoMntcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5wcm9qZWN0c3tcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgXFxuICAgICAgICAucHJvamVjdENhcmR7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAubGlua3N7XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1dnc7XFxuICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuYnRuc3tcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDB2dztcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgICAgICAgICAgaDJ7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjB2dztcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgI0ZGQkYwMDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICBwYWRkaW5nOiAyNXB4OyAgICAgXFxuICAgICAgICAgICAgICBcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgIFxcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgICAgICAgICAgICAgIGgye1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIHB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgXFxuICAgIH1cXG4gICAgLnNpZGV7XFxuICAgICAgICAuc2lkZUJhcntcXG4gICAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgfVxcbiAgICAgICAgI2FjdGl2ZXtcXG4gICAgICAgICAgICBhbmltYXRpb246IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG4vL0FCT1VUIE1FIENTU1xcbmhlYWRlcntcXG4gICAgei1pbmRleDogMTtcXG4gICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgLmJvc25pYW5XYXJ7XFxuICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICB9XFxuICAgICAgIGgye1xcbiAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICB9XFxuICAgfVxcbm1haW57XFxuICAgIEBrZXlmcmFtZXMgc2xpZGVVcHtcXG4gICAgICAgIGZyb217XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgdG97XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIFxcbiAgICAucXVvdGV7XFxuICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcbiAgICB9XFxuI2FuaW1hdGV7XFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNyZXZlcnNle1xcbiAgICBhbmltYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYmlve1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBtaW4taGVpZ2h0OiAyNTF2aDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIC5ib29rTGlzdHtcXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgfVxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAjMTMyNzRGIDVweCBzb2xpZDtcXG4gICAgICAgIGJvcmRlci10b3A6IzEzMjc0RiA1cHggc29saWQ7XFxuICAgICAgICAuYm9va0RpdntcXG4gICAgICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgbGl7XFxuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAuYm9va0Rlc2NyaXB0aW9ue1xcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGNEJCNDQ7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgICAgIC5ob2JiaWVze1xcbiAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTB2aDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBib3JkZXItdG9wOiAjMTMyNzRGIDVweCBzb2xpZDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiMxMzI3NEYgNXB4IHNvbGlkO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC5ob2JieURpdntcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgLmxpc3R7XFxuICAgICAgICAgICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICBwe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLm15U3Rvcnl7XFxuICAgICAgICAgICAgcGFkZGluZzogNTBweDtcXG4gICAgICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIC5zdW1EaXZ7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICBcXG4gICAgXFxufVxcbi5pbWdTbGlkZXJ7XFxuICAgIGltZ3tcXG4gICAgICAgIGhlaWdodDogMjV2aDtcXG4gICAgICAgICBcXG4gICAgfVxcbn1cXG59XFxuXFxuXFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOjQ0NXB4KXtcXG4gICAgIFxcbiAgICBoZWFkZXJ7XFxuICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAuYm9zbmlhbldhcntcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgaDJ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIG1haW57XFxuICAgICAgIFxcbiAgICAgICAgLmJpb3tcXG4gICAgICAgICAgICAuYm9va0xpc3R7XFxuICAgICAgICAgICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuYm9va0RpdntcXG4gICAgICAgICAgICAgICAgICAgIC5ib29rRGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB6LWluZGV4OiBhdXRvO1xcbiAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHZoO1xcbiAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICAuc2xpZGVyV3JhcHtcXG4gICAgLmltZ1NsaWRlcntcXG4gICAgICAgIHotaW5kZXg6IGF1dG87XFxuICAgICAgICBpbWd7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHZoO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbn1cXG4uc2lkZXtcXG4gICAgei1pbmRleDogMTA7XFxuLnNpZGVCYXJ7XFxuICAgei1pbmRleDogMjtcXG59XFxufVxcbiAgICB9XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYnVpbGRCb29rcyBmcm9tIFwiLi9ib29rc1wiXG5pbXBvcnQgYnVpbGRIb2JiaWVzIGZyb20gXCIuL2hvYmJpZXNcIlxuaW1wb3J0IGJ1aWxkSW1hZ2VTbGlkZXIgZnJvbSBcIi4vaW1nXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQWJvdXRNZSgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBjb25zdCBiaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRpdGxlLmlubmVySFRNTCA9IGBUaGVyZSBpcyBzb21lIGdvb2QgaW4gdGhpcyB3b3JsZDxicj4gYW5kIGl0J3Mgd29ydGggZmlnaHRpbmcgZm9yLiAgICAtSi5SLlIgVG9sa2llbiBgXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncXVvdGUnKVxuICAgIGJpby5jbGFzc0xpc3QuYWRkKCdiaW8nKVxuICAgIGNvbnN0IG15U3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG15U3RvcnkuY2xhc3NMaXN0LmFkZCgnbXlTdG9yeScpXG4gICAgY29uc3QgbXlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIG15SGVhZGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICBpZihzdW1tQ29udGFpbmVyLmlkID09ICdhbmltYXRlJyl7XG4gICAgICAgICAgICAgICAgICAgc3VtbUNvbnRhaW5lci5pZCA9ICdyZXZlcnNlJ1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzdW1tQ29udGFpbmVyLmlkID0gJ2FuaW1hdGUnXG4gICAgICAgICAgICB9KVxuICAgIG15SGVhZGluZy5pbm5lckhUTUwgPSAnTXkgU3RvcnknXG4gICAgICAgIGNvbnN0IGJvb2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBzdW1tQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc3VtbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdW1EaXYnKVxuICAgICAgICBjb25zdCBob2JieUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGhvYmJ5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvYmJ5RGl2JylcbiAgICBjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgc3VtbWFyeS5pbm5lckhUTUwgPSAnTXkgZmFtaWx5IGlzIG9yaWdpbmFsbHkgZnJvbSBCb3NuaWEgYW5kIHRoZSBvbmx5IGZhbWlseSB0aGF0IGxpdmVzIGluIHRoZSBzdGF0ZXMgaXMgbXkgbW90aGVyIGFuZCBzaXN0ZXIuIFdoZW4gSSB3YXMgaW4gaGlnaHNjaG9vbCBJIHdhcyB1bnN1cmUgd2hhdCBJIHdhbnRlZCB0byBkbyB3aXRoIG15IGxpZmUgdW50aWwgc2VuaW9yIHllYXIgd2hlbiBJIGdvdCBpbnRvIEFQQ1MgYW5kIGxlYXJuZWQgSmF2YS4gSSBxdWlja2x5IGxlYXJuZWQgaXQgd2FzIHdoYXQgSSB3YW50ZWQgdG8gZG8gZm9yIG1ham9yaXR5IG9mIG15IGxpZmUuIEkgYWx3YXlzIGxvdmVkIGJ1aWxkaW5nIHNpbmNlIEkgd2FzIGEga2lkLCBhbmQgY29kaW5nIGtlZXBzIG15IGlubmVyIGNoaWxkIGFsaXZlLiBJIHRyeSB0byBrZWVwIG15c2VsZiBhcyBidXN5IGFzIHBvc3NpYmxlIGRheSBpbiBhbmQgZGF5IG91dCwgYW5kIHRyeSB0byB0aGluayBvZiBwcm9ncmFtbWluZyBhcyBteSBudW1iZXIgb25lIHByaW9yaXR5LiBIb3BpbmcgdG8gZXZlbnR1YWxseSBzdGFydCBteSBvd24gY29tcGFueSB0aGF0IGNvdWxkIGJyYW5jaCBvdXQgaW50byB2YXJpZXR5IG9mIHdvcmsuIEkgYW0gYnVpbGRpbmcgZ3JlYXQgY29ubmVjdGlvbnMgd2l0aCBwZW9wbGUgYW5kIHRyeWluZyB0byBoZWxwIGFzIG1hbnkgYXMgSSBjYW4uIEkgaGF2ZSBhIGJlYXV0aWZ1bCBnaXJsZnJpZW5kIHRoYXQgSSBsb3ZlIHdpdGggbXkgd2hvbGUgaGVhcnQgYW5kIHdlIHNoYXJlIGEgdG93bmhvbWUgd2l0aCB0d28gZG9ncyBuYW1lZCBEZWxpbGFoIGFuZCBOZW1vIGFuZCBteSBicm90aGVyIERlYW4uJ1xuICAgIGNvbnN0IGJvb2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBib29rTGlzdC5jbGFzc0xpc3QuYWRkKCdib29rTGlzdCcpXG4gICAgY29uc3QgYm9va1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBib29rVGl0bGUuaW5uZXJIVE1MID0gJ015IEJvb2tzJ1xuICAgICAgICAgICAgICAgIGJvb2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoYm9va0NvbnRhaW5lci5pZCA9PSAnYW5pbWF0ZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5pZCA9ICdyZXZlcnNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGJvb2tDb250YWluZXIuaWQgPSAnYW5pbWF0ZSdcbiAgICAgICAgICAgICAgICB9KVxuICAgIGJvb2tMaXN0LmFwcGVuZENoaWxkKGJvb2tUaXRsZSlcbiAgICBjb25zdCBvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJylcbiAgICBib29rQ29udGFpbmVyLmFwcGVuZENoaWxkKG9sKVxuICAgIGJvb2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9va0RpdicpXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFJlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgICAgICAgICAgY3VycmVudFJlYWQuaW5uZXJIVE1MID0gJ0N1cnJlbnRseSBSZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Qm9va3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdpcmxEcmFnb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICAgICAgICAgIGdpcmxEcmFnb24uaW5uZXJIVE1MID0gXCJHaXJsIFdpdGggdGhlIERyYWdvbiBUYXR0b29cIlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Qm9va3MuYXBwZW5kQ2hpbGQoZ2lybERyYWdvbilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXRvbWljSGFiaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgICAgICAgICBhdG9taWNIYWJpdHMuaW5uZXJIVE1MID0gJ0F0b21pYyBIYWJpdHMnXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCb29rcy5hcHBlbmRDaGlsZChhdG9taWNIYWJpdHMpXG4gICAgICAgICAgICAgICAgICAgIGJvb2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFJlYWQpXG4gICAgICAgICAgICAgICAgICAgIGJvb2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEJvb2tzKVxuICAgICAgICAgICAgICAgICAgICBib29rTGlzdC5hcHBlbmRDaGlsZChib29rQ29udGFpbmVyKVxuICAgICAgICAgICAgY29uc3QgaG9iYnlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIGhvYmJ5SGVhZGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICBpZihob2JieUNvbnRhaW5lci5pZCA9PSAnYW5pbWF0ZScpe1xuICAgICAgICAgICAgICAgICAgICBob2JieUNvbnRhaW5lci5pZCA9ICdyZXZlcnNlJ1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBob2JieUNvbnRhaW5lci5pZCA9ICdhbmltYXRlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGhvYmJ5SGVhZGluZy5pbm5lckhUTUwgPSAnTXkgSG9iYmllcydcbiAgICAgICAgICAgIGNvbnN0IGhvYmJ5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBob2JieUxpc3QuY2xhc3NMaXN0LmFkZCgnaG9iYmllcycpXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0JylcbiAgICAgICAgICAgIGhvYmJ5TGlzdC5hcHBlbmRDaGlsZChob2JieUhlYWRpbmcpXG4gICAgICAgICAgICBob2JieUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KVxuICAgICAgICAgICAgaG9iYnlMaXN0LmFwcGVuZENoaWxkKGhvYmJ5Q29udGFpbmVyKVxuICAgIG15U3RvcnkuYXBwZW5kQ2hpbGQobXlIZWFkaW5nKVxuICAgIHN1bW1Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VtbWFyeSlcbiAgICBteVN0b3J5LmFwcGVuZENoaWxkKHN1bW1Db250YWluZXIpXG4gICAgYmlvLmFwcGVuZENoaWxkKGJvb2tMaXN0KVxuICAgIGJpby5hcHBlbmRDaGlsZChteVN0b3J5KVxuICAgIGJpby5hcHBlbmRDaGlsZChob2JieUxpc3QpXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBtYWluLmFwcGVuZENoaWxkKGJpbylcbiAgICBidWlsZEJvb2tzKCdBdG9taWMgSGFiaXRzJywgJ1dyaXR0ZW4gYnkgSmFtZXMgQ2xlYXI8YnI+PGJyPiB3YXMgYSBiZW5lZmljYWwgYm9vayBmb3IgbWUgdGhhdCB0YXVnaHQgbWUgaG93IHRvIGJ1aWxkIHBvc2l0aXZlIGhhYml0cyBpbmNyZW1lbnRhbGx5IGVhY2ggZGF5LiBXYXMgYSBiaWcgaGVscCBmb3IgbWUgdG8ga2VlcCBjb2RpbmcnLCdodHRwczovL2phbWVzY2xlYXIuY29tL2F0b21pYy1oYWJpdHMnIClcbiAgICBidWlsZEJvb2tzKCdUaGUgQXV0b2Jpb2dyYXBoeSBvZiBNYWxjb20gWCcsJ1dyaXR0ZW4gYnkgQWxleCBIYWxleTxicj48YnI+VGhpcyBib29rIHRhdWdodCBtZSBhbG90IGFib3V0IHRoZSBVbml0ZWQgc3RhdGVzIGR1cmluZyB0aGUgZWFybHkgcGVyaW9kcyBiZWZvcmUgdGhlIGNpdmlsIHJpZ2h0cyBtb3ZlbWVudCBhbmQgYWxzbyBhYm91dCB0aGUgbWlzdW5kZXJzdG9vZCBNYWxjb20gWC4gTGVhcm5lZCBhYm91dCB0aGUgY3JlYXRpb24gb2YgdGhlIE5hdGlvbiBvZiBJc2xhbSwgYW5kIGhvdyBwcm9mb3VuZCBNYWxjb21zIGxpZmUgd2FzLicsJ2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RoZV9BdXRvYmlvZ3JhcGh5X29mX01hbGNvbG1fWCcpXG4gICAgYnVpbGRCb29rcygnVGhlIDUgQU0gQ2x1YicsJ1dyaXR0ZW4gYnkgUm9iaW4gU2hhcm1hPGJyPjxicj5BIGdyZWF0IHJlYWQgY3JlYXRpbmcgYSBuYXJyaXRpdmUgdGhhdCBpcyBmdWxsIG9mIGluZm9ybWF0aW9uIGFib3V0IGdyZWF0cywgc2hvd2VkIHRoZSBiZW5lZml0cyBvZiB3YWtpbmcgdXAgZWFybHkgYW5kIHN0YXJ0aW5nIHlvdXIgZGF5IGJlZm9yZSB0aGUgc3VuIHJpc2VzLiBDdXJyZW50bHkgd3JpdGluZyB0aGlzIGF0IDQgYW0gc28gSSB0aGluayBpdCBkaWQgYSBnb29kIGpvYiA6KScsJ2h0dHBzOi8vd3d3LmJsaW5raXN0LmNvbS9lbi9ib29rcy90aGUtNS1hbS1jbHViLWVuJylcbiAgICBidWlsZEJvb2tzKCdUaGUgSG9iYml0JywnV3JpdHRlbiBieSBKLlIuUiBUb2xraWVuPGJyPjxicj4gQSBjbGFzc2ljIHN0b3J5IHRoYXQgd2FzIG5vdGhpbmcgbGlrZSB0aGUgbW92aWUnLCdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UaGVfSG9iYml0JylcbiAgICBidWlsZEJvb2tzKCdEZWVwIFdvcmsnLGBXcml0dGVuIGJ5IENhbCBOZXdwb3J0PGJyPjxicj4gQSBib29rIGNvdmVyaW5nIHRoZSB0b3BpYyBvZiBcIkRlZXAgV29ya1wiLiBUaGlzIHdhcyBhIGdvb2QgcmVhZCBpbmZvcm1pbmcgbWUgb2YgdGhlIGJlbmVmaXQgb2YgY3JlYXRpbmcgYSBkaXN0cmFjdGlvbiBmcmVlIGVudmlyb25tZW50IHRoYXQgYWxsb3dzIHlvdSB0byB3b3JrIHdpdGggZGVlcG5lc3MuIFRoZSB1c2Ugb2YgdGFjdGljcyBzdWNoIGFzICdQb21vZG9ybycgYXJlIHZlcnkgaGVscGZ1bCBmb3IgcGFjaW5nIHlvdXJzZWxmIGFuZCBhbGxvd2luZyBwZXJpb2RzIGZvciB5b3UgdG8gcmVzdGAsJ2h0dHBzOi8vd3d3LnNhbXVlbHRob21hc2Rhdmllcy5jb20vYm9vay1zdW1tYXJpZXMvYnVzaW5lc3MvZGVlcC13b3JrLycpXG4gICAgYnVpbGRCb29rcygnQ2FudCBIdXJ0IE1lJywnQnkgRGF2aWQgR29nZ2luczxicj48YnI+IFRoaXMgYm9vayBjb3ZlcnMgYWxvdCBvZiB0aGUgbGlmZSBvZiB0aGUgcmV0aXJlZCBOYXZ5IFNlYWwgRGF2aWQgR29nZ2lucy4gSSBnb3Qgb3V0IG9mIHRoaXMgYm9vayB0aGUgaWRlYSBvZiBhIHRydWRnZSB0aHJvdWdoIG1lbnRhbGl0eSB3aGVyZSBJIGxlYXJuZWQgdG8ga2VlcCBwdXNoaW5nIHRocm91Z2ggaGFyZHNoaXAgYW5kIGJyZWFrIHRocm91Z2ggYmFycmllcnMgc2V0IGJ5IHlvdXJzZWxmJywnaHR0cHM6Ly9kYXZpZGdvZ2dpbnMuY29tL2Jvb2svJylcbiAgICBidWlsZEJvb2tzKCdEb24gUXVpeG90ZScsICdXcml0dGVuIGJ5IE1pZ3VlbCBkZSBDZXJ2YW50ZXM8YnI+PGJyPiBUaGlzIG9uZSB3YXMgdGhlIGJvb2sgb2YgdGhlIHllYXIgZm9yIG1lLiBJIGxvdmVkIHRoZSBzdG9yeSBhbmQgdGhlIGltYWdlcnkgcHJlc2VudGVkIGZyb20gdGhlIGF1dGhvciB3YXMgYW1hemluZy4gSG9uZXN0bHkgdGhlIGZ1bm5pZXN0IGJvb2sgSSBoYXZlIHJlYWQgYW5kIHdhcyBzYWQgdG8gZmluaXNoIGl0IGFuZCBwdXQgaXQgZG93bi4gV2lsbCBkZWZpbmV0bHkgYmUgcmVhZGluZyBhZ2FpbicsJ2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Rvbl9RdWl4b3RlJylcbiAgICBidWlsZEJvb2tzKCdXdXRoZXJpbmcgSGVpZ2h0cycsJ1dyaXR0ZW4gYnkgRW1pbHkgQnJvbnTDqzxicj48YnI+IEEgY2xhc3NpYyBwb3J0cmF5aW5nIGxvdmUsIGRlY2VwdGlvbiwgYW5kIGEgdmFyaWV0eSBvZiBlbW90aW9uLiBIZWF0aGNsaWZmIHdhcyBob25lc3RseSB0aGUgYmVzdCBhbnRhZ29uaXN0IEkgaGF2ZSBzZWVuIGluIGEgd2hpbGUuIEdvb2QgcmVhZCcsJ2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1d1dGhlcmluZ19IZWlnaHRzJylcbiAgICBidWlsZEJvb2tzKCdBbmltYWwgRmFybScsICdXcml0dGVuIGJ5IEdlb3JnZSBPcndlbGw8YnI+PGJyPiBBIGdvb2QgcmVyZWFkIGFmdGVyIGEgYml0IG9mIHRpbWUsIHdhcyBpbnRlcmVzdGluZyBzZWVpbmcgdGhlIGNvbXBhcmlzb24gb2YgY2VydGFpbiBwb2xpdGljYWwgc3lzdGVtcyB0byB0aGUgc2V0dGluZyBvZiB0aGUgYm9vaycsJ2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FuaW1hbF9GYXJtJykgXG4gICAgICAgIGJ1aWxkSG9iYmllcygnR2FyZGVuaW5nJywnSSBhbSBhIGF2aWQgZ2FyZG5lciBhbmQgSSB0cnkgdG8gZ3JvdyBhIHZhcmlldHkgb2YgcGxhbnRzLCBjdXJyZW50bHkgSSBhbSBleGNpdGVkIHRvIGhhcnZlc3QgbXkgZmlyc3QgdG9tYXRvIGFuZCBkaWxsIHdoZW4gdGhleSBhcmUgYm90aCByZWFkeScpXG4gICAgICAgIGJ1aWxkSG9iYmllcygnR3VpdGFyJyxgSSBoYXZlIGJlZW4gcHJhY3RpY2luZyBndWl0YXIgYSBkZWNlbnQgYW1vdW50IGxhdGVseSwgY3VycmVudCBsZWFybmluZyA8YSBocmVmID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dEgydzZPeHgwa1EnPkR1c3QgaW4gdGhlIFdpbmQ8L2E+IGFuZCBqdXN0IHN0YXJ0ZWQgdG8gbGVhcm4gYSA8YSBocmVmID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9WjJiMTVyd0dCSmMnPmx1bGxhYnk8L2E+YClcbiAgICAgICAgYnVpbGRIb2JiaWVzKCdQaWFubycsYEkgaGF2ZSBiZWVuIHBsYXlpbmcgcGlhbm8gc2luY2Ugc2VuaW9yIHllYXIgb2YgY29sbGVnZSBhbmQgaXRzIHJlbGF4aW5nIHRvIHBsYXkuIEkgYW0gcmVhbGx5IGludG8gYWxsIG11c2ljIGJ1dCBmb3IgcGlhbm8gSSB1c3VhbGx5IGp1c3QgcGxheSBjbGFzc2ljYWwuIFRoZSBvbmx5IHNvbmcgSSBrbm93IGZ1bGx5IGlzIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9MldmYW90U0szbUknPkd5bW5vcGVkaWUgbm8uIDE8L2E+YClcbiAgICAgICAgYnVpbGRIb2JiaWVzKCdSZWFkaW5nJywnSSBoYXZlIGJlY29tZSBhIGJpZyByZWFkZXIgdGhpcyB5ZWFyIGFzIG15IGJvb2sgbGlzdCB3b3VsZCBzaG93IGxvbC4gSSBhcHByZWNpYXRlIGxlYXJuaW5nIGFsb3QgYW5kIHlvdSBjYW4gZ2V0IHNvIG11Y2ggb3V0IG9mIHJlYWRpbmcnKVxuICAgICAgY29uc3QgZmFtaWx5QWxidW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgICBmYW1pbHlBbGJ1bS5pbm5lckhUTUwgPSAnRmFtaWx5IEFsYnVtJ1xuICAgICAgZmFtaWx5QWxidW0uY2xhc3NMaXN0LmFkZCgnZmFtaWx5QWxidW0nKVxuICAgICAgbWFpbi5hcHBlbmRDaGlsZChmYW1pbHlBbGJ1bSlcbiAgICAgICAgIGJ1aWxkSW1hZ2VTbGlkZXIoKVxuICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgIGNvbnN0IGV4cGxhaW5IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICAgZXhwbGFpbkhlYWQuaW5uZXJIVE1MID0gJ1RoZSBwZW9wbGUgaW4gbXkgRmFtaWx5J1xuICAgICAgICAgY29uc3QgZXhwbGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgZXhwbGFpbi5pbm5lckhUTUwgPSAnU28gbXkgZmFtaWx5IGlzIGZvcmV2ZXIgZ3Jvd2luZy4gSSBsb3ZlIG1ha2luZyBuZXcgY29ubmVjdGlvbnMgYW5kIGtlZXBpbmcgdGlnaHRlciBib25kcywgSSBoYXZlIGFsd2F5cyBoYWQgYSBzbWFsbCBpbW1lZGlhdGUgZmFtaWx5LCBidXQgdGhlIHBlb3BsZSBJIHRydWx5IGxvdmUgd2lsbCBhbHdheXMgc3RheSB3aXRoIG1lIGFuZCBJIHdpbGwgYWx3YXlzIGhhdmUgdGhlaXIgYmFjay4gU29tZSBvZiB0aGUgcGVvcGxlIGluIGhlcmUgYXJlIGZhbWlseSBieSBibG9vZCBsaWtlIG15IHNpc3RlciBBbml0YSBhbmQgbXkgbW9tIFNwb21lbmthLiBCdXQgdGhlIGNsb3Nlc3QgcGVyc29uIGluIG15IGxpZmUgaXMgbXkgYnJvdGhlciBkZWFuLCBhbmQgd2UgaGF2ZSBiZWVuIGV2ZXJ5d2hlcmUgYW5kIGRvbmUgZXZlcnl0aGluZyB0b2dldGhlci4gSGUgaXMgcmVhbGx5IG15IHJvY2suIFBlb3BsZSBsaWtlIG15IGxpdHRsZSBicm90aGVyIERhbmllbCBvciBteSBwaGlsb3NvcGh5IHRlYWNoZXIgVGltb3RoeSBhcmUgdHdvIHBlb3BsZSB3aG8gSSBsb3ZlIGRlYXJseSBhbmQgSSBrbm93IHRoZXkgd2lsbCBnbyBmYXIuIE15IGJyb3RoZXIgVGhpZW4gaXMgc29tZW9uZSB3aG8gYWx3YXlzIGhhcyBteSBiYWNrIGFuZCBJIGtub3cgaGUgd2lsbCBhbHdheXMgYmUgYnkgbXkgc2lkZS4gVGhlcmUgaXMgc28gbWFueSBtZW1iZXJzIG9mIG15IGZhbWlseSBhbmQgSSBob3BlIGl0IGtlZXBzIGdyb3dpbmcuIE1vcmUgcGljdHVyZXMgdG8gY29tZSEnXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChleHBsYWluSGVhZClcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGV4cGxhaW4pXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdleHBsYWluJylcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkaXYpXG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQm9va3MoYm9vayxkZXNjcmlwdGlvbiwgbGluayl7XG4gICBjb25zdCBvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ29sJylcbiAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgYW5jaG9yLmhyZWYgPSBsaW5rXG4gICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGNvbnN0IGJvb2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBib29rRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnYm9va0Rlc2NyaXB0aW9uJylcbiAgIGxpLmlubmVySFRNTCA9IGJvb2sgXG4gICBib29rRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZGVzY3JpcHRpb25cbiAgIGJvb2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJyxib29rKVxuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKCk9PntcbiAgICBjb25zdCBpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJvb2spXG4gICAgaWQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgIH0pXG4gICBcbiAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT57XG4gICAgY29uc3QgaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChib29rKVxuICAgIGlkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgIH0pIFxuICAgXG4gICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxpbmtcbiAgIH0pXG4gICBsaS5hcHBlbmRDaGlsZChib29rRGVzY3JpcHRpb24pXG4gICBcbiAgIG9sLmFwcGVuZENoaWxkKGxpKVxuICAgIFxufSIsImltcG9ydCBidWlsZEhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCB3ZWF0aGVyIGZyb20gJy4vcGljcy93ZWF0aGVySW1nLnBuZydcbmltcG9ydCBidWlsZFNraWxscyBmcm9tICcuL3NraWxscydcbmltcG9ydCBidWlsZFByb2plY3QgZnJvbSAnLi9wcm9qZWN0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYWluKCl7XG5idWlsZEhlYWRlcigpXG5idWlsZFNraWxscygpXG4gXG5idWlsZFByb2plY3Qod2VhdGhlciwnaHR0cHM6Ly9wYXRyaWNrLXRvbWljLmdpdGh1Yi5pby9XZWF0aGVyQVBJLycsJ2h0dHBzOi8vZ2l0aHViLmNvbS9QYXRyaWNrLVRvbWljL1dlYXRoZXJBUEknLCdUaGlzIGFwcGxpY2F0aW9uIGlzIG15IGZpcnN0IHRpbWUgdXRpbGl6aW5nIGEgQVBJLCBJIGRvIHNvbWUgc2ltcGxlIGFuaW1hdGlvbnMgd2l0aGluIHRoaXMgcHJvamVjdCBhbmQgbGVhcm5lZCBhbG90IHRocm91Z2ggdGhlIHVzZSBvZiByZXNwb25zaXZlIGRlc2lnbiBhbmQgYW5pbWF0aW9uJywnV2VhdGhlciBBcHBsaWNhdGlvbicpXG4gY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gZm9ybURpdi5jbGFzc0xpc3QuYWRkKCdmb3JtRGl2JylcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbmZvcm0uYWN0aW9uID0gXCJwcm9jZXNzRm9ybS5waHBcIlxuZm9ybS5tZXRob2QgPSBcInBvc3RcIlxuZm9yKGxldCBpPTA7IGk8NDtpKyspe1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZVxuICAgIHN3aXRjaChpKXtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgbGFiZWwuZm9yID0gJ25hbWUnXG4gICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSAnRnVsbCBOYW1lOidcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSd0ZXh0J1xuICAgICAgICAgICAgaW5wdXQubmFtZSA9ICduYW1lJ1xuICAgICAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnSm9obmF0aGFuIFJhbXNleSBEb2UnXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGxhYmVsLmZvciA9ICdlbWFpbCdcbiAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdFbWFpbCBBZGRyZXNzOidcbiAgICAgICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJ2pvaG5SZG9lQGhvdG1haWwuY29tJ1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSdlbWFpbCdcbiAgICAgICAgICAgIGlucHV0Lm5hbWUgPSAnZW1haWwnXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxhYmVsLmZvciA9ICdwaG9uZSdcbiAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdQaG9uZSBOdW1iZXI6J1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9J3RlbGUnXG4gICAgICAgICAgICBpbnB1dC5wbGFjZWhvbGRlcj0gJyoqKi0qKiotKioqKidcbiAgICAgICAgICAgIGlucHV0Lm5hbWUgPSAncGhvbmUnXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGxhYmVsLmZvciA9ICdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdHaXZlIGNvbnRleHQgdG8gcHJvamVjdCdcbiAgICAgICAgICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgdGV4dEFyZWEubmFtZSA9ICdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgIHRleHRBcmVhLmNvbHMgPSAnMTAnXG4gICAgICAgICAgICB0ZXh0QXJlYS5yb3dzID0gJzUnXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgIH0gXG4gICAgfVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnR5cGUgPSAnc3VibWl0J1xuICAgIGlucHV0LnZhbHVlID0gJ3N1Ym1pdCdcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdzdWJtaXQnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGNvbnN0IGNvbnRhY3RNZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdE1lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKVxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGgzLmlubmVySFRNTCA9ICdIb3cgdG8gZ2V0IGluIHRvdWNoJ1xuICAgIGNvbnRhY3RNZS5hcHBlbmRDaGlsZChoMylcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcC5pbm5lckhUTUwgPSAnSSBhbSB3aWxsaW5nIHRvIHdvcmsgd2l0aCBhbnlvbmUgb24gYW55IHByb2plY3Qgb3IgaWRlYSB0aGF0IHRoZXkgaGF2ZSBpbiBtaW5kISBmaWxsIG91dCB0aGlzIGZvcm0gYW5kIEkgd2lsbCBtZXNzYWdlIHlvdSBhcyBzb29uIGFzIEkgYW0gYXZhaWxhYmxlLjxicj4gSGF2ZSBhIGdyZWF0IGRheSBhbmQgbWF5IHdlIGFsbCBsaXZlIGxvbmcgYW5kIHByb3NwZXI8YnI+PGJyPiAtUGF0cmljayAnXG4gICAgY29udGFjdE1lLmFwcGVuZENoaWxkKHApXG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChjb250YWN0TWUpXG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZm9ybURpdilcblxufVxuIFxuIiwiaW1wb3J0IHBvcnRhaXQgZnJvbSAnLi9waWNzL1RvbWljLlAuanBnJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRIZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuY29uc3QgcG9ydHJhaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxucG9ydHJhaXQuY2xhc3NMaXN0LmFkZCgncGljT2ZNZScpXG5pbWcuY2xhc3NMaXN0LmFkZCgncG9ydHJhaXQnKVxuaW1nLnNyYyA9IHBvcnRhaXRcbnBvcnRyYWl0LmFwcGVuZENoaWxkKGltZylcbmhlYWRlci5hcHBlbmRDaGlsZChwb3J0cmFpdClcbmNvbnN0IHdob0FtSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG53aG9BbUkuY2xhc3NMaXN0LmFkZCgnd2hvQW1JJylcbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuaDIuaW5uZXJIVE1MID0gJ015IG5hbWUgaXMgUGF0cmljayBFbWFudWVsIFRvbWljJ1xud2hvQW1JLmFwcGVuZENoaWxkKGgyKVxuY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxucC5pbm5lckhUTUwgPSAnSSBhbSBhIHN0dWRlbnQgYXQgdGhlIFVuaXZlcnNpdHkgb2YgU291dGggRmxvcmlkYSBhbmQgSSBncmFkdWF0ZSBpbiB0aGUgU3ByaW5nIG9mIDIwMjQ8YnI+d2l0aCBhIEJhY2hlbG9ycyBkZWdyZWUgaW4gSW5mb3JtYXRpb24gU2NpZW5jZTxicj5JIGFtIGEgbWFuIHdpdGggYWxvdCBvZiBhbWJpdGlvbiB0byBiZXR0ZXIgdGhlIHdvcmxkLCBhbmQgYW0gdGhlIGZpcnN0IG9mIG15IGZhbWlseSB0byBiZTxicj5ib3JuIGluIEFtZXJpY2EuIEkgc3BlbmQgYXMgbXVjaCB0aW1lIGFzIEkgY2FuIGxlYXJuaW5nIGhvdyB0byBkZXZlbG9wIHdlYnNpdGVzIGV2ZXJ5ZGF5PGJyPkl0IGlzIG5vdCBqdXN0IGZ1biBmb3IgbWUgYnV0IGJyaW5ncyBpbW1lbnNlIHNhdGlzZmFjdGlvbiB3aGVuIEkgY2FuIGJ1aWxkIGFuZCBkZXNpZ24gc29tZXRoaW5nPGJyPnRoYXQgSSBrbm93IGlzIGdvb2QuIEkgbG92ZSBoZWxwaW5nIHBlb3BsZSwgYW5kIEkgYW0gbG9va2luZyBmb3IgYSBvcHBvcnR1bml0eSB0byBzaG93IDxicj5teSBza2lsbHNldCBhbmQgbGVhcm4gdGhyb3VnaCBvdGhlcnMnXG53aG9BbUkuYXBwZW5kQ2hpbGQocClcbmhlYWRlci5hcHBlbmRDaGlsZCh3aG9BbUkpXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG5tYWluLmFwcGVuZENoaWxkKGhlYWRlcilcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEhvYmJpZXModGl0bGUsZGVzY3JpcHRpb24pe1xuICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0JylcbiAgICAgbGkuaW5uZXJIVE1MID0gdGl0bGVcbiAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICBwLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uXG4gICBcbiAgICAgbGkuYXBwZW5kQ2hpbGQocClcbiAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSlcbn0iLCJcbmltcG9ydCBhc2ggZnJvbSAnLi9zbGlkZXIvYXNoLmpwZydcbmltcG9ydCBiYWJ5IGZyb20gJy4vc2xpZGVyL2JhYnkuanBnJ1xuaW1wb3J0IGJyb3RoZXIgZnJvbSAnLi9zbGlkZXIvYnJvdGhlci5qcGcnXG5pbXBvcnQgYnJvdGhlcnMgZnJvbSAnLi9zbGlkZXIvYnJvdGhlcnMuanBnJ1xuaW1wb3J0IGJ1YmJhIGZyb20gJy4vc2xpZGVyL2J1YmJhLmpwZydcbmltcG9ydCBidWNzIGZyb20gJy4vc2xpZGVyL2J1Y3MuanBnJ1xuaW1wb3J0IGJ1dHRlcmZseSBmcm9tICcuL3NsaWRlci9idXR0ZXJmbHkuanBnJ1xuaW1wb3J0IGNvb2wgZnJvbSAnLi9zbGlkZXIvY29vbC5qcGcnXG5pbXBvcnQgY3JvYXRpYSBmcm9tICcuL3NsaWRlci9jcm9hdGlhLmpwZydcbmltcG9ydCBkYW5pZWwgZnJvbSAnLi9zbGlkZXIvZGFuaWVsLmpwZydcbmltcG9ydCBkb2xwaGluIGZyb20gJy4vc2xpZGVyL2RvbHBoaW4uanBnJ1xuaW1wb3J0IGV5ZXMgZnJvbSAnLi9zbGlkZXIvZXllcy5qcGcnXG5pbXBvcnQgZmFtaWx5IGZyb20gJy4vc2xpZGVyL2ZhbWlseS5qcGcnXG5pbXBvcnQgZnJpZW5kcyBmcm9tICcuL3NsaWRlci9mcmllbmRzLmpwZydcbmltcG9ydCBnYWdnbGUgZnJvbSAnLi9zbGlkZXIvZ2FnZ2xlLmpwZydcbmltcG9ydCBnYW5nIGZyb20gJy4vc2xpZGVyL2dhbmcuanBnJ1xuaW1wb3J0IGdvb2ZzIGZyb20gJy4vc2xpZGVyL2dvb2ZzLmpwZydcbmltcG9ydCBnb29ucyBmcm9tICcuL3NsaWRlci9nb29ucy5qcGcnXG5pbXBvcnQgZ3JhbmRwYSBmcm9tICcuL3NsaWRlci9ncmFuZHBhLmpwZydcbmltcG9ydCBtYXggZnJvbSAnLi9zbGlkZXIvbWF4LmpwZydcbmltcG9ydCBtb21tYSBmcm9tICcuL3NsaWRlci9tb21tYS5qcGcnXG5pbXBvcnQgbW9ua2V5IGZyb20gJy4vc2xpZGVyL21vbmtleS5qcGcnXG5pbXBvcnQgcG9zZSBmcm9tICcuL3NsaWRlci9wb3NlLmpwZydcbmltcG9ydCBwdXBwZXQgZnJvbSAnLi9zbGlkZXIvcHVwcGV0LmpwZydcbmltcG9ydCBzaGVtayBmcm9tICcuL3NsaWRlci9zaGVtay5qcGcnXG5pbXBvcnQgc2libGluZ3MgZnJvbSAnLi9zbGlkZXIvc2libGluZ3MuanBnJ1xuaW1wb3J0IHNpc3N5IGZyb20gJy4vc2xpZGVyL3Npc3N5LmpwZydcbmltcG9ydCBza2lwcGluIGZyb20gJy4vc2xpZGVyL3NraXBwaW5nLmpwZydcbmltcG9ydCBzdG9pYyBmcm9tICcuL3NsaWRlci9zdG9pYy5qcGcnXG5pbXBvcnQgc3Ryb25nVGltIGZyb20gJy4vc2xpZGVyL3N0cm9uZ1RpbS5qcGcnXG5pbXBvcnQgc3dlZXRUIGZyb20gJy4vc2xpZGVyL3N3ZWV0VC5qcGcnXG5pbXBvcnQgdGhpZW4gZnJvbSAnLi9zbGlkZXIvdGhpZW5CZGF5LmpwZydcbmltcG9ydCB0aG9yIGZyb20gJy4vc2xpZGVyL3Rob3IuanBnJ1xuaW1wb3J0IHR1cnRsZSBmcm9tICcuL3NsaWRlci90dXJ0bGUuanBnJ1xuaW1wb3J0IHdhdGVyIGZyb20gJy4vc2xpZGVyL3dhdGVyLmpwZydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkSW1hZ2VTbGlkZXIoKXtcbiAgICBjb25zdCBuYW1lcyA9IFthc2gsYmFieSxicm90aGVyLGJyb3RoZXJzLGJ1YmJhLGJ1Y3MsYnV0dGVyZmx5LGNvb2wsY3JvYXRpYSxkYW5pZWwsZG9scGhpbixleWVzLGZhbWlseSxmcmllbmRzLGdhZ2dsZSxnYW5nLGdvb2ZzLGdyYW5kcGEsbWF4LG1vbW1hLG1vbmtleSxwb3NlLHB1cHBldCxzaGVtayxzaWJsaW5ncyxzaXNzeSxza2lwcGluLHN0b2ljLHN0cm9uZ1RpbSx0aGllbixzd2VldFQsdGhvcix0dXJ0bGUsd2F0ZXJdXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoJ2ltZ1NsaWRlcicpXG4gICAgZm9yKGxldCBpID0gMDsgaTxuYW1lcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgaW1nLnNyYyA9IG5hbWVzW2ldXG4gICAgICAgIGlmKGklMj09MCl7XG4gICAgICAgICAgICBpbWcuc3R5bGUubWFyZ2luVG9wID0gJzN2aCdcbiAgICAgICAgICAgIGltZy5zdHlsZS56SW5kZXggPSAnYXV0bydcbiAgICAgICAgfWVsc2UgaWYoaSUyIT0wKXtcbiAgICAgICAgICAgIGltZy5zdHlsZS5tYXJnaW5Ub3AgPSAnOHZoJ1xuICAgICAgICAgICAgaW1nLnN0eWxlLnpJbmRleCA9ICcyJ1xuICAgICAgICB9XG4gICAgICAgIGltZy5hbHQgPSAnbXlGYW1pbHkvbmF0dXJlJ1xuICAgICAgICBzbGlkZXIuYXBwZW5kQ2hpbGQoaW1nKVxuICAgIH1cbiAgICBsZXQgY291bnQgPSAwXG4gICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgbGV0IHZ3ID0gMTAwXG4gICAgICAgIGlmKGNvdW50ID09LTExKXtcbiAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgdncgPSB2dypjb3VudFxuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvdW50LS1cbiAgICAgICAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWBcbiAgICAgICAgICAgIH1cbiAgICB9LDMwMDApXG4gICAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgd3JhcC5jbGFzc0xpc3QuYWRkKCdzbGlkZXJXcmFwJylcbiAgICB3cmFwLmFwcGVuZENoaWxkKHNsaWRlcilcbiAgICBtYWluLmFwcGVuZENoaWxkKHdyYXApXG59XG4gIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgYnVpbGRTaWRlQmFyIGZyb20gJy4vc2lkZWJhcidcbmltcG9ydCBidWlsZE1haW4gZnJvbSAnLi9idWlsZE1haW4nXG5jb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKVxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxubmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBtYWluLmlubmVySFRNTCA9ICcnXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzM0MzQzNCdcbiAgICBidWlsZE1haW4oKSAgXG59KVxuYnVpbGRNYWluKClcbmJ1aWxkU2lkZUJhcigpIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRQcm9qZWN0KHNyYywgc2l0ZUxpbmssZ2hMaW5rLCBwSW5uZXIsIGhlYWQpe1xuICAgIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKVxuICAgIGlmKG1haW4uY29udGFpbnMocHJvamVjdHMpPT10cnVlKXtcbiAgICBcbiAgICAgICAgXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKGZhbHNlKVxuICAgICAgICBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJylcbiAgICB9XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ0bnMuY2xhc3NMaXN0LmFkZCgnYnRucycpXG4gICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnbGlua3MnKVxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsZXQgY291bnQgPSAwXG4gICAgaW1nLnNyYyA9IHNyY1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKGltZylcbiAgICB3aGlsZShjb3VudDwyKXtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidG4udHlwZSA9ICdzdWJtaXQnXG4gICAgICAgIHN3aXRjaChjb3VudCl7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZm9ybS5hY3Rpb24gPSBzaXRlTGlua1xuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSAnVmlldyBMaXZlIFNpdGUnXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidG4pXG4gICAgICAgICAgICAgICAgYnRucy5hcHBlbmRDaGlsZChmb3JtKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGZvcm0uYWN0aW9uID0gZ2hMaW5rXG4gICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9ICdTb3VyY2UgQ29kZSdcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bilcbiAgICAgICAgICAgICAgICBidG5zLmFwcGVuZENoaWxkKGZvcm0pXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrIFxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDYXJkJylcbiAgIGxpbmtzLmFwcGVuZENoaWxkKGJ0bnMpXG4gICAgcC5pbm5lckhUTUwgPSBwSW5uZXJcbiAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGxpbmtzKVxuICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJylcbiAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgaDIuaW5uZXJIVE1MID0gaGVhZFxuICAgIGRlc2MuYXBwZW5kQ2hpbGQoaDIpXG4gICAgZGVzYy5hcHBlbmRDaGlsZChwKVxuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGRlc2MpXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0cylcbn1cbiIsImltcG9ydCBidWlsZE1haW4gZnJvbSAnLi9idWlsZE1haW4nXG5pbXBvcnQgYnVpbGRBYm91dE1lIGZyb20gJy4vYWJvdXQnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFNpZGVCYXIoKXtcbiAgICBjb25zdCBzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUnKVxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyQnRuJylcbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKVxuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNpZGVCYXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3NpZGVCYXInKVxuICAgIHJlbW92ZUJ0bi5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjM5XCIgaGVpZ2h0PVwiMzZcIiB2aWV3Qm94PVwiMCAwIDM5IDM2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHJlY3Qgd2lkdGg9XCI0My42ODQ2XCIgaGVpZ2h0PVwiNy45NTUzXCIgcng9XCIzLjk3NzY1XCIgdHJhbnNmb3JtPVwibWF0cml4KDAuNzQ2ODEgMC42NjUwMzcgLTAuNzg3ODExIDAuNjE1OTE3IDYuMjY3MjEgMS45OTA2KVwiIGZpbGw9XCJ3aGl0ZVwiLz4gPHJlY3Qgd2lkdGg9XCI0Mi45MjQ4XCIgaGVpZ2h0PVwiOC4wODgxOFwiIHJ4PVwiNC4wNDQwOVwiIHRyYW5zZm9ybT1cIm1hdHJpeCgtMC42NzgzMDIgMC43MzQ3ODMgLTAuODQxMjQ0IC0wLjU0MDY1NiAzNy4zNTE2IDQuMzcyOTIpXCIgZmlsbD1cIndoaXRlXCIvPiA8L3N2Zz4nXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIFxuICAgICAgIHNpZGVCYXIuc2V0QXR0cmlidXRlKCdpZCcsJ2FjdGl2ZScpXG4gICAgfSlcbiAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIHNpZGVCYXIuaWQgPSAnZGVBY3RpdmUnXG4gICAgfSlcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHJlbW92ZUJ0bilcbiAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgaG9tZURpdi5jbGFzc0xpc3QuYWRkKCdidG5EaXYnKVxuY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxucC5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDE4MyAxNTBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4gPHJlY3QgeD1cIjQxXCIgeT1cIjUwXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiByeD1cIjEwXCIgZmlsbD1cIiNGRkJGMDBcIi8+IDxwYXRoIGQ9XCJNODQuNjI2IDYuNTA2MTFDODguNDgyIDIuODU2NDYgOTQuNTE4IDIuODU2NDUgOTguMzc0IDYuNTA2MUwxNTIuNTAyIDU3LjczNzJDMTU5LjA2OSA2My45NTI5IDE1NC42NzEgNzUgMTQ1LjYyOCA3NUgzNy4zNzE3QzI4LjMyOTUgNzUgMjMuOTMwNSA2My45NTI5IDMwLjQ5NzcgNTcuNzM3Mkw4NC42MjYgNi41MDYxMVpcIiBmaWxsPVwiI0ZGQkYwMFwiLz48cGF0aCBkPVwiTTc0IDEwNkM3NCAxMDAuNDc3IDc4LjQ3NzIgOTYgODQgOTZIOThDMTAzLjUyMyA5NiAxMDggMTAwLjQ3NyAxMDggMTA2VjE1MEg3NFYxMDZaXCIgZmlsbD1cImJsYWNrXCIvPjwvc3ZnPidcbiAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGhvbWUuaW5uZXJIVE1MID0gJ0hvbWUnXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzNDM0MzQnXG4gICAgICAgIGJ1aWxkTWFpbigpXG4gICAgICAgIHNpZGVCYXIucmVtb3ZlQXR0cmlidXRlKCdpZCcsJ2FjdGl2ZScpXG4gICAgfSlcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWUpXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChwKVxuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoaG9tZURpdilcbiAgICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXREaXYuY2xhc3NMaXN0LmFkZCgnYnRuRGl2JylcbiAgICAgY29uc3QgYWJvdXRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gJydcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0Y0QkI0NCdcbiAgICAgICAgYnVpbGRBYm91dE1lKClcbiAgICAgICAgc2lkZUJhci5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywnYWN0aXZlJylcbiAgICAgfSlcbiAgICAgYWJvdXRCdG4uaW5uZXJIVE1MID0gJ0Fib3V0IE1lJ1xuICAgICBhYm91dEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dEJ0bilcbiAgICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRQKVxuICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGFib3V0RGl2KVxuICAgIHNpZGUuYXBwZW5kQ2hpbGQoc2lkZUJhcilcbn0iLCJpbXBvcnQgamF2YSBmcm9tICcuL3BpY3MvamF2YS5wbmcnXG5pbXBvcnQgc2FzcyBmcm9tICcuL3BpY3Mvc2Fzcy5wbmcnXG5pbXBvcnQgY3NzIGZyb20gJy4vcGljcy9jc3MucG5nJ1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9waWNzL2h0bWwucG5nJ1xuaW1wb3J0IGpzIGZyb20gICcuL3BpY3MvanMucG5nJ1xuaW1wb3J0IHB5IGZyb20gJy4vcGljcy9weXRob24ucG5nJ1xuaW1wb3J0IHNxbCBmcm9tICcuL3BpY3Mvc3FsLnBuZydcbmltcG9ydCB3cCBmcm9tICcuL3BpY3Mvd2VicGFjay5wbmcnXG5pbXBvcnQgdHMgZnJvbSAnLi9waWNzL3RzLnBuZydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkU2tpbGxzKCl7XG4gICAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIHdyYXAuY2xhc3NMaXN0LmFkZCgnc2tpbGxzJylcbiAgICBjb25zdCBza2lsbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNraWxscy5jbGFzc0xpc3QuYWRkKCd3cmFwJylcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBoMi5pbm5lckhUTUwgPSBcIk15IFNraWxsc2V0XCJcbiAgICB3cmFwLmFwcGVuZENoaWxkKGgyKVxuICAgIGxldCBjb3VudCA9IDBcbiAgICB3aGlsZShjb3VudCA8IDkpe1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICAgICAgc3dpdGNoKGNvdW50KXtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnSmF2YScgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gamF2YVxuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnSmF2YSdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIHAuc3R5bGUubWFyZ2luTGVmdCA9ICcxMHB4J1xuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnUHl0aG9uJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBweVxuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnUHl0aG9uJ1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdIVE1MJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBodG1sXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzExcHgnXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdIVE1MJ1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdDU1MnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGNzc1xuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnQ1NTJ1xuICAgICAgICAgICAgICAgIHAuc3R5bGUubWFyZ2luTGVmdCA9ICcxMnB4J1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdKYXZhU2NyaXB0J1xuICAgICAgICAgICAgICAgIGltZy5zdHlsZS5tYXJnaW5MZWZ0ID0gJzIwcHgnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGpzXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdKYXZhU2NyaXB0J1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdteVNRTCdcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gc3FsXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdteVNRTCdcbiAgICAgICAgICAgICAgICBwLnN0eWxlLm1hcmdpbkxlZnQgPSAnOHB4J1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdTYXNzJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBzYXNzXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdTYXNzJ1xuICAgICAgICAgICAgICAgIHAuc3R5bGUubWFyZ2luTGVmdCA9ICc1cHgnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ1dlYnBhY2snXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHdwXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdXZWJwYWNrJ1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdUeXBlU2NyaXB0J1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSB0c1xuICAgICAgICAgICAgICAgIGltZy5zdHlsZS5tYXJnaW5MZWZ0ID0gJzIwcHgnXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdUeXBlc2NyaXB0J1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHdyYXAuYXBwZW5kQ2hpbGQoc2tpbGxzKVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHdyYXApXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==