// Metodos .repeteat y .split
const producto="Monitor 20 pulgadas";

// Repite cadena de texto
const texto='en promoción'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto} !!!!`);

// Dividir un string
const actividad="Estoy apendiendo JavaScript Moderno";
console.log(actividad.split(" "));// Divide por espacios

const hobbies="Leer, caminar, escuchar música, escribir, aprender a programar";
console.log(hobbies.split(",")); //Divide por ,

const tweet="Aprendiendo JavaScript #JSModerno";
console.log(tweet.split("#"));
