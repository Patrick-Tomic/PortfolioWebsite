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
.skills .card #vite {
  margin-left: 10px;
}
.skills .card #react {
  margin-left: 4px;
}
.skills .card .tailwind {
  margin-left: 13px;
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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":[" \n$base: #343434;\n*{\n    margin: 0;\n    font-family: 'Courier New', Courier, monospace;\n   \n}\n \nbody{\n    background-color:#343434;\n    width: 100%;\n    height: 100%;\n     \n}\nfooter\n{\n    box-shadow: 10px 10px 10px 15px white;\n    button{\n        cursor: pointer;\n        border: none;\n        background-color: $base;\n    }\n    background-color: $base;\n}\nheader{\n    \n    box-shadow: 0px 5px 5px white;\n   \n    position: sticky;\n    top: 0;\n    background-color: #13274F;\n    z-index: 1;\n    display: flex;\n    justify-content: space-between;\n     svg{\n        margin-left: 10px;\n        margin-top: 5px;\n     }\n    button{\n        background-color: #13274F;\n        border: none;\n        margin-top: 5px;\n        cursor: pointer;\n    }\n    .name{ \n        font-size: 1em;\n            margin-left: 15vw;\n           color: white;\n           font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n        }\n    .name:hover{\n        color: #FFD700;\n    }\n}\n.header{\n    display: flex;\n    padding: 25px;\n    justify-content: space-around;\n   \n    .portrait{\n    \n       margin: 5px;\n        width:auto;\n        height: 321px;\n        border-radius: 10px;\n    }\n    .whoAmI{\n        margin-top: 5vh;\n    \n        font-family: 'Courier New', Courier, monospace;\n        color: white;\n        p{\n            font-size: 20px;\n            line-height: 25px;\n            \n        }\n    }\n}\n.skills{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n     \n    box-shadow: 0px 15px 15px black;\n    h2{\n        margin-left: 43%;\n    }\n\n    .wrap{\n        margin-left: 3vw;\n        background-color: white;\n        margin-bottom: 10px;\n        display: grid;\n        grid-template-columns: repeat(auto-fit,minmax(150px, 1fr));\n         \n    \n        \n    }\n    .card{\n        display: flex;\n        flex-direction: column;\n        img{\n         \n            padding: 2px;\n            \n            \n            background-color: white;\n            min-width: 3vw;\n            min-height: 6vh;\n            max-width: 3vw;\n            max-width: 6vh;\n        }\n        .html{\n            margin-left: 12px;\n        }\n        .css{\n            margin-left: 13px;\n        }\n        .java{\n            margin-left: 9px;\n        }\n        #vite{\n            margin-left: 10px;\n        }\n        #react{\n             margin-left: 4px;\n        }\n        .tailwind{\n          margin-left: 13px;  \n        }\n        \n    }\n}\n.projects{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    .projectCard{\n       \n        padding: 50px;\n        display: flex;\n        \n        .links{\n            img{\n                border-radius: 10px;\n                display: flex;\n                flex-direction: column;\n                width: 20vw;\n    \n            }\n            .btns{\n                button{\n                    cursor: pointer;\n                    margin: 1vh;\n                    background-color: #FFBF00;\n                    border: #FFBF00 1px solid;\n                    width: 9vw;\n                    height:5vh;\n                    border-radius: 10px;\n                    font-size: 15px;\n                    font-weight: bold;\n                }\n                button:hover{\n                    background-color: $base;\n                    color: white;\n                }\n                display: flex;\n                \n                align-items: center;\n            }\n        }\n        .description{\n        h2{\n            color: white;\n            margin-left: 5vw;\n        }\n        p{\n             \n            color: white;\n            font-size: 18px;\n            margin-left: 5vw;\n            margin-top: 2vh;\n        }\n    }\n    }\n}\n \n    .formDiv{\n        box-shadow: 10px 10px 10px 15px white;\n        background-color: #13274F;\n        \n       display: flex;\n       .contact{\n        margin-left: 10vw;\n        color: white;\n        h3{\n            font-size: 23px;\n            margin-top: 2vh;\n            margin-bottom: 5vh;\n        }\n        p{\n            font-size: 18px;\n        }\n        display: flex;\n        flex-direction: column;\n         \n        width:35vw ;\n        \n       }\n        form{\n            margin-left: 200px;\n             \n            border-radius: 10px;\n           label{\n            color: white;\n           }\n            width: 25vw;\n            padding: 10px;\n            display: flex;\n            flex-direction:column;\n            input{\n               \n                border: solid 1px black;\n                margin: 5px;\n                width: 15vw;\n            }\n            textarea{\n                width: 20vw;\n            }\n            .submit{\n                cursor: pointer;\n                border-radius: 5px;\n                margin-top: 10px;\n                width: 10vw;\n                height: 4vh;\n                background-color:#FFBF00;\n                font-size: 15px;\n                font-weight: bold;\n            }\n            .submit:hover{\n                color: white;\n                background-color: #343434;\n                 \n            }\n        }\n    }\n\n.side{\n    display: flex;\n    justify-content: flex-end;\n    \n  \n   \n.sideBar{\n    width: 25vw;\n    \n    height: 100%;\n    background-color: \t#36454F;\n    position: absolute;\n   display: none;\n   z-index: auto;\n   .remove{\n    background-color: \t#36454F;\n    border: none;\n    align-self: flex-end;\n    cursor: pointer;\n}\ndiv{\n    display: flex;\n     \n    button{\n        cursor: pointer;\n        margin-top: 15px;\n        align-self: flex-start;\n        border: none;\n        background-color: \t#36454F;\n        font-size: 20px;\n        color: white;\n    }\n    button:hover{\n        color:  #FFBF00;\n    }\n}\n \n  \n}\n#active{\n    animation: openSide 1s;\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n   z-index: 2;\n    transform-origin: center right;\n  \n    \n}  \n#deActive{\n    animation: closeSide 1s;\n    transform-origin: center right;\n}\n}\n\nmain{\n min-height: 100%;\n.blog{\n    color: white;\n    padding: 10vh 10vw;\n  \n    li{\n       cursor: pointer;\n        font-size: 24px;\n        h2{\n            text-decoration: none;\n            font-size: 22px;\n            display: none;\n        }\n        p{\n            b{\n                color: #F4BB44;\n                font-size: 22px;\n            }\n            text-decoration: none;\n            font-size: 18px;\n            line-height: 25px;\n            display: none;\n        }\n        \n    }\n   \n}\n\n.bio{\n    z-index: 5;\n    height: 700px;\n    z-index: 1;\n    display: flex;\n   button{\n    cursor: pointer;\n   }\n   button:hover{\n    color: white;\n   }\n    \n    .myStory{\n        button{\n            font-size: 1.5em;\n            font-weight: bold;\n            text-align: left;\n             margin-bottom: 2vh;\n            border: none;\n            background-color: #F4BB44;\n        }\n        height: auto;\n        border-bottom: none;\n        border: solid 5px #13274F;\n        border-bottom: none;\n       \n        \n       padding:2vh 3vw;\n       \n        font-size: 18px;\n        color: black;\n        width: 33%;\n         \n\n    }\n    .bookList{\n         \n        height: auto;\n        display: flex;\n        flex-direction: column;\n        width: 33%;\n        padding: 25px;\n        border: 5px solid #13274F;\n        border-right: none;\n        border-bottom: none;\n        border-left: none;\n        button{\n            border: none;\n            font-size: 1.5em;\n            font-weight: bold;\n            text-align: left;\n             margin-bottom: 2vh;\n           width: 10vw;\n            background-color: #F4BB44;\n        }\n        .bookDiv{\n            \n           \n            .bookDescription{\n                left: 25%;\n                 z-index: 3;\n                border: solid 1px #13274F;\n                display: none;\n                position: absolute;\n                width: 18vw;\n                height: auto;\n                \n                padding: 2vw 2vh;     \n                background-color: #343434;\n                border-radius: 10px;\n            }\n            li{\n             \n                margin-bottom: 2vh;\n                font-size: 18px;\n                font-weight: bold;\n                width: 15vw;\n            }\n            ol{\n            li:hover{\n                color: white;\n                cursor: pointer;\n            }\n            }\n        }\n        \n    }\n   .hobbies{\n    border-top: #13274F 5px solid;\n    \n    button{\n       \n        font-size: 1.5em;\n        font-weight: bold;\n        text-align: left;\n         margin-bottom: 2vh;\n        border: none;\n        background-color: #F4BB44;\n    }\n     \n    height: auto;\n    padding:2vh 3vw;\n    width: 33%;\n     \n    .hobbyDiv{\n         \n    .list{\n        li{\n            font-size: 18px;\n        p{\n            border: none;\n           \n           width: 15vw;\n        }\n    }\n    }\n}\n   }\n}\n.quote{\n  margin-left: 30vw;\n  margin-top: 2vh;\n}\n.familyAlbum{\n    border-top-left-radius: 15px;\n    border-top-left-radius: 15px;\n    background-color: #13274F;\n    color:white;\n    text-align: center;\n}\n.sliderWrap{\n   overflow: hidden;\n.imgSlider{\n    width: 100000vw;\n     \n    background-color: #13274F; /* Chrome 10-25, Safari 5.1-6 */\n    display: flex;\n    transition: transform 1s ease-in-out;\n    transform: translateX(0);\n    img{\n        margin-left: 5vw;\n        margin-bottom: 5vh;\n        height: 25vh;\n        width: auto;\n        border-radius: 50px;\n    }\n}\n}\n.explain{\n   margin: 5vh 5vw;\n    h2{\n        text-align: center;\n    }\n    p{\n        line-height: 25px;\n    }\n}\n}\n\n@keyframes openSide {\n    from{\n      transform: scaleX(0);\n    }\n     70%{\n       transform: scaleX(1.1);\n     }\n     to{\n        transform: scaleX(1);\n     }\n}\n@keyframes closeSide{\n    from{\n        transform: scaleX(1);\n        display: block;\n    }\n    to{\n        transform: scaleX(0);\n        display: none;\n    }\n}\n@media (max-width: 1750px){\n    .projects{\n        .projectCard{\n            flex-direction: column;\n            .links{\n                img{\n                    margin-left: 3vw;\n                }\n                margin-left: 6vw;\n                .btns{\n                    button{\n                        width: 12vw;\n                        height: 6vh;\n                    }\n                }\n            }\n        }\n    }\n    main{\n        p{\n            font-size: 13px;\n        }\n        li{\n            font-size: 14px;\n            p{\n                font-size: 13px;\n            }\n       \n        }\n    }\n}\n @media (max-width: 1000px){\n    .skills{\n        .wrap{\n            margin-left: 80px;\n            .card{\n              \n         img{\n            max-width: 6vw;\n            max-height: 10vh;\n             min-width: 6vw;\n             min-height: 6vh;\n        }\n        p{\n            margin-bottom: 10px;\n            margin-left: 10px;\n            font-weight: bold;\n        }\n         .css{\n            margin-left: 18px;\n         }\n         .html{\n            margin-left: 14px;\n         }\n    }\n}\n}\n.projects{\n    .projectCard{\n        \n        flex-direction: column;\n        .links{\n            margin-left: 8px;\n            img{\n                margin-left: 2vw;\n                width: 30vw;\n            }\n        \n        .btns{\n            margin-left: 25px;\n            button{\n                width: 13vw;\n                height: 7vh;\n            }\n        }\n    }\n    .description{\n        \n        margin-right: 5vw;\n    }\n}\n}\nmain{ \n     \n.bio{\n    height: 800px;\n    .myStory{\n        .sumDiv{\n            P{\n                font-size: 14px;\n                font-weight: bold;\n            }\n        }\n    }\n    .bookList{\n        .bookDiv{\n            .bookDescription{\n                width: 45vw;\n            }\n            li{\n                font-size: 15px;\n            }\n        }\n      \n    }\n    .hobbies{\n\n   .hobbyDiv{\n    .list{\n        font-weight: bold;\n        li{\n            font-size: 15px;\n        }\n        p{\n            font-size: 11px;\n        }\n    }\n   }\n}\n}\n.imgSlider{\n    img{\n        height: 15vh;\n    }\n}\n}\n }\n@media (max-width: 700px){\n      \n    body{\n        width: 100%;\n         \n    }\n    header{\n         \n         \n        button{\n        h2{\n            font-size: 24px;\n        }\n    }\n    }\n    .header{\n        \n         \n        padding: 5px;\n        display: flex;\n        flex-wrap: wrap;\n         justify-content: center;\n         align-items: center;\n        .portrait{\n            margin-top: 5vh;\n            height: 160px;\n            \n        }\n        h2{\n            \n            font-size: 24px;\n        }\n        p{\n          \n            font-size: 10px;\n            line-height: 12px;\n        }\n    }\n    .skills{\n      \n \n      \n    .wrap{\n        margin-top: 3vh;\n        display: flex;\n        flex-wrap: wrap;\n        margin-left: 0;\n       justify-content: space-between;\n       \n        .card{\n          .webpack{\n            margin-left: 2vw;\n          }\n            .html{\n                margin-left: 7px;\n              }\n              .css{\n                margin-left: 10px;\n              }\n            img{\n            max-width: 40px;\n            max-height: 40px;\n        }\n    }\n}\n        h2{\n            display: none;\n        }\n    }\n    .projects{\n        grid-template-columns: 1fr;\n        \n        .projectCard{\n            flex-direction: column;\n            .links{\n                \n                img{\n                   width: 250px;\n                   margin-left: 25vw;\n                   height: auto;\n                }\n                .btns{\n                    \n                button{\n                    width: 40vw;\n                    height: 40px;\n                    \n                    font-weight: normal;\n                }\n                }\n            }\n            .description{\n                margin-left: 15vw;\n                h2{\n                    margin-left: 20vw;\n                    color:  #FFBF00;\n                }\n            }\n             \n           padding: 25px;     \n              \n            \n        }\n        \n      \n            .description{\n                margin-left: 20px;\n                h2{\n                    font-size: 16px;\n                }\n                p{\n                    font-size: 10px;\n                }\n            }\n         \n    }\n    .side{\n        .sideBar{\n            width: 80%;\n        }\n        #active{\n            animation: none;\n        }\n        #deActive{\n            animation: none;\n        }\n    }\n\n\n//ABOUT ME CSS\nheader{\n    z-index: 1;\n      \n       width: 100%;\n       .bosnianWar{\n           display: none;\n       }\n       h2{\n           font-size: 15px;\n       }\n   }\nmain{\n    \n   width: 100%;\n    display: flex;\n    flex-direction: column;\n    \n    \n    .quote{\n       margin-left: 10vw;\n        \n    }\n/* #animate{\n    animation: none;\n    display: block;\n}\n#reverse{\n    animation: none;\n    display: block;\n} */\n.bio{\n    border-top:#13274F solid 5px;\n    z-index: 0;\n    min-height: 420vh;\n     \n    flex-direction: column;\n    pointer-events: none;\n    .bookList{\n        button{\n            font-size: 20px;\n            color: black;\n        }\n        border: none;\n        \n        .bookDiv{\n       \n            z-index: 0;\n            padding: 0;\n            \n            display: block;\n            li{\n                pointer-events: none;\n               \n            .bookDescription{\n                left: -3%;\n                z-index: 0;\n                width: 80vw;\n                height: 55px;\n                background-color:#F4BB44;\n                border: none;\n                font-size: 10px;\n                position: relative;\n                display: block;\n              \n            }\n        }\n           \n        }\n    }\n        .hobbies{\n           margin-bottom: 50vh;\n            width: 100%;\n            border-top: #13274F 5px solid;\n            border-bottom:none;\n            padding: 0;\n            .hobbyDiv{\n                display: block;\n                 width: 100%;\n                .list{\n                    li{\n                        font-weight: bold;\n                        margin-bottom: 5vh;\n                        \n                     p{\n                        width: 100%;\n                     }\n                }\n            }\n\n            }\n        }\n        .myStory{\n          border-top: 5px solid #13274F;\n         \n          border-left: none;\n          border-right: none;\n          border-bottom: none;\n            button{\n                border: none;\n            }\n            width: 94%;\n           \n            .sumDiv{\n                width: 80vw;\n                height: 60vh;\n                display: block;\n                p{\n                    font-size: 15px;\n                }\n                 \n            }\n        }\n      \n    \n}\n.imgSlider{\n    img{\n        height: 25vh;\n         \n    }\n}\n}\n\n*{\n   \n    margin: 0;\n    padding: 0;\n}\n}\n@media (max-width:445px){\n     \n    header{\n     z-index: 1;\n        margin: 0;\n        width: 100%;\n        .bosnianWar{\n            display: none;\n        }\n        h2{\n            font-size: 15px;\n        }\n    }\n    main{\n       \n        .bio{\n            .bookList{\n                button{\n                    font-size: 20px;\n                    color: black;\n                }\n                .bookDiv{\n                    .bookDescription{\n                        z-index: auto;\n                    }\n                }\n            }\n            z-index: auto;\n             padding: 0;\n            margin: 0;\n            margin-bottom: 50vh;\n           \n        }\n        .sliderWrap{\n    .imgSlider{\n        z-index: auto;\n        img{\n            height: 20vh;\n        }\n    }\n}\n}\n.side{\n    z-index: 10;\n.sideBar{\n   z-index: 2;\n}\n}\n    }\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _pics_tailwind_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pics/tailwind.png */ "./src/pics/tailwind.png");
/* harmony import */ var _pics_react_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pics/react.png */ "./src/pics/react.png");
/* harmony import */ var _pics_Vitejs_logo_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pics/Vitejs-logo.svg */ "./src/pics/Vitejs-logo.svg");













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
    while(count < 13){
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
                p.style.marginLeft='10px'
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 10:
                img.title = 'Tailwind'
                img.src = _pics_tailwind_png__WEBPACK_IMPORTED_MODULE_10__
                img.alt = 'Tailwind'
                p.innerHTML = img.title
            img.classList.add('tailwind')
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 11:
                img.title = 'React'
                img.src = _pics_react_png__WEBPACK_IMPORTED_MODULE_11__
                p.id = 'react'
                img.alt = 'React'
                img.innerHTML = img.title
                card.appendChild(img)
                card.appendChild(p)
                skills.appendChild(card)
                count++
                break
            case 12:
                img.title = 'Vite'
                p.id = 'vite'
                img.src = _pics_Vitejs_logo_svg__WEBPACK_IMPORTED_MODULE_12__
                img.alt = 'Vite'
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

/***/ "./src/pics/Vitejs-logo.svg":
/*!**********************************!*\
  !*** ./src/pics/Vitejs-logo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41adc49884a136155c2e.svg";

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

/***/ "./src/pics/react.png":
/*!****************************!*\
  !*** ./src/pics/react.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50c366299e5e3cc3a890.png";

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

/***/ "./src/pics/tailwind.png":
/*!*******************************!*\
  !*** ./src/pics/tailwind.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c10991dccefeefc906f7.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxZQUFZLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsUUFBUSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxzQkFBc0IsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLDJDQUEyQyxJQUFJLGdCQUFnQixxREFBcUQsUUFBUSxVQUFVLCtCQUErQixrQkFBa0IsbUJBQW1CLFVBQVUsV0FBVyw0Q0FBNEMsYUFBYSwwQkFBMEIsdUJBQXVCLGtDQUFrQyxPQUFPLDhCQUE4QixHQUFHLFNBQVMsMENBQTBDLDRCQUE0QixhQUFhLGdDQUFnQyxpQkFBaUIsb0JBQW9CLHFDQUFxQyxXQUFXLDRCQUE0QiwwQkFBMEIsUUFBUSxhQUFhLG9DQUFvQyx1QkFBdUIsMEJBQTBCLDBCQUEwQixPQUFPLGFBQWEseUJBQXlCLGdDQUFnQywwQkFBMEIsc0ZBQXNGLFdBQVcsa0JBQWtCLHlCQUF5QixPQUFPLEdBQUcsVUFBVSxvQkFBb0Isb0JBQW9CLG9DQUFvQyxxQkFBcUIsMkJBQTJCLHFCQUFxQix3QkFBd0IsOEJBQThCLE9BQU8sY0FBYywwQkFBMEIsK0RBQStELHVCQUF1QixZQUFZLDhCQUE4QixnQ0FBZ0MseUJBQXlCLE9BQU8sR0FBRyxVQUFVLDhCQUE4QixvQkFBb0IsNkJBQTZCLDZDQUE2QyxTQUFTLDJCQUEyQixPQUFPLGNBQWMsMkJBQTJCLGtDQUFrQyw4QkFBOEIsd0JBQXdCLHFFQUFxRSxrQ0FBa0MsWUFBWSx3QkFBd0IsaUNBQWlDLGNBQWMsc0NBQXNDLGtFQUFrRSw2QkFBNkIsOEJBQThCLDZCQUE2Qiw2QkFBNkIsV0FBVyxnQkFBZ0IsZ0NBQWdDLFdBQVcsZUFBZSxnQ0FBZ0MsV0FBVyxnQkFBZ0IsK0JBQStCLFdBQVcsZ0JBQWdCLGdDQUFnQyxXQUFXLGlCQUFpQixnQ0FBZ0MsV0FBVyxvQkFBb0IsZ0NBQWdDLFdBQVcsaUJBQWlCLEdBQUcsWUFBWSxvQkFBb0IscUNBQXFDLDhCQUE4QixtQkFBbUIsaUNBQWlDLHdCQUF3QiwyQkFBMkIsa0JBQWtCLHNDQUFzQyxnQ0FBZ0MseUNBQXlDLDhCQUE4QixxQkFBcUIsb0JBQW9CLHlCQUF5QixzQ0FBc0Msa0NBQWtDLGdEQUFnRCxnREFBZ0QsaUNBQWlDLGlDQUFpQywwQ0FBMEMsc0NBQXNDLHdDQUF3QyxtQkFBbUIsK0JBQStCLDhDQUE4QyxtQ0FBbUMsbUJBQW1CLGdDQUFnQyx3REFBd0QsZUFBZSxXQUFXLHVCQUF1QixhQUFhLDJCQUEyQiwrQkFBK0IsV0FBVyxZQUFZLDBDQUEwQyw4QkFBOEIsK0JBQStCLDhCQUE4QixXQUFXLE9BQU8sT0FBTyxHQUFHLGtCQUFrQixnREFBZ0Qsb0NBQW9DLGlDQUFpQyxrQkFBa0IsNEJBQTRCLHVCQUF1QixhQUFhLDhCQUE4Qiw4QkFBOEIsaUNBQWlDLFdBQVcsWUFBWSw4QkFBOEIsV0FBVyx3QkFBd0IsaUNBQWlDLGlDQUFpQyxvQkFBb0IsZUFBZSxpQ0FBaUMsaURBQWlELG1CQUFtQiwyQkFBMkIsY0FBYywwQkFBMEIsNEJBQTRCLDRCQUE0QixvQ0FBb0Msb0JBQW9CLDJEQUEyRCw4QkFBOEIsOEJBQThCLGVBQWUsdUJBQXVCLDhCQUE4QixlQUFlLHNCQUFzQixrQ0FBa0MscUNBQXFDLG1DQUFtQyw4QkFBOEIsOEJBQThCLDJDQUEyQyxrQ0FBa0Msb0NBQW9DLGVBQWUsNEJBQTRCLCtCQUErQiw0Q0FBNEMsa0NBQWtDLFdBQVcsT0FBTyxVQUFVLG9CQUFvQixnQ0FBZ0MsMEJBQTBCLGtCQUFrQix5QkFBeUIsa0NBQWtDLHlCQUF5QixtQkFBbUIsbUJBQW1CLGFBQWEsa0NBQWtDLG1CQUFtQiwyQkFBMkIsc0JBQXNCLEdBQUcsTUFBTSxvQkFBb0Isb0JBQW9CLDBCQUEwQiwyQkFBMkIsaUNBQWlDLHVCQUF1QixzQ0FBc0MsMEJBQTBCLHVCQUF1QixPQUFPLG1CQUFtQiwwQkFBMEIsT0FBTyxHQUFHLFVBQVUsVUFBVSw2QkFBNkIsb0JBQW9CLDZCQUE2QixzQkFBc0IsZ0JBQWdCLHFDQUFxQyxlQUFlLFlBQVksOEJBQThCLHFDQUFxQyxHQUFHLEdBQUcsU0FBUyxvQkFBb0IsUUFBUSxtQkFBbUIseUJBQXlCLGFBQWEseUJBQXlCLDBCQUEwQixhQUFhLG9DQUFvQyw4QkFBOEIsNEJBQTRCLFdBQVcsWUFBWSxnQkFBZ0IsaUNBQWlDLGtDQUFrQyxlQUFlLG9DQUFvQyw4QkFBOEIsZ0NBQWdDLDRCQUE0QixXQUFXLGlCQUFpQixRQUFRLFNBQVMsaUJBQWlCLG9CQUFvQixpQkFBaUIsb0JBQW9CLFlBQVksc0JBQXNCLE1BQU0sa0JBQWtCLG1CQUFtQixNQUFNLHFCQUFxQixpQkFBaUIsK0JBQStCLGdDQUFnQywrQkFBK0Isa0NBQWtDLDJCQUEyQix3Q0FBd0MsV0FBVyx1QkFBdUIsOEJBQThCLG9DQUFvQyw4QkFBOEIsNENBQTRDLG1DQUFtQyx1QkFBdUIscUJBQXFCLG9CQUFvQixnQkFBZ0Isa0NBQWtDLHdCQUF3QixpQ0FBaUMscUJBQXFCLHdCQUF3QixvQ0FBb0MsNkJBQTZCLDhCQUE4Qiw0QkFBNEIsaUJBQWlCLDJCQUEyQiwrQkFBK0IsZ0NBQWdDLCtCQUErQixrQ0FBa0MseUJBQXlCLHdDQUF3QyxXQUFXLG1CQUFtQiwwREFBMEQsNEJBQTRCLDhCQUE4Qiw0Q0FBNEMsZ0NBQWdDLHFDQUFxQyw4QkFBOEIsK0JBQStCLDBEQUEwRCw0Q0FBNEMsc0NBQXNDLGVBQWUsaUJBQWlCLG9EQUFvRCxrQ0FBa0Msb0NBQW9DLDhCQUE4QixlQUFlLGlCQUFpQix1QkFBdUIsK0JBQStCLGtDQUFrQyxlQUFlLGVBQWUsV0FBVyxpQkFBaUIsY0FBYyxvQ0FBb0MsbUJBQW1CLG9DQUFvQyw0QkFBNEIsMkJBQTJCLDhCQUE4Qix1QkFBdUIsb0NBQW9DLE9BQU8sMEJBQTBCLHNCQUFzQixpQkFBaUIsdUJBQXVCLHVCQUF1QixhQUFhLDhCQUE4QixZQUFZLDJCQUEyQixzQ0FBc0MsV0FBVyxPQUFPLE9BQU8sR0FBRyxNQUFNLEdBQUcsU0FBUyxzQkFBc0Isb0JBQW9CLEdBQUcsZUFBZSxtQ0FBbUMsbUNBQW1DLGdDQUFnQyxrQkFBa0IseUJBQXlCLEdBQUcsY0FBYyxzQkFBc0IsYUFBYSxzQkFBc0Isd0NBQXdDLG9EQUFvRCwyQ0FBMkMsK0JBQStCLFVBQVUsMkJBQTJCLDZCQUE2Qix1QkFBdUIsc0JBQXNCLDhCQUE4QixPQUFPLEdBQUcsR0FBRyxXQUFXLHFCQUFxQixTQUFTLDZCQUE2QixPQUFPLFFBQVEsNEJBQTRCLE9BQU8sR0FBRyxHQUFHLHlCQUF5QixXQUFXLDZCQUE2QixPQUFPLFdBQVcsZ0NBQWdDLFFBQVEsVUFBVSwrQkFBK0IsUUFBUSxHQUFHLHVCQUF1QixXQUFXLCtCQUErQix5QkFBeUIsT0FBTyxTQUFTLCtCQUErQix3QkFBd0IsT0FBTyxHQUFHLDZCQUE2QixnQkFBZ0IsdUJBQXVCLHFDQUFxQyxxQkFBcUIsc0JBQXNCLHVDQUF1QyxtQkFBbUIsbUNBQW1DLHdCQUF3Qiw2QkFBNkIsc0NBQXNDLHNDQUFzQyx1QkFBdUIsbUJBQW1CLGVBQWUsV0FBVyxPQUFPLFdBQVcsWUFBWSw4QkFBOEIsV0FBVyxhQUFhLDhCQUE4QixnQkFBZ0Isa0NBQWtDLGVBQWUsb0JBQW9CLE9BQU8sR0FBRyw4QkFBOEIsY0FBYyxnQkFBZ0IsZ0NBQWdDLG9CQUFvQiwrQkFBK0IsNkJBQTZCLCtCQUErQiw4QkFBOEIsK0JBQStCLFdBQVcsWUFBWSxrQ0FBa0MsZ0NBQWdDLGdDQUFnQyxXQUFXLGdCQUFnQixnQ0FBZ0MsWUFBWSxpQkFBaUIsZ0NBQWdDLFlBQVksT0FBTyxHQUFHLEdBQUcsWUFBWSxtQkFBbUIsMkNBQTJDLGlCQUFpQiwrQkFBK0Isa0JBQWtCLG1DQUFtQyw4QkFBOEIsZUFBZSwwQkFBMEIsZ0NBQWdDLHFCQUFxQiw4QkFBOEIsOEJBQThCLGVBQWUsV0FBVyxPQUFPLG1CQUFtQixzQ0FBc0MsT0FBTyxHQUFHLEdBQUcsUUFBUSxjQUFjLG9CQUFvQixlQUFlLGtCQUFrQixnQkFBZ0Isa0NBQWtDLG9DQUFvQyxlQUFlLFdBQVcsT0FBTyxnQkFBZ0IsbUJBQW1CLCtCQUErQiw4QkFBOEIsZUFBZSxpQkFBaUIsa0NBQWtDLGVBQWUsV0FBVyxlQUFlLGVBQWUsaUJBQWlCLFlBQVksNEJBQTRCLGFBQWEsOEJBQThCLFdBQVcsWUFBWSw4QkFBOEIsV0FBVyxPQUFPLE1BQU0sR0FBRyxHQUFHLGFBQWEsVUFBVSx1QkFBdUIsT0FBTyxHQUFHLEdBQUcsSUFBSSw0QkFBNEIsbUJBQW1CLHNCQUFzQixrQkFBa0IsYUFBYSx1Q0FBdUMsYUFBYSw4QkFBOEIsV0FBVyxPQUFPLE9BQU8sY0FBYyw0Q0FBNEMsd0JBQXdCLDBCQUEwQixtQ0FBbUMsK0JBQStCLG9CQUFvQiw4QkFBOEIsNEJBQTRCLHlCQUF5QixhQUFhLDRDQUE0QyxXQUFXLFlBQVksMENBQTBDLGdDQUFnQyxXQUFXLE9BQU8sY0FBYywrQkFBK0IsMEJBQTBCLHdCQUF3QiwwQkFBMEIseUJBQXlCLHdDQUF3Qyx5QkFBeUIscUJBQXFCLCtCQUErQixhQUFhLG9CQUFvQixtQ0FBbUMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsaUJBQWlCLGtCQUFrQiw4QkFBOEIsK0JBQStCLFdBQVcsT0FBTyxHQUFHLGFBQWEsNEJBQTRCLFdBQVcsT0FBTyxnQkFBZ0IscUNBQXFDLGlDQUFpQyxxQ0FBcUMscUJBQXFCLHdDQUF3QyxrQ0FBa0MsdUNBQXVDLGtDQUFrQyxtQkFBbUIsd0JBQXdCLCtDQUErQyxrQ0FBa0MsbUNBQW1DLGdFQUFnRSxtQkFBbUIsbUJBQW1CLGVBQWUsMkJBQTJCLG9DQUFvQyxxQkFBcUIsd0NBQXdDLHNDQUFzQyxtQkFBbUIsZUFBZSwrQ0FBK0MseUNBQXlDLDZDQUE2QyxvQ0FBb0MscUJBQXFCLHNDQUFzQyxtQkFBbUIsb0JBQW9CLHNDQUFzQyxtQkFBbUIsZUFBZSxrQkFBa0IsWUFBWSxtQkFBbUIseUJBQXlCLFdBQVcsa0JBQWtCLDhCQUE4QixXQUFXLG9CQUFvQiw4QkFBOEIsV0FBVyxPQUFPLDZCQUE2QixpQkFBaUIsNkJBQTZCLHFCQUFxQiwyQkFBMkIsVUFBVSxZQUFZLDZCQUE2QixVQUFVLE1BQU0sT0FBTyx1QkFBdUIsb0JBQW9CLDZCQUE2Qix5QkFBeUIsMkJBQTJCLGlCQUFpQixjQUFjLHNCQUFzQixxQkFBcUIsR0FBRyxXQUFXLHNCQUFzQixxQkFBcUIsSUFBSSxTQUFTLG1DQUFtQyxpQkFBaUIsd0JBQXdCLG9DQUFvQywyQkFBMkIsZ0JBQWdCLGlCQUFpQiw4QkFBOEIsMkJBQTJCLFdBQVcsdUJBQXVCLDZCQUE2QixrQ0FBa0MseUJBQXlCLDJDQUEyQyxpQkFBaUIsdUNBQXVDLGdEQUFnRCw0QkFBNEIsNkJBQTZCLDhCQUE4QiwrQkFBK0IsMkNBQTJDLCtCQUErQixrQ0FBa0MscUNBQXFDLGlDQUFpQywrQkFBK0IsV0FBVyx3QkFBd0IsT0FBTyxtQkFBbUIsaUNBQWlDLDBCQUEwQiw0Q0FBNEMsaUNBQWlDLHlCQUF5Qix3QkFBd0IsaUNBQWlDLCtCQUErQix3QkFBd0IseUJBQXlCLDRDQUE0Qyw2Q0FBNkMsbURBQW1ELHNDQUFzQyx3QkFBd0IsbUJBQW1CLGVBQWUsaUJBQWlCLFdBQVcsbUJBQW1CLDBDQUEwQyx5Q0FBeUMsK0JBQStCLGdDQUFnQyxxQkFBcUIsK0JBQStCLGVBQWUseUJBQXlCLG1DQUFtQyw4QkFBOEIsK0JBQStCLGlDQUFpQyxvQkFBb0Isc0NBQXNDLG1CQUFtQixrQ0FBa0MsV0FBVyxpQkFBaUIsYUFBYSxVQUFVLHVCQUF1QixrQkFBa0IsR0FBRyxHQUFHLE1BQU0scUJBQXFCLGlCQUFpQixHQUFHLEdBQUcsMkJBQTJCLG9CQUFvQixrQkFBa0Isb0JBQW9CLHNCQUFzQixzQkFBc0IsNEJBQTRCLFdBQVcsYUFBYSw4QkFBOEIsV0FBVyxPQUFPLFdBQVcsd0JBQXdCLHdCQUF3Qix5QkFBeUIsc0NBQXNDLG1DQUFtQyxtQkFBbUIsMkJBQTJCLHVDQUF1Qyx3Q0FBd0MsdUJBQXVCLG1CQUFtQixlQUFlLDRCQUE0QiwwQkFBMEIsd0JBQXdCLGtDQUFrQyx3QkFBd0Isc0JBQXNCLGlCQUFpQix3QkFBd0IsY0FBYywyQkFBMkIsV0FBVyxPQUFPLEdBQUcsR0FBRyxRQUFRLGtCQUFrQixXQUFXLGdCQUFnQixHQUFHLEdBQUcsT0FBTyx1QkFBdUI7QUFDeGl4QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2p3QjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE0STtBQUM1STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSXNGO0FBQzlHLE9BQU8saUVBQWUsNEhBQU8sSUFBSSw0SEFBTyxVQUFVLDRIQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JnQztBQUNJO0FBQ0E7QUFDckI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZCxJQUFJLG1EQUFVO0FBQ2QsSUFBSSxtREFBVTtBQUNkLElBQUksbURBQVU7QUFDZCxJQUFJLG1EQUFVO0FBQ2QsSUFBSSxtREFBVTtBQUNkLElBQUksbURBQVU7QUFDZCxJQUFJLG1EQUFVO0FBQ2QsSUFBSSxtREFBVTtBQUNkLFFBQVEscURBQVk7QUFDcEIsUUFBUSxxREFBWTtBQUNwQixRQUFRLHFEQUFZO0FBQ3BCLFFBQVEscURBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGlEQUFnQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2SGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCa0M7QUFDUztBQUNHO0FBQ2hCO0FBQ0k7QUFDRTtBQUNyQjtBQUNmLG1EQUFXO0FBQ1gsb0RBQVc7QUFDWCxxREFBWSxDQUFDLHlDQUFFO0FBQ2YscURBQVksQ0FBQyxpREFBVTtBQUN2QixxREFBWSxDQUFDLGlEQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGd0M7QUFDekI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhDQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JrQztBQUNFO0FBQ007QUFDRTtBQUNOO0FBQ0Y7QUFDVTtBQUNWO0FBQ007QUFDRjtBQUNFO0FBQ047QUFDSTtBQUNFO0FBQ0Y7QUFDSjtBQUNFO0FBQ0E7QUFDSTtBQUNSO0FBQ0k7QUFDRTtBQUNKO0FBQ0k7QUFDRjtBQUNNO0FBQ047QUFDSztBQUNMO0FBQ1E7QUFDTjtBQUNFO0FBQ047QUFDSTtBQUNGO0FBQ3ZCO0FBQ2YsbUJBQW1CLDRDQUFHLENBQUMsNkNBQUksQ0FBQyxnREFBTyxDQUFDLGlEQUFRLENBQUMsOENBQUssQ0FBQyw2Q0FBSSxDQUFDLGtEQUFTLENBQUMsNkNBQUksQ0FBQyxnREFBTyxDQUFDLCtDQUFNLENBQUMsaURBQU8sQ0FBQyw4Q0FBSSxDQUFDLGdEQUFNLENBQUMsaURBQU8sQ0FBQyxnREFBTSxDQUFDLDhDQUFJLENBQUMsK0NBQUssQ0FBQyxpREFBTyxDQUFDLDZDQUFHLENBQUMsK0NBQUssQ0FBQyxnREFBTSxDQUFDLDhDQUFJLENBQUMsZ0RBQU0sQ0FBQywrQ0FBSyxDQUFDLGtEQUFRLENBQUMsK0NBQUssQ0FBQyxrREFBTyxDQUFDLCtDQUFLLENBQUMsbURBQVMsQ0FBQyxtREFBSyxDQUFDLGdEQUFNLENBQUMsOENBQUksQ0FBQyxnREFBTSxDQUFDLCtDQUFLO0FBQ3BQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELEdBQUc7QUFDdEQsU0FBUztBQUNUO0FBQ0E7QUFDQSxtREFBbUQsR0FBRztBQUN0RDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEVxQjtBQUNlO0FBQ0Q7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBUztBQUNiLENBQUM7QUFDRCx1REFBUztBQUNULHFEQUFZOzs7Ozs7Ozs7Ozs7OztBQ1pHO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RG1DO0FBQ0Q7QUFDSjtBQUNmO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVM7QUFDakI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFZO0FBQ3BCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVM7QUFDakI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRWtDO0FBQ0E7QUFDRjtBQUNFO0FBQ0g7QUFDRztBQUNGO0FBQ0c7QUFDTDtBQUNJO0FBQ1E7QUFDTjtBQUNLO0FBQzFCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJDQUFJO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBRztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUNBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBDQUFHO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkNBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOENBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUNBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkNBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQVE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2Jsb2cuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9ib29rcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2J1aWxkTWFpbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2hvYmJpZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9pbWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvc2tpbGxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5mb290ZXIge1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAxNXB4IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xufVxuZm9vdGVyIGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xufVxuXG5oZWFkZXIge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCB3aGl0ZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5oZWFkZXIgc3ZnIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbmhlYWRlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAxNXZ3O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5oZWFkZXIgLm5hbWU6aG92ZXIge1xuICBjb2xvcjogI0ZGRDcwMDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmhlYWRlciAucG9ydHJhaXQge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMzIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uaGVhZGVyIC53aG9BbUkge1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmhlYWRlciAud2hvQW1JIHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2tpbGxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDE1cHggYmxhY2s7XG59XG4uc2tpbGxzIGgyIHtcbiAgbWFyZ2luLWxlZnQ6IDQzJTtcbn1cbi5za2lsbHMgLndyYXAge1xuICBtYXJnaW4tbGVmdDogM3Z3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XG59XG4uc2tpbGxzIC5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5za2lsbHMgLmNhcmQgaW1nIHtcbiAgcGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiAzdnc7XG4gIG1pbi1oZWlnaHQ6IDZ2aDtcbiAgbWF4LXdpZHRoOiAzdnc7XG4gIG1heC13aWR0aDogNnZoO1xufVxuLnNraWxscyAuY2FyZCAuaHRtbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLnNraWxscyAuY2FyZCAuY3NzIHtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG4uc2tpbGxzIC5jYXJkIC5qYXZhIHtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cbi5za2lsbHMgLmNhcmQgI3ZpdGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5za2lsbHMgLmNhcmQgI3JlYWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5za2lsbHMgLmNhcmQgLnRhaWx3aW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG5cbi5wcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIHtcbiAgcGFkZGluZzogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyMHZ3O1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgLmJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgLmJ0bnMgYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDF2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkYwMDtcbiAgYm9yZGVyOiAjRkZCRjAwIDFweCBzb2xpZDtcbiAgd2lkdGg6IDl2dztcbiAgaGVpZ2h0OiA1dmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICBjb2xvcjogd2hpdGU7XG59XG4ucHJvamVjdHMgLnByb2plY3RDYXJkIC5kZXNjcmlwdGlvbiBoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbn1cbi5wcm9qZWN0cyAucHJvamVjdENhcmQgLmRlc2NyaXB0aW9uIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG4uZm9ybURpdiB7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDE1cHggd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZm9ybURpdiAuY29udGFjdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzNXZ3O1xufVxuLmZvcm1EaXYgLmNvbnRhY3QgaDMge1xuICBmb250LXNpemU6IDIzcHg7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xufVxuLmZvcm1EaXYgLmNvbnRhY3QgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5mb3JtRGl2IGZvcm0ge1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAyNXZ3O1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZvcm1EaXYgZm9ybSBsYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5mb3JtRGl2IGZvcm0gaW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAxNXZ3O1xufVxuLmZvcm1EaXYgZm9ybSB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAyMHZ3O1xufVxuLmZvcm1EaXYgZm9ybSAuc3VibWl0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDR2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkYwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5mb3JtRGl2IGZvcm0gLnN1Ym1pdDpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbn1cblxuLnNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnNpZGUgLnNpZGVCYXIge1xuICB3aWR0aDogMjV2dztcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0NTRGO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IGF1dG87XG59XG4uc2lkZSAuc2lkZUJhciAucmVtb3ZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDU0RjtcbiAgYm9yZGVyOiBub25lO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNpZGUgLnNpZGVCYXIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zaWRlIC5zaWRlQmFyIGRpdiBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDU0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2lkZSAuc2lkZUJhciBkaXYgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNGRkJGMDA7XG59XG4uc2lkZSAjYWN0aXZlIHtcbiAgYW5pbWF0aW9uOiBvcGVuU2lkZSAxcztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XG59XG4uc2lkZSAjZGVBY3RpdmUge1xuICBhbmltYXRpb246IGNsb3NlU2lkZSAxcztcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xufVxuXG5tYWluIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbm1haW4gLmJsb2cge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwdmggMTB2dztcbn1cbm1haW4gLmJsb2cgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbm1haW4gLmJsb2cgbGkgaDIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1haW4gLmJsb2cgbGkgcCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1haW4gLmJsb2cgbGkgcCBiIHtcbiAgY29sb3I6ICNGNEJCNDQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbm1haW4gLmJpbyB7XG4gIHotaW5kZXg6IDU7XG4gIGhlaWdodDogNzAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5tYWluIC5iaW8gYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWFpbiAuYmlvIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbm1haW4gLmJpbyAubXlTdG9yeSB7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyOiBzb2xpZCA1cHggIzEzMjc0RjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgcGFkZGluZzogMnZoIDN2dztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAzMyU7XG59XG5tYWluIC5iaW8gLm15U3RvcnkgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCQjQ0O1xufVxubWFpbiAuYmlvIC5ib29rTGlzdCB7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDMzJTtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyOiA1cHggc29saWQgIzEzMjc0RjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbm1haW4gLmJpbyAuYm9va0xpc3QgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICB3aWR0aDogMTB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcbn1cbm1haW4gLmJpbyAuYm9va0xpc3QgLmJvb2tEaXYgLmJvb2tEZXNjcmlwdGlvbiB7XG4gIGxlZnQ6IDI1JTtcbiAgei1pbmRleDogMztcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzEzMjc0RjtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTh2dztcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAydncgMnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxubWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDE1dnc7XG59XG5tYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IG9sIGxpOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5tYWluIC5iaW8gLmhvYmJpZXMge1xuICBib3JkZXItdG9wOiAjMTMyNzRGIDVweCBzb2xpZDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAydmggM3Z3O1xuICB3aWR0aDogMzMlO1xufVxubWFpbiAuYmlvIC5ob2JiaWVzIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcbn1cbm1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYgLmxpc3QgbGkge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5tYWluIC5iaW8gLmhvYmJpZXMgLmhvYmJ5RGl2IC5saXN0IGxpIHAge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxNXZ3O1xufVxubWFpbiAucXVvdGUge1xuICBtYXJnaW4tbGVmdDogMzB2dztcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxubWFpbiAuZmFtaWx5QWxidW0ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm1haW4gLnNsaWRlcldyYXAge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxubWFpbiAuc2xpZGVyV3JhcCAuaW1nU2xpZGVyIHtcbiAgd2lkdGg6IDEwMDAwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cbm1haW4gLnNsaWRlcldyYXAgLmltZ1NsaWRlciBpbWcge1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIGhlaWdodDogMjV2aDtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5tYWluIC5leHBsYWluIHtcbiAgbWFyZ2luOiA1dmggNXZ3O1xufVxubWFpbiAuZXhwbGFpbiBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm1haW4gLmV4cGxhaW4gcCB7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG5Aa2V5ZnJhbWVzIG9wZW5TaWRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjEpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBjbG9zZVNpZGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCkge1xuICAucHJvamVjdHMgLnByb2plY3RDYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIHtcbiAgICBtYXJnaW4tbGVmdDogNnZ3O1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDN2dztcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyAuYnRucyBidXR0b24ge1xuICAgIHdpZHRoOiAxMnZ3O1xuICAgIGhlaWdodDogNnZoO1xuICB9XG4gIG1haW4gcCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIG1haW4gbGkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBtYWluIGxpIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuc2tpbGxzIC53cmFwIHtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgfVxuICAuc2tpbGxzIC53cmFwIC5jYXJkIGltZyB7XG4gICAgbWF4LXdpZHRoOiA2dnc7XG4gICAgbWF4LWhlaWdodDogMTB2aDtcbiAgICBtaW4td2lkdGg6IDZ2dztcbiAgICBtaW4taGVpZ2h0OiA2dmg7XG4gIH1cbiAgLnNraWxscyAud3JhcCAuY2FyZCBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5za2lsbHMgLndyYXAgLmNhcmQgLmNzcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIH1cbiAgLnNraWxscyAud3JhcCAuY2FyZCAuaHRtbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIC5saW5rcyBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiAydnc7XG4gICAgd2lkdGg6IDMwdnc7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgLmJ0bnMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIC5idG5zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEzdnc7XG4gICAgaGVpZ2h0OiA3dmg7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1yaWdodDogNXZ3O1xuICB9XG4gIG1haW4gLmJpbyB7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgfVxuICBtYWluIC5iaW8gLm15U3RvcnkgLnN1bURpdiBQIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiAuYm9va0Rlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogNDV2dztcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IGxpIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgbWFpbiAuYmlvIC5ob2JiaWVzIC5ob2JieURpdiAubGlzdCBsaSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIG1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYgLmxpc3QgcCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gIG1haW4gLmltZ1NsaWRlciBpbWcge1xuICAgIGhlaWdodDogMTV2aDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIGJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGhlYWRlciBidXR0b24gaDIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuaGVhZGVyIC5wb3J0cmFpdCB7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuICAgIGhlaWdodDogMTYwcHg7XG4gIH1cbiAgLmhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5oZWFkZXIgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB9XG4gIC5za2lsbHMgLndyYXAge1xuICAgIG1hcmdpbi10b3A6IDN2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLnNraWxscyAud3JhcCAuY2FyZCAud2VicGFjayB7XG4gICAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgfVxuICAuc2tpbGxzIC53cmFwIC5jYXJkIC5odG1sIHtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xuICB9XG4gIC5za2lsbHMgLndyYXAgLmNhcmQgLmNzcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLnNraWxscyAud3JhcCAuY2FyZCBpbWcge1xuICAgIG1heC13aWR0aDogNDBweDtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICB9XG4gIC5za2lsbHMgaDIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnByb2plY3RzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3RDYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAubGlua3MgaW1nIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI1dnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmxpbmtzIC5idG5zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0Q2FyZCAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdENhcmQgLmRlc2NyaXB0aW9uIGgyIHtcbiAgICBtYXJnaW4tbGVmdDogMjB2dztcbiAgICBjb2xvcjogI0ZGQkYwMDtcbiAgfVxuICAucHJvamVjdHMgLmRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICAucHJvamVjdHMgLmRlc2NyaXB0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnByb2plY3RzIC5kZXNjcmlwdGlvbiBwIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLnNpZGUgLnNpZGVCYXIge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLnNpZGUgI2FjdGl2ZSB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG4gIC5zaWRlICNkZUFjdGl2ZSB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG4gIGhlYWRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBoZWFkZXIgLmJvc25pYW5XYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgbWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qICNhbmltYXRle1xuICAgICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAjcmV2ZXJzZXtcbiAgICAgICAgYW5pbWF0aW9uOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9ICovXG4gIH1cbiAgbWFpbiAucXVvdGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICB9XG4gIG1haW4gLmJpbyB7XG4gICAgYm9yZGVyLXRvcDogIzEzMjc0RiBzb2xpZCA1cHg7XG4gICAgei1pbmRleDogMDtcbiAgICBtaW4taGVpZ2h0OiA0MjB2aDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIG1haW4gLmJpbyAuYm9va0xpc3Qge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBtYWluIC5iaW8gLmJvb2tMaXN0IC5ib29rRGl2IHtcbiAgICB6LWluZGV4OiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiBsaSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiBsaSAuYm9va0Rlc2NyaXB0aW9uIHtcbiAgICBsZWZ0OiAtMyU7XG4gICAgei1pbmRleDogMDtcbiAgICB3aWR0aDogODB2dztcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBtYWluIC5iaW8gLmhvYmJpZXMge1xuICAgIG1hcmdpbi1ib3R0b206IDUwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogIzEzMjc0RiA1cHggc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIG1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIG1haW4gLmJpbyAuaG9iYmllcyAuaG9iYnlEaXYgLmxpc3QgbGkge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgfVxuICBtYWluIC5iaW8gLmhvYmJpZXMgLmhvYmJ5RGl2IC5saXN0IGxpIHAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIG1haW4gLmJpbyAubXlTdG9yeSB7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMxMzI3NEY7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgd2lkdGg6IDk0JTtcbiAgfVxuICBtYWluIC5iaW8gLm15U3RvcnkgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgbWFpbiAuYmlvIC5teVN0b3J5IC5zdW1EaXYge1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBtYWluIC5iaW8gLm15U3RvcnkgLnN1bURpdiBwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgbWFpbiAuaW1nU2xpZGVyIGltZyB7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICB9XG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDQ1cHgpIHtcbiAgaGVhZGVyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBoZWFkZXIgLmJvc25pYW5XYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgbWFpbiAuYmlvIHtcbiAgICB6LWluZGV4OiBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwdmg7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgbWFpbiAuYmlvIC5ib29rTGlzdCAuYm9va0RpdiAuYm9va0Rlc2NyaXB0aW9uIHtcbiAgICB6LWluZGV4OiBhdXRvO1xuICB9XG4gIG1haW4gLnNsaWRlcldyYXAgLmltZ1NsaWRlciB7XG4gICAgei1pbmRleDogYXV0bztcbiAgfVxuICBtYWluIC5zbGlkZXJXcmFwIC5pbWdTbGlkZXIgaW1nIHtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gIH1cbiAgLnNpZGUge1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gIC5zaWRlIC5zaWRlQmFyIHtcbiAgICB6LWluZGV4OiAyO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFNBQUE7RUFDQSw4Q0FBQTtBQURKOztBQUtBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBRUkscUNBQUE7RUFNQSx5QkFyQkc7QUFhUDtBQUdJO0VBQ0ks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Q0ksU0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUF0SmQ7RUE2Sk07SUFDRyxtQkFBQTtJQUNDLFdBQUE7SUFDQSw2QkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFQTNKVjtFQTRKVTtJQUNJLGNBQUE7SUFDQyxXQUFBO0VBMUpmO0VBNEprQjtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7RUExSnRCO0VBNEptQjtJQUNHLFdBQUE7RUExSnRCO0VBaUtNO0lBQ0UsNkJBQUE7SUFFQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFJRSxVQUFBO0VBbktWO0VBZ0tVO0lBQ0ksWUFBQTtFQTlKZDtFQWtLVTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQWhLZDtFQWlLYztJQUNJLGVBQUE7RUEvSmxCO0VBd0tFO0lBQ0ksWUFBQTtFQXRLTjtFQTRLRjtJQUVJLFNBQUE7SUFDQSxVQUFBO0VBM0tGO0FBQ0Y7QUE2S0E7RUFFSTtJQUNDLFVBQUE7SUFDRyxTQUFBO0lBQ0EsV0FBQTtFQTVLTjtFQTZLTTtJQUNJLGFBQUE7RUEzS1Y7RUE2S007SUFDSSxlQUFBO0VBM0tWO0VBZ0xNO0lBWUksYUFBQTtJQUNDLFVBQUE7SUFDRCxTQUFBO0lBQ0EsbUJBQUE7RUF6TFY7RUE0S2M7SUFDSSxlQUFBO0lBQ0EsWUFBQTtFQTFLbEI7RUE2S2tCO0lBQ0ksYUFBQTtFQTNLdEI7RUFzTEU7SUFDSSxhQUFBO0VBcExOO0VBcUxNO0lBQ0ksWUFBQTtFQW5MVjtFQXdMRjtJQUNJLFdBQUE7RUF0TEY7RUF1TEY7SUFDRyxVQUFBO0VBckxEO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiIFxcbiRiYXNlOiAjMzQzNDM0O1xcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICBcXG59XFxuIFxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzM0MzQzNDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgIFxcbn1cXG5mb290ZXJcXG57XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDE1cHggd2hpdGU7XFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlO1xcbiAgICB9XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlO1xcbn1cXG5oZWFkZXJ7XFxuICAgIFxcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCB3aGl0ZTtcXG4gICBcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICBzdmd7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgIH1cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMjc0RjtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAubmFtZXsgXFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTV2dztcXG4gICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgICAgIH1cXG4gICAgLm5hbWU6aG92ZXJ7XFxuICAgICAgICBjb2xvcjogI0ZGRDcwMDtcXG4gICAgfVxcbn1cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICBcXG4gICAgLnBvcnRyYWl0e1xcbiAgICBcXG4gICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICB3aWR0aDphdXRvO1xcbiAgICAgICAgaGVpZ2h0OiAzMjFweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG4gICAgLndob0FtSXtcXG4gICAgICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgXFxuICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuLnNraWxsc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICBcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTVweCBibGFjaztcXG4gICAgaDJ7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNDMlO1xcbiAgICB9XFxuXFxuICAgIC53cmFwe1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDN2dztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgICAgICAgIFxcbiAgICBcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIC5jYXJke1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBpbWd7XFxuICAgICAgICAgXFxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogM3Z3O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDZ2aDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDN2dztcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDZ2aDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5odG1se1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmNzc3tcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTNweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5qYXZhe1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XFxuICAgICAgICB9XFxuICAgICAgICAjdml0ZXtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICAgIH1cXG4gICAgICAgICNyZWFjdHtcXG4gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC50YWlsd2luZHtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7ICBcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICB9XFxufVxcbi5wcm9qZWN0c3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgLnByb2plY3RDYXJke1xcbiAgICAgICBcXG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgXFxuICAgICAgICAubGlua3N7XFxuICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMjB2dztcXG4gICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5idG5ze1xcbiAgICAgICAgICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDF2aDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkJGMDA7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICNGRkJGMDAgMXB4IHNvbGlkO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDl2dztcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo1dmg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVye1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2U7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmRlc2NyaXB0aW9ue1xcbiAgICAgICAgaDJ7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1dnc7XFxuICAgICAgICB9XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgICBcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1dnc7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIH1cXG59XFxuIFxcbiAgICAuZm9ybURpdntcXG4gICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDE1cHggd2hpdGU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyNzRGO1xcbiAgICAgICAgXFxuICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgIC5jb250YWN0e1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwdnc7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBoM3tcXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcXG4gICAgICAgIH1cXG4gICAgICAgIHB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgXFxuICAgICAgICB3aWR0aDozNXZ3IDtcXG4gICAgICAgIFxcbiAgICAgICB9XFxuICAgICAgICBmb3Jte1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgIGxhYmVse1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgIH1cXG4gICAgICAgICAgICB3aWR0aDogMjV2dztcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICAgICAgICAgIGlucHV0e1xcbiAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB0ZXh0YXJlYXtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwdnc7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5zdWJtaXR7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0dmg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0ZGQkYwMDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnN1Ym1pdDpob3ZlcntcXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xcbiAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuLnNpZGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIFxcbiAgXFxuICAgXFxuLnNpZGVCYXJ7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcXHQjMzY0NTRGO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgZGlzcGxheTogbm9uZTtcXG4gICB6LWluZGV4OiBhdXRvO1xcbiAgIC5yZW1vdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IFxcdCMzNjQ1NEY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgXFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXFx0IzM2NDU0RjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbiAgICBidXR0b246aG92ZXJ7XFxuICAgICAgICBjb2xvcjogICNGRkJGMDA7XFxuICAgIH1cXG59XFxuIFxcbiAgXFxufVxcbiNhY3RpdmV7XFxuICAgIGFuaW1hdGlvbjogb3BlblNpZGUgMXM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICB6LWluZGV4OiAyO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XFxuICBcXG4gICAgXFxufSAgXFxuI2RlQWN0aXZle1xcbiAgICBhbmltYXRpb246IGNsb3NlU2lkZSAxcztcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xcbn1cXG59XFxuXFxubWFpbntcXG4gbWluLWhlaWdodDogMTAwJTtcXG4uYmxvZ3tcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHZoIDEwdnc7XFxuICBcXG4gICAgbGl7XFxuICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIGgye1xcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgIHB7XFxuICAgICAgICAgICAgYntcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGNEJCNDQ7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgIH1cXG4gICBcXG59XFxuXFxuLmJpb3tcXG4gICAgei1pbmRleDogNTtcXG4gICAgaGVpZ2h0OiA3MDBweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICBidXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICB9XFxuICAgYnV0dG9uOmhvdmVye1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgfVxcbiAgICBcXG4gICAgLm15U3Rvcnl7XFxuICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEJCNDQ7XFxuICAgICAgICB9XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCA1cHggIzEzMjc0RjtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgIFxcbiAgICAgICAgXFxuICAgICAgIHBhZGRpbmc6MnZoIDN2dztcXG4gICAgICAgXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICB3aWR0aDogMzMlO1xcbiAgICAgICAgIFxcblxcbiAgICB9XFxuICAgIC5ib29rTGlzdHtcXG4gICAgICAgICBcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDMzJTtcXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjMTMyNzRGO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gICAgICAgICAgIHdpZHRoOiAxMHZ3O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEJCNDQ7XFxuICAgICAgICB9XFxuICAgICAgICAuYm9va0RpdntcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIC5ib29rRGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgIGxlZnQ6IDI1JTtcXG4gICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMxMzI3NEY7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4dnc7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJ2dyAydmg7ICAgICBcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgbGl7XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBvbHtcXG4gICAgICAgICAgICBsaTpob3ZlcntcXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICB9XFxuICAgLmhvYmJpZXN7XFxuICAgIGJvcmRlci10b3A6ICMxMzI3NEYgNXB4IHNvbGlkO1xcbiAgICBcXG4gICAgYnV0dG9ue1xcbiAgICAgICBcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkI0NDtcXG4gICAgfVxcbiAgICAgXFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzoydmggM3Z3O1xcbiAgICB3aWR0aDogMzMlO1xcbiAgICAgXFxuICAgIC5ob2JieURpdntcXG4gICAgICAgICBcXG4gICAgLmxpc3R7XFxuICAgICAgICBsaXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgd2lkdGg6IDE1dnc7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgfVxcbn1cXG4gICB9XFxufVxcbi5xdW90ZXtcXG4gIG1hcmdpbi1sZWZ0OiAzMHZ3O1xcbiAgbWFyZ2luLXRvcDogMnZoO1xcbn1cXG4uZmFtaWx5QWxidW17XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zbGlkZXJXcmFwe1xcbiAgIG92ZXJmbG93OiBoaWRkZW47XFxuLmltZ1NsaWRlcntcXG4gICAgd2lkdGg6IDEwMDAwMHZ3O1xcbiAgICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzI3NEY7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICBpbWd7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgICAgICAgaGVpZ2h0OiAyNXZoO1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICB9XFxufVxcbn1cXG4uZXhwbGFpbntcXG4gICBtYXJnaW46IDV2aCA1dnc7XFxuICAgIGgye1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIHB7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgfVxcbn1cXG59XFxuXFxuQGtleWZyYW1lcyBvcGVuU2lkZSB7XFxuICAgIGZyb217XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIH1cXG4gICAgIDcwJXtcXG4gICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4xKTtcXG4gICAgIH1cXG4gICAgIHRve1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgICB9XFxufVxcbkBrZXlmcmFtZXMgY2xvc2VTaWRle1xcbiAgICBmcm9te1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICB0b3tcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTc1MHB4KXtcXG4gICAgLnByb2plY3Rze1xcbiAgICAgICAgLnByb2plY3RDYXJke1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgLmxpbmtze1xcbiAgICAgICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogM3Z3O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2dnc7XFxuICAgICAgICAgICAgICAgIC5idG5ze1xcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMnZ3O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNnZoO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIG1haW57XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICAgIH1cXG4gICAgICAgIGxpe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICBwe1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG4gQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCl7XFxuICAgIC5za2lsbHN7XFxuICAgICAgICAud3JhcHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogODBweDtcXG4gICAgICAgICAgICAuY2FyZHtcXG4gICAgICAgICAgICAgIFxcbiAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDZ2dztcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMHZoO1xcbiAgICAgICAgICAgICBtaW4td2lkdGg6IDZ2dztcXG4gICAgICAgICAgICAgbWluLWhlaWdodDogNnZoO1xcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgfVxcbiAgICAgICAgIC5jc3N7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XFxuICAgICAgICAgfVxcbiAgICAgICAgIC5odG1se1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xcbiAgICAgICAgIH1cXG4gICAgfVxcbn1cXG59XFxuLnByb2plY3Rze1xcbiAgICAucHJvamVjdENhcmR7XFxuICAgICAgICBcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAubGlua3N7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAydnc7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLmJ0bnN7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTN2dztcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3dmg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgIFxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1dnc7XFxuICAgIH1cXG59XFxufVxcbm1haW57IFxcbiAgICAgXFxuLmJpb3tcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgLm15U3Rvcnl7XFxuICAgICAgICAuc3VtRGl2e1xcbiAgICAgICAgICAgIFB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5ib29rTGlzdHtcXG4gICAgICAgIC5ib29rRGl2e1xcbiAgICAgICAgICAgIC5ib29rRGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NXZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICBcXG4gICAgfVxcbiAgICAuaG9iYmllc3tcXG5cXG4gICAuaG9iYnlEaXZ7XFxuICAgIC5saXN0e1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBsaXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgIH1cXG59XFxufVxcbi5pbWdTbGlkZXJ7XFxuICAgIGltZ3tcXG4gICAgICAgIGhlaWdodDogMTV2aDtcXG4gICAgfVxcbn1cXG59XFxuIH1cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAgIFxcbiAgICBib2R5e1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgXFxuICAgIH1cXG4gICAgaGVhZGVye1xcbiAgICAgICAgIFxcbiAgICAgICAgIFxcbiAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgaDJ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIH1cXG4gICAgLmhlYWRlcntcXG4gICAgICAgIFxcbiAgICAgICAgIFxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLnBvcnRyYWl0e1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgaDJ7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5za2lsbHN7XFxuICAgICAgXFxuIFxcbiAgICAgIFxcbiAgICAud3JhcHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDN2aDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICBcXG4gICAgICAgIC5jYXJke1xcbiAgICAgICAgICAud2VicGFja3tcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnZ3O1xcbiAgICAgICAgICB9XFxuICAgICAgICAgICAgLmh0bWx7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAuY3Nze1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuICAgICAgICBoMntcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5wcm9qZWN0c3tcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgXFxuICAgICAgICAucHJvamVjdENhcmR7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAubGlua3N7XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1dnc7XFxuICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuYnRuc3tcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDB2dztcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1dnc7XFxuICAgICAgICAgICAgICAgIGgye1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwdnc7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogICNGRkJGMDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgICAgcGFkZGluZzogMjVweDsgICAgIFxcbiAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICBcXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICAgICAgICAgICAgICBoMntcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBwe1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgIFxcbiAgICB9XFxuICAgIC5zaWRle1xcbiAgICAgICAgLnNpZGVCYXJ7XFxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIH1cXG4gICAgICAgICNhY3RpdmV7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgI2RlQWN0aXZle1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcblxcbi8vQUJPVVQgTUUgQ1NTXFxuaGVhZGVye1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICAgIFxcbiAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgLmJvc25pYW5XYXJ7XFxuICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICB9XFxuICAgICAgIGgye1xcbiAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICB9XFxuICAgfVxcbm1haW57XFxuICAgIFxcbiAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgXFxuICAgIC5xdW90ZXtcXG4gICAgICAgbWFyZ2luLWxlZnQ6IDEwdnc7XFxuICAgICAgICBcXG4gICAgfVxcbi8qICNhbmltYXRle1xcbiAgICBhbmltYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jcmV2ZXJzZXtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59ICovXFxuLmJpb3tcXG4gICAgYm9yZGVyLXRvcDojMTMyNzRGIHNvbGlkIDVweDtcXG4gICAgei1pbmRleDogMDtcXG4gICAgbWluLWhlaWdodDogNDIwdmg7XFxuICAgICBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIC5ib29rTGlzdHtcXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgfVxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgXFxuICAgICAgICAuYm9va0RpdntcXG4gICAgICAgXFxuICAgICAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIGxpe1xcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAuYm9va0Rlc2NyaXB0aW9ue1xcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMyU7XFxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0Y0QkI0NDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICBcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAgICAgLmhvYmJpZXN7XFxuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHZoO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJvcmRlci10b3A6ICMxMzI3NEYgNXB4IHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgIC5ob2JieURpdntcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgLmxpc3R7XFxuICAgICAgICAgICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgcHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLm15U3Rvcnl7XFxuICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMTMyNzRGO1xcbiAgICAgICAgIFxcbiAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB3aWR0aDogOTQlO1xcbiAgICAgICAgICAgXFxuICAgICAgICAgICAgLnN1bURpdntcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwdnc7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIHB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICBcXG4gICAgXFxufVxcbi5pbWdTbGlkZXJ7XFxuICAgIGltZ3tcXG4gICAgICAgIGhlaWdodDogMjV2aDtcXG4gICAgICAgICBcXG4gICAgfVxcbn1cXG59XFxuXFxuKntcXG4gICBcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6NDQ1cHgpe1xcbiAgICAgXFxuICAgIGhlYWRlcntcXG4gICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIC5ib3NuaWFuV2Fye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICBoMntcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgbWFpbntcXG4gICAgICAgXFxuICAgICAgICAuYmlve1xcbiAgICAgICAgICAgIC5ib29rTGlzdHtcXG4gICAgICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5ib29rRGl2e1xcbiAgICAgICAgICAgICAgICAgICAgLmJvb2tEZXNjcmlwdGlvbntcXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHotaW5kZXg6IGF1dG87XFxuICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwdmg7XFxuICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgIC5zbGlkZXJXcmFwe1xcbiAgICAuaW1nU2xpZGVye1xcbiAgICAgICAgei1pbmRleDogYXV0bztcXG4gICAgICAgIGltZ3tcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwdmg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxufVxcbi5zaWRle1xcbiAgICB6LWluZGV4OiAxMDtcXG4uc2lkZUJhcntcXG4gICB6LWluZGV4OiAyO1xcbn1cXG59XFxuICAgIH1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBidWlsZEJvb2tzIGZyb20gXCIuL2Jvb2tzXCJcbmltcG9ydCBidWlsZEhvYmJpZXMgZnJvbSBcIi4vaG9iYmllc1wiXG5pbXBvcnQgYnVpbGRJbWFnZVNsaWRlciBmcm9tIFwiLi9pbWdcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRBYm91dE1lKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGNvbnN0IGJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gYFRoZXJlIGlzIHNvbWUgZ29vZCBpbiB0aGlzIHdvcmxkPGJyPiBhbmQgaXQncyB3b3J0aCBmaWdodGluZyBmb3IuICAgIC1KLlIuUiBUb2xraWVuIGBcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdxdW90ZScpXG4gICAgYmlvLmNsYXNzTGlzdC5hZGQoJ2JpbycpXG4gICAgY29uc3QgbXlTdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbXlTdG9yeS5jbGFzc0xpc3QuYWRkKCdteVN0b3J5JylcbiAgICBjb25zdCBteUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgbXlIZWFkaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgIGlmKHN1bW1Db250YWluZXIuaWQgPT0gJ2FuaW1hdGUnKXtcbiAgICAgICAgICAgICAgICAgICBzdW1tQ29udGFpbmVyLmlkID0gJ3JldmVyc2UnXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN1bW1Db250YWluZXIuaWQgPSAnYW5pbWF0ZSdcbiAgICAgICAgICAgIH0pXG4gICAgbXlIZWFkaW5nLmlubmVySFRNTCA9ICdNeSBTdG9yeSdcbiAgICAgICAgY29uc3QgYm9va0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IHN1bW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzdW1tQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1bURpdicpXG4gICAgICAgIGNvbnN0IGhvYmJ5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgaG9iYnlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9iYnlEaXYnKVxuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzdW1tYXJ5LmlubmVySFRNTCA9ICdNeSBmYW1pbHkgaXMgb3JpZ2luYWxseSBmcm9tIEJvc25pYSBhbmQgdGhlIG9ubHkgZmFtaWx5IHRoYXQgbGl2ZXMgaW4gdGhlIHN0YXRlcyBpcyBteSBtb3RoZXIgYW5kIHNpc3Rlci4gV2hlbiBJIHdhcyBpbiBoaWdoc2Nob29sIEkgd2FzIHVuc3VyZSB3aGF0IEkgd2FudGVkIHRvIGRvIHdpdGggbXkgbGlmZSB1bnRpbCBzZW5pb3IgeWVhciB3aGVuIEkgZ290IGludG8gQVBDUyBhbmQgbGVhcm5lZCBKYXZhLiBJIHF1aWNrbHkgbGVhcm5lZCBpdCB3YXMgd2hhdCBJIHdhbnRlZCB0byBkbyBmb3IgbWFqb3JpdHkgb2YgbXkgbGlmZS4gSSBhbHdheXMgbG92ZWQgYnVpbGRpbmcgc2luY2UgSSB3YXMgYSBraWQsIGFuZCBjb2Rpbmcga2VlcHMgbXkgaW5uZXIgY2hpbGQgYWxpdmUuIEkgdHJ5IHRvIGtlZXAgbXlzZWxmIGFzIGJ1c3kgYXMgcG9zc2libGUgZGF5IGluIGFuZCBkYXkgb3V0LCBhbmQgdHJ5IHRvIHRoaW5rIG9mIHByb2dyYW1taW5nIGFzIG15IG51bWJlciBvbmUgcHJpb3JpdHkuIEhvcGluZyB0byBldmVudHVhbGx5IHN0YXJ0IG15IG93biBjb21wYW55IHRoYXQgY291bGQgYnJhbmNoIG91dCBpbnRvIHZhcmlldHkgb2Ygd29yay4gSSBhbSBidWlsZGluZyBncmVhdCBjb25uZWN0aW9ucyB3aXRoIHBlb3BsZSBhbmQgdHJ5aW5nIHRvIGhlbHAgYXMgbWFueSBhcyBJIGNhbi4gSSBoYXZlIGEgYmVhdXRpZnVsIGdpcmxmcmllbmQgdGhhdCBJIGxvdmUgd2l0aCBteSB3aG9sZSBoZWFydCBhbmQgd2Ugc2hhcmUgYSB0b3duaG9tZSB3aXRoIHR3byBkb2dzIG5hbWVkIERlbGlsYWggYW5kIE5lbW8gYW5kIG15IGJyb3RoZXIgRGVhbi4nXG4gICAgY29uc3QgYm9va0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJvb2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2Jvb2tMaXN0JylcbiAgICBjb25zdCBib29rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJvb2tUaXRsZS5pbm5lckhUTUwgPSAnTXkgQm9va3MnXG4gICAgICAgICAgICAgICAgYm9va1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZihib29rQ29udGFpbmVyLmlkID09ICdhbmltYXRlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBib29rQ29udGFpbmVyLmlkID0gJ3JldmVyc2UnXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYm9va0NvbnRhaW5lci5pZCA9ICdhbmltYXRlJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgYm9va0xpc3QuYXBwZW5kQ2hpbGQoYm9va1RpdGxlKVxuICAgIGNvbnN0IG9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKVxuICAgIGJvb2tDb250YWluZXIuYXBwZW5kQ2hpbGQob2wpXG4gICAgYm9va0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib29rRGl2JylcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVhZC5pbm5lckhUTUwgPSAnQ3VycmVudGx5IFJlYWRpbmcnXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCb29rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmlibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICAgICAgICAgIGJpYmxlLmlubmVySFRNTCA9IFwiVGhlIEJpYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJvb2tzLmFwcGVuZENoaWxkKGJpYmxlKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWVwV29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgZGVlcFdvcmsuaW5uZXJIVE1MID0gJ0RlZXAgV29yaydcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJvb2tzLmFwcGVuZENoaWxkKGRlZXBXb3JrKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBMT1RSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgICAgICAgICBMT1RSLmlubmVySFRNTCA9ICdMb3JkIG9mIFRoZSBSaW5nJ1xuICAgICAgICAgICAgICAgICAgICBib29rQ29udGFpbmVyLmFwcGVuZENoaWxkKExPVFIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGl0YXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgICAgICAgICBtZWRpdGF0aW9ucy5pbm5lckhUTUwgPSAnTWVkaXRhdGlvbnMgb2YgTWFyY3VzIEF1cmVsaXVzJ1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Qm9va3MuYXBwZW5kQ2hpbGQoTE9UUilcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJvb2tzLmFwcGVuZENoaWxkKG1lZGl0YXRpb25zKVxuICAgICAgICAgICAgICAgICAgICBib29rQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRSZWFkKVxuICAgICAgICAgICAgICAgICAgICBib29rQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRCb29rcylcbiAgICAgICAgICAgICAgICAgICAgYm9va0xpc3QuYXBwZW5kQ2hpbGQoYm9va0NvbnRhaW5lcilcbiAgICAgICAgICAgIGNvbnN0IGhvYmJ5SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBob2JieUhlYWRpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgaWYoaG9iYnlDb250YWluZXIuaWQgPT0gJ2FuaW1hdGUnKXtcbiAgICAgICAgICAgICAgICAgICAgaG9iYnlDb250YWluZXIuaWQgPSAncmV2ZXJzZSdcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaG9iYnlDb250YWluZXIuaWQgPSAnYW5pbWF0ZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBob2JieUhlYWRpbmcuaW5uZXJIVE1MID0gJ015IEhvYmJpZXMnXG4gICAgICAgICAgICBjb25zdCBob2JieUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgaG9iYnlMaXN0LmNsYXNzTGlzdC5hZGQoJ2hvYmJpZXMnKVxuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpXG4gICAgICAgICAgICBob2JieUxpc3QuYXBwZW5kQ2hpbGQoaG9iYnlIZWFkaW5nKVxuICAgICAgICAgICAgaG9iYnlDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdClcbiAgICAgICAgICAgIGhvYmJ5TGlzdC5hcHBlbmRDaGlsZChob2JieUNvbnRhaW5lcilcbiAgICBteVN0b3J5LmFwcGVuZENoaWxkKG15SGVhZGluZylcbiAgICBzdW1tQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1bW1hcnkpXG4gICAgbXlTdG9yeS5hcHBlbmRDaGlsZChzdW1tQ29udGFpbmVyKVxuICAgIGJpby5hcHBlbmRDaGlsZChib29rTGlzdClcbiAgICBiaW8uYXBwZW5kQ2hpbGQobXlTdG9yeSlcbiAgICBiaW8uYXBwZW5kQ2hpbGQoaG9iYnlMaXN0KVxuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChiaW8pXG4gICAgYnVpbGRCb29rcygnQXRvbWljIEhhYml0cycsICdXcml0dGVuIGJ5IEphbWVzIENsZWFyPGJyPjxicj4gd2FzIGEgYmVuZWZpY2FsIGJvb2sgZm9yIG1lIHRoYXQgdGF1Z2h0IG1lIGhvdyB0byBidWlsZCBwb3NpdGl2ZSBoYWJpdHMgaW5jcmVtZW50YWxseSBlYWNoIGRheS4gV2FzIGEgYmlnIGhlbHAgZm9yIG1lIHRvIGtlZXAgY29kaW5nJywnaHR0cHM6Ly9qYW1lc2NsZWFyLmNvbS9hdG9taWMtaGFiaXRzJyApXG4gICAgYnVpbGRCb29rcygnVGhlIEF1dG9iaW9ncmFwaHkgb2YgTWFsY29tIFgnLCdXcml0dGVuIGJ5IEFsZXggSGFsZXk8YnI+PGJyPlRoaXMgYm9vayB0YXVnaHQgbWUgYWxvdCBhYm91dCB0aGUgVW5pdGVkIHN0YXRlcyBkdXJpbmcgdGhlIGVhcmx5IHBlcmlvZHMgYmVmb3JlIHRoZSBjaXZpbCByaWdodHMgbW92ZW1lbnQgYW5kIGFsc28gYWJvdXQgdGhlIG1pc3VuZGVyc3Rvb2QgTWFsY29tIFguIExlYXJuZWQgYWJvdXQgdGhlIGNyZWF0aW9uIG9mIHRoZSBOYXRpb24gb2YgSXNsYW0sIGFuZCBob3cgcHJvZm91bmQgTWFsY29tcyBsaWZlIHdhcy4nLCdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UaGVfQXV0b2Jpb2dyYXBoeV9vZl9NYWxjb2xtX1gnKVxuICAgIGJ1aWxkQm9va3MoJ1RoZSA1IEFNIENsdWInLCdXcml0dGVuIGJ5IFJvYmluIFNoYXJtYTxicj48YnI+QSBncmVhdCByZWFkIGNyZWF0aW5nIGEgbmFycml0aXZlIHRoYXQgaXMgZnVsbCBvZiBpbmZvcm1hdGlvbiBhYm91dCBncmVhdHMsIHNob3dlZCB0aGUgYmVuZWZpdHMgb2Ygd2FraW5nIHVwIGVhcmx5IGFuZCBzdGFydGluZyB5b3VyIGRheSBiZWZvcmUgdGhlIHN1biByaXNlcy4gQ3VycmVudGx5IHdyaXRpbmcgdGhpcyBhdCA0IGFtIHNvIEkgdGhpbmsgaXQgZGlkIGEgZ29vZCBqb2IgOiknLCdodHRwczovL3d3dy5ibGlua2lzdC5jb20vZW4vYm9va3MvdGhlLTUtYW0tY2x1Yi1lbicpXG4gICAgYnVpbGRCb29rcygnVGhlIEhvYmJpdCcsJ1dyaXR0ZW4gYnkgSi5SLlIgVG9sa2llbjxicj48YnI+IEEgY2xhc3NpYyBzdG9yeSB0aGF0IHdhcyBub3RoaW5nIGxpa2UgdGhlIG1vdmllJywnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGhlX0hvYmJpdCcpXG4gICAgYnVpbGRCb29rcygnRGVlcCBXb3JrJyxgV3JpdHRlbiBieSBDYWwgTmV3cG9ydDxicj48YnI+IEEgYm9vayBjb3ZlcmluZyB0aGUgdG9waWMgb2YgXCJEZWVwIFdvcmtcIi4gVGhpcyB3YXMgYSBnb29kIHJlYWQgaW5mb3JtaW5nIG1lIG9mIHRoZSBiZW5lZml0IG9mIGNyZWF0aW5nIGEgZGlzdHJhY3Rpb24gZnJlZSBlbnZpcm9ubWVudCB0aGF0IGFsbG93cyB5b3UgdG8gd29yayB3aXRoIGRlZXBuZXNzLiBUaGUgdXNlIG9mIHRhY3RpY3Mgc3VjaCBhcyAnUG9tb2Rvcm8nIGFyZSB2ZXJ5IGhlbHBmdWwgZm9yIHBhY2luZyB5b3Vyc2VsZiBhbmQgYWxsb3dpbmcgcGVyaW9kcyBmb3IgeW91IHRvIHJlc3RgLCdodHRwczovL3d3dy5zYW11ZWx0aG9tYXNkYXZpZXMuY29tL2Jvb2stc3VtbWFyaWVzL2J1c2luZXNzL2RlZXAtd29yay8nKVxuICAgIGJ1aWxkQm9va3MoJ0NhbnQgSHVydCBNZScsJ0J5IERhdmlkIEdvZ2dpbnM8YnI+PGJyPiBUaGlzIGJvb2sgY292ZXJzIGFsb3Qgb2YgdGhlIGxpZmUgb2YgdGhlIHJldGlyZWQgTmF2eSBTZWFsIERhdmlkIEdvZ2dpbnMuIEkgZ290IG91dCBvZiB0aGlzIGJvb2sgdGhlIGlkZWEgb2YgYSB0cnVkZ2UgdGhyb3VnaCBtZW50YWxpdHkgd2hlcmUgSSBsZWFybmVkIHRvIGtlZXAgcHVzaGluZyB0aHJvdWdoIGhhcmRzaGlwIGFuZCBicmVhayB0aHJvdWdoIGJhcnJpZXJzIHNldCBieSB5b3Vyc2VsZicsJ2h0dHBzOi8vZGF2aWRnb2dnaW5zLmNvbS9ib29rLycpXG4gICAgYnVpbGRCb29rcygnRG9uIFF1aXhvdGUnLCAnV3JpdHRlbiBieSBNaWd1ZWwgZGUgQ2VydmFudGVzPGJyPjxicj4gVGhpcyBvbmUgd2FzIHRoZSBib29rIG9mIHRoZSB5ZWFyIGZvciBtZS4gSSBsb3ZlZCB0aGUgc3RvcnkgYW5kIHRoZSBpbWFnZXJ5IHByZXNlbnRlZCBmcm9tIHRoZSBhdXRob3Igd2FzIGFtYXppbmcuIEhvbmVzdGx5IHRoZSBmdW5uaWVzdCBib29rIEkgaGF2ZSByZWFkIGFuZCB3YXMgc2FkIHRvIGZpbmlzaCBpdCBhbmQgcHV0IGl0IGRvd24uIFdpbGwgZGVmaW5ldGx5IGJlIHJlYWRpbmcgYWdhaW4nLCdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Eb25fUXVpeG90ZScpXG4gICAgYnVpbGRCb29rcygnV3V0aGVyaW5nIEhlaWdodHMnLCdXcml0dGVuIGJ5IEVtaWx5IEJyb250w6s8YnI+PGJyPiBBIGNsYXNzaWMgcG9ydHJheWluZyBsb3ZlLCBkZWNlcHRpb24sIGFuZCBhIHZhcmlldHkgb2YgZW1vdGlvbi4gSGVhdGhjbGlmZiB3YXMgaG9uZXN0bHkgdGhlIGJlc3QgYW50YWdvbmlzdCBJIGhhdmUgc2VlbiBpbiBhIHdoaWxlLiBHb29kIHJlYWQnLCdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XdXRoZXJpbmdfSGVpZ2h0cycpXG4gICAgYnVpbGRCb29rcygnQW5pbWFsIEZhcm0nLCAnV3JpdHRlbiBieSBHZW9yZ2UgT3J3ZWxsPGJyPjxicj4gQSBnb29kIHJlcmVhZCBhZnRlciBhIGJpdCBvZiB0aW1lLCB3YXMgaW50ZXJlc3Rpbmcgc2VlaW5nIHRoZSBjb21wYXJpc29uIG9mIGNlcnRhaW4gcG9saXRpY2FsIHN5c3RlbXMgdG8gdGhlIHNldHRpbmcgb2YgdGhlIGJvb2snLCdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BbmltYWxfRmFybScpIFxuICAgICAgICBidWlsZEhvYmJpZXMoJ0dhcmRlbmluZycsJ0kgYW0gYSBhdmlkIGdhcmRuZXIgYW5kIEkgdHJ5IHRvIGdyb3cgYSB2YXJpZXR5IG9mIHBsYW50cywgY3VycmVudGx5IEkgYW0gZXhjaXRlZCB0byBoYXJ2ZXN0IG15IGZpcnN0IHRvbWF0byBhbmQgZGlsbCB3aGVuIHRoZXkgYXJlIGJvdGggcmVhZHknKVxuICAgICAgICBidWlsZEhvYmJpZXMoJ0d1aXRhcicsYEkgaGF2ZSBiZWVuIHByYWN0aWNpbmcgZ3VpdGFyIGEgZGVjZW50IGFtb3VudCBsYXRlbHksIGN1cnJlbnQgbGVhcm5pbmcgPGEgaHJlZiA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXRIMnc2T3h4MGtRJz5EdXN0IGluIHRoZSBXaW5kPC9hPiBhbmQganVzdCBzdGFydGVkIHRvIGxlYXJuIGEgPGEgaHJlZiA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVoyYjE1cndHQkpjJz5sdWxsYWJ5PC9hPmApXG4gICAgICAgIGJ1aWxkSG9iYmllcygnUGlhbm8nLGBJIGhhdmUgYmVlbiBwbGF5aW5nIHBpYW5vIHNpbmNlIHNlbmlvciB5ZWFyIG9mIGNvbGxlZ2UgYW5kIGl0cyByZWxheGluZyB0byBwbGF5LiBJIGFtIHJlYWxseSBpbnRvIGFsbCBtdXNpYyBidXQgZm9yIHBpYW5vIEkgdXN1YWxseSBqdXN0IHBsYXkgY2xhc3NpY2FsLiBUaGUgb25seSBzb25nIEkga25vdyBmdWxseSBpcyA8YSBocmVmPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTJXZmFvdFNLM21JJz5HeW1ub3BlZGllIG5vLiAxPC9hPmApXG4gICAgICAgIGJ1aWxkSG9iYmllcygnUmVhZGluZycsJ0kgaGF2ZSBiZWNvbWUgYSBiaWcgcmVhZGVyIHRoaXMgeWVhciBhcyBteSBib29rIGxpc3Qgd291bGQgc2hvdyBsb2wuIEkgYXBwcmVjaWF0ZSBsZWFybmluZyBhbG90IGFuZCB5b3UgY2FuIGdldCBzbyBtdWNoIG91dCBvZiByZWFkaW5nJylcbiAgICAgIGNvbnN0IGZhbWlseUFsYnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgICAgZmFtaWx5QWxidW0uaW5uZXJIVE1MID0gJ0ZhbWlseSBBbGJ1bSdcbiAgICAgIGZhbWlseUFsYnVtLmNsYXNzTGlzdC5hZGQoJ2ZhbWlseUFsYnVtJylcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZmFtaWx5QWxidW0pXG4gICAgICAgICBidWlsZEltYWdlU2xpZGVyKClcbiAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICBjb25zdCBleHBsYWluSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgIGV4cGxhaW5IZWFkLmlubmVySFRNTCA9ICdUaGUgcGVvcGxlIGluIG15IEZhbWlseSdcbiAgICAgICAgIGNvbnN0IGV4cGxhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgIGV4cGxhaW4uaW5uZXJIVE1MID0gJ1NvIG15IGZhbWlseSBpcyBmb3JldmVyIGdyb3dpbmcuIEkgbG92ZSBtYWtpbmcgbmV3IGNvbm5lY3Rpb25zIGFuZCBrZWVwaW5nIHRpZ2h0ZXIgYm9uZHMsIEkgaGF2ZSBhbHdheXMgaGFkIGEgc21hbGwgaW1tZWRpYXRlIGZhbWlseSwgYnV0IHRoZSBwZW9wbGUgSSB0cnVseSBsb3ZlIHdpbGwgYWx3YXlzIHN0YXkgd2l0aCBtZSBhbmQgSSB3aWxsIGFsd2F5cyBoYXZlIHRoZWlyIGJhY2suIFNvbWUgb2YgdGhlIHBlb3BsZSBpbiBoZXJlIGFyZSBmYW1pbHkgYnkgYmxvb2QgbGlrZSBteSBzaXN0ZXIgQW5pdGEgYW5kIG15IG1vbSBTcG9tZW5rYS4gQnV0IHRoZSBjbG9zZXN0IHBlcnNvbiBpbiBteSBsaWZlIGlzIG15IGJyb3RoZXIgZGVhbiwgYW5kIHdlIGhhdmUgYmVlbiBldmVyeXdoZXJlIGFuZCBkb25lIGV2ZXJ5dGhpbmcgdG9nZXRoZXIuIEhlIGlzIHJlYWxseSBteSByb2NrLiBQZW9wbGUgbGlrZSBteSBsaXR0bGUgYnJvdGhlciBEYW5pZWwgb3IgbXkgcGhpbG9zb3BoeSB0ZWFjaGVyIFRpbW90aHkgYXJlIHR3byBwZW9wbGUgd2hvIEkgbG92ZSBkZWFybHkgYW5kIEkga25vdyB0aGV5IHdpbGwgZ28gZmFyLiBNeSBicm90aGVyIFRoaWVuIGlzIHNvbWVvbmUgd2hvIGFsd2F5cyBoYXMgbXkgYmFjayBhbmQgSSBrbm93IGhlIHdpbGwgYWx3YXlzIGJlIGJ5IG15IHNpZGUuIFRoZXJlIGlzIHNvIG1hbnkgbWVtYmVycyBvZiBteSBmYW1pbHkgYW5kIEkgaG9wZSBpdCBrZWVwcyBncm93aW5nLiBNb3JlIHBpY3R1cmVzIHRvIGNvbWUhJ1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZXhwbGFpbkhlYWQpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChleHBsYWluKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZXhwbGFpbicpXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2KVxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEJsb2coKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgY29uc3QgYmxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJylcbiAgICBibG9nLmNsYXNzTGlzdC5hZGQoJ2Jsb2cnKVxuICAgIGJsb2cuYXBwZW5kQ2hpbGQocG9zdCgnRGVjZW1iZXIgMTd0aCwgMjAyMycsIFwiVG9kYXkncyBXb3JrXCIsICdUb2RheSBJIGFtIGxlYXJuaW5nIGFsb3QgYW5kIGNyZWF0aW5nIHRoZSBibG9nIHBvcnRpb24gb2YgbXkgc2l0ZS4gSSBhbSBleGNpdGVkIHRvIHN0YXJ0IHdyaXRpbmcgaW4gaGVyZSBhbmQgcHV0dGluZyBteSB0aG91Z2h0cyBmb3IgYW55b25lIHRvIHNlZS4gVGhlIHBhc3QgZmV3IGRheXMgSSBoYXZlIGJlZW4gbGVhcm5pbmcgYWJvdXQgSmVzdCBhbmQgdGhlIHBvc3NpYmlsaXRpZXMgdGhhdCBJIGNhbiB1c2UgdGhlIGZyYW1ld29yayB3aXRoLiBJIHdhdGNoZWQgYSBiaXQgb2YgXCJGdW4gRnVuIEZ1bmN0aW9uXCIgYW5kIGhlIGRpZCBhIGdyZWF0IGpvYiBleHBsYWluaW5nIHRlc3QgcnVubmVycyBhbmQgdGhlIGJhc2ljIHN5bnRheCBvZiBKZXN0IHRocm91Z2ggaWYgc3RhdGVtZW50cy4gSXQgd2FzIGEgbGl0dGxlIGRhdW50aW5nIGF0IGZpcnN0IGJ1dCBJIGZlZWwgYWJsZS4gSSBzdGFydGVkIGEgcmVwbyBmb3IgcHJhY3RpY2luZyB0aGUgZnJhbWV3b3JrIGFuZCBJIGFtIGRpdmluZyBtb3JlIGluIGRlcHRoIGludG8gVHlwZVNjcmlwdCBhcyBJIHdvdWxkIHByZWZlciB0byB1c2UgdGhlIGxhbmd1YWdlIG92ZXIgSmF2YXNjcmlwdCBmb3IgZWFzZSBvZiBzZWVpbmcgZXJyb3JzIGFuZCBrZWVwaW5nIHRyYWNrIG9mIG15IGNvZGUuIEluIHR1cm4gb2YgdXNpbmcgSmVzdCBJIGFtIGV4cGxvcmluZyBCYWJlbCB0aGUgSmF2YXNjcmlwdCBUcmFuc3BpbGVyIEkgaG9wZSBpdCBnZXRzIHNvbWUgZ29vZCB1c2UuIEhvcGluZyB0byBkbyBhbG90IG9mIHRlc3Rpbmcgb24gbXkgYnJlYWsgYW5kIHRvIHByb2R1Y2UgYSBiaXQgb2YgVGhlIGZpZ2h0ZXIgZm91bmRhdGlvbiBob21lIHBhZ2Ugb25jZSBJIGdldCBob21lIGxhdGVyLiBUaGF0cyBhYm91dCBpdCBmb3IgdG9kYXksIGV4Y2l0ZWQgdG8ga2VlcCBsZWFybmluZyBhbmQgYnVpbGRpbmcsIENpYW88YnI+LVBhdHJpY2snKSlcbiAgICBibG9nLmFwcGVuZENoaWxkKHBvc3QoJ0RlY2VtYmVyIDE5dGgsIDIwMjMnLCAnSmVzdCwgVHlwZVNjcmlwdCwgYW5kIEhvbGlkYXlzJywgXCJBbHJpZ2h0IHNvIGFsb3Qgb2YgZG9jdW1lbnRhdGlvbiB0b2RheSwgSSBoYXZlIGdvbmUgb3ZlciBhIGZhaXIgYml0IG9mIFRTJ3MgZG9jdW1lbnRhdGlvbiBhbmQgSSBhbSBsZWFybmluZyBJIHNob3VsZCBvZiBkb25lIHRoaXMgZWFybGllci4gSSBzb3J0IG9mIGJlZW4gZ29pbmcgaW50byB0aGUgdW5rbm93biB3aXRoIFRTIGFuZCBJIGhhZCBlbm91Z2ggd2l0aCBpdCB0b2RheSB3aGVuIEkgY291bGRudCBpbXBvcnQgdGhlIGxvZ28gZm9yIHRoZSBmaWdodGVyIGZvdW5kYXRpb24uIEJyb3dzaW5nIGFueXRoaW5nIEkgY291bGQgZmluZCBvbiB0aGUgd2ViIG1hZGUgbWUgbGVhcm4gSSBoYXZlIHRvIGRvIGEgZGl2ZSBpbnRvIFRTIGFuZCBJIGFtIHdpbGxpbmcgdG8gYmVhdCB0aGUgbGFuZ3VhZ2UgYW5kIGxlYXJuIGV2ZXJ5dGhpbmcgSSBuZWVkLiBUaGUgbW9zdCBkYXVudGluZyB0aGluZyBmb3IgbWUgd2FzIHRoZSB0c2NvbmZpZy5qc29uIGJ1dCBhZnRlciBnb2luZyBvdmVyIGEgZmV3IGZsYWdzIGxpa2Ugbm9JbXBsaWNpdEFueSBJIGhvbmVzdGx5IGRvbnQgdGhpbmsgaXRzIHRvbyBiYWQgYW55bW9yZTxicj48YnI+IHllc3RlcmRheSBJIHdlbnQgb3ZlciBhbG90IG9mIHRoZSBlc3NlbnRpYWxzIG9mIEplc3QgYW5kIHJlYWQgc29tZSBhcnRpY2xlcyBhYm91dCBwdXJlIGZ1bmN0aW9ucywgbW9ja2luZywgYW5kIFVuaXQgVGVzdHMsIGhlcmVzIGEgYnJpZWYgb3ZlcnZpZXc6PGJyPjxiIG9uY2xpY2s9IGB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuZ2Vla3Nmb3JnZWVrcy5vcmcvcHVyZS1mdW5jdGlvbnMtaW4tamF2YXNjcmlwdC8nKWA+UHVyZSBGdW5jdGlvbnM8L2I+PGJyPiBBIGZ1bmN0aW9uIGlzIHB1cmUgaWYgaXQgYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgcmVzdWx0IGlmIHRoZSBzYW1lIGFyZ3VtZW50cyBhcmUgcGFzc2VkLCBpdCBkb2VzbnQgZGVwZW5kIG9uIGFueSB1c2Ugc3RhdGUgb3IgZGF0YSwgaXQgbXVzdCBvbmx5IGRlcGVuZCBvbiB0aGUgaW5wdXQgYXJndW1lbnRzLiBUaGUgZnVuY3Rpb24gbXVzdCBub3QgcHJvZHVjZSBhbnkgb2JzZXJ2YWJsZSBzaWRlIGVmZmVjdHMgc3VjaCBhcyBuZXR3b3JrIHJlcXVlc3RzLCBpbnB1dCBvciBvdXRwdXQgZGV2aWNlcyBvciBkYXRhIG11dGF0aW9uLjxicj48Yj5Nb2NraW5nPC9iPjxicj4gQSBtb2NrIGlzIGEgdGVzdCBkb3VibGUgdGhhdCBzdGFuZHMgaW4gZm9yIHJlYWwgaW1wbGVtZW50YXRpb24gY29kZSBkdXJpbmcgdGhlIHVuaXQgdGVzdGluZyBwcm9jZXNzPGJyPjxiPlVuaXQgVGVzdDwvYj48YnI+QSB1bml0IHRlc3QgdGVzdHMgaW5kaXZpZHVhbCB1bml0cyBpbiBpc29sYXRpb24gZnJvbSB0aGUgcmVzdCBvZiB0aGUgcHJvZ3JhbTxicj4gVGhlcmUgaXMgYWxzbyB0aGUgaWRlYSBvZiB0ZXN0IGNvdmVyYWdlIGFuZCB0aGF0IHJlZmVycyB0byB0aGUgYW1vdW50IG9mIGNvZGUgdGhhdCBpcyBjb3ZlcmVkIGJ5IHRlc3QgY2FzZXMsIGNvZGUgY292ZXJhZ2Ugc2hvdWxkbnQgZXZlciBiZSAxMDAlIGFzIGl0IGRvZXMgbm90IHJlc3VsdCBpbiAxMDAlIGNhc2UgY292ZXJhZ2U8YnI+VGlnaHQgQ291cGxpbmcgaXMgdGhlIHJlYXNvbiB3aHkgbW9ja2luZyBleGlzdHMuIFRpZ2h0IGNvdXBsaW5nIG1ha2VzIGNvZGUgcmlnaWQgYW5kIGJyaXR0bGUsIGFuZCBsZXNzIGNvdXBsaW5nIGlzIHZlcnkgZGVzaXJhYmxlIGZvciB0aGUgc2FrZSBvZiBtYWtpbmcgY29kZSBlYXNpZXIgdG8gZXh0ZW5kIGFuZCBtYWludGFpbiwgYWxzbyBpdCBhbGxvd3MgZm9yIHRoZSBlbGltaW5hdGlvbiBvZiBtb2NraW5nLjxicj4gVGhlIGhvbGlkYXlzIGFyZSBzb21ld2hhdCBzdHJlc3NmdWwgYXMgYWx3YXlzIGJ1dCBJIGFtIGp1c3QgZXhjaXRlZCB0byBzcGVuZCBzb21lIHRpbWUgd2l0aCBteSBmYW1pbHkgYW5kIHRvIGVuam95IHRoZSBjb2xkLjxicj4gVGhhdHMgaWYgZnJvbSBtZSBmb3Iga25vdywgTWVycnkgQ2hyaXN0bWFzIHRvIHdob2V2ZXIgc2VlIHRoaXMgYW5kIEkgaG9wZSAyMDIzIHdhcyBhIGdyZWF0IHllYXIgZm9yIHlvdTxicj4tUGF0cmlja1wiKSlcbiAgICBibG9nLmFwcGVuZENoaWxkKHBvc3QoJ0phbnVhcnkgOHRoLCAyMDIzJywgJ0ZpbmlzaGluZyBCYXR0bGVTaGlwIGFuZCBiZWdpbm5pbmcgb24gUmVhY3QnLCdUb2RheSBJIGZpbmFsbHkgZmluaXNoZWQgbXkgQmF0dGxlU2hpcCBwcm9qZWN0LiBJdCB3YXMgYSBncmVhdCBwcm9qZWN0IGNob2NrIGZ1bGwgb2YgbGVhcm5pbmcgYW5kIGNvZGUgcmV2aWV3LiBGcm9tIHRoZSBwcm9qZWN0IEkgZ290IGEgdGFzdCBvZiBKZXN0IGFuZCB0ZXN0aW5nLCBhbmQgSSBkaWQgYSB3aWRlIHZhcmlldHkgb2YgY29kZSByZXZpZXcgbGVhcm5pbmcgdGhhdCBhbG90IG9mIHRpbWUgaXMgd2FzdGVkIG9uIGluZWZmaWNpZW50IG1ldGhvZHMgb2YgY29kaW5nLiBUaW1lIHRvIHN0YXJ0IGxlYXJuaW5nIFJlYWN0IGFuZCByZW1ha2luZyBhbG90IG9mIG15IHNpdGVzLiBUeXBlc2NyaXB0IHdhcyBncmVhdCBhcyB3ZWxsIGFuZCBJIGdvdHRhIHN0YXJ0IHJlYWRpbmcgbXkgZG9jdW1lbnRhdGlvbi4nKSlcblxuICAgXG4gICBcbiAgICBtYWluLmFwcGVuZENoaWxkKGJsb2cpXG4gICBcbn1cbmZ1bmN0aW9uIHBvc3QoZGF0ZSwgdGl0bGUsIGRldGFpbCwgaW1nKSB7XG4gICAgXG5jb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxubGkuaW5uZXJIVE1MID0gZGF0ZVxuaDIuaW5uZXJIVE1MID0gdGl0bGVcbnRleHQuaW5uZXJIVE1MID0gZGV0YWlsXG5pZiAoaW1nICE9IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcuc3JjID0gaW1nXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGgyKVxuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChpbWcpXG59ZWxzZSB7XG5saS5hcHBlbmRDaGlsZChoMilcbn1cbmxpLmFwcGVuZENoaWxkKHRleHQpXG5saS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZihoMi5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgIGgyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgICBcbiAgICAgICAgdGV4dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBoMi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRleHQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbn0pXG5yZXR1cm4gbGlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQm9va3MoYm9vayxkZXNjcmlwdGlvbiwgbGluayl7XG4gICBjb25zdCBvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ29sJylcbiAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgYW5jaG9yLmhyZWYgPSBsaW5rXG4gICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGNvbnN0IGJvb2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBib29rRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnYm9va0Rlc2NyaXB0aW9uJylcbiAgIGxpLmlubmVySFRNTCA9IGJvb2sgXG4gICBib29rRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZGVzY3JpcHRpb25cbiAgIGJvb2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJyxib29rKVxuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKCk9PntcbiAgICBjb25zdCBpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJvb2spXG4gICAgaWQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgIH0pXG4gICBcbiAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT57XG4gICAgY29uc3QgaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChib29rKVxuICAgIGlkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgIH0pIFxuICAgXG4gICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxpbmtcbiAgIH0pXG4gICBsaS5hcHBlbmRDaGlsZChib29rRGVzY3JpcHRpb24pXG4gICBcbiAgIG9sLmFwcGVuZENoaWxkKGxpKVxuICAgIFxufSIsImltcG9ydCBidWlsZEhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCB3ZWF0aGVyIGZyb20gJy4vcGljcy93ZWF0aGVySW1nLnBuZydcbmltcG9ydCBiYXR0bGVTaGlwIGZyb20gJy4vcGljcy9CYXR0bGVzaGlwLnBuZydcbmltcG9ydCBGRiBmcm9tICcuL3BpY3MvRkYucG5nJ1xuaW1wb3J0IGJ1aWxkU2tpbGxzIGZyb20gJy4vc2tpbGxzJ1xuaW1wb3J0IGJ1aWxkUHJvamVjdCBmcm9tICcuL3Byb2plY3QnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1haW4oKXtcbmJ1aWxkSGVhZGVyKClcbmJ1aWxkU2tpbGxzKClcbmJ1aWxkUHJvamVjdChGRiwgJ2h0dHBzOi8vZmlnaHRlci1mb3VuZGF0aW9uMi0wLnZlcmNlbC5hcHAvJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9QYXRyaWNrLVRvbWljL0ZpZ2h0ZXJGb3VuZGF0aW9uMi4wJywgJ1NvIHRoaXMgaXMgbXkgZmlyc3QgVm9sdW50ZWVyaW5nIHByb2plY3QgZm9yIGEgbm9ucHJvZml0IGluIG15IGFyZWEsIFRoZSBGaWdodGVyIEZvdW5kYXRpb24uIEkgYWJzb2x1dGVseSBsb3ZlIHRoZSBtaXNzaW9uIHByZXNlbnRlZCB3aXRoaW4gdGhpcyBvcmdhbml6YXRpb24gYW5kIEkgaG9wZSB0byBoZWxwIGFuZCBtYWtlIGEgZGlmZmVyZW5jZSBpbiB0aGUgZ3Jvd3RoLiA8YnI+IGZvciB0aGlzIHByb2plY3QgSSBhbSB1c2luZyBSZWFjdCwgVGFpbHdpbmQgQ1NTLCBUeXBlU2NyaXB0LCBhbmQgVml0ZS4gSG9zdGluZyBvbiBWZXJjZWwuJywnRmlnaHRlciBGb3VuZGF0aW9uIFJlYnVpbGQnKVxuYnVpbGRQcm9qZWN0KGJhdHRsZVNoaXAsJ2h0dHBzOi8vcGF0cmljay10b21pYy5naXRodWIuaW8vQmF0dGxlU2hpcC8nLCdodHRwczovL2dpdGh1Yi5jb20vUGF0cmljay1Ub21pYy9CYXR0bGVTaGlwJywnRnJvbSB0aGlzIHByb2plY3QgSSBpbXBsZW1lbnRlZCBteSBmaXJzdCBUREQgaW4gYnVpbGRpbmcsIEkgZGlkIGxhcmdlIGFtb3VudHMgb2YgY29kZSByZXZpZXcgYW5kIGxlYXJuZWQgdGhhdCBzbWFsbGVyIHF1YW50aXRpZXMgb2YgY29kZSBjYW4gZGVmaW5ldGx5IGJlIGFzIHN0cm9uZyBhcyBodW5kcmVkcyBvZiBsaW5lcycsJ0JhdHRsZVNoaXAnKSBcbmJ1aWxkUHJvamVjdCh3ZWF0aGVyLCdodHRwczovL3BhdHJpY2stdG9taWMuZ2l0aHViLmlvL1dlYXRoZXJBUEkvJywnaHR0cHM6Ly9naXRodWIuY29tL1BhdHJpY2stVG9taWMvV2VhdGhlckFQSScsJ1RoaXMgYXBwbGljYXRpb24gaXMgbXkgZmlyc3QgdGltZSB1dGlsaXppbmcgYSBBUEksIEkgZG8gc29tZSBzaW1wbGUgYW5pbWF0aW9ucyB3aXRoaW4gdGhpcyBwcm9qZWN0IGFuZCBsZWFybmVkIGFsb3QgdGhyb3VnaCB0aGUgdXNlIG9mIHJlc3BvbnNpdmUgZGVzaWduIGFuZCBhbmltYXRpb24nLCdXZWF0aGVyIEFwcGxpY2F0aW9uJylcbiBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm1EaXYnKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuZm9ybS5hY3Rpb24gPSBcInByb2Nlc3NGb3JtLnBocFwiXG5mb3JtLm1ldGhvZCA9IFwicG9zdFwiXG5mb3IobGV0IGk9MDsgaTw0O2krKyl7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlXG4gICAgc3dpdGNoKGkpe1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBsYWJlbC5mb3IgPSAnbmFtZSdcbiAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdGdWxsIE5hbWU6J1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9J3RleHQnXG4gICAgICAgICAgICBpbnB1dC5uYW1lID0gJ25hbWUnXG4gICAgICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICdKb2huYXRoYW4gUmFtc2V5IERvZSdcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgbGFiZWwuZm9yID0gJ2VtYWlsJ1xuICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ0VtYWlsIEFkZHJlc3M6J1xuICAgICAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnam9oblJkb2VAaG90bWFpbC5jb20nXG4gICAgICAgICAgIFxuICAgICAgICAgICAgaW5wdXQudHlwZSA9J2VtYWlsJ1xuICAgICAgICAgICAgaW5wdXQubmFtZSA9ICdlbWFpbCdcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgbGFiZWwuZm9yID0gJ3Bob25lJ1xuICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ1Bob25lIE51bWJlcjonXG4gICAgICAgICAgICBpbnB1dC50eXBlID0ndGVsZSdcbiAgICAgICAgICAgIGlucHV0LnBsYWNlaG9sZGVyPSAnKioqLSoqKi0qKioqJ1xuICAgICAgICAgICAgaW5wdXQubmFtZSA9ICdwaG9uZSdcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgbGFiZWwuZm9yID0gJ2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ0dpdmUgY29udGV4dCB0byBwcm9qZWN0J1xuICAgICAgICAgICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgICAgICAgICB0ZXh0QXJlYS5uYW1lID0gJ2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgdGV4dEFyZWEuY29scyA9ICcxMCdcbiAgICAgICAgICAgIHRleHRBcmVhLnJvd3MgPSAnNSdcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRleHRBcmVhKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgfSBcbiAgICB9XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQudHlwZSA9ICdzdWJtaXQnXG4gICAgaW5wdXQudmFsdWUgPSAnc3VibWl0J1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgY29uc3QgY29udGFjdE1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0TWUuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgaDMuaW5uZXJIVE1MID0gJ0hvdyB0byBnZXQgaW4gdG91Y2gnXG4gICAgY29udGFjdE1lLmFwcGVuZENoaWxkKGgzKVxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwLmlubmVySFRNTCA9ICdJIGFtIHdpbGxpbmcgdG8gd29yayB3aXRoIGFueW9uZSBvbiBhbnkgcHJvamVjdCBvciBpZGVhIHRoYXQgdGhleSBoYXZlIGluIG1pbmQhIGZpbGwgb3V0IHRoaXMgZm9ybSBhbmQgSSB3aWxsIG1lc3NhZ2UgeW91IGFzIHNvb24gYXMgSSBhbSBhdmFpbGFibGUuPGJyPiBIYXZlIGEgZ3JlYXQgZGF5IGFuZCBtYXkgd2UgYWxsIGxpdmUgbG9uZyBhbmQgcHJvc3Blcjxicj48YnI+IC1QYXRyaWNrICdcbiAgICBjb250YWN0TWUuYXBwZW5kQ2hpbGQocClcbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RNZSlcbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGZvcm0pXG4gICAgbWFpbi5hcHBlbmRDaGlsZChmb3JtRGl2KVxuXG59XG4gXG4iLCJpbXBvcnQgcG9ydGFpdCBmcm9tICcuL3BpY3MvVG9taWMuUC5qcGcnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEhlYWRlcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5jb25zdCBwb3J0cmFpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5wb3J0cmFpdC5jbGFzc0xpc3QuYWRkKCdwaWNPZk1lJylcbmltZy5jbGFzc0xpc3QuYWRkKCdwb3J0cmFpdCcpXG5pbWcuc3JjID0gcG9ydGFpdFxucG9ydHJhaXQuYXBwZW5kQ2hpbGQoaW1nKVxuaGVhZGVyLmFwcGVuZENoaWxkKHBvcnRyYWl0KVxuY29uc3Qgd2hvQW1JID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbndob0FtSS5jbGFzc0xpc3QuYWRkKCd3aG9BbUknKVxuY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG5oMi5pbm5lckhUTUwgPSAnTXkgbmFtZSBpcyBQYXRyaWNrIEVtYW51ZWwgVG9taWMnXG53aG9BbUkuYXBwZW5kQ2hpbGQoaDIpXG5jb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5wLmlubmVySFRNTCA9ICdJIGFtIGEgc3R1ZGVudCBhdCB0aGUgVW5pdmVyc2l0eSBvZiBTb3V0aCBGbG9yaWRhIGFuZCBJIGdyYWR1YXRlIGluIHRoZSBTcHJpbmcgb2YgMjAyNDxicj53aXRoIGEgQmFjaGVsb3JzIGRlZ3JlZSBpbiBJbmZvcm1hdGlvbiBTY2llbmNlPGJyPkkgYW0gYSBtYW4gd2l0aCBhbG90IG9mIGFtYml0aW9uIHRvIGJldHRlciB0aGUgd29ybGQsIGFuZCBhbSB0aGUgZmlyc3Qgb2YgbXkgZmFtaWx5IHRvIGJlPGJyPmJvcm4gaW4gQW1lcmljYS4gSSBzcGVuZCBhcyBtdWNoIHRpbWUgYXMgSSBjYW4gbGVhcm5pbmcgaG93IHRvIGRldmVsb3Agd2Vic2l0ZXMgZXZlcnlkYXk8YnI+SXQgaXMgbm90IGp1c3QgZnVuIGZvciBtZSBidXQgYnJpbmdzIGltbWVuc2Ugc2F0aXNmYWN0aW9uIHdoZW4gSSBjYW4gYnVpbGQgYW5kIGRlc2lnbiBzb21ldGhpbmc8YnI+dGhhdCBJIGtub3cgaXMgZ29vZC4gSSBsb3ZlIGhlbHBpbmcgcGVvcGxlLCBhbmQgSSBhbSBsb29raW5nIGZvciBhIG9wcG9ydHVuaXR5IHRvIHNob3cgPGJyPm15IHNraWxsc2V0IGFuZCBsZWFybiB0aHJvdWdoIG90aGVycydcbndob0FtSS5hcHBlbmRDaGlsZChwKVxuaGVhZGVyLmFwcGVuZENoaWxkKHdob0FtSSlcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbm1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkSG9iYmllcyh0aXRsZSxkZXNjcmlwdGlvbil7XG4gICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKVxuICAgICBsaS5pbm5lckhUTUwgPSB0aXRsZVxuICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgIHAuaW5uZXJIVE1MID0gZGVzY3JpcHRpb25cbiAgIFxuICAgICBsaS5hcHBlbmRDaGlsZChwKVxuICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKVxufSIsIlxuaW1wb3J0IGFzaCBmcm9tICcuL3NsaWRlci9hc2guanBnJ1xuaW1wb3J0IGJhYnkgZnJvbSAnLi9zbGlkZXIvYmFieS5qcGcnXG5pbXBvcnQgYnJvdGhlciBmcm9tICcuL3NsaWRlci9icm90aGVyLmpwZydcbmltcG9ydCBicm90aGVycyBmcm9tICcuL3NsaWRlci9icm90aGVycy5qcGcnXG5pbXBvcnQgYnViYmEgZnJvbSAnLi9zbGlkZXIvYnViYmEuanBnJ1xuaW1wb3J0IGJ1Y3MgZnJvbSAnLi9zbGlkZXIvYnVjcy5qcGcnXG5pbXBvcnQgYnV0dGVyZmx5IGZyb20gJy4vc2xpZGVyL2J1dHRlcmZseS5qcGcnXG5pbXBvcnQgY29vbCBmcm9tICcuL3NsaWRlci9jb29sLmpwZydcbmltcG9ydCBjcm9hdGlhIGZyb20gJy4vc2xpZGVyL2Nyb2F0aWEuanBnJ1xuaW1wb3J0IGRhbmllbCBmcm9tICcuL3NsaWRlci9kYW5pZWwuanBnJ1xuaW1wb3J0IGRvbHBoaW4gZnJvbSAnLi9zbGlkZXIvZG9scGhpbi5qcGcnXG5pbXBvcnQgZXllcyBmcm9tICcuL3NsaWRlci9leWVzLmpwZydcbmltcG9ydCBmYW1pbHkgZnJvbSAnLi9zbGlkZXIvZmFtaWx5LmpwZydcbmltcG9ydCBmcmllbmRzIGZyb20gJy4vc2xpZGVyL2ZyaWVuZHMuanBnJ1xuaW1wb3J0IGdhZ2dsZSBmcm9tICcuL3NsaWRlci9nYWdnbGUuanBnJ1xuaW1wb3J0IGdhbmcgZnJvbSAnLi9zbGlkZXIvZ2FuZy5qcGcnXG5pbXBvcnQgZ29vZnMgZnJvbSAnLi9zbGlkZXIvZ29vZnMuanBnJ1xuaW1wb3J0IGdvb25zIGZyb20gJy4vc2xpZGVyL2dvb25zLmpwZydcbmltcG9ydCBncmFuZHBhIGZyb20gJy4vc2xpZGVyL2dyYW5kcGEuanBnJ1xuaW1wb3J0IG1heCBmcm9tICcuL3NsaWRlci9tYXguanBnJ1xuaW1wb3J0IG1vbW1hIGZyb20gJy4vc2xpZGVyL21vbW1hLmpwZydcbmltcG9ydCBtb25rZXkgZnJvbSAnLi9zbGlkZXIvbW9ua2V5LmpwZydcbmltcG9ydCBwb3NlIGZyb20gJy4vc2xpZGVyL3Bvc2UuanBnJ1xuaW1wb3J0IHB1cHBldCBmcm9tICcuL3NsaWRlci9wdXBwZXQuanBnJ1xuaW1wb3J0IHNoZW1rIGZyb20gJy4vc2xpZGVyL3NoZW1rLmpwZydcbmltcG9ydCBzaWJsaW5ncyBmcm9tICcuL3NsaWRlci9zaWJsaW5ncy5qcGcnXG5pbXBvcnQgc2lzc3kgZnJvbSAnLi9zbGlkZXIvc2lzc3kuanBnJ1xuaW1wb3J0IHNraXBwaW4gZnJvbSAnLi9zbGlkZXIvc2tpcHBpbmcuanBnJ1xuaW1wb3J0IHN0b2ljIGZyb20gJy4vc2xpZGVyL3N0b2ljLmpwZydcbmltcG9ydCBzdHJvbmdUaW0gZnJvbSAnLi9zbGlkZXIvc3Ryb25nVGltLmpwZydcbmltcG9ydCBzd2VldFQgZnJvbSAnLi9zbGlkZXIvc3dlZXRULmpwZydcbmltcG9ydCB0aGllbiBmcm9tICcuL3NsaWRlci90aGllbkJkYXkuanBnJ1xuaW1wb3J0IHRob3IgZnJvbSAnLi9zbGlkZXIvdGhvci5qcGcnXG5pbXBvcnQgdHVydGxlIGZyb20gJy4vc2xpZGVyL3R1cnRsZS5qcGcnXG5pbXBvcnQgd2F0ZXIgZnJvbSAnLi9zbGlkZXIvd2F0ZXIuanBnJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRJbWFnZVNsaWRlcigpe1xuICAgIGNvbnN0IG5hbWVzID0gW2FzaCxiYWJ5LGJyb3RoZXIsYnJvdGhlcnMsYnViYmEsYnVjcyxidXR0ZXJmbHksY29vbCxjcm9hdGlhLGRhbmllbCxkb2xwaGluLGV5ZXMsZmFtaWx5LGZyaWVuZHMsZ2FnZ2xlLGdhbmcsZ29vZnMsZ3JhbmRwYSxtYXgsbW9tbWEsbW9ua2V5LHBvc2UscHVwcGV0LHNoZW1rLHNpYmxpbmdzLHNpc3N5LHNraXBwaW4sc3RvaWMsc3Ryb25nVGltLHRoaWVuLHN3ZWV0VCx0aG9yLHR1cnRsZSx3YXRlcl1cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZCgnaW1nU2xpZGVyJylcbiAgICBmb3IobGV0IGkgPSAwOyBpPG5hbWVzLmxlbmd0aDtpKyspe1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBpbWcuc3JjID0gbmFtZXNbaV1cbiAgICAgICAgaWYoaSUyPT0wKXtcbiAgICAgICAgICAgIGltZy5zdHlsZS5tYXJnaW5Ub3AgPSAnM3ZoJ1xuICAgICAgICAgICAgaW1nLnN0eWxlLnpJbmRleCA9ICdhdXRvJ1xuICAgICAgICB9ZWxzZSBpZihpJTIhPTApe1xuICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpblRvcCA9ICc4dmgnXG4gICAgICAgICAgICBpbWcuc3R5bGUuekluZGV4ID0gJzInXG4gICAgICAgIH1cbiAgICAgICAgaW1nLmFsdCA9ICdteUZhbWlseS9uYXR1cmUnXG4gICAgICAgIHNsaWRlci5hcHBlbmRDaGlsZChpbWcpXG4gICAgfVxuICAgIGxldCBjb3VudCA9IDBcbiAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICBsZXQgdncgPSA4MFxuICAgICAgICBpZihjb3VudCA9PS02KXtcbiAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgdncgPSB2dypjb3VudFxuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvdW50LS1cbiAgICAgICAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWBcbiAgICAgICAgICAgIH1cbiAgICB9LDUwMDApXG4gICAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgd3JhcC5jbGFzc0xpc3QuYWRkKCdzbGlkZXJXcmFwJylcbiAgICB3cmFwLmFwcGVuZENoaWxkKHNsaWRlcilcbiAgICBtYWluLmFwcGVuZENoaWxkKHdyYXApXG59XG4gIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgYnVpbGRTaWRlQmFyIGZyb20gJy4vc2lkZWJhcidcbmltcG9ydCBidWlsZE1haW4gZnJvbSAnLi9idWlsZE1haW4nXG5jb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKVxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxubmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBtYWluLmlubmVySFRNTCA9ICcnXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzM0MzQzNCdcbiAgICBidWlsZE1haW4oKSAgXG59KVxuYnVpbGRNYWluKClcbmJ1aWxkU2lkZUJhcigpIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRQcm9qZWN0KHNyYywgc2l0ZUxpbmssZ2hMaW5rLCBwSW5uZXIsIGhlYWQpe1xuICAgIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKVxuICAgIGlmKG1haW4uY29udGFpbnMocHJvamVjdHMpPT10cnVlKXtcbiAgICBcbiAgICAgICAgXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKGZhbHNlKVxuICAgICAgICBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJylcbiAgICB9XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ0bnMuY2xhc3NMaXN0LmFkZCgnYnRucycpXG4gICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnbGlua3MnKVxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsZXQgY291bnQgPSAwXG4gICAgaW1nLnNyYyA9IHNyY1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKGltZylcbiAgICB3aGlsZShjb3VudDwyKXtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidG4udHlwZSA9ICdzdWJtaXQnXG4gICAgICAgIHN3aXRjaChjb3VudCl7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZm9ybS5hY3Rpb24gPSBzaXRlTGlua1xuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSAnVmlldyBMaXZlIFNpdGUnXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidG4pXG4gICAgICAgICAgICAgICAgYnRucy5hcHBlbmRDaGlsZChmb3JtKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGZvcm0uYWN0aW9uID0gZ2hMaW5rXG4gICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9ICdTb3VyY2UgQ29kZSdcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bilcbiAgICAgICAgICAgICAgICBidG5zLmFwcGVuZENoaWxkKGZvcm0pXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrIFxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDYXJkJylcbiAgIGxpbmtzLmFwcGVuZENoaWxkKGJ0bnMpXG4gICAgcC5pbm5lckhUTUwgPSBwSW5uZXJcbiAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGxpbmtzKVxuICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJylcbiAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgaDIuaW5uZXJIVE1MID0gaGVhZFxuICAgIGRlc2MuYXBwZW5kQ2hpbGQoaDIpXG4gICAgZGVzYy5hcHBlbmRDaGlsZChwKVxuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGRlc2MpXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0cylcbn1cbiIsImltcG9ydCBidWlsZE1haW4gZnJvbSAnLi9idWlsZE1haW4nXG5pbXBvcnQgYnVpbGRBYm91dE1lIGZyb20gJy4vYWJvdXQnXG5pbXBvcnQgYnVpbGRCbG9nIGZyb20gJy4vYmxvZydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkU2lkZUJhcigpe1xuICAgIGNvbnN0IHNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZScpXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXJCdG4nKVxuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2lkZUJhci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnc2lkZUJhcicpXG4gICAgcmVtb3ZlQnRuLmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMzlcIiBoZWlnaHQ9XCIzNlwiIHZpZXdCb3g9XCIwIDAgMzkgMzZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cmVjdCB3aWR0aD1cIjQzLjY4NDZcIiBoZWlnaHQ9XCI3Ljk1NTNcIiByeD1cIjMuOTc3NjVcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC43NDY4MSAwLjY2NTAzNyAtMC43ODc4MTEgMC42MTU5MTcgNi4yNjcyMSAxLjk5MDYpXCIgZmlsbD1cIndoaXRlXCIvPiA8cmVjdCB3aWR0aD1cIjQyLjkyNDhcIiBoZWlnaHQ9XCI4LjA4ODE4XCIgcng9XCI0LjA0NDA5XCIgdHJhbnNmb3JtPVwibWF0cml4KC0wLjY3ODMwMiAwLjczNDc4MyAtMC44NDEyNDQgLTAuNTQwNjU2IDM3LjM1MTYgNC4zNzI5MilcIiBmaWxsPVwid2hpdGVcIi8+IDwvc3ZnPidcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgXG4gICAgICAgc2lkZUJhci5zZXRBdHRyaWJ1dGUoJ2lkJywnYWN0aXZlJylcbiAgICB9KVxuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgc2lkZUJhci5pZCA9ICdkZUFjdGl2ZSdcbiAgICB9KVxuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKVxuICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBob21lRGl2LmNsYXNzTGlzdC5hZGQoJ2J0bkRpdicpXG5jb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5wLmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgMTgzIDE1MFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiA8cmVjdCB4PVwiNDFcIiB5PVwiNTBcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHJ4PVwiMTBcIiBmaWxsPVwiI0ZGQkYwMFwiLz4gPHBhdGggZD1cIk04NC42MjYgNi41MDYxMUM4OC40ODIgMi44NTY0NiA5NC41MTggMi44NTY0NSA5OC4zNzQgNi41MDYxTDE1Mi41MDIgNTcuNzM3MkMxNTkuMDY5IDYzLjk1MjkgMTU0LjY3MSA3NSAxNDUuNjI4IDc1SDM3LjM3MTdDMjguMzI5NSA3NSAyMy45MzA1IDYzLjk1MjkgMzAuNDk3NyA1Ny43MzcyTDg0LjYyNiA2LjUwNjExWlwiIGZpbGw9XCIjRkZCRjAwXCIvPjxwYXRoIGQ9XCJNNzQgMTA2Qzc0IDEwMC40NzcgNzguNDc3MiA5NiA4NCA5Nkg5OEMxMDMuNTIzIDk2IDEwOCAxMDAuNDc3IDEwOCAxMDZWMTUwSDc0VjEwNlpcIiBmaWxsPVwiYmxhY2tcIi8+PC9zdmc+J1xuICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgaG9tZS5pbm5lckhUTUwgPSAnSG9tZSdcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gJydcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzM0MzQzNCdcbiAgICAgICAgYnVpbGRNYWluKClcbiAgICAgICAgc2lkZUJhci5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywnYWN0aXZlJylcbiAgICB9KVxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZSlcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKHApXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChob21lRGl2KVxuICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhYm91dERpdi5jbGFzc0xpc3QuYWRkKCdidG5EaXYnKVxuICAgICBjb25zdCBhYm91dFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICBhYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRjRCQjQ0J1xuICAgICAgICBidWlsZEFib3V0TWUoKVxuICAgICAgICBzaWRlQmFyLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCdhY3RpdmUnKVxuICAgICB9KVxuICAgICBhYm91dEJ0bi5pbm5lckhUTUwgPSAnQWJvdXQgTWUnXG4gICAgIGFib3V0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0QnRuKVxuICAgICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dFApXG4gICAgIGNvbnN0IGJsb2dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICBjb25zdCBibG9nQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgYmxvZ0J0bi5pbm5lckhUTUwgPSBcIkJsb2dcIlxuICAgICBibG9nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PntcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBidWlsZEJsb2coKVxuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMzQzNDM0J1xuICAgICAgICBzaWRlQmFyLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCdhY3RpdmUnKVxuICAgICB9KVxuICAgICBibG9nRGl2LmFwcGVuZENoaWxkKGJsb2dCdG4pXG4gICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoYWJvdXREaXYpXG4gICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoYmxvZ0RpdilcbiAgICBzaWRlLmFwcGVuZENoaWxkKHNpZGVCYXIpXG59IiwiaW1wb3J0IGphdmEgZnJvbSAnLi9waWNzL2phdmEucG5nJ1xuaW1wb3J0IHNhc3MgZnJvbSAnLi9waWNzL3Nhc3MucG5nJ1xuaW1wb3J0IGNzcyBmcm9tICcuL3BpY3MvY3NzLnBuZydcbmltcG9ydCBodG1sIGZyb20gJy4vcGljcy9odG1sLnBuZydcbmltcG9ydCBqcyBmcm9tICAnLi9waWNzL2pzLnBuZydcbmltcG9ydCBweSBmcm9tICcuL3BpY3MvcHl0aG9uLnBuZydcbmltcG9ydCBzcWwgZnJvbSAnLi9waWNzL3NxbC5wbmcnXG5pbXBvcnQgd3AgZnJvbSAnLi9waWNzL3dlYnBhY2sucG5nJ1xuaW1wb3J0IHRzIGZyb20gJy4vcGljcy90cy5wbmcnXG5pbXBvcnQgamVzdCBmcm9tICcuL3BpY3MvamVzdC5wbmcnXG5pbXBvcnQgdGFpbHdpbmQgZnJvbSAnLi9waWNzL3RhaWx3aW5kLnBuZydcbmltcG9ydCByZWFjdCBmcm9tICcuL3BpY3MvcmVhY3QucG5nJ1xuaW1wb3J0IHZpdGUgZnJvbSAnLi9waWNzL1ZpdGVqcy1sb2dvLnN2ZydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkU2tpbGxzKCl7XG4gICAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIHdyYXAuY2xhc3NMaXN0LmFkZCgnc2tpbGxzJylcbiAgICBjb25zdCBza2lsbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNraWxscy5jbGFzc0xpc3QuYWRkKCd3cmFwJylcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBoMi5pbm5lckhUTUwgPSBcIk15IFNraWxsc2V0XCJcbiAgICB3cmFwLmFwcGVuZENoaWxkKGgyKVxuICAgIGxldCBjb3VudCA9IDBcbiAgICB3aGlsZShjb3VudCA8IDEzKXtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgICAgIHN3aXRjaChjb3VudCl7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ0phdmEnICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGphdmFcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0phdmEnXG4gICAgICAgICAgICAgICAgaW1nLmlkID0gJ2phdmEnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2phdmEnKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnUHl0aG9uJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBweVxuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnUHl0aG9uJ1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdIVE1MJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBodG1sXG4gICAgICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdodG1sJylcblxuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnSFRNTCdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnQ1NTJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBjc3NcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0NTUydcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZCgnY3NzJylcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnSmF2YVNjcmlwdCdcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUubWFyZ2luTGVmdCA9ICcyMHB4J1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBqc1xuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnSmF2YVNjcmlwdCdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnbXlTUUwnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHNxbFxuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnbXlTUUwnXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzhweCdcbiAgICAgICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ3NxbCcpXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ1Nhc3MnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHNhc3NcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ1Nhc3MnXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzVweCdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnV2VicGFjaydcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gd3BcbiAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnd2VicGFjaycpXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdXZWJwYWNrJ1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdUeXBlU2NyaXB0J1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSB0c1xuICAgICAgICAgICAgICAgIGltZy5zdHlsZS5tYXJnaW5MZWZ0ID0gJzIwcHgnXG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdUeXBlc2NyaXB0J1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdKZXN0J1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBqZXN0XG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdKZXN0J1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaW1nLnRpdGxlXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5tYXJnaW5MZWZ0PScxMHB4J1xuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgaW1nLnRpdGxlID0gJ1RhaWx3aW5kJ1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSB0YWlsd2luZFxuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnVGFpbHdpbmQnXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCd0YWlsd2luZCcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIHNraWxscy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICBpbWcudGl0bGUgPSAnUmVhY3QnXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHJlYWN0XG4gICAgICAgICAgICAgICAgcC5pZCA9ICdyZWFjdCdcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ1JlYWN0J1xuICAgICAgICAgICAgICAgIGltZy5pbm5lckhUTUwgPSBpbWcudGl0bGVcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgc2tpbGxzLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgIGltZy50aXRsZSA9ICdWaXRlJ1xuICAgICAgICAgICAgICAgIHAuaWQgPSAndml0ZSdcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gdml0ZVxuICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnVml0ZSdcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGltZy50aXRsZVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgICAgICAgICBza2lsbHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICB3cmFwLmFwcGVuZENoaWxkKHNraWxscylcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh3cmFwKVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=