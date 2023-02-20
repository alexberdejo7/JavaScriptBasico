// dias de semana abrimos 11
// pero los fines a las 9

// entra a un sitio para ver si esta abierto hoy


const dia = 2;
const horaActual = 11;

let horaApertura; 
let mensaje;   //esta abierto esta cerrado hoy abrimos a las xx

//  if ( dia === 0 || dia === 6 ) {
//      console.log('Fin de semana');
//      horaApertura = 9;

//  } else {
//     console.log(' dia de semana');
//      horaApertura = 11;
//  }
//  console.log({ horaApertura})

horaApertura = ( [0,6].includes (dia) ) ? 9 : 11;

if (horaActual == horaApertura ) {
    mensaje = 'esta abierto';
    
} else {
    mensaje = ` esta cerrado, hoy abrimos a las ${ horaApertura} `;  //comilla invertida
}

console.log ({horaApertura, mensaje})