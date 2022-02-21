// Comparación estricto
const puntaje = 1001;
const puntaje2 = 1000;

// Si puntaje es diferente a...
    // != Operador no estricto
    // !== Operador estricto = revisa por el valor y tipo de dato
if(puntaje != 1000){
    console.log("Si!, es diferente");
}

// Si puntaje2 es igual a 1000
    // == Operador no estricto
    // === Operador escricto = revisa por el valor y tipo de dato
if(puntaje === "1000"){
    console.log("Si!, es diferente");
}else{
    console.log("No es igual");
}