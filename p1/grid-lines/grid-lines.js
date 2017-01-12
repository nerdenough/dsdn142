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
  const dist = 20;

  for (let x = 0; x <= width; x += dist) {
    for (let y = 0; y <= height; y += dist) {
      line(x, y, x + dist, y);
      line(x, y, x, y + dist);

      if (x / 20 % 2 === 0) {
        line(x, y, x + dist, y + dist);
      } else {
        line(x, y + dist, x + dist, y);
      }
    }
  }
}
