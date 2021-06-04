const readline = require("prompt-sync");
const prompt=readline();

let numb1 = prompt("Enter the first Number : ");
let numb2 = prompt("Enter the second Number: ");

let rem = 0;
let sum = 0;

function palindrome(numb1) {
     while( numb1 > 0) {
            rem = numb1 % 10;
            sum = (sum * 10) + rem;
            numb1 = parseInt(numb1 / 10);
     }
     console.log("Reverse of the first number: "+sum);
}

palindrome(numb1);

if(numb2 == sum) {
       console.log("Numbers are Palindrome");
}
else {
       console.log("Numbers are not Palindrome");
}
