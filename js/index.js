import { Timer } from "./timer.js"
import {cardBgChange} from "./cardsBg.js"
import { Sounds } from "./sounds.js"
import {   
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonTimeAdd,
  buttonTimeLess,
  buttonForest,
  buttonRain,
  buttonCoffePot,
  buttonFirePlace,
  minutesDisplay,
  secondsDisplay,  
  forestVol,
  rainVol,
  coffeVol,
  fireVol, } from "./elements.js"



let buttonDark = document.querySelector('.dark')
const buttonLight = document.querySelector('.light')
const boddy = document.querySelector('body')
const timerDark = document.querySelector('.timer')





const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 

 })

 const sounds = Sounds()

 const cardBg = cardBgChange({
  buttonForest,
  buttonRain,
  buttonCoffePot,
  buttonFirePlace, 
  forestVol,
  rainVol,
  coffeVol,
  fireVol, 
  buttonDark,
 })
 
 buttonLight.addEventListener('click', function() {
   buttonDark.classList.remove('hide')
   buttonLight.classList.add('hide')
   boddy.classList.add('bodyDark')
   timerDark.classList.add('fcWhite')

   buttonPlay.classList.add('dark')
   buttonPause.classList.add('dark')
   buttonStop.classList.add('dark')
   buttonTimeAdd.classList.add('dark')
   buttonTimeLess.classList.add('dark')

   buttonForest.classList.add('cardDark')
   buttonRain.classList.add('cardDark')
   buttonFirePlace.classList.add('cardDark')
   buttonCoffePot.classList.add('cardDark')

   buttonForest.classList.add('dark')
   buttonRain.classList.add('dark')
   buttonFirePlace.classList.add('dark')
   buttonCoffePot.classList.add('dark')

   forestVol.classList.add('white')
   rainVol.classList.add('white')
   fireVol.classList.add('white')
   coffeVol.classList.add('white')
 
 })

buttonDark.addEventListener('click', function() {
  buttonDark.classList.add('hide')
  buttonLight.classList.remove('hide')
  boddy.classList.remove('bodyDark')
  timerDark.classList.remove('fcWhite')
  timerDark.classList.remove('fcWhite')

  buttonPlay.classList.remove('dark')
  buttonPause.classList.remove('dark')
  buttonStop.classList.remove('dark')
  buttonTimeAdd.classList.remove('dark')
  buttonTimeLess.classList.remove('dark')

  buttonForest.classList.remove('cardDark')
  buttonRain.classList.remove('cardDark')
  buttonFirePlace.classList.remove('cardDark')
  buttonCoffePot.classList.remove('cardDark')

  buttonForest.classList.remove('dark')
  buttonRain.classList.remove('dark')
  buttonFirePlace.classList.remove('dark')
  buttonCoffePot.classList.remove('dark')

  forestVol.classList.remove('white')
  rainVol.classList.remove('white')
  fireVol.classList.remove('white')
  coffeVol.classList.remove('white')

  
})


buttonPlay.addEventListener('click', function() {
  timer.countDown()
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
})

buttonPause.addEventListener('click', function() {
  timer.pauseTimer()
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})

buttonStop.addEventListener('click', function() {
  timer.resetTimer()
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})

buttonTimeAdd.addEventListener('click', function() {
  timer.addMinutes()
})
buttonTimeLess.addEventListener('click', function() {
  timer.decraseMinutes()
})

buttonForest.addEventListener('click', function() {
  cardBg.forestBackOn() 
  sounds.forestSounds()
  cardBg.forestBackVol()
})

buttonRain.addEventListener('click', function() {
  cardBg.rainBackOn()
  sounds.rainSounds()
  cardBg.rainBackVol()
})

buttonCoffePot.addEventListener('click', function() {
  cardBg.coffeBackOn()
  sounds.coffeSounds()
  cardBg.coffeBackVol()
})

buttonFirePlace.addEventListener('click', function() {
  cardBg.fireBackOn()
  sounds.fireSounds()
  cardBg.fireBackVol()
})