// While loop: se ejecuta mientras una condición es verdadera, consta de:

// 1. Inicializar el while
let i = 1;

// // 2. Condición...........
//     // mientras la condición sea verdadera se ejecuta... una vez no sea verdadera, no se ejecuta
while(i < 100){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} Fizz Buzz`);
      } else {
        if (i % 3 === 0) {
          console.log(`${i} Fizz`);
        } else {
          if (i % 5 === 0) {
            console.log(`${i} Buzz`);
          }
        }
      }
    // 3. Incremento
    i++;
}

console.log("--------------Ejercicio de pares e impares-------------------------");

let n = 0;

while(n < 10){

    if(n % 2 === 0){
        console.log(`El número ${n} es PAR`);
    }else{
        console.log(`El número ${n} es IMPAR`);
    }

    n++;
}

// NOTA IMPORTANTE: puedes hacer lo mismo con un for loop que con un while loop