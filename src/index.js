let radios = document.getElementsByName('choose_input')
let difText = document.querySelector('.chooseDifText')
let label1 = document.querySelector('.label_1')
let label2 = document.querySelector('.label_2')
let label3 = document.querySelector('.label_3')
let form = document.querySelector('.lightBlueSquare')
let BODY = document.querySelector('.body')

let chooseInput1 = document.getElementById('choose_input_1')
let chooseInput2 = document.getElementById('choose_input_2')
let chooseInput3 = document.getElementById('choose_input_3')

const oneCard = `<img class="front-view" src ='/img/6 крести.svg'>`
const twoCard = `<img class="front-view" src ='/img/6 бубны.svg'>`
const threeCard = `<img class="front-view" src ='/img/6 черви.svg'>`
const fourCard = `<img class="front-view" src ='/img/6 пики.svg'>`
const fiveCard = `<img class="front-view" src ='/img/7 крести.svg'>`
const sixCard = `<img class="front-view" src ='/img/7 бубны.svg'>`
const sevenCard = `<img class="front-view" src ='/img/7 черви.svg'>`
const eightCard = `<img class="front-view" src ='/img/7 пики.svg'>`
const nineCard = `<img class="front-view" src ='/img/8 крести.svg'>`
const tenCard = `<img class="front-view" src ='/img/8 бубны.svg'>`
const elevenCard = `<img class="front-view" src ='/img/8 черви.svg'>`
const twelveCard = `<img class="front-view" src ='/img/8 пики.svg'>`
const thirteenCard = `<img class="front-view" src ='/img/9 крести.svg'>`
const fourteenCard = `<img class="front-view" src ='/img/9 бубны.svg'>`
const fifteenCard = `<img class="front-view" src ='/img/9 черви.svg'>`
const sixteenCard = `<img class="front-view" src ='/img/9 пики.svg'>`
const seventeenCard = `<img class="front-view" src ='/img/10 крести.svg'>`
const eighteenCard = `<img class="front-view" src ='/img/10 бубны.svg'>`
const nineteenCard = `<img class="front-view" src ='/img/10 черви.svg'>`
const twentyCard = `<img class="front-view" src ='/img/10 пики.svg'>`
const twentyOneCard = `<img class="front-view" src ='/img/валет крести.svg'>`
const twentyTwoCard = `<img class="front-view" src ='/img/валет бубны.svg'>`
const twentyThreeCard = `<img class="front-view" src ='/img/валет черви.svg'>`
const twentyFourCard = `<img class="front-view" src ='/img/валет пики.svg'>`
const twentyFiveCard = `<img class="front-view" src ='/img/дама крести.svg'>`
const twentySixCard = `<img class="front-view" src ='/img/дама бубны.svg'>`
const twentySevenCard = `<img class="front-view" src ='/img/дама черви.svg'>`
const twentyEightCard = `<img class="front-view" src ='/img/дама пики.svg'>`
const twentyNineCard = `<img class="front-view" src ='/img/король крести.svg'>`
const thirtyCard = `<img class="front-view" src ='/img/король бубны.svg'>`
const thirtyOneCard = `<img class="front-view" src ='/img/король черви.svg'>`
const thirtyTwoCard = `<img class="front-view" src ='/img/король пики.svg'>`
const thirtyThreeCard = `<img class="front-view" src ='/img/туз крести.svg'>`
const thirtyFourCard = `<img class="front-view" src ='/img/туз бубны.svg'>`
const thirtyFiveCard = `<img class="front-view" src ='/img/туз черви.svg'>`
const thirtySixCard = `<img class="front-view" src ='/img/туз пики.svg'>`

for (const radio of radios) {
    radio.onchange = getChooseDif
}

function getChooseDif() {
    if (this.value == 1) {
        difText.innerHTML = 'Легкий уровень'
        label1.style.background = '#7CFC00'
        label2.style.background = '#ffffff'
        label3.style.background = '#ffffff'
    }
    if (this.value == 2) {
        difText.innerHTML = 'Средний уровень'
        label2.style.background = '#FFFF00'
        label1.style.background = '#ffffff'
        label3.style.background = '#ffffff'
    }
    if (this.value == 3) {
        difText.innerHTML = 'Сложный уровень'
        label3.style.background = '#FF0000'
        label1.style.background = '#ffffff'
        label2.style.background = '#ffffff'
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (chooseInput1.checked) {
        BODY.innerHTML = sixCards
        cardGameTimeout()
    }
    if (chooseInput2.checked) {
        BODY.innerHTML = twelveCards
        cardGameTimeout()
    }
    if (chooseInput3.checked) {
        BODY.innerHTML = twentyCards
        cardGameTimeout()
    }
})


function shuffle() {
    let cards = document.querySelectorAll('.cardsSolo')
    let containsOne = document.querySelector('.containsOne')
    let containsTwo = document.querySelector('.containsTwo')
    cards.forEach((card) => {
        if(card.contains(containsOne)) {
            let randomPos1 = Math.floor(Math.random() * 6)
            card.style.order = randomPos1
        } else if (card.contains(containsTwo)){
            let randomPos2 = Math.floor(Math.random() * 12)
            card.style.order = randomPos2
        } else {
            let randomPos3 = Math.floor(Math.random() * 20)
            card.style.order = randomPos3
        }
         card.classList.add('flip')
    })
}


function cardGameTimeout() {
    let cards = document.querySelectorAll('.cardsSolo')
    shuffle()
     
    setTimeout(() => {
        for (const card of cards) {
            card.classList.remove('flip')
        }

        cardGame()
    }, 5000)
}

function cardGame() {
    let cards = document.querySelectorAll('.cardsSolo')
    let hasFlippedCard = false
    let firstCard, secondCard
    let lockBoard = false

    for (const card of cards) {
        card.addEventListener('click', function flipCard() {
            if (lockBoard) return
            if (card === firstCard) return
            card.classList.add('flip')

            if (!hasFlippedCard) {
                hasFlippedCard = true
                firstCard = card
                return
            }
            secondCard = card

            checkForMatch()

            function checkForMatch() {
                let isMatch = firstCard.dataset.index === secondCard.dataset.index
                isMatch ? disableCards() : unFlipCards()
            }

            function disableCards() {
                firstCard.removeEventListener('click', flipCard)
                secondCard.removeEventListener('click', flipCard)

                resetBoard()
            }

            function unFlipCards() {
                lockBoard = true

                setTimeout(() => {
                    firstCard.classList.remove('flip')
                    secondCard.classList.remove('flip')

                    resetBoard()
                }, 1500)
                setTimeout(() => {
                    alert('Вы проиграли')
                }, 2000)
            }

            function resetBoard() {
                ;[hasFlippedCard, lockBoard] = [false, false][
                    (firstCard, secondCard)
                ] = [null, null]
            }
            
        })
    }
}

let copyOfTheCard = () => {
    const mathNumber = Math.floor(Math.random() * 36)
    if (mathNumber === 0) {
        return oneCard
    }
    if (mathNumber === 1) {
        return twoCard
    }
    if (mathNumber === 2) {
        return threeCard
    }
    if (mathNumber === 3) {
        return fourCard
    }
    if (mathNumber === 4) {
        return fiveCard
    }
    if (mathNumber === 5) {
        return sixCard
    }
    if (mathNumber === 6) {
        return sevenCard
    }
    if (mathNumber === 7) {
        return eightCard
    }
    if (mathNumber === 8) {
        return nineCard
    }
    if (mathNumber === 9) {
        return tenCard
    }
    if (mathNumber === 10) {
        return elevenCard
    }
    if (mathNumber === 11) {
        return twelveCard
    }
    if (mathNumber === 12) {
        return thirteenCard
    }
    if (mathNumber === 13) {
        return fourteenCard
    }
    if (mathNumber === 14) {
        return fifteenCard
    }
    if (mathNumber === 15) {
        return sixteenCard
    }
    if (mathNumber === 16) {
        return seventeenCard
    }
    if (mathNumber === 17) {
        return eighteenCard
    }
    if (mathNumber === 18) {
        return nineteenCard
    }
    if (mathNumber === 19) {
        return twentyCard
    }
    if (mathNumber === 20) {
        return twentyOneCard
    }
    if (mathNumber === 21) {
        return twentyTwoCard
    }
    if (mathNumber === 22) {
        return twentyThreeCard
    }
    if (mathNumber === 23) {
        return twentyFourCard
    }
    if (mathNumber === 24) {
        return twentyFiveCard
    }
    if (mathNumber === 25) {
        return twentySixCard
    }
    if (mathNumber === 26) {
        return twentySevenCard
    }
    if (mathNumber === 27) {
        return twentyEightCard
    }
    if (mathNumber === 28) {
        return twentyNineCard
    }
    if (mathNumber === 29) {
        return thirtyCard
    }
    if (mathNumber === 30) {
        return thirtyOneCard
    }
    if (mathNumber === 31) {
        return thirtyTwoCard
    }
    if (mathNumber === 32) {
        return thirtyThreeCard
    }
    if (mathNumber === 33) {
        return thirtyFourCard
    }
    if (mathNumber === 34) {
        return thirtyFiveCard
    }
    if (mathNumber === 35) {
        return thirtySixCard
    }
}
const copyOne = copyOfTheCard()
const copyTwo = copyOfTheCard()
const copyThree = copyOfTheCard()
const copyFour = copyOfTheCard()
const copyFive = copyOfTheCard()
const copySix = copyOfTheCard()
const copySeven = copyOfTheCard()
const copyEight = copyOfTheCard()
const copyNine = copyOfTheCard()
const copyTen = copyOfTheCard()

const sixCards = `<div class='pageCardsDiv'>
<div class="timerAndButton">
<div class="timer"><div class="minAndSek"><p class="min">min</p>
<p class="sek">sek</p>
</div><p class="theMainTimer">00.00</p></div>
<button class="buttonAgain">Начать заново</button>
</div><div class="allCards">
<div class="cardsString">
<div class="cardsSolo containsOne" data-index='one'>${copyOne}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo containsOne" data-index='two'>${copyTwo}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo containsOne" data-index='three' >${copyThree}<img class="back-view" src ="/img/рубашка.svg"></div>
</div>
<div class="cardsString">
<div class="cardsSolo containsOne" data-index='one' >${copyOne}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo containsOne" data-index='two' >${copyTwo}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo containsOne" data-index='three' >${copyThree}<img class="back-view" src ="/img/рубашка.svg"></div>
</div>
</div>
</div>`

const twelveCards = `<div class='pageCardsDiv'>
<div class="timerAndButton">
<div class="timer"><div class="minAndSek"><p class="min">min</p>
<p class="sek">sek</p>
</div><p class="theMainTimer">00.00</p></div>
<button class="buttonAgain">Начать заново</button>
</div><div class="allCards">
<div class="cardsString">
<div class="cardsSolo containsTwo" data-index='one' >${copyOne}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo containsTwo" data-index='two'>${copyTwo}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo containsTwo" data-index='three'>${copyThree}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo containsTwo" data-index='four'>${copyFour}<img class="back-view" src ="/img/рубашка.svg"></div>
</div>
<div class="cardsString">
<div class="cardsSolo containsTwo" data-index='one'>${copyOne}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo containsTwo" data-index='two'>${copyTwo}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo containsTwo" data-index='three'>${copyThree}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo containsTwo" data-index='four'>${copyFour}<img class="back-view" src ="/img/рубашка.svg"></div>
</div>
<div class="cardsString">
<div class="cardsSolo containsTwo" data-index='five'>${copyFive}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo containsTwo" data-index='five'>${copyFive}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo containsTwo" data-index='six'>${copySix}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo containsTwo" data-index='six'>${copySix}<img class="back-view" src ="/img/рубашка.svg"></div>
</div>
</div>
</div>`

const twentyCards = `<div class='pageCardsDiv'>
<div class="timerAndButton">
<div class="timer"><div class="minAndSek"><p class="min">min</p>
<p class="sek">sek</p>
</div><p class="theMainTimer">00.00</p></div>
<button class="buttonAgain">Начать заново</button>
</div><div class="allCards">
<div class="cardsString">
<div class="cardsSolo" data-index='one'>${copyOne}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='one'>${copyOne}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='two'>${copyTwo}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='two'>${copyTwo}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='three'>${copyThree}<img class="back-view" src ="/img/рубашка.svg"></div>
</div>
<div class="cardsString">
<div class="cardsSolo" data-index='three'>${copyThree}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='four'>${copyFour}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='four'>${copyFour}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='five'>${copyFive}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='five'>${copyFive}<img class="back-view" src ="/img/рубашка.svg"></div>
</div>
<div class="cardsString">
<div class="cardsSolo" data-index='six'>${copySix}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='six'>${copySix}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='seven'>${copySeven}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='seven'>${copySeven}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='eight'>${copyEight}<img class="back-view" src ="/img/рубашка.svg"></div>
</div>
<div class="cardsString">
<div class="cardsSolo" data-index='eight'>${copyEight}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='nine'>${copyNine}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='nine'>${copyNine}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='ten'>${copyTen}<img class="back-view" src ="/img/рубашка.svg"></div>
<div class="cardsSolo" data-index='ten'>${copyTen}<img class="back-view" src ="/img/рубашка.svg"></div>
</div>
</div>
</div>`
