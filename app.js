class App{

  constructor (){
  this.pantalla=0;
  this.botonInicio = new Boton(width/4, height/2, width/10, height/20, "Iniciar")
  this.botonCreditos = new Boton (width/2, height/2, width/10, height/20, "Creditos")
  
}
  
  dibujar(){
  if(this.pantalla == 0){
    background(255);
    this.botonInicio.dibujar();
    this.botonCreditos.dibujar();
     
  }if(this.pantalla == 1){
    background(155);
    this.botonInicio.dibujar();
    //this.botonCreditos.dibujar();
     
  }if(this.pantalla == 3){
    background(155,0,0);
    this.botonInicio.dibujar();
    //this.botonCreditos.dibujar();
     
  }
  }
  
  //mousePressed (){
  //if(this.mousePressed){
    //if(dist(this.mouseX,this.mouseY, this.botonInicio.x,this.botonInicio.y)){
      
    //this.pantalla ++;
   // }
 // }
  //}
  mousePressed() {
    if (this.pantalla == 0) {
      this.botonInicio.mousePressed();
      this.botonCreditos.mousePressed();
    }
  }
}
