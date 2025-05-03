# Sketch Pad Project

## Overview
This project creates an interactive sketch pad in your browser. It features a grid of squares that change color when you hover over them, allowing you to draw pixel art. You can also customize the grid size with a button at the top of the page.

## Features
- Dynamic 16x16 grid created with JavaScript
- Hover effect that changes the color of squares as you move your mouse over them
- Button to customize the grid dimensions (up to 100x100)
- Responsive layout using Flexbox

## Technologies Used
- HTML
- CSS (Flexbox)
- JavaScript (Vanilla)

## How to Use
1. Open the webpage to see the default 16x16 grid
2. Move your mouse over the grid squares to draw
3. Click the "Change Grid Size" button at the top to customize the dimensions
4. Enter a number between 1-100 for the new grid size
5. Start drawing on your new grid!

## Project Structure
```
sketch-pad/
│
├── index.html       # Main HTML file
├── styles.css       # CSS styling
├── script.js        # JavaScript functionality
└── README.md        # This file
```

## Implementation Details
- Grid squares are dynamically generated using JavaScript
- Flexbox is used for the grid layout rather than CSS Grid
- The grid maintains the same total size regardless of how many squares it contains
- Careful attention is paid to borders and margins to maintain square dimensions

## Learning Objectives
This project demonstrates:
- DOM manipulation with JavaScript
- Event handling for hover effects and button clicks
- Dynamic content creation
- Flexbox layout techniques
- User input validation

## Limitations
- Maximum grid size is limited to 100x100 to maintain performance
- Colors are currently preset (future versions may include color selection)
