// Eventos sobre los inputs (teclado)

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () =>{
    // Al presionar una tecla
    console.log("escribiendo...");
})

busqueda.addEventListener('keyup', () =>{
    // Al presionar una tecla y suelta
    console.log("escribiendo...");
})

busqueda.addEventListener('blur', () =>{
    // entro al input y salgo (sirve mucho para validaciones)
    console.log("Has entrado y salido del input");
})

busqueda.addEventListener('copy', () =>{
    console.log("Has seleccionado y copiado una palabra o texto");
})

busqueda.addEventListener('paste', () =>{
    console.log("Has pegado una palabra o un texto");
})

busqueda.addEventListener('cut', () =>{
    console.log("Has seleccionado y cortado una palabra o texto");
})

// Este evento realiza todos los eventos realizados anteriormente, EXECTO el evento blur
busqueda.addEventListener('input', () =>{
    console.log("Cumplo todos los eventos, execto el evento blur");
})

// ---------------------------------------------------------------------------------
// Todo lo que se esta presentando en el evento
busqueda.addEventListener('keydown', (event) =>{
    console.log(event);
})

// sobre qué elemento se esta trabajando
busqueda.addEventListener('keydown', (event) =>{
    console.log(event.type);
})

// nos dice sobre qué input en especifico se esta realizando el evento
busqueda.addEventListener('keydown', (event) =>{
    console.log(event.target);
})

// lo que se esta escribiendo
busqueda.addEventListener('keydown', (event) =>{
    console.log(event.target.value);
})