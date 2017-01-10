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
const color = [
  {
    value: Math.random() * 255,
    increment: true
  },
  {
    value: Math.random() * 255,
    increment: true
  },
  {
    value: Math.random() * 255,
    increment: true
  }
];

function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');

  background(255);
  smooth();
}

function rainbow(color) {
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  // Iterate over the array of colour values and increment or decrement values
  color.map(col => {
    // Determine whether the value should increase or decrease
    col.increment
      ? col.value++
      : col.value--;

    if (col.increment && col.value >= 255) {
      // Colour has reached maximum value, must decrement
      col.increment = false;
    } else if (!col.increment && col.value <= 0) {
      // Colour has reached minimal value, must increment
      col.increment = true;
    }
  });
}

function draw() {
  // Randomise the colour
  rainbow(color);
  noStroke();

  if (mouseDown) {
    // Fill with randomised rgb values and draw ellipse at mouse position
    fill(color[0].value, color[1].value, color[2].value);
    ellipse(mouseX, mouseY, 100, 100);
  }
}

// https://p5js.org/reference/#/p5/mousePressed
function mousePressed() {
  mouseDown = true;

  // Prevent default
  return false;
}

// https://p5js.org/reference/#/p5/mouseReleased
function mouseReleased() {
  mouseDown = false;

  // Prevent default
  return false;
}
