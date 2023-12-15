let app
let on = false;


function setup() {
  createCanvas (windowWidth, windowHeight);
  app = new App();
}


function draw() {
  app.dibujarPantallas();
}

function mouseMoved() {
  //app.boton.mouseMoved();
  on=true;
}

function keyPressed() {
  game.keyPressed();
}
