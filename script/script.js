var button;

function setup() {
  createCanvas(1080, 500);


  button = createButton('reset');
  button.mousePressed(resetCanvas);

  background(100);
}

function resetCanvas() {
  clear();
  background(100);
}

function doodle() {
  stroke(0);
  strokeWeight(10);
  strokeCap(ROUND);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function draw() {
  doodle();
}
