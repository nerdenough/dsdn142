/**
 * Brendan Goodenough
 * Project 1 - Free Lines
 *
 * Based on the Project 1 "Lines Open" template by Birgit Bachler
 */

const numPoints = 24;
const points = [];

function createPoints() {
  for (let i = 0; i < numPoints; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;

    points.push({ x, y });
  }
}

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');
  smooth();

  createPoints();
}

function draw() {
  clear();
  background(255);

  // Draw base isometric grid
  stroke(0);
  points.map(p => line(p.x, p.y, p.x, p.y));
}
