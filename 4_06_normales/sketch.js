function setup(){
 createCanvas(800,500,WEBGL);
}
function draw(){
 background(20);
 orbitControl();
 ambientLight(40);
 pointLight(255, 255, 255, mouseX - width/2, mouseY - height/2,200);
 // esfera
 push();
 translate(-200,0,0);
 fill(200,0,0)
 sphere(80);
 pop();
 // cubo
 push();
 translate(200,0,0);
 box(120);
pop();
}