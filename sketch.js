var mySong;
var myLogo;
var analyzer;
var c ;
var myAltri;
var volume = 0;


function preload(){

mySong = loadSound("./assets/TG1_new.mp3");
myLogo = loadImage("./assets/logo.png");
myAltri = loadImage("./assets/altri.png");


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
