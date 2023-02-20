function saludar(nombre) {
    // console.log (arguments)
    // console.log('hola' + nombre);
    return 1;

    
// esto no se va ejecuta
    console.log ('soy un codigo que no se va ejecutar');
}





const saludar2 = function( nombre ){
    console.log('hola'+ nombre);
}

const saludaFlecha = () => {
    console.log('Hola flecha');
}

const saludaFlecha2 = ( nombre ) => {
    console.log('Hola' + nombre );
}





saludar(' alex', 40, true, 'mexico');
// saludar(' alex');

saludaFlecha();
saludaFlecha2('Kako');

const retornoSaludar = saludar('kako', 40, true, 'hola');



function sumar( a, b) {
    return a + b;
}

const sumar2 = (a,b) => a + b;
    

function getRandom() {
    return Math.random();
}

const GetRandom2 = () => Math.random(); 

console.log( sumar2(2,2) );
console.log( getRandom() );
console.log ( GetRandom2() );