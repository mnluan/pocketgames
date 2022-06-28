function testStorage(){
    if(localStorage.High_zubat == null ){
        localStorage.High_zubat = 0;
        document.getElementById("score1").innerHTML = `High Score: ${localStorage.High_zubat}`;
    }else{
        document.getElementById("score1").innerHTML = `High Score: ${localStorage.High_zubat}`;
    }

    if(localStorage.High == null ){
        localStorage.High = 0;
        document.getElementById("score2").innerHTML = `High Score: ${localStorage.High}`;
    }else{
        document.getElementById("score2").innerHTML = `High Score: ${localStorage.High}`;
    }

    if(localStorage.High_snake == null ){
        localStorage.High_snake = 0;
        document.getElementById("score3").innerHTML = `High Score: ${localStorage.High_snake}`;
    }else{
        document.getElementById("score3").innerHTML = `High Score: ${localStorage.High_snake}`;
    }
}

testStorage();