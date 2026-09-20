const prompt = require("prompt-sync")();
const n=Number(prompt("entrer nombre des elements :"));
const arrays = []; 
for (let i = 1; i<=n; i++){
    const valeur=Number(prompt("entrer element"));
    arrays.push(valeur);
}
    const facteur=Number(prompt("entrer un facteur : "));
for (let i = 0; i<n; i++){    
    arrays[i] = facteur * arrays[i];
}
    console.log(arrays);






