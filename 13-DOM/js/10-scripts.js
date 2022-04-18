// ¿cómo crear HTML desde javaScript?

const enlace = document.createElement('a'); //crear elemento
enlace.textContent = "Nuevo Enlace"; // agregar texto
enlace.href = '/nuevo-enlace'; // añadiendo href
enlace.target = "_blank"; 
console.log(enlace);

enlace.setAttribute ('data-enlace', 'nuevo-enlace'); //atributo personalizado (nombre atributo, valor atributo)
enlace.classList.add('alguna-clase'); // agregar clase

// mostrar enlace en el DOM
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
// navegacion.appendChild(enlace); //insertar al final
navegacion.insertBefore(enlace,navegacion.children[1]); //insertar antes de...


// ---------------------------------------------------------------------------------------
// Crear un card de forma dinámica 
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add('precio');

// Crear DIV clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear imagen
const imagen = document.createElement('img');
imagen.src = "img/hacer2.jpg";

// Crear card
const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen 
card.appendChild(imagen);

// Asignar info
card.appendChild(info);

// Insertar en el DOM o HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);

// console.log(parrafo1);
// console.log(parrafo2);
// console.log(parrafo3);
// console.log(info);
// console.log(imagen);
// console.log(card);

