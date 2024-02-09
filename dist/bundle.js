/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

let radios = document.getElementsByName('choose_input');
let difText = document.querySelector('.chooseDifText');
let label1 = document.querySelector('.label_1');
let label2 = document.querySelector('.label_2');
let label3 = document.querySelector('.label_3');
let form = document.querySelector('.lightBlueSquare');
let BODY = document.querySelector('.body');
let chooseInput1 = document.getElementById('choose_input_1');
let chooseInput2 = document.getElementById('choose_input_2');
let chooseInput3 = document.getElementById('choose_input_3');
const oneCard = `<img class="front-view" src ='/img/6 крести.svg'>`;
const twoCard = `<img class="front-view" src ='/img/6 бубны.svg'>`;
const threeCard = `<img class="front-view" src ='/img/6 черви.svg'>`;
const fourCard = `<img class="front-view" src ='/img/6 пики.svg'>`;
const fiveCard = `<img class="front-view" src ='/img/7 крести.svg'>`;
const sixCard = `<img class="front-view" src ='/img/7 бубны.svg'>`;
const sevenCard = `<img class="front-view" src ='/img/7 черви.svg'>`;
const eightCard = `<img class="front-view" src ='/img/7 пики.svg'>`;
const nineCard = `<img class="front-view" src ='/img/8 крести.svg'>`;
const tenCard = `<img class="front-view" src ='/img/8 бубны.svg'>`;
const elevenCard = `<img class="front-view" src ='/img/8 черви.svg'>`;
const twelveCard = `<img class="front-view" src ='/img/8 пики.svg'>`;
const thirteenCard = `<img class="front-view" src ='/img/9 крести.svg'>`;
const fourteenCard = `<img class="front-view" src ='/img/9 бубны.svg'>`;
const fifteenCard = `<img class="front-view" src ='/img/9 черви.svg'>`;
const sixteenCard = `<img class="front-view" src ='/img/9 пики.svg'>`;
const seventeenCard = `<img class="front-view" src ='/img/10 крести.svg'>`;
const eighteenCard = `<img class="front-view" src ='/img/10 бубны.svg'>`;
const nineteenCard = `<img class="front-view" src ='/img/10 черви.svg'>`;
const twentyCard = `<img class="front-view" src ='/img/10 пики.svg'>`;
const twentyOneCard = `<img class="front-view" src ='/img/валет крести.svg'>`;
const twentyTwoCard = `<img class="front-view" src ='/img/валет бубны.svg'>`;
const twentyThreeCard = `<img class="front-view" src ='/img/валет черви.svg'>`;
const twentyFourCard = `<img class="front-view" src ='/img/валет пики.svg'>`;
const twentyFiveCard = `<img class="front-view" src ='/img/дама крести.svg'>`;
const twentySixCard = `<img class="front-view" src ='/img/дама бубны.svg'>`;
const twentySevenCard = `<img class="front-view" src ='/img/дама черви.svg'>`;
const twentyEightCard = `<img class="front-view" src ='/img/дама пики.svg'>`;
const twentyNineCard = `<img class="front-view" src ='/img/король крести.svg'>`;
const thirtyCard = `<img class="front-view" src ='/img/король бубны.svg'>`;
const thirtyOneCard = `<img class="front-view" src ='/img/король черви.svg'>`;
const thirtyTwoCard = `<img class="front-view" src ='/img/король пики.svg'>`;
const thirtyThreeCard = `<img class="front-view" src ='/img/туз крести.svg'>`;
const thirtyFourCard = `<img class="front-view" src ='/img/туз бубны.svg'>`;
const thirtyFiveCard = `<img class="front-view" src ='/img/туз черви.svg'>`;
const thirtySixCard = `<img class="front-view" src ='/img/туз пики.svg'>`;
for (const radio of radios) {
    radio.onchange = getChooseDif;
}
function getChooseDif() {
    if (this.value == 1) {
        if (difText) {
            difText.innerHTML = 'Легкий уровень';
        }
        if (label1) {
            label1.style.background = '#7CFC00';
        }
        if (label2) {
            label2.style.background = '#ffffff';
        }
        if (label3) {
            label3.style.background = '#ffffff';
        }
    }
    if (this.value == 2) {
        if (difText) {
            difText.innerHTML = 'Средний уровень';
        }
        if (label2) {
            label2.style.background = '#FFFF00';
        }
        if (label1) {
            label1.style.background = '#ffffff';
        }
        if (label3) {
            label3.style.background = '#ffffff';
        }
    }
    if (this.value == 3) {
        if (difText) {
            difText.innerHTML = 'Сложный уровень';
        }
        if (label3) {
            label3.style.background = '#FF0000';
        }
        if (label1) {
            label1.style.background = '#ffffff';
        }
        if (label2) {
            label2.style.background = '#ffffff';
        }
    }
}
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (chooseInput1.checked) {
            if (BODY) {
                BODY.innerHTML = sixCards;
            }
            cardGameTimeout();
        }
        if (chooseInput2.checked) {
            if (BODY) {
                BODY.innerHTML = twelveCards;
            }
            cardGameTimeout();
        }
        if (chooseInput3.checked) {
            if (BODY) {
                BODY.innerHTML = twentyCards;
            }
            cardGameTimeout();
        }
    });
}
function shuffle() {
    let cards = document.querySelectorAll('.cardsSolo');
    let containsOne = document.querySelector('.containsOne');
    let containsTwo = document.querySelector('.containsTwo');
    cards.forEach((card) => {
        if (card.contains(containsOne)) {
            let randomPos1 = Math.floor(Math.random() * 6);
            if (card instanceof HTMLElement) {
                card.style.order = String(randomPos1);
            }
        }
        else if (card.contains(containsTwo)) {
            let randomPos2 = Math.floor(Math.random() * 12);
            if (card instanceof HTMLElement) {
                card.style.order = String(randomPos2);
            }
        }
        else {
            let randomPos3 = Math.floor(Math.random() * 20);
            if (card instanceof HTMLElement) {
                card.style.order = String(randomPos3);
            }
        }
        card.classList.add('flip');
    });
}
function cardGameTimeout() {
    let cards = document.querySelectorAll('.cardsSolo');
    shuffle();
    setTimeout(() => {
        for (const card of cards) {
            card.classList.remove('flip');
        }
        cardGame();
    }, 5000);
}
function cardGame() {
    let cards = document.querySelectorAll('.cardsSolo');
    let hasFlippedCard = false;
    let firstCard, secondCard;
    let lockBoard = false;
    let goingToZeroLength = cards.length;
    const timerMinutes = document.querySelector('.time-minutes'), timerSeconds = document.querySelector('.time-seconds');
    const restartFromTheField = document.querySelector('.buttonAgain');
    if (restartFromTheField) {
        restartFromTheField.addEventListener('click', () => {
            location.reload();
        });
    }
    let interval;
    let minutes = 0;
    let seconds = 0;
    const startTimer = () => {
        if (!timerMinutes)
            return;
        seconds++;
        if (timerSeconds) {
            timerSeconds.innerHTML = '0' + seconds;
        }
        if (seconds > 9) {
            if (timerSeconds) {
                timerSeconds.innerHTML = String(seconds);
            }
        }
        if (seconds > 59) {
            minutes++;
            timerMinutes.innerHTML = '0' + minutes;
            seconds = 0;
            if (timerSeconds) {
                timerSeconds.innerHTML = '0' + seconds;
            }
        }
        if (minutes > 9) {
            timerMinutes.innerHTML = String(minutes);
        }
    };
    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
    for (const card of cards) {
        card.addEventListener('click', function flipCard() {
            if (lockBoard)
                return;
            if (card === firstCard)
                return;
            card.classList.add('flip');
            if (!hasFlippedCard) {
                hasFlippedCard = true;
                firstCard = card;
                return;
            }
            secondCard = card;
            checkForMatch();
            function checkForMatch() {
                let isMatch = firstCard.innerHTML === secondCard.innerHTML;
                isMatch ? disableCards() : unFlipCards();
            }
            function disableCards() {
                firstCard.removeEventListener('click', flipCard);
                secondCard.removeEventListener('click', flipCard);
                setTimeout(() => {
                    goingToZeroLength -= 2;
                    console.log(goingToZeroLength);
                    if (goingToZeroLength === 0) {
                        if (timerMinutes && timerSeconds && BODY) {
                            let result = timerMinutes.innerHTML +
                                ':' +
                                timerSeconds.innerHTML;
                            BODY.innerHTML = theGoodResult;
                            let TheWinSelector = document.querySelector('.finalTimerForWin');
                            if (TheWinSelector) {
                                TheWinSelector.innerHTML = `${result}`;
                            }
                        }
                        const restartButton = document.querySelector('.restartButton');
                        if (restartButton) {
                            restartButton.addEventListener('click', () => {
                                location.reload();
                            });
                        }
                    }
                }, 500);
                resetBoard();
            }
            function unFlipCards() {
                lockBoard = true;
                setTimeout(() => {
                    firstCard.classList.remove('flip');
                    secondCard.classList.remove('flip');
                    resetBoard();
                }, 1500);
                setTimeout(() => {
                    if (timerMinutes && timerSeconds && BODY) {
                        let result = timerMinutes.innerHTML +
                            ':' +
                            timerSeconds.innerHTML;
                        BODY.innerHTML = theBadResult;
                        let theLoseSelector = document.querySelector('.finalTimerForLose');
                        if (theLoseSelector) {
                            theLoseSelector.innerHTML = `${result}`;
                        }
                    }
                    const restartButton = document.querySelector('.restartButton');
                    if (restartButton) {
                        restartButton.addEventListener('click', () => {
                            location.reload();
                        });
                    }
                }, 500);
            }
            function resetBoard() {
                ;
                [hasFlippedCard, lockBoard] = [false, false];
            }
        });
    }
}
let copyOfTheCard = () => {
    const mathNumber = Math.floor(Math.random() * 36);
    if (mathNumber === 0) {
        return oneCard;
    }
    if (mathNumber === 1) {
        return twoCard;
    }
    if (mathNumber === 2) {
        return threeCard;
    }
    if (mathNumber === 3) {
        return fourCard;
    }
    if (mathNumber === 4) {
        return fiveCard;
    }
    if (mathNumber === 5) {
        return sixCard;
    }
    if (mathNumber === 6) {
        return sevenCard;
    }
    if (mathNumber === 7) {
        return eightCard;
    }
    if (mathNumber === 8) {
        return nineCard;
    }
    if (mathNumber === 9) {
        return tenCard;
    }
    if (mathNumber === 10) {
        return elevenCard;
    }
    if (mathNumber === 11) {
        return twelveCard;
    }
    if (mathNumber === 12) {
        return thirteenCard;
    }
    if (mathNumber === 13) {
        return fourteenCard;
    }
    if (mathNumber === 14) {
        return fifteenCard;
    }
    if (mathNumber === 15) {
        return sixteenCard;
    }
    if (mathNumber === 16) {
        return seventeenCard;
    }
    if (mathNumber === 17) {
        return eighteenCard;
    }
    if (mathNumber === 18) {
        return nineteenCard;
    }
    if (mathNumber === 19) {
        return twentyCard;
    }
    if (mathNumber === 20) {
        return twentyOneCard;
    }
    if (mathNumber === 21) {
        return twentyTwoCard;
    }
    if (mathNumber === 22) {
        return twentyThreeCard;
    }
    if (mathNumber === 23) {
        return twentyFourCard;
    }
    if (mathNumber === 24) {
        return twentyFiveCard;
    }
    if (mathNumber === 25) {
        return twentySixCard;
    }
    if (mathNumber === 26) {
        return twentySevenCard;
    }
    if (mathNumber === 27) {
        return twentyEightCard;
    }
    if (mathNumber === 28) {
        return twentyNineCard;
    }
    if (mathNumber === 29) {
        return thirtyCard;
    }
    if (mathNumber === 30) {
        return thirtyOneCard;
    }
    if (mathNumber === 31) {
        return thirtyTwoCard;
    }
    if (mathNumber === 32) {
        return thirtyThreeCard;
    }
    if (mathNumber === 33) {
        return thirtyFourCard;
    }
    if (mathNumber === 34) {
        return thirtyFiveCard;
    }
    if (mathNumber === 35) {
        return thirtySixCard;
    }
};
const copyOne = copyOfTheCard();
const copyTwo = copyOfTheCard();
const copyThree = copyOfTheCard();
const copyFour = copyOfTheCard();
const copyFive = copyOfTheCard();
const copySix = copyOfTheCard();
const copySeven = copyOfTheCard();
const copyEight = copyOfTheCard();
const copyNine = copyOfTheCard();
const copyTen = copyOfTheCard();
const sixCards = `<div class='pageCardsDiv'>
<div class="timerAndButton">
<div class="timer"><div class="minAndSek"><p class="min">min</p>
<p class="sek">sek</p>
</div>

<div class="theMainTimer">
<span class="interval time-minutes">00</span>
<span class="colon">:</span>
<span class="interval time-seconds">00</span>
</div>

</div>
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
</div>`;
const twelveCards = `<div class='pageCardsDiv'>
<div class="timerAndButton">
<div class="timer"><div class="minAndSek"><p class="min">min</p>
<p class="sek">sek</p>
</div>

<div class="theMainTimer">
<span class="interval time-minutes">00</span>
<span class="colon">:</span>
<span class="interval time-seconds">00</span>
</div>

</div>
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
</div>`;
const twentyCards = `<div class='pageCardsDiv'>
<div class="timerAndButton">
<div class="timer"><div class="minAndSek"><p class="min">min</p>
<p class="sek">sek</p>
</div>

<div class="theMainTimer">
<span class="interval time-minutes">00</span>
<span class="colon">:</span>
<span class="interval time-seconds">00</span>
</div>

</div>
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
</div>`;
const theGoodResult = `<div class="result">
<img class="celebration" src ="/img/celebration.svg">
<h1 class="timeText">Вы выиграли!</h1>
<h6 class="time">Затраченное время:</h6>
<h3 class="finalTimerForWin">01.20</h3>
<button type="submit" class="restartButton">Играть снова</button>
</div>
<div class="fakeBody">
<div class='pageCardsDiv'>
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
</div>
</div>`;
const theBadResult = `<div class="result">
<img class="finalImg" src ="/img/dead.svg">
<h1 class="timeText">Вы проиграли!</h1>
<h6 class="time">Затраченное время:</h6>
<h3 class="finalTimerForLose">00.00</h3>
<button type="submit" class="restartButton">Играть снова</button>
</div>
<div class="fakeBody">
<div class='pageCardsDiv'>
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
</div>
</div>`;

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map