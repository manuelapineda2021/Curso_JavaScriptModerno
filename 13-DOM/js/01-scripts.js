let elemento;

elemento = document;
// elemento = document.all; //me selecciona todos los elementos que contiene el HTML de nuestro proyecto
elemento = document.head; // me selecciona todo lo que esta dentro de la etiqueta o elemento head
elemento = document.body; // me selecciona todo lo que esta dentro de la etiqueta o elemento body
elemento = document.domain; // en qué url me esta cargando el proyecto
elemento = document.forms; // me dice cuántos formularios hay en el proyecto
elemento = document.forms[0]; //puedo acceder a los elementos del formulario por el HTMLCollection
elemento = document.forms[0].id; // acceder id formulario
elemento = document.forms[0].method; // acceder metodo formulario
elemento = document.forms[0].classList; // acceder a las clases del formulario
elemento = document.forms[0].action; 

elemento = document.links; // me muestra todos los enlaces (<a>) que tiene el proyecto
elemento = document.links[4]; // acceder a un enlace en especifico con la posición
elemento = document.links[4].classList; // retorna las clases en un DOMTokenList


elemento = document.images; //cantidad imagenes
elemento = document.scripts; // cantidad scripts



console.log(elemento);