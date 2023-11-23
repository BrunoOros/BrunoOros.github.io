class Contenido {
  constructor() {
    this.imagenes = [];
    this.cargarImagenes();
    
    //this.textos = []; // Agrega un arreglo para almacenar los textos del JSON
    //this.cargarDatos();// Llama al metodo para cargar los datos desde el JSON
  }

  cargarImagenes() {
    for (let i = 0; i < 22; i++) {
      this.imagenes[i] = loadImage ("data/pantalla"+i+".png");
    }
    this.flujo = loadImage ("data/flujo.png");
    this.libro = loadImage ("data/libro.jpg");
  }
  
  //cargarDatos() {
    // Carga el JSON y asigna los textos al arreglo
    //loadJSON("/intento.json", (data) => {
      //this.textos = data.texto;
    //});
  //}

  contenidoPantalla0() {
    background(55);
    textSize(80);
    fill(255)
    text("Sombra Mortal\nAventura Grafica", 600, 180);
    textSize(30);

    text("Creditos/\nInstrucciones", width / 2 - 300, height / 2 + 150);
    text("Flujo", width / 2-30, height / 2 + 150);
    text("Iniciar", width / 2 + 220, height / 2 + 150);
  }

  //PANTALLA CREDITOS
  contenidoPantalla1() {
    background(55);
    image (this.libro, width/2, height/4, 400, 600);
    textSize(18);
    text("inicio", 15, 90);
    textSize(30);
    fill(255)
    text("Autor:BRIGHTFIELD RICHARD\nAlumno:Bruno Nicolás Orosco\nLegajo:85231/8\nTecno Multimedial 1\nInstrucciones:Avanzar presionando\n click sonbre el boton blanco\npara avanzar. En el caso de\n que haya mas de una opcion\n clickear sobre la deseada", 100, 175);
  }
  //PÁNTALLA FLUJO
  contenidoPantalla2() {
    background(116,114,114)
    textSize(18);
    text("inicio", 15, 90);
    textSize(30);
    image (this.flujo, 500, 20, 600, 600);
  }
  
  //PANTALLA AVENTURA
  contenidoPantalla3() {
    textSize(22);
    background(0);
    image(this.imagenes[1], 500, 20, 600, 600);
    fill(255);
    //text(this.textos[0],100,100);
    text("Eres miembro de AES, vuelves de una misión\n en el Extremo Oriente y recibes una llamada urgente\n de tu jefe, T. Te diriges a Washington en tu\n avioneta. Al llegar, te recoge una limusina y T\n te informa de un asunto que no puede esperar,\n interrumpiendo tus vacaciones merecidas.", 500, 680);
  }
  contenidoPantalla4() {
    background(0);
    image(this.imagenes[2], 500, 20, 600, 600);
    //text(this.textos[1],100,100);
    text("El vehículo os lleva a un edificio de oficinas\n en Washington. Un guardia os recibe y\n os dirige a un ascensor que os lleva a una plataforma\n subterránea. Allí, subís a un vehículo en forma\n de bala que os lleva a un puesto de mando especial.\n En la sala sin ventanas, T te muestra un mapamundi\n con luces correspondientes a la búsqueda de Dimitrius.\n Preguntas por qué se ha desplegado una operación tan\n grande y T te aclara que es un hombre muy importante.", 500, 670);
  }
  contenidoPantalla5() {
    background(0);
    image(this.imagenes[3], 500, 20, 600, 600);
    //text(this.textos[2],100,100);
    text ("T, es peligroso y debes buscar a Dimitrius.\n Formaba parte de un proyecto entre el Centro\n de Investigaciones Psíquicas de Moscú y el\n Laboratorio de Física Molecular de Noginsk.\n No es un espía soviético, los rusos también\n están preocupados. Dimitrius puede estallar como\n una bomba atómica y se cree que puede\n viajar en el tiempo.", 500, 670);
  }
  contenidoPantalla6() {
    background(0);
    image(this.imagenes[4], 500, 20, 600, 600);
    textSize(16);
    text ("T muestra fotos de Dimitrius, un hombre bajo\n y delgado. Observas el mapa donde cada agente\n marca su posición. Nadie ha encontrado a\n Dimitrius en persona aún. Te piden que\n asumas una identidad falsa, sugiriendo un\n coleccionista de arte o un jugador profesional.", 500, 670);
    textSize(22);
    text ("T quiere probar tu habilidad antes de\ncomenzar con la mision!\nAceptas?",500,800);
  }
  contenidoPantalla7() {
    background(0)
    image(this.imagenes[5], 500, 20, 600, 600);
    textSize(16);
    text ("Me gusta la idea de asumir la identidad de un rico coleccionista de arte afirmas.\n Podré viajar con estilo y acostumbrarme a mi nueva personalidad.En esta misión,\n no escatimaremos gastos responde T. Pero asegúrate de justificar\n cada gasto en tu informe final.No te preocupes por eso respondes con\n una sonrisa. Solo necesito saber cuál será mi primer destino.\nVeamos murmura T mientras observa el mapa. Hay señales rojas\n en París y en la Ciudad de México, donde Dimitrius ha aparecido brevemente\n en el mundo del arte. Parece que también es un\n coleccionista. Dimitrius está en todas partes comentas.\n Más de lo que imaginas responde T. Pero no puedes estar en dos\n lugares a la vez, así que elige uno de estos destinos.\n Por cierto, te recomiendo que lleves el portafolios\n especial. Lo necesitarás.", 500, 655);
  }
  contenidoPantalla8() {
    background(0)
    image(this.imagenes[6], 500, 20, 600, 600);
    textSize(22);
    text ("Tras recibir instrucciones, tomas un taxi hacia\n el aeropuerto de Dulles para volar a México.\n Notas un automóvil gris detrás de ti y decides\n ser cauteloso. En el aeropuerto,\n observas a dos hombres bajos y delgados, uno\n con un gran mostacho. Les sigues\n hasta el mostrador de boletos y compras un\n boleto para el mismo vuelo a Ciudad \nde México, preguntándote si es una coincidencia.", 500, 670);
  }
  contenidoPantalla9() {
    textSize(16);
    background(0)
    image(this.imagenes[7], 500, 20, 600, 600);
    text ("A bordo del avión, identificas a los dos hombres\n sospechosos en los asientos centrales.\n Te sientas en la parte trasera junto a Juan Morales,\n un adolescente. Después de una hora, los\n hombres sacan revólveres y toman el control de\n la cabina. Uno de ellos te apunta\n con su arma y te ordena no hacer movimientos\n bruscos. Tu portafolios está cerca,\n pero cualquier movimiento podría desencadenar\n una reacción violenta. Debes decidir si\n intentar contraatacar o seguir las órdenes de \nlos secuestradores.", 500, 670);
  }
  contenidoPantalla10() {
    background(0);
    textSize(22);
    image(this.imagenes[8], 500, 20, 600, 600);
    text ("Deslizas tu mano hacia el portafolios y presionas un\n botón. Un gas anestésico se libera,\n dejando inconscientes a los secuestradores y a\n los demás pasajeros. Cuentas mentalmente \nhasta sesenta y respiras aliviado una vez que\n el gas se disipa.", 500, 670);
  }
  contenidoPantalla11() {
    background(0);
    image(this.imagenes[9], 500, 20, 600, 600);
    text ("Eres el único consciente a bordo. Asegurándote\n de que el piloto automático está activado,\n despiertas al piloto y le explicas la situación.\n Juntos, atan a los secuestradores. Aterrizan\n en la Ciudad de México, entregan a los\n secuestradores a la policía y recibes\n un telegrama urgente de T. Te indican que cambies\n de identidad por la de un jugador\n y te dirijas a Hong Kong para contactar a Ho\n Ling, un agente local de AES.", 500, 670);
  }
  contenidoPantalla12() {
    background(0);
    image(this.imagenes[10], 500, 20, 600, 600);
    text ("Tras diecisiete horas de vuelo, aterrizas en\n Hong Kong y buscas a tu contacto de AES.\n Después de esperar sin éxito, decides llamar\n a tu amigo Lu Chang y dirigirte a su\n casa en Kowloon. Encuentras un rickshaw y \nllegas a su tienda en Nathan Road. Un joven\n te informa que Lu está en su casa, donde\n encuentras a un grupo de personas\n alrededor de una cama. Te das cuenta de que\n tu amigo está postrado en ella y corres hacia él.", 500, 670);
  }
  contenidoPantalla13() {
    background(0);
    textSize(16);
    image(this.imagenes[11], 500, 20, 600, 600);
    text ("Lu te explica que fue enviado por AES al\n hipódromo del Valle Feliz en Hong Kong para\n vigilar a alguien con una increíble racha\n de suerte en las apuestas. Siguió al\n individuo hasta una mansión en\n el pico Victoria, donde fue atacado y presenció\n cómo el hombre se desvanecía. Lu sufrió\n quemaduras y fue rescatado del mar. \nAunque puede indicarte la ubicación de la\n mansión, advierte que no intentes entrar y\n sugiere buscar más información en el hipódromo.", 500, 670);
    textSize(22);
    text("Ir a mansion!", 110, 550);
    text("Ir a Hipodromo!", 1300, 550);
  }
  contenidoPantalla14() {
    background(0);
    textSize(16);
    image(this.imagenes[12], 500, 20, 600, 600);
    text ("Embarcas en un transbordador hacia la \nisla de Hong Kong y alquilas un taxi para \nbuscar la mansión. Manteniéndote a\n distancia, llegas a la casa en la colina\n y te adentras en el bosque con cautela.\n Utilizas un detector de calor para detectar\n presencias, pero de repente te \ndas cuenta de que estás rodeado. Intentas \nescapar, pero tropiezas con un\n alambre y caes al suelo, perdiendo el conocimiento \ndespués de escuchar una explosión.", 500, 670);
  }
  contenidoPantalla15() {
    background(0);
    textSize(16);
    image(this.imagenes[13], 500, 20, 600, 600);
    text ("Despiertas atado en un calabozo, con una\n banda metálica alrededor de la cabeza que \nte impide moverla. Varios hombres te dicen\n que regresarán en veinticuatro horas y esperan\n que hables. Intentas hablar, pero ellos ya se han\n ido. Pasan horas y las gotas de agua\n caen sobre tu cabeza, martilleándote. De repente, \nel goteo se detiene y una muchacha china \naparece y te interrumpe la tortura.", 500, 670);
  }
  contenidoPantalla16() {
    background(0);
    textSize(16);
    image(this.imagenes[14], 500, 20, 600, 600);
    text ("La muchacha se presenta como Mai Ling y te\n advierte sobre la vuelta de Fang Ti y sus\n hombres. Con un cuchillo, Mai Ling\n te libera de las cuerdas y la banda\n metálica. Rápidamente, te guía por\n un pasillo y llegan a una cocina desierta.\n Escuchan voces cercanas y el zumbido de un\n helicóptero afuera. Mai Ling sugiere escapar\n por la parte trasera, utilizando un camión\n de reparto que carga pescado en los\n muelles. Sin embargo, tú sugieres intentar\n llegar al helicóptero, ya que sabes\n pilotarlo. Mai Ling acepta, pero insiste\n en que la lleves contigo, sin importar\n cuál sea la opción elegida.", 500, 670);
  }
  contenidoPantalla17() {
    background(0);
    textSize(22);
    image(this.imagenes[15], 500, 20, 600, 600);
    text ("Junto con Mai Ling, te ocultas en la\n parte trasera del camión y esperas a que\n el vehículo se acerque al borde\n del agua. En ese momento, saltan del camión\n y cruzan la calle hacia un casino \nllamado Fu Loong. Llevas contigo la bolsa \nde dinero y decides entrar al \ncasino en busca de pistas sobre Dimitrius.", 500, 670);
  }
  contenidoPantalla18() {
    background(0);
    textSize(16);
    image(this.imagenes[16], 500, 20, 600, 600);
    text ("Decides entrar al casino y te despides de\n Mai Ling, agradeciéndole su ayuda. Dentro del\n casino, hay mucho bullicio y una gran variedad\n de juegos. Decides actuar como un verdadero\n jugador para obtener información. Te acercas a \nla ruleta y ganas. Sigues probando suerte\n en otros juegos y te va muy bien, acumulando fichas\n y dinero. A pesar de tener una\n buena racha, la fiebre del juego te consume y decides \napostarlo todo a un color en la ruleta.", 500, 670);
    textSize(22);
    text("Apostar a Rojo", 110, 550);
    text("Apostar a Negro", 1300, 550);
  }
  contenidoPantalla19() {
        textSize(18);
        background(0)
    image(this.imagenes[17], 500, 20, 600, 600);
    text ("Ganas apostando al rojo y obtienes una\n gran fortuna. Cambias tus fichas por\n un millón de dólares de Hong Kong\n y te das cuenta de que ya no necesitarás trabajar\n para la AES. Te hospedas\n en un lujoso hotel y envías tu renuncia a T\n mediante un telegrama. Ahora te\n dispones a disfrutar de tu dinero, esta vez en\n tu propio beneficio. Fin.", 500, 670);
  }
  contenidoPantalla20() {
    textSize(18);
        background(0)
    image(this.imagenes[18], 500, 20, 600, 600);
    text ("Pierdes apostando al negro y te quedas\n sin dinero. Mientras te diriges al muelle,\n alguien te ataca por detrás\n y te lleva a un callejón donde te amarran\n y colocan pesas en tus pies.\n Te advierten que te arrojarán al agua.\n Comprendes que tu apuesta imprudente te\n ha llevado a esta situación y te das cuenta\n de que Dimitrius te ha reconocido como un impostor.\n Fin.", 500, 670);
  }
  contenidoPantalla21() {
    background(0)
    image(this.imagenes[19], 500, 20, 600, 600);
    text ("Te decides por el hipódromo. Sales a\n Nathan Road y tomas un rickshaw hasta el\n transbordador que cruza la bahía Victoria.\n Mientras estás en la cubierta superior,\n notas a unos hombres chinos vestidos de\n negro que te siguen y presientes que son \nasesinos profesionales. Uno de ellos se \nacerca lentamente hacia ti.", 500, 670);
  }
  contenidoPantalla22() {
    background(0)
    image(this.imagenes[20], 500, 20, 600, 600);
    text ("En un ágil movimiento, esquivas el puñetazo\n dirigido a tu cabeza, giras y te dejas caer\n al suelo. Aprovechas su desequilibrio para\n agarrarle por la manga y realizar un rápido giro,\n lanzándolo por encima de la barandilla hacia\n las aguas del puerto.", 500, 670);
  }
  contenidoPantalla23() {
    background(0)
    textSize(16);
    image(this.imagenes[21], 500, 20, 600, 600);
    text ("Recuperas el equilibrio y dos atacantes se lanzan\n sobre ti. Uno te golpea en la cabeza,\n dejándote aturdido, pero antes de que el\n segundo pueda golpearte, ambos caen\n al agua. Un anciano chino llamado Ho Wong,\n tu contacto de la AES en Hong Kong,\n te salvó. Ho te informa que Dimitrius podría\n estar en su yate cerca de Macao o\n en su isla. Si deseas buscar el yate,\n un amigo de Ho puede llevarte en un\nhidroavión, mientras que si prefieres inspeccionar\n la isla, otro amigo de Ho puede llevarte en\n una pequeña embarcación.", 500, 670);
  }
  contenidoPantalla24() {
    background(0)
    textSize(16);
    image(this.imagenes[21], 500, 20, 600, 600);
    text ("Quiero ver el yate de Dimitrius dices.\nPerfecto responde Ho. Mi amigo tiene un\n hidroavión cerca. Sígueme.Ho te guía a través\n del muelle hasta un hidroavión que flota al final\n de la escollera. Se detienen junto\n a su amigo y Ho le explica lo que estás buscando.\n¿Cómo lo reconoceremos entre tantas\n embarcaciones en el puerto? pregunta el piloto\nEs fácil explica Ho. En la cubierta trasera\n hay una pista de aterrizaje para helicópteros \ncon una gran D marcada.Ho se queda en\n tierra. Después de unos diez minutos volando sobre la\n costa en dirección sur,\n el motor del avión comienza a emitir chispas y se\n detiene por completo.", 500, 670);
  }
  contenidoPantalla25() {
    background(0)
    image(this.imagenes[21], 500, 20, 600, 600);
    text ("El piloto está desconcertado, ya que el avión\n funciona correctamente. Deciden amerizar \ncerca del yate de Dimitrius, que se encuentra\n a poca distancia. Una lancha se acerca y\n te ordenan subir a bordo, donde\n Dimitrius te espera. Resulta que\n Dimitrius ha descubierto tu interés por él\n y te propone ayudarlo en la redacción de\n su autobiografía mientras se retira a una isla \nremota. Tendrás tiempo para descubrir\n más detalles, ya que el proceso puede llevar\n algún tiempo debido a la extensión de su historia.", 500, 670);
  }
  contenidoPantalla26() {
    background(0);
    textSize(18);
    text("inicio", 15, 90);
    textSize(22);
    text("FIN", width/2-50, height/3);
  }
  contenidoPantalla27() {
    background (0);
    text("SPACE INVADERS", width/2-50, height/3);
  }
  
}
