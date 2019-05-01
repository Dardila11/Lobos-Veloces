function insertUnicorn(){
    var newUnicorn = document.createElement("img");
    var parentDiv = document.getElementById("main");
    parentDiv.appendChild(newUnicorn);
    newUnicorn.src = "img/unicornio3.png";
    randomPosition(newUnicorn);
}
function randomPosition(img){
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var left = Math.floor((Math.random() * width) + 1)+"px";
    var top = Math.floor((Math.random() * 1000) + 1)+"px";
    var imgStyle = img.style;
    imgStyle.position = "absolute";
    imgStyle.top = top;
    imgStyle.left = left;
    imgStyle.width = "30%";
    imgStyle.height = "30%";
    
}
function btnAnimarSitio(){
    //hidden = !hidden;
    //toggleAnimation(true);
    //alert("holaaa");
    document.body.style.backgroundImage = 
    document.body.style.backgroundColor = "rgb(255, 154, 204)";
    for (let index = 0; index < 10; index++) {
        insertUnicorn();
    }
    
}