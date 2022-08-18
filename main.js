const welcomeWords = document.querySelectorAll('.word')

// function remove(){
//     welcomeWords[3].classList.remove('color')}

// welcomeWords[0].addEventListener('mouseover', () => welcomeWords[0].classList.add('color'))
// welcomeWords[0].addEventListener('mouseover', () => welcomeWords[3].classList.remove('color'))
// welcomeWords[0].addEventListener('mouseout', () => welcomeWords[0].classList.remove('color'))
// welcomeWords[0].addEventListener('mouseout', () => welcomeWords[3].classList.add('color'))

// welcomeWords[1].addEventListener('mouseover', () => welcomeWords[1].classList.add('color'))
// welcomeWords[1].addEventListener('mouseover', () => welcomeWords[3].classList.remove('color'))
// welcomeWords[1].addEventListener('mouseout', () => welcomeWords[1].classList.remove('color'))
// welcomeWords[1].addEventListener('mouseout', () => welcomeWords[3].classList.add('color'))

// welcomeWords[2].addEventListener('mouseover', () => welcomeWords[2].classList.add('color'))
// welcomeWords[2].addEventListener('mouseover', () => welcomeWords[3].classList.remove('color'))
// welcomeWords[2].addEventListener('mouseout', () => welcomeWords[2].classList.remove('color'))
// welcomeWords[2].addEventListener('mouseout', () => welcomeWords[3].classList.add('color'))

// welcomeWords[3].addEventListener('mouseover', () => welcomeWords[3].classList.add('color'))

function colorWords() {
    if (welcomeWords[0].classList.contains('color')) {
        welcomeWords[0].classList.remove('color')
        welcomeWords[1].classList.add('color')
    }
    else if (welcomeWords[1].classList.contains('color')) {
        welcomeWords[1].classList.remove('color')
        welcomeWords[2].classList.add('color')
    }
    else if (welcomeWords[2].classList.contains('color')) {
        welcomeWords[2].classList.remove('color')
        welcomeWords[3].classList.add('color')
    }
    else if (welcomeWords[3].classList.contains('color')) {
        welcomeWords[3].classList.remove('color')
        welcomeWords[0].classList.add('color')
    } else {
        return "Ooops"
    }
}

setInterval(colorWords, 700)