///////////////////////////////////////////HAMBURBER MENU////////////////////////////////////////////////////////
const mainMenu = document.querySelector('.mainMenu')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')
const navBar = document.querySelector('nav')


document.querySelector('.openMenu').addEventListener('click', show);
document.querySelector('.closeMenu').addEventListener('click', close);

function show(){
    navBar.style.flexDirection = 'column'
    mainMenu.style.display = 'flex';
    openMenu.style.display = 'none';
    document.querySelector('.firstli').addEventListener('click', close);
    document.querySelector('.secondli').addEventListener('click', close);
}
function close(){
    navBar.style.flexDirection = 'row'
    mainMenu.style.display = "none";
    openMenu.style.display = "flex";
}