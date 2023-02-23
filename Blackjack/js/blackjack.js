(() => {
    'use strict'
   
    let deck         = [];
    const tipos      = ['C','D','H','S'];
    const specials = ['A','J','Q','K'];

    let puntosJugadores = [];


    // Referencias Queri
    const btnPedir = document.querySelector('#btnPedir'),
          btnPausa = document.querySelector('#btnPausa'),
          btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas')
    const puntosHTML = document.querySelectorAll('small');
   
    
// Esta funcion inicia el juego
    const inicializarJuego = ( numJugadores = 2) => {
       deck = createDeck();
       
       puntosJugadores = [];
       for( let i = 0; i< numJugadores; i++) {
            puntosJugadores.push(0);
       }
       puntosHTML.forEach( elem => elem.innerText = 0)
       divCartasJugadores.forEach( elem => elem.innerHTML = '')


      //Enable buttons
       btnPedir.disabled = false;
       btnPausa.disabled = false;
    


    }


// Crear deck
    const createDeck = () => {
        deck = [];
        for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
        }
    
        for (let tipo of tipos) {
        for (let esp of specials) {
            deck.push(esp + tipo);
        }
        }
        deck = _.shuffle(deck); // eliminamos el punto y coma al final de esta línea
    }



    // Permite tomar una nueva Carta

    const getCard = () => {
        if (deck.length === 0) {
            throw 'El mazo está vacío';
        }
        return deck.pop();
    }


    const valorCarta = ( card ) => {
        const valor = card.substring(0, card.length - 1);
        return ( isNaN( valor ) ) ? 
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;
    }

    


 // Turno 0 primer jugador y el ultimo sera la pc
    const acumularPuntos = (card, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( card );
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = (card, turno) => {
        const imgCarta = document.createElement('img');
            imgCarta.src = `assets/Cartas/${ card  }.png`; //Carta
            imgCarta.classList.add('carta');  // añadir de CSS
            divCartasJugadores[turno].append( imgCarta);
           
    }



    const determinarGanador = () => {

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

        setTimeout(() => {
            if( puntosComputadora === puntosMinimos ) {
                alert('Nadie gana :(');
            } else if ( puntosMinimos > 21 ) {
                alert('Computadora gana')
            } else if( puntosComputadora > 21 ) {
                alert('Jugador Gana');
            } else {
                alert('Computadora Gana')
            }
        }, 100 );

    }

       //   TurnoComputadora
    const TurnoPC = ( puntosMinimos ) => {
        let puntosComputadora = 0;
        do {
            const card = getCard();   
            puntosComputadora = acumularPuntos(card, puntosJugadores.length - 1);
            crearCarta(card, puntosJugadores.length - 1);
            

            } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
            
            determinarGanador();
    }


    // const valor = valorCarta (getCard());
    // console.log({valor});


    // Eventos
    btnPedir.addEventListener('click', () => {
        const card = getCard();
        const puntosJugador = acumularPuntos(card, 0);
        
        crearCarta(card, 0);

        if ( puntosJugador > 21 ) {
            
            btnPedir.disabled = true;
            btnPausa.disabled = true;
            TurnoPC( puntosJugador);
            
        } else if (puntosJugador === 21 ) {
            
            btnPedir.disabled = true;
            btnPausa.disabled = true;
            TurnoPC( puntosJugador);
        }
    }); 

    btnPausa.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnPausa.disabled = true;

        TurnoPC( puntosJugadores[0]);

    })



    btnNuevo.addEventListener('click', () => {
        // Reset variables and UI
        inicializarJuego()
        // console.clear()
        // deck = [];
        createDeck();
       
    });

    // todo borrar


})();























