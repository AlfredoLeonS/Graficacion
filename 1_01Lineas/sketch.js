function setup() {
  createCanvas(900, 550);
  background(180);
  textSize(18)
}

function draw() {
  //line(30,20,185,185)
  stroke(0);
  //line(  x  ,  y  ,  x  ,    y )
  /*
  line(0,height/2,width,height/2);  // ---
  line(width/2,0,width/2,height);   // |
  line(0,0,width,height);   // \
  line(0,height,width,0);   // /
  */
  stroke(250)
  line(200,100,500,100);  // -----
  stroke(200)
  line(200,200,500,200);  // -----
  stroke(150)
  line(200,100,200,200);  // |
  stroke(100)
  line(500,100,500,200);  //      |

  
  fill(0,0,250);
  noStroke();
  circle(width/2,height/2 , 100);
  
  fill(250,250,250);
  rect(100,100,100,200,50,50,50,50);

  triangle(300,300,400,400,200,400);

  square(500,700,10);

  /*
  fill(0);
  text("X: " + mouseX, 10,20);
  text("Y: " + mouseY, 10,40);

  fill(0,100,200);
  circle(mouseX,mouseY,12);
  */
}