//Diferencia entre la Function Declaration y Expression

// Function Declaration
sumar();
function sumar() {
    console.log(2 + 2);
  }

// Funtion Expression
sumar2(); 
  const sumar2 = function(){
      console.log(3+3);
  }


// JavaScript ejecuta el código en dos vueltas:
// 1. Etapa de declaración
// 2. Etapa de ejecución 

// El porqué da error en la function sumar2 (function Expression)
//   1. Etapa de declaración =>  const sumar2;
//   2. Etapa de ejecución => sumar2();
//                            sumar2 = function (){}