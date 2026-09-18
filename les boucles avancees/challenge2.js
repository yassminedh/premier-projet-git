const prompt = require("prompt-sync")();
let n = prompt(" entrer nombre impair d`étoile :");
for (let i = 1; i <= n ; i=+2){
  while (n !== "*"){
    console.log(n)
  }
    console.log(i);
}
