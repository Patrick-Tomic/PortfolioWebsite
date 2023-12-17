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
  min-width: 3vw;
  min-height: 6vh;
  max-width: 3vw;
  max-width: 6vh;
}
.skills .card .html {
  margin-left: 12px;
}
.skills .card .css {
  margin-left: 13px;
}
.skills .card .java {
  margin-left: 9px;
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

main .bio {
  z-index: 5;
  height: 700px;
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
@media (max-width: 1750px) {
  .projects .projectCard {
    flex-direction: column;
  }
  .projects .projectCard .links {
    margin-left: 6vw;
  }
  .projects .projectCard .links img {
    margin-left: 3vw;
  }
  .projects .projectCard .links .btns button {
    width: 12vw;
    height: 6vh;
  }
  main p {
    font-size: 13px;
  }
  main li {
    font-size: 14px;
  }
  main li p {
    font-size: 13px;
  }
}
@media (max-width: 1000px) {
  .skills .wrap {
    margin-left: 80px;
  }
  .skills .wrap .card img {
    max-width: 6vw;
    max-height: 10vh;
    min-width: 6vw;
    min-height: 6vh;
  }
  .skills .wrap .card p {
    margin-bottom: 10px;
    margin-left: 10px;
    font-weight: bold;
  }
  .skills .wrap .card .css {
    margin-left: 18px;
  }
  .skills .wrap .card .html {
    margin-left: 14px;
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
  .projects .projectCard .links .btns {
    margin-left: 25px;
  }
  .projects .projectCard .links .btns button {
    width: 13vw;
    height: 7vh;
  }
  .projects .projectCard .description {
    margin-right: 5vw;
  }
  main .bio {
    height: 800px;
  }
  main .bio .myStory .sumDiv P {
    font-size: 14px;
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
    font-size: 11px;
  }
  main .imgSlider img {
    height: 15vh;
  }
}
@media (max-width: 700px) {
  body {
    width: 100%;
  }
  header button h2 {
    font-size: 24px;
  }
  .header {
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
  .skills .wrap {
    margin-top: 3vh;
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    justify-content: space-between;
  }
  .skills .wrap .card .webpack {
    margin-left: 2vw;
  }
  .skills .wrap .card .html {
    margin-left: 7px;
  }
  .skills .wrap .card .css {
    margin-left: 10px;
  }
  .skills .wrap .card img {
    max-width: 40px;
    max-height: 40px;
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
    margin-left: 25vw;
    height: auto;
  }
  .projects .projectCard .links .btns button {
    width: 40vw;
    height: 40px;
    font-weight: normal;
  }
  .projects .projectCard .description {
    margin-left: 15vw;
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
  .side #deActive {
    animation: none;
  }
  header {
    z-index: 1;
    width: 100%;
  }
  header .bosnianWar {
    display: none;
  }
  header h2 {
    font-size: 15px;
  }
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* #animate{
        animation: none;
        display: block;
    }
    #reverse{
        animation: none;
        display: block;
    } */
  }
  main .quote {
    margin-left: 10vw;
  }
  main .bio {
    border-top: #13274F solid 5px;
    z-index: 0;
    min-height: 420vh;
    flex-direction: column;
    pointer-events: none;
  }
  main .bio .bookList {
    border: none;
  }
  main .bio .bookList button {
    font-size: 20px;
    color: black;
  }
  main .bio .bookList .bookDiv {
    z-index: 0;
    padding: 0;
    display: block;
  }
  main .bio .bookList .bookDiv li {
    pointer-events: none;
  }
  main .bio .bookList .bookDiv li .bookDescription {
    left: -3%;
    z-index: 0;
    width: 80vw;
    height: 55px;
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
    border-bottom: none;
    padding: 0;
  }
  main .bio .hobbies .hobbyDiv {
    display: block;
    width: 100%;
  }
  main .bio .hobbies .hobbyDiv .list li {
    font-weight: bold;
    margin-bottom: 5vh;
  }
  main .bio .hobbies .hobbyDiv .list li p {
    width: 100%;
  }
  main .bio .myStory {
    border-top: 5px solid #13274F;
    border-left: none;
    border-right: none;
    border-bottom: none;
    width: 94%;
  }
  main .bio .myStory button {
    border: none;
  }
  main .bio .myStory .sumDiv {
    width: 80vw;
    height: 60vh;
    display: block;
  }
  main .bio .myStory .sumDiv p {
    font-size: 15px;
  }
  main .imgSlider img {
    height: 25vh;
  }
  * {
    margin: 0;
    padding: 0;
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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":[" \n$base: #343434;\n*{\n    margin: 0;\n    font-family: 'Courier New', Courier, monospace;\n   \n}\n \nbody{\n    background-color:#343434;\n    width: 100%;\n    height: 100%;\n     \n}\nfooter\n{\n    box-shadow: 10px 10px 10px 15px white;\n    button{\n        cursor: pointer;\n        border: none;\n        background-color: $base;\n    }\n    background-color: $base;\n}\nheader{\n    \n    box-shadow: 0px 5px 5px white;\n   \n    position: sticky;\n    top: 0;\n    background-color: #13274F;\n    z-index: 1;\n    display: flex;\n    justify-content: space-between;\n     svg{\n        margin-left: 10px;\n        margin-top: 5px;\n     }\n    button{\n        background-color: #13274F;\n        border: none;\n        margin-top: 5px;\n        cursor: pointer;\n    }\n    .name{ \n        font-size: 1em;\n            margin-left: 15vw;\n           color: white;\n           font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n        }\n    .name:hover{\n        color: #FFD700;\n    }\n}\n.header{\n    display: flex;\n    padding: 25px;\n    justify-content: space-around;\n   \n    .portrait{\n    \n       margin: 5px;\n        width:auto;\n        height: 321px;\n        border-radius: 10px;\n    }\n    .whoAmI{\n        margin-top: 5vh;\n    \n        font-family: 'Courier New', Courier, monospace;\n        color: white;\n        p{\n            font-size: 20px;\n            line-height: 25px;\n            \n        }\n    }\n}\n.skills{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n     \n    box-shadow: 0px 15px 15px black;\n    h2{\n        margin-left: 43%;\n    }\n\n    .wrap{\n        margin-left: 3vw;\n        background-color: white;\n        margin-bottom: 10px;\n        display: grid;\n        grid-template-columns: repeat(auto-fit,minmax(150px, 1fr));\n         \n    \n        \n    }\n    .card{\n        display: flex;\n        flex-direction: column;\n        img{\n         \n            padding: 2px;\n            \n            \n            background-color: white;\n            min-width: 3vw;\n            min-height: 6vh;\n            max-width: 3vw;\n            max-width: 6vh;\n        }\n        .html{\n            margin-left: 12px;\n        }\n        .css{\n            margin-left: 13px;\n        }\n        .java{\n            margin-left: 9px;\n        }\n        \n    }\n}\n.projects{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    .projectCard{\n       \n        padding: 50px;\n        display: flex;\n        \n        .links{\n            img{\n                border-radius: 10px;\n                display: flex;\n                flex-direction: column;\n                width: 20vw;\n    \n            }\n            .btns{\n                button{\n                    cursor: pointer;\n                    margin: 1vh;\n                    background-color: #FFBF00;\n                    border: #FFBF00 1px solid;\n                    width: 9vw;\n                    height:5vh;\n                    border-radius: 10px;\n                    font-size: 15px;\n                    font-weight: bold;\n                }\n                button:hover{\n                    background-color: $base;\n                    color: white;\n                }\n                display: flex;\n                \n                align-items: center;\n            }\n        }\n        .description{\n        h2{\n            color: white;\n            margin-left: 5vw;\n        }\n        p{\n             \n            color: white;\n            font-size: 18px;\n            margin-left: 5vw;\n            margin-top: 2vh;\n        }\n    }\n    }\n}\n \n    .formDiv{\n        box-shadow: 10px 10px 10px 15px white;\n        background-color: #13274F;\n        \n       display: flex;\n       .contact{\n        margin-left: 10vw;\n        color: white;\n        h3{\n            font-size: 23px;\n            margin-top: 2vh;\n            margin-bottom: 5vh;\n        }\n        p{\n            font-size: 18px;\n        }\n        display: flex;\n        flex-direction: column;\n         \n        width:35vw ;\n        \n       }\n        form{\n            margin-left: 200px;\n             \n            border-radius: 10px;\n           label{\n            color: white;\n           }\n            width: 25vw;\n            padding: 10px;\n            display: flex;\n            flex-direction:column;\n            input{\n               \n                border: solid 1px black;\n                margin: 5px;\n                width: 15vw;\n            }\n            textarea{\n                width: 20vw;\n            }\n            .submit{\n                cursor: pointer;\n                border-radius: 5px;\n                margin-top: 10px;\n                width: 10vw;\n                height: 4vh;\n                background-color:#FFBF00;\n                font-size: 15px;\n                font-weight: bold;\n            }\n            .submit:hover{\n                color: white;\n                background-color: #343434;\n                 \n            }\n        }\n    }\n\n.side{\n    display: flex;\n    justify-content: flex-end;\n    \n  \n   \n.sideBar{\n    width: 25vw;\n  \n    height: 100%;\n    background-color: \t#36454F;\n    position: absolute;\n   display: none;\n   z-index: auto;\n   .remove{\n    background-color: \t#36454F;\n    border: none;\n    align-self: flex-end;\n    cursor: pointer;\n}\n.btnDiv{\n    display: flex;\n     \n    .btn{\n        cursor: pointer;\n        margin-top: 15px;\n        align-self: flex-start;\n        border: none;\n        background-color: \t#36454F;\n        font-size: 20px;\n        color: white;\n    }\n    .btn:hover{\n        color:  #FFBF00;\n    }\n}\n \n  \n}\n#active{\n    animation: openSide 1s;\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n   z-index: 2;\n    transform-origin: center right;\n  \n    \n}  \n#deActive{\n    animation: closeSide 1s;\n    transform-origin: center right;\n}\n}\n\nmain{\n   \n \n    \n.bio{\n    z-index: 5;\n    height: 700px;\n    z-index: 1;\n    display: flex;\n   button{\n    cursor: pointer;\n   }\n   button:hover{\n    color: white;\n   }\n    \n    .myStory{\n        button{\n            font-size: 1.5em;\n            font-weight: bold;\n            text-align: left;\n             margin-bottom: 2vh;\n            border: none;\n            background-color: #F4BB44;\n        }\n        height: auto;\n        border-bottom: none;\n        border: solid 5px #13274F;\n        border-bottom: none;\n       \n        \n       padding:2vh 3vw;\n       \n        font-size: 18px;\n        color: black;\n        width: 33%;\n         \n\n    }\n    .bookList{\n         \n        height: auto;\n        display: flex;\n        flex-direction: column;\n        width: 33%;\n        padding: 25px;\n        border: 5px solid #13274F;\n        border-right: none;\n        border-bottom: none;\n        border-left: none;\n        button{\n            border: none;\n            font-size: 1.5em;\n            font-weight: bold;\n            text-align: left;\n             margin-bottom: 2vh;\n           width: 10vw;\n            background-color: #F4BB44;\n        }\n        .bookDiv{\n            \n           \n            .bookDescription{\n                left: 25%;\n                 z-index: 3;\n                border: solid 1px #13274F;\n                display: none;\n                position: absolute;\n                width: 18vw;\n                height: auto;\n                \n                padding: 2vw 2vh;     \n                background-color: #343434;\n                border-radius: 10px;\n            }\n            li{\n             \n                margin-bottom: 2vh;\n                font-size: 18px;\n                font-weight: bold;\n                width: 15vw;\n            }\n            ol{\n            li:hover{\n                color: white;\n                cursor: pointer;\n            }\n            }\n        }\n        \n    }\n   .hobbies{\n    border-top: #13274F 5px solid;\n    \n    button{\n       \n        font-size: 1.5em;\n        font-weight: bold;\n        text-align: left;\n         margin-bottom: 2vh;\n        border: none;\n        background-color: #F4BB44;\n    }\n     \n    height: auto;\n    padding:2vh 3vw;\n    width: 33%;\n     \n    .hobbyDiv{\n         \n    .list{\n        li{\n            font-size: 18px;\n        p{\n            border: none;\n           \n           width: 15vw;\n        }\n    }\n    }\n}\n   }\n}\n.quote{\n  margin-left: 30vw;\n  margin-top: 2vh;\n}\n.familyAlbum{\n    border-top-left-radius: 15px;\n    border-top-left-radius: 15px;\n    background-color: #13274F;\n    color:white;\n    text-align: center;\n}\n.sliderWrap{\n   overflow: hidden;\n.imgSlider{\n    width: 100000vw;\n     \n    background-color: #13274F; /* Chrome 10-25, Safari 5.1-6 */\n    display: flex;\n    transition: transform 1s ease-in-out;\n    transform: translateX(0);\n    img{\n        margin-left: 5vw;\n        margin-bottom: 5vh;\n        height: 25vh;\n        width: auto;\n        border-radius: 50px;\n    }\n}\n}\n.explain{\n   margin: 5vh 5vw;\n    h2{\n        text-align: center;\n    }\n    p{\n        line-height: 25px;\n    }\n}\n}\n\n@keyframes openSide {\n    from{\n      transform: scaleX(0);\n    }\n     70%{\n       transform: scaleX(1.1);\n     }\n     to{\n        transform: scaleX(1);\n     }\n}\n@keyframes closeSide{\n    from{\n        transform: scaleX(1);\n        display: block;\n    }\n    to{\n        transform: scaleX(0);\n        display: none;\n    }\n}\n@media (max-width: 1750px){\n    .projects{\n        .projectCard{\n            flex-direction: column;\n            .links{\n                img{\n                    margin-left: 3vw;\n                }\n                margin-left: 6vw;\n                .btns{\n                    button{\n                        width: 12vw;\n                        height: 6vh;\n                    }\n                }\n            }\n        }\n    }\n    main{\n        p{\n            font-size: 13px;\n        }\n        li{\n            font-size: 14px;\n            p{\n                font-size: 13px;\n            }\n       \n        }\n    }\n}\n @media (max-width: 1000px){\n    .skills{\n        .wrap{\n            margin-left: 80px;\n            .card{\n              \n         img{\n            max-width: 6vw;\n            max-height: 10vh;\n             min-width: 6vw;\n             min-height: 6vh;\n        }\n        p{\n            margin-bottom: 10px;\n            margin-left: 10px;\n            font-weight: bold;\n        }\n         .css{\n            margin-left: 18px;\n         }\n         .html{\n            margin-left: 14px;\n         }\n    }\n}\n}\n.projects{\n    .projectCard{\n        \n        flex-direction: column;\n        .links{\n            margin-left: 8px;\n            img{\n                margin-left: 2vw;\n                width: 30vw;\n            }\n        \n        .btns{\n            margin-left: 25px;\n            button{\n                width: 13vw;\n                height: 7vh;\n            }\n        }\n    }\n    .description{\n        \n        margin-right: 5vw;\n    }\n}\n}\nmain{ \n     \n.bio{\n    height: 800px;\n    .myStory{\n        .sumDiv{\n            P{\n                font-size: 14px;\n                font-weight: bold;\n            }\n        }\n    }\n    .bookList{\n        .bookDiv{\n            .bookDescription{\n                width: 45vw;\n            }\n            li{\n                font-size: 15px;\n            }\n        }\n      \n    }\n    .hobbies{\n\n   .hobbyDiv{\n    .list{\n        font-weight: bold;\n        li{\n            font-size: 15px;\n        }\n        p{\n            font-size: 11px;\n        }\n    }\n   }\n}\n}\n.imgSlider{\n    img{\n        height: 15vh;\n    }\n}\n}\n }\n@media (max-width: 700px){\n      \n    body{\n        width: 100%;\n         \n    }\n    header{\n         \n         \n        button{\n        h2{\n            font-size: 24px;\n        }\n    }\n    }\n    .header{\n        \n         \n        padding: 5px;\n        display: flex;\n        flex-wrap: wrap;\n         justify-content: center;\n         align-items: center;\n        .portrait{\n            margin-top: 5vh;\n            height: 160px;\n            \n        }\n        h2{\n            \n            font-size: 24px;\n        }\n        p{\n          \n            font-size: 10px;\n            line-height: 12px;\n        }\n    }\n    .skills{\n      \n \n      \n    .wrap{\n        margin-top: 3vh;\n        display: flex;\n        flex-wrap: wrap;\n        margin-left: 0;\n       justify-content: space-between;\n       \n        .card{\n          .webpack{\n            margin-left: 2vw;\n          }\n            .html{\n                margin-left: 7px;\n              }\n              .css{\n                margin-left: 10px;\n              }\n            img{\n            max-width: 40px;\n            max-height: 40px;\n        }\n    }\n}\n        h2{\n            display: none;\n        }\n    }\n    .projects{\n        grid-template-columns: 1fr;\n        \n        .projectCard{\n            flex-direction: column;\n            .links{\n                \n                img{\n                   width: 250px;\n                   margin-left: 25vw;\n                   height: auto;\n                }\n                .btns{\n                    \n                button{\n                    width: 40vw;\n                    height: 40px;\n                    \n                    font-weight: normal;\n                }\n                }\n            }\n            .description{\n                margin-left: 15vw;\n                h2{\n                    margin-left: 20vw;\n                    color:  #FFBF00;\n                }\n            }\n             \n           padding: 25px;     \n              \n            \n        }\n        \n      \n            .description{\n                margin-left: 20px;\n                h2{\n                    font-size: 16px;\n                }\n                p{\n                    font-size: 10px;\n                }\n            }\n         \n    }\n    .side{\n        .sideBar{\n            width: 80%;\n        }\n        #active{\n            animation: none;\n        }\n        #deActive{\n            animation: none;\n        }\n    }\n\n\n//ABOUT ME CSS\nheader{\n    z-index: 1;\n      \n       width: 100%;\n       .bosnianWar{\n           display: none;\n       }\n       h2{\n           font-size: 15px;\n       }\n   }\nmain{\n    \n   width: 100%;\n    display: flex;\n    flex-direction: column;\n    \n    \n    .quote{\n       margin-left: 10vw;\n        \n    }\n/* #animate{\n    animation: none;\n    display: block;\n}\n#reverse{\n    animation: none;\n    display: block;\n} */\n.bio{\n    border-top:#13274F solid 5px;\n    z-index: 0;\n    min-height: 420vh;\n     \n    flex-direction: column;\n    pointer-events: none;\n    .bookList{\n        button{\n            font-size: 20px;\n            color: black;\n        }\n        border: none;\n        \n        .bookDiv{\n       \n            z-index: 0;\n            padding: 0;\n            \n            display: block;\n            li{\n                pointer-events: none;\n               \n            .bookDescription{\n                left: -3%;\n                z-index: 0;\n                width: 80vw;\n                height: 55px;\n                background-color:#F4BB44;\n                border: none;\n                font-size: 10px;\n                position: relative;\n                display: block;\n              \n            }\n        }\n           \n        }\n    }\n        .hobbies{\n           margin-bottom: 50vh;\n            width: 100%;\n            border-top: #13274F 5px solid;\n            border-bottom:none;\n            padding: 0;\n            .hobbyDiv{\n                display: block;\n                 width: 100%;\n                .list{\n                    li{\n                        font-weight: bold;\n                        margin-bottom: 5vh;\n                        \n                     p{\n                        width: 100%;\n                     }\n                }\n            }\n\n            }\n        }\n        .myStory{\n          border-top: 5px solid #13274F;\n         \n          border-left: none;\n          border-right: none;\n          border-bottom: none;\n            button{\n                border: none;\n            }\n            width: 94%;\n           \n            .sumDiv{\n                width: 80vw;\n                height: 60vh;\n                display: block;\n                p{\n                    font-size: 15px;\n                }\n                 \n            }\n        }\n      \n    \n}\n.imgSlider{\n    img{\n        height: 25vh;\n         \n    }\n}\n}\n\n*{\n   \n    margin: 0;\n    padding: 0;\n}\n}\n@media (max-width:445px){\n     \n    header{\n     z-index: 1;\n        margin: 0;\n        width: 100%;\n        .bosnianWar{\n            display: none;\n        }\n        h2{\n            font-size: 15px;\n        }\n    }\n    main{\n       \n        .bio{\n            .bookList{\n                button{\n                    font-size: 20px;\n                    color: black;\n                }\n                .bookDiv{\n                    .bookDescription{\n                        z-index: auto;\n                    }\n                }\n            }\n            z-index: auto;\n             padding: 0;\n            margin: 0;\n            margin-bottom: 50vh;\n           \n        }\n        .sliderWrap{\n    .imgSlider{\n        z-index: auto;\n        img{\n            height: 20vh;\n        }\n    }\n}\n}\n.side{\n    z-index: 10;\n.sideBar{\n   z-index: 2;\n}\n}\n    }\n\n"],"sourceRoot":""}]);
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
        let vw = 80
        if(count ==-6){
            count = 0
            vw = vw*count
            slider.style.transform = `translateX(${vw}vw)`
        }else{
            count--
            vw = vw*count
            slider.style.transform = `translateX(${vw}vw)`
            }
    },5000)
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
                img.id = 'java'
                p.innerHTML = img.title
                p.classList.add('java')
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
                p.classList.add('html')

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
               
                p.classList.add('css')
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
                p.classList.add('sql')
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
                img.classList.add('webpack')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFlBQVksS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxRQUFRLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsc0JBQXNCLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1B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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQ0FBSTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMENBQUc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlDQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBRztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlDQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9ib29rcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2J1aWxkTWFpbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2hvYmJpZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9pbWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvc2tpbGxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5mb290ZXIge1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAxNXB4IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xufVxuZm9vdGVyIGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xufVxuXG5oZWFkZXIge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCB3aGl0ZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5oZWFkZXIgc3ZnIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbmhlYWRlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAxNXZ3O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5oZWFkZXIgLm5hbWU6aG92ZXIge1xuICBjb2xvcjogI0ZGRDcwMDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmhlYWRlciAucG9ydHJhaXQge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMzIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uaGVhZGVyIC53aG9BbUkge1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmhlYWRlciAud2hvQW1JIHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2tpbGxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDE1cHggYmxhY2s7XG59XG4uc2tpbGxzIGgyIHtcbiAgbWFyZ2luLWxlZnQ6IDQzJTtcbn1cbi5za2lsbHMgLndyYXAge1xuICBtYXJnaW4tbGVmdDogM3Z3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XG59XG4uc2tpbGxzIC5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5za2lsbHMgLmNhcmQgaW1nIHtcbiAgcGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiAzdnc7XG4gIG1pbi1oZWlnaHQ6IDZ2aDtcbiAgbWF4LXdpZHRoOiAzdnc7XG4gIG1heC13aWR0aDogNnZoO1xufVxuLnNraWxscyAuY2FyZCAuaHRtbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLnNraWxscyAuY2FyZCAuY3NzIHtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG4uc2tpbGxzIC5jYXJkIC5qYXZhIHtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cblxuLnByb2plY3RzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQge1xuICBwYWRkaW5nOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDIwdnc7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCRjAwO1xuICBib3JkZXI6ICNGRkJGMDAgMXB4IHNvbGlkO1xuICB3aWR0aDogOXZ3O1xuICBoZWlnaHQ6IDV2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIC5idG5zIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmRlc2NyaXB0aW9uIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogNXZ3O1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAuZGVzY3JpcHRpb24gcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBtYXJnaW4tdG9wOiAydmg7XG59XG5cbi5mb3JtRGl2IHtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMTVweCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mb3JtRGl2IC5jb250YWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDM1dnc7XG59XG4uZm9ybURpdiAuY29udGFjdCBoMyB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG59XG4uZm9ybURpdiAuY29udGFjdCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmZvcm1EaXYgZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDI1dnc7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZm9ybURpdiBmb3JtIGxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZvcm1EaXYgZm9ybSBpbnB1dCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDE1dnc7XG59XG4uZm9ybURpdiBmb3JtIHRleHRhcmVhIHtcbiAgd2lkdGg6IDIwdnc7XG59XG4uZm9ybURpdiBmb3JtIC5zdWJtaXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwdnc7XG4gIGhlaWdodDogNHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCRjAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvcm1EaXYgZm9ybSAuc3VibWl0OmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xufVxuXG4uc2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uc2lkZSAuc2lkZUJhciB7XG4gIHdpZHRoOiAyNXZ3O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjQ1NEY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogYXV0bztcbn1cbi5zaWRlIC5zaWRlQmFyIC5yZW1vdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0NTRGO1xuICBib3JkZXI6IG5vbmU7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lkZSAuc2lkZUJhciAuYnRuRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zaWRlIC5zaWRlQmFyIC5idG5EaXYgLmJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0NTRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zaWRlIC5zaWRlQmFyIC5idG5EaXYgLmJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjRkZCRjAwO1xufVxuLnNpZGUgI2FjdGl2ZSB7XG4gIGFuaW1hdGlvbjogb3BlblNpZGUgMXM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xufVxuLnNpZGUgI2RlQWN0aXZlIHtcbiAgYW5pbWF0aW9uOiBjbG9zZVNpZGUgMXM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcbn1cblxubWFpbiAuYmlvIHtcbiAgei1pbmRleDogNTtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbn1cbm1haW4gLmJpbyBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5tYWluIC5iaW8gYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxubWFpbiAuYmlvIC5teVN0b3J5IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXI6IHNvbGlkIDVweCAjMTMyNzRGO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBwYWRkaW5nOiAydmggM3Z3O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDMzJTtcbn1cbm1haW4gLmJpbyAubXlTdG9yeSBidXR0b24ge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEJCNDQ7XG59XG5tYWluIC5iaW8gLmJvb2tMaXN0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMzMlO1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3JkZXI6IDVweCBzb2xpZCAjMTMyNzRGO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxubWFpbiAuYmlvIC5ib29rTGlzdCBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG4gIHdpZHRoOiAxMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xufVxubWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiAuYm9va0Rlc2NyaXB0aW9uIHtcbiAgbGVmdDogMjUlO1xuICB6LWluZGV4OiAzO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMTMyNzRGO1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOHZ3O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDJ2dyAydmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5tYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTV2dztcbn1cbm1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYgb2wgbGk6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm1haW4gLmJpbyAuaG9iYmllcyB7XG4gIGJvcmRlci10b3A6ICMxMzI3NEYgNXB4IHNvbGlkO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDJ2aCAzdnc7XG4gIHdpZHRoOiAzMyU7XG59XG5tYWluIC5iaW8gLmhvYmJpZXMgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xufVxubWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCBsaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbm1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYgLmxpc3QgbGkgcCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDE1dnc7XG59XG5tYWluIC5xdW90ZSB7XG4gIG1hcmdpbi1sZWZ0OiAzMHZ3O1xuICBtYXJnaW4tdG9wOiAydmg7XG59XG5tYWluIC5mYW1pbHlBbGJ1bSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubWFpbiAuc2xpZGVyV3JhcCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5tYWluIC5zbGlkZXJXcmFwIC5pbWdTbGlkZXIge1xuICB3aWR0aDogMTAwMDAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxubWFpbiAuc2xpZGVyV3JhcCAuaW1nU2xpZGVyIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgaGVpZ2h0OiAyNXZoO1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbm1haW4gLmV4cGxhaW4ge1xuICBtYXJnaW46IDV2aCA1dnc7XG59XG5tYWluIC5leHBsYWluIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubWFpbiAuZXhwbGFpbiBwIHtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbkBrZXlmcmFtZXMgb3BlblNpZGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNsb3NlU2lkZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTc1MHB4KSB7XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3Mge1xuICAgIG1hcmdpbi1sZWZ0OiA2dnc7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogM3Z3O1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIC5idG5zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEydnc7XG4gICAgaGVpZ2h0OiA2dmg7XG4gIH1cbiAgbWFpbiBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgbWFpbiBsaSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIG1haW4gbGkgcCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5za2lsbHMgLndyYXAge1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICB9XG4gIC5za2lsbHMgLndyYXAgLmNhcmQgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDZ2dztcbiAgICBtYXgtaGVpZ2h0OiAxMHZoO1xuICAgIG1pbi13aWR0aDogNnZ3O1xuICAgIG1pbi1oZWlnaHQ6IDZ2aDtcbiAgfVxuICAuc2tpbGxzIC53cmFwIC5jYXJkIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnNraWxscyAud3JhcCAuY2FyZCAuY3NzIHtcbiAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgfVxuICAuc2tpbGxzIC53cmFwIC5jYXJkIC5odG1sIHtcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgICB3aWR0aDogMzB2dztcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgLmJ0bnMgYnV0dG9uIHtcbiAgICB3aWR0aDogMTN2dztcbiAgICBoZWlnaHQ6IDd2aDtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG4gIH1cbiAgbWFpbiAuYmlvIHtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICB9XG4gIG1haW4gLmJpbyAubXlTdG9yeSAuc3VtRGl2IFAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IC5ib29rRGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiA0NXZ3O1xuICB9XG4gIG1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYgbGkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBtYWluIC5iaW8gLmhvYmJpZXMgLmhvYmJ5RGl2IC5saXN0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBtYWluIC5iaW8gLmhvYmJpZXMgLmhvYmJ5RGl2IC5saXN0IGxpIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCBwIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbiAgbWFpbiAuaW1nU2xpZGVyIGltZyB7XG4gICAgaGVpZ2h0OiAxNXZoO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgaGVhZGVyIGJ1dHRvbiBoMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5oZWFkZXIgLnBvcnRyYWl0IHtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgfVxuICAuaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIH1cbiAgLnNraWxscyAud3JhcCB7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAuc2tpbGxzIC53cmFwIC5jYXJkIC53ZWJwYWNrIHtcbiAgICBtYXJnaW4tbGVmdDogMnZ3O1xuICB9XG4gIC5za2lsbHMgLndyYXAgLmNhcmQgLmh0bWwge1xuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gIH1cbiAgLnNraWxscyAud3JhcCAuY2FyZCAuY3NzIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICAuc2tpbGxzIC53cmFwIC5jYXJkIGltZyB7XG4gICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLnNraWxscyBoMiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJvamVjdHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMjVweDtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyBpbWcge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjV2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgLmJ0bnMgYnV0dG9uIHtcbiAgICB3aWR0aDogNDB2dztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1dnc7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAuZGVzY3JpcHRpb24gaDIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHZ3O1xuICAgIGNvbG9yOiAjRkZCRjAwO1xuICB9XG4gIC5wcm9qZWN0cyAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIC5wcm9qZWN0cyAuZGVzY3JpcHRpb24gaDIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAucHJvamVjdHMgLmRlc2NyaXB0aW9uIHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuc2lkZSAuc2lkZUJhciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICAuc2lkZSAjYWN0aXZlIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbiAgLnNpZGUgI2RlQWN0aXZlIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbiAgaGVhZGVyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGhlYWRlciAuYm9zbmlhbldhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBoZWFkZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBtYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyogI2FuaW1hdGV7XG4gICAgICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgICNyZXZlcnNle1xuICAgICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH0gKi9cbiAgfVxuICBtYWluIC5xdW90ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gIH1cbiAgbWFpbiAuYmlvIHtcbiAgICBib3JkZXItdG9wOiAjMTMyNzRGIHNvbGlkIDVweDtcbiAgICB6LWluZGV4OiAwO1xuICAgIG1pbi1oZWlnaHQ6IDQyMHZoO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIG1haW4gLmJpbyAuYm9va0xpc3QgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIG1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYge1xuICAgIHotaW5kZXg6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IGxpIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IGxpIC5ib29rRGVzY3JpcHRpb24ge1xuICAgIGxlZnQ6IC0zJTtcbiAgICB6LWluZGV4OiAwO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIG1haW4gLmJpbyAuaG9iYmllcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAjMTMyNzRGIDVweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCBsaSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICB9XG4gIG1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYgLmxpc3QgbGkgcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgbWFpbiAuYmlvIC5teVN0b3J5IHtcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzEzMjc0RjtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB3aWR0aDogOTQlO1xuICB9XG4gIG1haW4gLmJpbyAubXlTdG9yeSBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBtYWluIC5iaW8gLm15U3RvcnkgLnN1bURpdiB7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIG1haW4gLmJpbyAubXlTdG9yeSAuc3VtRGl2IHAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBtYWluIC5pbWdTbGlkZXIgaW1nIHtcbiAgICBoZWlnaHQ6IDI1dmg7XG4gIH1cbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NDVweCkge1xuICBoZWFkZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGhlYWRlciAuYm9zbmlhbldhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBoZWFkZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBtYWluIC5iaW8ge1xuICAgIHotaW5kZXg6IGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNTB2aDtcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IC5ib29rRGVzY3JpcHRpb24ge1xuICAgIHotaW5kZXg6IGF1dG87XG4gIH1cbiAgbWFpbiAuc2xpZGVyV3JhcCAuaW1nU2xpZGVyIHtcbiAgICB6LWluZGV4OiBhdXRvO1xuICB9XG4gIG1haW4gLnNsaWRlcldyYXAgLmltZ1NsaWRlciBpbWcge1xuICAgIGhlaWdodDogMjB2aDtcbiAgfVxuICAuc2lkZSB7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgLnNpZGUgLnNpZGVCYXIge1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksU0FBQTtFQUNBLDhDQUFBO0FBREo7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFFSSxxQ0FBQTtFQU1BLHlCQXJCRztBQWFQO0FBR0k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQW5CRDtBQWtCUDs7QUFLQTtFQUVJLDZCQUFBO0VBRUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBSko7QUFLSztFQUNHLGlCQUFBO0VBQ0EsZUFBQTtBQUhSO0FBS0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUhSO0FBS0k7RUFDSSxjQUFBO0VBQ0ksaUJBQUE7RUFDRCxZQUFBO0VBQ0Esd0VBQUE7QUFIWDtBQUtJO0VBQ0ksY0FBQTtBQUhSOztBQU1BO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUhKO0FBS0k7RUFFRyxXQUFBO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUpSO0FBTUk7RUFDSSxlQUFBO0VBRUEsOENBQUE7RUFDQSxZQUFBO0FBTFI7QUFNUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUpaOztBQVNBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSwrQkFBQTtBQVBKO0FBUUk7RUFDSSxnQkFBQTtBQU5SO0FBU0k7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkRBQUE7QUFQUjtBQVlJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBVlI7QUFXUTtFQUVJLFlBQUE7RUFHQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFaWjtBQWNRO0VBQ0ksaUJBQUE7QUFaWjtBQWNRO0VBQ0ksaUJBQUE7QUFaWjtBQWNRO0VBQ0ksZ0JBQUE7QUFaWjs7QUFpQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQWRKO0FBZUk7RUFFSSxhQUFBO0VBQ0EsYUFBQTtBQWRSO0FBaUJZO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBZmhCO0FBa0JZO0VBZ0JJLGFBQUE7RUFFQSxtQkFBQTtBQWhDaEI7QUFlZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBYnBCO0FBZWdCO0VBQ0kseUJBekpiO0VBMEphLFlBQUE7QUFicEI7QUFxQlE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFuQlo7QUFxQlE7RUFFSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXBCWjs7QUEwQkk7RUFDSSxxQ0FBQTtFQUNBLHlCQUFBO0VBRUQsYUFBQTtBQXhCUDtBQXlCTztFQUNDLGlCQUFBO0VBQ0EsWUFBQTtFQVNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFdBQUE7QUFoQ1I7QUFxQlE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBbkJaO0FBcUJRO0VBQ0ksZUFBQTtBQW5CWjtBQTJCUTtFQUNJLGtCQUFBO0VBRUEsbUJBQUE7RUFJQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQTdCWjtBQXVCVztFQUNDLFlBQUE7QUFyQlo7QUEyQlk7RUFFSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBMUJoQjtBQTRCWTtFQUNJLFdBQUE7QUExQmhCO0FBNEJZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBMUJoQjtBQTRCWTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQTFCaEI7O0FBZ0NBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBN0JKO0FBaUNBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0QsYUFBQTtFQUNBLGFBQUE7QUFoQ0g7QUFpQ0c7RUFDQyx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUEvQko7QUFpQ0E7RUFDSSxhQUFBO0FBL0JKO0FBaUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQS9CUjtBQWlDSTtFQUNJLGNBQUE7QUEvQlI7QUFxQ0E7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDRCxVQUFBO0VBQ0MsOEJBQUE7QUFuQ0o7QUF1Q0E7RUFDSSx1QkFBQTtFQUNBLDhCQUFBO0FBckNKOztBQTZDQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUExQ0o7QUEyQ0c7RUFDQyxlQUFBO0FBekNKO0FBMkNHO0VBQ0MsWUFBQTtBQXpDSjtBQTRDSTtFQVNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFHRCxnQkFBQTtFQUVDLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQXJEUjtBQW1DUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNDLGtCQUFBO0VBQ0QsWUFBQTtFQUNBLHlCQUFBO0FBakNaO0FBaURJO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFoRFI7QUFpRFE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Msa0JBQUE7RUFDRixXQUFBO0VBQ0MseUJBQUE7QUEvQ1o7QUFvRFk7RUFDSSxTQUFBO0VBQ0MsVUFBQTtFQUNELHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFuRGhCO0FBcURZO0VBRUksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBcERoQjtBQXVEWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBckRoQjtBQTJERztFQUNDLDZCQUFBO0VBWUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQXBFSjtBQXdESTtFQUVJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNDLGtCQUFBO0VBQ0QsWUFBQTtFQUNBLHlCQUFBO0FBdkRSO0FBaUVRO0VBQ0ksZUFBQTtBQS9EWjtBQWdFUTtFQUNJLFlBQUE7RUFFRCxXQUFBO0FBL0RYO0FBc0VBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBcEVGO0FBc0VBO0VBQ0ksNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBcEVKO0FBc0VBO0VBQ0csZ0JBQUE7QUFwRUg7QUFxRUE7RUFDSSxlQUFBO0VBRUEseUJBQUEsRUFBQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLHdCQUFBO0FBcEVKO0FBcUVJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFuRVI7QUF1RUE7RUFDRyxlQUFBO0FBckVIO0FBc0VJO0VBQ0ksa0JBQUE7QUFwRVI7QUFzRUk7RUFDSSxpQkFBQTtBQXBFUjs7QUF5RUE7RUFDSTtJQUNFLG9CQUFBO0VBdEVKO0VBd0VHO0lBQ0Usc0JBQUE7RUF0RUw7RUF3RUc7SUFDRyxvQkFBQTtFQXRFTjtBQUNGO0FBd0VBO0VBQ0k7SUFDSSxvQkFBQTtJQUNBLGNBQUE7RUF0RU47RUF3RUU7SUFDSSxvQkFBQTtJQUNBLGFBQUE7RUF0RU47QUFDRjtBQXdFQTtFQUVRO0lBQ0ksc0JBQUE7RUF2RVY7RUF3RVU7SUFJSSxnQkFBQTtFQXpFZDtFQXNFYztJQUNJLGdCQUFBO0VBcEVsQjtFQXdFa0I7SUFDSSxXQUFBO0lBQ0EsV0FBQTtFQXRFdEI7RUE2RU07SUFDSSxlQUFBO0VBM0VWO0VBNkVNO0lBQ0ksZUFBQTtFQTNFVjtFQTRFVTtJQUNJLGVBQUE7RUExRWQ7QUFDRjtBQStFQztFQUVPO0lBQ0ksaUJBQUE7RUE5RVY7RUFpRk87SUFDRyxjQUFBO0lBQ0EsZ0JBQUE7SUFDQyxjQUFBO0lBQ0EsZUFBQTtFQS9FWDtFQWlGTTtJQUNJLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQS9FVjtFQWlGTztJQUNHLGlCQUFBO0VBL0VWO0VBaUZPO0lBQ0csaUJBQUE7RUEvRVY7RUFxRkU7SUFFSSxzQkFBQTtFQXBGTjtFQXFGTTtJQUNJLGdCQUFBO0VBbkZWO0VBb0ZVO0lBQ0ksZ0JBQUE7SUFDQSxXQUFBO0VBbEZkO0VBcUZNO0lBQ0ksaUJBQUE7RUFuRlY7RUFvRlU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtFQWxGZDtFQXNGRTtJQUVJLGlCQUFBO0VBckZOO0VBMkZGO0lBQ0ksYUFBQTtFQXpGRjtFQTRGVTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQTFGZDtFQWdHVTtJQUNJLFdBQUE7RUE5RmQ7RUFnR1U7SUFDSSxlQUFBO0VBOUZkO0VBc0dFO0lBQ0ksaUJBQUE7RUFwR047RUFxR007SUFDSSxlQUFBO0VBbkdWO0VBcUdNO0lBQ0ksZUFBQTtFQW5HVjtFQTBHRTtJQUNJLFlBQUE7RUF4R047QUFDRjtBQTRHQTtFQUVJO0lBQ0ksV0FBQTtFQTNHTjtFQWtITTtJQUNJLGVBQUE7RUFoSFY7RUFvSEU7SUFHSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7SUFDQyx1QkFBQTtJQUNBLG1CQUFBO0VBcEhQO0VBcUhNO0lBQ0ksZUFBQTtJQUNBLGFBQUE7RUFuSFY7RUFzSE07SUFFSSxlQUFBO0VBckhWO0VBdUhNO0lBRUksZUFBQTtJQUNBLGlCQUFBO0VBdEhWO0VBNkhFO0lBQ0ksZUFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtJQUNELDhCQUFBO0VBM0hMO0VBOEhRO0lBQ0UsZ0JBQUE7RUE1SFY7RUE4SFU7SUFDSSxnQkFBQTtFQTVIZDtFQThIWTtJQUNFLGlCQUFBO0VBNUhkO0VBOEhVO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VBNUhWO0VBZ0lNO0lBQ0ksYUFBQTtFQTlIVjtFQWlJRTtJQUNJLDBCQUFBO0VBL0hOO0VBaUlNO0lBQ0ksc0JBQUE7SUEwQkQsYUFBQTtFQXhKVDtFQWlJYztJQUNHLFlBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUEvSGpCO0VBbUljO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFFQSxtQkFBQTtFQWxJbEI7RUFzSVU7SUFDSSxpQkFBQTtFQXBJZDtFQXFJYztJQUNJLGlCQUFBO0lBQ0EsY0FBQTtFQW5JbEI7RUE2SVU7SUFDSSxpQkFBQTtFQTNJZDtFQTRJYztJQUNJLGVBQUE7RUExSWxCO0VBNEljO0lBQ0ksZUFBQTtFQTFJbEI7RUFnSk07SUFDSSxVQUFBO0VBOUlWO0VBZ0pNO0lBQ0ksZUFBQTtFQTlJVjtFQWdKTTtJQUNJLGVBQUE7RUE5SVY7RUFvSkY7SUFDSSxVQUFBO0lBRUcsV0FBQTtFQW5KTDtFQW9KSztJQUNJLGFBQUE7RUFsSlQ7RUFvSks7SUFDSSxlQUFBO0VBbEpUO0VBcUpGO0lBRUcsV0FBQTtJQUNDLGFBQUE7SUFDQSxzQkFBQTtJQU9KOzs7Ozs7O09BQUE7RUFuSkU7RUErSUU7SUFDRyxpQkFBQTtFQTdJTDtFQXdKRjtJQUNJLDZCQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0lBRUEsc0JBQUE7SUFDQSxvQkFBQTtFQXZKRjtFQXdKRTtJQUtJLFlBQUE7RUExSk47RUFzSk07SUFDSSxlQUFBO0lBQ0EsWUFBQTtFQXBKVjtFQXdKTTtJQUVJLFVBQUE7SUFDQSxVQUFBO0lBRUEsY0FBQTtFQXhKVjtFQXlKVTtJQUNJLG9CQUFBO0VBdkpkO0VBeUpVO0lBQ0ksU0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUF2SmQ7RUE4Sk07SUFDRyxtQkFBQTtJQUNDLFdBQUE7SUFDQSw2QkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFQTVKVjtFQTZKVTtJQUNJLGNBQUE7SUFDQyxXQUFBO0VBM0pmO0VBNkprQjtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7RUEzSnRCO0VBNkptQjtJQUNHLFdBQUE7RUEzSnRCO0VBa0tNO0lBQ0UsNkJBQUE7SUFFQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFJRSxVQUFBO0VBcEtWO0VBaUtVO0lBQ0ksWUFBQTtFQS9KZDtFQW1LVTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQWpLZDtFQWtLYztJQUNJLGVBQUE7RUFoS2xCO0VBeUtFO0lBQ0ksWUFBQTtFQXZLTjtFQTZLRjtJQUVJLFNBQUE7SUFDQSxVQUFBO0VBNUtGO0FBQ0Y7QUE4S0E7RUFFSTtJQUNDLFVBQUE7SUFDRyxTQUFBO0lBQ0EsV0FBQTtFQTdLTjtFQThLTTtJQUNJLGFBQUE7RUE1S1Y7RUE4S007SUFDSSxlQUFBO0VBNUtWO0VBaUxNO0lBWUksYUFBQTtJQUNDLFVBQUE7SUFDRCxTQUFBO0lBQ0EsbUJBQUE7RUExTFY7RUE2S2M7SUFDSSxlQUFBO0lBQ0EsWUFBQTtFQTNLbEI7RUE4S2tCO0lBQ0ksYUFBQTtFQTVLdEI7RUF1TEU7SUFDSSxhQUFBO0VBckxOO0VBc0xNO0lBQ0ksWUFBQTtFQXBMVjtFQXlMRjtJQUNJLFdBQUE7RUF2TEY7RUF3TEY7SUFDRyxVQUFBO0VBdExEO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiIFxcbiRiYXNlOiAjMzQzNDM0O1xcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICBcXG59XFxuIFxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzM0MzQzNDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgIFxcbn1cXG5mb290ZXJcXG57XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDE1cHggd2hpdGU7XFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlO1xcbiAgICB9XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlO1xcbn1cXG5oZWFkZXJ7XFxuICAgIFxcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCB3aGl0ZTtcXG4gICBcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICBzdmd7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgIH1cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAubmFtZXsgXFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTV2dztcXG4gICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgICAgIH1cXG4gICAgLm5hbWU6aG92ZXJ7XFxuICAgICAgICBjb2xvcjogI0ZGRDcwMDtcXG4gICAgfVxcbn1cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICBcXG4gICAgLnBvcnRyYWl0e1xcbiAgICBcXG4gICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICB3aWR0aDphdXRvO1xcbiAgICAgICAgaGVpZ2h0OiAzMjFweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG4gICAgLndob0FtSXtcXG4gICAgICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgXFxuICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuLnNraWxsc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICBcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTVweCBibGFjaztcXG4gICAgaDJ7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNDMlO1xcbiAgICB9XFxuXFxuICAgIC53cmFwe1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDN2dztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgICAgICAgIFxcbiAgICBcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIC5jYXJke1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBpbWd7XFxuICAgICAgICAgXFxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogM3Z3O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDZ2aDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDN2dztcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDZ2aDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5odG1se1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmNzc3tcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTNweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5qYXZhe1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgfVxcbn1cXG4ucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIC5wcm9qZWN0Q2FyZHtcXG4gICAgICAgXFxuICAgICAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIFxcbiAgICAgICAgLmxpbmtze1xcbiAgICAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwdnc7XFxuICAgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuYnRuc3tcXG4gICAgICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxdmg7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCRjAwO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAjRkZCRjAwIDFweCBzb2xpZDtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5dnc7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NXZoO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgIGgye1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICB9XFxufVxcbiBcXG4gICAgLmZvcm1EaXZ7XFxuICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAxNXB4IHdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcXG4gICAgICAgIFxcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAuY29udGFjdHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgaDN7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XFxuICAgICAgICB9XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIH1cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgIFxcbiAgICAgICAgd2lkdGg6MzV2dyA7XFxuICAgICAgICBcXG4gICAgICAgfVxcbiAgICAgICAgZm9ybXtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICBsYWJlbHtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICB9XFxuICAgICAgICAgICAgd2lkdGg6IDI1dnc7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgICAgICAgICBpbnB1dHtcXG4gICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTV2dztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgdGV4dGFyZWF7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuc3VibWl0e1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNHZoO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkJGMDA7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5zdWJtaXQ6aG92ZXJ7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcXG4gICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbi5zaWRle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBcXG4gIFxcbiAgIFxcbi5zaWRlQmFye1xcbiAgICB3aWR0aDogMjV2dztcXG4gIFxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IFxcdCMzNjQ1NEY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICBkaXNwbGF5OiBub25lO1xcbiAgIHotaW5kZXg6IGF1dG87XFxuICAgLnJlbW92ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXFx0IzM2NDU0RjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnRuRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgXFxuICAgIC5idG57XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IFxcdCMzNjQ1NEY7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG4gICAgLmJ0bjpob3ZlcntcXG4gICAgICAgIGNvbG9yOiAgI0ZGQkYwMDtcXG4gICAgfVxcbn1cXG4gXFxuICBcXG59XFxuI2FjdGl2ZXtcXG4gICAgYW5pbWF0aW9uOiBvcGVuU2lkZSAxcztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgIHotaW5kZXg6IDI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcXG4gIFxcbiAgICBcXG59ICBcXG4jZGVBY3RpdmV7XFxuICAgIGFuaW1hdGlvbjogY2xvc2VTaWRlIDFzO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XFxufVxcbn1cXG5cXG5tYWlue1xcbiAgIFxcbiBcXG4gICAgXFxuLmJpb3tcXG4gICAgei1pbmRleDogNTtcXG4gICAgaGVpZ2h0OiA3MDBweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICBidXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICB9XFxuICAgYnV0dG9uOmhvdmVye1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgfVxcbiAgICBcXG4gICAgLm15U3Rvcnl7XFxuICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEJCNDQ7XFxuICAgICAgICB9XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCA1cHggIzEzMjc0RjtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgIFxcbiAgICAgICAgXFxuICAgICAgIHBhZGRpbmc6MnZoIDN2dztcXG4gICAgICAgXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICB3aWR0aDogMzMlO1xcbiAgICAgICAgIFxcblxcbiAgICB9XFxuICAgIC5ib29rTGlzdHtcXG4gICAgICAgICBcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDMzJTtcXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjMTMyNzRGO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gICAgICAgICAgIHdpZHRoOiAxMHZ3O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEJCNDQ7XFxuICAgICAgICB9XFxuICAgICAgICAuYm9va0RpdntcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIC5ib29rRGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgIGxlZnQ6IDI1JTtcXG4gICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMxMzI3NEY7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4dnc7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJ2dyAydmg7ICAgICBcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgbGl7XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBvbHtcXG4gICAgICAgICAgICBsaTpob3ZlcntcXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICB9XFxuICAgLmhvYmJpZXN7XFxuICAgIGJvcmRlci10b3A6ICMxMzI3NEYgNXB4IHNvbGlkO1xcbiAgICBcXG4gICAgYnV0dG9ue1xcbiAgICAgICBcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcXG4gICAgfVxcbiAgICAgXFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzoydmggM3Z3O1xcbiAgICB3aWR0aDogMzMlO1xcbiAgICAgXFxuICAgIC5ob2JieURpdntcXG4gICAgICAgICBcXG4gICAgLmxpc3R7XFxuICAgICAgICBsaXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgd2lkdGg6IDE1dnc7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgfVxcbn1cXG4gICB9XFxufVxcbi5xdW90ZXtcXG4gIG1hcmdpbi1sZWZ0OiAzMHZ3O1xcbiAgbWFyZ2luLXRvcDogMnZoO1xcbn1cXG4uZmFtaWx5QWxidW17XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zbGlkZXJXcmFwe1xcbiAgIG92ZXJmbG93OiBoaWRkZW47XFxuLmltZ1NsaWRlcntcXG4gICAgd2lkdGg6IDEwMDAwMHZ3O1xcbiAgICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICBpbWd7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgICAgICAgaGVpZ2h0OiAyNXZoO1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICB9XFxufVxcbn1cXG4uZXhwbGFpbntcXG4gICBtYXJnaW46IDV2aCA1dnc7XFxuICAgIGgye1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIHB7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgfVxcbn1cXG59XFxuXFxuQGtleWZyYW1lcyBvcGVuU2lkZSB7XFxuICAgIGZyb217XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIH1cXG4gICAgIDcwJXtcXG4gICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4xKTtcXG4gICAgIH1cXG4gICAgIHRve1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgICB9XFxufVxcbkBrZXlmcmFtZXMgY2xvc2VTaWRle1xcbiAgICBmcm9te1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICB0b3tcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTc1MHB4KXtcXG4gICAgLnByb2plY3Rze1xcbiAgICAgICAgLnByb2plY3RDYXJke1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgLmxpbmtze1xcbiAgICAgICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogM3Z3O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2dnc7XFxuICAgICAgICAgICAgICAgIC5idG5ze1xcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMnZ3O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNnZoO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIG1haW57XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICAgIH1cXG4gICAgICAgIGxpe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICBwe1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG4gQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCl7XFxuICAgIC5za2lsbHN7XFxuICAgICAgICAud3JhcHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogODBweDtcXG4gICAgICAgICAgICAuY2FyZHtcXG4gICAgICAgICAgICAgIFxcbiAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDZ2dztcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMHZoO1xcbiAgICAgICAgICAgICBtaW4td2lkdGg6IDZ2dztcXG4gICAgICAgICAgICAgbWluLWhlaWdodDogNnZoO1xcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgfVxcbiAgICAgICAgIC5jc3N7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XFxuICAgICAgICAgfVxcbiAgICAgICAgIC5odG1se1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xcbiAgICAgICAgIH1cXG4gICAgfVxcbn1cXG59XFxuLnByb2plY3Rze1xcbiAgICAucHJvamVjdENhcmR7XFxuICAgICAgICBcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAubGlua3N7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAydnc7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLmJ0bnN7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTN2dztcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3dmg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgIFxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1dnc7XFxuICAgIH1cXG59XFxufVxcbm1haW57IFxcbiAgICAgXFxuLmJpb3tcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgLm15U3Rvcnl7XFxuICAgICAgICAuc3VtRGl2e1xcbiAgICAgICAgICAgIFB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5ib29rTGlzdHtcXG4gICAgICAgIC5ib29rRGl2e1xcbiAgICAgICAgICAgIC5ib29rRGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NXZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICBcXG4gICAgfVxcbiAgICAuaG9iYmllc3tcXG5cXG4gICAuaG9iYnlEaXZ7XFxuICAgIC5saXN0e1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBsaXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgIH1cXG59XFxufVxcbi5pbWdTbGlkZXJ7XFxuICAgIGltZ3tcXG4gICAgICAgIGhlaWdodDogMTV2aDtcXG4gICAgfVxcbn1cXG59XFxuIH1cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAgIFxcbiAgICBib2R5e1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgXFxuICAgIH1cXG4gICAgaGVhZGVye1xcbiAgICAgICAgIFxcbiAgICAgICAgIFxcbiAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgaDJ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIH1cXG4gICAgLmhlYWRlcntcXG4gICAgICAgIFxcbiAgICAgICAgIFxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLnBvcnRyYWl0e1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgaDJ7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5za2lsbHN7XFxuICAgICAgXFxuIFxcbiAgICAgIFxcbiAgICAud3JhcHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDN2aDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICBcXG4gICAgICAgIC5jYXJke1xcbiAgICAgICAgICAud2VicGFja3tcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnZ3O1xcbiAgICAgICAgICB9XFxuICAgICAgICAgICAgLmh0bWx7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAuY3Nze1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuICAgICAgICBoMntcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5wcm9qZWN0c3tcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgXFxuICAgICAgICAucHJvamVjdENhcmR7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAubGlua3N7XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1dnc7XFxuICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuYnRuc3tcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDB2dztcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1dnc7XFxuICAgICAgICAgICAgICAgIGgye1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwdnc7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogICNGRkJGMDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgICAgcGFkZGluZzogMjVweDsgICAgIFxcbiAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICBcXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICAgICAgICAgICAgICBoMntcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBwe1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgIFxcbiAgICB9XFxuICAgIC5zaWRle1xcbiAgICAgICAgLnNpZGVCYXJ7XFxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIH1cXG4gICAgICAgICNhY3RpdmV7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgI2RlQWN0aXZle1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcblxcbi8vQUJPVVQgTUUgQ1NTXFxuaGVhZGVye1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICAgIFxcbiAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgLmJvc25pYW5XYXJ7XFxuICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICB9XFxuICAgICAgIGgye1xcbiAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICB9XFxuICAgfVxcbm1haW57XFxuICAgIFxcbiAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgXFxuICAgIC5xdW90ZXtcXG4gICAgICAgbWFyZ2luLWxlZnQ6IDEwdnc7XFxuICAgICAgICBcXG4gICAgfVxcbi8qICNhbmltYXRle1xcbiAgICBhbmltYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jcmV2ZXJzZXtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59ICovXFxuLmJpb3tcXG4gICAgYm9yZGVyLXRvcDojMTMyNzRGIHNvbGlkIDVweDtcXG4gICAgei1pbmRleDogMDtcXG4gICAgbWluLWhlaWdodDogNDIwdmg7XFxuICAgICBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIC5ib29rTGlzdHtcXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgfVxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgXFxuICAgICAgICAuYm9va0RpdntcXG4gICAgICAgXFxuICAgICAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIGxpe1xcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAuYm9va0Rlc2NyaXB0aW9ue1xcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMyU7XFxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0Y0QkI0NDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICBcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAgICAgLmhvYmJpZXN7XFxuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHZoO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJvcmRlci10b3A6ICMxMzI3NEYgNXB4IHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgIC5ob2JieURpdntcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgLmxpc3R7XFxuICAgICAgICAgICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgcHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLm15U3Rvcnl7XFxuICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMTMyNzRGO1xcbiAgICAgICAgIFxcbiAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB3aWR0aDogOTQlO1xcbiAgICAgICAgICAgXFxuICAgICAgICAgICAgLnN1bURpdntcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwdnc7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIHB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICBcXG4gICAgXFxufVxcbi5pbWdTbGlkZXJ7XFxuICAgIGltZ3tcXG4gICAgICAgIGhlaWdodDogMjV2aDtcXG4gICAgICAgICBcXG4gICAgfVxcbn1cXG59XFxuXFxuKntcXG4gICBcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6NDQ1cHgpe1xcbiAgICAgXFxuICAgIGhlYWRlcntcXG4gICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIC5ib3NuaWFuV2Fye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICBoMntcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgbWFpbntcXG4gICAgICAgXFxuICAgICAgICAuYmlve1xcbiAgICAgICAgICAgIC5ib29rTGlzdHtcXG4gICAgICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5ib29rRGl2e1xcbiAgICAgICAgICAgICAgICAgICAgLmJvb2tEZXNjcmlwdGlvbntcXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHotaW5kZXg6IGF1dG87XFxuICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwdmg7XFxuICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgIC5zbGlkZXJXcmFwe1xcbiAgICAuaW1nU2xpZGVye1xcbiAgICAgICAgei1pbmRleDogYXV0bztcXG4gICAgICAgIGltZ3tcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwdmg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxufVxcbi5zaWRle1xcbiAgICB6LWluZGV4OiAxMDtcXG4uc2lkZUJhcntcXG4gICB6LWluZGV4OiAyO1xcbn1cXG59XFxuICAgIH1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBidWlsZEJvb2tzIGZyb20gXCIuL2Jvb2tzXCJcbmltcG9ydCBidWlsZEhvYmJpZXMgZnJvbSBcIi4vaG9iYmllc1wiXG5pbXBvcnQgYnVpbGRJbWFnZVNsaWRlciBmcm9tIFwiLi9pbWdcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRBYm91dE1lKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGNvbnN0IGJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gYFRoZXJlIGlzIHNvbWUgZ29vZCBpbiB0aGlzIHdvcmxkPGJyPiBhbmQgaXQncyB3b3J0aCBmaWdodGluZyBmb3IuICAgIC1KLlIuUiBUb2xraWVuIGBcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdxdW90ZScpXG4gICAgYmlvLmNsYXNzTGlzdC5hZGQoJ2JpbycpXG4gICAgY29uc3QgbXlTdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbXlTdG9yeS5jbGFzc0xpc3QuYWRkKCdteVN0b3J5JylcbiAgICBjb25zdCBteUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgbXlIZWFkaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgIGlmKHN1bW1Db250YWluZXIuaWQgPT0gJ2FuaW1hdGUnKXtcbiAgICAgICAgICAgICAgICAgICBzdW1tQ29udGFpbmVyLmlkID0gJ3JldmVyc2UnXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN1bW1Db250YWluZXIuaWQgPSAnYW5pbWF0ZSdcbiAgICAgICAgICAgIH0pXG4gICAgbXlIZWFkaW5nLmlubmVySFRNTCA9ICdNeSBTdG9yeSdcbiAgICAgICAgY29uc3QgYm9va0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IHN1bW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzdW1tQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1bURpdicpXG4gICAgICAgIGNvbnN0IGhvYmJ5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgaG9iYnlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9iYnlEaXYnKVxuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzdW1tYXJ5LmlubmVySFRNTCA9ICdNeSBmYW1pbHkgaXMgb3JpZ2luYWxseSBmcm9tIEJvc25pYSBhbmQgdGhlIG9ubHkgZmFtaWx5IHRoYXQgbGl2ZXMgaW4gdGhlIHN0YXRlcyBpcyBteSBtb3RoZXIgYW5kIHNpc3Rlci4gV2hlbiBJIHdhcyBpbiBoaWdoc2Nob29sIEkgd2FzIHVuc3VyZSB3aGF0IEkgd2FudGVkIHRvIGRvIHdpdGggbXkgbGlmZSB1bnRpbCBzZW5pb3IgeWVhciB3aGVuIEkgZ290IGludG8gQVBDUyBhbmQgbGVhcm5lZCBKYXZhLiBJIHF1aWNrbHkgbGVhcm5lZCBpdCB3YXMgd2hhdCBJIHdhbnRlZCB0byBkbyBmb3IgbWFqb3JpdHkgb2YgbXkgbGlmZS4gSSBhbHdheXMgbG92ZWQgYnVpbGRpbmcgc2luY2UgSSB3YXMgYSBraWQsIGFuZCBjb2Rpbmcga2VlcHMgbXkgaW5uZXIgY2hpbGQgYWxpdmUuIEkgdHJ5IHRvIGtlZXAgbXlzZWxmIGFzIGJ1c3kgYXMgcG9zc2libGUgZGF5IGluIGFuZCBkYXkgb3V0LCBhbmQgdHJ5IHRvIHRoaW5rIG9mIHByb2dyYW1taW5nIGFzIG15IG51bWJlciBvbmUgcHJpb3JpdHkuIEhvcGluZyB0byBldmVudHVhbGx5IHN0YXJ0IG15IG93biBjb21wYW55IHRoYXQgY291bGQgYnJhbmNoIG91dCBpbnRvIHZhcmlldHkgb2Ygd29yay4gSSBhbSBidWlsZGluZyBncmVhdCBjb25uZWN0aW9ucyB3aXRoIHBlb3BsZSBhbmQgdHJ5aW5nIHRvIGhlbHAgYXMgbWFueSBhcyBJIGNhbi4gSSBoYXZlIGEgYmVhdXRpZnVsIGdpcmxmcmllbmQgdGhhdCBJIGxvdmUgd2l0aCBteSB3aG9sZSBoZWFydCBhbmQgd2Ugc2hhcmUgYSB0b3duaG9tZSB3aXRoIHR3byBkb2dzIG5hbWVkIERlbGlsYWggYW5kIE5lbW8gYW5kIG15IGJyb3RoZXIgRGVhbi4nXG4gICAgY29uc3QgYm9va0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJvb2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2Jvb2tMaXN0JylcbiAgICBjb25zdCBib29rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJvb2tUaXRsZS5pbm5lckhUTUwgPSAnTXkgQm9va3MnXG4gICAgICAgICAgICAgICAgYm9va1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZihib29rQ29udGFpbmVyLmlkID09ICdhbmltYXRlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBib29rQ29udGFpbmVyLmlkID0gJ3JldmVyc2UnXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5pZCA9ICdhbmltYXRlJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgYm9va0xpc3QuYXBwZW5kQ2hpbGQoYm9va1RpdGxlKVxuICAgIGNvbnN0IG9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKVxuICAgIGJvb2tDb250YWluZXIuYXBwZW5kQ2hpbGQob2wpXG4gICAgYm9va0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib29rRGl2JylcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVhZC5pbm5lckhUTUwgPSAnQ3VycmVudGx5IFJlYWRpbmcnXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCb29rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2lybERyYWdvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgZ2lybERyYWdvbi5pbm5lckhUTUwgPSBcIkdpcmwgV2l0aCB0aGUgRHJhZ29uIFRhdHRvb1wiXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCb29rcy5hcHBlbmRDaGlsZChnaXJsRHJhZ29uKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdG9taWNIYWJpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICAgICAgICAgIGF0b21pY0hhYml0cy5pbm5lckhUTUwgPSAnQXRvbWljIEhhYml0cydcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJvb2tzLmFwcGVuZENoaWxkKGF0b21pY0hhYml0cylcbiAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50UmVhZClcbiAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50Qm9va3MpXG4gICAgICAgICAgICAgICAgICAgIGJvb2tMaXN0LmFwcGVuZENoaWxkKGJvb2tDb250YWluZXIpXG4gICAgICAgICAgICBjb25zdCBob2JieUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgaG9iYnlIZWFkaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgIGlmKGhvYmJ5Q29udGFpbmVyLmlkID09ICdhbmltYXRlJyl7XG4gICAgICAgICAgICAgICAgICAgIGhvYmJ5Q29udGFpbmVyLmlkID0gJ3JldmVyc2UnXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGhvYmJ5Q29udGFpbmVyLmlkID0gJ2FuaW1hdGUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaG9iYnlIZWFkaW5nLmlubmVySFRNTCA9ICdNeSBIb2JiaWVzJ1xuICAgICAgICAgICAgY29uc3QgaG9iYnlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGhvYmJ5TGlzdC5jbGFzc0xpc3QuYWRkKCdob2JiaWVzJylcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKVxuICAgICAgICAgICAgaG9iYnlMaXN0LmFwcGVuZENoaWxkKGhvYmJ5SGVhZGluZylcbiAgICAgICAgICAgIGhvYmJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpXG4gICAgICAgICAgICBob2JieUxpc3QuYXBwZW5kQ2hpbGQoaG9iYnlDb250YWluZXIpXG4gICAgbXlTdG9yeS5hcHBlbmRDaGlsZChteUhlYWRpbmcpXG4gICAgc3VtbUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdW1tYXJ5KVxuICAgIG15U3RvcnkuYXBwZW5kQ2hpbGQoc3VtbUNvbnRhaW5lcilcbiAgICBiaW8uYXBwZW5kQ2hpbGQoYm9va0xpc3QpXG4gICAgYmlvLmFwcGVuZENoaWxkKG15U3RvcnkpXG4gICAgYmlvLmFwcGVuZENoaWxkKGhvYmJ5TGlzdClcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYmlvKVxuICAgIGJ1aWxkQm9va3MoJ0F0b21pYyBIYWJpdHMnLCAnV3JpdHRlbiBieSBKYW1lcyBDbGVhcjxicj48YnI+IHdhcyBhIGJlbmVmaWNhbCBib29rIGZvciBtZSB0aGF0IHRhdWdodCBtZSBob3cgdG8gYnVpbGQgcG9zaXRpdmUgaGFiaXRzIGluY3JlbWVudGFsbHkgZWFjaCBkYXkuIFdhcyBhIGJpZyBoZWxwIGZvciBtZSB0byBrZWVwIGNvZGluZycsJ2h0dHBzOi8vamFtZXNjbGVhci5jb20vYXRvbWljLWhhYml0cycgKVxuICAgIGJ1aWxkQm9va3MoJ1RoZSBBdXRvYmlvZ3JhcGh5IG9mIE1hbGNvbSBYJywnV3JpdHRlbiBieSBBbGV4IEhhbGV5PGJyPjxicj5UaGlzIGJvb2sgdGF1Z2h0IG1lIGFsb3QgYWJvdXQgdGhlIFVuaXRlZCBzdGF0ZXMgZHVyaW5nIHRoZSBlYXJseSBwZXJpb2RzIGJlZm9yZSB0aGUgY2l2aWwgcmlnaHRzIG1vdmVtZW50IGFuZCBhbHNvIGFib3V0IHRoZSBtaXN1bmRlcnN0b29kIE1hbGNvbSBYLiBMZWFybmVkIGFib3V0IHRoZSBjcmVhdGlvbiBvZiB0aGUgTmF0aW9uIG9mIElzbGFtLCBhbmQgaG93IHByb2ZvdW5kIE1hbGNvbXMgbGlmZSB3YXMuJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGhlX0F1dG9iaW9ncmFwaHlfb2ZfTWFsY29sbV9YJylcbiAgICBidWlsZEJvb2tzKCdUaGUgNSBBTSBDbHViJywnV3JpdHRlbiBieSBSb2JpbiBTaGFybWE8YnI+PGJyPkEgZ3JlYXQgcmVhZCBjcmVhdGluZyBhIG5hcnJpdGl2ZSB0aGF0IGlzIGZ1bGwgb2YgaW5mb3JtYXRpb24gYWJvdXQgZ3JlYXRzLCBzaG93ZWQgdGhlIGJlbmVmaXRzIG9mIHdha2luZyB1cCBlYXJseSBhbmQgc3RhcnRpbmcgeW91ciBkYXkgYmVmb3JlIHRoZSBzdW4gcmlzZXMuIEN1cnJlbnRseSB3cml0aW5nIHRoaXMgYXQgNCBhbSBzbyBJIHRoaW5rIGl0IGRpZCBhIGdvb2Qgam9iIDopJywnaHR0cHM6Ly93d3cuYmxpbmtpc3QuY29tL2VuL2Jvb2tzL3RoZS01LWFtLWNsdWItZW4nKVxuICAgIGJ1aWxkQm9va3MoJ1RoZSBIb2JiaXQnLCdXcml0dGVuIGJ5IEouUi5SIFRvbGtpZW48YnI+PGJyPiBBIGNsYXNzaWMgc3RvcnkgdGhhdCB3YXMgbm90aGluZyBsaWtlIHRoZSBtb3ZpZScsJ2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RoZV9Ib2JiaXQnKVxuICAgIGJ1aWxkQm9va3MoJ0RlZXAgV29yaycsYFdyaXR0ZW4gYnkgQ2FsIE5ld3BvcnQ8YnI+PGJyPiBBIGJvb2sgY292ZXJpbmcgdGhlIHRvcGljIG9mIFwiRGVlcCBXb3JrXCIuIFRoaXMgd2FzIGEgZ29vZCByZWFkIGluZm9ybWluZyBtZSBvZiB0aGUgYmVuZWZpdCBvZiBjcmVhdGluZyBhIGRpc3RyYWN0aW9uIGZyZWUgZW52aXJvbm1lbnQgdGhhdCBhbGxvd3MgeW91IHRvIHdvcmsgd2l0aCBkZWVwbmVzcy4gVGhlIHVzZSBvZiB0YWN0aWNzIHN1Y2ggYXMgJ1BvbW9kb3JvJyBhcmUgdmVyeSBoZWxwZnVsIGZvciBwYWNpbmcgeW91cnNlbGYgYW5kIGFsbG93aW5nIHBlcmlvZHMgZm9yIHlvdSB0byByZXN0YCwnaHR0cHM6Ly93d3cuc2FtdWVsdGhvbWFzZGF2aWVzLmNvbS9ib29rLXN1bW1hcmllcy9idXNpbmVzcy9kZWVwLXdvcmsvJylcbiAgICBidWlsZEJvb2tzKCdDYW50IEh1cnQgTWUnLCdCeSBEYXZpZCBHb2dnaW5zPGJyPjxicj4gVGhpcyBib29rIGNvdmVycyBhbG90IG9mIHRoZSBsaWZlIG9mIHRoZSByZXRpcmVkIE5hdnkgU2VhbCBEYXZpZCBHb2dnaW5zLiBJIGdvdCBvdXQgb2YgdGhpcyBib29rIHRoZSBpZGVhIG9mIGEgdHJ1ZGdlIHRocm91Z2ggbWVudGFsaXR5IHdoZXJlIEkgbGVhcm5lZCB0byBrZWVwIHB1c2hpbmcgdGhyb3VnaCBoYXJkc2hpcCBhbmQgYnJlYWsgdGhyb3VnaCBiYXJyaWVycyBzZXQgYnkgeW91cnNlbGYnLCdodHRwczovL2RhdmlkZ29nZ2lucy5jb20vYm9vay8nKVxuICAgIGJ1aWxkQm9va3MoJ0RvbiBRdWl4b3RlJywgJ1dyaXR0ZW4gYnkgTWlndWVsIGRlIENlcnZhbnRlczxicj48YnI+IFRoaXMgb25lIHdhcyB0aGUgYm9vayBvZiB0aGUgeWVhciBmb3IgbWUuIEkgbG92ZWQgdGhlIHN0b3J5IGFuZCB0aGUgaW1hZ2VyeSBwcmVzZW50ZWQgZnJvbSB0aGUgYXV0aG9yIHdhcyBhbWF6aW5nLiBIb25lc3RseSB0aGUgZnVubmllc3QgYm9vayBJIGhhdmUgcmVhZCBhbmQgd2FzIHNhZCB0byBmaW5pc2ggaXQgYW5kIHB1dCBpdCBkb3duLiBXaWxsIGRlZmluZXRseSBiZSByZWFkaW5nIGFnYWluJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRG9uX1F1aXhvdGUnKVxuICAgIGJ1aWxkQm9va3MoJ1d1dGhlcmluZyBIZWlnaHRzJywnV3JpdHRlbiBieSBFbWlseSBCcm9udMOrPGJyPjxicj4gQSBjbGFzc2ljIHBvcnRyYXlpbmcgbG92ZSwgZGVjZXB0aW9uLCBhbmQgYSB2YXJpZXR5IG9mIGVtb3Rpb24uIEhlYXRoY2xpZmYgd2FzIGhvbmVzdGx5IHRoZSBiZXN0IGFudGFnb25pc3QgSSBoYXZlIHNlZW4gaW4gYSB3aGlsZS4gR29vZCByZWFkJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV3V0aGVyaW5nX0hlaWdodHMnKVxuICAgIGJ1aWxkQm9va3MoJ0FuaW1hbCBGYXJtJywgJ1dyaXR0ZW4gYnkgR2VvcmdlIE9yd2VsbDxicj48YnI+IEEgZ29vZCByZXJlYWQgYWZ0ZXIgYSBiaXQgb2YgdGltZSwgd2FzIGludGVyZXN0aW5nIHNlZWluZyB0aGUgY29tcGFyaXNvbiBvZiBjZXJ0YWluIHBvbGl0aWNhbCBzeXN0ZW1zIHRvIHRoZSBzZXR0aW5nIG9mIHRoZSBib29rJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQW5pbWFsX0Zhcm0nKSBcbiAgICAgICAgYnVpbGRIb2JiaWVzKCdHYXJkZW5pbmcnLCdJIGFtIGEgYXZpZCBnYXJkbmVyIGFuZCBJIHRyeSB0byBncm93IGEgdmFyaWV0eSBvZiBwbGFudHMsIGN1cnJlbnRseSBJIGFtIGV4Y2l0ZWQgdG8gaGFydmVzdCBteSBmaXJzdCB0b21hdG8gYW5kIGRpbGwgd2hlbiB0aGV5IGFyZSBib3RoIHJlYWR5JylcbiAgICAgICAgYnVpbGRIb2JiaWVzKCdHdWl0YXInLGBJIGhhdmUgYmVlbiBwcmFjdGljaW5nIGd1aXRhciBhIGRlY2VudCBhbW91bnQgbGF0ZWx5LCBjdXJyZW50IGxlYXJuaW5nIDxhIGhyZWYgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj10SDJ3Nk94eDBrUSc+RHVzdCBpbiB0aGUgV2luZDwvYT4gYW5kIGp1c3Qgc3RhcnRlZCB0byBsZWFybiBhIDxhIGhyZWYgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1aMmIxNXJ3R0JKYyc+bHVsbGFieTwvYT5gKVxuICAgICAgICBidWlsZEhvYmJpZXMoJ1BpYW5vJyxgSSBoYXZlIGJlZW4gcGxheWluZyBwaWFubyBzaW5jZSBzZW5pb3IgeWVhciBvZiBjb2xsZWdlIGFuZCBpdHMgcmVsYXhpbmcgdG8gcGxheS4gSSBhbSByZWFsbHkgaW50byBhbGwgbXVzaWMgYnV0IGZvciBwaWFubyBJIHVzdWFsbHkganVzdCBwbGF5IGNsYXNzaWNhbC4gVGhlIG9ubHkgc29uZyBJIGtub3cgZnVsbHkgaXMgPGEgaHJlZj0naHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0yV2Zhb3RTSzNtSSc+R3ltbm9wZWRpZSBuby4gMTwvYT5gKVxuICAgICAgICBidWlsZEhvYmJpZXMoJ1JlYWRpbmcnLCdJIGhhdmUgYmVjb21lIGEgYmlnIHJlYWRlciB0aGlzIHllYXIgYXMgbXkgYm9vayBsaXN0IHdvdWxkIHNob3cgbG9sLiBJIGFwcHJlY2lhdGUgbGVhcm5pbmcgYWxvdCBhbmQgeW91IGNhbiBnZXQgc28gbXVjaCBvdXQgb2YgcmVhZGluZycpXG4gICAgICBjb25zdCBmYW1pbHlBbGJ1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICAgIGZhbWlseUFsYnVtLmlubmVySFRNTCA9ICdGYW1pbHkgQWxidW0nXG4gICAgICBmYW1pbHlBbGJ1bS5jbGFzc0xpc3QuYWRkKCdmYW1pbHlBbGJ1bScpXG4gICAgICBtYWluLmFwcGVuZENoaWxkKGZhbWlseUFsYnVtKVxuICAgICAgICAgYnVpbGRJbWFnZVNsaWRlcigpXG4gICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgY29uc3QgZXhwbGFpbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgICBleHBsYWluSGVhZC5pbm5lckhUTUwgPSAnVGhlIHBlb3BsZSBpbiBteSBGYW1pbHknXG4gICAgICAgICBjb25zdCBleHBsYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICBleHBsYWluLmlubmVySFRNTCA9ICdTbyBteSBmYW1pbHkgaXMgZm9yZXZlciBncm93aW5nLiBJIGxvdmUgbWFraW5nIG5ldyBjb25uZWN0aW9ucyBhbmQga2VlcGluZyB0aWdodGVyIGJvbmRzLCBJIGhhdmUgYWx3YXlzIGhhZCBhIHNtYWxsIGltbWVkaWF0ZSBmYW1pbHksIGJ1dCB0aGUgcGVvcGxlIEkgdHJ1bHkgbG92ZSB3aWxsIGFsd2F5cyBzdGF5IHdpdGggbWUgYW5kIEkgd2lsbCBhbHdheXMgaGF2ZSB0aGVpciBiYWNrLiBTb21lIG9mIHRoZSBwZW9wbGUgaW4gaGVyZSBhcmUgZmFtaWx5IGJ5IGJsb29kIGxpa2UgbXkgc2lzdGVyIEFuaXRhIGFuZCBteSBtb20gU3BvbWVua2EuIEJ1dCB0aGUgY2xvc2VzdCBwZXJzb24gaW4gbXkgbGlmZSBpcyBteSBicm90aGVyIGRlYW4sIGFuZCB3ZSBoYXZlIGJlZW4gZXZlcnl3aGVyZSBhbmQgZG9uZSBldmVyeXRoaW5nIHRvZ2V0aGVyLiBIZSBpcyByZWFsbHkgbXkgcm9jay4gUGVvcGxlIGxpa2UgbXkgbGl0dGxlIGJyb3RoZXIgRGFuaWVsIG9yIG15IHBoaWxvc29waHkgdGVhY2hlciBUaW1vdGh5IGFyZSB0d28gcGVvcGxlIHdobyBJIGxvdmUgZGVhcmx5IGFuZCBJIGtub3cgdGhleSB3aWxsIGdvIGZhci4gTXkgYnJvdGhlciBUaGllbiBpcyBzb21lb25lIHdobyBhbHdheXMgaGFzIG15IGJhY2sgYW5kIEkga25vdyBoZSB3aWxsIGFsd2F5cyBiZSBieSBteSBzaWRlLiBUaGVyZSBpcyBzbyBtYW55IG1lbWJlcnMgb2YgbXkgZmFtaWx5IGFuZCBJIGhvcGUgaXQga2VlcHMgZ3Jvd2luZy4gTW9yZSBwaWN0dXJlcyB0byBjb21lISdcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGV4cGxhaW5IZWFkKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZXhwbGFpbilcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGxhaW4nKVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGRpdilcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRCb29rcyhib29rLGRlc2NyaXB0aW9uLCBsaW5rKXtcbiAgIGNvbnN0IG9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignb2wnKVxuICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICBhbmNob3IuaHJlZiA9IGxpbmtcbiAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgY29uc3QgYm9va0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGJvb2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdib29rRGVzY3JpcHRpb24nKVxuICAgbGkuaW5uZXJIVE1MID0gYm9vayBcbiAgIGJvb2tEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBkZXNjcmlwdGlvblxuICAgYm9va0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLGJvb2spXG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywoKT0+e1xuICAgIGNvbnN0IGlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm9vaylcbiAgICBpZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgfSlcbiAgIFxuICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKCk9PntcbiAgICBjb25zdCBpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJvb2spXG4gICAgaWQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgfSkgXG4gICBcbiAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGlua1xuICAgfSlcbiAgIGxpLmFwcGVuZENoaWxkKGJvb2tEZXNjcmlwdGlvbilcbiAgIFxuICAgb2wuYXBwZW5kQ2hpbGQobGkpXG4gICAgXG59IiwiaW1wb3J0IGJ1aWxkSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xuaW1wb3J0IHdlYXRoZXIgZnJvbSAnLi9waWNzL3dlYXRoZXJJbWcucG5nJ1xuaW1wb3J0IGJ1aWxkU2tpbGxzIGZyb20gJy4vc2tpbGxzJ1xuaW1wb3J0IGJ1aWxkUHJvamVjdCBmcm9tICcuL3Byb2plY3QnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1haW4oKXtcbmJ1aWxkSGVhZGVyKClcbmJ1aWxkU2tpbGxzKClcbiBcbmJ1aWxkUHJvamVjdCh3ZWF0aGVyLCdodHRwczovL3BhdHJpY2stdG9taWMuZ2l0aHViLmlvL1dlYXRoZXJBUEkvJywnaHR0cHM6Ly9naXRodWIuY29tL1BhdHJpY2stVG9taWMvV2VhdGhlckFQSScsJ1RoaXMgYXBwbGljYXRpb24gaXMgbXkgZmlyc3QgdGltZSB1dGlsaXppbmcgYSBBUEksIEkgZG8gc29tZSBzaW1wbGUgYW5pbWF0aW9ucyB3aXRoaW4gdGhpcyBwcm9qZWN0IGFuZCBsZWFybmVkIGFsb3QgdGhyb3VnaCB0aGUgdXNlIG9mIHJlc3BvbnNpdmUgZGVzaWduIGFuZCBhbmltYXRpb24nLCdXZWF0aGVyIEFwcGxpY2F0aW9uJylcbiBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm1EaXYnKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuZm9ybS5hY3Rpb24gPSBcInByb2Nlc3NGb3JtLnBocFwiXG5mb3JtLm1ldGhvZCA9IFwicG9zdFwiXG5mb3IobGV0IGk9MDsgaTw0O2krKyl7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlXG4gICAgc3dpdGNoKGkpe1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBsYWJlbC5mb3IgPSAnbmFtZSdcbiAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdGdWxsIE5hbWU6J1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9J3RleHQnXG4gICAgICAgICAgICBpbnB1dC5uYW1lID0gJ25hbWUnXG4gICAgICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICdKb2huYXRoYW4gUmFtc2V5IERvZSdcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgbGFiZWwuZm9yID0gJ2VtYWlsJ1xuICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ0VtYWlsIEFkZHJlc3M6J1xuICAgICAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnam9oblJkb2VAaG90bWFpbC5jb20nXG4gICAgICAgICAgIFxuICAgICAgICAgICAgaW5wdXQudHlwZSA9J2VtYWlsJ1xuICAgICAgICAgICAgaW5wdXQubmFtZSA9ICdlbWFpbCdcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgbGFiZWwuZm9yID0gJ3Bob25lJ1xuICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ1Bob25lIE51bWJlcjonXG4gICAgICAgICAgICBpbnB1dC50eXBlID0ndGVsZSdcbiAgICAgICAgICAgIGlucHV0LnBsYWNlaG9sZGVyPSAnKioqLSoqKi0qKioqJ1xuICAgICAgICAgICAgaW5wdXQubmFtZSA9ICdwaG9uZSdcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgbGFiZWwuZm9yID0gJ2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ0dpdmUgY29udGV4dCB0byBwcm9qZWN0J1xuICAgICAgICAgICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgICAgICAgICB0ZXh0QXJlYS5uYW1lID0gJ2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgdGV4dEFyZWEuY29scyA9ICcxMCdcbiAgICAgICAgICAgIHRleHRBcmVhLnJvd3MgPSAnNSdcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRleHRBcmVhKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgfSBcbiAgICB9XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQudHlwZSA9ICdzdWJtaXQnXG4gICAgaW5wdXQudmFsdWUgPSAnc3VibWl0J1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgY29uc3QgY29udGFjdE1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0TWUuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgaDMuaW5uZXJIVE1MID0gJ0hvdyB0byBnZXQgaW4gdG91Y2gnXG4gICAgY29udGFjdE1lLmFwcGVuZENoaWxkKGgzKVxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwLmlubmVySFRNTCA9ICdJIGFtIHdpbGxpbmcgdG8gd29yayB3aXRoIGFueW9uZSBvbiBhbnkgcHJvamVjdCBvciBpZGVhIHRoYXQgdGhleSBoYXZlIGluIG1pbmQhIGZpbGwgb3V0IHRoaXMgZm9ybSBhbmQgSSB3aWxsIG1lc3NhZ2UgeW91IGFzIHNvb24gYXMgSSBhbSBhdmFpbGFibGUuPGJyPiBIYXZlIGEgZ3JlYXQgZGF5IGFuZCBtYXkgd2UgYWxsIGxpdmUgbG9uZyBhbmQgcHJvc3Blcjxicj48YnI+IC1QYXRyaWNrICdcbiAgICBjb250YWN0TWUuYXBwZW5kQ2hpbGQocClcbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RNZSlcbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGZvcm0pXG4gICAgbWFpbi5hcHBlbmRDaGlsZChmb3JtRGl2KVxuXG59XG4gXG4iLCJpbXBvcnQgcG9ydGFpdCBmcm9tICcuL3BpY3MvVG9taWMuUC5qcGcnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEhlYWRlcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5jb25zdCBwb3J0cmFpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5wb3J0cmFpdC5jbGFzc0xpc3QuYWRkKCdwaWNPZk1lJylcbmltZy5jbGFzc0xpc3QuYWRkKCdwb3J0cmFpdCcpXG5pbWcuc3JjID0gcG9ydGFpdFxucG9ydHJhaXQuYXBwZW5kQ2hpbGQoaW1nKVxuaGVhZGVyLmFwcGVuZENoaWxkKHBvcnRyYWl0KVxuY29uc3Qgd2hvQW1JID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbndob0FtSS5jbGFzc0xpc3QuYWRkKCd3aG9BbUknKVxuY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG5oMi5pbm5lckhUTUwgPSAnTXkgbmFtZSBpcyBQYXRyaWNrIEVtYW51ZWwgVG9taWMnXG53aG9BbUkuYXBwZW5kQ2hpbGQoaDIpXG5jb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5wLmlubmVySFRNTCA9ICdJIGFtIGEgc3R1ZGVudCBhdCB0aGUgVW5pdmVyc2l0eSBvZiBTb3V0aCBGbG9yaWRhIGFuZCBJIGdyYWR1YXRlIGluIHRoZSBTcHJpbmcgb2YgMjAyNDxicj53aXRoIGEgQmFjaGVsb3JzIGRlZ3JlZSBpbiBJbmZvcm1hdGlvbiBTY2llbmNlPGJyPkkgYW0gYSBtYW4gd2l0aCBhbG90IG9mIGFtYml0aW9uIHRvIGJldHRlciB0aGUgd29ybGQsIGFuZCBhbSB0aGUgZmlyc3Qgb2YgbXkgZmFtaWx5IHRvIGJlPGJyPmJvcm4gaW4gQW1lcmljYS4gSSBzcGVuZCBhcyBtdWNoIHRpbWUgYXMgSSBjYW4gbGVhcm5pbmcgaG93IHRvIGRldmVsb3Agd2Vic2l0ZXMgZXZlcnlkYXk8YnI+SXQgaXMgbm90IGp1c3QgZnVuIGZvciBtZSBidXQgYnJpbmdzIGltbWVuc2Ugc2F0aXNmYWN0aW9uIHdoZW4gSSBjYW4gYnVpbGQgYW5kIGRlc2lnbiBzb21ldGhpbmc8YnI+dGhhdCBJIGtub3cgaXMgZ29vZC4gSSBsb3ZlIGhlbHBpbmcgcGVvcGxlLCBhbmQgSSBhbSBsb29raW5nIGZvciBhIG9wcG9ydHVuaXR5IHRvIHNob3cgPGJyPm15IHNraWxsc2V0IGFuZCBsZWFybiB0aHJvdWdoIG90aGVycydcbndob0FtSS5hcHBlbmRDaGlsZChwKVxuaGVhZGVyLmFwcGVuZENoaWxkKHdob0FtSSlcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbm1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkSG9iYmllcyh0aXRsZSxkZXNjcmlwdGlvbil7XG4gICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKVxuICAgICBsaS5pbm5lckhUTUwgPSB0aXRsZVxuICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgIHAuaW5uZXJIVE1MID0gZGVzY3JpcHRpb25cbiAgIFxuICAgICBsaS5hcHBlbmRDaGlsZChwKVxuICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKVxufSIsIlxuaW1wb3J0IGFzaCBmcm9tICcuL3NsaWRlci9hc2guanBnJ1xuaW1wb3J0IGJhYnkgZnJvbSAnLi9zbGlkZXIvYmFieS5qcGcnXG5pbXBvcnQgYnJvdGhlciBmcm9tICcuL3NsaWRlci9icm90aGVyLmpwZydcbmltcG9ydCBicm90aGVycyBmcm9tICcuL3NsaWRlci9icm90aGVycy5qcGcnXG5pbXBvcnQgYnViYmEgZnJvbSAnLi9zbGlkZXIvYnViYmEuanBnJ1xuaW1wb3J0IGJ1Y3MgZnJvbSAnLi9zbGlkZXIvYnVjcy5qcGcnXG5pbXBvcnQgYnV0dGVyZmx5IGZyb20gJy4vc2xpZGVyL2J1dHRlcmZseS5qcGcnXG5pbXBvcnQgY29vbCBmcm9tICcuL3NsaWRlci9jb29sLmpwZydcbmltcG9ydCBjcm9hdGlhIGZyb20gJy4vc2xpZGVyL2Nyb2F0aWEuanBnJ1xuaW1wb3J0IGRhbmllbCBmcm9tICcuL3NsaWRlci9kYW5pZWwuanBnJ1xuaW1wb3J0IGRvbHBoaW4gZnJvbSAnLi9zbGlkZXIvZG9scGhpbi5qcGcnXG5pbXBvcnQgZXllcyBmcm9tICcuL3NsaWRlci9leWVzLmpwZydcbmltcG9ydCBmYW1pbHkgZnJvbSAnLi9zbGlkZXIvZmFtaWx5LmpwZydcbmltcG9ydCBmcmllbmRzIGZyb20gJy4vc2xpZGVyL2ZyaWVuZHMuanBnJ1xuaW1wb3J0IGdhZ2dsZSBmcm9tICcuL3NsaWRlci9nYWdnbGUuanBnJ1xuaW1wb3J0IGdhbmcgZnJvbSAnLi9zbGlkZXIvZ2FuZy5qcGcnXG5pbXBvcnQgZ29vZnMgZnJvbSAnLi9zbGlkZXIvZ29vZnMuanBnJ1xuaW1wb3J0IGdvb25zIGZyb20gJy4vc2xpZGVyL2dvb25zLmpwZydcbmltcG9ydCBncmFuZHBhIGZyb20gJy4vc2xpZGVyL2dyYW5kcGEuanBnJ1xuaW1wb3J0IG1heCBmcm9tICcuL3NsaWRlci9tYXguanBnJ1xuaW1wb3J0IG1vbW1hIGZyb20gJy4vc2xpZGVyL21vbW1hLmpwZydcbmltcG9ydCBtb25rZXkgZnJvbSAnLi9zbGlkZXIvbW9ua2V5LmpwZydcbmltcG9ydCBwb3NlIGZyb20gJy4vc2xpZGVyL3Bvc2UuanBnJ1xuaW1wb3J0IHB1cHBldCBmcm9tICcuL3NsaWRlci9wdXBwZXQuanBnJ1xuaW1wb3J0IHNoZW1rIGZyb20gJy4vc2xpZGVyL3NoZW1rLmpwZydcbmltcG9ydCBzaWJsaW5ncyBmcm9tICcuL3NsaWRlci9zaWJsaW5ncy5qcGcnXG5pbXBvcnQgc2lzc3kgZnJvbSAnLi9zbGlkZXIvc2lzc3kuanBnJ1xuaW1wb3J0IHNraXBwaW4gZnJvbSAnLi9zbGlkZXIvc2tpcHBpbmcuanBnJ1xuaW1wb3J0IHN0b2ljIGZyb20gJy4vc2xpZGVyL3N0b2ljLmpwZydcbmltcG9ydCBzdHJvbmdUaW0gZnJvbSAnLi9zbGlkZXIvc3Ryb25nVGltLmpwZydcbmltcG9ydCBzd2VldFQgZnJvbSAnLi9zbGlkZXIvc3dlZXRULmpwZydcbmltcG9ydCB0aGllbiBmcm9tICcuL3NsaWRlci90aGllbkJkYXkuanBnJ1xuaW1wb3J0IHRob3IgZnJvbSAnLi9zbGlkZXIvdGhvci5qcGcnXG5pbXBvcnQgdHVydGxlIGZyb20gJy4vc2xpZGVyL3R1cnRsZS5qcGcnXG5pbXBvcnQgd2F0ZXIgZnJvbSAnLi9zbGlkZXIvd2F0ZXIuanBnJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRJbWFnZVNsaWRlcigpe1xuICAgIGNvbnN0IG5hbWVzID0gW2FzaCxiYWJ5LGJyb3RoZXIsYnJvdGhlcnMsYnViYmEsYnVjcyxidXR0ZXJmbHksY29vbCxjcm9hdGlhLGRhbmllbCxkb2xwaGluLGV5ZXMsZmFtaWx5LGZyaWVuZHMsZ2FnZ2xlLGdhbmcsZ29vZnMsZ3JhbmRwYSxtYXgsbW9tbWEsbW9ua2V5LHBvc2UscHVwcGV0LHNoZW1rLHNpYmxpbmdzLHNpc3N5LHNraXBwaW4sc3RvaWMsc3Ryb25nVGltLHRoaWVuLHN3ZWV0VCx0aG9yLHR1cnRsZSx3YXRlcl1cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZCgnaW1nU2xpZGVyJylcbiAgICBmb3IobGV0IGkgPSAwOyBpPG5hbWVzLmxlbmd0aDtpKyspe1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBpbWcuc3JjID0gbmFtZXNbaV1cbiAgICAgICAgaWYoaSUyPT0wKXtcbiAgICAgICAgICAgIGltZy5zdHlsZS5tYXJnaW5Ub3AgPSAnM3ZoJ1xuICAgICAgICAgICAgaW1nLnN0eWxlLnpJbmRleCA9ICdhdXRvJ1xuICAgICAgICB9ZWxzZSBpZihpJTIhPTApe1xuICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpblRvcCA9ICc4dmgnXG4gICAgICAgICAgICBpbWcuc3R5bGUuekluZGV4ID0gJzInXG4gICAgICAgIH1cbiAgICAgICAgaW1nLmFsdCA9ICdteUZhbWlseS9uYXR1cmUnXG4gICAgICAgIHNsaWRlci5hcHBlbmRDaGlsZChpbWcpXG4gICAgfVxuICAgIGxldCBjb3VudCA9IDBcbiAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICBsZXQgdncgPSA4MFxuICAgICAgICBpZihjb3VudCA9PS02KXtcbiAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgdncgPSB2dypjb3VudFxuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvdW50LS1cbiAgICAgICAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWBcbiAgICAgICAgICAgIH1cbiAgICB9LDUwMDApXG4gICAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgd3JhcC5jbGFzc0xpc3QuYWRkKCdzbGlkZXJXcmFwJylcbiAgICB3cmFwLmFwcGVuZENoaWxkKHNsaWRlcilcbiAgICBtYWluLmFwcGVuZENoaWxkKHdyYXApXG59XG4gIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgYnVpbGRTaWRlQmFyIGZyb20gJy4vc2lkZWJhcidcbmltcG9ydCBidWlsZE1haW4gZnJvbSAnLi9idWlsZE1haW4nXG5jb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKVxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxubmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBtYWluLmlubmVySFRNTCA9ICcnXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzM0MzQzNCdcbiAgICBidWlsZE1haW4oKSAgXG59KVxuYnVpbGRNYWluKClcbmJ1aWxkU2lkZUJhcigpIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRQcm9qZWN0KHNyYywgc2l0ZUxpbmssZ2hMaW5rLCBwSW5uZXIsIGhlYWQpe1xuICAgIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKVxuICAgIGlmKG1haW4uY29udGFpbnMocHJvamVjdHMpPT10cnVlKXtcbiAgICBcbiAgICAgICAgXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKGZhbHNlKVxuICAgICAgICBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJylcbiAgICB9XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ0bnMuY2xhc3NMaXN0LmFkZCgnYnRucycpXG4gICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnbGlua3MnKVxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsZXQgY291bnQgPSAwXG4gICAgaW1nLnNyYyA9IHNyY1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKGltZylcbiAgICB3aGlsZShjb3VudDwyKXtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidG4udHlwZSA9ICdzdWJtaXQnXG4gICAgICAgIHN3aXRjaChjb3VudCl7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZm9ybS5hY3Rpb24gPSBzaXRlTGlua1xuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSAnVmlldyBMaXZlIFNpdGUnXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidG4pXG4gICAgICAgICAgICAgICAgYnRucy5hcHBlbmRDaGlsZChmb3JtKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGZvcm0uYWN0aW9uID0gZ2hMaW5rXG4gICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9ICdTb3VyY2UgQ29kZSdcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bilcbiAgICAgICAgICAgICAgICBidG5zLmFwcGVuZENoaWxkKGZvcm0pXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrIFxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDYXJkJylcbiAgIGxpbmtzLmFwcGVuZENoaWxkKGJ0bnMpXG4gICAgcC5pbm5lckhUTUwgPSBwSW5uZXJcbiAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGxpbmtzKVxuICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJylcbiAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgaDIuaW5uZXJIVE1MID0gaGVhZFxuICAgIGRlc2MuYXBwZW5kQ2hpbGQoaDIpXG4gICAgZGVzYy5hcHBlbmRDaGlsZChwKVxuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGRlc2MpXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0cylcbn1cbiIsImltcG9ydCBidWlsZE1haW4gZnJvbSAnLi9idWlsZE1haW4nXG5pbXBvcnQgYnVpbGRBYm91dE1lIGZyb20gJy4vYWJvdXQnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFNpZGVCYXIoKXtcbiAgICBjb25zdCBzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUnKVxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyQnRuJylcbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKVxuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNpZGVCYXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3NpZGVCYXInKVxuICAgIHJlbW92ZUJ0bi5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjM5XCIgaGVpZ2h0PVwiMzZcIiB2aWV3Qm94PVwiMCAwIDM5IDM2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHJlY3Qgd2lkdGg9XCI0My42ODQ2XCIgaGVpZ2h0PVwiNy45NTUzXCIgcng9XCIzLjk3NzY1XCIgdHJhbnNmb3JtPVwibWF0cml4KDAuNzQ2ODEgMC42NjUwMzcgLTAuNzg3ODExIDAuNjE1OTE3IDYuMjY3MjEgMS45OTA2KVwiIGZpbGw9XCJ3aGl0ZVwiLz4gPHJlY3Qgd2lkdGg9XCI0Mi45MjQ4XCIgaGVpZ2h0PVwiOC4wODgxOFwiIHJ4PVwiNC4wNDQwOVwiIHRyYW5zZm9ybT1cIm1hdHJpeCgtMC42NzgzMDIgMC43MzQ3ODMgLTAuODQxMjQ0IC0wLjU0MDY1NiAzNy4zNTE2IDQuMzcyOTIpXCIgZmlsbD1cIndoaXRlXCIvPiA8L3N2Zz4nXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIFxuICAgICAgIHNpZGVCYXIuc2V0QXR0cmlidXRlKCdpZCcsJ2FjdGl2ZScpXG4gICAgfSlcbiAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIHNpZGVCYXIuaWQgPSAnZGVBY3RpdmUnXG4gICAgfSlcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHJlbW92ZUJ0bilcbiAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgaG9tZURpdi5jbGFzc0xpc3QuYWRkKCdidG5EaXYnKVxuY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxucC5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDE4MyAxNTBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4gPHJlY3QgeD1cIjQxXCIgeT1cIjUwXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiByeD1cIjEwXCIgZmlsbD1cIiNGRkJGMDBcIi8+IDxwYXRoIGQ9XCJNODQuNjI2IDYuNTA2MTFDODguNDgyIDIuODU2NDYgOTQuNTE4IDIuODU2NDUgOTguMzc0IDYuNTA2MUwxNTIuNTAyIDU3LjczNzJDMTU5LjA2OSA2My45NTI5IDE1NC42NzEgNzUgMTQ1LjYyOCA3NUgzNy4zNzE3QzI4LjMyOTUgNzUgMjMuOTMwNSA2My45NTI5IDMwLjQ5NzcgNTcuNzM3Mkw4NC42MjYgNi41MDYxMVpcIiBmaWxsPVwiI0ZGQkYwMFwiLz48cGF0aCBkPVwiTTc0IDEwNkM3NCAxMDAuNDc3IDc4LjQ3NzIgOTYgODQgOTZIOThDMTAzLjUyMyA5NiAxMDggMTAwLjQ3NyAxMDggMTA2VjE1MEg3NFYxMDZaXCIgZmlsbD1cImJsYWNrXCIvPjwvc3ZnPidcbiAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGhvbWUuaW5uZXJIVE1MID0gJ0hvbWUnXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzNDM0MzQnXG4gICAgICAgIGJ1aWxkTWFpbigpXG4gICAgICAgIHNpZGVCYXIucmVtb3ZlQXR0cmlidXRlKCdpZCcsJ2FjdGl2ZScpXG4gICAgfSlcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWUpXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChwKVxuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoaG9tZURpdilcbiAgICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXREaXYuY2xhc3NMaXN0LmFkZCgnYnRuRGl2JylcbiAgICAgY29uc3QgYWJvdXRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gJydcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0Y0QkI0NCdcbiAgICAgICAgYnVpbGRBYm91dE1lKClcbiAgICAgICAgc2lkZUJhci5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywnYWN0aXZlJylcbiAgICAgfSlcbiAgICAgYWJvdXRCdG4uaW5uZXJIVE1MID0gJ0Fib3V0IE1lJ1xuICAgICBhYm91dEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dEJ0bilcbiAgICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRQKVxuICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGFib3V0RGl2KVxuICAgIHNpZGUuYXBwZW5kQ2hpbGQoc2lkZUJhcilcbn0iLCJpbXBvcnQgamF2YSBmcm9tICcuL3BpY3MvamF2YS5wbmcnXG5pbXBvcnQgc2FzcyBmcm9tICcuL3BpY3Mvc2Fzcy5wbmcnXG5pbXBvcnQgY3NzIGZyb20gJy4vcGljcy9jc3MucG5nJ1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9waWNzL2h0bWwucG5nJ1xuaW1wb3J0IGpzIGZyb20gICcuL3BpY3MvanMucG5nJ1xuaW1wb3J0IHB5IGZyb20gJy4vcGljcy9weXRob24ucG5nJ1xuaW1wb3J0IHNxbCBmcm9tICcuL3BpY3Mvc3FsLnBuZydcbmltcG9ydCB3cCBmcm9tICcuL3BpY3Mvd2VicGFjay5wbmcnXG5pbXBvcnQgdHMgZnJvbSAnLi9waWNzL3RzLnBuZydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkU2tpbGxzKCl7XG4gICAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIHdyYXAuY2xhc3NMaXN0LmFkZCgnc2tpbGxzJylcbiAgICBjb25zdCBza2lsbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNraWxscy5jbGFzc0xpc3QuYWRkKCd3cmFwJylcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBoMi5pbm5lckhUTUwgPSBcIk15IFNraWxsc2V0XCJcbiAgICB3cmFwLmFwcGVuZENoaWxkKGgyKVxuICAgIGxldCBjb3VudCA9IDBcbiAgICB3aGlsZShjb3VudCA8IDkpe1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICAgICAgc3dpdGNoKGNvdW50KXtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnSmF2YScgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gamF2YVxuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnSmF2YSdcbiAgICAgICAgICAgICAgICBpbWcuaWQgPSAnamF2YSdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZCgnamF2YScpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdQeXRob24nXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHB5XG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdQeXRob24nXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ0hUTUwnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGh0bWxcbiAgICAgICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2h0bWwnKVxuXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdIVE1MJ1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdDU1MnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGNzc1xuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnQ1NTJ1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdjc3MnKVxuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdKYXZhU2NyaXB0J1xuICAgICAgICAgICAgICAgIGltZy5zdHlsZS5tYXJnaW5MZWZ0ID0gJzIwcHgnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGpzXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdKYXZhU2NyaXB0J1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdteVNRTCdcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gc3FsXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdteVNRTCdcbiAgICAgICAgICAgICAgICBwLnN0eWxlLm1hcmdpbkxlZnQgPSAnOHB4J1xuICAgICAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZCgnc3FsJylcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnU2FzcydcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gc2Fzc1xuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnU2FzcydcbiAgICAgICAgICAgICAgICBwLnN0eWxlLm1hcmdpbkxlZnQgPSAnNXB4J1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdXZWJwYWNrJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSB3cFxuICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCd3ZWJwYWNrJylcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ1dlYnBhY2snXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ1R5cGVTY3JpcHQnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHRzXG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpbkxlZnQgPSAnMjBweCdcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ1R5cGVzY3JpcHQnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZChza2lsbHMpXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQod3JhcClcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9