var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var num = prompt("Introduce el número del DNI sin meter la letra.");
var letra = prompt("Introduce la letra del DNI.").toUpperCase();

if (num < 0 || num > 99999999) {
    alert("El número introducido no es válido.");
} else {
    var letra2 = letras[num % 23];
    if (letra2 != letra) {
        alert("La letra introducida no se corresponde con el número introducido, por lo que no es correcto.");
    } else {
        alert("El DNI introducido es válido.");
    }
}