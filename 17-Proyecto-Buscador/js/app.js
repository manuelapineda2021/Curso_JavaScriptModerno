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

    mostrarAutos(autos); //muestra los autos al cargar
    llegarSelect();//Llena las opciones de años
});

//Event listener para los select de la busqueda
marca.addEventListener('change', (event) =>{
    datosBusqueda.marca = event.target.value;
    filtrarAuto();
});

year.addEventListener('change', (event) =>{
    datosBusqueda.year = parseInt(event.target.value); //convierte el año en entero, ya que llega string
    filtrarAuto();
});

minimo.addEventListener('change', (event) =>{
    datosBusqueda.minimo = event.target.value;
    filtrarAuto();
});

maximo.addEventListener('change', (event) =>{
    datosBusqueda.maximo = event.target.value;
    filtrarAuto();
});

puertas.addEventListener('change', (event) =>{
    datosBusqueda.puertas = parseInt(event.target.value);
    filtrarAuto();
});

transmision.addEventListener('change', (event) =>{
    datosBusqueda.transmision = event.target.value;
    filtrarAuto();
});

color.addEventListener('change', (event) =>{
    datosBusqueda.color = event.target.value;
    filtrarAuto();
});


//Funciones
function mostrarAutos(autos){

    limpiarHTML(); //Elimina el HTML previo

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

//Limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){ //mientras halla algo
        resultado.removeChild(resultado.firstChild);
    }

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
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
    
}

function noResultado(){
    limpiarHTML();
    const textNoResultados = document.createElement('div');
    textNoResultados.classList.add('alerta', 'error');
    textNoResultados.textContent = "No hay resultados que coincidan con su busqueda. Intenta con otros términos de búsqueda";
    resultado.appendChild(textNoResultados);
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        //filtro los que tienen esa marca
        return auto.marca === marca;
    }
    return auto; //retorna automovil completo
}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        //filtro los autos por el año
        return auto.year === year; 
    }
    return auto;
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if(minimo){
        return auto.precio >= minimo; 
    }
    return auto;
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(maximo){
        return auto.precio <= maximo; 
    }
    return auto;
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas === puertas; 
    }
    return auto;
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision; 
    }
    return auto;
}

function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color; 
    }
    return auto;
}