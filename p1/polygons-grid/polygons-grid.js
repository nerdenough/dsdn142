/**
 * Brendan Goodenough
 * Project 1 - Grids and Lines
 *
 * Based on the Project 1 "Lines Grid" template by Birgit Bachler
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

/**
 * Draws the grid.
 */
function drawGrid() {
  for (let y = 0; y <= height; y += 50) {
    for (let x = 0; x <= width; x += 50) {
      // Only shade hexagons if multiple of 3 on x or y axis
      if (y / 50 % 3 && x / 50 % 3) {
        // Hexagon outline
        polygon(x, y, 20, 6);

        // Draw inner hexagons
        for (let i = 0; i < 10; i++) {
          polygon(x, y, 20 - 2 * i, 6);
        }
      } else if (x > 0 && y > 0 && x < width && y < height) {
        polygon(x, y, 20, 6);
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
  noFill();
  stroke(0, 0, 0, 100);

  drawGrid();
}
