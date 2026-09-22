const prompt = require("prompt-sync")();
const n1 = Number(prompt("entrer un nomber :"));
const n2 = Number(prompt("entrer un nomber :"));
let resultat = 1;
for (let i = 1; i<=n2; i++){
    resultat = resultat * n1;
}
    console.log(resultat);





