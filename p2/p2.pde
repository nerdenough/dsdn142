int vectorSize;

void setup() {
  size(800, 800);
  background(0);
  noLoop();
  smooth();
  
  vectorSize = 50;
}

void draw() {
  int i = 0;
  for (int x = 50; x < width - 50; x += vectorSize) {
    for (int y = 50; y < height - 50; y += vectorSize) {
      if (i % 2 == 0) {
        fill(255);
      } else {
        fill(0);
      }
      
      rect(x, y, vectorSize, vectorSize);
      
      i++;
    }
    i++;
  }
}