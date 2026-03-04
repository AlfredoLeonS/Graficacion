let x = 0;
let y = 0;
let velocidady=3;
let velocidadx=2;
function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(25, 143, 212);
  fill(250,178,0)
  rect(0,200,900,400);

  fill(255,255,0);
  circle(x,50,40);//sol
  x+=velocidadx;
  if(x>width ){
    x=-10;
  }

  //piramide
  fill(255,110,0)
  triangle(200,200,300,120,400,200);

  //cactus
  fill(0,155,0)
  rect(100,300,25,70);
  rect(200,250,20,60);
  rect(340,280,15,50);
  rect(500,230,20,50);

  //flores
  fill(255,0,142)
  circle(113,300,25);
  circle(210,250,20);
  circle(347,280,17);
  circle(510,230,20);
  
}

function mousePressed(){
  background(0,0,0);
  

}

