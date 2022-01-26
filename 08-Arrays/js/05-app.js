const meses = ['Enero', 'Febrero', 'Marzo'];

// Agregar al final del arreglo
meses.push('Abril');
meses.push('Mayo');

console.table(meses);

const carrito =[]; //Arreglo vacio 
// Definir un producto
const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}
carrito.push(producto);

const producto2 = {
    nombre: "celular",
    precio: 800
}

carrito.push(producto2);

// Agregar al inicio del arreglo
const producto3 = {
    nombre: "Teclado",
    precio: 50
}
carrito.unshift(producto3);

console.table(carrito);

