const prompt = require("prompt-sync")(); 
const n = prompt(" entrer un entier : ");
function entier(n){
    if(n%2 == 0){
        return true;
    } else {
        return false;
    }
}
let resultat = entier(n);
console.log(resultat);