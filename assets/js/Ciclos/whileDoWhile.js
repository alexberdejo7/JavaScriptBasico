const carros = ['Ford', 'Mazda', 'BMW', 'Audi'];
let i = 0;

//  while(i < carros.length) {
//      console.log( carros[1] );
//      // i = 1 + 1
//      i++;
//      // i+=4
//  }


while( carros[i] ) {
    if ( i === 1) {
        // break;
        i++;
        continue
    }

    console.log( carros[1] );
    i++;
    
}

console.warn('do while');
let j = 10;
do {
    console.log( carros[j]);
    j++
} while ( carros[j] );





