const prompt = require("prompt-sync")();
const n = [1, 2, 3, 4, 5];
let arrays = [];
for (let i= n.length-1; i>=0; i-- ){ 
    arrays= arrays + n[i];
}
console.log(arrays);
