
class Singleton {

    static instancia;  // null, undeined
    nombre = '';

    constructor( nombre = '') {
            // console.log(a)    // undefined
            // console.log(!a)   // true
            // console.log(!!a)  // false
        if( !!Singleton.instancia) {
            return Singleton.instancia;
        }


        Singleton.instancia1 = this;
        this.nombre = nombre;

    }

}


const instancia1 = new Singleton('Ale');
const instancia2 = new Singleton('Ale2');
const instancia3 = new Singleton('Ale3');


console.log(`nombre en la 
instancia es: ${instancia1.nombre}`)
console.log(`nombre en la 
instancia es: ${instancia2.nombre}`)
console.log(`nombre en la 
instancia3 es: ${instancia3.nombre}`)