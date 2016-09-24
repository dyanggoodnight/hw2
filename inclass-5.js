function setup() {
  createCanvas(800,800);
  background(255);
}

function draw(){
  var a=random(255);
  var b=random(255);
  var c=random(255);
  stroke(a,b,c);
  fill(a,b,c);
  var z=random(80);
  var x=random(800);
  var y=random(800);
  ellipseMode(CENTER);
  ellipse(x,y,z,z);
}
