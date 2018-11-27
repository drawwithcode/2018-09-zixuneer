var myLoc;
var beijLat = 39.9385466;
var beijLon = 116.1172678;

var img;


function preload(){
  myLoc = getCurrentPosition();
  img = loadImage('assets/map.png');
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0, windowWidth, windowHeight);
  //background('pink');
  textFont('Georgia');
  textSize(15);
  fill(236, 112, 90);
  text('Milano:', 365, 160);
  text(myLoc.latitude, 425, 160);
  text(myLoc.longitude, 425, 180);

  text('Beijing:', 1020, 250);
  text(beijLat, 1080, 250);
  text(beijLon, 1080, 270);

}

function draw() {
  var distance = calcGeoDistance(myLoc.latitude, myLoc.longitude, beijLat, beijLon);

  noStroke();
  ellipse(575, 185, 35);
  ellipse(975, 220, 35);

  if(mouseX>560&&mouseX<590&&mouseY>160&mouseY<200 || mouseX>960&&mouseX<990&&mouseY>215&mouseY<230){
    textSize(18);
    text('Distance:', 550 ,540);
    text(distance, 630 ,540);
    stroke(236, 112, 90);
    strokeWeight(2);
    line(575, 185, 975, 220);
  }

}
