let sqrs = document.querySelectorAll('.grids > div')
let grid = document.querySelector('div.grids')
let resetBtn = document.querySelector('#reset');


// var that determinates whether or not mouse is pressed 
let mousePosition = false;
document.body.onmousedown = () => (mousePosition = true);
document.body.onmouseup = () => (mousePosition = false);

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

// colors a pressed square
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

let currentSize = 16; // default value
createSquares(currentSize);

let btnsSize = document.querySelectorAll('.btnSize');
btnsSize.forEach(btn => {
  btn.addEventListener('click', () => {
    createSquares(currentSize)
  })
})

// current mode
let currentMode = 'color' // default




// *** COLOR ***
let currentColor = 'grey' // default

function makeUpHEX() {
  let hex = [];
  let possibilities = "abcdef1234567890"
  for (let x = 0; x < 6; x++) {
    let randomNum = Math.floor(Math.random() * (15 - 0 + 1))
    hex.push(possibilities[randomNum])
  }
  return '#' + hex.join('')
}


// *** REMOVAL ***
// erase
let eraseBtn = document.querySelector('#eraser')

document.querySelectorAll('.grids > div').forEach(sq => {
  sq.addEventListener('moveover', () => {
    if (mousePosition === true) {
      sq.style.cssText = "background-color: none"
    }
  })
})
// eraseBtn.addEventListener('click', () => {
//   document.querySelectorAll('.grids > div').forEach(sq => {
//     sq.addEventListener('mouseover', () => {
//       if (mousePosition === true) {
//         sq.style.cssText = "background-color: none"
//       }
//     })
//   })
// })

// reset
resetBtn.addEventListener('click', () => {
  document.querySelectorAll('.grids > div').forEach(sq => {
    sq.style.cssText = "background-color: none"
  })
})





// delete section's p text
// color of gray 

// erase doesnt work properly
// rainbow has a president over grey
// distinguish which button is pressed
// *this weird stoopid error????
