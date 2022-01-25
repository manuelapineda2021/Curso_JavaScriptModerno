// ¿Cómo unir dos objectos?

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
    peso: '1kg',
    medida:'1m'
};

console.log(producto);
console.log(medidas);

// Primera forma
const resultado = Object.assign(producto, medidas);
console.log(resultado);

// Segunda forma (Spread Operator o Rest Operator)
const resultado2 = {...producto, ...medidas}
console.log(resultado2);
