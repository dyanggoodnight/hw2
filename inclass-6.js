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
  ellipse(mouseX,mouseY,85,70);
    ellipse(mouseX-17,mouseY-7,15,8);
      ellipse(mouseX+17,mouseY-7,15,8);
      arc(mouseX,mouseY+7,30,20,0,PI,OPEN);
  // prevent default
  return false;
}
