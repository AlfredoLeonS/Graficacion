let tipo=true;
let x=0;
let y=0;
let z=0;
function setup(){
 createCanvas(800,500,WEBGL);
}
function draw(){
 background(20);
 orbitControl();
 // luces
 ambientLight(40);
 pointLight(255, 255, 255, mouseX - width/2, mouseY - height/2,200);
 directionalLight(x, y, z, 0, 0, 1);
 // esfera
 push();
 translate(-200,0,0);
 if (tipo){ //metalico
    specularMaterial(255, 255, 255);
    shininess(200); 
    ambientMaterial(100, 100, 150);
 }else{     //plastio
    specularMaterial(100, 100, 100);
    shininess(20); 
    ambientMaterial(150, 100, 100);
 }
 sphere(80);
 pop();
 // cubo 1
 push();
 translate(0,0,0);
 if (tipo){
    specularMaterial(255);
    shininess(100);
    fill(0,0,200)
 }else{
    specularMaterial(500);
    shininess(200);
    fill(200,0,0)
 }
 ambientMaterial(200,50,50);
 box(120);
 pop();
 // cono
 push();
 translate(200,0,0);
 ambientMaterial(200, 80, 80);
 cone(80);
 pop();
}


function mousePressed() {
  if (mouseButton === RIGHT) { 
    tipo =!tipo
  } 
}

function keyPressed() {
 if (key === 's' || key === 'S') {    //r
   x= x+10;
 }
 if(key === 'x' || key === 'X'){
   x= x-10;
 }
 if (key === 'a' || key === 'A'){     //g
   y= y+10;
 }
 if(key === 'z' || key === 'Z'){
   y= y-10;
 }
 if (key === 'd' || key === 'D') {     //b
   z=z+10;
 }
 if(key === 'c' || key === 'c'){
   z=z-10;
 }
}