const prompt = require("prompt-sync")();
let n = Number(prompt("entrer la valeur de n : "));
somme = 0
for (let i = 1; i <= n; i++ ){
  somme = somme + i;
}
console.log(`${n} = ${somme}`);
