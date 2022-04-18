// Eliminar elementos del DOM

// Eliminar elemento por si mismo
const primerEnlace = document.querySelector('a');
// console.log(primerEnlace);
primerEnlace.remove();


// Eliminar elemento por medio del padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[1]);