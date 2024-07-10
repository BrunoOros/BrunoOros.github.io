class FiguraCentral2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.tamX = random(100, 200);
    this.tamY = random(100, 250); // Tamaño inicial en Y

    this.graficoFigura2 = createGraphics(300, 300);
    this.figuras = this.crearFiguras();

    this.figuraSeleccionada = random(this.figuras);
    this.dibujarFigura();
  }

  /* actualizarTam(amplitud) {
   this.tamY = map(amplitud, AMP_MIN, AMP_MAX, 100, 200);
   this.dibujarFigura();
   }*/

  dibujarFigura() {
    //this.graficoFigura2.background(0);
    this.graficoFigura2.clear();
    this.graficoFigura2.fill(colorFiguraCentro2);
    this.graficoFigura2.rectMode(CENTER);
    this.graficoFigura2.noStroke();
    this.figuraSeleccionada(this.graficoFigura2);
  }

  crearFiguras() {
    return [


      (grafico) => {

      grafico.beginShape();
      // Óvalo

      grafico.ellipse(150, 150, this.tamX, this.tamY);
      grafico.endShape(CLOSE);
    }
    ,
      (grafico) => {

      grafico.beginShape();
      // rect

      grafico.rect(150, 150, this.tamX, this.tamY);
      grafico.endShape(CLOSE);
    }
    ];
  }

  dibujar() {
    image(this.graficoFigura2, this.x, this.y);
  }
}
