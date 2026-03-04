
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  line(width/2,0,width/2,height);
  line(0,height/2,width,height/2);
  
  point(0,0);
  point(width,0);
  point(0,height);
  point(width,height);
  point(width/2,height/2);

  circle(0,0,10);
  circle(width,0,10);
  circle(0,height,10);
  circle(width,height,10);

  rect(width/2-40,height/2-20,80,40);

  circle(width/4,height/4,30);
  circle(3*width/4,height/4,30);
  circle(width/4,3*height/4,30);
  circle(3*width/4,3*height/4,30);

  line(0,0,width,height);
}