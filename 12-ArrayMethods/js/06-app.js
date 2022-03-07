// .every = si la condición se cumple en TODOS los elementos, me retorna true. Si no, retorna false

const carrito = [
    {nombre: 'monitor 27 pulgadas', precio: 500},
    {nombre: 'televisión', precio: 100},
    {nombre: 'tablet', precio: 200},
    {nombre: 'audifonos', precio: 300},
    {nombre: 'teclado', precio: 400},
    {nombre: 'celular', precio: 700}
];

// Cuando cumple en TODOS
const resultado = carrito.every (producto => producto.precio < 1000);
console.log(resultado);

// Cuanod NO cumple en todos
const resultado2 = carrito.every (producto => producto.precio < 500);
console.log(resultado2);