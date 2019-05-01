function mostrarLlorona()
{
    document.getElementById("llorona").style.display = "inline";
    document.getElementById("politico").style.display = "none";
    document.getElementById("myAudio").play(); 
}
function mostrarPolitico()
{
    document.getElementById("politico").style.display = "inline";
    document.getElementById("llorona").style.display = "none";
    document.getElementById("myAudio").pause(); 
}
