const readline = require("prompt-sync");
const prompt=readline();

let numb = prompt("Enter the number: ");

let fact =1;
for(let i =2; i < numb; i++){
    fact = fact * i;
}

console.log("The factorial of the number: "+fact);
