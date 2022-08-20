const cardArray = [
    {
        name: 'Harry',
        img: 'images/HP.jpg'
    },
    {
        name: 'Sirius',
        img: 'images/SB.jpg'
    },
    {
        name: 'Ron',
        img: 'images/RW.jpg'
    },
    {
        name: 'Hermione',
        img: 'images/HG.jpg'
    },
    {
        name: 'Dumbledore',
        img: 'images/PD.jpg'
    },
    {
        name: 'Umbridge',
        img: 'images/DA.jpg'
    },
    {
        name: 'Harry',
        img: 'images/HP.jpg'
    },
    {
        name: 'Sirius',
        img: 'images/SB.jpg'
    },
    {
        name: 'Ron',
        img: 'images/RW.jpg'
    },
    {
        name: 'Hermione',
        img: 'images/HG.jpg'
    },
    {
        name: 'Dumbledore',
        img: 'images/PD.jpg'
    },
    {
        name: 'Umbridge',
        img: 'images/DA.jpg'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/cover1.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')
 
    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/cover1.jpg')
        cards[optionTwoId].setAttribute('src', 'images/cover1.jpg')
        alert('You clicked the same image!')
    }
    if(cardsChosen[0] == cardsChosen[1]) {
        // alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard) 
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/cover1.jpg')
        cards[optionTwoId].setAttribute('src', 'images/cover1.jpg')
        // alert('Sorry, try again')

 
    }
   
    resultDisplay.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIds = [] 
    
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.innerHTML = 'Congratulations! You found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 700)
    }
}