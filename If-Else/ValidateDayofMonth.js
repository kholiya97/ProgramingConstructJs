
const readline = require("prompt-sync");
const prompt=readline();

let date = prompt("Enter the date ");
console.log(date);

let month = prompt("Enter the month ");
console.log(month);

let days = ((parseInt(month)*100)+ parseInt(date));
console.log(days);

if((days > 320) && (days < 620))
     console.log("True");
else
     console.log("False");

