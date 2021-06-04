
//To generate single digit using Random Function
let digit = Math.floor(Math.random()*10);
console.log("Digit: "+digit);

console.log("-------------------------------------");

//To get Dice Number using Random Function
let dice = Math.floor((Math.random()*10) % 6 + 1);
console.log("First Random Number  : "+dice);

console.log("-------------------------------------");

//To add Random 2 Dice Number
let dice1 = Math.floor((Math.random()*10) % 6 + 1);
console.log("Second Random Number : "+dice1);

let sum = dice + dice1 ;
console.log("Sum of 2 Numbers appear on Dice : "+sum);

console.log("-------------------------------------");

//5 Random 2 Digits Numbers and their sum and Average
let numb1 = Math.floor((Math.random()*10) % 90 + 10);
let numb2 = Math.floor((Math.random()*10) % 90 + 10);
let numb3 = Math.floor((Math.random()*10) % 90 + 10);
let numb4 = Math.floor((Math.random()*10) % 90 + 10);
let numb5 = Math.floor((Math.random()*10) % 90 + 10);

let sum1 = (numb1 + numb2 + numb3 + numb4 + numb5);
console.log("Sum of 5 Random Numbers  : "+sum1);

let avg = sum1 / 5;
console.log("Average of 5 Random Numbers  : "+avg);

console.log("-------------------------------------");

//To Convert the Units
console.log("Convert 42 inches in ft");
console.log("1 ft = 12 inches");
let numb = 42 / 12;
console.log("42 inches in feet: "+numb+" ft");
console.log(".................");


console.log("Convert Area in meter square");
let area = 60 * 40;
console.log("Area of Plot in feet: "+area+"ft");
console.log("1 ft = 0.3048 meter");
let area1 = area * 0.3048;
console.log("Area of plot in meter square: "+area1+" m^2");
console.log(".................");

console.log("Calculate Area of 25 such Plots");
let area2 = area * 25;
console.log("Area of 25 Plot in feet: "+area2+" ft");
let area3 = area1 *25;
console.log("Area of 25 Plot in meter square: "+area3+" m^2");





