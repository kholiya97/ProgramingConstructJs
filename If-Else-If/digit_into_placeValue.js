const readline = require("prompt-sync");
const prompt=readline();

let digit = prompt("Enter the number: ");

if(digit == 1)
   console.log("Unit");
else if(digit == 10)
   console.log("Ten");
else if(digit == 100)
   console.log("Hundered");
else if(digit == 1000)
   console.log("Thousand");
else
   console.log("Invalid Digit!");
