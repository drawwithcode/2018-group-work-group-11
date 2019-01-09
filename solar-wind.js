var mic, fft;
var barStartPointX=70;
var barStartPointY=500;
var barWidth=20;
var barHeight=400;
var barMinHeight;
var barCurrentHeight=200;
var r, g, b;
var r1, g1, b1;

function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
//  background(0,0,0);
  var vol = mic.getLevel();

  push();
  fill('white');
  textSize(20);
  text((vol*1000).toFixed(2) + ' Km/h', 35, 65);
  text('SOLAR \n WIND', 40, 550);
  pop();

  push();
  stroke(64, 64, 64);
  strokeWeight(barWidth);
  //rect(barStartPointX, barStartPointY, barHeight, barWidth);
  line(barStartPointX, barStartPointY, barStartPointX, barStartPointY-barHeight);
  pop();

  push();
  stroke(255);
  strokeWeight(barWidth);
  var aumento = map(vol, 0, 0.1, 0, 200);
  if(aumento>1){
    if(aumento>=barHeight){
      aumento=barHeight;
    }
    //rect(barStartPointX, barStartPointY, aumento, barWidth);
    line(barStartPointX, barStartPointY, barStartPointX, barStartPointY-aumento);
  }
  pop();

  push();
  var spectrum = fft.analyze();
  strokeWeight(30);
  beginShape();
  for (i = 250; i < 400; i += 20) {
    //noFill();
    //stroke(spectrum[i]*5,10,10);
    //strokeWeight(spectrum[i]/10);
    //vertex(i, map(spectrum[i], 200, 255, 170, 100) );
    r=255;
    //g=150-spectrum[i]*2;
    //b=150-spectrum[i]*2;
    var aumentoGB = map(vol, 0, 0.1, 150, 0);
    line(200, 400, 400, 400);
    //console.log(spectrum[i]);
    stroke(r, aumentoGB, aumentoGB);
    r1=r;
    g1=g;
    b1=b;
  }
  endShape();
  pop();

  if(vol=0){
    stroke(r1, g1, b1);
    line(100, 400, 400, 400);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
