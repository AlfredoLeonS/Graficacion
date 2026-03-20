let s = 1;
let x=0;
let y=0;
let c=0;
function setup() {
  createCanvas(600, 300);
  
}

function draw() {
  background(240);
  s = 1 + 0.5 * sin(frameCount * 0.05)
    
  push()
  translate(x,y)
  scale(s)
  rectMode(CENTER)
  rect(0,0,50,30)
  pop();
 
}

function mousePressed(){
  x=mouseX
  y=mouseY
}
