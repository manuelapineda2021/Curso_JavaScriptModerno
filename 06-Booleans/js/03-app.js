// Consejos a la hora de escribir booleans
const autenticado = true;

// Forma correcta
if(autenticado){
    console.log('Si puedes ver Netflix');
}else{
    console.log('No puedes ver Netflix');
}

// Forma Incorrecta
if(autenticado == true){
    console.log('Si puedes ver Netflix');
}else{
    console.log('No puedes ver Netflix');
}

// ---------------------------------
// Operador ternario
const autenticado2= false;
console.log(autenticado2 ? 'Si esta autenticado' : 'No esta autenticado');