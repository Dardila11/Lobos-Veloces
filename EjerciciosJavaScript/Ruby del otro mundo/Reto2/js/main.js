

window.onkeydown = function checkKey(key){
    var years = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019];
    var item = years[Math.floor(Math.random()*years.length)];
    if(key.keyCode == 38){ // codigo de la tecla "up"
        
        if(item == 2019){
            document.getElementById("futuro").innerHTML = "Esta noticia es del futuro!"
        }
        else{
            document.getElementById("futuro").innerHTML = ""
        }
        document.getElementById("year").innerHTML = item;
    }
}
