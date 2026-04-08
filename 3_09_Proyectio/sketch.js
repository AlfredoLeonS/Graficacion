function setup() {
 createCanvas(600, 400);
}
function draw(){
 background(240); 
 let O = map(mouseX,0,width,0,TWO_PI)
 s = (distancia)
 push()
 translate(width/2, height/2);
 scale(s);
 rotate(O);
 textAlign(CENTER,CENTER);
 textSize(40);
 text("Rotado", 0, 0);
  pop()
 
}

