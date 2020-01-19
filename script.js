
// Starting Message
// const message = alert('This is a game of rock paper scissors');

// Computer Choices
const choices = ["Rock", "Paper", "Scissors"];

// Standings
let Player = 0;
let Computer = 0;




/// FIND BUTTONS
const btn_Rock = document.querySelector('#Rock');
btn_Rock.addEventListener('click', () => {
  game("rock");
});

const btn_Paper = document.querySelector('#Paper');
btn_Paper.addEventListener('click', () => {
  game('paper');
});

const btn_Scissors = document.querySelector('#Scissors');
btn_Scissors.addEventListener('click', () => {
  game('scissors')
});




// Function to pull from choices
function play(choices) {
   return choices[Math.floor(Math.random() * choices.length)];
}

// Function for Game
function game(playa){
  
  // Define the selections
//  let playerSelection = prompt('What is your choice ').toLowerCase();   // Input through prompt

let playerSelection = playa;
let computerSelection = play(choices);                  // Calls on the function outside
 


        if (Player >= 5 || Computer >=5)  {
          showmessage.textContent = `The Game is Already Over!`
        } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
            Computer += 1 ;
            // alert (`Uh Oh...Computer picks Paper and wins`);
              showplayerscore.textContent = `Player: ${Player}`;
              showcomputerscore.textContent = `Computer: ${Computer}`;
              showmessage.textContent = `Computer Picks Paper and Wins`
      } else if (playerSelection == "rock" && computerSelection == 'Rock') {
        showmessage.textContent = `Tie!`
      } else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        Player += 1;
        showplayerscore.textContent = `Player: ${Player}`;
        showcomputerscore.textContent = `Computer: ${Computer}`;
        showmessage.textContent = `Computer Picked Scissors -- You Win!`
      } else if  (playerSelection == 'paper' && computerSelection == 'Scissors') {
        Computer += 1 ;
        showmessage.textContent = `Computer Scissors and Wins`
        showplayerscore.textContent = `Player: ${Player}`;
        showcomputerscore.textContent = `Computer: ${Computer}`;
      } else if (playerSelection == "paper" && computerSelection == 'Paper') {
        showmessage.textContent = `Tie!`
      } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        Player += 1;
        showplayerscore.textContent = `Player: ${Player}`;
        showcomputerscore.textContent = `Computer: ${Computer}`;
        showmessage.textContent = `Computer Picked Rock -- You Win!`
      } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        Computer += 1 ;
        showplayerscore.textContent = `Player: ${Player}`;
        showcomputerscore.textContent = `Computer: ${Computer}`;
        showmessage.textContent = `Computer Picks Rock and Wins`;    
      } else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
        showmessage.textContent = `Tie!`
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
      Player += 1;
      showplayerscore.textContent = `Player: ${Player}`;
        showcomputerscore.textContent = `Computer: ${Computer}`;
        showmessage.textContent = `Computer Picked Paper -- You Win!`
      } else {
          console.log('No valid input');
          game()
      }
}

// SHOW PLAYERSCORE ON SCREEN
const Playerscore = document.querySelector('#Playerscore');
let showplayerscore = document.createElement('p');
showplayerscore.classList.add('showplayerscore')
showplayerscore.textContent = `Player: 0`;

Playerscore.appendChild(showplayerscore);


const Computerscore = document.querySelector('#Computerscore');
let showcomputerscore = document.createElement('p');
showcomputerscore.classList.add('showcomputerscore')
showcomputerscore.textContent = `Computer: 0`;

Computerscore.appendChild(showcomputerscore);


const message = document.querySelector('#message');
const showmessage = document.createElement('p');
showmessage.classList.add('showmessage');
showmessage.textContent = 'Let the game begin!';

message.appendChild(showmessage);

// HERE ARE THE GAMES

// Round #1
/*while  (Player < 5 || Computer < 5) {
  game();
  if (Player == 5) {
    break
  } else if (Computer == 5) {
    break
  }
} */

// alert(`Game over! Final Score: Player [${Player}] vs. Computer [${Computer}]`)



