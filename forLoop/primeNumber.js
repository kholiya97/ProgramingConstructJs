const readline = require("prompt-sync");
const prompt=readline();

let numb = prompt("Enter the number: ");
let isPrime = true;

 for(let i = 2; i < numb; i++) {
    let output = numb % i;

    if(output == 0) {
          isPrime = false;
          break;
     }
 }

if( isPrime ) {
         console.log(numb+" is a prime Number");
}
else {
         console.log(numb+" is not a prime Number");
}

