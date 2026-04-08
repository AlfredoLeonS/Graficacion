let vertices = [
    [-50,-50,-50],
    [90,-50,-50],
    [50,50,-50],
    [20,20,50]]

let edges = [
 [0,1],[1,2],[2,3],[3,0],[1,3],[0,2]];


let vertices2 = [
 [-50, -50, -50],
 [50, -50, -50],
 [50, 50, -50],
 [-50, 50, -50],
 [-50, -50, 50],
 [50, -50, 50],
 [50, 50, 50],
 [-50, 50, 50]
];
let edges2 = [
 [0,1],[1,2],[2,3],[3,0],
 [4,5],[5,6],[6,7],[7,4],
 [0,4],[1,5],[2,6],[3,7]
];



function setup() {
 createCanvas(600, 400, WEBGL);
}
function draw() {
 background(240);
 orbitControl();
 stroke(0);
 noFill();
 rotateY(frameCount * 0.01);
 for (let e of edges) {
    let v1 = vertices[e[0]];
    let v2 = vertices[e[1]];
    line(v1[0], v1[1], v1[2], v2[0], v2[1], v2[2]);
 }

 for (let e of edges2) {
 let v1 = vertices2[e[0]];
 let v2 = vertices2[e[1]];
 line(v1[0], v1[1], v1[2],v2[0], v2[1], v2[2]);
 }

 fill(100, 150, 240);
 stroke(0);
 beginShape(QUADS);
 translate(100,100,0)
 // Cara frontal
 vertex(-50, -50, 50);
 vertex(50, -50, 50);
 vertex(50, 50, 50);
 vertex(-50, 50, 50);
 // Cara trasera
 vertex(-50, -50, -50);
 vertex(50, -50, -50);
 vertex(50, 50, -50);
 vertex(-50, 50, -50);
 //lado
 vertex(-50, -50, -50);
 vertex(-50, -50, 50);
 vertex(-50, 50, 50);
 vertex(-50, 50, -50);
 endShape()

}

