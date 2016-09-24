function setup(){
  createCanvas(200,200);
  background(255);
  
  var w = 0;
  while(w<18){
  line(w*10,w*10,w*10+10,w*10);
  w=w+1;
  }
}
