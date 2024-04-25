const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) =>{
  stopAutomatic();
  turnOn[event.target.id]();
  
}

const nextIndex = () => {
  if (colorIndex < 2){
    colorIndex++
  }else{
    colorIndex = 0;
  }
}

const changeColor = () => {
  const colors = ['red','yellow','green']
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
}

const stopAutomatic = () =>{
  clearInterval(intervalId)
}

const turnOn ={  
  'red':  () => img.src = './imgs/vermelho.png',
  'green': () => img.src = './imgs/verde.png',
  'yellow': () => img.src = './imgs/amarelo.png',
  'automatic': () => intervalId = setInterval(changeColor, 1000)
}


buttons.addEventListener('click', trafficLight);