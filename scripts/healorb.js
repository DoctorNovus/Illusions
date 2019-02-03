class Healer{
    constructor(){
        this.x = Math.floor(Math.random() * canvas.width) + 1;
        this.y = Math.floor(Math.random() * canvas.width) + 1;
        this.width = 30;
        this.height = 30;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    create(){
        Engine.color("green");
        this.ctx.fillRect(this.x,this.y, this.width, this.height);
        
    }
}