// ¿Qué es .reduce? reunir una cantidad de datos y entregarlos

const carrito = [
    {nombre: 'monitor 27 pulgadas', precio: 500},
    {nombre: 'televisión', precio: 100},
    {nombre: 'tablet', precio: 200},
    {nombre: 'audifonos', precio: 300},
    {nombre: 'teclado', precio: 400},
    {nombre: 'celular', precio: 700}
]

// Contar el total que se debe pagar en el arreglo de objetos

// Estructura
    // Primer parametro= la variable en la que se va a ir acomulando todo
    // segundo parametro= la variable que tiene el valor que se va agregar a la acomulación
    // el cero= desde que valor va a empezar la variable que esta en el primer parametro
        // ejemplo: let total= 0;
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);