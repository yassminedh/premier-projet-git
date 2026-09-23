const prompt = require("prompt-sync")();
let n1 = Number(prompt("Entrer un nombre : "));
let n2 = Number(prompt("Entrer un nombre : "));
let n3 = Number(prompt("Entrer un nombre : "));
let moyennegeometrique =0;
moyennegeometrique = Number(n1 * n2 * n3)^(1/3);
console.log(moyennegeometrique);
