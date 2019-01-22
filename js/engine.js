class Engine {
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');
    }

}

Engine.Main = class Main{
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    create() {
        this.ctx.beginPath();
    }

    createRect(x, y, width, height) {
        this.ctx.fillRect(x, y, width, height);
    }

    color(hex_code){
        this.ctx.fillStyle = hex_code;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    tick(func) {
        requestAnimationFrame(func);
    }

    locate(x,y) {
        this.ctx.fillText(("X: " + x + ", Y: "  + y), x, y);
    }
}

Engine.Color = class Color {
    constructor(){
        this.red = "#FF0000"
        this.orange = "#FFA500"
        this.yellow = "#FFFF00"
        this.green = "#00FF00"
        this.blue = "#0000FF"
        this.purple = "#FF00FF"
    }

    red(){
        return this.red;
    }
    
    orange(){
        return this.orange;
    }

    yellow(){
        return this.yellow;
    }

    green(){
        return this.green;
    }

    blue(){
        return this.blue;
    }

    purple(){
        return this.purple;
    }
}
