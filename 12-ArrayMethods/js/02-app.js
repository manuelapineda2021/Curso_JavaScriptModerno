const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    {nombre: 'monitor 27 pulgadas', precio: 500},
    {nombre: 'televisión', precio: 100},
    {nombre: 'tablet', precio: 200},
    {nombre: 'audifonos', precio: 300},
    {nombre: 'teclado', precio: 400},
    {nombre: 'celular', precio: 700}
]

// Encontrar el indice de un elemento de un arreglo
const indice = meses.findIndex ( mes => mes === 'Abril');
console.log (`Se encontro en la posición ${indice}`);

// Encontrar indice en un arreglo de objetos
const indiceCarrito = carrito.findIndex ( (producto)=>{
    return producto.precio === 400;
})
console.log(`El precio de 400 se encontro en el indice ${indiceCarrito}`);

// NOTAS IMPORTANTES:
    // Cuando retorna un -1 es porque no lo encontro
    // Siempre va a retornar el valor que primero encuentre