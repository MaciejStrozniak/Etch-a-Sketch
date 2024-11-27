const log = console.log;
const squaresContId = "squares-container";
const buttonToChangeId = "Change-grid-btn";
const buttonToResetId = "Reset-grid-btn";

const bodyEl = document.querySelector("body");

const squaresContainer = document.createElement("div");
squaresContainer.id = squaresContId;

const buttonToChangeGrid = document.createElement("button");
buttonToChangeGrid.id = buttonToChangeId;
buttonToChangeGrid.textContent = "Change grid size";
buttonToChangeGrid.style.margin = "10px 0px 0px 0px";

const buttonToResetGrid = document.createElement("button");
buttonToResetGrid.id = buttonToResetId;
buttonToResetGrid.textContent = "Reset grid";
buttonToResetGrid.style.margin = "10px 0px 0px 0px";

bodyEl.appendChild(squaresContainer);
bodyEl.appendChild(buttonToChangeGrid);
bodyEl.appendChild(buttonToResetGrid);

const containerSize = 800;
let gridSize = 16;

function createSquare(gridSize) {
    let smallSquareSize = containerSize / gridSize;

    const divEl = document.createElement("div");
    divEl.style.height = `${smallSquareSize.toString()}px`;
    divEl.style.width = `${smallSquareSize.toString()}px`;
    divEl.style.backgroundColor = "rgb(100, 242, 127)";
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

function resetGridColor() {

    const elToReset = document.querySelectorAll(".grid-div");

    elToReset.forEach((el) => {
        el.style.backgroundColor = "rgb(100, 242, 127)";
    });
}

function userPrompt() {
        let loop = true;

        gridSize = prompt("Choose size of grid between 1 and 100");
        gridSize = Number(gridSize);
        while(loop) {
            if(gridSize == null || typeof(gridSize) !== "number" || isNaN(gridSize))
                gridSize = prompt("Wrong value. Choose size between 1 and 100");
            
            if(gridSize > 100 || gridSize < 1)
                gridSize = prompt("Wrong size of grid. Choose size between 1 and 100");
            else
                loop = false;
        }
}

function generateNewGrid() {
    userPrompt();
    removeSquares(gridSize);
    createGrid(gridSize);
}

buttonToChangeGrid.addEventListener("click", () => {
    
    if(buttonToChangeGrid.id === "Change-grid-btn")
       generateNewGrid();
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter")
        buttonToChangeGrid.click();
});

buttonToResetGrid.addEventListener("click", () =>{
    resetGridColor();
});

document.body.addEventListener("keydown", (e) => {
    if(e.key === " ")
        buttonToResetGrid.click();
});

document.body.addEventListener("mouseover", (e) => {
    const target = e.target;

    if(target.classList.contains("grid-div"))
        target.style.backgroundColor = "black";        
});

// DEFAULT SETUP
createGrid(gridSize);