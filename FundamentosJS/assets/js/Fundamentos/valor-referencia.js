let a = 10;
let b = a;
a = 30;

console.log((a, b));

// ... el rest

let juan = {nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'ana'

console.log({juan, ana});

const cambiaNombre = ( {...persona} ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre ( peter );

console.log({peter, tony});
// ___________________________________________________________


// Arreglos
// const frutas= ['Manzana', 'pera', 'naranja'];

// const otrasFrutas = [...frutas];

// otrasFrutas.push('Mango');

// console.table({ frutas,otrasFrutas})

// otro metodo

const frutas= ['Manzana', 'pera', 'naranja'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

otrasFrutas.push('Mango');

console.table({ frutas,otrasFrutas})


// timeend medir tiempo