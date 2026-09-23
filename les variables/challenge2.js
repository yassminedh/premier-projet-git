const prompt = require("prompt-sync")();
let tempCelsius = prompt("Entrez la température en Celsius :");
let tempKelvin = Number(tempCelsius) + 273.15;
console.log(`${tempCelsius}°C correspond à ${tempKelvin}K`);