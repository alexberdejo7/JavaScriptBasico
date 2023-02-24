class Persona {
    // Solo se permite un constructor por clase pero podemos usar un esattico
    static porObjeto({nombre, pais}) {
        return new Persona(nombre, pais);
    }
    constructor (nombre, pais) {
        this.nombre = nombre;
        this.pais = pais;

    }

    getInfo() {
        console.log(`info ${this.nombre}, ${this.pais}`)
    }

}

const nombre1 = 'meli', pais1 = 'mexico';
const kako = {
    nombre : 'kako',
    pais : 'mex'
}


const persona1 = new Persona( nombre1, pais1);
const persona2 = Persona.porObjeto(kako);


persona1.getInfo()
persona2.getInfo();