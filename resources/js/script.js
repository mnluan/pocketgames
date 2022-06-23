let container = document.querySelector("#container");
let poke = document.querySelector("#poke");
let block = document.querySelector("#block");
let char = document.querySelector("#char");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let Hscore = document.querySelector("#Hscore");
let gameOver = document.querySelector("#gameOver");

let interval = null;
let playerScore = 0;
let High = 0;
let isOver = true;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
    if(playerScore > High){
        High = playerScore;
        Hscore.innerHTML = `High Score: <b>${playerScore}</b>`;
    }
}

//start Game
window.addEventListener("keydown", (start) => {

    if ((start.code === "Space") && (isOver === true)) {
        isOver = false;
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        char.classList.add("charActive");
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";
        playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});


//Evento para pular
window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp")
        if (poke.classList != "pokeActive") {
            poke.classList.add("pokeActive");

            // Impede de pular apos 0.5 segundos
            setTimeout(() => {
                poke.classList.remove("pokeActive");
            }, 500);
        }
});

//'Game Over' 
let result = setInterval(() => {
    let pokeBottom = parseInt(getComputedStyle(poke).getPropertyValue("bottom"));

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));

    if (pokeBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {

        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        char.classList.remove("charActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        isOver = true
        playerScore = 0;
    }
}, 10);
