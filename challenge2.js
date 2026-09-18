const prompt = require("prompt-sync")();
let nombre= Number(prompt("entrer un nombre"));
factor=1
for (let i = 1; i <= nombre; i++){
    factor = factor * i;
}
console.log(`${nombre} = ${factor}`);