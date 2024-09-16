// Select container and button elements
const container = document.getElementById('gridContainer');
const resizeButton = document.getElementById('resizeButton');

// Function to create a grid with specified dimensions
function createGrid(size) {
    // Clear previous grid
    container.innerHTML = '';

    // Set up the grid dimensions dynamically
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);

        // Add hover effect with color change
        gridItem.addEventListener('mouseover', changeColor);
    }
}

// Function to randomly change the color of a grid item
function changeColor(e) {
    const randomColor = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
    e.target.style.backgroundColor = randomColor;
}

// Helper function to generate random values between 0-255 for RGB colors
function randomValue() {
    return Math.floor(Math.random() * 256);
}

// Function to prompt the user for grid size and recreate the grid
function resizeGrid() {
    let newSize = prompt('Enter new grid size (Max 100):');
    newSize = parseInt(newSize);

    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
}

// Initialize the grid with a default size of 16
createGrid(16);

// Add event listener to the resize button
resizeButton.addEventListener('click', resizeGrid);
