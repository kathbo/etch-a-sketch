let cont = document.querySelector('div.grids')

let gridNum = Math.pow(16, 2) 
for (let x = 1; x <= gridNum; x++) {
  let appendDiv = document.createElement('div')
  appendDiv.classList.add('square');
  cont.appendChild(appendDiv);
}

let mousePosition = false;
window.onmousedown = () => (mousePosition = true,
                                  console.log(mousePosition))
window.onmouseup = () => (mousePosition = false,
                                  console.log(mousePosition))
console.log(mousePosition)


sqrs.forEach(sq => {
    sq.addEventListener('mousemove', () => {
      if (mousePosition === true) {
        sq.style.cssText = 'background-color: black'
      }
  })})