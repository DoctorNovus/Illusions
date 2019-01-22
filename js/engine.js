class Engine {
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');
    }

    static createRect(x,y,width,height){
        this.ctx.fillRect(x,y,width,height);
    }

    static color(hex_code){
        this.ctx.fillStyle = hex_code;
    }

    static clear(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    }

    static tick(func){
        requestAnimationFrame(func);
    }

    static locate(x,y) {
        this.ctx.fillText(("X: " + x + ", Y: "  + y), x, y);
    }

}
