const log = console.log;
const squaresContId = "squares-container";

const bodyEl = document.querySelector("body");
const squaresContainer = document.createElement("div");
squaresContainer.id = squaresContId;
const buttonToChangeGrid = document.createElement("button");
buttonToChangeGrid.id = "Change-grid-btn";
buttonToChangeGrid.textContent = "Change grid size";
buttonToChangeGrid.style.margin = "10px 0px 0px 0px";

bodyEl.appendChild(squaresContainer);
bodyEl.appendChild(buttonToChangeGrid);

const containerSize = 800;
let gridSize = 16;
let smallSquareSize = containerSize / gridSize;

function createSmallSquare() {
    const divEl = document.createElement("div");
    divEl.style.height = `${smallSquareSize.toString()}px`;
    divEl.style.width = `${smallSquareSize.toString()}px`;
    divEl.style.border = "solid 2px grey";
    divEl.classList.add("grid-div");

    return divEl;
}

for(i=0; i < gridSize * gridSize; i++) {
    const divEl = createSmallSquare();
    divEl.textContent = `${i}`;
    squaresContainer.appendChild(divEl);
};

buttonToChangeGrid.addEventListener("click", () => {
    let newGridSize;
    
    if(buttonToChangeGrid.id === "Change-grid-btn")
        newGridSize = prompt("Choose size between 1 and 100");
});

