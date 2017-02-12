/**
 * Brendan Goodenough
 * Project 3 - The Cats in the Cradle
 *
 * I am attempting to complete this project using primarily Functional
 * Programming, hence some syntax might seem a bit inefficient for
 * creating basic structures.
 *
 * Ironically, Functional Programming revolves around the absence of side
 * effects, yet a Newton's Cradle is a literal visualisation of side effects.
 * In a weird way that seems rather fitting.
 */

let leftEye, rightEye;

function createEye(x, y) {
  return {
    loc: { x, y },
    rot: 0
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

function drawPupil(eye) {
  const x = mouseX > eye.loc.x ? 10 : -10;
  const y = mouseY > eye.loc.y ? 10 : -10;
  fill(0);
  ellipse(x, y, 30, 25);
}

function drawEye(eye) {
  push();
  translate(eye.loc.x, eye.loc.y);
  fill(0);
  ellipse(0, 0, 150);
  fill(255);
  ellipse(0, 0, 150, 80);
  drawPupil(eye);
  pop();
}

function draw() {
  clear();
  background('#fb5d5d');
  drawEye(leftEye);
  drawEye(rightEye);
}

function mouseClicked() {
  // TODO: Change pendulum colours
}
