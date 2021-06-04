
const readline = require("prompt-sync");
const prompt = readline();

let year = prompt("Enter the year: ");

if(((year % 4 == 0) && (year % 100 !=0))  || (year % 400 ==0)) 
     console.log(year+" is a leap Year");
else
     console.log(year+" is not a leap Year");

