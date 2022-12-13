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
// Compare the two choices to see who won
// Show the player the results of the current round
// Continue play until five rounds have elapsed
// Declare a final winner based on all rounds played
