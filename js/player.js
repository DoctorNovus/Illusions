class Player{
    constructor() {
        this.main = new Engine.Main();
        this.color = new Engine.Color();
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
    }

    create(x, y, width, height){
        this.main.create();
        this.main.color(color.blue);
        this.main.createRect(x, y, width, height);
    }

    test(x, y){
        this.main.locate(x,y);
    }
}