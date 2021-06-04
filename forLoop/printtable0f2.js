const readline = require("prompt-sync");
const prompt=readline();

let n = prompt("Enter the number: ");

let power = 0;
for(let i = 1; i<= n; i++) {
   power = 2 * i;
   console.log("2 X "+ i +" = "+power);
}

