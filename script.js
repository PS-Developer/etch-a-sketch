const gridlines = document.querySelector('.gridlines');
const gridAmount = document.querySelector('#gridAmount')
const gridBtn = document.querySelector('.gridSelectionBtn')
const gridClass = document.querySelector('.grid')
let brightnessValue = 1

function createGrid () {
  for (let i = 1; i < 257; i++) {
      const div = document.createElement('div');
      div.className = 'grid';
      gridlines.appendChild(div);
    }
}

function adjustGrid (num) {
  const gridHeight = Math.floor(500 / num); 
  for (let i = 1; i < num * num + 1; i++) {
      const div = document.createElement('div');
      div.className = 'grid'
      div.style.width = `calc(100% / ${num})`
      div.style.height = `${gridHeight}px`
      gridlines.appendChild(div);
    }
}

createGrid()

gridBtn.addEventListener('click', function(){
  if (gridAmount.value <= 100) {
    while (gridlines.firstChild) { 
      gridlines.removeChild(gridlines.lastChild)
    }
    adjustGrid(gridAmount.value)
    handleGrid()
  }
})

function handleGrid() {
  const grid = Array.from(document.querySelectorAll('.grid'))
for (const square of grid) {
  square.addEventListener('mouseover', function(){
    handleMouseHover(square)
  })
}
}

handleGrid()

  


function handleMouseHover(square){
  function randColor() {
    return randNum = Math.floor(Math.random() * 256)
  }
  if (brightnessValue > 0) {
    square.style.backgroundColor = `rgb(${randColor()},${randColor()},${randColor()})`
    brightnessValue -= 0.05
    square.style.filter = `brightness(${brightnessValue})`
    console.log(brightnessValue)
  } if (brightnessValue <= 0) {
    brightnessValue = 1
    console.log(brightnessValue)
  }
}  

// const grid = Array.from(document.querySelectorAll('.grid'))
// for (const square of grid) {
//   square.addEventListener('mouseover', function(){
//     handleMouseHover(square)
//   })
// }

// for (const square of grid) {
//   square.addEventListener('mouseover', function(){
//     function randColor() {
//       return randNum = Math.floor(Math.random() * 256)
//     }
//     if (brightnessValue > 0) {
//       square.style.backgroundColor = `rgb(${randColor()},${randColor()},${randColor()})`
//       brightnessValue -= 0.05
//       square.style.filter = `brightness(${brightnessValue})`
//       console.log(brightnessValue)
//     }
//     if (brightnessValue <= 0) {
//       brightnessValue = 1
//       console.log(brightnessValue)
//     }
//   })
// }


