import java.util.List;
import java.util.Random;
import java.util.Collections;

// Shapes
PShape keyboard, backplate, keys, keys2;

// Colour palette
List<Integer> colours = new ArrayList<Integer>();

void setup() {
  size(800, 800);
  noLoop();
  smooth();

  // Load shapes
  keyboard = loadShape("keyboard.svg");
  backplate = keyboard.getChild("backplate");
  keys = keyboard.getChild("keys");
  keys2 = keyboard.getChild("keys2");

  // Add colours
  colours.add(#ffffff);
  colours.add(#808080);
  colours.add(#101010);
  colours.add(#cc4623);

  // Shuffle colours
  // https://stackoverflow.com/questions/4228975/how-to-randomize-arraylist
  long seed = System.nanoTime();
  Collections.shuffle(colours, new Random(seed));
}

void draw() {
  background(colours.get(0));

  // Scale to fit the canvas and centre
  scale(0.5);
  translate(50, 500);

  // Disable styles
  backplate.disableStyle();
  keys.disableStyle();
  keys2.disableStyle();

  // Draw backplate
  fill(colours.get(1));
  shape(backplate, 0, 0);

  // Draw main keys
  fill(colours.get(2));
  shape(keys, 0, 0);

  // Draw secondary keys
  fill(colours.get(3));
  shape(keys2, 0, 0);
}
