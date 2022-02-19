// Parametros y argumentos dentro de un arrow function (función flecha)

// Función normal
const aprendiendo = function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`)
}
aprendiendo('función normal');

// Arrow function
    // Una de las ventajas es que cuando se le pasa solo un parametro a una función flecha
    // se pueden quitar los parentesis 
const aprendiendo2 = tecnologia =>{
    console.log(`Aprendiendo ${tecnologia}`)
}
aprendiendo2('arrow function');

// Cuando tienes más de dos parametros
const aprendiendo3 = (tecnologia, tecnologia2) =>{
    console.log(`Aprendiendo ${tecnologia} con ${tecnologia2}`);
}
aprendiendo3('arrow function', 'mas de dos parametros');