function getComputerChoice() {

    let choices = ['rock', 'paper', 'scissors'];
    return choices[~~(Math.random() * choices.length)];

}

let playerScore = 0
let computerScore = 0
let playerSelection;
let computerSelection;
let result;


function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    result = "";

    
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection =='rock')) {

            playerScore +=1
            result = ("You win!!" + playerSelection + " beats " + computerSelection);
        
    }

    else if (playerSelection === computerSelection) {

            result = ("It's a tie!!  Try again");
    }
    
    else {
        result = ("You lose!! " + computerSelection + " beats " + playerSelection);
    }

}
playerSelection = "rock";
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
