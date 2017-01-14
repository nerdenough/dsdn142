/**
 * Brendan Goodenough
 * Project 1 - Grids and Lines
 *
 * Based on the Project 1 "Lines Grid" template by Birgit Bachler
 */

// Lines to be drawn along the horizontal and vertical axis of the isometric
// grid.
const xLines = [];
const yLines = [];
const tileSize = 64;

/**
 * Calculates the horizontal line locations for for an isometric grid. The lines
 * are built upon an initial grid and a tile size to determine their location
 * on screen.
 *
 * @param {Array} grid - The initial grid to build upon.
 */
function calculateXLines(grid) {
  grid[0].map((point, index) => {
    // http://clintbellanger.net/articles/isometric_math/
    // Calculate location for lines on screen
    const screenX = (point.x - point.y) * (tileSize / 2) + width / 2;
    const screenY = (point.x + point.y) * (tileSize / 2) + height / 2;
    const destX = grid[grid.length - 1][index].x;
    const destY = grid[grid.length - 1][index].y;
    const screenDestX = (destX - destY) * (tileSize / 2) + width / 2;
    const screenDestY = (destX + destY) * (tileSize / 2) + height / 2;

    xLines.push({
      start: { x: screenX, y: screenY / 2 },
      end: { x: screenDestX, y: screenDestY / 2 }
    });
  });
}

/**
 * Calculates the vertical line locations for for an isometric grid. The lines
 * are built upon an initial grid and a tile size to determine their location
 * on screen.
 *
 * @param {Array} grid - The initial grid to build upon.
 */
function calculateYLines(grid) {
  grid.map((col, index) => {
    const point = col[0];

    // http://clintbellanger.net/articles/isometric_math/
    // Calculate location for lines on screen
    const screenX = (point.x - point.y) * (tileSize / 2) + width / 2;
    const screenY = (point.x + point.y) * (tileSize / 2) + height / 2;
    const destX = grid[index][grid.length - 1].x;
    const destY = grid[index][index].y;
    const screenDestX = (destX - destY) * (tileSize / 2) + width / 2;
    const screenDestY = (destX + destY) * (tileSize / 2) + height / 2;

    yLines.push({
      start: { x: screenX, y: screenY / 2 },
      end: { x: screenDestX, y: screenDestY / 2 }
    });
  });
}

/**
 * Constructs an initial grid based on the canvas size and specified tile size.
 * The grid, stored as a 2D array, contains objects which store the x and y
 * indexes of each of the points.
 *
 * @returns {Array} Initial grid.
 */
function createGrid() {
  const grid = [];

  for (let y = 0; y <= height / tileSize; y++) {
    const cols = [];
    for (let x = 0; x <= width / tileSize; x++) {
      cols.push({ x, y });
    }
    grid.push(cols);
  }

  return grid;
}

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');
  smooth();

  const grid = createGrid();
  calculateXLines(grid);
  calculateYLines(grid);
}

function draw() {
  clear();
  background(255);

  // Draw base isometric grid
  stroke('#97cff2');
  xLines.map(l => line(l.start.x, l.start.y, l.end.x, l.end.y));
  yLines.map(l => line(l.start.x, l.start.y, l.end.x, l.end.y));
}
