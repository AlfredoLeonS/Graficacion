function setup() {
 createCanvas(600, 400);
}

function draw() {
 background(240);
 translate(width/2, height);
 let ang = map(mouseX, 0, width, 0, PI/2);
 ramaInteractiva(100, ang);
 triangulo(0,0,100)
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
 rotate(ang/2);
 ramaInteractiva(len * 0.67, ang);
 pop();
 push();
 rotate(-ang);
 ramaInteractiva(len * 0.67, ang);
 pop();
 }
}

function triangulo(x, y, size) {
 if (size < 10) return;
 triangle(x, y, x + size, y, x + size/2, y - size);
 triangulo(x, y, size/2);
 triangulo(x + size/2, y, size/2);
 triangulo(x + size/4, y - size/2, size/2);
}
