let cont = document.querySelector('div.grids')

let gridNum = Math.pow(16, 2) 
for (let x = 1; x <= gridNum; x++) {
  let appendDiv = document.createElement('div')
  appendDiv.classList.add('square');
  cont.appendChild(appendDiv);
}