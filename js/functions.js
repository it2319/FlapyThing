function generateMines() {
  mines = []; // Clear existing mines

  // Define x positions for mines
  const xPositions = [
    canvasWidth + 300,
    canvasWidth + 550,
    canvasWidth + 800,
    canvasWidth + 1050,
    canvasWidth + 1200,
  ];

  for (let i = 0; i < xPositions.length; i++) {
    let x = xPositions[i]; //set x position
    let y = random(100, canvasHeight - 100); // Random y position

    mines.push(new Mine(x, y, 100, 100)); // Add the mine
  }
}
function checkCollisions(submarine,mine) {
  //hitboxes made in classes
  const subHitbox = submarine.getHitbox();
  const mineHitbox = mine.getHitbox();

  return (
    //checking for collision
    subHitbox.x < mineHitbox.x + mineHitbox.width &&
    subHitbox.x + subHitbox.width > mineHitbox.x &&
    subHitbox.y < mineHitbox.y + mineHitbox.height &&
    subHitbox.y + subHitbox.height > mineHitbox.y
  );
}
//restart button
function createRestartButton() {
  let button = createButton("Restart");
  button.position(canvasWidth / 2 - 50, canvasHeight / 2 + 50);
  
  button.style("background-color", "black"); // button color
  button.style("color", "red");//text color
  
  button.mousePressed(() => {
    button.remove();
    resetGame();
  });
}

function resetGame() {
  gameOver = false;
  gamePlaying = false;
  submarine = new Submarine(120, canvasHeight / 2, 160, 80); // Reset submarine
  generateMines(); // Regenerate mines
  Click = false; // Reset player input
}