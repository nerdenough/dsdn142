/**
 * Brendan Goodenough
 * PBA4b Chaos
 *
 * Font: Roboto Mono
 * https://fonts.google.com/specimen/Roboto+Mono
 */

let delta = 0;

function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');

  smooth();
  background('#cc4623');

  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  textFont('Roboto Mono');
  textSize(64);
  textStyle(BOLD);

  // Random number of words
  const n = Math.random() * (20 - 10) + 10;

  // Draw words
  for (let i = 0; i < n; i++) {
    // Random coordinates
    const x = Math.random() * (width - 300) + 50;
    const y = Math.random() * (height - 50) + 50;

    // Alternating odd/even text
    if (i % 2 === 0) {
      fill(255);
      text('CHAOS', x, y);
    } else {
      fill(0);
      text('ORDER', x, y);
    }
  }
}
