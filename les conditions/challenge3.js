const prompt = require("prompt-sync")();
let nombre1 = Number(prompt("entrer la valeur de nombre 1 : "));
let nombre2 = Number(prompt ("entrer la valeur de nombre 2 : "));
let somme = nombre1 + nombre2;
if(nombre1===nombre2) {
    somme = somme * 3;
}
    console.log(somme);






