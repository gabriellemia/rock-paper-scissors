let playerScore = 0;
let computerScore = 0;
let choices = ['rock', 'paper', 'scissors'];

game();

function getComputerChoice() {
    
    return choices[Math.floor(Math.random()*choices.length)];
}


function playRound() {

    let playerSelection= '';
    let computerSelection = getComputerChoice();

    let validFound = false;
    while (!validFound){
        playerSelection = prompt("Your move! Rock, Paper or Scissors?").toLowerCase();
        if (choices.includes(playerSelection)){
            validFound = true;
        }
        else
            console.log("invalid selection, please try again"); 
    }

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection =='rock')) {

            console.log("You win!!" + playerSelection + " beats " + computerSelection);
            playerScore += 1;
        
    }

    else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
            (computerSelection == 'scissors' && playerSelection == 'paper') ||
            (computerSelection == 'paper' && playerSelection =='rock')) {

            console.log("You lose!! " + computerSelection + " beats " + playerSelection);
            computerScore +=1;
    }

    else if (playerSelection === computerSelection) {
            
            console.log("It's a tie!!  Try again");
            playRound();
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


