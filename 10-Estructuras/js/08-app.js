// Buenas practicas a la hora de utilizar el condicional if

const autenticado = true;

// Mala practica
if (autenticado === true) {
  console.log("El usuario esta autenticado");
}

// Buena practica
if (autenticado) {
  console.log("El usuario esta autenticado");
}

// ------------------------------------------------------
const puntaje = 450;

function revisarPuntaje() {
  if (puntaje > 400) {
    console.log("Excelente!!");
    return; //el return permite no seguir con las demás condiciones que hay hacia abajo, si esta
    // se cumple
  }

  if (puntaje > 300) {
    console.log("Buen puntaje... felicidades!!");
    return;
  }
}

revisarPuntaje();
