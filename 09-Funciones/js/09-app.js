// Métodos de propiedad: es decir, es donde el valor de la propiedad de un objeto es una función 
    // También pueden mandarse parametros y argumentos 

const reproductor ={
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id: ${id}`);
    },
    pausar: function(){
        console.log(`Pausando...`)
    },
    crearPlayList: function(nombre){
        console.log(`Creando platList de ${nombre}`);
    },
    reproducirPlayList:function(nombre){
        console.log(`Reproduciendo playlist ${nombre}`);
    }
}

// Se invoca:
reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

// En los metodos de propiedad también:
// Agregar una nueva propiedad al objeto reproductor
reproductor.borrar = function(id){
    console.log(`Borrando canción... ${id}`);
}

reproductor.borrar(30);
reproductor.crearPlayList('Heavy Metal');
reproductor.reproducirPlayList('Heavy Metal');
