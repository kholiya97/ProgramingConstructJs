const readline = require("prompt-sync");
const prompt=readline();

let numb1 = prompt("Enter the first Number : ");

let rem = 0;
let sum = 0;
let isPrime = true;


function prime(numb1) {
    for(let i = 2; i < numb1; i++) {
           let output = numb1 % i;

           if(output == 0) {
              isPrime = false;
              break;
            }
     }
}

function palindrome(numb1) {
     while( numb1 > 0) {
            rem = numb1 % 10;
            sum = (sum * 10) + rem;
            numb1 = parseInt(numb1 / 10);
     }
     console.log("Reverse of the first number: "+sum);

     if(numb1 == sum) {
             console.log("Number is Palindrome");
     }
     else {
             console.log("Number is not Palindrome");
     }
}

prime(numb1);
if(isPrime) {
      console.log(numb1+" is a prime Number");
      palindrome(numb1);
}
else {
      console.log(numb1+" is not a prime Number");
}
