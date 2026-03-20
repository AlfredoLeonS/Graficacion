let s = 1;
let x=0;
let y=0;
let c=0;
let sx=1
let sy=1
function setup() {
  createCanvas(600, 300);
  rectMode(CENTER);
}

function draw() {
  background(240);
  let ang = frameCount * 0.03
  let O = map(mouseX,0,width,0,TWO_PI)

  sx=1 + 0.5 * sin(frameCount*0.05)
  sx=1 + 0.5 * sin(frameCount*0.05)
  translate(width/2,height/2)  
  push()
  scale(sx,sy)
  rotate(O)
  
  rect(x,y,120,30)
  pop()
  
}

function mousePressed(){
  x=mouseX
  y=mouseY
}
