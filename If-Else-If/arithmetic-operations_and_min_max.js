const readline = require("prompt-sync");
const prompt=readline();

let a = prompt("Enter the value of a: ");
let b = prompt("Enter the value of b: ");
let c = prompt("Enter the value of c: ");

let result1 = a+b*c;
let result2 = a%b+c;
let result3 = c+a/b;
let result4 = a*b+c;

let max = 0;
let min = 0;

//To find the Maximum Value among all the result
if ((result1 > result2)&&(result1 > result3)&&(result1 > result4))
    max = result1;
else if ((result2 > result3)&&(result2 > result4))
    max = result2;
else if (result3 > result4)
    max = result3;
else
    max = result4;

console.log("Maximum among all the result: "+max);

//To find the Minimum Value among all the result
if ((result1 < result2)&&(result1 < result3)&&(result1 < result4))
    min = result1;
else if ((result2 < result3)&&(result2 < result4))
    min = result2;
else if (result3 < result4)
    min = result3;
else
    min = result4;

console.log("Minimum among all the result: "+min);
