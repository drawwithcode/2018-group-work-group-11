var ciao = 1000;
var fascioRed = []; // creo un array
var fascioGreen = []; // creo un array
var fascioBlue = []; // creo un array
var myLinea = {};
var click = -1;
var prova;
var prova1;
var numRed = 0;
var redPer;
var greenPer;
var bluePer;
var numFascio;

//solar wind
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
  //  setInterval(diminuisce, 3000);

      var lineanumber = 3;
      for(var i = 0; i < lineanumber; i++) {
        fascioRed[i] = new Linea(random(500, 600), random(500,650), 20);
        fascioGreen[i] = new Linea(random(500, 600), random(500,650), 20);
        fascioBlue[i] = new Linea(random(500, 600), random(500,650), 20);

      }

    //solar wind
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);

}

function aumenta() {
  if (prova1 == 1) {
  var c = new Linea(random(1000,1110), random(500,650), 20);
  fascioRed.push(c);
    }
  else if (prova1 == 2 ){
    var newGreen = new Linea(random(1000,1110), random(500,650), 20);
    fascioGreen.push(newGreen);
  }
  else if (prova1 == 3 ){
    var newBlue = new Linea(random(1000,1110), random(500,650), 20);
    fascioBlue.push(newBlue);
  }
}

/*function diminuisce() {
  fascioRed.splice(2)
}*/

function draw() {

  background('black');
  aumenta();
push();
fill('white')
  if(prova1 == 1) {
  rect(50,800, 50,50);}
  text('hue  = '+imH, 80,500);
  text('brightness  = '+imB, 80,550);
  text('saturation  = '+imS, 80,580);

  text('prova  =  ' +prova, 80,600);
  text('prova1  =  ' +prova1, 80,700);
  text('numRed  =  ' +numRed, 230,700);
  text('numGreen  =  ' +numGreen, 230,750);
  text('numBlue  =  ' +numBlue, 230,800);

  pop();

  // infografica percentuali di rosso verde e blu
  push();
  noFill();
  stroke('white');
  strokeWeight(2);
  numFascio = numRed+numGreen+numBlue;
  //calcolo perentuali di rosso verde e blu
  redPer = (numRed/numFascio)*100;
  greenPer = (numGreen/numFascio)*100;
  bluePer = (numBlue/numFascio)*100;

  //creo la pate grafica
  var dimInfo = 60;
  var distanza = 90;
  ellipse(windowWidth - distanza*3,windowHeight-dimInfo,dimInfo);
  ellipse(windowWidth - distanza*2,windowHeight-dimInfo,dimInfo);
  ellipse(windowWidth - distanza,windowHeight-dimInfo,dimInfo);

  // testo infografica
  textAlign(CENTER);
  text(redPer, windowWidth - distanza*3,windowHeight-dimInfo)
  text(greenPer, windowWidth - distanza*2,windowHeight-dimInfo)
  text(bluePer, windowWidth - distanza,windowHeight-dimInfo)


  console.log(redPer);

  pop();


// solar wind
    var vol = mic.getLevel();
    var aumentoGB = map(vol, 0, 0.1, 150, 0);


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
    //  var aumentoGB = map(vol, 0, 0.1, 150, 0);
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
push();

for (var k = 0; k < fascioGreen.length; k++ ) {
     fascioGreen[k].display();
     fascioGreen[k].color = color(aumentoGB,255,aumentoGB);}

for (var j = 0; j < fascioRed.length; j++ ) {
     fascioRed[j].display();
     fascioRed[j].color = color(255,aumentoGB,aumentoGB);}

 for (var h = 0; h < fascioBlue.length; h++ ) {
      fascioBlue[h].display();
      fascioBlue[h].color = color(aumentoGB,aumentoGB,255);

        /*   if(ciao == 1) {
         fascioRed.splice(1,1)}
       */
    }
pop();
}


// funzione che crea l'oggetto base del fascio
function Linea(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = (0,0,0)

  this.display = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
