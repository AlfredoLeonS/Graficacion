let x = 0;
let velocidadx=2;
let fondo = false;
let estrellas = [];

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  if (fondo) {
    background(0, 0, 0);
    textSize(40);
    text("Noche", 10, 30); 
  } else {
    background(25, 143, 212); 
    textSize(40);
    text("Dia", 10, 30);
  }
  fill(250,178,0)
  rect(0,200,900,400);

  if (fondo) {
    fill(200, 200, 200); 
  } else {
    fill(255, 255, 0); 
  }
  circle(x,50,40);//sol

  if (fondo) {
    for (let i = 0; i < estrellas.length; i++) {
      dibujarEstrella(estrellas[i].x, estrellas[i].y);
    }
  }

  x+=velocidadx;
  if(x>width ){
    x=-10;
  }

  //piramide
  fill(255,110,0)
  triangle(200,200,300,120,400,200);

  //cactus
  fill(0,155,0)
  rect(100,300,25,70);
  rect(200,250,20,60);
  rect(340,280,15,50);
  rect(500,230,20,50);

  //flores 
  fill(255, 0, 142);
  let desplazamientoX = (mouseX - width/2) * 0.05;  
  circle(113+desplazamientoX,300,25);
  circle(210+desplazamientoX,250,20);
  circle(347+desplazamientoX,280,17);
  circle(510+desplazamientoX,230,20);


  //arboles
  stroke(101, 67, 33); 
  strokeWeight(2);
  let ang = map(mouseX, 0, width, 0, PI/2);
  push();
  translate(80, 200); 
  ramaInteractiva(50, ang);
  pop();
  push();
  translate(520, 200); 
  ramaInteractiva(55, ang);
  pop();

}

function mouseClicked() {
  if (mouseButton === RIGHT) {
    return false;
  }
}

function dibujarEstrella(posX, posY) {
  push();
  fill(255, 255, 0);
  rectMode(CENTER);
  noStroke();
  
  let centroX = posX;
  let centroY = posY;
  
  translate(centroX, centroY);
  
  let s = 0.5 * sin(frameCount * 0.05); 
  scale(s);  
  rotate(frameCount * 0.05);
  
  triangle(0, -35, 25, 15, -25, 15);  // Triángulo arriba
  triangle(0, 35, 25, -15, -25, -15);  // Triángulo abajo
  pop();
}

function mousePressed() {
  if (mouseButton === RIGHT) {
    if (fondo) { 
      estrellas.push({
        x: mouseX,
        y: mouseY
      });
    }
   
  } else {
    fondo = !fondo;
    estrellas = [];
  }
}

function ramaInteractiva(len, ang) {
 line(0, 0, 0, -len);
 translate(0, -len);
 if (len > 8) {
 push();
 rotate(ang);
 ramaInteractiva(len * 0.67, ang);
 pop();
 push();
 rotate(-ang);
 ramaInteractiva(len * 0.67, ang);
 pop();
 }
}

