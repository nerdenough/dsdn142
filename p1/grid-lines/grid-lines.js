/**
 * Brendan Goodenough
 * Project 1 - Grids and Lines
 *
 * Based on the Project 1 "Lines Grid" template by Birgit Bachler
 */

const grid = [];
const lines = [];
const length = 10;
const spacing = 64;

/**
 * Convert normal grid point to isometric.
 */
function calcPoint(p) {
  // http://clintbellanger.net/articles/isometric_math/
  const isoX = (p.x - p.y) * (spacing / 2) + width / 2;
  const isoY = ((p.x + p.y) * (spacing / 2) + height / 2) / 2 + 6;

  return { x: isoX, y: isoY };
}

/**
 * Calculate grid points by converting the coordinates to isometric view and
 * creating lines based on random variations of these points.
 */
function calcGridPoints(dx, dy) {
  for (let i = 0; i < grid.length - 1; i++) {
    for (let j = 0; j < grid[0].length - 1; j++) {
      // Calculate isometric coordinates
      const p1 = calcPoint(grid[i][j]);
      const p2 = calcPoint(grid[i][j + 1]);
      const p3 = calcPoint(grid[i + 1][j]);

      // Generate sketch lines
      for (let k = 0; k < 5; k++) {
        const dx = Math.random() * 5 - 2.5;
        const dy = Math.random() * 5 - 2.5;
        lines.push({ p1, p2, p3, dx, dy });
      }
    }
  }
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
  calcGridPoints();
}

function draw() {
  clear();
  background(255);

  // Iterate through each line in the lines array
  lines.map((l, i) => {
    const p1 = l.p1;
    const p2 = l.p2;
    const p3 = l.p3;
    const dx = l.dx;
    const dy = l.dy;

    // Alternate stroke colour
    i % 2 === 0
      ? stroke(116, 187, 232, 150)
      : stroke(242, 116, 160, 100);

    // Draw horizontal and vertical lines
    line(p1.x + dx, p1.y + dy, p2.x + dx, p2.y + dy);
    line(p1.x + dx, p1.y + dy, p3.x + dx, p3.y + dy);
  });
}
