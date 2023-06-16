const DIVS_X_Y = 32;

function createGrid(gridDim) {
    const container = document.querySelector(".container");
    for (let i = 0; i < gridDim; i++) {
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row)
        for (let j = 0; j < gridDim; j++) {
            const column = document.createElement("div");
            column.className = "column";
            container.lastElementChild.appendChild(column)
        }
    }

    const blocks = document.querySelectorAll(".column");
    blocks.forEach((block) => {
    block.addEventListener("mouseover", (e) => {
        e.target.style.background = "black";
    })
})
}

function deleteElementByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

createGrid(DIVS_X_Y);

const sizeButton = document.getElementById("choose-size");
sizeButton.addEventListener("click", () => {
    const grids = window.prompt("How many squares per side for grid? Must be less than 100.");
    if (isNaN(grids)) {
        return alert("Input was not an integer.")
    }
    if (!grids) {
        return alert("No choice was made.")
    }
    if (parseInt(grids) > 100) {
        return alert("Input is greater than 100 and is not allowed.")
    }
    if (parseInt(grids)) {
        deleteElementByClass("column")
        deleteElementByClass("row")
        createGrid(grids)
        return
    }
})




