/**
 * Brendan Goodenough
 * Project 1 - Polygons Open
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

  for (let i = 0; i < 100; i++) {
    rotate(0);
    polygon(i, i, 200, 3);
    rotate(HALF_PI);
    polygon(i, i, 200, 3);
    rotate(PI);
    polygon(i, i, 200, 3);
    rotate(HALF_PI + PI);
    polygon(i, i, 200, 3);
  }
}
