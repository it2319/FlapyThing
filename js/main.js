
const canvas = document.getElementById("game");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const IMAGES = {
    submarine:null,
    mine:null,
    background:null,
};
function loadImages(){
    loadImages();
}
function loadImages(){
    for (let i = 0; i < Object.keys(IMAGES).length; i++){
        img_name = Object.keys(IMAGES)[i];
        IMAGES[img_name] = loadImage(`../img/${img_name}.png`);
    }
    }
function drawPlayer(){
    ctx.fillStyle = `rgb(82,5,10)`;
    ctx.fillRect(20, 20, 100, 100);
}

drawPlayer();