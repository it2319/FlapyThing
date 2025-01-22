class Submarine {
  constructor(x, y, width, height, boost, gravity, yVelocity,speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.gravity = 125;
    this.speed = 125;


    this.img = IMAGES["submarine"];
  }

  update() {
    this.move();
    this.draw();
  }
  move(){
      if (Click == true) {
          this.y -= this.speed * frametime;
      } else {
          this.y += this.gravity * frametime; 
      }


      if (this.y + this.height / 2 > canvasHeight) {
          this.y = canvasHeight - this.height / 2;
      } else if (this.y - this.height / 2 < 0) {
          this.y = this.height / 2;
      }
  }

  draw() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.width, this.height);
  }
}


class Mine {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = IMAGES["mine"];
  }
  draw() {
    imageMode(CENTER);
    image(IMAGES.mine, this.x, this.y, this.width, this.height);
  }
}
class Background{
  constructor(){
    this.img = IMAGES["background"];
    this.x = 0;
    this.speed = 150;
  }

  update(){
    this.move();
    this.draw();
  }

  move(){
    if (gamePlaying){
    this.x -= this.speed * frametime
  }
}

  draw(){
    imageMode(CORNER);
    image(this.img, this.x, 0, canvasWidth, canvasHeight);
    image(this.img, this.x + canvasWidth, 0, canvasWidth, canvasHeight);
    if(this.x <= -canvasWidth){
      this.x = 0;
    }
  }
}
