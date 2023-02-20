let a = 5;

if (a >= 01) {
    console.log(' es mayor o igual 10');
} else {
    console.log('a es menor 10');
    
}

// console.log('fin programa');


const hoy = new Date(); 
let dia = hoy.getDay();



console.log( {dia} )


if (dia === 0) {
    console.log('Domingo')
} else if ( dia === 1) {
    console.log('lunes');   
}



// Sin usar if els o switch

dia = 6;    // 0 domingo
const diasLetras = {
    0: 'domingo',
    1: 'lunes', 
    2: 'martes', 
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
}

console.log( diasLetras[dia] || ' no definido' )