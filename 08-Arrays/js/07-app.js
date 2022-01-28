// Eliminar elementos en un arreglo

const carrito = [];

const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}

const producto2 ={
    nombre: "celular",
    precio: 800
}

const producto3={
    nombre: "Teclado",
    precio: 50
}

const producto4={
    nombre: "Mouse",
    precio: 30
}

const producto5={
    nombre: "Portatil",
    precio: 500
}

carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);
carrito.push(producto5);
carrito.unshift(producto3);
console.table(carrito);

// Eliminar último elemento de un arreglo
carrito.pop();
console.table(carrito);

// Eliminar al inicio del arreglo
carrito.shift();
console.table(carrito);

// Eliminar cualquier elemento
    // 1.Posición apartir de donde quiero eliminar
    // 2.Cantidad de elementos a elimar apartir de la posición
    carrito.splice(1,2);
    console.table(carrito);