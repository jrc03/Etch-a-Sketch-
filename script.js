const container = document.querySelector(".container");
const setGridButton = document.getElementById("setGrid");
const gridSizeInput = document.getElementById("gridSize");

setGridButton.addEventListener("click", () => {
    const gridSize = parseInt(gridSizeInput.value);
    createGrid(gridSize);
});

function createGrid(size) {
    // Clear the existing grid
    container.innerHTML = '';
    container.style.width = `${25 * size}px`; // Adjust the width based on the number of squares
    container.style.height = `${25 * size}px`; // Adjust the height based on the number of squares

    // Create the new grid
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.width = `${25}px`;
        div.style.height = `${25}px`;
        container.appendChild(div);
    }
}



// Initialize the default grid
createGrid(16);
