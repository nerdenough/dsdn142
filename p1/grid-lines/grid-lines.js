/**
 * Brendan Goodenough
 * Project 1 - Grids and Lines
 *
 * Based on the Project 1 "Lines Grid" template by Birgit Bachler
 */

const grid = [];
const tileSize = 64;

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');

  smooth();

  // Create the grid
  for (let y = 0; y <= height / tileSize; y++) {
    const cols = [];
    for (let x = 0; x <= width / tileSize; x++) {
      cols.push({ x, y });
    }
    grid.push(cols);
  }
}

function draw() {
  clear();
  background(255);
  stroke('#97cff2');

  // Draw grid lines from the x-axis
  grid[0].map((point, index) => {
    // http://clintbellanger.net/articles/isometric_math/
    // Calculate location for lines on screen
    const screenX = (point.x - point.y) * (tileSize / 2) + width / 2;
    const screenY = (point.x + point.y) * (tileSize / 2) + height / 2;
    const destX = grid[grid.length - 1][index].x;
    const destY = grid[grid.length - 1][index].y;
    const screenDestX = (destX - destY) * (tileSize / 2) + width / 2;
    const screenDestY = (destX + destY) * (tileSize / 2) + height / 2;

    line(screenX, screenY / 2, screenDestX, screenDestY / 2);
  });

  // Draw grid lines from the y-axis
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

    line(screenX, screenY / 2, screenDestX, screenDestY / 2);
  });
}
