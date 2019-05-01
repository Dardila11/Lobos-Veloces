var contador = 0;

window.onkeydown = function checkKey(key){
    var year = document.getElementById("year").innerHTML;
    var numYear = parseInt(year,10);
    if(key.keyCode == 38){ // codigo de la tecla "up"
        numYear = numYear + 1;
        console.log(numYear);
        if(numYear > 2010){
            contador++;
            console.log(contador);
            numYear = numYear + contador - 1;
            if(numYear == 2019){
                document.getElementById("futuro").innerHTML = "Esta noticia es del futuro!"
                document.getElementById("year").innerHTML = numYear;
            }
        }
        else{
            document.getElementById("futuro").innerHTML = ""
            document.getElementById("year").innerHTML = numYear;
        }
    }
}
