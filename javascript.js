const log = console.log;
const squaresContId = "squares-container";
const buttonToChangeId = "change-grid-btn";
const buttonContainerId = "buttons-container";
const buttonToResetId = "reset-grid-btn";

const bodyEl = document.querySelector("body");

const squaresContainer = document.createElement("div");
squaresContainer.id = squaresContId;

const buttonsContainer = document.createElement("div");
buttonsContainer.id = buttonContainerId;

const buttonToChangeGrid = document.createElement("button");
buttonToChangeGrid.id = buttonToChangeId;
buttonToChangeGrid.textContent = "Change grid size\nClick or press enter";

const buttonToResetGrid = document.createElement("button");
buttonToResetGrid.id = buttonToResetId;
buttonToResetGrid.textContent = "Reset grid\nClick or press spacebar";

const containerSize = 800;
let gridSize = 16;

function addElementsToHTML() {
    bodyEl.appendChild(buttonsContainer);
    bodyEl.appendChild(squaresContainer);
    buttonsContainer.appendChild(buttonToChangeGrid);
    buttonsContainer.appendChild(buttonToResetGrid);
}

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
        el.style.opacity = "1";
        el.classList.remove("hovered");
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

function getRandomRGBColor() {
    // Generate random RGB values between 0 and 255
    const r = Math.floor(Math.random() * 256); // Random red value
    const g = Math.floor(Math.random() * 256); // Random green value
    const b = Math.floor(Math.random() * 256); // Random blue value

    return `rgb(${r}, ${g}, ${b})`; // Return the RGB color string
}

buttonToChangeGrid.addEventListener("click", () => {
    
    if(buttonToChangeGrid.id === buttonToChangeId)
       generateNewGrid();
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter")
        buttonToChangeGrid.click();
});

buttonToResetGrid.addEventListener("click", () =>{
    
    if(buttonToResetGrid.id === buttonToResetId)
        resetGridColor();
});

document.body.addEventListener("keydown", (e) => {
    if(e.key === " ")
        buttonToResetGrid.click();
});

document.body.addEventListener("mouseover", (e) => {
    const target = e.target;
    let classes = target.classList;


    if(classes.contains("grid-div") && classes.contains("hovered")) {

        let targetOpacity = parseFloat(target.style.opacity) || 1;

        if(targetOpacity > 0) {
            log(target.style.opacity)
            target.style.opacity = targetOpacity - 0.1;
        }
    }
        
    else if(classes.contains("grid-div") && !classes.contains("hovered")) {
        target.style.backgroundColor = getRandomRGBColor();
        classes.add("hovered");
    }        
    
});

// DEFAULT SETUP
addElementsToHTML();
createGrid(gridSize);