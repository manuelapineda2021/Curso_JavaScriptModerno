// los iteradores lo que hace es que nuestro código se ejecute cuando una condición se cumpla 
// o se deje de cumplir 

// for loop= se ejecuta el código hasta que dejan de cumplir una condición, consta de 3 partes
    // 1. Indice iniciador: en qué lugar va a empezar nuestro código
    // 2. cuántas veces quiero que se repita o ejecute mi código
    // 3. Incremento
for(let i = 0; i < 10; i++){
    console.log(`Número ${i}`);
}

// Números pares e impares 
for(let i= 0; i <=20; i++){
    if(i % 2 === 0 ){
        console.log(`El número ${i} es PAR`);
    }else{
        console.log(`El número ${i} es IMPAR`);
    }
}


// Ejemplo de un for loop con un vector
const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]

for(let i=0; i < carrito.length; i++){
    console.log(carrito[i]);
    console.log(carrito[i].nombre);
}
