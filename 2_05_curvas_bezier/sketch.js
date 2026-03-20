let xmouse=0
let ymouse=0


function setup() {
  createCanvas(600, 400);
  P0=createVector(80,300)
  P1=createVector(180,80)
  P2=createVector(420,80)
  P3=createVector(520,300)
}

function draw() {
  background(240);
  strokeWeight(3)
  stroke(0)
  noFill()
  
 
  bezier(P0.x,P0.y,P1.x,P1.y,P2.x,P2.y,P3.x,P3.y)
  
  let t=(frameCount % 200 )/200;
  let x=bezierPoint(P0.x,P1.x,P2.x,P3.x,t)
  let y=bezierPoint(P0.y,P1.y,P2.y,P3.y,t)
  fill(255,0,0)
  circle(x,y,15)
  /*
  bezier(P0.x,P0.y,P1.x,P1.y,P2.x,P2.y,P3.x,P3.y)
  fill(0)
  noStroke()
  circle(P0.x,P0.y,10)
  circle(P1.x,P1.y,10)
  circle(P2.x,P2.y,10)
  circle(P3.x,P3.y,10)
  */
 circle(80,300,10)
}


function mousePressed(){
  P1=createVector(mouseX,mouseY)
}
