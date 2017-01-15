/**
 * Brendan Goodenough
 * Project 1 - Formula Ellipses
 */

 function drawArcs() {
  // https://p5js.org/reference/#/p5/arc
  // Draw red arcs
  fill(242, 116, 160, 255);
  arc(width / 2, height / 2, 400, 400, PI + HALF_PI, 0, PIE);
  arc(width / 2, height / 2, 450, 450, 0, HALF_PI, PIE);
  arc(width / 2, height / 2, 400, 400, HALF_PI, PI, PIE);
  arc(width / 2, height / 2, 450, 450, PI, PI + HALF_PI, PIE);

  // Draw blue arcs
  fill(116, 187, 232, 255);
  arc(width / 2, height / 2, 300, 300, PI + HALF_PI, 0, PIE);
  arc(width / 2, height / 2, 350, 350, 0, HALF_PI, PIE);
  arc(width / 2, height / 2, 300, 300, HALF_PI, PI, PIE);
  arc(width / 2, height / 2, 350, 350, PI, PI + HALF_PI, PIE);

  // Draw white arcs
  fill(255);
  arc(width / 2, height / 2, 200, 200, PI + HALF_PI, 0, PIE);
  arc(width / 2, height / 2, 250, 250, 0, HALF_PI, PIE);
  arc(width / 2, height / 2, 200, 200, HALF_PI, PI, PIE);
  arc(width / 2, height / 2, 250, 250, PI, PI + HALF_PI, PIE);
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
  strokeWeight(10);

  drawArcs();
}
