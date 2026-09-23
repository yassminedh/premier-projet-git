const prompt = require ("prompt-sync")();
let element = Number(prompt("entrer un element : ")); 
let arrays = [ 22, 24, 55, 67, 88, 2 ];
let trouve = false;
for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] === element){
            console.log("element est trouve");
            trouve = true;
            break;
        } 
if (trouve === false) {
     console.log("element non trouve");
    }
    }



