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
/* harmony export */   "toDoTile": () => (/* binding */ toDoTile)
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
        todotilecontainer.remove()
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

        let deletebuttons = document.getElementsByClassName('deletebutton');
        for (const del of deletebuttons) {
            del.addEventListener('click', (e) => {
                if (e.target.className == 'deletebuttonpic') {
                    let todotile = e.target.parentElement.parentElement.parentElement;
                    todotile.remove();
                }
                if (e.target.className == 'deletebutton') {
                    let todotile = e.target.parentElement.parentElement;
                    todotile.remove();
                }
            })
        }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FB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QTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0Esa0VBQWtFLE9BQU87QUFDekU7QUFDQSxnREFBZ0QsaUJBQWlCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQU87QUFDL0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdDQUFTO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxpQkFBaUI7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsVUFBVTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxVQUFVO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxZQUFZO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0RBQVU7QUFDdEIsNkRBQTZELFVBQVU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsc0JBQXNCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBTztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLDhCQUE4QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQyx5REFBeUQsRUFBRTtBQUMzRDtBQUNBLCtEQUErRCxFQUFFO0FBQ2pFO0FBQ0E7QUFDQSw4QkFBOEIsd0JBQXdCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdCQUF3QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix3QkFBd0I7QUFDbEQsK0JBQStCLDZEQUFRO0FBQ3ZDLHdCQUF3Qiw0REFBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdCQUF3QjtBQUNsRCwrQkFBK0IsNkRBQVE7QUFDdkMsd0JBQXdCLCtEQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHbUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcHlCbkk7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REK0w7O0FBRS9MO0FBQ0EsMkJBQTJCLG9EQUFPO0FBQ2xDLElBQUksd0RBQVc7QUFDZixvQ0FBb0MsMERBQWlCLEdBQUc7QUFDeEQsWUFBWTtBQUNaOztBQUVBO0FBQ0Esa0NBQWtDLDBEQUFpQixHQUFHO0FBQ3RELFlBQVk7QUFDWjs7QUFFQTtBQUNBLHNCQUFzQixtREFBVTtBQUNoQyxJQUFJLDBEQUFhO0FBQ2pCOztBQUVnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25CaEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXlEO0FBQ3ZCO0FBQ1U7QUFDRjtBQUNUO0FBQ2M7QUFDRDtBQUN6Qjs7QUFFbUk7QUFDdUM7QUFDM0k7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNDQUFRO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlFQUFJO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQ0FBTztBQUN6Qjs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyx3REFBVTtBQUM1Qzs7QUFFQTtBQUNBLFlBQVksdURBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVEQUFTO0FBQ2pCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFRO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0Msd0RBQVU7QUFDaEQ7O0FBRUE7QUFDQSxZQUFZLHVEQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx1REFBUztBQUNqQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBTztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNDQUFzQyx3REFBVTtBQUNoRDs7QUFFQTtBQUNBLFlBQVksdURBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx1REFBUztBQUNqQixLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscURBQU07QUFDakM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywwREFBWTtBQUM3QztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSwyREFBWTtBQUNwQixRQUFRLDJEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFTO0FBQ3pCLGdCQUFnQix3REFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLFVBQVU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsVUFBVTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLDBEQUFZO0FBQ2pGLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHVEQUFTO0FBQy9ELDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHVEQUFTO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHVEQUFTO0FBQzNDO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb2RvbXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvZm5zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb2ludGVyZmFjZXJzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9MaXRlcmF0YS1WYXJpYWJsZUZvbnRfb3Bzeix3Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0xpdGVyYXRhJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMaXRlcmF0YSc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44NSk7XFxuICAgIHRyYW5zZm9ybTogMC43cztcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGl0ZXJhdGEnO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMHB4LCAzMDBweCkgMWZyO1xcbn1cXG5cXG4jdGl0bGVCbG9jayB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTQwNzQ7XFxuICAgIG9wYWNpdHk6IDAuOTc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xcbn1cXG5cXG4jcGFnZWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxufVxcblxcbiN0aXRsZUJsb2NrIGJ1dHRvbiB7XFxuICAgIG1heC13aWR0aDogNTBweDtcXG59XFxuXFxuI21lbnVUb2dnbGUge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4jbWVudVRvZ2dsZVBpYyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4jdGl0bGVNYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiN0aXRsZVBpYyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiN0aXRsZVRleHQge1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxufVxcblxcblxcblxcblxcbiNtZW51IGltZ1tzcmMkPVxcXCIuc3ZnXFxcIl0ge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgbWluLWhlaWdodDogMjBweDtcXG4gICAgbWluLXdpZHRoOiAyMHB4O1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTcwcHggbWluLWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTkwMDA7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe31cXG5cXG4jcGVyaW9kTGlzdHMgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQzY5OTc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcblxcbiNwZXJpb2RMaXN0cyB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbiNob21lIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuI3RvZGF5IHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuI3RoaXNXZWVrIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuI3Byb2plY3RMaXN0cyB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jcHJvakxpc3RUaXRsZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvakxpc3RUZXh0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE4cHggKyAxdncpO1xcbn1cXG5cXG4jcHJvakFkZEJ1dHRvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIHBhZGRpbmc6IDFweDtcXG4gICAgbWF4LWhlaWdodDogMzVweDtcXG4gICAgbWF4LXdpZHRoOiAzNXB4O1xcbiAgICBtaW4taGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuI3Byb2pBZGRCdXR0b25QaWMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4jcHJvamVjdGZvcm1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNwcm9qZWN0Zm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0xpdGVyYXRhJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBREJGRjtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcHJvamZvcm10aXRsZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbiNwcm9qaW5wdXRjb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNwcm9qaW5wdXQge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgXFxufVxcblxcbiNwcm9qZm9ybWJ0bnMge1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG5cXG59XFxuXFxuI3Byb2pmb3JtYnRucyBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG5cXG4jcHJvamRlbGV0ZSB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIG1heC13aWR0aDogMTQ1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4jcHJvamxhYmVsY3JlYXRlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC00MHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG59XFxuXFxuI3Byb2psYWJlbGVkaXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTQwcHg7XFxuICAgIGxlZnQ6IDEwcHg7XFxufVxcblxcbiNwcm9qVGlsZUxpc3Qge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuI3Byb2pUaWxlTGlzdCBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQzY5OTc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3RwYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucGVyaW9kY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wZXJpb2Rjb250YWluZXIgPiAucGVyaW9kdGl0bGUge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiAjMDk0MDc0O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5wZXJpb2Rjb250YWluZXIgPiAudG9kb3BvcHVwIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnBlcmlvZGNvbnRhaW5lciA+IC50YXNraGVhZGVycyB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbi5wZXJpb2Rjb250YWluZXIgPiAucGVyaW9kdGFza2NvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxufVxcblxcbi5wcm9qdGl0bGVsaW5lIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLnByb2pwYWdldGl0bGUge1xcbiAgICBjb2xvcjogIzA5NDA3NDtcXG59XFxuXFxuLnByb2plZGl0cGljIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbi5wcm9qZWRpdCB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuLmVkaXRwcm9qZm9ybSB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kaXZwcm9qdGFzayB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvanRhc2sge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFOTAwMDtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBcXG59XFxuXFxuI3RvZG9wb3B1cCB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxufVxcblxcbiN0b2RvZm9ybWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuI3RvZG9mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgICByb3ctZ2FwOiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQkZGO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiN0b2RvZm9ybWNvbnRhaW5lciBpbnB1dCwgI3RvZG9mb3JtY29udGFpbmVyIHNlbGVjdHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4jdG9kb2Zvcm1jb250YWluZXIgbGFiZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdG9wOiAtMjRweDtcXG59XFxuXFxuI3RvZG9mb3JtdGl0bGUge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jc2Vjb25kdG9kbyB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggMTIycHggNjVweDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jdGFza25hbWUge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI2RhdGVjb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICB3aWR0aDogMTIycHg7XFxufVxcblxcblxcbiNwcmlvcml0eWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIHdpZHRoOiA2NXB4O1xcbn1cXG5cXG4jZGVzY3JpcGNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbiNmb3VydGh0b2RvIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcXG4gICAgY29sdW1uLWdhcDogMTVweDtcXG59XFxuXFxuI2ZvdXJ0aHRvZG8gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuI3N1Ym1pdHRhc2sge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbiNjYW5jZWx0YXNrIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG5cXG5cXG4udGFza2hlYWRlcnMge1xcbiAgICBncmlkLXJvdzogNS82O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoNTBweCwgMjUwcHgpIG1pbm1heCg1MHB4LCAyMDBweCkgbWlubWF4KDc1cHgsIDIwMHB4KSBtaW5tYXgoNzVweCwgMjAwcHgpIDcwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFza2hlYWRlcnM6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubmFtZWhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIG1pbi13aWR0aDogNTBweDtcXG59XFxuXFxuLmRlc2NoZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBtaW4td2lkdGg6IDYwcHg7XFxufVxcblxcbi5kYXRlaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgbWluLXdpZHRoOiA4NXB4O1xcblxcbn1cXG5cXG4ucHJpb2hlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiA0LzU7XFxuICAgIG1pbi13aWR0aDogNjVweDtcXG5cXG59XFxuXFxuLnRvZG90aWxlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5maXJzdHJvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIGF1dG8pO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBjb2x1bW4tZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG59XFxuXFxuLmZpcnN0cm93IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi50b2RvdGlsZSBpbWcge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgbWF4LWhlaWdodDogMjBweDtcXG4gICAgbWF4LXdpZHRoOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5cXG4uZWRpdGJ1dHRvbiwgLmRlbGV0ZWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4udGlsZW5hbWUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg1MHB4LCAyNTBweCk7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG1pbi13aWR0aDogNTBweDtcXG59XFxuXFxuLnRpbGVkZXNjZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoNjBweCwgMjAwcHgpO1xcbiAgICBtaW4td2lkdGg6IDYwcHg7XFxufVxcblxcbi50aWxlZGVzY2J1dHRvbiB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4udGlsZWRhdGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg4NXB4LCAyMDBweCk7XFxuICAgIG1pbi13aWR0aDogODVweDtcXG59XFxuXFxuLnRpbGVwcmlvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoODVweCwgMjAwcHgpO1xcbiAgICBtaW4td2lkdGg6IDY1cHg7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uY2hlY2tib3g6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXNjZXhwYW5kIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsMERBQStEO0lBQy9ELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7Ozs7QUFLQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxnQkFB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ZTs7QUFFbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGl0ZXJhdGEnO1xcbiAgICBzcmM6IHVybCgnLi9MaXRlcmF0YS1WYXJpYWJsZUZvbnRfb3Bzeix3Z2h0LnR0ZicpIGZvcm1hdCgndHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMaXRlcmF0YSc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44NSk7XFxuICAgIHRyYW5zZm9ybTogMC43cztcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGl0ZXJhdGEnO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMHB4LCAzMDBweCkgMWZyO1xcbn1cXG5cXG4jdGl0bGVCbG9jayB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTQwNzQ7XFxuICAgIG9wYWNpdHk6IDAuOTc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xcbn1cXG5cXG4jcGFnZWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxufVxcblxcbiN0aXRsZUJsb2NrIGJ1dHRvbiB7XFxuICAgIG1heC13aWR0aDogNTBweDtcXG59XFxuXFxuI21lbnVUb2dnbGUge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4jbWVudVRvZ2dsZVBpYyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4jdGl0bGVNYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiN0aXRsZVBpYyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiN0aXRsZVRleHQge1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxufVxcblxcblxcblxcblxcbiNtZW51IGltZ1tzcmMkPVxcXCIuc3ZnXFxcIl0ge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgbWluLWhlaWdodDogMjBweDtcXG4gICAgbWluLXdpZHRoOiAyMHB4O1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTcwcHggbWluLWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTkwMDA7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe31cXG5cXG4jcGVyaW9kTGlzdHMgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQzY5OTc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcblxcbiNwZXJpb2RMaXN0cyB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbiNob21lIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuI3RvZGF5IHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuI3RoaXNXZWVrIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuI3Byb2plY3RMaXN0cyB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jcHJvakxpc3RUaXRsZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvakxpc3RUZXh0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE4cHggKyAxdncpO1xcbn1cXG5cXG4jcHJvakFkZEJ1dHRvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIHBhZGRpbmc6IDFweDtcXG4gICAgbWF4LWhlaWdodDogMzVweDtcXG4gICAgbWF4LXdpZHRoOiAzNXB4O1xcbiAgICBtaW4taGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuI3Byb2pBZGRCdXR0b25QaWMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4jcHJvamVjdGZvcm1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNwcm9qZWN0Zm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0xpdGVyYXRhJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBREJGRjtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcHJvamZvcm10aXRsZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbiNwcm9qaW5wdXRjb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNwcm9qaW5wdXQge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgXFxufVxcblxcbiNwcm9qZm9ybWJ0bnMge1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG5cXG59XFxuXFxuI3Byb2pmb3JtYnRucyBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG5cXG4jcHJvamRlbGV0ZSB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIG1heC13aWR0aDogMTQ1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4jcHJvamxhYmVsY3JlYXRlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC00MHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG59XFxuXFxuI3Byb2psYWJlbGVkaXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTQwcHg7XFxuICAgIGxlZnQ6IDEwcHg7XFxufVxcblxcbiNwcm9qVGlsZUxpc3Qge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuI3Byb2pUaWxlTGlzdCBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQzY5OTc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3RwYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucGVyaW9kY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wZXJpb2Rjb250YWluZXIgPiAucGVyaW9kdGl0bGUge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiAjMDk0MDc0O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5wZXJpb2Rjb250YWluZXIgPiAudG9kb3BvcHVwIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnBlcmlvZGNvbnRhaW5lciA+IC50YXNraGVhZGVycyB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbi5wZXJpb2Rjb250YWluZXIgPiAucGVyaW9kdGFza2NvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxufVxcblxcbi5wcm9qdGl0bGVsaW5lIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLnByb2pwYWdldGl0bGUge1xcbiAgICBjb2xvcjogIzA5NDA3NDtcXG59XFxuXFxuLnByb2plZGl0cGljIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbi5wcm9qZWRpdCB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuLmVkaXRwcm9qZm9ybSB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kaXZwcm9qdGFzayB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvanRhc2sge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFOTAwMDtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBcXG59XFxuXFxuI3RvZG9wb3B1cCB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxufVxcblxcbiN0b2RvZm9ybWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuI3RvZG9mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgICByb3ctZ2FwOiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQkZGO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiN0b2RvZm9ybWNvbnRhaW5lciBpbnB1dCwgI3RvZG9mb3JtY29udGFpbmVyIHNlbGVjdHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4jdG9kb2Zvcm1jb250YWluZXIgbGFiZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdG9wOiAtMjRweDtcXG59XFxuXFxuI3RvZG9mb3JtdGl0bGUge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jc2Vjb25kdG9kbyB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggMTIycHggNjVweDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jdGFza25hbWUge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI2RhdGVjb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICB3aWR0aDogMTIycHg7XFxufVxcblxcblxcbiNwcmlvcml0eWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIHdpZHRoOiA2NXB4O1xcbn1cXG5cXG4jZGVzY3JpcGNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbiNmb3VydGh0b2RvIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcXG4gICAgY29sdW1uLWdhcDogMTVweDtcXG59XFxuXFxuI2ZvdXJ0aHRvZG8gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuI3N1Ym1pdHRhc2sge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbiNjYW5jZWx0YXNrIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG5cXG5cXG4udGFza2hlYWRlcnMge1xcbiAgICBncmlkLXJvdzogNS82O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoNTBweCwgMjUwcHgpIG1pbm1heCg1MHB4LCAyMDBweCkgbWlubWF4KDc1cHgsIDIwMHB4KSBtaW5tYXgoNzVweCwgMjAwcHgpIDcwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFza2hlYWRlcnM6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubmFtZWhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIG1pbi13aWR0aDogNTBweDtcXG59XFxuXFxuLmRlc2NoZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBtaW4td2lkdGg6IDYwcHg7XFxufVxcblxcbi5kYXRlaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgbWluLXdpZHRoOiA4NXB4O1xcblxcbn1cXG5cXG4ucHJpb2hlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiA0LzU7XFxuICAgIG1pbi13aWR0aDogNjVweDtcXG5cXG59XFxuXFxuLnRvZG90aWxlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5maXJzdHJvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIGF1dG8pO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBjb2x1bW4tZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG59XFxuXFxuLmZpcnN0cm93IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi50b2RvdGlsZSBpbWcge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgbWF4LWhlaWdodDogMjBweDtcXG4gICAgbWF4LXdpZHRoOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5cXG4uZWRpdGJ1dHRvbiwgLmRlbGV0ZWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4udGlsZW5hbWUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg1MHB4LCAyNTBweCk7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG1pbi13aWR0aDogNTBweDtcXG59XFxuXFxuLnRpbGVkZXNjZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoNjBweCwgMjAwcHgpO1xcbiAgICBtaW4td2lkdGg6IDYwcHg7XFxufVxcblxcbi50aWxlZGVzY2J1dHRvbiB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4udGlsZWRhdGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg4NXB4LCAyMDBweCk7XFxuICAgIG1pbi13aWR0aDogODVweDtcXG59XFxuXFxuLnRpbGVwcmlvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoODVweCwgMjAwcHgpO1xcbiAgICBtaW4td2lkdGg6IDY1cHg7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uY2hlY2tib3g6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXNjZXhwYW5kIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtjcmVhdGVwcm9qdGlsZSwgcHJvanBhZ2VJRCwgZGVsZXRlcHJvan0gZnJvbSAnLi90b2RvaW50ZXJmYWNlcnMuanMnO1xuaW1wb3J0IGVkaXRwaWMgZnJvbSAnLi9wZW5jaWwtb3V0bGluZS5zdmcnO1xuaW1wb3J0IGRlbGV0ZXBpYyBmcm9tICcuL2RlbGV0ZS5zdmcnO1xuaW1wb3J0IGlzVG9kYXkgZnJvbSAnZGF0ZS1mbnMvaXNUb2RheSc7XG5pbXBvcnQgaXNTYW1lV2VlayBmcm9tICdkYXRlLWZucy9pc1NhbWVXZWVrJztcbmltcG9ydCBwYXJzZUlTTyBmcm9tICdkYXRlLWZucy9wYXJzZUlTTyc7XG5cbmNvbnN0IHByb2phcnJheSA9IFtdO1xuY29uc3QgcHJvanBhZ2VzYXJyYXkgPSBbXTtcblxuY29uc3Qgc3RvcmVwcm9qZWN0cyA9IChpdGVtKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtKTtcbiAgICBsZXQgZWxlbWVudHN0cmluZyA9IGVsZW1lbnQub3V0ZXJIVE1MO1xuICAgIHByb2phcnJheS5wdXNoKGVsZW1lbnRzdHJpbmcpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2phcnJheSkpO1xuICAgIGNvbnNvbGUubG9nKHByb2phcnJheS5sZW5ndGgpO1xufVxuXG5jb25zdCBsb2FkcHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFydW5wYWNrZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpIHx8ICdbXScpO1xuICAgIGNvbnNvbGUubG9nKHBhcnVucGFja2VkKTtcbiAgICBsZXQgcHJvalRpbGVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pUaWxlTGlzdCcpO1xuICAgIHBhcnVucGFja2VkLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qVGlsZUxpc3QuaW5uZXJIVE1MICs9IHByb2plY3Q7XG4gICAgcHJvamFycmF5LnB1c2gocHJvamVjdCk7XG4gICAgfSlcbn1cblxuY29uc3Qgc3RvcmVwcm9qcGFnZXMgPSAoaXRlbSkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbSk7XG4gICAgbGV0IGVsZW1lbnRzdHJpbmcgPSBlbGVtZW50Lm91dGVySFRNTDtcbiAgICBwcm9qcGFnZXNhcnJheS5wdXNoKGVsZW1lbnRzdHJpbmcpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cGFnZXMnLCBKU09OLnN0cmluZ2lmeShwcm9qcGFnZXNhcnJheSkpO1xufVxuXG5jb25zdCBsb2FkcHJvanBhZ2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBwcGFydW5wYWNrZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cGFnZXMnKSB8fCAnW10nKTtcbiAgICBsZXQgcGFnZWNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlY29udGFpbmVyJyk7XG4gICAgcHBwYXJ1bnBhY2tlZC5mb3JFYWNoKChwYWdlKSA9PiB7XG4gICAgICAgIHBhZ2Vjb250YWluZXIuaW5uZXJIVE1MICs9IHBhZ2U7XG4gICAgICAgIHBhZ2Vjb250YWluZXIubGFzdENoaWxkLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgcGFnZWNvbnRhaW5lci5sYXN0Q2hpbGQuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgcGFnZWNvbnRhaW5lci5sYXN0Q2hpbGQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgIHByb2pwYWdlc2FycmF5LnB1c2gocGFnZSk7XG4gICAgfSlcbn1cblxuY29uc3QgY2xlYXJmb3JtcyA9ICgpID0+IHtcbiAgICBsZXQgZm9ybXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtJylcbiAgICBpZiAoZm9ybXMgIT09IG51bGwpIHtcbiAgICAgICAgZm9yIChjb25zdCBmb3JtIG9mIGZvcm1zKSB7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCB0b0RvRm9ybXMgPSAodG9kb2Zvcm10eXBlLCB0b2RvbmFtZSwgdG9kb2Rlc2NyaXAsIHRvZG9kYXRlLCB0b2RvcHJpbywgdG9kb3RpbGVpZCkgPT4ge1xuICAgIGxldCB0b2RvZm9ybWNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9mb3JtY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb2Zvcm1jb250YWluZXInKTtcbiAgICB0b2RvZm9ybWNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0nKTtcbiAgICBsZXQgdG9kb2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdG9kb2Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvZm9ybScpO1xuICAgIHRvZG9mb3JtY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9mb3JtKTtcbiAgICBcbiAgICBsZXQgdG9kb2Zvcm10aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9mb3JtdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvZm9ybXRpdGxlJyk7XG4gICAgaWYgKHRvZG9mb3JtdHlwZSA9PSAnY3JlYXRlJykge1xuICAgIHRvZG9mb3JtdGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuICAgIH1cbiAgICBlbHNlIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgdG9kb2Zvcm10aXRsZS50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xuICAgIH1cbiAgICB0b2RvZm9ybS5hcHBlbmRDaGlsZCh0b2RvZm9ybXRpdGxlKTtcblxuICAgIGxldCBzZWNvbmR0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2Vjb25kdG9kby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlY29uZHRvZG8nKTtcbiAgICB0b2RvZm9ybS5hcHBlbmRDaGlsZChzZWNvbmR0b2RvKTtcblxuICAgIGxldCBuYW1lY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZWNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWVjb250YWluZXInKTtcbiAgICBsZXQgdGFza25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGFza25hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrbmFtZScpO1xuICAgIHRhc2tuYW1lLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgaWYgKHRvZG9mb3JtdHlwZSA9PSAnZWRpdCcpIHtcbiAgICAgICAgdGFza25hbWUuZGVmYXVsdFZhbHVlID0gdG9kb25hbWU7XG4gICAgfVxuICAgIGxldCBuYW1lbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG5hbWVsYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWVsYWJlbCcpO1xuICAgIG5hbWVsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrbmFtZScpO1xuICAgIG5hbWVsYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIE5hbWU6ICc7XG5cbiAgICBzZWNvbmR0b2RvLmFwcGVuZENoaWxkKG5hbWVjb250YWluZXIpO1xuICAgIG5hbWVjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza25hbWUpO1xuICAgIG5hbWVjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZWxhYmVsKTtcblxuICAgIGxldCBkZXNjcmlwY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXBjb250YWluZXInKTtcbiAgICBsZXQgZGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGRlc2NyaXAuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwJyk7XG4gICAgZGVzY3JpcC5zdHlsZS53aWR0aCA9ICczMCUnO1xuICAgIGRlc2NyaXAuc3R5bGUuaGVpZ2h0ID0gJzMwcHgnO1xuICAgIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgIGRlc2NyaXAuZGVmYXVsdFZhbHVlID0gdG9kb2Rlc2NyaXA7XG4gICAgfTtcbiAgICBsZXQgZGVzY3JpcGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjcmlwbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwbGFiZWwnKTtcbiAgICBkZXNjcmlwbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcCcpO1xuICAgIGRlc2NyaXBsYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJztcblxuICAgIHRvZG9mb3JtLmFwcGVuZENoaWxkKGRlc2NyaXBjb250YWluZXIpO1xuICAgIGRlc2NyaXBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcCk7XG4gICAgZGVzY3JpcGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwbGFiZWwpO1xuXG4gICAgbGV0IGRhdGVjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZWNvbnRhaW5lcicpO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgaWYgKHRvZG9mb3JtdHlwZSA9PSAnZWRpdCcpIHtcbiAgICAgICAgZGF0ZS5kZWZhdWx0VmFsdWUgPSB0b2RvZGF0ZTtcbiAgICB9O1xuICAgIGxldCBkYXRlbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVsYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGVsYWJlbCcpO1xuICAgIGRhdGVsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlJyk7XG4gICAgZGF0ZWxhYmVsLnRleHRDb250ZW50ID0gJ0RhdGU6ICc7XG5cbiAgICBzZWNvbmR0b2RvLmFwcGVuZENoaWxkKGRhdGVjb250YWluZXIpO1xuICAgIGRhdGVjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgZGF0ZWNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlbGFiZWwpO1xuXG4gICAgXG4gICAgbGV0IHByaW9yaXR5Y29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHljb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eWNvbnRhaW5lcicpO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIFxuICAgIGxldCBwcmlvcml0eWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eWxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHlsYWJlbCcpO1xuICAgIHByaW9yaXR5bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICBwcmlvcml0eWxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnO1xuICAgIGxldCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaGlnaC52YWx1ZSA9IGhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgbGV0IG5vcm1hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG5vcm1hbC52YWx1ZSA9IG5vcm1hbC50ZXh0Q29udGVudCA9ICdOb3JtYWwnO1xuICAgIGxldCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBsb3cudmFsdWUgPSBsb3cudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoKTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChub3JtYWwpO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvdyk7XG4gICAgaWYgKHRvZG9mb3JtdHlwZSA9PSAnZWRpdCcpIHtcbiAgICAgICAgaWYgKHRvZG9wcmlvID09ICdIaWdoJykge1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9IGhpZ2gudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvZG9wcmlvID09ICdOb3JtYWwnKSB7XG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gbm9ybWFsLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2RvcHJpbyA9PSAnTG93Jykge1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9IGxvdy52YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzZWNvbmR0b2RvLmFwcGVuZENoaWxkKHByaW9yaXR5Y29udGFpbmVyKTtcbiAgICBwcmlvcml0eWNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgcHJpb3JpdHljb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlsYWJlbCk7XG5cbiAgICBsZXQgZm91cnRodG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvdXJ0aHRvZG8uc2V0QXR0cmlidXRlKCdpZCcsICdmb3VydGh0b2RvJyk7XG4gICAgdG9kb2Zvcm0uYXBwZW5kQ2hpbGQoZm91cnRodG9kbyk7XG5cbiAgICBsZXQgc3VibWl0dGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdHRhc2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIHN1Ym1pdHRhc2suc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBzdWJtaXR0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0dGFzaycpO1xuICAgIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2NyZWF0ZScpIHtcbiAgICBzdWJtaXR0YXNrLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBUYXNrJztcbiAgICB9XG4gICAgZWxzZSBpZiAodG9kb2Zvcm10eXBlID09ICdlZGl0Jykge1xuICAgIHN1Ym1pdHRhc2sudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICB9XG5cbiAgICBmb3VydGh0b2RvLmFwcGVuZENoaWxkKHN1Ym1pdHRhc2spO1xuXG4gICAgc3VibWl0dGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICh0b2RvZm9ybS5yZXBvcnRWYWxpZGl0eSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAodG9kb2Zvcm10eXBlID09ICdjcmVhdGUnKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdHBhcmVudCA9IHRvZG9mb3JtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgbGV0IHBhcmVudElEID0gcHJvamVjdHBhcmVudC5pZDtcbiAgICAgICAgICAgIGxldCBwYXJlbnRudW0gPSBwYXJlbnRJRC5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgICAgICAgICBsZXQgcHJvamVjdHRhc2tjb250ID0gcHJvamVjdHBhcmVudC5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICBwcm9qZWN0dGFza2NvbnQuYXBwZW5kQ2hpbGQodG9Eb1RpbGUocGFyZW50bnVtLCB0YXNrbmFtZS52YWx1ZSwgZGVzY3JpcC52YWx1ZSwgZGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpKTtcbiAgICAgICAgICAgIHRvZG9mb3JtY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgcHJvanBhZ2VzYXJyYXlbcGFyZW50bnVtXSA9IHByb2plY3RwYXJlbnQub3V0ZXJIVE1MO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RwYWdlcycsIEpTT04uc3RyaW5naWZ5KHByb2pwYWdlc2FycmF5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdHBhcmVudCA9IHRvZG9mb3JtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgbGV0IHBhcmVudElEID0gcHJvamVjdHBhcmVudC5pZDtcbiAgICAgICAgICAgIGxldCBwYXJlbnRudW0gPSBwYXJlbnRJRC5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgICAgICAgICBsZXQgdG9kb3RpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvdGlsZWlkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG90aWxlaWQpO1xuICAgICAgICAgICAgbGV0IHRpbGVjaGlsZHMgPSB0b2RvdGlsZS5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aWxlY2hpbGRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTmFtZSA9PSAnZmlyc3Ryb3cnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdHJvd2NoaWxkcyA9IGNoaWxkLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgcm93Y2hpbGQgb2YgZmlyc3Ryb3djaGlsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3djaGlsZC5jbGFzc05hbWUgPT0gJ3RpbGVuYW1lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd2NoaWxkLnRleHRDb250ZW50ID0gdGFza25hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93Y2hpbGQuY2xhc3NOYW1lID09ICd0aWxlZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3djaGlsZC50ZXh0Q29udGVudCA9IGRhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93Y2hpbGQuY2xhc3NOYW1lID09ICd0aWxlcHJpbycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3djaGlsZC50ZXh0Q29udGVudCA9IHByaW9yaXR5LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLmNsYXNzTmFtZSA9PSAnZGVzY2V4cGFuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudGV4dENvbnRlbnQgPSBkZXNjcmlwLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvZG9mb3JtY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgcHJvanBhZ2VzYXJyYXlbcGFyZW50bnVtXSA9IHByb2plY3RwYXJlbnQub3V0ZXJIVE1MO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RwYWdlcycsIEpTT04uc3RyaW5naWZ5KHByb2pwYWdlc2FycmF5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cblxuICAgICAgICAgfSlcblxuICAgIGxldCBjYW5jZWx0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsdGFzay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgY2FuY2VsdGFzay5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGNhbmNlbHRhc2suc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWx0YXNrJyk7XG4gICAgY2FuY2VsdGFzay50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgY2FuY2VsdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHRvZG9mb3JtLnJlbW92ZSgpO1xuICAgICAgICB0b2RvZm9ybWNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgZm91cnRodG9kby5hcHBlbmRDaGlsZChjYW5jZWx0YXNrKTtcblxuICAgIHJldHVybiB0b2RvZm9ybWNvbnRhaW5lcjtcblxufVxuXG5cbmNvbnN0IHRvRG9UaWxlID0gKHRpbGVpZCwgdG9kb25hbWUsIHRvZG9kZXNjcmlwLCB0b2RvZGF0ZSwgdG9kb3ByaW8pID0+IHtcbiAgICBsZXQgdG9kb3RpbGVjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvdGlsZWNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRvZG90aWxlIHRpbGVvZnByb2oke3RpbGVpZH1gKTtcbiAgICBsZXQgdG9kb3RpbGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9kb3RpbGUnKVxuICAgIHRvZG90aWxlY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgdGlsZSR7dG9kb3RpbGVzLmxlbmd0aH1gKTtcbiAgICB0b2RvdGlsZWNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHBhZ2Vjb250YWluZXIuc3R5bGUud2lkdGg7XG5cbiAgICBsZXQgZmlyc3Ryb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmaXJzdHJvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpcnN0cm93Jyk7XG4gICAgdG9kb3RpbGVjb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3Ryb3cpO1xuXG4gICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrYm94Jyk7XG4gICAgZmlyc3Ryb3cuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCA9PSB0cnVlICkge1xuICAgICAgICAgICAgdG9kb3RpbGVjb250YWluZXIuc3R5bGUuY29sb3IgPSAncmdiYSgyMTEsMjExLDIxMSwwLjUpJztcbiAgICAgICAgICAgIHRpbGVkZXNjYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgICAgIGVkaXRidXR0b24uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgICAgICAgICAgZGVsZXRlYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGVja2JveC5jaGVja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0b2RvdGlsZWNvbnRhaW5lci5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgICAgICAgICB0aWxlZGVzY2J1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgZWRpdGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgZGVsZXRlYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgbGV0IHRpbGVuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGlsZW5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aWxlbmFtZScpO1xuICAgIHRpbGVuYW1lLnRleHRDb250ZW50ID0gdG9kb25hbWU7XG4gICAgZmlyc3Ryb3cuYXBwZW5kQ2hpbGQodGlsZW5hbWUpO1xuXG4gICAgbGV0IHRpbGVkZXNjZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGlsZWRlc2NkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aWxlZGVzY2RpdicpO1xuICAgIGZpcnN0cm93LmFwcGVuZENoaWxkKHRpbGVkZXNjZGl2KTtcbiAgICBsZXQgdGlsZWRlc2NidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aWxlZGVzY2J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgdGlsZWRlc2NidXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aWxlZGVzY2J1dHRvbicpO1xuICAgIHRpbGVkZXNjYnV0dG9uLnRleHRDb250ZW50ID0gJ0Rlc2MuJztcbiAgICB0aWxlZGVzY2Rpdi5hcHBlbmRDaGlsZCh0aWxlZGVzY2J1dHRvbik7XG5cbiAgICB0aWxlZGVzY2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGRlc2NleHBhbmQuc3R5bGUudmlzaWJpbGl0eSA9PSAnaGlkZGVuJykge1xuICAgICAgICBkZXNjZXhwYW5kLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIGRlc2NleHBhbmQuc3R5bGUud2lkdGggPSB0b2RvdGlsZWNvbnRhaW5lci5zdHlsZS53aWR0aDtcbiAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS5oZWlnaHQgPSAnZml0LWNvbnRlbnQnO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAoZGVzY2V4cGFuZC5zdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBkZXNjZXhwYW5kLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICBkZXNjZXhwYW5kLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxldCB0aWxlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbGVkYXRlLnRleHRDb250ZW50ID0gdG9kb2RhdGU7XG4gICAgdGlsZWRhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aWxlZGF0ZScpO1xuICAgIGZpcnN0cm93LmFwcGVuZENoaWxkKHRpbGVkYXRlKTtcbiAgICBcbiAgICBsZXQgdGlsZXByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aWxlcHJpby50ZXh0Q29udGVudCA9IHRvZG9wcmlvO1xuICAgIHRpbGVwcmlvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZXByaW8nKTtcbiAgICBmaXJzdHJvdy5hcHBlbmRDaGlsZCh0aWxlcHJpbyk7XG5cbiAgICBsZXQgZWRpdGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGVkaXRidXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0YnV0dG9uJyk7XG4gICAgbGV0IGVkaXRidXR0b25waWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBlZGl0YnV0dG9ucGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdGJ1dHRvbnBpYycpO1xuICAgIGVkaXRidXR0b25waWMuc3JjID0gZWRpdHBpYztcbiAgICBlZGl0YnV0dG9uLmFwcGVuZENoaWxkKGVkaXRidXR0b25waWMpO1xuXG4gICAgZmlyc3Ryb3cuYXBwZW5kQ2hpbGQoZWRpdGJ1dHRvbik7XG5cbiAgICBlZGl0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnZWRpdGJ1dHRvbnBpYycpIHtcbiAgICAgICAgbGV0IHRvZG90aWxlaWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgY29uc29sZS5sb2codG9kb3RpbGVpZCk7XG4gICAgICAgIGxldCB0b2RvcG9wdXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9kb3BvcHVwJyk7XG4gICAgICAgIGZvciAoY29uc3QgcG9wdXAgb2YgdG9kb3BvcHVwcykge1xuICAgICAgICBpZiAocG9wdXAucGFyZW50RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJykge1xuICAgICAgICBpZiAoIWRvY3VtZW50LmZvcm1zWzBdKSB7XG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHRvRG9Gb3JtcygnZWRpdCcsIHRpbGVuYW1lLnRleHRDb250ZW50LCBkZXNjZXhwYW5kLnRleHRDb250ZW50LCB0aWxlZGF0ZS50ZXh0Q29udGVudCwgdGlsZXByaW8udGV4dENvbnRlbnQsIHRvZG90aWxlaWQpKTtcbiAgICB9fX1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09ICdlZGl0YnV0dG9uJykge1xuICAgICAgICBsZXQgdG9kb3RpbGVpZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgY29uc29sZS5sb2codG9kb3RpbGVpZCk7XG4gICAgICAgIGxldCB0b2RvcG9wdXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9kb3BvcHVwJyk7XG4gICAgICAgIGZvciAoY29uc3QgcG9wdXAgb2YgdG9kb3BvcHVwcykge1xuICAgICAgICBpZiAocG9wdXAucGFyZW50RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJykge1xuICAgICAgICBpZiAoIWRvY3VtZW50LmZvcm1zWzBdKSB7XG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHRvRG9Gb3JtcygnZWRpdCcsIHRpbGVuYW1lLnRleHRDb250ZW50LCBkZXNjZXhwYW5kLnRleHRDb250ZW50LCB0aWxlZGF0ZS50ZXh0Q29udGVudCwgdGlsZXByaW8udGV4dENvbnRlbnQsIHRvZG90aWxlaWQpKTtcbiAgICB9fX1cbiAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgbGV0IGRlbGV0ZWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZWJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgZGVsZXRlYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVsZXRlYnV0dG9uJyk7XG4gICAgbGV0IGRlbGV0ZWJ1dHRvbnBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRlbGV0ZWJ1dHRvbnBpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbGV0ZWJ1dHRvbnBpYycpO1xuICAgIGRlbGV0ZWJ1dHRvbnBpYy5zcmMgPSBkZWxldGVwaWM7XG4gICAgZGVsZXRlYnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZWJ1dHRvbnBpYyk7XG4gICAgZmlyc3Ryb3cuYXBwZW5kQ2hpbGQoZGVsZXRlYnV0dG9uKTtcblxuICAgIGRlbGV0ZWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHRvZG90aWxlY29udGFpbmVyLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIGxldCBkZXNjZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY2V4cGFuZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2NleHBhbmQnKTtcbiAgICBkZXNjZXhwYW5kLnRleHRDb250ZW50ID0gYCR7dG9kb2Rlc2NyaXB9YDtcbiAgICBkZXNjZXhwYW5kLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBkZXNjZXhwYW5kLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgZGVzY2V4cGFuZC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICB0b2RvdGlsZWNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjZXhwYW5kKTtcblxuICAgIHJldHVybiB0b2RvdGlsZWNvbnRhaW5lcjtcblxufVxuXG5cbmNvbnN0IHByb2plY3RUaWxlID0gKHByb2plY3RuYW1lKSA9PiB7XG4gICAgbGV0IHByb2p0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvanRpbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0dGlsZScpO1xuICAgIHByb2p0aWxlLnRleHRDb250ZW50ID0gcHJvamVjdG5hbWU7XG4gICAgcHJvanRpbGUuc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0JHtwcm9qYXJyYXkubGVuZ3RofWApO1xuICAgIGxldCBwcm9qVGlsZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvalRpbGVMaXN0Jyk7XG4gICAgcHJvalRpbGVMaXN0LmFwcGVuZENoaWxkKHByb2p0aWxlKTtcbiAgICBzdG9yZXByb2plY3RzKHByb2p0aWxlLmlkKTtcblxuICAgIHByb2p0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbGV0IGRlc2NzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVzY2V4cGFuZCcpO1xuICAgICAgICBpZiAoZGVzY3MubGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRlc2Mgb2YgZGVzY3MpIHtcbiAgICAgICAgICAgICAgICBkZXNjLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBkZXNjLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS5oZWlnaHQgPSAnMHB4OydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgY2xlYXJmb3JtcygpO1xuICAgICAgICBzb3J0dG9kb3MoKTtcbiAgICAgICAgbGV0IHBhZ2Vjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgcGFnZW5vZGVzID0gcGFnZWNvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgcGFnZW5vZGVzKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5zdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCB0aWxlaWQgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgbGV0IHRpbGVpZG51bSA9IHRpbGVpZC5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgICAgIGxldCBwcm9qcGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qcGFnZSR7dGlsZWlkbnVtfWApO1xuICAgICAgICBwcm9qcGFnZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBwcm9qcGFnZS5zdHlsZS53aWR0aCA9IHBhZ2Vjb250YWluZXIuc3R5bGUud2lkdGhcbiAgICAgICAgcHJvanBhZ2Uuc3R5bGUuaGVpZ2h0ID0gJ2ZpdC1jb250ZW50JztcbiAgICAgICAgbGV0IHRhc2tjb250ID0gcHJvanBhZ2UucXVlcnlTZWxlY3RvcignLnRhc2tzY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBwcm9qcGFnZXRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgdGlsZW9mcHJvaiR7dGlsZWlkbnVtfWApO1xuICAgICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgcHJvanBhZ2V0YXNrcykge1xuICAgICAgICAgICAgaWYgKCF0YXNrY29udC5jb250YWlucyh0YXNrKSl7XG4gICAgICAgICAgICB0YXNrY29udC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfSlcbiAgICBcbn1cblxuY29uc3QgZWRpdHByb2p0aWxlID0gKHByb2puYW1lLCBwcm9qcGFnZW5hbWUpID0+IHtcbiAgICBsZXQgcHJvanBhZ2V0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2pwYWdldGl0bGUnKTtcbiAgICBmb3IgKGNvbnN0IHRpdGxlIG9mIHByb2pwYWdldGl0bGUpIHtcbiAgICAgICAgaWYgKHRpdGxlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qbmFtZTsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgcHJvanBhZ2VudW0gPSBwcm9qcGFnZW5hbWUucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgIGxldCBwcm9qcGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2pwYWdlbmFtZSk7XG4gICAgcHJvanBhZ2VzYXJyYXlbcHJvanBhZ2VudW1dID0gcHJvanBhZ2Uub3V0ZXJIVE1MO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cGFnZXMnLCBKU09OLnN0cmluZ2lmeShwcm9qcGFnZXNhcnJheSkpO1xuICAgIGxldCBwcm9qdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0JHtwcm9qcGFnZW51bX1gKTtcbiAgICBwcm9qdGlsZS50ZXh0Q29udGVudCA9IHByb2puYW1lO1xuICAgIHByb2phcnJheVtwcm9qcGFnZW51bV0gPSBwcm9qdGlsZS5vdXRlckhUTUw7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamFycmF5KSk7XG4gICAgfVxuXG5jb25zdCBkZWxldGVwcm9qdGlsZSA9ICgpID0+IHtcbiAgICBsZXQgcHJvanBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0cGFnZScpO1xuICAgIGZvciAoY29uc3QgcGFnZSBvZiBwcm9qcGFnZSkge1xuICAgICAgICBpZiAocGFnZS5zdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgbGV0IHByb2plY3RwYWdlaWQgPSBwYWdlLmlkO1xuICAgICAgICAgICAgbGV0IHBhZ2VpZG51bSA9IHByb2plY3RwYWdlaWQucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgICAgICAgICAgZGVsZXRlcHJvaihwYWdlaWRudW0pO1xuICAgICAgICAgICAgbGV0IHByb2p0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3Qke3BhZ2VpZG51bX1gKTtcbiAgICAgICAgICAgIHBhZ2UucmVtb3ZlKCk7XG4gICAgICAgICAgICBwcm9qdGlsZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgdGFza2hlYWRlcnMgPSAoKSA9PiB7XG4gICAgbGV0IHBhZ2Vjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZWNvbnRhaW5lcicpO1xuXG4gICAgbGV0IHRhc2toZWFkZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza2hlYWRlcnMuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNraGVhZGVycycpO1xuICAgIHRhc2toZWFkZXJzLnN0eWxlLndpZHRoID0gcGFnZWNvbnRhaW5lci5zdHlsZS53aWR0aDtcblxuICAgIGxldCBuYW1laGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZWhlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hbWVoZWFkZXInKTtcbiAgICBuYW1laGVhZGVyLnRleHRDb250ZW50ID0gJ05hbWUnO1xuICAgIHRhc2toZWFkZXJzLmFwcGVuZENoaWxkKG5hbWVoZWFkZXIpO1xuXG4gICAgbGV0IGRlc2NoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjaGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVzY2hlYWRlcicpO1xuICAgIGRlc2NoZWFkZXIudGV4dENvbnRlbnQgPSAnRGVzYy4nO1xuICAgIHRhc2toZWFkZXJzLmFwcGVuZENoaWxkKGRlc2NoZWFkZXIpO1xuXG4gICAgbGV0IGRhdGVoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlaGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0ZWhlYWRlcicpO1xuICAgIGRhdGVoZWFkZXIudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgIHRhc2toZWFkZXJzLmFwcGVuZENoaWxkKGRhdGVoZWFkZXIpO1xuXG4gICAgbGV0IHByaW9oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvaGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb2hlYWRlcicpO1xuICAgIHByaW9oZWFkZXIudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICAgIHRhc2toZWFkZXJzLmFwcGVuZENoaWxkKHByaW9oZWFkZXIpO1xuXG4gICAgbGV0IGVkaXRoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0aGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdGhlYWRlcicpO1xuICAgIGVkaXRoZWFkZXIudGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgdGFza2hlYWRlcnMuYXBwZW5kQ2hpbGQoZWRpdGhlYWRlcik7XG5cbiAgICByZXR1cm4gdGFza2hlYWRlcnM7XG59XG5cblxuY29uc3QgcHJvamVjdHBhZ2UgPSAocHJvamVjdG5hbWUpID0+IHtcblxuICAgIGxldCBwYWdlY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Vjb250YWluZXInKTtcbiAgICBsZXQgcHJvamVjdHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0cGFnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RwYWdlJyk7XG4gICAgcHJvamVjdHBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qcGFnZSR7cHJvanBhZ2VzYXJyYXkubGVuZ3RofWApO1xuICAgIHBhZ2Vjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHBhZ2UpO1xuICAgIGxldCBwcm9qdGl0bGVsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvanRpdGxlbGluZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2p0aXRsZWxpbmUnKTtcbiAgICBwcm9qZWN0cGFnZS5hcHBlbmRDaGlsZChwcm9qdGl0bGVsaW5lKTtcblxuICAgIGxldCBwcm9qcGFnZXRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvanBhZ2V0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2pwYWdldGl0bGUnKTtcbiAgICBwcm9qcGFnZXRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdG5hbWV9YDtcbiAgICBwcm9qdGl0bGVsaW5lLmFwcGVuZENoaWxkKHByb2pwYWdldGl0bGUpO1xuXG4gICAgbGV0IHByb2plZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVkaXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWRpdCcpO1xuICAgIGxldCBwcm9qZWRpdHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plZGl0cGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVkaXRwaWMnKTtcbiAgICBwcm9qZWRpdHBpYy5zcmMgPSBlZGl0cGljO1xuICAgIHByb2plZGl0LmFwcGVuZENoaWxkKHByb2plZGl0cGljKTtcbiAgICBwcm9qdGl0bGVsaW5lLmFwcGVuZENoaWxkKHByb2plZGl0KTtcblxuICAgIGxldCBlZGl0cHJvamZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0cHJvamZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0cHJvamZvcm0nKTtcbiAgICBwcm9qZWN0cGFnZS5hcHBlbmRDaGlsZChlZGl0cHJvamZvcm0pO1xuXG4gICAgbGV0IGRpdnByb2p0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2cHJvanRhc2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdkaXZwcm9qdGFzaycpO1xuICAgIHByb2plY3RwYWdlLmFwcGVuZENoaWxkKGRpdnByb2p0YXNrKTtcbiAgICBsZXQgcHJvanRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qdGFzay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2p0YXNrJylcbiAgICBwcm9qdGFzay50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XG4gICAgZGl2cHJvanRhc2suYXBwZW5kQ2hpbGQocHJvanRhc2spO1xuXG4gICAgbGV0IHRvZG9wb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9wb3B1cC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG9wb3B1cCcpO1xuICAgIHByb2plY3RwYWdlLmFwcGVuZENoaWxkKHRvZG9wb3B1cCk7XG4gICAgXG4gICAgcHJvamVjdHBhZ2UuYXBwZW5kQ2hpbGQodGFza2hlYWRlcnMoKSk7XG5cbiAgICBsZXQgdGFza3Njb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrc2NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tzY29udGFpbmVyJyk7XG4gICAgcHJvamVjdHBhZ2UuYXBwZW5kQ2hpbGQodGFza3Njb250YWluZXIpO1xuXG4gICAgc3RvcmVwcm9qcGFnZXMocHJvamVjdHBhZ2UuaWQpO1xuXG4gICAgbGV0IHByb2pwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RwYWdlJyk7XG4gICAgXG4gICAgZm9yICh2YXIgeD0wOyB4IDwgKHByb2pwYWdlcy5sZW5ndGggLSAxKTsgKyt4KSB7XG4gICAgICAgIHByb2pwYWdlc1t4XS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHByb2pwYWdlc1t4XS5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICBwcm9qcGFnZXNbeF0uc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgfVxuICAgIFxuICAgIGxldCBwZXJpb2RwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BlcmlvZGNvbnRhaW5lcicpO1xuXG4gICAgZm9yICh2YXIgeD0wOyB4IDwgKHBlcmlvZHBhZ2VzLmxlbmd0aCAtIDEpOyArK3gpIHtcbiAgICAgICAgcGVyaW9kcGFnZXNbeF0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBwZXJpb2RwYWdlc1t4XS5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICBwZXJpb2RwYWdlc1t4XS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICB9XG5cbiAgICBcbiAgICBwcm9qZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmICghZG9jdW1lbnQuZm9ybXNbMF0pIHtcbiAgICAgICAgbGV0IHByb2p0aXRsZSA9IGUuY3VycmVudFRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgcHJvam5hbWUgPSBwcm9qdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgIGVkaXRwcm9qZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybXMoJ2VkaXQnLCBwcm9qbmFtZSkpO1xuICAgIH19KVxuXG4gICAgXG4gICAgcHJvanRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoIWRvY3VtZW50LmZvcm1zWzBdKSB7XG4gICAgICAgIHRvZG9wb3B1cC5hcHBlbmRDaGlsZCh0b0RvRm9ybXMoJ2NyZWF0ZScpKTtcbiAgICB9fSlcbn1cbiAgICBcblxuXG5cbmNvbnN0IHByb2plY3RGb3JtcyA9IChwcm9qZm9ybXR5cGUsIHByb2plY3RuYW1lKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0Zm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgcHJvamVjdGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0Zm9ybScpO1xuICAgICAgICBwcm9qZWN0Zm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0nKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBwcm9qZm9ybXRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2pmb3JtdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZm9ybXRpdGxlJyk7XG4gICAgICAgIGlmIChwcm9qZm9ybXR5cGUgPT0gJ2NyZWF0ZScpIHtcbiAgICAgICAgcHJvamZvcm10aXRsZS50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvamZvcm10eXBlID09ICdlZGl0Jykge1xuICAgICAgICBwcm9qZm9ybXRpdGxlLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdGZvcm0uYXBwZW5kQ2hpbGQocHJvamZvcm10aXRsZSk7XG5cbiAgICAgICAgbGV0IHByb2ppbnB1dGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qaW5wdXRjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qaW5wdXRjb250YWluZXInKTtcbiAgICAgICAgbGV0IHByb2ppbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByb2ppbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBwcm9qaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qaW5wdXQnKTtcbiAgICAgICAgcHJvamlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgICAgIGlmIChwcm9qZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICBwcm9qaW5wdXQuZGVmYXVsdFZhbHVlID0gcHJvamVjdG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByb2psYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByb2psYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qaW5wdXQnKTtcbiAgICAgICAgaWYgKHByb2pmb3JtdHlwZSA9PSAnY3JlYXRlJykge1xuICAgICAgICBwcm9qbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qbGFiZWxjcmVhdGUnKTtcbiAgICAgICAgcHJvamxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZTogJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9qZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgIHByb2psYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2psYWJlbGVkaXQnKTtcbiAgICAgICAgcHJvamxhYmVsLnRleHRDb250ZW50ID0gJ0NoYW5nZSBQcm9qZWN0IE5hbWU6ICc7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamlucHV0Y29udGFpbmVyLmFwcGVuZENoaWxkKHByb2ppbnB1dCk7XG4gICAgICAgIHByb2ppbnB1dGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qbGFiZWwpO1xuICAgICAgICBwcm9qZWN0Zm9ybS5hcHBlbmRDaGlsZChwcm9qaW5wdXRjb250YWluZXIpO1xuXG4gICAgICAgIGxldCBwcm9qZm9ybWJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamZvcm1idG5zLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamZvcm1idG5zJyk7XG4gICAgICAgIHByb2plY3Rmb3JtLmFwcGVuZENoaWxkKHByb2pmb3JtYnRucyk7XG5cbiAgICAgICAgbGV0IHByb2pzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvanN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgIHByb2pzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qc3VibWl0Jyk7XG4gICAgICAgIGlmIChwcm9qZm9ybXR5cGUgPT0gJ2NyZWF0ZScpIHtcbiAgICAgICAgcHJvanN1Ym1pdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvamZvcm10eXBlID09ICdlZGl0Jykge1xuICAgICAgICBwcm9qc3VibWl0LnRleHRDb250ZW50ID0gJ1NhdmUgQ2hhbmdlcyc7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamZvcm1idG5zLmFwcGVuZENoaWxkKHByb2pzdWJtaXQpO1xuXG4gICAgICAgIHByb2pzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHByb2plY3Rmb3JtLnJlcG9ydFZhbGlkaXR5KCkgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKHByb2pmb3JtdHlwZSA9PT0gJ2NyZWF0ZScpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFnZWNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgbGV0IHBhZ2VjaGlsZHMgPSBwYWdlY29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBwYWdlY2hpbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb2plY3RUaWxlKHByb2ppbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdHBhZ2UocHJvamlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Zm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0cG9wdXAucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb2pmb3JtdHlwZSA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2ppZCA9IHByb2plY3Rmb3JtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICBsZXQgbmV3bmFtZSA9IHByb2ppbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Zm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBlZGl0cHJvanRpbGUobmV3bmFtZSwgcHJvamlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgcHJvamNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcm9qY2FuY2VsLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamNhbmNlbCcpO1xuICAgICAgICBwcm9qY2FuY2VsLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgcHJvamNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgICAgICBwcm9qZm9ybWJ0bnMuYXBwZW5kQ2hpbGQocHJvamNhbmNlbCk7XG4gICAgICAgIHByb2pjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZm9ybXR5cGUgPT09ICdjcmVhdGUnKSB7XG4gICAgICAgICAgICBwcm9qZWN0Zm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHByb2plY3Rwb3B1cC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSBpZiAocHJvamZvcm10eXBlID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Zm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIGlmIChwcm9qZm9ybXR5cGUgPT09ICdlZGl0Jykge1xuICAgICAgICBsZXQgcHJvamRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcm9qZGVsZXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgcHJvamRlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2pkZWxldGUnKTtcbiAgICAgICAgcHJvamRlbGV0ZS50ZXh0Q29udGVudCA9ICdEZWxldGUgUHJvamVjdCc7XG4gICAgICAgIHByb2plY3Rmb3JtLmFwcGVuZENoaWxkKHByb2pkZWxldGUpO1xuXG4gICAgICAgIHByb2pkZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRlbGV0ZXByb2p0aWxlKCk7XG4gICAgICAgICAgICBwcm9qZWN0Zm9ybS5yZW1vdmUoKTtcbiAgICAgICAgfSkgXG5cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvamVjdGZvcm07XG59XG5cbmNvbnN0IHNvcnR0b2RvcyA9ICgpID0+IHtcbiAgICBsZXQgcHJvanBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdHBhZ2UnKTtcbiAgICBsZXQgcHJvanRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndG9kb3RpbGUnKTtcbiAgICBmb3IgKGxldCB4PTA7IHggPCAocHJvanBhZ2VzLmxlbmd0aCk7ICsreCkge1xuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qcGFnZSR7eH1gKTtcbiAgICAgICAgbGV0IHByb2plY3RjaGlsZHMgPSBwcm9qZWN0LmNoaWxkTm9kZXM7XG4gICAgICAgIGxldCB0b2RvY2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGB0aWxlb2Zwcm9qJHt4fWApO1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHByb2plY3RjaGlsZHMpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgPT0gJ3Rhc2tzY29udGFpbmVyJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgayA8ICh0b2RvY2xhc3MubGVuZ3RoKTsgKytrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGQuY29udGFpbnModG9kb2NsYXNzW2tdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuYXBwZW5kQ2hpbGQodG9kb2NsYXNzW2tdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jb25zdCBwZXJpb2RwYWdlID0gKHBlcmlvZCkgPT4ge1xuXG4gICAgbGV0IHBhZ2Vjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZWNvbnRhaW5lcicpO1xuICAgIGxldCBwZXJpb2Rjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwZXJpb2Rjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwZXJpb2Rjb250YWluZXInKTtcbiAgICBwYWdlY29udGFpbmVyLmFwcGVuZENoaWxkKHBlcmlvZGNvbnRhaW5lcik7XG5cblxuICAgIGxldCBwZXJpb2R0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBlcmlvZHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGVyaW9kdGl0bGUnKVxuICAgIGlmIChwZXJpb2QgPT0gJ2hvbWUnKSB7XG4gICAgcGVyaW9kY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZXBlcmlvZCcpO1xuICAgIHBlcmlvZHRpdGxlLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIH1cbiAgICBlbHNlIGlmIChwZXJpb2QgPT0gJ3RvZGF5Jykge1xuICAgIHBlcmlvZGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZGF5cGVyaW9kJyk7XG4gICAgcGVyaW9kdGl0bGUudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgIH1cbiAgICBlbHNlIGlmIChwZXJpb2QgPT0gJ3dlZWsnKSB7XG4gICAgcGVyaW9kY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2Vla3BlcmlvZCcpO1xuICAgIHBlcmlvZHRpdGxlLnRleHRDb250ZW50ID0gJ1RoaXMgV2Vlayc7XG4gICAgfVxuXG4gICAgcGVyaW9kY29udGFpbmVyLmFwcGVuZENoaWxkKHBlcmlvZHRpdGxlKTtcblxuICAgIGxldCB0b2RvcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvcG9wdXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvcG9wdXAnKTtcbiAgICBwZXJpb2Rjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb3BvcHVwKTtcblxuICAgIHBlcmlvZGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNraGVhZGVycygpKTtcbiAgICBcbiAgICBsZXQgcGVyaW9kdGFza2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBlcmlvZHRhc2tjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwZXJpb2R0YXNrY29udGFpbmVyJyk7XG4gICAgcGVyaW9kY29udGFpbmVyLmFwcGVuZENoaWxkKHBlcmlvZHRhc2tjb250YWluZXIpO1xuXG5cbiAgICByZXR1cm4gcGVyaW9kY29udGFpbmVyO1xufVxuXG5jb25zdCBzb3J0dGlsZXMgPSAocGVyaW9kKSA9PiB7XG4gICAgY2xlYXJmb3JtcygpO1xuICAgIGxldCB0b2RvdGlsZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG90aWxlJykpO1xuICAgIGxldCB0aWxlZGF0ZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbGVkYXRlJykpO1xuXG5cbiAgICBpZiAocGVyaW9kID09ICdob21lJykge1xuICAgICAgICBsZXQgaG9tZXBlcmlvZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lcGVyaW9kJyk7XG4gICAgICAgIGxldCBob21lY2hpbGRzID0gaG9tZXBlcmlvZC5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGhvbWVjaGlsZHMpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgPT0gJ3BlcmlvZHRhc2tjb250YWluZXInKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4PTA7IHggPCAodG9kb3RpbGVzLmxlbmd0aCk7ICsreCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLmFwcGVuZENoaWxkKHRvZG90aWxlc1t4XSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kb3RpbGVzLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmIChwZXJpb2QgPT0gJ3RvZGF5Jykge1xuICAgICAgICBsZXQgdG9kYXlwZXJpb2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlwZXJpb2QnKTtcbiAgICAgICAgbGV0IHRvZGF5Y2hpbGRzID0gdG9kYXlwZXJpb2QuY2hpbGROb2RlcztcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0b2RheWNoaWxkcykge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTmFtZSA9PSAncGVyaW9kdGFza2NvbnRhaW5lcicpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHg9MDsgeCA8ICh0b2RvdGlsZXMubGVuZ3RoKTsgKyt4KSB7IFxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IHBhcnNlSVNPKHRpbGVkYXRlc1t4XS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RvZGF5KGRhdGUpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmFwcGVuZENoaWxkKHRvZG90aWxlc1t4XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmIChwZXJpb2QgPT0gJ3dlZWsnKSB7XG4gICAgICAgIGxldCB3ZWVrcGVyaW9kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtwZXJpb2QnKTtcbiAgICAgICAgbGV0IHdlZWtjaGlsZHMgPSB3ZWVrcGVyaW9kLmNoaWxkTm9kZXM7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygd2Vla2NoaWxkcykge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTmFtZSA9PSAncGVyaW9kdGFza2NvbnRhaW5lcicpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHg9MDsgeCA8ICh0b2RvdGlsZXMubGVuZ3RoKTsgKyt4KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRlID0gcGFyc2VJU08odGlsZWRhdGVzW3hdLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2FtZVdlZWsoZGF0ZSwgKG5ldyBEYXRlKSkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuYXBwZW5kQ2hpbGQodG9kb3RpbGVzW3hdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxufVxuXG5cbmV4cG9ydCB7cHJvamVjdEZvcm1zLCB0b0RvRm9ybXMsIHRvRG9UaWxlLCBwcm9qZWN0VGlsZSwgcGVyaW9kcGFnZSwgc29ydHRpbGVzLCBzb3J0dG9kb3MsIGxvYWRwcm9qZWN0cywgbG9hZHByb2pwYWdlcywgY2xlYXJmb3Jtc307XG5cbiIsIlxuY29uc3QgdG9EbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5fVxufTtcblxubGV0IG15dG9Eb3MgPSBbXTtcblxuY29uc3QgUHVzaHRvRG8gPSAodG9Eb0l0ZW0pID0+IHtcbiAgICBteXRvRG9zLnB1c2godG9Eb0l0ZW0pO1xufVxuXG5jb25zdCB0aXRsZVVwZGF0ZSA9ICh0b0RvSXRlbSwgbmV3VGl0bGUpID0+IHtcbiAgICB0b0RvSXRlbS50aXRsZSA9IG5ld1RpdGxlO1xuICAgIHJldHVybiB7dG9Eb0l0ZW19O1xufVxuXG5jb25zdCBkZXNjcmlwdGlvblVwZGF0ZSA9ICh0b0RvSXRlbSwgbmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICB0b0RvSXRlbS5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIHJldHVybiB7dG9Eb0l0ZW19O1xufVxuXG5jb25zdCBkdWVEYXRlVXBkYXRlID0gKHRvRG9JdGVtLCBuZXdkdWVEYXRlKSA9PiB7XG4gICAgdG9Eb0l0ZW0uZHVlRGF0ZSA9IG5ld2R1ZURhdGU7XG4gICAgcmV0dXJuIHt0b0RvSXRlbX07XG59XG5cbmNvbnN0IHByaW9yaXR5VXBkYXRlID0gKHRvRG9JdGVtLCBuZXdQcmlvcml0eSkgPT4ge1xuICAgIHRvRG9JdGVtLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgcmV0dXJuIHt0b0RvSXRlbX07XG59XG5cbmNvbnN0IGRlbGV0ZVRvRG8gPSAgKHRvRG9JdGVtKSA9PiB7XG4gICAgdG9Eb0l0ZW0gPSBudWxsO1xuICAgIHJldHVybiB7dG9Eb0l0ZW19O1xufVxuXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEFycmF5ID0gKCkgPT4gW107XG4gICAgcmV0dXJuIHt0aXRsZSwgcHJvamVjdEFycmF5fVxufVxuXG5sZXQgbXlQcm9qZWN0cyA9IFtdO1xuXG5jb25zdCBwdXNoUHJvamVjdCA9IChwcm9qZWN0SXRlbSkgPT4ge1xuICAgIG15UHJvamVjdHMucHVzaChwcm9qZWN0SXRlbSk7XG59XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdEl0ZW0pID0+IHtcbiAgICBwcm9qZWN0SXRlbSA9IG51bGw7XG4gICAgcmV0dXJuIHtwcm9qZWN0SXRlbX1cbn1cblxuY29uc3QgcHJvamVjdFRvRG9zID0gKHByb2plY3RJdGVtLCB0b0RvSXRlbSkgPT4ge1xuICAgIHByb2plY3RJdGVtLnB1c2godG9Eb0l0ZW0pO1xufVxuXG5leHBvcnQge3RvRG8sIG15dG9Eb3MsIFB1c2h0b0RvLCB0aXRsZVVwZGF0ZSwgZGVzY3JpcHRpb25VcGRhdGUsIGR1ZURhdGVVcGRhdGUsIHByaW9yaXR5VXBkYXRlLCBkZWxldGVUb0RvLCBwcm9qZWN0LCBteVByb2plY3RzLCBwdXNoUHJvamVjdCwgZGVsZXRlUHJvamVjdCwgcHJvamVjdFRvRG9zfSIsImltcG9ydCB7dG9EbywgbXl0b0RvcywgUHVzaHRvRG8sIHRpdGxlVXBkYXRlLCBkZXNjcmlwdGlvblVwZGF0ZSwgZHVlRGF0ZVVwZGF0ZSwgcHJpb3JpdHlVcGRhdGUsIGRlbGV0ZVRvRG8sIHByb2plY3QsIG15UHJvamVjdHMsIHB1c2hQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBwcm9qZWN0VG9Eb3N9IGZyb20gJy4vdG9kb2Zucy5qcyc7XG5cbmNvbnN0IGNyZWF0ZXByb2p0aWxlID0gKHByb2puYW1lKSA9PiB7XG4gICAgbGV0IG5ld3Byb2plY3QgPSAoKSA9PiBwcm9qZWN0KHByb2puYW1lKTtcbiAgICBwdXNoUHJvamVjdChwcm9qbmFtZSk7XG4gICAgbGV0IHByb2plY3RJRCA9ICgpID0+IGBwcm9qZWN0JHtteVByb2plY3RzLmxlbmd0aC0xfWA7XG4gICAgcmV0dXJuIHtuZXdwcm9qZWN0LCBwcm9qZWN0SUR9O1xufTtcblxuY29uc3QgcHJvanBhZ2VJRCA9ICgpID0+IHtcbiAgICBsZXQgcGFnZUlEID0gKCkgPT4gYHByb2pwYWdlJHtteVByb2plY3RzLmxlbmd0aC0xfWA7XG4gICAgcmV0dXJuIHtwYWdlSUR9XG59IFxuXG5jb25zdCBkZWxldGVwcm9qID0gKHByb2pudW0pID0+IHtcbiAgICBsZXQgcHJvamVjdEl0ZW0gPSBteVByb2plY3RzW3Byb2pudW1dO1xuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdEl0ZW0pO1xufVxuXG5leHBvcnQge2NyZWF0ZXByb2p0aWxlLCBwcm9qcGFnZUlELCBkZWxldGVwcm9qfTtcblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsb2dvIGZyb20gJy4vY2xpcGJvYXJkLXRleHQtbXVsdGlwbGUtb3V0bGluZS5zdmcnO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4vYXBwcy5zdmcnO1xuaW1wb3J0IHRvZGF5cGljIGZyb20gJy4vY2FsZW5kYXItdG9kYXkuc3ZnJztcbmltcG9ydCB3ZWVrcGljIGZyb20gJy4vY2FsZW5kYXItd2Vlay5zdmcnO1xuaW1wb3J0IGhvbWVwaWMgZnJvbSAnLi9ob21lLnN2Zyc7XG5pbXBvcnQgYWRkcGljIGZyb20gJy4vcGx1cy1jaXJjbGUtb3V0bGluZS5zdmcnO1xuaW1wb3J0IHRoZW1lcGljIGZyb20gJy4vdGhlbWUtbGlnaHQtZGFyay5zdmcnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7cHJvamVjdEZvcm1zLCB0b0RvRm9ybXMsIHRvRG9UaWxlLCBwcm9qZWN0VGlsZSwgcGVyaW9kcGFnZSwgc29ydHRpbGVzLCBzb3J0dG9kb3MsIGxvYWRwcm9qZWN0cywgbG9hZHByb2pwYWdlcywgY2xlYXJmb3Jtc30gZnJvbSAnLi90b2RvZG9tcy5qcyc7XG5pbXBvcnQge3RvRG8sIG15dG9Eb3MsIFB1c2h0b0RvLCB0aXRsZVVwZGF0ZSwgZGVzY3JpcHRpb25VcGRhdGUsIGR1ZURhdGVVcGRhdGUsIHByaW9yaXR5VXBkYXRlLCBkZWxldGVUb0RvLCBwcm9qZWN0LCBteVByb2plY3RzLCBwdXNoUHJvamVjdCwgZGVsZXRlUHJvamVjdCwgcHJvamVjdFRvRG9zfSBmcm9tICcuL3RvZG9mbnMuanMnO1xuaW1wb3J0IHtjcmVhdGVwcm9qdGlsZX0gZnJvbSAnLi90b2RvaW50ZXJmYWNlcnMuanMnO1xuXG5jb25zdCBjb21wb25lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgICBjb25zdCB0aXRsZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVCbG9jay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlQmxvY2snKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlQmxvY2spO1xuXG4gICAgY29uc3QgcGFnZWNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2Vjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwYWdlY29udGFpbmVyJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwYWdlY29udGFpbmVyKTsgXG5cbiAgICBjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudVRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVUb2dnbGUnKTtcbiAgICBjb25zdCBtZW51VG9nZ2xlUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWVudVRvZ2dsZVBpYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVUb2dnbGVQaWMnKTtcbiAgICBtZW51VG9nZ2xlUGljLnNyYyA9IHNldHRpbmdzO1xuICAgIG1lbnVUb2dnbGUuYXBwZW5kQ2hpbGQobWVudVRvZ2dsZVBpYyk7XG4gICAgdGl0bGVCbG9jay5hcHBlbmRDaGlsZChtZW51VG9nZ2xlKTtcblxuICAgIG1lbnVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChtZW51LnN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICBtZW51LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIHBhZ2Vjb250YWluZXIuc3R5bGUuZ3JpZENvbHVtbiA9ICcxLzMnO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAobWVudS5zdHlsZS52aXNpYmlsaXR5ID09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICBtZW51LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICBwYWdlY29udGFpbmVyLnN0eWxlLmdyaWRDb2x1bW4gPSAnMi8zJztcbiAgICAgICAgfVxuICAgICB9KVxuXG5cbiAgICBjb25zdCB0aXRsZU1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZU1haW4uc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZU1haW4nKTtcbiAgICBjb25zdCB0aXRsZVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRpdGxlUGljLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGVQaWMnKTtcbiAgICB0aXRsZVBpYy5zcmMgPSBsb2dvO1xuICAgIHRpdGxlTWFpbi5hcHBlbmRDaGlsZCh0aXRsZVBpYyk7XG4gICAgdGl0bGVCbG9jay5hcHBlbmRDaGlsZCh0aXRsZU1haW4pO1xuXG4gICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGVUZXh0Jyk7XG4gICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ1RvLURvIExpc3QnO1xuICAgIHRpdGxlTWFpbi5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICAgIFxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgIGNvbnN0IHBlcmlvZExpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGVyaW9kTGlzdHMuc2V0QXR0cmlidXRlKCdpZCcsICdwZXJpb2RMaXN0cycpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQocGVyaW9kTGlzdHMpO1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJ1xuICAgIHBlcmlvZExpc3RzLmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIGNvbnN0IGhvbWVQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBob21lUGljLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZVBpYycpXG4gICAgaG9tZVBpYy5zcmMgPSBob21lcGljO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZVBpYyk7XG5cblxuICAgIGxldCBob21lY291bnRlciA9IDA7XG4gICAgbGV0IHRvZGF5Y291bnRlciA9IDA7XG4gICAgbGV0IHdlZWtjb3VudGVyID0gMDtcblxuXG5cbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbGV0IGRlc2NzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVzY2V4cGFuZCcpO1xuICAgICAgICBpZiAoZGVzY3MubGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRlc2Mgb2YgZGVzY3MpIHtcbiAgICAgICAgICAgICAgICBkZXNjLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBkZXNjLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS5oZWlnaHQgPSAnMHB4OydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBob21lY291bnRlciArPSAxO1xuXG4gICAgICAgIGlmIChob21lY291bnRlciA9PSAxKSB7XG4gICAgICAgIHBhZ2Vjb250YWluZXIuYXBwZW5kQ2hpbGQocGVyaW9kcGFnZSgnaG9tZScpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKGhvbWVjb3VudGVyID4gMSkge1xuICAgICAgICAgICAgc29ydHRvZG9zKCk7XG4gICAgICAgICAgICBsZXQgaG9tZXBlcmlvZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lcGVyaW9kJyk7XG4gICAgICAgICAgICBob21lcGVyaW9kLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICBob21lcGVyaW9kLnN0eWxlLndpZHRoID0gcGFnZWNvbnRhaW5lci5zdHlsZS53aWR0aDtcbiAgICAgICAgICAgIGhvbWVwZXJpb2Quc3R5bGUuaGVpZ2h0ID0gJ2ZpdC1jb250ZW50JztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYWdlY2hpbGRzID0gcGFnZWNvbnRhaW5lci5jaGlsZE5vZGVzOyBcblxuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHBhZ2VjaGlsZHMpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5pZCAhPT0gJ2hvbWVwZXJpb2QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzb3J0dGlsZXMoJ2hvbWUnKVxuICAgIH0pXG5cbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZGF5LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kYXknKTtcbiAgICB0b2RheS50ZXh0Q29udGVudCA9ICdUb2RheSdcbiAgICBwZXJpb2RMaXN0cy5hcHBlbmRDaGlsZCh0b2RheSk7XG4gICAgY29uc3QgdG9kYXlQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0b2RheVBpYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZGF5UGljJylcbiAgICB0b2RheVBpYy5zcmMgPSB0b2RheXBpYztcbiAgICB0b2RheS5hcHBlbmRDaGlsZCh0b2RheVBpYyk7XG5cbiAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGxldCBkZXNjcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rlc2NleHBhbmQnKTtcbiAgICAgICAgaWYgKGRlc2NzLmxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBkZXNjIG9mIGRlc2NzKSB7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUuaGVpZ2h0ID0gJzBweDsnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9kYXljb3VudGVyICs9IDE7XG5cbiAgICAgICAgaWYgKHRvZGF5Y291bnRlciA9PSAxKSB7XG4gICAgICAgICAgICBwYWdlY29udGFpbmVyLmFwcGVuZENoaWxkKHBlcmlvZHBhZ2UoJ3RvZGF5JykpXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmICh0b2RheWNvdW50ZXIgPiAxKSB7XG4gICAgICAgICAgICBzb3J0dG9kb3MoKTtcbiAgICAgICAgICAgIGxldCB0b2RheXBlcmlvZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheXBlcmlvZCcpO1xuICAgICAgICAgICAgdG9kYXlwZXJpb2Quc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIHRvZGF5cGVyaW9kLnN0eWxlLndpZHRoID0gcGFnZWNvbnRhaW5lci5zdHlsZS53aWR0aDtcbiAgICAgICAgICAgIHRvZGF5cGVyaW9kLnN0eWxlLmhlaWdodCA9ICdmaXQtY29udGVudCc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFnZWNoaWxkcyA9IHBhZ2Vjb250YWluZXIuY2hpbGROb2RlczsgXG5cbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBwYWdlY2hpbGRzKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuaWQgIT09ICd0b2RheXBlcmlvZCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNvcnR0aWxlcygndG9kYXknKTtcbiAgICB9KVxuXG4gICAgY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzV2Vlay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RoaXNXZWVrJyk7XG4gICAgdGhpc1dlZWsudGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJ1xuICAgIHBlcmlvZExpc3RzLmFwcGVuZENoaWxkKHRoaXNXZWVrKTtcbiAgICBjb25zdCB0aGlzV2Vla1BpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRoaXNXZWVrUGljLnNldEF0dHJpYnV0ZSgnaWQnLCAndGhpc1dlZWtQaWMnKVxuICAgIHRoaXNXZWVrUGljLnNyYyA9IHdlZWtwaWM7XG4gICAgdGhpc1dlZWsuYXBwZW5kQ2hpbGQodGhpc1dlZWtQaWMpO1xuXG4gICAgdGhpc1dlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBsZXQgZGVzY3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZXNjZXhwYW5kJyk7XG4gICAgICAgIGlmIChkZXNjcy5sZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZGVzYyBvZiBkZXNjcykge1xuICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgICAgICAgICBkZXNjLnN0eWxlLmhlaWdodCA9ICcwcHg7J1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2Vla2NvdW50ZXIgKz0gMTtcblxuICAgICAgICBpZiAod2Vla2NvdW50ZXIgPT0gMSkge1xuICAgICAgICAgICAgcGFnZWNvbnRhaW5lci5hcHBlbmRDaGlsZChwZXJpb2RwYWdlKCd3ZWVrJykpXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmICh3ZWVrY291bnRlciA+IDEpIHtcbiAgICAgICAgICAgIHNvcnR0b2RvcygpO1xuICAgICAgICAgICAgbGV0IHdlZWtwZXJpb2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla3BlcmlvZCcpO1xuICAgICAgICAgICAgd2Vla3BlcmlvZC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgd2Vla3BlcmlvZC5zdHlsZS53aWR0aCA9IHBhZ2Vjb250YWluZXIuc3R5bGUud2lkdGg7XG4gICAgICAgICAgICB3ZWVrcGVyaW9kLnN0eWxlLmhlaWdodCA9ICdmaXQtY29udGVudCc7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBwYWdlY2hpbGRzID0gcGFnZWNvbnRhaW5lci5jaGlsZE5vZGVzOyBcblxuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHBhZ2VjaGlsZHMpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5pZCAhPT0gJ3dlZWtwZXJpb2QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzb3J0dGlsZXMoJ3dlZWsnKTtcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvamVjdExpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdExpc3RzLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdExpc3RzJyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdHMpO1xuXG4gICAgY29uc3QgcHJvakxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2pMaXN0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qTGlzdFRpdGxlJyk7XG4gICAgcHJvamVjdExpc3RzLmFwcGVuZENoaWxkKHByb2pMaXN0VGl0bGUpO1xuXG4gICAgY29uc3QgcHJvakxpc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvakxpc3RUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvakxpc3RUZXh0Jyk7XG4gICAgcHJvakxpc3RUZXh0LnRleHRDb250ZW50ID0gJ1Byb2plY3RzOiAnO1xuICAgIHByb2pMaXN0VGl0bGUuYXBwZW5kQ2hpbGQocHJvakxpc3RUZXh0KTtcblxuXG4gICAgY29uc3QgcHJvakFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2pBZGRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qQWRkQnV0dG9uJyk7XG4gICAgcHJvakxpc3RUaXRsZS5hcHBlbmRDaGlsZChwcm9qQWRkQnV0dG9uKTtcbiAgICBjb25zdCBwcm9qQWRkQnV0dG9uUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJvakFkZEJ1dHRvblBpYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2pBZGRCdXR0b25QaWMnKTtcbiAgICBwcm9qQWRkQnV0dG9uUGljLnNyYyA9IGFkZHBpYztcbiAgICBwcm9qQWRkQnV0dG9uLmFwcGVuZENoaWxkKHByb2pBZGRCdXR0b25QaWMpO1xuXG4gICAgY29uc3QgcHJvamVjdGZvcm1jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Zm9ybWNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3Rmb3JtY29udGFpbmVyJyk7XG4gICAgcHJvamVjdExpc3RzLmFwcGVuZENoaWxkKHByb2plY3Rmb3JtY29udGFpbmVyKTtcblxuICAgIGNvbnN0IHByb2pUaWxlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2pUaWxlTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2pUaWxlTGlzdCcpO1xuICAgIHByb2plY3RMaXN0cy5hcHBlbmRDaGlsZChwcm9qVGlsZUxpc3QpO1xuXG4gICAgcHJvakFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHBvcHVwPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdHBvcHVwLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHBvcHVwJyk7XG4gICAgICAgIGlmICghZG9jdW1lbnQuZm9ybXNbMF0pIHtcbiAgICAgICAgcHJvamVjdHBvcHVwLmFwcGVuZENoaWxkKHByb2plY3RGb3JtcygnY3JlYXRlJywgJycpKTtcbiAgICAgICAgcHJvamVjdGZvcm1jb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHBvcHVwKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB7XG4gICAgICAgIGxvYWRwcm9qZWN0cygpO1xuICAgICAgICBsb2FkcHJvanBhZ2VzKCk7XG4gICAgICAgIGlmIChwcm9qVGlsZUxpc3QuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7ICBcbiAgICAgICAgICAgIGxldCBkZXNjcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rlc2NleHBhbmQnKTtcbiAgICAgICAgaWYgKGRlc2NzLmxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBkZXNjIG9mIGRlc2NzKSB7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUuaGVpZ2h0ID0gJzBweDsnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGxldCB0aWxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3R0aWxlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRpbGVzLmxlbmd0aCk7XG4gICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiB0aWxlcykge1xuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRlc2NzLmxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGRlc2Mgb2YgZGVzY3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYy5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYy5zdHlsZS5oZWlnaHQgPSAnMHB4OydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgc29ydHRvZG9zKCk7XG4gICAgICAgICAgICAgICAgY2xlYXJmb3JtcygpO1xuICAgICAgICAgICAgICAgIGxldCBwYWdlY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Vjb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFnZW5vZGVzID0gcGFnZWNvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBwYWdlbm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdGlsZWlkID0gZS50YXJnZXQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGVpZG51bSA9IHRpbGVpZC5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgICAgICAgICAgICAgbGV0IHByb2pwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2pwYWdlJHt0aWxlaWRudW19YCk7XG4gICAgICAgICAgICAgICAgcHJvanBhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgICAgICBwcm9qcGFnZS5zdHlsZS53aWR0aCA9IHBhZ2Vjb250YWluZXIuc3R5bGUud2lkdGhcbiAgICAgICAgICAgICAgICBwcm9qcGFnZS5zdHlsZS5oZWlnaHQgPSAnZml0LWNvbnRlbnQnO1xuICAgICAgICAgICAgICAgIGxldCB0YXNrY29udCA9IHByb2pwYWdlLnF1ZXJ5U2VsZWN0b3IoJy50YXNrc2NvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIGxldCBwcm9qcGFnZXRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgdGlsZW9mcHJvaiR7dGlsZWlkbnVtfWApO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdGFzayBvZiBwcm9qcGFnZXRhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFza2NvbnQuY29udGFpbnModGFzaykpe1xuICAgICAgICAgICAgICAgICAgICB0YXNrY29udC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgcGFnZWNoaWxkbm9kZXMgPSBwYWdlY29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHBhZ2VjaGlsZG5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdHBhZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGVjaGlsZHJlbiA9IG5vZGUuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZWNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qdGl0bGVsaW5lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlbGluZWNoaWxkcmVuID0gY2hpbGQuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB0aXRsZWNoaWxkIG9mIHRpdGxlbGluZWNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGl0bGVjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plZGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZWNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5mb3Jtc1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvanRpdGxlID0gZS5jdXJyZW50VGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9qbmFtZSA9IHByb2p0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRwcm9qZm9ybSA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0cHJvamZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1zKCdlZGl0JywgcHJvam5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXZwcm9qdGFzaycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2p0YXNrID0gY2hpbGQucXVlcnlTZWxlY3RvcignLnByb2p0YXNrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvanRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LmZvcm1zWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb3BvcHVwID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9wb3B1cC5hcHBlbmRDaGlsZCh0b0RvRm9ybXMoJ2NyZWF0ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIH19ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgZWRpdGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0YnV0dG9uJyk7XG4gICAgICAgIGZvciAoY29uc3QgYnRuIG9mIGVkaXRidXR0b25zKSB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ2VkaXRidXR0b25waWMnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvZG90aWxlaWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICBsZXQgdG9kb2NoaWxkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG90aWxlaWQpLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0cm93ID0gdG9kb2NoaWxkc1swXTtcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3Ryb3djaGlsZHMgPSBmaXJzdHJvdy5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgIGxldCB0aWxlbmFtZSA9IGZpcnN0cm93Y2hpbGRzWzFdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZWRhdGUgPSBmaXJzdHJvd2NoaWxkc1szXTtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZXByaW8gPSBmaXJzdHJvd2NoaWxkc1s0XTtcbiAgICAgICAgICAgICAgICBsZXQgZGVzY2V4cGFuZCA9IHRvZG9jaGlsZHNbMV07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHRvZG9wb3B1cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvcG9wdXAnKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBvcHVwIG9mIHRvZG9wb3B1cHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9wdXAucGFyZW50RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgICAgIGlmICghZG9jdW1lbnQuZm9ybXNbMF0pIHtcbiAgICAgICAgICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0b0RvRm9ybXMoJ2VkaXQnLCB0aWxlbmFtZS50ZXh0Q29udGVudCwgZGVzY2V4cGFuZC50ZXh0Q29udGVudCwgdGlsZWRhdGUudGV4dENvbnRlbnQsIHRpbGVwcmlvLnRleHRDb250ZW50LCB0b2RvdGlsZWlkKSk7XG4gICAgICAgICAgICB9fX19XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnZWRpdGJ1dHRvbicpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9kb3RpbGVpZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICBsZXQgdG9kb2NoaWxkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG90aWxlaWQpLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0cm93ID0gdG9kb2NoaWxkc1swXTtcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3Ryb3djaGlsZHMgPSBmaXJzdHJvdy5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgIGxldCB0aWxlbmFtZSA9IGZpcnN0cm93Y2hpbGRzWzFdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZWRhdGUgPSBmaXJzdHJvd2NoaWxkc1szXTtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZXByaW8gPSBmaXJzdHJvd2NoaWxkc1s0XTtcbiAgICAgICAgICAgICAgICBsZXQgZGVzY2V4cGFuZCA9IHRvZG9jaGlsZHNbMV07XG4gICAgICAgICAgICAgICAgbGV0IHRvZG9wb3B1cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvcG9wdXAnKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBvcHVwIG9mIHRvZG9wb3B1cHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9wdXAucGFyZW50RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgICAgIGlmICghZG9jdW1lbnQuZm9ybXNbMF0pIHtcbiAgICAgICAgICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0b0RvRm9ybXMoJ2VkaXQnLCB0aWxlbmFtZS50ZXh0Q29udGVudCwgZGVzY2V4cGFuZC50ZXh0Q29udGVudCwgdGlsZWRhdGUudGV4dENvbnRlbnQsIHRpbGVwcmlvLnRleHRDb250ZW50LCB0b2RvdGlsZWlkKSk7XG4gICAgICAgICAgICB9fX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGxldCBjaGVja2JveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tib3gnKTtcbiAgICAgICAgZm9yIChjb25zdCBib3ggb2YgY2hlY2tib3hlcykge1xuICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYm94LmNoZWNrZWQgPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG90aWxlY29udGFpbmVyID0gYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0cm93ID0gYm94LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdGNoaWxkcyA9IGZpcnN0cm93LmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0aWxlZGVzY2J1dHRvbiA9IGZpcnN0Y2hpbGRzWzJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdGJ1dHRvbiA9IGZpcnN0Y2hpbGRzWzVdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVsZXRlYnV0dG9uID0gZmlyc3RjaGlsZHNbNl07XG4gICAgICAgICAgICAgICAgICAgIHRvZG90aWxlY29udGFpbmVyLnN0eWxlLmNvbG9yID0gJ3JnYmEoMjExLDIxMSwyMTEsMC41KSc7XG4gICAgICAgICAgICAgICAgICAgIHRpbGVkZXNjYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgICAgICAgICAgICAgZWRpdGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZWJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJveC5jaGVja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvdGlsZWNvbnRhaW5lciA9IGJveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdHJvdyA9IGJveC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RjaGlsZHMgPSBmaXJzdHJvdy5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGlsZWRlc2NidXR0b24gPSBmaXJzdGNoaWxkc1syXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRidXR0b24gPSBmaXJzdGNoaWxkc1s1XTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGV0ZWJ1dHRvbiA9IGZpcnN0Y2hpbGRzWzZdO1xuICAgICAgICAgICAgICAgICAgICB0b2RvdGlsZWNvbnRhaW5lci5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgICAgICAgICAgICAgICAgIHRpbGVkZXNjYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRidXR0b24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZWxldGVidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsZXRlYnV0dG9uJyk7XG4gICAgICAgIGZvciAoY29uc3QgZGVsIG9mIGRlbGV0ZWJ1dHRvbnMpIHtcbiAgICAgICAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnZGVsZXRlYnV0dG9ucGljJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb3RpbGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgdG9kb3RpbGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ2RlbGV0ZWJ1dHRvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG90aWxlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB0b2RvdGlsZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlc2NidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGlsZWRlc2NidXR0b24nKTtcbiAgICAgICAgZm9yIChjb25zdCBidG4gb2YgZGVzY2J1dHRvbnMpIHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBwYXJlbnRkZXNjID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgZGVzY2V4cGFuZCA9IHBhcmVudGRlc2MubGFzdENoaWxkO1xuICAgICAgICAgICAgaWYgKGRlc2NleHBhbmQuc3R5bGUudmlzaWJpbGl0eSA9PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS53aWR0aCA9IHBhcmVudGRlc2Muc3R5bGUud2lkdGg7XG4gICAgICAgICAgICBkZXNjZXhwYW5kLnN0eWxlLmhlaWdodCA9ICdmaXQtY29udGVudCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkZXNjZXhwYW5kLnN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIGRlc2NleHBhbmQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgXG5cbiAgICByZXR1cm4gbWFpbjtcbiAgICBcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==