const prompt = require("prompt-sync")();
const elements=Number(prompt("entrer les nombres des elements :"));
let arrays=[]; 
let somme = 0; 
for (let i = 0;i<=elements; i++){
    const valeur = Number(prompt("entrer la valeur des elements :"));
    arrays.push(valeur);
    somme = somme + arrays[i];
}
console.log(somme);