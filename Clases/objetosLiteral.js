let personaje = {
    nombre: 'tony stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '1034, 3434',
        ubicacion: 'California'
    }
};


console.log( personaje);
console.log('Nombre', personaje.nombre );
console.log('Nombre', personaje['nombre'] );
console.log('Edad', personaje['edad']);

console.log('Coords', personaje.coords.lat);
console.log('Lat', personaje.coords.lat);

console.log('No.Trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[ personaje.trajes.length -1]);

const x = 'vivo';
console.log('Vivo', personaje.vivo);




// Mas detales 