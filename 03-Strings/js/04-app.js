// Cortar espacios en blanco de un String
const producto='          Monitor 20 pulgadas              ';
console.log(producto);
console.log(producto.length);

// Cortar espacios desde el inicio de un string
console.log( producto.trimStart() );
// Cortar espacios desde el final de un string
console.log( producto.trimEnd() );

// Cortar espacios en ambas dimensiones
console.log( producto.trimStart().trimEnd() );
console.log( producto.trim() );