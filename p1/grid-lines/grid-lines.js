/**
 * Brendan Goodenough
 * Project 1 - Grids and Lines
 *
 * Based on the Project 1 "Lines Grid" template by Birgit Bachler
 */

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');

  background(0);
  smooth();
}

function draw() {
  // Distance between grid points
  const dist = 20;

  // Create grid
  for (let x = 0; x <= width; x += dist) {
    for (let y = 0; y <= height; y += dist) {
      // Calculate how far through the page the point is
      const percent = y / height * 100;

      // Set a random colour for the line based on the height
      const color = 255 - (percent / 100 * 255);
      stroke(Math.random() * 255, color, Math.random() * 255);

      // Draw alternating diagonals to create an arrow effect
      if (x / 20 % 2 === 0) {
        line(x, y, x + dist, y + dist);
      } else {
        line(x, y + dist, x + dist, y);
      }
    }
  }
}
