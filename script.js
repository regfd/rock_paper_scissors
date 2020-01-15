
// Starting Message
const message = alert('This is a game of rock paper scissors');

// Computer Choices
const choices = ["Rock", "Paper", "Scissors"];

// Standings
let Player = 0;
let Computer = 0;


// Function to pull from choices
function play(choices) {
   return choices[Math.floor(Math.random() * choices.length)];
}

// Function for Game
function game(){

  // Define the selections
  let playerSelection = prompt('What is your choice ').toLowerCase();   // Input through prompt
  let computerSelection = play(choices);                  // Calls on the function outside
 
  if (playerSelection == 'rock' && computerSelection == 'Paper') {
            Computer += 1 ;
            alert (`Uh Oh...Computer picks Paper and wins`);
      } else if (playerSelection == "rock" && computerSelection == 'Rock') {
        alert (`It's a tie!`);
      } else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        Player += 1;
        alert (`Computer picked Scissors - you win!`);
      } else if  (playerSelection == 'paper' && computerSelection == 'Scissors') {
        Computer += 1 ;
        alert (`Uh Oh...Computer picks Scissors and wins`);
      } else if (playerSelection == "paper" && computerSelection == 'Paper') {
        alert (`It's a tie!`);
      } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        Player += 1;
        alert (`Computer picked Rock - you win!`);
      } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        Computer += 1 ;
        alert (`Uh Oh...Computer picks Rock and wins`);    
      } else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
        alert (`It's a tie!`);
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
      Player += 1;
      alert (`Computer picked Paper - you win!`);
      } else {
          console.log('No valid input');
          game()
      }
}

// HERE ARE THE GAMES

// Round #1
while  (Player < 5 || Computer < 5) {
  game();
  if (Player == 5) {
    break
  } else if (Computer == 5) {
    break
  }
}

alert(`Game over! Final Score: Player [${Player}] vs. Computer [${Computer}]`)

