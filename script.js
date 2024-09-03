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
    activateButton(mode);
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

// Check if pointer is down
let mouseDown = false;
let lastX = null;
let lastY = null;

document.addEventListener('pointerdown', (e) => {
    mouseDown = true;
    changeColor(e); // Change color on the initial pointer down
});

document.addEventListener('pointerup', () => {
    mouseDown = false;
    lastX = null;
    lastY = null;
});

grid.addEventListener('pointerleave', () => {
    mouseDown = false;
    lastX = null;
    lastY = null;
});

grid.addEventListener('pointermove', (e) => {
    if (mouseDown) {
        changeColor(e);
    }
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
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement)
  }
}

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function paintCell(x, y) {
    const index = y * currentSize + x;
    const target = grid.children[index];

    if (currentMode === 'color') {
        target.style.backgroundColor = currentColor;
    } else if (currentMode === 'rainbow') {
        target.style.backgroundColor = getRandomColor();
    } else if (currentMode === 'eraser') {
        target.style.backgroundColor = 'white';
    }
}

function paintLine(x0, y0, x1, y1) {
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1;
    const sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;

    while (true) {
        paintCell(x0, y0);

        if (x0 === x1 && y0 === y1) break;

        const e2 = err * 2;
        if (e2 > -dy) {
            err -= dy;
            x0 += sx;
        }
        if (e2 < dx) {
            err += dx;
            y0 += sy;
        }
    }
}

function changeColor(e) {
    if (!mouseDown) return;

    const target = e.target;
    if (!target.classList.contains('grid-element')) return;

    const gridRect = grid.getBoundingClientRect();
    const cellSize = gridRect.width / currentSize;

    const x = Math.floor((e.clientX - gridRect.left) / cellSize);
    const y = Math.floor((e.clientY - gridRect.top) / cellSize);

    if (lastX === null || lastY === null) {
        paintCell(x, y);
    } else {
        paintLine(lastX, lastY, x, y);
    }

    lastX = x;
    lastY = y;
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
    activateButton(DEFAULT_MODE);
}