const prompt = require("prompt-sync")();
let a = prompt("entrer un nombre : ");
let b = 5 ;
function factorielle(a , b){
    return(a*b);
};
let resultat = factorielle(a, b)
console.log(resultat);
