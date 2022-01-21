// Los Booleans solo puede tener dos valores (True o false)
const boolean1= true;
const boolean2=false;
const boolean3= "true";

console.log(boolean1);
console.log(boolean2);

console.log(boolean1 === boolean3);

// Segunda forma de crear un Boolean
const boolean4= new Boolean(true);// esta forma de crear una variable siempre crea es un objeto
console.log(typeof boolean4);