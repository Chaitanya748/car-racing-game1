class Form {
    constructor() {
        this.title = createElement('h1', 'Car Racing Game');
        this.input = createInput("Please enter your Username");
        this.button = createButton("Go");
        this.message = createElement('h2');
    }
    hide() {
        this.title.hide();
        this.input.hide();
        this.message.hide();
        this.button.hide();
    }

    display() {
        this.title.position(450, 100);
        this.input.position(330, 200);
        this.button.position(330, 230);
        var name = this.input.value();

        this.button.mousePressed(() => {
            if (name.length !== 0) {
                this.input.hide();
                this.button.hide();
                player.name = name;
                playerCount = playerCount + 1;
                player.updateCount(playerCount);
                player.index = playerCount;
                console.log(this.input.size());
                this.message.html("Hello " + name + " Welcome To The Game");
                this.message.position(350, 250);
            }

        });
    }
}