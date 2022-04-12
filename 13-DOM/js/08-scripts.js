// Traversing the DOM = recorrer elementos del DOM
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); //los espacios en blanco son considerados como elementos
console.log(navegacion.children); // no toma los espacios en blanco
console.log(navegacion.children[0]); // acceder a un nodo del arreglo
console.log(navegacion.firstElementChild); // primer elemento de navegación
console.log(navegacion.lastElementChild); // último elemento de navegación

//Acceder al texto "Música electrónica 2021"
const card = document.querySelector('.card');
console.log(card);
console.log(card.children[1].children[1].textContent);

// Acceder a la imagen y cambiarla
const imagen = document.querySelector('.card');
imagen.children[0].src = 'img/hacer3.jpg';
console.log(imagen.children[0]);

// Traversing the Hijo a padre
const hijoPadre = document.querySelector('.card');
console.log(hijoPadre.parentNode); // los espacios en blanco son considerados elementos
console.log(hijoPadre.parentElement.parentElement); //no considera espacios en blanco como elementos

// Traversing the hermano
const hermano = document.querySelector('.card');
console.log(hermano);
console.log(hermano.nextElementSibling);

// Seleccionar el último card
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);// me selecciona el elementos anterior al que estoy posicionada 