
let cash = 100;
let goal = 200;
let bet  = 10;
let win  = 1;

while ( cash < goal && cash > bet){
  let numb = Math.floor(Math.random() * 10 % 2);

  if(numb == win) {
        cash = cash + (bet * 4);
  }
  else {
        cash = cash - (bet * 4);
  }

}

//To check if Player Won or Loose
if (cash <= goal) {
         console.log("Congratulations, Player Won!");
}
else {
         console.log("Sorry, Player Loose!");
}
