// Destructuring en Arrays
const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, tercero] = numeros;
console.log(primero);
console.log(tercero);

// Caso cuando quiero solo una posición y no tener que hacer lo que hice anteriormente para acceder a la tercera
// posición
const numeros2 = [60, 70, 80, 90, 100];

const [ , , tercero2] = numeros2;
const [ , , , , quinto] = numeros2;
const [segundo2, ...cuarto] =numeros2; //segunda posición, y los ultimos valores apartir de la segunda posición 
console.log(tercero2);
console.log(cuarto);
