/**
 * Brendan Goodenough
 * PBA2b
 *
 * Example 4-12: Pins and Lines
 * from Getting Started with Processing by Casey Reas and Ben Fry
 */

class Point {
  constructor(x, y) {
    // Scatter coordinates
    this.x = x + Math.random() * 10;
    this.y = y + Math.random() * 10;

    // Randomised green tinted colour
    this.color = {
      red: Math.random() * 40,
      green: Math.random() * (200 - 100) + 100,
      blue: Math.random() * 40
    };
  }

  calculateOpacity() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
    let x = Math.abs(this.x - mouseX);
    let y = Math.abs(this.y - mouseY);

    // Ensure value is within limits
    x = x > 255 ? 255 : x;
    y = y > 255 ? 255 : y;

    // Calculate average value and determine opacity
    const value = (255 - (x + y)) / 2;
    const opacity = value > 10 ? value : 10;

    return opacity;
  }

  drawLine() {
    const threshold = 50;

    // Only draw lines to the mouse if they are within a certain threshold
    // and within the boundaries of the canvas.
    if (this.x - mouseX <= threshold && this.x - mouseX >= -threshold
      && this.y - mouseY <= threshold && this.y - mouseY >= -threshold
      && mouseX > 0 && mouseY > 0 && mouseX < width && mouseY < height) {
      // Draw a line the same colour as the point
      stroke(this.color.red, this.color.green, this.color.blue);
      line(this.x, this.y, mouseX, mouseY);
    }
  }

  draw() {
    // Calculate point opacity
    const opacity = this.calculateOpacity();

    // Draw the point
    noStroke();
    fill(this.color.red, this.color.green, this.color.blue, opacity);
    ellipse(this.x, this.y, 4, 4);

    // Draw a line to the mouse
    this.drawLine();
  }
}

const points = [];

function setup() {
  // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
  // Injects the canvas into a specific container
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas');

  smooth();

  // Create the grid
  for (let x = 20; x <= width - 20; x += 20) {
    for (let y = 20; y <= height - 20; y += 20) {
      // Create the points
      const point = new Point(x, y);
      points.push(point);
    }
  }
}

function draw() {
  // Clears the screen
  clear();

  // Draw the points
  points.map(point => point.draw());
}
