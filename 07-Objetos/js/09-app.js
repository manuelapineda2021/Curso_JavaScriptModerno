// Sellar un objecto
"use strict";

const producto={
    nombre:"Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}


// Objects Methods
Object.seal( producto ); //Permite modificar las variables del objecto, mas NO eliminar y agregar

// el método anterior no me permite....
producto.disponible=false;
// producto.imagen= "imagen.jpg";
// delete producto.precio;
console.log(producto);

console.log(Object.isSealed(producto)); //permite ver si el objecto esta sellado