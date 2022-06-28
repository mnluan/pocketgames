var player = document.getElementById("player");
var x = document.getElementById("zubatAudio");
var music = document.getElementById("music");
let score = 0;

function testStorage(){
    if(localStorage.High_zubat == null ){
        localStorage.High_zubat = 0;
        document.getElementById("Hscore").innerHTML = `High Score: ${localStorage.High_zubat}`;
    }else{
        document.getElementById("Hscore").innerHTML = `High Score: ${localStorage.High_zubat}`;
    }
}

function playZubatSound(){
    x.play();
}

window.addEventListener("keydown", (e) => {
    var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    var top = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    music.play();
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
        var bullet = document.createElement("div");
        bullet.classList.add("bullets");
        board.appendChild(bullet);

        var movebullet = setInterval(() => {
            var enemies = document.getElementsByClassName("enemies");

            for (var i = 0; i < enemies.length; i++) {
                var enemy = enemies[i];
                if (enemy != undefined) {
                    var enemybound = enemy.getBoundingClientRect();
                    var bulletbound = bullet.getBoundingClientRect();

                    //Condition to check whether the enemy and the bullet are at the same position
                    if (
                        (bulletbound.left >= enemybound.left) &&
                        (bulletbound.right <= enemybound.right) &&
                        (bulletbound.top >= enemybound.top) &&
                        (bulletbound.bottom <= enemybound.bottom)
                    ) {
                        enemy.parentElement.removeChild(enemy); //Just removing that particular enemy;
                        playZubatSound();
                        //Score
                        score++;
                        document.getElementById("score-count").innerHTML = `Score: ${score}`;
                        if(score > localStorage.High_zubat){
                            localStorage.High_zubat = score;
                            document.getElementById("Hscore").innerHTML = `High Score: ${localStorage.High_zubat}`;
                        }
                    }
                }
            }
            var bulletleft = parseInt(
                window.getComputedStyle(bullet).getPropertyValue("left")
            );

            //Stops the bullet from moving outside the gamebox
            if (bulletleft >= 600) {
                clearInterval(movebullet);
            }

            bullet.style.top = top + "px"; //always be placed at the right of player
            bullet.style.left = bulletleft + 3 + "px";
        });
    }
});

var generate = setInterval(()=>{
    var enemy = document.createElement("div");
    enemy.classList.add("enemies");

    //generate value between enemy position to 400px in top
    enemy.style.top = Math.floor(Math.random()*400) + "px"

    board.appendChild(enemy);

}, 1800);

var moveEnemies = setInterval(()=>{
    var enemies = document.getElementsByClassName("enemies");

    if(enemies != undefined){
        for (var i = 0; i < enemies.length; i++){
            var enemy = enemies[i]; //getting each enemies
            var enemyLeft = parseInt(
                window.getComputedStyle(enemy).getPropertyValue("left")
            );
            if (enemyLeft < -10){
                alert("Game Over");
                clearInterval(moveEnemies);
                window.location.reload();
            }
            enemy.style.left = enemyLeft + -20 + "px"
        }
    }
}, 200);

testStorage();
