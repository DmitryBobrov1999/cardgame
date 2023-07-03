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
        BODY.innerHTML = hiddenCardsHTML
    }
    if (chooseInput2.checked) {
        BODY.innerHTML = cardsHTML
    }
    if (chooseInput3.checked) {
        BODY.innerHTML = 'Страница сложности 3'
    }
})

const hiddenCardsHTML = `<div class='pageCardsDiv'>
<div class="timerAndButton">
<div class="timer"><div class="minAndSek"><p class="min">min</p>
<p class="sek">sek</p>
</div><p class="theMainTimer">00.00</p></div>
<button class="buttonAgain">Начать заново</button>
</div><div class="allCards">
<div class="cardsString">
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
</div>
<div class="cardsString">
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
</div>
<div class="cardsString">
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
</div>
<div class="cardsString">
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/рубашка.svg"></div>
</div>
</div>
</div>`

const cardsHTML = `<div class='pageCardsDiv'>
<div class="timerAndButton">
<div class="timer"><div class="minAndSek"><p class="min">min</p>
<p class="sek">sek</p>
</div><p class="theMainTimer">00.00</p></div>
<button class="buttonAgain">Начать заново</button>
</div><div class="allCards">
<div class="cardsString">
<div class="cardsSolo"><img class="cardsImg" src ="/img/туз пики.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/король пики.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/дама пики.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/валет пики.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/10 пики.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/9 пики.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/8 пики.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/7 пики.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/6 пики.svg"></div>
</div>
<div class="cardsString">
<div class="cardsSolo"><img class="cardsImg" src ="/img/туз черви.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/король черви.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/дама черви.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/валет черви.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/10 черви.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/9 черви.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/8 черви.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/7 черви.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/6 черви.svg"></div>
</div>
<div class="cardsString">
<div class="cardsSolo"><img class="cardsImg" src ="/img/туз бубны.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/король бубны.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/дама бубны.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/валет бубны.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/10 бубны.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/9 бубны.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/8 бубны.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/7 бубны.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/6 бубны.svg"></div>
</div>
<div class="cardsString">
<div class="cardsSolo"><img class="cardsImg" src ="/img/туз крести.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/король крести.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/дама крести.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/валет крести.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/10 крести.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/9 крести.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/8 крести.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/7 крести.svg"></div>
<div class="cardsSolo"><img class="cardsImg" src ="/img/6 крести.svg"></div>
</div>
</div>
</div>`
