function generateMines() {
  mines = []; // Clear existing mines

  // Define fixed x positions for the mines
  const xPositions = [
    canvasWidth + 300,
    canvasWidth + 550,
    canvasWidth + 800,
    canvasWidth + 1050,
    canvasWidth + 1200,
  ];

  for (let i = 0; i < xPositions.length; i++) {
    let x = xPositions[i]; // Fixed x position
    let y = random(100, canvasHeight - 100); // Random y position

    mines.push(new Mine(x, y, 100, 100)); // Add the mine with fixed x and random y
  }
}
function checkCollisions(submarine,mine) {
  const subHitbox = submarine.getHitbox();
  const mineHitbox = mine.getHitbox();

  return (
    subHitbox.x < mineHitbox.x + mineHitbox.width &&
    subHitbox.x + subHitbox.width > mineHitbox.x &&
    subHitbox.y < mineHitbox.y + mineHitbox.height &&
    subHitbox.y + subHitbox.height > mineHitbox.y
  );
}
function createRestartButton() {
  let button = createButton("Restart");
  button.position(canvasWidth / 2 - 50, canvasHeight / 2 + 50);
  
  button.style("background-color", "black");
  button.style("color", "red");
  
  button.mousePressed(() => {
    button.remove(); // Remove the button
    resetGame(); // Restart the game
  });
}

function resetGame() {
  gameOver = false;
  gamePlaying = false;
  submarine = new Submarine(120, canvasHeight / 2, 160, 80); // Reset submarine
  generateMines(); // Regenerate mines
  Click = false; // Reset player input
}