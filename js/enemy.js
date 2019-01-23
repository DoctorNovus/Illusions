class Enemy{
    constructor(){
        this.x = Math.floor(Math.random() * 1000) + 1;
        this.y = Math.floor(Math.random() * 1000) + 1;
    }

    create(x,y,width,height){
        this.x = x;
        this.y = y;
        Engine.color("red");
        Engine.createRect(this.x, this.y, width, height);
        this.velX = -5;
        this.velY = -5;
    }

    update(one_velX, one_velY, canvas){
           if((this.y <= 10) || (this.y >= canvas.height - 50)){
                    one_velY *= -1;
            }
    
            if((this.x <= 10) || (this.x >= canvas.width - 50)){
                    one_velX *= -1;
            }

            this.x += one_velX;
            this.y += one_velY;
             
    }
}
