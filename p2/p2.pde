/**
 * DSDN142 Project 2
 * Brendan Goodenough
 */

PFont font;
int vectorSize;

void setup() {
  size(800, 800);
  background(0);
  noLoop();
  smooth();
  
  font = createFont("AlfaSlabOne-Regular.ttf", 128);
  textFont(font);
  textAlign(CENTER, CENTER);
  
  vectorSize = 50;
}

void drawText() {
  fill(255);
  text("Hello,", width / 2, height / 2 - 64);
  text("World!", width / 2, height / 2 + 64);
}

void draw() {
  int i = 0;
  for (int x = 50; x < width - 50; x += vectorSize) {
    for (int y = 50; y < height - 50; y += vectorSize) {
      if (i % 2 == 0) {
        fill(150);
      } else {
        fill(0);
      }
      
      rect(x, y, vectorSize, vectorSize);
      
      i++;
    }
    i++;
  }
  
  drawText();
}