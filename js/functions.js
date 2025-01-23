function generateMines() {
    var mines = [];
    for (var i = 0; i < 5; i++) {
        mines.push(new Mine(random(400, 1100), random(100, 500), 100, 100));
    }
    return mines;
}
function checkCollisions() {

}