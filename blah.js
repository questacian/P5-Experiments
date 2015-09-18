var y = 0;
var x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  stroke(255);     
  background(0)
}

function draw() { 
  noFill()
  strokeWeight(.1);
  translate(windowWidth/2, windowHeight/2)
  rotate(frameCount);

  y = y - 100; 
  if (y < 0) { 
    y = height; 
  } 
  x = x - 100;
  if (x < 0) {
    x = width;
  }
 
  ellipse(10,10,10,10)
 
} 