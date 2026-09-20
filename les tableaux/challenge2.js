const prompt = require("prompt-sync")();
let numbre=Number(prompt( "entrer un valeur :")) ;
let arrays=[];
let somme = 0
for (let i = 1;i<=numbre; i++){
    const valeur=Number(prompt("entrer les nombres des elements :"));
arrays.push(valeur);
somme = + numbre[i];
}
console.log(arrays);

