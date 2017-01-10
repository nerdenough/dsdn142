/**
 * Brendan Goodenough
 * PBA1b
 * I like my JS version better...
 *
 * Example 2-2: Make Circles
 * from Getting Started with Processing by Casey Reas and Ben Fry
 */

int[] rgb = new int[3];
boolean[] increment = new boolean[3];

void setup() {
  // https://processing.org/reference/random_.html
  // Generate random rgb values
  rgb[0] = (int) random(0, 255);
  rgb[1] = (int) random(0, 255);
  rgb[2] = (int) random(0, 255);

  // Set initial increment values
  increment[0] = true;
  increment[1] = true;
  increment[2] = true;

  // Basic setup
  size(600, 600);
  background(255);
  smooth();
}

/**
 * Iterate over the array of colour values and increment or decrement rgb values. If
 * a value has reached its maximum or minimum, it will start increasing or decreasing
 * in the opposite direction.
 */
void rainbow() {
  // Loop through each rgb value
  for (int i = 0; i < rgb.length; i++) {
    // Check whether value should increment or decrement
    if (increment[i]) {
      rgb[i]++;
    } else {
      rgb[i]--;
    }

    // Check whether value has reached its maximum or minimum
    if (increment[i] && rgb[0] >= 255) {
      increment[i] = false;
    } else if (!increment[i] && rgb[0] <= 0) {
      increment[i] = true;
    }
  }
}

void draw() {
  // Randomise the colour
  rainbow();
  noStroke();

  if (mousePressed) {
    // Fill with randomised rgb values and draw ellipse at mouse position
    fill(rgb[0], rgb[1], rgb[2]);
    ellipse(mouseX, mouseY, 100, 100);
  }
}
