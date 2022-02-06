let playerScore = 0;
let compScore = 0;
let roundWinner = '';

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      roundWinner = 'tie'
    }
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
      playerScore++;
      roundWinner = 'player'
      updateScore();
    }
    if (
      (computerSelection === 'rock' && playerSelection === 'scissors') ||
      (computerSelection === 'scissors' && playerSelection === 'paper') ||
      (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
      compScore++;
      roundWinner = 'computer'
      updateScore();
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
  }


const buttons = document.querySelectorAll('button');
const body = document.querySelector("body");
const results = document.querySelector('#results');
const playerScoreCard = document.querySelector('#playerScore');
const computerScoreCard = document.querySelector('#computerScore');
const content  = document.createElement('div');
content.classList.add('results');
results.appendChild(content);
const winnerCard = document.querySelector('#winner');
  
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playRound(playerSelection,computerPlay());

        if(playerScore === 5 || compScore === 5){
            declareWinner();
        }

    });
  });

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'rock'
      case 1:
        return 'paper'
      case 2:
        return 'scissors'
    }
}
  
function isGameOver() {
    return playerScore === 5 || compScore === 5
  }

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
      results.textContent = `${capitalizeFirstLetter(
        playerSelection
      )} beats ${computerSelection.toLowerCase()}`
      return
    }
    if (winner === 'computer') {
     results.textContent = `${capitalizeFirstLetter(
        playerSelection
      )} is beaten by ${computerSelection.toLowerCase()}`
      return
    }
  
    results.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} ties with ${computerSelection.toLowerCase()}`
  }

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function updateScore() {
    if (roundWinner === 'tie') {
      score.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
      playerScoreCard.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
      computerScoreCard.textContent = 'You lost!'
    }
  
    playerScoreCard.textContent = `Player: ${playerScore}`
    computerScoreCard.textContent = `Computer: ${compScore}`

    if(playerScore === 5){
        winnerCard.textContent = 'You Won!';
    }else if(compScore === 5){
        winnerCard.textContent = 'You Lost!';
    }
}

function declareWinner(){
    if(playerScore > computerScore){
        winnerCard.textContent = 'You Won!';
    }else if(computerScore < playerScore){
        winnerCard.textContent = 'You Lost!';
    }
}