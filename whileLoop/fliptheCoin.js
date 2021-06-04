
let HEADS = 1;
let TAILS = 0;
let m = 0;
let n = 0;

const readline = require("prompt-sync");
const prompt=readline();

let numb = prompt("Enter the number of times you want to flip the coin: ");

let i = 0;

//To initialise the flip of the coin
while(i < numb) {
 i++;
 let flip = Math.floor(Math.random() *10 % 2);
  if( flip == 1) {
     m = HEADS++;
     console.log("HEADS");
  }
  else {
     n = TAILS++;
     console.log("TAILS");
  }

//To check which side appear 11 times First
  if(m == 11) {
   console.log("HEADS appear 11 times First and WON!");
   break;
  }
  else if(n == 11) {
   console.log("TAILS appear 11 times First and WON!");
   break;
  }
}


