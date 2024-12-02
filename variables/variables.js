

let mySize = 10;
let myPad = 10;  

function setup() {
    createCanvas(500, 500); 
    rectMode(CENTER); }

function draw(){
  background(255,0,100); 

  
  let r = (255);
  let g = (255);
  let b = (255);  
  fill(r, g, b); 

  
  let y = myPad+mySize; 
  let canvasHeight = height; 
  for(y; y<canvasHeight; y=y+mySize+myPad+myPad){ 
    rect(20, y, 30); 
    rect(70, y, 25); 
    rect(120, y, 20); 
    rect(170, y, 15); 
    rect(220, y, 10); 
    rotate(millis() / 5000);
  } 
}

