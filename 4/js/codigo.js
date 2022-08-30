var valores = [true, 5, false, "hola", "adios", 2];

//1. 
var palabra = valores.filter(a => typeof a === 'string') //Filtra solo los valores que sean string
    .sort((a, b) => b.length - a.length)[0]; //Ordena por longitud

console.log(palabra);


//2.
var resultado = valores[0] || valores[2];
console.log(resultado); //True

resultado = valores[0] && valores[2];
console.log(resultado);

//3.

var suma = valores[1] + valores[5];
console.log(suma);

var resta = valores[1] - valores[5];
console.log(resta);

var multiplicacion = valores[1] * valores[5];
console.log(multiplicacion);

var division = valores[1] / valores[5];
console.log(division);

var modulo = valores[1] % valores[5];
console.log(modulo);