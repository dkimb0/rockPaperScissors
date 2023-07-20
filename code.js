//function getComputerChoice, randomly selects R, P or S
//function playRound(playerSelection, computerSelection)
//  outputs: "You lose! Paper beats Rock"
//  make playerSelection case insensitive (everything toLower)
//  return the output


function getComputerChoice() {
    //Make random number between 1 and 3
    comNumChoice = Math.floor(Math.random() * 3) + 1;
    //for each number, set R, P or S
    if (comNumChoice === 1) {
        return 'rock';
    } else if (comNumChoice === 2) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

console.log(getComputerChoice());