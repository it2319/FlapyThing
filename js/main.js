
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

    let mines = []

    mines.push(new Mine(100, 100, 50, 50))

class Mine{
    constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    }
    draw(){
        ctx.drawImage(IMAGES.mine, this.x, this.y, this.width, this.height);
    }
}

Mine.draw(100,50,30,30);