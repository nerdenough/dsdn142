/**
 * Brendan Goodenough
 * PBA1b
 *
 * Example 2-2: Make Circles
 * from Getting Started with Processing by Casey Reas and Ben Fry
 */

let mouseDown = false;

function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');

  background(255);
  smooth();
}

function draw() {
  if (mouseDown) {
    fill(0);
  } else {
    fill(255);
  }

  ellipse(mouseX, mouseY, 50, 50);
}

// https://p5js.org/reference/#/p5/mousePressed
function mousePressed() {
  mouseDown = true;
}

// https://p5js.org/reference/#/p5/mouseReleased
function mouseReleased() {
  mouseDown = false;
}
