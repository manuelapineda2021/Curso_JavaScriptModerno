// Método .map

const carrito = [
    {nombre: "Monitor de 27 pulgadas", precio: 500},
    {nombre: "Televisor", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio:400},
    {nombre: "celular", precio: 700}
]

// ¿Cuál es la diferencia entre el método forEacht y .map?

const nuevoArreglo = carrito.forEach( function(producto){
    console.log(`${producto.nombre} - ${producto.precio}`);

})

console.log("----------------------Método .map----------------------------")
const nuevoArreglo2= carrito.map( function(producto){
    console.log(`${producto.nombre} - ${producto.precio}`);

})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);


