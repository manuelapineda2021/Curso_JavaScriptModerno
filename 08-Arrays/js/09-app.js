// Metodo forEacht para iterar arreglos
const carrito = [
    {nombre: "Monitor de 27 pulgadas", precio: 500},
    {nombre: "Televisor", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio:400},
    {nombre: "celular", precio: 700}
]

// Iteración normal
for(let i=0; i<carrito.length; i++){
    console.log(`${carrito[i].nombre} - ${carrito[i].precio}`);
}

console.log("--------------------Método forEacht---------------------------");

// Iteración que mas se utiliza
carrito.forEach( function(producto){
    console.log(`${producto.nombre} - ${producto.precio}`);

})