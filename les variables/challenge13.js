const prompt = require("prompt-sync")();
let entier = Number(prompt("Entrer un chiffre : "));
let binaire = 0;
let hexadecimal = 0;
binaire =  entier % 2;
hexadecimal = entier % 16;
console.log(binaire);
console.log(hexadecimal);