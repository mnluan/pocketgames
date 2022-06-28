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