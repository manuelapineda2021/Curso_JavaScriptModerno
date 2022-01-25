// ¿Cómo hacer para que un objeto NO pueda ser MODIFICADO?
"use strict";

const producto={
    nombre:"Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}


// Objects Methods
Object.freeze( producto ); //Congelar el objeto para no poder ser modificado

// el método anterior no me permite....
// producto.disponible=false;
// producto.imagen= "imagen.jpg";
// delete producto.precio;
console.log(producto);

console.log(Object.isFrozen(producto)); // verificar si el objecto esta congelado para no ser modificado