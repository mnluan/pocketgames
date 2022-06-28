var player = document.getElementById("player");
var x = document.getElementById("zubatAudio");

function playZubatSound(){
    x.play();
}

window.addEventListener("keydown", (e) => {
    var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    var top = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    
    //move left and right
    if (e.key == "ArrowLeft" && left > 0) {
      player.style.left = left - 10 + "px";
    }
    else if (e.key == "ArrowRight" && left <= 500) {
        player.style.left = left + 10 + "px";
    }

    //move Up and Down
    if (e.key == "ArrowUp" && top > 0) {
        player.style.top = top - 10 + "px";
    }
    else if (e.key == "ArrowDown" && top  <= 400) {
        player.style.top = top + 10 + "px";
    }

    //Attack
    if (e.code == "Space" || e.key == " "){
        playZubatSound();
    }
});

var generate = setInterval(()=>{
    var enemy = document.createElement("div");
    enemy.classList.add("enemies");

    //get the top of enemy to place it in random position
    var enemyTop = parseInt(window.getComputedStyle(enemy).getPropertyValue("top"));

    //generate value between enemy position to 400px in top
    enemy.style.top = Math.floor(Math.random()*400) + "px"

    board.appendChild(enemy);

}, 2500);

var moveEnemies = setInterval(()=>{
    var enemies = document.getElementsByClassName("enemies");

    if(enemies != undefined){
        for (var i = 0; i < enemies.length; i++){
            var enemy = enemies[i]; //getting each enemies
            var enemyLeft = parseInt(
                window.getComputedStyle(enemy).getPropertyValue("left")
            );
            enemy.style.left = enemyLeft + -20 + "px"
        }
    }
}, 400);