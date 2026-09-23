const prompt = require ("prompt-sync")();
let index = Number(prompt("entrer un element : ")); 
let arrays = [ 22, 24, 55, 67, 88];
let trouve = false;
for (let i = 0; i < arrays.length; i++) {
    if (i === index){
        console.log(arrays[i]);
        trouve = true;
        break;
    }
if (trouve === false){
    console.log("n est pas trouver");
}
}
