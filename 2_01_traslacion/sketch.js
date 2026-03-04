let tx=0;
let x=0;
let y=0;
let keyX=0;
let keyY=0;
let velocidadx=3;
let tec="";
let posiciones=[];
function setup() {
  createCanvas(600, 300);
  rectMode(CENTER);
}

function draw() {
  background(240);
  tx+=velocidadx;
  x= x+(mouseX-x);
  y= y+ (mouseY-y);
  push();
  translate(0,0);
  fill(200,80,80);
  rect(mouseX,mouseY,120,60);
  
  fill(80,120,200);
  circle(mouseX,mouseY,40);
  pop();
  
  if(tec=="w" ){
    keyY=keyY-1;
  }else if(tec=="s" ){
    keyY=keyY+1;
  }else if (tec=="d" ){
    keyX=keyX+1
  }else if(tec=="a" ){
    keyX=keyX-1
  }
  //translate(keyX,keyY);
  translate(mouseX,mouseY);
  fill(230, 85, 77);
  circle(100,100,40);
  fill(0,0,0);
  circle(105,100,10);
  circle(95,100,10);
  fill(170,0,0);
  rect(100,140,40,50);

}

function mousePressed(){
  posiciones.push({x:mouseX,y:mouseY});
}
/*
function keyPressed(){
    tec.push(KeyEvent.getKeyText(e.getKeyCode()));

}
*/
