let humanScore = document.getElementById("player-score"); 
let computerScore = document.getElementById("computer-score");

// Adds onClick event listener to buttons which when pressed changes the text of selected choice and calls playRound function
document.getElementById("rock-btn").addEventListener("click", () => {
    document.getElementById("player-chose").textContent = "Rock";                                                                
    playRound("rock", getComputerChoise())});
document.getElementById("paper-btn").addEventListener("click", () => {
    document.getElementById("player-chose").textContent = "Paper";
    playRound("paper", getComputerChoise())});
document.getElementById("scissors-btn").addEventListener("click", () => {
    document.getElementById("player-chose").textContent = "Scissors";
    playRound("scissors", getComputerChoise())});

function getComputerChoise() {
    let randomChoise = Math.floor((Math.random() * 3)+ 1); 
    switch(randomChoise) {
        case 1: 
            document.getElementById("computer-chose").textContent = "Rock";
            return "rock";
            break;
        case 2: 
            document.getElementById("computer-chose").textContent = "Paper";
            return "paper";
            break;
        case 3:
            document.getElementById("computer-chose").textContent = "Scissors";
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
        alert("You win!");
        restartScore();
    }

    if (Number(computerScore.textContent) === 5) {
        alert("Computer wins!");
        restartScore();
    }
}

function restartScore() {
    humanScore.textContent = 0;
    computerScore.textContent = 0;
    document.getElementById("player-chose").textContent = "-";
    document.getElementById("computer-chose").textContent = "-";
}