

var prova;
var prova1;
var numRed = 0;
var numGreen = 0;
var numBlue = 0;
var myPixel;
var myImage;

var imX;
var imY;
var imB;
var imS;
var imH;



var red_canvas = function(p){

  var dragging = false;
  var bg_color = p.color(255,0,0);
  var my_canvas;

 p.preload = function() {

 }
 p.setup = function() {
  // p.createCanvas(500, 500);


  //  p.capture.hide();


p.capture = p.createCapture(p.VIDEO);
p.capture.size(320,240);
p.capture.hide();
my_canvas = p.createCanvas(800, 800);
my_canvas.parent('red-canvas-container');}


 p.draw = function() {

   if(openCamera == 1) {
      myImage = p.capture.loadPixels();
    var imX = myImage.width
    var imY = myImage.height;
    p.image(myImage, 0, 0, imX, imY);

    for (var x = 0; x < imX; x += 10) {
      for (var y = 0; y < imY; y += 10) {
      myPixel = myImage.get(x, y);
      imH = p.hue(myPixel);
      imS = p.saturation(myPixel);
      imB = p.brightness(myPixel);
p.push();
p.fill(imH,imS,imB);
p.ellipse(x,y,10);
p.pop();

   }}}


 }

}

var red_sketch = new p5(red_canvas);
