//Prevenir Event Bubbling con Delegation

const cardDiv = document.querySelector('.card');

// console.log(event.target); // ¿a qué le estamos dando click?
// console.log(event.target.classList); // ¿cuáles son las clases a lo que le estamos dando click?

cardDiv.addEventListener('click', event =>{
    if(event.target.classList.contains('titulo')){
        console.log("Diste click en titulo");
    }

    if(event.target.classList.contains('precio')){
        console.log("Diste click en precio");
    }

    if(event.target.classList.contains('card')){
        console.log("Diste click en card");
    }
});

