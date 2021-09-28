var canvas = document.getElementById("initialGame");
var ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();
add_img();

function add_img() { 
    var img = new Image(); 
    img.src = "Images/Linkedin.png"; 
    img.onload = function (){
        ctx.drawImage(img,75,50,50,50);
    }
    
}
