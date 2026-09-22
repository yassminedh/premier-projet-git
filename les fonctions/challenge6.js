const prompt = require("prompt-sync")();
let n = prompt("entrer un nombre : ");
let a = 1 ;
let b = 2 ;
let c = 0 ;
function factorielle(a , b){ 
    return c = a + b;
    a = b;
    b = c;
};
 c += factorielle(0, 1) ;
console.log(c); 

const prompt = require("prompt-sync")();

/**
 * Calcule le n-ième terme de la suite de Fibonacci.
 * @param {number} n - L'indice du terme souhaité (n >= 0)
 * @returns {number|null} Le n-ième terme ou null si n est négatif
 */
function fibonacci(n) {
    if (n < 0) return null;
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

// Demande de la valeur à l'utilisateur
let n = parseInt(prompt("Entrer la valeur de n : "), 10);

if (isNaN(n) || n < 0) {
    console.log("Veuillez entrer un entier positif ou nul.");
} else {
    let resultat = fibonacci(n);
    console.log(`Le ${n}-ième terme de la suite de Fibonacci est : ${resultat}`);
}

