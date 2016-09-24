function setup() {
  createCanvas(500, 500);
  background(180);
}  
  function draw(){
    stroke(0);
    var s=0;
    while(s<470){
      line(s+20,20,s+20,480);
      s=s+10;
    }
  }
