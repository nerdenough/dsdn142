/**
 * Brendan Goodenough
 * Project 1 - Ellipses Formula
 */

/**
 * Run the formula on the index.
 *
 * @param {Number} i - Number to divide by 2pi
 */
function formula(i) {
  return TWO_PI / i;
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

  stroke(0, 0, 0, 10);
  strokeWeight(1);

  // https://p5js.org/reference/#/p5/translate
  translate(width / 2, height / 2);

  // Draw 1000 ellipses at different angles
  for (let i = 0; i <= 1000; i++) {
    // https://p5js.org/reference/#/p5/rotate
    const theta = formula(i);
    rotate(theta);

    // Displace the ellipse to create discs
    ellipse(20, 20, 500, 100);
  }
}
