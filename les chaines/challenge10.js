let prompt = require ("prompt-sync")();
let  chaine=prompt("entrer la chaine :");
const  caractere=prompt("entrer le caracter :");
let trouver = false
for (i= 0; i<chaine.length; i++ ){
    if(chaine[i] == caractere);
    trouver = true;
}
if (trouver){
    console.log("caracter est trouver");
} else {
    console.log("caracter non trouver");
}


