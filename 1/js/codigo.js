console.log("Hola Mundo!"); //Muestra por consola el texto


//Método donde recoge por id la etiqueta y añade en html un texto
function texto() {
    var msg = document.getElementById("mensaje");
    msg.innerHTML = "Soy el primer script.";
}