const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio' ];
console.table(meses);

// ¿Cuánto mide el arreglo?
console.log(meses.length);
console.log('Recorrer el arreglo');

// Recorrer un arreglo
    // 1.Desde dónde quiero que empiece a recorrer el arreglo
    // 2.Cuántas veces necesito que recorra el arreglo
    // 3.Incrementando o decrementando 

for(let i=0; i < meses.length; i++){
    console.log(meses[i]);

}