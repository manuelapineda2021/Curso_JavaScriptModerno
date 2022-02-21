// Condiciones anidadas 
    // en condiciones anidades siempre se va a ejecutar la primera que se cumpla, sin importar que una
    // mas abajo también cumpla

const dinero = 300;
const totalPagar = 500;
const tarjeta = false;
const cheque = true;

if(dinero >= totalPagar){
    console.log("Si puede pagar");
}else{
    if(tarjeta){
        console.log("Si puedo pagar porque tengo la tarjeta");
    }else{
        if(cheque){
            console.log("Si tengo un cheque");

        }else{
            console.log("Fondos insuficientes");
        }
        
    }
}