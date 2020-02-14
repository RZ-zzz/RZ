function setup() { 
createCanvas(windowWidth, windowHeight)
  background(220,30,100);
}
 function draw() {
arc(50, 55, 50, 50, 0, HALF_PI);
  arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);

  circle(mouseX, mouseY, mouseY/5);
 }