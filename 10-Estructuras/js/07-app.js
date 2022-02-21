// Operador or
    // Revisa que por lo menos una condición se cumpla en el if

const efectivo = 300;
const credito = 1000;
const disponible = efectivo + credito;
const totalPagar = 600;

if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
    console.log("Si podemos pagar");
}else{
    console.log("Fondos insuficientes");
}