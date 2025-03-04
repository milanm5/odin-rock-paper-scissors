console.log("Hello world!");
console.log(getComputerChoise());
console.log(getHumanChoice());


function getComputerChoise() {
    let randomChoise = Math.floor((Math.random() * 3)+ 1); 
    switch(randomChoise) {
        case 1: 
            return "Rock";
            break;
        case 2: 
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function getHumanChoice() {
    
    let sign = prompt("What's your sign? (Rock, Paper or Scissors)");

    while (sign.toLowerCase() !== "rock" && sign.toLowerCase() !== "paper" && sign.toLowerCase() !== "scissors") {
        sign = prompt("Try again");
    } 

    return sign;
}