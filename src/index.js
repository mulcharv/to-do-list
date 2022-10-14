import logo from './clipboard-text-multiple-outline.svg';
import settings from './apps.svg';
import todaypic from './calendar-today.svg';
import weekpic from './calendar-week.svg';
import homepic from './home.svg';
import addpic from './plus-circle-outline.svg';
import themepic from './theme-light-dark.svg';
import './style.css';

import {projectForms, toDoForms, toDoTile, projectTile, periodpage, sorttiles, sorttodos, loadprojects, loadprojpages, clearforms} from './tododoms.js';
import {toDo, mytoDos, PushtoDo, titleUpdate, descriptionUpdate, dueDateUpdate, priorityUpdate, deleteToDo, project, myProjects, pushProject, deleteProject, projectToDos} from './todofns.js';
import {createprojtile} from './todointerfacers.js';

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
    menuTogglePic.src = settings;
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
    titlePic.src = logo;
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
    homePic.src = homepic;
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
        pagecontainer.appendChild(periodpage('home'));
        }

        else if (homecounter > 1) {
            sorttodos();
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

        sorttiles('home')
    })

    const today = document.createElement('button');
    today.setAttribute('id', 'today');
    today.textContent = 'Today'
    periodLists.appendChild(today);
    const todayPic = document.createElement('img');
    todayPic.setAttribute('id', 'todayPic')
    todayPic.src = todaypic;
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
            pagecontainer.appendChild(periodpage('today'))
        }

        else if (todaycounter > 1) {
            sorttodos();
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

        sorttiles('today');
    })

    const thisWeek = document.createElement('button');
    thisWeek.setAttribute('id', 'thisWeek');
    thisWeek.textContent = 'This Week'
    periodLists.appendChild(thisWeek);
    const thisWeekPic = document.createElement('img');
    thisWeekPic.setAttribute('id', 'thisWeekPic')
    thisWeekPic.src = weekpic;
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
            pagecontainer.appendChild(periodpage('week'))
        }

        else if (weekcounter > 1) {
            sorttodos();
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

        sorttiles('week');
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
    projAddButtonPic.src = addpic;
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
        projectpopup.appendChild(projectForms('create', ''));
        projectformcontainer.appendChild(projectpopup);
        }
    })

    
    window.addEventListener('load', (e) => {
        loadprojects();
        loadprojpages();
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
                sorttodos();
                clearforms();
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
                                            editprojform.appendChild(projectForms('edit', projname));
                                        }})
                                    }                               
                            }
                        }
                        else if (child.classList.contains('divprojtask')) {
                            let projtask = child.querySelector('.projtask');
                            projtask.addEventListener('click', (e) => {
                                if (!document.forms[0]) {
                                    let todopopup = child.nextSibling;
                                todopopup.appendChild(toDoForms('create'));
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
                popup.appendChild(toDoForms('edit', tilename.textContent, descexpand.textContent, tiledate.textContent, tileprio.textContent, todotileid));
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
                popup.appendChild(toDoForms('edit', tilename.textContent, descexpand.textContent, tiledate.textContent, tileprio.textContent, todotileid));
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

