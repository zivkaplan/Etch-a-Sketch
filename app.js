const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
const coloredSquaresParagraph = document.querySelector(".coloredSquares");

window.addEventListener("load", setDefaultGrid);

function setDefaultGrid() {
    setGridColumns(16);
    fillGrid(16);
}

function setGridColumns(size) {
    container.setAttribute("grid-template-columns", `repeat(${size}, 1fr)`)
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("gridItem");
        container.append(div);
    }
};

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("gridItem")) {
        e.target.classList.add("hovered");
        const coloredSquares = document.querySelectorAll(".gridItem.hovered");
        coloredSquaresParagraph.innerHTML = `You painted <b> ${coloredSquares.length} </b> squares`;
    }
})

reset.addEventListener("click", function () {
    const gridItems = document.querySelectorAll(".gridItem");
    gridItems.forEach(gridItem => gridItem.classList.remove("hovered"));
    coloredSquaresParagraph.innerHTML = `You painted <b>0</b> squares`;
})