

var prova;
var prova1;
var numRed = 0;
var numGreen = 0;
var numBlue = 0;

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
my_canvas = p.createCanvas(320, 240);
my_canvas.parent('red-canvas-container');}


 p.draw = function() {

   if(openCamera == 1) {
     var myImage = p.capture.loadPixels();
    var imX = myImage.width
    var imY = myImage.height;
    p.image(myImage, 0, 0, imX, imY);

    for (var x = 100; x < imX-100; x += 10) {
      for (var y = 70; y < imY-70; y += 10) {
      myPixel = myImage.get(x, y);
      imH = p.hue(myPixel);
      imS = p.saturation(myPixel);
      imB = p.brightness(myPixel);
/*p.push();
p.fill(imH,imS,imB)
p.ellipse(x,y,10);
p.pop();*/
p.push();
p.noFill();
p.stroke("white");
//rect(100, 70, imX-100, imY-70);
//p.rect(width/15.2, height/10.5, width/12.9, height/7.1);
p.rect(100, 70, 120, 100);
p.pop();

   }}}

   // se i valori HSB vedono il rosso
       if(imB > 30) {prova = 1;}
     //  else { prova = 0}
       if(imH > 350 && imS >55 && prova == 1) {
         prova1 = 1;}
         else if (imH<150 && imH>90 && prova == 1){
         prova1 = 2}
         else if (imH<254 && imH>220 && imS>20 && prova == 1){
         prova1 = 3}
         else{prova1 = 0}

       if(prova1 == 1) {numRed = numRed +1}
       if(prova1 == 2) {numGreen = numGreen +1}
       if(prova1 == 3) {numBlue = numBlue +1}

 }

}

var red_sketch = new p5(red_canvas)
