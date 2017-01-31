/**
 * DSDN142 Project 2
 * Brendan Goodenough
 */
 
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

List<Integer> colours;
PFont font;
PShape main, body, armL, armR;
int vectorSize;

long seed = System.nanoTime();

void createPalette() {
  colours = new ArrayList<Integer>();
  
  colours.add(#cc4623);
  colours.add(255);
  colours.add(0);
  
  // https://stackoverflow.com/questions/4228975/how-to-randomize-arraylist
  Collections.shuffle(colours, new Random(seed));
}

void setup() {
  size(800, 800);
  background(0);
  noLoop();
  noStroke();
  smooth();
    
  // Font
  font = createFont("AlfaSlabOne-Regular.ttf", 128);
  textFont(font);
  textAlign(CENTER, CENTER);
  
  // Vector
  main = loadShape("vector.svg");
  body = main.getChild("body");
  armL = main.getChild("arm-left");
  armR = main.getChild("arm-right");
  
  createPalette();
  
  vectorSize = 50;
}

void drawText() {
  fill(colours.get(2));
  text("Hello,", width / 2, height / 2 - 64);
  text("World!", width / 2, height / 2 + 64);
}

void drawBoard() {
  int i = 0;
  for (int x = 50; x < width - 50; x += vectorSize) {
    for (int y = 50; y < height - 50; y += vectorSize) {
      if (i % 2 == 0) {
        fill(colours.get(0));
      } else {
        fill(colours.get(1));
      }
      
      rect(x, y, vectorSize, vectorSize);
      
      i++;
    }
    i++;
  }
}

void draw() {
  drawBoard();
  drawText();
}