const prompt=require("prompt-sync")();
let km = prompt("Entrez la distance en kilomètres :");
let Yards = Number(km) * 1093.61
console.log(`${km} en ${Yards} yards`);