const prompt = require("prompt-sync")();
let entier = Number(prompt("Entrer un chiffre : "));
let inverse = Number(String(entier).split("").reverse().join(""));
console.log(inverse);