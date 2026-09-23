const prompt = require("prompt-sync")();
let r = Number(prompt("Entrer un nombre : "));
let π = 3.14;
let volume =0;
volume = (4/3) * π * r**3;
console.log(volume);