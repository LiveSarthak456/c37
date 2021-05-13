var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount == 4) {
  game.update(1);
  }

  //when game stat is 1, 4 players are there - start the game by calling play function
  if (gameState == 1) {
  game.play();
  }


}

//we will register our player
//4 player game = as soon as 4 players register -start our game