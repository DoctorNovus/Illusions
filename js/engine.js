class Engine {
    constructor(){
        window.canvas = document.getElementById("canvas");
        window.ctx = this.canvas.getContext('2d');
    }

    static createRect(x,y,width,height){
        window.ctx.fillRect(x,y,width,height);
    }

    static color(hex_code){
        window.ctx.fillStyle = hex_code;
    }

    static clear(){
        window.ctx.clearRect(0,0,window.canvas.width,window.canvas.height);
    }

    static tick(func){
        requestAnimationFrame(func);
    }

    static locate(x,y) {
        window.ctx.fillText(("X: " + x + ", Y: "  + y), x, y);
    }

}
