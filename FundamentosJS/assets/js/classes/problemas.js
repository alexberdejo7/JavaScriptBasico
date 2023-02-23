const ale = {
    nombre: 'ale',
    edad: 30,
    imprimir() {
        console.log(`nombre: ${ this.nombre} - edad: ${this.edad}`)
    }
}

const pedro = {
    nombre: 'pedro',
    edad: 20,
    imprimir() {
        console.log(`nombre: ${ this.nombre} - edad: ${this.edad}`)
    }
}



// esto se debe crear en ona la palabra new
function Persona(nombre, edad) {
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`nombre: ${ this.nombre} - edad: ${this.edad}`)
    }

}

const maria = new Persona('Maria', 18); 
const dafne = new Persona('dafne', 58); 

maria.imprimir();
dafne.imprimir();
