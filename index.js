// function startSong() {
//   let audio = new Audio('sounds/start.mp3')
//   audio.startSong()
// }

// let jay = new Audio('sounds/start.mp3')
// document.onload(jay.play())

document.querySelector('.start').addEventListener('click', function () {
  window.open('index2.html', '_self')
})

//music//
let musc = new Audio('start.wav')

// musicBtn = add.addEventListener('click', (e) => musicBtn.play())

window.addEventListener('load', (e) => {
  musicBtn.play()
})
