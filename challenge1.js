const prompt = require("prompt-sync")();
let nombre = Number(prompt("entrer un nombre : "));
for (let i =1; i<=10; i++) {
    let resultat = nombre *i;
  console.log(`${nombre} * ${i} = ${resultat}`);
}
