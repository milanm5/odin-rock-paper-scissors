let humanScore, computerScore = 0;
const computerChoice = getComputerChoise();
console.log(computerChoice);
const humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice);


function getComputerChoise() {
    let randomChoise = Math.floor((Math.random() * 3)+ 1); 
    switch(randomChoise) {
        case 1: 
            return "rock";
            break;
        case 2: 
            return "paper";
            break;
        case 3:
            return "scissors";
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

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a tie! You both got " + humanChoice);
        return;
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerChoice++;
        } else {
            console.log("You win! Rock beats Scissors");
            humanChoice++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanChoice++;
        } else {
            console.log("You lose! Scissors beats Paper");
            computerChoice++;
        }
    } else {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerChoice++;
        } else {
            console.log("You win! Scissors beats Paper");
            humanChoice++;
        }
    }
}