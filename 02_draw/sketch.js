let x = 0;
let y = 0;
let velocidady=3;
let velocidadx=3;
function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(180);
  frameRate(30);
  circle(x,100,40);
  circle(200,y,40);
  x+=velocidadx;
  if(x>width || x<0){
    velocidadx=-velocidadx;
  }
  y+=velocidady;
  if(y>height || y<0){
    velocidady=-velocidady;
  }
}