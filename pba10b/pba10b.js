/**
 * Brendan Goodenough
 * PBA10b
 *
 * Based on: https://gist.github.com/antiboredom/129fd2311dec0046603e
 */

 const rocket = [];
 let dy = 0;
 let velY = 0.2;
 const frames = 100;
 let landing = false;

 function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(300, 300);
  canvas.parent('canvas');

  rocket.push(loadImage('rocket1.png'));
  rocket.push(loadImage('rocket2.png'));
  rocket.push(loadImage('rocket3.png'));
  rocket.push(loadImage('rocket4.png'));

  // https://p5js.org/reference/#/p5/noSmooth
  noSmooth();
}

function draw() {
  background(255);

  if (dy <= -100) {
    landing = true;
  }

  if (!landing && dy < -50) {
    dy -= velY;
    velY -= 0.1;
  } else if (!landing && dy > -100) {
    dy -= velY;
    velY += 0.1;
  } else if (landing && dy < -50) {
    dy += velY;
    velY += 0.1;
  } else {
    dy += velY;
    velY -= 0.1;

    if (dy >= 0) {
      dy = 0;
      velY = 0;
      landing = false;
    }
  }

  translate(width / 2, height / 2 - 18 + dy);
  scale(4);

  if (dy < -50) {
    image(rocket[3], -12, 0);
  } else if (dy < -20) {
    image(rocket[2], -12, 0);
  } else if (dy < 0) {
    image(rocket[1], -12, 0);
  } else {
    image(rocket[0], -12, 0);
  }
}
