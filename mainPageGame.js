var canvas = document.getElementById("initialGame");
var ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

var mario_x = 0;
var mario_y = 250
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);



function add_linkedin() { 
    var linkedin = new Image(); 
    linkedin.src = "Images/Linkedin.png"; 
    linkedin.onload = function (){
        ctx.drawImage(linkedin,75,50,50,50);
    }
    
}


function keyDownHandler(e) {
    if(e.code  == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.code == 'ArrowLeft') {
        leftPressed = true;
    }
    else if (e.code == 'Space')
    {
        spacePressed = true;
    }
}
function keyUpHandler(e) {
    if(e.code == 'ArrowRight') {
        rightPressed = false;
    }
    else if(e.code == 'ArrowLeft') {
        leftPressed = false;
    }
    else if (e.code == 'Space')
    {
        spacePressed = false;
    }
}

function add_github() { 
    var github = new Image(); 
    github.src = "Images/github.png"; 
    github.onload = function (){
        ctx.drawImage(github,200,50,50,50);
    }
}
    function add_resume() { 
        var resume = new Image(); 
        resume.src = "Images/resume_logo.png"; 
        resume.onload = function (){
            ctx.drawImage(resume,350,50,40,55);
        }
}

function add_mario(x, y) { 
    var mario1 = new Image(); 
    mario1.src = "Images/mario1.png"; 

    var mario2 = new Image(); 
    mario2.src = "Images/mario2.png"; 
    mario1.onload = function (){
        ctx.drawImage(mario1,mario_x,mario_y,40,55);
    }
}

function draw ()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    add_linkedin();
    add_github();
    add_resume();
    add_mario();

    if(rightPressed && mario_x < canvas.width-20) {
        mario_x += 7;
    }
    else if(leftPressed && mario_x > 0) {
        mario_x -= 7;
    }
    else if(spacePressed && mario_x > 0) {
        mario_y -= 50;
    }

 
    
}

setInterval(draw,100);
