function setup() {
 createCanvas(800, 500, WEBGL);
}
function draw() {
 background(230);
 orbitControl();



 // Cubo
 push();
 translate(-200, 0, 0);
 rotateY(frameCount * 0.02);
 box(80);
 pop();
 // Esfera
 push();
 rotateZ(frameCount * 0.02);
 translate(0, 0, 0);
 cone(50, 120);
 pop();
 // Cilindro
 push();
 translate(200, 0, 0);
 rotateX(frameCount * 0.02);
 cylinder(40, 120);
 pop();


 let r = 80;
 stroke(0);
 noFill();
 for (let theta = 0; theta < PI; theta += 0.2) {
 beginShape();
 for (let phi = 0; phi < TWO_PI; phi += 0.2) {
 let x = r * sin(theta) * cos(phi)
 let y = r * sin(theta) * sin(phi);
 let z = r * cos(theta);
 vertex(x, y, z);
 }
 endShape();
 }
}


