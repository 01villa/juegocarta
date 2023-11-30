'use strict'

function Jugador(apodo, vidas, valorCarta) {
    this.apodo = apodo;
    this.vidas = vidas;
    this.valorCarta = valorCarta;
  
    this.reducirVidas = function () {
      if (this.vidas > 0) {
        this.vidas--;
       alert(`¡${this.apodo} perdió una vida! Vidas restantes: ${this.vidas}`);
      } else {
        alert(`${this.apodo} ya no tiene vidas.`);
      }
    };
  
    this.mostrarInfo = function () {
      alert(`Apodo: ${this.apodo} - Vidas restantes: ${this.vidas}`);
    };
  }
  
  // Ejemplo de uso:
  const nuevoJugador = new Jugador('Playerone', 5, 3);
  nuevoJugador.reducirVidas(); // Reduce una vida
  nuevoJugador.mostrarInfo(); // Muestra la información del jugador
  