class Game {
    constructor() {

    }
    getState(){
        var gameStateRef  = database.ref('gamestate');
        gameStateRef.on("value",function(data){
           gamestate = data.val();
        })
        console.log(gamestate);
    }
    updateState(state) {
        database.ref('/').update({
            gamestate: state
        });
    }
   async start() {
        if (gamestate === 0) {
            console.log("Hello");
            player = new Player();
            var playerCountref = await database.ref('playercount').once("value");
            if (playerCountref.exists()) {
                playercount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 300);
        car2 = createSprite(300, 300);
        car3 = createSprite(500, 300);
        car4 = createSprite(700, 300);
        cars = [car1, car2, car3, car4];
    }
    play() {
        form.hide();
        Player.getPlayerInfo();
        if (allPlayers !== undefined) {
            var index = 0;
            var x = 175;
            var y = 0;
            for (var plr in allPlayers) {
                index = index + 1;
                x = x + 200
                y = displayHeight - allPlayers[plr].distance
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                if (index === player.index) {
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y;
                }
            }
        }
        if (keyIsDown(UP_ARROW) && player.index !== null) {
               player.distance = player.distance+10;
        }
        drawSprites();
    }
    end() {

    }
}