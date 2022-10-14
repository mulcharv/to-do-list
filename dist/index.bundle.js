/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Literata-VariableFont_opsz,wght.ttf */ "./src/Literata-VariableFont_opsz,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Literata';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\nbutton {\n    font-family: 'Literata';\n    border-radius: 4px;\n}\n\nbutton:hover {\n    cursor: pointer;\n    filter: brightness(0.85);\n    transform: 0.7s;\n}\n\nbody {\n    font-family: 'Literata';\n    font-weight: bold;\n    margin: 0;\n}\n\n#main {\n    display: grid;\n    grid-template-rows: max-content max-content;\n    grid-template-columns: minmax(100px, 300px) 1fr;\n}\n\n#titleBlock {\n    grid-row: 1/2;\n    grid-column: 1/3;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center;\n    background-color: #094074;\n    opacity: 0.97;\n    color: white;\n    padding: 30px 10px;\n}\n\n#pagecontainer {\n    grid-row: 2/3;\n    grid-column: 2/3;\n    margin-right: 25px;\n    margin-left: 25px;\n}\n\n#titleBlock button {\n    max-width: 50px;\n}\n\n#menuToggle {\n    grid-column: 1/2;\n    justify-self: start;\n    background-color: #FFDD4A;\n}\n\n#menuTogglePic {\n    object-fit: cover;\n    width: 30px;\n    height: 30px;\n    background-color: #FFDD4A;\n}\n\n#titleMain {\n    grid-column: 2/3;\n    justify-self: center;\n    display: grid;\n    grid-template-columns: auto auto;\n    align-items: center;\n    gap: 10px;\n}\n\n#titlePic {\n    object-fit: cover;\n    width: 50px;\n    height: 50px;\n    color: white;\n}\n\n#titleText {\n    font-size: 45px;\n}\n\n\n\n\n#menu img[src$=\".svg\"] {\n    object-fit: cover;\n    min-height: 20px;\n    min-width: 20px;\n}\n\n#menu {\n    grid-row: 2/3;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: 170px min-content;\n    max-width: 300px;\n    height: 100vh;\n    background-color: #FE9000;\n    opacity: 0.9;\n}\n\n@media screen and (max-width: 600px){}\n\n#periodLists button {\n    width: 100%;\n    max-height: 30px;\n    background-color: #3C6997;\n    color: white;\n    display: grid;\n    grid-auto-flow: column;\n    align-content: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n\n#periodLists {\n    grid-row: 1/2;\n    display: grid;\n    grid-template-rows: auto auto auto;\n    gap: 15px;\n    padding: 25px;\n    max-height: 300px;\n    overflow: scroll;\n}\n\n#home {\n    grid-row: 1/2;\n}\n\n#today {\n    grid-row: 2/3;\n}\n\n#thisWeek {\n    grid-row: 3/4;\n}\n\n#projectLists {\n    grid-row: 2/3;\n    display: grid;\n    grid-template-rows: auto auto auto;\n    padding: 25px;\n    max-height: fit-content;\n}\n\n#projListTitle {\n    grid-row: 1/2;\n    display: grid;\n    grid-template-columns: auto auto;\n    align-items: center;\n}\n\n#projListText {\n    grid-column: 1/2;\n    font-size: calc(18px + 1vw);\n}\n\n#projAddButton {\n    grid-column: 2/3;\n    padding: 1px;\n    max-height: 35px;\n    max-width: 35px;\n    min-height: min-content;\n    min-width: min-content;\n    background-color: #FFDD4A;\n}\n\n#projAddButtonPic {\n    background-color: #FFDD4A;\n}\n\n#projectformcontainer {\n    position: relative;\n}\n\n#projectform {\n    display: grid;\n    grid-template-rows: auto auto auto auto;\n    gap: 10px;\n    margin: 10px 0px;\n    font-family: 'Literata';\n    background-color: #5ADBFF;\n    opacity: 0.85;\n    padding: 10px;\n    border-radius: 5px;\n}\n\n#projformtitle {\n    grid-row: 1/2;\n    font-size: large;\n}\n\n#projinputcontainer {\n    grid-row: 2/3;\n    margin-top: 25px;\n    position: relative;\n}\n\n#projinput {\n    height: 25px;\n    width: 200px;\n    \n}\n\n#projformbtns {\n    grid-row: 3/4;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    max-width: 300px;\n\n}\n\n#projformbtns button {\n    background-color: #FFDD4A;\n}\n\n\n#projdelete {\n    grid-row: 4/5;\n    max-width: 145px;\n    display: grid;\n    justify-self: center;\n    background-color: #FFDD4A;\n}\n\n#projlabelcreate {\n    position: absolute;\n    top: -40px;\n    left: 10px;\n    font-size: medium;\n}\n\n#projlabeledit {\n    position: absolute;\n    top: -40px;\n    left: 10px;\n}\n\n#projTileList {\n    margin-top: 20px;\n    display: grid;\n    gap: 8px;\n}\n\n#projTileList button {\n    height: 30px;\n    background-color: #3C6997;\n    color: white;\n}\n\n.projectpage {\n    display: grid;\n    grid-template-rows: auto auto auto auto auto auto;\n    gap: 10px;\n}\n\n.periodcontainer {\n    display: grid;\n    grid-template-rows: auto auto auto auto;\n    gap: 10px;\n}\n\n.periodcontainer > .periodtitle {\n    grid-row: 1/2;\n    font-size: 25px;\n    color: #094074;\n    opacity: 0.9;\n}\n\n.periodcontainer > .todopopup {\n    grid-row: 2/3;\n}\n\n.periodcontainer > .taskheaders {\n    grid-row: 3/4;\n}\n\n.periodcontainer > .periodtaskcontainer {\n    grid-row: 4/5;\n}\n\n.projtitleline {\n    grid-row: 1/2;\n    font-size: 35px;\n    display: grid;\n    grid-template-columns: min-content auto;\n    gap: 10px;\n    align-items: center;\n    justify-content: center;\n    opacity: 0.9;\n}\n\n.projpagetitle {\n    color: #094074;\n}\n\n.projeditpic {\n    object-fit: cover;\n    width: 20px;\n    height: 20px;\n    background-color: #FFDD4A;\n}\n\n.projedit {\n    width: fit-content;\n    height: fit-content;\n    background-color: #FFDD4A;\n}\n\n.editprojform {\n    grid-row: 2/3;\n    position: relative;\n    display: grid;\n    justify-content: center;\n}\n\n.divprojtask {\n    grid-row: 3/4;\n    display: grid;\n    justify-content: center;\n}\n\n.projtask {\n    width: 150px;\n    height: 30px;\n    background-color: #FE9000;\n    opacity: 0.9;\n    \n}\n\n#todopopup {\n    grid-row: 4/5;\n}\n\n#todoformcontainer {\n    margin: 20px;\n}\n\n#todoform {\n    display: grid;\n    grid-template-rows: auto auto auto auto;\n    row-gap: 35px;\n    background-color: #5ADBFF;\n    opacity: 0.85;\n    padding: 10px;\n    border-radius: 5px;\n}\n\n#todoformcontainer input, #todoformcontainer select{\n    position: absolute;\n}\n\n#todoformcontainer label {\n    position: relative;\n    left: 0px;\n    top: -24px;\n}\n\n#todoformtitle {\n    grid-row: 1/2;\n    margin-bottom: 5px;\n    width: 125px;\n    font-size: 20px;\n}\n\n#secondtodo {\n    grid-row: 2/3;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-columns: 150px 122px 65px;\n    gap: 15px;\n}\n\n#taskname {\n    grid-column: 1/2;\n    height: 25px;\n    width: 150px;\n}\n\n#datecontainer {\n    grid-column: 2/3;\n    width: 122px;\n}\n\n\n#prioritycontainer {\n    grid-column: 3/4;\n    width: 65px;\n}\n\n#descripcontainer {\n    grid-row: 3/4;\n}\n\n#fourthtodo {\n    grid-row: 4/5;\n    display: grid;\n    grid-template-columns: 100px 100px;\n    column-gap: 15px;\n}\n\n#fourthtodo button {\n    background-color: #FFDD4A;\n}\n\n#submittask {\n    grid-column: 1/2;\n    width: 100px;\n}\n\n#canceltask {\n    grid-column: 2/3;\n    width: 100px;\n}\n\n\n\n.taskheaders {\n    grid-row: 5/6;\n    display: grid;\n    margin-left: 30px;\n    grid-template-columns: minmax(50px, 250px) minmax(50px, 200px) minmax(75px, 200px) minmax(75px, 200px) 70px;\n    column-gap: 5px;\n    position: relative;\n}\n\n.taskheaders:after {\n    position: absolute;\n    left: 0;\n    top: 100%;\n    height: 2px;\n    background: black;\n    content: \"\";\n    width: 100%;\n    display: block;\n}\n\n.nameheader {\n    grid-column: 1/2;\n    min-width: 50px;\n}\n\n.descheader {\n    grid-column: 2/3;\n    min-width: 60px;\n}\n\n.dateheader {\n    grid-column: 3/4;\n    min-width: 85px;\n\n}\n\n.prioheader {\n    grid-column: 4/5;\n    min-width: 65px;\n\n}\n\n.todotile {\n    display: grid;\n    grid-template-rows: auto auto;\n    margin-bottom: 15px;\n}\n\n.firstrow {\n    display: grid;\n    grid-template-columns: repeat(7, auto);\n    grid-auto-flow: column;\n    column-gap: 5px;\n    justify-content: left;\n}\n\n.firstrow button {\n    background-color: #FFDD4A;\n    opacity: 0.85;\n}\n\n.todotile img {\n    object-fit: cover;\n    max-height: 20px;\n    max-width: 20px;\n    background-color: #FFDD4A;\n    opacity: 0.85;\n}\n\n.editbutton, .deletebutton {\n    width: 30px;\n}\n\n.tilename {\n    display: grid;\n    grid-template-columns: minmax(50px, 250px);\n    overflow: scroll;\n    min-width: 50px;\n}\n\n.tiledescdiv {\n    display: grid;\n    grid-template-columns: minmax(60px, 200px);\n    min-width: 60px;\n}\n\n.tiledescbutton {\n    width: 60px;\n}\n\n.tiledate {\n    display: grid;\n    grid-template-columns: minmax(85px, 200px);\n    min-width: 85px;\n}\n\n.tileprio {\n    display: grid;\n    grid-template-columns: minmax(85px, 200px);\n    min-width: 65px;\n}\n\n.checkbox {\n    width: 20px;\n}\n\n.checkbox:hover {\n    cursor: pointer;\n}\n\n.descexpand {\n    margin-left: 30px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Literata';\n    src: url('./Literata-VariableFont_opsz,wght.ttf') format('ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\nbutton {\n    font-family: 'Literata';\n    border-radius: 4px;\n}\n\nbutton:hover {\n    cursor: pointer;\n    filter: brightness(0.85);\n    transform: 0.7s;\n}\n\nbody {\n    font-family: 'Literata';\n    font-weight: bold;\n    margin: 0;\n}\n\n#main {\n    display: grid;\n    grid-template-rows: max-content max-content;\n    grid-template-columns: minmax(100px, 300px) 1fr;\n}\n\n#titleBlock {\n    grid-row: 1/2;\n    grid-column: 1/3;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center;\n    background-color: #094074;\n    opacity: 0.97;\n    color: white;\n    padding: 30px 10px;\n}\n\n#pagecontainer {\n    grid-row: 2/3;\n    grid-column: 2/3;\n    margin-right: 25px;\n    margin-left: 25px;\n}\n\n#titleBlock button {\n    max-width: 50px;\n}\n\n#menuToggle {\n    grid-column: 1/2;\n    justify-self: start;\n    background-color: #FFDD4A;\n}\n\n#menuTogglePic {\n    object-fit: cover;\n    width: 30px;\n    height: 30px;\n    background-color: #FFDD4A;\n}\n\n#titleMain {\n    grid-column: 2/3;\n    justify-self: center;\n    display: grid;\n    grid-template-columns: auto auto;\n    align-items: center;\n    gap: 10px;\n}\n\n#titlePic {\n    object-fit: cover;\n    width: 50px;\n    height: 50px;\n    color: white;\n}\n\n#titleText {\n    font-size: 45px;\n}\n\n\n\n\n#menu img[src$=\".svg\"] {\n    object-fit: cover;\n    min-height: 20px;\n    min-width: 20px;\n}\n\n#menu {\n    grid-row: 2/3;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: 170px min-content;\n    max-width: 300px;\n    height: 100vh;\n    background-color: #FE9000;\n    opacity: 0.9;\n}\n\n@media screen and (max-width: 600px){}\n\n#periodLists button {\n    width: 100%;\n    max-height: 30px;\n    background-color: #3C6997;\n    color: white;\n    display: grid;\n    grid-auto-flow: column;\n    align-content: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n\n#periodLists {\n    grid-row: 1/2;\n    display: grid;\n    grid-template-rows: auto auto auto;\n    gap: 15px;\n    padding: 25px;\n    max-height: 300px;\n    overflow: scroll;\n}\n\n#home {\n    grid-row: 1/2;\n}\n\n#today {\n    grid-row: 2/3;\n}\n\n#thisWeek {\n    grid-row: 3/4;\n}\n\n#projectLists {\n    grid-row: 2/3;\n    display: grid;\n    grid-template-rows: auto auto auto;\n    padding: 25px;\n    max-height: fit-content;\n}\n\n#projListTitle {\n    grid-row: 1/2;\n    display: grid;\n    grid-template-columns: auto auto;\n    align-items: center;\n}\n\n#projListText {\n    grid-column: 1/2;\n    font-size: calc(18px + 1vw);\n}\n\n#projAddButton {\n    grid-column: 2/3;\n    padding: 1px;\n    max-height: 35px;\n    max-width: 35px;\n    min-height: min-content;\n    min-width: min-content;\n    background-color: #FFDD4A;\n}\n\n#projAddButtonPic {\n    background-color: #FFDD4A;\n}\n\n#projectformcontainer {\n    position: relative;\n}\n\n#projectform {\n    display: grid;\n    grid-template-rows: auto auto auto auto;\n    gap: 10px;\n    margin: 10px 0px;\n    font-family: 'Literata';\n    background-color: #5ADBFF;\n    opacity: 0.85;\n    padding: 10px;\n    border-radius: 5px;\n}\n\n#projformtitle {\n    grid-row: 1/2;\n    font-size: large;\n}\n\n#projinputcontainer {\n    grid-row: 2/3;\n    margin-top: 25px;\n    position: relative;\n}\n\n#projinput {\n    height: 25px;\n    width: 200px;\n    \n}\n\n#projformbtns {\n    grid-row: 3/4;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    max-width: 300px;\n\n}\n\n#projformbtns button {\n    background-color: #FFDD4A;\n}\n\n\n#projdelete {\n    grid-row: 4/5;\n    max-width: 145px;\n    display: grid;\n    justify-self: center;\n    background-color: #FFDD4A;\n}\n\n#projlabelcreate {\n    position: absolute;\n    top: -40px;\n    left: 10px;\n    font-size: medium;\n}\n\n#projlabeledit {\n    position: absolute;\n    top: -40px;\n    left: 10px;\n}\n\n#projTileList {\n    margin-top: 20px;\n    display: grid;\n    gap: 8px;\n}\n\n#projTileList button {\n    height: 30px;\n    background-color: #3C6997;\n    color: white;\n}\n\n.projectpage {\n    display: grid;\n    grid-template-rows: auto auto auto auto auto auto;\n    gap: 10px;\n}\n\n.periodcontainer {\n    display: grid;\n    grid-template-rows: auto auto auto auto;\n    gap: 10px;\n}\n\n.periodcontainer > .periodtitle {\n    grid-row: 1/2;\n    font-size: 25px;\n    color: #094074;\n    opacity: 0.9;\n}\n\n.periodcontainer > .todopopup {\n    grid-row: 2/3;\n}\n\n.periodcontainer > .taskheaders {\n    grid-row: 3/4;\n}\n\n.periodcontainer > .periodtaskcontainer {\n    grid-row: 4/5;\n}\n\n.projtitleline {\n    grid-row: 1/2;\n    font-size: 35px;\n    display: grid;\n    grid-template-columns: min-content auto;\n    gap: 10px;\n    align-items: center;\n    justify-content: center;\n    opacity: 0.9;\n}\n\n.projpagetitle {\n    color: #094074;\n}\n\n.projeditpic {\n    object-fit: cover;\n    width: 20px;\n    height: 20px;\n    background-color: #FFDD4A;\n}\n\n.projedit {\n    width: fit-content;\n    height: fit-content;\n    background-color: #FFDD4A;\n}\n\n.editprojform {\n    grid-row: 2/3;\n    position: relative;\n    display: grid;\n    justify-content: center;\n}\n\n.divprojtask {\n    grid-row: 3/4;\n    display: grid;\n    justify-content: center;\n}\n\n.projtask {\n    width: 150px;\n    height: 30px;\n    background-color: #FE9000;\n    opacity: 0.9;\n    \n}\n\n#todopopup {\n    grid-row: 4/5;\n}\n\n#todoformcontainer {\n    margin: 20px;\n}\n\n#todoform {\n    display: grid;\n    grid-template-rows: auto auto auto auto;\n    row-gap: 35px;\n    background-color: #5ADBFF;\n    opacity: 0.85;\n    padding: 10px;\n    border-radius: 5px;\n}\n\n#todoformcontainer input, #todoformcontainer select{\n    position: absolute;\n}\n\n#todoformcontainer label {\n    position: relative;\n    left: 0px;\n    top: -24px;\n}\n\n#todoformtitle {\n    grid-row: 1/2;\n    margin-bottom: 5px;\n    width: 125px;\n    font-size: 20px;\n}\n\n#secondtodo {\n    grid-row: 2/3;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-columns: 150px 122px 65px;\n    gap: 15px;\n}\n\n#taskname {\n    grid-column: 1/2;\n    height: 25px;\n    width: 150px;\n}\n\n#datecontainer {\n    grid-column: 2/3;\n    width: 122px;\n}\n\n\n#prioritycontainer {\n    grid-column: 3/4;\n    width: 65px;\n}\n\n#descripcontainer {\n    grid-row: 3/4;\n}\n\n#fourthtodo {\n    grid-row: 4/5;\n    display: grid;\n    grid-template-columns: 100px 100px;\n    column-gap: 15px;\n}\n\n#fourthtodo button {\n    background-color: #FFDD4A;\n}\n\n#submittask {\n    grid-column: 1/2;\n    width: 100px;\n}\n\n#canceltask {\n    grid-column: 2/3;\n    width: 100px;\n}\n\n\n\n.taskheaders {\n    grid-row: 5/6;\n    display: grid;\n    margin-left: 30px;\n    grid-template-columns: minmax(50px, 250px) minmax(50px, 200px) minmax(75px, 200px) minmax(75px, 200px) 70px;\n    column-gap: 5px;\n    position: relative;\n}\n\n.taskheaders:after {\n    position: absolute;\n    left: 0;\n    top: 100%;\n    height: 2px;\n    background: black;\n    content: \"\";\n    width: 100%;\n    display: block;\n}\n\n.nameheader {\n    grid-column: 1/2;\n    min-width: 50px;\n}\n\n.descheader {\n    grid-column: 2/3;\n    min-width: 60px;\n}\n\n.dateheader {\n    grid-column: 3/4;\n    min-width: 85px;\n\n}\n\n.prioheader {\n    grid-column: 4/5;\n    min-width: 65px;\n\n}\n\n.todotile {\n    display: grid;\n    grid-template-rows: auto auto;\n    margin-bottom: 15px;\n}\n\n.firstrow {\n    display: grid;\n    grid-template-columns: repeat(7, auto);\n    grid-auto-flow: column;\n    column-gap: 5px;\n    justify-content: left;\n}\n\n.firstrow button {\n    background-color: #FFDD4A;\n    opacity: 0.85;\n}\n\n.todotile img {\n    object-fit: cover;\n    max-height: 20px;\n    max-width: 20px;\n    background-color: #FFDD4A;\n    opacity: 0.85;\n}\n\n.editbutton, .deletebutton {\n    width: 30px;\n}\n\n.tilename {\n    display: grid;\n    grid-template-columns: minmax(50px, 250px);\n    overflow: scroll;\n    min-width: 50px;\n}\n\n.tiledescdiv {\n    display: grid;\n    grid-template-columns: minmax(60px, 200px);\n    min-width: 60px;\n}\n\n.tiledescbutton {\n    width: 60px;\n}\n\n.tiledate {\n    display: grid;\n    grid-template-columns: minmax(85px, 200px);\n    min-width: 85px;\n}\n\n.tileprio {\n    display: grid;\n    grid-template-columns: minmax(85px, 200px);\n    min-width: 65px;\n}\n\n.checkbox {\n    width: 20px;\n}\n\n.checkbox:hover {\n    cursor: pointer;\n}\n\n.descexpand {\n    margin-left: 30px;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/tododoms.js":
/*!*************************!*\
  !*** ./src/tododoms.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearforms": () => (/* binding */ clearforms),
/* harmony export */   "loadprojects": () => (/* binding */ loadprojects),
/* harmony export */   "loadprojpages": () => (/* binding */ loadprojpages),
/* harmony export */   "periodpage": () => (/* binding */ periodpage),
/* harmony export */   "projectForms": () => (/* binding */ projectForms),
/* harmony export */   "projectTile": () => (/* binding */ projectTile),
/* harmony export */   "sorttiles": () => (/* binding */ sorttiles),
/* harmony export */   "sorttodos": () => (/* binding */ sorttodos),
/* harmony export */   "toDoForms": () => (/* binding */ toDoForms),
/* harmony export */   "toDoTile": () => (/* binding */ toDoTile),
/* harmony export */   "updtprojdel": () => (/* binding */ updtprojdel)
/* harmony export */ });
/* harmony import */ var _todointerfacers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todointerfacers.js */ "./src/todointerfacers.js");
/* harmony import */ var _pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pencil-outline.svg */ "./src/pencil-outline.svg");
/* harmony import */ var _delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.svg */ "./src/delete.svg");
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns_isSameWeek__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/isSameWeek */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/parseISO */ "./node_modules/date-fns/esm/parseISO/index.js");







const projarray = [];
const projpagesarray = [];

const storeprojects = (item) => {
    let element = document.getElementById(item);
    let elementstring = element.outerHTML;
    projarray.push(elementstring);
    localStorage.setItem('projects', JSON.stringify(projarray));
    console.log(projarray.length);
}

const loadprojects = () => {
    const parunpacked = JSON.parse(localStorage.getItem('projects') || '[]');
    console.log(parunpacked);
    let projTileList = document.getElementById('projTileList');
    parunpacked.forEach((project) => {
    projTileList.innerHTML += project;
    projarray.push(project);
    })
}

const storeprojpages = (item) => {
    let element = document.getElementById(item);
    let elementstring = element.outerHTML;
    projpagesarray.push(elementstring);
    localStorage.setItem('projectpages', JSON.stringify(projpagesarray));
}


const loadprojpages = () => {
    const ppparunpacked = JSON.parse(localStorage.getItem('projectpages') || '[]');
    let pagecontainer = document.getElementById('pagecontainer');
    ppparunpacked.forEach((page) => {
        pagecontainer.innerHTML += page;
        pagecontainer.lastChild.style.visibility = 'hidden';
        pagecontainer.lastChild.style.width = '0px';
        pagecontainer.lastChild.style.height = '0px';
        projpagesarray.push(page);
    })
}

const clearforms = () => {
    let forms = document.getElementsByClassName('form')
    if (forms !== null) {
        for (const form of forms) {
            form.remove();
        }
    }
}

const updtprojdel = () => {
    let deletebuttons = document.getElementsByClassName('deletebutton');
        for (const del of deletebuttons) {
            del.addEventListener('click', (e) => {
                if (e.target.className == 'deletebuttonpic') {
                    let todotile = e.target.parentElement.parentElement.parentElement;
                    let page = todotile.parentElement.parentElement;
                    let pageid = page.id;
                    todotile.remove();
                    let pagenum = pageid.replace(/\D/g, "");
                    projpagesarray[pagenum] = page.outerHTML;
                    localStorage.setItem('projectpages', JSON.stringify(projpagesarray));
                }
                if (e.target.className == 'deletebutton') {
                    let todotile = e.target.parentElement.parentElement;
                    let page = todotile.parentElement.parentElement;
                    let pageid = page.id;
                    todotile.remove();
                    let pagenum = pageid.replace(/\D/g, "");
                    projpagesarray[pagenum] = page.outerHTML;
                    localStorage.setItem('projectpages', JSON.stringify(projpagesarray));
                }
            })
        }
}

const toDoForms = (todoformtype, todoname, tododescrip, tododate, todoprio, todotileid) => {
    let todoformcontainer = document.createElement('div');
    todoformcontainer.setAttribute('id', 'todoformcontainer');
    todoformcontainer.setAttribute('class', 'form');
    let todoform = document.createElement('form');
    todoform.setAttribute('id', 'todoform');
    todoformcontainer.appendChild(todoform);
    
    let todoformtitle = document.createElement('div');
    todoformtitle.setAttribute('id', 'todoformtitle');
    if (todoformtype == 'create') {
    todoformtitle.textContent = 'New Task';
    }
    else if (todoformtype == 'edit') {
    todoformtitle.textContent = 'Edit Task';
    }
    todoform.appendChild(todoformtitle);

    let secondtodo = document.createElement('div');
    secondtodo.setAttribute('id', 'secondtodo');
    todoform.appendChild(secondtodo);

    let namecontainer = document.createElement('div');
    namecontainer.setAttribute('id', 'namecontainer');
    let taskname = document.createElement('input');
    taskname.setAttribute('type', 'text');
    taskname.setAttribute('id', 'taskname');
    taskname.setAttribute('required', '');
    if (todoformtype == 'edit') {
        taskname.defaultValue = todoname;
    }
    let namelabel = document.createElement('label');
    namelabel.setAttribute('id', 'namelabel');
    namelabel.setAttribute('for', 'taskname');
    namelabel.textContent = 'Task Name: ';

    secondtodo.appendChild(namecontainer);
    namecontainer.appendChild(taskname);
    namecontainer.appendChild(namelabel);

    let descripcontainer = document.createElement('div');
    descripcontainer.setAttribute('id', 'descripcontainer');
    let descrip = document.createElement('input');
    descrip.setAttribute('type', 'text');
    descrip.setAttribute('id', 'descrip');
    descrip.style.width = '30%';
    descrip.style.height = '30px';
    if (todoformtype == 'edit') {
        descrip.defaultValue = tododescrip;
    };
    let descriplabel = document.createElement('label');
    descriplabel.setAttribute('id', 'descriplabel');
    descriplabel.setAttribute('for', 'descrip');
    descriplabel.textContent = 'Description: ';

    todoform.appendChild(descripcontainer);
    descripcontainer.appendChild(descrip);
    descripcontainer.appendChild(descriplabel);

    let datecontainer = document.createElement('div');
    datecontainer.setAttribute('id', 'datecontainer');
    let date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('id', 'date');
    date.setAttribute('required', '');
    if (todoformtype == 'edit') {
        date.defaultValue = tododate;
    };
    let datelabel = document.createElement('label');
    datelabel.setAttribute('id', 'datelabel');
    datelabel.setAttribute('for', 'date');
    datelabel.textContent = 'Date: ';

    secondtodo.appendChild(datecontainer);
    datecontainer.appendChild(date);
    datecontainer.appendChild(datelabel);

    
    let prioritycontainer = document.createElement('div');
    prioritycontainer.setAttribute('id', 'prioritycontainer');
    let priority = document.createElement('select');
    priority.setAttribute('id', 'priority');
    priority.setAttribute('required', '');
    
    let prioritylabel = document.createElement('label');
    prioritylabel.setAttribute('id', 'prioritylabel');
    prioritylabel.setAttribute('for', 'priority');
    prioritylabel.textContent = 'Priority: ';
    let high = document.createElement('option');
    high.value = high.textContent = 'High';
    let normal = document.createElement('option');
    normal.value = normal.textContent = 'Normal';
    let low = document.createElement('option');
    low.value = low.textContent = 'Low';
    priority.appendChild(high);
    priority.appendChild(normal);
    priority.appendChild(low);
    if (todoformtype == 'edit') {
        if (todoprio == 'High') {
        priority.value = high.value;
        }
        if (todoprio == 'Normal') {
        priority.value = normal.value;
        }
        if (todoprio == 'Low') {
        priority.value = low.value;
        }
    };

    secondtodo.appendChild(prioritycontainer);
    prioritycontainer.appendChild(priority);
    prioritycontainer.appendChild(prioritylabel);

    let fourthtodo = document.createElement('div');
    fourthtodo.setAttribute('id', 'fourthtodo');
    todoform.appendChild(fourthtodo);

    let submittask = document.createElement('button');
    submittask.setAttribute('type', 'submit');
    submittask.setAttribute('required', '');
    submittask.setAttribute('id', 'submittask');
    if (todoformtype == 'create') {
    submittask.textContent = 'Create Task';
    }
    else if (todoformtype == 'edit') {
    submittask.textContent = 'Submit';
    }

    fourthtodo.appendChild(submittask);

    submittask.addEventListener('click', (e) => {
        e.preventDefault();
            if (todoform.reportValidity() === true) {
            if (todoformtype == 'create') {
            let projectparent = todoform.parentElement.parentElement.parentElement;
            let parentID = projectparent.id;
            let parentnum = parentID.replace(/\D/g, "");
            let projecttaskcont = projectparent.lastChild;
            projecttaskcont.appendChild(toDoTile(parentnum, taskname.value, descrip.value, date.value, priority.value));
            todoformcontainer.remove();
            projpagesarray[parentnum] = projectparent.outerHTML;
            localStorage.setItem('projectpages', JSON.stringify(projpagesarray));
            }
            else if (todoformtype == 'edit') {
            let projectparent = todoform.parentElement.parentElement.parentElement;
            let parentID = projectparent.id;
            let parentnum = parentID.replace(/\D/g, "");
            let todotile = document.getElementById(todotileid);
            console.log(todotileid);
            let tilechilds = todotile.childNodes;
            for (const child of tilechilds) {
                if (child.className == 'firstrow') {
                    let firstrowchilds = child.childNodes;
                    for (const rowchild of firstrowchilds) {
                        if (rowchild.className == 'tilename') {
                            rowchild.textContent = taskname.value;
                        }
                        if (rowchild.className == 'tiledate') {
                            rowchild.textContent = date.value;
                        }
                        if (rowchild.className == 'tileprio') {
                            rowchild.textContent = priority.value;
                        }
                    }
                }
                else if (child.className == 'descexpand') {
                    child.textContent = descrip.value;
                }
            }
            todoformcontainer.remove();
            projpagesarray[parentnum] = projectparent.outerHTML;
            localStorage.setItem('projectpages', JSON.stringify(projpagesarray));
            }
        } 


         })

    let canceltask = document.createElement('button');
    canceltask.setAttribute('type', 'submit');
    canceltask.setAttribute('required', '');
    canceltask.setAttribute('id', 'canceltask');
    canceltask.textContent = 'Cancel';

    canceltask.addEventListener('click', (e) => {
        todoform.remove();
        todoformcontainer.remove();
    })

    fourthtodo.appendChild(canceltask);

    return todoformcontainer;

}


const toDoTile = (tileid, todoname, tododescrip, tododate, todoprio) => {
    let todotilecontainer = document.createElement('div');
    todotilecontainer.setAttribute('class', `todotile tileofproj${tileid}`);
    let todotiles = document.getElementsByClassName('todotile')
    todotilecontainer.setAttribute('id', `tile${todotiles.length}`);
    todotilecontainer.style.width = pagecontainer.style.width;

    let firstrow = document.createElement('div');
    firstrow.setAttribute('class', 'firstrow');
    todotilecontainer.appendChild(firstrow);

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'checkbox');
    firstrow.appendChild(checkbox);

    checkbox.addEventListener('click', (e) => {
        if (checkbox.checked == true ) {
            todotilecontainer.style.color = 'rgba(211,211,211,0.5)';
            tiledescbutton.style.opacity = '0.5';
            editbutton.style.opacity = '0.5';
            deletebutton.style.opacity = '0.5';
        }
        else if (checkbox.checked == false) {
            todotilecontainer.style.color = 'black';
            tiledescbutton.style.opacity = '1';
            editbutton.style.opacity = '1';
            deletebutton.style.opacity = '1';
        }
    })

    let tilename = document.createElement('div');
    tilename.setAttribute('class', 'tilename');
    tilename.textContent = todoname;
    firstrow.appendChild(tilename);

    let tiledescdiv = document.createElement('div');
    tiledescdiv.setAttribute('class', 'tiledescdiv');
    firstrow.appendChild(tiledescdiv);
    let tiledescbutton = document.createElement('button');
    tiledescbutton.setAttribute('type', 'button');
    tiledescbutton.setAttribute('class', 'tiledescbutton');
    tiledescbutton.textContent = 'Desc.';
    tiledescdiv.appendChild(tiledescbutton);

    tiledescbutton.addEventListener('click', () => {
        if (descexpand.style.visibility == 'hidden') {
        descexpand.style.visibility = 'visible';
        descexpand.style.width = todotilecontainer.style.width;
        descexpand.style.height = 'fit-content';
        }

        else if (descexpand.style.visibility !== 'hidden') {
            descexpand.style.visibility = 'hidden';
            descexpand.style.width = '0px';
            descexpand.style.height = '0px';
        }
    })

    let tiledate = document.createElement('div');
    tiledate.textContent = tododate;
    tiledate.setAttribute('class', 'tiledate');
    firstrow.appendChild(tiledate);
    
    let tileprio = document.createElement('div');
    tileprio.textContent = todoprio;
    tileprio.setAttribute('class', 'tileprio');
    firstrow.appendChild(tileprio);

    let editbutton = document.createElement('button');
    editbutton.setAttribute('type', 'button');
    editbutton.setAttribute('class', 'editbutton');
    let editbuttonpic = document.createElement('img');
    editbuttonpic.setAttribute('class', 'editbuttonpic');
    editbuttonpic.src = _pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
    editbutton.appendChild(editbuttonpic);

    firstrow.appendChild(editbutton);

    editbutton.addEventListener('click', (e) => {
        if (e.target.className == 'editbuttonpic') {
        let todotileid = e.target.parentElement.parentElement.parentElement.id;
        console.log(todotileid);
        let todopopups = document.getElementsByClassName('todopopup');
        for (const popup of todopopups) {
        if (popup.parentElement.style.visibility !== 'hidden') {
        if (!document.forms[0]) {
        popup.appendChild(toDoForms('edit', tilename.textContent, descexpand.textContent, tiledate.textContent, tileprio.textContent, todotileid));
    }}}
        }
        if (e.target.className == 'editbutton') {
        let todotileid = e.target.parentElement.parentElement.id;
        console.log(todotileid);
        let todopopups = document.getElementsByClassName('todopopup');
        for (const popup of todopopups) {
        if (popup.parentElement.style.visibility !== 'hidden') {
        if (!document.forms[0]) {
        popup.appendChild(toDoForms('edit', tilename.textContent, descexpand.textContent, tiledate.textContent, tileprio.textContent, todotileid));
    }}}
        }
        })

    let deletebutton = document.createElement('button');
    deletebutton.setAttribute('type', 'button');
    deletebutton.setAttribute('class', 'deletebutton');
    let deletebuttonpic = document.createElement('img');
    deletebuttonpic.setAttribute('class', 'deletebuttonpic');
    deletebuttonpic.src = _delete_svg__WEBPACK_IMPORTED_MODULE_2__;
    deletebutton.appendChild(deletebuttonpic);
    firstrow.appendChild(deletebutton);

    deletebutton.addEventListener('click', (e) => {
        let page = todotilecontainer.parentElement.parentElement;
        let pageid = page.id;
        let pagenum = pageid.replace(/\D/g, "");
        todotilecontainer.remove();
        projpagesarray[pagenum] = page.outerHTML;
            localStorage.setItem('projectpages', JSON.stringify(projpagesarray));

    })

    let descexpand = document.createElement('div');
    descexpand.setAttribute('class', 'descexpand');
    descexpand.textContent = `${tododescrip}`;
    descexpand.style.visibility = 'hidden';
    descexpand.style.width = '0px';
    descexpand.style.height = '0px';
    todotilecontainer.appendChild(descexpand);

    return todotilecontainer;

}


const projectTile = (projectname) => {
    let projtile = document.createElement('button');
    projtile.setAttribute('class', 'projecttile');
    projtile.textContent = projectname;
    projtile.setAttribute('id', `project${projarray.length}`);
    let projTileList = document.getElementById('projTileList');
    projTileList.appendChild(projtile);
    storeprojects(projtile.id);

    projtile.addEventListener('click', (e) => {
        let descs = document.getElementsByClassName('descexpand');
        if (descs.length !== null) {
            for (const desc of descs) {
                desc.style.visibility = 'hidden';
                desc.style.width = '0px';
                desc.style.height = '0px;'
            }
        } 
        clearforms();
        sorttodos();
        let pagecontainer = document.getElementById('pagecontainer');
        let pagenodes = pagecontainer.childNodes;
        for (const node of pagenodes) {
            if (node.style.visibility !== 'hidden') {
                node.style.visibility = 'hidden';
                node.style.width = '0px';
                node.style.height = '0px';
            }
        }
        let tileid = e.target.id;
        let tileidnum = tileid.replace(/\D/g, "");
        let projpage = document.getElementById(`projpage${tileidnum}`);
        projpage.style.visibility = 'visible';
        projpage.style.width = pagecontainer.style.width
        projpage.style.height = 'fit-content';
        let taskcont = projpage.querySelector('.taskscontainer');
        let projpagetasks = document.getElementsByClassName(`tileofproj${tileidnum}`);
        for (const task of projpagetasks) {
            if (!taskcont.contains(task)){
            taskcont.appendChild(task);
            }
        }
        
        
    })
    
}

const editprojtile = (projname, projpagename) => {
    let projpagetitle = document.getElementsByClassName('projpagetitle');
    for (const title of projpagetitle) {
        if (title.parentElement.parentElement.style.visibility !== 'hidden') {
            title.textContent = projname;            
        }
    }
    let projpagenum = projpagename.replace(/\D/g, "");
    let projpage = document.getElementById(projpagename);
    projpagesarray[projpagenum] = projpage.outerHTML;
    localStorage.setItem('projectpages', JSON.stringify(projpagesarray));
    let projtile = document.getElementById(`project${projpagenum}`);
    projtile.textContent = projname;
    projarray[projpagenum] = projtile.outerHTML;
    localStorage.setItem('projects', JSON.stringify(projarray));
    }

const deleteprojtile = () => {
    let projpage = document.getElementsByClassName('projectpage');
    for (const page of projpage) {
        if (page.style.visibility !== 'hidden') {
            let projectpageid = page.id;
            let pageidnum = projectpageid.replace(/\D/g, "");
            (0,_todointerfacers_js__WEBPACK_IMPORTED_MODULE_0__.deleteproj)(pageidnum);
            let projtile = document.getElementById(`project${pageidnum}`);
            page.remove();
            projtile.remove();
        }
    }
}

const taskheaders = () => {
    let pagecontainer = document.getElementById('pagecontainer');

    let taskheaders = document.createElement('div');
    taskheaders.setAttribute('class', 'taskheaders');
    taskheaders.style.width = pagecontainer.style.width;

    let nameheader = document.createElement('div');
    nameheader.setAttribute('class', 'nameheader');
    nameheader.textContent = 'Name';
    taskheaders.appendChild(nameheader);

    let descheader = document.createElement('div');
    descheader.setAttribute('class', 'descheader');
    descheader.textContent = 'Desc.';
    taskheaders.appendChild(descheader);

    let dateheader = document.createElement('div');
    dateheader.setAttribute('class', 'dateheader');
    dateheader.textContent = 'Due Date';
    taskheaders.appendChild(dateheader);

    let prioheader = document.createElement('div');
    prioheader.setAttribute('class', 'prioheader');
    prioheader.textContent = 'Priority';
    taskheaders.appendChild(prioheader);

    let editheader = document.createElement('div');
    editheader.setAttribute('class', 'editheader');
    editheader.textContent = 'Edit';
    taskheaders.appendChild(editheader);

    return taskheaders;
}


const projectpage = (projectname) => {

    let pagecontainer = document.getElementById('pagecontainer');
    let projectpage = document.createElement('div');
    projectpage.setAttribute('class', 'projectpage');
    projectpage.setAttribute('id', `projpage${projpagesarray.length}`);
    pagecontainer.appendChild(projectpage);
    let projtitleline = document.createElement('div');
    projtitleline.setAttribute('class', 'projtitleline');
    projectpage.appendChild(projtitleline);

    let projpagetitle = document.createElement('div');
    projpagetitle.setAttribute('class', 'projpagetitle');
    projpagetitle.textContent = `${projectname}`;
    projtitleline.appendChild(projpagetitle);

    let projedit = document.createElement('button');
    projedit.setAttribute('class', 'projedit');
    let projeditpic = document.createElement('img');
    projeditpic.setAttribute('class', 'projeditpic');
    projeditpic.src = _pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
    projedit.appendChild(projeditpic);
    projtitleline.appendChild(projedit);

    let editprojform = document.createElement('div');
    editprojform.setAttribute('class', 'editprojform');
    projectpage.appendChild(editprojform);

    let divprojtask = document.createElement('div');
    divprojtask.setAttribute('class', 'divprojtask');
    projectpage.appendChild(divprojtask);
    let projtask = document.createElement('button');
    projtask.setAttribute('class', 'projtask')
    projtask.textContent = 'New Task';
    divprojtask.appendChild(projtask);

    let todopopup = document.createElement('div');
    todopopup.setAttribute('class', 'todopopup');
    projectpage.appendChild(todopopup);
    
    projectpage.appendChild(taskheaders());

    let taskscontainer = document.createElement('div');
    taskscontainer.setAttribute('class', 'taskscontainer');
    projectpage.appendChild(taskscontainer);

    storeprojpages(projectpage.id);

    let projpages = document.getElementsByClassName('projectpage');
    
    for (var x=0; x < (projpages.length - 1); ++x) {
        projpages[x].style.visibility = 'hidden';
        projpages[x].style.width = '0px';
        projpages[x].style.height = '0px';
    }
    
    let periodpages = document.getElementsByClassName('periodcontainer');

    for (var x=0; x < (periodpages.length - 1); ++x) {
        periodpages[x].style.visibility = 'hidden';
        periodpages[x].style.width = '0px';
        periodpages[x].style.height = '0px';
    }

    
    projedit.addEventListener('click', (e) => {
        if (!document.forms[0]) {
        let projtitle = e.currentTarget.previousElementSibling;
        let projname = projtitle.textContent;
        editprojform.appendChild(projectForms('edit', projname));
    }})

    
    projtask.addEventListener('click', (e) => {
        if (!document.forms[0]) {
        todopopup.appendChild(toDoForms('create'));
    }})
}
    



const projectForms = (projformtype, projectname) => {
        let projectform = document.createElement('form');
        projectform.setAttribute('id', 'projectform');
        projectform.setAttribute('class', 'form');
        
        let projformtitle = document.createElement('div');
        projformtitle.setAttribute('id', 'projformtitle');
        if (projformtype == 'create') {
        projformtitle.textContent = 'New Project';
        }
        else if (projformtype == 'edit') {
        projformtitle.textContent = 'Edit Project';
        }
        projectform.appendChild(projformtitle);

        let projinputcontainer = document.createElement('div');
        projinputcontainer.setAttribute('id', 'projinputcontainer');
        let projinput = document.createElement('input');
        projinput.setAttribute('type', 'text');
        projinput.setAttribute('id', 'projinput');
        projinput.setAttribute('required', '');
        if (projformtype == 'edit') {
            projinput.defaultValue = projectname;
        }
        let projlabel = document.createElement('label');
        projlabel.setAttribute('for', 'projinput');
        if (projformtype == 'create') {
        projlabel.setAttribute('id', 'projlabelcreate');
        projlabel.textContent = 'Project Name: ';
        }
        else if (projformtype == 'edit') {
        projlabel.setAttribute('id', 'projlabeledit');
        projlabel.textContent = 'Change Project Name: ';
        }
        projinputcontainer.appendChild(projinput);
        projinputcontainer.appendChild(projlabel);
        projectform.appendChild(projinputcontainer);

        let projformbtns = document.createElement('div');
        projformbtns.setAttribute('id', 'projformbtns');
        projectform.appendChild(projformbtns);

        let projsubmit = document.createElement('button');
        projsubmit.setAttribute('type', 'submit');
        projsubmit.setAttribute('id', 'projsubmit');
        if (projformtype == 'create') {
        projsubmit.textContent = 'Add Project';
        }
        else if (projformtype == 'edit') {
        projsubmit.textContent = 'Save Changes';
        }
        projformbtns.appendChild(projsubmit);

        projsubmit.addEventListener('click', (e) => {
            e.preventDefault();
            if (projectform.reportValidity() === true) {

            if (projformtype === 'create') {
                let pagecontainer = document.getElementById('pagecontainer');
                let pagechilds = pagecontainer.childNodes;
                for (const child of pagechilds) {
                    child.style.visibility = 'hidden';
                    child.style.width = '0px';
                    child.style.height = '0px';
                }
                projectTile(projinput.value);
                projectpage(projinput.value);
                projectform.remove();
                projectpopup.remove();
            }

            else if (projformtype === 'edit') {
                let projid = projectform.parentElement.parentElement.id;
                let newname = projinput.value;
                projectform.remove();
                editprojtile(newname, projid);
            }

            
        }
        })

        let projcancel = document.createElement('button');
        projcancel.setAttribute('id', 'projcancel');
        projcancel.setAttribute('type', 'button');
        projcancel.textContent = 'Cancel';
        projformbtns.appendChild(projcancel);
        projcancel.addEventListener('click', () => {

            if (projformtype === 'create') {
            projectform.remove();
            projectpopup.remove();
            }

            else if (projformtype === 'edit') {
                projectform.remove();
            }
        })
        
        if (projformtype === 'edit') {
        let projdelete = document.createElement('button');
        projdelete.setAttribute('type', 'button');
        projdelete.setAttribute('id', 'projdelete');
        projdelete.textContent = 'Delete Project';
        projectform.appendChild(projdelete);

        projdelete.addEventListener('click', () => {
            
            deleteprojtile();
            projectform.remove();
        }) 

    }

    return projectform;
}

const sorttodos = () => {
    let projpages = document.getElementsByClassName('projectpage');
    let projtodos = document.querySelectorAll('todotile');
    for (let x=0; x < (projpages.length); ++x) {
        let project = document.getElementById(`projpage${x}`);
        let projectchilds = project.childNodes;
        let todoclass = document.querySelectorAll(`tileofproj${x}`);
        for (const child of projectchilds) {
            if (child.className == 'taskscontainer') {
                for (let k=0; k < (todoclass.length); ++k) {
                    if (!child.contains(todoclass[k])) {
                        child.appendChild(todoclass[k]);
                    }
                }
            }
        }
    }
}


const periodpage = (period) => {

    let pagecontainer = document.getElementById('pagecontainer');
    let periodcontainer = document.createElement('div');
    periodcontainer.setAttribute('class', 'periodcontainer');
    pagecontainer.appendChild(periodcontainer);


    let periodtitle = document.createElement('div');
    periodtitle.setAttribute('class', 'periodtitle')
    if (period == 'home') {
    periodcontainer.setAttribute('id', 'homeperiod');
    periodtitle.textContent = 'Home';
    }
    else if (period == 'today') {
    periodcontainer.setAttribute('id', 'todayperiod');
    periodtitle.textContent = 'Today';
    }
    else if (period == 'week') {
    periodcontainer.setAttribute('id', 'weekperiod');
    periodtitle.textContent = 'This Week';
    }

    periodcontainer.appendChild(periodtitle);

    let todopopup = document.createElement('div');
    todopopup.setAttribute('class', 'todopopup');
    periodcontainer.appendChild(todopopup);

    periodcontainer.appendChild(taskheaders());
    
    let periodtaskcontainer = document.createElement('div');
    periodtaskcontainer.setAttribute('class', 'periodtaskcontainer');
    periodcontainer.appendChild(periodtaskcontainer);


    return periodcontainer;
}

const sorttiles = (period) => {
    clearforms();
    let todotiles = [].slice.call(document.getElementsByClassName('todotile'));
    let tiledates = [].slice.call(document.getElementsByClassName('tiledate'));


    if (period == 'home') {
        let homeperiod = document.getElementById('homeperiod');
        let homechilds = homeperiod.childNodes;
        for (const child of homechilds) {
            if (child.className == 'periodtaskcontainer') {
            for (let x=0; x < (todotiles.length); ++x) {
                child.appendChild(todotiles[x]);
                console.log(todotiles.length);
            }
            }
        }
    }

    else if (period == 'today') {
        let todayperiod = document.getElementById('todayperiod');
        let todaychilds = todayperiod.childNodes;
        for (const child of todaychilds) {
            if (child.className == 'periodtaskcontainer') {
            for (let x=0; x < (todotiles.length); ++x) { 
                    let date = (0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__["default"])(tiledates[x].textContent);
                    if ((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_4__["default"])(date) == true) {
                        child.appendChild(todotiles[x])
                        
                }
            }
        }  
        }
    }

    else if (period == 'week') {
        let weekperiod = document.getElementById('weekperiod');
        let weekchilds = weekperiod.childNodes;
        for (const child of weekchilds) {
            if (child.className == 'periodtaskcontainer') {
            for (let x=0; x < (todotiles.length); ++x) {
                    let date = (0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__["default"])(tiledates[x].textContent);
                    if ((0,date_fns_isSameWeek__WEBPACK_IMPORTED_MODULE_5__["default"])(date, (new Date)) == true) {
                        child.appendChild(todotiles[x])
                    }
                }
        }
    }
}
}






/***/ }),

/***/ "./src/todofns.js":
/*!************************!*\
  !*** ./src/todofns.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushtoDo": () => (/* binding */ PushtoDo),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteToDo": () => (/* binding */ deleteToDo),
/* harmony export */   "descriptionUpdate": () => (/* binding */ descriptionUpdate),
/* harmony export */   "dueDateUpdate": () => (/* binding */ dueDateUpdate),
/* harmony export */   "myProjects": () => (/* binding */ myProjects),
/* harmony export */   "mytoDos": () => (/* binding */ mytoDos),
/* harmony export */   "priorityUpdate": () => (/* binding */ priorityUpdate),
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projectToDos": () => (/* binding */ projectToDos),
/* harmony export */   "pushProject": () => (/* binding */ pushProject),
/* harmony export */   "titleUpdate": () => (/* binding */ titleUpdate),
/* harmony export */   "toDo": () => (/* binding */ toDo)
/* harmony export */ });

const toDo = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority}
};

let mytoDos = [];

const PushtoDo = (toDoItem) => {
    mytoDos.push(toDoItem);
}

const titleUpdate = (toDoItem, newTitle) => {
    toDoItem.title = newTitle;
    return {toDoItem};
}

const descriptionUpdate = (toDoItem, newDescription) => {
    toDoItem.description = newDescription;
    return {toDoItem};
}

const dueDateUpdate = (toDoItem, newdueDate) => {
    toDoItem.dueDate = newdueDate;
    return {toDoItem};
}

const priorityUpdate = (toDoItem, newPriority) => {
    toDoItem.priority = newPriority;
    return {toDoItem};
}

const deleteToDo =  (toDoItem) => {
    toDoItem = null;
    return {toDoItem};
}

const project = (title) => {
    const projectArray = () => [];
    return {title, projectArray}
}

let myProjects = [];

const pushProject = (projectItem) => {
    myProjects.push(projectItem);
}

const deleteProject = (projectItem) => {
    projectItem = null;
    return {projectItem}
}

const projectToDos = (projectItem, toDoItem) => {
    projectItem.push(toDoItem);
}



/***/ }),

/***/ "./src/todointerfacers.js":
/*!********************************!*\
  !*** ./src/todointerfacers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createprojtile": () => (/* binding */ createprojtile),
/* harmony export */   "deleteproj": () => (/* binding */ deleteproj),
/* harmony export */   "projpageID": () => (/* binding */ projpageID)
/* harmony export */ });
/* harmony import */ var _todofns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todofns.js */ "./src/todofns.js");


const createprojtile = (projname) => {
    let newproject = () => (0,_todofns_js__WEBPACK_IMPORTED_MODULE_0__.project)(projname);
    (0,_todofns_js__WEBPACK_IMPORTED_MODULE_0__.pushProject)(projname);
    let projectID = () => `project${_todofns_js__WEBPACK_IMPORTED_MODULE_0__.myProjects.length-1}`;
    return {newproject, projectID};
};

const projpageID = () => {
    let pageID = () => `projpage${_todofns_js__WEBPACK_IMPORTED_MODULE_0__.myProjects.length-1}`;
    return {pageID}
} 

const deleteproj = (projnum) => {
    let projectItem = _todofns_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[projnum];
    (0,_todofns_js__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(projectItem);
}









/***/ }),

/***/ "./src/Literata-VariableFont_opsz,wght.ttf":
/*!*************************************************!*\
  !*** ./src/Literata-VariableFont_opsz,wght.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76a004692cab432f9991.ttf";

/***/ }),

/***/ "./src/apps.svg":
/*!**********************!*\
  !*** ./src/apps.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31b500039c229bc9dae8.svg";

/***/ }),

/***/ "./src/calendar-today.svg":
/*!********************************!*\
  !*** ./src/calendar-today.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "233385e32206cd372d69.svg";

/***/ }),

/***/ "./src/calendar-week.svg":
/*!*******************************!*\
  !*** ./src/calendar-week.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "518ff47ec29e1552eabd.svg";

/***/ }),

/***/ "./src/clipboard-text-multiple-outline.svg":
/*!*************************************************!*\
  !*** ./src/clipboard-text-multiple-outline.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad452e7e1664eae9c854.svg";

/***/ }),

/***/ "./src/delete.svg":
/*!************************!*\
  !*** ./src/delete.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bde675c38d54979f589e.svg";

/***/ }),

/***/ "./src/home.svg":
/*!**********************!*\
  !*** ./src/home.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8c7c536d6f704fbe961.svg";

/***/ }),

/***/ "./src/pencil-outline.svg":
/*!********************************!*\
  !*** ./src/pencil-outline.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c11ca64583db9195885d.svg";

/***/ }),

/***/ "./src/plus-circle-outline.svg":
/*!*************************************!*\
  !*** ./src/plus-circle-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b254db15a65e85097053.svg";

/***/ }),

/***/ "./src/theme-light-dark.svg":
/*!**********************************!*\
  !*** ./src/theme-light-dark.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c3900177461bf58becc.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clipboard_text_multiple_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clipboard-text-multiple-outline.svg */ "./src/clipboard-text-multiple-outline.svg");
/* harmony import */ var _apps_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps.svg */ "./src/apps.svg");
/* harmony import */ var _calendar_today_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-today.svg */ "./src/calendar-today.svg");
/* harmony import */ var _calendar_week_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-week.svg */ "./src/calendar-week.svg");
/* harmony import */ var _home_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.svg */ "./src/home.svg");
/* harmony import */ var _plus_circle_outline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plus-circle-outline.svg */ "./src/plus-circle-outline.svg");
/* harmony import */ var _theme_light_dark_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-light-dark.svg */ "./src/theme-light-dark.svg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tododoms_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tododoms.js */ "./src/tododoms.js");
/* harmony import */ var _todofns_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todofns.js */ "./src/todofns.js");
/* harmony import */ var _todointerfacers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todointerfacers.js */ "./src/todointerfacers.js");













const component = () => {
    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    const titleBlock = document.createElement('div');
    titleBlock.setAttribute('id', 'titleBlock');
    main.appendChild(titleBlock);

    const pagecontainer = document.createElement('div');
    pagecontainer.setAttribute('id', 'pagecontainer');
    main.appendChild(pagecontainer); 

    const menuToggle = document.createElement('button');
    menuToggle.setAttribute('id', 'menuToggle');
    const menuTogglePic = document.createElement('img');
    menuTogglePic.setAttribute('id', 'menuTogglePic');
    menuTogglePic.src = _apps_svg__WEBPACK_IMPORTED_MODULE_1__;
    menuToggle.appendChild(menuTogglePic);
    titleBlock.appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
        if (menu.style.visibility !== 'hidden') {
            menu.style.visibility = 'hidden';
            pagecontainer.style.gridColumn = '1/3';
        }

        else if (menu.style.visibility == 'hidden') {
            menu.style.visibility = 'visible';
            pagecontainer.style.gridColumn = '2/3';
        }
     })


    const titleMain = document.createElement('div');
    titleMain.setAttribute('id', 'titleMain');
    const titlePic = document.createElement('img');
    titlePic.setAttribute('id', 'titlePic');
    titlePic.src = _clipboard_text_multiple_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
    titleMain.appendChild(titlePic);
    titleBlock.appendChild(titleMain);

    const titleText = document.createElement('div');
    titleText.setAttribute('id', 'titleText');
    titleText.textContent = 'To-Do List';
    titleMain.appendChild(titleText);
    

    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    main.appendChild(menu);

    const periodLists = document.createElement('div');
    periodLists.setAttribute('id', 'periodLists');
    menu.appendChild(periodLists);

    const home = document.createElement('button');
    home.setAttribute('id', 'home');
    home.textContent = 'Home'
    periodLists.appendChild(home);
    const homePic = document.createElement('img');
    homePic.setAttribute('id', 'homePic')
    homePic.src = _home_svg__WEBPACK_IMPORTED_MODULE_4__;
    home.appendChild(homePic);


    let homecounter = 0;
    let todaycounter = 0;
    let weekcounter = 0;



    home.addEventListener('click', (e) => {
        let descs = document.getElementsByClassName('descexpand');
        if (descs.length !== null) {
            for (const desc of descs) {
                desc.style.visibility = 'hidden';
                desc.style.width = '0px';
                desc.style.height = '0px;'
            }
        }
        homecounter += 1;

        if (homecounter == 1) {
        pagecontainer.appendChild((0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.periodpage)('home'));
        }

        else if (homecounter > 1) {
            (0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.sorttodos)();
            let homeperiod = document.getElementById('homeperiod');
            homeperiod.style.visibility = 'visible';
            homeperiod.style.width = pagecontainer.style.width;
            homeperiod.style.height = 'fit-content';
        }

        let pagechilds = pagecontainer.childNodes; 

        for (const child of pagechilds) {
            if (child.id !== 'homeperiod') {
                child.style.visibility = 'hidden';
                child.style.width = '0px';
                child.style.height = '0px';
            }
        }

        (0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.sorttiles)('home')
    })

    const today = document.createElement('button');
    today.setAttribute('id', 'today');
    today.textContent = 'Today'
    periodLists.appendChild(today);
    const todayPic = document.createElement('img');
    todayPic.setAttribute('id', 'todayPic')
    todayPic.src = _calendar_today_svg__WEBPACK_IMPORTED_MODULE_2__;
    today.appendChild(todayPic);

    today.addEventListener('click', (e) => {
        let descs = document.getElementsByClassName('descexpand');
        if (descs.length !== null) {
            for (const desc of descs) {
                desc.style.visibility = 'hidden';
                desc.style.width = '0px';
                desc.style.height = '0px;'
            }
        }
        todaycounter += 1;

        if (todaycounter == 1) {
            pagecontainer.appendChild((0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.periodpage)('today'))
        }

        else if (todaycounter > 1) {
            (0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.sorttodos)();
            let todayperiod = document.getElementById('todayperiod');
            todayperiod.style.visibility = 'visible';
            todayperiod.style.width = pagecontainer.style.width;
            todayperiod.style.height = 'fit-content';
        }

        let pagechilds = pagecontainer.childNodes; 

        for (const child of pagechilds) {
            if (child.id !== 'todayperiod') {
                child.style.visibility = 'hidden';
                child.style.width = '0px';
                child.style.height = '0px';
            }
        }

        (0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.sorttiles)('today');
    })

    const thisWeek = document.createElement('button');
    thisWeek.setAttribute('id', 'thisWeek');
    thisWeek.textContent = 'This Week'
    periodLists.appendChild(thisWeek);
    const thisWeekPic = document.createElement('img');
    thisWeekPic.setAttribute('id', 'thisWeekPic')
    thisWeekPic.src = _calendar_week_svg__WEBPACK_IMPORTED_MODULE_3__;
    thisWeek.appendChild(thisWeekPic);

    thisWeek.addEventListener('click', (e) => {
        let descs = document.getElementsByClassName('descexpand');
        if (descs.length !== null) {
            for (const desc of descs) {
                desc.style.visibility = 'hidden';
                desc.style.width = '0px';
                desc.style.height = '0px;'
            }
        }

        weekcounter += 1;

        if (weekcounter == 1) {
            pagecontainer.appendChild((0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.periodpage)('week'))
        }

        else if (weekcounter > 1) {
            (0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.sorttodos)();
            let weekperiod = document.getElementById('weekperiod');
            weekperiod.style.visibility = 'visible';
            weekperiod.style.width = pagecontainer.style.width;
            weekperiod.style.height = 'fit-content';
        }


        let pagechilds = pagecontainer.childNodes; 

        for (const child of pagechilds) {
            if (child.id !== 'weekperiod') {
                child.style.visibility = 'hidden';
                child.style.width = '0px';
                child.style.height = '0px';
            }
        }

        (0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.sorttiles)('week');
    })

    const projectLists = document.createElement('div');
    projectLists.setAttribute('id', 'projectLists');
    menu.appendChild(projectLists);

    const projListTitle = document.createElement('div');
    projListTitle.setAttribute('id', 'projListTitle');
    projectLists.appendChild(projListTitle);

    const projListText = document.createElement('div');
    projListText.setAttribute('id', 'projListText');
    projListText.textContent = 'Projects: ';
    projListTitle.appendChild(projListText);


    const projAddButton = document.createElement('button');
    projAddButton.setAttribute('id', 'projAddButton');
    projListTitle.appendChild(projAddButton);
    const projAddButtonPic = document.createElement('img');
    projAddButtonPic.setAttribute('id', 'projAddButtonPic');
    projAddButtonPic.src = _plus_circle_outline_svg__WEBPACK_IMPORTED_MODULE_5__;
    projAddButton.appendChild(projAddButtonPic);

    const projectformcontainer = document.createElement('div');
    projectformcontainer.setAttribute('id', 'projectformcontainer');
    projectLists.appendChild(projectformcontainer);

    const projTileList = document.createElement('div');
    projTileList.setAttribute('id', 'projTileList');
    projectLists.appendChild(projTileList);

    projAddButton.addEventListener('click', () => {
        const projectpopup= document.createElement('div');
        projectpopup.setAttribute('id', 'projectpopup');
        if (!document.forms[0]) {
        projectpopup.appendChild((0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.projectForms)('create', ''));
        projectformcontainer.appendChild(projectpopup);
        }
    })

    
    window.addEventListener('load', (e) => {
        ;(0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.loadprojects)();
        (0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.loadprojpages)();
        if (projTileList.childNodes.length > 0) {  
            let descs = document.getElementsByClassName('descexpand');
        if (descs.length !== null) {
            for (const desc of descs) {
                desc.style.visibility = 'hidden';
                desc.style.width = '0px';
                desc.style.height = '0px;'
            }
        } 
        let tiles = document.getElementsByClassName('projecttile');
        console.log(tiles.length);
        for (const tile of tiles) {
            tile.addEventListener('click', (e) => {
                if (descs.length !== null) {
                    for (const desc of descs) {
                        desc.style.visibility = 'hidden';
                        desc.style.width = '0px';
                        desc.style.height = '0px;'
                    }
                } 
                (0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.sorttodos)();
                (0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.clearforms)();
                let pagecontainer = document.getElementById('pagecontainer');
                let pagenodes = pagecontainer.childNodes;
                for (const node of pagenodes) {
                    if (node.style.visibility !== 'hidden') {
                        node.style.visibility = 'hidden';
                        node.style.width = '0px';
                        node.style.height = '0px';
                    }
                }
                let tileid = e.target.id;
                let tileidnum = tileid.replace(/\D/g, "");
                let projpage = document.getElementById(`projpage${tileidnum}`);
                projpage.style.visibility = 'visible';
                projpage.style.width = pagecontainer.style.width
                projpage.style.height = 'fit-content';
                let taskcont = projpage.querySelector('.taskscontainer');
                let projpagetasks = document.getElementsByClassName(`tileofproj${tileidnum}`);
                for (const task of projpagetasks) {
                    if (!taskcont.contains(task)){
                    taskcont.appendChild(task);
                    }
                }
                
                let pagechildnodes = pagecontainer.childNodes;
                for (const node of pagechildnodes) {
                    if (node.classList.contains('projectpage')) {
                        let nodechildren = node.childNodes;
                        for (const child of nodechildren) {
                            if(child.classList.contains('projtitleline')) {
                                let titlelinechildren = child.childNodes;
                                for (const titlechild of titlelinechildren) {
                                    if (titlechild.classList.contains('projedit')) {
                                        titlechild.addEventListener('click', (e) => {
                                            if (!document.forms[0]) {
                                            let projtitle = e.currentTarget.previousElementSibling;
                                            let projname = projtitle.textContent;
                                            let editprojform = child.nextSibling;
                                            editprojform.appendChild((0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.projectForms)('edit', projname));
                                        }})
                                    }                               
                            }
                        }
                        else if (child.classList.contains('divprojtask')) {
                            let projtask = child.querySelector('.projtask');
                            projtask.addEventListener('click', (e) => {
                                if (!document.forms[0]) {
                                    let todopopup = child.nextSibling;
                                todopopup.appendChild((0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.toDoForms)('create'));
                            }})
                        }
                    }
    
                }}                
                
            })
        }
        let editbuttons = document.getElementsByClassName('editbutton');
        for (const btn of editbuttons) {
            btn.addEventListener('click', (e) => {
                if (e.target.className == 'editbuttonpic') {
                let todotileid = e.target.parentElement.parentElement.parentElement.id;
                let todochilds = document.getElementById(todotileid).childNodes;
                let firstrow = todochilds[0];
                let firstrowchilds = firstrow.childNodes;
                let tilename = firstrowchilds[1];
                console.log(tilename);
                let tiledate = firstrowchilds[3];
                let tileprio = firstrowchilds[4];
                let descexpand = todochilds[1];
                
                let todopopups = document.getElementsByClassName('todopopup');
                for (const popup of todopopups) {
                if (popup.parentElement.style.visibility !== 'hidden') {
                if (!document.forms[0]) {
                popup.appendChild((0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.toDoForms)('edit', tilename.textContent, descexpand.textContent, tiledate.textContent, tileprio.textContent, todotileid));
            }}}}
                
                if (e.target.className == 'editbutton') {
                let todotileid = e.target.parentElement.parentElement.id;
                let todochilds = document.getElementById(todotileid).childNodes;
                let firstrow = todochilds[0];
                let firstrowchilds = firstrow.childNodes;
                let tilename = firstrowchilds[1];
                console.log(tilename);
                let tiledate = firstrowchilds[3];
                let tileprio = firstrowchilds[4];
                let descexpand = todochilds[1];
                let todopopups = document.getElementsByClassName('todopopup');
                for (const popup of todopopups) {
                if (popup.parentElement.style.visibility !== 'hidden') {
                if (!document.forms[0]) {
                popup.appendChild((0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.toDoForms)('edit', tilename.textContent, descexpand.textContent, tiledate.textContent, tileprio.textContent, todotileid));
            }}}
                }
                })
            
        }
        let checkboxes = document.getElementsByClassName('checkbox');
        for (const box of checkboxes) {
            box.addEventListener('click', (e) => {
                if (box.checked == true ) {
                    let todotilecontainer = box.parentElement.parentElement;
                    let firstrow = box.parentElement;
                    let firstchilds = firstrow.childNodes;
                    let tiledescbutton = firstchilds[2];
                    let editbutton = firstchilds[5];
                    let deletebutton = firstchilds[6];
                    todotilecontainer.style.color = 'rgba(211,211,211,0.5)';
                    tiledescbutton.style.opacity = '0.5';
                    editbutton.style.opacity = '0.5';
                    deletebutton.style.opacity = '0.5';
                }
                else if (box.checked == false) {
                    let todotilecontainer = box.parentElement.parentElement;
                    let firstrow = box.parentElement;
                    let firstchilds = firstrow.childNodes;
                    let tiledescbutton = firstchilds[2];
                    let editbutton = firstchilds[5];
                    let deletebutton = firstchilds[6];
                    todotilecontainer.style.color = 'black';
                    tiledescbutton.style.opacity = '1';
                    editbutton.style.opacity = '1';
                    deletebutton.style.opacity = '1';
                }
            })
        }

        (0,_tododoms_js__WEBPACK_IMPORTED_MODULE_8__.updtprojdel)();

        let descbuttons = document.getElementsByClassName('tiledescbutton');
        for (const btn of descbuttons) {
        btn.addEventListener('click', (e) => {
            let parentdesc = e.target.parentElement.parentElement.parentElement;
            let descexpand = parentdesc.lastChild;
            if (descexpand.style.visibility == 'hidden') {
            descexpand.style.visibility = 'visible';
            descexpand.style.width = parentdesc.style.width;
            descexpand.style.height = 'fit-content';
            }
            else if (descexpand.style.visibility !== 'hidden') {
                descexpand.style.visibility = 'hidden';
                descexpand.style.width = '0px';
                descexpand.style.height = '0px';
            }
        })
    }

        }
    })

    

    return main;
    
}

document.body.appendChild(component());


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FB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QTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEx5QztBQUNTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsMkJBQTJCLGdFQUFVO0FBQ3JDLDRCQUE0QixnRUFBVTtBQUN0QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENrRDtBQUNPOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixXQUFXLGVBQWU7QUFDMUIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLDRCQUE0QixpRUFBVztBQUN2Qyw2QkFBNkIsaUVBQVc7QUFDeEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNDOEM7QUFDVztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsU0FBUywrREFBUztBQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmlGO0FBQ3hCO0FBQ047QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxxQkFBcUI7QUFDL0Q7QUFDQTs7QUFFZTtBQUNmOztBQUVBLEVBQUUsc0VBQVk7QUFDZCx5QkFBeUIsbUVBQVM7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUU7QUFDeEUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUU7QUFDMUUsZ0NBQWdDLEVBQUUsVUFBVSxFQUFFOztBQUU5QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLEVBQUUsU0FBUywrQkFBK0IsT0FBTyxFQUFFLFNBQVMsK0JBQStCO0FBQzlILDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsbUVBQWtCLGFBQWEscUVBQW9CO0FBQ3BFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLG1FQUFrQixhQUFhLHFFQUFvQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDelF3QztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCd0M7QUFDVztBQUNNO0FBQ1c7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVEsaUVBQWlFO0FBQ3BGLFdBQVcsZUFBZTtBQUMxQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGlCQUFpQjtBQUNsRjtBQUNBOztBQUVlO0FBQ2Y7O0FBRUEsRUFBRSxzRUFBWTtBQUNkLHVCQUF1QiwrRUFBaUI7QUFDeEMscUJBQXFCLG1FQUFTLDIyQkFBMjJCOztBQUV6NEI7QUFDQTtBQUNBOztBQUVBLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqRHlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsME9BQTBPOztBQUUxTztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjRFO0FBQ2pDO0FBQ047QUFDRTtBQUNNO0FBQ0o7O0FBRXpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHVEQUFTO0FBQzNDO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSxRQUFRLHlEQUFXOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9kb21zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb2Zucy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9pbnRlcmZhY2Vycy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vTGl0ZXJhdGEtVmFyaWFibGVGb250X29wc3osd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMaXRlcmF0YSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGl0ZXJhdGEnO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuODUpO1xcbiAgICB0cmFuc2Zvcm06IDAuN3M7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0xpdGVyYXRhJztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMDBweCwgMzAwcHgpIDFmcjtcXG59XFxuXFxuI3RpdGxlQmxvY2sge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0MDc0O1xcbiAgICBvcGFjaXR5OiAwLjk3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcXG59XFxuXFxuI3BhZ2Vjb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4jdGl0bGVCbG9jayBidXR0b24ge1xcbiAgICBtYXgtd2lkdGg6IDUwcHg7XFxufVxcblxcbiNtZW51VG9nZ2xlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuI21lbnVUb2dnbGVQaWMge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuI3RpdGxlTWFpbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jdGl0bGVQaWMge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdGl0bGVUZXh0IHtcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcbn1cXG5cXG5cXG5cXG5cXG4jbWVudSBpbWdbc3JjJD1cXFwiLnN2Z1xcXCJdIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIG1pbi13aWR0aDogMjBweDtcXG59XFxuXFxuI21lbnUge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE3MHB4IG1pbi1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU5MDAwO1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXt9XFxuXFxuI3BlcmlvZExpc3RzIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0M2OTk3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5cXG4jcGVyaW9kTGlzdHMge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4jaG9tZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbiN0b2RheSB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbiN0aGlzV2VlayB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbiNwcm9qZWN0TGlzdHMge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuI3Byb2pMaXN0VGl0bGUge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2pMaXN0VGV4dCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxOHB4ICsgMXZ3KTtcXG59XFxuXFxuI3Byb2pBZGRCdXR0b24ge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBwYWRkaW5nOiAxcHg7XFxuICAgIG1heC1oZWlnaHQ6IDM1cHg7XFxuICAgIG1heC13aWR0aDogMzVweDtcXG4gICAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbiNwcm9qQWRkQnV0dG9uUGljIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuI3Byb2plY3Rmb3JtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jcHJvamVjdGZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdMaXRlcmF0YSc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QURCRkY7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3Byb2pmb3JtdGl0bGUge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4jcHJvamlucHV0Y29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jcHJvamlucHV0IHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIFxcbn1cXG5cXG4jcHJvamZvcm1idG5zIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuXFxufVxcblxcbiNwcm9qZm9ybWJ0bnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuXFxuI3Byb2pkZWxldGUge1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBtYXgtd2lkdGg6IDE0NXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuI3Byb2psYWJlbGNyZWF0ZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNDBweDtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxufVxcblxcbiNwcm9qbGFiZWxlZGl0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC00MHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4jcHJvalRpbGVMaXN0IHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbiNwcm9qVGlsZUxpc3QgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0M2OTk3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0cGFnZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnBlcmlvZGNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucGVyaW9kY29udGFpbmVyID4gLnBlcmlvZHRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogIzA5NDA3NDtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4ucGVyaW9kY29udGFpbmVyID4gLnRvZG9wb3B1cCB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5wZXJpb2Rjb250YWluZXIgPiAudGFza2hlYWRlcnMge1xcbiAgICBncmlkLXJvdzogMy80O1xcbn1cXG5cXG4ucGVyaW9kY29udGFpbmVyID4gLnBlcmlvZHRhc2tjb250YWluZXIge1xcbiAgICBncmlkLXJvdzogNC81O1xcbn1cXG5cXG4ucHJvanRpdGxlbGluZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5wcm9qcGFnZXRpdGxlIHtcXG4gICAgY29sb3I6ICMwOTQwNzQ7XFxufVxcblxcbi5wcm9qZWRpdHBpYyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4ucHJvamVkaXQge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbi5lZGl0cHJvamZvcm0ge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGl2cHJvanRhc2sge1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2p0YXNrIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTkwMDA7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgXFxufVxcblxcbiN0b2RvcG9wdXAge1xcbiAgICBncmlkLXJvdzogNC81O1xcbn1cXG5cXG4jdG9kb2Zvcm1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbiN0b2RvZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgcm93LWdhcDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBREJGRjtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jdG9kb2Zvcm1jb250YWluZXIgaW5wdXQsICN0b2RvZm9ybWNvbnRhaW5lciBzZWxlY3R7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuI3RvZG9mb3JtY29udGFpbmVyIGxhYmVsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRvcDogLTI0cHg7XFxufVxcblxcbiN0b2RvZm9ybXRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI3NlY29uZHRvZG8ge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IDEyMnB4IDY1cHg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuI3Rhc2tuYW1lIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNkYXRlY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgd2lkdGg6IDEyMnB4O1xcbn1cXG5cXG5cXG4jcHJpb3JpdHljb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICB3aWR0aDogNjVweDtcXG59XFxuXFxuI2Rlc2NyaXBjb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMy80O1xcbn1cXG5cXG4jZm91cnRodG9kbyB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDE1cHg7XFxufVxcblxcbiNmb3VydGh0b2RvIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbiNzdWJtaXR0YXNrIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4jY2FuY2VsdGFzayB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuXFxuXFxuLnRhc2toZWFkZXJzIHtcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDUwcHgsIDI1MHB4KSBtaW5tYXgoNTBweCwgMjAwcHgpIG1pbm1heCg3NXB4LCAyMDBweCkgbWlubWF4KDc1cHgsIDIwMHB4KSA3MHB4O1xcbiAgICBjb2x1bW4tZ2FwOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2toZWFkZXJzOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm5hbWVoZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBtaW4td2lkdGg6IDUwcHg7XFxufVxcblxcbi5kZXNjaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgbWluLXdpZHRoOiA2MHB4O1xcbn1cXG5cXG4uZGF0ZWhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIG1pbi13aWR0aDogODVweDtcXG5cXG59XFxuXFxuLnByaW9oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogNC81O1xcbiAgICBtaW4td2lkdGg6IDY1cHg7XFxuXFxufVxcblxcbi50b2RvdGlsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uZmlyc3Ryb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCBhdXRvKTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgY29sdW1uLWdhcDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxufVxcblxcbi5maXJzdHJvdyBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5cXG4udG9kb3RpbGUgaW1nIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XFxuICAgIG1heC13aWR0aDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG4gICAgb3BhY2l0eTogMC44NTtcXG59XFxuXFxuLmVkaXRidXR0b24sIC5kZWxldGVidXR0b24ge1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnRpbGVuYW1lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoNTBweCwgMjUwcHgpO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBtaW4td2lkdGg6IDUwcHg7XFxufVxcblxcbi50aWxlZGVzY2RpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDYwcHgsIDIwMHB4KTtcXG4gICAgbWluLXdpZHRoOiA2MHB4O1xcbn1cXG5cXG4udGlsZWRlc2NidXR0b24ge1xcbiAgICB3aWR0aDogNjBweDtcXG59XFxuXFxuLnRpbGVkYXRlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoODVweCwgMjAwcHgpO1xcbiAgICBtaW4td2lkdGg6IDg1cHg7XFxufVxcblxcbi50aWxlcHJpbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDg1cHgsIDIwMHB4KTtcXG4gICAgbWluLXdpZHRoOiA2NXB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLmNoZWNrYm94OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVzY2V4cGFuZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBEQUErRDtJQUMvRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJDQUEyQztJQUMzQywrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7Ozs7O0FB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QWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0xpdGVyYXRhJztcXG4gICAgc3JjOiB1cmwoJy4vTGl0ZXJhdGEtVmFyaWFibGVGb250X29wc3osd2dodC50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGl0ZXJhdGEnO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuODUpO1xcbiAgICB0cmFuc2Zvcm06IDAuN3M7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0xpdGVyYXRhJztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMDBweCwgMzAwcHgpIDFmcjtcXG59XFxuXFxuI3RpdGxlQmxvY2sge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0MDc0O1xcbiAgICBvcGFjaXR5OiAwLjk3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcXG59XFxuXFxuI3BhZ2Vjb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4jdGl0bGVCbG9jayBidXR0b24ge1xcbiAgICBtYXgtd2lkdGg6IDUwcHg7XFxufVxcblxcbiNtZW51VG9nZ2xlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuI21lbnVUb2dnbGVQaWMge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuI3RpdGxlTWFpbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jdGl0bGVQaWMge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdGl0bGVUZXh0IHtcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcbn1cXG5cXG5cXG5cXG5cXG4jbWVudSBpbWdbc3JjJD1cXFwiLnN2Z1xcXCJdIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIG1pbi13aWR0aDogMjBweDtcXG59XFxuXFxuI21lbnUge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE3MHB4IG1pbi1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU5MDAwO1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXt9XFxuXFxuI3BlcmlvZExpc3RzIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0M2OTk3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5cXG4jcGVyaW9kTGlzdHMge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4jaG9tZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbiN0b2RheSB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbiN0aGlzV2VlayB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbiNwcm9qZWN0TGlzdHMge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuI3Byb2pMaXN0VGl0bGUge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2pMaXN0VGV4dCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxOHB4ICsgMXZ3KTtcXG59XFxuXFxuI3Byb2pBZGRCdXR0b24ge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBwYWRkaW5nOiAxcHg7XFxuICAgIG1heC1oZWlnaHQ6IDM1cHg7XFxuICAgIG1heC13aWR0aDogMzVweDtcXG4gICAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbiNwcm9qQWRkQnV0dG9uUGljIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuI3Byb2plY3Rmb3JtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jcHJvamVjdGZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdMaXRlcmF0YSc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QURCRkY7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3Byb2pmb3JtdGl0bGUge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4jcHJvamlucHV0Y29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jcHJvamlucHV0IHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIFxcbn1cXG5cXG4jcHJvamZvcm1idG5zIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuXFxufVxcblxcbiNwcm9qZm9ybWJ0bnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuXFxuI3Byb2pkZWxldGUge1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBtYXgtd2lkdGg6IDE0NXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuI3Byb2psYWJlbGNyZWF0ZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNDBweDtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxufVxcblxcbiNwcm9qbGFiZWxlZGl0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC00MHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4jcHJvalRpbGVMaXN0IHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbiNwcm9qVGlsZUxpc3QgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0M2OTk3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0cGFnZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnBlcmlvZGNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucGVyaW9kY29udGFpbmVyID4gLnBlcmlvZHRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogIzA5NDA3NDtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4ucGVyaW9kY29udGFpbmVyID4gLnRvZG9wb3B1cCB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5wZXJpb2Rjb250YWluZXIgPiAudGFza2hlYWRlcnMge1xcbiAgICBncmlkLXJvdzogMy80O1xcbn1cXG5cXG4ucGVyaW9kY29udGFpbmVyID4gLnBlcmlvZHRhc2tjb250YWluZXIge1xcbiAgICBncmlkLXJvdzogNC81O1xcbn1cXG5cXG4ucHJvanRpdGxlbGluZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5wcm9qcGFnZXRpdGxlIHtcXG4gICAgY29sb3I6ICMwOTQwNzQ7XFxufVxcblxcbi5wcm9qZWRpdHBpYyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4ucHJvamVkaXQge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbi5lZGl0cHJvamZvcm0ge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGl2cHJvanRhc2sge1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2p0YXNrIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTkwMDA7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgXFxufVxcblxcbiN0b2RvcG9wdXAge1xcbiAgICBncmlkLXJvdzogNC81O1xcbn1cXG5cXG4jdG9kb2Zvcm1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbiN0b2RvZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgcm93LWdhcDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBREJGRjtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jdG9kb2Zvcm1jb250YWluZXIgaW5wdXQsICN0b2RvZm9ybWNvbnRhaW5lciBzZWxlY3R7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuI3RvZG9mb3JtY29udGFpbmVyIGxhYmVsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRvcDogLTI0cHg7XFxufVxcblxcbiN0b2RvZm9ybXRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI3NlY29uZHRvZG8ge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IDEyMnB4IDY1cHg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuI3Rhc2tuYW1lIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNkYXRlY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgd2lkdGg6IDEyMnB4O1xcbn1cXG5cXG5cXG4jcHJpb3JpdHljb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICB3aWR0aDogNjVweDtcXG59XFxuXFxuI2Rlc2NyaXBjb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMy80O1xcbn1cXG5cXG4jZm91cnRodG9kbyB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDE1cHg7XFxufVxcblxcbiNmb3VydGh0b2RvIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbiNzdWJtaXR0YXNrIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4jY2FuY2VsdGFzayB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuXFxuXFxuLnRhc2toZWFkZXJzIHtcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDUwcHgsIDI1MHB4KSBtaW5tYXgoNTBweCwgMjAwcHgpIG1pbm1heCg3NXB4LCAyMDBweCkgbWlubWF4KDc1cHgsIDIwMHB4KSA3MHB4O1xcbiAgICBjb2x1bW4tZ2FwOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2toZWFkZXJzOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm5hbWVoZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBtaW4td2lkdGg6IDUwcHg7XFxufVxcblxcbi5kZXNjaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgbWluLXdpZHRoOiA2MHB4O1xcbn1cXG5cXG4uZGF0ZWhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIG1pbi13aWR0aDogODVweDtcXG5cXG59XFxuXFxuLnByaW9oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogNC81O1xcbiAgICBtaW4td2lkdGg6IDY1cHg7XFxuXFxufVxcblxcbi50b2RvdGlsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uZmlyc3Ryb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCBhdXRvKTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgY29sdW1uLWdhcDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxufVxcblxcbi5maXJzdHJvdyBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5cXG4udG9kb3RpbGUgaW1nIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XFxuICAgIG1heC13aWR0aDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG4gICAgb3BhY2l0eTogMC44NTtcXG59XFxuXFxuLmVkaXRidXR0b24sIC5kZWxldGVidXR0b24ge1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnRpbGVuYW1lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoNTBweCwgMjUwcHgpO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBtaW4td2lkdGg6IDUwcHg7XFxufVxcblxcbi50aWxlZGVzY2RpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDYwcHgsIDIwMHB4KTtcXG4gICAgbWluLXdpZHRoOiA2MHB4O1xcbn1cXG5cXG4udGlsZWRlc2NidXR0b24ge1xcbiAgICB3aWR0aDogNjBweDtcXG59XFxuXFxuLnRpbGVkYXRlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoODVweCwgMjAwcHgpO1xcbiAgICBtaW4td2lkdGg6IDg1cHg7XFxufVxcblxcbi50aWxlcHJpbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDg1cHgsIDIwMHB4KTtcXG4gICAgbWluLXdpZHRoOiA2NXB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLmNoZWNrYm94OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVzY2V4cGFuZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Y3JlYXRlcHJvanRpbGUsIHByb2pwYWdlSUQsIGRlbGV0ZXByb2p9IGZyb20gJy4vdG9kb2ludGVyZmFjZXJzLmpzJztcbmltcG9ydCBlZGl0cGljIGZyb20gJy4vcGVuY2lsLW91dGxpbmUuc3ZnJztcbmltcG9ydCBkZWxldGVwaWMgZnJvbSAnLi9kZWxldGUuc3ZnJztcbmltcG9ydCBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzVG9kYXknO1xuaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSAnZGF0ZS1mbnMvaXNTYW1lV2Vlayc7XG5pbXBvcnQgcGFyc2VJU08gZnJvbSAnZGF0ZS1mbnMvcGFyc2VJU08nO1xuXG5jb25zdCBwcm9qYXJyYXkgPSBbXTtcbmNvbnN0IHByb2pwYWdlc2FycmF5ID0gW107XG5cbmNvbnN0IHN0b3JlcHJvamVjdHMgPSAoaXRlbSkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbSk7XG4gICAgbGV0IGVsZW1lbnRzdHJpbmcgPSBlbGVtZW50Lm91dGVySFRNTDtcbiAgICBwcm9qYXJyYXkucHVzaChlbGVtZW50c3RyaW5nKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qYXJyYXkpKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qYXJyYXkubGVuZ3RoKTtcbn1cblxuY29uc3QgbG9hZHByb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcnVucGFja2VkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSB8fCAnW10nKTtcbiAgICBjb25zb2xlLmxvZyhwYXJ1bnBhY2tlZCk7XG4gICAgbGV0IHByb2pUaWxlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qVGlsZUxpc3QnKTtcbiAgICBwYXJ1bnBhY2tlZC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvalRpbGVMaXN0LmlubmVySFRNTCArPSBwcm9qZWN0O1xuICAgIHByb2phcnJheS5wdXNoKHByb2plY3QpO1xuICAgIH0pXG59XG5cbmNvbnN0IHN0b3JlcHJvanBhZ2VzID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pO1xuICAgIGxldCBlbGVtZW50c3RyaW5nID0gZWxlbWVudC5vdXRlckhUTUw7XG4gICAgcHJvanBhZ2VzYXJyYXkucHVzaChlbGVtZW50c3RyaW5nKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHBhZ2VzJywgSlNPTi5zdHJpbmdpZnkocHJvanBhZ2VzYXJyYXkpKTtcbn1cblxuXG5jb25zdCBsb2FkcHJvanBhZ2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBwcGFydW5wYWNrZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cGFnZXMnKSB8fCAnW10nKTtcbiAgICBsZXQgcGFnZWNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlY29udGFpbmVyJyk7XG4gICAgcHBwYXJ1bnBhY2tlZC5mb3JFYWNoKChwYWdlKSA9PiB7XG4gICAgICAgIHBhZ2Vjb250YWluZXIuaW5uZXJIVE1MICs9IHBhZ2U7XG4gICAgICAgIHBhZ2Vjb250YWluZXIubGFzdENoaWxkLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgcGFnZWNvbnRhaW5lci5sYXN0Q2hpbGQuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgcGFnZWNvbnRhaW5lci5sYXN0Q2hpbGQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgIHByb2pwYWdlc2FycmF5LnB1c2gocGFnZSk7XG4gICAgfSlcbn1cblxuY29uc3QgY2xlYXJmb3JtcyA9ICgpID0+IHtcbiAgICBsZXQgZm9ybXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtJylcbiAgICBpZiAoZm9ybXMgIT09IG51bGwpIHtcbiAgICAgICAgZm9yIChjb25zdCBmb3JtIG9mIGZvcm1zKSB7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCB1cGR0cHJvamRlbCA9ICgpID0+IHtcbiAgICBsZXQgZGVsZXRlYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlbGV0ZWJ1dHRvbicpO1xuICAgICAgICBmb3IgKGNvbnN0IGRlbCBvZiBkZWxldGVidXR0b25zKSB7XG4gICAgICAgICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ2RlbGV0ZWJ1dHRvbnBpYycpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG90aWxlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYWdlID0gdG9kb3RpbGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZWlkID0gcGFnZS5pZDtcbiAgICAgICAgICAgICAgICAgICAgdG9kb3RpbGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYWdlbnVtID0gcGFnZWlkLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvanBhZ2VzYXJyYXlbcGFnZW51bV0gPSBwYWdlLm91dGVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RwYWdlcycsIEpTT04uc3RyaW5naWZ5KHByb2pwYWdlc2FycmF5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ2RlbGV0ZWJ1dHRvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG90aWxlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IHRvZG90aWxlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2VpZCA9IHBhZ2UuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHRvZG90aWxlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZW51bSA9IHBhZ2VpZC5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb2pwYWdlc2FycmF5W3BhZ2VudW1dID0gcGFnZS5vdXRlckhUTUw7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cGFnZXMnLCBKU09OLnN0cmluZ2lmeShwcm9qcGFnZXNhcnJheSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbn1cblxuY29uc3QgdG9Eb0Zvcm1zID0gKHRvZG9mb3JtdHlwZSwgdG9kb25hbWUsIHRvZG9kZXNjcmlwLCB0b2RvZGF0ZSwgdG9kb3ByaW8sIHRvZG90aWxlaWQpID0+IHtcbiAgICBsZXQgdG9kb2Zvcm1jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvZm9ybWNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9mb3JtY29udGFpbmVyJyk7XG4gICAgdG9kb2Zvcm1jb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtJyk7XG4gICAgbGV0IHRvZG9mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvZG9mb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb2Zvcm0nKTtcbiAgICB0b2RvZm9ybWNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvZm9ybSk7XG4gICAgXG4gICAgbGV0IHRvZG9mb3JtdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvZm9ybXRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb2Zvcm10aXRsZScpO1xuICAgIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2NyZWF0ZScpIHtcbiAgICB0b2RvZm9ybXRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICB9XG4gICAgZWxzZSBpZiAodG9kb2Zvcm10eXBlID09ICdlZGl0Jykge1xuICAgIHRvZG9mb3JtdGl0bGUudGV4dENvbnRlbnQgPSAnRWRpdCBUYXNrJztcbiAgICB9XG4gICAgdG9kb2Zvcm0uYXBwZW5kQ2hpbGQodG9kb2Zvcm10aXRsZSk7XG5cbiAgICBsZXQgc2Vjb25kdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY29uZHRvZG8uc2V0QXR0cmlidXRlKCdpZCcsICdzZWNvbmR0b2RvJyk7XG4gICAgdG9kb2Zvcm0uYXBwZW5kQ2hpbGQoc2Vjb25kdG9kbyk7XG5cbiAgICBsZXQgbmFtZWNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lY29udGFpbmVyJyk7XG4gICAgbGV0IHRhc2tuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza25hbWUnKTtcbiAgICB0YXNrbmFtZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgIHRhc2tuYW1lLmRlZmF1bHRWYWx1ZSA9IHRvZG9uYW1lO1xuICAgIH1cbiAgICBsZXQgbmFtZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuYW1lbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lbGFiZWwnKTtcbiAgICBuYW1lbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFza25hbWUnKTtcbiAgICBuYW1lbGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBOYW1lOiAnO1xuXG4gICAgc2Vjb25kdG9kby5hcHBlbmRDaGlsZChuYW1lY29udGFpbmVyKTtcbiAgICBuYW1lY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tuYW1lKTtcbiAgICBuYW1lY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVsYWJlbCk7XG5cbiAgICBsZXQgZGVzY3JpcGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwY29udGFpbmVyJyk7XG4gICAgbGV0IGRlc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2NyaXAuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkZXNjcmlwLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcCcpO1xuICAgIGRlc2NyaXAuc3R5bGUud2lkdGggPSAnMzAlJztcbiAgICBkZXNjcmlwLnN0eWxlLmhlaWdodCA9ICczMHB4JztcbiAgICBpZiAodG9kb2Zvcm10eXBlID09ICdlZGl0Jykge1xuICAgICAgICBkZXNjcmlwLmRlZmF1bHRWYWx1ZSA9IHRvZG9kZXNjcmlwO1xuICAgIH07XG4gICAgbGV0IGRlc2NyaXBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcGxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcGxhYmVsJyk7XG4gICAgZGVzY3JpcGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXAnKTtcbiAgICBkZXNjcmlwbGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICc7XG5cbiAgICB0b2RvZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwY29udGFpbmVyKTtcbiAgICBkZXNjcmlwY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXApO1xuICAgIGRlc2NyaXBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcGxhYmVsKTtcblxuICAgIGxldCBkYXRlY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZWNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGVjb250YWluZXInKTtcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgIGRhdGUuZGVmYXVsdFZhbHVlID0gdG9kb2RhdGU7XG4gICAgfTtcbiAgICBsZXQgZGF0ZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlbGFiZWwnKTtcbiAgICBkYXRlbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGF0ZScpO1xuICAgIGRhdGVsYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlOiAnO1xuXG4gICAgc2Vjb25kdG9kby5hcHBlbmRDaGlsZChkYXRlY29udGFpbmVyKTtcbiAgICBkYXRlY29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIGRhdGVjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZWxhYmVsKTtcblxuICAgIFxuICAgIGxldCBwcmlvcml0eWNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5Y29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHljb250YWluZXInKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBcbiAgICBsZXQgcHJpb3JpdHlsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlsYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5bGFiZWwnKTtcbiAgICBwcmlvcml0eWxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHlsYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcbiAgICBsZXQgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGhpZ2gudmFsdWUgPSBoaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgIGxldCBub3JtYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBub3JtYWwudmFsdWUgPSBub3JtYWwudGV4dENvbnRlbnQgPSAnTm9ybWFsJztcbiAgICBsZXQgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbG93LnZhbHVlID0gbG93LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobm9ybWFsKTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChsb3cpO1xuICAgIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgIGlmICh0b2RvcHJpbyA9PSAnSGlnaCcpIHtcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSBoaWdoLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2RvcHJpbyA9PSAnTm9ybWFsJykge1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9IG5vcm1hbC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9kb3ByaW8gPT0gJ0xvdycpIHtcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSBsb3cudmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc2Vjb25kdG9kby5hcHBlbmRDaGlsZChwcmlvcml0eWNvbnRhaW5lcik7XG4gICAgcHJpb3JpdHljb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIHByaW9yaXR5Y29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5bGFiZWwpO1xuXG4gICAgbGV0IGZvdXJ0aHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3VydGh0b2RvLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm91cnRodG9kbycpO1xuICAgIHRvZG9mb3JtLmFwcGVuZENoaWxkKGZvdXJ0aHRvZG8pO1xuXG4gICAgbGV0IHN1Ym1pdHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXR0YXNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBzdWJtaXR0YXNrLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgc3VibWl0dGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdHRhc2snKTtcbiAgICBpZiAodG9kb2Zvcm10eXBlID09ICdjcmVhdGUnKSB7XG4gICAgc3VibWl0dGFzay50ZXh0Q29udGVudCA9ICdDcmVhdGUgVGFzayc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRvZG9mb3JtdHlwZSA9PSAnZWRpdCcpIHtcbiAgICBzdWJtaXR0YXNrLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgfVxuXG4gICAgZm91cnRodG9kby5hcHBlbmRDaGlsZChzdWJtaXR0YXNrKTtcblxuICAgIHN1Ym1pdHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAodG9kb2Zvcm0ucmVwb3J0VmFsaWRpdHkoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRvZG9mb3JtdHlwZSA9PSAnY3JlYXRlJykge1xuICAgICAgICAgICAgbGV0IHByb2plY3RwYXJlbnQgPSB0b2RvZm9ybS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGxldCBwYXJlbnRJRCA9IHByb2plY3RwYXJlbnQuaWQ7XG4gICAgICAgICAgICBsZXQgcGFyZW50bnVtID0gcGFyZW50SUQucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgICAgICAgICAgbGV0IHByb2plY3R0YXNrY29udCA9IHByb2plY3RwYXJlbnQubGFzdENoaWxkO1xuICAgICAgICAgICAgcHJvamVjdHRhc2tjb250LmFwcGVuZENoaWxkKHRvRG9UaWxlKHBhcmVudG51bSwgdGFza25hbWUudmFsdWUsIGRlc2NyaXAudmFsdWUsIGRhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlKSk7XG4gICAgICAgICAgICB0b2RvZm9ybWNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIHByb2pwYWdlc2FycmF5W3BhcmVudG51bV0gPSBwcm9qZWN0cGFyZW50Lm91dGVySFRNTDtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cGFnZXMnLCBKU09OLnN0cmluZ2lmeShwcm9qcGFnZXNhcnJheSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9kb2Zvcm10eXBlID09ICdlZGl0Jykge1xuICAgICAgICAgICAgbGV0IHByb2plY3RwYXJlbnQgPSB0b2RvZm9ybS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGxldCBwYXJlbnRJRCA9IHByb2plY3RwYXJlbnQuaWQ7XG4gICAgICAgICAgICBsZXQgcGFyZW50bnVtID0gcGFyZW50SUQucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgICAgICAgICAgbGV0IHRvZG90aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb3RpbGVpZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvdGlsZWlkKTtcbiAgICAgICAgICAgIGxldCB0aWxlY2hpbGRzID0gdG9kb3RpbGUuY2hpbGROb2RlcztcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGlsZWNoaWxkcykge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgPT0gJ2ZpcnN0cm93Jykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3Ryb3djaGlsZHMgPSBjaGlsZC5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJvd2NoaWxkIG9mIGZpcnN0cm93Y2hpbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93Y2hpbGQuY2xhc3NOYW1lID09ICd0aWxlbmFtZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3djaGlsZC50ZXh0Q29udGVudCA9IHRhc2tuYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvd2NoaWxkLmNsYXNzTmFtZSA9PSAndGlsZWRhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Y2hpbGQudGV4dENvbnRlbnQgPSBkYXRlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvd2NoaWxkLmNsYXNzTmFtZSA9PSAndGlsZXByaW8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Y2hpbGQudGV4dENvbnRlbnQgPSBwcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5jbGFzc05hbWUgPT0gJ2Rlc2NleHBhbmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRleHRDb250ZW50ID0gZGVzY3JpcC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvZm9ybWNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIHByb2pwYWdlc2FycmF5W3BhcmVudG51bV0gPSBwcm9qZWN0cGFyZW50Lm91dGVySFRNTDtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cGFnZXMnLCBKU09OLnN0cmluZ2lmeShwcm9qcGFnZXNhcnJheSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG5cbiAgICAgICAgIH0pXG5cbiAgICBsZXQgY2FuY2VsdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbHRhc2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGNhbmNlbHRhc2suc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBjYW5jZWx0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FuY2VsdGFzaycpO1xuICAgIGNhbmNlbHRhc2sudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgIGNhbmNlbHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB0b2RvZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgdG9kb2Zvcm1jb250YWluZXIucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIGZvdXJ0aHRvZG8uYXBwZW5kQ2hpbGQoY2FuY2VsdGFzayk7XG5cbiAgICByZXR1cm4gdG9kb2Zvcm1jb250YWluZXI7XG5cbn1cblxuXG5jb25zdCB0b0RvVGlsZSA9ICh0aWxlaWQsIHRvZG9uYW1lLCB0b2RvZGVzY3JpcCwgdG9kb2RhdGUsIHRvZG9wcmlvKSA9PiB7XG4gICAgbGV0IHRvZG90aWxlY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb3RpbGVjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0b2RvdGlsZSB0aWxlb2Zwcm9qJHt0aWxlaWR9YCk7XG4gICAgbGV0IHRvZG90aWxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG90aWxlJylcbiAgICB0b2RvdGlsZWNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRpbGUke3RvZG90aWxlcy5sZW5ndGh9YCk7XG4gICAgdG9kb3RpbGVjb250YWluZXIuc3R5bGUud2lkdGggPSBwYWdlY29udGFpbmVyLnN0eWxlLndpZHRoO1xuXG4gICAgbGV0IGZpcnN0cm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmlyc3Ryb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaXJzdHJvdycpO1xuICAgIHRvZG90aWxlY29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0cm93KTtcblxuICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2JveCcpO1xuICAgIGZpcnN0cm93LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQgPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHRvZG90aWxlY29udGFpbmVyLnN0eWxlLmNvbG9yID0gJ3JnYmEoMjExLDIxMSwyMTEsMC41KSc7XG4gICAgICAgICAgICB0aWxlZGVzY2J1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgICAgICBlZGl0YnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgICAgIGRlbGV0ZWJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hlY2tib3guY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdG9kb3RpbGVjb250YWluZXIuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgdGlsZWRlc2NidXR0b24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgIGVkaXRidXR0b24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgIGRlbGV0ZWJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxldCB0aWxlbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbGVuYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZW5hbWUnKTtcbiAgICB0aWxlbmFtZS50ZXh0Q29udGVudCA9IHRvZG9uYW1lO1xuICAgIGZpcnN0cm93LmFwcGVuZENoaWxkKHRpbGVuYW1lKTtcblxuICAgIGxldCB0aWxlZGVzY2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbGVkZXNjZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZWRlc2NkaXYnKTtcbiAgICBmaXJzdHJvdy5hcHBlbmRDaGlsZCh0aWxlZGVzY2Rpdik7XG4gICAgbGV0IHRpbGVkZXNjYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGlsZWRlc2NidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIHRpbGVkZXNjYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZWRlc2NidXR0b24nKTtcbiAgICB0aWxlZGVzY2J1dHRvbi50ZXh0Q29udGVudCA9ICdEZXNjLic7XG4gICAgdGlsZWRlc2NkaXYuYXBwZW5kQ2hpbGQodGlsZWRlc2NidXR0b24pO1xuXG4gICAgdGlsZWRlc2NidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChkZXNjZXhwYW5kLnN0eWxlLnZpc2liaWxpdHkgPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBkZXNjZXhwYW5kLnN0eWxlLndpZHRoID0gdG9kb3RpbGVjb250YWluZXIuc3R5bGUud2lkdGg7XG4gICAgICAgIGRlc2NleHBhbmQuc3R5bGUuaGVpZ2h0ID0gJ2ZpdC1jb250ZW50JztcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKGRlc2NleHBhbmQuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIGRlc2NleHBhbmQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgdGlsZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aWxlZGF0ZS50ZXh0Q29udGVudCA9IHRvZG9kYXRlO1xuICAgIHRpbGVkYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZWRhdGUnKTtcbiAgICBmaXJzdHJvdy5hcHBlbmRDaGlsZCh0aWxlZGF0ZSk7XG4gICAgXG4gICAgbGV0IHRpbGVwcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGlsZXByaW8udGV4dENvbnRlbnQgPSB0b2RvcHJpbztcbiAgICB0aWxlcHJpby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpbGVwcmlvJyk7XG4gICAgZmlyc3Ryb3cuYXBwZW5kQ2hpbGQodGlsZXByaW8pO1xuXG4gICAgbGV0IGVkaXRidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0YnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBlZGl0YnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdGJ1dHRvbicpO1xuICAgIGxldCBlZGl0YnV0dG9ucGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZWRpdGJ1dHRvbnBpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXRidXR0b25waWMnKTtcbiAgICBlZGl0YnV0dG9ucGljLnNyYyA9IGVkaXRwaWM7XG4gICAgZWRpdGJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0YnV0dG9ucGljKTtcblxuICAgIGZpcnN0cm93LmFwcGVuZENoaWxkKGVkaXRidXR0b24pO1xuXG4gICAgZWRpdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ2VkaXRidXR0b25waWMnKSB7XG4gICAgICAgIGxldCB0b2RvdGlsZWlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG90aWxlaWQpO1xuICAgICAgICBsZXQgdG9kb3BvcHVwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9wb3B1cCcpO1xuICAgICAgICBmb3IgKGNvbnN0IHBvcHVwIG9mIHRvZG9wb3B1cHMpIHtcbiAgICAgICAgaWYgKHBvcHVwLnBhcmVudEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5mb3Jtc1swXSkge1xuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0b0RvRm9ybXMoJ2VkaXQnLCB0aWxlbmFtZS50ZXh0Q29udGVudCwgZGVzY2V4cGFuZC50ZXh0Q29udGVudCwgdGlsZWRhdGUudGV4dENvbnRlbnQsIHRpbGVwcmlvLnRleHRDb250ZW50LCB0b2RvdGlsZWlkKSk7XG4gICAgfX19XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnZWRpdGJ1dHRvbicpIHtcbiAgICAgICAgbGV0IHRvZG90aWxlaWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG90aWxlaWQpO1xuICAgICAgICBsZXQgdG9kb3BvcHVwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9wb3B1cCcpO1xuICAgICAgICBmb3IgKGNvbnN0IHBvcHVwIG9mIHRvZG9wb3B1cHMpIHtcbiAgICAgICAgaWYgKHBvcHVwLnBhcmVudEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5mb3Jtc1swXSkge1xuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0b0RvRm9ybXMoJ2VkaXQnLCB0aWxlbmFtZS50ZXh0Q29udGVudCwgZGVzY2V4cGFuZC50ZXh0Q29udGVudCwgdGlsZWRhdGUudGV4dENvbnRlbnQsIHRpbGVwcmlvLnRleHRDb250ZW50LCB0b2RvdGlsZWlkKSk7XG4gICAgfX19XG4gICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIGxldCBkZWxldGVidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGRlbGV0ZWJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbGV0ZWJ1dHRvbicpO1xuICAgIGxldCBkZWxldGVidXR0b25waWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZWxldGVidXR0b25waWMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWxldGVidXR0b25waWMnKTtcbiAgICBkZWxldGVidXR0b25waWMuc3JjID0gZGVsZXRlcGljO1xuICAgIGRlbGV0ZWJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVidXR0b25waWMpO1xuICAgIGZpcnN0cm93LmFwcGVuZENoaWxkKGRlbGV0ZWJ1dHRvbik7XG5cbiAgICBkZWxldGVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBsZXQgcGFnZSA9IHRvZG90aWxlY29udGFpbmVyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IHBhZ2VpZCA9IHBhZ2UuaWQ7XG4gICAgICAgIGxldCBwYWdlbnVtID0gcGFnZWlkLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICAgICAgdG9kb3RpbGVjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIHByb2pwYWdlc2FycmF5W3BhZ2VudW1dID0gcGFnZS5vdXRlckhUTUw7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHBhZ2VzJywgSlNPTi5zdHJpbmdpZnkocHJvanBhZ2VzYXJyYXkpKTtcblxuICAgIH0pXG5cbiAgICBsZXQgZGVzY2V4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NleHBhbmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjZXhwYW5kJyk7XG4gICAgZGVzY2V4cGFuZC50ZXh0Q29udGVudCA9IGAke3RvZG9kZXNjcmlwfWA7XG4gICAgZGVzY2V4cGFuZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZGVzY2V4cGFuZC5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgIGRlc2NleHBhbmQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgdG9kb3RpbGVjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY2V4cGFuZCk7XG5cbiAgICByZXR1cm4gdG9kb3RpbGVjb250YWluZXI7XG5cbn1cblxuXG5jb25zdCBwcm9qZWN0VGlsZSA9IChwcm9qZWN0bmFtZSkgPT4ge1xuICAgIGxldCBwcm9qdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2p0aWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHRpbGUnKTtcbiAgICBwcm9qdGlsZS50ZXh0Q29udGVudCA9IHByb2plY3RuYW1lO1xuICAgIHByb2p0aWxlLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdCR7cHJvamFycmF5Lmxlbmd0aH1gKTtcbiAgICBsZXQgcHJvalRpbGVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pUaWxlTGlzdCcpO1xuICAgIHByb2pUaWxlTGlzdC5hcHBlbmRDaGlsZChwcm9qdGlsZSk7XG4gICAgc3RvcmVwcm9qZWN0cyhwcm9qdGlsZS5pZCk7XG5cbiAgICBwcm9qdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGxldCBkZXNjcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rlc2NleHBhbmQnKTtcbiAgICAgICAgaWYgKGRlc2NzLmxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBkZXNjIG9mIGRlc2NzKSB7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUuaGVpZ2h0ID0gJzBweDsnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGNsZWFyZm9ybXMoKTtcbiAgICAgICAgc29ydHRvZG9zKCk7XG4gICAgICAgIGxldCBwYWdlY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Vjb250YWluZXInKTtcbiAgICAgICAgbGV0IHBhZ2Vub2RlcyA9IHBhZ2Vjb250YWluZXIuY2hpbGROb2RlcztcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHBhZ2Vub2Rlcykge1xuICAgICAgICAgICAgaWYgKG5vZGUuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgdGlsZWlkID0gZS50YXJnZXQuaWQ7XG4gICAgICAgIGxldCB0aWxlaWRudW0gPSB0aWxlaWQucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgICAgICBsZXQgcHJvanBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvanBhZ2Uke3RpbGVpZG51bX1gKTtcbiAgICAgICAgcHJvanBhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgcHJvanBhZ2Uuc3R5bGUud2lkdGggPSBwYWdlY29udGFpbmVyLnN0eWxlLndpZHRoXG4gICAgICAgIHByb2pwYWdlLnN0eWxlLmhlaWdodCA9ICdmaXQtY29udGVudCc7XG4gICAgICAgIGxldCB0YXNrY29udCA9IHByb2pwYWdlLnF1ZXJ5U2VsZWN0b3IoJy50YXNrc2NvbnRhaW5lcicpO1xuICAgICAgICBsZXQgcHJvanBhZ2V0YXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYHRpbGVvZnByb2oke3RpbGVpZG51bX1gKTtcbiAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2pwYWdldGFza3MpIHtcbiAgICAgICAgICAgIGlmICghdGFza2NvbnQuY29udGFpbnModGFzaykpe1xuICAgICAgICAgICAgdGFza2NvbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0pXG4gICAgXG59XG5cbmNvbnN0IGVkaXRwcm9qdGlsZSA9IChwcm9qbmFtZSwgcHJvanBhZ2VuYW1lKSA9PiB7XG4gICAgbGV0IHByb2pwYWdldGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qcGFnZXRpdGxlJyk7XG4gICAgZm9yIChjb25zdCB0aXRsZSBvZiBwcm9qcGFnZXRpdGxlKSB7XG4gICAgICAgIGlmICh0aXRsZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvam5hbWU7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHByb2pwYWdlbnVtID0gcHJvanBhZ2VuYW1lLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICBsZXQgcHJvanBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qcGFnZW5hbWUpO1xuICAgIHByb2pwYWdlc2FycmF5W3Byb2pwYWdlbnVtXSA9IHByb2pwYWdlLm91dGVySFRNTDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHBhZ2VzJywgSlNPTi5zdHJpbmdpZnkocHJvanBhZ2VzYXJyYXkpKTtcbiAgICBsZXQgcHJvanRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdCR7cHJvanBhZ2VudW19YCk7XG4gICAgcHJvanRpbGUudGV4dENvbnRlbnQgPSBwcm9qbmFtZTtcbiAgICBwcm9qYXJyYXlbcHJvanBhZ2VudW1dID0gcHJvanRpbGUub3V0ZXJIVE1MO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2phcnJheSkpO1xuICAgIH1cblxuY29uc3QgZGVsZXRlcHJvanRpbGUgPSAoKSA9PiB7XG4gICAgbGV0IHByb2pwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdHBhZ2UnKTtcbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcHJvanBhZ2UpIHtcbiAgICAgICAgaWYgKHBhZ2Uuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0cGFnZWlkID0gcGFnZS5pZDtcbiAgICAgICAgICAgIGxldCBwYWdlaWRudW0gPSBwcm9qZWN0cGFnZWlkLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICAgICAgICAgIGRlbGV0ZXByb2oocGFnZWlkbnVtKTtcbiAgICAgICAgICAgIGxldCBwcm9qdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0JHtwYWdlaWRudW19YCk7XG4gICAgICAgICAgICBwYWdlLnJlbW92ZSgpO1xuICAgICAgICAgICAgcHJvanRpbGUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IHRhc2toZWFkZXJzID0gKCkgPT4ge1xuICAgIGxldCBwYWdlY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Vjb250YWluZXInKTtcblxuICAgIGxldCB0YXNraGVhZGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2toZWFkZXJzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza2hlYWRlcnMnKTtcbiAgICB0YXNraGVhZGVycy5zdHlsZS53aWR0aCA9IHBhZ2Vjb250YWluZXIuc3R5bGUud2lkdGg7XG5cbiAgICBsZXQgbmFtZWhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVoZWFkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYW1laGVhZGVyJyk7XG4gICAgbmFtZWhlYWRlci50ZXh0Q29udGVudCA9ICdOYW1lJztcbiAgICB0YXNraGVhZGVycy5hcHBlbmRDaGlsZChuYW1laGVhZGVyKTtcblxuICAgIGxldCBkZXNjaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY2hlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2NoZWFkZXInKTtcbiAgICBkZXNjaGVhZGVyLnRleHRDb250ZW50ID0gJ0Rlc2MuJztcbiAgICB0YXNraGVhZGVycy5hcHBlbmRDaGlsZChkZXNjaGVhZGVyKTtcblxuICAgIGxldCBkYXRlaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZWhlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGVoZWFkZXInKTtcbiAgICBkYXRlaGVhZGVyLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICB0YXNraGVhZGVycy5hcHBlbmRDaGlsZChkYXRlaGVhZGVyKTtcblxuICAgIGxldCBwcmlvaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb2hlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9oZWFkZXInKTtcbiAgICBwcmlvaGVhZGVyLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgICB0YXNraGVhZGVycy5hcHBlbmRDaGlsZChwcmlvaGVhZGVyKTtcblxuICAgIGxldCBlZGl0aGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXRoZWFkZXInKTtcbiAgICBlZGl0aGVhZGVyLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIHRhc2toZWFkZXJzLmFwcGVuZENoaWxkKGVkaXRoZWFkZXIpO1xuXG4gICAgcmV0dXJuIHRhc2toZWFkZXJzO1xufVxuXG5cbmNvbnN0IHByb2plY3RwYWdlID0gKHByb2plY3RuYW1lKSA9PiB7XG5cbiAgICBsZXQgcGFnZWNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlY29udGFpbmVyJyk7XG4gICAgbGV0IHByb2plY3RwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHBhZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0cGFnZScpO1xuICAgIHByb2plY3RwYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvanBhZ2Uke3Byb2pwYWdlc2FycmF5Lmxlbmd0aH1gKTtcbiAgICBwYWdlY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RwYWdlKTtcbiAgICBsZXQgcHJvanRpdGxlbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2p0aXRsZWxpbmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qdGl0bGVsaW5lJyk7XG4gICAgcHJvamVjdHBhZ2UuYXBwZW5kQ2hpbGQocHJvanRpdGxlbGluZSk7XG5cbiAgICBsZXQgcHJvanBhZ2V0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2pwYWdldGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qcGFnZXRpdGxlJyk7XG4gICAgcHJvanBhZ2V0aXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RuYW1lfWA7XG4gICAgcHJvanRpdGxlbGluZS5hcHBlbmRDaGlsZChwcm9qcGFnZXRpdGxlKTtcblxuICAgIGxldCBwcm9qZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plZGl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVkaXQnKTtcbiAgICBsZXQgcHJvamVkaXRwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcm9qZWRpdHBpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plZGl0cGljJyk7XG4gICAgcHJvamVkaXRwaWMuc3JjID0gZWRpdHBpYztcbiAgICBwcm9qZWRpdC5hcHBlbmRDaGlsZChwcm9qZWRpdHBpYyk7XG4gICAgcHJvanRpdGxlbGluZS5hcHBlbmRDaGlsZChwcm9qZWRpdCk7XG5cbiAgICBsZXQgZWRpdHByb2pmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdHByb2pmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdHByb2pmb3JtJyk7XG4gICAgcHJvamVjdHBhZ2UuYXBwZW5kQ2hpbGQoZWRpdHByb2pmb3JtKTtcblxuICAgIGxldCBkaXZwcm9qdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdnByb2p0YXNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGl2cHJvanRhc2snKTtcbiAgICBwcm9qZWN0cGFnZS5hcHBlbmRDaGlsZChkaXZwcm9qdGFzayk7XG4gICAgbGV0IHByb2p0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvanRhc2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qdGFzaycpXG4gICAgcHJvanRhc2sudGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuICAgIGRpdnByb2p0YXNrLmFwcGVuZENoaWxkKHByb2p0YXNrKTtcblxuICAgIGxldCB0b2RvcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvcG9wdXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvcG9wdXAnKTtcbiAgICBwcm9qZWN0cGFnZS5hcHBlbmRDaGlsZCh0b2RvcG9wdXApO1xuICAgIFxuICAgIHByb2plY3RwYWdlLmFwcGVuZENoaWxkKHRhc2toZWFkZXJzKCkpO1xuXG4gICAgbGV0IHRhc2tzY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza3Njb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrc2NvbnRhaW5lcicpO1xuICAgIHByb2plY3RwYWdlLmFwcGVuZENoaWxkKHRhc2tzY29udGFpbmVyKTtcblxuICAgIHN0b3JlcHJvanBhZ2VzKHByb2plY3RwYWdlLmlkKTtcblxuICAgIGxldCBwcm9qcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0cGFnZScpO1xuICAgIFxuICAgIGZvciAodmFyIHg9MDsgeCA8IChwcm9qcGFnZXMubGVuZ3RoIC0gMSk7ICsreCkge1xuICAgICAgICBwcm9qcGFnZXNbeF0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBwcm9qcGFnZXNbeF0uc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgcHJvanBhZ2VzW3hdLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgIH1cbiAgICBcbiAgICBsZXQgcGVyaW9kcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwZXJpb2Rjb250YWluZXInKTtcblxuICAgIGZvciAodmFyIHg9MDsgeCA8IChwZXJpb2RwYWdlcy5sZW5ndGggLSAxKTsgKyt4KSB7XG4gICAgICAgIHBlcmlvZHBhZ2VzW3hdLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgcGVyaW9kcGFnZXNbeF0uc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgcGVyaW9kcGFnZXNbeF0uc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgfVxuXG4gICAgXG4gICAgcHJvamVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoIWRvY3VtZW50LmZvcm1zWzBdKSB7XG4gICAgICAgIGxldCBwcm9qdGl0bGUgPSBlLmN1cnJlbnRUYXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgbGV0IHByb2puYW1lID0gcHJvanRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICBlZGl0cHJvamZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1zKCdlZGl0JywgcHJvam5hbWUpKTtcbiAgICB9fSlcblxuICAgIFxuICAgIHByb2p0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5mb3Jtc1swXSkge1xuICAgICAgICB0b2RvcG9wdXAuYXBwZW5kQ2hpbGQodG9Eb0Zvcm1zKCdjcmVhdGUnKSk7XG4gICAgfX0pXG59XG4gICAgXG5cblxuXG5jb25zdCBwcm9qZWN0Rm9ybXMgPSAocHJvamZvcm10eXBlLCBwcm9qZWN0bmFtZSkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIHByb2plY3Rmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdGZvcm0nKTtcbiAgICAgICAgcHJvamVjdGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcHJvamZvcm10aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZm9ybXRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamZvcm10aXRsZScpO1xuICAgICAgICBpZiAocHJvamZvcm10eXBlID09ICdjcmVhdGUnKSB7XG4gICAgICAgIHByb2pmb3JtdGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb2pmb3JtdHlwZSA9PSAnZWRpdCcpIHtcbiAgICAgICAgcHJvamZvcm10aXRsZS50ZXh0Q29udGVudCA9ICdFZGl0IFByb2plY3QnO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3Rmb3JtLmFwcGVuZENoaWxkKHByb2pmb3JtdGl0bGUpO1xuXG4gICAgICAgIGxldCBwcm9qaW5wdXRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamlucHV0Y29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamlucHV0Y29udGFpbmVyJyk7XG4gICAgICAgIGxldCBwcm9qaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwcm9qaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgcHJvamlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamlucHV0Jyk7XG4gICAgICAgIHByb2ppbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgICAgICBpZiAocHJvamZvcm10eXBlID09ICdlZGl0Jykge1xuICAgICAgICAgICAgcHJvamlucHV0LmRlZmF1bHRWYWx1ZSA9IHByb2plY3RuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcm9qbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcm9qbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamlucHV0Jyk7XG4gICAgICAgIGlmIChwcm9qZm9ybXR5cGUgPT0gJ2NyZWF0ZScpIHtcbiAgICAgICAgcHJvamxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamxhYmVsY3JlYXRlJyk7XG4gICAgICAgIHByb2psYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWU6ICc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvamZvcm10eXBlID09ICdlZGl0Jykge1xuICAgICAgICBwcm9qbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qbGFiZWxlZGl0Jyk7XG4gICAgICAgIHByb2psYWJlbC50ZXh0Q29udGVudCA9ICdDaGFuZ2UgUHJvamVjdCBOYW1lOiAnO1xuICAgICAgICB9XG4gICAgICAgIHByb2ppbnB1dGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qaW5wdXQpO1xuICAgICAgICBwcm9qaW5wdXRjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamxhYmVsKTtcbiAgICAgICAgcHJvamVjdGZvcm0uYXBwZW5kQ2hpbGQocHJvamlucHV0Y29udGFpbmVyKTtcblxuICAgICAgICBsZXQgcHJvamZvcm1idG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2pmb3JtYnRucy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2pmb3JtYnRucycpO1xuICAgICAgICBwcm9qZWN0Zm9ybS5hcHBlbmRDaGlsZChwcm9qZm9ybWJ0bnMpO1xuXG4gICAgICAgIGxldCBwcm9qc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHByb2pzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICBwcm9qc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvanN1Ym1pdCcpO1xuICAgICAgICBpZiAocHJvamZvcm10eXBlID09ICdjcmVhdGUnKSB7XG4gICAgICAgIHByb2pzdWJtaXQudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb2pmb3JtdHlwZSA9PSAnZWRpdCcpIHtcbiAgICAgICAgcHJvanN1Ym1pdC50ZXh0Q29udGVudCA9ICdTYXZlIENoYW5nZXMnO1xuICAgICAgICB9XG4gICAgICAgIHByb2pmb3JtYnRucy5hcHBlbmRDaGlsZChwcm9qc3VibWl0KTtcblxuICAgICAgICBwcm9qc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Zm9ybS5yZXBvcnRWYWxpZGl0eSgpID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZm9ybXR5cGUgPT09ICdjcmVhdGUnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhZ2Vjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIGxldCBwYWdlY2hpbGRzID0gcGFnZWNvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgcGFnZWNoaWxkcykge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9qZWN0VGlsZShwcm9qaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHByb2plY3RwYWdlKHByb2ppbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdHBvcHVwLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmIChwcm9qZm9ybXR5cGUgPT09ICdlZGl0Jykge1xuICAgICAgICAgICAgICAgIGxldCBwcm9qaWQgPSBwcm9qZWN0Zm9ybS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IG5ld25hbWUgPSBwcm9qaW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgZWRpdHByb2p0aWxlKG5ld25hbWUsIHByb2ppZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHByb2pjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvamNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2pjYW5jZWwnKTtcbiAgICAgICAgcHJvamNhbmNlbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHByb2pjYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgICAgcHJvamZvcm1idG5zLmFwcGVuZENoaWxkKHByb2pjYW5jZWwpO1xuICAgICAgICBwcm9qY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAocHJvamZvcm10eXBlID09PSAnY3JlYXRlJykge1xuICAgICAgICAgICAgcHJvamVjdGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICBwcm9qZWN0cG9wdXAucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb2pmb3JtdHlwZSA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBpZiAocHJvamZvcm10eXBlID09PSAnZWRpdCcpIHtcbiAgICAgICAgbGV0IHByb2pkZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvamRlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHByb2pkZWxldGUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZGVsZXRlJyk7XG4gICAgICAgIHByb2pkZWxldGUudGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgICAgICBwcm9qZWN0Zm9ybS5hcHBlbmRDaGlsZChwcm9qZGVsZXRlKTtcblxuICAgICAgICBwcm9qZGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWxldGVwcm9qdGlsZSgpO1xuICAgICAgICAgICAgcHJvamVjdGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgIH0pIFxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2plY3Rmb3JtO1xufVxuXG5jb25zdCBzb3J0dG9kb3MgPSAoKSA9PiB7XG4gICAgbGV0IHByb2pwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RwYWdlJyk7XG4gICAgbGV0IHByb2p0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RvZG90aWxlJyk7XG4gICAgZm9yIChsZXQgeD0wOyB4IDwgKHByb2pwYWdlcy5sZW5ndGgpOyArK3gpIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvanBhZ2Uke3h9YCk7XG4gICAgICAgIGxldCBwcm9qZWN0Y2hpbGRzID0gcHJvamVjdC5jaGlsZE5vZGVzO1xuICAgICAgICBsZXQgdG9kb2NsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgdGlsZW9mcHJvaiR7eH1gKTtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBwcm9qZWN0Y2hpbGRzKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuY2xhc3NOYW1lID09ICd0YXNrc2NvbnRhaW5lcicpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrPTA7IGsgPCAodG9kb2NsYXNzLmxlbmd0aCk7ICsraykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkLmNvbnRhaW5zKHRvZG9jbGFzc1trXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmFwcGVuZENoaWxkKHRvZG9jbGFzc1trXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY29uc3QgcGVyaW9kcGFnZSA9IChwZXJpb2QpID0+IHtcblxuICAgIGxldCBwYWdlY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Vjb250YWluZXInKTtcbiAgICBsZXQgcGVyaW9kY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGVyaW9kY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGVyaW9kY29udGFpbmVyJyk7XG4gICAgcGFnZWNvbnRhaW5lci5hcHBlbmRDaGlsZChwZXJpb2Rjb250YWluZXIpO1xuXG5cbiAgICBsZXQgcGVyaW9kdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwZXJpb2R0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BlcmlvZHRpdGxlJylcbiAgICBpZiAocGVyaW9kID09ICdob21lJykge1xuICAgIHBlcmlvZGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVwZXJpb2QnKTtcbiAgICBwZXJpb2R0aXRsZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICB9XG4gICAgZWxzZSBpZiAocGVyaW9kID09ICd0b2RheScpIHtcbiAgICBwZXJpb2Rjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RheXBlcmlvZCcpO1xuICAgIHBlcmlvZHRpdGxlLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICB9XG4gICAgZWxzZSBpZiAocGVyaW9kID09ICd3ZWVrJykge1xuICAgIHBlcmlvZGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlZWtwZXJpb2QnKTtcbiAgICBwZXJpb2R0aXRsZS50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnO1xuICAgIH1cblxuICAgIHBlcmlvZGNvbnRhaW5lci5hcHBlbmRDaGlsZChwZXJpb2R0aXRsZSk7XG5cbiAgICBsZXQgdG9kb3BvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb3BvcHVwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kb3BvcHVwJyk7XG4gICAgcGVyaW9kY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9wb3B1cCk7XG5cbiAgICBwZXJpb2Rjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza2hlYWRlcnMoKSk7XG4gICAgXG4gICAgbGV0IHBlcmlvZHRhc2tjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwZXJpb2R0YXNrY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGVyaW9kdGFza2NvbnRhaW5lcicpO1xuICAgIHBlcmlvZGNvbnRhaW5lci5hcHBlbmRDaGlsZChwZXJpb2R0YXNrY29udGFpbmVyKTtcblxuXG4gICAgcmV0dXJuIHBlcmlvZGNvbnRhaW5lcjtcbn1cblxuY29uc3Qgc29ydHRpbGVzID0gKHBlcmlvZCkgPT4ge1xuICAgIGNsZWFyZm9ybXMoKTtcbiAgICBsZXQgdG9kb3RpbGVzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvdGlsZScpKTtcbiAgICBsZXQgdGlsZWRhdGVzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aWxlZGF0ZScpKTtcblxuXG4gICAgaWYgKHBlcmlvZCA9PSAnaG9tZScpIHtcbiAgICAgICAgbGV0IGhvbWVwZXJpb2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZXBlcmlvZCcpO1xuICAgICAgICBsZXQgaG9tZWNoaWxkcyA9IGhvbWVwZXJpb2QuY2hpbGROb2RlcztcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBob21lY2hpbGRzKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuY2xhc3NOYW1lID09ICdwZXJpb2R0YXNrY29udGFpbmVyJykge1xuICAgICAgICAgICAgZm9yIChsZXQgeD0wOyB4IDwgKHRvZG90aWxlcy5sZW5ndGgpOyArK3gpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZCh0b2RvdGlsZXNbeF0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG90aWxlcy5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAocGVyaW9kID09ICd0b2RheScpIHtcbiAgICAgICAgbGV0IHRvZGF5cGVyaW9kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5cGVyaW9kJyk7XG4gICAgICAgIGxldCB0b2RheWNoaWxkcyA9IHRvZGF5cGVyaW9kLmNoaWxkTm9kZXM7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdG9kYXljaGlsZHMpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgPT0gJ3BlcmlvZHRhc2tjb250YWluZXInKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4PTA7IHggPCAodG9kb3RpbGVzLmxlbmd0aCk7ICsreCkgeyBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBwYXJzZUlTTyh0aWxlZGF0ZXNbeF0udGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUb2RheShkYXRlKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZCh0b2RvdGlsZXNbeF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAocGVyaW9kID09ICd3ZWVrJykge1xuICAgICAgICBsZXQgd2Vla3BlcmlvZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrcGVyaW9kJyk7XG4gICAgICAgIGxldCB3ZWVrY2hpbGRzID0gd2Vla3BlcmlvZC5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHdlZWtjaGlsZHMpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgPT0gJ3BlcmlvZHRhc2tjb250YWluZXInKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4PTA7IHggPCAodG9kb3RpbGVzLmxlbmd0aCk7ICsreCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IHBhcnNlSVNPKHRpbGVkYXRlc1t4XS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1NhbWVXZWVrKGRhdGUsIChuZXcgRGF0ZSkpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmFwcGVuZENoaWxkKHRvZG90aWxlc1t4XSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbn1cblxuXG5leHBvcnQge3Byb2plY3RGb3JtcywgdG9Eb0Zvcm1zLCB0b0RvVGlsZSwgcHJvamVjdFRpbGUsIHBlcmlvZHBhZ2UsIHNvcnR0aWxlcywgc29ydHRvZG9zLCBsb2FkcHJvamVjdHMsIGxvYWRwcm9qcGFnZXMsIGNsZWFyZm9ybXMsIHVwZHRwcm9qZGVsfTtcblxuIiwiXG5jb25zdCB0b0RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHl9XG59O1xuXG5sZXQgbXl0b0RvcyA9IFtdO1xuXG5jb25zdCBQdXNodG9EbyA9ICh0b0RvSXRlbSkgPT4ge1xuICAgIG15dG9Eb3MucHVzaCh0b0RvSXRlbSk7XG59XG5cbmNvbnN0IHRpdGxlVXBkYXRlID0gKHRvRG9JdGVtLCBuZXdUaXRsZSkgPT4ge1xuICAgIHRvRG9JdGVtLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgcmV0dXJuIHt0b0RvSXRlbX07XG59XG5cbmNvbnN0IGRlc2NyaXB0aW9uVXBkYXRlID0gKHRvRG9JdGVtLCBuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIHRvRG9JdGVtLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgcmV0dXJuIHt0b0RvSXRlbX07XG59XG5cbmNvbnN0IGR1ZURhdGVVcGRhdGUgPSAodG9Eb0l0ZW0sIG5ld2R1ZURhdGUpID0+IHtcbiAgICB0b0RvSXRlbS5kdWVEYXRlID0gbmV3ZHVlRGF0ZTtcbiAgICByZXR1cm4ge3RvRG9JdGVtfTtcbn1cblxuY29uc3QgcHJpb3JpdHlVcGRhdGUgPSAodG9Eb0l0ZW0sIG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgdG9Eb0l0ZW0ucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICByZXR1cm4ge3RvRG9JdGVtfTtcbn1cblxuY29uc3QgZGVsZXRlVG9EbyA9ICAodG9Eb0l0ZW0pID0+IHtcbiAgICB0b0RvSXRlbSA9IG51bGw7XG4gICAgcmV0dXJuIHt0b0RvSXRlbX07XG59XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSAoKSA9PiBbXTtcbiAgICByZXR1cm4ge3RpdGxlLCBwcm9qZWN0QXJyYXl9XG59XG5cbmxldCBteVByb2plY3RzID0gW107XG5cbmNvbnN0IHB1c2hQcm9qZWN0ID0gKHByb2plY3RJdGVtKSA9PiB7XG4gICAgbXlQcm9qZWN0cy5wdXNoKHByb2plY3RJdGVtKTtcbn1cblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0SXRlbSkgPT4ge1xuICAgIHByb2plY3RJdGVtID0gbnVsbDtcbiAgICByZXR1cm4ge3Byb2plY3RJdGVtfVxufVxuXG5jb25zdCBwcm9qZWN0VG9Eb3MgPSAocHJvamVjdEl0ZW0sIHRvRG9JdGVtKSA9PiB7XG4gICAgcHJvamVjdEl0ZW0ucHVzaCh0b0RvSXRlbSk7XG59XG5cbmV4cG9ydCB7dG9EbywgbXl0b0RvcywgUHVzaHRvRG8sIHRpdGxlVXBkYXRlLCBkZXNjcmlwdGlvblVwZGF0ZSwgZHVlRGF0ZVVwZGF0ZSwgcHJpb3JpdHlVcGRhdGUsIGRlbGV0ZVRvRG8sIHByb2plY3QsIG15UHJvamVjdHMsIHB1c2hQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBwcm9qZWN0VG9Eb3N9IiwiaW1wb3J0IHt0b0RvLCBteXRvRG9zLCBQdXNodG9EbywgdGl0bGVVcGRhdGUsIGRlc2NyaXB0aW9uVXBkYXRlLCBkdWVEYXRlVXBkYXRlLCBwcmlvcml0eVVwZGF0ZSwgZGVsZXRlVG9EbywgcHJvamVjdCwgbXlQcm9qZWN0cywgcHVzaFByb2plY3QsIGRlbGV0ZVByb2plY3QsIHByb2plY3RUb0Rvc30gZnJvbSAnLi90b2RvZm5zLmpzJztcblxuY29uc3QgY3JlYXRlcHJvanRpbGUgPSAocHJvam5hbWUpID0+IHtcbiAgICBsZXQgbmV3cHJvamVjdCA9ICgpID0+IHByb2plY3QocHJvam5hbWUpO1xuICAgIHB1c2hQcm9qZWN0KHByb2puYW1lKTtcbiAgICBsZXQgcHJvamVjdElEID0gKCkgPT4gYHByb2plY3Qke215UHJvamVjdHMubGVuZ3RoLTF9YDtcbiAgICByZXR1cm4ge25ld3Byb2plY3QsIHByb2plY3RJRH07XG59O1xuXG5jb25zdCBwcm9qcGFnZUlEID0gKCkgPT4ge1xuICAgIGxldCBwYWdlSUQgPSAoKSA9PiBgcHJvanBhZ2Uke215UHJvamVjdHMubGVuZ3RoLTF9YDtcbiAgICByZXR1cm4ge3BhZ2VJRH1cbn0gXG5cbmNvbnN0IGRlbGV0ZXByb2ogPSAocHJvam51bSkgPT4ge1xuICAgIGxldCBwcm9qZWN0SXRlbSA9IG15UHJvamVjdHNbcHJvam51bV07XG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0SXRlbSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlcHJvanRpbGUsIHByb2pwYWdlSUQsIGRlbGV0ZXByb2p9O1xuXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvZ28gZnJvbSAnLi9jbGlwYm9hcmQtdGV4dC1tdWx0aXBsZS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi9hcHBzLnN2Zyc7XG5pbXBvcnQgdG9kYXlwaWMgZnJvbSAnLi9jYWxlbmRhci10b2RheS5zdmcnO1xuaW1wb3J0IHdlZWtwaWMgZnJvbSAnLi9jYWxlbmRhci13ZWVrLnN2Zyc7XG5pbXBvcnQgaG9tZXBpYyBmcm9tICcuL2hvbWUuc3ZnJztcbmltcG9ydCBhZGRwaWMgZnJvbSAnLi9wbHVzLWNpcmNsZS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgdGhlbWVwaWMgZnJvbSAnLi90aGVtZS1saWdodC1kYXJrLnN2Zyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHtwcm9qZWN0Rm9ybXMsIHRvRG9Gb3JtcywgdG9Eb1RpbGUsIHByb2plY3RUaWxlLCBwZXJpb2RwYWdlLCBzb3J0dGlsZXMsIHNvcnR0b2RvcywgbG9hZHByb2plY3RzLCBsb2FkcHJvanBhZ2VzLCBjbGVhcmZvcm1zLCB1cGR0cHJvamRlbH0gZnJvbSAnLi90b2RvZG9tcy5qcyc7XG5pbXBvcnQge3RvRG8sIG15dG9Eb3MsIFB1c2h0b0RvLCB0aXRsZVVwZGF0ZSwgZGVzY3JpcHRpb25VcGRhdGUsIGR1ZURhdGVVcGRhdGUsIHByaW9yaXR5VXBkYXRlLCBkZWxldGVUb0RvLCBwcm9qZWN0LCBteVByb2plY3RzLCBwdXNoUHJvamVjdCwgZGVsZXRlUHJvamVjdCwgcHJvamVjdFRvRG9zfSBmcm9tICcuL3RvZG9mbnMuanMnO1xuaW1wb3J0IHtjcmVhdGVwcm9qdGlsZX0gZnJvbSAnLi90b2RvaW50ZXJmYWNlcnMuanMnO1xuXG5jb25zdCBjb21wb25lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgICBjb25zdCB0aXRsZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVCbG9jay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlQmxvY2snKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlQmxvY2spO1xuXG4gICAgY29uc3QgcGFnZWNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2Vjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwYWdlY29udGFpbmVyJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwYWdlY29udGFpbmVyKTsgXG5cbiAgICBjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudVRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVUb2dnbGUnKTtcbiAgICBjb25zdCBtZW51VG9nZ2xlUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWVudVRvZ2dsZVBpYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVUb2dnbGVQaWMnKTtcbiAgICBtZW51VG9nZ2xlUGljLnNyYyA9IHNldHRpbmdzO1xuICAgIG1lbnVUb2dnbGUuYXBwZW5kQ2hpbGQobWVudVRvZ2dsZVBpYyk7XG4gICAgdGl0bGVCbG9jay5hcHBlbmRDaGlsZChtZW51VG9nZ2xlKTtcblxuICAgIG1lbnVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChtZW51LnN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICBtZW51LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIHBhZ2Vjb250YWluZXIuc3R5bGUuZ3JpZENvbHVtbiA9ICcxLzMnO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAobWVudS5zdHlsZS52aXNpYmlsaXR5ID09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICBtZW51LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICBwYWdlY29udGFpbmVyLnN0eWxlLmdyaWRDb2x1bW4gPSAnMi8zJztcbiAgICAgICAgfVxuICAgICB9KVxuXG5cbiAgICBjb25zdCB0aXRsZU1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZU1haW4uc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZU1haW4nKTtcbiAgICBjb25zdCB0aXRsZVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRpdGxlUGljLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGVQaWMnKTtcbiAgICB0aXRsZVBpYy5zcmMgPSBsb2dvO1xuICAgIHRpdGxlTWFpbi5hcHBlbmRDaGlsZCh0aXRsZVBpYyk7XG4gICAgdGl0bGVCbG9jay5hcHBlbmRDaGlsZCh0aXRsZU1haW4pO1xuXG4gICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGVUZXh0Jyk7XG4gICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ1RvLURvIExpc3QnO1xuICAgIHRpdGxlTWFpbi5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICAgIFxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgIGNvbnN0IHBlcmlvZExpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGVyaW9kTGlzdHMuc2V0QXR0cmlidXRlKCdpZCcsICdwZXJpb2RMaXN0cycpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQocGVyaW9kTGlzdHMpO1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJ1xuICAgIHBlcmlvZExpc3RzLmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIGNvbnN0IGhvbWVQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBob21lUGljLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZVBpYycpXG4gICAgaG9tZVBpYy5zcmMgPSBob21lcGljO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZVBpYyk7XG5cblxuICAgIGxldCBob21lY291bnRlciA9IDA7XG4gICAgbGV0IHRvZGF5Y291bnRlciA9IDA7XG4gICAgbGV0IHdlZWtjb3VudGVyID0gMDtcblxuXG5cbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbGV0IGRlc2NzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVzY2V4cGFuZCcpO1xuICAgICAgICBpZiAoZGVzY3MubGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRlc2Mgb2YgZGVzY3MpIHtcbiAgICAgICAgICAgICAgICBkZXNjLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBkZXNjLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS5oZWlnaHQgPSAnMHB4OydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBob21lY291bnRlciArPSAxO1xuXG4gICAgICAgIGlmIChob21lY291bnRlciA9PSAxKSB7XG4gICAgICAgIHBhZ2Vjb250YWluZXIuYXBwZW5kQ2hpbGQocGVyaW9kcGFnZSgnaG9tZScpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKGhvbWVjb3VudGVyID4gMSkge1xuICAgICAgICAgICAgc29ydHRvZG9zKCk7XG4gICAgICAgICAgICBsZXQgaG9tZXBlcmlvZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lcGVyaW9kJyk7XG4gICAgICAgICAgICBob21lcGVyaW9kLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICBob21lcGVyaW9kLnN0eWxlLndpZHRoID0gcGFnZWNvbnRhaW5lci5zdHlsZS53aWR0aDtcbiAgICAgICAgICAgIGhvbWVwZXJpb2Quc3R5bGUuaGVpZ2h0ID0gJ2ZpdC1jb250ZW50JztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYWdlY2hpbGRzID0gcGFnZWNvbnRhaW5lci5jaGlsZE5vZGVzOyBcblxuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHBhZ2VjaGlsZHMpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5pZCAhPT0gJ2hvbWVwZXJpb2QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzb3J0dGlsZXMoJ2hvbWUnKVxuICAgIH0pXG5cbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZGF5LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kYXknKTtcbiAgICB0b2RheS50ZXh0Q29udGVudCA9ICdUb2RheSdcbiAgICBwZXJpb2RMaXN0cy5hcHBlbmRDaGlsZCh0b2RheSk7XG4gICAgY29uc3QgdG9kYXlQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0b2RheVBpYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZGF5UGljJylcbiAgICB0b2RheVBpYy5zcmMgPSB0b2RheXBpYztcbiAgICB0b2RheS5hcHBlbmRDaGlsZCh0b2RheVBpYyk7XG5cbiAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGxldCBkZXNjcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rlc2NleHBhbmQnKTtcbiAgICAgICAgaWYgKGRlc2NzLmxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBkZXNjIG9mIGRlc2NzKSB7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUuaGVpZ2h0ID0gJzBweDsnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9kYXljb3VudGVyICs9IDE7XG5cbiAgICAgICAgaWYgKHRvZGF5Y291bnRlciA9PSAxKSB7XG4gICAgICAgICAgICBwYWdlY29udGFpbmVyLmFwcGVuZENoaWxkKHBlcmlvZHBhZ2UoJ3RvZGF5JykpXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmICh0b2RheWNvdW50ZXIgPiAxKSB7XG4gICAgICAgICAgICBzb3J0dG9kb3MoKTtcbiAgICAgICAgICAgIGxldCB0b2RheXBlcmlvZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheXBlcmlvZCcpO1xuICAgICAgICAgICAgdG9kYXlwZXJpb2Quc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIHRvZGF5cGVyaW9kLnN0eWxlLndpZHRoID0gcGFnZWNvbnRhaW5lci5zdHlsZS53aWR0aDtcbiAgICAgICAgICAgIHRvZGF5cGVyaW9kLnN0eWxlLmhlaWdodCA9ICdmaXQtY29udGVudCc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFnZWNoaWxkcyA9IHBhZ2Vjb250YWluZXIuY2hpbGROb2RlczsgXG5cbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBwYWdlY2hpbGRzKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuaWQgIT09ICd0b2RheXBlcmlvZCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNvcnR0aWxlcygndG9kYXknKTtcbiAgICB9KVxuXG4gICAgY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzV2Vlay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RoaXNXZWVrJyk7XG4gICAgdGhpc1dlZWsudGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJ1xuICAgIHBlcmlvZExpc3RzLmFwcGVuZENoaWxkKHRoaXNXZWVrKTtcbiAgICBjb25zdCB0aGlzV2Vla1BpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRoaXNXZWVrUGljLnNldEF0dHJpYnV0ZSgnaWQnLCAndGhpc1dlZWtQaWMnKVxuICAgIHRoaXNXZWVrUGljLnNyYyA9IHdlZWtwaWM7XG4gICAgdGhpc1dlZWsuYXBwZW5kQ2hpbGQodGhpc1dlZWtQaWMpO1xuXG4gICAgdGhpc1dlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBsZXQgZGVzY3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZXNjZXhwYW5kJyk7XG4gICAgICAgIGlmIChkZXNjcy5sZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZGVzYyBvZiBkZXNjcykge1xuICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgICAgICAgICBkZXNjLnN0eWxlLmhlaWdodCA9ICcwcHg7J1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2Vla2NvdW50ZXIgKz0gMTtcblxuICAgICAgICBpZiAod2Vla2NvdW50ZXIgPT0gMSkge1xuICAgICAgICAgICAgcGFnZWNvbnRhaW5lci5hcHBlbmRDaGlsZChwZXJpb2RwYWdlKCd3ZWVrJykpXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmICh3ZWVrY291bnRlciA+IDEpIHtcbiAgICAgICAgICAgIHNvcnR0b2RvcygpO1xuICAgICAgICAgICAgbGV0IHdlZWtwZXJpb2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla3BlcmlvZCcpO1xuICAgICAgICAgICAgd2Vla3BlcmlvZC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgd2Vla3BlcmlvZC5zdHlsZS53aWR0aCA9IHBhZ2Vjb250YWluZXIuc3R5bGUud2lkdGg7XG4gICAgICAgICAgICB3ZWVrcGVyaW9kLnN0eWxlLmhlaWdodCA9ICdmaXQtY29udGVudCc7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBwYWdlY2hpbGRzID0gcGFnZWNvbnRhaW5lci5jaGlsZE5vZGVzOyBcblxuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHBhZ2VjaGlsZHMpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5pZCAhPT0gJ3dlZWtwZXJpb2QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzb3J0dGlsZXMoJ3dlZWsnKTtcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvamVjdExpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdExpc3RzLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdExpc3RzJyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdHMpO1xuXG4gICAgY29uc3QgcHJvakxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2pMaXN0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qTGlzdFRpdGxlJyk7XG4gICAgcHJvamVjdExpc3RzLmFwcGVuZENoaWxkKHByb2pMaXN0VGl0bGUpO1xuXG4gICAgY29uc3QgcHJvakxpc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvakxpc3RUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvakxpc3RUZXh0Jyk7XG4gICAgcHJvakxpc3RUZXh0LnRleHRDb250ZW50ID0gJ1Byb2plY3RzOiAnO1xuICAgIHByb2pMaXN0VGl0bGUuYXBwZW5kQ2hpbGQocHJvakxpc3RUZXh0KTtcblxuXG4gICAgY29uc3QgcHJvakFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2pBZGRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qQWRkQnV0dG9uJyk7XG4gICAgcHJvakxpc3RUaXRsZS5hcHBlbmRDaGlsZChwcm9qQWRkQnV0dG9uKTtcbiAgICBjb25zdCBwcm9qQWRkQnV0dG9uUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJvakFkZEJ1dHRvblBpYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2pBZGRCdXR0b25QaWMnKTtcbiAgICBwcm9qQWRkQnV0dG9uUGljLnNyYyA9IGFkZHBpYztcbiAgICBwcm9qQWRkQnV0dG9uLmFwcGVuZENoaWxkKHByb2pBZGRCdXR0b25QaWMpO1xuXG4gICAgY29uc3QgcHJvamVjdGZvcm1jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Zm9ybWNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3Rmb3JtY29udGFpbmVyJyk7XG4gICAgcHJvamVjdExpc3RzLmFwcGVuZENoaWxkKHByb2plY3Rmb3JtY29udGFpbmVyKTtcblxuICAgIGNvbnN0IHByb2pUaWxlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2pUaWxlTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2pUaWxlTGlzdCcpO1xuICAgIHByb2plY3RMaXN0cy5hcHBlbmRDaGlsZChwcm9qVGlsZUxpc3QpO1xuXG4gICAgcHJvakFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHBvcHVwPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdHBvcHVwLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHBvcHVwJyk7XG4gICAgICAgIGlmICghZG9jdW1lbnQuZm9ybXNbMF0pIHtcbiAgICAgICAgcHJvamVjdHBvcHVwLmFwcGVuZENoaWxkKHByb2plY3RGb3JtcygnY3JlYXRlJywgJycpKTtcbiAgICAgICAgcHJvamVjdGZvcm1jb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHBvcHVwKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB7XG4gICAgICAgIGxvYWRwcm9qZWN0cygpO1xuICAgICAgICBsb2FkcHJvanBhZ2VzKCk7XG4gICAgICAgIGlmIChwcm9qVGlsZUxpc3QuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7ICBcbiAgICAgICAgICAgIGxldCBkZXNjcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rlc2NleHBhbmQnKTtcbiAgICAgICAgaWYgKGRlc2NzLmxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBkZXNjIG9mIGRlc2NzKSB7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUuaGVpZ2h0ID0gJzBweDsnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGxldCB0aWxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3R0aWxlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRpbGVzLmxlbmd0aCk7XG4gICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiB0aWxlcykge1xuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRlc2NzLmxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGRlc2Mgb2YgZGVzY3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYy5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYy5zdHlsZS5oZWlnaHQgPSAnMHB4OydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgc29ydHRvZG9zKCk7XG4gICAgICAgICAgICAgICAgY2xlYXJmb3JtcygpO1xuICAgICAgICAgICAgICAgIGxldCBwYWdlY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Vjb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFnZW5vZGVzID0gcGFnZWNvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBwYWdlbm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdGlsZWlkID0gZS50YXJnZXQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGVpZG51bSA9IHRpbGVpZC5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgICAgICAgICAgICAgbGV0IHByb2pwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2pwYWdlJHt0aWxlaWRudW19YCk7XG4gICAgICAgICAgICAgICAgcHJvanBhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgICAgICBwcm9qcGFnZS5zdHlsZS53aWR0aCA9IHBhZ2Vjb250YWluZXIuc3R5bGUud2lkdGhcbiAgICAgICAgICAgICAgICBwcm9qcGFnZS5zdHlsZS5oZWlnaHQgPSAnZml0LWNvbnRlbnQnO1xuICAgICAgICAgICAgICAgIGxldCB0YXNrY29udCA9IHByb2pwYWdlLnF1ZXJ5U2VsZWN0b3IoJy50YXNrc2NvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIGxldCBwcm9qcGFnZXRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgdGlsZW9mcHJvaiR7dGlsZWlkbnVtfWApO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdGFzayBvZiBwcm9qcGFnZXRhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFza2NvbnQuY29udGFpbnModGFzaykpe1xuICAgICAgICAgICAgICAgICAgICB0YXNrY29udC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgcGFnZWNoaWxkbm9kZXMgPSBwYWdlY29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHBhZ2VjaGlsZG5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdHBhZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGVjaGlsZHJlbiA9IG5vZGUuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZWNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qdGl0bGVsaW5lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlbGluZWNoaWxkcmVuID0gY2hpbGQuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB0aXRsZWNoaWxkIG9mIHRpdGxlbGluZWNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGl0bGVjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plZGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZWNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5mb3Jtc1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvanRpdGxlID0gZS5jdXJyZW50VGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9qbmFtZSA9IHByb2p0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRwcm9qZm9ybSA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0cHJvamZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1zKCdlZGl0JywgcHJvam5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXZwcm9qdGFzaycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2p0YXNrID0gY2hpbGQucXVlcnlTZWxlY3RvcignLnByb2p0YXNrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvanRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LmZvcm1zWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb3BvcHVwID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9wb3B1cC5hcHBlbmRDaGlsZCh0b0RvRm9ybXMoJ2NyZWF0ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIH19ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgZWRpdGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0YnV0dG9uJyk7XG4gICAgICAgIGZvciAoY29uc3QgYnRuIG9mIGVkaXRidXR0b25zKSB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ2VkaXRidXR0b25waWMnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvZG90aWxlaWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICBsZXQgdG9kb2NoaWxkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG90aWxlaWQpLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0cm93ID0gdG9kb2NoaWxkc1swXTtcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3Ryb3djaGlsZHMgPSBmaXJzdHJvdy5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgIGxldCB0aWxlbmFtZSA9IGZpcnN0cm93Y2hpbGRzWzFdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZWRhdGUgPSBmaXJzdHJvd2NoaWxkc1szXTtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZXByaW8gPSBmaXJzdHJvd2NoaWxkc1s0XTtcbiAgICAgICAgICAgICAgICBsZXQgZGVzY2V4cGFuZCA9IHRvZG9jaGlsZHNbMV07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHRvZG9wb3B1cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvcG9wdXAnKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBvcHVwIG9mIHRvZG9wb3B1cHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9wdXAucGFyZW50RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgICAgIGlmICghZG9jdW1lbnQuZm9ybXNbMF0pIHtcbiAgICAgICAgICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0b0RvRm9ybXMoJ2VkaXQnLCB0aWxlbmFtZS50ZXh0Q29udGVudCwgZGVzY2V4cGFuZC50ZXh0Q29udGVudCwgdGlsZWRhdGUudGV4dENvbnRlbnQsIHRpbGVwcmlvLnRleHRDb250ZW50LCB0b2RvdGlsZWlkKSk7XG4gICAgICAgICAgICB9fX19XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnZWRpdGJ1dHRvbicpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9kb3RpbGVpZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICBsZXQgdG9kb2NoaWxkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG90aWxlaWQpLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0cm93ID0gdG9kb2NoaWxkc1swXTtcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3Ryb3djaGlsZHMgPSBmaXJzdHJvdy5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgIGxldCB0aWxlbmFtZSA9IGZpcnN0cm93Y2hpbGRzWzFdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZWRhdGUgPSBmaXJzdHJvd2NoaWxkc1szXTtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZXByaW8gPSBmaXJzdHJvd2NoaWxkc1s0XTtcbiAgICAgICAgICAgICAgICBsZXQgZGVzY2V4cGFuZCA9IHRvZG9jaGlsZHNbMV07XG4gICAgICAgICAgICAgICAgbGV0IHRvZG9wb3B1cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvcG9wdXAnKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBvcHVwIG9mIHRvZG9wb3B1cHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9wdXAucGFyZW50RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgICAgIGlmICghZG9jdW1lbnQuZm9ybXNbMF0pIHtcbiAgICAgICAgICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0b0RvRm9ybXMoJ2VkaXQnLCB0aWxlbmFtZS50ZXh0Q29udGVudCwgZGVzY2V4cGFuZC50ZXh0Q29udGVudCwgdGlsZWRhdGUudGV4dENvbnRlbnQsIHRpbGVwcmlvLnRleHRDb250ZW50LCB0b2RvdGlsZWlkKSk7XG4gICAgICAgICAgICB9fX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGxldCBjaGVja2JveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tib3gnKTtcbiAgICAgICAgZm9yIChjb25zdCBib3ggb2YgY2hlY2tib3hlcykge1xuICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYm94LmNoZWNrZWQgPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG90aWxlY29udGFpbmVyID0gYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0cm93ID0gYm94LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdGNoaWxkcyA9IGZpcnN0cm93LmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0aWxlZGVzY2J1dHRvbiA9IGZpcnN0Y2hpbGRzWzJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdGJ1dHRvbiA9IGZpcnN0Y2hpbGRzWzVdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVsZXRlYnV0dG9uID0gZmlyc3RjaGlsZHNbNl07XG4gICAgICAgICAgICAgICAgICAgIHRvZG90aWxlY29udGFpbmVyLnN0eWxlLmNvbG9yID0gJ3JnYmEoMjExLDIxMSwyMTEsMC41KSc7XG4gICAgICAgICAgICAgICAgICAgIHRpbGVkZXNjYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgICAgICAgICAgICAgZWRpdGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZWJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJveC5jaGVja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvdGlsZWNvbnRhaW5lciA9IGJveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdHJvdyA9IGJveC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RjaGlsZHMgPSBmaXJzdHJvdy5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGlsZWRlc2NidXR0b24gPSBmaXJzdGNoaWxkc1syXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRidXR0b24gPSBmaXJzdGNoaWxkc1s1XTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGV0ZWJ1dHRvbiA9IGZpcnN0Y2hpbGRzWzZdO1xuICAgICAgICAgICAgICAgICAgICB0b2RvdGlsZWNvbnRhaW5lci5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgICAgICAgICAgICAgICAgIHRpbGVkZXNjYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRidXR0b24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZHRwcm9qZGVsKCk7XG5cbiAgICAgICAgbGV0IGRlc2NidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGlsZWRlc2NidXR0b24nKTtcbiAgICAgICAgZm9yIChjb25zdCBidG4gb2YgZGVzY2J1dHRvbnMpIHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBwYXJlbnRkZXNjID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgZGVzY2V4cGFuZCA9IHBhcmVudGRlc2MubGFzdENoaWxkO1xuICAgICAgICAgICAgaWYgKGRlc2NleHBhbmQuc3R5bGUudmlzaWJpbGl0eSA9PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS53aWR0aCA9IHBhcmVudGRlc2Muc3R5bGUud2lkdGg7XG4gICAgICAgICAgICBkZXNjZXhwYW5kLnN0eWxlLmhlaWdodCA9ICdmaXQtY29udGVudCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkZXNjZXhwYW5kLnN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIGRlc2NleHBhbmQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgXG5cbiAgICByZXR1cm4gbWFpbjtcbiAgICBcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==