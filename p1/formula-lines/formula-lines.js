/**
 * Brendan Goodenough
 * Project 1 - Formula Lines
 *
 * Based on 'Sine Wave' by Danial Shiffman
 * from https://p5js.org/examples/math-sine-wave.html
 */

const xspacing = 8;
const period = 600.0;
const waves = [];
const waveCount = 4;
let theta = 0.0;
let w;
let length;

/**
 * Calculate the y-values for the wave, incrementing it's initial x-value
 * through each call to create a moving sine wave.
 */
function calcWaves() {
  const amplitude = Math.random() * (160.0 - 150.0) + 150.0;
  const yvalues = [];

  theta += 0.01;
  let x = theta;

  for (let i = 0; i < length; i++) {
    yvalues.push(sin(x) * amplitude);
    x += dx;
  }
  waves.push(yvalues);
}

/**
 * Draw the wave to the screen, using the spacing to calculate the x-value,
 * and the current index in the y-values for the y-value.
 */
function renderWaves(yOffset) {
  waves.map(yvalues => {
    beginShape();
    yvalues.map((val, i) => {
      vertex(i * xspacing, height / 2 + val + yOffset);
    });
    endShape();
  });
}

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');
  smooth();

  // Calculate spacing and velocity
  w = width + xspacing;
  dx = (TWO_PI / period) * xspacing;
  length = floor(w / xspacing);

  for (let i = 0; i < waveCount; i++) {
    calcWaves();
  }
}

function draw() {
  clear();
  background(255);
  stroke('#88b9f2');
  noFill();

  // Calculate and render the wave
  renderWaves(-20);
  renderWaves(20);
}
