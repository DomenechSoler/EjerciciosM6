// Seleccionar botones de los jugadores
const botonJugador1 = document.querySelector('#dado1 button');
const botonJugador2 = document.querySelector('#dado2 button');
let contadorJugador1 = 1;
let contadorJugador2 = 1;

function tirarDadoJugador1(event) {
    event.preventDefault();

    // Generar un número aleatorio entre 1 y 6
    const mover = Math.floor(Math.random() * 6) + 1;
    contadorJugador1 = contadorJugador1 + mover;
    console.log('Jugador 1 avanza ' + mover + ' casillas. Total: ' + contadorJugador1);

    // Limpiar casilla anterior
    if (contadorJugador1 - mover > 0) {
        const casillaAnterior = document.querySelector('#c' + (contadorJugador1 - mover));
        casillaAnterior.innerHTML = '';
    }

    // Comprobar si el jugador 1 ha pasado la casilla 20 y reiniciar el contador
    if (contadorJugador1 >= 20) {
        contadorJugador1 = contadorJugador1 - 20;
        console.log('Jugador 1 ha pasado la casilla 20. Total: ' + contadorJugador1);
    }

    // Pintar la nueva casilla
    const casilla = document.querySelector('#c' + contadorJugador1);
    casilla.innerHTML = '<div class="ficha jugador1"></div>';

    // Comprobar si el jugador 1 atrapa al jugador 2
    if (contadorJugador1 === contadorJugador2) {
        const casillaActualJugador2 = document.querySelector('#b' + contadorJugador2);
        casillaActualJugador2.innerHTML = '';
        contadorJugador2 = 0;
        console.log('El jugador 1 ha atrapado al jugador 2.');
    }

    // Comprobar si el jugador 1 llega al final
    if (contadorJugador1 >= 20) {
        alert('¡El jugador 1 ha ganado!');
        reiniciarJuego();
    }
}

function tirarDadoJugador2(event) {
    event.preventDefault();

    // Generar un número aleatorio entre 1 y 6
    const mover = Math.floor(Math.random() * 6) + 1;
    contadorJugador2 = contadorJugador2 + mover;
    console.log('Jugador 2 avanza ' + mover + ' casillas. Total: ' + contadorJugador2);

    // Limpiar casilla anterior
    if (contadorJugador2 - mover > 0) {
        const casillaAnterior = document.querySelector('#b' + (contadorJugador2 - mover));
        casillaAnterior.innerHTML = '';
    }

    // Comprobar si el jugador 2 ha pasado la casilla 20 y reiniciar el contador
    if (contadorJugador2 >= 20) {
        contadorJugador2 = contadorJugador2 - 20;
        console.log('Jugador 2 ha pasado la casilla 20. Total: ' + contadorJugador2);
    }

    // Pintar la nueva casilla
    const casilla = document.querySelector('#b' + contadorJugador2);
    casilla.innerHTML = '<div class="ficha jugador2"></div>';

    // Comprobar si el jugador 2 atrapa al jugador 1
    if (contadorJugador2 === contadorJugador1) {
        const casillaActualJugador1 = document.querySelector('#c' + contadorJugador1);
        casillaActualJugador1.innerHTML = '';
        contadorJugador1 = 0;
        console.log('El jugador 2 ha atrapado al jugador 1.');
    }

    // Comprobar si el jugador 2 llega al final
    if (contadorJugador2 >= 20) {
        alert('¡El jugador 2 ha ganado!');
        reiniciarJuego();
    }
}

function reiniciarJuego() {
    contadorJugador1 = 1;
    contadorJugador2 = 1;

    // Limpiar todas las casillas de ambos jugadores
    for (let i = 1; i <= 20; i++) {
        const casillaJugador1 = document.querySelector('#c' + i);
        casillaJugador1.innerHTML = '';
        const casillaJugador2 = document.querySelector('#b' + i);
        casillaJugador2.innerHTML = '';
    }
}

// Asociar eventos a los botones de los jugadores
botonJugador1.addEventListener('click', tirarDadoJugador1);
botonJugador2.addEventListener('click', tirarDadoJugador2);