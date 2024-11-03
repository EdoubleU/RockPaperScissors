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
    } else if (compSelects === 2) {
        console.log('The AI Super-Bot chooses Paper!');
        return 'Paper';
    } else {
        console.log('The AI Super-Bot chooses Scissors!');
        return 'Scissors';
    }
}

function getHumanChoice() {
    let humanSelects = prompt('Battle our AI Super-Bot by typing in Rock, Paper, or Scissors');
    
    if (humanSelects === 'Rock') {
        console.log('You choose Rock!');
        return 'Rock';
    } else if (humanSelects === 'Paper') {
        console.log('You choose Paper!');
        return 'Paper';
    } else {
        console.log('You choose Scissors!');
        return 'Scissors';
    }
}

function playRound() {
    let humanSelection = getHumanChoice();
    let compSelection = getComputerChoice();

    if ((humanSelection === 'Rock' && compSelection === 'Scissors') || 
        (humanSelection === 'Paper' && compSelection === 'Rock') ||
        (humanSelection === 'Scissors' && compSelection === 'Paper')) { 
        humanScore++;
        console.log('You Win! Your score is ' + humanScore + ' and the computer\'s score is ' + computerScore); 
    } else if ((humanSelection === 'Rock' && compSelection === 'Paper') || 
               (humanSelection === 'Paper' && compSelection === 'Scissors') ||
               (humanSelection === 'Scissors' && compSelection === 'Rock')) { 
        computerScore++;
        console.log('You Lose! Your score is ' + humanScore + ' and the computer\'s score is ' + computerScore); 
    } else {
        console.log('It\'s a tie!');
    }
}

function playGame() {
    while (roundCount < 5) {
        roundCount++;
        console.log('Round ' + roundCount);
        playRound();
    }
    
    console.log('Game Over!');
    console.log('Final Scores: You - ' + humanScore + ', Computer - ' + computerScore);
    
    if (humanScore > computerScore) {
        console.log('Congratulations, you won the game!');
    } else if (computerScore > humanScore) {
        console.log('The AI Super-Bot wins the game!');
    } else {
        console.log('It\'s an overall tie!');
    }
}

playGame();
