const GRIDSIDE = 600;
// let square = 16;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${GRIDSIDE}px`;
sketchArea.style.height = `${GRIDSIDE}px`;

function setBg (){
  this.style.backgroundColor = "rgb(66, 113, 152)";
}

function createGrid(square) {
  let divs = sketchArea.querySelectorAll("div");
  divs.forEach((div) => div.remove());
  let numberOfSquares = square * square;
  let width = `${(GRIDSIDE / square)}px`;
  for (let i = 0; i < numberOfSquares; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = gridCell.style.height = width;
    gridCell.classList.add("cell");

    sketchArea.appendChild(gridCell);

    gridCell.addEventListener("mouseover", setBg);
  }
}


function changesize (input){
  if(input >= 2 && input <= 100){
    createGrid(input);
  }
  else {
    alert("type number between 2 to 100");
  }
}
createGrid(16);

function reset(){
  const sketchArea = document.querySelector("#sketch-area");
  const divs = sketchArea.querySelectorAll("div");
  divs.forEach((div) => div.style.backgroundColor = "white")
}