
let select = 400; 
let size = 30; 
let rgba = [20, 20, 20, 20]; 

function setup() {
  noStroke(); 
  createCanvas(800, 800);
}

function draw() {
  fill(rgba);
  ellipse(mouseX, mouseY, size, size);
  if(select!=2){
    size = (300, 300);
  }
}


