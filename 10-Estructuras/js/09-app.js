// Operadores ternarios
const autenticado = true;
const puedePagar = false;

// ? parte del si cumple la condición (if)
// : parte del no cumple la condición (else)
console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');

// ¿Cómo poner un && en un operador ternario?
console.log(autenticado && puedePagar ? 'Si esta autenticado y puede pagar' : 'Upps! no esta autenticado o no puede pagar');

// ¿Cómo poner un && en un operador ternario?
console.log( autenticado || puedePagar ? 'Esta autenticado o puede pagar' : 'no esta autenticado o no puede pagar');

//¿Cómo hago un if anidado en un operador ternario?
console.log(autenticado ? puedePagar ? 'si esta autenticado y puede pagar' : 'Si autenticado, no puede pagar' : "no esta autenticado");
