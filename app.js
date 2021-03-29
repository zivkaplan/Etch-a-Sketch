const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
const changeGridBtn = document.querySelector(".changeGrid");
const coloredSquaresParagraph = document.querySelector(".coloredSquares");
const randomColorBtn = document.querySelector("#randomColor")
const colorPicker = document.querySelector("#colorPicker")
let pickedColor = "#000"

window.addEventListener("load", setGrid());

function setGrid(size = 16) {
    setGridColumns(size);
    fillGrid(size);
}

function resetGrid(newSize = 0) {
    const gridArray = Array.from(container.childNodes)
    if (newSize === 0) {
        newSize = Math.sqrt(Array.from(gridArray).length)
    }
    gridArray.forEach(element => container.removeChild(element))
    coloredSquaresParagraph.innerHTML = `You painted <b>0</b> squares`;
    setGrid(newSize);

}

function setGridColumns(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("gridItem");
        container.append(div);
    }
};

function randomInt(max = 255) {
    return Math.floor(Math.random() * max) + 1
}

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("gridItem") && (!e.target.style.backgroundColor)) {
        e.target.classList.add("hovered")
        if (randomColorBtn.checked) {
            e.target.style.backgroundColor = `rgb(${randomInt()},${randomInt()},${randomInt()})`;
        } else {
            e.target.style.backgroundColor = pickedColor;
        }
        const coloredSquares = document.querySelectorAll(".gridItem.hovered");
        coloredSquaresParagraph.innerHTML = `You painted <b> ${coloredSquares.length} </b> squares`;
    }
})

reset.addEventListener("click", () => resetGrid())
randomColorBtn.addEventListener("click", () => resetGrid())


changeGridBtn.addEventListener("click", () => {
    let newSize = parseInt(window.prompt("How many squares per row?\nmin:1, max: 64."));
    if (newSize < 0 || newSize > 64 || Number.isNaN(newSize)) {
        alert("Enter a number from 1-64 range!");
        newSize = parseInt(window.prompt("How many squares per row?\nmin:1, max: 64."));
    } else {
        resetGrid(newSize)
    }
})

colorPicker.addEventListener("input", (e) => {
    pickedColor = colorPicker.value;
})
