/**
 * Brendan Goodenough
 * Project 1 - Free Lines
 *
 * Based on the Project 1 "Lines Open" template by Birgit Bachler
 */

const numPoints = 24;
const points = [];
const lines = [];

function shortestPath() {
  const path = [];
  const visited = [];
  let unvisited = points.slice(0);

  points.map(p => {
    let shortest;

    unvisited.map(u => {
      if (p !== u) {
        if (!shortest) {
          shortest = u;
        }

        const lenX = Math.abs(p.x - u.x);
        const lenY = Math.abs(p.y - u.y);

        if (lenX < shortest.x && lenY < shortest.y) {
          shortest = u;
        }
      }
    });

    if (shortest) {
      lines.push({
        x1: p.x,
        y1: p.y,
        x2: shortest.x,
        y2: shortest.y
      });
    }

    const index = unvisited.indexOf(shortest);
    unvisited.splice(index, 1);
  });
}

function createPoints() {
  for (let i = 0; i < numPoints; i++) {
    const x = Math.random() * (width - 100) + 50;
    const y = Math.random() * (height - 100) + 50;

    points.push({ x, y });
  }
}

function setup() {
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');
  smooth();

  createPoints();
  shortestPath();
}

function draw() {
  clear();
  background(255);

  // Draw base isometric grid
  stroke(0);
  strokeWeight(5);
  beginShape();
  points.map(p => curveVertex(p.x, p.y));
  endShape();
}
