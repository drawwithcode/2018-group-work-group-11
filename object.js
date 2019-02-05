var fascioRed = []; // creo un array
var fascioGreen = []; // creo un array
var fascioBlue = []; // creo un array
var myLinea = {};
var click = -1;
var prova;
var prova1;
var numRed = 0;
var redPer = 0;
var greenPer;
var bluePer;
var numFascio;
var red=0;
var green=0;
var blue=0;

//solar wind
var mic, fft;

var barMinHeight;
var barCurrentHeight=200;
var r, g, b;
var r1, g1, b1;

//shape variables
var elx;
var ely;
var punto=0;
var bis=0;
var rules=2;
var distance;
var distance1;
var spost=0;

var showInfo;
var testo;
var showClock=false;
var show=true;
var square;
var click = 0;
var clickTut = 0;

var tutorial


function preload() {
//    info=loadImage('https://i.imgur.com/ZeddN3q.png');
info=loadImage('https://i.imgur.com/bVJlr6Y.png');
tutorial=loadImage('https://i.imgur.com/iX8SaL8.png');

}

function setup() {
    createCanvas(windowWidth, windowHeight);
  //  setInterval(diminuisce, 3000);

      var lineanumber = 3;
      for(var i = 0; i < lineanumber; i++) {

        fascioRed[i] = new Linea(0-50, random((height/2)+i*(random(-60, 60))-100, (height/2)+i*(random(-60, 60))-100), 1*(width/3)+100, -random(-100, 100)+(height/2)+i*(random(-60, 60)), 2*(width/3)+100, random(-100, +100)+(height/2)+i*(random(-60, 60)), width+100, random((height/2)+i*(random(-60, 60))-100, (height/2)+i*(random(-60, 60))-100)+10);
        fascioGreen[i] = new Linea(0-50, random((height/2)+i*(random(-60, 60))-100, (height/2)+i*(random(-60, 60))-100), 1*(width/3)+100, -random(-100, 100)+(height/2)+i*(random(-60, 60)), 2*(width/3)+100, random(-100, +100)+(height/2)+i*(random(-60, 60)), width+100, random((height/2)+i*(random(-60, 60))-100, (height/2)+i*(random(-60, 60))-100)+10);
        fascioBlue[i] = new Linea(0-50, random((height/2)+i*(random(-60, 60))-100, (height/2)+i*(random(-60, 60))-100), 1*(width/3)+100, -random(-100, 100)+(height/2)+i*(random(-60, 60)), 2*(width/3)+100, random(-100, +100)+(height/2)+i*(random(-60, 60)), width+100, random((height/2)+i*(random(-60, 60))-100, (height/2)+i*(random(-60, 60))-100)+10);

      }

    //solar wind
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);

}

function aumenta() {
  if (prova1 == 1 && numRed%5==0) {
  var c = new Linea(0-50, random((height/2)+(random(-60, 60))-100, (height/2)+(random(-60, 60))-100), 1*(width/3)+100, -random(-100, 100)+(height/2)+(random(-60, 60)), 2*(width/3)+100, random(-100, +100)+(height/2)+(random(-60, 60)), width+100, random((height/2)+(random(-60, 60))-100, (height/2)+(random(-60, 60))-100)+10);
  fascioRed.push(c);
    }
  else if (prova1 == 2 && numGreen%5==0){
    var newGreen = new Linea(0-50, random((height/2)+(random(-60, 60))-100, (height/2)+(random(-60, 60))-100), 1*(width/3)+100, -random(-100, 100)+(height/2)+(random(-60, 60)), 2*(width/3)+100, random(-100, +100)+(height/2)+(random(-60, 60)), width+100, random((height/2)+(random(-60, 60))-100, (height/2)+(random(-60, 60))-100)+10);
    fascioGreen.push(newGreen);
  }
  else if (prova1 == 3 && numBlue%5==0){
    var newBlue = new Linea(0-50, random((height/2)+(random(-60, 60))-100, (height/2)+(random(-60, 60))-100), 1*(width/3)+100, -random(-100, 100)+(height/2)+(random(-60, 60)), 2*(width/3)+100, random(-100, +100)+(height/2)+(random(-60, 60)), width+100, random((height/2)+(random(-60, 60))-100, (height/2)+(random(-60, 60))-100)+10);
    fascioBlue.push(newBlue);
  }
}

/*function diminuisce() {
  fascioRed.splice(2)
}*/

function draw() {
console.log(distance1);
  background('black');
  textFont("Krub");
  aumenta();
/*fill('white')
  text('hue  = '+imH, 80,500);
  text('brightness  = '+imB, 80,550);
  text('saturation  = '+imS, 80,580);

  text('prova  =  ' +prova, 80,600);
  text('prova1  =  ' +prova1, 80,700);
  text('numRed  =  ' +numRed, 230,700);
  text('numGreen  =  ' +numGreen, 230,750);
  text('numBlue  =  ' +numBlue, 230,800);

  pop();*/

  // infografica percentuali di rosso verde e blu
  push();
  noFill();
  noStroke();
  numFascio = numRed+numGreen+numBlue;
  //calcolo perentuali di rosso verde e blu
  if(numRed>0){
  redPer = round((numRed/numFascio)*100);}
  else{redPer = 0;}
  if(numGreen > 0){
  greenPer = round((numGreen/numFascio)*100);}
  else{greenPer = 0};
  if(numBlue>0){
  bluePer = round((numBlue/numFascio)*100);}
  else{bluePer = 0;}

  //creo la parte grafica



  stroke('white');
  strokeWeight(2);
  var dimInfo = height/10;
  var distanza = height/7;

  push();
  if(prova1 == 1){
    fill(255, 0, 0);} else{
    noFill();
    }
  ellipse(windowWidth - distanza*3,windowHeight-dimInfo-30,dimInfo);
  pop();

  push();
  if(prova1 == 2){
    fill(0, 255, 0);} else{
    noFill();
    }
  ellipse(windowWidth - distanza*2,windowHeight-dimInfo-30,dimInfo);
  pop();
  push();
  if(prova1 == 3){
    fill(0, 0, 255);} else{
    noFill();
    }
  ellipse(windowWidth - distanza,windowHeight-dimInfo-30,dimInfo);
  pop();

  // testo infografica
  noStroke();
  fill("white");
  textAlign(CENTER);
  push();
  textAlign(CENTER);
  textSize(20);
  text("CHEMICAL COMPOSITION", windowWidth - distanza*2, windowHeight-dimInfo-120)
  pop();
  push();
  textSize(20);
  text(redPer+"%", windowWidth - distanza*3,windowHeight-dimInfo-30)
  text(greenPer+"%", windowWidth - distanza*2,windowHeight-dimInfo-30)
  text(bluePer+"%", windowWidth - distanza,windowHeight-dimInfo-30)
  pop();
  push();
  textSize(15);
  text("Oxygen\n(molecules)", windowWidth - distanza*3,windowHeight-dimInfo+50)
  text("Oxygen\n(atoms)", windowWidth - distanza*2,windowHeight-dimInfo+50)
  text("Nitrogen", windowWidth - distanza,windowHeight-dimInfo+50)
  pop();


  //console.log(redPer);

  pop();


// solar wind
    var vol = mic.getLevel();
    var aumentoGB = map(vol, 0, 0.1, 150, 0);

    var barStartPointX=width/20;
    var barStartPointY=height/8;
    var barWidth=width/50;
    var barHeight=3*height/7;


    push();
    fill('white');
    textSize(20);
    textAlign(CENTER);
    text((vol*1000).toFixed(2) + ' Km/h', width/20, height/11);
    text('SOLAR\nWIND',width/20, 3*height/5);
    pop();

    push();
    stroke(64, 64, 64);
    strokeWeight(barWidth);
    //rect(barStartPointX, barStartPointY, barHeight, barWidth);
    line(barStartPointX, barStartPointY, barStartPointX, barStartPointY+barHeight);
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
      line(barStartPointX, barStartPointY+barHeight, barStartPointX, barStartPointY+barHeight-aumento);
    }
    pop();

    push();
    var spectrum = fft.analyze();
    strokeWeight(30);
    pop();

    if(vol=0){
      stroke(r1, g1, b1);
      line(100, 400, 400, 400);
    }
push();

for (var k = 0; k < fascioGreen.length; k++ ) {
     fascioGreen[k].display();

     fascioGreen[k].color = color(aumentoGB,255,aumentoGB,100);
     fascioGreen[k].y2= -random(punto-100, punto+100)+(height/2);
     fascioGreen[k].y3= random(punto-100, punto+100)+(height/2);
  }

for (var j = 0; j < fascioRed.length; j++ ) {
     fascioRed[j].display();
     fascioRed[j].color = color(255,aumentoGB,aumentoGB,100);
     fascioRed[j].y2= -random(punto-100, punto+100)+(height/2);
     fascioRed[j].y3= random(punto-100, punto+100)+(height/2);
// if(mouseIsPressed == true){fascioRed.splice(0, j)}
//-noise(-100, 100)+(height/2)+(random(-60, 60))
}

 for (var h = 0; h < fascioBlue.length; h++ ) {
      fascioBlue[h].display();
      fascioBlue[h].color = color(aumentoGB,aumentoGB,255,100);
      fascioBlue[h].y2= -random(punto-100, punto+100)+(height/2);
      fascioBlue[h].y3= random(punto-100, punto+100)+(height/2);


    }
pop();

//testo accelerazione
push();
fill('white');
textSize(20);
textAlign(CENTER);
text('PARTICLES\nACCELERATION', width/13, 13*height/14);
pop();

//casella sfregamento
push();
var elix=width/13;
var eliy=8*height/10;

/*stroke("white");
strokeWeight(3);*/
noStroke();
fill(64, 64, 64);
ellipse(elix, eliy, height/5);
pop();


var elx= width/13;
var ely= 8*height/10;
distance=dist(mouseX, mouseY, elx, ely);
distance1=dist(mouseX, mouseY, elix, eliy);
if (distance<10){
  spost=1
}
if(!mouseIsPressed){
  spost=0
}
if(mouseIsPressed==true && spost==1 && distance1<=height/10){
  noStroke()
  ellipse(mouseX, mouseY, 30)
}else{
  noStroke();
  ellipse(elx, ely, 30);}

  //info



  if(showInfo){
}
    if(showClock){
      showInfo=false;
      push();
      fill('black')
      rect(0,0,width, height);
      pop();
      //image(testo, width/2-testo.width/2, height/2-testo.height/2);
      //image(square, width/2-square.width/2, height/2-square.height/2);
      push();
      textAlign(CENTER);
      textFont("Krub");
      textSize(30);
      textStyle(BOLD);
      fill('white');
      noStroke();
      text('What are the Northern Lights?',width/2, height/6);
      pop();

      push();
      textSize(18);
      fill('white');

      noStroke();
      text('The northern lights (called the aurora borealis) and the southern lights (aurora australis) appear when tiny particles stream out from the Sun and hit the Earth’s atmosphere.\nThe particles give some of their energy to atoms and molecules of gases in the upper atmosphere. But the atoms and molecules cannot hold the energy.\nThey quickly give it off as another kind of energy — the colors of light that we call the aurora. These lights occur most often around the North Pole and South Pole\nbecause the incoming particles hold an electric charge. As the particles arrive, the Earth’s magnetic field guides them toward the poles.\n\nThe particles leave the sun carried by the solar wind, the speed of which interacts with the magnetic field of the Earth.\nWhen you blow through the microphone, you are making the wind stronger and more particles are arriving into our atmosphere: that is why the intensity of the light increases.\n\nWhen you drag the button you accelerate the sun particles.\nParticles with different acceleration cause the aurora to assume different shapes: it shifts more quickly as the acceleration increases.\n\nThe light particles coming from the sun excite the atoms in our atmoshpere. The colors we see depend on the kind of elements that are excited.\nRed is associated to molecules of oxygen, while green to the atoms of the same element. Blue, on the other hand, corresponds to nitrogen.\nWhen you see a strongly blue aurora, you will now know that it is cause mostly by excited nitrogen.', width/12, 1.3*height/5, 10*width/12);
      fill(0,0,0);
      pop();


    }

// testo
    /*
    The particles leave the sun carried by the solar wind, the speed of which interacts with the magnetic field of the Earth. When you blow through the microphone, you're making the wind stronger and more particles are arriving into our atmosphere: that is why the intensity of the light increases.
    When you drag the button you accelerate the sun particles. Particles with different acceleration cause the aurora to assume different shapes: it shifts quicker as the acceleration increases.
    The light particles coming from the sun excite the atoms in our atmoshpere. The colors we see depend on the kind of elements that are excited. Red is associated to molecules of oxygen, while green to the same element's atoms. Blue, on the other hand, corresponds to nitrogen. When you see a strongly blue aurora, you will now know that it is cause mostly by excited nitrogen.
    */
push();
   var infoX=info.width;
   var infoY=info.height;
   var tutorialX=tutorial.width;
   var tutorialY=tutorial.height;
    image(tutorial, 15.8*width/17, height/22, tutorialX/11, tutorialY/11);
    image(info, 14.8*width/17, height/22, infoX/11, infoY/11);

  /*  fill('red');
    rect(16*width/17,height/22, tutorialX/11, tutorialY/11)*/

    if(mouseX>=14.7*width/17 && mouseX<= 14.6*width/17+infoX/11*1.5 &&mouseY>=height/22 &&mouseY<=height/22+infoY/11){
      click = 1
    }else {
      click = 0}

    if(mouseX>=15.8*width/17 && mouseX<= 15.8*width/17+tutorialX/11 && mouseY>=height/22 && mouseY<=height/22+tutorialY/11){
       clickTut = 1} else{clickTut = 0}
  pop();

if(mouseX>=14.7*width/17 && mouseX<= 14.6*width/17+infoX/11*1.5 &&mouseY>=height/22 &&mouseY<=height/22+infoY/11|| mouseX>=16*width/17 && mouseX<= 14.6*width/17+tutorialX/11 &&mouseY>=height/22 &&mouseY<=height/22+tutorialY/11||mouseX>=15.8*width/17 && mouseX<= 15.8*width/17+tutorialX/11 && mouseY>=height/22 && mouseY<=height/22+tutorialY/11 ||distance<20){
  cursor(HAND)
} else{
  cursor(ARROW)
}


}



// funzione che crea l'oggetto base del fascio
function Linea(_x1, _y1, _x2, _y2, _x3, _y3, _x4, _y4) {
  this.x1 = _x1;
  this.y1 = _y1;
  this.x2 = _x2;
  this.y2 = _y2;
  this.x3 = _x3;
  this.y3 = _y3;
  this.x4 = _x4;
  this.y4 = _y4;
  this.color = (0,0,0);

  this.display = function() {
    noFill();
    strokeWeight(10);
    stroke(this.color);
    bezier(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
  }
}

//sfregamento
function mouseDragged(){
  rules= rules+1;
  //console.log("aumentato");
  {
    if(rules%5===0 && mouseIsPressed== true && spost==1 && distance1<=100) {
      if(punto>=500){
        bis=1
      } else if(punto<=-500){
        bis=0
      }
  if (bis==0){
  punto= punto+20;
  //console.log("oneway");
} else if(bis==1) {
  // bis= -bis-2;
  bis
  punto= punto-20;
  //console.log("otherway")
}
}
}
}

function mousePressed() {
  if(click == 1)
  {
    showClock=cambio(showClock);
    show=cambio(show);
  }
   if(clickTut == 1) {
    window.location.href="index_tutorial.html"
  }
}

function cambio(valueToSwitch) {
  if(valueToSwitch) {
    return false;
  }  else {
    return true;
  }
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
