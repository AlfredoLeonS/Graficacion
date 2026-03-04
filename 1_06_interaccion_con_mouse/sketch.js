let posiciones=[];

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  
  for(let i=0; i<posiciones.length;i++){
    circle(posiciones[i].x, posiciones[i].y,100);
    //line(width/2,height/2,posiciones[i].x, posiciones[i].y);
    let d = dist(mouseX,mouseY,200,200);
    if(d<50){
      fill(255,0,0);
    }else{
      fill(0,255,0);
    }
    }

}

function mousePressed(){
  posiciones.push({x:mouseX,y:mouseY});
}