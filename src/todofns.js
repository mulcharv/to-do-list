
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

const PushProject = (projectItem) => {
    myProjects.push(projectItem);
}

const deleteProject = (projectItem) => {
    projectItem = null;
    return {projectItem}
}

const projectToDos = (projectItem, toDoItem) => {
    projectItem.push(toDoItem);
}
