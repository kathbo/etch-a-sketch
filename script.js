let sqrs = document.querySelectorAll('.grids > div')
let grid = document.querySelector('div.grids')

// var that determinates whether or not mouse is pressed 
let mousePosition = false;
window.onmousedown = () => (mousePosition = true);
window.onmouseup = () => (mousePosition = false);

// size
function createSquares(num) { 
  // removes every previous square 
  while (grid.hasChildNodes()) { 
    grid.removeChild(grid.firstElementChild)
  }
  // creates num amount of squares
  for (let x = 1; x <= Math.pow(num, 2); x++) {
    let appendDiv = document.createElement('div')
    //appendDiv.style.cssText = `border: 1px solid black`;
    grid.appendChild(appendDiv);
  }
  
  document.querySelector('div.grids').style.cssText = `grid-template-columns: repeat(${num}, 1fr);`
  


// colors the pressed squares
  document.querySelectorAll('.grids > div').forEach(sq => {
    sq.addEventListener('mouseover', () => {
      if (mousePosition === true) {
        if (currentColor == "grey") {
          sq.classList.add('clicked')
        } 
        if (currentColor == "rainbow") {
          sq.style.cssText = `background-color: ${makeUpHEX()}`
        }
      }
    })
  })

  
}

let currentSize = 16;
createSquares(currentSize);

let btnsSize = document.querySelectorAll('.btnSize');
btnsSize.forEach(btn => {
  btn.addEventListener('click', () => {
    createSquares(currentSize)
  })
})

// color of squares
let currentColor = 'grey'

function makeUpHEX() {
  let hex = [];
  let possibilities = "abcdef1234567890"
  for (let x = 0; x < 6; x++) {
    let randomNum = Math.floor(Math.random() * (15 - 0 + 1))
    hex.push(possibilities[randomNum])
  }
  return '#' + hex.join('')
}



// erase
let eraseBtn = document.querySelector('#eraser')

eraseBtn.addEventListener('click', () => {
  document.querySelectorAll('.grids > div').forEach(sq => {
    sq.addEventListener('mouseover', () => {
      if (mousePosition === true) {
        sq.style.cssText = "background-color: none"
      }
    })
  })
})

// reset
let resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', () => {
  document.querySelectorAll('.grids > div').forEach(sq => {
    sq.style.cssText = "background-color: none"
  })
})


//eraser function
//delete function
// this weird stoopid error????