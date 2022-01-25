// El problema con los objetos

const producto={
    nombre:"Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Una variable de tipos const NO se puede reasignar, pero los objetos SI se pueden reasignar

producto.disponible=false;
delete producto.precio;
console.log(producto);