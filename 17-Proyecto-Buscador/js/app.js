//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo= document.querySelector('#maximo');
const puertas= document.querySelector('#puertas');
const transmision= document.querySelector('#transmision');
const color = document.querySelector('#color')

//Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear(); //año actual
const min = max - 10;

//Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//Eventos
//Cargue HTML
document.addEventListener('DOMContentLoaded', () =>{

    mostrarAutos(); //muestra los autos al cargar
    llegarSelect();//Llena las opciones de años
});

//Event listener para los select de la busqueda
marca.addEventListener('change', (event) =>{
    datosBusqueda.marca = event.target.value;
    filtrarAuto();
});

year.addEventListener('change', (event) =>{
    datosBusqueda.year = event.target.value;
});

minimo.addEventListener('change', (event) =>{
    datosBusqueda.minimo = event.target.value;
});

maximo.addEventListener('change', (event) =>{
    datosBusqueda.maximo = event.target.value;
});

puertas.addEventListener('change', (event) =>{
    datosBusqueda.puertas = event.target.value;
});

transmision.addEventListener('change', (event) =>{
    datosBusqueda.transmision = event.target.value;
});

color.addEventListener('change', (event) =>{
    datosBusqueda.color = event.target.value;
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

//Filtra con base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca);
    console.log(resultado);
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        //filtro los que tienen esa marca
        return auto.marca === marca;
    }
    return auto; //retorna automovil completo
}