const prompt=require("prompt-sync")();
let firstName = prompt("What is your name? ");
let lastName = prompt("What is your last name? ");
let age = prompt("How old are you? ");
let sex = prompt("What is your sex? ");
let email = prompt("What is your email? ");
console.log(`Hello ${firstName} ${lastName}! You are ${age} years old, your sex is ${sex}, and your email is ${email}.`);


