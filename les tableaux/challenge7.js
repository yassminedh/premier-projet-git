const prompt = require("prompt-sync")();
const elements = prompt("entrer nombre des elements :");
let arrays = [];
for (i=1; i<=elements; i++){
    const valeur=Number(prompt("entrer element :"));
    arrays.push(valeur);
}
    let max = arrays[0];
for (let i = 1; i<=elements;i++){
    if (arrays[i]> max){
         max = arrays[i];
    }
}
    let moyen = arrays[0];
for (let i = 1; i<=elements;i++){
    const valeur=Number(prompt("entrer element :"));
    if (min > arrays[i] > max){
         moyen = arrays[i];

    }
}
    let min = arrays[0];
for(i=1; i<=elements; i++){    
    if (arrays[i]< min){ 
        min = arrays[i];
    }
}
console.log(croissant)