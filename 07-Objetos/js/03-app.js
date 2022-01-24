// Agregar propiedades al objeto

const producto={
    nombre:"Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    imagen: "imagen.jpg" // Agregarla dentro del mismo objeto

}

// Agregar después en la ejecución del proyecto...
producto.cantidad = 100;


// Eliminar propiedades del objeto
delete producto.disponible;

console.log(producto);
