const prompt = require("prompt-sync")();
const elements = prompt("entrer nombre des elements :");
let arrays = [];
for (i=1; i<=elements; i++){
    const valeur=Number(prompt("entrer element :"));
    arrays.push(valeur); 
}
console.log(arrays);
for (i=1; i<=elements; i++){

}


