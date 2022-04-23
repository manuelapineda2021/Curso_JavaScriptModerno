// Eventos que suceden en un formulario 
// solo un evento que es Submit, este funciona cuando un input tiene un atributo type con el valor
// de submit

const formulario = document.querySelector('#formulario');

// formulario.addEventListener('submit', (event) =>{
//     event.preventDefault(); //prevenir acción que realizaría el elemento por defecto
//     console.log("Buscando...");
//     console.log(event.target.method); //método que utiliza el formulario
//     console.log(event.target.action); // acción: hacia dónde va a ir 
// })

// ----------------------------------------------------------------------
// OTRA FORMA DE HACERLO

formulario.addEventListener('submit', validarFormulario);

function validarFormulario (event){
    event.preventDefault(); 
    console.log("Buscando...");
    console.log(event.target.method); 
    console.log(event.target.action); 
}