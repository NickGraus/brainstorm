var canvas;
var btnReset;
var btnResult;
var result;
var output;
var colorRed = 0;
var colorGreen = 0;
var colorBlue = 0;
var resultArray = ["Cat", "Rainbow", "Train", "Bike", "Horse", "Sun", "Cow", "Giraffe", "Tree", "Brain", "Cloud", "Clock", "Plane", "Heart"];



function setup() {
  canvas = createCanvas(500, 500);
  canvas.id("paintCanvas");
  canvas.class("item2");
  stroke(20);

  btnReset = createButton('reset');
  btnReset.mousePressed(resetCanvas);
  btnReset.id("btnReset");
  btnReset.class("item5");

  btnResult = createButton('result');
  btnResult.mousePressed(showResult);
  btnResult.id("btnResult");
  btnResult.class("item6");

  background(255);
}



function draw() {
  stroke(colorRed, colorGreen, colorBlue);
  strokeWeight(10);
  strokeCap(ROUND);

  Leap.loop(function(frame) {
    if (frame.hands.length < 1) {
      info.innerHTML = "no hands detected";
    } else {
      info.innerHTML = "";
      if (frame.hands[0]) {
        if (
          frame.hands[0].thumb.extended == true &&
          frame.hands[0].indexFinger.extended == true &&
          frame.hands[0].middleFinger.extended == true &&
          frame.hands[0].ringFinger.extended == true &&
          frame.hands[0].pinky.extended == true) {

          colorRed = (frame.hands[0].palmPosition[0] / 255) * 200;
          colorGreen = (frame.hands[0].palmPosition[1] / 255) * 100;
          colorBlue = (frame.hands[0].palmPosition[2] / 255) * 200;
        }
        if (frame.hands[0].indexFinger) {
          mouseX = 250 + frame.hands[0].indexFinger.tipPosition[0];
          mouseY = 500 - frame.hands[0].indexFinger.tipPosition[1];
          if (
            frame.hands[0].thumb.extended == false &&
            frame.hands[0].indexFinger.extended == true &&
            frame.hands[0].middleFinger.extended == false &&
            frame.hands[0].ringFinger.extended == false &&
            frame.hands[0].pinky.extended == false) {
            if (frame.hands[0].indexFinger.tipPosition[2] < 0) {
              line(mouseX, mouseY, mouseX, mouseY);
            }

          }
        }

      }
    }


  });
}

function resetCanvas() {
  background(255);
  output.innerHTML = "The canvas has been reset";

  setTimeout(function() {
    output.innerHTML = "";
  }, 2000);
}






function showResult() {
  result = resultArray[Math.floor(Math.random() * resultArray.length)];
  output = document.getElementById("output");
  output.innerHTML = "I'm thinking about: <br><br>" + result;
}
