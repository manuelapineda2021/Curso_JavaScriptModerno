// Event Bubbling: cuando se preciona en un evento, y ese evento se propaga por otros muchos lugares
// dando resultados que no son los esperados

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (event) =>{
    event.stopPropagation(); //evita la propagación del elemento
    console.log("Has hecho click en la sesión de card");
});

infoDiv.addEventListener('click', () =>{
    event.stopPropagation();
    console.log("Has hecho click en la sesión de info");
});

titulo.addEventListener('click', () =>{
    event.stopPropagation();
    console.log("Has hecho click en el titulo");
});