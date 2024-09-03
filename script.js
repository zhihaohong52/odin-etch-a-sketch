const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'color';

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;

function setColor(color) {
  currentColor = color;
}

function setSize(size) {
  currentSize = size;
}

function setMode(mode) {
  currentMode = mode;
}

// UI

const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');

colorPicker.addEventListener('input', (e) => {
    setColor(e.target.value);
});

colorBtn.addEventListener('click', () => {
    setMode('color');
});

rainbowBtn.addEventListener('click', () => {
    setMode('rainbow');
});

eraserBtn.addEventListener('click', () => {
    setMode('eraser');
});

clearBtn.addEventListener('click', () => {
    reloadGrid();
});

sizeSlider.addEventListener('input', (e) => {
    updateSizeValue(e.target.value);
});

sizeSlider.addEventListener('change', (e) => {
    changeSize(e.target.value);
});

// Check if mouse is down
let mouseDown = false;

document.addEventListener('mousedown', () => {
    mouseDown = true;
});

document.addEventListener('mouseup', () => {
    mouseDown = false;
});

function changeSize(value) {
    setSize(value);
    updateSizeValue(value);
    reloadGrid();
}

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value}x${value}`;
}

function reloadGrid() {
    clearGrid();
    createGrid(currentSize);
}

function clearGrid() {
    grid.innerHTML = '';
}

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        grid.appendChild(gridElement);
    }
}

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function changeColor(e) {
    if (!mouseDown) return;
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'rainbow') {
        e.target.style.backgroundColor = getRandomColor();
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = 'white';
    }
}

function activateButton(newMode){
    if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active');
    } else if (currentMode === 'color') {
        colorBtn.classList.remove('active');
    } else if (currentMode === 'eraser') {
        eraserBtn.classList.remove('active');
    }

    if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active');
    } else if (newMode === 'color') {
        colorBtn.classList.add('active');
    } else if (newMode === 'eraser') {
        eraserBtn.classList.add('active');
    }
}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
    updateSizeValue(DEFAULT_SIZE);
    activateButton(DEFAULT_MODE);
}