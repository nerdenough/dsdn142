/**
 * Brendan Goodenough
 * 3-wheel
 *
 * Font: Lora (Bold)
 */

let delta = 0;

function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');

  smooth();
  background(255);

  // Initialise font
  textFont('Lora');
  textSize(320);
  textStyle(BOLD);
  fill(0, 0, 0, 40);
}

function draw() {
  clear();
  background(255);

  // Increase offset
  delta += 0.0001;

  // Centre text
  translate(width / 2, height / 2);

  // Create spiral
  for (let i = 0; i < TWO_PI; i += HALF_PI / 8) {
    rotate(i + delta);
    text('3', 0, 0);
  }
}
