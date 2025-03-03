console.log("Hello world!");
getComputerChoise();


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