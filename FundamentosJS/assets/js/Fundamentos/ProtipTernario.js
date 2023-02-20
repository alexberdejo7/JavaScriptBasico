

const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = ( miembro ) => (miembro) ? '2 dolares' : '10 dolares';

console.log (elMayor(20, 15) );
console.log (tieneMembresia(false) )



const friend = true;
const friendAR = [
    'peter',
    'thor',
    'loki',
    friend ? 'thor' : 'loki',

    // aqui se puede poner codigo js
];

console.log( friendAR);

// ________________________________

const nota = 90; 
const grado = nota >= 90 ? 'A' :
              nota >= 80 ? 'B' :
              nota >= 70 ? 'C' : 'F';

console.log({nota, grado})

















let firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";

console.log( access ); // muestra "Acceso Permitido"

// __________________________________
let stop = false, age = 126;

age > 18 ? (
    alert("OK, puedes continuar.")
) : (
    stop = true,
    alert("Disculpa, eres menor de edad!")
);