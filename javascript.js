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

function createSquare(gridSize) {
    let smallSquareSize = containerSize / gridSize;

    const divEl = document.createElement("div");
    divEl.style.height = `${smallSquareSize.toString()}px`;
    divEl.style.width = `${smallSquareSize.toString()}px`;
    divEl.style.border = "solid 0.5px grey";
    divEl.classList.add("grid-div");

    return divEl;
}

function removeSquares(gridSize) {

    const elToRemove = document.querySelectorAll(".grid-div");

    elToRemove.forEach((el) => {
        squaresContainer.removeChild(el);
    });
}

function createGrid(gridSize) {
    for(i=0; i < gridSize * gridSize; i++) {
        const divEl = createSquare(gridSize);
        squaresContainer.appendChild(divEl);
    }
};

createGrid(gridSize);

buttonToChangeGrid.addEventListener("click", () => {
    
    if(buttonToChangeGrid.id === "Change-grid-btn") {
    
        let loop = true;

        gridSize = prompt("Choose size of grid between 1 and 100");
        gridSize = Number(gridSize);
        while(loop) {
            if(gridSize == null || typeof(gridSize) !== "number" || isNaN(gridSize))
                gridSize = prompt("Wrong value. Choose size between 1 and 100");
            
            if(gridSize > 100 || gridSize <= 1)
                gridSize = prompt("Wrong size of grid. Choose size between 1 and 100");
            else
                loop = false;
        }

        removeSquares(gridSize);
        createGrid(gridSize);
    }
});
