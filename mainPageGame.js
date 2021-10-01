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
var draw_mario1 = true;

//Images - OPEN
var linkedin = new Image(); 
linkedin.src = "Images/Linkedin.png"; 
var github = new Image(); 
github.src = "Images/github.png"; 
var resume = new Image(); 
resume.src = "Images/resume_logo.png"; 
var mario1 = new Image(); 
mario1.src = "Images/mario1.png"; 
var mario2 = new Image(); 
mario2.src = "Images/mario2.png"; 
//////////////////////////////

//Load Images
github.onload = function (){
    ctx.drawImage(github,200,50,50,50);
}
linkedin.onload = function (){
    ctx.drawImage(linkedin,75,50,50,50);
}
resume.onload = function (){
    ctx.drawImage(resume,350,50,40,55);
}
mario1.onload = function (){
    ctx.drawImage(mario1,mario_x,mario_y,40,55);
}
mario2.onload = function (){
    ctx.drawImage(mario2,mario_x,mario_y,40,55);
}



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

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

function redraw_All() { 
 
        ctx.drawImage(linkedin,75,50,50,50);
        ctx.drawImage(github,200,50,50,50);
        ctx.drawImage(resume,350,50,40,55);
}



function add_mario() { 
    
    

    if (draw_mario1 === true){
        ctx.drawImage(mario1,mario_x,mario_y,40,55);
        
    }
    else{
        ctx.drawImage(mario2,mario_x,mario_y,40,55);
       
    }

    
    if (rightPressed || leftPressed)
    {
        if (x <= 10)

        {
            x++;
        }
        else{
            console.log(x);
            x = 0;
            draw_mario1 = !draw_mario1;
            
        }
    }
   
    
    
}

function draw ()
{
    
    ctx.clearRect(0,0, canvas.width, canvas.height);
    redraw_All();
    add_mario();

    if(rightPressed && mario_x < canvas.width-40) {
        mario_x += 7;
    }
    else if(leftPressed && mario_x > 0) {
        mario_x -= 7;
    }
    else if(spacePressed && mario_x > 0) {
        mario_y -= 50;
    }

    
    requestAnimationFrame(draw);
    

}

draw();