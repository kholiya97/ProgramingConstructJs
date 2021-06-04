const readline = require("prompt-sync");
const prompt=readline();

let numb = prompt("Enter the Number: ");
console.log("Factors of the Given Number: ");

for(let i = 1; i <= numb; i++) {

    if ( numb % i == 0) {
           console.log(i);
    }
}



