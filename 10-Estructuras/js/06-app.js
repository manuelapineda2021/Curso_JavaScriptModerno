// Operador &&/and
// Revisa que se cumplan dos condiciones o más dentro de un if

const usuario = false;
const puedePagar = true;

if (usuario && puedePagar) {
  console.log("Si puedes comprar, porque eres usuario y puedes pagar");
} else {
  if (!usuario && !puedePagar) {
    console.log(
      "Upps!, lo más probable es que no eres usuario o no puedes pagar"
    );
  } else {
    if (!usuario) {
      //si no es usuario
      console.log("Inicia sesión");
    } else {
      if (!puedePagar) {
        // si no puede pagar
        console.log("Fondos insuficientes");
      }
    }
  }
}
