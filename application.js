
// user choice input

function getUserChoice(){
    let userChoice =  window.prompt(`It is time to smash, cut or smother your way to victory \n type: \n r for Rock, \n p for Paper or \n s for Scissors`);
    userChoice = userChoice.trim().toLowerCase();   
    if (userChoice === 'r') {
        return 'Rock';
    } else if (userChoice === 'p') {
        return 'Paper';
    } else if (userChoice === 's') {
        return 'Scissors';
    } else { 
        console.log('What are you doing!? Defaulting to Rock because you are being as thick as one.');
        return 'Rock'; 
    }

    getComputerChoice()
}

// comp's random choice
function getComputerChoice() {
let compChoice =  Math.floor(Math.random() * 3);
    
    if (compChoice === 0) {
    return 'Rock';

    } else if (compChoice === 1) {
    return 'Paper';

    } else {
    return 'Scissors';
    
    }

}

let userChoice = getUserChoice();
console.log('You selected: ' + userChoice);

let compChoice = getComputerChoice();
console.log('Your opponent selected: ' + compChoice);


//determine if player wins or not

function determineWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return 'It\'s a tie!';
    } else if (
        (userChoice === 'Rock' && compChoice === 'Scissors') ||
        (userChoice === 'Paper' && compChoice === 'Rock') ||
        (userChoice === 'Scissors' && compChoice === 'Paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
    getUserChoice();
}

//The result
console.log(determineWinner(userChoice, compChoice));

//running score coming soon



