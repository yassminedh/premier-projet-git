const prompt = require("prompt-sync")();
let chaine = prompt("enrter un chaine de caractere : ");
const caractere = prompt("entrer un caractere : ");
let compteur = 0;
for (let i = 0; i< chaine.length+1; i++){
    if(chaine[i] == caractere){
        compteur++;
    }
}
console.log(compteur);
