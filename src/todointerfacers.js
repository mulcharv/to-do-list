import {toDo, mytoDos, PushtoDo, titleUpdate, descriptionUpdate, dueDateUpdate, priorityUpdate, deleteToDo, project, myProjects, pushProject, deleteProject, projectToDos} from './todofns.js';

const createprojtile = (projname) => {
    let newproject = () => project(projname);
    pushProject(projname);
    let projectID = () => `project${myProjects.length-1}`;
    return {newproject, projectID};
};

const projpageID = () => {
    let pageID = () => `projpage${myProjects.length-1}`;
    return {pageID}
} 

const deleteproj = (projnum) => {
    let projectItem = myProjects[projnum];
    deleteProject(projectItem);
}

export {createprojtile, projpageID, deleteproj};





