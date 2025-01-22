// !!! www.remove.bg !!!

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
  background = new Background();

}

function draw() {
  frametime = deltaTime / 1000;
  background.update();
  submarine.draw();
  
}

