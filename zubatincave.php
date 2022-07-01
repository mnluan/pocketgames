<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="./assets/zubat_favicon.ico">
    <link rel="stylesheet" href="./resources/css/zubatincave.css">
    <title>Zubat in Cave</title>
</head>
<body>
    <div id="back">
		<a href="./index.php"><img src="./resources/img/back.svg" alt="Back to main menu"></a>
	</div>
    <audio id="zubatAudio">
        <source src="./resources/audio/zubatCry.mp3" type="audio/mp3">
    </audio>
    <div class="info">
        <span>To move Gastly use Arrows Up and Down, to attack press Space</span>
    </div>
    <div id="game">
        
        <div id="background"></div>
        
        <div id="board">
            <div id="gameOver"><div id="title">Game Over</div><p>Press Enter to Try Again</p></div>
            <div id="enemies" class="enemies"></div>
            <div id="player" class="player"></div>
        </div>
    </div>
    
    <div class="game-score">
        <span id="Hscore">High Score: 0</span><br>
        <span id="score-count">Score: 0</span>
    </div>


    <div class="sociais">
        <a href="https://www.linkedin.com/in/mnluan/" target="_blank"><img src="./resources/img/linkedin.svg" alt="LinkedIN" class="social"></a>
        <a href="https://github.com/mnluan" target="_blank"><img src="./resources/img/github.svg" alt="GitHub" class="social"></a>
        <a href="https://mnluan.github.io/portfolio/index.html" target="_blank"><img src="./resources/img/portfolio.svg" alt="Portfolio" class="social"></a>
        <p class="text"><b>Project developed by: <br>Luan Moraes do Nascimento</b></p>
        <br>Pok&eacute;mon images and names &copy; 1995 - <?php echo date("Y") ?> Nintendo Game Freak.
    </div>
    
    <script src="./resources/js/zubatincave.js" defer></script>
</body>
</html>