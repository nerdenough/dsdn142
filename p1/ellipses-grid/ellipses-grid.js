/**
 * Brendan Goodenough
 * Project 1 - Grid Ellipses
 *
 * Based on 'Grid Lines' by Brendan Goodenough
 */

const lengths = [];

/**
 * Generates random lengths to be used by each point in the grid for variation.
 */
function generateLengths() {
  for (let y = 0; y <= height; y += 50) {
    for (let x = 0; x <= width; x += 50) {
      lengths.push(Math.random() * 100);
    }
  }
}

/**
 * Draws the grid.
 */
function drawGrid() {
  let j = 0;
  for (let y = 0; y <= height; y += 50) {
    for (let x = 0; x <= width; x += 50) {
      const length = lengths[j];

      // Draws ellipses based on the randomly generated lengths
      for (let i = 0; i <= length; i++) {
        ellipse(x, y, 40 - i);
        ellipse(x, y, i + 5);
        ellipse(x, y, i + 10);
      }
      j++;
    }
  }
}

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');
  smooth();

  generateLengths();
}

function draw() {
  clear();
  background(255);
  stroke(0, 0, 0, 20);
  noFill();

  drawGrid();
}
