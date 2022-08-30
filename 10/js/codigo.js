palindromo("La ruta nos aporto otro paso natural");

function palindromo(cadena) {
    var minus = cadena.toLowerCase();
    var espacio = minus.split(' ').join('');

    var normal = espacio.split('');
    var sp = espacio.split('').reverse();

    var igual = true;
    for (i in sp) {
        if (sp[i] != normal[i]) {
            igual = false;
        }
    }
    if (igual) {
        alert("Es un palindromo.");
    } else {
        alert("No es un palidromo.");
    }
}