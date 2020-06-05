function computerPlay() {
    // generate random number
    const generateRandomNumber = () => Math.floor(Math.random() * Math.floor(3));
    const randomNumber = generateRandomNumber();
    let computerSelection;
    // assign computerSelection to Rock, Paper or Scissors based on random number
    switch(randomNumber) {
        case 0 : computerSelection = "Rock";
        break;
        case 1 : computerSelection = "Scissors";
        break;
        default: computerSelection = "Paper";
    };
    return computerSelection;    
};

function playRound (playerSelection, computerSelection) {
    // obtain playerSelection
    // evaluate playerSelection vs computerSelection
    // playerSelection should be case insensitive
    // return a string that declares the winner of the round
};

function game() {
    // playRound function should be used inside of this function
    // play a 5 round game
    // keep score
    // report winner or loser at the very end
    // use console.log to display results of each round
    // use prompt to get input from user
}

