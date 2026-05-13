function setup(){
 createCanvas(800,500,WEBGL);
}
function draw(){
 background(20);
 orbitControl();
 // luces
 pointLight(255, 255, 255, mouseX - width/2, mouseY - height/2,200);
 ambientLight(40);
 directionalLight(255, 255, 255, 0, 0, 1);
 push();
 translate(0,0,-400);
 fill(250,205,0)
 specularMaterial(255);
 sphere(50)
 pop();
 
 // esfera
 push();
 translate(-200,0,0);
 specularMaterial(255);
 shininess(100);
 sphere(80);
 pop();
 // cubo
 push();
 translate(0,0,0);
 fill(0,200,0)
 ambientMaterial(200,50,50);
 box(120);
 pop();
 // toro
 push();
 translate(200,0,0);
 normalMaterial();
 torus(80,20);
 pop();
}

