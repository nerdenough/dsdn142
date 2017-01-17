/**
 * Brendan Goodenough
 * Project 1 - Free Ellipses
 */

 function drawArcs() {
  // https://p5js.org/reference/#/p5/arc
  // Draw red arcs
  fill(242, 116, 160, 255);
  fill(255);

  fill(136, 106, 55);
  arc(width / 2, height / 2, 400, 400, PI + HALF_PI, 0, PIE);

  fill(0, 0, 255);
  arc(width / 2, height / 2, 350, 350, 0, PI + HALF_PI, PIE);

  // Draw blue arcs
  fill(116, 187, 232, 255);
  fill('#df6b16');

  arc(width / 2, height / 2, 300, 300, PI + HALF_PI, 0, PIE);

  // Draw white arcs
  fill('#cd301b');
  arc(width / 2, height / 2, 200, 200, PI + HALF_PI, 0, PIE);
}

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');
  smooth();
}

function draw() {
  clear();
  background(0);

  stroke(0);
  strokeWeight(5);

  drawArcs();
}
