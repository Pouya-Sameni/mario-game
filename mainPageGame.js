var canvas = document.getElementById("initialGame");
var ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();
add_linkedin();
add_github();
add_resume();


function add_linkedin() { 
    var linkedin = new Image(); 
    linkedin.src = "Images/Linkedin.png"; 
    linkedin.onload = function (){
        ctx.drawImage(linkedin,75,50,50,50);
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
