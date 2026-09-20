const prompt = require("prompt-sync")();
const elements=Number(prompt("entrer les nombres des elements :"));
let arrays = [];
for (let i =1; i<=elements; i++){
   const valeur=Number(prompt("entrer les elements : "));
    arrays.push(valeur);
}
let max = arrays[0];
for (let i = 1; i<=elements;i++){
    if (arrays[i]> max){
         max = arrays[i];
   
    }
}
    console.log(max);
  

