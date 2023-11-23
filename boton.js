class Boton {

  constructor() {
  }

  dibujarBoton(forma, x, y, tam, siguiente) {
    if (forma == "circular") {
      ellipse (x, y, tam);
      if (mouseIsPressed && on) {
        if (dist(mouseX, mouseY, x, y)<tam/2) {
          app.pantalla = siguiente;
          on=false;
        }
      }
    }
  }
}
