/**
 * Brendan Goodenough
 * Project 1 - Formula Lines
 *
 * Based on 'Sine Wave' by Danial Shiffman
 * from https://p5js.org/examples/math-sine-wave.html
 */

const xspacing = 8;
const amplitude = 150.0;
const period = 600.0;
let theta = 0.0;
let dx;
let w;
let yvalues;

/**
 * Calculate the y-values for the wave, incrementing it's initial x-value
 * through each call to create a moving sine wave.
 */
function calcWave() {
  theta += 0.02;

  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

/**
 * Draw the wave to the screen, using the spacing to calculate the x-value,
 * and the current index in the y-values for the y-value.
 */
function renderWave() {
  beginShape();
  yvalues.map((val, i) => {
    vertex(i * xspacing, height / 2 + yvalues[i]);
  });
  endShape();
}

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');
  smooth();

  // Calculate spacing and velocity
  w = width + xspacing;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  clear();
  background(255);
  stroke('#88b9f2');
  noFill();

  // Calculate and render the wave
  calcWave();
  renderWave();
}
