// ¿Cómo se comunican las funciones? 

iniciarApp();
function iniciarApp(){
    console.log('Iniciando App...');
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda función');
    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere....');
    console.log(`Usuario ${usuario} autenticado exitosamente.`);
}