//Acceder a valores que estan en el objeto y asignarlos a una variable

const producto={
    nombre:"Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Forma antigua 
const nombre = producto.nombre;
console.log(nombre);

// Forma nueva (Object destructuring)
const {precio, disponible} = producto;
console.log(precio);
console.log(disponible);


