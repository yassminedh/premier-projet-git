const prompt = require("prompt-sync")();
let kmh = prompt("Entrer la vitesse en kilomètres par heure :");
let ms = Number(kmh) * 0.27778
console.log(`${kmh} en ${ms} yards`); 
