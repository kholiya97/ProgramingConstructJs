const readline = require("prompt-sync");
const prompt=readline();

let n = prompt("Enter the number less than 256: ");

let i = 1;
while( i < n) {

//To print the table of 2 
    if( n < 256) {
         let power = 2 * i;
         console.log("2 X "+ i +" = "+power);
         i++;
    }
    else {
         console.log("Invalid Input!");
    }
}
