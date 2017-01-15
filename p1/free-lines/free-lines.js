/**
 * Brendan Goodenough
 * Project 1 - Free Lines
 *
 * Based on the Project 1 "Lines Open" template by Birgit Bachler
 */

const lines = [];

/**
 * Creates the lines by alternating the start points and generating random
 * endpoints.
 *
 * @param {Number} numLines - Number of lines to create
 */
function createLines(numLines) {
  for (let i = 0; i < 5000; i++) {
    // Generate random start and end points
    const y1 = Math.random() * height;
    const yOffset = Math.random() * 40;
    const x2 = Math.random() * (width / 2);

    // Alternative the side the line starts from
    i % 2 === 0
      ? lines.push({ x1: 0, y1, x2, y2: y1 + yOffset })
      : lines.push({ x1: width, y1, x2: width - x2, y2: y1 + yOffset });
  }
}

/**
 * Draws the lines to the screen by iterating over the lines array.
 */
function drawLines() {
  lines.map((l, i) => {
    i % 2 === 0
      ? stroke(116, 187, 232, 50)
      : stroke(242, 116, 160, 50);

    line(l.x1, l.y1, l.x2, l.y2);
  });
}

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');
  smooth();
  createLines(5000);
}

function draw() {
  clear();
  background(255);
  stroke(116, 187, 232, 50);
  drawLines();
}
