const prompt = require("prompt-sync")();
let ponder1 = Number(prompt("Entrer un nombre : "));
let ponder2 = Number(prompt("Entrer un nombre : "));
let ponder3 = Number(prompt("Entrer un nombre : "));
let moyenne =0;
moyenne = Number(ponder1 + ponder2 + ponder3)/3;
console.log(moyenne);
