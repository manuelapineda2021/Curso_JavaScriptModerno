// .forEach y .map

const pendientes = ['Tarea', 'Comer','Proyecto', 'Estudiar JavaScript'];

pendientes.forEach((pendiente, indice)=>{

    // Como el forEch esta diseñado para recorrer arreglos, el por defecto si le enviamos
    // un segundo parametro que haga referencia al indice, el me lo va a poner 
    console.log(`${indice} : ${pendiente}`);
});


const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400, descuento: true},
    {nombre: 'Celular', precio: 700}
]

console.log("--------------------------.forEach-------------------------------------");
// No crea un nuevo arreglo
carrito.forEach((producto, indice)=>{
    console.log(`${indice} : ${producto.nombre}`);
});

console.log("---------------------------.map--------------------------------");
// Crea un nuevo arreglo
carrito.map((producto, indice)=>{
    console.log(`${indice} : ${producto.nombre}`);
});