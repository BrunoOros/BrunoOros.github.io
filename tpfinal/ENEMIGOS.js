class Enemigos {


  constructor () {
    this.enemigos = [];
    this.numEnemigos = 2;
    this.enemigoAncho = 40;
    this.enemigoAlto = 40;
    this.velocidad = 2;
    
    
  }


  crearEnemigos() {
    //enemigos con posi random por arriba de la pantalla.
    push()
    for (let i = 0; i < this.numEnemigos; i++) {
      let x = random(width - this.enemigoAncho);
      let y = random(-500, -50);
      this.enemigos.push( {x, y, eliminado:false}); // Agrego parametros al array enemigos
    }pop()
  }

  moverEnemigos() {
    for (let i = 0; i < this.enemigos.length; i++) {
      if (!this.enemigos[i].eliminado) { // Solo mover enemigos no eliminados
        if (this.enemigos[i].y < height + this.enemigoAlto) {
          this.enemigos[i].y += this.velocidad;
        }
        if (this.enemigos[i].y  > height + this.enemigoAlto) {
          app.game.estado = "perdiste";
          
        }
      }
    }
  }


  dibujarEnemigos() {
    fill(255, 0, 0);
    for (let i = 0; i < this.enemigos.length; i++) {
      if (!this.enemigos[i].eliminado) {
        rect(this.enemigos[i].x, this.enemigos[i].y, this.enemigoAncho, this.enemigoAlto);
      }
    }
  }
}
