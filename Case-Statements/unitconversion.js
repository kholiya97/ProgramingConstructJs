const readline = require("prompt-sync");
const prompt=readline();

let numb = prompt("Enter the number in feet: ");

console.log("Convert feet into inches");
console.log("1 feet = 12 inches");
let numb1 = numb * 12;
console.log("Value of number in inches: "+numb1+" inch");

console.log("----------------------------");
console.log("Convert feet into meter");
console.log("1 feet = 0.3048 inches");
let numb2 = numb * 0.3048;
console.log("Value of number in meter: "+numb2+" meter");

console.log("----------------------------");
console.log("Convert inches into feet");
console.log("1 inch = 1/12 feet");
let numb3 = numb1 / 12;
console.log("Value of number in feet: "+numb3+" ft");

console.log("----------------------------");
console.log("Convert meter into feet");
console.log("1 meter = 1/0.3048 feet");
let numb4 = numb2 / 0.3048;
console.log("Value of number in feet: "+numb4+" ft");

