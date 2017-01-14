/**
 * Brendan Goodenough
 * Project 1 - Grids and Lines
 *
 * Based on the Project 1 "Lines Grid" template by Birgit Bachler
 */

const grid = [];
const tileSize = 32;

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');

  background(255);
  smooth();

  // Create the grid
  for (let y = 0; y <= height / tileSize; y++) {
    for (let x = 0; x <= width / tileSize; x++) {
      grid.push({ x, y });
    }
  }
}

function draw() {
  stroke('#97cff2');
  grid.map(cell => {
    // http://clintbellanger.net/articles/isometric_math/
    // Make the grid isometric
    const screenX = (cell.x - cell.y) * (tileSize / 2) + width / 2;
    const screenY = (cell.x + cell.y) * (tileSize / 2) + height / 2;

    ellipse(screenX, screenY / 2, 4, 4);
  });
}
