const IMAGES = {
  submarine: null,
  mine: null,
  background: null,
};

let mines = [];
let submarine = null;

let canvasWidth = 1200;
let canvasHeight = 600;

let frametime;
let gamePlaying = false;
let Click = false;