// .find

const carrito = [
    {nombre: 'monitor 27 pulgadas', precio: 500},
    {nombre: 'televisión', precio: 100},
    {nombre: 'tablet', precio: 200},
    {nombre: 'audifonos', precio: 300},
    {nombre: 'teclado', precio: 400},
    {nombre: 'celular', precio: 700}
];

// Con un foreach
let resultado = "";
carrito.forEach((producto, index) =>{
    if(producto.nombre === "tablet"){
        resultado = carrito[index];
    }
});

console.log(resultado);

// Con un .find
    // Retorna el primer elemento que cumpla con la condición
let resultado2 = carrito.find (producto => producto.nombre === "tablet");
console.log(resultado2);