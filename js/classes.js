class Submarine {
  constructor(x, y, width, height, boost, gravity, yVelocity,speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.boost = 300;
    this.gravity = 700;
    this.yVelocity = 0;
    this.speed = 150;


    this.img = IMAGES["submarine"];
  }

  update() {
    this.input();
    this.applyGravity();
    this.move();
    this.hitbox();
  }

  input() {
    
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
    this.x -= this.speed * frametime
  }

  draw(){
    c.drawImage(this.img, this.x, 0, canvaswidth, canvasheight);
    c.drawImage(this.img, this.x + canvaswidth, 0, canvaswidth, canvasheight);
    if(this.x <= -canvaswidth){
      this.x = 0;
    }
  }
}
