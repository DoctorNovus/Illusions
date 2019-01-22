class Enemies{
    constructor(){
        this.main = new Engine.Main();
    }

    create(x,y,width,height){
        this.x = x;
        this.y = y;
        this.main.create();
        this.main.color(color.red);
        this.main.createRect(this.x, this.y, width, height);
        this.velX = 5.0;
        this.velY = 5.0;
    }
}
