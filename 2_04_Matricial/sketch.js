let c=0;
let sx=1
let sy=1

function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
}

function draw() {
  background(240);
  push()
  fill(100,100,100)
  translate(width/2,height/2)
  rotate(frameCount*0.03)
  rect(0,0,120,30)

  fill(250,250,250)
  rotate(frameCount*0.05)
  translate(100,200)
  rect(0,0,120,30)
  pop()

  square(20,20,10)

}

function aplicarM(M,p){
  let x=M[0][0]* p.x + M[0][1] * p.y + [0][2];
  let y=M[1][0]* p.x + M[1][1] * p.y + [1][2];
  return {x,y}
}
