// Eventos que ocurren con el Mouse

const nav = document.querySelector('.navegacion');

// Registrar un evento
nav.addEventListener('click', () =>{
    console.log("Has hecho click en navegación");
})

nav.addEventListener('mouseenter', () =>{
    console.log('Has puesto el mouse o cursor en navegación');
    nav.style.backgroundColor = 'white';
})

nav.addEventListener('mouseout', () =>{
    console.log("Has quitado tu mouse o cursor de navegación");
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('dblclick', () =>{
    console.log("Has dado doble click en navegación");
    nav.style.backgroundColor = 'transparent';
})

//mousedown = similar a un click
// click = cuando das click
// dblclick = doble click
// mouseup = cuando sueltas el mouse