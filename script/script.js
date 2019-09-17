var btnReset;
var btnResult;
var result;
var output;

function setup() {
  createCanvas(280, 280);
  stroke(20);

  btnReset = createButton('reset');
  btnReset.mousePressed(resetCanvas);

  btnResult = createButton('result');
  btnResult.mousePressed(result);

  background(100);
}

function resetCanvas() {
  background(100);
  output.innerHTML = "";
}

function result() {
  background(100);
  loadPixels();
  for(y=0; y<width; y++) {
    for(x=0; x<width; x++) {
      var index = (x + y * width)*4;
      if(pixels[index] != 100) {
        output.innerHTML = "You didn't draw anything";
      }
    }
  }

  updatePixels();


  var resultArray = ["Cat", "Rainbow", "Train", "Bike", "Horse", "Sun", "Cow", "Giraffe", "Tree", "Brain", "Cloud", "Clock", "Plane"];
  result = resultArray[Math.floor(Math.random() * resultArray.length)];
  output = document.getElementById("result");
  output.innerHTML = result;
}

function draw() {
  stroke(0);
  strokeWeight(10);
  strokeCap(ROUND);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
