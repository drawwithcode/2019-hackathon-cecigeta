var mySong;
var myLogo;
var analyzer;
var c ;
var myAltri;
var myAltri2;
var myAltri3;
var volume = 0;


function preload(){

mySong = loadSound("./assets/TG1_new.mp3");
myLogo = loadImage("./assets/logo.png");
myAltri = loadImage("./assets/altri.png");
myAltri2 = loadImage("./assets/altri.png");
myAltri3 = loadImage("./assets/altri.png");


}

function setup() {

  createCanvas(windowWidth,windowHeight);

  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);

  angleMode(DEGREES);
  frameRate(12);

}

function draw() {

  background('#8bb5d8');

  for (var i = 0; i < 15; i ++) {

    var x = random() * volume +100;
    var y = random() * volume +100;
    image(myAltri, x, y, myAltri.width / 7, myAltri.height / 7);
    imageMode(CENTER)

  }

  for (var k = 0; k < 15; k ++) {

    var x = random() * volume + 500;
    var y = random() * volume + 600;
    image(myAltri2, x, y, myAltri2.width / 7, myAltri2.height / 7);
    imageMode(CENTER)
  }

  for (var f = 0; f < 15; f ++) {

    var x = random() * volume + 1200;
    var y = random() * volume + 300;
    image(myAltri3, x, y, myAltri3.width / 7, myAltri3.height / 7);
    imageMode(CENTER)
  }

  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);

  image(myLogo, width/2, height/2, volume + 200 , volume + 170);
  imageMode(CENTER);

  c++;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('#8bb5d8');
}

function reset() {
  c = 0;
}

function mouseClicked() {

if (mySong.isPlaying() == false ) {
      mySong.play();
}

    reset();
}
