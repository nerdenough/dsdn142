/**
 * Brendan Goodenough
 * Project 1 - Ellipses Open
 */

const points = [];

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');
  smooth();

  // Create random points
  for (let i = 0; i < 500; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const r = floor(Math.random() * 100);
    points.push({ x, y, r });
  }
}

function draw() {
  clear();
  background(255);

  stroke(0, 0, 0, 80);

  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    ellipse(p.x, p.y, p.r);

    if (i % 2 === 0) {
      for (let j = p.r; j > 3; j -= 3) {
        ellipse(p.x, p.y, p.r - (p.r - j));
      }
    }
  }
}
