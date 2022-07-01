<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Main Menu</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="manifest" href="./manifest.webmanifest">
    <link rel="stylesheet" href="./resources/css/mainmenu.css">
    <link rel="icon" type="image/x-icon" href="./assets/favicon.ico">
</head>
<body>
    <div id="selectgames">
        <a href="./zubatincave.php" class="game1">
            <div id="game1">
                <div id="score1">HighScore: 0</div>
            </div>
        </a>
        
        <a href="./pokerunning.php" class="game2">
            <div id="game2">
                <div id="score2">HighScore: 0</div>
            </div>
        </a>
        
        <a href="./snake.php" class="game3">
            <div id="game3">
                <div id="score3">HighScore: 0</div>
            </div>
        </a>
        
    </div>

    <div class="sociais">
        <a href="https://www.linkedin.com/in/mnluan/" target="_blank"><img src="./resources/img/linkedin.svg" alt="LinkedIN" class="social"></a>
        <a href="https://github.com/mnluan" target="_blank"><img src="./resources/img/github.svg" alt="GitHub" class="social"></a>
        <a href="https://mnluan.github.io/portfolio/index.html" target="_blank"><img src="./resources/img/portfolio.svg" alt="Portfolio" class="social"></a>
        <p class="text"><b>Project developed by: <br>Luan Moraes do Nascimento</b></p>
        <br>Pok&eacute;mon images and names &copy; 1995 - <?php echo date("Y") ?> Nintendo Game Freak.
    </div>
    
    <script src="./resources/js/mainmenu.js"></script>
    <script src="./index.js"></script>
</body>
</html>