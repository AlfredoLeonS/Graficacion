let pts = [];

function setup(){
 createCanvas(600,400);
 
  P0=createVector(50,200)
  P1=createVector(150,100)
  P2=createVector(300,300)
  P3=createVector(450,150)
  P4=createVector(550,250)

  pts = [P0, P1, P2, P3, P4];

  rectMode(CENTER);
}

function draw(){
 background(245);
 pts = [P0, P1, P2, P3, P4];
 noFill();
 strokeWeight(3);
 for(let i=0; i<pts.length-3; i++){
 curve(
 pts[i].x,pts[i].y,
 pts[i+1].x, pts[i+1].y,
 pts[i+2].x,pts[i+2].y,
 pts[i+3].x,pts[i+3].y
 );
 }
 
 /*
 fill(100,0,0)
 bezier(P0.x,P0.y,P1.x,P1.y,P2.x,P2.y,P3.x,P3.y,P4.x,P4.y)
 */
  let t=(frameCount % 200 )/200;
  for(let i=0; i<pts.length-3; i++){
  let x = curvePoint(pts[i].x, pts[i+1].x, pts[i+2].x, pts[i+3].x, t);
  let y = curvePoint(pts[i].y, pts[i+1].y, pts[i+2].y, pts[i+3].y, t);
  push();
  translate(0,0);
  fill(200,80,80);
  rect(x,y,40,20);
  fill(80,120,200);
  circle(x,y,10);
  pop();
  }
  
}

function mousePressed(){
  P1=createVector(mouseX,mouseY)
}