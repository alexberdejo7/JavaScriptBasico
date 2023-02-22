// 2c two of club
// 2d two of diamonds
// 2h two of heeart
// 2s two of spades

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];
const deliveredCards = new Set();

let puntosJugador = 0,
    puntosComputadora = 0;


// Referencias Queri
const btnPedir = document.querySelector('#btnPedir');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasPC = document.querySelector('#pc-cartas');
const puntosHTML = document.querySelectorAll('small');
const btnPausa = document.querySelector('#btnPausa')
const btnNuevo = document.querySelector('#btnNuevo')




const createDeck = () => {
    for( let i = 2; i <= 10; i++) {
        for( let tipo of tipos) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos) {
        for( let esp of specials) {
            deck.push(esp + tipo );
        }
    }




    console.log( deck );
    deck = _.shuffle(deck);
    console.log( deck );
    return deck;

}

createDeck();


// Permite tomar una nueva carta

const getCard = () => {
    if (deck.length === 0) {
        throw 'El mazo está vacío';
        return null;
    }
// Obtener la siguiente carta
    const card = deck.pop();

// Verificar si la carta ya ha sido entregada
    if (deliveredCards.has(card)) {
        // console.log(`La carta ${card} ya ha sido entregada`);
        deck.unshift(card);
        return getCard();
    }

    deliveredCards.add(card);

    // console.log(`Se entregó la carta ${card}`);
    return card;
};



// getCard();
// const valorCarta = ( card ) => {
    
// }

    // const valor = card.substring(0, card.length - 1);
    // console.log( {valor});

//     if( isNaN(valor) ) {
//         // console.log('NO ES UN numero')
//         puntos = ( valor === 'A') ? 11 : 10;
//     } else { 
//         // console.log('si es numero') ;
//         puntos = valor * 1;
//     }
//     console.log(puntos);
// }
    

const valorCarta = (card) => {
    const valor = parseInt(card);
  
    return ( isNaN(valor) ) ? (card === 'A' ? 11 : 10) : valor;
    
  }
 

//   TurnoComputadora
const TurnoPC = ( puntosMinimos ) => {
    do {
    const card = getCard();

    puntosComputadora = puntosComputadora + valorCarta ( card );
    puntosHTML[1].innerText=puntosComputadora  //Puntaje sumado   
    
        // <img class="carta" src="./assets/cartas/10C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ card  }.png`; // carta
    imgCarta.classList.add('carta');  // añadir de CSS
    divCartasPC.append( imgCarta);

        if (puntosMinimos > 21 ) {
            break;
        }

    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));




    setTimeout(() => {
        
        if( puntosComputadora === puntosMinimos) {
            alert(' empate!')
        } else if ( puntosMinimos > 21 ) {
            alert('Perdiste!')

        } else if ( puntosComputadora > 21 ) {
            alert('Ganaste!')
        }
    }, 80 );
}


// const valor = valorCarta (getCard());
// console.log({valor});


// Eventos
btnPedir.addEventListener('click', () => {
    const card = getCard();

    puntosJugador = puntosJugador + valorCarta ( card );
    puntosHTML[0].innerText=puntosJugador  //Puntaje sumado   
    console.log(puntosJugador);

    // <img class="carta" src="./assets/cartas/10C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ card  }.png`; // carta
    imgCarta.classList.add('carta');  // añadir de CSS
    divCartasJugador.append( imgCarta);




    if ( puntosJugador > 21 ) {
        
        btnPedir.disabled = true;
        btnPausa.disabled = true;
        TurnoPC( puntosJugador);
        
    } else if (puntosJugador === 21 ) {
        
        btnPedir.disabled = true;
        btnPausa.disabled = true;
        TurnoPC( puntosJugador);
        alert('21, Ganaste!');
    }
}); 

btnPausa.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnPausa.disabled = true;

    TurnoPC( puntosJugador);

})



btnNuevo.addEventListener('click', () => {
    // Reset variables and UI
    console.clear()
    deck = [];
    createDeck();
    deliveredCards.clear();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    divCartasJugador.innerHTML = '';
    divCartasPC.innerHTML = '';

    // Enable buttons
    btnPedir.disabled = false;
    btnPausa.disabled = false;
});

// todo borrar
``













