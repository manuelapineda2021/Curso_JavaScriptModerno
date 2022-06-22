//Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

//Expresiones regulares
const expRegEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

eventListeners();
function eventListeners (){

    //cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //campos del formulario
    email.addEventListener('blur', validarFormulario); //cuando entre y salga del input
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    //Reinicia el formulario
    btnReset.addEventListener('click', resetFormulario);
    
    //Enviar Email
    formulario.addEventListener('submit', enviarEmail);

}

//Funciones

function iniciarApp (){
    btnEnviar.disabled = true; //desabilitar botón
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//Valida el formulario
function validarFormulario(event){
    
    if(event.target.value.length > 0){

        //Elimina mensaje de error...
        const eliminarError = document.querySelector('p.error');
        if(eliminarError){
            eliminarError.remove();
        }
        event.target.classList.remove('border', 'border-red-500');
        event.target.classList.add('border', 'border-green-500');

        }else{
        event.target.classList.remove('border', 'border-green-500');
        event.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    //Validar email
    if(event.target.type === 'email'){

        if(expRegEmail.test(event.target.value)){

            const eliminarError = document.querySelector('p.error');
            if(eliminarError){
                eliminarError.remove();
            }
            event.target.classList.remove('border', 'border-red-500');
            event.target.classList.add('border', 'border-green-500');
        }else{
            event.target.classList.remove('border', 'border-green-500');
            event.target.classList.add('border', 'border-red-500');
            mostrarError('El email ingresado no es válido');
        }
    } 

    if(expRegEmail.test(email.value) && asunto.value !== "" && mensaje.value !== ""){
        btnEnviar.disabled = false; //habilitar botón
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}


function mostrarError(menssage){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = menssage;
    mensajeError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'mt-5', 'text-content', 'error');
    
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }
    
}

//Resetea formulario
function resetFormulario(event){
    formulario.reset();
    iniciarApp();
    event.preventDefault();
}



//Envia el Email
function enviarEmail(event){
    event.preventDefault();
    
    //Mostrar el spinner 
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    //Después de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout(() => {
        spinner.style.display = "none";

        //muestra mensaje que se envío el email
        const parrafo = document.createElement('p');
        parrafo.textContent = "El email se envío correctamente";
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        setTimeout(() => {
            parrafo.remove(); //Elimina mensaje de envío Email con éxito
            formulario.reset();
            iniciarApp();
        }, 5000);

        //Inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);
    }, 3000);
}

