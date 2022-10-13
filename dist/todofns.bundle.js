/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/todofns.js ***!
  \************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2Zucy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9mbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmNvbnN0IHRvRG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX1cbn07XG5cbmxldCBteXRvRG9zID0gW107XG5cbmNvbnN0IFB1c2h0b0RvID0gKHRvRG9JdGVtKSA9PiB7XG4gICAgbXl0b0Rvcy5wdXNoKHRvRG9JdGVtKTtcbn1cblxuY29uc3QgdGl0bGVVcGRhdGUgPSAodG9Eb0l0ZW0sIG5ld1RpdGxlKSA9PiB7XG4gICAgdG9Eb0l0ZW0udGl0bGUgPSBuZXdUaXRsZTtcbiAgICByZXR1cm4ge3RvRG9JdGVtfTtcbn1cblxuY29uc3QgZGVzY3JpcHRpb25VcGRhdGUgPSAodG9Eb0l0ZW0sIG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgdG9Eb0l0ZW0uZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICByZXR1cm4ge3RvRG9JdGVtfTtcbn1cblxuY29uc3QgZHVlRGF0ZVVwZGF0ZSA9ICh0b0RvSXRlbSwgbmV3ZHVlRGF0ZSkgPT4ge1xuICAgIHRvRG9JdGVtLmR1ZURhdGUgPSBuZXdkdWVEYXRlO1xuICAgIHJldHVybiB7dG9Eb0l0ZW19O1xufVxuXG5jb25zdCBwcmlvcml0eVVwZGF0ZSA9ICh0b0RvSXRlbSwgbmV3UHJpb3JpdHkpID0+IHtcbiAgICB0b0RvSXRlbS5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIHJldHVybiB7dG9Eb0l0ZW19O1xufVxuXG5jb25zdCBkZWxldGVUb0RvID0gICh0b0RvSXRlbSkgPT4ge1xuICAgIHRvRG9JdGVtID0gbnVsbDtcbiAgICByZXR1cm4ge3RvRG9JdGVtfTtcbn1cblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RBcnJheSA9ICgpID0+IFtdO1xuICAgIHJldHVybiB7dGl0bGUsIHByb2plY3RBcnJheX1cbn1cblxubGV0IG15UHJvamVjdHMgPSBbXTtcblxuY29uc3QgcHVzaFByb2plY3QgPSAocHJvamVjdEl0ZW0pID0+IHtcbiAgICBteVByb2plY3RzLnB1c2gocHJvamVjdEl0ZW0pO1xufVxuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3RJdGVtKSA9PiB7XG4gICAgcHJvamVjdEl0ZW0gPSBudWxsO1xuICAgIHJldHVybiB7cHJvamVjdEl0ZW19XG59XG5cbmNvbnN0IHByb2plY3RUb0RvcyA9IChwcm9qZWN0SXRlbSwgdG9Eb0l0ZW0pID0+IHtcbiAgICBwcm9qZWN0SXRlbS5wdXNoKHRvRG9JdGVtKTtcbn1cblxuZXhwb3J0IHt0b0RvLCBteXRvRG9zLCBQdXNodG9EbywgdGl0bGVVcGRhdGUsIGRlc2NyaXB0aW9uVXBkYXRlLCBkdWVEYXRlVXBkYXRlLCBwcmlvcml0eVVwZGF0ZSwgZGVsZXRlVG9EbywgcHJvamVjdCwgbXlQcm9qZWN0cywgcHVzaFByb2plY3QsIGRlbGV0ZVByb2plY3QsIHByb2plY3RUb0Rvc30iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=