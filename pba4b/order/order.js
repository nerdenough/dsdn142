/**
 * Brendan Goodenough
 * PBA4b Order
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
  background(255);

  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  textFont('Roboto Mono');
  textSize(64);
  textStyle(BOLD);

  // Write words in a grid
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 8; j++) {
      // Alternating odd/even text
      if ((i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0)) {
        fill('#cc4623');
        text('CHAOS', 80 + i * 240, 110 + j * 60);
      } else {
        fill(0);
        text('ORDER', 80 + i * 240, 110 + j * 60);
      }

    }
  }
}
