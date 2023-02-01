const choices = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let result;

function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    result = "";
    
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection =='rock')) {

            playerScore += 1;
            return result = ("You win!!" + playerSelection + " beats " + computerSelection);
        
    }

    else if (playerSelection === computerSelection) {

            return result = ("It's a tie!!  Try again");
    }
    
    else {
            computerScore +=1;
            return result = ("You lose!! " + computerSelection + " beats " + playerSelection);
    }
}
    playerSelection = prompt ("Your move! Rock, Paper or Scissors?");
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i <= 5; i++) {

    if (playerScore > computerScore)
        return result = ("You won the game, well done")

    else if (computerScore > playerScore)
        return result = ("You lost, better luck next time!")

    else 
        playRound();

    }
}
