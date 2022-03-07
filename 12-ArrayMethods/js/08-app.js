// Spread operator
    // No modifica el arreglo original (cuando se hace .push si)
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    {nombre: 'monitor 27 pulgadas', precio: 500},
    {nombre: 'televisión', precio: 100},
    {nombre: 'tablet', precio: 200},
    {nombre: 'audifonos', precio: 300},
    {nombre: 'teclado', precio: 400},
    {nombre: 'celular', precio: 700}
]
// Spread operator con arreglo de indices
    // Agregar Agosto (como lo que se va agregar es un string no se ponen los tres puntos)
const agregarMes = [...meses, 'Agosto'];
console.log(agregarMes);

// Spread operator con un arreglo de objetos
const nuevoProducto = {nombre: 'disco duro', precio: 300};
const agregarProducto = [...carrito, nuevoProducto];
console.log(agregarProducto);