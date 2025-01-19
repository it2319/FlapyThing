// !!! www.remove.bg/
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let click = false;
let rising = false;

function preload() {
  // load images
  for (let i = 0; i < Object.keys(IMAGES).length; i++) {
    img_name = Object.keys(IMAGES)[i];
    IMAGES[img_name] = loadImage(`../img/${img_name}.png`);
  }
}

function setup() {
  // P5 canvas
  createCanvas(canvasWidth, canvasHeight);

  // Mines
  // xx

  // Submarine
  submarine = new Submarine(80, canvasHeight / 2, 160, 80);

}

function draw() {

    imageMode(CORNER);
    image(IMAGES["background"], 0, 0, canvasWidth, canvasHeight);

  submarine.draw();
  
}
