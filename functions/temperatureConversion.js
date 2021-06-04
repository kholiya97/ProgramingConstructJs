
const readline = require("prompt-sync");
const prompt=readline();

let degF = 0;
let degC = 0;

//To convert celcius into Fahrenheit
function celsius(temp1) {
   degF = (temp1 * 9/5) + 32;
   console.log("Temperature in Fahrenheit: "+degF);
}

//To convert Fahrenheit into Celcius
function fahrenheit(temp2) {
   degC = (temp2 - 32) * 5/9;
   console.log("Temperature in Celcius: "+degC);
}

let choice = prompt("Press 1 to Convert Celcius int Fahrenheit or Press 2 to Convert Fahrenheit into Celcius ");

if (choice == 1) {
   let temp1 = prompt("Enter the Temperature in Celcius: ");
   celsius(temp1);
}
else if(choice ==2) {
   let temp2 = prompt("Enter the Temperature in Fahrenheit: ");
   fahrenheit(temp2);
}
else {
   console.log("Invalid Input!");
}
