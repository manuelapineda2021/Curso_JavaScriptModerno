//Formas de declarar una función

//1. Declaración de Función (Function Declaratiion)

function sumar() {
  //Todo lo que este dentro de esta función se le conoce como "cuerpo de la función"
  console.log(2 + 2);
}

//Llamar función
sumar();

//2. Expresión de Función (Function Expression)
const sumar2 = function(){
    console.log(3+3);
}
sumar2(); //No importa de que forma se declara una función, cualquiera de las dos se llama igual