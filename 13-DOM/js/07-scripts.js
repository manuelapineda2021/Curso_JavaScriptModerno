// Modificar encabezado
const encabezado = document.querySelector('h1');
encabezado.style.backgroundColor = "blue"; //color background
encabezado.style.frontFamily = "Arial"; // tipo fuente
encabezado.style.textTransform = "uppercase"; // mayúscula

// Agregar o eliminar clases
const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-nueva-clase'); //agregar clases
card.classList.remove('segunda-nueva-clase');
console.log(card.classList);

