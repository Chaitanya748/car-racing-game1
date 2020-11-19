var database;
var form;
var playerCount;
var player;
var game, gamestate;
var car1, car2,car3,car4, cars, allPlayers;
function setup() {
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
    background("white");
    if (playerCount === 4) {
        game.updateState(1);
    }
    if (gamestate===1) {
        game.start();
    }
}   