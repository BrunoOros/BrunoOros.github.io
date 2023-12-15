class App {

  constructor() {
    this.pantalla = 0;
    this.boton = new Boton();
    this.contenido = new Contenido();
    
    this.game = new Game();
  }

  dibujarPantallas() {
    if (this.pantalla == 0) {
      
      this.game.reiniciarJuego();
      this.contenido.contenidoPantalla0()
      this.boton.dibujarBoton("circular", width / 2 - 250, height / 2 + 50, 80, 1);
      this.boton.dibujarBoton("circular", width / 2, height / 2 + 50, 80, 2);
      this.boton.dibujarBoton("circular", width / 2 + 250, height / 2 + 50, 80, 3);
    } else if (this.pantalla==1) {
      this.contenido.contenidoPantalla1();
      this.boton.dibujarBoton("circular", 40, 40, 50, 0);
    } else if (this.pantalla==2) {
      this.contenido.contenidoPantalla2();
      this.boton.dibujarBoton("circular", 40,40,50,0);
    } else if (this.pantalla==3) {
      this.contenido.contenidoPantalla3();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 4);
    } else if (this.pantalla==4) {
      this.contenido.contenidoPantalla4();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 5);
    } else if (this.pantalla==5) {
      this.contenido.contenidoPantalla5();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 6);
    } else if (this.pantalla==6) {
      this.contenido.contenidoPantalla6();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 27);
    } else if (this.pantalla==7) {
      this.contenido.contenidoPantalla7();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 8);
    } else if (this.pantalla==8) {
      this.contenido.contenidoPantalla8();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 9);
    } else if (this.pantalla==9) {
      this.contenido.contenidoPantalla9();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 10);
    } else if (this.pantalla==10) {
      this.contenido.contenidoPantalla10();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 11);
    } else if (this.pantalla==11) {
      this.contenido.contenidoPantalla11();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 12);
    } else if (this.pantalla==12) {
      this.contenido.contenidoPantalla12();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 13);
    } else if (this.pantalla==13) {
      this.contenido.contenidoPantalla13();
      this.boton.dibujarBoton("circular", 480,600, 50, 14);
      this.boton.dibujarBoton("circular", 1350, 600, 50, 21);
    } else if (this.pantalla==14) {
      this.contenido.contenidoPantalla14();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 15);
    } else if (this.pantalla==15) {
      this.contenido.contenidoPantalla15();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 16);
    } else if (this.pantalla==16) {
      this.contenido.contenidoPantalla16();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 17);
    } else if (this.pantalla==17) {
      this.contenido.contenidoPantalla17();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 18);
    } else if (this.pantalla==18) {
      this.contenido.contenidoPantalla18();
      this.boton.dibujarBoton("circular", 480,600, 50, 19);
      this.boton.dibujarBoton("circular", 1350, 600, 50, 20);
    } else if (this.pantalla==19) {
      this.contenido.contenidoPantalla19();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 26);
    } else if (this.pantalla==20) {
      this.contenido.contenidoPantalla20();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 26);
    } else if (this.pantalla==21) {
      this.contenido.contenidoPantalla21();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 22);
    } else if (this.pantalla==22) {
      this.contenido.contenidoPantalla22();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 23);
    } else if (this.pantalla==23) {
      this.contenido.contenidoPantalla23();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 24);
    } else if (this.pantalla==24) {
      this.contenido.contenidoPantalla24();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 25);
    } else if (this.pantalla==25) {
      this.contenido.contenidoPantalla25();
      this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 26);
    } else if (this.pantalla==26) {
      this.contenido.contenidoPantalla26();
      this.boton.dibujarBoton("circular", 40,40,50,0);
    } else if (this.pantalla==27) {
      this.contenido.contenidoPantalla27();
      //this.boton.dibujarBoton("circular", width /2 +450, height / 2, 100, 7);
      
      //this.game.pantallas()
      //this.game.keyPressed()
    }
  }
}
