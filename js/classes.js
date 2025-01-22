class Submarine {
  constructor(x, y, width, height, boost, gravity, yVelocity,speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.boost = 30;
    this.gravity = 70;
    this.yVelocity = 0;
    this.speed = 15;


    this.img = IMAGES["submarine"];
  }

  update() {
    this.input();
    this.applyGravity();
    this.move();
    this.hitbox();
  }

  input() {
    if (mouseClicked == true) {
    this.yVelocity = this.boost;
  }
}
  applyGravity() {
    this.yVelocity -= this.gravity * frametime;
  // Update the submarine's y position based on yVelocity
    this.y += this.yVelocity * frametime;

  // Optional: Prevent the submarine from going out of bounds
    if (this.y + this.height / 2 > canvasHeight) {
        this.y = canvasHeight - this.height / 2;
        this.yVelocity = 0; // Stop falling if it hits the bottom
    } else if (this.y - this.height / 2 < 0) {
        this.y = this.height / 2;
        this.yVelocity = 0; // Stop moving up if it hits the top
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
    this.x -= this.speed * frametime
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
