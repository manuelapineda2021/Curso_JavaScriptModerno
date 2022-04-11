// querySelector = retorna el primero que encuentre, maximo retorna un solo elemento

const card = document.querySelector('.card');
console.log(card);

// podemos tener selectore especificos como en css
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Seleccionar formulario con id
const formulario = document.querySelector('#formulario');
console.log(formulario);

// seleccionar elementos HTML (etiquetas)
const navegacion = document.querySelector('nav');
console.log(navegacion);