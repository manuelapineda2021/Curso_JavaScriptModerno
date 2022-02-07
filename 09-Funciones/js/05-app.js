// Parametros y Argumentos en funciones
function sumar(a, b){ //a y b son parametros
    console.log(a + b);
}
sumar(2, 3); //2 y 3 se les conoce como argumentos
sumar (200, 184);
sumar (124, 321);

// ¿Cuál es la diferencia entre un parametro y un argumento?
// un parametro es más representativo, cuando los argumentos son los valores reales que se le van a pasar
// a la función

function saludar(nombre, apellido){ //son como parametros variables
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Juan', 'De la torre');
saludar('Manuela', 'Pineda');
saludar ('Camilo'); //Respuesta: Camilo Undefined
saludar (); //Respuesta: Undefined (porque se declara la variable pero más no tiene un valor)