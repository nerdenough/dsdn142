/**
 * Brendan Goodenough
 * PBA1b
 *
 * Example 2-2: Make Circles
 * from Getting Started with Processing by Casey Reas and Ben Fry
 */

let mouseDown = false;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Set initial rgb to be random values
const color = {
  red: Math.random() * 255,
  green: Math.random() * 255,
  blue: Math.random() * 255
};

function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');

  background(255);
  smooth();
}

function rainbow(color) {
  color.red++;
  color.blue++;
  color.green++;

  if (color.red >= 255) {
    color.red = 0;
  }

  if (color.green >= 255) {
    color.green = 0;
  }

  if (color.blue >= 255) {
    color.blue = 0;
  }
}

function draw() {
  rainbow(color);
  noStroke();

  if (mouseDown) {
    fill(color.red, color.green, color.blue);
  } else {
    fill(255);
  }

  ellipse(mouseX, mouseY, 100, 100);
}

// https://p5js.org/reference/#/p5/mousePressed
function mousePressed() {
  mouseDown = true;
}

// https://p5js.org/reference/#/p5/mouseReleased
function mouseReleased() {
  mouseDown = false;
}
