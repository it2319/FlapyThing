
const canvas = document.getElementById("game");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const IMAGES = {
    submarine:null,
    mine:null,
    background:null,
};
function preload(){
    loadImages();
}
function loadImages(){
    for (let i = 0; i < Object.keys(IMAGES).length; i++){
        img_name = Object.keys(IMAGES)[i];
        IMAGES[img_name] = loadImage(`../img/${img_name}.png`);
    }
    }

    /*let mines = []

    mines.push(new Mine(100, 100, 50, 50))

class Mine{
    constructor(x, y, width, height, mine){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.mine = IMAGES.mine;
    }
    someMine(){
        this.x = Math.random() * 100;
        this.y = Math.random() * 100;
        this.width = Math.random() * 100;
        this.height = Math.random() * 100;
        draw();
    }
    draw(){
        ctx.drawImage(IMAGES.mine, this.x, this.y, this.width, this.height);
    }
}
    */
function setup(){
class Submarine{
    constructor(x,y,height,width,player){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.player_img = player_img;
}
    displaySubmarine(){
        ctx.drawImage(this.x, this.y, this.width, this.height,IMAGES.submarine);
    }
}
}
function draw(){

    let submarine1 = new Submarine(100, 100, 50, 50, `IMAGES.submarine`);

    submarine1.displaySubmarine();
}