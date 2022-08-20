const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let yourChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
yourChoice = e.target.id
yourChoiceDisplay.innerHTML = yourChoice
generateComputerChoice()
getResult()
}
)) 

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    if(randomNumber === 1)
        {computerChoice = 'paper'}
    if(randomNumber === 2)
        {computerChoice = 'rock'}
    if(randomNumber === 3)
        {computerChoice = 'scissors'}
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === 'rock' && yourChoice === 'paper'){
        result = 'You won!'
    }
    if(computerChoice === yourChoice){
        result = 'Its a draw!'
    }
    if(computerChoice === 'rock' && yourChoice === 'scissors'){
        result = 'You lost!'
    }
    if(computerChoice === 'paper' && yourChoice === 'scissors'){
        result = 'You won!'
    }
    if(computerChoice === 'paper' && yourChoice === 'rock'){
        result = 'You lost!'
    }
    if(computerChoice === 'scissors' && yourChoice === 'rock'){
        result = 'You won!'
    }
    if(computerChoice === 'scissors' && yourChoice === 'paper'){
        result = 'You lost!'
    }
    resultDisplay.innerHTML = result
}