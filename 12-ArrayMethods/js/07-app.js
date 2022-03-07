// .concat = unir arreglos (el orden importa)

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre'];

// Con .concat
const unionMeses = meses.concat(meses2, meses3, 'Otro mes');
console.log(unionMeses);

// Spread operator
    // cuando se ponen los ... es porque es un arreglo, si no lo es, no se ponen
const unionMeses2 = [...meses, ...meses2, ...meses3, 'Otro mes'];
console.log(unionMeses2);