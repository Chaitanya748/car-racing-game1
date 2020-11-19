class Player {
    constructor() {
        this.name = null;
        this.index = null;
        this.distance = 0;
    }
    getCount() {
        var pcref = database.ref('playercount');
        pcref.on("value", function (data) {
            playerCount = data.val();
        })
    }
    updateCount(count) {
        database.ref ('/').update({
            playercount:count
        }) ;
    }
    update () {
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo () {
        var plinforef = database.ref('players');
        plinforef.on("value",(data)=>{
        allPlayers = data.val();
        })
    }
}