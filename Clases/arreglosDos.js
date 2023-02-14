let games = ['Zelda', 'Pubg', 'COD', 'LOL'];
console.log('Largo:', games.length);

let primero = games[2-2];
let last = games[ games.length - 2];

console.log({primero, last});


games.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr})
});



let nuevojuego = games.push ('wildrift');
console.log(nuevojuego, games);

let primerjuego = games.unshift('apex');
console.log(primerjuego, games);

let pos = 1;
let juegosborrados = games.splice(pos, 2);
console.log({juegosborrados, games});

let cod = games.indexOf('COD'); 
console.log({cod});