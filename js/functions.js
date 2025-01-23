function generateMines() {
  mines = []; // Clear existing mines

  // Define fixed x positions for the mines
  const xPositions = [
    canvasWidth + 100,
    canvasWidth + 300,
    canvasWidth + 500,
    canvasWidth + 700,
    canvasWidth + 900,
    canvasWidth + 1100,
  ];

  for (let i = 0; i < xPositions.length; i++) {
    let x = xPositions[i]; // Fixed x position
    let y = random(100, canvasHeight - 100); // Random y position

    mines.push(new Mine(x, y, 100, 100)); // Add the mine with fixed x and random y
  }
}
function checkCollisions() {

}