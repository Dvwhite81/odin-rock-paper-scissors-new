/* DOM Elements */
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const humanScoreSpan = document.querySelector('#human-score');
const computerScoreSpan = document.querySelector('#computer-score');
const resultsH3 = document.querySelector('#results');
const endGameDiv = document.querySelector('#end-game');
const endResults = document.querySelector('#end-results');
const playAgainBtn = document.querySelector('#play-again-btn');

/* Game Globals */
const CHOICES = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[random];
}

/*
function getHumanChoice() {
  const choice = prompt('What do you choose? Rock, paper, or scissors?');

  if (CHOICES.includes(choice.toLowerCase())) {
    return choice;
  }
  return getHumanChoice();
}
*/

function updateScore() {
  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;
}

function updateResults(message) {
  resultsH3.textContent = message;
}

function updateEndResults(message) {
  endResults.textContent = message;
  endGameDiv.style.display = 'flex';
}

function endGame() {
  const endScore = ` the game with a score of ${humanScore} to ${computerScore}!`;

  if (humanScore > computerScore) {
    updateEndResults('You won' + endScore);
  } else if (humanScore < computerScore) {
    updateEndResults('You lost' + endScore);
  } else {
    updateEndResults('You tied' + endScore);
  }

  playAgainBtn.addEventListener('click', main);
}

// Computer = -1, Tie = 0, Human = 1
function getWinner(computer, human) {
  let winner;

  if (computer === 'rock') {
    if (human === 'rock') {
      winner = 0;
    } else if (human === 'paper') {
      winner = 1;
    } else {
      winner = -1;
    }
  }

  if (computer === 'paper') {
    if (human === 'paper') {
      winner = 0;
    } else if (human === 'scissors') {
      winner = 1;
    } else {
      winner = -1;
    }
  }

  if (computer === 'scissors') {
    if (human === 'scissors') {
      winner = 0;
    } else if (human === 'rock') {
      winner = 1;
    } else {
      winner = -1;
    }
  }

  return winner;
}

function playRound(human) {
  if (humanScore >= 5 || computerScore >= 5) {
    return;
  }

  const computer = getComputerChoice();

  const winner = getWinner(computer, human);

  // Lose
  if (winner === -1) {
    computerScore++;
    updateResults(`You lose! ${computer} beats ${human}`);
  } else if (winner === 0) {
    updateResults(`You tied!`);
  } else {
    humanScore++;
    updateResults(`You win! ${human} beats ${computer}`);
  }

  updateScore();

  if (humanScore >= 5 || computerScore >= 5) {
    setTimeout(() => {
      endGame();
    }, 500);
  }
}

function resetGame() {
  computerScore = 0;
  humanScore = 0;
  updateScore();
  updateResults('');
  endGameDiv.style.display = 'none';
}

/*
function playGame() {
  resetGame();

  for (let i = 0; i < 5; i++) {
    playRound();
  }

  playRound();

  endGame();
}
*/

function addListeners() {
  rockBtn.addEventListener('click', () => playRound('rock'));
  paperBtn.addEventListener('click', () => playRound('paper'));
  scissorsBtn.addEventListener('click', () => playRound('scissors'));
}

function main() {
  resetGame();
  addListeners();
}

main();
