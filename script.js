const CHOICES = ['rock', 'paper', 'scissors'];

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[random];
}

function getHumanChoice() {
  const choice = prompt('What do you choose? Rock, paper, or scissors?');

  if (CHOICES.includes(choice.toLowerCase())) {
    return choice;
  }
  return getHumanChoice();
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

function playRound() {
  const computer = getComputerChoice();
  const human = getHumanChoice();

  const winner = getWinner(computer, human);

  // Lose
  if (winner === -1) {
    computerScore++;
    console.log(`You lose! ${computer} beats ${human}`);
  } else if (winner === 0) {
    console.log(`You tied!`);
  } else {
    humanScore++;
    console.log(`You win! ${human} beats ${computer}`);
  }
}

function resetGame() {
  computerScore = 0;
  humanScore = 0;
}

function endGame() {
  const endScore = ` the game with a score of ${humanScore} to ${computerScore}!`;

  if (humanScore > computerScore) {
    console.log('You won' + endScore);
  } else if (humanScore < computerScore) {
    console.log('You lost' + endScore);
  } else {
    console.log('You tied' + endScore);
  }
}

function playGame() {
  resetGame();

  for (let i = 0; i < 5; i++) {
    playRound();
  }

  endGame();
}

function main() {
  playGame();
}

main();
