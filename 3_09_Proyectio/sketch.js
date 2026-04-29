let modo = true;
let fov = 3.1416/3;

function setup() {
 createCanvas(700, 500, WEBGL);
}
function draw(){
 background(240); 
 orbitControl();
 if (modo) {
 perspective(fov, width/height, 0.1, 1000);
 } else {
 ortho();
 }
 // Cubo 
 push();
 translate(-100, 0, 0);
 fill(0,200,0)
 box(80);
 pop();
 
 push();
 translate(150, 0, -100);
 rotateZ(frameCount * 0.02);
 sphere(80);
 pop();

 push();
 translate(-300, 0, 100);
 rotateY(frameCount * 0.02);
 cone(50, 120);
 pop();
 
}
function keyPressed() {
 if (key === 's' || key === 'S') modo = !modo;
 if (key === 'a' || key === 'A') fov -= 0.1;
 if (key === 'd' || key === 'D') fov += 0.1
}
