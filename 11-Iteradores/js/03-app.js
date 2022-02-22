// Ejercicio o reto del Fizz Buzz- tengo 100 numeros
// Si un número es multiplo de 3 (3,6,9,12...) imprimimos Fizz
// Si un número es multiplo de 5 (5,10,15,20...) imprimimos Buzz
// Si un número es multiplo de 3 y 5 (15,30,45...)imprimimos Fizz Buzz

for (let i = 1; i <= 100; i++) {
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
}
