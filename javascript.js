const squaresContId = "squares-container";

const bodyEl = document.querySelector("body");
const squaresContainer = document.createElement("div");
squaresContainer.id = squaresContId;
bodyEl.appendChild(squaresContainer);

for(i=0; i < 255; i++) {
    const divEl = document.createElement("div");
    divEl.classList.add("grid-div");
    divEl.textContent = `${i}`;
    squaresContainer.appendChild(divEl);
};