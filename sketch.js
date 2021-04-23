var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1_image , car2_image , car3_image , car4_image , track_image
var FinishedPlayers = 0
function preload(){
  car1_image = loadImage ("../images/car1.png")
  car2_image = loadImage ("../images/car2.png")
  car3_image = loadImage ("../images/car3.png")
  car4_image = loadImage ("../images/car4.png")
  track_image = loadImage ("../images/track.jpg")
  bronze_image = loadImage ("../images/bronze.png")
  silver_image = loadImage ("../images/silver.png")
  gold_image = loadImage ("../images/gold.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2&&FinishedPlayers==4){
    clear();
   game.end() 
   
  }
}
