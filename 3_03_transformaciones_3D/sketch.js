function setup() {
 createCanvas(600, 400, WEBGL);
}


function draw() {
 background(240);
 orbitControl();
 // cajas
 push();
 translate(-50, 0, 0);
 rotateY(frameCount * 0.01);
 rotateX(frameCount * 0.01);
 scale(1.2)
 box(80);
 pop();
 push();
 translate(100, 0, 0);
 rotateY(frameCount * 0.01);
 rotateX(frameCount * 0.01);
 box(80);
 pop();
 push();
 translate(250, 0, 0);
 rotateY(frameCount * 0.01);
 rotateX(frameCount * 0.01);
 box(80);
 pop();
}


