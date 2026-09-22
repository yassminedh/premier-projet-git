const prompt = require("prompt-sync")(); 
const  rectangle = {
     longeur : prompt("entrer la valeur de longeur : "),
     largeur : prompt("entrer la valeur de largeur : "),
};
function air (rectangle) {
    return(largeur*longeur);
 air =rectangle.longeur*rectangle.largeur;
}
const result = air(rectangle); 
console.log(air);
  

