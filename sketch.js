var balloon,balloonSprite;
var BG;
var database;

function preload() {
  BG = loadImage("IMG/Hot Air Ballon-01.png");

  balloon = loadAnimation("IMG/Hot Air Ballon-02.png", "IMG/Hot Air Ballon-03.png", "IMG/Hot Air Ballon-04.png")
}

function setup() {
  createCanvas(1600, 800);

  database = firebase.database();

  var balloonPosition = database.ref('ball/position');
  balloonPosition.on('value', readPosition, showError);

  balloonSprite = createSprite(250,650,10,10);
  balloonSprite.addAnimation("bln",balloon)
}

function draw() {
  background(BG);

  if (keyDown(LEFT_ARROW)) {
    balloonSprite.x = balloonSprite.x - 10;
  }
  else if (keyDown(RIGHT_ARROW)) {
    balloonSprite.x = balloonSprite.x + 10;
  }
  else if (keyDown(UP_ARROW)) {
    balloonSprite.y = balloonSprite.y - 10;

  }
  else if (keyDown(DOWN_ARROW)) {
    balloonSprite.y = balloonSprite.y + 10;
  }

  drawSprites();
}

function changePosition(x, y) {
  balloonSprite.x = balloonSprite.x + x;
  balloonSprite.y = balloonSprite.y + y;
} 