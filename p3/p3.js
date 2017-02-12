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

let pendulums = [];

function createEye(x, y) {
  return {
    loc: { x, y },
    rot: 0,
    col: {
      r: 0,
      g: 160,
      b: 255
    }
  };
}

/**
 * Initialises the cradle by creating the five pendulums. Determines the x and
 * y locations of each pendulum and randomises its initial colour.
 *
 * @returns {Array} The newly created pendulums.
 */
function createPendulums() {
  // Iterates over a basic array, creating a new array with the correct x and y
  // values. I'm gonna assume there's a better way to do this without using a
  // for loop, but this does the trick.
  return [1, 2, 3, 4, 5].map((item, i) => ({
    loc: {
      x: 375 + (i * 150) - 30,
      y: height / 2 + 100,
    },
    rot: 0,
    col: {
      r: 0,
      g: 160,
      b: 255
    }
  }));
}

function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(1280, 720);
  canvas.parent('canvas');

  pendulums = createPendulums();

  smooth();
}

function drawIris(pendulum, i = 0) {
  const total = 60;
  if (i >= total) {
    return;
  }

  // https://p5js.org/reference/#/p5/push
  push();
  translate(pendulum.loc.x, pendulum.loc.y);
  rotate(1 / total * i * TWO_PI);
  translate(30, 0);
  ellipse(0, 0, 30, 5);
  pop();

  return drawIris(pendulum, i + 1);
}

function draw() {
  clear();
  background(0);

  pendulums.map((pendulum, i) => {
    fill(255);
    stroke(0);
    line(pendulum.loc.x, 0, pendulum.loc.x, pendulum.loc.y);
    ellipse(pendulum.loc.x, pendulum.loc.y, 150, 150);

    noStroke();
    noFill();

    stroke(pendulum.col.r, pendulum.col.g, pendulum.col.b, 150);
    strokeWeight(1);
    drawIris(pendulum);
    fill(0);
    ellipse(pendulum.loc.x, pendulum.loc.y, 30);
  });
}

function mouseClicked() {
  // TODO: Change pendulum colours
}
