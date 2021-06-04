const readline = require("prompt-sync");
const prompt=readline();

let numb1 = prompt("Enter the first number of Range: ");
let numb2 = prompt("Enter the last number of Range: ");

//To check the condition  for Prime
console.log("Prime Numbers between given range ");
for(let i = numb1; i <= numb2; i++) {
let isPrime = true;

    for( let j = 2; j <= i; j++) {
        if( i % j == 0 && j != i) {
           isPrime = false;
        }
    }

    if(isPrime == true) {
     console.log(i);
    }
}
