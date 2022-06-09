//Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners();
function eventListeners (){
    //cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //campos del formulario
    email.addEventListener('blur', validarFormulario); //cuando entre y salga del input
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
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
        eliminarError.remove();

        event.target.classList.remove('border', 'border-red-500');
        event.target.classList.add('border', 'border-green-500');

        }else{
        event.target.classList.remove('border', 'border-green-500');
        event.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    //Validar email
    if(event.target.type === 'email'){
        const expRegEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        if(expRegEmail.test(event.target.value)){
            console.log("El Email es válido");
        }else{
            event.target.classList.add('border', 'border-red-500');
            mostrarError('El email ingresado no es válido');
        }
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