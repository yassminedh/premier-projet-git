const prompt = require("prompt-sync")();
const chaine = prompt("entrer un chaine : ");
resultat = "";
for (let i = 0; i< chaine.length; i++){
    if (chaine[i] !== " " ){
    resultat = resultat + chaine[i];
    }
}
console.log(resultat);

