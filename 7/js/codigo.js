var numero = prompt("¿Qué número deseas?");
var resultat = 1;

for (var i = 1; i <= numero; i++) {
    resultat *= i;
}
document.write("El factorial de " + numero + " es: " + resultat);