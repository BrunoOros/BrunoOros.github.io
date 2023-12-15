class Game{

constructor(){

this.personaje = new Personaje();
    this.enemigos = new Enemigos();


    this.contador = this.enemigos.numEnemigos;
    this.estado ="menu";
}

keyPressed() {
    // cambio de vaiable estado para dibujar lo correspondiente del metodo pantallas()
    if (this.estado === "menu" && key == 'i' || key == 'I' ) {
      this.estado = "instrucciones";
    } else if (this.estado == "instrucciones" && key == 'p' || key == 'P') {
      this.estado = "juego";
      this.enemigos.crearEnemigos();
    } else if (this.estado == "juego" && key == ' ' || key == ' ') {
      this.personaje.disparar();
    } else if (this.estado == "perdiste" && key == 'r' || key == 'R') {
      this.reiniciarJuego()
    } else if (this.estado == "ganaste" && key == 'c' || key == 'C') {
      app.pantalla = 7;
    }
  }



 pantallas() {
push()
    if (this.estado === "menu") {
      background(0);
      fill(255, 255, 255);
      stroke (50, 150, 50);
      strokeWeight(8);
      textSize(62);
      textAlign(CENTER, CENTER);
      text("¡Bienvenido al Reto!", width / 2, height / 2 - 50);
      textSize(34);
      text("Presiona 'I' para ver las instrucciones", width / 2, height / 2 + 50);
pop()      
    } else if (this.estado=== "instrucciones") {
push()
      background(0);
      fill(255, 255, 255);
      stroke (50, 150, 50);
      strokeWeight(8);
      textSize(52);
      textAlign(CENTER, CENTER);
      text("´SPACE´ para eliminar a los enemigos antes que te invadan!", width / 2, height / 2 - 150);
      text("Mueve tu nave con ´LEFT´ Y ´RIGHT´", width / 2, height / 2 -50);
      textSize(34);
      text("Presiona 'P' para comenzar el juego.", width / 2, height / 2 + 150);
pop()      
    } else if (this.estado === "juego") {
push()      
      background(0);
      this.personaje.dibujarPersonaje();
      this.personaje.moverPersonaje();
      this.personaje.dispararBala();
      this.enemigos.dibujarEnemigos();
      this.enemigos.moverEnemigos();
      this.verificarColisiones();
      

      fill(255);
      stroke(50, 150, 50);
      strokeWeight(8);
      textSize(24);
      textAlign(RIGHT);
      text("Enemigos restantes: " + this.contador, width - 10, 30);
pop()      
    } else if (this.estado === "perdiste") {
push()      
      background(0);
      fill(255, 255, 255);
      stroke (150, 50, 50);
      strokeWeight(8);
      textSize(62);
      textAlign(CENTER, CENTER);
      text("¡Perdiste!", width / 2, height / 2 - 50);
      textSize(50)
        text("invadieron tu zona", width / 2, height / 2 + 40);
      textSize(34);
      text("Presiona 'R' para reiniciar.", width / 2, height / 2 + 100);
pop()      
    } else if (this.estado === "ganaste") {
push()      
      background(0);
      fill(255, 255, 255);
      stroke (50, 150, 50);
      strokeWeight(8);
      textSize(62);
      textAlign(CENTER, CENTER);
      text("¡Ganaste!", width / 2, height / 2 - 50);
      textSize(34);
      text("Presiona 'c' para continuar", width / 2, height / 2 + 100);
pop()    
  }
  }


  verificarColisiones() {
    for (let i = this.personaje.balas.length - 1; i >= 0; i--) {
      for (let j = this.enemigos.enemigos.length - 1; j >= 0; j--) {
        if (this.personaje.balas[i] && this.enemigos.enemigos[j]) {
          if (
            //colision entre bala y enemigo
            this.personaje.balas[i].x < this.enemigos.enemigos[j].x + this.enemigos.enemigoAncho &&
            this.personaje.balas[i].x + 5 > this.enemigos.enemigos[j].x &&
            this.personaje.balas[i].y < this.enemigos.enemigos[j].y + this.enemigos.enemigoAlto &&
            this.personaje.balas[i].y + 15 > this.enemigos.enemigos[j].y
            ) {
            // Elimina la bala y marca el enemigo como eliminado
            this.personaje.balas.splice(i, 1);
            this.enemigos.enemigos[j].eliminado = true;
            this.contador--;
          }
        }
      }
    }
    //si todos los enemigos mueren te lleva a pantalla ganaste.
    if (this.enemigos.enemigos.every((enemigo) => enemigo.eliminado)) {
      this.estado = "ganaste";
    }
  }

  reiniciarJuego() {
    this.enemigos.enemigos = [];
    //this.enemigos.numEnemigos = 3;
    this.enemigos.crearEnemigos();
    this.estado = "menu";
    this.contador = this.enemigos.numEnemigos;
    this.personaje.personajeX = width / 2;
    this.personaje.personajeY = height - 50;
  }










}
