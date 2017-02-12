/**
 * Brendan Goodenough
 * Project 3
 */

function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(1280, 720);
  canvas.parent('canvas');

  smooth();
}

function draw() {
  clear();
  background(255);
}
