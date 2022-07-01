<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="./resources/css/snake.css">
	<link rel="icon" type="image/x-icon" href="./assets/ekans_favicon.ico">
	<title>snakE</title>
</head>
<body>
    <audio id="ekansAudio">
        <source src="./resources/audio/ekansCry.mp3" type="audio/mp3">
    </audio>
	<div id="back">
		<a href="./index.php"><img src="./resources/img/back.svg" alt="Back to main menu"></a>
	</div>
	<div id="game">
		<div class="game-header">
			<div class="game-score">
                <span class="Hscore"></span>
				<span class="score-count"></span>
			</div>
		</div>
		<div class="canvas-wrapper">
			<canvas id="game-canvas" width="320" height="400"></canvas>
		</div>
        <div class="Info">To move Ekans use:<br/>Arrown Up, Down, Left and Right</div>
		<div class="sociais">
			<a href="https://www.linkedin.com/in/mnluan/" target="_blank"><img src="./resources/img/linkedin.svg" alt="LinkedIN" class="social"></a>
			<a href="https://github.com/mnluan" target="_blank"><img src="./resources/img/github.svg" alt="GitHub" class="social"></a>
			<a href="https://mnluan.github.io/portfolio/index.html" target="_blank"><img src="./resources/img/portfolio.svg" alt="Portfolio" class="social"></a>
			<p class="text"><b>Project developed by: <br>Luan Moraes do Nascimento</b></p>
			<br>Pok&eacute;mon images and names &copy; 1995 - <?php echo date("Y") ?> Nintendo Game Freak.
		</div>
	</div>

	<script src="./resources/js/snake.js"></script>
</body>
</html>