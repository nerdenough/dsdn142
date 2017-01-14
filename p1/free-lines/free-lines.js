/**
 * Brendan Goodenough
 * Project 1 - Free Lines
 *
 * Based on the Project 1 "Lines Open" template by Birgit Bachler
 */

const lines = [];

function calcPoints(x1, y1, x2, y2) {
  const numVertex = Math.random() * (20 - 10) + 10;
  let distX = x2 - x1;
  let distY = y1 - y2;

  const line = [];
  line.push({ x: x1, y: y1 });
  for (let i = 0; i < numVertex; i++) {
    const x = Math.random() * (distX / 4) + (distX / 4);
    const y = Math.random() * (distY / 4) + (distY / 4);
    distX += x;
    distY -= y;

    line.push({ x, y });
  }
  line.push({ x: x2, y: y2 });
  lines.push(line);
}

function drawLines() {
  lines.map(l => {
    beginShape();
    for (let i = 0; i < l.length - 1; i++) {
      const v1 = l[i];
      const v2 = l[i + 1];
      line(v1.x, v1.y, v2.x, v2.y);
    }
    endShape();
  });
}

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');
  smooth();

  for (let i = 0; i < 800; i++) {
    const x1 = Math.random() * 600 - 300;
    calcPoints(x1, height, width, 0);
  }
}

function draw() {
  clear();
  background(255);
  stroke(116, 187, 232, 50);

  drawLines();
}
