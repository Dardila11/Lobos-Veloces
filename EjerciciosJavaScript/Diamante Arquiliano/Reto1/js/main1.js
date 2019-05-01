function moveElements(idImg, lastPos){
    let img = document.getElementById(idImg);
    let posicion = lastPos;
    var contador = 0;
    let id = setInterval(frame,5);
    let flag = false;
    function frame(){
        if(posicion == 450){
            flag = true;    
        }
        else if(posicion == 200){
            flag = false;
        }
        flag ? posicion -- : posicion ++;
        contador++;
        if(idImg === "paloma"){
            img.style.left = posicion + "px";
            img.style.right = posicion + "px";
        }
        if(idImg === "petro"){
            img.style.top = posicion + "px";
            img.style.bottom = posicion + "px";
        }
        if(idImg === "uribe"){
            img.style.top = posicion + "px";
            img.style.left = posicion + "px";
        }
        
    }
    
}

function btnAnimarImagenes(){
    var posPaloma = 200;
    var posPetro = 200;
    var posUribe = 200;
    
    posPetro = moveElements("petro",posPetro);
    posPaloma = moveElements("paloma",posPaloma);
    posUribe = moveElements("uribe",posUribe);
    
}