const prompt = require("prompt-sync")();
let TC = Number(prompt("entrez la tempèratue en celsuis :"));
if (TC < 0) {
console.log("solide"); 
} else if (TC >=100) {
console.log("liquide");    
} else {
    console.log("gaz"); 
}
 
