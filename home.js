var fascioRed = []; // creo un array
var fascioGreen = []; // creo un array
var fascioBlue = []; // creo un array
var myLinea = {};
var punto=0;
var rumore=0;
var rum=1;
var rum2=0;
var inc=0.01;
var start=0;
var coloreHoverI = 'black';
var coloreHoverP = 'black';
var textHoverI = 'white';
var textHoverP = 'white';


function preload(){
  // put preload code here
}



function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background("black");
//  setInterval(diminuisce, 3000);


}

function draw() {
  // put drawing code here
  background("black");
  textFont("Krub");
  /*noStroke();
  fill("yellow");
  ellipse(width/2, height/2, 500)*/
  rumore=rumore+0.001;


  if(rum2==0){
    rum=rum-0.01;
  } else if (rum2==1){
    rum=rum+0.01;
  }


  if(rum<=-2){
    rum2 =1;
  }else if(rum>=2){
    rum2 =0;
  }



/*if(rum2== 0){
  rum = rum-1
}

if(rum ==-10){rum2 =1}*/


  console.log(rumore);

  var x1= 0;
  var x2= width/3;
  var x3= 2*width/3;
  var x4= width;

  strokeWeight(100);
  noFill();

//red
  var y1=-noise(rumore*10)*100*rum;
  var y2=noise(rumore*1.3)*height*rum;
  var y3= -noise(rumore*1.3)*height*rum;
  var y4=noise(rumore)*100*rum;

  stroke(255, 0 , 0, 100);
  bezier(x1, y1+height/2-100, x2, y2+200, x3, y3+400, x4, y4+height/2+200);

  var y11=noise(rumore)*100*rum;
  var y21=-noise(rumore)*height*rum*0.3;
  var y31=noise(rumore)*height*rum*0.6;
  var y41=-noise(rumore)*100*rum;

  stroke(255, 0 , 0, 70);
  bezier(x1, y11+height/2+200, x2-100, y21+100, x3+150, y31+200, x4, y41+height/2+50);


//blue
  var y12=noise(rumore)*100*rum;
  var y22=-noise(rumore)*height*rum*0.5;
  var y32=noise(rumore)*height*rum*0.5;
  var y42=noise(rumore)*100*rum;

  stroke(0, 0, 255, 100);
  bezier(x1, y12+height/2+100, 300+noise(rumore), y22+200, x3+noise(rumore), y32+400, x4, y42+height/2-150);

  var y121=-noise(rumore)*100*rum;
  var y221=noise(rumore)*height*rum*0.4;
  var y321=-noise(rumore)*height*rum*0.7;
  var y421=noise(rumore)*100*rum;

  stroke(0, 0, 255, 130);
  bezier(x1, y121+height/2+200, 300+noise(rumore)+100, y221+height/2+200, x3+noise(rumore)-50, y321+400, x4, y421+height/2+50);

//green

var y13=-noise(rumore)*100*rum;
var y23=noise(rumore)*height*rum*0.5;
var y33=-noise(rumore)*height*rum*0.5;
var y43=-noise(rumore)*100*rum;

stroke(0, 255, 0, 50);
bezier(x1, y13+height/2+250, x2+300+noise(rumore), y23+200, x3+noise(rumore), y33+400, x4, y43+height/2+150);

var y131=noise(rumore)*100*rum;
var y231=-noise(rumore)*height*rum*0.6;
var y331=noise(rumore)*height*rum*0.6;
var y431=-noise(rumore)*100*rum;

stroke(0, 255, 0, 150);
bezier(x1, y131+height/2, x2+200+noise(rumore), y231-50, x3+noise(rumore)+50, y331+200, x4, y431+height/2);

var y132=-noise(rumore)*100*rum;
var y232=noise(rumore)*height*rum*0.4;
var y332=-noise(rumore)*height*rum*0.2;
var y432=noise(rumore)*100*rum;

stroke(0, 255, 0, 100);
bezier(x1, y132+height/2-200, x2+400+noise(rumore), y232+600, x3+noise(rumore)+50, y332+500, x4, y432+height/2+100);




//tasto play
push();
if(mouseX > (width/2)-100 && mouseX < (width/2)-100+200 && mouseY> height-150 && mouseY<height-100){
  coloreHoverP = 'white'; textHoverP = 'black'
} else{coloreHoverP = 'black'; textHoverP = 'white'}
stroke("white");
strokeWeight(2);
fill(coloreHoverP);
  rect((width/2)-100, height-150, 200, 50, 20);
pop();

  push();
  noStroke();
  fill(textHoverP);
  textAlign(CENTER);
  textSize(20);
  text("Play", (width/2), height-120);
  pop();

//tasto istruzioni
  push();
  if(mouseX > (width/2)-100 && mouseX < (width/2)-100+200 && mouseY>height-250 && mouseY< height-200){
    coloreHoverI = 'white'; textHoverI = 'black'
  } else{coloreHoverI = 'black'; textHoverI = 'white'}

  stroke("white");
  strokeWeight(2);
  fill(coloreHoverI);
    rect((width/2)-100, height-250, 200, 50, 20);
  pop();

    push();
    noStroke();
    fill(textHoverI);
    textAlign(CENTER);
    textSize(20);
    text("Practice", (width/2), height-220);
    pop();

  push();
  noStroke();
  fill("white");
  textAlign(CENTER);
  textSize(80);
  text("THE NORTHERN LIGHTS", (width/2), height/5);
  pop();

  if(mouseX > (width/2)-100 && mouseX < (width/2)-100+200 && mouseY>height-250 && mouseY< height-200 ||mouseX > (width/2)-100 && mouseX < (width/2)-100+200 && mouseY> height-150 && mouseY<height-100  ){
    cursor(HAND)
  } else{cursor(ARROW)}
}








function mousePressed(){
  if (mouseX>=(width/2)-100 && mouseX<=(width/2)+100 && mouseY>=height-150 && mouseY<=height-100){
  window.location.href="index_play.html"
} else if (mouseX>=(width/2)-100 && mouseX<=(width/2)+100 && mouseY>=height-250 && mouseY<=height-200){
window.location.href="index_tutorial.html"
}
}

/*function mousePressed(){
  if (mouseX>=(width/2)-100 && mouseX<=(width/2)+100 && mouseY>=height-250 && mouseY<=height-200){
  window.location.href="index_tutorial.html"
}
}*/

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
