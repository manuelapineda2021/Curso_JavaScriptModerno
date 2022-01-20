// Métodos
const numero1= "20";
const numero2= "20.2";
const numero3= "Uno";
const numero4= 20;

console.log(typeof numero1); //Muestra tipo de dato

// String a número entero
console.log(Number.parseInt(numero1));

// String a número float
console.log(Number.parseFloat(numero2));

// Revisar si un nuúmero es entero o no
console.log(Number.isInteger(numero4));
