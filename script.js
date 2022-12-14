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
function showRoundWinner(winner) {
  switch (winner) {
    case 'player':
      console.log('You win this round!');
      break;
    case 'computer':
      console.log('Computer wins this round.');
      break;
    case 'tie':
      console.log('Tie round.');
      break;
    default:
      console.log('Something went wrong...');
      break;
  }
}

// Continue play until five rounds have elapsed
function game() {
  let compWins = 0;
  let playWins = 0;

  for (let i = 0; i < 5; i += 1) {
    const playerChoice = getPlayerChoice();
    const compChoice = getComputerChoice();
    const winner = playRound(playerChoice, compChoice);
    switch (winner) {
      case 'player':
        playWins += 1;
        break;
      case 'computer':
        compWins += 1;
        break;
      default:
        break;
    }
    showRoundWinner(winner);
  }

  // Declare a final winner based on all rounds played
  if (compWins > playWins) {
    console.log('Sorry, computer won. Try again!');
  } else if (compWins < playWins) {
    console.log('You win the game! Horray!');
  } else {
    console.log('Tie game. Give it another shot!');
  }
  console.log(`Player: ${playWins} wins | Computer: ${compWins} wins`);
}

game();
