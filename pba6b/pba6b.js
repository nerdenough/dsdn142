/**
 * Brendan Goodenough
 * PBA6b
 */

function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(800, 800);
  canvas.parent('canvas');

  smooth();
  background(255);
}
