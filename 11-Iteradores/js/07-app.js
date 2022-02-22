// for...of == itera sobre arreglos
    // ¿Qué hace?
    // Pone un alias, y cuando en el arreglo no hayan más elementos, se detiene

const pendientes = ['Tarea', 'Comer','Proyecto', 'Estudiar JavaScript'];

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400, descuento: true},
    {nombre: 'Celular', precio: 700}
];

for(let pendiente of pendientes){
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto.nombre);
}