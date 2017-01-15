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
const waveCount = 20;
let theta = 0.0;
let w;
let length;

/**
 * Calculate the y-values for the wave, incrementing it's initial x-value
 * through each call to create a moving sine wave.
 */
function calcWaves() {
  // Calculate a random amplitude
  const amplitude = Math.random() * (170.0 - 150.0) + 150.0;
  const yvalues = [];

  // Displace each repeating graph on the x-axis slightly
  theta += 0.01;
  let x = theta;

  // Calculate the y-value for each point
  for (let i = 0; i < length; i++) {
    // https://p5js.org/reference/#/p5/sin
    yvalues.push(sin(x) * amplitude);
    x += dx;
  }
  waves.push(yvalues);
}

/**
 * Draw the wave to the screen, using the spacing to calculate the x-value,
 * and the current index in the y-values for the y-value.
 *
 * @param {Number} yOffset - Offset on the y-axis to displace the wave.
 */
function renderWaves(yOffset) {
  // Iterate over the waves to get the y-values
  waves.map((yvalues, i) => {
    i % 2 === 0
      ? stroke(116, 187, 232, 200)
      : stroke(242, 116, 160, 100);

    beginShape();
    // Iterate over the y-values to create a vertex at each point
    yvalues.map((val, j) => vertex(j * xspacing, height / 2 + val + yOffset));
    endShape();
  });
}

/**
 * Draw lines connecting the upper graphs and the lower graphs together.
 *
 * @param {Number} off1 - Offset of the upper graphs.
 * @param {Number} off2 - Offset of the lower graphs.
 */
function renderConnectingLines(off1, off2) {
  for (let i = 0; i < waves[0].length; i += 4) {
    for (let j = 0; j < 5; j++) {
      j % 2 === 0
        ? stroke(242, 116, 160, 60)
        : stroke(116, 187, 232, 160);

      line(i * xspacing, height / 2 + waves[0][i] + off1, (i - j) * xspacing, height / 2 + waves[0][i - j] + off2);
      line(i * xspacing, height / 2 + waves[0][i] + off1, (i + j) * xspacing, height / 2 + waves[0][i + j] + off2);
    }
  }
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

  // Create multiple waves to create the sketch effect
  for (let i = 0; i < waveCount; i++) {
    calcWaves();
  }
}

function draw() {
  clear();
  background(255);
  noFill();

  // Render the waves with their connecting lines
  renderConnectingLines(100, -100);
  renderWaves(-100);
  renderWaves(100);
}
