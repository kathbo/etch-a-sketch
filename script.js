let cont = document.querySelector('div.grids')

function createSquares(num) { 
  // removes every previous square 
  while (cont.hasChildNodes()) { 
    cont.removeChild(cont.firstElementChild)
  }
  // creates num amount of squares
  for (let x = 1; x <= Math.pow(num, 2); x++) {
    let appendDiv = document.createElement('div')
    appendDiv.classList.add('square');
    cont.appendChild(appendDiv);
  }
  
  let sqrs = document.querySelectorAll('div.square')
  let grid = document.querySelector('div.grids')
  
  // var that determinates whether or not mouse is pressed 
  let mousePosition = false;
  grid.onmousedown = () => (mousePosition = true,
                            console.log(mousePosition))
  window.onmouseup = () => (mousePosition = false,
                                    console.log(mousePosition))
  sqrs.forEach(sq => {
    sq.addEventListener('mousemove', () => {
      if (mousePosition === true) {
        console.log(sq)
        sq.style.cssText = 'background-color: black'
      }
    })
  })
}

createSquares(20);