// alert("Hola Mundo, con un archivo JavaScript fuera del html");

//Pregunta al usuario su nombre y lo guarda en la variable nombre
const nombre= prompt('¿Cuál es tu nombre?');

//Selecciona elementos del HTML y toma le valor de la variable nombre
document.querySelector('.contenido').innerHTML= `${nombre} esta aprendiendo JavaScript moderno`;


// // Comunicación con Consola

// console.error('Algo salio mal');

// console.time('Hola');
// console.warn('Esto no esta permitido');
// console.warn('Esto no esta permitido');
// console.warn('Esto no esta permitido');
// console.warn('Esto no esta permitido');
// console.warn('Esto no esta permitido');
// console.timeEnd('Finalizo hola');