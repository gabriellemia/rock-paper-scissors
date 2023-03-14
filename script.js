const computerChoiceDis = document.querySelector("#computerChoice");
const playerChoiceDis = document.querySelector("#playerChoice");
const resultDis = document.querySelector("#result");
const choices = document.querySelectorAll('.choices');
const computerScoreDis = document.querySelector("#compScore");
const playerScoreDis = document.querySelector("#playScore");
const gameResultDis = document.querySelector("#gameResult");
const newGame = document.querySelector("#newGame");
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

computerScoreDis.textContent = computerScore;
playerScoreDis.textContent = playerScore;

choices.forEach(choice => choice.addEventListener('click', (e) => {
    playerSelection = e.target.innerText.toLowerCase();
    playerChoiceDis.textContent = playerSelection;
    getComputerChoice();
    playRound();
    endGame();
}))

newGame.addEventListener('click', resetGame);
    

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random()*choices.length);
    
    if (randomChoice === 0) {
        computerSelection = 'rock';
    }
    if (randomChoice === 1) {
        computerSelection = 'paper';
    }
    if (randomChoice === 2) {
        computerSelection = 'scissors';
    }
    computerChoiceDis.textContent = computerSelection;
}


function playRound() {
        
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection =='rock')) {
    
            result = "You win!! " + playerSelection + " beats " + computerSelection;
            playerScore += 1;
            playerScoreDis.textContent = playerScore;     
    }
    else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
            (computerSelection == 'scissors' && playerSelection == 'paper') ||
            (computerSelection == 'paper' && playerSelection =='rock')) {
    
            result = "You lose!! " + computerSelection + " beats " + playerSelection;
            computerScore +=1;
            computerScoreDis.textContent = computerScore;
    }
    else if (playerSelection === computerSelection) {
                
            result = "It's a tie!!  Try again";
    }
    resultDis.textContent = result;
    
}
    
function endGame() { 
    if (playerScore === 5 || computerScore === 5) { // Has the game finished?
        choices.forEach(button => button.disabled = true);
    
        gameResultDis.textContent = (playerScore>computerScore) ? 
        "You won the game!! Congratulations, you outwitted the Computer!" : 
        "You lost the game! Oh dear, bested by a machine!";
    }
    
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    computerScoreDis.textContent = computerScore;
    playerScoreDis.textContent = playerScore;
    playerChoiceDis.textContent = "";
    computerChoiceDis.textContent = "";
    gameResultDis.textContent = "";
    resultDis.textContent = "";
    choices.forEach(button => button.disabled = false);
}




   

       



