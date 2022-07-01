<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PokeRunning</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./resources/css/pokerunning.css">
    <link rel="icon" type="image/x-icon" href="./assets/pika_favicon.ico">
</head>
<body>

    <div id="back">
		<a href="./index.php"><img src="./resources/img/back.svg" alt="Back to main menu"></a>
	</div>

    <div id="corpo">
        <div id="container" class="game">
            <div id="poke">
                <img src="./assets/pikachu-running.gif" alt="poke">
            </div>
            <div id="block">
                <img src="./assets/dugtrio.gif" alt="blocks">
            </div>
            <div id="char">
                <img src="./assets/char.gif" alt="char">
            </div>
            <div id="road">
                <img src="./assets/ground.png" alt="road">
            </div>
            <div id="cloud">
                <img src="./assets/cloud.png" alt="cloud">
            </div>
            <div id="Hscore" class="HS">High Score: <b>00</b></div>
            <div id="score">Score <b>00</b></div>
            <div id="gameOver">Game Over</div>
            <div class="Info">Space = Start<br>ArrowUp = Jump</div>
        </div>
    
        <div class="sociais">
            <a href="https://www.linkedin.com/in/mnluan/" target="_blank"><img src="./resources/img/linkedin.svg" alt="LinkedIN" class="social"></a>
            <a href="https://github.com/mnluan" target="_blank"><img src="./resources/img/github.svg" alt="GitHub" class="social"></a>
            <a href="https://mnluan.github.io/portfolio/index.html" target="_blank"><img src="./resources/img/portfolio.svg" alt="Portfolio" class="social"></a>
            <p class="text"><b>Project developed by: <br>Luan Moraes do Nascimento</b></p>
            <br>Pok&eacute;mon images and names &copy; 1995 - <?php echo date("Y") ?> Nintendo Game Freak.
        </div>
    </div>
    
    <script src="./resources/js/pokerunning.js"></script>

</body>
</html>