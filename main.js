function computerPlay() {
    // generate random number
    const generateRandomNumber = () => Math.floor(Math.random() * Math.floor(3));
    const randomNumber = generateRandomNumber();
    let computerSelection;
    // assign computerSelection to Rock, Paper or Scissors based on random number
    switch(randomNumber) {
        case 0 : computerSelection = "rock";
        break;
        case 1 : computerSelection = "scissors";
        break;
        default: computerSelection = "paper";
    };
    return computerSelection;    
};

function playRound (playerSelection, computerSelection) {
    // obtain playerSelection
    playerSelection = prompt("Rock, Paper or Scissors?");

    // playerSelection should be case insensitive
    let validatedPlayerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

    // evaluate playerSelection vs computerSelection &&
    // return a string that declares the winner of the round
    if ((validatedPlayerSelection === "rock" && computerSelection === "scissors") ||
    (validatedPlayerSelection === "scissors" && computerSelection === "paper") ||
    (validatedPlayerSelection === "paper" && computerSelection === "rock")) {
        alert (`${validatedPlayerSelection} beats ${computerSelection}!`);
        return "player";
    } else if ((validatedPlayerSelection === "scissors" && computerSelection === "rock") ||
    (validatedPlayerSelection === "rock" && computerSelection === "paper") ||
    (validatedPlayerSelection === "paper" && computerSelection === "scissors")) {
        alert (`${computerSelection} beats ${validatedPlayerSelection}!`)
        return "computer";
    } else {
        alert ("It's a tie!");
        return "It's a tie!";
    }; 
};

function game() {
    // playRound function should be used inside of this function
    
    // play a 5 round game
    let playerScore = 0;
    let computerScore = 0;
    let roundCounter = 0;

    while (roundCounter < 5) {
    let winner = playRound();
    if (winner === "player") {
        playerScore += 1;
        roundCounter ++;
        console.log(`Round ${roundCounter}: Player Score is ${playerScore} 
        and Computer Score is ${computerScore}`)
    } else if (winner === "computer") {
        computerScore += 1;
        roundCounter ++;
        console.log(`Round ${roundCounter}: Player Score is ${playerScore} 
        and Computer Score is ${computerScore}`)
    } else {
        console.log("It's a tie!")
    }}
    
    if (roundCounter === 5) {
        if (playerScore > computerScore) {
        console.log(`The game is over! You win!`)
        } else {
            console.log(`The game is over! You lose!`)
        };
    };
};

game();

