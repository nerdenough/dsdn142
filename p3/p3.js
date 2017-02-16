/**
 * Brendan Goodenough
 * Project 3 - Eyes
 */

let leftEye;
let rightEye;

function createEye(x, y) {
  return {
    x,
    y,
    theta: 0,
    size: 150
  };
}

function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(1280, 720);
  canvas.parent('canvas');

  leftEye = createEye(width / 2 - 200, height / 2 - 100);
  rightEye = createEye(width / 2 + 200, height / 2 - 100);

  smooth();
}

function calcDist(x1, y1, x2, y2) {
  const xSquared = Math.pow(Math.abs(x1 - x2), 2);
  const ySquared = Math.pow(Math.abs(y1 - y2), 2);
  return Math.sqrt(xSquared + ySquared);
}

function drawPupil(eye) {
  // https://p5js.org/reference/#/p5/atan2
  const theta = atan2(mouseY - eye.y, mouseX - eye.x);
  const dist = calcDist(eye.x, eye.y, mouseX, mouseY);

  rotate(theta);
  translate(dist < 20 ? dist : 20, 0);

  fill(0);
  ellipse(0, 0, 30);
}

function drawEyelid(eye) {
  fill(0);
  ellipse(0, 0, 150);
  fill(255);
  ellipse(0, 0, 150, 80);
}

function drawEye(eye) {
  push();
  translate(eye.x, eye.y);
  drawEyelid(eye);
  drawPupil(eye);
  pop();
}

function checkBounds(eye) {
  const origin = eye.size / 2;
  const x1 = eye.x + eye.size - origin > mouseX;
  const x2 = eye.x - origin < mouseX;
  const y1 = eye.y + eye.size - origin > mouseY;
  const y2 = eye.y - origin < mouseY;

  return x1 && x2 && y1 && y2;
}

function draw() {
  clear();
  background('#fb5d5d');

  drawEye(leftEye);
  drawEye(rightEye);

  if (mouseIsPressed) {
    const leftEyePressed = checkBounds(leftEye);
    const rightEyePressed = checkBounds(rightEye);
  }
}
