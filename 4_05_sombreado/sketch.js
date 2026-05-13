function setup(){
 createCanvas(800,500,WEBGL);
}
function draw(){
 background(30);
 orbitControl();
 ambientLight(50);
 directionalLight(255,255,255, 1,1,-1);
 // cubo
 push();
 translate(-250,0,0);
 fill(200,80,80);
 specularMaterial(400);
 box(120);
 pop();
 
 // esfera
 push();
 translate(250,0,0);
 fill(200,80,80);
 specularMaterial(400);
 shininess(100);
 sphere(90);
 pop();
}

