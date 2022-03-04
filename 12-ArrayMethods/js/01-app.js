const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    {nombre: 'monitor 27 pulgadas', precio: 500},
    {nombre: 'televisión', precio: 100},
    {nombre: 'tablet', precio: 200},
    {nombre: 'audifonos', precio: 300},
    {nombre: 'teclado', precio: 400},
    {nombre: 'celular', precio: 700}
]

//Comprobar si un valor existe en un arreglo
    // Para arreglos que solo tienen un indice
    const resultado = meses.includes('Enero');
    console.log(resultado);

    // Para un arreglo de objetos o arreglos con un solo indice
    const resultado2 = carrito.some(producto=>{
        return producto.nombre === 'celular';
    });
    console.log(resultado2);

    const resultado3 = meses.some (mes => mes === 'Febrero');
    console.log(resultado3);
    