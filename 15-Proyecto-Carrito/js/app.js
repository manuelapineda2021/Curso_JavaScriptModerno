//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners(); //llamar función 
function cargarEventListeners () {
    //Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () =>{
        articulosCarrito = []; //reseteamos el arreglo

        limpiarHtml();//eliminamos todo el HTML
    })
}

//Funciones 
function agregarCurso (event){

    event.preventDefault();
    if(event.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = event.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

//Eliminar un curso del carrito
function eliminarCurso(event){
    if(event.target.classList.contains('borrar-curso')){
        const cursoId = event.target.getAttribute('data-id');

        //Eliminar del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        
        carritoHTML(); //Iterar sobre el carrito y mostrar su HTML
    }
}

//Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso){

    //Objeto con el contenido del curso actual 
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){

        //Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso =>{
            if(curso.id===infoCurso.id){
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            }else{
                return curso; // retorna el objeto con los elementos que no estan duplicados
            }
        })

        articulosCarrito=[...cursos];
    }else{
        //Agregar articulo al carrito 
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    console.log(articulosCarrito);
    carritoHTML();

}

//Mostrar carrito en el HTML
function carritoHTML (){

    //Limpiar el HTML
    limpiarHtml();

    //Recorre el arreglo y genera el HTML
    articulosCarrito.forEach ( curso =>{
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>
                <img src="${imagen}" width=100>
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        //Agrega en el HTML del carrtio en el tbody
        contenedorCarrito.appendChild(row);
    })
}

//Eliminar los cursos del tbody
function limpiarHtml(){

    //Forma lenta
    // contenedorCarrito.innerHTML= "";

    //otra forma
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}