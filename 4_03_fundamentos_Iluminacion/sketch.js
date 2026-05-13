function setup(){
 createCanvas(800,500,WEBGL);
}
function draw(){
 background(25);
 orbitControl();
 // luces
 ambientLight(50);
 directionalLight(255,255,255, 1,1,-1);
 pointLight(255, 255, 255, mouseX - width/2, mouseY - height/2,200);
 // esfera
 push();
 translate(0,0,0);
 fill(200,0,0)
 sphere(90);
 pop();
 // cubo
 push();
 translate(-200,0,0);
 box(120);
pop();
 // toro
 push();
 translate(200,0,0);
 torus(80,20);
 pop();
}


