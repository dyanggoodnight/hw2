function setup() {
  createCanvas(800,800);
  background(255);
}
var value = 0;
function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
function mouseMoved() {
  ellipse(mouseX,mouseY,80,70);
  // prevent default
  return false;
}
