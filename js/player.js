class Player{
    constructor() {
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
    }

    create(x, y, width, height){
        Engine.color("blue");
        Engine.createRect(x, y, width, height);
    }

    test(x, y){
        Engine.locate(x,y);
    }
}