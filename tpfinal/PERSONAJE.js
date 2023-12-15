class Personaje {

  constructor() {
    this.personajeX = width/2;
    this.personajeY = height-50;
    this.balas = [];
  }

  dibujarPersonaje() {
    fill(0, 0, 255);
    rect (this.personajeX, this.personajeY, 40, 40);
  }

  moverPersonaje() {
    if (keyIsDown(LEFT_ARROW) && this.personajeX > 0) {
      this.personajeX -= 7; // Mueve izquierda
    }
    if (keyIsDown(RIGHT_ARROW) && this.personajeX < width - 40) {
      this.personajeX += 7; // Mueve derecha
    }
  }

  // Magrega una nueva bala al arreglo balas.
  disparar() {
    this.balas.push( {x:this.personajeX + 20, y:this.personajeY});
  }

  // mover balas ya cargadas en el arreglo
  dispararBala() {
    for (let i = 0; i < this.balas.length; i++) {
      // dibuja bala
      fill(255);
      rect(this.balas[i].x, this.balas[i].y, 5, 15);

      // mueve bala
      this.balas[i].y -= 10;
    }
  }
}
