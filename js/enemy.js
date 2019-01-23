class Enemy{
    constructor(){
        this.x = 100;
        this.y = 100;
    }

    create(x,y,width,height){
        this.x = x;
        this.y = y;
        Engine.color("red");
        Engine.createRect(this.x, this.y, width, height);
        this.velX = 5.0;
        this.velY = 5.0;
    }

    update(one_velX, one_velY, canvas){
            this.velX = one_velX;
            this.velY = one_velY;
            this.x += this.velX;
            this.y += this.velY;
    
            if((this.y <= 0) || (this.y >= canvas.height - 50)){
                    this.velY *= -1.0;
            }
    
            if((this.x <= 0) || (this.x >= canvas.width - 50)){
                    this.velX *= -1.0;
            }
    }
}
