const prompt = require("prompt-sync")();
let lettre = prompt("Entrer un lettre :");
switch(lettre){
    case 'a':
    case 'e':
    case 'o':
    case 'u':
    case 'i':     
    case 'y':
        console.log(`la lettre ${lettre} voyelle`);
        break;
    default:
         console.log(`la lettre ${lettre}  n est pas voyelle`);

}
