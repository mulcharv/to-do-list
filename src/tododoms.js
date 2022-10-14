import {createprojtile, projpageID, deleteproj} from './todointerfacers.js';
import editpic from './pencil-outline.svg';
import deletepic from './delete.svg';
import isToday from 'date-fns/isToday';
import isSameWeek from 'date-fns/isSameWeek';
import parseISO from 'date-fns/parseISO';

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
    editbuttonpic.src = editpic;
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
    deletebuttonpic.src = deletepic;
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
            deleteproj(pageidnum);
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
    projeditpic.src = editpic;
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
                    let date = parseISO(tiledates[x].textContent);
                    if (isToday(date) == true) {
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
                    let date = parseISO(tiledates[x].textContent);
                    if (isSameWeek(date, (new Date)) == true) {
                        child.appendChild(todotiles[x])
                    }
                }
        }
    }
}
}


export {projectForms, toDoForms, toDoTile, projectTile, periodpage, sorttiles, sorttodos, loadprojects, loadprojpages, clearforms, updtprojdel};

