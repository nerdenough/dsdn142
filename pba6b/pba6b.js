/**
 * Brendan Goodenough
 * PBA6b
 */

// Random colours
const bg = Math.random() > 0.5 ? '#000000' : '#ffffff';
const fill1 = bg === '#000000' ? '#ffffff' : '#000000';
const fill2 = bg === '#ffffff' ? '#ffffff' : '#000000';

// Rect
let x1, y1, t1;

function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(800, 800);
  canvas.parent('canvas');
  smooth();

  x1 = Math.random() * (500 - 300) + 300;
  y1 = Math.random() * (500 - 300) + 300;
  t1 = Math.random() * TWO_PI;
}

function draw() {
  clear();
  background(bg);
  noStroke();

  // Rect
  translate(x1, y1);
  rotate(t1);
  fill(fill1);
  rect(0, 0, 200, 200);

  // Ellipse
  translate(300, 100);
  fill(fill2);
  ellipse(0, 0, 300, 300);
}
