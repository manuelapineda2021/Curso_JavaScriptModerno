// for... in == itera sobre objectos

const automovil ={
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`);
}

console.log("----------------Forma más facil---------------------");
// Otra forma más simple
for(let [llave, valor] of Object.entries(automovil)){
    console.log(valor);
}