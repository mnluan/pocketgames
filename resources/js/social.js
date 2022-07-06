let year = new Date().getFullYear();

let links = '<a href="https://www.linkedin.com/in/mnluan/" target="_blank"><img src="./resources/img/linkedin.svg" alt="LinkedIN" class="social"></a>' +
            '<a href="https://github.com/mnluan" target="_blank"><img src="./resources/img/github.svg" alt="GitHub" class="social"></a>' +
            '<a href="https://mnluan.github.io/portfolio/index.html" target="_blank"><img src="./resources/img/portfolio.svg" alt="Portfolio" class="social"></a>' +
            '<p class="text"><b>Project developed by: <br>Luan Moraes do Nascimento</b></p>';

let disclaimer = '<br>Pok&eacute;mon images and names &copy; 1995 - ' + year + ' Nintendo Game Freak.';


function write(){
    document.getElementById('social').innerHTML = links + disclaimer;
}
        
write();
     