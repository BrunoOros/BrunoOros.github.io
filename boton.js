class Boton {

  constructor (x, y, tamX, tamY, texto, incremento) {
    this.x = x;
    this.y = y;
    this.tamX = tamX
      this.tamY = tamY;
    this.estado = "on"
      this.texto = texto;
      this.incremento = incremento;

    this.colores = [color(20), color(120), color(255)];
    this.colorFill = this.colores[0];
  }

  mousePressed() {
    if (mouseX > this.x && mouseX < this.x + this.tamX && mouseY > this.y && mouseY < this.y + this.tamY) {
      this.colorFill = this.colores[2];
      this.evento(this.texto);
    }
  }

  evento(texto) {
    // Incrementa la variable pantalla en la clase App
    app.pantalla += this.incremento;
  }

  actualizar () {
    if (mouseX > this.x && mouseX < this.x + this.tamX && mouseY >this.y && mouseY < this.y + this.tamY) {
      this.colorFill= this.colores[1]
        if (mousePressed == true) {
        this.colorFill = this.colores[2]
          this.evento (this.texto)
          
      }
    } else {
      this.colorFill = this.colores[0]
    }
  }


 // evento(texto) {
    //this.estado==texto
  //}

  dibujar() {
    this.actualizar()
      fill(this.colorFill)
      rect (this.x, this.y, this.tamX, this.tamY)
      text (this.texto, this.x+ this.tamX/4, this.y + this.tamY/2)
  }
  
}

