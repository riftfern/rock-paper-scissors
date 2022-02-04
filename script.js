// these two varibles will passed as parameters in the playround function
let playerChoice = '';
let compChoice = '';

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

//two variable for the computer's score and the users score
let userScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        playRound(playerChoice,compChoice);
    });
  });

const results = document.createElement('div');
results.classList.add('results');

function playRound(playerSelection,computerSelection){
    //if rock
    if(playerSelection == 'rock'){
      if(computerSelection == 'scissors'){
        userScore++;
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
        ++userScore;
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
        ++userScore;
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
  }