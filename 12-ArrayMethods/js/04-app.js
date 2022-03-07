// .filter

const carrito = [
    {nombre: 'monitor 27 pulgadas', precio: 500},
    {nombre: 'televisión', precio: 100},
    {nombre: 'tablet', precio: 200},
    {nombre: 'audifonos', precio: 300},
    {nombre: 'teclado', precio: 400},
    {nombre: 'celular', precio: 700}
];

// Traer los productos que su precio sea mayor a 400
let resultado;
resultado = carrito.filter(producto => producto.precio > 400);

//cuyos precios sean menor a 600
resultado = carrito.filter(producto => producto.precio < 600);

// Todos los productos menos los audifonos
resultado = carrito.filter (producto => producto.nombre !== "audifonos");

// Solo los audifonos
resultado = carrito.filter(producto => producto.nombre === "audifonos");

console.log(resultado);

