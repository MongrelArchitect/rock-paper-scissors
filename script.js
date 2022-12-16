// A simple script for playing rock-paper-scissors against the computer

// Generate a random choice for the computer player
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return null;
      break;
  } 
}

// Compare the two choices to see who won
function playRound(playerChoice, computerChoice) {
  if (computerChoice === 'rock') {
    switch (playerChoice) {
      case 'rock':
        return 'tie';
        break;
      case 'paper':
        return 'player';
        break;
      case 'scissors':
        return 'computer';
        break;
      default:
        return null;
        break;
    }
  } else if (computerChoice === 'paper') {
    switch (playerChoice) {
      case 'rock':
        return 'computer';
        break;
      case 'paper':
        return 'tie';
        break;
      case 'scissors':
        return 'player';
        break;
      default:
        return null;
        break;
    }
  } else if (computerChoice === 'scissors') {
    switch (playerChoice) {
      case 'rock':
        return 'player';
        break;
      case 'paper':
        return 'computer';
        break;
      case 'scissors':
        return 'tie';
        break;
      default:
        return null;
        break;
    }
  } else {
    return null;
  }
}

// Show the player the results of the current round
function showRoundWinner(winner, playerChoice, computerChoice) {
  const roundResult = document.querySelector('#round-result');
  const roundWinner = document.querySelector('#round-winner');

  switch (winner) {
    case 'player':
      roundResult.textContent = 
        `${playerChoice} BEATS ${computerChoice}`.toUpperCase();
      roundWinner.textContent = 'YOU WIN THIS ROUND!'
      break;
    case 'computer':
      roundResult.textContent = 
        `${computerChoice} BEATS ${playerChoice}`.toUpperCase();
      roundWinner.textContent = 'COMPUTER WINS THIS ROUND'
      break;
    case 'tie':
      roundResult.textContent = 
        `${computerChoice} VS. ${playerChoice}: TIE`.toUpperCase();
      roundWinner.textContent = 'NOBODY WINS THIS ROUND'
      break;
    default:
      roundResult.textContent = 'ERROR: SOMETHING WENT WRONG';
      break;
  }
}

// Each button plays a round with the appropriate choice
function buttonListeners() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const computerChoice = getComputerChoice();
      const playerChoice = button.id;
      const winner = playRound(playerChoice, computerChoice);
      showRoundWinner(winner, playerChoice, computerChoice);
    });
  });
}

buttonListeners();
