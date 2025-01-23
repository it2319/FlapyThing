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
  
  submarine = new Submarine(120, canvasHeight / 2, 160, 80);
  background = new Background();

  generateMines();
}

function draw() {
  if (gamePlaying){
    frametime = deltaTime / 1000;
    background.update();
    submarine.update();
    mines.forEach((mine) => mine.update());
  }else if (!gamePlaying){
    background.draw();
    fill(255);
    textSize(50);
    text("Click to start", canvasWidth/2 - 150, canvasHeight/2);
    text("Hold mouse to rise", canvasWidth/2 - 220, canvasHeight/2 + 50);
  }
}

function mousePressed() {
  if (gamePlaying == true){
    Click = true;
    }
}
function mouseReleased(){
    Click = false;
}
function mouseClicked(){
  if (gamePlaying == false){
    gamePlaying = true;
  }
}
