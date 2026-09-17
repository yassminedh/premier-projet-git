const prompt = require("prompt-sync")();
let nombre = prompt("entrer un nombre :");
if (nombre%2==0) {
    console.log("pair");
} else 
    console.log("impair");
    