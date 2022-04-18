// Ejemplo avanzado de lo que podemos hacer con JavaScript

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('#footer');

// eventos
btnFlotante.addEventListener('click', ()=>{

    // Verificar si un elemento tiene o no una clase
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
       btnFlotante.textContent = "Idioma y moneda";
    }else{
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = "X Cerrar";
    }
  
}); 

