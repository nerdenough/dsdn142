/**
 * Brendan Goodenough
 * Project 1 - Formula Lines
 *
 * Based on 'Sine Wave' by Danial Shiffman
 * from https://p5js.org/examples/math-sine-wave.html
 */

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');
  smooth();
}

function draw() {
  clear();
  background(255);
  noFill();
}
