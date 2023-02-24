class Person { 
// cuantas isntancias
    static  _conteo = 0;
    static get conteo() {
        return Person._conteo + 'instancias';
    }

    static mensaje() {
        console.log(this.nombre);
        console.log('Hola soi un metodo estatico')
    }

    nombre = 0;
    codigo = '';
    apellido = '';
    comida = '';
    constructor( nombre= 'Sin nombre', codigo = 'Sin codigo', apellido = 'Sin Apellido') {
      
        // if (!nombre) throw Error ('errror');

       this.nombre = nombre;
       this.codigo = codigo;
       this.apellido = apellido;

       Person._conteo++;
    }
    // SET NO USAN MISMO NOMBRE 
    // SET PARA ESTABLECER UN VALOR 
    // GET PARA RECUPERAR UN VALOR
    set setcomidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    } 

    get getComidaFavorita() {
        return `La comida de ${ this.nombre} es
         ${this.comida}`
    }

    // Esto es un metodo
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad 
        es ${ this.nombre}`)
    }
}

// instancias
const Kako = new Person('Alex', 'JS', 'Berdejo');
const Loki = new Person('Loki', 'Marvel', 'Asgard');

; 


console.log( Kako);




// Del Metodo
Loki.setcomidaFavorita = 'Tacos'
// Loki.quienSoy();
// console.log(Loki)
// // Esta es la forma correcta de hacer clases    
// console.log(Loki.getComidaFavorita);
// Person._conteo = 2

console.log('conteo statico', Person._conteo)
console.log(Person.conteo);
Person.mensaje();

Person.propiedadexterna = 'asdasaxd'
console.log(Person.propiedadexterna)
console.log(Person)