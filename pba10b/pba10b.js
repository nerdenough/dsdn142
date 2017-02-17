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

 let capture;
 let recording = false;
 let c;
 let gif;

 function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  c = createCanvas(300, 300);
  c.parent('canvas');
  frameRate(60);

  capture = createCapture(VIDEO);
  capture.size(300, 300);
  capture.hide();
  setupGif();

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

  // Determine rocket offset
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

  // Move rocket
  translate(width / 2, height / 2 - 18 + dy);
  scale(4);

  // Draw different frames depending on rocket position
  if (dy < -50) {
    image(rocket[3], -12, 0);
  } else if (dy < -20) {
    image(rocket[2], -12, 0);
  } else if (dy < 0) {
    image(rocket[1], -12, 0);
  } else {
    image(rocket[0], -12, 0);
  }

  image(capture, 0, 0, 300, 300);

  if (recording && frameCount % 3 === 0) {
    gif.addFrame(c.elt, { delay: 1, copy: true });
  }
}

function mousePressed() {
  recording = !recording;
  if (!recording) {
    gif.render();
  }
}

function setupGif() {
  gif = new GIF({
    workers: 2,
    quality: 40
  });

  gif.on('finished', function(blob) {
    window.open(URL.createObjectURL(blob));
    setupGif();
  });
}
