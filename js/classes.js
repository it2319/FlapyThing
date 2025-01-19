class Submarine {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.img = IMAGES["submarine"];
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
