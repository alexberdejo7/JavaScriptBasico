// function crearPersona(  nombre, apellido ) {
//     return {
//         nombre,
//         apellido
//     }
// }

const crearPersona = ( nombre, apellido ) => ({nombre,apellido }) ;


const persona = crearPersona( 'alex', 'berdejo');
console.log( persona );


function imprimerArgumentos() {
    console.log( arguments );
}


const imprimerArgumentos2 = (edad, ...args) => {
    // console.log( edad, args );
    return args;
}



// imprimerArgumentos(10, true, false, 'alex', 'kako');
// imprimerArgumentos2(10, true, false, 'alex', 'kako2');




const [ casado, vivo, nombre, saludo ] = imprimerArgumentos2(10, true, 'kako', 'berdejo');
console.log( {casado, vivo, nombre, saludo} );

const {apellido} = crearPersona( 'alex', 'berdejo');




const tony = {
    nombre: 'alex',
    seudonombre: 'thor',
    edad: 40,
    vivo: true,
    trajes: ['asda', 'asdh'],
};


// const imprimePropiedad = ( personaje ) => {

//     console.log( persona.nombre);
//     console.log( persona.seudonombre);
//     console.log( persona.edad);
//     console.log( persona.vivo);
//     console.log( persona.trajes);
// };


const imprimePropiedad = ({nombre, seudonombre, edad, vivo, trajes}) => {
    console.log({nombre});
    console.log({seudonombre});
    console.log({vivo});
    console.log({edad});
    console.log({seudonombre});
}
imprimePropiedad( tony );