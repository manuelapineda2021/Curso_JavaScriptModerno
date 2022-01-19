// Métodos replace, Slice y Substring
const producto='Monitor 20 pulgadas';
console.log(producto);

// Reemplaza parte de una cadena de texto por otra
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Monitor','Monitor curvo'));

//Cortar una parte de una cadena de texto
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));

// Alternativa a slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2,1));

// ¿Cuál es la diferencia entre slice y substring?
// Cuando se le pasa un numero de inicio mayor al del final (caso lineas 12 y 16), slice no hace esta función
// y substring si la hace, pero modificadola

// Ejemplo del cómo crear un circulo con la inicial de una persona
const usuario="Manuela";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));