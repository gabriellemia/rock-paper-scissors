let playerScore = 0;
let computerScore = 0;
let choices = ['rock', 'paper', 'scissors'];

game();

function getComputerChoice() {
    
    return choices[Math.floor(Math.random()*choices.length)];
}


function playRound() {


    let playerSelection = prompt("Your move! Rock, Paper or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice();
    
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection =='rock')) {

            console.log("You win!!" + playerSelection + " beats " + computerSelection);
            playerScore += 1;
        
    }

    else if (playerSelection === computerSelection) {
            
            console.log("It's a tie!!  Try again");
    }
    
    else {
            
            console.log("You lose!! " + computerSelection + " beats " + playerSelection);
            computerScore +=1;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    
    if (playerScore > computerScore)
        console.log("You won the game, well done!");
    else
        console.log("You lost, better luck next time!");
       
}


