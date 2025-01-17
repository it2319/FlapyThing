
const canvas = document.getElementById("game");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

function drawPlayer(){
    ctx.fillStyle = `rgb(82,5,10)`;
    ctx.fillRect(20, 20, 100, 100);
}

drawPlayer();