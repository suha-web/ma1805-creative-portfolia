let x = 100;
let y = 150;
let size = 40; 
let speed = 5;
let score = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  
  fill(0,0,100);
  square(x, y, size);
  x = x % width;
  x+=speed;


  fill(0,0,500);
  circle(mouseX, mouseY, size);


  textSize(20);
  text(score, 30, 30);
}

function mouseClicked(){
  let distance = dist(x, y, mouseX, mouseY); 
  if(distance <= size/2){
    score++;
  }
}



