////////////FIGURAs/////////////////

class Figuras {

  constructor(x, y) {
    this.x = x;
    this.y = y;


    this.graficoFigura = createGraphics(700, 650);
    this.figuras = this.crearFiguras();

    this.figuraSeleccionada = random(this.figuras);
  }

  dibujar() {
    //this.graficoFigura.background(185);
    this.graficoFigura.noStroke();
    this.graficoFigura.fill(colorFiguras);
    this.figuraSeleccionada(this.graficoFigura);

    //image(this.graficoFigura, width/2,height/2,700,650);
    blend(this.graficoFigura, 0, 0, 700, 650, 0, 0, 700, 650, SCREEN);
  }

  crearFiguras() {


    return [
      function() { ///////variante 1////////
      //===================1==========
      this.graficoFigura.beginShape();
      ////////////LADO IZQUIERDO-/////////////////
      this.graficoFigura.vertex(10, 10);
      this.graficoFigura.bezierVertex(10, 10, 10, 10, 10, 300)
        ////////////LADO ABAJO-/////////////////
        this.graficoFigura.vertex(10, 300);
      this.graficoFigura.bezierVertex(10, 300, 80, 230, 250, 315)
        ////////////LADO DERECHA-/////////////////
        this.graficoFigura.vertex(250, 315);
      this.graficoFigura.bezierVertex(250, 315, 200, 100, 300, 10)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(300, 10);
      this.graficoFigura.bezierVertex(300, 10, 30, 10, 10, 10)
        this.graficoFigura.vertex(10, 10);
      this.graficoFigura.endShape();

      //=================2====================
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(350, 10);
      this.graficoFigura.bezierVertex(350, 10, 400, 10, 300, 340)
        this.graficoFigura.vertex(300, 340);
      this.graficoFigura.vertex(650, 300);
      this.graficoFigura.vertex(650, 10);
      this.graficoFigura.vertex(350, 10);
      this.graficoFigura.endShape();

      //=============3============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(10, 350);
      this.graficoFigura.vertex(10, 630);
      this.graficoFigura.vertex(250, 630);
      this.graficoFigura.vertex(250, 350);
      this.graficoFigura.bezierVertex(250, 350, 50, 370, 10, 350)
        this.graficoFigura.vertex(10, 350);
      this.graficoFigura.endShape();

      //=============4============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(270, 350);
      this.graficoFigura.vertex(290, 630);
      this.graficoFigura.vertex(650, 630);
      this.graficoFigura.vertex(650, 350);
      this.graficoFigura.bezierVertex(650, 350, 280, 360, 270, 350)
        this.graficoFigura.vertex(270, 350);
      this.graficoFigura.endShape();
    }
    ,

      function() {///////variante 2////////
      //===================1==========
      this.graficoFigura.beginShape();
      ////////////LADO IZQUIERDO-/////////////////
      this.graficoFigura.vertex(10, 10);
      this.graficoFigura.bezierVertex(10, 10, 10, 10, 10, 300)
        ////////////LADO ABAJO-/////////////////
        this.graficoFigura.vertex(10, 300);
      this.graficoFigura.bezierVertex(10, 300, 50, 230, 350, 330)
        ////////////LADO DERECHA-/////////////////
        this.graficoFigura.vertex(350, 330);
      this.graficoFigura.bezierVertex(350, 330, 200, 100, 300, 10)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(300, 10);
      this.graficoFigura.bezierVertex(300, 10, 30, 10, 10, 10)
        this.graficoFigura.vertex(10, 10);
      this.graficoFigura.endShape();

      //=================2====================
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(350, 10);
      this.graficoFigura.bezierVertex(350, 10, 400, 100, 370, 340)
        this.graficoFigura.vertex(370, 340);
      this.graficoFigura.vertex(650, 300);
      this.graficoFigura.vertex(650, 10);
      this.graficoFigura.vertex(350, 10);
      this.graficoFigura.endShape();

      //=============3============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(50, 350);
      this.graficoFigura.vertex(25, 630);
      this.graficoFigura.vertex(340, 630);
      this.graficoFigura.bezierVertex(340, 630, 260, 390, 370, 360)
        this.graficoFigura.vertex(370, 360);
      this.graficoFigura.bezierVertex(370, 360, 50, 380, 50, 350)
        this.graficoFigura.vertex(50, 350);
      this.graficoFigura.endShape();

      //=============4============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(400, 350);
      this.graficoFigura.vertex(410, 630);
      this.graficoFigura.vertex(650, 630);
      this.graficoFigura.vertex(650, 350);
      this.graficoFigura.bezierVertex(650, 350, 420, 360, 410, 350)
        this.graficoFigura.vertex(400, 350);
      this.graficoFigura.endShape();
    }
    ,

      function() { ///////variante 3////////
      //===================1==========
      this.graficoFigura.beginShape();
      ////////////LADO IZQUIERDO-/////////////////
      this.graficoFigura.vertex(10, 10);
      this.graficoFigura.bezierVertex(10, 10, 10, 10, 10, 300)
        ////////////LADO ABAJO-/////////////////
        this.graficoFigura.vertex(10, 400);

      ////////////LADO DERECHA-/////////////////
      this.graficoFigura.vertex(400, 280);
      this.graficoFigura.bezierVertex(400, 280, 200, 100, 300, 10)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(300, 10);
      this.graficoFigura.bezierVertex(300, 10, 30, 10, 10, 10)
        this.graficoFigura.vertex(10, 10);
      this.graficoFigura.endShape();

      //=================2====================
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(350, 10);
      this.graficoFigura.bezierVertex(350, 10, 400, 100, 410, 280)
        this.graficoFigura.vertex(410, 280);
      this.graficoFigura.vertex(650, 300);
      this.graficoFigura.vertex(650, 10);
      this.graficoFigura.vertex(350, 10);
      this.graficoFigura.endShape();

      //=============3============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(50, 430);
      this.graficoFigura.vertex(40, 630);
      this.graficoFigura.vertex(340, 630);
      this.graficoFigura.bezierVertex(340, 630, 280, 400, 400, 320)
        this.graficoFigura.vertex(400, 320);
      this.graficoFigura.bezierVertex(400, 320, 80, 380, 50, 430)
        this.graficoFigura.vertex(50, 430);
      this.graficoFigura.endShape();

      //=============4============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(430, 320);
      this.graficoFigura.vertex(410, 630);
      this.graficoFigura.vertex(650, 630);
      this.graficoFigura.vertex(640, 370);
      this.graficoFigura.bezierVertex(640, 370, 450, 360, 430, 320)
        this.graficoFigura.vertex(430, 320);
      this.graficoFigura.endShape();
    }
    ,

      function() { ///////variante 4////////
      //===================1==========
      this.graficoFigura.beginShape();
      ////////////LADO IZQUIERDO-/////////////////
      this.graficoFigura.vertex(50, 50);

      ////////////LADO ABAJO-/////////////////
      this.graficoFigura.vertex(50, 290);

      ////////////LADO DERECHA-/////////////////
      this.graficoFigura.vertex(350, 280);
      this.graficoFigura.bezierVertex(350, 280, 260, 200, 300, 10)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(300, 10);
      this.graficoFigura.bezierVertex(300, 10, 30, 10, 50, 50)
        this.graficoFigura.vertex(50, 50);
      this.graficoFigura.endShape();

      //=================2====================
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(350, 10);
      this.graficoFigura.bezierVertex(350, 10, 400, 100, 390, 280)
        this.graficoFigura.vertex(390, 280);
      this.graficoFigura.vertex(650, 300);
      this.graficoFigura.vertex(650, 10);
      this.graficoFigura.vertex(350, 10);
      this.graficoFigura.endShape();

      //=============3============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(50, 430);
      this.graficoFigura.vertex(40, 630);
      this.graficoFigura.vertex(340, 630);
      this.graficoFigura.bezierVertex(340, 630, 340, 400, 360, 300)
        this.graficoFigura.vertex(360, 300);
      this.graficoFigura.bezierVertex(360, 300, 80, 380, 50, 430)
        this.graficoFigura.vertex(50, 430);
      this.graficoFigura.endShape();

      //=============4============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(365, 280);
      this.graficoFigura.vertex(410, 630);
      this.graficoFigura.vertex(650, 630);
      this.graficoFigura.bezierVertex(650, 630, 630, 560, 640, 370)
        this.graficoFigura.vertex(640, 370);
      this.graficoFigura.bezierVertex(640, 370, 450, 360, 365, 280)
        this.graficoFigura.vertex(365, 280);
      this.graficoFigura.endShape();
    }
    ,

      function() { ///////variante 5////////
      //===================1==========
      this.graficoFigura.beginShape();
      ////////////LADO IZQUIERDO-/////////////////
      this.graficoFigura.vertex(50, 50);

      ////////////LADO ABAJO-/////////////////
      this.graficoFigura.vertex(50, 390);

      ////////////LADO DERECHA-/////////////////
      this.graficoFigura.vertex(350, 330);
      this.graficoFigura.bezierVertex(350, 330, 260, 200, 300, 10)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(300, 10);
      this.graficoFigura.bezierVertex(300, 10, 30, 10, 50, 50)
        this.graficoFigura.vertex(50, 50);
      this.graficoFigura.endShape();

      //=================2====================
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(350, 10);
      this.graficoFigura.bezierVertex(350, 10, 400, 100, 390, 330)
        this.graficoFigura.vertex(390, 330);
      this.graficoFigura.vertex(650, 300);
      this.graficoFigura.vertex(650, 10);
      this.graficoFigura.vertex(350, 10);
      this.graficoFigura.endShape();

      //=============3============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(50, 430);
      this.graficoFigura.vertex(40, 630);
      this.graficoFigura.vertex(340, 630);
      this.graficoFigura.bezierVertex(340, 630, 340, 400, 360, 380)
        this.graficoFigura.vertex(360, 380);
      this.graficoFigura.bezierVertex(360, 380, 80, 380, 50, 430)
        this.graficoFigura.vertex(50, 430);
      this.graficoFigura.endShape();

      //=============4============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(365, 350);
      this.graficoFigura.vertex(410, 630);
      this.graficoFigura.vertex(650, 630);
      this.graficoFigura.bezierVertex(650, 630, 630, 560, 640, 370)
        this.graficoFigura.vertex(640, 370);
      this.graficoFigura.bezierVertex(640, 370, 450, 360, 365, 350)
        this.graficoFigura.vertex(365, 350);
      this.graficoFigura.endShape();
    }
    ,

      function() { ///////variante 6////////
      //===================1==========
      this.graficoFigura.beginShape();
      ////////////LADO IZQUIERDO-/////////////////
      this.graficoFigura.vertex(50, 50);

      ////////////LADO ABAJO-/////////////////
      this.graficoFigura.vertex(50, 390);

      ////////////LADO DERECHA-/////////////////
      this.graficoFigura.vertex(370, 330);
      this.graficoFigura.bezierVertex(370, 330, 385, 250, 380, 20)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(380, 20);
      this.graficoFigura.bezierVertex(380, 20, 30, 10, 50, 50)
        this.graficoFigura.vertex(50, 50);
      this.graficoFigura.endShape();

      //=================2====================
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(390, 10);
      this.graficoFigura.bezierVertex(390, 10, 400, 100, 390, 330)
        this.graficoFigura.vertex(390, 330);
      this.graficoFigura.vertex(650, 290);
      this.graficoFigura.vertex(650, 10);
      this.graficoFigura.vertex(390, 10);
      this.graficoFigura.endShape();

      //=============3============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(50, 430);
      this.graficoFigura.vertex(40, 630);
      this.graficoFigura.vertex(340, 630);
      this.graficoFigura.bezierVertex(340, 630, 340, 400, 360, 380)
        this.graficoFigura.vertex(360, 380);
      this.graficoFigura.bezierVertex(360, 380, 80, 380, 50, 430)
        this.graficoFigura.vertex(50, 430);
      this.graficoFigura.endShape();

      //=============4============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(375, 350);
      this.graficoFigura.bezierVertex(375, 350, 350, 480, 410, 630)
        this.graficoFigura.vertex(410, 630);
      this.graficoFigura.vertex(650, 630);
      this.graficoFigura.bezierVertex(650, 630, 630, 560, 640, 370)
        this.graficoFigura.vertex(640, 370);
      this.graficoFigura.bezierVertex(640, 370, 450, 360, 375, 350)
        this.graficoFigura.vertex(375, 350);
      this.graficoFigura.endShape();
    }
    ,

      function() { ///////variante 7////////
      //===================1==========
      this.graficoFigura.beginShape();
      ////////////LADO IZQUIERDO-/////////////////
      this.graficoFigura.vertex(50, 50);

      ////////////LADO ABAJO-/////////////////
      this.graficoFigura.vertex(30, 330);
      this.graficoFigura.bezierVertex(30, 330, 200, 300, 370, 350)
        ////////////LADO DERECHA-/////////////////
        this.graficoFigura.vertex(370, 350);
      this.graficoFigura.bezierVertex(370, 330, 340, 250, 350, 20)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(350, 20);
      this.graficoFigura.bezierVertex(350, 20, 30, 10, 50, 50)
        this.graficoFigura.vertex(50, 50);
      this.graficoFigura.endShape();

      //=================2====================
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(390, 10);
      this.graficoFigura.bezierVertex(390, 10, 420, 180, 390, 330)
        this.graficoFigura.vertex(390, 330);
      this.graficoFigura.bezierVertex(390, 330, 420, 300, 650, 290)
        this.graficoFigura.vertex(650, 290);
      this.graficoFigura.vertex(650, 10);
      this.graficoFigura.vertex(390, 10);
      this.graficoFigura.endShape();

      //=============3============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(50, 340);
      this.graficoFigura.vertex(40, 630);
      this.graficoFigura.vertex(340, 630);
      this.graficoFigura.bezierVertex(340, 630, 340, 400, 360, 380)
        this.graficoFigura.vertex(360, 380);
      this.graficoFigura.bezierVertex(360, 380, 120, 330, 50, 340)
        this.graficoFigura.vertex(50, 340);
      this.graficoFigura.endShape();

      //=============4============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(410, 390);
      this.graficoFigura.bezierVertex(375, 350, 430, 480, 410, 630)
        this.graficoFigura.vertex(410, 630);
      this.graficoFigura.vertex(650, 630);
      this.graficoFigura.bezierVertex(650, 630, 630, 560, 640, 400)
        this.graficoFigura.vertex(640, 400);
      this.graficoFigura.bezierVertex(640, 400, 620, 460, 410, 390)
        this.graficoFigura.vertex(410, 390);
      this.graficoFigura.endShape();
    }
    ,

      function() { ///////variante 8////////
      //===================1==========
      this.graficoFigura.beginShape();
      ////////////LADO IZQUIERDO-/////////////////
      this.graficoFigura.vertex(50, 50);

      ////////////LADO ABAJO-/////////////////
      this.graficoFigura.vertex(30, 330);
      this.graficoFigura.bezierVertex(30, 330, 180, 300, 370, 350)
        ////////////LADO DERECHA-/////////////////
        this.graficoFigura.vertex(370, 350);
      this.graficoFigura.bezierVertex(370, 330, 340, 250, 350, 20)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(350, 20);
      this.graficoFigura.bezierVertex(350, 20, 30, 10, 50, 50)
        this.graficoFigura.vertex(50, 50);
      this.graficoFigura.endShape();

      //=================2====================
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(390, 10);
      this.graficoFigura.bezierVertex(390, 10, 350, 130, 390, 360)
        this.graficoFigura.vertex(390, 360);
      this.graficoFigura.bezierVertex(390, 360, 420, 365, 650, 350)
        this.graficoFigura.vertex(650, 350);
      this.graficoFigura.vertex(650, 10);
      this.graficoFigura.vertex(390, 10);
      this.graficoFigura.endShape();

      //=============3============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(50, 340);
      this.graficoFigura.vertex(40, 630);
      this.graficoFigura.vertex(340, 600);
      this.graficoFigura.bezierVertex(340, 600, 380, 400, 360, 380)
        this.graficoFigura.vertex(360, 380);
      this.graficoFigura.bezierVertex(360, 380, 120, 330, 50, 340)
        this.graficoFigura.vertex(50, 340);
      this.graficoFigura.endShape();

      //=============4============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(370, 390);
      this.graficoFigura.bezierVertex(370, 390, 430, 480, 410, 580)
        this.graficoFigura.vertex(410, 580);
      this.graficoFigura.vertex(650, 630);
      this.graficoFigura.bezierVertex(650, 630, 630, 560, 640, 400)
        this.graficoFigura.vertex(640, 400);
      this.graficoFigura.bezierVertex(640, 400, 580, 360, 370, 390)
        this.graficoFigura.vertex(370, 390);
      this.graficoFigura.endShape();
    }
    ,

      function() { ///////variante 9////////
      //===================1==========
      this.graficoFigura.beginShape();
      ////////////LADO IZQUIERDO-/////////////////
      this.graficoFigura.vertex(50, 50);

      ////////////LADO ABAJO-/////////////////
      this.graficoFigura.vertex(60, 310);
      this.graficoFigura.bezierVertex(60, 310, 350, 250, 370, 350)
        ////////////LADO DERECHA-/////////////////
        this.graficoFigura.vertex(370, 350);
      this.graficoFigura.bezierVertex(370, 330, 340, 250, 350, 20)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(350, 20);
      this.graficoFigura.bezierVertex(350, 20, 30, 10, 50, 50)
        this.graficoFigura.vertex(50, 50);
      this.graficoFigura.endShape();

      //=================2====================
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(390, 10);
      this.graficoFigura.bezierVertex(390, 10, 440, 330, 390, 360)
        this.graficoFigura.vertex(390, 360);
      this.graficoFigura.bezierVertex(390, 360, 420, 345, 650, 350)
        this.graficoFigura.vertex(650, 350);
      this.graficoFigura.vertex(650, 10);
      this.graficoFigura.vertex(390, 10);
      this.graficoFigura.endShape();

      //=============3============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(50, 340);
      this.graficoFigura.vertex(40, 630);
      this.graficoFigura.vertex(340, 600);
      this.graficoFigura.bezierVertex(340, 600, 300, 470, 360, 380)
        this.graficoFigura.vertex(360, 380);
      this.graficoFigura.bezierVertex(360, 380, 370, 430, 50, 340)
        this.graficoFigura.vertex(50, 340);
      this.graficoFigura.endShape();

      //=============4============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(370, 390);
      this.graficoFigura.bezierVertex(370, 390, 360, 480, 410, 580)
        this.graficoFigura.vertex(410, 580);
      this.graficoFigura.vertex(650, 630);
      this.graficoFigura.bezierVertex(650, 630, 630, 560, 640, 400)
        this.graficoFigura.vertex(640, 400);
      this.graficoFigura.bezierVertex(640, 400, 580, 360, 370, 390)
        this.graficoFigura.vertex(370, 390);
      this.graficoFigura.endShape();
    }
    ,


      function() { ///////variante 10////////
      //===================1==========
      this.graficoFigura.beginShape();
      ////////////LADO IZQUIERDO-/////////////////
      this.graficoFigura.vertex(40, 65);
      this.graficoFigura.bezierVertex(40, 65, 100, 100, 60, 400)
        ////////////LADO ABAJO-/////////////////
        this.graficoFigura.vertex(60, 400);

      ////////////LADO DERECHA-/////////////////
      this.graficoFigura.vertex(350, 280);
      this.graficoFigura.bezierVertex(350, 280, 330, 250, 300, 70)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(300, 70);
      this.graficoFigura.bezierVertex(300, 70, 130, 110, 40, 65)
        this.graficoFigura.vertex(40, 65);
      this.graficoFigura.endShape();

      //=================2====================
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(350, 40);
      this.graficoFigura.bezierVertex(350, 40, 420, 280, 380, 330)
        this.graficoFigura.vertex(380, 330);
      this.graficoFigura.vertex(650, 300);
      this.graficoFigura.vertex(650, 10);
      this.graficoFigura.vertex(350, 40);
      this.graficoFigura.endShape();

      //=============3============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(50, 430);
      this.graficoFigura.vertex(40, 630);
      this.graficoFigura.vertex(340, 630);
      this.graficoFigura.bezierVertex(340, 630, 270, 580, 310, 350)
        this.graficoFigura.vertex(310, 350);
      this.graficoFigura.bezierVertex(310, 350, 80, 380, 50, 430)
        this.graficoFigura.vertex(50, 430);
      this.graficoFigura.endShape();

      //=============4============
      this.graficoFigura.beginShape();


      this.graficoFigura.vertex(340, 320);
      this.graficoFigura.vertex(380, 600);
      this.graficoFigura.vertex(650, 630);
      this.graficoFigura.vertex(640, 370);
      this.graficoFigura.bezierVertex(640, 370, 350, 400, 340, 320)
        this.graficoFigura.vertex(340, 320);
      this.graficoFigura.endShape();
    }
    ];
  }
}
