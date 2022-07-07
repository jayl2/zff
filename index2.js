let score = 0
let boxClicked = ''
//QuerySelectors-------------------

//Button Targets//
const dirBtn = document.querySelector('.directions')
const a = document.querySelector('#a')
const b = document.querySelector('#b')
const c = document.querySelector('#c')
const d = document.querySelector('#d')
const e = document.querySelector('#e')
const f = document.querySelector('#f')
const g = document.querySelector('#g')
const h = document.querySelector('#h')
const i = document.querySelector('#i')
const j = document.querySelector('#j')
const k = document.querySelector('#k')
const l = document.querySelector('#l')
const m = document.querySelector('#m')
const n = document.querySelector('#n')
const o = document.querySelector('#o')
const p = document.querySelector('#p')
const q = document.querySelector('#q')
const r = document.querySelector('#r')
const s = document.querySelector('#s')
const t = document.querySelector('#t')
const u = document.querySelector('#u')
const v = document.querySelector('#v')
const w = document.querySelector('#w')
const x = document.querySelector('#x')
const y = document.querySelector('#y')
const z = document.querySelector('#z')
//-------------------------IMG targets--------------
const ant = document.querySelector('#ant')
const antInp = document.querySelector('#a-text')
const bear = document.querySelector('#bear')
const bearInp = document.querySelector('#b-text')
const cat = document.querySelector('#cat')
const catInp = document.querySelector('#c-text')
const dog = document.querySelector('#dog')
const dogInp = document.querySelector('#d-text')
const eel = document.querySelector('#eel')
const eelInp = document.querySelector('#e-text')
const fish = document.querySelector('#fish')
const fishInp = document.querySelector('#f-text')
const goat = document.querySelector('#goat')
const goatInp = document.querySelector('#g-text')
const horse = document.querySelector('#horse')
const horseInp = document.querySelector('#h-text')
const iguana = document.querySelector('#iguana')
const iguanaInp = document.querySelector('#i-text')
const jaguar = document.querySelector('#jaguar')
const jaguarInp = document.querySelector('#j-text')
const koala = document.querySelector('#koala')
const koalaInp = document.querySelector('#k-text')
const lion = document.querySelector('#lion')
const lionInp = document.querySelector('#l-text')
const monkey = document.querySelector('#monkey')
const monkeyInp = document.querySelector('#m-text')
const newt = document.querySelector('#newt')
const newtInp = document.querySelector('#n-text')
const octopus = document.querySelector('#octopus')
const octopusInp = document.querySelector('#o-text')
const panther = document.querySelector('#panther')
const pantherInp = document.querySelector('#p-text')
const quail = document.querySelector('#quail')
const quailInp = document.querySelector('#q-text')
const rabbit = document.querySelector('#rabbit')
const rabbitInp = document.querySelector('#r-text')
const snake = document.querySelector('#snake')
const snakeInp = document.querySelector('#s-text')
const tiger = document.querySelector('#tiger')
const tigerInp = document.querySelector('#t-text')
const unicorn = document.querySelector('#unicorn')
const unicornInp = document.querySelector('#u-text')
const viper = document.querySelector('#viper')
const viperInp = document.querySelector('#v-text')
const walrus = document.querySelector('#walrus')
const walrusInp = document.querySelector('#w-text')
const xerus = document.querySelector('#xerus')
const xerusInp = document.querySelector('#x-text')
const yak = document.querySelector('#yak')
const yakInp = document.querySelector('#y-text')
const zebra = document.querySelector('#zebra')
const zebraInp = document.querySelector('#z-text')

//all letters/buttons
const allBtns = document.querySelectorAll('.letBut')

// click tracker
let gotClicked = false
console.log(gotClicked)

//Pop up box with tracker to disable other buttons
document.querySelector('#gotit').addEventListener('click', function () {
  dirBtn.style.display = 'none'
  gotClicked = true

  console.log(gotClicked)
})

// winning condition//
// function win() {
//   for (let i = 0; i < allBtns.length; i++) {
//     document.querySelectorAll('.letBut')[i].style.display = 'none'
//   }
// }

//--------------------method to initiate animal clicks with tracker.
function animalClick(evtLis, anipic, aniInput) {
  evtLis.addEventListener('click', handleClick)
  function handleClick() {
    if (gotClicked == true && boxClicked == '') {
      anipic.style.display = 'block'
      aniInput.style.display = 'block'
      boxClicked = anipic.id
      console.log('aniId = ' + anipic.id)
    }
  }
  //toggles tracker off while box clicked to hide image.
  anipic.addEventListener('click', function () {
    if ((boxClicked = anipic.id)) {
      anipic.style.display = 'none'
      aniInput.style.display = 'none'
      boxClicked = ''
    }
  })
}
animalClick(a, ant, antInp)
animalClick(b, bear, bearInp)
animalClick(c, cat, catInp)
animalClick(d, dog, dogInp)
animalClick(e, eel, eelInp)
animalClick(f, fish, fishInp)
animalClick(g, goat, goatInp)
animalClick(h, horse, horseInp)
animalClick(i, iguana, iguanaInp)
animalClick(j, jaguar, jaguarInp)
animalClick(k, koala, koalaInp)
animalClick(l, lion, lionInp)
animalClick(m, monkey, monkeyInp)
animalClick(n, newt, newtInp)
animalClick(o, octopus, octopusInp)
animalClick(p, panther, pantherInp)
animalClick(q, quail, quailInp)
animalClick(r, rabbit, rabbitInp)
animalClick(s, snake, snakeInp)
animalClick(t, tiger, tigerInp)
animalClick(u, unicorn, unicornInp)
animalClick(v, viper, viperInp)
animalClick(w, walrus, walrusInp)
animalClick(x, xerus, xerusInp)
animalClick(y, yak, yakInp)
animalClick(z, zebra, zebraInp)

const ltrBtn = document.querySelectorAll('.letBut')

//
//-----------------------KeyPress Listeners------------------------------
// answer correct to hide ant

document.addEventListener('keydown', function (eve) {
  if (eve.key === 'Enter') {
    if (
      antInp.value === 'ant' ||
      antInp.value === 'Ant' ||
      antInp.value === 'ANT'
    ) {
      ant.style.display = 'none'
      antInp.style.display = 'none'
      boxClicked = ''
      antInp.value = ''
      a.style.backgroundColor = 'gray'
    }
    if (
      bearInp.value === 'bear' ||
      bearInp.value === 'BEAR' ||
      bearInp.value === 'Bear'
    ) {
      bear.style.display = 'none'
      bearInp.style.display = 'none'
      boxClicked = ''
      b.style.backgroundColor = 'gray'
    }
    if (
      catInp.value === 'cat' ||
      catInp.value === 'CAT' ||
      catInp.value === 'Cat'
    ) {
      cat.style.display = 'none'
      catInp.style.display = 'none'
      boxClicked = ''
      c.style.backgroundColor = 'gray'
    }
    if (
      dogInp.value === 'dog' ||
      dogInp.value === 'Dog' ||
      dogInp.value === 'DOG'
    ) {
      dog.style.display = 'none'
      dogInp.style.display = 'none'
      boxClicked = ''
      d.style.backgroundColor = 'gray'
    }
    if (
      eelInp.value === 'eel' ||
      eelInp.value === 'Eel' ||
      eelInp.value === 'EEL'
    ) {
      eel.style.display = 'none'
      eelInp.style.display = 'none'
      boxClicked = ''
      e.style.backgroundColor = 'gray'
    }
    if (
      snakeInp.value === 'snake' ||
      snakeInp.value === 'SNAKE' ||
      snakeInp.value === 'Snake'
    ) {
      snake.style.display = 'none'
      snakeInp.style.display = 'none'
      boxClicked = ''
      s.style.backgroundColor = 'gray'
    }
    if (
      fishInp.value === 'fish' ||
      fishInp.value === 'Fish' ||
      fishInp.value === 'FISH'
    ) {
      fish.style.display = 'none'
      fishInp.style.display = 'none'
      boxClicked = ''
      f.style.backgroundColor = 'gray'
    }
    if (
      goatInp.value === 'goat' ||
      goatInp.value === 'Goat' ||
      goatInp.value === 'GOAT'
    ) {
      goat.style.display = 'none'
      goatInp.style.display = 'none'
      boxClicked = ''
      g.style.backgroundColor = 'gray'
    }
    if (
      horseInp.value === 'horse' ||
      horseInp.value === 'Horse' ||
      horseInp.value === 'HORSE'
    ) {
      horse.style.display = 'none'
      horseInp.style.display = 'none'
      boxClicked = ''
      h.style.backgroundColor = 'gray'
    }
    if (
      iguanaInp.value === 'iguana' ||
      iguanaInp.value === 'IGUANA' ||
      iguanaInp.value === 'Iguana'
    ) {
      iguana.style.display = 'none'
      iguanaInp.style.display = 'none'
      boxClicked = ''
      i.style.backgroundColor = 'gray'
    }
    if (
      jaguarInp.value === 'jaguar' ||
      jaguarInp.value === 'JAGUAR' ||
      jaguarInp.value === 'Jaguar'
    ) {
      jaguar.style.display = 'none'
      jaguarInp.style.display = 'none'
      boxClicked = ''
      j.style.backgroundColor = 'gray'
    }
    if (
      koalaInp.value === 'koala' ||
      koalaInp.value === 'KOALA' ||
      koalaInp.value === 'Koala'
    ) {
      koala.style.display = 'none'
      koalaInp.style.display = 'none'
      boxClicked = ''
      k.style.backgroundColor = 'gray'
    }
    if (
      lionInp.value === 'lion' ||
      lionInp.value === 'Lion' ||
      lionInp.value === 'LION'
    ) {
      lion.style.display = 'none'
      lionInp.style.display = 'none'
      boxClicked = ''
      l.style.backgroundColor = 'gray'
    }
    if (
      monkeyInp.value === 'monkey' ||
      monkeyInp.value === 'MONKEY' ||
      monkeyInp.value === 'Monkey'
    ) {
      monkey.style.display = 'none'
      monkeyInp.style.display = 'none'
      boxClicked = ''
      m.style.backgroundColor = 'gray'
    }
    if (
      newtInp.value === 'newt' ||
      newtInp.value === 'NEWT' ||
      newtInp.value === 'Newt'
    ) {
      newt.style.display = 'none'
      newtInp.style.display = 'none'
      boxClicked = ''
      n.style.backgroundColor = 'gray'
    }
    if (
      octopusInp.value === 'octopus' ||
      octopusInp.value === 'OCTOPUS' ||
      octopusInp.value === 'Octopus'
    ) {
      octopus.style.display = 'none'
      octopusInp.style.display = 'none'
      boxClicked = ''
      o.style.backgroundColor = 'gray'
    }
    if (
      pantherInp.value === 'panther' ||
      pantherInp.value === 'PANTHER' ||
      pantherInp.value === 'Panther'
    ) {
      panther.style.display = 'none'
      pantherInp.style.display = 'none'
      boxClicked = ''
      p.style.backgroundColor = 'gray'
    }
    if (
      quailInp.value === 'quail' ||
      quailInp.value === 'QUAIL' ||
      quailInp.value === 'Quail'
    ) {
      quail.style.display = 'none'
      quailInp.style.display = 'none'
      boxClicked = ''
      q.style.backgroundColor = 'gray'
    }
    if (
      rabbitInp.value === 'rabbit' ||
      rabbitInp.value === 'RABBIT' ||
      rabbitInp.value === 'Rabbit'
    ) {
      rabbit.style.display = 'none'
      rabbitInp.style.display = 'none'
      boxClicked = ''
      r.style.backgroundColor = 'gray'
    }
    if (
      tigerInp.value === 'tiger' ||
      tigerInp.value === 'TIGER' ||
      tigerInp.value === 'Tiger'
    ) {
      tiger.style.display = 'none'
      tigerInp.style.display = 'none'
      boxClicked = ''
      t.style.backgroundColor = 'gray'
    }
    if (
      unicornInp.value === 'unicorn' ||
      unicornInp.value === 'UNICORN' ||
      unicornInp.value === 'Unicorn'
    ) {
      unicorn.style.display = 'none'
      unicornInp.style.display = 'none'
      boxClicked = ''
      u.style.backgroundColor = 'gray'
    }
    if (
      viperInp.value === 'viper' ||
      viperInp.value === 'VIPER' ||
      viperInp.value === 'Viper'
    ) {
      viper.style.display = 'none'
      viperInp.style.display = 'none'
      boxClicked = ''
      v.style.backgroundColor = 'gray'
    }
    if (
      walrusInp.value === 'walrus' ||
      walrusInp.value === 'Walrus' ||
      walrusInp.value === 'WALRUS'
    ) {
      walrus.style.display = 'none'
      walrusInp.style.display = 'none'
      boxClicked = ''
      w.style.backgroundColor = 'gray'
    }
    if (
      xerusInp.value === 'xerus' ||
      xerusInp.value === 'XERUS' ||
      xerusInp.value === 'Xerus'
    ) {
      xerus.style.display = 'none'
      xerusInp.style.display = 'none'
      boxClicked = ''
      x.style.backgroundColor = 'gray'
    }
    if (
      yakInp.value === 'yak' ||
      yakInp.value === 'YAK' ||
      yakInp.value === 'Yak'
    ) {
      yak.style.display = 'none'
      yakInp.style.display = 'none'
      boxClicked = ''
      y.style.backgroundColor = 'gray'
    }

    if (
      zebraInp.value === 'zebra' ||
      zebraInp.value === 'ZEBRA' ||
      zebraInp.value === 'Zebra'
    ) {
      zebra.style.display = 'none'
      zebraInp.style.display = 'none'
      boxClicked = ''
      z.style.display = 'none'
    }
  }
})

//-----------------Sounds-------------------
