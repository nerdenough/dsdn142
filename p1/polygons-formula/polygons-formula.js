/**
 * Brendan Goodenough
 * Project 1 - Polygons Formula
 */

/**
 * Creates a polygon of n points at a given location.
 * Based on https://p5js.org/examples/form-regular-polygon.html
 *
 * @param {Number} x - Location on the x-axis.
 * @param {Number} y - Location on the y-axis.
 * @param {Number} radius - Polygon radius.
 * @param {Number} npoints - Number of vertices.
 */
function polygon(x, y, radius, npoints) {
  const angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    const sx = x + cos(a) * radius;
    const sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
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
  noFill();

  stroke(0, 0, 0, 40);

  // https://p5js.org/reference/#/p5/translate
  translate(width / 2, height / 2);

  // Draw 100 hexagons at different positions, rotating by 1 each time
  for (let i = 0; i < 100; i++) {
    rotate(1);
    polygon(0, 0, 80 + i, 6);
    polygon(0, 0, 120 + i, 6);
    polygon(0, 0, 160 + i, 6);
  }
}
