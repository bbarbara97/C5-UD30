var cadena1 = "El perro de San Ronque, no tiene rabo, porque Ramón Ramírez se lo ha cortado.";
var cadena2 = "por un perro que maté, mataperros me llamaron.";
var cadena3 = "NO HAY CABALLO, POR BUENO QUE SEA, QUE NO TROPIECE.";

alert(cadena1);
mayus(cadena1);
alert(cadena2);
mayus(cadena2);
alert(cadena3);
mayus(cadena3);

function mayus(cadena) {

    if (cadena == cadena.toUpperCase()) {
        return alert("La cadena está formada solo por mayúsculas.");
    } else if (cadena == cadena.toLowerCase()) {
        return alert("La cadena está formada solo por minúsculas.");
    } else {
        return alert("La cadena está formada tanto por mayúsculas como por minúsculas.");
    }
}