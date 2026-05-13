
function setup(){
 createCanvas(800,500,WEBGL);
}
function draw(){
 background(20);
 orbitControl();
 ambientLight(40);
 directionalLight(255,255,255, 1,1,-1);
 // Objeto mate
 push();
 translate(-200,0,0);
 ambientMaterial(200,80,80);
 specularMaterial(500)
 shininess(80);
 sphere(80);
 pop();
 // Objeto brillante
 push();
 translate(200,0,0);
 specularMaterial(100);
 shininess(80);
 sphere(80);
 pop();
}



