// break y continue en un for loop
    // break: corta ejecución de un for loop
    // continue: interceptar e identificar elemento y continuar con la ejecución

    console.log("-----------------for loop break------------------------------------------")
// Ejemplo: for loop que al detectar el elemento #5 detenga su ejecución
for(let i=0; i <= 10; i++){
    if(i === 5){
        console.log('Este es el 5');
        break;// cuando entra a esta condición y lee el break, rompe la ejecución
        // y ya no siguie ejecutando el código
    }
    console.log(`Número ${i}`);
}

console.log("-----------------for loop continue------------------------------------------");
// Ejemplo: for loop que en vez de que me diga "5", me diga "CINCO" en letras y continue
for(let i=0; i <=10; i++){
    if(i===5){
        console.log('CINCO');
        continue; //Cuando entra a esta condición y lee el continue... no pasa a la 
        // siguiente linea a ejecutar, si no que vuelve a empezar en el for loop
    }
    console.log(`Número ${i}`);
}

console.log("-----------------for loop continue con un vector------------------------------------------");
// Ejemplo: indicar al usuario qué producto del carrito tiene descuento
const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400, descuento: true},
    {nombre: 'Celular', precio: 700}
]

for(let i=0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }

    console.log(carrito[i].nombre);
}