

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let reset = document.getElementById('reset');
let playerScore = parseInt(document.getElementById('pscore').innerHTML);
let computerScore = parseInt(document.getElementById('cscore').innerHTML);
let updatePlayerScore = document.getElementById('pscore');
let updateComputerScore = document.getElementById('cscore');
let results = document.getElementById('results');
let finalMessage = document.getElementById('finalmessage');
let mainbody = document.getElementById('hideendofgame');
let endbody = document.getElementById('showonend');
let round = 0;



// Adding click eventlisteners to the game
rock.addEventListener('click', playerSelection);
scissors.addEventListener('click', playerSelection);
paper.addEventListener('click', playerSelection);
reset.addEventListener('click', newGame)


function playerSelection() {
  game();

  if (playerScore == 5) {
    endGame();
    results.innerHTML = "Player wins the Game";
    finalMessage.innerHTML ="Victory!, You have defeated the Enemy"
    mainbody.style.display = 'none'
    endbody.style.display = 'block'
   }
   else if (computerScore == 5 ) {
     endGame();
     results.innerHTML = "Computer wins the Game";
     finalMessage.innerHTML = "Oh no!, You've been defated by the Enemy"
     mainbody.style.display = "none"
     endbody.style.display = "block"
   }
 }


function computerPlay() {
  var selection = ['Rock','Paper','Scissors'];
  var numbero = Math.floor(Math.random()* 3)

  return selection[numbero].toLowerCase();
}
// Functions for slecting results of one round
function winMessage(playerChoice,compChoice) {
  let selection = [ `You're pretty good at this. ${playerChoice} beats ${compChoice}.`,
    `Lets go!!! You won. ${playerChoice} beats ${compChoice}.`,
  `${playerChoice} beats ${compChoice}! Has mankind found its savior??`]
  let numbero = Math.floor(Math.random()* 3)

  if (playerScore == 4) {
    return `${playerChoice} beats ${compChoice}. One more and you're a hero!`
  }
  else {
    return selection[numbero]
  }
}

function lossMessage(playerChoice,compChoice) {
  let selection = [`Arghh. ${compChoice} beats ${playerChoice}. Give it another shot!`,
    `${compChoice} beats ${playerChoice}. It's ok. You got this!!`,
    `Oh no! You lost. ${compChoice} beats ${playerChoice}.`
  ]
  let numbero = Math.floor(Math.random()* 3)

  if (computerScore == 4) {
    return `Oh no. It's match point!! ${compChoice} beats ${playerChoice}. Don't let us down!`
  }

  else {
    return selection[numbero]
  }
}

function game() {
  let computerSelection = computerPlay()
  let playerSelection = document.activeElement.value;
  console.log(playerSelection)
  console.log(computerSelection)

  if (computerSelection === 'rock' && playerSelection === 'paper') {
    console.log(playerScore)
    round += 1
    playerScore += 1
    console.log(playerScore)
    updatePlayerScore.innerHTML = playerScore
    results.innerHTML = winMessage(playerSelection,computerSelection)
  }
  else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    round += 1
    computerScore += 1;
    updateComputerScore.innerHTML = computerScore;
    results.innerHTML = lossMessage(playerSelection,computerSelection)
  }
  else if (computerSelection === 'paper' && playerSelection === 'rock') {
    round += 1
    computerScore += 1;
    updateComputerScore.innerHTML = computerScore;
    results.innerHTML = lossMessage(playerSelection,computerSelection)
  }
  else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    round += 1
    playerScore += 1;
    updatePlayerScore.innerHTML = playerScore;
    results.innerHTML = winMessage(playerSelection,computerSelection)
  }
  else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    round += 1
    playerScore += 1;
    updatePlayerScore.innerHTML = playerScore;
    results.innerHTML = winMessage(playerSelection,computerSelection)
  }
  else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    round += 1
    computerScore += 1;
    updateComputerScore.innerHTML = computerScore;
    results.innerHTML = lossMessage(playerSelection,computerSelection)
  }
  else {
    round += 1
    results.innerHTML = `Round ${round} it's a tie!`
  }
}




function endGame() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

function newGame() {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  playerScore = 0;
  updatePlayerScore.innerHTML = 0;
  computerScore = 0;
  updateComputerScore.innerHTML = 0;
  round = 0;
document.getElementById('results').innerHTML = 'Who will win?'
mainbody.style.display = 'block'
endbody.style.display = 'none'

}
