export function Sounds () {

  const ForestSound = new Audio("Sounds/Floresta.wav")
  const RainSound = new Audio("Sounds/Chuva.wav");
  const CoffePotSound = new Audio("Sounds/Cafeteria.wav")
  const FirePlaceSound = new Audio("Sounds/Lareira.wav")
    
  const volumeForest = document.querySelector('#volumeForest')
  const volumeRain = document.querySelector('#volumeRain')
  const volumeCoffe = document.querySelector('#volumeCoffe')
  const volumeFire = document.querySelector('#volumeFire')

  volumeForest.addEventListener('input', function() {
    ForestSound.volume = volumeForest.value
})
  volumeRain.addEventListener('input', function() {
    RainSound.volume = volumeRain.value
})
  volumeCoffe.addEventListener('input', function() {
    CoffePotSound.volume = volumeCoffe.value
})
  volumeFire.addEventListener('input', function() {
    FirePlaceSound.volume = volumeFire.value
})


  function forestSounds() {
    ForestSound.play()
    RainSound.pause()
    CoffePotSound.pause()
    FirePlaceSound.pause()
  }
  function rainSounds() {
    ForestSound.pause()
    RainSound.play()
    CoffePotSound.pause()
    FirePlaceSound.pause()
  }
  function coffeSounds() {
    ForestSound.pause()
    RainSound.pause()
    CoffePotSound.play()
    FirePlaceSound.pause()
  }
  function fireSounds() {
    ForestSound.pause()
    RainSound.pause()
    CoffePotSound.pause()
    FirePlaceSound.play()
  }

  return {
    forestSounds,
    rainSounds,
    coffeSounds,
    fireSounds
  }
}

