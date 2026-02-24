
function setup() {
  createCanvas(600, 300);

}

function draw() {
  background(255);
  fill(0,128,0);
  rect(0,0,width,height);
  fill(255);
  rect(0,height/3,width,height/3);
  fill(255,0,0);
  rect(0,2*height/3,width,height/3);

  fill(255,200,0);
  circle(width/4,height/4,30);
  fill(0,220,50);
  circle(3*width/4,height/4,30);
  fill(255,120,160);
  circle(width/4,3*height/4,30);
  fill(255);
  noStroke();
  rect(width/2-40,40,80,40);

  colorMode(HSB);
  for(let i=0;i<width;i++){
    stroke(i%360,100,100);
    line(i,0,i,height);
  }
}