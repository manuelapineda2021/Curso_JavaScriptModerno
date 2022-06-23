//Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear(); //año actual
const min = max - 10;

//Eventos
//Cargue HTML
document.addEventListener('DOMContentLoaded', () =>{

    mostrarAutos(); //muestra los autos al cargar
    llegarSelect();//Llena las opciones de años
});


//Funciones
function mostrarAutos(){

    autos.forEach(auto =>{
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent= `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision}
            - Precio: ${precio} - Color: ${color}
        `;
        //Insertar en el HTML
        resultado.appendChild(autoHTML);
    })
}

//Genera los años del select
function llegarSelect(){
    
    //Empieza del años actual al año menor (2022 al 2012)
    for(let i= max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega las opciones del año al select
    }
}