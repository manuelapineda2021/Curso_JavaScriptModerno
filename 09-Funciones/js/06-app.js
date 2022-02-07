//Parametros por default

function saludar(nombre= 'Desconocido', apellido = ''){ //son como parametros variables
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Juan'); //respuesta: Hola Juan (si no tiene apellido aparece en vacio)
saludar(); //Respuesta: Hola Desconocido

// Un parametro por default lo que hace es que si no se le envía los argumentos correspondientes, el 
// por defecto toma los valores que se le asignan a los parametros en la función
