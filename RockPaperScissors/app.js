const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    console.log(randomNumber);

    switch (randomNumber) { // Depending on the random number, the computer choice will change
        case 0:
            computerChoice = 'Rock';
            break;
        case 1:
            computerChoice = 'Paper';
            break;
        case 2:
            computerChoice = 'Scissors';
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice; // Changing the html of the computer choice
}

function getResult() { // logic behind the game
    if (computerChoice === userChoice) {
        result = 'Its a draw!';
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'You win!';
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = 'You lose!';
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = 'You win!';
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'You lose!';
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = 'You win!';
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'You lose!';
    }

    resultDisplay.innerHTML = result; // Changing the html showing the result
}