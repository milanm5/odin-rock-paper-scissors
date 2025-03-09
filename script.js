let humanScore = document.getElementById("player-score"); 
let computerScore = document.getElementById("computer-score");
document.getElementById("rock-btn").addEventListener("click", () => {playRound("rock", getComputerChoise())});
document.getElementById("paper-btn").addEventListener("click", () => {playRound("paper", getComputerChoise())});
document.getElementById("scissors-btn").addEventListener("click", () => {playRound("scissors", getComputerChoise())});

// playGame();

function playGame() {
    
    // for (i = 0; i < 5; i++) {
    //     let computerChoice = getComputerChoise();
    //     let humanChoice = getHumanChoice();
    //     playRound(humanChoice, computerChoice);
    // }
    
    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (humanScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }
}

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
            computerScore.textContent = Number(computerScore.textContent) + 1;
        } else {
            console.log("You win! Rock beats Scissors");
            humanScore.textContent = Number(humanScore.textContent) + 1;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore.textContent = Number(humanScore.textContent) + 1;
        } else {
            console.log("You lose! Scissors beats Paper");
            computerScore.textContent = Number(computerScore.textContent) + 1;
        }
    } else {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore.textContent = Number(computerScore.textContent) + 1;
        } else {
            console.log("You win! Scissors beats Paper");
            humanScore.textContent = Number(humanScore.textContent) + 1;
        }
    }

    checkScore();
}

function checkScore() {
    if (Number(humanScore.textContent) === 5) {
        alert("You win!")
    }

    if (Number(computerScore.textContent) === 5) {
        alert("Computer wins!")
    }

}