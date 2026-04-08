function setup() {
 createCanvas(700, 500,WEBGL  );
}
function draw(){
 background(230);
  orbitControl()
 //cubo
 push()
  translate(-250,-100,0)
  fill(0,100,0)
  box(80)
 pop()
  //esfera
 push()
  translate(-250,100,0)
  sphere(80)
 pop()

 push()
 //eje x
 stroke(255,0,0)//rojo
 line(0,0,0,200,0,0)

 //eje y
 stroke(0,255,0)//verde
 line(0,0,0,0,200,0)

 //eje z
 stroke(0,0,255)//azul
 line(0,0,0,0,0,200)

 noStroke()
 fill(150)
 rotateX(frameCount * 0.02)
 rotateY(frameCount * 0.02)
 box(20)
 pop()


 push()
 translate(0,-150,0)
 box(40)
 pop()

 push()
 fill(0,100,0)
 translate(0,-150,0)
 box(10)
 pop()

 push()
 translate(30,-150,60)
 rotateX(frameCount * 0.02)
 rotateY(frameCount * 0.02)
 sphere(30)
 pop()

 push()
 translate(-50,-150,-50)
 rotateX(frameCount * 0.02)
 rotateY(frameCount * 0.02)
 torus(30)
 pop()
}

