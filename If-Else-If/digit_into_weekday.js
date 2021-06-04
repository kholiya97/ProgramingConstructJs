const readline = require("prompt-sync");
const prompt=readline();

let digit = prompt("Enter the digit between 1 to 7: ");

if(digit == 1)
   console.log("Sunday");
else if(digit == 2)
   console.log("Monday");
else if(digit == 3)
   console.log("Tuesday");
else if(digit == 4)
   console.log("Wednesday");
else if(digit == 5)
   console.log("Thrusday");
else if(digit == 6)
   console.log("Friday");
else if(digit == 7)
   console.log("Saturday");
else
   console.log("Invalid Digit!");
