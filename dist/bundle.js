;(() => {
    'use strict'
    let s = document.getElementsByName('choose_input'),
        i = document.querySelector('.chooseDifText'),
        c = document.querySelector('.label_1'),
        a = document.querySelector('.label_2'),
        n = document.querySelector('.label_3'),
        e = document.querySelector('.lightBlueSquare'),
        d = document.querySelector('.body'),
        v = document.getElementById('choose_input_1'),
        l = document.getElementById('choose_input_2'),
        o = document.getElementById('choose_input_3')
    for (const i of s) i.onchange = r
    function r() {
        1 == this.value &&
            ((i.innerHTML = 'Легкий уровень'),
            (c.style.background = '#7CFC00'),
            (a.style.background = '#ffffff'),
            (n.style.background = '#ffffff')),
            2 == this.value &&
                ((i.innerHTML = 'Средний уровень'),
                (a.style.background = '#FFFF00'),
                (c.style.background = '#ffffff'),
                (n.style.background = '#ffffff')),
            3 == this.value &&
                ((i.innerHTML = 'Сложный уровень'),
                (n.style.background = '#FF0000'),
                (c.style.background = '#ffffff'),
                (a.style.background = '#ffffff'))
    }
    function t() {
        let s = document.querySelectorAll('.cardsSolo')
        !(function () {
            let s = document.querySelectorAll('.cardsSolo'),
                i = document.querySelector('.containsOne'),
                c = document.querySelector('.containsTwo')
            s.forEach((s) => {
                if (s.contains(i)) {
                    let i = Math.floor(6 * Math.random())
                    s.style.order = i
                } else if (s.contains(c)) {
                    let i = Math.floor(12 * Math.random())
                    s.style.order = i
                } else {
                    let i = Math.floor(20 * Math.random())
                    s.style.order = i
                }
                s.classList.add('flip')
            })
        })(),
            setTimeout(() => {
                for (const i of s) i.classList.remove('flip')
                !(function () {
                    let s,
                        i,
                        c = document.querySelectorAll('.cardsSolo'),
                        a = !1,
                        n = !1
                    for (const e of c)
                        e.addEventListener('click', function c() {
                            if (!n && e !== s) {
                                if ((e.classList.add('flip'), !a))
                                    return (a = !0), void (s = e)
                                ;(i = e),
                                    s.innerHTML === i.innerHTML
                                        ? (s.removeEventListener('click', c),
                                          i.removeEventListener('click', c),
                                          d())
                                        : ((n = !0),
                                          setTimeout(() => {
                                              s.classList.remove('flip'),
                                                  i.classList.remove('flip'),
                                                  d()
                                          }, 1500),
                                          setTimeout(() => {
                                              alert('Вы проиграли')
                                          }, 2e3))
                            }
                            function d() {
                                ;[a, n] = [!1, !1][i] = [null, null]
                            }
                        })
                })()
            }, 5e3)
    }
    e.addEventListener('submit', (s) => {
        s.preventDefault(),
            v.checked && ((d.innerHTML = p), t()),
            l.checked && ((d.innerHTML = y), t()),
            o.checked && ((d.innerHTML = T), t())
    })
    let g = () => {
        const s = Math.floor(36 * Math.random())
        return 0 === s
            ? '<img class="front-view" src =\'/img/6 крести.svg\'>'
            : 1 === s
            ? '<img class="front-view" src =\'/img/6 бубны.svg\'>'
            : 2 === s
            ? '<img class="front-view" src =\'/img/6 черви.svg\'>'
            : 3 === s
            ? '<img class="front-view" src =\'/img/6 пики.svg\'>'
            : 4 === s
            ? '<img class="front-view" src =\'/img/7 крести.svg\'>'
            : 5 === s
            ? '<img class="front-view" src =\'/img/7 бубны.svg\'>'
            : 6 === s
            ? '<img class="front-view" src =\'/img/7 черви.svg\'>'
            : 7 === s
            ? '<img class="front-view" src =\'/img/7 пики.svg\'>'
            : 8 === s
            ? '<img class="front-view" src =\'/img/8 крести.svg\'>'
            : 9 === s
            ? '<img class="front-view" src =\'/img/8 бубны.svg\'>'
            : 10 === s
            ? '<img class="front-view" src =\'/img/8 черви.svg\'>'
            : 11 === s
            ? '<img class="front-view" src =\'/img/8 пики.svg\'>'
            : 12 === s
            ? '<img class="front-view" src =\'/img/9 крести.svg\'>'
            : 13 === s
            ? '<img class="front-view" src =\'/img/9 бубны.svg\'>'
            : 14 === s
            ? '<img class="front-view" src =\'/img/9 черви.svg\'>'
            : 15 === s
            ? '<img class="front-view" src =\'/img/9 пики.svg\'>'
            : 16 === s
            ? '<img class="front-view" src =\'/img/10 крести.svg\'>'
            : 17 === s
            ? '<img class="front-view" src =\'/img/10 бубны.svg\'>'
            : 18 === s
            ? '<img class="front-view" src =\'/img/10 черви.svg\'>'
            : 19 === s
            ? '<img class="front-view" src =\'/img/10 пики.svg\'>'
            : 20 === s
            ? '<img class="front-view" src =\'/img/валет крести.svg\'>'
            : 21 === s
            ? '<img class="front-view" src =\'/img/валет бубны.svg\'>'
            : 22 === s
            ? '<img class="front-view" src =\'/img/валет черви.svg\'>'
            : 23 === s
            ? '<img class="front-view" src =\'/img/валет пики.svg\'>'
            : 24 === s
            ? '<img class="front-view" src =\'/img/дама крести.svg\'>'
            : 25 === s
            ? '<img class="front-view" src =\'/img/дама бубны.svg\'>'
            : 26 === s
            ? '<img class="front-view" src =\'/img/дама черви.svg\'>'
            : 27 === s
            ? '<img class="front-view" src =\'/img/дама пики.svg\'>'
            : 28 === s
            ? '<img class="front-view" src =\'/img/король крести.svg\'>'
            : 29 === s
            ? '<img class="front-view" src =\'/img/король бубны.svg\'>'
            : 30 === s
            ? '<img class="front-view" src =\'/img/король черви.svg\'>'
            : 31 === s
            ? '<img class="front-view" src =\'/img/король пики.svg\'>'
            : 32 === s
            ? '<img class="front-view" src =\'/img/туз крести.svg\'>'
            : 33 === s
            ? '<img class="front-view" src =\'/img/туз бубны.svg\'>'
            : 34 === s
            ? '<img class="front-view" src =\'/img/туз черви.svg\'>'
            : 35 === s
            ? '<img class="front-view" src =\'/img/туз пики.svg\'>'
            : void 0
    }
    const m = g(),
        f = g(),
        w = g(),
        u = g(),
        S = g(),
        k = g(),
        b = g(),
        x = g(),
        $ = g(),
        h = g(),
        p = `<div class='pageCardsDiv'>\n<div class="timerAndButton">\n<div class="timer"><div class="minAndSek"><p class="min">min</p>\n<p class="sek">sek</p>\n</div><p class="theMainTimer">00.00</p></div>\n<button class="buttonAgain">Начать заново</button>\n</div><div class="allCards">\n<div class="cardsString">\n<div class="cardsSolo containsOne" data-index='one'>${m}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo containsOne" data-index='two'>${f}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo containsOne" data-index='three' >${w}<img class="back-view" src ="/img/рубашка.svg"></div>\n</div>\n<div class="cardsString">\n<div class="cardsSolo containsOne" data-index='one' >${m}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo containsOne" data-index='two' >${f}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo containsOne" data-index='three' >${w}<img class="back-view" src ="/img/рубашка.svg"></div>\n</div>\n</div>\n</div>`,
        y = `<div class='pageCardsDiv'>\n<div class="timerAndButton">\n<div class="timer"><div class="minAndSek"><p class="min">min</p>\n<p class="sek">sek</p>\n</div><p class="theMainTimer">00.00</p></div>\n<button class="buttonAgain">Начать заново</button>\n</div><div class="allCards">\n<div class="cardsString">\n<div class="cardsSolo containsTwo" data-index='one' >${m}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo containsTwo" data-index='two'>${f}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo containsTwo" data-index='three'>${w}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo containsTwo" data-index='four'>${u}<img class="back-view" src ="/img/рубашка.svg"></div>\n</div>\n<div class="cardsString">\n<div class="cardsSolo containsTwo" data-index='one'>${m}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo containsTwo" data-index='two'>${f}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo containsTwo" data-index='three'>${w}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo containsTwo" data-index='four'>${u}<img class="back-view" src ="/img/рубашка.svg"></div>\n</div>\n<div class="cardsString">\n<div class="cardsSolo containsTwo" data-index='five'>${S}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo containsTwo" data-index='five'>${S}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo containsTwo" data-index='six'>${k}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo containsTwo" data-index='six'>${k}<img class="back-view" src ="/img/рубашка.svg"></div>\n</div>\n</div>\n</div>`,
        T = `<div class='pageCardsDiv'>\n<div class="timerAndButton">\n<div class="timer"><div class="minAndSek"><p class="min">min</p>\n<p class="sek">sek</p>\n</div><p class="theMainTimer">00.00</p></div>\n<button class="buttonAgain">Начать заново</button>\n</div><div class="allCards">\n<div class="cardsString">\n<div class="cardsSolo" data-index='one'>${m}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='one'>${m}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='two'>${f}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='two'>${f}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='three'>${w}<img class="back-view" src ="/img/рубашка.svg"></div>\n</div>\n<div class="cardsString">\n<div class="cardsSolo" data-index='three'>${w}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='four'>${u}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='four'>${u}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='five'>${S}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='five'>${S}<img class="back-view" src ="/img/рубашка.svg"></div>\n</div>\n<div class="cardsString">\n<div class="cardsSolo" data-index='six'>${k}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='six'>${k}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='seven'>${b}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='seven'>${b}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='eight'>${x}<img class="back-view" src ="/img/рубашка.svg"></div>\n</div>\n<div class="cardsString">\n<div class="cardsSolo" data-index='eight'>${x}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='nine'>${$}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='nine'>${$}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='ten'>${h}<img class="back-view" src ="/img/рубашка.svg"></div>\n<div class="cardsSolo" data-index='ten'>${h}<img class="back-view" src ="/img/рубашка.svg"></div>\n</div>\n</div>\n</div>`
})()
