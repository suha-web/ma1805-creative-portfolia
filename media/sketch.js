let img; 

function preload() {
  img = loadImage('jttlotm.jpg'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220)
  image(img,0,0);
  filter(POSTERIZE,3);
}
