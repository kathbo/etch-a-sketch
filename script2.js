const sqrs = document.querySelectorAll('.grids > div');
const grid = document.querySelector('div.grids');

const smallBtn = document.querySelector('#smallBtn');
const normalBtn = document.querySelector('#normalBtn');
const bigBtn = document.querySelector('#bigBtn');
const hugeBtn = document.querySelector('#hugeBtn');

let currentSize = 16; // default

smallBtn.onclick = () => currentSize = 5;
normalBtn.onclick = () => currentSize = 16;
bigBtn.onclick = () => currentSize = 36;
hugeBtn.onclick = () => currentSize = 64;

// function that creates a desired sized grid
function clearGrid() {
    while (grid.hasChildNodes()) { 
        grid.removeChild(grid.firstElementChild)
    }
}
function insertSquares(size) {
    for (let x = 1; x <= Math.pow(size, 2); x++) {
        let appendDiv = document.createElement('div'); // ????????????????
        grid.appendChild(appendDiv);
    }
      grid.style.cssText = `grid-template-columns: repeat(${size}, 1fr);`
    
}
function createSquares(size) { 
    clearGrid();
    insertSquares(size);
    
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
  
const rainbowBtn = document.querySelector('#rainbowButton');
const grayBtn = document.querySelector('#grayBtn');
const eraserBtn = document.querySelector('#eraser');
const resetBtn = document.querySelector('#reset');

