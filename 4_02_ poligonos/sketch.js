let img;
function preload(){
 img =
loadImage('https://imgs.search.brave.com/TVb5FPdREzAZ7IluEvbXGKMigJ5ApAzo2qL2bRQuFvs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUw/MzM4NTY0Ni9lcy9m/b3RvL3JldHJhdG8t/ZGl2ZXJ0aWRvLXkt/ZmVsaXotcGVycm8t/Y2FjaG9ycm8tc2hp/YmEtaW51LWFzb20l/QzMlQTFuZG9zZS1k/ZXRyJUMzJUExcy1k/ZS11bmEtcGFuY2Fy/dGEtYXp1bC5qcGc_/Yj0xJnM9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXY1U2JKNlZiSkUy/dzczZlZxVVRxOXFS/OUZmOGp0VW1BSlg3/X2dOZlJaQ289');
}
function setup(){
 createCanvas(800,500,WEBGL);
}
function draw(){
 background(30);
 orbitControl();
 // Color homogéneo
 push();
 translate(-250, 0, 0);
 fill(200,50,50);
 box(120);
 pop();
 // Degradado simulado
 push();
 
 let r = lerp(255, 0, 0);
 let g = 0;
 let b = lerp(0, 255, 1);
 stroke(r, g, b);
 translate(0, 0, 0);
 normalMaterial();
 sphere(90);
 pop();
 // Textura
 push();
 translate(250, 0, 0);
 texture(img);
 box(120);
 pop();
}


