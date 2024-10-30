// Running score 
let userScore = 0; 
let compScore = 0;

// User choice
function getUserChoice() {
    let userChoice = window.prompt(
        `It is time to smash, cut, or smother your way to victory!\nType:\n r for Rock,\n p for Paper, or\n s for Scissors`
    );
    userChoice = userChoice.trim().toLowerCase();

    if (userChoice === 'r') {
        return 'Rock';
    } else if (userChoice === 'p') {
        return 'Paper';
    } else if (userChoice === 's') {
        return 'Scissors';
    } else {
        console.log('You picked something silly! We\'re going to go ahead and switch it to Rock.');
        return 'Rock';
    }
}

// Computer's choice
function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) return 'Rock';
    if (compChoice === 1) return 'Paper';
    return 'Scissors';
}

// update scores
function determineWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        console.log(`It's a tie!`);
    } else if (
        (userChoice === 'Rock' && compChoice === 'Scissors') ||
        (userChoice === 'Paper' && compChoice === 'Rock') ||
        (userChoice === 'Scissors' && compChoice === 'Paper')
    ) {
        userScore++;
        console.log(`You win!`);
    } else {
        compScore++;
        console.log(`You lose!`);
    }
}

//  play one round and restart
function playGame() {
    let userChoice = getUserChoice();
    console.log('You selected: ' + userChoice);

    let compChoice = getComputerChoice();
    console.log('Your opponent selected: ' + compChoice);

    determineWinner(userChoice, compChoice);

    console.log(`Current Scores - You: ${userScore}, Opponent: ${compScore}`);
    
    // Automatically restart the game
    setTimeout(playGame, 2000); 
}

// Start the game
playGame();
