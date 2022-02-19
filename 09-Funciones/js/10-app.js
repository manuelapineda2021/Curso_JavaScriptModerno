// Funciones de flecha (Arrow Functions): son otra forma de declarar funciones

// Función normal
const aprendiendo = function(){
    console.log('Aprendiendo JavaScript');
}

// Función flecha
const aprendiendo2 = () =>{
    console.log('Aprendiendo JavaScript función flecha');
}

// Una función flecha cuando solo tiene una linea de codigo puede también tener esta estructura:
    // 1. Se pueden quitar las llaves
    // 2. De por si una función flecha cuando tienen una sola linea dan por implicito el return

    const aprendiendo3 = () => 'Aprendiendo JavaScript';

    aprendiendo2();
    console.log(aprendiendo3());