class FiguraCentral {

  constructor(x, y) {
    this.x = x;
    this.y = y;


    this.graficoFigura= createGraphics(300, 300);
    this.figuras = this.crearFiguras();

    this.figuraSeleccionada = random(this.figuras);
  }

  dibujar() {
    //this.graficoFigura.background(255);
    this.graficoFigura.fill(colorFiguraCentro);
    this.figuraSeleccionada(this.graficoFigura);
    this.graficoFigura.noStroke()
      image(this.graficoFigura, this.x, this.y);
    //blend(this.graficoFigura, 0, 0, 300, 300, this.x - 150, this.y - 150, 300, 300,LIGHTEST);
  }

  crearFiguras() {
    return [
      function() {
      this.graficoFigura.beginShape();

      ////////////LADO IZQUIERDO-/////////////////
      this.graficoFigura.vertex(40, 0);
      this.graficoFigura.bezierVertex(40, 0, 50, 270, 40, 300)

        ////////////LADO ABAJO-/////////////////
        this.graficoFigura.vertex(40, 300);
      this.graficoFigura.bezierVertex(40, 300, 270, 290, 270, 300)

        ////////////LADO DERECHO-/////////////////
        this.graficoFigura.vertex(270, 300);
      this.graficoFigura.bezierVertex(270, 300, 250, 150, 270, 0)

        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(270, 0);
      this.graficoFigura.bezierVertex(270, 0, 150, 15, 40, 0)

        this.graficoFigura.vertex(40, 0);
      this.graficoFigura.endShape();
    }
    ,

      function() {
      this.graficoFigura.beginShape();

      ////////////LADO IZQUIERDO-/////////////////
      this.graficoFigura.vertex(0, 0);
      this.graficoFigura.bezierVertex(0, 0, 15, 150, 0, 300)

        ////////////LADO ABAJO-/////////////////
        this.graficoFigura.vertex(0, 300);
      this.graficoFigura.bezierVertex(0, 300, 150, 285, 300, 300)

        ////////////LADO DERECHO-/////////////////
        this.graficoFigura.vertex(300, 300);
      this.graficoFigura.bezierVertex(300, 300, 285, 150, 300, 0)

        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(300, 0);
      this.graficoFigura.bezierVertex(300, 0, 150, 15, 0, 0)

        this.graficoFigura.vertex(0, 0);
      this.graficoFigura.endShape();
    }
    ,
      function() {
      this.graficoFigura.beginShape();

      ////////////LADO IZQUIERDO-/////////////////
      this.graficoFigura.vertex(50, 0);
      this.graficoFigura.bezierVertex(50, 0, 50, 270, 0, 300)

        ////////////LADO ABAJO-/////////////////
        this.graficoFigura.vertex(0, 300);
      this.graficoFigura.bezierVertex(0, 300, 270, 290, 300, 300)

        ////////////LADO DERECHO-/////////////////
        this.graficoFigura.vertex(300, 300);
      this.graficoFigura.bezierVertex(300, 300, 250, 150, 260, 0)

        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(260, 0);
      this.graficoFigura.bezierVertex(260, 0, 150, 25, 50, 0)

        this.graficoFigura.vertex(50, 0);
      this.graficoFigura.endShape();
    }

    ];
  }
}
