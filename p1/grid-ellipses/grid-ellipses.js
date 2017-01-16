/**
 * Brendan Goodenough
 * Project 1 - Grid Ellipses
 */

function drawGrid() {
  let x = 0;
  let y = 0;
  let w = 0;
  for (let i = 0; y <= height; i++) {
    y += 2 * w;
    w += 1;
    for (let j = 0; j * 50 <= width; j++) {
      const ww = 0.5 * w;
      x = j * 50;

      fill('#6163eb');
      ellipse(x - 0.8 * ww, y - 0.8 * ww, ww, ww);
      ellipse(x + 0.8 * ww, y - 0.8 * ww, ww, ww);

      fill('#494bec');
      ellipse(x, y, w);
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
  background('#2d2eb3');

  noStroke();
  drawGrid();
}
