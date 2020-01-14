function game () {
    let selection = prompt("Rock, paper or scissor")
    
    if (selection === 'rock') {

        alert('Wowzers');
    }
}


const items = [
    "Rock",
    "Paper",
    "Scissor"
];

function randomitem(items) {
    return items[Math.floor(Math.random() * items.length)];
 }

 console.log(randomitem(items));
