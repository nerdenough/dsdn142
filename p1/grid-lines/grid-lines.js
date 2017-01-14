/**
 * Brendan Goodenough
 * Project 1 - Grids and Lines
 *
 * Based on the Project 1 "Lines Grid" template by Birgit Bachler
 */

const grid = [];
const length = 10;
const spacing = 64;

/**
 * Draws a line from one point to another.
 *
 * @param {Object} p1 - Coordinates for first point.
 * @param {Object} p2 - Coordiantes for second point.
 */
function drawIsometricLine(p1, p2) {
  // http://clintbellanger.net/articles/isometric_math/
  const x1 = (p1.x - p1.y) * (spacing / 2) + width / 2;
  const y1 = (p1.x + p1.y) * (spacing / 2) + height / 2;
  const x2 = (p2.x - p2.y) * (spacing / 2) + width / 2;
  const y2 = (p2.x + p2.y) * (spacing / 2) + height / 2;

  line(x1, y1 / 2, x2, y2 / 2);
}

/**
 * Constructs an initial grid based on the canvas size and specified tile size.
 * The grid, stored as a 2D array, contains objects which store the x and y
 * indexes of each of the points.
 */
function createGrid() {
  for (let y = 0; y < length; y++) {
    const cols = [];
    for (let x = 0; x < length; x++) {
      cols.push({ x, y });
    }
    grid.push(cols);
  }
}

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');
  smooth();

  const grid = createGrid();
}

function draw() {
  clear();
  background(255);

  // Draw base isometric grid
  stroke('#97cff2');
  grid[0].map((p, index) => drawIsometricLine(p, grid[length - 1][index]));
  grid.map((col, index) => drawIsometricLine(col[0], grid[index][length - 1]));
}
