// getElementsByClassName: seleccionar elementos por su clase

const header = document.getElementsByClassName('contenido');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// Si las clases existen más de una vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Si una clase NO existe = retorna un arreglo vacio
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);