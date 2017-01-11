/**
 * Brendan Goodenough
 * PBA2b
 *
 * Example 4-12: Pins and Lines
 * from Getting Started with Processing by Casey Reas and Ben Fry
 */

function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');

  smooth();
}

function draw() {
  // Clears the screen
  clear();
  background(255);

  fill(0);

  // Create the grid
  for (let i = 20; i <= width - 20; i += 20) {
    for (let j = 20; j <= height - 20; j += 20) {
      // Calculate where to draw the line
      const lineX = width / 2 + (mouseX - width / 2);
      const lineY = width / 2 + (mouseY - height / 2);

      // Draw the point and line
      ellipse(i, j, 2, 2);
      line(i, j, lineX, lineY);
    }
  }
}
