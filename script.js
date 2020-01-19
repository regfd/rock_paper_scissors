
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
 


        if (Player >= 5)  {
          alert('test')
        } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
            Computer += 1 ;
            // alert (`Uh Oh...Computer picks Paper and wins`);
              showplayerscore.textContent = `Player: ${Player}`;
              showcomputerscore.textContent = `Computer: ${Computer}`;
              showmessage.textContent = `Uh Oh...Computer picks Paper and wins`
      } else if (playerSelection == "rock" && computerSelection == 'Rock') {
        alert (`It's a tie!`);
      } else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        Player += 1;
        showplayerscore.textContent = `Player: ${Player}`;
        showcomputerscore.textContent = `Computer: ${Computer}`;
        alert (`Computer picked Scissors - you win!`);
      } else if  (playerSelection == 'paper' && computerSelection == 'Scissors') {
        Computer += 1 ;
        alert (`Uh Oh...Computer picks Scissors and wins`);
        showplayerscore.textContent = `Player: ${Player}`;
        showcomputerscore.textContent = `Computer: ${Computer}`;
      } else if (playerSelection == "paper" && computerSelection == 'Paper') {
        alert (`It's a tie!`);
      } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        Player += 1;
        showplayerscore.textContent = `Player: ${Player}`;
        showcomputerscore.textContent = `Computer: ${Computer}`;
        alert (`Computer picked Rock - you win!`);
      } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        Computer += 1 ;
        showplayerscore.textContent = `Player: ${Player}`;
        showcomputerscore.textContent = `Computer: ${Computer}`;
        alert (`Uh Oh...Computer picks Rock and wins`);    
      } else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
        alert (`It's a tie!`);
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
      Player += 1;
      showplayerscore.textContent = `Player: ${Player}`;
        showcomputerscore.textContent = `Computer: ${Computer}`;
      alert (`Computer picked Paper - you win!`);
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
showmessage.textContent = 'test';

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



