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
            projarray.splice(pageidnum, 1);
            projpagesarray.splice(pageidnum, 1);
            localStorage.setItem('projects', JSON.stringify(projarray));
            localStorage.setItem('projectpages', JSON.stringify(projpagesarray));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsdUpBQXdEO0FBQ3BHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCw4QkFBOEIseUVBQXlFLHVCQUF1Qix5QkFBeUIsR0FBRyxZQUFZLDhCQUE4Qix5QkFBeUIsR0FBRyxrQkFBa0Isc0JBQXNCLCtCQUErQixzQkFBc0IsR0FBRyxVQUFVLDhCQUE4Qix3QkFBd0IsZ0JBQWdCLEdBQUcsV0FBVyxvQkFBb0Isa0RBQWtELHNEQUFzRCxHQUFHLGlCQUFpQixvQkFBb0IsdUJBQXVCLG9CQUFvQixzQ0FBc0MsMEJBQTBCLGdDQUFnQyxvQkFBb0IsbUJBQW1CLHlCQUF5QixHQUFHLG9CQUFvQixvQkFBb0IsdUJBQXVCLHlCQUF5Qix3QkFBd0IsR0FBRyx3QkFBd0Isc0JBQXNCLEdBQUcsaUJBQWlCLHVCQUF1QiwwQkFBMEIsZ0NBQWdDLEdBQUcsb0JBQW9CLHdCQUF3QixrQkFBa0IsbUJBQW1CLGdDQUFnQyxHQUFHLGdCQUFnQix1QkFBdUIsMkJBQTJCLG9CQUFvQix1Q0FBdUMsMEJBQTBCLGdCQUFnQixHQUFHLGVBQWUsd0JBQXdCLGtCQUFrQixtQkFBbUIsbUJBQW1CLEdBQUcsZ0JBQWdCLHNCQUFzQixHQUFHLG9DQUFvQyx3QkFBd0IsdUJBQXVCLHNCQUFzQixHQUFHLFdBQVcsb0JBQW9CLHVCQUF1QixvQkFBb0IsNENBQTRDLHVCQUF1QixvQkFBb0IsZ0NBQWdDLG1CQUFtQixHQUFHLDBDQUEwQyx5QkFBeUIsa0JBQWtCLHVCQUF1QixnQ0FBZ0MsbUJBQW1CLG9CQUFvQiw2QkFBNkIsNEJBQTRCLDhCQUE4QixlQUFlLEdBQUcsb0JBQW9CLG9CQUFvQixvQkFBb0IseUNBQXlDLGdCQUFnQixvQkFBb0Isd0JBQXdCLHVCQUF1QixHQUFHLFdBQVcsb0JBQW9CLEdBQUcsWUFBWSxvQkFBb0IsR0FBRyxlQUFlLG9CQUFvQixHQUFHLG1CQUFtQixvQkFBb0Isb0JBQW9CLHlDQUF5QyxvQkFBb0IsOEJBQThCLEdBQUcsb0JBQW9CLG9CQUFvQixvQkFBb0IsdUNBQXVDLDBCQUEwQixHQUFHLG1CQUFtQix1QkFBdUIsa0NBQWtDLEdBQUcsb0JBQW9CLHVCQUF1QixtQkFBbUIsdUJBQXVCLHNCQUFzQiw4QkFBOEIsNkJBQTZCLGdDQUFnQyxHQUFHLHVCQUF1QixnQ0FBZ0MsR0FBRywyQkFBMkIseUJBQXlCLEdBQUcsa0JBQWtCLG9CQUFvQiw4Q0FBOEMsZ0JBQWdCLHVCQUF1Qiw4QkFBOEIsZ0NBQWdDLG9CQUFvQixvQkFBb0IseUJBQXlCLEdBQUcsb0JBQW9CLG9CQUFvQix1QkFBdUIsR0FBRyx5QkFBeUIsb0JBQW9CLHVCQUF1Qix5QkFBeUIsR0FBRyxnQkFBZ0IsbUJBQW1CLG1CQUFtQixTQUFTLG1CQUFtQixvQkFBb0Isb0JBQW9CLHFDQUFxQyxnQkFBZ0IsdUJBQXVCLEtBQUssMEJBQTBCLGdDQUFnQyxHQUFHLG1CQUFtQixvQkFBb0IsdUJBQXVCLG9CQUFvQiwyQkFBMkIsZ0NBQWdDLEdBQUcsc0JBQXNCLHlCQUF5QixpQkFBaUIsaUJBQWlCLHdCQUF3QixHQUFHLG9CQUFvQix5QkFBeUIsaUJBQWlCLGlCQUFpQixHQUFHLG1CQUFtQix1QkFBdUIsb0JBQW9CLGVBQWUsR0FBRywwQkFBMEIsbUJBQW1CLGdDQUFnQyxtQkFBbUIsR0FBRyxrQkFBa0Isb0JBQW9CLHdEQUF3RCxnQkFBZ0IsR0FBRyxzQkFBc0Isb0JBQW9CLDhDQUE4QyxnQkFBZ0IsR0FBRyxxQ0FBcUMsb0JBQW9CLHNCQUFzQixxQkFBcUIsbUJBQW1CLEdBQUcsbUNBQW1DLG9CQUFvQixHQUFHLHFDQUFxQyxvQkFBb0IsR0FBRyw2Q0FBNkMsb0JBQW9CLEdBQUcsb0JBQW9CLG9CQUFvQixzQkFBc0Isb0JBQW9CLDhDQUE4QyxnQkFBZ0IsMEJBQTBCLDhCQUE4QixtQkFBbUIsR0FBRyxvQkFBb0IscUJBQXFCLEdBQUcsa0JBQWtCLHdCQUF3QixrQkFBa0IsbUJBQW1CLGdDQUFnQyxHQUFHLGVBQWUseUJBQXlCLDBCQUEwQixnQ0FBZ0MsR0FBRyxtQkFBbUIsb0JBQW9CLHlCQUF5QixvQkFBb0IsOEJBQThCLEdBQUcsa0JBQWtCLG9CQUFvQixvQkFBb0IsOEJBQThCLEdBQUcsZUFBZSxtQkFBbUIsbUJBQW1CLGdDQUFnQyxtQkFBbUIsU0FBUyxnQkFBZ0Isb0JBQW9CLEdBQUcsd0JBQXdCLG1CQUFtQixHQUFHLGVBQWUsb0JBQW9CLDhDQUE4QyxvQkFBb0IsZ0NBQWdDLG9CQUFvQixvQkFBb0IseUJBQXlCLEdBQUcsd0RBQXdELHlCQUF5QixHQUFHLDhCQUE4Qix5QkFBeUIsZ0JBQWdCLGlCQUFpQixHQUFHLG9CQUFvQixvQkFBb0IseUJBQXlCLG1CQUFtQixzQkFBc0IsR0FBRyxpQkFBaUIsb0JBQW9CLHVCQUF1QixvQkFBb0IsOENBQThDLGdCQUFnQixHQUFHLGVBQWUsdUJBQXVCLG1CQUFtQixtQkFBbUIsR0FBRyxvQkFBb0IsdUJBQXVCLG1CQUFtQixHQUFHLDBCQUEwQix1QkFBdUIsa0JBQWtCLEdBQUcsdUJBQXVCLG9CQUFvQixHQUFHLGlCQUFpQixvQkFBb0Isb0JBQW9CLHlDQUF5Qyx1QkFBdUIsR0FBRyx3QkFBd0IsZ0NBQWdDLEdBQUcsaUJBQWlCLHVCQUF1QixtQkFBbUIsR0FBRyxpQkFBaUIsdUJBQXVCLG1CQUFtQixHQUFHLHNCQUFzQixvQkFBb0Isb0JBQW9CLHdCQUF3QixrSEFBa0gsc0JBQXNCLHlCQUF5QixHQUFHLHdCQUF3Qix5QkFBeUIsY0FBYyxnQkFBZ0Isa0JBQWtCLHdCQUF3QixvQkFBb0Isa0JBQWtCLHFCQUFxQixHQUFHLGlCQUFpQix1QkFBdUIsc0JBQXNCLEdBQUcsaUJBQWlCLHVCQUF1QixzQkFBc0IsR0FBRyxpQkFBaUIsdUJBQXVCLHNCQUFzQixLQUFLLGlCQUFpQix1QkFBdUIsc0JBQXNCLEtBQUssZUFBZSxvQkFBb0Isb0NBQW9DLDBCQUEwQixHQUFHLGVBQWUsb0JBQW9CLDZDQUE2Qyw2QkFBNkIsc0JBQXNCLDRCQUE0QixHQUFHLHNCQUFzQixnQ0FBZ0Msb0JBQW9CLEdBQUcsbUJBQW1CLHdCQUF3Qix1QkFBdUIsc0JBQXNCLGdDQUFnQyxvQkFBb0IsR0FBRyxnQ0FBZ0Msa0JBQWtCLEdBQUcsZUFBZSxvQkFBb0IsaURBQWlELHVCQUF1QixzQkFBc0IsR0FBRyxrQkFBa0Isb0JBQW9CLGlEQUFpRCxzQkFBc0IsR0FBRyxxQkFBcUIsa0JBQWtCLEdBQUcsZUFBZSxvQkFBb0IsaURBQWlELHNCQUFzQixHQUFHLGVBQWUsb0JBQW9CLGlEQUFpRCxzQkFBc0IsR0FBRyxlQUFlLGtCQUFrQixHQUFHLHFCQUFxQixzQkFBc0IsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FB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QTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBLGtDQUFrQyx1REFBUztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx1REFBUztBQUMzQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUEsUUFBUSx5REFBVzs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvZG9tcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9mbnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvaW50ZXJmYWNlcnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0xpdGVyYXRhLVZhcmlhYmxlRm9udF9vcHN6LHdnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGl0ZXJhdGEnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ0xpdGVyYXRhJztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjg1KTtcXG4gICAgdHJhbnNmb3JtOiAwLjdzO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdMaXRlcmF0YSc7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTAwcHgsIDMwMHB4KSAxZnI7XFxufVxcblxcbiN0aXRsZUJsb2NrIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5NDA3NDtcXG4gICAgb3BhY2l0eTogMC45NztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHg7XFxufVxcblxcbiNwYWdlY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXG59XFxuXFxuI3RpdGxlQmxvY2sgYnV0dG9uIHtcXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xcbn1cXG5cXG4jbWVudVRvZ2dsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbiNtZW51VG9nZ2xlUGljIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbiN0aXRsZU1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI3RpdGxlUGljIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3RpdGxlVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXG59XFxuXFxuXFxuXFxuXFxuI21lbnUgaW1nW3NyYyQ9XFxcIi5zdmdcXFwiXSB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDIwcHg7XFxufVxcblxcbiNtZW51IHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNzBweCBtaW4tY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFOTAwMDtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7fVxcblxcbiNwZXJpb2RMaXN0cyBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNDNjk5NztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuXFxuI3BlcmlvZExpc3RzIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuI2hvbWUge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4jdG9kYXkge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4jdGhpc1dlZWsge1xcbiAgICBncmlkLXJvdzogMy80O1xcbn1cXG5cXG4jcHJvamVjdExpc3RzIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNwcm9qTGlzdFRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qTGlzdFRleHQge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBmb250LXNpemU6IGNhbGMoMThweCArIDF2dyk7XFxufVxcblxcbiNwcm9qQWRkQnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xcbiAgICBtYXgtd2lkdGg6IDM1cHg7XFxuICAgIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4jcHJvakFkZEJ1dHRvblBpYyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbiNwcm9qZWN0Zm9ybWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3Byb2plY3Rmb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGl0ZXJhdGEnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQkZGO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNwcm9qZm9ybXRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuI3Byb2ppbnB1dGNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3Byb2ppbnB1dCB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBcXG59XFxuXFxuI3Byb2pmb3JtYnRucyB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcblxcbn1cXG5cXG4jcHJvamZvcm1idG5zIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcblxcbiNwcm9qZGVsZXRlIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgbWF4LXdpZHRoOiAxNDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbiNwcm9qbGFiZWxjcmVhdGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTQwcHg7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbn1cXG5cXG4jcHJvamxhYmVsZWRpdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNDBweDtcXG4gICAgbGVmdDogMTBweDtcXG59XFxuXFxuI3Byb2pUaWxlTGlzdCB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4jcHJvalRpbGVMaXN0IGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNDNjk5NztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdHBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wZXJpb2Rjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnBlcmlvZGNvbnRhaW5lciA+IC5wZXJpb2R0aXRsZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgY29sb3I6ICMwOTQwNzQ7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLnBlcmlvZGNvbnRhaW5lciA+IC50b2RvcG9wdXAge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4ucGVyaW9kY29udGFpbmVyID4gLnRhc2toZWFkZXJzIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuLnBlcmlvZGNvbnRhaW5lciA+IC5wZXJpb2R0YXNrY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuXFxuLnByb2p0aXRsZWxpbmUge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4ucHJvanBhZ2V0aXRsZSB7XFxuICAgIGNvbG9yOiAjMDk0MDc0O1xcbn1cXG5cXG4ucHJvamVkaXRwaWMge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuLnByb2plZGl0IHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4uZWRpdHByb2pmb3JtIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRpdnByb2p0YXNrIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qdGFzayB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU5MDAwO1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIFxcbn1cXG5cXG4jdG9kb3BvcHVwIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuXFxuI3RvZG9mb3JtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4jdG9kb2Zvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgIHJvdy1nYXA6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QURCRkY7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3RvZG9mb3JtY29udGFpbmVyIGlucHV0LCAjdG9kb2Zvcm1jb250YWluZXIgc2VsZWN0e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiN0b2RvZm9ybWNvbnRhaW5lciBsYWJlbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMHB4O1xcbiAgICB0b3A6IC0yNHB4O1xcbn1cXG5cXG4jdG9kb2Zvcm10aXRsZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgd2lkdGg6IDEyNXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNzZWNvbmR0b2RvIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNTBweCAxMjJweCA2NXB4O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbiN0YXNrbmFtZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jZGF0ZWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIHdpZHRoOiAxMjJweDtcXG59XFxuXFxuXFxuI3ByaW9yaXR5Y29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgd2lkdGg6IDY1cHg7XFxufVxcblxcbiNkZXNjcmlwY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuI2ZvdXJ0aHRvZG8ge1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDEwMHB4O1xcbiAgICBjb2x1bW4tZ2FwOiAxNXB4O1xcbn1cXG5cXG4jZm91cnRodG9kbyBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4jc3VibWl0dGFzayB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuI2NhbmNlbHRhc2sge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcblxcblxcbi50YXNraGVhZGVycyB7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg1MHB4LCAyNTBweCkgbWlubWF4KDUwcHgsIDIwMHB4KSBtaW5tYXgoNzVweCwgMjAwcHgpIG1pbm1heCg3NXB4LCAyMDBweCkgNzBweDtcXG4gICAgY29sdW1uLWdhcDogNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNraGVhZGVyczphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5uYW1laGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgbWluLXdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uZGVzY2hlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIG1pbi13aWR0aDogNjBweDtcXG59XFxuXFxuLmRhdGVoZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBtaW4td2lkdGg6IDg1cHg7XFxuXFxufVxcblxcbi5wcmlvaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gICAgbWluLXdpZHRoOiA2NXB4O1xcblxcbn1cXG5cXG4udG9kb3RpbGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmZpcnN0cm93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgYXV0byk7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGNvbHVtbi1nYXA6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbn1cXG5cXG4uZmlyc3Ryb3cgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG4gICAgb3BhY2l0eTogMC44NTtcXG59XFxuXFxuLnRvZG90aWxlIGltZyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi5lZGl0YnV0dG9uLCAuZGVsZXRlYnV0dG9uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi50aWxlbmFtZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDUwcHgsIDI1MHB4KTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgbWluLXdpZHRoOiA1MHB4O1xcbn1cXG5cXG4udGlsZWRlc2NkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg2MHB4LCAyMDBweCk7XFxuICAgIG1pbi13aWR0aDogNjBweDtcXG59XFxuXFxuLnRpbGVkZXNjYnV0dG9uIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi50aWxlZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDg1cHgsIDIwMHB4KTtcXG4gICAgbWluLXdpZHRoOiA4NXB4O1xcbn1cXG5cXG4udGlsZXByaW8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg4NXB4LCAyMDBweCk7XFxuICAgIG1pbi13aWR0aDogNjVweDtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5jaGVja2JveDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlc2NleHBhbmQge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QiwwREFBK0Q7SUFDL0QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7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V0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMaXRlcmF0YSc7XFxuICAgIHNyYzogdXJsKCcuL0xpdGVyYXRhLVZhcmlhYmxlRm9udF9vcHN6LHdnaHQudHRmJykgZm9ybWF0KCd0dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ0xpdGVyYXRhJztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjg1KTtcXG4gICAgdHJhbnNmb3JtOiAwLjdzO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdMaXRlcmF0YSc7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTAwcHgsIDMwMHB4KSAxZnI7XFxufVxcblxcbiN0aXRsZUJsb2NrIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5NDA3NDtcXG4gICAgb3BhY2l0eTogMC45NztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHg7XFxufVxcblxcbiNwYWdlY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXG59XFxuXFxuI3RpdGxlQmxvY2sgYnV0dG9uIHtcXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xcbn1cXG5cXG4jbWVudVRvZ2dsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbiNtZW51VG9nZ2xlUGljIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbiN0aXRsZU1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI3RpdGxlUGljIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3RpdGxlVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXG59XFxuXFxuXFxuXFxuXFxuI21lbnUgaW1nW3NyYyQ9XFxcIi5zdmdcXFwiXSB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDIwcHg7XFxufVxcblxcbiNtZW51IHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNzBweCBtaW4tY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFOTAwMDtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7fVxcblxcbiNwZXJpb2RMaXN0cyBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNDNjk5NztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuXFxuI3BlcmlvZExpc3RzIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuI2hvbWUge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4jdG9kYXkge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4jdGhpc1dlZWsge1xcbiAgICBncmlkLXJvdzogMy80O1xcbn1cXG5cXG4jcHJvamVjdExpc3RzIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNwcm9qTGlzdFRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qTGlzdFRleHQge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBmb250LXNpemU6IGNhbGMoMThweCArIDF2dyk7XFxufVxcblxcbiNwcm9qQWRkQnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xcbiAgICBtYXgtd2lkdGg6IDM1cHg7XFxuICAgIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4jcHJvakFkZEJ1dHRvblBpYyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbiNwcm9qZWN0Zm9ybWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3Byb2plY3Rmb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGl0ZXJhdGEnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQkZGO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNwcm9qZm9ybXRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuI3Byb2ppbnB1dGNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3Byb2ppbnB1dCB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBcXG59XFxuXFxuI3Byb2pmb3JtYnRucyB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcblxcbn1cXG5cXG4jcHJvamZvcm1idG5zIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcblxcbiNwcm9qZGVsZXRlIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgbWF4LXdpZHRoOiAxNDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxufVxcblxcbiNwcm9qbGFiZWxjcmVhdGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTQwcHg7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbn1cXG5cXG4jcHJvamxhYmVsZWRpdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNDBweDtcXG4gICAgbGVmdDogMTBweDtcXG59XFxuXFxuI3Byb2pUaWxlTGlzdCB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4jcHJvalRpbGVMaXN0IGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNDNjk5NztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdHBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wZXJpb2Rjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnBlcmlvZGNvbnRhaW5lciA+IC5wZXJpb2R0aXRsZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgY29sb3I6ICMwOTQwNzQ7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLnBlcmlvZGNvbnRhaW5lciA+IC50b2RvcG9wdXAge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4ucGVyaW9kY29udGFpbmVyID4gLnRhc2toZWFkZXJzIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuLnBlcmlvZGNvbnRhaW5lciA+IC5wZXJpb2R0YXNrY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuXFxuLnByb2p0aXRsZWxpbmUge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4ucHJvanBhZ2V0aXRsZSB7XFxuICAgIGNvbG9yOiAjMDk0MDc0O1xcbn1cXG5cXG4ucHJvamVkaXRwaWMge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG59XFxuXFxuLnByb2plZGl0IHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4uZWRpdHByb2pmb3JtIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRpdnByb2p0YXNrIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qdGFzayB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU5MDAwO1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIFxcbn1cXG5cXG4jdG9kb3BvcHVwIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuXFxuI3RvZG9mb3JtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4jdG9kb2Zvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgIHJvdy1nYXA6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QURCRkY7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3RvZG9mb3JtY29udGFpbmVyIGlucHV0LCAjdG9kb2Zvcm1jb250YWluZXIgc2VsZWN0e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiN0b2RvZm9ybWNvbnRhaW5lciBsYWJlbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMHB4O1xcbiAgICB0b3A6IC0yNHB4O1xcbn1cXG5cXG4jdG9kb2Zvcm10aXRsZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgd2lkdGg6IDEyNXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNzZWNvbmR0b2RvIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNTBweCAxMjJweCA2NXB4O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbiN0YXNrbmFtZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jZGF0ZWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIHdpZHRoOiAxMjJweDtcXG59XFxuXFxuXFxuI3ByaW9yaXR5Y29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgd2lkdGg6IDY1cHg7XFxufVxcblxcbiNkZXNjcmlwY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuI2ZvdXJ0aHRvZG8ge1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDEwMHB4O1xcbiAgICBjb2x1bW4tZ2FwOiAxNXB4O1xcbn1cXG5cXG4jZm91cnRodG9kbyBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDRBO1xcbn1cXG5cXG4jc3VibWl0dGFzayB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuI2NhbmNlbHRhc2sge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcblxcblxcbi50YXNraGVhZGVycyB7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg1MHB4LCAyNTBweCkgbWlubWF4KDUwcHgsIDIwMHB4KSBtaW5tYXgoNzVweCwgMjAwcHgpIG1pbm1heCg3NXB4LCAyMDBweCkgNzBweDtcXG4gICAgY29sdW1uLWdhcDogNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNraGVhZGVyczphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5uYW1laGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgbWluLXdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uZGVzY2hlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIG1pbi13aWR0aDogNjBweDtcXG59XFxuXFxuLmRhdGVoZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBtaW4td2lkdGg6IDg1cHg7XFxuXFxufVxcblxcbi5wcmlvaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gICAgbWluLXdpZHRoOiA2NXB4O1xcblxcbn1cXG5cXG4udG9kb3RpbGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmZpcnN0cm93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgYXV0byk7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGNvbHVtbi1nYXA6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbn1cXG5cXG4uZmlyc3Ryb3cgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQ0QTtcXG4gICAgb3BhY2l0eTogMC44NTtcXG59XFxuXFxuLnRvZG90aWxlIGltZyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRENEE7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi5lZGl0YnV0dG9uLCAuZGVsZXRlYnV0dG9uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi50aWxlbmFtZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDUwcHgsIDI1MHB4KTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgbWluLXdpZHRoOiA1MHB4O1xcbn1cXG5cXG4udGlsZWRlc2NkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg2MHB4LCAyMDBweCk7XFxuICAgIG1pbi13aWR0aDogNjBweDtcXG59XFxuXFxuLnRpbGVkZXNjYnV0dG9uIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi50aWxlZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDg1cHgsIDIwMHB4KTtcXG4gICAgbWluLXdpZHRoOiA4NXB4O1xcbn1cXG5cXG4udGlsZXByaW8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg4NXB4LCAyMDBweCk7XFxuICAgIG1pbi13aWR0aDogNjVweDtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5jaGVja2JveDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlc2NleHBhbmQge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsOyAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2NyZWF0ZXByb2p0aWxlLCBwcm9qcGFnZUlELCBkZWxldGVwcm9qfSBmcm9tICcuL3RvZG9pbnRlcmZhY2Vycy5qcyc7XG5pbXBvcnQgZWRpdHBpYyBmcm9tICcuL3BlbmNpbC1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgZGVsZXRlcGljIGZyb20gJy4vZGVsZXRlLnN2Zyc7XG5pbXBvcnQgaXNUb2RheSBmcm9tICdkYXRlLWZucy9pc1RvZGF5JztcbmltcG9ydCBpc1NhbWVXZWVrIGZyb20gJ2RhdGUtZm5zL2lzU2FtZVdlZWsnO1xuaW1wb3J0IHBhcnNlSVNPIGZyb20gJ2RhdGUtZm5zL3BhcnNlSVNPJztcblxuY29uc3QgcHJvamFycmF5ID0gW107XG5jb25zdCBwcm9qcGFnZXNhcnJheSA9IFtdO1xuXG5jb25zdCBzdG9yZXByb2plY3RzID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pO1xuICAgIGxldCBlbGVtZW50c3RyaW5nID0gZWxlbWVudC5vdXRlckhUTUw7XG4gICAgcHJvamFycmF5LnB1c2goZWxlbWVudHN0cmluZyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamFycmF5KSk7XG4gICAgY29uc29sZS5sb2cocHJvamFycmF5Lmxlbmd0aCk7XG59XG5cbmNvbnN0IGxvYWRwcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJ1bnBhY2tlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgfHwgJ1tdJyk7XG4gICAgY29uc29sZS5sb2cocGFydW5wYWNrZWQpO1xuICAgIGxldCBwcm9qVGlsZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvalRpbGVMaXN0Jyk7XG4gICAgcGFydW5wYWNrZWQuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2pUaWxlTGlzdC5pbm5lckhUTUwgKz0gcHJvamVjdDtcbiAgICBwcm9qYXJyYXkucHVzaChwcm9qZWN0KTtcbiAgICB9KVxufVxuXG5jb25zdCBzdG9yZXByb2pwYWdlcyA9IChpdGVtKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtKTtcbiAgICBsZXQgZWxlbWVudHN0cmluZyA9IGVsZW1lbnQub3V0ZXJIVE1MO1xuICAgIHByb2pwYWdlc2FycmF5LnB1c2goZWxlbWVudHN0cmluZyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RwYWdlcycsIEpTT04uc3RyaW5naWZ5KHByb2pwYWdlc2FycmF5KSk7XG59XG5cblxuY29uc3QgbG9hZHByb2pwYWdlcyA9ICgpID0+IHtcbiAgICBjb25zdCBwcHBhcnVucGFja2VkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHBhZ2VzJykgfHwgJ1tdJyk7XG4gICAgbGV0IHBhZ2Vjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZWNvbnRhaW5lcicpO1xuICAgIHBwcGFydW5wYWNrZWQuZm9yRWFjaCgocGFnZSkgPT4ge1xuICAgICAgICBwYWdlY29udGFpbmVyLmlubmVySFRNTCArPSBwYWdlO1xuICAgICAgICBwYWdlY29udGFpbmVyLmxhc3RDaGlsZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHBhZ2Vjb250YWluZXIubGFzdENoaWxkLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgIHBhZ2Vjb250YWluZXIubGFzdENoaWxkLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICBwcm9qcGFnZXNhcnJheS5wdXNoKHBhZ2UpO1xuICAgIH0pXG59XG5cbmNvbnN0IGNsZWFyZm9ybXMgPSAoKSA9PiB7XG4gICAgbGV0IGZvcm1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybScpXG4gICAgaWYgKGZvcm1zICE9PSBudWxsKSB7XG4gICAgICAgIGZvciAoY29uc3QgZm9ybSBvZiBmb3Jtcykge1xuICAgICAgICAgICAgZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgdXBkdHByb2pkZWwgPSAoKSA9PiB7XG4gICAgbGV0IGRlbGV0ZWJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGVidXR0b24nKTtcbiAgICAgICAgZm9yIChjb25zdCBkZWwgb2YgZGVsZXRlYnV0dG9ucykge1xuICAgICAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09ICdkZWxldGVidXR0b25waWMnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvdGlsZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IHRvZG90aWxlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2VpZCA9IHBhZ2UuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHRvZG90aWxlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZW51bSA9IHBhZ2VpZC5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb2pwYWdlc2FycmF5W3BhZ2VudW1dID0gcGFnZS5vdXRlckhUTUw7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cGFnZXMnLCBKU09OLnN0cmluZ2lmeShwcm9qcGFnZXNhcnJheSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09ICdkZWxldGVidXR0b24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvdGlsZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2UgPSB0b2RvdGlsZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYWdlaWQgPSBwYWdlLmlkO1xuICAgICAgICAgICAgICAgICAgICB0b2RvdGlsZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2VudW0gPSBwYWdlaWQucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qcGFnZXNhcnJheVtwYWdlbnVtXSA9IHBhZ2Uub3V0ZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHBhZ2VzJywgSlNPTi5zdHJpbmdpZnkocHJvanBhZ2VzYXJyYXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG59XG5cblxuY29uc3QgdG9Eb0Zvcm1zID0gKHRvZG9mb3JtdHlwZSwgdG9kb25hbWUsIHRvZG9kZXNjcmlwLCB0b2RvZGF0ZSwgdG9kb3ByaW8sIHRvZG90aWxlaWQpID0+IHtcbiAgICBsZXQgdG9kb2Zvcm1jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvZm9ybWNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9mb3JtY29udGFpbmVyJyk7XG4gICAgdG9kb2Zvcm1jb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtJyk7XG4gICAgbGV0IHRvZG9mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvZG9mb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb2Zvcm0nKTtcbiAgICB0b2RvZm9ybWNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvZm9ybSk7XG4gICAgXG4gICAgbGV0IHRvZG9mb3JtdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvZm9ybXRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb2Zvcm10aXRsZScpO1xuICAgIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2NyZWF0ZScpIHtcbiAgICB0b2RvZm9ybXRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICB9XG4gICAgZWxzZSBpZiAodG9kb2Zvcm10eXBlID09ICdlZGl0Jykge1xuICAgIHRvZG9mb3JtdGl0bGUudGV4dENvbnRlbnQgPSAnRWRpdCBUYXNrJztcbiAgICB9XG4gICAgdG9kb2Zvcm0uYXBwZW5kQ2hpbGQodG9kb2Zvcm10aXRsZSk7XG5cbiAgICBsZXQgc2Vjb25kdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY29uZHRvZG8uc2V0QXR0cmlidXRlKCdpZCcsICdzZWNvbmR0b2RvJyk7XG4gICAgdG9kb2Zvcm0uYXBwZW5kQ2hpbGQoc2Vjb25kdG9kbyk7XG5cbiAgICBsZXQgbmFtZWNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lY29udGFpbmVyJyk7XG4gICAgbGV0IHRhc2tuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza25hbWUnKTtcbiAgICB0YXNrbmFtZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgIHRhc2tuYW1lLmRlZmF1bHRWYWx1ZSA9IHRvZG9uYW1lO1xuICAgIH1cbiAgICBsZXQgbmFtZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuYW1lbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lbGFiZWwnKTtcbiAgICBuYW1lbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFza25hbWUnKTtcbiAgICBuYW1lbGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBOYW1lOiAnO1xuXG4gICAgc2Vjb25kdG9kby5hcHBlbmRDaGlsZChuYW1lY29udGFpbmVyKTtcbiAgICBuYW1lY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tuYW1lKTtcbiAgICBuYW1lY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVsYWJlbCk7XG5cbiAgICBsZXQgZGVzY3JpcGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwY29udGFpbmVyJyk7XG4gICAgbGV0IGRlc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2NyaXAuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkZXNjcmlwLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcCcpO1xuICAgIGRlc2NyaXAuc3R5bGUud2lkdGggPSAnMzAlJztcbiAgICBkZXNjcmlwLnN0eWxlLmhlaWdodCA9ICczMHB4JztcbiAgICBpZiAodG9kb2Zvcm10eXBlID09ICdlZGl0Jykge1xuICAgICAgICBkZXNjcmlwLmRlZmF1bHRWYWx1ZSA9IHRvZG9kZXNjcmlwO1xuICAgIH07XG4gICAgbGV0IGRlc2NyaXBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcGxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcGxhYmVsJyk7XG4gICAgZGVzY3JpcGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXAnKTtcbiAgICBkZXNjcmlwbGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICc7XG5cbiAgICB0b2RvZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwY29udGFpbmVyKTtcbiAgICBkZXNjcmlwY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXApO1xuICAgIGRlc2NyaXBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcGxhYmVsKTtcblxuICAgIGxldCBkYXRlY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZWNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGVjb250YWluZXInKTtcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgIGRhdGUuZGVmYXVsdFZhbHVlID0gdG9kb2RhdGU7XG4gICAgfTtcbiAgICBsZXQgZGF0ZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlbGFiZWwnKTtcbiAgICBkYXRlbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGF0ZScpO1xuICAgIGRhdGVsYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlOiAnO1xuXG4gICAgc2Vjb25kdG9kby5hcHBlbmRDaGlsZChkYXRlY29udGFpbmVyKTtcbiAgICBkYXRlY29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIGRhdGVjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZWxhYmVsKTtcblxuICAgIFxuICAgIGxldCBwcmlvcml0eWNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5Y29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHljb250YWluZXInKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBcbiAgICBsZXQgcHJpb3JpdHlsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlsYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5bGFiZWwnKTtcbiAgICBwcmlvcml0eWxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHlsYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcbiAgICBsZXQgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGhpZ2gudmFsdWUgPSBoaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgIGxldCBub3JtYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBub3JtYWwudmFsdWUgPSBub3JtYWwudGV4dENvbnRlbnQgPSAnTm9ybWFsJztcbiAgICBsZXQgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbG93LnZhbHVlID0gbG93LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobm9ybWFsKTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChsb3cpO1xuICAgIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgIGlmICh0b2RvcHJpbyA9PSAnSGlnaCcpIHtcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSBoaWdoLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2RvcHJpbyA9PSAnTm9ybWFsJykge1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9IG5vcm1hbC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9kb3ByaW8gPT0gJ0xvdycpIHtcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSBsb3cudmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc2Vjb25kdG9kby5hcHBlbmRDaGlsZChwcmlvcml0eWNvbnRhaW5lcik7XG4gICAgcHJpb3JpdHljb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIHByaW9yaXR5Y29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5bGFiZWwpO1xuXG4gICAgbGV0IGZvdXJ0aHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3VydGh0b2RvLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm91cnRodG9kbycpO1xuICAgIHRvZG9mb3JtLmFwcGVuZENoaWxkKGZvdXJ0aHRvZG8pO1xuXG4gICAgbGV0IHN1Ym1pdHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXR0YXNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBzdWJtaXR0YXNrLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgc3VibWl0dGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdHRhc2snKTtcbiAgICBpZiAodG9kb2Zvcm10eXBlID09ICdjcmVhdGUnKSB7XG4gICAgc3VibWl0dGFzay50ZXh0Q29udGVudCA9ICdDcmVhdGUgVGFzayc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRvZG9mb3JtdHlwZSA9PSAnZWRpdCcpIHtcbiAgICBzdWJtaXR0YXNrLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgfVxuXG4gICAgZm91cnRodG9kby5hcHBlbmRDaGlsZChzdWJtaXR0YXNrKTtcblxuICAgIHN1Ym1pdHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAodG9kb2Zvcm0ucmVwb3J0VmFsaWRpdHkoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRvZG9mb3JtdHlwZSA9PSAnY3JlYXRlJykge1xuICAgICAgICAgICAgbGV0IHByb2plY3RwYXJlbnQgPSB0b2RvZm9ybS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGxldCBwYXJlbnRJRCA9IHByb2plY3RwYXJlbnQuaWQ7XG4gICAgICAgICAgICBsZXQgcGFyZW50bnVtID0gcGFyZW50SUQucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgICAgICAgICAgbGV0IHByb2plY3R0YXNrY29udCA9IHByb2plY3RwYXJlbnQubGFzdENoaWxkO1xuICAgICAgICAgICAgcHJvamVjdHRhc2tjb250LmFwcGVuZENoaWxkKHRvRG9UaWxlKHBhcmVudG51bSwgdGFza25hbWUudmFsdWUsIGRlc2NyaXAudmFsdWUsIGRhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlKSk7XG4gICAgICAgICAgICB0b2RvZm9ybWNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIHByb2pwYWdlc2FycmF5W3BhcmVudG51bV0gPSBwcm9qZWN0cGFyZW50Lm91dGVySFRNTDtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cGFnZXMnLCBKU09OLnN0cmluZ2lmeShwcm9qcGFnZXNhcnJheSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9kb2Zvcm10eXBlID09ICdlZGl0Jykge1xuICAgICAgICAgICAgbGV0IHByb2plY3RwYXJlbnQgPSB0b2RvZm9ybS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGxldCBwYXJlbnRJRCA9IHByb2plY3RwYXJlbnQuaWQ7XG4gICAgICAgICAgICBsZXQgcGFyZW50bnVtID0gcGFyZW50SUQucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgICAgICAgICAgbGV0IHRvZG90aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb3RpbGVpZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvdGlsZWlkKTtcbiAgICAgICAgICAgIGxldCB0aWxlY2hpbGRzID0gdG9kb3RpbGUuY2hpbGROb2RlcztcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGlsZWNoaWxkcykge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgPT0gJ2ZpcnN0cm93Jykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3Ryb3djaGlsZHMgPSBjaGlsZC5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJvd2NoaWxkIG9mIGZpcnN0cm93Y2hpbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93Y2hpbGQuY2xhc3NOYW1lID09ICd0aWxlbmFtZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3djaGlsZC50ZXh0Q29udGVudCA9IHRhc2tuYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvd2NoaWxkLmNsYXNzTmFtZSA9PSAndGlsZWRhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Y2hpbGQudGV4dENvbnRlbnQgPSBkYXRlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvd2NoaWxkLmNsYXNzTmFtZSA9PSAndGlsZXByaW8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Y2hpbGQudGV4dENvbnRlbnQgPSBwcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5jbGFzc05hbWUgPT0gJ2Rlc2NleHBhbmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRleHRDb250ZW50ID0gZGVzY3JpcC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvZm9ybWNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIHByb2pwYWdlc2FycmF5W3BhcmVudG51bV0gPSBwcm9qZWN0cGFyZW50Lm91dGVySFRNTDtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cGFnZXMnLCBKU09OLnN0cmluZ2lmeShwcm9qcGFnZXNhcnJheSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG5cbiAgICAgICAgIH0pXG5cbiAgICBsZXQgY2FuY2VsdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbHRhc2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGNhbmNlbHRhc2suc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBjYW5jZWx0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FuY2VsdGFzaycpO1xuICAgIGNhbmNlbHRhc2sudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgIGNhbmNlbHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB0b2RvZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgdG9kb2Zvcm1jb250YWluZXIucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIGZvdXJ0aHRvZG8uYXBwZW5kQ2hpbGQoY2FuY2VsdGFzayk7XG5cbiAgICByZXR1cm4gdG9kb2Zvcm1jb250YWluZXI7XG5cbn1cblxuXG5jb25zdCB0b0RvVGlsZSA9ICh0aWxlaWQsIHRvZG9uYW1lLCB0b2RvZGVzY3JpcCwgdG9kb2RhdGUsIHRvZG9wcmlvKSA9PiB7XG4gICAgbGV0IHRvZG90aWxlY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb3RpbGVjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0b2RvdGlsZSB0aWxlb2Zwcm9qJHt0aWxlaWR9YCk7XG4gICAgbGV0IHRvZG90aWxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG90aWxlJylcbiAgICB0b2RvdGlsZWNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRpbGUke3RvZG90aWxlcy5sZW5ndGh9YCk7XG4gICAgdG9kb3RpbGVjb250YWluZXIuc3R5bGUud2lkdGggPSBwYWdlY29udGFpbmVyLnN0eWxlLndpZHRoO1xuXG4gICAgbGV0IGZpcnN0cm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmlyc3Ryb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaXJzdHJvdycpO1xuICAgIHRvZG90aWxlY29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0cm93KTtcblxuICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2JveCcpO1xuICAgIGZpcnN0cm93LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQgPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHRvZG90aWxlY29udGFpbmVyLnN0eWxlLmNvbG9yID0gJ3JnYmEoMjExLDIxMSwyMTEsMC41KSc7XG4gICAgICAgICAgICB0aWxlZGVzY2J1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgICAgICBlZGl0YnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgICAgIGRlbGV0ZWJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hlY2tib3guY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdG9kb3RpbGVjb250YWluZXIuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgdGlsZWRlc2NidXR0b24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgIGVkaXRidXR0b24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgIGRlbGV0ZWJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxldCB0aWxlbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbGVuYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZW5hbWUnKTtcbiAgICB0aWxlbmFtZS50ZXh0Q29udGVudCA9IHRvZG9uYW1lO1xuICAgIGZpcnN0cm93LmFwcGVuZENoaWxkKHRpbGVuYW1lKTtcblxuICAgIGxldCB0aWxlZGVzY2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbGVkZXNjZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZWRlc2NkaXYnKTtcbiAgICBmaXJzdHJvdy5hcHBlbmRDaGlsZCh0aWxlZGVzY2Rpdik7XG4gICAgbGV0IHRpbGVkZXNjYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGlsZWRlc2NidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIHRpbGVkZXNjYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZWRlc2NidXR0b24nKTtcbiAgICB0aWxlZGVzY2J1dHRvbi50ZXh0Q29udGVudCA9ICdEZXNjLic7XG4gICAgdGlsZWRlc2NkaXYuYXBwZW5kQ2hpbGQodGlsZWRlc2NidXR0b24pO1xuXG4gICAgdGlsZWRlc2NidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChkZXNjZXhwYW5kLnN0eWxlLnZpc2liaWxpdHkgPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBkZXNjZXhwYW5kLnN0eWxlLndpZHRoID0gdG9kb3RpbGVjb250YWluZXIuc3R5bGUud2lkdGg7XG4gICAgICAgIGRlc2NleHBhbmQuc3R5bGUuaGVpZ2h0ID0gJ2ZpdC1jb250ZW50JztcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKGRlc2NleHBhbmQuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIGRlc2NleHBhbmQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgdGlsZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aWxlZGF0ZS50ZXh0Q29udGVudCA9IHRvZG9kYXRlO1xuICAgIHRpbGVkYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZWRhdGUnKTtcbiAgICBmaXJzdHJvdy5hcHBlbmRDaGlsZCh0aWxlZGF0ZSk7XG4gICAgXG4gICAgbGV0IHRpbGVwcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGlsZXByaW8udGV4dENvbnRlbnQgPSB0b2RvcHJpbztcbiAgICB0aWxlcHJpby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpbGVwcmlvJyk7XG4gICAgZmlyc3Ryb3cuYXBwZW5kQ2hpbGQodGlsZXByaW8pO1xuXG4gICAgbGV0IGVkaXRidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0YnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBlZGl0YnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdGJ1dHRvbicpO1xuICAgIGxldCBlZGl0YnV0dG9ucGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZWRpdGJ1dHRvbnBpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXRidXR0b25waWMnKTtcbiAgICBlZGl0YnV0dG9ucGljLnNyYyA9IGVkaXRwaWM7XG4gICAgZWRpdGJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0YnV0dG9ucGljKTtcblxuICAgIGZpcnN0cm93LmFwcGVuZENoaWxkKGVkaXRidXR0b24pO1xuXG4gICAgZWRpdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ2VkaXRidXR0b25waWMnKSB7XG4gICAgICAgIGxldCB0b2RvdGlsZWlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG90aWxlaWQpO1xuICAgICAgICBsZXQgdG9kb3BvcHVwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9wb3B1cCcpO1xuICAgICAgICBmb3IgKGNvbnN0IHBvcHVwIG9mIHRvZG9wb3B1cHMpIHtcbiAgICAgICAgaWYgKHBvcHVwLnBhcmVudEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5mb3Jtc1swXSkge1xuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0b0RvRm9ybXMoJ2VkaXQnLCB0aWxlbmFtZS50ZXh0Q29udGVudCwgZGVzY2V4cGFuZC50ZXh0Q29udGVudCwgdGlsZWRhdGUudGV4dENvbnRlbnQsIHRpbGVwcmlvLnRleHRDb250ZW50LCB0b2RvdGlsZWlkKSk7XG4gICAgfX19XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnZWRpdGJ1dHRvbicpIHtcbiAgICAgICAgbGV0IHRvZG90aWxlaWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG90aWxlaWQpO1xuICAgICAgICBsZXQgdG9kb3BvcHVwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9wb3B1cCcpO1xuICAgICAgICBmb3IgKGNvbnN0IHBvcHVwIG9mIHRvZG9wb3B1cHMpIHtcbiAgICAgICAgaWYgKHBvcHVwLnBhcmVudEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5mb3Jtc1swXSkge1xuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0b0RvRm9ybXMoJ2VkaXQnLCB0aWxlbmFtZS50ZXh0Q29udGVudCwgZGVzY2V4cGFuZC50ZXh0Q29udGVudCwgdGlsZWRhdGUudGV4dENvbnRlbnQsIHRpbGVwcmlvLnRleHRDb250ZW50LCB0b2RvdGlsZWlkKSk7XG4gICAgfX19XG4gICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIGxldCBkZWxldGVidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGRlbGV0ZWJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbGV0ZWJ1dHRvbicpO1xuICAgIGxldCBkZWxldGVidXR0b25waWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZWxldGVidXR0b25waWMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWxldGVidXR0b25waWMnKTtcbiAgICBkZWxldGVidXR0b25waWMuc3JjID0gZGVsZXRlcGljO1xuICAgIGRlbGV0ZWJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVidXR0b25waWMpO1xuICAgIGZpcnN0cm93LmFwcGVuZENoaWxkKGRlbGV0ZWJ1dHRvbik7XG5cbiAgICBkZWxldGVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBsZXQgcGFnZSA9IHRvZG90aWxlY29udGFpbmVyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IHBhZ2VpZCA9IHBhZ2UuaWQ7XG4gICAgICAgIGxldCBwYWdlbnVtID0gcGFnZWlkLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICAgICAgdG9kb3RpbGVjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIHByb2pwYWdlc2FycmF5W3BhZ2VudW1dID0gcGFnZS5vdXRlckhUTUw7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHBhZ2VzJywgSlNPTi5zdHJpbmdpZnkocHJvanBhZ2VzYXJyYXkpKTtcblxuICAgIH0pXG5cbiAgICBsZXQgZGVzY2V4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NleHBhbmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjZXhwYW5kJyk7XG4gICAgZGVzY2V4cGFuZC50ZXh0Q29udGVudCA9IGAke3RvZG9kZXNjcmlwfWA7XG4gICAgZGVzY2V4cGFuZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZGVzY2V4cGFuZC5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgIGRlc2NleHBhbmQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgdG9kb3RpbGVjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY2V4cGFuZCk7XG5cbiAgICByZXR1cm4gdG9kb3RpbGVjb250YWluZXI7XG5cbn1cblxuXG5jb25zdCBwcm9qZWN0VGlsZSA9IChwcm9qZWN0bmFtZSkgPT4ge1xuICAgIGxldCBwcm9qdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2p0aWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHRpbGUnKTtcbiAgICBwcm9qdGlsZS50ZXh0Q29udGVudCA9IHByb2plY3RuYW1lO1xuICAgIHByb2p0aWxlLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdCR7cHJvamFycmF5Lmxlbmd0aH1gKTtcbiAgICBsZXQgcHJvalRpbGVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pUaWxlTGlzdCcpO1xuICAgIHByb2pUaWxlTGlzdC5hcHBlbmRDaGlsZChwcm9qdGlsZSk7XG4gICAgc3RvcmVwcm9qZWN0cyhwcm9qdGlsZS5pZCk7XG5cbiAgICBwcm9qdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGxldCBkZXNjcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rlc2NleHBhbmQnKTtcbiAgICAgICAgaWYgKGRlc2NzLmxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBkZXNjIG9mIGRlc2NzKSB7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUuaGVpZ2h0ID0gJzBweDsnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGNsZWFyZm9ybXMoKTtcbiAgICAgICAgc29ydHRvZG9zKCk7XG4gICAgICAgIGxldCBwYWdlY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Vjb250YWluZXInKTtcbiAgICAgICAgbGV0IHBhZ2Vub2RlcyA9IHBhZ2Vjb250YWluZXIuY2hpbGROb2RlcztcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHBhZ2Vub2Rlcykge1xuICAgICAgICAgICAgaWYgKG5vZGUuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgdGlsZWlkID0gZS50YXJnZXQuaWQ7XG4gICAgICAgIGxldCB0aWxlaWRudW0gPSB0aWxlaWQucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgICAgICBsZXQgcHJvanBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvanBhZ2Uke3RpbGVpZG51bX1gKTtcbiAgICAgICAgcHJvanBhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgcHJvanBhZ2Uuc3R5bGUud2lkdGggPSBwYWdlY29udGFpbmVyLnN0eWxlLndpZHRoXG4gICAgICAgIHByb2pwYWdlLnN0eWxlLmhlaWdodCA9ICdmaXQtY29udGVudCc7XG4gICAgICAgIGxldCB0YXNrY29udCA9IHByb2pwYWdlLnF1ZXJ5U2VsZWN0b3IoJy50YXNrc2NvbnRhaW5lcicpO1xuICAgICAgICBsZXQgcHJvanBhZ2V0YXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYHRpbGVvZnByb2oke3RpbGVpZG51bX1gKTtcbiAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2pwYWdldGFza3MpIHtcbiAgICAgICAgICAgIGlmICghdGFza2NvbnQuY29udGFpbnModGFzaykpe1xuICAgICAgICAgICAgdGFza2NvbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0pXG4gICAgXG59XG5cbmNvbnN0IGVkaXRwcm9qdGlsZSA9IChwcm9qbmFtZSwgcHJvanBhZ2VuYW1lKSA9PiB7XG4gICAgbGV0IHByb2pwYWdldGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qcGFnZXRpdGxlJyk7XG4gICAgZm9yIChjb25zdCB0aXRsZSBvZiBwcm9qcGFnZXRpdGxlKSB7XG4gICAgICAgIGlmICh0aXRsZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvam5hbWU7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHByb2pwYWdlbnVtID0gcHJvanBhZ2VuYW1lLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICBsZXQgcHJvanBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qcGFnZW5hbWUpO1xuICAgIHByb2pwYWdlc2FycmF5W3Byb2pwYWdlbnVtXSA9IHByb2pwYWdlLm91dGVySFRNTDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHBhZ2VzJywgSlNPTi5zdHJpbmdpZnkocHJvanBhZ2VzYXJyYXkpKTtcbiAgICBsZXQgcHJvanRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdCR7cHJvanBhZ2VudW19YCk7XG4gICAgcHJvanRpbGUudGV4dENvbnRlbnQgPSBwcm9qbmFtZTtcbiAgICBwcm9qYXJyYXlbcHJvanBhZ2VudW1dID0gcHJvanRpbGUub3V0ZXJIVE1MO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2phcnJheSkpO1xuICAgIH1cblxuY29uc3QgZGVsZXRlcHJvanRpbGUgPSAoKSA9PiB7XG4gICAgbGV0IHByb2pwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdHBhZ2UnKTtcbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcHJvanBhZ2UpIHtcbiAgICAgICAgaWYgKHBhZ2Uuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0cGFnZWlkID0gcGFnZS5pZDtcbiAgICAgICAgICAgIGxldCBwYWdlaWRudW0gPSBwcm9qZWN0cGFnZWlkLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICAgICAgICAgIGRlbGV0ZXByb2oocGFnZWlkbnVtKTtcbiAgICAgICAgICAgIGxldCBwcm9qdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0JHtwYWdlaWRudW19YCk7XG4gICAgICAgICAgICBwYWdlLnJlbW92ZSgpO1xuICAgICAgICAgICAgcHJvanRpbGUucmVtb3ZlKCk7XG4gICAgICAgICAgICBwcm9qYXJyYXkuc3BsaWNlKHBhZ2VpZG51bSwgMSk7XG4gICAgICAgICAgICBwcm9qcGFnZXNhcnJheS5zcGxpY2UocGFnZWlkbnVtLCAxKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2phcnJheSkpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RwYWdlcycsIEpTT04uc3RyaW5naWZ5KHByb2pwYWdlc2FycmF5KSk7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgdGFza2hlYWRlcnMgPSAoKSA9PiB7XG4gICAgbGV0IHBhZ2Vjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZWNvbnRhaW5lcicpO1xuXG4gICAgbGV0IHRhc2toZWFkZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza2hlYWRlcnMuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNraGVhZGVycycpO1xuICAgIHRhc2toZWFkZXJzLnN0eWxlLndpZHRoID0gcGFnZWNvbnRhaW5lci5zdHlsZS53aWR0aDtcblxuICAgIGxldCBuYW1laGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZWhlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hbWVoZWFkZXInKTtcbiAgICBuYW1laGVhZGVyLnRleHRDb250ZW50ID0gJ05hbWUnO1xuICAgIHRhc2toZWFkZXJzLmFwcGVuZENoaWxkKG5hbWVoZWFkZXIpO1xuXG4gICAgbGV0IGRlc2NoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjaGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVzY2hlYWRlcicpO1xuICAgIGRlc2NoZWFkZXIudGV4dENvbnRlbnQgPSAnRGVzYy4nO1xuICAgIHRhc2toZWFkZXJzLmFwcGVuZENoaWxkKGRlc2NoZWFkZXIpO1xuXG4gICAgbGV0IGRhdGVoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlaGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0ZWhlYWRlcicpO1xuICAgIGRhdGVoZWFkZXIudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgIHRhc2toZWFkZXJzLmFwcGVuZENoaWxkKGRhdGVoZWFkZXIpO1xuXG4gICAgbGV0IHByaW9oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvaGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb2hlYWRlcicpO1xuICAgIHByaW9oZWFkZXIudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICAgIHRhc2toZWFkZXJzLmFwcGVuZENoaWxkKHByaW9oZWFkZXIpO1xuXG4gICAgbGV0IGVkaXRoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0aGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdGhlYWRlcicpO1xuICAgIGVkaXRoZWFkZXIudGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgdGFza2hlYWRlcnMuYXBwZW5kQ2hpbGQoZWRpdGhlYWRlcik7XG5cbiAgICByZXR1cm4gdGFza2hlYWRlcnM7XG59XG5cblxuY29uc3QgcHJvamVjdHBhZ2UgPSAocHJvamVjdG5hbWUpID0+IHtcblxuICAgIGxldCBwYWdlY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Vjb250YWluZXInKTtcbiAgICBsZXQgcHJvamVjdHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0cGFnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RwYWdlJyk7XG4gICAgcHJvamVjdHBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qcGFnZSR7cHJvanBhZ2VzYXJyYXkubGVuZ3RofWApO1xuICAgIHBhZ2Vjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHBhZ2UpO1xuICAgIGxldCBwcm9qdGl0bGVsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvanRpdGxlbGluZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2p0aXRsZWxpbmUnKTtcbiAgICBwcm9qZWN0cGFnZS5hcHBlbmRDaGlsZChwcm9qdGl0bGVsaW5lKTtcblxuICAgIGxldCBwcm9qcGFnZXRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvanBhZ2V0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2pwYWdldGl0bGUnKTtcbiAgICBwcm9qcGFnZXRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdG5hbWV9YDtcbiAgICBwcm9qdGl0bGVsaW5lLmFwcGVuZENoaWxkKHByb2pwYWdldGl0bGUpO1xuXG4gICAgbGV0IHByb2plZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVkaXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWRpdCcpO1xuICAgIGxldCBwcm9qZWRpdHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plZGl0cGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVkaXRwaWMnKTtcbiAgICBwcm9qZWRpdHBpYy5zcmMgPSBlZGl0cGljO1xuICAgIHByb2plZGl0LmFwcGVuZENoaWxkKHByb2plZGl0cGljKTtcbiAgICBwcm9qdGl0bGVsaW5lLmFwcGVuZENoaWxkKHByb2plZGl0KTtcblxuICAgIGxldCBlZGl0cHJvamZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0cHJvamZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0cHJvamZvcm0nKTtcbiAgICBwcm9qZWN0cGFnZS5hcHBlbmRDaGlsZChlZGl0cHJvamZvcm0pO1xuXG4gICAgbGV0IGRpdnByb2p0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2cHJvanRhc2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdkaXZwcm9qdGFzaycpO1xuICAgIHByb2plY3RwYWdlLmFwcGVuZENoaWxkKGRpdnByb2p0YXNrKTtcbiAgICBsZXQgcHJvanRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qdGFzay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2p0YXNrJylcbiAgICBwcm9qdGFzay50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XG4gICAgZGl2cHJvanRhc2suYXBwZW5kQ2hpbGQocHJvanRhc2spO1xuXG4gICAgbGV0IHRvZG9wb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9wb3B1cC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG9wb3B1cCcpO1xuICAgIHByb2plY3RwYWdlLmFwcGVuZENoaWxkKHRvZG9wb3B1cCk7XG4gICAgXG4gICAgcHJvamVjdHBhZ2UuYXBwZW5kQ2hpbGQodGFza2hlYWRlcnMoKSk7XG5cbiAgICBsZXQgdGFza3Njb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrc2NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tzY29udGFpbmVyJyk7XG4gICAgcHJvamVjdHBhZ2UuYXBwZW5kQ2hpbGQodGFza3Njb250YWluZXIpO1xuXG4gICAgc3RvcmVwcm9qcGFnZXMocHJvamVjdHBhZ2UuaWQpO1xuXG4gICAgbGV0IHByb2pwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RwYWdlJyk7XG4gICAgXG4gICAgZm9yICh2YXIgeD0wOyB4IDwgKHByb2pwYWdlcy5sZW5ndGggLSAxKTsgKyt4KSB7XG4gICAgICAgIHByb2pwYWdlc1t4XS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHByb2pwYWdlc1t4XS5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICBwcm9qcGFnZXNbeF0uc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgfVxuICAgIFxuICAgIGxldCBwZXJpb2RwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BlcmlvZGNvbnRhaW5lcicpO1xuXG4gICAgZm9yICh2YXIgeD0wOyB4IDwgKHBlcmlvZHBhZ2VzLmxlbmd0aCAtIDEpOyArK3gpIHtcbiAgICAgICAgcGVyaW9kcGFnZXNbeF0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBwZXJpb2RwYWdlc1t4XS5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICBwZXJpb2RwYWdlc1t4XS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICB9XG5cbiAgICBcbiAgICBwcm9qZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmICghZG9jdW1lbnQuZm9ybXNbMF0pIHtcbiAgICAgICAgbGV0IHByb2p0aXRsZSA9IGUuY3VycmVudFRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgcHJvam5hbWUgPSBwcm9qdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgIGVkaXRwcm9qZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybXMoJ2VkaXQnLCBwcm9qbmFtZSkpO1xuICAgIH19KVxuXG4gICAgXG4gICAgcHJvanRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoIWRvY3VtZW50LmZvcm1zWzBdKSB7XG4gICAgICAgIHRvZG9wb3B1cC5hcHBlbmRDaGlsZCh0b0RvRm9ybXMoJ2NyZWF0ZScpKTtcbiAgICB9fSlcbn1cbiAgICBcblxuXG5cbmNvbnN0IHByb2plY3RGb3JtcyA9IChwcm9qZm9ybXR5cGUsIHByb2plY3RuYW1lKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0Zm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgcHJvamVjdGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0Zm9ybScpO1xuICAgICAgICBwcm9qZWN0Zm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0nKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBwcm9qZm9ybXRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2pmb3JtdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZm9ybXRpdGxlJyk7XG4gICAgICAgIGlmIChwcm9qZm9ybXR5cGUgPT0gJ2NyZWF0ZScpIHtcbiAgICAgICAgcHJvamZvcm10aXRsZS50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvamZvcm10eXBlID09ICdlZGl0Jykge1xuICAgICAgICBwcm9qZm9ybXRpdGxlLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdGZvcm0uYXBwZW5kQ2hpbGQocHJvamZvcm10aXRsZSk7XG5cbiAgICAgICAgbGV0IHByb2ppbnB1dGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qaW5wdXRjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qaW5wdXRjb250YWluZXInKTtcbiAgICAgICAgbGV0IHByb2ppbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByb2ppbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBwcm9qaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qaW5wdXQnKTtcbiAgICAgICAgcHJvamlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgICAgIGlmIChwcm9qZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICBwcm9qaW5wdXQuZGVmYXVsdFZhbHVlID0gcHJvamVjdG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByb2psYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByb2psYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qaW5wdXQnKTtcbiAgICAgICAgaWYgKHByb2pmb3JtdHlwZSA9PSAnY3JlYXRlJykge1xuICAgICAgICBwcm9qbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qbGFiZWxjcmVhdGUnKTtcbiAgICAgICAgcHJvamxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZTogJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9qZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgIHByb2psYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2psYWJlbGVkaXQnKTtcbiAgICAgICAgcHJvamxhYmVsLnRleHRDb250ZW50ID0gJ0NoYW5nZSBQcm9qZWN0IE5hbWU6ICc7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamlucHV0Y29udGFpbmVyLmFwcGVuZENoaWxkKHByb2ppbnB1dCk7XG4gICAgICAgIHByb2ppbnB1dGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qbGFiZWwpO1xuICAgICAgICBwcm9qZWN0Zm9ybS5hcHBlbmRDaGlsZChwcm9qaW5wdXRjb250YWluZXIpO1xuXG4gICAgICAgIGxldCBwcm9qZm9ybWJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamZvcm1idG5zLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamZvcm1idG5zJyk7XG4gICAgICAgIHByb2plY3Rmb3JtLmFwcGVuZENoaWxkKHByb2pmb3JtYnRucyk7XG5cbiAgICAgICAgbGV0IHByb2pzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvanN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgIHByb2pzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qc3VibWl0Jyk7XG4gICAgICAgIGlmIChwcm9qZm9ybXR5cGUgPT0gJ2NyZWF0ZScpIHtcbiAgICAgICAgcHJvanN1Ym1pdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvamZvcm10eXBlID09ICdlZGl0Jykge1xuICAgICAgICBwcm9qc3VibWl0LnRleHRDb250ZW50ID0gJ1NhdmUgQ2hhbmdlcyc7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamZvcm1idG5zLmFwcGVuZENoaWxkKHByb2pzdWJtaXQpO1xuXG4gICAgICAgIHByb2pzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHByb2plY3Rmb3JtLnJlcG9ydFZhbGlkaXR5KCkgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKHByb2pmb3JtdHlwZSA9PT0gJ2NyZWF0ZScpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFnZWNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgbGV0IHBhZ2VjaGlsZHMgPSBwYWdlY29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBwYWdlY2hpbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb2plY3RUaWxlKHByb2ppbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdHBhZ2UocHJvamlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Zm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0cG9wdXAucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb2pmb3JtdHlwZSA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2ppZCA9IHByb2plY3Rmb3JtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICBsZXQgbmV3bmFtZSA9IHByb2ppbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Zm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBlZGl0cHJvanRpbGUobmV3bmFtZSwgcHJvamlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgcHJvamNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcm9qY2FuY2VsLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamNhbmNlbCcpO1xuICAgICAgICBwcm9qY2FuY2VsLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgcHJvamNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgICAgICBwcm9qZm9ybWJ0bnMuYXBwZW5kQ2hpbGQocHJvamNhbmNlbCk7XG4gICAgICAgIHByb2pjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZm9ybXR5cGUgPT09ICdjcmVhdGUnKSB7XG4gICAgICAgICAgICBwcm9qZWN0Zm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHByb2plY3Rwb3B1cC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSBpZiAocHJvamZvcm10eXBlID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Zm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIGlmIChwcm9qZm9ybXR5cGUgPT09ICdlZGl0Jykge1xuICAgICAgICBsZXQgcHJvamRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcm9qZGVsZXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgcHJvamRlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2pkZWxldGUnKTtcbiAgICAgICAgcHJvamRlbGV0ZS50ZXh0Q29udGVudCA9ICdEZWxldGUgUHJvamVjdCc7XG4gICAgICAgIHByb2plY3Rmb3JtLmFwcGVuZENoaWxkKHByb2pkZWxldGUpO1xuXG4gICAgICAgIHByb2pkZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRlbGV0ZXByb2p0aWxlKCk7XG4gICAgICAgICAgICBwcm9qZWN0Zm9ybS5yZW1vdmUoKTtcbiAgICAgICAgfSkgXG5cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvamVjdGZvcm07XG59XG5cbmNvbnN0IHNvcnR0b2RvcyA9ICgpID0+IHtcbiAgICBsZXQgcHJvanBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdHBhZ2UnKTtcbiAgICBsZXQgcHJvanRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndG9kb3RpbGUnKTtcbiAgICBmb3IgKGxldCB4PTA7IHggPCAocHJvanBhZ2VzLmxlbmd0aCk7ICsreCkge1xuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qcGFnZSR7eH1gKTtcbiAgICAgICAgbGV0IHByb2plY3RjaGlsZHMgPSBwcm9qZWN0LmNoaWxkTm9kZXM7XG4gICAgICAgIGxldCB0b2RvY2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGB0aWxlb2Zwcm9qJHt4fWApO1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHByb2plY3RjaGlsZHMpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgPT0gJ3Rhc2tzY29udGFpbmVyJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgayA8ICh0b2RvY2xhc3MubGVuZ3RoKTsgKytrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGQuY29udGFpbnModG9kb2NsYXNzW2tdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuYXBwZW5kQ2hpbGQodG9kb2NsYXNzW2tdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jb25zdCBwZXJpb2RwYWdlID0gKHBlcmlvZCkgPT4ge1xuXG4gICAgbGV0IHBhZ2Vjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZWNvbnRhaW5lcicpO1xuICAgIGxldCBwZXJpb2Rjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwZXJpb2Rjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwZXJpb2Rjb250YWluZXInKTtcbiAgICBwYWdlY29udGFpbmVyLmFwcGVuZENoaWxkKHBlcmlvZGNvbnRhaW5lcik7XG5cblxuICAgIGxldCBwZXJpb2R0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBlcmlvZHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGVyaW9kdGl0bGUnKVxuICAgIGlmIChwZXJpb2QgPT0gJ2hvbWUnKSB7XG4gICAgcGVyaW9kY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZXBlcmlvZCcpO1xuICAgIHBlcmlvZHRpdGxlLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIH1cbiAgICBlbHNlIGlmIChwZXJpb2QgPT0gJ3RvZGF5Jykge1xuICAgIHBlcmlvZGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZGF5cGVyaW9kJyk7XG4gICAgcGVyaW9kdGl0bGUudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgIH1cbiAgICBlbHNlIGlmIChwZXJpb2QgPT0gJ3dlZWsnKSB7XG4gICAgcGVyaW9kY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2Vla3BlcmlvZCcpO1xuICAgIHBlcmlvZHRpdGxlLnRleHRDb250ZW50ID0gJ1RoaXMgV2Vlayc7XG4gICAgfVxuXG4gICAgcGVyaW9kY29udGFpbmVyLmFwcGVuZENoaWxkKHBlcmlvZHRpdGxlKTtcblxuICAgIGxldCB0b2RvcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvcG9wdXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvcG9wdXAnKTtcbiAgICBwZXJpb2Rjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb3BvcHVwKTtcblxuICAgIHBlcmlvZGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNraGVhZGVycygpKTtcbiAgICBcbiAgICBsZXQgcGVyaW9kdGFza2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBlcmlvZHRhc2tjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwZXJpb2R0YXNrY29udGFpbmVyJyk7XG4gICAgcGVyaW9kY29udGFpbmVyLmFwcGVuZENoaWxkKHBlcmlvZHRhc2tjb250YWluZXIpO1xuXG5cbiAgICByZXR1cm4gcGVyaW9kY29udGFpbmVyO1xufVxuXG5jb25zdCBzb3J0dGlsZXMgPSAocGVyaW9kKSA9PiB7XG4gICAgY2xlYXJmb3JtcygpO1xuICAgIGxldCB0b2RvdGlsZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG90aWxlJykpO1xuICAgIGxldCB0aWxlZGF0ZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbGVkYXRlJykpO1xuXG5cbiAgICBpZiAocGVyaW9kID09ICdob21lJykge1xuICAgICAgICBsZXQgaG9tZXBlcmlvZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lcGVyaW9kJyk7XG4gICAgICAgIGxldCBob21lY2hpbGRzID0gaG9tZXBlcmlvZC5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGhvbWVjaGlsZHMpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgPT0gJ3BlcmlvZHRhc2tjb250YWluZXInKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4PTA7IHggPCAodG9kb3RpbGVzLmxlbmd0aCk7ICsreCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLmFwcGVuZENoaWxkKHRvZG90aWxlc1t4XSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kb3RpbGVzLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmIChwZXJpb2QgPT0gJ3RvZGF5Jykge1xuICAgICAgICBsZXQgdG9kYXlwZXJpb2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlwZXJpb2QnKTtcbiAgICAgICAgbGV0IHRvZGF5Y2hpbGRzID0gdG9kYXlwZXJpb2QuY2hpbGROb2RlcztcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0b2RheWNoaWxkcykge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTmFtZSA9PSAncGVyaW9kdGFza2NvbnRhaW5lcicpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHg9MDsgeCA8ICh0b2RvdGlsZXMubGVuZ3RoKTsgKyt4KSB7IFxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IHBhcnNlSVNPKHRpbGVkYXRlc1t4XS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RvZGF5KGRhdGUpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmFwcGVuZENoaWxkKHRvZG90aWxlc1t4XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmIChwZXJpb2QgPT0gJ3dlZWsnKSB7XG4gICAgICAgIGxldCB3ZWVrcGVyaW9kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtwZXJpb2QnKTtcbiAgICAgICAgbGV0IHdlZWtjaGlsZHMgPSB3ZWVrcGVyaW9kLmNoaWxkTm9kZXM7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygd2Vla2NoaWxkcykge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTmFtZSA9PSAncGVyaW9kdGFza2NvbnRhaW5lcicpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHg9MDsgeCA8ICh0b2RvdGlsZXMubGVuZ3RoKTsgKyt4KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRlID0gcGFyc2VJU08odGlsZWRhdGVzW3hdLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2FtZVdlZWsoZGF0ZSwgKG5ldyBEYXRlKSkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuYXBwZW5kQ2hpbGQodG9kb3RpbGVzW3hdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxufVxuXG5cbmV4cG9ydCB7cHJvamVjdEZvcm1zLCB0b0RvRm9ybXMsIHRvRG9UaWxlLCBwcm9qZWN0VGlsZSwgcGVyaW9kcGFnZSwgc29ydHRpbGVzLCBzb3J0dG9kb3MsIGxvYWRwcm9qZWN0cywgbG9hZHByb2pwYWdlcywgY2xlYXJmb3JtcywgdXBkdHByb2pkZWx9O1xuXG4iLCJcbmNvbnN0IHRvRG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX1cbn07XG5cbmxldCBteXRvRG9zID0gW107XG5cbmNvbnN0IFB1c2h0b0RvID0gKHRvRG9JdGVtKSA9PiB7XG4gICAgbXl0b0Rvcy5wdXNoKHRvRG9JdGVtKTtcbn1cblxuY29uc3QgdGl0bGVVcGRhdGUgPSAodG9Eb0l0ZW0sIG5ld1RpdGxlKSA9PiB7XG4gICAgdG9Eb0l0ZW0udGl0bGUgPSBuZXdUaXRsZTtcbiAgICByZXR1cm4ge3RvRG9JdGVtfTtcbn1cblxuY29uc3QgZGVzY3JpcHRpb25VcGRhdGUgPSAodG9Eb0l0ZW0sIG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgdG9Eb0l0ZW0uZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICByZXR1cm4ge3RvRG9JdGVtfTtcbn1cblxuY29uc3QgZHVlRGF0ZVVwZGF0ZSA9ICh0b0RvSXRlbSwgbmV3ZHVlRGF0ZSkgPT4ge1xuICAgIHRvRG9JdGVtLmR1ZURhdGUgPSBuZXdkdWVEYXRlO1xuICAgIHJldHVybiB7dG9Eb0l0ZW19O1xufVxuXG5jb25zdCBwcmlvcml0eVVwZGF0ZSA9ICh0b0RvSXRlbSwgbmV3UHJpb3JpdHkpID0+IHtcbiAgICB0b0RvSXRlbS5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIHJldHVybiB7dG9Eb0l0ZW19O1xufVxuXG5jb25zdCBkZWxldGVUb0RvID0gICh0b0RvSXRlbSkgPT4ge1xuICAgIHRvRG9JdGVtID0gbnVsbDtcbiAgICByZXR1cm4ge3RvRG9JdGVtfTtcbn1cblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RBcnJheSA9ICgpID0+IFtdO1xuICAgIHJldHVybiB7dGl0bGUsIHByb2plY3RBcnJheX1cbn1cblxubGV0IG15UHJvamVjdHMgPSBbXTtcblxuY29uc3QgcHVzaFByb2plY3QgPSAocHJvamVjdEl0ZW0pID0+IHtcbiAgICBteVByb2plY3RzLnB1c2gocHJvamVjdEl0ZW0pO1xufVxuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3RJdGVtKSA9PiB7XG4gICAgcHJvamVjdEl0ZW0gPSBudWxsO1xuICAgIHJldHVybiB7cHJvamVjdEl0ZW19XG59XG5cbmNvbnN0IHByb2plY3RUb0RvcyA9IChwcm9qZWN0SXRlbSwgdG9Eb0l0ZW0pID0+IHtcbiAgICBwcm9qZWN0SXRlbS5wdXNoKHRvRG9JdGVtKTtcbn1cblxuZXhwb3J0IHt0b0RvLCBteXRvRG9zLCBQdXNodG9EbywgdGl0bGVVcGRhdGUsIGRlc2NyaXB0aW9uVXBkYXRlLCBkdWVEYXRlVXBkYXRlLCBwcmlvcml0eVVwZGF0ZSwgZGVsZXRlVG9EbywgcHJvamVjdCwgbXlQcm9qZWN0cywgcHVzaFByb2plY3QsIGRlbGV0ZVByb2plY3QsIHByb2plY3RUb0Rvc30iLCJpbXBvcnQge3RvRG8sIG15dG9Eb3MsIFB1c2h0b0RvLCB0aXRsZVVwZGF0ZSwgZGVzY3JpcHRpb25VcGRhdGUsIGR1ZURhdGVVcGRhdGUsIHByaW9yaXR5VXBkYXRlLCBkZWxldGVUb0RvLCBwcm9qZWN0LCBteVByb2plY3RzLCBwdXNoUHJvamVjdCwgZGVsZXRlUHJvamVjdCwgcHJvamVjdFRvRG9zfSBmcm9tICcuL3RvZG9mbnMuanMnO1xuXG5jb25zdCBjcmVhdGVwcm9qdGlsZSA9IChwcm9qbmFtZSkgPT4ge1xuICAgIGxldCBuZXdwcm9qZWN0ID0gKCkgPT4gcHJvamVjdChwcm9qbmFtZSk7XG4gICAgcHVzaFByb2plY3QocHJvam5hbWUpO1xuICAgIGxldCBwcm9qZWN0SUQgPSAoKSA9PiBgcHJvamVjdCR7bXlQcm9qZWN0cy5sZW5ndGgtMX1gO1xuICAgIHJldHVybiB7bmV3cHJvamVjdCwgcHJvamVjdElEfTtcbn07XG5cbmNvbnN0IHByb2pwYWdlSUQgPSAoKSA9PiB7XG4gICAgbGV0IHBhZ2VJRCA9ICgpID0+IGBwcm9qcGFnZSR7bXlQcm9qZWN0cy5sZW5ndGgtMX1gO1xuICAgIHJldHVybiB7cGFnZUlEfVxufSBcblxuY29uc3QgZGVsZXRlcHJvaiA9IChwcm9qbnVtKSA9PiB7XG4gICAgbGV0IHByb2plY3RJdGVtID0gbXlQcm9qZWN0c1twcm9qbnVtXTtcbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3RJdGVtKTtcbn1cblxuZXhwb3J0IHtjcmVhdGVwcm9qdGlsZSwgcHJvanBhZ2VJRCwgZGVsZXRlcHJvan07XG5cblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbG9nbyBmcm9tICcuL2NsaXBib2FyZC10ZXh0LW11bHRpcGxlLW91dGxpbmUuc3ZnJztcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuL2FwcHMuc3ZnJztcbmltcG9ydCB0b2RheXBpYyBmcm9tICcuL2NhbGVuZGFyLXRvZGF5LnN2Zyc7XG5pbXBvcnQgd2Vla3BpYyBmcm9tICcuL2NhbGVuZGFyLXdlZWsuc3ZnJztcbmltcG9ydCBob21lcGljIGZyb20gJy4vaG9tZS5zdmcnO1xuaW1wb3J0IGFkZHBpYyBmcm9tICcuL3BsdXMtY2lyY2xlLW91dGxpbmUuc3ZnJztcbmltcG9ydCB0aGVtZXBpYyBmcm9tICcuL3RoZW1lLWxpZ2h0LWRhcmsuc3ZnJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQge3Byb2plY3RGb3JtcywgdG9Eb0Zvcm1zLCB0b0RvVGlsZSwgcHJvamVjdFRpbGUsIHBlcmlvZHBhZ2UsIHNvcnR0aWxlcywgc29ydHRvZG9zLCBsb2FkcHJvamVjdHMsIGxvYWRwcm9qcGFnZXMsIGNsZWFyZm9ybXMsIHVwZHRwcm9qZGVsfSBmcm9tICcuL3RvZG9kb21zLmpzJztcbmltcG9ydCB7dG9EbywgbXl0b0RvcywgUHVzaHRvRG8sIHRpdGxlVXBkYXRlLCBkZXNjcmlwdGlvblVwZGF0ZSwgZHVlRGF0ZVVwZGF0ZSwgcHJpb3JpdHlVcGRhdGUsIGRlbGV0ZVRvRG8sIHByb2plY3QsIG15UHJvamVjdHMsIHB1c2hQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBwcm9qZWN0VG9Eb3N9IGZyb20gJy4vdG9kb2Zucy5qcyc7XG5pbXBvcnQge2NyZWF0ZXByb2p0aWxlfSBmcm9tICcuL3RvZG9pbnRlcmZhY2Vycy5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcblxuICAgIGNvbnN0IHRpdGxlQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUJsb2NrLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGVCbG9jaycpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGVCbG9jayk7XG5cbiAgICBjb25zdCBwYWdlY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZWNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BhZ2Vjb250YWluZXInKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHBhZ2Vjb250YWluZXIpOyBcblxuICAgIGNvbnN0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51VG9nZ2xlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudVRvZ2dsZScpO1xuICAgIGNvbnN0IG1lbnVUb2dnbGVQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtZW51VG9nZ2xlUGljLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudVRvZ2dsZVBpYycpO1xuICAgIG1lbnVUb2dnbGVQaWMuc3JjID0gc2V0dGluZ3M7XG4gICAgbWVudVRvZ2dsZS5hcHBlbmRDaGlsZChtZW51VG9nZ2xlUGljKTtcbiAgICB0aXRsZUJsb2NrLmFwcGVuZENoaWxkKG1lbnVUb2dnbGUpO1xuXG4gICAgbWVudVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKG1lbnUuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIG1lbnUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgcGFnZWNvbnRhaW5lci5zdHlsZS5ncmlkQ29sdW1uID0gJzEvMyc7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChtZW51LnN0eWxlLnZpc2liaWxpdHkgPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIG1lbnUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIHBhZ2Vjb250YWluZXIuc3R5bGUuZ3JpZENvbHVtbiA9ICcyLzMnO1xuICAgICAgICB9XG4gICAgIH0pXG5cblxuICAgIGNvbnN0IHRpdGxlTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlTWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlTWFpbicpO1xuICAgIGNvbnN0IHRpdGxlUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGl0bGVQaWMuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZVBpYycpO1xuICAgIHRpdGxlUGljLnNyYyA9IGxvZ287XG4gICAgdGl0bGVNYWluLmFwcGVuZENoaWxkKHRpdGxlUGljKTtcbiAgICB0aXRsZUJsb2NrLmFwcGVuZENoaWxkKHRpdGxlTWFpbik7XG5cbiAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZVRleHQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZVRleHQnKTtcbiAgICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSAnVG8tRG8gTGlzdCc7XG4gICAgdGl0bGVNYWluLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG4gICAgXG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgY29uc3QgcGVyaW9kTGlzdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwZXJpb2RMaXN0cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BlcmlvZExpc3RzJyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChwZXJpb2RMaXN0cyk7XG5cbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTtcbiAgICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnXG4gICAgcGVyaW9kTGlzdHMuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgY29uc3QgaG9tZVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhvbWVQaWMuc2V0QXR0cmlidXRlKCdpZCcsICdob21lUGljJylcbiAgICBob21lUGljLnNyYyA9IGhvbWVwaWM7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lUGljKTtcblxuXG4gICAgbGV0IGhvbWVjb3VudGVyID0gMDtcbiAgICBsZXQgdG9kYXljb3VudGVyID0gMDtcbiAgICBsZXQgd2Vla2NvdW50ZXIgPSAwO1xuXG5cblxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBsZXQgZGVzY3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZXNjZXhwYW5kJyk7XG4gICAgICAgIGlmIChkZXNjcy5sZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZGVzYyBvZiBkZXNjcykge1xuICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgICAgICAgICBkZXNjLnN0eWxlLmhlaWdodCA9ICcwcHg7J1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGhvbWVjb3VudGVyICs9IDE7XG5cbiAgICAgICAgaWYgKGhvbWVjb3VudGVyID09IDEpIHtcbiAgICAgICAgcGFnZWNvbnRhaW5lci5hcHBlbmRDaGlsZChwZXJpb2RwYWdlKCdob21lJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAoaG9tZWNvdW50ZXIgPiAxKSB7XG4gICAgICAgICAgICBzb3J0dG9kb3MoKTtcbiAgICAgICAgICAgIGxldCBob21lcGVyaW9kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVwZXJpb2QnKTtcbiAgICAgICAgICAgIGhvbWVwZXJpb2Quc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIGhvbWVwZXJpb2Quc3R5bGUud2lkdGggPSBwYWdlY29udGFpbmVyLnN0eWxlLndpZHRoO1xuICAgICAgICAgICAgaG9tZXBlcmlvZC5zdHlsZS5oZWlnaHQgPSAnZml0LWNvbnRlbnQnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhZ2VjaGlsZHMgPSBwYWdlY29udGFpbmVyLmNoaWxkTm9kZXM7IFxuXG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgcGFnZWNoaWxkcykge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmlkICE9PSAnaG9tZXBlcmlvZCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNvcnR0aWxlcygnaG9tZScpXG4gICAgfSlcblxuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kYXkuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RheScpO1xuICAgIHRvZGF5LnRleHRDb250ZW50ID0gJ1RvZGF5J1xuICAgIHBlcmlvZExpc3RzLmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgICBjb25zdCB0b2RheVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRvZGF5UGljLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kYXlQaWMnKVxuICAgIHRvZGF5UGljLnNyYyA9IHRvZGF5cGljO1xuICAgIHRvZGF5LmFwcGVuZENoaWxkKHRvZGF5UGljKTtcblxuICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbGV0IGRlc2NzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVzY2V4cGFuZCcpO1xuICAgICAgICBpZiAoZGVzY3MubGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRlc2Mgb2YgZGVzY3MpIHtcbiAgICAgICAgICAgICAgICBkZXNjLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBkZXNjLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS5oZWlnaHQgPSAnMHB4OydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0b2RheWNvdW50ZXIgKz0gMTtcblxuICAgICAgICBpZiAodG9kYXljb3VudGVyID09IDEpIHtcbiAgICAgICAgICAgIHBhZ2Vjb250YWluZXIuYXBwZW5kQ2hpbGQocGVyaW9kcGFnZSgndG9kYXknKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKHRvZGF5Y291bnRlciA+IDEpIHtcbiAgICAgICAgICAgIHNvcnR0b2RvcygpO1xuICAgICAgICAgICAgbGV0IHRvZGF5cGVyaW9kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5cGVyaW9kJyk7XG4gICAgICAgICAgICB0b2RheXBlcmlvZC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgdG9kYXlwZXJpb2Quc3R5bGUud2lkdGggPSBwYWdlY29udGFpbmVyLnN0eWxlLndpZHRoO1xuICAgICAgICAgICAgdG9kYXlwZXJpb2Quc3R5bGUuaGVpZ2h0ID0gJ2ZpdC1jb250ZW50JztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYWdlY2hpbGRzID0gcGFnZWNvbnRhaW5lci5jaGlsZE5vZGVzOyBcblxuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHBhZ2VjaGlsZHMpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5pZCAhPT0gJ3RvZGF5cGVyaW9kJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc29ydHRpbGVzKCd0b2RheScpO1xuICAgIH0pXG5cbiAgICBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXNXZWVrLnNldEF0dHJpYnV0ZSgnaWQnLCAndGhpc1dlZWsnKTtcbiAgICB0aGlzV2Vlay50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnXG4gICAgcGVyaW9kTGlzdHMuYXBwZW5kQ2hpbGQodGhpc1dlZWspO1xuICAgIGNvbnN0IHRoaXNXZWVrUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGhpc1dlZWtQaWMuc2V0QXR0cmlidXRlKCdpZCcsICd0aGlzV2Vla1BpYycpXG4gICAgdGhpc1dlZWtQaWMuc3JjID0gd2Vla3BpYztcbiAgICB0aGlzV2Vlay5hcHBlbmRDaGlsZCh0aGlzV2Vla1BpYyk7XG5cbiAgICB0aGlzV2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGxldCBkZXNjcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rlc2NleHBhbmQnKTtcbiAgICAgICAgaWYgKGRlc2NzLmxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBkZXNjIG9mIGRlc2NzKSB7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUuaGVpZ2h0ID0gJzBweDsnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3ZWVrY291bnRlciArPSAxO1xuXG4gICAgICAgIGlmICh3ZWVrY291bnRlciA9PSAxKSB7XG4gICAgICAgICAgICBwYWdlY29udGFpbmVyLmFwcGVuZENoaWxkKHBlcmlvZHBhZ2UoJ3dlZWsnKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKHdlZWtjb3VudGVyID4gMSkge1xuICAgICAgICAgICAgc29ydHRvZG9zKCk7XG4gICAgICAgICAgICBsZXQgd2Vla3BlcmlvZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrcGVyaW9kJyk7XG4gICAgICAgICAgICB3ZWVrcGVyaW9kLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICB3ZWVrcGVyaW9kLnN0eWxlLndpZHRoID0gcGFnZWNvbnRhaW5lci5zdHlsZS53aWR0aDtcbiAgICAgICAgICAgIHdlZWtwZXJpb2Quc3R5bGUuaGVpZ2h0ID0gJ2ZpdC1jb250ZW50JztcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IHBhZ2VjaGlsZHMgPSBwYWdlY29udGFpbmVyLmNoaWxkTm9kZXM7IFxuXG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgcGFnZWNoaWxkcykge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmlkICE9PSAnd2Vla3BlcmlvZCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNvcnR0aWxlcygnd2VlaycpO1xuICAgIH0pXG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TGlzdHMuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0TGlzdHMnKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHByb2plY3RMaXN0cyk7XG5cbiAgICBjb25zdCBwcm9qTGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvakxpc3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2pMaXN0VGl0bGUnKTtcbiAgICBwcm9qZWN0TGlzdHMuYXBwZW5kQ2hpbGQocHJvakxpc3RUaXRsZSk7XG5cbiAgICBjb25zdCBwcm9qTGlzdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qTGlzdFRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qTGlzdFRleHQnKTtcbiAgICBwcm9qTGlzdFRleHQudGV4dENvbnRlbnQgPSAnUHJvamVjdHM6ICc7XG4gICAgcHJvakxpc3RUaXRsZS5hcHBlbmRDaGlsZChwcm9qTGlzdFRleHQpO1xuXG5cbiAgICBjb25zdCBwcm9qQWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvakFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2pBZGRCdXR0b24nKTtcbiAgICBwcm9qTGlzdFRpdGxlLmFwcGVuZENoaWxkKHByb2pBZGRCdXR0b24pO1xuICAgIGNvbnN0IHByb2pBZGRCdXR0b25QaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcm9qQWRkQnV0dG9uUGljLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvakFkZEJ1dHRvblBpYycpO1xuICAgIHByb2pBZGRCdXR0b25QaWMuc3JjID0gYWRkcGljO1xuICAgIHByb2pBZGRCdXR0b24uYXBwZW5kQ2hpbGQocHJvakFkZEJ1dHRvblBpYyk7XG5cbiAgICBjb25zdCBwcm9qZWN0Zm9ybWNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3Rmb3JtY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdGZvcm1jb250YWluZXInKTtcbiAgICBwcm9qZWN0TGlzdHMuYXBwZW5kQ2hpbGQocHJvamVjdGZvcm1jb250YWluZXIpO1xuXG4gICAgY29uc3QgcHJvalRpbGVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvalRpbGVMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvalRpbGVMaXN0Jyk7XG4gICAgcHJvamVjdExpc3RzLmFwcGVuZENoaWxkKHByb2pUaWxlTGlzdCk7XG5cbiAgICBwcm9qQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0cG9wdXA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0cG9wdXAuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0cG9wdXAnKTtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5mb3Jtc1swXSkge1xuICAgICAgICBwcm9qZWN0cG9wdXAuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1zKCdjcmVhdGUnLCAnJykpO1xuICAgICAgICBwcm9qZWN0Zm9ybWNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0cG9wdXApO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGUpID0+IHtcbiAgICAgICAgbG9hZHByb2plY3RzKCk7XG4gICAgICAgIGxvYWRwcm9qcGFnZXMoKTtcbiAgICAgICAgaWYgKHByb2pUaWxlTGlzdC5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHsgIFxuICAgICAgICAgICAgbGV0IGRlc2NzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVzY2V4cGFuZCcpO1xuICAgICAgICBpZiAoZGVzY3MubGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRlc2Mgb2YgZGVzY3MpIHtcbiAgICAgICAgICAgICAgICBkZXNjLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBkZXNjLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS5oZWlnaHQgPSAnMHB4OydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgbGV0IHRpbGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdHRpbGUnKTtcbiAgICAgICAgY29uc29sZS5sb2codGlsZXMubGVuZ3RoKTtcbiAgICAgICAgZm9yIChjb25zdCB0aWxlIG9mIHRpbGVzKSB7XG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGVzY3MubGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZGVzYyBvZiBkZXNjcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjLnN0eWxlLmhlaWdodCA9ICcwcHg7J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBzb3J0dG9kb3MoKTtcbiAgICAgICAgICAgICAgICBjbGVhcmZvcm1zKCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhZ2Vjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIGxldCBwYWdlbm9kZXMgPSBwYWdlY29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHBhZ2Vub2Rlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5zdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB0aWxlaWQgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZWlkbnVtID0gdGlsZWlkLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvanBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvanBhZ2Uke3RpbGVpZG51bX1gKTtcbiAgICAgICAgICAgICAgICBwcm9qcGFnZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgIHByb2pwYWdlLnN0eWxlLndpZHRoID0gcGFnZWNvbnRhaW5lci5zdHlsZS53aWR0aFxuICAgICAgICAgICAgICAgIHByb2pwYWdlLnN0eWxlLmhlaWdodCA9ICdmaXQtY29udGVudCc7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tjb250ID0gcHJvanBhZ2UucXVlcnlTZWxlY3RvcignLnRhc2tzY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgbGV0IHByb2pwYWdldGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGB0aWxlb2Zwcm9qJHt0aWxlaWRudW19YCk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2pwYWdldGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXNrY29udC5jb250YWlucyh0YXNrKSl7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tjb250LmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBwYWdlY2hpbGRub2RlcyA9IHBhZ2Vjb250YWluZXIuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgcGFnZWNoaWxkbm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0cGFnZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZWNoaWxkcmVuID0gbm9kZS5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2p0aXRsZWxpbmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGVsaW5lY2hpbGRyZW4gPSBjaGlsZC5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHRpdGxlY2hpbGQgb2YgdGl0bGVsaW5lY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aXRsZWNoaWxkLmNsYXNzTGlzdC5jb250YWlucygncHJvamVkaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LmZvcm1zWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9qdGl0bGUgPSBlLmN1cnJlbnRUYXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2puYW1lID0gcHJvanRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdHByb2pmb3JtID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRwcm9qZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybXMoJ2VkaXQnLCBwcm9qbmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2RpdnByb2p0YXNrJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvanRhc2sgPSBjaGlsZC5xdWVyeVNlbGVjdG9yKCcucHJvanRhc2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZG9jdW1lbnQuZm9ybXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2RvcG9wdXAgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb3BvcHVwLmFwcGVuZENoaWxkKHRvRG9Gb3JtcygnY3JlYXRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgfX0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCBlZGl0YnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXRidXR0b24nKTtcbiAgICAgICAgZm9yIChjb25zdCBidG4gb2YgZWRpdGJ1dHRvbnMpIHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnZWRpdGJ1dHRvbnBpYycpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9kb3RpbGVpZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkO1xuICAgICAgICAgICAgICAgIGxldCB0b2RvY2hpbGRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb3RpbGVpZCkuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3Ryb3cgPSB0b2RvY2hpbGRzWzBdO1xuICAgICAgICAgICAgICAgIGxldCBmaXJzdHJvd2NoaWxkcyA9IGZpcnN0cm93LmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGVuYW1lID0gZmlyc3Ryb3djaGlsZHNbMV07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGlsZW5hbWUpO1xuICAgICAgICAgICAgICAgIGxldCB0aWxlZGF0ZSA9IGZpcnN0cm93Y2hpbGRzWzNdO1xuICAgICAgICAgICAgICAgIGxldCB0aWxlcHJpbyA9IGZpcnN0cm93Y2hpbGRzWzRdO1xuICAgICAgICAgICAgICAgIGxldCBkZXNjZXhwYW5kID0gdG9kb2NoaWxkc1sxXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdG9kb3BvcHVwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9wb3B1cCcpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcG9wdXAgb2YgdG9kb3BvcHVwcykge1xuICAgICAgICAgICAgICAgIGlmIChwb3B1cC5wYXJlbnRFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5mb3Jtc1swXSkge1xuICAgICAgICAgICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHRvRG9Gb3JtcygnZWRpdCcsIHRpbGVuYW1lLnRleHRDb250ZW50LCBkZXNjZXhwYW5kLnRleHRDb250ZW50LCB0aWxlZGF0ZS50ZXh0Q29udGVudCwgdGlsZXByaW8udGV4dENvbnRlbnQsIHRvZG90aWxlaWQpKTtcbiAgICAgICAgICAgIH19fX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09ICdlZGl0YnV0dG9uJykge1xuICAgICAgICAgICAgICAgIGxldCB0b2RvdGlsZWlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkO1xuICAgICAgICAgICAgICAgIGxldCB0b2RvY2hpbGRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb3RpbGVpZCkuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3Ryb3cgPSB0b2RvY2hpbGRzWzBdO1xuICAgICAgICAgICAgICAgIGxldCBmaXJzdHJvd2NoaWxkcyA9IGZpcnN0cm93LmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGVuYW1lID0gZmlyc3Ryb3djaGlsZHNbMV07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGlsZW5hbWUpO1xuICAgICAgICAgICAgICAgIGxldCB0aWxlZGF0ZSA9IGZpcnN0cm93Y2hpbGRzWzNdO1xuICAgICAgICAgICAgICAgIGxldCB0aWxlcHJpbyA9IGZpcnN0cm93Y2hpbGRzWzRdO1xuICAgICAgICAgICAgICAgIGxldCBkZXNjZXhwYW5kID0gdG9kb2NoaWxkc1sxXTtcbiAgICAgICAgICAgICAgICBsZXQgdG9kb3BvcHVwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9wb3B1cCcpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcG9wdXAgb2YgdG9kb3BvcHVwcykge1xuICAgICAgICAgICAgICAgIGlmIChwb3B1cC5wYXJlbnRFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5mb3Jtc1swXSkge1xuICAgICAgICAgICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHRvRG9Gb3JtcygnZWRpdCcsIHRpbGVuYW1lLnRleHRDb250ZW50LCBkZXNjZXhwYW5kLnRleHRDb250ZW50LCB0aWxlZGF0ZS50ZXh0Q29udGVudCwgdGlsZXByaW8udGV4dENvbnRlbnQsIHRvZG90aWxlaWQpKTtcbiAgICAgICAgICAgIH19fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaGVja2JveCcpO1xuICAgICAgICBmb3IgKGNvbnN0IGJveCBvZiBjaGVja2JveGVzKSB7XG4gICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChib3guY2hlY2tlZCA9PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb3RpbGVjb250YWluZXIgPSBib3gucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3Ryb3cgPSBib3gucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0Y2hpbGRzID0gZmlyc3Ryb3cuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbGVkZXNjYnV0dG9uID0gZmlyc3RjaGlsZHNbMl07XG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0YnV0dG9uID0gZmlyc3RjaGlsZHNbNV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWxldGVidXR0b24gPSBmaXJzdGNoaWxkc1s2XTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb3RpbGVjb250YWluZXIuc3R5bGUuY29sb3IgPSAncmdiYSgyMTEsMjExLDIxMSwwLjUpJztcbiAgICAgICAgICAgICAgICAgICAgdGlsZWRlc2NidXR0b24uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgICAgICAgICAgICAgICAgICBlZGl0YnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYm94LmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG90aWxlY29udGFpbmVyID0gYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0cm93ID0gYm94LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdGNoaWxkcyA9IGZpcnN0cm93LmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0aWxlZGVzY2J1dHRvbiA9IGZpcnN0Y2hpbGRzWzJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdGJ1dHRvbiA9IGZpcnN0Y2hpbGRzWzVdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVsZXRlYnV0dG9uID0gZmlyc3RjaGlsZHNbNl07XG4gICAgICAgICAgICAgICAgICAgIHRvZG90aWxlY29udGFpbmVyLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgICAgICAgICAgdGlsZWRlc2NidXR0b24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgICAgICAgZWRpdGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVidXR0b24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdXBkdHByb2pkZWwoKTtcblxuICAgICAgICBsZXQgZGVzY2J1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aWxlZGVzY2J1dHRvbicpO1xuICAgICAgICBmb3IgKGNvbnN0IGJ0biBvZiBkZXNjYnV0dG9ucykge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHBhcmVudGRlc2MgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGxldCBkZXNjZXhwYW5kID0gcGFyZW50ZGVzYy5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICBpZiAoZGVzY2V4cGFuZC5zdHlsZS52aXNpYmlsaXR5ID09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICBkZXNjZXhwYW5kLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICBkZXNjZXhwYW5kLnN0eWxlLndpZHRoID0gcGFyZW50ZGVzYy5zdHlsZS53aWR0aDtcbiAgICAgICAgICAgIGRlc2NleHBhbmQuc3R5bGUuaGVpZ2h0ID0gJ2ZpdC1jb250ZW50JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRlc2NleHBhbmQuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgICAgICBkZXNjZXhwYW5kLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBkZXNjZXhwYW5kLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBcblxuICAgIHJldHVybiBtYWluO1xuICAgIFxufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9