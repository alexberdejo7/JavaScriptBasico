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
    


    class Heroe extends Person {
        clan = 'sin clan';

        constructor(nombre, codigo, apellido) {
            super(nombre,codigo,apellido);  // Padre
            this.clan = 'Avengers'
        }

        quienSoy(){
            console.log(`Soy ${this.nombre}, ${this.clan}`)
            super.quienSoy();
        }
    }
    // instancias
    const Loki = new Heroe('Kako', 'Alex', 'JOaquin');

    console.log(Loki)
Loki.quienSoy();