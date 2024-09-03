# odin-etch-a-sketch
This project is a digital version of the classic Etch-A-Sketch toy. Users can draw on a grid by clicking and dragging their mouse, with different modes available for drawing, erasing, and creating rainbow effects. The grid size is adjustable, allowing for both fine and coarse drawings. Part of the [The Odin Project](https://www.theodinproject.com) curriculum.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Live Demo](#live-demo)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)


## Features

- **Color Mode**: Draw using the selected color.
- **Rainbow Mode**: Draw with random colors for each grid element.
- **Eraser Mode**: Erase your drawings by setting the grid elements back to white.
- **Clear Button**: Clear the entire grid to start over.
- **Adjustable Grid Size**: Change the grid size using the slider, ranging from a small to large number of squares.

## Technologies Used

- **HTML**: For the structure of the web page.
- **CSS**: For styling the UI elements.
- **JavaScript**: For handling the drawing logic, grid creation, and user interactions.

## Setup and Installation

To run this project locally:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/etch-a-sketch.git
    ```
2. **Navigate to the Project Directory**:
    ```bash
    cd etch-a-sketch
    ```
3. **Open `index.html` in your Web Browser**:
    Simply double-click the `index.html` file or right-click and open it with your preferred browser.

## Usage

1. **Select a Drawing Mode**:
   - **Color Mode**: Click the "Color mode" button and pick a color using the color picker.
   - **Rainbow Mode**: Click the "Rainbow mode" button to draw with random colors.
   - **Eraser Mode**: Click the "Eraser" button to erase parts of your drawing.

2. **Adjust the Grid Size**:
   - Use the slider at the bottom to increase or decrease the grid size.
   - The current grid size will be displayed below the slider.

3. **Start Drawing**:
   - Click and drag your mouse across the grid to start drawing. The drawing will only occur when the mouse is down, ensuring precise control.

4. **Clear the Grid**:
   - Click the "Clear" button to reset the grid to a blank state.

## Live Demo
You can play the live version of the game here: [Etch-A-Sketch](zhihaohong52.github.io/odin-etch-a-sketch/)

## Customization

You can customize the default color, size, and mode by modifying the following constants in the JavaScript file:

```javascript
const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'color';
```

- DEFAULT_COLOR: Set the default color when in color mode.
- DEFAULT_SIZE: Set the initial grid size.
- DEFAULT_MODE: Set the initial drawing mode.

## Contributing
Contributions are welcome! If you have any ideas or suggestions, feel free to open an issue or submit a pull request.

1. Fork the repository.

2. Create a new branch:
    ```bash
    git checkout -b feature-your-feature-name
    ```
3. Make your changes.

4. Commit your changes:
    ```bash
    git commit -m 'Add some feature'
    ```
5. Push to the branch:
    ```bash
    git push origin feature-your-feature-name
    ```
6. Create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- Inspired by the classic Etch-A-Sketch toy.
- Grid generation and drawing logic inspired by various JavaScript tutorials and examples online.

Feel free to reach out if you have any questions or suggestions. Happy coding!