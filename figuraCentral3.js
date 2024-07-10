class FiguraCentral3 {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.tamY = random(350, 600);
    this.tamX = random(500, 600);

    this.graficoFigura3 = createGraphics(600, 600);
    this.figuras = this.crearFiguras();

    this.figuraSeleccionada = random(this.figuras);
    this.dibujarFigura();
  }

  actualizarTamY(tamY) {
    this.tamY = tamY;
    this.dibujarFigura();
  }

  dibujarFigura() {
    this.graficoFigura3.background(255);
    this.graficoFigura3.clear();
    this.graficoFigura3.fill(colorFiguraCentro3);
    this.graficoFigura3.rectMode(CENTER);
    this.graficoFigura3.noStroke();
    this.figuraSeleccionada(this.graficoFigura3);
  }

  crearFiguras() {
    return [
      (grafico) => {
      grafico.beginShape();
      // Óvalo

      grafico.ellipse(grafico.width / 2, grafico.height / 2, this.tamX, this.tamY);
      grafico.endShape(CLOSE);
    }
    ];
  }

  dibujar() {

    image(this.graficoFigura3, this.x, this.y);
    //blend(this.graficoFigura3, 0, 0, 600, 600, 0, 0, 600, 600, LIGHTEST);
  }
}
