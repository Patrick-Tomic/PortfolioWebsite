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
.side .sideBar div {
  display: flex;
}
.side .sideBar div button {
  cursor: pointer;
  margin-top: 15px;
  align-self: flex-start;
  border: none;
  background-color: #36454F;
  font-size: 20px;
  color: white;
}
.side .sideBar div button:hover {
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

main {
  min-height: 100%;
}
main .blog {
  color: white;
  padding: 10vh 10vw;
}
main .blog li {
  cursor: pointer;
  font-size: 24px;
}
main .blog li h2 {
  text-decoration: none;
  font-size: 22px;
  display: none;
}
main .blog li p {
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  display: none;
}
main .blog li p b {
  color: #F4BB44;
  font-size: 22px;
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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":[" \n$base: #343434;\n*{\n    margin: 0;\n    font-family: 'Courier New', Courier, monospace;\n   \n}\n \nbody{\n    background-color:#343434;\n    width: 100%;\n    height: 100%;\n     \n}\nfooter\n{\n    box-shadow: 10px 10px 10px 15px white;\n    button{\n        cursor: pointer;\n        border: none;\n        background-color: $base;\n    }\n    background-color: $base;\n}\nheader{\n    \n    box-shadow: 0px 5px 5px white;\n   \n    position: sticky;\n    top: 0;\n    background-color: #13274F;\n    z-index: 1;\n    display: flex;\n    justify-content: space-between;\n     svg{\n        margin-left: 10px;\n        margin-top: 5px;\n     }\n    button{\n        background-color: #13274F;\n        border: none;\n        margin-top: 5px;\n        cursor: pointer;\n    }\n    .name{ \n        font-size: 1em;\n            margin-left: 15vw;\n           color: white;\n           font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n        }\n    .name:hover{\n        color: #FFD700;\n    }\n}\n.header{\n    display: flex;\n    padding: 25px;\n    justify-content: space-around;\n   \n    .portrait{\n    \n       margin: 5px;\n        width:auto;\n        height: 321px;\n        border-radius: 10px;\n    }\n    .whoAmI{\n        margin-top: 5vh;\n    \n        font-family: 'Courier New', Courier, monospace;\n        color: white;\n        p{\n            font-size: 20px;\n            line-height: 25px;\n            \n        }\n    }\n}\n.skills{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n     \n    box-shadow: 0px 15px 15px black;\n    h2{\n        margin-left: 43%;\n    }\n\n    .wrap{\n        margin-left: 3vw;\n        background-color: white;\n        margin-bottom: 10px;\n        display: grid;\n        grid-template-columns: repeat(auto-fit,minmax(150px, 1fr));\n         \n    \n        \n    }\n    .card{\n        display: flex;\n        flex-direction: column;\n        img{\n         \n            padding: 2px;\n            \n            \n            background-color: white;\n            min-width: 3vw;\n            min-height: 6vh;\n            max-width: 3vw;\n            max-width: 6vh;\n        }\n        .html{\n            margin-left: 12px;\n        }\n        .css{\n            margin-left: 13px;\n        }\n        .java{\n            margin-left: 9px;\n        }\n        \n    }\n}\n.projects{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    .projectCard{\n       \n        padding: 50px;\n        display: flex;\n        \n        .links{\n            img{\n                border-radius: 10px;\n                display: flex;\n                flex-direction: column;\n                width: 20vw;\n    \n            }\n            .btns{\n                button{\n                    cursor: pointer;\n                    margin: 1vh;\n                    background-color: #FFBF00;\n                    border: #FFBF00 1px solid;\n                    width: 9vw;\n                    height:5vh;\n                    border-radius: 10px;\n                    font-size: 15px;\n                    font-weight: bold;\n                }\n                button:hover{\n                    background-color: $base;\n                    color: white;\n                }\n                display: flex;\n                \n                align-items: center;\n            }\n        }\n        .description{\n        h2{\n            color: white;\n            margin-left: 5vw;\n        }\n        p{\n             \n            color: white;\n            font-size: 18px;\n            margin-left: 5vw;\n            margin-top: 2vh;\n        }\n    }\n    }\n}\n \n    .formDiv{\n        box-shadow: 10px 10px 10px 15px white;\n        background-color: #13274F;\n        \n       display: flex;\n       .contact{\n        margin-left: 10vw;\n        color: white;\n        h3{\n            font-size: 23px;\n            margin-top: 2vh;\n            margin-bottom: 5vh;\n        }\n        p{\n            font-size: 18px;\n        }\n        display: flex;\n        flex-direction: column;\n         \n        width:35vw ;\n        \n       }\n        form{\n            margin-left: 200px;\n             \n            border-radius: 10px;\n           label{\n            color: white;\n           }\n            width: 25vw;\n            padding: 10px;\n            display: flex;\n            flex-direction:column;\n            input{\n               \n                border: solid 1px black;\n                margin: 5px;\n                width: 15vw;\n            }\n            textarea{\n                width: 20vw;\n            }\n            .submit{\n                cursor: pointer;\n                border-radius: 5px;\n                margin-top: 10px;\n                width: 10vw;\n                height: 4vh;\n                background-color:#FFBF00;\n                font-size: 15px;\n                font-weight: bold;\n            }\n            .submit:hover{\n                color: white;\n                background-color: #343434;\n                 \n            }\n        }\n    }\n\n.side{\n    display: flex;\n    justify-content: flex-end;\n    \n  \n   \n.sideBar{\n    width: 25vw;\n    \n    height: 100%;\n    background-color: \t#36454F;\n    position: absolute;\n   display: none;\n   z-index: auto;\n   .remove{\n    background-color: \t#36454F;\n    border: none;\n    align-self: flex-end;\n    cursor: pointer;\n}\ndiv{\n    display: flex;\n     \n    button{\n        cursor: pointer;\n        margin-top: 15px;\n        align-self: flex-start;\n        border: none;\n        background-color: \t#36454F;\n        font-size: 20px;\n        color: white;\n    }\n    button:hover{\n        color:  #FFBF00;\n    }\n}\n \n  \n}\n#active{\n    animation: openSide 1s;\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n   z-index: 2;\n    transform-origin: center right;\n  \n    \n}  \n#deActive{\n    animation: closeSide 1s;\n    transform-origin: center right;\n}\n}\n\nmain{\n min-height: 100%;\n.blog{\n    color: white;\n    padding: 10vh 10vw;\n  \n    li{\n       cursor: pointer;\n        font-size: 24px;\n        h2{\n            text-decoration: none;\n            font-size: 22px;\n            display: none;\n        }\n        p{\n            b{\n                color: #F4BB44;\n                font-size: 22px;\n            }\n            text-decoration: none;\n            font-size: 18px;\n            line-height: 25px;\n            display: none;\n        }\n        \n    }\n   \n}\n\n.bio{\n    z-index: 5;\n    height: 700px;\n    z-index: 1;\n    display: flex;\n   button{\n    cursor: pointer;\n   }\n   button:hover{\n    color: white;\n   }\n    \n    .myStory{\n        button{\n            font-size: 1.5em;\n            font-weight: bold;\n            text-align: left;\n             margin-bottom: 2vh;\n            border: none;\n            background-color: #F4BB44;\n        }\n        height: auto;\n        border-bottom: none;\n        border: solid 5px #13274F;\n        border-bottom: none;\n       \n        \n       padding:2vh 3vw;\n       \n        font-size: 18px;\n        color: black;\n        width: 33%;\n         \n\n    }\n    .bookList{\n         \n        height: auto;\n        display: flex;\n        flex-direction: column;\n        width: 33%;\n        padding: 25px;\n        border: 5px solid #13274F;\n        border-right: none;\n        border-bottom: none;\n        border-left: none;\n        button{\n            border: none;\n            font-size: 1.5em;\n            font-weight: bold;\n            text-align: left;\n             margin-bottom: 2vh;\n           width: 10vw;\n            background-color: #F4BB44;\n        }\n        .bookDiv{\n            \n           \n            .bookDescription{\n                left: 25%;\n                 z-index: 3;\n                border: solid 1px #13274F;\n                display: none;\n                position: absolute;\n                width: 18vw;\n                height: auto;\n                \n                padding: 2vw 2vh;     \n                background-color: #343434;\n                border-radius: 10px;\n            }\n            li{\n             \n                margin-bottom: 2vh;\n                font-size: 18px;\n                font-weight: bold;\n                width: 15vw;\n            }\n            ol{\n            li:hover{\n                color: white;\n                cursor: pointer;\n            }\n            }\n        }\n        \n    }\n   .hobbies{\n    border-top: #13274F 5px solid;\n    \n    button{\n       \n        font-size: 1.5em;\n        font-weight: bold;\n        text-align: left;\n         margin-bottom: 2vh;\n        border: none;\n        background-color: #F4BB44;\n    }\n     \n    height: auto;\n    padding:2vh 3vw;\n    width: 33%;\n     \n    .hobbyDiv{\n         \n    .list{\n        li{\n            font-size: 18px;\n        p{\n            border: none;\n           \n           width: 15vw;\n        }\n    }\n    }\n}\n   }\n}\n.quote{\n  margin-left: 30vw;\n  margin-top: 2vh;\n}\n.familyAlbum{\n    border-top-left-radius: 15px;\n    border-top-left-radius: 15px;\n    background-color: #13274F;\n    color:white;\n    text-align: center;\n}\n.sliderWrap{\n   overflow: hidden;\n.imgSlider{\n    width: 100000vw;\n     \n    background-color: #13274F; /* Chrome 10-25, Safari 5.1-6 */\n    display: flex;\n    transition: transform 1s ease-in-out;\n    transform: translateX(0);\n    img{\n        margin-left: 5vw;\n        margin-bottom: 5vh;\n        height: 25vh;\n        width: auto;\n        border-radius: 50px;\n    }\n}\n}\n.explain{\n   margin: 5vh 5vw;\n    h2{\n        text-align: center;\n    }\n    p{\n        line-height: 25px;\n    }\n}\n}\n\n@keyframes openSide {\n    from{\n      transform: scaleX(0);\n    }\n     70%{\n       transform: scaleX(1.1);\n     }\n     to{\n        transform: scaleX(1);\n     }\n}\n@keyframes closeSide{\n    from{\n        transform: scaleX(1);\n        display: block;\n    }\n    to{\n        transform: scaleX(0);\n        display: none;\n    }\n}\n@media (max-width: 1750px){\n    .projects{\n        .projectCard{\n            flex-direction: column;\n            .links{\n                img{\n                    margin-left: 3vw;\n                }\n                margin-left: 6vw;\n                .btns{\n                    button{\n                        width: 12vw;\n                        height: 6vh;\n                    }\n                }\n            }\n        }\n    }\n    main{\n        p{\n            font-size: 13px;\n        }\n        li{\n            font-size: 14px;\n            p{\n                font-size: 13px;\n            }\n       \n        }\n    }\n}\n @media (max-width: 1000px){\n    .skills{\n        .wrap{\n            margin-left: 80px;\n            .card{\n              \n         img{\n            max-width: 6vw;\n            max-height: 10vh;\n             min-width: 6vw;\n             min-height: 6vh;\n        }\n        p{\n            margin-bottom: 10px;\n            margin-left: 10px;\n            font-weight: bold;\n        }\n         .css{\n            margin-left: 18px;\n         }\n         .html{\n            margin-left: 14px;\n         }\n    }\n}\n}\n.projects{\n    .projectCard{\n        \n        flex-direction: column;\n        .links{\n            margin-left: 8px;\n            img{\n                margin-left: 2vw;\n                width: 30vw;\n            }\n        \n        .btns{\n            margin-left: 25px;\n            button{\n                width: 13vw;\n                height: 7vh;\n            }\n        }\n    }\n    .description{\n        \n        margin-right: 5vw;\n    }\n}\n}\nmain{ \n     \n.bio{\n    height: 800px;\n    .myStory{\n        .sumDiv{\n            P{\n                font-size: 14px;\n                font-weight: bold;\n            }\n        }\n    }\n    .bookList{\n        .bookDiv{\n            .bookDescription{\n                width: 45vw;\n            }\n            li{\n                font-size: 15px;\n            }\n        }\n      \n    }\n    .hobbies{\n\n   .hobbyDiv{\n    .list{\n        font-weight: bold;\n        li{\n            font-size: 15px;\n        }\n        p{\n            font-size: 11px;\n        }\n    }\n   }\n}\n}\n.imgSlider{\n    img{\n        height: 15vh;\n    }\n}\n}\n }\n@media (max-width: 700px){\n      \n    body{\n        width: 100%;\n         \n    }\n    header{\n         \n         \n        button{\n        h2{\n            font-size: 24px;\n        }\n    }\n    }\n    .header{\n        \n         \n        padding: 5px;\n        display: flex;\n        flex-wrap: wrap;\n         justify-content: center;\n         align-items: center;\n        .portrait{\n            margin-top: 5vh;\n            height: 160px;\n            \n        }\n        h2{\n            \n            font-size: 24px;\n        }\n        p{\n          \n            font-size: 10px;\n            line-height: 12px;\n        }\n    }\n    .skills{\n      \n \n      \n    .wrap{\n        margin-top: 3vh;\n        display: flex;\n        flex-wrap: wrap;\n        margin-left: 0;\n       justify-content: space-between;\n       \n        .card{\n          .webpack{\n            margin-left: 2vw;\n          }\n            .html{\n                margin-left: 7px;\n              }\n              .css{\n                margin-left: 10px;\n              }\n            img{\n            max-width: 40px;\n            max-height: 40px;\n        }\n    }\n}\n        h2{\n            display: none;\n        }\n    }\n    .projects{\n        grid-template-columns: 1fr;\n        \n        .projectCard{\n            flex-direction: column;\n            .links{\n                \n                img{\n                   width: 250px;\n                   margin-left: 25vw;\n                   height: auto;\n                }\n                .btns{\n                    \n                button{\n                    width: 40vw;\n                    height: 40px;\n                    \n                    font-weight: normal;\n                }\n                }\n            }\n            .description{\n                margin-left: 15vw;\n                h2{\n                    margin-left: 20vw;\n                    color:  #FFBF00;\n                }\n            }\n             \n           padding: 25px;     \n              \n            \n        }\n        \n      \n            .description{\n                margin-left: 20px;\n                h2{\n                    font-size: 16px;\n                }\n                p{\n                    font-size: 10px;\n                }\n            }\n         \n    }\n    .side{\n        .sideBar{\n            width: 80%;\n        }\n        #active{\n            animation: none;\n        }\n        #deActive{\n            animation: none;\n        }\n    }\n\n\n//ABOUT ME CSS\nheader{\n    z-index: 1;\n      \n       width: 100%;\n       .bosnianWar{\n           display: none;\n       }\n       h2{\n           font-size: 15px;\n       }\n   }\nmain{\n    \n   width: 100%;\n    display: flex;\n    flex-direction: column;\n    \n    \n    .quote{\n       margin-left: 10vw;\n        \n    }\n/* #animate{\n    animation: none;\n    display: block;\n}\n#reverse{\n    animation: none;\n    display: block;\n} */\n.bio{\n    border-top:#13274F solid 5px;\n    z-index: 0;\n    min-height: 420vh;\n     \n    flex-direction: column;\n    pointer-events: none;\n    .bookList{\n        button{\n            font-size: 20px;\n            color: black;\n        }\n        border: none;\n        \n        .bookDiv{\n       \n            z-index: 0;\n            padding: 0;\n            \n            display: block;\n            li{\n                pointer-events: none;\n               \n            .bookDescription{\n                left: -3%;\n                z-index: 0;\n                width: 80vw;\n                height: 55px;\n                background-color:#F4BB44;\n                border: none;\n                font-size: 10px;\n                position: relative;\n                display: block;\n              \n            }\n        }\n           \n        }\n    }\n        .hobbies{\n           margin-bottom: 50vh;\n            width: 100%;\n            border-top: #13274F 5px solid;\n            border-bottom:none;\n            padding: 0;\n            .hobbyDiv{\n                display: block;\n                 width: 100%;\n                .list{\n                    li{\n                        font-weight: bold;\n                        margin-bottom: 5vh;\n                        \n                     p{\n                        width: 100%;\n                     }\n                }\n            }\n\n            }\n        }\n        .myStory{\n          border-top: 5px solid #13274F;\n         \n          border-left: none;\n          border-right: none;\n          border-bottom: none;\n            button{\n                border: none;\n            }\n            width: 94%;\n           \n            .sumDiv{\n                width: 80vw;\n                height: 60vh;\n                display: block;\n                p{\n                    font-size: 15px;\n                }\n                 \n            }\n        }\n      \n    \n}\n.imgSlider{\n    img{\n        height: 25vh;\n         \n    }\n}\n}\n\n*{\n   \n    margin: 0;\n    padding: 0;\n}\n}\n@media (max-width:445px){\n     \n    header{\n     z-index: 1;\n        margin: 0;\n        width: 100%;\n        .bosnianWar{\n            display: none;\n        }\n        h2{\n            font-size: 15px;\n        }\n    }\n    main{\n       \n        .bio{\n            .bookList{\n                button{\n                    font-size: 20px;\n                    color: black;\n                }\n                .bookDiv{\n                    .bookDescription{\n                        z-index: auto;\n                    }\n                }\n            }\n            z-index: auto;\n             padding: 0;\n            margin: 0;\n            margin-bottom: 50vh;\n           \n        }\n        .sliderWrap{\n    .imgSlider{\n        z-index: auto;\n        img{\n            height: 20vh;\n        }\n    }\n}\n}\n.side{\n    z-index: 10;\n.sideBar{\n   z-index: 2;\n}\n}\n    }\n\n"],"sourceRoot":""}]);
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
                    const bible = document.createElement('li')
                    bible.innerHTML = "The Bible"
                    currentBooks.appendChild(bible)
                    const deepWork = document.createElement('li')
                    deepWork.innerHTML = 'Deep Work'
                    currentBooks.appendChild(deepWork)
                    const LOTR = document.createElement('li')
                    LOTR.innerHTML = 'Lord of The Ring'
                    bookContainer.appendChild(LOTR)
                    const meditations = document.createElement('li')
                    meditations.innerHTML = 'Meditations of Marcus Aurelius'
                    currentBooks.appendChild(LOTR)
                    currentBooks.appendChild(meditations)
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

/***/ "./src/blog.js":
/*!*********************!*\
  !*** ./src/blog.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildBlog)
/* harmony export */ });
function buildBlog(){
    const main = document.querySelector('main')
    const blog = document.createElement('ol')
    blog.classList.add('blog')
    blog.appendChild(post('December 17th, 2023', "Today's Work", 'Today I am learning alot and creating the blog portion of my site. I am excited to start writing in here and putting my thoughts for anyone to see. The past few days I have been learning about Jest and the possibilities that I can use the framework with. I watched a bit of "Fun Fun Function" and he did a great job explaining test runners and the basic syntax of Jest through if statements. It was a little daunting at first but I feel able. I started a repo for practicing the framework and I am diving more in depth into TypeScript as I would prefer to use the language over Javascript for ease of seeing errors and keeping track of my code. In turn of using Jest I am exploring Babel the Javascript Transpiler I hope it gets some good use. Hoping to do alot of testing on my break and to produce a bit of The fighter foundation home page once I get home later. Thats about it for today, excited to keep learning and building, Ciao<br>-Patrick'))
    blog.appendChild(post('December 19th, 2023', 'Jest, TypeScript, and Holidays', "Alright so alot of documentation today, I have gone over a fair bit of TS's documentation and I am learning I should of done this earlier. I sort of been going into the unknown with TS and I had enough with it today when I couldnt import the logo for the fighter foundation. Browsing anything I could find on the web made me learn I have to do a dive into TS and I am willing to beat the language and learn everything I need. The most daunting thing for me was the tsconfig.json but after going over a few flags like noImplicitAny I honestly dont think its too bad anymore<br><br> yesterday I went over alot of the essentials of Jest and read some articles about pure functions, mocking, and Unit Tests, heres a brief overview:<br><b onclick= `window.open('https://www.geeksforgeeks.org/pure-functions-in-javascript/')`>Pure Functions</b><br> A function is pure if it always returns the same result if the same arguments are passed, it doesnt depend on any use state or data, it must only depend on the input arguments. The function must not produce any observable side effects such as network requests, input or output devices or data mutation.<br><b>Mocking</b><br> A mock is a test double that stands in for real implementation code during the unit testing process<br><b>Unit Test</b><br>A unit test tests individual units in isolation from the rest of the program<br> There is also the idea of test coverage and that refers to the amount of code that is covered by test cases, code coverage shouldnt ever be 100% as it does not result in 100% case coverage<br>Tight Coupling is the reason why mocking exists. Tight coupling makes code rigid and brittle, and less coupling is very desirable for the sake of making code easier to extend and maintain, also it allows for the elimination of mocking.<br> The holidays are somewhat stressful as always but I am just excited to spend some time with my family and to enjoy the cold.<br> Thats if from me for know, Merry Christmas to whoever see this and I hope 2023 was a great year for you<br>-Patrick"))
    blog.appendChild(post('January 8th, 2023', 'Finishing BattleShip and beginning on React','Today I finally finished my BattleShip project. It was a great project chock full of learning and code review. From the project I got a tast of Jest and testing, and I did a wide variety of code review learning that alot of time is wasted on inefficient methods of coding. Time to start learning React and remaking alot of my sites. Typescript was great as well and I gotta start reading my documentation.'))

   
   
    main.appendChild(blog)
   
}
function post(date, title, detail, img) {
    
const li = document.createElement('li')
const h2 = document.createElement('h2')
const text = document.createElement('p')
li.innerHTML = date
h2.innerHTML = title
text.innerHTML = detail
if (img != undefined) {
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('header')
    const img = document.createElement('img')
    img.src = img
    headerDiv.appendChild(h2)
    headerDiv.appendChild(img)
}else {
li.appendChild(h2)
}
li.appendChild(text)
li.addEventListener('click', () => {
    if(h2.style.display === 'block') {
        h2.style.display = 'none'   
        text.style.display = 'none'
        return
    }
    h2.style.display = 'block'
    text.style.display = 'block'
})
return li
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
/* harmony import */ var _pics_Battleship_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pics/Battleship.png */ "./src/pics/Battleship.png");
/* harmony import */ var _pics_FF_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pics/FF.png */ "./src/pics/FF.png");
/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills */ "./src/skills.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/project.js");






function buildMain(){
(0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_skills__WEBPACK_IMPORTED_MODULE_4__["default"])()
;(0,_project__WEBPACK_IMPORTED_MODULE_5__["default"])(_pics_FF_png__WEBPACK_IMPORTED_MODULE_3__, 'https://fighter-foundation2-0.vercel.app/', 'https://github.com/Patrick-Tomic/FighterFoundation2.0', 'So this is my first Volunteering project for a nonprofit in my area, The Fighter Foundation. I absolutely love the mission presented within this organization and I hope to help and make a difference in the growth. <br> for this project I am using React, Tailwind CSS, TypeScript, and Vite. Hosting on Vercel.','Fighter Foundation Rebuild')
;(0,_project__WEBPACK_IMPORTED_MODULE_5__["default"])(_pics_Battleship_png__WEBPACK_IMPORTED_MODULE_2__,'https://patrick-tomic.github.io/BattleShip/','https://github.com/Patrick-Tomic/BattleShip','From this project I implemented my first TDD in building, I did large amounts of code review and learned that smaller quantities of code can definetly be as strong as hundreds of lines','BattleShip') 
;(0,_project__WEBPACK_IMPORTED_MODULE_5__["default"])(_pics_weatherImg_png__WEBPACK_IMPORTED_MODULE_1__,'https://patrick-tomic.github.io/WeatherAPI/','https://github.com/Patrick-Tomic/WeatherAPI','This application is my first time utilizing a API, I do some simple animations within this project and learned alot through the use of responsive design and animation','Weather Application')
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
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog */ "./src/blog.js");



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
     const blogDiv = document.createElement('div')
     const blogBtn = document.createElement('button')
     blogBtn.innerHTML = "Blog"
     blogBtn.addEventListener('click',() =>{
        main.innerHTML = ''
        ;(0,_blog__WEBPACK_IMPORTED_MODULE_2__["default"])()
        body.style.backgroundColor = '#343434'
        sideBar.removeAttribute('id','active')
     })
     blogDiv.appendChild(blogBtn)
     sideBar.appendChild(aboutDiv)
     sideBar.appendChild(blogDiv)
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
/* harmony import */ var _pics_jest_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pics/jest.png */ "./src/pics/jest.png");










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
    while(count < 10){
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
            case 9:
                img.title = 'Jest'
                img.src = _pics_jest_png__WEBPACK_IMPORTED_MODULE_9__
                img.alt = 'Jest'
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

/***/ "./src/pics/Battleship.png":
/*!*********************************!*\
  !*** ./src/pics/Battleship.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31f73d40ed1cd4c7b6ae.png";

/***/ }),

/***/ "./src/pics/FF.png":
/*!*************************!*\
  !*** ./src/pics/FF.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "678ad5c81ccbc192ee6f.png";

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

/***/ "./src/pics/jest.png":
/*!***************************!*\
  !*** ./src/pics/jest.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fca73668fbf392e70eed.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxZQUFZLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsUUFBUSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxzQkFBc0IsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJDQUFJO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBRztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUNBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBDQUFHO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkNBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOENBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUNBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkNBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9ibG9nLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvYm9va3MuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9idWlsZE1haW4uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9ob2JiaWVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvaW1nLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3NraWxscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuZm9vdGVyIHtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMTVweCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbn1cbmZvb3RlciBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbn1cblxuaGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggd2hpdGU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuaGVhZGVyIHN2ZyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5oZWFkZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmhlYWRlciAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tbGVmdDogMTV2dztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuaGVhZGVyIC5uYW1lOmhvdmVyIHtcbiAgY29sb3I6ICNGRkQ3MDA7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5oZWFkZXIgLnBvcnRyYWl0IHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDMyMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmhlYWRlciAud2hvQW1JIHtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oZWFkZXIgLndob0FtSSBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLnNraWxscyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAwcHggMTVweCAxNXB4IGJsYWNrO1xufVxuLnNraWxscyBoMiB7XG4gIG1hcmdpbi1sZWZ0OiA0MyU7XG59XG4uc2tpbGxzIC53cmFwIHtcbiAgbWFyZ2luLWxlZnQ6IDN2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xufVxuLnNraWxscyAuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2tpbGxzIC5jYXJkIGltZyB7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1pbi13aWR0aDogM3Z3O1xuICBtaW4taGVpZ2h0OiA2dmg7XG4gIG1heC13aWR0aDogM3Z3O1xuICBtYXgtd2lkdGg6IDZ2aDtcbn1cbi5za2lsbHMgLmNhcmQgLmh0bWwge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5za2lsbHMgLmNhcmQgLmNzcyB7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuLnNraWxscyAuY2FyZCAuamF2YSB7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5wcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIHtcbiAgcGFkZGluZzogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyMHZ3O1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgLmJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgLmJ0bnMgYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDF2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkYwMDtcbiAgYm9yZGVyOiAjRkZCRjAwIDFweCBzb2xpZDtcbiAgd2lkdGg6IDl2dztcbiAgaGVpZ2h0OiA1dmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICBjb2xvcjogd2hpdGU7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5kZXNjcmlwdGlvbiBoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmRlc2NyaXB0aW9uIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG4uZm9ybURpdiB7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDE1cHggd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZm9ybURpdiAuY29udGFjdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzNXZ3O1xufVxuLmZvcm1EaXYgLmNvbnRhY3QgaDMge1xuICBmb250LXNpemU6IDIzcHg7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xufVxuLmZvcm1EaXYgLmNvbnRhY3QgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5mb3JtRGl2IGZvcm0ge1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAyNXZ3O1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZvcm1EaXYgZm9ybSBsYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5mb3JtRGl2IGZvcm0gaW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAxNXZ3O1xufVxuLmZvcm1EaXYgZm9ybSB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAyMHZ3O1xufVxuLmZvcm1EaXYgZm9ybSAuc3VibWl0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDR2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkYwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5mb3JtRGl2IGZvcm0gLnN1Ym1pdDpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbn1cblxuLnNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnNpZGUgLnNpZGVCYXIge1xuICB3aWR0aDogMjV2dztcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0NTRGO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IGF1dG87XG59XG4uc2lkZSAuc2lkZUJhciAucmVtb3ZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDU0RjtcbiAgYm9yZGVyOiBub25lO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNpZGUgLnNpZGVCYXIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zaWRlIC5zaWRlQmFyIGRpdiBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDU0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2lkZSAuc2lkZUJhciBkaXYgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNGRkJGMDA7XG59XG4uc2lkZSAjYWN0aXZlIHtcbiAgYW5pbWF0aW9uOiBvcGVuU2lkZSAxcztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XG59XG4uc2lkZSAjZGVBY3RpdmUge1xuICBhbmltYXRpb246IGNsb3NlU2lkZSAxcztcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xufVxuXG5tYWluIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbm1haW4gLmJsb2cge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwdmggMTB2dztcbn1cbm1haW4gLmJsb2cgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbm1haW4gLmJsb2cgbGkgaDIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1haW4gLmJsb2cgbGkgcCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1haW4gLmJsb2cgbGkgcCBiIHtcbiAgY29sb3I6ICNGNEJCNDQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbm1haW4gLmJpbyB7XG4gIHotaW5kZXg6IDU7XG4gIGhlaWdodDogNzAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5tYWluIC5iaW8gYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWFpbiAuYmlvIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbm1haW4gLmJpbyAubXlTdG9yeSB7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyOiBzb2xpZCA1cHggIzEzMjc0RjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgcGFkZGluZzogMnZoIDN2dztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAzMyU7XG59XG5tYWluIC5iaW8gLm15U3RvcnkgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xufVxubWFpbiAuYmlvIC5ib29rTGlzdCB7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDMzJTtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyOiA1cHggc29saWQgIzEzMjc0RjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbm1haW4gLmJpbyAuYm9va0xpc3QgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICB3aWR0aDogMTB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcbn1cbm1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYgLmJvb2tEZXNjcmlwdGlvbiB7XG4gIGxlZnQ6IDI1JTtcbiAgei1pbmRleDogMztcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzEzMjc0RjtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTh2dztcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAydncgMnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxubWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDE1dnc7XG59XG5tYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IG9sIGxpOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5tYWluIC5iaW8gLmhvYmJpZXMge1xuICBib3JkZXItdG9wOiAjMTMyNzRGIDVweCBzb2xpZDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAydmggM3Z3O1xuICB3aWR0aDogMzMlO1xufVxubWFpbiAuYmlvIC5ob2JiaWVzIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcbn1cbm1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYgLmxpc3QgbGkge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5tYWluIC5iaW8gLmhvYmJpZXMgLmhvYmJ5RGl2IC5saXN0IGxpIHAge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxNXZ3O1xufVxubWFpbiAucXVvdGUge1xuICBtYXJnaW4tbGVmdDogMzB2dztcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxubWFpbiAuZmFtaWx5QWxidW0ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm1haW4gLnNsaWRlcldyYXAge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxubWFpbiAuc2xpZGVyV3JhcCAuaW1nU2xpZGVyIHtcbiAgd2lkdGg6IDEwMDAwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cbm1haW4gLnNsaWRlcldyYXAgLmltZ1NsaWRlciBpbWcge1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIGhlaWdodDogMjV2aDtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5tYWluIC5leHBsYWluIHtcbiAgbWFyZ2luOiA1dmggNXZ3O1xufVxubWFpbiAuZXhwbGFpbiBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm1haW4gLmV4cGxhaW4gcCB7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG5Aa2V5ZnJhbWVzIG9wZW5TaWRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjEpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBjbG9zZVNpZGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCkge1xuICAucHJvamVjdHMgLnByb2plY3RDYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIHtcbiAgICBtYXJnaW4tbGVmdDogNnZ3O1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDN2dztcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyBidXR0b24ge1xuICAgIHdpZHRoOiAxMnZ3O1xuICAgIGhlaWdodDogNnZoO1xuICB9XG4gIG1haW4gcCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIG1haW4gbGkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBtYWluIGxpIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuc2tpbGxzIC53cmFwIHtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgfVxuICAuc2tpbGxzIC53cmFwIC5jYXJkIGltZyB7XG4gICAgbWF4LXdpZHRoOiA2dnc7XG4gICAgbWF4LWhlaWdodDogMTB2aDtcbiAgICBtaW4td2lkdGg6IDZ2dztcbiAgICBtaW4taGVpZ2h0OiA2dmg7XG4gIH1cbiAgLnNraWxscyAud3JhcCAuY2FyZCBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5za2lsbHMgLndyYXAgLmNhcmQgLmNzcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIH1cbiAgLnNraWxscyAud3JhcCAuY2FyZCAuaHRtbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiAydnc7XG4gICAgd2lkdGg6IDMwdnc7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgLmJ0bnMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIC5idG5zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEzdnc7XG4gICAgaGVpZ2h0OiA3dmg7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1yaWdodDogNXZ3O1xuICB9XG4gIG1haW4gLmJpbyB7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgfVxuICBtYWluIC5iaW8gLm15U3RvcnkgLnN1bURpdiBQIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiAuYm9va0Rlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogNDV2dztcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IGxpIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCBsaSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIG1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYgLmxpc3QgcCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gIG1haW4gLmltZ1NsaWRlciBpbWcge1xuICAgIGhlaWdodDogMTV2aDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIGJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGhlYWRlciBidXR0b24gaDIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuaGVhZGVyIC5wb3J0cmFpdCB7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuICAgIGhlaWdodDogMTYwcHg7XG4gIH1cbiAgLmhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5oZWFkZXIgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB9XG4gIC5za2lsbHMgLndyYXAge1xuICAgIG1hcmdpbi10b3A6IDN2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLnNraWxscyAud3JhcCAuY2FyZCAud2VicGFjayB7XG4gICAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgfVxuICAuc2tpbGxzIC53cmFwIC5jYXJkIC5odG1sIHtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xuICB9XG4gIC5za2lsbHMgLndyYXAgLmNhcmQgLmNzcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLnNraWxscyAud3JhcCAuY2FyZCBpbWcge1xuICAgIG1heC13aWR0aDogNDBweDtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICB9XG4gIC5za2lsbHMgaDIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnByb2plY3RzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgaW1nIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI1dnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIC5idG5zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmRlc2NyaXB0aW9uIGgyIHtcbiAgICBtYXJnaW4tbGVmdDogMjB2dztcbiAgICBjb2xvcjogI0ZGQkYwMDtcbiAgfVxuICAucHJvamVjdHMgLmRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICAucHJvamVjdHMgLmRlc2NyaXB0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnByb2plY3RzIC5kZXNjcmlwdGlvbiBwIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLnNpZGUgLnNpZGVCYXIge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLnNpZGUgI2FjdGl2ZSB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG4gIC5zaWRlICNkZUFjdGl2ZSB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG4gIGhlYWRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBoZWFkZXIgLmJvc25pYW5XYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgbWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qICNhbmltYXRle1xuICAgICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAjcmV2ZXJzZXtcbiAgICAgICAgYW5pbWF0aW9uOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9ICovXG4gIH1cbiAgbWFpbiAucXVvdGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICB9XG4gIG1haW4gLmJpbyB7XG4gICAgYm9yZGVyLXRvcDogIzEzMjc0RiBzb2xpZCA1cHg7XG4gICAgei1pbmRleDogMDtcbiAgICBtaW4taGVpZ2h0OiA0MjB2aDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIG1haW4gLmJpbyAuYm9va0xpc3Qge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IHtcbiAgICB6LWluZGV4OiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiBsaSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiBsaSAuYm9va0Rlc2NyaXB0aW9uIHtcbiAgICBsZWZ0OiAtMyU7XG4gICAgei1pbmRleDogMDtcbiAgICB3aWR0aDogODB2dztcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBtYWluIC5iaW8gLmhvYmJpZXMge1xuICAgIG1hcmdpbi1ib3R0b206IDUwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogIzEzMjc0RiA1cHggc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIG1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIG1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYgLmxpc3QgbGkge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgfVxuICBtYWluIC5iaW8gLmhvYmJpZXMgLmhvYmJ5RGl2IC5saXN0IGxpIHAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIG1haW4gLmJpbyAubXlTdG9yeSB7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMxMzI3NEY7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgd2lkdGg6IDk0JTtcbiAgfVxuICBtYWluIC5iaW8gLm15U3RvcnkgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgbWFpbiAuYmlvIC5teVN0b3J5IC5zdW1EaXYge1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBtYWluIC5iaW8gLm15U3RvcnkgLnN1bURpdiBwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgbWFpbiAuaW1nU2xpZGVyIGltZyB7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICB9XG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDQ1cHgpIHtcbiAgaGVhZGVyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBoZWFkZXIgLmJvc25pYW5XYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgbWFpbiAuYmlvIHtcbiAgICB6LWluZGV4OiBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwdmg7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiAuYm9va0Rlc2NyaXB0aW9uIHtcbiAgICB6LWluZGV4OiBhdXRvO1xuICB9XG4gIG1haW4gLnNsaWRlcldyYXAgLmltZ1NsaWRlciB7XG4gICAgei1pbmRleDogYXV0bztcbiAgfVxuICBtYWluIC5zbGlkZXJXcmFwIC5pbWdTbGlkZXIgaW1nIHtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gIH1cbiAgLnNpZGUge1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gIC5zaWRlIC5zaWRlQmFyIHtcbiAgICB6LWluZGV4OiAyO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFNBQUE7RUFDQSw4Q0FBQTtBQURKOztBQUtBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBRUkscUNBQUE7RUFNQSx5QkFyQkc7QUFhUDtBQUdJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFuQkQ7QUFrQlA7O0FBS0E7RUFFSSw2QkFBQTtFQUVBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUpKO0FBS0s7RUFDRyxpQkFBQTtFQUNBLGVBQUE7QUFIUjtBQUtJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFIUjtBQUtJO0VBQ0ksY0FBQTtFQUNJLGlCQUFBO0VBQ0QsWUFBQTtFQUNBLHdFQUFBO0FBSFg7QUFLSTtFQUNJLGNBQUE7QUFIUjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFISjtBQUtJO0VBRUcsV0FBQTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQU1JO0VBQ0ksZUFBQTtFQUVBLDhDQUFBO0VBQ0EsWUFBQTtBQUxSO0FBTVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFKWjs7QUFTQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUEsK0JBQUE7QUFQSjtBQVFJO0VBQ0ksZ0JBQUE7QUFOUjtBQVNJO0VBQ0ksZ0JB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QUFBO0lBQ0EsbUJBQUE7RUF6TFY7RUE0S2M7SUFDSSxlQUFBO0lBQ0EsWUFBQTtFQTFLbEI7RUE2S2tCO0lBQ0ksYUFBQTtFQTNLdEI7RUFzTEU7SUFDSSxhQUFBO0VBcExOO0VBcUxNO0lBQ0ksWUFBQTtFQW5MVjtFQXdMRjtJQUNJLFdBQUE7RUF0TEY7RUF1TEY7SUFDRyxVQUFBO0VBckxEO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiIFxcbiRiYXNlOiAjMzQzNDM0O1xcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICBcXG59XFxuIFxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzM0MzQzNDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgIFxcbn1cXG5mb290ZXJcXG57XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDE1cHggd2hpdGU7XFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlO1xcbiAgICB9XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlO1xcbn1cXG5oZWFkZXJ7XFxuICAgIFxcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCB3aGl0ZTtcXG4gICBcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICBzdmd7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgIH1cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAubmFtZXsgXFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTV2dztcXG4gICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgICAgIH1cXG4gICAgLm5hbWU6aG92ZXJ7XFxuICAgICAgICBjb2xvcjogI0ZGRDcwMDtcXG4gICAgfVxcbn1cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICBcXG4gICAgLnBvcnRyYWl0e1xcbiAgICBcXG4gICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICB3aWR0aDphdXRvO1xcbiAgICAgICAgaGVpZ2h0OiAzMjFweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG4gICAgLndob0FtSXtcXG4gICAgICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgXFxuICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuLnNraWxsc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICBcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTVweCBibGFjaztcXG4gICAgaDJ7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNDMlO1xcbiAgICB9XFxuXFxuICAgIC53cmFwe1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDN2dztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgICAgICAgIFxcbiAgICBcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIC5jYXJke1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBpbWd7XFxuICAgICAgICAgXFxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogM3Z3O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDZ2aDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDN2dztcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDZ2aDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5odG1se1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmNzc3tcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTNweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5qYXZhe1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgfVxcbn1cXG4ucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIC5wcm9qZWN0Q2FyZHtcXG4gICAgICAgXFxuICAgICAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIFxcbiAgICAgICAgLmxpbmtze1xcbiAgICAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwdnc7XFxuICAgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuYnRuc3tcXG4gICAgICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxdmg7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCRjAwO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAjRkZCRjAwIDFweCBzb2xpZDtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5dnc7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NXZoO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgIGgye1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICB9XFxufVxcbiBcXG4gICAgLmZvcm1EaXZ7XFxuICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAxNXB4IHdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcXG4gICAgICAgIFxcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAuY29udGFjdHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgaDN7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XFxuICAgICAgICB9XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIH1cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgIFxcbiAgICAgICAgd2lkdGg6MzV2dyA7XFxuICAgICAgICBcXG4gICAgICAgfVxcbiAgICAgICAgZm9ybXtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICBsYWJlbHtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICB9XFxuICAgICAgICAgICAgd2lkdGg6IDI1dnc7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgICAgICAgICBpbnB1dHtcXG4gICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTV2dztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgdGV4dGFyZWF7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuc3VibWl0e1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNHZoO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkJGMDA7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5zdWJtaXQ6aG92ZXJ7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcXG4gICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbi5zaWRle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBcXG4gIFxcbiAgIFxcbi5zaWRlQmFye1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXFx0IzM2NDU0RjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIGRpc3BsYXk6IG5vbmU7XFxuICAgei1pbmRleDogYXV0bztcXG4gICAucmVtb3Zle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcXHQjMzY0NTRGO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgIFxcbiAgICBidXR0b257XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IFxcdCMzNjQ1NEY7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG4gICAgYnV0dG9uOmhvdmVye1xcbiAgICAgICAgY29sb3I6ICAjRkZCRjAwO1xcbiAgICB9XFxufVxcbiBcXG4gIFxcbn1cXG4jYWN0aXZle1xcbiAgICBhbmltYXRpb246IG9wZW5TaWRlIDFzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgei1pbmRleDogMjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xcbiAgXFxuICAgIFxcbn0gIFxcbiNkZUFjdGl2ZXtcXG4gICAgYW5pbWF0aW9uOiBjbG9zZVNpZGUgMXM7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcXG59XFxufVxcblxcbm1haW57XFxuIG1pbi1oZWlnaHQ6IDEwMCU7XFxuLmJsb2d7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTB2aCAxMHZ3O1xcbiAgXFxuICAgIGxpe1xcbiAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBoMntcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGJ7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRjRCQjQ0O1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICB9XFxuICAgXFxufVxcblxcbi5iaW97XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIGhlaWdodDogNzAwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgYnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgfVxcbiAgIGJ1dHRvbjpob3ZlcntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgIH1cXG4gICAgXFxuICAgIC5teVN0b3J5e1xcbiAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xcbiAgICAgICAgfVxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogc29saWQgNXB4ICMxMzI3NEY7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICBcXG4gICAgICAgIFxcbiAgICAgICBwYWRkaW5nOjJ2aCAzdnc7XFxuICAgICAgIFxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgd2lkdGg6IDMzJTtcXG4gICAgICAgICBcXG5cXG4gICAgfVxcbiAgICAuYm9va0xpc3R7XFxuICAgICAgICAgXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiAzMyU7XFxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgIzEzMjc0RjtcXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICAgICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmJvb2tEaXZ7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICBcXG4gICAgICAgICAgICAuYm9va0Rlc2NyaXB0aW9ue1xcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNSU7XFxuICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjMTMyNzRGO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHZ3O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAydncgMnZoOyAgICAgXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGxpe1xcbiAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTV2dztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgb2x7XFxuICAgICAgICAgICAgbGk6aG92ZXJ7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgfVxcbiAgIC5ob2JiaWVze1xcbiAgICBib3JkZXItdG9wOiAjMTMyNzRGIDVweCBzb2xpZDtcXG4gICAgXFxuICAgIGJ1dHRvbntcXG4gICAgICAgXFxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEJCNDQ7XFxuICAgIH1cXG4gICAgIFxcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6MnZoIDN2dztcXG4gICAgd2lkdGg6IDMzJTtcXG4gICAgIFxcbiAgICAuaG9iYnlEaXZ7XFxuICAgICAgICAgXFxuICAgIC5saXN0e1xcbiAgICAgICAgbGl7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICBcXG4gICAgICAgICAgIHdpZHRoOiAxNXZ3O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIH1cXG59XFxuICAgfVxcbn1cXG4ucXVvdGV7XFxuICBtYXJnaW4tbGVmdDogMzB2dztcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG59XFxuLmZhbWlseUFsYnVte1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc2xpZGVyV3JhcHtcXG4gICBvdmVyZmxvdzogaGlkZGVuO1xcbi5pbWdTbGlkZXJ7XFxuICAgIHdpZHRoOiAxMDAwMDB2dztcXG4gICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgaW1ne1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcXG4gICAgICAgIGhlaWdodDogMjV2aDtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgfVxcbn1cXG59XFxuLmV4cGxhaW57XFxuICAgbWFyZ2luOiA1dmggNXZ3O1xcbiAgICBoMntcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICBwe1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIH1cXG59XFxufVxcblxcbkBrZXlmcmFtZXMgb3BlblNpZGUge1xcbiAgICBmcm9te1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB9XFxuICAgICA3MCV7XFxuICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMSk7XFxuICAgICB9XFxuICAgICB0b3tcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGNsb3NlU2lkZXtcXG4gICAgZnJvbXtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgdG97XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCl7XFxuICAgIC5wcm9qZWN0c3tcXG4gICAgICAgIC5wcm9qZWN0Q2FyZHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIC5saW5rc3tcXG4gICAgICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDN2dztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNnZ3O1xcbiAgICAgICAgICAgICAgICAuYnRuc3tcXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTJ2dztcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBtYWlue1xcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgICAgICB9XFxuICAgICAgICBsaXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgICAgcHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpe1xcbiAgICAuc2tpbGxze1xcbiAgICAgICAgLndyYXB7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxuICAgICAgICAgICAgLmNhcmR7XFxuICAgICAgICAgICAgICBcXG4gICAgICAgICBpbWd7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2dnc7XFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTB2aDtcXG4gICAgICAgICAgICAgbWluLXdpZHRoOiA2dnc7XFxuICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDZ2aDtcXG4gICAgICAgIH1cXG4gICAgICAgIHB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIH1cXG4gICAgICAgICAuY3Nze1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xcbiAgICAgICAgIH1cXG4gICAgICAgICAuaHRtbHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcXG4gICAgICAgICB9XFxuICAgIH1cXG59XFxufVxcbi5wcm9qZWN0c3tcXG4gICAgLnByb2plY3RDYXJke1xcbiAgICAgICAgXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLmxpbmtze1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnZ3O1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzB2dztcXG4gICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC5idG5ze1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgICAgICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzdnc7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogN3ZoO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuZGVzY3JpcHRpb257XFxuICAgICAgICBcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXZ3O1xcbiAgICB9XFxufVxcbn1cXG5tYWlueyBcXG4gICAgIFxcbi5iaW97XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIC5teVN0b3J5e1xcbiAgICAgICAgLnN1bURpdntcXG4gICAgICAgICAgICBQe1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuYm9va0xpc3R7XFxuICAgICAgICAuYm9va0RpdntcXG4gICAgICAgICAgICAuYm9va0Rlc2NyaXB0aW9ue1xcbiAgICAgICAgICAgICAgICB3aWR0aDogNDV2dztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgbGl7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgXFxuICAgIH1cXG4gICAgLmhvYmJpZXN7XFxuXFxuICAgLmhvYmJ5RGl2e1xcbiAgICAubGlzdHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgbGl7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICB9XFxufVxcbn1cXG4uaW1nU2xpZGVye1xcbiAgICBpbWd7XFxuICAgICAgICBoZWlnaHQ6IDE1dmg7XFxuICAgIH1cXG59XFxufVxcbiB9XFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgICBcXG4gICAgYm9keXtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgIFxcbiAgICB9XFxuICAgIGhlYWRlcntcXG4gICAgICAgICBcXG4gICAgICAgICBcXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgIGgye1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICB9XFxuICAgIC5oZWFkZXJ7XFxuICAgICAgICBcXG4gICAgICAgICBcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC5wb3J0cmFpdHtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgIGgye1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIH1cXG4gICAgICAgIHB7XFxuICAgICAgICAgIFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuc2tpbGxze1xcbiAgICAgIFxcbiBcXG4gICAgICBcXG4gICAgLndyYXB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAzdmg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgXFxuICAgICAgICAuY2FyZHtcXG4gICAgICAgICAgLndlYnBhY2t7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJ2dztcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAgIC5odG1se1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgLmNzc3tcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNDBweDtcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbiAgICAgICAgaDJ7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAucHJvamVjdHN7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIFxcbiAgICAgICAgLnByb2plY3RDYXJke1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgLmxpbmtze1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXZ3O1xcbiAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmJ0bnN7XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwdnc7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xcbiAgICAgICAgICAgICAgICBoMntcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHZ3O1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICAjRkZCRjAwO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICBcXG4gICAgICAgICAgIHBhZGRpbmc6IDI1cHg7ICAgICBcXG4gICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgXFxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgICAgICAgICAgICAgaDJ7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgcHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICBcXG4gICAgfVxcbiAgICAuc2lkZXtcXG4gICAgICAgIC5zaWRlQmFye1xcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICB9XFxuICAgICAgICAjYWN0aXZle1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgICNkZUFjdGl2ZXtcXG4gICAgICAgICAgICBhbmltYXRpb246IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG4vL0FCT1VUIE1FIENTU1xcbmhlYWRlcntcXG4gICAgei1pbmRleDogMTtcXG4gICAgICBcXG4gICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgIC5ib3NuaWFuV2Fye1xcbiAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgfVxcbiAgICAgICBoMntcXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgfVxcbiAgIH1cXG5tYWlue1xcbiAgICBcXG4gICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIFxcbiAgICAucXVvdGV7XFxuICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcbiAgICAgICAgXFxuICAgIH1cXG4vKiAjYW5pbWF0ZXtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuI3JldmVyc2V7XFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufSAqL1xcbi5iaW97XFxuICAgIGJvcmRlci10b3A6IzEzMjc0RiBzb2xpZCA1cHg7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDQyMHZoO1xcbiAgICAgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAuYm9va0xpc3R7XFxuICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIH1cXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIFxcbiAgICAgICAgLmJvb2tEaXZ7XFxuICAgICAgIFxcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgLmJvb2tEZXNjcmlwdGlvbntcXG4gICAgICAgICAgICAgICAgbGVmdDogLTMlO1xcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogODB2dztcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGNEJCNDQ7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgICAgIC5ob2JiaWVze1xcbiAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTB2aDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBib3JkZXItdG9wOiAjMTMyNzRGIDVweCBzb2xpZDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOm5vbmU7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICAuaG9iYnlEaXZ7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIC5saXN0e1xcbiAgICAgICAgICAgICAgICAgICAgbGl7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgIHB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5teVN0b3J5e1xcbiAgICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzEzMjc0RjtcXG4gICAgICAgICBcXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgd2lkdGg6IDk0JTtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIC5zdW1EaXZ7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICBwe1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgXFxuICAgIFxcbn1cXG4uaW1nU2xpZGVye1xcbiAgICBpbWd7XFxuICAgICAgICBoZWlnaHQ6IDI1dmg7XFxuICAgICAgICAgXFxuICAgIH1cXG59XFxufVxcblxcbip7XFxuICAgXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOjQ0NXB4KXtcXG4gICAgIFxcbiAgICBoZWFkZXJ7XFxuICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAuYm9zbmlhbldhcntcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgaDJ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIG1haW57XFxuICAgICAgIFxcbiAgICAgICAgLmJpb3tcXG4gICAgICAgICAgICAuYm9va0xpc3R7XFxuICAgICAgICAgICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuYm9va0RpdntcXG4gICAgICAgICAgICAgICAgICAgIC5ib29rRGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB6LWluZGV4OiBhdXRvO1xcbiAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHZoO1xcbiAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICAuc2xpZGVyV3JhcHtcXG4gICAgLmltZ1NsaWRlcntcXG4gICAgICAgIHotaW5kZXg6IGF1dG87XFxuICAgICAgICBpbWd7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHZoO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbn1cXG4uc2lkZXtcXG4gICAgei1pbmRleDogMTA7XFxuLnNpZGVCYXJ7XFxuICAgei1pbmRleDogMjtcXG59XFxufVxcbiAgICB9XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYnVpbGRCb29rcyBmcm9tIFwiLi9ib29rc1wiXG5pbXBvcnQgYnVpbGRIb2JiaWVzIGZyb20gXCIuL2hvYmJpZXNcIlxuaW1wb3J0IGJ1aWxkSW1hZ2VTbGlkZXIgZnJvbSBcIi4vaW1nXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQWJvdXRNZSgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBjb25zdCBiaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRpdGxlLmlubmVySFRNTCA9IGBUaGVyZSBpcyBzb21lIGdvb2QgaW4gdGhpcyB3b3JsZDxicj4gYW5kIGl0J3Mgd29ydGggZmlnaHRpbmcgZm9yLiAgICAtSi5SLlIgVG9sa2llbiBgXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncXVvdGUnKVxuICAgIGJpby5jbGFzc0xpc3QuYWRkKCdiaW8nKVxuICAgIGNvbnN0IG15U3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG15U3RvcnkuY2xhc3NMaXN0LmFkZCgnbXlTdG9yeScpXG4gICAgY29uc3QgbXlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIG15SGVhZGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICBpZihzdW1tQ29udGFpbmVyLmlkID09ICdhbmltYXRlJyl7XG4gICAgICAgICAgICAgICAgICAgc3VtbUNvbnRhaW5lci5pZCA9ICdyZXZlcnNlJ1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzdW1tQ29udGFpbmVyLmlkID0gJ2FuaW1hdGUnXG4gICAgICAgICAgICB9KVxuICAgIG15SGVhZGluZy5pbm5lckhUTUwgPSAnTXkgU3RvcnknXG4gICAgICAgIGNvbnN0IGJvb2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBzdW1tQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc3VtbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdW1EaXYnKVxuICAgICAgICBjb25zdCBob2JieUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGhvYmJ5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvYmJ5RGl2JylcbiAgICBjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgc3VtbWFyeS5pbm5lckhUTUwgPSAnTXkgZmFtaWx5IGlzIG9yaWdpbmFsbHkgZnJvbSBCb3NuaWEgYW5kIHRoZSBvbmx5IGZhbWlseSB0aGF0IGxpdmVzIGluIHRoZSBzdGF0ZXMgaXMgbXkgbW90aGVyIGFuZCBzaXN0ZXIuIFdoZW4gSSB3YXMgaW4gaGlnaHNjaG9vbCBJIHdhcyB1bnN1cmUgd2hhdCBJIHdhbnRlZCB0byBkbyB3aXRoIG15IGxpZmUgdW50aWwgc2VuaW9yIHllYXIgd2hlbiBJIGdvdCBpbnRvIEFQQ1MgYW5kIGxlYXJuZWQgSmF2YS4gSSBxdWlja2x5IGxlYXJuZWQgaXQgd2FzIHdoYXQgSSB3YW50ZWQgdG8gZG8gZm9yIG1ham9yaXR5IG9mIG15IGxpZmUuIEkgYWx3YXlzIGxvdmVkIGJ1aWxkaW5nIHNpbmNlIEkgd2FzIGEga2lkLCBhbmQgY29kaW5nIGtlZXBzIG15IGlubmVyIGNoaWxkIGFsaXZlLiBJIHRyeSB0byBrZWVwIG15c2VsZiBhcyBidXN5IGFzIHBvc3NpYmxlIGRheSBpbiBhbmQgZGF5IG91dCwgYW5kIHRyeSB0byB0aGluayBvZiBwcm9ncmFtbWluZyBhcyBteSBudW1iZXIgb25lIHByaW9yaXR5LiBIb3BpbmcgdG8gZXZlbnR1YWxseSBzdGFydCBteSBvd24gY29tcGFueSB0aGF0IGNvdWxkIGJyYW5jaCBvdXQgaW50byB2YXJpZXR5IG9mIHdvcmsuIEkgYW0gYnVpbGRpbmcgZ3JlYXQgY29ubmVjdGlvbnMgd2l0aCBwZW9wbGUgYW5kIHRyeWluZyB0byBoZWxwIGFzIG1hbnkgYXMgSSBjYW4uIEkgaGF2ZSBhIGJlYXV0aWZ1bCBnaXJsZnJpZW5kIHRoYXQgSSBsb3ZlIHdpdGggbXkgd2hvbGUgaGVhcnQgYW5kIHdlIHNoYXJlIGEgdG93bmhvbWUgd2l0aCB0d28gZG9ncyBuYW1lZCBEZWxpbGFoIGFuZCBOZW1vIGFuZCBteSBicm90aGVyIERlYW4uJ1xuICAgIGNvbnN0IGJvb2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBib29rTGlzdC5jbGFzc0xpc3QuYWRkKCdib29rTGlzdCcpXG4gICAgY29uc3QgYm9va1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBib29rVGl0bGUuaW5uZXJIVE1MID0gJ015IEJvb2tzJ1xuICAgICAgICAgICAgICAgIGJvb2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoYm9va0NvbnRhaW5lci5pZCA9PSAnYW5pbWF0ZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5pZCA9ICdyZXZlcnNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGJvb2tDb250YWluZXIuaWQgPSAnYW5pbWF0ZSdcbiAgICAgICAgICAgICAgICB9KVxuICAgIGJvb2tMaXN0LmFwcGVuZENoaWxkKGJvb2tUaXRsZSlcbiAgICBjb25zdCBvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJylcbiAgICBib29rQ29udGFpbmVyLmFwcGVuZENoaWxkKG9sKVxuICAgIGJvb2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9va0RpdicpXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFJlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgICAgICAgICAgY3VycmVudFJlYWQuaW5uZXJIVE1MID0gJ0N1cnJlbnRseSBSZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Qm9va3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgICAgICAgICBiaWJsZS5pbm5lckhUTUwgPSBcIlRoZSBCaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCb29rcy5hcHBlbmRDaGlsZChiaWJsZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVlcFdvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICAgICAgICAgIGRlZXBXb3JrLmlubmVySFRNTCA9ICdEZWVwIFdvcmsnXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCb29rcy5hcHBlbmRDaGlsZChkZWVwV29yaylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgTE9UUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgTE9UUi5pbm5lckhUTUwgPSAnTG9yZCBvZiBUaGUgUmluZydcbiAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5hcHBlbmRDaGlsZChMT1RSKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZWRpdGF0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgbWVkaXRhdGlvbnMuaW5uZXJIVE1MID0gJ01lZGl0YXRpb25zIG9mIE1hcmN1cyBBdXJlbGl1cydcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJvb2tzLmFwcGVuZENoaWxkKExPVFIpXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCb29rcy5hcHBlbmRDaGlsZChtZWRpdGF0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50UmVhZClcbiAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50Qm9va3MpXG4gICAgICAgICAgICAgICAgICAgIGJvb2tMaXN0LmFwcGVuZENoaWxkKGJvb2tDb250YWluZXIpXG4gICAgICAgICAgICBjb25zdCBob2JieUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgaG9iYnlIZWFkaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgIGlmKGhvYmJ5Q29udGFpbmVyLmlkID09ICdhbmltYXRlJyl7XG4gICAgICAgICAgICAgICAgICAgIGhvYmJ5Q29udGFpbmVyLmlkID0gJ3JldmVyc2UnXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGhvYmJ5Q29udGFpbmVyLmlkID0gJ2FuaW1hdGUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaG9iYnlIZWFkaW5nLmlubmVySFRNTCA9ICdNeSBIb2JiaWVzJ1xuICAgICAgICAgICAgY29uc3QgaG9iYnlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGhvYmJ5TGlzdC5jbGFzc0xpc3QuYWRkKCdob2JiaWVzJylcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKVxuICAgICAgICAgICAgaG9iYnlMaXN0LmFwcGVuZENoaWxkKGhvYmJ5SGVhZGluZylcbiAgICAgICAgICAgIGhvYmJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpXG4gICAgICAgICAgICBob2JieUxpc3QuYXBwZW5kQ2hpbGQoaG9iYnlDb250YWluZXIpXG4gICAgbXlTdG9yeS5hcHBlbmRDaGlsZChteUhlYWRpbmcpXG4gICAgc3VtbUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdW1tYXJ5KVxuICAgIG15U3RvcnkuYXBwZW5kQ2hpbGQoc3VtbUNvbnRhaW5lcilcbiAgICBiaW8uYXBwZW5kQ2hpbGQoYm9va0xpc3QpXG4gICAgYmlvLmFwcGVuZENoaWxkKG15U3RvcnkpXG4gICAgYmlvLmFwcGVuZENoaWxkKGhvYmJ5TGlzdClcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYmlvKVxuICAgIGJ1aWxkQm9va3MoJ0F0b21pYyBIYWJpdHMnLCAnV3JpdHRlbiBieSBKYW1lcyBDbGVhcjxicj48YnI+IHdhcyBhIGJlbmVmaWNhbCBib29rIGZvciBtZSB0aGF0IHRhdWdodCBtZSBob3cgdG8gYnVpbGQgcG9zaXRpdmUgaGFiaXRzIGluY3JlbWVudGFsbHkgZWFjaCBkYXkuIFdhcyBhIGJpZyBoZWxwIGZvciBtZSB0byBrZWVwIGNvZGluZycsJ2h0dHBzOi8vamFtZXNjbGVhci5jb20vYXRvbWljLWhhYml0cycgKVxuICAgIGJ1aWxkQm9va3MoJ1RoZSBBdXRvYmlvZ3JhcGh5IG9mIE1hbGNvbSBYJywnV3JpdHRlbiBieSBBbGV4IEhhbGV5PGJyPjxicj5UaGlzIGJvb2sgdGF1Z2h0IG1lIGFsb3QgYWJvdXQgdGhlIFVuaXRlZCBzdGF0ZXMgZHVyaW5nIHRoZSBlYXJseSBwZXJpb2RzIGJlZm9yZSB0aGUgY2l2aWwgcmlnaHRzIG1vdmVtZW50IGFuZCBhbHNvIGFib3V0IHRoZSBtaXN1bmRlcnN0b29kIE1hbGNvbSBYLiBMZWFybmVkIGFib3V0IHRoZSBjcmVhdGlvbiBvZiB0aGUgTmF0aW9uIG9mIElzbGFtLCBhbmQgaG93IHByb2ZvdW5kIE1hbGNvbXMgbGlmZSB3YXMuJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGhlX0F1dG9iaW9ncmFwaHlfb2ZfTWFsY29sbV9YJylcbiAgICBidWlsZEJvb2tzKCdUaGUgNSBBTSBDbHViJywnV3JpdHRlbiBieSBSb2JpbiBTaGFybWE8YnI+PGJyPkEgZ3JlYXQgcmVhZCBjcmVhdGluZyBhIG5hcnJpdGl2ZSB0aGF0IGlzIGZ1bGwgb2YgaW5mb3JtYXRpb24gYWJvdXQgZ3JlYXRzLCBzaG93ZWQgdGhlIGJlbmVmaXRzIG9mIHdha2luZyB1cCBlYXJseSBhbmQgc3RhcnRpbmcgeW91ciBkYXkgYmVmb3JlIHRoZSBzdW4gcmlzZXMuIEN1cnJlbnRseSB3cml0aW5nIHRoaXMgYXQgNCBhbSBzbyBJIHRoaW5rIGl0IGRpZCBhIGdvb2Qgam9iIDopJywnaHR0cHM6Ly93d3cuYmxpbmtpc3QuY29tL2VuL2Jvb2tzL3RoZS01LWFtLWNsdWItZW4nKVxuICAgIGJ1aWxkQm9va3MoJ1RoZSBIb2JiaXQnLCdXcml0dGVuIGJ5IEouUi5SIFRvbGtpZW48YnI+PGJyPiBBIGNsYXNzaWMgc3RvcnkgdGhhdCB3YXMgbm90aGluZyBsaWtlIHRoZSBtb3ZpZScsJ2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RoZV9Ib2JiaXQnKVxuICAgIGJ1aWxkQm9va3MoJ0RlZXAgV29yaycsYFdyaXR0ZW4gYnkgQ2FsIE5ld3BvcnQ8YnI+PGJyPiBBIGJvb2sgY292ZXJpbmcgdGhlIHRvcGljIG9mIFwiRGVlcCBXb3JrXCIuIFRoaXMgd2FzIGEgZ29vZCByZWFkIGluZm9ybWluZyBtZSBvZiB0aGUgYmVuZWZpdCBvZiBjcmVhdGluZyBhIGRpc3RyYWN0aW9uIGZyZWUgZW52aXJvbm1lbnQgdGhhdCBhbGxvd3MgeW91IHRvIHdvcmsgd2l0aCBkZWVwbmVzcy4gVGhlIHVzZSBvZiB0YWN0aWNzIHN1Y2ggYXMgJ1BvbW9kb3JvJyBhcmUgdmVyeSBoZWxwZnVsIGZvciBwYWNpbmcgeW91cnNlbGYgYW5kIGFsbG93aW5nIHBlcmlvZHMgZm9yIHlvdSB0byByZXN0YCwnaHR0cHM6Ly93d3cuc2FtdWVsdGhvbWFzZGF2aWVzLmNvbS9ib29rLXN1bW1hcmllcy9idXNpbmVzcy9kZWVwLXdvcmsvJylcbiAgICBidWlsZEJvb2tzKCdDYW50IEh1cnQgTWUnLCdCeSBEYXZpZCBHb2dnaW5zPGJyPjxicj4gVGhpcyBib29rIGNvdmVycyBhbG90IG9mIHRoZSBsaWZlIG9mIHRoZSByZXRpcmVkIE5hdnkgU2VhbCBEYXZpZCBHb2dnaW5zLiBJIGdvdCBvdXQgb2YgdGhpcyBib29rIHRoZSBpZGVhIG9mIGEgdHJ1ZGdlIHRocm91Z2ggbWVudGFsaXR5IHdoZXJlIEkgbGVhcm5lZCB0byBrZWVwIHB1c2hpbmcgdGhyb3VnaCBoYXJkc2hpcCBhbmQgYnJlYWsgdGhyb3VnaCBiYXJyaWVycyBzZXQgYnkgeW91cnNlbGYnLCdodHRwczovL2RhdmlkZ29nZ2lucy5jb20vYm9vay8nKVxuICAgIGJ1aWxkQm9va3MoJ0RvbiBRdWl4b3RlJywgJ1dyaXR0ZW4gYnkgTWlndWVsIGRlIENlcnZhbnRlczxicj48YnI+IFRoaXMgb25lIHdhcyB0aGUgYm9vayBvZiB0aGUgeWVhciBmb3IgbWUuIEkgbG92ZWQgdGhlIHN0b3J5IGFuZCB0aGUgaW1hZ2VyeSBwcmVzZW50ZWQgZnJvbSB0aGUgYXV0aG9yIHdhcyBhbWF6aW5nLiBIb25lc3RseSB0aGUgZnVubmllc3QgYm9vayBJIGhhdmUgcmVhZCBhbmQgd2FzIHNhZCB0byBmaW5pc2ggaXQgYW5kIHB1dCBpdCBkb3duLiBXaWxsIGRlZmluZXRseSBiZSByZWFkaW5nIGFnYWluJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRG9uX1F1aXhvdGUnKVxuICAgIGJ1aWxkQm9va3MoJ1d1dGhlcmluZyBIZWlnaHRzJywnV3JpdHRlbiBieSBFbWlseSBCcm9udMOrPGJyPjxicj4gQSBjbGFzc2ljIHBvcnRyYXlpbmcgbG92ZSwgZGVjZXB0aW9uLCBhbmQgYSB2YXJpZXR5IG9mIGVtb3Rpb24uIEhlYXRoY2xpZmYgd2FzIGhvbmVzdGx5IHRoZSBiZXN0IGFudGFnb25pc3QgSSBoYXZlIHNlZW4gaW4gYSB3aGlsZS4gR29vZCByZWFkJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV3V0aGVyaW5nX0hlaWdodHMnKVxuICAgIGJ1aWxkQm9va3MoJ0FuaW1hbCBGYXJtJywgJ1dyaXR0ZW4gYnkgR2VvcmdlIE9yd2VsbDxicj48YnI+IEEgZ29vZCByZXJlYWQgYWZ0ZXIgYSBiaXQgb2YgdGltZSwgd2FzIGludGVyZXN0aW5nIHNlZWluZyB0aGUgY29tcGFyaXNvbiBvZiBjZXJ0YWluIHBvbGl0aWNhbCBzeXN0ZW1zIHRvIHRoZSBzZXR0aW5nIG9mIHRoZSBib29rJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQW5pbWFsX0Zhcm0nKSBcbiAgICAgICAgYnVpbGRIb2JiaWVzKCdHYXJkZW5pbmcnLCdJIGFtIGEgYXZpZCBnYXJkbmVyIGFuZCBJIHRyeSB0byBncm93IGEgdmFyaWV0eSBvZiBwbGFudHMsIGN1cnJlbnRseSBJIGFtIGV4Y2l0ZWQgdG8gaGFydmVzdCBteSBmaXJzdCB0b21hdG8gYW5kIGRpbGwgd2hlbiB0aGV5IGFyZSBib3RoIHJlYWR5JylcbiAgICAgICAgYnVpbGRIb2JiaWVzKCdHdWl0YXInLGBJIGhhdmUgYmVlbiBwcmFjdGljaW5nIGd1aXRhciBhIGRlY2VudCBhbW91bnQgbGF0ZWx5LCBjdXJyZW50IGxlYXJuaW5nIDxhIGhyZWYgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj10SDJ3Nk94eDBrUSc+RHVzdCBpbiB0aGUgV2luZDwvYT4gYW5kIGp1c3Qgc3RhcnRlZCB0byBsZWFybiBhIDxhIGhyZWYgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1aMmIxNXJ3R0JKYyc+bHVsbGFieTwvYT5gKVxuICAgICAgICBidWlsZEhvYmJpZXMoJ1BpYW5vJyxgSSBoYXZlIGJlZW4gcGxheWluZyBwaWFubyBzaW5jZSBzZW5pb3IgeWVhciBvZiBjb2xsZWdlIGFuZCBpdHMgcmVsYXhpbmcgdG8gcGxheS4gSSBhbSByZWFsbHkgaW50byBhbGwgbXVzaWMgYnV0IGZvciBwaWFubyBJIHVzdWFsbHkganVzdCBwbGF5IGNsYXNzaWNhbC4gVGhlIG9ubHkgc29uZyBJIGtub3cgZnVsbHkgaXMgPGEgaHJlZj0naHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0yV2Zhb3RTSzNtSSc+R3ltbm9wZWRpZSBuby4gMTwvYT5gKVxuICAgICAgICBidWlsZEhvYmJpZXMoJ1JlYWRpbmcnLCdJIGhhdmUgYmVjb21lIGEgYmlnIHJlYWRlciB0aGlzIHllYXIgYXMgbXkgYm9vayBsaXN0IHdvdWxkIHNob3cgbG9sLiBJIGFwcHJlY2lhdGUgbGVhcm5pbmcgYWxvdCBhbmQgeW91IGNhbiBnZXQgc28gbXVjaCBvdXQgb2YgcmVhZGluZycpXG4gICAgICBjb25zdCBmYW1pbHlBbGJ1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICAgIGZhbWlseUFsYnVtLmlubmVySFRNTCA9ICdGYW1pbHkgQWxidW0nXG4gICAgICBmYW1pbHlBbGJ1bS5jbGFzc0xpc3QuYWRkKCdmYW1pbHlBbGJ1bScpXG4gICAgICBtYWluLmFwcGVuZENoaWxkKGZhbWlseUFsYnVtKVxuICAgICAgICAgYnVpbGRJbWFnZVNsaWRlcigpXG4gICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgY29uc3QgZXhwbGFpbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgICBleHBsYWluSGVhZC5pbm5lckhUTUwgPSAnVGhlIHBlb3BsZSBpbiBteSBGYW1pbHknXG4gICAgICAgICBjb25zdCBleHBsYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICBleHBsYWluLmlubmVySFRNTCA9ICdTbyBteSBmYW1pbHkgaXMgZm9yZXZlciBncm93aW5nLiBJIGxvdmUgbWFraW5nIG5ldyBjb25uZWN0aW9ucyBhbmQga2VlcGluZyB0aWdodGVyIGJvbmRzLCBJIGhhdmUgYWx3YXlzIGhhZCBhIHNtYWxsIGltbWVkaWF0ZSBmYW1pbHksIGJ1dCB0aGUgcGVvcGxlIEkgdHJ1bHkgbG92ZSB3aWxsIGFsd2F5cyBzdGF5IHdpdGggbWUgYW5kIEkgd2lsbCBhbHdheXMgaGF2ZSB0aGVpciBiYWNrLiBTb21lIG9mIHRoZSBwZW9wbGUgaW4gaGVyZSBhcmUgZmFtaWx5IGJ5IGJsb29kIGxpa2UgbXkgc2lzdGVyIEFuaXRhIGFuZCBteSBtb20gU3BvbWVua2EuIEJ1dCB0aGUgY2xvc2VzdCBwZXJzb24gaW4gbXkgbGlmZSBpcyBteSBicm90aGVyIGRlYW4sIGFuZCB3ZSBoYXZlIGJlZW4gZXZlcnl3aGVyZSBhbmQgZG9uZSBldmVyeXRoaW5nIHRvZ2V0aGVyLiBIZSBpcyByZWFsbHkgbXkgcm9jay4gUGVvcGxlIGxpa2UgbXkgbGl0dGxlIGJyb3RoZXIgRGFuaWVsIG9yIG15IHBoaWxvc29waHkgdGVhY2hlciBUaW1vdGh5IGFyZSB0d28gcGVvcGxlIHdobyBJIGxvdmUgZGVhcmx5IGFuZCBJIGtub3cgdGhleSB3aWxsIGdvIGZhci4gTXkgYnJvdGhlciBUaGllbiBpcyBzb21lb25lIHdobyBhbHdheXMgaGFzIG15IGJhY2sgYW5kIEkga25vdyBoZSB3aWxsIGFsd2F5cyBiZSBieSBteSBzaWRlLiBUaGVyZSBpcyBzbyBtYW55IG1lbWJlcnMgb2YgbXkgZmFtaWx5IGFuZCBJIGhvcGUgaXQga2VlcHMgZ3Jvd2luZy4gTW9yZSBwaWN0dXJlcyB0byBjb21lISdcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGV4cGxhaW5IZWFkKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZXhwbGFpbilcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGxhaW4nKVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGRpdilcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRCbG9nKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGNvbnN0IGJsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpXG4gICAgYmxvZy5jbGFzc0xpc3QuYWRkKCdibG9nJylcbiAgICBibG9nLmFwcGVuZENoaWxkKHBvc3QoJ0RlY2VtYmVyIDE3dGgsIDIwMjMnLCBcIlRvZGF5J3MgV29ya1wiLCAnVG9kYXkgSSBhbSBsZWFybmluZyBhbG90IGFuZCBjcmVhdGluZyB0aGUgYmxvZyBwb3J0aW9uIG9mIG15IHNpdGUuIEkgYW0gZXhjaXRlZCB0byBzdGFydCB3cml0aW5nIGluIGhlcmUgYW5kIHB1dHRpbmcgbXkgdGhvdWdodHMgZm9yIGFueW9uZSB0byBzZWUuIFRoZSBwYXN0IGZldyBkYXlzIEkgaGF2ZSBiZWVuIGxlYXJuaW5nIGFib3V0IEplc3QgYW5kIHRoZSBwb3NzaWJpbGl0aWVzIHRoYXQgSSBjYW4gdXNlIHRoZSBmcmFtZXdvcmsgd2l0aC4gSSB3YXRjaGVkIGEgYml0IG9mIFwiRnVuIEZ1biBGdW5jdGlvblwiIGFuZCBoZSBkaWQgYSBncmVhdCBqb2IgZXhwbGFpbmluZyB0ZXN0IHJ1bm5lcnMgYW5kIHRoZSBiYXNpYyBzeW50YXggb2YgSmVzdCB0aHJvdWdoIGlmIHN0YXRlbWVudHMuIEl0IHdhcyBhIGxpdHRsZSBkYXVudGluZyBhdCBmaXJzdCBidXQgSSBmZWVsIGFibGUuIEkgc3RhcnRlZCBhIHJlcG8gZm9yIHByYWN0aWNpbmcgdGhlIGZyYW1ld29yayBhbmQgSSBhbSBkaXZpbmcgbW9yZSBpbiBkZXB0aCBpbnRvIFR5cGVTY3JpcHQgYXMgSSB3b3VsZCBwcmVmZXIgdG8gdXNlIHRoZSBsYW5ndWFnZSBvdmVyIEphdmFzY3JpcHQgZm9yIGVhc2Ugb2Ygc2VlaW5nIGVycm9ycyBhbmQga2VlcGluZyB0cmFjayBvZiBteSBjb2RlLiBJbiB0dXJuIG9mIHVzaW5nIEplc3QgSSBhbSBleHBsb3JpbmcgQmFiZWwgdGhlIEphdmFzY3JpcHQgVHJhbnNwaWxlciBJIGhvcGUgaXQgZ2V0cyBzb21lIGdvb2QgdXNlLiBIb3BpbmcgdG8gZG8gYWxvdCBvZiB0ZXN0aW5nIG9uIG15IGJyZWFrIGFuZCB0byBwcm9kdWNlIGEgYml0IG9mIFRoZSBmaWdodGVyIGZvdW5kYXRpb24gaG9tZSBwYWdlIG9uY2UgSSBnZXQgaG9tZSBsYXRlci4gVGhhdHMgYWJvdXQgaXQgZm9yIHRvZGF5LCBleGNpdGVkIHRvIGtlZXAgbGVhcm5pbmcgYW5kIGJ1aWxkaW5nLCBDaWFvPGJyPi1QYXRyaWNrJykpXG4gICAgYmxvZy5hcHBlbmRDaGlsZChwb3N0KCdEZWNlbWJlciAxOXRoLCAyMDIzJywgJ0plc3QsIFR5cGVTY3JpcHQsIGFuZCBIb2xpZGF5cycsIFwiQWxyaWdodCBzbyBhbG90IG9mIGRvY3VtZW50YXRpb24gdG9kYXksIEkgaGF2ZSBnb25lIG92ZXIgYSBmYWlyIGJpdCBvZiBUUydzIGRvY3VtZW50YXRpb24gYW5kIEkgYW0gbGVhcm5pbmcgSSBzaG91bGQgb2YgZG9uZSB0aGlzIGVhcmxpZXIuIEkgc29ydCBvZiBiZWVuIGdvaW5nIGludG8gdGhlIHVua25vd24gd2l0aCBUUyBhbmQgSSBoYWQgZW5vdWdoIHdpdGggaXQgdG9kYXkgd2hlbiBJIGNvdWxkbnQgaW1wb3J0IHRoZSBsb2dvIGZvciB0aGUgZmlnaHRlciBmb3VuZGF0aW9uLiBCcm93c2luZyBhbnl0aGluZyBJIGNvdWxkIGZpbmQgb24gdGhlIHdlYiBtYWRlIG1lIGxlYXJuIEkgaGF2ZSB0byBkbyBhIGRpdmUgaW50byBUUyBhbmQgSSBhbSB3aWxsaW5nIHRvIGJlYXQgdGhlIGxhbmd1YWdlIGFuZCBsZWFybiBldmVyeXRoaW5nIEkgbmVlZC4gVGhlIG1vc3QgZGF1bnRpbmcgdGhpbmcgZm9yIG1lIHdhcyB0aGUgdHNjb25maWcuanNvbiBidXQgYWZ0ZXIgZ29pbmcgb3ZlciBhIGZldyBmbGFncyBsaWtlIG5vSW1wbGljaXRBbnkgSSBob25lc3RseSBkb250IHRoaW5rIGl0cyB0b28gYmFkIGFueW1vcmU8YnI+PGJyPiB5ZXN0ZXJkYXkgSSB3ZW50IG92ZXIgYWxvdCBvZiB0aGUgZXNzZW50aWFscyBvZiBKZXN0IGFuZCByZWFkIHNvbWUgYXJ0aWNsZXMgYWJvdXQgcHVyZSBmdW5jdGlvbnMsIG1vY2tpbmcsIGFuZCBVbml0IFRlc3RzLCBoZXJlcyBhIGJyaWVmIG92ZXJ2aWV3Ojxicj48YiBvbmNsaWNrPSBgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LmdlZWtzZm9yZ2Vla3Mub3JnL3B1cmUtZnVuY3Rpb25zLWluLWphdmFzY3JpcHQvJylgPlB1cmUgRnVuY3Rpb25zPC9iPjxicj4gQSBmdW5jdGlvbiBpcyBwdXJlIGlmIGl0IGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lIHJlc3VsdCBpZiB0aGUgc2FtZSBhcmd1bWVudHMgYXJlIHBhc3NlZCwgaXQgZG9lc250IGRlcGVuZCBvbiBhbnkgdXNlIHN0YXRlIG9yIGRhdGEsIGl0IG11c3Qgb25seSBkZXBlbmQgb24gdGhlIGlucHV0IGFyZ3VtZW50cy4gVGhlIGZ1bmN0aW9uIG11c3Qgbm90IHByb2R1Y2UgYW55IG9ic2VydmFibGUgc2lkZSBlZmZlY3RzIHN1Y2ggYXMgbmV0d29yayByZXF1ZXN0cywgaW5wdXQgb3Igb3V0cHV0IGRldmljZXMgb3IgZGF0YSBtdXRhdGlvbi48YnI+PGI+TW9ja2luZzwvYj48YnI+IEEgbW9jayBpcyBhIHRlc3QgZG91YmxlIHRoYXQgc3RhbmRzIGluIGZvciByZWFsIGltcGxlbWVudGF0aW9uIGNvZGUgZHVyaW5nIHRoZSB1bml0IHRlc3RpbmcgcHJvY2Vzczxicj48Yj5Vbml0IFRlc3Q8L2I+PGJyPkEgdW5pdCB0ZXN0IHRlc3RzIGluZGl2aWR1YWwgdW5pdHMgaW4gaXNvbGF0aW9uIGZyb20gdGhlIHJlc3Qgb2YgdGhlIHByb2dyYW08YnI+IFRoZXJlIGlzIGFsc28gdGhlIGlkZWEgb2YgdGVzdCBjb3ZlcmFnZSBhbmQgdGhhdCByZWZlcnMgdG8gdGhlIGFtb3VudCBvZiBjb2RlIHRoYXQgaXMgY292ZXJlZCBieSB0ZXN0IGNhc2VzLCBjb2RlIGNvdmVyYWdlIHNob3VsZG50IGV2ZXIgYmUgMTAwJSBhcyBpdCBkb2VzIG5vdCByZXN1bHQgaW4gMTAwJSBjYXNlIGNvdmVyYWdlPGJyPlRpZ2h0IENvdXBsaW5nIGlzIHRoZSByZWFzb24gd2h5IG1vY2tpbmcgZXhpc3RzLiBUaWdodCBjb3VwbGluZyBtYWtlcyBjb2RlIHJpZ2lkIGFuZCBicml0dGxlLCBhbmQgbGVzcyBjb3VwbGluZyBpcyB2ZXJ5IGRlc2lyYWJsZSBmb3IgdGhlIHNha2Ugb2YgbWFraW5nIGNvZGUgZWFzaWVyIHRvIGV4dGVuZCBhbmQgbWFpbnRhaW4sIGFsc28gaXQgYWxsb3dzIGZvciB0aGUgZWxpbWluYXRpb24gb2YgbW9ja2luZy48YnI+IFRoZSBob2xpZGF5cyBhcmUgc29tZXdoYXQgc3RyZXNzZnVsIGFzIGFsd2F5cyBidXQgSSBhbSBqdXN0IGV4Y2l0ZWQgdG8gc3BlbmQgc29tZSB0aW1lIHdpdGggbXkgZmFtaWx5IGFuZCB0byBlbmpveSB0aGUgY29sZC48YnI+IFRoYXRzIGlmIGZyb20gbWUgZm9yIGtub3csIE1lcnJ5IENocmlzdG1hcyB0byB3aG9ldmVyIHNlZSB0aGlzIGFuZCBJIGhvcGUgMjAyMyB3YXMgYSBncmVhdCB5ZWFyIGZvciB5b3U8YnI+LVBhdHJpY2tcIikpXG4gICAgYmxvZy5hcHBlbmRDaGlsZChwb3N0KCdKYW51YXJ5IDh0aCwgMjAyMycsICdGaW5pc2hpbmcgQmF0dGxlU2hpcCBhbmQgYmVnaW5uaW5nIG9uIFJlYWN0JywnVG9kYXkgSSBmaW5hbGx5IGZpbmlzaGVkIG15IEJhdHRsZVNoaXAgcHJvamVjdC4gSXQgd2FzIGEgZ3JlYXQgcHJvamVjdCBjaG9jayBmdWxsIG9mIGxlYXJuaW5nIGFuZCBjb2RlIHJldmlldy4gRnJvbSB0aGUgcHJvamVjdCBJIGdvdCBhIHRhc3Qgb2YgSmVzdCBhbmQgdGVzdGluZywgYW5kIEkgZGlkIGEgd2lkZSB2YXJpZXR5IG9mIGNvZGUgcmV2aWV3IGxlYXJuaW5nIHRoYXQgYWxvdCBvZiB0aW1lIGlzIHdhc3RlZCBvbiBpbmVmZmljaWVudCBtZXRob2RzIG9mIGNvZGluZy4gVGltZSB0byBzdGFydCBsZWFybmluZyBSZWFjdCBhbmQgcmVtYWtpbmcgYWxvdCBvZiBteSBzaXRlcy4gVHlwZXNjcmlwdCB3YXMgZ3JlYXQgYXMgd2VsbCBhbmQgSSBnb3R0YSBzdGFydCByZWFkaW5nIG15IGRvY3VtZW50YXRpb24uJykpXG5cbiAgIFxuICAgXG4gICAgbWFpbi5hcHBlbmRDaGlsZChibG9nKVxuICAgXG59XG5mdW5jdGlvbiBwb3N0KGRhdGUsIHRpdGxlLCBkZXRhaWwsIGltZykge1xuICAgIFxuY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5jb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbmxpLmlubmVySFRNTCA9IGRhdGVcbmgyLmlubmVySFRNTCA9IHRpdGxlXG50ZXh0LmlubmVySFRNTCA9IGRldGFpbFxuaWYgKGltZyAhPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLnNyYyA9IGltZ1xuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoMilcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaW1nKVxufWVsc2Uge1xubGkuYXBwZW5kQ2hpbGQoaDIpXG59XG5saS5hcHBlbmRDaGlsZCh0ZXh0KVxubGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYoaDIuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICBoMi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnICAgXG4gICAgICAgIHRleHQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgaDIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0ZXh0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG59KVxucmV0dXJuIGxpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEJvb2tzKGJvb2ssZGVzY3JpcHRpb24sIGxpbmspe1xuICAgY29uc3Qgb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdvbCcpXG4gICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgIGFuY2hvci5ocmVmID0gbGlua1xuICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBjb25zdCBib29rRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgYm9va0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Jvb2tEZXNjcmlwdGlvbicpXG4gICBsaS5pbm5lckhUTUwgPSBib29rIFxuICAgYm9va0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uXG4gICBib29rRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsYm9vaylcbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCgpPT57XG4gICAgY29uc3QgaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChib29rKVxuICAgIGlkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICB9KVxuICAgXG4gICBsaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+e1xuICAgIGNvbnN0IGlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm9vaylcbiAgICBpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICB9KSBcbiAgIFxuICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsaW5rXG4gICB9KVxuICAgbGkuYXBwZW5kQ2hpbGQoYm9va0Rlc2NyaXB0aW9uKVxuICAgXG4gICBvbC5hcHBlbmRDaGlsZChsaSlcbiAgICBcbn0iLCJpbXBvcnQgYnVpbGRIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgd2VhdGhlciBmcm9tICcuL3BpY3Mvd2VhdGhlckltZy5wbmcnXG5pbXBvcnQgYmF0dGxlU2hpcCBmcm9tICcuL3BpY3MvQmF0dGxlc2hpcC5wbmcnXG5pbXBvcnQgRkYgZnJvbSAnLi9waWNzL0ZGLnBuZydcbmltcG9ydCBidWlsZFNraWxscyBmcm9tICcuL3NraWxscydcbmltcG9ydCBidWlsZFByb2plY3QgZnJvbSAnLi9wcm9qZWN0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYWluKCl7XG5idWlsZEhlYWRlcigpXG5idWlsZFNraWxscygpXG5idWlsZFByb2plY3QoRkYsICdodHRwczovL2ZpZ2h0ZXItZm91bmRhdGlvbjItMC52ZXJjZWwuYXBwLycsICdodHRwczovL2dpdGh1Yi5jb20vUGF0cmljay1Ub21pYy9GaWdodGVyRm91bmRhdGlvbjIuMCcsICdTbyB0aGlzIGlzIG15IGZpcnN0IFZvbHVudGVlcmluZyBwcm9qZWN0IGZvciBhIG5vbnByb2ZpdCBpbiBteSBhcmVhLCBUaGUgRmlnaHRlciBGb3VuZGF0aW9uLiBJIGFic29sdXRlbHkgbG92ZSB0aGUgbWlzc2lvbiBwcmVzZW50ZWQgd2l0aGluIHRoaXMgb3JnYW5pemF0aW9uIGFuZCBJIGhvcGUgdG8gaGVscCBhbmQgbWFrZSBhIGRpZmZlcmVuY2UgaW4gdGhlIGdyb3d0aC4gPGJyPiBmb3IgdGhpcyBwcm9qZWN0IEkgYW0gdXNpbmcgUmVhY3QsIFRhaWx3aW5kIENTUywgVHlwZVNjcmlwdCwgYW5kIFZpdGUuIEhvc3Rpbmcgb24gVmVyY2VsLicsJ0ZpZ2h0ZXIgRm91bmRhdGlvbiBSZWJ1aWxkJylcbmJ1aWxkUHJvamVjdChiYXR0bGVTaGlwLCdodHRwczovL3BhdHJpY2stdG9taWMuZ2l0aHViLmlvL0JhdHRsZVNoaXAvJywnaHR0cHM6Ly9naXRodWIuY29tL1BhdHJpY2stVG9taWMvQmF0dGxlU2hpcCcsJ0Zyb20gdGhpcyBwcm9qZWN0IEkgaW1wbGVtZW50ZWQgbXkgZmlyc3QgVEREIGluIGJ1aWxkaW5nLCBJIGRpZCBsYXJnZSBhbW91bnRzIG9mIGNvZGUgcmV2aWV3IGFuZCBsZWFybmVkIHRoYXQgc21hbGxlciBxdWFudGl0aWVzIG9mIGNvZGUgY2FuIGRlZmluZXRseSBiZSBhcyBzdHJvbmcgYXMgaHVuZHJlZHMgb2YgbGluZXMnLCdCYXR0bGVTaGlwJykgXG5idWlsZFByb2plY3Qod2VhdGhlciwnaHR0cHM6Ly9wYXRyaWNrLXRvbWljLmdpdGh1Yi5pby9XZWF0aGVyQVBJLycsJ2h0dHBzOi8vZ2l0aHViLmNvbS9QYXRyaWNrLVRvbWljL1dlYXRoZXJBUEknLCdUaGlzIGFwcGxpY2F0aW9uIGlzIG15IGZpcnN0IHRpbWUgdXRpbGl6aW5nIGEgQVBJLCBJIGRvIHNvbWUgc2ltcGxlIGFuaW1hdGlvbnMgd2l0aGluIHRoaXMgcHJvamVjdCBhbmQgbGVhcm5lZCBhbG90IHRocm91Z2ggdGhlIHVzZSBvZiByZXNwb25zaXZlIGRlc2lnbiBhbmQgYW5pbWF0aW9uJywnV2VhdGhlciBBcHBsaWNhdGlvbicpXG4gY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gZm9ybURpdi5jbGFzc0xpc3QuYWRkKCdmb3JtRGl2JylcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbmZvcm0uYWN0aW9uID0gXCJwcm9jZXNzRm9ybS5waHBcIlxuZm9ybS5tZXRob2QgPSBcInBvc3RcIlxuZm9yKGxldCBpPTA7IGk8NDtpKyspe1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZVxuICAgIHN3aXRjaChpKXtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgbGFiZWwuZm9yID0gJ25hbWUnXG4gICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSAnRnVsbCBOYW1lOidcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSd0ZXh0J1xuICAgICAgICAgICAgaW5wdXQubmFtZSA9ICduYW1lJ1xuICAgICAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnSm9obmF0aGFuIFJhbXNleSBEb2UnXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGxhYmVsLmZvciA9ICdlbWFpbCdcbiAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdFbWFpbCBBZGRyZXNzOidcbiAgICAgICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJ2pvaG5SZG9lQGhvdG1haWwuY29tJ1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSdlbWFpbCdcbiAgICAgICAgICAgIGlucHV0Lm5hbWUgPSAnZW1haWwnXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxhYmVsLmZvciA9ICdwaG9uZSdcbiAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdQaG9uZSBOdW1iZXI6J1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9J3RlbGUnXG4gICAgICAgICAgICBpbnB1dC5wbGFjZWhvbGRlcj0gJyoqKi0qKiotKioqKidcbiAgICAgICAgICAgIGlucHV0Lm5hbWUgPSAncGhvbmUnXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGxhYmVsLmZvciA9ICdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdHaXZlIGNvbnRleHQgdG8gcHJvamVjdCdcbiAgICAgICAgICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgdGV4dEFyZWEubmFtZSA9ICdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgIHRleHRBcmVhLmNvbHMgPSAnMTAnXG4gICAgICAgICAgICB0ZXh0QXJlYS5yb3dzID0gJzUnXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgIH0gXG4gICAgfVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnR5cGUgPSAnc3VibWl0J1xuICAgIGlucHV0LnZhbHVlID0gJ3N1Ym1pdCdcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdzdWJtaXQnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGNvbnN0IGNvbnRhY3RNZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdE1lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKVxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGgzLmlubmVySFRNTCA9ICdIb3cgdG8gZ2V0IGluIHRvdWNoJ1xuICAgIGNvbnRhY3RNZS5hcHBlbmRDaGlsZChoMylcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcC5pbm5lckhUTUwgPSAnSSBhbSB3aWxsaW5nIHRvIHdvcmsgd2l0aCBhbnlvbmUgb24gYW55IHByb2plY3Qgb3IgaWRlYSB0aGF0IHRoZXkgaGF2ZSBpbiBtaW5kISBmaWxsIG91dCB0aGlzIGZvcm0gYW5kIEkgd2lsbCBtZXNzYWdlIHlvdSBhcyBzb29uIGFzIEkgYW0gYXZhaWxhYmxlLjxicj4gSGF2ZSBhIGdyZWF0IGRheSBhbmQgbWF5IHdlIGFsbCBsaXZlIGxvbmcgYW5kIHByb3NwZXI8YnI+PGJyPiAtUGF0cmljayAnXG4gICAgY29udGFjdE1lLmFwcGVuZENoaWxkKHApXG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChjb250YWN0TWUpXG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZm9ybURpdilcblxufVxuIFxuIiwiaW1wb3J0IHBvcnRhaXQgZnJvbSAnLi9waWNzL1RvbWljLlAuanBnJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRIZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuY29uc3QgcG9ydHJhaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxucG9ydHJhaXQuY2xhc3NMaXN0LmFkZCgncGljT2ZNZScpXG5pbWcuY2xhc3NMaXN0LmFkZCgncG9ydHJhaXQnKVxuaW1nLnNyYyA9IHBvcnRhaXRcbnBvcnRyYWl0LmFwcGVuZENoaWxkKGltZylcbmhlYWRlci5hcHBlbmRDaGlsZChwb3J0cmFpdClcbmNvbnN0IHdob0FtSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG53aG9BbUkuY2xhc3NMaXN0LmFkZCgnd2hvQW1JJylcbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuaDIuaW5uZXJIVE1MID0gJ015IG5hbWUgaXMgUGF0cmljayBFbWFudWVsIFRvbWljJ1xud2hvQW1JLmFwcGVuZENoaWxkKGgyKVxuY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxucC5pbm5lckhUTUwgPSAnSSBhbSBhIHN0dWRlbnQgYXQgdGhlIFVuaXZlcnNpdHkgb2YgU291dGggRmxvcmlkYSBhbmQgSSBncmFkdWF0ZSBpbiB0aGUgU3ByaW5nIG9mIDIwMjQ8YnI+d2l0aCBhIEJhY2hlbG9ycyBkZWdyZWUgaW4gSW5mb3JtYXRpb24gU2NpZW5jZTxicj5JIGFtIGEgbWFuIHdpdGggYWxvdCBvZiBhbWJpdGlvbiB0byBiZXR0ZXIgdGhlIHdvcmxkLCBhbmQgYW0gdGhlIGZpcnN0IG9mIG15IGZhbWlseSB0byBiZTxicj5ib3JuIGluIEFtZXJpY2EuIEkgc3BlbmQgYXMgbXVjaCB0aW1lIGFzIEkgY2FuIGxlYXJuaW5nIGhvdyB0byBkZXZlbG9wIHdlYnNpdGVzIGV2ZXJ5ZGF5PGJyPkl0IGlzIG5vdCBqdXN0IGZ1biBmb3IgbWUgYnV0IGJyaW5ncyBpbW1lbnNlIHNhdGlzZmFjdGlvbiB3aGVuIEkgY2FuIGJ1aWxkIGFuZCBkZXNpZ24gc29tZXRoaW5nPGJyPnRoYXQgSSBrbm93IGlzIGdvb2QuIEkgbG92ZSBoZWxwaW5nIHBlb3BsZSwgYW5kIEkgYW0gbG9va2luZyBmb3IgYSBvcHBvcnR1bml0eSB0byBzaG93IDxicj5teSBza2lsbHNldCBhbmQgbGVhcm4gdGhyb3VnaCBvdGhlcnMnXG53aG9BbUkuYXBwZW5kQ2hpbGQocClcbmhlYWRlci5hcHBlbmRDaGlsZCh3aG9BbUkpXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG5tYWluLmFwcGVuZENoaWxkKGhlYWRlcilcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEhvYmJpZXModGl0bGUsZGVzY3JpcHRpb24pe1xuICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0JylcbiAgICAgbGkuaW5uZXJIVE1MID0gdGl0bGVcbiAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICBwLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uXG4gICBcbiAgICAgbGkuYXBwZW5kQ2hpbGQocClcbiAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSlcbn0iLCJcbmltcG9ydCBhc2ggZnJvbSAnLi9zbGlkZXIvYXNoLmpwZydcbmltcG9ydCBiYWJ5IGZyb20gJy4vc2xpZGVyL2JhYnkuanBnJ1xuaW1wb3J0IGJyb3RoZXIgZnJvbSAnLi9zbGlkZXIvYnJvdGhlci5qcGcnXG5pbXBvcnQgYnJvdGhlcnMgZnJvbSAnLi9zbGlkZXIvYnJvdGhlcnMuanBnJ1xuaW1wb3J0IGJ1YmJhIGZyb20gJy4vc2xpZGVyL2J1YmJhLmpwZydcbmltcG9ydCBidWNzIGZyb20gJy4vc2xpZGVyL2J1Y3MuanBnJ1xuaW1wb3J0IGJ1dHRlcmZseSBmcm9tICcuL3NsaWRlci9idXR0ZXJmbHkuanBnJ1xuaW1wb3J0IGNvb2wgZnJvbSAnLi9zbGlkZXIvY29vbC5qcGcnXG5pbXBvcnQgY3JvYXRpYSBmcm9tICcuL3NsaWRlci9jcm9hdGlhLmpwZydcbmltcG9ydCBkYW5pZWwgZnJvbSAnLi9zbGlkZXIvZGFuaWVsLmpwZydcbmltcG9ydCBkb2xwaGluIGZyb20gJy4vc2xpZGVyL2RvbHBoaW4uanBnJ1xuaW1wb3J0IGV5ZXMgZnJvbSAnLi9zbGlkZXIvZXllcy5qcGcnXG5pbXBvcnQgZmFtaWx5IGZyb20gJy4vc2xpZGVyL2ZhbWlseS5qcGcnXG5pbXBvcnQgZnJpZW5kcyBmcm9tICcuL3NsaWRlci9mcmllbmRzLmpwZydcbmltcG9ydCBnYWdnbGUgZnJvbSAnLi9zbGlkZXIvZ2FnZ2xlLmpwZydcbmltcG9ydCBnYW5nIGZyb20gJy4vc2xpZGVyL2dhbmcuanBnJ1xuaW1wb3J0IGdvb2ZzIGZyb20gJy4vc2xpZGVyL2dvb2ZzLmpwZydcbmltcG9ydCBnb29ucyBmcm9tICcuL3NsaWRlci9nb29ucy5qcGcnXG5pbXBvcnQgZ3JhbmRwYSBmcm9tICcuL3NsaWRlci9ncmFuZHBhLmpwZydcbmltcG9ydCBtYXggZnJvbSAnLi9zbGlkZXIvbWF4LmpwZydcbmltcG9ydCBtb21tYSBmcm9tICcuL3NsaWRlci9tb21tYS5qcGcnXG5pbXBvcnQgbW9ua2V5IGZyb20gJy4vc2xpZGVyL21vbmtleS5qcGcnXG5pbXBvcnQgcG9zZSBmcm9tICcuL3NsaWRlci9wb3NlLmpwZydcbmltcG9ydCBwdXBwZXQgZnJvbSAnLi9zbGlkZXIvcHVwcGV0LmpwZydcbmltcG9ydCBzaGVtayBmcm9tICcuL3NsaWRlci9zaGVtay5qcGcnXG5pbXBvcnQgc2libGluZ3MgZnJvbSAnLi9zbGlkZXIvc2libGluZ3MuanBnJ1xuaW1wb3J0IHNpc3N5IGZyb20gJy4vc2xpZGVyL3Npc3N5LmpwZydcbmltcG9ydCBza2lwcGluIGZyb20gJy4vc2xpZGVyL3NraXBwaW5nLmpwZydcbmltcG9ydCBzdG9pYyBmcm9tICcuL3NsaWRlci9zdG9pYy5qcGcnXG5pbXBvcnQgc3Ryb25nVGltIGZyb20gJy4vc2xpZGVyL3N0cm9uZ1RpbS5qcGcnXG5pbXBvcnQgc3dlZXRUIGZyb20gJy4vc2xpZGVyL3N3ZWV0VC5qcGcnXG5pbXBvcnQgdGhpZW4gZnJvbSAnLi9zbGlkZXIvdGhpZW5CZGF5LmpwZydcbmltcG9ydCB0aG9yIGZyb20gJy4vc2xpZGVyL3Rob3IuanBnJ1xuaW1wb3J0IHR1cnRsZSBmcm9tICcuL3NsaWRlci90dXJ0bGUuanBnJ1xuaW1wb3J0IHdhdGVyIGZyb20gJy4vc2xpZGVyL3dhdGVyLmpwZydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkSW1hZ2VTbGlkZXIoKXtcbiAgICBjb25zdCBuYW1lcyA9IFthc2gsYmFieSxicm90aGVyLGJyb3RoZXJzLGJ1YmJhLGJ1Y3MsYnV0dGVyZmx5LGNvb2wsY3JvYXRpYSxkYW5pZWwsZG9scGhpbixleWVzLGZhbWlseSxmcmllbmRzLGdhZ2dsZSxnYW5nLGdvb2ZzLGdyYW5kcGEsbWF4LG1vbW1hLG1vbmtleSxwb3NlLHB1cHBldCxzaGVtayxzaWJsaW5ncyxzaXNzeSxza2lwcGluLHN0b2ljLHN0cm9uZ1RpbSx0aGllbixzd2VldFQsdGhvcix0dXJ0bGUsd2F0ZXJdXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoJ2ltZ1NsaWRlcicpXG4gICAgZm9yKGxldCBpID0gMDsgaTxuYW1lcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgaW1nLnNyYyA9IG5hbWVzW2ldXG4gICAgICAgIGlmKGklMj09MCl7XG4gICAgICAgICAgICBpbWcuc3R5bGUubWFyZ2luVG9wID0gJzN2aCdcbiAgICAgICAgICAgIGltZy5zdHlsZS56SW5kZXggPSAnYXV0bydcbiAgICAgICAgfWVsc2UgaWYoaSUyIT0wKXtcbiAgICAgICAgICAgIGltZy5zdHlsZS5tYXJnaW5Ub3AgPSAnOHZoJ1xuICAgICAgICAgICAgaW1nLnN0eWxlLnpJbmRleCA9ICcyJ1xuICAgICAgICB9XG4gICAgICAgIGltZy5hbHQgPSAnbXlGYW1pbHkvbmF0dXJlJ1xuICAgICAgICBzbGlkZXIuYXBwZW5kQ2hpbGQoaW1nKVxuICAgIH1cbiAgICBsZXQgY291bnQgPSAwXG4gICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgbGV0IHZ3ID0gODBcbiAgICAgICAgaWYoY291bnQgPT0tNil7XG4gICAgICAgICAgICBjb3VudCA9IDBcbiAgICAgICAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb3VudC0tXG4gICAgICAgICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgXG4gICAgICAgICAgICB9XG4gICAgfSw1MDAwKVxuICAgIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdyYXAuY2xhc3NMaXN0LmFkZCgnc2xpZGVyV3JhcCcpXG4gICAgd3JhcC5hcHBlbmRDaGlsZChzbGlkZXIpXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3cmFwKVxufVxuICIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IGJ1aWxkU2lkZUJhciBmcm9tICcuL3NpZGViYXInXG5pbXBvcnQgYnVpbGRNYWluIGZyb20gJy4vYnVpbGRNYWluJ1xuY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJylcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jylcbm5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzNDM0MzQnXG4gICAgYnVpbGRNYWluKCkgIFxufSlcbmJ1aWxkTWFpbigpXG5idWlsZFNpZGVCYXIoKSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkUHJvamVjdChzcmMsIHNpdGVMaW5rLGdoTGluaywgcElubmVyLCBoZWFkKXtcbiAgICBcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbiAgICBpZihtYWluLmNvbnRhaW5zKHByb2plY3RzKT09dHJ1ZSl7XG4gICAgXG4gICAgICAgIFxuICAgIH1lbHNle1xuICAgICAgICBjb25zb2xlLmxvZyhmYWxzZSlcbiAgICAgICAgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpXG4gICAgfVxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidG5zLmNsYXNzTGlzdC5hZGQoJ2J0bnMnKVxuICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2xpbmtzJylcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbGV0IGNvdW50ID0gMFxuICAgIGltZy5zcmMgPSBzcmNcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChpbWcpXG4gICAgd2hpbGUoY291bnQ8Mil7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnRuLnR5cGUgPSAnc3VibWl0J1xuICAgICAgICBzd2l0Y2goY291bnQpe1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGZvcm0uYWN0aW9uID0gc2l0ZUxpbmtcbiAgICAgICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gJ1ZpZXcgTGl2ZSBTaXRlJ1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuKVxuICAgICAgICAgICAgICAgIGJ0bnMuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBmb3JtLmFjdGlvbiA9IGdoTGlua1xuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSAnU291cmNlIENvZGUnXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidG4pXG4gICAgICAgICAgICAgICAgYnRucy5hcHBlbmRDaGlsZChmb3JtKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVhayBcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q2FyZCcpXG4gICBsaW5rcy5hcHBlbmRDaGlsZChidG5zKVxuICAgIHAuaW5uZXJIVE1MID0gcElubmVyXG4gICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChsaW5rcylcbiAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpXG4gICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgIGgyLmlubmVySFRNTCA9IGhlYWRcbiAgICBkZXNjLmFwcGVuZENoaWxkKGgyKVxuICAgIGRlc2MuYXBwZW5kQ2hpbGQocClcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChkZXNjKVxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdHMpXG59XG4iLCJpbXBvcnQgYnVpbGRNYWluIGZyb20gJy4vYnVpbGRNYWluJ1xuaW1wb3J0IGJ1aWxkQWJvdXRNZSBmcm9tICcuL2Fib3V0J1xuaW1wb3J0IGJ1aWxkQmxvZyBmcm9tICcuL2Jsb2cnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFNpZGVCYXIoKXtcbiAgICBjb25zdCBzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUnKVxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyQnRuJylcbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKVxuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNpZGVCYXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3NpZGVCYXInKVxuICAgIHJlbW92ZUJ0bi5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjM5XCIgaGVpZ2h0PVwiMzZcIiB2aWV3Qm94PVwiMCAwIDM5IDM2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHJlY3Qgd2lkdGg9XCI0My42ODQ2XCIgaGVpZ2h0PVwiNy45NTUzXCIgcng9XCIzLjk3NzY1XCIgdHJhbnNmb3JtPVwibWF0cml4KDAuNzQ2ODEgMC42NjUwMzcgLTAuNzg3ODExIDAuNjE1OTE3IDYuMjY3MjEgMS45OTA2KVwiIGZpbGw9XCJ3aGl0ZVwiLz4gPHJlY3Qgd2lkdGg9XCI0Mi45MjQ4XCIgaGVpZ2h0PVwiOC4wODgxOFwiIHJ4PVwiNC4wNDQwOVwiIHRyYW5zZm9ybT1cIm1hdHJpeCgtMC42NzgzMDIgMC43MzQ3ODMgLTAuODQxMjQ0IC0wLjU0MDY1NiAzNy4zNTE2IDQuMzcyOTIpXCIgZmlsbD1cIndoaXRlXCIvPiA8L3N2Zz4nXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIFxuICAgICAgIHNpZGVCYXIuc2V0QXR0cmlidXRlKCdpZCcsJ2FjdGl2ZScpXG4gICAgfSlcbiAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIHNpZGVCYXIuaWQgPSAnZGVBY3RpdmUnXG4gICAgfSlcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHJlbW92ZUJ0bilcbiAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgaG9tZURpdi5jbGFzc0xpc3QuYWRkKCdidG5EaXYnKVxuY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxucC5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDE4MyAxNTBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4gPHJlY3QgeD1cIjQxXCIgeT1cIjUwXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiByeD1cIjEwXCIgZmlsbD1cIiNGRkJGMDBcIi8+IDxwYXRoIGQ9XCJNODQuNjI2IDYuNTA2MTFDODguNDgyIDIuODU2NDYgOTQuNTE4IDIuODU2NDUgOTguMzc0IDYuNTA2MUwxNTIuNTAyIDU3LjczNzJDMTU5LjA2OSA2My45NTI5IDE1NC42NzEgNzUgMTQ1LjYyOCA3NUgzNy4zNzE3QzI4LjMyOTUgNzUgMjMuOTMwNSA2My45NTI5IDMwLjQ5NzcgNTcuNzM3Mkw4NC42MjYgNi41MDYxMVpcIiBmaWxsPVwiI0ZGQkYwMFwiLz48cGF0aCBkPVwiTTc0IDEwNkM3NCAxMDAuNDc3IDc4LjQ3NzIgOTYgODQgOTZIOThDMTAzLjUyMyA5NiAxMDggMTAwLjQ3NyAxMDggMTA2VjE1MEg3NFYxMDZaXCIgZmlsbD1cImJsYWNrXCIvPjwvc3ZnPidcbiAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGhvbWUuaW5uZXJIVE1MID0gJ0hvbWUnXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzNDM0MzQnXG4gICAgICAgIGJ1aWxkTWFpbigpXG4gICAgICAgIHNpZGVCYXIucmVtb3ZlQXR0cmlidXRlKCdpZCcsJ2FjdGl2ZScpXG4gICAgfSlcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWUpXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChwKVxuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoaG9tZURpdilcbiAgICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXREaXYuY2xhc3NMaXN0LmFkZCgnYnRuRGl2JylcbiAgICAgY29uc3QgYWJvdXRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gJydcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0Y0QkI0NCdcbiAgICAgICAgYnVpbGRBYm91dE1lKClcbiAgICAgICAgc2lkZUJhci5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywnYWN0aXZlJylcbiAgICAgfSlcbiAgICAgYWJvdXRCdG4uaW5uZXJIVE1MID0gJ0Fib3V0IE1lJ1xuICAgICBhYm91dEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dEJ0bilcbiAgICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRQKVxuICAgICBjb25zdCBibG9nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgY29uc3QgYmxvZ0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgIGJsb2dCdG4uaW5uZXJIVE1MID0gXCJCbG9nXCJcbiAgICAgYmxvZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT57XG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gJydcbiAgICAgICAgYnVpbGRCbG9nKClcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzM0MzQzNCdcbiAgICAgICAgc2lkZUJhci5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywnYWN0aXZlJylcbiAgICAgfSlcbiAgICAgYmxvZ0Rpdi5hcHBlbmRDaGlsZChibG9nQnRuKVxuICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGFib3V0RGl2KVxuICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGJsb2dEaXYpXG4gICAgc2lkZS5hcHBlbmRDaGlsZChzaWRlQmFyKVxufSIsImltcG9ydCBqYXZhIGZyb20gJy4vcGljcy9qYXZhLnBuZydcbmltcG9ydCBzYXNzIGZyb20gJy4vcGljcy9zYXNzLnBuZydcbmltcG9ydCBjc3MgZnJvbSAnLi9waWNzL2Nzcy5wbmcnXG5pbXBvcnQgaHRtbCBmcm9tICcuL3BpY3MvaHRtbC5wbmcnXG5pbXBvcnQganMgZnJvbSAgJy4vcGljcy9qcy5wbmcnXG5pbXBvcnQgcHkgZnJvbSAnLi9waWNzL3B5dGhvbi5wbmcnXG5pbXBvcnQgc3FsIGZyb20gJy4vcGljcy9zcWwucG5nJ1xuaW1wb3J0IHdwIGZyb20gJy4vcGljcy93ZWJwYWNrLnBuZydcbmltcG9ydCB0cyBmcm9tICcuL3BpY3MvdHMucG5nJ1xuaW1wb3J0IGplc3QgZnJvbSAnLi9waWNzL2plc3QucG5nJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRTa2lsbHMoKXtcbiAgICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgd3JhcC5jbGFzc0xpc3QuYWRkKCdza2lsbHMnKVxuICAgIGNvbnN0IHNraWxscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2tpbGxzLmNsYXNzTGlzdC5hZGQoJ3dyYXAnKVxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGgyLmlubmVySFRNTCA9IFwiTXkgU2tpbGxzZXRcIlxuICAgIHdyYXAuYXBwZW5kQ2hpbGQoaDIpXG4gICAgbGV0IGNvdW50ID0gMFxuICAgIHdoaWxlKGNvdW50IDwgMTApe1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICAgICAgc3dpdGNoKGNvdW50KXtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnSmF2YScgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gamF2YVxuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnSmF2YSdcbiAgICAgICAgICAgICAgICBpbWcuaWQgPSAnamF2YSdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZCgnamF2YScpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdQeXRob24nXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHB5XG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdQeXRob24nXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ0hUTUwnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGh0bWxcbiAgICAgICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2h0bWwnKVxuXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdIVE1MJ1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdDU1MnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGNzc1xuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnQ1NTJ1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdjc3MnKVxuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdKYXZhU2NyaXB0J1xuICAgICAgICAgICAgICAgIGltZy5zdHlsZS5tYXJnaW5MZWZ0ID0gJzIwcHgnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGpzXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdKYXZhU2NyaXB0J1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdteVNRTCdcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gc3FsXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdteVNRTCdcbiAgICAgICAgICAgICAgICBwLnN0eWxlLm1hcmdpbkxlZnQgPSAnOHB4J1xuICAgICAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZCgnc3FsJylcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnU2FzcydcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gc2Fzc1xuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnU2FzcydcbiAgICAgICAgICAgICAgICBwLnN0eWxlLm1hcmdpbkxlZnQgPSAnNXB4J1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdXZWJwYWNrJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSB3cFxuICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCd3ZWJwYWNrJylcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ1dlYnBhY2snXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ1R5cGVTY3JpcHQnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHRzXG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpbkxlZnQgPSAnMjBweCdcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ1R5cGVzY3JpcHQnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ0plc3QnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGplc3RcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0plc3QnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZChza2lsbHMpXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQod3JhcClcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9