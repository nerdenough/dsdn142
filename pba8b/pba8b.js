/**
 * Brendan Goodenough
 * PBA8b
 */

let size = 1;
let theta = 0;
let dx = 0;
let dy = 0;
let ds = 0.05;

 function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');

  smooth();
}

function draw() {
  clear();
  background(255);
  noStroke();

  // Move depending on mouse position on the canvas
  // https://p5js.org/reference/#/p5/mouseIsPressed
  if (mouseIsPressed) {
    if (mouseX > width / 2) {
      dx += 5;
    } else {
      dx -= 5;
    }

    if (mouseY > height / 2) {
      dy += 5;
    } else {
      dy -= 5;
    }
  }

  fill('#1edeca');
  translate(width / 2 + dx, height / 2 + dy);
  scale(size);
  rotate(theta);
  rect(-100, -100, 200, 200);
}

// Scale the image on scroll
// https://p5js.org/reference/#/p5/mouseWheel
function mouseWheel(event) {
  if (event.delta > 0) {
    size -= ds;
  } else {
    size += ds;
  }
}

// Rotate based on mouse position vs previous mouse position
// https://p5js.org/reference/#/p5/mouseMoved
function mouseMoved() {
  if (pmouseX > mouseX) {
    theta -= ds;
  } else {
    theta += ds;
  }
}
