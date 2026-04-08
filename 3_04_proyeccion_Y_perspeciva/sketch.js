let modo = true;
let fov = 3.1416/3;

function setup() {
 createCanvas(700, 500, WEBGL);
}
function draw() {
 background(230);
 orbitControl();
 if (modo) {
 perspective(fov, width/height, 0.1, 1000);
 } else {
 ortho();
 }
 // Cubo cerca
 push();
 translate(-150, 0, 0);
 fill(0,200,0)
 box(80);
 pop();
 // Cubo lejos
 push();
 translate(150, 0, -300);
 box(80);
 pop();

 // cajas
 push();
 translate(0, 0, -100);
 box(80);
 pop();
 push();
 translate(0, 0, -200);
 box(80);
 pop();
 push();
 translate(0, 0, -300);
 box(80);
 pop();


}
function keyPressed() {
 if (key === 's' || key === 'S') modo = !modo;
 if (key === 'a' || key === 'A') fov -= 0.1;
 if (key === 'd' || key === 'D') fov += 0.1
}
