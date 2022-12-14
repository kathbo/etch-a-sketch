const sqrs = document.querySelectorAll('.grids > div');
const grid = document.querySelector('div.grids');

const smallBtn = document.querySelector('#smallBtn');
const normalBtn = document.querySelector('#normalBtn');
const bigBtn = document.querySelector('#bigBtn');
const hugeBtn = document.querySelector('#hugeBtn');

createNewGrid(16); //default

smallBtn.onclick = () => createNewGrid(5);
normalBtn.onclick = () => createNewGrid(16);
bigBtn.onclick = () => createNewGrid(36);
hugeBtn.onclick = () => createNewGrid(64);

// function that creates a desired sized grid
function clearGrid() {
    while (grid.hasChildNodes()) { 
        grid.removeChild(grid.firstElementChild)
    }
}
function insertSquares(size) {
    for (let x = 1; x <= Math.pow(size, 2); x++) {
        let appendDiv = document.createElement('div');
        grid.appendChild(appendDiv);
    }
      grid.style.cssText = `grid-template-columns: repeat(${size}, 1fr);`
    
}

function createNewGrid(size) { 
    clearGrid();
    insertSquares(size);
    colorSquares();
}

//let currentColor = gray; // default

function makeUpHEX() {
  let hex = [];
  let possibilities = "abcdef1234567890"
  for (let x = 0; x < 6; x++) {
    let randomNum = Math.floor(Math.random() * (15 - 0 + 1))
    hex.push(possibilities[randomNum])
  }
  return '#' + hex.join('')
}

const rainbowBtn = document.querySelector('#rainbowButton');
const grayBtn = document.querySelector('#grayBtn');
const eraserBtn = document.querySelector('#eraser');
const resetBtn = document.querySelector('#reset');

let currentMode = 'gray';
rainbowBtn.onclick = () => currentMode = 'color';
grayBtn.onclick = () => currentMode = 'gray';
eraserBtn.onclick = () => currentMode = 'erase';
resetBtn.addEventListener('click', () => {
  document.querySelectorAll('.grids > div').forEach(sq => {
    sq.style.cssText = "background-color: none"
  })
})

// var that determinates whether or not mouse is pressed 
let mousePosition = false;
grid.onmousedown = () => (mousePosition = true);
grid.onmouseup = () => (mousePosition = false);

function colorSquares() {
  document.querySelectorAll('.grids > div').forEach(sq => {
    sq.addEventListener('mouseover', () => {
      if (mousePosition === true) {
        if (currentMode === 'color') {
          sq.style.cssText = `background-color: ${makeUpHEX()}`
        }
        else if (currentMode === 'erase') {
          sq.style.cssText = 'background-color: none'
        }
        else {
          sq.style.cssText = 'background-color: #2b2d2f'
        }
      }
      sq.ondragstart = function() {
        return false;
      };
    })
  })
}
