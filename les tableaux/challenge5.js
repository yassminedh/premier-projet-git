const prompt = require("prompt-sync")();
const elements=Number(prompt("entrer les nombres des elements :"));
let arrays = [];
for (let i =1; i<=elements; i++){
   const valeur=Number(prompt("entrer les elements : "));
    arrays.push(valeur);
}
let min = arrays[0];
for(i=1; i<=elements; i++){    
    if (arrays[i]< min){ 
        min = arrays[i];
    }
 }
  console.log(min);



