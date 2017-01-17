/**
 * Brendan Goodenough
 * Project 1 - Grids and Lines
 *
 * Based on the Project 1 "Lines Grid" template by Birgit Bachler
 */

/**
 * Draws the grid
 */
function drawGrid() {
  for (let y = 0; y <= height; y += 50) {
    for (let x = 0; x <= width; x += 50) {
      // Draw the angles lines, getting darker with each x iteration
      for (let i = 0; i <= x / 50; i++) {
        line(x, y, x + 50, y + 50);
        line(x, y, x - 50, y + 50);
      }

      // Draw the shading between lines
      for (let i = 0; i < 25; i++) {
        line(x, y, x + i, y + 25);
        line(x, y, x - i, y + 25);
        line(x, y, x + i, y - 25);
        line(x, y, x - i, y - 25);
      }
    }
  }
}

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');
  smooth();

}

function draw() {
  clear();
  background(255);
  stroke(0, 0, 0, 20);

  // Translate start by 25 on the x-axis
  translate(25, 0);
  drawGrid();
}
