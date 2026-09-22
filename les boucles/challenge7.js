const prompt = require("prompt-sync")();
const n = prompt(" Entrer un chiffre : ");
let inverse = "";
for (let i= n.length-1; i >= 0; i--){
   inverse = inverse + n[i];
}
console.log(inverse);
