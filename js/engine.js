class Engine {
    constructor(){
        Engine.canvas = document.getElementById("canvas");
        Engine.ctx = this.canvas.getContext('2d');
    }

    static createRect(x,y,width,height){
        Engine.ctx.fillRect(x,y,width,height);
    }

    static color(hex_code){
        Engine.ctx.fillStyle = hex_code;
    }

    static clear(){
        Engine.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    }

    static tick(func){
        requestAnimationFrame(func);
    }

    static locate(x,y) {
        Engine.ctx.fillText(("X: " + x + ", Y: "  + y), x, y);
    }

}
