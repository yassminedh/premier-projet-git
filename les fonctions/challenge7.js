const prompt = require("prompt-sync")();
const a = prompt("entrer un valeur : ");
function valeur(a){
    for (let i = a; i>= 0; i--){
        console.log(i);
    }
};
let resultat = valeur(a);
console.log(resultat);
