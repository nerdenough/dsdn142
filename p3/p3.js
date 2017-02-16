/**
 * Brendan Goodenough
 * Project 3 - Eyes
 */

let leftEye;
let rightEye;
let body;

function createEye(x, y) {
  return {
    x,
    y,
    theta: 0,
    size: 150,
    eyelidHeight: 80
  };
}

function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(1280, 720);
  canvas.parent('canvas');

  leftEye = createEye(width / 2 - 200, height / 2 - 100);
  rightEye = createEye(width / 2 + 200, height / 2 - 100);

  body = {
    x: 0,
    y: 0
  };

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
  fill('#8f3131');
  ellipse(0, 0, 150);
  fill(255);
  ellipse(0, 0, 150, eye.eyelidHeight);
}

function drawEye(eye) {
  const scaleX = eye.x < width / 2 ? 1 + (body.x / 100) / 2 : 1 - (body.x / 100) / 2;
  const scaleY = eye.x < width / 2 ? 1 + (body.x / 100) / 5 : 1 - (body.x / 100) / 5;

  push();
  translate(eye.x + body.x, eye.y + body.y);
  scale(scaleX, scaleY);
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

function closeEye(eye) {
  if (eye.eyelidHeight > 0) {
    eye.eyelidHeight = eye.eyelidHeight < 0 ? 0 : eye.eyelidHeight - 20;
  }
}

function openEye(eye) {
  if (eye.eyelidHeight <= 80) {
    eye.eyelidHeight = eye.eyelidHeight > 80 ? 80 : eye.eyelidHeight + 20;
  }
}

function draw() {
  clear();
  background('#fb5d5d');
  noStroke();

  fill('#b34343');
  beginShape();
  vertex(width / 2, 0);
  vertex(width / 2 + body.x * 2, height / 2 + 100);
  vertex(width / 2, height);
  vertex(width, height);
  vertex(width, 0);
  endShape();


  drawEye(leftEye);
  drawEye(rightEye);

  if (mouseIsPressed) {
    const leftEyePressed = checkBounds(leftEye);
    const rightEyePressed = checkBounds(rightEye);

    leftEyePressed && closeEye(leftEye);
    rightEyePressed && closeEye(rightEye);
  } else {
    openEye(leftEye);
    openEye(rightEye);
  }

  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW && body.x > -40) {
      body.x -= 10;
    } else if (keyCode === RIGHT_ARROW && body.x < 40) {
      body.x += 10;
    }
  } else {
    if (body.x > 0) {
      body.x -= 1;
    } else if (body.x < 0) {
      body.x += 1;
    }
  }
}
