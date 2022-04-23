// Eventos al dar scroll (ruedita del mouse) con el mouse

// window.addEventListener('scroll', () =>{
//     const scrollPX = window.scrollY; // scrollings verticalmente 
//     console.log(scrollPX);
// })

// -----------------------------------------------
window.addEventListener('scroll', () =>{
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); // muestra los datos que permiten ver si esta 
    // en el elemnto, o aún falta

    console.log(ubicacion);

    if(ubicacion.top < 100){
        console.log("El elemento ya esta visible");
    }else{
        console.log("Aún no, da más scroll");
    }
})