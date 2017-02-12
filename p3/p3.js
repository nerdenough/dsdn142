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

/**
 * Initialises the cradle by creating the five pendulums.
 *
 * @returns {Array} The newly created pendulums.
 */
function createPendulums() {
  // Iterates over a basic array, creating a new array with the correct x and y
  // values. I'm gonna assume there's a better way to do this without using a
  // for loop, but this does the trick.
  return [1, 2, 3, 4, 5].map((item, i) => ({
    x: 375 + (i * 150) - 30,
    y: height - 200
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

function draw() {
  clear();
  background(255);
  strokeWeight(5);

  pendulums.map((pendulum) => {
    line(pendulum.x, 0, pendulum.x, pendulum.y);
    ellipse(pendulum.x, pendulum.y, 150, 150);
  });
}

function mouseClicked() {
  // TODO: Change pendulum colours
}
