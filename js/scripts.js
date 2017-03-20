var drawings = document.querySelectorAll(".rysunek");
var projects = document.querySelectorAll(".projekt");
var btnAll = document.getElementById("allItems");
var btnProjects = document.getElementById("projects");
var btnDrawings = document.getElementById("drawings");

function removeDrawings() {
    var i;
    for (i = 0; i < drawings.length; i++) {
    drawings[i].style.display = "none";
    };
};
function showDrawings(){
    var i;
    for (i = 0; i < drawings.length; i++) {
    drawings[i].style.display = "block";
    };
};
function removeProjects() {
    var i;
    for (i = 0; i < projects.length; i++) {
    projects[i].style.display = "none";
    };
};
function showProjects() {
    var i;
    for (i = 0; i < projects.length; i++) {
    projects[i].style.display = "block";
    };
};
function showAll() {
    removeDrawings();
    removeProjects();
    showProjects();
    showDrawings();
}

btnProjects.addEventListener("click", function(){
    removeDrawings();
    removeProjects();
    showProjects();
    if (window.matchMedia('only screen and (max-width: 767px)').matches) {
    closeMenu()};
});
btnDrawings.addEventListener("click", function(){
    removeDrawings();
    removeProjects();
    showDrawings();
    if (window.matchMedia('only screen and (max-width: 767px)').matches) {
    closeMenu()};
});
btnAll.addEventListener("click", function() {
    showAll();
    if (window.matchMedia('only screen and (max-width: 767px)').matches) {
    closeMenu()};
});

var menu = document.getElementById("menu");
var opener = document.getElementById("opener");
var closer = document.getElementById("closer");
var title = document.getElementById("title");

function openMenu() {
    menu.style.width = "320px";
    menu.style.display = "block";
    title.style.display = "none";
}
function closeMenu() {
    menu.style.width = "0";
    menu.style.display = "none";
    title.style.display = "block";
}

opener.addEventListener("click", openMenu);
closer.addEventListener("click", closeMenu);