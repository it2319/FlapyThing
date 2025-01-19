function generateMines() {
}
function checkCollisions() {}

function main(){
    if (gameOver) {
        return;
    }

    frametime = Date.now() - frametime/1000;
    Background.update();

    player.update();
    for (let i = 0; i < mines.length; i++) {
        mines[i].update();
    }
    if (!gameOver) {
        requestAnimationFrame(main);
    }
}