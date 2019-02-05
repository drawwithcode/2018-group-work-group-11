puoiClickDx
var click = 0;
var volume;
var volumeS;

//barra volume
var barStartPointX;
var barStartPointY;
var barWidth;
var barHeight;

//shape
var iterator = 0;
var elx;
var ely;

//Camera
var coulorshown = 0;
var rosso=0;
var verde=0;
var blu=0;
var redPer = 0;
var greenPer = 0;
var bluePer = 0;
var coloreTot;
var colVx;


var y1;
var y2;
var arrowdx;
var arrowsx;
var puoiClickDx = 0;
var puoiClickSx = 0;
var start = 0;
var colorStart;
var colorStartText;
var titoletto;
var testo;
var bottone;




function preload(){
  arrowsx = loadImage ('https://i.imgur.com/PxvJNBy.png');
  arrowdx = loadImage ('https://i.imgur.com/MnDJ2k3.png');
  camera = loadImage ('https://i.imgur.com/iLo5sR3.png');
//  info=loadImage('https://i.imgur.com/ZeddN3q.png');
info=loadImage('https://i.imgur.com/bVJlr6Y.png');
tutorial=loadImage('https://i.imgur.com/iX8SaL8.png');
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  setInterval(changeColorCamera, 2000);
}


function draw(){

  textFont("Krub");

  console.log(click)
  background('black');
  textAlign(CENTER);

  //volume con click = 0;

  var barStartPointX=width/20;
  var barStartPointY=height/8;
  var barWidth=width/50;
  var barHeight=3*height/7;

  if (click == 1) {
    volume = random(100,barHeight);
  } else{ volume = 200;}

  volumeS = map(volume, 50,200,255,100);




  // forma dell'aurora
  push();
  if(click== 2){
    y1 = 100* sin(iterator/5)+800;
    y2 = 100* sin(-iterator/5);
  } else{
    y1 = 5*height/5;
    y2 = height/5;
  }

  noFill();
  strokeWeight(80)
     if (click == 3 && coulorshown != 0) {if(coulorshown == 1){stroke(255,0,0, 100)}
     else if(coulorshown == 2){stroke(0,255,0,100)}
     else if (coulorshown == 3){stroke(0,0,255,100)}
       bezier(0, height/2-50, width/3, y1-50 ,2*width/3, y2-50, width, height/2-50);
       bezier(0, height/2, width/3, y1 ,2*width/3, y2, width, height/2);
       bezier(0, height/2+50, width/3, y1+50 ,2*width/3, y2+50, width, height/2+50);

     }else {
      stroke(255,0,0,volumeS)
      bezier(0, height/2-50, width/3, y1-50 ,2*width/3, y2-50, width, height/2-50);
      stroke(0,255,0,volumeS)
      bezier(0, height/2, width/3, y1 ,2*width/3, y2, width, height/2);
      stroke(0,0,255,volumeS)
      bezier(0, height/2+50, width/3, y1+50 ,2*width/3, y2+50, width, height/2+50);}
    pop();


pop();


//shape
push();
var elix=width/13;
var eliy=8*height/10;


iterator = iterator +1
if(click== 2) {
 elx = width/13+20*sin(iterator/5);
 ely = 8*height/10+10*sin(iterator/5);}



pop();

if(click == 2) {

push();
fill('white');
textSize(20);
textAlign(CENTER);
noStroke();
text('PARTICLES\nACCELERATION', width/13, 13*height/14);
pop();

fill('black');
stroke('white');
strokeWeight(2);
ellipse(elix, eliy, 100);
fill('white')
ellipse(elx, ely, 20);}

//Camera
push();
noFill();
stroke('white');
strokeWeight(2);
if(click == 3){
  rect(100,65, 280,200);}
noStroke();
if(click== 3 && coulorshown == 1) {fill('red'); rosso+= 0.2}
else if (click==3 && coulorshown == 2) {fill('green'); verde+=0.2}
else if(click==3 && coulorshown == 3) {fill('blue'); blu+=0.2}
else{noFill();}
rect(180,125, 120, 80)
pop();


// infografica valori della camera
if(click == 3){
push();
var dimInfo = 100;
var distanza = 140;
noFill();
stroke('white');
strokeWeight(2);
ellipse(windowWidth - distanza*3,windowHeight-dimInfo-30,dimInfo);
ellipse(windowWidth - distanza*2,windowHeight-dimInfo-30,dimInfo);
ellipse(windowWidth - distanza,windowHeight-dimInfo-30,dimInfo);
push();
textAlign(CENTER);
textSize(20);
noStroke();
fill('white');
text("CHEMICAL COMPOSITION", windowWidth - distanza*2, windowHeight-dimInfo-120);
pop();

push();
textSize(15);
noStroke();
fill('white');
text("Oxygen\n(atom)", windowWidth - distanza*3,windowHeight-dimInfo+50)
text("Oxygen\n(molecule)", windowWidth - distanza*2,windowHeight-dimInfo+50)
text("Nitrogen", windowWidth - distanza,windowHeight-dimInfo+50)
pop();

coloreTot = rosso + verde + blu
if(rosso>0){
redPer = round((rosso/coloreTot)*100);}
else{redPer = 0;}
if(verde > 0){
greenPer = round((verde/coloreTot)*100);}
else{greenPer = 0};
if(blu>0){
bluePer = round((blu/coloreTot)*100);}
else{bluePer = 0;}

push();
noStroke();
fill('white');
textAlign(CENTER);
textSize(20);
text(redPer, windowWidth - distanza*3,windowHeight-dimInfo-30)
text(greenPer, windowWidth - distanza*2,windowHeight-dimInfo-30)
text(bluePer, windowWidth - distanza,windowHeight-dimInfo-30)
pop();}



 // solar wind
 if(click == 1) {

  push();
  strokeWeight(20);
  stroke(64, 64, 64);
line(barStartPointX, barStartPointY, barStartPointX, barStartPointY+barHeight);
  stroke('white');
  line(barStartPointX, barStartPointY+barHeight, barStartPointX, barStartPointY+barHeight-volume);
  pop();

  push();
  fill('white');
  noStroke();
  textSize(20);
  text((volume).toFixed(2) + ' Km/h', width/20, height/11);
  text('SOLAR\nWIND',width/20, 3*height/5);
  pop();}

  push();
      var imX = arrowdx.width;
      var imY = arrowdx.height;
      var cameraX = camera.width;
      var cameraY = camera.height;
      var leftDx = width/2+125;
      var leftSx = width/2-180;
      var topArrow = height- 90;

      if(click <= 4) {
      image(arrowdx, leftDx,topArrow, imX/23, imY/23);}
      if(click >= 2){
      image(arrowsx,leftSx,topArrow, imX/23, imY/23);}

      var infoX=info.width;
      var infoY=info.height;
      var tutorialX=tutorial.width;
      var tutorialY=tutorial.height;

      image(camera, 13.6*width/17 , height/20, cameraX/55, cameraY/55);
      image(info, 14.8*width/17, height/22, infoX/11, infoY/11);
      image(tutorial, 15.8*width/17, height/22, tutorialX/11, tutorialY/11);
      push();

      // le icone compaiono e scompaiono a seconda della necessità
     if(click == 3) {
        noStroke();
        fill(0,0,0,200);
        rect(14.5*width/17, height/25, 400,50);
      }else if(click == 4) {
        noStroke();
        fill(0,0,0,200);
        rect(13*width/17, height/25, 120 ,50);
      }else{noStroke();
      fill(0,0,0,200);
      rect(13*width/17, height/25, 400,50)}
      pop();

    //  rect(leftDx, topArrow, (leftDx+imX)/10, (topArrow+imY)/10);

    push();
    textSize(30);
    fill('white');
    noStroke();
    if(click == 0) {
       text("TUTORIAL", width/2, height - 58);}else {
         text("TUTORIAL "+ click+"/5", width/2, height - 58);
         // rect(width/2-180,35,50,50);rect(width/2+100,35,50,50);
         }
   pop();

      if(click == 0 || click == 5) {
        push();
        textAlign(CENTER);
        textSize(60);
        fill(0,0,0,150);
        rect(0,0,width, height);
        if(mouseX> width/2-125 && mouseX<width/2+125 && mouseY> height/2-63 && mouseY < height/2+23){
          start = 1;
          colorStart = ('white');
          colorStartText = ('black');
          } else{
            colorStart = ('black');
            colorStartText = ('white');
          start = 0}

        push();
        noFill();
        stroke('white');
        fill(colorStart)
        strokeWeight(2);
        rectMode(CENTER);
        rect(width/2, height/2-23, 250,80, 30,30,30,30);
        pop();

        push();
        fill(colorStartText);
        if(click == 0) {
          button = "Start"
        } else if(click == 5) {
          button = "Play"
        }
        text(button, width/2, height/2);
        pop();
      }

      if(click>0 && click<= 4 ) {
      push();

      fill('white');

      noStroke();
      if(click == 1){
         titolo = "1/5 - SOLAR WIND";
         testo = "1. Blow through the microphone to increase the speed of the solar wind\n2. Observe the effects on the streaks of light"}
      else if(click == 2){
          titolo = "2/5 - PARTICLES ACCELERATION";
          testo = "1. Drag the circle underneath to increase the particles acceleration\n2. Observe the transformations in the aurora's shape";

      }else if(click == 3){
          titolo = "3/5 - CHEMICAL COMPOSITION";
          testo = "1. Click on the camera icon to open the Camera\n2. Show the camera any red/green/blue object\n3. Observe the shift in the chemical composition and in the indicators below ";
      }else if(click == 4){
          titolo = "4/5 - INF0";
          testo = "1. Click on the 'info' icon to learn about the scientifical processes behind the northern lights\n2. Click on the 'tutorial' icon if you wish to go over the game instructions one more time ";
      }

      textSize(40);
      text(titolo, width/2, 70);
      textAlign(LEFT);
      textSize(20);
      text(testo,  1.5*width/5, 130, 2.3*width/5);
      pop();
}



      if(mouseX > leftDx && mouseX<leftDx+imX/10 && mouseY > topArrow && mouseY< topArrow+imY/10 ){
      puoiClickDx = 1} else {puoiClickDx = 0};

      if(mouseX > leftSx && mouseX<leftSx+imX/10 && mouseY > topArrow && mouseY< topArrow+imY/10 ){
      puoiClickSx = 1} else {puoiClickSx = 0};

if(click != 0 && mouseX > leftDx && mouseX<leftDx+imX/10 && mouseY > topArrow && mouseY< topArrow+imY/10 || mouseX > leftSx && mouseX<leftSx+imX/10 && mouseY > topArrow && mouseY< topArrow+imY/10 ){
  cursor(HAND)
}else if(click == 0 || click == 5 && mouseX> width/2-125 && mouseX<width/2+125 && mouseY> height/2-63 && mouseY < height/2+23 ){
    cursor(HAND)
} else{ cursor(ARROW)}

}

function changeColorCamera() {
  if(click == 3) {
  coulorshown = coulorshown +1;
  if(coulorshown == 4){coulorshown = 1;}}
}



function mousePressed() {
  if(click == 0 && puoiClickDx == 0 && start == 1) {
    click = click +1; }

  if (click <= 4 && puoiClickDx == 1 && start == 1 ) {
      click = click + 1;}

  if (click >= 2 && puoiClickSx == 1 && start == 1 ) {
      click = click - 1;}
  if(click == 5 && mouseX> width/2-125 && mouseX<width/2+125 && mouseY> height/2-63 && mouseY < height/2+23) {
    window.location.href="index_play.html"
  }


  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
