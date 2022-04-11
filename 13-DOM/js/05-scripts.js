// querySelectorAll = retorna todos los elementos 

const card = document.querySelectorAll('.card');
console.log(card);

const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

// Si no existe = retorna un nodeList (arreglo) vacio
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste); 