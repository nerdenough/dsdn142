/**
 * Brendan Goodenough
 * PBA6b
 */

// Random colours
const bg = Math.random() > 0.5 ? '#000000' : '#ffffff';
const fill1 = bg === '#000000' ? '#ffffff' : '#000000';
const fill2 = bg === '#ffffff' ? '#ffffff' : '#000000';
const fill3 = '#cc4623';

// Scale
const s = Math.random() * (1 - 0.8) + 0.8;

// Rect
let x1, y1, t1;

// Ellipse
const dx1 = Math.random() * (200 - 150) + 150;
const dy1 = Math.random() * (150 - 100) + 100;

const dx2 = Math.random() * (80 - 20) + 20;
const dy2 = Math.random() * (150 - 50) + 50;

// Polygon
const radius = Math.floor(Math.random() * (300 - 200) + 200);

// Based on https://p5js.org/examples/form-regular-polygon.html
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
  scale(s);

  // Rect
  translate(x1, y1);
  rotate(t1);
  fill(fill1);
  rect(0, 0, 300, 300);

  scale(s + 0.2);

  // Polygon
  translate(dx2, -dy2);
  fill(fill3);
  polygon(0, 0, radius, 3);

  scale (s + 0.4);

  // Ellipse
  translate(-dx1, dy1);
  fill(fill2);
  ellipse(0, 0, 400, 400);
}
