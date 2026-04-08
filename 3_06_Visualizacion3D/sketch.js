let angulo = 0;

function setup() {
 createCanvas(700, 500, WEBGL);
}

function draw() {
 background(240);
 orbitControl();

 let camX = 300 * cos(angulo);
 let camZ = 300 * sin(angulo);
 camera(camX, 0, camZ, 0, 0, 0, 0, 1, 0);
 angulo += 0.01;


 //Objeto 1
 push();
 translate(-200, 0, 0);
 box(80);
 pop();
 // Objeto 2
 push();
 translate(0, 0, -200);
 sphere(60);
 pop();
  // Objeto 3
 push();
 translate(200, 0, 100);
 cone(50, 120);
 pop();

}



