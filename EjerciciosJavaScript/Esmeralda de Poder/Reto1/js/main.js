function toggleText(hide){
    var text = document.getElementById("texto")

    if(hide == true){
        text.style.display = 'block';
        text.style.fontFamily = 'Bloody';
        text.style.fontSize = "30px";
    }else{
        text.style.display = 'none';
    }
    hidden = hide;
}

window.onload = function load()
{    
    toggleText(false);
}

function btnTextoGracioso(){
    hidden = !hidden
    toggleText(true)
}