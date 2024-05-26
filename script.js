console.log("hola mundillo");

// GUARDAR ELEMENTOS DE FORM EN VARIABLES
var input_nombre = document.getElementById("nombre")
var input_email = document.getElementById("email")
var input_actualidad = document.getElementById("actualidad")
var input_autos = document.getElementById("autos")
var input_ciencia = document.getElementById("ciencia")
var input_cine = document.getElementById("cineyseries")
var input_comida = document.getElementById("comida")
var input_deportes = document.getElementById("deportes")
var input_espectaculos = document.getElementById("espectaculos")
var input_gaming = document.getElementById("gaming")
var input_genero = document.getElementById("genero")
var input_musica = document.getElementById("musica")
var input_salud = document.getElementById("salud")
var input_tecnologia = document.getElementById("tecnologia")
var input_viral = document.getElementById("viral")

var input_submit = document.getElementById("boton")



console.log(input_nombre);
console.log(input_email);
console.log(input_cine);
console.log(input_espectaculos);

console.log (input_submit);

//fFUNCION AL EJECUTAR EL BOTON
input_submit.addEventListener("click", enviarFormulario);

function enviarFormulario(event){
    event.preventDefault();

    console.log("hice click");
    console.log("!!");

    //OBTENER VALORES DE LOS INPUTS
    var valor_nombre = input_nombre.value;
    var valor_email = input_email.value ;
    var valor_actualidad = input_actualidad.checked ;
    var valor_autos = input_autos.checked ;
    var valor_ciencia = input_ciencia.checked ;
    var valor_cine = input_cine.checked ;
    var valor_comida = input_comida.checked ;
    var valor_deportes = input_deportes.checked ;
    var valor_espectaculos = input_espectaculos.checked ;
    var valor_gaming = input_gaming.checked ;
    var valor_genero = input_genero.checked ;
    var valor_musica = input_musica.checked ;
    var valor_salud = input_salud.checked ;
    var valor_tecnologia = input_tecnologia.checked ;
    var valor_viral = input_viral.checked ;
    
    console.log(valor_nombre);
    console.log(valor_email);
    console.log(valor_actualidad);
    console.log(valor_autos);
    console.log(valor_ciencia);
    console.log(valor_cine);
    console.log(valor_comida);
    
     // Crear un array para almacenar las secciones seleccionadas
     var seccionesSeleccionadas = [];

     // Comprobar cada checkbox y agregar su valor al array si está seleccionado
     if (valor_actualidad) seccionesSeleccionadas.push("Actualidad");
     if (valor_autos) seccionesSeleccionadas.push("Autos");
     if (valor_ciencia) seccionesSeleccionadas.push("Ciencia");
     if (valor_cine) seccionesSeleccionadas.push("Cine y Series");
     if (valor_comida) seccionesSeleccionadas.push("Comida");
     if (valor_deportes) seccionesSeleccionadas.push("Deportes");
     if (valor_espectaculos) seccionesSeleccionadas.push("Espectaculos");
     if (valor_gaming) seccionesSeleccionadas.push("Gaming");
     if (valor_genero) seccionesSeleccionadas.push("Género");
     if (valor_musica) seccionesSeleccionadas.push("Música");
     if (valor_salud) seccionesSeleccionadas.push("Salud");
     if (valor_tecnologia) seccionesSeleccionadas.push("Tecnología");
     if (valor_viral) seccionesSeleccionadas.push("Viral");

    //OBTENER LOS PLACEHOLDER

    var placeholder_nombre = document.getElementById ("nombre.placeholder");
    var placeholder_email = document.getElementById ("email.placeholder");

    var placeholder_secciones = document.getElementById("secciones.placeholder")

    //CAMBIAR CONTENIDO DE LOS PLACEHOLDER

    placeholder_nombre.innerHTML = valor_nombre;
    placeholder_email.innerHTML = valor_email;

    placeholder_secciones.innerHTML = seccionesSeleccionadas;

    //MOSTRAR FEEDBACK
    elemento_feedback = document.getElementById ("feedback");
    elemento_feedback.classList.remove("oculto");
    
    //  OCULTAR FORMULARIO
    elemento_formulario = document.getElementById("formulario");
    elemento_formulario.classList.add ("oculto");
    
    
}
