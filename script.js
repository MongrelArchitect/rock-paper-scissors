// A simple script for playing rock-paper-scissors against the computer

// * PSEUDOCODE *
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

// Get the player's choice
function getPlayerChoice() {
  return prompt('Choose rock, paper or scissors: ').toLowerCase();
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
// Continue play until five rounds have elapsed
// Declare a final winner based on all rounds played
