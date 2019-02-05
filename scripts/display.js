var player = new Player(200,200,100,100);
var mode;
//variables
var score = 0;
var level = 1;
var health = 100;
var healthIncrease = 5 / 25;
var teleportRate = 2000;

//ids
var score_id = document.getElementById("score_id");
var level_id = document.getElementById("level_id");
var gameOver = document.getElementById("gameOver");
var gOScore = document.getElementById("scoreCounter");
var gOLevel = document.getElementById("levelCounter");
var game = document.getElementById("game");
var buttons_div = document.getElementsByClassName("buttons_div");
var buttonUp = document.getElementById("buttonUp");
var buttonDown = document.getElementById("buttonDown");
var buttonLeft = document.getElementById("buttonLeft");
var buttonRight = document.getElementById("buttonRight");
var resetButton = document.getElementById("reset");
var switchToGame = document.getElementById("switchToGame");
var menu = document.getElementById("mainmenu");

var heal1 = new Healer();
var heal2 = new Healer();
var heal3 = new Healer();

//enemy list
var enemyList = [
    
];

//difficulty
easy = document.getElementById("easy");
medium = document.getElementById("medium");
hard = document.getElementById("hard");

easy.onclick = function(){
    //velocity
    velX = 5.0;
    velY = 5.0;

    //enemy objects
    for(let i=0; i<10; i++){
        enemyList.push(new Enemy());
    }

    game.style.display = "block";
    mainmenu.style.display = "none";
    mode = "easy";
    run();
}

medium.onclick = function(){
    //velocity
    velX = 7.0;
    velY = 7.0;

    //enemy objects
    for(let i=0; i<20; i++){
        enemyList.push(new Enemy());
    }

    game.style.display = "block";
    mainmenu.style.display = "none";
    mode = "medium";
    run();
}

hard.onclick = function(){
    //velocity
    velX = 10.0;
    velY = 10.0;

    //enemy objects
    for(let i=0; i<30; i++){
        enemyList.push(new Enemy());
    }

    game.style.display = "block";
    mainmenu.style.display = "none";
    mode = "hard";
    run();
}

easy.ontouchstart = function(){
    //velocity
    velX = 5.0;
    velY = 5.0;

    //enemy objects
    for(let i=0; i<10; i++){
        enemyList.push(new Enemy());
    }

    game.style.display = "block";
    mainmenu.style.display = "none";
    mode = "easy";
    run();
}

medium.ontouchstart = function(){
    //velocity
    velX = 7.0;
    velY = 7.0;

    //enemy objects
    for(let i=0; i<20; i++){
        enemyList.push(new Enemy());
    }

    game.style.display = "block";
    mainmenu.style.display = "none";
    mode = "medium";
    run();
}

hard.ontouchstart = function(){
    //velocity
    velX = 10.0;
    velY = 10.0;

    //enemy objects
    for(let i=0; i<30; i++){
        enemyList.push(new Enemy());
    }

    game.style.display = "block";
    mainmenu.style.display = "none";
    mode = "hard";
    run();
}

menu.style.width = window.innerWidth + "px";
menu.style.height = window.innerHeight + "px";

buttonUp.style.width = 75 + "px";
buttonUp.style.height = 75 + "px";

buttonDown.style.width = 75 + "px";
buttonDown.style.height = 75 + "px";

buttonLeft.style.width = 75 + "px";
buttonLeft.style.height = 75 + "px";

buttonRight.style.width = 75 + "px";
buttonRight.style.height = 75 + "px";

function run(mode){
    Engine.tick(tick);
    Engine.zoom(100);
}

function tick(){
    if(health < 100){
        healthIncrease = 5 / 4;
    } else {
        healthIncrease = 0;
    }
    if(mode == "easy"){
        easyMode();
    }

    if(mode == "medium"){
        mediumMode();
    }

    if(mode == "hard"){
        hardMode();
    }
    Engine.clear();
    if(health > 0){
        score += 25;
    }
    scoreEdit();
    leveler();
    healthBar();
    spawnPlayer();
    spawnEnemy();
    movement();
    for(let i in enemyList){
        let enemy = enemyList[i];
        enemy.update(canvas);
    }
    detectingMobile();
    randomizeheal();
    Engine.tick(tick);
}

function scoreEdit(){
    score_id.innerHTML = "Score: " + score;
}

function leveler(){
    level = score / 1000;
    level_id.innerHTML = "Level: " + Math.floor(level); 

}

function healthBar(){
    Engine.color("green");
    Engine.createRect(0, 60, health * 2, 20);
}

function spawnPlayer(){
    player.create();
}

function spawnEnemy(){
    for(let i in enemyList){
        let enemy = enemyList[i];
        enemy.create(enemy.x, enemy.y, 50, 50);
    }
}

document.addEventListener('keydown',handleKeyDown,false);
document.addEventListener('keyup',handleKeyUp,false);

function handleKeyUp(event){
    switch(event.keyCode){
        case 87:
        player.up=false;
        break;
        case 83:
        player.down=false;
        break;
        case 68:
        player.right=false;
        break;
        case 65:
        player.left=false;
        break;
    }
}

function handleKeyDown(event){
    switch(event.keyCode){
        case 87:
        player.up=true;
        break;
        case 83:
        player.down=true;
        break;
        case 68:
        player.right=true;
        break;
        case 65:
        player.left=true;
        break;
    }
}

function movement(){
    if(player.up && player.y >= 0){
        player.y -= 20;
    }

    if(player.down && player.y <= window.innerHeight - 125){
        player.y += 20;
    }

    if(player.left && player.x >= 0){
        player.x -= 20;
    }

    if(player.right && player.x <= window.innerWidth - 125){
        player.x += 20;
    }
}

//Difficulty Modes
function easyMode(){
    if(health <= 0){
        gameOver.style.display = "block";
        game.style.display = "none";
        gOScore.innerHTML = "Score: " + score;
        gOLevel.innerHTML = "Level: " + Math.floor(level);
    }

    //Hurtful Enemies
    if (player.x < enemyList[0].x + 50 &&
        player.x + 100 > enemyList[0].x &&
        player.y < enemyList[0].y + 50 &&
        player.y + 100 > enemyList[0].y) {
            health -= 5 / 4;
    }

    if (player.x < enemyList[5].x + 50 &&
        player.x + 100 > enemyList[5].x &&
        player.y < enemyList[5].y + 50 &&
        player.y + 100 > enemyList[5].y) {
            health -= 5 / 4;
    }

    if (player.x < heal1.x + 50 &&
        player.x + 100 > heal1.x &&
        player.y < heal1.y + 50 &&
        player.y + 100 > heal1.y) {
            health += healthIncrease;
    }
}

function mediumMode(){
    if(health <= 0){
        gameOver.style.display = "block";
        game.style.display = "none";
        gOScore.innerHTML = "Score: " + score;
        gOLevel.innerHTML = "Level: " + Math.floor(level);
    }
    
    //Hurtful Enemies
    if (player.x < enemyList[0].x + 50 &&
        player.x + 100 > enemyList[0].x &&
        player.y < enemyList[0].y + 50 &&
        player.y + 100 > enemyList[0].y) {
            health -= 5 / 4;
    }

    if (player.x < enemyList[5].x + 50 &&
        player.x + 100 > enemyList[5].x &&
        player.y < enemyList[5].y + 50 &&
        player.y + 100 > enemyList[5].y) {
            health -= 5 / 4;
    }

    if (player.x < enemyList[10].x + 50 &&
        player.x + 100 > enemyList[10].x &&
        player.y < enemyList[10].y + 50 &&
        player.y + 100 > enemyList[10].y) {
            health -= 5 / 4;
    }

    if (player.x < enemyList[15].x + 50 &&
        player.x + 100 > enemyList[15].x &&
        player.y < enemyList[15].y + 50 &&
        player.y + 100 > enemyList[15].y) {
            health -= 5 / 4;
    }

    if (player.x < heal1.x + 50 &&
        player.x + 100 > heal1.x &&
        player.y < heal1.y + 50 &&
        player.y + 100 > heal1.y) {
            health += healthIncrease;
    }

    if (player.x < heal2.x + 50 &&
        player.x + 100 > heal2.x &&
        player.y < heal2.y + 50 &&
        player.y + 100 > heal2.y) {
            health += healthIncrease;
    }
}

function hardMode(){
    if(health <= 0){
        gameOver.style.display = "block";
        game.style.display = "none";
        gOScore.innerHTML = "Score: " + score;
        gOLevel.innerHTML = "Level: " + Math.floor(level);
    }

    //Hurtful Enemies
    if (player.x < enemyList[0].x + 50 &&
        player.x + 100 > enemyList[0].x &&
        player.y < enemyList[0].y + 50 &&
        player.y + 100 > enemyList[0].y) {
            health -= 5 / 4;
    }

    if (player.x < enemyList[5].x + 50 &&
        player.x + 100 > enemyList[5].x &&
        player.y < enemyList[5].y + 50 &&
        player.y + 100 > enemyList[5].y) {
            health -= 5 / 4;
    }

    if (player.x < enemyList[10].x + 50 &&
        player.x + 100 > enemyList[10].x &&
        player.y < enemyList[10].y + 50 &&
        player.y + 100 > enemyList[10].y) {
            health -= 5 / 4;
    }

    if (player.x < enemyList[15].x + 50 &&
        player.x + 100 > enemyList[15].x &&
        player.y < enemyList[15].y + 50 &&
        player.y + 100 > enemyList[15].y) {
            health -= 5 / 4;
    }

    if (player.x < enemyList[20].x + 50 &&
        player.x + 100 > enemyList[20].x &&
        player.y < enemyList[20].y + 50 &&
        player.y + 100 > enemyList[20].y) {
            health -= 5 / 4;
    }

    if (player.x < enemyList[25].x + 50 &&
        player.x + 100 > enemyList[25].x &&
        player.y < enemyList[25].y + 50 &&
        player.y + 100 > enemyList[25].y) {
            health -= 5 / 4;
    }

    if (player.x < heal1.x + 50 &&
        player.x + 100 > heal1.x &&
        player.y < heal1.y + 50 &&
        player.y + 100 > heal1.y) {
            health += healthIncrease;
    }

    if (player.x < heal2.x + 50 &&
        player.x + 100 > heal2.x &&
        player.y < heal2.y + 50 &&
        player.y + 100 > heal2.y) {
            health += healthIncrease;
    }

    if (player.x < heal3.x + 50 &&
        player.x + 100 > heal3.x &&
        player.y < heal3.y + 50 &&
        player.y + 100 > heal3.y) {
            health += healthIncrease;
    }
}

function detectingMobile(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // some code..

        healthIncrease = 5 / 5;
        heal1.width = 50;
        heal1.height = 50;

        heal2.width = 50;
        heal2.height = 50;

        heal3.width = 50;
        heal3.height = 50;
        teleportRate = 1000;

        //display buttons
        if(health > 0){
            buttonUp.style.display = "block";
            buttonDown.style.display = "block";
            buttonLeft.style.display = "block";
            buttonRight.style.display = "block";
        } else {
            buttonUp.style.display = "none";
            buttonDown.style.display = "none";
            buttonLeft.style.display = "none";
            buttonRight.style.display = "none";
        }
    }       
}


buttonUp.ontouchstart = function(){
        player.up = true;
}

buttonUp.ontouchend = function(){
    player.up = false;
}

buttonDown.ontouchstart = function(){
        player.down = true;
}

buttonDown.ontouchend = function(){
    player.down = false;
}

buttonLeft.ontouchstart = function(){
        player.left = true;
}

buttonLeft.ontouchend = function(){
    player.left = false;
}

buttonRight.ontouchstart = function(){
        player.right = true;
}

buttonRight.ontouchend = function(){
    player.right = false;
}

resetButton.onclick = function(){window.location.reload()}

resetButton.ontouchstart = function(){window.location.reload()}

setInterval(function randomize(){
    if(mode == "easy"){
        heal1.x = Math.floor(Math.random() * canvas.width) + 1;
        heal1.y = Math.floor(Math.random() * canvas.width) + 1;
    }

    if(mode == "medium"){
        heal1.x = Math.floor(Math.random() * canvas.width) + 1;
        heal1.y = Math.floor(Math.random() * canvas.width) + 1;

        heal2.x = Math.floor(Math.random() * canvas.width) + 1;
        heal2.y = Math.floor(Math.random() * canvas.width) + 1;
    }

    if(mode == "hard"){
        heal1.x = Math.floor(Math.random() * canvas.width) + 1;
        heal1.y = Math.floor(Math.random() * canvas.width) + 1;

        heal2.x = Math.floor(Math.random() * canvas.width) + 1;
        heal2.y = Math.floor(Math.random() * canvas.width) + 1;

        heal3.x = Math.floor(Math.random() * canvas.width) + 1;
        heal3.y = Math.floor(Math.random() * canvas.width) + 1;
    }
},1000);

function randomizeheal(){
    if(mode == "easy"){
        heal1.create();
    }

    if(mode == "medium"){
        heal1.create();
        heal2.create();
    }

    if(mode == "hard"){
        heal1.create();
        heal2.create();
        heal3.create();
    }
}