export function cardBgChange ({
  buttonForest,
  buttonRain,
  buttonCoffePot,
  buttonFirePlace,   
  forestVol,
  rainVol,
  coffeVol,
  fireVol,
  buttonDark,
}) {

  // this's back cards background
  function forestBackOn() {
    if(buttonDark = true){
      buttonForest.classList.add('blue')
      buttonRain.classList.remove('blue')
      buttonCoffePot.classList.remove('blue')
      buttonFirePlace.classList.remove('blue')
    } else {
      buttonForest.classList.add('blueDark')
      buttonRain.classList.remove('blueDark')
      buttonCoffePot.classList.remove('blueDark')
      buttonFirePlace.classList.remove('blueDark-')
    }
  }
  function rainBackOn() {
    buttonForest.classList.remove('blue')
    buttonRain.classList.add('blue')
    buttonCoffePot.classList.remove('blue')
    buttonFirePlace.classList.remove('blue')
  }
  function coffeBackOn() {
    buttonForest.classList.remove('blue')
    buttonRain.classList.remove('blue')
    buttonCoffePot.classList.add('blue')
    buttonFirePlace.classList.remove('blue')
  }
  function fireBackOn() {
    buttonForest.classList.remove('blue')
    buttonRain.classList.remove('blue')
    buttonCoffePot.classList.remove('blue')
    buttonFirePlace.classList.add('blue')
  }

  //this's vol background
  function forestBackVol() {
    forestVol.classList.add('white')
    rainVol.classList.remove('white')
    coffeVol.classList.remove('white')
    fireVol.classList.remove('white')
  }
  function rainBackVol() {
    forestVol.classList.remove('white')
    rainVol.classList.add('white')
    coffeVol.classList.remove('white')
    fireVol.classList.remove('white')
  }
  function coffeBackVol() {
    forestVol.classList.remove('white')
    rainVol.classList.remove('white')
    coffeVol.classList.add('white')
    fireVol.classList.remove('white')
  }
  function fireBackVol() {
    forestVol.classList.remove('white')
    rainVol.classList.remove('white')
    coffeVol.classList.remove('white')
    fireVol.classList.add('white')
  }

  return {
    forestBackOn,
    rainBackOn,
    coffeBackOn,
    fireBackOn,
    forestBackVol,
    rainBackVol,
    coffeBackVol,
    fireBackVol
  }
}
