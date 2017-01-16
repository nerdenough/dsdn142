/**
 * Brendan Goodenough
 * Project 1 - Formula Ellipses
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
  stroke(0, 0, 0, 40);
  strokeWeight(1);
  noFill();

  translate(width / 2, height / 2);

  let w = 500;
  for (let i = 0; i <= 100; i++) {
    const theta = formula(i);

    if (theta > HALF_PI) {
    }

    rotate(theta);
    ellipse(20, 20, w, 100);
  }
}
