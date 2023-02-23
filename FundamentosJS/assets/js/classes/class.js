class Person { 

    nombre = '';
    codigo = '';
    apellido = '';

    constructor( nombre= 'Sin nombre', codigo = 'Sin codigo', apellido = 'Sin Apellido') {
        // if (!nombre) throw Error ('errror');

       this.nombre = nombre;
       this.codigo = codigo;
       this.apellido = apellido;
    }

    // Esto es un metodo
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${ this.codigo}`)
    }
}


const Kako = new Person('Alex', 'JS', 'Berdejo');
const Loki = new Person('Loki', 'Marvel', 'Asgard');
console.log( Kako);
console.log( Loki);



// Del Metodo
Loki.quienSoy();

// Esta es la forma correcta de hacer clases