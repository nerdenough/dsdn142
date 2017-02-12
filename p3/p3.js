/**
 * Brendan Goodenough
 * Project 3
 */

let balls = [];

function createBalls() {
  const balls = [];

  balls.push({
    x: width / 2,
    y: height - 200
  });

  balls.push({
    x: width / 2 - 150,
    y: height - 200
  });

  balls.push({
    x: width / 2 - 300,
    y: height - 200
  });

  balls.push({
    x: width / 2 + 150,
    y: height - 200
  });

  balls.push({
    x: width / 2 + 300,
    y: height - 200
  });

  return balls;
}

function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(1280, 720);
  canvas.parent('canvas');

  balls = createBalls();

  smooth();
}

function draw() {
  clear();
  background(255);

  balls.map(ball => ellipse(ball.x, ball.y, 100, 100));
}

function mouseClicked() {
  // TODO: Change ball colours
}
