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

import { hiddenCardsHTML } from '/src/hiddenCards.js'
import { cardsHTML } from '/src/cards.js'

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