// Métodos de propiedad con arrow function

const reproductor ={
    cancion:'',
    reproducir: id => console.log(`Reprodución canción con el id: ${id}`),
    pausar: () => console.log(`Pausando....`),
    borrar: id => `Borrando canción... ${id}`,
    crearPlayList: nombre => console.log(`Creando la playList de ${nombre}`),
    reproducirPlayList: nombre => console.log(`Reproduciendo la playList ${nombre}`),

    // Agregar valores
    set nuevaCancion(cancion){
        this.cancion=cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    // Traer valores
    get obtenerCancion (){
        console.log(`${this.cancion}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
console.log(reproductor.borrar(20));
reproductor.crearPlayList('Heavy Metal');

// Invocar set
reproductor.nuevaCancion = 'Enter Sadman';
// Invocar get
reproductor.obtenerCancion;