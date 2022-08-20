const welcomeWords = document.querySelectorAll('.word')

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