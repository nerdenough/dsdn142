/**
 * Brendan Goodenough
 * Project 1 - Grids and Lines
 *
 * Based on the Project 1 "Lines Grid" template by Birgit Bachler
 */

const lines = [];

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');

  background(255);
  smooth();
}

function draw() {
  for (let x = 0; x <= width; x+= 14) {
    for (let y = 0; y <= height; y += 14) {
      line(x, y, x + 10, y + 10);
      line(x, y + 10, x + 10, y);
    }
  }
}
