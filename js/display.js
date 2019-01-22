<<<<<<< HEAD
var display = new Engine.Main();
var player = new Player();
var enemy = new Enemies();
var color = new Engine.Color();

//variables
var score = 0;
var level = 1;

var one_velX = 11.0 * 4;
var one_velY = 11.0 * 4;

var two_velX = 10.0 * 4;
var two_velY = 10.0 * 4;

var three_velX = 9.0 * 4;
var three_velY = 9.0 * 4;

var four_velX = 8.0 * 4;
var four_velY = 8.0 * 4;

var five_velX = 7.0 * 4;
var five_velY = 7.0 * 4;

var six_velX = 6.0 * 4;
var six_velY = 6.0 * 4;

var seven_velX = 5.0 * 4;
var seven_velY = 5.0 * 4;

var eight_velX = 4.0 * 4;
var eight_velY = 4.0 * 4;

var nine_velX = 3.0 * 4;
var nine_velY = 3.0 * 4;

var ten_velX = 2.0 * 4;
var ten_velY = 2.0 * 4;

var eleven_velX = 1.0 * 4;
var eleven_velY = 1.0 * 4;

var health = 100;

//ids
var score_id = document.getElementById("score_id");
var level_id = document.getElementById("level_id");
var gameOver = document.getElementById("gameOver");
var gOScore = document.getElementById("scoreCounter");
var gOLevel = document.getElementById("levelCounter");
var game = document.getElementById("game");
var buttons_div = document.getElementsByClassName("buttons");
var buttons = document.getElementById("buttons");

//gameover
gameOver.style.left = canvas.width / 2 + "px";
gameOver.style.top = canvas.height / 2 + "px";
//player objects
player_x = 0;
player_y = 0;

//enemy objects
enemy1_x = 300;
enemy1_y = 300;

enemy2_x = 300;
enemy2_y = 300;

enemy3_x = 300;
enemy3_y = 300;

enemy4_x = 300;
enemy4_y = 300;

enemy5_x = 300;
enemy5_y = 300;

enemy6_x = 300;
enemy6_y = 300;

enemy7_x = 300;
enemy7_y = 300;

enemy8_x = 300;
enemy8_y = 300;

enemy9_x = 300;
enemy9_y = 300;

enemy10_x = 300;
enemy10_y = 300;

enemy11_x = 300;
enemy11_y = 300;

enemy12_x = 300;
enemy12_y = 300;

enemy13_x = 300;
enemy13_y = 300;

enemy14_x = 300;
enemy14_y = 300;

enemy15_x = 300;
enemy15_y = 300;

enemy16_x = 300;
enemy16_y = 300;

enemy17_x = 300;
enemy17_y = 300;

enemy18_x = 300;
enemy18_y = 300;

enemy19_x = 300;
enemy19_y = 300;

enemy20_x = 300;
enemy20_y = 300;

enemy21_x = 300;
enemy21_y = 300;

enemy22_x = 300;
enemy22_y = 300;

//player objects
player_x = 200;
player_y = 200;

display.tick(tick);

function tick(){
    display.clear();
    if(health > 0){
        score += 25;
    }
    scoreEdit();
    leveler();
    healthBar();
    spawnPlayer();
    spawnEnemy();
    moveEnemies();
    movement();
    collision();
    detectingMobile();
    display.tick(tick);

}

function scoreEdit(){
    score_id.innerHTML = "Score: " + score;
}

function leveler(){
    level = score / 1000;
    level_id.innerHTML = "Level: " + Math.floor(level); 

}

function healthBar(){
    display.color(color.green);
    display.createRect(0, 60, health * 2, 20);
}

function spawnPlayer(){
    player.create(player_x, player_y, 100, 100);
}

function spawnEnemy(){
    if(level >= 1){
        enemy.create(enemy1_x, enemy1_y, 50, 50);
    }
    if(level >= 2){
        enemy.create(enemy2_x * 0.5, enemy2_y * 0.5, 50, 50);
    }
    if(level >= 3){
        enemy.create(enemy3_x, enemy3_y, 50, 50);
    }
    if(level >= 4){
        enemy.create(enemy4_x, enemy4_y, 50, 50);
    }
    if(level >= 5){
        enemy.create(enemy5_x, enemy5_y, 50, 50);
    }
    if(level >= 6){
        enemy.create(enemy6_x, enemy6_y, 50, 50);
    }
    if(level >= 7){
        enemy.create(enemy7_x, enemy7_y, 50, 50);
    }
    if(level >= 8){
        enemy.create(enemy8_x, enemy8_y, 50, 50);
    }
    if(level >= 9){
        enemy.create(enemy9_x, enemy9_y, 50, 50);
    }
    if(level >= 10){
        enemy.create(enemy10_x, enemy10_y, 50, 50);
    }
    if(level >= 11){
        enemy.create(enemy11_x, enemy11_y, 50, 50);
    }
    if(level >= 12){
        enemy.create(enemy12_x, enemy12_y, 50, 50);
    }
    if(level >= 13){
        enemy.create(enemy13_x * 0.5, enemy13_y * 0.5, 50, 50);
    }
    if(level >= 14){
        enemy.create(enemy14_x, enemy14_y, 50, 50);
    }
    if(level >= 15){
        enemy.create(enemy15_x, enemy15_y, 50, 50);
    }
    if(level >= 16){
        enemy.create(enemy16_x, enemy16_y, 50, 50);
    }
    if(level >= 17){
        enemy.create(enemy17_x, enemy17_y, 50, 50);
    }
    if(level >= 18){
        enemy.create(enemy18_x, enemy18_y, 50, 50);
    }
    if(level >= 19){
        enemy.create(enemy19_x, enemy19_y, 50, 50);
    }
    if(level >= 20){
        enemy.create(enemy20_x, enemy20_y, 50, 50);
    }
    if(level >= 21){
        enemy.create(enemy21_x, enemy21_y, 50, 50);
    }
    if(level >= 22){
        enemy.create(enemy22_x, enemy22_y, 50, 50);
    }
}

function moveEnemies(){
    
    //enemy 1

    enemy1_x += one_velX;
    enemy1_y += one_velY;

    if((enemy1_y <= 0) || (enemy1_y >= canvas.height - 50)){
        one_velY *= -1.0;
    }

    if((enemy1_x <= 0) || (enemy1_x >= canvas.width - 50)){
        one_velX *= -1.0;
    }

    //enemy 2
    enemy2_x += two_velX;
    enemy2_y += two_velY;

    if((enemy2_y <= 0) || (enemy2_y >= canvas.height - 50)){
        two_velY *= -1.0;
    }

    if((enemy2_x <= 0) || (enemy2_x >= canvas.width - 50)){
        two_velX *= -1.0;
    }

    //enemy 3

    enemy3_x += three_velX;
    enemy3_y += three_velY;

    if((enemy3_y <= 0) || (enemy3_y >= canvas.height - 50)){
        three_velY *= -1.0;
    }

    if((enemy3_x <= 0) || (enemy3_x >= canvas.width - 50)){
        three_velX *= -1.0;
    }

    //enemy 4
    enemy4_x += four_velX;
    enemy4_y += four_velY;

    if((enemy4_y <= 0) || (enemy4_y >= canvas.height - 50)){
        four_velY *= -1.0;
    }

    if((enemy4_x <= 0) || (enemy4_x >= canvas.width - 50)){
        four_velX *= -1.0;
    }

    //enemy 5
    enemy5_x += five_velX;
    enemy5_y += five_velY;

    if((enemy5_y <= 0) || (enemy5_y >= canvas.height - 50)){
        five_velY *= -1.0;
    }

    if((enemy5_x <= 0) || (enemy5_x >= canvas.width - 50)){
        five_velX *= -1.0;
    }

    //enemy 6

    enemy6_x += six_velX;
    enemy6_y += six_velY;

    if((enemy6_y <= 0) || (enemy6_y >= canvas.height - 50)){
        six_velY *= -1.0;
    }

    if((enemy6_x <= 0) || (enemy6_x >= canvas.width - 50)){
        six_velX *= -1.0;
    }

    //enemy 7
    enemy7_x += seven_velX;
    enemy7_y += seven_velY;

    if((enemy7_y <= 0) || (enemy7_y >= canvas.height - 50)){
        seven_velY *= -1.0;
    }

    if((enemy7_x <= 0) || (enemy7_x >= canvas.width - 50)){
        seven_velX *= -1.0;
    }

    //enemy 8

    enemy8_x += eight_velX;
    enemy8_y += eight_velY;

    if((enemy8_y <= 0) || (enemy8_y >= canvas.height - 50)){
        eight_velY *= -1.0;
    }

    if((enemy8_x <= 0) || (enemy8_x >= canvas.width - 50)){
        eight_velX *= -1.0;
    }

    //enemy 9
    enemy9_x += nine_velX;
    enemy9_y += nine_velY;

    if((enemy9_y <= 0) || (enemy9_y >= canvas.height - 50)){
        nine_velY *= -1.0;
    }

    if((enemy9_x <= 0) || (enemy9_x >= canvas.width - 50)){
        nine_velX *= -1.0;
    }

    //enemy 10
    enemy10_x += ten_velX;
    enemy10_y += ten_velY;

    if((enemy10_y <= 0) || (enemy10_y >= canvas.height - 50)){
        ten_velY *= -1.0;
    }

    if((enemy10_x <= 0) || (enemy10_x >= canvas.width - 50)){
        ten_velX *= -1.0;
    }

    //enemy 11
    enemy11_x += eleven_velX;
    enemy11_y += eleven_velY;

    if((enemy11_y <= 0) || (enemy11_y >= canvas.height - 50)){
        eleven_velY *= -1.0;
    }

    if((enemy11_x <= 0) || (enemy11_x >= canvas.width - 50)){
        eleven_velX *= -1.0;
    }

    enemy11_x += one_velX;
    enemy11_y += one_velY;


    enemy12_x += one_velX;
    enemy12_y += one_velY;


    enemy13_x += one_velX;
    enemy13_y += one_velY;


    enemy14_x += one_velX;
    enemy14_y += one_velY;


    enemy15_x += one_velX;
    enemy15_y += one_velY;


    enemy16_x += one_velX;
    enemy16_y += one_velY;


    enemy17_x += one_velX;
    enemy17_y += one_velY;


    enemy18_x += one_velX;
    enemy18_y += one_velY;


    enemy19_x += one_velX;
    enemy19_y += one_velY;


    enemy20_x += one_velX;
    enemy20_y += one_velY;


    enemy21_x += one_velX;
    enemy21_y += one_velY;

    enemy22_x += one_velX;
    enemy22_y += one_velY;


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
    if(player.up && player_y >= 0){
        player_y -= 20;
    }

    if(player.down && player_y <= window.innerHeight - 125){
        player_y += 20;
    }

    if(player.left && player_x >= 0){
        player_x -= 20;
    }

    if(player.right && player_x <= window.innerWidth - 125){
        player_x += 20;
    }
}

function collision(){
    if(health <= 0){
        gameOver.style.display = "block";
        game.style.display = "none";
        gOScore.innerHTML = "Score: " + score;
        gOLevel.innerHTML = "Level: " + level;
    }

    if (player_x < enemy1_x + 50 &&
        player_x + 100 > enemy1_x &&
        player_y < enemy1_y + 50 &&
        player_y + 100 > enemy1_y) {
            health -= 5 / 4;
     }
}

function detectingMobile(){
    if("touchstart" in window){
        buttons_div.style.display = "block";
    }
=======
var display = new Engine.Main();
var player = new Player();
var enemy = new Enemies();
var color = new Engine.Color();

//variables
var score = 0;
var level = 1;

var one_velX = 11.0 * 4;
var one_velY = 11.0 * 4;

var two_velX = 10.0 * 4;
var two_velY = 10.0 * 4;

var three_velX = 9.0 * 4;
var three_velY = 9.0 * 4;

var four_velX = 8.0 * 4;
var four_velY = 8.0 * 4;

var five_velX = 7.0 * 4;
var five_velY = 7.0 * 4;

var six_velX = 6.0 * 4;
var six_velY = 6.0 * 4;

var seven_velX = 5.0 * 4;
var seven_velY = 5.0 * 4;

var eight_velX = 4.0 * 4;
var eight_velY = 4.0 * 4;

var nine_velX = 3.0 * 4;
var nine_velY = 3.0 * 4;

var ten_velX = 2.0 * 4;
var ten_velY = 2.0 * 4;

var eleven_velX = 1.0 * 4;
var eleven_velY = 1.0 * 4;

var health = 100;

//ids
var score_id = document.getElementById("score_id");
var level_id = document.getElementById("level_id");
var gameOver = document.getElementById("gameOver");
var gOScore = document.getElementById("scoreCounter");
var gOLevel = document.getElementById("levelCounter");
var game = document.getElementById("game");

//gameover
gameOver.style.left = canvas.width / 2 + "px";
gameOver.style.top = canvas.height / 2 + "px";
//player objects
player_x = 0;
player_y = 0;

//enemy objects
enemy1_x = 300;
enemy1_y = 300;

enemy2_x = 300;
enemy2_y = 300;

enemy3_x = 300;
enemy3_y = 300;

enemy4_x = 300;
enemy4_y = 300;

enemy5_x = 300;
enemy5_y = 300;

enemy6_x = 300;
enemy6_y = 300;

enemy7_x = 300;
enemy7_y = 300;

enemy8_x = 300;
enemy8_y = 300;

enemy9_x = 300;
enemy9_y = 300;

enemy10_x = 300;
enemy10_y = 300;

enemy11_x = 300;
enemy11_y = 300;

enemy12_x = 300;
enemy12_y = 300;

enemy13_x = 300;
enemy13_y = 300;

enemy14_x = 300;
enemy14_y = 300;

enemy15_x = 300;
enemy15_y = 300;

enemy16_x = 300;
enemy16_y = 300;

enemy17_x = 300;
enemy17_y = 300;

enemy18_x = 300;
enemy18_y = 300;

enemy19_x = 300;
enemy19_y = 300;

enemy20_x = 300;
enemy20_y = 300;

enemy21_x = 300;
enemy21_y = 300;

enemy22_x = 300;
enemy22_y = 300;

//player objects
player_x = 200;
player_y = 200;

display.tick(tick);

function tick(){
    display.clear();
    if(health > 0){
        score += 25;
    }
    scoreEdit();
    leveler();
    healthBar();
    spawnPlayer();
    spawnEnemy();
    moveEnemies();
    movement();
    collision();
    display.tick(tick);

}

function scoreEdit(){
    score_id.innerHTML = "Score: " + score;
}

function leveler(){
    level = score / 1000;
    level_id.innerHTML = "Level: " + Math.floor(level); 

}

function healthBar(){
    display.color(color.green);
    display.createRect(0, 60, health * 2, 20);
}

function spawnPlayer(){
    player.create(player_x, player_y, 100, 100);
}

function spawnEnemy(){
    if(level >= 1){
        enemy.create(enemy1_x, enemy1_y, 50, 50);
    }
    if(level >= 2){
        enemy.create(enemy2_x * 0.5, enemy2_y * 0.5, 50, 50);
    }
    if(level >= 3){
        enemy.create(enemy3_x, enemy3_y, 50, 50);
    }
    if(level >= 4){
        enemy.create(enemy4_x, enemy4_y, 50, 50);
    }
    if(level >= 5){
        enemy.create(enemy5_x, enemy5_y, 50, 50);
    }
    if(level >= 6){
        enemy.create(enemy6_x, enemy6_y, 50, 50);
    }
    if(level >= 7){
        enemy.create(enemy7_x, enemy7_y, 50, 50);
    }
    if(level >= 8){
        enemy.create(enemy8_x, enemy8_y, 50, 50);
    }
    if(level >= 9){
        enemy.create(enemy9_x, enemy9_y, 50, 50);
    }
    if(level >= 10){
        enemy.create(enemy10_x, enemy10_y, 50, 50);
    }
    if(level >= 11){
        enemy.create(enemy11_x, enemy11_y, 50, 50);
    }
    if(level >= 12){
        enemy.create(enemy12_x, enemy12_y, 50, 50);
    }
    if(level >= 13){
        enemy.create(enemy13_x * 0.5, enemy13_y * 0.5, 50, 50);
    }
    if(level >= 14){
        enemy.create(enemy14_x, enemy14_y, 50, 50);
    }
    if(level >= 15){
        enemy.create(enemy15_x, enemy15_y, 50, 50);
    }
    if(level >= 16){
        enemy.create(enemy16_x, enemy16_y, 50, 50);
    }
    if(level >= 17){
        enemy.create(enemy17_x, enemy17_y, 50, 50);
    }
    if(level >= 18){
        enemy.create(enemy18_x, enemy18_y, 50, 50);
    }
    if(level >= 19){
        enemy.create(enemy19_x, enemy19_y, 50, 50);
    }
    if(level >= 20){
        enemy.create(enemy20_x, enemy20_y, 50, 50);
    }
    if(level >= 21){
        enemy.create(enemy21_x, enemy21_y, 50, 50);
    }
    if(level >= 22){
        enemy.create(enemy22_x, enemy22_y, 50, 50);
    }
}

function moveEnemies(){
    
    //enemy 1

    enemy1_x += one_velX;
    enemy1_y += one_velY;

    if((enemy1_y <= 0) || (enemy1_y >= canvas.height - 50)){
        one_velY *= -1.0;
    }

    if((enemy1_x <= 0) || (enemy1_x >= canvas.width - 50)){
        one_velX *= -1.0;
    }

    //enemy 2
    enemy2_x += two_velX;
    enemy2_y += two_velY;

    if((enemy2_y <= 0) || (enemy2_y >= canvas.height - 50)){
        two_velY *= -1.0;
    }

    if((enemy2_x <= 0) || (enemy2_x >= canvas.width - 50)){
        two_velX *= -1.0;
    }

    //enemy 3

    enemy3_x += three_velX;
    enemy3_y += three_velY;

    if((enemy3_y <= 0) || (enemy3_y >= canvas.height - 50)){
        three_velY *= -1.0;
    }

    if((enemy3_x <= 0) || (enemy3_x >= canvas.width - 50)){
        three_velX *= -1.0;
    }

    //enemy 4
    enemy4_x += four_velX;
    enemy4_y += four_velY;

    if((enemy4_y <= 0) || (enemy4_y >= canvas.height - 50)){
        four_velY *= -1.0;
    }

    if((enemy4_x <= 0) || (enemy4_x >= canvas.width - 50)){
        four_velX *= -1.0;
    }

    //enemy 5
    enemy5_x += five_velX;
    enemy5_y += five_velY;

    if((enemy5_y <= 0) || (enemy5_y >= canvas.height - 50)){
        five_velY *= -1.0;
    }

    if((enemy5_x <= 0) || (enemy5_x >= canvas.width - 50)){
        five_velX *= -1.0;
    }

    //enemy 6

    enemy6_x += six_velX;
    enemy6_y += six_velY;

    if((enemy6_y <= 0) || (enemy6_y >= canvas.height - 50)){
        six_velY *= -1.0;
    }

    if((enemy6_x <= 0) || (enemy6_x >= canvas.width - 50)){
        six_velX *= -1.0;
    }

    //enemy 7
    enemy7_x += seven_velX;
    enemy7_y += seven_velY;

    if((enemy7_y <= 0) || (enemy7_y >= canvas.height - 50)){
        seven_velY *= -1.0;
    }

    if((enemy7_x <= 0) || (enemy7_x >= canvas.width - 50)){
        seven_velX *= -1.0;
    }

    //enemy 8

    enemy8_x += eight_velX;
    enemy8_y += eight_velY;

    if((enemy8_y <= 0) || (enemy8_y >= canvas.height - 50)){
        eight_velY *= -1.0;
    }

    if((enemy8_x <= 0) || (enemy8_x >= canvas.width - 50)){
        eight_velX *= -1.0;
    }

    //enemy 9
    enemy9_x += nine_velX;
    enemy9_y += nine_velY;

    if((enemy9_y <= 0) || (enemy9_y >= canvas.height - 50)){
        nine_velY *= -1.0;
    }

    if((enemy9_x <= 0) || (enemy9_x >= canvas.width - 50)){
        nine_velX *= -1.0;
    }

    //enemy 10
    enemy10_x += ten_velX;
    enemy10_y += ten_velY;

    if((enemy10_y <= 0) || (enemy10_y >= canvas.height - 50)){
        ten_velY *= -1.0;
    }

    if((enemy10_x <= 0) || (enemy10_x >= canvas.width - 50)){
        ten_velX *= -1.0;
    }

    //enemy 11
    enemy11_x += eleven_velX;
    enemy11_y += eleven_velY;

    if((enemy11_y <= 0) || (enemy11_y >= canvas.height - 50)){
        eleven_velY *= -1.0;
    }

    if((enemy11_x <= 0) || (enemy11_x >= canvas.width - 50)){
        eleven_velX *= -1.0;
    }

    enemy11_x += one_velX;
    enemy11_y += one_velY;


    enemy12_x += one_velX;
    enemy12_y += one_velY;


    enemy13_x += one_velX;
    enemy13_y += one_velY;


    enemy14_x += one_velX;
    enemy14_y += one_velY;


    enemy15_x += one_velX;
    enemy15_y += one_velY;


    enemy16_x += one_velX;
    enemy16_y += one_velY;


    enemy17_x += one_velX;
    enemy17_y += one_velY;


    enemy18_x += one_velX;
    enemy18_y += one_velY;


    enemy19_x += one_velX;
    enemy19_y += one_velY;


    enemy20_x += one_velX;
    enemy20_y += one_velY;


    enemy21_x += one_velX;
    enemy21_y += one_velY;

    enemy22_x += one_velX;
    enemy22_y += one_velY;


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
    if(player.up && player_y >= 0){
        player_y -= 20;
    }

    if(player.down && player_y <= window.innerHeight - 125){
        player_y += 20;
    }

    if(player.left && player_x >= 0){
        player_x -= 20;
    }

    if(player.right && player_x <= window.innerWidth - 125){
        player_x += 20;
    }
}

function collision(){
    if(health <= 0){
        gameOver.style.display = "block";
        game.style.display = "none";
        gOScore.innerHTML = "Score: " + score;
        gOLevel.innerHTML = "Level: " + level;
    }

    if (player_x < enemy1_x + 50 &&
        player_x + 100 > enemy1_x &&
        player_y < enemy1_y + 50 &&
        player_y + 100 > enemy1_y) {
            health -= 5 / 4;
     }
>>>>>>> 2c985afb0bfe40fe2de016c679372c46b46fafef
}