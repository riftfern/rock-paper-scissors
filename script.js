// these two varibles will passed as parameters in the playround function
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button');
const body = document.querySelector("body");
const results = document.createElement('div');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        playRound(playerChoice,compChoice);
    });
  });



// a function called computerPlay that randomnly returns rock, paper, or scissors
function computerPlay(){
    let compChoice = Math.random();
      if (compChoice < .34){
        return 'rock';
      }else if (compChoice <= .67){
        return 'paper';
      }else{
        return 'scissors';
      }
    }
let computerSelection = computerPlay();


results.classList.add('results');



function playRound(playerSelection,computerSelection){
    //if rock
    if(playerSelection == 'rock'){
      if(computerSelection == 'scissors'){
        ++playerScore;
        results.textContent = `You win!  You have ${userScore}, and the computer has ${compScore}`;
        
      }else if(computerSelection == 'paper'){
        ++compScore;
        return 'You lose:(';
        
      }else if(computerSelection == 'rock'){
        return 'It is a tie!';
      }else{
        return 'Opps!';
      }
    }
    //if paper
    else if(playerSelection == 'paper'){
      if(computerSelection == 'rock'){
        ++playerScore;
        return 'You win!';
        
      }else if(computerSelection == 'scissors'){
        ++compScore;
        return 'You lose:(';
        
      }else if(computerSelection == 'paper'){
        return 'It is a tie!';
      }else{
        return 'Opps!';
      }
    }
    // ifscissors
    else if(playerSelection == 'scissors'){
      if(computerSelection == 'paper'){
        ++playerScore;
        return 'You win!';
        
      }else if(computerSelection == 'rock'){
        ++compScore;
        return 'You lose:(';
        
      }else if(computerSelection == 'scissors'){
        return 'It is a tie!';
      }else{
        return 'Opps!';
      }
    }
    if(playerScore === 5 || computerScore === 5){
        declareWinner();
    }
  }


function displayResults(str){
    results.textContent = str;
}

function declareWinner(){
    if(playerScore > computerScore){
        results.textContent = 'You Won!';
    }else if(computerScore < playerScore){
        results.textContent = 'You Lost!';
    }
}