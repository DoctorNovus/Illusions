class Enemies{

    create(x,y,width,height){
        this.x = x;
        this.y = y;
        Engine.color("red");
        Engine.createRect(this.x, this.y, width, height);
        this.velX = 5.0;
        this.velY = 5.0;
    }
}
