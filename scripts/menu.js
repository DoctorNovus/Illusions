var title = document.getElementById("title");

var play = document.getElementById("play")
var controls = document.getElementById("controls");

var controlsmenu = document.getElementById("controlsmenu");
var diff = document.getElementById("difficulties");

var back = document.getElementById("back");

var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");

var discord = document.getElementById("discord");

//title config
title.style.width = window.innerWidth - 20 + "px";
title.style.height = 100 + "px";

//play config
play.style.border = "1px solid blue";
play.style.borderTopLeftRadius = 20 + "px";
play.style.borderBottomRightRadius = 20 + "px";

play.style.position = "relative";
play.style.top = 5 + "px";

play.style.width = window.innerWidth - 20 + "px";
play.style.height = 50 + "px";

play.style.backgroundColor = "skyblue";
play.style.color = "white";

//controls configurations
controls.style.border = "1px solid blue";
controls.style.borderTopLeftRadius = 20 + "px";
controls.style.borderBottomRightRadius = 20 + "px";

controls.style.position = "relative";
controls.style.top = 20 + "px";

controls.style.width = window.innerWidth - 20 + "px";
controls.style.height = 50 + "px";

controls.style.backgroundColor = "skyblue";
controls.style.color = "white";

//controls menu config

//diff config

//back config
back.style.left = window.innerWidth / 2 - 50 + "px";
back.style.color = "white";
back.style.backgroundColor = "blue";
back.style.height = 30 + "px";


play.onclick = function(){
    diff.style.display = "block";
    back.style.display = "block";

    play.style.display = "none";
    controls.style.display = "none";
}

controls.onclick = function(){
    controlsmenu.style.display = "block";
    back.style.display = "block";

    play.style.display = "none";
    controls.style.display = "none";
}

back.onclick = function(){
    diff.style.display = "none";
    back.style.display = "none";
    controlsmenu.style.display = "none";

    play.style.display = "block";
    controls.style.display = "block";
}

//difficulties - easy, medium, hard

easy.style.backgroundColor = "green";
medium.style.backgroundColor = "yellow";
hard.style.backgroundColor = "red";

easy.style.color = "white";
medium.style.color = "black";
hard.style.color = "white";

//easy
easy.style.borderBottomLeftRadius = 20 + "px";
easy.style.borderBottomRightRadius = 20 + "px";
easy.style.borderTopLeftRadius = 20 + "px";
easy.style.borderTopRightRadius = 20 + "px";

easyWidth = window.innerWidth / 4;
easy.style.width = easyWidth + "px";
easy.style.height = easyWidth + "px";

//medium
medium.style.borderBottomLeftRadius = 20 + "px";
medium.style.borderBottomRightRadius = 20 + "px";
medium.style.borderTopLeftRadius = 20 + "px";
medium.style.borderTopRightRadius = 20 + "px";

mediumWidth = window.innerWidth / 4;
medium.style.width = mediumWidth + "px";
medium.style.height = mediumWidth + "px";

medium.style.borderBottomLeftRadius = 20 + "px";
medium.style.borderBottomRightRadius = 20 + "px";
medium.style.borderTopLeftRadius = 20 + "px";
medium.style.borderTopRightRadius = 20 + "px";

mediumWidth = window.innerWidth / 4;
medium.style.width = mediumWidth + "px";
medium.style.height = mediumWidth + "px";

//hard
hard.style.borderBottomLeftRadius = 20 + "px";
hard.style.borderBottomRightRadius = 20 + "px";
hard.style.borderTopLeftRadius = 20 + "px";
hard.style.borderTopRightRadius = 20 + "px";

hardWidth = window.innerWidth / 4;
hard.style.width = hardWidth + "px";
hard.style.height = hardWidth + "px";