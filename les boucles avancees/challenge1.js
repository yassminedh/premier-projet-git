const prompt = require("prompt-sync")();
let n = Number(prompt("entrer un nombre :"));
for (let i=10; i>=1; i--){
    let resultat = n * i;
    console.log(`${n} * ${i} = ${resultat}`);
}
